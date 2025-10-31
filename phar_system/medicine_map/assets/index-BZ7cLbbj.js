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
function Dr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Sc),
    (this.updater = n || Nc);
}
Dr.prototype.isReactComponent = {};
Dr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Dr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Cc() {}
Cc.prototype = Dr.prototype;
function da(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Sc),
    (this.updater = n || Nc);
}
var fa = (da.prototype = new Cc());
fa.constructor = da;
jc(fa, Dr.prototype);
fa.isPureReactComponent = !0;
var ci = Array.isArray,
  kc = Object.prototype.hasOwnProperty,
  pa = { current: null },
  Dc = { key: !0, ref: !0, __self: !0, __source: !0 };
function _c(e, t, n) {
  var r,
    o = {},
    l = null,
    a = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (l = "" + t.key),
    t))
      kc.call(t, r) && !Dc.hasOwnProperty(r) && (o[r] = t[r]);
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
function zs(e, t, n, r, o) {
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
          zs(o, t, n, "", function (h) {
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
      a += zs(l, t, n, c, o);
    }
  else if (((c = pf(e)), typeof c == "function"))
    for (e = c.call(e), i = 0; !(l = e.next()).done; )
      (l = l.value), (c = r + Ho(l, i++)), (a += zs(l, t, n, c, o));
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
    zs(e, r, "", "", function (l) {
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
  Fs = { transition: null },
  xf = {
    ReactCurrentDispatcher: dt,
    ReactCurrentBatchConfig: Fs,
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
Ee.Component = Dr;
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
        !Dc.hasOwnProperty(c) &&
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
Ee.createElement = _c;
Ee.createFactory = function (e) {
  var t = _c.bind(null, e);
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
  var t = Fs.transition;
  Fs.transition = {};
  try {
    e();
  } finally {
    Fs.transition = t;
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
var p = bc.exports;
const Zs = tf(p);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yf = p,
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
  Ic = { exports: {} },
  Ct = {},
  Pc = { exports: {} },
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
  function t(S, Q) {
    var ie = S.length;
    S.push(Q);
    e: for (; 0 < ie; ) {
      var X = (ie - 1) >>> 1,
        oe = S[X];
      if (0 < o(oe, Q)) (S[X] = Q), (S[ie] = oe), (ie = X);
      else break e;
    }
  }
  function n(S) {
    return S.length === 0 ? null : S[0];
  }
  function r(S) {
    if (S.length === 0) return null;
    var Q = S[0],
      ie = S.pop();
    if (ie !== Q) {
      S[0] = ie;
      e: for (var X = 0, oe = S.length, Ne = oe >>> 1; X < Ne; ) {
        var le = 2 * (X + 1) - 1,
          ye = S[le],
          U = le + 1,
          ae = S[U];
        if (0 > o(ye, ie))
          U < oe && 0 > o(ae, ye)
            ? ((S[X] = ae), (S[U] = ie), (X = U))
            : ((S[X] = ye), (S[le] = ie), (X = le));
        else if (U < oe && 0 > o(ae, ie)) (S[X] = ae), (S[U] = ie), (X = U);
        else break e;
      }
    }
    return Q;
  }
  function o(S, Q) {
    var ie = S.sortIndex - Q.sortIndex;
    return ie !== 0 ? ie : S.id - Q.id;
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
    x = null,
    m = 3,
    b = !1,
    v = !1,
    N = !1,
    E = typeof setTimeout == "function" ? setTimeout : null,
    u = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(S) {
    for (var Q = n(h); Q !== null; ) {
      if (Q.callback === null) r(h);
      else if (Q.startTime <= S)
        r(h), (Q.sortIndex = Q.expirationTime), t(c, Q);
      else break;
      Q = n(h);
    }
  }
  function C(S) {
    if (((N = !1), g(S), !v))
      if (n(c) !== null) (v = !0), w(B);
      else {
        var Q = n(h);
        Q !== null && O(C, Q.startTime - S);
      }
  }
  function B(S, Q) {
    (v = !1), N && ((N = !1), u(j), (j = -1)), (b = !0);
    var ie = m;
    try {
      for (
        g(Q), x = n(c);
        x !== null && (!(x.expirationTime > Q) || (S && !F()));

      ) {
        var X = x.callback;
        if (typeof X == "function") {
          (x.callback = null), (m = x.priorityLevel);
          var oe = X(x.expirationTime <= Q);
          (Q = e.unstable_now()),
            typeof oe == "function" ? (x.callback = oe) : x === n(c) && r(c),
            g(Q);
        } else r(c);
        x = n(c);
      }
      if (x !== null) var Ne = !0;
      else {
        var le = n(h);
        le !== null && O(C, le.startTime - Q), (Ne = !1);
      }
      return Ne;
    } finally {
      (x = null), (m = ie), (b = !1);
    }
  }
  var I = !1,
    A = null,
    j = -1,
    z = 5,
    D = -1;
  function F() {
    return !(e.unstable_now() - D < z);
  }
  function G() {
    if (A !== null) {
      var S = e.unstable_now();
      D = S;
      var Q = !0;
      try {
        Q = A(!0, S);
      } finally {
        Q ? P() : ((I = !1), (A = null));
      }
    } else I = !1;
  }
  var P;
  if (typeof f == "function")
    P = function () {
      f(G);
    };
  else if (typeof MessageChannel < "u") {
    var M = new MessageChannel(),
      ee = M.port2;
    (M.port1.onmessage = G),
      (P = function () {
        ee.postMessage(null);
      });
  } else
    P = function () {
      E(G, 0);
    };
  function w(S) {
    (A = S), I || ((I = !0), P());
  }
  function O(S, Q) {
    j = E(function () {
      S(e.unstable_now());
    }, Q);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (S) {
      S.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || b || ((v = !0), w(B));
    }),
    (e.unstable_forceFrameRate = function (S) {
      0 > S || 125 < S
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (z = 0 < S ? Math.floor(1e3 / S) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(c);
    }),
    (e.unstable_next = function (S) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var Q = 3;
          break;
        default:
          Q = m;
      }
      var ie = m;
      m = Q;
      try {
        return S();
      } finally {
        m = ie;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (S, Q) {
      switch (S) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          S = 3;
      }
      var ie = m;
      m = S;
      try {
        return Q();
      } finally {
        m = ie;
      }
    }),
    (e.unstable_scheduleCallback = function (S, Q, ie) {
      var X = e.unstable_now();
      switch (
        (typeof ie == "object" && ie !== null
          ? ((ie = ie.delay),
            (ie = typeof ie == "number" && 0 < ie ? X + ie : X))
          : (ie = X),
        S)
      ) {
        case 1:
          var oe = -1;
          break;
        case 2:
          oe = 250;
          break;
        case 5:
          oe = 1073741823;
          break;
        case 4:
          oe = 1e4;
          break;
        default:
          oe = 5e3;
      }
      return (
        (oe = ie + oe),
        (S = {
          id: d++,
          callback: Q,
          priorityLevel: S,
          startTime: ie,
          expirationTime: oe,
          sortIndex: -1,
        }),
        ie > X
          ? ((S.sortIndex = ie),
            t(h, S),
            n(c) === null &&
              S === n(h) &&
              (N ? (u(j), (j = -1)) : (N = !0), O(C, ie - X)))
          : ((S.sortIndex = oe), t(c, S), v || b || ((v = !0), w(B))),
        S
      );
    }),
    (e.unstable_shouldYield = F),
    (e.unstable_wrapCallback = function (S) {
      var Q = m;
      return function () {
        var ie = m;
        m = Q;
        try {
          return S.apply(this, arguments);
        } finally {
          m = ie;
        }
      };
    });
})(Rc);
Pc.exports = Rc;
var Sf = Pc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Cf = p,
  St = Sf;
function te(e) {
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
function Df(e) {
  return yl.call(fi, e)
    ? !0
    : yl.call(di, e)
    ? !1
    : kf.test(e)
    ? (fi[e] = !0)
    : ((di[e] = !0), !1);
}
function _f(e, t, n, r) {
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
  if (t === null || typeof t > "u" || _f(e, t, n, r)) return !0;
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
      ? Df(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var Ge = Object.assign,
  Vo;
function zr(e) {
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
function qo(e, t) {
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
  return (e = e ? e.displayName || e.name : "") ? zr(e) : "";
}
function Ef(e) {
  switch (e.tag) {
    case 5:
      return zr(e.type);
    case 16:
      return zr("Lazy");
    case 13:
      return zr("Suspense");
    case 19:
      return zr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = qo(e.type, !1)), e;
    case 11:
      return (e = qo(e.type.render, !1)), e;
    case 1:
      return (e = qo(e.type, !0)), e;
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
function If(e) {
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
function Dn(e) {
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
function Pf(e) {
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
  e._valueTracker || (e._valueTracker = Pf(e));
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
  return Ge({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function mi(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Dn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Bc(e, t) {
  (t = t.checked), t != null && xa(e, "checked", t, !1);
}
function Sl(e, t) {
  Bc(e, t);
  var n = Dn(t.value),
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
    : t.hasOwnProperty("defaultValue") && Cl(e, t.type, Dn(t.defaultValue)),
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
var Fr = Array.isArray;
function pr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Dn(n), t = null, o = 0; o < e.length; o++) {
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
  if (t.dangerouslySetInnerHTML != null) throw Error(te(91));
  return Ge({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function gi(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(te(92));
      if (Fr(n)) {
        if (1 < n.length) throw Error(te(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Dn(n) };
}
function zc(e, t) {
  var n = Dn(t.value),
    r = Dn(t.defaultValue);
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
function Fc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Dl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Fc(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var ks,
  Gc = (function (e) {
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
var Tf = Ge(
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
function _l(e, t) {
  if (t) {
    if (Tf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(te(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(te(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(te(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(te(62));
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
var Il = null,
  mr = null,
  hr = null;
function yi(e) {
  if ((e = ws(e))) {
    if (typeof Il != "function") throw Error(te(280));
    var t = e.stateNode;
    t && ((t = Eo(t)), Il(e.stateNode, e.type, t));
  }
}
function Wc(e) {
  mr ? (hr ? hr.push(e) : (hr = [e])) : (mr = e);
}
function qc() {
  if (mr) {
    var e = mr,
      t = hr;
    if (((hr = mr = null), yi(e), t)) for (e = 0; e < t.length; e++) yi(t[e]);
  }
}
function Qc(e, t) {
  return e(t);
}
function Yc() {}
var Qo = !1;
function Xc(e, t, n) {
  if (Qo) return e(t, n);
  Qo = !0;
  try {
    return Qc(e, t, n);
  } finally {
    (Qo = !1), (mr !== null || hr !== null) && (Yc(), qc());
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
  if (n && typeof n != "function") throw Error(te(231, t, typeof n));
  return n;
}
var Pl = !1;
if (on)
  try {
    var Tr = {};
    Object.defineProperty(Tr, "passive", {
      get: function () {
        Pl = !0;
      },
    }),
      window.addEventListener("test", Tr, Tr),
      window.removeEventListener("test", Tr, Tr);
  } catch {
    Pl = !1;
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
    } else throw Error(te(198));
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
  if (Wn(e) !== e) throw Error(te(188));
}
function Uf(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Wn(e)), t === null)) throw Error(te(188));
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
      throw Error(te(188));
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
        if (!a) throw Error(te(189));
      }
    }
    if (n.alternate !== r) throw Error(te(190));
  }
  if (n.tag !== 3) throw Error(te(188));
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
  Bf = St.unstable_shouldYield,
  zf = St.unstable_requestPaint,
  We = St.unstable_now,
  Ff = St.unstable_getCurrentPriorityLevel,
  Na = St.unstable_ImmediatePriority,
  tu = St.unstable_UserBlockingPriority,
  ro = St.unstable_NormalPriority,
  Gf = St.unstable_LowPriority,
  nu = St.unstable_IdlePriority,
  ko = null,
  Kt = null;
function Hf(e) {
  if (Kt && typeof Kt.onCommitFiberRoot == "function")
    try {
      Kt.onCommitFiberRoot(ko, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ft = Math.clz32 ? Math.clz32 : qf,
  Vf = Math.log,
  Wf = Math.LN2;
function qf(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Vf(e) / Wf) | 0)) | 0;
}
var Ds = 64,
  _s = 4194304;
function Gr(e) {
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
    i !== 0 ? (r = Gr(i)) : ((l &= a), l !== 0 && (r = Gr(l)));
  } else (a = n & ~o), a !== 0 ? (r = Gr(a)) : l !== 0 && (r = Gr(l));
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
      (n = 31 - Ft(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function Qf(e, t) {
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
    var a = 31 - Ft(l),
      i = 1 << a,
      c = o[a];
    c === -1
      ? (!(i & n) || i & r) && (o[a] = Qf(i, t))
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
  var e = Ds;
  return (Ds <<= 1), !(Ds & 4194240) && (Ds = 64), e;
}
function Yo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ys(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ft(t)),
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
    var o = 31 - Ft(n),
      l = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~l);
  }
}
function ja(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ft(n),
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
function Gs(e) {
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
  Gs(e) && n.delete(t);
}
function Zf() {
  (Al = !1),
    vn !== null && Gs(vn) && (vn = null),
    wn !== null && Gs(wn) && (wn = null),
    bn !== null && Gs(bn) && (bn = null),
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
      switch (Ff()) {
        case Na:
          return 1;
        case tu:
          return 4;
        case ro:
        case Gf:
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
    Ge(t.prototype, {
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
var _r = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Da = kt(_r),
  vs = Ge({}, _r, { view: 0, detail: 0 }),
  np = kt(vs),
  Xo,
  Ko,
  $r,
  Do = Ge({}, vs, {
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
    getModifierState: _a,
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
  Si = kt(Do),
  rp = Ge({}, Do, { dataTransfer: 0 }),
  sp = kt(rp),
  op = Ge({}, vs, { relatedTarget: 0 }),
  Jo = kt(op),
  lp = Ge({}, _r, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  ap = kt(lp),
  ip = Ge({}, _r, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  cp = kt(ip),
  up = Ge({}, _r, { data: 0 }),
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
function _a() {
  return mp;
}
var hp = Ge({}, vs, {
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
    getModifierState: _a,
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
  xp = Ge({}, Do, {
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
  yp = Ge({}, vs, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: _a,
  }),
  vp = kt(yp),
  wp = Ge({}, _r, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  bp = kt(wp),
  Np = Ge({}, Do, {
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
  qr = null;
on && "documentMode" in document && (qr = document.documentMode);
var Cp = on && "TextEvent" in window && !qr,
  fu = on && (!Ma || (qr && 8 < qr && 11 >= qr)),
  Di = " ",
  _i = !1;
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
      return t.which !== 32 ? null : ((_i = !0), Di);
    case "textInput":
      return (e = t.data), e === Di && _i ? null : e;
    default:
      return null;
  }
}
function Dp(e, t) {
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
var _p = {
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
  return t === "input" ? !!_p[e.type] : t === "textarea";
}
function hu(e, t, n, r) {
  Wc(r),
    (t = ao(t, "onChange")),
    0 < t.length &&
      ((n = new Da("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Qr = null,
  ls = null;
function Mp(e) {
  ku(e, 0);
}
function _o(e) {
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
function Ii() {
  Qr && (Qr.detachEvent("onpropertychange", xu), (ls = Qr = null));
}
function xu(e) {
  if (e.propertyName === "value" && _o(ls)) {
    var t = [];
    hu(t, ls, e, ba(e)), Xc(Mp, t);
  }
}
function Ip(e, t, n) {
  e === "focusin"
    ? (Ii(), (Qr = t), (ls = n), Qr.attachEvent("onpropertychange", xu))
    : e === "focusout" && Ii();
}
function Pp(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return _o(ls);
}
function Rp(e, t) {
  if (e === "click") return _o(t);
}
function Tp(e, t) {
  if (e === "input" || e === "change") return _o(t);
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
function Pi(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ri(e, t) {
  var n = Pi(e);
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
    n = Pi(n);
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
  Yr = null,
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
    (Yr && as(Yr, r)) ||
      ((Yr = r),
      (r = ao($l, "onSelect")),
      0 < r.length &&
        ((t = new Da("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = sr))));
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
var or = {
    animationend: Is("Animation", "AnimationEnd"),
    animationiteration: Is("Animation", "AnimationIteration"),
    animationstart: Is("Animation", "AnimationStart"),
    transitionend: Is("Transition", "TransitionEnd"),
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
  Bp = new Set("cancel close invalid load scroll toggle".split(" ").concat(Hr));
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
  var n = t[Gl];
  n === void 0 && (n = t[Gl] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Du(t, e, 2, !1), n.add(r));
}
function sl(e, t, n) {
  var r = 0;
  t && (r |= 4), Du(n, e, r, t);
}
var Ps = "_reactListening" + Math.random().toString(36).slice(2);
function is(e) {
  if (!e[Ps]) {
    (e[Ps] = !0),
      Tc.forEach(function (n) {
        n !== "selectionchange" && (Bp.has(n) || sl(n, !1, e), sl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ps] || ((t[Ps] = !0), sl("selectionchange", !1, t));
  }
}
function Du(e, t, n, r) {
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
      x = [];
    e: {
      var m = Cu.get(e);
      if (m !== void 0) {
        var b = Da,
          v = e;
        switch (e) {
          case "keypress":
            if (Vs(n) === 0) break e;
          case "keydown":
          case "keyup":
            b = gp;
            break;
          case "focusin":
            (v = "focus"), (b = Jo);
            break;
          case "focusout":
            (v = "blur"), (b = Jo);
            break;
          case "beforeblur":
          case "afterblur":
            b = Jo;
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
            b = Si;
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
          case bu:
          case Nu:
          case ju:
            b = ap;
            break;
          case Su:
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
            b = ki;
        }
        var N = (t & 4) !== 0,
          E = !N && e === "scroll",
          u = N ? (m !== null ? m + "Capture" : null) : m;
        N = [];
        for (var f = h, g; f !== null; ) {
          g = f;
          var C = g.stateNode;
          if (
            (g.tag === 5 &&
              C !== null &&
              ((g = C),
              u !== null && ((C = ns(f, u)), C != null && N.push(cs(f, C, g)))),
            E)
          )
            break;
          f = f.return;
        }
        0 < N.length &&
          ((m = new b(m, v, null, n, d)), x.push({ event: m, listeners: N }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (b = e === "mouseout" || e === "pointerout"),
          m &&
            n !== El &&
            (v = n.relatedTarget || n.fromElement) &&
            (An(v) || v[ln]))
        )
          break e;
        if (
          (b || m) &&
          ((m =
            d.window === d
              ? d
              : (m = d.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          b
            ? ((v = n.relatedTarget || n.toElement),
              (b = h),
              (v = v ? An(v) : null),
              v !== null &&
                ((E = Wn(v)), v !== E || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((b = null), (v = h)),
          b !== v)
        ) {
          if (
            ((N = Si),
            (C = "onMouseLeave"),
            (u = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((N = ki),
              (C = "onPointerLeave"),
              (u = "onPointerEnter"),
              (f = "pointer")),
            (E = b == null ? m : lr(b)),
            (g = v == null ? m : lr(v)),
            (m = new N(C, f + "leave", b, n, d)),
            (m.target = E),
            (m.relatedTarget = g),
            (C = null),
            An(d) === h &&
              ((N = new N(u, f + "enter", v, n, d)),
              (N.target = g),
              (N.relatedTarget = E),
              (C = N)),
            (E = C),
            b && v)
          )
            t: {
              for (N = b, u = v, f = 0, g = N; g; g = er(g)) f++;
              for (g = 0, C = u; C; C = er(C)) g++;
              for (; 0 < f - g; ) (N = er(N)), f--;
              for (; 0 < g - f; ) (u = er(u)), g--;
              for (; f--; ) {
                if (N === u || (u !== null && N === u.alternate)) break t;
                (N = er(N)), (u = er(u));
              }
              N = null;
            }
          else N = null;
          b !== null && $i(x, m, b, N, !1),
            v !== null && E !== null && $i(x, E, v, N, !0);
        }
      }
      e: {
        if (
          ((m = h ? lr(h) : window),
          (b = m.nodeName && m.nodeName.toLowerCase()),
          b === "select" || (b === "input" && m.type === "file"))
        )
          var B = Ep;
        else if (Mi(m))
          if (gu) B = Tp;
          else {
            B = Pp;
            var I = Ip;
          }
        else
          (b = m.nodeName) &&
            b.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (B = Rp);
        if (B && (B = B(e, h))) {
          hu(x, B, n, d);
          break e;
        }
        I && I(e, m, h),
          e === "focusout" &&
            (I = m._wrapperState) &&
            I.controlled &&
            m.type === "number" &&
            Cl(m, "number", m.value);
      }
      switch (((I = h ? lr(h) : window), e)) {
        case "focusin":
          (Mi(I) || I.contentEditable === "true") &&
            ((sr = I), ($l = h), (Yr = null));
          break;
        case "focusout":
          Yr = $l = sr = null;
          break;
        case "mousedown":
          Ll = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Ll = !1), Ti(x, n, d);
          break;
        case "selectionchange":
          if ($p) break;
        case "keydown":
        case "keyup":
          Ti(x, n, d);
      }
      var A;
      if (Ma)
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
        rr
          ? pu(e, n) && (j = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (j = "onCompositionStart");
      j &&
        (fu &&
          n.locale !== "ko" &&
          (rr || j !== "onCompositionStart"
            ? j === "onCompositionEnd" && rr && (A = du())
            : ((xn = d),
              (ka = "value" in xn ? xn.value : xn.textContent),
              (rr = !0))),
        (I = ao(h, j)),
        0 < I.length &&
          ((j = new Ci(j, e, null, n, d)),
          x.push({ event: j, listeners: I }),
          A ? (j.data = A) : ((A = mu(n)), A !== null && (j.data = A)))),
        (A = Cp ? kp(e, n) : Dp(e, n)) &&
          ((h = ao(h, "onBeforeInput")),
          0 < h.length &&
            ((d = new Ci("onBeforeInput", "beforeinput", null, n, d)),
            x.push({ event: d, listeners: h }),
            (d.data = A)));
    }
    ku(x, t);
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
var zp = /\r\n?/g,
  Fp = /\u0000|\uFFFD/g;
function Li(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      zp,
      `
`
    )
    .replace(Fp, "");
}
function Rs(e, t, n) {
  if (((t = Li(t)), Li(e) !== t && n)) throw Error(te(425));
}
function io() {}
var Ul = null,
  Bl = null;
function zl(e, t) {
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
var Fl = typeof setTimeout == "function" ? setTimeout : void 0,
  Gp = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Ui = typeof Promise == "function" ? Promise : void 0,
  Hp =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Ui < "u"
      ? function (e) {
          return Ui.resolve(null).then(e).catch(Vp);
        }
      : Fl;
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
function Bi(e) {
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
  Gl = "__reactEvents$" + Mr,
  Wp = "__reactListeners$" + Mr,
  qp = "__reactHandles$" + Mr;
function An(e) {
  var t = e[Xt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[ln] || n[Xt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Bi(e); e !== null; ) {
          if ((n = e[Xt])) return n;
          e = Bi(e);
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
  throw Error(te(33));
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
var _n = {},
  at = En(_n),
  xt = En(!1),
  Bn = _n;
function wr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return _n;
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
function yt(e) {
  return (e = e.childContextTypes), e != null;
}
function co() {
  Le(xt), Le(at);
}
function zi(e, t, n) {
  if (at.current !== _n) throw Error(te(168));
  Oe(at, t), Oe(xt, n);
}
function _u(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(te(108, If(e) || "Unknown", o));
  return Ge({}, n, r);
}
function uo(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || _n),
    (Bn = at.current),
    Oe(at, e),
    Oe(xt, xt.current),
    !0
  );
}
function Fi(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(te(169));
  n
    ? ((e = _u(e, t, Bn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Le(xt),
      Le(at),
      Oe(at, e))
    : Le(xt),
    Oe(xt, n);
}
var en = null,
  Io = !1,
  al = !1;
function Mu(e) {
  en === null ? (en = [e]) : en.push(e);
}
function Qp(e) {
  (Io = !0), Mu(e);
}
function In() {
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
      (en = null), (Io = !1);
    } catch (o) {
      throw (en !== null && (en = en.slice(e + 1)), eu(Na, In), o);
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
  _t = [],
  Mt = 0,
  zn = null,
  nn = 1,
  rn = "";
function Rn(e, t) {
  (ir[cr++] = po), (ir[cr++] = fo), (fo = e), (po = t);
}
function Eu(e, t, n) {
  (_t[Mt++] = nn), (_t[Mt++] = rn), (_t[Mt++] = zn), (zn = e);
  var r = nn;
  e = rn;
  var o = 32 - Ft(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var l = 32 - Ft(t) + o;
  if (30 < l) {
    var a = o - (o % 5);
    (l = (r & ((1 << a) - 1)).toString(32)),
      (r >>= a),
      (o -= a),
      (nn = (1 << (32 - Ft(t) + o)) | (n << o) | r),
      (rn = l + e);
  } else (nn = (1 << l) | (n << o) | r), (rn = e);
}
function Ia(e) {
  e.return !== null && (Rn(e, 1), Eu(e, 1, 0));
}
function Pa(e) {
  for (; e === fo; )
    (fo = ir[--cr]), (ir[cr] = null), (po = ir[--cr]), (ir[cr] = null);
  for (; e === zn; )
    (zn = _t[--Mt]),
      (_t[Mt] = null),
      (rn = _t[--Mt]),
      (_t[Mt] = null),
      (nn = _t[--Mt]),
      (_t[Mt] = null);
}
var jt = null,
  Nt = null,
  Ue = !1,
  zt = null;
function Iu(e, t) {
  var n = Et(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Gi(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (jt = e), (Nt = Nn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (jt = e), (Nt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = zn !== null ? { id: nn, overflow: rn } : null),
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
            (Nt = null),
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
    var t = Nt;
    if (t) {
      var n = t;
      if (!Gi(e, t)) {
        if (Vl(e)) throw Error(te(418));
        t = Nn(n.nextSibling);
        var r = jt;
        t && Gi(e, t)
          ? Iu(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Ue = !1), (jt = e));
      }
    } else {
      if (Vl(e)) throw Error(te(418));
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
      (t = t !== "head" && t !== "body" && !zl(e.type, e.memoizedProps))),
    t && (t = Nt))
  ) {
    if (Vl(e)) throw (Pu(), Error(te(418)));
    for (; t; ) Iu(e, t), (t = Nn(t.nextSibling));
  }
  if ((Hi(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(te(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Nt = Nn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Nt = null;
    }
  } else Nt = jt ? Nn(e.stateNode.nextSibling) : null;
  return !0;
}
function Pu() {
  for (var e = Nt; e; ) e = Nn(e.nextSibling);
}
function br() {
  (Nt = jt = null), (Ue = !1);
}
function Ra(e) {
  zt === null ? (zt = [e]) : zt.push(e);
}
var Yp = un.ReactCurrentBatchConfig;
function Lr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(te(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(te(147, e));
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
    if (typeof e != "string") throw Error(te(284));
    if (!n._owner) throw Error(te(290, e));
  }
  return e;
}
function As(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      te(
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
      var g = u.deletions;
      g === null ? ((u.deletions = [f]), (u.flags |= 16)) : g.push(f);
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
  function l(u, f, g) {
    return (
      (u.index = g),
      e
        ? ((g = u.alternate),
          g !== null
            ? ((g = g.index), g < f ? ((u.flags |= 2), f) : g)
            : ((u.flags |= 2), f))
        : ((u.flags |= 1048576), f)
    );
  }
  function a(u) {
    return e && u.alternate === null && (u.flags |= 2), u;
  }
  function i(u, f, g, C) {
    return f === null || f.tag !== 6
      ? ((f = ml(g, u.mode, C)), (f.return = u), f)
      : ((f = o(f, g)), (f.return = u), f);
  }
  function c(u, f, g, C) {
    var B = g.type;
    return B === nr
      ? d(u, f, g.props.children, C, g.key)
      : f !== null &&
        (f.elementType === B ||
          (typeof B == "object" &&
            B !== null &&
            B.$$typeof === pn &&
            Vi(B) === f.type))
      ? ((C = o(f, g.props)), (C.ref = Lr(u, f, g)), (C.return = u), C)
      : ((C = Js(g.type, g.key, g.props, null, u.mode, C)),
        (C.ref = Lr(u, f, g)),
        (C.return = u),
        C);
  }
  function h(u, f, g, C) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== g.containerInfo ||
      f.stateNode.implementation !== g.implementation
      ? ((f = hl(g, u.mode, C)), (f.return = u), f)
      : ((f = o(f, g.children || [])), (f.return = u), f);
  }
  function d(u, f, g, C, B) {
    return f === null || f.tag !== 7
      ? ((f = Un(g, u.mode, C, B)), (f.return = u), f)
      : ((f = o(f, g)), (f.return = u), f);
  }
  function x(u, f, g) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return (f = ml("" + f, u.mode, g)), (f.return = u), f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Ss:
          return (
            (g = Js(f.type, f.key, f.props, null, u.mode, g)),
            (g.ref = Lr(u, null, f)),
            (g.return = u),
            g
          );
        case tr:
          return (f = hl(f, u.mode, g)), (f.return = u), f;
        case pn:
          var C = f._init;
          return x(u, C(f._payload), g);
      }
      if (Fr(f) || Rr(f))
        return (f = Un(f, u.mode, g, null)), (f.return = u), f;
      As(u, f);
    }
    return null;
  }
  function m(u, f, g, C) {
    var B = f !== null ? f.key : null;
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return B !== null ? null : i(u, f, "" + g, C);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Ss:
          return g.key === B ? c(u, f, g, C) : null;
        case tr:
          return g.key === B ? h(u, f, g, C) : null;
        case pn:
          return (B = g._init), m(u, f, B(g._payload), C);
      }
      if (Fr(g) || Rr(g)) return B !== null ? null : d(u, f, g, C, null);
      As(u, g);
    }
    return null;
  }
  function b(u, f, g, C, B) {
    if ((typeof C == "string" && C !== "") || typeof C == "number")
      return (u = u.get(g) || null), i(f, u, "" + C, B);
    if (typeof C == "object" && C !== null) {
      switch (C.$$typeof) {
        case Ss:
          return (u = u.get(C.key === null ? g : C.key) || null), c(f, u, C, B);
        case tr:
          return (u = u.get(C.key === null ? g : C.key) || null), h(f, u, C, B);
        case pn:
          var I = C._init;
          return b(u, f, g, I(C._payload), B);
      }
      if (Fr(C) || Rr(C)) return (u = u.get(g) || null), d(f, u, C, B, null);
      As(f, C);
    }
    return null;
  }
  function v(u, f, g, C) {
    for (
      var B = null, I = null, A = f, j = (f = 0), z = null;
      A !== null && j < g.length;
      j++
    ) {
      A.index > j ? ((z = A), (A = null)) : (z = A.sibling);
      var D = m(u, A, g[j], C);
      if (D === null) {
        A === null && (A = z);
        break;
      }
      e && A && D.alternate === null && t(u, A),
        (f = l(D, f, j)),
        I === null ? (B = D) : (I.sibling = D),
        (I = D),
        (A = z);
    }
    if (j === g.length) return n(u, A), Ue && Rn(u, j), B;
    if (A === null) {
      for (; j < g.length; j++)
        (A = x(u, g[j], C)),
          A !== null &&
            ((f = l(A, f, j)), I === null ? (B = A) : (I.sibling = A), (I = A));
      return Ue && Rn(u, j), B;
    }
    for (A = r(u, A); j < g.length; j++)
      (z = b(A, u, j, g[j], C)),
        z !== null &&
          (e && z.alternate !== null && A.delete(z.key === null ? j : z.key),
          (f = l(z, f, j)),
          I === null ? (B = z) : (I.sibling = z),
          (I = z));
    return (
      e &&
        A.forEach(function (F) {
          return t(u, F);
        }),
      Ue && Rn(u, j),
      B
    );
  }
  function N(u, f, g, C) {
    var B = Rr(g);
    if (typeof B != "function") throw Error(te(150));
    if (((g = B.call(g)), g == null)) throw Error(te(151));
    for (
      var I = (B = null), A = f, j = (f = 0), z = null, D = g.next();
      A !== null && !D.done;
      j++, D = g.next()
    ) {
      A.index > j ? ((z = A), (A = null)) : (z = A.sibling);
      var F = m(u, A, D.value, C);
      if (F === null) {
        A === null && (A = z);
        break;
      }
      e && A && F.alternate === null && t(u, A),
        (f = l(F, f, j)),
        I === null ? (B = F) : (I.sibling = F),
        (I = F),
        (A = z);
    }
    if (D.done) return n(u, A), Ue && Rn(u, j), B;
    if (A === null) {
      for (; !D.done; j++, D = g.next())
        (D = x(u, D.value, C)),
          D !== null &&
            ((f = l(D, f, j)), I === null ? (B = D) : (I.sibling = D), (I = D));
      return Ue && Rn(u, j), B;
    }
    for (A = r(u, A); !D.done; j++, D = g.next())
      (D = b(A, u, j, D.value, C)),
        D !== null &&
          (e && D.alternate !== null && A.delete(D.key === null ? j : D.key),
          (f = l(D, f, j)),
          I === null ? (B = D) : (I.sibling = D),
          (I = D));
    return (
      e &&
        A.forEach(function (G) {
          return t(u, G);
        }),
      Ue && Rn(u, j),
      B
    );
  }
  function E(u, f, g, C) {
    if (
      (typeof g == "object" &&
        g !== null &&
        g.type === nr &&
        g.key === null &&
        (g = g.props.children),
      typeof g == "object" && g !== null)
    ) {
      switch (g.$$typeof) {
        case Ss:
          e: {
            for (var B = g.key, I = f; I !== null; ) {
              if (I.key === B) {
                if (((B = g.type), B === nr)) {
                  if (I.tag === 7) {
                    n(u, I.sibling),
                      (f = o(I, g.props.children)),
                      (f.return = u),
                      (u = f);
                    break e;
                  }
                } else if (
                  I.elementType === B ||
                  (typeof B == "object" &&
                    B !== null &&
                    B.$$typeof === pn &&
                    Vi(B) === I.type)
                ) {
                  n(u, I.sibling),
                    (f = o(I, g.props)),
                    (f.ref = Lr(u, I, g)),
                    (f.return = u),
                    (u = f);
                  break e;
                }
                n(u, I);
                break;
              } else t(u, I);
              I = I.sibling;
            }
            g.type === nr
              ? ((f = Un(g.props.children, u.mode, C, g.key)),
                (f.return = u),
                (u = f))
              : ((C = Js(g.type, g.key, g.props, null, u.mode, C)),
                (C.ref = Lr(u, f, g)),
                (C.return = u),
                (u = C));
          }
          return a(u);
        case tr:
          e: {
            for (I = g.key; f !== null; ) {
              if (f.key === I)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === g.containerInfo &&
                  f.stateNode.implementation === g.implementation
                ) {
                  n(u, f.sibling),
                    (f = o(f, g.children || [])),
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
            (f = hl(g, u.mode, C)), (f.return = u), (u = f);
          }
          return a(u);
        case pn:
          return (I = g._init), E(u, f, I(g._payload), C);
      }
      if (Fr(g)) return v(u, f, g, C);
      if (Rr(g)) return N(u, f, g, C);
      As(u, g);
    }
    return (typeof g == "string" && g !== "") || typeof g == "number"
      ? ((g = "" + g),
        f !== null && f.tag === 6
          ? (n(u, f.sibling), (f = o(f, g)), (f.return = u), (u = f))
          : (n(u, f), (f = ml(g, u.mode, C)), (f.return = u), (u = f)),
        a(u))
      : n(u, f);
  }
  return E;
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
      if (ho === null) throw Error(te(308));
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
  if (((r = r.shared), Pe & 2)) {
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
    var x = o.baseState;
    (a = 0), (d = h = c = null), (i = l);
    do {
      var m = i.lane,
        b = i.eventTime;
      if ((r & m) === m) {
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
          switch (((m = t), (b = n), N.tag)) {
            case 1:
              if (((v = N.payload), typeof v == "function")) {
                x = v.call(b, x, m);
                break e;
              }
              x = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = N.payload),
                (m = typeof v == "function" ? v.call(b, x, m) : v),
                m == null)
              )
                break e;
              x = Ge({}, x, m);
              break e;
            case 2:
              mn = !0;
          }
        }
        i.callback !== null &&
          i.lane !== 0 &&
          ((e.flags |= 64),
          (m = o.effects),
          m === null ? (o.effects = [i]) : m.push(i));
      } else
        (b = {
          eventTime: b,
          lane: m,
          tag: i.tag,
          payload: i.payload,
          callback: i.callback,
          next: null,
        }),
          d === null ? ((h = d = b), (c = x)) : (d = d.next = b),
          (a |= m);
      if (((i = i.next), i === null)) {
        if (((i = o.shared.pending), i === null)) break;
        (m = i),
          (i = m.next),
          (m.next = null),
          (o.lastBaseUpdate = m),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (d === null && (c = x),
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
    (Gn |= a), (e.lanes = a), (e.memoizedState = x);
  }
}
function qi(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(te(191, o));
        o.call(r);
      }
    }
}
var bs = {},
  Jt = En(bs),
  ds = En(bs),
  fs = En(bs);
function $n(e) {
  if (e === bs) throw Error(te(174));
  return e;
}
function Ua(e, t) {
  switch ((Oe(fs, t), Oe(ds, e), Oe(Jt, bs), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Dl(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Dl(t, e));
  }
  Le(Jt), Oe(Jt, t);
}
function jr() {
  Le(Jt), Le(ds), Le(fs);
}
function $u(e) {
  $n(fs.current);
  var t = $n(Jt.current),
    n = Dl(t, e.type);
  t !== n && (Oe(ds, e), Oe(Jt, n));
}
function Ba(e) {
  ds.current === e && (Le(Jt), Le(ds));
}
var ze = En(0);
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
function za() {
  for (var e = 0; e < il.length; e++)
    il[e]._workInProgressVersionPrimary = null;
  il.length = 0;
}
var qs = un.ReactCurrentDispatcher,
  cl = un.ReactCurrentBatchConfig,
  Fn = 0,
  Fe = null,
  Xe = null,
  Ze = null,
  yo = !1,
  Xr = !1,
  ps = 0,
  Xp = 0;
function st() {
  throw Error(te(321));
}
function Fa(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ht(e[n], t[n])) return !1;
  return !0;
}
function Ga(e, t, n, r, o, l) {
  if (
    ((Fn = l),
    (Fe = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (qs.current = e === null || e.memoizedState === null ? em : tm),
    (e = n(r, o)),
    Xr)
  ) {
    l = 0;
    do {
      if (((Xr = !1), (ps = 0), 25 <= l)) throw Error(te(301));
      (l += 1),
        (Ze = Xe = null),
        (t.updateQueue = null),
        (qs.current = nm),
        (e = n(r, o));
    } while (Xr);
  }
  if (
    ((qs.current = vo),
    (t = Xe !== null && Xe.next !== null),
    (Fn = 0),
    (Ze = Xe = Fe = null),
    (yo = !1),
    t)
  )
    throw Error(te(300));
  return e;
}
function Ha() {
  var e = ps !== 0;
  return (ps = 0), e;
}
function Yt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Ze === null ? (Fe.memoizedState = Ze = e) : (Ze = Ze.next = e), Ze;
}
function At() {
  if (Xe === null) {
    var e = Fe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Xe.next;
  var t = Ze === null ? Fe.memoizedState : Ze.next;
  if (t !== null) (Ze = t), (Xe = e);
  else {
    if (e === null) throw Error(te(310));
    (Xe = e),
      (e = {
        memoizedState: Xe.memoizedState,
        baseState: Xe.baseState,
        baseQueue: Xe.baseQueue,
        queue: Xe.queue,
        next: null,
      }),
      Ze === null ? (Fe.memoizedState = Ze = e) : (Ze = Ze.next = e);
  }
  return Ze;
}
function ms(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ul(e) {
  var t = At(),
    n = t.queue;
  if (n === null) throw Error(te(311));
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
      if ((Fn & d) === d)
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
        var x = {
          lane: d,
          action: h.action,
          hasEagerState: h.hasEagerState,
          eagerState: h.eagerState,
          next: null,
        };
        c === null ? ((i = c = x), (a = r)) : (c = c.next = x),
          (Fe.lanes |= d),
          (Gn |= d);
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
    do (l = o.lane), (Fe.lanes |= l), (Gn |= l), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function dl(e) {
  var t = At(),
    n = t.queue;
  if (n === null) throw Error(te(311));
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
  var n = Fe,
    r = At(),
    o = t(),
    l = !Ht(r.memoizedState, o);
  if (
    (l && ((r.memoizedState = o), (ht = !0)),
    (r = r.queue),
    Va(Fu.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || l || (Ze !== null && Ze.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      hs(9, zu.bind(null, n, r, o, t), void 0, null),
      et === null)
    )
      throw Error(te(349));
    Fn & 30 || Bu(n, t, o);
  }
  return o;
}
function Bu(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Fe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Fe.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function zu(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Gu(t) && Hu(e);
}
function Fu(e, t, n) {
  return n(function () {
    Gu(t) && Hu(e);
  });
}
function Gu(e) {
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
  t !== null && Gt(t, e, 1, -1);
}
function Qi(e) {
  var t = Yt();
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
    (e = e.dispatch = Zp.bind(null, Fe, e)),
    [t.memoizedState, e]
  );
}
function hs(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Fe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Fe.updateQueue = t),
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
function Qs(e, t, n, r) {
  var o = Yt();
  (Fe.flags |= e),
    (o.memoizedState = hs(1 | t, n, void 0, r === void 0 ? null : r));
}
function Po(e, t, n, r) {
  var o = At();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (Xe !== null) {
    var a = Xe.memoizedState;
    if (((l = a.destroy), r !== null && Fa(r, a.deps))) {
      o.memoizedState = hs(t, n, l, r);
      return;
    }
  }
  (Fe.flags |= e), (o.memoizedState = hs(1 | t, n, l, r));
}
function Yi(e, t) {
  return Qs(8390656, 8, e, t);
}
function Va(e, t) {
  return Po(2048, 8, e, t);
}
function Wu(e, t) {
  return Po(4, 2, e, t);
}
function qu(e, t) {
  return Po(4, 4, e, t);
}
function Qu(e, t) {
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
function Yu(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Po(4, 4, Qu.bind(null, t, e), n)
  );
}
function Wa() {}
function Xu(e, t) {
  var n = At();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Fa(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Ku(e, t) {
  var n = At();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Fa(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Ju(e, t, n) {
  return Fn & 21
    ? (Ht(n, t) || ((n = ru()), (Fe.lanes |= n), (Gn |= n), (e.baseState = !0)),
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
    Gt(n, e, r, o), nd(n, t, r);
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
      n !== null && ((o = ut()), Gt(n, e, r, o), nd(n, t, r));
  }
}
function ed(e) {
  var t = e.alternate;
  return e === Fe || (t !== null && t === Fe);
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
      return (Yt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Tt,
    useEffect: Yi,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Qs(4194308, 4, Qu.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Qs(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Qs(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Yt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Yt();
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
        (e = e.dispatch = Jp.bind(null, Fe, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Yt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Qi,
    useDebugValue: Wa,
    useDeferredValue: function (e) {
      return (Yt().memoizedState = e);
    },
    useTransition: function () {
      var e = Qi(!1),
        t = e[0];
      return (e = Kp.bind(null, e[1])), (Yt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Fe,
        o = Yt();
      if (Ue) {
        if (n === void 0) throw Error(te(407));
        n = n();
      } else {
        if (((n = t()), et === null)) throw Error(te(349));
        Fn & 30 || Bu(r, t, n);
      }
      o.memoizedState = n;
      var l = { value: n, getSnapshot: t };
      return (
        (o.queue = l),
        Yi(Fu.bind(null, r, l, e), [e]),
        (r.flags |= 2048),
        hs(9, zu.bind(null, r, l, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Yt(),
        t = et.identifierPrefix;
      if (Ue) {
        var n = rn,
          r = nn;
        (n = (r & ~(1 << (32 - Ft(r) - 1))).toString(32) + n),
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
    useImperativeHandle: Yu,
    useInsertionEffect: Wu,
    useLayoutEffect: qu,
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
    useImperativeHandle: Yu,
    useInsertionEffect: Wu,
    useLayoutEffect: qu,
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
    (t = Ge({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ql(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Ge({}, t, n)),
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
      t !== null && (Gt(t, e, o, r), Ws(t, e, o));
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
      t !== null && (Gt(t, e, o, r), Ws(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ut(),
      r = Cn(e),
      o = sn(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = jn(e, o, r)),
      t !== null && (Gt(t, e, r, n), Ws(t, e, r));
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
    o = _n,
    l = t.contextType;
  return (
    typeof l == "object" && l !== null
      ? (l = Tt(l))
      : ((o = yt(t) ? Bn : at.current),
        (r = t.contextTypes),
        (l = (r = r != null) ? wr(e, o) : _n)),
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
function Yl(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), La(e);
  var l = t.contextType;
  typeof l == "object" && l !== null
    ? (o.context = Tt(l))
    : ((l = yt(t) ? Bn : at.current), (o.context = wr(e, l))),
    (o.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l == "function" && (Ql(e, t, l, n), (o.state = e.memoizedState)),
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
    (r = Ga(e, t, n, r, l, o)),
    (n = Ha()),
    e !== null && !ht
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        cn(e, t, o))
      : (Ue && n && Ia(t), (t.flags |= 1), ct(e, t, r, o), t.child)
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
        Oe(fr, bt),
        (bt |= n);
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
          Oe(fr, bt),
          (bt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = l !== null ? l.baseLanes : n),
        Oe(fr, bt),
        (bt |= r);
    }
  else
    l !== null ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n),
      Oe(fr, bt),
      (bt |= r);
  return ct(e, t, o, n), t.child;
}
function id(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Kl(e, t, n, r, o) {
  var l = yt(n) ? Bn : at.current;
  return (
    (l = wr(t, l)),
    xr(t, o),
    (n = Ga(e, t, n, r, l, o)),
    (r = Ha()),
    e !== null && !ht
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        cn(e, t, o))
      : (Ue && r && Ia(t), (t.flags |= 1), ct(e, t, n, o), t.child)
  );
}
function rc(e, t, n, r, o) {
  if (yt(n)) {
    var l = !0;
    uo(t);
  } else l = !1;
  if ((xr(t, o), t.stateNode === null))
    Ys(e, t), rd(t, n, r), Yl(t, n, r, o), (r = !0);
  else if (e === null) {
    var a = t.stateNode,
      i = t.memoizedProps;
    a.props = i;
    var c = a.context,
      h = n.contextType;
    typeof h == "object" && h !== null
      ? (h = Tt(h))
      : ((h = yt(n) ? Bn : at.current), (h = wr(t, h)));
    var d = n.getDerivedStateFromProps,
      x =
        typeof d == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    x ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((i !== r || c !== h) && Ki(t, a, r, h)),
      (mn = !1);
    var m = t.memoizedState;
    (a.state = m),
      go(t, r, a, o),
      (c = t.memoizedState),
      i !== r || m !== c || xt.current || mn
        ? (typeof d == "function" && (Ql(t, n, d, r), (c = t.memoizedState)),
          (i = mn || Xi(t, n, i, r, m, c, h))
            ? (x ||
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
      (x = t.pendingProps),
      (m = a.context),
      (c = n.contextType),
      typeof c == "object" && c !== null
        ? (c = Tt(c))
        : ((c = yt(n) ? Bn : at.current), (c = wr(t, c)));
    var b = n.getDerivedStateFromProps;
    (d =
      typeof b == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((i !== x || m !== c) && Ki(t, a, r, c)),
      (mn = !1),
      (m = t.memoizedState),
      (a.state = m),
      go(t, r, a, o);
    var v = t.memoizedState;
    i !== x || m !== v || xt.current || mn
      ? (typeof b == "function" && (Ql(t, n, b, r), (v = t.memoizedState)),
        (h = mn || Xi(t, n, h, r, m, v, c) || !1)
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
              (i === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (i === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (a.props = r),
        (a.state = v),
        (a.context = c),
        (r = h))
      : (typeof a.componentDidUpdate != "function" ||
          (i === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" ||
          (i === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Jl(e, t, n, r, l, o);
}
function Jl(e, t, n, r, o, l) {
  id(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return o && Fi(t, n, !1), cn(e, t, l);
  (r = t.stateNode), (sm.current = t);
  var i =
    a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = Nr(t, e.child, null, l)), (t.child = Nr(t, null, i, l)))
      : ct(e, t, i, l),
    (t.memoizedState = r.state),
    o && Fi(t, n, !0),
    t.child
  );
}
function cd(e) {
  var t = e.stateNode;
  t.pendingContext
    ? zi(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && zi(e, t.context, !1),
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
    o = ze.current,
    l = !1,
    a = (t.flags & 128) !== 0,
    i;
  if (
    ((i = a) ||
      (i = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    i
      ? ((l = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    Oe(ze, o & 1),
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
            : qa(t, a))
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
function qa(e, t) {
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
    (e = qa(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function om(e, t, n, r, o, l, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = fl(Error(te(422)))), Os(e, t, a, r))
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
    return (
      (r = i), (l = Error(te(419))), (r = fl(l, r, void 0)), Os(e, t, a, r)
    );
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
          ((l.retryLane = o), an(e, o), Gt(r, e, o, -1));
    }
    return Za(), (r = fl(Error(te(421)))), Os(e, t, a, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = ym.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = l.treeContext),
      (Nt = Nn(o.nextSibling)),
      (jt = t),
      (Ue = !0),
      (zt = null),
      e !== null &&
        ((_t[Mt++] = nn),
        (_t[Mt++] = rn),
        (_t[Mt++] = zn),
        (nn = e.id),
        (rn = e.overflow),
        (zn = t)),
      (t = qa(t, r.children)),
      (t.flags |= 4096),
      t);
}
function oc(e, t, n) {
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
function dd(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    l = r.tail;
  if ((ct(e, t, r.children, n), (r = ze.current), r & 2))
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
  if ((Oe(ze, r), !(t.mode & 1))) t.memoizedState = null;
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
function Ys(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function cn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Gn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(te(153));
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
      yt(t.type) && uo(t);
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
          ? (Oe(ze, ze.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? ud(e, t, n)
          : (Oe(ze, ze.current & 1),
            (e = cn(e, t, n)),
            e !== null ? e.sibling : null);
      Oe(ze, ze.current & 1);
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
        Oe(ze, ze.current),
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
        (o = Ge({}, o, { value: void 0 })),
          (r = Ge({}, r, { value: void 0 })),
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
    _l(n, r);
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
  switch ((Pa(t), t.tag)) {
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
      return yt(t.type) && co(), ot(t), null;
    case 3:
      return (
        (r = t.stateNode),
        jr(),
        Le(xt),
        Le(at),
        za(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ts(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), zt !== null && (ca(zt), (zt = null)))),
        ta(e, t),
        ot(t),
        null
      );
    case 5:
      Ba(t);
      var o = $n(fs.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        pd(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(te(166));
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
          _l(n, l), (o = null);
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
            e === "http://www.w3.org/1999/xhtml" && (e = Fc(n)),
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
                  (o = Ge({}, r, { value: void 0 })),
                  $e("invalid", e);
                break;
              case "textarea":
                gi(e, r), (o = kl(e, r)), $e("invalid", e);
                break;
              default:
                o = r;
            }
            _l(n, o), (i = o);
            for (l in i)
              if (i.hasOwnProperty(l)) {
                var c = i[l];
                l === "style"
                  ? Vc(e, c)
                  : l === "dangerouslySetInnerHTML"
                  ? ((c = c ? c.__html : void 0), c != null && Gc(e, c))
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
                r.value != null && e.setAttribute("value", "" + Dn(r.value));
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
        if (typeof r != "string" && t.stateNode === null) throw Error(te(166));
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
        (Le(ze),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Ue && Nt !== null && t.mode & 1 && !(t.flags & 128))
          Pu(), br(), (t.flags |= 98560), (l = !1);
        else if (((l = Ts(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(te(318));
            if (
              ((l = t.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(te(317));
            l[Xt] = t;
          } else
            br(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ot(t), (l = !1);
        } else zt !== null && (ca(zt), (zt = null)), (l = !0);
        if (!l) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ze.current & 1 ? Ke === 0 && (Ke = 3) : Za())),
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
      return yt(t.type) && co(), ot(t), null;
    case 19:
      if ((Le(ze), (l = t.memoizedState), l === null)) return ot(t), null;
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
                return Oe(ze, (ze.current & 1) | 2), t.child;
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
          (n = ze.current),
          Oe(ze, r ? (n & 1) | 2 : n & 1),
          t)
        : (ot(t), null);
    case 22:
    case 23:
      return (
        Ja(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? bt & 1073741824 && (ot(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ot(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(te(156, t.tag));
}
function im(e, t) {
  switch ((Pa(t), t.tag)) {
    case 1:
      return (
        yt(t.type) && co(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        jr(),
        Le(xt),
        Le(at),
        za(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Ba(t), null;
    case 13:
      if (
        (Le(ze), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(te(340));
        br();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Le(ze), null;
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
  me = null;
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
            x = e,
            m = null;
          t: for (;;) {
            for (
              var b;
              x !== n || (o !== 0 && x.nodeType !== 3) || (i = a + o),
                x !== l || (r !== 0 && x.nodeType !== 3) || (c = a + r),
                x.nodeType === 3 && (a += x.nodeValue.length),
                (b = x.firstChild) !== null;

            )
              (m = x), (x = b);
            for (;;) {
              if (x === e) break t;
              if (
                (m === n && ++h === o && (i = a),
                m === l && ++d === r && (c = a),
                (b = x.nextSibling) !== null)
              )
                break;
              (x = m), (m = x.parentNode);
            }
            x = b;
          }
          n = i === -1 || c === -1 ? null : { start: i, end: c };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (
    Bl = { focusedElem: e, selectionRange: n }, oo = !1, me = t;
    me !== null;

  )
    if (((t = me), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (me = e);
    else
      for (; me !== null; ) {
        t = me;
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
                    E = v.memoizedState,
                    u = t.stateNode,
                    f = u.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? N : Ut(t.type, N),
                      E
                    );
                  u.__reactInternalSnapshotBeforeUpdate = f;
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
                throw Error(te(163));
            }
        } catch (C) {
          He(t, t.return, C);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (me = e);
          break;
        }
        me = t.return;
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
        (delete t[Xt], delete t[us], delete t[Gl], delete t[Wp], delete t[qp])),
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
  Bt = !1;
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
        o = Bt;
      (tt = null),
        fn(e, t, n),
        (tt = r),
        (Bt = o),
        tt !== null &&
          (Bt
            ? ((e = tt),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : tt.removeChild(n.stateNode));
      break;
    case 18:
      tt !== null &&
        (Bt
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
        (o = Bt),
        (tt = n.stateNode.containerInfo),
        (Bt = !0),
        fn(e, t, n),
        (tt = r),
        (Bt = o);
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
              (tt = i.stateNode), (Bt = !1);
              break e;
            case 3:
              (tt = i.stateNode.containerInfo), (Bt = !0);
              break e;
            case 4:
              (tt = i.stateNode.containerInfo), (Bt = !0);
              break e;
          }
          i = i.return;
        }
        if (tt === null) throw Error(te(160));
        xd(l, a, o), (tt = null), (Bt = !1);
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
      if ((Lt(t, e), qt(e), r & 4)) {
        try {
          Kr(3, e, e.return), To(3, e);
        } catch (N) {
          He(e, e.return, N);
        }
        try {
          Kr(5, e, e.return);
        } catch (N) {
          He(e, e.return, N);
        }
      }
      break;
    case 1:
      Lt(t, e), qt(e), r & 512 && n !== null && dr(n, n.return);
      break;
    case 5:
      if (
        (Lt(t, e),
        qt(e),
        r & 512 && n !== null && dr(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          ts(o, "");
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
            i === "input" && l.type === "radio" && l.name != null && Bc(o, l),
              Ml(i, a);
            var h = Ml(i, l);
            for (a = 0; a < c.length; a += 2) {
              var d = c[a],
                x = c[a + 1];
              d === "style"
                ? Vc(o, x)
                : d === "dangerouslySetInnerHTML"
                ? Gc(o, x)
                : d === "children"
                ? ts(o, x)
                : xa(o, d, x, h);
            }
            switch (i) {
              case "input":
                Sl(o, l);
                break;
              case "textarea":
                zc(o, l);
                break;
              case "select":
                var m = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!l.multiple;
                var b = l.value;
                b != null
                  ? pr(o, !!l.multiple, b, !1)
                  : m !== !!l.multiple &&
                    (l.defaultValue != null
                      ? pr(o, !!l.multiple, l.defaultValue, !0)
                      : pr(o, !!l.multiple, l.multiple ? [] : "", !1));
            }
            o[us] = l;
          } catch (N) {
            He(e, e.return, N);
          }
      }
      break;
    case 6:
      if ((Lt(t, e), qt(e), r & 4)) {
        if (e.stateNode === null) throw Error(te(162));
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
        (Lt(t, e), qt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          os(t.containerInfo);
        } catch (N) {
          He(e, e.return, N);
        }
      break;
    case 4:
      Lt(t, e), qt(e);
      break;
    case 13:
      Lt(t, e),
        qt(e),
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
        qt(e),
        r & 8192)
      ) {
        if (
          ((h = e.memoizedState !== null),
          (e.stateNode.isHidden = h) && !d && e.mode & 1)
        )
          for (me = e, d = e.child; d !== null; ) {
            for (x = me = d; me !== null; ) {
              switch (((m = me), (b = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Kr(4, m, m.return);
                  break;
                case 1:
                  dr(m, m.return);
                  var v = m.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
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
                  dr(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    uc(x);
                    continue;
                  }
              }
              b !== null ? ((b.return = m), (me = b)) : uc(x);
            }
            d = d.sibling;
          }
        e: for (d = null, x = e; ; ) {
          if (x.tag === 5) {
            if (d === null) {
              d = x;
              try {
                (o = x.stateNode),
                  h
                    ? ((l = o.style),
                      typeof l.setProperty == "function"
                        ? l.setProperty("display", "none", "important")
                        : (l.display = "none"))
                    : ((i = x.stateNode),
                      (c = x.memoizedProps.style),
                      (a =
                        c != null && c.hasOwnProperty("display")
                          ? c.display
                          : null),
                      (i.style.display = Hc("display", a)));
              } catch (N) {
                He(e, e.return, N);
              }
            }
          } else if (x.tag === 6) {
            if (d === null)
              try {
                x.stateNode.nodeValue = h ? "" : x.memoizedProps;
              } catch (N) {
                He(e, e.return, N);
              }
          } else if (
            ((x.tag !== 22 && x.tag !== 23) ||
              x.memoizedState === null ||
              x === e) &&
            x.child !== null
          ) {
            (x.child.return = x), (x = x.child);
            continue;
          }
          if (x === e) break e;
          for (; x.sibling === null; ) {
            if (x.return === null || x.return === e) break e;
            d === x && (d = null), (x = x.return);
          }
          d === x && (d = null), (x.sibling.return = x.return), (x = x.sibling);
        }
      }
      break;
    case 19:
      Lt(t, e), qt(e), r & 4 && ic(e);
      break;
    case 21:
      break;
    default:
      Lt(t, e), qt(e);
  }
}
function qt(e) {
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
        throw Error(te(160));
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
          throw Error(te(161));
      }
    } catch (c) {
      He(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function dm(e, t, n) {
  (me = e), vd(e);
}
function vd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; me !== null; ) {
    var o = me,
      l = o.child;
    if (o.tag === 22 && r) {
      var a = o.memoizedState !== null || $s;
      if (!a) {
        var i = o.alternate,
          c = (i !== null && i.memoizedState !== null) || lt;
        i = $s;
        var h = lt;
        if ((($s = a), (lt = c) && !h))
          for (me = o; me !== null; )
            (a = me),
              (c = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? dc(o)
                : c !== null
                ? ((c.return = a), (me = c))
                : dc(o);
        for (; l !== null; ) (me = l), vd(l), (l = l.sibling);
        (me = o), ($s = i), (lt = h);
      }
      cc(e);
    } else
      o.subtreeFlags & 8772 && l !== null ? ((l.return = o), (me = l)) : cc(e);
  }
}
function cc(e) {
  for (; me !== null; ) {
    var t = me;
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
              l !== null && qi(t, l, r);
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
                qi(t, a, n);
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
                    var x = d.dehydrated;
                    x !== null && os(x);
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
              throw Error(te(163));
          }
        lt || (t.flags & 512 && ra(t));
      } catch (m) {
        He(t, t.return, m);
      }
    }
    if (t === e) {
      me = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (me = n);
      break;
    }
    me = t.return;
  }
}
function uc(e) {
  for (; me !== null; ) {
    var t = me;
    if (t === e) {
      me = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (me = n);
      break;
    }
    me = t.return;
  }
}
function dc(e) {
  for (; me !== null; ) {
    var t = me;
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
      me = null;
      break;
    }
    var i = t.sibling;
    if (i !== null) {
      (i.return = t.return), (me = i);
      break;
    }
    me = t.return;
  }
}
var fm = Math.ceil,
  wo = un.ReactCurrentDispatcher,
  Qa = un.ReactCurrentOwner,
  It = un.ReactCurrentBatchConfig,
  Pe = 0,
  et = null,
  qe = null,
  nt = 0,
  bt = 0,
  fr = En(0),
  Ke = 0,
  gs = null,
  Gn = 0,
  Ao = 0,
  Ya = 0,
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
  return Pe & 6 ? We() : Xs !== -1 ? Xs : (Xs = We());
}
function Cn(e) {
  return e.mode & 1
    ? Pe & 2 && nt !== 0
      ? nt & -nt
      : Yp.transition !== null
      ? (Ks === 0 && (Ks = ru()), Ks)
      : ((e = Te),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : uu(e.type))),
        e)
    : 1;
}
function Gt(e, t, n, r) {
  if (50 < Zr) throw ((Zr = 0), (aa = null), Error(te(185)));
  ys(e, n, r),
    (!(Pe & 2) || e !== et) &&
      (e === et && (!(Pe & 2) && (Ao |= n), Ke === 4 && gn(e, nt)),
      vt(e, r),
      n === 1 && Pe === 0 && !(t.mode & 1) && ((Cr = We() + 500), Io && In()));
}
function vt(e, t) {
  var n = e.callbackNode;
  Yf(e, t);
  var r = so(e, e === et ? nt : 0);
  if (r === 0)
    n !== null && wi(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && wi(n), t === 1))
      e.tag === 0 ? Qp(fc.bind(null, e)) : Mu(fc.bind(null, e)),
        Hp(function () {
          !(Pe & 6) && In();
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
      n = Dd(n, wd.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function wd(e, t) {
  if (((Xs = -1), (Ks = 0), Pe & 6)) throw Error(te(327));
  var n = e.callbackNode;
  if (yr() && e.callbackNode !== n) return null;
  var r = so(e, e === et ? nt : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = jo(e, r);
  else {
    t = r;
    var o = Pe;
    Pe |= 2;
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
      (Pe = o),
      qe !== null ? (t = 0) : ((et = null), (nt = 0), (t = Ke));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Tl(e)), o !== 0 && ((r = o), (t = ia(e, o)))), t === 1)
    )
      throw ((n = gs), Ln(e, 0), gn(e, r), vt(e, We()), n);
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
        throw ((n = gs), Ln(e, 0), gn(e, r), vt(e, We()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(te(345));
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
            e.timeoutHandle = Fl(Tn.bind(null, e, mt, Zt), t);
            break;
          }
          Tn(e, mt, Zt);
          break;
        case 4:
          if ((gn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var a = 31 - Ft(r);
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
            e.timeoutHandle = Fl(Tn.bind(null, e, mt, Zt), r);
            break;
          }
          Tn(e, mt, Zt);
          break;
        case 5:
          Tn(e, mt, Zt);
          break;
        default:
          throw Error(te(329));
      }
    }
  }
  return vt(e, We()), e.callbackNode === n ? wd.bind(null, e) : null;
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
    t &= ~Ya,
      t &= ~Ao,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ft(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function fc(e) {
  if (Pe & 6) throw Error(te(327));
  yr();
  var t = so(e, 0);
  if (!(t & 1)) return vt(e, We()), null;
  var n = jo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Tl(e);
    r !== 0 && ((t = r), (n = ia(e, r)));
  }
  if (n === 1) throw ((n = gs), Ln(e, 0), gn(e, t), vt(e, We()), n);
  if (n === 6) throw Error(te(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Tn(e, mt, Zt),
    vt(e, We()),
    null
  );
}
function Ka(e, t) {
  var n = Pe;
  Pe |= 1;
  try {
    return e(t);
  } finally {
    (Pe = n), Pe === 0 && ((Cr = We() + 500), Io && In());
  }
}
function Hn(e) {
  yn !== null && yn.tag === 0 && !(Pe & 6) && yr();
  var t = Pe;
  Pe |= 1;
  var n = It.transition,
    r = Te;
  try {
    if (((It.transition = null), (Te = 1), e)) return e();
  } finally {
    (Te = r), (It.transition = n), (Pe = t), !(Pe & 6) && In();
  }
}
function Ja() {
  (bt = fr.current), Le(fr);
}
function Ln(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Gp(n)), qe !== null))
    for (n = qe.return; n !== null; ) {
      var r = n;
      switch ((Pa(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && co();
          break;
        case 3:
          jr(), Le(xt), Le(at), za();
          break;
        case 5:
          Ba(r);
          break;
        case 4:
          jr();
          break;
        case 13:
          Le(ze);
          break;
        case 19:
          Le(ze);
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
    (qe = e = kn(e.current, null)),
    (nt = bt = t),
    (Ke = 0),
    (gs = null),
    (Ya = Ao = Gn = 0),
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
    var n = qe;
    try {
      if ((Aa(), (qs.current = vo), yo)) {
        for (var r = Fe.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        yo = !1;
      }
      if (
        ((Fn = 0),
        (Ze = Xe = Fe = null),
        (Xr = !1),
        (ps = 0),
        (Qa.current = null),
        n === null || n.return === null)
      ) {
        (Ke = 1), (gs = t), (qe = null);
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
            x = d.tag;
          if (!(d.mode & 1) && (x === 0 || x === 11 || x === 15)) {
            var m = d.alternate;
            m
              ? ((d.updateQueue = m.updateQueue),
                (d.memoizedState = m.memoizedState),
                (d.lanes = m.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var b = Zi(a);
          if (b !== null) {
            (b.flags &= -257),
              ec(b, a, i, l, t),
              b.mode & 1 && Ji(l, h, t),
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
              Ji(l, h, t), Za();
              break e;
            }
            c = Error(te(426));
          }
        } else if (Ue && i.mode & 1) {
          var E = Zi(a);
          if (E !== null) {
            !(E.flags & 65536) && (E.flags |= 256),
              ec(E, a, i, l, t),
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
                g = l.stateNode;
              if (
                !(l.flags & 128) &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (g !== null &&
                    typeof g.componentDidCatch == "function" &&
                    (Sn === null || !Sn.has(g))))
              ) {
                (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                var C = od(l, i, t);
                Wi(l, C);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      Sd(n);
    } catch (B) {
      (t = B), qe === n && n !== null && (qe = n = n.return);
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
    et === null || (!(Gn & 268435455) && !(Ao & 268435455)) || gn(et, nt);
}
function jo(e, t) {
  var n = Pe;
  Pe |= 2;
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
  if ((Aa(), (Pe = n), (wo.current = r), qe !== null)) throw Error(te(261));
  return (et = null), (nt = 0), Ke;
}
function mm() {
  for (; qe !== null; ) jd(qe);
}
function hm() {
  for (; qe !== null && !Bf(); ) jd(qe);
}
function jd(e) {
  var t = kd(e.alternate, e, bt);
  (e.memoizedProps = e.pendingProps),
    t === null ? Sd(e) : (qe = t),
    (Qa.current = null);
}
function Sd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = im(n, t)), n !== null)) {
        (n.flags &= 32767), (qe = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Ke = 6), (qe = null);
        return;
      }
    } else if (((n = am(n, t, bt)), n !== null)) {
      qe = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      qe = t;
      return;
    }
    qe = t = e;
  } while (t !== null);
  Ke === 0 && (Ke = 5);
}
function Tn(e, t, n) {
  var r = Te,
    o = It.transition;
  try {
    (It.transition = null), (Te = 1), gm(e, t, n, r);
  } finally {
    (It.transition = o), (Te = r);
  }
  return null;
}
function gm(e, t, n, r) {
  do yr();
  while (yn !== null);
  if (Pe & 6) throw Error(te(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(te(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var l = n.lanes | n.childLanes;
  if (
    (Xf(e, l),
    e === et && ((qe = et = null), (nt = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ls ||
      ((Ls = !0),
      Dd(ro, function () {
        return yr(), null;
      })),
    (l = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || l)
  ) {
    (l = It.transition), (It.transition = null);
    var a = Te;
    Te = 1;
    var i = Pe;
    (Pe |= 4),
      (Qa.current = null),
      um(e, n),
      yd(n, e),
      Op(Bl),
      (oo = !!Ul),
      (Bl = Ul = null),
      (e.current = n),
      dm(n),
      zf(),
      (Pe = i),
      (Te = a),
      (It.transition = l);
  } else e.current = n;
  if (
    (Ls && ((Ls = !1), (yn = e), (No = o)),
    (l = e.pendingLanes),
    l === 0 && (Sn = null),
    Hf(n.stateNode),
    vt(e, We()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (bo) throw ((bo = !1), (e = la), (la = null), e);
  return (
    No & 1 && e.tag !== 0 && yr(),
    (l = e.pendingLanes),
    l & 1 ? (e === aa ? Zr++ : ((Zr = 0), (aa = e))) : (Zr = 0),
    In(),
    null
  );
}
function yr() {
  if (yn !== null) {
    var e = su(No),
      t = It.transition,
      n = Te;
    try {
      if (((It.transition = null), (Te = 16 > e ? 16 : e), yn === null))
        var r = !1;
      else {
        if (((e = yn), (yn = null), (No = 0), Pe & 6)) throw Error(te(331));
        var o = Pe;
        for (Pe |= 4, me = e.current; me !== null; ) {
          var l = me,
            a = l.child;
          if (me.flags & 16) {
            var i = l.deletions;
            if (i !== null) {
              for (var c = 0; c < i.length; c++) {
                var h = i[c];
                for (me = h; me !== null; ) {
                  var d = me;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Kr(8, d, l);
                  }
                  var x = d.child;
                  if (x !== null) (x.return = d), (me = x);
                  else
                    for (; me !== null; ) {
                      d = me;
                      var m = d.sibling,
                        b = d.return;
                      if ((hd(d), d === h)) {
                        me = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = b), (me = m);
                        break;
                      }
                      me = b;
                    }
                }
              }
              var v = l.alternate;
              if (v !== null) {
                var N = v.child;
                if (N !== null) {
                  v.child = null;
                  do {
                    var E = N.sibling;
                    (N.sibling = null), (N = E);
                  } while (N !== null);
                }
              }
              me = l;
            }
          }
          if (l.subtreeFlags & 2064 && a !== null) (a.return = l), (me = a);
          else
            e: for (; me !== null; ) {
              if (((l = me), l.flags & 2048))
                switch (l.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Kr(9, l, l.return);
                }
              var u = l.sibling;
              if (u !== null) {
                (u.return = l.return), (me = u);
                break e;
              }
              me = l.return;
            }
        }
        var f = e.current;
        for (me = f; me !== null; ) {
          a = me;
          var g = a.child;
          if (a.subtreeFlags & 2064 && g !== null) (g.return = a), (me = g);
          else
            e: for (a = f; me !== null; ) {
              if (((i = me), i.flags & 2048))
                try {
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      To(9, i);
                  }
                } catch (B) {
                  He(i, i.return, B);
                }
              if (i === a) {
                me = null;
                break e;
              }
              var C = i.sibling;
              if (C !== null) {
                (C.return = i.return), (me = C);
                break e;
              }
              me = i.return;
            }
        }
        if (
          ((Pe = o), In(), Kt && typeof Kt.onPostCommitFiberRoot == "function")
        )
          try {
            Kt.onPostCommitFiberRoot(ko, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (Te = n), (It.transition = t);
    }
  }
  return !1;
}
function pc(e, t, n) {
  (t = Sr(n, t)),
    (t = sd(e, t, 1)),
    (e = jn(e, t, 1)),
    (t = ut()),
    e !== null && (ys(e, 1, t), vt(e, t));
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
            t !== null && (ys(t, 1, e), vt(t, e));
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
        : (Ya |= n)),
    vt(e, t);
}
function Cd(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = _s), (_s <<= 1), !(_s & 130023424) && (_s = 4194304))
      : (t = 1));
  var n = ut();
  (e = an(e, t)), e !== null && (ys(e, t, n), vt(e, n));
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
      throw Error(te(314));
  }
  r !== null && r.delete(t), Cd(e, n);
}
var kd;
kd = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || xt.current) ht = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ht = !1), lm(e, t, n);
      ht = !!(e.flags & 131072);
    }
  else (ht = !1), Ue && t.flags & 1048576 && Eu(t, po, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Ys(e, t), (e = t.pendingProps);
      var o = wr(t, at.current);
      xr(t, n), (o = Ga(null, t, r, e, o, n));
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
            yt(r) ? ((l = !0), uo(t)) : (l = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            La(t),
            (o.updater = Ro),
            (t.stateNode = o),
            (o._reactInternals = t),
            Yl(t, r, e, n),
            (t = Jl(null, t, r, !0, l, n)))
          : ((t.tag = 0), Ue && l && Ia(t), ct(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ys(e, t),
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
        throw Error(te(306, r, ""));
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
        if ((cd(t), e === null)) throw Error(te(387));
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
            (o = Sr(Error(te(423)), t)), (t = sc(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = Sr(Error(te(424)), t)), (t = sc(e, t, r, n, o));
            break e;
          } else
            for (
              Nt = Nn(t.stateNode.containerInfo.firstChild),
                jt = t,
                Ue = !0,
                zt = null,
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
        zl(r, o) ? (a = null) : l !== null && zl(r, l) && (t.flags |= 32),
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
            if (l.children === o.children && !xt.current) {
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
                      ql(l.return, n, t),
                      (i.lanes |= n);
                    break;
                  }
                  c = c.next;
                }
              } else if (l.tag === 10) a = l.type === t.type ? null : l.child;
              else if (l.tag === 18) {
                if (((a = l.return), a === null)) throw Error(te(341));
                (a.lanes |= n),
                  (i = a.alternate),
                  i !== null && (i.lanes |= n),
                  ql(a, n, t),
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
        Ys(e, t),
        (t.tag = 1),
        yt(r) ? ((e = !0), uo(t)) : (e = !1),
        xr(t, n),
        rd(t, r, o),
        Yl(t, r, o, n),
        Jl(null, t, r, !0, e, n)
      );
    case 19:
      return dd(e, t, n);
    case 22:
      return ad(e, t, n);
  }
  throw Error(te(156, t.tag));
};
function Dd(e, t) {
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
        throw Error(te(130, e == null ? e : typeof e, ""));
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
    (this.eventTimes = Yo(0)),
    (this.expirationTimes = Yo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Yo(0)),
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
function _d(e) {
  if (!e) return _n;
  e = e._reactInternals;
  e: {
    if (Wn(e) !== e || e.tag !== 1) throw Error(te(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (yt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(te(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (yt(n)) return _u(e, n, t);
  }
  return t;
}
function Md(e, t, n, r, o, l, a, i, c) {
  return (
    (e = ti(n, r, !0, e, o, l, a, i, c)),
    (e.context = _d(null)),
    (n = e.current),
    (r = ut()),
    (o = Cn(n)),
    (l = sn(r, o)),
    (l.callback = t ?? null),
    jn(n, l, o),
    (e.current.lanes = o),
    ys(e, o, r),
    vt(e, r),
    e
  );
}
function $o(e, t, n, r) {
  var o = t.current,
    l = ut(),
    a = Cn(o);
  return (
    (n = _d(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = sn(l, a)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = jn(o, t, a)),
    e !== null && (Gt(e, o, a, l), Ws(e, o, a)),
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
  if (t === null) throw Error(te(409));
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
function Bo(e, t, n, r, o) {
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
        var n = Gr(t.pendingLanes);
        n !== 0 &&
          (ja(t, n | 1), vt(t, We()), !(Pe & 6) && ((Cr = We() + 500), In()));
      }
      break;
    case 13:
      Hn(function () {
        var r = an(e, 1);
        if (r !== null) {
          var o = ut();
          Gt(r, e, 1, o);
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
      Gt(t, e, 134217728, n);
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
      Gt(n, e, t, r);
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
Il = function (e, t, n) {
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
            if (!o) throw Error(te(90));
            Uc(r), Sl(r, o);
          }
        }
      }
      break;
    case "textarea":
      zc(e, n);
      break;
    case "select":
      (t = n.value), t != null && pr(e, !!n.multiple, t, !1);
  }
};
Qc = Ka;
Yc = Hn;
var km = { usingClientEntryPoint: !1, Events: [ws, lr, Eo, Wc, qc, Ka] },
  Br = {
    findFiberByHostInstance: An,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Dm = {
    bundleType: Br.bundleType,
    version: Br.version,
    rendererPackageName: Br.rendererPackageName,
    rendererConfig: Br.rendererConfig,
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
    findFiberByHostInstance: Br.findFiberByHostInstance || Sm,
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
      (ko = Us.inject(Dm)), (Kt = Us);
    } catch {}
}
Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = km;
Ct.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!si(t)) throw Error(te(200));
  return jm(e, t, null, n);
};
Ct.createRoot = function (e, t) {
  if (!si(e)) throw Error(te(299));
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
      ? Error(te(188))
      : ((e = Object.keys(e).join(",")), Error(te(268, e)));
  return (e = Jc(t)), (e = e === null ? null : e.stateNode), e;
};
Ct.flushSync = function (e) {
  return Hn(e);
};
Ct.hydrate = function (e, t, n) {
  if (!Uo(t)) throw Error(te(200));
  return Bo(null, e, t, !0, n);
};
Ct.hydrateRoot = function (e, t, n) {
  if (!si(e)) throw Error(te(405));
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
  if (!Uo(t)) throw Error(te(200));
  return Bo(null, e, t, !1, n);
};
Ct.unmountComponentAtNode = function (e) {
  if (!Uo(e)) throw Error(te(40));
  return e._reactRootContainer
    ? (Hn(function () {
        Bo(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[ln] = null);
        });
      }),
      !0)
    : !1;
};
Ct.unstable_batchedUpdates = Ka;
Ct.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Uo(n)) throw Error(te(200));
  if (e == null || e._reactInternals === void 0) throw Error(te(38));
  return Bo(e, t, n, !1, r);
};
Ct.version = "18.3.1-next-f1338f8080-20240426";
function Id() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Id);
    } catch (e) {
      console.error(e);
    }
}
Id(), (Ic.exports = Ct);
var _m = Ic.exports,
  Pd,
  gc = _m;
(Pd = gc.createRoot), gc.hydrateRoot;
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
  async getAllStaffInfo() {
    return this.request("/api/person_page/get_all", {
      method: "POST",
      body: JSON.stringify({}),
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
                Master_GUID: l.Master_GUID,
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
                    Master_GUID: c.Master_GUID,
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
                  let x = 0;
                  Array.isArray(c.shelf) &&
                    c.shelf.forEach((m, b) => {
                      let v = {
                        GUID: m.GUID,
                        Master_GUID: m.Master_GUID,
                        name: `層架_${b}`,
                        class: 3,
                        gird_position: m.position,
                        serverName: m.serverName || "",
                        serverType: m.serverType || "",
                        type: m.type,
                        contents: [],
                      };
                      if (
                        (v.serverName &&
                          (v.serverName = t.sys_ServerSetting.name),
                        v.serverType &&
                          (v.serverType = t.sys_ServerSetting.type),
                        m.type == "dispensing_shelves" || m.type == "shelf")
                      )
                        m.type == "shelf" && (v.type = "dispensing_shelves"),
                          Array.isArray(m.medMapBox) &&
                            m.medMapBox.forEach((E, u) => {
                              let f = {
                                  GUID: E.GUID,
                                  Master_GUID: E.Master_GUID,
                                  name: "藥盒",
                                  class: 4,
                                  gird_position: E.position,
                                  ip: E.ip_box,
                                  box_type: "",
                                  width: E.width,
                                  height: E.height,
                                  serverType: E.serverType,
                                  serverName: E.serverName,
                                  med_info: [],
                                  type: "med_box",
                                },
                                g = {},
                                C = m.position.split(","),
                                B = E.position.split(",");
                              if (E.storage) {
                                switch (
                                  ((f.device_type = E.storage.DeviceType),
                                  (f.storage = E.storage),
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
                                (g.name = E.storage.Name),
                                  (g.code = E.storage.Code),
                                  (g.cht_name = E.storage.ChineseName),
                                  (g.SKDIACODE = E.storage.SKDIACODE),
                                  (g.qty = E.storage.StorageName),
                                  (g.stockCol = `${+C[0] + 1}`),
                                  (g.stockRow = ""),
                                  (g.stock = `${+B[1] + 1}`);
                              } else
                                (f.device_type = 10),
                                  (f.box_type = "2.9"),
                                  (g.name = ""),
                                  (g.code = ""),
                                  (g.cht_name = ""),
                                  (g.stockCol = `${+C[0] + 1}`),
                                  (g.stockRow = ""),
                                  (g.stock = `${+B[1] + 1}`);
                              o.contents[a].med_list.push(g),
                                (f.med_info[0] = g),
                                v.contents.push(f);
                            });
                      else {
                        (v.type = "store_shelves"),
                          (v.ip = m.ip_light),
                          (v.width = m.width),
                          (v.height = m.height);
                        const E = m.medMapStock.sort((u, f) => {
                          const [g] = u.location.split(",").map(Number),
                            [C] = f.location.split(",").map(Number);
                          return g - C;
                        });
                        (v.medMapStock = E),
                          (v.name = m.name),
                          E.forEach((u, f) => {
                            let g = m.position.split(",");
                            if (u.code) {
                              let C = {};
                              (C.name = u.name),
                                (C.code = u.code),
                                (C.cht_name = ""),
                                (C.SKDIACODE = u.material_no),
                                (C.qty = u.qty),
                                (C.stockCol = `${+g[0] + 1}`),
                                (C.stockRow = `${+g[1] + 1}`),
                                (C.stock = `${f + 1}`),
                                o.contents[a].med_list.push(C);
                            }
                          });
                      }
                      let N = m.position.split(",")[1];
                      x < +N &&
                        ((x = +N), (o.contents[a].contents[h].oriMaxCol = +x)),
                        o.contents[a].contents[h].contents.push(v);
                    }),
                    Array.isArray(c.drawer) &&
                      c.drawer.forEach((m, b) => {
                        let v = {
                          GUID: m.GUID,
                          Master_GUID: m.Master_GUID,
                          name: `抽屜 ${b}`,
                          class: 3,
                          gird_position: m.position,
                          ip: m.ip_drawer,
                          serverName: m.serverName,
                          serverType: m.serverType,
                        };
                        v.serverName &&
                          (v.serverName = t.sys_ServerSetting.name),
                          v.serverType &&
                            (v.serverType = t.sys_ServerSetting.type),
                          m.drawer
                            ? ((v.drawer = m.drawer),
                              m.drawer.Boxes &&
                                ((v.type = "grid_draw"),
                                (v.name = m.drawer.Name),
                                (v.Boxes = []),
                                Array.isArray(m.drawer.Boxes)
                                  ? m.drawer.Boxes.forEach((u, f) => {
                                      let g = [];
                                      Array.isArray(u) &&
                                        u.forEach((C, B) => {
                                          let I = {
                                            Row: C.Row,
                                            Column: C.Column,
                                            Width: 1,
                                            Height: 1,
                                            Slave: C.Slave,
                                            SlaveBox_Row: C.SlaveBox_Row,
                                            SlaveBox_Column: C.SlaveBox_Column,
                                            MasterBox_Column:
                                              C.MasterBox_Column,
                                            MasterBox_Row: C.MasterBox_Row,
                                            Name: C.Name,
                                            Code: C.Code,
                                            ChineseName: C.ChineseName,
                                            GUID: C.GUID,
                                          };
                                          g.push(I),
                                            C.Code &&
                                              o.contents[a].med_list.push(
                                                C.Code
                                              );
                                        }),
                                        v.Boxes.push(g);
                                    })
                                  : (v.Boxes = m.drawer.Boxes)))
                            : ((v.type = "list_draw"),
                              (v.name = `清單抽屜 ${b}`));
                        let N = m.position.split(",")[1];
                        x < +N &&
                          ((x = +N),
                          (o.contents[a].contents[h].oriMaxCol = +x)),
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
      Master_GUID: r,
    };
    return (
      t.components &&
        Array.isArray(t.components) &&
        (o.components = t.components.map((d, x) =>
          this.convertSingleComponent(d, x, o.GUID)
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
const Pt = new Em(),
  Im = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Pt },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Rd = p.createContext(void 0),
  Pm = ({ children: e }) => {
    const [t, n] = p.useState(!1),
      [r, o] = p.useState(null),
      [l, a] = p.useState(!1),
      [i, c] = p.useState(null),
      [h, d] = p.useState(null),
      [x, m] = p.useState("medicine"),
      [b, v] = p.useState(!1),
      [N, E] = p.useState(0),
      [u, f] = p.useState({ message: "", type: "success", isVisible: !1 }),
      [g, C] = p.useState(!1),
      [B, I] = p.useState(null),
      [A, j] = p.useState("edit"),
      [z, D] = p.useState(!1),
      [F, G] = p.useState(null),
      [P, M] = p.useState(!1),
      [ee, w] = p.useState(null),
      [O, S] = p.useState(!1),
      [Q, ie] = p.useState(!1),
      [X, oe] = p.useState(null),
      [Ne, le] = p.useState(!1),
      [ye, U] = p.useState(null),
      [ae, R] = p.useState(!1),
      [J, ce] = p.useState(null),
      [Se, L] = p.useState(!1),
      [_, re] = p.useState(null),
      [T, k] = p.useState(null),
      [$, V] = p.useState("add"),
      [se, ue] = p.useState(!1),
      [ve, be] = p.useState([]),
      [je, De] = p.useState([]),
      [fe, he] = p.useState(!1),
      [we, _e] = p.useState(!1),
      [Ve, Ce] = p.useState(""),
      [Ye, Be] = p.useState(!1),
      [wt, it] = p.useState(""),
      [Pn, Vt] = p.useState(!1),
      [Fo, y] = p.useState(null),
      [q, Y] = p.useState(null),
      H = () => {
        sessionStorage.removeItem("user_session"), n(!1), o(null);
      },
      ne = p.useCallback(() => {
        E((Me) => Me + 1);
      }, []),
      W = p.useCallback((Me, Dt) => {
        f({ message: Me, type: Dt, isVisible: !0 });
      }, []),
      pe = p.useCallback(() => {
        f((Me) => ({ ...Me, isVisible: !1 }));
      }, []),
      de = (Me) => {
        I(Me), j("edit"), C(!0);
      },
      Z = () => {
        const Me = {
          GUID: `new_medbox_${Date.now()}`,
          name: "",
          box_type: "",
          width: [],
          width_index: 0,
          med_info: [],
          parentShelf: null,
        };
        I(Me), j("add"), C(!0);
      },
      K = () => {
        C(!1), I(null), j("edit");
      },
      xe = (Me) => {
        G(Me), D(!0);
      },
      ge = () => {
        D(!1), G(null);
      },
      Ie = (Me) => {
        w(Me), M(!0);
      },
      Re = () => {
        M(!1), w(null);
      },
      Ot = (Me) => {
        oe(Me), ie(!0);
      },
      qn = () => {
        ie(!1), oe(null);
      },
      Er = (Me) => {
        U(Me), le(!0);
      },
      Wt = () => {
        le(!1), U(null);
      },
      Ir = (Me) => {
        ce(Me), R(!0);
      },
      Pr = () => {
        R(!1), ce(null);
      },
      zd = (Me) => {
        re(Me), k(null), V("add"), L(!0);
      },
      Fd = (Me, Dt) => {
        re(Me), k(Dt), V("edit"), L(!0);
      },
      Gd = () => {
        L(!1), re(null), k(null), V("add");
      },
      Hd = () => {
        ue(!0);
      },
      Vd = () => {
        ue(!1);
      },
      Wd = (Me = "") => {
        Ce(Me), _e(!0);
      },
      qd = () => {
        _e(!1);
      },
      Qd = (Me) => {
        it(Me), Be(!0);
      },
      Yd = () => {
        Be(!1), it("");
      },
      Xd = (Me, Dt) => {
        y(Me), Y(Dt || null), Vt(!0);
      },
      Kd = () => {
        Vt(!1), y(null), Y(null);
      },
      Jd = p.useCallback(async () => {
        if (!i) {
          console.warn("沒有選擇部門分類，無法重新載入資料");
          return;
        }
        console.log("🔄 重新載入藥品地圖資料，部門類型:", i), S(!0);
        try {
          const Me = await ke.getMedMapByDepartment(i);
          if (Me.Code === 200 && Me.Data) {
            console.log("📡 重新載入成功:", Me.Data);
            const Dt = Pt.convertMedMapApiToFakeData(Me.Data);
            if (!Pt.validateConvertedData(Dt)) {
              console.error("❌ 轉換後的資料驗證失敗"), d(null);
              return;
            }
            d(Dt), console.log("✅ 地圖資料已重新載入");
          } else console.error("❌ API 回傳錯誤:", Me), d(null);
        } catch (Me) {
          console.error("💥 重新載入藥品地圖資料失敗:", Me), d(null);
        } finally {
          S(!1);
        }
      }, [i, S, d]),
      Zd = p.useCallback((Me, Dt) => {
        d(
          (Qn) =>
            Qn &&
            Qn.map((li) => {
              const Yn = { ...li };
              return (
                Yn.contents &&
                  (Yn.contents = Yn.contents.map((Xn) => {
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
                                    ($t.medMapStock = [...$t.medMapStock, Dt]),
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
                Yn
              );
            })
        );
      }, []),
      ef = p.useCallback((Me, Dt, Qn) => {
        d(
          (Ns) =>
            Ns &&
            Ns.map((Yn) => {
              const Xn = { ...Yn };
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
                                    (ai.medMapStock = $t.medMapStock.map((Go) =>
                                      Go.GUID === Dt ? { ...Go, ...Qn } : Go
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
        logout: H,
        sidebarOpen: l,
        setSidebarOpen: a,
        selectedDepartmentType: i,
        setSelectedDepartmentType: c,
        isAdminMode: b,
        setIsAdminMode: v,
        apiDepartmentData: h,
        setApiDepartmentData: d,
        viewMode: x,
        setViewMode: m,
        refreshTrigger: N,
        triggerRefresh: ne,
        addStockToShelf: Zd,
        notification: u,
        showNotification: W,
        hideNotification: pe,
        medBoxModalOpen: g,
        setMedBoxModalOpen: C,
        selectedMedBox: B,
        setSelectedMedBox: I,
        openMedBoxModal: de,
        closeMedBoxModal: K,
        modalMode: A,
        setModalMode: j,
        openAddMedBoxModal: Z,
        listDrawModalOpen: z,
        setListDrawModalOpen: D,
        selectedListDraw: F,
        setSelectedListDraw: G,
        openListDrawModal: xe,
        closeListDrawModal: ge,
        gridDrawModalOpen: P,
        setGridDrawModalOpen: M,
        selectedGridDraw: ee,
        setSelectedGridDraw: w,
        openGridDrawModal: Ie,
        closeGridDrawModal: Re,
        isLoadingMedMap: O,
        setIsLoadingMedMap: S,
        addParentContainerModalOpen: Q,
        setAddParentContainerModalOpen: ie,
        selectedDepartmentForAdd: X,
        setSelectedDepartmentForAdd: oe,
        openAddParentContainerModal: Ot,
        closeAddParentContainerModal: qn,
        addShelfDrawContainerModalOpen: Ne,
        setAddShelfDrawContainerModalOpen: le,
        selectedSubContainerForAdd: ye,
        setSelectedSubContainerForAdd: U,
        openAddShelfDrawContainerModal: Er,
        closeAddShelfDrawContainerModal: Wt,
        addSubContainerModalOpen: ae,
        setAddSubContainerModalOpen: R,
        selectedParentContainerForAdd: J,
        setSelectedParentContainerForAdd: ce,
        openAddSubContainerModal: Ir,
        closeAddSubContainerModal: Pr,
        addStoreItemModalOpen: Se,
        setAddStoreItemModalOpen: L,
        selectedStoreShelfForAdd: _,
        setSelectedStoreShelfForAdd: re,
        selectedStockItemForEdit: T,
        setSelectedStockItemForEdit: k,
        storeItemModalMode: $,
        setStoreItemModalMode: V,
        openAddStoreItemModal: zd,
        openEditStoreItemModal: Fd,
        closeAddStoreItemModal: Gd,
        updateStockInShelf: ef,
        addDepartmentModalOpen: se,
        setAddDepartmentModalOpen: ue,
        allDepartmentsList: ve,
        setAllDepartmentsList: be,
        openAddDepartmentModal: Hd,
        closeAddDepartmentModal: Vd,
        reloadMedMapData: Jd,
        qrCodeScannerModalOpen: we,
        qrCodeScannerMode: Ve,
        setQRCodeScannerModalOpen: _e,
        openQRCodeScannerModal: Wd,
        closeQRCodeScannerModal: qd,
        addBarcodeModalOpen: Ye,
        setAddBarcodeModalOpen: Be,
        openAddBarcodeModal: Qd,
        closeAddBarcodeModal: Yd,
        initialBarcodeValue: wt,
        containerDetailModalOpen: Pn,
        setContainerDetailModalOpen: Vt,
        selectedContainerForDetail: Fo,
        setSelectedContainerForDetail: y,
        highlightedMedicineCode: q,
        setHighlightedMedicineCode: Y,
        openContainerDetailModal: Xd,
        closeContainerDetailModal: Kd,
        medicineList: je,
        setMedicineList: De,
        isLoadingMedicines: fe,
        setIsLoadingMedicines: he,
      },
      children: e,
    });
  },
  Je = () => {
    const e = p.useContext(Rd);
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
  Td = p.createContext(void 0),
  Tm = ({ children: e }) => {
    const [t, n] = p.useState("zh-TW"),
      r = (o) => Rm[t][o] || o;
    return s.jsx(Td.Provider, {
      value: { language: t, setLanguage: n, t: r },
      children: e,
    });
  },
  pt = () => {
    const e = p.useContext(Td);
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
    const n = p.forwardRef(
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
        p.createElement(
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
            ...t.map(([x, m]) => p.createElement(x, m)),
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
 */ const Bm = Ae("ChevronUp", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zm = Ae("EyeOff", [
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
 */ const Fm = Ae("Eye", [
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
 */ const Gm = Ae("Globe", [
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
 */ const qm = Ae("Pill", [
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
 */ const gt = Ae("Plus", [
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
 */ const Qm = Ae("Trash2", [
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
 */ const Xm = Ae("XCircle", [
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
  Km = () => {
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
  Jm = () => {
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
      [x, m] = Zs.useState(!1),
      b = () => {
        h(c === "zh-TW" ? "en" : "zh-TW");
      },
      v = Zs.useMemo(() => {
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
                        s.jsx(qm, { className: "w-4 h-4" }),
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
                  onClick: () => m(!x),
                  className:
                    "lg:hidden flex items-center justify-center p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 rounded-lg transition-colors",
                  children: x
                    ? s.jsx(Bm, { className: "w-4 h-4" })
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
              x
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
                          s.jsx(gt, { className: "w-4 h-4" }),
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
                    s.jsx(Gm, { className: "w-4 h-4" }),
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
  Zm = [
    {
      name: "藍色",
      value: "blue",
      bgr: "255,0,0",
      bgColor: "white",
      textColor: "text-black",
    },
    {
      name: "綠色",
      value: "green",
      bgr: "0,255,0",
      bgColor: "white",
      textColor: "text-black",
    },
    {
      name: "紅色",
      value: "red",
      bgr: "0,0,255",
      bgColor: "white",
      textColor: "text-black",
    },
    {
      name: "黃色",
      value: "yellow",
      bgr: "0,255,255",
      bgColor: "white",
      textColor: "text-black",
    },
    {
      name: "紫色",
      value: "purple",
      bgr: "255,0,255",
      bgColor: "white",
      textColor: "text-black",
    },
    {
      name: "青色",
      value: "cyan",
      bgr: "255,255,0",
      bgColor: "white",
      textColor: "text-black",
    },
  ],
  eh = ({ isOpen: e, onClose: t }) => {
    const [n, r] = p.useState("blue"),
      [o, l] = p.useState(1),
      [a, i] = p.useState(60),
      [c, h] = p.useState(""),
      [d, x] = p.useState(""),
      [m, b] = p.useState([]),
      [v, N] = p.useState([]),
      [E, u] = p.useState([]),
      [f, g] = p.useState(!1),
      [C, B] = p.useState(!1),
      I = p.useRef(null),
      A = p.useRef(null),
      j = p.useRef(null),
      z = p.useRef(null);
    p.useEffect(() => {
      if (e) {
        const w = localStorage.getItem("medMap_setting");
        if (w)
          try {
            const O = JSON.parse(w);
            r(O.light_color || "blue"),
              l(O.brightness !== void 0 ? O.brightness : 1),
              i(O.light_sec !== void 0 ? O.light_sec : 60),
              h(O.default_person || ""),
              x(O.default_person_id || "");
          } catch (O) {
            console.error("讀取設定失敗:", O),
              r("blue"),
              l(1),
              i(60),
              h(""),
              x("");
          }
        else r("blue"), l(1), i(60), h(""), x("");
        D();
      }
    }, [e]),
      p.useEffect(() => {
        const w = (O) => {
          j.current &&
            !j.current.contains(O.target) &&
            I.current &&
            !I.current.contains(O.target) &&
            g(!1),
            z.current &&
              !z.current.contains(O.target) &&
              A.current &&
              !A.current.contains(O.target) &&
              B(!1);
        };
        return (
          document.addEventListener("mousedown", w),
          () => document.removeEventListener("mousedown", w)
        );
      }, []);
    const D = async () => {
        try {
          const w = await ke.getAllStaffInfo();
          w.Code === 200 && w.Data && b(w.Data);
        } catch (w) {
          console.error("獲取人員資料失敗:", w);
        }
      },
      F = (w) => {
        if ((h(w), w.trim() === "")) {
          N([]), g(!1);
          return;
        }
        const O = m.filter(
          (S) => S.name && S.name.toLowerCase().includes(w.toLowerCase())
        );
        N(O), g(O.length > 0);
      },
      G = (w) => {
        if ((x(w), w.trim() === "")) {
          u([]), B(!1);
          return;
        }
        const O = m.filter(
          (S) => S.ID && S.ID.toLowerCase().includes(w.toLowerCase())
        );
        u(O), B(O.length > 0);
      },
      P = (w) => {
        h(w.name), x(w.ID), g(!1);
      },
      M = (w) => {
        h(w.name), x(w.ID), B(!1);
      },
      ee = () => {
        const w = {
          light_color: n,
          brightness: o,
          light_sec: a,
          default_person: c,
          default_person_id: d,
        };
        localStorage.setItem("medMap_setting", JSON.stringify(w)),
          console.log("設定已儲存:", w),
          t();
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
                "relative bg-white rounded-xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto",
              children: [
                s.jsxs("div", {
                  className:
                    "flex items-center justify-between p-4 border-b border-gray-200 sticky top-0 bg-white z-10",
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
                s.jsxs("div", {
                  className: "p-6 space-y-6",
                  children: [
                    s.jsxs("div", {
                      children: [
                        s.jsx("label", {
                          className:
                            "block text-sm font-medium text-gray-700 mb-3",
                          children: "預設撥補/申領人員",
                        }),
                        s.jsxs("div", {
                          className: "grid grid-cols-2 gap-3",
                          children: [
                            s.jsxs("div", {
                              className: "relative",
                              children: [
                                s.jsx("label", {
                                  className: "block text-xs text-gray-600 mb-1",
                                  children: "人員名稱",
                                }),
                                s.jsx("input", {
                                  ref: I,
                                  type: "text",
                                  value: c,
                                  onChange: (w) => F(w.target.value),
                                  onFocus: () => {
                                    c.trim() && F(c);
                                  },
                                  placeholder: "請輸入人員名稱",
                                  className:
                                    "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                                }),
                                f &&
                                  s.jsx("div", {
                                    ref: j,
                                    className:
                                      "absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto",
                                    children: v.map((w, O) =>
                                      s.jsxs(
                                        "div",
                                        {
                                          onClick: () => P(w),
                                          className:
                                            "px-4 py-2 hover:bg-blue-50 cursor-pointer transition-colors",
                                          children: [
                                            s.jsx("div", {
                                              className:
                                                "font-medium text-gray-900",
                                              children: w.name,
                                            }),
                                            s.jsx("div", {
                                              className:
                                                "text-xs text-gray-500",
                                              children: w.ID,
                                            }),
                                          ],
                                        },
                                        O
                                      )
                                    ),
                                  }),
                              ],
                            }),
                            s.jsxs("div", {
                              className: "relative",
                              children: [
                                s.jsx("label", {
                                  className: "block text-xs text-gray-600 mb-1",
                                  children: "人員 ID",
                                }),
                                s.jsx("input", {
                                  ref: A,
                                  type: "text",
                                  value: d,
                                  onChange: (w) => G(w.target.value),
                                  onFocus: () => {
                                    d.trim() && G(d);
                                  },
                                  placeholder: "請輸入人員 ID",
                                  className:
                                    "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                                }),
                                C &&
                                  s.jsx("div", {
                                    ref: z,
                                    className:
                                      "absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto",
                                    children: E.map((w, O) =>
                                      s.jsxs(
                                        "div",
                                        {
                                          onClick: () => M(w),
                                          className:
                                            "px-4 py-2 hover:bg-blue-50 cursor-pointer transition-colors",
                                          children: [
                                            s.jsx("div", {
                                              className:
                                                "font-medium text-gray-900",
                                              children: w.ID,
                                            }),
                                            s.jsx("div", {
                                              className:
                                                "text-xs text-gray-500",
                                              children: w.name,
                                            }),
                                          ],
                                        },
                                        O
                                      )
                                    ),
                                  }),
                              ],
                            }),
                          ],
                        }),
                        s.jsx("p", {
                          className: "mt-2 text-xs text-gray-500",
                          children: "設定後將自動填入撥補/申領表單中",
                        }),
                      ],
                    }),
                    s.jsxs("div", {
                      children: [
                        s.jsx("label", {
                          className:
                            "block text-sm font-medium text-gray-700 mb-3",
                          children: "亮燈顏色 (BGR)",
                        }),
                        s.jsx("div", {
                          className: "grid grid-cols-3 gap-3",
                          children: Zm.map((w) =>
                            s.jsxs(
                              "button",
                              {
                                onClick: () => r(w.value),
                                className: `
                    relative p-3 rounded-lg border-2 transition-all
                    ${w.bgColor} ${w.textColor}
                    ${
                      n === w.value
                        ? "border-gray-900 shadow-lg scale-105"
                        : "border-gray-300 hover:border-gray-400 hover:shadow-md"
                    }
                  `,
                                children: [
                                  s.jsxs("div", {
                                    className: "text-center",
                                    children: [
                                      s.jsx("div", {
                                        className: "font-semibold text-sm mb-1",
                                        children: w.name,
                                      }),
                                      s.jsx("div", {
                                        className: "text-xs opacity-90",
                                        children: w.bgr,
                                      }),
                                    ],
                                  }),
                                  n === w.value &&
                                    s.jsx("div", {
                                      className:
                                        "absolute top-1 right-1 w-3 h-3 bg-white rounded-full border-2 border-gray-900",
                                    }),
                                ],
                              },
                              w.value
                            )
                          ),
                        }),
                      ],
                    }),
                    s.jsxs("div", {
                      children: [
                        s.jsxs("label", {
                          className:
                            "block text-sm font-medium text-gray-700 mb-2",
                          children: ["亮度: ", o.toFixed(1)],
                        }),
                        s.jsxs("div", {
                          className: "relative",
                          children: [
                            s.jsx("input", {
                              type: "range",
                              min: "0",
                              max: "1",
                              step: "0.1",
                              value: o,
                              onChange: (w) => l(parseFloat(w.target.value)),
                              className:
                                "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600",
                              style: {
                                background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${
                                  o * 100
                                }%, #e5e7eb ${o * 100}%, #e5e7eb 100%)`,
                              },
                            }),
                            s.jsxs("div", {
                              className:
                                "flex justify-between text-xs text-gray-500 mt-1",
                              children: [
                                s.jsx("span", { children: "0" }),
                                s.jsx("span", { children: "0.5" }),
                                s.jsx("span", { children: "1" }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    s.jsxs("div", {
                      children: [
                        s.jsxs("label", {
                          className:
                            "block text-sm font-medium text-gray-700 mb-2",
                          children: ["自動滅燈時間 (秒): ", a],
                        }),
                        s.jsxs("div", {
                          className: "relative",
                          children: [
                            s.jsx("input", {
                              type: "range",
                              min: "1",
                              max: "120",
                              step: "1",
                              value: a,
                              onChange: (w) => i(parseInt(w.target.value)),
                              className:
                                "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600",
                              style: {
                                background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${
                                  ((a - 1) / 119) * 100
                                }%, #e5e7eb ${
                                  ((a - 1) / 119) * 100
                                }%, #e5e7eb 100%)`,
                              },
                            }),
                            s.jsxs("div", {
                              className:
                                "flex justify-between text-xs text-gray-500 mt-1",
                              children: [
                                s.jsx("span", { children: "5秒" }),
                                s.jsx("span", { children: "60秒" }),
                                s.jsx("span", { children: "120秒" }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                s.jsxs("div", {
                  className:
                    "flex justify-end gap-3 p-4 border-t border-gray-200 bg-gray-50 rounded-b-xl sticky bottom-0",
                  children: [
                    s.jsx("button", {
                      onClick: t,
                      className:
                        "px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors",
                      children: "取消",
                    }),
                    s.jsx("button", {
                      onClick: ee,
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
  th = () => {
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
      [x, m] = p.useState(new Set()),
      [b, v] = p.useState([]),
      [N, E] = p.useState(!0),
      [u, f] = p.useState([]),
      [g, C] = p.useState(!1),
      B = () => {
        c
          ? h(!1)
          : prompt("請輸入後台密碼：") === "66437068"
          ? h(!0)
          : alert("密碼錯誤，無法開啟後台模式");
      };
    p.useEffect(() => {
      (async () => {
        E(!0);
        try {
          const F = await ke.getDepartments();
          F.Code === 200 && F.Data
            ? (console.log(F.Data), v(F.Data), i(F.Data))
            : (console.error("API returned error:", F), v([]), i([]));
        } catch (F) {
          console.error("Failed to fetch department data:", F), v([]), i([]);
        } finally {
          E(!1);
        }
      })();
    }, []);
    const I = b.reduce((D, F) => {
        const G = F["department_type "];
        return D[G] || (D[G] = []), D[G].push(F), D;
      }, {}),
      A = (D) => {
        const F = new Set(x);
        F.has(D) ? F.delete(D) : F.add(D), m(F);
      },
      j = async (D) => {
        console.log("🏢 選擇部門:", D), r(D), await z(D), t(!1);
      },
      z = async (D) => {
        console.log("🚀 開始取得藥品地圖資料，部門類型:", D), a(!0);
        try {
          const F = await ke.getMedMapByDepartment(D);
          if (F.Code === 200 && F.Data) {
            console.log("📡 API 回傳成功:", F.Data);
            const G = Pt.convertMedMapApiToFakeData(F.Data);
            if (!Pt.validateConvertedData(G)) {
              console.error("❌ 轉換後的資料驗證失敗"), f([]);
              return;
            }
            const M = Pt.generateConversionReport(F.Data, G);
            f(G),
              o(G),
              console.log("💾 已暫存轉換後的資料到狀態中"),
              console.log("📊 最終轉換結果:", G),
              console.log("📋 轉換報告:", M);
          } else console.error("❌ API 回傳錯誤:", F), f([]), o(null);
        } catch (F) {
          console.error("💥 取得藥品地圖資料失敗:", F), f([]), o(null);
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
                        Object.entries(I).map(([D, F]) =>
                          s.jsxs(
                            "div",
                            {
                              className: "space-y-1",
                              children: [
                                s.jsxs("button", {
                                  onClick: () => j(D),
                                  disabled: l,
                                  className: `w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 border ${
                                    n === D
                                      ? "bg-blue-50 text-blue-700 border-blue-200 shadow-sm"
                                      : "text-gray-700 hover:bg-gray-50 hover:shadow-sm border-transparent"
                                  } ${
                                    l ? "opacity-50 cursor-not-allowed" : ""
                                  }`,
                                  children: [
                                    s.jsxs("div", {
                                      className: "flex items-center space-x-3",
                                      children: [
                                        D === "B1F"
                                          ? s.jsx(Ad, { className: "w-4 h-4" })
                                          : s.jsx(Ym, { className: "w-4 h-4" }),
                                        s.jsxs("div", {
                                          className: "text-left",
                                          children: [
                                            s.jsx("div", {
                                              className: "font-medium",
                                              children: D,
                                            }),
                                            s.jsxs("div", {
                                              className:
                                                "text-xs text-gray-500",
                                              children: [
                                                F.length,
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
                                        G.stopPropagation(), A(D);
                                      },
                                      className:
                                        "p-1 hover:bg-gray-200/50 rounded transition-colors",
                                      children: x.has(D)
                                        ? s.jsx(Od, { className: "w-4 h-4" })
                                        : s.jsx(Um, { className: "w-4 h-4" }),
                                    }),
                                  ],
                                }),
                                x.has(D) &&
                                  s.jsx("div", {
                                    className: "ml-6 space-y-2",
                                    children: F.map((G) =>
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
                            D
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
                          onClick: B,
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
                      onClick: () => C(!0),
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
        s.jsx(eh, { isOpen: g, onClose: () => C(!1) }),
      ],
    });
  },
  nh = () => {
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
  rh = ({
    component: e,
    scale: t,
    isLocked: n,
    isHighlighted: r = !1,
    onContainerClick: o,
  }) => {
    const l = p.useRef(null),
      { t: a } = pt(),
      {
        apiDepartmentData: i,
        setApiDepartmentData: c,
        showNotification: h,
      } = Je(),
      [d, x] = p.useState(!1),
      [m, b] = p.useState({ x: 0, y: 0 }),
      [v, N] = p.useState(e.position),
      [E, u] = p.useState(!1),
      [f, g] = p.useState(null),
      [C, B] = p.useState({ x: 0, y: 0 }),
      [I, A] = p.useState({ x: 0, y: 0 }),
      j = p.useCallback(
        async (U, ae) => {
          if (!i) return;
          console.log("🔄 更新組件位置:", U, ae);
          const R = JSON.parse(JSON.stringify(i)),
            J = (Se) => {
              for (const L of Se) {
                if (L.GUID === U)
                  return (
                    (L.position = { x: ae.x.toFixed(3), y: ae.y.toFixed(3) }),
                    console.log(
                      "✅ 組件位置已更新:",
                      L.name,
                      ae.x.toFixed(3),
                      ae.y.toFixed(3)
                    ),
                    !0
                  );
                if (
                  (L.components &&
                    Array.isArray(L.components) &&
                    J(L.components)) ||
                  (L.contents && Array.isArray(L.contents) && J(L.contents))
                )
                  return !0;
              }
              return !1;
            };
          if (J(R)) {
            c(R), console.log("💾 全域資料已更新");
            try {
              console.log("📡 開始同步後端位置資料...");
              const Se = await ke.updateContainerPosition({
                GUID: U,
                absolute_position: `${ae.x.toFixed(3)},${ae.y.toFixed(3)}`,
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
          } else console.warn("⚠️ 未找到要更新的組件:", U);
        },
        [i, c, h]
      ),
      { position: z, dimensions: D, name: F, type: G } = e,
      P = p.useCallback(
        (U) => {
          const ae = l.current;
          if (ae)
            if ((A({ x: U.clientX, y: U.clientY }), n)) {
              U.preventDefault(),
                U.stopPropagation(),
                ae.setPointerCapture(U.pointerId);
              const R = ae.getBoundingClientRect(),
                J = U.clientX - R.left,
                ce = U.clientY - R.top;
              b({ x: J, y: ce }), x(!0), u(!1);
            } else u(!1);
        },
        [n]
      ),
      M = p.useCallback(() => {
        if (!i) return [];
        const U = [],
          ae = (R) => {
            for (const J of R)
              J.GUID !== e.GUID &&
                J.position &&
                U.push({
                  GUID: J.GUID,
                  position: J.position,
                  dimensions: J.dimensions,
                }),
                J.components && Array.isArray(J.components) && ae(J.components),
                J.contents && Array.isArray(J.contents) && ae(J.contents);
          };
        return ae(i), U;
      }, [i, e.GUID]),
      ee = p.useCallback(
        (U, ae) => {
          const J = M();
          let ce = U,
            Se = ae;
          for (const L of J) {
            const _ = parseFloat(L.position.x),
              re = parseFloat(L.position.y);
            if (
              (Math.abs(U - _) < 20 && (ce = _),
              Math.abs(ae - re) < 20 && (Se = re),
              L.dimensions && e.dimensions)
            ) {
              const T = _ + parseFloat(L.dimensions.width),
                k = U + parseFloat(e.dimensions.width);
              Math.abs(k - T) < 20 && (ce = T - parseFloat(e.dimensions.width));
              const $ = re + parseFloat(L.dimensions.depth),
                V = ae + parseFloat(e.dimensions.depth);
              Math.abs(V - $) < 20 && (Se = $ - parseFloat(e.dimensions.depth));
            }
          }
          return { x: ce, y: Se };
        },
        [M, e.dimensions]
      ),
      w = p.useCallback(
        (U) => {
          const ae = Math.abs(U.clientX - I.x),
            R = Math.abs(U.clientY - I.y);
          if (((ae > 5 || R > 5) && u(!0), !d || !n)) return;
          U.preventDefault(), U.stopPropagation();
          const J = l.current;
          if (!J) return;
          const ce = J.closest("[data-canvas-content]");
          if (!ce) return;
          const Se = ce.getBoundingClientRect(),
            L = (U.clientX - Se.left - m.x) / t,
            _ = (U.clientY - Se.top - m.y) / t,
            re = ee(L, _);
          N(re);
        },
        [d, m, t, n, ee, I]
      ),
      O = p.useCallback(
        (U) => {
          const ae = Math.abs(U.clientX - I.x),
            R = Math.abs(U.clientY - I.y),
            J = ae > 5 || R > 5;
          if (n) {
            if (!d) return;
            U.preventDefault(), U.stopPropagation();
            const ce = l.current;
            ce && ce.releasePointerCapture(U.pointerId),
              x(!1),
              J ? j(e.GUID, v) : o && o(e),
              u(!1);
          } else
            !J && o && (U.preventDefault(), U.stopPropagation(), o(e)), u(!1);
        },
        [d, n, o, e, j, v, I]
      ),
      S = p.useCallback(
        (U) => {
          const ae = l.current;
          if (!ae) return;
          const R = U.touches[0];
          if (R && (B({ x: R.clientX, y: R.clientY }), n)) {
            U.preventDefault(), U.stopPropagation(), g(R.identifier);
            const J = ae.getBoundingClientRect(),
              ce = R.clientX - J.left,
              Se = R.clientY - J.top;
            b({ x: ce, y: Se }), x(!0);
          }
        },
        [n]
      ),
      Q = p.useCallback(
        (U) => {
          if (!d || !n || f === null) return;
          U.preventDefault(), U.stopPropagation();
          const ae = l.current;
          if (!ae) return;
          const R = Array.from(U.touches).find((re) => re.identifier === f);
          if (!R) return;
          const J = ae.closest("[data-canvas-content]");
          if (!J) return;
          const ce = J.getBoundingClientRect(),
            Se = (R.clientX - ce.left - m.x) / t,
            L = (R.clientY - ce.top - m.y) / t,
            _ = ee(Se, L);
          N(_);
        },
        [d, m, t, n, f, ee]
      ),
      ie = p.useCallback(
        (U) => {
          const ae = Array.from(U.changedTouches)[0];
          if (!ae) return;
          const R = Math.abs(ae.clientX - C.x),
            J = Math.abs(ae.clientY - C.y),
            ce = R > 10 || J > 10;
          if (n) {
            if (
              !d ||
              f === null ||
              !Array.from(U.changedTouches).some((L) => L.identifier === f)
            )
              return;
            U.preventDefault(),
              U.stopPropagation(),
              x(!1),
              g(null),
              B({ x: 0, y: 0 }),
              ce ? j(e.GUID, v) : o && o(e);
          } else
            !ce && o && (U.preventDefault(), U.stopPropagation(), o(e)),
              B({ x: 0, y: 0 });
        },
        [d, n, f, j, e, v, C, o]
      ),
      X = p.useCallback(
        (U) => {
          !d ||
            !n ||
            f === null ||
            !Array.from(U.changedTouches).some((R) => R.identifier === f) ||
            (U.preventDefault(),
            U.stopPropagation(),
            N(e.position),
            x(!1),
            g(null),
            B({ x: 0, y: 0 }));
        },
        [d, n, f, e.position]
      ),
      oe = (U) => {
        if (r) return "bg-green-100 border-green-500";
        switch (U) {
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
      Ne = (U) => {
        if (r) return "highlight-breathe-green";
        switch (U) {
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
      le = (U) => {
        if (r) return "bg-green-600 text-white";
        switch (U) {
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
      ye = (U) => {
        const ae =
          U === "調劑台"
            ? "type.dispensingStation"
            : U === "藥庫"
            ? "type.warehouse"
            : U === "parent_container"
            ? "櫃體"
            : "type." + U;
        return a(ae) || U;
      };
    return s.jsx("div", {
      ref: l,
      className: `flex flex-col absolute border-2 rounded-lg shadow-lg hover:shadow-xl ${oe(
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
      onPointerDown: P,
      onPointerMove: w,
      onPointerUp: O,
      onTouchStart: S,
      onTouchMove: Q,
      onTouchEnd: ie,
      onTouchCancel: X,
      children: s.jsx("div", {
        className: `w-full min-w-[400px] h-auto flex items-start flex-1 justify-between p-2 border-b border-gray-200 ${Ne(
          G
        )}`,
        children: s.jsx("div", {
          className: "flex space-x-2 flex-1 min-w-0",
          children: s.jsxs("div", {
            className: "min-w-0 flex gap-4",
            children: [
              s.jsx("div", {
                className: "font-semibold text-lg truncate",
                children: F,
              }),
              s.jsx("div", {
                className: `text-sm truncate py-1 px-3 rounded-2xl ${le(G)}`,
                children: ye(G),
              }),
            ],
          }),
        }),
      }),
    });
  },
  zo = ({ isOpen: e, onClose: t, onScanSuccess: n, mode: r }) => {
    const { showNotification: o, openAddBarcodeModal: l } = Je();
    console.log("🔍 QRCodeScannerModal props:", {
      isOpen: e,
      mode: r,
      hasOnScanSuccess: !!n,
    });
    const a = p.useRef(null),
      i = p.useRef(null),
      c = p.useRef(null),
      h = p.useRef(null),
      d = p.useRef(null),
      [x, m] = p.useState(!1),
      [b, v] = p.useState(""),
      [N, E] = p.useState(0),
      [u, f] = p.useState(null),
      [g, C] = p.useState(!1);
    p.useEffect(() => {
      const F = () => {
        const G = window.innerWidth < 680;
        C(G);
      };
      return (
        F(),
        window.addEventListener("resize", F),
        () => window.removeEventListener("resize", F)
      );
    }, []);
    const B = async () => {
        try {
          v("");
          const F = await navigator.mediaDevices.getUserMedia({
            video: {
              facingMode: "environment",
              width: { ideal: 1920 },
              height: { ideal: 1080 },
            },
          });
          (c.current = F),
            a.current &&
              ((a.current.srcObject = F),
              await a.current.play(),
              console.log("✅ Camera started, setting isScanning to true"),
              m(!0));
        } catch (F) {
          console.error("無法開啟相機:", F),
            v("無法開啟相機，請確認相機權限已開啟");
        }
      },
      I = () => {
        h.current && (clearInterval(h.current), (h.current = null)),
          c.current &&
            (c.current.getTracks().forEach((F) => F.stop()),
            (c.current = null)),
          a.current && (a.current.srcObject = null),
          m(!1);
      },
      A = async () => {
        if (
          (console.log("🔄 captureAndScan called"),
          console.log("📹 videoRef.current:", !!a.current),
          console.log("🖼️ canvasRef.current:", !!i.current),
          console.log("▶️ isScanning:", x),
          !a.current || !i.current || !x)
        ) {
          console.log("❌ Early return: missing refs or not scanning");
          return;
        }
        const F = Date.now();
        if (F - N < 1e3) {
          console.log("⏱️ Throttled: too soon since last scan");
          return;
        }
        E(F);
        const G = a.current,
          P = i.current,
          M = P.getContext("2d");
        if (
          (console.log("🎥 video.readyState:", G.readyState),
          console.log("🎥 HAVE_ENOUGH_DATA:", G.HAVE_ENOUGH_DATA),
          !M || G.readyState !== G.HAVE_ENOUGH_DATA)
        ) {
          console.log("❌ Video not ready or no context");
          return;
        }
        (P.width = G.videoWidth),
          (P.height = G.videoHeight),
          M.drawImage(G, 0, 0, P.width, P.height),
          P.toBlob(
            async (ee) => {
              if (!ee) return;
              const w = new File([ee], "scan.jpg", { type: "image/jpeg" });
              try {
                console.log("📸 截取圖片並掃描...");
                const O = await ke.scanBarcode(w);
                if (!O.results || O.results.length === 0) {
                  console.log("⚠️ 未辨識到條碼");
                  return;
                }
                const S = O.results[0];
                if (!S.code) {
                  console.log("⚠️ 辨識到條碼但無法讀取內容");
                  return;
                }
                console.log("✅ 成功辨識條碼:", S.code),
                  console.log("📋 條碼類型:", S.type),
                  console.log("📊 信心度:", S.conf),
                  I(),
                  t();
                try {
                  const Q = await ke.searchByBarCode(S.code);
                  console.log("🔍 條碼搜尋結果:", Q),
                    Q.Code === 200
                      ? (console.log("✅ 找到藥品資料:", Q.Data),
                        console.log("🎯 準備調用 onScanSuccess, mode:", r),
                        o("找到藥品資料", "success"),
                        n
                          ? (console.log("✅ onScanSuccess 存在，開始調用"),
                            n(S.code, Q.Data),
                            console.log("✅ onScanSuccess 調用完成"))
                          : console.warn("⚠️ onScanSuccess 不存在"))
                      : Q.Code === -200 && Q.Result === "查無資料"
                      ? (console.log("⚠️ 查無資料，開啟建立條碼彈窗"),
                        o("查無條碼資料，請建立條碼", "warning"),
                        l(S.code))
                      : (console.log("❌ 搜尋失敗:", Q.Result),
                        o(Q.Result || "搜尋失敗", "error"));
                } catch (Q) {
                  console.error("條碼搜尋錯誤:", Q),
                    o("搜尋失敗，請稍後再試", "error");
                }
              } catch (O) {
                console.error("掃描錯誤:", O);
              }
            },
            "image/jpeg",
            1
          );
      },
      j = () => {
        h.current && clearInterval(h.current),
          (h.current = setInterval(() => {
            A();
          }, 1e3));
      };
    p.useEffect(
      () => (
        e ? B() : I(),
        () => {
          I();
        }
      ),
      [e]
    ),
      p.useEffect(() => {
        x && !h.current
          ? (console.log("🚀 isScanning became true, starting interval"), j())
          : !x &&
            h.current &&
            (console.log("🛑 isScanning became false, stopping interval"),
            h.current && (clearInterval(h.current), (h.current = null)));
      }, [x]);
    const z = () => {
        I(), t();
      },
      D = async (F) => {
        if (!c.current || !d.current) return;
        const G = d.current.getBoundingClientRect(),
          P = (F.clientX - G.left) / G.width,
          M = (F.clientY - G.top) / G.height;
        console.log("🎯 點擊聚焦位置:", { x: P, y: M }),
          f({ x: F.clientX - G.left, y: F.clientY - G.top }),
          setTimeout(() => f(null), 1e3);
        try {
          const ee = c.current.getVideoTracks()[0],
            w = ee.getCapabilities();
          if (
            (console.log("📹 相機能力:", w),
            !w.focusMode || !w.focusMode.includes("manual"))
          ) {
            console.log("⚠️ 此相機不支援手動聚焦");
            return;
          }
          const O = {
            advanced: [
              {
                focusMode: "manual",
                focusDistance: 0,
                pointsOfInterest: [{ x: P, y: M }],
              },
            ],
          };
          await ee.applyConstraints(O), console.log("✅ 聚焦成功");
        } catch (ee) {
          console.log("⚠️ 聚焦失敗 (可能不支援):", ee);
        }
      };
    return e
      ? g
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
                    onClick: z,
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
                    onClick: D,
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
                      onClick: z,
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
                          onClick: D,
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
  sh = ({ children: e }) => {
    const t = p.useRef(null),
      n = p.useRef(null),
      {
        selectedDepartmentType: r,
        apiDepartmentData: o,
        showNotification: l,
        openAddBarcodeModal: a,
        openContainerDetailModal: i,
        setHighlightedMedicineCode: c,
      } = Je(),
      { t: h } = pt(),
      [d, x] = p.useState({ x: 0, y: 0, scale: 1 }),
      [m, b] = p.useState(!1),
      [v, N] = p.useState(!1),
      [E, u] = p.useState({ x: 0, y: 0 }),
      [f, g] = p.useState(!1),
      [C, B] = p.useState(!1),
      [I, A] = p.useState(""),
      [j, z] = p.useState([]),
      [D, F] = p.useState(null),
      G = () => {
        try {
          const T = localStorage.getItem("med_map_anchor");
          return T ? JSON.parse(T) : [];
        } catch (T) {
          return (
            console.error("Error reading canvas states from localStorage:", T),
            []
          );
        }
      },
      P = (T, k, $, V) => {
        try {
          const se = G(),
            ue = se.findIndex(
              (be) => be.department === T && be.canvasType === k
            ),
            ve = { department: T, canvasType: k, scale: $, position: V };
          ue >= 0 ? (se[ue] = ve) : se.push(ve),
            localStorage.setItem("med_map_anchor", JSON.stringify(se));
        } catch (se) {
          console.error("Error saving canvas state to localStorage:", se);
        }
      },
      M = (T, k) =>
        G().find((V) => V.department === T && V.canvasType === k) || null;
    p.useEffect(() => {
      if (r) {
        const T = M(r, "InfiniteCanvas");
        if (T) x({ x: T.position.x, y: T.position.y, scale: T.scale });
        else {
          const k = { x: 0, y: 0, scale: 1 };
          x(k), P(r, "InfiniteCanvas", k.scale, k);
        }
      }
    }, [r]),
      p.useEffect(() => {
        if (!r) return;
        const T = setTimeout(() => {
          P(r, "InfiniteCanvas", d.scale, { x: d.x, y: d.y });
        }, 500);
        return () => clearTimeout(T);
      }, [d, r]),
      p.useEffect(() => {
        const T = ($) => {
            $.code === "Space" && !$.repeat && ($.preventDefault(), g(!0));
          },
          k = ($) => {
            $.code === "Space" && ($.preventDefault(), g(!1), b(!1));
          };
        return (
          window.addEventListener("keydown", T),
          window.addEventListener("keyup", k),
          () => {
            window.removeEventListener("keydown", T),
              window.removeEventListener("keyup", k);
          }
        );
      }, []);
    const ee = p.useCallback(
        (T) => {
          var $;
          if (v) return;
          if (
            (T.ctrlKey && !navigator.userAgent.includes("Mac")) ||
            (T.metaKey && navigator.userAgent.includes("Mac"))
          ) {
            T.preventDefault(), T.stopPropagation();
            const V =
              ($ = t.current) == null ? void 0 : $.getBoundingClientRect();
            if (!V) return;
            const se = T.clientX - V.left,
              ue = T.clientY - V.top,
              ve = T.deltaY > 0 ? 0.9 : 1.1,
              be = Math.max(0.1, Math.min(5, d.scale * ve)),
              je = be / d.scale,
              De = se - (se - d.x) * je,
              fe = ue - (ue - d.y) * je;
            x({ x: De, y: fe, scale: be });
          }
        },
        [d, v]
      ),
      w = p.useCallback(
        (T) => {
          v ||
            !f ||
            (b(!0), u({ x: T.clientX, y: T.clientY }), T.preventDefault());
        },
        [v, f]
      ),
      O = p.useCallback(
        (T) => {
          if (!m || v) return;
          const k = T.clientX - E.x,
            $ = T.clientY - E.y;
          x((V) => ({ ...V, x: V.x + k, y: V.y + $ })),
            u({ x: T.clientX, y: T.clientY });
        },
        [m, E, v]
      ),
      S = p.useCallback(() => {
        b(!1);
      }, []),
      Q = p.useCallback(
        (T) => {
          if (!o) return [];
          const k = [],
            $ = (V) => {
              for (const se of V)
                se.med_list &&
                  Array.isArray(se.med_list) &&
                  se.med_list.some((ve) => ve.code == T) &&
                  (console.log("✅ 找到藥品所在櫃體:", se.name, se.GUID),
                  k.push(se.GUID)),
                  se.components &&
                    Array.isArray(se.components) &&
                    $(se.components),
                  se.contents && Array.isArray(se.contents) && $(se.contents);
            };
          return $(o), k;
        },
        [o]
      ),
      ie = p.useCallback(() => {
        try {
          const k = localStorage.getItem("medMap_setting");
          if (k) {
            const V = JSON.parse(k).light_sec;
            if (V != null && V !== "") {
              const se = Number(V);
              if (!isNaN(se) && se > 0) return se * 1e3;
            }
          }
        } catch (k) {
          console.error("讀取亮燈設定失敗:", k);
        }
        return 6e4;
      }, []),
      X = p.useCallback(
        (T) => {
          if (!T.trim()) return;
          n.current && (clearTimeout(n.current), (n.current = null)),
            console.log("🔍 搜尋藥碼:", T);
          const k = Q(T);
          if (k.length > 0) {
            const $ = ie();
            console.log(`🎯 高亮 ${k.length} 個櫃體:`, k),
              console.log(`⏱️ 亮燈時長: ${$}ms (${$ / 1e3}秒)`),
              z(k),
              F(T),
              c(T),
              (n.current = setTimeout(() => {
                console.log("⏱️ 恢復原本顏色"),
                  z([]),
                  F(null),
                  c(null),
                  (n.current = null);
              }, $));
          } else
            console.log("❌ 未找到包含此藥品的櫃體"), z([]), F(null), c(null);
        },
        [Q, ie, c]
      ),
      oe = (T, k) => {
        var V, se;
        console.log("📍 藥品定位模式 - 掃描到藥品:", {
          barcode: T,
          medicineData: k,
        });
        const $ =
          ((V = k[0]) == null ? void 0 : V.CODE) ||
          ((se = k[0]) == null ? void 0 : se.code);
        B(!1), X($);
      },
      Ne = async (T) => {
        var k, $;
        if (T.key === "Enter") {
          if ((T.preventDefault(), !I.trim())) {
            l("請輸入條碼", "warning");
            return;
          }
          try {
            console.log("🔍 搜尋條碼:", I);
            const V = await ke.searchByBarCode(I);
            if (
              (console.log("📋 條碼搜尋回應:", V),
              V.Code === 200 && V.Data && V.Data.length > 0)
            ) {
              const se =
                ((k = V.Data[0]) == null ? void 0 : k.CODE) ||
                (($ = V.Data[0]) == null ? void 0 : $.code);
              console.log("✅ 找到藥品資料:", V.Data),
                l("找到藥品，開始亮燈", "success"),
                X(se);
            } else
              V.Code === -200 && V.Result === "查無資料"
                ? (console.log("⚠️ 查無資料，開啟建立條碼彈窗"),
                  l("查無條碼資料，請建立條碼", "warning"),
                  a(I))
                : (console.log("❌ 搜尋失敗:", V.Result),
                  l(V.Result || "搜尋失敗", "error"));
          } catch (V) {
            console.error("條碼搜尋錯誤:", V),
              l("搜尋失敗，請稍後再試", "error");
          }
        }
      };
    p.useEffect(
      () => () => {
        n.current && clearTimeout(n.current);
      },
      []
    );
    const [le, ye] = p.useState(null),
      [U, ae] = p.useState({ x: 0, y: 0 }),
      R = (T) => {
        if (T.length < 2) return null;
        const k = T[0],
          $ = T[1];
        return Math.sqrt(
          Math.pow($.clientX - k.clientX, 2) +
            Math.pow($.clientY - k.clientY, 2)
        );
      },
      J = (T) => {
        if (T.length === 1) return { x: T[0].clientX, y: T[0].clientY };
        const k = T[0],
          $ = T[1];
        return {
          x: (k.clientX + $.clientX) / 2,
          y: (k.clientY + $.clientY) / 2,
        };
      },
      ce = p.useCallback(
        (T) => {
          if (!v) {
            if (T.touches.length === 2) {
              const k = R(T.touches),
                $ = J(T.touches);
              ye(k), ae($);
            } else if (T.touches.length === 1) {
              const k = T.touches[0];
              u({ x: k.clientX, y: k.clientY }), b(!0);
            }
          }
        },
        [v]
      ),
      Se = p.useCallback(
        (T) => {
          var k;
          if (!v) {
            if ((T.preventDefault(), T.touches.length === 2 && le !== null)) {
              const $ = R(T.touches),
                V = J(T.touches);
              if ($ && le) {
                const se =
                  (k = t.current) == null ? void 0 : k.getBoundingClientRect();
                if (!se) return;
                const ue = $ / le,
                  ve = Math.max(0.1, Math.min(5, d.scale * ue)),
                  be = V.x - se.left,
                  je = V.y - se.top,
                  De = ve / d.scale,
                  fe = be - (be - d.x) * De,
                  he = je - (je - d.y) * De;
                x({ x: fe, y: he, scale: ve }), ye($), ae(V);
              }
            } else if (T.touches.length === 1 && m) {
              const $ = T.touches[0],
                V = $.clientX - E.x,
                se = $.clientY - E.y;
              x((ue) => ({ ...ue, x: ue.x + V, y: ue.y + se })),
                u({ x: $.clientX, y: $.clientY });
            }
          }
        },
        [d, le, m, E, v]
      ),
      L = p.useCallback(() => {
        ye(null), b(!1);
      }, []);
    p.useEffect(() => {
      const T = t.current;
      if (T)
        return (
          T.addEventListener("wheel", ee, { passive: !1 }),
          () => T.removeEventListener("wheel", ee)
        );
    }, [ee]),
      p.useCallback(() => {
        x({ x: 0, y: 0, scale: 1 });
      }, []);
    const re = (() => {
      if (!o || o.length === 0) return [];
      const T = o,
        k = [];
      for (const $ of T)
        if ($.type === "調劑台" || $.type === "藥庫")
          for (const V of $.contents)
            k.push({
              GUID: V.GUID,
              type: V.type,
              name: `${V.name}`,
              position: V.position,
              dimensions: V.dimensions,
              med_list: V.med_list,
              serverName: V.serverName,
              serverType: V.serverType,
              Master_GUID: $.GUID,
              contents: V.contents || [],
            });
        else $.componets && $.componets.length > 0 && k.push(...$.componets);
      return k;
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
                value: I,
                onChange: (T) => A(T.target.value),
                onKeyPress: Ne,
                placeholder: "輸入條碼或掃描...",
                className:
                  "px-4 py-2 w-50 focus:outline-none text-gray-700 disabled:opacity-50",
              }),
              s.jsx("button", {
                onClick: () => B(!0),
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
            onClick: () => N(!v),
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
          } ${m ? "cursor-grabbing" : ""}`,
          onMouseDown: w,
          onMouseMove: O,
          onMouseUp: S,
          onMouseLeave: S,
          onTouchStart: ce,
          onTouchMove: Se,
          onTouchEnd: L,
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
                  re.map((T) =>
                    s.jsx(
                      rh,
                      {
                        component: T,
                        scale: d.scale,
                        isLocked: v,
                        isHighlighted: j.includes(T.GUID),
                        onContainerClick: (k) => {
                          console.log("🖱️ 點擊櫃體，傳遞亮燈藥品代碼:", D),
                            i(k, D);
                        },
                      },
                      T.GUID
                    )
                  ),
                  e,
                ],
              }),
            ],
          }),
        }),
        s.jsx(zo, {
          isOpen: C,
          onClose: () => B(!1),
          onScanSuccess: oe,
          mode: "med_light_location_mode",
        }),
      ],
    });
  },
  Bs = ({ content: e, isAdminMode: t }) => {
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
        setMedBoxModalOpen: x,
        showNotification: m,
        triggerRefresh: b,
      } = Je(),
      { t: v } = pt(),
      [N, E] = p.useState(!1),
      [u, f] = p.useState(""),
      [g, C] = p.useState(!1),
      [B, I] = p.useState(e.name);
    p.useEffect(() => {
      I(e.name);
    }, [e.name]);
    const A = (M) => {
        M.stopPropagation(), f(e.name || ""), E(!0);
      },
      j = (M) => {
        M.stopPropagation(), E(!1), f("");
      },
      z = async (M) => {
        if ((M.stopPropagation(), !u.trim())) {
          m("名稱不能為空", "error");
          return;
        }
        if (u === e.name) {
          E(!1);
          return;
        }
        C(!0);
        try {
          const ee = [
            {
              GUID: e.GUID,
              name: u.trim(),
              Master_GUID: e.Master_GUID,
              position: e.gird_position,
              serverName: e.serverName,
              serverType: e.serverType,
            },
          ];
          let w;
          if (e.type === "store_shelves" || e.type === "dispensing_shelves")
            w = await ke.updateMedMapShelf(ee);
          else if (e.type === "sub_container")
            w = await ke.updateSubSection(ee);
          else {
            m("不支援的容器類型", "error"), C(!1);
            return;
          }
          if (w.Code === 200) {
            const O = u.trim();
            (e.name = O), I(O), m("名稱更新成功", "success"), E(!1), b();
          } else m(w.Result || "更新失敗", "error");
        } catch (ee) {
          console.error("更新名稱失敗:", ee),
            m("更新失敗，請稍後再試", "error");
        } finally {
          C(!1);
        }
      },
      D = (M) => {
        switch (M) {
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
      F = (M) => {
        switch (M) {
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
      G = (M) => {
        switch (M) {
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
      P = (M) => {
        switch (M) {
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
            return M;
        }
      };
    switch (e.type) {
      case "sub_container":
        return s.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${D(
            e.type || 0
          )} ${F(e.type || 0)}`,
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
                          onChange: (M) => f(M.target.value),
                          onClick: (M) => M.stopPropagation(),
                          className:
                            "text-base font-semibold text-gray-800 border-2 border-blue-400 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500",
                          disabled: g,
                          autoFocus: !0,
                        }),
                        s.jsx("button", {
                          onClick: z,
                          disabled: g,
                          className:
                            "p-1 hover:bg-green-100 rounded transition-colors disabled:opacity-50",
                          title: "更新",
                          children: s.jsx(gl, {
                            className: "w-5 h-5 text-green-600",
                          }),
                        }),
                        s.jsx("button", {
                          onClick: j,
                          disabled: g,
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
                          children: B,
                        }),
                        s.jsx("button", {
                          onClick: A,
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
                  !N &&
                  s.jsx("span", {
                    className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${G(
                      e.type
                    )}`,
                    children: P(e.type),
                  }),
              ],
            }),
            e.type !== "none" &&
              !N &&
              s.jsx("div", {
                className: "flex items-center space-x-1",
                children: s.jsx("button", {
                  className: "p-1 hover:bg-black/10 rounded transition-colors",
                  onClick: (M) => {
                    M.stopPropagation(), a(e);
                  },
                  title: v("modal.add"),
                  children: s.jsx(gt, { className: "w-6 h-6 text-green-700" }),
                }),
              }),
          ],
        });
      case "parent_container":
        return s.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${D(
            e.type || 0
          )} ${F(e.type || 0)}`,
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
                      children: P(e.type),
                    })
                  : null,
              ],
            }),
            e.type !== "none" &&
              s.jsx("div", {
                className: "flex items-center space-x-1",
                children: s.jsx("button", {
                  className: "p-1 hover:bg-black/10 rounded transition-colors",
                  onClick: (M) => {
                    M.stopPropagation(), i(e);
                  },
                  title: v("modal.add"),
                  children: s.jsx(gt, { className: "w-6 h-6 text-green-700" }),
                }),
              }),
          ],
        });
      case "med_box":
        return s.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${D(
            e.type || 0
          )} ${F(e.type || 0)}`,
          children: [
            s.jsx("div", {
              className: "flex items-center mr-4",
              children:
                e.type != "parent_container"
                  ? s.jsx("span", {
                      className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${G(
                        e.type
                      )}`,
                      children: P(e.type),
                    })
                  : null,
            }),
            s.jsx("div", {
              className: "flex items-center space-x-1",
              children: s.jsx("button", {
                className: "p-1 hover:bg-black/10 rounded transition-colors",
                onClick: (M) => {
                  M.stopPropagation(), n(e);
                },
                title: v("modal.settings"),
                children: s.jsx(tn, { className: "w-6 h-6 text-gray-600" }),
              }),
            }),
          ],
        });
      case "dispensing_shelves":
        return s.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${D(
            e.type || 0
          )} ${F(e.type || 0)}`,
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
                          onChange: (M) => f(M.target.value),
                          onClick: (M) => M.stopPropagation(),
                          className:
                            "text-base font-semibold text-gray-800 border-2 border-blue-400 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500",
                          disabled: g,
                          autoFocus: !0,
                        }),
                        s.jsx("button", {
                          onClick: z,
                          disabled: g,
                          className:
                            "p-1 hover:bg-green-100 rounded transition-colors disabled:opacity-50",
                          title: "更新",
                          children: s.jsx(gl, {
                            className: "w-5 h-5 text-green-600",
                          }),
                        }),
                        s.jsx("button", {
                          onClick: j,
                          disabled: g,
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
                          children: B,
                        }),
                        s.jsx("button", {
                          onClick: A,
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
                  !N &&
                  s.jsx("span", {
                    className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${G(
                      e.type
                    )}`,
                    children: P(e.type),
                  }),
              ],
            }),
            s.jsxs("div", {
              className: "flex items-center space-x-1",
              children: [
                s.jsx("button", {
                  className: "p-1 hover:bg-black/10 rounded transition-colors",
                  onClick: (M) => {
                    M.stopPropagation();
                    const ee = {
                      GUID: `new_medbox_${Date.now()}`,
                      name: "",
                      box_type: "",
                      width: [],
                      width_index: 0,
                      med_info: [],
                      parentShelf: e,
                    };
                    h(ee), d("add"), x(!0);
                  },
                  title: v("modal.add"),
                  children: s.jsx(gt, { className: "w-6 h-6 text-green-700" }),
                }),
                s.jsx("button", {
                  className: "p-1 hover:bg-black/10 rounded transition-colors",
                  onClick: (M) => {},
                  title: v("modal.settings"),
                  children: s.jsx(tn, { className: "w-6 h-6 text-gray-600" }),
                }),
              ],
            }),
          ],
        });
      case "store_shelves":
        return s.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${D(
            e.type || 0
          )} ${F(e.type || 0)}`,
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
                          onChange: (M) => f(M.target.value),
                          onClick: (M) => M.stopPropagation(),
                          className:
                            "text-base font-semibold text-gray-800 border-2 border-blue-400 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500",
                          disabled: g,
                          autoFocus: !0,
                        }),
                        s.jsx("button", {
                          onClick: z,
                          disabled: g,
                          className:
                            "p-1 hover:bg-green-100 rounded transition-colors disabled:opacity-50",
                          title: "更新",
                          children: s.jsx(gl, {
                            className: "w-5 h-5 text-green-600",
                          }),
                        }),
                        s.jsx("button", {
                          onClick: j,
                          disabled: g,
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
                          children: B,
                        }),
                        s.jsx("button", {
                          onClick: A,
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
                  !N &&
                  s.jsx("span", {
                    className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${G(
                      e.type
                    )}`,
                    children: P(e.type),
                  }),
              ],
            }),
            s.jsx("div", {
              className: "flex items-center space-x-1",
              children: s.jsx("button", {
                className: "p-1 hover:bg-black/10 rounded transition-colors",
                onClick: (M) => {
                  M.stopPropagation(), c(e);
                },
                title: v("modal.add"),
                children: s.jsx(gt, { className: "w-6 h-6 text-green-700" }),
              }),
            }),
          ],
        });
      case "list_draw":
        return s.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${D(
            e.type || 0
          )} ${F(e.type || 0)}`,
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
                      children: P(e.type),
                    })
                  : null,
              ],
            }),
            s.jsx("button", {
              className: "p-1 hover:bg-black/10 rounded transition-colors",
              onClick: (M) => {
                M.stopPropagation(), o(e);
              },
              title: v("modal.settings"),
              children: s.jsx(tn, { className: "w-6 h-6 text-gray-600" }),
            }),
          ],
        });
      case "grid_draw":
        return s.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${D(
            e.type || 0
          )} ${F(e.type || 0)}`,
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
                      children: P(e.type),
                    })
                  : null,
              ],
            }),
            s.jsx("button", {
              className: "p-1 hover:bg-black/10 rounded transition-colors",
              onClick: (M) => {
                M.stopPropagation(), l(e);
              },
              title: v("modal.settings"),
              children: s.jsx(tn, { className: "w-6 h-6 text-gray-600" }),
            }),
          ],
        });
      default:
        return s.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${D(
            e.type || 0
          )} ${F(e.type || 0)}`,
          children: [
            s.jsx("div", {
              className: "flex items-center space-x-2 mr-6",
              children:
                e.type != "parent_container"
                  ? s.jsx("span", {
                      className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${G(
                        e.type
                      )}`,
                      children: P(e.type),
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
  Bd = p.forwardRef(({ children: e }, t) => {
    const n = p.useRef(null),
      {
        selectedDepartmentType: r,
        apiDepartmentData: o,
        setSidebarOpen: l,
        openAddParentContainerModal: a,
        openEditStoreItemModal: i,
        openQRCodeScannerModal: c,
        openAddBarcodeModal: h,
        showNotification: d,
        isAdminMode: x,
      } = Je(),
      [m, b] = p.useState({ x: 0, y: 0, scale: 1 }),
      [v, N] = p.useState(!1),
      [E, u] = p.useState(!1),
      [f, g] = p.useState({ x: 0, y: 0 }),
      [C, B] = p.useState(!1),
      [I, A] = p.useState(""),
      [j, z] = p.useState(!1),
      [D, F] = p.useState(null),
      [G, P] = p.useState(!1),
      [M, ee] = p.useState({
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
      [w, O] = p.useState(null),
      S = p.useRef({}),
      Q = () =>
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ) ||
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0,
      ie = 8,
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
      oe = (y, q, Y, H) => {
        try {
          const ne = X(),
            W = ne.findIndex(
              (de) => de.department === y && de.canvasType === q
            ),
            pe = { department: y, canvasType: q, scale: Y, position: H };
          W >= 0 ? (ne[W] = pe) : ne.push(pe),
            localStorage.setItem("med_map_anchor", JSON.stringify(ne));
        } catch (ne) {
          console.error("Error saving canvas state to localStorage:", ne);
        }
      },
      Ne = (y, q) =>
        X().find((H) => H.department === y && H.canvasType === q) || null;
    p.useEffect(() => {
      if (r) {
        const y = Ne(r, "drugCanvas");
        if (y) b({ x: y.position.x, y: y.position.y, scale: y.scale });
        else {
          const q = { x: 0, y: 0, scale: 1 };
          b(q), oe(r, "drugCanvas", q.scale, q);
        }
      }
    }, [r]),
      p.useEffect(() => {
        if (!r) return;
        const y = setTimeout(() => {
          oe(r, "drugCanvas", m.scale, { x: m.x, y: m.y });
        }, 500);
        return () => clearTimeout(y);
      }, [m, r]);
    const le = (y) =>
        [
          "parent_container",
          "sub_container",
          "dispensing_shelves",
          "store_shelves",
          "grid_draw",
          "list_draw",
          "med_box",
        ].includes(y),
      ye = (y) =>
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
      U = (y) => {
        const [q, Y] = y.split(",").map(Number);
        return { row: q || 0, col: Y || 0 };
      },
      ae = (y, q) => `${y},${q}`,
      R = (y, q) => {
        const Y = (ne, W = null) => {
            if (ne.GUID === y) return { container: ne, parent: W };
            if (ne.contents)
              for (const pe of ne.contents) {
                const de = Y(pe, ne);
                if (de) return de;
              }
            return null;
          },
          H = _e();
        for (const ne of H) {
          const W = Y(ne);
          if (W) return W;
        }
        return null;
      },
      J = (y, q) => {
        if (!y.contents) return;
        const { sortedContents: Y, maxRow: H, maxCol: ne } = Ve(y.contents),
          W = q;
        if (!W) return;
        const pe = U(W.gird_position);
        console.log(H), console.log(ne), console.log(W), console.log(pe);
        for (let de = 0; de < Y.length; de++) {
          const Z = Y[de],
            K = U(Z.gird_position);
          if (K.row === pe.row && K.col > pe.col)
            (Z.gird_position = ae(K.row, K.col - 1)),
              (S.current[Z.GUID] = {
                GUID: Z.GUID,
                Master_GUID: y.GUID,
                position: `${K.row},${K.col - 1}`,
                serverName: y.serverName,
                serverType: y.serverType,
                type: Z.type,
              });
          else if (K.row > pe.row) {
            const xe = K.col === 0 ? ne : K.col - 1,
              ge = K.col === 0 ? K.row - 1 : K.row;
            (Z.gird_position = ae(ge, xe)),
              (S.current[Z.GUID] = {
                GUID: Z.GUID,
                Master_GUID: y.GUID,
                position: `${ge},${xe}`,
                serverName: y.serverName,
                serverType: y.serverType,
                type: Z.type,
              });
          }
        }
        return console.log("移除更新其餘容器", Y), Y;
      },
      ce = (y, q, Y, H, ne) => {
        y.contents || (y.contents = []);
        let W = Math.max(
            1,
            ...y.contents.map((Z) => U(Z.gird_position || "0,0").col + 1)
          ),
          pe = Math.max(
            1,
            ...y.contents.map((Z) => U(Z.gird_position || "0,0").row + 1)
          );
        console.log("--------", y),
          console.log("目標容器最大列", W),
          console.log("目標容器最大行", pe),
          (y.type == "sub_container" ||
            y.type == "parent_container" ||
            y.type == "調劑台" ||
            y.type == "藥庫") &&
            (W = +y.oriMaxCol + 1),
          ne != null &&
            ne === "right" &&
            q.type !== "med_box" &&
            H == W &&
            ((Y = Y + 1),
            y.contents.filter((K) => `${Y},0` == K.gird_position).length > 0
              ? (H = W - 1)
              : (H = 0)),
          console.log(Y),
          console.log(H);
        const de = y.contents.filter((Z) => {
          const K = U(Z.gird_position || "0,0");
          return K.row > Y || (K.row === Y && K.col >= H);
        });
        de.sort((Z, K) => {
          const xe = U(Z.gird_position || "0,0"),
            ge = U(K.gird_position || "0,0");
          return xe.row !== ge.row ? ge.row - xe.row : ge.col - xe.col;
        }),
          console.log("會做變更的目標容器", de),
          de.forEach((Z) => {
            const K = U(Z.gird_position || "0,0");
            let xe = K.row,
              ge = K.col;
            Z.type === "med_box" || ge < W - 1
              ? (ge += 1)
              : ((xe += 1), (ge = 0)),
              (Z.gird_position = `${xe},${ge}`),
              (S.current[Z.GUID] = {
                GUID: Z.GUID,
                Master_GUID: y.GUID,
                position: `${xe},${ge}`,
                serverName: y.serverName,
                serverType: y.serverType,
                type: Z.type,
              }),
              console.log(
                `Shifted container ${Z.GUID} from ${K.row},${K.col} to ${xe},${ge}`
              );
          }),
          y.contents.length == 0 && ((Y = 0), (H = 0)),
          (q.gird_position = `${Y},${H}`),
          (q.Master_GUID = y.GUID),
          console.log(`Inserted container ${q.GUID} at position ${Y},${H}`),
          y.contents.push(q),
          (S.current[q.GUID] = {
            GUID: q.GUID,
            Master_GUID: y.GUID,
            position: `${Y},${H}`,
            serverName: y.serverName,
            serverType: y.serverType,
            type: q.type,
          }),
          q.type === "dispensing_shelves" &&
            q.contents &&
            q.contents.forEach((Z) => {
              Z.type === "med_box" &&
                (S.current[Z.GUID] = {
                  GUID: Z.GUID,
                  Master_GUID: Z.Master_GUID,
                  position: Z.gird_position,
                  serverName: y.serverName,
                  serverType: y.serverType,
                  type: Z.type,
                });
            });
      },
      Se = (y, q, Y) => {
        const H = y.getBoundingClientRect(),
          ne = H.left + H.width / 2,
          W = H.top + H.height / 2,
          pe = q - ne,
          de = Y - W;
        return Math.abs(pe) > Math.abs(de)
          ? pe > 0
            ? "right"
            : "left"
          : de > 0
          ? "bottom"
          : "top";
      },
      L = (y, q, Y) => {
        if (!E || !le(y.type)) return;
        (S.current = {}), Y.preventDefault(), Y.stopPropagation();
        const H = Q(),
          ne =
            "touches" in Y
              ? Y.touches[0].clientX
              : ("pointerId" in Y, Y.clientX),
          W =
            "touches" in Y
              ? Y.touches[0].clientY
              : ("pointerId" in Y, Y.clientY),
          pe = q.getBoundingClientRect(),
          de = { x: ne - pe.left, y: W - pe.top },
          Z = R(y.GUID);
        if (!Z) return;
        console.log("拖曳目標", y), console.log("拖曳目標", Z);
        const K = q.cloneNode(!0);
        if (
          ((K.style.position = "fixed"),
          (K.style.left = `${ne - de.x}px`),
          (K.style.top = `${W - de.y}px`),
          (K.style.width = `${pe.width}px`),
          (K.style.height = `${pe.height}px`),
          (K.style.zIndex = "9999"),
          (K.style.opacity = "0.8"),
          (K.style.boxShadow = "0 10px 25px rgba(0,0,0,0.3)"),
          (K.style.pointerEvents = "none"),
          document.body.appendChild(K),
          H)
        ) {
          const xe = Z.parent.contents.findIndex((Ie) => Ie.GUID === y.GUID);
          Z.parent.contents.splice(xe, 1), console.log(xe), Z.parent;
          const ge = J(Z.parent, y);
          (Z.parent.contents = ge),
            console.log(Z.parent),
            ee({
              isDragging: !0,
              draggedContainer: y,
              draggedElement: q,
              floatingElement: K,
              originalParent: Z.parent,
              originalPosition: y.gird_position,
              originalIndex: xe,
              mouseOffset: de,
              isMobileDrag: !1,
              originalData: null,
            });
        } else {
          const xe = Z.parent.contents.findIndex((Re) => Re.GUID === y.GUID);
          Z.parent.contents.splice(xe, 1), console.log(xe);
          const ge = Z.parent,
            Ie = J(Z.parent, y);
          (Z.parent.contents = Ie),
            console.log(Z.parent),
            ee({
              isDragging: !0,
              draggedContainer: y,
              draggedElement: q,
              floatingElement: K,
              originalParent: ge,
              originalPosition: y.gird_position,
              originalIndex: xe,
              mouseOffset: de,
              isMobileDrag: !1,
              originalData: null,
            });
        }
      },
      _ = (y) => {
        if (!M.isDragging || !M.floatingElement) return;
        const q = "touches" in y ? y.touches[0].clientX : y.clientX,
          Y = "touches" in y ? y.touches[0].clientY : y.clientY;
        (M.floatingElement.style.left = `${q - M.mouseOffset.x}px`),
          (M.floatingElement.style.top = `${Y - M.mouseOffset.y}px`);
        const H = document.elementFromPoint(q, Y),
          ne = H == null ? void 0 : H.closest("[data-container-guid]");
        if (ne) {
          const W = ne.getAttribute("data-container-guid"),
            pe = R(W);
          if (pe && ye(M.draggedContainer.type).includes(pe.container.type)) {
            const Z = Se(ne, q, Y);
            if (
              M.draggedContainer.type === "med_box" &&
              !["left", "right"].includes(Z)
            ) {
              O(null);
              return;
            }
            O({ container: pe.container, direction: Z, element: ne });
            return;
          }
        }
        O(null);
      },
      re = async (y) => {
        if (!M.isDragging) return;
        M.floatingElement && document.body.removeChild(M.floatingElement);
        let q = null,
          Y = null,
          H = null;
        if (
          (console.log("Drop Target:", w),
          console.log("Is Mobile Drag:", M.isMobileDrag),
          M.isMobileDrag)
        )
          if (w) {
            (q = w.direction), (H = w.container);
            const ne = R(M.draggedContainer.GUID);
            if (ne) {
              const xe = ne.parent.contents.findIndex(
                (Ie) => Ie.GUID === M.draggedContainer.GUID
              );
              ne.parent.contents.splice(xe, 1);
              const ge = J(ne.parent, M.draggedContainer);
              ne.parent.contents = ge;
            }
            const W = U(w.container.gird_position || "0,0");
            let pe = W.row,
              de = W.col;
            switch (w.direction) {
              case "top":
                pe = Math.max(0, W.row);
                break;
              case "bottom":
                pe = W.row + 1;
                break;
              case "left":
                de = Math.max(0, W.col);
                break;
              case "right":
                de = W.col + 1;
                break;
            }
            const Z = R(w.container.Master_GUID || w.container.GUID);
            let K = (Z == null ? void 0 : Z.container) || w.container;
            if (
              (M.draggedContainer.class != w.class && (K = w),
              M.draggedContainer.type === "med_box" &&
                w.container.type !== "med_box")
            )
              if (
                (console.log("藥盒移動目標到層架上"),
                (K = w.container),
                K.contents.length > 0)
              ) {
                let xe = 0,
                  ge = 0;
                K.contents.forEach((Ie) => {
                  const Re = U(Ie.gird_position || "0,0").row,
                    Ot = U(Ie.gird_position || "0,0").col;
                  xe > Re && (xe = Re), ge > Ot && (ge = Ot);
                });
                for (let Ie = 0; Ie <= ge; Ie++)
                  for (let Re = 0; Re <= xe; Re++) {
                    const Ot = `${Ie},${Re}`;
                    K.contents.filter((Er) => Er.grid_position === Ot)
                      .length === 0 && ((pe = Ie), (de = Re));
                  }
              } else (pe = 0), (de = 0);
            (Y = K), ce(K, M.draggedContainer, pe, de, w.direction);
          } else (q = null), (H = null), (Y = M.originalParent);
        else if (w) {
          (q = w.direction), (H = w.container);
          const ne = U(w.container.gird_position || "0,0");
          let W = ne.row,
            pe = ne.col;
          switch (w.direction) {
            case "top":
              W = Math.max(0, ne.row);
              break;
            case "bottom":
              W = ne.row + 1;
              break;
            case "left":
              pe = Math.max(0, ne.col);
              break;
            case "right":
              pe = ne.col + 1;
              break;
          }
          const de = R(w.container.Master_GUID || w.container.GUID);
          console.log("------目標容器", w),
            console.log("------拖曳容器", M.draggedContainer);
          let Z = (de == null ? void 0 : de.container) || w.container;
          if (
            (console.log(M.draggedContainer.class),
            console.log(w.container.class),
            console.log(M.draggedContainer.class != w.container.class),
            M.draggedContainer.class != w.container.class &&
              ((Z = w.container),
              console.log("------這邊顯示放到上層容器現象"),
              console.log("------目標容器", w),
              console.log("------拖曳容器", M.draggedContainer),
              console.log("------目標父容器", Z)),
            M.draggedContainer.type === "med_box" &&
              w.container.type !== "med_box")
          )
            if (
              (console.log("藥盒移動目標到層架上"),
              (Z = w.container),
              Z.contents.length > 0)
            ) {
              let K = 0,
                xe = 0;
              Z.contents.forEach((ge) => {
                const Ie = U(ge.gird_position || "0,0").row,
                  Re = U(ge.gird_position || "0,0").col;
                K > Ie && (K = Ie), xe > Re && (xe = Re);
              });
              for (let ge = 0; ge <= xe; ge++)
                for (let Ie = 0; Ie <= K; Ie++) {
                  const Re = `${ge},${Ie}`;
                  Z.contents.filter((qn) => qn.grid_position === Re).length ===
                    0 && ((W = ge), (pe = Ie));
                }
            } else (W = 0), (pe = 0);
          (Y = Z), ce(Z, M.draggedContainer, W, pe, w.direction);
        } else {
          (q = null),
            (H = null),
            (Y = M.originalParent),
            (M.draggedContainer.gird_position = M.originalPosition);
          const ne = U(M.originalPosition || "0,0").row,
            W = U(M.originalPosition || "0,0").col;
          ce(M.originalParent, M.draggedContainer, ne, W, null);
        }
        ee({
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
          O(null),
          console.log("Drop Direction:", q),
          console.log("Parent Object:", Y),
          console.log("Target Object:", H),
          console.log("API更新資料：", S),
          await oh(S);
      };
    p.useEffect(() => {
      if (M.isDragging)
        if (Q()) {
          const q = (ne) => {
              ne.preventDefault(), _(ne);
            },
            Y = (ne) => re(),
            H = (ne) => re();
          return (
            document.addEventListener("pointermove", q, { passive: !1 }),
            document.addEventListener("pointerup", Y),
            document.addEventListener("pointercancel", H),
            () => {
              document.removeEventListener("pointermove", q),
                document.removeEventListener("pointerup", Y),
                document.removeEventListener("pointercancel", H);
            }
          );
        } else {
          const q = (W) => _(W),
            Y = (W) => re(),
            H = (W) => {
              W.preventDefault(), _(W);
            },
            ne = (W) => re();
          return (
            document.addEventListener("mousemove", q),
            document.addEventListener("mouseup", Y),
            document.addEventListener("touchmove", H, { passive: !1 }),
            document.addEventListener("touchend", ne),
            () => {
              document.removeEventListener("mousemove", q),
                document.removeEventListener("mouseup", Y),
                document.removeEventListener("touchmove", H),
                document.removeEventListener("touchend", ne);
            }
          );
        }
    }, [M.isDragging, w]),
      p.useEffect(() => {
        const y = (Y) => {
            Y.code === "Space" && !Y.repeat && (Y.preventDefault(), B(!0));
          },
          q = (Y) => {
            Y.code === "Space" && (Y.preventDefault(), B(!1), N(!1));
          };
        return (
          window.addEventListener("keydown", y),
          window.addEventListener("keyup", q),
          () => {
            window.removeEventListener("keydown", y),
              window.removeEventListener("keyup", q);
          }
        );
      }, []);
    const T = p.useCallback(
        (y) => {
          var Y;
          if (E) return;
          if (y.ctrlKey || y.metaKey) {
            y.preventDefault(), y.stopPropagation();
            const H =
              (Y = n.current) == null ? void 0 : Y.getBoundingClientRect();
            if (!H) return;
            const ne = y.clientX - H.left,
              W = y.clientY - H.top,
              pe = y.deltaY > 0 ? 0.9 : 1.1,
              de = Math.max(0.1, Math.min(5, m.scale * pe)),
              Z = de / m.scale,
              K = ne - (ne - m.x) * Z,
              xe = W - (W - m.y) * Z;
            b({ x: K, y: xe, scale: de });
          }
        },
        [m, E]
      ),
      k = p.useCallback(
        (y) => {
          E ||
            !C ||
            (N(!0),
            g({ x: y.clientX, y: y.clientY }),
            F({ x: y.clientX, y: y.clientY }),
            P(!1),
            y.preventDefault());
        },
        [E, C]
      ),
      $ = p.useCallback(
        (y) => {
          if (!v || E) return;
          const q = y.clientX - f.x,
            Y = y.clientY - f.y;
          if (D) {
            const H = Math.abs(y.clientX - D.x),
              ne = Math.abs(y.clientY - D.y);
            (H > 5 || ne > 5) && P(!0);
          }
          b((H) => ({ ...H, x: H.x + q, y: H.y + Y })),
            g({ x: y.clientX, y: y.clientY });
        },
        [v, f, E, D]
      ),
      V = p.useCallback(() => {
        N(!1), F(null);
      }, []),
      [se, ue] = p.useState(null),
      [ve, be] = p.useState({ x: 0, y: 0 }),
      je = (y) => {
        if (y.length < 2) return null;
        const q = y[0],
          Y = y[1];
        return Math.sqrt(
          Math.pow(Y.clientX - q.clientX, 2) +
            Math.pow(Y.clientY - q.clientY, 2)
        );
      },
      De = (y) => {
        if (y.length === 1) return { x: y[0].clientX, y: y[0].clientY };
        const q = y[0],
          Y = y[1];
        return {
          x: (q.clientX + Y.clientX) / 2,
          y: (q.clientY + Y.clientY) / 2,
        };
      },
      fe = p.useCallback(
        (y) => {
          if (!E) {
            if (y.touches.length === 2) {
              const q = je(y.touches),
                Y = De(y.touches);
              ue(q), be(Y);
            } else if (y.touches.length === 1) {
              const q = y.touches[0];
              g({ x: q.clientX, y: q.clientY }), N(!0);
            }
          }
        },
        [E]
      ),
      he = p.useCallback(
        (y) => {
          var q;
          if (!E) {
            if ((y.preventDefault(), y.touches.length === 2 && se !== null)) {
              const Y = je(y.touches),
                H = De(y.touches);
              if (Y && se) {
                const ne =
                  (q = n.current) == null ? void 0 : q.getBoundingClientRect();
                if (!ne) return;
                const W = Y / se,
                  pe = Math.max(0.1, Math.min(5, m.scale * W)),
                  de = H.x - ne.left,
                  Z = H.y - ne.top,
                  K = pe / m.scale,
                  xe = de - (de - m.x) * K,
                  ge = Z - (Z - m.y) * K;
                b({ x: xe, y: ge, scale: pe }), ue(Y), be(H);
              }
            } else if (y.touches.length === 1 && v) {
              const Y = y.touches[0],
                H = Y.clientX - f.x,
                ne = Y.clientY - f.y;
              b((W) => ({ ...W, x: W.x + H, y: W.y + ne })),
                g({ x: Y.clientX, y: Y.clientY });
            }
          }
        },
        [m, se, v, f, E]
      ),
      we = p.useCallback(() => {
        ue(null), N(!1);
      }, []);
    p.useEffect(() => {
      const y = n.current;
      if (y)
        return (
          y.addEventListener("wheel", T, { passive: !1 }),
          () => y.removeEventListener("wheel", T)
        );
    }, [T]);
    const _e = () => (!o || o.length === 0 ? [] : o),
      Ve = (y) => {
        if (!y || y.length === 0)
          return { sortedContents: [], maxRow: 0, maxCol: 0 };
        const q = y.map((W) => ({
            ...W,
            gridPos: U(W.gird_position || "0,0"),
          })),
          Y = Math.max(...q.map((W) => W.gridPos.row), 0),
          H = Math.max(...q.map((W) => W.gridPos.col), 0);
        return {
          sortedContents: q.sort((W, pe) =>
            W.gridPos.row !== pe.gridPos.row
              ? W.gridPos.row - pe.gridPos.row
              : W.gridPos.col - pe.gridPos.col
          ),
          maxRow: Y,
          maxCol: H,
        };
      },
      Ce = _e(),
      Ye = Math.max(...Ce.map((y) => U(y.gird_position || "0,0").row), 0),
      Be = Math.max(...Ce.map((y) => U(y.gird_position || "0,0").col), 0),
      wt = (y) => {
        const q = (H) => {
            if (
              H.width &&
              Array.isArray(H.width) &&
              typeof H.width_index == "number" &&
              H.width_index >= 0 &&
              H.width_index < H.width.length
            ) {
              const W = parseFloat(H.width[H.width_index]);
              if (!isNaN(W)) {
                const pe = W * 20;
                return Math.max(200, pe);
              }
            }
            return 200;
          },
          Y = (H) => {
            switch (H) {
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
              q(y),
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
                        E && le(y.type) && !Q()
                          ? (H) =>
                              L(
                                y,
                                H.currentTarget.closest(
                                  "[data-container-guid]"
                                ),
                                H
                              )
                          : void 0,
                      onTouchStart:
                        E && le(y.type) && !Q()
                          ? (H) =>
                              L(
                                y,
                                H.currentTarget.closest(
                                  "[data-container-guid]"
                                ),
                                H
                              )
                          : void 0,
                      onPointerDown:
                        E && le(y.type) && Q()
                          ? (H) =>
                              L(
                                y,
                                H.currentTarget.closest(
                                  "[data-container-guid]"
                                ),
                                H
                              )
                          : void 0,
                      className: E && le(y.type) ? "cursor-move" : "",
                      children: s.jsx(Bs, { content: y, isAdminMode: x }),
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
                      E && le(y.type) && !Q()
                        ? (H) =>
                            L(
                              y,
                              H.currentTarget.closest("[data-container-guid]"),
                              H
                            )
                        : void 0,
                    onTouchStart:
                      E && le(y.type) && !Q()
                        ? (H) =>
                            L(
                              y,
                              H.currentTarget.closest("[data-container-guid]"),
                              H
                            )
                        : void 0,
                    onPointerDown:
                      E && le(y.type) && Q()
                        ? (H) =>
                            L(
                              y,
                              H.currentTarget.closest("[data-container-guid]"),
                              H
                            )
                        : void 0,
                    className: E && le(y.type) ? "cursor-move" : "",
                    children: s.jsx(Bs, { content: y, isAdminMode: x }),
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
                      E && le(y.type) && !Q()
                        ? (H) =>
                            L(
                              y,
                              H.currentTarget.closest("[data-container-guid]"),
                              H
                            )
                        : void 0,
                    onTouchStart:
                      E && le(y.type) && !Q()
                        ? (H) =>
                            L(
                              y,
                              H.currentTarget.closest("[data-container-guid]"),
                              H
                            )
                        : void 0,
                    onPointerDown:
                      E && le(y.type) && Q()
                        ? (H) =>
                            L(
                              y,
                              H.currentTarget.closest("[data-container-guid]"),
                              H
                            )
                        : void 0,
                    className: E && le(y.type) ? "cursor-move" : "",
                    children: s.jsx(Bs, { content: y, isAdminMode: x }),
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
                      E && le(y.type) && !Q()
                        ? (H) =>
                            L(
                              y,
                              H.currentTarget.closest("[data-container-guid]"),
                              H
                            )
                        : void 0,
                    onTouchStart:
                      E && le(y.type) && !Q()
                        ? (H) =>
                            L(
                              y,
                              H.currentTarget.closest("[data-container-guid]"),
                              H
                            )
                        : void 0,
                    onPointerDown:
                      E && le(y.type) && Q()
                        ? (H) =>
                            L(
                              y,
                              H.currentTarget.closest("[data-container-guid]"),
                              H
                            )
                        : void 0,
                    className: E && le(y.type) ? "cursor-move" : "",
                    children: s.jsx(Bs, { content: y, isAdminMode: x }),
                  }),
                  s.jsx("div", { className: "flex-1 p-1", children: it(y) }),
                ],
              },
              y.GUID
            );
        }
      },
      it = (y) => {
        const q = (Y, H, ne) => {
          const W = Array(H + 1)
              .fill(null)
              .map(() => Array(ne + 1).fill(!1)),
            pe = {};
          return (
            Y.forEach((de) => {
              const Z = U(de.gird_position || "0,0");
              (pe[`${Z.row},${Z.col}`] = de), (W[Z.row][Z.col] = !0);
            }),
            s.jsx("table", {
              className: "w-full h-full",
              style: { borderCollapse: "none", borderSpacing: "0px" },
              children: s.jsx("tbody", {
                children: Array.from({ length: H + 1 }, (de, Z) =>
                  s.jsx(
                    "tr",
                    {
                      className: "h-full",
                      style: { height: `${100 / (H + 1)}%`, minHeight: "80px" },
                      children: Array.from({ length: ne + 1 }, (K, xe) => {
                        const ge = `${Z},${xe}`,
                          Ie = pe[ge];
                        return Ie
                          ? s.jsxs(
                              "td",
                              {
                                className: "align-top bg-transparent",
                                style: {
                                  width: `${100 / (ne + 1)}%`,
                                  height: `${100 / (H + 1)}%`,
                                  minHeight: "80px",
                                  border: "none",
                                  position: "relative",
                                },
                                children: [
                                  wt(Ie),
                                  (w == null ? void 0 : w.container.GUID) ===
                                    Ie.GUID &&
                                    s.jsx("div", {
                                      className:
                                        "absolute inset-0 pointer-events-none",
                                      children: s.jsx("div", {
                                        className: `absolute bg-blue-400 opacity-50 ${
                                          w.direction === "top"
                                            ? "top-0 left-0 right-0 h-1"
                                            : w.direction === "bottom"
                                            ? "bottom-0 left-0 right-0 h-1"
                                            : w.direction === "left"
                                            ? "left-0 top-0 bottom-0 w-1"
                                            : "right-0 top-0 bottom-0 w-1"
                                        }`,
                                      }),
                                    }),
                                ],
                              },
                              xe
                            )
                          : s.jsx(
                              "td",
                              {
                                className: "p-1 align-top bg-transparent",
                                style: {
                                  width: `${100 / (ne + 1)}%`,
                                  height: `${100 / (H + 1)}%`,
                                  minHeight: "80px",
                                  border: "none",
                                },
                                children: s.jsx("div", {
                                  className:
                                    "w-full h-full flex items-center justify-center text-gray-400 text-sm",
                                  children: "空位",
                                }),
                              },
                              xe
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
                sortedContents: K,
                maxRow: xe,
                maxCol: ge,
              } = Ve(y.contents);
              return q(K, xe, ge);
            } else
              return s.jsx("table", {
                className: "bg-transparent w-full h-full",
                style: { borderCollapse: "separate", borderSpacing: "1px" },
                children: s.jsx("tbody", { children: s.jsx("tr", {}) }),
              });
          case "dispensing_shelves":
            if (y.contents && y.contents.length > 0) {
              const {
                sortedContents: K,
                maxRow: xe,
                maxCol: ge,
              } = Ve(y.contents);
              return q(K, xe, ge);
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
              const K = y.medMapStock,
                xe = K.length,
                ge = xe > 0 ? 100 / xe : 100,
                Ie = y.width ? y.width * 5 : 500;
              return s.jsx("div", {
                className: "flex h-full",
                style: { minWidth: `${Ie}px` },
                children: K.map((Re, Ot) => {
                  const [qn, Er] = Re.location.split(",").map(Number);
                  return s.jsxs(
                    "div",
                    {
                      className:
                        "border-r border-gray-300 last:border-r-0 p-1 flex flex-col justify-center items-center cursor-pointer hover:bg-yellow-50 transition-colors",
                      style: { width: `${ge}%` },
                      onMouseDown: (Wt) => {
                        F({ x: Wt.clientX, y: Wt.clientY }), P(!1);
                      },
                      onMouseUp: (Wt) => {
                        if (!G && D) {
                          const Ir = Math.abs(Wt.clientX - D.x),
                            Pr = Math.abs(Wt.clientY - D.y);
                          Ir <= 5 && Pr <= 5 && i(y, Re);
                        }
                        F(null), P(!1);
                      },
                      onMouseMove: (Wt) => {
                        if (D) {
                          const Ir = Math.abs(Wt.clientX - D.x),
                            Pr = Math.abs(Wt.clientY - D.y);
                          (Ir > 5 || Pr > 5) && P(!0);
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
                          children: ["位置: ", qn, "-", Er],
                        }),
                      ],
                    },
                    Re.GUID || Ot
                  );
                }),
              });
            } else if (y.contents && y.contents.length > 0) {
              const {
                sortedContents: K,
                maxRow: xe,
                maxCol: ge,
              } = Ve(y.contents);
              return q(K, xe, ge);
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
                sortedContents: K,
                maxRow: xe,
                maxCol: ge,
              } = Ve(y.contents);
              return q(K, xe, ge);
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
                ...y.Boxes.flat().map((K) => +K.Row + +K.Height - 1)
              ),
              H = Math.max(
                ...y.Boxes.flat().map((K) => +K.Column + +K.Width - 1)
              ),
              ne = Y + 1,
              W = H + 1,
              pe = y.Boxes.flat(),
              de = Array(ne)
                .fill(null)
                .map(() => Array(W).fill(!1)),
              Z = {};
            return (
              pe.forEach((K) => {
                K.Slave || (Z[`${K.Row},${K.Column}`] = K);
              }),
              pe.forEach((K) => {
                if (!K.Slave && (K.Width > 1 || K.Height > 1))
                  for (let xe = K.Row; xe < K.Row + K.Height; xe++)
                    for (let ge = K.Column; ge < K.Column + K.Width; ge++)
                      (xe !== K.Row || ge !== K.Column) && (de[xe][ge] = !0);
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
                  children: y.contents.map((K) => wt(K)),
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
      Pn = (y) => {
        if (
          (U(y.gird_position || "0,0"),
          y.type !== "調劑台" && y.type !== "藥庫")
        )
          return null;
        const q = (Y) => {
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
          const { sortedContents: H, maxRow: ne, maxCol: W } = Ve(Y),
            pe = Array(ne + 1)
              .fill(null)
              .map(() => Array(W + 1).fill(!1)),
            de = {};
          return (
            H.forEach((Z) => {
              const K = U(Z.gird_position || "0,0");
              (de[`${K.row},${K.col}`] = Z), (pe[K.row][K.col] = !0);
            }),
            s.jsx("table", {
              className: "w-full h-full",
              style: { borderCollapse: "none", borderSpacing: "0px" },
              children: s.jsx("tbody", {
                children: Array.from({ length: ne + 1 }, (Z, K) =>
                  s.jsx(
                    "tr",
                    {
                      className: "h-full",
                      children: Array.from({ length: W + 1 }, (xe, ge) => {
                        const Ie = `${K},${ge}`,
                          Re = de[Ie];
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
                                children: wt(Re),
                              },
                              ge
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
                      children: s.jsx(gt, {
                        className: "w-6 h-6 text-green-700",
                      }),
                    }),
                  }),
                ],
              }),
              s.jsx("div", {
                className: `flex-1 bg-orange-50 ${
                  (w == null ? void 0 : w.container.GUID) === y.GUID
                    ? "ring-2 ring-blue-400 ring-inset"
                    : ""
                }`,
                children: q(y.contents || []),
              }),
            ],
          },
          y.GUID
        );
      },
      Vt = p.useCallback(
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
          const q = y[0].CODE || y[0].code;
          if ((console.log("🎯 提取的藥碼:", q), !q)) {
            console.warn("⚠️ 無法定位藥品：缺少藥碼");
            return;
          }
          console.log("🎯 開始定位藥品:", q);
          const Y = (ne) => {
              for (const W of ne) {
                if (W.type === "grid_draw" && W.Boxes) {
                  for (const pe of W.Boxes)
                    for (const de of pe)
                      if (de.Code === q) {
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
                  W.drugs.some((de) => de.code === q)
                ) {
                  const de = document.querySelector(
                    `[data-container-guid="${W.GUID}"]`
                  );
                  if (de)
                    return (
                      console.log("✅ 找到藥品容器 (list_draw):", W),
                      { element: de, bounds: de.getBoundingClientRect() }
                    );
                }
                if (
                  (W.type === "store_shelves" ||
                    W.type === "dispensing_shelves") &&
                  W.medMapStock &&
                  W.medMapStock.some(
                    (de) => de.code === q || de.material_no === q
                  )
                ) {
                  const de = document.querySelector(
                    `[data-container-guid="${W.GUID}"]`
                  );
                  if (de)
                    return (
                      console.log("✅ 找到藥品容器 (store_shelves):", W),
                      { element: de, bounds: de.getBoundingClientRect() }
                    );
                }
                if (
                  W.type === "med_box" &&
                  W.med_info &&
                  W.med_info.length > 0 &&
                  W.med_info.some((de) => de.code === q)
                ) {
                  const de = document.querySelector(
                    `[data-container-guid="${W.GUID}"]`
                  );
                  if (de)
                    return (
                      console.log("✅ 找到藥品容器 (med_box):", W),
                      { element: de, bounds: de.getBoundingClientRect() }
                    );
                }
                if (W.contents && W.contents.length > 0) {
                  const pe = Y(W.contents);
                  if (pe) return pe;
                }
              }
              return null;
            },
            H = Y(o);
          if (H) {
            const ne = n.current.getBoundingClientRect(),
              W = H.bounds,
              pe = (W.left + W.right) / 2,
              de = (W.top + W.bottom) / 2,
              Z = (pe - ne.left - m.x) / m.scale,
              K = (de - ne.top - m.y) / m.scale,
              xe = ne.width / 2,
              ge = ne.height / 2,
              Ie = xe - Z * m.scale,
              Re = ge - K * m.scale;
            b((Ot) => ({ ...Ot, x: Ie, y: Re })),
              console.log("✅ 定位完成", {
                elementScreenCenter: { x: pe, y: de },
                elementCanvasPos: { x: Z, y: K },
                screenCenter: { x: xe, y: ge },
                newTransform: { x: Ie, y: Re },
              }),
              d(`已定位到藥品：${y.CHT_NAME || y.NAME || q}`, "success");
          } else
            console.warn("❌ 未找到藥品容器"),
              d("未找到該藥品的儲存位置", "error");
        },
        [o, m, d]
      );
    p.useImperativeHandle(
      t,
      () => (
        console.log("🔧 useImperativeHandle 設置 ref 方法"), { locateDrug: Vt }
      )
    );
    const Fo = async (y) => {
      if (y.key === "Enter" && I.trim() && !j) {
        y.preventDefault(), z(!0);
        try {
          console.log("🔍 搜尋條碼:", I);
          const q = await ke.searchByBarCode(I.trim());
          console.log("📋 條碼搜尋回應:", q),
            q.Code === 200
              ? (console.log("✅ 找到藥品資料:", q.Data),
                d("找到藥品資料", "success"),
                Vt(q.Data))
              : q.Code === -200 && q.Result === "查無資料"
              ? (console.log("⚠️ 查無資料，開啟建立條碼彈窗"),
                d("查無資料，請建立條碼", "error"),
                h(I.trim()),
                A(""))
              : (console.log("❌ 搜尋失敗:", q.Result),
                d(q.Result || "搜尋失敗", "error"));
        } catch (q) {
          console.error("條碼搜尋錯誤:", q), d("搜尋失敗，請稍後再試", "error");
        } finally {
          z(!1);
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
                value: I,
                onChange: (y) => A(y.target.value),
                onKeyDown: Fo,
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
                children: s.jsx(kr, { className: "w-6 h-6 text-blue-600" }),
              }),
            ],
          }),
        }),
        s.jsx("div", {
          className: "absolute bottom-4 right-4 z-10 flex gap-2",
          children: s.jsx("button", {
            onClick: () => u(!E),
            className: `rounded-lg shadow-lg p-2 transition-colors ${
              E
                ? "bg-red-500 text-white hover:bg-red-600"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`,
            title: E ? "Unlock Canvas" : "Lock Canvas",
            children: E
              ? s.jsx(Ld, { className: "w-6 h-6" })
              : s.jsx(Ud, { className: "w-6 h-6" }),
          }),
        }),
        s.jsx("div", {
          ref: n,
          className: `w-full h-full relative ${
            C && !E ? "cursor-grab" : "cursor-default"
          } ${v ? "cursor-grabbing" : ""}`,
          onMouseDown: k,
          onMouseMove: $,
          onMouseUp: V,
          onMouseLeave: V,
          onTouchStart: fe,
          onTouchMove: he,
          onTouchEnd: we,
          children: s.jsxs("div", {
            className: "absolute inset-0 origin-top-left",
            style: {
              transform: `translate(${m.x}px, ${m.y}px) scale(${m.scale})`,
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
                    borderSpacing: `${ie}px`,
                    minWidth: "fit-content",
                    minHeight: "fit-content",
                  },
                  children: s.jsx("tbody", {
                    children: Array.from({ length: Ye + 1 }, (y, q) =>
                      s.jsx(
                        "tr",
                        {
                          children: Array.from({ length: Be + 1 }, (Y, H) => {
                            const ne = Ce.find((W) => {
                              const pe = U(W.gird_position || "0,0");
                              return pe.row === q && pe.col === H;
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
                                    children: Pn(ne),
                                  },
                                  H
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
                                  H
                                );
                          }),
                        },
                        q
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
Bd.displayName = "DrugCanvas";
const oh = async (e) => {
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
        Master_GUID: l.Master_GUID,
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
        var d, x;
        if (h.error)
          (i += h.count),
            c.push(`${h.type}: ${h.error.message || "網路錯誤"}`),
            console.error(`❌ ${h.type} API 失敗:`, h.error);
        else if (((d = h.response) == null ? void 0 : d.Code) === 200)
          (a += h.count), console.log(`✅ ${h.type} API 成功:`, h.response);
        else {
          i += h.count;
          const m =
            ((x = h.response) == null ? void 0 : x.Result) || "未知錯誤";
          c.push(`${h.type}: ${m}`),
            console.error(`❌ ${h.type} API 失敗:`, h.response);
        }
      });
    } catch (l) {
      console.error("💥 批次更新過程中發生錯誤:", l);
    } finally {
      console.log("完成更新");
    }
  },
  lh = "modulepreload",
  ah = function (e) {
    return "/" + e;
  },
  yc = {},
  ih = function (t, n, r) {
    let o = Promise.resolve();
    if (n && n.length > 0) {
      document.getElementsByTagName("link");
      const a = document.querySelector("meta[property=csp-nonce]"),
        i =
          (a == null ? void 0 : a.nonce) ||
          (a == null ? void 0 : a.getAttribute("nonce"));
      o = Promise.allSettled(
        n.map((c) => {
          if (((c = ah(c)), c in yc)) return;
          yc[c] = !0;
          const h = c.endsWith(".css"),
            d = h ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${c}"]${d}`)) return;
          const x = document.createElement("link");
          if (
            ((x.rel = h ? "stylesheet" : lh),
            h || (x.as = "script"),
            (x.crossOrigin = ""),
            (x.href = c),
            i && x.setAttribute("nonce", i),
            document.head.appendChild(x),
            h)
          )
            return new Promise((m, b) => {
              x.addEventListener("load", m),
                x.addEventListener("error", () =>
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
  Qt = [
    { name: "2.13吋", box_type: "2.13", width: ["7.5"], unit: "cm" },
    { name: "2.9吋", type: "2.9", width: ["10", "15", "20"], unit: "cm" },
    { name: "4.2吋", type: "4.2", width: ["11", "16"], unit: "cm" },
  ],
  ch = () => {
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
      [x, m] = p.useState(0),
      [b, v] = p.useState({}),
      [N, E] = p.useState(""),
      [u, f] = p.useState(""),
      [g, C] = p.useState("N"),
      [B, I] = p.useState([]),
      [A, j] = p.useState(!1),
      [z, D] = p.useState(!1),
      [F, G] = p.useState(null),
      [P, M] = p.useState(null),
      [ee, w] = p.useState(!1),
      [O, S] = p.useState(!1);
    p.useEffect(() => {
      if (n && e)
        if (c === "add") {
          m(0);
          const L = {};
          Qt.forEach((_, re) => {
            L[re] = 0;
          }),
            v(L),
            E(""),
            D(!1),
            Q();
        } else {
          const L = Qt.findIndex(
            (_) => _.box_type === n.box_type || _.type === n.box_type
          );
          if ((console.log(n), L >= 0)) {
            m(L);
            const re = Qt[L].width.findIndex((k) => {
                var $;
                return (
                  k === (($ = n.width) == null ? void 0 : $[n.width_index || 0])
                );
              }),
              T = {};
            Qt.forEach((k, $) => {
              $ === L ? (T[$] = re >= 0 ? re : 0) : (T[$] = 0);
            }),
              v(T);
          } else {
            m(0);
            const _ = {};
            Qt.forEach((re, T) => {
              _[T] = 0;
            }),
              v(_);
          }
          E(n.ip || ""),
            M({
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
      ie = (L) => {
        if (!L || !L.contents || L.contents.length === 0) return "0,0";
        let _ = -1,
          re = 0;
        return (
          L.contents.forEach((T) => {
            if (T.gird_position) {
              const [k, $] = T.gird_position.split(",").map(Number);
              $ > _ && ((_ = $), (re = k));
            }
          }),
          `${re},${_ + 1}`
        );
      },
      X = () => {
        if (!P || c !== "edit") return !1;
        const L = Qt[x],
          _ = b[x] || 0,
          re = L.box_type || L.type || L.name;
        return (
          P.box_type !== re ||
          P.width_index !== _ ||
          P.ip !== N ||
          JSON.stringify(P.storage) !==
            JSON.stringify(n == null ? void 0 : n.storage)
        );
      },
      oe = (L) => {
        m(L);
      },
      Ne = (L, _) => {
        v((re) => ({ ...re, [L]: _ }));
      },
      le = () => {
        n && (c === "add" ? U() : ae());
      },
      ye = () => {
        t();
      },
      U = async () => {
        if (!n || !F) {
          a("缺少必要資料，無法新增藥盒", "error");
          return;
        }
        D(!0);
        try {
          const L = Qt[x],
            _ = b[x] || 0,
            re = L.width[_],
            T = ie(F),
            k = {
              Master_GUID: F.GUID,
              position: T,
              width: re.toString(),
              height: "60",
              ip_box: N,
              serverName: F.serverName || "",
              serverType: F.serverType || "",
            };
          console.log("🚀 發送新增藥盒 API 請求:", k);
          const $ = await ke.addMedMapBox(k);
          $.Code === 200
            ? (a("藥盒新增成功", "success"), t(), await R())
            : a(`藥盒新增失敗：${$.Result || "未知錯誤"}`, "error");
        } catch (L) {
          console.error("Add med box failed:", L),
            a("藥盒新增失敗：網路錯誤", "error");
        } finally {
          D(!1);
        }
      },
      ae = async () => {
        var L;
        if (!n || !X()) {
          a("沒有資料變更", "error");
          return;
        }
        w(!0);
        try {
          const _ = Qt[x],
            re = b[x] || 0,
            T = _.width[re],
            k = _.box_type || _.type || _.name,
            $ = P.box_type !== k || P.width_index !== re || P.ip !== N,
            V =
              JSON.stringify(P.storage) !==
              JSON.stringify(n == null ? void 0 : n.storage),
            se = [];
          if ($) {
            const be = {
              GUID: n.GUID,
              Master_GUID: n.Master_GUID,
              position: n.gird_position,
              ip_light: N,
              serverName: n.serverName,
              serverType: n.serverType,
            };
            se.push(ke.updateMedMapBox([be]));
          }
          V &&
            se.push(
              ke.updateEpd266Storages(n.serverName || "", n.serverType || "", [
                n.storage,
              ])
            );
          const ue = await Promise.all(se);
          if (ue.every((be) => be.Code === 200))
            a("藥盒更新成功", "success"), t(), await R();
          else {
            const be = ue.filter((je) => je.Code !== 200);
            a(
              `藥盒更新失敗：${
                ((L = be[0]) == null ? void 0 : L.Result) || "未知錯誤"
              }`,
              "error"
            );
          }
        } catch (_) {
          console.error("Update med box failed:", _),
            a("藥盒更新失敗：網路錯誤", "error");
        } finally {
          w(!1);
        }
      },
      R = async () => {
        if (!r) {
          console.warn("⚠️ 沒有選中的部門類型，無法重新獲取資料");
          return;
        }
        console.log("🔄 重新獲取藥品地圖資料，部門類型:", r), l(!0);
        try {
          const L = await ke.getMedMapByDepartment(r);
          if (L.Code === 200 && L.Data) {
            console.log("📡 API 回傳成功，開始轉換資料");
            const _ = await ih(() => Promise.resolve().then(() => Im), void 0),
              re = _.default.convertMedMapApiToFakeData(L.Data);
            if (!_.default.validateConvertedData(re)) {
              console.error("❌ 轉換後的資料驗證失敗"),
                a("資料更新失敗：資料格式錯誤", "error");
              return;
            }
            o(re), console.log("✅ 藥品地圖資料已更新");
          } else
            console.error("❌ API 回傳錯誤:", L),
              a("資料更新失敗：API 錯誤", "error");
        } catch (L) {
          console.error("💥 重新獲取藥品地圖資料失敗:", L),
            a("資料更新失敗：網路錯誤", "error");
        } finally {
          l(!1);
        }
      },
      J = async () => {
        j(!0);
        try {
          const L = u.toLowerCase().trim();
          let _ = h;
          L &&
            (_ = _.filter((re) => {
              var T, k, $;
              return (
                ((T = re.CODE) == null
                  ? void 0
                  : T.toLowerCase().includes(L)) ||
                ((k = re.NAME) == null
                  ? void 0
                  : k.toLowerCase().includes(L)) ||
                (($ = re.CHT_NAME) == null
                  ? void 0
                  : $.toLowerCase().includes(L))
              );
            })),
            g !== "N" && (_ = _.filter((re) => re.DRUGKIND === g)),
            I(_);
        } catch (L) {
          console.error("Search failed:", L), I([]);
        } finally {
          j(!1);
        }
      },
      ce = (L, _) => {
        console.log("📸 掃描成功，藥品資料:", _), S(!1), Se(_);
      },
      Se = async (L) => {
        if (n)
          try {
            console.log("🚀 開始更新藥盒藥品代碼:", L.CODE);
            const _ = await ke.updateEpd266Medcode(
              n.serverName || "",
              n.serverType || "",
              L.CODE,
              n.storage || {}
            );
            _.Code === 200
              ? (console.log("✅ 藥品代碼更新成功:", _.Data),
                (n.storage = _.Data),
                (n.med_info = [
                  { name: L.NAME, cht_name: L.CHT_NAME, code: L.CODE },
                ]),
                a("藥品更新成功", "success"),
                i())
              : (console.error("❌ 藥品代碼更新失敗:", _),
                a(`藥品更新失敗：${_.Result || "未知錯誤"}`, "error"));
          } catch (_) {
            console.error("💥 藥品代碼更新發生錯誤:", _),
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
              onClick: (L) => L.stopPropagation(),
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
                                onChange: (L) => E(L.target.value),
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
                                children: Qt.map((L, _) =>
                                  s.jsxs(
                                    "label",
                                    {
                                      className: `flex items-center px-4 py-2 border-2 rounded-lg cursor-pointer transition-all ${
                                        x === _
                                          ? "border-blue-500 bg-blue-50"
                                          : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                                      }`,
                                      children: [
                                        s.jsx("input", {
                                          type: "radio",
                                          name: "boxType",
                                          value: _,
                                          checked: x === _,
                                          onChange: () => oe(_),
                                          className:
                                            "w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 hidden",
                                        }),
                                        s.jsx("div", {
                                          children: s.jsx("div", {
                                            className:
                                              "text-sm font-medium text-gray-900",
                                            children: L.name,
                                          }),
                                        }),
                                      ],
                                    },
                                    _
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
                              Qt.map((L, _) =>
                                s.jsx(
                                  "div",
                                  {
                                    className: `flex gap-4 ${
                                      x === _ ? "block" : "hidden"
                                    }`,
                                    children: L.width.map((re, T) =>
                                      s.jsxs(
                                        "label",
                                        {
                                          className: `flex items-center justify-center px-4 py-2 border-2 rounded-lg cursor-pointer transition-all ${
                                            x === _ && (b[_] || 0) === T
                                              ? "border-green-500 bg-green-50"
                                              : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                                          }`,
                                          children: [
                                            s.jsx("input", {
                                              type: "radio",
                                              name: `width-${_}`,
                                              value: T,
                                              checked:
                                                x === _ && (b[_] || 0) === T,
                                              onChange: () => Ne(_, T),
                                              className:
                                                "w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500 hidden",
                                            }),
                                            s.jsx("div", {
                                              className: "text-center",
                                              children: s.jsxs("div", {
                                                className:
                                                  "text-sm font-semibold text-gray-900",
                                                children: [re, " ", L.unit],
                                              }),
                                            }),
                                          ],
                                        },
                                        `${_}-${T}`
                                      )
                                    ),
                                  },
                                  _
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
                                          children: n.med_info.map((L, _) =>
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
                                                          L.code ||
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
                                                          L.name ||
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
                                                          L.cht_name ||
                                                          d("status.notSet"),
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              },
                                              _
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
                                    onClick: () => S(!0),
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
                                    onChange: (L) => f(L.target.value),
                                    placeholder: d("placeholder.drugSearch"),
                                    className:
                                      "border rounded px-3 py-1 flex-1 min-w-0 focus:border-blue-500 focus:outline-none transition-colors",
                                  }),
                                  s.jsxs("select", {
                                    value: g,
                                    onChange: (L) => C(L.target.value),
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
                                    onClick: J,
                                    disabled: A,
                                    className:
                                      "bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 transition-colors whitespace-nowrap disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2",
                                    children: [
                                      A &&
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
                                children: A
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
                                  : B.length > 0
                                  ? s.jsx("div", {
                                      className: "space-y-1",
                                      children: B.map((L, _) =>
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
                                                    children: L.NAME,
                                                  }),
                                                  s.jsx("div", {
                                                    className:
                                                      "text-xs text-gray-500 truncate",
                                                    children: L.CHT_NAME,
                                                  }),
                                                  s.jsx("div", {
                                                    className:
                                                      "text-xs text-gray-400 font-mono",
                                                    children: L.CODE,
                                                  }),
                                                ],
                                              }),
                                              s.jsx("button", {
                                                onClick: () => Se(L),
                                                className:
                                                  "ml-2 p-1 text-green-600 hover:text-green-700 hover:bg-green-50 rounded transition-colors flex-shrink-0",
                                                title: d("button.add"),
                                                children: s.jsx(gt, {
                                                  className: "w-4 h-4",
                                                }),
                                              }),
                                            ],
                                          },
                                          L.GUID || _
                                        )
                                      ),
                                    })
                                  : s.jsx("div", {
                                      className:
                                        "text-gray-500 text-center flex items-center justify-center h-full",
                                      children: d(
                                        u || g !== "N"
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
                      disabled: z || ee,
                      className:
                        "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                      children: d("button.cancel"),
                    }),
                    s.jsxs("button", {
                      onClick: le,
                      disabled: z || ee,
                      className:
                        "px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center space-x-2",
                      children: [
                        (z || ee) &&
                          s.jsx(Rt, { className: "w-4 h-4 animate-spin" }),
                        s.jsx("span", {
                          children: z
                            ? "新增中..."
                            : ee
                            ? "更新中..."
                            : d(c === "add" ? "button.add" : "button.save"),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            s.jsx(zo, {
              isOpen: O,
              onClose: () => S(!1),
              onScanSuccess: ce,
              mode: "set_med_box_med_mode",
            }),
          ],
        });
  },
  uh = () => {
    const {
        listDrawModalOpen: e,
        closeListDrawModal: t,
        selectedListDraw: n,
        triggerRefresh: r,
      } = Je(),
      { t: o } = pt(),
      [l, a] = p.useState(""),
      [i, c] = p.useState([]),
      [h, d] = p.useState(""),
      [x, m] = p.useState("N"),
      [b, v] = p.useState([]),
      [N, E] = p.useState(!1);
    p.useEffect(() => {
      n && e && (a(n.name || ""), c(n.med_info || []));
    }, [n, e]);
    const u = (I) => {
        c((A) => A.filter((j) => j.code !== I));
      },
      f = async () => {
        E(!0);
        try {
          const I = await ke.searchMedicine(h, x);
          v(I);
        } catch (I) {
          console.error("Search failed:", I), v([]);
        } finally {
          E(!1);
        }
      },
      g = (I) => {
        const A = {
          id: I.GUID || `${Date.now()}_${Math.random()}`,
          name: I.NAME,
          cht_name: I.CHT_NAME,
          code: I.CODE,
        };
        c((j) => (j.some((D) => D.code === A.code) ? j : [...j, A]));
      },
      C = () => {
        n && ((n.name = l), (n.med_info = i), r(), t());
      },
      B = () => {
        t();
      };
    return !e || !n
      ? null
      : s.jsxs("div", {
          className: "fixed inset-0 z-50 flex items-center justify-center",
          children: [
            s.jsx("div", {
              className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
              onClick: B,
            }),
            s.jsxs("div", {
              className:
                "relative flex flex-col bg-white rounded-xl shadow-2xl border border-gray-200",
              style: { width: "90vw", height: "90vh" },
              onClick: (I) => I.stopPropagation(),
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
                      onClick: B,
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
                            onChange: (I) => a(I.target.value),
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
                                    children: i.map((I) =>
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
                                                    I.code &&
                                                      s.jsx("div", {
                                                        children: s.jsx("div", {
                                                          className:
                                                            "text-sm text-gray-900 font-mono",
                                                          children: I.code,
                                                        }),
                                                      }),
                                                    s.jsx("div", {
                                                      children: s.jsx("div", {
                                                        className:
                                                          "text-sm text-gray-900 font-medium",
                                                        children:
                                                          I.name ||
                                                          o("status.notSet"),
                                                      }),
                                                    }),
                                                    s.jsx("div", {
                                                      children: s.jsx("div", {
                                                        className:
                                                          "text-sm text-gray-900",
                                                        children:
                                                          I.cht_name ||
                                                          o("status.notSet"),
                                                      }),
                                                    }),
                                                  ],
                                                }),
                                              }),
                                              s.jsx("button", {
                                                onClick: () => u(I.code),
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
                                        I.id
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
                                    onChange: (I) => d(I.target.value),
                                    placeholder: o("placeholder.drugSearch"),
                                    className:
                                      "border rounded px-3 py-1 flex-1 min-w-0 focus:border-blue-500 focus:outline-none transition-colors",
                                  }),
                                  s.jsxs("select", {
                                    value: x,
                                    onChange: (I) => m(I.target.value),
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
                                children: N
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
                                  : b.length > 0
                                  ? s.jsx("div", {
                                      className: "space-y-1",
                                      children: b.map((I, A) =>
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
                                                    children: I.NAME,
                                                  }),
                                                  s.jsx("div", {
                                                    className:
                                                      "text-xs text-gray-500 truncate",
                                                    children: I.CHT_NAME,
                                                  }),
                                                  s.jsx("div", {
                                                    className:
                                                      "text-xs text-gray-400 font-mono",
                                                    children: I.CODE,
                                                  }),
                                                ],
                                              }),
                                              s.jsx("button", {
                                                onClick: () => g(I),
                                                className:
                                                  "ml-2 p-1 text-green-600 hover:text-green-700 hover:bg-green-50 rounded transition-colors flex-shrink-0",
                                                title: o("button.add"),
                                                children: s.jsx(gt, {
                                                  className: "w-4 h-4",
                                                }),
                                              }),
                                            ],
                                          },
                                          I.GUID || A
                                        )
                                      ),
                                    })
                                  : s.jsx("div", {
                                      className:
                                        "text-gray-500 text-center flex items-center justify-center h-full",
                                      children: o(
                                        h || x !== "N"
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
                      onClick: B,
                      className:
                        "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                      children: o("button.cancel"),
                    }),
                    s.jsx("button", {
                      onClick: C,
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
  dh = () => {
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
      [h, d] = p.useState(""),
      [x, m] = p.useState(null),
      [b, v] = p.useState(!1),
      [N, E] = p.useState(!1),
      [u, f] = p.useState(null),
      [g, C] = p.useState(""),
      [B, I] = p.useState("N"),
      [A, j] = p.useState([]),
      [z, D] = p.useState(!1),
      [F, G] = p.useState(0),
      [P, M] = p.useState({ x: 0, y: 0 });
    p.useEffect(() => {
      if (n && e)
        if ((d(n.name || ""), n.drawer)) {
          if (!b) {
            console.log("🔄 備份原始 drawer 資料:", n);
            const k = JSON.parse(JSON.stringify(n.drawer));
            m(k), v(!0), console.log("✅ 備份完成，備份資料:", k);
          }
        } else console.log("⚠️ 沒有 drawer 資料可備份"), m(null), v(!1);
    }, [n, e, b]),
      p.useEffect(() => {
        e || (v(!1), m(null), f(null));
      }, [e]);
    const ee = () => {
        n && re();
      },
      w = () => {
        if (
          (console.log("🔄 開始恢復原始資料..."),
          console.log("原始備份資料:", x),
          console.log("當前 selectedGridDraw:", n),
          n && x && b)
        ) {
          console.log("📦 恢復 drawer 資料...");
          const k = JSON.parse(JSON.stringify(x));
          if (((n.drawer = k), o)) {
            const $ = (se) => {
                se.forEach((ue) => {
                  ue.GUID === n.GUID &&
                    (console.log("🎯 找到目標格線抽屜，更新資料"),
                    (ue.drawer = k)),
                    ue.contents && Array.isArray(ue.contents) && $(ue.contents),
                    ue.components &&
                      Array.isArray(ue.components) &&
                      $(ue.components);
                });
              },
              V = JSON.parse(JSON.stringify(o));
            $(V), l(V), console.log("🔄 已更新全域資料狀態");
          }
          console.log("✅ 資料已恢復:", n.drawer);
        } else
          console.log(
            "⚠️ 無法恢復資料 - selectedGridDraw、originalDrawerData 或 hasBackup 為空"
          ),
            console.log("selectedGridDraw:", !!n),
            console.log("originalDrawerData:", !!x),
            console.log("hasBackup:", b);
        f(null), v(!1), m(null), r(), t();
      },
      O = (k, $) => {
        if (!u) return !1;
        const V = Math.min(u.startRow, u.endRow),
          se = Math.max(u.startRow, u.endRow),
          ue = Math.min(u.startCol, u.endCol),
          ve = Math.max(u.startCol, u.endCol);
        return k >= V && k <= se && $ >= ue && $ <= ve;
      },
      S = (k) => {
        var De;
        if (
          !((De = n == null ? void 0 : n.drawer) != null && De.Boxes) ||
          k.Slave
        )
          return { width: 1, height: 1 };
        const V = n.drawer.Boxes.flat().filter(
          (fe) =>
            fe.Slave &&
            fe.MasterBox_Row === k.Row &&
            fe.MasterBox_Column === k.Column
        );
        if (V.length === 0) return { width: 1, height: 1 };
        const se = [k, ...V],
          ue = Math.min(...se.map((fe) => fe.Row)),
          ve = Math.max(...se.map((fe) => fe.Row)),
          be = Math.min(...se.map((fe) => fe.Column));
        return {
          width: Math.max(...se.map((fe) => fe.Column)) - be + 1,
          height: ve - ue + 1,
        };
      },
      Q = () => {
        var be;
        if (!u || !((be = n == null ? void 0 : n.drawer) != null && be.Boxes))
          return [];
        const k = n.drawer.Boxes.flat(),
          $ = Math.min(u.startRow, u.endRow),
          V = Math.max(u.startRow, u.endRow),
          se = Math.min(u.startCol, u.endCol),
          ue = Math.max(u.startCol, u.endCol),
          ve = [];
        return (
          k.forEach((je) => {
            if (!je.Slave) {
              const De = S(je),
                fe = je.Row + De.height - 1,
                he = je.Column + De.width - 1;
              je.Row >= $ &&
                fe <= V &&
                je.Column >= se &&
                he <= ue &&
                ve.push(je);
            }
          }),
          ve
        );
      },
      ie = (k, $, V, se) => {
        var he;
        if (!u || !((he = n == null ? void 0 : n.drawer) != null && he.Boxes))
          return !1;
        const ue = n.drawer.Boxes.flat();
        let ve = !0,
          be = k,
          je = $,
          De = V,
          fe = se;
        for (; ve; )
          (ve = !1),
            ue.forEach((we) => {
              if (!we.Slave) {
                const _e = S(we),
                  Ve = we.Row + _e.height - 1,
                  Ce = we.Column + _e.width - 1;
                !(we.Row > je || Ve < be || we.Column > fe || Ce < De) &&
                  (we.Row < be && ((be = we.Row), (ve = !0)),
                  Ve > je && ((je = Ve), (ve = !0)),
                  we.Column < De && ((De = we.Column), (ve = !0)),
                  Ce > fe && ((fe = Ce), (ve = !0)));
              }
            });
        return { minRow: be, maxRow: je, minCol: De, maxCol: fe };
      },
      X = () => {
        var ve;
        if (!u || !((ve = n == null ? void 0 : n.drawer) != null && ve.Boxes))
          return !1;
        const k = Math.min(u.startRow, u.endRow),
          $ = Math.max(u.startRow, u.endRow),
          V = Math.min(u.startCol, u.endCol),
          se = Math.max(u.startCol, u.endCol),
          ue = n.drawer.Boxes.flat();
        for (let be = k; be <= $; be++)
          for (let je = V; je <= se; je++) {
            let De = !1;
            for (const fe of ue)
              if (!fe.Slave) {
                const he = S(fe),
                  we = fe.Row + he.height - 1,
                  _e = fe.Column + he.width - 1;
                if (be >= fe.Row && be <= we && je >= fe.Column && je <= _e) {
                  De = !0;
                  break;
                }
              }
            if (!De) return !1;
          }
        return !0;
      },
      oe = () => {
        var he, we;
        const k = Q();
        if (!u) return { canMerge: !1, canUnmerge: !1 };
        if (k.length === 0) return { canMerge: !1, canUnmerge: !1 };
        const $ =
            ((we =
              (he = n == null ? void 0 : n.drawer) == null
                ? void 0
                : he.Boxes) == null
              ? void 0
              : we.flat()) || [],
          V = k.some(
            (_e) =>
              $.filter(
                (Ce) =>
                  Ce.Slave &&
                  Ce.MasterBox_Row === _e.Row &&
                  Ce.MasterBox_Column === _e.Column
              ).length > 0
          ),
          se = Math.min(u.startRow, u.endRow),
          ue = Math.max(u.startRow, u.endRow),
          ve = Math.min(u.startCol, u.endCol),
          be = Math.max(u.startCol, u.endCol),
          je = $.some(
            (_e) =>
              _e.Slave &&
              _e.Row >= se &&
              _e.Row <= ue &&
              _e.Column >= ve &&
              _e.Column <= be
          );
        return { canMerge: k.length > 1 && X(), canUnmerge: V || je };
      },
      { canMerge: Ne, canUnmerge: le } = oe(),
      ye = async () => {
        D(!0);
        try {
          const k = g.toLowerCase().trim();
          let $ = i;
          k &&
            ($ = $.filter((V) => {
              var se, ue, ve;
              return (
                ((se = V.CODE) == null
                  ? void 0
                  : se.toLowerCase().includes(k)) ||
                ((ue = V.NAME) == null
                  ? void 0
                  : ue.toLowerCase().includes(k)) ||
                ((ve = V.CHT_NAME) == null
                  ? void 0
                  : ve.toLowerCase().includes(k))
              );
            })),
            B !== "N" && ($ = $.filter((V) => V.DRUGKIND === B)),
            j($);
        } catch (k) {
          console.error("Search failed:", k), j([]);
        } finally {
          D(!1);
        }
      },
      U = async (k) => {
        var V;
        if (!u || !((V = n == null ? void 0 : n.drawer) != null && V.Boxes))
          return;
        const $ = Q();
        if ($.length !== 0)
          try {
            const se = {
              ServerName: n.serverName,
              ServerType: n.serverType,
              ValueAry: [`guid=${$[0].GUID}`, `code=${k.CODE}`],
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
                const ve = (je) => {
                    je.forEach((De) => {
                      De.GUID === n.GUID &&
                        (console.log("🎯 找到目標格線抽屜，更新資料"),
                        (De.drawer = n.drawer),
                        n.Boxes && (De.Boxes = n.Boxes)),
                        De.contents &&
                          Array.isArray(De.contents) &&
                          ve(De.contents),
                        De.components &&
                          Array.isArray(De.components) &&
                          ve(De.components);
                    });
                  },
                  be = JSON.parse(JSON.stringify(o));
                ve(be), l(be);
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
      ae = (k, $, V) => {
        V.preventDefault(),
          V.stopPropagation(),
          "touches" in V &&
            (G(Date.now()),
            M({ x: V.touches[0].clientX, y: V.touches[0].clientY })),
          E(!0),
          f({ startRow: k, startCol: $, endRow: k, endCol: $ });
      },
      R = (k, $) => {
        if (!N || !u) return;
        const V = Math.min(u.startRow, k),
          se = Math.max(u.startRow, k),
          ue = Math.min(u.startCol, $),
          ve = Math.max(u.startCol, $),
          be = ie(V, se, ue, ve);
        be &&
          f((je) =>
            je
              ? {
                  startRow: je.startRow,
                  startCol: je.startCol,
                  endRow: k >= je.startRow ? be.maxRow : be.minRow,
                  endCol: $ >= je.startCol ? be.maxCol : be.minCol,
                }
              : null
          );
      },
      J = () => {
        if (N && (E(!1), u && n != null && n.Boxes)) {
          const k = Math.min(u.startRow, u.endRow),
            $ = Math.max(u.startRow, u.endRow),
            V = Math.min(u.startCol, u.endCol),
            se = Math.max(u.startCol, u.endCol),
            ue = ie(k, $, V, se);
          ue &&
            f({
              startRow: ue.minRow,
              startCol: ue.minCol,
              endRow: ue.maxRow,
              endCol: ue.maxCol,
            });
        }
      },
      ce = () => {
        var k;
        !Ne ||
          !((k = n == null ? void 0 : n.drawer) != null && k.Boxes) ||
          !u ||
          _();
      },
      Se = () => {
        var k;
        !le ||
          !((k = n == null ? void 0 : n.drawer) != null && k.Boxes) ||
          !u ||
          (console.log(u), L());
      },
      L = async () => {
        var k;
        if (!(!u || !((k = n == null ? void 0 : n.drawer) != null && k.Boxes)))
          try {
            const $ = Math.min(u.startRow, u.endRow),
              V = Math.max(u.startRow, u.endRow),
              se = Math.min(u.startCol, u.endCol),
              ue = Math.max(u.startCol, u.endCol),
              be = n.drawer.Boxes.flat().filter(
                (we) =>
                  we.Row >= $ &&
                  we.Row <= V &&
                  we.Column >= se &&
                  we.Column <= ue
              ),
              je = [],
              De = [];
            be.forEach((we) => {
              je.push(we.Column.toString()), De.push(we.Row.toString());
            });
            const fe = {
              ServerName: n.serverName,
              ServerType: n.serverType,
              ValueAry: [
                `SelectColumns=${je.join(",")}`,
                `SelectRows=${De.join(",")}`,
              ],
              Data: { IP: n.ip, Boxes: n.Boxes },
            };
            console.log("🚀 發送 API 請求:", fe);
            const he = await ke.request("/api/device/separate_drawer_boxes", {
              method: "POST",
              body: JSON.stringify(fe),
            });
            if ((console.log("📡 API 回應:", he), he.Code === 200 && he.Data)) {
              if (
                he.Data.Boxes &&
                Array.isArray(he.Data.Boxes) &&
                ((n.Boxes = he.Data.Boxes),
                (n.drawer = he.Data),
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
                  _e = JSON.parse(JSON.stringify(o));
                we(_e), l(_e);
              }
            } else
              console.error("❌ API 回應錯誤:", he),
                a(`取消合併失敗：${he.Result || "未知錯誤"}`, "error");
          } catch ($) {
            console.error("💥 API 調用失敗:", $),
              a("取消合併失敗：網路錯誤", "error");
          } finally {
            console.log("更新後資料：", n),
              console.log("更新後最深層資料：", o),
              f(null),
              r();
          }
      },
      _ = async () => {
        var k;
        if (!(!u || !((k = n == null ? void 0 : n.drawer) != null && k.Boxes)))
          try {
            const $ = Math.min(u.startRow, u.endRow),
              V = Math.max(u.startRow, u.endRow),
              se = Math.min(u.startCol, u.endCol),
              ue = Math.max(u.startCol, u.endCol),
              be = n.drawer.Boxes.flat().filter(
                (we) =>
                  we.Row >= $ &&
                  we.Row <= V &&
                  we.Column >= se &&
                  we.Column <= ue
              ),
              je = [],
              De = [];
            be.forEach((we) => {
              je.push(we.Column.toString()), De.push(we.Row.toString());
            });
            const fe = {
              ServerName: n.serverName,
              ServerType: n.serverType,
              ValueAry: [
                `SelectColumns=${je.join(",")}`,
                `SelectRows=${De.join(",")}`,
              ],
              Data: { IP: n.ip, Boxes: n.Boxes },
            };
            console.log("🚀 發送 API 請求:", fe);
            const he = await ke.request("/api/device/combine_drawer_boxes", {
              method: "POST",
              body: JSON.stringify(fe),
            });
            if ((console.log("📡 API 回應:", he), he.Code === 200 && he.Data)) {
              if (
                he.Data.Boxes &&
                Array.isArray(he.Data.Boxes) &&
                ((n.Boxes = he.Data.Boxes),
                (n.drawer = he.Data),
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
                  _e = JSON.parse(JSON.stringify(o));
                we(_e), l(_e);
              }
            } else
              console.error("❌ API 回應錯誤:", he),
                a(`取消合併失敗：${he.Result || "未知錯誤"}`, "error");
          } catch ($) {
            console.error("💥 API 調用失敗:", $),
              a("取消合併失敗：網路錯誤", "error");
          } finally {
            console.log("更新後資料：", n),
              console.log("更新後最深層資料：", o),
              f(null),
              r();
          }
      },
      re = async () => {
        if (n)
          try {
            n.name = h;
            const k = {
              ServerName: n.serverName,
              ServerType: n.serverType,
              Data: [n.drawer],
            };
            console.log("🚀 發送確認更新 API 請求:", k);
            const $ = await ke.request("/api/device/update_epd583_drawers", {
              method: "POST",
              body: JSON.stringify(k),
            });
            if ((console.log("📡 確認更新 API 回應:", $), $.Code === 200)) {
              if (
                (console.log("✅ 抽屜資料更新成功"),
                a("抽屜資料更新成功", "success"),
                o)
              ) {
                const V = (ue) => {
                    ue.forEach((ve) => {
                      ve.GUID === n.GUID &&
                        (console.log("🎯 找到目標格線抽屜，更新名稱"),
                        (ve.name = n.name)),
                        ve.contents &&
                          Array.isArray(ve.contents) &&
                          V(ve.contents),
                        ve.components &&
                          Array.isArray(ve.components) &&
                          V(ve.components);
                    });
                  },
                  se = JSON.parse(JSON.stringify(o));
                V(se), l(se);
              }
              v(!1), m(null), r(), t();
            } else
              console.error("❌ 抽屜資料更新失敗:", $),
                a(`抽屜資料更新失敗：${$.Result || "未知錯誤"}`, "error");
          } catch (k) {
            console.error("💥 抽屜資料更新 API 調用失敗:", k),
              a("抽屜資料更新失敗：網路錯誤", "error");
          }
      },
      T = () => {
        var De;
        if (
          !((De = n == null ? void 0 : n.drawer) != null && De.Boxes) ||
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
        const k = n.drawer.Boxes.flat(),
          $ = (fe) => {
            if (fe.Slave) return { width: 1, height: 1 };
            const he = k.filter(
              (Be) =>
                Be.Slave &&
                Be.MasterBox_Row === fe.Row &&
                Be.MasterBox_Column === fe.Column
            );
            if (he.length === 0) return { width: 1, height: 1 };
            const we = [fe, ...he],
              _e = Math.min(...we.map((Be) => Be.Row)),
              Ve = Math.max(...we.map((Be) => Be.Row)),
              Ce = Math.min(...we.map((Be) => Be.Column));
            return {
              width: Math.max(...we.map((Be) => Be.Column)) - Ce + 1,
              height: Ve - _e + 1,
            };
          },
          V = Math.max(...k.map((fe) => fe.Row + 1 - 1)),
          se = Math.max(...k.map((fe) => fe.Column + 1 - 1)),
          ue = V + 1,
          ve = se + 1,
          be = Array(ue)
            .fill(null)
            .map(() => Array(ve).fill(!1)),
          je = {};
        return (
          k.forEach((fe) => {
            if (!fe.Slave) {
              const he = $(fe);
              (je[`${fe.Row},${fe.Column}`] = fe),
                (fe.calculatedWidth = he.width),
                (fe.calculatedHeight = he.height);
            }
          }),
          k.forEach((fe) => {
            if (
              !fe.Slave &&
              (fe.calculatedWidth > 1 || fe.calculatedHeight > 1)
            )
              for (let he = fe.Row; he < fe.Row + fe.calculatedHeight; he++)
                for (
                  let we = fe.Column;
                  we < fe.Column + fe.calculatedWidth;
                  we++
                )
                  (he !== fe.Row || we !== fe.Column) && (be[he][we] = !0);
          }),
          s.jsx("div", {
            className: "rounded-lg",
            children: s.jsx("table", {
              className: "w-full",
              children: s.jsx("tbody", {
                children: Array.from({ length: ue }, (fe, he) =>
                  s.jsx(
                    "tr",
                    {
                      children: Array.from({ length: ve }, (we, _e) => {
                        if (be[he][_e]) return null;
                        const Ve = `${he},${_e}`,
                          Ce = je[Ve];
                        return Ce
                          ? s.jsx(
                              "td",
                              {
                                className: `border border-gray-400 pt-1 pl-1 align-top cursor-pointer select-none ${
                                  O(he, _e)
                                    ? "bg-blue-200"
                                    : "bg-white hover:bg-gray-100"
                                }`,
                                style: {
                                  width: `${100 / ve}%`,
                                  minHeight: "40px",
                                  height: `${50 * Ce.calculatedHeight}px`,
                                  maxHeight: `${50 * Ce.calculatedHeight}px`,
                                },
                                colSpan: Ce.calculatedWidth,
                                rowSpan: Ce.calculatedHeight,
                                onMouseDown: (Ye) => ae(he, _e, Ye),
                                onMouseEnter: () => R(he, _e),
                                onMouseUp: J,
                                onTouchStart: (Ye) => ae(he, _e, Ye),
                                onTouchMove: (Ye) => {
                                  if ((Ye.preventDefault(), !N)) return;
                                  const Be = Ye.touches[0],
                                    wt = document.elementFromPoint(
                                      Be.clientX,
                                      Be.clientY
                                    ),
                                    it = wt == null ? void 0 : wt.closest("td");
                                  if (it) {
                                    const Pn = parseInt(
                                        it.getAttribute("data-row") || "0"
                                      ),
                                      Vt = parseInt(
                                        it.getAttribute("data-col") || "0"
                                      );
                                    R(Pn, Vt);
                                  }
                                },
                                onTouchEnd: J,
                                "data-row": he,
                                "data-col": _e,
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
                              _e
                            )
                          : s.jsx(
                              "td",
                              {
                                className: `border border-gray-300 p-2 align-top cursor-pointer select-none ${
                                  O(he, _e)
                                    ? "border-1 border-blue-500 bg-blue-100"
                                    : "bg-gray-50 hover:bg-gray-100"
                                }`,
                                style: {
                                  width: `${100 / ve}%`,
                                  minWidth: "80px",
                                  minHeight: "80px",
                                },
                                onMouseDown: (Ye) => ae(he, _e, Ye),
                                onMouseEnter: () => R(he, _e),
                                onMouseUp: J,
                                onTouchStart: (Ye) => ae(he, _e, Ye),
                                onTouchMove: (Ye) => {
                                  if ((Ye.preventDefault(), !N)) return;
                                  const Be = Ye.touches[0],
                                    wt = document.elementFromPoint(
                                      Be.clientX,
                                      Be.clientY
                                    ),
                                    it = wt == null ? void 0 : wt.closest("td");
                                  if (it) {
                                    const Pn = parseInt(
                                        it.getAttribute("data-row") || "0"
                                      ),
                                      Vt = parseInt(
                                        it.getAttribute("data-col") || "0"
                                      );
                                    R(Pn, Vt);
                                  }
                                },
                                onTouchEnd: J,
                                "data-row": he,
                                "data-col": _e,
                                children: s.jsx("div", {
                                  className:
                                    "h-full flex items-center justify-center text-gray-400 text-xs",
                                  children: c("status.notAdded"),
                                }),
                              },
                              _e
                            );
                      }),
                    },
                    he
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
              onClick: w,
            }),
            s.jsxs("div", {
              className:
                "relative flex flex-col bg-white rounded-xl shadow-2xl border border-gray-200",
              style: { width: "90vw", height: "90vh" },
              onClick: (k) => k.stopPropagation(),
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
                      onClick: w,
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
                              onChange: (k) => d(k.target.value),
                              disabled: !0,
                              placeholder:
                                (n == null ? void 0 : n.name) ||
                                c("placeholder.gridDrawName"),
                              className:
                                "px-2 py-1 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors text-base",
                            }),
                          ],
                        }),
                        s.jsx("div", { className: "space-y-1", children: T() }),
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
                                onClick: ce,
                                disabled: !Ne,
                                className: `px-4 py-2 rounded transition-colors ${
                                  Ne
                                    ? "bg-blue-600 text-white hover:bg-blue-700"
                                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                                }`,
                                children: c("button.merge"),
                              }),
                              s.jsx("button", {
                                onClick: Se,
                                disabled: !le,
                                className: `px-4 py-2 rounded transition-colors ${
                                  le
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
                            const k = Q(),
                              $ = k.find((V) => !V.Slave);
                            return $ && ($.Code || $.Name || $.ChineseName)
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
                                          children: $.Code || "-",
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
                                          children: $.Name || "-",
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
                                          children: $.ChineseName || "-",
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
                                      u && k.length > 0
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
                                  value: g,
                                  onChange: (k) => C(k.target.value),
                                  placeholder: c("placeholder.drugSearch"),
                                  className:
                                    "border rounded px-3 py-1 flex-1 min-w-0 focus:border-blue-500 focus:outline-none transition-colors",
                                }),
                                s.jsxs("select", {
                                  value: B,
                                  onChange: (k) => I(k.target.value),
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
                                  disabled: z,
                                  className:
                                    "bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 transition-colors whitespace-nowrap disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2",
                                  children: [
                                    z &&
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
                              children: z
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
                                : A.length > 0
                                ? s.jsx("div", {
                                    className: "space-y-1",
                                    children: A.map((k, $) =>
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
                                                  children: k.NAME,
                                                }),
                                                s.jsx("div", {
                                                  className:
                                                    "text-xs text-gray-500 truncate",
                                                  children: k.CHT_NAME,
                                                }),
                                                s.jsx("div", {
                                                  className:
                                                    "text-xs text-gray-400 font-mono",
                                                  children: k.CODE,
                                                }),
                                              ],
                                            }),
                                            s.jsx("button", {
                                              onClick: () => U(k),
                                              className:
                                                "ml-2 p-1 text-green-600 hover:text-green-700 hover:bg-green-50 rounded transition-colors flex-shrink-0",
                                              title: c("button.add"),
                                              children: s.jsx(gt, {
                                                className: "w-4 h-4",
                                              }),
                                            }),
                                          ],
                                        },
                                        k.GUID || $
                                      )
                                    ),
                                  })
                                : s.jsx("div", {
                                    className:
                                      "text-gray-500 text-center flex items-center justify-center h-full",
                                    children: c(
                                      g || B !== "N"
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
                          onClick: w,
                          className:
                            "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                          children: c("button.cancel"),
                        }),
                        s.jsx("button", {
                          onClick: ee,
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
                  onMouseUp: J,
                  onMouseLeave: J,
                  onTouchEnd: J,
                  onTouchCancel: J,
                }),
              ],
            }),
          ],
        });
  },
  fh = () => {
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
      [d, x] = p.useState(null),
      [m, b] = p.useState(0),
      [v, N] = p.useState(0),
      [E, u] = p.useState(!1);
    p.useEffect(() => {
      e && (x(null), b(0), N(0), u(!1));
    }, [e]),
      p.useEffect(() => {
        d && (b(d.row), N(d.col));
      }, [d]);
    const f = () => {
        const P = new Set();
        return (
          n != null &&
            n.contents &&
            n.contents.forEach((M) => {
              M.type === "parent_container" &&
                M.gird_position &&
                P.add(M.gird_position);
            }),
          P
        );
      },
      g = () => {
        const P = f(),
          M = [];
        if (P.size === 0) return M.push({ row: 0, col: 0 }), M;
        const ee = [];
        P.forEach((O) => {
          const [S, Q] = O.split(",").map(Number);
          ee.push({ row: S, col: Q });
        });
        const w = new Set();
        return (
          ee.forEach(({ row: O, col: S }) => {
            w.add(`${O},${S + 1}`),
              w.add(`${O + 1},${S}`),
              S > 0 && w.add(`${O},${S - 1}`),
              O > 0 && w.add(`${O - 1},${S}`);
          }),
          w.forEach((O) => {
            if (!P.has(O)) {
              const [S, Q] = O.split(",").map(Number);
              S >= 0 && Q >= 0 && M.push({ row: S, col: Q });
            }
          }),
          P.has("0,1") ||
            M.some((S) => S.row === 0 && S.col === 1) ||
            M.push({ row: 0, col: 1 }),
          P.has("1,0") ||
            M.some((S) => S.row === 1 && S.col === 0) ||
            M.push({ row: 1, col: 0 }),
          M.sort((O, S) => (O.row === S.row ? O.col - S.col : O.row - S.row))
        );
      },
      C = (P) => {
        x(P);
      },
      B = (P) => {
        b(P), x({ row: P, col: v });
      },
      I = (P) => {
        N(P), x({ row: m, col: P });
      },
      A = d && !f().has(`${d.row},${d.col}`) && d.row >= 0 && d.col >= 0,
      j = async () => {
        if (!(!d || !n || !A)) {
          u(!0);
          try {
            const P = `${d.row},${d.col}`,
              M = await ke.addMedMapSection(n.GUID, P);
            M.Code === 200
              ? (a("新增成功", "success"), t(), c(!1), await z())
              : a(`新增失敗：${M.Result || "未知錯誤"}`, "error");
          } catch (P) {
            console.error("Add parent container failed:", P),
              a("新增失敗：網路錯誤", "error");
          } finally {
            u(!1);
          }
        }
      },
      z = async () => {
        if (!r) {
          console.warn("⚠️ 沒有選中的部門類型，無法重新獲取資料");
          return;
        }
        console.log("🔄 重新獲取藥品地圖資料，部門類型:", r), l(!0);
        try {
          const P = await ke.getMedMapByDepartment(r);
          if (P.Code === 200 && P.Data) {
            console.log("📡 API 回傳成功，開始轉換資料");
            const M = Pt.convertMedMapApiToFakeData(P.Data);
            if (!Pt.validateConvertedData(M)) {
              console.error("❌ 轉換後的資料驗證失敗"),
                a("資料更新失敗：資料格式錯誤", "error");
              return;
            }
            o(M), console.log("✅ 藥品地圖資料已更新");
          } else
            console.error("❌ API 回傳錯誤:", P),
              a("資料更新失敗：API 錯誤", "error");
        } catch (P) {
          console.error("💥 重新獲取藥品地圖資料失敗:", P),
            a("資料更新失敗：網路錯誤", "error");
        } finally {
          l(!1);
        }
      },
      D = () => {
        t();
      },
      F = () => {
        const P = f(),
          M = g(),
          ee = [...P]
            .map((oe) => {
              const [Ne, le] = oe.split(",").map(Number);
              return { row: Ne, col: le };
            })
            .concat(M);
        ee.length === 0 && ee.push({ row: 0, col: 0 });
        const w = Math.max(...ee.map((oe) => oe.row)),
          O = Math.max(...ee.map((oe) => oe.col)),
          S = Math.min(...ee.map((oe) => oe.row)),
          Q = Math.min(...ee.map((oe) => oe.col)),
          ie = w - S + 1,
          X = O - Q + 1;
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
                children: Array.from({ length: ie * X }, (oe, Ne) => {
                  const le = Math.floor(Ne / X) + S,
                    ye = (Ne % X) + Q,
                    U = `${le},${ye}`,
                    ae = P.has(U),
                    R = M.some((ce) => ce.row === le && ce.col === ye),
                    J =
                      (d == null ? void 0 : d.row) === le &&
                      (d == null ? void 0 : d.col) === ye;
                  return s.jsx(
                    "button",
                    {
                      onClick: () => R && C({ row: le, col: ye }),
                      disabled: ae || !R,
                      className: `
                    w-16 h-16 border-2 rounded-lg transition-all duration-200 flex items-center justify-center text-sm font-medium
                    ${
                      ae
                        ? "bg-red-100 border-red-300 text-red-600 cursor-not-allowed"
                        : J
                        ? "bg-blue-500 border-blue-600 text-white shadow-lg"
                        : R
                        ? "bg-green-100 border-green-300 text-green-700 hover:bg-green-200 hover:border-green-400 cursor-pointer"
                        : "bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed"
                    }
                  `,
                      title: ae ? "已占用" : R ? "可選擇" : "不可用",
                      children: ae ? "占用" : `${le},${ye}`,
                    },
                    U
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
              style: { width: "90vw", height: "90vh", maxWidth: "800px" },
              onClick: (P) => P.stopPropagation(),
              children: [
                s.jsxs("div", {
                  className:
                    "flex items-center justify-between px-4 py-2 border-b border-gray-200",
                  children: [
                    s.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        s.jsx(gt, { className: "w-6 h-6 text-green-600" }),
                        s.jsx("h2", {
                          className: "text-xl font-semibold text-gray-900",
                          children: "新增櫃體",
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
                      F(),
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
                                    value: m,
                                    onChange: (P) =>
                                      B(parseInt(P.target.value) || 0),
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
                                    onChange: (P) =>
                                      I(parseInt(P.target.value) || 0),
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
                                A
                                  ? "bg-green-50 text-green-700 border border-green-200"
                                  : "bg-red-50 text-red-700 border border-red-200"
                              }`,
                              children: A
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
                                        (P) => P.type === "parent_container"
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
                      onClick: D,
                      disabled: E,
                      className:
                        "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                      children: h("button.cancel"),
                    }),
                    s.jsxs("button", {
                      onClick: j,
                      disabled: !A || E,
                      className:
                        "px-6 py-2 text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center space-x-2",
                      children: [
                        E && s.jsx(Rt, { className: "w-4 h-4 animate-spin" }),
                        s.jsx("span", { children: E ? "新增中..." : "新增" }),
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
  ph = () => {
    var ie;
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
      [d, x] = p.useState("dispensing_shelves"),
      [m, b] = p.useState("1"),
      [v, N] = p.useState("1"),
      [E, u] = p.useState(""),
      [f, g] = p.useState(null),
      [C, B] = p.useState(0),
      [I, A] = p.useState(0),
      [j, z] = p.useState(!1);
    p.useEffect(() => {
      e &&
        (x("dispensing_shelves"),
        b("1"),
        N("1"),
        u(""),
        g(null),
        B(0),
        A(0),
        z(!1));
    }, [e]),
      p.useEffect(() => {
        f && (B(f.row), A(f.col));
      }, [f]);
    const D = () => {
        const X = new Set();
        return (
          n != null &&
            n.contents &&
            n.contents.forEach((oe) => {
              oe.gird_position && X.add(oe.gird_position);
            }),
          X
        );
      },
      F = () => {
        const X = D(),
          oe = [];
        if (X.size === 0) return oe.push({ row: 0, col: 0 }), oe;
        const Ne = [];
        X.forEach((ye) => {
          const [U, ae] = ye.split(",").map(Number);
          Ne.push({ row: U, col: ae });
        });
        const le = new Set();
        return (
          Ne.forEach(({ row: ye, col: U }) => {
            le.add(`${ye},${U + 1}`),
              le.add(`${ye + 1},${U}`),
              U > 0 && le.add(`${ye},${U - 1}`),
              ye > 0 && le.add(`${ye - 1},${U}`);
          }),
          le.forEach((ye) => {
            if (!X.has(ye)) {
              const [U, ae] = ye.split(",").map(Number);
              U >= 0 && ae >= 0 && oe.push({ row: U, col: ae });
            }
          }),
          X.has("0,1") ||
            oe.some((U) => U.row === 0 && U.col === 1) ||
            oe.push({ row: 0, col: 1 }),
          X.has("1,0") ||
            oe.some((U) => U.row === 1 && U.col === 0) ||
            oe.push({ row: 1, col: 0 }),
          oe.sort((ye, U) =>
            ye.row === U.row ? ye.col - U.col : ye.row - U.row
          )
        );
      },
      G = (X) => {
        g(X);
      },
      P = (X) => {
        B(X), g({ row: X, col: I });
      },
      M = (X) => {
        A(X), g({ row: C, col: X });
      },
      ee = f && !D().has(`${f.row},${f.col}`) && f.row >= 0 && f.col >= 0,
      w = async () => {
        if (!(!f || !n || !ee)) {
          z(!0);
          try {
            const X = `${f.row},${f.col}`,
              oe = vc.find((le) => le.value === d);
            let Ne;
            oe != null && oe.isShelf
              ? (Ne = await ke.addMedMapShelf({
                  Master_GUID: n.GUID,
                  position: X,
                  width: m,
                  height: v,
                  ip_light: E,
                  type: d,
                }))
              : (Ne = await ke.addMedMapDrawer({
                  Master_GUID: n.GUID,
                  position: X,
                  width: m,
                  height: v,
                  ip_drawer: E,
                  type: d,
                })),
              Ne.Code === 200
                ? (a("新增成功", "success"), t(), c(!1), await O())
                : a(`新增失敗：${Ne.Result || "未知錯誤"}`, "error");
          } catch (X) {
            console.error("Add container failed:", X),
              a("新增失敗：網路錯誤", "error");
          } finally {
            z(!1);
          }
        }
      },
      O = async () => {
        if (!r) {
          console.warn("⚠️ 沒有選中的部門類型，無法重新獲取資料");
          return;
        }
        console.log("🔄 重新獲取藥品地圖資料，部門類型:", r), l(!0);
        try {
          const X = await ke.getMedMapByDepartment(r);
          if (X.Code === 200 && X.Data) {
            console.log("📡 API 回傳成功，開始轉換資料");
            const oe = Pt.convertMedMapApiToFakeData(X.Data);
            if (!Pt.validateConvertedData(oe)) {
              console.error("❌ 轉換後的資料驗證失敗"),
                a("資料更新失敗：資料格式錯誤", "error");
              return;
            }
            o(oe), console.log("✅ 藥品地圖資料已更新");
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
      S = () => {
        t();
      },
      Q = () => {
        const X = D(),
          oe = F(),
          Ne = [...X]
            .map((ce) => {
              const [Se, L] = ce.split(",").map(Number);
              return { row: Se, col: L };
            })
            .concat(oe);
        Ne.length === 0 && Ne.push({ row: 0, col: 0 });
        const le = Math.max(...Ne.map((ce) => ce.row)),
          ye = Math.max(...Ne.map((ce) => ce.col)),
          U = Math.min(...Ne.map((ce) => ce.row)),
          ae = Math.min(...Ne.map((ce) => ce.col)),
          R = le - U + 1,
          J = ye - ae + 1;
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
                style: { gridTemplateColumns: `repeat(${J}, 1fr)` },
                children: Array.from({ length: R * J }, (ce, Se) => {
                  const L = Math.floor(Se / J) + U,
                    _ = (Se % J) + ae,
                    re = `${L},${_}`,
                    T = X.has(re),
                    k = oe.some((V) => V.row === L && V.col === _),
                    $ =
                      (f == null ? void 0 : f.row) === L &&
                      (f == null ? void 0 : f.col) === _;
                  return s.jsx(
                    "button",
                    {
                      onClick: () => k && G({ row: L, col: _ }),
                      disabled: T || !k,
                      className: `
                    w-16 h-16 border-2 rounded-lg transition-all duration-200 flex items-center justify-center text-sm font-medium
                    ${
                      T
                        ? "bg-red-100 border-red-300 text-red-600 cursor-not-allowed"
                        : $
                        ? "bg-blue-500 border-blue-600 text-white shadow-lg"
                        : k
                        ? "bg-green-100 border-green-300 text-green-700 hover:bg-green-200 hover:border-green-400 cursor-pointer"
                        : "bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed"
                    }
                  `,
                      title: T ? "已占用" : k ? "可選擇" : "不可用",
                      children: T ? "占用" : `${L},${_}`,
                    },
                    re
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
                        s.jsx(gt, { className: "w-6 h-6 text-green-600" }),
                        s.jsx("h2", {
                          className: "text-xl font-semibold text-gray-900",
                          children: "新增層架/抽屜",
                        }),
                      ],
                    }),
                    s.jsx("button", {
                      onClick: S,
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
                                      onChange: (oe) => x(oe.target.value),
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
                                value: m,
                                onChange: (X) => b(X.target.value),
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
                                onChange: (X) => N(X.target.value),
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
                            value: E,
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
                                    value: C,
                                    onChange: (X) =>
                                      P(parseInt(X.target.value) || 0),
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
                                    value: I,
                                    onChange: (X) =>
                                      M(parseInt(X.target.value) || 0),
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
                                ee
                                  ? "bg-green-50 text-green-700 border border-green-200"
                                  : "bg-red-50 text-red-700 border border-red-200"
                              }`,
                              children: ee
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
                                  ((ie = n == null ? void 0 : n.contents) ==
                                  null
                                    ? void 0
                                    : ie.length) || 0,
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
                      disabled: j,
                      className:
                        "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                      children: h("button.cancel"),
                    }),
                    s.jsxs("button", {
                      onClick: w,
                      disabled: !ee || j,
                      className:
                        "px-6 py-2 text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center space-x-2",
                      children: [
                        j && s.jsx(Rt, { className: "w-4 h-4 animate-spin" }),
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
  mh = () => {
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
      [d, x] = p.useState(null),
      [m, b] = p.useState(0),
      [v, N] = p.useState(0),
      [E, u] = p.useState(!1);
    p.useEffect(() => {
      e && (x(null), b(0), N(0), u(!1));
    }, [e]),
      p.useEffect(() => {
        d && (b(d.row), N(d.col));
      }, [d]);
    const f = () => {
        const P = new Set();
        return (
          n != null &&
            n.contents &&
            n.contents.forEach((M) => {
              M.type === "sub_container" &&
                M.gird_position &&
                P.add(M.gird_position);
            }),
          P
        );
      },
      g = () => {
        const P = f(),
          M = [];
        if (P.size === 0) return M.push({ row: 0, col: 0 }), M;
        const ee = [];
        P.forEach((O) => {
          const [S, Q] = O.split(",").map(Number);
          ee.push({ row: S, col: Q });
        });
        const w = new Set();
        return (
          ee.forEach(({ row: O, col: S }) => {
            w.add(`${O},${S + 1}`),
              w.add(`${O + 1},${S}`),
              S > 0 && w.add(`${O},${S - 1}`),
              O > 0 && w.add(`${O - 1},${S}`);
          }),
          w.forEach((O) => {
            if (!P.has(O)) {
              const [S, Q] = O.split(",").map(Number);
              S >= 0 && Q >= 0 && M.push({ row: S, col: Q });
            }
          }),
          P.has("0,1") ||
            M.some((S) => S.row === 0 && S.col === 1) ||
            M.push({ row: 0, col: 1 }),
          P.has("1,0") ||
            M.some((S) => S.row === 1 && S.col === 0) ||
            M.push({ row: 1, col: 0 }),
          M.sort((O, S) => (O.row === S.row ? O.col - S.col : O.row - S.row))
        );
      },
      C = (P) => {
        x(P);
      },
      B = (P) => {
        b(P), x({ row: P, col: v });
      },
      I = (P) => {
        N(P), x({ row: m, col: P });
      },
      A = d && !f().has(`${d.row},${d.col}`) && d.row >= 0 && d.col >= 0,
      j = async () => {
        if (!(!d || !n || !A)) {
          u(!0);
          try {
            const P = `${d.row},${d.col}`,
              M = await ke.addSubSection(n.GUID, P);
            M.Code === 200
              ? (a("新增成功", "success"), t(), c(!1), await z())
              : a(`新增失敗：${M.Result || "未知錯誤"}`, "error");
          } catch (P) {
            console.error("Add sub container failed:", P),
              a("新增失敗：網路錯誤", "error");
          } finally {
            u(!1);
          }
        }
      },
      z = async () => {
        if (!r) {
          console.warn("⚠️ 沒有選中的部門類型，無法重新獲取資料");
          return;
        }
        console.log("🔄 重新獲取藥品地圖資料，部門類型:", r), l(!0);
        try {
          const P = await ke.getMedMapByDepartment(r);
          if (P.Code === 200 && P.Data) {
            console.log("📡 API 回傳成功，開始轉換資料");
            const M = Pt.convertMedMapApiToFakeData(P.Data);
            if (!Pt.validateConvertedData(M)) {
              console.error("❌ 轉換後的資料驗證失敗"),
                a("資料更新失敗：資料格式錯誤", "error");
              return;
            }
            o(M), console.log("✅ 藥品地圖資料已更新");
          } else
            console.error("❌ API 回傳錯誤:", P),
              a("資料更新失敗：API 錯誤", "error");
        } catch (P) {
          console.error("💥 重新獲取藥品地圖資料失敗:", P),
            a("資料更新失敗：網路錯誤", "error");
        } finally {
          l(!1);
        }
      },
      D = () => {
        t();
      },
      F = () => {
        const P = f(),
          M = g(),
          ee = [...P]
            .map((oe) => {
              const [Ne, le] = oe.split(",").map(Number);
              return { row: Ne, col: le };
            })
            .concat(M);
        ee.length === 0 && ee.push({ row: 0, col: 0 });
        const w = Math.max(...ee.map((oe) => oe.row)),
          O = Math.max(...ee.map((oe) => oe.col)),
          S = Math.min(...ee.map((oe) => oe.row)),
          Q = Math.min(...ee.map((oe) => oe.col)),
          ie = w - S + 1,
          X = O - Q + 1;
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
                children: Array.from({ length: ie * X }, (oe, Ne) => {
                  const le = Math.floor(Ne / X) + S,
                    ye = (Ne % X) + Q,
                    U = `${le},${ye}`,
                    ae = P.has(U),
                    R = M.some((ce) => ce.row === le && ce.col === ye),
                    J =
                      (d == null ? void 0 : d.row) === le &&
                      (d == null ? void 0 : d.col) === ye;
                  return s.jsx(
                    "button",
                    {
                      onClick: () => R && C({ row: le, col: ye }),
                      disabled: ae || !R,
                      className: `
                    w-16 h-16 border-2 rounded-lg transition-all duration-200 flex items-center justify-center text-sm font-medium
                    ${
                      ae
                        ? "bg-red-100 border-red-300 text-red-600 cursor-not-allowed"
                        : J
                        ? "bg-blue-500 border-blue-600 text-white shadow-lg"
                        : R
                        ? "bg-green-100 border-green-300 text-green-700 hover:bg-green-200 hover:border-green-400 cursor-pointer"
                        : "bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed"
                    }
                  `,
                      title: ae ? "已占用" : R ? "可選擇" : "不可用",
                      children: ae ? "占用" : `${le},${ye}`,
                    },
                    U
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
              style: { width: "90vw", height: "90vh", maxWidth: "800px" },
              onClick: (P) => P.stopPropagation(),
              children: [
                s.jsxs("div", {
                  className:
                    "flex items-center justify-between px-4 py-2 border-b border-gray-200",
                  children: [
                    s.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        s.jsx(gt, { className: "w-6 h-6 text-green-600" }),
                        s.jsx("h2", {
                          className: "text-xl font-semibold text-gray-900",
                          children: "新增虛擬容器",
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
                      F(),
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
                                    value: m,
                                    onChange: (P) =>
                                      B(parseInt(P.target.value) || 0),
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
                                    onChange: (P) =>
                                      I(parseInt(P.target.value) || 0),
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
                                A
                                  ? "bg-green-50 text-green-700 border border-green-200"
                                  : "bg-red-50 text-red-700 border border-red-200"
                              }`,
                              children: A
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
                                        (P) => P.type === "sub_container"
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
                      onClick: D,
                      disabled: E,
                      className:
                        "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                      children: h("button.cancel"),
                    }),
                    s.jsxs("button", {
                      onClick: j,
                      disabled: !A || E,
                      className:
                        "px-6 py-2 text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center space-x-2",
                      children: [
                        E && s.jsx(Rt, { className: "w-4 h-4 animate-spin" }),
                        s.jsx("span", { children: E ? "新增中..." : "新增" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
  },
  hh = ({ isOpen: e, onClose: t, storeShelf: n }) => {
    const {
        showNotification: r,
        medicineList: o,
        isLoadingMedicines: l,
        addStockToShelf: a,
        selectedStockItemForEdit: i,
        storeItemModalMode: c,
        updateStockInShelf: h,
      } = Je(),
      [d, x] = p.useState(""),
      [m, b] = p.useState(""),
      [v, N] = p.useState(""),
      [E, u] = p.useState(""),
      [f, g] = p.useState([]),
      [C, B] = p.useState(""),
      [I, A] = p.useState(""),
      [j, z] = p.useState(""),
      [D, F] = p.useState(null),
      [G, P] = p.useState([]),
      [M, ee] = p.useState(""),
      [w, O] = p.useState(!1),
      S = p.useRef(null);
    p.useEffect(() => {
      if (e && c === "edit" && i) {
        x(i.code || ""), b(i.name || ""), N(""), u(i.material_no || "");
        const R = i.lot || [],
          J = i.expiry_date || [],
          ce = i.qty || [];
        if (R.length > 0 || J.length > 0 || ce.length > 0) {
          const Se = Math.max(R.length, J.length, ce.length),
            L = [];
          for (let _ = 0; _ < Se; _++) {
            const re = J[_] || "";
            let T = "";
            re && (T = re.split("T")[0]),
              L.push({
                id: `batch_${Date.now()}_${_}`,
                lot: R[_] || "",
                expiryDate: T,
                qty: String(ce[_] || ""),
              });
          }
          g(L);
        } else g([]);
        B(i.location || ""), A(i.led_index || ""), z(i.ip || "");
      } else
        e &&
          c === "add" &&
          (x(""), b(""), N(""), u(""), g([]), B(""), A(""), z(""));
    }, [e, c, i]),
      p.useEffect(() => {
        const R = (J) => {
          S.current && !S.current.contains(J.target) && F(null);
        };
        return (
          document.addEventListener("mousedown", R),
          () => {
            document.removeEventListener("mousedown", R);
          }
        );
      }, []);
    const Q = (R, J) => {
        if (!J.trim()) {
          P([]);
          return;
        }
        const ce = J.toLowerCase(),
          Se = o.filter((L) => {
            var _, re, T, k;
            switch (R) {
              case "code":
                return (_ = L.CODE) == null
                  ? void 0
                  : _.toLowerCase().includes(ce);
              case "name":
                return (re = L.NAME) == null
                  ? void 0
                  : re.toLowerCase().includes(ce);
              case "chineseName":
                return (T = L.CHT_NAME) == null
                  ? void 0
                  : T.toLowerCase().includes(ce);
              case "skdiacode":
                return (k = L.SKDIACODE) == null
                  ? void 0
                  : k.toLowerCase().includes(ce);
              default:
                return !1;
            }
          });
        P(Se.slice(0, 50));
      },
      ie = (R, J) => {
        switch ((F(R), R)) {
          case "code":
            x(J);
            break;
          case "name":
            b(J);
            break;
          case "chineseName":
            N(J);
            break;
          case "skdiacode":
            u(J);
            break;
        }
        Q(R, J);
      },
      X = (R, J) => {
        switch (J) {
          case "code":
            x(R.CODE || ""),
              b(R.NAME || ""),
              N(R.CHT_NAME || ""),
              u(R.SKDIACODE || "");
            break;
          case "name":
            x(R.CODE || ""),
              b(R.NAME || ""),
              N(R.CHT_NAME || ""),
              u(R.SKDIACODE || "");
            break;
          case "chineseName":
            x(R.CODE || ""),
              b(R.NAME || ""),
              N(R.CHT_NAME || ""),
              u(R.SKDIACODE || "");
            break;
          case "skdiacode":
            x(R.CODE || ""),
              b(R.NAME || ""),
              N(R.CHT_NAME || ""),
              u(R.SKDIACODE || "");
            break;
        }
        ee(R.GUID), F(null), P([]);
      },
      oe = () => {
        const R = {
          id: `batch_${Date.now()}`,
          lot: "",
          expiryDate: "",
          qty: "",
        };
        g([...f, R]);
      },
      Ne = (R) => {
        g(f.filter((J) => J.id !== R));
      },
      le = (R, J, ce) => {
        g(f.map((Se) => (Se.id === R ? { ...Se, [J]: ce } : Se)));
      },
      ye = async () => {
        var Se;
        if (!d || !m) {
          r("請選擇藥品", "error");
          return;
        }
        if (!n || !n.GUID) {
          r("層架資訊錯誤", "error");
          return;
        }
        const R = [],
          J = [],
          ce = [];
        f.forEach((L) => {
          R.push(L.lot || "");
          let _ = "";
          L.expiryDate && (_ = `${L.expiryDate}`),
            J.push(_),
            ce.push(L.qty ? `${Number(L.qty)}` : "0");
        });
        try {
          if (c === "edit" && i) {
            const L = {
                GUID: i.GUID,
                code: d,
                device_type: "EPD290",
                expiry_date: J,
                ip: j || "",
                led_index: I || "",
                location: C || "",
                lot: R,
                material_no: E || "",
                name: m,
                qty: ce,
                shelf_guid: n.GUID,
              },
              _ = await ke.updateStock([L]);
            _.Code === 200
              ? (h(n.GUID, i.GUID, L), r("更新貨物成功", "success"), ae())
              : r(_.Result || "更新貨物失敗", "error");
          } else {
            const L = {
                code: d,
                device_type: "EPD290",
                expiry_date: J,
                ip: j || "",
                led_index: I || "",
                location: C || "",
                lot: R,
                material_no: E || "",
                name: m,
                qty: ce,
                shelf_guid: n.GUID,
              },
              _ = await ke.addStock([L]);
            _.Code === 200
              ? (a(n.GUID, {
                  GUID:
                    ((Se = _.Data) == null ? void 0 : Se.GUID) ||
                    `stock_${Date.now()}`,
                  ...L,
                }),
                r("新增貨物成功", "success"),
                ae())
              : r(_.Result || "新增貨物失敗", "error");
          }
        } catch (L) {
          console.error("貨物操作錯誤:", L),
            r(
              c === "edit"
                ? "更新貨物失敗，請稍後再試"
                : "新增貨物失敗，請稍後再試",
              "error"
            );
        }
      },
      U = (R, J) => {
        console.log("📸 掃描成功，填入藥品資料:", J),
          x(J[0].CODE || J[0].code || ""),
          b(J[0].NAME || J[0].name || ""),
          N(J[0].CHT_NAME || J[0].cht_name || ""),
          u(J[0].SKDIACODE || J[0].skdiacode || J[0].material_no || ""),
          ee(J[0].GUID || ""),
          O(!1),
          r("已自動填入藥品資料", "success");
      },
      ae = () => {
        x(""),
          b(""),
          N(""),
          u(""),
          g([]),
          B(""),
          A(""),
          z(""),
          ee(""),
          P([]),
          F(null),
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
                    "sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between z-10",
                  children: [
                    s.jsx("h2", {
                      className: "text-xl font-bold text-gray-800",
                      children: c === "edit" ? "編輯貨物" : "新增貨物",
                    }),
                    s.jsx("button", {
                      onClick: ae,
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
                                    onClick: () => O(!0),
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
                                    ref: D === "code" ? S : null,
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
                                          ie("code", R.target.value),
                                        onFocus: () => F("code"),
                                        className:
                                          "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        placeholder: "輸入藥品代碼",
                                      }),
                                      D === "code" &&
                                        G.length > 0 &&
                                        s.jsx("div", {
                                          className:
                                            "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto",
                                          children: G.map((R) =>
                                            s.jsxs(
                                              "div",
                                              {
                                                onClick: () => X(R, "code"),
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
                                    ref: D === "name" ? S : null,
                                    children: [
                                      s.jsx("label", {
                                        className:
                                          "block text-sm font-medium text-gray-700 mb-1",
                                        children: "藥名",
                                      }),
                                      s.jsx("input", {
                                        type: "text",
                                        value: m,
                                        onChange: (R) =>
                                          ie("name", R.target.value),
                                        onFocus: () => F("name"),
                                        className:
                                          "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        placeholder: "輸入藥品名稱",
                                      }),
                                      D === "name" &&
                                        G.length > 0 &&
                                        s.jsx("div", {
                                          className:
                                            "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto",
                                          children: G.map((R) =>
                                            s.jsxs(
                                              "div",
                                              {
                                                onClick: () => X(R, "name"),
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
                                    ref: D === "chineseName" ? S : null,
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
                                          ie("chineseName", R.target.value),
                                        onFocus: () => F("chineseName"),
                                        className:
                                          "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        placeholder: "輸入中文名稱",
                                      }),
                                      D === "chineseName" &&
                                        G.length > 0 &&
                                        s.jsx("div", {
                                          className:
                                            "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto",
                                          children: G.map((R) =>
                                            s.jsxs(
                                              "div",
                                              {
                                                onClick: () =>
                                                  X(R, "chineseName"),
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
                                    ref: D === "skdiacode" ? S : null,
                                    children: [
                                      s.jsx("label", {
                                        className:
                                          "block text-sm font-medium text-gray-700 mb-1",
                                        children: "料號",
                                      }),
                                      s.jsx("input", {
                                        type: "text",
                                        value: E,
                                        onChange: (R) =>
                                          ie("skdiacode", R.target.value),
                                        onFocus: () => F("skdiacode"),
                                        className:
                                          "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        placeholder: "輸入料號",
                                      }),
                                      D === "skdiacode" &&
                                        G.length > 0 &&
                                        s.jsx("div", {
                                          className:
                                            "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto",
                                          children: G.map((R) =>
                                            s.jsxs(
                                              "div",
                                              {
                                                onClick: () =>
                                                  X(R, "skdiacode"),
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
                              s.jsxs("div", {
                                className:
                                  "flex items-center justify-between border-b pb-2",
                                children: [
                                  s.jsx("h3", {
                                    className:
                                      "text-lg font-semibold text-gray-700",
                                    children: "批次資訊",
                                  }),
                                  s.jsxs("button", {
                                    onClick: oe,
                                    className:
                                      "flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg transition-colors",
                                    title: "新增批次",
                                    children: [
                                      s.jsx(gt, { className: "w-4 h-4" }),
                                      "新增批次",
                                    ],
                                  }),
                                ],
                              }),
                              f.length === 0
                                ? s.jsxs("div", {
                                    className:
                                      "text-center py-6 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300",
                                    children: [
                                      s.jsx("p", {
                                        className: "text-gray-500",
                                        children: "暫無藥品批號資訊",
                                      }),
                                      s.jsx("p", {
                                        className: "text-sm text-gray-400 mt-1",
                                        children:
                                          "點擊上方「新增批次」按鈕開始添加",
                                      }),
                                    ],
                                  })
                                : s.jsx("div", {
                                    className: "space-y-3",
                                    children: f.map((R, J) =>
                                      s.jsxs(
                                        "div",
                                        {
                                          className:
                                            "bg-gray-50 rounded-lg p-4 border border-gray-200",
                                          children: [
                                            s.jsxs("div", {
                                              className:
                                                "flex items-center justify-between mb-3",
                                              children: [
                                                s.jsxs("span", {
                                                  className:
                                                    "text-sm font-medium text-gray-700",
                                                  children: ["批次 ", J + 1],
                                                }),
                                                s.jsx("button", {
                                                  onClick: () => Ne(R.id),
                                                  className:
                                                    "p-1 text-red-600 hover:bg-red-50 rounded transition-colors",
                                                  title: "刪除批次",
                                                  children: s.jsx(Qm, {
                                                    className: "w-4 h-4",
                                                  }),
                                                }),
                                              ],
                                            }),
                                            s.jsxs("div", {
                                              className:
                                                "grid grid-cols-3 gap-3",
                                              children: [
                                                s.jsxs("div", {
                                                  children: [
                                                    s.jsx("label", {
                                                      className:
                                                        "block text-xs font-medium text-gray-600 mb-1",
                                                      children: "批號",
                                                    }),
                                                    s.jsx("input", {
                                                      type: "text",
                                                      value: R.lot,
                                                      onChange: (ce) =>
                                                        le(
                                                          R.id,
                                                          "lot",
                                                          ce.target.value
                                                        ),
                                                      className:
                                                        "w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                                      placeholder: "輸入批號",
                                                    }),
                                                  ],
                                                }),
                                                s.jsxs("div", {
                                                  children: [
                                                    s.jsx("label", {
                                                      className:
                                                        "block text-xs font-medium text-gray-600 mb-1",
                                                      children: "效期",
                                                    }),
                                                    s.jsx("input", {
                                                      type: "date",
                                                      value: R.expiryDate,
                                                      onChange: (ce) =>
                                                        le(
                                                          R.id,
                                                          "expiryDate",
                                                          ce.target.value
                                                        ),
                                                      className:
                                                        "w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                                    }),
                                                  ],
                                                }),
                                                s.jsxs("div", {
                                                  children: [
                                                    s.jsx("label", {
                                                      className:
                                                        "block text-xs font-medium text-gray-600 mb-1",
                                                      children: "數量",
                                                    }),
                                                    s.jsx("input", {
                                                      type: "number",
                                                      value: R.qty,
                                                      onChange: (ce) =>
                                                        le(
                                                          R.id,
                                                          "qty",
                                                          ce.target.value
                                                        ),
                                                      className:
                                                        "w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                                      placeholder: "輸入數量",
                                                      min: "0",
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          ],
                                        },
                                        R.id
                                      )
                                    ),
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
                                        value: C,
                                        onChange: (R) => B(R.target.value),
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
                                        value: I,
                                        onChange: (R) => A(R.target.value),
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
                                        value: j,
                                        onChange: (R) => z(R.target.value),
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
                      onClick: ae,
                      className:
                        "px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors",
                      children: "取消",
                    }),
                    s.jsx("button", {
                      onClick: ye,
                      disabled: l || o.length === 0,
                      className:
                        "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:bg-gray-400",
                      children: c === "edit" ? "修改" : "新增",
                    }),
                  ],
                }),
              ],
            }),
            s.jsx(zo, {
              isOpen: w,
              onClose: () => O(!1),
              onScanSuccess: U,
              mode: "set_store_med_mode",
            }),
          ],
        })
      : null;
  },
  gh = ({ isOpen: e, onClose: t }) => {
    const {
        selectedDepartmentType: n,
        apiDepartmentData: r,
        allDepartmentsList: o,
        showNotification: l,
        triggerRefresh: a,
        reloadMedMapData: i,
      } = Je(),
      [c, h] = p.useState(null),
      [d, x] = p.useState(""),
      [m, b] = p.useState(!1),
      v = () => (r ? r.map((A) => A.name) : []),
      N = () => (!n || !o ? [] : o.filter((A) => A["department_type "] === n)),
      E = () => {
        const A = v();
        return N().filter((z) => !A.includes(z.name));
      },
      u = () => (r ? r.map((A) => A.gird_position) : []),
      f = () => {
        const A = u(),
          j = [];
        for (let z = 0; z < 10; z++)
          for (let D = 0; D < 10; D++) {
            const F = `${z},${D}`;
            A.includes(F) || j.push(F);
          }
        return j.slice(0, 20);
      };
    p.useEffect(() => {
      e && (h(null), x(""));
    }, [e]);
    const g = async () => {
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
          const A = await ke.addMedMap(c.name, c.type, d);
          A.Code === 200
            ? (l("新增部門成功", "success"), await i(), C())
            : l(A.Result || "新增部門失敗", "error");
        } catch (A) {
          console.error("新增部門錯誤:", A),
            l("新增部門失敗，請稍後再試", "error");
        } finally {
          b(!1);
        }
      },
      C = () => {
        h(null), x(""), t();
      };
    if (!e) return null;
    const B = E(),
      I = f();
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
                onClick: C,
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
                  B.length === 0
                    ? s.jsx("div", {
                        className: "text-center py-8",
                        children: s.jsx("p", {
                          className: "text-gray-600",
                          children: "所有部門都已新增",
                        }),
                      })
                    : s.jsx("div", {
                        className: "space-y-2",
                        children: B.map((A) =>
                          s.jsxs(
                            "label",
                            {
                              className: `flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                                (c == null ? void 0 : c.name) === A.name
                                  ? "border-blue-500 bg-blue-50"
                                  : "border-gray-200 hover:border-blue-300 hover:bg-gray-50"
                              }`,
                              children: [
                                s.jsx("input", {
                                  type: "radio",
                                  name: "department",
                                  value: A.name,
                                  checked:
                                    (c == null ? void 0 : c.name) === A.name,
                                  onChange: () => h(A),
                                  className:
                                    "w-4 h-4 text-blue-600 focus:ring-blue-500",
                                }),
                                s.jsxs("div", {
                                  className: "ml-3",
                                  children: [
                                    s.jsx("div", {
                                      className:
                                        "text-sm font-medium text-gray-900",
                                      children: A.name,
                                    }),
                                    s.jsx("div", {
                                      className: "text-xs text-gray-500",
                                      children: A.type,
                                    }),
                                  ],
                                }),
                              ],
                            },
                            A.name
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
                    I.length === 0
                      ? s.jsx("div", {
                          className: "text-center py-8",
                          children: s.jsx("p", {
                            className: "text-gray-600",
                            children: "沒有可用的位置",
                          }),
                        })
                      : s.jsx("div", {
                          className: "grid grid-cols-5 gap-2",
                          children: I.map((A) => {
                            const [j, z] = A.split(",");
                            return s.jsxs(
                              "button",
                              {
                                onClick: () => x(A),
                                className: `p-3 border-2 rounded-lg text-sm font-medium transition-all ${
                                  d === A
                                    ? "border-blue-500 bg-blue-500 text-white"
                                    : "border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-700"
                                }`,
                                children: ["(", j, ",", z, ")"],
                              },
                              A
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
                onClick: C,
                className:
                  "px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors",
                disabled: m,
                children: "取消",
              }),
              s.jsx("button", {
                onClick: g,
                disabled: !c || !d || m,
                className:
                  "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed",
                children: m ? "新增中..." : "新增",
              }),
            ],
          }),
        ],
      }),
    });
  },
  xh = ({ isOpen: e, onClose: t, initialBarcode: n = "" }) => {
    const {
        showNotification: r,
        medicineList: o,
        isLoadingMedicines: l,
      } = Je(),
      [a, i] = p.useState(""),
      [c, h] = p.useState(""),
      [d, x] = p.useState(""),
      [m, b] = p.useState(""),
      [v, N] = p.useState(""),
      [E, u] = p.useState(null),
      [f, g] = p.useState([]),
      [C, B] = p.useState(""),
      [I, A] = p.useState(null),
      [j, z] = p.useState(!1),
      D = p.useRef(null);
    p.useEffect(() => {
      e && (i(n), h(""), x(""), b(""), N(""), B(""), A(null), u(null));
    }, [e, n]),
      p.useEffect(() => {
        const w = (O) => {
          D.current && !D.current.contains(O.target) && u(null);
        };
        return (
          document.addEventListener("mousedown", w),
          () => {
            document.removeEventListener("mousedown", w);
          }
        );
      }, []);
    const F = (w, O) => {
        if (!O.trim() || l) {
          g([]);
          return;
        }
        const S = O.toLowerCase(),
          Q = o.filter((ie) => {
            var X, oe, Ne, le;
            switch (w) {
              case "code":
                return (X = ie.CODE) == null
                  ? void 0
                  : X.toLowerCase().includes(S);
              case "name":
                return (oe = ie.NAME) == null
                  ? void 0
                  : oe.toLowerCase().includes(S);
              case "chineseName":
                return (Ne = ie.CHT_NAME) == null
                  ? void 0
                  : Ne.toLowerCase().includes(S);
              case "skdiacode":
                return (le = ie.SKDIACODE) == null
                  ? void 0
                  : le.toLowerCase().includes(S);
              default:
                return !1;
            }
          });
        g(Q.slice(0, 10));
      },
      G = (w, O) => {
        switch ((u(w), w)) {
          case "code":
            h(O);
            break;
          case "name":
            x(O);
            break;
          case "chineseName":
            b(O);
            break;
          case "skdiacode":
            N(O);
            break;
        }
        F(w, O);
      },
      P = (w) => {
        B(w.GUID),
          A(w),
          h(w.CODE || ""),
          x(w.NAME || ""),
          b(w.CHT_NAME || ""),
          N(w.SKDIACODE || ""),
          u(null),
          g([]);
      },
      M = () => {
        i(""), h(""), x(""), b(""), N(""), B(""), A(null), u(null), g([]), t();
      },
      ee = async () => {
        if (!c.trim()) {
          r("藥碼為必填欄位", "error");
          return;
        }
        if (!a.trim()) {
          r("條碼不能為空", "error");
          return;
        }
        z(!0);
        try {
          let w = [];
          if (I && I.BARCODE2)
            try {
              const S = JSON.parse(I.BARCODE2);
              Array.isArray(S)
                ? (w = [...S])
                : typeof S == "string" && (w = [S]);
            } catch {
              console.warn("解析 BARCODE2 失敗，使用原始值:", I.BARCODE2),
                I.BARCODE2 && (w = [I.BARCODE2]);
            }
          w.includes(a.trim()) || w.push(a.trim()),
            console.log("📋 處理後的 BARCODE2 陣列:", w);
          const O = await ke.addMedClouds(
            a.trim(),
            c.trim(),
            JSON.stringify(w),
            I.BARCODE
          );
          O.Code === 200
            ? (r("條碼建立成功", "success"), M())
            : r(O.Result || "建立條碼失敗", "error");
        } catch (w) {
          console.error("建立條碼失敗:", w),
            r("建立條碼失敗，請稍後再試", "error");
        } finally {
          z(!1);
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
                        children: s.jsx(gt, {
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
                    onClick: M,
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
                  ref: D,
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
                          onChange: (w) => G("code", w.target.value),
                          onFocus: () => u("code"),
                          className:
                            "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent",
                          placeholder: "輸入藥碼搜尋...",
                          disabled: j,
                        }),
                        E === "code" &&
                          f.length > 0 &&
                          s.jsx("div", {
                            className:
                              "absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                            children: f.map((w) =>
                              s.jsxs(
                                "div",
                                {
                                  onClick: () => P(w),
                                  className:
                                    "px-4 py-2 hover:bg-green-50 cursor-pointer border-b border-gray-100 last:border-b-0",
                                  children: [
                                    s.jsx("div", {
                                      className: "font-medium text-gray-800",
                                      children: w.CODE,
                                    }),
                                    s.jsx("div", {
                                      className: "text-sm text-gray-600",
                                      children: w.NAME,
                                    }),
                                  ],
                                },
                                w.GUID
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
                          onChange: (w) => G("name", w.target.value),
                          onFocus: () => u("name"),
                          className:
                            "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent",
                          placeholder: "輸入藥名搜尋...",
                          disabled: j,
                        }),
                        E === "name" &&
                          f.length > 0 &&
                          s.jsx("div", {
                            className:
                              "absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                            children: f.map((w) =>
                              s.jsxs(
                                "div",
                                {
                                  onClick: () => P(w),
                                  className:
                                    "px-4 py-2 hover:bg-green-50 cursor-pointer border-b border-gray-100 last:border-b-0",
                                  children: [
                                    s.jsx("div", {
                                      className: "font-medium text-gray-800",
                                      children: w.NAME,
                                    }),
                                    s.jsx("div", {
                                      className: "text-sm text-gray-600",
                                      children: w.CODE,
                                    }),
                                  ],
                                },
                                w.GUID
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
                          value: m,
                          onChange: (w) => G("chineseName", w.target.value),
                          onFocus: () => u("chineseName"),
                          className:
                            "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent",
                          placeholder: "輸入中文名搜尋...",
                          disabled: j,
                        }),
                        E === "chineseName" &&
                          f.length > 0 &&
                          s.jsx("div", {
                            className:
                              "absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                            children: f.map((w) =>
                              s.jsxs(
                                "div",
                                {
                                  onClick: () => P(w),
                                  className:
                                    "px-4 py-2 hover:bg-green-50 cursor-pointer border-b border-gray-100 last:border-b-0",
                                  children: [
                                    s.jsx("div", {
                                      className: "font-medium text-gray-800",
                                      children: w.CHT_NAME,
                                    }),
                                    s.jsx("div", {
                                      className: "text-sm text-gray-600",
                                      children: w.CODE,
                                    }),
                                  ],
                                },
                                w.GUID
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
                          onChange: (w) => G("skdiacode", w.target.value),
                          onFocus: () => u("skdiacode"),
                          className:
                            "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent",
                          placeholder: "輸入料號搜尋...",
                          disabled: j,
                        }),
                        E === "skdiacode" &&
                          f.length > 0 &&
                          s.jsx("div", {
                            className:
                              "absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                            children: f.map((w) =>
                              s.jsxs(
                                "div",
                                {
                                  onClick: () => P(w),
                                  className:
                                    "px-4 py-2 hover:bg-green-50 cursor-pointer border-b border-gray-100 last:border-b-0",
                                  children: [
                                    s.jsx("div", {
                                      className: "font-medium text-gray-800",
                                      children: w.SKDIACODE,
                                    }),
                                    s.jsx("div", {
                                      className: "text-sm text-gray-600",
                                      children: w.NAME,
                                    }),
                                  ],
                                },
                                w.GUID
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
                      onClick: M,
                      disabled: j,
                      className:
                        "px-6 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                      children: "取消",
                    }),
                    s.jsx("button", {
                      onClick: ee,
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
  yh = ({
    container: e,
    highlightedMedicineCode: t,
    pendingRequisitionCodes: n = [],
    onMedicineClick: r,
  }) => {
    const o = (d) => {
        const [x, m] = d.split(",").map(Number);
        return { row: x || 0, col: m || 0 };
      },
      l = (d) => {
        if (!d || d.length === 0)
          return { sortedContents: [], maxRow: 0, maxCol: 0 };
        const x = d.map((N) => ({
            ...N,
            gridPos: o(N.gird_position || "0,0"),
          })),
          m = Math.max(...x.map((N) => N.gridPos.row), 0),
          b = Math.max(...x.map((N) => N.gridPos.col), 0);
        return {
          sortedContents: x.sort((N, E) =>
            N.gridPos.row !== E.gridPos.row
              ? N.gridPos.row - E.gridPos.row
              : N.gridPos.col - E.gridPos.col
          ),
          maxRow: m,
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
        const x = [
          "med_box",
          "dispensing_shelves",
          "store_shelves",
          "grid_draw",
          "list_draw",
        ].includes(d.type);
        return s.jsx(
          "div",
          {
            className: `${x ? "shadow-sm border-2 p-1 rounded-lg" : ""} ${a(
              d.type
            )} flex flex-col h-full overflow-hidden`,
            children: s.jsx("div", { className: "flex-1", children: h(d) }),
          },
          d.GUID
        );
      },
      c = (d, x, m) => {
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
              children: Array.from({ length: x + 1 }, (v, N) =>
                s.jsx(
                  "tr",
                  {
                    className: "h-full",
                    children: Array.from({ length: m + 1 }, (E, u) => {
                      const f = `${N},${u}`,
                        g = b[f];
                      return g
                        ? s.jsx(
                            "td",
                            {
                              className: "align-top bg-transparent",
                              style: { width: `${100 / (m + 1)}%` },
                              children: i(g),
                            },
                            u
                          )
                        : s.jsx(
                            "td",
                            {
                              className: "align-top bg-transparent",
                              style: { width: `${100 / (m + 1)}%` },
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
              const { sortedContents: x, maxRow: m, maxCol: b } = l(d.contents);
              return c(x, m, b);
            } else return s.jsx("div", { className: "" });
          case "sub_container":
            if (d.contents && d.contents.length > 0) {
              const { sortedContents: x, maxRow: m, maxCol: b } = l(d.contents);
              return c(x, m, b);
            } else return s.jsx("div", { className: "" });
          case "dispensing_shelves":
            if (d.contents && d.contents.length > 0) {
              const { sortedContents: x, maxRow: m, maxCol: b } = l(d.contents);
              return c(x, m, b);
            } else
              return s.jsx("div", {
                className:
                  "border-2 rounded-lg flex py-3 items-center justify-center h-full text-gray-400 text-sm",
                children: "無藥盒",
              });
          case "store_shelves":
            if (d.medMapStock && d.medMapStock.length > 0) {
              const x = d.medMapStock,
                m = x.length,
                b = m > 0 ? 100 / m : 100;
              return s.jsx("div", {
                className: "flex h-full",
                children: x.map((v, N) => {
                  const E = t && (v.code == t || v.material_no == t),
                    u = n.includes(v.code) || n.includes(v.material_no);
                  return s.jsxs(
                    "div",
                    {
                      className: `border-2 rounded-lg border-gray-300 p-2 flex flex-col text-gray-800 justify-center items-center transition-colors cursor-pointer ${
                        u
                          ? "highlight-breathe-red"
                          : E
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
              const { sortedContents: x, maxRow: m, maxCol: b } = l(d.contents);
              return c(x, m, b);
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
              const x = t && d.med_info.some((b) => b.code == t),
                m = d.med_info.some((b) => n.includes(b.code));
              return s.jsx("div", {
                className: `text-sm text-center h-full p-2 flex flex-col text-gray-800 justify-center transition-colors cursor-pointer ${
                  m
                    ? "highlight-breathe-red"
                    : x
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
              const { sortedContents: x, maxRow: m, maxCol: b } = l(d.contents);
              return c(x, m, b);
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
  vh = ({ isOpen: e, onClose: t, type: n, data: r, onApprove: o }) => {
    const [l, a] = p.useState("0"),
      [i, c] = p.useState("0"),
      [h, d] = p.useState(null),
      [x, m] = p.useState(null),
      [b, v] = p.useState(!1),
      [N, E] = p.useState(!1),
      [u, f] = p.useState(""),
      [g, C] = p.useState(""),
      [B, I] = p.useState([]),
      [A, j] = p.useState([]),
      [z, D] = p.useState([]),
      [F, G] = p.useState(!1),
      [P, M] = p.useState(!1),
      ee = p.useRef(null),
      w = p.useRef(null),
      O = p.useRef(null),
      S = p.useRef(null);
    p.useEffect(() => {
      if (e && r) {
        const _ = r.issuedQuantity || r.requestedQuantity || "0";
        a(_), c(_), d(null), m(null), v(!1);
        const re = localStorage.getItem("medMap_setting");
        if (re)
          try {
            const T = JSON.parse(re);
            f(T.default_person || ""), C(T.default_person_id || "");
          } catch (T) {
            console.error("讀取設定失敗:", T), f(""), C("");
          }
        else f(""), C("");
        Q();
      }
    }, [e, r]),
      p.useEffect(() => {
        const _ = (re) => {
          O.current &&
            !O.current.contains(re.target) &&
            ee.current &&
            !ee.current.contains(re.target) &&
            G(!1),
            S.current &&
              !S.current.contains(re.target) &&
              w.current &&
              !w.current.contains(re.target) &&
              M(!1);
        };
        return (
          document.addEventListener("mousedown", _),
          () => document.removeEventListener("mousedown", _)
        );
      }, []);
    const Q = async () => {
        try {
          const _ = await ke.getAllStaffInfo();
          _.Code === 200 && _.Data && I(_.Data);
        } catch (_) {
          console.error("獲取人員資料失敗:", _);
        }
      },
      ie = (_) => {
        if ((f(_), _.trim() === "")) {
          j([]), G(!1);
          return;
        }
        const re = B.filter(
          (T) => T.name && T.name.toLowerCase().includes(_.toLowerCase())
        );
        j(re), G(re.length > 0);
      },
      X = (_) => {
        if ((C(_), _.trim() === "")) {
          D([]), M(!1);
          return;
        }
        const re = B.filter(
          (T) => T.ID && T.ID.toLowerCase().includes(_.toLowerCase())
        );
        D(re), M(re.length > 0);
      },
      oe = (_) => {
        f(_.name), C(_.ID), G(!1);
      },
      Ne = (_) => {
        f(_.name), C(_.ID), M(!1);
      };
    if (!e || !r) return null;
    const le = (_) => {
        if (b) a(_), c(_), v(!1);
        else {
          const re = l === "0" ? _ : l + _;
          a(re), c(re);
        }
      },
      ye = (_) => {
        h && x !== null && !b && U(), m(i), d(_), v(!0);
      },
      U = () => {
        if (h === null || x === null) return;
        const _ = parseFloat(x),
          re = parseFloat(i);
        let T = 0;
        switch (h) {
          case "+":
            T = _ + re;
            break;
          case "-":
            T = _ - re;
            break;
          case "×":
            T = _ * re;
            break;
          case "÷":
            T = re !== 0 ? _ / re : 0;
            break;
          default:
            return;
        }
        const k = T.toString();
        a(k), c(k), d(null), m(null), v(!0);
      },
      ae = () => {
        U();
      },
      R = () => {
        if (b) a("0."), c("0."), v(!1);
        else if (!l.includes(".")) {
          const _ = l + ".";
          a(_), c(_);
        }
      },
      J = () => {
        a("0"), c("0"), d(null), m(null), v(!1);
      },
      ce = () => {
        const _ = new Date(),
          re = _.getFullYear(),
          T = String(_.getMonth() + 1).padStart(2, "0"),
          k = String(_.getDate()).padStart(2, "0"),
          $ = String(_.getHours()).padStart(2, "0"),
          V = String(_.getMinutes()).padStart(2, "0"),
          se = String(_.getSeconds()).padStart(2, "0");
        return `${re}-${T}-${k}T${$}:${V}:${se}`;
      },
      Se = async () => {
        if (!r) return;
        if (!u.trim()) {
          alert("請輸入核撥人員名稱");
          return;
        }
        const _ = n === "requisition" ? "申領" : "撥補";
        if (
          window.confirm(`確認核撥資訊：

藥品名稱：${r.name}
實際撥發量：${l}
核撥人員：${u}${g ? ` (${g})` : ""}

是否確認${_}？`)
        ) {
          E(!0);
          try {
            const T = ce();
            if (n === "requisition") {
              const k = await ke.updateRequisitionActualQuantity(r.GUID, l);
              if (k.Code !== 200) {
                alert(`更新實際撥發量失敗：${k.Message || "未知錯誤"}`), E(!1);
                return;
              }
              const $ = {
                ...r,
                actualQuantity: l,
                notice: "False",
                state: "已過帳",
                issuingPerson: u,
                issueTime: T,
              };
              console.log("申領request", $);
              const V = await ke.updateRequisitionByGuid($);
              if (V.Code !== 200) {
                alert(`申領過帳失敗：${V.Message || "未知錯誤"}`), E(!1);
                return;
              }
              console.log("✅ 申領核撥成功:", {
                GUID: r.GUID,
                name: r.name,
                actualQuantity: l,
                issuingPerson: u,
                issueTime: T,
              });
            } else {
              const k = await ke.updateDistributionActualQuantity(r.GUID, l);
              if (k.Code !== 200) {
                alert(`更新實際撥發量失敗：${k.Message || "未知錯誤"}`), E(!1);
                return;
              }
              const $ = {
                ...r,
                actualQuantity: l,
                notice: "False",
                state: "已過帳",
                issuer: u,
                issuanceTime: T,
              };
              console.log("撥補request", $);
              const V = await ke.updateDistributionByGuid($);
              if (V.Code !== 200) {
                alert(`撥補過帳失敗：${V.Message || "未知錯誤"}`), E(!1);
                return;
              }
              console.log("✅ 撥補核撥成功:", {
                GUID: r.GUID,
                name: r.name,
                actualQuantity: l,
                issuer: u,
                issuanceTime: T,
              });
            }
            o && (await o()), alert(`${_}核撥成功！`), t();
          } catch (T) {
            console.error(`${_}核撥失敗:`, T),
              alert(`${_}核撥失敗，請稍後再試`);
          } finally {
            E(!1);
          }
        }
      },
      L = n === "requisition" ? r.requestedQuantity : r.issuedQuantity;
    return s.jsxs("div", {
      className: "fixed inset-0 z-[70] flex items-center justify-center",
      children: [
        s.jsx("div", {
          className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
          onClick: t,
        }),
        s.jsxs("div", {
          className:
            "relative w-full max-w-md bg-white shadow-2xl rounded-xl overflow-hidden flex flex-col m-4 max-h-[90vh]",
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
            s.jsx("div", {
              className: "overflow-y-auto flex-1",
              children: s.jsxs("div", {
                className: "p-4 space-y-2",
                children: [
                  s.jsxs("div", {
                    className: "bg-blue-50 rounded-lg p-3 space-y-2",
                    children: [
                      s.jsx("label", {
                        className:
                          "block text-sm font-semibold text-gray-700 mb-1",
                        children: "核撥人員",
                      }),
                      s.jsxs("div", {
                        className: "grid grid-cols-2 gap-2",
                        children: [
                          s.jsxs("div", {
                            className: "relative",
                            children: [
                              s.jsx("input", {
                                ref: ee,
                                type: "text",
                                value: u,
                                onChange: (_) => ie(_.target.value),
                                onFocus: () => {
                                  u.trim() && ie(u);
                                },
                                placeholder: "人員名稱",
                                className:
                                  "w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                              }),
                              F &&
                                s.jsx("div", {
                                  ref: O,
                                  className:
                                    "absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-40 overflow-y-auto",
                                  children: A.map((_, re) =>
                                    s.jsxs(
                                      "div",
                                      {
                                        onClick: () => oe(_),
                                        className:
                                          "px-3 py-2 hover:bg-blue-50 cursor-pointer transition-colors",
                                        children: [
                                          s.jsx("div", {
                                            className: "text-xs text-gray-500",
                                            children: _.ID,
                                          }),
                                          s.jsx("div", {
                                            className:
                                              "font-medium text-gray-900 text-sm",
                                            children: _.name,
                                          }),
                                        ],
                                      },
                                      re
                                    )
                                  ),
                                }),
                            ],
                          }),
                          s.jsxs("div", {
                            className: "relative",
                            children: [
                              s.jsx("input", {
                                ref: w,
                                type: "text",
                                value: g,
                                onChange: (_) => X(_.target.value),
                                onFocus: () => {
                                  g.trim() && X(g);
                                },
                                placeholder: "人員 ID",
                                className:
                                  "w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                              }),
                              P &&
                                s.jsx("div", {
                                  ref: S,
                                  className:
                                    "absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-40 overflow-y-auto",
                                  children: z.map((_, re) =>
                                    s.jsxs(
                                      "div",
                                      {
                                        onClick: () => Ne(_),
                                        className:
                                          "px-3 py-2 hover:bg-blue-50 cursor-pointer transition-colors",
                                        children: [
                                          s.jsx("div", {
                                            className:
                                              "font-medium text-gray-900 text-sm",
                                            children: _.ID,
                                          }),
                                          s.jsx("div", {
                                            className: "text-xs text-gray-500",
                                            children: _.name,
                                          }),
                                        ],
                                      },
                                      re
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
                            children: L || "-",
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
                        onClick: () => le("7"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "7",
                      }),
                      s.jsx("button", {
                        onClick: () => le("8"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "8",
                      }),
                      s.jsx("button", {
                        onClick: () => le("9"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "9",
                      }),
                      s.jsx("button", {
                        onClick: () => ye("÷"),
                        className:
                          "py-4 text-lg font-semibold bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-lg transition-colors",
                        children: "÷",
                      }),
                      s.jsx("button", {
                        onClick: () => le("4"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "4",
                      }),
                      s.jsx("button", {
                        onClick: () => le("5"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "5",
                      }),
                      s.jsx("button", {
                        onClick: () => le("6"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "6",
                      }),
                      s.jsx("button", {
                        onClick: () => ye("×"),
                        className:
                          "py-4 text-lg font-semibold bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-lg transition-colors",
                        children: "×",
                      }),
                      s.jsx("button", {
                        onClick: () => le("1"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "1",
                      }),
                      s.jsx("button", {
                        onClick: () => le("2"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "2",
                      }),
                      s.jsx("button", {
                        onClick: () => le("3"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "3",
                      }),
                      s.jsx("button", {
                        onClick: () => ye("-"),
                        className:
                          "py-4 text-lg font-semibold bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-lg transition-colors",
                        children: "-",
                      }),
                      s.jsx("button", {
                        onClick: () => le("0"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "0",
                      }),
                      s.jsx("button", {
                        onClick: R,
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: ".",
                      }),
                      s.jsx("button", {
                        onClick: ae,
                        className:
                          "py-4 text-lg font-semibold bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors",
                        children: "=",
                      }),
                      s.jsx("button", {
                        onClick: () => ye("+"),
                        className:
                          "py-4 text-lg font-semibold bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-lg transition-colors",
                        children: "+",
                      }),
                    ],
                  }),
                ],
              }),
            }),
            s.jsxs("div", {
              className:
                "flex items-center justify-end gap-2 p-3 border-t border-gray-200 bg-gray-50",
              children: [
                s.jsx("button", {
                  onClick: J,
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
                  onClick: Se,
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
  wh = ({
    isOpen: e,
    onClose: t,
    medicineInfo: n,
    requisitions: r,
    distributions: o,
    onNoticeUpdated: l,
  }) => {
    const [a, i] = p.useState(r),
      [c, h] = p.useState(o),
      [d, x] = p.useState(null),
      [m, b] = p.useState(!1),
      [v, N] = p.useState(null),
      [E, u] = p.useState("requisition");
    Zs.useEffect(() => {
      i(r), h(o);
    }, [r, o]);
    const f = async (j) => {
        const z = j.notice === "True" ? "False" : "True";
        x(j.GUID);
        const D = [...a],
          F = D.findIndex((G) => G.GUID === j.GUID);
        if (F === -1) {
          x(null);
          return;
        }
        (D[F] = { ...j, notice: z }), i(D);
        try {
          const G = await ke.updateRequisitionNotice(j.GUID, z);
          G.Code !== 200
            ? ((D[F] = { ...j, notice: j.notice }),
              i(D),
              console.error("更新申領通知狀態失敗:", G))
            : l && l();
        } catch (G) {
          (D[F] = { ...j, notice: j.notice }),
            i(D),
            console.error("更新申領通知狀態失敗:", G);
        } finally {
          x(null);
        }
      },
      g = async (j) => {
        const z = j.notice === "True" ? "False" : "True";
        x(j.GUID);
        const D = [...c],
          F = D.findIndex((G) => G.GUID === j.GUID);
        if (F === -1) {
          x(null);
          return;
        }
        (D[F] = { ...j, notice: z }), h(D);
        try {
          const G = await ke.updateDistributionNotice(j.GUID, z);
          G.Code !== 200
            ? ((D[F] = { ...j, notice: j.notice }),
              h(D),
              console.error("更新撥補通知狀態失敗:", G))
            : l && l();
        } catch (G) {
          (D[F] = { ...j, notice: j.notice }),
            h(D),
            console.error("更新撥補通知狀態失敗:", G);
        } finally {
          x(null);
        }
      };
    if (!e || !n) return null;
    const C = a.filter((j) => j.state === "等待過帳"),
      B = c.filter((j) => j.state === "等待過帳"),
      I = C.length === 0 && B.length === 0,
      A = (j) => {
        if (!j || j === "1/01/01 00:00:00" || j === "0001-01-01T00:00:00")
          return "-";
        try {
          const z = new Date(j);
          if (isNaN(z.getTime())) return j;
          const D = z.getFullYear(),
            F = String(z.getMonth() + 1).padStart(2, "0"),
            G = String(z.getDate()).padStart(2, "0"),
            P = String(z.getHours()).padStart(2, "0"),
            M = String(z.getMinutes()).padStart(2, "0");
          return `${D}/${F}/${G} ${P}:${M}`;
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
              children: I
                ? s.jsx("div", {
                    className:
                      "flex items-center justify-center h-40 text-gray-400 text-lg",
                    children: "無藥品需求",
                  })
                : s.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      C.map((j, z) =>
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
                                        onClick: (D) => {
                                          D.stopPropagation(), f(j);
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
                                        children: s.jsx(xc, {
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
                                        children: A(j.requestTime),
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
                      B.map((j, z) =>
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
                                    onClick: (D) => {
                                      D.stopPropagation(), g(j);
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
                                        children: A(j.addedTime),
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
        s.jsx(vh, {
          isOpen: m,
          onClose: () => b(!1),
          type: E,
          data: v,
          onApprove: l,
        }),
      ],
    });
  },
  bh = ({ isOpen: e, onClose: t, container: n }) => {
    const [r, o] = p.useState("list_mode"),
      { highlightedMedicineCode: l } = Je(),
      [a, i] = p.useState(!1),
      [c, h] = p.useState([]),
      [d, x] = p.useState([]),
      [m, b] = p.useState([]),
      [v, N] = p.useState(!1),
      [E, u] = p.useState(null),
      f = p.useRef(null),
      g = p.useRef(null),
      C = () => {
        try {
          const D = localStorage.getItem("medMap_setting");
          if (D) {
            const G = JSON.parse(D).light_sec;
            if (G != null && G !== "") {
              const P = Number(G);
              if (!isNaN(P) && P > 0) return P * 1e3;
            }
          }
        } catch (D) {
          console.error("讀取亮燈設定失敗:", D);
        }
        return 6e4;
      },
      B = p.useCallback(async () => {
        try {
          const z = new Date(),
            D = `${z.getFullYear()}-${String(z.getMonth() + 1).padStart(
              2,
              "0"
            )}-${String(z.getDate()).padStart(2, "0")} 00:00:00`,
            F = `${z.getFullYear()}-${String(z.getMonth() + 1).padStart(
              2,
              "0"
            )}-${String(z.getDate()).padStart(2, "0")} 23:59:59`,
            [G, P] = await Promise.all([
              ke.getRequisitionByTime(D, F),
              ke.getDistributionByTime(D, F),
            ]),
            M = [];
          if (G.Code === 200 && G.Data) {
            const ee = G.Data.filter((O) => {
              var S;
              return (S = n == null ? void 0 : n.med_list) == null
                ? void 0
                : S.some((Q) => Q.code === O.code);
            });
            x(ee),
              ee
                .filter((O) => O.state === "等待過帳" && O.notice === "True")
                .forEach((O) => {
                  O.code && M.push(O.code);
                });
          }
          if (P.Code === 200 && P.Data) {
            const ee = P.Data.filter((O) => {
              var S;
              return (S = n == null ? void 0 : n.med_list) == null
                ? void 0
                : S.some((Q) => Q.code === O.code);
            });
            b(ee),
              ee
                .filter((O) => O.state === "等待過帳" && O.notice === "True")
                .forEach((O) => {
                  O.code && (M.includes(O.code) || M.push(O.code));
                });
          }
          h(M);
        } catch (z) {
          console.error("檢查申領撥補資料失敗:", z);
        }
      }, [n]);
    p.useEffect(
      () => (
        e
          ? (B(),
            g.current && clearInterval(g.current),
            (g.current = setInterval(() => {
              B();
            }, 1e4)))
          : g.current && (clearInterval(g.current), (g.current = null)),
        () => {
          g.current && (clearInterval(g.current), (g.current = null));
        }
      ),
      [e, B]
    ),
      p.useEffect(() => {
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
          const z = C();
          console.log("✅ ContainerDetailModal - 啟動亮燈:", {
            medicineCode: l,
            duration: z / 1e3 + "秒",
          }),
            f.current && clearTimeout(f.current),
            (f.current = setTimeout(() => {
              console.log("⏱️ ContainerDetailModal - 亮燈時間結束"),
                i(!1),
                (f.current = null);
            }, z));
        } else i(!1);
        return () => {
          f.current && clearTimeout(f.current);
        };
      }, [e, l]);
    const I = (z) => {
      d.filter((D) => D.code === z.code),
        m.filter((D) => D.code === z.code),
        u({
          code: z.code,
          name: z.name,
          cht_name: z.cht_name,
          skdiacode: z.SKDIACODE || z.skdiacode,
        }),
        N(!0);
    };
    if (!e) return null;
    const A = () =>
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
                    children: n.med_list.map((z, D) => {
                      const F = a && l && z.code == l,
                        G = c.includes(z.code);
                      return (
                        D === 0 &&
                          console.log(
                            "🧪 ContainerDetailModal - 第一筆藥品檢查:",
                            {
                              medCode: z.code,
                              highlightedCode: l,
                              isHighlightActive: a,
                              isHighlighted: F,
                              isPendingRequisition: G,
                              comparison: `${z.code} == ${l} = ${z.code == l}`,
                            }
                          ),
                        s.jsxs(
                          "tr",
                          {
                            className: `transition-colors cursor-pointer ${
                              G
                                ? "highlight-breathe-red"
                                : F
                                ? "highlight-breathe-green"
                                : "hover:bg-gray-50"
                            }`,
                            onClick: () => I(z),
                            children: [
                              s.jsx("td", {
                                className:
                                  "border border-gray-300 px-1 py-2 text-sm",
                                children: z.code || "-",
                              }),
                              s.jsx("td", {
                                className:
                                  "border border-gray-300 px-1 py-2 text-sm",
                                children: z.SKDIACODE || "-",
                              }),
                              s.jsx("td", {
                                className:
                                  "border border-gray-300 px-1 py-2 text-sm",
                                children: z.name || "-",
                              }),
                              s.jsx("td", {
                                className:
                                  "border border-gray-300 px-1 py-2 text-sm text-right",
                                children: z.qty || "-",
                              }),
                              s.jsx("td", {
                                className:
                                  "border border-gray-300 px-1 py-2 text-sm text-center",
                                children: z.stockCol || "-",
                              }),
                              s.jsx("td", {
                                className:
                                  "border border-gray-300 px-1 py-2 text-sm text-center",
                                children: z.stockRow || "-",
                              }),
                              s.jsx("td", {
                                className:
                                  "border border-gray-300 px-1 py-2 text-sm text-center",
                                children: z.stock || "-",
                              }),
                            ],
                          },
                          D
                        )
                      );
                    }),
                  }),
                ],
              }),
            }),
      j = () =>
        n
          ? s.jsx(yh, {
              container: n,
              highlightedMedicineCode: a ? l : null,
              pendingRequisitionCodes: c,
              onMedicineClick: I,
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
                  children: r === "list_mode" ? A() : j(),
                }),
              ],
            }),
          ],
        }),
        s.jsx(wh, {
          isOpen: v,
          onClose: () => N(!1),
          medicineInfo: E,
          requisitions: E ? d.filter((z) => z.code === E.code) : [],
          distributions: E ? m.filter((z) => z.code === E.code) : [],
          onNoticeUpdated: B,
        }),
      ],
    });
  },
  Nh = ({ isOpen: e, onLoginSuccess: t }) => {
    const { t: n } = pt(),
      [r, o] = p.useState(""),
      [l, a] = p.useState(""),
      [i, c] = p.useState(!1),
      [h, d] = p.useState(!1),
      [x, m] = p.useState(""),
      b = async (N) => {
        if ((N.preventDefault(), !r.trim() || !l.trim())) {
          m("Please enter both ID and password");
          return;
        }
        d(!0), m("");
        try {
          const E = await ke.login({ ID: r.trim(), Password: l });
          if (E.Code === 200 && E.Data) {
            const u = { ...E.Data, loginTime: new Date().toISOString() };
            sessionStorage.setItem("user_session", JSON.stringify(u)), t(u);
          } else m(E.Result || "Login failed");
        } catch (E) {
          console.error("Login failed:", E),
            m("Network error. Please try again.");
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
                    x &&
                      s.jsx("div", {
                        className:
                          "mb-6 p-4 bg-red-50 border border-red-200 rounded-lg",
                        children: s.jsx("p", {
                          className: "text-red-600 text-sm",
                          children: x,
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
                                    ? s.jsx(zm, { className: "w-5 h-5" })
                                    : s.jsx(Fm, { className: "w-5 h-5" }),
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
  jh = ({ isVisible: e, message: t }) => {
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
  Sh = ({
    message: e,
    type: t,
    isVisible: n,
    onClose: r,
    duration: o = 3e3,
  }) => {
    const [l, a] = p.useState(!1);
    return (
      p.useEffect(() => {
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
                  : s.jsx(Xm, { className: "w-5 h-5 text-red-600" }),
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
function Ch() {
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
    addStoreItemModalOpen: x,
    closeAddStoreItemModal: m,
    selectedStoreShelfForAdd: b,
    addDepartmentModalOpen: v,
    closeAddDepartmentModal: N,
    qrCodeScannerModalOpen: E,
    qrCodeScannerMode: u,
    closeQRCodeScannerModal: f,
    addBarcodeModalOpen: g,
    closeAddBarcodeModal: C,
    initialBarcodeValue: B,
    containerDetailModalOpen: I,
    closeContainerDetailModal: A,
    selectedContainerForDetail: j,
    setMedicineList: z,
    setIsLoadingMedicines: D,
    showNotification: F,
  } = Je();
  p.useEffect(() => {
    (() => {
      try {
        const w = sessionStorage.getItem("user_session");
        if (w) {
          const O = JSON.parse(w);
          O.GUID && O.ID && O.Name
            ? (o(O), r(!0))
            : sessionStorage.removeItem("user_session");
        }
      } catch (w) {
        console.error("Error checking session:", w),
          sessionStorage.removeItem("user_session");
      }
    })();
  }, [r, o]),
    p.useEffect(() => {
      let ee = !0;
      return (
        (async () => {
          if (n) {
            D(!0);
            try {
              console.log("開始載入藥品資料...");
              const O = await ke.getMedicineCloud();
              if ((console.log("藥品資料 API 回應:", O), !ee)) return;
              O.Code === 200 && O.Data
                ? (z(O.Data),
                  console.log(`✅ 成功載入 ${O.Data.length} 筆藥品資料`),
                  F(`載入 ${O.Data.length} 筆藥品資料`, "success"))
                : (console.warn("API 回應異常:", O),
                  z([]),
                  F("藥品資料載入異常，請稍後重試", "error"));
            } catch (O) {
              if (!ee) return;
              console.error("載入藥品資料失敗:", O),
                z([]),
                F("無法連線到藥品資料庫，部分功能可能無法使用", "error");
            } finally {
              ee && D(!1);
            }
          }
        })(),
        () => {
          ee = !1;
        }
      );
    }, [n]);
  const G = (ee) => {
      o(ee), r(!0);
    },
    P = Zs.useRef(null),
    M = (ee, w) => {
      if (
        (console.log("📸 QR掃描成功 - handleQRScanSuccess 被調用:", {
          barcode: ee,
          medicineData: w,
          mode: u,
        }),
        console.log("📸 當前 mode:", u),
        console.log("📸 當前 viewMode:", t),
        console.log("📸 drugCanvasRef.current:", P.current),
        u === "track_Drug_mode")
      ) {
        if ((console.log("✅ 進入 track_Drug_mode 分支"), t !== "medicine")) {
          console.warn("⚠️ 當前不在藥品地圖視圖，無法定位藥品"),
            F("請切換到藥品地圖視圖後再使用此功能", "error");
          return;
        }
        P.current
          ? (console.log("✅ drugCanvasRef.current 存在"),
            console.log(
              "📸 drugCanvasRef.current.locateDrug 類型:",
              typeof P.current.locateDrug
            ),
            typeof P.current.locateDrug == "function"
              ? (console.log("✅ 呼叫 locateDrug 函數"),
                P.current.locateDrug(w))
              : console.warn("⚠️ locateDrug 不是函數"))
          : console.warn("⚠️ drugCanvasRef.current 不存在");
      } else console.log("⚠️ mode 不是 track_Drug_mode，當前 mode:", u);
    };
  return n
    ? s.jsxs("div", {
        className: "min-h-screen bg-gray-50",
        children: [
          s.jsx(Km, {}),
          s.jsx(Jm, {}),
          s.jsx(th, {}),
          s.jsx("div", {
            className: "fixed inset-0",
            children: s.jsx("div", {
              className: "w-full h-full",
              children:
                t === "department" ? s.jsx(sh, {}) : s.jsx(Bd, { ref: P }),
            }),
          }),
          s.jsx(nh, {}),
          s.jsx(ch, {}),
          s.jsx(uh, {}),
          s.jsx(dh, {}),
          s.jsx(fh, {}),
          s.jsx(ph, {}),
          s.jsx(mh, {}),
          s.jsx(hh, { isOpen: x, onClose: m, storeShelf: b }),
          s.jsx(gh, { isOpen: v, onClose: N }),
          s.jsx(zo, { isOpen: E, onClose: f, mode: u, onScanSuccess: M }),
          s.jsx(xh, { isOpen: g, onClose: C, initialBarcode: B }),
          s.jsx(bh, { isOpen: I, onClose: A, container: j }),
          s.jsx(jh, { isVisible: l }),
          s.jsx(Sh, {
            message: a.message,
            type: a.type,
            isVisible: a.isVisible,
            onClose: i,
          }),
        ],
      })
    : s.jsx(Nh, { isOpen: !0, onLoginSuccess: G });
}
function kh() {
  return s.jsx(Tm, { children: s.jsx(Pm, { children: s.jsx(Ch, {}) }) });
}
Pd(document.getElementById("root")).render(
  s.jsx(p.StrictMode, { children: s.jsx(kh, {}) })
);
