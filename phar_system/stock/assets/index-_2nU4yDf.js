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
function Vc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Ci = { exports: {} },
  bl = {},
  _i = { exports: {} },
  q = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Sr = Symbol.for("react.element"),
  Bc = Symbol.for("react.portal"),
  Hc = Symbol.for("react.fragment"),
  Wc = Symbol.for("react.strict_mode"),
  Gc = Symbol.for("react.profiler"),
  qc = Symbol.for("react.provider"),
  Yc = Symbol.for("react.context"),
  Kc = Symbol.for("react.forward_ref"),
  Xc = Symbol.for("react.suspense"),
  Zc = Symbol.for("react.memo"),
  Jc = Symbol.for("react.lazy"),
  ma = Symbol.iterator;
function ed(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ma && e[ma]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ei = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  bi = Object.assign,
  Pi = {};
function Ln(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Pi),
    (this.updater = n || Ei);
}
Ln.prototype.isReactComponent = {};
Ln.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Ln.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Di() {}
Di.prototype = Ln.prototype;
function mo(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Pi),
    (this.updater = n || Ei);
}
var ho = (mo.prototype = new Di());
ho.constructor = mo;
bi(ho, Ln.prototype);
ho.isPureReactComponent = !0;
var ha = Array.isArray,
  Ti = Object.prototype.hasOwnProperty,
  xo = { current: null },
  Mi = { key: !0, ref: !0, __self: !0, __source: !0 };
function Li(e, t, n) {
  var r,
    l = {},
    s = null,
    a = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      Ti.call(t, r) && !Mi.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var i = Array(u), f = 0; f < u; f++) i[f] = arguments[f + 2];
    l.children = i;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: Sr,
    type: e,
    key: s,
    ref: a,
    props: l,
    _owner: xo.current,
  };
}
function td(e, t) {
  return {
    $$typeof: Sr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function yo(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Sr;
}
function nd(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var xa = /\/+/g;
function ql(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? nd("" + e.key)
    : t.toString(36);
}
function Hr(e, t, n, r, l) {
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
          case Sr:
          case Bc:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (l = l(a)),
      (e = r === "" ? "." + ql(a, 0) : r),
      ha(l)
        ? ((n = ""),
          e != null && (n = e.replace(xa, "$&/") + "/"),
          Hr(l, t, n, "", function (f) {
            return f;
          }))
        : l != null &&
          (yo(l) &&
            (l = td(
              l,
              n +
                (!l.key || (a && a.key === l.key)
                  ? ""
                  : ("" + l.key).replace(xa, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((a = 0), (r = r === "" ? "." : r + ":"), ha(e)))
    for (var u = 0; u < e.length; u++) {
      s = e[u];
      var i = r + ql(s, u);
      a += Hr(s, t, n, i, l);
    }
  else if (((i = ed(e)), typeof i == "function"))
    for (e = i.call(e), u = 0; !(s = e.next()).done; )
      (s = s.value), (i = r + ql(s, u++)), (a += Hr(s, t, n, i, l));
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
function br(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Hr(e, r, "", "", function (s) {
      return t.call(n, s, l++);
    }),
    r
  );
}
function rd(e) {
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
var De = { current: null },
  Wr = { transition: null },
  ld = {
    ReactCurrentDispatcher: De,
    ReactCurrentBatchConfig: Wr,
    ReactCurrentOwner: xo,
  };
function zi() {
  throw Error("act(...) is not supported in production builds of React.");
}
q.Children = {
  map: br,
  forEach: function (e, t, n) {
    br(
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
      br(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      br(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!yo(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
q.Component = Ln;
q.Fragment = Hc;
q.Profiler = Gc;
q.PureComponent = mo;
q.StrictMode = Wc;
q.Suspense = Xc;
q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ld;
q.act = zi;
q.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = bi({}, e.props),
    l = e.key,
    s = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (a = xo.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (i in t)
      Ti.call(t, i) &&
        !Mi.hasOwnProperty(i) &&
        (r[i] = t[i] === void 0 && u !== void 0 ? u[i] : t[i]);
  }
  var i = arguments.length - 2;
  if (i === 1) r.children = n;
  else if (1 < i) {
    u = Array(i);
    for (var f = 0; f < i; f++) u[f] = arguments[f + 2];
    r.children = u;
  }
  return { $$typeof: Sr, type: e.type, key: l, ref: s, props: r, _owner: a };
};
q.createContext = function (e) {
  return (
    (e = {
      $$typeof: Yc,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: qc, _context: e }),
    (e.Consumer = e)
  );
};
q.createElement = Li;
q.createFactory = function (e) {
  var t = Li.bind(null, e);
  return (t.type = e), t;
};
q.createRef = function () {
  return { current: null };
};
q.forwardRef = function (e) {
  return { $$typeof: Kc, render: e };
};
q.isValidElement = yo;
q.lazy = function (e) {
  return { $$typeof: Jc, _payload: { _status: -1, _result: e }, _init: rd };
};
q.memo = function (e, t) {
  return { $$typeof: Zc, type: e, compare: t === void 0 ? null : t };
};
q.startTransition = function (e) {
  var t = Wr.transition;
  Wr.transition = {};
  try {
    e();
  } finally {
    Wr.transition = t;
  }
};
q.unstable_act = zi;
q.useCallback = function (e, t) {
  return De.current.useCallback(e, t);
};
q.useContext = function (e) {
  return De.current.useContext(e);
};
q.useDebugValue = function () {};
q.useDeferredValue = function (e) {
  return De.current.useDeferredValue(e);
};
q.useEffect = function (e, t) {
  return De.current.useEffect(e, t);
};
q.useId = function () {
  return De.current.useId();
};
q.useImperativeHandle = function (e, t, n) {
  return De.current.useImperativeHandle(e, t, n);
};
q.useInsertionEffect = function (e, t) {
  return De.current.useInsertionEffect(e, t);
};
q.useLayoutEffect = function (e, t) {
  return De.current.useLayoutEffect(e, t);
};
q.useMemo = function (e, t) {
  return De.current.useMemo(e, t);
};
q.useReducer = function (e, t, n) {
  return De.current.useReducer(e, t, n);
};
q.useRef = function (e) {
  return De.current.useRef(e);
};
q.useState = function (e) {
  return De.current.useState(e);
};
q.useSyncExternalStore = function (e, t, n) {
  return De.current.useSyncExternalStore(e, t, n);
};
q.useTransition = function () {
  return De.current.useTransition();
};
q.version = "18.3.1";
_i.exports = q;
var C = _i.exports;
const Ii = Vc(C);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sd = C,
  od = Symbol.for("react.element"),
  ad = Symbol.for("react.fragment"),
  id = Object.prototype.hasOwnProperty,
  ud = sd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  cd = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ri(e, t, n) {
  var r,
    l = {},
    s = null,
    a = null;
  n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (a = t.ref);
  for (r in t) id.call(t, r) && !cd.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: od,
    type: e,
    key: s,
    ref: a,
    props: l,
    _owner: ud.current,
  };
}
bl.Fragment = ad;
bl.jsx = Ri;
bl.jsxs = Ri;
Ci.exports = bl;
var o = Ci.exports,
  Ui = { exports: {} },
  Qe = {},
  $i = { exports: {} },
  Fi = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(d, m) {
    var v = d.length;
    d.push(m);
    e: for (; 0 < v; ) {
      var c = (v - 1) >>> 1,
        S = d[c];
      if (0 < l(S, m)) (d[c] = m), (d[v] = S), (v = c);
      else break e;
    }
  }
  function n(d) {
    return d.length === 0 ? null : d[0];
  }
  function r(d) {
    if (d.length === 0) return null;
    var m = d[0],
      v = d.pop();
    if (v !== m) {
      d[0] = v;
      e: for (var c = 0, S = d.length, y = S >>> 1; c < y; ) {
        var j = 2 * (c + 1) - 1,
          L = d[j],
          O = j + 1,
          Q = d[O];
        if (0 > l(L, v))
          O < S && 0 > l(Q, L)
            ? ((d[c] = Q), (d[O] = v), (c = O))
            : ((d[c] = L), (d[j] = v), (c = j));
        else if (O < S && 0 > l(Q, v)) (d[c] = Q), (d[O] = v), (c = O);
        else break e;
      }
    }
    return m;
  }
  function l(d, m) {
    var v = d.sortIndex - m.sortIndex;
    return v !== 0 ? v : d.id - m.id;
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
    f = [],
    N = 1,
    w = null,
    x = 3,
    E = !1,
    _ = !1,
    b = !1,
    V = typeof setTimeout == "function" ? setTimeout : null,
    h = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(d) {
    for (var m = n(f); m !== null; ) {
      if (m.callback === null) r(f);
      else if (m.startTime <= d)
        r(f), (m.sortIndex = m.expirationTime), t(i, m);
      else break;
      m = n(f);
    }
  }
  function k(d) {
    if (((b = !1), g(d), !_))
      if (n(i) !== null) (_ = !0), re(M);
      else {
        var m = n(f);
        m !== null && ie(k, m.startTime - d);
      }
  }
  function M(d, m) {
    (_ = !1), b && ((b = !1), h(U), (U = -1)), (E = !0);
    var v = x;
    try {
      for (
        g(m), w = n(i);
        w !== null && (!(w.expirationTime > m) || (d && !H()));

      ) {
        var c = w.callback;
        if (typeof c == "function") {
          (w.callback = null), (x = w.priorityLevel);
          var S = c(w.expirationTime <= m);
          (m = e.unstable_now()),
            typeof S == "function" ? (w.callback = S) : w === n(i) && r(i),
            g(m);
        } else r(i);
        w = n(i);
      }
      if (w !== null) var y = !0;
      else {
        var j = n(f);
        j !== null && ie(k, j.startTime - m), (y = !1);
      }
      return y;
    } finally {
      (w = null), (x = v), (E = !1);
    }
  }
  var R = !1,
    z = null,
    U = -1,
    G = 5,
    P = -1;
  function H() {
    return !(e.unstable_now() - P < G);
  }
  function A() {
    if (z !== null) {
      var d = e.unstable_now();
      P = d;
      var m = !0;
      try {
        m = z(!0, d);
      } finally {
        m ? D() : ((R = !1), (z = null));
      }
    } else R = !1;
  }
  var D;
  if (typeof p == "function")
    D = function () {
      p(A);
    };
  else if (typeof MessageChannel < "u") {
    var $ = new MessageChannel(),
      W = $.port2;
    ($.port1.onmessage = A),
      (D = function () {
        W.postMessage(null);
      });
  } else
    D = function () {
      V(A, 0);
    };
  function re(d) {
    (z = d), R || ((R = !0), D());
  }
  function ie(d, m) {
    U = V(function () {
      d(e.unstable_now());
    }, m);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (d) {
      d.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      _ || E || ((_ = !0), re(M));
    }),
    (e.unstable_forceFrameRate = function (d) {
      0 > d || 125 < d
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (G = 0 < d ? Math.floor(1e3 / d) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return x;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(i);
    }),
    (e.unstable_next = function (d) {
      switch (x) {
        case 1:
        case 2:
        case 3:
          var m = 3;
          break;
        default:
          m = x;
      }
      var v = x;
      x = m;
      try {
        return d();
      } finally {
        x = v;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (d, m) {
      switch (d) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          d = 3;
      }
      var v = x;
      x = d;
      try {
        return m();
      } finally {
        x = v;
      }
    }),
    (e.unstable_scheduleCallback = function (d, m, v) {
      var c = e.unstable_now();
      switch (
        (typeof v == "object" && v !== null
          ? ((v = v.delay), (v = typeof v == "number" && 0 < v ? c + v : c))
          : (v = c),
        d)
      ) {
        case 1:
          var S = -1;
          break;
        case 2:
          S = 250;
          break;
        case 5:
          S = 1073741823;
          break;
        case 4:
          S = 1e4;
          break;
        default:
          S = 5e3;
      }
      return (
        (S = v + S),
        (d = {
          id: N++,
          callback: m,
          priorityLevel: d,
          startTime: v,
          expirationTime: S,
          sortIndex: -1,
        }),
        v > c
          ? ((d.sortIndex = v),
            t(f, d),
            n(i) === null &&
              d === n(f) &&
              (b ? (h(U), (U = -1)) : (b = !0), ie(k, v - c)))
          : ((d.sortIndex = S), t(i, d), _ || E || ((_ = !0), re(M))),
        d
      );
    }),
    (e.unstable_shouldYield = H),
    (e.unstable_wrapCallback = function (d) {
      var m = x;
      return function () {
        var v = x;
        x = m;
        try {
          return d.apply(this, arguments);
        } finally {
          x = v;
        }
      };
    });
})(Fi);
$i.exports = Fi;
var dd = $i.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var fd = C,
  Oe = dd;
function T(e) {
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
var Oi = new Set(),
  rr = {};
function nn(e, t) {
  Cn(e, t), Cn(e + "Capture", t);
}
function Cn(e, t) {
  for (rr[e] = t, e = 0; e < t.length; e++) Oi.add(t[e]);
}
var mt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ws = Object.prototype.hasOwnProperty,
  pd =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ya = {},
  ga = {};
function md(e) {
  return ws.call(ga, e)
    ? !0
    : ws.call(ya, e)
    ? !1
    : pd.test(e)
    ? (ga[e] = !0)
    : ((ya[e] = !0), !1);
}
function hd(e, t, n, r) {
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
function xd(e, t, n, r) {
  if (t === null || typeof t > "u" || hd(e, t, n, r)) return !0;
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
var go = /[\-:]([a-z])/g;
function vo(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(go, vo);
    we[t] = new Te(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(go, vo);
    we[t] = new Te(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(go, vo);
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
function wo(e, t, n, r) {
  var l = we.hasOwnProperty(t) ? we[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (xd(t, n, l, r) && (n = null),
    r || l === null
      ? md(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var gt = fd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Pr = Symbol.for("react.element"),
  on = Symbol.for("react.portal"),
  an = Symbol.for("react.fragment"),
  So = Symbol.for("react.strict_mode"),
  Ss = Symbol.for("react.profiler"),
  Qi = Symbol.for("react.provider"),
  Ai = Symbol.for("react.context"),
  jo = Symbol.for("react.forward_ref"),
  js = Symbol.for("react.suspense"),
  Ns = Symbol.for("react.suspense_list"),
  No = Symbol.for("react.memo"),
  St = Symbol.for("react.lazy"),
  Vi = Symbol.for("react.offscreen"),
  va = Symbol.iterator;
function Rn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (va && e[va]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var oe = Object.assign,
  Yl;
function Bn(e) {
  if (Yl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Yl = (t && t[1]) || "";
    }
  return (
    `
` +
    Yl +
    e
  );
}
var Kl = !1;
function Xl(e, t) {
  if (!e || Kl) return "";
  Kl = !0;
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
        } catch (f) {
          var r = f;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (f) {
          r = f;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (f) {
        r = f;
      }
      e();
    }
  } catch (f) {
    if (f && r && typeof f.stack == "string") {
      for (
        var l = f.stack.split(`
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
    (Kl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Bn(e) : "";
}
function yd(e) {
  switch (e.tag) {
    case 5:
      return Bn(e.type);
    case 16:
      return Bn("Lazy");
    case 13:
      return Bn("Suspense");
    case 19:
      return Bn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Xl(e.type, !1)), e;
    case 11:
      return (e = Xl(e.type.render, !1)), e;
    case 1:
      return (e = Xl(e.type, !0)), e;
    default:
      return "";
  }
}
function ks(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case an:
      return "Fragment";
    case on:
      return "Portal";
    case Ss:
      return "Profiler";
    case So:
      return "StrictMode";
    case js:
      return "Suspense";
    case Ns:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Ai:
        return (e.displayName || "Context") + ".Consumer";
      case Qi:
        return (e._context.displayName || "Context") + ".Provider";
      case jo:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case No:
        return (
          (t = e.displayName || null), t !== null ? t : ks(e.type) || "Memo"
        );
      case St:
        (t = e._payload), (e = e._init);
        try {
          return ks(e(t));
        } catch {}
    }
  return null;
}
function gd(e) {
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
      return ks(t);
    case 8:
      return t === So ? "StrictMode" : "Mode";
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
function It(e) {
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
function Bi(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function vd(e) {
  var t = Bi(e) ? "checked" : "value",
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
function Dr(e) {
  e._valueTracker || (e._valueTracker = vd(e));
}
function Hi(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Bi(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function rl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Cs(e, t) {
  var n = t.checked;
  return oe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function wa(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = It(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Wi(e, t) {
  (t = t.checked), t != null && wo(e, "checked", t, !1);
}
function _s(e, t) {
  Wi(e, t);
  var n = It(t.value),
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
    ? Es(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Es(e, t.type, It(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Sa(e, t, n) {
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
function Es(e, t, n) {
  (t !== "number" || rl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Hn = Array.isArray;
function vn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + It(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function bs(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(T(91));
  return oe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function ja(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(T(92));
      if (Hn(n)) {
        if (1 < n.length) throw Error(T(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: It(n) };
}
function Gi(e, t) {
  var n = It(t.value),
    r = It(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Na(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function qi(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ps(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? qi(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Tr,
  Yi = (function (e) {
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
        Tr = Tr || document.createElement("div"),
          Tr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Tr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function lr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var qn = {
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
  wd = ["Webkit", "ms", "Moz", "O"];
Object.keys(qn).forEach(function (e) {
  wd.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (qn[t] = qn[e]);
  });
});
function Ki(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (qn.hasOwnProperty(e) && qn[e])
    ? ("" + t).trim()
    : t + "px";
}
function Xi(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = Ki(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Sd = oe(
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
function Ds(e, t) {
  if (t) {
    if (Sd[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(T(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(T(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(T(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(T(62));
  }
}
function Ts(e, t) {
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
var Ms = null;
function ko(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ls = null,
  wn = null,
  Sn = null;
function ka(e) {
  if ((e = kr(e))) {
    if (typeof Ls != "function") throw Error(T(280));
    var t = e.stateNode;
    t && ((t = Ll(t)), Ls(e.stateNode, e.type, t));
  }
}
function Zi(e) {
  wn ? (Sn ? Sn.push(e) : (Sn = [e])) : (wn = e);
}
function Ji() {
  if (wn) {
    var e = wn,
      t = Sn;
    if (((Sn = wn = null), ka(e), t)) for (e = 0; e < t.length; e++) ka(t[e]);
  }
}
function eu(e, t) {
  return e(t);
}
function tu() {}
var Zl = !1;
function nu(e, t, n) {
  if (Zl) return e(t, n);
  Zl = !0;
  try {
    return eu(e, t, n);
  } finally {
    (Zl = !1), (wn !== null || Sn !== null) && (tu(), Ji());
  }
}
function sr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ll(n);
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
  if (n && typeof n != "function") throw Error(T(231, t, typeof n));
  return n;
}
var zs = !1;
if (mt)
  try {
    var Un = {};
    Object.defineProperty(Un, "passive", {
      get: function () {
        zs = !0;
      },
    }),
      window.addEventListener("test", Un, Un),
      window.removeEventListener("test", Un, Un);
  } catch {
    zs = !1;
  }
function jd(e, t, n, r, l, s, a, u, i) {
  var f = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, f);
  } catch (N) {
    this.onError(N);
  }
}
var Yn = !1,
  ll = null,
  sl = !1,
  Is = null,
  Nd = {
    onError: function (e) {
      (Yn = !0), (ll = e);
    },
  };
function kd(e, t, n, r, l, s, a, u, i) {
  (Yn = !1), (ll = null), jd.apply(Nd, arguments);
}
function Cd(e, t, n, r, l, s, a, u, i) {
  if ((kd.apply(this, arguments), Yn)) {
    if (Yn) {
      var f = ll;
      (Yn = !1), (ll = null);
    } else throw Error(T(198));
    sl || ((sl = !0), (Is = f));
  }
}
function rn(e) {
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
function ru(e) {
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
function Ca(e) {
  if (rn(e) !== e) throw Error(T(188));
}
function _d(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = rn(e)), t === null)) throw Error(T(188));
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
        if (s === n) return Ca(l), e;
        if (s === r) return Ca(l), t;
        s = s.sibling;
      }
      throw Error(T(188));
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
        if (!a) throw Error(T(189));
      }
    }
    if (n.alternate !== r) throw Error(T(190));
  }
  if (n.tag !== 3) throw Error(T(188));
  return n.stateNode.current === n ? e : t;
}
function lu(e) {
  return (e = _d(e)), e !== null ? su(e) : null;
}
function su(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = su(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var ou = Oe.unstable_scheduleCallback,
  _a = Oe.unstable_cancelCallback,
  Ed = Oe.unstable_shouldYield,
  bd = Oe.unstable_requestPaint,
  ce = Oe.unstable_now,
  Pd = Oe.unstable_getCurrentPriorityLevel,
  Co = Oe.unstable_ImmediatePriority,
  au = Oe.unstable_UserBlockingPriority,
  ol = Oe.unstable_NormalPriority,
  Dd = Oe.unstable_LowPriority,
  iu = Oe.unstable_IdlePriority,
  Pl = null,
  at = null;
function Td(e) {
  if (at && typeof at.onCommitFiberRoot == "function")
    try {
      at.onCommitFiberRoot(Pl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var tt = Math.clz32 ? Math.clz32 : zd,
  Md = Math.log,
  Ld = Math.LN2;
function zd(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Md(e) / Ld) | 0)) | 0;
}
var Mr = 64,
  Lr = 4194304;
function Wn(e) {
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
function al(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    s = e.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var u = a & ~l;
    u !== 0 ? (r = Wn(u)) : ((s &= a), s !== 0 && (r = Wn(s)));
  } else (a = n & ~l), a !== 0 ? (r = Wn(a)) : s !== 0 && (r = Wn(s));
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
      (n = 31 - tt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Id(e, t) {
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
function Rd(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;

  ) {
    var a = 31 - tt(s),
      u = 1 << a,
      i = l[a];
    i === -1
      ? (!(u & n) || u & r) && (l[a] = Id(u, t))
      : i <= t && (e.expiredLanes |= u),
      (s &= ~u);
  }
}
function Rs(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function uu() {
  var e = Mr;
  return (Mr <<= 1), !(Mr & 4194240) && (Mr = 64), e;
}
function Jl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function jr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - tt(t)),
    (e[t] = n);
}
function Ud(e, t) {
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
    var l = 31 - tt(n),
      s = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~s);
  }
}
function _o(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - tt(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var X = 0;
function cu(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var du,
  Eo,
  fu,
  pu,
  mu,
  Us = !1,
  zr = [],
  Et = null,
  bt = null,
  Pt = null,
  or = new Map(),
  ar = new Map(),
  Nt = [],
  $d =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Ea(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Et = null;
      break;
    case "dragenter":
    case "dragleave":
      bt = null;
      break;
    case "mouseover":
    case "mouseout":
      Pt = null;
      break;
    case "pointerover":
    case "pointerout":
      or.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ar.delete(t.pointerId);
  }
}
function $n(e, t, n, r, l, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [l],
      }),
      t !== null && ((t = kr(t)), t !== null && Eo(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Fd(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (Et = $n(Et, e, t, n, r, l)), !0;
    case "dragenter":
      return (bt = $n(bt, e, t, n, r, l)), !0;
    case "mouseover":
      return (Pt = $n(Pt, e, t, n, r, l)), !0;
    case "pointerover":
      var s = l.pointerId;
      return or.set(s, $n(or.get(s) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (s = l.pointerId), ar.set(s, $n(ar.get(s) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function hu(e) {
  var t = Ht(e.target);
  if (t !== null) {
    var n = rn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = ru(n)), t !== null)) {
          (e.blockedOn = t),
            mu(e.priority, function () {
              fu(n);
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
function Gr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = $s(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Ms = r), n.target.dispatchEvent(r), (Ms = null);
    } else return (t = kr(n)), t !== null && Eo(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function ba(e, t, n) {
  Gr(e) && n.delete(t);
}
function Od() {
  (Us = !1),
    Et !== null && Gr(Et) && (Et = null),
    bt !== null && Gr(bt) && (bt = null),
    Pt !== null && Gr(Pt) && (Pt = null),
    or.forEach(ba),
    ar.forEach(ba);
}
function Fn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Us ||
      ((Us = !0),
      Oe.unstable_scheduleCallback(Oe.unstable_NormalPriority, Od)));
}
function ir(e) {
  function t(l) {
    return Fn(l, e);
  }
  if (0 < zr.length) {
    Fn(zr[0], e);
    for (var n = 1; n < zr.length; n++) {
      var r = zr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Et !== null && Fn(Et, e),
      bt !== null && Fn(bt, e),
      Pt !== null && Fn(Pt, e),
      or.forEach(t),
      ar.forEach(t),
      n = 0;
    n < Nt.length;
    n++
  )
    (r = Nt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Nt.length && ((n = Nt[0]), n.blockedOn === null); )
    hu(n), n.blockedOn === null && Nt.shift();
}
var jn = gt.ReactCurrentBatchConfig,
  il = !0;
function Qd(e, t, n, r) {
  var l = X,
    s = jn.transition;
  jn.transition = null;
  try {
    (X = 1), bo(e, t, n, r);
  } finally {
    (X = l), (jn.transition = s);
  }
}
function Ad(e, t, n, r) {
  var l = X,
    s = jn.transition;
  jn.transition = null;
  try {
    (X = 4), bo(e, t, n, r);
  } finally {
    (X = l), (jn.transition = s);
  }
}
function bo(e, t, n, r) {
  if (il) {
    var l = $s(e, t, n, r);
    if (l === null) us(e, t, r, ul, n), Ea(e, r);
    else if (Fd(l, e, t, n, r)) r.stopPropagation();
    else if ((Ea(e, r), t & 4 && -1 < $d.indexOf(e))) {
      for (; l !== null; ) {
        var s = kr(l);
        if (
          (s !== null && du(s),
          (s = $s(e, t, n, r)),
          s === null && us(e, t, r, ul, n),
          s === l)
        )
          break;
        l = s;
      }
      l !== null && r.stopPropagation();
    } else us(e, t, r, null, n);
  }
}
var ul = null;
function $s(e, t, n, r) {
  if (((ul = null), (e = ko(r)), (e = Ht(e)), e !== null))
    if (((t = rn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = ru(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ul = e), null;
}
function xu(e) {
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
      switch (Pd()) {
        case Co:
          return 1;
        case au:
          return 4;
        case ol:
        case Dd:
          return 16;
        case iu:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Ct = null,
  Po = null,
  qr = null;
function yu() {
  if (qr) return qr;
  var e,
    t = Po,
    n = t.length,
    r,
    l = "value" in Ct ? Ct.value : Ct.textContent,
    s = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === l[s - r]; r++);
  return (qr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Yr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ir() {
  return !0;
}
function Pa() {
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
        ? Ir
        : Pa),
      (this.isPropagationStopped = Pa),
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
          (this.isDefaultPrevented = Ir));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ir));
      },
      persist: function () {},
      isPersistent: Ir,
    }),
    t
  );
}
var zn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Do = Ae(zn),
  Nr = oe({}, zn, { view: 0, detail: 0 }),
  Vd = Ae(Nr),
  es,
  ts,
  On,
  Dl = oe({}, Nr, {
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
    getModifierState: To,
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
        : (e !== On &&
            (On && e.type === "mousemove"
              ? ((es = e.screenX - On.screenX), (ts = e.screenY - On.screenY))
              : (ts = es = 0),
            (On = e)),
          es);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : ts;
    },
  }),
  Da = Ae(Dl),
  Bd = oe({}, Dl, { dataTransfer: 0 }),
  Hd = Ae(Bd),
  Wd = oe({}, Nr, { relatedTarget: 0 }),
  ns = Ae(Wd),
  Gd = oe({}, zn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  qd = Ae(Gd),
  Yd = oe({}, zn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Kd = Ae(Yd),
  Xd = oe({}, zn, { data: 0 }),
  Ta = Ae(Xd),
  Zd = {
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
  Jd = {
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
  ef = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function tf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = ef[e]) ? !!t[e] : !1;
}
function To() {
  return tf;
}
var nf = oe({}, Nr, {
    key: function (e) {
      if (e.key) {
        var t = Zd[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Yr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Jd[e.keyCode] || "Unidentified"
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
    getModifierState: To,
    charCode: function (e) {
      return e.type === "keypress" ? Yr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Yr(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  rf = Ae(nf),
  lf = oe({}, Dl, {
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
  Ma = Ae(lf),
  sf = oe({}, Nr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: To,
  }),
  of = Ae(sf),
  af = oe({}, zn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  uf = Ae(af),
  cf = oe({}, Dl, {
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
  df = Ae(cf),
  ff = [9, 13, 27, 32],
  Mo = mt && "CompositionEvent" in window,
  Kn = null;
mt && "documentMode" in document && (Kn = document.documentMode);
var pf = mt && "TextEvent" in window && !Kn,
  gu = mt && (!Mo || (Kn && 8 < Kn && 11 >= Kn)),
  La = " ",
  za = !1;
function vu(e, t) {
  switch (e) {
    case "keyup":
      return ff.indexOf(t.keyCode) !== -1;
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
function wu(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var un = !1;
function mf(e, t) {
  switch (e) {
    case "compositionend":
      return wu(t);
    case "keypress":
      return t.which !== 32 ? null : ((za = !0), La);
    case "textInput":
      return (e = t.data), e === La && za ? null : e;
    default:
      return null;
  }
}
function hf(e, t) {
  if (un)
    return e === "compositionend" || (!Mo && vu(e, t))
      ? ((e = yu()), (qr = Po = Ct = null), (un = !1), e)
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
      return gu && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var xf = {
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
function Ia(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!xf[e.type] : t === "textarea";
}
function Su(e, t, n, r) {
  Zi(r),
    (t = cl(t, "onChange")),
    0 < t.length &&
      ((n = new Do("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Xn = null,
  ur = null;
function yf(e) {
  Mu(e, 0);
}
function Tl(e) {
  var t = fn(e);
  if (Hi(t)) return e;
}
function gf(e, t) {
  if (e === "change") return t;
}
var ju = !1;
if (mt) {
  var rs;
  if (mt) {
    var ls = "oninput" in document;
    if (!ls) {
      var Ra = document.createElement("div");
      Ra.setAttribute("oninput", "return;"),
        (ls = typeof Ra.oninput == "function");
    }
    rs = ls;
  } else rs = !1;
  ju = rs && (!document.documentMode || 9 < document.documentMode);
}
function Ua() {
  Xn && (Xn.detachEvent("onpropertychange", Nu), (ur = Xn = null));
}
function Nu(e) {
  if (e.propertyName === "value" && Tl(ur)) {
    var t = [];
    Su(t, ur, e, ko(e)), nu(yf, t);
  }
}
function vf(e, t, n) {
  e === "focusin"
    ? (Ua(), (Xn = t), (ur = n), Xn.attachEvent("onpropertychange", Nu))
    : e === "focusout" && Ua();
}
function wf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Tl(ur);
}
function Sf(e, t) {
  if (e === "click") return Tl(t);
}
function jf(e, t) {
  if (e === "input" || e === "change") return Tl(t);
}
function Nf(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var rt = typeof Object.is == "function" ? Object.is : Nf;
function cr(e, t) {
  if (rt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!ws.call(t, l) || !rt(e[l], t[l])) return !1;
  }
  return !0;
}
function $a(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Fa(e, t) {
  var n = $a(e);
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
    n = $a(n);
  }
}
function ku(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? ku(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Cu() {
  for (var e = window, t = rl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = rl(e.document);
  }
  return t;
}
function Lo(e) {
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
function kf(e) {
  var t = Cu(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    ku(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Lo(n)) {
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
          (l = Fa(n, s));
        var a = Fa(n, r);
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
var Cf = mt && "documentMode" in document && 11 >= document.documentMode,
  cn = null,
  Fs = null,
  Zn = null,
  Os = !1;
function Oa(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Os ||
    cn == null ||
    cn !== rl(r) ||
    ((r = cn),
    "selectionStart" in r && Lo(r)
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
    (Zn && cr(Zn, r)) ||
      ((Zn = r),
      (r = cl(Fs, "onSelect")),
      0 < r.length &&
        ((t = new Do("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = cn))));
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
var dn = {
    animationend: Rr("Animation", "AnimationEnd"),
    animationiteration: Rr("Animation", "AnimationIteration"),
    animationstart: Rr("Animation", "AnimationStart"),
    transitionend: Rr("Transition", "TransitionEnd"),
  },
  ss = {},
  _u = {};
mt &&
  ((_u = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete dn.animationend.animation,
    delete dn.animationiteration.animation,
    delete dn.animationstart.animation),
  "TransitionEvent" in window || delete dn.transitionend.transition);
function Ml(e) {
  if (ss[e]) return ss[e];
  if (!dn[e]) return e;
  var t = dn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in _u) return (ss[e] = t[n]);
  return e;
}
var Eu = Ml("animationend"),
  bu = Ml("animationiteration"),
  Pu = Ml("animationstart"),
  Du = Ml("transitionend"),
  Tu = new Map(),
  Qa =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Ut(e, t) {
  Tu.set(e, t), nn(t, [e]);
}
for (var os = 0; os < Qa.length; os++) {
  var as = Qa[os],
    _f = as.toLowerCase(),
    Ef = as[0].toUpperCase() + as.slice(1);
  Ut(_f, "on" + Ef);
}
Ut(Eu, "onAnimationEnd");
Ut(bu, "onAnimationIteration");
Ut(Pu, "onAnimationStart");
Ut("dblclick", "onDoubleClick");
Ut("focusin", "onFocus");
Ut("focusout", "onBlur");
Ut(Du, "onTransitionEnd");
Cn("onMouseEnter", ["mouseout", "mouseover"]);
Cn("onMouseLeave", ["mouseout", "mouseover"]);
Cn("onPointerEnter", ["pointerout", "pointerover"]);
Cn("onPointerLeave", ["pointerout", "pointerover"]);
nn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
nn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
nn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
nn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
nn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
nn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Gn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  bf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Gn));
function Aa(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Cd(r, t, void 0, e), (e.currentTarget = null);
}
function Mu(e, t) {
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
            f = u.currentTarget;
          if (((u = u.listener), i !== s && l.isPropagationStopped())) break e;
          Aa(l, u, f), (s = i);
        }
      else
        for (a = 0; a < r.length; a++) {
          if (
            ((u = r[a]),
            (i = u.instance),
            (f = u.currentTarget),
            (u = u.listener),
            i !== s && l.isPropagationStopped())
          )
            break e;
          Aa(l, u, f), (s = i);
        }
    }
  }
  if (sl) throw ((e = Is), (sl = !1), (Is = null), e);
}
function J(e, t) {
  var n = t[Hs];
  n === void 0 && (n = t[Hs] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Lu(t, e, 2, !1), n.add(r));
}
function is(e, t, n) {
  var r = 0;
  t && (r |= 4), Lu(n, e, r, t);
}
var Ur = "_reactListening" + Math.random().toString(36).slice(2);
function dr(e) {
  if (!e[Ur]) {
    (e[Ur] = !0),
      Oi.forEach(function (n) {
        n !== "selectionchange" && (bf.has(n) || is(n, !1, e), is(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ur] || ((t[Ur] = !0), is("selectionchange", !1, t));
  }
}
function Lu(e, t, n, r) {
  switch (xu(t)) {
    case 1:
      var l = Qd;
      break;
    case 4:
      l = Ad;
      break;
    default:
      l = bo;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !zs ||
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
function us(e, t, n, r, l) {
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
          if (((a = Ht(u)), a === null)) return;
          if (((i = a.tag), i === 5 || i === 6)) {
            r = s = a;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  nu(function () {
    var f = s,
      N = ko(n),
      w = [];
    e: {
      var x = Tu.get(e);
      if (x !== void 0) {
        var E = Do,
          _ = e;
        switch (e) {
          case "keypress":
            if (Yr(n) === 0) break e;
          case "keydown":
          case "keyup":
            E = rf;
            break;
          case "focusin":
            (_ = "focus"), (E = ns);
            break;
          case "focusout":
            (_ = "blur"), (E = ns);
            break;
          case "beforeblur":
          case "afterblur":
            E = ns;
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
            E = Da;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            E = Hd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            E = of;
            break;
          case Eu:
          case bu:
          case Pu:
            E = qd;
            break;
          case Du:
            E = uf;
            break;
          case "scroll":
            E = Vd;
            break;
          case "wheel":
            E = df;
            break;
          case "copy":
          case "cut":
          case "paste":
            E = Kd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            E = Ma;
        }
        var b = (t & 4) !== 0,
          V = !b && e === "scroll",
          h = b ? (x !== null ? x + "Capture" : null) : x;
        b = [];
        for (var p = f, g; p !== null; ) {
          g = p;
          var k = g.stateNode;
          if (
            (g.tag === 5 &&
              k !== null &&
              ((g = k),
              h !== null && ((k = sr(p, h)), k != null && b.push(fr(p, k, g)))),
            V)
          )
            break;
          p = p.return;
        }
        0 < b.length &&
          ((x = new E(x, _, null, n, N)), w.push({ event: x, listeners: b }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((x = e === "mouseover" || e === "pointerover"),
          (E = e === "mouseout" || e === "pointerout"),
          x &&
            n !== Ms &&
            (_ = n.relatedTarget || n.fromElement) &&
            (Ht(_) || _[ht]))
        )
          break e;
        if (
          (E || x) &&
          ((x =
            N.window === N
              ? N
              : (x = N.ownerDocument)
              ? x.defaultView || x.parentWindow
              : window),
          E
            ? ((_ = n.relatedTarget || n.toElement),
              (E = f),
              (_ = _ ? Ht(_) : null),
              _ !== null &&
                ((V = rn(_)), _ !== V || (_.tag !== 5 && _.tag !== 6)) &&
                (_ = null))
            : ((E = null), (_ = f)),
          E !== _)
        ) {
          if (
            ((b = Da),
            (k = "onMouseLeave"),
            (h = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((b = Ma),
              (k = "onPointerLeave"),
              (h = "onPointerEnter"),
              (p = "pointer")),
            (V = E == null ? x : fn(E)),
            (g = _ == null ? x : fn(_)),
            (x = new b(k, p + "leave", E, n, N)),
            (x.target = V),
            (x.relatedTarget = g),
            (k = null),
            Ht(N) === f &&
              ((b = new b(h, p + "enter", _, n, N)),
              (b.target = g),
              (b.relatedTarget = V),
              (k = b)),
            (V = k),
            E && _)
          )
            t: {
              for (b = E, h = _, p = 0, g = b; g; g = sn(g)) p++;
              for (g = 0, k = h; k; k = sn(k)) g++;
              for (; 0 < p - g; ) (b = sn(b)), p--;
              for (; 0 < g - p; ) (h = sn(h)), g--;
              for (; p--; ) {
                if (b === h || (h !== null && b === h.alternate)) break t;
                (b = sn(b)), (h = sn(h));
              }
              b = null;
            }
          else b = null;
          E !== null && Va(w, x, E, b, !1),
            _ !== null && V !== null && Va(w, V, _, b, !0);
        }
      }
      e: {
        if (
          ((x = f ? fn(f) : window),
          (E = x.nodeName && x.nodeName.toLowerCase()),
          E === "select" || (E === "input" && x.type === "file"))
        )
          var M = gf;
        else if (Ia(x))
          if (ju) M = jf;
          else {
            M = wf;
            var R = vf;
          }
        else
          (E = x.nodeName) &&
            E.toLowerCase() === "input" &&
            (x.type === "checkbox" || x.type === "radio") &&
            (M = Sf);
        if (M && (M = M(e, f))) {
          Su(w, M, n, N);
          break e;
        }
        R && R(e, x, f),
          e === "focusout" &&
            (R = x._wrapperState) &&
            R.controlled &&
            x.type === "number" &&
            Es(x, "number", x.value);
      }
      switch (((R = f ? fn(f) : window), e)) {
        case "focusin":
          (Ia(R) || R.contentEditable === "true") &&
            ((cn = R), (Fs = f), (Zn = null));
          break;
        case "focusout":
          Zn = Fs = cn = null;
          break;
        case "mousedown":
          Os = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Os = !1), Oa(w, n, N);
          break;
        case "selectionchange":
          if (Cf) break;
        case "keydown":
        case "keyup":
          Oa(w, n, N);
      }
      var z;
      if (Mo)
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
        un
          ? vu(e, n) && (U = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (U = "onCompositionStart");
      U &&
        (gu &&
          n.locale !== "ko" &&
          (un || U !== "onCompositionStart"
            ? U === "onCompositionEnd" && un && (z = yu())
            : ((Ct = N),
              (Po = "value" in Ct ? Ct.value : Ct.textContent),
              (un = !0))),
        (R = cl(f, U)),
        0 < R.length &&
          ((U = new Ta(U, e, null, n, N)),
          w.push({ event: U, listeners: R }),
          z ? (U.data = z) : ((z = wu(n)), z !== null && (U.data = z)))),
        (z = pf ? mf(e, n) : hf(e, n)) &&
          ((f = cl(f, "onBeforeInput")),
          0 < f.length &&
            ((N = new Ta("onBeforeInput", "beforeinput", null, n, N)),
            w.push({ event: N, listeners: f }),
            (N.data = z)));
    }
    Mu(w, t);
  });
}
function fr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function cl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      s = l.stateNode;
    l.tag === 5 &&
      s !== null &&
      ((l = s),
      (s = sr(e, n)),
      s != null && r.unshift(fr(e, s, l)),
      (s = sr(e, t)),
      s != null && r.push(fr(e, s, l))),
      (e = e.return);
  }
  return r;
}
function sn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Va(e, t, n, r, l) {
  for (var s = t._reactName, a = []; n !== null && n !== r; ) {
    var u = n,
      i = u.alternate,
      f = u.stateNode;
    if (i !== null && i === r) break;
    u.tag === 5 &&
      f !== null &&
      ((u = f),
      l
        ? ((i = sr(n, s)), i != null && a.unshift(fr(n, i, u)))
        : l || ((i = sr(n, s)), i != null && a.push(fr(n, i, u)))),
      (n = n.return);
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var Pf = /\r\n?/g,
  Df = /\u0000|\uFFFD/g;
function Ba(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Pf,
      `
`
    )
    .replace(Df, "");
}
function $r(e, t, n) {
  if (((t = Ba(t)), Ba(e) !== t && n)) throw Error(T(425));
}
function dl() {}
var Qs = null,
  As = null;
function Vs(e, t) {
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
var Bs = typeof setTimeout == "function" ? setTimeout : void 0,
  Tf = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Ha = typeof Promise == "function" ? Promise : void 0,
  Mf =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Ha < "u"
      ? function (e) {
          return Ha.resolve(null).then(e).catch(Lf);
        }
      : Bs;
function Lf(e) {
  setTimeout(function () {
    throw e;
  });
}
function cs(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), ir(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  ir(t);
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
function Wa(e) {
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
var In = Math.random().toString(36).slice(2),
  ot = "__reactFiber$" + In,
  pr = "__reactProps$" + In,
  ht = "__reactContainer$" + In,
  Hs = "__reactEvents$" + In,
  zf = "__reactListeners$" + In,
  If = "__reactHandles$" + In;
function Ht(e) {
  var t = e[ot];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[ht] || n[ot])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Wa(e); e !== null; ) {
          if ((n = e[ot])) return n;
          e = Wa(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function kr(e) {
  return (
    (e = e[ot] || e[ht]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function fn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(T(33));
}
function Ll(e) {
  return e[pr] || null;
}
var Ws = [],
  pn = -1;
function $t(e) {
  return { current: e };
}
function ee(e) {
  0 > pn || ((e.current = Ws[pn]), (Ws[pn] = null), pn--);
}
function Z(e, t) {
  pn++, (Ws[pn] = e.current), (e.current = t);
}
var Rt = {},
  _e = $t(Rt),
  ze = $t(!1),
  Xt = Rt;
function _n(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Rt;
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
function fl() {
  ee(ze), ee(_e);
}
function Ga(e, t, n) {
  if (_e.current !== Rt) throw Error(T(168));
  Z(_e, t), Z(ze, n);
}
function zu(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(T(108, gd(e) || "Unknown", l));
  return oe({}, n, r);
}
function pl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Rt),
    (Xt = _e.current),
    Z(_e, e),
    Z(ze, ze.current),
    !0
  );
}
function qa(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(T(169));
  n
    ? ((e = zu(e, t, Xt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ee(ze),
      ee(_e),
      Z(_e, e))
    : ee(ze),
    Z(ze, n);
}
var ct = null,
  zl = !1,
  ds = !1;
function Iu(e) {
  ct === null ? (ct = [e]) : ct.push(e);
}
function Rf(e) {
  (zl = !0), Iu(e);
}
function Ft() {
  if (!ds && ct !== null) {
    ds = !0;
    var e = 0,
      t = X;
    try {
      var n = ct;
      for (X = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (ct = null), (zl = !1);
    } catch (l) {
      throw (ct !== null && (ct = ct.slice(e + 1)), ou(Co, Ft), l);
    } finally {
      (X = t), (ds = !1);
    }
  }
  return null;
}
var mn = [],
  hn = 0,
  ml = null,
  hl = 0,
  Be = [],
  He = 0,
  Zt = null,
  dt = 1,
  ft = "";
function Vt(e, t) {
  (mn[hn++] = hl), (mn[hn++] = ml), (ml = e), (hl = t);
}
function Ru(e, t, n) {
  (Be[He++] = dt), (Be[He++] = ft), (Be[He++] = Zt), (Zt = e);
  var r = dt;
  e = ft;
  var l = 32 - tt(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var s = 32 - tt(t) + l;
  if (30 < s) {
    var a = l - (l % 5);
    (s = (r & ((1 << a) - 1)).toString(32)),
      (r >>= a),
      (l -= a),
      (dt = (1 << (32 - tt(t) + l)) | (n << l) | r),
      (ft = s + e);
  } else (dt = (1 << s) | (n << l) | r), (ft = e);
}
function zo(e) {
  e.return !== null && (Vt(e, 1), Ru(e, 1, 0));
}
function Io(e) {
  for (; e === ml; )
    (ml = mn[--hn]), (mn[hn] = null), (hl = mn[--hn]), (mn[hn] = null);
  for (; e === Zt; )
    (Zt = Be[--He]),
      (Be[He] = null),
      (ft = Be[--He]),
      (Be[He] = null),
      (dt = Be[--He]),
      (Be[He] = null);
}
var Fe = null,
  $e = null,
  ne = !1,
  et = null;
function Uu(e, t) {
  var n = We(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Ya(e, t) {
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
          ? ((n = Zt !== null ? { id: dt, overflow: ft } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = We(18, null, null, 0)),
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
function Gs(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function qs(e) {
  if (ne) {
    var t = $e;
    if (t) {
      var n = t;
      if (!Ya(e, t)) {
        if (Gs(e)) throw Error(T(418));
        t = Dt(n.nextSibling);
        var r = Fe;
        t && Ya(e, t)
          ? Uu(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ne = !1), (Fe = e));
      }
    } else {
      if (Gs(e)) throw Error(T(418));
      (e.flags = (e.flags & -4097) | 2), (ne = !1), (Fe = e);
    }
  }
}
function Ka(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Fe = e;
}
function Fr(e) {
  if (e !== Fe) return !1;
  if (!ne) return Ka(e), (ne = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Vs(e.type, e.memoizedProps))),
    t && (t = $e))
  ) {
    if (Gs(e)) throw ($u(), Error(T(418)));
    for (; t; ) Uu(e, t), (t = Dt(t.nextSibling));
  }
  if ((Ka(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(T(317));
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
function $u() {
  for (var e = $e; e; ) e = Dt(e.nextSibling);
}
function En() {
  ($e = Fe = null), (ne = !1);
}
function Ro(e) {
  et === null ? (et = [e]) : et.push(e);
}
var Uf = gt.ReactCurrentBatchConfig;
function Qn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(T(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(T(147, e));
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
    if (typeof e != "string") throw Error(T(284));
    if (!n._owner) throw Error(T(290, e));
  }
  return e;
}
function Or(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      T(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Xa(e) {
  var t = e._init;
  return t(e._payload);
}
function Fu(e) {
  function t(h, p) {
    if (e) {
      var g = h.deletions;
      g === null ? ((h.deletions = [p]), (h.flags |= 16)) : g.push(p);
    }
  }
  function n(h, p) {
    if (!e) return null;
    for (; p !== null; ) t(h, p), (p = p.sibling);
    return null;
  }
  function r(h, p) {
    for (h = new Map(); p !== null; )
      p.key !== null ? h.set(p.key, p) : h.set(p.index, p), (p = p.sibling);
    return h;
  }
  function l(h, p) {
    return (h = zt(h, p)), (h.index = 0), (h.sibling = null), h;
  }
  function s(h, p, g) {
    return (
      (h.index = g),
      e
        ? ((g = h.alternate),
          g !== null
            ? ((g = g.index), g < p ? ((h.flags |= 2), p) : g)
            : ((h.flags |= 2), p))
        : ((h.flags |= 1048576), p)
    );
  }
  function a(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function u(h, p, g, k) {
    return p === null || p.tag !== 6
      ? ((p = gs(g, h.mode, k)), (p.return = h), p)
      : ((p = l(p, g)), (p.return = h), p);
  }
  function i(h, p, g, k) {
    var M = g.type;
    return M === an
      ? N(h, p, g.props.children, k, g.key)
      : p !== null &&
        (p.elementType === M ||
          (typeof M == "object" &&
            M !== null &&
            M.$$typeof === St &&
            Xa(M) === p.type))
      ? ((k = l(p, g.props)), (k.ref = Qn(h, p, g)), (k.return = h), k)
      : ((k = nl(g.type, g.key, g.props, null, h.mode, k)),
        (k.ref = Qn(h, p, g)),
        (k.return = h),
        k);
  }
  function f(h, p, g, k) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== g.containerInfo ||
      p.stateNode.implementation !== g.implementation
      ? ((p = vs(g, h.mode, k)), (p.return = h), p)
      : ((p = l(p, g.children || [])), (p.return = h), p);
  }
  function N(h, p, g, k, M) {
    return p === null || p.tag !== 7
      ? ((p = Kt(g, h.mode, k, M)), (p.return = h), p)
      : ((p = l(p, g)), (p.return = h), p);
  }
  function w(h, p, g) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = gs("" + p, h.mode, g)), (p.return = h), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Pr:
          return (
            (g = nl(p.type, p.key, p.props, null, h.mode, g)),
            (g.ref = Qn(h, null, p)),
            (g.return = h),
            g
          );
        case on:
          return (p = vs(p, h.mode, g)), (p.return = h), p;
        case St:
          var k = p._init;
          return w(h, k(p._payload), g);
      }
      if (Hn(p) || Rn(p))
        return (p = Kt(p, h.mode, g, null)), (p.return = h), p;
      Or(h, p);
    }
    return null;
  }
  function x(h, p, g, k) {
    var M = p !== null ? p.key : null;
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return M !== null ? null : u(h, p, "" + g, k);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Pr:
          return g.key === M ? i(h, p, g, k) : null;
        case on:
          return g.key === M ? f(h, p, g, k) : null;
        case St:
          return (M = g._init), x(h, p, M(g._payload), k);
      }
      if (Hn(g) || Rn(g)) return M !== null ? null : N(h, p, g, k, null);
      Or(h, g);
    }
    return null;
  }
  function E(h, p, g, k, M) {
    if ((typeof k == "string" && k !== "") || typeof k == "number")
      return (h = h.get(g) || null), u(p, h, "" + k, M);
    if (typeof k == "object" && k !== null) {
      switch (k.$$typeof) {
        case Pr:
          return (h = h.get(k.key === null ? g : k.key) || null), i(p, h, k, M);
        case on:
          return (h = h.get(k.key === null ? g : k.key) || null), f(p, h, k, M);
        case St:
          var R = k._init;
          return E(h, p, g, R(k._payload), M);
      }
      if (Hn(k) || Rn(k)) return (h = h.get(g) || null), N(p, h, k, M, null);
      Or(p, k);
    }
    return null;
  }
  function _(h, p, g, k) {
    for (
      var M = null, R = null, z = p, U = (p = 0), G = null;
      z !== null && U < g.length;
      U++
    ) {
      z.index > U ? ((G = z), (z = null)) : (G = z.sibling);
      var P = x(h, z, g[U], k);
      if (P === null) {
        z === null && (z = G);
        break;
      }
      e && z && P.alternate === null && t(h, z),
        (p = s(P, p, U)),
        R === null ? (M = P) : (R.sibling = P),
        (R = P),
        (z = G);
    }
    if (U === g.length) return n(h, z), ne && Vt(h, U), M;
    if (z === null) {
      for (; U < g.length; U++)
        (z = w(h, g[U], k)),
          z !== null &&
            ((p = s(z, p, U)), R === null ? (M = z) : (R.sibling = z), (R = z));
      return ne && Vt(h, U), M;
    }
    for (z = r(h, z); U < g.length; U++)
      (G = E(z, h, U, g[U], k)),
        G !== null &&
          (e && G.alternate !== null && z.delete(G.key === null ? U : G.key),
          (p = s(G, p, U)),
          R === null ? (M = G) : (R.sibling = G),
          (R = G));
    return (
      e &&
        z.forEach(function (H) {
          return t(h, H);
        }),
      ne && Vt(h, U),
      M
    );
  }
  function b(h, p, g, k) {
    var M = Rn(g);
    if (typeof M != "function") throw Error(T(150));
    if (((g = M.call(g)), g == null)) throw Error(T(151));
    for (
      var R = (M = null), z = p, U = (p = 0), G = null, P = g.next();
      z !== null && !P.done;
      U++, P = g.next()
    ) {
      z.index > U ? ((G = z), (z = null)) : (G = z.sibling);
      var H = x(h, z, P.value, k);
      if (H === null) {
        z === null && (z = G);
        break;
      }
      e && z && H.alternate === null && t(h, z),
        (p = s(H, p, U)),
        R === null ? (M = H) : (R.sibling = H),
        (R = H),
        (z = G);
    }
    if (P.done) return n(h, z), ne && Vt(h, U), M;
    if (z === null) {
      for (; !P.done; U++, P = g.next())
        (P = w(h, P.value, k)),
          P !== null &&
            ((p = s(P, p, U)), R === null ? (M = P) : (R.sibling = P), (R = P));
      return ne && Vt(h, U), M;
    }
    for (z = r(h, z); !P.done; U++, P = g.next())
      (P = E(z, h, U, P.value, k)),
        P !== null &&
          (e && P.alternate !== null && z.delete(P.key === null ? U : P.key),
          (p = s(P, p, U)),
          R === null ? (M = P) : (R.sibling = P),
          (R = P));
    return (
      e &&
        z.forEach(function (A) {
          return t(h, A);
        }),
      ne && Vt(h, U),
      M
    );
  }
  function V(h, p, g, k) {
    if (
      (typeof g == "object" &&
        g !== null &&
        g.type === an &&
        g.key === null &&
        (g = g.props.children),
      typeof g == "object" && g !== null)
    ) {
      switch (g.$$typeof) {
        case Pr:
          e: {
            for (var M = g.key, R = p; R !== null; ) {
              if (R.key === M) {
                if (((M = g.type), M === an)) {
                  if (R.tag === 7) {
                    n(h, R.sibling),
                      (p = l(R, g.props.children)),
                      (p.return = h),
                      (h = p);
                    break e;
                  }
                } else if (
                  R.elementType === M ||
                  (typeof M == "object" &&
                    M !== null &&
                    M.$$typeof === St &&
                    Xa(M) === R.type)
                ) {
                  n(h, R.sibling),
                    (p = l(R, g.props)),
                    (p.ref = Qn(h, R, g)),
                    (p.return = h),
                    (h = p);
                  break e;
                }
                n(h, R);
                break;
              } else t(h, R);
              R = R.sibling;
            }
            g.type === an
              ? ((p = Kt(g.props.children, h.mode, k, g.key)),
                (p.return = h),
                (h = p))
              : ((k = nl(g.type, g.key, g.props, null, h.mode, k)),
                (k.ref = Qn(h, p, g)),
                (k.return = h),
                (h = k));
          }
          return a(h);
        case on:
          e: {
            for (R = g.key; p !== null; ) {
              if (p.key === R)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === g.containerInfo &&
                  p.stateNode.implementation === g.implementation
                ) {
                  n(h, p.sibling),
                    (p = l(p, g.children || [])),
                    (p.return = h),
                    (h = p);
                  break e;
                } else {
                  n(h, p);
                  break;
                }
              else t(h, p);
              p = p.sibling;
            }
            (p = vs(g, h.mode, k)), (p.return = h), (h = p);
          }
          return a(h);
        case St:
          return (R = g._init), V(h, p, R(g._payload), k);
      }
      if (Hn(g)) return _(h, p, g, k);
      if (Rn(g)) return b(h, p, g, k);
      Or(h, g);
    }
    return (typeof g == "string" && g !== "") || typeof g == "number"
      ? ((g = "" + g),
        p !== null && p.tag === 6
          ? (n(h, p.sibling), (p = l(p, g)), (p.return = h), (h = p))
          : (n(h, p), (p = gs(g, h.mode, k)), (p.return = h), (h = p)),
        a(h))
      : n(h, p);
  }
  return V;
}
var bn = Fu(!0),
  Ou = Fu(!1),
  xl = $t(null),
  yl = null,
  xn = null,
  Uo = null;
function $o() {
  Uo = xn = yl = null;
}
function Fo(e) {
  var t = xl.current;
  ee(xl), (e._currentValue = t);
}
function Ys(e, t, n) {
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
function Nn(e, t) {
  (yl = e),
    (Uo = xn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Le = !0), (e.firstContext = null));
}
function qe(e) {
  var t = e._currentValue;
  if (Uo !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), xn === null)) {
      if (yl === null) throw Error(T(308));
      (xn = e), (yl.dependencies = { lanes: 0, firstContext: e });
    } else xn = xn.next = e;
  return t;
}
var Wt = null;
function Oo(e) {
  Wt === null ? (Wt = [e]) : Wt.push(e);
}
function Qu(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Oo(t)) : ((n.next = l.next), (l.next = n)),
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
var jt = !1;
function Qo(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Au(e, t) {
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
function Tt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), Y & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      xt(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Oo(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    xt(e, n)
  );
}
function Kr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), _o(e, n);
  }
}
function Za(e, t) {
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
function gl(e, t, n, r) {
  var l = e.updateQueue;
  jt = !1;
  var s = l.firstBaseUpdate,
    a = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var i = u,
      f = i.next;
    (i.next = null), a === null ? (s = f) : (a.next = f), (a = i);
    var N = e.alternate;
    N !== null &&
      ((N = N.updateQueue),
      (u = N.lastBaseUpdate),
      u !== a &&
        (u === null ? (N.firstBaseUpdate = f) : (u.next = f),
        (N.lastBaseUpdate = i)));
  }
  if (s !== null) {
    var w = l.baseState;
    (a = 0), (N = f = i = null), (u = s);
    do {
      var x = u.lane,
        E = u.eventTime;
      if ((r & x) === x) {
        N !== null &&
          (N = N.next =
            {
              eventTime: E,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var _ = e,
            b = u;
          switch (((x = t), (E = n), b.tag)) {
            case 1:
              if (((_ = b.payload), typeof _ == "function")) {
                w = _.call(E, w, x);
                break e;
              }
              w = _;
              break e;
            case 3:
              _.flags = (_.flags & -65537) | 128;
            case 0:
              if (
                ((_ = b.payload),
                (x = typeof _ == "function" ? _.call(E, w, x) : _),
                x == null)
              )
                break e;
              w = oe({}, w, x);
              break e;
            case 2:
              jt = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (x = l.effects),
          x === null ? (l.effects = [u]) : x.push(u));
      } else
        (E = {
          eventTime: E,
          lane: x,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          N === null ? ((f = N = E), (i = w)) : (N = N.next = E),
          (a |= x);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (x = u),
          (u = x.next),
          (x.next = null),
          (l.lastBaseUpdate = x),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (N === null && (i = w),
      (l.baseState = i),
      (l.firstBaseUpdate = f),
      (l.lastBaseUpdate = N),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (a |= l.lane), (l = l.next);
      while (l !== t);
    } else s === null && (l.shared.lanes = 0);
    (en |= a), (e.lanes = a), (e.memoizedState = w);
  }
}
function Ja(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(T(191, l));
        l.call(r);
      }
    }
}
var Cr = {},
  it = $t(Cr),
  mr = $t(Cr),
  hr = $t(Cr);
function Gt(e) {
  if (e === Cr) throw Error(T(174));
  return e;
}
function Ao(e, t) {
  switch ((Z(hr, t), Z(mr, e), Z(it, Cr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ps(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ps(t, e));
  }
  ee(it), Z(it, t);
}
function Pn() {
  ee(it), ee(mr), ee(hr);
}
function Vu(e) {
  Gt(hr.current);
  var t = Gt(it.current),
    n = Ps(t, e.type);
  t !== n && (Z(mr, e), Z(it, n));
}
function Vo(e) {
  mr.current === e && (ee(it), ee(mr));
}
var le = $t(0);
function vl(e) {
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
var fs = [];
function Bo() {
  for (var e = 0; e < fs.length; e++)
    fs[e]._workInProgressVersionPrimary = null;
  fs.length = 0;
}
var Xr = gt.ReactCurrentDispatcher,
  ps = gt.ReactCurrentBatchConfig,
  Jt = 0,
  se = null,
  pe = null,
  xe = null,
  wl = !1,
  Jn = !1,
  xr = 0,
  $f = 0;
function Ne() {
  throw Error(T(321));
}
function Ho(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!rt(e[n], t[n])) return !1;
  return !0;
}
function Wo(e, t, n, r, l, s) {
  if (
    ((Jt = s),
    (se = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Xr.current = e === null || e.memoizedState === null ? Af : Vf),
    (e = n(r, l)),
    Jn)
  ) {
    s = 0;
    do {
      if (((Jn = !1), (xr = 0), 25 <= s)) throw Error(T(301));
      (s += 1),
        (xe = pe = null),
        (t.updateQueue = null),
        (Xr.current = Bf),
        (e = n(r, l));
    } while (Jn);
  }
  if (
    ((Xr.current = Sl),
    (t = pe !== null && pe.next !== null),
    (Jt = 0),
    (xe = pe = se = null),
    (wl = !1),
    t)
  )
    throw Error(T(300));
  return e;
}
function Go() {
  var e = xr !== 0;
  return (xr = 0), e;
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
function Ye() {
  if (pe === null) {
    var e = se.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = pe.next;
  var t = xe === null ? se.memoizedState : xe.next;
  if (t !== null) (xe = t), (pe = e);
  else {
    if (e === null) throw Error(T(310));
    (pe = e),
      (e = {
        memoizedState: pe.memoizedState,
        baseState: pe.baseState,
        baseQueue: pe.baseQueue,
        queue: pe.queue,
        next: null,
      }),
      xe === null ? (se.memoizedState = xe = e) : (xe = xe.next = e);
  }
  return xe;
}
function yr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ms(e) {
  var t = Ye(),
    n = t.queue;
  if (n === null) throw Error(T(311));
  n.lastRenderedReducer = e;
  var r = pe,
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
      f = s;
    do {
      var N = f.lane;
      if ((Jt & N) === N)
        i !== null &&
          (i = i.next =
            {
              lane: 0,
              action: f.action,
              hasEagerState: f.hasEagerState,
              eagerState: f.eagerState,
              next: null,
            }),
          (r = f.hasEagerState ? f.eagerState : e(r, f.action));
      else {
        var w = {
          lane: N,
          action: f.action,
          hasEagerState: f.hasEagerState,
          eagerState: f.eagerState,
          next: null,
        };
        i === null ? ((u = i = w), (a = r)) : (i = i.next = w),
          (se.lanes |= N),
          (en |= N);
      }
      f = f.next;
    } while (f !== null && f !== s);
    i === null ? (a = r) : (i.next = u),
      rt(r, t.memoizedState) || (Le = !0),
      (t.memoizedState = r),
      (t.baseState = a),
      (t.baseQueue = i),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (s = l.lane), (se.lanes |= s), (en |= s), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function hs(e) {
  var t = Ye(),
    n = t.queue;
  if (n === null) throw Error(T(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    s = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var a = (l = l.next);
    do (s = e(s, a.action)), (a = a.next);
    while (a !== l);
    rt(s, t.memoizedState) || (Le = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, r];
}
function Bu() {}
function Hu(e, t) {
  var n = se,
    r = Ye(),
    l = t(),
    s = !rt(r.memoizedState, l);
  if (
    (s && ((r.memoizedState = l), (Le = !0)),
    (r = r.queue),
    qo(qu.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (xe !== null && xe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      gr(9, Gu.bind(null, n, r, l, t), void 0, null),
      ye === null)
    )
      throw Error(T(349));
    Jt & 30 || Wu(n, t, l);
  }
  return l;
}
function Wu(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = se.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (se.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Gu(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Yu(t) && Ku(e);
}
function qu(e, t, n) {
  return n(function () {
    Yu(t) && Ku(e);
  });
}
function Yu(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !rt(e, n);
  } catch {
    return !0;
  }
}
function Ku(e) {
  var t = xt(e, 1);
  t !== null && nt(t, e, 1, -1);
}
function ei(e) {
  var t = st();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: yr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Qf.bind(null, se, e)),
    [t.memoizedState, e]
  );
}
function gr(e, t, n, r) {
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
function Xu() {
  return Ye().memoizedState;
}
function Zr(e, t, n, r) {
  var l = st();
  (se.flags |= e),
    (l.memoizedState = gr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Il(e, t, n, r) {
  var l = Ye();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (pe !== null) {
    var a = pe.memoizedState;
    if (((s = a.destroy), r !== null && Ho(r, a.deps))) {
      l.memoizedState = gr(t, n, s, r);
      return;
    }
  }
  (se.flags |= e), (l.memoizedState = gr(1 | t, n, s, r));
}
function ti(e, t) {
  return Zr(8390656, 8, e, t);
}
function qo(e, t) {
  return Il(2048, 8, e, t);
}
function Zu(e, t) {
  return Il(4, 2, e, t);
}
function Ju(e, t) {
  return Il(4, 4, e, t);
}
function ec(e, t) {
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
function tc(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Il(4, 4, ec.bind(null, t, e), n)
  );
}
function Yo() {}
function nc(e, t) {
  var n = Ye();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ho(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function rc(e, t) {
  var n = Ye();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ho(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function lc(e, t, n) {
  return Jt & 21
    ? (rt(n, t) || ((n = uu()), (se.lanes |= n), (en |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Le = !0)), (e.memoizedState = n));
}
function Ff(e, t) {
  var n = X;
  (X = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ps.transition;
  ps.transition = {};
  try {
    e(!1), t();
  } finally {
    (X = n), (ps.transition = r);
  }
}
function sc() {
  return Ye().memoizedState;
}
function Of(e, t, n) {
  var r = Lt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    oc(e))
  )
    ac(t, n);
  else if (((n = Qu(e, t, n, r)), n !== null)) {
    var l = be();
    nt(n, e, r, l), ic(n, t, r);
  }
}
function Qf(e, t, n) {
  var r = Lt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (oc(e)) ac(t, l);
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
        if (((l.hasEagerState = !0), (l.eagerState = u), rt(u, a))) {
          var i = t.interleaved;
          i === null
            ? ((l.next = l), Oo(t))
            : ((l.next = i.next), (i.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = Qu(e, t, l, r)),
      n !== null && ((l = be()), nt(n, e, r, l), ic(n, t, r));
  }
}
function oc(e) {
  var t = e.alternate;
  return e === se || (t !== null && t === se);
}
function ac(e, t) {
  Jn = wl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function ic(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), _o(e, n);
  }
}
var Sl = {
    readContext: qe,
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
  Af = {
    readContext: qe,
    useCallback: function (e, t) {
      return (st().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: qe,
    useEffect: ti,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Zr(4194308, 4, ec.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Zr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Zr(4, 2, e, t);
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
        (e = e.dispatch = Of.bind(null, se, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = st();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: ei,
    useDebugValue: Yo,
    useDeferredValue: function (e) {
      return (st().memoizedState = e);
    },
    useTransition: function () {
      var e = ei(!1),
        t = e[0];
      return (e = Ff.bind(null, e[1])), (st().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = se,
        l = st();
      if (ne) {
        if (n === void 0) throw Error(T(407));
        n = n();
      } else {
        if (((n = t()), ye === null)) throw Error(T(349));
        Jt & 30 || Wu(r, t, n);
      }
      l.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (l.queue = s),
        ti(qu.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        gr(9, Gu.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = st(),
        t = ye.identifierPrefix;
      if (ne) {
        var n = ft,
          r = dt;
        (n = (r & ~(1 << (32 - tt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = xr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = $f++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Vf = {
    readContext: qe,
    useCallback: nc,
    useContext: qe,
    useEffect: qo,
    useImperativeHandle: tc,
    useInsertionEffect: Zu,
    useLayoutEffect: Ju,
    useMemo: rc,
    useReducer: ms,
    useRef: Xu,
    useState: function () {
      return ms(yr);
    },
    useDebugValue: Yo,
    useDeferredValue: function (e) {
      var t = Ye();
      return lc(t, pe.memoizedState, e);
    },
    useTransition: function () {
      var e = ms(yr)[0],
        t = Ye().memoizedState;
      return [e, t];
    },
    useMutableSource: Bu,
    useSyncExternalStore: Hu,
    useId: sc,
    unstable_isNewReconciler: !1,
  },
  Bf = {
    readContext: qe,
    useCallback: nc,
    useContext: qe,
    useEffect: qo,
    useImperativeHandle: tc,
    useInsertionEffect: Zu,
    useLayoutEffect: Ju,
    useMemo: rc,
    useReducer: hs,
    useRef: Xu,
    useState: function () {
      return hs(yr);
    },
    useDebugValue: Yo,
    useDeferredValue: function (e) {
      var t = Ye();
      return pe === null ? (t.memoizedState = e) : lc(t, pe.memoizedState, e);
    },
    useTransition: function () {
      var e = hs(yr)[0],
        t = Ye().memoizedState;
      return [e, t];
    },
    useMutableSource: Bu,
    useSyncExternalStore: Hu,
    useId: sc,
    unstable_isNewReconciler: !1,
  };
function Ze(e, t) {
  if (e && e.defaultProps) {
    (t = oe({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ks(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : oe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Rl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? rn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = be(),
      l = Lt(e),
      s = pt(r, l);
    (s.payload = t),
      n != null && (s.callback = n),
      (t = Tt(e, s, l)),
      t !== null && (nt(t, e, l, r), Kr(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = be(),
      l = Lt(e),
      s = pt(r, l);
    (s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = Tt(e, s, l)),
      t !== null && (nt(t, e, l, r), Kr(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = be(),
      r = Lt(e),
      l = pt(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = Tt(e, l, r)),
      t !== null && (nt(t, e, r, n), Kr(t, e, r));
  },
};
function ni(e, t, n, r, l, s, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, s, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !cr(n, r) || !cr(l, s)
      : !0
  );
}
function uc(e, t, n) {
  var r = !1,
    l = Rt,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = qe(s))
      : ((l = Ie(t) ? Xt : _e.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? _n(e, l) : Rt)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Rl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function ri(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Rl.enqueueReplaceState(t, t.state, null);
}
function Xs(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), Qo(e);
  var s = t.contextType;
  typeof s == "object" && s !== null
    ? (l.context = qe(s))
    : ((s = Ie(t) ? Xt : _e.current), (l.context = _n(e, s))),
    (l.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (Ks(e, t, s, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Rl.enqueueReplaceState(l, l.state, null),
      gl(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function Dn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += yd(r)), (r = r.return);
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
function xs(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Zs(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Hf = typeof WeakMap == "function" ? WeakMap : Map;
function cc(e, t, n) {
  (n = pt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Nl || ((Nl = !0), (io = r)), Zs(e, t);
    }),
    n
  );
}
function dc(e, t, n) {
  (n = pt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Zs(e, t);
      });
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        Zs(e, t),
          typeof r != "function" &&
            (Mt === null ? (Mt = new Set([this])) : Mt.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : "",
        });
      }),
    n
  );
}
function li(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Hf();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = sp.bind(null, e, t, n)), t.then(e, e));
}
function si(e) {
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
function oi(e, t, n, r, l) {
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
              : ((t = pt(-1, 1)), (t.tag = 2), Tt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Wf = gt.ReactCurrentOwner,
  Le = !1;
function Ee(e, t, n, r) {
  t.child = e === null ? Ou(t, null, n, r) : bn(t, e.child, n, r);
}
function ai(e, t, n, r, l) {
  n = n.render;
  var s = t.ref;
  return (
    Nn(t, l),
    (r = Wo(e, t, n, r, s, l)),
    (n = Go()),
    e !== null && !Le
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        yt(e, t, l))
      : (ne && n && zo(t), (t.flags |= 1), Ee(e, t, r, l), t.child)
  );
}
function ii(e, t, n, r, l) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !ra(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), fc(e, t, s, r, l))
      : ((e = nl(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & l))) {
    var a = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : cr), n(a, r) && e.ref === t.ref)
    )
      return yt(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = zt(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function fc(e, t, n, r, l) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (cr(s, r) && e.ref === t.ref)
      if (((Le = !1), (t.pendingProps = r = s), (e.lanes & l) !== 0))
        e.flags & 131072 && (Le = !0);
      else return (t.lanes = e.lanes), yt(e, t, l);
  }
  return Js(e, t, n, r, l);
}
function pc(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Z(gn, Ue),
        (Ue |= n);
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
          Z(gn, Ue),
          (Ue |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        Z(gn, Ue),
        (Ue |= r);
    }
  else
    s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      Z(gn, Ue),
      (Ue |= r);
  return Ee(e, t, l, n), t.child;
}
function mc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Js(e, t, n, r, l) {
  var s = Ie(n) ? Xt : _e.current;
  return (
    (s = _n(t, s)),
    Nn(t, l),
    (n = Wo(e, t, n, r, s, l)),
    (r = Go()),
    e !== null && !Le
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        yt(e, t, l))
      : (ne && r && zo(t), (t.flags |= 1), Ee(e, t, n, l), t.child)
  );
}
function ui(e, t, n, r, l) {
  if (Ie(n)) {
    var s = !0;
    pl(t);
  } else s = !1;
  if ((Nn(t, l), t.stateNode === null))
    Jr(e, t), uc(t, n, r), Xs(t, n, r, l), (r = !0);
  else if (e === null) {
    var a = t.stateNode,
      u = t.memoizedProps;
    a.props = u;
    var i = a.context,
      f = n.contextType;
    typeof f == "object" && f !== null
      ? (f = qe(f))
      : ((f = Ie(n) ? Xt : _e.current), (f = _n(t, f)));
    var N = n.getDerivedStateFromProps,
      w =
        typeof N == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    w ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((u !== r || i !== f) && ri(t, a, r, f)),
      (jt = !1);
    var x = t.memoizedState;
    (a.state = x),
      gl(t, r, a, l),
      (i = t.memoizedState),
      u !== r || x !== i || ze.current || jt
        ? (typeof N == "function" && (Ks(t, n, N, r), (i = t.memoizedState)),
          (u = jt || ni(t, n, u, r, x, i, f))
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
          (a.context = f),
          (r = u))
        : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (a = t.stateNode),
      Au(e, t),
      (u = t.memoizedProps),
      (f = t.type === t.elementType ? u : Ze(t.type, u)),
      (a.props = f),
      (w = t.pendingProps),
      (x = a.context),
      (i = n.contextType),
      typeof i == "object" && i !== null
        ? (i = qe(i))
        : ((i = Ie(n) ? Xt : _e.current), (i = _n(t, i)));
    var E = n.getDerivedStateFromProps;
    (N =
      typeof E == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((u !== w || x !== i) && ri(t, a, r, i)),
      (jt = !1),
      (x = t.memoizedState),
      (a.state = x),
      gl(t, r, a, l);
    var _ = t.memoizedState;
    u !== w || x !== _ || ze.current || jt
      ? (typeof E == "function" && (Ks(t, n, E, r), (_ = t.memoizedState)),
        (f = jt || ni(t, n, f, r, x, _, i) || !1)
          ? (N ||
              (typeof a.UNSAFE_componentWillUpdate != "function" &&
                typeof a.componentWillUpdate != "function") ||
              (typeof a.componentWillUpdate == "function" &&
                a.componentWillUpdate(r, _, i),
              typeof a.UNSAFE_componentWillUpdate == "function" &&
                a.UNSAFE_componentWillUpdate(r, _, i)),
            typeof a.componentDidUpdate == "function" && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != "function" ||
              (u === e.memoizedProps && x === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && x === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = _)),
        (a.props = r),
        (a.state = _),
        (a.context = i),
        (r = f))
      : (typeof a.componentDidUpdate != "function" ||
          (u === e.memoizedProps && x === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && x === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return eo(e, t, n, r, s, l);
}
function eo(e, t, n, r, l, s) {
  mc(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return l && qa(t, n, !1), yt(e, t, s);
  (r = t.stateNode), (Wf.current = t);
  var u =
    a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = bn(t, e.child, null, s)), (t.child = bn(t, null, u, s)))
      : Ee(e, t, u, s),
    (t.memoizedState = r.state),
    l && qa(t, n, !0),
    t.child
  );
}
function hc(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Ga(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Ga(e, t.context, !1),
    Ao(e, t.containerInfo);
}
function ci(e, t, n, r, l) {
  return En(), Ro(l), (t.flags |= 256), Ee(e, t, n, r), t.child;
}
var to = { dehydrated: null, treeContext: null, retryLane: 0 };
function no(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function xc(e, t, n) {
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
    Z(le, l & 1),
    e === null)
  )
    return (
      qs(t),
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
                : (s = Fl(a, r, 0, null)),
              (e = Kt(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = no(n)),
              (t.memoizedState = to),
              e)
            : Ko(t, a))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return Gf(e, t, a, r, u, l, n);
  if (s) {
    (s = r.fallback), (a = t.mode), (l = e.child), (u = l.sibling);
    var i = { mode: "hidden", children: r.children };
    return (
      !(a & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = i),
          (t.deletions = null))
        : ((r = zt(l, i)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (s = zt(u, s)) : ((s = Kt(s, a, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? no(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (s.memoizedState = a),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = to),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = zt(s, { mode: "visible", children: r.children })),
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
function Ko(e, t) {
  return (
    (t = Fl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Qr(e, t, n, r) {
  return (
    r !== null && Ro(r),
    bn(t, e.child, null, n),
    (e = Ko(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Gf(e, t, n, r, l, s, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = xs(Error(T(422)))), Qr(e, t, a, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((s = r.fallback),
        (l = t.mode),
        (r = Fl({ mode: "visible", children: r.children }, l, 0, null)),
        (s = Kt(s, l, a, null)),
        (s.flags |= 2),
        (r.return = t),
        (s.return = t),
        (r.sibling = s),
        (t.child = r),
        t.mode & 1 && bn(t, e.child, null, a),
        (t.child.memoizedState = no(a)),
        (t.memoizedState = to),
        s);
  if (!(t.mode & 1)) return Qr(e, t, a, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (s = Error(T(419))), (r = xs(s, r, void 0)), Qr(e, t, a, r);
  }
  if (((u = (a & e.childLanes) !== 0), Le || u)) {
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
          ((s.retryLane = l), xt(e, l), nt(r, e, l, -1));
    }
    return na(), (r = xs(Error(T(421)))), Qr(e, t, a, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = op.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = s.treeContext),
      ($e = Dt(l.nextSibling)),
      (Fe = t),
      (ne = !0),
      (et = null),
      e !== null &&
        ((Be[He++] = dt),
        (Be[He++] = ft),
        (Be[He++] = Zt),
        (dt = e.id),
        (ft = e.overflow),
        (Zt = t)),
      (t = Ko(t, r.children)),
      (t.flags |= 4096),
      t);
}
function di(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ys(e.return, t, n);
}
function ys(e, t, n, r, l) {
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
function yc(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    s = r.tail;
  if ((Ee(e, t, r.children, n), (r = le.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && di(e, n, t);
        else if (e.tag === 19) di(e, n, t);
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
  if ((Z(le, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && vl(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          ys(t, !1, l, n, s);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && vl(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        ys(t, !0, n, null, s);
        break;
      case "together":
        ys(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Jr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function yt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (en |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(T(153));
  if (t.child !== null) {
    for (
      e = t.child, n = zt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = zt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function qf(e, t, n) {
  switch (t.tag) {
    case 3:
      hc(t), En();
      break;
    case 5:
      Vu(t);
      break;
    case 1:
      Ie(t.type) && pl(t);
      break;
    case 4:
      Ao(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      Z(xl, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Z(le, le.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? xc(e, t, n)
          : (Z(le, le.current & 1),
            (e = yt(e, t, n)),
            e !== null ? e.sibling : null);
      Z(le, le.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return yc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        Z(le, le.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), pc(e, t, n);
  }
  return yt(e, t, n);
}
var gc, ro, vc, wc;
gc = function (e, t) {
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
ro = function () {};
vc = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Gt(it.current);
    var s = null;
    switch (n) {
      case "input":
        (l = Cs(e, l)), (r = Cs(e, r)), (s = []);
        break;
      case "select":
        (l = oe({}, l, { value: void 0 })),
          (r = oe({}, r, { value: void 0 })),
          (s = []);
        break;
      case "textarea":
        (l = bs(e, l)), (r = bs(e, r)), (s = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = dl);
    }
    Ds(n, r);
    var a;
    n = null;
    for (f in l)
      if (!r.hasOwnProperty(f) && l.hasOwnProperty(f) && l[f] != null)
        if (f === "style") {
          var u = l[f];
          for (a in u) u.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
        } else
          f !== "dangerouslySetInnerHTML" &&
            f !== "children" &&
            f !== "suppressContentEditableWarning" &&
            f !== "suppressHydrationWarning" &&
            f !== "autoFocus" &&
            (rr.hasOwnProperty(f)
              ? s || (s = [])
              : (s = s || []).push(f, null));
    for (f in r) {
      var i = r[f];
      if (
        ((u = l != null ? l[f] : void 0),
        r.hasOwnProperty(f) && i !== u && (i != null || u != null))
      )
        if (f === "style")
          if (u) {
            for (a in u)
              !u.hasOwnProperty(a) ||
                (i && i.hasOwnProperty(a)) ||
                (n || (n = {}), (n[a] = ""));
            for (a in i)
              i.hasOwnProperty(a) &&
                u[a] !== i[a] &&
                (n || (n = {}), (n[a] = i[a]));
          } else n || (s || (s = []), s.push(f, n)), (n = i);
        else
          f === "dangerouslySetInnerHTML"
            ? ((i = i ? i.__html : void 0),
              (u = u ? u.__html : void 0),
              i != null && u !== i && (s = s || []).push(f, i))
            : f === "children"
            ? (typeof i != "string" && typeof i != "number") ||
              (s = s || []).push(f, "" + i)
            : f !== "suppressContentEditableWarning" &&
              f !== "suppressHydrationWarning" &&
              (rr.hasOwnProperty(f)
                ? (i != null && f === "onScroll" && J("scroll", e),
                  s || u === i || (s = []))
                : (s = s || []).push(f, i));
    }
    n && (s = s || []).push("style", n);
    var f = s;
    (t.updateQueue = f) && (t.flags |= 4);
  }
};
wc = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function An(e, t) {
  if (!ne)
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
function Yf(e, t, n) {
  var r = t.pendingProps;
  switch ((Io(t), t.tag)) {
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
      return Ie(t.type) && fl(), ke(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Pn(),
        ee(ze),
        ee(_e),
        Bo(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Fr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), et !== null && (fo(et), (et = null)))),
        ro(e, t),
        ke(t),
        null
      );
    case 5:
      Vo(t);
      var l = Gt(hr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        vc(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(T(166));
          return ke(t), null;
        }
        if (((e = Gt(it.current)), Fr(t))) {
          (r = t.stateNode), (n = t.type);
          var s = t.memoizedProps;
          switch (((r[ot] = t), (r[pr] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              J("cancel", r), J("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              J("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Gn.length; l++) J(Gn[l], r);
              break;
            case "source":
              J("error", r);
              break;
            case "img":
            case "image":
            case "link":
              J("error", r), J("load", r);
              break;
            case "details":
              J("toggle", r);
              break;
            case "input":
              wa(r, s), J("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!s.multiple }),
                J("invalid", r);
              break;
            case "textarea":
              ja(r, s), J("invalid", r);
          }
          Ds(n, s), (l = null);
          for (var a in s)
            if (s.hasOwnProperty(a)) {
              var u = s[a];
              a === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (s.suppressHydrationWarning !== !0 &&
                      $r(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (s.suppressHydrationWarning !== !0 &&
                      $r(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : rr.hasOwnProperty(a) &&
                  u != null &&
                  a === "onScroll" &&
                  J("scroll", r);
            }
          switch (n) {
            case "input":
              Dr(r), Sa(r, s, !0);
              break;
            case "textarea":
              Dr(r), Na(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = dl);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (a = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = qi(n)),
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
            (e[pr] = r),
            gc(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((a = Ts(n, r)), n)) {
              case "dialog":
                J("cancel", e), J("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                J("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Gn.length; l++) J(Gn[l], e);
                l = r;
                break;
              case "source":
                J("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                J("error", e), J("load", e), (l = r);
                break;
              case "details":
                J("toggle", e), (l = r);
                break;
              case "input":
                wa(e, r), (l = Cs(e, r)), J("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = oe({}, r, { value: void 0 })),
                  J("invalid", e);
                break;
              case "textarea":
                ja(e, r), (l = bs(e, r)), J("invalid", e);
                break;
              default:
                l = r;
            }
            Ds(n, l), (u = l);
            for (s in u)
              if (u.hasOwnProperty(s)) {
                var i = u[s];
                s === "style"
                  ? Xi(e, i)
                  : s === "dangerouslySetInnerHTML"
                  ? ((i = i ? i.__html : void 0), i != null && Yi(e, i))
                  : s === "children"
                  ? typeof i == "string"
                    ? (n !== "textarea" || i !== "") && lr(e, i)
                    : typeof i == "number" && lr(e, "" + i)
                  : s !== "suppressContentEditableWarning" &&
                    s !== "suppressHydrationWarning" &&
                    s !== "autoFocus" &&
                    (rr.hasOwnProperty(s)
                      ? i != null && s === "onScroll" && J("scroll", e)
                      : i != null && wo(e, s, i, a));
              }
            switch (n) {
              case "input":
                Dr(e), Sa(e, r, !1);
                break;
              case "textarea":
                Dr(e), Na(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + It(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? vn(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      vn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = dl);
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
      if (e && t.stateNode != null) wc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(T(166));
        if (((n = Gt(hr.current)), Gt(it.current), Fr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[ot] = t),
            (s = r.nodeValue !== n) && ((e = Fe), e !== null))
          )
            switch (e.tag) {
              case 3:
                $r(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  $r(r.nodeValue, n, (e.mode & 1) !== 0);
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
        (ee(le),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ne && $e !== null && t.mode & 1 && !(t.flags & 128))
          $u(), En(), (t.flags |= 98560), (s = !1);
        else if (((s = Fr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(T(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(T(317));
            s[ot] = t;
          } else
            En(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ke(t), (s = !1);
        } else et !== null && (fo(et), (et = null)), (s = !0);
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || le.current & 1 ? me === 0 && (me = 3) : na())),
          t.updateQueue !== null && (t.flags |= 4),
          ke(t),
          null);
    case 4:
      return (
        Pn(), ro(e, t), e === null && dr(t.stateNode.containerInfo), ke(t), null
      );
    case 10:
      return Fo(t.type._context), ke(t), null;
    case 17:
      return Ie(t.type) && fl(), ke(t), null;
    case 19:
      if ((ee(le), (s = t.memoizedState), s === null)) return ke(t), null;
      if (((r = (t.flags & 128) !== 0), (a = s.rendering), a === null))
        if (r) An(s, !1);
        else {
          if (me !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = vl(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    An(s, !1),
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
                return Z(le, (le.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          s.tail !== null &&
            ce() > Tn &&
            ((t.flags |= 128), (r = !0), An(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = vl(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              An(s, !0),
              s.tail === null && s.tailMode === "hidden" && !a.alternate && !ne)
            )
              return ke(t), null;
          } else
            2 * ce() - s.renderingStartTime > Tn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), An(s, !1), (t.lanes = 4194304));
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
          (s.renderingStartTime = ce()),
          (t.sibling = null),
          (n = le.current),
          Z(le, r ? (n & 1) | 2 : n & 1),
          t)
        : (ke(t), null);
    case 22:
    case 23:
      return (
        ta(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ue & 1073741824 && (ke(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ke(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(T(156, t.tag));
}
function Kf(e, t) {
  switch ((Io(t), t.tag)) {
    case 1:
      return (
        Ie(t.type) && fl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Pn(),
        ee(ze),
        ee(_e),
        Bo(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Vo(t), null;
    case 13:
      if (
        (ee(le), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(T(340));
        En();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ee(le), null;
    case 4:
      return Pn(), null;
    case 10:
      return Fo(t.type._context), null;
    case 22:
    case 23:
      return ta(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ar = !1,
  Ce = !1,
  Xf = typeof WeakSet == "function" ? WeakSet : Set,
  F = null;
function yn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ae(e, t, r);
      }
    else n.current = null;
}
function lo(e, t, n) {
  try {
    n();
  } catch (r) {
    ae(e, t, r);
  }
}
var fi = !1;
function Zf(e, t) {
  if (((Qs = il), (e = Cu()), Lo(e))) {
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
            f = 0,
            N = 0,
            w = e,
            x = null;
          t: for (;;) {
            for (
              var E;
              w !== n || (l !== 0 && w.nodeType !== 3) || (u = a + l),
                w !== s || (r !== 0 && w.nodeType !== 3) || (i = a + r),
                w.nodeType === 3 && (a += w.nodeValue.length),
                (E = w.firstChild) !== null;

            )
              (x = w), (w = E);
            for (;;) {
              if (w === e) break t;
              if (
                (x === n && ++f === l && (u = a),
                x === s && ++N === r && (i = a),
                (E = w.nextSibling) !== null)
              )
                break;
              (w = x), (x = w.parentNode);
            }
            w = E;
          }
          n = u === -1 || i === -1 ? null : { start: u, end: i };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (As = { focusedElem: e, selectionRange: n }, il = !1, F = t; F !== null; )
    if (((t = F), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (F = e);
    else
      for (; F !== null; ) {
        t = F;
        try {
          var _ = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (_ !== null) {
                  var b = _.memoizedProps,
                    V = _.memoizedState,
                    h = t.stateNode,
                    p = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? b : Ze(t.type, b),
                      V
                    );
                  h.__reactInternalSnapshotBeforeUpdate = p;
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
                throw Error(T(163));
            }
        } catch (k) {
          ae(t, t.return, k);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (F = e);
          break;
        }
        F = t.return;
      }
  return (_ = fi), (fi = !1), _;
}
function er(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var s = l.destroy;
        (l.destroy = void 0), s !== void 0 && lo(t, n, s);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Ul(e, t) {
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
function so(e) {
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
function Sc(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Sc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[ot], delete t[pr], delete t[Hs], delete t[zf], delete t[If])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function jc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function pi(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || jc(e.return)) return null;
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
function oo(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = dl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (oo(e, t, n), e = e.sibling; e !== null; ) oo(e, t, n), (e = e.sibling);
}
function ao(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ao(e, t, n), e = e.sibling; e !== null; ) ao(e, t, n), (e = e.sibling);
}
var ge = null,
  Je = !1;
function wt(e, t, n) {
  for (n = n.child; n !== null; ) Nc(e, t, n), (n = n.sibling);
}
function Nc(e, t, n) {
  if (at && typeof at.onCommitFiberUnmount == "function")
    try {
      at.onCommitFiberUnmount(Pl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ce || yn(n, t);
    case 6:
      var r = ge,
        l = Je;
      (ge = null),
        wt(e, t, n),
        (ge = r),
        (Je = l),
        ge !== null &&
          (Je
            ? ((e = ge),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ge.removeChild(n.stateNode));
      break;
    case 18:
      ge !== null &&
        (Je
          ? ((e = ge),
            (n = n.stateNode),
            e.nodeType === 8
              ? cs(e.parentNode, n)
              : e.nodeType === 1 && cs(e, n),
            ir(e))
          : cs(ge, n.stateNode));
      break;
    case 4:
      (r = ge),
        (l = Je),
        (ge = n.stateNode.containerInfo),
        (Je = !0),
        wt(e, t, n),
        (ge = r),
        (Je = l);
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
            a !== void 0 && (s & 2 || s & 4) && lo(n, t, a),
            (l = l.next);
        } while (l !== r);
      }
      wt(e, t, n);
      break;
    case 1:
      if (
        !Ce &&
        (yn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          ae(n, t, u);
        }
      wt(e, t, n);
      break;
    case 21:
      wt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ce = (r = Ce) || n.memoizedState !== null), wt(e, t, n), (Ce = r))
        : wt(e, t, n);
      break;
    default:
      wt(e, t, n);
  }
}
function mi(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Xf()),
      t.forEach(function (r) {
        var l = ap.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Xe(e, t) {
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
              (ge = u.stateNode), (Je = !1);
              break e;
            case 3:
              (ge = u.stateNode.containerInfo), (Je = !0);
              break e;
            case 4:
              (ge = u.stateNode.containerInfo), (Je = !0);
              break e;
          }
          u = u.return;
        }
        if (ge === null) throw Error(T(160));
        Nc(s, a, l), (ge = null), (Je = !1);
        var i = l.alternate;
        i !== null && (i.return = null), (l.return = null);
      } catch (f) {
        ae(l, t, f);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) kc(t, e), (t = t.sibling);
}
function kc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Xe(t, e), lt(e), r & 4)) {
        try {
          er(3, e, e.return), Ul(3, e);
        } catch (b) {
          ae(e, e.return, b);
        }
        try {
          er(5, e, e.return);
        } catch (b) {
          ae(e, e.return, b);
        }
      }
      break;
    case 1:
      Xe(t, e), lt(e), r & 512 && n !== null && yn(n, n.return);
      break;
    case 5:
      if (
        (Xe(t, e),
        lt(e),
        r & 512 && n !== null && yn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          lr(l, "");
        } catch (b) {
          ae(e, e.return, b);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var s = e.memoizedProps,
          a = n !== null ? n.memoizedProps : s,
          u = e.type,
          i = e.updateQueue;
        if (((e.updateQueue = null), i !== null))
          try {
            u === "input" && s.type === "radio" && s.name != null && Wi(l, s),
              Ts(u, a);
            var f = Ts(u, s);
            for (a = 0; a < i.length; a += 2) {
              var N = i[a],
                w = i[a + 1];
              N === "style"
                ? Xi(l, w)
                : N === "dangerouslySetInnerHTML"
                ? Yi(l, w)
                : N === "children"
                ? lr(l, w)
                : wo(l, N, w, f);
            }
            switch (u) {
              case "input":
                _s(l, s);
                break;
              case "textarea":
                Gi(l, s);
                break;
              case "select":
                var x = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!s.multiple;
                var E = s.value;
                E != null
                  ? vn(l, !!s.multiple, E, !1)
                  : x !== !!s.multiple &&
                    (s.defaultValue != null
                      ? vn(l, !!s.multiple, s.defaultValue, !0)
                      : vn(l, !!s.multiple, s.multiple ? [] : "", !1));
            }
            l[pr] = s;
          } catch (b) {
            ae(e, e.return, b);
          }
      }
      break;
    case 6:
      if ((Xe(t, e), lt(e), r & 4)) {
        if (e.stateNode === null) throw Error(T(162));
        (l = e.stateNode), (s = e.memoizedProps);
        try {
          l.nodeValue = s;
        } catch (b) {
          ae(e, e.return, b);
        }
      }
      break;
    case 3:
      if (
        (Xe(t, e), lt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          ir(t.containerInfo);
        } catch (b) {
          ae(e, e.return, b);
        }
      break;
    case 4:
      Xe(t, e), lt(e);
      break;
    case 13:
      Xe(t, e),
        lt(e),
        (l = e.child),
        l.flags & 8192 &&
          ((s = l.memoizedState !== null),
          (l.stateNode.isHidden = s),
          !s ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Jo = ce())),
        r & 4 && mi(e);
      break;
    case 22:
      if (
        ((N = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ce = (f = Ce) || N), Xe(t, e), (Ce = f)) : Xe(t, e),
        lt(e),
        r & 8192)
      ) {
        if (
          ((f = e.memoizedState !== null),
          (e.stateNode.isHidden = f) && !N && e.mode & 1)
        )
          for (F = e, N = e.child; N !== null; ) {
            for (w = F = N; F !== null; ) {
              switch (((x = F), (E = x.child), x.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  er(4, x, x.return);
                  break;
                case 1:
                  yn(x, x.return);
                  var _ = x.stateNode;
                  if (typeof _.componentWillUnmount == "function") {
                    (r = x), (n = x.return);
                    try {
                      (t = r),
                        (_.props = t.memoizedProps),
                        (_.state = t.memoizedState),
                        _.componentWillUnmount();
                    } catch (b) {
                      ae(r, n, b);
                    }
                  }
                  break;
                case 5:
                  yn(x, x.return);
                  break;
                case 22:
                  if (x.memoizedState !== null) {
                    xi(w);
                    continue;
                  }
              }
              E !== null ? ((E.return = x), (F = E)) : xi(w);
            }
            N = N.sibling;
          }
        e: for (N = null, w = e; ; ) {
          if (w.tag === 5) {
            if (N === null) {
              N = w;
              try {
                (l = w.stateNode),
                  f
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
                      (u.style.display = Ki("display", a)));
              } catch (b) {
                ae(e, e.return, b);
              }
            }
          } else if (w.tag === 6) {
            if (N === null)
              try {
                w.stateNode.nodeValue = f ? "" : w.memoizedProps;
              } catch (b) {
                ae(e, e.return, b);
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
            N === w && (N = null), (w = w.return);
          }
          N === w && (N = null), (w.sibling.return = w.return), (w = w.sibling);
        }
      }
      break;
    case 19:
      Xe(t, e), lt(e), r & 4 && mi(e);
      break;
    case 21:
      break;
    default:
      Xe(t, e), lt(e);
  }
}
function lt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (jc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(T(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (lr(l, ""), (r.flags &= -33));
          var s = pi(e);
          ao(e, s, l);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo,
            u = pi(e);
          oo(e, u, a);
          break;
        default:
          throw Error(T(161));
      }
    } catch (i) {
      ae(e, e.return, i);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Jf(e, t, n) {
  (F = e), Cc(e);
}
function Cc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; F !== null; ) {
    var l = F,
      s = l.child;
    if (l.tag === 22 && r) {
      var a = l.memoizedState !== null || Ar;
      if (!a) {
        var u = l.alternate,
          i = (u !== null && u.memoizedState !== null) || Ce;
        u = Ar;
        var f = Ce;
        if (((Ar = a), (Ce = i) && !f))
          for (F = l; F !== null; )
            (a = F),
              (i = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? yi(l)
                : i !== null
                ? ((i.return = a), (F = i))
                : yi(l);
        for (; s !== null; ) (F = s), Cc(s), (s = s.sibling);
        (F = l), (Ar = u), (Ce = f);
      }
      hi(e);
    } else
      l.subtreeFlags & 8772 && s !== null ? ((s.return = l), (F = s)) : hi(e);
  }
}
function hi(e) {
  for (; F !== null; ) {
    var t = F;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ce || Ul(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ce)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ze(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var s = t.updateQueue;
              s !== null && Ja(t, s, r);
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
                Ja(t, a, n);
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
                var f = t.alternate;
                if (f !== null) {
                  var N = f.memoizedState;
                  if (N !== null) {
                    var w = N.dehydrated;
                    w !== null && ir(w);
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
              throw Error(T(163));
          }
        Ce || (t.flags & 512 && so(t));
      } catch (x) {
        ae(t, t.return, x);
      }
    }
    if (t === e) {
      F = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (F = n);
      break;
    }
    F = t.return;
  }
}
function xi(e) {
  for (; F !== null; ) {
    var t = F;
    if (t === e) {
      F = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (F = n);
      break;
    }
    F = t.return;
  }
}
function yi(e) {
  for (; F !== null; ) {
    var t = F;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ul(4, t);
          } catch (i) {
            ae(t, n, i);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (i) {
              ae(t, l, i);
            }
          }
          var s = t.return;
          try {
            so(t);
          } catch (i) {
            ae(t, s, i);
          }
          break;
        case 5:
          var a = t.return;
          try {
            so(t);
          } catch (i) {
            ae(t, a, i);
          }
      }
    } catch (i) {
      ae(t, t.return, i);
    }
    if (t === e) {
      F = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (F = u);
      break;
    }
    F = t.return;
  }
}
var ep = Math.ceil,
  jl = gt.ReactCurrentDispatcher,
  Xo = gt.ReactCurrentOwner,
  Ge = gt.ReactCurrentBatchConfig,
  Y = 0,
  ye = null,
  fe = null,
  ve = 0,
  Ue = 0,
  gn = $t(0),
  me = 0,
  vr = null,
  en = 0,
  $l = 0,
  Zo = 0,
  tr = null,
  Me = null,
  Jo = 0,
  Tn = 1 / 0,
  ut = null,
  Nl = !1,
  io = null,
  Mt = null,
  Vr = !1,
  _t = null,
  kl = 0,
  nr = 0,
  uo = null,
  el = -1,
  tl = 0;
function be() {
  return Y & 6 ? ce() : el !== -1 ? el : (el = ce());
}
function Lt(e) {
  return e.mode & 1
    ? Y & 2 && ve !== 0
      ? ve & -ve
      : Uf.transition !== null
      ? (tl === 0 && (tl = uu()), tl)
      : ((e = X),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : xu(e.type))),
        e)
    : 1;
}
function nt(e, t, n, r) {
  if (50 < nr) throw ((nr = 0), (uo = null), Error(T(185)));
  jr(e, n, r),
    (!(Y & 2) || e !== ye) &&
      (e === ye && (!(Y & 2) && ($l |= n), me === 4 && kt(e, ve)),
      Re(e, r),
      n === 1 && Y === 0 && !(t.mode & 1) && ((Tn = ce() + 500), zl && Ft()));
}
function Re(e, t) {
  var n = e.callbackNode;
  Rd(e, t);
  var r = al(e, e === ye ? ve : 0);
  if (r === 0)
    n !== null && _a(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && _a(n), t === 1))
      e.tag === 0 ? Rf(gi.bind(null, e)) : Iu(gi.bind(null, e)),
        Mf(function () {
          !(Y & 6) && Ft();
        }),
        (n = null);
    else {
      switch (cu(r)) {
        case 1:
          n = Co;
          break;
        case 4:
          n = au;
          break;
        case 16:
          n = ol;
          break;
        case 536870912:
          n = iu;
          break;
        default:
          n = ol;
      }
      n = Lc(n, _c.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function _c(e, t) {
  if (((el = -1), (tl = 0), Y & 6)) throw Error(T(327));
  var n = e.callbackNode;
  if (kn() && e.callbackNode !== n) return null;
  var r = al(e, e === ye ? ve : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Cl(e, r);
  else {
    t = r;
    var l = Y;
    Y |= 2;
    var s = bc();
    (ye !== e || ve !== t) && ((ut = null), (Tn = ce() + 500), Yt(e, t));
    do
      try {
        rp();
        break;
      } catch (u) {
        Ec(e, u);
      }
    while (!0);
    $o(),
      (jl.current = s),
      (Y = l),
      fe !== null ? (t = 0) : ((ye = null), (ve = 0), (t = me));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Rs(e)), l !== 0 && ((r = l), (t = co(e, l)))), t === 1)
    )
      throw ((n = vr), Yt(e, 0), kt(e, r), Re(e, ce()), n);
    if (t === 6) kt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !tp(l) &&
          ((t = Cl(e, r)),
          t === 2 && ((s = Rs(e)), s !== 0 && ((r = s), (t = co(e, s)))),
          t === 1))
      )
        throw ((n = vr), Yt(e, 0), kt(e, r), Re(e, ce()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(T(345));
        case 2:
          Bt(e, Me, ut);
          break;
        case 3:
          if (
            (kt(e, r), (r & 130023424) === r && ((t = Jo + 500 - ce()), 10 < t))
          ) {
            if (al(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              be(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Bs(Bt.bind(null, e, Me, ut), t);
            break;
          }
          Bt(e, Me, ut);
          break;
        case 4:
          if ((kt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var a = 31 - tt(r);
            (s = 1 << a), (a = t[a]), a > l && (l = a), (r &= ~s);
          }
          if (
            ((r = l),
            (r = ce() - r),
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
                : 1960 * ep(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Bs(Bt.bind(null, e, Me, ut), r);
            break;
          }
          Bt(e, Me, ut);
          break;
        case 5:
          Bt(e, Me, ut);
          break;
        default:
          throw Error(T(329));
      }
    }
  }
  return Re(e, ce()), e.callbackNode === n ? _c.bind(null, e) : null;
}
function co(e, t) {
  var n = tr;
  return (
    e.current.memoizedState.isDehydrated && (Yt(e, t).flags |= 256),
    (e = Cl(e, t)),
    e !== 2 && ((t = Me), (Me = n), t !== null && fo(t)),
    e
  );
}
function fo(e) {
  Me === null ? (Me = e) : Me.push.apply(Me, e);
}
function tp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            s = l.getSnapshot;
          l = l.value;
          try {
            if (!rt(s(), l)) return !1;
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
function kt(e, t) {
  for (
    t &= ~Zo,
      t &= ~$l,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - tt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function gi(e) {
  if (Y & 6) throw Error(T(327));
  kn();
  var t = al(e, 0);
  if (!(t & 1)) return Re(e, ce()), null;
  var n = Cl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Rs(e);
    r !== 0 && ((t = r), (n = co(e, r)));
  }
  if (n === 1) throw ((n = vr), Yt(e, 0), kt(e, t), Re(e, ce()), n);
  if (n === 6) throw Error(T(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Bt(e, Me, ut),
    Re(e, ce()),
    null
  );
}
function ea(e, t) {
  var n = Y;
  Y |= 1;
  try {
    return e(t);
  } finally {
    (Y = n), Y === 0 && ((Tn = ce() + 500), zl && Ft());
  }
}
function tn(e) {
  _t !== null && _t.tag === 0 && !(Y & 6) && kn();
  var t = Y;
  Y |= 1;
  var n = Ge.transition,
    r = X;
  try {
    if (((Ge.transition = null), (X = 1), e)) return e();
  } finally {
    (X = r), (Ge.transition = n), (Y = t), !(Y & 6) && Ft();
  }
}
function ta() {
  (Ue = gn.current), ee(gn);
}
function Yt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Tf(n)), fe !== null))
    for (n = fe.return; n !== null; ) {
      var r = n;
      switch ((Io(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && fl();
          break;
        case 3:
          Pn(), ee(ze), ee(_e), Bo();
          break;
        case 5:
          Vo(r);
          break;
        case 4:
          Pn();
          break;
        case 13:
          ee(le);
          break;
        case 19:
          ee(le);
          break;
        case 10:
          Fo(r.type._context);
          break;
        case 22:
        case 23:
          ta();
      }
      n = n.return;
    }
  if (
    ((ye = e),
    (fe = e = zt(e.current, null)),
    (ve = Ue = t),
    (me = 0),
    (vr = null),
    (Zo = $l = en = 0),
    (Me = tr = null),
    Wt !== null)
  ) {
    for (t = 0; t < Wt.length; t++)
      if (((n = Wt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          s = n.pending;
        if (s !== null) {
          var a = s.next;
          (s.next = l), (r.next = a);
        }
        n.pending = r;
      }
    Wt = null;
  }
  return e;
}
function Ec(e, t) {
  do {
    var n = fe;
    try {
      if (($o(), (Xr.current = Sl), wl)) {
        for (var r = se.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        wl = !1;
      }
      if (
        ((Jt = 0),
        (xe = pe = se = null),
        (Jn = !1),
        (xr = 0),
        (Xo.current = null),
        n === null || n.return === null)
      ) {
        (me = 1), (vr = t), (fe = null);
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
          var f = i,
            N = u,
            w = N.tag;
          if (!(N.mode & 1) && (w === 0 || w === 11 || w === 15)) {
            var x = N.alternate;
            x
              ? ((N.updateQueue = x.updateQueue),
                (N.memoizedState = x.memoizedState),
                (N.lanes = x.lanes))
              : ((N.updateQueue = null), (N.memoizedState = null));
          }
          var E = si(a);
          if (E !== null) {
            (E.flags &= -257),
              oi(E, a, u, s, t),
              E.mode & 1 && li(s, f, t),
              (t = E),
              (i = f);
            var _ = t.updateQueue;
            if (_ === null) {
              var b = new Set();
              b.add(i), (t.updateQueue = b);
            } else _.add(i);
            break e;
          } else {
            if (!(t & 1)) {
              li(s, f, t), na();
              break e;
            }
            i = Error(T(426));
          }
        } else if (ne && u.mode & 1) {
          var V = si(a);
          if (V !== null) {
            !(V.flags & 65536) && (V.flags |= 256),
              oi(V, a, u, s, t),
              Ro(Dn(i, u));
            break e;
          }
        }
        (s = i = Dn(i, u)),
          me !== 4 && (me = 2),
          tr === null ? (tr = [s]) : tr.push(s),
          (s = a);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (t &= -t), (s.lanes |= t);
              var h = cc(s, i, t);
              Za(s, h);
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
                    (Mt === null || !Mt.has(g))))
              ) {
                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                var k = dc(s, u, t);
                Za(s, k);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      Dc(n);
    } catch (M) {
      (t = M), fe === n && n !== null && (fe = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function bc() {
  var e = jl.current;
  return (jl.current = Sl), e === null ? Sl : e;
}
function na() {
  (me === 0 || me === 3 || me === 2) && (me = 4),
    ye === null || (!(en & 268435455) && !($l & 268435455)) || kt(ye, ve);
}
function Cl(e, t) {
  var n = Y;
  Y |= 2;
  var r = bc();
  (ye !== e || ve !== t) && ((ut = null), Yt(e, t));
  do
    try {
      np();
      break;
    } catch (l) {
      Ec(e, l);
    }
  while (!0);
  if (($o(), (Y = n), (jl.current = r), fe !== null)) throw Error(T(261));
  return (ye = null), (ve = 0), me;
}
function np() {
  for (; fe !== null; ) Pc(fe);
}
function rp() {
  for (; fe !== null && !Ed(); ) Pc(fe);
}
function Pc(e) {
  var t = Mc(e.alternate, e, Ue);
  (e.memoizedProps = e.pendingProps),
    t === null ? Dc(e) : (fe = t),
    (Xo.current = null);
}
function Dc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Kf(n, t)), n !== null)) {
        (n.flags &= 32767), (fe = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (me = 6), (fe = null);
        return;
      }
    } else if (((n = Yf(n, t, Ue)), n !== null)) {
      fe = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      fe = t;
      return;
    }
    fe = t = e;
  } while (t !== null);
  me === 0 && (me = 5);
}
function Bt(e, t, n) {
  var r = X,
    l = Ge.transition;
  try {
    (Ge.transition = null), (X = 1), lp(e, t, n, r);
  } finally {
    (Ge.transition = l), (X = r);
  }
  return null;
}
function lp(e, t, n, r) {
  do kn();
  while (_t !== null);
  if (Y & 6) throw Error(T(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(T(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (Ud(e, s),
    e === ye && ((fe = ye = null), (ve = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Vr ||
      ((Vr = !0),
      Lc(ol, function () {
        return kn(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = Ge.transition), (Ge.transition = null);
    var a = X;
    X = 1;
    var u = Y;
    (Y |= 4),
      (Xo.current = null),
      Zf(e, n),
      kc(n, e),
      kf(As),
      (il = !!Qs),
      (As = Qs = null),
      (e.current = n),
      Jf(n),
      bd(),
      (Y = u),
      (X = a),
      (Ge.transition = s);
  } else e.current = n;
  if (
    (Vr && ((Vr = !1), (_t = e), (kl = l)),
    (s = e.pendingLanes),
    s === 0 && (Mt = null),
    Td(n.stateNode),
    Re(e, ce()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Nl) throw ((Nl = !1), (e = io), (io = null), e);
  return (
    kl & 1 && e.tag !== 0 && kn(),
    (s = e.pendingLanes),
    s & 1 ? (e === uo ? nr++ : ((nr = 0), (uo = e))) : (nr = 0),
    Ft(),
    null
  );
}
function kn() {
  if (_t !== null) {
    var e = cu(kl),
      t = Ge.transition,
      n = X;
    try {
      if (((Ge.transition = null), (X = 16 > e ? 16 : e), _t === null))
        var r = !1;
      else {
        if (((e = _t), (_t = null), (kl = 0), Y & 6)) throw Error(T(331));
        var l = Y;
        for (Y |= 4, F = e.current; F !== null; ) {
          var s = F,
            a = s.child;
          if (F.flags & 16) {
            var u = s.deletions;
            if (u !== null) {
              for (var i = 0; i < u.length; i++) {
                var f = u[i];
                for (F = f; F !== null; ) {
                  var N = F;
                  switch (N.tag) {
                    case 0:
                    case 11:
                    case 15:
                      er(8, N, s);
                  }
                  var w = N.child;
                  if (w !== null) (w.return = N), (F = w);
                  else
                    for (; F !== null; ) {
                      N = F;
                      var x = N.sibling,
                        E = N.return;
                      if ((Sc(N), N === f)) {
                        F = null;
                        break;
                      }
                      if (x !== null) {
                        (x.return = E), (F = x);
                        break;
                      }
                      F = E;
                    }
                }
              }
              var _ = s.alternate;
              if (_ !== null) {
                var b = _.child;
                if (b !== null) {
                  _.child = null;
                  do {
                    var V = b.sibling;
                    (b.sibling = null), (b = V);
                  } while (b !== null);
                }
              }
              F = s;
            }
          }
          if (s.subtreeFlags & 2064 && a !== null) (a.return = s), (F = a);
          else
            e: for (; F !== null; ) {
              if (((s = F), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    er(9, s, s.return);
                }
              var h = s.sibling;
              if (h !== null) {
                (h.return = s.return), (F = h);
                break e;
              }
              F = s.return;
            }
        }
        var p = e.current;
        for (F = p; F !== null; ) {
          a = F;
          var g = a.child;
          if (a.subtreeFlags & 2064 && g !== null) (g.return = a), (F = g);
          else
            e: for (a = p; F !== null; ) {
              if (((u = F), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ul(9, u);
                  }
                } catch (M) {
                  ae(u, u.return, M);
                }
              if (u === a) {
                F = null;
                break e;
              }
              var k = u.sibling;
              if (k !== null) {
                (k.return = u.return), (F = k);
                break e;
              }
              F = u.return;
            }
        }
        if (
          ((Y = l), Ft(), at && typeof at.onPostCommitFiberRoot == "function")
        )
          try {
            at.onPostCommitFiberRoot(Pl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (X = n), (Ge.transition = t);
    }
  }
  return !1;
}
function vi(e, t, n) {
  (t = Dn(n, t)),
    (t = cc(e, t, 1)),
    (e = Tt(e, t, 1)),
    (t = be()),
    e !== null && (jr(e, 1, t), Re(e, t));
}
function ae(e, t, n) {
  if (e.tag === 3) vi(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        vi(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Mt === null || !Mt.has(r)))
        ) {
          (e = Dn(n, e)),
            (e = dc(t, e, 1)),
            (t = Tt(t, e, 1)),
            (e = be()),
            t !== null && (jr(t, 1, e), Re(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function sp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = be()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ye === e &&
      (ve & n) === n &&
      (me === 4 || (me === 3 && (ve & 130023424) === ve && 500 > ce() - Jo)
        ? Yt(e, 0)
        : (Zo |= n)),
    Re(e, t);
}
function Tc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Lr), (Lr <<= 1), !(Lr & 130023424) && (Lr = 4194304))
      : (t = 1));
  var n = be();
  (e = xt(e, t)), e !== null && (jr(e, t, n), Re(e, n));
}
function op(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Tc(e, n);
}
function ap(e, t) {
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
      throw Error(T(314));
  }
  r !== null && r.delete(t), Tc(e, n);
}
var Mc;
Mc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ze.current) Le = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Le = !1), qf(e, t, n);
      Le = !!(e.flags & 131072);
    }
  else (Le = !1), ne && t.flags & 1048576 && Ru(t, hl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Jr(e, t), (e = t.pendingProps);
      var l = _n(t, _e.current);
      Nn(t, n), (l = Wo(null, t, r, e, l, n));
      var s = Go();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ie(r) ? ((s = !0), pl(t)) : (s = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Qo(t),
            (l.updater = Rl),
            (t.stateNode = l),
            (l._reactInternals = t),
            Xs(t, r, e, n),
            (t = eo(null, t, r, !0, s, n)))
          : ((t.tag = 0), ne && s && zo(t), Ee(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Jr(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = up(r)),
          (e = Ze(r, e)),
          l)
        ) {
          case 0:
            t = Js(null, t, r, e, n);
            break e;
          case 1:
            t = ui(null, t, r, e, n);
            break e;
          case 11:
            t = ai(null, t, r, e, n);
            break e;
          case 14:
            t = ii(null, t, r, Ze(r.type, e), n);
            break e;
        }
        throw Error(T(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ze(r, l)),
        Js(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ze(r, l)),
        ui(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((hc(t), e === null)) throw Error(T(387));
        (r = t.pendingProps),
          (s = t.memoizedState),
          (l = s.element),
          Au(e, t),
          gl(t, r, null, n);
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
            (l = Dn(Error(T(423)), t)), (t = ci(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = Dn(Error(T(424)), t)), (t = ci(e, t, r, n, l));
            break e;
          } else
            for (
              $e = Dt(t.stateNode.containerInfo.firstChild),
                Fe = t,
                ne = !0,
                et = null,
                n = Ou(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((En(), r === l)) {
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
        Vu(t),
        e === null && qs(t),
        (r = t.type),
        (l = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (a = l.children),
        Vs(r, l) ? (a = null) : s !== null && Vs(r, s) && (t.flags |= 32),
        mc(e, t),
        Ee(e, t, a, n),
        t.child
      );
    case 6:
      return e === null && qs(t), null;
    case 13:
      return xc(e, t, n);
    case 4:
      return (
        Ao(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = bn(t, null, r, n)) : Ee(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ze(r, l)),
        ai(e, t, r, l, n)
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
          Z(xl, r._currentValue),
          (r._currentValue = a),
          s !== null)
        )
          if (rt(s.value, a)) {
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
                      var f = s.updateQueue;
                      if (f !== null) {
                        f = f.shared;
                        var N = f.pending;
                        N === null
                          ? (i.next = i)
                          : ((i.next = N.next), (N.next = i)),
                          (f.pending = i);
                      }
                    }
                    (s.lanes |= n),
                      (i = s.alternate),
                      i !== null && (i.lanes |= n),
                      Ys(s.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  i = i.next;
                }
              } else if (s.tag === 10) a = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((a = s.return), a === null)) throw Error(T(341));
                (a.lanes |= n),
                  (u = a.alternate),
                  u !== null && (u.lanes |= n),
                  Ys(a, n, t),
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
        Nn(t, n),
        (l = qe(l)),
        (r = r(l)),
        (t.flags |= 1),
        Ee(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Ze(r, t.pendingProps)),
        (l = Ze(r.type, l)),
        ii(e, t, r, l, n)
      );
    case 15:
      return fc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ze(r, l)),
        Jr(e, t),
        (t.tag = 1),
        Ie(r) ? ((e = !0), pl(t)) : (e = !1),
        Nn(t, n),
        uc(t, r, l),
        Xs(t, r, l, n),
        eo(null, t, r, !0, e, n)
      );
    case 19:
      return yc(e, t, n);
    case 22:
      return pc(e, t, n);
  }
  throw Error(T(156, t.tag));
};
function Lc(e, t) {
  return ou(e, t);
}
function ip(e, t, n, r) {
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
function We(e, t, n, r) {
  return new ip(e, t, n, r);
}
function ra(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function up(e) {
  if (typeof e == "function") return ra(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === jo)) return 11;
    if (e === No) return 14;
  }
  return 2;
}
function zt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = We(e.tag, t, e.key, e.mode)),
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
function nl(e, t, n, r, l, s) {
  var a = 2;
  if (((r = e), typeof e == "function")) ra(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else
    e: switch (e) {
      case an:
        return Kt(n.children, l, s, t);
      case So:
        (a = 8), (l |= 8);
        break;
      case Ss:
        return (
          (e = We(12, n, t, l | 2)), (e.elementType = Ss), (e.lanes = s), e
        );
      case js:
        return (e = We(13, n, t, l)), (e.elementType = js), (e.lanes = s), e;
      case Ns:
        return (e = We(19, n, t, l)), (e.elementType = Ns), (e.lanes = s), e;
      case Vi:
        return Fl(n, l, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Qi:
              a = 10;
              break e;
            case Ai:
              a = 9;
              break e;
            case jo:
              a = 11;
              break e;
            case No:
              a = 14;
              break e;
            case St:
              (a = 16), (r = null);
              break e;
          }
        throw Error(T(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = We(a, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = s), t
  );
}
function Kt(e, t, n, r) {
  return (e = We(7, e, r, t)), (e.lanes = n), e;
}
function Fl(e, t, n, r) {
  return (
    (e = We(22, e, r, t)),
    (e.elementType = Vi),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function gs(e, t, n) {
  return (e = We(6, e, null, t)), (e.lanes = n), e;
}
function vs(e, t, n) {
  return (
    (t = We(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function cp(e, t, n, r, l) {
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
    (this.eventTimes = Jl(0)),
    (this.expirationTimes = Jl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Jl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function la(e, t, n, r, l, s, a, u, i) {
  return (
    (e = new cp(e, t, n, u, i)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = We(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Qo(s),
    e
  );
}
function dp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: on,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function zc(e) {
  if (!e) return Rt;
  e = e._reactInternals;
  e: {
    if (rn(e) !== e || e.tag !== 1) throw Error(T(170));
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
    throw Error(T(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ie(n)) return zu(e, n, t);
  }
  return t;
}
function Ic(e, t, n, r, l, s, a, u, i) {
  return (
    (e = la(n, r, !0, e, l, s, a, u, i)),
    (e.context = zc(null)),
    (n = e.current),
    (r = be()),
    (l = Lt(n)),
    (s = pt(r, l)),
    (s.callback = t ?? null),
    Tt(n, s, l),
    (e.current.lanes = l),
    jr(e, l, r),
    Re(e, r),
    e
  );
}
function Ol(e, t, n, r) {
  var l = t.current,
    s = be(),
    a = Lt(l);
  return (
    (n = zc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = pt(s, a)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Tt(l, t, a)),
    e !== null && (nt(e, l, a, s), Kr(e, l, a)),
    a
  );
}
function _l(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function wi(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function sa(e, t) {
  wi(e, t), (e = e.alternate) && wi(e, t);
}
function fp() {
  return null;
}
var Rc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function oa(e) {
  this._internalRoot = e;
}
Ql.prototype.render = oa.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(T(409));
  Ol(e, t, null, null);
};
Ql.prototype.unmount = oa.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    tn(function () {
      Ol(null, e, null, null);
    }),
      (t[ht] = null);
  }
};
function Ql(e) {
  this._internalRoot = e;
}
Ql.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = pu();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Nt.length && t !== 0 && t < Nt[n].priority; n++);
    Nt.splice(n, 0, e), n === 0 && hu(e);
  }
};
function aa(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Al(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Si() {}
function pp(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var f = _l(a);
        s.call(f);
      };
    }
    var a = Ic(t, r, e, 0, null, !1, !1, "", Si);
    return (
      (e._reactRootContainer = a),
      (e[ht] = a.current),
      dr(e.nodeType === 8 ? e.parentNode : e),
      tn(),
      a
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var f = _l(i);
      u.call(f);
    };
  }
  var i = la(e, 0, !1, null, null, !1, !1, "", Si);
  return (
    (e._reactRootContainer = i),
    (e[ht] = i.current),
    dr(e.nodeType === 8 ? e.parentNode : e),
    tn(function () {
      Ol(t, i, n, r);
    }),
    i
  );
}
function Vl(e, t, n, r, l) {
  var s = n._reactRootContainer;
  if (s) {
    var a = s;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var i = _l(a);
        u.call(i);
      };
    }
    Ol(t, a, e, l);
  } else a = pp(n, t, e, l, r);
  return _l(a);
}
du = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Wn(t.pendingLanes);
        n !== 0 &&
          (_o(t, n | 1), Re(t, ce()), !(Y & 6) && ((Tn = ce() + 500), Ft()));
      }
      break;
    case 13:
      tn(function () {
        var r = xt(e, 1);
        if (r !== null) {
          var l = be();
          nt(r, e, 1, l);
        }
      }),
        sa(e, 1);
  }
};
Eo = function (e) {
  if (e.tag === 13) {
    var t = xt(e, 134217728);
    if (t !== null) {
      var n = be();
      nt(t, e, 134217728, n);
    }
    sa(e, 134217728);
  }
};
fu = function (e) {
  if (e.tag === 13) {
    var t = Lt(e),
      n = xt(e, t);
    if (n !== null) {
      var r = be();
      nt(n, e, t, r);
    }
    sa(e, t);
  }
};
pu = function () {
  return X;
};
mu = function (e, t) {
  var n = X;
  try {
    return (X = e), t();
  } finally {
    X = n;
  }
};
Ls = function (e, t, n) {
  switch (t) {
    case "input":
      if ((_s(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var l = Ll(r);
            if (!l) throw Error(T(90));
            Hi(r), _s(r, l);
          }
        }
      }
      break;
    case "textarea":
      Gi(e, n);
      break;
    case "select":
      (t = n.value), t != null && vn(e, !!n.multiple, t, !1);
  }
};
eu = ea;
tu = tn;
var mp = { usingClientEntryPoint: !1, Events: [kr, fn, Ll, Zi, Ji, ea] },
  Vn = {
    findFiberByHostInstance: Ht,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  hp = {
    bundleType: Vn.bundleType,
    version: Vn.version,
    rendererPackageName: Vn.rendererPackageName,
    rendererConfig: Vn.rendererConfig,
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
      return (e = lu(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Vn.findFiberByHostInstance || fp,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Br = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Br.isDisabled && Br.supportsFiber)
    try {
      (Pl = Br.inject(hp)), (at = Br);
    } catch {}
}
Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = mp;
Qe.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!aa(t)) throw Error(T(200));
  return dp(e, t, null, n);
};
Qe.createRoot = function (e, t) {
  if (!aa(e)) throw Error(T(299));
  var n = !1,
    r = "",
    l = Rc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = la(e, 1, !1, null, null, n, !1, r, l)),
    (e[ht] = t.current),
    dr(e.nodeType === 8 ? e.parentNode : e),
    new oa(t)
  );
};
Qe.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(T(188))
      : ((e = Object.keys(e).join(",")), Error(T(268, e)));
  return (e = lu(t)), (e = e === null ? null : e.stateNode), e;
};
Qe.flushSync = function (e) {
  return tn(e);
};
Qe.hydrate = function (e, t, n) {
  if (!Al(t)) throw Error(T(200));
  return Vl(null, e, t, !0, n);
};
Qe.hydrateRoot = function (e, t, n) {
  if (!aa(e)) throw Error(T(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    s = "",
    a = Rc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = Ic(t, null, e, 1, n ?? null, l, !1, s, a)),
    (e[ht] = t.current),
    dr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new Ql(t);
};
Qe.render = function (e, t, n) {
  if (!Al(t)) throw Error(T(200));
  return Vl(null, e, t, !1, n);
};
Qe.unmountComponentAtNode = function (e) {
  if (!Al(e)) throw Error(T(40));
  return e._reactRootContainer
    ? (tn(function () {
        Vl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[ht] = null);
        });
      }),
      !0)
    : !1;
};
Qe.unstable_batchedUpdates = ea;
Qe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Al(n)) throw Error(T(200));
  if (e == null || e._reactInternals === void 0) throw Error(T(38));
  return Vl(e, t, n, !1, r);
};
Qe.version = "18.3.1-next-f1338f8080-20240426";
function Uc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Uc);
    } catch (e) {
      console.error(e);
    }
}
Uc(), (Ui.exports = Qe);
var xp = Ui.exports,
  $c,
  ji = xp;
($c = ji.createRoot), ji.hydrateRoot;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var yp = {
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
 */ const gp = (e) =>
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
          ...f
        },
        N
      ) =>
        C.createElement(
          "svg",
          {
            ref: N,
            ...yp,
            width: l,
            height: l,
            stroke: r,
            strokeWidth: a ? (Number(s) * 24) / Number(l) : s,
            className: ["lucide", `lucide-${gp(e)}`, u].join(" "),
            ...f,
          },
          [
            ...t.map(([w, x]) => C.createElement(w, x)),
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
 */ const El = Se("AlertCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vp = Se("CheckCircle2", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wp = Se("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Sp = Se("ChevronUp", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Mn = Se("FileText", [
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
 */ const jp = Se("Info", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Np = Se("Layers", [
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
 */ const kp = Se("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _r = Se("Package", [
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
 */ const po = Se("Pen", [
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
 */ const Bl = Se("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Cp = Se("Save", [
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
 */ const _p = Se("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ep = Se("Server", [
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
 */ const ia = Se("Trash2", [
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
 */ const bp = Se("XCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ln = Se("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]);
let qt = null;
const Fc = async () => {
    if (qt) return qt;
    try {
      const e = await fetch("../config.txt");
      if (!e.ok) throw new Error("Failed to load configuration");
      return (qt = await e.json()), qt;
    } catch (e) {
      throw (console.error("Error loading config:", e), e);
    }
  },
  Pp = (e) => {
    if (!qt) throw new Error("Configuration not loaded");
    return `${qt.domain}${e}`;
  },
  Dp = () => qt,
  Pe = async (e, t = {}) => {
    await Fc();
    const n = Pp(e),
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
        const N = await i.text();
        throw (
          (console.error(`API Error Response: ${r} ${n}`, {
            status: i.status,
            statusText: i.statusText,
            body: N,
          }),
          new Error(`HTTP error! status: ${i.status}, message: ${N}`))
        );
      }
      if (a === "blob") {
        const N = await i.blob();
        return (
          console.log(`API Success Response (blob): ${r} ${n}`, {
            size: N.size,
          }),
          N
        );
      }
      const f = await i.json();
      return console.log(`API Success Response: ${r} ${n}`, f), f;
    } catch (i) {
      throw (console.error(`API call failed: ${r} ${n}`, i), i);
    }
  },
  Tp = async (e) =>
    await Pe("/api/session/login", { method: "POST", body: { Data: e } }),
  Mp = (e) => (
    sessionStorage.setItem("user_session", JSON.stringify(e)),
    sessionStorage.setItem("loggedGUID", e.GUID || ""),
    sessionStorage.setItem("loggedEmployer", e.Employer || ""),
    sessionStorage.setItem("loggedID", e.ID || ""),
    sessionStorage.setItem("loggedName", e.Name || ""),
    sessionStorage.setItem("loggedTime", e.loginTime || ""),
    sessionStorage.setItem("loggedLevel", e.level || ""),
    e
  ),
  Oc = () => {
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
  Lp = () => !!Oc(),
  zp = () => {
    const e = Oc();
    return (
      (e == null ? void 0 : e.Name) || sessionStorage.getItem("loggedName")
    );
  },
  Ke = ({ size: e = "medium", className: t = "" }) => {
    const n = { small: "w-4 h-4", medium: "w-6 h-6", large: "w-8 h-8" };
    return o.jsx("div", {
      className: `inline-block animate-spin rounded-full border-2 border-solid border-current border-r-transparent ${n[e]} ${t}`,
      role: "status",
      "aria-label": "Loading",
      children: o.jsx("span", { className: "sr-only", children: "Loading..." }),
    });
  },
  Ip = {
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
  Qc = C.createContext(void 0),
  Rp = ({ children: e }) => {
    const [t, n] = C.useState("zh"),
      r = () => {
        n((s) => (s === "zh" ? "en" : "zh"));
      },
      l = (s, a) => {
        let u = Ip[t][s] || s;
        return (
          a &&
            Object.entries(a).forEach(([i, f]) => {
              u = u.replace(`{${i}}`, f.toString());
            }),
          u
        );
      };
    return o.jsx(Qc.Provider, {
      value: { language: t, toggleLanguage: r, t: l },
      children: e,
    });
  },
  Up = () => {
    const e = C.useContext(Qc);
    if (e === void 0)
      throw new Error("useLanguage must be used within a LanguageProvider");
    return e;
  },
  $p = ({ onLogin: e }) => {
    const { t } = Up(),
      [n, r] = C.useState(""),
      [l, s] = C.useState(""),
      [a, u] = C.useState(null),
      [i, f] = C.useState(!1),
      N = async (w) => {
        w.preventDefault(), u(null), f(!0);
        try {
          const x = await Tp({ ID: n, Password: l });
          x.Code === 200
            ? (Mp(x.Data), e())
            : x.Code === -1 || x.Code === -2
            ? u(x.Result)
            : u(t("error.api"));
        } catch (x) {
          console.error("Login error:", x),
            u(x instanceof Error ? x.message : t("error.api"));
        } finally {
          f(!1);
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
                o.jsx(El, { size: 20 }),
                o.jsx("span", { children: a }),
              ],
            }),
          o.jsxs("form", {
            onSubmit: N,
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
                        o.jsx(Ke, { size: "small\\", className: "mr-2" }),
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
  ua = ({ x: e, y: t, onClose: n, onViewUnitDetails: r }) => {
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
          o.jsx(jp, { size: 16 }),
          o.jsx("span", { children: "查看詳細單位" }),
        ],
      }),
    });
  },
  ca = ({
    isOpen: e,
    onClose: t,
    medGuid: n,
    medName: r,
    onFetchUnitDetails: l,
    onUpdateUnits: s,
  }) => {
    const [a, u] = C.useState([]),
      [i, f] = C.useState([]),
      [N, w] = C.useState(!1),
      [x, E] = C.useState(!1),
      [_, b] = C.useState(null),
      [V, h] = C.useState(!1),
      p = C.useCallback(async () => {
        w(!0), b(null);
        try {
          const P = await l(n);
          u(P), f(JSON.parse(JSON.stringify(P)));
        } catch (P) {
          b("無法載入單位詳細資訊"),
            console.error("Failed to fetch unit details:", P);
        } finally {
          w(!1);
        }
      }, [n, l]);
    C.useEffect(() => {
      e && n && (p(), h(!1));
    }, [e, n, p]);
    const g = () => {
        h(!0), f(JSON.parse(JSON.stringify(a)));
      },
      k = () => {
        h(!1), f(JSON.parse(JSON.stringify(a)));
      },
      M = () => {
        for (let A = 0; A < i.length; A++) {
          const D = i[A];
          if (!D.unit_name.trim()) return `單位 ${A + 1}：單位名稱不能為空`;
          if (!D.quantity || parseInt(D.quantity) < 1)
            return `單位 ${A + 1}：最小操作數量必須大於 0`;
          if (!D.sort_order || parseInt(D.sort_order) < 1)
            return `單位 ${A + 1}：順序必須大於 0`;
          if (parseInt(D.sort_order) > 1 && !D.conversion_rate)
            return `單位 ${A + 1}：順序大於 1 的單位必須設定換算比例`;
          if (D.conversion_rate && parseFloat(D.conversion_rate) <= 0)
            return `單位 ${A + 1}：換算比例必須大於 0`;
        }
        const P = i.map((A) => parseInt(A.sort_order)),
          H = new Set(P);
        return P.length !== H.size ? "順序不能重複" : null;
      },
      R = async () => {
        const P = M();
        if (P) {
          b(P);
          return;
        }
        E(!0), b(null);
        try {
          await s(i), u(JSON.parse(JSON.stringify(i))), h(!1);
        } catch (H) {
          b("儲存失敗，請稍後再試"), console.error("Failed to save units:", H);
        } finally {
          E(!1);
        }
      },
      z = (P, H, A) => {
        const D = [...i];
        (D[P] = { ...D[P], [H]: A }), f(D);
      },
      U = () => {
        const P = Math.max(...i.map((A) => parseInt(A.sort_order) || 0), 0),
          H = {
            GUID: `NEW_${Date.now()}`,
            med_guid: n,
            unit_type: "撥補",
            unit_name: "",
            quantity: "1",
            sort_order: String(P + 1),
            conversion_rate: "",
          };
        f([...i, H]);
      },
      G = (P) => {
        const H = i.filter((A, D) => D !== P);
        f(H);
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
                        children: o.jsx(_r, {
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
                    children: o.jsx(ln, { size: 24 }),
                  }),
                ],
              }),
              o.jsx("div", {
                className: "p-6 overflow-y-auto max-h-[calc(80vh-180px)]",
                children: N
                  ? o.jsx("div", {
                      className: "flex justify-center py-12",
                      children: o.jsx(Ke, {}),
                    })
                  : _
                  ? o.jsxs("div", {
                      className: "text-center py-12",
                      children: [
                        o.jsx("p", { className: "text-red-600", children: _ }),
                        o.jsx("button", {
                          onClick: p,
                          className:
                            "mt-4 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-slate-700 transition-colors",
                          children: "重試",
                        }),
                      ],
                    })
                  : a.length === 0 && !V
                  ? o.jsx("div", {
                      className: "text-center py-12 text-slate-500",
                      children: "無單位資訊",
                    })
                  : V
                  ? o.jsxs("div", {
                      className: "space-y-4",
                      children: [
                        i.map((P, H) => {
                          var A;
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
                                        children: ["單位 ", H + 1],
                                      }),
                                      i.length > 1 &&
                                        o.jsx("button", {
                                          onClick: () => G(H),
                                          className:
                                            "text-red-500 hover:text-red-700 transition-colors",
                                          title: "刪除此單位",
                                          children: o.jsx(ia, { size: 16 }),
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
                                            value: P.unit_type,
                                            onChange: (D) =>
                                              z(H, "unit_type", D.target.value),
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
                                            value: P.unit_name,
                                            onChange: (D) =>
                                              z(H, "unit_name", D.target.value),
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
                                            value: P.quantity,
                                            onChange: (D) =>
                                              z(H, "quantity", D.target.value),
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
                                            value: P.sort_order,
                                            onChange: (D) =>
                                              z(
                                                H,
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
                                              parseInt(P.sort_order) > 1 && "*",
                                            ],
                                          }),
                                          o.jsx("input", {
                                            type: "number",
                                            min: "0",
                                            step: "0.1",
                                            value: P.conversion_rate,
                                            onChange: (D) =>
                                              z(
                                                H,
                                                "conversion_rate",
                                                D.target.value
                                              ),
                                            className:
                                              "w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
                                            placeholder:
                                              parseInt(P.sort_order) === 1
                                                ? "第一層單位無需填寫"
                                                : "與上層單位的換算比例",
                                            disabled:
                                              parseInt(P.sort_order) === 1,
                                          }),
                                          parseInt(P.sort_order) > 1 &&
                                            P.conversion_rate &&
                                            o.jsxs("p", {
                                              className:
                                                "text-xs text-slate-500 mt-1",
                                              children: [
                                                "1 ",
                                                ((A = i[H - 1]) == null
                                                  ? void 0
                                                  : A.unit_name) || "上層單位",
                                                " = ",
                                                P.conversion_rate,
                                                " ",
                                                P.unit_name,
                                              ],
                                            }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            },
                            P.GUID
                          );
                        }),
                        o.jsxs("button", {
                          onClick: U,
                          className:
                            "w-full py-3 border-2 border-dashed border-slate-300 rounded-lg text-slate-600 hover:border-blue-500 hover:text-blue-600 transition-colors flex items-center justify-center gap-2",
                          children: [
                            o.jsx(Bl, { size: 20 }),
                            o.jsx("span", { children: "新增單位" }),
                          ],
                        }),
                      ],
                    })
                  : o.jsx("div", {
                      className: "space-y-3",
                      children: a.map((P, H) => {
                        var A;
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
                                          children: P.unit_type,
                                        }),
                                        o.jsx("span", {
                                          className:
                                            "text-lg font-semibold text-slate-800",
                                          children: P.unit_name,
                                        }),
                                      ],
                                    }),
                                    o.jsxs("div", {
                                      className: "space-y-1",
                                      children: [
                                        P.conversion_rate &&
                                          o.jsxs("p", {
                                            className: "text-sm text-slate-600",
                                            children: [
                                              "換算比例：1 ",
                                              ((A = a[H - 1]) == null
                                                ? void 0
                                                : A.unit_name) || "上層單位",
                                              " = ",
                                              P.conversion_rate,
                                              " ",
                                              P.unit_name,
                                            ],
                                          }),
                                        P.quantity &&
                                          o.jsxs("p", {
                                            className: "text-sm text-slate-600",
                                            children: [
                                              "最小操作數量：",
                                              P.quantity,
                                              " ",
                                              P.unit_name,
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
                                    children: ["順序 ", P.sort_order],
                                  }),
                                }),
                              ],
                            }),
                          },
                          P.GUID
                        );
                      }),
                    }),
              }),
              o.jsx("div", {
                className:
                  "flex justify-between items-center gap-3 p-6 border-t border-slate-200 bg-slate-50",
                children: V
                  ? o.jsxs(o.Fragment, {
                      children: [
                        o.jsx("button", {
                          onClick: k,
                          disabled: x,
                          className:
                            "px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-slate-700 transition-colors disabled:opacity-50",
                          children: "取消",
                        }),
                        o.jsx("button", {
                          onClick: R,
                          disabled: x,
                          className:
                            "px-6 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-white transition-colors flex items-center gap-2 disabled:opacity-50",
                          children: x
                            ? o.jsxs(o.Fragment, {
                                children: [
                                  o.jsx(Ke, {}),
                                  o.jsx("span", { children: "儲存中..." }),
                                ],
                              })
                            : o.jsxs(o.Fragment, {
                                children: [
                                  o.jsx(Cp, { size: 16 }),
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
                            o.jsx(po, { size: 16 }),
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
  Fp = ({ isOpen: e, onClose: t, drugName: n, drugCode: r, servers: l }) => {
    if (!e) return null;
    const s = l.filter((i) => i.server_type === "藥庫"),
      a = l.filter((i) => i.server_type !== "藥庫"),
      u = (i, f) => (i < f ? "text-red-600" : "text-green-600");
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
                      children: o.jsx(Ep, {
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
                  children: o.jsx(ln, { size: 24 }),
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
                              s.map((i, f) =>
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
                                                children: i.lots.map((N, w) =>
                                                  o.jsxs(
                                                    "span",
                                                    {
                                                      className: "text-xs",
                                                      children: [
                                                        N,
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
                                                  (N, w) =>
                                                    o.jsx(
                                                      "span",
                                                      {
                                                        className: "text-xs",
                                                        children: N,
                                                      },
                                                      w
                                                    )
                                                ),
                                              })
                                            : "-",
                                      }),
                                    ],
                                  },
                                  f
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
                                      .reduce((i, f) => i + f.stock, 0)
                                      .toLocaleString(),
                                  }),
                                  o.jsx("td", {
                                    className:
                                      "px-4 py-3 text-sm text-center text-slate-800",
                                    children: s
                                      .reduce((i, f) => i + f.safety, 0)
                                      .toLocaleString(),
                                  }),
                                  o.jsx("td", {
                                    className:
                                      "px-4 py-3 text-sm text-center text-slate-800",
                                    children: s
                                      .reduce((i, f) => i + f.standard, 0)
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
                              a.map((i, f) =>
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
                                                children: i.lots.map((N, w) =>
                                                  o.jsxs(
                                                    "span",
                                                    {
                                                      className: "text-xs",
                                                      children: [
                                                        N,
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
                                                  (N, w) =>
                                                    o.jsx(
                                                      "span",
                                                      {
                                                        className: "text-xs",
                                                        children: N,
                                                      },
                                                      w
                                                    )
                                                ),
                                              })
                                            : "-",
                                      }),
                                    ],
                                  },
                                  f
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
                                      .reduce((i, f) => i + f.stock, 0)
                                      .toLocaleString(),
                                  }),
                                  o.jsx("td", {
                                    className:
                                      "px-4 py-3 text-sm text-center text-slate-800",
                                    children: a
                                      .reduce((i, f) => i + f.safety, 0)
                                      .toLocaleString(),
                                  }),
                                  o.jsx("td", {
                                    className:
                                      "px-4 py-3 text-sm text-center text-slate-800",
                                    children: a
                                      .reduce((i, f) => i + f.standard, 0)
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
  wr = async (e) => {
    try {
      const t = { ValueAry: [e] };
      console.log("=== API Request: /api/medUnit/get_by_Med_GUID ==="),
        console.log("Request Data:", t),
        console.log("Med GUID:", e);
      const n = await Pe("/api/medUnit/get_by_Med_GUID", {
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
  da = async (e) => {
    try {
      const t = { Data: e };
      console.log("=== API Request: /api/medUnit/update ==="),
        console.log("Request Data:", JSON.stringify(t, null, 2)),
        await Pe("/api/medUnit/update", { method: "POST", body: t }),
        console.log("Units updated successfully");
    } catch (t) {
      throw (console.error("Failed to update units:", t), t);
    }
  },
  fa = async (e) =>
    await Pe("/api/consumption/get_avg_by_start_end", {
      method: "POST",
      body: e,
    }),
  Op = async () => {
    try {
      const t = (
          await Pe("/api/ServerSetting/get_name", { method: "POST", body: {} })
        ).Data,
        n = new Date(),
        r = new Date();
      r.setDate(r.getDate() - 30);
      const l = (i) => {
          const f = i.getFullYear(),
            N = String(i.getMonth() + 1).padStart(2, "0"),
            w = String(i.getDate()).padStart(2, "0"),
            x = String(i.getHours()).padStart(2, "0"),
            E = String(i.getMinutes()).padStart(2, "0"),
            _ = String(i.getSeconds()).padStart(2, "0");
          return `${f}-${N}-${w} ${x}:${E}:${_}`;
        },
        s = t.map((i) =>
          Promise.all([
            Pe("/api/stock/get_stock", {
              method: "POST",
              body: { ServerName: i.name, ServerType: i.type },
            }),
            fa({
              ValueAry: [l(r), l(n)],
              ServerName: i.name,
              ServerType: i.type,
            }),
          ]).then(([f, N]) => ({
            server: i,
            stockData: f.Data,
            consumptionData: N.Data,
          }))
        ),
        a = await Promise.all(s),
        u = new Map();
      return (
        a.forEach(({ server: i, stockData: f, consumptionData: N }) => {
          const w = new Map(
            N.map((x) => [
              x.CODE,
              typeof x.ANG_QTY == "string"
                ? parseFloat(x.ANG_QTY) || 0
                : x.ANG_QTY || 0,
            ])
          );
          f.forEach((x) => {
            var z, U, G, P, H;
            const E = x.code,
              _ = x.qty.reduce((A, D) => A + parseFloat(D || "0"), 0),
              b = x.content.reduce((A, D) => {
                const $ = D.Sub_content.reduce(
                  (W, re) => W + parseFloat(re.END_QTY || "0"),
                  0
                );
                return A + $;
              }, 0),
              V = x.content.reduce(
                (A, D) =>
                  D.Sub_content && D.Sub_content.length > 0
                    ? A
                    : A + parseFloat(D.START_QTY || "0"),
                0
              ),
              h = w.get(E) || 0,
              p = parseFloat(
                ((z = x.Classify) == null ? void 0 : z.safe_day) || "0"
              ),
              g = parseFloat(
                ((U = x.Classify) == null ? void 0 : U.standard_day) || "0"
              ),
              k = h * p,
              M = h * g,
              R = {
                server_name: i.name,
                server_type: i.type,
                stock: _,
                safety: k,
                standard: M,
                lots: x.lot || [],
                expiry_dates: x.expiry_date || [],
                quantities: x.qty || [],
                full_data: x,
              };
            if (u.has(E)) {
              const A = u.get(E);
              A.servers.push(R),
                (A.verified_qty = Math.max(A.verified_qty, b)),
                (A.transit_qty = Math.max(A.transit_qty, V));
            } else
              u.set(E, {
                code: x.code,
                material_no: x.material_no,
                name: x.name,
                cht_name:
                  ((G = x.med_cloud) == null ? void 0 : G.CHT_NAME) || "",
                unit: ((P = x.med_cloud) == null ? void 0 : P.MIN_PAKAGE) || "",
                type: ((H = x.med_cloud) == null ? void 0 : H.TYPE) || "",
                verified_qty: b,
                transit_qty: V,
                servers: [R],
              });
          });
        }),
        Array.from(u.values())
      );
    } catch (e) {
      throw (console.error("Failed to fetch inventory data:", e), e);
    }
  },
  Qp = ({ toast: e, onClose: t }) => {
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
            return o.jsx(vp, { className: "w-5 h-5 text-green-500" });
          case "error":
            return o.jsx(bp, { className: "w-5 h-5 text-red-500" });
          case "warning":
            return o.jsx(El, { className: "w-5 h-5 text-yellow-500" });
          case "info":
            return o.jsx(El, { className: "w-5 h-5 text-blue-500" });
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
          children: o.jsx(ln, { className: "w-4 h-4" }),
        }),
      ],
    });
  },
  Ac = C.createContext(void 0),
  pa = () => {
    const e = C.useContext(Ac);
    if (!e) throw new Error("useToast must be used within ToastProvider");
    return e;
  },
  Ap = ({ children: e }) => {
    const [t, n] = C.useState([]),
      r = C.useCallback((s, a = "info") => {
        const u = `toast-${Date.now()}-${Math.random()}`;
        n((i) => [...i, { id: u, message: s, type: a }]);
      }, []),
      l = C.useCallback((s) => {
        n((a) => a.filter((u) => u.id !== s));
      }, []);
    return o.jsxs(Ac.Provider, {
      value: { showToast: r },
      children: [
        e,
        o.jsx("div", {
          className: "fixed top-4 right-4 z-[9999] flex flex-col gap-2",
          children: t.map((s) => o.jsx(Qp, { toast: s, onClose: l }, s.id)),
        }),
      ],
    });
  },
  Vp = () => {
    const { showToast: e } = pa(),
      [t, n] = C.useState([]),
      [r, l] = C.useState(!0),
      [s, a] = C.useState(""),
      [u, i] = C.useState(new Set(["all"])),
      [f, N] = C.useState("all"),
      [w, x] = C.useState(null),
      [E, _] = C.useState(null),
      [b, V] = C.useState(!1),
      [h, p] = C.useState(!1);
    C.useEffect(() => {
      g();
    }, []);
    const g = async () => {
        try {
          l(!0);
          const D = await Op();
          n(D);
        } catch (D) {
          console.error("Failed to load inventory data:", D),
            e("載入庫存資料失敗", "error");
        } finally {
          l(!1);
        }
      },
      k = (D, $) => {
        D.preventDefault(), x({ x: D.clientX, y: D.clientY, item: $ });
      },
      M = (D) => {
        _(D), p(!0);
      },
      R = () => {
        x(null);
      },
      z = () => {
        w != null && w.item && (_(w.item), V(!0), x(null));
      },
      U = () => {
        V(!1), _(null);
      },
      G = C.useMemo(
        () => Array.from(new Set(t.map(($) => $.type).filter(($) => $))).sort(),
        [t]
      ),
      P = (D) => {
        i(($) => {
          const W = new Set($);
          return D === "all"
            ? new Set(["all"])
            : (W.delete("all"),
              W.has(D) ? W.delete(D) : W.add(D),
              W.size === 0 ? new Set(["all"]) : W);
        });
      },
      H = C.useMemo(
        () =>
          t
            .filter(($) => {
              const W =
                  $.code.toLowerCase().includes(s.toLowerCase()) ||
                  $.name.toLowerCase().includes(s.toLowerCase()) ||
                  $.cht_name.toLowerCase().includes(s.toLowerCase()) ||
                  $.material_no.toLowerCase().includes(s.toLowerCase()),
                re = u.has("all") || u.has($.type),
                ie = (() => {
                  if (f === "all") return !0;
                  const d = $.servers.some((m) => m.stock < m.safety);
                  return f === "low" ? d : !d;
                })();
              return W && re && ie;
            })
            .sort(($, W) => {
              const re = (I) => {
                  let B = null;
                  return (
                    I.servers.forEach((te) => {
                      te.full_data.content.forEach((de) => {
                        de.Sub_content.forEach((ue) => {
                          if (ue.OP_TIME) {
                            const Ve = new Date(ue.OP_TIME);
                            (!B || Ve > B) && (B = Ve);
                          }
                        });
                      });
                    }),
                    B
                  );
                },
                ie = (I) => {
                  let B = null;
                  return (
                    I.servers.forEach((te) => {
                      te.full_data.content.forEach((de) => {
                        if (de.DELIVERY_TIME) {
                          const ue = new Date(de.DELIVERY_TIME);
                          (!B || ue < B) && (B = ue);
                        }
                      });
                    }),
                    B
                  );
                },
                d = (I) => I.servers.some((B) => B.stock < B.safety),
                m = $.verified_qty,
                v = W.verified_qty,
                c = $.transit_qty,
                S = W.transit_qty,
                y = m !== 0,
                j = v !== 0,
                L = m === 0 && c !== 0,
                O = v === 0 && S !== 0,
                Q = !y && !L && d($),
                K = !j && !O && d(W);
              if (y && !j) return -1;
              if (!y && j) return 1;
              if (y && j) {
                const I = re($),
                  B = re(W);
                return I && B ? B.getTime() - I.getTime() : I ? -1 : B ? 1 : 0;
              }
              if (L && !O) return -1;
              if (!L && O) return 1;
              if (L && O) {
                const I = ie($),
                  B = ie(W);
                return I && B ? I.getTime() - B.getTime() : I ? -1 : B ? 1 : 0;
              }
              return Q && !K ? -1 : !Q && K ? 1 : $.code.localeCompare(W.code);
            }),
        [t, s, u, f]
      ),
      A = (D, $) =>
        D < $
          ? { color: "text-red-600", bgColor: "bg-red-50", label: "低於安全量" }
          : { color: "text-green-600", bgColor: "bg-green-50", label: "正常" };
    return r
      ? o.jsx("div", {
          className: "flex justify-center items-center py-12",
          children: o.jsx(Ke, {}),
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
                          o.jsx(_p, {
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
                        value: f,
                        onChange: (D) => N(D.target.value),
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
                            onClick: () => P("all"),
                            className: `px-4 py-2 rounded-lg font-medium transition-all ${
                              u.has("all")
                                ? "bg-blue-600 text-white shadow-md"
                                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                            }`,
                            children: "全部類別",
                          }),
                          G.map((D) =>
                            o.jsx(
                              "button",
                              {
                                onClick: () => P(D),
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
                        children: H.map((D) => {
                          const $ = D.servers.filter(
                              (j) => j.server_type === "藥庫"
                            ),
                            W = D.servers.filter(
                              (j) => j.server_type !== "藥庫"
                            ),
                            re = $.reduce((j, L) => j + L.stock, 0),
                            ie = $.reduce((j, L) => j + L.safety, 0),
                            d = $.reduce((j, L) => j + L.standard, 0),
                            m = W.reduce((j, L) => j + L.stock, 0),
                            v = W.reduce((j, L) => j + L.safety, 0),
                            c = W.reduce((j, L) => j + L.standard, 0),
                            S = A(re, ie),
                            y = A(m, v);
                          return o.jsxs(
                            "tr",
                            {
                              className:
                                "hover:bg-slate-50 transition-colors cursor-pointer",
                              onClick: () => M(D),
                              onContextMenu: (j) => k(j, D),
                              children: [
                                o.jsx("td", {
                                  className: "px-6 py-4 text-sm",
                                  children: D.code,
                                }),
                                o.jsx("td", {
                                  className: "px-6 py-4 text-sm",
                                  children: D.material_no,
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
                                  className: `px-3 py-4 text-sm text-center font-semibold ${S.color}`,
                                  children:
                                    $.length > 0 ? re.toLocaleString() : "-",
                                }),
                                o.jsx("td", {
                                  className:
                                    "px-3 py-4 text-sm text-center text-slate-600",
                                  children:
                                    $.length > 0 ? ie.toLocaleString() : "-",
                                }),
                                o.jsx("td", {
                                  className:
                                    "px-3 py-4 text-sm text-center text-slate-600",
                                  children:
                                    $.length > 0 ? d.toLocaleString() : "-",
                                }),
                                o.jsx("td", {
                                  className: `px-3 py-4 text-sm text-center font-semibold ${y.color}`,
                                  children:
                                    W.length > 0 ? m.toLocaleString() : "-",
                                }),
                                o.jsx("td", {
                                  className:
                                    "px-3 py-4 text-sm text-center text-slate-600",
                                  children:
                                    W.length > 0 ? v.toLocaleString() : "-",
                                }),
                                o.jsx("td", {
                                  className:
                                    "px-3 py-4 text-sm text-center text-slate-600",
                                  children:
                                    W.length > 0 ? c.toLocaleString() : "-",
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
                H.length === 0 &&
                  o.jsxs("div", {
                    className: "text-center py-12",
                    children: [
                      o.jsx(_r, {
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
              children: ["共顯示 ", H.length, " 筆資料"],
            }),
            w &&
              o.jsx(ua, { x: w.x, y: w.y, onClose: R, onViewUnitDetails: z }),
            b &&
              E &&
              E.servers.length > 0 &&
              o.jsx(ca, {
                isOpen: b,
                onClose: U,
                medGuid: E.servers[0].full_data.med_cloud.GUID,
                medName: E.name,
                onFetchUnitDetails: wr,
                onUpdateUnits: da,
              }),
            h &&
              E &&
              o.jsx(Fp, {
                isOpen: h,
                onClose: () => p(!1),
                drugName: E.name,
                drugCode: E.code,
                servers: E.servers,
              }),
          ],
        });
  },
  Bp = async () =>
    await Pe("/api/ServerSetting/get_name", { method: "POST", body: {} }),
  Er = async (e) =>
    await Pe("/api/stock/get_stock", { method: "POST", body: e }),
  Hp = async (e) =>
    await Pe("/api/medClassify/add", { method: "POST", body: e }),
  Wp = async (e) =>
    await Pe("/api/medClassify/update", { method: "POST", body: e }),
  Ni = async (e) =>
    await Pe("/api/stock/update_stock", { method: "POST", body: e }),
  Gp = async () =>
    await Pe("/api/medClassify/get_all", { method: "POST", body: {} }),
  qp = () => {
    const [e, t] = C.useState([]),
      [n, r] = C.useState(null),
      [l, s] = C.useState([]),
      [a, u] = C.useState([]),
      [i, f] = C.useState(new Set()),
      [N, w] = C.useState("all"),
      [x, E] = C.useState(!0),
      [_, b] = C.useState(null),
      [V, h] = C.useState(!1),
      [p, g] = C.useState(!1),
      [k, M] = C.useState(null),
      [R, z] = C.useState(!1),
      [U, G] = C.useState("");
    C.useEffect(() => {
      H(), P();
    }, []),
      C.useEffect(() => {
        n && A(n);
      }, [n]);
    const P = async () => {
        try {
          const m = await Gp();
          m.Code === 200 && m.Data && u(m.Data);
        } catch (m) {
          console.error("Failed to fetch classifications:", m);
        }
      },
      H = async () => {
        try {
          E(!0);
          const m = await Bp();
          if (m.Code === 200 && m.Data) {
            const v = [...m.Data].sort((c, S) =>
              c.type === "藥庫" && S.type !== "藥庫"
                ? -1
                : c.type !== "藥庫" && S.type === "藥庫"
                ? 1
                : 0
            );
            t(v), v.length > 0 && r(v[0]);
          } else b(m.Result || "無法取得伺服器設定");
        } catch (m) {
          console.error("Failed to fetch server settings:", m),
            b("載入伺服器設定時發生錯誤");
        } finally {
          E(!1);
        }
      },
      A = async (m) => {
        try {
          E(!0), b(null);
          const v = await Er({ ServerName: m.name, ServerType: m.type });
          v.Code === 200 && v.Data
            ? s(v.Data)
            : (b(v.Result || "無法取得庫存資料"), s([]));
        } catch (v) {
          console.error("Failed to fetch stock data:", v),
            b("載入庫存資料時發生錯誤"),
            s([]);
        } finally {
          E(!1);
        }
      },
      D = C.useMemo(() => {
        const m = new Set();
        return (
          l.forEach((v) => {
            var c;
            (c = v.med_cloud) != null && c.TYPE && m.add(v.med_cloud.TYPE);
          }),
          Array.from(m).sort()
        );
      }, [l]),
      $ = C.useMemo(
        () =>
          N === "all"
            ? l
            : l.filter((m) => {
                var v;
                return ((v = m.med_cloud) == null ? void 0 : v.TYPE) === N;
              }),
        [l, N]
      ),
      W = C.useMemo(() => {
        const m = new Map();
        return (
          $.forEach((c) => {
            const S = c.Classify_GUID || "unclassified";
            m.has(S) || m.set(S, { classify: c.Classify, items: [] }),
              m.get(S).items.push(c);
          }),
          Array.from(m.entries())
            .map(([c, S]) => ({ guid: c, ...S }))
            .sort((c, S) => {
              var L, O;
              const y =
                  ((L = c.classify) == null ? void 0 : L.name) || "未分類",
                j = ((O = S.classify) == null ? void 0 : O.name) || "未分類";
              return y.localeCompare(j, "zh-TW");
            })
        );
      }, [$]),
      re = (m) => {
        f((v) => {
          const c = new Set(v);
          return c.has(m) ? c.delete(m) : c.add(m), c;
        });
      },
      ie = async (m, v) => {
        try {
          console.log("Updating drug classification:", {
            drugGuid: m,
            classifyGuid: v,
          });
          const c = await Ni({
            ServerName: (n == null ? void 0 : n.name) || "",
            ServerType: (n == null ? void 0 : n.type) || "",
            Data: { GUID: m, Classify_GUID: v },
          });
          console.log("Update drug classification response:", c),
            c.Code === 200
              ? (n && (await A(n)), await P())
              : (console.error("Update failed with response:", c),
                alert(`更新失敗: ${c.Result || "未知錯誤"}`));
        } catch (c) {
          console.error(
            "Failed to update drug classification - Full error:",
            c
          );
          const S = c instanceof Error ? c.message : "更新藥品分類時發生錯誤";
          alert(`更新失敗: ${S}`);
        }
      },
      d = async (m, v) => {
        const c = l.filter((y) => {
          var j;
          return ((j = y.med_cloud) == null ? void 0 : j.TYPE) === m;
        });
        if (c.length === 0) {
          alert("沒有找到該類別的藥品");
          return;
        }
        if (
          confirm(`確定要將 ${c.length} 個「${m}」類別的藥品統一設定分類嗎？`)
        )
          try {
            const y = c.map((L) => ({ GUID: L.GUID, Classify_GUID: v })),
              j = await Ni({
                ServerName: (n == null ? void 0 : n.name) || "",
                ServerType: (n == null ? void 0 : n.type) || "",
                Data: y,
              });
            j.Code === 200
              ? (alert(`批次更新完成
成功更新 ${c.length} 項藥品分類`),
                n && (await A(n)),
                await P())
              : alert(`批次更新失敗: ${j.Result || "未知錯誤"}`);
          } catch (y) {
            console.error("Batch update error:", y);
            const j = y instanceof Error ? y.message : "批次更新時發生錯誤";
            alert(`批次更新失敗: ${j}`);
          }
      };
    return x && e.length === 0
      ? o.jsx("div", {
          className: "flex items-center justify-center h-96",
          children: o.jsx(Ke, { size: "large" }),
        })
      : o.jsxs("div", {
          className: "space-y-6",
          children: [
            _ &&
              o.jsxs("div", {
                className:
                  "p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg flex items-center gap-2",
                children: [
                  o.jsx(El, { size: 20 }),
                  o.jsx("span", { children: _ }),
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
                        children: e.map((m) =>
                          o.jsx(
                            "button",
                            {
                              onClick: () => r(m),
                              className: `px-4 py-2 rounded-lg font-medium transition-colors ${
                                (n == null ? void 0 : n.name) === m.name &&
                                (n == null ? void 0 : n.type) === m.type
                                  ? "bg-blue-600 text-white"
                                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                              }`,
                              children: m.name,
                            },
                            `${m.name}-${m.type}`
                          )
                        ),
                      }),
                    }),
                    o.jsx("div", {
                      className: "flex gap-2",
                      children: o.jsxs("button", {
                        onClick: () => h(!0),
                        className:
                          "flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors",
                        children: [
                          o.jsx(Bl, { size: 18 }),
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
                              N === "all"
                                ? "bg-blue-600 text-white shadow-md"
                                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                            }`,
                            children: "全部類別",
                          }),
                          D.map((m) =>
                            o.jsx(
                              "button",
                              {
                                onClick: () => w(m),
                                className: `px-4 py-2 rounded-lg font-medium transition-all ${
                                  N === m
                                    ? "bg-blue-600 text-white shadow-md"
                                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                                }`,
                                children: m,
                              },
                              m
                            )
                          ),
                        ],
                      }),
                      N !== "all" &&
                        o.jsx("div", {
                          className: "pt-2 border-t border-slate-200",
                          children: o.jsxs("button", {
                            onClick: () => {
                              G(N), z(!0);
                            },
                            className:
                              "flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors",
                            children: [
                              o.jsx(po, { size: 18 }),
                              o.jsxs("span", {
                                children: ["批次設定「", N, "」分類"],
                              }),
                            ],
                          }),
                        }),
                    ],
                  }),
                }),
              ],
            }),
            x && n
              ? o.jsx("div", {
                  className: "flex items-center justify-center h-64",
                  children: o.jsx(Ke, { size: "large" }),
                })
              : l.length === 0
              ? o.jsxs("div", {
                  className:
                    "text-center py-12 bg-white rounded-lg shadow-sm border border-slate-200",
                  children: [
                    o.jsx(_r, {
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
                  children: W.map((m) => {
                    const v = i.has(m.guid);
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
                                  onClick: () => re(m.guid),
                                  className:
                                    "flex items-center gap-4 flex-1 text-left hover:bg-slate-100 -m-4 p-4 rounded transition-colors",
                                  children: [
                                    v
                                      ? o.jsx(Sp, {
                                          size: 20,
                                          className: "text-slate-600",
                                        })
                                      : o.jsx(wp, {
                                          size: 20,
                                          className: "text-slate-600",
                                        }),
                                    o.jsx("h3", {
                                      className:
                                        "text-lg font-semibold text-slate-800",
                                      children: m.classify
                                        ? m.classify.name
                                        : "未分類",
                                    }),
                                    o.jsxs("span", {
                                      className: "text-sm text-slate-500",
                                      children: [
                                        "(",
                                        m.items.length,
                                        " 項藥品)",
                                      ],
                                    }),
                                    m.classify &&
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
                                                  m.classify.safe_day,
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
                                                  m.classify.standard_day,
                                                  " 天",
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                  ],
                                }),
                                m.classify &&
                                  o.jsxs("button", {
                                    onClick: (c) => {
                                      c.stopPropagation(), M(m.classify), g(!0);
                                    },
                                    className:
                                      "flex items-center gap-2 px-3 py-1.5 text-sm bg-slate-100 text-slate-700 rounded hover:bg-slate-200 transition-colors ml-4",
                                    children: [
                                      o.jsx(po, { size: 14 }),
                                      o.jsx("span", { children: "編輯" }),
                                    ],
                                  }),
                              ],
                            }),
                          }),
                          v &&
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
                                    children: m.items.map((c) => {
                                      var S;
                                      return o.jsxs(
                                        "tr",
                                        {
                                          className:
                                            "hover:bg-slate-50 transition-colors",
                                          children: [
                                            o.jsx("td", {
                                              className:
                                                "px-6 py-4 text-sm font-medium text-slate-900",
                                              children: c.code,
                                            }),
                                            o.jsx("td", {
                                              className:
                                                "px-6 py-4 text-sm text-slate-700",
                                              children: c.name,
                                            }),
                                            o.jsx("td", {
                                              className:
                                                "px-6 py-4 text-sm text-slate-700",
                                              children: c.material_no || "-",
                                            }),
                                            o.jsx("td", {
                                              className:
                                                "px-6 py-4 text-sm text-slate-700",
                                              children: o.jsx("span", {
                                                className:
                                                  "inline-block px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium",
                                                children:
                                                  ((S = c.med_cloud) == null
                                                    ? void 0
                                                    : S.TYPE) || "-",
                                              }),
                                            }),
                                            o.jsx("td", {
                                              className: "px-6 py-4",
                                              children: o.jsxs("select", {
                                                value: c.Classify_GUID || "",
                                                onChange: (y) =>
                                                  ie(c.GUID, y.target.value),
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
                                        c.GUID
                                      );
                                    }),
                                  }),
                                ],
                              }),
                            }),
                        ],
                      },
                      m.guid
                    );
                  }),
                }),
            V &&
              o.jsx(ki, {
                onClose: () => h(!1),
                onSuccess: () => {
                  h(!1), P(), n && A(n);
                },
              }),
            p &&
              k &&
              o.jsx(ki, {
                classify: k,
                onClose: () => {
                  g(!1), M(null);
                },
                onSuccess: () => {
                  g(!1), M(null), P(), n && A(n);
                },
              }),
            R &&
              o.jsx(Yp, {
                drugType: U,
                classifications: a,
                onClose: () => {
                  z(!1), G("");
                },
                onConfirm: (m) => {
                  d(U, m), z(!1), G("");
                },
              }),
          ],
        });
  },
  ki = ({ classify: e, onClose: t, onSuccess: n }) => {
    const [r, l] = C.useState((e == null ? void 0 : e.name) || ""),
      [s, a] = C.useState((e == null ? void 0 : e.safe_day.toString()) || ""),
      [u, i] = C.useState(
        (e == null ? void 0 : e.standard_day.toString()) || ""
      ),
      [f, N] = C.useState(!1);
    C.useEffect(() => {
      e
        ? (l(e.name), a(e.safe_day.toString()), i(e.standard_day.toString()))
        : (l(""), a(""), i(""));
    }, [e]);
    const w = async (x) => {
      x.preventDefault(), N(!0);
      try {
        let E;
        e
          ? (E = await Wp({
              Data: { GUID: e.GUID, name: r, safe_day: s, standard_day: u },
            }))
          : (E = await Hp({ Data: { name: r, safe_day: s, standard_day: u } })),
          E.Code === 200 ? n() : alert(E.Result || "操作失敗");
      } catch (E) {
        console.error("Failed to save classification:", E),
          alert("儲存分類時發生錯誤");
      } finally {
        N(!1);
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
                children: o.jsx(ln, { size: 20 }),
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
                    onChange: (x) => l(x.target.value),
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
                    onChange: (x) => a(x.target.value),
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
                    onChange: (x) => i(x.target.value),
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
                    disabled: f,
                    className:
                      "flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed",
                    children: f ? "處理中..." : "儲存",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  Yp = ({ drugType: e, classifications: t, onClose: n, onConfirm: r }) => {
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
                children: o.jsx(ln, { size: 20 }),
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
  Hl = async () =>
    await Pe("/api/ServerSetting/get_name", { method: "POST", body: {} }),
  Kp = ({
    isOpen: e,
    onClose: t,
    items: n,
    onFetchUnitDetails: r,
    destinationServerName: l,
  }) => {
    const { showToast: s } = pa(),
      [a, u] = C.useState([]),
      [i, f] = C.useState(!1),
      [N, w] = C.useState(new Map()),
      [x, E] = C.useState([]),
      [_, b] = C.useState(null),
      [V, h] = C.useState(new Map()),
      [p, g] = C.useState([]),
      [k, M] = C.useState(!1),
      [R, z] = C.useState("");
    C.useEffect(() => {
      e && U();
    }, [e]),
      C.useEffect(() => {
        e && n.length > 0 && _ && P();
      }, [e, n, _]);
    const U = async () => {
        try {
          const m = (await Hl()).Data.filter((v) => v.type === "藥庫");
          E(m), m.length > 0 && b(m[0]);
        } catch (d) {
          console.error("Failed to fetch warehouses:", d);
        }
      },
      G = async () => {
        var d;
        if (!_) return console.log("⚠️ No warehouse selected"), new Map();
        try {
          console.log("=== Fetching Source Stock ==="),
            console.log("Selected Warehouse:", _);
          const m = await Er({ ServerName: _.name, ServerType: _.type });
          console.log("Stock API Response:", m),
            console.log(
              "Stock Data Length:",
              (d = m.Data) == null ? void 0 : d.length
            ),
            g(m.Data || []);
          const v = new Map();
          return (
            m.Data.forEach((c) => {
              let S = 0;
              Array.isArray(c.qty)
                ? ((S = c.qty.reduce((y, j) => y + parseFloat(j || "0"), 0)),
                  console.log(
                    `📦 code: ${c.code} | qty array: ${JSON.stringify(
                      c.qty
                    )} = ${S}`
                  ))
                : ((S =
                    typeof c.qty == "number"
                      ? c.qty
                      : parseFloat(c.qty || "0")),
                  console.log(`📦 code: ${c.code} | qty: ${c.qty} = ${S}`)),
                v.set(c.code, S);
            }),
            console.log("Stock Map Size:", v.size),
            console.log("Stock Map Keys (codes):", Array.from(v.keys())),
            h(v),
            v
          );
        } catch (m) {
          return (
            console.error("❌ Failed to fetch source stock:", m), new Map()
          );
        }
      },
      P = async () => {
        f(!0);
        try {
          const d = n.map(async (y) => {
              const j = Math.max(0, y.standardQuantity - y.currentStock);
              if (!y.medGuid)
                return {
                  code: y.code,
                  itemCode: y.material_no,
                  name: y.name,
                  rawQuantity: j,
                  adjustedQuantity: j,
                  convertedUnit: `${j} (無單位資訊)`,
                  conversionRate: 1,
                  displayUnitName: "",
                  originalItem: y,
                  sourceStock: null,
                };
              try {
                const L = await r(y.medGuid);
                if (!L || L.length === 0)
                  return {
                    code: y.code,
                    itemCode: y.material_no,
                    name: y.name,
                    rawQuantity: j,
                    adjustedQuantity: j,
                    convertedUnit: `${j} (無單位資訊)`,
                    conversionRate: 1,
                    displayUnitName: "",
                    originalItem: y,
                    sourceStock: null,
                  };
                const O = [...L].sort(
                    (je, he) =>
                      parseInt(je.sort_order) - parseInt(he.sort_order)
                  ),
                  Q = O[O.length - 1];
                if (!Q || !Q.conversion_rate) {
                  const je = (Q == null ? void 0 : Q.unit_name) || "";
                  return {
                    code: y.code,
                    itemCode: y.material_no,
                    name: y.name,
                    rawQuantity: j,
                    adjustedQuantity: j,
                    convertedUnit: `${j} ${je}`,
                    conversionRate: 1,
                    displayUnitName: je,
                    originalItem: y,
                    sourceStock: null,
                  };
                }
                const I = parseInt(Q.sort_order) - 1;
                let B;
                if (I < 1) B = Q.unit_name;
                else {
                  const je = L.find((he) => parseInt(he.sort_order) === I);
                  B = (je == null ? void 0 : je.unit_name) || Q.unit_name;
                }
                const te = parseFloat(Q.conversion_rate),
                  de = parseFloat(Q.quantity) || 0;
                let ue = Math.ceil(j / te) * te;
                ue < de && (ue = de);
                const Ve = ue / te;
                return {
                  code: y.code,
                  itemCode: y.material_no,
                  name: y.name,
                  rawQuantity: j,
                  adjustedQuantity: ue,
                  convertedUnit: `${Ve} ${B}`,
                  conversionRate: te,
                  displayUnitName: B,
                  originalItem: y,
                  sourceStock: null,
                };
              } catch (L) {
                return (
                  console.error(`Failed to fetch units for ${y.code}:`, L),
                  {
                    code: y.code,
                    itemCode: y.material_no,
                    name: y.name,
                    rawQuantity: j,
                    adjustedQuantity: j,
                    convertedUnit: `${j} (無法取得單位)`,
                    conversionRate: 1,
                    displayUnitName: "",
                    originalItem: y,
                    sourceStock: null,
                  }
                );
              }
            }),
            m = await Promise.all(d);
          console.log("=== Calculate Previews Results ==="),
            console.log("Results count:", m.length),
            console.log(
              "Preview codes:",
              m.map((y) => y.code)
            );
          const v = await G();
          console.log("Fresh Stock Data Size:", v.size);
          const c = m.map((y) => {
            const j = y.code,
              L = v.get(j) ?? null;
            return (
              console.log(`🔍 Matching stock for code: ${j} | stock: ${L}`),
              { ...y, sourceStock: L }
            );
          });
          console.log(
            "Results with stock:",
            c.map((y) => ({ code: y.code, sourceStock: y.sourceStock }))
          ),
            u(c);
          const S = new Map();
          c.forEach((y) => {
            const j = y.adjustedQuantity / y.conversionRate;
            S.set(y.code, { raw: y.rawQuantity, converted: j });
          }),
            w(S);
        } catch (d) {
          console.error("Failed to calculate previews:", d);
        } finally {
          f(!1);
        }
      },
      H = async (d, m) => {
        const v = parseFloat(m) || 0,
          c = a.find((S) => S.code === d);
        if (!(!c || !c.originalItem.medGuid))
          try {
            const S = await r(c.originalItem.medGuid);
            if (!S || S.length === 0) {
              const I =
                (Math.ceil(v / c.conversionRate) * c.conversionRate) /
                c.conversionRate;
              w((B) => {
                const te = new Map(B);
                return te.set(d, { raw: v, converted: I }), te;
              });
              return;
            }
            const y = [...S].sort(
                (K, I) => parseInt(K.sort_order) - parseInt(I.sort_order)
              ),
              j = y[y.length - 1],
              L = parseFloat(j.quantity) || 0;
            let O = Math.ceil(v / c.conversionRate) * c.conversionRate;
            O < L && (O = L);
            const Q = O / c.conversionRate;
            w((K) => {
              const I = new Map(K);
              return I.set(d, { raw: v, converted: Q }), I;
            });
          } catch (S) {
            console.error("Failed to fetch units for quantity adjustment:", S);
            const j =
              (Math.ceil(v / c.conversionRate) * c.conversionRate) /
              c.conversionRate;
            w((L) => {
              const O = new Map(L);
              return O.set(d, { raw: v, converted: j }), O;
            });
          }
      },
      A = (d, m) => {
        const v = parseFloat(m) || 0,
          c = a.find((y) => y.code === d);
        if (!c) return;
        const S = v * c.conversionRate;
        w((y) => {
          const j = new Map(y);
          return j.set(d, { raw: S, converted: v }), j;
        });
      },
      D = (d) => {
        const m = N.get(d.code);
        if (m) {
          const v = m.converted * d.conversionRate;
          return {
            rawQuantity: m.raw,
            adjustedQuantity: v,
            convertedCount: m.converted,
          };
        }
        return {
          rawQuantity: d.rawQuantity,
          adjustedQuantity: d.adjustedQuantity,
          convertedCount: d.adjustedQuantity / d.conversionRate,
        };
      },
      $ = (d) => {
        u((m) => m.filter((v) => v.code !== d)),
          w((m) => {
            const v = new Map(m);
            return v.delete(d), v;
          });
      },
      W = Ii.useMemo(() => {
        if (!R.trim()) return [];
        const d = new Set(a.map((S) => S.code)),
          m = R.toLowerCase(),
          v = p.filter((S) => {
            var Q, K, I, B;
            if (d.has(S.code)) return !1;
            const y =
                (Q = S.code) == null ? void 0 : Q.toLowerCase().includes(m),
              j = (K = S.name) == null ? void 0 : K.toLowerCase().includes(m),
              L =
                (I = S.cht_name) == null ? void 0 : I.toLowerCase().includes(m),
              O =
                (B = S.material_no) == null
                  ? void 0
                  : B.toLowerCase().includes(m);
            return y || j || L || O;
          }),
          c = new Map();
        return (
          v.forEach((S) => {
            c.has(S.code) || c.set(S.code, S);
          }),
          Array.from(c.values())
        );
      }, [R, p, a]),
      re = async (d) => {
        if (a.some((v) => v.code === d.code)) {
          s("此藥品已在列表中", "warning");
          return;
        }
        const m = {
          code: d.code,
          name: d.name,
          material_no: d.material_no,
          currentStock: 0,
          safeStock: 0,
          standardQuantity: 0,
          medGuid: d.GUID,
        };
        try {
          const v = await r(d.med_cloud.GUID);
          let c;
          if (!v || v.length === 0)
            c = {
              code: d.code,
              itemCode: d.material_no,
              name: d.name,
              rawQuantity: 0,
              adjustedQuantity: 0,
              convertedUnit: "0 (無單位資訊)",
              conversionRate: 1,
              displayUnitName: "",
              originalItem: m,
              sourceStock: V.get(d.code) ?? null,
            };
          else {
            const S = [...v].sort(
                (j, L) => parseInt(j.sort_order) - parseInt(L.sort_order)
              ),
              y = S[S.length - 1];
            if (!y || !y.conversion_rate) {
              const j = (y == null ? void 0 : y.unit_name) || "";
              c = {
                code: d.code,
                itemCode: d.material_no,
                name: d.name,
                rawQuantity: 0,
                adjustedQuantity: 0,
                convertedUnit: `0 ${j}`,
                conversionRate: 1,
                displayUnitName: j,
                originalItem: m,
                sourceStock: V.get(d.code) ?? null,
              };
            } else {
              const L = parseInt(y.sort_order) - 1;
              let O;
              if (L < 1) O = y.unit_name;
              else {
                const K = v.find((I) => parseInt(I.sort_order) === L);
                O = (K == null ? void 0 : K.unit_name) || y.unit_name;
              }
              const Q = parseFloat(y.conversion_rate);
              c = {
                code: d.code,
                itemCode: d.material_no,
                name: d.name,
                rawQuantity: 0,
                adjustedQuantity: 0,
                convertedUnit: `0 ${O}`,
                conversionRate: Q,
                displayUnitName: O,
                originalItem: m,
                sourceStock: V.get(d.code) ?? null,
              };
            }
          }
          u((S) => [...S, c]),
            w((S) => {
              const y = new Map(S);
              return y.set(d.code, { raw: 0, converted: 0 }), y;
            }),
            M(!1),
            z(""),
            s("藥品已成功新增", "success");
        } catch (v) {
          console.error("Failed to add drug:", v), s("新增藥品失敗", "error");
        }
      },
      ie = async () => {
        if (!_) {
          s("請選擇庫別", "warning");
          return;
        }
        if (a.length === 0) {
          s("請至少選擇一個藥品", "warning");
          return;
        }
        const d = zp();
        if (!d) {
          s("無法取得登入者資訊", "error");
          return;
        }
        const m = {
          Data: a.map((v) => {
            const c = N.get(v.code),
              S = c ? c.raw : v.adjustedQuantity;
            return {
              sourceStoreType: _.name,
              destinationStoreType: l,
              code: v.code,
              name: v.name,
              sourceStoreInventory: String(v.sourceStock ?? 0),
              issuedQuantity: String(S),
              reportName: d,
              state: "等待過帳",
            };
          }),
        };
        try {
          f(!0),
            await Pe("/api/drugStotreDistribution/add", {
              method: "POST",
              body: m,
            }),
            s("撥補單建立成功", "success"),
            t();
        } catch (v) {
          console.error("Failed to create replenishment:", v),
            s("撥補單建立失敗", "error");
        } finally {
          f(!1);
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
                            children: o.jsx(Mn, {
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
                        children: o.jsx(ln, { size: 24 }),
                      }),
                    ],
                  }),
                  x.length > 0 &&
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
                              value: (_ == null ? void 0 : _.name) || "",
                              onChange: (d) => {
                                const m = x.find(
                                  (v) => v.name === d.target.value
                                );
                                b(m || null);
                              },
                              className:
                                "px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white",
                              children: x.map((d) =>
                                o.jsx(
                                  "option",
                                  { value: d.name, children: d.name },
                                  d.name
                                )
                              ),
                            }),
                          ],
                        }),
                        o.jsxs("button", {
                          onClick: () => M(!k),
                          className:
                            "flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors",
                          children: [o.jsx(Bl, { size: 18 }), "新增藥品"],
                        }),
                      ],
                    }),
                ],
              }),
              k &&
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
                            value: R,
                            onChange: (d) => z(d.target.value),
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
                    W.length > 0 &&
                      o.jsx("div", {
                        className:
                          "mt-3 bg-white rounded-lg border border-slate-200 max-h-60 overflow-y-auto",
                        children: W.map((d) =>
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
                                          children: d.code,
                                        }),
                                        d.material_no &&
                                          o.jsx("span", {
                                            className:
                                              "inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded font-mono",
                                            children: d.material_no,
                                          }),
                                        o.jsx("span", {
                                          className:
                                            "font-medium text-slate-800",
                                          children: d.name,
                                        }),
                                      ],
                                    }),
                                    d.cht_name &&
                                      o.jsx("p", {
                                        className:
                                          "text-sm text-slate-500 mt-1",
                                        children: d.cht_name,
                                      }),
                                  ],
                                }),
                                o.jsx("button", {
                                  onClick: () => re(d),
                                  className:
                                    "ml-4 px-4 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors",
                                  children: "新增",
                                }),
                              ],
                            },
                            d.GUID
                          )
                        ),
                      }),
                    R &&
                      W.length === 0 &&
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
                      children: o.jsx(Ke, {}),
                    })
                  : a.length === 0
                  ? o.jsxs("div", {
                      className: "text-center py-12",
                      children: [
                        o.jsx(_r, {
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
                            children: a.map((d, m) => {
                              const v = D(d);
                              return o.jsxs(
                                "tr",
                                {
                                  className:
                                    "hover:bg-slate-50 transition-colors",
                                  children: [
                                    o.jsx("td", {
                                      className: "px-4 py-3 text-sm",
                                      children: d.code,
                                    }),
                                    o.jsx("td", {
                                      className: "px-4 py-3 text-sm",
                                      children: d.itemCode,
                                    }),
                                    o.jsx("td", {
                                      className:
                                        "px-4 py-3 text-sm text-slate-800 font-medium",
                                      children: d.name,
                                    }),
                                    o.jsx("td", {
                                      className: "px-4 py-3 text-sm text-right",
                                      children: o.jsx("span", {
                                        className: `font-semibold ${
                                          d.sourceStock !== null &&
                                          d.sourceStock < v.adjustedQuantity
                                            ? "text-red-600"
                                            : "text-green-600"
                                        }`,
                                        children:
                                          d.sourceStock !== null
                                            ? d.sourceStock
                                            : "-",
                                      }),
                                    }),
                                    o.jsx("td", {
                                      className: "px-4 py-3 text-sm text-right",
                                      children: o.jsx("input", {
                                        type: "number",
                                        min: "0",
                                        step: "1",
                                        value: v.rawQuantity,
                                        onChange: (c) =>
                                          H(d.code, c.target.value),
                                        className:
                                          "w-24 px-2 py-1 text-right border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                                      }),
                                    }),
                                    o.jsx("td", {
                                      className: "px-4 py-3 text-sm text-right",
                                      children: o.jsx("span", {
                                        className:
                                          v.adjustedQuantity !== v.rawQuantity
                                            ? "font-semibold text-orange-600"
                                            : "text-slate-600",
                                        children: v.adjustedQuantity,
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
                                            value: v.convertedCount,
                                            onChange: (c) =>
                                              A(d.code, c.target.value),
                                            className:
                                              "w-24 px-2 py-1 text-right border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-bold text-blue-600",
                                          }),
                                          d.displayUnitName &&
                                            o.jsx("span", {
                                              className:
                                                "text-slate-600 font-medium",
                                              children: d.displayUnitName,
                                            }),
                                        ],
                                      }),
                                    }),
                                    o.jsx("td", {
                                      className:
                                        "px-4 py-3 text-sm text-center",
                                      children: o.jsx("button", {
                                        onClick: () => $(d.code),
                                        className:
                                          "text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded transition-colors",
                                        title: "刪除此項目",
                                        children: o.jsx(ia, { size: 18 }),
                                      }),
                                    }),
                                  ],
                                },
                                `${d.code}-${m}`
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
                    onClick: ie,
                    disabled: i || a.length === 0 || !_,
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
  Xp = () => {
    const [e, t] = C.useState([]),
      [n, r] = C.useState(null),
      [l, s] = C.useState([]),
      [a, u] = C.useState(new Set(["all"])),
      [i, f] = C.useState(!0),
      [N, w] = C.useState(!1),
      [x, E] = C.useState(null),
      [_, b] = C.useState(null),
      [V, h] = C.useState(!1),
      [p, g] = C.useState(!1),
      [k, M] = C.useState(new Set());
    C.useEffect(() => {
      R();
    }, []);
    const R = async () => {
        try {
          f(!0);
          const c = await Hl();
          if (c.Code === 200 && c.Data) {
            const S = c.Data.filter((y) => y.type !== "藥庫");
            t(S), S.length > 0 && (r(S[0]), z(S[0]));
          }
        } catch (c) {
          console.error("Failed to fetch server settings:", c);
        } finally {
          f(!1);
        }
      },
      z = async (c) => {
        try {
          w(!0);
          const S = new Date(),
            y = new Date();
          y.setDate(y.getDate() - 30);
          const j = (Q) => {
              const K = Q.getFullYear(),
                I = String(Q.getMonth() + 1).padStart(2, "0"),
                B = String(Q.getDate()).padStart(2, "0"),
                te = String(Q.getHours()).padStart(2, "0"),
                de = String(Q.getMinutes()).padStart(2, "0"),
                ue = String(Q.getSeconds()).padStart(2, "0");
              return `${K}-${I}-${B} ${te}:${de}:${ue}`;
            },
            [L, O] = await Promise.all([
              Er({ ServerName: c.name, ServerType: c.type }),
              fa({
                ValueAry: [j(y), j(S)],
                ServerName: c.name,
                ServerType: c.type,
              }),
            ]);
          if (L.Code === 200 && O.Code === 200) {
            const Q = new Map(
                O.Data.map((I) => [
                  I.CODE,
                  typeof I.ANG_QTY == "string"
                    ? parseFloat(I.ANG_QTY) || 0
                    : I.ANG_QTY || 0,
                ])
              ),
              K = L.Data.map((I) => {
                var Ve, je, he, vt, Ot, Qt;
                const B = Q.get(I.code) || 0,
                  te =
                    typeof ((Ve = I.Classify) == null ? void 0 : Ve.safe_day) ==
                    "string"
                      ? parseFloat(I.Classify.safe_day) || 0
                      : ((je = I.Classify) == null ? void 0 : je.safe_day) || 0,
                  de =
                    typeof ((he = I.Classify) == null
                      ? void 0
                      : he.standard_day) == "string"
                      ? parseFloat(I.Classify.standard_day) || 0
                      : ((vt = I.Classify) == null
                          ? void 0
                          : vt.standard_day) || 0,
                  ue = Array.isArray(I.qty)
                    ? I.qty.reduce((Wl, At) => {
                        const Gl =
                          typeof At == "string" ? parseFloat(At) || 0 : At || 0;
                        return Wl + Gl;
                      }, 0)
                    : 0;
                return {
                  code: I.code,
                  material_no: I.material_no,
                  name: I.cht_name || I.name,
                  type: ((Ot = I.med_cloud) == null ? void 0 : Ot.TYPE) || "",
                  currentStock: ue,
                  avgDailyConsumption: B,
                  safetyQuantity: B * te,
                  standardQuantity: B * de,
                  medGuid: (Qt = I.med_cloud) == null ? void 0 : Qt.GUID,
                };
              });
            s(K);
          }
        } catch (S) {
          console.error("Failed to fetch replenishment data:", S);
        } finally {
          w(!1);
        }
      },
      U = (c) => {
        r(c), z(c);
      },
      G = (c, S) => {
        c.preventDefault(), E({ x: c.clientX, y: c.clientY }), b(S);
      },
      P = () => {
        h(!0);
      },
      H = () => {
        E(null);
      },
      A = C.useMemo(() => {
        const c = new Set();
        return (
          l.forEach((S) => {
            S.type && c.add(S.type);
          }),
          Array.from(c).sort()
        );
      }, [l]),
      D = (c) => {
        u((S) => {
          const y = new Set(S);
          return c === "all"
            ? new Set(["all"])
            : (y.delete("all"),
              y.has(c) ? y.delete(c) : y.add(c),
              y.size === 0 ? new Set(["all"]) : y);
        });
      },
      $ = C.useMemo(() => {
        const S = (a.has("all") ? l : l.filter((j) => a.has(j.type))).reduce(
          (j, L) => (
            j[L.code]
              ? (j[L.code].currentStock += L.currentStock)
              : (j[L.code] = { ...L }),
            j
          ),
          {}
        );
        return Object.values(S).sort((j, L) => {
          const O = j.currentStock < j.safetyQuantity,
            Q = L.currentStock < L.safetyQuantity;
          return O && !Q ? -1 : !O && Q ? 1 : j.code.localeCompare(L.code);
        });
      }, [l, a]),
      W = C.useMemo(
        () => $.filter((c) => c.currentStock < c.safetyQuantity),
        [$]
      ),
      re = () => {
        if (W.length === 0) {
          alert("目前沒有需要撥補的藥品");
          return;
        }
        g(!0);
      },
      ie = () => {
        if (k.size === 0) {
          alert("請至少選擇一個品項");
          return;
        }
        g(!0);
      },
      d = (c) => {
        M((S) => {
          const y = new Set(S);
          return y.has(c) ? y.delete(c) : y.add(c), y;
        });
      },
      m = () => {
        k.size === $.length ? M(new Set()) : M(new Set($.map((c) => c.code)));
      },
      v = C.useMemo(() => $.filter((c) => k.has(c.code)), [$, k]);
    return i
      ? o.jsx("div", {
          className: "flex justify-center items-center py-12",
          children: o.jsx(Ke, {}),
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
                      children: e.map((c) =>
                        o.jsx(
                          "button",
                          {
                            onClick: () => U(c),
                            className: `px-4 py-2 rounded-lg font-medium transition-colors ${
                              (n == null ? void 0 : n.name) === c.name &&
                              (n == null ? void 0 : n.type) === c.type
                                ? "bg-blue-600 text-white"
                                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                            }`,
                            children: c.name,
                          },
                          `${c.name}-${c.type}`
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
                          o.jsxs("div", {
                            className: "flex gap-2",
                            children: [
                              o.jsxs("button", {
                                onClick: re,
                                disabled: W.length === 0,
                                className:
                                  "flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 disabled:bg-slate-300 disabled:cursor-not-allowed rounded-lg text-white font-medium transition-colors",
                                children: [
                                  o.jsx(Mn, { size: 18 }),
                                  "自動建立撥補單 ",
                                  W.length > 0 && `(${W.length})`,
                                ],
                              }),
                              o.jsxs("button", {
                                onClick: ie,
                                disabled: k.size === 0,
                                className:
                                  "flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed rounded-lg text-white font-medium transition-colors",
                                children: [
                                  o.jsx(Mn, { size: 18 }),
                                  "建立選擇品項撥補單 ",
                                  k.size > 0 && `(${k.size})`,
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      o.jsxs("div", {
                        className: "flex flex-wrap gap-2",
                        children: [
                          o.jsx("button", {
                            onClick: () => D("all"),
                            className: `px-4 py-2 rounded-lg font-medium transition-all ${
                              a.has("all")
                                ? "bg-blue-600 text-white shadow-md"
                                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                            }`,
                            children: "全部類別",
                          }),
                          A.map((c) =>
                            o.jsx(
                              "button",
                              {
                                onClick: () => D(c),
                                className: `px-4 py-2 rounded-lg font-medium transition-all ${
                                  a.has(c)
                                    ? "bg-blue-600 text-white shadow-md"
                                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                                }`,
                                children: c,
                              },
                              c
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
                  N
                    ? o.jsx("div", {
                        className: "flex justify-center items-center py-12",
                        children: o.jsx(Ke, {}),
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
                                      "px-6 py-3 text-center text-base font-medium text-gray-600 uppercase tracking-wider",
                                    children: o.jsx("input", {
                                      type: "checkbox",
                                      checked:
                                        k.size === $.length && $.length > 0,
                                      onChange: m,
                                      className: "w-4 h-4 cursor-pointer",
                                    }),
                                  }),
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
                                $.length === 0
                                  ? o.jsx("tr", {
                                      children: o.jsx("td", {
                                        colSpan: 9,
                                        className:
                                          "px-6 py-8 text-center text-slate-500",
                                        children: "無資料",
                                      }),
                                    })
                                  : $.map((c, S) => {
                                      const y =
                                        c.currentStock < c.safetyQuantity;
                                      return o.jsxs(
                                        "tr",
                                        {
                                          onContextMenu: (j) => G(j, c),
                                          className: `transition-colors cursor-context-menu ${
                                            y
                                              ? "bg-red-50 hover:bg-red-100"
                                              : "hover:bg-slate-50"
                                          }`,
                                          children: [
                                            o.jsx("td", {
                                              className:
                                                "px-6 py-4 text-center",
                                              children: o.jsx("input", {
                                                type: "checkbox",
                                                checked: k.has(c.code),
                                                onChange: () => d(c.code),
                                                onClick: (j) =>
                                                  j.stopPropagation(),
                                                className:
                                                  "w-4 h-4 cursor-pointer",
                                              }),
                                            }),
                                            o.jsx("td", {
                                              className:
                                                "px-6 py-4 text-sm text-gray-900",
                                              children: c.code,
                                            }),
                                            o.jsx("td", {
                                              className:
                                                "px-6 py-4 text-sm text-gray-900",
                                              children: c.material_no,
                                            }),
                                            o.jsx("td", {
                                              className:
                                                "px-6 py-4 text-sm text-gray-900",
                                              children: c.name,
                                            }),
                                            o.jsx("td", {
                                              className:
                                                "px-6 py-4 text-sm text-gray-600",
                                              children: c.type,
                                            }),
                                            o.jsx("td", {
                                              className: `px-6 py-4 text-sm text-right ${
                                                y
                                                  ? "text-red-700 font-semibold"
                                                  : "text-gray-900"
                                              }`,
                                              children:
                                                c.currentStock.toFixed(2),
                                            }),
                                            o.jsx("td", {
                                              className:
                                                "px-6 py-4 text-sm text-gray-900 text-right",
                                              children:
                                                c.avgDailyConsumption.toFixed(
                                                  2
                                                ),
                                            }),
                                            o.jsx("td", {
                                              className:
                                                "px-6 py-4 text-sm text-gray-900 text-right",
                                              children:
                                                c.safetyQuantity.toFixed(2),
                                            }),
                                            o.jsx("td", {
                                              className:
                                                "px-6 py-4 text-sm text-gray-900 text-right",
                                              children:
                                                c.standardQuantity.toFixed(2),
                                            }),
                                          ],
                                        },
                                        `${c.code}-${S}`
                                      );
                                    }),
                            }),
                          ],
                        }),
                      }),
                ],
              }),
            x &&
              _ &&
              o.jsx(ua, { x: x.x, y: x.y, onClose: H, onViewUnitDetails: P }),
            V &&
              _ &&
              _.medGuid &&
              o.jsx(ca, {
                isOpen: V,
                onClose: () => {
                  h(!1), b(null);
                },
                medGuid: _.medGuid,
                medName: _.name,
                onFetchUnitDetails: wr,
                onUpdateUnits: da,
              }),
            o.jsx(Kp, {
              isOpen: p,
              onClose: () => {
                g(!1), M(new Set());
              },
              items: k.size > 0 ? v : W,
              onFetchUnitDetails: wr,
              destinationServerName: (n == null ? void 0 : n.name) || "",
            }),
          ],
        });
  },
  Zp = ({
    isOpen: e,
    onClose: t,
    items: n,
    onFetchUnitDetails: r,
    destinationServerName: l,
  }) => {
    const { showToast: s } = pa(),
      [a, u] = C.useState([]),
      [i, f] = C.useState(!1),
      [N, w] = C.useState(new Map()),
      [x, E] = C.useState([]),
      [_, b] = C.useState(null),
      [V, h] = C.useState(new Map()),
      [p, g] = C.useState([]),
      [k, M] = C.useState(!1),
      [R, z] = C.useState("");
    C.useEffect(() => {
      e && U();
    }, [e]),
      C.useEffect(() => {
        e && n.length > 0 && _ && P();
      }, [e, n, _]);
    const U = async () => {
        try {
          const m = (await Hl()).Data.filter((v) => v.type === "藥庫");
          E(m), m.length > 0 && b(m[0]);
        } catch (d) {
          console.error("Failed to fetch warehouses:", d);
        }
      },
      G = async () => {
        if (!_) return new Map();
        try {
          const d = await Er({ ServerName: _.name, ServerType: _.type });
          g(d.Data || []);
          const m = new Map();
          return (
            d.Data.forEach((v) => {
              let c = 0;
              Array.isArray(v.qty)
                ? (c = v.qty.reduce((S, y) => S + parseFloat(y || "0"), 0))
                : (c =
                    typeof v.qty == "number"
                      ? v.qty
                      : parseFloat(v.qty || "0")),
                m.set(v.code, c);
            }),
            h(m),
            m
          );
        } catch (d) {
          return console.error("Failed to fetch source stock:", d), new Map();
        }
      },
      P = async () => {
        f(!0);
        try {
          const d = n.map(async (y) => {
              var L;
              const j = Math.max(0, y.standardQuantity - y.currentStock);
              if (!y.medGuid)
                return {
                  code: y.code,
                  itemCode: y.material_no,
                  name: y.name,
                  rawQuantity: j,
                  adjustedQuantity: j,
                  convertedUnit: `${j} (無單位資訊)`,
                  conversionRate: 1,
                  displayUnitName: "",
                  originalItem: y,
                  sourceStock: null,
                  minProcurementQuantity: 1,
                  smallestUnitConversionRate: 1,
                  smallestUnitName: "",
                };
              try {
                const O = await r(y.medGuid);
                if (!O || O.length === 0)
                  return {
                    code: y.code,
                    itemCode: y.material_no,
                    name: y.name,
                    rawQuantity: j,
                    adjustedQuantity: j,
                    convertedUnit: `${j} (無單位資訊)`,
                    conversionRate: 1,
                    displayUnitName: "",
                    originalItem: y,
                    sourceStock: null,
                    minProcurementQuantity: 1,
                    smallestUnitConversionRate: 1,
                    smallestUnitName: "",
                  };
                const Q = O.find((he) => he.unit_type === "採購");
                if (!Q) {
                  const he =
                    ((L = O[O.length - 1]) == null ? void 0 : L.unit_name) ||
                    "";
                  return {
                    code: y.code,
                    itemCode: y.material_no,
                    name: y.name,
                    rawQuantity: j,
                    adjustedQuantity: j,
                    convertedUnit: `${j} ${he}`,
                    conversionRate: 1,
                    displayUnitName: he,
                    originalItem: y,
                    sourceStock: null,
                    minProcurementQuantity: 1,
                    smallestUnitConversionRate: 1,
                    smallestUnitName: he,
                  };
                }
                const K = O.reduce((he, vt) => {
                    const Ot = parseInt(vt.sort_order),
                      Qt = parseInt(he.sort_order);
                    return Ot > Qt ? vt : he;
                  }, O[0]),
                  I = parseFloat(K.conversion_rate) || 1,
                  B = K.unit_name,
                  te = Math.ceil(j / I) * I,
                  de = Q.unit_name,
                  ue = parseFloat(Q.quantity) || 1,
                  Ve = Math.ceil(te / I),
                  je = Math.max(Ve, ue);
                return {
                  code: y.code,
                  itemCode: y.material_no,
                  name: y.name,
                  rawQuantity: j,
                  adjustedQuantity: te,
                  convertedUnit: `${je} ${de}`,
                  conversionRate: I,
                  displayUnitName: de,
                  originalItem: y,
                  sourceStock: null,
                  minProcurementQuantity: ue,
                  smallestUnitConversionRate: I,
                  smallestUnitName: B,
                };
              } catch (O) {
                return (
                  console.error(`Failed to fetch units for ${y.code}:`, O),
                  {
                    code: y.code,
                    itemCode: y.material_no,
                    name: y.name,
                    rawQuantity: j,
                    adjustedQuantity: j,
                    convertedUnit: `${j} (無法取得單位)`,
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
            m = await Promise.all(d),
            v = await G(),
            c = m.map((y) => ({ ...y, sourceStock: v.get(y.code) ?? null }));
          u(c);
          const S = new Map();
          c.forEach((y) => {
            const j = y.adjustedQuantity / y.conversionRate;
            S.set(y.code, { raw: y.rawQuantity, converted: j });
          }),
            w(S);
        } catch (d) {
          console.error("Failed to calculate previews:", d);
        } finally {
          f(!1);
        }
      },
      H = (d, m) => {
        const v = parseFloat(m) || 0,
          c = a.find((L) => L.code === d);
        if (!c) return;
        const S =
            Math.ceil(v / c.smallestUnitConversionRate) *
            c.smallestUnitConversionRate,
          y = Math.ceil(S / c.conversionRate),
          j = Math.max(y, c.minProcurementQuantity);
        w((L) => {
          const O = new Map(L);
          return O.set(d, { raw: v, converted: j }), O;
        });
      },
      A = (d, m) => {
        const v = parseFloat(m) || 0,
          c = a.find((j) => j.code === d);
        if (!c) return;
        const S = Math.max(v, c.minProcurementQuantity),
          y = S * c.conversionRate;
        w((j) => {
          const L = new Map(j);
          return L.set(d, { raw: y, converted: S }), L;
        });
      },
      D = (d) => {
        const m = N.get(d.code);
        if (m) {
          let v;
          return (
            m.raw === 0 || m.raw < d.smallestUnitConversionRate
              ? (v = m.converted * d.conversionRate)
              : (v =
                  Math.ceil(m.raw / d.smallestUnitConversionRate) *
                  d.smallestUnitConversionRate),
            {
              rawQuantity: m.raw,
              adjustedQuantity: v,
              convertedCount: m.converted,
            }
          );
        }
        return {
          rawQuantity: d.rawQuantity,
          adjustedQuantity: d.adjustedQuantity,
          convertedCount: d.adjustedQuantity / d.conversionRate,
        };
      },
      $ = (d) => {
        u((m) => m.filter((v) => v.code !== d)),
          w((m) => {
            const v = new Map(m);
            return v.delete(d), v;
          });
      },
      W = Ii.useMemo(() => {
        if (!R.trim()) return [];
        const d = new Set(a.map((S) => S.code)),
          m = R.toLowerCase(),
          v = p.filter((S) => {
            var Q, K, I, B;
            if (d.has(S.code)) return !1;
            const y =
                (Q = S.code) == null ? void 0 : Q.toLowerCase().includes(m),
              j = (K = S.name) == null ? void 0 : K.toLowerCase().includes(m),
              L =
                (I = S.cht_name) == null ? void 0 : I.toLowerCase().includes(m),
              O =
                (B = S.material_no) == null
                  ? void 0
                  : B.toLowerCase().includes(m);
            return y || j || L || O;
          }),
          c = new Map();
        return (
          v.forEach((S) => {
            c.has(S.code) || c.set(S.code, S);
          }),
          Array.from(c.values())
        );
      }, [R, p, a]),
      re = async (d) => {
        var v;
        if (a.some((c) => c.code === d.code)) {
          s("此藥品已在列表中", "warning");
          return;
        }
        const m = {
          code: d.code,
          name: d.name,
          material_no: d.material_no,
          currentStock: 0,
          safeStock: 0,
          standardQuantity: 0,
          medGuid: d.GUID,
        };
        try {
          const c = await r(d.med_cloud.GUID);
          let S;
          if (!c || c.length === 0)
            S = {
              code: d.code,
              itemCode: d.material_no,
              name: d.name,
              rawQuantity: 0,
              adjustedQuantity: 0,
              convertedUnit: "0 (無單位資訊)",
              conversionRate: 1,
              displayUnitName: "",
              originalItem: m,
              sourceStock: V.get(d.code) ?? null,
              minProcurementQuantity: 1,
              smallestUnitConversionRate: 1,
              smallestUnitName: "",
            };
          else {
            const y = c.find((j) => j.unit_type === "採購");
            if (y) {
              const j = c.reduce((I, B) => {
                  const te = parseInt(B.sort_order),
                    de = parseInt(I.sort_order);
                  return te > de ? B : I;
                }, c[0]),
                L = parseFloat(j.conversion_rate) || 1,
                O = j.unit_name,
                Q = y.unit_name,
                K = parseFloat(y.quantity) || 1;
              S = {
                code: d.code,
                itemCode: d.material_no,
                name: d.name,
                rawQuantity: 0,
                adjustedQuantity: 0,
                convertedUnit: `0 ${Q}`,
                conversionRate: L,
                displayUnitName: Q,
                originalItem: m,
                sourceStock: V.get(d.code) ?? null,
                minProcurementQuantity: K,
                smallestUnitConversionRate: L,
                smallestUnitName: O,
              };
            } else {
              const j =
                ((v = c[c.length - 1]) == null ? void 0 : v.unit_name) || "";
              S = {
                code: d.code,
                itemCode: d.material_no,
                name: d.name,
                rawQuantity: 0,
                adjustedQuantity: 0,
                convertedUnit: `0 ${j}`,
                conversionRate: 1,
                displayUnitName: j,
                originalItem: m,
                sourceStock: V.get(d.code) ?? null,
                minProcurementQuantity: 1,
                smallestUnitConversionRate: 1,
                smallestUnitName: j,
              };
            }
          }
          u((y) => [...y, S]),
            w((y) => {
              const j = new Map(y);
              return (
                j.set(d.code, { raw: 0, converted: S.minProcurementQuantity }),
                j
              );
            }),
            M(!1),
            z(""),
            s("藥品已成功新增", "success");
        } catch (c) {
          console.error("Failed to add drug:", c), s("新增藥品失敗", "error");
        }
      },
      ie = async () => {
        if (!_) {
          s("請選擇庫別", "warning");
          return;
        }
        if (a.length === 0) {
          s("請至少選擇一個藥品", "warning");
          return;
        }
        const d = {
          Data: a.map((m) => {
            const v = D(m);
            return {
              CODE: m.code,
              NAME: m.name,
              SKDIACODE: m.itemCode,
              START_QTY: String(v.convertedCount),
            };
          }),
        };
        try {
          f(!0);
          const m = await Pe("/api/inspection/download_purchaseExcel", {
              method: "POST",
              body: d,
              responseType: "blob",
            }),
            v = new Date(),
            c = `${v.getFullYear()}${String(v.getMonth() + 1).padStart(
              2,
              "0"
            )}${String(v.getDate()).padStart(2, "0")}`,
            S = `${l}-${c}-建議採購.xlsx`,
            y = window.URL.createObjectURL(new Blob([m])),
            j = document.createElement("a");
          (j.href = y),
            j.setAttribute("download", S),
            document.body.appendChild(j),
            j.click(),
            j.remove(),
            window.URL.revokeObjectURL(y),
            s("採購單已下載", "success"),
            t();
        } catch (m) {
          console.error("Failed to download procurement excel:", m),
            s("採購單下載失敗", "error");
        } finally {
          f(!1);
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
                            children: o.jsx(Mn, {
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
                        children: o.jsx(ln, { size: 24 }),
                      }),
                    ],
                  }),
                  x.length > 0 &&
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
                              value: (_ == null ? void 0 : _.name) || "",
                              onChange: (d) => {
                                const m = x.find(
                                  (v) => v.name === d.target.value
                                );
                                b(m || null);
                              },
                              className:
                                "px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white",
                              children: x.map((d) =>
                                o.jsx(
                                  "option",
                                  { value: d.name, children: d.name },
                                  d.name
                                )
                              ),
                            }),
                          ],
                        }),
                        o.jsxs("button", {
                          onClick: () => M(!k),
                          className:
                            "flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors",
                          children: [o.jsx(Bl, { size: 18 }), "新增藥品"],
                        }),
                      ],
                    }),
                ],
              }),
              k &&
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
                            value: R,
                            onChange: (d) => z(d.target.value),
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
                    W.length > 0 &&
                      o.jsx("div", {
                        className:
                          "mt-3 bg-white rounded-lg border border-slate-200 max-h-60 overflow-y-auto",
                        children: W.map((d) =>
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
                                          children: d.code,
                                        }),
                                        d.material_no &&
                                          o.jsx("span", {
                                            className:
                                              "inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded font-mono",
                                            children: d.material_no,
                                          }),
                                        o.jsx("span", {
                                          className:
                                            "font-medium text-slate-800",
                                          children: d.name,
                                        }),
                                      ],
                                    }),
                                    d.cht_name &&
                                      o.jsx("p", {
                                        className:
                                          "text-sm text-slate-500 mt-1",
                                        children: d.cht_name,
                                      }),
                                  ],
                                }),
                                o.jsx("button", {
                                  onClick: () => re(d),
                                  className:
                                    "ml-4 px-4 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors",
                                  children: "新增",
                                }),
                              ],
                            },
                            d.GUID
                          )
                        ),
                      }),
                    R &&
                      W.length === 0 &&
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
                      children: o.jsx(Ke, {}),
                    })
                  : a.length === 0
                  ? o.jsxs("div", {
                      className: "text-center py-12",
                      children: [
                        o.jsx(_r, {
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
                            children: a.map((d, m) => {
                              const v = D(d),
                                c = v.convertedCount < d.minProcurementQuantity;
                              return o.jsxs(
                                "tr",
                                {
                                  className:
                                    "hover:bg-slate-50 transition-colors",
                                  children: [
                                    o.jsx("td", {
                                      className: "px-4 py-3 text-sm",
                                      children: d.code,
                                    }),
                                    o.jsx("td", {
                                      className: "px-4 py-3 text-sm",
                                      children: d.itemCode,
                                    }),
                                    o.jsx("td", {
                                      className:
                                        "px-4 py-3 text-sm text-slate-800 font-medium",
                                      children: d.name,
                                    }),
                                    o.jsx("td", {
                                      className: "px-4 py-3 text-sm text-right",
                                      children: o.jsx("span", {
                                        className: `font-semibold ${
                                          d.sourceStock !== null &&
                                          d.sourceStock < v.adjustedQuantity
                                            ? "text-red-600"
                                            : "text-green-600"
                                        }`,
                                        children:
                                          d.sourceStock !== null
                                            ? d.sourceStock
                                            : "-",
                                      }),
                                    }),
                                    o.jsx("td", {
                                      className: "px-4 py-3 text-sm text-right",
                                      children: o.jsx("input", {
                                        type: "number",
                                        min: "0",
                                        step: "1",
                                        value: v.rawQuantity,
                                        onChange: (S) =>
                                          H(d.code, S.target.value),
                                        className:
                                          "w-24 px-2 py-1 text-right border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                                      }),
                                    }),
                                    o.jsx("td", {
                                      className: "px-4 py-3 text-sm text-right",
                                      children: o.jsx("div", {
                                        className:
                                          "flex items-center justify-end gap-1",
                                        children: o.jsx("span", {
                                          className:
                                            v.adjustedQuantity !== v.rawQuantity
                                              ? "font-semibold text-orange-600"
                                              : "text-slate-600",
                                          children: v.adjustedQuantity,
                                        }),
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
                                              min: d.minProcurementQuantity,
                                              step: "1",
                                              value: v.convertedCount,
                                              onChange: (S) =>
                                                A(d.code, S.target.value),
                                              className: `w-24 px-2 py-1 text-right border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-bold ${
                                                c
                                                  ? "border-red-500 text-red-600"
                                                  : "border-slate-300 text-blue-600"
                                              }`,
                                              title: `最低採購數量：${d.minProcurementQuantity}`,
                                            }),
                                            d.displayUnitName &&
                                              o.jsx("span", {
                                                className:
                                                  "text-slate-600 font-medium",
                                                children: d.displayUnitName,
                                              }),
                                          ],
                                        }),
                                        c &&
                                          o.jsxs("div", {
                                            className:
                                              "text-xs text-red-500 mt-1 text-right",
                                            children: [
                                              "最低：",
                                              d.minProcurementQuantity,
                                            ],
                                          }),
                                      ],
                                    }),
                                    o.jsx("td", {
                                      className:
                                        "px-4 py-3 text-sm text-center",
                                      children: o.jsx("button", {
                                        onClick: () => $(d.code),
                                        className:
                                          "text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded transition-colors",
                                        title: "刪除此項目",
                                        children: o.jsx(ia, { size: 18 }),
                                      }),
                                    }),
                                  ],
                                },
                                `${d.code}-${m}`
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
                    onClick: ie,
                    disabled: i || a.length === 0 || !_,
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
  Jp = () => {
    const [e, t] = C.useState([]),
      [n, r] = C.useState(null),
      [l, s] = C.useState([]),
      [a, u] = C.useState(new Set(["all"])),
      [i, f] = C.useState(!0),
      [N, w] = C.useState(!1),
      [x, E] = C.useState(null),
      [_, b] = C.useState(null),
      [V, h] = C.useState(!1),
      [p, g] = C.useState(!1),
      [k, M] = C.useState(new Set());
    C.useEffect(() => {
      R();
    }, []);
    const R = async () => {
        try {
          f(!0);
          const c = await Hl();
          if (c.Code === 200 && c.Data) {
            const S = c.Data.filter((y) => y.type == "藥庫");
            t(S), S.length > 0 && (r(S[0]), z(S[0]));
          }
        } catch (c) {
          console.error("Failed to fetch server settings:", c);
        } finally {
          f(!1);
        }
      },
      z = async (c) => {
        try {
          w(!0);
          const S = new Date(),
            y = new Date();
          y.setDate(y.getDate() - 30);
          const j = (Q) => {
              const K = Q.getFullYear(),
                I = String(Q.getMonth() + 1).padStart(2, "0"),
                B = String(Q.getDate()).padStart(2, "0"),
                te = String(Q.getHours()).padStart(2, "0"),
                de = String(Q.getMinutes()).padStart(2, "0"),
                ue = String(Q.getSeconds()).padStart(2, "0");
              return `${K}-${I}-${B} ${te}:${de}:${ue}`;
            },
            [L, O] = await Promise.all([
              Er({ ServerName: c.name, ServerType: c.type }),
              fa({
                ValueAry: [j(y), j(S)],
                ServerName: c.name,
                ServerType: c.type,
              }),
            ]);
          if (L.Code === 200 && O.Code === 200) {
            const Q = new Map(
                O.Data.map((I) => [
                  I.CODE,
                  typeof I.ANG_QTY == "string"
                    ? parseFloat(I.ANG_QTY) || 0
                    : I.ANG_QTY || 0,
                ])
              ),
              K = L.Data.map((I) => {
                var Ve, je, he, vt, Ot, Qt;
                const B = Q.get(I.code) || 0,
                  te =
                    typeof ((Ve = I.Classify) == null ? void 0 : Ve.safe_day) ==
                    "string"
                      ? parseFloat(I.Classify.safe_day) || 0
                      : ((je = I.Classify) == null ? void 0 : je.safe_day) || 0,
                  de =
                    typeof ((he = I.Classify) == null
                      ? void 0
                      : he.standard_day) == "string"
                      ? parseFloat(I.Classify.standard_day) || 0
                      : ((vt = I.Classify) == null
                          ? void 0
                          : vt.standard_day) || 0,
                  ue = Array.isArray(I.qty)
                    ? I.qty.reduce((Wl, At) => {
                        const Gl =
                          typeof At == "string" ? parseFloat(At) || 0 : At || 0;
                        return Wl + Gl;
                      }, 0)
                    : 0;
                return {
                  code: I.code,
                  material_no: I.material_no,
                  name: I.cht_name || I.name,
                  type: ((Ot = I.med_cloud) == null ? void 0 : Ot.TYPE) || "",
                  currentStock: ue,
                  avgDailyConsumption: B,
                  safetyQuantity: B * te,
                  standardQuantity: B * de,
                  medGuid: (Qt = I.med_cloud) == null ? void 0 : Qt.GUID,
                };
              });
            s(K);
          }
        } catch (S) {
          console.error("Failed to fetch replenishment data:", S);
        } finally {
          w(!1);
        }
      },
      U = (c) => {
        r(c), z(c);
      },
      G = (c, S) => {
        c.preventDefault(), E({ x: c.clientX, y: c.clientY }), b(S);
      },
      P = () => {
        h(!0);
      },
      H = () => {
        E(null);
      },
      A = C.useMemo(() => {
        const c = new Set();
        return (
          l.forEach((S) => {
            S.type && c.add(S.type);
          }),
          Array.from(c).sort()
        );
      }, [l]),
      D = (c) => {
        u((S) => {
          const y = new Set(S);
          return c === "all"
            ? new Set(["all"])
            : (y.delete("all"),
              y.has(c) ? y.delete(c) : y.add(c),
              y.size === 0 ? new Set(["all"]) : y);
        });
      },
      $ = C.useMemo(() => {
        const S = (a.has("all") ? l : l.filter((j) => a.has(j.type))).reduce(
          (j, L) => (
            j[L.code]
              ? (j[L.code].currentStock += L.currentStock)
              : (j[L.code] = { ...L }),
            j
          ),
          {}
        );
        return Object.values(S).sort((j, L) => {
          const O = j.currentStock < j.safetyQuantity,
            Q = L.currentStock < L.safetyQuantity;
          return O && !Q ? -1 : !O && Q ? 1 : j.code.localeCompare(L.code);
        });
      }, [l, a]),
      W = C.useMemo(
        () => $.filter((c) => c.currentStock < c.safetyQuantity),
        [$]
      ),
      re = () => {
        if (W.length === 0) {
          alert("目前沒有需要採購的藥品");
          return;
        }
        g(!0);
      },
      ie = () => {
        if (k.size === 0) {
          alert("請至少選擇一個品項");
          return;
        }
        g(!0);
      },
      d = (c) => {
        M((S) => {
          const y = new Set(S);
          return y.has(c) ? y.delete(c) : y.add(c), y;
        });
      },
      m = () => {
        k.size === $.length ? M(new Set()) : M(new Set($.map((c) => c.code)));
      },
      v = C.useMemo(() => $.filter((c) => k.has(c.code)), [$, k]);
    return i
      ? o.jsx("div", {
          className: "flex justify-center items-center py-12",
          children: o.jsx(Ke, {}),
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
                      children: e.map((c) =>
                        o.jsx(
                          "button",
                          {
                            onClick: () => U(c),
                            className: `px-4 py-2 rounded-lg font-medium transition-colors ${
                              (n == null ? void 0 : n.name) === c.name &&
                              (n == null ? void 0 : n.type) === c.type
                                ? "bg-blue-600 text-white"
                                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                            }`,
                            children: c.name,
                          },
                          `${c.name}-${c.type}`
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
                          o.jsxs("div", {
                            className: "flex gap-2",
                            children: [
                              o.jsxs("button", {
                                onClick: re,
                                disabled: W.length === 0,
                                className:
                                  "flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 disabled:bg-slate-300 disabled:cursor-not-allowed rounded-lg text-white font-medium transition-colors",
                                children: [
                                  o.jsx(Mn, { size: 18 }),
                                  "自動建立採購單 ",
                                  W.length > 0 && `(${W.length})`,
                                ],
                              }),
                              o.jsxs("button", {
                                onClick: ie,
                                disabled: k.size === 0,
                                className:
                                  "flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed rounded-lg text-white font-medium transition-colors",
                                children: [
                                  o.jsx(Mn, { size: 18 }),
                                  "建立選擇品項採購單 ",
                                  k.size > 0 && `(${k.size})`,
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      o.jsxs("div", {
                        className: "flex flex-wrap gap-2",
                        children: [
                          o.jsx("button", {
                            onClick: () => D("all"),
                            className: `px-4 py-2 rounded-lg font-medium transition-all ${
                              a.has("all")
                                ? "bg-blue-600 text-white shadow-md"
                                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                            }`,
                            children: "全部類別",
                          }),
                          A.map((c) =>
                            o.jsx(
                              "button",
                              {
                                onClick: () => D(c),
                                className: `px-4 py-2 rounded-lg font-medium transition-all ${
                                  a.has(c)
                                    ? "bg-blue-600 text-white shadow-md"
                                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                                }`,
                                children: c,
                              },
                              c
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
                  N
                    ? o.jsx("div", {
                        className: "flex justify-center items-center py-12",
                        children: o.jsx(Ke, {}),
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
                                      "px-6 py-3 text-center text-base font-medium text-gray-600 uppercase tracking-wider",
                                    children: o.jsx("input", {
                                      type: "checkbox",
                                      checked:
                                        k.size === $.length && $.length > 0,
                                      onChange: m,
                                      className: "w-4 h-4 cursor-pointer",
                                    }),
                                  }),
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
                                $.length === 0
                                  ? o.jsx("tr", {
                                      children: o.jsx("td", {
                                        colSpan: 9,
                                        className:
                                          "px-6 py-8 text-center text-slate-500",
                                        children: "無資料",
                                      }),
                                    })
                                  : $.map((c, S) => {
                                      const y =
                                        c.currentStock < c.safetyQuantity;
                                      return o.jsxs(
                                        "tr",
                                        {
                                          onContextMenu: (j) => G(j, c),
                                          className: `transition-colors cursor-context-menu ${
                                            y
                                              ? "bg-red-50 hover:bg-red-100"
                                              : "hover:bg-slate-50"
                                          }`,
                                          children: [
                                            o.jsx("td", {
                                              className:
                                                "px-6 py-4 text-center",
                                              children: o.jsx("input", {
                                                type: "checkbox",
                                                checked: k.has(c.code),
                                                onChange: () => d(c.code),
                                                onClick: (j) =>
                                                  j.stopPropagation(),
                                                className:
                                                  "w-4 h-4 cursor-pointer",
                                              }),
                                            }),
                                            o.jsx("td", {
                                              className:
                                                "px-6 py-4 text-sm text-gray-900",
                                              children: c.code,
                                            }),
                                            o.jsx("td", {
                                              className:
                                                "px-6 py-4 text-sm text-gray-900",
                                              children: c.material_no,
                                            }),
                                            o.jsx("td", {
                                              className:
                                                "px-6 py-4 text-sm text-gray-900",
                                              children: c.name,
                                            }),
                                            o.jsx("td", {
                                              className:
                                                "px-6 py-4 text-sm text-gray-600",
                                              children: c.type,
                                            }),
                                            o.jsx("td", {
                                              className: `px-6 py-4 text-sm text-right ${
                                                y
                                                  ? "text-red-700 font-semibold"
                                                  : "text-gray-900"
                                              }`,
                                              children:
                                                c.currentStock.toFixed(2),
                                            }),
                                            o.jsx("td", {
                                              className:
                                                "px-6 py-4 text-sm text-gray-900 text-right",
                                              children:
                                                c.avgDailyConsumption.toFixed(
                                                  2
                                                ),
                                            }),
                                            o.jsx("td", {
                                              className:
                                                "px-6 py-4 text-sm text-gray-900 text-right",
                                              children:
                                                c.safetyQuantity.toFixed(2),
                                            }),
                                            o.jsx("td", {
                                              className:
                                                "px-6 py-4 text-sm text-gray-900 text-right",
                                              children:
                                                c.standardQuantity.toFixed(2),
                                            }),
                                          ],
                                        },
                                        `${c.code}-${S}`
                                      );
                                    }),
                            }),
                          ],
                        }),
                      }),
                ],
              }),
            x &&
              _ &&
              o.jsx(ua, { x: x.x, y: x.y, onClose: H, onViewUnitDetails: P }),
            V &&
              _ &&
              _.medGuid &&
              o.jsx(ca, {
                isOpen: V,
                onClose: () => {
                  h(!1), b(null);
                },
                medGuid: _.medGuid,
                medName: _.name,
                onFetchUnitDetails: wr,
                onUpdateUnits: da,
              }),
            o.jsx(Zp, {
              isOpen: p,
              onClose: () => {
                g(!1), M(new Set());
              },
              items: k.size > 0 ? v : W,
              onFetchUnitDetails: wr,
              destinationServerName: (n == null ? void 0 : n.name) || "",
            }),
          ],
        });
  },
  em = ({ onLogout: e }) => {
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
        const i = Dp();
        i != null &&
          i.domain &&
          (window.location.href = i.homepage / phar_system / frontpage);
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
                    children: o.jsx(Np, {
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
                  o.jsx(kp, { size: 18 }),
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
              t === "inventory" && o.jsx(Vp, {}),
              t === "classification" && o.jsx(qp, {}),
              t === "replenishment" && o.jsx(Xp, {}),
              t === "procurement" && o.jsx(Jp, {}),
            ],
          }),
        ],
      }),
    });
  };
function tm() {
  const [e, t] = C.useState(!1),
    [n, r] = C.useState(!1),
    [l, s] = C.useState(!0);
  C.useEffect(() => {
    (async () => {
      try {
        await Fc(), t(!0);
        const f = Lp();
        r(f),
          console.log("Authentication check:", {
            authenticated: f,
            userSession: sessionStorage.getItem("user_session")
              ? "exists"
              : "missing",
          });
      } catch (f) {
        console.error("Failed to load configuration:", f);
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
    : o.jsx(Ap, {
        children: o.jsx(Rp, {
          children: n ? o.jsx(em, { onLogout: u }) : o.jsx($p, { onLogin: a }),
        }),
      });
}
$c(document.getElementById("root")).render(
  o.jsx(C.StrictMode, { children: o.jsx(tm, {}) })
);
//# sourceMappingURL=index-BdOwfh2l.js.map
