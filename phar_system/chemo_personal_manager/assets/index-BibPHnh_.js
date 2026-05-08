(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === "childList")
        for (const s of i.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
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
var eu = { exports: {} },
  ol = {},
  tu = { exports: {} },
  P = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var bn = Symbol.for("react.element"),
  xc = Symbol.for("react.portal"),
  yc = Symbol.for("react.fragment"),
  gc = Symbol.for("react.strict_mode"),
  Cc = Symbol.for("react.profiler"),
  wc = Symbol.for("react.provider"),
  Nc = Symbol.for("react.context"),
  Sc = Symbol.for("react.forward_ref"),
  kc = Symbol.for("react.suspense"),
  _c = Symbol.for("react.memo"),
  Mc = Symbol.for("react.lazy"),
  $s = Symbol.iterator;
function Ec(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = ($s && e[$s]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var nu = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  ru = Object.assign,
  lu = {};
function fn(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = lu),
    (this.updater = n || nu));
}
fn.prototype.isReactComponent = {};
fn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
fn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function iu() {}
iu.prototype = fn.prototype;
function Yi(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = lu),
    (this.updater = n || nu));
}
var Xi = (Yi.prototype = new iu());
Xi.constructor = Yi;
ru(Xi, fn.prototype);
Xi.isPureReactComponent = !0;
var Bs = Array.isArray,
  su = Object.prototype.hasOwnProperty,
  Zi = { current: null },
  ou = { key: !0, ref: !0, __self: !0, __source: !0 };
function uu(e, t, n) {
  var r,
    l = {},
    i = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      su.call(t, r) && !ou.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var a = Array(u), d = 0; d < u; d++) a[d] = arguments[d + 2];
    l.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: bn,
    type: e,
    key: i,
    ref: s,
    props: l,
    _owner: Zi.current,
  };
}
function jc(e, t) {
  return {
    $$typeof: bn,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Ji(e) {
  return typeof e == "object" && e !== null && e.$$typeof === bn;
}
function Tc(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Ws = /\/+/g;
function _l(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Tc("" + e.key)
    : t.toString(36);
}
function _r(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (i) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case bn:
          case xc:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (l = l(s)),
      (e = r === "" ? "." + _l(s, 0) : r),
      Bs(l)
        ? ((n = ""),
          e != null && (n = e.replace(Ws, "$&/") + "/"),
          _r(l, t, n, "", function (d) {
            return d;
          }))
        : l != null &&
          (Ji(l) &&
            (l = jc(
              l,
              n +
                (!l.key || (s && s.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Ws, "$&/") + "/") +
                e,
            )),
          t.push(l)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), Bs(e)))
    for (var u = 0; u < e.length; u++) {
      i = e[u];
      var a = r + _l(i, u);
      s += _r(i, t, n, a, l);
    }
  else if (((a = Ec(e)), typeof a == "function"))
    for (e = a.call(e), u = 0; !(i = e.next()).done; )
      ((i = i.value), (a = r + _l(i, u++)), (s += _r(i, t, n, a, l)));
  else if (i === "object")
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
  return s;
}
function or(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    _r(e, r, "", "", function (i) {
      return t.call(n, i, l++);
    }),
    r
  );
}
function Ac(e) {
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
var de = { current: null },
  Mr = { transition: null },
  Ic = {
    ReactCurrentDispatcher: de,
    ReactCurrentBatchConfig: Mr,
    ReactCurrentOwner: Zi,
  };
function au() {
  throw Error("act(...) is not supported in production builds of React.");
}
P.Children = {
  map: or,
  forEach: function (e, t, n) {
    or(
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
      or(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      or(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Ji(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
P.Component = fn;
P.Fragment = yc;
P.Profiler = Cc;
P.PureComponent = Yi;
P.StrictMode = gc;
P.Suspense = kc;
P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ic;
P.act = au;
P.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = ru({}, e.props),
    l = e.key,
    i = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (s = Zi.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (a in t)
      su.call(t, a) &&
        !ou.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && u !== void 0 ? u[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    u = Array(a);
    for (var d = 0; d < a; d++) u[d] = arguments[d + 2];
    r.children = u;
  }
  return { $$typeof: bn, type: e.type, key: l, ref: i, props: r, _owner: s };
};
P.createContext = function (e) {
  return (
    (e = {
      $$typeof: Nc,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: wc, _context: e }),
    (e.Consumer = e)
  );
};
P.createElement = uu;
P.createFactory = function (e) {
  var t = uu.bind(null, e);
  return ((t.type = e), t);
};
P.createRef = function () {
  return { current: null };
};
P.forwardRef = function (e) {
  return { $$typeof: Sc, render: e };
};
P.isValidElement = Ji;
P.lazy = function (e) {
  return { $$typeof: Mc, _payload: { _status: -1, _result: e }, _init: Ac };
};
P.memo = function (e, t) {
  return { $$typeof: _c, type: e, compare: t === void 0 ? null : t };
};
P.startTransition = function (e) {
  var t = Mr.transition;
  Mr.transition = {};
  try {
    e();
  } finally {
    Mr.transition = t;
  }
};
P.unstable_act = au;
P.useCallback = function (e, t) {
  return de.current.useCallback(e, t);
};
P.useContext = function (e) {
  return de.current.useContext(e);
};
P.useDebugValue = function () {};
P.useDeferredValue = function (e) {
  return de.current.useDeferredValue(e);
};
P.useEffect = function (e, t) {
  return de.current.useEffect(e, t);
};
P.useId = function () {
  return de.current.useId();
};
P.useImperativeHandle = function (e, t, n) {
  return de.current.useImperativeHandle(e, t, n);
};
P.useInsertionEffect = function (e, t) {
  return de.current.useInsertionEffect(e, t);
};
P.useLayoutEffect = function (e, t) {
  return de.current.useLayoutEffect(e, t);
};
P.useMemo = function (e, t) {
  return de.current.useMemo(e, t);
};
P.useReducer = function (e, t, n) {
  return de.current.useReducer(e, t, n);
};
P.useRef = function (e) {
  return de.current.useRef(e);
};
P.useState = function (e) {
  return de.current.useState(e);
};
P.useSyncExternalStore = function (e, t, n) {
  return de.current.useSyncExternalStore(e, t, n);
};
P.useTransition = function () {
  return de.current.useTransition();
};
P.version = "18.3.1";
tu.exports = P;
var O = tu.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pc = O,
  Dc = Symbol.for("react.element"),
  Oc = Symbol.for("react.fragment"),
  Lc = Object.prototype.hasOwnProperty,
  Rc = Pc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  zc = { key: !0, ref: !0, __self: !0, __source: !0 };
function cu(e, t, n) {
  var r,
    l = {},
    i = null,
    s = null;
  (n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (s = t.ref));
  for (r in t) Lc.call(t, r) && !zc.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: Dc,
    type: e,
    key: i,
    ref: s,
    props: l,
    _owner: Rc.current,
  };
}
ol.Fragment = Oc;
ol.jsx = cu;
ol.jsxs = cu;
eu.exports = ol;
var o = eu.exports,
  du = { exports: {} },
  ke = {},
  fu = { exports: {} },
  pu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(w, T) {
    var A = w.length;
    w.push(T);
    e: for (; 0 < A; ) {
      var K = (A - 1) >>> 1,
        b = w[K];
      if (0 < l(b, T)) ((w[K] = T), (w[A] = b), (A = K));
      else break e;
    }
  }
  function n(w) {
    return w.length === 0 ? null : w[0];
  }
  function r(w) {
    if (w.length === 0) return null;
    var T = w[0],
      A = w.pop();
    if (A !== T) {
      w[0] = A;
      e: for (var K = 0, b = w.length, ir = b >>> 1; K < ir; ) {
        var Nt = 2 * (K + 1) - 1,
          kl = w[Nt],
          St = Nt + 1,
          sr = w[St];
        if (0 > l(kl, A))
          St < b && 0 > l(sr, kl)
            ? ((w[K] = sr), (w[St] = A), (K = St))
            : ((w[K] = kl), (w[Nt] = A), (K = Nt));
        else if (St < b && 0 > l(sr, A)) ((w[K] = sr), (w[St] = A), (K = St));
        else break e;
      }
    }
    return T;
  }
  function l(w, T) {
    var A = w.sortIndex - T.sortIndex;
    return A !== 0 ? A : w.id - T.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var s = Date,
      u = s.now();
    e.unstable_now = function () {
      return s.now() - u;
    };
  }
  var a = [],
    d = [],
    h = 1,
    v = null,
    m = 3,
    g = !1,
    C = !1,
    N = !1,
    R = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(w) {
    for (var T = n(d); T !== null; ) {
      if (T.callback === null) r(d);
      else if (T.startTime <= w)
        (r(d), (T.sortIndex = T.expirationTime), t(a, T));
      else break;
      T = n(d);
    }
  }
  function x(w) {
    if (((N = !1), p(w), !C))
      if (n(a) !== null) ((C = !0), S(k));
      else {
        var T = n(d);
        T !== null && q(x, T.startTime - w);
      }
  }
  function k(w, T) {
    ((C = !1), N && ((N = !1), f(j), (j = -1)), (g = !0));
    var A = m;
    try {
      for (
        p(T), v = n(a);
        v !== null && (!(v.expirationTime > T) || (w && !pe()));
      ) {
        var K = v.callback;
        if (typeof K == "function") {
          ((v.callback = null), (m = v.priorityLevel));
          var b = K(v.expirationTime <= T);
          ((T = e.unstable_now()),
            typeof b == "function" ? (v.callback = b) : v === n(a) && r(a),
            p(T));
        } else r(a);
        v = n(a);
      }
      if (v !== null) var ir = !0;
      else {
        var Nt = n(d);
        (Nt !== null && q(x, Nt.startTime - T), (ir = !1));
      }
      return ir;
    } finally {
      ((v = null), (m = A), (g = !1));
    }
  }
  var M = !1,
    E = null,
    j = -1,
    V = 5,
    I = -1;
  function pe() {
    return !(e.unstable_now() - I < V);
  }
  function wt() {
    if (E !== null) {
      var w = e.unstable_now();
      I = w;
      var T = !0;
      try {
        T = E(!0, w);
      } finally {
        T ? Fe() : ((M = !1), (E = null));
      }
    } else M = !1;
  }
  var Fe;
  if (typeof c == "function")
    Fe = function () {
      c(wt);
    };
  else if (typeof MessageChannel < "u") {
    var lr = new MessageChannel(),
      Sl = lr.port2;
    ((lr.port1.onmessage = wt),
      (Fe = function () {
        Sl.postMessage(null);
      }));
  } else
    Fe = function () {
      R(wt, 0);
    };
  function S(w) {
    ((E = w), M || ((M = !0), Fe()));
  }
  function q(w, T) {
    j = R(function () {
      w(e.unstable_now());
    }, T);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (w) {
      w.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      C || g || ((C = !0), S(k));
    }),
    (e.unstable_forceFrameRate = function (w) {
      0 > w || 125 < w
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (V = 0 < w ? Math.floor(1e3 / w) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (w) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var T = 3;
          break;
        default:
          T = m;
      }
      var A = m;
      m = T;
      try {
        return w();
      } finally {
        m = A;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (w, T) {
      switch (w) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          w = 3;
      }
      var A = m;
      m = w;
      try {
        return T();
      } finally {
        m = A;
      }
    }),
    (e.unstable_scheduleCallback = function (w, T, A) {
      var K = e.unstable_now();
      switch (
        (typeof A == "object" && A !== null
          ? ((A = A.delay), (A = typeof A == "number" && 0 < A ? K + A : K))
          : (A = K),
        w)
      ) {
        case 1:
          var b = -1;
          break;
        case 2:
          b = 250;
          break;
        case 5:
          b = 1073741823;
          break;
        case 4:
          b = 1e4;
          break;
        default:
          b = 5e3;
      }
      return (
        (b = A + b),
        (w = {
          id: h++,
          callback: T,
          priorityLevel: w,
          startTime: A,
          expirationTime: b,
          sortIndex: -1,
        }),
        A > K
          ? ((w.sortIndex = A),
            t(d, w),
            n(a) === null &&
              w === n(d) &&
              (N ? (f(j), (j = -1)) : (N = !0), q(x, A - K)))
          : ((w.sortIndex = b), t(a, w), C || g || ((C = !0), S(k))),
        w
      );
    }),
    (e.unstable_shouldYield = pe),
    (e.unstable_wrapCallback = function (w) {
      var T = m;
      return function () {
        var A = m;
        m = T;
        try {
          return w.apply(this, arguments);
        } finally {
          m = A;
        }
      };
    }));
})(pu);
fu.exports = pu;
var Hc = fu.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fc = O,
  Se = Hc;
function y(e) {
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
var mu = new Set(),
  Rn = {};
function Rt(e, t) {
  (ln(e, t), ln(e + "Capture", t));
}
function ln(e, t) {
  for (Rn[e] = t, e = 0; e < t.length; e++) mu.add(t[e]);
}
var Ze = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ti = Object.prototype.hasOwnProperty,
  Uc =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Gs = {},
  Qs = {};
function Vc(e) {
  return ti.call(Qs, e)
    ? !0
    : ti.call(Gs, e)
      ? !1
      : Uc.test(e)
        ? (Qs[e] = !0)
        : ((Gs[e] = !0), !1);
}
function $c(e, t, n, r) {
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
function Bc(e, t, n, r) {
  if (t === null || typeof t > "u" || $c(e, t, n, r)) return !0;
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
function fe(e, t, n, r, l, i, s) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = s));
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
var qi = /[\-:]([a-z])/g;
function bi(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(qi, bi);
    le[t] = new fe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(qi, bi);
    le[t] = new fe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(qi, bi);
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
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  le[e] = new fe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function es(e, t, n, r) {
  var l = le.hasOwnProperty(t) ? le[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Bc(t, n, l, r) && (n = null),
    r || l === null
      ? Vc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var et = Fc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ur = Symbol.for("react.element"),
  Ft = Symbol.for("react.portal"),
  Ut = Symbol.for("react.fragment"),
  ts = Symbol.for("react.strict_mode"),
  ni = Symbol.for("react.profiler"),
  hu = Symbol.for("react.provider"),
  vu = Symbol.for("react.context"),
  ns = Symbol.for("react.forward_ref"),
  ri = Symbol.for("react.suspense"),
  li = Symbol.for("react.suspense_list"),
  rs = Symbol.for("react.memo"),
  nt = Symbol.for("react.lazy"),
  xu = Symbol.for("react.offscreen"),
  Ks = Symbol.iterator;
function hn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ks && e[Ks]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var G = Object.assign,
  Ml;
function Sn(e) {
  if (Ml === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ml = (t && t[1]) || "";
    }
  return (
    `
` +
    Ml +
    e
  );
}
var El = !1;
function jl(e, t) {
  if (!e || El) return "";
  El = !0;
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
          i = r.stack.split(`
`),
          s = l.length - 1,
          u = i.length - 1;
        1 <= s && 0 <= u && l[s] !== i[u];
      )
        u--;
      for (; 1 <= s && 0 <= u; s--, u--)
        if (l[s] !== i[u]) {
          if (s !== 1 || u !== 1)
            do
              if ((s--, u--, 0 > u || l[s] !== i[u])) {
                var a =
                  `
` + l[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= s && 0 <= u);
          break;
        }
    }
  } finally {
    ((El = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : "") ? Sn(e) : "";
}
function Wc(e) {
  switch (e.tag) {
    case 5:
      return Sn(e.type);
    case 16:
      return Sn("Lazy");
    case 13:
      return Sn("Suspense");
    case 19:
      return Sn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = jl(e.type, !1)), e);
    case 11:
      return ((e = jl(e.type.render, !1)), e);
    case 1:
      return ((e = jl(e.type, !0)), e);
    default:
      return "";
  }
}
function ii(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Ut:
      return "Fragment";
    case Ft:
      return "Portal";
    case ni:
      return "Profiler";
    case ts:
      return "StrictMode";
    case ri:
      return "Suspense";
    case li:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case vu:
        return (e.displayName || "Context") + ".Consumer";
      case hu:
        return (e._context.displayName || "Context") + ".Provider";
      case ns:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case rs:
        return (
          (t = e.displayName || null),
          t !== null ? t : ii(e.type) || "Memo"
        );
      case nt:
        ((t = e._payload), (e = e._init));
        try {
          return ii(e(t));
        } catch {}
    }
  return null;
}
function Gc(e) {
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
      return ii(t);
    case 8:
      return t === ts ? "StrictMode" : "Mode";
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
function vt(e) {
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
function yu(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Qc(e) {
  var t = yu(e) ? "checked" : "value",
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
        set: function (s) {
          ((r = "" + s), i.call(this, s));
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          ((e._valueTracker = null), delete e[t]);
        },
      }
    );
  }
}
function ar(e) {
  e._valueTracker || (e._valueTracker = Qc(e));
}
function gu(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = yu(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function zr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function si(e, t) {
  var n = t.checked;
  return G({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Ys(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  ((n = vt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    }));
}
function Cu(e, t) {
  ((t = t.checked), t != null && es(e, "checked", t, !1));
}
function oi(e, t) {
  Cu(e, t);
  var n = vt(t.value),
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
    ? ui(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ui(e, t.type, vt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked));
}
function Xs(e, t, n) {
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
function ui(e, t, n) {
  (t !== "number" || zr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var kn = Array.isArray;
function Jt(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      ((l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0));
  } else {
    for (n = "" + vt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        ((e[l].selected = !0), r && (e[l].defaultSelected = !0));
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function ai(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(y(91));
  return G({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Zs(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(y(92));
      if (kn(n)) {
        if (1 < n.length) throw Error(y(93));
        n = n[0];
      }
      t = n;
    }
    (t == null && (t = ""), (n = t));
  }
  e._wrapperState = { initialValue: vt(n) };
}
function wu(e, t) {
  var n = vt(t.value),
    r = vt(t.defaultValue);
  (n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r));
}
function Js(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Nu(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ci(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Nu(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var cr,
  Su = (function (e) {
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
        cr = cr || document.createElement("div"),
          cr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = cr.firstChild;
        e.firstChild;
      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function zn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var En = {
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
  Kc = ["Webkit", "ms", "Moz", "O"];
Object.keys(En).forEach(function (e) {
  Kc.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (En[t] = En[e]));
  });
});
function ku(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (En.hasOwnProperty(e) && En[e])
      ? ("" + t).trim()
      : t + "px";
}
function _u(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = ku(n, t[n], r);
      (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l));
    }
}
var Yc = G(
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
function di(e, t) {
  if (t) {
    if (Yc[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(y(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(y(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(y(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(y(62));
  }
}
function fi(e, t) {
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
var pi = null;
function ls(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var mi = null,
  qt = null,
  bt = null;
function qs(e) {
  if ((e = nr(e))) {
    if (typeof mi != "function") throw Error(y(280));
    var t = e.stateNode;
    t && ((t = fl(t)), mi(e.stateNode, e.type, t));
  }
}
function Mu(e) {
  qt ? (bt ? bt.push(e) : (bt = [e])) : (qt = e);
}
function Eu() {
  if (qt) {
    var e = qt,
      t = bt;
    if (((bt = qt = null), qs(e), t)) for (e = 0; e < t.length; e++) qs(t[e]);
  }
}
function ju(e, t) {
  return e(t);
}
function Tu() {}
var Tl = !1;
function Au(e, t, n) {
  if (Tl) return e(t, n);
  Tl = !0;
  try {
    return ju(e, t, n);
  } finally {
    ((Tl = !1), (qt !== null || bt !== null) && (Tu(), Eu()));
  }
}
function Hn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = fl(n);
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
  if (n && typeof n != "function") throw Error(y(231, t, typeof n));
  return n;
}
var hi = !1;
if (Ze)
  try {
    var vn = {};
    (Object.defineProperty(vn, "passive", {
      get: function () {
        hi = !0;
      },
    }),
      window.addEventListener("test", vn, vn),
      window.removeEventListener("test", vn, vn));
  } catch {
    hi = !1;
  }
function Xc(e, t, n, r, l, i, s, u, a) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, d);
  } catch (h) {
    this.onError(h);
  }
}
var jn = !1,
  Hr = null,
  Fr = !1,
  vi = null,
  Zc = {
    onError: function (e) {
      ((jn = !0), (Hr = e));
    },
  };
function Jc(e, t, n, r, l, i, s, u, a) {
  ((jn = !1), (Hr = null), Xc.apply(Zc, arguments));
}
function qc(e, t, n, r, l, i, s, u, a) {
  if ((Jc.apply(this, arguments), jn)) {
    if (jn) {
      var d = Hr;
      ((jn = !1), (Hr = null));
    } else throw Error(y(198));
    Fr || ((Fr = !0), (vi = d));
  }
}
function zt(e) {
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
function Iu(e) {
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
function bs(e) {
  if (zt(e) !== e) throw Error(y(188));
}
function bc(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = zt(e)), t === null)) throw Error(y(188));
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
        if (i === n) return (bs(l), e);
        if (i === r) return (bs(l), t);
        i = i.sibling;
      }
      throw Error(y(188));
    }
    if (n.return !== r.return) ((n = l), (r = i));
    else {
      for (var s = !1, u = l.child; u; ) {
        if (u === n) {
          ((s = !0), (n = l), (r = i));
          break;
        }
        if (u === r) {
          ((s = !0), (r = l), (n = i));
          break;
        }
        u = u.sibling;
      }
      if (!s) {
        for (u = i.child; u; ) {
          if (u === n) {
            ((s = !0), (n = i), (r = l));
            break;
          }
          if (u === r) {
            ((s = !0), (r = i), (n = l));
            break;
          }
          u = u.sibling;
        }
        if (!s) throw Error(y(189));
      }
    }
    if (n.alternate !== r) throw Error(y(190));
  }
  if (n.tag !== 3) throw Error(y(188));
  return n.stateNode.current === n ? e : t;
}
function Pu(e) {
  return ((e = bc(e)), e !== null ? Du(e) : null);
}
function Du(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Du(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ou = Se.unstable_scheduleCallback,
  eo = Se.unstable_cancelCallback,
  ed = Se.unstable_shouldYield,
  td = Se.unstable_requestPaint,
  Y = Se.unstable_now,
  nd = Se.unstable_getCurrentPriorityLevel,
  is = Se.unstable_ImmediatePriority,
  Lu = Se.unstable_UserBlockingPriority,
  Ur = Se.unstable_NormalPriority,
  rd = Se.unstable_LowPriority,
  Ru = Se.unstable_IdlePriority,
  ul = null,
  Be = null;
function ld(e) {
  if (Be && typeof Be.onCommitFiberRoot == "function")
    try {
      Be.onCommitFiberRoot(ul, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Re = Math.clz32 ? Math.clz32 : od,
  id = Math.log,
  sd = Math.LN2;
function od(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((id(e) / sd) | 0)) | 0);
}
var dr = 64,
  fr = 4194304;
function _n(e) {
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
function Vr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var u = s & ~l;
    u !== 0 ? (r = _n(u)) : ((i &= s), i !== 0 && (r = _n(i)));
  } else ((s = n & ~l), s !== 0 ? (r = _n(s)) : i !== 0 && (r = _n(i)));
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
      ((n = 31 - Re(t)), (l = 1 << n), (r |= e[n]), (t &= ~l));
  return r;
}
function ud(e, t) {
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
function ad(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;
  ) {
    var s = 31 - Re(i),
      u = 1 << s,
      a = l[s];
    (a === -1
      ? (!(u & n) || u & r) && (l[s] = ud(u, t))
      : a <= t && (e.expiredLanes |= u),
      (i &= ~u));
  }
}
function xi(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function zu() {
  var e = dr;
  return ((dr <<= 1), !(dr & 4194240) && (dr = 64), e);
}
function Al(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function er(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Re(t)),
    (e[t] = n));
}
function cd(e, t) {
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
    var l = 31 - Re(n),
      i = 1 << l;
    ((t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i));
  }
}
function ss(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Re(n),
      l = 1 << r;
    ((l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l));
  }
}
var L = 0;
function Hu(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var Fu,
  os,
  Uu,
  Vu,
  $u,
  yi = !1,
  pr = [],
  ut = null,
  at = null,
  ct = null,
  Fn = new Map(),
  Un = new Map(),
  lt = [],
  dd =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function to(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      ut = null;
      break;
    case "dragenter":
    case "dragleave":
      at = null;
      break;
    case "mouseover":
    case "mouseout":
      ct = null;
      break;
    case "pointerover":
    case "pointerout":
      Fn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Un.delete(t.pointerId);
  }
}
function xn(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = nr(t)), t !== null && os(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function fd(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return ((ut = xn(ut, e, t, n, r, l)), !0);
    case "dragenter":
      return ((at = xn(at, e, t, n, r, l)), !0);
    case "mouseover":
      return ((ct = xn(ct, e, t, n, r, l)), !0);
    case "pointerover":
      var i = l.pointerId;
      return (Fn.set(i, xn(Fn.get(i) || null, e, t, n, r, l)), !0);
    case "gotpointercapture":
      return (
        (i = l.pointerId),
        Un.set(i, xn(Un.get(i) || null, e, t, n, r, l)),
        !0
      );
  }
  return !1;
}
function Bu(e) {
  var t = Mt(e.target);
  if (t !== null) {
    var n = zt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Iu(n)), t !== null)) {
          ((e.blockedOn = t),
            $u(e.priority, function () {
              Uu(n);
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
function Er(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = gi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ((pi = r), n.target.dispatchEvent(r), (pi = null));
    } else return ((t = nr(n)), t !== null && os(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function no(e, t, n) {
  Er(e) && n.delete(t);
}
function pd() {
  ((yi = !1),
    ut !== null && Er(ut) && (ut = null),
    at !== null && Er(at) && (at = null),
    ct !== null && Er(ct) && (ct = null),
    Fn.forEach(no),
    Un.forEach(no));
}
function yn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    yi ||
      ((yi = !0),
      Se.unstable_scheduleCallback(Se.unstable_NormalPriority, pd)));
}
function Vn(e) {
  function t(l) {
    return yn(l, e);
  }
  if (0 < pr.length) {
    yn(pr[0], e);
    for (var n = 1; n < pr.length; n++) {
      var r = pr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    ut !== null && yn(ut, e),
      at !== null && yn(at, e),
      ct !== null && yn(ct, e),
      Fn.forEach(t),
      Un.forEach(t),
      n = 0;
    n < lt.length;
    n++
  )
    ((r = lt[n]), r.blockedOn === e && (r.blockedOn = null));
  for (; 0 < lt.length && ((n = lt[0]), n.blockedOn === null); )
    (Bu(n), n.blockedOn === null && lt.shift());
}
var en = et.ReactCurrentBatchConfig,
  $r = !0;
function md(e, t, n, r) {
  var l = L,
    i = en.transition;
  en.transition = null;
  try {
    ((L = 1), us(e, t, n, r));
  } finally {
    ((L = l), (en.transition = i));
  }
}
function hd(e, t, n, r) {
  var l = L,
    i = en.transition;
  en.transition = null;
  try {
    ((L = 4), us(e, t, n, r));
  } finally {
    ((L = l), (en.transition = i));
  }
}
function us(e, t, n, r) {
  if ($r) {
    var l = gi(e, t, n, r);
    if (l === null) (Ul(e, t, r, Br, n), to(e, r));
    else if (fd(l, e, t, n, r)) r.stopPropagation();
    else if ((to(e, r), t & 4 && -1 < dd.indexOf(e))) {
      for (; l !== null; ) {
        var i = nr(l);
        if (
          (i !== null && Fu(i),
          (i = gi(e, t, n, r)),
          i === null && Ul(e, t, r, Br, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else Ul(e, t, r, null, n);
  }
}
var Br = null;
function gi(e, t, n, r) {
  if (((Br = null), (e = ls(r)), (e = Mt(e)), e !== null))
    if (((t = zt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Iu(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((Br = e), null);
}
function Wu(e) {
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
      switch (nd()) {
        case is:
          return 1;
        case Lu:
          return 4;
        case Ur:
        case rd:
          return 16;
        case Ru:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var st = null,
  as = null,
  jr = null;
function Gu() {
  if (jr) return jr;
  var e,
    t = as,
    n = t.length,
    r,
    l = "value" in st ? st.value : st.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === l[i - r]; r++);
  return (jr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Tr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function mr() {
  return !0;
}
function ro() {
  return !1;
}
function _e(e) {
  function t(n, r, l, i, s) {
    ((this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = s),
      (this.currentTarget = null));
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? mr
        : ro),
      (this.isPropagationStopped = ro),
      this
    );
  }
  return (
    G(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = mr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = mr));
      },
      persist: function () {},
      isPersistent: mr,
    }),
    t
  );
}
var pn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  cs = _e(pn),
  tr = G({}, pn, { view: 0, detail: 0 }),
  vd = _e(tr),
  Il,
  Pl,
  gn,
  al = G({}, tr, {
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
    getModifierState: ds,
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
        : (e !== gn &&
            (gn && e.type === "mousemove"
              ? ((Il = e.screenX - gn.screenX), (Pl = e.screenY - gn.screenY))
              : (Pl = Il = 0),
            (gn = e)),
          Il);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Pl;
    },
  }),
  lo = _e(al),
  xd = G({}, al, { dataTransfer: 0 }),
  yd = _e(xd),
  gd = G({}, tr, { relatedTarget: 0 }),
  Dl = _e(gd),
  Cd = G({}, pn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  wd = _e(Cd),
  Nd = G({}, pn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Sd = _e(Nd),
  kd = G({}, pn, { data: 0 }),
  io = _e(kd),
  _d = {
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
  Md = {
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
  Ed = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function jd(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Ed[e]) ? !!t[e] : !1;
}
function ds() {
  return jd;
}
var Td = G({}, tr, {
    key: function (e) {
      if (e.key) {
        var t = _d[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Tr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? Md[e.keyCode] || "Unidentified"
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
    getModifierState: ds,
    charCode: function (e) {
      return e.type === "keypress" ? Tr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Tr(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  Ad = _e(Td),
  Id = G({}, al, {
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
  so = _e(Id),
  Pd = G({}, tr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ds,
  }),
  Dd = _e(Pd),
  Od = G({}, pn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Ld = _e(Od),
  Rd = G({}, al, {
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
  zd = _e(Rd),
  Hd = [9, 13, 27, 32],
  fs = Ze && "CompositionEvent" in window,
  Tn = null;
Ze && "documentMode" in document && (Tn = document.documentMode);
var Fd = Ze && "TextEvent" in window && !Tn,
  Qu = Ze && (!fs || (Tn && 8 < Tn && 11 >= Tn)),
  oo = " ",
  uo = !1;
function Ku(e, t) {
  switch (e) {
    case "keyup":
      return Hd.indexOf(t.keyCode) !== -1;
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
function Yu(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var Vt = !1;
function Ud(e, t) {
  switch (e) {
    case "compositionend":
      return Yu(t);
    case "keypress":
      return t.which !== 32 ? null : ((uo = !0), oo);
    case "textInput":
      return ((e = t.data), e === oo && uo ? null : e);
    default:
      return null;
  }
}
function Vd(e, t) {
  if (Vt)
    return e === "compositionend" || (!fs && Ku(e, t))
      ? ((e = Gu()), (jr = as = st = null), (Vt = !1), e)
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
      return Qu && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var $d = {
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
function ao(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!$d[e.type] : t === "textarea";
}
function Xu(e, t, n, r) {
  (Mu(r),
    (t = Wr(t, "onChange")),
    0 < t.length &&
      ((n = new cs("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t })));
}
var An = null,
  $n = null;
function Bd(e) {
  sa(e, 0);
}
function cl(e) {
  var t = Wt(e);
  if (gu(t)) return e;
}
function Wd(e, t) {
  if (e === "change") return t;
}
var Zu = !1;
if (Ze) {
  var Ol;
  if (Ze) {
    var Ll = "oninput" in document;
    if (!Ll) {
      var co = document.createElement("div");
      (co.setAttribute("oninput", "return;"),
        (Ll = typeof co.oninput == "function"));
    }
    Ol = Ll;
  } else Ol = !1;
  Zu = Ol && (!document.documentMode || 9 < document.documentMode);
}
function fo() {
  An && (An.detachEvent("onpropertychange", Ju), ($n = An = null));
}
function Ju(e) {
  if (e.propertyName === "value" && cl($n)) {
    var t = [];
    (Xu(t, $n, e, ls(e)), Au(Bd, t));
  }
}
function Gd(e, t, n) {
  e === "focusin"
    ? (fo(), (An = t), ($n = n), An.attachEvent("onpropertychange", Ju))
    : e === "focusout" && fo();
}
function Qd(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return cl($n);
}
function Kd(e, t) {
  if (e === "click") return cl(t);
}
function Yd(e, t) {
  if (e === "input" || e === "change") return cl(t);
}
function Xd(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var He = typeof Object.is == "function" ? Object.is : Xd;
function Bn(e, t) {
  if (He(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!ti.call(t, l) || !He(e[l], t[l])) return !1;
  }
  return !0;
}
function po(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function mo(e, t) {
  var n = po(e);
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
    n = po(n);
  }
}
function qu(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? qu(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function bu() {
  for (var e = window, t = zr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = zr(e.document);
  }
  return t;
}
function ps(e) {
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
function Zd(e) {
  var t = bu(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    qu(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && ps(n)) {
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
        var l = n.textContent.length,
          i = Math.min(r.start, l);
        ((r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = mo(n, i)));
        var s = mo(n, r);
        l &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
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
var Jd = Ze && "documentMode" in document && 11 >= document.documentMode,
  $t = null,
  Ci = null,
  In = null,
  wi = !1;
function ho(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  wi ||
    $t == null ||
    $t !== zr(r) ||
    ((r = $t),
    "selectionStart" in r && ps(r)
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
    (In && Bn(In, r)) ||
      ((In = r),
      (r = Wr(Ci, "onSelect")),
      0 < r.length &&
        ((t = new cs("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = $t))));
}
function hr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Bt = {
    animationend: hr("Animation", "AnimationEnd"),
    animationiteration: hr("Animation", "AnimationIteration"),
    animationstart: hr("Animation", "AnimationStart"),
    transitionend: hr("Transition", "TransitionEnd"),
  },
  Rl = {},
  ea = {};
Ze &&
  ((ea = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Bt.animationend.animation,
    delete Bt.animationiteration.animation,
    delete Bt.animationstart.animation),
  "TransitionEvent" in window || delete Bt.transitionend.transition);
function dl(e) {
  if (Rl[e]) return Rl[e];
  if (!Bt[e]) return e;
  var t = Bt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in ea) return (Rl[e] = t[n]);
  return e;
}
var ta = dl("animationend"),
  na = dl("animationiteration"),
  ra = dl("animationstart"),
  la = dl("transitionend"),
  ia = new Map(),
  vo =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function yt(e, t) {
  (ia.set(e, t), Rt(t, [e]));
}
for (var zl = 0; zl < vo.length; zl++) {
  var Hl = vo[zl],
    qd = Hl.toLowerCase(),
    bd = Hl[0].toUpperCase() + Hl.slice(1);
  yt(qd, "on" + bd);
}
yt(ta, "onAnimationEnd");
yt(na, "onAnimationIteration");
yt(ra, "onAnimationStart");
yt("dblclick", "onDoubleClick");
yt("focusin", "onFocus");
yt("focusout", "onBlur");
yt(la, "onTransitionEnd");
ln("onMouseEnter", ["mouseout", "mouseover"]);
ln("onMouseLeave", ["mouseout", "mouseover"]);
ln("onPointerEnter", ["pointerout", "pointerover"]);
ln("onPointerLeave", ["pointerout", "pointerover"]);
Rt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
Rt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
Rt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Rt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Rt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Rt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Mn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  ef = new Set("cancel close invalid load scroll toggle".split(" ").concat(Mn));
function xo(e, t, n) {
  var r = e.type || "unknown-event";
  ((e.currentTarget = n), qc(r, t, void 0, e), (e.currentTarget = null));
}
function sa(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var u = r[s],
            a = u.instance,
            d = u.currentTarget;
          if (((u = u.listener), a !== i && l.isPropagationStopped())) break e;
          (xo(l, u, d), (i = a));
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((u = r[s]),
            (a = u.instance),
            (d = u.currentTarget),
            (u = u.listener),
            a !== i && l.isPropagationStopped())
          )
            break e;
          (xo(l, u, d), (i = a));
        }
    }
  }
  if (Fr) throw ((e = vi), (Fr = !1), (vi = null), e);
}
function H(e, t) {
  var n = t[Mi];
  n === void 0 && (n = t[Mi] = new Set());
  var r = e + "__bubble";
  n.has(r) || (oa(t, e, 2, !1), n.add(r));
}
function Fl(e, t, n) {
  var r = 0;
  (t && (r |= 4), oa(n, e, r, t));
}
var vr = "_reactListening" + Math.random().toString(36).slice(2);
function Wn(e) {
  if (!e[vr]) {
    ((e[vr] = !0),
      mu.forEach(function (n) {
        n !== "selectionchange" && (ef.has(n) || Fl(n, !1, e), Fl(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[vr] || ((t[vr] = !0), Fl("selectionchange", !1, t));
  }
}
function oa(e, t, n, r) {
  switch (Wu(t)) {
    case 1:
      var l = md;
      break;
    case 4:
      l = hd;
      break;
    default:
      l = us;
  }
  ((n = l.bind(null, t, n, e)),
    (l = void 0),
    !hi ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
        ? e.addEventListener(t, n, { passive: l })
        : e.addEventListener(t, n, !1));
}
function Ul(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var a = s.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = s.stateNode.containerInfo),
              a === l || (a.nodeType === 8 && a.parentNode === l))
            )
              return;
            s = s.return;
          }
        for (; u !== null; ) {
          if (((s = Mt(u)), s === null)) return;
          if (((a = s.tag), a === 5 || a === 6)) {
            r = i = s;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Au(function () {
    var d = i,
      h = ls(n),
      v = [];
    e: {
      var m = ia.get(e);
      if (m !== void 0) {
        var g = cs,
          C = e;
        switch (e) {
          case "keypress":
            if (Tr(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = Ad;
            break;
          case "focusin":
            ((C = "focus"), (g = Dl));
            break;
          case "focusout":
            ((C = "blur"), (g = Dl));
            break;
          case "beforeblur":
          case "afterblur":
            g = Dl;
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
            g = lo;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = yd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = Dd;
            break;
          case ta:
          case na:
          case ra:
            g = wd;
            break;
          case la:
            g = Ld;
            break;
          case "scroll":
            g = vd;
            break;
          case "wheel":
            g = zd;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = Sd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = so;
        }
        var N = (t & 4) !== 0,
          R = !N && e === "scroll",
          f = N ? (m !== null ? m + "Capture" : null) : m;
        N = [];
        for (var c = d, p; c !== null; ) {
          p = c;
          var x = p.stateNode;
          if (
            (p.tag === 5 &&
              x !== null &&
              ((p = x),
              f !== null && ((x = Hn(c, f)), x != null && N.push(Gn(c, x, p)))),
            R)
          )
            break;
          c = c.return;
        }
        0 < N.length &&
          ((m = new g(m, C, null, n, h)), v.push({ event: m, listeners: N }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          m &&
            n !== pi &&
            (C = n.relatedTarget || n.fromElement) &&
            (Mt(C) || C[Je]))
        )
          break e;
        if (
          (g || m) &&
          ((m =
            h.window === h
              ? h
              : (m = h.ownerDocument)
                ? m.defaultView || m.parentWindow
                : window),
          g
            ? ((C = n.relatedTarget || n.toElement),
              (g = d),
              (C = C ? Mt(C) : null),
              C !== null &&
                ((R = zt(C)), C !== R || (C.tag !== 5 && C.tag !== 6)) &&
                (C = null))
            : ((g = null), (C = d)),
          g !== C)
        ) {
          if (
            ((N = lo),
            (x = "onMouseLeave"),
            (f = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((N = so),
              (x = "onPointerLeave"),
              (f = "onPointerEnter"),
              (c = "pointer")),
            (R = g == null ? m : Wt(g)),
            (p = C == null ? m : Wt(C)),
            (m = new N(x, c + "leave", g, n, h)),
            (m.target = R),
            (m.relatedTarget = p),
            (x = null),
            Mt(h) === d &&
              ((N = new N(f, c + "enter", C, n, h)),
              (N.target = p),
              (N.relatedTarget = R),
              (x = N)),
            (R = x),
            g && C)
          )
            t: {
              for (N = g, f = C, c = 0, p = N; p; p = Ht(p)) c++;
              for (p = 0, x = f; x; x = Ht(x)) p++;
              for (; 0 < c - p; ) ((N = Ht(N)), c--);
              for (; 0 < p - c; ) ((f = Ht(f)), p--);
              for (; c--; ) {
                if (N === f || (f !== null && N === f.alternate)) break t;
                ((N = Ht(N)), (f = Ht(f)));
              }
              N = null;
            }
          else N = null;
          (g !== null && yo(v, m, g, N, !1),
            C !== null && R !== null && yo(v, R, C, N, !0));
        }
      }
      e: {
        if (
          ((m = d ? Wt(d) : window),
          (g = m.nodeName && m.nodeName.toLowerCase()),
          g === "select" || (g === "input" && m.type === "file"))
        )
          var k = Wd;
        else if (ao(m))
          if (Zu) k = Yd;
          else {
            k = Qd;
            var M = Gd;
          }
        else
          (g = m.nodeName) &&
            g.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (k = Kd);
        if (k && (k = k(e, d))) {
          Xu(v, k, n, h);
          break e;
        }
        (M && M(e, m, d),
          e === "focusout" &&
            (M = m._wrapperState) &&
            M.controlled &&
            m.type === "number" &&
            ui(m, "number", m.value));
      }
      switch (((M = d ? Wt(d) : window), e)) {
        case "focusin":
          (ao(M) || M.contentEditable === "true") &&
            (($t = M), (Ci = d), (In = null));
          break;
        case "focusout":
          In = Ci = $t = null;
          break;
        case "mousedown":
          wi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((wi = !1), ho(v, n, h));
          break;
        case "selectionchange":
          if (Jd) break;
        case "keydown":
        case "keyup":
          ho(v, n, h);
      }
      var E;
      if (fs)
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
        Vt
          ? Ku(e, n) && (j = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (j = "onCompositionStart");
      (j &&
        (Qu &&
          n.locale !== "ko" &&
          (Vt || j !== "onCompositionStart"
            ? j === "onCompositionEnd" && Vt && (E = Gu())
            : ((st = h),
              (as = "value" in st ? st.value : st.textContent),
              (Vt = !0))),
        (M = Wr(d, j)),
        0 < M.length &&
          ((j = new io(j, e, null, n, h)),
          v.push({ event: j, listeners: M }),
          E ? (j.data = E) : ((E = Yu(n)), E !== null && (j.data = E)))),
        (E = Fd ? Ud(e, n) : Vd(e, n)) &&
          ((d = Wr(d, "onBeforeInput")),
          0 < d.length &&
            ((h = new io("onBeforeInput", "beforeinput", null, n, h)),
            v.push({ event: h, listeners: d }),
            (h.data = E))));
    }
    sa(v, t);
  });
}
function Gn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Wr(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    (l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = Hn(e, n)),
      i != null && r.unshift(Gn(e, i, l)),
      (i = Hn(e, t)),
      i != null && r.push(Gn(e, i, l))),
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
function yo(e, t, n, r, l) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var u = n,
      a = u.alternate,
      d = u.stateNode;
    if (a !== null && a === r) break;
    (u.tag === 5 &&
      d !== null &&
      ((u = d),
      l
        ? ((a = Hn(n, i)), a != null && s.unshift(Gn(n, a, u)))
        : l || ((a = Hn(n, i)), a != null && s.push(Gn(n, a, u)))),
      (n = n.return));
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var tf = /\r\n?/g,
  nf = /\u0000|\uFFFD/g;
function go(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      tf,
      `
`,
    )
    .replace(nf, "");
}
function xr(e, t, n) {
  if (((t = go(t)), go(e) !== t && n)) throw Error(y(425));
}
function Gr() {}
var Ni = null,
  Si = null;
function ki(e, t) {
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
var _i = typeof setTimeout == "function" ? setTimeout : void 0,
  rf = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Co = typeof Promise == "function" ? Promise : void 0,
  lf =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Co < "u"
        ? function (e) {
            return Co.resolve(null).then(e).catch(sf);
          }
        : _i;
function sf(e) {
  setTimeout(function () {
    throw e;
  });
}
function Vl(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          (e.removeChild(l), Vn(t));
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Vn(t);
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
function wo(e) {
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
var mn = Math.random().toString(36).slice(2),
  $e = "__reactFiber$" + mn,
  Qn = "__reactProps$" + mn,
  Je = "__reactContainer$" + mn,
  Mi = "__reactEvents$" + mn,
  of = "__reactListeners$" + mn,
  uf = "__reactHandles$" + mn;
function Mt(e) {
  var t = e[$e];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Je] || n[$e])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = wo(e); e !== null; ) {
          if ((n = e[$e])) return n;
          e = wo(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function nr(e) {
  return (
    (e = e[$e] || e[Je]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Wt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(y(33));
}
function fl(e) {
  return e[Qn] || null;
}
var Ei = [],
  Gt = -1;
function gt(e) {
  return { current: e };
}
function F(e) {
  0 > Gt || ((e.current = Ei[Gt]), (Ei[Gt] = null), Gt--);
}
function z(e, t) {
  (Gt++, (Ei[Gt] = e.current), (e.current = t));
}
var xt = {},
  ue = gt(xt),
  ve = gt(!1),
  It = xt;
function sn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return xt;
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
function xe(e) {
  return ((e = e.childContextTypes), e != null);
}
function Qr() {
  (F(ve), F(ue));
}
function No(e, t, n) {
  if (ue.current !== xt) throw Error(y(168));
  (z(ue, t), z(ve, n));
}
function ua(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(y(108, Gc(e) || "Unknown", l));
  return G({}, n, r);
}
function Kr(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || xt),
    (It = ue.current),
    z(ue, e),
    z(ve, ve.current),
    !0
  );
}
function So(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(y(169));
  (n
    ? ((e = ua(e, t, It)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      F(ve),
      F(ue),
      z(ue, e))
    : F(ve),
    z(ve, n));
}
var Qe = null,
  pl = !1,
  $l = !1;
function aa(e) {
  Qe === null ? (Qe = [e]) : Qe.push(e);
}
function af(e) {
  ((pl = !0), aa(e));
}
function Ct() {
  if (!$l && Qe !== null) {
    $l = !0;
    var e = 0,
      t = L;
    try {
      var n = Qe;
      for (L = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ((Qe = null), (pl = !1));
    } catch (l) {
      throw (Qe !== null && (Qe = Qe.slice(e + 1)), Ou(is, Ct), l);
    } finally {
      ((L = t), ($l = !1));
    }
  }
  return null;
}
var Qt = [],
  Kt = 0,
  Yr = null,
  Xr = 0,
  Me = [],
  Ee = 0,
  Pt = null,
  Ke = 1,
  Ye = "";
function kt(e, t) {
  ((Qt[Kt++] = Xr), (Qt[Kt++] = Yr), (Yr = e), (Xr = t));
}
function ca(e, t, n) {
  ((Me[Ee++] = Ke), (Me[Ee++] = Ye), (Me[Ee++] = Pt), (Pt = e));
  var r = Ke;
  e = Ye;
  var l = 32 - Re(r) - 1;
  ((r &= ~(1 << l)), (n += 1));
  var i = 32 - Re(t) + l;
  if (30 < i) {
    var s = l - (l % 5);
    ((i = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (l -= s),
      (Ke = (1 << (32 - Re(t) + l)) | (n << l) | r),
      (Ye = i + e));
  } else ((Ke = (1 << i) | (n << l) | r), (Ye = e));
}
function ms(e) {
  e.return !== null && (kt(e, 1), ca(e, 1, 0));
}
function hs(e) {
  for (; e === Yr; )
    ((Yr = Qt[--Kt]), (Qt[Kt] = null), (Xr = Qt[--Kt]), (Qt[Kt] = null));
  for (; e === Pt; )
    ((Pt = Me[--Ee]),
      (Me[Ee] = null),
      (Ye = Me[--Ee]),
      (Me[Ee] = null),
      (Ke = Me[--Ee]),
      (Me[Ee] = null));
}
var Ne = null,
  we = null,
  $ = !1,
  Le = null;
function da(e, t) {
  var n = je(5, null, null, 0);
  ((n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function ko(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ne = e), (we = dt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ne = e), (we = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Pt !== null ? { id: Ke, overflow: Ye } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = je(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ne = e),
            (we = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function ji(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ti(e) {
  if ($) {
    var t = we;
    if (t) {
      var n = t;
      if (!ko(e, t)) {
        if (ji(e)) throw Error(y(418));
        t = dt(n.nextSibling);
        var r = Ne;
        t && ko(e, t)
          ? da(r, n)
          : ((e.flags = (e.flags & -4097) | 2), ($ = !1), (Ne = e));
      }
    } else {
      if (ji(e)) throw Error(y(418));
      ((e.flags = (e.flags & -4097) | 2), ($ = !1), (Ne = e));
    }
  }
}
function _o(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ne = e;
}
function yr(e) {
  if (e !== Ne) return !1;
  if (!$) return (_o(e), ($ = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !ki(e.type, e.memoizedProps))),
    t && (t = we))
  ) {
    if (ji(e)) throw (fa(), Error(y(418)));
    for (; t; ) (da(e, t), (t = dt(t.nextSibling)));
  }
  if ((_o(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(y(317));
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
  } else we = Ne ? dt(e.stateNode.nextSibling) : null;
  return !0;
}
function fa() {
  for (var e = we; e; ) e = dt(e.nextSibling);
}
function on() {
  ((we = Ne = null), ($ = !1));
}
function vs(e) {
  Le === null ? (Le = [e]) : Le.push(e);
}
var cf = et.ReactCurrentBatchConfig;
function Cn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(y(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(y(147, e));
      var l = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (s) {
            var u = l.refs;
            s === null ? delete u[i] : (u[i] = s);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(y(284));
    if (!n._owner) throw Error(y(290, e));
  }
  return e;
}
function gr(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      y(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    )
  );
}
function Mo(e) {
  var t = e._init;
  return t(e._payload);
}
function pa(e) {
  function t(f, c) {
    if (e) {
      var p = f.deletions;
      p === null ? ((f.deletions = [c]), (f.flags |= 16)) : p.push(c);
    }
  }
  function n(f, c) {
    if (!e) return null;
    for (; c !== null; ) (t(f, c), (c = c.sibling));
    return null;
  }
  function r(f, c) {
    for (f = new Map(); c !== null; )
      (c.key !== null ? f.set(c.key, c) : f.set(c.index, c), (c = c.sibling));
    return f;
  }
  function l(f, c) {
    return ((f = ht(f, c)), (f.index = 0), (f.sibling = null), f);
  }
  function i(f, c, p) {
    return (
      (f.index = p),
      e
        ? ((p = f.alternate),
          p !== null
            ? ((p = p.index), p < c ? ((f.flags |= 2), c) : p)
            : ((f.flags |= 2), c))
        : ((f.flags |= 1048576), c)
    );
  }
  function s(f) {
    return (e && f.alternate === null && (f.flags |= 2), f);
  }
  function u(f, c, p, x) {
    return c === null || c.tag !== 6
      ? ((c = Xl(p, f.mode, x)), (c.return = f), c)
      : ((c = l(c, p)), (c.return = f), c);
  }
  function a(f, c, p, x) {
    var k = p.type;
    return k === Ut
      ? h(f, c, p.props.children, x, p.key)
      : c !== null &&
          (c.elementType === k ||
            (typeof k == "object" &&
              k !== null &&
              k.$$typeof === nt &&
              Mo(k) === c.type))
        ? ((x = l(c, p.props)), (x.ref = Cn(f, c, p)), (x.return = f), x)
        : ((x = Rr(p.type, p.key, p.props, null, f.mode, x)),
          (x.ref = Cn(f, c, p)),
          (x.return = f),
          x);
  }
  function d(f, c, p, x) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== p.containerInfo ||
      c.stateNode.implementation !== p.implementation
      ? ((c = Zl(p, f.mode, x)), (c.return = f), c)
      : ((c = l(c, p.children || [])), (c.return = f), c);
  }
  function h(f, c, p, x, k) {
    return c === null || c.tag !== 7
      ? ((c = At(p, f.mode, x, k)), (c.return = f), c)
      : ((c = l(c, p)), (c.return = f), c);
  }
  function v(f, c, p) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return ((c = Xl("" + c, f.mode, p)), (c.return = f), c);
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case ur:
          return (
            (p = Rr(c.type, c.key, c.props, null, f.mode, p)),
            (p.ref = Cn(f, null, c)),
            (p.return = f),
            p
          );
        case Ft:
          return ((c = Zl(c, f.mode, p)), (c.return = f), c);
        case nt:
          var x = c._init;
          return v(f, x(c._payload), p);
      }
      if (kn(c) || hn(c))
        return ((c = At(c, f.mode, p, null)), (c.return = f), c);
      gr(f, c);
    }
    return null;
  }
  function m(f, c, p, x) {
    var k = c !== null ? c.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return k !== null ? null : u(f, c, "" + p, x);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case ur:
          return p.key === k ? a(f, c, p, x) : null;
        case Ft:
          return p.key === k ? d(f, c, p, x) : null;
        case nt:
          return ((k = p._init), m(f, c, k(p._payload), x));
      }
      if (kn(p) || hn(p)) return k !== null ? null : h(f, c, p, x, null);
      gr(f, p);
    }
    return null;
  }
  function g(f, c, p, x, k) {
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return ((f = f.get(p) || null), u(c, f, "" + x, k));
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case ur:
          return (
            (f = f.get(x.key === null ? p : x.key) || null),
            a(c, f, x, k)
          );
        case Ft:
          return (
            (f = f.get(x.key === null ? p : x.key) || null),
            d(c, f, x, k)
          );
        case nt:
          var M = x._init;
          return g(f, c, p, M(x._payload), k);
      }
      if (kn(x) || hn(x)) return ((f = f.get(p) || null), h(c, f, x, k, null));
      gr(c, x);
    }
    return null;
  }
  function C(f, c, p, x) {
    for (
      var k = null, M = null, E = c, j = (c = 0), V = null;
      E !== null && j < p.length;
      j++
    ) {
      E.index > j ? ((V = E), (E = null)) : (V = E.sibling);
      var I = m(f, E, p[j], x);
      if (I === null) {
        E === null && (E = V);
        break;
      }
      (e && E && I.alternate === null && t(f, E),
        (c = i(I, c, j)),
        M === null ? (k = I) : (M.sibling = I),
        (M = I),
        (E = V));
    }
    if (j === p.length) return (n(f, E), $ && kt(f, j), k);
    if (E === null) {
      for (; j < p.length; j++)
        ((E = v(f, p[j], x)),
          E !== null &&
            ((c = i(E, c, j)),
            M === null ? (k = E) : (M.sibling = E),
            (M = E)));
      return ($ && kt(f, j), k);
    }
    for (E = r(f, E); j < p.length; j++)
      ((V = g(E, f, j, p[j], x)),
        V !== null &&
          (e && V.alternate !== null && E.delete(V.key === null ? j : V.key),
          (c = i(V, c, j)),
          M === null ? (k = V) : (M.sibling = V),
          (M = V)));
    return (
      e &&
        E.forEach(function (pe) {
          return t(f, pe);
        }),
      $ && kt(f, j),
      k
    );
  }
  function N(f, c, p, x) {
    var k = hn(p);
    if (typeof k != "function") throw Error(y(150));
    if (((p = k.call(p)), p == null)) throw Error(y(151));
    for (
      var M = (k = null), E = c, j = (c = 0), V = null, I = p.next();
      E !== null && !I.done;
      j++, I = p.next()
    ) {
      E.index > j ? ((V = E), (E = null)) : (V = E.sibling);
      var pe = m(f, E, I.value, x);
      if (pe === null) {
        E === null && (E = V);
        break;
      }
      (e && E && pe.alternate === null && t(f, E),
        (c = i(pe, c, j)),
        M === null ? (k = pe) : (M.sibling = pe),
        (M = pe),
        (E = V));
    }
    if (I.done) return (n(f, E), $ && kt(f, j), k);
    if (E === null) {
      for (; !I.done; j++, I = p.next())
        ((I = v(f, I.value, x)),
          I !== null &&
            ((c = i(I, c, j)),
            M === null ? (k = I) : (M.sibling = I),
            (M = I)));
      return ($ && kt(f, j), k);
    }
    for (E = r(f, E); !I.done; j++, I = p.next())
      ((I = g(E, f, j, I.value, x)),
        I !== null &&
          (e && I.alternate !== null && E.delete(I.key === null ? j : I.key),
          (c = i(I, c, j)),
          M === null ? (k = I) : (M.sibling = I),
          (M = I)));
    return (
      e &&
        E.forEach(function (wt) {
          return t(f, wt);
        }),
      $ && kt(f, j),
      k
    );
  }
  function R(f, c, p, x) {
    if (
      (typeof p == "object" &&
        p !== null &&
        p.type === Ut &&
        p.key === null &&
        (p = p.props.children),
      typeof p == "object" && p !== null)
    ) {
      switch (p.$$typeof) {
        case ur:
          e: {
            for (var k = p.key, M = c; M !== null; ) {
              if (M.key === k) {
                if (((k = p.type), k === Ut)) {
                  if (M.tag === 7) {
                    (n(f, M.sibling),
                      (c = l(M, p.props.children)),
                      (c.return = f),
                      (f = c));
                    break e;
                  }
                } else if (
                  M.elementType === k ||
                  (typeof k == "object" &&
                    k !== null &&
                    k.$$typeof === nt &&
                    Mo(k) === M.type)
                ) {
                  (n(f, M.sibling),
                    (c = l(M, p.props)),
                    (c.ref = Cn(f, M, p)),
                    (c.return = f),
                    (f = c));
                  break e;
                }
                n(f, M);
                break;
              } else t(f, M);
              M = M.sibling;
            }
            p.type === Ut
              ? ((c = At(p.props.children, f.mode, x, p.key)),
                (c.return = f),
                (f = c))
              : ((x = Rr(p.type, p.key, p.props, null, f.mode, x)),
                (x.ref = Cn(f, c, p)),
                (x.return = f),
                (f = x));
          }
          return s(f);
        case Ft:
          e: {
            for (M = p.key; c !== null; ) {
              if (c.key === M)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === p.containerInfo &&
                  c.stateNode.implementation === p.implementation
                ) {
                  (n(f, c.sibling),
                    (c = l(c, p.children || [])),
                    (c.return = f),
                    (f = c));
                  break e;
                } else {
                  n(f, c);
                  break;
                }
              else t(f, c);
              c = c.sibling;
            }
            ((c = Zl(p, f.mode, x)), (c.return = f), (f = c));
          }
          return s(f);
        case nt:
          return ((M = p._init), R(f, c, M(p._payload), x));
      }
      if (kn(p)) return C(f, c, p, x);
      if (hn(p)) return N(f, c, p, x);
      gr(f, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        c !== null && c.tag === 6
          ? (n(f, c.sibling), (c = l(c, p)), (c.return = f), (f = c))
          : (n(f, c), (c = Xl(p, f.mode, x)), (c.return = f), (f = c)),
        s(f))
      : n(f, c);
  }
  return R;
}
var un = pa(!0),
  ma = pa(!1),
  Zr = gt(null),
  Jr = null,
  Yt = null,
  xs = null;
function ys() {
  xs = Yt = Jr = null;
}
function gs(e) {
  var t = Zr.current;
  (F(Zr), (e._currentValue = t));
}
function Ai(e, t, n) {
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
function tn(e, t) {
  ((Jr = e),
    (xs = Yt = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (he = !0), (e.firstContext = null)));
}
function Ae(e) {
  var t = e._currentValue;
  if (xs !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Yt === null)) {
      if (Jr === null) throw Error(y(308));
      ((Yt = e), (Jr.dependencies = { lanes: 0, firstContext: e }));
    } else Yt = Yt.next = e;
  return t;
}
var Et = null;
function Cs(e) {
  Et === null ? (Et = [e]) : Et.push(e);
}
function ha(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Cs(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    qe(e, r)
  );
}
function qe(e, t) {
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
var rt = !1;
function ws(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function va(e, t) {
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
function Xe(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function ft(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), D & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      qe(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Cs(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    qe(e, n)
  );
}
function Ar(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), ss(e, n));
  }
}
function Eo(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        (i === null ? (l = i = s) : (i = i.next = s), (n = n.next));
      } while (n !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    ((n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
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
function qr(e, t, n, r) {
  var l = e.updateQueue;
  rt = !1;
  var i = l.firstBaseUpdate,
    s = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var a = u,
      d = a.next;
    ((a.next = null), s === null ? (i = d) : (s.next = d), (s = a));
    var h = e.alternate;
    h !== null &&
      ((h = h.updateQueue),
      (u = h.lastBaseUpdate),
      u !== s &&
        (u === null ? (h.firstBaseUpdate = d) : (u.next = d),
        (h.lastBaseUpdate = a)));
  }
  if (i !== null) {
    var v = l.baseState;
    ((s = 0), (h = d = a = null), (u = i));
    do {
      var m = u.lane,
        g = u.eventTime;
      if ((r & m) === m) {
        h !== null &&
          (h = h.next =
            {
              eventTime: g,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var C = e,
            N = u;
          switch (((m = t), (g = n), N.tag)) {
            case 1:
              if (((C = N.payload), typeof C == "function")) {
                v = C.call(g, v, m);
                break e;
              }
              v = C;
              break e;
            case 3:
              C.flags = (C.flags & -65537) | 128;
            case 0:
              if (
                ((C = N.payload),
                (m = typeof C == "function" ? C.call(g, v, m) : C),
                m == null)
              )
                break e;
              v = G({}, v, m);
              break e;
            case 2:
              rt = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (m = l.effects),
          m === null ? (l.effects = [u]) : m.push(u));
      } else
        ((g = {
          eventTime: g,
          lane: m,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          h === null ? ((d = h = g), (a = v)) : (h = h.next = g),
          (s |= m));
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        ((m = u),
          (u = m.next),
          (m.next = null),
          (l.lastBaseUpdate = m),
          (l.shared.pending = null));
      }
    } while (!0);
    if (
      (h === null && (a = v),
      (l.baseState = a),
      (l.firstBaseUpdate = d),
      (l.lastBaseUpdate = h),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do ((s |= l.lane), (l = l.next));
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    ((Ot |= s), (e.lanes = s), (e.memoizedState = v));
  }
}
function jo(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(y(191, l));
        l.call(r);
      }
    }
}
var rr = {},
  We = gt(rr),
  Kn = gt(rr),
  Yn = gt(rr);
function jt(e) {
  if (e === rr) throw Error(y(174));
  return e;
}
function Ns(e, t) {
  switch ((z(Yn, t), z(Kn, e), z(We, rr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ci(null, "");
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ci(t, e)));
  }
  (F(We), z(We, t));
}
function an() {
  (F(We), F(Kn), F(Yn));
}
function xa(e) {
  jt(Yn.current);
  var t = jt(We.current),
    n = ci(t, e.type);
  t !== n && (z(Kn, e), z(We, n));
}
function Ss(e) {
  Kn.current === e && (F(We), F(Kn));
}
var B = gt(0);
function br(e) {
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
var Bl = [];
function ks() {
  for (var e = 0; e < Bl.length; e++)
    Bl[e]._workInProgressVersionPrimary = null;
  Bl.length = 0;
}
var Ir = et.ReactCurrentDispatcher,
  Wl = et.ReactCurrentBatchConfig,
  Dt = 0,
  W = null,
  Z = null,
  ee = null,
  el = !1,
  Pn = !1,
  Xn = 0,
  df = 0;
function ie() {
  throw Error(y(321));
}
function _s(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!He(e[n], t[n])) return !1;
  return !0;
}
function Ms(e, t, n, r, l, i) {
  if (
    ((Dt = i),
    (W = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ir.current = e === null || e.memoizedState === null ? hf : vf),
    (e = n(r, l)),
    Pn)
  ) {
    i = 0;
    do {
      if (((Pn = !1), (Xn = 0), 25 <= i)) throw Error(y(301));
      ((i += 1),
        (ee = Z = null),
        (t.updateQueue = null),
        (Ir.current = xf),
        (e = n(r, l)));
    } while (Pn);
  }
  if (
    ((Ir.current = tl),
    (t = Z !== null && Z.next !== null),
    (Dt = 0),
    (ee = Z = W = null),
    (el = !1),
    t)
  )
    throw Error(y(300));
  return e;
}
function Es() {
  var e = Xn !== 0;
  return ((Xn = 0), e);
}
function Ve() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (ee === null ? (W.memoizedState = ee = e) : (ee = ee.next = e), ee);
}
function Ie() {
  if (Z === null) {
    var e = W.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Z.next;
  var t = ee === null ? W.memoizedState : ee.next;
  if (t !== null) ((ee = t), (Z = e));
  else {
    if (e === null) throw Error(y(310));
    ((Z = e),
      (e = {
        memoizedState: Z.memoizedState,
        baseState: Z.baseState,
        baseQueue: Z.baseQueue,
        queue: Z.queue,
        next: null,
      }),
      ee === null ? (W.memoizedState = ee = e) : (ee = ee.next = e));
  }
  return ee;
}
function Zn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Gl(e) {
  var t = Ie(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = Z,
    l = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var s = l.next;
      ((l.next = i.next), (i.next = s));
    }
    ((r.baseQueue = l = i), (n.pending = null));
  }
  if (l !== null) {
    ((i = l.next), (r = r.baseState));
    var u = (s = null),
      a = null,
      d = i;
    do {
      var h = d.lane;
      if ((Dt & h) === h)
        (a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: d.action,
              hasEagerState: d.hasEagerState,
              eagerState: d.eagerState,
              next: null,
            }),
          (r = d.hasEagerState ? d.eagerState : e(r, d.action)));
      else {
        var v = {
          lane: h,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null,
        };
        (a === null ? ((u = a = v), (s = r)) : (a = a.next = v),
          (W.lanes |= h),
          (Ot |= h));
      }
      d = d.next;
    } while (d !== null && d !== i);
    (a === null ? (s = r) : (a.next = u),
      He(r, t.memoizedState) || (he = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = a),
      (n.lastRenderedState = r));
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do ((i = l.lane), (W.lanes |= i), (Ot |= i), (l = l.next));
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ql(e) {
  var t = Ie(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var s = (l = l.next);
    do ((i = e(i, s.action)), (s = s.next));
    while (s !== l);
    (He(i, t.memoizedState) || (he = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i));
  }
  return [i, r];
}
function ya() {}
function ga(e, t) {
  var n = W,
    r = Ie(),
    l = t(),
    i = !He(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (he = !0)),
    (r = r.queue),
    js(Na.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (ee !== null && ee.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Jn(9, wa.bind(null, n, r, l, t), void 0, null),
      te === null)
    )
      throw Error(y(349));
    Dt & 30 || Ca(n, t, l);
  }
  return l;
}
function Ca(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = W.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (W.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function wa(e, t, n, r) {
  ((t.value = n), (t.getSnapshot = r), Sa(t) && ka(e));
}
function Na(e, t, n) {
  return n(function () {
    Sa(t) && ka(e);
  });
}
function Sa(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !He(e, n);
  } catch {
    return !0;
  }
}
function ka(e) {
  var t = qe(e, 1);
  t !== null && ze(t, e, 1, -1);
}
function To(e) {
  var t = Ve();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Zn,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = mf.bind(null, W, e)),
    [t.memoizedState, e]
  );
}
function Jn(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = W.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (W.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function _a() {
  return Ie().memoizedState;
}
function Pr(e, t, n, r) {
  var l = Ve();
  ((W.flags |= e),
    (l.memoizedState = Jn(1 | t, n, void 0, r === void 0 ? null : r)));
}
function ml(e, t, n, r) {
  var l = Ie();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Z !== null) {
    var s = Z.memoizedState;
    if (((i = s.destroy), r !== null && _s(r, s.deps))) {
      l.memoizedState = Jn(t, n, i, r);
      return;
    }
  }
  ((W.flags |= e), (l.memoizedState = Jn(1 | t, n, i, r)));
}
function Ao(e, t) {
  return Pr(8390656, 8, e, t);
}
function js(e, t) {
  return ml(2048, 8, e, t);
}
function Ma(e, t) {
  return ml(4, 2, e, t);
}
function Ea(e, t) {
  return ml(4, 4, e, t);
}
function ja(e, t) {
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
function Ta(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null),
    ml(4, 4, ja.bind(null, t, e), n)
  );
}
function Ts() {}
function Aa(e, t) {
  var n = Ie();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && _s(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Ia(e, t) {
  var n = Ie();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && _s(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Pa(e, t, n) {
  return Dt & 21
    ? (He(n, t) || ((n = zu()), (W.lanes |= n), (Ot |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (he = !0)), (e.memoizedState = n));
}
function ff(e, t) {
  var n = L;
  ((L = n !== 0 && 4 > n ? n : 4), e(!0));
  var r = Wl.transition;
  Wl.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((L = n), (Wl.transition = r));
  }
}
function Da() {
  return Ie().memoizedState;
}
function pf(e, t, n) {
  var r = mt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Oa(e))
  )
    La(t, n);
  else if (((n = ha(e, t, n, r)), n !== null)) {
    var l = ce();
    (ze(n, e, r, l), Ra(n, t, r));
  }
}
function mf(e, t, n) {
  var r = mt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Oa(e)) La(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var s = t.lastRenderedState,
          u = i(s, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), He(u, s))) {
          var a = t.interleaved;
          (a === null
            ? ((l.next = l), Cs(t))
            : ((l.next = a.next), (a.next = l)),
            (t.interleaved = l));
          return;
        }
      } catch {
      } finally {
      }
    ((n = ha(e, t, l, r)),
      n !== null && ((l = ce()), ze(n, e, r, l), Ra(n, t, r)));
  }
}
function Oa(e) {
  var t = e.alternate;
  return e === W || (t !== null && t === W);
}
function La(e, t) {
  Pn = el = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t));
}
function Ra(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), ss(e, n));
  }
}
var tl = {
    readContext: Ae,
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
  hf = {
    readContext: Ae,
    useCallback: function (e, t) {
      return ((Ve().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: Ae,
    useEffect: Ao,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Pr(4194308, 4, ja.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Pr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Pr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ve();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (n.memoizedState = [e, t]),
        e
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
        (e = e.dispatch = pf.bind(null, W, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ve();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: To,
    useDebugValue: Ts,
    useDeferredValue: function (e) {
      return (Ve().memoizedState = e);
    },
    useTransition: function () {
      var e = To(!1),
        t = e[0];
      return ((e = ff.bind(null, e[1])), (Ve().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = W,
        l = Ve();
      if ($) {
        if (n === void 0) throw Error(y(407));
        n = n();
      } else {
        if (((n = t()), te === null)) throw Error(y(349));
        Dt & 30 || Ca(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        Ao(Na.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Jn(9, wa.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ve(),
        t = te.identifierPrefix;
      if ($) {
        var n = Ye,
          r = Ke;
        ((n = (r & ~(1 << (32 - Re(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Xn++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":"));
      } else ((n = df++), (t = ":" + t + "r" + n.toString(32) + ":"));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  vf = {
    readContext: Ae,
    useCallback: Aa,
    useContext: Ae,
    useEffect: js,
    useImperativeHandle: Ta,
    useInsertionEffect: Ma,
    useLayoutEffect: Ea,
    useMemo: Ia,
    useReducer: Gl,
    useRef: _a,
    useState: function () {
      return Gl(Zn);
    },
    useDebugValue: Ts,
    useDeferredValue: function (e) {
      var t = Ie();
      return Pa(t, Z.memoizedState, e);
    },
    useTransition: function () {
      var e = Gl(Zn)[0],
        t = Ie().memoizedState;
      return [e, t];
    },
    useMutableSource: ya,
    useSyncExternalStore: ga,
    useId: Da,
    unstable_isNewReconciler: !1,
  },
  xf = {
    readContext: Ae,
    useCallback: Aa,
    useContext: Ae,
    useEffect: js,
    useImperativeHandle: Ta,
    useInsertionEffect: Ma,
    useLayoutEffect: Ea,
    useMemo: Ia,
    useReducer: Ql,
    useRef: _a,
    useState: function () {
      return Ql(Zn);
    },
    useDebugValue: Ts,
    useDeferredValue: function (e) {
      var t = Ie();
      return Z === null ? (t.memoizedState = e) : Pa(t, Z.memoizedState, e);
    },
    useTransition: function () {
      var e = Ql(Zn)[0],
        t = Ie().memoizedState;
      return [e, t];
    },
    useMutableSource: ya,
    useSyncExternalStore: ga,
    useId: Da,
    unstable_isNewReconciler: !1,
  };
function De(e, t) {
  if (e && e.defaultProps) {
    ((t = G({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ii(e, t, n, r) {
  ((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : G({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var hl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? zt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ce(),
      l = mt(e),
      i = Xe(r, l);
    ((i.payload = t),
      n != null && (i.callback = n),
      (t = ft(e, i, l)),
      t !== null && (ze(t, e, l, r), Ar(t, e, l)));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ce(),
      l = mt(e),
      i = Xe(r, l);
    ((i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = ft(e, i, l)),
      t !== null && (ze(t, e, l, r), Ar(t, e, l)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ce(),
      r = mt(e),
      l = Xe(n, r);
    ((l.tag = 2),
      t != null && (l.callback = t),
      (t = ft(e, l, r)),
      t !== null && (ze(t, e, r, n), Ar(t, e, r)));
  },
};
function Io(e, t, n, r, l, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, s)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Bn(n, r) || !Bn(l, i)
        : !0
  );
}
function za(e, t, n) {
  var r = !1,
    l = xt,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Ae(i))
      : ((l = xe(t) ? It : ue.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? sn(e, l) : xt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = hl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Po(e, t, n, r) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && hl.enqueueReplaceState(t, t.state, null));
}
function Pi(e, t, n, r) {
  var l = e.stateNode;
  ((l.props = n), (l.state = e.memoizedState), (l.refs = {}), ws(e));
  var i = t.contextType;
  (typeof i == "object" && i !== null
    ? (l.context = Ae(i))
    : ((i = xe(t) ? It : ue.current), (l.context = sn(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Ii(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && hl.enqueueReplaceState(l, l.state, null),
      qr(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308));
}
function cn(e, t) {
  try {
    var n = "",
      r = t;
    do ((n += Wc(r)), (r = r.return));
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
function Kl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Di(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var yf = typeof WeakMap == "function" ? WeakMap : Map;
function Ha(e, t, n) {
  ((n = Xe(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = t.value;
  return (
    (n.callback = function () {
      (rl || ((rl = !0), (Bi = r)), Di(e, t));
    }),
    n
  );
}
function Fa(e, t, n) {
  ((n = Xe(-1, n)), (n.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    ((n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Di(e, t);
      }));
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        (Di(e, t),
          typeof r != "function" &&
            (pt === null ? (pt = new Set([this])) : pt.add(this)));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function Do(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new yf();
    var l = new Set();
    r.set(t, l);
  } else ((l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l)));
  l.has(n) || (l.add(n), (e = Pf.bind(null, e, t, n)), t.then(e, e));
}
function Oo(e) {
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
function Lo(e, t, n, r, l) {
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
              : ((t = Xe(-1, 1)), (t.tag = 2), ft(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var gf = et.ReactCurrentOwner,
  he = !1;
function ae(e, t, n, r) {
  t.child = e === null ? ma(t, null, n, r) : un(t, e.child, n, r);
}
function Ro(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    tn(t, l),
    (r = Ms(e, t, n, r, i, l)),
    (n = Es()),
    e !== null && !he
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        be(e, t, l))
      : ($ && n && ms(t), (t.flags |= 1), ae(e, t, r, l), t.child)
  );
}
function zo(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !zs(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Ua(e, t, i, r, l))
      : ((e = Rr(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var s = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Bn), n(s, r) && e.ref === t.ref)
    )
      return be(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = ht(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Ua(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Bn(i, r) && e.ref === t.ref)
      if (((he = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (he = !0);
      else return ((t.lanes = e.lanes), be(e, t, l));
  }
  return Oi(e, t, n, r, l);
}
function Va(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        z(Zt, Ce),
        (Ce |= n));
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
          z(Zt, Ce),
          (Ce |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        z(Zt, Ce),
        (Ce |= r));
    }
  else
    (i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      z(Zt, Ce),
      (Ce |= r));
  return (ae(e, t, l, n), t.child);
}
function $a(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Oi(e, t, n, r, l) {
  var i = xe(n) ? It : ue.current;
  return (
    (i = sn(t, i)),
    tn(t, l),
    (n = Ms(e, t, n, r, i, l)),
    (r = Es()),
    e !== null && !he
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        be(e, t, l))
      : ($ && r && ms(t), (t.flags |= 1), ae(e, t, n, l), t.child)
  );
}
function Ho(e, t, n, r, l) {
  if (xe(n)) {
    var i = !0;
    Kr(t);
  } else i = !1;
  if ((tn(t, l), t.stateNode === null))
    (Dr(e, t), za(t, n, r), Pi(t, n, r, l), (r = !0));
  else if (e === null) {
    var s = t.stateNode,
      u = t.memoizedProps;
    s.props = u;
    var a = s.context,
      d = n.contextType;
    typeof d == "object" && d !== null
      ? (d = Ae(d))
      : ((d = xe(n) ? It : ue.current), (d = sn(t, d)));
    var h = n.getDerivedStateFromProps,
      v =
        typeof h == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    (v ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((u !== r || a !== d) && Po(t, s, r, d)),
      (rt = !1));
    var m = t.memoizedState;
    ((s.state = m),
      qr(t, r, s, l),
      (a = t.memoizedState),
      u !== r || m !== a || ve.current || rt
        ? (typeof h == "function" && (Ii(t, n, h, r), (a = t.memoizedState)),
          (u = rt || Io(t, n, u, r, m, a, d))
            ? (v ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (s.props = r),
          (s.state = a),
          (s.context = d),
          (r = u))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1)));
  } else {
    ((s = t.stateNode),
      va(e, t),
      (u = t.memoizedProps),
      (d = t.type === t.elementType ? u : De(t.type, u)),
      (s.props = d),
      (v = t.pendingProps),
      (m = s.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = Ae(a))
        : ((a = xe(n) ? It : ue.current), (a = sn(t, a))));
    var g = n.getDerivedStateFromProps;
    ((h =
      typeof g == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((u !== v || m !== a) && Po(t, s, r, a)),
      (rt = !1),
      (m = t.memoizedState),
      (s.state = m),
      qr(t, r, s, l));
    var C = t.memoizedState;
    u !== v || m !== C || ve.current || rt
      ? (typeof g == "function" && (Ii(t, n, g, r), (C = t.memoizedState)),
        (d = rt || Io(t, n, d, r, m, C, a) || !1)
          ? (h ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, C, a),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, C, a)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = C)),
        (s.props = r),
        (s.state = C),
        (s.context = a),
        (r = d))
      : (typeof s.componentDidUpdate != "function" ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Li(e, t, n, r, i, l);
}
function Li(e, t, n, r, l, i) {
  $a(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return (l && So(t, n, !1), be(e, t, i));
  ((r = t.stateNode), (gf.current = t));
  var u =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = un(t, e.child, null, i)), (t.child = un(t, null, u, i)))
      : ae(e, t, u, i),
    (t.memoizedState = r.state),
    l && So(t, n, !0),
    t.child
  );
}
function Ba(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? No(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && No(e, t.context, !1),
    Ns(e, t.containerInfo));
}
function Fo(e, t, n, r, l) {
  return (on(), vs(l), (t.flags |= 256), ae(e, t, n, r), t.child);
}
var Ri = { dehydrated: null, treeContext: null, retryLane: 0 };
function zi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Wa(e, t, n) {
  var r = t.pendingProps,
    l = B.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    u;
  if (
    ((u = s) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    z(B, l & 1),
    e === null)
  )
    return (
      Ti(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = s))
                : (i = yl(s, r, 0, null)),
              (e = At(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = zi(n)),
              (t.memoizedState = Ri),
              e)
            : As(t, s))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return Cf(e, t, s, r, u, l, n);
  if (i) {
    ((i = r.fallback), (s = t.mode), (l = e.child), (u = l.sibling));
    var a = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = ht(l, a)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (i = ht(u, i)) : ((i = At(i, s, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? zi(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (i.memoizedState = s),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Ri),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = ht(i, { mode: "visible", children: r.children })),
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
function As(e, t) {
  return (
    (t = yl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Cr(e, t, n, r) {
  return (
    r !== null && vs(r),
    un(t, e.child, null, n),
    (e = As(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Cf(e, t, n, r, l, i, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Kl(Error(y(422)))), Cr(e, t, s, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (l = t.mode),
          (r = yl({ mode: "visible", children: r.children }, l, 0, null)),
          (i = At(i, l, s, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && un(t, e.child, null, s),
          (t.child.memoizedState = zi(s)),
          (t.memoizedState = Ri),
          i);
  if (!(t.mode & 1)) return Cr(e, t, s, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (
      (r = u),
      (i = Error(y(419))),
      (r = Kl(i, r, void 0)),
      Cr(e, t, s, r)
    );
  }
  if (((u = (s & e.childLanes) !== 0), he || u)) {
    if (((r = te), r !== null)) {
      switch (s & -s) {
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
      ((l = l & (r.suspendedLanes | s) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), qe(e, l), ze(r, e, l, -1)));
    }
    return (Rs(), (r = Kl(Error(y(421)))), Cr(e, t, s, r));
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Df.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (we = dt(l.nextSibling)),
      (Ne = t),
      ($ = !0),
      (Le = null),
      e !== null &&
        ((Me[Ee++] = Ke),
        (Me[Ee++] = Ye),
        (Me[Ee++] = Pt),
        (Ke = e.id),
        (Ye = e.overflow),
        (Pt = t)),
      (t = As(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Uo(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  (r !== null && (r.lanes |= t), Ai(e.return, t, n));
}
function Yl(e, t, n, r, l) {
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
function Ga(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((ae(e, t, r.children, n), (r = B.current), r & 2))
    ((r = (r & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Uo(e, n, t);
        else if (e.tag === 19) Uo(e, n, t);
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
  if ((z(B, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          ((e = n.alternate),
            e !== null && br(e) === null && (l = n),
            (n = n.sibling));
        ((n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Yl(t, !1, l, n, i));
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && br(e) === null)) {
            t.child = l;
            break;
          }
          ((e = l.sibling), (l.sibling = n), (n = l), (l = e));
        }
        Yl(t, !0, n, null, i);
        break;
      case "together":
        Yl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Dr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function be(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Ot |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(y(153));
  if (t.child !== null) {
    for (
      e = t.child, n = ht(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;
    )
      ((e = e.sibling),
        (n = n.sibling = ht(e, e.pendingProps)),
        (n.return = t));
    n.sibling = null;
  }
  return t.child;
}
function wf(e, t, n) {
  switch (t.tag) {
    case 3:
      (Ba(t), on());
      break;
    case 5:
      xa(t);
      break;
    case 1:
      xe(t.type) && Kr(t);
      break;
    case 4:
      Ns(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      (z(Zr, r._currentValue), (r._currentValue = l));
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (z(B, B.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Wa(e, t, n)
            : (z(B, B.current & 1),
              (e = be(e, t, n)),
              e !== null ? e.sibling : null);
      z(B, B.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Ga(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        z(B, B.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), Va(e, t, n));
  }
  return be(e, t, n);
}
var Qa, Hi, Ka, Ya;
Qa = function (e, t) {
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
Hi = function () {};
Ka = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    ((e = t.stateNode), jt(We.current));
    var i = null;
    switch (n) {
      case "input":
        ((l = si(e, l)), (r = si(e, r)), (i = []));
        break;
      case "select":
        ((l = G({}, l, { value: void 0 })),
          (r = G({}, r, { value: void 0 })),
          (i = []));
        break;
      case "textarea":
        ((l = ai(e, l)), (r = ai(e, r)), (i = []));
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Gr);
    }
    di(n, r);
    var s;
    n = null;
    for (d in l)
      if (!r.hasOwnProperty(d) && l.hasOwnProperty(d) && l[d] != null)
        if (d === "style") {
          var u = l[d];
          for (s in u) u.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          d !== "dangerouslySetInnerHTML" &&
            d !== "children" &&
            d !== "suppressContentEditableWarning" &&
            d !== "suppressHydrationWarning" &&
            d !== "autoFocus" &&
            (Rn.hasOwnProperty(d)
              ? i || (i = [])
              : (i = i || []).push(d, null));
    for (d in r) {
      var a = r[d];
      if (
        ((u = l != null ? l[d] : void 0),
        r.hasOwnProperty(d) && a !== u && (a != null || u != null))
      )
        if (d === "style")
          if (u) {
            for (s in u)
              !u.hasOwnProperty(s) ||
                (a && a.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in a)
              a.hasOwnProperty(s) &&
                u[s] !== a[s] &&
                (n || (n = {}), (n[s] = a[s]));
          } else (n || (i || (i = []), i.push(d, n)), (n = a));
        else
          d === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (u = u ? u.__html : void 0),
              a != null && u !== a && (i = i || []).push(d, a))
            : d === "children"
              ? (typeof a != "string" && typeof a != "number") ||
                (i = i || []).push(d, "" + a)
              : d !== "suppressContentEditableWarning" &&
                d !== "suppressHydrationWarning" &&
                (Rn.hasOwnProperty(d)
                  ? (a != null && d === "onScroll" && H("scroll", e),
                    i || u === a || (i = []))
                  : (i = i || []).push(d, a));
    }
    n && (i = i || []).push("style", n);
    var d = i;
    (t.updateQueue = d) && (t.flags |= 4);
  }
};
Ya = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function wn(e, t) {
  if (!$)
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
function se(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      ((n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling));
  else
    for (l = e.child; l !== null; )
      ((n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling));
  return ((e.subtreeFlags |= r), (e.childLanes = n), t);
}
function Nf(e, t, n) {
  var r = t.pendingProps;
  switch ((hs(t), t.tag)) {
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
      return (se(t), null);
    case 1:
      return (xe(t.type) && Qr(), se(t), null);
    case 3:
      return (
        (r = t.stateNode),
        an(),
        F(ve),
        F(ue),
        ks(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (yr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Le !== null && (Qi(Le), (Le = null)))),
        Hi(e, t),
        se(t),
        null
      );
    case 5:
      Ss(t);
      var l = jt(Yn.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (Ka(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(y(166));
          return (se(t), null);
        }
        if (((e = jt(We.current)), yr(t))) {
          ((r = t.stateNode), (n = t.type));
          var i = t.memoizedProps;
          switch (((r[$e] = t), (r[Qn] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              (H("cancel", r), H("close", r));
              break;
            case "iframe":
            case "object":
            case "embed":
              H("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Mn.length; l++) H(Mn[l], r);
              break;
            case "source":
              H("error", r);
              break;
            case "img":
            case "image":
            case "link":
              (H("error", r), H("load", r));
              break;
            case "details":
              H("toggle", r);
              break;
            case "input":
              (Ys(r, i), H("invalid", r));
              break;
            case "select":
              ((r._wrapperState = { wasMultiple: !!i.multiple }),
                H("invalid", r));
              break;
            case "textarea":
              (Zs(r, i), H("invalid", r));
          }
          (di(n, i), (l = null));
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var u = i[s];
              s === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (i.suppressHydrationWarning !== !0 &&
                      xr(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (i.suppressHydrationWarning !== !0 &&
                      xr(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : Rn.hasOwnProperty(s) &&
                  u != null &&
                  s === "onScroll" &&
                  H("scroll", r);
            }
          switch (n) {
            case "input":
              (ar(r), Xs(r, i, !0));
              break;
            case "textarea":
              (ar(r), Js(r));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Gr);
          }
          ((r = l), (t.updateQueue = r), r !== null && (t.flags |= 4));
        } else {
          ((s = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Nu(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = s.createElement(n, { is: r.is }))
                  : ((e = s.createElement(n)),
                    n === "select" &&
                      ((s = e),
                      r.multiple
                        ? (s.multiple = !0)
                        : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[$e] = t),
            (e[Qn] = r),
            Qa(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((s = fi(n, r)), n)) {
              case "dialog":
                (H("cancel", e), H("close", e), (l = r));
                break;
              case "iframe":
              case "object":
              case "embed":
                (H("load", e), (l = r));
                break;
              case "video":
              case "audio":
                for (l = 0; l < Mn.length; l++) H(Mn[l], e);
                l = r;
                break;
              case "source":
                (H("error", e), (l = r));
                break;
              case "img":
              case "image":
              case "link":
                (H("error", e), H("load", e), (l = r));
                break;
              case "details":
                (H("toggle", e), (l = r));
                break;
              case "input":
                (Ys(e, r), (l = si(e, r)), H("invalid", e));
                break;
              case "option":
                l = r;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = G({}, r, { value: void 0 })),
                  H("invalid", e));
                break;
              case "textarea":
                (Zs(e, r), (l = ai(e, r)), H("invalid", e));
                break;
              default:
                l = r;
            }
            (di(n, l), (u = l));
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var a = u[i];
                i === "style"
                  ? _u(e, a)
                  : i === "dangerouslySetInnerHTML"
                    ? ((a = a ? a.__html : void 0), a != null && Su(e, a))
                    : i === "children"
                      ? typeof a == "string"
                        ? (n !== "textarea" || a !== "") && zn(e, a)
                        : typeof a == "number" && zn(e, "" + a)
                      : i !== "suppressContentEditableWarning" &&
                        i !== "suppressHydrationWarning" &&
                        i !== "autoFocus" &&
                        (Rn.hasOwnProperty(i)
                          ? a != null && i === "onScroll" && H("scroll", e)
                          : a != null && es(e, i, a, s));
              }
            switch (n) {
              case "input":
                (ar(e), Xs(e, r, !1));
                break;
              case "textarea":
                (ar(e), Js(e));
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + vt(r.value));
                break;
              case "select":
                ((e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Jt(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Jt(e, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Gr);
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
      return (se(t), null);
    case 6:
      if (e && t.stateNode != null) Ya(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(y(166));
        if (((n = jt(Yn.current)), jt(We.current), yr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[$e] = t),
            (i = r.nodeValue !== n) && ((e = Ne), e !== null))
          )
            switch (e.tag) {
              case 3:
                xr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  xr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[$e] = t),
            (t.stateNode = r));
      }
      return (se(t), null);
    case 13:
      if (
        (F(B),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if ($ && we !== null && t.mode & 1 && !(t.flags & 128))
          (fa(), on(), (t.flags |= 98560), (i = !1));
        else if (((i = yr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(y(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(y(317));
            i[$e] = t;
          } else
            (on(),
              !(t.flags & 128) && (t.memoizedState = null),
              (t.flags |= 4));
          (se(t), (i = !1));
        } else (Le !== null && (Qi(Le), (Le = null)), (i = !0));
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || B.current & 1 ? J === 0 && (J = 3) : Rs())),
          t.updateQueue !== null && (t.flags |= 4),
          se(t),
          null);
    case 4:
      return (
        an(),
        Hi(e, t),
        e === null && Wn(t.stateNode.containerInfo),
        se(t),
        null
      );
    case 10:
      return (gs(t.type._context), se(t), null);
    case 17:
      return (xe(t.type) && Qr(), se(t), null);
    case 19:
      if ((F(B), (i = t.memoizedState), i === null)) return (se(t), null);
      if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
        if (r) wn(i, !1);
        else {
          if (J !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = br(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    wn(i, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;
                )
                  ((i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (s = i.alternate),
                    s === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = s.childLanes),
                        (i.lanes = s.lanes),
                        (i.child = s.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = s.memoizedProps),
                        (i.memoizedState = s.memoizedState),
                        (i.updateQueue = s.updateQueue),
                        (i.type = s.type),
                        (e = s.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling));
                return (z(B, (B.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          i.tail !== null &&
            Y() > dn &&
            ((t.flags |= 128), (r = !0), wn(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = br(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              wn(i, !0),
              i.tail === null && i.tailMode === "hidden" && !s.alternate && !$)
            )
              return (se(t), null);
          } else
            2 * Y() - i.renderingStartTime > dn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), wn(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = i.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (i.last = s));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = Y()),
          (t.sibling = null),
          (n = B.current),
          z(B, r ? (n & 1) | 2 : n & 1),
          t)
        : (se(t), null);
    case 22:
    case 23:
      return (
        Ls(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ce & 1073741824 && (se(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : se(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(y(156, t.tag));
}
function Sf(e, t) {
  switch ((hs(t), t.tag)) {
    case 1:
      return (
        xe(t.type) && Qr(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        an(),
        F(ve),
        F(ue),
        ks(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (Ss(t), null);
    case 13:
      if ((F(B), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(y(340));
        on();
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return (F(B), null);
    case 4:
      return (an(), null);
    case 10:
      return (gs(t.type._context), null);
    case 22:
    case 23:
      return (Ls(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var wr = !1,
  oe = !1,
  kf = typeof WeakSet == "function" ? WeakSet : Set,
  _ = null;
function Xt(e, t) {
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
function Fi(e, t, n) {
  try {
    n();
  } catch (r) {
    Q(e, t, r);
  }
}
var Vo = !1;
function _f(e, t) {
  if (((Ni = $r), (e = bu()), ps(e))) {
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
            (n.nodeType, i.nodeType);
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            u = -1,
            a = -1,
            d = 0,
            h = 0,
            v = e,
            m = null;
          t: for (;;) {
            for (
              var g;
              v !== n || (l !== 0 && v.nodeType !== 3) || (u = s + l),
                v !== i || (r !== 0 && v.nodeType !== 3) || (a = s + r),
                v.nodeType === 3 && (s += v.nodeValue.length),
                (g = v.firstChild) !== null;
            )
              ((m = v), (v = g));
            for (;;) {
              if (v === e) break t;
              if (
                (m === n && ++d === l && (u = s),
                m === i && ++h === r && (a = s),
                (g = v.nextSibling) !== null)
              )
                break;
              ((v = m), (m = v.parentNode));
            }
            v = g;
          }
          n = u === -1 || a === -1 ? null : { start: u, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Si = { focusedElem: e, selectionRange: n }, $r = !1, _ = t; _ !== null; )
    if (((t = _), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (_ = e));
    else
      for (; _ !== null; ) {
        t = _;
        try {
          var C = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (C !== null) {
                  var N = C.memoizedProps,
                    R = C.memoizedState,
                    f = t.stateNode,
                    c = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? N : De(t.type, N),
                      R,
                    );
                  f.__reactInternalSnapshotBeforeUpdate = c;
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
                throw Error(y(163));
            }
        } catch (x) {
          Q(t, t.return, x);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (_ = e));
          break;
        }
        _ = t.return;
      }
  return ((C = Vo), (Vo = !1), C);
}
function Dn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        ((l.destroy = void 0), i !== void 0 && Fi(t, n, i));
      }
      l = l.next;
    } while (l !== r);
  }
}
function vl(e, t) {
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
function Ui(e) {
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
function Xa(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), Xa(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[$e], delete t[Qn], delete t[Mi], delete t[of], delete t[uf])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function Za(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function $o(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Za(e.return)) return null;
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
function Vi(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = Gr)));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Vi(e, t, n), e = e.sibling; e !== null; )
      (Vi(e, t, n), (e = e.sibling));
}
function $i(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for ($i(e, t, n), e = e.sibling; e !== null; )
      ($i(e, t, n), (e = e.sibling));
}
var ne = null,
  Oe = !1;
function tt(e, t, n) {
  for (n = n.child; n !== null; ) (Ja(e, t, n), (n = n.sibling));
}
function Ja(e, t, n) {
  if (Be && typeof Be.onCommitFiberUnmount == "function")
    try {
      Be.onCommitFiberUnmount(ul, n);
    } catch {}
  switch (n.tag) {
    case 5:
      oe || Xt(n, t);
    case 6:
      var r = ne,
        l = Oe;
      ((ne = null),
        tt(e, t, n),
        (ne = r),
        (Oe = l),
        ne !== null &&
          (Oe
            ? ((e = ne),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ne.removeChild(n.stateNode)));
      break;
    case 18:
      ne !== null &&
        (Oe
          ? ((e = ne),
            (n = n.stateNode),
            e.nodeType === 8
              ? Vl(e.parentNode, n)
              : e.nodeType === 1 && Vl(e, n),
            Vn(e))
          : Vl(ne, n.stateNode));
      break;
    case 4:
      ((r = ne),
        (l = Oe),
        (ne = n.stateNode.containerInfo),
        (Oe = !0),
        tt(e, t, n),
        (ne = r),
        (Oe = l));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !oe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            s = i.destroy;
          ((i = i.tag),
            s !== void 0 && (i & 2 || i & 4) && Fi(n, t, s),
            (l = l.next));
        } while (l !== r);
      }
      tt(e, t, n);
      break;
    case 1:
      if (
        !oe &&
        (Xt(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          ((r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount());
        } catch (u) {
          Q(n, t, u);
        }
      tt(e, t, n);
      break;
    case 21:
      tt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((oe = (r = oe) || n.memoizedState !== null), tt(e, t, n), (oe = r))
        : tt(e, t, n);
      break;
    default:
      tt(e, t, n);
  }
}
function Bo(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new kf()),
      t.forEach(function (r) {
        var l = Of.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      }));
  }
}
function Pe(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          s = t,
          u = s;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              ((ne = u.stateNode), (Oe = !1));
              break e;
            case 3:
              ((ne = u.stateNode.containerInfo), (Oe = !0));
              break e;
            case 4:
              ((ne = u.stateNode.containerInfo), (Oe = !0));
              break e;
          }
          u = u.return;
        }
        if (ne === null) throw Error(y(160));
        (Ja(i, s, l), (ne = null), (Oe = !1));
        var a = l.alternate;
        (a !== null && (a.return = null), (l.return = null));
      } catch (d) {
        Q(l, t, d);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) (qa(t, e), (t = t.sibling));
}
function qa(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Pe(t, e), Ue(e), r & 4)) {
        try {
          (Dn(3, e, e.return), vl(3, e));
        } catch (N) {
          Q(e, e.return, N);
        }
        try {
          Dn(5, e, e.return);
        } catch (N) {
          Q(e, e.return, N);
        }
      }
      break;
    case 1:
      (Pe(t, e), Ue(e), r & 512 && n !== null && Xt(n, n.return));
      break;
    case 5:
      if (
        (Pe(t, e),
        Ue(e),
        r & 512 && n !== null && Xt(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          zn(l, "");
        } catch (N) {
          Q(e, e.return, N);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          s = n !== null ? n.memoizedProps : i,
          u = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            (u === "input" && i.type === "radio" && i.name != null && Cu(l, i),
              fi(u, s));
            var d = fi(u, i);
            for (s = 0; s < a.length; s += 2) {
              var h = a[s],
                v = a[s + 1];
              h === "style"
                ? _u(l, v)
                : h === "dangerouslySetInnerHTML"
                  ? Su(l, v)
                  : h === "children"
                    ? zn(l, v)
                    : es(l, h, v, d);
            }
            switch (u) {
              case "input":
                oi(l, i);
                break;
              case "textarea":
                wu(l, i);
                break;
              case "select":
                var m = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var g = i.value;
                g != null
                  ? Jt(l, !!i.multiple, g, !1)
                  : m !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Jt(l, !!i.multiple, i.defaultValue, !0)
                      : Jt(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[Qn] = i;
          } catch (N) {
            Q(e, e.return, N);
          }
      }
      break;
    case 6:
      if ((Pe(t, e), Ue(e), r & 4)) {
        if (e.stateNode === null) throw Error(y(162));
        ((l = e.stateNode), (i = e.memoizedProps));
        try {
          l.nodeValue = i;
        } catch (N) {
          Q(e, e.return, N);
        }
      }
      break;
    case 3:
      if (
        (Pe(t, e), Ue(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Vn(t.containerInfo);
        } catch (N) {
          Q(e, e.return, N);
        }
      break;
    case 4:
      (Pe(t, e), Ue(e));
      break;
    case 13:
      (Pe(t, e),
        Ue(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Ds = Y())),
        r & 4 && Bo(e));
      break;
    case 22:
      if (
        ((h = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((oe = (d = oe) || h), Pe(t, e), (oe = d)) : Pe(t, e),
        Ue(e),
        r & 8192)
      ) {
        if (
          ((d = e.memoizedState !== null),
          (e.stateNode.isHidden = d) && !h && e.mode & 1)
        )
          for (_ = e, h = e.child; h !== null; ) {
            for (v = _ = h; _ !== null; ) {
              switch (((m = _), (g = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Dn(4, m, m.return);
                  break;
                case 1:
                  Xt(m, m.return);
                  var C = m.stateNode;
                  if (typeof C.componentWillUnmount == "function") {
                    ((r = m), (n = m.return));
                    try {
                      ((t = r),
                        (C.props = t.memoizedProps),
                        (C.state = t.memoizedState),
                        C.componentWillUnmount());
                    } catch (N) {
                      Q(r, n, N);
                    }
                  }
                  break;
                case 5:
                  Xt(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    Go(v);
                    continue;
                  }
              }
              g !== null ? ((g.return = m), (_ = g)) : Go(v);
            }
            h = h.sibling;
          }
        e: for (h = null, v = e; ; ) {
          if (v.tag === 5) {
            if (h === null) {
              h = v;
              try {
                ((l = v.stateNode),
                  d
                    ? ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((u = v.stateNode),
                      (a = v.memoizedProps.style),
                      (s =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (u.style.display = ku("display", s))));
              } catch (N) {
                Q(e, e.return, N);
              }
            }
          } else if (v.tag === 6) {
            if (h === null)
              try {
                v.stateNode.nodeValue = d ? "" : v.memoizedProps;
              } catch (N) {
                Q(e, e.return, N);
              }
          } else if (
            ((v.tag !== 22 && v.tag !== 23) ||
              v.memoizedState === null ||
              v === e) &&
            v.child !== null
          ) {
            ((v.child.return = v), (v = v.child));
            continue;
          }
          if (v === e) break e;
          for (; v.sibling === null; ) {
            if (v.return === null || v.return === e) break e;
            (h === v && (h = null), (v = v.return));
          }
          (h === v && (h = null),
            (v.sibling.return = v.return),
            (v = v.sibling));
        }
      }
      break;
    case 19:
      (Pe(t, e), Ue(e), r & 4 && Bo(e));
      break;
    case 21:
      break;
    default:
      (Pe(t, e), Ue(e));
  }
}
function Ue(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Za(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(y(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (zn(l, ""), (r.flags &= -33));
          var i = $o(e);
          $i(e, i, l);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            u = $o(e);
          Vi(e, u, s);
          break;
        default:
          throw Error(y(161));
      }
    } catch (a) {
      Q(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Mf(e, t, n) {
  ((_ = e), ba(e));
}
function ba(e, t, n) {
  for (var r = (e.mode & 1) !== 0; _ !== null; ) {
    var l = _,
      i = l.child;
    if (l.tag === 22 && r) {
      var s = l.memoizedState !== null || wr;
      if (!s) {
        var u = l.alternate,
          a = (u !== null && u.memoizedState !== null) || oe;
        u = wr;
        var d = oe;
        if (((wr = s), (oe = a) && !d))
          for (_ = l; _ !== null; )
            ((s = _),
              (a = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? Qo(l)
                : a !== null
                  ? ((a.return = s), (_ = a))
                  : Qo(l));
        for (; i !== null; ) ((_ = i), ba(i), (i = i.sibling));
        ((_ = l), (wr = u), (oe = d));
      }
      Wo(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (_ = i)) : Wo(e);
  }
}
function Wo(e) {
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
              oe || vl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !oe)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : De(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var i = t.updateQueue;
              i !== null && jo(t, i, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                jo(t, s, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
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
                var d = t.alternate;
                if (d !== null) {
                  var h = d.memoizedState;
                  if (h !== null) {
                    var v = h.dehydrated;
                    v !== null && Vn(v);
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
              throw Error(y(163));
          }
        oe || (t.flags & 512 && Ui(t));
      } catch (m) {
        Q(t, t.return, m);
      }
    }
    if (t === e) {
      _ = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      ((n.return = t.return), (_ = n));
      break;
    }
    _ = t.return;
  }
}
function Go(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t === e) {
      _ = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      ((n.return = t.return), (_ = n));
      break;
    }
    _ = t.return;
  }
}
function Qo(e) {
  for (; _ !== null; ) {
    var t = _;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            vl(4, t);
          } catch (a) {
            Q(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              Q(t, l, a);
            }
          }
          var i = t.return;
          try {
            Ui(t);
          } catch (a) {
            Q(t, i, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Ui(t);
          } catch (a) {
            Q(t, s, a);
          }
      }
    } catch (a) {
      Q(t, t.return, a);
    }
    if (t === e) {
      _ = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      ((u.return = t.return), (_ = u));
      break;
    }
    _ = t.return;
  }
}
var Ef = Math.ceil,
  nl = et.ReactCurrentDispatcher,
  Is = et.ReactCurrentOwner,
  Te = et.ReactCurrentBatchConfig,
  D = 0,
  te = null,
  X = null,
  re = 0,
  Ce = 0,
  Zt = gt(0),
  J = 0,
  qn = null,
  Ot = 0,
  xl = 0,
  Ps = 0,
  On = null,
  me = null,
  Ds = 0,
  dn = 1 / 0,
  Ge = null,
  rl = !1,
  Bi = null,
  pt = null,
  Nr = !1,
  ot = null,
  ll = 0,
  Ln = 0,
  Wi = null,
  Or = -1,
  Lr = 0;
function ce() {
  return D & 6 ? Y() : Or !== -1 ? Or : (Or = Y());
}
function mt(e) {
  return e.mode & 1
    ? D & 2 && re !== 0
      ? re & -re
      : cf.transition !== null
        ? (Lr === 0 && (Lr = zu()), Lr)
        : ((e = L),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Wu(e.type))),
          e)
    : 1;
}
function ze(e, t, n, r) {
  if (50 < Ln) throw ((Ln = 0), (Wi = null), Error(y(185)));
  (er(e, n, r),
    (!(D & 2) || e !== te) &&
      (e === te && (!(D & 2) && (xl |= n), J === 4 && it(e, re)),
      ye(e, r),
      n === 1 && D === 0 && !(t.mode & 1) && ((dn = Y() + 500), pl && Ct())));
}
function ye(e, t) {
  var n = e.callbackNode;
  ad(e, t);
  var r = Vr(e, e === te ? re : 0);
  if (r === 0)
    (n !== null && eo(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && eo(n), t === 1))
      (e.tag === 0 ? af(Ko.bind(null, e)) : aa(Ko.bind(null, e)),
        lf(function () {
          !(D & 6) && Ct();
        }),
        (n = null));
    else {
      switch (Hu(r)) {
        case 1:
          n = is;
          break;
        case 4:
          n = Lu;
          break;
        case 16:
          n = Ur;
          break;
        case 536870912:
          n = Ru;
          break;
        default:
          n = Ur;
      }
      n = oc(n, ec.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function ec(e, t) {
  if (((Or = -1), (Lr = 0), D & 6)) throw Error(y(327));
  var n = e.callbackNode;
  if (nn() && e.callbackNode !== n) return null;
  var r = Vr(e, e === te ? re : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = il(e, r);
  else {
    t = r;
    var l = D;
    D |= 2;
    var i = nc();
    (te !== e || re !== t) && ((Ge = null), (dn = Y() + 500), Tt(e, t));
    do
      try {
        Af();
        break;
      } catch (u) {
        tc(e, u);
      }
    while (!0);
    (ys(),
      (nl.current = i),
      (D = l),
      X !== null ? (t = 0) : ((te = null), (re = 0), (t = J)));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = xi(e)), l !== 0 && ((r = l), (t = Gi(e, l)))), t === 1)
    )
      throw ((n = qn), Tt(e, 0), it(e, r), ye(e, Y()), n);
    if (t === 6) it(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !jf(l) &&
          ((t = il(e, r)),
          t === 2 && ((i = xi(e)), i !== 0 && ((r = i), (t = Gi(e, i)))),
          t === 1))
      )
        throw ((n = qn), Tt(e, 0), it(e, r), ye(e, Y()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          _t(e, me, Ge);
          break;
        case 3:
          if (
            (it(e, r), (r & 130023424) === r && ((t = Ds + 500 - Y()), 10 < t))
          ) {
            if (Vr(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              (ce(), (e.pingedLanes |= e.suspendedLanes & l));
              break;
            }
            e.timeoutHandle = _i(_t.bind(null, e, me, Ge), t);
            break;
          }
          _t(e, me, Ge);
          break;
        case 4:
          if ((it(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var s = 31 - Re(r);
            ((i = 1 << s), (s = t[s]), s > l && (l = s), (r &= ~i));
          }
          if (
            ((r = l),
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
                          : 1960 * Ef(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = _i(_t.bind(null, e, me, Ge), r);
            break;
          }
          _t(e, me, Ge);
          break;
        case 5:
          _t(e, me, Ge);
          break;
        default:
          throw Error(y(329));
      }
    }
  }
  return (ye(e, Y()), e.callbackNode === n ? ec.bind(null, e) : null);
}
function Gi(e, t) {
  var n = On;
  return (
    e.current.memoizedState.isDehydrated && (Tt(e, t).flags |= 256),
    (e = il(e, t)),
    e !== 2 && ((t = me), (me = n), t !== null && Qi(t)),
    e
  );
}
function Qi(e) {
  me === null ? (me = e) : me.push.apply(me, e);
}
function jf(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!He(i(), l)) return !1;
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
function it(e, t) {
  for (
    t &= ~Ps,
      t &= ~xl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;
  ) {
    var n = 31 - Re(t),
      r = 1 << n;
    ((e[n] = -1), (t &= ~r));
  }
}
function Ko(e) {
  if (D & 6) throw Error(y(327));
  nn();
  var t = Vr(e, 0);
  if (!(t & 1)) return (ye(e, Y()), null);
  var n = il(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = xi(e);
    r !== 0 && ((t = r), (n = Gi(e, r)));
  }
  if (n === 1) throw ((n = qn), Tt(e, 0), it(e, t), ye(e, Y()), n);
  if (n === 6) throw Error(y(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    _t(e, me, Ge),
    ye(e, Y()),
    null
  );
}
function Os(e, t) {
  var n = D;
  D |= 1;
  try {
    return e(t);
  } finally {
    ((D = n), D === 0 && ((dn = Y() + 500), pl && Ct()));
  }
}
function Lt(e) {
  ot !== null && ot.tag === 0 && !(D & 6) && nn();
  var t = D;
  D |= 1;
  var n = Te.transition,
    r = L;
  try {
    if (((Te.transition = null), (L = 1), e)) return e();
  } finally {
    ((L = r), (Te.transition = n), (D = t), !(D & 6) && Ct());
  }
}
function Ls() {
  ((Ce = Zt.current), F(Zt));
}
function Tt(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), rf(n)), X !== null))
    for (n = X.return; n !== null; ) {
      var r = n;
      switch ((hs(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && Qr());
          break;
        case 3:
          (an(), F(ve), F(ue), ks());
          break;
        case 5:
          Ss(r);
          break;
        case 4:
          an();
          break;
        case 13:
          F(B);
          break;
        case 19:
          F(B);
          break;
        case 10:
          gs(r.type._context);
          break;
        case 22:
        case 23:
          Ls();
      }
      n = n.return;
    }
  if (
    ((te = e),
    (X = e = ht(e.current, null)),
    (re = Ce = t),
    (J = 0),
    (qn = null),
    (Ps = xl = Ot = 0),
    (me = On = null),
    Et !== null)
  ) {
    for (t = 0; t < Et.length; t++)
      if (((n = Et[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var s = i.next;
          ((i.next = l), (r.next = s));
        }
        n.pending = r;
      }
    Et = null;
  }
  return e;
}
function tc(e, t) {
  do {
    var n = X;
    try {
      if ((ys(), (Ir.current = tl), el)) {
        for (var r = W.memoizedState; r !== null; ) {
          var l = r.queue;
          (l !== null && (l.pending = null), (r = r.next));
        }
        el = !1;
      }
      if (
        ((Dt = 0),
        (ee = Z = W = null),
        (Pn = !1),
        (Xn = 0),
        (Is.current = null),
        n === null || n.return === null)
      ) {
        ((J = 1), (qn = t), (X = null));
        break;
      }
      e: {
        var i = e,
          s = n.return,
          u = n,
          a = t;
        if (
          ((t = re),
          (u.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var d = a,
            h = u,
            v = h.tag;
          if (!(h.mode & 1) && (v === 0 || v === 11 || v === 15)) {
            var m = h.alternate;
            m
              ? ((h.updateQueue = m.updateQueue),
                (h.memoizedState = m.memoizedState),
                (h.lanes = m.lanes))
              : ((h.updateQueue = null), (h.memoizedState = null));
          }
          var g = Oo(s);
          if (g !== null) {
            ((g.flags &= -257),
              Lo(g, s, u, i, t),
              g.mode & 1 && Do(i, d, t),
              (t = g),
              (a = d));
            var C = t.updateQueue;
            if (C === null) {
              var N = new Set();
              (N.add(a), (t.updateQueue = N));
            } else C.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              (Do(i, d, t), Rs());
              break e;
            }
            a = Error(y(426));
          }
        } else if ($ && u.mode & 1) {
          var R = Oo(s);
          if (R !== null) {
            (!(R.flags & 65536) && (R.flags |= 256),
              Lo(R, s, u, i, t),
              vs(cn(a, u)));
            break e;
          }
        }
        ((i = a = cn(a, u)),
          J !== 4 && (J = 2),
          On === null ? (On = [i]) : On.push(i),
          (i = s));
        do {
          switch (i.tag) {
            case 3:
              ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
              var f = Ha(i, a, t);
              Eo(i, f);
              break e;
            case 1:
              u = a;
              var c = i.type,
                p = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (p !== null &&
                    typeof p.componentDidCatch == "function" &&
                    (pt === null || !pt.has(p))))
              ) {
                ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
                var x = Fa(i, u, t);
                Eo(i, x);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      lc(n);
    } catch (k) {
      ((t = k), X === n && n !== null && (X = n = n.return));
      continue;
    }
    break;
  } while (!0);
}
function nc() {
  var e = nl.current;
  return ((nl.current = tl), e === null ? tl : e);
}
function Rs() {
  ((J === 0 || J === 3 || J === 2) && (J = 4),
    te === null || (!(Ot & 268435455) && !(xl & 268435455)) || it(te, re));
}
function il(e, t) {
  var n = D;
  D |= 2;
  var r = nc();
  (te !== e || re !== t) && ((Ge = null), Tt(e, t));
  do
    try {
      Tf();
      break;
    } catch (l) {
      tc(e, l);
    }
  while (!0);
  if ((ys(), (D = n), (nl.current = r), X !== null)) throw Error(y(261));
  return ((te = null), (re = 0), J);
}
function Tf() {
  for (; X !== null; ) rc(X);
}
function Af() {
  for (; X !== null && !ed(); ) rc(X);
}
function rc(e) {
  var t = sc(e.alternate, e, Ce);
  ((e.memoizedProps = e.pendingProps),
    t === null ? lc(e) : (X = t),
    (Is.current = null));
}
function lc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Sf(n, t)), n !== null)) {
        ((n.flags &= 32767), (X = n));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((J = 6), (X = null));
        return;
      }
    } else if (((n = Nf(n, t, Ce)), n !== null)) {
      X = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      X = t;
      return;
    }
    X = t = e;
  } while (t !== null);
  J === 0 && (J = 5);
}
function _t(e, t, n) {
  var r = L,
    l = Te.transition;
  try {
    ((Te.transition = null), (L = 1), If(e, t, n, r));
  } finally {
    ((Te.transition = l), (L = r));
  }
  return null;
}
function If(e, t, n, r) {
  do nn();
  while (ot !== null);
  if (D & 6) throw Error(y(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(y(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var i = n.lanes | n.childLanes;
  if (
    (cd(e, i),
    e === te && ((X = te = null), (re = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Nr ||
      ((Nr = !0),
      oc(Ur, function () {
        return (nn(), null);
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    ((i = Te.transition), (Te.transition = null));
    var s = L;
    L = 1;
    var u = D;
    ((D |= 4),
      (Is.current = null),
      _f(e, n),
      qa(n, e),
      Zd(Si),
      ($r = !!Ni),
      (Si = Ni = null),
      (e.current = n),
      Mf(n),
      td(),
      (D = u),
      (L = s),
      (Te.transition = i));
  } else e.current = n;
  if (
    (Nr && ((Nr = !1), (ot = e), (ll = l)),
    (i = e.pendingLanes),
    i === 0 && (pt = null),
    ld(n.stateNode),
    ye(e, Y()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      ((l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest }));
  if (rl) throw ((rl = !1), (e = Bi), (Bi = null), e);
  return (
    ll & 1 && e.tag !== 0 && nn(),
    (i = e.pendingLanes),
    i & 1 ? (e === Wi ? Ln++ : ((Ln = 0), (Wi = e))) : (Ln = 0),
    Ct(),
    null
  );
}
function nn() {
  if (ot !== null) {
    var e = Hu(ll),
      t = Te.transition,
      n = L;
    try {
      if (((Te.transition = null), (L = 16 > e ? 16 : e), ot === null))
        var r = !1;
      else {
        if (((e = ot), (ot = null), (ll = 0), D & 6)) throw Error(y(331));
        var l = D;
        for (D |= 4, _ = e.current; _ !== null; ) {
          var i = _,
            s = i.child;
          if (_.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var a = 0; a < u.length; a++) {
                var d = u[a];
                for (_ = d; _ !== null; ) {
                  var h = _;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Dn(8, h, i);
                  }
                  var v = h.child;
                  if (v !== null) ((v.return = h), (_ = v));
                  else
                    for (; _ !== null; ) {
                      h = _;
                      var m = h.sibling,
                        g = h.return;
                      if ((Xa(h), h === d)) {
                        _ = null;
                        break;
                      }
                      if (m !== null) {
                        ((m.return = g), (_ = m));
                        break;
                      }
                      _ = g;
                    }
                }
              }
              var C = i.alternate;
              if (C !== null) {
                var N = C.child;
                if (N !== null) {
                  C.child = null;
                  do {
                    var R = N.sibling;
                    ((N.sibling = null), (N = R));
                  } while (N !== null);
                }
              }
              _ = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) ((s.return = i), (_ = s));
          else
            e: for (; _ !== null; ) {
              if (((i = _), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Dn(9, i, i.return);
                }
              var f = i.sibling;
              if (f !== null) {
                ((f.return = i.return), (_ = f));
                break e;
              }
              _ = i.return;
            }
        }
        var c = e.current;
        for (_ = c; _ !== null; ) {
          s = _;
          var p = s.child;
          if (s.subtreeFlags & 2064 && p !== null) ((p.return = s), (_ = p));
          else
            e: for (s = c; _ !== null; ) {
              if (((u = _), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      vl(9, u);
                  }
                } catch (k) {
                  Q(u, u.return, k);
                }
              if (u === s) {
                _ = null;
                break e;
              }
              var x = u.sibling;
              if (x !== null) {
                ((x.return = u.return), (_ = x));
                break e;
              }
              _ = u.return;
            }
        }
        if (
          ((D = l), Ct(), Be && typeof Be.onPostCommitFiberRoot == "function")
        )
          try {
            Be.onPostCommitFiberRoot(ul, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ((L = n), (Te.transition = t));
    }
  }
  return !1;
}
function Yo(e, t, n) {
  ((t = cn(n, t)),
    (t = Ha(e, t, 1)),
    (e = ft(e, t, 1)),
    (t = ce()),
    e !== null && (er(e, 1, t), ye(e, t)));
}
function Q(e, t, n) {
  if (e.tag === 3) Yo(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Yo(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (pt === null || !pt.has(r)))
        ) {
          ((e = cn(n, e)),
            (e = Fa(t, e, 1)),
            (t = ft(t, e, 1)),
            (e = ce()),
            t !== null && (er(t, 1, e), ye(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function Pf(e, t, n) {
  var r = e.pingCache;
  (r !== null && r.delete(t),
    (t = ce()),
    (e.pingedLanes |= e.suspendedLanes & n),
    te === e &&
      (re & n) === n &&
      (J === 4 || (J === 3 && (re & 130023424) === re && 500 > Y() - Ds)
        ? Tt(e, 0)
        : (Ps |= n)),
    ye(e, t));
}
function ic(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = fr), (fr <<= 1), !(fr & 130023424) && (fr = 4194304))
      : (t = 1));
  var n = ce();
  ((e = qe(e, t)), e !== null && (er(e, t, n), ye(e, n)));
}
function Df(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), ic(e, n));
}
function Of(e, t) {
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
      throw Error(y(314));
  }
  (r !== null && r.delete(t), ic(e, n));
}
var sc;
sc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ve.current) he = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ((he = !1), wf(e, t, n));
      he = !!(e.flags & 131072);
    }
  else ((he = !1), $ && t.flags & 1048576 && ca(t, Xr, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      (Dr(e, t), (e = t.pendingProps));
      var l = sn(t, ue.current);
      (tn(t, n), (l = Ms(null, t, r, e, l, n)));
      var i = Es();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            xe(r) ? ((i = !0), Kr(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            ws(t),
            (l.updater = hl),
            (t.stateNode = l),
            (l._reactInternals = t),
            Pi(t, r, e, n),
            (t = Li(null, t, r, !0, i, n)))
          : ((t.tag = 0), $ && i && ms(t), ae(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Dr(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Rf(r)),
          (e = De(r, e)),
          l)
        ) {
          case 0:
            t = Oi(null, t, r, e, n);
            break e;
          case 1:
            t = Ho(null, t, r, e, n);
            break e;
          case 11:
            t = Ro(null, t, r, e, n);
            break e;
          case 14:
            t = zo(null, t, r, De(r.type, e), n);
            break e;
        }
        throw Error(y(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : De(r, l)),
        Oi(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : De(r, l)),
        Ho(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Ba(t), e === null)) throw Error(y(387));
        ((r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          va(e, t),
          qr(t, r, null, n));
        var s = t.memoizedState;
        if (((r = s.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            ((l = cn(Error(y(423)), t)), (t = Fo(e, t, r, n, l)));
            break e;
          } else if (r !== l) {
            ((l = cn(Error(y(424)), t)), (t = Fo(e, t, r, n, l)));
            break e;
          } else
            for (
              we = dt(t.stateNode.containerInfo.firstChild),
                Ne = t,
                $ = !0,
                Le = null,
                n = ma(t, null, r, n),
                t.child = n;
              n;
            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((on(), r === l)) {
            t = be(e, t, n);
            break e;
          }
          ae(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        xa(t),
        e === null && Ti(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (s = l.children),
        ki(r, l) ? (s = null) : i !== null && ki(r, i) && (t.flags |= 32),
        $a(e, t),
        ae(e, t, s, n),
        t.child
      );
    case 6:
      return (e === null && Ti(t), null);
    case 13:
      return Wa(e, t, n);
    case 4:
      return (
        Ns(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = un(t, null, r, n)) : ae(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : De(r, l)),
        Ro(e, t, r, l, n)
      );
    case 7:
      return (ae(e, t, t.pendingProps, n), t.child);
    case 8:
      return (ae(e, t, t.pendingProps.children, n), t.child);
    case 12:
      return (ae(e, t, t.pendingProps.children, n), t.child);
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (s = l.value),
          z(Zr, r._currentValue),
          (r._currentValue = s),
          i !== null)
        )
          if (He(i.value, s)) {
            if (i.children === l.children && !ve.current) {
              t = be(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var u = i.dependencies;
              if (u !== null) {
                s = i.child;
                for (var a = u.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (i.tag === 1) {
                      ((a = Xe(-1, n & -n)), (a.tag = 2));
                      var d = i.updateQueue;
                      if (d !== null) {
                        d = d.shared;
                        var h = d.pending;
                        (h === null
                          ? (a.next = a)
                          : ((a.next = h.next), (h.next = a)),
                          (d.pending = a));
                      }
                    }
                    ((i.lanes |= n),
                      (a = i.alternate),
                      a !== null && (a.lanes |= n),
                      Ai(i.return, n, t),
                      (u.lanes |= n));
                    break;
                  }
                  a = a.next;
                }
              } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((s = i.return), s === null)) throw Error(y(341));
                ((s.lanes |= n),
                  (u = s.alternate),
                  u !== null && (u.lanes |= n),
                  Ai(s, n, t),
                  (s = i.sibling));
              } else s = i.child;
              if (s !== null) s.return = i;
              else
                for (s = i; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((i = s.sibling), i !== null)) {
                    ((i.return = s.return), (s = i));
                    break;
                  }
                  s = s.return;
                }
              i = s;
            }
        (ae(e, t, l.children, n), (t = t.child));
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        tn(t, n),
        (l = Ae(l)),
        (r = r(l)),
        (t.flags |= 1),
        ae(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = De(r, t.pendingProps)),
        (l = De(r.type, l)),
        zo(e, t, r, l, n)
      );
    case 15:
      return Ua(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : De(r, l)),
        Dr(e, t),
        (t.tag = 1),
        xe(r) ? ((e = !0), Kr(t)) : (e = !1),
        tn(t, n),
        za(t, r, l),
        Pi(t, r, l, n),
        Li(null, t, r, !0, e, n)
      );
    case 19:
      return Ga(e, t, n);
    case 22:
      return Va(e, t, n);
  }
  throw Error(y(156, t.tag));
};
function oc(e, t) {
  return Ou(e, t);
}
function Lf(e, t, n, r) {
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
function je(e, t, n, r) {
  return new Lf(e, t, n, r);
}
function zs(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function Rf(e) {
  if (typeof e == "function") return zs(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ns)) return 11;
    if (e === rs) return 14;
  }
  return 2;
}
function ht(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = je(e.tag, t, e.key, e.mode)),
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
function Rr(e, t, n, r, l, i) {
  var s = 2;
  if (((r = e), typeof e == "function")) zs(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case Ut:
        return At(n.children, l, i, t);
      case ts:
        ((s = 8), (l |= 8));
        break;
      case ni:
        return (
          (e = je(12, n, t, l | 2)),
          (e.elementType = ni),
          (e.lanes = i),
          e
        );
      case ri:
        return ((e = je(13, n, t, l)), (e.elementType = ri), (e.lanes = i), e);
      case li:
        return ((e = je(19, n, t, l)), (e.elementType = li), (e.lanes = i), e);
      case xu:
        return yl(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case hu:
              s = 10;
              break e;
            case vu:
              s = 9;
              break e;
            case ns:
              s = 11;
              break e;
            case rs:
              s = 14;
              break e;
            case nt:
              ((s = 16), (r = null));
              break e;
          }
        throw Error(y(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = je(s, n, t, l)),
    (t.elementType = e),
    (t.type = r),
    (t.lanes = i),
    t
  );
}
function At(e, t, n, r) {
  return ((e = je(7, e, r, t)), (e.lanes = n), e);
}
function yl(e, t, n, r) {
  return (
    (e = je(22, e, r, t)),
    (e.elementType = xu),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Xl(e, t, n) {
  return ((e = je(6, e, null, t)), (e.lanes = n), e);
}
function Zl(e, t, n) {
  return (
    (t = je(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function zf(e, t, n, r, l) {
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
    (this.eventTimes = Al(0)),
    (this.expirationTimes = Al(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Al(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null));
}
function Hs(e, t, n, r, l, i, s, u, a) {
  return (
    (e = new zf(e, t, n, u, a)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = je(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    ws(i),
    e
  );
}
function Hf(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Ft,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function uc(e) {
  if (!e) return xt;
  e = e._reactInternals;
  e: {
    if (zt(e) !== e || e.tag !== 1) throw Error(y(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (xe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(y(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (xe(n)) return ua(e, n, t);
  }
  return t;
}
function ac(e, t, n, r, l, i, s, u, a) {
  return (
    (e = Hs(n, r, !0, e, l, i, s, u, a)),
    (e.context = uc(null)),
    (n = e.current),
    (r = ce()),
    (l = mt(n)),
    (i = Xe(r, l)),
    (i.callback = t ?? null),
    ft(n, i, l),
    (e.current.lanes = l),
    er(e, l, r),
    ye(e, r),
    e
  );
}
function gl(e, t, n, r) {
  var l = t.current,
    i = ce(),
    s = mt(l);
  return (
    (n = uc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Xe(i, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = ft(l, t, s)),
    e !== null && (ze(e, l, s, i), Ar(e, l, s)),
    s
  );
}
function sl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Xo(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Fs(e, t) {
  (Xo(e, t), (e = e.alternate) && Xo(e, t));
}
function Ff() {
  return null;
}
var cc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Us(e) {
  this._internalRoot = e;
}
Cl.prototype.render = Us.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(y(409));
  gl(e, t, null, null);
};
Cl.prototype.unmount = Us.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (Lt(function () {
      gl(null, e, null, null);
    }),
      (t[Je] = null));
  }
};
function Cl(e) {
  this._internalRoot = e;
}
Cl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Vu();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < lt.length && t !== 0 && t < lt[n].priority; n++);
    (lt.splice(n, 0, e), n === 0 && Bu(e));
  }
};
function Vs(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function wl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Zo() {}
function Uf(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var d = sl(s);
        i.call(d);
      };
    }
    var s = ac(t, r, e, 0, null, !1, !1, "", Zo);
    return (
      (e._reactRootContainer = s),
      (e[Je] = s.current),
      Wn(e.nodeType === 8 ? e.parentNode : e),
      Lt(),
      s
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var d = sl(a);
      u.call(d);
    };
  }
  var a = Hs(e, 0, !1, null, null, !1, !1, "", Zo);
  return (
    (e._reactRootContainer = a),
    (e[Je] = a.current),
    Wn(e.nodeType === 8 ? e.parentNode : e),
    Lt(function () {
      gl(t, a, n, r);
    }),
    a
  );
}
function Nl(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var a = sl(s);
        u.call(a);
      };
    }
    gl(t, s, e, l);
  } else s = Uf(n, t, e, l, r);
  return sl(s);
}
Fu = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = _n(t.pendingLanes);
        n !== 0 &&
          (ss(t, n | 1), ye(t, Y()), !(D & 6) && ((dn = Y() + 500), Ct()));
      }
      break;
    case 13:
      (Lt(function () {
        var r = qe(e, 1);
        if (r !== null) {
          var l = ce();
          ze(r, e, 1, l);
        }
      }),
        Fs(e, 1));
  }
};
os = function (e) {
  if (e.tag === 13) {
    var t = qe(e, 134217728);
    if (t !== null) {
      var n = ce();
      ze(t, e, 134217728, n);
    }
    Fs(e, 134217728);
  }
};
Uu = function (e) {
  if (e.tag === 13) {
    var t = mt(e),
      n = qe(e, t);
    if (n !== null) {
      var r = ce();
      ze(n, e, t, r);
    }
    Fs(e, t);
  }
};
Vu = function () {
  return L;
};
$u = function (e, t) {
  var n = L;
  try {
    return ((L = e), t());
  } finally {
    L = n;
  }
};
mi = function (e, t, n) {
  switch (t) {
    case "input":
      if ((oi(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var l = fl(r);
            if (!l) throw Error(y(90));
            (gu(r), oi(r, l));
          }
        }
      }
      break;
    case "textarea":
      wu(e, n);
      break;
    case "select":
      ((t = n.value), t != null && Jt(e, !!n.multiple, t, !1));
  }
};
ju = Os;
Tu = Lt;
var Vf = { usingClientEntryPoint: !1, Events: [nr, Wt, fl, Mu, Eu, Os] },
  Nn = {
    findFiberByHostInstance: Mt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  $f = {
    bundleType: Nn.bundleType,
    version: Nn.version,
    rendererPackageName: Nn.rendererPackageName,
    rendererConfig: Nn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: et.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = Pu(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: Nn.findFiberByHostInstance || Ff,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Sr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Sr.isDisabled && Sr.supportsFiber)
    try {
      ((ul = Sr.inject($f)), (Be = Sr));
    } catch {}
}
ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Vf;
ke.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Vs(t)) throw Error(y(200));
  return Hf(e, t, null, n);
};
ke.createRoot = function (e, t) {
  if (!Vs(e)) throw Error(y(299));
  var n = !1,
    r = "",
    l = cc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Hs(e, 1, !1, null, null, n, !1, r, l)),
    (e[Je] = t.current),
    Wn(e.nodeType === 8 ? e.parentNode : e),
    new Us(t)
  );
};
ke.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(y(188))
      : ((e = Object.keys(e).join(",")), Error(y(268, e)));
  return ((e = Pu(t)), (e = e === null ? null : e.stateNode), e);
};
ke.flushSync = function (e) {
  return Lt(e);
};
ke.hydrate = function (e, t, n) {
  if (!wl(t)) throw Error(y(200));
  return Nl(null, e, t, !0, n);
};
ke.hydrateRoot = function (e, t, n) {
  if (!Vs(e)) throw Error(y(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = "",
    s = cc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = ac(t, null, e, 1, n ?? null, l, !1, i, s)),
    (e[Je] = t.current),
    Wn(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      ((n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l));
  return new Cl(t);
};
ke.render = function (e, t, n) {
  if (!wl(t)) throw Error(y(200));
  return Nl(null, e, t, !1, n);
};
ke.unmountComponentAtNode = function (e) {
  if (!wl(e)) throw Error(y(40));
  return e._reactRootContainer
    ? (Lt(function () {
        Nl(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[Je] = null));
        });
      }),
      !0)
    : !1;
};
ke.unstable_batchedUpdates = Os;
ke.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!wl(n)) throw Error(y(200));
  if (e == null || e._reactInternals === void 0) throw Error(y(38));
  return Nl(e, t, n, !1, r);
};
ke.version = "18.3.1-next-f1338f8080-20240426";
function dc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(dc);
    } catch (e) {
      console.error(e);
    }
}
(dc(), (du.exports = ke));
var Bf = du.exports,
  fc,
  Jo = Bf;
((fc = Jo.createRoot), Jo.hydrateRoot);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Wf = {
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
 */ const Gf = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  U = (e, t) => {
    const n = O.forwardRef(
      (
        {
          color: r = "currentColor",
          size: l = 24,
          strokeWidth: i = 2,
          absoluteStrokeWidth: s,
          className: u = "",
          children: a,
          ...d
        },
        h,
      ) =>
        O.createElement(
          "svg",
          {
            ref: h,
            ...Wf,
            width: l,
            height: l,
            stroke: r,
            strokeWidth: s ? (Number(i) * 24) / Number(l) : i,
            className: ["lucide", `lucide-${Gf(e)}`, u].join(" "),
            ...d,
          },
          [
            ...t.map(([v, m]) => O.createElement(v, m)),
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
 */ const pc = U("Activity", [
  ["path", { d: "M22 12h-4l-3 9L9 3l-3 9H2", key: "d5dnw9" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Qf = U("AlertCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Kf = U("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mc = U("Bot", [
  ["path", { d: "M12 8V4H8", key: "hb8ula" }],
  [
    "rect",
    { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" },
  ],
  ["path", { d: "M2 14h2", key: "vft8re" }],
  ["path", { d: "M20 14h2", key: "4cs60a" }],
  ["path", { d: "M15 13v2", key: "1xurst" }],
  ["path", { d: "M9 13v2", key: "rq6x2g" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Yf = U("CalendarClock", [
  [
    "path",
    {
      d: "M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5",
      key: "1osxxc",
    },
  ],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M3 10h5", key: "r794hk" }],
  ["path", { d: "M17.5 17.5 16 16.3V14", key: "akvzfd" }],
  ["circle", { cx: "16", cy: "16", r: "6", key: "qoo3c4" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ki = U("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xf = U("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zf = U("ChevronUp", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Jf = U("ClipboardList", [
  [
    "rect",
    {
      width: "8",
      height: "4",
      x: "8",
      y: "2",
      rx: "1",
      ry: "1",
      key: "tgr4d6",
    },
  ],
  [
    "path",
    {
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
      key: "116196",
    },
  ],
  ["path", { d: "M12 11h4", key: "1jrz19" }],
  ["path", { d: "M12 16h4", key: "n85exb" }],
  ["path", { d: "M8 11h.01", key: "1dfujw" }],
  ["path", { d: "M8 16h.01", key: "18s6g9" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qf = U("EyeOff", [
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
 */ const bf = U("Eye", [
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
 */ const hc = U("FileText", [
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
 */ const qo = U("FlaskConical", [
  [
    "path",
    {
      d: "M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2",
      key: "pzvekw",
    },
  ],
  ["path", { d: "M8.5 2h7", key: "csnxdl" }],
  ["path", { d: "M7 16h10", key: "wp8him" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ep = U("Heart", [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tp = U("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vc = U("MessageSquare", [
  [
    "path",
    {
      d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
      key: "1lielz",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const np = U("RefreshCw", [
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
 */ const rp = U("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lp = U("Send", [
  ["path", { d: "m22 2-7 20-4-9-9-4Z", key: "1q3vgg" }],
  ["path", { d: "M22 2 11 13", key: "nzbqef" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ip = U("Sparkles", [
  [
    "path",
    {
      d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",
      key: "17u4zn",
    },
  ],
  ["path", { d: "M5 3v4", key: "bklmnn" }],
  ["path", { d: "M19 17v4", key: "iiml17" }],
  ["path", { d: "M3 5h4", key: "nem4j1" }],
  ["path", { d: "M17 19h4", key: "lbex7p" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sp = U("Stethoscope", [
  [
    "path",
    {
      d: "M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3",
      key: "1jd90r",
    },
  ],
  ["path", { d: "M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4", key: "126ukv" }],
  ["circle", { cx: "20", cy: "10", r: "2", key: "ts1r5v" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bo = U("UserCheck", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["polyline", { points: "16 11 18 13 22 9", key: "1pwet4" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rn = U("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const op = U("Users", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Jl = U("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]);
function up({ onLogin: e }) {
  const [t, n] = O.useState(""),
    [r, l] = O.useState(""),
    [i, s] = O.useState(!1),
    [u, a] = O.useState(""),
    [d, h] = O.useState(!1);
  async function v(m) {
    if ((m.preventDefault(), !t || !r)) {
      a("請輸入帳號與密碼");
      return;
    }
    (h(!0), a(""), await new Promise((g) => setTimeout(g, 700)), h(!1), e());
  }
  return o.jsxs("div", {
    className: "min-h-screen flex flex-col",
    style: {
      backgroundImage: "url(/chemo-background-BMjbPoXY.jpg)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundColor: "#f8faff",
    },
    children: [
      o.jsxs("header", {
        className: "flex items-center justify-between px-8 py-5",
        children: [
          o.jsxs("div", {
            className: "flex items-center gap-2.5",
            children: [
              o.jsx("div", {
                className:
                  "bg-white/80 backdrop-blur-sm border border-blue-100 rounded-xl p-2 shadow-sm",
                children: o.jsx(qo, { className: "w-5 h-5 text-blue-500" }),
              }),
              o.jsx("span", {
                className:
                  "text-base font-semibold tracking-widest text-slate-600 uppercase",
                children: "Chemo Pharm",
              }),
            ],
          }),
          o.jsxs("div", {
            className: "text-right",
            children: [
              o.jsx("p", {
                className: "text-base font-semibold text-slate-700",
                children: "台灣醫療中心",
              }),
              o.jsx("p", {
                className: "text-sm text-slate-400",
                children: "Taiwan Medical Center",
              }),
            ],
          }),
        ],
      }),
      o.jsx("div", {
        className: "flex-1 flex items-center justify-center px-4 py-8",
        children: o.jsxs("div", {
          className: "w-full max-w-sm rounded-3xl px-10 py-10",
          style: {
            background: "rgba(255,255,255,0.55)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "1px solid rgba(255,255,255,0.7)",
            boxShadow: "0 8px 40px rgba(100,140,220,0.10)",
          },
          children: [
            o.jsxs("div", {
              className: "flex flex-col items-center mb-8",
              children: [
                o.jsx("div", {
                  className: "rounded-2xl p-3.5 mb-5",
                  style: {
                    background: "rgba(255,255,255,0.75)",
                    border: "1px solid rgba(180,210,255,0.4)",
                    boxShadow: "0 2px 12px rgba(100,160,255,0.12)",
                  },
                  children: o.jsx(qo, { className: "w-8 h-8 text-blue-400" }),
                }),
                o.jsx("h1", {
                  className:
                    "text-2xl font-bold text-slate-800 tracking-wide mb-1",
                  children: "化療個案管理系統",
                }),
                o.jsx("p", {
                  className: "text-base text-slate-400",
                  children: "Chemotherapy Case Management",
                }),
              ],
            }),
            o.jsxs("form", {
              onSubmit: v,
              className: "space-y-5",
              children: [
                o.jsxs("div", {
                  children: [
                    o.jsxs("label", {
                      className:
                        "block text-base font-medium text-slate-600 mb-2",
                      children: [
                        "帳號 ",
                        o.jsx("span", {
                          className: "text-slate-400 font-normal",
                          children: "Account",
                        }),
                      ],
                    }),
                    o.jsx("input", {
                      type: "text",
                      value: t,
                      onChange: (m) => {
                        (n(m.target.value), a(""));
                      },
                      placeholder: "請輸入帳號",
                      className:
                        "w-full px-4 py-3.5 rounded-2xl text-base text-slate-700 placeholder-slate-300 outline-none transition focus:ring-2 focus:ring-blue-300/60",
                      style: {
                        background: "rgba(255,255,255,0.70)",
                        border: "1px solid rgba(200,220,255,0.6)",
                      },
                    }),
                  ],
                }),
                o.jsxs("div", {
                  children: [
                    o.jsxs("label", {
                      className:
                        "block text-base font-medium text-slate-600 mb-2",
                      children: [
                        "密碼 ",
                        o.jsx("span", {
                          className: "text-slate-400 font-normal",
                          children: "Password",
                        }),
                      ],
                    }),
                    o.jsxs("div", {
                      className: "relative",
                      children: [
                        o.jsx("input", {
                          type: i ? "text" : "password",
                          value: r,
                          onChange: (m) => {
                            (l(m.target.value), a(""));
                          },
                          placeholder: "請輸入密碼",
                          className:
                            "w-full px-4 py-3.5 pr-12 rounded-2xl text-base text-slate-700 placeholder-slate-300 outline-none transition focus:ring-2 focus:ring-blue-300/60",
                          style: {
                            background: "rgba(255,255,255,0.70)",
                            border: "1px solid rgba(200,220,255,0.6)",
                          },
                        }),
                        o.jsx("button", {
                          type: "button",
                          onClick: () => s((m) => !m),
                          className:
                            "absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-blue-400 transition",
                          tabIndex: -1,
                          children: i
                            ? o.jsx(qf, { className: "w-5 h-5" })
                            : o.jsx(bf, { className: "w-5 h-5" }),
                        }),
                      ],
                    }),
                  ],
                }),
                u &&
                  o.jsx("p", {
                    className: "text-red-400 text-base text-center",
                    children: u,
                  }),
                o.jsx("button", {
                  type: "submit",
                  disabled: d,
                  className:
                    "w-full py-4 rounded-2xl text-base font-semibold text-white tracking-widest transition-all duration-200 mt-2 active:scale-[0.98]",
                  style: {
                    background: d
                      ? "rgba(150,185,245,0.75)"
                      : "rgba(120,170,245,0.80)",
                    backdropFilter: "blur(8px)",
                    boxShadow: "0 2px 16px rgba(100,150,255,0.18)",
                  },
                  children: d
                    ? o.jsxs("span", {
                        className: "flex items-center justify-center gap-2",
                        children: [
                          o.jsxs("svg", {
                            className: "animate-spin w-4 h-4",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            children: [
                              o.jsx("circle", {
                                className: "opacity-25",
                                cx: "12",
                                cy: "12",
                                r: "10",
                                stroke: "currentColor",
                                strokeWidth: "4",
                              }),
                              o.jsx("path", {
                                className: "opacity-75",
                                fill: "currentColor",
                                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z",
                              }),
                            ],
                          }),
                          "登入中...",
                        ],
                      })
                    : "登入系統",
                }),
              ],
            }),
            o.jsx("p", {
              className: "text-center text-sm text-slate-400 mt-6",
              children: "測試帳號：admin / 123456",
            }),
          ],
        }),
      }),
      o.jsxs("footer", {
        className:
          "flex items-center justify-center gap-3 px-8 py-4 text-sm text-slate-400",
        style: {
          background: "rgba(255,255,255,0.40)",
          backdropFilter: "blur(8px)",
        },
        children: [
          o.jsx("span", { children: "化療個案管理系統" }),
          o.jsx("span", { className: "w-1 h-1 rounded-full bg-slate-300" }),
          o.jsx("span", { children: "Chemotherapy Case Management System" }),
          o.jsx("span", { className: "w-1 h-1 rounded-full bg-slate-300" }),
          o.jsx("span", { children: "v1.0.0" }),
        ],
      }),
    ],
  });
}
const ap = [
    {
      id: "RX001",
      CAM_PATID: "P10234567",
      patientName: "林小明",
      prescriptionCount: 3,
    },
    {
      id: "RX002",
      CAM_PATID: "P10345678",
      patientName: "陳美華",
      prescriptionCount: 5,
    },
    {
      id: "RX003",
      CAM_PATID: "P10456789",
      patientName: "張文雄",
      prescriptionCount: 2,
    },
    {
      id: "RX004",
      CAM_PATID: "P10567890",
      patientName: "王淑芬",
      prescriptionCount: 4,
    },
  ],
  cp = {
    P10234567: {
      CAM_ID: "CAM-2024-0001",
      CAM_DT: "2024-05-08",
      CAM_PATID: "P10234567",
      CAM_PTBIRTH: "1968-07-22",
      CAM_CAKIND: "乳癌",
      CAM_CASCMDNAME: "李美玲",
      CAM_DOCNAME: "王大明",
      CAM_HALFDOCNAME: "陳志強",
      CAM_DISDATE: "2024-02-10",
      CAM_HEIGHT: "158",
      CAM_WEIGHT: "55",
      CAM_NUMBER: "3",
      CAM_MEMO: "第三次治療維護，病患配合度良好，副作用控制穩定",
      CAM_LIVESTATE: "與家人同住",
      CAM_ECOMOMY: "中等",
      CAM_OCCUPATION: "教師",
      CAM_SMOKE: "否",
      CAM_DRINK: "偶爾",
      CAM_BENUT: "否",
      CAM_PERSONHIS: "2018年曾有甲狀腺結節，手術切除，恢復良好",
      CAN_FAMILYHIS: "母親有乳癌病史，外祖母有胃癌病史",
      CAM_STOPMC: "已停經（52歲）",
      CAM_COMORDIS: "是",
      CAM_COMORDISNM: "高血壓（使用降壓藥控制中）、甲狀腺機能低下",
      CAM_NEXTVISIT: "2026-05-20",
      CAM_CLOSE: "",
      CAM_CLOSEDT: "",
      pHACHECASD7: [
        {
          D7_PERIODNM: "初次診斷",
          D7_STAGENM: "IIIA",
          D7_T: "T3",
          D7_N: "N1",
          D7_M: "M0",
          D7_DATE: "2024-02-15",
        },
        {
          D7_PERIODNM: "術後再分期",
          D7_STAGENM: "IIB",
          D7_T: "T2",
          D7_N: "N1",
          D7_M: "M0",
          D7_DATE: "2024-04-20",
        },
      ],
      pHACHERADECT: [
        {
          RCT_VISITDT: "2024-04-01",
          RCT_TYPE: "血液毒性",
          RCT_CODE: "Grade 2",
          RCT_KIND: "門診",
          RCT_ISCURRENT: "化療中",
          RCT_DOCNAME: "王大明",
        },
        {
          RCT_VISITDT: "2024-05-10",
          RCT_TYPE: "神經毒性",
          RCT_CODE: "Grade 1",
          RCT_KIND: "門診",
          RCT_ISCURRENT: "化療中",
          RCT_DOCNAME: "王大明",
        },
        {
          RCT_VISITDT: "2024-06-15",
          RCT_TYPE: "腸胃道反應",
          RCT_CODE: "Grade 2",
          RCT_KIND: "住院",
          RCT_ISCURRENT: "化療後",
          RCT_DOCNAME: "陳志強",
        },
      ],
      pHACEHPTCAM: [
        {
          CHM_VISITDT: "2024-02-20",
          CHM_CAKINDNM: "浸潤性乳管癌",
          CHM_CLINICALT: "T3",
          CHM_CLINICALN: "N1",
          CHM_CLINICALM: "M0",
          CHM_CSG: "IIIA",
          CHM_PATHOLOGICT: "T2",
          CHM_PATHOLOGICALN: "N1",
          CHM_PATHOLOGICALM: "M0",
          CHM_PSG: "IIB",
        },
      ],
    },
    P10345678: {
      CAM_ID: "CAM-2024-0002",
      CAM_DT: "2024-05-08",
      CAM_PATID: "P10345678",
      CAM_PTBIRTH: "1972-11-03",
      CAM_CAKIND: "大腸直腸癌",
      CAM_CASCMDNAME: "張惠如",
      CAM_DOCNAME: "劉建國",
      CAM_HALFDOCNAME: "林俊傑",
      CAM_DISDATE: "2023-12-01",
      CAM_HEIGHT: "165",
      CAM_WEIGHT: "72",
      CAM_NUMBER: "5",
      CAM_MEMO: "第五次治療，目前進行FOLFOX方案",
      CAM_LIVESTATE: "獨居",
      CAM_ECOMOMY: "低收入戶",
      CAM_OCCUPATION: "工廠作業員",
      CAM_SMOKE: "是（已戒）",
      CAM_DRINK: "否",
      CAM_BENUT: "是（已戒）",
      CAM_PERSONHIS: "無癌症個人史",
      CAN_FAMILYHIS: "父親有大腸癌病史，叔父有肝癌病史",
      CAM_STOPMC: "未停經",
      CAM_COMORDIS: "是",
      CAM_COMORDISNM: "第二型糖尿病（口服藥控制中）",
      CAM_NEXTVISIT: "2026-05-14",
      CAM_CLOSE: "",
      CAM_CLOSEDT: "",
      pHACHECASD7: [
        {
          D7_PERIODNM: "初次診斷",
          D7_STAGENM: "IV",
          D7_T: "T4",
          D7_N: "N2",
          D7_M: "M1",
          D7_DATE: "2023-12-10",
        },
      ],
      pHACHERADECT: [
        {
          RCT_VISITDT: "2024-02-01",
          RCT_TYPE: "血液毒性",
          RCT_CODE: "Grade 3",
          RCT_KIND: "住院",
          RCT_ISCURRENT: "化療中",
          RCT_DOCNAME: "劉建國",
        },
        {
          RCT_VISITDT: "2024-03-15",
          RCT_TYPE: "口腔黏膜炎",
          RCT_CODE: "Grade 2",
          RCT_KIND: "門診",
          RCT_ISCURRENT: "化療中",
          RCT_DOCNAME: "劉建國",
        },
      ],
      pHACEHPTCAM: [
        {
          CHM_VISITDT: "2023-12-15",
          CHM_CAKINDNM: "直腸腺癌",
          CHM_CLINICALT: "T4",
          CHM_CLINICALN: "N2",
          CHM_CLINICALM: "M1",
          CHM_CSG: "IV",
          CHM_PATHOLOGICT: "T4",
          CHM_PATHOLOGICALN: "N2",
          CHM_PATHOLOGICALM: "M1",
          CHM_PSG: "IV",
        },
      ],
    },
    P10456789: {
      CAM_ID: "CAM-2023-0089",
      CAM_DT: "2024-05-08",
      CAM_PATID: "P10456789",
      CAM_PTBIRTH: "1955-04-18",
      CAM_CAKIND: "肺癌",
      CAM_CASCMDNAME: "李美玲",
      CAM_DOCNAME: "陳志強",
      CAM_HALFDOCNAME: "王大明",
      CAM_DISDATE: "2023-08-05",
      CAM_HEIGHT: "172",
      CAM_WEIGHT: "68",
      CAM_NUMBER: "2",
      CAM_MEMO: "目前進行第二期標靶治療評估",
      CAM_LIVESTATE: "與配偶同住",
      CAM_ECOMOMY: "中上",
      CAM_OCCUPATION: "退休（前建築師）",
      CAM_SMOKE: "是（每天1包，30年菸齡）",
      CAM_DRINK: "是（每週1-2次）",
      CAM_BENUT: "否",
      CAM_PERSONHIS: "無其他癌症個人史",
      CAN_FAMILYHIS: "兄長有肺癌病史",
      CAM_STOPMC: "N/A（男性）",
      CAM_COMORDIS: "是",
      CAM_COMORDISNM: "慢性阻塞性肺病（COPD）、高血壓",
      CAM_NEXTVISIT: "2026-05-28",
      CAM_CLOSE: "",
      CAM_CLOSEDT: "",
      pHACHECASD7: [
        {
          D7_PERIODNM: "初次診斷",
          D7_STAGENM: "IIIB",
          D7_T: "T3",
          D7_N: "N2",
          D7_M: "M0",
          D7_DATE: "2023-08-15",
        },
      ],
      pHACHERADECT: [
        {
          RCT_VISITDT: "2023-11-10",
          RCT_TYPE: "皮膚反應",
          RCT_CODE: "Grade 2",
          RCT_KIND: "門診",
          RCT_ISCURRENT: "化療中",
          RCT_DOCNAME: "陳志強",
        },
      ],
      pHACEHPTCAM: [
        {
          CHM_VISITDT: "2023-08-20",
          CHM_CAKINDNM: "非小細胞肺癌（腺癌）",
          CHM_CLINICALT: "T3",
          CHM_CLINICALN: "N2",
          CHM_CLINICALM: "M0",
          CHM_CSG: "IIIB",
          CHM_PATHOLOGICT: "T3",
          CHM_PATHOLOGICALN: "N2",
          CHM_PATHOLOGICALM: "M0",
          CHM_PSG: "IIIB",
        },
      ],
    },
    P10567890: {
      CAM_ID: "CAM-2024-0035",
      CAM_DT: "2024-05-08",
      CAM_PATID: "P10567890",
      CAM_PTBIRTH: "1980-01-30",
      CAM_CAKIND: "卵巢癌",
      CAM_CASCMDNAME: "張惠如",
      CAM_DOCNAME: "林俊傑",
      CAM_HALFDOCNAME: "劉建國",
      CAM_DISDATE: "2024-04-01",
      CAM_HEIGHT: "160",
      CAM_WEIGHT: "50",
      CAM_NUMBER: "4",
      CAM_MEMO: "卡鉑+太平洋紫杉醇化療方案第四療程",
      CAM_LIVESTATE: "與家人同住",
      CAM_ECOMOMY: "中等",
      CAM_OCCUPATION: "家管",
      CAM_SMOKE: "否",
      CAM_DRINK: "否",
      CAM_BENUT: "否",
      CAM_PERSONHIS: "無癌症個人史",
      CAN_FAMILYHIS: "母親有卵巢癌病史，外祖母有乳癌病史",
      CAM_STOPMC: "未停經",
      CAM_COMORDIS: "否",
      CAM_COMORDISNM: "",
      CAM_NEXTVISIT: "",
      CAM_CLOSE: "完成治療",
      CAM_CLOSEDT: "2024-08-15",
      pHACHECASD7: [
        {
          D7_PERIODNM: "初次診斷",
          D7_STAGENM: "IIIC",
          D7_T: "T3",
          D7_N: "N1",
          D7_M: "M0",
          D7_DATE: "2024-04-10",
        },
        {
          D7_PERIODNM: "術後分期",
          D7_STAGENM: "IIIC",
          D7_T: "T3",
          D7_N: "N1",
          D7_M: "M0",
          D7_DATE: "2024-05-05",
        },
      ],
      pHACHERADECT: [
        {
          RCT_VISITDT: "2024-06-01",
          RCT_TYPE: "血液毒性",
          RCT_CODE: "Grade 2",
          RCT_KIND: "門診",
          RCT_ISCURRENT: "化療中",
          RCT_DOCNAME: "林俊傑",
        },
        {
          RCT_VISITDT: "2024-07-08",
          RCT_TYPE: "腎毒性",
          RCT_CODE: "Grade 1",
          RCT_KIND: "門診",
          RCT_ISCURRENT: "化療中",
          RCT_DOCNAME: "林俊傑",
        },
        {
          RCT_VISITDT: "2024-08-01",
          RCT_TYPE: "神經毒性",
          RCT_CODE: "Grade 2",
          RCT_KIND: "門診",
          RCT_ISCURRENT: "化療後",
          RCT_DOCNAME: "劉建國",
        },
      ],
      pHACEHPTCAM: [
        {
          CHM_VISITDT: "2024-04-08",
          CHM_CAKINDNM: "漿液性卵巢癌",
          CHM_CLINICALT: "T3",
          CHM_CLINICALN: "N1",
          CHM_CLINICALM: "M0",
          CHM_CSG: "IIIC",
          CHM_PATHOLOGICT: "T3",
          CHM_PATHOLOGICALN: "N1",
          CHM_PATHOLOGICALM: "M0",
          CHM_PSG: "IIIC",
        },
      ],
    },
  },
  dp = {
    P10234567:
      "患者林小明為浸潤性乳管癌，最初診斷於2024年2月10日，臨床分期為IIIA期（T3N1M0），術後再分期調整為IIB期（T2N1M0）。目前進行第三次治療維護，病患配合度良好，副作用控制穩定。個人史方面，2018年曾有甲狀腺結節並手術切除，恢復良好；母親有乳癌病史，外祖母有胃癌病史，家族風險較高。共病包含高血壓（使用降壓藥控制中）及甲狀腺機能低下。生活習慣方面，偶有飲酒，無抽菸及嚼檳榔史。最新副作用評估顯示血液毒性Grade 2及神經毒性Grade 1，腸胃道反應Grade 2（住院處理）。患者身高158公分，體重55公斤，與家人同住，經濟狀況中等，職業為教師。主責醫師為王大明，半責醫師為陳志強，個管師為李美玲。個案目前持續追蹤中，尚未結案。",
    P10345678:
      "患者陳美華為直腸腺癌，最初診斷於2023年12月1日，臨床與病理分期均為IV期（T4N2M1）。目前進行第五次治療，採FOLFOX化療方案。曾有抽菸史（已戒）及嚼檳榔史（已戒），無飲酒習慣。父親有大腸癌病史，叔父有肝癌病史，具明顯家族遺傳風險。共病為第二型糖尿病，以口服藥物控制中。最新副作用評估顯示血液毒性Grade 3（住院處理），及口腔黏膜炎Grade 2（門診追蹤）。患者身高165公分，體重72公斤，目前獨居，屬低收入戶，職業為工廠作業員，社會支持較為薄弱，建議加強個案關懷訪視。主責醫師為劉建國，半責醫師為林俊傑，個管師為張惠如。個案目前持續追蹤中，尚未結案。",
    P10456789:
      "患者張文雄為非小細胞肺癌（腺癌），最初診斷於2023年8月5日，臨床與病理分期均為IIIB期（T3N2M0）。目前進行第二期標靶治療評估。患者有長期抽菸史（每天一包，30年菸齡）及定期飲酒習慣（每週1至2次），兄長亦有肺癌病史，吸菸史與家族史均為重要風險因子。共病包含慢性阻塞性肺病（COPD）及高血壓，肺功能狀況需持續監測。最新副作用評估顯示皮膚反應Grade 2（門診追蹤）。患者身高172公分，體重68公斤，與配偶同住，經濟狀況中上，職業為退休建築師，社會支持良好。主責醫師為陳志強，半責醫師為王大明，個管師為李美玲。個案目前持續追蹤中，尚未結案。",
    P10567890:
      "患者王淑芬為漿液性卵巢癌，最初診斷於2024年4月1日，臨床與病理分期均為IIIC期（T3N1M0），術後分期維持不變。目前進行卡鉑加太平洋紫杉醇化療方案第四療程。無抽菸、飲酒及嚼檳榔史；母親有卵巢癌病史，外祖母有乳癌病史，家族婦科癌症風險顯著。無共病紀錄。最新副作用評估顯示血液毒性Grade 2、腎毒性Grade 1及神經毒性Grade 2，均於門診追蹤處理。患者身高160公分，體重50公斤，與家人同住，經濟狀況中等，職業為家管。主責醫師為林俊傑，半責醫師為劉建國，個管師為張惠如。個案已於2024年8月15日完成治療結案。",
  };
async function fp() {
  return (await new Promise((e) => setTimeout(e, 600)), ap);
}
async function pp(e) {
  await new Promise((n) => setTimeout(n, 400));
  const t = cp[e];
  if (!t) throw new Error(`Patient ${e} not found`);
  return t;
}
const mp = {
  乳癌: "bg-rose-100 text-rose-700",
  大腸直腸癌: "bg-amber-100 text-amber-700",
  肺癌: "bg-sky-100 text-sky-700",
  卵巢癌: "bg-teal-100 text-teal-700",
};
function hp(e) {
  return mp[e] ?? "bg-slate-100 text-slate-600";
}
const vp = {
  林小明: "乳癌",
  陳美華: "大腸直腸癌",
  張文雄: "肺癌",
  王淑芬: "卵巢癌",
};
function xp({ onSelectPatient: e, onLogout: t }) {
  const [n, r] = O.useState([]),
    [l, i] = O.useState(!0),
    [s, u] = O.useState("");
  async function a() {
    i(!0);
    const h = await fp();
    (r(h), i(!1));
  }
  O.useEffect(() => {
    a();
  }, []);
  const d = n.filter(
    (h) => h.patientName.includes(s) || h.CAM_PATID.includes(s),
  );
  return o.jsxs("div", {
    className: "min-h-screen bg-slate-50 flex flex-col",
    children: [
      o.jsxs("header", {
        className:
          "bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between sticky top-0 z-10 shadow-sm",
        children: [
          o.jsxs("div", {
            className: "flex items-center gap-3",
            children: [
              o.jsx("div", {
                className: "bg-blue-600 rounded-xl p-2",
                children: o.jsx(pc, { className: "w-5 h-5 text-white" }),
              }),
              o.jsxs("div", {
                children: [
                  o.jsx("h1", {
                    className: "text-lg font-bold text-slate-800 leading-tight",
                    children: "化療個案管理系統",
                  }),
                  o.jsx("p", {
                    className: "text-sm text-slate-400",
                    children: "個案清單",
                  }),
                ],
              }),
            ],
          }),
          o.jsxs("div", {
            className: "flex items-center gap-3",
            children: [
              o.jsx("button", {
                onClick: a,
                className:
                  "p-2 rounded-lg text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition",
                title: "重新整理",
                children: o.jsx(np, {
                  className: `w-5 h-5 ${l ? "animate-spin" : ""}`,
                }),
              }),
              o.jsxs("div", {
                className:
                  "flex items-center gap-2.5 px-3 py-2 rounded-xl bg-slate-50 border border-slate-100",
                children: [
                  o.jsx("div", {
                    className: "bg-blue-100 rounded-full p-1.5",
                    children: o.jsx(rn, { className: "w-4 h-4 text-blue-600" }),
                  }),
                  o.jsxs("div", {
                    className: "leading-tight",
                    children: [
                      o.jsx("p", {
                        className: "text-sm font-semibold text-slate-700",
                        children: "葉大雄",
                      }),
                      o.jsx("p", {
                        className: "text-xs text-slate-400",
                        children: "護理科",
                      }),
                    ],
                  }),
                ],
              }),
              o.jsx("button", {
                onClick: t,
                className:
                  "p-2 rounded-xl text-slate-500 hover:text-red-600 hover:bg-red-50 transition",
                title: "登出",
                children: o.jsx(tp, { className: "w-5 h-5" }),
              }),
            ],
          }),
        ],
      }),
      o.jsxs("div", {
        className: "flex-1 px-4 sm:px-6 lg:px-8 py-6 w-full mx-auto",
        children: [
          o.jsxs("div", {
            className: "grid grid-cols-2 gap-4 mb-6",
            children: [
              o.jsxs("div", {
                className:
                  "bg-white rounded-xl border border-slate-100 shadow-sm p-4 text-center",
                children: [
                  o.jsx("p", {
                    className: "text-2xl font-bold text-blue-600",
                    children: n.length,
                  }),
                  o.jsx("p", {
                    className: "text-sm text-slate-500 mt-0.5",
                    children: "管理個案",
                  }),
                ],
              }),
              o.jsxs("div", {
                className:
                  "bg-white rounded-xl border border-slate-100 shadow-sm p-4 text-center",
                children: [
                  o.jsx("p", {
                    className: "text-2xl font-bold text-emerald-600",
                    children: n.reduce((h, v) => h + v.prescriptionCount, 0),
                  }),
                  o.jsx("p", {
                    className: "text-sm text-slate-500 mt-0.5",
                    children: "處方總數",
                  }),
                ],
              }),
            ],
          }),
          o.jsxs("div", {
            className: "relative mb-5",
            children: [
              o.jsx(rp, {
                className:
                  "absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400",
              }),
              o.jsx("input", {
                type: "text",
                value: s,
                onChange: (h) => u(h.target.value),
                placeholder: "搜尋病歷號或姓名...",
                className:
                  "w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl bg-white text-slate-700 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-base",
              }),
            ],
          }),
          l
            ? o.jsxs("div", {
                className:
                  "flex flex-col items-center justify-center py-24 gap-3",
                children: [
                  o.jsxs("svg", {
                    className: "animate-spin w-8 h-8 text-blue-500",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [
                      o.jsx("circle", {
                        className: "opacity-25",
                        cx: "12",
                        cy: "12",
                        r: "10",
                        stroke: "currentColor",
                        strokeWidth: "4",
                      }),
                      o.jsx("path", {
                        className: "opacity-75",
                        fill: "currentColor",
                        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z",
                      }),
                    ],
                  }),
                  o.jsx("p", {
                    className: "text-slate-400 text-base",
                    children: "載入個案資料中...",
                  }),
                ],
              })
            : o.jsxs(o.Fragment, {
                children: [
                  o.jsxs("p", {
                    className: "text-sm text-slate-400 mb-3",
                    children: ["共 ", d.length, " 筆個案"],
                  }),
                  o.jsx("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                    children: d.map((h) => {
                      const v = vp[h.patientName] ?? "";
                      return o.jsxs(
                        "button",
                        {
                          onClick: () => e(h.CAM_PATID, h.patientName),
                          className:
                            "bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-200 p-5 text-left group active:scale-[0.98]",
                          children: [
                            o.jsxs("div", {
                              className: "flex items-start justify-between",
                              children: [
                                o.jsxs("div", {
                                  className: "flex items-center gap-3",
                                  children: [
                                    o.jsx("div", {
                                      className:
                                        "bg-blue-50 group-hover:bg-blue-100 transition rounded-full p-2.5",
                                      children: o.jsx(rn, {
                                        className: "w-5 h-5 text-blue-500",
                                      }),
                                    }),
                                    o.jsxs("div", {
                                      children: [
                                        o.jsx("p", {
                                          className:
                                            "font-semibold text-slate-800 text-base",
                                          children: h.patientName,
                                        }),
                                        o.jsx("p", {
                                          className:
                                            "text-sm text-slate-400 mt-0.5 font-mono",
                                          children: h.CAM_PATID,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                o.jsx(Xf, {
                                  className:
                                    "w-5 h-5 text-slate-300 group-hover:text-blue-400 mt-1 transition",
                                }),
                              ],
                            }),
                            o.jsx("div", {
                              className:
                                "mt-4 flex items-center gap-2 flex-wrap",
                              children:
                                v &&
                                o.jsx("span", {
                                  className: `text-sm px-2.5 py-1 rounded-full font-medium ${hp(v)}`,
                                  children: v,
                                }),
                            }),
                            o.jsxs("div", {
                              className:
                                "mt-3 pt-3 border-t border-slate-50 flex items-center justify-between",
                              children: [
                                o.jsxs("div", {
                                  className:
                                    "flex items-center gap-1.5 text-sm text-slate-500",
                                  children: [
                                    o.jsx(hc, { className: "w-3.5 h-3.5" }),
                                    o.jsx("span", { children: "處方數量" }),
                                  ],
                                }),
                                o.jsxs("span", {
                                  className:
                                    "bg-blue-50 text-blue-600 text-sm font-bold px-2.5 py-0.5 rounded-full",
                                  children: [h.prescriptionCount, " 筆"],
                                }),
                              ],
                            }),
                          ],
                        },
                        h.id,
                      );
                    }),
                  }),
                ],
              }),
        ],
      }),
    ],
  });
}
const yp = [
  {
    id: 1,
    type: "case_manager",
    author: "陳麗華 個管師",
    date: "2024-04-28",
    content:
      "個案今日電話追蹤，表示近日食慾差，體重下降約 2 公斤。已提醒補充高蛋白飲食，並安排營養師諮詢。",
  },
  {
    id: 2,
    type: "nurse",
    author: "林美君 護理師",
    date: "2024-04-25",
    content:
      "化療當天評估：個案一般狀況尚可，白血球 3.8K，給予標準預防性止吐藥。治療過程順利，無立即性不適反應。",
  },
  {
    id: 3,
    type: "case_manager",
    author: "陳麗華 個管師",
    date: "2024-04-15",
    content:
      "個案反映手腳末梢有輕微麻木感，已通報主治醫師評估是否調整化療劑量。衛教個案如有加重需立即回診。",
  },
  {
    id: 4,
    type: "nurse",
    author: "王怡婷 護理師",
    date: "2024-04-10",
    content:
      "換藥及靜脈留置針評估，注射部位無紅腫浸潤。個案表示睡眠品質不佳，已轉介心理師進行支持性諮詢。",
  },
  {
    id: 5,
    type: "case_manager",
    author: "陳麗華 個管師",
    date: "2024-03-30",
    content:
      "完成第三療程前評估。與個案及家屬說明本次療程預期副作用與注意事項，家屬表示理解並給予積極配合。",
  },
  {
    id: 6,
    type: "nurse",
    author: "林美君 護理師",
    date: "2024-03-22",
    content:
      "個案訴噁心感明顯，已依醫囑給予 Ondansetron 8mg。建議少量多餐，並記錄嘔吐次數供下次回診參考。",
  },
  {
    id: 7,
    type: "case_manager",
    author: "陳麗華 個管師",
    date: "2024-03-10",
    content:
      "協助個案申請重大傷病卡，文件已備齊送出，預計兩週內完成。同步確認社會福利補助申請進度。",
  },
];
function ge({ label: e, value: t, mono: n }) {
  return t
    ? o.jsxs("div", {
        className:
          "flex items-start gap-2 py-2.5 border-b border-slate-50 last:border-0",
        children: [
          o.jsx("span", {
            className: "text-sm text-slate-400 w-28 shrink-0 pt-0.5",
            children: e,
          }),
          o.jsx("span", {
            className: `text-base text-slate-700 flex-1 ${n ? "font-mono" : ""}`,
            children: t,
          }),
        ],
      })
    : null;
}
function ql({ label: e, value: t, colorClass: n }) {
  return o.jsxs("div", {
    className:
      "flex flex-col items-center bg-slate-50 rounded-xl px-4 py-3 min-w-[80px]",
    children: [
      o.jsx("span", { className: `text-lg font-bold ${n}`, children: t }),
      o.jsx("span", {
        className: "text-sm text-slate-400 mt-0.5",
        children: e,
      }),
    ],
  });
}
function bl({ label: e, value: t }) {
  const n = t.startsWith("是");
  return o.jsxs("div", {
    className: "flex items-center gap-2 bg-slate-50 rounded-xl px-3 py-2.5",
    children: [
      o.jsx("span", {
        className: `w-2 h-2 rounded-full shrink-0 ${n ? "bg-red-400" : "bg-emerald-400"}`,
      }),
      o.jsxs("div", {
        children: [
          o.jsx("p", { className: "text-sm text-slate-400", children: e }),
          o.jsx("p", {
            className: "text-base font-medium text-slate-700",
            children: t,
          }),
        ],
      }),
    ],
  });
}
function gp({ date: e }) {
  const t = new Date();
  t.setHours(0, 0, 0, 0);
  const n = new Date(e),
    r = Math.ceil((n.getTime() - t.getTime()) / 864e5),
    l = r >= 0 && r <= 7,
    i = r < 0;
  return o.jsxs("div", {
    className: `flex flex-col items-center rounded-xl px-4 py-3 min-w-[140px] ${i ? "bg-red-50" : l ? "bg-amber-50" : "bg-teal-50"}`,
    children: [
      o.jsxs("div", {
        className: "flex items-center gap-1.5 mb-0.5",
        children: [
          o.jsx(Yf, {
            className: `w-3.5 h-3.5 ${i ? "text-red-400" : l ? "text-amber-400" : "text-teal-400"}`,
          }),
          o.jsx("span", {
            className: `text-sm font-bold ${i ? "text-red-600" : l ? "text-amber-600" : "text-teal-600"}`,
            children: e,
          }),
        ],
      }),
      o.jsx("span", {
        className: "text-sm text-slate-400 mt-0.5",
        children: "下次回診",
      }),
      o.jsx("span", {
        className: `text-xs mt-0.5 ${i ? "text-red-400" : l ? "text-amber-400" : "text-teal-400"}`,
        children: i
          ? `已逾 ${Math.abs(r)} 天`
          : r === 0
            ? "今日回診"
            : `${r} 天後`,
      }),
    ],
  });
}
function Cp({ grade: e }) {
  const t = parseInt(e.replace(/\D/g, ""), 10),
    n = [
      "",
      "bg-emerald-100 text-emerald-700",
      "bg-amber-100 text-amber-700",
      "bg-orange-100 text-orange-700",
      "bg-red-100 text-red-700",
      "bg-red-200 text-red-800",
    ];
  return o.jsx("span", {
    className: `text-sm font-semibold px-2 py-0.5 rounded-full ${n[t] ?? "bg-slate-100 text-slate-600"}`,
    children: e,
  });
}
function wp({ patid: e, patientName: t, onBack: n }) {
  const [r, l] = O.useState(null),
    [i, s] = O.useState(!0),
    [u, a] = O.useState(""),
    [d, h] = O.useState({ A: !0, B: !0, C: !0, D: !0 }),
    [v, m] = O.useState(!1),
    [g, C] = O.useState(""),
    [N, R] = O.useState(!1),
    [f, c] = O.useState(!1),
    [p, x] = O.useState(yp),
    [k, M] = O.useState(""),
    [E, j] = O.useState(!1),
    [V, I] = O.useState(!0),
    [pe, wt] = O.useState(!0);
  O.useEffect(() => {
    (s(!0),
      a(""),
      pp(e)
        .then(l)
        .catch(() => a("無法載入個案資料"))
        .finally(() => s(!1)));
  }, [e]);
  function Fe(S) {
    h((q) => ({ ...q, [S]: !q[S] }));
  }
  function lr() {
    const S = dp[e] ?? "目前尚無此個案的 AI 摘要。";
    (C(""), m(!0), R(!0));
    let q = 0;
    const w = setInterval(() => {
      ((q += 3),
        C(S.slice(0, q)),
        q >= S.length && (C(S), R(!1), clearInterval(w)));
    }, 18);
  }
  function Sl() {
    k.trim() &&
      (j(!0),
      setTimeout(() => {
        const S = {
          id: Date.now(),
          type: "case_manager",
          author: "葉大雄 個管師",
          date: new Date().toISOString().slice(0, 10),
          content: k.trim(),
        };
        (x((q) => [S, ...q]), M(""), j(!1));
      }, 400));
  }
  return i
    ? o.jsxs("div", {
        className: "min-h-screen bg-slate-50 flex flex-col",
        children: [
          o.jsx(ei, {
            patientName: t,
            patid: e,
            onBack: n,
            onOpenAI: () => {},
            onOpenNotes: () => {},
          }),
          o.jsxs("div", {
            className: "flex-1 flex flex-col items-center justify-center gap-3",
            children: [
              o.jsxs("svg", {
                className: "animate-spin w-8 h-8 text-blue-500",
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                  o.jsx("circle", {
                    className: "opacity-25",
                    cx: "12",
                    cy: "12",
                    r: "10",
                    stroke: "currentColor",
                    strokeWidth: "4",
                  }),
                  o.jsx("path", {
                    className: "opacity-75",
                    fill: "currentColor",
                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z",
                  }),
                ],
              }),
              o.jsx("p", {
                className: "text-slate-400 text-base",
                children: "載入個案詳情中...",
              }),
            ],
          }),
        ],
      })
    : u || !r
      ? o.jsxs("div", {
          className: "min-h-screen bg-slate-50 flex flex-col",
          children: [
            o.jsx(ei, {
              patientName: t,
              patid: e,
              onBack: n,
              onOpenAI: () => {},
              onOpenNotes: () => {},
            }),
            o.jsxs("div", {
              className:
                "flex-1 flex flex-col items-center justify-center gap-3",
              children: [
                o.jsx(Qf, { className: "w-10 h-10 text-red-400" }),
                o.jsx("p", {
                  className: "text-slate-500 text-base",
                  children: u || "資料載入失敗",
                }),
                o.jsx("button", {
                  onClick: n,
                  className: "text-blue-600 text-base underline",
                  children: "返回清單",
                }),
              ],
            }),
          ],
        })
      : o.jsxs("div", {
          className: "min-h-screen bg-slate-50 flex flex-col",
          children: [
            o.jsx(ei, {
              patientName: t,
              patid: e,
              onBack: n,
              onOpenAI: lr,
              onOpenNotes: () => c(!0),
            }),
            o.jsxs("div", {
              className:
                "flex-1 px-4 sm:px-6 lg:px-8 py-6 w-full mx-auto space-y-5",
              children: [
                o.jsxs(kr, {
                  id: "A",
                  title: "個案核心資訊",
                  icon: rn,
                  accent: "blue",
                  expanded: d.A,
                  onToggle: () => Fe("A"),
                  children: [
                    o.jsxs("div", {
                      className: "mb-4 flex flex-wrap gap-3",
                      children: [
                        o.jsx(ql, {
                          label: "身高 (cm)",
                          value: r.CAM_HEIGHT,
                          colorClass: "text-blue-600",
                        }),
                        o.jsx(ql, {
                          label: "體重 (kg)",
                          value: r.CAM_WEIGHT,
                          colorClass: "text-blue-600",
                        }),
                        o.jsx(ql, {
                          label: "治療維護序",
                          value: `第 ${r.CAM_NUMBER} 序`,
                          colorClass: "text-teal-600",
                        }),
                        r.CAM_NEXTVISIT && o.jsx(gp, { date: r.CAM_NEXTVISIT }),
                      ],
                    }),
                    o.jsxs("div", {
                      className: "grid grid-cols-1 sm:grid-cols-2 gap-x-8",
                      children: [
                        o.jsxs("div", {
                          children: [
                            o.jsx(ge, {
                              label: "個案編號",
                              value: r.CAM_ID,
                              mono: !0,
                            }),
                            o.jsx(ge, {
                              label: "病歷號",
                              value: r.CAM_PATID,
                              mono: !0,
                            }),
                            o.jsx(ge, { label: "生日", value: r.CAM_PTBIRTH }),
                            o.jsx(ge, { label: "收案日期", value: r.CAM_DT }),
                            o.jsx(ge, {
                              label: "最初診斷日期",
                              value: r.CAM_DISDATE,
                            }),
                          ],
                        }),
                        o.jsxs("div", {
                          children: [
                            o.jsx(ge, { label: "癌別", value: r.CAM_CAKIND }),
                            o.jsx(ge, {
                              label: "個管師",
                              value: r.CAM_CASCMDNAME,
                            }),
                            o.jsx(ge, {
                              label: "主責醫師",
                              value: r.CAM_DOCNAME,
                            }),
                            o.jsx(ge, {
                              label: "半責醫師",
                              value: r.CAM_HALFDOCNAME,
                            }),
                          ],
                        }),
                      ],
                    }),
                    r.CAM_MEMO &&
                      o.jsxs("div", {
                        className: "mt-3 bg-blue-50 rounded-xl px-4 py-3",
                        children: [
                          o.jsx("p", {
                            className: "text-sm text-blue-500 font-medium mb-1",
                            children: "序說明",
                          }),
                          o.jsx("p", {
                            className: "text-base text-slate-700",
                            children: r.CAM_MEMO,
                          }),
                        ],
                      }),
                  ],
                }),
                o.jsxs(kr, {
                  id: "B",
                  title: "生活史與診斷",
                  icon: ep,
                  accent: "teal",
                  expanded: d.B,
                  onToggle: () => Fe("B"),
                  children: [
                    o.jsxs("div", {
                      className: "mb-4",
                      children: [
                        o.jsx("p", {
                          className: "text-sm font-medium text-slate-500 mb-2",
                          children: "生活習慣",
                        }),
                        o.jsxs("div", {
                          className: "grid grid-cols-3 gap-2",
                          children: [
                            o.jsx(bl, { label: "抽菸", value: r.CAM_SMOKE }),
                            o.jsx(bl, { label: "喝酒", value: r.CAM_DRINK }),
                            o.jsx(bl, { label: "檳榔", value: r.CAM_BENUT }),
                          ],
                        }),
                      ],
                    }),
                    o.jsxs("div", {
                      className: "grid grid-cols-1 sm:grid-cols-2 gap-x-8",
                      children: [
                        o.jsxs("div", {
                          children: [
                            o.jsx(ge, {
                              label: "居住狀況",
                              value: r.CAM_LIVESTATE,
                            }),
                            o.jsx(ge, {
                              label: "經濟狀況",
                              value: r.CAM_ECOMOMY,
                            }),
                            o.jsx(ge, {
                              label: "職業",
                              value: r.CAM_OCCUPATION,
                            }),
                          ],
                        }),
                        o.jsx("div", {
                          children: o.jsx(ge, {
                            label: "停經狀態",
                            value: r.CAM_STOPMC,
                          }),
                        }),
                      ],
                    }),
                    o.jsxs("div", {
                      className: "mt-3 space-y-3",
                      children: [
                        o.jsxs("div", {
                          className: "bg-amber-50 rounded-xl px-4 py-3",
                          children: [
                            o.jsxs("p", {
                              className:
                                "text-sm text-amber-600 font-medium mb-1 flex items-center gap-1",
                              children: [
                                o.jsx(rn, { className: "w-3 h-3" }),
                                " 癌症個人史",
                              ],
                            }),
                            o.jsx("p", {
                              className: "text-base text-slate-700",
                              children: r.CAM_PERSONHIS || "無",
                            }),
                          ],
                        }),
                        o.jsxs("div", {
                          className: "bg-amber-50 rounded-xl px-4 py-3",
                          children: [
                            o.jsxs("p", {
                              className:
                                "text-sm text-amber-600 font-medium mb-1 flex items-center gap-1",
                              children: [
                                o.jsx(op, { className: "w-3 h-3" }),
                                " 癌症家族史",
                              ],
                            }),
                            o.jsx("p", {
                              className: "text-base text-slate-700",
                              children: r.CAN_FAMILYHIS || "無",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                o.jsxs(kr, {
                  id: "C",
                  title: "期別與副作用",
                  icon: Jf,
                  accent: "amber",
                  expanded: d.C,
                  onToggle: () => Fe("C"),
                  children: [
                    r.pHACHECASD7.length > 0 &&
                      o.jsxs("div", {
                        className: "mb-5",
                        children: [
                          o.jsx("p", {
                            className:
                              "text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3",
                            children: "腫瘤期別 (pHACHECASD7)",
                          }),
                          o.jsx("div", {
                            className: "flex flex-wrap gap-3",
                            children: r.pHACHECASD7.map((S, q) =>
                              o.jsxs(
                                "div",
                                {
                                  className:
                                    "bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 flex-1 min-w-[200px]",
                                  children: [
                                    o.jsxs("div", {
                                      className:
                                        "flex items-start justify-between mb-2",
                                      children: [
                                        o.jsx("span", {
                                          className:
                                            "text-sm font-semibold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full",
                                          children: S.D7_PERIODNM,
                                        }),
                                        o.jsx("span", {
                                          className: "text-sm text-slate-400",
                                          children: S.D7_DATE,
                                        }),
                                      ],
                                    }),
                                    o.jsx("div", {
                                      className:
                                        "flex items-baseline gap-2 mt-1",
                                      children: o.jsx("span", {
                                        className:
                                          "text-2xl font-bold text-amber-700",
                                        children: S.D7_STAGENM,
                                      }),
                                    }),
                                    o.jsx("div", {
                                      className: "flex gap-2 mt-2",
                                      children: [
                                        ["T", S.D7_T],
                                        ["N", S.D7_N],
                                        ["M", S.D7_M],
                                      ].map(([w, T]) =>
                                        o.jsxs(
                                          "span",
                                          {
                                            className:
                                              "text-sm bg-white border border-amber-200 rounded-lg px-2 py-1 text-slate-600 font-mono",
                                            children: [
                                              o.jsx("span", {
                                                className:
                                                  "text-amber-600 font-bold",
                                                children: w,
                                              }),
                                              T,
                                            ],
                                          },
                                          w,
                                        ),
                                      ),
                                    }),
                                  ],
                                },
                                q,
                              ),
                            ),
                          }),
                        ],
                      }),
                    r.pHACHERADECT.length > 0 &&
                      o.jsxs("div", {
                        className: "mb-5",
                        children: [
                          o.jsx("p", {
                            className:
                              "text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3",
                            children: "副作用評估 (pHACHERADECT)",
                          }),
                          o.jsx("div", {
                            className:
                              "overflow-x-auto rounded-xl border border-slate-100",
                            children: o.jsxs("table", {
                              className: "w-full text-base min-w-[600px]",
                              children: [
                                o.jsx("thead", {
                                  className: "bg-slate-50",
                                  children: o.jsx("tr", {
                                    children: [
                                      "評估日期",
                                      "類型",
                                      "等級",
                                      "診別",
                                      "化療評估",
                                      "評估醫師",
                                    ].map((S) =>
                                      o.jsx(
                                        "th",
                                        {
                                          className:
                                            "text-left text-sm font-semibold text-slate-500 px-4 py-3 whitespace-nowrap",
                                          children: S,
                                        },
                                        S,
                                      ),
                                    ),
                                  }),
                                }),
                                o.jsx("tbody", {
                                  children: r.pHACHERADECT.map((S, q) =>
                                    o.jsxs(
                                      "tr",
                                      {
                                        className:
                                          "border-t border-slate-50 hover:bg-slate-50 transition",
                                        children: [
                                          o.jsx("td", {
                                            className:
                                              "px-4 py-3 text-slate-600 font-mono text-sm whitespace-nowrap",
                                            children: S.RCT_VISITDT,
                                          }),
                                          o.jsx("td", {
                                            className:
                                              "px-4 py-3 text-slate-700 whitespace-nowrap",
                                            children: S.RCT_TYPE,
                                          }),
                                          o.jsx("td", {
                                            className: "px-4 py-3",
                                            children: o.jsx(Cp, {
                                              grade: S.RCT_CODE,
                                            }),
                                          }),
                                          o.jsx("td", {
                                            className: "px-4 py-3",
                                            children: o.jsx("span", {
                                              className:
                                                "text-sm bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full",
                                              children: S.RCT_KIND,
                                            }),
                                          }),
                                          o.jsx("td", {
                                            className:
                                              "px-4 py-3 text-sm text-slate-500 whitespace-nowrap",
                                            children: S.RCT_ISCURRENT,
                                          }),
                                          o.jsx("td", {
                                            className:
                                              "px-4 py-3 text-slate-600 whitespace-nowrap",
                                            children: S.RCT_DOCNAME,
                                          }),
                                        ],
                                      },
                                      q,
                                    ),
                                  ),
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    r.pHACEHPTCAM.length > 0 &&
                      o.jsxs("div", {
                        children: [
                          o.jsx("p", {
                            className:
                              "text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3",
                            children: "臨床分期告知 (pHACEHPTCAM)",
                          }),
                          o.jsx("div", {
                            className: "space-y-3",
                            children: r.pHACEHPTCAM.map((S, q) =>
                              o.jsxs(
                                "div",
                                {
                                  className: "bg-slate-50 rounded-xl p-4",
                                  children: [
                                    o.jsx("div", {
                                      className:
                                        "flex items-center justify-between mb-3 flex-wrap gap-2",
                                      children: o.jsxs("div", {
                                        children: [
                                          o.jsx("p", {
                                            className:
                                              "font-semibold text-slate-700 text-base",
                                            children: S.CHM_CAKINDNM,
                                          }),
                                          o.jsxs("p", {
                                            className:
                                              "text-sm text-slate-400 mt-0.5",
                                            children: [
                                              "告知日期：",
                                              S.CHM_VISITDT,
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                    o.jsxs("div", {
                                      className: "grid grid-cols-2 gap-3",
                                      children: [
                                        o.jsxs("div", {
                                          className:
                                            "bg-white rounded-xl p-3 border border-slate-100",
                                          children: [
                                            o.jsx("p", {
                                              className:
                                                "text-sm font-semibold text-blue-600 mb-2",
                                              children: "臨床分期 (Clinical)",
                                            }),
                                            o.jsx("div", {
                                              className: "flex gap-2 mb-2",
                                              children: [
                                                ["T", S.CHM_CLINICALT],
                                                ["N", S.CHM_CLINICALN],
                                                ["M", S.CHM_CLINICALM],
                                              ].map(([w, T]) =>
                                                o.jsxs(
                                                  "span",
                                                  {
                                                    className:
                                                      "text-sm border border-blue-200 rounded-lg px-2 py-1 text-slate-600 font-mono bg-blue-50",
                                                    children: [
                                                      o.jsx("span", {
                                                        className:
                                                          "text-blue-600 font-bold",
                                                        children: w,
                                                      }),
                                                      T,
                                                    ],
                                                  },
                                                  w,
                                                ),
                                              ),
                                            }),
                                            o.jsx("span", {
                                              className:
                                                "text-base font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-full",
                                              children: S.CHM_CSG,
                                            }),
                                          ],
                                        }),
                                        o.jsxs("div", {
                                          className:
                                            "bg-white rounded-xl p-3 border border-slate-100",
                                          children: [
                                            o.jsx("p", {
                                              className:
                                                "text-sm font-semibold text-teal-600 mb-2",
                                              children:
                                                "病理分期 (Pathological)",
                                            }),
                                            o.jsx("div", {
                                              className: "flex gap-2 mb-2",
                                              children: [
                                                ["T", S.CHM_PATHOLOGICT],
                                                ["N", S.CHM_PATHOLOGICALN],
                                                ["M", S.CHM_PATHOLOGICALM],
                                              ].map(([w, T]) =>
                                                o.jsxs(
                                                  "span",
                                                  {
                                                    className:
                                                      "text-sm border border-teal-200 rounded-lg px-2 py-1 text-slate-600 font-mono bg-teal-50",
                                                    children: [
                                                      o.jsx("span", {
                                                        className:
                                                          "text-teal-600 font-bold",
                                                        children: w,
                                                      }),
                                                      T,
                                                    ],
                                                  },
                                                  w,
                                                ),
                                              ),
                                            }),
                                            o.jsx("span", {
                                              className:
                                                "text-base font-bold text-teal-700 bg-teal-50 border border-teal-200 px-2.5 py-1 rounded-full",
                                              children: S.CHM_PSG,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                q,
                              ),
                            ),
                          }),
                        ],
                      }),
                  ],
                }),
                o.jsx(kr, {
                  id: "D",
                  title: "共病與結案",
                  icon: hc,
                  accent: "rose",
                  expanded: d.D,
                  onToggle: () => Fe("D"),
                  children: o.jsxs("div", {
                    className: "space-y-3",
                    children: [
                      o.jsxs("div", {
                        children: [
                          o.jsx("p", {
                            className:
                              "text-sm font-medium text-slate-500 mb-2",
                            children: "共病資訊",
                          }),
                          o.jsxs("div", {
                            className: "flex items-center gap-2 mb-2",
                            children: [
                              o.jsx("span", {
                                className: "text-sm text-slate-500",
                                children: "共病：",
                              }),
                              o.jsx("span", {
                                className: `text-sm font-semibold px-2.5 py-0.5 rounded-full ${r.CAM_COMORDIS === "是" ? "bg-red-100 text-red-700" : "bg-emerald-100 text-emerald-700"}`,
                                children: r.CAM_COMORDIS || "無",
                              }),
                            ],
                          }),
                          r.CAM_COMORDISNM &&
                            o.jsx("div", {
                              className: "bg-rose-50 rounded-xl px-4 py-3",
                              children: o.jsx("p", {
                                className: "text-base text-slate-700",
                                children: r.CAM_COMORDISNM,
                              }),
                            }),
                        ],
                      }),
                      o.jsxs("div", {
                        className: "pt-2",
                        children: [
                          o.jsx("p", {
                            className:
                              "text-sm font-medium text-slate-500 mb-2",
                            children: "結案資訊",
                          }),
                          r.CAM_CLOSE
                            ? o.jsxs("div", {
                                className:
                                  "bg-slate-100 rounded-xl p-4 flex items-start gap-3",
                                children: [
                                  o.jsx(Jl, {
                                    className:
                                      "w-4 h-4 text-slate-500 mt-0.5 shrink-0",
                                  }),
                                  o.jsxs("div", {
                                    children: [
                                      o.jsx("p", {
                                        className:
                                          "text-base font-medium text-slate-700",
                                        children: r.CAM_CLOSE,
                                      }),
                                      r.CAM_CLOSEDT &&
                                        o.jsxs("p", {
                                          className:
                                            "text-sm text-slate-400 mt-0.5",
                                          children: [
                                            "結案日期：",
                                            r.CAM_CLOSEDT,
                                          ],
                                        }),
                                    ],
                                  }),
                                ],
                              })
                            : o.jsxs("div", {
                                className:
                                  "bg-emerald-50 rounded-xl px-4 py-3 flex items-center gap-2",
                                children: [
                                  o.jsx(pc, {
                                    className: "w-4 h-4 text-emerald-500",
                                  }),
                                  o.jsx("p", {
                                    className:
                                      "text-base text-emerald-700 font-medium",
                                    children: "個案追蹤中（未結案）",
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
            f &&
              o.jsx("div", {
                className:
                  "fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4",
                style: {
                  background: "rgba(15,23,42,0.35)",
                  backdropFilter: "blur(4px)",
                },
                onClick: (S) => {
                  S.target === S.currentTarget && c(!1);
                },
                children: o.jsxs("div", {
                  className:
                    "w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]",
                  children: [
                    o.jsxs("div", {
                      className:
                        "flex items-center justify-between px-5 py-4 border-b border-slate-100 shrink-0",
                      children: [
                        o.jsxs("div", {
                          className: "flex items-center gap-2.5",
                          children: [
                            o.jsx(vc, { className: "w-5 h-5 text-slate-500" }),
                            o.jsx("span", {
                              className:
                                "font-semibold text-slate-800 text-base",
                              children: "備註紀錄",
                            }),
                            o.jsx("span", {
                              className: "text-sm text-slate-400",
                              children: t,
                            }),
                            o.jsx("span", {
                              className: "text-sm text-slate-300",
                              children: "·",
                            }),
                            o.jsx("span", {
                              className: "text-sm text-slate-400 font-mono",
                              children: e,
                            }),
                          ],
                        }),
                        o.jsx("button", {
                          onClick: () => c(!1),
                          className:
                            "p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition",
                          children: o.jsx(Jl, { className: "w-4 h-4" }),
                        }),
                      ],
                    }),
                    o.jsxs("div", {
                      className: "flex-1 overflow-y-auto px-5 py-4 space-y-5",
                      children: [
                        o.jsxs("div", {
                          children: [
                            o.jsxs("button", {
                              onClick: () => I((S) => !S),
                              className:
                                "w-full flex items-center gap-2 mb-3 group",
                              children: [
                                o.jsx(bo, {
                                  className: "w-4 h-4 text-amber-500",
                                }),
                                o.jsx("span", {
                                  className:
                                    "text-sm font-semibold text-slate-700",
                                  children: "個管師備註",
                                }),
                                o.jsx("span", {
                                  className:
                                    "text-xs bg-amber-100 text-amber-600 px-1.5 py-0.5 rounded-full font-semibold",
                                  children: p.filter(
                                    (S) => S.type === "case_manager",
                                  ).length,
                                }),
                                o.jsx("span", { className: "flex-1" }),
                                o.jsx(Ki, {
                                  className: `w-4 h-4 text-slate-400 transition-transform duration-200 ${V ? "rotate-180" : ""}`,
                                }),
                              ],
                            }),
                            V &&
                              o.jsx("div", {
                                className: "space-y-2",
                                children: p
                                  .filter((S) => S.type === "case_manager")
                                  .map((S) =>
                                    o.jsxs(
                                      "div",
                                      {
                                        className:
                                          "border border-slate-100 rounded-xl p-4 bg-white",
                                        children: [
                                          o.jsxs("div", {
                                            className:
                                              "flex items-baseline gap-2 mb-1.5",
                                            children: [
                                              o.jsx("span", {
                                                className:
                                                  "text-sm font-semibold text-amber-600",
                                                children:
                                                  S.author.split(" ")[0],
                                              }),
                                              o.jsx("span", {
                                                className:
                                                  "text-xs text-slate-400",
                                                children: S.date,
                                              }),
                                            ],
                                          }),
                                          o.jsx("p", {
                                            className:
                                              "text-sm text-slate-700 leading-relaxed",
                                            children: S.content,
                                          }),
                                        ],
                                      },
                                      S.id,
                                    ),
                                  ),
                              }),
                          ],
                        }),
                        o.jsxs("div", {
                          children: [
                            o.jsxs("button", {
                              onClick: () => wt((S) => !S),
                              className:
                                "w-full flex items-center gap-2 mb-3 group",
                              children: [
                                o.jsx(sp, {
                                  className: "w-4 h-4 text-sky-500",
                                }),
                                o.jsx("span", {
                                  className:
                                    "text-sm font-semibold text-slate-700",
                                  children: "護理師備註",
                                }),
                                o.jsx("span", {
                                  className:
                                    "text-xs bg-sky-100 text-sky-600 px-1.5 py-0.5 rounded-full font-semibold",
                                  children: p.filter((S) => S.type === "nurse")
                                    .length,
                                }),
                                o.jsx("span", { className: "flex-1" }),
                                o.jsx(Ki, {
                                  className: `w-4 h-4 text-slate-400 transition-transform duration-200 ${pe ? "rotate-180" : ""}`,
                                }),
                              ],
                            }),
                            pe &&
                              o.jsx("div", {
                                className: "space-y-2",
                                children: p
                                  .filter((S) => S.type === "nurse")
                                  .map((S) =>
                                    o.jsxs(
                                      "div",
                                      {
                                        className:
                                          "border border-slate-100 rounded-xl p-4 bg-white",
                                        children: [
                                          o.jsxs("div", {
                                            className:
                                              "flex items-baseline gap-2 mb-1.5",
                                            children: [
                                              o.jsx("span", {
                                                className:
                                                  "text-sm font-semibold text-sky-600",
                                                children:
                                                  S.author.split(" ")[0],
                                              }),
                                              o.jsx("span", {
                                                className:
                                                  "text-xs text-slate-400",
                                                children: S.date,
                                              }),
                                            ],
                                          }),
                                          o.jsx("p", {
                                            className:
                                              "text-sm text-slate-700 leading-relaxed",
                                            children: S.content,
                                          }),
                                        ],
                                      },
                                      S.id,
                                    ),
                                  ),
                              }),
                          ],
                        }),
                        o.jsxs("div", {
                          children: [
                            o.jsxs("div", {
                              className: "flex items-center gap-2 mb-3",
                              children: [
                                o.jsx(bo, {
                                  className: "w-4 h-4 text-amber-500",
                                }),
                                o.jsx("span", {
                                  className:
                                    "text-sm font-semibold text-slate-700",
                                  children: "新增個管師備註",
                                }),
                              ],
                            }),
                            o.jsxs("div", {
                              className:
                                "border border-slate-200 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-sky-300 focus-within:border-transparent transition",
                              children: [
                                o.jsx("textarea", {
                                  value: k,
                                  onChange: (S) => M(S.target.value),
                                  placeholder: "輸入備註內容...",
                                  rows: 3,
                                  className:
                                    "w-full text-sm text-slate-700 placeholder-slate-300 bg-white px-4 pt-3 pb-2 focus:outline-none resize-none",
                                }),
                                o.jsx("div", {
                                  className: "flex justify-end px-3 pb-3",
                                  children: o.jsxs("button", {
                                    onClick: Sl,
                                    disabled: !k.trim() || E,
                                    className:
                                      "flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-sky-500 hover:bg-sky-600 disabled:opacity-40 disabled:cursor-not-allowed transition text-white text-sm font-medium",
                                    children: [
                                      o.jsx(lp, { className: "w-3.5 h-3.5" }),
                                      E ? "送出中..." : "送出",
                                    ],
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
              }),
            v &&
              o.jsx("div", {
                className:
                  "fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4",
                style: {
                  background: "rgba(15,23,42,0.45)",
                  backdropFilter: "blur(4px)",
                },
                onClick: (S) => {
                  S.target === S.currentTarget && m(!1);
                },
                children: o.jsxs("div", {
                  className:
                    "w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]",
                  children: [
                    o.jsxs("div", {
                      className:
                        "flex items-center justify-between px-6 py-5 border-b border-slate-100",
                      style: {
                        background:
                          "linear-gradient(135deg, #eff6ff 0%, #f0fdf4 100%)",
                      },
                      children: [
                        o.jsxs("div", {
                          className: "flex items-center gap-3",
                          children: [
                            o.jsx("div", {
                              className: "bg-blue-600 rounded-xl p-2 shadow-sm",
                              children: o.jsx(mc, {
                                className: "w-5 h-5 text-white",
                              }),
                            }),
                            o.jsxs("div", {
                              children: [
                                o.jsx("p", {
                                  className:
                                    "font-bold text-slate-800 text-base",
                                  children: "化療助手",
                                }),
                                o.jsx("p", {
                                  className: "text-sm text-slate-400",
                                  children: "AI 個案摘要分析",
                                }),
                              ],
                            }),
                          ],
                        }),
                        o.jsx("button", {
                          onClick: () => m(!1),
                          className:
                            "p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition",
                          children: o.jsx(Jl, { className: "w-5 h-5" }),
                        }),
                      ],
                    }),
                    o.jsxs("div", {
                      className: "px-6 pt-4 pb-2 flex items-center gap-2",
                      children: [
                        o.jsxs("div", {
                          className:
                            "bg-blue-50 rounded-full px-3 py-1 flex items-center gap-1.5",
                          children: [
                            o.jsx(rn, {
                              className: "w-3.5 h-3.5 text-blue-500",
                            }),
                            o.jsx("span", {
                              className: "text-sm font-medium text-blue-700",
                              children: t,
                            }),
                            o.jsx("span", {
                              className: "text-sm text-blue-400 font-mono",
                              children: e,
                            }),
                          ],
                        }),
                        o.jsxs("div", {
                          className:
                            "flex items-center gap-1 text-sm text-slate-400",
                          children: [
                            o.jsx(ip, {
                              className: "w-3.5 h-3.5 text-amber-400",
                            }),
                            o.jsx("span", {
                              children: "由 AI 根據處方資料生成",
                            }),
                          ],
                        }),
                      ],
                    }),
                    o.jsx("div", {
                      className: "px-6 pb-6 pt-2 overflow-y-auto flex-1",
                      children: o.jsx("div", {
                        className: "bg-slate-50 rounded-2xl p-5",
                        children: o.jsxs("p", {
                          className: "text-base text-slate-700 leading-relaxed",
                          children: [
                            g,
                            N &&
                              o.jsx("span", {
                                className:
                                  "inline-block w-0.5 h-4 bg-blue-500 ml-0.5 align-middle animate-pulse",
                              }),
                          ],
                        }),
                      }),
                    }),
                    o.jsx("div", {
                      className: "px-6 pb-5",
                      children: o.jsx("p", {
                        className: "text-sm text-slate-400 text-center",
                        children:
                          "本摘要由 AI 自動產生，僅供參考，請以臨床判斷為準",
                      }),
                    }),
                  ],
                }),
              }),
          ],
        });
}
function ei({
  patientName: e,
  patid: t,
  onBack: n,
  onOpenAI: r,
  onOpenNotes: l,
}) {
  return o.jsxs("header", {
    className:
      "bg-white border-b border-slate-200 px-4 sm:px-6 py-4 flex items-center gap-4 sticky top-0 z-10 shadow-sm",
    children: [
      o.jsxs("button", {
        onClick: n,
        className:
          "flex items-center gap-1.5 text-slate-500 hover:text-blue-600 transition group",
        children: [
          o.jsx(Kf, {
            className:
              "w-5 h-5 group-hover:-translate-x-0.5 transition-transform",
          }),
          o.jsx("span", {
            className: "text-base font-medium hidden sm:block",
            children: "返回清單",
          }),
        ],
      }),
      o.jsx("div", { className: "h-5 w-px bg-slate-200 hidden sm:block" }),
      o.jsxs("div", {
        className: "flex items-center gap-2.5 min-w-0 flex-1",
        children: [
          o.jsx("div", {
            className: "bg-blue-100 rounded-full p-1.5 shrink-0",
            children: o.jsx(rn, { className: "w-4 h-4 text-blue-600" }),
          }),
          o.jsxs("div", {
            className: "min-w-0",
            children: [
              o.jsx("p", {
                className:
                  "font-bold text-slate-800 text-base leading-tight truncate",
                children: e,
              }),
              o.jsx("p", {
                className: "text-sm text-slate-400 font-mono",
                children: t,
              }),
            ],
          }),
        ],
      }),
      o.jsxs("div", {
        className: "flex items-center gap-2 shrink-0",
        children: [
          o.jsxs("button", {
            onClick: l,
            className:
              "flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 active:scale-[0.97] transition-all text-slate-700 text-base font-medium",
            children: [
              o.jsx(vc, { className: "w-4 h-4" }),
              o.jsx("span", { className: "hidden sm:block", children: "備註" }),
            ],
          }),
          o.jsxs("button", {
            onClick: r,
            className:
              "flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-[0.97] transition-all text-white text-base font-medium shadow-sm hover:shadow-md",
            children: [
              o.jsx(mc, { className: "w-4 h-4" }),
              o.jsx("span", {
                className: "hidden sm:block",
                children: "化療助手",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function kr({
  id: e,
  title: t,
  icon: n,
  accent: r = "blue",
  expanded: l,
  onToggle: i,
  children: s,
}) {
  const u = {
    blue: {
      border: "border-blue-200",
      bg: "bg-blue-50",
      text: "text-blue-700",
      iconBg: "bg-blue-100",
    },
    teal: {
      border: "border-teal-200",
      bg: "bg-teal-50",
      text: "text-teal-700",
      iconBg: "bg-teal-100",
    },
    amber: {
      border: "border-amber-200",
      bg: "bg-amber-50",
      text: "text-amber-700",
      iconBg: "bg-amber-100",
    },
    rose: {
      border: "border-rose-200",
      bg: "bg-rose-50",
      text: "text-rose-700",
      iconBg: "bg-rose-100",
    },
  }[r];
  return o.jsxs("div", {
    className:
      "bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden",
    children: [
      o.jsxs("button", {
        onClick: i,
        className: `w-full flex items-center justify-between px-5 py-4 border-b ${u.border} ${u.bg} transition hover:brightness-95`,
        children: [
          o.jsxs("div", {
            className: "flex items-center gap-2.5",
            children: [
              o.jsx("div", {
                className: `${u.iconBg} rounded-lg p-1.5`,
                children: o.jsx(n, { className: `w-4 h-4 ${u.text}` }),
              }),
              o.jsxs("span", {
                className: `font-semibold text-base ${u.text}`,
                children: [
                  o.jsx("span", {
                    className: `inline-block w-5 h-5 text-sm font-bold border ${u.border} rounded-full mr-2 text-center leading-5`,
                    children: e,
                  }),
                  t,
                ],
              }),
            ],
          }),
          l
            ? o.jsx(Zf, { className: `w-4 h-4 ${u.text}` })
            : o.jsx(Ki, { className: `w-4 h-4 ${u.text}` }),
        ],
      }),
      l && o.jsx("div", { className: "px-5 py-4", children: s }),
    ],
  });
}
function Np() {
  const [e, t] = O.useState("login"),
    [n, r] = O.useState(null);
  function l() {
    t("list");
  }
  function i(a, d) {
    (r({ patid: a, name: d }), t("detail"));
  }
  function s() {
    (r(null), t("list"));
  }
  function u() {
    (r(null), t("login"));
  }
  return e === "login"
    ? o.jsx(up, { onLogin: l })
    : e === "list"
      ? o.jsx(xp, { onSelectPatient: i, onLogout: u })
      : e === "detail" && n
        ? o.jsx(wp, { patid: n.patid, patientName: n.name, onBack: s })
        : null;
}
fc(document.getElementById("root")).render(
  o.jsx(O.StrictMode, { children: o.jsx(Np, {}) }),
);
