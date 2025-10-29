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
var wc = { exports: {} },
  Co = {},
  bc = { exports: {} },
  Ee = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xs = Symbol.for("react.element"),
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
  ii = Symbol.iterator;
function pf(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ii && e[ii]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Nc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  jc = Object.assign,
  Sc = {};
function _r(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Sc),
    (this.updater = n || Nc);
}
_r.prototype.isReactComponent = {};
_r.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
_r.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Cc() {}
Cc.prototype = _r.prototype;
function da(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Sc),
    (this.updater = n || Nc);
}
var fa = (da.prototype = new Cc());
fa.constructor = da;
jc(fa, _r.prototype);
fa.isPureReactComponent = !0;
var ci = Array.isArray,
  kc = Object.prototype.hasOwnProperty,
  pa = { current: null },
  _c = { key: !0, ref: !0, __self: !0, __source: !0 };
function Dc(e, t, n) {
  var r,
    o = {},
    l = null,
    a = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (l = "" + t.key),
    t))
      kc.call(t, r) && !_c.hasOwnProperty(r) && (o[r] = t[r]);
  var i = arguments.length - 2;
  if (i === 1) o.children = n;
  else if (1 < i) {
    for (var c = Array(i), h = 0; h < i; h++) c[h] = arguments[h + 2];
    o.children = c;
  }
  if (e && e.defaultProps)
    for (r in ((i = e.defaultProps), i)) o[r] === void 0 && (o[r] = i[r]);
  return {
    $$typeof: xs,
    type: e,
    key: l,
    ref: a,
    props: o,
    _owner: pa.current,
  };
}
function mf(e, t) {
  return {
    $$typeof: xs,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ma(e) {
  return typeof e == "object" && e !== null && e.$$typeof === xs;
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
var ui = /\/+/g;
function Ho(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? hf("" + e.key)
    : t.toString(36);
}
function Bs(e, t, n, r, o) {
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
          case xs:
          case nf:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (o = o(a)),
      (e = r === "" ? "." + Ho(a, 0) : r),
      ci(o)
        ? ((n = ""),
          e != null && (n = e.replace(ui, "$&/") + "/"),
          Bs(o, t, n, "", function (h) {
            return h;
          }))
        : o != null &&
          (ma(o) &&
            (o = mf(
              o,
              n +
                (!o.key || (a && a.key === o.key)
                  ? ""
                  : ("" + o.key).replace(ui, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((a = 0), (r = r === "" ? "." : r + ":"), ci(e)))
    for (var i = 0; i < e.length; i++) {
      l = e[i];
      var c = r + Ho(l, i);
      a += Bs(l, t, n, c, o);
    }
  else if (((c = pf(e)), typeof c == "function"))
    for (e = c.call(e), i = 0; !(l = e.next()).done; )
      (l = l.value), (c = r + Ho(l, i++)), (a += Bs(l, t, n, c, o));
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
function js(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Bs(e, r, "", "", function (l) {
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
var dt = { current: null },
  Gs = { transition: null },
  xf = {
    ReactCurrentDispatcher: dt,
    ReactCurrentBatchConfig: Gs,
    ReactCurrentOwner: pa,
  };
function Mc() {
  throw Error("act(...) is not supported in production builds of React.");
}
Ee.Children = {
  map: js,
  forEach: function (e, t, n) {
    js(
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
      js(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      js(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ma(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
Ee.Component = _r;
Ee.Fragment = rf;
Ee.Profiler = of;
Ee.PureComponent = da;
Ee.StrictMode = sf;
Ee.Suspense = uf;
Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xf;
Ee.act = Mc;
Ee.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = jc({}, e.props),
    o = e.key,
    l = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((l = t.ref), (a = pa.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var i = e.type.defaultProps;
    for (c in t)
      kc.call(t, c) &&
        !_c.hasOwnProperty(c) &&
        (r[c] = t[c] === void 0 && i !== void 0 ? i[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) r.children = n;
  else if (1 < c) {
    i = Array(c);
    for (var h = 0; h < c; h++) i[h] = arguments[h + 2];
    r.children = i;
  }
  return { $$typeof: xs, type: e.type, key: o, ref: l, props: r, _owner: a };
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
Ee.createElement = Dc;
Ee.createFactory = function (e) {
  var t = Dc.bind(null, e);
  return (t.type = e), t;
};
Ee.createRef = function () {
  return { current: null };
};
Ee.forwardRef = function (e) {
  return { $$typeof: cf, render: e };
};
Ee.isValidElement = ma;
Ee.lazy = function (e) {
  return { $$typeof: ff, _payload: { _status: -1, _result: e }, _init: gf };
};
Ee.memo = function (e, t) {
  return { $$typeof: df, type: e, compare: t === void 0 ? null : t };
};
Ee.startTransition = function (e) {
  var t = Gs.transition;
  Gs.transition = {};
  try {
    e();
  } finally {
    Gs.transition = t;
  }
};
Ee.unstable_act = Mc;
Ee.useCallback = function (e, t) {
  return dt.current.useCallback(e, t);
};
Ee.useContext = function (e) {
  return dt.current.useContext(e);
};
Ee.useDebugValue = function () {};
Ee.useDeferredValue = function (e) {
  return dt.current.useDeferredValue(e);
};
Ee.useEffect = function (e, t) {
  return dt.current.useEffect(e, t);
};
Ee.useId = function () {
  return dt.current.useId();
};
Ee.useImperativeHandle = function (e, t, n) {
  return dt.current.useImperativeHandle(e, t, n);
};
Ee.useInsertionEffect = function (e, t) {
  return dt.current.useInsertionEffect(e, t);
};
Ee.useLayoutEffect = function (e, t) {
  return dt.current.useLayoutEffect(e, t);
};
Ee.useMemo = function (e, t) {
  return dt.current.useMemo(e, t);
};
Ee.useReducer = function (e, t, n) {
  return dt.current.useReducer(e, t, n);
};
Ee.useRef = function (e) {
  return dt.current.useRef(e);
};
Ee.useState = function (e) {
  return dt.current.useState(e);
};
Ee.useSyncExternalStore = function (e, t, n) {
  return dt.current.useSyncExternalStore(e, t, n);
};
Ee.useTransition = function () {
  return dt.current.useTransition();
};
Ee.version = "18.3.1";
bc.exports = Ee;
var m = bc.exports;
const Zs = tf(m);
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
function Ec(e, t, n) {
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
Co.Fragment = wf;
Co.jsx = Ec;
Co.jsxs = Ec;
wc.exports = Co;
var s = wc.exports,
  Pc = { exports: {} },
  Ct = {},
  Ic = { exports: {} },
  Rc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(k, Q) {
    var de = k.length;
    k.push(Q);
    e: for (; 0 < de; ) {
      var X = (de - 1) >>> 1,
        ne = k[X];
      if (0 < o(ne, Q)) (k[X] = Q), (k[de] = ne), (de = X);
      else break e;
    }
  }
  function n(k) {
    return k.length === 0 ? null : k[0];
  }
  function r(k) {
    if (k.length === 0) return null;
    var Q = k[0],
      de = k.pop();
    if (de !== Q) {
      k[0] = de;
      e: for (var X = 0, ne = k.length, je = ne >>> 1; X < je; ) {
        var oe = 2 * (X + 1) - 1,
          ve = k[oe],
          $ = oe + 1,
          le = k[$];
        if (0 > o(ve, de))
          $ < ne && 0 > o(le, ve)
            ? ((k[X] = le), (k[$] = de), (X = $))
            : ((k[X] = ve), (k[oe] = de), (X = oe));
        else if ($ < ne && 0 > o(le, de)) (k[X] = le), (k[$] = de), (X = $);
        else break e;
      }
    }
    return Q;
  }
  function o(k, Q) {
    var de = k.sortIndex - Q.sortIndex;
    return de !== 0 ? de : k.id - Q.id;
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
    w = !1,
    v = !1,
    b = !1,
    _ = typeof setTimeout == "function" ? setTimeout : null,
    u = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function x(k) {
    for (var Q = n(h); Q !== null; ) {
      if (Q.callback === null) r(h);
      else if (Q.startTime <= k)
        r(h), (Q.sortIndex = Q.expirationTime), t(c, Q);
      else break;
      Q = n(h);
    }
  }
  function j(k) {
    if (((b = !1), x(k), !v))
      if (n(c) !== null) (v = !0), M(L);
      else {
        var Q = n(h);
        Q !== null && F(j, Q.startTime - k);
      }
  }
  function L(k, Q) {
    (v = !1), b && ((b = !1), u(N), (N = -1)), (w = !0);
    var de = p;
    try {
      for (
        x(Q), g = n(c);
        g !== null && (!(g.expirationTime > Q) || (k && !O()));

      ) {
        var X = g.callback;
        if (typeof X == "function") {
          (g.callback = null), (p = g.priorityLevel);
          var ne = X(g.expirationTime <= Q);
          (Q = e.unstable_now()),
            typeof ne == "function" ? (g.callback = ne) : g === n(c) && r(c),
            x(Q);
        } else r(c);
        g = n(c);
      }
      if (g !== null) var je = !0;
      else {
        var oe = n(h);
        oe !== null && F(j, oe.startTime - Q), (je = !1);
      }
      return je;
    } finally {
      (g = null), (p = de), (w = !1);
    }
  }
  var P = !1,
    R = null,
    N = -1,
    I = 5,
    S = -1;
  function O() {
    return !(e.unstable_now() - S < I);
  }
  function G() {
    if (R !== null) {
      var k = e.unstable_now();
      S = k;
      var Q = !0;
      try {
        Q = R(!0, k);
      } finally {
        Q ? E() : ((P = !1), (R = null));
      }
    } else P = !1;
  }
  var E;
  if (typeof f == "function")
    E = function () {
      f(G);
    };
  else if (typeof MessageChannel < "u") {
    var C = new MessageChannel(),
      Z = C.port2;
    (C.port1.onmessage = G),
      (E = function () {
        Z.postMessage(null);
      });
  } else
    E = function () {
      _(G, 0);
    };
  function M(k) {
    (R = k), P || ((P = !0), E());
  }
  function F(k, Q) {
    N = _(function () {
      k(e.unstable_now());
    }, Q);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (k) {
      k.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || w || ((v = !0), M(L));
    }),
    (e.unstable_forceFrameRate = function (k) {
      0 > k || 125 < k
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (I = 0 < k ? Math.floor(1e3 / k) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(c);
    }),
    (e.unstable_next = function (k) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var Q = 3;
          break;
        default:
          Q = p;
      }
      var de = p;
      p = Q;
      try {
        return k();
      } finally {
        p = de;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (k, Q) {
      switch (k) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          k = 3;
      }
      var de = p;
      p = k;
      try {
        return Q();
      } finally {
        p = de;
      }
    }),
    (e.unstable_scheduleCallback = function (k, Q, de) {
      var X = e.unstable_now();
      switch (
        (typeof de == "object" && de !== null
          ? ((de = de.delay),
            (de = typeof de == "number" && 0 < de ? X + de : X))
          : (de = X),
        k)
      ) {
        case 1:
          var ne = -1;
          break;
        case 2:
          ne = 250;
          break;
        case 5:
          ne = 1073741823;
          break;
        case 4:
          ne = 1e4;
          break;
        default:
          ne = 5e3;
      }
      return (
        (ne = de + ne),
        (k = {
          id: d++,
          callback: Q,
          priorityLevel: k,
          startTime: de,
          expirationTime: ne,
          sortIndex: -1,
        }),
        de > X
          ? ((k.sortIndex = de),
            t(h, k),
            n(c) === null &&
              k === n(h) &&
              (b ? (u(N), (N = -1)) : (b = !0), F(j, de - X)))
          : ((k.sortIndex = ne), t(c, k), v || w || ((v = !0), M(L))),
        k
      );
    }),
    (e.unstable_shouldYield = O),
    (e.unstable_wrapCallback = function (k) {
      var Q = p;
      return function () {
        var de = p;
        p = Q;
        try {
          return k.apply(this, arguments);
        } finally {
          p = de;
        }
      };
    });
})(Rc);
Ic.exports = Rc;
var Sf = Ic.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Cf = m,
  St = Sf;
function J(e) {
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
var Tc = new Set(),
  es = {};
function Vn(e, t) {
  vr(e, t), vr(e + "Capture", t);
}
function vr(e, t) {
  for (es[e] = t, e = 0; e < t.length; e++) Tc.add(t[e]);
}
var on = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  yl = Object.prototype.hasOwnProperty,
  kf =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  di = {},
  fi = {};
function _f(e) {
  return yl.call(fi, e)
    ? !0
    : yl.call(di, e)
    ? !1
    : kf.test(e)
    ? (fi[e] = !0)
    : ((di[e] = !0), !1);
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
function ft(e, t, n, r, o, l, a) {
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
    rt[e] = new ft(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  rt[t] = new ft(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  rt[e] = new ft(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  rt[e] = new ft(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    rt[e] = new ft(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  rt[e] = new ft(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  rt[e] = new ft(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  rt[e] = new ft(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  rt[e] = new ft(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ha = /[\-:]([a-z])/g;
function ga(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ha, ga);
    rt[t] = new ft(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ha, ga);
    rt[t] = new ft(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ha, ga);
  rt[t] = new ft(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  rt[e] = new ft(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
rt.xlinkHref = new ft(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  rt[e] = new ft(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function xa(e, t, n, r) {
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
var un = Cf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ss = Symbol.for("react.element"),
  tr = Symbol.for("react.portal"),
  nr = Symbol.for("react.fragment"),
  ya = Symbol.for("react.strict_mode"),
  vl = Symbol.for("react.profiler"),
  Ac = Symbol.for("react.provider"),
  Oc = Symbol.for("react.context"),
  va = Symbol.for("react.forward_ref"),
  wl = Symbol.for("react.suspense"),
  bl = Symbol.for("react.suspense_list"),
  wa = Symbol.for("react.memo"),
  pn = Symbol.for("react.lazy"),
  $c = Symbol.for("react.offscreen"),
  pi = Symbol.iterator;
function Rr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (pi && e[pi]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Fe = Object.assign,
  Vo;
function Br(e) {
  if (Vo === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Vo = (t && t[1]) || "";
    }
  return (
    `
` +
    Vo +
    e
  );
}
var Wo = !1;
function Qo(e, t) {
  if (!e || Wo) return "";
  Wo = !0;
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
    (Wo = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Br(e) : "";
}
function Ef(e) {
  switch (e.tag) {
    case 5:
      return Br(e.type);
    case 16:
      return Br("Lazy");
    case 13:
      return Br("Suspense");
    case 19:
      return Br("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Qo(e.type, !1)), e;
    case 11:
      return (e = Qo(e.type.render, !1)), e;
    case 1:
      return (e = Qo(e.type, !0)), e;
    default:
      return "";
  }
}
function Nl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case nr:
      return "Fragment";
    case tr:
      return "Portal";
    case vl:
      return "Profiler";
    case ya:
      return "StrictMode";
    case wl:
      return "Suspense";
    case bl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Oc:
        return (e.displayName || "Context") + ".Consumer";
      case Ac:
        return (e._context.displayName || "Context") + ".Provider";
      case va:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case wa:
        return (
          (t = e.displayName || null), t !== null ? t : Nl(e.type) || "Memo"
        );
      case pn:
        (t = e._payload), (e = e._init);
        try {
          return Nl(e(t));
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
      return Nl(t);
    case 8:
      return t === ya ? "StrictMode" : "Mode";
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
function _n(e) {
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
function Lc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function If(e) {
  var t = Lc(e) ? "checked" : "value",
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
function Cs(e) {
  e._valueTracker || (e._valueTracker = If(e));
}
function Uc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Lc(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function eo(e) {
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
  return Fe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function mi(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = _n(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function zc(e, t) {
  (t = t.checked), t != null && xa(e, "checked", t, !1);
}
function Sl(e, t) {
  zc(e, t);
  var n = _n(t.value),
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
    ? Cl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Cl(e, t.type, _n(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function hi(e, t, n) {
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
function Cl(e, t, n) {
  (t !== "number" || eo(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Gr = Array.isArray;
function pr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + _n(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function kl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(J(91));
  return Fe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function gi(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(J(92));
      if (Gr(n)) {
        if (1 < n.length) throw Error(J(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: _n(n) };
}
function Bc(e, t) {
  var n = _n(t.value),
    r = _n(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function xi(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Gc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function _l(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Gc(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var ks,
  Fc = (function (e) {
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
function ts(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Vr = {
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
Object.keys(Vr).forEach(function (e) {
  Rf.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Vr[t] = Vr[e]);
  });
});
function Hc(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Vr.hasOwnProperty(e) && Vr[e])
    ? ("" + t).trim()
    : t + "px";
}
function Vc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = Hc(n, t[n], r);
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
function Dl(e, t) {
  if (t) {
    if (Tf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(J(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(J(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(J(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(J(62));
  }
}
function Ml(e, t) {
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
var El = null;
function ba(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Pl = null,
  mr = null,
  hr = null;
function yi(e) {
  if ((e = ws(e))) {
    if (typeof Pl != "function") throw Error(J(280));
    var t = e.stateNode;
    t && ((t = Eo(t)), Pl(e.stateNode, e.type, t));
  }
}
function Wc(e) {
  mr ? (hr ? hr.push(e) : (hr = [e])) : (mr = e);
}
function Qc() {
  if (mr) {
    var e = mr,
      t = hr;
    if (((hr = mr = null), yi(e), t)) for (e = 0; e < t.length; e++) yi(t[e]);
  }
}
function Yc(e, t) {
  return e(t);
}
function qc() {}
var Yo = !1;
function Xc(e, t, n) {
  if (Yo) return e(t, n);
  Yo = !0;
  try {
    return Yc(e, t, n);
  } finally {
    (Yo = !1), (mr !== null || hr !== null) && (qc(), Qc());
  }
}
function ns(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Eo(n);
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
  if (n && typeof n != "function") throw Error(J(231, t, typeof n));
  return n;
}
var Il = !1;
if (on)
  try {
    var Tr = {};
    Object.defineProperty(Tr, "passive", {
      get: function () {
        Il = !0;
      },
    }),
      window.addEventListener("test", Tr, Tr),
      window.removeEventListener("test", Tr, Tr);
  } catch {
    Il = !1;
  }
function Af(e, t, n, r, o, l, a, i, c) {
  var h = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, h);
  } catch (d) {
    this.onError(d);
  }
}
var Wr = !1,
  to = null,
  no = !1,
  Rl = null,
  Of = {
    onError: function (e) {
      (Wr = !0), (to = e);
    },
  };
function $f(e, t, n, r, o, l, a, i, c) {
  (Wr = !1), (to = null), Af.apply(Of, arguments);
}
function Lf(e, t, n, r, o, l, a, i, c) {
  if (($f.apply(this, arguments), Wr)) {
    if (Wr) {
      var h = to;
      (Wr = !1), (to = null);
    } else throw Error(J(198));
    no || ((no = !0), (Rl = h));
  }
}
function Wn(e) {
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
function Kc(e) {
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
function vi(e) {
  if (Wn(e) !== e) throw Error(J(188));
}
function Uf(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Wn(e)), t === null)) throw Error(J(188));
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
        if (l === n) return vi(o), e;
        if (l === r) return vi(o), t;
        l = l.sibling;
      }
      throw Error(J(188));
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
        if (!a) throw Error(J(189));
      }
    }
    if (n.alternate !== r) throw Error(J(190));
  }
  if (n.tag !== 3) throw Error(J(188));
  return n.stateNode.current === n ? e : t;
}
function Jc(e) {
  return (e = Uf(e)), e !== null ? Zc(e) : null;
}
function Zc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Zc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var eu = St.unstable_scheduleCallback,
  wi = St.unstable_cancelCallback,
  zf = St.unstable_shouldYield,
  Bf = St.unstable_requestPaint,
  We = St.unstable_now,
  Gf = St.unstable_getCurrentPriorityLevel,
  Na = St.unstable_ImmediatePriority,
  tu = St.unstable_UserBlockingPriority,
  ro = St.unstable_NormalPriority,
  Ff = St.unstable_LowPriority,
  nu = St.unstable_IdlePriority,
  ko = null,
  Kt = null;
function Hf(e) {
  if (Kt && typeof Kt.onCommitFiberRoot == "function")
    try {
      Kt.onCommitFiberRoot(ko, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Gt = Math.clz32 ? Math.clz32 : Qf,
  Vf = Math.log,
  Wf = Math.LN2;
function Qf(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Vf(e) / Wf) | 0)) | 0;
}
var _s = 64,
  Ds = 4194304;
function Fr(e) {
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
function so(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    l = e.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var i = a & ~o;
    i !== 0 ? (r = Fr(i)) : ((l &= a), l !== 0 && (r = Fr(l)));
  } else (a = n & ~o), a !== 0 ? (r = Fr(a)) : l !== 0 && (r = Fr(l));
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
      (n = 31 - Gt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function Yf(e, t) {
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
function qf(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      l = e.pendingLanes;
    0 < l;

  ) {
    var a = 31 - Gt(l),
      i = 1 << a,
      c = o[a];
    c === -1
      ? (!(i & n) || i & r) && (o[a] = Yf(i, t))
      : c <= t && (e.expiredLanes |= i),
      (l &= ~i);
  }
}
function Tl(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function ru() {
  var e = _s;
  return (_s <<= 1), !(_s & 4194240) && (_s = 64), e;
}
function qo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ys(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Gt(t)),
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
    var o = 31 - Gt(n),
      l = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~l);
  }
}
function ja(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Gt(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var Te = 0;
function su(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var ou,
  Sa,
  lu,
  au,
  iu,
  Al = !1,
  Ms = [],
  vn = null,
  wn = null,
  bn = null,
  rs = new Map(),
  ss = new Map(),
  hn = [],
  Kf =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function bi(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      vn = null;
      break;
    case "dragenter":
    case "dragleave":
      wn = null;
      break;
    case "mouseover":
    case "mouseout":
      bn = null;
      break;
    case "pointerover":
    case "pointerout":
      rs.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ss.delete(t.pointerId);
  }
}
function Ar(e, t, n, r, o, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: l,
        targetContainers: [o],
      }),
      t !== null && ((t = ws(t)), t !== null && Sa(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function Jf(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (vn = Ar(vn, e, t, n, r, o)), !0;
    case "dragenter":
      return (wn = Ar(wn, e, t, n, r, o)), !0;
    case "mouseover":
      return (bn = Ar(bn, e, t, n, r, o)), !0;
    case "pointerover":
      var l = o.pointerId;
      return rs.set(l, Ar(rs.get(l) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (l = o.pointerId), ss.set(l, Ar(ss.get(l) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function cu(e) {
  var t = An(e.target);
  if (t !== null) {
    var n = Wn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Kc(n)), t !== null)) {
          (e.blockedOn = t),
            iu(e.priority, function () {
              lu(n);
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
function Fs(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ol(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (El = r), n.target.dispatchEvent(r), (El = null);
    } else return (t = ws(n)), t !== null && Sa(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Ni(e, t, n) {
  Fs(e) && n.delete(t);
}
function Zf() {
  (Al = !1),
    vn !== null && Fs(vn) && (vn = null),
    wn !== null && Fs(wn) && (wn = null),
    bn !== null && Fs(bn) && (bn = null),
    rs.forEach(Ni),
    ss.forEach(Ni);
}
function Or(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Al ||
      ((Al = !0),
      St.unstable_scheduleCallback(St.unstable_NormalPriority, Zf)));
}
function os(e) {
  function t(o) {
    return Or(o, e);
  }
  if (0 < Ms.length) {
    Or(Ms[0], e);
    for (var n = 1; n < Ms.length; n++) {
      var r = Ms[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    vn !== null && Or(vn, e),
      wn !== null && Or(wn, e),
      bn !== null && Or(bn, e),
      rs.forEach(t),
      ss.forEach(t),
      n = 0;
    n < hn.length;
    n++
  )
    (r = hn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < hn.length && ((n = hn[0]), n.blockedOn === null); )
    cu(n), n.blockedOn === null && hn.shift();
}
var gr = un.ReactCurrentBatchConfig,
  oo = !0;
function ep(e, t, n, r) {
  var o = Te,
    l = gr.transition;
  gr.transition = null;
  try {
    (Te = 1), Ca(e, t, n, r);
  } finally {
    (Te = o), (gr.transition = l);
  }
}
function tp(e, t, n, r) {
  var o = Te,
    l = gr.transition;
  gr.transition = null;
  try {
    (Te = 4), Ca(e, t, n, r);
  } finally {
    (Te = o), (gr.transition = l);
  }
}
function Ca(e, t, n, r) {
  if (oo) {
    var o = Ol(e, t, n, r);
    if (o === null) ol(e, t, r, lo, n), bi(e, r);
    else if (Jf(o, e, t, n, r)) r.stopPropagation();
    else if ((bi(e, r), t & 4 && -1 < Kf.indexOf(e))) {
      for (; o !== null; ) {
        var l = ws(o);
        if (
          (l !== null && ou(l),
          (l = Ol(e, t, n, r)),
          l === null && ol(e, t, r, lo, n),
          l === o)
        )
          break;
        o = l;
      }
      o !== null && r.stopPropagation();
    } else ol(e, t, r, null, n);
  }
}
var lo = null;
function Ol(e, t, n, r) {
  if (((lo = null), (e = ba(r)), (e = An(e)), e !== null))
    if (((t = Wn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Kc(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (lo = e), null;
}
function uu(e) {
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
        case Na:
          return 1;
        case tu:
          return 4;
        case ro:
        case Ff:
          return 16;
        case nu:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var xn = null,
  ka = null,
  Hs = null;
function du() {
  if (Hs) return Hs;
  var e,
    t = ka,
    n = t.length,
    r,
    o = "value" in xn ? xn.value : xn.textContent,
    l = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === o[l - r]; r++);
  return (Hs = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Vs(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Es() {
  return !0;
}
function ji() {
  return !1;
}
function kt(e) {
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
        ? Es
        : ji),
      (this.isPropagationStopped = ji),
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
          (this.isDefaultPrevented = Es));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Es));
      },
      persist: function () {},
      isPersistent: Es,
    }),
    t
  );
}
var Dr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  _a = kt(Dr),
  vs = Fe({}, Dr, { view: 0, detail: 0 }),
  np = kt(vs),
  Xo,
  Ko,
  $r,
  _o = Fe({}, vs, {
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
    getModifierState: Da,
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
        : (e !== $r &&
            ($r && e.type === "mousemove"
              ? ((Xo = e.screenX - $r.screenX), (Ko = e.screenY - $r.screenY))
              : (Ko = Xo = 0),
            ($r = e)),
          Xo);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Ko;
    },
  }),
  Si = kt(_o),
  rp = Fe({}, _o, { dataTransfer: 0 }),
  sp = kt(rp),
  op = Fe({}, vs, { relatedTarget: 0 }),
  Jo = kt(op),
  lp = Fe({}, Dr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  ap = kt(lp),
  ip = Fe({}, Dr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  cp = kt(ip),
  up = Fe({}, Dr, { data: 0 }),
  Ci = kt(up),
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
function Da() {
  return mp;
}
var hp = Fe({}, vs, {
    key: function (e) {
      if (e.key) {
        var t = dp[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Vs(e)), e === 13 ? "Enter" : String.fromCharCode(e))
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
    getModifierState: Da,
    charCode: function (e) {
      return e.type === "keypress" ? Vs(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Vs(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  gp = kt(hp),
  xp = Fe({}, _o, {
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
  ki = kt(xp),
  yp = Fe({}, vs, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Da,
  }),
  vp = kt(yp),
  wp = Fe({}, Dr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  bp = kt(wp),
  Np = Fe({}, _o, {
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
  jp = kt(Np),
  Sp = [9, 13, 27, 32],
  Ma = on && "CompositionEvent" in window,
  Qr = null;
on && "documentMode" in document && (Qr = document.documentMode);
var Cp = on && "TextEvent" in window && !Qr,
  fu = on && (!Ma || (Qr && 8 < Qr && 11 >= Qr)),
  _i = " ",
  Di = !1;
function pu(e, t) {
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
function mu(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var rr = !1;
function kp(e, t) {
  switch (e) {
    case "compositionend":
      return mu(t);
    case "keypress":
      return t.which !== 32 ? null : ((Di = !0), _i);
    case "textInput":
      return (e = t.data), e === _i && Di ? null : e;
    default:
      return null;
  }
}
function _p(e, t) {
  if (rr)
    return e === "compositionend" || (!Ma && pu(e, t))
      ? ((e = du()), (Hs = ka = xn = null), (rr = !1), e)
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
      return fu && t.locale !== "ko" ? null : t.data;
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
function Mi(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Dp[e.type] : t === "textarea";
}
function hu(e, t, n, r) {
  Wc(r),
    (t = ao(t, "onChange")),
    0 < t.length &&
      ((n = new _a("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Yr = null,
  ls = null;
function Mp(e) {
  ku(e, 0);
}
function Do(e) {
  var t = lr(e);
  if (Uc(t)) return e;
}
function Ep(e, t) {
  if (e === "change") return t;
}
var gu = !1;
if (on) {
  var Zo;
  if (on) {
    var el = "oninput" in document;
    if (!el) {
      var Ei = document.createElement("div");
      Ei.setAttribute("oninput", "return;"),
        (el = typeof Ei.oninput == "function");
    }
    Zo = el;
  } else Zo = !1;
  gu = Zo && (!document.documentMode || 9 < document.documentMode);
}
function Pi() {
  Yr && (Yr.detachEvent("onpropertychange", xu), (ls = Yr = null));
}
function xu(e) {
  if (e.propertyName === "value" && Do(ls)) {
    var t = [];
    hu(t, ls, e, ba(e)), Xc(Mp, t);
  }
}
function Pp(e, t, n) {
  e === "focusin"
    ? (Pi(), (Yr = t), (ls = n), Yr.attachEvent("onpropertychange", xu))
    : e === "focusout" && Pi();
}
function Ip(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Do(ls);
}
function Rp(e, t) {
  if (e === "click") return Do(t);
}
function Tp(e, t) {
  if (e === "input" || e === "change") return Do(t);
}
function Ap(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ht = typeof Object.is == "function" ? Object.is : Ap;
function as(e, t) {
  if (Ht(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!yl.call(t, o) || !Ht(e[o], t[o])) return !1;
  }
  return !0;
}
function Ii(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ri(e, t) {
  var n = Ii(e);
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
    n = Ii(n);
  }
}
function yu(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? yu(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function vu() {
  for (var e = window, t = eo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = eo(e.document);
  }
  return t;
}
function Ea(e) {
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
  var t = vu(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    yu(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Ea(n)) {
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
          (o = Ri(n, l));
        var a = Ri(n, r);
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
var $p = on && "documentMode" in document && 11 >= document.documentMode,
  sr = null,
  $l = null,
  qr = null,
  Ll = !1;
function Ti(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ll ||
    sr == null ||
    sr !== eo(r) ||
    ((r = sr),
    "selectionStart" in r && Ea(r)
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
    (qr && as(qr, r)) ||
      ((qr = r),
      (r = ao($l, "onSelect")),
      0 < r.length &&
        ((t = new _a("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = sr))));
}
function Ps(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var or = {
    animationend: Ps("Animation", "AnimationEnd"),
    animationiteration: Ps("Animation", "AnimationIteration"),
    animationstart: Ps("Animation", "AnimationStart"),
    transitionend: Ps("Transition", "TransitionEnd"),
  },
  tl = {},
  wu = {};
on &&
  ((wu = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete or.animationend.animation,
    delete or.animationiteration.animation,
    delete or.animationstart.animation),
  "TransitionEvent" in window || delete or.transitionend.transition);
function Mo(e) {
  if (tl[e]) return tl[e];
  if (!or[e]) return e;
  var t = or[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in wu) return (tl[e] = t[n]);
  return e;
}
var bu = Mo("animationend"),
  Nu = Mo("animationiteration"),
  ju = Mo("animationstart"),
  Su = Mo("transitionend"),
  Cu = new Map(),
  Ai =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Mn(e, t) {
  Cu.set(e, t), Vn(t, [e]);
}
for (var nl = 0; nl < Ai.length; nl++) {
  var rl = Ai[nl],
    Lp = rl.toLowerCase(),
    Up = rl[0].toUpperCase() + rl.slice(1);
  Mn(Lp, "on" + Up);
}
Mn(bu, "onAnimationEnd");
Mn(Nu, "onAnimationIteration");
Mn(ju, "onAnimationStart");
Mn("dblclick", "onDoubleClick");
Mn("focusin", "onFocus");
Mn("focusout", "onBlur");
Mn(Su, "onTransitionEnd");
vr("onMouseEnter", ["mouseout", "mouseover"]);
vr("onMouseLeave", ["mouseout", "mouseover"]);
vr("onPointerEnter", ["pointerout", "pointerover"]);
vr("onPointerLeave", ["pointerout", "pointerover"]);
Vn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Vn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Vn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Vn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Vn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Vn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Hr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  zp = new Set("cancel close invalid load scroll toggle".split(" ").concat(Hr));
function Oi(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Lf(r, t, void 0, e), (e.currentTarget = null);
}
function ku(e, t) {
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
          Oi(o, i, h), (l = c);
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
          Oi(o, i, h), (l = c);
        }
    }
  }
  if (no) throw ((e = Rl), (no = !1), (Rl = null), e);
}
function $e(e, t) {
  var n = t[Fl];
  n === void 0 && (n = t[Fl] = new Set());
  var r = e + "__bubble";
  n.has(r) || (_u(t, e, 2, !1), n.add(r));
}
function sl(e, t, n) {
  var r = 0;
  t && (r |= 4), _u(n, e, r, t);
}
var Is = "_reactListening" + Math.random().toString(36).slice(2);
function is(e) {
  if (!e[Is]) {
    (e[Is] = !0),
      Tc.forEach(function (n) {
        n !== "selectionchange" && (zp.has(n) || sl(n, !1, e), sl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Is] || ((t[Is] = !0), sl("selectionchange", !1, t));
  }
}
function _u(e, t, n, r) {
  switch (uu(t)) {
    case 1:
      var o = ep;
      break;
    case 4:
      o = tp;
      break;
    default:
      o = Ca;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Il ||
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
function ol(e, t, n, r, o) {
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
          if (((a = An(i)), a === null)) return;
          if (((c = a.tag), c === 5 || c === 6)) {
            r = l = a;
            continue e;
          }
          i = i.parentNode;
        }
      }
      r = r.return;
    }
  Xc(function () {
    var h = l,
      d = ba(n),
      g = [];
    e: {
      var p = Cu.get(e);
      if (p !== void 0) {
        var w = _a,
          v = e;
        switch (e) {
          case "keypress":
            if (Vs(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = gp;
            break;
          case "focusin":
            (v = "focus"), (w = Jo);
            break;
          case "focusout":
            (v = "blur"), (w = Jo);
            break;
          case "beforeblur":
          case "afterblur":
            w = Jo;
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
            w = Si;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = sp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = vp;
            break;
          case bu:
          case Nu:
          case ju:
            w = ap;
            break;
          case Su:
            w = bp;
            break;
          case "scroll":
            w = np;
            break;
          case "wheel":
            w = jp;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = cp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = ki;
        }
        var b = (t & 4) !== 0,
          _ = !b && e === "scroll",
          u = b ? (p !== null ? p + "Capture" : null) : p;
        b = [];
        for (var f = h, x; f !== null; ) {
          x = f;
          var j = x.stateNode;
          if (
            (x.tag === 5 &&
              j !== null &&
              ((x = j),
              u !== null && ((j = ns(f, u)), j != null && b.push(cs(f, j, x)))),
            _)
          )
            break;
          f = f.return;
        }
        0 < b.length &&
          ((p = new w(p, v, null, n, d)), g.push({ event: p, listeners: b }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (w = e === "mouseout" || e === "pointerout"),
          p &&
            n !== El &&
            (v = n.relatedTarget || n.fromElement) &&
            (An(v) || v[ln]))
        )
          break e;
        if (
          (w || p) &&
          ((p =
            d.window === d
              ? d
              : (p = d.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          w
            ? ((v = n.relatedTarget || n.toElement),
              (w = h),
              (v = v ? An(v) : null),
              v !== null &&
                ((_ = Wn(v)), v !== _ || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((w = null), (v = h)),
          w !== v)
        ) {
          if (
            ((b = Si),
            (j = "onMouseLeave"),
            (u = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((b = ki),
              (j = "onPointerLeave"),
              (u = "onPointerEnter"),
              (f = "pointer")),
            (_ = w == null ? p : lr(w)),
            (x = v == null ? p : lr(v)),
            (p = new b(j, f + "leave", w, n, d)),
            (p.target = _),
            (p.relatedTarget = x),
            (j = null),
            An(d) === h &&
              ((b = new b(u, f + "enter", v, n, d)),
              (b.target = x),
              (b.relatedTarget = _),
              (j = b)),
            (_ = j),
            w && v)
          )
            t: {
              for (b = w, u = v, f = 0, x = b; x; x = er(x)) f++;
              for (x = 0, j = u; j; j = er(j)) x++;
              for (; 0 < f - x; ) (b = er(b)), f--;
              for (; 0 < x - f; ) (u = er(u)), x--;
              for (; f--; ) {
                if (b === u || (u !== null && b === u.alternate)) break t;
                (b = er(b)), (u = er(u));
              }
              b = null;
            }
          else b = null;
          w !== null && $i(g, p, w, b, !1),
            v !== null && _ !== null && $i(g, _, v, b, !0);
        }
      }
      e: {
        if (
          ((p = h ? lr(h) : window),
          (w = p.nodeName && p.nodeName.toLowerCase()),
          w === "select" || (w === "input" && p.type === "file"))
        )
          var L = Ep;
        else if (Mi(p))
          if (gu) L = Tp;
          else {
            L = Ip;
            var P = Pp;
          }
        else
          (w = p.nodeName) &&
            w.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (L = Rp);
        if (L && (L = L(e, h))) {
          hu(g, L, n, d);
          break e;
        }
        P && P(e, p, h),
          e === "focusout" &&
            (P = p._wrapperState) &&
            P.controlled &&
            p.type === "number" &&
            Cl(p, "number", p.value);
      }
      switch (((P = h ? lr(h) : window), e)) {
        case "focusin":
          (Mi(P) || P.contentEditable === "true") &&
            ((sr = P), ($l = h), (qr = null));
          break;
        case "focusout":
          qr = $l = sr = null;
          break;
        case "mousedown":
          Ll = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Ll = !1), Ti(g, n, d);
          break;
        case "selectionchange":
          if ($p) break;
        case "keydown":
        case "keyup":
          Ti(g, n, d);
      }
      var R;
      if (Ma)
        e: {
          switch (e) {
            case "compositionstart":
              var N = "onCompositionStart";
              break e;
            case "compositionend":
              N = "onCompositionEnd";
              break e;
            case "compositionupdate":
              N = "onCompositionUpdate";
              break e;
          }
          N = void 0;
        }
      else
        rr
          ? pu(e, n) && (N = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
      N &&
        (fu &&
          n.locale !== "ko" &&
          (rr || N !== "onCompositionStart"
            ? N === "onCompositionEnd" && rr && (R = du())
            : ((xn = d),
              (ka = "value" in xn ? xn.value : xn.textContent),
              (rr = !0))),
        (P = ao(h, N)),
        0 < P.length &&
          ((N = new Ci(N, e, null, n, d)),
          g.push({ event: N, listeners: P }),
          R ? (N.data = R) : ((R = mu(n)), R !== null && (N.data = R)))),
        (R = Cp ? kp(e, n) : _p(e, n)) &&
          ((h = ao(h, "onBeforeInput")),
          0 < h.length &&
            ((d = new Ci("onBeforeInput", "beforeinput", null, n, d)),
            g.push({ event: d, listeners: h }),
            (d.data = R)));
    }
    ku(g, t);
  });
}
function cs(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ao(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      l = o.stateNode;
    o.tag === 5 &&
      l !== null &&
      ((o = l),
      (l = ns(e, n)),
      l != null && r.unshift(cs(e, l, o)),
      (l = ns(e, t)),
      l != null && r.push(cs(e, l, o))),
      (e = e.return);
  }
  return r;
}
function er(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function $i(e, t, n, r, o) {
  for (var l = t._reactName, a = []; n !== null && n !== r; ) {
    var i = n,
      c = i.alternate,
      h = i.stateNode;
    if (c !== null && c === r) break;
    i.tag === 5 &&
      h !== null &&
      ((i = h),
      o
        ? ((c = ns(n, l)), c != null && a.unshift(cs(n, c, i)))
        : o || ((c = ns(n, l)), c != null && a.push(cs(n, c, i)))),
      (n = n.return);
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var Bp = /\r\n?/g,
  Gp = /\u0000|\uFFFD/g;
function Li(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Bp,
      `
`
    )
    .replace(Gp, "");
}
function Rs(e, t, n) {
  if (((t = Li(t)), Li(e) !== t && n)) throw Error(J(425));
}
function io() {}
var Ul = null,
  zl = null;
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
var Gl = typeof setTimeout == "function" ? setTimeout : void 0,
  Fp = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Ui = typeof Promise == "function" ? Promise : void 0,
  Hp =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Ui < "u"
      ? function (e) {
          return Ui.resolve(null).then(e).catch(Vp);
        }
      : Gl;
function Vp(e) {
  setTimeout(function () {
    throw e;
  });
}
function ll(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), os(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  os(t);
}
function Nn(e) {
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
function zi(e) {
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
var Mr = Math.random().toString(36).slice(2),
  Xt = "__reactFiber$" + Mr,
  us = "__reactProps$" + Mr,
  ln = "__reactContainer$" + Mr,
  Fl = "__reactEvents$" + Mr,
  Wp = "__reactListeners$" + Mr,
  Qp = "__reactHandles$" + Mr;
function An(e) {
  var t = e[Xt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[ln] || n[Xt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = zi(e); e !== null; ) {
          if ((n = e[Xt])) return n;
          e = zi(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ws(e) {
  return (
    (e = e[Xt] || e[ln]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function lr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(J(33));
}
function Eo(e) {
  return e[us] || null;
}
var Hl = [],
  ar = -1;
function En(e) {
  return { current: e };
}
function Le(e) {
  0 > ar || ((e.current = Hl[ar]), (Hl[ar] = null), ar--);
}
function Oe(e, t) {
  ar++, (Hl[ar] = e.current), (e.current = t);
}
var Dn = {},
  at = En(Dn),
  gt = En(!1),
  zn = Dn;
function wr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Dn;
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
function xt(e) {
  return (e = e.childContextTypes), e != null;
}
function co() {
  Le(gt), Le(at);
}
function Bi(e, t, n) {
  if (at.current !== Dn) throw Error(J(168));
  Oe(at, t), Oe(gt, n);
}
function Du(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(J(108, Pf(e) || "Unknown", o));
  return Fe({}, n, r);
}
function uo(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Dn),
    (zn = at.current),
    Oe(at, e),
    Oe(gt, gt.current),
    !0
  );
}
function Gi(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(J(169));
  n
    ? ((e = Du(e, t, zn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Le(gt),
      Le(at),
      Oe(at, e))
    : Le(gt),
    Oe(gt, n);
}
var en = null,
  Po = !1,
  al = !1;
function Mu(e) {
  en === null ? (en = [e]) : en.push(e);
}
function Yp(e) {
  (Po = !0), Mu(e);
}
function Pn() {
  if (!al && en !== null) {
    al = !0;
    var e = 0,
      t = Te;
    try {
      var n = en;
      for (Te = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (en = null), (Po = !1);
    } catch (o) {
      throw (en !== null && (en = en.slice(e + 1)), eu(Na, Pn), o);
    } finally {
      (Te = t), (al = !1);
    }
  }
  return null;
}
var ir = [],
  cr = 0,
  fo = null,
  po = 0,
  Dt = [],
  Mt = 0,
  Bn = null,
  nn = 1,
  rn = "";
function Rn(e, t) {
  (ir[cr++] = po), (ir[cr++] = fo), (fo = e), (po = t);
}
function Eu(e, t, n) {
  (Dt[Mt++] = nn), (Dt[Mt++] = rn), (Dt[Mt++] = Bn), (Bn = e);
  var r = nn;
  e = rn;
  var o = 32 - Gt(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var l = 32 - Gt(t) + o;
  if (30 < l) {
    var a = o - (o % 5);
    (l = (r & ((1 << a) - 1)).toString(32)),
      (r >>= a),
      (o -= a),
      (nn = (1 << (32 - Gt(t) + o)) | (n << o) | r),
      (rn = l + e);
  } else (nn = (1 << l) | (n << o) | r), (rn = e);
}
function Pa(e) {
  e.return !== null && (Rn(e, 1), Eu(e, 1, 0));
}
function Ia(e) {
  for (; e === fo; )
    (fo = ir[--cr]), (ir[cr] = null), (po = ir[--cr]), (ir[cr] = null);
  for (; e === Bn; )
    (Bn = Dt[--Mt]),
      (Dt[Mt] = null),
      (rn = Dt[--Mt]),
      (Dt[Mt] = null),
      (nn = Dt[--Mt]),
      (Dt[Mt] = null);
}
var jt = null,
  bt = null,
  Ue = !1,
  Bt = null;
function Pu(e, t) {
  var n = Et(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Fi(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (jt = e), (bt = Nn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (jt = e), (bt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Bn !== null ? { id: nn, overflow: rn } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Et(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (jt = e),
            (bt = null),
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
function Wl(e) {
  if (Ue) {
    var t = bt;
    if (t) {
      var n = t;
      if (!Fi(e, t)) {
        if (Vl(e)) throw Error(J(418));
        t = Nn(n.nextSibling);
        var r = jt;
        t && Fi(e, t)
          ? Pu(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Ue = !1), (jt = e));
      }
    } else {
      if (Vl(e)) throw Error(J(418));
      (e.flags = (e.flags & -4097) | 2), (Ue = !1), (jt = e);
    }
  }
}
function Hi(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  jt = e;
}
function Ts(e) {
  if (e !== jt) return !1;
  if (!Ue) return Hi(e), (Ue = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Bl(e.type, e.memoizedProps))),
    t && (t = bt))
  ) {
    if (Vl(e)) throw (Iu(), Error(J(418)));
    for (; t; ) Pu(e, t), (t = Nn(t.nextSibling));
  }
  if ((Hi(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(J(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              bt = Nn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      bt = null;
    }
  } else bt = jt ? Nn(e.stateNode.nextSibling) : null;
  return !0;
}
function Iu() {
  for (var e = bt; e; ) e = Nn(e.nextSibling);
}
function br() {
  (bt = jt = null), (Ue = !1);
}
function Ra(e) {
  Bt === null ? (Bt = [e]) : Bt.push(e);
}
var qp = un.ReactCurrentBatchConfig;
function Lr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(J(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(J(147, e));
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
    if (typeof e != "string") throw Error(J(284));
    if (!n._owner) throw Error(J(290, e));
  }
  return e;
}
function As(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      J(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Vi(e) {
  var t = e._init;
  return t(e._payload);
}
function Ru(e) {
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
    return (u = kn(u, f)), (u.index = 0), (u.sibling = null), u;
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
  function i(u, f, x, j) {
    return f === null || f.tag !== 6
      ? ((f = ml(x, u.mode, j)), (f.return = u), f)
      : ((f = o(f, x)), (f.return = u), f);
  }
  function c(u, f, x, j) {
    var L = x.type;
    return L === nr
      ? d(u, f, x.props.children, j, x.key)
      : f !== null &&
        (f.elementType === L ||
          (typeof L == "object" &&
            L !== null &&
            L.$$typeof === pn &&
            Vi(L) === f.type))
      ? ((j = o(f, x.props)), (j.ref = Lr(u, f, x)), (j.return = u), j)
      : ((j = Js(x.type, x.key, x.props, null, u.mode, j)),
        (j.ref = Lr(u, f, x)),
        (j.return = u),
        j);
  }
  function h(u, f, x, j) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== x.containerInfo ||
      f.stateNode.implementation !== x.implementation
      ? ((f = hl(x, u.mode, j)), (f.return = u), f)
      : ((f = o(f, x.children || [])), (f.return = u), f);
  }
  function d(u, f, x, j, L) {
    return f === null || f.tag !== 7
      ? ((f = Un(x, u.mode, j, L)), (f.return = u), f)
      : ((f = o(f, x)), (f.return = u), f);
  }
  function g(u, f, x) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return (f = ml("" + f, u.mode, x)), (f.return = u), f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Ss:
          return (
            (x = Js(f.type, f.key, f.props, null, u.mode, x)),
            (x.ref = Lr(u, null, f)),
            (x.return = u),
            x
          );
        case tr:
          return (f = hl(f, u.mode, x)), (f.return = u), f;
        case pn:
          var j = f._init;
          return g(u, j(f._payload), x);
      }
      if (Gr(f) || Rr(f))
        return (f = Un(f, u.mode, x, null)), (f.return = u), f;
      As(u, f);
    }
    return null;
  }
  function p(u, f, x, j) {
    var L = f !== null ? f.key : null;
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return L !== null ? null : i(u, f, "" + x, j);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Ss:
          return x.key === L ? c(u, f, x, j) : null;
        case tr:
          return x.key === L ? h(u, f, x, j) : null;
        case pn:
          return (L = x._init), p(u, f, L(x._payload), j);
      }
      if (Gr(x) || Rr(x)) return L !== null ? null : d(u, f, x, j, null);
      As(u, x);
    }
    return null;
  }
  function w(u, f, x, j, L) {
    if ((typeof j == "string" && j !== "") || typeof j == "number")
      return (u = u.get(x) || null), i(f, u, "" + j, L);
    if (typeof j == "object" && j !== null) {
      switch (j.$$typeof) {
        case Ss:
          return (u = u.get(j.key === null ? x : j.key) || null), c(f, u, j, L);
        case tr:
          return (u = u.get(j.key === null ? x : j.key) || null), h(f, u, j, L);
        case pn:
          var P = j._init;
          return w(u, f, x, P(j._payload), L);
      }
      if (Gr(j) || Rr(j)) return (u = u.get(x) || null), d(f, u, j, L, null);
      As(f, j);
    }
    return null;
  }
  function v(u, f, x, j) {
    for (
      var L = null, P = null, R = f, N = (f = 0), I = null;
      R !== null && N < x.length;
      N++
    ) {
      R.index > N ? ((I = R), (R = null)) : (I = R.sibling);
      var S = p(u, R, x[N], j);
      if (S === null) {
        R === null && (R = I);
        break;
      }
      e && R && S.alternate === null && t(u, R),
        (f = l(S, f, N)),
        P === null ? (L = S) : (P.sibling = S),
        (P = S),
        (R = I);
    }
    if (N === x.length) return n(u, R), Ue && Rn(u, N), L;
    if (R === null) {
      for (; N < x.length; N++)
        (R = g(u, x[N], j)),
          R !== null &&
            ((f = l(R, f, N)), P === null ? (L = R) : (P.sibling = R), (P = R));
      return Ue && Rn(u, N), L;
    }
    for (R = r(u, R); N < x.length; N++)
      (I = w(R, u, N, x[N], j)),
        I !== null &&
          (e && I.alternate !== null && R.delete(I.key === null ? N : I.key),
          (f = l(I, f, N)),
          P === null ? (L = I) : (P.sibling = I),
          (P = I));
    return (
      e &&
        R.forEach(function (O) {
          return t(u, O);
        }),
      Ue && Rn(u, N),
      L
    );
  }
  function b(u, f, x, j) {
    var L = Rr(x);
    if (typeof L != "function") throw Error(J(150));
    if (((x = L.call(x)), x == null)) throw Error(J(151));
    for (
      var P = (L = null), R = f, N = (f = 0), I = null, S = x.next();
      R !== null && !S.done;
      N++, S = x.next()
    ) {
      R.index > N ? ((I = R), (R = null)) : (I = R.sibling);
      var O = p(u, R, S.value, j);
      if (O === null) {
        R === null && (R = I);
        break;
      }
      e && R && O.alternate === null && t(u, R),
        (f = l(O, f, N)),
        P === null ? (L = O) : (P.sibling = O),
        (P = O),
        (R = I);
    }
    if (S.done) return n(u, R), Ue && Rn(u, N), L;
    if (R === null) {
      for (; !S.done; N++, S = x.next())
        (S = g(u, S.value, j)),
          S !== null &&
            ((f = l(S, f, N)), P === null ? (L = S) : (P.sibling = S), (P = S));
      return Ue && Rn(u, N), L;
    }
    for (R = r(u, R); !S.done; N++, S = x.next())
      (S = w(R, u, N, S.value, j)),
        S !== null &&
          (e && S.alternate !== null && R.delete(S.key === null ? N : S.key),
          (f = l(S, f, N)),
          P === null ? (L = S) : (P.sibling = S),
          (P = S));
    return (
      e &&
        R.forEach(function (G) {
          return t(u, G);
        }),
      Ue && Rn(u, N),
      L
    );
  }
  function _(u, f, x, j) {
    if (
      (typeof x == "object" &&
        x !== null &&
        x.type === nr &&
        x.key === null &&
        (x = x.props.children),
      typeof x == "object" && x !== null)
    ) {
      switch (x.$$typeof) {
        case Ss:
          e: {
            for (var L = x.key, P = f; P !== null; ) {
              if (P.key === L) {
                if (((L = x.type), L === nr)) {
                  if (P.tag === 7) {
                    n(u, P.sibling),
                      (f = o(P, x.props.children)),
                      (f.return = u),
                      (u = f);
                    break e;
                  }
                } else if (
                  P.elementType === L ||
                  (typeof L == "object" &&
                    L !== null &&
                    L.$$typeof === pn &&
                    Vi(L) === P.type)
                ) {
                  n(u, P.sibling),
                    (f = o(P, x.props)),
                    (f.ref = Lr(u, P, x)),
                    (f.return = u),
                    (u = f);
                  break e;
                }
                n(u, P);
                break;
              } else t(u, P);
              P = P.sibling;
            }
            x.type === nr
              ? ((f = Un(x.props.children, u.mode, j, x.key)),
                (f.return = u),
                (u = f))
              : ((j = Js(x.type, x.key, x.props, null, u.mode, j)),
                (j.ref = Lr(u, f, x)),
                (j.return = u),
                (u = j));
          }
          return a(u);
        case tr:
          e: {
            for (P = x.key; f !== null; ) {
              if (f.key === P)
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
            (f = hl(x, u.mode, j)), (f.return = u), (u = f);
          }
          return a(u);
        case pn:
          return (P = x._init), _(u, f, P(x._payload), j);
      }
      if (Gr(x)) return v(u, f, x, j);
      if (Rr(x)) return b(u, f, x, j);
      As(u, x);
    }
    return (typeof x == "string" && x !== "") || typeof x == "number"
      ? ((x = "" + x),
        f !== null && f.tag === 6
          ? (n(u, f.sibling), (f = o(f, x)), (f.return = u), (u = f))
          : (n(u, f), (f = ml(x, u.mode, j)), (f.return = u), (u = f)),
        a(u))
      : n(u, f);
  }
  return _;
}
var Nr = Ru(!0),
  Tu = Ru(!1),
  mo = En(null),
  ho = null,
  ur = null,
  Ta = null;
function Aa() {
  Ta = ur = ho = null;
}
function Oa(e) {
  var t = mo.current;
  Le(mo), (e._currentValue = t);
}
function Ql(e, t, n) {
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
function xr(e, t) {
  (ho = e),
    (Ta = ur = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ht = !0), (e.firstContext = null));
}
function Tt(e) {
  var t = e._currentValue;
  if (Ta !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), ur === null)) {
      if (ho === null) throw Error(J(308));
      (ur = e), (ho.dependencies = { lanes: 0, firstContext: e });
    } else ur = ur.next = e;
  return t;
}
var On = null;
function $a(e) {
  On === null ? (On = [e]) : On.push(e);
}
function Au(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), $a(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    an(e, r)
  );
}
function an(e, t) {
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
var mn = !1;
function La(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Ou(e, t) {
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
function sn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function jn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), Ie & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      an(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), $a(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    an(e, n)
  );
}
function Ws(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ja(e, n);
  }
}
function Wi(e, t) {
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
function go(e, t, n, r) {
  var o = e.updateQueue;
  mn = !1;
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
        w = i.eventTime;
      if ((r & p) === p) {
        d !== null &&
          (d = d.next =
            {
              eventTime: w,
              lane: 0,
              tag: i.tag,
              payload: i.payload,
              callback: i.callback,
              next: null,
            });
        e: {
          var v = e,
            b = i;
          switch (((p = t), (w = n), b.tag)) {
            case 1:
              if (((v = b.payload), typeof v == "function")) {
                g = v.call(w, g, p);
                break e;
              }
              g = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = b.payload),
                (p = typeof v == "function" ? v.call(w, g, p) : v),
                p == null)
              )
                break e;
              g = Fe({}, g, p);
              break e;
            case 2:
              mn = !0;
          }
        }
        i.callback !== null &&
          i.lane !== 0 &&
          ((e.flags |= 64),
          (p = o.effects),
          p === null ? (o.effects = [i]) : p.push(i));
      } else
        (w = {
          eventTime: w,
          lane: p,
          tag: i.tag,
          payload: i.payload,
          callback: i.callback,
          next: null,
        }),
          d === null ? ((h = d = w), (c = g)) : (d = d.next = w),
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
    (Fn |= a), (e.lanes = a), (e.memoizedState = g);
  }
}
function Qi(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(J(191, o));
        o.call(r);
      }
    }
}
var bs = {},
  Jt = En(bs),
  ds = En(bs),
  fs = En(bs);
function $n(e) {
  if (e === bs) throw Error(J(174));
  return e;
}
function Ua(e, t) {
  switch ((Oe(fs, t), Oe(ds, e), Oe(Jt, bs), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : _l(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = _l(t, e));
  }
  Le(Jt), Oe(Jt, t);
}
function jr() {
  Le(Jt), Le(ds), Le(fs);
}
function $u(e) {
  $n(fs.current);
  var t = $n(Jt.current),
    n = _l(t, e.type);
  t !== n && (Oe(ds, e), Oe(Jt, n));
}
function za(e) {
  ds.current === e && (Le(Jt), Le(ds));
}
var Be = En(0);
function xo(e) {
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
var il = [];
function Ba() {
  for (var e = 0; e < il.length; e++)
    il[e]._workInProgressVersionPrimary = null;
  il.length = 0;
}
var Qs = un.ReactCurrentDispatcher,
  cl = un.ReactCurrentBatchConfig,
  Gn = 0,
  Ge = null,
  Xe = null,
  Ze = null,
  yo = !1,
  Xr = !1,
  ps = 0,
  Xp = 0;
function st() {
  throw Error(J(321));
}
function Ga(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ht(e[n], t[n])) return !1;
  return !0;
}
function Fa(e, t, n, r, o, l) {
  if (
    ((Gn = l),
    (Ge = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Qs.current = e === null || e.memoizedState === null ? em : tm),
    (e = n(r, o)),
    Xr)
  ) {
    l = 0;
    do {
      if (((Xr = !1), (ps = 0), 25 <= l)) throw Error(J(301));
      (l += 1),
        (Ze = Xe = null),
        (t.updateQueue = null),
        (Qs.current = nm),
        (e = n(r, o));
    } while (Xr);
  }
  if (
    ((Qs.current = vo),
    (t = Xe !== null && Xe.next !== null),
    (Gn = 0),
    (Ze = Xe = Ge = null),
    (yo = !1),
    t)
  )
    throw Error(J(300));
  return e;
}
function Ha() {
  var e = ps !== 0;
  return (ps = 0), e;
}
function qt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Ze === null ? (Ge.memoizedState = Ze = e) : (Ze = Ze.next = e), Ze;
}
function At() {
  if (Xe === null) {
    var e = Ge.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Xe.next;
  var t = Ze === null ? Ge.memoizedState : Ze.next;
  if (t !== null) (Ze = t), (Xe = e);
  else {
    if (e === null) throw Error(J(310));
    (Xe = e),
      (e = {
        memoizedState: Xe.memoizedState,
        baseState: Xe.baseState,
        baseQueue: Xe.baseQueue,
        queue: Xe.queue,
        next: null,
      }),
      Ze === null ? (Ge.memoizedState = Ze = e) : (Ze = Ze.next = e);
  }
  return Ze;
}
function ms(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ul(e) {
  var t = At(),
    n = t.queue;
  if (n === null) throw Error(J(311));
  n.lastRenderedReducer = e;
  var r = Xe,
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
      if ((Gn & d) === d)
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
          (Fn |= d);
      }
      h = h.next;
    } while (h !== null && h !== l);
    c === null ? (a = r) : (c.next = i),
      Ht(r, t.memoizedState) || (ht = !0),
      (t.memoizedState = r),
      (t.baseState = a),
      (t.baseQueue = c),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (l = o.lane), (Ge.lanes |= l), (Fn |= l), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function dl(e) {
  var t = At(),
    n = t.queue;
  if (n === null) throw Error(J(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    l = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var a = (o = o.next);
    do (l = e(l, a.action)), (a = a.next);
    while (a !== o);
    Ht(l, t.memoizedState) || (ht = !0),
      (t.memoizedState = l),
      t.baseQueue === null && (t.baseState = l),
      (n.lastRenderedState = l);
  }
  return [l, r];
}
function Lu() {}
function Uu(e, t) {
  var n = Ge,
    r = At(),
    o = t(),
    l = !Ht(r.memoizedState, o);
  if (
    (l && ((r.memoizedState = o), (ht = !0)),
    (r = r.queue),
    Va(Gu.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || l || (Ze !== null && Ze.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      hs(9, Bu.bind(null, n, r, o, t), void 0, null),
      et === null)
    )
      throw Error(J(349));
    Gn & 30 || zu(n, t, o);
  }
  return o;
}
function zu(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Ge.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ge.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Bu(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Fu(t) && Hu(e);
}
function Gu(e, t, n) {
  return n(function () {
    Fu(t) && Hu(e);
  });
}
function Fu(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ht(e, n);
  } catch {
    return !0;
  }
}
function Hu(e) {
  var t = an(e, 1);
  t !== null && Ft(t, e, 1, -1);
}
function Yi(e) {
  var t = qt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ms,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Zp.bind(null, Ge, e)),
    [t.memoizedState, e]
  );
}
function hs(e, t, n, r) {
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
function Vu() {
  return At().memoizedState;
}
function Ys(e, t, n, r) {
  var o = qt();
  (Ge.flags |= e),
    (o.memoizedState = hs(1 | t, n, void 0, r === void 0 ? null : r));
}
function Io(e, t, n, r) {
  var o = At();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (Xe !== null) {
    var a = Xe.memoizedState;
    if (((l = a.destroy), r !== null && Ga(r, a.deps))) {
      o.memoizedState = hs(t, n, l, r);
      return;
    }
  }
  (Ge.flags |= e), (o.memoizedState = hs(1 | t, n, l, r));
}
function qi(e, t) {
  return Ys(8390656, 8, e, t);
}
function Va(e, t) {
  return Io(2048, 8, e, t);
}
function Wu(e, t) {
  return Io(4, 2, e, t);
}
function Qu(e, t) {
  return Io(4, 4, e, t);
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
function qu(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Io(4, 4, Yu.bind(null, t, e), n)
  );
}
function Wa() {}
function Xu(e, t) {
  var n = At();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ga(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Ku(e, t) {
  var n = At();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ga(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Ju(e, t, n) {
  return Gn & 21
    ? (Ht(n, t) || ((n = ru()), (Ge.lanes |= n), (Fn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ht = !0)), (e.memoizedState = n));
}
function Kp(e, t) {
  var n = Te;
  (Te = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = cl.transition;
  cl.transition = {};
  try {
    e(!1), t();
  } finally {
    (Te = n), (cl.transition = r);
  }
}
function Zu() {
  return At().memoizedState;
}
function Jp(e, t, n) {
  var r = Cn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    ed(e))
  )
    td(t, n);
  else if (((n = Au(e, t, n, r)), n !== null)) {
    var o = ut();
    Ft(n, e, r, o), nd(n, t, r);
  }
}
function Zp(e, t, n) {
  var r = Cn(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (ed(e)) td(t, o);
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
        if (((o.hasEagerState = !0), (o.eagerState = i), Ht(i, a))) {
          var c = t.interleaved;
          c === null
            ? ((o.next = o), $a(t))
            : ((o.next = c.next), (c.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Au(e, t, o, r)),
      n !== null && ((o = ut()), Ft(n, e, r, o), nd(n, t, r));
  }
}
function ed(e) {
  var t = e.alternate;
  return e === Ge || (t !== null && t === Ge);
}
function td(e, t) {
  Xr = yo = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function nd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ja(e, n);
  }
}
var vo = {
    readContext: Tt,
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
    readContext: Tt,
    useCallback: function (e, t) {
      return (qt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Tt,
    useEffect: qi,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ys(4194308, 4, Yu.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ys(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ys(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = qt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = qt();
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
      var t = qt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Yi,
    useDebugValue: Wa,
    useDeferredValue: function (e) {
      return (qt().memoizedState = e);
    },
    useTransition: function () {
      var e = Yi(!1),
        t = e[0];
      return (e = Kp.bind(null, e[1])), (qt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Ge,
        o = qt();
      if (Ue) {
        if (n === void 0) throw Error(J(407));
        n = n();
      } else {
        if (((n = t()), et === null)) throw Error(J(349));
        Gn & 30 || zu(r, t, n);
      }
      o.memoizedState = n;
      var l = { value: n, getSnapshot: t };
      return (
        (o.queue = l),
        qi(Gu.bind(null, r, l, e), [e]),
        (r.flags |= 2048),
        hs(9, Bu.bind(null, r, l, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = qt(),
        t = et.identifierPrefix;
      if (Ue) {
        var n = rn,
          r = nn;
        (n = (r & ~(1 << (32 - Gt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ps++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Xp++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  tm = {
    readContext: Tt,
    useCallback: Xu,
    useContext: Tt,
    useEffect: Va,
    useImperativeHandle: qu,
    useInsertionEffect: Wu,
    useLayoutEffect: Qu,
    useMemo: Ku,
    useReducer: ul,
    useRef: Vu,
    useState: function () {
      return ul(ms);
    },
    useDebugValue: Wa,
    useDeferredValue: function (e) {
      var t = At();
      return Ju(t, Xe.memoizedState, e);
    },
    useTransition: function () {
      var e = ul(ms)[0],
        t = At().memoizedState;
      return [e, t];
    },
    useMutableSource: Lu,
    useSyncExternalStore: Uu,
    useId: Zu,
    unstable_isNewReconciler: !1,
  },
  nm = {
    readContext: Tt,
    useCallback: Xu,
    useContext: Tt,
    useEffect: Va,
    useImperativeHandle: qu,
    useInsertionEffect: Wu,
    useLayoutEffect: Qu,
    useMemo: Ku,
    useReducer: dl,
    useRef: Vu,
    useState: function () {
      return dl(ms);
    },
    useDebugValue: Wa,
    useDeferredValue: function (e) {
      var t = At();
      return Xe === null ? (t.memoizedState = e) : Ju(t, Xe.memoizedState, e);
    },
    useTransition: function () {
      var e = dl(ms)[0],
        t = At().memoizedState;
      return [e, t];
    },
    useMutableSource: Lu,
    useSyncExternalStore: Uu,
    useId: Zu,
    unstable_isNewReconciler: !1,
  };
function Ut(e, t) {
  if (e && e.defaultProps) {
    (t = Fe({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Yl(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Fe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ro = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Wn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ut(),
      o = Cn(e),
      l = sn(r, o);
    (l.payload = t),
      n != null && (l.callback = n),
      (t = jn(e, l, o)),
      t !== null && (Ft(t, e, o, r), Ws(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ut(),
      o = Cn(e),
      l = sn(r, o);
    (l.tag = 1),
      (l.payload = t),
      n != null && (l.callback = n),
      (t = jn(e, l, o)),
      t !== null && (Ft(t, e, o, r), Ws(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ut(),
      r = Cn(e),
      o = sn(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = jn(e, o, r)),
      t !== null && (Ft(t, e, r, n), Ws(t, e, r));
  },
};
function Xi(e, t, n, r, o, l, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, l, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !as(n, r) || !as(o, l)
      : !0
  );
}
function rd(e, t, n) {
  var r = !1,
    o = Dn,
    l = t.contextType;
  return (
    typeof l == "object" && l !== null
      ? (l = Tt(l))
      : ((o = xt(t) ? zn : at.current),
        (r = t.contextTypes),
        (l = (r = r != null) ? wr(e, o) : Dn)),
    (t = new t(n, l)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ro),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    t
  );
}
function Ki(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ro.enqueueReplaceState(t, t.state, null);
}
function ql(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), La(e);
  var l = t.contextType;
  typeof l == "object" && l !== null
    ? (o.context = Tt(l))
    : ((l = xt(t) ? zn : at.current), (o.context = wr(e, l))),
    (o.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l == "function" && (Yl(e, t, l, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Ro.enqueueReplaceState(o, o.state, null),
      go(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Sr(e, t) {
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
function fl(e, t, n) {
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
var rm = typeof WeakMap == "function" ? WeakMap : Map;
function sd(e, t, n) {
  (n = sn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      bo || ((bo = !0), (la = r)), Xl(e, t);
    }),
    n
  );
}
function od(e, t, n) {
  (n = sn(-1, n)), (n.tag = 3);
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
            (Sn === null ? (Sn = new Set([this])) : Sn.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : "",
        });
      }),
    n
  );
}
function Ji(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new rm();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = xm.bind(null, e, t, n)), t.then(e, e));
}
function Zi(e) {
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
function ec(e, t, n, r, o) {
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
              : ((t = sn(-1, 1)), (t.tag = 2), jn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var sm = un.ReactCurrentOwner,
  ht = !1;
function ct(e, t, n, r) {
  t.child = e === null ? Tu(t, null, n, r) : Nr(t, e.child, n, r);
}
function tc(e, t, n, r, o) {
  n = n.render;
  var l = t.ref;
  return (
    xr(t, o),
    (r = Fa(e, t, n, r, l, o)),
    (n = Ha()),
    e !== null && !ht
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        cn(e, t, o))
      : (Ue && n && Pa(t), (t.flags |= 1), ct(e, t, r, o), t.child)
  );
}
function nc(e, t, n, r, o) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" &&
      !ei(l) &&
      l.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), ld(e, t, l, r, o))
      : ((e = Js(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((l = e.child), !(e.lanes & o))) {
    var a = l.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : as), n(a, r) && e.ref === t.ref)
    )
      return cn(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = kn(l, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function ld(e, t, n, r, o) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (as(l, r) && e.ref === t.ref)
      if (((ht = !1), (t.pendingProps = r = l), (e.lanes & o) !== 0))
        e.flags & 131072 && (ht = !0);
      else return (t.lanes = e.lanes), cn(e, t, o);
  }
  return Kl(e, t, n, r, o);
}
function ad(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    l = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Oe(fr, wt),
        (wt |= n);
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
          Oe(fr, wt),
          (wt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = l !== null ? l.baseLanes : n),
        Oe(fr, wt),
        (wt |= r);
    }
  else
    l !== null ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n),
      Oe(fr, wt),
      (wt |= r);
  return ct(e, t, o, n), t.child;
}
function id(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Kl(e, t, n, r, o) {
  var l = xt(n) ? zn : at.current;
  return (
    (l = wr(t, l)),
    xr(t, o),
    (n = Fa(e, t, n, r, l, o)),
    (r = Ha()),
    e !== null && !ht
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        cn(e, t, o))
      : (Ue && r && Pa(t), (t.flags |= 1), ct(e, t, n, o), t.child)
  );
}
function rc(e, t, n, r, o) {
  if (xt(n)) {
    var l = !0;
    uo(t);
  } else l = !1;
  if ((xr(t, o), t.stateNode === null))
    qs(e, t), rd(t, n, r), ql(t, n, r, o), (r = !0);
  else if (e === null) {
    var a = t.stateNode,
      i = t.memoizedProps;
    a.props = i;
    var c = a.context,
      h = n.contextType;
    typeof h == "object" && h !== null
      ? (h = Tt(h))
      : ((h = xt(n) ? zn : at.current), (h = wr(t, h)));
    var d = n.getDerivedStateFromProps,
      g =
        typeof d == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    g ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((i !== r || c !== h) && Ki(t, a, r, h)),
      (mn = !1);
    var p = t.memoizedState;
    (a.state = p),
      go(t, r, a, o),
      (c = t.memoizedState),
      i !== r || p !== c || gt.current || mn
        ? (typeof d == "function" && (Yl(t, n, d, r), (c = t.memoizedState)),
          (i = mn || Xi(t, n, i, r, p, c, h))
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
      Ou(e, t),
      (i = t.memoizedProps),
      (h = t.type === t.elementType ? i : Ut(t.type, i)),
      (a.props = h),
      (g = t.pendingProps),
      (p = a.context),
      (c = n.contextType),
      typeof c == "object" && c !== null
        ? (c = Tt(c))
        : ((c = xt(n) ? zn : at.current), (c = wr(t, c)));
    var w = n.getDerivedStateFromProps;
    (d =
      typeof w == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((i !== g || p !== c) && Ki(t, a, r, c)),
      (mn = !1),
      (p = t.memoizedState),
      (a.state = p),
      go(t, r, a, o);
    var v = t.memoizedState;
    i !== g || p !== v || gt.current || mn
      ? (typeof w == "function" && (Yl(t, n, w, r), (v = t.memoizedState)),
        (h = mn || Xi(t, n, h, r, p, v, c) || !1)
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
  return Jl(e, t, n, r, l, o);
}
function Jl(e, t, n, r, o, l) {
  id(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return o && Gi(t, n, !1), cn(e, t, l);
  (r = t.stateNode), (sm.current = t);
  var i =
    a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = Nr(t, e.child, null, l)), (t.child = Nr(t, null, i, l)))
      : ct(e, t, i, l),
    (t.memoizedState = r.state),
    o && Gi(t, n, !0),
    t.child
  );
}
function cd(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Bi(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Bi(e, t.context, !1),
    Ua(e, t.containerInfo);
}
function sc(e, t, n, r, o) {
  return br(), Ra(o), (t.flags |= 256), ct(e, t, n, r), t.child;
}
var Zl = { dehydrated: null, treeContext: null, retryLane: 0 };
function ea(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function ud(e, t, n) {
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
      Wl(t),
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
                : (l = Oo(a, r, 0, null)),
              (e = Un(e, r, n, null)),
              (l.return = t),
              (e.return = t),
              (l.sibling = e),
              (t.child = l),
              (t.child.memoizedState = ea(n)),
              (t.memoizedState = Zl),
              e)
            : Qa(t, a))
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
        : ((r = kn(o, c)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      i !== null ? (l = kn(i, l)) : ((l = Un(l, a, n, null)), (l.flags |= 2)),
      (l.return = t),
      (r.return = t),
      (r.sibling = l),
      (t.child = r),
      (r = l),
      (l = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? ea(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (l.memoizedState = a),
      (l.childLanes = e.childLanes & ~n),
      (t.memoizedState = Zl),
      r
    );
  }
  return (
    (l = e.child),
    (e = l.sibling),
    (r = kn(l, { mode: "visible", children: r.children })),
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
function Qa(e, t) {
  return (
    (t = Oo({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Os(e, t, n, r) {
  return (
    r !== null && Ra(r),
    Nr(t, e.child, null, n),
    (e = Qa(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function om(e, t, n, r, o, l, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = fl(Error(J(422)))), Os(e, t, a, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((l = r.fallback),
        (o = t.mode),
        (r = Oo({ mode: "visible", children: r.children }, o, 0, null)),
        (l = Un(l, o, a, null)),
        (l.flags |= 2),
        (r.return = t),
        (l.return = t),
        (r.sibling = l),
        (t.child = r),
        t.mode & 1 && Nr(t, e.child, null, a),
        (t.child.memoizedState = ea(a)),
        (t.memoizedState = Zl),
        l);
  if (!(t.mode & 1)) return Os(e, t, a, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var i = r.dgst;
    return (r = i), (l = Error(J(419))), (r = fl(l, r, void 0)), Os(e, t, a, r);
  }
  if (((i = (a & e.childLanes) !== 0), ht || i)) {
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
          ((l.retryLane = o), an(e, o), Ft(r, e, o, -1));
    }
    return Za(), (r = fl(Error(J(421)))), Os(e, t, a, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = ym.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = l.treeContext),
      (bt = Nn(o.nextSibling)),
      (jt = t),
      (Ue = !0),
      (Bt = null),
      e !== null &&
        ((Dt[Mt++] = nn),
        (Dt[Mt++] = rn),
        (Dt[Mt++] = Bn),
        (nn = e.id),
        (rn = e.overflow),
        (Bn = t)),
      (t = Qa(t, r.children)),
      (t.flags |= 4096),
      t);
}
function oc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ql(e.return, t, n);
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
function dd(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    l = r.tail;
  if ((ct(e, t, r.children, n), (r = Be.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && oc(e, n, t);
        else if (e.tag === 19) oc(e, n, t);
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
            e !== null && xo(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          pl(t, !1, o, n, l);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && xo(e) === null)) {
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
function qs(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function cn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Fn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(J(153));
  if (t.child !== null) {
    for (
      e = t.child, n = kn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = kn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function lm(e, t, n) {
  switch (t.tag) {
    case 3:
      cd(t), br();
      break;
    case 5:
      $u(t);
      break;
    case 1:
      xt(t.type) && uo(t);
      break;
    case 4:
      Ua(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      Oe(mo, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Oe(Be, Be.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? ud(e, t, n)
          : (Oe(Be, Be.current & 1),
            (e = cn(e, t, n)),
            e !== null ? e.sibling : null);
      Oe(Be, Be.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return dd(e, t, n);
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
      return (t.lanes = 0), ad(e, t, n);
  }
  return cn(e, t, n);
}
var fd, ta, pd, md;
fd = function (e, t) {
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
ta = function () {};
pd = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), $n(Jt.current);
    var l = null;
    switch (n) {
      case "input":
        (o = jl(e, o)), (r = jl(e, r)), (l = []);
        break;
      case "select":
        (o = Fe({}, o, { value: void 0 })),
          (r = Fe({}, r, { value: void 0 })),
          (l = []);
        break;
      case "textarea":
        (o = kl(e, o)), (r = kl(e, r)), (l = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = io);
    }
    Dl(n, r);
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
            (es.hasOwnProperty(h)
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
              (es.hasOwnProperty(h)
                ? (c != null && h === "onScroll" && $e("scroll", e),
                  l || i === c || (l = []))
                : (l = l || []).push(h, c));
    }
    n && (l = l || []).push("style", n);
    var h = l;
    (t.updateQueue = h) && (t.flags |= 4);
  }
};
md = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Ur(e, t) {
  if (!Ue)
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
  switch ((Ia(t), t.tag)) {
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
      return xt(t.type) && co(), ot(t), null;
    case 3:
      return (
        (r = t.stateNode),
        jr(),
        Le(gt),
        Le(at),
        Ba(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ts(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Bt !== null && (ca(Bt), (Bt = null)))),
        ta(e, t),
        ot(t),
        null
      );
    case 5:
      za(t);
      var o = $n(fs.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        pd(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(J(166));
          return ot(t), null;
        }
        if (((e = $n(Jt.current)), Ts(t))) {
          (r = t.stateNode), (n = t.type);
          var l = t.memoizedProps;
          switch (((r[Xt] = t), (r[us] = l), (e = (t.mode & 1) !== 0), n)) {
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
              for (o = 0; o < Hr.length; o++) $e(Hr[o], r);
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
              mi(r, l), $e("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!l.multiple }),
                $e("invalid", r);
              break;
            case "textarea":
              gi(r, l), $e("invalid", r);
          }
          Dl(n, l), (o = null);
          for (var a in l)
            if (l.hasOwnProperty(a)) {
              var i = l[a];
              a === "children"
                ? typeof i == "string"
                  ? r.textContent !== i &&
                    (l.suppressHydrationWarning !== !0 &&
                      Rs(r.textContent, i, e),
                    (o = ["children", i]))
                  : typeof i == "number" &&
                    r.textContent !== "" + i &&
                    (l.suppressHydrationWarning !== !0 &&
                      Rs(r.textContent, i, e),
                    (o = ["children", "" + i]))
                : es.hasOwnProperty(a) &&
                  i != null &&
                  a === "onScroll" &&
                  $e("scroll", r);
            }
          switch (n) {
            case "input":
              Cs(r), hi(r, l, !0);
              break;
            case "textarea":
              Cs(r), xi(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = io);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (a = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Gc(n)),
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
            (e[Xt] = t),
            (e[us] = r),
            fd(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((a = Ml(n, r)), n)) {
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
                for (o = 0; o < Hr.length; o++) $e(Hr[o], e);
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
                mi(e, r), (o = jl(e, r)), $e("invalid", e);
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
                gi(e, r), (o = kl(e, r)), $e("invalid", e);
                break;
              default:
                o = r;
            }
            Dl(n, o), (i = o);
            for (l in i)
              if (i.hasOwnProperty(l)) {
                var c = i[l];
                l === "style"
                  ? Vc(e, c)
                  : l === "dangerouslySetInnerHTML"
                  ? ((c = c ? c.__html : void 0), c != null && Fc(e, c))
                  : l === "children"
                  ? typeof c == "string"
                    ? (n !== "textarea" || c !== "") && ts(e, c)
                    : typeof c == "number" && ts(e, "" + c)
                  : l !== "suppressContentEditableWarning" &&
                    l !== "suppressHydrationWarning" &&
                    l !== "autoFocus" &&
                    (es.hasOwnProperty(l)
                      ? c != null && l === "onScroll" && $e("scroll", e)
                      : c != null && xa(e, l, c, a));
              }
            switch (n) {
              case "input":
                Cs(e), hi(e, r, !1);
                break;
              case "textarea":
                Cs(e), xi(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + _n(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (l = r.value),
                  l != null
                    ? pr(e, !!r.multiple, l, !1)
                    : r.defaultValue != null &&
                      pr(e, !!r.multiple, r.defaultValue, !0);
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
      return ot(t), null;
    case 6:
      if (e && t.stateNode != null) md(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(J(166));
        if (((n = $n(fs.current)), $n(Jt.current), Ts(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Xt] = t),
            (l = r.nodeValue !== n) && ((e = jt), e !== null))
          )
            switch (e.tag) {
              case 3:
                Rs(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Rs(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          l && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Xt] = t),
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
        if (Ue && bt !== null && t.mode & 1 && !(t.flags & 128))
          Iu(), br(), (t.flags |= 98560), (l = !1);
        else if (((l = Ts(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(J(318));
            if (
              ((l = t.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(J(317));
            l[Xt] = t;
          } else
            br(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ot(t), (l = !1);
        } else Bt !== null && (ca(Bt), (Bt = null)), (l = !0);
        if (!l) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Be.current & 1 ? Ke === 0 && (Ke = 3) : Za())),
          t.updateQueue !== null && (t.flags |= 4),
          ot(t),
          null);
    case 4:
      return (
        jr(), ta(e, t), e === null && is(t.stateNode.containerInfo), ot(t), null
      );
    case 10:
      return Oa(t.type._context), ot(t), null;
    case 17:
      return xt(t.type) && co(), ot(t), null;
    case 19:
      if ((Le(Be), (l = t.memoizedState), l === null)) return ot(t), null;
      if (((r = (t.flags & 128) !== 0), (a = l.rendering), a === null))
        if (r) Ur(l, !1);
        else {
          if (Ke !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = xo(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    Ur(l, !1),
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
            We() > Cr &&
            ((t.flags |= 128), (r = !0), Ur(l, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = xo(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Ur(l, !0),
              l.tail === null && l.tailMode === "hidden" && !a.alternate && !Ue)
            )
              return ot(t), null;
          } else
            2 * We() - l.renderingStartTime > Cr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Ur(l, !1), (t.lanes = 4194304));
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
          (l.renderingStartTime = We()),
          (t.sibling = null),
          (n = Be.current),
          Oe(Be, r ? (n & 1) | 2 : n & 1),
          t)
        : (ot(t), null);
    case 22:
    case 23:
      return (
        Ja(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? wt & 1073741824 && (ot(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ot(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(J(156, t.tag));
}
function im(e, t) {
  switch ((Ia(t), t.tag)) {
    case 1:
      return (
        xt(t.type) && co(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        jr(),
        Le(gt),
        Le(at),
        Ba(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return za(t), null;
    case 13:
      if (
        (Le(Be), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(J(340));
        br();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Le(Be), null;
    case 4:
      return jr(), null;
    case 10:
      return Oa(t.type._context), null;
    case 22:
    case 23:
      return Ja(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var $s = !1,
  lt = !1,
  cm = typeof WeakSet == "function" ? WeakSet : Set,
  fe = null;
function dr(e, t) {
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
function na(e, t, n) {
  try {
    n();
  } catch (r) {
    He(e, t, r);
  }
}
var lc = !1;
function um(e, t) {
  if (((Ul = oo), (e = vu()), Ea(e))) {
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
              var w;
              g !== n || (o !== 0 && g.nodeType !== 3) || (i = a + o),
                g !== l || (r !== 0 && g.nodeType !== 3) || (c = a + r),
                g.nodeType === 3 && (a += g.nodeValue.length),
                (w = g.firstChild) !== null;

            )
              (p = g), (g = w);
            for (;;) {
              if (g === e) break t;
              if (
                (p === n && ++h === o && (i = a),
                p === l && ++d === r && (c = a),
                (w = g.nextSibling) !== null)
              )
                break;
              (g = p), (p = g.parentNode);
            }
            g = w;
          }
          n = i === -1 || c === -1 ? null : { start: i, end: c };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (
    zl = { focusedElem: e, selectionRange: n }, oo = !1, fe = t;
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
                  var b = v.memoizedProps,
                    _ = v.memoizedState,
                    u = t.stateNode,
                    f = u.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? b : Ut(t.type, b),
                      _
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
                throw Error(J(163));
            }
        } catch (j) {
          He(t, t.return, j);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (fe = e);
          break;
        }
        fe = t.return;
      }
  return (v = lc), (lc = !1), v;
}
function Kr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var l = o.destroy;
        (o.destroy = void 0), l !== void 0 && na(t, n, l);
      }
      o = o.next;
    } while (o !== r);
  }
}
function To(e, t) {
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
function ra(e) {
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
function hd(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), hd(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Xt], delete t[us], delete t[Fl], delete t[Wp], delete t[Qp])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function gd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ac(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || gd(e.return)) return null;
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
function sa(e, t, n) {
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
    for (sa(e, t, n), e = e.sibling; e !== null; ) sa(e, t, n), (e = e.sibling);
}
function oa(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (oa(e, t, n), e = e.sibling; e !== null; ) oa(e, t, n), (e = e.sibling);
}
var tt = null,
  zt = !1;
function fn(e, t, n) {
  for (n = n.child; n !== null; ) xd(e, t, n), (n = n.sibling);
}
function xd(e, t, n) {
  if (Kt && typeof Kt.onCommitFiberUnmount == "function")
    try {
      Kt.onCommitFiberUnmount(ko, n);
    } catch {}
  switch (n.tag) {
    case 5:
      lt || dr(n, t);
    case 6:
      var r = tt,
        o = zt;
      (tt = null),
        fn(e, t, n),
        (tt = r),
        (zt = o),
        tt !== null &&
          (zt
            ? ((e = tt),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : tt.removeChild(n.stateNode));
      break;
    case 18:
      tt !== null &&
        (zt
          ? ((e = tt),
            (n = n.stateNode),
            e.nodeType === 8
              ? ll(e.parentNode, n)
              : e.nodeType === 1 && ll(e, n),
            os(e))
          : ll(tt, n.stateNode));
      break;
    case 4:
      (r = tt),
        (o = zt),
        (tt = n.stateNode.containerInfo),
        (zt = !0),
        fn(e, t, n),
        (tt = r),
        (zt = o);
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
            a !== void 0 && (l & 2 || l & 4) && na(n, t, a),
            (o = o.next);
        } while (o !== r);
      }
      fn(e, t, n);
      break;
    case 1:
      if (
        !lt &&
        (dr(n, t),
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
      fn(e, t, n);
      break;
    case 21:
      fn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((lt = (r = lt) || n.memoizedState !== null), fn(e, t, n), (lt = r))
        : fn(e, t, n);
      break;
    default:
      fn(e, t, n);
  }
}
function ic(e) {
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
function Lt(e, t) {
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
              (tt = i.stateNode), (zt = !1);
              break e;
            case 3:
              (tt = i.stateNode.containerInfo), (zt = !0);
              break e;
            case 4:
              (tt = i.stateNode.containerInfo), (zt = !0);
              break e;
          }
          i = i.return;
        }
        if (tt === null) throw Error(J(160));
        xd(l, a, o), (tt = null), (zt = !1);
        var c = o.alternate;
        c !== null && (c.return = null), (o.return = null);
      } catch (h) {
        He(o, t, h);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) yd(t, e), (t = t.sibling);
}
function yd(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Lt(t, e), Qt(e), r & 4)) {
        try {
          Kr(3, e, e.return), To(3, e);
        } catch (b) {
          He(e, e.return, b);
        }
        try {
          Kr(5, e, e.return);
        } catch (b) {
          He(e, e.return, b);
        }
      }
      break;
    case 1:
      Lt(t, e), Qt(e), r & 512 && n !== null && dr(n, n.return);
      break;
    case 5:
      if (
        (Lt(t, e),
        Qt(e),
        r & 512 && n !== null && dr(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          ts(o, "");
        } catch (b) {
          He(e, e.return, b);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var l = e.memoizedProps,
          a = n !== null ? n.memoizedProps : l,
          i = e.type,
          c = e.updateQueue;
        if (((e.updateQueue = null), c !== null))
          try {
            i === "input" && l.type === "radio" && l.name != null && zc(o, l),
              Ml(i, a);
            var h = Ml(i, l);
            for (a = 0; a < c.length; a += 2) {
              var d = c[a],
                g = c[a + 1];
              d === "style"
                ? Vc(o, g)
                : d === "dangerouslySetInnerHTML"
                ? Fc(o, g)
                : d === "children"
                ? ts(o, g)
                : xa(o, d, g, h);
            }
            switch (i) {
              case "input":
                Sl(o, l);
                break;
              case "textarea":
                Bc(o, l);
                break;
              case "select":
                var p = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!l.multiple;
                var w = l.value;
                w != null
                  ? pr(o, !!l.multiple, w, !1)
                  : p !== !!l.multiple &&
                    (l.defaultValue != null
                      ? pr(o, !!l.multiple, l.defaultValue, !0)
                      : pr(o, !!l.multiple, l.multiple ? [] : "", !1));
            }
            o[us] = l;
          } catch (b) {
            He(e, e.return, b);
          }
      }
      break;
    case 6:
      if ((Lt(t, e), Qt(e), r & 4)) {
        if (e.stateNode === null) throw Error(J(162));
        (o = e.stateNode), (l = e.memoizedProps);
        try {
          o.nodeValue = l;
        } catch (b) {
          He(e, e.return, b);
        }
      }
      break;
    case 3:
      if (
        (Lt(t, e), Qt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          os(t.containerInfo);
        } catch (b) {
          He(e, e.return, b);
        }
      break;
    case 4:
      Lt(t, e), Qt(e);
      break;
    case 13:
      Lt(t, e),
        Qt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((l = o.memoizedState !== null),
          (o.stateNode.isHidden = l),
          !l ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Xa = We())),
        r & 4 && ic(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((lt = (h = lt) || d), Lt(t, e), (lt = h)) : Lt(t, e),
        Qt(e),
        r & 8192)
      ) {
        if (
          ((h = e.memoizedState !== null),
          (e.stateNode.isHidden = h) && !d && e.mode & 1)
        )
          for (fe = e, d = e.child; d !== null; ) {
            for (g = fe = d; fe !== null; ) {
              switch (((p = fe), (w = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Kr(4, p, p.return);
                  break;
                case 1:
                  dr(p, p.return);
                  var v = p.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (b) {
                      He(r, n, b);
                    }
                  }
                  break;
                case 5:
                  dr(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    uc(g);
                    continue;
                  }
              }
              w !== null ? ((w.return = p), (fe = w)) : uc(g);
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
                      (i.style.display = Hc("display", a)));
              } catch (b) {
                He(e, e.return, b);
              }
            }
          } else if (g.tag === 6) {
            if (d === null)
              try {
                g.stateNode.nodeValue = h ? "" : g.memoizedProps;
              } catch (b) {
                He(e, e.return, b);
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
      Lt(t, e), Qt(e), r & 4 && ic(e);
      break;
    case 21:
      break;
    default:
      Lt(t, e), Qt(e);
  }
}
function Qt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (gd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(J(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (ts(o, ""), (r.flags &= -33));
          var l = ac(e);
          oa(e, l, o);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo,
            i = ac(e);
          sa(e, i, a);
          break;
        default:
          throw Error(J(161));
      }
    } catch (c) {
      He(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function dm(e, t, n) {
  (fe = e), vd(e);
}
function vd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; fe !== null; ) {
    var o = fe,
      l = o.child;
    if (o.tag === 22 && r) {
      var a = o.memoizedState !== null || $s;
      if (!a) {
        var i = o.alternate,
          c = (i !== null && i.memoizedState !== null) || lt;
        i = $s;
        var h = lt;
        if ((($s = a), (lt = c) && !h))
          for (fe = o; fe !== null; )
            (a = fe),
              (c = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? dc(o)
                : c !== null
                ? ((c.return = a), (fe = c))
                : dc(o);
        for (; l !== null; ) (fe = l), vd(l), (l = l.sibling);
        (fe = o), ($s = i), (lt = h);
      }
      cc(e);
    } else
      o.subtreeFlags & 8772 && l !== null ? ((l.return = o), (fe = l)) : cc(e);
  }
}
function cc(e) {
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
              lt || To(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !lt)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ut(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var l = t.updateQueue;
              l !== null && Qi(t, l, r);
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
                Qi(t, a, n);
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
                    g !== null && os(g);
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
              throw Error(J(163));
          }
        lt || (t.flags & 512 && ra(t));
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
function uc(e) {
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
function dc(e) {
  for (; fe !== null; ) {
    var t = fe;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            To(4, t);
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
            ra(t);
          } catch (c) {
            He(t, l, c);
          }
          break;
        case 5:
          var a = t.return;
          try {
            ra(t);
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
  wo = un.ReactCurrentDispatcher,
  Ya = un.ReactCurrentOwner,
  Pt = un.ReactCurrentBatchConfig,
  Ie = 0,
  et = null,
  Qe = null,
  nt = 0,
  wt = 0,
  fr = En(0),
  Ke = 0,
  gs = null,
  Fn = 0,
  Ao = 0,
  qa = 0,
  Jr = null,
  mt = null,
  Xa = 0,
  Cr = 1 / 0,
  Zt = null,
  bo = !1,
  la = null,
  Sn = null,
  Ls = !1,
  yn = null,
  No = 0,
  Zr = 0,
  aa = null,
  Xs = -1,
  Ks = 0;
function ut() {
  return Ie & 6 ? We() : Xs !== -1 ? Xs : (Xs = We());
}
function Cn(e) {
  return e.mode & 1
    ? Ie & 2 && nt !== 0
      ? nt & -nt
      : qp.transition !== null
      ? (Ks === 0 && (Ks = ru()), Ks)
      : ((e = Te),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : uu(e.type))),
        e)
    : 1;
}
function Ft(e, t, n, r) {
  if (50 < Zr) throw ((Zr = 0), (aa = null), Error(J(185)));
  ys(e, n, r),
    (!(Ie & 2) || e !== et) &&
      (e === et && (!(Ie & 2) && (Ao |= n), Ke === 4 && gn(e, nt)),
      yt(e, r),
      n === 1 && Ie === 0 && !(t.mode & 1) && ((Cr = We() + 500), Po && Pn()));
}
function yt(e, t) {
  var n = e.callbackNode;
  qf(e, t);
  var r = so(e, e === et ? nt : 0);
  if (r === 0)
    n !== null && wi(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && wi(n), t === 1))
      e.tag === 0 ? Yp(fc.bind(null, e)) : Mu(fc.bind(null, e)),
        Hp(function () {
          !(Ie & 6) && Pn();
        }),
        (n = null);
    else {
      switch (su(r)) {
        case 1:
          n = Na;
          break;
        case 4:
          n = tu;
          break;
        case 16:
          n = ro;
          break;
        case 536870912:
          n = nu;
          break;
        default:
          n = ro;
      }
      n = _d(n, wd.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function wd(e, t) {
  if (((Xs = -1), (Ks = 0), Ie & 6)) throw Error(J(327));
  var n = e.callbackNode;
  if (yr() && e.callbackNode !== n) return null;
  var r = so(e, e === et ? nt : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = jo(e, r);
  else {
    t = r;
    var o = Ie;
    Ie |= 2;
    var l = Nd();
    (et !== e || nt !== t) && ((Zt = null), (Cr = We() + 500), Ln(e, t));
    do
      try {
        hm();
        break;
      } catch (i) {
        bd(e, i);
      }
    while (!0);
    Aa(),
      (wo.current = l),
      (Ie = o),
      Qe !== null ? (t = 0) : ((et = null), (nt = 0), (t = Ke));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Tl(e)), o !== 0 && ((r = o), (t = ia(e, o)))), t === 1)
    )
      throw ((n = gs), Ln(e, 0), gn(e, r), yt(e, We()), n);
    if (t === 6) gn(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !pm(o) &&
          ((t = jo(e, r)),
          t === 2 && ((l = Tl(e)), l !== 0 && ((r = l), (t = ia(e, l)))),
          t === 1))
      )
        throw ((n = gs), Ln(e, 0), gn(e, r), yt(e, We()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(J(345));
        case 2:
          Tn(e, mt, Zt);
          break;
        case 3:
          if (
            (gn(e, r), (r & 130023424) === r && ((t = Xa + 500 - We()), 10 < t))
          ) {
            if (so(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              ut(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Gl(Tn.bind(null, e, mt, Zt), t);
            break;
          }
          Tn(e, mt, Zt);
          break;
        case 4:
          if ((gn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var a = 31 - Gt(r);
            (l = 1 << a), (a = t[a]), a > o && (o = a), (r &= ~l);
          }
          if (
            ((r = o),
            (r = We() - r),
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
            e.timeoutHandle = Gl(Tn.bind(null, e, mt, Zt), r);
            break;
          }
          Tn(e, mt, Zt);
          break;
        case 5:
          Tn(e, mt, Zt);
          break;
        default:
          throw Error(J(329));
      }
    }
  }
  return yt(e, We()), e.callbackNode === n ? wd.bind(null, e) : null;
}
function ia(e, t) {
  var n = Jr;
  return (
    e.current.memoizedState.isDehydrated && (Ln(e, t).flags |= 256),
    (e = jo(e, t)),
    e !== 2 && ((t = mt), (mt = n), t !== null && ca(t)),
    e
  );
}
function ca(e) {
  mt === null ? (mt = e) : mt.push.apply(mt, e);
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
            if (!Ht(l(), o)) return !1;
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
function gn(e, t) {
  for (
    t &= ~qa,
      t &= ~Ao,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Gt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function fc(e) {
  if (Ie & 6) throw Error(J(327));
  yr();
  var t = so(e, 0);
  if (!(t & 1)) return yt(e, We()), null;
  var n = jo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Tl(e);
    r !== 0 && ((t = r), (n = ia(e, r)));
  }
  if (n === 1) throw ((n = gs), Ln(e, 0), gn(e, t), yt(e, We()), n);
  if (n === 6) throw Error(J(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Tn(e, mt, Zt),
    yt(e, We()),
    null
  );
}
function Ka(e, t) {
  var n = Ie;
  Ie |= 1;
  try {
    return e(t);
  } finally {
    (Ie = n), Ie === 0 && ((Cr = We() + 500), Po && Pn());
  }
}
function Hn(e) {
  yn !== null && yn.tag === 0 && !(Ie & 6) && yr();
  var t = Ie;
  Ie |= 1;
  var n = Pt.transition,
    r = Te;
  try {
    if (((Pt.transition = null), (Te = 1), e)) return e();
  } finally {
    (Te = r), (Pt.transition = n), (Ie = t), !(Ie & 6) && Pn();
  }
}
function Ja() {
  (wt = fr.current), Le(fr);
}
function Ln(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Fp(n)), Qe !== null))
    for (n = Qe.return; n !== null; ) {
      var r = n;
      switch ((Ia(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && co();
          break;
        case 3:
          jr(), Le(gt), Le(at), Ba();
          break;
        case 5:
          za(r);
          break;
        case 4:
          jr();
          break;
        case 13:
          Le(Be);
          break;
        case 19:
          Le(Be);
          break;
        case 10:
          Oa(r.type._context);
          break;
        case 22:
        case 23:
          Ja();
      }
      n = n.return;
    }
  if (
    ((et = e),
    (Qe = e = kn(e.current, null)),
    (nt = wt = t),
    (Ke = 0),
    (gs = null),
    (qa = Ao = Fn = 0),
    (mt = Jr = null),
    On !== null)
  ) {
    for (t = 0; t < On.length; t++)
      if (((n = On[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          l = n.pending;
        if (l !== null) {
          var a = l.next;
          (l.next = o), (r.next = a);
        }
        n.pending = r;
      }
    On = null;
  }
  return e;
}
function bd(e, t) {
  do {
    var n = Qe;
    try {
      if ((Aa(), (Qs.current = vo), yo)) {
        for (var r = Ge.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        yo = !1;
      }
      if (
        ((Gn = 0),
        (Ze = Xe = Ge = null),
        (Xr = !1),
        (ps = 0),
        (Ya.current = null),
        n === null || n.return === null)
      ) {
        (Ke = 1), (gs = t), (Qe = null);
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
          var w = Zi(a);
          if (w !== null) {
            (w.flags &= -257),
              ec(w, a, i, l, t),
              w.mode & 1 && Ji(l, h, t),
              (t = w),
              (c = h);
            var v = t.updateQueue;
            if (v === null) {
              var b = new Set();
              b.add(c), (t.updateQueue = b);
            } else v.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              Ji(l, h, t), Za();
              break e;
            }
            c = Error(J(426));
          }
        } else if (Ue && i.mode & 1) {
          var _ = Zi(a);
          if (_ !== null) {
            !(_.flags & 65536) && (_.flags |= 256),
              ec(_, a, i, l, t),
              Ra(Sr(c, i));
            break e;
          }
        }
        (l = c = Sr(c, i)),
          Ke !== 4 && (Ke = 2),
          Jr === null ? (Jr = [l]) : Jr.push(l),
          (l = a);
        do {
          switch (l.tag) {
            case 3:
              (l.flags |= 65536), (t &= -t), (l.lanes |= t);
              var u = sd(l, c, t);
              Wi(l, u);
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
                    (Sn === null || !Sn.has(x))))
              ) {
                (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                var j = od(l, i, t);
                Wi(l, j);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      Sd(n);
    } catch (L) {
      (t = L), Qe === n && n !== null && (Qe = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Nd() {
  var e = wo.current;
  return (wo.current = vo), e === null ? vo : e;
}
function Za() {
  (Ke === 0 || Ke === 3 || Ke === 2) && (Ke = 4),
    et === null || (!(Fn & 268435455) && !(Ao & 268435455)) || gn(et, nt);
}
function jo(e, t) {
  var n = Ie;
  Ie |= 2;
  var r = Nd();
  (et !== e || nt !== t) && ((Zt = null), Ln(e, t));
  do
    try {
      mm();
      break;
    } catch (o) {
      bd(e, o);
    }
  while (!0);
  if ((Aa(), (Ie = n), (wo.current = r), Qe !== null)) throw Error(J(261));
  return (et = null), (nt = 0), Ke;
}
function mm() {
  for (; Qe !== null; ) jd(Qe);
}
function hm() {
  for (; Qe !== null && !zf(); ) jd(Qe);
}
function jd(e) {
  var t = kd(e.alternate, e, wt);
  (e.memoizedProps = e.pendingProps),
    t === null ? Sd(e) : (Qe = t),
    (Ya.current = null);
}
function Sd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = im(n, t)), n !== null)) {
        (n.flags &= 32767), (Qe = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Ke = 6), (Qe = null);
        return;
      }
    } else if (((n = am(n, t, wt)), n !== null)) {
      Qe = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Qe = t;
      return;
    }
    Qe = t = e;
  } while (t !== null);
  Ke === 0 && (Ke = 5);
}
function Tn(e, t, n) {
  var r = Te,
    o = Pt.transition;
  try {
    (Pt.transition = null), (Te = 1), gm(e, t, n, r);
  } finally {
    (Pt.transition = o), (Te = r);
  }
  return null;
}
function gm(e, t, n, r) {
  do yr();
  while (yn !== null);
  if (Ie & 6) throw Error(J(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(J(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var l = n.lanes | n.childLanes;
  if (
    (Xf(e, l),
    e === et && ((Qe = et = null), (nt = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ls ||
      ((Ls = !0),
      _d(ro, function () {
        return yr(), null;
      })),
    (l = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || l)
  ) {
    (l = Pt.transition), (Pt.transition = null);
    var a = Te;
    Te = 1;
    var i = Ie;
    (Ie |= 4),
      (Ya.current = null),
      um(e, n),
      yd(n, e),
      Op(zl),
      (oo = !!Ul),
      (zl = Ul = null),
      (e.current = n),
      dm(n),
      Bf(),
      (Ie = i),
      (Te = a),
      (Pt.transition = l);
  } else e.current = n;
  if (
    (Ls && ((Ls = !1), (yn = e), (No = o)),
    (l = e.pendingLanes),
    l === 0 && (Sn = null),
    Hf(n.stateNode),
    yt(e, We()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (bo) throw ((bo = !1), (e = la), (la = null), e);
  return (
    No & 1 && e.tag !== 0 && yr(),
    (l = e.pendingLanes),
    l & 1 ? (e === aa ? Zr++ : ((Zr = 0), (aa = e))) : (Zr = 0),
    Pn(),
    null
  );
}
function yr() {
  if (yn !== null) {
    var e = su(No),
      t = Pt.transition,
      n = Te;
    try {
      if (((Pt.transition = null), (Te = 16 > e ? 16 : e), yn === null))
        var r = !1;
      else {
        if (((e = yn), (yn = null), (No = 0), Ie & 6)) throw Error(J(331));
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
                      Kr(8, d, l);
                  }
                  var g = d.child;
                  if (g !== null) (g.return = d), (fe = g);
                  else
                    for (; fe !== null; ) {
                      d = fe;
                      var p = d.sibling,
                        w = d.return;
                      if ((hd(d), d === h)) {
                        fe = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = w), (fe = p);
                        break;
                      }
                      fe = w;
                    }
                }
              }
              var v = l.alternate;
              if (v !== null) {
                var b = v.child;
                if (b !== null) {
                  v.child = null;
                  do {
                    var _ = b.sibling;
                    (b.sibling = null), (b = _);
                  } while (b !== null);
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
                    Kr(9, l, l.return);
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
                      To(9, i);
                  }
                } catch (L) {
                  He(i, i.return, L);
                }
              if (i === a) {
                fe = null;
                break e;
              }
              var j = i.sibling;
              if (j !== null) {
                (j.return = i.return), (fe = j);
                break e;
              }
              fe = i.return;
            }
        }
        if (
          ((Ie = o), Pn(), Kt && typeof Kt.onPostCommitFiberRoot == "function")
        )
          try {
            Kt.onPostCommitFiberRoot(ko, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (Te = n), (Pt.transition = t);
    }
  }
  return !1;
}
function pc(e, t, n) {
  (t = Sr(n, t)),
    (t = sd(e, t, 1)),
    (e = jn(e, t, 1)),
    (t = ut()),
    e !== null && (ys(e, 1, t), yt(e, t));
}
function He(e, t, n) {
  if (e.tag === 3) pc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        pc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Sn === null || !Sn.has(r)))
        ) {
          (e = Sr(n, e)),
            (e = od(t, e, 1)),
            (t = jn(t, e, 1)),
            (e = ut()),
            t !== null && (ys(t, 1, e), yt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function xm(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ut()),
    (e.pingedLanes |= e.suspendedLanes & n),
    et === e &&
      (nt & n) === n &&
      (Ke === 4 || (Ke === 3 && (nt & 130023424) === nt && 500 > We() - Xa)
        ? Ln(e, 0)
        : (qa |= n)),
    yt(e, t);
}
function Cd(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Ds), (Ds <<= 1), !(Ds & 130023424) && (Ds = 4194304))
      : (t = 1));
  var n = ut();
  (e = an(e, t)), e !== null && (ys(e, t, n), yt(e, n));
}
function ym(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Cd(e, n);
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
      throw Error(J(314));
  }
  r !== null && r.delete(t), Cd(e, n);
}
var kd;
kd = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || gt.current) ht = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ht = !1), lm(e, t, n);
      ht = !!(e.flags & 131072);
    }
  else (ht = !1), Ue && t.flags & 1048576 && Eu(t, po, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      qs(e, t), (e = t.pendingProps);
      var o = wr(t, at.current);
      xr(t, n), (o = Fa(null, t, r, e, o, n));
      var l = Ha();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            xt(r) ? ((l = !0), uo(t)) : (l = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            La(t),
            (o.updater = Ro),
            (t.stateNode = o),
            (o._reactInternals = t),
            ql(t, r, e, n),
            (t = Jl(null, t, r, !0, l, n)))
          : ((t.tag = 0), Ue && l && Pa(t), ct(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (qs(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = bm(r)),
          (e = Ut(r, e)),
          o)
        ) {
          case 0:
            t = Kl(null, t, r, e, n);
            break e;
          case 1:
            t = rc(null, t, r, e, n);
            break e;
          case 11:
            t = tc(null, t, r, e, n);
            break e;
          case 14:
            t = nc(null, t, r, Ut(r.type, e), n);
            break e;
        }
        throw Error(J(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ut(r, o)),
        Kl(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ut(r, o)),
        rc(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((cd(t), e === null)) throw Error(J(387));
        (r = t.pendingProps),
          (l = t.memoizedState),
          (o = l.element),
          Ou(e, t),
          go(t, r, null, n);
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
            (o = Sr(Error(J(423)), t)), (t = sc(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = Sr(Error(J(424)), t)), (t = sc(e, t, r, n, o));
            break e;
          } else
            for (
              bt = Nn(t.stateNode.containerInfo.firstChild),
                jt = t,
                Ue = !0,
                Bt = null,
                n = Tu(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((br(), r === o)) {
            t = cn(e, t, n);
            break e;
          }
          ct(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        $u(t),
        e === null && Wl(t),
        (r = t.type),
        (o = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (a = o.children),
        Bl(r, o) ? (a = null) : l !== null && Bl(r, l) && (t.flags |= 32),
        id(e, t),
        ct(e, t, a, n),
        t.child
      );
    case 6:
      return e === null && Wl(t), null;
    case 13:
      return ud(e, t, n);
    case 4:
      return (
        Ua(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Nr(t, null, r, n)) : ct(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ut(r, o)),
        tc(e, t, r, o, n)
      );
    case 7:
      return ct(e, t, t.pendingProps, n), t.child;
    case 8:
      return ct(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ct(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (l = t.memoizedProps),
          (a = o.value),
          Oe(mo, r._currentValue),
          (r._currentValue = a),
          l !== null)
        )
          if (Ht(l.value, a)) {
            if (l.children === o.children && !gt.current) {
              t = cn(e, t, n);
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
                      (c = sn(-1, n & -n)), (c.tag = 2);
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
                      Ql(l.return, n, t),
                      (i.lanes |= n);
                    break;
                  }
                  c = c.next;
                }
              } else if (l.tag === 10) a = l.type === t.type ? null : l.child;
              else if (l.tag === 18) {
                if (((a = l.return), a === null)) throw Error(J(341));
                (a.lanes |= n),
                  (i = a.alternate),
                  i !== null && (i.lanes |= n),
                  Ql(a, n, t),
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
        ct(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        xr(t, n),
        (o = Tt(o)),
        (r = r(o)),
        (t.flags |= 1),
        ct(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = Ut(r, t.pendingProps)),
        (o = Ut(r.type, o)),
        nc(e, t, r, o, n)
      );
    case 15:
      return ld(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ut(r, o)),
        qs(e, t),
        (t.tag = 1),
        xt(r) ? ((e = !0), uo(t)) : (e = !1),
        xr(t, n),
        rd(t, r, o),
        ql(t, r, o, n),
        Jl(null, t, r, !0, e, n)
      );
    case 19:
      return dd(e, t, n);
    case 22:
      return ad(e, t, n);
  }
  throw Error(J(156, t.tag));
};
function _d(e, t) {
  return eu(e, t);
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
function Et(e, t, n, r) {
  return new wm(e, t, n, r);
}
function ei(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function bm(e) {
  if (typeof e == "function") return ei(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === va)) return 11;
    if (e === wa) return 14;
  }
  return 2;
}
function kn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Et(e.tag, t, e.key, e.mode)),
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
  var a = 2;
  if (((r = e), typeof e == "function")) ei(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else
    e: switch (e) {
      case nr:
        return Un(n.children, o, l, t);
      case ya:
        (a = 8), (o |= 8);
        break;
      case vl:
        return (
          (e = Et(12, n, t, o | 2)), (e.elementType = vl), (e.lanes = l), e
        );
      case wl:
        return (e = Et(13, n, t, o)), (e.elementType = wl), (e.lanes = l), e;
      case bl:
        return (e = Et(19, n, t, o)), (e.elementType = bl), (e.lanes = l), e;
      case $c:
        return Oo(n, o, l, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Ac:
              a = 10;
              break e;
            case Oc:
              a = 9;
              break e;
            case va:
              a = 11;
              break e;
            case wa:
              a = 14;
              break e;
            case pn:
              (a = 16), (r = null);
              break e;
          }
        throw Error(J(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Et(a, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = l), t
  );
}
function Un(e, t, n, r) {
  return (e = Et(7, e, r, t)), (e.lanes = n), e;
}
function Oo(e, t, n, r) {
  return (
    (e = Et(22, e, r, t)),
    (e.elementType = $c),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ml(e, t, n) {
  return (e = Et(6, e, null, t)), (e.lanes = n), e;
}
function hl(e, t, n) {
  return (
    (t = Et(4, e.children !== null ? e.children : [], e.key, t)),
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
    (this.eventTimes = qo(0)),
    (this.expirationTimes = qo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = qo(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function ti(e, t, n, r, o, l, a, i, c) {
  return (
    (e = new Nm(e, t, n, i, c)),
    t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
    (l = Et(3, null, null, t)),
    (e.current = l),
    (l.stateNode = e),
    (l.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    La(l),
    e
  );
}
function jm(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: tr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Dd(e) {
  if (!e) return Dn;
  e = e._reactInternals;
  e: {
    if (Wn(e) !== e || e.tag !== 1) throw Error(J(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (xt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(J(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (xt(n)) return Du(e, n, t);
  }
  return t;
}
function Md(e, t, n, r, o, l, a, i, c) {
  return (
    (e = ti(n, r, !0, e, o, l, a, i, c)),
    (e.context = Dd(null)),
    (n = e.current),
    (r = ut()),
    (o = Cn(n)),
    (l = sn(r, o)),
    (l.callback = t ?? null),
    jn(n, l, o),
    (e.current.lanes = o),
    ys(e, o, r),
    yt(e, r),
    e
  );
}
function $o(e, t, n, r) {
  var o = t.current,
    l = ut(),
    a = Cn(o);
  return (
    (n = Dd(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = sn(l, a)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = jn(o, t, a)),
    e !== null && (Ft(e, o, a, l), Ws(e, o, a)),
    a
  );
}
function So(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function mc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ni(e, t) {
  mc(e, t), (e = e.alternate) && mc(e, t);
}
function Sm() {
  return null;
}
var Ed =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ri(e) {
  this._internalRoot = e;
}
Lo.prototype.render = ri.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(J(409));
  $o(e, t, null, null);
};
Lo.prototype.unmount = ri.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Hn(function () {
      $o(null, e, null, null);
    }),
      (t[ln] = null);
  }
};
function Lo(e) {
  this._internalRoot = e;
}
Lo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = au();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < hn.length && t !== 0 && t < hn[n].priority; n++);
    hn.splice(n, 0, e), n === 0 && cu(e);
  }
};
function si(e) {
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
function hc() {}
function Cm(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var l = r;
      r = function () {
        var h = So(a);
        l.call(h);
      };
    }
    var a = Md(t, r, e, 0, null, !1, !1, "", hc);
    return (
      (e._reactRootContainer = a),
      (e[ln] = a.current),
      is(e.nodeType === 8 ? e.parentNode : e),
      Hn(),
      a
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var i = r;
    r = function () {
      var h = So(c);
      i.call(h);
    };
  }
  var c = ti(e, 0, !1, null, null, !1, !1, "", hc);
  return (
    (e._reactRootContainer = c),
    (e[ln] = c.current),
    is(e.nodeType === 8 ? e.parentNode : e),
    Hn(function () {
      $o(t, c, n, r);
    }),
    c
  );
}
function zo(e, t, n, r, o) {
  var l = n._reactRootContainer;
  if (l) {
    var a = l;
    if (typeof o == "function") {
      var i = o;
      o = function () {
        var c = So(a);
        i.call(c);
      };
    }
    $o(t, a, e, o);
  } else a = Cm(n, t, e, o, r);
  return So(a);
}
ou = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Fr(t.pendingLanes);
        n !== 0 &&
          (ja(t, n | 1), yt(t, We()), !(Ie & 6) && ((Cr = We() + 500), Pn()));
      }
      break;
    case 13:
      Hn(function () {
        var r = an(e, 1);
        if (r !== null) {
          var o = ut();
          Ft(r, e, 1, o);
        }
      }),
        ni(e, 1);
  }
};
Sa = function (e) {
  if (e.tag === 13) {
    var t = an(e, 134217728);
    if (t !== null) {
      var n = ut();
      Ft(t, e, 134217728, n);
    }
    ni(e, 134217728);
  }
};
lu = function (e) {
  if (e.tag === 13) {
    var t = Cn(e),
      n = an(e, t);
    if (n !== null) {
      var r = ut();
      Ft(n, e, t, r);
    }
    ni(e, t);
  }
};
au = function () {
  return Te;
};
iu = function (e, t) {
  var n = Te;
  try {
    return (Te = e), t();
  } finally {
    Te = n;
  }
};
Pl = function (e, t, n) {
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
            var o = Eo(r);
            if (!o) throw Error(J(90));
            Uc(r), Sl(r, o);
          }
        }
      }
      break;
    case "textarea":
      Bc(e, n);
      break;
    case "select":
      (t = n.value), t != null && pr(e, !!n.multiple, t, !1);
  }
};
Yc = Ka;
qc = Hn;
var km = { usingClientEntryPoint: !1, Events: [ws, lr, Eo, Wc, Qc, Ka] },
  zr = {
    findFiberByHostInstance: An,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  _m = {
    bundleType: zr.bundleType,
    version: zr.version,
    rendererPackageName: zr.rendererPackageName,
    rendererConfig: zr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: un.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Jc(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: zr.findFiberByHostInstance || Sm,
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
      (ko = Us.inject(_m)), (Kt = Us);
    } catch {}
}
Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = km;
Ct.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!si(t)) throw Error(J(200));
  return jm(e, t, null, n);
};
Ct.createRoot = function (e, t) {
  if (!si(e)) throw Error(J(299));
  var n = !1,
    r = "",
    o = Ed;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = ti(e, 1, !1, null, null, n, !1, r, o)),
    (e[ln] = t.current),
    is(e.nodeType === 8 ? e.parentNode : e),
    new ri(t)
  );
};
Ct.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(J(188))
      : ((e = Object.keys(e).join(",")), Error(J(268, e)));
  return (e = Jc(t)), (e = e === null ? null : e.stateNode), e;
};
Ct.flushSync = function (e) {
  return Hn(e);
};
Ct.hydrate = function (e, t, n) {
  if (!Uo(t)) throw Error(J(200));
  return zo(null, e, t, !0, n);
};
Ct.hydrateRoot = function (e, t, n) {
  if (!si(e)) throw Error(J(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    l = "",
    a = Ed;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = Md(t, null, e, 1, n ?? null, o, !1, l, a)),
    (e[ln] = t.current),
    is(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Lo(t);
};
Ct.render = function (e, t, n) {
  if (!Uo(t)) throw Error(J(200));
  return zo(null, e, t, !1, n);
};
Ct.unmountComponentAtNode = function (e) {
  if (!Uo(e)) throw Error(J(40));
  return e._reactRootContainer
    ? (Hn(function () {
        zo(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[ln] = null);
        });
      }),
      !0)
    : !1;
};
Ct.unstable_batchedUpdates = Ka;
Ct.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Uo(n)) throw Error(J(200));
  if (e == null || e._reactInternals === void 0) throw Error(J(38));
  return zo(e, t, n, !1, r);
};
Ct.version = "18.3.1-next-f1338f8080-20240426";
function Pd() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Pd);
    } catch (e) {
      console.error(e);
    }
}
Pd(), (Pc.exports = Ct);
var Dm = Pc.exports,
  Id,
  gc = Dm;
(Id = gc.createRoot), gc.hydrateRoot;
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
                    c.shelf.forEach((p, w) => {
                      let v = {
                        GUID: p.GUID,
                        MASTER_GUID: p.Master_GUID,
                        name: `層架_${w}`,
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
                            p.medMapBox.forEach((_, u) => {
                              let f = {
                                  GUID: _.GUID,
                                  MASTER_GUID: _.Master_GUID,
                                  name: "藥盒",
                                  class: 4,
                                  gird_position: _.position,
                                  ip: _.ip_box,
                                  box_type: "",
                                  width: _.width,
                                  height: _.height,
                                  serverType: _.serverType,
                                  serverName: _.serverName,
                                  med_info: [],
                                  type: "med_box",
                                },
                                x = {},
                                j = p.position.split(","),
                                L = _.position.split(",");
                              if (_.storage) {
                                switch (
                                  ((f.device_type = _.storage.DeviceType),
                                  (f.storage = _.storage),
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
                                (x.name = _.storage.Name),
                                  (x.code = _.storage.Code),
                                  (x.cht_name = _.storage.ChineseName),
                                  (x.SKDIACODE = _.storage.SKDIACODE),
                                  (x.qty = _.storage.StorageName),
                                  (x.stockCol = `${+j[0] + 1}`),
                                  (x.stockRow = ""),
                                  (x.stock = `${+L[1] + 1}`);
                              } else
                                (f.device_type = 10),
                                  (f.box_type = "2.9"),
                                  (x.name = ""),
                                  (x.code = ""),
                                  (x.cht_name = ""),
                                  (x.stockCol = `${+j[0] + 1}`),
                                  (x.stockRow = ""),
                                  (x.stock = `${+L[1] + 1}`);
                              o.contents[a].med_list.push(x),
                                (f.med_info[0] = x),
                                v.contents.push(f);
                            });
                      else {
                        (v.type = "store_shelves"),
                          (v.ip = p.ip_light),
                          (v.width = p.width),
                          (v.height = p.height);
                        const _ = p.medMapStock.sort((u, f) => {
                          const [x] = u.location.split(",").map(Number),
                            [j] = f.location.split(",").map(Number);
                          return x - j;
                        });
                        (v.medMapStock = _),
                          (v.name = p.name),
                          _.forEach((u, f) => {
                            let x = p.position.split(",");
                            if (u.code) {
                              let j = {};
                              (j.name = u.name),
                                (j.code = u.code),
                                (j.cht_name = ""),
                                (j.SKDIACODE = u.material_no),
                                (j.qty = u.qty),
                                (j.stockCol = `${+x[0] + 1}`),
                                (j.stockRow = `${+x[1] + 1}`),
                                (j.stock = `${f + 1}`),
                                o.contents[a].med_list.push(j);
                            }
                          });
                      }
                      let b = p.position.split(",")[1];
                      g < +b &&
                        ((g = +b), (o.contents[a].contents[h].oriMaxCol = +g)),
                        o.contents[a].contents[h].contents.push(v);
                    }),
                    Array.isArray(c.drawer) &&
                      c.drawer.forEach((p, w) => {
                        let v = {
                          GUID: p.GUID,
                          MASTER_GUID: p.Master_GUID,
                          name: `抽屜 ${w}`,
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
                                        u.forEach((j, L) => {
                                          let P = {
                                            Row: j.Row,
                                            Column: j.Column,
                                            Width: 1,
                                            Height: 1,
                                            Slave: j.Slave,
                                            SlaveBox_Row: j.SlaveBox_Row,
                                            SlaveBox_Column: j.SlaveBox_Column,
                                            MasterBox_Column:
                                              j.MasterBox_Column,
                                            MasterBox_Row: j.MasterBox_Row,
                                            Name: j.Name,
                                            Code: j.Code,
                                            ChineseName: j.ChineseName,
                                            GUID: j.GUID,
                                          };
                                          x.push(P),
                                            j.Code &&
                                              o.contents[a].med_list.push(
                                                j.Code
                                              );
                                        }),
                                        v.Boxes.push(x);
                                    })
                                  : (v.Boxes = p.drawer.Boxes)))
                            : ((v.type = "list_draw"),
                              (v.name = `清單抽屜 ${w}`));
                        let b = p.position.split(",")[1];
                        g < +b &&
                          ((g = +b),
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
const It = new Em(),
  Pm = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: It },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Rd = m.createContext(void 0),
  Im = ({ children: e }) => {
    const [t, n] = m.useState(!1),
      [r, o] = m.useState(null),
      [l, a] = m.useState(!1),
      [i, c] = m.useState(null),
      [h, d] = m.useState(null),
      [g, p] = m.useState("medicine"),
      [w, v] = m.useState(!1),
      [b, _] = m.useState(0),
      [u, f] = m.useState({ message: "", type: "success", isVisible: !1 }),
      [x, j] = m.useState(!1),
      [L, P] = m.useState(null),
      [R, N] = m.useState("edit"),
      [I, S] = m.useState(!1),
      [O, G] = m.useState(null),
      [E, C] = m.useState(!1),
      [Z, M] = m.useState(null),
      [F, k] = m.useState(!1),
      [Q, de] = m.useState(!1),
      [X, ne] = m.useState(null),
      [je, oe] = m.useState(!1),
      [ve, $] = m.useState(null),
      [le, pe] = m.useState(!1),
      [T, se] = m.useState(null),
      [Se, U] = m.useState(!1),
      [ee, ye] = m.useState(null),
      [z, D] = m.useState(null),
      [A, H] = m.useState("add"),
      [re, ae] = m.useState(!1),
      [xe, be] = m.useState([]),
      [Ne, _e] = m.useState([]),
      [ce, me] = m.useState(!1),
      [we, De] = m.useState(!1),
      [Ve, Ce] = m.useState(""),
      [qe, ze] = m.useState(!1),
      [vt, it] = m.useState(""),
      [In, Vt] = m.useState(!1),
      [Go, y] = m.useState(null),
      [W, Y] = m.useState(null),
      B = () => {
        sessionStorage.removeItem("user_session"), n(!1), o(null);
      },
      te = m.useCallback(() => {
        _((Me) => Me + 1);
      }, []),
      V = m.useCallback((Me, _t) => {
        f({ message: Me, type: _t, isVisible: !0 });
      }, []),
      ue = m.useCallback(() => {
        f((Me) => ({ ...Me, isVisible: !1 }));
      }, []),
      ie = (Me) => {
        P(Me), N("edit"), j(!0);
      },
      K = () => {
        const Me = {
          GUID: `new_medbox_${Date.now()}`,
          name: "",
          box_type: "",
          width: [],
          width_index: 0,
          med_info: [],
          parentShelf: null,
        };
        P(Me), N("add"), j(!0);
      },
      q = () => {
        j(!1), P(null), N("edit");
      },
      ge = (Me) => {
        G(Me), S(!0);
      },
      he = () => {
        S(!1), G(null);
      },
      Pe = (Me) => {
        M(Me), C(!0);
      },
      Re = () => {
        C(!1), M(null);
      },
      Ot = (Me) => {
        ne(Me), de(!0);
      },
      Qn = () => {
        de(!1), ne(null);
      },
      Er = (Me) => {
        $(Me), oe(!0);
      },
      Wt = () => {
        oe(!1), $(null);
      },
      Pr = (Me) => {
        se(Me), pe(!0);
      },
      Ir = () => {
        pe(!1), se(null);
      },
      Bd = (Me) => {
        ye(Me), D(null), H("add"), U(!0);
      },
      Gd = (Me, _t) => {
        ye(Me), D(_t), H("edit"), U(!0);
      },
      Fd = () => {
        U(!1), ye(null), D(null), H("add");
      },
      Hd = () => {
        ae(!0);
      },
      Vd = () => {
        ae(!1);
      },
      Wd = (Me = "") => {
        Ce(Me), De(!0);
      },
      Qd = () => {
        De(!1);
      },
      Yd = (Me) => {
        it(Me), ze(!0);
      },
      qd = () => {
        ze(!1), it("");
      },
      Xd = (Me, _t) => {
        y(Me), Y(_t || null), Vt(!0);
      },
      Kd = () => {
        Vt(!1), y(null), Y(null);
      },
      Jd = m.useCallback(async () => {
        if (!i) {
          console.warn("沒有選擇部門分類，無法重新載入資料");
          return;
        }
        console.log("🔄 重新載入藥品地圖資料，部門類型:", i), k(!0);
        try {
          const Me = await ke.getMedMapByDepartment(i);
          if (Me.Code === 200 && Me.Data) {
            console.log("📡 重新載入成功:", Me.Data);
            const _t = It.convertMedMapApiToFakeData(Me.Data);
            if (!It.validateConvertedData(_t)) {
              console.error("❌ 轉換後的資料驗證失敗"), d(null);
              return;
            }
            d(_t), console.log("✅ 地圖資料已重新載入");
          } else console.error("❌ API 回傳錯誤:", Me), d(null);
        } catch (Me) {
          console.error("💥 重新載入藥品地圖資料失敗:", Me), d(null);
        } finally {
          k(!1);
        }
      }, [i, k, d]),
      Zd = m.useCallback((Me, _t) => {
        d(
          (Yn) =>
            Yn &&
            Yn.map((li) => {
              const qn = { ...li };
              return (
                qn.contents &&
                  (qn.contents = qn.contents.map((Xn) => {
                    const Kn = { ...Xn };
                    return (
                      Kn.contents &&
                        (Kn.contents = Kn.contents.map((Jn) => {
                          const Zn = { ...Jn };
                          return (
                            Zn.contents &&
                              (Zn.contents = Zn.contents.map((dn) => {
                                if (dn.GUID === Me) {
                                  const $t = { ...dn };
                                  return (
                                    $t.medMapStock || ($t.medMapStock = []),
                                    ($t.medMapStock = [...$t.medMapStock, _t]),
                                    $t
                                  );
                                }
                                return dn;
                              })),
                            Zn
                          );
                        })),
                      Kn
                    );
                  })),
                qn
              );
            })
        );
      }, []),
      ef = m.useCallback((Me, _t, Yn) => {
        d(
          (Ns) =>
            Ns &&
            Ns.map((qn) => {
              const Xn = { ...qn };
              return (
                Xn.contents &&
                  (Xn.contents = Xn.contents.map((Kn) => {
                    const Jn = { ...Kn };
                    return (
                      Jn.contents &&
                        (Jn.contents = Jn.contents.map((Zn) => {
                          const dn = { ...Zn };
                          return (
                            dn.contents &&
                              (dn.contents = dn.contents.map(($t) => {
                                if ($t.GUID === Me && $t.medMapStock) {
                                  const ai = { ...$t };
                                  return (
                                    (ai.medMapStock = $t.medMapStock.map((Fo) =>
                                      Fo.GUID === _t ? { ...Fo, ...Yn } : Fo
                                    )),
                                    ai
                                  );
                                }
                                return $t;
                              })),
                            dn
                          );
                        })),
                      Jn
                    );
                  })),
                Xn
              );
            })
        );
      }, []);
    return s.jsx(Rd.Provider, {
      value: {
        isAuthenticated: t,
        setIsAuthenticated: n,
        currentUser: r,
        setCurrentUser: o,
        logout: B,
        sidebarOpen: l,
        setSidebarOpen: a,
        selectedDepartmentType: i,
        setSelectedDepartmentType: c,
        isAdminMode: w,
        setIsAdminMode: v,
        apiDepartmentData: h,
        setApiDepartmentData: d,
        viewMode: g,
        setViewMode: p,
        refreshTrigger: b,
        triggerRefresh: te,
        addStockToShelf: Zd,
        notification: u,
        showNotification: V,
        hideNotification: ue,
        medBoxModalOpen: x,
        setMedBoxModalOpen: j,
        selectedMedBox: L,
        setSelectedMedBox: P,
        openMedBoxModal: ie,
        closeMedBoxModal: q,
        modalMode: R,
        setModalMode: N,
        openAddMedBoxModal: K,
        listDrawModalOpen: I,
        setListDrawModalOpen: S,
        selectedListDraw: O,
        setSelectedListDraw: G,
        openListDrawModal: ge,
        closeListDrawModal: he,
        gridDrawModalOpen: E,
        setGridDrawModalOpen: C,
        selectedGridDraw: Z,
        setSelectedGridDraw: M,
        openGridDrawModal: Pe,
        closeGridDrawModal: Re,
        isLoadingMedMap: F,
        setIsLoadingMedMap: k,
        addParentContainerModalOpen: Q,
        setAddParentContainerModalOpen: de,
        selectedDepartmentForAdd: X,
        setSelectedDepartmentForAdd: ne,
        openAddParentContainerModal: Ot,
        closeAddParentContainerModal: Qn,
        addShelfDrawContainerModalOpen: je,
        setAddShelfDrawContainerModalOpen: oe,
        selectedSubContainerForAdd: ve,
        setSelectedSubContainerForAdd: $,
        openAddShelfDrawContainerModal: Er,
        closeAddShelfDrawContainerModal: Wt,
        addSubContainerModalOpen: le,
        setAddSubContainerModalOpen: pe,
        selectedParentContainerForAdd: T,
        setSelectedParentContainerForAdd: se,
        openAddSubContainerModal: Pr,
        closeAddSubContainerModal: Ir,
        addStoreItemModalOpen: Se,
        setAddStoreItemModalOpen: U,
        selectedStoreShelfForAdd: ee,
        setSelectedStoreShelfForAdd: ye,
        selectedStockItemForEdit: z,
        setSelectedStockItemForEdit: D,
        storeItemModalMode: A,
        setStoreItemModalMode: H,
        openAddStoreItemModal: Bd,
        openEditStoreItemModal: Gd,
        closeAddStoreItemModal: Fd,
        updateStockInShelf: ef,
        addDepartmentModalOpen: re,
        setAddDepartmentModalOpen: ae,
        allDepartmentsList: xe,
        setAllDepartmentsList: be,
        openAddDepartmentModal: Hd,
        closeAddDepartmentModal: Vd,
        reloadMedMapData: Jd,
        qrCodeScannerModalOpen: we,
        qrCodeScannerMode: Ve,
        setQRCodeScannerModalOpen: De,
        openQRCodeScannerModal: Wd,
        closeQRCodeScannerModal: Qd,
        addBarcodeModalOpen: qe,
        setAddBarcodeModalOpen: ze,
        openAddBarcodeModal: Yd,
        closeAddBarcodeModal: qd,
        initialBarcodeValue: vt,
        containerDetailModalOpen: In,
        setContainerDetailModalOpen: Vt,
        selectedContainerForDetail: Go,
        setSelectedContainerForDetail: y,
        highlightedMedicineCode: W,
        setHighlightedMedicineCode: Y,
        openContainerDetailModal: Xd,
        closeContainerDetailModal: Kd,
        medicineList: Ne,
        setMedicineList: _e,
        isLoadingMedicines: ce,
        setIsLoadingMedicines: me,
      },
      children: e,
    });
  },
  Je = () => {
    const e = m.useContext(Rd);
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
  Td = m.createContext(void 0),
  Tm = ({ children: e }) => {
    const [t, n] = m.useState("zh-TW"),
      r = (o) => Rm[t][o] || o;
    return s.jsx(Td.Provider, {
      value: { language: t, setLanguage: n, t: r },
      children: e,
    });
  },
  pt = () => {
    const e = m.useContext(Td);
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
 */ const xc = Ae("Bell", [
  ["path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9", key: "1qo2s2" }],
  ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ad = Ae("Building2", [
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
 */ const kr = Ae("Camera", [
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
 */ const gl = Ae("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Od = Ae("ChevronDown", [
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
 */ const $d = Ae("Grid3x3", [
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
 */ const oi = Ae("Layers", [
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
 */ const ua = Ae("List", [
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
 */ const Rt = Ae("Loader2", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ld = Ae("Lock", [
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
 */ const xl = Ae("Pen", [
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
 */ const Nt = Ae("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tn = Ae("Settings", [
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
 */ const Ud = Ae("Unlock", [
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
 */ const Ym = Ae("Warehouse", [
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
 */ const qm = Ae("XCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ye = Ae("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  Xm = () => {
    const { sidebarOpen: e, setSidebarOpen: t } = Je(),
      { t: n } = pt();
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
              children: s.jsx(oi, { className: "w-5 h-5" }),
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
                ? s.jsx(ua, { className: "w-6 h-6" })
                : s.jsx(ua, { className: "w-6 h-6" }),
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
      } = Je(),
      { language: c, setLanguage: h, t: d } = pt(),
      [g, p] = Zs.useState(!1),
      w = () => {
        h(c === "zh-TW" ? "en" : "zh-TW");
      },
      v = Zs.useMemo(() => {
        if (!o || !i || !a) return !1;
        const b = a.map((f) => f.name);
        return (
          i
            .filter((f) => f["department_type "] === o)
            .filter((f) => !b.includes(f.name)).length > 0
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
                        s.jsx(Ad, { className: "w-4 h-4" }),
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
                    : s.jsx(Od, { className: "w-4 h-4" }),
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
                          s.jsx(Nt, { className: "w-4 h-4" }),
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
                  onClick: w,
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
                      children: s.jsx(Ye, { className: "w-5 h-5" }),
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
      } = Je(),
      { t: d } = pt(),
      [g, p] = m.useState(new Set()),
      [w, v] = m.useState([]),
      [b, _] = m.useState(!0),
      [u, f] = m.useState([]),
      [x, j] = m.useState(!1),
      L = () => {
        c
          ? h(!1)
          : prompt("請輸入後台密碼：") === "66437068"
          ? h(!0)
          : alert("密碼錯誤，無法開啟後台模式");
      };
    m.useEffect(() => {
      (async () => {
        _(!0);
        try {
          const O = await ke.getDepartments();
          O.Code === 200 && O.Data
            ? (console.log(O.Data), v(O.Data), i(O.Data))
            : (console.error("API returned error:", O), v([]), i([]));
        } catch (O) {
          console.error("Failed to fetch department data:", O), v([]), i([]);
        } finally {
          _(!1);
        }
      })();
    }, []);
    const P = w.reduce((S, O) => {
        const G = O["department_type "];
        return S[G] || (S[G] = []), S[G].push(O), S;
      }, {}),
      R = (S) => {
        const O = new Set(g);
        O.has(S) ? O.delete(S) : O.add(S), p(O);
      },
      N = async (S) => {
        console.log("🏢 選擇部門:", S), r(S), await I(S), t(!1);
      },
      I = async (S) => {
        console.log("🚀 開始取得藥品地圖資料，部門類型:", S), a(!0);
        try {
          const O = await ke.getMedMapByDepartment(S);
          if (O.Code === 200 && O.Data) {
            console.log("📡 API 回傳成功:", O.Data);
            const G = It.convertMedMapApiToFakeData(O.Data);
            if (!It.validateConvertedData(G)) {
              console.error("❌ 轉換後的資料驗證失敗"), f([]);
              return;
            }
            const C = It.generateConversionReport(O.Data, G);
            f(G),
              o(G),
              console.log("💾 已暫存轉換後的資料到狀態中"),
              console.log("📊 最終轉換結果:", G),
              console.log("📋 轉換報告:", C);
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
                          href: "../frontpage",
                          className:
                            "text-gray-600 hover:text-gray-900 transition-colors p-2 rounded-lg hover:bg-gray-100/50",
                          title: d("nav.home"),
                          children: s.jsx(oi, { className: "w-5 h-5" }),
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
                children: b
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
                        Object.entries(P).map(([S, O]) =>
                          s.jsxs(
                            "div",
                            {
                              className: "space-y-1",
                              children: [
                                s.jsxs("button", {
                                  onClick: () => N(S),
                                  disabled: l,
                                  className: `w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 border ${
                                    n === S
                                      ? "bg-blue-50 text-blue-700 border-blue-200 shadow-sm"
                                      : "text-gray-700 hover:bg-gray-50 hover:shadow-sm border-transparent"
                                  } ${
                                    l ? "opacity-50 cursor-not-allowed" : ""
                                  }`,
                                  children: [
                                    s.jsxs("div", {
                                      className: "flex items-center space-x-3",
                                      children: [
                                        S === "B1F"
                                          ? s.jsx(Ad, { className: "w-4 h-4" })
                                          : s.jsx(Ym, { className: "w-4 h-4" }),
                                        s.jsxs("div", {
                                          className: "text-left",
                                          children: [
                                            s.jsx("div", {
                                              className: "font-medium",
                                              children: S,
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
                                      onClick: (G) => {
                                        G.stopPropagation(), R(S);
                                      },
                                      className:
                                        "p-1 hover:bg-gray-200/50 rounded transition-colors",
                                      children: g.has(S)
                                        ? s.jsx(Od, { className: "w-4 h-4" })
                                        : s.jsx(Um, { className: "w-4 h-4" }),
                                    }),
                                  ],
                                }),
                                g.has(S) &&
                                  s.jsx("div", {
                                    className: "ml-6 space-y-2",
                                    children: O.map((G) =>
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
                                                children: G.name,
                                              }),
                                              s.jsx("span", {
                                                className: `text-xs px-2 py-1 rounded-full ${
                                                  G.type === "調劑台"
                                                    ? "bg-green-100 text-green-800"
                                                    : "bg-blue-100 text-blue-800"
                                                }`,
                                                children: G.type,
                                              }),
                                            ],
                                          }),
                                        },
                                        G.GUID
                                      )
                                    ),
                                  }),
                              ],
                            },
                            S
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
                          onClick: L,
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
                      onClick: () => j(!0),
                      className:
                        "p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 rounded-lg transition-colors",
                      title: "設定",
                      children: s.jsx(tn, { className: "w-5 h-5" }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
        s.jsx(Jm, { isOpen: x, onClose: () => j(!1) }),
      ],
    });
  },
  eh = () => {
    const { t: e } = pt();
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
      { t: a } = pt(),
      {
        apiDepartmentData: i,
        setApiDepartmentData: c,
        showNotification: h,
      } = Je(),
      [d, g] = m.useState(!1),
      [p, w] = m.useState({ x: 0, y: 0 }),
      [v, b] = m.useState(e.position),
      [_, u] = m.useState(!1),
      [f, x] = m.useState(null),
      [j, L] = m.useState({ x: 0, y: 0 }),
      [P, R] = m.useState({ x: 0, y: 0 }),
      N = m.useCallback(
        async ($, le) => {
          if (!i) return;
          console.log("🔄 更新組件位置:", $, le);
          const pe = JSON.parse(JSON.stringify(i)),
            T = (Se) => {
              for (const U of Se) {
                if (U.GUID === $)
                  return (
                    (U.position = { x: le.x.toFixed(3), y: le.y.toFixed(3) }),
                    console.log(
                      "✅ 組件位置已更新:",
                      U.name,
                      le.x.toFixed(3),
                      le.y.toFixed(3)
                    ),
                    !0
                  );
                if (
                  (U.components &&
                    Array.isArray(U.components) &&
                    T(U.components)) ||
                  (U.contents && Array.isArray(U.contents) && T(U.contents))
                )
                  return !0;
              }
              return !1;
            };
          if (T(pe)) {
            c(pe), console.log("💾 全域資料已更新");
            try {
              console.log("📡 開始同步後端位置資料...");
              const Se = await ke.updateContainerPosition({
                GUID: $,
                absolute_position: `${le.x.toFixed(3)},${le.y.toFixed(3)}`,
              });
              Se.Code === 200
                ? (console.log("✅ 後端位置同步成功", Se),
                  h("位置更新成功", "success"))
                : (console.error("❌ 後端位置同步失敗:", Se),
                  h(`位置更新失敗: ${Se.Result || "未知錯誤"}`, "error"));
            } catch (Se) {
              console.error("💥 後端位置同步發生錯誤:", Se),
                h("位置更新失敗: 網路錯誤", "error");
            }
          } else console.warn("⚠️ 未找到要更新的組件:", $);
        },
        [i, c, h]
      ),
      { position: I, dimensions: S, name: O, type: G } = e,
      E = m.useCallback(
        ($) => {
          const le = l.current;
          if (le)
            if ((R({ x: $.clientX, y: $.clientY }), n)) {
              $.preventDefault(),
                $.stopPropagation(),
                le.setPointerCapture($.pointerId);
              const pe = le.getBoundingClientRect(),
                T = $.clientX - pe.left,
                se = $.clientY - pe.top;
              w({ x: T, y: se }), g(!0), u(!1);
            } else u(!1);
        },
        [n]
      ),
      C = m.useCallback(() => {
        if (!i) return [];
        const $ = [],
          le = (pe) => {
            for (const T of pe)
              T.GUID !== e.GUID &&
                T.position &&
                $.push({
                  GUID: T.GUID,
                  position: T.position,
                  dimensions: T.dimensions,
                }),
                T.components && Array.isArray(T.components) && le(T.components),
                T.contents && Array.isArray(T.contents) && le(T.contents);
          };
        return le(i), $;
      }, [i, e.GUID]),
      Z = m.useCallback(
        ($, le) => {
          const T = C();
          let se = $,
            Se = le;
          for (const U of T) {
            const ee = parseFloat(U.position.x),
              ye = parseFloat(U.position.y);
            if (
              (Math.abs($ - ee) < 20 && (se = ee),
              Math.abs(le - ye) < 20 && (Se = ye),
              U.dimensions && e.dimensions)
            ) {
              const z = ee + parseFloat(U.dimensions.width),
                D = $ + parseFloat(e.dimensions.width);
              Math.abs(D - z) < 20 && (se = z - parseFloat(e.dimensions.width));
              const A = ye + parseFloat(U.dimensions.depth),
                H = le + parseFloat(e.dimensions.depth);
              Math.abs(H - A) < 20 && (Se = A - parseFloat(e.dimensions.depth));
            }
          }
          return { x: se, y: Se };
        },
        [C, e.dimensions]
      ),
      M = m.useCallback(
        ($) => {
          const le = Math.abs($.clientX - P.x),
            pe = Math.abs($.clientY - P.y);
          if (((le > 5 || pe > 5) && u(!0), !d || !n)) return;
          $.preventDefault(), $.stopPropagation();
          const T = l.current;
          if (!T) return;
          const se = T.closest("[data-canvas-content]");
          if (!se) return;
          const Se = se.getBoundingClientRect(),
            U = ($.clientX - Se.left - p.x) / t,
            ee = ($.clientY - Se.top - p.y) / t,
            ye = Z(U, ee);
          b(ye);
        },
        [d, p, t, n, Z, P]
      ),
      F = m.useCallback(
        ($) => {
          const le = Math.abs($.clientX - P.x),
            pe = Math.abs($.clientY - P.y),
            T = le > 5 || pe > 5;
          if (n) {
            if (!d) return;
            $.preventDefault(), $.stopPropagation();
            const se = l.current;
            se && se.releasePointerCapture($.pointerId),
              g(!1),
              T ? N(e.GUID, v) : o && o(e),
              u(!1);
          } else
            !T && o && ($.preventDefault(), $.stopPropagation(), o(e)), u(!1);
        },
        [d, n, o, e, N, v, P]
      ),
      k = m.useCallback(
        ($) => {
          const le = l.current;
          if (!le) return;
          const pe = $.touches[0];
          if (pe && (L({ x: pe.clientX, y: pe.clientY }), n)) {
            $.preventDefault(), $.stopPropagation(), x(pe.identifier);
            const T = le.getBoundingClientRect(),
              se = pe.clientX - T.left,
              Se = pe.clientY - T.top;
            w({ x: se, y: Se }), g(!0);
          }
        },
        [n]
      ),
      Q = m.useCallback(
        ($) => {
          if (!d || !n || f === null) return;
          $.preventDefault(), $.stopPropagation();
          const le = l.current;
          if (!le) return;
          const pe = Array.from($.touches).find((ye) => ye.identifier === f);
          if (!pe) return;
          const T = le.closest("[data-canvas-content]");
          if (!T) return;
          const se = T.getBoundingClientRect(),
            Se = (pe.clientX - se.left - p.x) / t,
            U = (pe.clientY - se.top - p.y) / t,
            ee = Z(Se, U);
          b(ee);
        },
        [d, p, t, n, f, Z]
      ),
      de = m.useCallback(
        ($) => {
          const le = Array.from($.changedTouches)[0];
          if (!le) return;
          const pe = Math.abs(le.clientX - j.x),
            T = Math.abs(le.clientY - j.y),
            se = pe > 10 || T > 10;
          if (n) {
            if (
              !d ||
              f === null ||
              !Array.from($.changedTouches).some((U) => U.identifier === f)
            )
              return;
            $.preventDefault(),
              $.stopPropagation(),
              g(!1),
              x(null),
              L({ x: 0, y: 0 }),
              se ? N(e.GUID, v) : o && o(e);
          } else
            !se && o && ($.preventDefault(), $.stopPropagation(), o(e)),
              L({ x: 0, y: 0 });
        },
        [d, n, f, N, e, v, j, o]
      ),
      X = m.useCallback(
        ($) => {
          !d ||
            !n ||
            f === null ||
            !Array.from($.changedTouches).some((pe) => pe.identifier === f) ||
            ($.preventDefault(),
            $.stopPropagation(),
            b(e.position),
            g(!1),
            x(null),
            L({ x: 0, y: 0 }));
        },
        [d, n, f, e.position]
      ),
      ne = ($) => {
        if (r) return "bg-green-100 border-green-500";
        switch ($) {
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
      je = ($) => {
        if (r) return "highlight-breathe-green";
        switch ($) {
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
      oe = ($) => {
        if (r) return "bg-green-600 text-white";
        switch ($) {
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
      ve = ($) => {
        const le =
          $ === "調劑台"
            ? "type.dispensingStation"
            : $ === "藥庫"
            ? "type.warehouse"
            : $ === "parent_container"
            ? "櫃體"
            : "type." + $;
        return a(le) || $;
      };
    return s.jsx("div", {
      ref: l,
      className: `flex flex-col absolute border-2 rounded-lg shadow-lg hover:shadow-xl ${ne(
        G
      )} overflow-hidden ${n ? "cursor-move" : "cursor-default"} ${
        d ? "shadow-2xl z-50" : ""
      }`,
      style: {
        left: `${v.x}px`,
        top: `${v.y}px`,
        minWidth: G === "調劑台" || G === "藥庫" ? "120px" : "180px",
        minHeight: G === "調劑台" || G === "藥庫" ? "60px" : "120px",
        userSelect: "none",
        touchAction: "none",
        transition: d
          ? "none"
          : "transform 0.2s ease-out, box-shadow 0.2s ease-out",
      },
      onPointerDown: E,
      onPointerMove: M,
      onPointerUp: F,
      onTouchStart: k,
      onTouchMove: Q,
      onTouchEnd: de,
      onTouchCancel: X,
      children: s.jsx("div", {
        className: `w-full min-w-[400px] h-auto flex items-start flex-1 justify-between p-2 border-b border-gray-200 ${je(
          G
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
                className: `text-sm truncate py-1 px-3 rounded-2xl ${oe(G)}`,
                children: ve(G),
              }),
            ],
          }),
        }),
      }),
    });
  },
  Bo = ({ isOpen: e, onClose: t, onScanSuccess: n, mode: r }) => {
    const { showNotification: o, openAddBarcodeModal: l } = Je();
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
      [w, v] = m.useState(""),
      [b, _] = m.useState(0),
      [u, f] = m.useState(null),
      [x, j] = m.useState(!1);
    m.useEffect(() => {
      const O = () => {
        const G = window.innerWidth < 680;
        j(G);
      };
      return (
        O(),
        window.addEventListener("resize", O),
        () => window.removeEventListener("resize", O)
      );
    }, []);
    const L = async () => {
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
      P = () => {
        h.current && (clearInterval(h.current), (h.current = null)),
          c.current &&
            (c.current.getTracks().forEach((O) => O.stop()),
            (c.current = null)),
          a.current && (a.current.srcObject = null),
          p(!1);
      },
      R = async () => {
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
        if (O - b < 1e3) {
          console.log("⏱️ Throttled: too soon since last scan");
          return;
        }
        _(O);
        const G = a.current,
          E = i.current,
          C = E.getContext("2d");
        if (
          (console.log("🎥 video.readyState:", G.readyState),
          console.log("🎥 HAVE_ENOUGH_DATA:", G.HAVE_ENOUGH_DATA),
          !C || G.readyState !== G.HAVE_ENOUGH_DATA)
        ) {
          console.log("❌ Video not ready or no context");
          return;
        }
        (E.width = G.videoWidth),
          (E.height = G.videoHeight),
          C.drawImage(G, 0, 0, E.width, E.height),
          E.toBlob(
            async (Z) => {
              if (!Z) return;
              const M = new File([Z], "scan.jpg", { type: "image/jpeg" });
              try {
                console.log("📸 截取圖片並掃描...");
                const F = await ke.scanBarcode(M);
                if (!F.results || F.results.length === 0) {
                  console.log("⚠️ 未辨識到條碼");
                  return;
                }
                const k = F.results[0];
                if (!k.code) {
                  console.log("⚠️ 辨識到條碼但無法讀取內容");
                  return;
                }
                console.log("✅ 成功辨識條碼:", k.code),
                  console.log("📋 條碼類型:", k.type),
                  console.log("📊 信心度:", k.conf),
                  P(),
                  t();
                try {
                  const Q = await ke.searchByBarCode(k.code);
                  console.log("🔍 條碼搜尋結果:", Q),
                    Q.Code === 200
                      ? (console.log("✅ 找到藥品資料:", Q.Data),
                        console.log("🎯 準備調用 onScanSuccess, mode:", r),
                        o("找到藥品資料", "success"),
                        n
                          ? (console.log("✅ onScanSuccess 存在，開始調用"),
                            n(k.code, Q.Data),
                            console.log("✅ onScanSuccess 調用完成"))
                          : console.warn("⚠️ onScanSuccess 不存在"))
                      : Q.Code === -200 && Q.Result === "查無資料"
                      ? (console.log("⚠️ 查無資料，開啟建立條碼彈窗"),
                        o("查無條碼資料，請建立條碼", "warning"),
                        l(k.code))
                      : (console.log("❌ 搜尋失敗:", Q.Result),
                        o(Q.Result || "搜尋失敗", "error"));
                } catch (Q) {
                  console.error("條碼搜尋錯誤:", Q),
                    o("搜尋失敗，請稍後再試", "error");
                }
              } catch (F) {
                console.error("掃描錯誤:", F);
              }
            },
            "image/jpeg",
            1
          );
      },
      N = () => {
        h.current && clearInterval(h.current),
          (h.current = setInterval(() => {
            R();
          }, 1e3));
      };
    m.useEffect(
      () => (
        e ? L() : P(),
        () => {
          P();
        }
      ),
      [e]
    ),
      m.useEffect(() => {
        g && !h.current
          ? (console.log("🚀 isScanning became true, starting interval"), N())
          : !g &&
            h.current &&
            (console.log("🛑 isScanning became false, stopping interval"),
            h.current && (clearInterval(h.current), (h.current = null)));
      }, [g]);
    const I = () => {
        P(), t();
      },
      S = async (O) => {
        if (!c.current || !d.current) return;
        const G = d.current.getBoundingClientRect(),
          E = (O.clientX - G.left) / G.width,
          C = (O.clientY - G.top) / G.height;
        console.log("🎯 點擊聚焦位置:", { x: E, y: C }),
          f({ x: O.clientX - G.left, y: O.clientY - G.top }),
          setTimeout(() => f(null), 1e3);
        try {
          const Z = c.current.getVideoTracks()[0],
            M = Z.getCapabilities();
          if (
            (console.log("📹 相機能力:", M),
            !M.focusMode || !M.focusMode.includes("manual"))
          ) {
            console.log("⚠️ 此相機不支援手動聚焦");
            return;
          }
          const F = {
            advanced: [
              {
                focusMode: "manual",
                focusDistance: 0,
                pointsOfInterest: [{ x: E, y: C }],
              },
            ],
          };
          await Z.applyConstraints(F), console.log("✅ 聚焦成功");
        } catch (Z) {
          console.log("⚠️ 聚焦失敗 (可能不支援):", Z);
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
                      s.jsx(kr, { className: "w-6 h-6 text-white" }),
                      s.jsx("h2", {
                        className: "text-lg font-semibold text-white",
                        children: "條碼掃描",
                      }),
                    ],
                  }),
                  s.jsx("button", {
                    onClick: I,
                    className:
                      "p-2 hover:bg-gray-700 rounded-lg transition-colors",
                    children: s.jsx(Ye, { className: "w-6 h-6 text-white" }),
                  }),
                ],
              }),
              s.jsxs("div", {
                className: "flex-1 relative",
                children: [
                  s.jsxs("div", {
                    ref: d,
                    className: "absolute inset-0 bg-black cursor-crosshair",
                    onClick: S,
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
                  w &&
                    s.jsx("div", {
                      className:
                        "bg-red-500 bg-opacity-20 border border-red-500 rounded-lg px-3 py-2 mb-3",
                      children: s.jsx("p", {
                        className: "text-red-200 text-sm",
                        children: w,
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
                          children: s.jsx(kr, {
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
                      onClick: I,
                      className:
                        "p-2 hover:bg-gray-100 rounded-lg transition-colors",
                      children: s.jsx(Ye, {
                        className: "w-6 h-6 text-gray-600",
                      }),
                    }),
                  ],
                }),
                s.jsxs("div", {
                  className: "flex-1 overflow-y-auto p-4",
                  children: [
                    w &&
                      s.jsx("div", {
                        className:
                          "bg-red-50 border border-red-200 rounded-lg px-3 py-2 mb-4",
                        children: s.jsx("p", {
                          className: "text-red-600 text-sm",
                          children: w,
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
                          onClick: S,
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
      } = Je(),
      { t: h } = pt(),
      [d, g] = m.useState({ x: 0, y: 0, scale: 1 }),
      [p, w] = m.useState(!1),
      [v, b] = m.useState(!1),
      [_, u] = m.useState({ x: 0, y: 0 }),
      [f, x] = m.useState(!1),
      [j, L] = m.useState(!1),
      [P, R] = m.useState(""),
      [N, I] = m.useState([]),
      [S, O] = m.useState(null),
      G = () => {
        try {
          const z = localStorage.getItem("med_map_anchor");
          return z ? JSON.parse(z) : [];
        } catch (z) {
          return (
            console.error("Error reading canvas states from localStorage:", z),
            []
          );
        }
      },
      E = (z, D, A, H) => {
        try {
          const re = G(),
            ae = re.findIndex(
              (be) => be.department === z && be.canvasType === D
            ),
            xe = { department: z, canvasType: D, scale: A, position: H };
          ae >= 0 ? (re[ae] = xe) : re.push(xe),
            localStorage.setItem("med_map_anchor", JSON.stringify(re));
        } catch (re) {
          console.error("Error saving canvas state to localStorage:", re);
        }
      },
      C = (z, D) =>
        G().find((H) => H.department === z && H.canvasType === D) || null;
    m.useEffect(() => {
      if (r) {
        const z = C(r, "InfiniteCanvas");
        if (z) g({ x: z.position.x, y: z.position.y, scale: z.scale });
        else {
          const D = { x: 0, y: 0, scale: 1 };
          g(D), E(r, "InfiniteCanvas", D.scale, D);
        }
      }
    }, [r]),
      m.useEffect(() => {
        if (!r) return;
        const z = setTimeout(() => {
          E(r, "InfiniteCanvas", d.scale, { x: d.x, y: d.y });
        }, 500);
        return () => clearTimeout(z);
      }, [d, r]),
      m.useEffect(() => {
        const z = (A) => {
            A.code === "Space" && !A.repeat && (A.preventDefault(), x(!0));
          },
          D = (A) => {
            A.code === "Space" && (A.preventDefault(), x(!1), w(!1));
          };
        return (
          window.addEventListener("keydown", z),
          window.addEventListener("keyup", D),
          () => {
            window.removeEventListener("keydown", z),
              window.removeEventListener("keyup", D);
          }
        );
      }, []);
    const Z = m.useCallback(
        (z) => {
          var A;
          if (v) return;
          if (
            (z.ctrlKey && !navigator.userAgent.includes("Mac")) ||
            (z.metaKey && navigator.userAgent.includes("Mac"))
          ) {
            z.preventDefault(), z.stopPropagation();
            const H =
              (A = t.current) == null ? void 0 : A.getBoundingClientRect();
            if (!H) return;
            const re = z.clientX - H.left,
              ae = z.clientY - H.top,
              xe = z.deltaY > 0 ? 0.9 : 1.1,
              be = Math.max(0.1, Math.min(5, d.scale * xe)),
              Ne = be / d.scale,
              _e = re - (re - d.x) * Ne,
              ce = ae - (ae - d.y) * Ne;
            g({ x: _e, y: ce, scale: be });
          }
        },
        [d, v]
      ),
      M = m.useCallback(
        (z) => {
          v ||
            !f ||
            (w(!0), u({ x: z.clientX, y: z.clientY }), z.preventDefault());
        },
        [v, f]
      ),
      F = m.useCallback(
        (z) => {
          if (!p || v) return;
          const D = z.clientX - _.x,
            A = z.clientY - _.y;
          g((H) => ({ ...H, x: H.x + D, y: H.y + A })),
            u({ x: z.clientX, y: z.clientY });
        },
        [p, _, v]
      ),
      k = m.useCallback(() => {
        w(!1);
      }, []),
      Q = m.useCallback(
        (z) => {
          if (!o) return [];
          const D = [],
            A = (H) => {
              for (const re of H)
                re.med_list &&
                  Array.isArray(re.med_list) &&
                  re.med_list.some((xe) => xe.code == z) &&
                  (console.log("✅ 找到藥品所在櫃體:", re.name, re.GUID),
                  D.push(re.GUID)),
                  re.components &&
                    Array.isArray(re.components) &&
                    A(re.components),
                  re.contents && Array.isArray(re.contents) && A(re.contents);
            };
          return A(o), D;
        },
        [o]
      ),
      de = m.useCallback(() => {
        try {
          const D = localStorage.getItem("medMap_setting");
          if (D) {
            const H = JSON.parse(D).light_sec;
            if (H != null && H !== "") {
              const re = Number(H);
              if (!isNaN(re) && re > 0) return re * 1e3;
            }
          }
        } catch (D) {
          console.error("讀取亮燈設定失敗:", D);
        }
        return 6e4;
      }, []),
      X = m.useCallback(
        (z) => {
          if (!z.trim()) return;
          n.current && (clearTimeout(n.current), (n.current = null)),
            console.log("🔍 搜尋藥碼:", z);
          const D = Q(z);
          if (D.length > 0) {
            const A = de();
            console.log(`🎯 高亮 ${D.length} 個櫃體:`, D),
              console.log(`⏱️ 亮燈時長: ${A}ms (${A / 1e3}秒)`),
              I(D),
              O(z),
              c(z),
              (n.current = setTimeout(() => {
                console.log("⏱️ 恢復原本顏色"),
                  I([]),
                  O(null),
                  c(null),
                  (n.current = null);
              }, A));
          } else
            console.log("❌ 未找到包含此藥品的櫃體"), I([]), O(null), c(null);
        },
        [Q, de, c]
      ),
      ne = (z, D) => {
        var H, re;
        console.log("📍 藥品定位模式 - 掃描到藥品:", {
          barcode: z,
          medicineData: D,
        });
        const A =
          ((H = D[0]) == null ? void 0 : H.CODE) ||
          ((re = D[0]) == null ? void 0 : re.code);
        L(!1), X(A);
      },
      je = async (z) => {
        var D, A;
        if (z.key === "Enter") {
          if ((z.preventDefault(), !P.trim())) {
            l("請輸入條碼", "warning");
            return;
          }
          try {
            console.log("🔍 搜尋條碼:", P);
            const H = await ke.searchByBarCode(P);
            if (
              (console.log("📋 條碼搜尋回應:", H),
              H.Code === 200 && H.Data && H.Data.length > 0)
            ) {
              const re =
                ((D = H.Data[0]) == null ? void 0 : D.CODE) ||
                ((A = H.Data[0]) == null ? void 0 : A.code);
              console.log("✅ 找到藥品資料:", H.Data),
                l("找到藥品，開始亮燈", "success"),
                X(re);
            } else
              H.Code === -200 && H.Result === "查無資料"
                ? (console.log("⚠️ 查無資料，開啟建立條碼彈窗"),
                  l("查無條碼資料，請建立條碼", "warning"),
                  a(P))
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
    const [oe, ve] = m.useState(null),
      [$, le] = m.useState({ x: 0, y: 0 }),
      pe = (z) => {
        if (z.length < 2) return null;
        const D = z[0],
          A = z[1];
        return Math.sqrt(
          Math.pow(A.clientX - D.clientX, 2) +
            Math.pow(A.clientY - D.clientY, 2)
        );
      },
      T = (z) => {
        if (z.length === 1) return { x: z[0].clientX, y: z[0].clientY };
        const D = z[0],
          A = z[1];
        return {
          x: (D.clientX + A.clientX) / 2,
          y: (D.clientY + A.clientY) / 2,
        };
      },
      se = m.useCallback(
        (z) => {
          if (!v) {
            if (z.touches.length === 2) {
              const D = pe(z.touches),
                A = T(z.touches);
              ve(D), le(A);
            } else if (z.touches.length === 1) {
              const D = z.touches[0];
              u({ x: D.clientX, y: D.clientY }), w(!0);
            }
          }
        },
        [v]
      ),
      Se = m.useCallback(
        (z) => {
          var D;
          if (!v) {
            if ((z.preventDefault(), z.touches.length === 2 && oe !== null)) {
              const A = pe(z.touches),
                H = T(z.touches);
              if (A && oe) {
                const re =
                  (D = t.current) == null ? void 0 : D.getBoundingClientRect();
                if (!re) return;
                const ae = A / oe,
                  xe = Math.max(0.1, Math.min(5, d.scale * ae)),
                  be = H.x - re.left,
                  Ne = H.y - re.top,
                  _e = xe / d.scale,
                  ce = be - (be - d.x) * _e,
                  me = Ne - (Ne - d.y) * _e;
                g({ x: ce, y: me, scale: xe }), ve(A), le(H);
              }
            } else if (z.touches.length === 1 && p) {
              const A = z.touches[0],
                H = A.clientX - _.x,
                re = A.clientY - _.y;
              g((ae) => ({ ...ae, x: ae.x + H, y: ae.y + re })),
                u({ x: A.clientX, y: A.clientY });
            }
          }
        },
        [d, oe, p, _, v]
      ),
      U = m.useCallback(() => {
        ve(null), w(!1);
      }, []);
    m.useEffect(() => {
      const z = t.current;
      if (z)
        return (
          z.addEventListener("wheel", Z, { passive: !1 }),
          () => z.removeEventListener("wheel", Z)
        );
    }, [Z]),
      m.useCallback(() => {
        g({ x: 0, y: 0, scale: 1 });
      }, []);
    const ye = (() => {
      if (!o || o.length === 0) return [];
      const z = o,
        D = [];
      for (const A of z)
        if (A.type === "調劑台" || A.type === "藥庫")
          for (const H of A.contents)
            D.push({
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
        else A.componets && A.componets.length > 0 && D.push(...A.componets);
      return D;
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
                value: P,
                onChange: (z) => R(z.target.value),
                onKeyPress: je,
                placeholder: "輸入條碼或掃描...",
                className:
                  "px-4 py-2 w-50 focus:outline-none text-gray-700 disabled:opacity-50",
              }),
              s.jsx("button", {
                onClick: () => L(!0),
                className: "p-2",
                title: "掃描條碼",
                children: s.jsx(kr, { className: "w-6 h-6 text-blue-600" }),
              }),
            ],
          }),
        }),
        s.jsx("div", {
          className: "absolute bottom-4 right-4 z-10 flex gap-2",
          children: s.jsx("button", {
            onClick: () => b(!v),
            className: `p-3 rounded-lg shadow-lg transition-colors ${
              v
                ? "bg-red-500 text-white hover:bg-red-600"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`,
            title: h(v ? "canvas.unlockCanvas" : "canvas.lockCanvas"),
            children: v
              ? s.jsx(Ld, { className: "w-6 h-6" })
              : s.jsx(Ud, { className: "w-6 h-6" }),
          }),
        }),
        s.jsx("div", {
          ref: t,
          className: `w-full h-full relative ${
            f && !v ? "cursor-grab" : "cursor-default"
          } ${p ? "cursor-grabbing" : ""}`,
          onMouseDown: M,
          onMouseMove: F,
          onMouseUp: k,
          onMouseLeave: k,
          onTouchStart: se,
          onTouchMove: Se,
          onTouchEnd: U,
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
                  ye.map((z) =>
                    s.jsx(
                      th,
                      {
                        component: z,
                        scale: d.scale,
                        isLocked: v,
                        isHighlighted: N.includes(z.GUID),
                        onContainerClick: (D) => {
                          console.log("🖱️ 點擊櫃體，傳遞亮燈藥品代碼:", S),
                            i(D, S);
                        },
                      },
                      z.GUID
                    )
                  ),
                  e,
                ],
              }),
            ],
          }),
        }),
        s.jsx(Bo, {
          isOpen: j,
          onClose: () => L(!1),
          onScanSuccess: ne,
          mode: "med_light_location_mode",
        }),
      ],
    });
  },
  zs = ({ content: e, isAdminMode: t }) => {
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
        triggerRefresh: w,
      } = Je(),
      { t: v } = pt(),
      [b, _] = m.useState(!1),
      [u, f] = m.useState(""),
      [x, j] = m.useState(!1),
      [L, P] = m.useState(e.name);
    m.useEffect(() => {
      P(e.name);
    }, [e.name]);
    const R = (C) => {
        C.stopPropagation(), f(e.name || ""), _(!0);
      },
      N = (C) => {
        C.stopPropagation(), _(!1), f("");
      },
      I = async (C) => {
        if ((C.stopPropagation(), !u.trim())) {
          p("名稱不能為空", "error");
          return;
        }
        if (u === e.name) {
          _(!1);
          return;
        }
        j(!0);
        try {
          const Z = [
            {
              GUID: e.GUID,
              name: u.trim(),
              MASTER_GUID: e.MASTER_GUID,
              position: e.gird_position,
              serverName: e.serverName,
              serverType: e.serverType,
            },
          ];
          let M;
          if (e.type === "store_shelves" || e.type === "dispensing_shelves")
            M = await ke.updateMedMapShelf(Z);
          else if (e.type === "sub_container") M = await ke.updateSubSection(Z);
          else {
            p("不支援的容器類型", "error"), j(!1);
            return;
          }
          if (M.Code === 200) {
            const F = u.trim();
            (e.name = F), P(F), p("名稱更新成功", "success"), _(!1), w();
          } else p(M.Result || "更新失敗", "error");
        } catch (Z) {
          console.error("更新名稱失敗:", Z), p("更新失敗，請稍後再試", "error");
        } finally {
          j(!1);
        }
      },
      S = (C) => {
        switch (C) {
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
      O = (C) => {
        switch (C) {
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
      G = (C) => {
        switch (C) {
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
      E = (C) => {
        switch (C) {
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
            return C;
        }
      };
    switch (e.type) {
      case "sub_container":
        return s.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${S(
            e.type || 0
          )} ${O(e.type || 0)}`,
          children: [
            s.jsxs("div", {
              className: "flex items-center space-x-2 mr-6 flex-1",
              children: [
                b
                  ? s.jsxs("div", {
                      className: "flex items-center space-x-2 flex-1",
                      children: [
                        s.jsx("input", {
                          type: "text",
                          value: u,
                          onChange: (C) => f(C.target.value),
                          onClick: (C) => C.stopPropagation(),
                          className:
                            "text-base font-semibold text-gray-800 border-2 border-blue-400 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500",
                          disabled: x,
                          autoFocus: !0,
                        }),
                        s.jsx("button", {
                          onClick: I,
                          disabled: x,
                          className:
                            "p-1 hover:bg-green-100 rounded transition-colors disabled:opacity-50",
                          title: "更新",
                          children: s.jsx(gl, {
                            className: "w-5 h-5 text-green-600",
                          }),
                        }),
                        s.jsx("button", {
                          onClick: N,
                          disabled: x,
                          className:
                            "p-1 hover:bg-red-100 rounded transition-colors disabled:opacity-50",
                          title: "取消",
                          children: s.jsx(Ye, {
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
                          children: L,
                        }),
                        s.jsx("button", {
                          onClick: R,
                          className:
                            "p-1 hover:bg-black/10 rounded transition-colors",
                          title: "編輯名稱",
                          children: s.jsx(xl, {
                            className: "w-4 h-4 text-gray-600",
                          }),
                        }),
                      ],
                    }),
                e.type != "parent_container" &&
                  !b &&
                  s.jsx("span", {
                    className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${G(
                      e.type
                    )}`,
                    children: E(e.type),
                  }),
              ],
            }),
            e.type !== "none" &&
              !b &&
              s.jsx("div", {
                className: "flex items-center space-x-1",
                children: s.jsx("button", {
                  className: "p-1 hover:bg-black/10 rounded transition-colors",
                  onClick: (C) => {
                    C.stopPropagation(), a(e);
                  },
                  title: v("modal.add"),
                  children: s.jsx(Nt, { className: "w-6 h-6 text-green-700" }),
                }),
              }),
          ],
        });
      case "parent_container":
        return s.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${S(
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
                      className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${G(
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
                  onClick: (C) => {
                    C.stopPropagation(), i(e);
                  },
                  title: v("modal.add"),
                  children: s.jsx(Nt, { className: "w-6 h-6 text-green-700" }),
                }),
              }),
          ],
        });
      case "med_box":
        return s.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${S(
            e.type || 0
          )} ${O(e.type || 0)}`,
          children: [
            s.jsx("div", {
              className: "flex items-center mr-4",
              children:
                e.type != "parent_container"
                  ? s.jsx("span", {
                      className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${G(
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
                onClick: (C) => {
                  C.stopPropagation(), n(e);
                },
                title: v("modal.settings"),
                children: s.jsx(tn, { className: "w-6 h-6 text-gray-600" }),
              }),
            }),
          ],
        });
      case "dispensing_shelves":
        return s.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${S(
            e.type || 0
          )} ${O(e.type || 0)}`,
          children: [
            s.jsxs("div", {
              className: "flex items-center space-x-2 mr-6 flex-1",
              children: [
                b
                  ? s.jsxs("div", {
                      className: "flex items-center space-x-2 flex-1",
                      children: [
                        s.jsx("input", {
                          type: "text",
                          value: u,
                          onChange: (C) => f(C.target.value),
                          onClick: (C) => C.stopPropagation(),
                          className:
                            "text-base font-semibold text-gray-800 border-2 border-blue-400 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500",
                          disabled: x,
                          autoFocus: !0,
                        }),
                        s.jsx("button", {
                          onClick: I,
                          disabled: x,
                          className:
                            "p-1 hover:bg-green-100 rounded transition-colors disabled:opacity-50",
                          title: "更新",
                          children: s.jsx(gl, {
                            className: "w-5 h-5 text-green-600",
                          }),
                        }),
                        s.jsx("button", {
                          onClick: N,
                          disabled: x,
                          className:
                            "p-1 hover:bg-red-100 rounded transition-colors disabled:opacity-50",
                          title: "取消",
                          children: s.jsx(Ye, {
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
                          children: L,
                        }),
                        s.jsx("button", {
                          onClick: R,
                          className:
                            "p-1 hover:bg-black/10 rounded transition-colors",
                          title: "編輯名稱",
                          children: s.jsx(xl, {
                            className: "w-4 h-4 text-gray-600",
                          }),
                        }),
                      ],
                    }),
                e.type != "parent_container" &&
                  !b &&
                  s.jsx("span", {
                    className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${G(
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
                  onClick: (C) => {
                    C.stopPropagation();
                    const Z = {
                      GUID: `new_medbox_${Date.now()}`,
                      name: "",
                      box_type: "",
                      width: [],
                      width_index: 0,
                      med_info: [],
                      parentShelf: e,
                    };
                    h(Z), d("add"), g(!0);
                  },
                  title: v("modal.add"),
                  children: s.jsx(Nt, { className: "w-6 h-6 text-green-700" }),
                }),
                s.jsx("button", {
                  className: "p-1 hover:bg-black/10 rounded transition-colors",
                  onClick: (C) => {},
                  title: v("modal.settings"),
                  children: s.jsx(tn, { className: "w-6 h-6 text-gray-600" }),
                }),
              ],
            }),
          ],
        });
      case "store_shelves":
        return s.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${S(
            e.type || 0
          )} ${O(e.type || 0)}`,
          children: [
            s.jsxs("div", {
              className: "flex items-center space-x-2 mr-6 flex-1",
              children: [
                b
                  ? s.jsxs("div", {
                      className: "flex items-center space-x-2 flex-1",
                      children: [
                        s.jsx("input", {
                          type: "text",
                          value: u,
                          onChange: (C) => f(C.target.value),
                          onClick: (C) => C.stopPropagation(),
                          className:
                            "text-base font-semibold text-gray-800 border-2 border-blue-400 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500",
                          disabled: x,
                          autoFocus: !0,
                        }),
                        s.jsx("button", {
                          onClick: I,
                          disabled: x,
                          className:
                            "p-1 hover:bg-green-100 rounded transition-colors disabled:opacity-50",
                          title: "更新",
                          children: s.jsx(gl, {
                            className: "w-5 h-5 text-green-600",
                          }),
                        }),
                        s.jsx("button", {
                          onClick: N,
                          disabled: x,
                          className:
                            "p-1 hover:bg-red-100 rounded transition-colors disabled:opacity-50",
                          title: "取消",
                          children: s.jsx(Ye, {
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
                          children: L,
                        }),
                        s.jsx("button", {
                          onClick: R,
                          className:
                            "p-1 hover:bg-black/10 rounded transition-colors",
                          title: "編輯名稱",
                          children: s.jsx(xl, {
                            className: "w-4 h-4 text-gray-600",
                          }),
                        }),
                      ],
                    }),
                e.type != "parent_container" &&
                  !b &&
                  s.jsx("span", {
                    className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${G(
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
                onClick: (C) => {
                  C.stopPropagation(), c(e);
                },
                title: v("modal.add"),
                children: s.jsx(Nt, { className: "w-6 h-6 text-green-700" }),
              }),
            }),
          ],
        });
      case "list_draw":
        return s.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${S(
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
                      className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${G(
                        e.type
                      )}`,
                      children: E(e.type),
                    })
                  : null,
              ],
            }),
            s.jsx("button", {
              className: "p-1 hover:bg-black/10 rounded transition-colors",
              onClick: (C) => {
                C.stopPropagation(), o(e);
              },
              title: v("modal.settings"),
              children: s.jsx(tn, { className: "w-6 h-6 text-gray-600" }),
            }),
          ],
        });
      case "grid_draw":
        return s.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${S(
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
                      className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${G(
                        e.type
                      )}`,
                      children: E(e.type),
                    })
                  : null,
              ],
            }),
            s.jsx("button", {
              className: "p-1 hover:bg-black/10 rounded transition-colors",
              onClick: (C) => {
                C.stopPropagation(), l(e);
              },
              title: v("modal.settings"),
              children: s.jsx(tn, { className: "w-6 h-6 text-gray-600" }),
            }),
          ],
        });
      default:
        return s.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${S(
            e.type || 0
          )} ${O(e.type || 0)}`,
          children: [
            s.jsx("div", {
              className: "flex items-center space-x-2 mr-6",
              children:
                e.type != "parent_container"
                  ? s.jsx("span", {
                      className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${G(
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
                children: s.jsx(tn, { className: "w-6 h-6 text-gray-600" }),
              }),
          ],
        });
    }
  },
  zd = m.forwardRef(({ children: e }, t) => {
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
      } = Je(),
      [p, w] = m.useState({ x: 0, y: 0, scale: 1 }),
      [v, b] = m.useState(!1),
      [_, u] = m.useState(!1),
      [f, x] = m.useState({ x: 0, y: 0 }),
      [j, L] = m.useState(!1),
      [P, R] = m.useState(""),
      [N, I] = m.useState(!1),
      [S, O] = m.useState(null),
      [G, E] = m.useState(!1),
      [C, Z] = m.useState({
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
      [M, F] = m.useState(null),
      k = m.useRef({}),
      Q = () =>
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ) ||
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0,
      de = 8,
      X = () => {
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
      ne = (y, W, Y, B) => {
        try {
          const te = X(),
            V = te.findIndex(
              (ie) => ie.department === y && ie.canvasType === W
            ),
            ue = { department: y, canvasType: W, scale: Y, position: B };
          V >= 0 ? (te[V] = ue) : te.push(ue),
            localStorage.setItem("med_map_anchor", JSON.stringify(te));
        } catch (te) {
          console.error("Error saving canvas state to localStorage:", te);
        }
      },
      je = (y, W) =>
        X().find((B) => B.department === y && B.canvasType === W) || null;
    m.useEffect(() => {
      if (r) {
        const y = je(r, "drugCanvas");
        if (y) w({ x: y.position.x, y: y.position.y, scale: y.scale });
        else {
          const W = { x: 0, y: 0, scale: 1 };
          w(W), ne(r, "drugCanvas", W.scale, W);
        }
      }
    }, [r]),
      m.useEffect(() => {
        if (!r) return;
        const y = setTimeout(() => {
          ne(r, "drugCanvas", p.scale, { x: p.x, y: p.y });
        }, 500);
        return () => clearTimeout(y);
      }, [p, r]);
    const oe = (y) =>
        [
          "parent_container",
          "sub_container",
          "dispensing_shelves",
          "store_shelves",
          "grid_draw",
          "list_draw",
          "med_box",
        ].includes(y),
      ve = (y) =>
        ({
          parent_container: ["parent_container", "調劑台", "藥庫"],
          sub_container: ["parent_container", "sub_container"],
          dispensing_shelves: [
            "dispensing_shelves",
            "store_shelves",
            "sub_container",
            "grid_draw",
            "list_draw",
          ],
          store_shelves: [
            "dispensing_shelves",
            "store_shelves",
            "sub_container",
            "grid_draw",
            "list_draw",
          ],
          grid_draw: [
            "grid_draw",
            "list_draw",
            "sub_container",
            "dispensing_shelves",
            "store_shelves",
          ],
          list_draw: [
            "grid_draw",
            "list_draw",
            "sub_container",
            "dispensing_shelves",
            "store_shelves",
          ],
          med_box: ["med_box", "dispensing_shelves"],
        }[y] || []),
      $ = (y) => {
        const [W, Y] = y.split(",").map(Number);
        return { row: W || 0, col: Y || 0 };
      },
      le = (y, W) => `${y},${W}`,
      pe = (y, W) => {
        const Y = (te, V = null) => {
            if (te.GUID === y) return { container: te, parent: V };
            if (te.contents)
              for (const ue of te.contents) {
                const ie = Y(ue, te);
                if (ie) return ie;
              }
            return null;
          },
          B = De();
        for (const te of B) {
          const V = Y(te);
          if (V) return V;
        }
        return null;
      },
      T = (y, W) => {
        if (!y.contents) return;
        const { sortedContents: Y, maxRow: B, maxCol: te } = Ve(y.contents),
          V = W;
        if (!V) return;
        const ue = $(V.gird_position);
        console.log(B), console.log(te), console.log(V), console.log(ue);
        for (let ie = 0; ie < Y.length; ie++) {
          const K = Y[ie],
            q = $(K.gird_position);
          if (q.row === ue.row && q.col > ue.col)
            (K.gird_position = le(q.row, q.col - 1)),
              (k.current[K.GUID] = {
                GUID: K.GUID,
                MASTER_GUID: y.GUID,
                position: `${q.row},${q.col - 1}`,
                serverName: y.serverName,
                serverType: y.serverType,
                type: K.type,
              });
          else if (q.row > ue.row) {
            const ge = q.col === 0 ? te : q.col - 1,
              he = q.col === 0 ? q.row - 1 : q.row;
            (K.gird_position = le(he, ge)),
              (k.current[K.GUID] = {
                GUID: K.GUID,
                MASTER_GUID: y.GUID,
                position: `${he},${ge}`,
                serverName: y.serverName,
                serverType: y.serverType,
                type: K.type,
              });
          }
        }
        return console.log("移除更新其餘容器", Y), Y;
      },
      se = (y, W, Y, B, te) => {
        y.contents || (y.contents = []);
        let V = Math.max(
            1,
            ...y.contents.map((K) => $(K.gird_position || "0,0").col + 1)
          ),
          ue = Math.max(
            1,
            ...y.contents.map((K) => $(K.gird_position || "0,0").row + 1)
          );
        console.log("--------", y),
          console.log("目標容器最大列", V),
          console.log("目標容器最大行", ue),
          (y.type == "sub_container" ||
            y.type == "parent_container" ||
            y.type == "調劑台" ||
            y.type == "藥庫") &&
            (V = +y.oriMaxCol + 1),
          te != null &&
            te === "right" &&
            W.type !== "med_box" &&
            B == V &&
            ((Y = Y + 1),
            y.contents.filter((q) => `${Y},0` == q.gird_position).length > 0
              ? (B = V - 1)
              : (B = 0)),
          console.log(Y),
          console.log(B);
        const ie = y.contents.filter((K) => {
          const q = $(K.gird_position || "0,0");
          return q.row > Y || (q.row === Y && q.col >= B);
        });
        ie.sort((K, q) => {
          const ge = $(K.gird_position || "0,0"),
            he = $(q.gird_position || "0,0");
          return ge.row !== he.row ? he.row - ge.row : he.col - ge.col;
        }),
          console.log("會做變更的目標容器", ie),
          ie.forEach((K) => {
            const q = $(K.gird_position || "0,0");
            let ge = q.row,
              he = q.col;
            K.type === "med_box" || he < V - 1
              ? (he += 1)
              : ((ge += 1), (he = 0)),
              (K.gird_position = `${ge},${he}`),
              (k.current[K.GUID] = {
                GUID: K.GUID,
                MASTER_GUID: y.GUID,
                position: `${ge},${he}`,
                serverName: y.serverName,
                serverType: y.serverType,
                type: K.type,
              }),
              console.log(
                `Shifted container ${K.GUID} from ${q.row},${q.col} to ${ge},${he}`
              );
          }),
          y.contents.length == 0 && ((Y = 0), (B = 0)),
          (W.gird_position = `${Y},${B}`),
          (W.MASTER_GUID = y.GUID),
          console.log(`Inserted container ${W.GUID} at position ${Y},${B}`),
          y.contents.push(W),
          (k.current[W.GUID] = {
            GUID: W.GUID,
            MASTER_GUID: y.GUID,
            position: `${Y},${B}`,
            serverName: y.serverName,
            serverType: y.serverType,
            type: W.type,
          }),
          W.type === "dispensing_shelves" &&
            W.contents &&
            W.contents.forEach((K) => {
              K.type === "med_box" &&
                (k.current[K.GUID] = {
                  GUID: K.GUID,
                  MASTER_GUID: K.MASTER_GUID,
                  position: K.gird_position,
                  serverName: y.serverName,
                  serverType: y.serverType,
                  type: K.type,
                });
            });
      },
      Se = (y, W, Y) => {
        const B = y.getBoundingClientRect(),
          te = B.left + B.width / 2,
          V = B.top + B.height / 2,
          ue = W - te,
          ie = Y - V;
        return Math.abs(ue) > Math.abs(ie)
          ? ue > 0
            ? "right"
            : "left"
          : ie > 0
          ? "bottom"
          : "top";
      },
      U = (y, W, Y) => {
        if (!_ || !oe(y.type)) return;
        (k.current = {}), Y.preventDefault(), Y.stopPropagation();
        const B = Q(),
          te =
            "touches" in Y
              ? Y.touches[0].clientX
              : ("pointerId" in Y, Y.clientX),
          V =
            "touches" in Y
              ? Y.touches[0].clientY
              : ("pointerId" in Y, Y.clientY),
          ue = W.getBoundingClientRect(),
          ie = { x: te - ue.left, y: V - ue.top },
          K = pe(y.GUID);
        if (!K) return;
        console.log("拖曳目標", y), console.log("拖曳目標", K);
        const q = W.cloneNode(!0);
        if (
          ((q.style.position = "fixed"),
          (q.style.left = `${te - ie.x}px`),
          (q.style.top = `${V - ie.y}px`),
          (q.style.width = `${ue.width}px`),
          (q.style.height = `${ue.height}px`),
          (q.style.zIndex = "9999"),
          (q.style.opacity = "0.8"),
          (q.style.boxShadow = "0 10px 25px rgba(0,0,0,0.3)"),
          (q.style.pointerEvents = "none"),
          document.body.appendChild(q),
          B)
        ) {
          const ge = K.parent.contents.findIndex((Pe) => Pe.GUID === y.GUID);
          K.parent.contents.splice(ge, 1), console.log(ge), K.parent;
          const he = T(K.parent, y);
          (K.parent.contents = he),
            console.log(K.parent),
            Z({
              isDragging: !0,
              draggedContainer: y,
              draggedElement: W,
              floatingElement: q,
              originalParent: K.parent,
              originalPosition: y.gird_position,
              originalIndex: ge,
              mouseOffset: ie,
              isMobileDrag: !1,
              originalData: null,
            });
        } else {
          const ge = K.parent.contents.findIndex((Re) => Re.GUID === y.GUID);
          K.parent.contents.splice(ge, 1), console.log(ge);
          const he = K.parent,
            Pe = T(K.parent, y);
          (K.parent.contents = Pe),
            console.log(K.parent),
            Z({
              isDragging: !0,
              draggedContainer: y,
              draggedElement: W,
              floatingElement: q,
              originalParent: he,
              originalPosition: y.gird_position,
              originalIndex: ge,
              mouseOffset: ie,
              isMobileDrag: !1,
              originalData: null,
            });
        }
      },
      ee = (y) => {
        if (!C.isDragging || !C.floatingElement) return;
        const W = "touches" in y ? y.touches[0].clientX : y.clientX,
          Y = "touches" in y ? y.touches[0].clientY : y.clientY;
        (C.floatingElement.style.left = `${W - C.mouseOffset.x}px`),
          (C.floatingElement.style.top = `${Y - C.mouseOffset.y}px`);
        const B = document.elementFromPoint(W, Y),
          te = B == null ? void 0 : B.closest("[data-container-guid]");
        if (te) {
          const V = te.getAttribute("data-container-guid"),
            ue = pe(V);
          if (ue && ve(C.draggedContainer.type).includes(ue.container.type)) {
            const K = Se(te, W, Y);
            if (
              C.draggedContainer.type === "med_box" &&
              !["left", "right"].includes(K)
            ) {
              F(null);
              return;
            }
            F({ container: ue.container, direction: K, element: te });
            return;
          }
        }
        F(null);
      },
      ye = async (y) => {
        if (!C.isDragging) return;
        C.floatingElement && document.body.removeChild(C.floatingElement);
        let W = null,
          Y = null,
          B = null;
        if (
          (console.log("Drop Target:", M),
          console.log("Is Mobile Drag:", C.isMobileDrag),
          C.isMobileDrag)
        )
          if (M) {
            (W = M.direction), (B = M.container);
            const te = pe(C.draggedContainer.GUID);
            if (te) {
              const ge = te.parent.contents.findIndex(
                (Pe) => Pe.GUID === C.draggedContainer.GUID
              );
              te.parent.contents.splice(ge, 1);
              const he = T(te.parent, C.draggedContainer);
              te.parent.contents = he;
            }
            const V = $(M.container.gird_position || "0,0");
            let ue = V.row,
              ie = V.col;
            switch (M.direction) {
              case "top":
                ue = Math.max(0, V.row);
                break;
              case "bottom":
                ue = V.row + 1;
                break;
              case "left":
                ie = Math.max(0, V.col);
                break;
              case "right":
                ie = V.col + 1;
                break;
            }
            const K = pe(M.container.MASTER_GUID || M.container.GUID);
            let q = (K == null ? void 0 : K.container) || M.container;
            if (
              (C.draggedContainer.class != M.class && (q = M),
              C.draggedContainer.type === "med_box" &&
                M.container.type !== "med_box")
            )
              if (
                (console.log("藥盒移動目標到層架上"),
                (q = M.container),
                q.contents.length > 0)
              ) {
                let ge = 0,
                  he = 0;
                q.contents.forEach((Pe) => {
                  const Re = $(Pe.gird_position || "0,0").row,
                    Ot = $(Pe.gird_position || "0,0").col;
                  ge > Re && (ge = Re), he > Ot && (he = Ot);
                });
                for (let Pe = 0; Pe <= he; Pe++)
                  for (let Re = 0; Re <= ge; Re++) {
                    const Ot = `${Pe},${Re}`;
                    q.contents.filter((Er) => Er.grid_position === Ot)
                      .length === 0 && ((ue = Pe), (ie = Re));
                  }
              } else (ue = 0), (ie = 0);
            (Y = q), se(q, C.draggedContainer, ue, ie, M.direction);
          } else (W = null), (B = null), (Y = C.originalParent);
        else if (M) {
          (W = M.direction), (B = M.container);
          const te = $(M.container.gird_position || "0,0");
          let V = te.row,
            ue = te.col;
          switch (M.direction) {
            case "top":
              V = Math.max(0, te.row);
              break;
            case "bottom":
              V = te.row + 1;
              break;
            case "left":
              ue = Math.max(0, te.col);
              break;
            case "right":
              ue = te.col + 1;
              break;
          }
          const ie = pe(M.container.MASTER_GUID || M.container.GUID);
          console.log("------目標容器", M),
            console.log("------拖曳容器", C.draggedContainer);
          let K = (ie == null ? void 0 : ie.container) || M.container;
          if (
            (console.log(C.draggedContainer.class),
            console.log(M.container.class),
            console.log(C.draggedContainer.class != M.container.class),
            C.draggedContainer.class != M.container.class &&
              ((K = M.container),
              console.log("------這邊顯示放到上層容器現象"),
              console.log("------目標容器", M),
              console.log("------拖曳容器", C.draggedContainer),
              console.log("------目標父容器", K)),
            C.draggedContainer.type === "med_box" &&
              M.container.type !== "med_box")
          )
            if (
              (console.log("藥盒移動目標到層架上"),
              (K = M.container),
              K.contents.length > 0)
            ) {
              let q = 0,
                ge = 0;
              K.contents.forEach((he) => {
                const Pe = $(he.gird_position || "0,0").row,
                  Re = $(he.gird_position || "0,0").col;
                q > Pe && (q = Pe), ge > Re && (ge = Re);
              });
              for (let he = 0; he <= ge; he++)
                for (let Pe = 0; Pe <= q; Pe++) {
                  const Re = `${he},${Pe}`;
                  K.contents.filter((Qn) => Qn.grid_position === Re).length ===
                    0 && ((V = he), (ue = Pe));
                }
            } else (V = 0), (ue = 0);
          (Y = K), se(K, C.draggedContainer, V, ue, M.direction);
        } else {
          (W = null),
            (B = null),
            (Y = C.originalParent),
            (C.draggedContainer.gird_position = C.originalPosition);
          const te = $(C.originalPosition || "0,0").row,
            V = $(C.originalPosition || "0,0").col;
          se(C.originalParent, C.draggedContainer, te, V, null);
        }
        Z({
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
          F(null),
          console.log("Drop Direction:", W),
          console.log("Parent Object:", Y),
          console.log("Target Object:", B),
          console.log("API更新資料：", k),
          await rh(k);
      };
    m.useEffect(() => {
      if (C.isDragging)
        if (Q()) {
          const W = (te) => {
              te.preventDefault(), ee(te);
            },
            Y = (te) => ye(),
            B = (te) => ye();
          return (
            document.addEventListener("pointermove", W, { passive: !1 }),
            document.addEventListener("pointerup", Y),
            document.addEventListener("pointercancel", B),
            () => {
              document.removeEventListener("pointermove", W),
                document.removeEventListener("pointerup", Y),
                document.removeEventListener("pointercancel", B);
            }
          );
        } else {
          const W = (V) => ee(V),
            Y = (V) => ye(),
            B = (V) => {
              V.preventDefault(), ee(V);
            },
            te = (V) => ye();
          return (
            document.addEventListener("mousemove", W),
            document.addEventListener("mouseup", Y),
            document.addEventListener("touchmove", B, { passive: !1 }),
            document.addEventListener("touchend", te),
            () => {
              document.removeEventListener("mousemove", W),
                document.removeEventListener("mouseup", Y),
                document.removeEventListener("touchmove", B),
                document.removeEventListener("touchend", te);
            }
          );
        }
    }, [C.isDragging, M]),
      m.useEffect(() => {
        const y = (Y) => {
            Y.code === "Space" && !Y.repeat && (Y.preventDefault(), L(!0));
          },
          W = (Y) => {
            Y.code === "Space" && (Y.preventDefault(), L(!1), b(!1));
          };
        return (
          window.addEventListener("keydown", y),
          window.addEventListener("keyup", W),
          () => {
            window.removeEventListener("keydown", y),
              window.removeEventListener("keyup", W);
          }
        );
      }, []);
    const z = m.useCallback(
        (y) => {
          var Y;
          if (_) return;
          if (y.ctrlKey || y.metaKey) {
            y.preventDefault(), y.stopPropagation();
            const B =
              (Y = n.current) == null ? void 0 : Y.getBoundingClientRect();
            if (!B) return;
            const te = y.clientX - B.left,
              V = y.clientY - B.top,
              ue = y.deltaY > 0 ? 0.9 : 1.1,
              ie = Math.max(0.1, Math.min(5, p.scale * ue)),
              K = ie / p.scale,
              q = te - (te - p.x) * K,
              ge = V - (V - p.y) * K;
            w({ x: q, y: ge, scale: ie });
          }
        },
        [p, _]
      ),
      D = m.useCallback(
        (y) => {
          _ ||
            !j ||
            (b(!0),
            x({ x: y.clientX, y: y.clientY }),
            O({ x: y.clientX, y: y.clientY }),
            E(!1),
            y.preventDefault());
        },
        [_, j]
      ),
      A = m.useCallback(
        (y) => {
          if (!v || _) return;
          const W = y.clientX - f.x,
            Y = y.clientY - f.y;
          if (S) {
            const B = Math.abs(y.clientX - S.x),
              te = Math.abs(y.clientY - S.y);
            (B > 5 || te > 5) && E(!0);
          }
          w((B) => ({ ...B, x: B.x + W, y: B.y + Y })),
            x({ x: y.clientX, y: y.clientY });
        },
        [v, f, _, S]
      ),
      H = m.useCallback(() => {
        b(!1), O(null);
      }, []),
      [re, ae] = m.useState(null),
      [xe, be] = m.useState({ x: 0, y: 0 }),
      Ne = (y) => {
        if (y.length < 2) return null;
        const W = y[0],
          Y = y[1];
        return Math.sqrt(
          Math.pow(Y.clientX - W.clientX, 2) +
            Math.pow(Y.clientY - W.clientY, 2)
        );
      },
      _e = (y) => {
        if (y.length === 1) return { x: y[0].clientX, y: y[0].clientY };
        const W = y[0],
          Y = y[1];
        return {
          x: (W.clientX + Y.clientX) / 2,
          y: (W.clientY + Y.clientY) / 2,
        };
      },
      ce = m.useCallback(
        (y) => {
          if (!_) {
            if (y.touches.length === 2) {
              const W = Ne(y.touches),
                Y = _e(y.touches);
              ae(W), be(Y);
            } else if (y.touches.length === 1) {
              const W = y.touches[0];
              x({ x: W.clientX, y: W.clientY }), b(!0);
            }
          }
        },
        [_]
      ),
      me = m.useCallback(
        (y) => {
          var W;
          if (!_) {
            if ((y.preventDefault(), y.touches.length === 2 && re !== null)) {
              const Y = Ne(y.touches),
                B = _e(y.touches);
              if (Y && re) {
                const te =
                  (W = n.current) == null ? void 0 : W.getBoundingClientRect();
                if (!te) return;
                const V = Y / re,
                  ue = Math.max(0.1, Math.min(5, p.scale * V)),
                  ie = B.x - te.left,
                  K = B.y - te.top,
                  q = ue / p.scale,
                  ge = ie - (ie - p.x) * q,
                  he = K - (K - p.y) * q;
                w({ x: ge, y: he, scale: ue }), ae(Y), be(B);
              }
            } else if (y.touches.length === 1 && v) {
              const Y = y.touches[0],
                B = Y.clientX - f.x,
                te = Y.clientY - f.y;
              w((V) => ({ ...V, x: V.x + B, y: V.y + te })),
                x({ x: Y.clientX, y: Y.clientY });
            }
          }
        },
        [p, re, v, f, _]
      ),
      we = m.useCallback(() => {
        ae(null), b(!1);
      }, []);
    m.useEffect(() => {
      const y = n.current;
      if (y)
        return (
          y.addEventListener("wheel", z, { passive: !1 }),
          () => y.removeEventListener("wheel", z)
        );
    }, [z]);
    const De = () => (!o || o.length === 0 ? [] : o),
      Ve = (y) => {
        if (!y || y.length === 0)
          return { sortedContents: [], maxRow: 0, maxCol: 0 };
        const W = y.map((V) => ({
            ...V,
            gridPos: $(V.gird_position || "0,0"),
          })),
          Y = Math.max(...W.map((V) => V.gridPos.row), 0),
          B = Math.max(...W.map((V) => V.gridPos.col), 0);
        return {
          sortedContents: W.sort((V, ue) =>
            V.gridPos.row !== ue.gridPos.row
              ? V.gridPos.row - ue.gridPos.row
              : V.gridPos.col - ue.gridPos.col
          ),
          maxRow: Y,
          maxCol: B,
        };
      },
      Ce = De(),
      qe = Math.max(...Ce.map((y) => $(y.gird_position || "0,0").row), 0),
      ze = Math.max(...Ce.map((y) => $(y.gird_position || "0,0").col), 0),
      vt = (y) => {
        const W = (B) => {
            if (
              B.width &&
              Array.isArray(B.width) &&
              typeof B.width_index == "number" &&
              B.width_index >= 0 &&
              B.width_index < B.width.length
            ) {
              const V = parseFloat(B.width[B.width_index]);
              if (!isNaN(V)) {
                const ue = V * 20;
                return Math.max(200, ue);
              }
            }
            return 200;
          },
          Y = (B) => {
            switch (B) {
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
              W(y),
              s.jsxs(
                "div",
                {
                  "data-container-guid": y.GUID,
                  className: `${
                    y.type !== "sub_container"
                      ? "border-2 rounded-lg shadow-sm"
                      : ""
                  } ${Y(
                    y.type || 0
                  )} min-h-[80px] flex flex-col flex-shrink-0 h-full overflow-hidden`,
                  children: [
                    s.jsx("div", {
                      onMouseDown:
                        _ && oe(y.type) && !Q()
                          ? (B) =>
                              U(
                                y,
                                B.currentTarget.closest(
                                  "[data-container-guid]"
                                ),
                                B
                              )
                          : void 0,
                      onTouchStart:
                        _ && oe(y.type) && !Q()
                          ? (B) =>
                              U(
                                y,
                                B.currentTarget.closest(
                                  "[data-container-guid]"
                                ),
                                B
                              )
                          : void 0,
                      onPointerDown:
                        _ && oe(y.type) && Q()
                          ? (B) =>
                              U(
                                y,
                                B.currentTarget.closest(
                                  "[data-container-guid]"
                                ),
                                B
                              )
                          : void 0,
                      className: _ && oe(y.type) ? "cursor-move" : "",
                      children: s.jsx(zs, { content: y, isAdminMode: g }),
                    }),
                    s.jsx("div", { className: "flex-1 p-1", children: it(y) }),
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
                className: `${Y(
                  y.type || 0
                )} border-2 overflow-hidden rounded-lg shadow-sm min-h-[80px] flex flex-col h-full`,
                children: [
                  s.jsx("div", {
                    onMouseDown:
                      _ && oe(y.type) && !Q()
                        ? (B) =>
                            U(
                              y,
                              B.currentTarget.closest("[data-container-guid]"),
                              B
                            )
                        : void 0,
                    onTouchStart:
                      _ && oe(y.type) && !Q()
                        ? (B) =>
                            U(
                              y,
                              B.currentTarget.closest("[data-container-guid]"),
                              B
                            )
                        : void 0,
                    onPointerDown:
                      _ && oe(y.type) && Q()
                        ? (B) =>
                            U(
                              y,
                              B.currentTarget.closest("[data-container-guid]"),
                              B
                            )
                        : void 0,
                    className: _ && oe(y.type) ? "cursor-move" : "",
                    children: s.jsx(zs, { content: y, isAdminMode: g }),
                  }),
                  s.jsx("div", { className: "flex-1  p-1", children: it(y) }),
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
                } ${Y(
                  y.type || 0
                )} min-h-[80px] flex flex-col h-full overflow-hidden`,
                children: [
                  s.jsx("div", {
                    onMouseDown:
                      _ && oe(y.type) && !Q()
                        ? (B) =>
                            U(
                              y,
                              B.currentTarget.closest("[data-container-guid]"),
                              B
                            )
                        : void 0,
                    onTouchStart:
                      _ && oe(y.type) && !Q()
                        ? (B) =>
                            U(
                              y,
                              B.currentTarget.closest("[data-container-guid]"),
                              B
                            )
                        : void 0,
                    onPointerDown:
                      _ && oe(y.type) && Q()
                        ? (B) =>
                            U(
                              y,
                              B.currentTarget.closest("[data-container-guid]"),
                              B
                            )
                        : void 0,
                    className: _ && oe(y.type) ? "cursor-move" : "",
                    children: s.jsx(zs, { content: y, isAdminMode: g }),
                  }),
                  s.jsx("div", {
                    className: "flex-1 p-1 flex items-center",
                    children: it(y),
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
                } ${Y(
                  y.type || 0
                )} min-h-[80px] flex flex-col h-full overflow-hidden ${
                  y.type == "none" ? "opacity-0" : ""
                }`,
                children: [
                  s.jsx("div", {
                    onMouseDown:
                      _ && oe(y.type) && !Q()
                        ? (B) =>
                            U(
                              y,
                              B.currentTarget.closest("[data-container-guid]"),
                              B
                            )
                        : void 0,
                    onTouchStart:
                      _ && oe(y.type) && !Q()
                        ? (B) =>
                            U(
                              y,
                              B.currentTarget.closest("[data-container-guid]"),
                              B
                            )
                        : void 0,
                    onPointerDown:
                      _ && oe(y.type) && Q()
                        ? (B) =>
                            U(
                              y,
                              B.currentTarget.closest("[data-container-guid]"),
                              B
                            )
                        : void 0,
                    className: _ && oe(y.type) ? "cursor-move" : "",
                    children: s.jsx(zs, { content: y, isAdminMode: g }),
                  }),
                  s.jsx("div", { className: "flex-1 p-1", children: it(y) }),
                ],
              },
              y.GUID
            );
        }
      },
      it = (y) => {
        const W = (Y, B, te) => {
          const V = Array(B + 1)
              .fill(null)
              .map(() => Array(te + 1).fill(!1)),
            ue = {};
          return (
            Y.forEach((ie) => {
              const K = $(ie.gird_position || "0,0");
              (ue[`${K.row},${K.col}`] = ie), (V[K.row][K.col] = !0);
            }),
            s.jsx("table", {
              className: "w-full h-full",
              style: { borderCollapse: "none", borderSpacing: "0px" },
              children: s.jsx("tbody", {
                children: Array.from({ length: B + 1 }, (ie, K) =>
                  s.jsx(
                    "tr",
                    {
                      className: "h-full",
                      style: { height: `${100 / (B + 1)}%`, minHeight: "80px" },
                      children: Array.from({ length: te + 1 }, (q, ge) => {
                        const he = `${K},${ge}`,
                          Pe = ue[he];
                        return Pe
                          ? s.jsxs(
                              "td",
                              {
                                className: "align-top bg-transparent",
                                style: {
                                  width: `${100 / (te + 1)}%`,
                                  height: `${100 / (B + 1)}%`,
                                  minHeight: "80px",
                                  border: "none",
                                  position: "relative",
                                },
                                children: [
                                  vt(Pe),
                                  (M == null ? void 0 : M.container.GUID) ===
                                    Pe.GUID &&
                                    s.jsx("div", {
                                      className:
                                        "absolute inset-0 pointer-events-none",
                                      children: s.jsx("div", {
                                        className: `absolute bg-blue-400 opacity-50 ${
                                          M.direction === "top"
                                            ? "top-0 left-0 right-0 h-1"
                                            : M.direction === "bottom"
                                            ? "bottom-0 left-0 right-0 h-1"
                                            : M.direction === "left"
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
                                  width: `${100 / (te + 1)}%`,
                                  height: `${100 / (B + 1)}%`,
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
                    K
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
                sortedContents: q,
                maxRow: ge,
                maxCol: he,
              } = Ve(y.contents);
              return W(q, ge, he);
            } else
              return s.jsx("table", {
                className: "bg-transparent w-full h-full",
                style: { borderCollapse: "separate", borderSpacing: "1px" },
                children: s.jsx("tbody", { children: s.jsx("tr", {}) }),
              });
          case "dispensing_shelves":
            if (y.contents && y.contents.length > 0) {
              const {
                sortedContents: q,
                maxRow: ge,
                maxCol: he,
              } = Ve(y.contents);
              return W(q, ge, he);
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
              const q = y.medMapStock,
                ge = q.length,
                he = ge > 0 ? 100 / ge : 100,
                Pe = y.width ? y.width * 5 : 500;
              return s.jsx("div", {
                className: "flex h-full",
                style: { minWidth: `${Pe}px` },
                children: q.map((Re, Ot) => {
                  const [Qn, Er] = Re.location.split(",").map(Number);
                  return s.jsxs(
                    "div",
                    {
                      className:
                        "border-r border-gray-300 last:border-r-0 p-1 flex flex-col justify-center items-center cursor-pointer hover:bg-yellow-50 transition-colors",
                      style: { width: `${he}%` },
                      onMouseDown: (Wt) => {
                        O({ x: Wt.clientX, y: Wt.clientY }), E(!1);
                      },
                      onMouseUp: (Wt) => {
                        if (!G && S) {
                          const Pr = Math.abs(Wt.clientX - S.x),
                            Ir = Math.abs(Wt.clientY - S.y);
                          Pr <= 5 && Ir <= 5 && i(y, Re);
                        }
                        O(null), E(!1);
                      },
                      onMouseMove: (Wt) => {
                        if (S) {
                          const Pr = Math.abs(Wt.clientX - S.x),
                            Ir = Math.abs(Wt.clientY - S.y);
                          (Pr > 5 || Ir > 5) && E(!0);
                        }
                      },
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
                          children: ["位置: ", Qn, "-", Er],
                        }),
                      ],
                    },
                    Re.GUID || Ot
                  );
                }),
              });
            } else if (y.contents && y.contents.length > 0) {
              const {
                sortedContents: q,
                maxRow: ge,
                maxCol: he,
              } = Ve(y.contents);
              return W(q, ge, he);
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
                sortedContents: q,
                maxRow: ge,
                maxCol: he,
              } = Ve(y.contents);
              return W(q, ge, he);
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
            const Y = Math.max(
                ...y.Boxes.flat().map((q) => +q.Row + +q.Height - 1)
              ),
              B = Math.max(
                ...y.Boxes.flat().map((q) => +q.Column + +q.Width - 1)
              ),
              te = Y + 1,
              V = B + 1,
              ue = y.Boxes.flat(),
              ie = Array(te)
                .fill(null)
                .map(() => Array(V).fill(!1)),
              K = {};
            return (
              ue.forEach((q) => {
                q.Slave || (K[`${q.Row},${q.Column}`] = q);
              }),
              ue.forEach((q) => {
                if (!q.Slave && (q.Width > 1 || q.Height > 1))
                  for (let ge = q.Row; ge < q.Row + q.Height; ge++)
                    for (let he = q.Column; he < q.Column + q.Width; he++)
                      (ge !== q.Row || he !== q.Column) && (ie[ge][he] = !0);
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
                  children: y.contents.map((q) => vt(q)),
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
      In = (y) => {
        if (
          ($(y.gird_position || "0,0"),
          y.type !== "調劑台" && y.type !== "藥庫")
        )
          return null;
        const W = (Y) => {
          if (!Y || Y.length === 0)
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
          const { sortedContents: B, maxRow: te, maxCol: V } = Ve(Y),
            ue = Array(te + 1)
              .fill(null)
              .map(() => Array(V + 1).fill(!1)),
            ie = {};
          return (
            B.forEach((K) => {
              const q = $(K.gird_position || "0,0");
              (ie[`${q.row},${q.col}`] = K), (ue[q.row][q.col] = !0);
            }),
            s.jsx("table", {
              className: "w-full h-full",
              style: { borderCollapse: "none", borderSpacing: "0px" },
              children: s.jsx("tbody", {
                children: Array.from({ length: te + 1 }, (K, q) =>
                  s.jsx(
                    "tr",
                    {
                      className: "h-full",
                      children: Array.from({ length: V + 1 }, (ge, he) => {
                        const Pe = `${q},${he}`,
                          Re = ie[Pe];
                        return Re
                          ? s.jsx(
                              "td",
                              {
                                className: "p-1 align-top bg-transparent",
                                style: {
                                  width: `${100 / (V + 1)}%`,
                                  height: `${100 / (te + 1)}%`,
                                  minHeight: "120px",
                                  border: "none",
                                },
                                children: vt(Re),
                              },
                              he
                            )
                          : s.jsx(
                              "td",
                              {
                                className: "p-1 align-top bg-transparent",
                                style: {
                                  width: `${100 / (V + 1)}%`,
                                  height: `${100 / (te + 1)}%`,
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
                    q
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
                      onClick: (Y) => {
                        Y.stopPropagation(),
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
                      children: s.jsx(Nt, {
                        className: "w-6 h-6 text-green-700",
                      }),
                    }),
                  }),
                ],
              }),
              s.jsx("div", {
                className: `flex-1 bg-orange-50 ${
                  (M == null ? void 0 : M.container.GUID) === y.GUID
                    ? "ring-2 ring-blue-400 ring-inset"
                    : ""
                }`,
                children: W(y.contents || []),
              }),
            ],
          },
          y.GUID
        );
      },
      Vt = m.useCallback(
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
          const W = y[0].CODE || y[0].code;
          if ((console.log("🎯 提取的藥碼:", W), !W)) {
            console.warn("⚠️ 無法定位藥品：缺少藥碼");
            return;
          }
          console.log("🎯 開始定位藥品:", W);
          const Y = (te) => {
              for (const V of te) {
                if (V.type === "grid_draw" && V.Boxes) {
                  for (const ue of V.Boxes)
                    for (const ie of ue)
                      if (ie.Code === W) {
                        const K = document.querySelector(
                          `[data-container-guid="${V.GUID}"]`
                        );
                        if (K)
                          return (
                            console.log("✅ 找到藥品容器 (grid_draw):", V),
                            { element: K, bounds: K.getBoundingClientRect() }
                          );
                      }
                }
                if (
                  V.type === "list_draw" &&
                  V.drugs &&
                  V.drugs.some((ie) => ie.code === W)
                ) {
                  const ie = document.querySelector(
                    `[data-container-guid="${V.GUID}"]`
                  );
                  if (ie)
                    return (
                      console.log("✅ 找到藥品容器 (list_draw):", V),
                      { element: ie, bounds: ie.getBoundingClientRect() }
                    );
                }
                if (
                  (V.type === "store_shelves" ||
                    V.type === "dispensing_shelves") &&
                  V.medMapStock &&
                  V.medMapStock.some(
                    (ie) => ie.code === W || ie.material_no === W
                  )
                ) {
                  const ie = document.querySelector(
                    `[data-container-guid="${V.GUID}"]`
                  );
                  if (ie)
                    return (
                      console.log("✅ 找到藥品容器 (store_shelves):", V),
                      { element: ie, bounds: ie.getBoundingClientRect() }
                    );
                }
                if (
                  V.type === "med_box" &&
                  V.med_info &&
                  V.med_info.length > 0 &&
                  V.med_info.some((ie) => ie.code === W)
                ) {
                  const ie = document.querySelector(
                    `[data-container-guid="${V.GUID}"]`
                  );
                  if (ie)
                    return (
                      console.log("✅ 找到藥品容器 (med_box):", V),
                      { element: ie, bounds: ie.getBoundingClientRect() }
                    );
                }
                if (V.contents && V.contents.length > 0) {
                  const ue = Y(V.contents);
                  if (ue) return ue;
                }
              }
              return null;
            },
            B = Y(o);
          if (B) {
            const te = n.current.getBoundingClientRect(),
              V = B.bounds,
              ue = (V.left + V.right) / 2,
              ie = (V.top + V.bottom) / 2,
              K = (ue - te.left - p.x) / p.scale,
              q = (ie - te.top - p.y) / p.scale,
              ge = te.width / 2,
              he = te.height / 2,
              Pe = ge - K * p.scale,
              Re = he - q * p.scale;
            w((Ot) => ({ ...Ot, x: Pe, y: Re })),
              console.log("✅ 定位完成", {
                elementScreenCenter: { x: ue, y: ie },
                elementCanvasPos: { x: K, y: q },
                screenCenter: { x: ge, y: he },
                newTransform: { x: Pe, y: Re },
              }),
              d(`已定位到藥品：${y.CHT_NAME || y.NAME || W}`, "success");
          } else
            console.warn("❌ 未找到藥品容器"),
              d("未找到該藥品的儲存位置", "error");
        },
        [o, p, d]
      );
    m.useImperativeHandle(
      t,
      () => (
        console.log("🔧 useImperativeHandle 設置 ref 方法"), { locateDrug: Vt }
      )
    );
    const Go = async (y) => {
      if (y.key === "Enter" && P.trim() && !N) {
        y.preventDefault(), I(!0);
        try {
          console.log("🔍 搜尋條碼:", P);
          const W = await ke.searchByBarCode(P.trim());
          console.log("📋 條碼搜尋回應:", W),
            W.Code === 200
              ? (console.log("✅ 找到藥品資料:", W.Data),
                d("找到藥品資料", "success"),
                Vt(W.Data))
              : W.Code === -200 && W.Result === "查無資料"
              ? (console.log("⚠️ 查無資料，開啟建立條碼彈窗"),
                d("查無資料，請建立條碼", "error"),
                h(P.trim()),
                R(""))
              : (console.log("❌ 搜尋失敗:", W.Result),
                d(W.Result || "搜尋失敗", "error"));
        } catch (W) {
          console.error("條碼搜尋錯誤:", W), d("搜尋失敗，請稍後再試", "error");
        } finally {
          I(!1);
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
                value: P,
                onChange: (y) => R(y.target.value),
                onKeyDown: Go,
                placeholder: "輸入條碼或掃描...",
                className:
                  "px-4 py-2 w-50 focus:outline-none text-gray-700 disabled:opacity-50",
                disabled: N,
              }),
              s.jsx("button", {
                onClick: () => c("track_Drug_mode"),
                className: "p-2",
                title: "掃描條碼",
                disabled: N,
                children: s.jsx(kr, { className: "w-6 h-6 text-blue-600" }),
              }),
            ],
          }),
        }),
        s.jsx("div", {
          className: "absolute bottom-4 right-4 z-10 flex gap-2",
          children: s.jsx("button", {
            onClick: () => u(!_),
            className: `rounded-lg shadow-lg p-2 transition-colors ${
              _
                ? "bg-red-500 text-white hover:bg-red-600"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`,
            title: _ ? "Unlock Canvas" : "Lock Canvas",
            children: _
              ? s.jsx(Ld, { className: "w-6 h-6" })
              : s.jsx(Ud, { className: "w-6 h-6" }),
          }),
        }),
        s.jsx("div", {
          ref: n,
          className: `w-full h-full relative ${
            j && !_ ? "cursor-grab" : "cursor-default"
          } ${v ? "cursor-grabbing" : ""}`,
          onMouseDown: D,
          onMouseMove: A,
          onMouseUp: H,
          onMouseLeave: H,
          onTouchStart: ce,
          onTouchMove: me,
          onTouchEnd: we,
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
                    borderSpacing: `${de}px`,
                    minWidth: "fit-content",
                    minHeight: "fit-content",
                  },
                  children: s.jsx("tbody", {
                    children: Array.from({ length: qe + 1 }, (y, W) =>
                      s.jsx(
                        "tr",
                        {
                          children: Array.from({ length: ze + 1 }, (Y, B) => {
                            const te = Ce.find((V) => {
                              const ue = $(V.gird_position || "0,0");
                              return ue.row === W && ue.col === B;
                            });
                            return te
                              ? s.jsx(
                                  "td",
                                  {
                                    className: "align-top",
                                    style: {
                                      minWidth: "150px",
                                      minHeight: "120px",
                                      border: "none",
                                    },
                                    children: In(te),
                                  },
                                  B
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
                                  B
                                );
                          }),
                        },
                        W
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
zd.displayName = "DrugCanvas";
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
  yc = {},
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
          if (((c = oh(c)), c in yc)) return;
          yc[c] = !0;
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
            return new Promise((p, w) => {
              g.addEventListener("load", p),
                g.addEventListener("error", () =>
                  w(new Error(`Unable to preload CSS for ${c}`))
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
  Yt = [
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
      } = Je(),
      { t: d } = pt(),
      [g, p] = m.useState(0),
      [w, v] = m.useState({}),
      [b, _] = m.useState(""),
      [u, f] = m.useState(""),
      [x, j] = m.useState("N"),
      [L, P] = m.useState([]),
      [R, N] = m.useState(!1),
      [I, S] = m.useState(!1),
      [O, G] = m.useState(null),
      [E, C] = m.useState(null),
      [Z, M] = m.useState(!1),
      [F, k] = m.useState(!1);
    m.useEffect(() => {
      if (n && e)
        if (c === "add") {
          p(0);
          const U = {};
          Yt.forEach((ee, ye) => {
            U[ye] = 0;
          }),
            v(U),
            _(""),
            S(!1),
            Q();
        } else {
          const U = Yt.findIndex(
            (ee) => ee.box_type === n.box_type || ee.type === n.box_type
          );
          if ((console.log(n), U >= 0)) {
            p(U);
            const ye = Yt[U].width.findIndex((D) => {
                var A;
                return (
                  D === ((A = n.width) == null ? void 0 : A[n.width_index || 0])
                );
              }),
              z = {};
            Yt.forEach((D, A) => {
              A === U ? (z[A] = ye >= 0 ? ye : 0) : (z[A] = 0);
            }),
              v(z);
          } else {
            p(0);
            const ee = {};
            Yt.forEach((ye, z) => {
              ee[z] = 0;
            }),
              v(ee);
          }
          _(n.ip || ""),
            C({
              box_type: n.box_type,
              width: n.width,
              width_index: n.width_index,
              ip: n.ip || "",
              storage: n.storage ? JSON.parse(JSON.stringify(n.storage)) : null,
            });
        }
    }, [n, e, c]);
    const Q = () => {
        n && n.parentShelf && G(n.parentShelf);
      },
      de = (U) => {
        if (!U || !U.contents || U.contents.length === 0) return "0,0";
        let ee = -1,
          ye = 0;
        return (
          U.contents.forEach((z) => {
            if (z.gird_position) {
              const [D, A] = z.gird_position.split(",").map(Number);
              A > ee && ((ee = A), (ye = D));
            }
          }),
          `${ye},${ee + 1}`
        );
      },
      X = () => {
        if (!E || c !== "edit") return !1;
        const U = Yt[g],
          ee = w[g] || 0,
          ye = U.box_type || U.type || U.name;
        return (
          E.box_type !== ye ||
          E.width_index !== ee ||
          E.ip !== b ||
          JSON.stringify(E.storage) !==
            JSON.stringify(n == null ? void 0 : n.storage)
        );
      },
      ne = (U) => {
        p(U);
      },
      je = (U, ee) => {
        v((ye) => ({ ...ye, [U]: ee }));
      },
      oe = () => {
        n && (c === "add" ? $() : le());
      },
      ve = () => {
        t();
      },
      $ = async () => {
        if (!n || !O) {
          a("缺少必要資料，無法新增藥盒", "error");
          return;
        }
        S(!0);
        try {
          const U = Yt[g],
            ee = w[g] || 0,
            ye = U.width[ee],
            z = de(O),
            D = {
              Master_GUID: O.GUID,
              position: z,
              width: ye.toString(),
              height: "60",
              ip_box: b,
              serverName: O.serverName || "",
              serverType: O.serverType || "",
            };
          console.log("🚀 發送新增藥盒 API 請求:", D);
          const A = await ke.addMedMapBox(D);
          A.Code === 200
            ? (a("藥盒新增成功", "success"), t(), await pe())
            : a(`藥盒新增失敗：${A.Result || "未知錯誤"}`, "error");
        } catch (U) {
          console.error("Add med box failed:", U),
            a("藥盒新增失敗：網路錯誤", "error");
        } finally {
          S(!1);
        }
      },
      le = async () => {
        var U;
        if (!n || !X()) {
          a("沒有資料變更", "error");
          return;
        }
        M(!0);
        try {
          const ee = Yt[g],
            ye = w[g] || 0,
            z = ee.width[ye],
            D = ee.box_type || ee.type || ee.name,
            A = E.box_type !== D || E.width_index !== ye || E.ip !== b,
            H =
              JSON.stringify(E.storage) !==
              JSON.stringify(n == null ? void 0 : n.storage),
            re = [];
          if (A) {
            const be = {
              GUID: n.GUID,
              Master_GUID: n.MASTER_GUID,
              position: n.gird_position,
              ip_light: b,
              serverName: n.serverName,
              serverType: n.serverType,
            };
            re.push(ke.updateMedMapBox([be]));
          }
          H &&
            re.push(
              ke.updateEpd266Storages(n.serverName || "", n.serverType || "", [
                n.storage,
              ])
            );
          const ae = await Promise.all(re);
          if (ae.every((be) => be.Code === 200))
            a("藥盒更新成功", "success"), t(), await pe();
          else {
            const be = ae.filter((Ne) => Ne.Code !== 200);
            a(
              `藥盒更新失敗：${
                ((U = be[0]) == null ? void 0 : U.Result) || "未知錯誤"
              }`,
              "error"
            );
          }
        } catch (ee) {
          console.error("Update med box failed:", ee),
            a("藥盒更新失敗：網路錯誤", "error");
        } finally {
          M(!1);
        }
      },
      pe = async () => {
        if (!r) {
          console.warn("⚠️ 沒有選中的部門類型，無法重新獲取資料");
          return;
        }
        console.log("🔄 重新獲取藥品地圖資料，部門類型:", r), l(!0);
        try {
          const U = await ke.getMedMapByDepartment(r);
          if (U.Code === 200 && U.Data) {
            console.log("📡 API 回傳成功，開始轉換資料");
            const ee = await lh(() => Promise.resolve().then(() => Pm), void 0),
              ye = ee.default.convertMedMapApiToFakeData(U.Data);
            if (!ee.default.validateConvertedData(ye)) {
              console.error("❌ 轉換後的資料驗證失敗"),
                a("資料更新失敗：資料格式錯誤", "error");
              return;
            }
            o(ye), console.log("✅ 藥品地圖資料已更新");
          } else
            console.error("❌ API 回傳錯誤:", U),
              a("資料更新失敗：API 錯誤", "error");
        } catch (U) {
          console.error("💥 重新獲取藥品地圖資料失敗:", U),
            a("資料更新失敗：網路錯誤", "error");
        } finally {
          l(!1);
        }
      },
      T = async () => {
        N(!0);
        try {
          const U = u.toLowerCase().trim();
          let ee = h;
          U &&
            (ee = ee.filter((ye) => {
              var z, D, A;
              return (
                ((z = ye.CODE) == null
                  ? void 0
                  : z.toLowerCase().includes(U)) ||
                ((D = ye.NAME) == null
                  ? void 0
                  : D.toLowerCase().includes(U)) ||
                ((A = ye.CHT_NAME) == null
                  ? void 0
                  : A.toLowerCase().includes(U))
              );
            })),
            x !== "N" && (ee = ee.filter((ye) => ye.DRUGKIND === x)),
            P(ee);
        } catch (U) {
          console.error("Search failed:", U), P([]);
        } finally {
          N(!1);
        }
      },
      se = (U, ee) => {
        console.log("📸 掃描成功，藥品資料:", ee), k(!1), Se(ee);
      },
      Se = async (U) => {
        if (n)
          try {
            console.log("🚀 開始更新藥盒藥品代碼:", U.CODE);
            const ee = await ke.updateEpd266Medcode(
              n.serverName || "",
              n.serverType || "",
              U.CODE,
              n.storage || {}
            );
            ee.Code === 200
              ? (console.log("✅ 藥品代碼更新成功:", ee.Data),
                (n.storage = ee.Data),
                (n.med_info = [
                  { name: U.NAME, cht_name: U.CHT_NAME, code: U.CODE },
                ]),
                a("藥品更新成功", "success"),
                i())
              : (console.error("❌ 藥品代碼更新失敗:", ee),
                a(`藥品更新失敗：${ee.Result || "未知錯誤"}`, "error"));
          } catch (ee) {
            console.error("💥 藥品代碼更新發生錯誤:", ee),
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
              onClick: ve,
            }),
            s.jsxs("div", {
              className:
                "relative flex flex-col bg-white rounded-xl shadow-2xl border border-gray-200",
              style: { width: "90vw", height: "90vh" },
              onClick: (U) => U.stopPropagation(),
              children: [
                s.jsxs("div", {
                  className:
                    "flex items-center justify-between px-4 py-2 border-b border-gray-200",
                  children: [
                    s.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        s.jsx(tn, { className: "w-6 h-6 text-gray-600" }),
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
                      onClick: ve,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: s.jsx(Ye, { className: "w-6 h-6" }),
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
                                onChange: (U) => _(U.target.value),
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
                                children: Yt.map((U, ee) =>
                                  s.jsxs(
                                    "label",
                                    {
                                      className: `flex items-center px-4 py-2 border-2 rounded-lg cursor-pointer transition-all ${
                                        g === ee
                                          ? "border-blue-500 bg-blue-50"
                                          : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                                      }`,
                                      children: [
                                        s.jsx("input", {
                                          type: "radio",
                                          name: "boxType",
                                          value: ee,
                                          checked: g === ee,
                                          onChange: () => ne(ee),
                                          className:
                                            "w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 hidden",
                                        }),
                                        s.jsx("div", {
                                          children: s.jsx("div", {
                                            className:
                                              "text-sm font-medium text-gray-900",
                                            children: U.name,
                                          }),
                                        }),
                                      ],
                                    },
                                    ee
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
                              Yt.map((U, ee) =>
                                s.jsx(
                                  "div",
                                  {
                                    className: `flex gap-4 ${
                                      g === ee ? "block" : "hidden"
                                    }`,
                                    children: U.width.map((ye, z) =>
                                      s.jsxs(
                                        "label",
                                        {
                                          className: `flex items-center justify-center px-4 py-2 border-2 rounded-lg cursor-pointer transition-all ${
                                            g === ee && (w[ee] || 0) === z
                                              ? "border-green-500 bg-green-50"
                                              : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                                          }`,
                                          children: [
                                            s.jsx("input", {
                                              type: "radio",
                                              name: `width-${ee}`,
                                              value: z,
                                              checked:
                                                g === ee && (w[ee] || 0) === z,
                                              onChange: () => je(ee, z),
                                              className:
                                                "w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500 hidden",
                                            }),
                                            s.jsx("div", {
                                              className: "text-center",
                                              children: s.jsxs("div", {
                                                className:
                                                  "text-sm font-semibold text-gray-900",
                                                children: [ye, " ", U.unit],
                                              }),
                                            }),
                                          ],
                                        },
                                        `${ee}-${z}`
                                      )
                                    ),
                                  },
                                  ee
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
                                          children: n.med_info.map((U, ee) =>
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
                                                          U.code ||
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
                                                          U.name ||
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
                                                          U.cht_name ||
                                                          d("status.notSet"),
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              },
                                              ee
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
                                    onClick: () => k(!0),
                                    className:
                                      "p-2 hover:bg-gray-100 rounded-full transition-colors",
                                    title: "掃描條碼",
                                    children: s.jsx(kr, {
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
                                    onChange: (U) => f(U.target.value),
                                    placeholder: d("placeholder.drugSearch"),
                                    className:
                                      "border rounded px-3 py-1 flex-1 min-w-0 focus:border-blue-500 focus:outline-none transition-colors",
                                  }),
                                  s.jsxs("select", {
                                    value: x,
                                    onChange: (U) => j(U.target.value),
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
                                    onClick: T,
                                    disabled: R,
                                    className:
                                      "bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 transition-colors whitespace-nowrap disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2",
                                    children: [
                                      R &&
                                        s.jsx(Rt, {
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
                                children: R
                                  ? s.jsxs("div", {
                                      className:
                                        "text-gray-500 text-center flex items-center justify-center h-full",
                                      children: [
                                        s.jsx(Rt, {
                                          className:
                                            "w-5 h-5 animate-spin mr-2",
                                        }),
                                        d("status.searching"),
                                      ],
                                    })
                                  : L.length > 0
                                  ? s.jsx("div", {
                                      className: "space-y-1",
                                      children: L.map((U, ee) =>
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
                                                    children: U.NAME,
                                                  }),
                                                  s.jsx("div", {
                                                    className:
                                                      "text-xs text-gray-500 truncate",
                                                    children: U.CHT_NAME,
                                                  }),
                                                  s.jsx("div", {
                                                    className:
                                                      "text-xs text-gray-400 font-mono",
                                                    children: U.CODE,
                                                  }),
                                                ],
                                              }),
                                              s.jsx("button", {
                                                onClick: () => Se(U),
                                                className:
                                                  "ml-2 p-1 text-green-600 hover:text-green-700 hover:bg-green-50 rounded transition-colors flex-shrink-0",
                                                title: d("button.add"),
                                                children: s.jsx(Nt, {
                                                  className: "w-4 h-4",
                                                }),
                                              }),
                                            ],
                                          },
                                          U.GUID || ee
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
                      onClick: ve,
                      disabled: I || Z,
                      className:
                        "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                      children: d("button.cancel"),
                    }),
                    s.jsxs("button", {
                      onClick: oe,
                      disabled: I || Z,
                      className:
                        "px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center space-x-2",
                      children: [
                        (I || Z) &&
                          s.jsx(Rt, { className: "w-4 h-4 animate-spin" }),
                        s.jsx("span", {
                          children: I
                            ? "新增中..."
                            : Z
                            ? "更新中..."
                            : d(c === "add" ? "button.add" : "button.save"),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            s.jsx(Bo, {
              isOpen: F,
              onClose: () => k(!1),
              onScanSuccess: se,
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
      } = Je(),
      { t: o } = pt(),
      [l, a] = m.useState(""),
      [i, c] = m.useState([]),
      [h, d] = m.useState(""),
      [g, p] = m.useState("N"),
      [w, v] = m.useState([]),
      [b, _] = m.useState(!1);
    m.useEffect(() => {
      n && e && (a(n.name || ""), c(n.med_info || []));
    }, [n, e]);
    const u = (P) => {
        c((R) => R.filter((N) => N.code !== P));
      },
      f = async () => {
        _(!0);
        try {
          const P = await ke.searchMedicine(h, g);
          v(P);
        } catch (P) {
          console.error("Search failed:", P), v([]);
        } finally {
          _(!1);
        }
      },
      x = (P) => {
        const R = {
          id: P.GUID || `${Date.now()}_${Math.random()}`,
          name: P.NAME,
          cht_name: P.CHT_NAME,
          code: P.CODE,
        };
        c((N) => (N.some((S) => S.code === R.code) ? N : [...N, R]));
      },
      j = () => {
        n && ((n.name = l), (n.med_info = i), r(), t());
      },
      L = () => {
        t();
      };
    return !e || !n
      ? null
      : s.jsxs("div", {
          className: "fixed inset-0 z-50 flex items-center justify-center",
          children: [
            s.jsx("div", {
              className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
              onClick: L,
            }),
            s.jsxs("div", {
              className:
                "relative flex flex-col bg-white rounded-xl shadow-2xl border border-gray-200",
              style: { width: "90vw", height: "90vh" },
              onClick: (P) => P.stopPropagation(),
              children: [
                s.jsxs("div", {
                  className:
                    "flex items-center justify-between px-4 py-2 border-b border-gray-200",
                  children: [
                    s.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        s.jsx(tn, { className: "w-6 h-6 text-gray-600" }),
                        s.jsx("h2", {
                          className: "text-xl font-semibold text-gray-900",
                          children: o("modal.listDrawSettings"),
                        }),
                      ],
                    }),
                    s.jsx("button", {
                      onClick: L,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: s.jsx(Ye, { className: "w-6 h-6" }),
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
                            onChange: (P) => a(P.target.value),
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
                                    children: i.map((P) =>
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
                                                    P.code &&
                                                      s.jsx("div", {
                                                        children: s.jsx("div", {
                                                          className:
                                                            "text-sm text-gray-900 font-mono",
                                                          children: P.code,
                                                        }),
                                                      }),
                                                    s.jsx("div", {
                                                      children: s.jsx("div", {
                                                        className:
                                                          "text-sm text-gray-900 font-medium",
                                                        children:
                                                          P.name ||
                                                          o("status.notSet"),
                                                      }),
                                                    }),
                                                    s.jsx("div", {
                                                      children: s.jsx("div", {
                                                        className:
                                                          "text-sm text-gray-900",
                                                        children:
                                                          P.cht_name ||
                                                          o("status.notSet"),
                                                      }),
                                                    }),
                                                  ],
                                                }),
                                              }),
                                              s.jsx("button", {
                                                onClick: () => u(P.code),
                                                className:
                                                  "ml-3 p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors flex-shrink-0",
                                                title: o("button.remove"),
                                                children: s.jsx(Ye, {
                                                  className: "w-5 h-5",
                                                }),
                                              }),
                                            ],
                                          }),
                                        },
                                        P.id
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
                                    onChange: (P) => d(P.target.value),
                                    placeholder: o("placeholder.drugSearch"),
                                    className:
                                      "border rounded px-3 py-1 flex-1 min-w-0 focus:border-blue-500 focus:outline-none transition-colors",
                                  }),
                                  s.jsxs("select", {
                                    value: g,
                                    onChange: (P) => p(P.target.value),
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
                                    disabled: b,
                                    className:
                                      "bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 transition-colors whitespace-nowrap disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2",
                                    children: [
                                      b &&
                                        s.jsx(Rt, {
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
                                children: b
                                  ? s.jsxs("div", {
                                      className:
                                        "text-gray-500 text-center flex items-center justify-center h-full",
                                      children: [
                                        s.jsx(Rt, {
                                          className:
                                            "w-5 h-5 animate-spin mr-2",
                                        }),
                                        o("status.searching"),
                                      ],
                                    })
                                  : w.length > 0
                                  ? s.jsx("div", {
                                      className: "space-y-1",
                                      children: w.map((P, R) =>
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
                                                    children: P.NAME,
                                                  }),
                                                  s.jsx("div", {
                                                    className:
                                                      "text-xs text-gray-500 truncate",
                                                    children: P.CHT_NAME,
                                                  }),
                                                  s.jsx("div", {
                                                    className:
                                                      "text-xs text-gray-400 font-mono",
                                                    children: P.CODE,
                                                  }),
                                                ],
                                              }),
                                              s.jsx("button", {
                                                onClick: () => x(P),
                                                className:
                                                  "ml-2 p-1 text-green-600 hover:text-green-700 hover:bg-green-50 rounded transition-colors flex-shrink-0",
                                                title: o("button.add"),
                                                children: s.jsx(Nt, {
                                                  className: "w-4 h-4",
                                                }),
                                              }),
                                            ],
                                          },
                                          P.GUID || R
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
                      onClick: L,
                      className:
                        "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                      children: o("button.cancel"),
                    }),
                    s.jsx("button", {
                      onClick: j,
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
      } = Je(),
      { t: c } = pt(),
      [h, d] = m.useState(""),
      [g, p] = m.useState(null),
      [w, v] = m.useState(!1),
      [b, _] = m.useState(!1),
      [u, f] = m.useState(null),
      [x, j] = m.useState(""),
      [L, P] = m.useState("N"),
      [R, N] = m.useState([]),
      [I, S] = m.useState(!1),
      [O, G] = m.useState(0),
      [E, C] = m.useState({ x: 0, y: 0 });
    m.useEffect(() => {
      if (n && e)
        if ((d(n.name || ""), n.drawer)) {
          if (!w) {
            console.log("🔄 備份原始 drawer 資料:", n);
            const D = JSON.parse(JSON.stringify(n.drawer));
            p(D), v(!0), console.log("✅ 備份完成，備份資料:", D);
          }
        } else console.log("⚠️ 沒有 drawer 資料可備份"), p(null), v(!1);
    }, [n, e, w]),
      m.useEffect(() => {
        e || (v(!1), p(null), f(null));
      }, [e]);
    const Z = () => {
        n && ye();
      },
      M = () => {
        if (
          (console.log("🔄 開始恢復原始資料..."),
          console.log("原始備份資料:", g),
          console.log("當前 selectedGridDraw:", n),
          n && g && w)
        ) {
          console.log("📦 恢復 drawer 資料...");
          const D = JSON.parse(JSON.stringify(g));
          if (((n.drawer = D), o)) {
            const A = (re) => {
                re.forEach((ae) => {
                  ae.GUID === n.GUID &&
                    (console.log("🎯 找到目標格線抽屜，更新資料"),
                    (ae.drawer = D)),
                    ae.contents && Array.isArray(ae.contents) && A(ae.contents),
                    ae.components &&
                      Array.isArray(ae.components) &&
                      A(ae.components);
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
            console.log("hasBackup:", w);
        f(null), v(!1), p(null), r(), t();
      },
      F = (D, A) => {
        if (!u) return !1;
        const H = Math.min(u.startRow, u.endRow),
          re = Math.max(u.startRow, u.endRow),
          ae = Math.min(u.startCol, u.endCol),
          xe = Math.max(u.startCol, u.endCol);
        return D >= H && D <= re && A >= ae && A <= xe;
      },
      k = (D) => {
        var _e;
        if (
          !((_e = n == null ? void 0 : n.drawer) != null && _e.Boxes) ||
          D.Slave
        )
          return { width: 1, height: 1 };
        const H = n.drawer.Boxes.flat().filter(
          (ce) =>
            ce.Slave &&
            ce.MasterBox_Row === D.Row &&
            ce.MasterBox_Column === D.Column
        );
        if (H.length === 0) return { width: 1, height: 1 };
        const re = [D, ...H],
          ae = Math.min(...re.map((ce) => ce.Row)),
          xe = Math.max(...re.map((ce) => ce.Row)),
          be = Math.min(...re.map((ce) => ce.Column));
        return {
          width: Math.max(...re.map((ce) => ce.Column)) - be + 1,
          height: xe - ae + 1,
        };
      },
      Q = () => {
        var be;
        if (!u || !((be = n == null ? void 0 : n.drawer) != null && be.Boxes))
          return [];
        const D = n.drawer.Boxes.flat(),
          A = Math.min(u.startRow, u.endRow),
          H = Math.max(u.startRow, u.endRow),
          re = Math.min(u.startCol, u.endCol),
          ae = Math.max(u.startCol, u.endCol),
          xe = [];
        return (
          D.forEach((Ne) => {
            if (!Ne.Slave) {
              const _e = k(Ne),
                ce = Ne.Row + _e.height - 1,
                me = Ne.Column + _e.width - 1;
              Ne.Row >= A &&
                ce <= H &&
                Ne.Column >= re &&
                me <= ae &&
                xe.push(Ne);
            }
          }),
          xe
        );
      },
      de = (D, A, H, re) => {
        var me;
        if (!u || !((me = n == null ? void 0 : n.drawer) != null && me.Boxes))
          return !1;
        const ae = n.drawer.Boxes.flat();
        let xe = !0,
          be = D,
          Ne = A,
          _e = H,
          ce = re;
        for (; xe; )
          (xe = !1),
            ae.forEach((we) => {
              if (!we.Slave) {
                const De = k(we),
                  Ve = we.Row + De.height - 1,
                  Ce = we.Column + De.width - 1;
                !(we.Row > Ne || Ve < be || we.Column > ce || Ce < _e) &&
                  (we.Row < be && ((be = we.Row), (xe = !0)),
                  Ve > Ne && ((Ne = Ve), (xe = !0)),
                  we.Column < _e && ((_e = we.Column), (xe = !0)),
                  Ce > ce && ((ce = Ce), (xe = !0)));
              }
            });
        return { minRow: be, maxRow: Ne, minCol: _e, maxCol: ce };
      },
      X = () => {
        var xe;
        if (!u || !((xe = n == null ? void 0 : n.drawer) != null && xe.Boxes))
          return !1;
        const D = Math.min(u.startRow, u.endRow),
          A = Math.max(u.startRow, u.endRow),
          H = Math.min(u.startCol, u.endCol),
          re = Math.max(u.startCol, u.endCol),
          ae = n.drawer.Boxes.flat();
        for (let be = D; be <= A; be++)
          for (let Ne = H; Ne <= re; Ne++) {
            let _e = !1;
            for (const ce of ae)
              if (!ce.Slave) {
                const me = k(ce),
                  we = ce.Row + me.height - 1,
                  De = ce.Column + me.width - 1;
                if (be >= ce.Row && be <= we && Ne >= ce.Column && Ne <= De) {
                  _e = !0;
                  break;
                }
              }
            if (!_e) return !1;
          }
        return !0;
      },
      ne = () => {
        var me, we;
        const D = Q();
        if (!u) return { canMerge: !1, canUnmerge: !1 };
        if (D.length === 0) return { canMerge: !1, canUnmerge: !1 };
        const A =
            ((we =
              (me = n == null ? void 0 : n.drawer) == null
                ? void 0
                : me.Boxes) == null
              ? void 0
              : we.flat()) || [],
          H = D.some(
            (De) =>
              A.filter(
                (Ce) =>
                  Ce.Slave &&
                  Ce.MasterBox_Row === De.Row &&
                  Ce.MasterBox_Column === De.Column
              ).length > 0
          ),
          re = Math.min(u.startRow, u.endRow),
          ae = Math.max(u.startRow, u.endRow),
          xe = Math.min(u.startCol, u.endCol),
          be = Math.max(u.startCol, u.endCol),
          Ne = A.some(
            (De) =>
              De.Slave &&
              De.Row >= re &&
              De.Row <= ae &&
              De.Column >= xe &&
              De.Column <= be
          );
        return { canMerge: D.length > 1 && X(), canUnmerge: H || Ne };
      },
      { canMerge: je, canUnmerge: oe } = ne(),
      ve = async () => {
        S(!0);
        try {
          const D = x.toLowerCase().trim();
          let A = i;
          D &&
            (A = A.filter((H) => {
              var re, ae, xe;
              return (
                ((re = H.CODE) == null
                  ? void 0
                  : re.toLowerCase().includes(D)) ||
                ((ae = H.NAME) == null
                  ? void 0
                  : ae.toLowerCase().includes(D)) ||
                ((xe = H.CHT_NAME) == null
                  ? void 0
                  : xe.toLowerCase().includes(D))
              );
            })),
            L !== "N" && (A = A.filter((H) => H.DRUGKIND === L)),
            N(A);
        } catch (D) {
          console.error("Search failed:", D), N([]);
        } finally {
          S(!1);
        }
      },
      $ = async (D) => {
        var H;
        if (!u || !((H = n == null ? void 0 : n.drawer) != null && H.Boxes))
          return;
        const A = Q();
        if (A.length !== 0)
          try {
            const re = {
              ServerName: n.serverName,
              ServerType: n.serverType,
              ValueAry: [`guid=${A[0].GUID}`, `code=${D.CODE}`],
              Data: n.drawer,
            };
            console.log("🚀 發送更新藥品 API 請求:", re);
            const ae = await ke.request("/api/device/update_drawer_medcode", {
              method: "POST",
              body: JSON.stringify(re),
            });
            if (
              (console.log("📡 更新藥品 API 回應:", ae),
              ae.Code === 200 && ae.Data)
            ) {
              if (
                ((n.drawer = ae.Data),
                ae.Data.Boxes && (n.Boxes = ae.Data.Boxes),
                console.log("✅ 藥品資料更新成功"),
                o)
              ) {
                const xe = (Ne) => {
                    Ne.forEach((_e) => {
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
                  be = JSON.parse(JSON.stringify(o));
                xe(be), l(be);
              }
              f(null), r();
            } else
              console.error("❌ 藥品更新失敗:", ae),
                a(`藥品更新失敗：${ae.Result || "未知錯誤"}`, "error");
          } catch (re) {
            console.error("💥 藥品更新 API 調用失敗:", re),
              a("藥品更新失敗：網路錯誤", "error");
          }
      },
      le = (D, A, H) => {
        H.preventDefault(),
          H.stopPropagation(),
          "touches" in H &&
            (G(Date.now()),
            C({ x: H.touches[0].clientX, y: H.touches[0].clientY })),
          _(!0),
          f({ startRow: D, startCol: A, endRow: D, endCol: A });
      },
      pe = (D, A) => {
        if (!b || !u) return;
        const H = Math.min(u.startRow, D),
          re = Math.max(u.startRow, D),
          ae = Math.min(u.startCol, A),
          xe = Math.max(u.startCol, A),
          be = de(H, re, ae, xe);
        be &&
          f((Ne) =>
            Ne
              ? {
                  startRow: Ne.startRow,
                  startCol: Ne.startCol,
                  endRow: D >= Ne.startRow ? be.maxRow : be.minRow,
                  endCol: A >= Ne.startCol ? be.maxCol : be.minCol,
                }
              : null
          );
      },
      T = () => {
        if (b && (_(!1), u && n != null && n.Boxes)) {
          const D = Math.min(u.startRow, u.endRow),
            A = Math.max(u.startRow, u.endRow),
            H = Math.min(u.startCol, u.endCol),
            re = Math.max(u.startCol, u.endCol),
            ae = de(D, A, H, re);
          ae &&
            f({
              startRow: ae.minRow,
              startCol: ae.minCol,
              endRow: ae.maxRow,
              endCol: ae.maxCol,
            });
        }
      },
      se = () => {
        var D;
        !je ||
          !((D = n == null ? void 0 : n.drawer) != null && D.Boxes) ||
          !u ||
          ee();
      },
      Se = () => {
        var D;
        !oe ||
          !((D = n == null ? void 0 : n.drawer) != null && D.Boxes) ||
          !u ||
          (console.log(u), U());
      },
      U = async () => {
        var D;
        if (!(!u || !((D = n == null ? void 0 : n.drawer) != null && D.Boxes)))
          try {
            const A = Math.min(u.startRow, u.endRow),
              H = Math.max(u.startRow, u.endRow),
              re = Math.min(u.startCol, u.endCol),
              ae = Math.max(u.startCol, u.endCol),
              be = n.drawer.Boxes.flat().filter(
                (we) =>
                  we.Row >= A &&
                  we.Row <= H &&
                  we.Column >= re &&
                  we.Column <= ae
              ),
              Ne = [],
              _e = [];
            be.forEach((we) => {
              Ne.push(we.Column.toString()), _e.push(we.Row.toString());
            });
            const ce = {
              ServerName: n.serverName,
              ServerType: n.serverType,
              ValueAry: [
                `SelectColumns=${Ne.join(",")}`,
                `SelectRows=${_e.join(",")}`,
              ],
              Data: { IP: n.ip, Boxes: n.Boxes },
            };
            console.log("🚀 發送 API 請求:", ce);
            const me = await ke.request("/api/device/separate_drawer_boxes", {
              method: "POST",
              body: JSON.stringify(ce),
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
                const we = (Ve) => {
                    Ve.forEach((Ce) => {
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
      ee = async () => {
        var D;
        if (!(!u || !((D = n == null ? void 0 : n.drawer) != null && D.Boxes)))
          try {
            const A = Math.min(u.startRow, u.endRow),
              H = Math.max(u.startRow, u.endRow),
              re = Math.min(u.startCol, u.endCol),
              ae = Math.max(u.startCol, u.endCol),
              be = n.drawer.Boxes.flat().filter(
                (we) =>
                  we.Row >= A &&
                  we.Row <= H &&
                  we.Column >= re &&
                  we.Column <= ae
              ),
              Ne = [],
              _e = [];
            be.forEach((we) => {
              Ne.push(we.Column.toString()), _e.push(we.Row.toString());
            });
            const ce = {
              ServerName: n.serverName,
              ServerType: n.serverType,
              ValueAry: [
                `SelectColumns=${Ne.join(",")}`,
                `SelectRows=${_e.join(",")}`,
              ],
              Data: { IP: n.ip, Boxes: n.Boxes },
            };
            console.log("🚀 發送 API 請求:", ce);
            const me = await ke.request("/api/device/combine_drawer_boxes", {
              method: "POST",
              body: JSON.stringify(ce),
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
                const we = (Ve) => {
                    Ve.forEach((Ce) => {
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
      ye = async () => {
        if (n)
          try {
            n.name = h;
            const D = {
              ServerName: n.serverName,
              ServerType: n.serverType,
              Data: [n.drawer],
            };
            console.log("🚀 發送確認更新 API 請求:", D);
            const A = await ke.request("/api/device/update_epd583_drawers", {
              method: "POST",
              body: JSON.stringify(D),
            });
            if ((console.log("📡 確認更新 API 回應:", A), A.Code === 200)) {
              if (
                (console.log("✅ 抽屜資料更新成功"),
                a("抽屜資料更新成功", "success"),
                o)
              ) {
                const H = (ae) => {
                    ae.forEach((xe) => {
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
                  re = JSON.parse(JSON.stringify(o));
                H(re), l(re);
              }
              v(!1), p(null), r(), t();
            } else
              console.error("❌ 抽屜資料更新失敗:", A),
                a(`抽屜資料更新失敗：${A.Result || "未知錯誤"}`, "error");
          } catch (D) {
            console.error("💥 抽屜資料更新 API 調用失敗:", D),
              a("抽屜資料更新失敗：網路錯誤", "error");
          }
      },
      z = () => {
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
                s.jsx($d, {
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
        const D = n.drawer.Boxes.flat(),
          A = (ce) => {
            if (ce.Slave) return { width: 1, height: 1 };
            const me = D.filter(
              (ze) =>
                ze.Slave &&
                ze.MasterBox_Row === ce.Row &&
                ze.MasterBox_Column === ce.Column
            );
            if (me.length === 0) return { width: 1, height: 1 };
            const we = [ce, ...me],
              De = Math.min(...we.map((ze) => ze.Row)),
              Ve = Math.max(...we.map((ze) => ze.Row)),
              Ce = Math.min(...we.map((ze) => ze.Column));
            return {
              width: Math.max(...we.map((ze) => ze.Column)) - Ce + 1,
              height: Ve - De + 1,
            };
          },
          H = Math.max(...D.map((ce) => ce.Row + 1 - 1)),
          re = Math.max(...D.map((ce) => ce.Column + 1 - 1)),
          ae = H + 1,
          xe = re + 1,
          be = Array(ae)
            .fill(null)
            .map(() => Array(xe).fill(!1)),
          Ne = {};
        return (
          D.forEach((ce) => {
            if (!ce.Slave) {
              const me = A(ce);
              (Ne[`${ce.Row},${ce.Column}`] = ce),
                (ce.calculatedWidth = me.width),
                (ce.calculatedHeight = me.height);
            }
          }),
          D.forEach((ce) => {
            if (
              !ce.Slave &&
              (ce.calculatedWidth > 1 || ce.calculatedHeight > 1)
            )
              for (let me = ce.Row; me < ce.Row + ce.calculatedHeight; me++)
                for (
                  let we = ce.Column;
                  we < ce.Column + ce.calculatedWidth;
                  we++
                )
                  (me !== ce.Row || we !== ce.Column) && (be[me][we] = !0);
          }),
          s.jsx("div", {
            className: "rounded-lg",
            children: s.jsx("table", {
              className: "w-full",
              children: s.jsx("tbody", {
                children: Array.from({ length: ae }, (ce, me) =>
                  s.jsx(
                    "tr",
                    {
                      children: Array.from({ length: xe }, (we, De) => {
                        if (be[me][De]) return null;
                        const Ve = `${me},${De}`,
                          Ce = Ne[Ve];
                        return Ce
                          ? s.jsx(
                              "td",
                              {
                                className: `border border-gray-400 pt-1 pl-1 align-top cursor-pointer select-none ${
                                  F(me, De)
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
                                onMouseEnter: () => pe(me, De),
                                onMouseUp: T,
                                onTouchStart: (qe) => le(me, De, qe),
                                onTouchMove: (qe) => {
                                  if ((qe.preventDefault(), !b)) return;
                                  const ze = qe.touches[0],
                                    vt = document.elementFromPoint(
                                      ze.clientX,
                                      ze.clientY
                                    ),
                                    it = vt == null ? void 0 : vt.closest("td");
                                  if (it) {
                                    const In = parseInt(
                                        it.getAttribute("data-row") || "0"
                                      ),
                                      Vt = parseInt(
                                        it.getAttribute("data-col") || "0"
                                      );
                                    pe(In, Vt);
                                  }
                                },
                                onTouchEnd: T,
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
                                  F(me, De)
                                    ? "border-1 border-blue-500 bg-blue-100"
                                    : "bg-gray-50 hover:bg-gray-100"
                                }`,
                                style: {
                                  width: `${100 / xe}%`,
                                  minWidth: "80px",
                                  minHeight: "80px",
                                },
                                onMouseDown: (qe) => le(me, De, qe),
                                onMouseEnter: () => pe(me, De),
                                onMouseUp: T,
                                onTouchStart: (qe) => le(me, De, qe),
                                onTouchMove: (qe) => {
                                  if ((qe.preventDefault(), !b)) return;
                                  const ze = qe.touches[0],
                                    vt = document.elementFromPoint(
                                      ze.clientX,
                                      ze.clientY
                                    ),
                                    it = vt == null ? void 0 : vt.closest("td");
                                  if (it) {
                                    const In = parseInt(
                                        it.getAttribute("data-row") || "0"
                                      ),
                                      Vt = parseInt(
                                        it.getAttribute("data-col") || "0"
                                      );
                                    pe(In, Vt);
                                  }
                                },
                                onTouchEnd: T,
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
              onClick: M,
            }),
            s.jsxs("div", {
              className:
                "relative flex flex-col bg-white rounded-xl shadow-2xl border border-gray-200",
              style: { width: "90vw", height: "90vh" },
              onClick: (D) => D.stopPropagation(),
              children: [
                s.jsxs("div", {
                  className:
                    "flex items-center justify-between px-4 py-2 border-b border-gray-200",
                  children: [
                    s.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        s.jsx(tn, { className: "w-6 h-6 text-gray-600" }),
                        s.jsx("h2", {
                          className: "text-xl font-semibold text-gray-900",
                          children: c("modal.gridDrawSettings"),
                        }),
                      ],
                    }),
                    s.jsx("button", {
                      onClick: M,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: s.jsx(Ye, { className: "w-6 h-6" }),
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
                              onChange: (D) => d(D.target.value),
                              disabled: !0,
                              placeholder:
                                (n == null ? void 0 : n.name) ||
                                c("placeholder.gridDrawName"),
                              className:
                                "px-2 py-1 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors text-base",
                            }),
                          ],
                        }),
                        s.jsx("div", { className: "space-y-1", children: z() }),
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
                                onClick: se,
                                disabled: !je,
                                className: `px-4 py-2 rounded transition-colors ${
                                  je
                                    ? "bg-blue-600 text-white hover:bg-blue-700"
                                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                                }`,
                                children: c("button.merge"),
                              }),
                              s.jsx("button", {
                                onClick: Se,
                                disabled: !oe,
                                className: `px-4 py-2 rounded transition-colors ${
                                  oe
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
                            const D = Q(),
                              A = D.find((H) => !H.Slave);
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
                                      u && D.length > 0
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
                                  onChange: (D) => j(D.target.value),
                                  placeholder: c("placeholder.drugSearch"),
                                  className:
                                    "border rounded px-3 py-1 flex-1 min-w-0 focus:border-blue-500 focus:outline-none transition-colors",
                                }),
                                s.jsxs("select", {
                                  value: L,
                                  onChange: (D) => P(D.target.value),
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
                                  onClick: ve,
                                  disabled: I,
                                  className:
                                    "bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 transition-colors whitespace-nowrap disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2",
                                  children: [
                                    I &&
                                      s.jsx(Rt, {
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
                              children: I
                                ? s.jsxs("div", {
                                    className:
                                      "text-gray-500 text-center flex items-center justify-center h-full",
                                    children: [
                                      s.jsx(Rt, {
                                        className: "w-5 h-5 animate-spin mr-2",
                                      }),
                                      c("status.searching"),
                                    ],
                                  })
                                : R.length > 0
                                ? s.jsx("div", {
                                    className: "space-y-1",
                                    children: R.map((D, A) =>
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
                                                  children: D.NAME,
                                                }),
                                                s.jsx("div", {
                                                  className:
                                                    "text-xs text-gray-500 truncate",
                                                  children: D.CHT_NAME,
                                                }),
                                                s.jsx("div", {
                                                  className:
                                                    "text-xs text-gray-400 font-mono",
                                                  children: D.CODE,
                                                }),
                                              ],
                                            }),
                                            s.jsx("button", {
                                              onClick: () => $(D),
                                              className:
                                                "ml-2 p-1 text-green-600 hover:text-green-700 hover:bg-green-50 rounded transition-colors flex-shrink-0",
                                              title: c("button.add"),
                                              children: s.jsx(Nt, {
                                                className: "w-4 h-4",
                                              }),
                                            }),
                                          ],
                                        },
                                        D.GUID || A
                                      )
                                    ),
                                  })
                                : s.jsx("div", {
                                    className:
                                      "text-gray-500 text-center flex items-center justify-center h-full",
                                    children: c(
                                      x || L !== "N"
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
                          onClick: M,
                          className:
                            "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                          children: c("button.cancel"),
                        }),
                        s.jsx("button", {
                          onClick: Z,
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
                  onMouseUp: T,
                  onMouseLeave: T,
                  onTouchEnd: T,
                  onTouchCancel: T,
                }),
              ],
            }),
          ],
        });
  },
  uh = () => {
    var G;
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
      } = Je(),
      { t: h } = pt(),
      [d, g] = m.useState(null),
      [p, w] = m.useState(0),
      [v, b] = m.useState(0),
      [_, u] = m.useState(!1);
    m.useEffect(() => {
      e && (g(null), w(0), b(0), u(!1));
    }, [e]),
      m.useEffect(() => {
        d && (w(d.row), b(d.col));
      }, [d]);
    const f = () => {
        const E = new Set();
        return (
          n != null &&
            n.contents &&
            n.contents.forEach((C) => {
              C.type === "parent_container" &&
                C.gird_position &&
                E.add(C.gird_position);
            }),
          E
        );
      },
      x = () => {
        const E = f(),
          C = [];
        if (E.size === 0) return C.push({ row: 0, col: 0 }), C;
        const Z = [];
        E.forEach((F) => {
          const [k, Q] = F.split(",").map(Number);
          Z.push({ row: k, col: Q });
        });
        const M = new Set();
        return (
          Z.forEach(({ row: F, col: k }) => {
            M.add(`${F},${k + 1}`),
              M.add(`${F + 1},${k}`),
              k > 0 && M.add(`${F},${k - 1}`),
              F > 0 && M.add(`${F - 1},${k}`);
          }),
          M.forEach((F) => {
            if (!E.has(F)) {
              const [k, Q] = F.split(",").map(Number);
              k >= 0 && Q >= 0 && C.push({ row: k, col: Q });
            }
          }),
          E.has("0,1") ||
            C.some((k) => k.row === 0 && k.col === 1) ||
            C.push({ row: 0, col: 1 }),
          E.has("1,0") ||
            C.some((k) => k.row === 1 && k.col === 0) ||
            C.push({ row: 1, col: 0 }),
          C.sort((F, k) => (F.row === k.row ? F.col - k.col : F.row - k.row))
        );
      },
      j = (E) => {
        g(E);
      },
      L = (E) => {
        w(E), g({ row: E, col: v });
      },
      P = (E) => {
        b(E), g({ row: p, col: E });
      },
      R = d && !f().has(`${d.row},${d.col}`) && d.row >= 0 && d.col >= 0,
      N = async () => {
        if (!(!d || !n || !R)) {
          u(!0);
          try {
            const E = `${d.row},${d.col}`,
              C = await ke.addMedMapSection(n.GUID, E);
            C.Code === 200
              ? (a("新增成功", "success"), t(), c(!1), await I())
              : a(`新增失敗：${C.Result || "未知錯誤"}`, "error");
          } catch (E) {
            console.error("Add parent container failed:", E),
              a("新增失敗：網路錯誤", "error");
          } finally {
            u(!1);
          }
        }
      },
      I = async () => {
        if (!r) {
          console.warn("⚠️ 沒有選中的部門類型，無法重新獲取資料");
          return;
        }
        console.log("🔄 重新獲取藥品地圖資料，部門類型:", r), l(!0);
        try {
          const E = await ke.getMedMapByDepartment(r);
          if (E.Code === 200 && E.Data) {
            console.log("📡 API 回傳成功，開始轉換資料");
            const C = It.convertMedMapApiToFakeData(E.Data);
            if (!It.validateConvertedData(C)) {
              console.error("❌ 轉換後的資料驗證失敗"),
                a("資料更新失敗：資料格式錯誤", "error");
              return;
            }
            o(C), console.log("✅ 藥品地圖資料已更新");
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
      S = () => {
        t();
      },
      O = () => {
        const E = f(),
          C = x(),
          Z = [...E]
            .map((ne) => {
              const [je, oe] = ne.split(",").map(Number);
              return { row: je, col: oe };
            })
            .concat(C);
        Z.length === 0 && Z.push({ row: 0, col: 0 });
        const M = Math.max(...Z.map((ne) => ne.row)),
          F = Math.max(...Z.map((ne) => ne.col)),
          k = Math.min(...Z.map((ne) => ne.row)),
          Q = Math.min(...Z.map((ne) => ne.col)),
          de = M - k + 1,
          X = F - Q + 1;
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
                style: { gridTemplateColumns: `repeat(${X}, 1fr)` },
                children: Array.from({ length: de * X }, (ne, je) => {
                  const oe = Math.floor(je / X) + k,
                    ve = (je % X) + Q,
                    $ = `${oe},${ve}`,
                    le = E.has($),
                    pe = C.some((se) => se.row === oe && se.col === ve),
                    T =
                      (d == null ? void 0 : d.row) === oe &&
                      (d == null ? void 0 : d.col) === ve;
                  return s.jsx(
                    "button",
                    {
                      onClick: () => pe && j({ row: oe, col: ve }),
                      disabled: le || !pe,
                      className: `
                    w-16 h-16 border-2 rounded-lg transition-all duration-200 flex items-center justify-center text-sm font-medium
                    ${
                      le
                        ? "bg-red-100 border-red-300 text-red-600 cursor-not-allowed"
                        : T
                        ? "bg-blue-500 border-blue-600 text-white shadow-lg"
                        : pe
                        ? "bg-green-100 border-green-300 text-green-700 hover:bg-green-200 hover:border-green-400 cursor-pointer"
                        : "bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed"
                    }
                  `,
                      title: le ? "已占用" : pe ? "可選擇" : "不可用",
                      children: le ? "占用" : `${oe},${ve}`,
                    },
                    $
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
              onClick: S,
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
                        s.jsx(Nt, { className: "w-6 h-6 text-green-600" }),
                        s.jsx("h2", {
                          className: "text-xl font-semibold text-gray-900",
                          children: "新增櫃體",
                        }),
                      ],
                    }),
                    s.jsx("button", {
                      onClick: S,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: s.jsx(Ye, { className: "w-6 h-6" }),
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
                                      L(parseInt(E.target.value) || 0),
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
                                      P(parseInt(E.target.value) || 0),
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
                                R
                                  ? "bg-green-50 text-green-700 border border-green-200"
                                  : "bg-red-50 text-red-700 border border-red-200"
                              }`,
                              children: R
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
                                  ((G = n == null ? void 0 : n.contents) == null
                                    ? void 0
                                    : G.filter(
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
                      onClick: S,
                      disabled: _,
                      className:
                        "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                      children: h("button.cancel"),
                    }),
                    s.jsxs("button", {
                      onClick: N,
                      disabled: !R || _,
                      className:
                        "px-6 py-2 text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center space-x-2",
                      children: [
                        _ && s.jsx(Rt, { className: "w-4 h-4 animate-spin" }),
                        s.jsx("span", { children: _ ? "新增中..." : "新增" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
  },
  vc = [
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
      icon: s.jsx(ua, { className: "w-5 h-5" }),
      isShelf: !1,
    },
    {
      value: "grid_draw",
      label: "格線抽屜",
      icon: s.jsx($d, { className: "w-5 h-5" }),
      isShelf: !1,
    },
  ],
  dh = () => {
    var de;
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
      } = Je(),
      { t: h } = pt(),
      [d, g] = m.useState("dispensing_shelves"),
      [p, w] = m.useState("1"),
      [v, b] = m.useState("1"),
      [_, u] = m.useState(""),
      [f, x] = m.useState(null),
      [j, L] = m.useState(0),
      [P, R] = m.useState(0),
      [N, I] = m.useState(!1);
    m.useEffect(() => {
      e &&
        (g("dispensing_shelves"),
        w("1"),
        b("1"),
        u(""),
        x(null),
        L(0),
        R(0),
        I(!1));
    }, [e]),
      m.useEffect(() => {
        f && (L(f.row), R(f.col));
      }, [f]);
    const S = () => {
        const X = new Set();
        return (
          n != null &&
            n.contents &&
            n.contents.forEach((ne) => {
              ne.gird_position && X.add(ne.gird_position);
            }),
          X
        );
      },
      O = () => {
        const X = S(),
          ne = [];
        if (X.size === 0) return ne.push({ row: 0, col: 0 }), ne;
        const je = [];
        X.forEach((ve) => {
          const [$, le] = ve.split(",").map(Number);
          je.push({ row: $, col: le });
        });
        const oe = new Set();
        return (
          je.forEach(({ row: ve, col: $ }) => {
            oe.add(`${ve},${$ + 1}`),
              oe.add(`${ve + 1},${$}`),
              $ > 0 && oe.add(`${ve},${$ - 1}`),
              ve > 0 && oe.add(`${ve - 1},${$}`);
          }),
          oe.forEach((ve) => {
            if (!X.has(ve)) {
              const [$, le] = ve.split(",").map(Number);
              $ >= 0 && le >= 0 && ne.push({ row: $, col: le });
            }
          }),
          X.has("0,1") ||
            ne.some(($) => $.row === 0 && $.col === 1) ||
            ne.push({ row: 0, col: 1 }),
          X.has("1,0") ||
            ne.some(($) => $.row === 1 && $.col === 0) ||
            ne.push({ row: 1, col: 0 }),
          ne.sort((ve, $) =>
            ve.row === $.row ? ve.col - $.col : ve.row - $.row
          )
        );
      },
      G = (X) => {
        x(X);
      },
      E = (X) => {
        L(X), x({ row: X, col: P });
      },
      C = (X) => {
        R(X), x({ row: j, col: X });
      },
      Z = f && !S().has(`${f.row},${f.col}`) && f.row >= 0 && f.col >= 0,
      M = async () => {
        if (!(!f || !n || !Z)) {
          I(!0);
          try {
            const X = `${f.row},${f.col}`,
              ne = vc.find((oe) => oe.value === d);
            let je;
            ne != null && ne.isShelf
              ? (je = await ke.addMedMapShelf({
                  Master_GUID: n.GUID,
                  position: X,
                  width: p,
                  height: v,
                  ip_light: _,
                  type: d,
                }))
              : (je = await ke.addMedMapDrawer({
                  Master_GUID: n.GUID,
                  position: X,
                  width: p,
                  height: v,
                  ip_drawer: _,
                  type: d,
                })),
              je.Code === 200
                ? (a("新增成功", "success"), t(), c(!1), await F())
                : a(`新增失敗：${je.Result || "未知錯誤"}`, "error");
          } catch (X) {
            console.error("Add container failed:", X),
              a("新增失敗：網路錯誤", "error");
          } finally {
            I(!1);
          }
        }
      },
      F = async () => {
        if (!r) {
          console.warn("⚠️ 沒有選中的部門類型，無法重新獲取資料");
          return;
        }
        console.log("🔄 重新獲取藥品地圖資料，部門類型:", r), l(!0);
        try {
          const X = await ke.getMedMapByDepartment(r);
          if (X.Code === 200 && X.Data) {
            console.log("📡 API 回傳成功，開始轉換資料");
            const ne = It.convertMedMapApiToFakeData(X.Data);
            if (!It.validateConvertedData(ne)) {
              console.error("❌ 轉換後的資料驗證失敗"),
                a("資料更新失敗：資料格式錯誤", "error");
              return;
            }
            o(ne), console.log("✅ 藥品地圖資料已更新");
          } else
            console.error("❌ API 回傳錯誤:", X),
              a("資料更新失敗：API 錯誤", "error");
        } catch (X) {
          console.error("💥 重新獲取藥品地圖資料失敗:", X),
            a("資料更新失敗：網路錯誤", "error");
        } finally {
          l(!1);
        }
      },
      k = () => {
        t();
      },
      Q = () => {
        const X = S(),
          ne = O(),
          je = [...X]
            .map((se) => {
              const [Se, U] = se.split(",").map(Number);
              return { row: Se, col: U };
            })
            .concat(ne);
        je.length === 0 && je.push({ row: 0, col: 0 });
        const oe = Math.max(...je.map((se) => se.row)),
          ve = Math.max(...je.map((se) => se.col)),
          $ = Math.min(...je.map((se) => se.row)),
          le = Math.min(...je.map((se) => se.col)),
          pe = oe - $ + 1,
          T = ve - le + 1;
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
                style: { gridTemplateColumns: `repeat(${T}, 1fr)` },
                children: Array.from({ length: pe * T }, (se, Se) => {
                  const U = Math.floor(Se / T) + $,
                    ee = (Se % T) + le,
                    ye = `${U},${ee}`,
                    z = X.has(ye),
                    D = ne.some((H) => H.row === U && H.col === ee),
                    A =
                      (f == null ? void 0 : f.row) === U &&
                      (f == null ? void 0 : f.col) === ee;
                  return s.jsx(
                    "button",
                    {
                      onClick: () => D && G({ row: U, col: ee }),
                      disabled: z || !D,
                      className: `
                    w-16 h-16 border-2 rounded-lg transition-all duration-200 flex items-center justify-center text-sm font-medium
                    ${
                      z
                        ? "bg-red-100 border-red-300 text-red-600 cursor-not-allowed"
                        : A
                        ? "bg-blue-500 border-blue-600 text-white shadow-lg"
                        : D
                        ? "bg-green-100 border-green-300 text-green-700 hover:bg-green-200 hover:border-green-400 cursor-pointer"
                        : "bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed"
                    }
                  `,
                      title: z ? "已占用" : D ? "可選擇" : "不可用",
                      children: z ? "占用" : `${U},${ee}`,
                    },
                    ye
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
              onClick: k,
            }),
            s.jsxs("div", {
              className:
                "relative flex flex-col bg-white rounded-xl shadow-2xl border border-gray-200",
              style: { width: "90vw", height: "90vh", maxWidth: "1000px" },
              onClick: (X) => X.stopPropagation(),
              children: [
                s.jsxs("div", {
                  className:
                    "flex items-center justify-between px-4 py-2 border-b border-gray-200",
                  children: [
                    s.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        s.jsx(Nt, { className: "w-6 h-6 text-green-600" }),
                        s.jsx("h2", {
                          className: "text-xl font-semibold text-gray-900",
                          children: "新增層架/抽屜",
                        }),
                      ],
                    }),
                    s.jsx("button", {
                      onClick: k,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: s.jsx(Ye, { className: "w-6 h-6" }),
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
                            children: vc.map((X) =>
                              s.jsxs(
                                "label",
                                {
                                  className: `flex items-center space-x-3 p-4 border-2 rounded-lg cursor-pointer transition-all ${
                                    d === X.value
                                      ? "border-blue-500 bg-blue-50"
                                      : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                                  }`,
                                  children: [
                                    s.jsx("input", {
                                      type: "radio",
                                      name: "containerType",
                                      value: X.value,
                                      checked: d === X.value,
                                      onChange: (ne) => g(ne.target.value),
                                      className:
                                        "w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 hidden",
                                    }),
                                    s.jsxs("div", {
                                      className: "flex items-center space-x-3",
                                      children: [
                                        X.icon,
                                        s.jsx("span", {
                                          className:
                                            "font-medium text-gray-900",
                                          children: X.label,
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                X.value
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
                                onChange: (X) => w(X.target.value),
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
                                onChange: (X) => b(X.target.value),
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
                            value: _,
                            onChange: (X) => u(X.target.value),
                            placeholder: "請輸入 IP 位址",
                            className:
                              "w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors",
                          }),
                        ],
                      }),
                      Q(),
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
                                    value: j,
                                    onChange: (X) =>
                                      E(parseInt(X.target.value) || 0),
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
                                    value: P,
                                    onChange: (X) =>
                                      C(parseInt(X.target.value) || 0),
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
                                Z
                                  ? "bg-green-50 text-green-700 border border-green-200"
                                  : "bg-red-50 text-red-700 border border-red-200"
                              }`,
                              children: Z
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
                                  ((de = n == null ? void 0 : n.contents) ==
                                  null
                                    ? void 0
                                    : de.length) || 0,
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
                      onClick: k,
                      disabled: N,
                      className:
                        "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                      children: h("button.cancel"),
                    }),
                    s.jsxs("button", {
                      onClick: M,
                      disabled: !Z || N,
                      className:
                        "px-6 py-2 text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center space-x-2",
                      children: [
                        N && s.jsx(Rt, { className: "w-4 h-4 animate-spin" }),
                        s.jsx("span", { children: N ? "新增中..." : "新增" }),
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
    var G;
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
      } = Je(),
      { t: h } = pt(),
      [d, g] = m.useState(null),
      [p, w] = m.useState(0),
      [v, b] = m.useState(0),
      [_, u] = m.useState(!1);
    m.useEffect(() => {
      e && (g(null), w(0), b(0), u(!1));
    }, [e]),
      m.useEffect(() => {
        d && (w(d.row), b(d.col));
      }, [d]);
    const f = () => {
        const E = new Set();
        return (
          n != null &&
            n.contents &&
            n.contents.forEach((C) => {
              C.type === "sub_container" &&
                C.gird_position &&
                E.add(C.gird_position);
            }),
          E
        );
      },
      x = () => {
        const E = f(),
          C = [];
        if (E.size === 0) return C.push({ row: 0, col: 0 }), C;
        const Z = [];
        E.forEach((F) => {
          const [k, Q] = F.split(",").map(Number);
          Z.push({ row: k, col: Q });
        });
        const M = new Set();
        return (
          Z.forEach(({ row: F, col: k }) => {
            M.add(`${F},${k + 1}`),
              M.add(`${F + 1},${k}`),
              k > 0 && M.add(`${F},${k - 1}`),
              F > 0 && M.add(`${F - 1},${k}`);
          }),
          M.forEach((F) => {
            if (!E.has(F)) {
              const [k, Q] = F.split(",").map(Number);
              k >= 0 && Q >= 0 && C.push({ row: k, col: Q });
            }
          }),
          E.has("0,1") ||
            C.some((k) => k.row === 0 && k.col === 1) ||
            C.push({ row: 0, col: 1 }),
          E.has("1,0") ||
            C.some((k) => k.row === 1 && k.col === 0) ||
            C.push({ row: 1, col: 0 }),
          C.sort((F, k) => (F.row === k.row ? F.col - k.col : F.row - k.row))
        );
      },
      j = (E) => {
        g(E);
      },
      L = (E) => {
        w(E), g({ row: E, col: v });
      },
      P = (E) => {
        b(E), g({ row: p, col: E });
      },
      R = d && !f().has(`${d.row},${d.col}`) && d.row >= 0 && d.col >= 0,
      N = async () => {
        if (!(!d || !n || !R)) {
          u(!0);
          try {
            const E = `${d.row},${d.col}`,
              C = await ke.addSubSection(n.GUID, E);
            C.Code === 200
              ? (a("新增成功", "success"), t(), c(!1), await I())
              : a(`新增失敗：${C.Result || "未知錯誤"}`, "error");
          } catch (E) {
            console.error("Add sub container failed:", E),
              a("新增失敗：網路錯誤", "error");
          } finally {
            u(!1);
          }
        }
      },
      I = async () => {
        if (!r) {
          console.warn("⚠️ 沒有選中的部門類型，無法重新獲取資料");
          return;
        }
        console.log("🔄 重新獲取藥品地圖資料，部門類型:", r), l(!0);
        try {
          const E = await ke.getMedMapByDepartment(r);
          if (E.Code === 200 && E.Data) {
            console.log("📡 API 回傳成功，開始轉換資料");
            const C = It.convertMedMapApiToFakeData(E.Data);
            if (!It.validateConvertedData(C)) {
              console.error("❌ 轉換後的資料驗證失敗"),
                a("資料更新失敗：資料格式錯誤", "error");
              return;
            }
            o(C), console.log("✅ 藥品地圖資料已更新");
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
      S = () => {
        t();
      },
      O = () => {
        const E = f(),
          C = x(),
          Z = [...E]
            .map((ne) => {
              const [je, oe] = ne.split(",").map(Number);
              return { row: je, col: oe };
            })
            .concat(C);
        Z.length === 0 && Z.push({ row: 0, col: 0 });
        const M = Math.max(...Z.map((ne) => ne.row)),
          F = Math.max(...Z.map((ne) => ne.col)),
          k = Math.min(...Z.map((ne) => ne.row)),
          Q = Math.min(...Z.map((ne) => ne.col)),
          de = M - k + 1,
          X = F - Q + 1;
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
                style: { gridTemplateColumns: `repeat(${X}, 1fr)` },
                children: Array.from({ length: de * X }, (ne, je) => {
                  const oe = Math.floor(je / X) + k,
                    ve = (je % X) + Q,
                    $ = `${oe},${ve}`,
                    le = E.has($),
                    pe = C.some((se) => se.row === oe && se.col === ve),
                    T =
                      (d == null ? void 0 : d.row) === oe &&
                      (d == null ? void 0 : d.col) === ve;
                  return s.jsx(
                    "button",
                    {
                      onClick: () => pe && j({ row: oe, col: ve }),
                      disabled: le || !pe,
                      className: `
                    w-16 h-16 border-2 rounded-lg transition-all duration-200 flex items-center justify-center text-sm font-medium
                    ${
                      le
                        ? "bg-red-100 border-red-300 text-red-600 cursor-not-allowed"
                        : T
                        ? "bg-blue-500 border-blue-600 text-white shadow-lg"
                        : pe
                        ? "bg-green-100 border-green-300 text-green-700 hover:bg-green-200 hover:border-green-400 cursor-pointer"
                        : "bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed"
                    }
                  `,
                      title: le ? "已占用" : pe ? "可選擇" : "不可用",
                      children: le ? "占用" : `${oe},${ve}`,
                    },
                    $
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
              onClick: S,
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
                        s.jsx(Nt, { className: "w-6 h-6 text-green-600" }),
                        s.jsx("h2", {
                          className: "text-xl font-semibold text-gray-900",
                          children: "新增虛擬容器",
                        }),
                      ],
                    }),
                    s.jsx("button", {
                      onClick: S,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: s.jsx(Ye, { className: "w-6 h-6" }),
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
                                      L(parseInt(E.target.value) || 0),
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
                                      P(parseInt(E.target.value) || 0),
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
                                R
                                  ? "bg-green-50 text-green-700 border border-green-200"
                                  : "bg-red-50 text-red-700 border border-red-200"
                              }`,
                              children: R
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
                                  ((G = n == null ? void 0 : n.contents) == null
                                    ? void 0
                                    : G.filter(
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
                      onClick: S,
                      disabled: _,
                      className:
                        "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                      children: h("button.cancel"),
                    }),
                    s.jsxs("button", {
                      onClick: N,
                      disabled: !R || _,
                      className:
                        "px-6 py-2 text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center space-x-2",
                      children: [
                        _ && s.jsx(Rt, { className: "w-4 h-4 animate-spin" }),
                        s.jsx("span", { children: _ ? "新增中..." : "新增" }),
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
      } = Je(),
      [d, g] = m.useState(""),
      [p, w] = m.useState(""),
      [v, b] = m.useState(""),
      [_, u] = m.useState(""),
      [f, x] = m.useState(""),
      [j, L] = m.useState(""),
      [P, R] = m.useState(""),
      [N, I] = m.useState(""),
      [S, O] = m.useState(""),
      [G, E] = m.useState(""),
      [C, Z] = m.useState(null),
      [M, F] = m.useState([]),
      [k, Q] = m.useState(""),
      [de, X] = m.useState(!1),
      ne = m.useRef(null);
    m.useEffect(() => {
      if (e && c === "edit" && i) {
        g(i.code || ""),
          w(i.name || ""),
          b(""),
          u(i.material_no || ""),
          x(i.lot || "");
        const T = i.expiry_date || "";
        if (T) {
          const se = T.split(" ")[0];
          L(se);
        } else L("");
        R(String(i.qty || "")),
          I(i.location || ""),
          O(i.led_index || ""),
          E(i.ip || "");
      } else
        e &&
          c === "add" &&
          (g(""),
          w(""),
          b(""),
          u(""),
          x(""),
          L(""),
          R(""),
          I(""),
          O(""),
          E(""));
    }, [e, c, i]),
      m.useEffect(() => {
        const T = (se) => {
          ne.current && !ne.current.contains(se.target) && Z(null);
        };
        return (
          document.addEventListener("mousedown", T),
          () => {
            document.removeEventListener("mousedown", T);
          }
        );
      }, []);
    const je = (T, se) => {
        if (!se.trim()) {
          F([]);
          return;
        }
        const Se = se.toLowerCase(),
          U = o.filter((ee) => {
            var ye, z, D, A;
            switch (T) {
              case "code":
                return (ye = ee.CODE) == null
                  ? void 0
                  : ye.toLowerCase().includes(Se);
              case "name":
                return (z = ee.NAME) == null
                  ? void 0
                  : z.toLowerCase().includes(Se);
              case "chineseName":
                return (D = ee.CHT_NAME) == null
                  ? void 0
                  : D.toLowerCase().includes(Se);
              case "skdiacode":
                return (A = ee.SKDIACODE) == null
                  ? void 0
                  : A.toLowerCase().includes(Se);
              default:
                return !1;
            }
          });
        F(U.slice(0, 50));
      },
      oe = (T, se) => {
        switch ((Z(T), T)) {
          case "code":
            g(se);
            break;
          case "name":
            w(se);
            break;
          case "chineseName":
            b(se);
            break;
          case "skdiacode":
            u(se);
            break;
        }
        je(T, se);
      },
      ve = (T, se) => {
        switch (se) {
          case "code":
            g(T.CODE || ""),
              w(T.NAME || ""),
              b(T.CHT_NAME || ""),
              u(T.SKDIACODE || "");
            break;
          case "name":
            g(T.CODE || ""),
              w(T.NAME || ""),
              b(T.CHT_NAME || ""),
              u(T.SKDIACODE || "");
            break;
          case "chineseName":
            g(T.CODE || ""),
              w(T.NAME || ""),
              b(T.CHT_NAME || ""),
              u(T.SKDIACODE || "");
            break;
          case "skdiacode":
            g(T.CODE || ""),
              w(T.NAME || ""),
              b(T.CHT_NAME || ""),
              u(T.SKDIACODE || "");
            break;
        }
        Q(T.GUID), Z(null), F([]);
      },
      $ = async () => {
        var se;
        if (!d || !p) {
          r("請選擇藥品", "error");
          return;
        }
        if (!n || !n.GUID) {
          r("層架資訊錯誤", "error");
          return;
        }
        let T = "";
        j && (T = `${j}T00:00:00`);
        try {
          if (c === "edit" && i) {
            const Se = {
                GUID: i.GUID,
                code: d,
                device_type: "EPD290",
                expiry_date: T || "",
                ip: G || "",
                led_index: S || "",
                location: N || "",
                lot: f || "",
                material_no: _ || "",
                name: p,
                qty: P,
                shelf_guid: n.GUID,
              },
              U = await ke.updateStock([Se]);
            U.Code === 200
              ? (h(n.GUID, i.GUID, Se), r("更新貨物成功", "success"), pe())
              : r(U.Result || "更新貨物失敗", "error");
          } else {
            const Se = {
                code: d,
                device_type: "EPD290",
                expiry_date: T || "",
                ip: G || "",
                led_index: S || "",
                location: N || "",
                lot: f || "",
                material_no: _ || "",
                name: p,
                qty: P,
                shelf_guid: n.GUID,
              },
              U = await ke.addStock([Se]);
            U.Code === 200
              ? (a(n.GUID, {
                  GUID:
                    ((se = U.Data) == null ? void 0 : se.GUID) ||
                    `stock_${Date.now()}`,
                  ...Se,
                }),
                r("新增貨物成功", "success"),
                pe())
              : r(U.Result || "新增貨物失敗", "error");
          }
        } catch (Se) {
          console.error("貨物操作錯誤:", Se),
            r(
              c === "edit"
                ? "更新貨物失敗，請稍後再試"
                : "新增貨物失敗，請稍後再試",
              "error"
            );
        }
      },
      le = (T, se) => {
        console.log("📸 掃描成功，填入藥品資料:", se),
          g(se[0].CODE || se[0].code || ""),
          w(se[0].NAME || se[0].name || ""),
          b(se[0].CHT_NAME || se[0].cht_name || ""),
          u(se[0].SKDIACODE || se[0].skdiacode || se[0].material_no || ""),
          Q(se[0].GUID || ""),
          X(!1),
          r("已自動填入藥品資料", "success");
      },
      pe = () => {
        g(""),
          w(""),
          b(""),
          u(""),
          x(""),
          L(""),
          R(""),
          I(""),
          O(""),
          E(""),
          Q(""),
          F([]),
          Z(null),
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
                      onClick: pe,
                      className:
                        "p-2 hover:bg-gray-100 rounded-full transition-colors",
                      children: s.jsx(Ye, { className: "w-5 h-5" }),
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
                                    onClick: () => X(!0),
                                    className:
                                      "hover:bg-gray-100 rounded-lg transition-colors p-2",
                                    title: "掃描條碼",
                                    children: s.jsx(kr, {
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
                                    ref: C === "code" ? ne : null,
                                    children: [
                                      s.jsx("label", {
                                        className:
                                          "block text-sm font-medium text-gray-700 mb-1",
                                        children: "藥碼",
                                      }),
                                      s.jsx("input", {
                                        type: "text",
                                        value: d,
                                        onChange: (T) =>
                                          oe("code", T.target.value),
                                        onFocus: () => Z("code"),
                                        className:
                                          "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        placeholder: "輸入藥品代碼",
                                      }),
                                      C === "code" &&
                                        M.length > 0 &&
                                        s.jsx("div", {
                                          className:
                                            "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto",
                                          children: M.map((T) =>
                                            s.jsxs(
                                              "div",
                                              {
                                                onClick: () => ve(T, "code"),
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
                                                        children: T.CODE,
                                                      }),
                                                      s.jsx("span", {
                                                        className:
                                                          "text-gray-600",
                                                        children: "|",
                                                      }),
                                                      s.jsx("span", {
                                                        className:
                                                          "text-gray-700",
                                                        children: T.NAME,
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
                                                        children: T.CHT_NAME,
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
                                                          T.SKDIACODE,
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              },
                                              T.GUID
                                            )
                                          ),
                                        }),
                                    ],
                                  }),
                                  s.jsxs("div", {
                                    className: "relative",
                                    ref: C === "name" ? ne : null,
                                    children: [
                                      s.jsx("label", {
                                        className:
                                          "block text-sm font-medium text-gray-700 mb-1",
                                        children: "藥名",
                                      }),
                                      s.jsx("input", {
                                        type: "text",
                                        value: p,
                                        onChange: (T) =>
                                          oe("name", T.target.value),
                                        onFocus: () => Z("name"),
                                        className:
                                          "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        placeholder: "輸入藥品名稱",
                                      }),
                                      C === "name" &&
                                        M.length > 0 &&
                                        s.jsx("div", {
                                          className:
                                            "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto",
                                          children: M.map((T) =>
                                            s.jsxs(
                                              "div",
                                              {
                                                onClick: () => ve(T, "name"),
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
                                                        children: T.CODE,
                                                      }),
                                                      s.jsx("span", {
                                                        className:
                                                          "text-gray-600",
                                                        children: "|",
                                                      }),
                                                      s.jsx("span", {
                                                        className:
                                                          "text-gray-700",
                                                        children: T.NAME,
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
                                                        children: T.CHT_NAME,
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
                                                          T.SKDIACODE,
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              },
                                              T.GUID
                                            )
                                          ),
                                        }),
                                    ],
                                  }),
                                  s.jsxs("div", {
                                    className: "relative",
                                    ref: C === "chineseName" ? ne : null,
                                    children: [
                                      s.jsx("label", {
                                        className:
                                          "block text-sm font-medium text-gray-700 mb-1",
                                        children: "中文名",
                                      }),
                                      s.jsx("input", {
                                        type: "text",
                                        value: v,
                                        onChange: (T) =>
                                          oe("chineseName", T.target.value),
                                        onFocus: () => Z("chineseName"),
                                        className:
                                          "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        placeholder: "輸入中文名稱",
                                      }),
                                      C === "chineseName" &&
                                        M.length > 0 &&
                                        s.jsx("div", {
                                          className:
                                            "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto",
                                          children: M.map((T) =>
                                            s.jsxs(
                                              "div",
                                              {
                                                onClick: () =>
                                                  ve(T, "chineseName"),
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
                                                        children: T.CODE,
                                                      }),
                                                      s.jsx("span", {
                                                        className:
                                                          "text-gray-600",
                                                        children: "|",
                                                      }),
                                                      s.jsx("span", {
                                                        className:
                                                          "text-gray-700",
                                                        children: T.NAME,
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
                                                        children: T.CHT_NAME,
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
                                                          T.SKDIACODE,
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              },
                                              T.GUID
                                            )
                                          ),
                                        }),
                                    ],
                                  }),
                                  s.jsxs("div", {
                                    className: "relative",
                                    ref: C === "skdiacode" ? ne : null,
                                    children: [
                                      s.jsx("label", {
                                        className:
                                          "block text-sm font-medium text-gray-700 mb-1",
                                        children: "料號",
                                      }),
                                      s.jsx("input", {
                                        type: "text",
                                        value: _,
                                        onChange: (T) =>
                                          oe("skdiacode", T.target.value),
                                        onFocus: () => Z("skdiacode"),
                                        className:
                                          "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        placeholder: "輸入料號",
                                      }),
                                      C === "skdiacode" &&
                                        M.length > 0 &&
                                        s.jsx("div", {
                                          className:
                                            "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto",
                                          children: M.map((T) =>
                                            s.jsxs(
                                              "div",
                                              {
                                                onClick: () =>
                                                  ve(T, "skdiacode"),
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
                                                        children: T.CODE,
                                                      }),
                                                      s.jsx("span", {
                                                        className:
                                                          "text-gray-600",
                                                        children: "|",
                                                      }),
                                                      s.jsx("span", {
                                                        className:
                                                          "text-gray-700",
                                                        children: T.NAME,
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
                                                        children: T.CHT_NAME,
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
                                                          T.SKDIACODE,
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              },
                                              T.GUID
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
                                        onChange: (T) => x(T.target.value),
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
                                        value: j,
                                        onChange: (T) => L(T.target.value),
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
                                        value: P,
                                        onChange: (T) => R(T.target.value),
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
                                        value: N,
                                        onChange: (T) => I(T.target.value),
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
                                        value: S,
                                        onChange: (T) => O(T.target.value),
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
                                        value: G,
                                        onChange: (T) => E(T.target.value),
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
                      onClick: pe,
                      className:
                        "px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors",
                      children: "取消",
                    }),
                    s.jsx("button", {
                      onClick: $,
                      disabled: l || o.length === 0,
                      className:
                        "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:bg-gray-400",
                      children: c === "edit" ? "修改" : "新增",
                    }),
                  ],
                }),
              ],
            }),
            s.jsx(Bo, {
              isOpen: de,
              onClose: () => X(!1),
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
      } = Je(),
      [c, h] = m.useState(null),
      [d, g] = m.useState(""),
      [p, w] = m.useState(!1),
      v = () => (r ? r.map((R) => R.name) : []),
      b = () => (!n || !o ? [] : o.filter((R) => R["department_type "] === n)),
      _ = () => {
        const R = v();
        return b().filter((I) => !R.includes(I.name));
      },
      u = () => (r ? r.map((R) => R.gird_position) : []),
      f = () => {
        const R = u(),
          N = [];
        for (let I = 0; I < 10; I++)
          for (let S = 0; S < 10; S++) {
            const O = `${I},${S}`;
            R.includes(O) || N.push(O);
          }
        return N.slice(0, 20);
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
        w(!0);
        try {
          const R = await ke.addMedMap(c.name, c.type, d);
          R.Code === 200
            ? (l("新增部門成功", "success"), await i(), j())
            : l(R.Result || "新增部門失敗", "error");
        } catch (R) {
          console.error("新增部門錯誤:", R),
            l("新增部門失敗，請稍後再試", "error");
        } finally {
          w(!1);
        }
      },
      j = () => {
        h(null), g(""), t();
      };
    if (!e) return null;
    const L = _(),
      P = f();
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
                onClick: j,
                className:
                  "p-2 hover:bg-gray-100 rounded-full transition-colors",
                children: s.jsx(Ye, { className: "w-5 h-5" }),
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
                  L.length === 0
                    ? s.jsx("div", {
                        className: "text-center py-8",
                        children: s.jsx("p", {
                          className: "text-gray-600",
                          children: "所有部門都已新增",
                        }),
                      })
                    : s.jsx("div", {
                        className: "space-y-2",
                        children: L.map((R) =>
                          s.jsxs(
                            "label",
                            {
                              className: `flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                                (c == null ? void 0 : c.name) === R.name
                                  ? "border-blue-500 bg-blue-50"
                                  : "border-gray-200 hover:border-blue-300 hover:bg-gray-50"
                              }`,
                              children: [
                                s.jsx("input", {
                                  type: "radio",
                                  name: "department",
                                  value: R.name,
                                  checked:
                                    (c == null ? void 0 : c.name) === R.name,
                                  onChange: () => h(R),
                                  className:
                                    "w-4 h-4 text-blue-600 focus:ring-blue-500",
                                }),
                                s.jsxs("div", {
                                  className: "ml-3",
                                  children: [
                                    s.jsx("div", {
                                      className:
                                        "text-sm font-medium text-gray-900",
                                      children: R.name,
                                    }),
                                    s.jsx("div", {
                                      className: "text-xs text-gray-500",
                                      children: R.type,
                                    }),
                                  ],
                                }),
                              ],
                            },
                            R.name
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
                    P.length === 0
                      ? s.jsx("div", {
                          className: "text-center py-8",
                          children: s.jsx("p", {
                            className: "text-gray-600",
                            children: "沒有可用的位置",
                          }),
                        })
                      : s.jsx("div", {
                          className: "grid grid-cols-5 gap-2",
                          children: P.map((R) => {
                            const [N, I] = R.split(",");
                            return s.jsxs(
                              "button",
                              {
                                onClick: () => g(R),
                                className: `p-3 border-2 rounded-lg text-sm font-medium transition-all ${
                                  d === R
                                    ? "border-blue-500 bg-blue-500 text-white"
                                    : "border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-700"
                                }`,
                                children: ["(", N, ",", I, ")"],
                              },
                              R
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
                onClick: j,
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
      } = Je(),
      [a, i] = m.useState(""),
      [c, h] = m.useState(""),
      [d, g] = m.useState(""),
      [p, w] = m.useState(""),
      [v, b] = m.useState(""),
      [_, u] = m.useState(null),
      [f, x] = m.useState([]),
      [j, L] = m.useState(""),
      [P, R] = m.useState(null),
      [N, I] = m.useState(!1),
      S = m.useRef(null);
    m.useEffect(() => {
      e && (i(n), h(""), g(""), w(""), b(""), L(""), R(null), u(null));
    }, [e, n]),
      m.useEffect(() => {
        const M = (F) => {
          S.current && !S.current.contains(F.target) && u(null);
        };
        return (
          document.addEventListener("mousedown", M),
          () => {
            document.removeEventListener("mousedown", M);
          }
        );
      }, []);
    const O = (M, F) => {
        if (!F.trim() || l) {
          x([]);
          return;
        }
        const k = F.toLowerCase(),
          Q = o.filter((de) => {
            var X, ne, je, oe;
            switch (M) {
              case "code":
                return (X = de.CODE) == null
                  ? void 0
                  : X.toLowerCase().includes(k);
              case "name":
                return (ne = de.NAME) == null
                  ? void 0
                  : ne.toLowerCase().includes(k);
              case "chineseName":
                return (je = de.CHT_NAME) == null
                  ? void 0
                  : je.toLowerCase().includes(k);
              case "skdiacode":
                return (oe = de.SKDIACODE) == null
                  ? void 0
                  : oe.toLowerCase().includes(k);
              default:
                return !1;
            }
          });
        x(Q.slice(0, 10));
      },
      G = (M, F) => {
        switch ((u(M), M)) {
          case "code":
            h(F);
            break;
          case "name":
            g(F);
            break;
          case "chineseName":
            w(F);
            break;
          case "skdiacode":
            b(F);
            break;
        }
        O(M, F);
      },
      E = (M) => {
        L(M.GUID),
          R(M),
          h(M.CODE || ""),
          g(M.NAME || ""),
          w(M.CHT_NAME || ""),
          b(M.SKDIACODE || ""),
          u(null),
          x([]);
      },
      C = () => {
        i(""), h(""), g(""), w(""), b(""), L(""), R(null), u(null), x([]), t();
      },
      Z = async () => {
        if (!c.trim()) {
          r("藥碼為必填欄位", "error");
          return;
        }
        if (!a.trim()) {
          r("條碼不能為空", "error");
          return;
        }
        I(!0);
        try {
          let M = [];
          if (P && P.BARCODE2)
            try {
              const k = JSON.parse(P.BARCODE2);
              Array.isArray(k)
                ? (M = [...k])
                : typeof k == "string" && (M = [k]);
            } catch {
              console.warn("解析 BARCODE2 失敗，使用原始值:", P.BARCODE2),
                P.BARCODE2 && (M = [P.BARCODE2]);
            }
          M.includes(a.trim()) || M.push(a.trim()),
            console.log("📋 處理後的 BARCODE2 陣列:", M);
          const F = await ke.addMedClouds(
            a.trim(),
            c.trim(),
            JSON.stringify(M),
            P.BARCODE
          );
          F.Code === 200
            ? (r("條碼建立成功", "success"), C())
            : r(F.Result || "建立條碼失敗", "error");
        } catch (M) {
          console.error("建立條碼失敗:", M),
            r("建立條碼失敗，請稍後再試", "error");
        } finally {
          I(!1);
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
                        children: s.jsx(Nt, {
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
                    onClick: C,
                    className:
                      "p-2 hover:bg-gray-100 rounded-lg transition-colors",
                    disabled: N,
                    children: s.jsx(Ye, { className: "w-6 h-6 text-gray-600" }),
                  }),
                ],
              }),
              s.jsx("div", {
                className: "flex-1 overflow-y-auto p-6",
                children: s.jsxs("div", {
                  className: "space-y-4",
                  ref: S,
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
                          onChange: (M) => G("code", M.target.value),
                          onFocus: () => u("code"),
                          className:
                            "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent",
                          placeholder: "輸入藥碼搜尋...",
                          disabled: N,
                        }),
                        _ === "code" &&
                          f.length > 0 &&
                          s.jsx("div", {
                            className:
                              "absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                            children: f.map((M) =>
                              s.jsxs(
                                "div",
                                {
                                  onClick: () => E(M),
                                  className:
                                    "px-4 py-2 hover:bg-green-50 cursor-pointer border-b border-gray-100 last:border-b-0",
                                  children: [
                                    s.jsx("div", {
                                      className: "font-medium text-gray-800",
                                      children: M.CODE,
                                    }),
                                    s.jsx("div", {
                                      className: "text-sm text-gray-600",
                                      children: M.NAME,
                                    }),
                                  ],
                                },
                                M.GUID
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
                          onChange: (M) => G("name", M.target.value),
                          onFocus: () => u("name"),
                          className:
                            "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent",
                          placeholder: "輸入藥名搜尋...",
                          disabled: N,
                        }),
                        _ === "name" &&
                          f.length > 0 &&
                          s.jsx("div", {
                            className:
                              "absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                            children: f.map((M) =>
                              s.jsxs(
                                "div",
                                {
                                  onClick: () => E(M),
                                  className:
                                    "px-4 py-2 hover:bg-green-50 cursor-pointer border-b border-gray-100 last:border-b-0",
                                  children: [
                                    s.jsx("div", {
                                      className: "font-medium text-gray-800",
                                      children: M.NAME,
                                    }),
                                    s.jsx("div", {
                                      className: "text-sm text-gray-600",
                                      children: M.CODE,
                                    }),
                                  ],
                                },
                                M.GUID
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
                          onChange: (M) => G("chineseName", M.target.value),
                          onFocus: () => u("chineseName"),
                          className:
                            "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent",
                          placeholder: "輸入中文名搜尋...",
                          disabled: N,
                        }),
                        _ === "chineseName" &&
                          f.length > 0 &&
                          s.jsx("div", {
                            className:
                              "absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                            children: f.map((M) =>
                              s.jsxs(
                                "div",
                                {
                                  onClick: () => E(M),
                                  className:
                                    "px-4 py-2 hover:bg-green-50 cursor-pointer border-b border-gray-100 last:border-b-0",
                                  children: [
                                    s.jsx("div", {
                                      className: "font-medium text-gray-800",
                                      children: M.CHT_NAME,
                                    }),
                                    s.jsx("div", {
                                      className: "text-sm text-gray-600",
                                      children: M.CODE,
                                    }),
                                  ],
                                },
                                M.GUID
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
                          onChange: (M) => G("skdiacode", M.target.value),
                          onFocus: () => u("skdiacode"),
                          className:
                            "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent",
                          placeholder: "輸入料號搜尋...",
                          disabled: N,
                        }),
                        _ === "skdiacode" &&
                          f.length > 0 &&
                          s.jsx("div", {
                            className:
                              "absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                            children: f.map((M) =>
                              s.jsxs(
                                "div",
                                {
                                  onClick: () => E(M),
                                  className:
                                    "px-4 py-2 hover:bg-green-50 cursor-pointer border-b border-gray-100 last:border-b-0",
                                  children: [
                                    s.jsx("div", {
                                      className: "font-medium text-gray-800",
                                      children: M.SKDIACODE,
                                    }),
                                    s.jsx("div", {
                                      className: "text-sm text-gray-600",
                                      children: M.NAME,
                                    }),
                                  ],
                                },
                                M.GUID
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
                      onClick: C,
                      disabled: N,
                      className:
                        "px-6 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                      children: "取消",
                    }),
                    s.jsx("button", {
                      onClick: Z,
                      disabled: N || !c.trim(),
                      className:
                        "px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                      children: N ? "建立中..." : "確認建立",
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
        const g = d.map((b) => ({
            ...b,
            gridPos: o(b.gird_position || "0,0"),
          })),
          p = Math.max(...g.map((b) => b.gridPos.row), 0),
          w = Math.max(...g.map((b) => b.gridPos.col), 0);
        return {
          sortedContents: g.sort((b, _) =>
            b.gridPos.row !== _.gridPos.row
              ? b.gridPos.row - _.gridPos.row
              : b.gridPos.col - _.gridPos.col
          ),
          maxRow: p,
          maxCol: w,
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
        const w = {};
        return (
          d.forEach((v) => {
            const b = o(v.gird_position || "0,0");
            w[`${b.row},${b.col}`] = v;
          }),
          s.jsx("table", {
            className: "w-full h-full",
            style: { borderCollapse: "separate", borderSpacing: "0px" },
            children: s.jsx("tbody", {
              children: Array.from({ length: g + 1 }, (v, b) =>
                s.jsx(
                  "tr",
                  {
                    className: "h-full",
                    children: Array.from({ length: p + 1 }, (_, u) => {
                      const f = `${b},${u}`,
                        x = w[f];
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
                  b
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
              const { sortedContents: g, maxRow: p, maxCol: w } = l(d.contents);
              return c(g, p, w);
            } else return s.jsx("div", { className: "" });
          case "sub_container":
            if (d.contents && d.contents.length > 0) {
              const { sortedContents: g, maxRow: p, maxCol: w } = l(d.contents);
              return c(g, p, w);
            } else return s.jsx("div", { className: "" });
          case "dispensing_shelves":
            if (d.contents && d.contents.length > 0) {
              const { sortedContents: g, maxRow: p, maxCol: w } = l(d.contents);
              return c(g, p, w);
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
                w = p > 0 ? 100 / p : 100;
              return s.jsx("div", {
                className: "flex h-full",
                children: g.map((v, b) => {
                  const _ = t && (v.code == t || v.material_no == t),
                    u = n.includes(v.code) || n.includes(v.material_no);
                  return s.jsxs(
                    "div",
                    {
                      className: `border-2 rounded-lg border-gray-300 p-2 flex flex-col text-gray-800 justify-center items-center transition-colors cursor-pointer ${
                        u
                          ? "highlight-breathe-red"
                          : _
                          ? "highlight-breathe-green"
                          : ""
                      }`,
                      style: { width: `${w}%` },
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
                    v.GUID || b
                  );
                }),
              });
            } else if (d.contents && d.contents.length > 0) {
              const { sortedContents: g, maxRow: p, maxCol: w } = l(d.contents);
              return c(g, p, w);
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
              const g = t && d.med_info.some((w) => w.code == t),
                p = d.med_info.some((w) => n.includes(w.code));
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
              const { sortedContents: g, maxRow: p, maxCol: w } = l(d.contents);
              return c(g, p, w);
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
      [w, v] = m.useState(!1),
      [b, _] = m.useState(!1);
    if (
      (m.useEffect(() => {
        if (e && r) {
          const I = r.issuedQuantity || r.requestedQuantity || "0";
          a(I), c(I), d(null), p(null), v(!1);
        }
      }, [e, r]),
      !e || !r)
    )
      return null;
    const u = (I) => {
        if (w) a(I), c(I), v(!1);
        else {
          const S = l === "0" ? I : l + I;
          a(S), c(S);
        }
      },
      f = (I) => {
        h && g !== null && !w && x(), p(i), d(I), v(!0);
      },
      x = () => {
        if (h === null || g === null) return;
        const I = parseFloat(g),
          S = parseFloat(i);
        let O = 0;
        switch (h) {
          case "+":
            O = I + S;
            break;
          case "-":
            O = I - S;
            break;
          case "×":
            O = I * S;
            break;
          case "÷":
            O = S !== 0 ? I / S : 0;
            break;
          default:
            return;
        }
        const G = O.toString();
        a(G), c(G), d(null), p(null), v(!0);
      },
      j = () => {
        x();
      },
      L = () => {
        if (w) a("0."), c("0."), v(!1);
        else if (!l.includes(".")) {
          const I = l + ".";
          a(I), c(I);
        }
      },
      P = () => {
        a("0"), c("0"), d(null), p(null), v(!1);
      },
      R = async () => {
        if (!r) return;
        const I = n === "requisition" ? "申領" : "撥補";
        if (
          window.confirm(`確認核撥資訊：

藥品名稱：${r.name}
實際撥發量：${l}

是否確認${I}？`)
        ) {
          _(!0);
          try {
            if (n === "requisition") {
              const O = await ke.updateRequisitionActualQuantity(r.GUID, l);
              if (O.Code !== 200) {
                alert(`更新實際撥發量失敗：${O.Message || "未知錯誤"}`), _(!1);
                return;
              }
              const G = {
                  ...r,
                  actualQuantity: l,
                  notice: "False",
                  state: "已過帳",
                },
                E = await ke.updateRequisitionByGuid(G);
              if (E.Code !== 200) {
                alert(`申領過帳失敗：${E.Message || "未知錯誤"}`), _(!1);
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
                alert(`更新實際撥發量失敗：${O.Message || "未知錯誤"}`), _(!1);
                return;
              }
              const G = {
                  ...r,
                  actualQuantity: l,
                  notice: "False",
                  state: "已過帳",
                },
                E = await ke.updateDistributionByGuid(G);
              if (E.Code !== 200) {
                alert(`撥補過帳失敗：${E.Message || "未知錯誤"}`), _(!1);
                return;
              }
              console.log("✅ 撥補核撥成功:", {
                GUID: r.GUID,
                name: r.name,
                actualQuantity: l,
              });
            }
            o && (await o()), alert(`${I}核撥成功！`), t();
          } catch (O) {
            console.error(`${I}核撥失敗:`, O),
              alert(`${I}核撥失敗，請稍後再試`);
          } finally {
            _(!1);
          }
        }
      },
      N = n === "requisition" ? r.requestedQuantity : r.issuedQuantity;
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
                  children: s.jsx(Ye, { className: "w-5 h-5 text-gray-700" }),
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
                          children: N || "-",
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
                      onClick: L,
                      className:
                        "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                      children: ".",
                    }),
                    s.jsx("button", {
                      onClick: j,
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
                  onClick: P,
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
                  onClick: R,
                  disabled: b,
                  className:
                    "px-6 py-2.5 font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                  children: b ? "處理中..." : "核撥",
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
      [p, w] = m.useState(!1),
      [v, b] = m.useState(null),
      [_, u] = m.useState("requisition");
    Zs.useEffect(() => {
      i(r), h(o);
    }, [r, o]);
    const f = async (N) => {
        const I = N.notice === "True" ? "False" : "True";
        g(N.GUID);
        const S = [...a],
          O = S.findIndex((G) => G.GUID === N.GUID);
        if (O === -1) {
          g(null);
          return;
        }
        (S[O] = { ...N, notice: I }), i(S);
        try {
          const G = await ke.updateRequisitionNotice(N.GUID, I);
          G.Code !== 200
            ? ((S[O] = { ...N, notice: N.notice }),
              i(S),
              console.error("更新申領通知狀態失敗:", G))
            : l && l();
        } catch (G) {
          (S[O] = { ...N, notice: N.notice }),
            i(S),
            console.error("更新申領通知狀態失敗:", G);
        } finally {
          g(null);
        }
      },
      x = async (N) => {
        const I = N.notice === "True" ? "False" : "True";
        g(N.GUID);
        const S = [...c],
          O = S.findIndex((G) => G.GUID === N.GUID);
        if (O === -1) {
          g(null);
          return;
        }
        (S[O] = { ...N, notice: I }), h(S);
        try {
          const G = await ke.updateDistributionNotice(N.GUID, I);
          G.Code !== 200
            ? ((S[O] = { ...N, notice: N.notice }),
              h(S),
              console.error("更新撥補通知狀態失敗:", G))
            : l && l();
        } catch (G) {
          (S[O] = { ...N, notice: N.notice }),
            h(S),
            console.error("更新撥補通知狀態失敗:", G);
        } finally {
          g(null);
        }
      };
    if (!e || !n) return null;
    const j = a.filter((N) => N.state === "等待過帳"),
      L = c.filter((N) => N.state === "等待過帳"),
      P = j.length === 0 && L.length === 0,
      R = (N) => {
        if (!N || N === "1/01/01 00:00:00" || N === "0001-01-01T00:00:00")
          return "-";
        try {
          const I = new Date(N);
          if (isNaN(I.getTime())) return N;
          const S = I.getFullYear(),
            O = String(I.getMonth() + 1).padStart(2, "0"),
            G = String(I.getDate()).padStart(2, "0"),
            E = String(I.getHours()).padStart(2, "0"),
            C = String(I.getMinutes()).padStart(2, "0");
          return `${S}/${O}/${G} ${E}:${C}`;
        } catch {
          return N;
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
                  children: s.jsx(Ye, { className: "w-6 h-6 text-gray-700" }),
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
              children: P
                ? s.jsx("div", {
                    className:
                      "flex items-center justify-center h-40 text-gray-400 text-lg",
                    children: "無藥品需求",
                  })
                : s.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      j.map((N, I) =>
                        s.jsxs(
                          "div",
                          {
                            className:
                              "border border-blue-200 rounded-lg p-3 bg-blue-50 hover:shadow-md transition-shadow",
                            onClick: () => {
                              u("requisition"), b(N), w(!0);
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
                                        onClick: (S) => {
                                          S.stopPropagation(), f(N);
                                        },
                                        disabled: d === N.GUID,
                                        className: `p-2 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110 ${
                                          N.notice === "True"
                                            ? "bg-green-500 text-white hover:bg-green-600"
                                            : "bg-gray-300 text-gray-600 hover:bg-gray-400"
                                        }`,
                                        title:
                                          N.notice === "True"
                                            ? "點擊關閉通知"
                                            : "點擊開啟通知",
                                        children: s.jsx(xc, {
                                          className: "w-5 h-5",
                                        }),
                                      }),
                                    ],
                                  }),
                                  s.jsx("span", {
                                    className: `px-3 text-sm py-2 text-white font-semibold rounded-full ${
                                      N.actionType.includes("緊急")
                                        ? "bg-green-600"
                                        : "bg-blue-600"
                                    }`,
                                    children: N.actionType,
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
                                        children: N.requestingUnit || "-",
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
                                        children: N.requestingPerson || "-",
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
                                        children: N.requestedQuantity || "-",
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
                                        children: R(N.requestTime),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          },
                          N.GUID
                        )
                      ),
                      L.map((N, I) =>
                        s.jsxs(
                          "div",
                          {
                            className:
                              "border border-yellow-200 rounded-lg p-3 bg-yellow-50 hover:shadow-md transition-shadow",
                            onClick: () => {
                              u("distribution"), b(N), w(!0);
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
                                    onClick: (S) => {
                                      S.stopPropagation(), x(N);
                                    },
                                    disabled: d === N.GUID,
                                    className: `p-2 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110 ${
                                      N.notice === "True"
                                        ? "bg-green-500 text-white hover:bg-green-600"
                                        : "bg-gray-300 text-gray-600 hover:bg-gray-400"
                                    }`,
                                    title:
                                      N.notice === "True"
                                        ? "點擊關閉通知"
                                        : "點擊開啟通知",
                                    children: s.jsx(xc, {
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
                                        children: N.sourceStoreType || "-",
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
                                        children: N.destinationStoreType || "-",
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
                                        children: N.LOT || "-",
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
                                        children: N.VAL || "-",
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
                                        children: N.issuedQuantity || "-",
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
                                        children: N.reportName || "-",
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
                                        children: R(N.addedTime),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          },
                          N.GUID
                        )
                      ),
                    ],
                  }),
            }),
          ],
        }),
        s.jsx(xh, {
          isOpen: p,
          onClose: () => w(!1),
          type: _,
          data: v,
          onApprove: l,
        }),
      ],
    });
  },
  vh = ({ isOpen: e, onClose: t, container: n }) => {
    const [r, o] = m.useState("list_mode"),
      { highlightedMedicineCode: l } = Je(),
      [a, i] = m.useState(!1),
      [c, h] = m.useState([]),
      [d, g] = m.useState([]),
      [p, w] = m.useState([]),
      [v, b] = m.useState(!1),
      [_, u] = m.useState(null),
      f = m.useRef(null),
      x = m.useRef(null),
      j = () => {
        try {
          const S = localStorage.getItem("medMap_setting");
          if (S) {
            const G = JSON.parse(S).light_sec;
            if (G != null && G !== "") {
              const E = Number(G);
              if (!isNaN(E) && E > 0) return E * 1e3;
            }
          }
        } catch (S) {
          console.error("讀取亮燈設定失敗:", S);
        }
        return 6e4;
      },
      L = m.useCallback(async () => {
        try {
          const I = new Date(),
            S = `${I.getFullYear()}-${String(I.getMonth() + 1).padStart(
              2,
              "0"
            )}-${String(I.getDate()).padStart(2, "0")} 00:00:00`,
            O = `${I.getFullYear()}-${String(I.getMonth() + 1).padStart(
              2,
              "0"
            )}-${String(I.getDate()).padStart(2, "0")} 23:59:59`,
            [G, E] = await Promise.all([
              ke.getRequisitionByTime(S, O),
              ke.getDistributionByTime(S, O),
            ]),
            C = [];
          if (G.Code === 200 && G.Data) {
            const Z = G.Data.filter((F) => {
              var k;
              return (k = n == null ? void 0 : n.med_list) == null
                ? void 0
                : k.some((Q) => Q.code === F.code);
            });
            g(Z),
              Z.filter(
                (F) => F.state === "等待過帳" && F.notice === "True"
              ).forEach((F) => {
                F.code && C.push(F.code);
              });
          }
          if (E.Code === 200 && E.Data) {
            const Z = E.Data.filter((F) => {
              var k;
              return (k = n == null ? void 0 : n.med_list) == null
                ? void 0
                : k.some((Q) => Q.code === F.code);
            });
            w(Z),
              Z.filter(
                (F) => F.state === "等待過帳" && F.notice === "True"
              ).forEach((F) => {
                F.code && (C.includes(F.code) || C.push(F.code));
              });
          }
          h(C);
        } catch (I) {
          console.error("檢查申領撥補資料失敗:", I);
        }
      }, [n]);
    m.useEffect(
      () => (
        e
          ? (L(),
            x.current && clearInterval(x.current),
            (x.current = setInterval(() => {
              L();
            }, 1e4)))
          : x.current && (clearInterval(x.current), (x.current = null)),
        () => {
          x.current && (clearInterval(x.current), (x.current = null));
        }
      ),
      [e, L]
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
          const I = j();
          console.log("✅ ContainerDetailModal - 啟動亮燈:", {
            medicineCode: l,
            duration: I / 1e3 + "秒",
          }),
            f.current && clearTimeout(f.current),
            (f.current = setTimeout(() => {
              console.log("⏱️ ContainerDetailModal - 亮燈時間結束"),
                i(!1),
                (f.current = null);
            }, I));
        } else i(!1);
        return () => {
          f.current && clearTimeout(f.current);
        };
      }, [e, l]);
    const P = (I) => {
      d.filter((S) => S.code === I.code),
        p.filter((S) => S.code === I.code),
        u({
          code: I.code,
          name: I.name,
          cht_name: I.cht_name,
          skdiacode: I.SKDIACODE || I.skdiacode,
        }),
        b(!0);
    };
    if (!e) return null;
    const R = () =>
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
                    children: n.med_list.map((I, S) => {
                      const O = a && l && I.code == l,
                        G = c.includes(I.code);
                      return (
                        S === 0 &&
                          console.log(
                            "🧪 ContainerDetailModal - 第一筆藥品檢查:",
                            {
                              medCode: I.code,
                              highlightedCode: l,
                              isHighlightActive: a,
                              isHighlighted: O,
                              isPendingRequisition: G,
                              comparison: `${I.code} == ${l} = ${I.code == l}`,
                            }
                          ),
                        s.jsxs(
                          "tr",
                          {
                            className: `transition-colors cursor-pointer ${
                              G
                                ? "highlight-breathe-red"
                                : O
                                ? "highlight-breathe-green"
                                : "hover:bg-gray-50"
                            }`,
                            onClick: () => P(I),
                            children: [
                              s.jsx("td", {
                                className:
                                  "border border-gray-300 px-1 py-2 text-sm",
                                children: I.code || "-",
                              }),
                              s.jsx("td", {
                                className:
                                  "border border-gray-300 px-1 py-2 text-sm",
                                children: I.SKDIACODE || "-",
                              }),
                              s.jsx("td", {
                                className:
                                  "border border-gray-300 px-1 py-2 text-sm",
                                children: I.name || "-",
                              }),
                              s.jsx("td", {
                                className:
                                  "border border-gray-300 px-1 py-2 text-sm text-right",
                                children: I.qty || "-",
                              }),
                              s.jsx("td", {
                                className:
                                  "border border-gray-300 px-1 py-2 text-sm text-center",
                                children: I.stockCol || "-",
                              }),
                              s.jsx("td", {
                                className:
                                  "border border-gray-300 px-1 py-2 text-sm text-center",
                                children: I.stockRow || "-",
                              }),
                              s.jsx("td", {
                                className:
                                  "border border-gray-300 px-1 py-2 text-sm text-center",
                                children: I.stock || "-",
                              }),
                            ],
                          },
                          S
                        )
                      );
                    }),
                  }),
                ],
              }),
            }),
      N = () =>
        n
          ? s.jsx(gh, {
              container: n,
              highlightedMedicineCode: a ? l : null,
              pendingRequisitionCodes: c,
              onMedicineClick: P,
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
                      children: s.jsx(Ye, {
                        className: "w-6 h-6 text-gray-700",
                      }),
                    }),
                  ],
                }),
                s.jsx("div", {
                  className: "flex-1 overflow-hidden p-3",
                  children: r === "list_mode" ? R() : N(),
                }),
              ],
            }),
          ],
        }),
        s.jsx(yh, {
          isOpen: v,
          onClose: () => b(!1),
          medicineInfo: _,
          requisitions: _ ? d.filter((I) => I.code === _.code) : [],
          distributions: _ ? p.filter((I) => I.code === _.code) : [],
          onNoticeUpdated: L,
        }),
      ],
    });
  },
  wh = ({ isOpen: e, onLoginSuccess: t }) => {
    const { t: n } = pt(),
      [r, o] = m.useState(""),
      [l, a] = m.useState(""),
      [i, c] = m.useState(!1),
      [h, d] = m.useState(!1),
      [g, p] = m.useState(""),
      w = async (b) => {
        if ((b.preventDefault(), !r.trim() || !l.trim())) {
          p("Please enter both ID and password");
          return;
        }
        d(!0), p("");
        try {
          const _ = await ke.login({ ID: r.trim(), Password: l });
          if (_.Code === 200 && _.Data) {
            const u = { ..._.Data, loginTime: new Date().toISOString() };
            sessionStorage.setItem("user_session", JSON.stringify(u)), t(u);
          } else p(_.Result || "Login failed");
        } catch (_) {
          console.error("Login failed:", _),
            p("Network error. Please try again.");
        } finally {
          d(!1);
        }
      },
      v = (b) => {
        b.key === "Enter" && !h && w(b);
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
                      onSubmit: w,
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
                              onChange: (b) => o(b.target.value),
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
                                  onChange: (b) => a(b.target.value),
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
                                  s.jsx(Rt, {
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
    const { t: n } = pt();
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
                        children: s.jsx(oi, {
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
                      s.jsx(Rt, {
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
                  : s.jsx(qm, { className: "w-5 h-5 text-red-600" }),
                s.jsx("span", {
                  className: "text-sm font-medium",
                  children: e,
                }),
                s.jsx("button", {
                  onClick: r,
                  className: `p-1 rounded-full hover:bg-black/10 transition-colors ${
                    t === "success" ? "text-green-600" : "text-red-600"
                  }`,
                  children: s.jsx(Ye, { className: "w-4 h-4" }),
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
    selectedStoreShelfForAdd: w,
    addDepartmentModalOpen: v,
    closeAddDepartmentModal: b,
    qrCodeScannerModalOpen: _,
    qrCodeScannerMode: u,
    closeQRCodeScannerModal: f,
    addBarcodeModalOpen: x,
    closeAddBarcodeModal: j,
    initialBarcodeValue: L,
    containerDetailModalOpen: P,
    closeContainerDetailModal: R,
    selectedContainerForDetail: N,
    setMedicineList: I,
    setIsLoadingMedicines: S,
    showNotification: O,
  } = Je();
  m.useEffect(() => {
    (() => {
      try {
        const M = sessionStorage.getItem("user_session");
        if (M) {
          const F = JSON.parse(M);
          F.GUID && F.ID && F.Name
            ? (o(F), r(!0))
            : sessionStorage.removeItem("user_session");
        }
      } catch (M) {
        console.error("Error checking session:", M),
          sessionStorage.removeItem("user_session");
      }
    })();
  }, [r, o]),
    m.useEffect(() => {
      let Z = !0;
      return (
        (async () => {
          if (n) {
            S(!0);
            try {
              console.log("開始載入藥品資料...");
              const F = await ke.getMedicineCloud();
              if ((console.log("藥品資料 API 回應:", F), !Z)) return;
              F.Code === 200 && F.Data
                ? (I(F.Data),
                  console.log(`✅ 成功載入 ${F.Data.length} 筆藥品資料`),
                  O(`載入 ${F.Data.length} 筆藥品資料`, "success"))
                : (console.warn("API 回應異常:", F),
                  I([]),
                  O("藥品資料載入異常，請稍後重試", "error"));
            } catch (F) {
              if (!Z) return;
              console.error("載入藥品資料失敗:", F),
                I([]),
                O("無法連線到藥品資料庫，部分功能可能無法使用", "error");
            } finally {
              Z && S(!1);
            }
          }
        })(),
        () => {
          Z = !1;
        }
      );
    }, [n]);
  const G = (Z) => {
      o(Z), r(!0);
    },
    E = Zs.useRef(null),
    C = (Z, M) => {
      if (
        (console.log("📸 QR掃描成功 - handleQRScanSuccess 被調用:", {
          barcode: Z,
          medicineData: M,
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
                E.current.locateDrug(M))
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
                t === "department" ? s.jsx(nh, {}) : s.jsx(zd, { ref: E }),
            }),
          }),
          s.jsx(eh, {}),
          s.jsx(ah, {}),
          s.jsx(ih, {}),
          s.jsx(ch, {}),
          s.jsx(uh, {}),
          s.jsx(dh, {}),
          s.jsx(fh, {}),
          s.jsx(ph, { isOpen: g, onClose: p, storeShelf: w }),
          s.jsx(mh, { isOpen: v, onClose: b }),
          s.jsx(Bo, { isOpen: _, onClose: f, mode: u, onScanSuccess: C }),
          s.jsx(hh, { isOpen: x, onClose: j, initialBarcode: L }),
          s.jsx(vh, { isOpen: P, onClose: R, container: N }),
          s.jsx(bh, { isVisible: l }),
          s.jsx(Nh, {
            message: a.message,
            type: a.type,
            isVisible: a.isVisible,
            onClose: i,
          }),
        ],
      })
    : s.jsx(wh, { isOpen: !0, onLoginSuccess: G });
}
function Sh() {
  return s.jsx(Tm, { children: s.jsx(Im, { children: s.jsx(jh, {}) }) });
}
Id(document.getElementById("root")).render(
  s.jsx(m.StrictMode, { children: s.jsx(Sh, {}) })
);
