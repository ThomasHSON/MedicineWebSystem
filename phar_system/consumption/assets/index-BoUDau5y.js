var of = Object.defineProperty;
var lf = (e, t, n) =>
  t in e
    ? of(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var Zs = (e, t, n) => lf(e, typeof t != "symbol" ? t + "" : t, n);
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const l of i.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
var Nu = { exports: {} },
  Jo = {},
  Pu = { exports: {} },
  T = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fr = Symbol.for("react.element"),
  sf = Symbol.for("react.portal"),
  af = Symbol.for("react.fragment"),
  uf = Symbol.for("react.strict_mode"),
  cf = Symbol.for("react.profiler"),
  df = Symbol.for("react.provider"),
  ff = Symbol.for("react.context"),
  gf = Symbol.for("react.forward_ref"),
  pf = Symbol.for("react.suspense"),
  hf = Symbol.for("react.memo"),
  mf = Symbol.for("react.lazy"),
  bs = Symbol.iterator;
function vf(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (bs && e[bs]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var _u = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Lu = Object.assign,
  $u = {};
function Mn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = $u),
    (this.updater = n || _u);
}
Mn.prototype.isReactComponent = {};
Mn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Mn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Fu() {}
Fu.prototype = Mn.prototype;
function Zl(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = $u),
    (this.updater = n || _u);
}
var bl = (Zl.prototype = new Fu());
bl.constructor = Zl;
Lu(bl, Mn.prototype);
bl.isPureReactComponent = !0;
var ea = Array.isArray,
  Ou = Object.prototype.hasOwnProperty,
  es = { current: null },
  Iu = { key: !0, ref: !0, __self: !0, __source: !0 };
function Du(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Ou.call(t, r) && !Iu.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) o.children = n;
  else if (1 < s) {
    for (var a = Array(s), u = 0; u < s; u++) a[u] = arguments[u + 2];
    o.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) o[r] === void 0 && (o[r] = s[r]);
  return {
    $$typeof: Fr,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: es.current,
  };
}
function yf(e, t) {
  return {
    $$typeof: Fr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ts(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Fr;
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
var ta = /\/+/g;
function hi(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Sf("" + e.key)
    : t.toString(36);
}
function so(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (i) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Fr:
          case sf:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (o = o(l)),
      (e = r === "" ? "." + hi(l, 0) : r),
      ea(o)
        ? ((n = ""),
          e != null && (n = e.replace(ta, "$&/") + "/"),
          so(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (ts(o) &&
            (o = yf(
              o,
              n +
                (!o.key || (l && l.key === o.key)
                  ? ""
                  : ("" + o.key).replace(ta, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((l = 0), (r = r === "" ? "." : r + ":"), ea(e)))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var a = r + hi(i, s);
      l += so(i, t, n, a, o);
    }
  else if (((a = vf(e)), typeof a == "function"))
    for (e = a.call(e), s = 0; !(i = e.next()).done; )
      (i = i.value), (a = r + hi(i, s++)), (l += so(i, t, n, a, o));
  else if (i === "object")
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
  return l;
}
function zr(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    so(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function wf(e) {
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
var Se = { current: null },
  ao = { transition: null },
  xf = {
    ReactCurrentDispatcher: Se,
    ReactCurrentBatchConfig: ao,
    ReactCurrentOwner: es,
  };
function Mu() {
  throw Error("act(...) is not supported in production builds of React.");
}
T.Children = {
  map: zr,
  forEach: function (e, t, n) {
    zr(
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
      zr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      zr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ts(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
T.Component = Mn;
T.Fragment = af;
T.Profiler = cf;
T.PureComponent = Zl;
T.StrictMode = uf;
T.Suspense = pf;
T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xf;
T.act = Mu;
T.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Lu({}, e.props),
    o = e.key,
    i = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (l = es.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (a in t)
      Ou.call(t, a) &&
        !Iu.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    s = Array(a);
    for (var u = 0; u < a; u++) s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: Fr, type: e.type, key: o, ref: i, props: r, _owner: l };
};
T.createContext = function (e) {
  return (
    (e = {
      $$typeof: ff,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: df, _context: e }),
    (e.Consumer = e)
  );
};
T.createElement = Du;
T.createFactory = function (e) {
  var t = Du.bind(null, e);
  return (t.type = e), t;
};
T.createRef = function () {
  return { current: null };
};
T.forwardRef = function (e) {
  return { $$typeof: gf, render: e };
};
T.isValidElement = ts;
T.lazy = function (e) {
  return { $$typeof: mf, _payload: { _status: -1, _result: e }, _init: wf };
};
T.memo = function (e, t) {
  return { $$typeof: hf, type: e, compare: t === void 0 ? null : t };
};
T.startTransition = function (e) {
  var t = ao.transition;
  ao.transition = {};
  try {
    e();
  } finally {
    ao.transition = t;
  }
};
T.unstable_act = Mu;
T.useCallback = function (e, t) {
  return Se.current.useCallback(e, t);
};
T.useContext = function (e) {
  return Se.current.useContext(e);
};
T.useDebugValue = function () {};
T.useDeferredValue = function (e) {
  return Se.current.useDeferredValue(e);
};
T.useEffect = function (e, t) {
  return Se.current.useEffect(e, t);
};
T.useId = function () {
  return Se.current.useId();
};
T.useImperativeHandle = function (e, t, n) {
  return Se.current.useImperativeHandle(e, t, n);
};
T.useInsertionEffect = function (e, t) {
  return Se.current.useInsertionEffect(e, t);
};
T.useLayoutEffect = function (e, t) {
  return Se.current.useLayoutEffect(e, t);
};
T.useMemo = function (e, t) {
  return Se.current.useMemo(e, t);
};
T.useReducer = function (e, t, n) {
  return Se.current.useReducer(e, t, n);
};
T.useRef = function (e) {
  return Se.current.useRef(e);
};
T.useState = function (e) {
  return Se.current.useState(e);
};
T.useSyncExternalStore = function (e, t, n) {
  return Se.current.useSyncExternalStore(e, t, n);
};
T.useTransition = function () {
  return Se.current.useTransition();
};
T.version = "18.3.1";
Pu.exports = T;
var P = Pu.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Cf = P,
  Rf = Symbol.for("react.element"),
  kf = Symbol.for("react.fragment"),
  Ef = Object.prototype.hasOwnProperty,
  Nf = Cf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Pf = { key: !0, ref: !0, __self: !0, __source: !0 };
function ju(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
  for (r in t) Ef.call(t, r) && !Pf.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: Rf,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: Nf.current,
  };
}
Jo.Fragment = kf;
Jo.jsx = ju;
Jo.jsxs = ju;
Nu.exports = Jo;
var S = Nu.exports,
  Tu = { exports: {} },
  Fe = {},
  zu = { exports: {} },
  Vu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(R, F) {
    var O = R.length;
    R.push(F);
    e: for (; 0 < O; ) {
      var A = (O - 1) >>> 1,
        X = R[A];
      if (0 < o(X, F)) (R[A] = F), (R[O] = X), (O = A);
      else break e;
    }
  }
  function n(R) {
    return R.length === 0 ? null : R[0];
  }
  function r(R) {
    if (R.length === 0) return null;
    var F = R[0],
      O = R.pop();
    if (O !== F) {
      R[0] = O;
      e: for (var A = 0, X = R.length, nt = X >>> 1; A < nt; ) {
        var rt = 2 * (A + 1) - 1,
          Vn = R[rt],
          Ut = rt + 1,
          Tr = R[Ut];
        if (0 > o(Vn, O))
          Ut < X && 0 > o(Tr, Vn)
            ? ((R[A] = Tr), (R[Ut] = O), (A = Ut))
            : ((R[A] = Vn), (R[rt] = O), (A = rt));
        else if (Ut < X && 0 > o(Tr, O)) (R[A] = Tr), (R[Ut] = O), (A = Ut);
        else break e;
      }
    }
    return F;
  }
  function o(R, F) {
    var O = R.sortIndex - F.sortIndex;
    return O !== 0 ? O : R.id - F.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
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
    c = 1,
    f = null,
    d = 3,
    p = !1,
    v = !1,
    y = !1,
    C = typeof setTimeout == "function" ? setTimeout : null,
    h = typeof clearTimeout == "function" ? clearTimeout : null,
    g = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(R) {
    for (var F = n(u); F !== null; ) {
      if (F.callback === null) r(u);
      else if (F.startTime <= R)
        r(u), (F.sortIndex = F.expirationTime), t(a, F);
      else break;
      F = n(u);
    }
  }
  function w(R) {
    if (((y = !1), m(R), !v))
      if (n(a) !== null) (v = !0), Ye(x);
      else {
        var F = n(u);
        F !== null && vt(w, F.startTime - R);
      }
  }
  function x(R, F) {
    (v = !1), y && ((y = !1), h(L), (L = -1)), (p = !0);
    var O = d;
    try {
      for (
        m(F), f = n(a);
        f !== null && (!(f.expirationTime > F) || (R && !U()));

      ) {
        var A = f.callback;
        if (typeof A == "function") {
          (f.callback = null), (d = f.priorityLevel);
          var X = A(f.expirationTime <= F);
          (F = e.unstable_now()),
            typeof X == "function" ? (f.callback = X) : f === n(a) && r(a),
            m(F);
        } else r(a);
        f = n(a);
      }
      if (f !== null) var nt = !0;
      else {
        var rt = n(u);
        rt !== null && vt(w, rt.startTime - F), (nt = !1);
      }
      return nt;
    } finally {
      (f = null), (d = O), (p = !1);
    }
  }
  var k = !1,
    E = null,
    L = -1,
    V = 5,
    _ = -1;
  function U() {
    return !(e.unstable_now() - _ < V);
  }
  function j() {
    if (E !== null) {
      var R = e.unstable_now();
      _ = R;
      var F = !0;
      try {
        F = E(!0, R);
      } finally {
        F ? B() : ((k = !1), (E = null));
      }
    } else k = !1;
  }
  var B;
  if (typeof g == "function")
    B = function () {
      g(j);
    };
  else if (typeof MessageChannel < "u") {
    var Q = new MessageChannel(),
      Ie = Q.port2;
    (Q.port1.onmessage = j),
      (B = function () {
        Ie.postMessage(null);
      });
  } else
    B = function () {
      C(j, 0);
    };
  function Ye(R) {
    (E = R), k || ((k = !0), B());
  }
  function vt(R, F) {
    L = C(function () {
      R(e.unstable_now());
    }, F);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (R) {
      R.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || p || ((v = !0), Ye(x));
    }),
    (e.unstable_forceFrameRate = function (R) {
      0 > R || 125 < R
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (V = 0 < R ? Math.floor(1e3 / R) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (R) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var F = 3;
          break;
        default:
          F = d;
      }
      var O = d;
      d = F;
      try {
        return R();
      } finally {
        d = O;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (R, F) {
      switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          R = 3;
      }
      var O = d;
      d = R;
      try {
        return F();
      } finally {
        d = O;
      }
    }),
    (e.unstable_scheduleCallback = function (R, F, O) {
      var A = e.unstable_now();
      switch (
        (typeof O == "object" && O !== null
          ? ((O = O.delay), (O = typeof O == "number" && 0 < O ? A + O : A))
          : (O = A),
        R)
      ) {
        case 1:
          var X = -1;
          break;
        case 2:
          X = 250;
          break;
        case 5:
          X = 1073741823;
          break;
        case 4:
          X = 1e4;
          break;
        default:
          X = 5e3;
      }
      return (
        (X = O + X),
        (R = {
          id: c++,
          callback: F,
          priorityLevel: R,
          startTime: O,
          expirationTime: X,
          sortIndex: -1,
        }),
        O > A
          ? ((R.sortIndex = O),
            t(u, R),
            n(a) === null &&
              R === n(u) &&
              (y ? (h(L), (L = -1)) : (y = !0), vt(w, O - A)))
          : ((R.sortIndex = X), t(a, R), v || p || ((v = !0), Ye(x))),
        R
      );
    }),
    (e.unstable_shouldYield = U),
    (e.unstable_wrapCallback = function (R) {
      var F = d;
      return function () {
        var O = d;
        d = F;
        try {
          return R.apply(this, arguments);
        } finally {
          d = O;
        }
      };
    });
})(Vu);
zu.exports = Vu;
var _f = zu.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Lf = P,
  Le = _f;
function N(e) {
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
var Au = new Set(),
  fr = {};
function rn(e, t) {
  _n(e, t), _n(e + "Capture", t);
}
function _n(e, t) {
  for (fr[e] = t, e = 0; e < t.length; e++) Au.add(t[e]);
}
var dt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Ji = Object.prototype.hasOwnProperty,
  $f =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  na = {},
  ra = {};
function Ff(e) {
  return Ji.call(ra, e)
    ? !0
    : Ji.call(na, e)
    ? !1
    : $f.test(e)
    ? (ra[e] = !0)
    : ((na[e] = !0), !1);
}
function Of(e, t, n, r) {
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
function If(e, t, n, r) {
  if (t === null || typeof t > "u" || Of(e, t, n, r)) return !0;
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
function we(e, t, n, r, o, i, l) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = l);
}
var ce = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ce[e] = new we(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ce[t] = new we(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ce[e] = new we(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ce[e] = new we(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ce[e] = new we(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ce[e] = new we(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ce[e] = new we(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ce[e] = new we(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ce[e] = new we(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ns = /[\-:]([a-z])/g;
function rs(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ns, rs);
    ce[t] = new we(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ns, rs);
    ce[t] = new we(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ns, rs);
  ce[t] = new we(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ce[e] = new we(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ce.xlinkHref = new we(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ce[e] = new we(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function os(e, t, n, r) {
  var o = ce.hasOwnProperty(t) ? ce[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (If(t, n, o, r) && (n = null),
    r || o === null
      ? Ff(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var mt = Lf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Vr = Symbol.for("react.element"),
  cn = Symbol.for("react.portal"),
  dn = Symbol.for("react.fragment"),
  is = Symbol.for("react.strict_mode"),
  qi = Symbol.for("react.profiler"),
  Hu = Symbol.for("react.provider"),
  Uu = Symbol.for("react.context"),
  ls = Symbol.for("react.forward_ref"),
  Zi = Symbol.for("react.suspense"),
  bi = Symbol.for("react.suspense_list"),
  ss = Symbol.for("react.memo"),
  St = Symbol.for("react.lazy"),
  Bu = Symbol.for("react.offscreen"),
  oa = Symbol.iterator;
function An(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (oa && e[oa]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Z = Object.assign,
  mi;
function Jn(e) {
  if (mi === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      mi = (t && t[1]) || "";
    }
  return (
    `
` +
    mi +
    e
  );
}
var vi = !1;
function yi(e, t) {
  if (!e || vi) return "";
  vi = !0;
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
          i = r.stack.split(`
`),
          l = o.length - 1,
          s = i.length - 1;
        1 <= l && 0 <= s && o[l] !== i[s];

      )
        s--;
      for (; 1 <= l && 0 <= s; l--, s--)
        if (o[l] !== i[s]) {
          if (l !== 1 || s !== 1)
            do
              if ((l--, s--, 0 > s || o[l] !== i[s])) {
                var a =
                  `
` + o[l].replace(" at new ", " at ");
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
    (vi = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Jn(e) : "";
}
function Df(e) {
  switch (e.tag) {
    case 5:
      return Jn(e.type);
    case 16:
      return Jn("Lazy");
    case 13:
      return Jn("Suspense");
    case 19:
      return Jn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = yi(e.type, !1)), e;
    case 11:
      return (e = yi(e.type.render, !1)), e;
    case 1:
      return (e = yi(e.type, !0)), e;
    default:
      return "";
  }
}
function el(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case dn:
      return "Fragment";
    case cn:
      return "Portal";
    case qi:
      return "Profiler";
    case is:
      return "StrictMode";
    case Zi:
      return "Suspense";
    case bi:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Uu:
        return (e.displayName || "Context") + ".Consumer";
      case Hu:
        return (e._context.displayName || "Context") + ".Provider";
      case ls:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case ss:
        return (
          (t = e.displayName || null), t !== null ? t : el(e.type) || "Memo"
        );
      case St:
        (t = e._payload), (e = e._init);
        try {
          return el(e(t));
        } catch {}
    }
  return null;
}
function Mf(e) {
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
      return el(t);
    case 8:
      return t === is ? "StrictMode" : "Mode";
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
function Mt(e) {
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
function Gu(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function jf(e) {
  var t = Gu(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (l) {
          (r = "" + l), i.call(this, l);
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
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Ar(e) {
  e._valueTracker || (e._valueTracker = jf(e));
}
function Ku(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Gu(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function xo(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function tl(e, t) {
  var n = t.checked;
  return Z({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function ia(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Mt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Wu(e, t) {
  (t = t.checked), t != null && os(e, "checked", t, !1);
}
function nl(e, t) {
  Wu(e, t);
  var n = Mt(t.value),
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
    ? rl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && rl(e, t.type, Mt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function la(e, t, n) {
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
function rl(e, t, n) {
  (t !== "number" || xo(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var qn = Array.isArray;
function Cn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Mt(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function ol(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(N(91));
  return Z({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function sa(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(N(92));
      if (qn(n)) {
        if (1 < n.length) throw Error(N(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Mt(n) };
}
function Qu(e, t) {
  var n = Mt(t.value),
    r = Mt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function aa(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Yu(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function il(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Yu(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Hr,
  Xu = (function (e) {
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
        Hr = Hr || document.createElement("div"),
          Hr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Hr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function gr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var er = {
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
  Tf = ["Webkit", "ms", "Moz", "O"];
Object.keys(er).forEach(function (e) {
  Tf.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (er[t] = er[e]);
  });
});
function Ju(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (er.hasOwnProperty(e) && er[e])
    ? ("" + t).trim()
    : t + "px";
}
function qu(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = Ju(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var zf = Z(
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
function ll(e, t) {
  if (t) {
    if (zf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
function sl(e, t) {
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
var al = null;
function as(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ul = null,
  Rn = null,
  kn = null;
function ua(e) {
  if ((e = Dr(e))) {
    if (typeof ul != "function") throw Error(N(280));
    var t = e.stateNode;
    t && ((t = ti(t)), ul(e.stateNode, e.type, t));
  }
}
function Zu(e) {
  Rn ? (kn ? kn.push(e) : (kn = [e])) : (Rn = e);
}
function bu() {
  if (Rn) {
    var e = Rn,
      t = kn;
    if (((kn = Rn = null), ua(e), t)) for (e = 0; e < t.length; e++) ua(t[e]);
  }
}
function ec(e, t) {
  return e(t);
}
function tc() {}
var Si = !1;
function nc(e, t, n) {
  if (Si) return e(t, n);
  Si = !0;
  try {
    return ec(e, t, n);
  } finally {
    (Si = !1), (Rn !== null || kn !== null) && (tc(), bu());
  }
}
function pr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ti(n);
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
  if (n && typeof n != "function") throw Error(N(231, t, typeof n));
  return n;
}
var cl = !1;
if (dt)
  try {
    var Hn = {};
    Object.defineProperty(Hn, "passive", {
      get: function () {
        cl = !0;
      },
    }),
      window.addEventListener("test", Hn, Hn),
      window.removeEventListener("test", Hn, Hn);
  } catch {
    cl = !1;
  }
function Vf(e, t, n, r, o, i, l, s, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var tr = !1,
  Co = null,
  Ro = !1,
  dl = null,
  Af = {
    onError: function (e) {
      (tr = !0), (Co = e);
    },
  };
function Hf(e, t, n, r, o, i, l, s, a) {
  (tr = !1), (Co = null), Vf.apply(Af, arguments);
}
function Uf(e, t, n, r, o, i, l, s, a) {
  if ((Hf.apply(this, arguments), tr)) {
    if (tr) {
      var u = Co;
      (tr = !1), (Co = null);
    } else throw Error(N(198));
    Ro || ((Ro = !0), (dl = u));
  }
}
function on(e) {
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
function rc(e) {
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
function ca(e) {
  if (on(e) !== e) throw Error(N(188));
}
function Bf(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = on(e)), t === null)) throw Error(N(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return ca(o), e;
        if (i === r) return ca(o), t;
        i = i.sibling;
      }
      throw Error(N(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var l = !1, s = o.child; s; ) {
        if (s === n) {
          (l = !0), (n = o), (r = i);
          break;
        }
        if (s === r) {
          (l = !0), (r = o), (n = i);
          break;
        }
        s = s.sibling;
      }
      if (!l) {
        for (s = i.child; s; ) {
          if (s === n) {
            (l = !0), (n = i), (r = o);
            break;
          }
          if (s === r) {
            (l = !0), (r = i), (n = o);
            break;
          }
          s = s.sibling;
        }
        if (!l) throw Error(N(189));
      }
    }
    if (n.alternate !== r) throw Error(N(190));
  }
  if (n.tag !== 3) throw Error(N(188));
  return n.stateNode.current === n ? e : t;
}
function oc(e) {
  return (e = Bf(e)), e !== null ? ic(e) : null;
}
function ic(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = ic(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var lc = Le.unstable_scheduleCallback,
  da = Le.unstable_cancelCallback,
  Gf = Le.unstable_shouldYield,
  Kf = Le.unstable_requestPaint,
  te = Le.unstable_now,
  Wf = Le.unstable_getCurrentPriorityLevel,
  us = Le.unstable_ImmediatePriority,
  sc = Le.unstable_UserBlockingPriority,
  ko = Le.unstable_NormalPriority,
  Qf = Le.unstable_LowPriority,
  ac = Le.unstable_IdlePriority,
  qo = null,
  be = null;
function Yf(e) {
  if (be && typeof be.onCommitFiberRoot == "function")
    try {
      be.onCommitFiberRoot(qo, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ge = Math.clz32 ? Math.clz32 : qf,
  Xf = Math.log,
  Jf = Math.LN2;
function qf(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Xf(e) / Jf) | 0)) | 0;
}
var Ur = 64,
  Br = 4194304;
function Zn(e) {
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
function Eo(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var s = l & ~o;
    s !== 0 ? (r = Zn(s)) : ((i &= l), i !== 0 && (r = Zn(i)));
  } else (l = n & ~o), l !== 0 ? (r = Zn(l)) : i !== 0 && (r = Zn(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Ge(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function Zf(e, t) {
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
function bf(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var l = 31 - Ge(i),
      s = 1 << l,
      a = o[l];
    a === -1
      ? (!(s & n) || s & r) && (o[l] = Zf(s, t))
      : a <= t && (e.expiredLanes |= s),
      (i &= ~s);
  }
}
function fl(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function uc() {
  var e = Ur;
  return (Ur <<= 1), !(Ur & 4194240) && (Ur = 64), e;
}
function wi(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Or(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ge(t)),
    (e[t] = n);
}
function eg(e, t) {
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
    var o = 31 - Ge(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function cs(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ge(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var H = 0;
function cc(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var dc,
  ds,
  fc,
  gc,
  pc,
  gl = !1,
  Gr = [],
  Pt = null,
  _t = null,
  Lt = null,
  hr = new Map(),
  mr = new Map(),
  xt = [],
  tg =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function fa(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Pt = null;
      break;
    case "dragenter":
    case "dragleave":
      _t = null;
      break;
    case "mouseover":
    case "mouseout":
      Lt = null;
      break;
    case "pointerover":
    case "pointerout":
      hr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      mr.delete(t.pointerId);
  }
}
function Un(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = Dr(t)), t !== null && ds(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function ng(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (Pt = Un(Pt, e, t, n, r, o)), !0;
    case "dragenter":
      return (_t = Un(_t, e, t, n, r, o)), !0;
    case "mouseover":
      return (Lt = Un(Lt, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return hr.set(i, Un(hr.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), mr.set(i, Un(mr.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function hc(e) {
  var t = Kt(e.target);
  if (t !== null) {
    var n = on(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = rc(n)), t !== null)) {
          (e.blockedOn = t),
            pc(e.priority, function () {
              fc(n);
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
function uo(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = pl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (al = r), n.target.dispatchEvent(r), (al = null);
    } else return (t = Dr(n)), t !== null && ds(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function ga(e, t, n) {
  uo(e) && n.delete(t);
}
function rg() {
  (gl = !1),
    Pt !== null && uo(Pt) && (Pt = null),
    _t !== null && uo(_t) && (_t = null),
    Lt !== null && uo(Lt) && (Lt = null),
    hr.forEach(ga),
    mr.forEach(ga);
}
function Bn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    gl ||
      ((gl = !0),
      Le.unstable_scheduleCallback(Le.unstable_NormalPriority, rg)));
}
function vr(e) {
  function t(o) {
    return Bn(o, e);
  }
  if (0 < Gr.length) {
    Bn(Gr[0], e);
    for (var n = 1; n < Gr.length; n++) {
      var r = Gr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Pt !== null && Bn(Pt, e),
      _t !== null && Bn(_t, e),
      Lt !== null && Bn(Lt, e),
      hr.forEach(t),
      mr.forEach(t),
      n = 0;
    n < xt.length;
    n++
  )
    (r = xt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < xt.length && ((n = xt[0]), n.blockedOn === null); )
    hc(n), n.blockedOn === null && xt.shift();
}
var En = mt.ReactCurrentBatchConfig,
  No = !0;
function og(e, t, n, r) {
  var o = H,
    i = En.transition;
  En.transition = null;
  try {
    (H = 1), fs(e, t, n, r);
  } finally {
    (H = o), (En.transition = i);
  }
}
function ig(e, t, n, r) {
  var o = H,
    i = En.transition;
  En.transition = null;
  try {
    (H = 4), fs(e, t, n, r);
  } finally {
    (H = o), (En.transition = i);
  }
}
function fs(e, t, n, r) {
  if (No) {
    var o = pl(e, t, n, r);
    if (o === null) $i(e, t, r, Po, n), fa(e, r);
    else if (ng(o, e, t, n, r)) r.stopPropagation();
    else if ((fa(e, r), t & 4 && -1 < tg.indexOf(e))) {
      for (; o !== null; ) {
        var i = Dr(o);
        if (
          (i !== null && dc(i),
          (i = pl(e, t, n, r)),
          i === null && $i(e, t, r, Po, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else $i(e, t, r, null, n);
  }
}
var Po = null;
function pl(e, t, n, r) {
  if (((Po = null), (e = as(r)), (e = Kt(e)), e !== null))
    if (((t = on(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = rc(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Po = e), null;
}
function mc(e) {
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
      switch (Wf()) {
        case us:
          return 1;
        case sc:
          return 4;
        case ko:
        case Qf:
          return 16;
        case ac:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var kt = null,
  gs = null,
  co = null;
function vc() {
  if (co) return co;
  var e,
    t = gs,
    n = t.length,
    r,
    o = "value" in kt ? kt.value : kt.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++);
  return (co = o.slice(e, 1 < r ? 1 - r : void 0));
}
function fo(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Kr() {
  return !0;
}
function pa() {
  return !1;
}
function Oe(e) {
  function t(n, r, o, i, l) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = l),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(i) : i[s]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Kr
        : pa),
      (this.isPropagationStopped = pa),
      this
    );
  }
  return (
    Z(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Kr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Kr));
      },
      persist: function () {},
      isPersistent: Kr,
    }),
    t
  );
}
var jn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ps = Oe(jn),
  Ir = Z({}, jn, { view: 0, detail: 0 }),
  lg = Oe(Ir),
  xi,
  Ci,
  Gn,
  Zo = Z({}, Ir, {
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
    getModifierState: hs,
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
        : (e !== Gn &&
            (Gn && e.type === "mousemove"
              ? ((xi = e.screenX - Gn.screenX), (Ci = e.screenY - Gn.screenY))
              : (Ci = xi = 0),
            (Gn = e)),
          xi);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Ci;
    },
  }),
  ha = Oe(Zo),
  sg = Z({}, Zo, { dataTransfer: 0 }),
  ag = Oe(sg),
  ug = Z({}, Ir, { relatedTarget: 0 }),
  Ri = Oe(ug),
  cg = Z({}, jn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  dg = Oe(cg),
  fg = Z({}, jn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  gg = Oe(fg),
  pg = Z({}, jn, { data: 0 }),
  ma = Oe(pg),
  hg = {
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
  mg = {
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
  vg = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function yg(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = vg[e]) ? !!t[e] : !1;
}
function hs() {
  return yg;
}
var Sg = Z({}, Ir, {
    key: function (e) {
      if (e.key) {
        var t = hg[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = fo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? mg[e.keyCode] || "Unidentified"
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
    getModifierState: hs,
    charCode: function (e) {
      return e.type === "keypress" ? fo(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? fo(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  wg = Oe(Sg),
  xg = Z({}, Zo, {
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
  va = Oe(xg),
  Cg = Z({}, Ir, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: hs,
  }),
  Rg = Oe(Cg),
  kg = Z({}, jn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Eg = Oe(kg),
  Ng = Z({}, Zo, {
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
  Pg = Oe(Ng),
  _g = [9, 13, 27, 32],
  ms = dt && "CompositionEvent" in window,
  nr = null;
dt && "documentMode" in document && (nr = document.documentMode);
var Lg = dt && "TextEvent" in window && !nr,
  yc = dt && (!ms || (nr && 8 < nr && 11 >= nr)),
  ya = " ",
  Sa = !1;
function Sc(e, t) {
  switch (e) {
    case "keyup":
      return _g.indexOf(t.keyCode) !== -1;
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
function wc(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var fn = !1;
function $g(e, t) {
  switch (e) {
    case "compositionend":
      return wc(t);
    case "keypress":
      return t.which !== 32 ? null : ((Sa = !0), ya);
    case "textInput":
      return (e = t.data), e === ya && Sa ? null : e;
    default:
      return null;
  }
}
function Fg(e, t) {
  if (fn)
    return e === "compositionend" || (!ms && Sc(e, t))
      ? ((e = vc()), (co = gs = kt = null), (fn = !1), e)
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
      return yc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Og = {
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
function wa(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Og[e.type] : t === "textarea";
}
function xc(e, t, n, r) {
  Zu(r),
    (t = _o(t, "onChange")),
    0 < t.length &&
      ((n = new ps("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var rr = null,
  yr = null;
function Ig(e) {
  Oc(e, 0);
}
function bo(e) {
  var t = hn(e);
  if (Ku(t)) return e;
}
function Dg(e, t) {
  if (e === "change") return t;
}
var Cc = !1;
if (dt) {
  var ki;
  if (dt) {
    var Ei = "oninput" in document;
    if (!Ei) {
      var xa = document.createElement("div");
      xa.setAttribute("oninput", "return;"),
        (Ei = typeof xa.oninput == "function");
    }
    ki = Ei;
  } else ki = !1;
  Cc = ki && (!document.documentMode || 9 < document.documentMode);
}
function Ca() {
  rr && (rr.detachEvent("onpropertychange", Rc), (yr = rr = null));
}
function Rc(e) {
  if (e.propertyName === "value" && bo(yr)) {
    var t = [];
    xc(t, yr, e, as(e)), nc(Ig, t);
  }
}
function Mg(e, t, n) {
  e === "focusin"
    ? (Ca(), (rr = t), (yr = n), rr.attachEvent("onpropertychange", Rc))
    : e === "focusout" && Ca();
}
function jg(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return bo(yr);
}
function Tg(e, t) {
  if (e === "click") return bo(t);
}
function zg(e, t) {
  if (e === "input" || e === "change") return bo(t);
}
function Vg(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Qe = typeof Object.is == "function" ? Object.is : Vg;
function Sr(e, t) {
  if (Qe(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Ji.call(t, o) || !Qe(e[o], t[o])) return !1;
  }
  return !0;
}
function Ra(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ka(e, t) {
  var n = Ra(e);
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
    n = Ra(n);
  }
}
function kc(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? kc(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Ec() {
  for (var e = window, t = xo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = xo(e.document);
  }
  return t;
}
function vs(e) {
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
function Ag(e) {
  var t = Ec(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    kc(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && vs(n)) {
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
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = ka(n, i));
        var l = ka(n, r);
        o &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(l.node, l.offset))
            : (t.setEnd(l.node, l.offset), e.addRange(t)));
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
var Hg = dt && "documentMode" in document && 11 >= document.documentMode,
  gn = null,
  hl = null,
  or = null,
  ml = !1;
function Ea(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ml ||
    gn == null ||
    gn !== xo(r) ||
    ((r = gn),
    "selectionStart" in r && vs(r)
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
    (or && Sr(or, r)) ||
      ((or = r),
      (r = _o(hl, "onSelect")),
      0 < r.length &&
        ((t = new ps("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = gn))));
}
function Wr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var pn = {
    animationend: Wr("Animation", "AnimationEnd"),
    animationiteration: Wr("Animation", "AnimationIteration"),
    animationstart: Wr("Animation", "AnimationStart"),
    transitionend: Wr("Transition", "TransitionEnd"),
  },
  Ni = {},
  Nc = {};
dt &&
  ((Nc = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete pn.animationend.animation,
    delete pn.animationiteration.animation,
    delete pn.animationstart.animation),
  "TransitionEvent" in window || delete pn.transitionend.transition);
function ei(e) {
  if (Ni[e]) return Ni[e];
  if (!pn[e]) return e;
  var t = pn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Nc) return (Ni[e] = t[n]);
  return e;
}
var Pc = ei("animationend"),
  _c = ei("animationiteration"),
  Lc = ei("animationstart"),
  $c = ei("transitionend"),
  Fc = new Map(),
  Na =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function zt(e, t) {
  Fc.set(e, t), rn(t, [e]);
}
for (var Pi = 0; Pi < Na.length; Pi++) {
  var _i = Na[Pi],
    Ug = _i.toLowerCase(),
    Bg = _i[0].toUpperCase() + _i.slice(1);
  zt(Ug, "on" + Bg);
}
zt(Pc, "onAnimationEnd");
zt(_c, "onAnimationIteration");
zt(Lc, "onAnimationStart");
zt("dblclick", "onDoubleClick");
zt("focusin", "onFocus");
zt("focusout", "onBlur");
zt($c, "onTransitionEnd");
_n("onMouseEnter", ["mouseout", "mouseover"]);
_n("onMouseLeave", ["mouseout", "mouseover"]);
_n("onPointerEnter", ["pointerout", "pointerover"]);
_n("onPointerLeave", ["pointerout", "pointerover"]);
rn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
rn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
rn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
rn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
rn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
rn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var bn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Gg = new Set("cancel close invalid load scroll toggle".split(" ").concat(bn));
function Pa(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Uf(r, t, void 0, e), (e.currentTarget = null);
}
function Oc(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var s = r[l],
            a = s.instance,
            u = s.currentTarget;
          if (((s = s.listener), a !== i && o.isPropagationStopped())) break e;
          Pa(o, s, u), (i = a);
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((s = r[l]),
            (a = s.instance),
            (u = s.currentTarget),
            (s = s.listener),
            a !== i && o.isPropagationStopped())
          )
            break e;
          Pa(o, s, u), (i = a);
        }
    }
  }
  if (Ro) throw ((e = dl), (Ro = !1), (dl = null), e);
}
function K(e, t) {
  var n = t[xl];
  n === void 0 && (n = t[xl] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Ic(t, e, 2, !1), n.add(r));
}
function Li(e, t, n) {
  var r = 0;
  t && (r |= 4), Ic(n, e, r, t);
}
var Qr = "_reactListening" + Math.random().toString(36).slice(2);
function wr(e) {
  if (!e[Qr]) {
    (e[Qr] = !0),
      Au.forEach(function (n) {
        n !== "selectionchange" && (Gg.has(n) || Li(n, !1, e), Li(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Qr] || ((t[Qr] = !0), Li("selectionchange", !1, t));
  }
}
function Ic(e, t, n, r) {
  switch (mc(t)) {
    case 1:
      var o = og;
      break;
    case 4:
      o = ig;
      break;
    default:
      o = fs;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !cl ||
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
function $i(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var s = r.stateNode.containerInfo;
        if (s === o || (s.nodeType === 8 && s.parentNode === o)) break;
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var a = l.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = l.stateNode.containerInfo),
              a === o || (a.nodeType === 8 && a.parentNode === o))
            )
              return;
            l = l.return;
          }
        for (; s !== null; ) {
          if (((l = Kt(s)), l === null)) return;
          if (((a = l.tag), a === 5 || a === 6)) {
            r = i = l;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  nc(function () {
    var u = i,
      c = as(n),
      f = [];
    e: {
      var d = Fc.get(e);
      if (d !== void 0) {
        var p = ps,
          v = e;
        switch (e) {
          case "keypress":
            if (fo(n) === 0) break e;
          case "keydown":
          case "keyup":
            p = wg;
            break;
          case "focusin":
            (v = "focus"), (p = Ri);
            break;
          case "focusout":
            (v = "blur"), (p = Ri);
            break;
          case "beforeblur":
          case "afterblur":
            p = Ri;
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
            p = ha;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            p = ag;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            p = Rg;
            break;
          case Pc:
          case _c:
          case Lc:
            p = dg;
            break;
          case $c:
            p = Eg;
            break;
          case "scroll":
            p = lg;
            break;
          case "wheel":
            p = Pg;
            break;
          case "copy":
          case "cut":
          case "paste":
            p = gg;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            p = va;
        }
        var y = (t & 4) !== 0,
          C = !y && e === "scroll",
          h = y ? (d !== null ? d + "Capture" : null) : d;
        y = [];
        for (var g = u, m; g !== null; ) {
          m = g;
          var w = m.stateNode;
          if (
            (m.tag === 5 &&
              w !== null &&
              ((m = w),
              h !== null && ((w = pr(g, h)), w != null && y.push(xr(g, w, m)))),
            C)
          )
            break;
          g = g.return;
        }
        0 < y.length &&
          ((d = new p(d, v, null, n, c)), f.push({ event: d, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (p = e === "mouseout" || e === "pointerout"),
          d &&
            n !== al &&
            (v = n.relatedTarget || n.fromElement) &&
            (Kt(v) || v[ft]))
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
            ? ((v = n.relatedTarget || n.toElement),
              (p = u),
              (v = v ? Kt(v) : null),
              v !== null &&
                ((C = on(v)), v !== C || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((p = null), (v = u)),
          p !== v)
        ) {
          if (
            ((y = ha),
            (w = "onMouseLeave"),
            (h = "onMouseEnter"),
            (g = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = va),
              (w = "onPointerLeave"),
              (h = "onPointerEnter"),
              (g = "pointer")),
            (C = p == null ? d : hn(p)),
            (m = v == null ? d : hn(v)),
            (d = new y(w, g + "leave", p, n, c)),
            (d.target = C),
            (d.relatedTarget = m),
            (w = null),
            Kt(c) === u &&
              ((y = new y(h, g + "enter", v, n, c)),
              (y.target = m),
              (y.relatedTarget = C),
              (w = y)),
            (C = w),
            p && v)
          )
            t: {
              for (y = p, h = v, g = 0, m = y; m; m = sn(m)) g++;
              for (m = 0, w = h; w; w = sn(w)) m++;
              for (; 0 < g - m; ) (y = sn(y)), g--;
              for (; 0 < m - g; ) (h = sn(h)), m--;
              for (; g--; ) {
                if (y === h || (h !== null && y === h.alternate)) break t;
                (y = sn(y)), (h = sn(h));
              }
              y = null;
            }
          else y = null;
          p !== null && _a(f, d, p, y, !1),
            v !== null && C !== null && _a(f, C, v, y, !0);
        }
      }
      e: {
        if (
          ((d = u ? hn(u) : window),
          (p = d.nodeName && d.nodeName.toLowerCase()),
          p === "select" || (p === "input" && d.type === "file"))
        )
          var x = Dg;
        else if (wa(d))
          if (Cc) x = zg;
          else {
            x = jg;
            var k = Mg;
          }
        else
          (p = d.nodeName) &&
            p.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (x = Tg);
        if (x && (x = x(e, u))) {
          xc(f, x, n, c);
          break e;
        }
        k && k(e, d, u),
          e === "focusout" &&
            (k = d._wrapperState) &&
            k.controlled &&
            d.type === "number" &&
            rl(d, "number", d.value);
      }
      switch (((k = u ? hn(u) : window), e)) {
        case "focusin":
          (wa(k) || k.contentEditable === "true") &&
            ((gn = k), (hl = u), (or = null));
          break;
        case "focusout":
          or = hl = gn = null;
          break;
        case "mousedown":
          ml = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (ml = !1), Ea(f, n, c);
          break;
        case "selectionchange":
          if (Hg) break;
        case "keydown":
        case "keyup":
          Ea(f, n, c);
      }
      var E;
      if (ms)
        e: {
          switch (e) {
            case "compositionstart":
              var L = "onCompositionStart";
              break e;
            case "compositionend":
              L = "onCompositionEnd";
              break e;
            case "compositionupdate":
              L = "onCompositionUpdate";
              break e;
          }
          L = void 0;
        }
      else
        fn
          ? Sc(e, n) && (L = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (L = "onCompositionStart");
      L &&
        (yc &&
          n.locale !== "ko" &&
          (fn || L !== "onCompositionStart"
            ? L === "onCompositionEnd" && fn && (E = vc())
            : ((kt = c),
              (gs = "value" in kt ? kt.value : kt.textContent),
              (fn = !0))),
        (k = _o(u, L)),
        0 < k.length &&
          ((L = new ma(L, e, null, n, c)),
          f.push({ event: L, listeners: k }),
          E ? (L.data = E) : ((E = wc(n)), E !== null && (L.data = E)))),
        (E = Lg ? $g(e, n) : Fg(e, n)) &&
          ((u = _o(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new ma("onBeforeInput", "beforeinput", null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = E)));
    }
    Oc(f, t);
  });
}
function xr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function _o(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = pr(e, n)),
      i != null && r.unshift(xr(e, i, o)),
      (i = pr(e, t)),
      i != null && r.push(xr(e, i, o))),
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
function _a(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var s = n,
      a = s.alternate,
      u = s.stateNode;
    if (a !== null && a === r) break;
    s.tag === 5 &&
      u !== null &&
      ((s = u),
      o
        ? ((a = pr(n, i)), a != null && l.unshift(xr(n, a, s)))
        : o || ((a = pr(n, i)), a != null && l.push(xr(n, a, s)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var Kg = /\r\n?/g,
  Wg = /\u0000|\uFFFD/g;
function La(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Kg,
      `
`
    )
    .replace(Wg, "");
}
function Yr(e, t, n) {
  if (((t = La(t)), La(e) !== t && n)) throw Error(N(425));
}
function Lo() {}
var vl = null,
  yl = null;
function Sl(e, t) {
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
var wl = typeof setTimeout == "function" ? setTimeout : void 0,
  Qg = typeof clearTimeout == "function" ? clearTimeout : void 0,
  $a = typeof Promise == "function" ? Promise : void 0,
  Yg =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof $a < "u"
      ? function (e) {
          return $a.resolve(null).then(e).catch(Xg);
        }
      : wl;
function Xg(e) {
  setTimeout(function () {
    throw e;
  });
}
function Fi(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), vr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  vr(t);
}
function $t(e) {
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
function Fa(e) {
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
var Tn = Math.random().toString(36).slice(2),
  qe = "__reactFiber$" + Tn,
  Cr = "__reactProps$" + Tn,
  ft = "__reactContainer$" + Tn,
  xl = "__reactEvents$" + Tn,
  Jg = "__reactListeners$" + Tn,
  qg = "__reactHandles$" + Tn;
function Kt(e) {
  var t = e[qe];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[ft] || n[qe])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Fa(e); e !== null; ) {
          if ((n = e[qe])) return n;
          e = Fa(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Dr(e) {
  return (
    (e = e[qe] || e[ft]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function hn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(N(33));
}
function ti(e) {
  return e[Cr] || null;
}
var Cl = [],
  mn = -1;
function Vt(e) {
  return { current: e };
}
function W(e) {
  0 > mn || ((e.current = Cl[mn]), (Cl[mn] = null), mn--);
}
function G(e, t) {
  mn++, (Cl[mn] = e.current), (e.current = t);
}
var jt = {},
  he = Vt(jt),
  Re = Vt(!1),
  Zt = jt;
function Ln(e, t) {
  var n = e.type.contextTypes;
  if (!n) return jt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function ke(e) {
  return (e = e.childContextTypes), e != null;
}
function $o() {
  W(Re), W(he);
}
function Oa(e, t, n) {
  if (he.current !== jt) throw Error(N(168));
  G(he, t), G(Re, n);
}
function Dc(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(N(108, Mf(e) || "Unknown", o));
  return Z({}, n, r);
}
function Fo(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || jt),
    (Zt = he.current),
    G(he, e),
    G(Re, Re.current),
    !0
  );
}
function Ia(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(N(169));
  n
    ? ((e = Dc(e, t, Zt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      W(Re),
      W(he),
      G(he, e))
    : W(Re),
    G(Re, n);
}
var st = null,
  ni = !1,
  Oi = !1;
function Mc(e) {
  st === null ? (st = [e]) : st.push(e);
}
function Zg(e) {
  (ni = !0), Mc(e);
}
function At() {
  if (!Oi && st !== null) {
    Oi = !0;
    var e = 0,
      t = H;
    try {
      var n = st;
      for (H = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (st = null), (ni = !1);
    } catch (o) {
      throw (st !== null && (st = st.slice(e + 1)), lc(us, At), o);
    } finally {
      (H = t), (Oi = !1);
    }
  }
  return null;
}
var vn = [],
  yn = 0,
  Oo = null,
  Io = 0,
  De = [],
  Me = 0,
  bt = null,
  at = 1,
  ut = "";
function Bt(e, t) {
  (vn[yn++] = Io), (vn[yn++] = Oo), (Oo = e), (Io = t);
}
function jc(e, t, n) {
  (De[Me++] = at), (De[Me++] = ut), (De[Me++] = bt), (bt = e);
  var r = at;
  e = ut;
  var o = 32 - Ge(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - Ge(t) + o;
  if (30 < i) {
    var l = o - (o % 5);
    (i = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (o -= l),
      (at = (1 << (32 - Ge(t) + o)) | (n << o) | r),
      (ut = i + e);
  } else (at = (1 << i) | (n << o) | r), (ut = e);
}
function ys(e) {
  e.return !== null && (Bt(e, 1), jc(e, 1, 0));
}
function Ss(e) {
  for (; e === Oo; )
    (Oo = vn[--yn]), (vn[yn] = null), (Io = vn[--yn]), (vn[yn] = null);
  for (; e === bt; )
    (bt = De[--Me]),
      (De[Me] = null),
      (ut = De[--Me]),
      (De[Me] = null),
      (at = De[--Me]),
      (De[Me] = null);
}
var _e = null,
  Pe = null,
  Y = !1,
  Be = null;
function Tc(e, t) {
  var n = je(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Da(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (_e = e), (Pe = $t(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (_e = e), (Pe = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = bt !== null ? { id: at, overflow: ut } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = je(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (_e = e),
            (Pe = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Rl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function kl(e) {
  if (Y) {
    var t = Pe;
    if (t) {
      var n = t;
      if (!Da(e, t)) {
        if (Rl(e)) throw Error(N(418));
        t = $t(n.nextSibling);
        var r = _e;
        t && Da(e, t)
          ? Tc(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Y = !1), (_e = e));
      }
    } else {
      if (Rl(e)) throw Error(N(418));
      (e.flags = (e.flags & -4097) | 2), (Y = !1), (_e = e);
    }
  }
}
function Ma(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  _e = e;
}
function Xr(e) {
  if (e !== _e) return !1;
  if (!Y) return Ma(e), (Y = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Sl(e.type, e.memoizedProps))),
    t && (t = Pe))
  ) {
    if (Rl(e)) throw (zc(), Error(N(418)));
    for (; t; ) Tc(e, t), (t = $t(t.nextSibling));
  }
  if ((Ma(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(N(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Pe = $t(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Pe = null;
    }
  } else Pe = _e ? $t(e.stateNode.nextSibling) : null;
  return !0;
}
function zc() {
  for (var e = Pe; e; ) e = $t(e.nextSibling);
}
function $n() {
  (Pe = _e = null), (Y = !1);
}
function ws(e) {
  Be === null ? (Be = [e]) : Be.push(e);
}
var bg = mt.ReactCurrentBatchConfig;
function Kn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(N(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(N(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (l) {
            var s = o.refs;
            l === null ? delete s[i] : (s[i] = l);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(N(284));
    if (!n._owner) throw Error(N(290, e));
  }
  return e;
}
function Jr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      N(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function ja(e) {
  var t = e._init;
  return t(e._payload);
}
function Vc(e) {
  function t(h, g) {
    if (e) {
      var m = h.deletions;
      m === null ? ((h.deletions = [g]), (h.flags |= 16)) : m.push(g);
    }
  }
  function n(h, g) {
    if (!e) return null;
    for (; g !== null; ) t(h, g), (g = g.sibling);
    return null;
  }
  function r(h, g) {
    for (h = new Map(); g !== null; )
      g.key !== null ? h.set(g.key, g) : h.set(g.index, g), (g = g.sibling);
    return h;
  }
  function o(h, g) {
    return (h = Dt(h, g)), (h.index = 0), (h.sibling = null), h;
  }
  function i(h, g, m) {
    return (
      (h.index = m),
      e
        ? ((m = h.alternate),
          m !== null
            ? ((m = m.index), m < g ? ((h.flags |= 2), g) : m)
            : ((h.flags |= 2), g))
        : ((h.flags |= 1048576), g)
    );
  }
  function l(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function s(h, g, m, w) {
    return g === null || g.tag !== 6
      ? ((g = Vi(m, h.mode, w)), (g.return = h), g)
      : ((g = o(g, m)), (g.return = h), g);
  }
  function a(h, g, m, w) {
    var x = m.type;
    return x === dn
      ? c(h, g, m.props.children, w, m.key)
      : g !== null &&
        (g.elementType === x ||
          (typeof x == "object" &&
            x !== null &&
            x.$$typeof === St &&
            ja(x) === g.type))
      ? ((w = o(g, m.props)), (w.ref = Kn(h, g, m)), (w.return = h), w)
      : ((w = So(m.type, m.key, m.props, null, h.mode, w)),
        (w.ref = Kn(h, g, m)),
        (w.return = h),
        w);
  }
  function u(h, g, m, w) {
    return g === null ||
      g.tag !== 4 ||
      g.stateNode.containerInfo !== m.containerInfo ||
      g.stateNode.implementation !== m.implementation
      ? ((g = Ai(m, h.mode, w)), (g.return = h), g)
      : ((g = o(g, m.children || [])), (g.return = h), g);
  }
  function c(h, g, m, w, x) {
    return g === null || g.tag !== 7
      ? ((g = Jt(m, h.mode, w, x)), (g.return = h), g)
      : ((g = o(g, m)), (g.return = h), g);
  }
  function f(h, g, m) {
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return (g = Vi("" + g, h.mode, m)), (g.return = h), g;
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Vr:
          return (
            (m = So(g.type, g.key, g.props, null, h.mode, m)),
            (m.ref = Kn(h, null, g)),
            (m.return = h),
            m
          );
        case cn:
          return (g = Ai(g, h.mode, m)), (g.return = h), g;
        case St:
          var w = g._init;
          return f(h, w(g._payload), m);
      }
      if (qn(g) || An(g))
        return (g = Jt(g, h.mode, m, null)), (g.return = h), g;
      Jr(h, g);
    }
    return null;
  }
  function d(h, g, m, w) {
    var x = g !== null ? g.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return x !== null ? null : s(h, g, "" + m, w);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Vr:
          return m.key === x ? a(h, g, m, w) : null;
        case cn:
          return m.key === x ? u(h, g, m, w) : null;
        case St:
          return (x = m._init), d(h, g, x(m._payload), w);
      }
      if (qn(m) || An(m)) return x !== null ? null : c(h, g, m, w, null);
      Jr(h, m);
    }
    return null;
  }
  function p(h, g, m, w, x) {
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return (h = h.get(m) || null), s(g, h, "" + w, x);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Vr:
          return (h = h.get(w.key === null ? m : w.key) || null), a(g, h, w, x);
        case cn:
          return (h = h.get(w.key === null ? m : w.key) || null), u(g, h, w, x);
        case St:
          var k = w._init;
          return p(h, g, m, k(w._payload), x);
      }
      if (qn(w) || An(w)) return (h = h.get(m) || null), c(g, h, w, x, null);
      Jr(g, w);
    }
    return null;
  }
  function v(h, g, m, w) {
    for (
      var x = null, k = null, E = g, L = (g = 0), V = null;
      E !== null && L < m.length;
      L++
    ) {
      E.index > L ? ((V = E), (E = null)) : (V = E.sibling);
      var _ = d(h, E, m[L], w);
      if (_ === null) {
        E === null && (E = V);
        break;
      }
      e && E && _.alternate === null && t(h, E),
        (g = i(_, g, L)),
        k === null ? (x = _) : (k.sibling = _),
        (k = _),
        (E = V);
    }
    if (L === m.length) return n(h, E), Y && Bt(h, L), x;
    if (E === null) {
      for (; L < m.length; L++)
        (E = f(h, m[L], w)),
          E !== null &&
            ((g = i(E, g, L)), k === null ? (x = E) : (k.sibling = E), (k = E));
      return Y && Bt(h, L), x;
    }
    for (E = r(h, E); L < m.length; L++)
      (V = p(E, h, L, m[L], w)),
        V !== null &&
          (e && V.alternate !== null && E.delete(V.key === null ? L : V.key),
          (g = i(V, g, L)),
          k === null ? (x = V) : (k.sibling = V),
          (k = V));
    return (
      e &&
        E.forEach(function (U) {
          return t(h, U);
        }),
      Y && Bt(h, L),
      x
    );
  }
  function y(h, g, m, w) {
    var x = An(m);
    if (typeof x != "function") throw Error(N(150));
    if (((m = x.call(m)), m == null)) throw Error(N(151));
    for (
      var k = (x = null), E = g, L = (g = 0), V = null, _ = m.next();
      E !== null && !_.done;
      L++, _ = m.next()
    ) {
      E.index > L ? ((V = E), (E = null)) : (V = E.sibling);
      var U = d(h, E, _.value, w);
      if (U === null) {
        E === null && (E = V);
        break;
      }
      e && E && U.alternate === null && t(h, E),
        (g = i(U, g, L)),
        k === null ? (x = U) : (k.sibling = U),
        (k = U),
        (E = V);
    }
    if (_.done) return n(h, E), Y && Bt(h, L), x;
    if (E === null) {
      for (; !_.done; L++, _ = m.next())
        (_ = f(h, _.value, w)),
          _ !== null &&
            ((g = i(_, g, L)), k === null ? (x = _) : (k.sibling = _), (k = _));
      return Y && Bt(h, L), x;
    }
    for (E = r(h, E); !_.done; L++, _ = m.next())
      (_ = p(E, h, L, _.value, w)),
        _ !== null &&
          (e && _.alternate !== null && E.delete(_.key === null ? L : _.key),
          (g = i(_, g, L)),
          k === null ? (x = _) : (k.sibling = _),
          (k = _));
    return (
      e &&
        E.forEach(function (j) {
          return t(h, j);
        }),
      Y && Bt(h, L),
      x
    );
  }
  function C(h, g, m, w) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === dn &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case Vr:
          e: {
            for (var x = m.key, k = g; k !== null; ) {
              if (k.key === x) {
                if (((x = m.type), x === dn)) {
                  if (k.tag === 7) {
                    n(h, k.sibling),
                      (g = o(k, m.props.children)),
                      (g.return = h),
                      (h = g);
                    break e;
                  }
                } else if (
                  k.elementType === x ||
                  (typeof x == "object" &&
                    x !== null &&
                    x.$$typeof === St &&
                    ja(x) === k.type)
                ) {
                  n(h, k.sibling),
                    (g = o(k, m.props)),
                    (g.ref = Kn(h, k, m)),
                    (g.return = h),
                    (h = g);
                  break e;
                }
                n(h, k);
                break;
              } else t(h, k);
              k = k.sibling;
            }
            m.type === dn
              ? ((g = Jt(m.props.children, h.mode, w, m.key)),
                (g.return = h),
                (h = g))
              : ((w = So(m.type, m.key, m.props, null, h.mode, w)),
                (w.ref = Kn(h, g, m)),
                (w.return = h),
                (h = w));
          }
          return l(h);
        case cn:
          e: {
            for (k = m.key; g !== null; ) {
              if (g.key === k)
                if (
                  g.tag === 4 &&
                  g.stateNode.containerInfo === m.containerInfo &&
                  g.stateNode.implementation === m.implementation
                ) {
                  n(h, g.sibling),
                    (g = o(g, m.children || [])),
                    (g.return = h),
                    (h = g);
                  break e;
                } else {
                  n(h, g);
                  break;
                }
              else t(h, g);
              g = g.sibling;
            }
            (g = Ai(m, h.mode, w)), (g.return = h), (h = g);
          }
          return l(h);
        case St:
          return (k = m._init), C(h, g, k(m._payload), w);
      }
      if (qn(m)) return v(h, g, m, w);
      if (An(m)) return y(h, g, m, w);
      Jr(h, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        g !== null && g.tag === 6
          ? (n(h, g.sibling), (g = o(g, m)), (g.return = h), (h = g))
          : (n(h, g), (g = Vi(m, h.mode, w)), (g.return = h), (h = g)),
        l(h))
      : n(h, g);
  }
  return C;
}
var Fn = Vc(!0),
  Ac = Vc(!1),
  Do = Vt(null),
  Mo = null,
  Sn = null,
  xs = null;
function Cs() {
  xs = Sn = Mo = null;
}
function Rs(e) {
  var t = Do.current;
  W(Do), (e._currentValue = t);
}
function El(e, t, n) {
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
  (Mo = e),
    (xs = Sn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ce = !0), (e.firstContext = null));
}
function ze(e) {
  var t = e._currentValue;
  if (xs !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Sn === null)) {
      if (Mo === null) throw Error(N(308));
      (Sn = e), (Mo.dependencies = { lanes: 0, firstContext: e });
    } else Sn = Sn.next = e;
  return t;
}
var Wt = null;
function ks(e) {
  Wt === null ? (Wt = [e]) : Wt.push(e);
}
function Hc(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), ks(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    gt(e, r)
  );
}
function gt(e, t) {
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
var wt = !1;
function Es(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Uc(e, t) {
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
function ct(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Ft(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), z & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      gt(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), ks(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    gt(e, n)
  );
}
function go(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), cs(e, n);
  }
}
function Ta(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
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
        i === null ? (o = i = l) : (i = i.next = l), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
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
function jo(e, t, n, r) {
  var o = e.updateQueue;
  wt = !1;
  var i = o.firstBaseUpdate,
    l = o.lastBaseUpdate,
    s = o.shared.pending;
  if (s !== null) {
    o.shared.pending = null;
    var a = s,
      u = a.next;
    (a.next = null), l === null ? (i = u) : (l.next = u), (l = a);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (s = c.lastBaseUpdate),
      s !== l &&
        (s === null ? (c.firstBaseUpdate = u) : (s.next = u),
        (c.lastBaseUpdate = a)));
  }
  if (i !== null) {
    var f = o.baseState;
    (l = 0), (c = u = a = null), (s = i);
    do {
      var d = s.lane,
        p = s.eventTime;
      if ((r & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: p,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var v = e,
            y = s;
          switch (((d = t), (p = n), y.tag)) {
            case 1:
              if (((v = y.payload), typeof v == "function")) {
                f = v.call(p, f, d);
                break e;
              }
              f = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = y.payload),
                (d = typeof v == "function" ? v.call(p, f, d) : v),
                d == null)
              )
                break e;
              f = Z({}, f, d);
              break e;
            case 2:
              wt = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (d = o.effects),
          d === null ? (o.effects = [s]) : d.push(s));
      } else
        (p = {
          eventTime: p,
          lane: d,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          c === null ? ((u = c = p), (a = f)) : (c = c.next = p),
          (l |= d);
      if (((s = s.next), s === null)) {
        if (((s = o.shared.pending), s === null)) break;
        (d = s),
          (s = d.next),
          (d.next = null),
          (o.lastBaseUpdate = d),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (a = f),
      (o.baseState = a),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (l |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (tn |= l), (e.lanes = l), (e.memoizedState = f);
  }
}
function za(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(N(191, o));
        o.call(r);
      }
    }
}
var Mr = {},
  et = Vt(Mr),
  Rr = Vt(Mr),
  kr = Vt(Mr);
function Qt(e) {
  if (e === Mr) throw Error(N(174));
  return e;
}
function Ns(e, t) {
  switch ((G(kr, t), G(Rr, e), G(et, Mr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : il(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = il(t, e));
  }
  W(et), G(et, t);
}
function On() {
  W(et), W(Rr), W(kr);
}
function Bc(e) {
  Qt(kr.current);
  var t = Qt(et.current),
    n = il(t, e.type);
  t !== n && (G(Rr, e), G(et, n));
}
function Ps(e) {
  Rr.current === e && (W(et), W(Rr));
}
var J = Vt(0);
function To(e) {
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
var Ii = [];
function _s() {
  for (var e = 0; e < Ii.length; e++)
    Ii[e]._workInProgressVersionPrimary = null;
  Ii.length = 0;
}
var po = mt.ReactCurrentDispatcher,
  Di = mt.ReactCurrentBatchConfig,
  en = 0,
  q = null,
  oe = null,
  le = null,
  zo = !1,
  ir = !1,
  Er = 0,
  ep = 0;
function de() {
  throw Error(N(321));
}
function Ls(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Qe(e[n], t[n])) return !1;
  return !0;
}
function $s(e, t, n, r, o, i) {
  if (
    ((en = i),
    (q = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (po.current = e === null || e.memoizedState === null ? op : ip),
    (e = n(r, o)),
    ir)
  ) {
    i = 0;
    do {
      if (((ir = !1), (Er = 0), 25 <= i)) throw Error(N(301));
      (i += 1),
        (le = oe = null),
        (t.updateQueue = null),
        (po.current = lp),
        (e = n(r, o));
    } while (ir);
  }
  if (
    ((po.current = Vo),
    (t = oe !== null && oe.next !== null),
    (en = 0),
    (le = oe = q = null),
    (zo = !1),
    t)
  )
    throw Error(N(300));
  return e;
}
function Fs() {
  var e = Er !== 0;
  return (Er = 0), e;
}
function Je() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return le === null ? (q.memoizedState = le = e) : (le = le.next = e), le;
}
function Ve() {
  if (oe === null) {
    var e = q.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = oe.next;
  var t = le === null ? q.memoizedState : le.next;
  if (t !== null) (le = t), (oe = e);
  else {
    if (e === null) throw Error(N(310));
    (oe = e),
      (e = {
        memoizedState: oe.memoizedState,
        baseState: oe.baseState,
        baseQueue: oe.baseQueue,
        queue: oe.queue,
        next: null,
      }),
      le === null ? (q.memoizedState = le = e) : (le = le.next = e);
  }
  return le;
}
function Nr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Mi(e) {
  var t = Ve(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = oe,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var l = o.next;
      (o.next = i.next), (i.next = l);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var s = (l = null),
      a = null,
      u = i;
    do {
      var c = u.lane;
      if ((en & c) === c)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((s = a = f), (l = r)) : (a = a.next = f),
          (q.lanes |= c),
          (tn |= c);
      }
      u = u.next;
    } while (u !== null && u !== i);
    a === null ? (l = r) : (a.next = s),
      Qe(r, t.memoizedState) || (Ce = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (q.lanes |= i), (tn |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ji(e) {
  var t = Ve(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var l = (o = o.next);
    do (i = e(i, l.action)), (l = l.next);
    while (l !== o);
    Qe(i, t.memoizedState) || (Ce = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Gc() {}
function Kc(e, t) {
  var n = q,
    r = Ve(),
    o = t(),
    i = !Qe(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (Ce = !0)),
    (r = r.queue),
    Os(Yc.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (le !== null && le.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Pr(9, Qc.bind(null, n, r, o, t), void 0, null),
      se === null)
    )
      throw Error(N(349));
    en & 30 || Wc(n, t, o);
  }
  return o;
}
function Wc(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = q.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (q.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Qc(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Xc(t) && Jc(e);
}
function Yc(e, t, n) {
  return n(function () {
    Xc(t) && Jc(e);
  });
}
function Xc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Qe(e, n);
  } catch {
    return !0;
  }
}
function Jc(e) {
  var t = gt(e, 1);
  t !== null && Ke(t, e, 1, -1);
}
function Va(e) {
  var t = Je();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Nr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = rp.bind(null, q, e)),
    [t.memoizedState, e]
  );
}
function Pr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = q.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (q.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function qc() {
  return Ve().memoizedState;
}
function ho(e, t, n, r) {
  var o = Je();
  (q.flags |= e),
    (o.memoizedState = Pr(1 | t, n, void 0, r === void 0 ? null : r));
}
function ri(e, t, n, r) {
  var o = Ve();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (oe !== null) {
    var l = oe.memoizedState;
    if (((i = l.destroy), r !== null && Ls(r, l.deps))) {
      o.memoizedState = Pr(t, n, i, r);
      return;
    }
  }
  (q.flags |= e), (o.memoizedState = Pr(1 | t, n, i, r));
}
function Aa(e, t) {
  return ho(8390656, 8, e, t);
}
function Os(e, t) {
  return ri(2048, 8, e, t);
}
function Zc(e, t) {
  return ri(4, 2, e, t);
}
function bc(e, t) {
  return ri(4, 4, e, t);
}
function ed(e, t) {
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
function td(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), ri(4, 4, ed.bind(null, t, e), n)
  );
}
function Is() {}
function nd(e, t) {
  var n = Ve();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ls(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function rd(e, t) {
  var n = Ve();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ls(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function od(e, t, n) {
  return en & 21
    ? (Qe(n, t) || ((n = uc()), (q.lanes |= n), (tn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ce = !0)), (e.memoizedState = n));
}
function tp(e, t) {
  var n = H;
  (H = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Di.transition;
  Di.transition = {};
  try {
    e(!1), t();
  } finally {
    (H = n), (Di.transition = r);
  }
}
function id() {
  return Ve().memoizedState;
}
function np(e, t, n) {
  var r = It(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    ld(e))
  )
    sd(t, n);
  else if (((n = Hc(e, t, n, r)), n !== null)) {
    var o = ye();
    Ke(n, e, r, o), ad(n, t, r);
  }
}
function rp(e, t, n) {
  var r = It(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (ld(e)) sd(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var l = t.lastRenderedState,
          s = i(l, n);
        if (((o.hasEagerState = !0), (o.eagerState = s), Qe(s, l))) {
          var a = t.interleaved;
          a === null
            ? ((o.next = o), ks(t))
            : ((o.next = a.next), (a.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Hc(e, t, o, r)),
      n !== null && ((o = ye()), Ke(n, e, r, o), ad(n, t, r));
  }
}
function ld(e) {
  var t = e.alternate;
  return e === q || (t !== null && t === q);
}
function sd(e, t) {
  ir = zo = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function ad(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), cs(e, n);
  }
}
var Vo = {
    readContext: ze,
    useCallback: de,
    useContext: de,
    useEffect: de,
    useImperativeHandle: de,
    useInsertionEffect: de,
    useLayoutEffect: de,
    useMemo: de,
    useReducer: de,
    useRef: de,
    useState: de,
    useDebugValue: de,
    useDeferredValue: de,
    useTransition: de,
    useMutableSource: de,
    useSyncExternalStore: de,
    useId: de,
    unstable_isNewReconciler: !1,
  },
  op = {
    readContext: ze,
    useCallback: function (e, t) {
      return (Je().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: ze,
    useEffect: Aa,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        ho(4194308, 4, ed.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return ho(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return ho(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Je();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Je();
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
        (e = e.dispatch = np.bind(null, q, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Je();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Va,
    useDebugValue: Is,
    useDeferredValue: function (e) {
      return (Je().memoizedState = e);
    },
    useTransition: function () {
      var e = Va(!1),
        t = e[0];
      return (e = tp.bind(null, e[1])), (Je().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = q,
        o = Je();
      if (Y) {
        if (n === void 0) throw Error(N(407));
        n = n();
      } else {
        if (((n = t()), se === null)) throw Error(N(349));
        en & 30 || Wc(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        Aa(Yc.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Pr(9, Qc.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Je(),
        t = se.identifierPrefix;
      if (Y) {
        var n = ut,
          r = at;
        (n = (r & ~(1 << (32 - Ge(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Er++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = ep++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  ip = {
    readContext: ze,
    useCallback: nd,
    useContext: ze,
    useEffect: Os,
    useImperativeHandle: td,
    useInsertionEffect: Zc,
    useLayoutEffect: bc,
    useMemo: rd,
    useReducer: Mi,
    useRef: qc,
    useState: function () {
      return Mi(Nr);
    },
    useDebugValue: Is,
    useDeferredValue: function (e) {
      var t = Ve();
      return od(t, oe.memoizedState, e);
    },
    useTransition: function () {
      var e = Mi(Nr)[0],
        t = Ve().memoizedState;
      return [e, t];
    },
    useMutableSource: Gc,
    useSyncExternalStore: Kc,
    useId: id,
    unstable_isNewReconciler: !1,
  },
  lp = {
    readContext: ze,
    useCallback: nd,
    useContext: ze,
    useEffect: Os,
    useImperativeHandle: td,
    useInsertionEffect: Zc,
    useLayoutEffect: bc,
    useMemo: rd,
    useReducer: ji,
    useRef: qc,
    useState: function () {
      return ji(Nr);
    },
    useDebugValue: Is,
    useDeferredValue: function (e) {
      var t = Ve();
      return oe === null ? (t.memoizedState = e) : od(t, oe.memoizedState, e);
    },
    useTransition: function () {
      var e = ji(Nr)[0],
        t = Ve().memoizedState;
      return [e, t];
    },
    useMutableSource: Gc,
    useSyncExternalStore: Kc,
    useId: id,
    unstable_isNewReconciler: !1,
  };
function He(e, t) {
  if (e && e.defaultProps) {
    (t = Z({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Nl(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Z({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var oi = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? on(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ye(),
      o = It(e),
      i = ct(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = Ft(e, i, o)),
      t !== null && (Ke(t, e, o, r), go(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ye(),
      o = It(e),
      i = ct(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Ft(e, i, o)),
      t !== null && (Ke(t, e, o, r), go(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ye(),
      r = It(e),
      o = ct(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = Ft(e, o, r)),
      t !== null && (Ke(t, e, r, n), go(t, e, r));
  },
};
function Ha(e, t, n, r, o, i, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Sr(n, r) || !Sr(o, i)
      : !0
  );
}
function ud(e, t, n) {
  var r = !1,
    o = jt,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = ze(i))
      : ((o = ke(t) ? Zt : he.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Ln(e, o) : jt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = oi),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Ua(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && oi.enqueueReplaceState(t, t.state, null);
}
function Pl(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), Es(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = ze(i))
    : ((i = ke(t) ? Zt : he.current), (o.context = Ln(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Nl(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && oi.enqueueReplaceState(o, o.state, null),
      jo(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function In(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Df(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Ti(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function _l(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var sp = typeof WeakMap == "function" ? WeakMap : Map;
function cd(e, t, n) {
  (n = ct(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Ho || ((Ho = !0), (zl = r)), _l(e, t);
    }),
    n
  );
}
function dd(e, t, n) {
  (n = ct(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        _l(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        _l(e, t),
          typeof r != "function" &&
            (Ot === null ? (Ot = new Set([this])) : Ot.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: l !== null ? l : "",
        });
      }),
    n
  );
}
function Ba(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new sp();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = xp.bind(null, e, t, n)), t.then(e, e));
}
function Ga(e) {
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
function Ka(e, t, n, r, o) {
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
              : ((t = ct(-1, 1)), (t.tag = 2), Ft(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var ap = mt.ReactCurrentOwner,
  Ce = !1;
function ve(e, t, n, r) {
  t.child = e === null ? Ac(t, null, n, r) : Fn(t, e.child, n, r);
}
function Wa(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    Nn(t, o),
    (r = $s(e, t, n, r, i, o)),
    (n = Fs()),
    e !== null && !Ce
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        pt(e, t, o))
      : (Y && n && ys(t), (t.flags |= 1), ve(e, t, r, o), t.child)
  );
}
function Qa(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Hs(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), fd(e, t, i, r, o))
      : ((e = So(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var l = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Sr), n(l, r) && e.ref === t.ref)
    )
      return pt(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Dt(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function fd(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Sr(i, r) && e.ref === t.ref)
      if (((Ce = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (Ce = !0);
      else return (t.lanes = e.lanes), pt(e, t, o);
  }
  return Ll(e, t, n, r, o);
}
function gd(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        G(xn, Ne),
        (Ne |= n);
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
          G(xn, Ne),
          (Ne |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        G(xn, Ne),
        (Ne |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      G(xn, Ne),
      (Ne |= r);
  return ve(e, t, o, n), t.child;
}
function pd(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ll(e, t, n, r, o) {
  var i = ke(n) ? Zt : he.current;
  return (
    (i = Ln(t, i)),
    Nn(t, o),
    (n = $s(e, t, n, r, i, o)),
    (r = Fs()),
    e !== null && !Ce
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        pt(e, t, o))
      : (Y && r && ys(t), (t.flags |= 1), ve(e, t, n, o), t.child)
  );
}
function Ya(e, t, n, r, o) {
  if (ke(n)) {
    var i = !0;
    Fo(t);
  } else i = !1;
  if ((Nn(t, o), t.stateNode === null))
    mo(e, t), ud(t, n, r), Pl(t, n, r, o), (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      s = t.memoizedProps;
    l.props = s;
    var a = l.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = ze(u))
      : ((u = ke(n) ? Zt : he.current), (u = Ln(t, u)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((s !== r || a !== u) && Ua(t, l, r, u)),
      (wt = !1);
    var d = t.memoizedState;
    (l.state = d),
      jo(t, r, l, o),
      (a = t.memoizedState),
      s !== r || d !== a || Re.current || wt
        ? (typeof c == "function" && (Nl(t, n, c, r), (a = t.memoizedState)),
          (s = wt || Ha(t, n, s, r, d, a, u))
            ? (f ||
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
          (r = !1));
  } else {
    (l = t.stateNode),
      Uc(e, t),
      (s = t.memoizedProps),
      (u = t.type === t.elementType ? s : He(t.type, s)),
      (l.props = u),
      (f = t.pendingProps),
      (d = l.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = ze(a))
        : ((a = ke(n) ? Zt : he.current), (a = Ln(t, a)));
    var p = n.getDerivedStateFromProps;
    (c =
      typeof p == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((s !== f || d !== a) && Ua(t, l, r, a)),
      (wt = !1),
      (d = t.memoizedState),
      (l.state = d),
      jo(t, r, l, o);
    var v = t.memoizedState;
    s !== f || d !== v || Re.current || wt
      ? (typeof p == "function" && (Nl(t, n, p, r), (v = t.memoizedState)),
        (u = wt || Ha(t, n, u, r, d, v, a) || !1)
          ? (c ||
              (typeof l.UNSAFE_componentWillUpdate != "function" &&
                typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" &&
                l.componentWillUpdate(r, v, a),
              typeof l.UNSAFE_componentWillUpdate == "function" &&
                l.UNSAFE_componentWillUpdate(r, v, a)),
            typeof l.componentDidUpdate == "function" && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != "function" ||
              (s === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (l.props = r),
        (l.state = v),
        (l.context = a),
        (r = u))
      : (typeof l.componentDidUpdate != "function" ||
          (s === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return $l(e, t, n, r, i, o);
}
function $l(e, t, n, r, o, i) {
  pd(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return o && Ia(t, n, !1), pt(e, t, i);
  (r = t.stateNode), (ap.current = t);
  var s =
    l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = Fn(t, e.child, null, i)), (t.child = Fn(t, null, s, i)))
      : ve(e, t, s, i),
    (t.memoizedState = r.state),
    o && Ia(t, n, !0),
    t.child
  );
}
function hd(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Oa(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Oa(e, t.context, !1),
    Ns(e, t.containerInfo);
}
function Xa(e, t, n, r, o) {
  return $n(), ws(o), (t.flags |= 256), ve(e, t, n, r), t.child;
}
var Fl = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ol(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function md(e, t, n) {
  var r = t.pendingProps,
    o = J.current,
    i = !1,
    l = (t.flags & 128) !== 0,
    s;
  if (
    ((s = l) ||
      (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    s
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    G(J, o & 1),
    e === null)
  )
    return (
      kl(t),
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
          i
            ? ((r = t.mode),
              (i = t.child),
              (l = { mode: "hidden", children: l }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = l))
                : (i = si(l, r, 0, null)),
              (e = Jt(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Ol(n)),
              (t.memoizedState = Fl),
              e)
            : Ds(t, l))
    );
  if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null)))
    return up(e, t, l, r, s, o, n);
  if (i) {
    (i = r.fallback), (l = t.mode), (o = e.child), (s = o.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(l & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = Dt(o, a)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      s !== null ? (i = Dt(s, i)) : ((i = Jt(i, l, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? Ol(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (i.memoizedState = l),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Fl),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Dt(i, { mode: "visible", children: r.children })),
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
function Ds(e, t) {
  return (
    (t = si({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function qr(e, t, n, r) {
  return (
    r !== null && ws(r),
    Fn(t, e.child, null, n),
    (e = Ds(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function up(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ti(Error(N(422)))), qr(e, t, l, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = si({ mode: "visible", children: r.children }, o, 0, null)),
        (i = Jt(i, o, l, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && Fn(t, e.child, null, l),
        (t.child.memoizedState = Ol(l)),
        (t.memoizedState = Fl),
        i);
  if (!(t.mode & 1)) return qr(e, t, l, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (i = Error(N(419))), (r = Ti(i, r, void 0)), qr(e, t, l, r);
  }
  if (((s = (l & e.childLanes) !== 0), Ce || s)) {
    if (((r = se), r !== null)) {
      switch (l & -l) {
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
      (o = o & (r.suspendedLanes | l) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), gt(e, o), Ke(r, e, o, -1));
    }
    return As(), (r = Ti(Error(N(421)))), qr(e, t, l, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Cp.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Pe = $t(o.nextSibling)),
      (_e = t),
      (Y = !0),
      (Be = null),
      e !== null &&
        ((De[Me++] = at),
        (De[Me++] = ut),
        (De[Me++] = bt),
        (at = e.id),
        (ut = e.overflow),
        (bt = t)),
      (t = Ds(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Ja(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), El(e.return, t, n);
}
function zi(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function vd(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((ve(e, t, r.children, n), (r = J.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ja(e, n, t);
        else if (e.tag === 19) Ja(e, n, t);
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
  if ((G(J, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && To(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          zi(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && To(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        zi(t, !0, n, null, i);
        break;
      case "together":
        zi(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function mo(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function pt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (tn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(N(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Dt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Dt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function cp(e, t, n) {
  switch (t.tag) {
    case 3:
      hd(t), $n();
      break;
    case 5:
      Bc(t);
      break;
    case 1:
      ke(t.type) && Fo(t);
      break;
    case 4:
      Ns(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      G(Do, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (G(J, J.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? md(e, t, n)
          : (G(J, J.current & 1),
            (e = pt(e, t, n)),
            e !== null ? e.sibling : null);
      G(J, J.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return vd(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        G(J, J.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), gd(e, t, n);
  }
  return pt(e, t, n);
}
var yd, Il, Sd, wd;
yd = function (e, t) {
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
Il = function () {};
Sd = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Qt(et.current);
    var i = null;
    switch (n) {
      case "input":
        (o = tl(e, o)), (r = tl(e, r)), (i = []);
        break;
      case "select":
        (o = Z({}, o, { value: void 0 })),
          (r = Z({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = ol(e, o)), (r = ol(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Lo);
    }
    ll(n, r);
    var l;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var s = o[u];
          for (l in s) s.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (fr.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((s = o != null ? o[u] : void 0),
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
          } else n || (i || (i = []), i.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (s = s ? s.__html : void 0),
              a != null && s !== a && (i = i || []).push(u, a))
            : u === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (i = i || []).push(u, "" + a)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (fr.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && K("scroll", e),
                  i || s === a || (i = []))
                : (i = i || []).push(u, a));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
wd = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Wn(e, t) {
  if (!Y)
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
function fe(e) {
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
function dp(e, t, n) {
  var r = t.pendingProps;
  switch ((Ss(t), t.tag)) {
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
      return fe(t), null;
    case 1:
      return ke(t.type) && $o(), fe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        On(),
        W(Re),
        W(he),
        _s(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Xr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Be !== null && (Hl(Be), (Be = null)))),
        Il(e, t),
        fe(t),
        null
      );
    case 5:
      Ps(t);
      var o = Qt(kr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Sd(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(N(166));
          return fe(t), null;
        }
        if (((e = Qt(et.current)), Xr(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[qe] = t), (r[Cr] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              K("cancel", r), K("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              K("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < bn.length; o++) K(bn[o], r);
              break;
            case "source":
              K("error", r);
              break;
            case "img":
            case "image":
            case "link":
              K("error", r), K("load", r);
              break;
            case "details":
              K("toggle", r);
              break;
            case "input":
              ia(r, i), K("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                K("invalid", r);
              break;
            case "textarea":
              sa(r, i), K("invalid", r);
          }
          ll(n, i), (o = null);
          for (var l in i)
            if (i.hasOwnProperty(l)) {
              var s = i[l];
              l === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (i.suppressHydrationWarning !== !0 &&
                      Yr(r.textContent, s, e),
                    (o = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (i.suppressHydrationWarning !== !0 &&
                      Yr(r.textContent, s, e),
                    (o = ["children", "" + s]))
                : fr.hasOwnProperty(l) &&
                  s != null &&
                  l === "onScroll" &&
                  K("scroll", r);
            }
          switch (n) {
            case "input":
              Ar(r), la(r, i, !0);
              break;
            case "textarea":
              Ar(r), aa(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Lo);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (l = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Yu(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = l.createElement("div")),
                  (e.innerHTML = "<script></script>"),
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
            (e[qe] = t),
            (e[Cr] = r),
            yd(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = sl(n, r)), n)) {
              case "dialog":
                K("cancel", e), K("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                K("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < bn.length; o++) K(bn[o], e);
                o = r;
                break;
              case "source":
                K("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                K("error", e), K("load", e), (o = r);
                break;
              case "details":
                K("toggle", e), (o = r);
                break;
              case "input":
                ia(e, r), (o = tl(e, r)), K("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = Z({}, r, { value: void 0 })),
                  K("invalid", e);
                break;
              case "textarea":
                sa(e, r), (o = ol(e, r)), K("invalid", e);
                break;
              default:
                o = r;
            }
            ll(n, o), (s = o);
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var a = s[i];
                i === "style"
                  ? qu(e, a)
                  : i === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && Xu(e, a))
                  : i === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && gr(e, a)
                    : typeof a == "number" && gr(e, "" + a)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (fr.hasOwnProperty(i)
                      ? a != null && i === "onScroll" && K("scroll", e)
                      : a != null && os(e, i, a, l));
              }
            switch (n) {
              case "input":
                Ar(e), la(e, r, !1);
                break;
              case "textarea":
                Ar(e), aa(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Mt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Cn(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Cn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Lo);
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
      return fe(t), null;
    case 6:
      if (e && t.stateNode != null) wd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(N(166));
        if (((n = Qt(kr.current)), Qt(et.current), Xr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[qe] = t),
            (i = r.nodeValue !== n) && ((e = _e), e !== null))
          )
            switch (e.tag) {
              case 3:
                Yr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Yr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[qe] = t),
            (t.stateNode = r);
      }
      return fe(t), null;
    case 13:
      if (
        (W(J),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Y && Pe !== null && t.mode & 1 && !(t.flags & 128))
          zc(), $n(), (t.flags |= 98560), (i = !1);
        else if (((i = Xr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(N(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(N(317));
            i[qe] = t;
          } else
            $n(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          fe(t), (i = !1);
        } else Be !== null && (Hl(Be), (Be = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || J.current & 1 ? ie === 0 && (ie = 3) : As())),
          t.updateQueue !== null && (t.flags |= 4),
          fe(t),
          null);
    case 4:
      return (
        On(), Il(e, t), e === null && wr(t.stateNode.containerInfo), fe(t), null
      );
    case 10:
      return Rs(t.type._context), fe(t), null;
    case 17:
      return ke(t.type) && $o(), fe(t), null;
    case 19:
      if ((W(J), (i = t.memoizedState), i === null)) return fe(t), null;
      if (((r = (t.flags & 128) !== 0), (l = i.rendering), l === null))
        if (r) Wn(i, !1);
        else {
          if (ie !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = To(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    Wn(i, !1),
                    r = l.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (l = i.alternate),
                    l === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = l.childLanes),
                        (i.lanes = l.lanes),
                        (i.child = l.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = l.memoizedProps),
                        (i.memoizedState = l.memoizedState),
                        (i.updateQueue = l.updateQueue),
                        (i.type = l.type),
                        (e = l.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return G(J, (J.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            te() > Dn &&
            ((t.flags |= 128), (r = !0), Wn(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = To(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Wn(i, !0),
              i.tail === null && i.tailMode === "hidden" && !l.alternate && !Y)
            )
              return fe(t), null;
          } else
            2 * te() - i.renderingStartTime > Dn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Wn(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = i.last),
            n !== null ? (n.sibling = l) : (t.child = l),
            (i.last = l));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = te()),
          (t.sibling = null),
          (n = J.current),
          G(J, r ? (n & 1) | 2 : n & 1),
          t)
        : (fe(t), null);
    case 22:
    case 23:
      return (
        Vs(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ne & 1073741824 && (fe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : fe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(N(156, t.tag));
}
function fp(e, t) {
  switch ((Ss(t), t.tag)) {
    case 1:
      return (
        ke(t.type) && $o(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        On(),
        W(Re),
        W(he),
        _s(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Ps(t), null;
    case 13:
      if ((W(J), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(N(340));
        $n();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return W(J), null;
    case 4:
      return On(), null;
    case 10:
      return Rs(t.type._context), null;
    case 22:
    case 23:
      return Vs(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Zr = !1,
  pe = !1,
  gp = typeof WeakSet == "function" ? WeakSet : Set,
  $ = null;
function wn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        b(e, t, r);
      }
    else n.current = null;
}
function Dl(e, t, n) {
  try {
    n();
  } catch (r) {
    b(e, t, r);
  }
}
var qa = !1;
function pp(e, t) {
  if (((vl = No), (e = Ec()), vs(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var l = 0,
            s = -1,
            a = -1,
            u = 0,
            c = 0,
            f = e,
            d = null;
          t: for (;;) {
            for (
              var p;
              f !== n || (o !== 0 && f.nodeType !== 3) || (s = l + o),
                f !== i || (r !== 0 && f.nodeType !== 3) || (a = l + r),
                f.nodeType === 3 && (l += f.nodeValue.length),
                (p = f.firstChild) !== null;

            )
              (d = f), (f = p);
            for (;;) {
              if (f === e) break t;
              if (
                (d === n && ++u === o && (s = l),
                d === i && ++c === r && (a = l),
                (p = f.nextSibling) !== null)
              )
                break;
              (f = d), (d = f.parentNode);
            }
            f = p;
          }
          n = s === -1 || a === -1 ? null : { start: s, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (yl = { focusedElem: e, selectionRange: n }, No = !1, $ = t; $ !== null; )
    if (((t = $), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), ($ = e);
    else
      for (; $ !== null; ) {
        t = $;
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
                  var y = v.memoizedProps,
                    C = v.memoizedState,
                    h = t.stateNode,
                    g = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : He(t.type, y),
                      C
                    );
                  h.__reactInternalSnapshotBeforeUpdate = g;
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
                throw Error(N(163));
            }
        } catch (w) {
          b(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), ($ = e);
          break;
        }
        $ = t.return;
      }
  return (v = qa), (qa = !1), v;
}
function lr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && Dl(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function ii(e, t) {
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
function Ml(e) {
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
function xd(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), xd(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[qe], delete t[Cr], delete t[xl], delete t[Jg], delete t[qg])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Cd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Za(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Cd(e.return)) return null;
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
function jl(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = Lo));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (jl(e, t, n), e = e.sibling; e !== null; ) jl(e, t, n), (e = e.sibling);
}
function Tl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Tl(e, t, n), e = e.sibling; e !== null; ) Tl(e, t, n), (e = e.sibling);
}
var ae = null,
  Ue = !1;
function yt(e, t, n) {
  for (n = n.child; n !== null; ) Rd(e, t, n), (n = n.sibling);
}
function Rd(e, t, n) {
  if (be && typeof be.onCommitFiberUnmount == "function")
    try {
      be.onCommitFiberUnmount(qo, n);
    } catch {}
  switch (n.tag) {
    case 5:
      pe || wn(n, t);
    case 6:
      var r = ae,
        o = Ue;
      (ae = null),
        yt(e, t, n),
        (ae = r),
        (Ue = o),
        ae !== null &&
          (Ue
            ? ((e = ae),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ae.removeChild(n.stateNode));
      break;
    case 18:
      ae !== null &&
        (Ue
          ? ((e = ae),
            (n = n.stateNode),
            e.nodeType === 8
              ? Fi(e.parentNode, n)
              : e.nodeType === 1 && Fi(e, n),
            vr(e))
          : Fi(ae, n.stateNode));
      break;
    case 4:
      (r = ae),
        (o = Ue),
        (ae = n.stateNode.containerInfo),
        (Ue = !0),
        yt(e, t, n),
        (ae = r),
        (Ue = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !pe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            l = i.destroy;
          (i = i.tag),
            l !== void 0 && (i & 2 || i & 4) && Dl(n, t, l),
            (o = o.next);
        } while (o !== r);
      }
      yt(e, t, n);
      break;
    case 1:
      if (
        !pe &&
        (wn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          b(n, t, s);
        }
      yt(e, t, n);
      break;
    case 21:
      yt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((pe = (r = pe) || n.memoizedState !== null), yt(e, t, n), (pe = r))
        : yt(e, t, n);
      break;
    default:
      yt(e, t, n);
  }
}
function ba(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new gp()),
      t.forEach(function (r) {
        var o = Rp.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function Ae(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          l = t,
          s = l;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (ae = s.stateNode), (Ue = !1);
              break e;
            case 3:
              (ae = s.stateNode.containerInfo), (Ue = !0);
              break e;
            case 4:
              (ae = s.stateNode.containerInfo), (Ue = !0);
              break e;
          }
          s = s.return;
        }
        if (ae === null) throw Error(N(160));
        Rd(i, l, o), (ae = null), (Ue = !1);
        var a = o.alternate;
        a !== null && (a.return = null), (o.return = null);
      } catch (u) {
        b(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) kd(t, e), (t = t.sibling);
}
function kd(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ae(t, e), Xe(e), r & 4)) {
        try {
          lr(3, e, e.return), ii(3, e);
        } catch (y) {
          b(e, e.return, y);
        }
        try {
          lr(5, e, e.return);
        } catch (y) {
          b(e, e.return, y);
        }
      }
      break;
    case 1:
      Ae(t, e), Xe(e), r & 512 && n !== null && wn(n, n.return);
      break;
    case 5:
      if (
        (Ae(t, e),
        Xe(e),
        r & 512 && n !== null && wn(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          gr(o, "");
        } catch (y) {
          b(e, e.return, y);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          l = n !== null ? n.memoizedProps : i,
          s = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            s === "input" && i.type === "radio" && i.name != null && Wu(o, i),
              sl(s, l);
            var u = sl(s, i);
            for (l = 0; l < a.length; l += 2) {
              var c = a[l],
                f = a[l + 1];
              c === "style"
                ? qu(o, f)
                : c === "dangerouslySetInnerHTML"
                ? Xu(o, f)
                : c === "children"
                ? gr(o, f)
                : os(o, c, f, u);
            }
            switch (s) {
              case "input":
                nl(o, i);
                break;
              case "textarea":
                Qu(o, i);
                break;
              case "select":
                var d = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var p = i.value;
                p != null
                  ? Cn(o, !!i.multiple, p, !1)
                  : d !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Cn(o, !!i.multiple, i.defaultValue, !0)
                      : Cn(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[Cr] = i;
          } catch (y) {
            b(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((Ae(t, e), Xe(e), r & 4)) {
        if (e.stateNode === null) throw Error(N(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (y) {
          b(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (Ae(t, e), Xe(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          vr(t.containerInfo);
        } catch (y) {
          b(e, e.return, y);
        }
      break;
    case 4:
      Ae(t, e), Xe(e);
      break;
    case 13:
      Ae(t, e),
        Xe(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Ts = te())),
        r & 4 && ba(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((pe = (u = pe) || c), Ae(t, e), (pe = u)) : Ae(t, e),
        Xe(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for ($ = e, c = e.child; c !== null; ) {
            for (f = $ = c; $ !== null; ) {
              switch (((d = $), (p = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  lr(4, d, d.return);
                  break;
                case 1:
                  wn(d, d.return);
                  var v = d.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (y) {
                      b(r, n, y);
                    }
                  }
                  break;
                case 5:
                  wn(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    tu(f);
                    continue;
                  }
              }
              p !== null ? ((p.return = d), ($ = p)) : tu(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                (o = f.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((s = f.stateNode),
                      (a = f.memoizedProps.style),
                      (l =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (s.style.display = Ju("display", l)));
              } catch (y) {
                b(e, e.return, y);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (y) {
                b(e, e.return, y);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), (f = f.return);
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      Ae(t, e), Xe(e), r & 4 && ba(e);
      break;
    case 21:
      break;
    default:
      Ae(t, e), Xe(e);
  }
}
function Xe(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Cd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(N(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (gr(o, ""), (r.flags &= -33));
          var i = Za(e);
          Tl(e, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            s = Za(e);
          jl(e, s, l);
          break;
        default:
          throw Error(N(161));
      }
    } catch (a) {
      b(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function hp(e, t, n) {
  ($ = e), Ed(e);
}
function Ed(e, t, n) {
  for (var r = (e.mode & 1) !== 0; $ !== null; ) {
    var o = $,
      i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || Zr;
      if (!l) {
        var s = o.alternate,
          a = (s !== null && s.memoizedState !== null) || pe;
        s = Zr;
        var u = pe;
        if (((Zr = l), (pe = a) && !u))
          for ($ = o; $ !== null; )
            (l = $),
              (a = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? nu(o)
                : a !== null
                ? ((a.return = l), ($ = a))
                : nu(o);
        for (; i !== null; ) ($ = i), Ed(i), (i = i.sibling);
        ($ = o), (Zr = s), (pe = u);
      }
      eu(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), ($ = i)) : eu(e);
  }
}
function eu(e) {
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
              pe || ii(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !pe)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : He(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && za(t, i, r);
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
                za(t, l, n);
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
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && vr(f);
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
        pe || (t.flags & 512 && Ml(t));
      } catch (d) {
        b(t, t.return, d);
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
function tu(e) {
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
function nu(e) {
  for (; $ !== null; ) {
    var t = $;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ii(4, t);
          } catch (a) {
            b(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              b(t, o, a);
            }
          }
          var i = t.return;
          try {
            Ml(t);
          } catch (a) {
            b(t, i, a);
          }
          break;
        case 5:
          var l = t.return;
          try {
            Ml(t);
          } catch (a) {
            b(t, l, a);
          }
      }
    } catch (a) {
      b(t, t.return, a);
    }
    if (t === e) {
      $ = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), ($ = s);
      break;
    }
    $ = t.return;
  }
}
var mp = Math.ceil,
  Ao = mt.ReactCurrentDispatcher,
  Ms = mt.ReactCurrentOwner,
  Te = mt.ReactCurrentBatchConfig,
  z = 0,
  se = null,
  ne = null,
  ue = 0,
  Ne = 0,
  xn = Vt(0),
  ie = 0,
  _r = null,
  tn = 0,
  li = 0,
  js = 0,
  sr = null,
  xe = null,
  Ts = 0,
  Dn = 1 / 0,
  it = null,
  Ho = !1,
  zl = null,
  Ot = null,
  br = !1,
  Et = null,
  Uo = 0,
  ar = 0,
  Vl = null,
  vo = -1,
  yo = 0;
function ye() {
  return z & 6 ? te() : vo !== -1 ? vo : (vo = te());
}
function It(e) {
  return e.mode & 1
    ? z & 2 && ue !== 0
      ? ue & -ue
      : bg.transition !== null
      ? (yo === 0 && (yo = uc()), yo)
      : ((e = H),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : mc(e.type))),
        e)
    : 1;
}
function Ke(e, t, n, r) {
  if (50 < ar) throw ((ar = 0), (Vl = null), Error(N(185)));
  Or(e, n, r),
    (!(z & 2) || e !== se) &&
      (e === se && (!(z & 2) && (li |= n), ie === 4 && Ct(e, ue)),
      Ee(e, r),
      n === 1 && z === 0 && !(t.mode & 1) && ((Dn = te() + 500), ni && At()));
}
function Ee(e, t) {
  var n = e.callbackNode;
  bf(e, t);
  var r = Eo(e, e === se ? ue : 0);
  if (r === 0)
    n !== null && da(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && da(n), t === 1))
      e.tag === 0 ? Zg(ru.bind(null, e)) : Mc(ru.bind(null, e)),
        Yg(function () {
          !(z & 6) && At();
        }),
        (n = null);
    else {
      switch (cc(r)) {
        case 1:
          n = us;
          break;
        case 4:
          n = sc;
          break;
        case 16:
          n = ko;
          break;
        case 536870912:
          n = ac;
          break;
        default:
          n = ko;
      }
      n = Id(n, Nd.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Nd(e, t) {
  if (((vo = -1), (yo = 0), z & 6)) throw Error(N(327));
  var n = e.callbackNode;
  if (Pn() && e.callbackNode !== n) return null;
  var r = Eo(e, e === se ? ue : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Bo(e, r);
  else {
    t = r;
    var o = z;
    z |= 2;
    var i = _d();
    (se !== e || ue !== t) && ((it = null), (Dn = te() + 500), Xt(e, t));
    do
      try {
        Sp();
        break;
      } catch (s) {
        Pd(e, s);
      }
    while (!0);
    Cs(),
      (Ao.current = i),
      (z = o),
      ne !== null ? (t = 0) : ((se = null), (ue = 0), (t = ie));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = fl(e)), o !== 0 && ((r = o), (t = Al(e, o)))), t === 1)
    )
      throw ((n = _r), Xt(e, 0), Ct(e, r), Ee(e, te()), n);
    if (t === 6) Ct(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !vp(o) &&
          ((t = Bo(e, r)),
          t === 2 && ((i = fl(e)), i !== 0 && ((r = i), (t = Al(e, i)))),
          t === 1))
      )
        throw ((n = _r), Xt(e, 0), Ct(e, r), Ee(e, te()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(N(345));
        case 2:
          Gt(e, xe, it);
          break;
        case 3:
          if (
            (Ct(e, r), (r & 130023424) === r && ((t = Ts + 500 - te()), 10 < t))
          ) {
            if (Eo(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              ye(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = wl(Gt.bind(null, e, xe, it), t);
            break;
          }
          Gt(e, xe, it);
          break;
        case 4:
          if ((Ct(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - Ge(r);
            (i = 1 << l), (l = t[l]), l > o && (o = l), (r &= ~i);
          }
          if (
            ((r = o),
            (r = te() - r),
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
                : 1960 * mp(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = wl(Gt.bind(null, e, xe, it), r);
            break;
          }
          Gt(e, xe, it);
          break;
        case 5:
          Gt(e, xe, it);
          break;
        default:
          throw Error(N(329));
      }
    }
  }
  return Ee(e, te()), e.callbackNode === n ? Nd.bind(null, e) : null;
}
function Al(e, t) {
  var n = sr;
  return (
    e.current.memoizedState.isDehydrated && (Xt(e, t).flags |= 256),
    (e = Bo(e, t)),
    e !== 2 && ((t = xe), (xe = n), t !== null && Hl(t)),
    e
  );
}
function Hl(e) {
  xe === null ? (xe = e) : xe.push.apply(xe, e);
}
function vp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!Qe(i(), o)) return !1;
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
function Ct(e, t) {
  for (
    t &= ~js,
      t &= ~li,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ge(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function ru(e) {
  if (z & 6) throw Error(N(327));
  Pn();
  var t = Eo(e, 0);
  if (!(t & 1)) return Ee(e, te()), null;
  var n = Bo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = fl(e);
    r !== 0 && ((t = r), (n = Al(e, r)));
  }
  if (n === 1) throw ((n = _r), Xt(e, 0), Ct(e, t), Ee(e, te()), n);
  if (n === 6) throw Error(N(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Gt(e, xe, it),
    Ee(e, te()),
    null
  );
}
function zs(e, t) {
  var n = z;
  z |= 1;
  try {
    return e(t);
  } finally {
    (z = n), z === 0 && ((Dn = te() + 500), ni && At());
  }
}
function nn(e) {
  Et !== null && Et.tag === 0 && !(z & 6) && Pn();
  var t = z;
  z |= 1;
  var n = Te.transition,
    r = H;
  try {
    if (((Te.transition = null), (H = 1), e)) return e();
  } finally {
    (H = r), (Te.transition = n), (z = t), !(z & 6) && At();
  }
}
function Vs() {
  (Ne = xn.current), W(xn);
}
function Xt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Qg(n)), ne !== null))
    for (n = ne.return; n !== null; ) {
      var r = n;
      switch ((Ss(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && $o();
          break;
        case 3:
          On(), W(Re), W(he), _s();
          break;
        case 5:
          Ps(r);
          break;
        case 4:
          On();
          break;
        case 13:
          W(J);
          break;
        case 19:
          W(J);
          break;
        case 10:
          Rs(r.type._context);
          break;
        case 22:
        case 23:
          Vs();
      }
      n = n.return;
    }
  if (
    ((se = e),
    (ne = e = Dt(e.current, null)),
    (ue = Ne = t),
    (ie = 0),
    (_r = null),
    (js = li = tn = 0),
    (xe = sr = null),
    Wt !== null)
  ) {
    for (t = 0; t < Wt.length; t++)
      if (((n = Wt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var l = i.next;
          (i.next = o), (r.next = l);
        }
        n.pending = r;
      }
    Wt = null;
  }
  return e;
}
function Pd(e, t) {
  do {
    var n = ne;
    try {
      if ((Cs(), (po.current = Vo), zo)) {
        for (var r = q.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        zo = !1;
      }
      if (
        ((en = 0),
        (le = oe = q = null),
        (ir = !1),
        (Er = 0),
        (Ms.current = null),
        n === null || n.return === null)
      ) {
        (ie = 1), (_r = t), (ne = null);
        break;
      }
      e: {
        var i = e,
          l = n.return,
          s = n,
          a = t;
        if (
          ((t = ue),
          (s.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            c = s,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var p = Ga(l);
          if (p !== null) {
            (p.flags &= -257),
              Ka(p, l, s, i, t),
              p.mode & 1 && Ba(i, u, t),
              (t = p),
              (a = u);
            var v = t.updateQueue;
            if (v === null) {
              var y = new Set();
              y.add(a), (t.updateQueue = y);
            } else v.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Ba(i, u, t), As();
              break e;
            }
            a = Error(N(426));
          }
        } else if (Y && s.mode & 1) {
          var C = Ga(l);
          if (C !== null) {
            !(C.flags & 65536) && (C.flags |= 256),
              Ka(C, l, s, i, t),
              ws(In(a, s));
            break e;
          }
        }
        (i = a = In(a, s)),
          ie !== 4 && (ie = 2),
          sr === null ? (sr = [i]) : sr.push(i),
          (i = l);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var h = cd(i, a, t);
              Ta(i, h);
              break e;
            case 1:
              s = a;
              var g = i.type,
                m = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof g.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (Ot === null || !Ot.has(m))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var w = dd(i, s, t);
                Ta(i, w);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      $d(n);
    } catch (x) {
      (t = x), ne === n && n !== null && (ne = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function _d() {
  var e = Ao.current;
  return (Ao.current = Vo), e === null ? Vo : e;
}
function As() {
  (ie === 0 || ie === 3 || ie === 2) && (ie = 4),
    se === null || (!(tn & 268435455) && !(li & 268435455)) || Ct(se, ue);
}
function Bo(e, t) {
  var n = z;
  z |= 2;
  var r = _d();
  (se !== e || ue !== t) && ((it = null), Xt(e, t));
  do
    try {
      yp();
      break;
    } catch (o) {
      Pd(e, o);
    }
  while (!0);
  if ((Cs(), (z = n), (Ao.current = r), ne !== null)) throw Error(N(261));
  return (se = null), (ue = 0), ie;
}
function yp() {
  for (; ne !== null; ) Ld(ne);
}
function Sp() {
  for (; ne !== null && !Gf(); ) Ld(ne);
}
function Ld(e) {
  var t = Od(e.alternate, e, Ne);
  (e.memoizedProps = e.pendingProps),
    t === null ? $d(e) : (ne = t),
    (Ms.current = null);
}
function $d(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = fp(n, t)), n !== null)) {
        (n.flags &= 32767), (ne = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ie = 6), (ne = null);
        return;
      }
    } else if (((n = dp(n, t, Ne)), n !== null)) {
      ne = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ne = t;
      return;
    }
    ne = t = e;
  } while (t !== null);
  ie === 0 && (ie = 5);
}
function Gt(e, t, n) {
  var r = H,
    o = Te.transition;
  try {
    (Te.transition = null), (H = 1), wp(e, t, n, r);
  } finally {
    (Te.transition = o), (H = r);
  }
  return null;
}
function wp(e, t, n, r) {
  do Pn();
  while (Et !== null);
  if (z & 6) throw Error(N(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(N(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (eg(e, i),
    e === se && ((ne = se = null), (ue = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      br ||
      ((br = !0),
      Id(ko, function () {
        return Pn(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Te.transition), (Te.transition = null);
    var l = H;
    H = 1;
    var s = z;
    (z |= 4),
      (Ms.current = null),
      pp(e, n),
      kd(n, e),
      Ag(yl),
      (No = !!vl),
      (yl = vl = null),
      (e.current = n),
      hp(n),
      Kf(),
      (z = s),
      (H = l),
      (Te.transition = i);
  } else e.current = n;
  if (
    (br && ((br = !1), (Et = e), (Uo = o)),
    (i = e.pendingLanes),
    i === 0 && (Ot = null),
    Yf(n.stateNode),
    Ee(e, te()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Ho) throw ((Ho = !1), (e = zl), (zl = null), e);
  return (
    Uo & 1 && e.tag !== 0 && Pn(),
    (i = e.pendingLanes),
    i & 1 ? (e === Vl ? ar++ : ((ar = 0), (Vl = e))) : (ar = 0),
    At(),
    null
  );
}
function Pn() {
  if (Et !== null) {
    var e = cc(Uo),
      t = Te.transition,
      n = H;
    try {
      if (((Te.transition = null), (H = 16 > e ? 16 : e), Et === null))
        var r = !1;
      else {
        if (((e = Et), (Et = null), (Uo = 0), z & 6)) throw Error(N(331));
        var o = z;
        for (z |= 4, $ = e.current; $ !== null; ) {
          var i = $,
            l = i.child;
          if ($.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var u = s[a];
                for ($ = u; $ !== null; ) {
                  var c = $;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      lr(8, c, i);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), ($ = f);
                  else
                    for (; $ !== null; ) {
                      c = $;
                      var d = c.sibling,
                        p = c.return;
                      if ((xd(c), c === u)) {
                        $ = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = p), ($ = d);
                        break;
                      }
                      $ = p;
                    }
                }
              }
              var v = i.alternate;
              if (v !== null) {
                var y = v.child;
                if (y !== null) {
                  v.child = null;
                  do {
                    var C = y.sibling;
                    (y.sibling = null), (y = C);
                  } while (y !== null);
                }
              }
              $ = i;
            }
          }
          if (i.subtreeFlags & 2064 && l !== null) (l.return = i), ($ = l);
          else
            e: for (; $ !== null; ) {
              if (((i = $), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    lr(9, i, i.return);
                }
              var h = i.sibling;
              if (h !== null) {
                (h.return = i.return), ($ = h);
                break e;
              }
              $ = i.return;
            }
        }
        var g = e.current;
        for ($ = g; $ !== null; ) {
          l = $;
          var m = l.child;
          if (l.subtreeFlags & 2064 && m !== null) (m.return = l), ($ = m);
          else
            e: for (l = g; $ !== null; ) {
              if (((s = $), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ii(9, s);
                  }
                } catch (x) {
                  b(s, s.return, x);
                }
              if (s === l) {
                $ = null;
                break e;
              }
              var w = s.sibling;
              if (w !== null) {
                (w.return = s.return), ($ = w);
                break e;
              }
              $ = s.return;
            }
        }
        if (
          ((z = o), At(), be && typeof be.onPostCommitFiberRoot == "function")
        )
          try {
            be.onPostCommitFiberRoot(qo, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (H = n), (Te.transition = t);
    }
  }
  return !1;
}
function ou(e, t, n) {
  (t = In(n, t)),
    (t = cd(e, t, 1)),
    (e = Ft(e, t, 1)),
    (t = ye()),
    e !== null && (Or(e, 1, t), Ee(e, t));
}
function b(e, t, n) {
  if (e.tag === 3) ou(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        ou(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Ot === null || !Ot.has(r)))
        ) {
          (e = In(n, e)),
            (e = dd(t, e, 1)),
            (t = Ft(t, e, 1)),
            (e = ye()),
            t !== null && (Or(t, 1, e), Ee(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function xp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ye()),
    (e.pingedLanes |= e.suspendedLanes & n),
    se === e &&
      (ue & n) === n &&
      (ie === 4 || (ie === 3 && (ue & 130023424) === ue && 500 > te() - Ts)
        ? Xt(e, 0)
        : (js |= n)),
    Ee(e, t);
}
function Fd(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Br), (Br <<= 1), !(Br & 130023424) && (Br = 4194304))
      : (t = 1));
  var n = ye();
  (e = gt(e, t)), e !== null && (Or(e, t, n), Ee(e, n));
}
function Cp(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Fd(e, n);
}
function Rp(e, t) {
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
      throw Error(N(314));
  }
  r !== null && r.delete(t), Fd(e, n);
}
var Od;
Od = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Re.current) Ce = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ce = !1), cp(e, t, n);
      Ce = !!(e.flags & 131072);
    }
  else (Ce = !1), Y && t.flags & 1048576 && jc(t, Io, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      mo(e, t), (e = t.pendingProps);
      var o = Ln(t, he.current);
      Nn(t, n), (o = $s(null, t, r, e, o, n));
      var i = Fs();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ke(r) ? ((i = !0), Fo(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Es(t),
            (o.updater = oi),
            (t.stateNode = o),
            (o._reactInternals = t),
            Pl(t, r, e, n),
            (t = $l(null, t, r, !0, i, n)))
          : ((t.tag = 0), Y && i && ys(t), ve(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (mo(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = Ep(r)),
          (e = He(r, e)),
          o)
        ) {
          case 0:
            t = Ll(null, t, r, e, n);
            break e;
          case 1:
            t = Ya(null, t, r, e, n);
            break e;
          case 11:
            t = Wa(null, t, r, e, n);
            break e;
          case 14:
            t = Qa(null, t, r, He(r.type, e), n);
            break e;
        }
        throw Error(N(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : He(r, o)),
        Ll(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : He(r, o)),
        Ya(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((hd(t), e === null)) throw Error(N(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          Uc(e, t),
          jo(t, r, null, n);
        var l = t.memoizedState;
        if (((r = l.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = In(Error(N(423)), t)), (t = Xa(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = In(Error(N(424)), t)), (t = Xa(e, t, r, n, o));
            break e;
          } else
            for (
              Pe = $t(t.stateNode.containerInfo.firstChild),
                _e = t,
                Y = !0,
                Be = null,
                n = Ac(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if (($n(), r === o)) {
            t = pt(e, t, n);
            break e;
          }
          ve(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Bc(t),
        e === null && kl(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (l = o.children),
        Sl(r, o) ? (l = null) : i !== null && Sl(r, i) && (t.flags |= 32),
        pd(e, t),
        ve(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && kl(t), null;
    case 13:
      return md(e, t, n);
    case 4:
      return (
        Ns(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Fn(t, null, r, n)) : ve(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : He(r, o)),
        Wa(e, t, r, o, n)
      );
    case 7:
      return ve(e, t, t.pendingProps, n), t.child;
    case 8:
      return ve(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ve(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (l = o.value),
          G(Do, r._currentValue),
          (r._currentValue = l),
          i !== null)
        )
          if (Qe(i.value, l)) {
            if (i.children === o.children && !Re.current) {
              t = pt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var s = i.dependencies;
              if (s !== null) {
                l = i.child;
                for (var a = s.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (i.tag === 1) {
                      (a = ct(-1, n & -n)), (a.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (a.next = a)
                          : ((a.next = c.next), (c.next = a)),
                          (u.pending = a);
                      }
                    }
                    (i.lanes |= n),
                      (a = i.alternate),
                      a !== null && (a.lanes |= n),
                      El(i.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (i.tag === 10) l = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((l = i.return), l === null)) throw Error(N(341));
                (l.lanes |= n),
                  (s = l.alternate),
                  s !== null && (s.lanes |= n),
                  El(l, n, t),
                  (l = i.sibling);
              } else l = i.child;
              if (l !== null) l.return = i;
              else
                for (l = i; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((i = l.sibling), i !== null)) {
                    (i.return = l.return), (l = i);
                    break;
                  }
                  l = l.return;
                }
              i = l;
            }
        ve(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Nn(t, n),
        (o = ze(o)),
        (r = r(o)),
        (t.flags |= 1),
        ve(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = He(r, t.pendingProps)),
        (o = He(r.type, o)),
        Qa(e, t, r, o, n)
      );
    case 15:
      return fd(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : He(r, o)),
        mo(e, t),
        (t.tag = 1),
        ke(r) ? ((e = !0), Fo(t)) : (e = !1),
        Nn(t, n),
        ud(t, r, o),
        Pl(t, r, o, n),
        $l(null, t, r, !0, e, n)
      );
    case 19:
      return vd(e, t, n);
    case 22:
      return gd(e, t, n);
  }
  throw Error(N(156, t.tag));
};
function Id(e, t) {
  return lc(e, t);
}
function kp(e, t, n, r) {
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
function je(e, t, n, r) {
  return new kp(e, t, n, r);
}
function Hs(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Ep(e) {
  if (typeof e == "function") return Hs(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ls)) return 11;
    if (e === ss) return 14;
  }
  return 2;
}
function Dt(e, t) {
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
function So(e, t, n, r, o, i) {
  var l = 2;
  if (((r = e), typeof e == "function")) Hs(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case dn:
        return Jt(n.children, o, i, t);
      case is:
        (l = 8), (o |= 8);
        break;
      case qi:
        return (
          (e = je(12, n, t, o | 2)), (e.elementType = qi), (e.lanes = i), e
        );
      case Zi:
        return (e = je(13, n, t, o)), (e.elementType = Zi), (e.lanes = i), e;
      case bi:
        return (e = je(19, n, t, o)), (e.elementType = bi), (e.lanes = i), e;
      case Bu:
        return si(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Hu:
              l = 10;
              break e;
            case Uu:
              l = 9;
              break e;
            case ls:
              l = 11;
              break e;
            case ss:
              l = 14;
              break e;
            case St:
              (l = 16), (r = null);
              break e;
          }
        throw Error(N(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = je(l, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Jt(e, t, n, r) {
  return (e = je(7, e, r, t)), (e.lanes = n), e;
}
function si(e, t, n, r) {
  return (
    (e = je(22, e, r, t)),
    (e.elementType = Bu),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Vi(e, t, n) {
  return (e = je(6, e, null, t)), (e.lanes = n), e;
}
function Ai(e, t, n) {
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
function Np(e, t, n, r, o) {
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
    (this.eventTimes = wi(0)),
    (this.expirationTimes = wi(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = wi(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Us(e, t, n, r, o, i, l, s, a) {
  return (
    (e = new Np(e, t, n, s, a)),
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
    Es(i),
    e
  );
}
function Pp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: cn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Dd(e) {
  if (!e) return jt;
  e = e._reactInternals;
  e: {
    if (on(e) !== e || e.tag !== 1) throw Error(N(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ke(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(N(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ke(n)) return Dc(e, n, t);
  }
  return t;
}
function Md(e, t, n, r, o, i, l, s, a) {
  return (
    (e = Us(n, r, !0, e, o, i, l, s, a)),
    (e.context = Dd(null)),
    (n = e.current),
    (r = ye()),
    (o = It(n)),
    (i = ct(r, o)),
    (i.callback = t ?? null),
    Ft(n, i, o),
    (e.current.lanes = o),
    Or(e, o, r),
    Ee(e, r),
    e
  );
}
function ai(e, t, n, r) {
  var o = t.current,
    i = ye(),
    l = It(o);
  return (
    (n = Dd(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = ct(i, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Ft(o, t, l)),
    e !== null && (Ke(e, o, l, i), go(e, o, l)),
    l
  );
}
function Go(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function iu(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Bs(e, t) {
  iu(e, t), (e = e.alternate) && iu(e, t);
}
function _p() {
  return null;
}
var jd =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Gs(e) {
  this._internalRoot = e;
}
ui.prototype.render = Gs.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(N(409));
  ai(e, t, null, null);
};
ui.prototype.unmount = Gs.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    nn(function () {
      ai(null, e, null, null);
    }),
      (t[ft] = null);
  }
};
function ui(e) {
  this._internalRoot = e;
}
ui.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = gc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < xt.length && t !== 0 && t < xt[n].priority; n++);
    xt.splice(n, 0, e), n === 0 && hc(e);
  }
};
function Ks(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ci(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function lu() {}
function Lp(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = Go(l);
        i.call(u);
      };
    }
    var l = Md(t, r, e, 0, null, !1, !1, "", lu);
    return (
      (e._reactRootContainer = l),
      (e[ft] = l.current),
      wr(e.nodeType === 8 ? e.parentNode : e),
      nn(),
      l
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var u = Go(a);
      s.call(u);
    };
  }
  var a = Us(e, 0, !1, null, null, !1, !1, "", lu);
  return (
    (e._reactRootContainer = a),
    (e[ft] = a.current),
    wr(e.nodeType === 8 ? e.parentNode : e),
    nn(function () {
      ai(t, a, n, r);
    }),
    a
  );
}
function di(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == "function") {
      var s = o;
      o = function () {
        var a = Go(l);
        s.call(a);
      };
    }
    ai(t, l, e, o);
  } else l = Lp(n, t, e, o, r);
  return Go(l);
}
dc = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Zn(t.pendingLanes);
        n !== 0 &&
          (cs(t, n | 1), Ee(t, te()), !(z & 6) && ((Dn = te() + 500), At()));
      }
      break;
    case 13:
      nn(function () {
        var r = gt(e, 1);
        if (r !== null) {
          var o = ye();
          Ke(r, e, 1, o);
        }
      }),
        Bs(e, 1);
  }
};
ds = function (e) {
  if (e.tag === 13) {
    var t = gt(e, 134217728);
    if (t !== null) {
      var n = ye();
      Ke(t, e, 134217728, n);
    }
    Bs(e, 134217728);
  }
};
fc = function (e) {
  if (e.tag === 13) {
    var t = It(e),
      n = gt(e, t);
    if (n !== null) {
      var r = ye();
      Ke(n, e, t, r);
    }
    Bs(e, t);
  }
};
gc = function () {
  return H;
};
pc = function (e, t) {
  var n = H;
  try {
    return (H = e), t();
  } finally {
    H = n;
  }
};
ul = function (e, t, n) {
  switch (t) {
    case "input":
      if ((nl(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var o = ti(r);
            if (!o) throw Error(N(90));
            Ku(r), nl(r, o);
          }
        }
      }
      break;
    case "textarea":
      Qu(e, n);
      break;
    case "select":
      (t = n.value), t != null && Cn(e, !!n.multiple, t, !1);
  }
};
ec = zs;
tc = nn;
var $p = { usingClientEntryPoint: !1, Events: [Dr, hn, ti, Zu, bu, zs] },
  Qn = {
    findFiberByHostInstance: Kt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Fp = {
    bundleType: Qn.bundleType,
    version: Qn.version,
    rendererPackageName: Qn.rendererPackageName,
    rendererConfig: Qn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: mt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = oc(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Qn.findFiberByHostInstance || _p,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var eo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!eo.isDisabled && eo.supportsFiber)
    try {
      (qo = eo.inject(Fp)), (be = eo);
    } catch {}
}
Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $p;
Fe.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ks(t)) throw Error(N(200));
  return Pp(e, t, null, n);
};
Fe.createRoot = function (e, t) {
  if (!Ks(e)) throw Error(N(299));
  var n = !1,
    r = "",
    o = jd;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Us(e, 1, !1, null, null, n, !1, r, o)),
    (e[ft] = t.current),
    wr(e.nodeType === 8 ? e.parentNode : e),
    new Gs(t)
  );
};
Fe.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(N(188))
      : ((e = Object.keys(e).join(",")), Error(N(268, e)));
  return (e = oc(t)), (e = e === null ? null : e.stateNode), e;
};
Fe.flushSync = function (e) {
  return nn(e);
};
Fe.hydrate = function (e, t, n) {
  if (!ci(t)) throw Error(N(200));
  return di(null, e, t, !0, n);
};
Fe.hydrateRoot = function (e, t, n) {
  if (!Ks(e)) throw Error(N(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    l = jd;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = Md(t, null, e, 1, n ?? null, o, !1, i, l)),
    (e[ft] = t.current),
    wr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new ui(t);
};
Fe.render = function (e, t, n) {
  if (!ci(t)) throw Error(N(200));
  return di(null, e, t, !1, n);
};
Fe.unmountComponentAtNode = function (e) {
  if (!ci(e)) throw Error(N(40));
  return e._reactRootContainer
    ? (nn(function () {
        di(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[ft] = null);
        });
      }),
      !0)
    : !1;
};
Fe.unstable_batchedUpdates = zs;
Fe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!ci(n)) throw Error(N(200));
  if (e == null || e._reactInternals === void 0) throw Error(N(38));
  return di(e, t, n, !1, r);
};
Fe.version = "18.3.1-next-f1338f8080-20240426";
function Td() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Td);
    } catch (e) {
      console.error(e);
    }
}
Td(), (Tu.exports = Fe);
var Op = Tu.exports,
  zd,
  su = Op;
(zd = su.createRoot), su.hydrateRoot;
function Ip() {
  if (console && console.warn) {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    qt(t[0]) && (t[0] = `react-i18next:: ${t[0]}`), console.warn(...t);
  }
}
const au = {};
function Ul() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  (qt(t[0]) && au[t[0]]) || (qt(t[0]) && (au[t[0]] = new Date()), Ip(...t));
}
const Vd = (e, t) => () => {
    if (e.isInitialized) t();
    else {
      const n = () => {
        setTimeout(() => {
          e.off("initialized", n);
        }, 0),
          t();
      };
      e.on("initialized", n);
    }
  },
  uu = (e, t, n) => {
    e.loadNamespaces(t, Vd(e, n));
  },
  cu = (e, t, n, r) => {
    qt(n) && (n = [n]),
      n.forEach((o) => {
        e.options.ns.indexOf(o) < 0 && e.options.ns.push(o);
      }),
      e.loadLanguages(t, Vd(e, r));
  },
  Dp = function (e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const r = t.languages[0],
      o = t.options ? t.options.fallbackLng : !1,
      i = t.languages[t.languages.length - 1];
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
          (l(r, e) && (!o || l(i, e)))
        );
  },
  Mp = function (e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return !t.languages || !t.languages.length
      ? (Ul("i18n.languages were undefined or empty", t.languages), !0)
      : t.options.ignoreJSONStructure !== void 0
      ? t.hasLoadedNamespace(e, {
          lng: n.lng,
          precheck: (o, i) => {
            if (
              n.bindI18n &&
              n.bindI18n.indexOf("languageChanging") > -1 &&
              o.services.backendConnector.backend &&
              o.isLanguageChangingTo &&
              !i(o.isLanguageChangingTo, e)
            )
              return !1;
          },
        })
      : Dp(e, t, n);
  },
  qt = (e) => typeof e == "string",
  jp = (e) => typeof e == "object" && e !== null,
  Tp =
    /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
  zp = {
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
  Vp = (e) => zp[e],
  Ap = (e) => e.replace(Tp, Vp);
let Bl = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: Ap,
};
const Hp = function () {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Bl = { ...Bl, ...e };
  },
  Up = () => Bl;
let Ad;
const Bp = (e) => {
    Ad = e;
  },
  Gp = () => Ad,
  Kp = {
    type: "3rdParty",
    init(e) {
      Hp(e.options.react), Bp(e);
    },
  },
  Wp = P.createContext();
class Qp {
  constructor() {
    Zs(this, "getUsedNamespaces", () => Object.keys(this.usedNamespaces));
    this.usedNamespaces = {};
  }
  addUsedNamespaces(t) {
    t.forEach((n) => {
      this.usedNamespaces[n] || (this.usedNamespaces[n] = !0);
    });
  }
}
const Yp = (e, t) => {
    const n = P.useRef();
    return (
      P.useEffect(() => {
        n.current = e;
      }, [e, t]),
      n.current
    );
  },
  Hd = (e, t, n, r) => e.getFixedT(t, n, r),
  Xp = (e, t, n, r) => P.useCallback(Hd(e, t, n, r), [e, t, n, r]),
  zn = function (e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const { i18n: n } = t,
      { i18n: r, defaultNS: o } = P.useContext(Wp) || {},
      i = n || r || Gp();
    if ((i && !i.reportNamespaces && (i.reportNamespaces = new Qp()), !i)) {
      Ul(
        "You will need to pass in an i18next instance by using initReactI18next"
      );
      const w = (k, E) =>
          qt(E)
            ? E
            : jp(E) && qt(E.defaultValue)
            ? E.defaultValue
            : Array.isArray(k)
            ? k[k.length - 1]
            : k,
        x = [w, {}, !1];
      return (x.t = w), (x.i18n = {}), (x.ready = !1), x;
    }
    i.options.react &&
      i.options.react.wait !== void 0 &&
      Ul(
        "It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour."
      );
    const l = { ...Up(), ...i.options.react, ...t },
      { useSuspense: s, keyPrefix: a } = l;
    let u = o || (i.options && i.options.defaultNS);
    (u = qt(u) ? [u] : u || ["translation"]),
      i.reportNamespaces.addUsedNamespaces &&
        i.reportNamespaces.addUsedNamespaces(u);
    const c =
        (i.isInitialized || i.initializedStoreOnce) &&
        u.every((w) => Mp(w, i, l)),
      f = Xp(i, t.lng || null, l.nsMode === "fallback" ? u : u[0], a),
      d = () => f,
      p = () => Hd(i, t.lng || null, l.nsMode === "fallback" ? u : u[0], a),
      [v, y] = P.useState(d);
    let C = u.join();
    t.lng && (C = `${t.lng}${C}`);
    const h = Yp(C),
      g = P.useRef(!0);
    P.useEffect(() => {
      const { bindI18n: w, bindI18nStore: x } = l;
      (g.current = !0),
        !c &&
          !s &&
          (t.lng
            ? cu(i, t.lng, u, () => {
                g.current && y(p);
              })
            : uu(i, u, () => {
                g.current && y(p);
              })),
        c && h && h !== C && g.current && y(p);
      const k = () => {
        g.current && y(p);
      };
      return (
        w && i && i.on(w, k),
        x && i && i.store.on(x, k),
        () => {
          (g.current = !1),
            w && i && w.split(" ").forEach((E) => i.off(E, k)),
            x && i && x.split(" ").forEach((E) => i.store.off(E, k));
        }
      );
    }, [i, C]),
      P.useEffect(() => {
        g.current && c && y(d);
      }, [i, a, c]);
    const m = [v, i, c];
    if (((m.t = v), (m.i18n = i), (m.ready = c), c || (!c && !s))) return m;
    throw new Promise((w) => {
      t.lng ? cu(i, t.lng, u, () => w()) : uu(i, u, () => w());
    });
  };
let Jp = { data: "" },
  qp = (e) =>
    typeof window == "object"
      ? (
          (e ? e.querySelector("#_goober") : window._goober) ||
          Object.assign(
            (e || document.head).appendChild(document.createElement("style")),
            { innerHTML: " ", id: "_goober" }
          )
        ).firstChild
      : e || Jp,
  Zp = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
  bp = /\/\*[^]*?\*\/|  +/g,
  du = /\n+/g,
  Rt = (e, t) => {
    let n = "",
      r = "",
      o = "";
    for (let i in e) {
      let l = e[i];
      i[0] == "@"
        ? i[1] == "i"
          ? (n = i + " " + l + ";")
          : (r +=
              i[1] == "f"
                ? Rt(l, i)
                : i + "{" + Rt(l, i[1] == "k" ? "" : t) + "}")
        : typeof l == "object"
        ? (r += Rt(
            l,
            t
              ? t.replace(/([^,])+/g, (s) =>
                  i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g, (a) =>
                    /&/.test(a) ? a.replace(/&/g, s) : s ? s + " " + a : a
                  )
                )
              : i
          ))
        : l != null &&
          ((i = /^--/.test(i) ? i : i.replace(/[A-Z]/g, "-$&").toLowerCase()),
          (o += Rt.p ? Rt.p(i, l) : i + ":" + l + ";"));
    }
    return n + (t && o ? t + "{" + o + "}" : o) + r;
  },
  ot = {},
  Ud = (e) => {
    if (typeof e == "object") {
      let t = "";
      for (let n in e) t += n + Ud(e[n]);
      return t;
    }
    return e;
  },
  eh = (e, t, n, r, o) => {
    let i = Ud(e),
      l =
        ot[i] ||
        (ot[i] = ((a) => {
          let u = 0,
            c = 11;
          for (; u < a.length; ) c = (101 * c + a.charCodeAt(u++)) >>> 0;
          return "go" + c;
        })(i));
    if (!ot[l]) {
      let a =
        i !== e
          ? e
          : ((u) => {
              let c,
                f,
                d = [{}];
              for (; (c = Zp.exec(u.replace(bp, ""))); )
                c[4]
                  ? d.shift()
                  : c[3]
                  ? ((f = c[3].replace(du, " ").trim()),
                    d.unshift((d[0][f] = d[0][f] || {})))
                  : (d[0][c[1]] = c[2].replace(du, " ").trim());
              return d[0];
            })(e);
      ot[l] = Rt(o ? { ["@keyframes " + l]: a } : a, n ? "" : "." + l);
    }
    let s = n && ot.g ? ot.g : null;
    return (
      n && (ot.g = ot[l]),
      ((a, u, c, f) => {
        f
          ? (u.data = u.data.replace(f, a))
          : u.data.indexOf(a) === -1 && (u.data = c ? a + u.data : u.data + a);
      })(ot[l], t, r, s),
      l
    );
  },
  th = (e, t, n) =>
    e.reduce((r, o, i) => {
      let l = t[i];
      if (l && l.call) {
        let s = l(n),
          a = (s && s.props && s.props.className) || (/^go/.test(s) && s);
        l = a
          ? "." + a
          : s && typeof s == "object"
          ? s.props
            ? ""
            : Rt(s, "")
          : s === !1
          ? ""
          : s;
      }
      return r + o + (l ?? "");
    }, "");
function fi(e) {
  let t = this || {},
    n = e.call ? e(t.p) : e;
  return eh(
    n.unshift
      ? n.raw
        ? th(n, [].slice.call(arguments, 1), t.p)
        : n.reduce((r, o) => Object.assign(r, o && o.call ? o(t.p) : o), {})
      : n,
    qp(t.target),
    t.g,
    t.o,
    t.k
  );
}
let Bd, Gl, Kl;
fi.bind({ g: 1 });
let ht = fi.bind({ k: 1 });
function nh(e, t, n, r) {
  (Rt.p = t), (Bd = e), (Gl = n), (Kl = r);
}
function Ht(e, t) {
  let n = this || {};
  return function () {
    let r = arguments;
    function o(i, l) {
      let s = Object.assign({}, i),
        a = s.className || o.className;
      (n.p = Object.assign({ theme: Gl && Gl() }, s)),
        (n.o = / *go\d+/.test(a)),
        (s.className = fi.apply(n, r) + (a ? " " + a : ""));
      let u = e;
      return (
        e[0] && ((u = s.as || e), delete s.as), Kl && u[0] && Kl(s), Bd(u, s)
      );
    }
    return o;
  };
}
var rh = (e) => typeof e == "function",
  Ko = (e, t) => (rh(e) ? e(t) : e),
  oh = (() => {
    let e = 0;
    return () => (++e).toString();
  })(),
  Gd = (() => {
    let e;
    return () => {
      if (e === void 0 && typeof window < "u") {
        let t = matchMedia("(prefers-reduced-motion: reduce)");
        e = !t || t.matches;
      }
      return e;
    };
  })(),
  ih = 20,
  Kd = (e, t) => {
    switch (t.type) {
      case 0:
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, ih) };
      case 1:
        return {
          ...e,
          toasts: e.toasts.map((i) =>
            i.id === t.toast.id ? { ...i, ...t.toast } : i
          ),
        };
      case 2:
        let { toast: n } = t;
        return Kd(e, {
          type: e.toasts.find((i) => i.id === n.id) ? 1 : 0,
          toast: n,
        });
      case 3:
        let { toastId: r } = t;
        return {
          ...e,
          toasts: e.toasts.map((i) =>
            i.id === r || r === void 0
              ? { ...i, dismissed: !0, visible: !1 }
              : i
          ),
        };
      case 4:
        return t.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((i) => i.id !== t.toastId) };
      case 5:
        return { ...e, pausedAt: t.time };
      case 6:
        let o = t.time - (e.pausedAt || 0);
        return {
          ...e,
          pausedAt: void 0,
          toasts: e.toasts.map((i) => ({
            ...i,
            pauseDuration: i.pauseDuration + o,
          })),
        };
    }
  },
  wo = [],
  Yt = { toasts: [], pausedAt: void 0 },
  ln = (e) => {
    (Yt = Kd(Yt, e)),
      wo.forEach((t) => {
        t(Yt);
      });
  },
  lh = { blank: 4e3, error: 4e3, success: 2e3, loading: 1 / 0, custom: 4e3 },
  sh = (e = {}) => {
    let [t, n] = P.useState(Yt),
      r = P.useRef(Yt);
    P.useEffect(
      () => (
        r.current !== Yt && n(Yt),
        wo.push(n),
        () => {
          let i = wo.indexOf(n);
          i > -1 && wo.splice(i, 1);
        }
      ),
      []
    );
    let o = t.toasts.map((i) => {
      var l, s, a;
      return {
        ...e,
        ...e[i.type],
        ...i,
        removeDelay:
          i.removeDelay ||
          ((l = e[i.type]) == null ? void 0 : l.removeDelay) ||
          (e == null ? void 0 : e.removeDelay),
        duration:
          i.duration ||
          ((s = e[i.type]) == null ? void 0 : s.duration) ||
          (e == null ? void 0 : e.duration) ||
          lh[i.type],
        style: {
          ...e.style,
          ...((a = e[i.type]) == null ? void 0 : a.style),
          ...i.style,
        },
      };
    });
    return { ...t, toasts: o };
  },
  ah = (e, t = "blank", n) => ({
    createdAt: Date.now(),
    visible: !0,
    dismissed: !1,
    type: t,
    ariaProps: { role: "status", "aria-live": "polite" },
    message: e,
    pauseDuration: 0,
    ...n,
    id: (n == null ? void 0 : n.id) || oh(),
  }),
  jr = (e) => (t, n) => {
    let r = ah(t, e, n);
    return ln({ type: 2, toast: r }), r.id;
  },
  ee = (e, t) => jr("blank")(e, t);
ee.error = jr("error");
ee.success = jr("success");
ee.loading = jr("loading");
ee.custom = jr("custom");
ee.dismiss = (e) => {
  ln({ type: 3, toastId: e });
};
ee.remove = (e) => ln({ type: 4, toastId: e });
ee.promise = (e, t, n) => {
  let r = ee.loading(t.loading, { ...n, ...(n == null ? void 0 : n.loading) });
  return (
    typeof e == "function" && (e = e()),
    e
      .then((o) => {
        let i = t.success ? Ko(t.success, o) : void 0;
        return (
          i
            ? ee.success(i, {
                id: r,
                ...n,
                ...(n == null ? void 0 : n.success),
              })
            : ee.dismiss(r),
          o
        );
      })
      .catch((o) => {
        let i = t.error ? Ko(t.error, o) : void 0;
        i
          ? ee.error(i, { id: r, ...n, ...(n == null ? void 0 : n.error) })
          : ee.dismiss(r);
      }),
    e
  );
};
var uh = (e, t) => {
    ln({ type: 1, toast: { id: e, height: t } });
  },
  ch = () => {
    ln({ type: 5, time: Date.now() });
  },
  ur = new Map(),
  dh = 1e3,
  fh = (e, t = dh) => {
    if (ur.has(e)) return;
    let n = setTimeout(() => {
      ur.delete(e), ln({ type: 4, toastId: e });
    }, t);
    ur.set(e, n);
  },
  gh = (e) => {
    let { toasts: t, pausedAt: n } = sh(e);
    P.useEffect(() => {
      if (n) return;
      let i = Date.now(),
        l = t.map((s) => {
          if (s.duration === 1 / 0) return;
          let a = (s.duration || 0) + s.pauseDuration - (i - s.createdAt);
          if (a < 0) {
            s.visible && ee.dismiss(s.id);
            return;
          }
          return setTimeout(() => ee.dismiss(s.id), a);
        });
      return () => {
        l.forEach((s) => s && clearTimeout(s));
      };
    }, [t, n]);
    let r = P.useCallback(() => {
        n && ln({ type: 6, time: Date.now() });
      }, [n]),
      o = P.useCallback(
        (i, l) => {
          let {
              reverseOrder: s = !1,
              gutter: a = 8,
              defaultPosition: u,
            } = l || {},
            c = t.filter(
              (p) => (p.position || u) === (i.position || u) && p.height
            ),
            f = c.findIndex((p) => p.id === i.id),
            d = c.filter((p, v) => v < f && p.visible).length;
          return c
            .filter((p) => p.visible)
            .slice(...(s ? [d + 1] : [0, d]))
            .reduce((p, v) => p + (v.height || 0) + a, 0);
        },
        [t]
      );
    return (
      P.useEffect(() => {
        t.forEach((i) => {
          if (i.dismissed) fh(i.id, i.removeDelay);
          else {
            let l = ur.get(i.id);
            l && (clearTimeout(l), ur.delete(i.id));
          }
        });
      }, [t]),
      {
        toasts: t,
        handlers: {
          updateHeight: uh,
          startPause: ch,
          endPause: r,
          calculateOffset: o,
        },
      }
    );
  },
  ph = ht`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,
  hh = ht`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  mh = ht`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,
  vh = Ht("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ph} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${hh} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${(e) => e.secondary || "#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${mh} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,
  yh = ht`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,
  Sh = Ht("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(e) => e.secondary || "#e0e0e0"};
  border-right-color: ${(e) => e.primary || "#616161"};
  animation: ${yh} 1s linear infinite;
`,
  wh = ht`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,
  xh = ht`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,
  Ch = Ht("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${wh} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${xh} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${(e) => e.secondary || "#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,
  Rh = Ht("div")`
  position: absolute;
`,
  kh = Ht("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,
  Eh = ht`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  Nh = Ht("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Eh} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,
  Ph = ({ toast: e }) => {
    let { icon: t, type: n, iconTheme: r } = e;
    return t !== void 0
      ? typeof t == "string"
        ? P.createElement(Nh, null, t)
        : t
      : n === "blank"
      ? null
      : P.createElement(
          kh,
          null,
          P.createElement(Sh, { ...r }),
          n !== "loading" &&
            P.createElement(
              Rh,
              null,
              n === "error"
                ? P.createElement(vh, { ...r })
                : P.createElement(Ch, { ...r })
            )
        );
  },
  _h = (e) => `
0% {transform: translate3d(0,${e * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,
  Lh = (e) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e * -150}%,-1px) scale(.6); opacity:0;}
`,
  $h = "0%{opacity:0;} 100%{opacity:1;}",
  Fh = "0%{opacity:1;} 100%{opacity:0;}",
  Oh = Ht("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,
  Ih = Ht("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,
  Dh = (e, t) => {
    let n = e.includes("top") ? 1 : -1,
      [r, o] = Gd() ? [$h, Fh] : [_h(n), Lh(n)];
    return {
      animation: t
        ? `${ht(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`
        : `${ht(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`,
    };
  },
  Mh = P.memo(({ toast: e, position: t, style: n, children: r }) => {
    let o = e.height
        ? Dh(e.position || t || "top-center", e.visible)
        : { opacity: 0 },
      i = P.createElement(Ph, { toast: e }),
      l = P.createElement(Ih, { ...e.ariaProps }, Ko(e.message, e));
    return P.createElement(
      Oh,
      { className: e.className, style: { ...o, ...n, ...e.style } },
      typeof r == "function"
        ? r({ icon: i, message: l })
        : P.createElement(P.Fragment, null, i, l)
    );
  });
nh(P.createElement);
var jh = ({
    id: e,
    className: t,
    style: n,
    onHeightUpdate: r,
    children: o,
  }) => {
    let i = P.useCallback(
      (l) => {
        if (l) {
          let s = () => {
            let a = l.getBoundingClientRect().height;
            r(e, a);
          };
          s(),
            new MutationObserver(s).observe(l, {
              subtree: !0,
              childList: !0,
              characterData: !0,
            });
        }
      },
      [e, r]
    );
    return P.createElement("div", { ref: i, className: t, style: n }, o);
  },
  Th = (e, t) => {
    let n = e.includes("top"),
      r = n ? { top: 0 } : { bottom: 0 },
      o = e.includes("center")
        ? { justifyContent: "center" }
        : e.includes("right")
        ? { justifyContent: "flex-end" }
        : {};
    return {
      left: 0,
      right: 0,
      display: "flex",
      position: "absolute",
      transition: Gd() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)",
      transform: `translateY(${t * (n ? 1 : -1)}px)`,
      ...r,
      ...o,
    };
  },
  zh = fi`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,
  to = 16,
  Vh = ({
    reverseOrder: e,
    position: t = "top-center",
    toastOptions: n,
    gutter: r,
    children: o,
    containerStyle: i,
    containerClassName: l,
  }) => {
    let { toasts: s, handlers: a } = gh(n);
    return P.createElement(
      "div",
      {
        id: "_rht_toaster",
        style: {
          position: "fixed",
          zIndex: 9999,
          top: to,
          left: to,
          right: to,
          bottom: to,
          pointerEvents: "none",
          ...i,
        },
        className: l,
        onMouseEnter: a.startPause,
        onMouseLeave: a.endPause,
      },
      s.map((u) => {
        let c = u.position || t,
          f = a.calculateOffset(u, {
            reverseOrder: e,
            gutter: r,
            defaultPosition: t,
          }),
          d = Th(c, f);
        return P.createElement(
          jh,
          {
            id: u.id,
            key: u.id,
            onHeightUpdate: a.updateHeight,
            className: u.visible ? zh : "",
            style: d,
          },
          u.type === "custom"
            ? Ko(u.message, u)
            : o
            ? o(u)
            : P.createElement(Mh, { toast: u, position: c })
        );
      })
    );
  };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Ah = {
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
 */ const Hh = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  tt = (e, t) => {
    const n = P.forwardRef(
      (
        {
          color: r = "currentColor",
          size: o = 24,
          strokeWidth: i = 2,
          absoluteStrokeWidth: l,
          className: s = "",
          children: a,
          ...u
        },
        c
      ) =>
        P.createElement(
          "svg",
          {
            ref: c,
            ...Ah,
            width: o,
            height: o,
            stroke: r,
            strokeWidth: l ? (Number(i) * 24) / Number(o) : i,
            className: ["lucide", `lucide-${Hh(e)}`, s].join(" "),
            ...u,
          },
          [
            ...t.map(([f, d]) => P.createElement(f, d)),
            ...(Array.isArray(a) ? a : [a]),
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
 */ const Ws = tt("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Qs = tt("ChevronUp", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Uh = tt("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Bh = tt("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gh = tt("FileX", [
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
 */ const Kh = tt("Globe", [
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
 */ const Wh = tt("Layers", [
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
 */ const Qh = tt("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Yh = tt("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xh = tt("Table", [
    ["path", { d: "M12 3v18", key: "108xh3" }],
    [
      "rect",
      { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" },
    ],
    ["path", { d: "M3 9h18", key: "1pudct" }],
    ["path", { d: "M3 15h18", key: "5xshup" }],
  ]),
  Jh = {
    domain: "https://www.kutech.tw:4443",
    homepage: "https://www.kutech.tw:450",
  },
  qh = () => Jh.domain,
  Zh = async (e) => {
    const t = `${qh()}/api/session/login`;
    console.group("🔐 Login Request"),
      console.log("URL:", t),
      console.log("Request Payload:", {
        Data: { ID: e.ID, Password: "********" },
      });
    try {
      const n = await fetch(t, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ Data: e }),
        }),
        r = await n.json();
      if (
        (console.log("Response Status:", n.status),
        console.log(
          "Response Headers:",
          Object.fromEntries(n.headers.entries())
        ),
        console.log("Response Data:", {
          ...r,
          Data: r.Data ? { ...r.Data, Password: "********" } : null,
        }),
        r.Code !== 200)
      )
        throw (
          (console.error("Login Error:", r.Result),
          console.groupEnd(),
          new Error(r.Result))
        );
      return (
        console.log("Login Successful"),
        console.groupEnd(),
        sessionStorage.setItem("user_session", JSON.stringify(r.Data)),
        r
      );
    } catch (n) {
      throw (console.error("Login Failed:", n), console.groupEnd(), n);
    }
  },
  bh = () => {
    const e = sessionStorage.getItem("user_session");
    return console.log("Auth Check:", !!e), !!e;
  },
  em = () => {
    console.log("Logging out user"), sessionStorage.removeItem("user_session");
  },
  tm = () => {
    const e = sessionStorage.getItem("user_session");
    return e ? JSON.parse(e) : null;
  },
  nm = ({ onLanguageToggle: e }) => {
    const { t, i18n: n } = zn(),
      r = tm(),
      o = () => {
        em(), window.location.reload();
      };
    return S.jsx("nav", {
      className: "bg-transparent py-4 md:py-6 lg:py-8",
      children: S.jsx("div", {
        className: "mx-auto px-4 sm:px-6 lg:px-8",
        children: S.jsxs("div", {
          className: "flex justify-between items-center h-16",
          children: [
            S.jsxs("div", {
              className: "flex items-center",
              children: [
                S.jsxs("a", {
                  href: "../frontpage",
                  className:
                    "p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors",
                  children: [
                    S.jsx("span", { className: "sr-only", children: "Home" }),
                    S.jsx(Wh, { className: "w-7 h-7" }),
                  ],
                }),
                S.jsxs("div", {
                  className: "ml-4",
                  children: [
                    S.jsx("h1", {
                      className:
                        "text-2xl md:text-3xl font-semibold text-gray-800 mb-2",
                      children: t("Transaction Records"),
                    }),
                    r &&
                      S.jsxs("p", {
                        className: "text-base text-gray-600",
                        children: [r.Name, " - ", r.Employer],
                      }),
                  ],
                }),
              ],
            }),
            S.jsxs("div", {
              className: "flex items-center space-x-4",
              children: [
                S.jsxs("button", {
                  onClick: e,
                  className:
                    "inline-flex items-center px-3 py-2 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
                  children: [
                    S.jsx(Kh, { className: "h-5 w-5" }),
                    S.jsx("span", {
                      className: "hidden sm:ml-2 sm:inline",
                      children: n.language === "en" ? "English" : "繁體中文",
                    }),
                  ],
                }),
                S.jsxs("button", {
                  onClick: o,
                  className:
                    "inline-flex items-center px-3 py-2 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
                  children: [
                    S.jsx(Qh, { className: "h-5 w-5" }),
                    S.jsx("span", {
                      className: "hidden sm:ml-2 sm:inline",
                      children: t("Logout"),
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
  rm = ({
    stations: e,
    selectedStations: t,
    onStationToggle: n,
    forceCollapse: r = !1,
    onCollapseChange: o,
  }) => {
    const { t: i } = zn(),
      [l, s] = P.useState(!0);
    P.useEffect(() => {
      r && (s(!1), o && o(!1));
    }, [r, o]);
    const a = () => {
        t.length === e.length
          ? e.forEach((c) => n(c))
          : e.filter((c) => !t.includes(c.name)).forEach((c) => n(c));
      },
      u = () => {
        const c = !l;
        s(c), o && o(!c);
      };
    return S.jsxs("div", {
      className: "bg-white rounded-lg shadow-sm border mb-6 overflow-hidden",
      children: [
        S.jsxs("div", {
          className:
            "flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-gray-50 transition-colors duration-200 border-b border-gray-100",
          onClick: u,
          children: [
            S.jsxs("div", {
              className: "flex items-center space-x-3",
              children: [
                S.jsx(Xh, { className: "h-5 w-5 text-gray-600" }),
                S.jsxs("div", {
                  className: "flex items-end gap-2",
                  children: [
                    S.jsx("h2", {
                      className: "text-xl font-bold text-gray-900",
                      children: i("Dispensing Stations"),
                    }),
                    S.jsx("span", {
                      className: "text-sm text-gray-700",
                      children:
                        t.length === 0
                          ? `(${i("Please select dispensing stations")})`
                          : `(${i("Selected")} ${t.length} ${i("stations")})`,
                    }),
                  ],
                }),
              ],
            }),
            S.jsx("div", {
              className: "flex items-center space-x-2",
              children: l
                ? S.jsx(Qs, {
                    className:
                      "h-5 w-5 text-gray-500 transition-transform duration-200",
                  })
                : S.jsx(Ws, {
                    className:
                      "h-5 w-5 text-gray-500 transition-transform duration-200",
                  }),
            }),
          ],
        }),
        S.jsx("div", {
          className: `transition-all duration-300 ease-in-out overflow-hidden ${
            l ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`,
          children: S.jsxs("div", {
            className: "p-4 md:p-6",
            children: [
              S.jsx("div", {
                className: "pb-3",
                children: S.jsx("div", {
                  className: "flex items-center justify-end mb-2",
                  children: S.jsx("button", {
                    onClick: (c) => {
                      c.stopPropagation(), a();
                    },
                    className:
                      "px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
                    children:
                      t.length === e.length
                        ? i("Deselect All")
                        : i("Select All"),
                  }),
                }),
              }),
              S.jsx("div", {
                className:
                  "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4",
                children: e.map((c) =>
                  S.jsxs(
                    "button",
                    {
                      onClick: (f) => {
                        f.stopPropagation(), n(c);
                      },
                      className: `
                  relative px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200
                  ${
                    t.includes(c.name)
                      ? "bg-blue-600 text-white hover:bg-blue-700 border border-blue-600"
                      : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"
                  }`,
                      children: [
                        c.name,
                        S.jsx("div", {
                          className: `
                  absolute rounded-xl top-1/2 left-1/2 w-[calc(100%+10px)] h-[calc(100%+10px)] transform -translate-x-1/2 -translate-y-1/2
                  ${t.includes(c.name) ? "border-2 border-blue-600" : ""}`,
                        }),
                      ],
                    },
                    c.GUID
                  )
                ),
              }),
            ],
          }),
        }),
      ],
    });
  },
  om = [
    { name: "Operator", value: "OP" },
    { name: "Patient Name", value: "PAT" },
    { name: "Medical Record Number", value: "MRN" },
    { name: "Medication Bag Number", value: "MED_BAG_NUM" },
  ],
  im = () => {
    const e = new Date();
    return e.setDate(e.getDate() - 14), e.toISOString().split("T")[0];
  },
  lm = () => "00:00:00",
  sm = () => new Date().toISOString().split("T")[0],
  am = () => "23:59:59",
  um = ({
    onSearch: e,
    totalRecords: t = 0,
    drugFilterValue: n,
    onDrugFilterValueChange: r,
    filterType: o,
    filterValue: i,
    onFilterTypeChange: l,
    onFilterValueChange: s,
    onExport: a,
    forceCollapseTimeRange: u = !1,
    onTimeRangeCollapseChange: c,
  }) => {
    const { t: f } = zn(),
      [d, p] = P.useState("op_time"),
      [v, y] = P.useState(im()),
      [C, h] = P.useState(lm()),
      [g, m] = P.useState(sm()),
      [w, x] = P.useState(am()),
      [k, E] = P.useState(!0);
    P.useEffect(() => {
      u && (E(!1), c && c(!1));
    }, [u, c]);
    const L = () => {
        const _ = `${v} ${C}`,
          U = `${g} ${w}`;
        e({
          timeType: d,
          startDate: _,
          endDate: U,
          filterType: "",
          searchValue: "",
        });
      },
      V = () => {
        const _ = !k;
        E(_), c && c(!_);
      };
    return S.jsxs("div", {
      className: "space-y-6",
      children: [
        S.jsxs("div", {
          className: "bg-white rounded-lg shadow-sm border overflow-hidden",
          children: [
            S.jsxs("div", {
              className:
                "flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-gray-50 transition-colors duration-200 border-b border-gray-100",
              onClick: V,
              children: [
                S.jsxs("div", {
                  className: "flex items-center space-x-3",
                  children: [
                    S.jsx(Uh, { className: "h-5 w-5 text-gray-600" }),
                    S.jsx("h3", {
                      className: "text-lg font-semibold text-gray-900",
                      children: f("Time Range"),
                    }),
                  ],
                }),
                S.jsx("div", {
                  className: "flex items-center space-x-2",
                  children: k
                    ? S.jsx(Qs, {
                        className:
                          "h-5 w-5 text-gray-500 transition-transform duration-200",
                      })
                    : S.jsx(Ws, {
                        className:
                          "h-5 w-5 text-gray-500 transition-transform duration-200",
                      }),
                }),
              ],
            }),
            S.jsx("div", {
              className: `transition-all duration-300 ease-in-out overflow-hidden ${
                k ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`,
              children: S.jsx("div", {
                className: "p-4 md:p-6 space-y-6",
                children: S.jsxs("div", {
                  className: "flex items-end gap-12",
                  children: [
                    S.jsxs("div", {
                      className: "w-[15%]",
                      children: [
                        S.jsx("label", {
                          className:
                            "block text-base font-medium text-gray-700 mb-2",
                          children: f("Time Type"),
                        }),
                        S.jsxs("select", {
                          value: d,
                          onChange: (_) => p(_.target.value),
                          className:
                            "w-full border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors",
                          children: [
                            S.jsx("option", {
                              value: "op_time",
                              children: f("Operation Time"),
                            }),
                            S.jsx("option", {
                              value: "rx_time",
                              children: f("Prescription Time"),
                            }),
                          ],
                        }),
                      ],
                    }),
                    S.jsxs("div", {
                      className: "w-[30%]",
                      children: [
                        S.jsx("label", {
                          className:
                            "block text-base font-medium text-gray-700 mb-2",
                          children: f("Start Date"),
                        }),
                        S.jsxs("div", {
                          className: "flex gap-4",
                          children: [
                            S.jsx("input", {
                              type: "date",
                              value: v,
                              onChange: (_) => y(_.target.value),
                              className:
                                "w-full border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors",
                            }),
                            S.jsx("input", {
                              type: "time",
                              step: "1",
                              value: C,
                              onChange: (_) => h(_.target.value),
                              className:
                                "w-full border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors",
                            }),
                          ],
                        }),
                      ],
                    }),
                    S.jsxs("div", {
                      className: "w-[30%]",
                      children: [
                        S.jsx("label", {
                          className:
                            "block text-base font-medium text-gray-700 mb-2",
                          children: f("End Date"),
                        }),
                        S.jsxs("div", {
                          className: "flex gap-4",
                          children: [
                            S.jsx("input", {
                              type: "date",
                              value: g,
                              onChange: (_) => m(_.target.value),
                              className:
                                "w-full border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors",
                            }),
                            S.jsx("input", {
                              type: "time",
                              step: "1",
                              value: w,
                              onChange: (_) => x(_.target.value),
                              className:
                                "w-full border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          ],
        }),
        S.jsx("div", {
          className: "bg-white rounded-lg py-4 md:py-6",
          children: S.jsxs("div", {
            className: "flex justify-between items-center",
            children: [
              S.jsxs("div", {
                className: "flex items-center space-x-4",
                children: [
                  S.jsxs("div", {
                    className: "flex items-center",
                    children: [
                      S.jsx("h2", {
                        className: "text-xl font-semibold text-gray-900",
                        children: f("Transaction Records"),
                      }),
                      S.jsxs("p", {
                        className: "ml-1 text-sm text-base text-gray-600",
                        children: ["(", t, " ", f("entries"), ")"],
                      }),
                    ],
                  }),
                  S.jsxs("div", {
                    className: "flex items-center space-x-4 ml-8",
                    children: [
                      S.jsx("select", {
                        value: o,
                        onChange: (_) => l(_.target.value),
                        className:
                          "px-4 py-2 border border-gray-300 rounded-lg text-base text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                        children: om.map((_) =>
                          S.jsx(
                            "option",
                            { value: _.value, children: f(_.name) },
                            _.value
                          )
                        ),
                      }),
                      S.jsxs("div", {
                        className: "relative",
                        children: [
                          S.jsx("input", {
                            type: "text",
                            value: i,
                            onChange: (_) => s(_.target.value),
                            placeholder: f("Please enter search content"),
                            className:
                              "w-48 px-4 py-2 border border-gray-300 rounded-lg text-base text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                          }),
                          i &&
                            S.jsx("button", {
                              onClick: () => s(""),
                              className:
                                "absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xl",
                              children: "×",
                            }),
                        ],
                      }),
                      S.jsxs("div", {
                        className: "relative",
                        children: [
                          S.jsx("input", {
                            type: "text",
                            value: n,
                            onChange: (_) => r(_.target.value),
                            placeholder: f("Search drug code or name"),
                            className:
                              "w-48 px-4 py-2 border border-gray-300 rounded-lg text-base text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                          }),
                          n &&
                            S.jsx("button", {
                              onClick: () => r(""),
                              className:
                                "absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xl",
                              children: "×",
                            }),
                        ],
                      }),
                      S.jsxs("button", {
                        onClick: L,
                        className:
                          "inline-flex items-center px-6 py-2 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors",
                        children: [
                          S.jsx(Yh, { className: "h-5 w-5 mr-2" }),
                          f("Search"),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              S.jsx("div", {
                className: "flex items-center space-x-4",
                children: S.jsxs("button", {
                  onClick: a,
                  disabled: t === 0,
                  className:
                    "inline-flex items-center px-6 py-2 border border-transparent text-base font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                  children: [
                    S.jsx(Bh, { className: "h-5 w-5 mr-2" }),
                    f("Export"),
                  ],
                }),
              }),
            ],
          }),
        }),
      ],
    });
  };
/**
 * table-core
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function cm() {
  return {
    accessor: (e, t) =>
      typeof e == "function"
        ? { ...t, accessorFn: e }
        : { ...t, accessorKey: e },
    display: (e) => e,
    group: (e) => e,
  };
}
function Nt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function $e(e, t) {
  return (n) => {
    t.setState((r) => ({ ...r, [e]: Nt(n, r[e]) }));
  };
}
function gi(e) {
  return e instanceof Function;
}
function dm(e) {
  return Array.isArray(e) && e.every((t) => typeof t == "number");
}
function fm(e, t) {
  const n = [],
    r = (o) => {
      o.forEach((i) => {
        n.push(i);
        const l = t(i);
        l != null && l.length && r(l);
      });
    };
  return r(e), n;
}
function I(e, t, n) {
  let r = [],
    o;
  return (i) => {
    let l;
    n.key && n.debug && (l = Date.now());
    const s = e(i);
    if (!(s.length !== r.length || s.some((c, f) => r[f] !== c))) return o;
    r = s;
    let u;
    if (
      (n.key && n.debug && (u = Date.now()),
      (o = t(...s)),
      n == null || n.onChange == null || n.onChange(o),
      n.key && n.debug && n != null && n.debug())
    ) {
      const c = Math.round((Date.now() - l) * 100) / 100,
        f = Math.round((Date.now() - u) * 100) / 100,
        d = f / 16,
        p = (v, y) => {
          for (v = String(v); v.length < y; ) v = " " + v;
          return v;
        };
      console.info(
        `%c⏱ ${p(f, 5)} /${p(c, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
              0,
              Math.min(120 - 120 * d, 120)
            )}deg 100% 31%);`,
        n == null ? void 0 : n.key
      );
    }
    return o;
  };
}
function D(e, t, n, r) {
  return {
    debug: () => {
      var o;
      return (o = e == null ? void 0 : e.debugAll) != null ? o : e[t];
    },
    key: !1,
    onChange: r,
  };
}
function gm(e, t, n, r) {
  const o = () => {
      var l;
      return (l = i.getValue()) != null ? l : e.options.renderFallbackValue;
    },
    i = {
      id: `${t.id}_${n.id}`,
      row: t,
      column: n,
      getValue: () => t.getValue(r),
      renderValue: o,
      getContext: I(
        () => [e, n, t, i],
        (l, s, a, u) => ({
          table: l,
          column: s,
          row: a,
          cell: u,
          getValue: u.getValue,
          renderValue: u.renderValue,
        }),
        D(e.options, "debugCells")
      ),
    };
  return (
    e._features.forEach((l) => {
      l.createCell == null || l.createCell(i, n, t, e);
    }, {}),
    i
  );
}
function pm(e, t, n, r) {
  var o, i;
  const s = { ...e._getDefaultColumnDef(), ...t },
    a = s.accessorKey;
  let u =
      (o =
        (i = s.id) != null
          ? i
          : a
          ? typeof String.prototype.replaceAll == "function"
            ? a.replaceAll(".", "_")
            : a.replace(/\./g, "_")
          : void 0) != null
        ? o
        : typeof s.header == "string"
        ? s.header
        : void 0,
    c;
  if (
    (s.accessorFn
      ? (c = s.accessorFn)
      : a &&
        (a.includes(".")
          ? (c = (d) => {
              let p = d;
              for (const y of a.split(".")) {
                var v;
                p = (v = p) == null ? void 0 : v[y];
              }
              return p;
            })
          : (c = (d) => d[s.accessorKey])),
    !u)
  )
    throw new Error();
  let f = {
    id: `${String(u)}`,
    accessorFn: c,
    parent: r,
    depth: n,
    columnDef: s,
    columns: [],
    getFlatColumns: I(
      () => [!0],
      () => {
        var d;
        return [
          f,
          ...((d = f.columns) == null
            ? void 0
            : d.flatMap((p) => p.getFlatColumns())),
        ];
      },
      D(e.options, "debugColumns")
    ),
    getLeafColumns: I(
      () => [e._getOrderColumnsFn()],
      (d) => {
        var p;
        if ((p = f.columns) != null && p.length) {
          let v = f.columns.flatMap((y) => y.getLeafColumns());
          return d(v);
        }
        return [f];
      },
      D(e.options, "debugColumns")
    ),
  };
  for (const d of e._features) d.createColumn == null || d.createColumn(f, e);
  return f;
}
const ge = "debugHeaders";
function fu(e, t, n) {
  var r;
  let i = {
    id: (r = n.id) != null ? r : t.id,
    column: t,
    index: n.index,
    isPlaceholder: !!n.isPlaceholder,
    placeholderId: n.placeholderId,
    depth: n.depth,
    subHeaders: [],
    colSpan: 0,
    rowSpan: 0,
    headerGroup: null,
    getLeafHeaders: () => {
      const l = [],
        s = (a) => {
          a.subHeaders && a.subHeaders.length && a.subHeaders.map(s), l.push(a);
        };
      return s(i), l;
    },
    getContext: () => ({ table: e, header: i, column: t }),
  };
  return (
    e._features.forEach((l) => {
      l.createHeader == null || l.createHeader(i, e);
    }),
    i
  );
}
const hm = {
  createTable: (e) => {
    (e.getHeaderGroups = I(
      () => [
        e.getAllColumns(),
        e.getVisibleLeafColumns(),
        e.getState().columnPinning.left,
        e.getState().columnPinning.right,
      ],
      (t, n, r, o) => {
        var i, l;
        const s =
            (i =
              r == null
                ? void 0
                : r.map((f) => n.find((d) => d.id === f)).filter(Boolean)) !=
            null
              ? i
              : [],
          a =
            (l =
              o == null
                ? void 0
                : o.map((f) => n.find((d) => d.id === f)).filter(Boolean)) !=
            null
              ? l
              : [],
          u = n.filter(
            (f) =>
              !(r != null && r.includes(f.id)) &&
              !(o != null && o.includes(f.id))
          );
        return no(t, [...s, ...u, ...a], e);
      },
      D(e.options, ge)
    )),
      (e.getCenterHeaderGroups = I(
        () => [
          e.getAllColumns(),
          e.getVisibleLeafColumns(),
          e.getState().columnPinning.left,
          e.getState().columnPinning.right,
        ],
        (t, n, r, o) => (
          (n = n.filter(
            (i) =>
              !(r != null && r.includes(i.id)) &&
              !(o != null && o.includes(i.id))
          )),
          no(t, n, e, "center")
        ),
        D(e.options, ge)
      )),
      (e.getLeftHeaderGroups = I(
        () => [
          e.getAllColumns(),
          e.getVisibleLeafColumns(),
          e.getState().columnPinning.left,
        ],
        (t, n, r) => {
          var o;
          const i =
            (o =
              r == null
                ? void 0
                : r.map((l) => n.find((s) => s.id === l)).filter(Boolean)) !=
            null
              ? o
              : [];
          return no(t, i, e, "left");
        },
        D(e.options, ge)
      )),
      (e.getRightHeaderGroups = I(
        () => [
          e.getAllColumns(),
          e.getVisibleLeafColumns(),
          e.getState().columnPinning.right,
        ],
        (t, n, r) => {
          var o;
          const i =
            (o =
              r == null
                ? void 0
                : r.map((l) => n.find((s) => s.id === l)).filter(Boolean)) !=
            null
              ? o
              : [];
          return no(t, i, e, "right");
        },
        D(e.options, ge)
      )),
      (e.getFooterGroups = I(
        () => [e.getHeaderGroups()],
        (t) => [...t].reverse(),
        D(e.options, ge)
      )),
      (e.getLeftFooterGroups = I(
        () => [e.getLeftHeaderGroups()],
        (t) => [...t].reverse(),
        D(e.options, ge)
      )),
      (e.getCenterFooterGroups = I(
        () => [e.getCenterHeaderGroups()],
        (t) => [...t].reverse(),
        D(e.options, ge)
      )),
      (e.getRightFooterGroups = I(
        () => [e.getRightHeaderGroups()],
        (t) => [...t].reverse(),
        D(e.options, ge)
      )),
      (e.getFlatHeaders = I(
        () => [e.getHeaderGroups()],
        (t) => t.map((n) => n.headers).flat(),
        D(e.options, ge)
      )),
      (e.getLeftFlatHeaders = I(
        () => [e.getLeftHeaderGroups()],
        (t) => t.map((n) => n.headers).flat(),
        D(e.options, ge)
      )),
      (e.getCenterFlatHeaders = I(
        () => [e.getCenterHeaderGroups()],
        (t) => t.map((n) => n.headers).flat(),
        D(e.options, ge)
      )),
      (e.getRightFlatHeaders = I(
        () => [e.getRightHeaderGroups()],
        (t) => t.map((n) => n.headers).flat(),
        D(e.options, ge)
      )),
      (e.getCenterLeafHeaders = I(
        () => [e.getCenterFlatHeaders()],
        (t) =>
          t.filter((n) => {
            var r;
            return !((r = n.subHeaders) != null && r.length);
          }),
        D(e.options, ge)
      )),
      (e.getLeftLeafHeaders = I(
        () => [e.getLeftFlatHeaders()],
        (t) =>
          t.filter((n) => {
            var r;
            return !((r = n.subHeaders) != null && r.length);
          }),
        D(e.options, ge)
      )),
      (e.getRightLeafHeaders = I(
        () => [e.getRightFlatHeaders()],
        (t) =>
          t.filter((n) => {
            var r;
            return !((r = n.subHeaders) != null && r.length);
          }),
        D(e.options, ge)
      )),
      (e.getLeafHeaders = I(
        () => [
          e.getLeftHeaderGroups(),
          e.getCenterHeaderGroups(),
          e.getRightHeaderGroups(),
        ],
        (t, n, r) => {
          var o, i, l, s, a, u;
          return [
            ...((o = (i = t[0]) == null ? void 0 : i.headers) != null ? o : []),
            ...((l = (s = n[0]) == null ? void 0 : s.headers) != null ? l : []),
            ...((a = (u = r[0]) == null ? void 0 : u.headers) != null ? a : []),
          ]
            .map((c) => c.getLeafHeaders())
            .flat();
        },
        D(e.options, ge)
      ));
  },
};
function no(e, t, n, r) {
  var o, i;
  let l = 0;
  const s = function (d, p) {
    p === void 0 && (p = 1),
      (l = Math.max(l, p)),
      d
        .filter((v) => v.getIsVisible())
        .forEach((v) => {
          var y;
          (y = v.columns) != null && y.length && s(v.columns, p + 1);
        }, 0);
  };
  s(e);
  let a = [];
  const u = (d, p) => {
      const v = {
          depth: p,
          id: [r, `${p}`].filter(Boolean).join("_"),
          headers: [],
        },
        y = [];
      d.forEach((C) => {
        const h = [...y].reverse()[0],
          g = C.column.depth === v.depth;
        let m,
          w = !1;
        if (
          (g && C.column.parent
            ? (m = C.column.parent)
            : ((m = C.column), (w = !0)),
          h && (h == null ? void 0 : h.column) === m)
        )
          h.subHeaders.push(C);
        else {
          const x = fu(n, m, {
            id: [r, p, m.id, C == null ? void 0 : C.id]
              .filter(Boolean)
              .join("_"),
            isPlaceholder: w,
            placeholderId: w
              ? `${y.filter((k) => k.column === m).length}`
              : void 0,
            depth: p,
            index: y.length,
          });
          x.subHeaders.push(C), y.push(x);
        }
        v.headers.push(C), (C.headerGroup = v);
      }),
        a.push(v),
        p > 0 && u(y, p - 1);
    },
    c = t.map((d, p) => fu(n, d, { depth: l, index: p }));
  u(c, l - 1), a.reverse();
  const f = (d) =>
    d
      .filter((v) => v.column.getIsVisible())
      .map((v) => {
        let y = 0,
          C = 0,
          h = [0];
        v.subHeaders && v.subHeaders.length
          ? ((h = []),
            f(v.subHeaders).forEach((m) => {
              let { colSpan: w, rowSpan: x } = m;
              (y += w), h.push(x);
            }))
          : (y = 1);
        const g = Math.min(...h);
        return (
          (C = C + g),
          (v.colSpan = y),
          (v.rowSpan = C),
          { colSpan: y, rowSpan: C }
        );
      });
  return f((o = (i = a[0]) == null ? void 0 : i.headers) != null ? o : []), a;
}
const mm = (e, t, n, r, o, i, l) => {
    let s = {
      id: t,
      index: r,
      original: n,
      depth: o,
      parentId: l,
      _valuesCache: {},
      _uniqueValuesCache: {},
      getValue: (a) => {
        if (s._valuesCache.hasOwnProperty(a)) return s._valuesCache[a];
        const u = e.getColumn(a);
        if (u != null && u.accessorFn)
          return (
            (s._valuesCache[a] = u.accessorFn(s.original, r)), s._valuesCache[a]
          );
      },
      getUniqueValues: (a) => {
        if (s._uniqueValuesCache.hasOwnProperty(a))
          return s._uniqueValuesCache[a];
        const u = e.getColumn(a);
        if (u != null && u.accessorFn)
          return u.columnDef.getUniqueValues
            ? ((s._uniqueValuesCache[a] = u.columnDef.getUniqueValues(
                s.original,
                r
              )),
              s._uniqueValuesCache[a])
            : ((s._uniqueValuesCache[a] = [s.getValue(a)]),
              s._uniqueValuesCache[a]);
      },
      renderValue: (a) => {
        var u;
        return (u = s.getValue(a)) != null ? u : e.options.renderFallbackValue;
      },
      subRows: [],
      getLeafRows: () => fm(s.subRows, (a) => a.subRows),
      getParentRow: () => (s.parentId ? e.getRow(s.parentId, !0) : void 0),
      getParentRows: () => {
        let a = [],
          u = s;
        for (;;) {
          const c = u.getParentRow();
          if (!c) break;
          a.push(c), (u = c);
        }
        return a.reverse();
      },
      getAllCells: I(
        () => [e.getAllLeafColumns()],
        (a) => a.map((u) => gm(e, s, u, u.id)),
        D(e.options, "debugRows")
      ),
      _getAllCellsByColumnId: I(
        () => [s.getAllCells()],
        (a) => a.reduce((u, c) => ((u[c.column.id] = c), u), {}),
        D(e.options, "debugRows")
      ),
    };
    for (let a = 0; a < e._features.length; a++) {
      const u = e._features[a];
      u == null || u.createRow == null || u.createRow(s, e);
    }
    return s;
  },
  vm = {
    createColumn: (e, t) => {
      (e._getFacetedRowModel =
        t.options.getFacetedRowModel && t.options.getFacetedRowModel(t, e.id)),
        (e.getFacetedRowModel = () =>
          e._getFacetedRowModel
            ? e._getFacetedRowModel()
            : t.getPreFilteredRowModel()),
        (e._getFacetedUniqueValues =
          t.options.getFacetedUniqueValues &&
          t.options.getFacetedUniqueValues(t, e.id)),
        (e.getFacetedUniqueValues = () =>
          e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : new Map()),
        (e._getFacetedMinMaxValues =
          t.options.getFacetedMinMaxValues &&
          t.options.getFacetedMinMaxValues(t, e.id)),
        (e.getFacetedMinMaxValues = () => {
          if (e._getFacetedMinMaxValues) return e._getFacetedMinMaxValues();
        });
    },
  },
  Wd = (e, t, n) => {
    var r, o;
    const i =
      n == null || (r = n.toString()) == null ? void 0 : r.toLowerCase();
    return !!(
      !(
        (o = e.getValue(t)) == null ||
        (o = o.toString()) == null ||
        (o = o.toLowerCase()) == null
      ) && o.includes(i)
    );
  };
Wd.autoRemove = (e) => We(e);
const Qd = (e, t, n) => {
  var r;
  return !!(
    !((r = e.getValue(t)) == null || (r = r.toString()) == null) &&
    r.includes(n)
  );
};
Qd.autoRemove = (e) => We(e);
const Yd = (e, t, n) => {
  var r;
  return (
    ((r = e.getValue(t)) == null || (r = r.toString()) == null
      ? void 0
      : r.toLowerCase()) === (n == null ? void 0 : n.toLowerCase())
  );
};
Yd.autoRemove = (e) => We(e);
const Xd = (e, t, n) => {
  var r;
  return (r = e.getValue(t)) == null ? void 0 : r.includes(n);
};
Xd.autoRemove = (e) => We(e);
const Jd = (e, t, n) =>
  !n.some((r) => {
    var o;
    return !((o = e.getValue(t)) != null && o.includes(r));
  });
Jd.autoRemove = (e) => We(e) || !(e != null && e.length);
const qd = (e, t, n) =>
  n.some((r) => {
    var o;
    return (o = e.getValue(t)) == null ? void 0 : o.includes(r);
  });
qd.autoRemove = (e) => We(e) || !(e != null && e.length);
const Zd = (e, t, n) => e.getValue(t) === n;
Zd.autoRemove = (e) => We(e);
const bd = (e, t, n) => e.getValue(t) == n;
bd.autoRemove = (e) => We(e);
const Ys = (e, t, n) => {
  let [r, o] = n;
  const i = e.getValue(t);
  return i >= r && i <= o;
};
Ys.resolveFilterValue = (e) => {
  let [t, n] = e,
    r = typeof t != "number" ? parseFloat(t) : t,
    o = typeof n != "number" ? parseFloat(n) : n,
    i = t === null || Number.isNaN(r) ? -1 / 0 : r,
    l = n === null || Number.isNaN(o) ? 1 / 0 : o;
  if (i > l) {
    const s = i;
    (i = l), (l = s);
  }
  return [i, l];
};
Ys.autoRemove = (e) => We(e) || (We(e[0]) && We(e[1]));
const lt = {
  includesString: Wd,
  includesStringSensitive: Qd,
  equalsString: Yd,
  arrIncludes: Xd,
  arrIncludesAll: Jd,
  arrIncludesSome: qd,
  equals: Zd,
  weakEquals: bd,
  inNumberRange: Ys,
};
function We(e) {
  return e == null || e === "";
}
const ym = {
  getDefaultColumnDef: () => ({ filterFn: "auto" }),
  getInitialState: (e) => ({ columnFilters: [], ...e }),
  getDefaultOptions: (e) => ({
    onColumnFiltersChange: $e("columnFilters", e),
    filterFromLeafRows: !1,
    maxLeafRowFilterDepth: 100,
  }),
  createColumn: (e, t) => {
    (e.getAutoFilterFn = () => {
      const n = t.getCoreRowModel().flatRows[0],
        r = n == null ? void 0 : n.getValue(e.id);
      return typeof r == "string"
        ? lt.includesString
        : typeof r == "number"
        ? lt.inNumberRange
        : typeof r == "boolean" || (r !== null && typeof r == "object")
        ? lt.equals
        : Array.isArray(r)
        ? lt.arrIncludes
        : lt.weakEquals;
    }),
      (e.getFilterFn = () => {
        var n, r;
        return gi(e.columnDef.filterFn)
          ? e.columnDef.filterFn
          : e.columnDef.filterFn === "auto"
          ? e.getAutoFilterFn()
          : (n =
              (r = t.options.filterFns) == null
                ? void 0
                : r[e.columnDef.filterFn]) != null
          ? n
          : lt[e.columnDef.filterFn];
      }),
      (e.getCanFilter = () => {
        var n, r, o;
        return (
          ((n = e.columnDef.enableColumnFilter) != null ? n : !0) &&
          ((r = t.options.enableColumnFilters) != null ? r : !0) &&
          ((o = t.options.enableFilters) != null ? o : !0) &&
          !!e.accessorFn
        );
      }),
      (e.getIsFiltered = () => e.getFilterIndex() > -1),
      (e.getFilterValue = () => {
        var n;
        return (n = t.getState().columnFilters) == null ||
          (n = n.find((r) => r.id === e.id)) == null
          ? void 0
          : n.value;
      }),
      (e.getFilterIndex = () => {
        var n, r;
        return (n =
          (r = t.getState().columnFilters) == null
            ? void 0
            : r.findIndex((o) => o.id === e.id)) != null
          ? n
          : -1;
      }),
      (e.setFilterValue = (n) => {
        t.setColumnFilters((r) => {
          const o = e.getFilterFn(),
            i = r == null ? void 0 : r.find((c) => c.id === e.id),
            l = Nt(n, i ? i.value : void 0);
          if (gu(o, l, e)) {
            var s;
            return (s = r == null ? void 0 : r.filter((c) => c.id !== e.id)) !=
              null
              ? s
              : [];
          }
          const a = { id: e.id, value: l };
          if (i) {
            var u;
            return (u =
              r == null ? void 0 : r.map((c) => (c.id === e.id ? a : c))) !=
              null
              ? u
              : [];
          }
          return r != null && r.length ? [...r, a] : [a];
        });
      });
  },
  createRow: (e, t) => {
    (e.columnFilters = {}), (e.columnFiltersMeta = {});
  },
  createTable: (e) => {
    (e.setColumnFilters = (t) => {
      const n = e.getAllLeafColumns(),
        r = (o) => {
          var i;
          return (i = Nt(t, o)) == null
            ? void 0
            : i.filter((l) => {
                const s = n.find((a) => a.id === l.id);
                if (s) {
                  const a = s.getFilterFn();
                  if (gu(a, l.value, s)) return !1;
                }
                return !0;
              });
        };
      e.options.onColumnFiltersChange == null ||
        e.options.onColumnFiltersChange(r);
    }),
      (e.resetColumnFilters = (t) => {
        var n, r;
        e.setColumnFilters(
          t
            ? []
            : (n = (r = e.initialState) == null ? void 0 : r.columnFilters) !=
              null
            ? n
            : []
        );
      }),
      (e.getPreFilteredRowModel = () => e.getCoreRowModel()),
      (e.getFilteredRowModel = () => (
        !e._getFilteredRowModel &&
          e.options.getFilteredRowModel &&
          (e._getFilteredRowModel = e.options.getFilteredRowModel(e)),
        e.options.manualFiltering || !e._getFilteredRowModel
          ? e.getPreFilteredRowModel()
          : e._getFilteredRowModel()
      ));
  },
};
function gu(e, t, n) {
  return (
    (e && e.autoRemove ? e.autoRemove(t, n) : !1) ||
    typeof t > "u" ||
    (typeof t == "string" && !t)
  );
}
const Sm = (e, t, n) =>
    n.reduce((r, o) => {
      const i = o.getValue(e);
      return r + (typeof i == "number" ? i : 0);
    }, 0),
  wm = (e, t, n) => {
    let r;
    return (
      n.forEach((o) => {
        const i = o.getValue(e);
        i != null && (r > i || (r === void 0 && i >= i)) && (r = i);
      }),
      r
    );
  },
  xm = (e, t, n) => {
    let r;
    return (
      n.forEach((o) => {
        const i = o.getValue(e);
        i != null && (r < i || (r === void 0 && i >= i)) && (r = i);
      }),
      r
    );
  },
  Cm = (e, t, n) => {
    let r, o;
    return (
      n.forEach((i) => {
        const l = i.getValue(e);
        l != null &&
          (r === void 0
            ? l >= l && (r = o = l)
            : (r > l && (r = l), o < l && (o = l)));
      }),
      [r, o]
    );
  },
  Rm = (e, t) => {
    let n = 0,
      r = 0;
    if (
      (t.forEach((o) => {
        let i = o.getValue(e);
        i != null && (i = +i) >= i && (++n, (r += i));
      }),
      n)
    )
      return r / n;
  },
  km = (e, t) => {
    if (!t.length) return;
    const n = t.map((i) => i.getValue(e));
    if (!dm(n)) return;
    if (n.length === 1) return n[0];
    const r = Math.floor(n.length / 2),
      o = n.sort((i, l) => i - l);
    return n.length % 2 !== 0 ? o[r] : (o[r - 1] + o[r]) / 2;
  },
  Em = (e, t) => Array.from(new Set(t.map((n) => n.getValue(e))).values()),
  Nm = (e, t) => new Set(t.map((n) => n.getValue(e))).size,
  Pm = (e, t) => t.length,
  Hi = {
    sum: Sm,
    min: wm,
    max: xm,
    extent: Cm,
    mean: Rm,
    median: km,
    unique: Em,
    uniqueCount: Nm,
    count: Pm,
  },
  _m = {
    getDefaultColumnDef: () => ({
      aggregatedCell: (e) => {
        var t, n;
        return (t =
          (n = e.getValue()) == null || n.toString == null
            ? void 0
            : n.toString()) != null
          ? t
          : null;
      },
      aggregationFn: "auto",
    }),
    getInitialState: (e) => ({ grouping: [], ...e }),
    getDefaultOptions: (e) => ({
      onGroupingChange: $e("grouping", e),
      groupedColumnMode: "reorder",
    }),
    createColumn: (e, t) => {
      (e.toggleGrouping = () => {
        t.setGrouping((n) =>
          n != null && n.includes(e.id)
            ? n.filter((r) => r !== e.id)
            : [...(n ?? []), e.id]
        );
      }),
        (e.getCanGroup = () => {
          var n, r;
          return (
            ((n = e.columnDef.enableGrouping) != null ? n : !0) &&
            ((r = t.options.enableGrouping) != null ? r : !0) &&
            (!!e.accessorFn || !!e.columnDef.getGroupingValue)
          );
        }),
        (e.getIsGrouped = () => {
          var n;
          return (n = t.getState().grouping) == null
            ? void 0
            : n.includes(e.id);
        }),
        (e.getGroupedIndex = () => {
          var n;
          return (n = t.getState().grouping) == null ? void 0 : n.indexOf(e.id);
        }),
        (e.getToggleGroupingHandler = () => {
          const n = e.getCanGroup();
          return () => {
            n && e.toggleGrouping();
          };
        }),
        (e.getAutoAggregationFn = () => {
          const n = t.getCoreRowModel().flatRows[0],
            r = n == null ? void 0 : n.getValue(e.id);
          if (typeof r == "number") return Hi.sum;
          if (Object.prototype.toString.call(r) === "[object Date]")
            return Hi.extent;
        }),
        (e.getAggregationFn = () => {
          var n, r;
          if (!e) throw new Error();
          return gi(e.columnDef.aggregationFn)
            ? e.columnDef.aggregationFn
            : e.columnDef.aggregationFn === "auto"
            ? e.getAutoAggregationFn()
            : (n =
                (r = t.options.aggregationFns) == null
                  ? void 0
                  : r[e.columnDef.aggregationFn]) != null
            ? n
            : Hi[e.columnDef.aggregationFn];
        });
    },
    createTable: (e) => {
      (e.setGrouping = (t) =>
        e.options.onGroupingChange == null
          ? void 0
          : e.options.onGroupingChange(t)),
        (e.resetGrouping = (t) => {
          var n, r;
          e.setGrouping(
            t
              ? []
              : (n = (r = e.initialState) == null ? void 0 : r.grouping) != null
              ? n
              : []
          );
        }),
        (e.getPreGroupedRowModel = () => e.getFilteredRowModel()),
        (e.getGroupedRowModel = () => (
          !e._getGroupedRowModel &&
            e.options.getGroupedRowModel &&
            (e._getGroupedRowModel = e.options.getGroupedRowModel(e)),
          e.options.manualGrouping || !e._getGroupedRowModel
            ? e.getPreGroupedRowModel()
            : e._getGroupedRowModel()
        ));
    },
    createRow: (e, t) => {
      (e.getIsGrouped = () => !!e.groupingColumnId),
        (e.getGroupingValue = (n) => {
          if (e._groupingValuesCache.hasOwnProperty(n))
            return e._groupingValuesCache[n];
          const r = t.getColumn(n);
          return r != null && r.columnDef.getGroupingValue
            ? ((e._groupingValuesCache[n] = r.columnDef.getGroupingValue(
                e.original
              )),
              e._groupingValuesCache[n])
            : e.getValue(n);
        }),
        (e._groupingValuesCache = {});
    },
    createCell: (e, t, n, r) => {
      (e.getIsGrouped = () => t.getIsGrouped() && t.id === n.groupingColumnId),
        (e.getIsPlaceholder = () => !e.getIsGrouped() && t.getIsGrouped()),
        (e.getIsAggregated = () => {
          var o;
          return (
            !e.getIsGrouped() &&
            !e.getIsPlaceholder() &&
            !!((o = n.subRows) != null && o.length)
          );
        });
    },
  };
function Lm(e, t, n) {
  if (!(t != null && t.length) || !n) return e;
  const r = e.filter((i) => !t.includes(i.id));
  return n === "remove"
    ? r
    : [...t.map((i) => e.find((l) => l.id === i)).filter(Boolean), ...r];
}
const $m = {
    getInitialState: (e) => ({ columnOrder: [], ...e }),
    getDefaultOptions: (e) => ({ onColumnOrderChange: $e("columnOrder", e) }),
    createColumn: (e, t) => {
      (e.getIndex = I(
        (n) => [cr(t, n)],
        (n) => n.findIndex((r) => r.id === e.id),
        D(t.options, "debugColumns")
      )),
        (e.getIsFirstColumn = (n) => {
          var r;
          return ((r = cr(t, n)[0]) == null ? void 0 : r.id) === e.id;
        }),
        (e.getIsLastColumn = (n) => {
          var r;
          const o = cr(t, n);
          return ((r = o[o.length - 1]) == null ? void 0 : r.id) === e.id;
        });
    },
    createTable: (e) => {
      (e.setColumnOrder = (t) =>
        e.options.onColumnOrderChange == null
          ? void 0
          : e.options.onColumnOrderChange(t)),
        (e.resetColumnOrder = (t) => {
          var n;
          e.setColumnOrder(
            t ? [] : (n = e.initialState.columnOrder) != null ? n : []
          );
        }),
        (e._getOrderColumnsFn = I(
          () => [
            e.getState().columnOrder,
            e.getState().grouping,
            e.options.groupedColumnMode,
          ],
          (t, n, r) => (o) => {
            let i = [];
            if (!(t != null && t.length)) i = o;
            else {
              const l = [...t],
                s = [...o];
              for (; s.length && l.length; ) {
                const a = l.shift(),
                  u = s.findIndex((c) => c.id === a);
                u > -1 && i.push(s.splice(u, 1)[0]);
              }
              i = [...i, ...s];
            }
            return Lm(i, n, r);
          },
          D(e.options, "debugTable")
        ));
    },
  },
  Ui = () => ({ left: [], right: [] }),
  Fm = {
    getInitialState: (e) => ({ columnPinning: Ui(), ...e }),
    getDefaultOptions: (e) => ({
      onColumnPinningChange: $e("columnPinning", e),
    }),
    createColumn: (e, t) => {
      (e.pin = (n) => {
        const r = e
          .getLeafColumns()
          .map((o) => o.id)
          .filter(Boolean);
        t.setColumnPinning((o) => {
          var i, l;
          if (n === "right") {
            var s, a;
            return {
              left: ((s = o == null ? void 0 : o.left) != null ? s : []).filter(
                (f) => !(r != null && r.includes(f))
              ),
              right: [
                ...((a = o == null ? void 0 : o.right) != null ? a : []).filter(
                  (f) => !(r != null && r.includes(f))
                ),
                ...r,
              ],
            };
          }
          if (n === "left") {
            var u, c;
            return {
              left: [
                ...((u = o == null ? void 0 : o.left) != null ? u : []).filter(
                  (f) => !(r != null && r.includes(f))
                ),
                ...r,
              ],
              right: ((c = o == null ? void 0 : o.right) != null
                ? c
                : []
              ).filter((f) => !(r != null && r.includes(f))),
            };
          }
          return {
            left: ((i = o == null ? void 0 : o.left) != null ? i : []).filter(
              (f) => !(r != null && r.includes(f))
            ),
            right: ((l = o == null ? void 0 : o.right) != null ? l : []).filter(
              (f) => !(r != null && r.includes(f))
            ),
          };
        });
      }),
        (e.getCanPin = () =>
          e.getLeafColumns().some((r) => {
            var o, i, l;
            return (
              ((o = r.columnDef.enablePinning) != null ? o : !0) &&
              ((i =
                (l = t.options.enableColumnPinning) != null
                  ? l
                  : t.options.enablePinning) != null
                ? i
                : !0)
            );
          })),
        (e.getIsPinned = () => {
          const n = e.getLeafColumns().map((s) => s.id),
            { left: r, right: o } = t.getState().columnPinning,
            i = n.some((s) => (r == null ? void 0 : r.includes(s))),
            l = n.some((s) => (o == null ? void 0 : o.includes(s)));
          return i ? "left" : l ? "right" : !1;
        }),
        (e.getPinnedIndex = () => {
          var n, r;
          const o = e.getIsPinned();
          return o
            ? (n =
                (r = t.getState().columnPinning) == null || (r = r[o]) == null
                  ? void 0
                  : r.indexOf(e.id)) != null
              ? n
              : -1
            : 0;
        });
    },
    createRow: (e, t) => {
      (e.getCenterVisibleCells = I(
        () => [
          e._getAllVisibleCells(),
          t.getState().columnPinning.left,
          t.getState().columnPinning.right,
        ],
        (n, r, o) => {
          const i = [...(r ?? []), ...(o ?? [])];
          return n.filter((l) => !i.includes(l.column.id));
        },
        D(t.options, "debugRows")
      )),
        (e.getLeftVisibleCells = I(
          () => [e._getAllVisibleCells(), t.getState().columnPinning.left],
          (n, r) =>
            (r ?? [])
              .map((i) => n.find((l) => l.column.id === i))
              .filter(Boolean)
              .map((i) => ({ ...i, position: "left" })),
          D(t.options, "debugRows")
        )),
        (e.getRightVisibleCells = I(
          () => [e._getAllVisibleCells(), t.getState().columnPinning.right],
          (n, r) =>
            (r ?? [])
              .map((i) => n.find((l) => l.column.id === i))
              .filter(Boolean)
              .map((i) => ({ ...i, position: "right" })),
          D(t.options, "debugRows")
        ));
    },
    createTable: (e) => {
      (e.setColumnPinning = (t) =>
        e.options.onColumnPinningChange == null
          ? void 0
          : e.options.onColumnPinningChange(t)),
        (e.resetColumnPinning = (t) => {
          var n, r;
          return e.setColumnPinning(
            t
              ? Ui()
              : (n = (r = e.initialState) == null ? void 0 : r.columnPinning) !=
                null
              ? n
              : Ui()
          );
        }),
        (e.getIsSomeColumnsPinned = (t) => {
          var n;
          const r = e.getState().columnPinning;
          if (!t) {
            var o, i;
            return !!(
              ((o = r.left) != null && o.length) ||
              ((i = r.right) != null && i.length)
            );
          }
          return !!((n = r[t]) != null && n.length);
        }),
        (e.getLeftLeafColumns = I(
          () => [e.getAllLeafColumns(), e.getState().columnPinning.left],
          (t, n) =>
            (n ?? []).map((r) => t.find((o) => o.id === r)).filter(Boolean),
          D(e.options, "debugColumns")
        )),
        (e.getRightLeafColumns = I(
          () => [e.getAllLeafColumns(), e.getState().columnPinning.right],
          (t, n) =>
            (n ?? []).map((r) => t.find((o) => o.id === r)).filter(Boolean),
          D(e.options, "debugColumns")
        )),
        (e.getCenterLeafColumns = I(
          () => [
            e.getAllLeafColumns(),
            e.getState().columnPinning.left,
            e.getState().columnPinning.right,
          ],
          (t, n, r) => {
            const o = [...(n ?? []), ...(r ?? [])];
            return t.filter((i) => !o.includes(i.id));
          },
          D(e.options, "debugColumns")
        ));
    },
  },
  ro = { size: 150, minSize: 20, maxSize: Number.MAX_SAFE_INTEGER },
  Bi = () => ({
    startOffset: null,
    startSize: null,
    deltaOffset: null,
    deltaPercentage: null,
    isResizingColumn: !1,
    columnSizingStart: [],
  }),
  Om = {
    getDefaultColumnDef: () => ro,
    getInitialState: (e) => ({
      columnSizing: {},
      columnSizingInfo: Bi(),
      ...e,
    }),
    getDefaultOptions: (e) => ({
      columnResizeMode: "onEnd",
      columnResizeDirection: "ltr",
      onColumnSizingChange: $e("columnSizing", e),
      onColumnSizingInfoChange: $e("columnSizingInfo", e),
    }),
    createColumn: (e, t) => {
      (e.getSize = () => {
        var n, r, o;
        const i = t.getState().columnSizing[e.id];
        return Math.min(
          Math.max(
            (n = e.columnDef.minSize) != null ? n : ro.minSize,
            (r = i ?? e.columnDef.size) != null ? r : ro.size
          ),
          (o = e.columnDef.maxSize) != null ? o : ro.maxSize
        );
      }),
        (e.getStart = I(
          (n) => [n, cr(t, n), t.getState().columnSizing],
          (n, r) =>
            r.slice(0, e.getIndex(n)).reduce((o, i) => o + i.getSize(), 0),
          D(t.options, "debugColumns")
        )),
        (e.getAfter = I(
          (n) => [n, cr(t, n), t.getState().columnSizing],
          (n, r) =>
            r.slice(e.getIndex(n) + 1).reduce((o, i) => o + i.getSize(), 0),
          D(t.options, "debugColumns")
        )),
        (e.resetSize = () => {
          t.setColumnSizing((n) => {
            let { [e.id]: r, ...o } = n;
            return o;
          });
        }),
        (e.getCanResize = () => {
          var n, r;
          return (
            ((n = e.columnDef.enableResizing) != null ? n : !0) &&
            ((r = t.options.enableColumnResizing) != null ? r : !0)
          );
        }),
        (e.getIsResizing = () =>
          t.getState().columnSizingInfo.isResizingColumn === e.id);
    },
    createHeader: (e, t) => {
      (e.getSize = () => {
        let n = 0;
        const r = (o) => {
          if (o.subHeaders.length) o.subHeaders.forEach(r);
          else {
            var i;
            n += (i = o.column.getSize()) != null ? i : 0;
          }
        };
        return r(e), n;
      }),
        (e.getStart = () => {
          if (e.index > 0) {
            const n = e.headerGroup.headers[e.index - 1];
            return n.getStart() + n.getSize();
          }
          return 0;
        }),
        (e.getResizeHandler = (n) => {
          const r = t.getColumn(e.column.id),
            o = r == null ? void 0 : r.getCanResize();
          return (i) => {
            if (
              !r ||
              !o ||
              (i.persist == null || i.persist(),
              Gi(i) && i.touches && i.touches.length > 1)
            )
              return;
            const l = e.getSize(),
              s = e
                ? e
                    .getLeafHeaders()
                    .map((h) => [h.column.id, h.column.getSize()])
                : [[r.id, r.getSize()]],
              a = Gi(i) ? Math.round(i.touches[0].clientX) : i.clientX,
              u = {},
              c = (h, g) => {
                typeof g == "number" &&
                  (t.setColumnSizingInfo((m) => {
                    var w, x;
                    const k =
                        t.options.columnResizeDirection === "rtl" ? -1 : 1,
                      E =
                        (g -
                          ((w = m == null ? void 0 : m.startOffset) != null
                            ? w
                            : 0)) *
                        k,
                      L = Math.max(
                        E /
                          ((x = m == null ? void 0 : m.startSize) != null
                            ? x
                            : 0),
                        -0.999999
                      );
                    return (
                      m.columnSizingStart.forEach((V) => {
                        let [_, U] = V;
                        u[_] = Math.round(Math.max(U + U * L, 0) * 100) / 100;
                      }),
                      { ...m, deltaOffset: E, deltaPercentage: L }
                    );
                  }),
                  (t.options.columnResizeMode === "onChange" || h === "end") &&
                    t.setColumnSizing((m) => ({ ...m, ...u })));
              },
              f = (h) => c("move", h),
              d = (h) => {
                c("end", h),
                  t.setColumnSizingInfo((g) => ({
                    ...g,
                    isResizingColumn: !1,
                    startOffset: null,
                    startSize: null,
                    deltaOffset: null,
                    deltaPercentage: null,
                    columnSizingStart: [],
                  }));
              },
              p = n || typeof document < "u" ? document : null,
              v = {
                moveHandler: (h) => f(h.clientX),
                upHandler: (h) => {
                  p == null ||
                    p.removeEventListener("mousemove", v.moveHandler),
                    p == null || p.removeEventListener("mouseup", v.upHandler),
                    d(h.clientX);
                },
              },
              y = {
                moveHandler: (h) => (
                  h.cancelable && (h.preventDefault(), h.stopPropagation()),
                  f(h.touches[0].clientX),
                  !1
                ),
                upHandler: (h) => {
                  var g;
                  p == null ||
                    p.removeEventListener("touchmove", y.moveHandler),
                    p == null || p.removeEventListener("touchend", y.upHandler),
                    h.cancelable && (h.preventDefault(), h.stopPropagation()),
                    d((g = h.touches[0]) == null ? void 0 : g.clientX);
                },
              },
              C = Im() ? { passive: !1 } : !1;
            Gi(i)
              ? (p == null || p.addEventListener("touchmove", y.moveHandler, C),
                p == null || p.addEventListener("touchend", y.upHandler, C))
              : (p == null || p.addEventListener("mousemove", v.moveHandler, C),
                p == null || p.addEventListener("mouseup", v.upHandler, C)),
              t.setColumnSizingInfo((h) => ({
                ...h,
                startOffset: a,
                startSize: l,
                deltaOffset: 0,
                deltaPercentage: 0,
                columnSizingStart: s,
                isResizingColumn: r.id,
              }));
          };
        });
    },
    createTable: (e) => {
      (e.setColumnSizing = (t) =>
        e.options.onColumnSizingChange == null
          ? void 0
          : e.options.onColumnSizingChange(t)),
        (e.setColumnSizingInfo = (t) =>
          e.options.onColumnSizingInfoChange == null
            ? void 0
            : e.options.onColumnSizingInfoChange(t)),
        (e.resetColumnSizing = (t) => {
          var n;
          e.setColumnSizing(
            t ? {} : (n = e.initialState.columnSizing) != null ? n : {}
          );
        }),
        (e.resetHeaderSizeInfo = (t) => {
          var n;
          e.setColumnSizingInfo(
            t ? Bi() : (n = e.initialState.columnSizingInfo) != null ? n : Bi()
          );
        }),
        (e.getTotalSize = () => {
          var t, n;
          return (t =
            (n = e.getHeaderGroups()[0]) == null
              ? void 0
              : n.headers.reduce((r, o) => r + o.getSize(), 0)) != null
            ? t
            : 0;
        }),
        (e.getLeftTotalSize = () => {
          var t, n;
          return (t =
            (n = e.getLeftHeaderGroups()[0]) == null
              ? void 0
              : n.headers.reduce((r, o) => r + o.getSize(), 0)) != null
            ? t
            : 0;
        }),
        (e.getCenterTotalSize = () => {
          var t, n;
          return (t =
            (n = e.getCenterHeaderGroups()[0]) == null
              ? void 0
              : n.headers.reduce((r, o) => r + o.getSize(), 0)) != null
            ? t
            : 0;
        }),
        (e.getRightTotalSize = () => {
          var t, n;
          return (t =
            (n = e.getRightHeaderGroups()[0]) == null
              ? void 0
              : n.headers.reduce((r, o) => r + o.getSize(), 0)) != null
            ? t
            : 0;
        });
    },
  };
let oo = null;
function Im() {
  if (typeof oo == "boolean") return oo;
  let e = !1;
  try {
    const t = {
        get passive() {
          return (e = !0), !1;
        },
      },
      n = () => {};
    window.addEventListener("test", n, t),
      window.removeEventListener("test", n);
  } catch {
    e = !1;
  }
  return (oo = e), oo;
}
function Gi(e) {
  return e.type === "touchstart";
}
const Dm = {
  getInitialState: (e) => ({ columnVisibility: {}, ...e }),
  getDefaultOptions: (e) => ({
    onColumnVisibilityChange: $e("columnVisibility", e),
  }),
  createColumn: (e, t) => {
    (e.toggleVisibility = (n) => {
      e.getCanHide() &&
        t.setColumnVisibility((r) => ({
          ...r,
          [e.id]: n ?? !e.getIsVisible(),
        }));
    }),
      (e.getIsVisible = () => {
        var n, r;
        const o = e.columns;
        return (n = o.length
          ? o.some((i) => i.getIsVisible())
          : (r = t.getState().columnVisibility) == null
          ? void 0
          : r[e.id]) != null
          ? n
          : !0;
      }),
      (e.getCanHide = () => {
        var n, r;
        return (
          ((n = e.columnDef.enableHiding) != null ? n : !0) &&
          ((r = t.options.enableHiding) != null ? r : !0)
        );
      }),
      (e.getToggleVisibilityHandler = () => (n) => {
        e.toggleVisibility == null || e.toggleVisibility(n.target.checked);
      });
  },
  createRow: (e, t) => {
    (e._getAllVisibleCells = I(
      () => [e.getAllCells(), t.getState().columnVisibility],
      (n) => n.filter((r) => r.column.getIsVisible()),
      D(t.options, "debugRows")
    )),
      (e.getVisibleCells = I(
        () => [
          e.getLeftVisibleCells(),
          e.getCenterVisibleCells(),
          e.getRightVisibleCells(),
        ],
        (n, r, o) => [...n, ...r, ...o],
        D(t.options, "debugRows")
      ));
  },
  createTable: (e) => {
    const t = (n, r) =>
      I(
        () => [
          r(),
          r()
            .filter((o) => o.getIsVisible())
            .map((o) => o.id)
            .join("_"),
        ],
        (o) =>
          o.filter((i) => (i.getIsVisible == null ? void 0 : i.getIsVisible())),
        D(e.options, "debugColumns")
      );
    (e.getVisibleFlatColumns = t("getVisibleFlatColumns", () =>
      e.getAllFlatColumns()
    )),
      (e.getVisibleLeafColumns = t("getVisibleLeafColumns", () =>
        e.getAllLeafColumns()
      )),
      (e.getLeftVisibleLeafColumns = t("getLeftVisibleLeafColumns", () =>
        e.getLeftLeafColumns()
      )),
      (e.getRightVisibleLeafColumns = t("getRightVisibleLeafColumns", () =>
        e.getRightLeafColumns()
      )),
      (e.getCenterVisibleLeafColumns = t("getCenterVisibleLeafColumns", () =>
        e.getCenterLeafColumns()
      )),
      (e.setColumnVisibility = (n) =>
        e.options.onColumnVisibilityChange == null
          ? void 0
          : e.options.onColumnVisibilityChange(n)),
      (e.resetColumnVisibility = (n) => {
        var r;
        e.setColumnVisibility(
          n ? {} : (r = e.initialState.columnVisibility) != null ? r : {}
        );
      }),
      (e.toggleAllColumnsVisible = (n) => {
        var r;
        (n = (r = n) != null ? r : !e.getIsAllColumnsVisible()),
          e.setColumnVisibility(
            e
              .getAllLeafColumns()
              .reduce(
                (o, i) => ({
                  ...o,
                  [i.id]: n || !(i.getCanHide != null && i.getCanHide()),
                }),
                {}
              )
          );
      }),
      (e.getIsAllColumnsVisible = () =>
        !e
          .getAllLeafColumns()
          .some((n) => !(n.getIsVisible != null && n.getIsVisible()))),
      (e.getIsSomeColumnsVisible = () =>
        e
          .getAllLeafColumns()
          .some((n) => (n.getIsVisible == null ? void 0 : n.getIsVisible()))),
      (e.getToggleAllColumnsVisibilityHandler = () => (n) => {
        var r;
        e.toggleAllColumnsVisible((r = n.target) == null ? void 0 : r.checked);
      });
  },
};
function cr(e, t) {
  return t
    ? t === "center"
      ? e.getCenterVisibleLeafColumns()
      : t === "left"
      ? e.getLeftVisibleLeafColumns()
      : e.getRightVisibleLeafColumns()
    : e.getVisibleLeafColumns();
}
const Mm = {
    createTable: (e) => {
      (e._getGlobalFacetedRowModel =
        e.options.getFacetedRowModel &&
        e.options.getFacetedRowModel(e, "__global__")),
        (e.getGlobalFacetedRowModel = () =>
          e.options.manualFiltering || !e._getGlobalFacetedRowModel
            ? e.getPreFilteredRowModel()
            : e._getGlobalFacetedRowModel()),
        (e._getGlobalFacetedUniqueValues =
          e.options.getFacetedUniqueValues &&
          e.options.getFacetedUniqueValues(e, "__global__")),
        (e.getGlobalFacetedUniqueValues = () =>
          e._getGlobalFacetedUniqueValues
            ? e._getGlobalFacetedUniqueValues()
            : new Map()),
        (e._getGlobalFacetedMinMaxValues =
          e.options.getFacetedMinMaxValues &&
          e.options.getFacetedMinMaxValues(e, "__global__")),
        (e.getGlobalFacetedMinMaxValues = () => {
          if (e._getGlobalFacetedMinMaxValues)
            return e._getGlobalFacetedMinMaxValues();
        });
    },
  },
  jm = {
    getInitialState: (e) => ({ globalFilter: void 0, ...e }),
    getDefaultOptions: (e) => ({
      onGlobalFilterChange: $e("globalFilter", e),
      globalFilterFn: "auto",
      getColumnCanGlobalFilter: (t) => {
        var n;
        const r =
          (n = e.getCoreRowModel().flatRows[0]) == null ||
          (n = n._getAllCellsByColumnId()[t.id]) == null
            ? void 0
            : n.getValue();
        return typeof r == "string" || typeof r == "number";
      },
    }),
    createColumn: (e, t) => {
      e.getCanGlobalFilter = () => {
        var n, r, o, i;
        return (
          ((n = e.columnDef.enableGlobalFilter) != null ? n : !0) &&
          ((r = t.options.enableGlobalFilter) != null ? r : !0) &&
          ((o = t.options.enableFilters) != null ? o : !0) &&
          ((i =
            t.options.getColumnCanGlobalFilter == null
              ? void 0
              : t.options.getColumnCanGlobalFilter(e)) != null
            ? i
            : !0) &&
          !!e.accessorFn
        );
      };
    },
    createTable: (e) => {
      (e.getGlobalAutoFilterFn = () => lt.includesString),
        (e.getGlobalFilterFn = () => {
          var t, n;
          const { globalFilterFn: r } = e.options;
          return gi(r)
            ? r
            : r === "auto"
            ? e.getGlobalAutoFilterFn()
            : (t = (n = e.options.filterFns) == null ? void 0 : n[r]) != null
            ? t
            : lt[r];
        }),
        (e.setGlobalFilter = (t) => {
          e.options.onGlobalFilterChange == null ||
            e.options.onGlobalFilterChange(t);
        }),
        (e.resetGlobalFilter = (t) => {
          e.setGlobalFilter(t ? void 0 : e.initialState.globalFilter);
        });
    },
  },
  Tm = {
    getInitialState: (e) => ({ expanded: {}, ...e }),
    getDefaultOptions: (e) => ({
      onExpandedChange: $e("expanded", e),
      paginateExpandedRows: !0,
    }),
    createTable: (e) => {
      let t = !1,
        n = !1;
      (e._autoResetExpanded = () => {
        var r, o;
        if (!t) {
          e._queue(() => {
            t = !0;
          });
          return;
        }
        if (
          (r =
            (o = e.options.autoResetAll) != null
              ? o
              : e.options.autoResetExpanded) != null
            ? r
            : !e.options.manualExpanding
        ) {
          if (n) return;
          (n = !0),
            e._queue(() => {
              e.resetExpanded(), (n = !1);
            });
        }
      }),
        (e.setExpanded = (r) =>
          e.options.onExpandedChange == null
            ? void 0
            : e.options.onExpandedChange(r)),
        (e.toggleAllRowsExpanded = (r) => {
          r ?? !e.getIsAllRowsExpanded()
            ? e.setExpanded(!0)
            : e.setExpanded({});
        }),
        (e.resetExpanded = (r) => {
          var o, i;
          e.setExpanded(
            r
              ? {}
              : (o = (i = e.initialState) == null ? void 0 : i.expanded) != null
              ? o
              : {}
          );
        }),
        (e.getCanSomeRowsExpand = () =>
          e.getPrePaginationRowModel().flatRows.some((r) => r.getCanExpand())),
        (e.getToggleAllRowsExpandedHandler = () => (r) => {
          r.persist == null || r.persist(), e.toggleAllRowsExpanded();
        }),
        (e.getIsSomeRowsExpanded = () => {
          const r = e.getState().expanded;
          return r === !0 || Object.values(r).some(Boolean);
        }),
        (e.getIsAllRowsExpanded = () => {
          const r = e.getState().expanded;
          return typeof r == "boolean"
            ? r === !0
            : !(
                !Object.keys(r).length ||
                e.getRowModel().flatRows.some((o) => !o.getIsExpanded())
              );
        }),
        (e.getExpandedDepth = () => {
          let r = 0;
          return (
            (e.getState().expanded === !0
              ? Object.keys(e.getRowModel().rowsById)
              : Object.keys(e.getState().expanded)
            ).forEach((i) => {
              const l = i.split(".");
              r = Math.max(r, l.length);
            }),
            r
          );
        }),
        (e.getPreExpandedRowModel = () => e.getSortedRowModel()),
        (e.getExpandedRowModel = () => (
          !e._getExpandedRowModel &&
            e.options.getExpandedRowModel &&
            (e._getExpandedRowModel = e.options.getExpandedRowModel(e)),
          e.options.manualExpanding || !e._getExpandedRowModel
            ? e.getPreExpandedRowModel()
            : e._getExpandedRowModel()
        ));
    },
    createRow: (e, t) => {
      (e.toggleExpanded = (n) => {
        t.setExpanded((r) => {
          var o;
          const i = r === !0 ? !0 : !!(r != null && r[e.id]);
          let l = {};
          if (
            (r === !0
              ? Object.keys(t.getRowModel().rowsById).forEach((s) => {
                  l[s] = !0;
                })
              : (l = r),
            (n = (o = n) != null ? o : !i),
            !i && n)
          )
            return { ...l, [e.id]: !0 };
          if (i && !n) {
            const { [e.id]: s, ...a } = l;
            return a;
          }
          return r;
        });
      }),
        (e.getIsExpanded = () => {
          var n;
          const r = t.getState().expanded;
          return !!((n =
            t.options.getIsRowExpanded == null
              ? void 0
              : t.options.getIsRowExpanded(e)) != null
            ? n
            : r === !0 || (r != null && r[e.id]));
        }),
        (e.getCanExpand = () => {
          var n, r, o;
          return (n =
            t.options.getRowCanExpand == null
              ? void 0
              : t.options.getRowCanExpand(e)) != null
            ? n
            : ((r = t.options.enableExpanding) != null ? r : !0) &&
                !!((o = e.subRows) != null && o.length);
        }),
        (e.getIsAllParentsExpanded = () => {
          let n = !0,
            r = e;
          for (; n && r.parentId; )
            (r = t.getRow(r.parentId, !0)), (n = r.getIsExpanded());
          return n;
        }),
        (e.getToggleExpandedHandler = () => {
          const n = e.getCanExpand();
          return () => {
            n && e.toggleExpanded();
          };
        });
    },
  },
  Wl = 0,
  Ql = 10,
  Ki = () => ({ pageIndex: Wl, pageSize: Ql }),
  zm = {
    getInitialState: (e) => ({
      ...e,
      pagination: { ...Ki(), ...(e == null ? void 0 : e.pagination) },
    }),
    getDefaultOptions: (e) => ({ onPaginationChange: $e("pagination", e) }),
    createTable: (e) => {
      let t = !1,
        n = !1;
      (e._autoResetPageIndex = () => {
        var r, o;
        if (!t) {
          e._queue(() => {
            t = !0;
          });
          return;
        }
        if (
          (r =
            (o = e.options.autoResetAll) != null
              ? o
              : e.options.autoResetPageIndex) != null
            ? r
            : !e.options.manualPagination
        ) {
          if (n) return;
          (n = !0),
            e._queue(() => {
              e.resetPageIndex(), (n = !1);
            });
        }
      }),
        (e.setPagination = (r) => {
          const o = (i) => Nt(r, i);
          return e.options.onPaginationChange == null
            ? void 0
            : e.options.onPaginationChange(o);
        }),
        (e.resetPagination = (r) => {
          var o;
          e.setPagination(
            r ? Ki() : (o = e.initialState.pagination) != null ? o : Ki()
          );
        }),
        (e.setPageIndex = (r) => {
          e.setPagination((o) => {
            let i = Nt(r, o.pageIndex);
            const l =
              typeof e.options.pageCount > "u" || e.options.pageCount === -1
                ? Number.MAX_SAFE_INTEGER
                : e.options.pageCount - 1;
            return (i = Math.max(0, Math.min(i, l))), { ...o, pageIndex: i };
          });
        }),
        (e.resetPageIndex = (r) => {
          var o, i;
          e.setPageIndex(
            r
              ? Wl
              : (o =
                  (i = e.initialState) == null || (i = i.pagination) == null
                    ? void 0
                    : i.pageIndex) != null
              ? o
              : Wl
          );
        }),
        (e.resetPageSize = (r) => {
          var o, i;
          e.setPageSize(
            r
              ? Ql
              : (o =
                  (i = e.initialState) == null || (i = i.pagination) == null
                    ? void 0
                    : i.pageSize) != null
              ? o
              : Ql
          );
        }),
        (e.setPageSize = (r) => {
          e.setPagination((o) => {
            const i = Math.max(1, Nt(r, o.pageSize)),
              l = o.pageSize * o.pageIndex,
              s = Math.floor(l / i);
            return { ...o, pageIndex: s, pageSize: i };
          });
        }),
        (e.setPageCount = (r) =>
          e.setPagination((o) => {
            var i;
            let l = Nt(r, (i = e.options.pageCount) != null ? i : -1);
            return (
              typeof l == "number" && (l = Math.max(-1, l)),
              { ...o, pageCount: l }
            );
          })),
        (e.getPageOptions = I(
          () => [e.getPageCount()],
          (r) => {
            let o = [];
            return (
              r && r > 0 && (o = [...new Array(r)].fill(null).map((i, l) => l)),
              o
            );
          },
          D(e.options, "debugTable")
        )),
        (e.getCanPreviousPage = () => e.getState().pagination.pageIndex > 0),
        (e.getCanNextPage = () => {
          const { pageIndex: r } = e.getState().pagination,
            o = e.getPageCount();
          return o === -1 ? !0 : o === 0 ? !1 : r < o - 1;
        }),
        (e.previousPage = () => e.setPageIndex((r) => r - 1)),
        (e.nextPage = () => e.setPageIndex((r) => r + 1)),
        (e.firstPage = () => e.setPageIndex(0)),
        (e.lastPage = () => e.setPageIndex(e.getPageCount() - 1)),
        (e.getPrePaginationRowModel = () => e.getExpandedRowModel()),
        (e.getPaginationRowModel = () => (
          !e._getPaginationRowModel &&
            e.options.getPaginationRowModel &&
            (e._getPaginationRowModel = e.options.getPaginationRowModel(e)),
          e.options.manualPagination || !e._getPaginationRowModel
            ? e.getPrePaginationRowModel()
            : e._getPaginationRowModel()
        )),
        (e.getPageCount = () => {
          var r;
          return (r = e.options.pageCount) != null
            ? r
            : Math.ceil(e.getRowCount() / e.getState().pagination.pageSize);
        }),
        (e.getRowCount = () => {
          var r;
          return (r = e.options.rowCount) != null
            ? r
            : e.getPrePaginationRowModel().rows.length;
        });
    },
  },
  Wi = () => ({ top: [], bottom: [] }),
  Vm = {
    getInitialState: (e) => ({ rowPinning: Wi(), ...e }),
    getDefaultOptions: (e) => ({ onRowPinningChange: $e("rowPinning", e) }),
    createRow: (e, t) => {
      (e.pin = (n, r, o) => {
        const i = r
            ? e.getLeafRows().map((a) => {
                let { id: u } = a;
                return u;
              })
            : [],
          l = o
            ? e.getParentRows().map((a) => {
                let { id: u } = a;
                return u;
              })
            : [],
          s = new Set([...l, e.id, ...i]);
        t.setRowPinning((a) => {
          var u, c;
          if (n === "bottom") {
            var f, d;
            return {
              top: ((f = a == null ? void 0 : a.top) != null ? f : []).filter(
                (y) => !(s != null && s.has(y))
              ),
              bottom: [
                ...((d = a == null ? void 0 : a.bottom) != null
                  ? d
                  : []
                ).filter((y) => !(s != null && s.has(y))),
                ...Array.from(s),
              ],
            };
          }
          if (n === "top") {
            var p, v;
            return {
              top: [
                ...((p = a == null ? void 0 : a.top) != null ? p : []).filter(
                  (y) => !(s != null && s.has(y))
                ),
                ...Array.from(s),
              ],
              bottom: ((v = a == null ? void 0 : a.bottom) != null
                ? v
                : []
              ).filter((y) => !(s != null && s.has(y))),
            };
          }
          return {
            top: ((u = a == null ? void 0 : a.top) != null ? u : []).filter(
              (y) => !(s != null && s.has(y))
            ),
            bottom: ((c = a == null ? void 0 : a.bottom) != null
              ? c
              : []
            ).filter((y) => !(s != null && s.has(y))),
          };
        });
      }),
        (e.getCanPin = () => {
          var n;
          const { enableRowPinning: r, enablePinning: o } = t.options;
          return typeof r == "function" ? r(e) : (n = r ?? o) != null ? n : !0;
        }),
        (e.getIsPinned = () => {
          const n = [e.id],
            { top: r, bottom: o } = t.getState().rowPinning,
            i = n.some((s) => (r == null ? void 0 : r.includes(s))),
            l = n.some((s) => (o == null ? void 0 : o.includes(s)));
          return i ? "top" : l ? "bottom" : !1;
        }),
        (e.getPinnedIndex = () => {
          var n, r;
          const o = e.getIsPinned();
          if (!o) return -1;
          const i =
            (n = o === "top" ? t.getTopRows() : t.getBottomRows()) == null
              ? void 0
              : n.map((l) => {
                  let { id: s } = l;
                  return s;
                });
          return (r = i == null ? void 0 : i.indexOf(e.id)) != null ? r : -1;
        });
    },
    createTable: (e) => {
      (e.setRowPinning = (t) =>
        e.options.onRowPinningChange == null
          ? void 0
          : e.options.onRowPinningChange(t)),
        (e.resetRowPinning = (t) => {
          var n, r;
          return e.setRowPinning(
            t
              ? Wi()
              : (n = (r = e.initialState) == null ? void 0 : r.rowPinning) !=
                null
              ? n
              : Wi()
          );
        }),
        (e.getIsSomeRowsPinned = (t) => {
          var n;
          const r = e.getState().rowPinning;
          if (!t) {
            var o, i;
            return !!(
              ((o = r.top) != null && o.length) ||
              ((i = r.bottom) != null && i.length)
            );
          }
          return !!((n = r[t]) != null && n.length);
        }),
        (e._getPinnedRows = (t, n, r) => {
          var o;
          return (
            (o = e.options.keepPinnedRows) == null || o
              ? (n ?? []).map((l) => {
                  const s = e.getRow(l, !0);
                  return s.getIsAllParentsExpanded() ? s : null;
                })
              : (n ?? []).map((l) => t.find((s) => s.id === l))
          )
            .filter(Boolean)
            .map((l) => ({ ...l, position: r }));
        }),
        (e.getTopRows = I(
          () => [e.getRowModel().rows, e.getState().rowPinning.top],
          (t, n) => e._getPinnedRows(t, n, "top"),
          D(e.options, "debugRows")
        )),
        (e.getBottomRows = I(
          () => [e.getRowModel().rows, e.getState().rowPinning.bottom],
          (t, n) => e._getPinnedRows(t, n, "bottom"),
          D(e.options, "debugRows")
        )),
        (e.getCenterRows = I(
          () => [
            e.getRowModel().rows,
            e.getState().rowPinning.top,
            e.getState().rowPinning.bottom,
          ],
          (t, n, r) => {
            const o = new Set([...(n ?? []), ...(r ?? [])]);
            return t.filter((i) => !o.has(i.id));
          },
          D(e.options, "debugRows")
        ));
    },
  },
  Am = {
    getInitialState: (e) => ({ rowSelection: {}, ...e }),
    getDefaultOptions: (e) => ({
      onRowSelectionChange: $e("rowSelection", e),
      enableRowSelection: !0,
      enableMultiRowSelection: !0,
      enableSubRowSelection: !0,
    }),
    createTable: (e) => {
      (e.setRowSelection = (t) =>
        e.options.onRowSelectionChange == null
          ? void 0
          : e.options.onRowSelectionChange(t)),
        (e.resetRowSelection = (t) => {
          var n;
          return e.setRowSelection(
            t ? {} : (n = e.initialState.rowSelection) != null ? n : {}
          );
        }),
        (e.toggleAllRowsSelected = (t) => {
          e.setRowSelection((n) => {
            t = typeof t < "u" ? t : !e.getIsAllRowsSelected();
            const r = { ...n },
              o = e.getPreGroupedRowModel().flatRows;
            return (
              t
                ? o.forEach((i) => {
                    i.getCanSelect() && (r[i.id] = !0);
                  })
                : o.forEach((i) => {
                    delete r[i.id];
                  }),
              r
            );
          });
        }),
        (e.toggleAllPageRowsSelected = (t) =>
          e.setRowSelection((n) => {
            const r = typeof t < "u" ? t : !e.getIsAllPageRowsSelected(),
              o = { ...n };
            return (
              e.getRowModel().rows.forEach((i) => {
                Yl(o, i.id, r, !0, e);
              }),
              o
            );
          })),
        (e.getPreSelectedRowModel = () => e.getCoreRowModel()),
        (e.getSelectedRowModel = I(
          () => [e.getState().rowSelection, e.getCoreRowModel()],
          (t, n) =>
            Object.keys(t).length
              ? Qi(e, n)
              : { rows: [], flatRows: [], rowsById: {} },
          D(e.options, "debugTable")
        )),
        (e.getFilteredSelectedRowModel = I(
          () => [e.getState().rowSelection, e.getFilteredRowModel()],
          (t, n) =>
            Object.keys(t).length
              ? Qi(e, n)
              : { rows: [], flatRows: [], rowsById: {} },
          D(e.options, "debugTable")
        )),
        (e.getGroupedSelectedRowModel = I(
          () => [e.getState().rowSelection, e.getSortedRowModel()],
          (t, n) =>
            Object.keys(t).length
              ? Qi(e, n)
              : { rows: [], flatRows: [], rowsById: {} },
          D(e.options, "debugTable")
        )),
        (e.getIsAllRowsSelected = () => {
          const t = e.getFilteredRowModel().flatRows,
            { rowSelection: n } = e.getState();
          let r = !!(t.length && Object.keys(n).length);
          return (
            r && t.some((o) => o.getCanSelect() && !n[o.id]) && (r = !1), r
          );
        }),
        (e.getIsAllPageRowsSelected = () => {
          const t = e
              .getPaginationRowModel()
              .flatRows.filter((o) => o.getCanSelect()),
            { rowSelection: n } = e.getState();
          let r = !!t.length;
          return r && t.some((o) => !n[o.id]) && (r = !1), r;
        }),
        (e.getIsSomeRowsSelected = () => {
          var t;
          const n = Object.keys(
            (t = e.getState().rowSelection) != null ? t : {}
          ).length;
          return n > 0 && n < e.getFilteredRowModel().flatRows.length;
        }),
        (e.getIsSomePageRowsSelected = () => {
          const t = e.getPaginationRowModel().flatRows;
          return e.getIsAllPageRowsSelected()
            ? !1
            : t
                .filter((n) => n.getCanSelect())
                .some((n) => n.getIsSelected() || n.getIsSomeSelected());
        }),
        (e.getToggleAllRowsSelectedHandler = () => (t) => {
          e.toggleAllRowsSelected(t.target.checked);
        }),
        (e.getToggleAllPageRowsSelectedHandler = () => (t) => {
          e.toggleAllPageRowsSelected(t.target.checked);
        });
    },
    createRow: (e, t) => {
      (e.toggleSelected = (n, r) => {
        const o = e.getIsSelected();
        t.setRowSelection((i) => {
          var l;
          if (((n = typeof n < "u" ? n : !o), e.getCanSelect() && o === n))
            return i;
          const s = { ...i };
          return (
            Yl(
              s,
              e.id,
              n,
              (l = r == null ? void 0 : r.selectChildren) != null ? l : !0,
              t
            ),
            s
          );
        });
      }),
        (e.getIsSelected = () => {
          const { rowSelection: n } = t.getState();
          return Xs(e, n);
        }),
        (e.getIsSomeSelected = () => {
          const { rowSelection: n } = t.getState();
          return Xl(e, n) === "some";
        }),
        (e.getIsAllSubRowsSelected = () => {
          const { rowSelection: n } = t.getState();
          return Xl(e, n) === "all";
        }),
        (e.getCanSelect = () => {
          var n;
          return typeof t.options.enableRowSelection == "function"
            ? t.options.enableRowSelection(e)
            : (n = t.options.enableRowSelection) != null
            ? n
            : !0;
        }),
        (e.getCanSelectSubRows = () => {
          var n;
          return typeof t.options.enableSubRowSelection == "function"
            ? t.options.enableSubRowSelection(e)
            : (n = t.options.enableSubRowSelection) != null
            ? n
            : !0;
        }),
        (e.getCanMultiSelect = () => {
          var n;
          return typeof t.options.enableMultiRowSelection == "function"
            ? t.options.enableMultiRowSelection(e)
            : (n = t.options.enableMultiRowSelection) != null
            ? n
            : !0;
        }),
        (e.getToggleSelectedHandler = () => {
          const n = e.getCanSelect();
          return (r) => {
            var o;
            n && e.toggleSelected((o = r.target) == null ? void 0 : o.checked);
          };
        });
    },
  },
  Yl = (e, t, n, r, o) => {
    var i;
    const l = o.getRow(t, !0);
    n
      ? (l.getCanMultiSelect() || Object.keys(e).forEach((s) => delete e[s]),
        l.getCanSelect() && (e[t] = !0))
      : delete e[t],
      r &&
        (i = l.subRows) != null &&
        i.length &&
        l.getCanSelectSubRows() &&
        l.subRows.forEach((s) => Yl(e, s.id, n, r, o));
  };
function Qi(e, t) {
  const n = e.getState().rowSelection,
    r = [],
    o = {},
    i = function (l, s) {
      return l
        .map((a) => {
          var u;
          const c = Xs(a, n);
          if (
            (c && (r.push(a), (o[a.id] = a)),
            (u = a.subRows) != null &&
              u.length &&
              (a = { ...a, subRows: i(a.subRows) }),
            c)
          )
            return a;
        })
        .filter(Boolean);
    };
  return { rows: i(t.rows), flatRows: r, rowsById: o };
}
function Xs(e, t) {
  var n;
  return (n = t[e.id]) != null ? n : !1;
}
function Xl(e, t, n) {
  var r;
  if (!((r = e.subRows) != null && r.length)) return !1;
  let o = !0,
    i = !1;
  return (
    e.subRows.forEach((l) => {
      if (
        !(i && !o) &&
        (l.getCanSelect() && (Xs(l, t) ? (i = !0) : (o = !1)),
        l.subRows && l.subRows.length)
      ) {
        const s = Xl(l, t);
        s === "all" ? (i = !0) : (s === "some" && (i = !0), (o = !1));
      }
    }),
    o ? "all" : i ? "some" : !1
  );
}
const Jl = /([0-9]+)/gm,
  Hm = (e, t, n) =>
    ef(Tt(e.getValue(n)).toLowerCase(), Tt(t.getValue(n)).toLowerCase()),
  Um = (e, t, n) => ef(Tt(e.getValue(n)), Tt(t.getValue(n))),
  Bm = (e, t, n) =>
    Js(Tt(e.getValue(n)).toLowerCase(), Tt(t.getValue(n)).toLowerCase()),
  Gm = (e, t, n) => Js(Tt(e.getValue(n)), Tt(t.getValue(n))),
  Km = (e, t, n) => {
    const r = e.getValue(n),
      o = t.getValue(n);
    return r > o ? 1 : r < o ? -1 : 0;
  },
  Wm = (e, t, n) => Js(e.getValue(n), t.getValue(n));
function Js(e, t) {
  return e === t ? 0 : e > t ? 1 : -1;
}
function Tt(e) {
  return typeof e == "number"
    ? isNaN(e) || e === 1 / 0 || e === -1 / 0
      ? ""
      : String(e)
    : typeof e == "string"
    ? e
    : "";
}
function ef(e, t) {
  const n = e.split(Jl).filter(Boolean),
    r = t.split(Jl).filter(Boolean);
  for (; n.length && r.length; ) {
    const o = n.shift(),
      i = r.shift(),
      l = parseInt(o, 10),
      s = parseInt(i, 10),
      a = [l, s].sort();
    if (isNaN(a[0])) {
      if (o > i) return 1;
      if (i > o) return -1;
      continue;
    }
    if (isNaN(a[1])) return isNaN(l) ? -1 : 1;
    if (l > s) return 1;
    if (s > l) return -1;
  }
  return n.length - r.length;
}
const Yn = {
    alphanumeric: Hm,
    alphanumericCaseSensitive: Um,
    text: Bm,
    textCaseSensitive: Gm,
    datetime: Km,
    basic: Wm,
  },
  Qm = {
    getInitialState: (e) => ({ sorting: [], ...e }),
    getDefaultColumnDef: () => ({ sortingFn: "auto", sortUndefined: 1 }),
    getDefaultOptions: (e) => ({
      onSortingChange: $e("sorting", e),
      isMultiSortEvent: (t) => t.shiftKey,
    }),
    createColumn: (e, t) => {
      (e.getAutoSortingFn = () => {
        const n = t.getFilteredRowModel().flatRows.slice(10);
        let r = !1;
        for (const o of n) {
          const i = o == null ? void 0 : o.getValue(e.id);
          if (Object.prototype.toString.call(i) === "[object Date]")
            return Yn.datetime;
          if (typeof i == "string" && ((r = !0), i.split(Jl).length > 1))
            return Yn.alphanumeric;
        }
        return r ? Yn.text : Yn.basic;
      }),
        (e.getAutoSortDir = () => {
          const n = t.getFilteredRowModel().flatRows[0];
          return typeof (n == null ? void 0 : n.getValue(e.id)) == "string"
            ? "asc"
            : "desc";
        }),
        (e.getSortingFn = () => {
          var n, r;
          if (!e) throw new Error();
          return gi(e.columnDef.sortingFn)
            ? e.columnDef.sortingFn
            : e.columnDef.sortingFn === "auto"
            ? e.getAutoSortingFn()
            : (n =
                (r = t.options.sortingFns) == null
                  ? void 0
                  : r[e.columnDef.sortingFn]) != null
            ? n
            : Yn[e.columnDef.sortingFn];
        }),
        (e.toggleSorting = (n, r) => {
          const o = e.getNextSortingOrder(),
            i = typeof n < "u" && n !== null;
          t.setSorting((l) => {
            const s = l == null ? void 0 : l.find((p) => p.id === e.id),
              a = l == null ? void 0 : l.findIndex((p) => p.id === e.id);
            let u = [],
              c,
              f = i ? n : o === "desc";
            if (
              (l != null && l.length && e.getCanMultiSort() && r
                ? s
                  ? (c = "toggle")
                  : (c = "add")
                : l != null && l.length && a !== l.length - 1
                ? (c = "replace")
                : s
                ? (c = "toggle")
                : (c = "replace"),
              c === "toggle" && (i || o || (c = "remove")),
              c === "add")
            ) {
              var d;
              (u = [...l, { id: e.id, desc: f }]),
                u.splice(
                  0,
                  u.length -
                    ((d = t.options.maxMultiSortColCount) != null
                      ? d
                      : Number.MAX_SAFE_INTEGER)
                );
            } else
              c === "toggle"
                ? (u = l.map((p) => (p.id === e.id ? { ...p, desc: f } : p)))
                : c === "remove"
                ? (u = l.filter((p) => p.id !== e.id))
                : (u = [{ id: e.id, desc: f }]);
            return u;
          });
        }),
        (e.getFirstSortDir = () => {
          var n, r;
          return (
            (n =
              (r = e.columnDef.sortDescFirst) != null
                ? r
                : t.options.sortDescFirst) != null
              ? n
              : e.getAutoSortDir() === "desc"
          )
            ? "desc"
            : "asc";
        }),
        (e.getNextSortingOrder = (n) => {
          var r, o;
          const i = e.getFirstSortDir(),
            l = e.getIsSorted();
          return l
            ? l !== i &&
              ((r = t.options.enableSortingRemoval) == null || r) &&
              (!(n && (o = t.options.enableMultiRemove) != null) || o)
              ? !1
              : l === "desc"
              ? "asc"
              : "desc"
            : i;
        }),
        (e.getCanSort = () => {
          var n, r;
          return (
            ((n = e.columnDef.enableSorting) != null ? n : !0) &&
            ((r = t.options.enableSorting) != null ? r : !0) &&
            !!e.accessorFn
          );
        }),
        (e.getCanMultiSort = () => {
          var n, r;
          return (n =
            (r = e.columnDef.enableMultiSort) != null
              ? r
              : t.options.enableMultiSort) != null
            ? n
            : !!e.accessorFn;
        }),
        (e.getIsSorted = () => {
          var n;
          const r =
            (n = t.getState().sorting) == null
              ? void 0
              : n.find((o) => o.id === e.id);
          return r ? (r.desc ? "desc" : "asc") : !1;
        }),
        (e.getSortIndex = () => {
          var n, r;
          return (n =
            (r = t.getState().sorting) == null
              ? void 0
              : r.findIndex((o) => o.id === e.id)) != null
            ? n
            : -1;
        }),
        (e.clearSorting = () => {
          t.setSorting((n) =>
            n != null && n.length ? n.filter((r) => r.id !== e.id) : []
          );
        }),
        (e.getToggleSortingHandler = () => {
          const n = e.getCanSort();
          return (r) => {
            n &&
              (r.persist == null || r.persist(),
              e.toggleSorting == null ||
                e.toggleSorting(
                  void 0,
                  e.getCanMultiSort()
                    ? t.options.isMultiSortEvent == null
                      ? void 0
                      : t.options.isMultiSortEvent(r)
                    : !1
                ));
          };
        });
    },
    createTable: (e) => {
      (e.setSorting = (t) =>
        e.options.onSortingChange == null
          ? void 0
          : e.options.onSortingChange(t)),
        (e.resetSorting = (t) => {
          var n, r;
          e.setSorting(
            t
              ? []
              : (n = (r = e.initialState) == null ? void 0 : r.sorting) != null
              ? n
              : []
          );
        }),
        (e.getPreSortedRowModel = () => e.getGroupedRowModel()),
        (e.getSortedRowModel = () => (
          !e._getSortedRowModel &&
            e.options.getSortedRowModel &&
            (e._getSortedRowModel = e.options.getSortedRowModel(e)),
          e.options.manualSorting || !e._getSortedRowModel
            ? e.getPreSortedRowModel()
            : e._getSortedRowModel()
        ));
    },
  },
  Ym = [hm, Dm, $m, Fm, vm, ym, Mm, jm, Qm, _m, Tm, zm, Vm, Am, Om];
function Xm(e) {
  var t, n;
  const r = [...Ym, ...((t = e._features) != null ? t : [])];
  let o = { _features: r };
  const i = o._features.reduce(
      (d, p) =>
        Object.assign(
          d,
          p.getDefaultOptions == null ? void 0 : p.getDefaultOptions(o)
        ),
      {}
    ),
    l = (d) =>
      o.options.mergeOptions ? o.options.mergeOptions(i, d) : { ...i, ...d };
  let a = { ...{}, ...((n = e.initialState) != null ? n : {}) };
  o._features.forEach((d) => {
    var p;
    a =
      (p = d.getInitialState == null ? void 0 : d.getInitialState(a)) != null
        ? p
        : a;
  });
  const u = [];
  let c = !1;
  const f = {
    _features: r,
    options: { ...i, ...e },
    initialState: a,
    _queue: (d) => {
      u.push(d),
        c ||
          ((c = !0),
          Promise.resolve()
            .then(() => {
              for (; u.length; ) u.shift()();
              c = !1;
            })
            .catch((p) =>
              setTimeout(() => {
                throw p;
              })
            ));
    },
    reset: () => {
      o.setState(o.initialState);
    },
    setOptions: (d) => {
      const p = Nt(d, o.options);
      o.options = l(p);
    },
    getState: () => o.options.state,
    setState: (d) => {
      o.options.onStateChange == null || o.options.onStateChange(d);
    },
    _getRowId: (d, p, v) => {
      var y;
      return (y =
        o.options.getRowId == null ? void 0 : o.options.getRowId(d, p, v)) !=
        null
        ? y
        : `${v ? [v.id, p].join(".") : p}`;
    },
    getCoreRowModel: () => (
      o._getCoreRowModel || (o._getCoreRowModel = o.options.getCoreRowModel(o)),
      o._getCoreRowModel()
    ),
    getRowModel: () => o.getPaginationRowModel(),
    getRow: (d, p) => {
      let v = (p ? o.getPrePaginationRowModel() : o.getRowModel()).rowsById[d];
      if (!v && ((v = o.getCoreRowModel().rowsById[d]), !v)) throw new Error();
      return v;
    },
    _getDefaultColumnDef: I(
      () => [o.options.defaultColumn],
      (d) => {
        var p;
        return (
          (d = (p = d) != null ? p : {}),
          {
            header: (v) => {
              const y = v.header.column.columnDef;
              return y.accessorKey ? y.accessorKey : y.accessorFn ? y.id : null;
            },
            cell: (v) => {
              var y, C;
              return (y =
                (C = v.renderValue()) == null || C.toString == null
                  ? void 0
                  : C.toString()) != null
                ? y
                : null;
            },
            ...o._features.reduce(
              (v, y) =>
                Object.assign(
                  v,
                  y.getDefaultColumnDef == null
                    ? void 0
                    : y.getDefaultColumnDef()
                ),
              {}
            ),
            ...d,
          }
        );
      },
      D(e, "debugColumns")
    ),
    _getColumnDefs: () => o.options.columns,
    getAllColumns: I(
      () => [o._getColumnDefs()],
      (d) => {
        const p = function (v, y, C) {
          return (
            C === void 0 && (C = 0),
            v.map((h) => {
              const g = pm(o, h, C, y),
                m = h;
              return (g.columns = m.columns ? p(m.columns, g, C + 1) : []), g;
            })
          );
        };
        return p(d);
      },
      D(e, "debugColumns")
    ),
    getAllFlatColumns: I(
      () => [o.getAllColumns()],
      (d) => d.flatMap((p) => p.getFlatColumns()),
      D(e, "debugColumns")
    ),
    _getAllFlatColumnsById: I(
      () => [o.getAllFlatColumns()],
      (d) => d.reduce((p, v) => ((p[v.id] = v), p), {}),
      D(e, "debugColumns")
    ),
    getAllLeafColumns: I(
      () => [o.getAllColumns(), o._getOrderColumnsFn()],
      (d, p) => {
        let v = d.flatMap((y) => y.getLeafColumns());
        return p(v);
      },
      D(e, "debugColumns")
    ),
    getColumn: (d) => o._getAllFlatColumnsById()[d],
  };
  Object.assign(o, f);
  for (let d = 0; d < o._features.length; d++) {
    const p = o._features[d];
    p == null || p.createTable == null || p.createTable(o);
  }
  return o;
}
function Jm() {
  return (e) =>
    I(
      () => [e.options.data],
      (t) => {
        const n = { rows: [], flatRows: [], rowsById: {} },
          r = function (o, i, l) {
            i === void 0 && (i = 0);
            const s = [];
            for (let u = 0; u < o.length; u++) {
              const c = mm(
                e,
                e._getRowId(o[u], u, l),
                o[u],
                u,
                i,
                void 0,
                l == null ? void 0 : l.id
              );
              if (
                (n.flatRows.push(c),
                (n.rowsById[c.id] = c),
                s.push(c),
                e.options.getSubRows)
              ) {
                var a;
                (c.originalSubRows = e.options.getSubRows(o[u], u)),
                  (a = c.originalSubRows) != null &&
                    a.length &&
                    (c.subRows = r(c.originalSubRows, i + 1, c));
              }
            }
            return s;
          };
        return (n.rows = r(t)), n;
      },
      D(e.options, "debugTable", "getRowModel", () => e._autoResetPageIndex())
    );
}
function qm() {
  return (e) =>
    I(
      () => [e.getState().sorting, e.getPreSortedRowModel()],
      (t, n) => {
        if (!n.rows.length || !(t != null && t.length)) return n;
        const r = e.getState().sorting,
          o = [],
          i = r.filter((a) => {
            var u;
            return (u = e.getColumn(a.id)) == null ? void 0 : u.getCanSort();
          }),
          l = {};
        i.forEach((a) => {
          const u = e.getColumn(a.id);
          u &&
            (l[a.id] = {
              sortUndefined: u.columnDef.sortUndefined,
              invertSorting: u.columnDef.invertSorting,
              sortingFn: u.getSortingFn(),
            });
        });
        const s = (a) => {
          const u = a.map((c) => ({ ...c }));
          return (
            u.sort((c, f) => {
              for (let p = 0; p < i.length; p += 1) {
                var d;
                const v = i[p],
                  y = l[v.id],
                  C = y.sortUndefined,
                  h = (d = v == null ? void 0 : v.desc) != null ? d : !1;
                let g = 0;
                if (C) {
                  const m = c.getValue(v.id),
                    w = f.getValue(v.id),
                    x = m === void 0,
                    k = w === void 0;
                  if (x || k) {
                    if (C === "first") return x ? -1 : 1;
                    if (C === "last") return x ? 1 : -1;
                    g = x && k ? 0 : x ? C : -C;
                  }
                }
                if ((g === 0 && (g = y.sortingFn(c, f, v.id)), g !== 0))
                  return h && (g *= -1), y.invertSorting && (g *= -1), g;
              }
              return c.index - f.index;
            }),
            u.forEach((c) => {
              var f;
              o.push(c),
                (f = c.subRows) != null &&
                  f.length &&
                  (c.subRows = s(c.subRows));
            }),
            u
          );
        };
        return { rows: s(n.rows), flatRows: o, rowsById: n.rowsById };
      },
      D(e.options, "debugTable", "getSortedRowModel", () =>
        e._autoResetPageIndex()
      )
    );
}
/**
 * react-table
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function pu(e, t) {
  return e ? (Zm(e) ? P.createElement(e, t) : e) : null;
}
function Zm(e) {
  return bm(e) || typeof e == "function" || e0(e);
}
function bm(e) {
  return (
    typeof e == "function" &&
    (() => {
      const t = Object.getPrototypeOf(e);
      return t.prototype && t.prototype.isReactComponent;
    })()
  );
}
function e0(e) {
  return (
    typeof e == "object" &&
    typeof e.$$typeof == "symbol" &&
    ["react.memo", "react.forward_ref"].includes(e.$$typeof.description)
  );
}
function t0(e) {
  const t = {
      state: {},
      onStateChange: () => {},
      renderFallbackValue: null,
      ...e,
    },
    [n] = P.useState(() => ({ current: Xm(t) })),
    [r, o] = P.useState(() => n.current.initialState);
  return (
    n.current.setOptions((i) => ({
      ...i,
      ...e,
      state: { ...r, ...e.state },
      onStateChange: (l) => {
        o(l), e.onStateChange == null || e.onStateChange(l);
      },
    })),
    n.current
  );
}
const re = cm(),
  io = [
    "80px",
    "144px",
    "120px",
    "240px",
    "124px",
    "124px",
    "124px",
    "124px",
    "124px",
    "108px",
    "108px",
    "124px",
    "140px",
    "152px",
    "124px",
    "208px",
    "208px",
    "120px",
    "340px",
  ],
  n0 = ({ data: e, pageSize: t = 50 }) => {
    const { t: n, i18n: r } = zn(),
      [o, i] = P.useState([]),
      [l, s] = P.useState(0),
      [a, u] = P.useState(""),
      [c, f] = P.useState(!1),
      [d, p] = P.useState(0),
      v = P.useRef(null),
      y = P.useRef(null),
      C = P.useRef(null);
    P.useEffect(() => {
      const j = () => {
          if (v.current) {
            const Q = v.current.getBoundingClientRect();
            f(Q.top <= 0);
          }
        },
        B = (Q) => {
          const Ie = Q.target;
          p(Ie.scrollLeft), C.current && (C.current.scrollLeft = Ie.scrollLeft);
        };
      return (
        window.addEventListener("scroll", j),
        v.current && v.current.addEventListener("scroll", B),
        () => {
          window.removeEventListener("scroll", j),
            v.current && v.current.removeEventListener("scroll", B);
        }
      );
    }, []);
    const h = [
        re.accessor((j) => "", {
          id: "index",
          header: () => (r.language === "en" ? "Index" : "項次"),
          cell: (j) => j.row.index + 1,
          enableSorting: !1,
        }),
        re.accessor("ACTION", {
          header: () => (r.language === "en" ? "Action" : "動作"),
          cell: (j) =>
            S.jsx("span", {
              className: `inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                j.getValue() === "OUT"
                  ? "bg-red-100 text-red-700"
                  : "bg-green-100 text-green-700"
              }`,
              children: j.getValue(),
            }),
        }),
        re.accessor("CODE", {
          header: () => (r.language === "en" ? "Drug Code" : "藥碼"),
        }),
        re.accessor("NAME", {
          header: () => (r.language === "en" ? "Drug Name" : "藥名"),
        }),
        re.accessor("TXN_QTY", {
          header: () =>
            r.language === "en" ? "Transaction Quantity" : "交易量",
        }),
        re.accessor("INV_QTY", {
          header: () => (r.language === "en" ? "Inventory Quantity" : "庫存量"),
        }),
        re.accessor("EBQ_QTY", {
          header: () => (r.language === "en" ? "Remaining Quantity" : "結存量"),
        }),
        re.accessor("PHY_QTY", {
          header: () =>
            r.language === "en" ? "Stocktaking Quantity" : "盤點量",
        }),
        re.accessor("MED_BAG_NUM", {
          header: () =>
            r.language === "en" ? "Medication Bag Number" : "領藥號",
          cell: (j) =>
            S.jsx("span", {
              className:
                "inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium",
              children: j.getValue(),
            }),
        }),
        re.accessor("MEDKND", {
          header: () => (r.language === "en" ? "Medical Category" : "診別"),
        }),
        re.accessor("STOREHOUSE", {
          header: () => (r.language === "en" ? "Storage Location" : "庫別"),
        }),
        re.accessor("OP", {
          header: () => (r.language === "en" ? "Operator" : "操作人"),
        }),
        re.accessor("PAT", {
          header: () => (r.language === "en" ? "Patient" : "病人姓名"),
        }),
        re.accessor("MRN", {
          header: () =>
            r.language === "en" ? "Medical Record Number" : "病歷號",
        }),
        re.accessor("WARD_NAME", {
          header: () => (r.language === "en" ? "Ward Number" : "病房號"),
        }),
        re.accessor("OP_TIME", {
          header: () => (r.language === "en" ? "Operation Time" : "操作時間"),
        }),
        re.accessor("RX_TIME", {
          header: () =>
            r.language === "en" ? "Prescription Time" : "開方時間",
        }),
        re.accessor("RSN", {
          header: () =>
            r.language === "en" ? "Reason for Transaction" : "收支原因",
          enableSorting: !1,
        }),
        re.accessor("NOTE", {
          header: () => (r.language === "en" ? "Remarks" : "備註"),
          enableSorting: !1,
        }),
      ],
      g = t0({
        data: e,
        columns: h,
        state: { sorting: o },
        onSortingChange: i,
        getCoreRowModel: Jm(),
        getSortedRowModel: qm(),
        pageCount: Math.ceil(e.length / t),
      }),
      m = Math.ceil(e.length / t),
      w = l * t,
      x = Math.min(w + t, e.length),
      k = g.getRowModel().rows.slice(w, x),
      E = (j) => {
        const B = j.target.value;
        if (/^\d*$/.test(B)) {
          u(B);
          const Q = parseInt(B, 10);
          Q >= 1 && Q <= m && s(Q - 1);
        }
      },
      L = () => {
        (!a || parseInt(a, 10) < 1 || parseInt(a, 10) > m) && u("");
      },
      V = (j) => `
    inline-flex items-center px-3 py-1 border text-base font-medium rounded-lg
    ${
      j
        ? "border-gray-200 text-gray-400 bg-gray-50 cursor-not-allowed"
        : "border-gray-300 text-gray-700 bg-white hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    }
  `,
      _ = (j) =>
        j.column.getCanSort()
          ? j.column.getIsSorted() === "asc"
            ? S.jsx(Qs, { className: "h-4 w-4 ml-1" })
            : j.column.getIsSorted() === "desc"
            ? S.jsx(Ws, { className: "h-4 w-4 ml-1" })
            : null
          : null,
      U = (j) => {
        const B = pu(j.column.columnDef.header, j.getContext());
        return j.column.getCanSort()
          ? S.jsxs("button", {
              className:
                "flex items-center hover:text-gray-700 transition-colors",
              onClick: j.column.getToggleSortingHandler(),
              children: [S.jsx("span", { children: B }), _(j)],
            })
          : B;
      };
    return S.jsxs("div", {
      className: "bg-white rounded-lg shadow-sm border",
      children: [
        S.jsxs("div", {
          className:
            "px-3 py-2 bg-gray-50 border-b border-gray-200 flex items-center justify-between text-sm text-gray-600",
          children: [
            S.jsx("p", {
              className: "text-sm text-gray-600",
              children:
                e.length > 0
                  ? S.jsxs("div", {
                      children: [
                        n("Showing"),
                        " ",
                        w + 1,
                        " - ",
                        x,
                        " ",
                        n("of"),
                        " ",
                        e.length,
                        " ",
                        n("entries"),
                      ],
                    })
                  : n("No data"),
            }),
            e.length > 0 &&
              S.jsx("div", {
                className: "",
                children: S.jsx("div", {
                  className: "flex items-center justify-between",
                  children: S.jsxs("div", {
                    className: "flex items-center space-x-4",
                    children: [
                      S.jsx("button", {
                        onClick: () => s((j) => Math.max(0, j - 1)),
                        disabled: l === 0,
                        className: V(l === 0),
                        children: n("Previous"),
                      }),
                      S.jsxs("div", {
                        className: "flex items-center space-x-2",
                        children: [
                          S.jsx("input", {
                            type: "text",
                            value: a,
                            onChange: E,
                            onBlur: L,
                            placeholder: String(l + 1),
                            className:
                              "w-16 px-2 py-1 text-center border border-gray-300 rounded text-sm",
                          }),
                          S.jsxs("span", {
                            className: "text-sm text-gray-700",
                            children: ["/ ", m],
                          }),
                        ],
                      }),
                      S.jsx("button", {
                        onClick: () => s((j) => Math.min(m - 1, j + 1)),
                        disabled: l === m - 1,
                        className: V(l === m - 1),
                        children: n("Next"),
                      }),
                    ],
                  }),
                }),
              }),
          ],
        }),
        S.jsx("div", {
          ref: v,
          className: "relative overflow-x-auto",
          children: S.jsx("div", {
            className: "max-h-[calc(100vh-180px)] overflow-y-auto",
            children: S.jsxs("table", {
              className: "w-full table-fixed",
              children: [
                S.jsx("thead", {
                  ref: y,
                  className: "bg-gray-100 bg-gray-100 sticky top-0 z-10",
                  children: g
                    .getHeaderGroups()
                    .map((j) =>
                      S.jsx(
                        "tr",
                        {
                          children: j.headers.map((B, Q) =>
                            S.jsx(
                              "th",
                              {
                                className:
                                  "px-4 py-3 text-left text-base font-normal text-gray-900",
                                style: { width: io[Q], minWidth: io[Q] },
                                children: U(B),
                              },
                              B.id
                            )
                          ),
                        },
                        j.id
                      )
                    ),
                }),
                S.jsx("tbody", {
                  className: "divide-y divide-gray-200",
                  children:
                    e.length > 0
                      ? k.map((j) =>
                          S.jsx(
                            "tr",
                            {
                              className: "hover:bg-gray-50",
                              children: j
                                .getVisibleCells()
                                .map((B, Q) =>
                                  S.jsx(
                                    "td",
                                    {
                                      className:
                                        "px-4 py-3 text-sm text-gray-900 truncate",
                                      style: { width: io[Q], minWidth: io[Q] },
                                      children: pu(
                                        B.column.columnDef.cell,
                                        B.getContext()
                                      ),
                                    },
                                    B.id
                                  )
                                ),
                            },
                            j.id
                          )
                        )
                      : S.jsx("tr", {
                          children: S.jsx("td", {
                            colSpan: h.length,
                            className: "px-4 py-8 text-center text-gray-500",
                            children: S.jsxs("div", {
                              className:
                                "flex flex-col items-center justify-center",
                              children: [
                                S.jsx(Gh, { className: "h-12 w-12 mb-2" }),
                                S.jsx("p", { children: n("No data") }),
                              ],
                            }),
                          }),
                        }),
                }),
              ],
            }),
          }),
        }),
      ],
    });
  },
  r0 = ({ onLoginSuccess: e }) => {
    const { t } = zn(),
      [n, r] = P.useState({ ID: "", Password: "" }),
      [o, i] = P.useState(!1),
      [l, s] = P.useState(null),
      a = async (u) => {
        u.preventDefault(), i(!0), s(null);
        try {
          await Zh(n), e();
        } catch (c) {
          const f = c instanceof Error ? c.message : t("Login failed");
          s(f), ee.error(f, { duration: 4e3, position: "top-center" });
        } finally {
          i(!1);
        }
      };
    return S.jsxs("div", {
      className:
        "min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8",
      children: [
        S.jsx("div", {
          className: "sm:mx-auto sm:w-full sm:max-w-md",
          children: S.jsx("h2", {
            className: "text-center text-3xl font-bold text-gray-900",
            children: t("Transaction Records"),
          }),
        }),
        S.jsx("div", {
          className: "mt-8 sm:mx-auto sm:w-full sm:max-w-md",
          children: S.jsx("div", {
            className: "bg-white rounded-lg shadow-sm border p-4 md:p-6",
            children: S.jsxs("form", {
              className: "space-y-6",
              onSubmit: a,
              children: [
                l &&
                  S.jsx("div", {
                    className: "rounded-md bg-red-50 p-4",
                    children: S.jsxs("div", {
                      className: "flex",
                      children: [
                        S.jsx("div", {
                          className: "flex-shrink-0",
                          children: S.jsx("svg", {
                            className: "h-5 w-5 text-red-400\\",
                            viewBox: "0 0 20 20\\",
                            fill: "currentColor",
                            children: S.jsx("path", {
                              fillRule: "evenodd\\",
                              d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z\\",
                              clipRule: "evenodd",
                            }),
                          }),
                        }),
                        S.jsx("div", {
                          className: "ml-3",
                          children: S.jsx("h3", {
                            className: "text-sm font-medium text-red-800",
                            children: l,
                          }),
                        }),
                      ],
                    }),
                  }),
                S.jsxs("div", {
                  children: [
                    S.jsx("label", {
                      htmlFor: "ID",
                      className: "block text-sm font-medium text-gray-700",
                      children: t("ID"),
                    }),
                    S.jsx("div", {
                      className: "mt-1",
                      children: S.jsx("input", {
                        id: "ID",
                        name: "ID",
                        type: "text",
                        required: !0,
                        value: n.ID,
                        onChange: (u) =>
                          r((c) => ({ ...c, ID: u.target.value })),
                        className:
                          "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm",
                      }),
                    }),
                  ],
                }),
                S.jsxs("div", {
                  children: [
                    S.jsx("label", {
                      htmlFor: "password",
                      className: "block text-sm font-medium text-gray-700",
                      children: t("Password"),
                    }),
                    S.jsx("div", {
                      className: "mt-1",
                      children: S.jsx("input", {
                        id: "password",
                        name: "password",
                        type: "password",
                        required: !0,
                        value: n.Password,
                        onChange: (u) =>
                          r((c) => ({ ...c, Password: u.target.value })),
                        className:
                          "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm",
                      }),
                    }),
                  ],
                }),
                S.jsx("div", {
                  children: S.jsx("button", {
                    type: "submit",
                    disabled: o,
                    className:
                      "w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50",
                    children: t(o ? "Logging in..." : "Login"),
                  }),
                }),
              ],
            }),
          }),
        }),
      ],
    });
  };
let Lr;
async function qs() {
  try {
    Lr = (await (await fetch("../config.txt")).json()).domain;
  } catch (e) {
    throw (
      (console.error("Failed to load config:", e),
      new Error("Failed to load configuration"))
    );
  }
}
qs();
async function tf(e, t) {
  Lr || (await qs());
  const n = `${Lr}${e}`;
  console.group(`🌐 API Request: ${e}`),
    console.log("URL:", n),
    console.log("Method: POST"),
    console.log("Request Payload:", t),
    console.groupEnd();
  const r = await fetch(n, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(t),
  });
  if (!r.ok)
    throw (
      (console.error(`❌ API Error: ${e}`, {
        status: r.status,
        statusText: r.statusText,
      }),
      new Error(`HTTP error! status: ${r.status}`))
    );
  const o = await r.json();
  return (
    console.group(`✅ API Response: ${e}`),
    console.log("Status:", r.status),
    console.log("Response Data:", o),
    console.groupEnd(),
    o
  );
}
const o0 = async () => {
    try {
      console.group("📍 Getting Dispensing Stations");
      const e = await tf("/api/ServerSetting/get_serversetting_by_type", {
        Data: {},
        ValueAry: ["調劑台"],
      });
      return console.groupEnd(), e.Data;
    } catch (e) {
      throw (
        (console.error("❌ Error fetching dispensing stations:", e),
        new Error("Failed to fetch dispensing stations"))
      );
    }
  },
  i0 = async (e, t, n, r, o) => {
    const i =
      e === "op_time"
        ? "/api/transactions/get_datas_by_op_time_st_end"
        : "/api/transactions/get_datas_by_rx_time_st_end";
    try {
      console.group("📍 Getting Transactions"),
        console.log("Time Type:", e),
        console.log("Date Range:", { startTime: t, endTime: n }),
        console.log("Stations:", r),
        console.log("Station Types:", o);
      const l = (a) => a.replace("T", " "),
        s = await tf(i, {
          Data: {},
          ValueAry: [
            l(t),
            l(n),
            r.join(","),
            Array(r.length).fill("調劑台").join(","),
          ],
        });
      return console.groupEnd(), s.Data;
    } catch (l) {
      throw (
        (console.error("❌ Error fetching transactions:", l),
        new Error("Failed to fetch transactions"))
      );
    }
  },
  l0 = async (e, t, n) => {
    Lr || (await qs());
    const r = `${Lr}/api/transactions/download_datas_excel`;
    try {
      console.group("📍 Downloading Excel"),
        console.log("URL:", r),
        console.log("Method: POST"),
        console.log("Date Range:", { startTime: t, endTime: n }),
        console.log("Records Count:", e.length);
      const o = await fetch(r, {
        method: "POST",
        headers: {
          Accept:
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Data: e, ValueAry: [] }),
      });
      if (!o.ok)
        throw (
          (console.error("❌ Download failed:", o.status, o.statusText),
          new Error(`Download failed: ${o.statusText}`))
        );
      const i = o.headers.get("content-disposition");
      let l = `${t}-${n} Transaction Records.xlsx`;
      if (i) {
        const c = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/.exec(i);
        c != null && c[1] && (l = c[1].replace(/['"]/g, ""));
      }
      const s = await o.blob();
      if (!s.type.includes("spreadsheet") && !s.type.includes("excel"))
        throw (
          (console.error("❌ Invalid file type received:", s.type),
          new Error("Invalid file type received from server"))
        );
      const a = window.URL.createObjectURL(s),
        u = document.createElement("a");
      (u.href = a),
        (u.download = l),
        document.body.appendChild(u),
        u.click(),
        document.body.removeChild(u),
        window.URL.revokeObjectURL(a),
        console.log("✅ Excel download completed"),
        console.groupEnd();
    } catch (o) {
      throw (
        (console.error("❌ Error downloading Excel:", o),
        new Error("Failed to download Excel file"))
      );
    }
  },
  M = (e) => typeof e == "string",
  Xn = () => {
    let e, t;
    const n = new Promise((r, o) => {
      (e = r), (t = o);
    });
    return (n.resolve = e), (n.reject = t), n;
  },
  hu = (e) => (e == null ? "" : "" + e),
  s0 = (e, t, n) => {
    e.forEach((r) => {
      t[r] && (n[r] = t[r]);
    });
  },
  a0 = /###/g,
  mu = (e) => (e && e.indexOf("###") > -1 ? e.replace(a0, ".") : e),
  vu = (e) => !e || M(e),
  dr = (e, t, n) => {
    const r = M(t) ? t.split(".") : t;
    let o = 0;
    for (; o < r.length - 1; ) {
      if (vu(e)) return {};
      const i = mu(r[o]);
      !e[i] && n && (e[i] = new n()),
        Object.prototype.hasOwnProperty.call(e, i) ? (e = e[i]) : (e = {}),
        ++o;
    }
    return vu(e) ? {} : { obj: e, k: mu(r[o]) };
  },
  yu = (e, t, n) => {
    const { obj: r, k: o } = dr(e, t, Object);
    if (r !== void 0 || t.length === 1) {
      r[o] = n;
      return;
    }
    let i = t[t.length - 1],
      l = t.slice(0, t.length - 1),
      s = dr(e, l, Object);
    for (; s.obj === void 0 && l.length; )
      (i = `${l[l.length - 1]}.${i}`),
        (l = l.slice(0, l.length - 1)),
        (s = dr(e, l, Object)),
        s && s.obj && typeof s.obj[`${s.k}.${i}`] < "u" && (s.obj = void 0);
    s.obj[`${s.k}.${i}`] = n;
  },
  u0 = (e, t, n, r) => {
    const { obj: o, k: i } = dr(e, t, Object);
    (o[i] = o[i] || []), o[i].push(n);
  },
  Wo = (e, t) => {
    const { obj: n, k: r } = dr(e, t);
    if (n) return n[r];
  },
  c0 = (e, t, n) => {
    const r = Wo(e, n);
    return r !== void 0 ? r : Wo(t, n);
  },
  nf = (e, t, n) => {
    for (const r in t)
      r !== "__proto__" &&
        r !== "constructor" &&
        (r in e
          ? M(e[r]) ||
            e[r] instanceof String ||
            M(t[r]) ||
            t[r] instanceof String
            ? n && (e[r] = t[r])
            : nf(e[r], t[r], n)
          : (e[r] = t[r]));
    return e;
  },
  an = (e) => e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var d0 = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;",
};
const f0 = (e) => (M(e) ? e.replace(/[&<>"'\/]/g, (t) => d0[t]) : e);
class g0 {
  constructor(t) {
    (this.capacity = t), (this.regExpMap = new Map()), (this.regExpQueue = []);
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
const p0 = [" ", ",", "?", "!", ";"],
  h0 = new g0(20),
  m0 = (e, t, n) => {
    (t = t || ""), (n = n || "");
    const r = p0.filter((l) => t.indexOf(l) < 0 && n.indexOf(l) < 0);
    if (r.length === 0) return !0;
    const o = h0.getRegExp(
      `(${r.map((l) => (l === "?" ? "\\?" : l)).join("|")})`
    );
    let i = !o.test(e);
    if (!i) {
      const l = e.indexOf(n);
      l > 0 && !o.test(e.substring(0, l)) && (i = !0);
    }
    return i;
  },
  ql = function (e, t) {
    let n =
      arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
    if (!e) return;
    if (e[t]) return e[t];
    const r = t.split(n);
    let o = e;
    for (let i = 0; i < r.length; ) {
      if (!o || typeof o != "object") return;
      let l,
        s = "";
      for (let a = i; a < r.length; ++a)
        if ((a !== i && (s += n), (s += r[a]), (l = o[s]), l !== void 0)) {
          if (
            ["string", "number", "boolean"].indexOf(typeof l) > -1 &&
            a < r.length - 1
          )
            continue;
          i += a - i + 1;
          break;
        }
      o = l;
    }
    return o;
  },
  Qo = (e) => e && e.replace("_", "-"),
  v0 = {
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
class Yo {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(t, n);
  }
  init(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (this.prefix = n.prefix || "i18next:"),
      (this.logger = t || v0),
      (this.options = n),
      (this.debug = n.debug);
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
  forward(t, n, r, o) {
    return o && !this.debug
      ? null
      : (M(t[0]) && (t[0] = `${r}${this.prefix} ${t[0]}`), this.logger[n](t));
  }
  create(t) {
    return new Yo(this.logger, {
      prefix: `${this.prefix}:${t}:`,
      ...this.options,
    });
  }
  clone(t) {
    return (
      (t = t || this.options),
      (t.prefix = t.prefix || this.prefix),
      new Yo(this.logger, t)
    );
  }
}
var Ze = new Yo();
class pi {
  constructor() {
    this.observers = {};
  }
  on(t, n) {
    return (
      t.split(" ").forEach((r) => {
        this.observers[r] || (this.observers[r] = new Map());
        const o = this.observers[r].get(n) || 0;
        this.observers[r].set(n, o + 1);
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
      var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1;
      o < n;
      o++
    )
      r[o - 1] = arguments[o];
    this.observers[t] &&
      Array.from(this.observers[t].entries()).forEach((l) => {
        let [s, a] = l;
        for (let u = 0; u < a; u++) s(...r);
      }),
      this.observers["*"] &&
        Array.from(this.observers["*"].entries()).forEach((l) => {
          let [s, a] = l;
          for (let u = 0; u < a; u++) s.apply(s, [t, ...r]);
        });
  }
}
class Su extends pi {
  constructor(t) {
    let n =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { ns: ["translation"], defaultNS: "translation" };
    super(),
      (this.data = t || {}),
      (this.options = n),
      this.options.keySeparator === void 0 && (this.options.keySeparator = "."),
      this.options.ignoreJSONStructure === void 0 &&
        (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(t) {
    this.options.ns.indexOf(t) < 0 && this.options.ns.push(t);
  }
  removeNamespaces(t) {
    const n = this.options.ns.indexOf(t);
    n > -1 && this.options.ns.splice(n, 1);
  }
  getResource(t, n, r) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const i =
        o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator,
      l =
        o.ignoreJSONStructure !== void 0
          ? o.ignoreJSONStructure
          : this.options.ignoreJSONStructure;
    let s;
    t.indexOf(".") > -1
      ? (s = t.split("."))
      : ((s = [t, n]),
        r &&
          (Array.isArray(r)
            ? s.push(...r)
            : M(r) && i
            ? s.push(...r.split(i))
            : s.push(r)));
    const a = Wo(this.data, s);
    return (
      !a &&
        !n &&
        !r &&
        t.indexOf(".") > -1 &&
        ((t = s[0]), (n = s[1]), (r = s.slice(2).join("."))),
      a || !l || !M(r)
        ? a
        : ql(this.data && this.data[t] && this.data[t][n], r, i)
    );
  }
  addResource(t, n, r, o) {
    let i =
      arguments.length > 4 && arguments[4] !== void 0
        ? arguments[4]
        : { silent: !1 };
    const l =
      i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator;
    let s = [t, n];
    r && (s = s.concat(l ? r.split(l) : r)),
      t.indexOf(".") > -1 && ((s = t.split(".")), (o = n), (n = s[1])),
      this.addNamespaces(n),
      yu(this.data, s, o),
      i.silent || this.emit("added", t, n, r, o);
  }
  addResources(t, n, r) {
    let o =
      arguments.length > 3 && arguments[3] !== void 0
        ? arguments[3]
        : { silent: !1 };
    for (const i in r)
      (M(r[i]) || Array.isArray(r[i])) &&
        this.addResource(t, n, i, r[i], { silent: !0 });
    o.silent || this.emit("added", t, n, r);
  }
  addResourceBundle(t, n, r, o, i) {
    let l =
        arguments.length > 5 && arguments[5] !== void 0
          ? arguments[5]
          : { silent: !1, skipCopy: !1 },
      s = [t, n];
    t.indexOf(".") > -1 && ((s = t.split(".")), (o = r), (r = n), (n = s[1])),
      this.addNamespaces(n);
    let a = Wo(this.data, s) || {};
    l.skipCopy || (r = JSON.parse(JSON.stringify(r))),
      o ? nf(a, r, i) : (a = { ...a, ...r }),
      yu(this.data, s, a),
      l.silent || this.emit("added", t, n, r);
  }
  removeResourceBundle(t, n) {
    this.hasResourceBundle(t, n) && delete this.data[t][n],
      this.removeNamespaces(n),
      this.emit("removed", t, n);
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
      (o) => n[o] && Object.keys(n[o]).length > 0
    );
  }
  toJSON() {
    return this.data;
  }
}
var rf = {
  processors: {},
  addPostProcessor(e) {
    this.processors[e.name] = e;
  },
  handle(e, t, n, r, o) {
    return (
      e.forEach((i) => {
        this.processors[i] && (t = this.processors[i].process(t, n, r, o));
      }),
      t
    );
  },
};
const wu = {};
class Xo extends pi {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(),
      s0(
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
        this
      ),
      (this.options = n),
      this.options.keySeparator === void 0 && (this.options.keySeparator = "."),
      (this.logger = Ze.create("translator"));
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
    const o =
      n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator;
    let i = n.ns || this.options.defaultNS || [];
    const l = r && t.indexOf(r) > -1,
      s =
        !this.options.userDefinedKeySeparator &&
        !n.keySeparator &&
        !this.options.userDefinedNsSeparator &&
        !n.nsSeparator &&
        !m0(t, r, o);
    if (l && !s) {
      const a = t.match(this.interpolator.nestingRegexp);
      if (a && a.length > 0) return { key: t, namespaces: M(i) ? [i] : i };
      const u = t.split(r);
      (r !== o || (r === o && this.options.ns.indexOf(u[0]) > -1)) &&
        (i = u.shift()),
        (t = u.join(o));
    }
    return { key: t, namespaces: M(i) ? [i] : i };
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
    const o =
        n.returnDetails !== void 0
          ? n.returnDetails
          : this.options.returnDetails,
      i =
        n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator,
      { key: l, namespaces: s } = this.extractFromKey(t[t.length - 1], n),
      a = s[s.length - 1],
      u = n.lng || this.language,
      c = n.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (u && u.toLowerCase() === "cimode") {
      if (c) {
        const w = n.nsSeparator || this.options.nsSeparator;
        return o
          ? {
              res: `${a}${w}${l}`,
              usedKey: l,
              exactUsedKey: l,
              usedLng: u,
              usedNS: a,
              usedParams: this.getUsedParamsDetails(n),
            }
          : `${a}${w}${l}`;
      }
      return o
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
    const f = this.resolve(t, n);
    let d = f && f.res;
    const p = (f && f.usedKey) || l,
      v = (f && f.exactUsedKey) || l,
      y = Object.prototype.toString.apply(d),
      C = ["[object Number]", "[object Function]", "[object RegExp]"],
      h = n.joinArrays !== void 0 ? n.joinArrays : this.options.joinArrays,
      g = !this.i18nFormat || this.i18nFormat.handleAsObject,
      m = !M(d) && typeof d != "boolean" && typeof d != "number";
    if (g && d && m && C.indexOf(y) < 0 && !(M(h) && Array.isArray(d))) {
      if (!n.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler ||
          this.logger.warn(
            "accessing an object - but returnObjects options is not enabled!"
          );
        const w = this.options.returnedObjectHandler
          ? this.options.returnedObjectHandler(p, d, { ...n, ns: s })
          : `key '${l} (${this.language})' returned an object instead of string.`;
        return o
          ? ((f.res = w), (f.usedParams = this.getUsedParamsDetails(n)), f)
          : w;
      }
      if (i) {
        const w = Array.isArray(d),
          x = w ? [] : {},
          k = w ? v : p;
        for (const E in d)
          if (Object.prototype.hasOwnProperty.call(d, E)) {
            const L = `${k}${i}${E}`;
            (x[E] = this.translate(L, { ...n, joinArrays: !1, ns: s })),
              x[E] === L && (x[E] = d[E]);
          }
        d = x;
      }
    } else if (g && M(h) && Array.isArray(d))
      (d = d.join(h)), d && (d = this.extendTranslation(d, t, n, r));
    else {
      let w = !1,
        x = !1;
      const k = n.count !== void 0 && !M(n.count),
        E = Xo.hasDefaultValue(n),
        L = k ? this.pluralResolver.getSuffix(u, n.count, n) : "",
        V =
          n.ordinal && k
            ? this.pluralResolver.getSuffix(u, n.count, { ordinal: !1 })
            : "",
        _ =
          k &&
          !n.ordinal &&
          n.count === 0 &&
          this.pluralResolver.shouldUseIntlApi(),
        U =
          (_ && n[`defaultValue${this.options.pluralSeparator}zero`]) ||
          n[`defaultValue${L}`] ||
          n[`defaultValue${V}`] ||
          n.defaultValue;
      !this.isValidLookup(d) && E && ((w = !0), (d = U)),
        this.isValidLookup(d) || ((x = !0), (d = l));
      const B =
          (n.missingKeyNoValueFallbackToKey ||
            this.options.missingKeyNoValueFallbackToKey) &&
          x
            ? void 0
            : d,
        Q = E && U !== d && this.options.updateMissing;
      if (x || w || Q) {
        if (
          (this.logger.log(Q ? "updateKey" : "missingKey", u, a, l, Q ? U : d),
          i)
        ) {
          const R = this.resolve(l, { ...n, keySeparator: !1 });
          R &&
            R.res &&
            this.logger.warn(
              "Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format."
            );
        }
        let Ie = [];
        const Ye = this.languageUtils.getFallbackCodes(
          this.options.fallbackLng,
          n.lng || this.language
        );
        if (this.options.saveMissingTo === "fallback" && Ye && Ye[0])
          for (let R = 0; R < Ye.length; R++) Ie.push(Ye[R]);
        else
          this.options.saveMissingTo === "all"
            ? (Ie = this.languageUtils.toResolveHierarchy(
                n.lng || this.language
              ))
            : Ie.push(n.lng || this.language);
        const vt = (R, F, O) => {
          const A = E && O !== d ? O : B;
          this.options.missingKeyHandler
            ? this.options.missingKeyHandler(R, a, F, A, Q, n)
            : this.backendConnector &&
              this.backendConnector.saveMissing &&
              this.backendConnector.saveMissing(R, a, F, A, Q, n),
            this.emit("missingKey", R, a, F, d);
        };
        this.options.saveMissing &&
          (this.options.saveMissingPlurals && k
            ? Ie.forEach((R) => {
                const F = this.pluralResolver.getSuffixes(R, n);
                _ &&
                  n[`defaultValue${this.options.pluralSeparator}zero`] &&
                  F.indexOf(`${this.options.pluralSeparator}zero`) < 0 &&
                  F.push(`${this.options.pluralSeparator}zero`),
                  F.forEach((O) => {
                    vt([R], l + O, n[`defaultValue${O}`] || U);
                  });
              })
            : vt(Ie, l, U));
      }
      (d = this.extendTranslation(d, t, n, f, r)),
        x &&
          d === l &&
          this.options.appendNamespaceToMissingKey &&
          (d = `${a}:${l}`),
        (x || w) &&
          this.options.parseMissingKeyHandler &&
          (this.options.compatibilityAPI !== "v1"
            ? (d = this.options.parseMissingKeyHandler(
                this.options.appendNamespaceToMissingKey ? `${a}:${l}` : l,
                w ? d : void 0
              ))
            : (d = this.options.parseMissingKeyHandler(d)));
    }
    return o
      ? ((f.res = d), (f.usedParams = this.getUsedParamsDetails(n)), f)
      : d;
  }
  extendTranslation(t, n, r, o, i) {
    var l = this;
    if (this.i18nFormat && this.i18nFormat.parse)
      t = this.i18nFormat.parse(
        t,
        { ...this.options.interpolation.defaultVariables, ...r },
        r.lng || this.language || o.usedLng,
        o.usedNS,
        o.usedKey,
        { resolved: o }
      );
    else if (!r.skipInterpolation) {
      r.interpolation &&
        this.interpolator.init({
          ...r,
          interpolation: { ...this.options.interpolation, ...r.interpolation },
        });
      const u =
        M(t) &&
        (r && r.interpolation && r.interpolation.skipOnVariables !== void 0
          ? r.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables);
      let c;
      if (u) {
        const d = t.match(this.interpolator.nestingRegexp);
        c = d && d.length;
      }
      let f = r.replace && !M(r.replace) ? r.replace : r;
      if (
        (this.options.interpolation.defaultVariables &&
          (f = { ...this.options.interpolation.defaultVariables, ...f }),
        (t = this.interpolator.interpolate(
          t,
          f,
          r.lng || this.language || o.usedLng,
          r
        )),
        u)
      ) {
        const d = t.match(this.interpolator.nestingRegexp),
          p = d && d.length;
        c < p && (r.nest = !1);
      }
      !r.lng &&
        this.options.compatibilityAPI !== "v1" &&
        o &&
        o.res &&
        (r.lng = this.language || o.usedLng),
        r.nest !== !1 &&
          (t = this.interpolator.nest(
            t,
            function () {
              for (
                var d = arguments.length, p = new Array(d), v = 0;
                v < d;
                v++
              )
                p[v] = arguments[v];
              return i && i[0] === p[0] && !r.context
                ? (l.logger.warn(
                    `It seems you are nesting recursively key: ${p[0]} in key: ${n[0]}`
                  ),
                  null)
                : l.translate(...p, n);
            },
            r
          )),
        r.interpolation && this.interpolator.reset();
    }
    const s = r.postProcess || this.options.postProcess,
      a = M(s) ? [s] : s;
    return (
      t != null &&
        a &&
        a.length &&
        r.applyPostProcessor !== !1 &&
        (t = rf.handle(
          a,
          t,
          n,
          this.options && this.options.postProcessPassResolved
            ? {
                i18nResolved: {
                  ...o,
                  usedParams: this.getUsedParamsDetails(r),
                },
                ...r,
              }
            : r,
          this
        )),
      t
    );
  }
  resolve(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r,
      o,
      i,
      l,
      s;
    return (
      M(t) && (t = [t]),
      t.forEach((a) => {
        if (this.isValidLookup(r)) return;
        const u = this.extractFromKey(a, n),
          c = u.key;
        o = c;
        let f = u.namespaces;
        this.options.fallbackNS && (f = f.concat(this.options.fallbackNS));
        const d = n.count !== void 0 && !M(n.count),
          p =
            d &&
            !n.ordinal &&
            n.count === 0 &&
            this.pluralResolver.shouldUseIntlApi(),
          v =
            n.context !== void 0 &&
            (M(n.context) || typeof n.context == "number") &&
            n.context !== "",
          y = n.lngs
            ? n.lngs
            : this.languageUtils.toResolveHierarchy(
                n.lng || this.language,
                n.fallbackLng
              );
        f.forEach((C) => {
          this.isValidLookup(r) ||
            ((s = C),
            !wu[`${y[0]}-${C}`] &&
              this.utils &&
              this.utils.hasLoadedNamespace &&
              !this.utils.hasLoadedNamespace(s) &&
              ((wu[`${y[0]}-${C}`] = !0),
              this.logger.warn(
                `key "${o}" for languages "${y.join(
                  ", "
                )}" won't get resolved as namespace "${s}" was not yet loaded`,
                "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
              )),
            y.forEach((h) => {
              if (this.isValidLookup(r)) return;
              l = h;
              const g = [c];
              if (this.i18nFormat && this.i18nFormat.addLookupKeys)
                this.i18nFormat.addLookupKeys(g, c, h, C, n);
              else {
                let w;
                d && (w = this.pluralResolver.getSuffix(h, n.count, n));
                const x = `${this.options.pluralSeparator}zero`,
                  k = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                if (
                  (d &&
                    (g.push(c + w),
                    n.ordinal &&
                      w.indexOf(k) === 0 &&
                      g.push(c + w.replace(k, this.options.pluralSeparator)),
                    p && g.push(c + x)),
                  v)
                ) {
                  const E = `${c}${this.options.contextSeparator}${n.context}`;
                  g.push(E),
                    d &&
                      (g.push(E + w),
                      n.ordinal &&
                        w.indexOf(k) === 0 &&
                        g.push(E + w.replace(k, this.options.pluralSeparator)),
                      p && g.push(E + x));
                }
              }
              let m;
              for (; (m = g.pop()); )
                this.isValidLookup(r) ||
                  ((i = m), (r = this.getResource(h, C, m, n)));
            }));
        });
      }),
      { res: r, usedKey: o, exactUsedKey: i, usedLng: l, usedNS: s }
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
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return this.i18nFormat && this.i18nFormat.getResource
      ? this.i18nFormat.getResource(t, n, r, o)
      : this.resourceStore.getResource(t, n, r, o);
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
      r = t.replace && !M(t.replace);
    let o = r ? t.replace : t;
    if (
      (r && typeof t.count < "u" && (o.count = t.count),
      this.options.interpolation.defaultVariables &&
        (o = { ...this.options.interpolation.defaultVariables, ...o }),
      !r)
    ) {
      o = { ...o };
      for (const i of n) delete o[i];
    }
    return o;
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
const Yi = (e) => e.charAt(0).toUpperCase() + e.slice(1);
class xu {
  constructor(t) {
    (this.options = t),
      (this.supportedLngs = this.options.supportedLngs || !1),
      (this.logger = Ze.create("languageUtils"));
  }
  getScriptPartFromCode(t) {
    if (((t = Qo(t)), !t || t.indexOf("-") < 0)) return null;
    const n = t.split("-");
    return n.length === 2 || (n.pop(), n[n.length - 1].toLowerCase() === "x")
      ? null
      : this.formatLanguageCode(n.join("-"));
  }
  getLanguagePartFromCode(t) {
    if (((t = Qo(t)), !t || t.indexOf("-") < 0)) return t;
    const n = t.split("-");
    return this.formatLanguageCode(n[0]);
  }
  formatLanguageCode(t) {
    if (M(t) && t.indexOf("-") > -1) {
      if (typeof Intl < "u" && typeof Intl.getCanonicalLocales < "u")
        try {
          let o = Intl.getCanonicalLocales(t)[0];
          if ((o && this.options.lowerCaseLng && (o = o.toLowerCase()), o))
            return o;
        } catch {}
      const n = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
      let r = t.split("-");
      return (
        this.options.lowerCaseLng
          ? (r = r.map((o) => o.toLowerCase()))
          : r.length === 2
          ? ((r[0] = r[0].toLowerCase()),
            (r[1] = r[1].toUpperCase()),
            n.indexOf(r[1].toLowerCase()) > -1 &&
              (r[1] = Yi(r[1].toLowerCase())))
          : r.length === 3 &&
            ((r[0] = r[0].toLowerCase()),
            r[1].length === 2 && (r[1] = r[1].toUpperCase()),
            r[0] !== "sgn" && r[2].length === 2 && (r[2] = r[2].toUpperCase()),
            n.indexOf(r[1].toLowerCase()) > -1 &&
              (r[1] = Yi(r[1].toLowerCase())),
            n.indexOf(r[2].toLowerCase()) > -1 &&
              (r[2] = Yi(r[2].toLowerCase()))),
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
        const o = this.formatLanguageCode(r);
        (!this.options.supportedLngs || this.isSupportedCode(o)) && (n = o);
      }),
      !n &&
        this.options.supportedLngs &&
        t.forEach((r) => {
          if (n) return;
          const o = this.getLanguagePartFromCode(r);
          if (this.isSupportedCode(o)) return (n = o);
          n = this.options.supportedLngs.find((i) => {
            if (i === o) return i;
            if (
              !(i.indexOf("-") < 0 && o.indexOf("-") < 0) &&
              ((i.indexOf("-") > 0 &&
                o.indexOf("-") < 0 &&
                i.substring(0, i.indexOf("-")) === o) ||
                (i.indexOf(o) === 0 && o.length > 1))
            )
              return i;
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
      M(t) && (t = [t]),
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
      o = [],
      i = (l) => {
        l &&
          (this.isSupportedCode(l)
            ? o.push(l)
            : this.logger.warn(
                `rejecting language code not found in supportedLngs: ${l}`
              ));
      };
    return (
      M(t) && (t.indexOf("-") > -1 || t.indexOf("_") > -1)
        ? (this.options.load !== "languageOnly" &&
            i(this.formatLanguageCode(t)),
          this.options.load !== "languageOnly" &&
            this.options.load !== "currentOnly" &&
            i(this.getScriptPartFromCode(t)),
          this.options.load !== "currentOnly" &&
            i(this.getLanguagePartFromCode(t)))
        : M(t) && i(this.formatLanguageCode(t)),
      r.forEach((l) => {
        o.indexOf(l) < 0 && i(this.formatLanguageCode(l));
      }),
      o
    );
  }
}
let y0 = [
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
  S0 = {
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
const w0 = ["v1", "v2", "v3"],
  x0 = ["v4"],
  Cu = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 },
  C0 = () => {
    const e = {};
    return (
      y0.forEach((t) => {
        t.lngs.forEach((n) => {
          e[n] = { numbers: t.nr, plurals: S0[t.fc] };
        });
      }),
      e
    );
  };
class R0 {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (this.languageUtils = t),
      (this.options = n),
      (this.logger = Ze.create("pluralResolver")),
      (!this.options.compatibilityJSON ||
        x0.includes(this.options.compatibilityJSON)) &&
        (typeof Intl > "u" || !Intl.PluralRules) &&
        ((this.options.compatibilityJSON = "v3"),
        this.logger.error(
          "Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling."
        )),
      (this.rules = C0()),
      (this.pluralRulesCache = {});
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
      const r = Qo(t === "dev" ? "en" : t),
        o = n.ordinal ? "ordinal" : "cardinal",
        i = JSON.stringify({ cleanedCode: r, type: o });
      if (i in this.pluralRulesCache) return this.pluralRulesCache[i];
      let l;
      try {
        l = new Intl.PluralRules(r, { type: o });
      } catch {
        if (!t.match(/-|_/)) return;
        const a = this.languageUtils.getLanguagePartFromCode(t);
        l = this.getRule(a, n);
      }
      return (this.pluralRulesCache[i] = l), l;
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
    return this.getSuffixes(t, r).map((o) => `${n}${o}`);
  }
  getSuffixes(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = this.getRule(t, n);
    return r
      ? this.shouldUseIntlApi()
        ? r
            .resolvedOptions()
            .pluralCategories.sort((o, i) => Cu[o] - Cu[i])
            .map(
              (o) =>
                `${this.options.prepend}${
                  n.ordinal ? `ordinal${this.options.prepend}` : ""
                }${o}`
            )
        : r.numbers.map((o) => this.getSuffix(t, o, n))
      : [];
  }
  getSuffix(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const o = this.getRule(t, r);
    return o
      ? this.shouldUseIntlApi()
        ? `${this.options.prepend}${
            r.ordinal ? `ordinal${this.options.prepend}` : ""
          }${o.select(n)}`
        : this.getSuffixRetroCompatible(o, n)
      : (this.logger.warn(`no plural rule found for: ${t}`), "");
  }
  getSuffixRetroCompatible(t, n) {
    const r = t.noAbs ? t.plurals(n) : t.plurals(Math.abs(n));
    let o = t.numbers[r];
    this.options.simplifyPluralSuffix &&
      t.numbers.length === 2 &&
      t.numbers[0] === 1 &&
      (o === 2 ? (o = "plural") : o === 1 && (o = ""));
    const i = () =>
      this.options.prepend && o.toString()
        ? this.options.prepend + o.toString()
        : o.toString();
    return this.options.compatibilityJSON === "v1"
      ? o === 1
        ? ""
        : typeof o == "number"
        ? `_plural_${o.toString()}`
        : i()
      : this.options.compatibilityJSON === "v2" ||
        (this.options.simplifyPluralSuffix &&
          t.numbers.length === 2 &&
          t.numbers[0] === 1)
      ? i()
      : this.options.prepend && r.toString()
      ? this.options.prepend + r.toString()
      : r.toString();
  }
  shouldUseIntlApi() {
    return !w0.includes(this.options.compatibilityJSON);
  }
}
const Ru = function (e, t, n) {
    let r =
        arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".",
      o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0,
      i = c0(e, t, n);
    return (
      !i && o && M(n) && ((i = ql(e, n, r)), i === void 0 && (i = ql(t, n, r))),
      i
    );
  },
  Xi = (e) => e.replace(/\$/g, "$$$$");
class k0 {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    (this.logger = Ze.create("interpolator")),
      (this.options = t),
      (this.format = (t.interpolation && t.interpolation.format) || ((n) => n)),
      this.init(t);
  }
  init() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    t.interpolation || (t.interpolation = { escapeValue: !0 });
    const {
      escape: n,
      escapeValue: r,
      useRawValueToEscape: o,
      prefix: i,
      prefixEscaped: l,
      suffix: s,
      suffixEscaped: a,
      formatSeparator: u,
      unescapeSuffix: c,
      unescapePrefix: f,
      nestingPrefix: d,
      nestingPrefixEscaped: p,
      nestingSuffix: v,
      nestingSuffixEscaped: y,
      nestingOptionsSeparator: C,
      maxReplaces: h,
      alwaysFormat: g,
    } = t.interpolation;
    (this.escape = n !== void 0 ? n : f0),
      (this.escapeValue = r !== void 0 ? r : !0),
      (this.useRawValueToEscape = o !== void 0 ? o : !1),
      (this.prefix = i ? an(i) : l || "{{"),
      (this.suffix = s ? an(s) : a || "}}"),
      (this.formatSeparator = u || ","),
      (this.unescapePrefix = c ? "" : f || "-"),
      (this.unescapeSuffix = this.unescapePrefix ? "" : c || ""),
      (this.nestingPrefix = d ? an(d) : p || an("$t(")),
      (this.nestingSuffix = v ? an(v) : y || an(")")),
      (this.nestingOptionsSeparator = C || ","),
      (this.maxReplaces = h || 1e3),
      (this.alwaysFormat = g !== void 0 ? g : !1),
      this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const t = (n, r) =>
      n && n.source === r ? ((n.lastIndex = 0), n) : new RegExp(r, "g");
    (this.regexp = t(this.regexp, `${this.prefix}(.+?)${this.suffix}`)),
      (this.regexpUnescape = t(
        this.regexpUnescape,
        `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`
      )),
      (this.nestingRegexp = t(
        this.nestingRegexp,
        `${this.nestingPrefix}(.+?)${this.nestingSuffix}`
      ));
  }
  interpolate(t, n, r, o) {
    let i, l, s;
    const a =
        (this.options &&
          this.options.interpolation &&
          this.options.interpolation.defaultVariables) ||
        {},
      u = (p) => {
        if (p.indexOf(this.formatSeparator) < 0) {
          const h = Ru(
            n,
            a,
            p,
            this.options.keySeparator,
            this.options.ignoreJSONStructure
          );
          return this.alwaysFormat
            ? this.format(h, void 0, r, { ...o, ...n, interpolationkey: p })
            : h;
        }
        const v = p.split(this.formatSeparator),
          y = v.shift().trim(),
          C = v.join(this.formatSeparator).trim();
        return this.format(
          Ru(
            n,
            a,
            y,
            this.options.keySeparator,
            this.options.ignoreJSONStructure
          ),
          C,
          r,
          { ...o, ...n, interpolationkey: y }
        );
      };
    this.resetRegExp();
    const c =
        (o && o.missingInterpolationHandler) ||
        this.options.missingInterpolationHandler,
      f =
        o && o.interpolation && o.interpolation.skipOnVariables !== void 0
          ? o.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables;
    return (
      [
        { regex: this.regexpUnescape, safeValue: (p) => Xi(p) },
        {
          regex: this.regexp,
          safeValue: (p) => (this.escapeValue ? Xi(this.escape(p)) : Xi(p)),
        },
      ].forEach((p) => {
        for (s = 0; (i = p.regex.exec(t)); ) {
          const v = i[1].trim();
          if (((l = u(v)), l === void 0))
            if (typeof c == "function") {
              const C = c(t, i, o);
              l = M(C) ? C : "";
            } else if (o && Object.prototype.hasOwnProperty.call(o, v)) l = "";
            else if (f) {
              l = i[0];
              continue;
            } else
              this.logger.warn(
                `missed to pass in variable ${v} for interpolating ${t}`
              ),
                (l = "");
          else !M(l) && !this.useRawValueToEscape && (l = hu(l));
          const y = p.safeValue(l);
          if (
            ((t = t.replace(i[0], y)),
            f
              ? ((p.regex.lastIndex += l.length),
                (p.regex.lastIndex -= i[0].length))
              : (p.regex.lastIndex = 0),
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
      o,
      i,
      l;
    const s = (a, u) => {
      const c = this.nestingOptionsSeparator;
      if (a.indexOf(c) < 0) return a;
      const f = a.split(new RegExp(`${c}[ ]*{`));
      let d = `{${f[1]}`;
      (a = f[0]), (d = this.interpolate(d, l));
      const p = d.match(/'/g),
        v = d.match(/"/g);
      ((p && p.length % 2 === 0 && !v) || v.length % 2 !== 0) &&
        (d = d.replace(/'/g, '"'));
      try {
        (l = JSON.parse(d)), u && (l = { ...u, ...l });
      } catch (y) {
        return (
          this.logger.warn(
            `failed parsing options string in nesting for key ${a}`,
            y
          ),
          `${a}${c}${d}`
        );
      }
      return (
        l.defaultValue &&
          l.defaultValue.indexOf(this.prefix) > -1 &&
          delete l.defaultValue,
        a
      );
    };
    for (; (o = this.nestingRegexp.exec(t)); ) {
      let a = [];
      (l = { ...r }),
        (l = l.replace && !M(l.replace) ? l.replace : l),
        (l.applyPostProcessor = !1),
        delete l.defaultValue;
      let u = !1;
      if (o[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(o[1])) {
        const c = o[1].split(this.formatSeparator).map((f) => f.trim());
        (o[1] = c.shift()), (a = c), (u = !0);
      }
      if (((i = n(s.call(this, o[1].trim(), l), l)), i && o[0] === t && !M(i)))
        return i;
      M(i) || (i = hu(i)),
        i ||
          (this.logger.warn(`missed to resolve ${o[1]} for nesting ${t}`),
          (i = "")),
        u &&
          (i = a.reduce(
            (c, f) =>
              this.format(c, f, r.lng, { ...r, interpolationkey: o[1].trim() }),
            i.trim()
          )),
        (t = t.replace(o[0], i)),
        (this.regexp.lastIndex = 0);
    }
    return t;
  }
}
const E0 = (e) => {
    let t = e.toLowerCase().trim();
    const n = {};
    if (e.indexOf("(") > -1) {
      const r = e.split("(");
      t = r[0].toLowerCase().trim();
      const o = r[1].substring(0, r[1].length - 1);
      t === "currency" && o.indexOf(":") < 0
        ? n.currency || (n.currency = o.trim())
        : t === "relativetime" && o.indexOf(":") < 0
        ? n.range || (n.range = o.trim())
        : o.split(";").forEach((l) => {
            if (l) {
              const [s, ...a] = l.split(":"),
                u = a
                  .join(":")
                  .trim()
                  .replace(/^'+|'+$/g, ""),
                c = s.trim();
              n[c] || (n[c] = u),
                u === "false" && (n[c] = !1),
                u === "true" && (n[c] = !0),
                isNaN(u) || (n[c] = parseInt(u, 10));
            }
          });
    }
    return { formatName: t, formatOptions: n };
  },
  un = (e) => {
    const t = {};
    return (n, r, o) => {
      let i = o;
      o &&
        o.interpolationkey &&
        o.formatParams &&
        o.formatParams[o.interpolationkey] &&
        o[o.interpolationkey] &&
        (i = { ...i, [o.interpolationkey]: void 0 });
      const l = r + JSON.stringify(i);
      let s = t[l];
      return s || ((s = e(Qo(r), o)), (t[l] = s)), s(n);
    };
  };
class N0 {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    (this.logger = Ze.create("formatter")),
      (this.options = t),
      (this.formats = {
        number: un((n, r) => {
          const o = new Intl.NumberFormat(n, { ...r });
          return (i) => o.format(i);
        }),
        currency: un((n, r) => {
          const o = new Intl.NumberFormat(n, { ...r, style: "currency" });
          return (i) => o.format(i);
        }),
        datetime: un((n, r) => {
          const o = new Intl.DateTimeFormat(n, { ...r });
          return (i) => o.format(i);
        }),
        relativetime: un((n, r) => {
          const o = new Intl.RelativeTimeFormat(n, { ...r });
          return (i) => o.format(i, r.range || "day");
        }),
        list: un((n, r) => {
          const o = new Intl.ListFormat(n, { ...r });
          return (i) => o.format(i);
        }),
      }),
      this.init(t);
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
    this.formats[t.toLowerCase().trim()] = un(n);
  }
  format(t, n, r) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const i = n.split(this.formatSeparator);
    if (
      i.length > 1 &&
      i[0].indexOf("(") > 1 &&
      i[0].indexOf(")") < 0 &&
      i.find((s) => s.indexOf(")") > -1)
    ) {
      const s = i.findIndex((a) => a.indexOf(")") > -1);
      i[0] = [i[0], ...i.splice(1, s)].join(this.formatSeparator);
    }
    return i.reduce((s, a) => {
      const { formatName: u, formatOptions: c } = E0(a);
      if (this.formats[u]) {
        let f = s;
        try {
          const d =
              (o && o.formatParams && o.formatParams[o.interpolationkey]) || {},
            p = d.locale || d.lng || o.locale || o.lng || r;
          f = this.formats[u](s, p, { ...c, ...o, ...d });
        } catch (d) {
          this.logger.warn(d);
        }
        return f;
      } else this.logger.warn(`there was no format function for ${u}`);
      return s;
    }, t);
  }
}
const P0 = (e, t) => {
  e.pending[t] !== void 0 && (delete e.pending[t], e.pendingCount--);
};
class _0 extends pi {
  constructor(t, n, r) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(),
      (this.backend = t),
      (this.store = n),
      (this.services = r),
      (this.languageUtils = r.languageUtils),
      (this.options = o),
      (this.logger = Ze.create("backendConnector")),
      (this.waitingReads = []),
      (this.maxParallelReads = o.maxParallelReads || 10),
      (this.readingCalls = 0),
      (this.maxRetries = o.maxRetries >= 0 ? o.maxRetries : 5),
      (this.retryTimeout = o.retryTimeout >= 1 ? o.retryTimeout : 350),
      (this.state = {}),
      (this.queue = []),
      this.backend && this.backend.init && this.backend.init(r, o.backend, o);
  }
  queueLoad(t, n, r, o) {
    const i = {},
      l = {},
      s = {},
      a = {};
    return (
      t.forEach((u) => {
        let c = !0;
        n.forEach((f) => {
          const d = `${u}|${f}`;
          !r.reload && this.store.hasResourceBundle(u, f)
            ? (this.state[d] = 2)
            : this.state[d] < 0 ||
              (this.state[d] === 1
                ? l[d] === void 0 && (l[d] = !0)
                : ((this.state[d] = 1),
                  (c = !1),
                  l[d] === void 0 && (l[d] = !0),
                  i[d] === void 0 && (i[d] = !0),
                  a[f] === void 0 && (a[f] = !0)));
        }),
          c || (s[u] = !0);
      }),
      (Object.keys(i).length || Object.keys(l).length) &&
        this.queue.push({
          pending: l,
          pendingCount: Object.keys(l).length,
          loaded: {},
          errors: [],
          callback: o,
        }),
      {
        toLoad: Object.keys(i),
        pending: Object.keys(l),
        toLoadLanguages: Object.keys(s),
        toLoadNamespaces: Object.keys(a),
      }
    );
  }
  loaded(t, n, r) {
    const o = t.split("|"),
      i = o[0],
      l = o[1];
    n && this.emit("failedLoading", i, l, n),
      !n &&
        r &&
        this.store.addResourceBundle(i, l, r, void 0, void 0, { skipCopy: !0 }),
      (this.state[t] = n ? -1 : 2),
      n && r && (this.state[t] = 0);
    const s = {};
    this.queue.forEach((a) => {
      u0(a.loaded, [i], l),
        P0(a, t),
        n && a.errors.push(n),
        a.pendingCount === 0 &&
          !a.done &&
          (Object.keys(a.loaded).forEach((u) => {
            s[u] || (s[u] = {});
            const c = a.loaded[u];
            c.length &&
              c.forEach((f) => {
                s[u][f] === void 0 && (s[u][f] = !0);
              });
          }),
          (a.done = !0),
          a.errors.length ? a.callback(a.errors) : a.callback());
    }),
      this.emit("loaded", s),
      (this.queue = this.queue.filter((a) => !a.done));
  }
  read(t, n, r) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0,
      i =
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
        tried: o,
        wait: i,
        callback: l,
      });
      return;
    }
    this.readingCalls++;
    const s = (u, c) => {
        if ((this.readingCalls--, this.waitingReads.length > 0)) {
          const f = this.waitingReads.shift();
          this.read(f.lng, f.ns, f.fcName, f.tried, f.wait, f.callback);
        }
        if (u && c && o < this.maxRetries) {
          setTimeout(() => {
            this.read.call(this, t, n, r, o + 1, i * 2, l);
          }, i);
          return;
        }
        l(u, c);
      },
      a = this.backend[r].bind(this.backend);
    if (a.length === 2) {
      try {
        const u = a(t, n);
        u && typeof u.then == "function"
          ? u.then((c) => s(null, c)).catch(s)
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
      o = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return (
        this.logger.warn(
          "No backend was added via i18next.use. Will not load resources."
        ),
        o && o()
      );
    M(t) && (t = this.languageUtils.toResolveHierarchy(t)), M(n) && (n = [n]);
    const i = this.queueLoad(t, n, r, o);
    if (!i.toLoad.length) return i.pending.length || o(), null;
    i.toLoad.forEach((l) => {
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
      o = r[0],
      i = r[1];
    this.read(o, i, "read", void 0, void 0, (l, s) => {
      l &&
        this.logger.warn(
          `${n}loading namespace ${i} for language ${o} failed`,
          l
        ),
        !l &&
          s &&
          this.logger.log(`${n}loaded namespace ${i} for language ${o}`, s),
        this.loaded(t, l, s);
    });
  }
  saveMissing(t, n, r, o, i) {
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
        "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
      );
      return;
    }
    if (!(r == null || r === "")) {
      if (this.backend && this.backend.create) {
        const a = { ...l, isUpdate: i },
          u = this.backend.create.bind(this.backend);
        if (u.length < 6)
          try {
            let c;
            u.length === 5 ? (c = u(t, n, r, o, a)) : (c = u(t, n, r, o)),
              c && typeof c.then == "function"
                ? c.then((f) => s(null, f)).catch(s)
                : s(null, c);
          } catch (c) {
            s(c);
          }
        else u(t, n, r, o, s, a);
      }
      !t || !t[0] || this.store.addResource(t[0], n, r, o);
    }
  }
}
const ku = () => ({
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
        M(e[1]) && (t.defaultValue = e[1]),
        M(e[2]) && (t.tDescription = e[2]),
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
  Eu = (e) => (
    M(e.ns) && (e.ns = [e.ns]),
    M(e.fallbackLng) && (e.fallbackLng = [e.fallbackLng]),
    M(e.fallbackNS) && (e.fallbackNS = [e.fallbackNS]),
    e.supportedLngs &&
      e.supportedLngs.indexOf("cimode") < 0 &&
      (e.supportedLngs = e.supportedLngs.concat(["cimode"])),
    e
  ),
  lo = () => {},
  L0 = (e) => {
    Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((n) => {
      typeof e[n] == "function" && (e[n] = e[n].bind(e));
    });
  };
class $r extends pi {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 ? arguments[1] : void 0;
    if (
      (super(),
      (this.options = Eu(t)),
      (this.services = {}),
      (this.logger = Ze),
      (this.modules = { external: [] }),
      L0(this),
      n && !this.isInitialized && !t.isClone)
    ) {
      if (!this.options.initImmediate) return this.init(t, n), this;
      setTimeout(() => {
        this.init(t, n);
      }, 0);
    }
  }
  init() {
    var t = this;
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      r = arguments.length > 1 ? arguments[1] : void 0;
    (this.isInitializing = !0),
      typeof n == "function" && ((r = n), (n = {})),
      !n.defaultNS &&
        n.defaultNS !== !1 &&
        n.ns &&
        (M(n.ns)
          ? (n.defaultNS = n.ns)
          : n.ns.indexOf("translation") < 0 && (n.defaultNS = n.ns[0]));
    const o = ku();
    (this.options = { ...o, ...this.options, ...Eu(n) }),
      this.options.compatibilityAPI !== "v1" &&
        (this.options.interpolation = {
          ...o.interpolation,
          ...this.options.interpolation,
        }),
      n.keySeparator !== void 0 &&
        (this.options.userDefinedKeySeparator = n.keySeparator),
      n.nsSeparator !== void 0 &&
        (this.options.userDefinedNsSeparator = n.nsSeparator);
    const i = (c) => (c ? (typeof c == "function" ? new c() : c) : null);
    if (!this.options.isClone) {
      this.modules.logger
        ? Ze.init(i(this.modules.logger), this.options)
        : Ze.init(null, this.options);
      let c;
      this.modules.formatter
        ? (c = this.modules.formatter)
        : typeof Intl < "u" && (c = N0);
      const f = new xu(this.options);
      this.store = new Su(this.options.resources, this.options);
      const d = this.services;
      (d.logger = Ze),
        (d.resourceStore = this.store),
        (d.languageUtils = f),
        (d.pluralResolver = new R0(f, {
          prepend: this.options.pluralSeparator,
          compatibilityJSON: this.options.compatibilityJSON,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix,
        })),
        c &&
          (!this.options.interpolation.format ||
            this.options.interpolation.format === o.interpolation.format) &&
          ((d.formatter = i(c)),
          d.formatter.init(d, this.options),
          (this.options.interpolation.format = d.formatter.format.bind(
            d.formatter
          ))),
        (d.interpolator = new k0(this.options)),
        (d.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }),
        (d.backendConnector = new _0(
          i(this.modules.backend),
          d.resourceStore,
          d,
          this.options
        )),
        d.backendConnector.on("*", function (p) {
          for (
            var v = arguments.length, y = new Array(v > 1 ? v - 1 : 0), C = 1;
            C < v;
            C++
          )
            y[C - 1] = arguments[C];
          t.emit(p, ...y);
        }),
        this.modules.languageDetector &&
          ((d.languageDetector = i(this.modules.languageDetector)),
          d.languageDetector.init &&
            d.languageDetector.init(d, this.options.detection, this.options)),
        this.modules.i18nFormat &&
          ((d.i18nFormat = i(this.modules.i18nFormat)),
          d.i18nFormat.init && d.i18nFormat.init(this)),
        (this.translator = new Xo(this.services, this.options)),
        this.translator.on("*", function (p) {
          for (
            var v = arguments.length, y = new Array(v > 1 ? v - 1 : 0), C = 1;
            C < v;
            C++
          )
            y[C - 1] = arguments[C];
          t.emit(p, ...y);
        }),
        this.modules.external.forEach((p) => {
          p.init && p.init(this);
        });
    }
    if (
      ((this.format = this.options.interpolation.format),
      r || (r = lo),
      this.options.fallbackLng &&
        !this.services.languageDetector &&
        !this.options.lng)
    ) {
      const c = this.services.languageUtils.getFallbackCodes(
        this.options.fallbackLng
      );
      c.length > 0 && c[0] !== "dev" && (this.options.lng = c[0]);
    }
    !this.services.languageDetector &&
      !this.options.lng &&
      this.logger.warn(
        "init: no languageDetector is used and no lng is defined"
      ),
      [
        "getResource",
        "hasResourceBundle",
        "getResourceBundle",
        "getDataByLanguage",
      ].forEach((c) => {
        this[c] = function () {
          return t.store[c](...arguments);
        };
      }),
      [
        "addResource",
        "addResources",
        "addResourceBundle",
        "removeResourceBundle",
      ].forEach((c) => {
        this[c] = function () {
          return t.store[c](...arguments), t;
        };
      });
    const a = Xn(),
      u = () => {
        const c = (f, d) => {
          (this.isInitializing = !1),
            this.isInitialized &&
              !this.initializedStoreOnce &&
              this.logger.warn(
                "init: i18next is already initialized. You should call init just once!"
              ),
            (this.isInitialized = !0),
            this.options.isClone ||
              this.logger.log("initialized", this.options),
            this.emit("initialized", this.options),
            a.resolve(d),
            r(f, d);
        };
        if (
          this.languages &&
          this.options.compatibilityAPI !== "v1" &&
          !this.isInitialized
        )
          return c(null, this.t.bind(this));
        this.changeLanguage(this.options.lng, c);
      };
    return (
      this.options.resources || !this.options.initImmediate
        ? u()
        : setTimeout(u, 0),
      a
    );
  }
  loadResources(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : lo;
    const o = M(t) ? t : this.language;
    if (
      (typeof t == "function" && (r = t),
      !this.options.resources || this.options.partialBundledLanguages)
    ) {
      if (
        o &&
        o.toLowerCase() === "cimode" &&
        (!this.options.preload || this.options.preload.length === 0)
      )
        return r();
      const i = [],
        l = (s) => {
          if (!s || s === "cimode") return;
          this.services.languageUtils.toResolveHierarchy(s).forEach((u) => {
            u !== "cimode" && i.indexOf(u) < 0 && i.push(u);
          });
        };
      o
        ? l(o)
        : this.services.languageUtils
            .getFallbackCodes(this.options.fallbackLng)
            .forEach((a) => l(a)),
        this.options.preload && this.options.preload.forEach((s) => l(s)),
        this.services.backendConnector.load(i, this.options.ns, (s) => {
          !s &&
            !this.resolvedLanguage &&
            this.language &&
            this.setResolvedLanguage(this.language),
            r(s);
        });
    } else r(null);
  }
  reloadResources(t, n, r) {
    const o = Xn();
    return (
      typeof t == "function" && ((r = t), (t = void 0)),
      typeof n == "function" && ((r = n), (n = void 0)),
      t || (t = this.languages),
      n || (n = this.options.ns),
      r || (r = lo),
      this.services.backendConnector.reload(t, n, (i) => {
        o.resolve(), r(i);
      }),
      o
    );
  }
  use(t) {
    if (!t)
      throw new Error(
        "You are passing an undefined module! Please check the object you are passing to i18next.use()"
      );
    if (!t.type)
      throw new Error(
        "You are passing a wrong module! Please check the object you are passing to i18next.use()"
      );
    return (
      t.type === "backend" && (this.modules.backend = t),
      (t.type === "logger" || (t.log && t.warn && t.error)) &&
        (this.modules.logger = t),
      t.type === "languageDetector" && (this.modules.languageDetector = t),
      t.type === "i18nFormat" && (this.modules.i18nFormat = t),
      t.type === "postProcessor" && rf.addPostProcessor(t),
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
    const o = Xn();
    this.emit("languageChanging", t);
    const i = (a) => {
        (this.language = a),
          (this.languages = this.services.languageUtils.toResolveHierarchy(a)),
          (this.resolvedLanguage = void 0),
          this.setResolvedLanguage(a);
      },
      l = (a, u) => {
        u
          ? (i(u),
            this.translator.changeLanguage(u),
            (this.isLanguageChangingTo = void 0),
            this.emit("languageChanged", u),
            this.logger.log("languageChanged", u))
          : (this.isLanguageChangingTo = void 0),
          o.resolve(function () {
            return r.t(...arguments);
          }),
          n &&
            n(a, function () {
              return r.t(...arguments);
            });
      },
      s = (a) => {
        !t && !a && this.services.languageDetector && (a = []);
        const u = M(a)
          ? a
          : this.services.languageUtils.getBestMatchFromCodes(a);
        u &&
          (this.language || i(u),
          this.translator.language || this.translator.changeLanguage(u),
          this.services.languageDetector &&
            this.services.languageDetector.cacheUserLanguage &&
            this.services.languageDetector.cacheUserLanguage(u)),
          this.loadResources(u, (c) => {
            l(c, u);
          });
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
      o
    );
  }
  getFixedT(t, n, r) {
    var o = this;
    const i = function (l, s) {
      let a;
      if (typeof s != "object") {
        for (
          var u = arguments.length, c = new Array(u > 2 ? u - 2 : 0), f = 2;
          f < u;
          f++
        )
          c[f - 2] = arguments[f];
        a = o.options.overloadTranslationOptionHandler([l, s].concat(c));
      } else a = { ...s };
      (a.lng = a.lng || i.lng),
        (a.lngs = a.lngs || i.lngs),
        (a.ns = a.ns || i.ns),
        a.keyPrefix !== "" && (a.keyPrefix = a.keyPrefix || r || i.keyPrefix);
      const d = o.options.keySeparator || ".";
      let p;
      return (
        a.keyPrefix && Array.isArray(l)
          ? (p = l.map((v) => `${a.keyPrefix}${d}${v}`))
          : (p = a.keyPrefix ? `${a.keyPrefix}${d}${l}` : l),
        o.t(p, a)
      );
    };
    return M(t) ? (i.lng = t) : (i.lngs = t), (i.ns = n), (i.keyPrefix = r), i;
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
          this.languages
        ),
        !1
      );
    if (!this.languages || !this.languages.length)
      return (
        this.logger.warn(
          "hasLoadedNamespace: i18n.languages were undefined or empty",
          this.languages
        ),
        !1
      );
    const r = n.lng || this.resolvedLanguage || this.languages[0],
      o = this.options ? this.options.fallbackLng : !1,
      i = this.languages[this.languages.length - 1];
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
      (l(r, t) && (!o || l(i, t)))
    );
  }
  loadNamespaces(t, n) {
    const r = Xn();
    return this.options.ns
      ? (M(t) && (t = [t]),
        t.forEach((o) => {
          this.options.ns.indexOf(o) < 0 && this.options.ns.push(o);
        }),
        this.loadResources((o) => {
          r.resolve(), n && n(o);
        }),
        r)
      : (n && n(), Promise.resolve());
  }
  loadLanguages(t, n) {
    const r = Xn();
    M(t) && (t = [t]);
    const o = this.options.preload || [],
      i = t.filter(
        (l) =>
          o.indexOf(l) < 0 && this.services.languageUtils.isSupportedCode(l)
      );
    return i.length
      ? ((this.options.preload = o.concat(i)),
        this.loadResources((l) => {
          r.resolve(), n && n(l);
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
      r = (this.services && this.services.languageUtils) || new xu(ku());
    return n.indexOf(r.getLanguagePartFromCode(t)) > -1 ||
      t.toLowerCase().indexOf("-arab") > 1
      ? "rtl"
      : "ltr";
  }
  static createInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 ? arguments[1] : void 0;
    return new $r(t, n);
  }
  cloneInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : lo;
    const r = t.forkResourceStore;
    r && delete t.forkResourceStore;
    const o = { ...this.options, ...t, isClone: !0 },
      i = new $r(o);
    return (
      (t.debug !== void 0 || t.prefix !== void 0) &&
        (i.logger = i.logger.clone(t)),
      ["store", "services", "language"].forEach((s) => {
        i[s] = this[s];
      }),
      (i.services = { ...this.services }),
      (i.services.utils = { hasLoadedNamespace: i.hasLoadedNamespace.bind(i) }),
      r &&
        ((i.store = new Su(this.store.data, o)),
        (i.services.resourceStore = i.store)),
      (i.translator = new Xo(i.services, o)),
      i.translator.on("*", function (s) {
        for (
          var a = arguments.length, u = new Array(a > 1 ? a - 1 : 0), c = 1;
          c < a;
          c++
        )
          u[c - 1] = arguments[c];
        i.emit(s, ...u);
      }),
      i.init(o, n),
      (i.translator.options = o),
      (i.translator.backendConnector.services.utils = {
        hasLoadedNamespace: i.hasLoadedNamespace.bind(i),
      }),
      i
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
const me = $r.createInstance();
me.createInstance = $r.createInstance;
me.createInstance;
me.dir;
me.init;
me.loadResources;
me.reloadResources;
me.use;
me.changeLanguage;
me.getFixedT;
me.t;
me.exists;
me.setDefaultNamespace;
me.hasLoadedNamespace;
me.loadNamespaces;
me.loadLanguages;
const $0 = {
  en: {
    translation: {
      "Transaction Records": "Transaction Records",
      "Operation Time": "Operation Time",
      "Prescription Time": "Prescription Time",
      "Drug Code": "Drug Code",
      "Drug Name": "Drug Name",
      "Search drug code or name": "Search drug code or name",
      Operator: "Operator",
      "Patient Name": "Patient Name",
      "Medical Record Number": "Medical Record Number",
      "Medication Bag Number": "Medication Bag Number",
      "Please enter search content": "Please enter search content",
      "No data available": "No data available",
      "No data": "No data",
      "No transaction records for the selected period":
        "No transaction records for the selected period",
      Export: "Export",
      Search: "Search",
      Reset: "Reset",
      Previous: "Previous",
      Next: "Next",
      Page: "Page",
      of: "of",
      "Total Records": "Total Records",
      Error: "Error",
      "Dispensing Stations": "Dispensing Stations",
      "Time Type": "Time Type",
      "Time Range": "Time Range",
      "Start Date": "Start Date",
      "End Date": "End Date",
      "Please select dispensing stations": "Please select dispensing stations",
      Selected: "Selected",
      stations: "stations",
      "Select All": "Select All",
      "Deselect All": "Deselect All",
      Login: "Login",
      ID: "ID",
      Password: "Password",
      "Logging in...": "Logging in...",
      "Login failed": "Login failed",
      Logout: "Logout",
      "Search Results": "Search Results",
      Showing: "Showing",
      entries: "entries",
      total: "total",
      "Previous Page": "Previous Page",
      "Next Page": "Next Page",
    },
  },
  zh: {
    translation: {
      "Transaction Records": "交易紀錄",
      "Operation Time": "操作時間",
      "Prescription Time": "處方時間",
      "Drug Code": "藥碼",
      "Drug Name": "藥名",
      "Search drug code or name": "搜尋藥碼或藥名",
      Operator: "操作人員",
      "Patient Name": "病人姓名",
      "Medical Record Number": "病歷號",
      "Medication Bag Number": "領藥號",
      "Please enter search content": "請輸入搜尋內容",
      "No data available": "無資料",
      "No data": "無資料",
      "No transaction records for the selected period": "所選期間無交易紀錄",
      Export: "匯出",
      Search: "搜尋",
      Reset: "重置",
      Previous: "上一頁",
      Next: "下一頁",
      Page: "頁",
      of: "筆，共",
      "Total Records": "總筆數",
      Error: "錯誤",
      "Dispensing Stations": "調劑台",
      "Time Type": "時間類型",
      "Time Range": "時間範圍",
      "Start Date": "開始日期",
      "End Date": "結束日期",
      "Please select dispensing stations": "請選擇調劑台",
      Selected: "已選擇",
      stations: "台",
      "Select All": "全選",
      "Deselect All": "取消全選",
      Login: "登入",
      ID: "帳號",
      Password: "密碼",
      "Logging in...": "登入中...",
      "Login failed": "登入失敗",
      Logout: "登出",
      "Search Results": "搜尋結果",
      Showing: "顯示",
      entries: "筆",
      total: "共",
      "Previous Page": "上一頁",
      "Next Page": "下一頁",
    },
  },
};
me.use(Kp).init({
  resources: $0,
  lng: "zh",
  interpolation: { escapeValue: !1 },
});
function F0() {
  const { i18n: e } = zn(),
    [t, n] = P.useState([]),
    [r, o] = P.useState([]),
    [i, l] = P.useState([]),
    [s, a] = P.useState([]),
    [u, c] = P.useState(!1),
    [f, d] = P.useState(!1),
    [p, v] = P.useState("OP"),
    [y, C] = P.useState(""),
    [h, g] = P.useState(""),
    [m, w] = P.useState(null),
    [x, k] = P.useState(!1),
    [E, L] = P.useState(!1),
    [V, _] = P.useState(!1);
  P.useEffect(() => {
    const R = bh();
    d(R), R && j();
  }, []),
    P.useEffect(() => {
      i.length > 0 && U(p, y, h);
    }, [p, y, h, i]);
  const U = (R, F, O) => {
      let A = i;
      if (F.trim()) {
        const X = F.toLowerCase();
        A = A.filter((nt) =>
          String(nt[R] || "")
            .toLowerCase()
            .includes(X)
        );
      }
      if (O.trim()) {
        const X = O.toLowerCase();
        A = A.filter((nt) => {
          const rt = String(nt.CODE || "").toLowerCase(),
            Vn = String(nt.NAME || "").toLowerCase();
          return rt.includes(X) || Vn.includes(X);
        });
      }
      a(A);
    },
    j = async () => {
      try {
        const R = await o0();
        n(R), o([]);
      } catch {
        ee.error("Failed to fetch dispensing stations");
      }
    },
    B = (R) => {
      o((F) =>
        F.includes(R.name) ? F.filter((O) => O !== R.name) : [...F, R.name]
      );
    },
    Q = async (R) => {
      if (r.length === 0) {
        ee.error("Please select at least one dispensing station");
        return;
      }
      L(!0), _(!0), c(!0);
      try {
        const F = await i0(
          R.timeType,
          R.startDate,
          R.endDate,
          r,
          Array(r.length).fill("調劑台")
        );
        l(F),
          a(F),
          w(R),
          k(!0),
          F.length === 0 && ee.error("No data available");
      } catch (F) {
        console.error(F), ee.error("Failed to fetch transactions");
      } finally {
        c(!1);
      }
    },
    Ie = async () => {
      if (!m || i.length === 0) {
        ee.error("No data to export");
        return;
      }
      try {
        await l0(i, m.startDate, m.endDate), ee.success("Export successful");
      } catch (R) {
        console.error("Export error:", R), ee.error("Failed to export data");
      }
    },
    Ye = () => {
      e.changeLanguage(e.language === "en" ? "zh" : "en");
    },
    vt = () => {
      d(!0), j();
    };
  return f
    ? S.jsxs("div", {
        className: "min-h-screen flex flex-col relative pb-10",
        children: [
          S.jsx(Vh, { position: "top-right" }),
          S.jsx(nm, { onLanguageToggle: Ye }),
          S.jsxs("main", {
            className:
              "w-full mx-auto pb-8 px-4 sm:px-6 lg:px-8 space-y-6 flex-grow",
            children: [
              S.jsx(rm, {
                stations: t,
                selectedStations: r,
                onStationToggle: B,
                forceCollapse: E,
                onCollapseChange: L,
              }),
              S.jsx(um, {
                onSearch: Q,
                totalRecords: s.length,
                drugFilterValue: h,
                onDrugFilterValueChange: g,
                filterType: p,
                filterValue: y,
                onFilterTypeChange: v,
                onFilterValueChange: C,
                onExport: Ie,
                forceCollapseTimeRange: V,
                onTimeRangeCollapseChange: _,
              }),
              u
                ? S.jsx("div", {
                    className:
                      "bg-white rounded-lg shadow-sm border p-4 md:p-6 mb-6 flex justify-center items-center h-64",
                    children: S.jsx("div", {
                      className:
                        "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600",
                    }),
                  })
                : x && S.jsx(n0, { data: s, pageSize: 50 }),
            ],
          }),
          S.jsx("footer", {
            className:
              "bg-white shadow-sm border-t fixed bottom-0 left-0 right-0",
            children: S.jsx("div", {
              className: "max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8",
              children: S.jsx("p", {
                className: "text-center text-gray-700 text-sm",
                children: "Copyright ©2025 鴻森智能科技",
              }),
            }),
          }),
        ],
      })
    : S.jsx(r0, { onLoginSuccess: vt });
}
zd(document.getElementById("root")).render(
  S.jsx(P.StrictMode, { children: S.jsx(F0, {}) })
);
