(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) s(o);
  new MutationObserver((o) => {
    for (const l of o)
      if (l.type === "childList")
        for (const a of l.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && s(a);
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
  function s(o) {
    if (o.ep) return;
    o.ep = !0;
    const l = n(o);
    fetch(o.href, l);
  }
})();
function Nf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var kc = { exports: {} },
  To = {},
  Dc = { exports: {} },
  Re = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ss = Symbol.for("react.element"),
  jf = Symbol.for("react.portal"),
  Sf = Symbol.for("react.fragment"),
  Cf = Symbol.for("react.strict_mode"),
  kf = Symbol.for("react.profiler"),
  Df = Symbol.for("react.provider"),
  _f = Symbol.for("react.context"),
  Mf = Symbol.for("react.forward_ref"),
  Ef = Symbol.for("react.suspense"),
  If = Symbol.for("react.memo"),
  Pf = Symbol.for("react.lazy"),
  mi = Symbol.iterator;
function Tf(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (mi && e[mi]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var _c = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Mc = Object.assign,
  Ec = {};
function Rr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ec),
    (this.updater = n || _c);
}
Rr.prototype.isReactComponent = {};
Rr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Rr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ic() {}
Ic.prototype = Rr.prototype;
function xa(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ec),
    (this.updater = n || _c);
}
var ya = (xa.prototype = new Ic());
ya.constructor = xa;
Mc(ya, Rr.prototype);
ya.isPureReactComponent = !0;
var hi = Array.isArray,
  Pc = Object.prototype.hasOwnProperty,
  va = { current: null },
  Tc = { key: !0, ref: !0, __self: !0, __source: !0 };
function Rc(e, t, n) {
  var s,
    o = {},
    l = null,
    a = null;
  if (t != null)
    for (s in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (l = "" + t.key),
    t))
      Pc.call(t, s) && !Tc.hasOwnProperty(s) && (o[s] = t[s]);
  var i = arguments.length - 2;
  if (i === 1) o.children = n;
  else if (1 < i) {
    for (var c = Array(i), x = 0; x < i; x++) c[x] = arguments[x + 2];
    o.children = c;
  }
  if (e && e.defaultProps)
    for (s in ((i = e.defaultProps), i)) o[s] === void 0 && (o[s] = i[s]);
  return {
    $$typeof: Ss,
    type: e,
    key: l,
    ref: a,
    props: o,
    _owner: va.current,
  };
}
function Rf(e, t) {
  return {
    $$typeof: Ss,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function wa(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ss;
}
function Af(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var gi = /\/+/g;
function Jo(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Af("" + e.key)
    : t.toString(36);
}
function Xs(e, t, n, s, o) {
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
          case Ss:
          case jf:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (o = o(a)),
      (e = s === "" ? "." + Jo(a, 0) : s),
      hi(o)
        ? ((n = ""),
          e != null && (n = e.replace(gi, "$&/") + "/"),
          Xs(o, t, n, "", function (x) {
            return x;
          }))
        : o != null &&
          (wa(o) &&
            (o = Rf(
              o,
              n +
                (!o.key || (a && a.key === o.key)
                  ? ""
                  : ("" + o.key).replace(gi, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((a = 0), (s = s === "" ? "." : s + ":"), hi(e)))
    for (var i = 0; i < e.length; i++) {
      l = e[i];
      var c = s + Jo(l, i);
      a += Xs(l, t, n, c, o);
    }
  else if (((c = Tf(e)), typeof c == "function"))
    for (e = c.call(e), i = 0; !(l = e.next()).done; )
      (l = l.value), (c = s + Jo(l, i++)), (a += Xs(l, t, n, c, o));
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
function Es(e, t, n) {
  if (e == null) return e;
  var s = [],
    o = 0;
  return (
    Xs(e, s, "", "", function (l) {
      return t.call(n, l, o++);
    }),
    s
  );
}
function $f(e) {
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
var ht = { current: null },
  Qs = { transition: null },
  Of = {
    ReactCurrentDispatcher: ht,
    ReactCurrentBatchConfig: Qs,
    ReactCurrentOwner: va,
  };
function Ac() {
  throw Error("act(...) is not supported in production builds of React.");
}
Re.Children = {
  map: Es,
  forEach: function (e, t, n) {
    Es(
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
      Es(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Es(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!wa(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
Re.Component = Rr;
Re.Fragment = Sf;
Re.Profiler = kf;
Re.PureComponent = xa;
Re.StrictMode = Cf;
Re.Suspense = Ef;
Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Of;
Re.act = Ac;
Re.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var s = Mc({}, e.props),
    o = e.key,
    l = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((l = t.ref), (a = va.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var i = e.type.defaultProps;
    for (c in t)
      Pc.call(t, c) &&
        !Tc.hasOwnProperty(c) &&
        (s[c] = t[c] === void 0 && i !== void 0 ? i[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) s.children = n;
  else if (1 < c) {
    i = Array(c);
    for (var x = 0; x < c; x++) i[x] = arguments[x + 2];
    s.children = i;
  }
  return { $$typeof: Ss, type: e.type, key: o, ref: l, props: s, _owner: a };
};
Re.createContext = function (e) {
  return (
    (e = {
      $$typeof: _f,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Df, _context: e }),
    (e.Consumer = e)
  );
};
Re.createElement = Rc;
Re.createFactory = function (e) {
  var t = Rc.bind(null, e);
  return (t.type = e), t;
};
Re.createRef = function () {
  return { current: null };
};
Re.forwardRef = function (e) {
  return { $$typeof: Mf, render: e };
};
Re.isValidElement = wa;
Re.lazy = function (e) {
  return { $$typeof: Pf, _payload: { _status: -1, _result: e }, _init: $f };
};
Re.memo = function (e, t) {
  return { $$typeof: If, type: e, compare: t === void 0 ? null : t };
};
Re.startTransition = function (e) {
  var t = Qs.transition;
  Qs.transition = {};
  try {
    e();
  } finally {
    Qs.transition = t;
  }
};
Re.unstable_act = Ac;
Re.useCallback = function (e, t) {
  return ht.current.useCallback(e, t);
};
Re.useContext = function (e) {
  return ht.current.useContext(e);
};
Re.useDebugValue = function () {};
Re.useDeferredValue = function (e) {
  return ht.current.useDeferredValue(e);
};
Re.useEffect = function (e, t) {
  return ht.current.useEffect(e, t);
};
Re.useId = function () {
  return ht.current.useId();
};
Re.useImperativeHandle = function (e, t, n) {
  return ht.current.useImperativeHandle(e, t, n);
};
Re.useInsertionEffect = function (e, t) {
  return ht.current.useInsertionEffect(e, t);
};
Re.useLayoutEffect = function (e, t) {
  return ht.current.useLayoutEffect(e, t);
};
Re.useMemo = function (e, t) {
  return ht.current.useMemo(e, t);
};
Re.useReducer = function (e, t, n) {
  return ht.current.useReducer(e, t, n);
};
Re.useRef = function (e) {
  return ht.current.useRef(e);
};
Re.useState = function (e) {
  return ht.current.useState(e);
};
Re.useSyncExternalStore = function (e, t, n) {
  return ht.current.useSyncExternalStore(e, t, n);
};
Re.useTransition = function () {
  return ht.current.useTransition();
};
Re.version = "18.3.1";
Dc.exports = Re;
var f = Dc.exports;
const ao = Nf(f);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Lf = f,
  Uf = Symbol.for("react.element"),
  Bf = Symbol.for("react.fragment"),
  zf = Object.prototype.hasOwnProperty,
  Gf = Lf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Ff = { key: !0, ref: !0, __self: !0, __source: !0 };
function $c(e, t, n) {
  var s,
    o = {},
    l = null,
    a = null;
  n !== void 0 && (l = "" + n),
    t.key !== void 0 && (l = "" + t.key),
    t.ref !== void 0 && (a = t.ref);
  for (s in t) zf.call(t, s) && !Ff.hasOwnProperty(s) && (o[s] = t[s]);
  if (e && e.defaultProps)
    for (s in ((t = e.defaultProps), t)) o[s] === void 0 && (o[s] = t[s]);
  return {
    $$typeof: Uf,
    type: e,
    key: l,
    ref: a,
    props: o,
    _owner: Gf.current,
  };
}
To.Fragment = Bf;
To.jsx = $c;
To.jsxs = $c;
kc.exports = To;
var r = kc.exports,
  Oc = { exports: {} },
  Pt = {},
  Lc = { exports: {} },
  Uc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(k, M) {
    var J = k.length;
    k.push(M);
    e: for (; 0 < J; ) {
      var z = (J - 1) >>> 1,
        X = k[z];
      if (0 < o(X, M)) (k[z] = M), (k[J] = X), (J = z);
      else break e;
    }
  }
  function n(k) {
    return k.length === 0 ? null : k[0];
  }
  function s(k) {
    if (k.length === 0) return null;
    var M = k[0],
      J = k.pop();
    if (J !== M) {
      k[0] = J;
      e: for (var z = 0, X = k.length, be = X >>> 1; z < be; ) {
        var fe = 2 * (z + 1) - 1,
          U = k[fe],
          xe = fe + 1,
          F = k[xe];
        if (0 > o(U, J))
          xe < X && 0 > o(F, U)
            ? ((k[z] = F), (k[xe] = J), (z = xe))
            : ((k[z] = U), (k[fe] = J), (z = fe));
        else if (xe < X && 0 > o(F, J)) (k[z] = F), (k[xe] = J), (z = xe);
        else break e;
      }
    }
    return M;
  }
  function o(k, M) {
    var J = k.sortIndex - M.sortIndex;
    return J !== 0 ? J : k.id - M.id;
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
    x = [],
    g = 1,
    h = null,
    p = 3,
    j = !1,
    S = !1,
    C = !1,
    R = typeof setTimeout == "function" ? setTimeout : null,
    d = typeof clearTimeout == "function" ? clearTimeout : null,
    u = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(k) {
    for (var M = n(x); M !== null; ) {
      if (M.callback === null) s(x);
      else if (M.startTime <= k)
        s(x), (M.sortIndex = M.expirationTime), t(c, M);
      else break;
      M = n(x);
    }
  }
  function D(k) {
    if (((C = !1), m(k), !S))
      if (n(c) !== null) (S = !0), w(T);
      else {
        var M = n(x);
        M !== null && N(D, M.startTime - k);
      }
  }
  function T(k, M) {
    (S = !1), C && ((C = !1), d(V), (V = -1)), (j = !0);
    var J = p;
    try {
      for (
        m(M), h = n(c);
        h !== null && (!(h.expirationTime > M) || (k && !pe()));

      ) {
        var z = h.callback;
        if (typeof z == "function") {
          (h.callback = null), (p = h.priorityLevel);
          var X = z(h.expirationTime <= M);
          (M = e.unstable_now()),
            typeof X == "function" ? (h.callback = X) : h === n(c) && s(c),
            m(M);
        } else s(c);
        h = n(c);
      }
      if (h !== null) var be = !0;
      else {
        var fe = n(x);
        fe !== null && N(D, fe.startTime - M), (be = !1);
      }
      return be;
    } finally {
      (h = null), (p = J), (j = !1);
    }
  }
  var _ = !1,
    P = null,
    V = -1,
    Q = 5,
    K = -1;
  function pe() {
    return !(e.unstable_now() - K < Q);
  }
  function ye() {
    if (P !== null) {
      var k = e.unstable_now();
      K = k;
      var M = !0;
      try {
        M = P(!0, k);
      } finally {
        M ? v() : ((_ = !1), (P = null));
      }
    } else _ = !1;
  }
  var v;
  if (typeof u == "function")
    v = function () {
      u(ye);
    };
  else if (typeof MessageChannel < "u") {
    var b = new MessageChannel(),
      L = b.port2;
    (b.port1.onmessage = ye),
      (v = function () {
        L.postMessage(null);
      });
  } else
    v = function () {
      R(ye, 0);
    };
  function w(k) {
    (P = k), _ || ((_ = !0), v());
  }
  function N(k, M) {
    V = R(function () {
      k(e.unstable_now());
    }, M);
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
      S || j || ((S = !0), w(T));
    }),
    (e.unstable_forceFrameRate = function (k) {
      0 > k || 125 < k
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (Q = 0 < k ? Math.floor(1e3 / k) : 5);
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
          var M = 3;
          break;
        default:
          M = p;
      }
      var J = p;
      p = M;
      try {
        return k();
      } finally {
        p = J;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (k, M) {
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
      var J = p;
      p = k;
      try {
        return M();
      } finally {
        p = J;
      }
    }),
    (e.unstable_scheduleCallback = function (k, M, J) {
      var z = e.unstable_now();
      switch (
        (typeof J == "object" && J !== null
          ? ((J = J.delay), (J = typeof J == "number" && 0 < J ? z + J : z))
          : (J = z),
        k)
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
        (X = J + X),
        (k = {
          id: g++,
          callback: M,
          priorityLevel: k,
          startTime: J,
          expirationTime: X,
          sortIndex: -1,
        }),
        J > z
          ? ((k.sortIndex = J),
            t(x, k),
            n(c) === null &&
              k === n(x) &&
              (C ? (d(V), (V = -1)) : (C = !0), N(D, J - z)))
          : ((k.sortIndex = X), t(c, k), S || j || ((S = !0), w(T))),
        k
      );
    }),
    (e.unstable_shouldYield = pe),
    (e.unstable_wrapCallback = function (k) {
      var M = p;
      return function () {
        var J = p;
        p = M;
        try {
          return k.apply(this, arguments);
        } finally {
          p = J;
        }
      };
    });
})(Uc);
Lc.exports = Uc;
var Vf = Lc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Hf = f,
  It = Vf;
function ae(e) {
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
var Bc = new Set(),
  as = {};
function Jn(e, t) {
  kr(e, t), kr(e + "Capture", t);
}
function kr(e, t) {
  for (as[e] = t, e = 0; e < t.length; e++) Bc.add(t[e]);
}
var dn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Sl = Object.prototype.hasOwnProperty,
  qf =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  xi = {},
  yi = {};
function Wf(e) {
  return Sl.call(yi, e)
    ? !0
    : Sl.call(xi, e)
    ? !1
    : qf.test(e)
    ? (yi[e] = !0)
    : ((xi[e] = !0), !1);
}
function Yf(e, t, n, s) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return s
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Xf(e, t, n, s) {
  if (t === null || typeof t > "u" || Yf(e, t, n, s)) return !0;
  if (s) return !1;
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
function gt(e, t, n, s, o, l, a) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = s),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = l),
    (this.removeEmptyString = a);
}
var at = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    at[e] = new gt(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  at[t] = new gt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  at[e] = new gt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  at[e] = new gt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    at[e] = new gt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  at[e] = new gt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  at[e] = new gt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  at[e] = new gt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  at[e] = new gt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ba = /[\-:]([a-z])/g;
function Na(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ba, Na);
    at[t] = new gt(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ba, Na);
    at[t] = new gt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ba, Na);
  at[t] = new gt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  at[e] = new gt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
at.xlinkHref = new gt(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  at[e] = new gt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ja(e, t, n, s) {
  var o = at.hasOwnProperty(t) ? at[t] : null;
  (o !== null
    ? o.type !== 0
    : s ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Xf(t, n, o, s) && (n = null),
    s || o === null
      ? Wf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (s = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            s ? e.setAttributeNS(s, t, n) : e.setAttribute(t, n))));
}
var mn = Hf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Is = Symbol.for("react.element"),
  lr = Symbol.for("react.portal"),
  ar = Symbol.for("react.fragment"),
  Sa = Symbol.for("react.strict_mode"),
  Cl = Symbol.for("react.profiler"),
  zc = Symbol.for("react.provider"),
  Gc = Symbol.for("react.context"),
  Ca = Symbol.for("react.forward_ref"),
  kl = Symbol.for("react.suspense"),
  Dl = Symbol.for("react.suspense_list"),
  ka = Symbol.for("react.memo"),
  xn = Symbol.for("react.lazy"),
  Fc = Symbol.for("react.offscreen"),
  vi = Symbol.iterator;
function Ur(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (vi && e[vi]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var qe = Object.assign,
  Zo;
function Wr(e) {
  if (Zo === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Zo = (t && t[1]) || "";
    }
  return (
    `
` +
    Zo +
    e
  );
}
var el = !1;
function tl(e, t) {
  if (!e || el) return "";
  el = !0;
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
        } catch (x) {
          var s = x;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (x) {
          s = x;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (x) {
        s = x;
      }
      e();
    }
  } catch (x) {
    if (x && s && typeof x.stack == "string") {
      for (
        var o = x.stack.split(`
`),
          l = s.stack.split(`
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
    (el = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Wr(e) : "";
}
function Qf(e) {
  switch (e.tag) {
    case 5:
      return Wr(e.type);
    case 16:
      return Wr("Lazy");
    case 13:
      return Wr("Suspense");
    case 19:
      return Wr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = tl(e.type, !1)), e;
    case 11:
      return (e = tl(e.type.render, !1)), e;
    case 1:
      return (e = tl(e.type, !0)), e;
    default:
      return "";
  }
}
function _l(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case ar:
      return "Fragment";
    case lr:
      return "Portal";
    case Cl:
      return "Profiler";
    case Sa:
      return "StrictMode";
    case kl:
      return "Suspense";
    case Dl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Gc:
        return (e.displayName || "Context") + ".Consumer";
      case zc:
        return (e._context.displayName || "Context") + ".Provider";
      case Ca:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case ka:
        return (
          (t = e.displayName || null), t !== null ? t : _l(e.type) || "Memo"
        );
      case xn:
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
      return t === Sa ? "StrictMode" : "Mode";
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
function Pn(e) {
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
function Vc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Jf(e) {
  var t = Vc(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    s = "" + e[t];
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
          (s = "" + a), l.call(this, a);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return s;
        },
        setValue: function (a) {
          s = "" + a;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Ps(e) {
  e._valueTracker || (e._valueTracker = Jf(e));
}
function Hc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    s = "";
  return (
    e && (s = Vc(e) ? (e.checked ? "true" : "false") : e.value),
    (e = s),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function io(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ml(e, t) {
  var n = t.checked;
  return qe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function wi(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    s = t.checked != null ? t.checked : t.defaultChecked;
  (n = Pn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: s,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function qc(e, t) {
  (t = t.checked), t != null && ja(e, "checked", t, !1);
}
function El(e, t) {
  qc(e, t);
  var n = Pn(t.value),
    s = t.type;
  if (n != null)
    s === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (s === "submit" || s === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Il(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Il(e, t.type, Pn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function bi(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var s = t.type;
    if (
      !(
        (s !== "submit" && s !== "reset") ||
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
function Il(e, t, n) {
  (t !== "number" || io(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Yr = Array.isArray;
function wr(e, t, n, s) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && s && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Pn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), s && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Pl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(ae(91));
  return qe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Ni(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(ae(92));
      if (Yr(n)) {
        if (1 < n.length) throw Error(ae(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Pn(n) };
}
function Wc(e, t) {
  var n = Pn(t.value),
    s = Pn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    s != null && (e.defaultValue = "" + s);
}
function ji(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Yc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Tl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Yc(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Ts,
  Xc = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, s, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, s, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Ts = Ts || document.createElement("div"),
          Ts.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Ts.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function is(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Kr = {
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
  Zf = ["Webkit", "ms", "Moz", "O"];
Object.keys(Kr).forEach(function (e) {
  Zf.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Kr[t] = Kr[e]);
  });
});
function Qc(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Kr.hasOwnProperty(e) && Kr[e])
    ? ("" + t).trim()
    : t + "px";
}
function Kc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var s = n.indexOf("--") === 0,
        o = Qc(n, t[n], s);
      n === "float" && (n = "cssFloat"), s ? e.setProperty(n, o) : (e[n] = o);
    }
}
var ep = qe(
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
function Rl(e, t) {
  if (t) {
    if (ep[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(ae(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(ae(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(ae(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(ae(62));
  }
}
function Al(e, t) {
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
var $l = null;
function Da(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ol = null,
  br = null,
  Nr = null;
function Si(e) {
  if ((e = Ds(e))) {
    if (typeof Ol != "function") throw Error(ae(280));
    var t = e.stateNode;
    t && ((t = Lo(t)), Ol(e.stateNode, e.type, t));
  }
}
function Jc(e) {
  br ? (Nr ? Nr.push(e) : (Nr = [e])) : (br = e);
}
function Zc() {
  if (br) {
    var e = br,
      t = Nr;
    if (((Nr = br = null), Si(e), t)) for (e = 0; e < t.length; e++) Si(t[e]);
  }
}
function ed(e, t) {
  return e(t);
}
function td() {}
var nl = !1;
function nd(e, t, n) {
  if (nl) return e(t, n);
  nl = !0;
  try {
    return ed(e, t, n);
  } finally {
    (nl = !1), (br !== null || Nr !== null) && (td(), Zc());
  }
}
function cs(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var s = Lo(n);
  if (s === null) return null;
  n = s[t];
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
      (s = !s.disabled) ||
        ((e = e.type),
        (s = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !s);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(ae(231, t, typeof n));
  return n;
}
var Ll = !1;
if (dn)
  try {
    var Br = {};
    Object.defineProperty(Br, "passive", {
      get: function () {
        Ll = !0;
      },
    }),
      window.addEventListener("test", Br, Br),
      window.removeEventListener("test", Br, Br);
  } catch {
    Ll = !1;
  }
function tp(e, t, n, s, o, l, a, i, c) {
  var x = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, x);
  } catch (g) {
    this.onError(g);
  }
}
var Jr = !1,
  co = null,
  uo = !1,
  Ul = null,
  np = {
    onError: function (e) {
      (Jr = !0), (co = e);
    },
  };
function rp(e, t, n, s, o, l, a, i, c) {
  (Jr = !1), (co = null), tp.apply(np, arguments);
}
function sp(e, t, n, s, o, l, a, i, c) {
  if ((rp.apply(this, arguments), Jr)) {
    if (Jr) {
      var x = co;
      (Jr = !1), (co = null);
    } else throw Error(ae(198));
    uo || ((uo = !0), (Ul = x));
  }
}
function Zn(e) {
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
function rd(e) {
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
function Ci(e) {
  if (Zn(e) !== e) throw Error(ae(188));
}
function op(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Zn(e)), t === null)) throw Error(ae(188));
    return t !== e ? null : e;
  }
  for (var n = e, s = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var l = o.alternate;
    if (l === null) {
      if (((s = o.return), s !== null)) {
        n = s;
        continue;
      }
      break;
    }
    if (o.child === l.child) {
      for (l = o.child; l; ) {
        if (l === n) return Ci(o), e;
        if (l === s) return Ci(o), t;
        l = l.sibling;
      }
      throw Error(ae(188));
    }
    if (n.return !== s.return) (n = o), (s = l);
    else {
      for (var a = !1, i = o.child; i; ) {
        if (i === n) {
          (a = !0), (n = o), (s = l);
          break;
        }
        if (i === s) {
          (a = !0), (s = o), (n = l);
          break;
        }
        i = i.sibling;
      }
      if (!a) {
        for (i = l.child; i; ) {
          if (i === n) {
            (a = !0), (n = l), (s = o);
            break;
          }
          if (i === s) {
            (a = !0), (s = l), (n = o);
            break;
          }
          i = i.sibling;
        }
        if (!a) throw Error(ae(189));
      }
    }
    if (n.alternate !== s) throw Error(ae(190));
  }
  if (n.tag !== 3) throw Error(ae(188));
  return n.stateNode.current === n ? e : t;
}
function sd(e) {
  return (e = op(e)), e !== null ? od(e) : null;
}
function od(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = od(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var ld = It.unstable_scheduleCallback,
  ki = It.unstable_cancelCallback,
  lp = It.unstable_shouldYield,
  ap = It.unstable_requestPaint,
  Qe = It.unstable_now,
  ip = It.unstable_getCurrentPriorityLevel,
  _a = It.unstable_ImmediatePriority,
  ad = It.unstable_UserBlockingPriority,
  fo = It.unstable_NormalPriority,
  cp = It.unstable_LowPriority,
  id = It.unstable_IdlePriority,
  Ro = null,
  tn = null;
function dp(e) {
  if (tn && typeof tn.onCommitFiberRoot == "function")
    try {
      tn.onCommitFiberRoot(Ro, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Yt = Math.clz32 ? Math.clz32 : pp,
  up = Math.log,
  fp = Math.LN2;
function pp(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((up(e) / fp) | 0)) | 0;
}
var Rs = 64,
  As = 4194304;
function Xr(e) {
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
function po(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var s = 0,
    o = e.suspendedLanes,
    l = e.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var i = a & ~o;
    i !== 0 ? (s = Xr(i)) : ((l &= a), l !== 0 && (s = Xr(l)));
  } else (a = n & ~o), a !== 0 ? (s = Xr(a)) : l !== 0 && (s = Xr(l));
  if (s === 0) return 0;
  if (
    t !== 0 &&
    t !== s &&
    !(t & o) &&
    ((o = s & -s), (l = t & -t), o >= l || (o === 16 && (l & 4194240) !== 0))
  )
    return t;
  if ((s & 4 && (s |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= s; 0 < t; )
      (n = 31 - Yt(t)), (o = 1 << n), (s |= e[n]), (t &= ~o);
  return s;
}
function mp(e, t) {
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
function hp(e, t) {
  for (
    var n = e.suspendedLanes,
      s = e.pingedLanes,
      o = e.expirationTimes,
      l = e.pendingLanes;
    0 < l;

  ) {
    var a = 31 - Yt(l),
      i = 1 << a,
      c = o[a];
    c === -1
      ? (!(i & n) || i & s) && (o[a] = mp(i, t))
      : c <= t && (e.expiredLanes |= i),
      (l &= ~i);
  }
}
function Bl(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function cd() {
  var e = Rs;
  return (Rs <<= 1), !(Rs & 4194240) && (Rs = 64), e;
}
function rl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Cs(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Yt(t)),
    (e[t] = n);
}
function gp(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var s = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Yt(n),
      l = 1 << o;
    (t[o] = 0), (s[o] = -1), (e[o] = -1), (n &= ~l);
  }
}
function Ma(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var s = 31 - Yt(n),
      o = 1 << s;
    (o & t) | (e[s] & t) && (e[s] |= t), (n &= ~o);
  }
}
var Oe = 0;
function dd(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var ud,
  Ea,
  fd,
  pd,
  md,
  zl = !1,
  $s = [],
  Sn = null,
  Cn = null,
  kn = null,
  ds = new Map(),
  us = new Map(),
  vn = [],
  xp =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Di(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Sn = null;
      break;
    case "dragenter":
    case "dragleave":
      Cn = null;
      break;
    case "mouseover":
    case "mouseout":
      kn = null;
      break;
    case "pointerover":
    case "pointerout":
      ds.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      us.delete(t.pointerId);
  }
}
function zr(e, t, n, s, o, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: s,
        nativeEvent: l,
        targetContainers: [o],
      }),
      t !== null && ((t = Ds(t)), t !== null && Ea(t)),
      e)
    : ((e.eventSystemFlags |= s),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function yp(e, t, n, s, o) {
  switch (t) {
    case "focusin":
      return (Sn = zr(Sn, e, t, n, s, o)), !0;
    case "dragenter":
      return (Cn = zr(Cn, e, t, n, s, o)), !0;
    case "mouseover":
      return (kn = zr(kn, e, t, n, s, o)), !0;
    case "pointerover":
      var l = o.pointerId;
      return ds.set(l, zr(ds.get(l) || null, e, t, n, s, o)), !0;
    case "gotpointercapture":
      return (
        (l = o.pointerId), us.set(l, zr(us.get(l) || null, e, t, n, s, o)), !0
      );
  }
  return !1;
}
function hd(e) {
  var t = Gn(e.target);
  if (t !== null) {
    var n = Zn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = rd(n)), t !== null)) {
          (e.blockedOn = t),
            md(e.priority, function () {
              fd(n);
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
function Ks(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Gl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var s = new n.constructor(n.type, n);
      ($l = s), n.target.dispatchEvent(s), ($l = null);
    } else return (t = Ds(n)), t !== null && Ea(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function _i(e, t, n) {
  Ks(e) && n.delete(t);
}
function vp() {
  (zl = !1),
    Sn !== null && Ks(Sn) && (Sn = null),
    Cn !== null && Ks(Cn) && (Cn = null),
    kn !== null && Ks(kn) && (kn = null),
    ds.forEach(_i),
    us.forEach(_i);
}
function Gr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    zl ||
      ((zl = !0),
      It.unstable_scheduleCallback(It.unstable_NormalPriority, vp)));
}
function fs(e) {
  function t(o) {
    return Gr(o, e);
  }
  if (0 < $s.length) {
    Gr($s[0], e);
    for (var n = 1; n < $s.length; n++) {
      var s = $s[n];
      s.blockedOn === e && (s.blockedOn = null);
    }
  }
  for (
    Sn !== null && Gr(Sn, e),
      Cn !== null && Gr(Cn, e),
      kn !== null && Gr(kn, e),
      ds.forEach(t),
      us.forEach(t),
      n = 0;
    n < vn.length;
    n++
  )
    (s = vn[n]), s.blockedOn === e && (s.blockedOn = null);
  for (; 0 < vn.length && ((n = vn[0]), n.blockedOn === null); )
    hd(n), n.blockedOn === null && vn.shift();
}
var jr = mn.ReactCurrentBatchConfig,
  mo = !0;
function wp(e, t, n, s) {
  var o = Oe,
    l = jr.transition;
  jr.transition = null;
  try {
    (Oe = 1), Ia(e, t, n, s);
  } finally {
    (Oe = o), (jr.transition = l);
  }
}
function bp(e, t, n, s) {
  var o = Oe,
    l = jr.transition;
  jr.transition = null;
  try {
    (Oe = 4), Ia(e, t, n, s);
  } finally {
    (Oe = o), (jr.transition = l);
  }
}
function Ia(e, t, n, s) {
  if (mo) {
    var o = Gl(e, t, n, s);
    if (o === null) pl(e, t, s, ho, n), Di(e, s);
    else if (yp(o, e, t, n, s)) s.stopPropagation();
    else if ((Di(e, s), t & 4 && -1 < xp.indexOf(e))) {
      for (; o !== null; ) {
        var l = Ds(o);
        if (
          (l !== null && ud(l),
          (l = Gl(e, t, n, s)),
          l === null && pl(e, t, s, ho, n),
          l === o)
        )
          break;
        o = l;
      }
      o !== null && s.stopPropagation();
    } else pl(e, t, s, null, n);
  }
}
var ho = null;
function Gl(e, t, n, s) {
  if (((ho = null), (e = Da(s)), (e = Gn(e)), e !== null))
    if (((t = Zn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = rd(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ho = e), null;
}
function gd(e) {
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
      switch (ip()) {
        case _a:
          return 1;
        case ad:
          return 4;
        case fo:
        case cp:
          return 16;
        case id:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var bn = null,
  Pa = null,
  Js = null;
function xd() {
  if (Js) return Js;
  var e,
    t = Pa,
    n = t.length,
    s,
    o = "value" in bn ? bn.value : bn.textContent,
    l = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var a = n - e;
  for (s = 1; s <= a && t[n - s] === o[l - s]; s++);
  return (Js = o.slice(e, 1 < s ? 1 - s : void 0));
}
function Zs(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Os() {
  return !0;
}
function Mi() {
  return !1;
}
function Tt(e) {
  function t(n, s, o, l, a) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = s),
      (this.nativeEvent = l),
      (this.target = a),
      (this.currentTarget = null);
    for (var i in e)
      e.hasOwnProperty(i) && ((n = e[i]), (this[i] = n ? n(l) : l[i]));
    return (
      (this.isDefaultPrevented = (
        l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1
      )
        ? Os
        : Mi),
      (this.isPropagationStopped = Mi),
      this
    );
  }
  return (
    qe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Os));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Os));
      },
      persist: function () {},
      isPersistent: Os,
    }),
    t
  );
}
var Ar = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ta = Tt(Ar),
  ks = qe({}, Ar, { view: 0, detail: 0 }),
  Np = Tt(ks),
  sl,
  ol,
  Fr,
  Ao = qe({}, ks, {
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
    getModifierState: Ra,
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
        : (e !== Fr &&
            (Fr && e.type === "mousemove"
              ? ((sl = e.screenX - Fr.screenX), (ol = e.screenY - Fr.screenY))
              : (ol = sl = 0),
            (Fr = e)),
          sl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : ol;
    },
  }),
  Ei = Tt(Ao),
  jp = qe({}, Ao, { dataTransfer: 0 }),
  Sp = Tt(jp),
  Cp = qe({}, ks, { relatedTarget: 0 }),
  ll = Tt(Cp),
  kp = qe({}, Ar, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Dp = Tt(kp),
  _p = qe({}, Ar, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Mp = Tt(_p),
  Ep = qe({}, Ar, { data: 0 }),
  Ii = Tt(Ep),
  Ip = {
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
  Pp = {
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
  Tp = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Rp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Tp[e]) ? !!t[e] : !1;
}
function Ra() {
  return Rp;
}
var Ap = qe({}, ks, {
    key: function (e) {
      if (e.key) {
        var t = Ip[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Zs(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Pp[e.keyCode] || "Unidentified"
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
    getModifierState: Ra,
    charCode: function (e) {
      return e.type === "keypress" ? Zs(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Zs(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  $p = Tt(Ap),
  Op = qe({}, Ao, {
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
  Pi = Tt(Op),
  Lp = qe({}, ks, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ra,
  }),
  Up = Tt(Lp),
  Bp = qe({}, Ar, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  zp = Tt(Bp),
  Gp = qe({}, Ao, {
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
  Fp = Tt(Gp),
  Vp = [9, 13, 27, 32],
  Aa = dn && "CompositionEvent" in window,
  Zr = null;
dn && "documentMode" in document && (Zr = document.documentMode);
var Hp = dn && "TextEvent" in window && !Zr,
  yd = dn && (!Aa || (Zr && 8 < Zr && 11 >= Zr)),
  Ti = " ",
  Ri = !1;
function vd(e, t) {
  switch (e) {
    case "keyup":
      return Vp.indexOf(t.keyCode) !== -1;
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
function wd(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var ir = !1;
function qp(e, t) {
  switch (e) {
    case "compositionend":
      return wd(t);
    case "keypress":
      return t.which !== 32 ? null : ((Ri = !0), Ti);
    case "textInput":
      return (e = t.data), e === Ti && Ri ? null : e;
    default:
      return null;
  }
}
function Wp(e, t) {
  if (ir)
    return e === "compositionend" || (!Aa && vd(e, t))
      ? ((e = xd()), (Js = Pa = bn = null), (ir = !1), e)
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
      return yd && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Yp = {
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
function Ai(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Yp[e.type] : t === "textarea";
}
function bd(e, t, n, s) {
  Jc(s),
    (t = go(t, "onChange")),
    0 < t.length &&
      ((n = new Ta("onChange", "change", null, n, s)),
      e.push({ event: n, listeners: t }));
}
var es = null,
  ps = null;
function Xp(e) {
  Pd(e, 0);
}
function $o(e) {
  var t = ur(e);
  if (Hc(t)) return e;
}
function Qp(e, t) {
  if (e === "change") return t;
}
var Nd = !1;
if (dn) {
  var al;
  if (dn) {
    var il = "oninput" in document;
    if (!il) {
      var $i = document.createElement("div");
      $i.setAttribute("oninput", "return;"),
        (il = typeof $i.oninput == "function");
    }
    al = il;
  } else al = !1;
  Nd = al && (!document.documentMode || 9 < document.documentMode);
}
function Oi() {
  es && (es.detachEvent("onpropertychange", jd), (ps = es = null));
}
function jd(e) {
  if (e.propertyName === "value" && $o(ps)) {
    var t = [];
    bd(t, ps, e, Da(e)), nd(Xp, t);
  }
}
function Kp(e, t, n) {
  e === "focusin"
    ? (Oi(), (es = t), (ps = n), es.attachEvent("onpropertychange", jd))
    : e === "focusout" && Oi();
}
function Jp(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return $o(ps);
}
function Zp(e, t) {
  if (e === "click") return $o(t);
}
function em(e, t) {
  if (e === "input" || e === "change") return $o(t);
}
function tm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Qt = typeof Object.is == "function" ? Object.is : tm;
function ms(e, t) {
  if (Qt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    s = Object.keys(t);
  if (n.length !== s.length) return !1;
  for (s = 0; s < n.length; s++) {
    var o = n[s];
    if (!Sl.call(t, o) || !Qt(e[o], t[o])) return !1;
  }
  return !0;
}
function Li(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ui(e, t) {
  var n = Li(e);
  e = 0;
  for (var s; n; ) {
    if (n.nodeType === 3) {
      if (((s = e + n.textContent.length), e <= t && s >= t))
        return { node: n, offset: t - e };
      e = s;
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
    n = Li(n);
  }
}
function Sd(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Sd(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Cd() {
  for (var e = window, t = io(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = io(e.document);
  }
  return t;
}
function $a(e) {
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
function nm(e) {
  var t = Cd(),
    n = e.focusedElem,
    s = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Sd(n.ownerDocument.documentElement, n)
  ) {
    if (s !== null && $a(n)) {
      if (
        ((t = s.start),
        (e = s.end),
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
          l = Math.min(s.start, o);
        (s = s.end === void 0 ? l : Math.min(s.end, o)),
          !e.extend && l > s && ((o = s), (s = l), (l = o)),
          (o = Ui(n, l));
        var a = Ui(n, s);
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
          l > s
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
var rm = dn && "documentMode" in document && 11 >= document.documentMode,
  cr = null,
  Fl = null,
  ts = null,
  Vl = !1;
function Bi(e, t, n) {
  var s = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Vl ||
    cr == null ||
    cr !== io(s) ||
    ((s = cr),
    "selectionStart" in s && $a(s)
      ? (s = { start: s.selectionStart, end: s.selectionEnd })
      : ((s = (
          (s.ownerDocument && s.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (s = {
          anchorNode: s.anchorNode,
          anchorOffset: s.anchorOffset,
          focusNode: s.focusNode,
          focusOffset: s.focusOffset,
        })),
    (ts && ms(ts, s)) ||
      ((ts = s),
      (s = go(Fl, "onSelect")),
      0 < s.length &&
        ((t = new Ta("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: s }),
        (t.target = cr))));
}
function Ls(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var dr = {
    animationend: Ls("Animation", "AnimationEnd"),
    animationiteration: Ls("Animation", "AnimationIteration"),
    animationstart: Ls("Animation", "AnimationStart"),
    transitionend: Ls("Transition", "TransitionEnd"),
  },
  cl = {},
  kd = {};
dn &&
  ((kd = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete dr.animationend.animation,
    delete dr.animationiteration.animation,
    delete dr.animationstart.animation),
  "TransitionEvent" in window || delete dr.transitionend.transition);
function Oo(e) {
  if (cl[e]) return cl[e];
  if (!dr[e]) return e;
  var t = dr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in kd) return (cl[e] = t[n]);
  return e;
}
var Dd = Oo("animationend"),
  _d = Oo("animationiteration"),
  Md = Oo("animationstart"),
  Ed = Oo("transitionend"),
  Id = new Map(),
  zi =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Rn(e, t) {
  Id.set(e, t), Jn(t, [e]);
}
for (var dl = 0; dl < zi.length; dl++) {
  var ul = zi[dl],
    sm = ul.toLowerCase(),
    om = ul[0].toUpperCase() + ul.slice(1);
  Rn(sm, "on" + om);
}
Rn(Dd, "onAnimationEnd");
Rn(_d, "onAnimationIteration");
Rn(Md, "onAnimationStart");
Rn("dblclick", "onDoubleClick");
Rn("focusin", "onFocus");
Rn("focusout", "onBlur");
Rn(Ed, "onTransitionEnd");
kr("onMouseEnter", ["mouseout", "mouseover"]);
kr("onMouseLeave", ["mouseout", "mouseover"]);
kr("onPointerEnter", ["pointerout", "pointerover"]);
kr("onPointerLeave", ["pointerout", "pointerover"]);
Jn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Jn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Jn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Jn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Jn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Jn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Qr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  lm = new Set("cancel close invalid load scroll toggle".split(" ").concat(Qr));
function Gi(e, t, n) {
  var s = e.type || "unknown-event";
  (e.currentTarget = n), sp(s, t, void 0, e), (e.currentTarget = null);
}
function Pd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var s = e[n],
      o = s.event;
    s = s.listeners;
    e: {
      var l = void 0;
      if (t)
        for (var a = s.length - 1; 0 <= a; a--) {
          var i = s[a],
            c = i.instance,
            x = i.currentTarget;
          if (((i = i.listener), c !== l && o.isPropagationStopped())) break e;
          Gi(o, i, x), (l = c);
        }
      else
        for (a = 0; a < s.length; a++) {
          if (
            ((i = s[a]),
            (c = i.instance),
            (x = i.currentTarget),
            (i = i.listener),
            c !== l && o.isPropagationStopped())
          )
            break e;
          Gi(o, i, x), (l = c);
        }
    }
  }
  if (uo) throw ((e = Ul), (uo = !1), (Ul = null), e);
}
function Be(e, t) {
  var n = t[Xl];
  n === void 0 && (n = t[Xl] = new Set());
  var s = e + "__bubble";
  n.has(s) || (Td(t, e, 2, !1), n.add(s));
}
function fl(e, t, n) {
  var s = 0;
  t && (s |= 4), Td(n, e, s, t);
}
var Us = "_reactListening" + Math.random().toString(36).slice(2);
function hs(e) {
  if (!e[Us]) {
    (e[Us] = !0),
      Bc.forEach(function (n) {
        n !== "selectionchange" && (lm.has(n) || fl(n, !1, e), fl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Us] || ((t[Us] = !0), fl("selectionchange", !1, t));
  }
}
function Td(e, t, n, s) {
  switch (gd(t)) {
    case 1:
      var o = wp;
      break;
    case 4:
      o = bp;
      break;
    default:
      o = Ia;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Ll ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    s
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function pl(e, t, n, s, o) {
  var l = s;
  if (!(t & 1) && !(t & 2) && s !== null)
    e: for (;;) {
      if (s === null) return;
      var a = s.tag;
      if (a === 3 || a === 4) {
        var i = s.stateNode.containerInfo;
        if (i === o || (i.nodeType === 8 && i.parentNode === o)) break;
        if (a === 4)
          for (a = s.return; a !== null; ) {
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
          if (((a = Gn(i)), a === null)) return;
          if (((c = a.tag), c === 5 || c === 6)) {
            s = l = a;
            continue e;
          }
          i = i.parentNode;
        }
      }
      s = s.return;
    }
  nd(function () {
    var x = l,
      g = Da(n),
      h = [];
    e: {
      var p = Id.get(e);
      if (p !== void 0) {
        var j = Ta,
          S = e;
        switch (e) {
          case "keypress":
            if (Zs(n) === 0) break e;
          case "keydown":
          case "keyup":
            j = $p;
            break;
          case "focusin":
            (S = "focus"), (j = ll);
            break;
          case "focusout":
            (S = "blur"), (j = ll);
            break;
          case "beforeblur":
          case "afterblur":
            j = ll;
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
            j = Ei;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            j = Sp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            j = Up;
            break;
          case Dd:
          case _d:
          case Md:
            j = Dp;
            break;
          case Ed:
            j = zp;
            break;
          case "scroll":
            j = Np;
            break;
          case "wheel":
            j = Fp;
            break;
          case "copy":
          case "cut":
          case "paste":
            j = Mp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            j = Pi;
        }
        var C = (t & 4) !== 0,
          R = !C && e === "scroll",
          d = C ? (p !== null ? p + "Capture" : null) : p;
        C = [];
        for (var u = x, m; u !== null; ) {
          m = u;
          var D = m.stateNode;
          if (
            (m.tag === 5 &&
              D !== null &&
              ((m = D),
              d !== null && ((D = cs(u, d)), D != null && C.push(gs(u, D, m)))),
            R)
          )
            break;
          u = u.return;
        }
        0 < C.length &&
          ((p = new j(p, S, null, n, g)), h.push({ event: p, listeners: C }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (j = e === "mouseout" || e === "pointerout"),
          p &&
            n !== $l &&
            (S = n.relatedTarget || n.fromElement) &&
            (Gn(S) || S[un]))
        )
          break e;
        if (
          (j || p) &&
          ((p =
            g.window === g
              ? g
              : (p = g.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          j
            ? ((S = n.relatedTarget || n.toElement),
              (j = x),
              (S = S ? Gn(S) : null),
              S !== null &&
                ((R = Zn(S)), S !== R || (S.tag !== 5 && S.tag !== 6)) &&
                (S = null))
            : ((j = null), (S = x)),
          j !== S)
        ) {
          if (
            ((C = Ei),
            (D = "onMouseLeave"),
            (d = "onMouseEnter"),
            (u = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((C = Pi),
              (D = "onPointerLeave"),
              (d = "onPointerEnter"),
              (u = "pointer")),
            (R = j == null ? p : ur(j)),
            (m = S == null ? p : ur(S)),
            (p = new C(D, u + "leave", j, n, g)),
            (p.target = R),
            (p.relatedTarget = m),
            (D = null),
            Gn(g) === x &&
              ((C = new C(d, u + "enter", S, n, g)),
              (C.target = m),
              (C.relatedTarget = R),
              (D = C)),
            (R = D),
            j && S)
          )
            t: {
              for (C = j, d = S, u = 0, m = C; m; m = or(m)) u++;
              for (m = 0, D = d; D; D = or(D)) m++;
              for (; 0 < u - m; ) (C = or(C)), u--;
              for (; 0 < m - u; ) (d = or(d)), m--;
              for (; u--; ) {
                if (C === d || (d !== null && C === d.alternate)) break t;
                (C = or(C)), (d = or(d));
              }
              C = null;
            }
          else C = null;
          j !== null && Fi(h, p, j, C, !1),
            S !== null && R !== null && Fi(h, R, S, C, !0);
        }
      }
      e: {
        if (
          ((p = x ? ur(x) : window),
          (j = p.nodeName && p.nodeName.toLowerCase()),
          j === "select" || (j === "input" && p.type === "file"))
        )
          var T = Qp;
        else if (Ai(p))
          if (Nd) T = em;
          else {
            T = Jp;
            var _ = Kp;
          }
        else
          (j = p.nodeName) &&
            j.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (T = Zp);
        if (T && (T = T(e, x))) {
          bd(h, T, n, g);
          break e;
        }
        _ && _(e, p, x),
          e === "focusout" &&
            (_ = p._wrapperState) &&
            _.controlled &&
            p.type === "number" &&
            Il(p, "number", p.value);
      }
      switch (((_ = x ? ur(x) : window), e)) {
        case "focusin":
          (Ai(_) || _.contentEditable === "true") &&
            ((cr = _), (Fl = x), (ts = null));
          break;
        case "focusout":
          ts = Fl = cr = null;
          break;
        case "mousedown":
          Vl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Vl = !1), Bi(h, n, g);
          break;
        case "selectionchange":
          if (rm) break;
        case "keydown":
        case "keyup":
          Bi(h, n, g);
      }
      var P;
      if (Aa)
        e: {
          switch (e) {
            case "compositionstart":
              var V = "onCompositionStart";
              break e;
            case "compositionend":
              V = "onCompositionEnd";
              break e;
            case "compositionupdate":
              V = "onCompositionUpdate";
              break e;
          }
          V = void 0;
        }
      else
        ir
          ? vd(e, n) && (V = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (V = "onCompositionStart");
      V &&
        (yd &&
          n.locale !== "ko" &&
          (ir || V !== "onCompositionStart"
            ? V === "onCompositionEnd" && ir && (P = xd())
            : ((bn = g),
              (Pa = "value" in bn ? bn.value : bn.textContent),
              (ir = !0))),
        (_ = go(x, V)),
        0 < _.length &&
          ((V = new Ii(V, e, null, n, g)),
          h.push({ event: V, listeners: _ }),
          P ? (V.data = P) : ((P = wd(n)), P !== null && (V.data = P)))),
        (P = Hp ? qp(e, n) : Wp(e, n)) &&
          ((x = go(x, "onBeforeInput")),
          0 < x.length &&
            ((g = new Ii("onBeforeInput", "beforeinput", null, n, g)),
            h.push({ event: g, listeners: x }),
            (g.data = P)));
    }
    Pd(h, t);
  });
}
function gs(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function go(e, t) {
  for (var n = t + "Capture", s = []; e !== null; ) {
    var o = e,
      l = o.stateNode;
    o.tag === 5 &&
      l !== null &&
      ((o = l),
      (l = cs(e, n)),
      l != null && s.unshift(gs(e, l, o)),
      (l = cs(e, t)),
      l != null && s.push(gs(e, l, o))),
      (e = e.return);
  }
  return s;
}
function or(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Fi(e, t, n, s, o) {
  for (var l = t._reactName, a = []; n !== null && n !== s; ) {
    var i = n,
      c = i.alternate,
      x = i.stateNode;
    if (c !== null && c === s) break;
    i.tag === 5 &&
      x !== null &&
      ((i = x),
      o
        ? ((c = cs(n, l)), c != null && a.unshift(gs(n, c, i)))
        : o || ((c = cs(n, l)), c != null && a.push(gs(n, c, i)))),
      (n = n.return);
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var am = /\r\n?/g,
  im = /\u0000|\uFFFD/g;
function Vi(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      am,
      `
`
    )
    .replace(im, "");
}
function Bs(e, t, n) {
  if (((t = Vi(t)), Vi(e) !== t && n)) throw Error(ae(425));
}
function xo() {}
var Hl = null,
  ql = null;
function Wl(e, t) {
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
var Yl = typeof setTimeout == "function" ? setTimeout : void 0,
  cm = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Hi = typeof Promise == "function" ? Promise : void 0,
  dm =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Hi < "u"
      ? function (e) {
          return Hi.resolve(null).then(e).catch(um);
        }
      : Yl;
function um(e) {
  setTimeout(function () {
    throw e;
  });
}
function ml(e, t) {
  var n = t,
    s = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (s === 0) {
          e.removeChild(o), fs(t);
          return;
        }
        s--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || s++;
    n = o;
  } while (n);
  fs(t);
}
function Dn(e) {
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
function qi(e) {
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
var $r = Math.random().toString(36).slice(2),
  en = "__reactFiber$" + $r,
  xs = "__reactProps$" + $r,
  un = "__reactContainer$" + $r,
  Xl = "__reactEvents$" + $r,
  fm = "__reactListeners$" + $r,
  pm = "__reactHandles$" + $r;
function Gn(e) {
  var t = e[en];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[un] || n[en])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = qi(e); e !== null; ) {
          if ((n = e[en])) return n;
          e = qi(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Ds(e) {
  return (
    (e = e[en] || e[un]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function ur(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(ae(33));
}
function Lo(e) {
  return e[xs] || null;
}
var Ql = [],
  fr = -1;
function An(e) {
  return { current: e };
}
function ze(e) {
  0 > fr || ((e.current = Ql[fr]), (Ql[fr] = null), fr--);
}
function Ue(e, t) {
  fr++, (Ql[fr] = e.current), (e.current = t);
}
var Tn = {},
  ft = An(Tn),
  Nt = An(!1),
  Wn = Tn;
function Dr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Tn;
  var s = e.stateNode;
  if (s && s.__reactInternalMemoizedUnmaskedChildContext === t)
    return s.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    l;
  for (l in n) o[l] = t[l];
  return (
    s &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function jt(e) {
  return (e = e.childContextTypes), e != null;
}
function yo() {
  ze(Nt), ze(ft);
}
function Wi(e, t, n) {
  if (ft.current !== Tn) throw Error(ae(168));
  Ue(ft, t), Ue(Nt, n);
}
function Rd(e, t, n) {
  var s = e.stateNode;
  if (((t = t.childContextTypes), typeof s.getChildContext != "function"))
    return n;
  s = s.getChildContext();
  for (var o in s) if (!(o in t)) throw Error(ae(108, Kf(e) || "Unknown", o));
  return qe({}, n, s);
}
function vo(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Tn),
    (Wn = ft.current),
    Ue(ft, e),
    Ue(Nt, Nt.current),
    !0
  );
}
function Yi(e, t, n) {
  var s = e.stateNode;
  if (!s) throw Error(ae(169));
  n
    ? ((e = Rd(e, t, Wn)),
      (s.__reactInternalMemoizedMergedChildContext = e),
      ze(Nt),
      ze(ft),
      Ue(ft, e))
    : ze(Nt),
    Ue(Nt, n);
}
var on = null,
  Uo = !1,
  hl = !1;
function Ad(e) {
  on === null ? (on = [e]) : on.push(e);
}
function mm(e) {
  (Uo = !0), Ad(e);
}
function $n() {
  if (!hl && on !== null) {
    hl = !0;
    var e = 0,
      t = Oe;
    try {
      var n = on;
      for (Oe = 1; e < n.length; e++) {
        var s = n[e];
        do s = s(!0);
        while (s !== null);
      }
      (on = null), (Uo = !1);
    } catch (o) {
      throw (on !== null && (on = on.slice(e + 1)), ld(_a, $n), o);
    } finally {
      (Oe = t), (hl = !1);
    }
  }
  return null;
}
var pr = [],
  mr = 0,
  wo = null,
  bo = 0,
  $t = [],
  Ot = 0,
  Yn = null,
  ln = 1,
  an = "";
function Bn(e, t) {
  (pr[mr++] = bo), (pr[mr++] = wo), (wo = e), (bo = t);
}
function $d(e, t, n) {
  ($t[Ot++] = ln), ($t[Ot++] = an), ($t[Ot++] = Yn), (Yn = e);
  var s = ln;
  e = an;
  var o = 32 - Yt(s) - 1;
  (s &= ~(1 << o)), (n += 1);
  var l = 32 - Yt(t) + o;
  if (30 < l) {
    var a = o - (o % 5);
    (l = (s & ((1 << a) - 1)).toString(32)),
      (s >>= a),
      (o -= a),
      (ln = (1 << (32 - Yt(t) + o)) | (n << o) | s),
      (an = l + e);
  } else (ln = (1 << l) | (n << o) | s), (an = e);
}
function Oa(e) {
  e.return !== null && (Bn(e, 1), $d(e, 1, 0));
}
function La(e) {
  for (; e === wo; )
    (wo = pr[--mr]), (pr[mr] = null), (bo = pr[--mr]), (pr[mr] = null);
  for (; e === Yn; )
    (Yn = $t[--Ot]),
      ($t[Ot] = null),
      (an = $t[--Ot]),
      ($t[Ot] = null),
      (ln = $t[--Ot]),
      ($t[Ot] = null);
}
var Et = null,
  Mt = null,
  Ge = !1,
  Wt = null;
function Od(e, t) {
  var n = Lt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Xi(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Et = e), (Mt = Dn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Et = e), (Mt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Yn !== null ? { id: ln, overflow: an } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Lt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Et = e),
            (Mt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Kl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Jl(e) {
  if (Ge) {
    var t = Mt;
    if (t) {
      var n = t;
      if (!Xi(e, t)) {
        if (Kl(e)) throw Error(ae(418));
        t = Dn(n.nextSibling);
        var s = Et;
        t && Xi(e, t)
          ? Od(s, n)
          : ((e.flags = (e.flags & -4097) | 2), (Ge = !1), (Et = e));
      }
    } else {
      if (Kl(e)) throw Error(ae(418));
      (e.flags = (e.flags & -4097) | 2), (Ge = !1), (Et = e);
    }
  }
}
function Qi(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Et = e;
}
function zs(e) {
  if (e !== Et) return !1;
  if (!Ge) return Qi(e), (Ge = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Wl(e.type, e.memoizedProps))),
    t && (t = Mt))
  ) {
    if (Kl(e)) throw (Ld(), Error(ae(418)));
    for (; t; ) Od(e, t), (t = Dn(t.nextSibling));
  }
  if ((Qi(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(ae(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Mt = Dn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Mt = null;
    }
  } else Mt = Et ? Dn(e.stateNode.nextSibling) : null;
  return !0;
}
function Ld() {
  for (var e = Mt; e; ) e = Dn(e.nextSibling);
}
function _r() {
  (Mt = Et = null), (Ge = !1);
}
function Ua(e) {
  Wt === null ? (Wt = [e]) : Wt.push(e);
}
var hm = mn.ReactCurrentBatchConfig;
function Vr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(ae(309));
        var s = n.stateNode;
      }
      if (!s) throw Error(ae(147, e));
      var o = s,
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
    if (typeof e != "string") throw Error(ae(284));
    if (!n._owner) throw Error(ae(290, e));
  }
  return e;
}
function Gs(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      ae(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Ki(e) {
  var t = e._init;
  return t(e._payload);
}
function Ud(e) {
  function t(d, u) {
    if (e) {
      var m = d.deletions;
      m === null ? ((d.deletions = [u]), (d.flags |= 16)) : m.push(u);
    }
  }
  function n(d, u) {
    if (!e) return null;
    for (; u !== null; ) t(d, u), (u = u.sibling);
    return null;
  }
  function s(d, u) {
    for (d = new Map(); u !== null; )
      u.key !== null ? d.set(u.key, u) : d.set(u.index, u), (u = u.sibling);
    return d;
  }
  function o(d, u) {
    return (d = In(d, u)), (d.index = 0), (d.sibling = null), d;
  }
  function l(d, u, m) {
    return (
      (d.index = m),
      e
        ? ((m = d.alternate),
          m !== null
            ? ((m = m.index), m < u ? ((d.flags |= 2), u) : m)
            : ((d.flags |= 2), u))
        : ((d.flags |= 1048576), u)
    );
  }
  function a(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function i(d, u, m, D) {
    return u === null || u.tag !== 6
      ? ((u = Nl(m, d.mode, D)), (u.return = d), u)
      : ((u = o(u, m)), (u.return = d), u);
  }
  function c(d, u, m, D) {
    var T = m.type;
    return T === ar
      ? g(d, u, m.props.children, D, m.key)
      : u !== null &&
        (u.elementType === T ||
          (typeof T == "object" &&
            T !== null &&
            T.$$typeof === xn &&
            Ki(T) === u.type))
      ? ((D = o(u, m.props)), (D.ref = Vr(d, u, m)), (D.return = d), D)
      : ((D = lo(m.type, m.key, m.props, null, d.mode, D)),
        (D.ref = Vr(d, u, m)),
        (D.return = d),
        D);
  }
  function x(d, u, m, D) {
    return u === null ||
      u.tag !== 4 ||
      u.stateNode.containerInfo !== m.containerInfo ||
      u.stateNode.implementation !== m.implementation
      ? ((u = jl(m, d.mode, D)), (u.return = d), u)
      : ((u = o(u, m.children || [])), (u.return = d), u);
  }
  function g(d, u, m, D, T) {
    return u === null || u.tag !== 7
      ? ((u = qn(m, d.mode, D, T)), (u.return = d), u)
      : ((u = o(u, m)), (u.return = d), u);
  }
  function h(d, u, m) {
    if ((typeof u == "string" && u !== "") || typeof u == "number")
      return (u = Nl("" + u, d.mode, m)), (u.return = d), u;
    if (typeof u == "object" && u !== null) {
      switch (u.$$typeof) {
        case Is:
          return (
            (m = lo(u.type, u.key, u.props, null, d.mode, m)),
            (m.ref = Vr(d, null, u)),
            (m.return = d),
            m
          );
        case lr:
          return (u = jl(u, d.mode, m)), (u.return = d), u;
        case xn:
          var D = u._init;
          return h(d, D(u._payload), m);
      }
      if (Yr(u) || Ur(u))
        return (u = qn(u, d.mode, m, null)), (u.return = d), u;
      Gs(d, u);
    }
    return null;
  }
  function p(d, u, m, D) {
    var T = u !== null ? u.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return T !== null ? null : i(d, u, "" + m, D);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Is:
          return m.key === T ? c(d, u, m, D) : null;
        case lr:
          return m.key === T ? x(d, u, m, D) : null;
        case xn:
          return (T = m._init), p(d, u, T(m._payload), D);
      }
      if (Yr(m) || Ur(m)) return T !== null ? null : g(d, u, m, D, null);
      Gs(d, m);
    }
    return null;
  }
  function j(d, u, m, D, T) {
    if ((typeof D == "string" && D !== "") || typeof D == "number")
      return (d = d.get(m) || null), i(u, d, "" + D, T);
    if (typeof D == "object" && D !== null) {
      switch (D.$$typeof) {
        case Is:
          return (d = d.get(D.key === null ? m : D.key) || null), c(u, d, D, T);
        case lr:
          return (d = d.get(D.key === null ? m : D.key) || null), x(u, d, D, T);
        case xn:
          var _ = D._init;
          return j(d, u, m, _(D._payload), T);
      }
      if (Yr(D) || Ur(D)) return (d = d.get(m) || null), g(u, d, D, T, null);
      Gs(u, D);
    }
    return null;
  }
  function S(d, u, m, D) {
    for (
      var T = null, _ = null, P = u, V = (u = 0), Q = null;
      P !== null && V < m.length;
      V++
    ) {
      P.index > V ? ((Q = P), (P = null)) : (Q = P.sibling);
      var K = p(d, P, m[V], D);
      if (K === null) {
        P === null && (P = Q);
        break;
      }
      e && P && K.alternate === null && t(d, P),
        (u = l(K, u, V)),
        _ === null ? (T = K) : (_.sibling = K),
        (_ = K),
        (P = Q);
    }
    if (V === m.length) return n(d, P), Ge && Bn(d, V), T;
    if (P === null) {
      for (; V < m.length; V++)
        (P = h(d, m[V], D)),
          P !== null &&
            ((u = l(P, u, V)), _ === null ? (T = P) : (_.sibling = P), (_ = P));
      return Ge && Bn(d, V), T;
    }
    for (P = s(d, P); V < m.length; V++)
      (Q = j(P, d, V, m[V], D)),
        Q !== null &&
          (e && Q.alternate !== null && P.delete(Q.key === null ? V : Q.key),
          (u = l(Q, u, V)),
          _ === null ? (T = Q) : (_.sibling = Q),
          (_ = Q));
    return (
      e &&
        P.forEach(function (pe) {
          return t(d, pe);
        }),
      Ge && Bn(d, V),
      T
    );
  }
  function C(d, u, m, D) {
    var T = Ur(m);
    if (typeof T != "function") throw Error(ae(150));
    if (((m = T.call(m)), m == null)) throw Error(ae(151));
    for (
      var _ = (T = null), P = u, V = (u = 0), Q = null, K = m.next();
      P !== null && !K.done;
      V++, K = m.next()
    ) {
      P.index > V ? ((Q = P), (P = null)) : (Q = P.sibling);
      var pe = p(d, P, K.value, D);
      if (pe === null) {
        P === null && (P = Q);
        break;
      }
      e && P && pe.alternate === null && t(d, P),
        (u = l(pe, u, V)),
        _ === null ? (T = pe) : (_.sibling = pe),
        (_ = pe),
        (P = Q);
    }
    if (K.done) return n(d, P), Ge && Bn(d, V), T;
    if (P === null) {
      for (; !K.done; V++, K = m.next())
        (K = h(d, K.value, D)),
          K !== null &&
            ((u = l(K, u, V)), _ === null ? (T = K) : (_.sibling = K), (_ = K));
      return Ge && Bn(d, V), T;
    }
    for (P = s(d, P); !K.done; V++, K = m.next())
      (K = j(P, d, V, K.value, D)),
        K !== null &&
          (e && K.alternate !== null && P.delete(K.key === null ? V : K.key),
          (u = l(K, u, V)),
          _ === null ? (T = K) : (_.sibling = K),
          (_ = K));
    return (
      e &&
        P.forEach(function (ye) {
          return t(d, ye);
        }),
      Ge && Bn(d, V),
      T
    );
  }
  function R(d, u, m, D) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === ar &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case Is:
          e: {
            for (var T = m.key, _ = u; _ !== null; ) {
              if (_.key === T) {
                if (((T = m.type), T === ar)) {
                  if (_.tag === 7) {
                    n(d, _.sibling),
                      (u = o(_, m.props.children)),
                      (u.return = d),
                      (d = u);
                    break e;
                  }
                } else if (
                  _.elementType === T ||
                  (typeof T == "object" &&
                    T !== null &&
                    T.$$typeof === xn &&
                    Ki(T) === _.type)
                ) {
                  n(d, _.sibling),
                    (u = o(_, m.props)),
                    (u.ref = Vr(d, _, m)),
                    (u.return = d),
                    (d = u);
                  break e;
                }
                n(d, _);
                break;
              } else t(d, _);
              _ = _.sibling;
            }
            m.type === ar
              ? ((u = qn(m.props.children, d.mode, D, m.key)),
                (u.return = d),
                (d = u))
              : ((D = lo(m.type, m.key, m.props, null, d.mode, D)),
                (D.ref = Vr(d, u, m)),
                (D.return = d),
                (d = D));
          }
          return a(d);
        case lr:
          e: {
            for (_ = m.key; u !== null; ) {
              if (u.key === _)
                if (
                  u.tag === 4 &&
                  u.stateNode.containerInfo === m.containerInfo &&
                  u.stateNode.implementation === m.implementation
                ) {
                  n(d, u.sibling),
                    (u = o(u, m.children || [])),
                    (u.return = d),
                    (d = u);
                  break e;
                } else {
                  n(d, u);
                  break;
                }
              else t(d, u);
              u = u.sibling;
            }
            (u = jl(m, d.mode, D)), (u.return = d), (d = u);
          }
          return a(d);
        case xn:
          return (_ = m._init), R(d, u, _(m._payload), D);
      }
      if (Yr(m)) return S(d, u, m, D);
      if (Ur(m)) return C(d, u, m, D);
      Gs(d, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        u !== null && u.tag === 6
          ? (n(d, u.sibling), (u = o(u, m)), (u.return = d), (d = u))
          : (n(d, u), (u = Nl(m, d.mode, D)), (u.return = d), (d = u)),
        a(d))
      : n(d, u);
  }
  return R;
}
var Mr = Ud(!0),
  Bd = Ud(!1),
  No = An(null),
  jo = null,
  hr = null,
  Ba = null;
function za() {
  Ba = hr = jo = null;
}
function Ga(e) {
  var t = No.current;
  ze(No), (e._currentValue = t);
}
function Zl(e, t, n) {
  for (; e !== null; ) {
    var s = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), s !== null && (s.childLanes |= t))
        : s !== null && (s.childLanes & t) !== t && (s.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Sr(e, t) {
  (jo = e),
    (Ba = hr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (wt = !0), (e.firstContext = null));
}
function Bt(e) {
  var t = e._currentValue;
  if (Ba !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), hr === null)) {
      if (jo === null) throw Error(ae(308));
      (hr = e), (jo.dependencies = { lanes: 0, firstContext: e });
    } else hr = hr.next = e;
  return t;
}
var Fn = null;
function Fa(e) {
  Fn === null ? (Fn = [e]) : Fn.push(e);
}
function zd(e, t, n, s) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Fa(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    fn(e, s)
  );
}
function fn(e, t) {
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
var yn = !1;
function Va(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Gd(e, t) {
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
function cn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function _n(e, t, n) {
  var s = e.updateQueue;
  if (s === null) return null;
  if (((s = s.shared), Ae & 2)) {
    var o = s.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (s.pending = t),
      fn(e, n)
    );
  }
  return (
    (o = s.interleaved),
    o === null ? ((t.next = t), Fa(s)) : ((t.next = o.next), (o.next = t)),
    (s.interleaved = t),
    fn(e, n)
  );
}
function eo(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var s = t.lanes;
    (s &= e.pendingLanes), (n |= s), (t.lanes = n), Ma(e, n);
  }
}
function Ji(e, t) {
  var n = e.updateQueue,
    s = e.alternate;
  if (s !== null && ((s = s.updateQueue), n === s)) {
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
      baseState: s.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: l,
      shared: s.shared,
      effects: s.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function So(e, t, n, s) {
  var o = e.updateQueue;
  yn = !1;
  var l = o.firstBaseUpdate,
    a = o.lastBaseUpdate,
    i = o.shared.pending;
  if (i !== null) {
    o.shared.pending = null;
    var c = i,
      x = c.next;
    (c.next = null), a === null ? (l = x) : (a.next = x), (a = c);
    var g = e.alternate;
    g !== null &&
      ((g = g.updateQueue),
      (i = g.lastBaseUpdate),
      i !== a &&
        (i === null ? (g.firstBaseUpdate = x) : (i.next = x),
        (g.lastBaseUpdate = c)));
  }
  if (l !== null) {
    var h = o.baseState;
    (a = 0), (g = x = c = null), (i = l);
    do {
      var p = i.lane,
        j = i.eventTime;
      if ((s & p) === p) {
        g !== null &&
          (g = g.next =
            {
              eventTime: j,
              lane: 0,
              tag: i.tag,
              payload: i.payload,
              callback: i.callback,
              next: null,
            });
        e: {
          var S = e,
            C = i;
          switch (((p = t), (j = n), C.tag)) {
            case 1:
              if (((S = C.payload), typeof S == "function")) {
                h = S.call(j, h, p);
                break e;
              }
              h = S;
              break e;
            case 3:
              S.flags = (S.flags & -65537) | 128;
            case 0:
              if (
                ((S = C.payload),
                (p = typeof S == "function" ? S.call(j, h, p) : S),
                p == null)
              )
                break e;
              h = qe({}, h, p);
              break e;
            case 2:
              yn = !0;
          }
        }
        i.callback !== null &&
          i.lane !== 0 &&
          ((e.flags |= 64),
          (p = o.effects),
          p === null ? (o.effects = [i]) : p.push(i));
      } else
        (j = {
          eventTime: j,
          lane: p,
          tag: i.tag,
          payload: i.payload,
          callback: i.callback,
          next: null,
        }),
          g === null ? ((x = g = j), (c = h)) : (g = g.next = j),
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
      (g === null && (c = h),
      (o.baseState = c),
      (o.firstBaseUpdate = x),
      (o.lastBaseUpdate = g),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (a |= o.lane), (o = o.next);
      while (o !== t);
    } else l === null && (o.shared.lanes = 0);
    (Qn |= a), (e.lanes = a), (e.memoizedState = h);
  }
}
function Zi(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var s = e[t],
        o = s.callback;
      if (o !== null) {
        if (((s.callback = null), (s = n), typeof o != "function"))
          throw Error(ae(191, o));
        o.call(s);
      }
    }
}
var _s = {},
  nn = An(_s),
  ys = An(_s),
  vs = An(_s);
function Vn(e) {
  if (e === _s) throw Error(ae(174));
  return e;
}
function Ha(e, t) {
  switch ((Ue(vs, t), Ue(ys, e), Ue(nn, _s), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Tl(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Tl(t, e));
  }
  ze(nn), Ue(nn, t);
}
function Er() {
  ze(nn), ze(ys), ze(vs);
}
function Fd(e) {
  Vn(vs.current);
  var t = Vn(nn.current),
    n = Tl(t, e.type);
  t !== n && (Ue(ys, e), Ue(nn, n));
}
function qa(e) {
  ys.current === e && (ze(nn), ze(ys));
}
var Ve = An(0);
function Co(e) {
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
var gl = [];
function Wa() {
  for (var e = 0; e < gl.length; e++)
    gl[e]._workInProgressVersionPrimary = null;
  gl.length = 0;
}
var to = mn.ReactCurrentDispatcher,
  xl = mn.ReactCurrentBatchConfig,
  Xn = 0,
  He = null,
  et = null,
  rt = null,
  ko = !1,
  ns = !1,
  ws = 0,
  gm = 0;
function it() {
  throw Error(ae(321));
}
function Ya(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Qt(e[n], t[n])) return !1;
  return !0;
}
function Xa(e, t, n, s, o, l) {
  if (
    ((Xn = l),
    (He = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (to.current = e === null || e.memoizedState === null ? wm : bm),
    (e = n(s, o)),
    ns)
  ) {
    l = 0;
    do {
      if (((ns = !1), (ws = 0), 25 <= l)) throw Error(ae(301));
      (l += 1),
        (rt = et = null),
        (t.updateQueue = null),
        (to.current = Nm),
        (e = n(s, o));
    } while (ns);
  }
  if (
    ((to.current = Do),
    (t = et !== null && et.next !== null),
    (Xn = 0),
    (rt = et = He = null),
    (ko = !1),
    t)
  )
    throw Error(ae(300));
  return e;
}
function Qa() {
  var e = ws !== 0;
  return (ws = 0), e;
}
function Zt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return rt === null ? (He.memoizedState = rt = e) : (rt = rt.next = e), rt;
}
function zt() {
  if (et === null) {
    var e = He.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = et.next;
  var t = rt === null ? He.memoizedState : rt.next;
  if (t !== null) (rt = t), (et = e);
  else {
    if (e === null) throw Error(ae(310));
    (et = e),
      (e = {
        memoizedState: et.memoizedState,
        baseState: et.baseState,
        baseQueue: et.baseQueue,
        queue: et.queue,
        next: null,
      }),
      rt === null ? (He.memoizedState = rt = e) : (rt = rt.next = e);
  }
  return rt;
}
function bs(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function yl(e) {
  var t = zt(),
    n = t.queue;
  if (n === null) throw Error(ae(311));
  n.lastRenderedReducer = e;
  var s = et,
    o = s.baseQueue,
    l = n.pending;
  if (l !== null) {
    if (o !== null) {
      var a = o.next;
      (o.next = l.next), (l.next = a);
    }
    (s.baseQueue = o = l), (n.pending = null);
  }
  if (o !== null) {
    (l = o.next), (s = s.baseState);
    var i = (a = null),
      c = null,
      x = l;
    do {
      var g = x.lane;
      if ((Xn & g) === g)
        c !== null &&
          (c = c.next =
            {
              lane: 0,
              action: x.action,
              hasEagerState: x.hasEagerState,
              eagerState: x.eagerState,
              next: null,
            }),
          (s = x.hasEagerState ? x.eagerState : e(s, x.action));
      else {
        var h = {
          lane: g,
          action: x.action,
          hasEagerState: x.hasEagerState,
          eagerState: x.eagerState,
          next: null,
        };
        c === null ? ((i = c = h), (a = s)) : (c = c.next = h),
          (He.lanes |= g),
          (Qn |= g);
      }
      x = x.next;
    } while (x !== null && x !== l);
    c === null ? (a = s) : (c.next = i),
      Qt(s, t.memoizedState) || (wt = !0),
      (t.memoizedState = s),
      (t.baseState = a),
      (t.baseQueue = c),
      (n.lastRenderedState = s);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (l = o.lane), (He.lanes |= l), (Qn |= l), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function vl(e) {
  var t = zt(),
    n = t.queue;
  if (n === null) throw Error(ae(311));
  n.lastRenderedReducer = e;
  var s = n.dispatch,
    o = n.pending,
    l = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var a = (o = o.next);
    do (l = e(l, a.action)), (a = a.next);
    while (a !== o);
    Qt(l, t.memoizedState) || (wt = !0),
      (t.memoizedState = l),
      t.baseQueue === null && (t.baseState = l),
      (n.lastRenderedState = l);
  }
  return [l, s];
}
function Vd() {}
function Hd(e, t) {
  var n = He,
    s = zt(),
    o = t(),
    l = !Qt(s.memoizedState, o);
  if (
    (l && ((s.memoizedState = o), (wt = !0)),
    (s = s.queue),
    Ka(Yd.bind(null, n, s, e), [e]),
    s.getSnapshot !== t || l || (rt !== null && rt.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Ns(9, Wd.bind(null, n, s, o, t), void 0, null),
      st === null)
    )
      throw Error(ae(349));
    Xn & 30 || qd(n, t, o);
  }
  return o;
}
function qd(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = He.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (He.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Wd(e, t, n, s) {
  (t.value = n), (t.getSnapshot = s), Xd(t) && Qd(e);
}
function Yd(e, t, n) {
  return n(function () {
    Xd(t) && Qd(e);
  });
}
function Xd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Qt(e, n);
  } catch {
    return !0;
  }
}
function Qd(e) {
  var t = fn(e, 1);
  t !== null && Xt(t, e, 1, -1);
}
function ec(e) {
  var t = Zt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: bs,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = vm.bind(null, He, e)),
    [t.memoizedState, e]
  );
}
function Ns(e, t, n, s) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: s, next: null }),
    (t = He.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (He.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((s = n.next), (n.next = e), (e.next = s), (t.lastEffect = e))),
    e
  );
}
function Kd() {
  return zt().memoizedState;
}
function no(e, t, n, s) {
  var o = Zt();
  (He.flags |= e),
    (o.memoizedState = Ns(1 | t, n, void 0, s === void 0 ? null : s));
}
function Bo(e, t, n, s) {
  var o = zt();
  s = s === void 0 ? null : s;
  var l = void 0;
  if (et !== null) {
    var a = et.memoizedState;
    if (((l = a.destroy), s !== null && Ya(s, a.deps))) {
      o.memoizedState = Ns(t, n, l, s);
      return;
    }
  }
  (He.flags |= e), (o.memoizedState = Ns(1 | t, n, l, s));
}
function tc(e, t) {
  return no(8390656, 8, e, t);
}
function Ka(e, t) {
  return Bo(2048, 8, e, t);
}
function Jd(e, t) {
  return Bo(4, 2, e, t);
}
function Zd(e, t) {
  return Bo(4, 4, e, t);
}
function eu(e, t) {
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
function tu(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Bo(4, 4, eu.bind(null, t, e), n)
  );
}
function Ja() {}
function nu(e, t) {
  var n = zt();
  t = t === void 0 ? null : t;
  var s = n.memoizedState;
  return s !== null && t !== null && Ya(t, s[1])
    ? s[0]
    : ((n.memoizedState = [e, t]), e);
}
function ru(e, t) {
  var n = zt();
  t = t === void 0 ? null : t;
  var s = n.memoizedState;
  return s !== null && t !== null && Ya(t, s[1])
    ? s[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function su(e, t, n) {
  return Xn & 21
    ? (Qt(n, t) || ((n = cd()), (He.lanes |= n), (Qn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (wt = !0)), (e.memoizedState = n));
}
function xm(e, t) {
  var n = Oe;
  (Oe = n !== 0 && 4 > n ? n : 4), e(!0);
  var s = xl.transition;
  xl.transition = {};
  try {
    e(!1), t();
  } finally {
    (Oe = n), (xl.transition = s);
  }
}
function ou() {
  return zt().memoizedState;
}
function ym(e, t, n) {
  var s = En(e);
  if (
    ((n = {
      lane: s,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    lu(e))
  )
    au(t, n);
  else if (((n = zd(e, t, n, s)), n !== null)) {
    var o = mt();
    Xt(n, e, s, o), iu(n, t, s);
  }
}
function vm(e, t, n) {
  var s = En(e),
    o = { lane: s, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (lu(e)) au(t, o);
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
        if (((o.hasEagerState = !0), (o.eagerState = i), Qt(i, a))) {
          var c = t.interleaved;
          c === null
            ? ((o.next = o), Fa(t))
            : ((o.next = c.next), (c.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = zd(e, t, o, s)),
      n !== null && ((o = mt()), Xt(n, e, s, o), iu(n, t, s));
  }
}
function lu(e) {
  var t = e.alternate;
  return e === He || (t !== null && t === He);
}
function au(e, t) {
  ns = ko = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function iu(e, t, n) {
  if (n & 4194240) {
    var s = t.lanes;
    (s &= e.pendingLanes), (n |= s), (t.lanes = n), Ma(e, n);
  }
}
var Do = {
    readContext: Bt,
    useCallback: it,
    useContext: it,
    useEffect: it,
    useImperativeHandle: it,
    useInsertionEffect: it,
    useLayoutEffect: it,
    useMemo: it,
    useReducer: it,
    useRef: it,
    useState: it,
    useDebugValue: it,
    useDeferredValue: it,
    useTransition: it,
    useMutableSource: it,
    useSyncExternalStore: it,
    useId: it,
    unstable_isNewReconciler: !1,
  },
  wm = {
    readContext: Bt,
    useCallback: function (e, t) {
      return (Zt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Bt,
    useEffect: tc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        no(4194308, 4, eu.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return no(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return no(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Zt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var s = Zt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (s.memoizedState = s.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (s.queue = e),
        (e = e.dispatch = ym.bind(null, He, e)),
        [s.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Zt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: ec,
    useDebugValue: Ja,
    useDeferredValue: function (e) {
      return (Zt().memoizedState = e);
    },
    useTransition: function () {
      var e = ec(!1),
        t = e[0];
      return (e = xm.bind(null, e[1])), (Zt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var s = He,
        o = Zt();
      if (Ge) {
        if (n === void 0) throw Error(ae(407));
        n = n();
      } else {
        if (((n = t()), st === null)) throw Error(ae(349));
        Xn & 30 || qd(s, t, n);
      }
      o.memoizedState = n;
      var l = { value: n, getSnapshot: t };
      return (
        (o.queue = l),
        tc(Yd.bind(null, s, l, e), [e]),
        (s.flags |= 2048),
        Ns(9, Wd.bind(null, s, l, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Zt(),
        t = st.identifierPrefix;
      if (Ge) {
        var n = an,
          s = ln;
        (n = (s & ~(1 << (32 - Yt(s) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ws++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = gm++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  bm = {
    readContext: Bt,
    useCallback: nu,
    useContext: Bt,
    useEffect: Ka,
    useImperativeHandle: tu,
    useInsertionEffect: Jd,
    useLayoutEffect: Zd,
    useMemo: ru,
    useReducer: yl,
    useRef: Kd,
    useState: function () {
      return yl(bs);
    },
    useDebugValue: Ja,
    useDeferredValue: function (e) {
      var t = zt();
      return su(t, et.memoizedState, e);
    },
    useTransition: function () {
      var e = yl(bs)[0],
        t = zt().memoizedState;
      return [e, t];
    },
    useMutableSource: Vd,
    useSyncExternalStore: Hd,
    useId: ou,
    unstable_isNewReconciler: !1,
  },
  Nm = {
    readContext: Bt,
    useCallback: nu,
    useContext: Bt,
    useEffect: Ka,
    useImperativeHandle: tu,
    useInsertionEffect: Jd,
    useLayoutEffect: Zd,
    useMemo: ru,
    useReducer: vl,
    useRef: Kd,
    useState: function () {
      return vl(bs);
    },
    useDebugValue: Ja,
    useDeferredValue: function (e) {
      var t = zt();
      return et === null ? (t.memoizedState = e) : su(t, et.memoizedState, e);
    },
    useTransition: function () {
      var e = vl(bs)[0],
        t = zt().memoizedState;
      return [e, t];
    },
    useMutableSource: Vd,
    useSyncExternalStore: Hd,
    useId: ou,
    unstable_isNewReconciler: !1,
  };
function Ht(e, t) {
  if (e && e.defaultProps) {
    (t = qe({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function ea(e, t, n, s) {
  (t = e.memoizedState),
    (n = n(s, t)),
    (n = n == null ? t : qe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var zo = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Zn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var s = mt(),
      o = En(e),
      l = cn(s, o);
    (l.payload = t),
      n != null && (l.callback = n),
      (t = _n(e, l, o)),
      t !== null && (Xt(t, e, o, s), eo(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var s = mt(),
      o = En(e),
      l = cn(s, o);
    (l.tag = 1),
      (l.payload = t),
      n != null && (l.callback = n),
      (t = _n(e, l, o)),
      t !== null && (Xt(t, e, o, s), eo(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = mt(),
      s = En(e),
      o = cn(n, s);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = _n(e, o, s)),
      t !== null && (Xt(t, e, s, n), eo(t, e, s));
  },
};
function nc(e, t, n, s, o, l, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(s, l, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !ms(n, s) || !ms(o, l)
      : !0
  );
}
function cu(e, t, n) {
  var s = !1,
    o = Tn,
    l = t.contextType;
  return (
    typeof l == "object" && l !== null
      ? (l = Bt(l))
      : ((o = jt(t) ? Wn : ft.current),
        (s = t.contextTypes),
        (l = (s = s != null) ? Dr(e, o) : Tn)),
    (t = new t(n, l)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = zo),
    (e.stateNode = t),
    (t._reactInternals = e),
    s &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    t
  );
}
function rc(e, t, n, s) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, s),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, s),
    t.state !== e && zo.enqueueReplaceState(t, t.state, null);
}
function ta(e, t, n, s) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), Va(e);
  var l = t.contextType;
  typeof l == "object" && l !== null
    ? (o.context = Bt(l))
    : ((l = jt(t) ? Wn : ft.current), (o.context = Dr(e, l))),
    (o.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l == "function" && (ea(e, t, l, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && zo.enqueueReplaceState(o, o.state, null),
      So(e, n, o, s),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Ir(e, t) {
  try {
    var n = "",
      s = t;
    do (n += Qf(s)), (s = s.return);
    while (s);
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
function wl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function na(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var jm = typeof WeakMap == "function" ? WeakMap : Map;
function du(e, t, n) {
  (n = cn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var s = t.value;
  return (
    (n.callback = function () {
      Mo || ((Mo = !0), (fa = s)), na(e, t);
    }),
    n
  );
}
function uu(e, t, n) {
  (n = cn(-1, n)), (n.tag = 3);
  var s = e.type.getDerivedStateFromError;
  if (typeof s == "function") {
    var o = t.value;
    (n.payload = function () {
      return s(o);
    }),
      (n.callback = function () {
        na(e, t);
      });
  }
  var l = e.stateNode;
  return (
    l !== null &&
      typeof l.componentDidCatch == "function" &&
      (n.callback = function () {
        na(e, t),
          typeof s != "function" &&
            (Mn === null ? (Mn = new Set([this])) : Mn.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : "",
        });
      }),
    n
  );
}
function sc(e, t, n) {
  var s = e.pingCache;
  if (s === null) {
    s = e.pingCache = new jm();
    var o = new Set();
    s.set(t, o);
  } else (o = s.get(t)), o === void 0 && ((o = new Set()), s.set(t, o));
  o.has(n) || (o.add(n), (e = Om.bind(null, e, t, n)), t.then(e, e));
}
function oc(e) {
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
function lc(e, t, n, s, o) {
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
              : ((t = cn(-1, 1)), (t.tag = 2), _n(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Sm = mn.ReactCurrentOwner,
  wt = !1;
function pt(e, t, n, s) {
  t.child = e === null ? Bd(t, null, n, s) : Mr(t, e.child, n, s);
}
function ac(e, t, n, s, o) {
  n = n.render;
  var l = t.ref;
  return (
    Sr(t, o),
    (s = Xa(e, t, n, s, l, o)),
    (n = Qa()),
    e !== null && !wt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        pn(e, t, o))
      : (Ge && n && Oa(t), (t.flags |= 1), pt(e, t, s, o), t.child)
  );
}
function ic(e, t, n, s, o) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" &&
      !li(l) &&
      l.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), fu(e, t, l, s, o))
      : ((e = lo(n.type, null, s, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((l = e.child), !(e.lanes & o))) {
    var a = l.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : ms), n(a, s) && e.ref === t.ref)
    )
      return pn(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = In(l, s)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function fu(e, t, n, s, o) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (ms(l, s) && e.ref === t.ref)
      if (((wt = !1), (t.pendingProps = s = l), (e.lanes & o) !== 0))
        e.flags & 131072 && (wt = !0);
      else return (t.lanes = e.lanes), pn(e, t, o);
  }
  return ra(e, t, n, s, o);
}
function pu(e, t, n) {
  var s = t.pendingProps,
    o = s.children,
    l = e !== null ? e.memoizedState : null;
  if (s.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Ue(xr, _t),
        (_t |= n);
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
          Ue(xr, _t),
          (_t |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (s = l !== null ? l.baseLanes : n),
        Ue(xr, _t),
        (_t |= s);
    }
  else
    l !== null ? ((s = l.baseLanes | n), (t.memoizedState = null)) : (s = n),
      Ue(xr, _t),
      (_t |= s);
  return pt(e, t, o, n), t.child;
}
function mu(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ra(e, t, n, s, o) {
  var l = jt(n) ? Wn : ft.current;
  return (
    (l = Dr(t, l)),
    Sr(t, o),
    (n = Xa(e, t, n, s, l, o)),
    (s = Qa()),
    e !== null && !wt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        pn(e, t, o))
      : (Ge && s && Oa(t), (t.flags |= 1), pt(e, t, n, o), t.child)
  );
}
function cc(e, t, n, s, o) {
  if (jt(n)) {
    var l = !0;
    vo(t);
  } else l = !1;
  if ((Sr(t, o), t.stateNode === null))
    ro(e, t), cu(t, n, s), ta(t, n, s, o), (s = !0);
  else if (e === null) {
    var a = t.stateNode,
      i = t.memoizedProps;
    a.props = i;
    var c = a.context,
      x = n.contextType;
    typeof x == "object" && x !== null
      ? (x = Bt(x))
      : ((x = jt(n) ? Wn : ft.current), (x = Dr(t, x)));
    var g = n.getDerivedStateFromProps,
      h =
        typeof g == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    h ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((i !== s || c !== x) && rc(t, a, s, x)),
      (yn = !1);
    var p = t.memoizedState;
    (a.state = p),
      So(t, s, a, o),
      (c = t.memoizedState),
      i !== s || p !== c || Nt.current || yn
        ? (typeof g == "function" && (ea(t, n, g, s), (c = t.memoizedState)),
          (i = yn || nc(t, n, i, s, p, c, x))
            ? (h ||
                (typeof a.UNSAFE_componentWillMount != "function" &&
                  typeof a.componentWillMount != "function") ||
                (typeof a.componentWillMount == "function" &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == "function" &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = s),
              (t.memoizedState = c)),
          (a.props = s),
          (a.state = c),
          (a.context = x),
          (s = i))
        : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
          (s = !1));
  } else {
    (a = t.stateNode),
      Gd(e, t),
      (i = t.memoizedProps),
      (x = t.type === t.elementType ? i : Ht(t.type, i)),
      (a.props = x),
      (h = t.pendingProps),
      (p = a.context),
      (c = n.contextType),
      typeof c == "object" && c !== null
        ? (c = Bt(c))
        : ((c = jt(n) ? Wn : ft.current), (c = Dr(t, c)));
    var j = n.getDerivedStateFromProps;
    (g =
      typeof j == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((i !== h || p !== c) && rc(t, a, s, c)),
      (yn = !1),
      (p = t.memoizedState),
      (a.state = p),
      So(t, s, a, o);
    var S = t.memoizedState;
    i !== h || p !== S || Nt.current || yn
      ? (typeof j == "function" && (ea(t, n, j, s), (S = t.memoizedState)),
        (x = yn || nc(t, n, x, s, p, S, c) || !1)
          ? (g ||
              (typeof a.UNSAFE_componentWillUpdate != "function" &&
                typeof a.componentWillUpdate != "function") ||
              (typeof a.componentWillUpdate == "function" &&
                a.componentWillUpdate(s, S, c),
              typeof a.UNSAFE_componentWillUpdate == "function" &&
                a.UNSAFE_componentWillUpdate(s, S, c)),
            typeof a.componentDidUpdate == "function" && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != "function" ||
              (i === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (i === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = s),
            (t.memoizedState = S)),
        (a.props = s),
        (a.state = S),
        (a.context = c),
        (s = x))
      : (typeof a.componentDidUpdate != "function" ||
          (i === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" ||
          (i === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (s = !1));
  }
  return sa(e, t, n, s, l, o);
}
function sa(e, t, n, s, o, l) {
  mu(e, t);
  var a = (t.flags & 128) !== 0;
  if (!s && !a) return o && Yi(t, n, !1), pn(e, t, l);
  (s = t.stateNode), (Sm.current = t);
  var i =
    a && typeof n.getDerivedStateFromError != "function" ? null : s.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = Mr(t, e.child, null, l)), (t.child = Mr(t, null, i, l)))
      : pt(e, t, i, l),
    (t.memoizedState = s.state),
    o && Yi(t, n, !0),
    t.child
  );
}
function hu(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Wi(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Wi(e, t.context, !1),
    Ha(e, t.containerInfo);
}
function dc(e, t, n, s, o) {
  return _r(), Ua(o), (t.flags |= 256), pt(e, t, n, s), t.child;
}
var oa = { dehydrated: null, treeContext: null, retryLane: 0 };
function la(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function gu(e, t, n) {
  var s = t.pendingProps,
    o = Ve.current,
    l = !1,
    a = (t.flags & 128) !== 0,
    i;
  if (
    ((i = a) ||
      (i = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    i
      ? ((l = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    Ue(Ve, o & 1),
    e === null)
  )
    return (
      Jl(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((a = s.children),
          (e = s.fallback),
          l
            ? ((s = t.mode),
              (l = t.child),
              (a = { mode: "hidden", children: a }),
              !(s & 1) && l !== null
                ? ((l.childLanes = 0), (l.pendingProps = a))
                : (l = Vo(a, s, 0, null)),
              (e = qn(e, s, n, null)),
              (l.return = t),
              (e.return = t),
              (l.sibling = e),
              (t.child = l),
              (t.child.memoizedState = la(n)),
              (t.memoizedState = oa),
              e)
            : Za(t, a))
    );
  if (((o = e.memoizedState), o !== null && ((i = o.dehydrated), i !== null)))
    return Cm(e, t, a, s, i, o, n);
  if (l) {
    (l = s.fallback), (a = t.mode), (o = e.child), (i = o.sibling);
    var c = { mode: "hidden", children: s.children };
    return (
      !(a & 1) && t.child !== o
        ? ((s = t.child),
          (s.childLanes = 0),
          (s.pendingProps = c),
          (t.deletions = null))
        : ((s = In(o, c)), (s.subtreeFlags = o.subtreeFlags & 14680064)),
      i !== null ? (l = In(i, l)) : ((l = qn(l, a, n, null)), (l.flags |= 2)),
      (l.return = t),
      (s.return = t),
      (s.sibling = l),
      (t.child = s),
      (s = l),
      (l = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? la(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (l.memoizedState = a),
      (l.childLanes = e.childLanes & ~n),
      (t.memoizedState = oa),
      s
    );
  }
  return (
    (l = e.child),
    (e = l.sibling),
    (s = In(l, { mode: "visible", children: s.children })),
    !(t.mode & 1) && (s.lanes = n),
    (s.return = t),
    (s.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = s),
    (t.memoizedState = null),
    s
  );
}
function Za(e, t) {
  return (
    (t = Vo({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Fs(e, t, n, s) {
  return (
    s !== null && Ua(s),
    Mr(t, e.child, null, n),
    (e = Za(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Cm(e, t, n, s, o, l, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (s = wl(Error(ae(422)))), Fs(e, t, a, s))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((l = s.fallback),
        (o = t.mode),
        (s = Vo({ mode: "visible", children: s.children }, o, 0, null)),
        (l = qn(l, o, a, null)),
        (l.flags |= 2),
        (s.return = t),
        (l.return = t),
        (s.sibling = l),
        (t.child = s),
        t.mode & 1 && Mr(t, e.child, null, a),
        (t.child.memoizedState = la(a)),
        (t.memoizedState = oa),
        l);
  if (!(t.mode & 1)) return Fs(e, t, a, null);
  if (o.data === "$!") {
    if (((s = o.nextSibling && o.nextSibling.dataset), s)) var i = s.dgst;
    return (
      (s = i), (l = Error(ae(419))), (s = wl(l, s, void 0)), Fs(e, t, a, s)
    );
  }
  if (((i = (a & e.childLanes) !== 0), wt || i)) {
    if (((s = st), s !== null)) {
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
      (o = o & (s.suspendedLanes | a) ? 0 : o),
        o !== 0 &&
          o !== l.retryLane &&
          ((l.retryLane = o), fn(e, o), Xt(s, e, o, -1));
    }
    return oi(), (s = wl(Error(ae(421)))), Fs(e, t, a, s);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Lm.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = l.treeContext),
      (Mt = Dn(o.nextSibling)),
      (Et = t),
      (Ge = !0),
      (Wt = null),
      e !== null &&
        (($t[Ot++] = ln),
        ($t[Ot++] = an),
        ($t[Ot++] = Yn),
        (ln = e.id),
        (an = e.overflow),
        (Yn = t)),
      (t = Za(t, s.children)),
      (t.flags |= 4096),
      t);
}
function uc(e, t, n) {
  e.lanes |= t;
  var s = e.alternate;
  s !== null && (s.lanes |= t), Zl(e.return, t, n);
}
function bl(e, t, n, s, o) {
  var l = e.memoizedState;
  l === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: s,
        tail: n,
        tailMode: o,
      })
    : ((l.isBackwards = t),
      (l.rendering = null),
      (l.renderingStartTime = 0),
      (l.last = s),
      (l.tail = n),
      (l.tailMode = o));
}
function xu(e, t, n) {
  var s = t.pendingProps,
    o = s.revealOrder,
    l = s.tail;
  if ((pt(e, t, s.children, n), (s = Ve.current), s & 2))
    (s = (s & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && uc(e, n, t);
        else if (e.tag === 19) uc(e, n, t);
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
    s &= 1;
  }
  if ((Ue(Ve, s), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && Co(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          bl(t, !1, o, n, l);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Co(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        bl(t, !0, n, null, l);
        break;
      case "together":
        bl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function ro(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function pn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Qn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(ae(153));
  if (t.child !== null) {
    for (
      e = t.child, n = In(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = In(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function km(e, t, n) {
  switch (t.tag) {
    case 3:
      hu(t), _r();
      break;
    case 5:
      Fd(t);
      break;
    case 1:
      jt(t.type) && vo(t);
      break;
    case 4:
      Ha(t, t.stateNode.containerInfo);
      break;
    case 10:
      var s = t.type._context,
        o = t.memoizedProps.value;
      Ue(No, s._currentValue), (s._currentValue = o);
      break;
    case 13:
      if (((s = t.memoizedState), s !== null))
        return s.dehydrated !== null
          ? (Ue(Ve, Ve.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? gu(e, t, n)
          : (Ue(Ve, Ve.current & 1),
            (e = pn(e, t, n)),
            e !== null ? e.sibling : null);
      Ue(Ve, Ve.current & 1);
      break;
    case 19:
      if (((s = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (s) return xu(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        Ue(Ve, Ve.current),
        s)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), pu(e, t, n);
  }
  return pn(e, t, n);
}
var yu, aa, vu, wu;
yu = function (e, t) {
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
aa = function () {};
vu = function (e, t, n, s) {
  var o = e.memoizedProps;
  if (o !== s) {
    (e = t.stateNode), Vn(nn.current);
    var l = null;
    switch (n) {
      case "input":
        (o = Ml(e, o)), (s = Ml(e, s)), (l = []);
        break;
      case "select":
        (o = qe({}, o, { value: void 0 })),
          (s = qe({}, s, { value: void 0 })),
          (l = []);
        break;
      case "textarea":
        (o = Pl(e, o)), (s = Pl(e, s)), (l = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof s.onClick == "function" &&
          (e.onclick = xo);
    }
    Rl(n, s);
    var a;
    n = null;
    for (x in o)
      if (!s.hasOwnProperty(x) && o.hasOwnProperty(x) && o[x] != null)
        if (x === "style") {
          var i = o[x];
          for (a in i) i.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
        } else
          x !== "dangerouslySetInnerHTML" &&
            x !== "children" &&
            x !== "suppressContentEditableWarning" &&
            x !== "suppressHydrationWarning" &&
            x !== "autoFocus" &&
            (as.hasOwnProperty(x)
              ? l || (l = [])
              : (l = l || []).push(x, null));
    for (x in s) {
      var c = s[x];
      if (
        ((i = o != null ? o[x] : void 0),
        s.hasOwnProperty(x) && c !== i && (c != null || i != null))
      )
        if (x === "style")
          if (i) {
            for (a in i)
              !i.hasOwnProperty(a) ||
                (c && c.hasOwnProperty(a)) ||
                (n || (n = {}), (n[a] = ""));
            for (a in c)
              c.hasOwnProperty(a) &&
                i[a] !== c[a] &&
                (n || (n = {}), (n[a] = c[a]));
          } else n || (l || (l = []), l.push(x, n)), (n = c);
        else
          x === "dangerouslySetInnerHTML"
            ? ((c = c ? c.__html : void 0),
              (i = i ? i.__html : void 0),
              c != null && i !== c && (l = l || []).push(x, c))
            : x === "children"
            ? (typeof c != "string" && typeof c != "number") ||
              (l = l || []).push(x, "" + c)
            : x !== "suppressContentEditableWarning" &&
              x !== "suppressHydrationWarning" &&
              (as.hasOwnProperty(x)
                ? (c != null && x === "onScroll" && Be("scroll", e),
                  l || i === c || (l = []))
                : (l = l || []).push(x, c));
    }
    n && (l = l || []).push("style", n);
    var x = l;
    (t.updateQueue = x) && (t.flags |= 4);
  }
};
wu = function (e, t, n, s) {
  n !== s && (t.flags |= 4);
};
function Hr(e, t) {
  if (!Ge)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var s = null; n !== null; )
          n.alternate !== null && (s = n), (n = n.sibling);
        s === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (s.sibling = null);
    }
}
function ct(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    s = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (s |= o.subtreeFlags & 14680064),
        (s |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (s |= o.subtreeFlags),
        (s |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= s), (e.childLanes = n), t;
}
function Dm(e, t, n) {
  var s = t.pendingProps;
  switch ((La(t), t.tag)) {
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
      return ct(t), null;
    case 1:
      return jt(t.type) && yo(), ct(t), null;
    case 3:
      return (
        (s = t.stateNode),
        Er(),
        ze(Nt),
        ze(ft),
        Wa(),
        s.pendingContext &&
          ((s.context = s.pendingContext), (s.pendingContext = null)),
        (e === null || e.child === null) &&
          (zs(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Wt !== null && (ha(Wt), (Wt = null)))),
        aa(e, t),
        ct(t),
        null
      );
    case 5:
      qa(t);
      var o = Vn(vs.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        vu(e, t, n, s, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!s) {
          if (t.stateNode === null) throw Error(ae(166));
          return ct(t), null;
        }
        if (((e = Vn(nn.current)), zs(t))) {
          (s = t.stateNode), (n = t.type);
          var l = t.memoizedProps;
          switch (((s[en] = t), (s[xs] = l), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              Be("cancel", s), Be("close", s);
              break;
            case "iframe":
            case "object":
            case "embed":
              Be("load", s);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Qr.length; o++) Be(Qr[o], s);
              break;
            case "source":
              Be("error", s);
              break;
            case "img":
            case "image":
            case "link":
              Be("error", s), Be("load", s);
              break;
            case "details":
              Be("toggle", s);
              break;
            case "input":
              wi(s, l), Be("invalid", s);
              break;
            case "select":
              (s._wrapperState = { wasMultiple: !!l.multiple }),
                Be("invalid", s);
              break;
            case "textarea":
              Ni(s, l), Be("invalid", s);
          }
          Rl(n, l), (o = null);
          for (var a in l)
            if (l.hasOwnProperty(a)) {
              var i = l[a];
              a === "children"
                ? typeof i == "string"
                  ? s.textContent !== i &&
                    (l.suppressHydrationWarning !== !0 &&
                      Bs(s.textContent, i, e),
                    (o = ["children", i]))
                  : typeof i == "number" &&
                    s.textContent !== "" + i &&
                    (l.suppressHydrationWarning !== !0 &&
                      Bs(s.textContent, i, e),
                    (o = ["children", "" + i]))
                : as.hasOwnProperty(a) &&
                  i != null &&
                  a === "onScroll" &&
                  Be("scroll", s);
            }
          switch (n) {
            case "input":
              Ps(s), bi(s, l, !0);
              break;
            case "textarea":
              Ps(s), ji(s);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (s.onclick = xo);
          }
          (s = o), (t.updateQueue = s), s !== null && (t.flags |= 4);
        } else {
          (a = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Yc(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = a.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof s.is == "string"
                ? (e = a.createElement(n, { is: s.is }))
                : ((e = a.createElement(n)),
                  n === "select" &&
                    ((a = e),
                    s.multiple
                      ? (a.multiple = !0)
                      : s.size && (a.size = s.size)))
              : (e = a.createElementNS(e, n)),
            (e[en] = t),
            (e[xs] = s),
            yu(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((a = Al(n, s)), n)) {
              case "dialog":
                Be("cancel", e), Be("close", e), (o = s);
                break;
              case "iframe":
              case "object":
              case "embed":
                Be("load", e), (o = s);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Qr.length; o++) Be(Qr[o], e);
                o = s;
                break;
              case "source":
                Be("error", e), (o = s);
                break;
              case "img":
              case "image":
              case "link":
                Be("error", e), Be("load", e), (o = s);
                break;
              case "details":
                Be("toggle", e), (o = s);
                break;
              case "input":
                wi(e, s), (o = Ml(e, s)), Be("invalid", e);
                break;
              case "option":
                o = s;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!s.multiple }),
                  (o = qe({}, s, { value: void 0 })),
                  Be("invalid", e);
                break;
              case "textarea":
                Ni(e, s), (o = Pl(e, s)), Be("invalid", e);
                break;
              default:
                o = s;
            }
            Rl(n, o), (i = o);
            for (l in i)
              if (i.hasOwnProperty(l)) {
                var c = i[l];
                l === "style"
                  ? Kc(e, c)
                  : l === "dangerouslySetInnerHTML"
                  ? ((c = c ? c.__html : void 0), c != null && Xc(e, c))
                  : l === "children"
                  ? typeof c == "string"
                    ? (n !== "textarea" || c !== "") && is(e, c)
                    : typeof c == "number" && is(e, "" + c)
                  : l !== "suppressContentEditableWarning" &&
                    l !== "suppressHydrationWarning" &&
                    l !== "autoFocus" &&
                    (as.hasOwnProperty(l)
                      ? c != null && l === "onScroll" && Be("scroll", e)
                      : c != null && ja(e, l, c, a));
              }
            switch (n) {
              case "input":
                Ps(e), bi(e, s, !1);
                break;
              case "textarea":
                Ps(e), ji(e);
                break;
              case "option":
                s.value != null && e.setAttribute("value", "" + Pn(s.value));
                break;
              case "select":
                (e.multiple = !!s.multiple),
                  (l = s.value),
                  l != null
                    ? wr(e, !!s.multiple, l, !1)
                    : s.defaultValue != null &&
                      wr(e, !!s.multiple, s.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = xo);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                s = !!s.autoFocus;
                break e;
              case "img":
                s = !0;
                break e;
              default:
                s = !1;
            }
          }
          s && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ct(t), null;
    case 6:
      if (e && t.stateNode != null) wu(e, t, e.memoizedProps, s);
      else {
        if (typeof s != "string" && t.stateNode === null) throw Error(ae(166));
        if (((n = Vn(vs.current)), Vn(nn.current), zs(t))) {
          if (
            ((s = t.stateNode),
            (n = t.memoizedProps),
            (s[en] = t),
            (l = s.nodeValue !== n) && ((e = Et), e !== null))
          )
            switch (e.tag) {
              case 3:
                Bs(s.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Bs(s.nodeValue, n, (e.mode & 1) !== 0);
            }
          l && (t.flags |= 4);
        } else
          (s = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(s)),
            (s[en] = t),
            (t.stateNode = s);
      }
      return ct(t), null;
    case 13:
      if (
        (ze(Ve),
        (s = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Ge && Mt !== null && t.mode & 1 && !(t.flags & 128))
          Ld(), _r(), (t.flags |= 98560), (l = !1);
        else if (((l = zs(t)), s !== null && s.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(ae(318));
            if (
              ((l = t.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(ae(317));
            l[en] = t;
          } else
            _r(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ct(t), (l = !1);
        } else Wt !== null && (ha(Wt), (Wt = null)), (l = !0);
        if (!l) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((s = s !== null),
          s !== (e !== null && e.memoizedState !== null) &&
            s &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Ve.current & 1 ? tt === 0 && (tt = 3) : oi())),
          t.updateQueue !== null && (t.flags |= 4),
          ct(t),
          null);
    case 4:
      return (
        Er(), aa(e, t), e === null && hs(t.stateNode.containerInfo), ct(t), null
      );
    case 10:
      return Ga(t.type._context), ct(t), null;
    case 17:
      return jt(t.type) && yo(), ct(t), null;
    case 19:
      if ((ze(Ve), (l = t.memoizedState), l === null)) return ct(t), null;
      if (((s = (t.flags & 128) !== 0), (a = l.rendering), a === null))
        if (s) Hr(l, !1);
        else {
          if (tt !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = Co(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    Hr(l, !1),
                    s = a.updateQueue,
                    s !== null && ((t.updateQueue = s), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    s = n,
                    n = t.child;
                  n !== null;

                )
                  (l = n),
                    (e = s),
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
                return Ue(Ve, (Ve.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          l.tail !== null &&
            Qe() > Pr &&
            ((t.flags |= 128), (s = !0), Hr(l, !1), (t.lanes = 4194304));
        }
      else {
        if (!s)
          if (((e = Co(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (s = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Hr(l, !0),
              l.tail === null && l.tailMode === "hidden" && !a.alternate && !Ge)
            )
              return ct(t), null;
          } else
            2 * Qe() - l.renderingStartTime > Pr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (s = !0), Hr(l, !1), (t.lanes = 4194304));
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
          (l.renderingStartTime = Qe()),
          (t.sibling = null),
          (n = Ve.current),
          Ue(Ve, s ? (n & 1) | 2 : n & 1),
          t)
        : (ct(t), null);
    case 22:
    case 23:
      return (
        si(),
        (s = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== s && (t.flags |= 8192),
        s && t.mode & 1
          ? _t & 1073741824 && (ct(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ct(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(ae(156, t.tag));
}
function _m(e, t) {
  switch ((La(t), t.tag)) {
    case 1:
      return (
        jt(t.type) && yo(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Er(),
        ze(Nt),
        ze(ft),
        Wa(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return qa(t), null;
    case 13:
      if (
        (ze(Ve), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(ae(340));
        _r();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ze(Ve), null;
    case 4:
      return Er(), null;
    case 10:
      return Ga(t.type._context), null;
    case 22:
    case 23:
      return si(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Vs = !1,
  dt = !1,
  Mm = typeof WeakSet == "function" ? WeakSet : Set,
  Se = null;
function gr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (s) {
        Ye(e, t, s);
      }
    else n.current = null;
}
function ia(e, t, n) {
  try {
    n();
  } catch (s) {
    Ye(e, t, s);
  }
}
var fc = !1;
function Em(e, t) {
  if (((Hl = mo), (e = Cd()), $a(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var s = n.getSelection && n.getSelection();
        if (s && s.rangeCount !== 0) {
          n = s.anchorNode;
          var o = s.anchorOffset,
            l = s.focusNode;
          s = s.focusOffset;
          try {
            n.nodeType, l.nodeType;
          } catch {
            n = null;
            break e;
          }
          var a = 0,
            i = -1,
            c = -1,
            x = 0,
            g = 0,
            h = e,
            p = null;
          t: for (;;) {
            for (
              var j;
              h !== n || (o !== 0 && h.nodeType !== 3) || (i = a + o),
                h !== l || (s !== 0 && h.nodeType !== 3) || (c = a + s),
                h.nodeType === 3 && (a += h.nodeValue.length),
                (j = h.firstChild) !== null;

            )
              (p = h), (h = j);
            for (;;) {
              if (h === e) break t;
              if (
                (p === n && ++x === o && (i = a),
                p === l && ++g === s && (c = a),
                (j = h.nextSibling) !== null)
              )
                break;
              (h = p), (p = h.parentNode);
            }
            h = j;
          }
          n = i === -1 || c === -1 ? null : { start: i, end: c };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (
    ql = { focusedElem: e, selectionRange: n }, mo = !1, Se = t;
    Se !== null;

  )
    if (((t = Se), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (Se = e);
    else
      for (; Se !== null; ) {
        t = Se;
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
                  var C = S.memoizedProps,
                    R = S.memoizedState,
                    d = t.stateNode,
                    u = d.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? C : Ht(t.type, C),
                      R
                    );
                  d.__reactInternalSnapshotBeforeUpdate = u;
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
                throw Error(ae(163));
            }
        } catch (D) {
          Ye(t, t.return, D);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (Se = e);
          break;
        }
        Se = t.return;
      }
  return (S = fc), (fc = !1), S;
}
function rs(e, t, n) {
  var s = t.updateQueue;
  if (((s = s !== null ? s.lastEffect : null), s !== null)) {
    var o = (s = s.next);
    do {
      if ((o.tag & e) === e) {
        var l = o.destroy;
        (o.destroy = void 0), l !== void 0 && ia(t, n, l);
      }
      o = o.next;
    } while (o !== s);
  }
}
function Go(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var s = n.create;
        n.destroy = s();
      }
      n = n.next;
    } while (n !== t);
  }
}
function ca(e) {
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
function bu(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), bu(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[en], delete t[xs], delete t[Xl], delete t[fm], delete t[pm])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Nu(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function pc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Nu(e.return)) return null;
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
function da(e, t, n) {
  var s = e.tag;
  if (s === 5 || s === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = xo));
  else if (s !== 4 && ((e = e.child), e !== null))
    for (da(e, t, n), e = e.sibling; e !== null; ) da(e, t, n), (e = e.sibling);
}
function ua(e, t, n) {
  var s = e.tag;
  if (s === 5 || s === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (s !== 4 && ((e = e.child), e !== null))
    for (ua(e, t, n), e = e.sibling; e !== null; ) ua(e, t, n), (e = e.sibling);
}
var ot = null,
  qt = !1;
function gn(e, t, n) {
  for (n = n.child; n !== null; ) ju(e, t, n), (n = n.sibling);
}
function ju(e, t, n) {
  if (tn && typeof tn.onCommitFiberUnmount == "function")
    try {
      tn.onCommitFiberUnmount(Ro, n);
    } catch {}
  switch (n.tag) {
    case 5:
      dt || gr(n, t);
    case 6:
      var s = ot,
        o = qt;
      (ot = null),
        gn(e, t, n),
        (ot = s),
        (qt = o),
        ot !== null &&
          (qt
            ? ((e = ot),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ot.removeChild(n.stateNode));
      break;
    case 18:
      ot !== null &&
        (qt
          ? ((e = ot),
            (n = n.stateNode),
            e.nodeType === 8
              ? ml(e.parentNode, n)
              : e.nodeType === 1 && ml(e, n),
            fs(e))
          : ml(ot, n.stateNode));
      break;
    case 4:
      (s = ot),
        (o = qt),
        (ot = n.stateNode.containerInfo),
        (qt = !0),
        gn(e, t, n),
        (ot = s),
        (qt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !dt &&
        ((s = n.updateQueue), s !== null && ((s = s.lastEffect), s !== null))
      ) {
        o = s = s.next;
        do {
          var l = o,
            a = l.destroy;
          (l = l.tag),
            a !== void 0 && (l & 2 || l & 4) && ia(n, t, a),
            (o = o.next);
        } while (o !== s);
      }
      gn(e, t, n);
      break;
    case 1:
      if (
        !dt &&
        (gr(n, t),
        (s = n.stateNode),
        typeof s.componentWillUnmount == "function")
      )
        try {
          (s.props = n.memoizedProps),
            (s.state = n.memoizedState),
            s.componentWillUnmount();
        } catch (i) {
          Ye(n, t, i);
        }
      gn(e, t, n);
      break;
    case 21:
      gn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((dt = (s = dt) || n.memoizedState !== null), gn(e, t, n), (dt = s))
        : gn(e, t, n);
      break;
    default:
      gn(e, t, n);
  }
}
function mc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Mm()),
      t.forEach(function (s) {
        var o = Um.bind(null, e, s);
        n.has(s) || (n.add(s), s.then(o, o));
      });
  }
}
function Vt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var s = 0; s < n.length; s++) {
      var o = n[s];
      try {
        var l = e,
          a = t,
          i = a;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case 5:
              (ot = i.stateNode), (qt = !1);
              break e;
            case 3:
              (ot = i.stateNode.containerInfo), (qt = !0);
              break e;
            case 4:
              (ot = i.stateNode.containerInfo), (qt = !0);
              break e;
          }
          i = i.return;
        }
        if (ot === null) throw Error(ae(160));
        ju(l, a, o), (ot = null), (qt = !1);
        var c = o.alternate;
        c !== null && (c.return = null), (o.return = null);
      } catch (x) {
        Ye(o, t, x);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Su(t, e), (t = t.sibling);
}
function Su(e, t) {
  var n = e.alternate,
    s = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Vt(t, e), Kt(e), s & 4)) {
        try {
          rs(3, e, e.return), Go(3, e);
        } catch (C) {
          Ye(e, e.return, C);
        }
        try {
          rs(5, e, e.return);
        } catch (C) {
          Ye(e, e.return, C);
        }
      }
      break;
    case 1:
      Vt(t, e), Kt(e), s & 512 && n !== null && gr(n, n.return);
      break;
    case 5:
      if (
        (Vt(t, e),
        Kt(e),
        s & 512 && n !== null && gr(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          is(o, "");
        } catch (C) {
          Ye(e, e.return, C);
        }
      }
      if (s & 4 && ((o = e.stateNode), o != null)) {
        var l = e.memoizedProps,
          a = n !== null ? n.memoizedProps : l,
          i = e.type,
          c = e.updateQueue;
        if (((e.updateQueue = null), c !== null))
          try {
            i === "input" && l.type === "radio" && l.name != null && qc(o, l),
              Al(i, a);
            var x = Al(i, l);
            for (a = 0; a < c.length; a += 2) {
              var g = c[a],
                h = c[a + 1];
              g === "style"
                ? Kc(o, h)
                : g === "dangerouslySetInnerHTML"
                ? Xc(o, h)
                : g === "children"
                ? is(o, h)
                : ja(o, g, h, x);
            }
            switch (i) {
              case "input":
                El(o, l);
                break;
              case "textarea":
                Wc(o, l);
                break;
              case "select":
                var p = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!l.multiple;
                var j = l.value;
                j != null
                  ? wr(o, !!l.multiple, j, !1)
                  : p !== !!l.multiple &&
                    (l.defaultValue != null
                      ? wr(o, !!l.multiple, l.defaultValue, !0)
                      : wr(o, !!l.multiple, l.multiple ? [] : "", !1));
            }
            o[xs] = l;
          } catch (C) {
            Ye(e, e.return, C);
          }
      }
      break;
    case 6:
      if ((Vt(t, e), Kt(e), s & 4)) {
        if (e.stateNode === null) throw Error(ae(162));
        (o = e.stateNode), (l = e.memoizedProps);
        try {
          o.nodeValue = l;
        } catch (C) {
          Ye(e, e.return, C);
        }
      }
      break;
    case 3:
      if (
        (Vt(t, e), Kt(e), s & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          fs(t.containerInfo);
        } catch (C) {
          Ye(e, e.return, C);
        }
      break;
    case 4:
      Vt(t, e), Kt(e);
      break;
    case 13:
      Vt(t, e),
        Kt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((l = o.memoizedState !== null),
          (o.stateNode.isHidden = l),
          !l ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (ni = Qe())),
        s & 4 && mc(e);
      break;
    case 22:
      if (
        ((g = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((dt = (x = dt) || g), Vt(t, e), (dt = x)) : Vt(t, e),
        Kt(e),
        s & 8192)
      ) {
        if (
          ((x = e.memoizedState !== null),
          (e.stateNode.isHidden = x) && !g && e.mode & 1)
        )
          for (Se = e, g = e.child; g !== null; ) {
            for (h = Se = g; Se !== null; ) {
              switch (((p = Se), (j = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  rs(4, p, p.return);
                  break;
                case 1:
                  gr(p, p.return);
                  var S = p.stateNode;
                  if (typeof S.componentWillUnmount == "function") {
                    (s = p), (n = p.return);
                    try {
                      (t = s),
                        (S.props = t.memoizedProps),
                        (S.state = t.memoizedState),
                        S.componentWillUnmount();
                    } catch (C) {
                      Ye(s, n, C);
                    }
                  }
                  break;
                case 5:
                  gr(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    gc(h);
                    continue;
                  }
              }
              j !== null ? ((j.return = p), (Se = j)) : gc(h);
            }
            g = g.sibling;
          }
        e: for (g = null, h = e; ; ) {
          if (h.tag === 5) {
            if (g === null) {
              g = h;
              try {
                (o = h.stateNode),
                  x
                    ? ((l = o.style),
                      typeof l.setProperty == "function"
                        ? l.setProperty("display", "none", "important")
                        : (l.display = "none"))
                    : ((i = h.stateNode),
                      (c = h.memoizedProps.style),
                      (a =
                        c != null && c.hasOwnProperty("display")
                          ? c.display
                          : null),
                      (i.style.display = Qc("display", a)));
              } catch (C) {
                Ye(e, e.return, C);
              }
            }
          } else if (h.tag === 6) {
            if (g === null)
              try {
                h.stateNode.nodeValue = x ? "" : h.memoizedProps;
              } catch (C) {
                Ye(e, e.return, C);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            g === h && (g = null), (h = h.return);
          }
          g === h && (g = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      Vt(t, e), Kt(e), s & 4 && mc(e);
      break;
    case 21:
      break;
    default:
      Vt(t, e), Kt(e);
  }
}
function Kt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Nu(n)) {
            var s = n;
            break e;
          }
          n = n.return;
        }
        throw Error(ae(160));
      }
      switch (s.tag) {
        case 5:
          var o = s.stateNode;
          s.flags & 32 && (is(o, ""), (s.flags &= -33));
          var l = pc(e);
          ua(e, l, o);
          break;
        case 3:
        case 4:
          var a = s.stateNode.containerInfo,
            i = pc(e);
          da(e, i, a);
          break;
        default:
          throw Error(ae(161));
      }
    } catch (c) {
      Ye(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Im(e, t, n) {
  (Se = e), Cu(e);
}
function Cu(e, t, n) {
  for (var s = (e.mode & 1) !== 0; Se !== null; ) {
    var o = Se,
      l = o.child;
    if (o.tag === 22 && s) {
      var a = o.memoizedState !== null || Vs;
      if (!a) {
        var i = o.alternate,
          c = (i !== null && i.memoizedState !== null) || dt;
        i = Vs;
        var x = dt;
        if (((Vs = a), (dt = c) && !x))
          for (Se = o; Se !== null; )
            (a = Se),
              (c = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? xc(o)
                : c !== null
                ? ((c.return = a), (Se = c))
                : xc(o);
        for (; l !== null; ) (Se = l), Cu(l), (l = l.sibling);
        (Se = o), (Vs = i), (dt = x);
      }
      hc(e);
    } else
      o.subtreeFlags & 8772 && l !== null ? ((l.return = o), (Se = l)) : hc(e);
  }
}
function hc(e) {
  for (; Se !== null; ) {
    var t = Se;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              dt || Go(5, t);
              break;
            case 1:
              var s = t.stateNode;
              if (t.flags & 4 && !dt)
                if (n === null) s.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ht(t.type, n.memoizedProps);
                  s.componentDidUpdate(
                    o,
                    n.memoizedState,
                    s.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var l = t.updateQueue;
              l !== null && Zi(t, l, s);
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
                Zi(t, a, n);
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
                var x = t.alternate;
                if (x !== null) {
                  var g = x.memoizedState;
                  if (g !== null) {
                    var h = g.dehydrated;
                    h !== null && fs(h);
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
              throw Error(ae(163));
          }
        dt || (t.flags & 512 && ca(t));
      } catch (p) {
        Ye(t, t.return, p);
      }
    }
    if (t === e) {
      Se = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (Se = n);
      break;
    }
    Se = t.return;
  }
}
function gc(e) {
  for (; Se !== null; ) {
    var t = Se;
    if (t === e) {
      Se = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (Se = n);
      break;
    }
    Se = t.return;
  }
}
function xc(e) {
  for (; Se !== null; ) {
    var t = Se;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Go(4, t);
          } catch (c) {
            Ye(t, n, c);
          }
          break;
        case 1:
          var s = t.stateNode;
          if (typeof s.componentDidMount == "function") {
            var o = t.return;
            try {
              s.componentDidMount();
            } catch (c) {
              Ye(t, o, c);
            }
          }
          var l = t.return;
          try {
            ca(t);
          } catch (c) {
            Ye(t, l, c);
          }
          break;
        case 5:
          var a = t.return;
          try {
            ca(t);
          } catch (c) {
            Ye(t, a, c);
          }
      }
    } catch (c) {
      Ye(t, t.return, c);
    }
    if (t === e) {
      Se = null;
      break;
    }
    var i = t.sibling;
    if (i !== null) {
      (i.return = t.return), (Se = i);
      break;
    }
    Se = t.return;
  }
}
var Pm = Math.ceil,
  _o = mn.ReactCurrentDispatcher,
  ei = mn.ReactCurrentOwner,
  Ut = mn.ReactCurrentBatchConfig,
  Ae = 0,
  st = null,
  Je = null,
  lt = 0,
  _t = 0,
  xr = An(0),
  tt = 0,
  js = null,
  Qn = 0,
  Fo = 0,
  ti = 0,
  ss = null,
  vt = null,
  ni = 0,
  Pr = 1 / 0,
  sn = null,
  Mo = !1,
  fa = null,
  Mn = null,
  Hs = !1,
  Nn = null,
  Eo = 0,
  os = 0,
  pa = null,
  so = -1,
  oo = 0;
function mt() {
  return Ae & 6 ? Qe() : so !== -1 ? so : (so = Qe());
}
function En(e) {
  return e.mode & 1
    ? Ae & 2 && lt !== 0
      ? lt & -lt
      : hm.transition !== null
      ? (oo === 0 && (oo = cd()), oo)
      : ((e = Oe),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : gd(e.type))),
        e)
    : 1;
}
function Xt(e, t, n, s) {
  if (50 < os) throw ((os = 0), (pa = null), Error(ae(185)));
  Cs(e, n, s),
    (!(Ae & 2) || e !== st) &&
      (e === st && (!(Ae & 2) && (Fo |= n), tt === 4 && wn(e, lt)),
      St(e, s),
      n === 1 && Ae === 0 && !(t.mode & 1) && ((Pr = Qe() + 500), Uo && $n()));
}
function St(e, t) {
  var n = e.callbackNode;
  hp(e, t);
  var s = po(e, e === st ? lt : 0);
  if (s === 0)
    n !== null && ki(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = s & -s), e.callbackPriority !== t)) {
    if ((n != null && ki(n), t === 1))
      e.tag === 0 ? mm(yc.bind(null, e)) : Ad(yc.bind(null, e)),
        dm(function () {
          !(Ae & 6) && $n();
        }),
        (n = null);
    else {
      switch (dd(s)) {
        case 1:
          n = _a;
          break;
        case 4:
          n = ad;
          break;
        case 16:
          n = fo;
          break;
        case 536870912:
          n = id;
          break;
        default:
          n = fo;
      }
      n = Tu(n, ku.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function ku(e, t) {
  if (((so = -1), (oo = 0), Ae & 6)) throw Error(ae(327));
  var n = e.callbackNode;
  if (Cr() && e.callbackNode !== n) return null;
  var s = po(e, e === st ? lt : 0);
  if (s === 0) return null;
  if (s & 30 || s & e.expiredLanes || t) t = Io(e, s);
  else {
    t = s;
    var o = Ae;
    Ae |= 2;
    var l = _u();
    (st !== e || lt !== t) && ((sn = null), (Pr = Qe() + 500), Hn(e, t));
    do
      try {
        Am();
        break;
      } catch (i) {
        Du(e, i);
      }
    while (!0);
    za(),
      (_o.current = l),
      (Ae = o),
      Je !== null ? (t = 0) : ((st = null), (lt = 0), (t = tt));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Bl(e)), o !== 0 && ((s = o), (t = ma(e, o)))), t === 1)
    )
      throw ((n = js), Hn(e, 0), wn(e, s), St(e, Qe()), n);
    if (t === 6) wn(e, s);
    else {
      if (
        ((o = e.current.alternate),
        !(s & 30) &&
          !Tm(o) &&
          ((t = Io(e, s)),
          t === 2 && ((l = Bl(e)), l !== 0 && ((s = l), (t = ma(e, l)))),
          t === 1))
      )
        throw ((n = js), Hn(e, 0), wn(e, s), St(e, Qe()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = s), t)) {
        case 0:
        case 1:
          throw Error(ae(345));
        case 2:
          zn(e, vt, sn);
          break;
        case 3:
          if (
            (wn(e, s), (s & 130023424) === s && ((t = ni + 500 - Qe()), 10 < t))
          ) {
            if (po(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & s) !== s)) {
              mt(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Yl(zn.bind(null, e, vt, sn), t);
            break;
          }
          zn(e, vt, sn);
          break;
        case 4:
          if ((wn(e, s), (s & 4194240) === s)) break;
          for (t = e.eventTimes, o = -1; 0 < s; ) {
            var a = 31 - Yt(s);
            (l = 1 << a), (a = t[a]), a > o && (o = a), (s &= ~l);
          }
          if (
            ((s = o),
            (s = Qe() - s),
            (s =
              (120 > s
                ? 120
                : 480 > s
                ? 480
                : 1080 > s
                ? 1080
                : 1920 > s
                ? 1920
                : 3e3 > s
                ? 3e3
                : 4320 > s
                ? 4320
                : 1960 * Pm(s / 1960)) - s),
            10 < s)
          ) {
            e.timeoutHandle = Yl(zn.bind(null, e, vt, sn), s);
            break;
          }
          zn(e, vt, sn);
          break;
        case 5:
          zn(e, vt, sn);
          break;
        default:
          throw Error(ae(329));
      }
    }
  }
  return St(e, Qe()), e.callbackNode === n ? ku.bind(null, e) : null;
}
function ma(e, t) {
  var n = ss;
  return (
    e.current.memoizedState.isDehydrated && (Hn(e, t).flags |= 256),
    (e = Io(e, t)),
    e !== 2 && ((t = vt), (vt = n), t !== null && ha(t)),
    e
  );
}
function ha(e) {
  vt === null ? (vt = e) : vt.push.apply(vt, e);
}
function Tm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var s = 0; s < n.length; s++) {
          var o = n[s],
            l = o.getSnapshot;
          o = o.value;
          try {
            if (!Qt(l(), o)) return !1;
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
function wn(e, t) {
  for (
    t &= ~ti,
      t &= ~Fo,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Yt(t),
      s = 1 << n;
    (e[n] = -1), (t &= ~s);
  }
}
function yc(e) {
  if (Ae & 6) throw Error(ae(327));
  Cr();
  var t = po(e, 0);
  if (!(t & 1)) return St(e, Qe()), null;
  var n = Io(e, t);
  if (e.tag !== 0 && n === 2) {
    var s = Bl(e);
    s !== 0 && ((t = s), (n = ma(e, s)));
  }
  if (n === 1) throw ((n = js), Hn(e, 0), wn(e, t), St(e, Qe()), n);
  if (n === 6) throw Error(ae(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    zn(e, vt, sn),
    St(e, Qe()),
    null
  );
}
function ri(e, t) {
  var n = Ae;
  Ae |= 1;
  try {
    return e(t);
  } finally {
    (Ae = n), Ae === 0 && ((Pr = Qe() + 500), Uo && $n());
  }
}
function Kn(e) {
  Nn !== null && Nn.tag === 0 && !(Ae & 6) && Cr();
  var t = Ae;
  Ae |= 1;
  var n = Ut.transition,
    s = Oe;
  try {
    if (((Ut.transition = null), (Oe = 1), e)) return e();
  } finally {
    (Oe = s), (Ut.transition = n), (Ae = t), !(Ae & 6) && $n();
  }
}
function si() {
  (_t = xr.current), ze(xr);
}
function Hn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), cm(n)), Je !== null))
    for (n = Je.return; n !== null; ) {
      var s = n;
      switch ((La(s), s.tag)) {
        case 1:
          (s = s.type.childContextTypes), s != null && yo();
          break;
        case 3:
          Er(), ze(Nt), ze(ft), Wa();
          break;
        case 5:
          qa(s);
          break;
        case 4:
          Er();
          break;
        case 13:
          ze(Ve);
          break;
        case 19:
          ze(Ve);
          break;
        case 10:
          Ga(s.type._context);
          break;
        case 22:
        case 23:
          si();
      }
      n = n.return;
    }
  if (
    ((st = e),
    (Je = e = In(e.current, null)),
    (lt = _t = t),
    (tt = 0),
    (js = null),
    (ti = Fo = Qn = 0),
    (vt = ss = null),
    Fn !== null)
  ) {
    for (t = 0; t < Fn.length; t++)
      if (((n = Fn[t]), (s = n.interleaved), s !== null)) {
        n.interleaved = null;
        var o = s.next,
          l = n.pending;
        if (l !== null) {
          var a = l.next;
          (l.next = o), (s.next = a);
        }
        n.pending = s;
      }
    Fn = null;
  }
  return e;
}
function Du(e, t) {
  do {
    var n = Je;
    try {
      if ((za(), (to.current = Do), ko)) {
        for (var s = He.memoizedState; s !== null; ) {
          var o = s.queue;
          o !== null && (o.pending = null), (s = s.next);
        }
        ko = !1;
      }
      if (
        ((Xn = 0),
        (rt = et = He = null),
        (ns = !1),
        (ws = 0),
        (ei.current = null),
        n === null || n.return === null)
      ) {
        (tt = 1), (js = t), (Je = null);
        break;
      }
      e: {
        var l = e,
          a = n.return,
          i = n,
          c = t;
        if (
          ((t = lt),
          (i.flags |= 32768),
          c !== null && typeof c == "object" && typeof c.then == "function")
        ) {
          var x = c,
            g = i,
            h = g.tag;
          if (!(g.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var p = g.alternate;
            p
              ? ((g.updateQueue = p.updateQueue),
                (g.memoizedState = p.memoizedState),
                (g.lanes = p.lanes))
              : ((g.updateQueue = null), (g.memoizedState = null));
          }
          var j = oc(a);
          if (j !== null) {
            (j.flags &= -257),
              lc(j, a, i, l, t),
              j.mode & 1 && sc(l, x, t),
              (t = j),
              (c = x);
            var S = t.updateQueue;
            if (S === null) {
              var C = new Set();
              C.add(c), (t.updateQueue = C);
            } else S.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              sc(l, x, t), oi();
              break e;
            }
            c = Error(ae(426));
          }
        } else if (Ge && i.mode & 1) {
          var R = oc(a);
          if (R !== null) {
            !(R.flags & 65536) && (R.flags |= 256),
              lc(R, a, i, l, t),
              Ua(Ir(c, i));
            break e;
          }
        }
        (l = c = Ir(c, i)),
          tt !== 4 && (tt = 2),
          ss === null ? (ss = [l]) : ss.push(l),
          (l = a);
        do {
          switch (l.tag) {
            case 3:
              (l.flags |= 65536), (t &= -t), (l.lanes |= t);
              var d = du(l, c, t);
              Ji(l, d);
              break e;
            case 1:
              i = c;
              var u = l.type,
                m = l.stateNode;
              if (
                !(l.flags & 128) &&
                (typeof u.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (Mn === null || !Mn.has(m))))
              ) {
                (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                var D = uu(l, i, t);
                Ji(l, D);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      Eu(n);
    } catch (T) {
      (t = T), Je === n && n !== null && (Je = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function _u() {
  var e = _o.current;
  return (_o.current = Do), e === null ? Do : e;
}
function oi() {
  (tt === 0 || tt === 3 || tt === 2) && (tt = 4),
    st === null || (!(Qn & 268435455) && !(Fo & 268435455)) || wn(st, lt);
}
function Io(e, t) {
  var n = Ae;
  Ae |= 2;
  var s = _u();
  (st !== e || lt !== t) && ((sn = null), Hn(e, t));
  do
    try {
      Rm();
      break;
    } catch (o) {
      Du(e, o);
    }
  while (!0);
  if ((za(), (Ae = n), (_o.current = s), Je !== null)) throw Error(ae(261));
  return (st = null), (lt = 0), tt;
}
function Rm() {
  for (; Je !== null; ) Mu(Je);
}
function Am() {
  for (; Je !== null && !lp(); ) Mu(Je);
}
function Mu(e) {
  var t = Pu(e.alternate, e, _t);
  (e.memoizedProps = e.pendingProps),
    t === null ? Eu(e) : (Je = t),
    (ei.current = null);
}
function Eu(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = _m(n, t)), n !== null)) {
        (n.flags &= 32767), (Je = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (tt = 6), (Je = null);
        return;
      }
    } else if (((n = Dm(n, t, _t)), n !== null)) {
      Je = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Je = t;
      return;
    }
    Je = t = e;
  } while (t !== null);
  tt === 0 && (tt = 5);
}
function zn(e, t, n) {
  var s = Oe,
    o = Ut.transition;
  try {
    (Ut.transition = null), (Oe = 1), $m(e, t, n, s);
  } finally {
    (Ut.transition = o), (Oe = s);
  }
  return null;
}
function $m(e, t, n, s) {
  do Cr();
  while (Nn !== null);
  if (Ae & 6) throw Error(ae(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(ae(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var l = n.lanes | n.childLanes;
  if (
    (gp(e, l),
    e === st && ((Je = st = null), (lt = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Hs ||
      ((Hs = !0),
      Tu(fo, function () {
        return Cr(), null;
      })),
    (l = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || l)
  ) {
    (l = Ut.transition), (Ut.transition = null);
    var a = Oe;
    Oe = 1;
    var i = Ae;
    (Ae |= 4),
      (ei.current = null),
      Em(e, n),
      Su(n, e),
      nm(ql),
      (mo = !!Hl),
      (ql = Hl = null),
      (e.current = n),
      Im(n),
      ap(),
      (Ae = i),
      (Oe = a),
      (Ut.transition = l);
  } else e.current = n;
  if (
    (Hs && ((Hs = !1), (Nn = e), (Eo = o)),
    (l = e.pendingLanes),
    l === 0 && (Mn = null),
    dp(n.stateNode),
    St(e, Qe()),
    t !== null)
  )
    for (s = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), s(o.value, { componentStack: o.stack, digest: o.digest });
  if (Mo) throw ((Mo = !1), (e = fa), (fa = null), e);
  return (
    Eo & 1 && e.tag !== 0 && Cr(),
    (l = e.pendingLanes),
    l & 1 ? (e === pa ? os++ : ((os = 0), (pa = e))) : (os = 0),
    $n(),
    null
  );
}
function Cr() {
  if (Nn !== null) {
    var e = dd(Eo),
      t = Ut.transition,
      n = Oe;
    try {
      if (((Ut.transition = null), (Oe = 16 > e ? 16 : e), Nn === null))
        var s = !1;
      else {
        if (((e = Nn), (Nn = null), (Eo = 0), Ae & 6)) throw Error(ae(331));
        var o = Ae;
        for (Ae |= 4, Se = e.current; Se !== null; ) {
          var l = Se,
            a = l.child;
          if (Se.flags & 16) {
            var i = l.deletions;
            if (i !== null) {
              for (var c = 0; c < i.length; c++) {
                var x = i[c];
                for (Se = x; Se !== null; ) {
                  var g = Se;
                  switch (g.tag) {
                    case 0:
                    case 11:
                    case 15:
                      rs(8, g, l);
                  }
                  var h = g.child;
                  if (h !== null) (h.return = g), (Se = h);
                  else
                    for (; Se !== null; ) {
                      g = Se;
                      var p = g.sibling,
                        j = g.return;
                      if ((bu(g), g === x)) {
                        Se = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = j), (Se = p);
                        break;
                      }
                      Se = j;
                    }
                }
              }
              var S = l.alternate;
              if (S !== null) {
                var C = S.child;
                if (C !== null) {
                  S.child = null;
                  do {
                    var R = C.sibling;
                    (C.sibling = null), (C = R);
                  } while (C !== null);
                }
              }
              Se = l;
            }
          }
          if (l.subtreeFlags & 2064 && a !== null) (a.return = l), (Se = a);
          else
            e: for (; Se !== null; ) {
              if (((l = Se), l.flags & 2048))
                switch (l.tag) {
                  case 0:
                  case 11:
                  case 15:
                    rs(9, l, l.return);
                }
              var d = l.sibling;
              if (d !== null) {
                (d.return = l.return), (Se = d);
                break e;
              }
              Se = l.return;
            }
        }
        var u = e.current;
        for (Se = u; Se !== null; ) {
          a = Se;
          var m = a.child;
          if (a.subtreeFlags & 2064 && m !== null) (m.return = a), (Se = m);
          else
            e: for (a = u; Se !== null; ) {
              if (((i = Se), i.flags & 2048))
                try {
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Go(9, i);
                  }
                } catch (T) {
                  Ye(i, i.return, T);
                }
              if (i === a) {
                Se = null;
                break e;
              }
              var D = i.sibling;
              if (D !== null) {
                (D.return = i.return), (Se = D);
                break e;
              }
              Se = i.return;
            }
        }
        if (
          ((Ae = o), $n(), tn && typeof tn.onPostCommitFiberRoot == "function")
        )
          try {
            tn.onPostCommitFiberRoot(Ro, e);
          } catch {}
        s = !0;
      }
      return s;
    } finally {
      (Oe = n), (Ut.transition = t);
    }
  }
  return !1;
}
function vc(e, t, n) {
  (t = Ir(n, t)),
    (t = du(e, t, 1)),
    (e = _n(e, t, 1)),
    (t = mt()),
    e !== null && (Cs(e, 1, t), St(e, t));
}
function Ye(e, t, n) {
  if (e.tag === 3) vc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        vc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var s = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof s.componentDidCatch == "function" &&
            (Mn === null || !Mn.has(s)))
        ) {
          (e = Ir(n, e)),
            (e = uu(t, e, 1)),
            (t = _n(t, e, 1)),
            (e = mt()),
            t !== null && (Cs(t, 1, e), St(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Om(e, t, n) {
  var s = e.pingCache;
  s !== null && s.delete(t),
    (t = mt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    st === e &&
      (lt & n) === n &&
      (tt === 4 || (tt === 3 && (lt & 130023424) === lt && 500 > Qe() - ni)
        ? Hn(e, 0)
        : (ti |= n)),
    St(e, t);
}
function Iu(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = As), (As <<= 1), !(As & 130023424) && (As = 4194304))
      : (t = 1));
  var n = mt();
  (e = fn(e, t)), e !== null && (Cs(e, t, n), St(e, n));
}
function Lm(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Iu(e, n);
}
function Um(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var s = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      s = e.stateNode;
      break;
    default:
      throw Error(ae(314));
  }
  s !== null && s.delete(t), Iu(e, n);
}
var Pu;
Pu = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Nt.current) wt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (wt = !1), km(e, t, n);
      wt = !!(e.flags & 131072);
    }
  else (wt = !1), Ge && t.flags & 1048576 && $d(t, bo, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var s = t.type;
      ro(e, t), (e = t.pendingProps);
      var o = Dr(t, ft.current);
      Sr(t, n), (o = Xa(null, t, s, e, o, n));
      var l = Qa();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            jt(s) ? ((l = !0), vo(t)) : (l = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Va(t),
            (o.updater = zo),
            (t.stateNode = o),
            (o._reactInternals = t),
            ta(t, s, e, n),
            (t = sa(null, t, s, !0, l, n)))
          : ((t.tag = 0), Ge && l && Oa(t), pt(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      s = t.elementType;
      e: {
        switch (
          (ro(e, t),
          (e = t.pendingProps),
          (o = s._init),
          (s = o(s._payload)),
          (t.type = s),
          (o = t.tag = zm(s)),
          (e = Ht(s, e)),
          o)
        ) {
          case 0:
            t = ra(null, t, s, e, n);
            break e;
          case 1:
            t = cc(null, t, s, e, n);
            break e;
          case 11:
            t = ac(null, t, s, e, n);
            break e;
          case 14:
            t = ic(null, t, s, Ht(s.type, e), n);
            break e;
        }
        throw Error(ae(306, s, ""));
      }
      return t;
    case 0:
      return (
        (s = t.type),
        (o = t.pendingProps),
        (o = t.elementType === s ? o : Ht(s, o)),
        ra(e, t, s, o, n)
      );
    case 1:
      return (
        (s = t.type),
        (o = t.pendingProps),
        (o = t.elementType === s ? o : Ht(s, o)),
        cc(e, t, s, o, n)
      );
    case 3:
      e: {
        if ((hu(t), e === null)) throw Error(ae(387));
        (s = t.pendingProps),
          (l = t.memoizedState),
          (o = l.element),
          Gd(e, t),
          So(t, s, null, n);
        var a = t.memoizedState;
        if (((s = a.element), l.isDehydrated))
          if (
            ((l = {
              element: s,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = l),
            (t.memoizedState = l),
            t.flags & 256)
          ) {
            (o = Ir(Error(ae(423)), t)), (t = dc(e, t, s, n, o));
            break e;
          } else if (s !== o) {
            (o = Ir(Error(ae(424)), t)), (t = dc(e, t, s, n, o));
            break e;
          } else
            for (
              Mt = Dn(t.stateNode.containerInfo.firstChild),
                Et = t,
                Ge = !0,
                Wt = null,
                n = Bd(t, null, s, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((_r(), s === o)) {
            t = pn(e, t, n);
            break e;
          }
          pt(e, t, s, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Fd(t),
        e === null && Jl(t),
        (s = t.type),
        (o = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (a = o.children),
        Wl(s, o) ? (a = null) : l !== null && Wl(s, l) && (t.flags |= 32),
        mu(e, t),
        pt(e, t, a, n),
        t.child
      );
    case 6:
      return e === null && Jl(t), null;
    case 13:
      return gu(e, t, n);
    case 4:
      return (
        Ha(t, t.stateNode.containerInfo),
        (s = t.pendingProps),
        e === null ? (t.child = Mr(t, null, s, n)) : pt(e, t, s, n),
        t.child
      );
    case 11:
      return (
        (s = t.type),
        (o = t.pendingProps),
        (o = t.elementType === s ? o : Ht(s, o)),
        ac(e, t, s, o, n)
      );
    case 7:
      return pt(e, t, t.pendingProps, n), t.child;
    case 8:
      return pt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return pt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((s = t.type._context),
          (o = t.pendingProps),
          (l = t.memoizedProps),
          (a = o.value),
          Ue(No, s._currentValue),
          (s._currentValue = a),
          l !== null)
        )
          if (Qt(l.value, a)) {
            if (l.children === o.children && !Nt.current) {
              t = pn(e, t, n);
              break e;
            }
          } else
            for (l = t.child, l !== null && (l.return = t); l !== null; ) {
              var i = l.dependencies;
              if (i !== null) {
                a = l.child;
                for (var c = i.firstContext; c !== null; ) {
                  if (c.context === s) {
                    if (l.tag === 1) {
                      (c = cn(-1, n & -n)), (c.tag = 2);
                      var x = l.updateQueue;
                      if (x !== null) {
                        x = x.shared;
                        var g = x.pending;
                        g === null
                          ? (c.next = c)
                          : ((c.next = g.next), (g.next = c)),
                          (x.pending = c);
                      }
                    }
                    (l.lanes |= n),
                      (c = l.alternate),
                      c !== null && (c.lanes |= n),
                      Zl(l.return, n, t),
                      (i.lanes |= n);
                    break;
                  }
                  c = c.next;
                }
              } else if (l.tag === 10) a = l.type === t.type ? null : l.child;
              else if (l.tag === 18) {
                if (((a = l.return), a === null)) throw Error(ae(341));
                (a.lanes |= n),
                  (i = a.alternate),
                  i !== null && (i.lanes |= n),
                  Zl(a, n, t),
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
        pt(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (s = t.pendingProps.children),
        Sr(t, n),
        (o = Bt(o)),
        (s = s(o)),
        (t.flags |= 1),
        pt(e, t, s, n),
        t.child
      );
    case 14:
      return (
        (s = t.type),
        (o = Ht(s, t.pendingProps)),
        (o = Ht(s.type, o)),
        ic(e, t, s, o, n)
      );
    case 15:
      return fu(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (s = t.type),
        (o = t.pendingProps),
        (o = t.elementType === s ? o : Ht(s, o)),
        ro(e, t),
        (t.tag = 1),
        jt(s) ? ((e = !0), vo(t)) : (e = !1),
        Sr(t, n),
        cu(t, s, o),
        ta(t, s, o, n),
        sa(null, t, s, !0, e, n)
      );
    case 19:
      return xu(e, t, n);
    case 22:
      return pu(e, t, n);
  }
  throw Error(ae(156, t.tag));
};
function Tu(e, t) {
  return ld(e, t);
}
function Bm(e, t, n, s) {
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
    (this.mode = s),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Lt(e, t, n, s) {
  return new Bm(e, t, n, s);
}
function li(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function zm(e) {
  if (typeof e == "function") return li(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Ca)) return 11;
    if (e === ka) return 14;
  }
  return 2;
}
function In(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Lt(e.tag, t, e.key, e.mode)),
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
function lo(e, t, n, s, o, l) {
  var a = 2;
  if (((s = e), typeof e == "function")) li(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else
    e: switch (e) {
      case ar:
        return qn(n.children, o, l, t);
      case Sa:
        (a = 8), (o |= 8);
        break;
      case Cl:
        return (
          (e = Lt(12, n, t, o | 2)), (e.elementType = Cl), (e.lanes = l), e
        );
      case kl:
        return (e = Lt(13, n, t, o)), (e.elementType = kl), (e.lanes = l), e;
      case Dl:
        return (e = Lt(19, n, t, o)), (e.elementType = Dl), (e.lanes = l), e;
      case Fc:
        return Vo(n, o, l, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case zc:
              a = 10;
              break e;
            case Gc:
              a = 9;
              break e;
            case Ca:
              a = 11;
              break e;
            case ka:
              a = 14;
              break e;
            case xn:
              (a = 16), (s = null);
              break e;
          }
        throw Error(ae(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Lt(a, n, t, o)), (t.elementType = e), (t.type = s), (t.lanes = l), t
  );
}
function qn(e, t, n, s) {
  return (e = Lt(7, e, s, t)), (e.lanes = n), e;
}
function Vo(e, t, n, s) {
  return (
    (e = Lt(22, e, s, t)),
    (e.elementType = Fc),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Nl(e, t, n) {
  return (e = Lt(6, e, null, t)), (e.lanes = n), e;
}
function jl(e, t, n) {
  return (
    (t = Lt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Gm(e, t, n, s, o) {
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
    (this.eventTimes = rl(0)),
    (this.expirationTimes = rl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = rl(0)),
    (this.identifierPrefix = s),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function ai(e, t, n, s, o, l, a, i, c) {
  return (
    (e = new Gm(e, t, n, i, c)),
    t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
    (l = Lt(3, null, null, t)),
    (e.current = l),
    (l.stateNode = e),
    (l.memoizedState = {
      element: s,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Va(l),
    e
  );
}
function Fm(e, t, n) {
  var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: lr,
    key: s == null ? null : "" + s,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Ru(e) {
  if (!e) return Tn;
  e = e._reactInternals;
  e: {
    if (Zn(e) !== e || e.tag !== 1) throw Error(ae(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (jt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(ae(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (jt(n)) return Rd(e, n, t);
  }
  return t;
}
function Au(e, t, n, s, o, l, a, i, c) {
  return (
    (e = ai(n, s, !0, e, o, l, a, i, c)),
    (e.context = Ru(null)),
    (n = e.current),
    (s = mt()),
    (o = En(n)),
    (l = cn(s, o)),
    (l.callback = t ?? null),
    _n(n, l, o),
    (e.current.lanes = o),
    Cs(e, o, s),
    St(e, s),
    e
  );
}
function Ho(e, t, n, s) {
  var o = t.current,
    l = mt(),
    a = En(o);
  return (
    (n = Ru(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = cn(l, a)),
    (t.payload = { element: e }),
    (s = s === void 0 ? null : s),
    s !== null && (t.callback = s),
    (e = _n(o, t, a)),
    e !== null && (Xt(e, o, a, l), eo(e, o, a)),
    a
  );
}
function Po(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function wc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ii(e, t) {
  wc(e, t), (e = e.alternate) && wc(e, t);
}
function Vm() {
  return null;
}
var $u =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ci(e) {
  this._internalRoot = e;
}
qo.prototype.render = ci.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(ae(409));
  Ho(e, t, null, null);
};
qo.prototype.unmount = ci.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Kn(function () {
      Ho(null, e, null, null);
    }),
      (t[un] = null);
  }
};
function qo(e) {
  this._internalRoot = e;
}
qo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = pd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < vn.length && t !== 0 && t < vn[n].priority; n++);
    vn.splice(n, 0, e), n === 0 && hd(e);
  }
};
function di(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Wo(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function bc() {}
function Hm(e, t, n, s, o) {
  if (o) {
    if (typeof s == "function") {
      var l = s;
      s = function () {
        var x = Po(a);
        l.call(x);
      };
    }
    var a = Au(t, s, e, 0, null, !1, !1, "", bc);
    return (
      (e._reactRootContainer = a),
      (e[un] = a.current),
      hs(e.nodeType === 8 ? e.parentNode : e),
      Kn(),
      a
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof s == "function") {
    var i = s;
    s = function () {
      var x = Po(c);
      i.call(x);
    };
  }
  var c = ai(e, 0, !1, null, null, !1, !1, "", bc);
  return (
    (e._reactRootContainer = c),
    (e[un] = c.current),
    hs(e.nodeType === 8 ? e.parentNode : e),
    Kn(function () {
      Ho(t, c, n, s);
    }),
    c
  );
}
function Yo(e, t, n, s, o) {
  var l = n._reactRootContainer;
  if (l) {
    var a = l;
    if (typeof o == "function") {
      var i = o;
      o = function () {
        var c = Po(a);
        i.call(c);
      };
    }
    Ho(t, a, e, o);
  } else a = Hm(n, t, e, o, s);
  return Po(a);
}
ud = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Xr(t.pendingLanes);
        n !== 0 &&
          (Ma(t, n | 1), St(t, Qe()), !(Ae & 6) && ((Pr = Qe() + 500), $n()));
      }
      break;
    case 13:
      Kn(function () {
        var s = fn(e, 1);
        if (s !== null) {
          var o = mt();
          Xt(s, e, 1, o);
        }
      }),
        ii(e, 1);
  }
};
Ea = function (e) {
  if (e.tag === 13) {
    var t = fn(e, 134217728);
    if (t !== null) {
      var n = mt();
      Xt(t, e, 134217728, n);
    }
    ii(e, 134217728);
  }
};
fd = function (e) {
  if (e.tag === 13) {
    var t = En(e),
      n = fn(e, t);
    if (n !== null) {
      var s = mt();
      Xt(n, e, t, s);
    }
    ii(e, t);
  }
};
pd = function () {
  return Oe;
};
md = function (e, t) {
  var n = Oe;
  try {
    return (Oe = e), t();
  } finally {
    Oe = n;
  }
};
Ol = function (e, t, n) {
  switch (t) {
    case "input":
      if ((El(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var s = n[t];
          if (s !== e && s.form === e.form) {
            var o = Lo(s);
            if (!o) throw Error(ae(90));
            Hc(s), El(s, o);
          }
        }
      }
      break;
    case "textarea":
      Wc(e, n);
      break;
    case "select":
      (t = n.value), t != null && wr(e, !!n.multiple, t, !1);
  }
};
ed = ri;
td = Kn;
var qm = { usingClientEntryPoint: !1, Events: [Ds, ur, Lo, Jc, Zc, ri] },
  qr = {
    findFiberByHostInstance: Gn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Wm = {
    bundleType: qr.bundleType,
    version: qr.version,
    rendererPackageName: qr.rendererPackageName,
    rendererConfig: qr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: mn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = sd(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: qr.findFiberByHostInstance || Vm,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var qs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!qs.isDisabled && qs.supportsFiber)
    try {
      (Ro = qs.inject(Wm)), (tn = qs);
    } catch {}
}
Pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = qm;
Pt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!di(t)) throw Error(ae(200));
  return Fm(e, t, null, n);
};
Pt.createRoot = function (e, t) {
  if (!di(e)) throw Error(ae(299));
  var n = !1,
    s = "",
    o = $u;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (s = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = ai(e, 1, !1, null, null, n, !1, s, o)),
    (e[un] = t.current),
    hs(e.nodeType === 8 ? e.parentNode : e),
    new ci(t)
  );
};
Pt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(ae(188))
      : ((e = Object.keys(e).join(",")), Error(ae(268, e)));
  return (e = sd(t)), (e = e === null ? null : e.stateNode), e;
};
Pt.flushSync = function (e) {
  return Kn(e);
};
Pt.hydrate = function (e, t, n) {
  if (!Wo(t)) throw Error(ae(200));
  return Yo(null, e, t, !0, n);
};
Pt.hydrateRoot = function (e, t, n) {
  if (!di(e)) throw Error(ae(405));
  var s = (n != null && n.hydratedSources) || null,
    o = !1,
    l = "",
    a = $u;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = Au(t, null, e, 1, n ?? null, o, !1, l, a)),
    (e[un] = t.current),
    hs(e),
    s)
  )
    for (e = 0; e < s.length; e++)
      (n = s[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new qo(t);
};
Pt.render = function (e, t, n) {
  if (!Wo(t)) throw Error(ae(200));
  return Yo(null, e, t, !1, n);
};
Pt.unmountComponentAtNode = function (e) {
  if (!Wo(e)) throw Error(ae(40));
  return e._reactRootContainer
    ? (Kn(function () {
        Yo(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[un] = null);
        });
      }),
      !0)
    : !1;
};
Pt.unstable_batchedUpdates = ri;
Pt.unstable_renderSubtreeIntoContainer = function (e, t, n, s) {
  if (!Wo(n)) throw Error(ae(200));
  if (e == null || e._reactInternals === void 0) throw Error(ae(38));
  return Yo(e, t, n, !1, s);
};
Pt.version = "18.3.1-next-f1338f8080-20240426";
function Ou() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ou);
    } catch (e) {
      console.error(e);
    }
}
Ou(), (Oc.exports = Pt);
var Ym = Oc.exports,
  Lu,
  Nc = Ym;
(Lu = Nc.createRoot), Nc.hydrateRoot;
class Xm {
  constructor() {
    (this.config = null), (this.isConfigLoaded = !1);
  }
  async loadConfig() {
    var t;
    if (this.config && this.isConfigLoaded) return this.config;
    try {
      const n = await fetch("../config.txt");
      if (!n.ok) throw new Error(`Failed to load config: ${n.status}`);
      const s = await n.text();
      if (
        ((this.config = JSON.parse(s)),
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
      const s = await this.getMedicineCloud();
      if (s.Code !== 200 || !s.Data)
        return console.error("API returned error:", s), [];
      let o = s.Data;
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
    } catch (s) {
      return console.error("Medicine search failed:", s), [];
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
  async updateEpd266Storages(t, n, s) {
    const o = { ServerName: t, ServerType: n, Data: s };
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
    const s = { ValueAry: [t, n] };
    return this.request("/api/medMap/add_medMap_section", {
      method: "POST",
      body: JSON.stringify(s),
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
    const s = { ValueAry: [t, n] };
    return this.request("/api/medMap/add_sub_section", {
      method: "POST",
      body: JSON.stringify(s),
    });
  }
  async updateSubSection(t) {
    const n = { Data: t };
    return this.request("/api/medMap/update_sub_section", {
      method: "POST",
      body: JSON.stringify(n),
    });
  }
  async updateMedMapSection(t) {
    const n = { Data: t };
    return this.request("/api/medMap/update_medMap_section", {
      method: "POST",
      body: JSON.stringify(n),
    });
  }
  async updateEpd266Medcode(t, n, s, o) {
    const l = {
      ServerName: t,
      ServerType: n,
      ValueAry: [`code=${s}`],
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
  async deleteStockByGUID(t) {
    const n = { ValueAry: t };
    return this.request("/api/medMap/delete_stock_by_GUID", {
      method: "POST",
      body: JSON.stringify(n),
    });
  }
  async addMedMap(t, n, s) {
    const o = { ValueAry: [t, n, s, "0,0"] };
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
  async lightByCodeNameType(t, n, s, o, l) {
    const a = {
      Method: "light_by_code_name_type",
      ValueAry: [
        `ServerName=${t}`,
        `ServerType=${n}`,
        `code=${s}`,
        `color=${o}`,
        `lightness=${l}`,
      ],
      Data: {},
    };
    return this.request("/api/medMap/light_by_code_name_type", {
      method: "POST",
      body: JSON.stringify(a),
    });
  }
  async addMedClouds(t, n, s, o) {
    let l = o;
    l.push(t);
    const a = {
      Data: [{ BARCODE: l, CODE: n, BARCODE2: s || JSON.stringify([t]) }],
    };
    return this.request("/api/MED_page/add_med_clouds", {
      method: "POST",
      body: JSON.stringify(a),
    });
  }
  async stockDeleteValidityPeriod(t, n) {
    const s = { ValueAry: [t, n] };
    return this.request("/api/medMap/stock_delete_Validity_period", {
      method: "POST",
      body: JSON.stringify(s),
    });
  }
  resetConfig() {
    (this.config = null), (this.isConfigLoaded = !1);
  }
  async getRequisitionByTime(t, n) {
    const s = { ValueAry: [t, n] };
    return this.request("/api/materialRequisition/get_by_requestTime", {
      method: "POST",
      body: JSON.stringify(s),
    });
  }
  async getDistributionByTime(t, n) {
    const s = { ValueAry: [t, n] };
    return this.request("/api/drugStotreDistribution/get_by_addedTime", {
      method: "POST",
      body: JSON.stringify(s),
    });
  }
  async updateRequisitionNotice(t, n) {
    const s = { Data: { GUID: t, notice: n } };
    return this.request("/api/materialRequisition/update_notice", {
      method: "POST",
      body: JSON.stringify(s),
    });
  }
  async updateDistributionNotice(t, n) {
    const s = { ValueAry: [t, n] };
    return (
      console.log(s),
      this.request("/api/drugStotreDistribution/update_notice", {
        method: "POST",
        body: JSON.stringify(s),
      })
    );
  }
  async updateRequisitionActualQuantity(t, n) {
    const s = { Data: { GUID: t, actualQuantity: n } };
    return this.request("/api/materialRequisition/update_actual_quantity", {
      method: "POST",
      body: JSON.stringify(s),
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
    const s = { ValueAry: [t, n] };
    return this.request("/api/drugStotreDistribution/update_actqty_by_guid", {
      method: "POST",
      body: JSON.stringify(s),
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
  async deleteParentContainer(t) {
    const n = { Data: [{ GUID: t }] };
    return this.request("/api/medMap/delete_section", {
      method: "POST",
      body: JSON.stringify(n),
    });
  }
  async deleteSubContainer(t) {
    const n = { Data: [{ GUID: t }] };
    return this.request("/api/medMap/delete_sub_section", {
      method: "POST",
      body: JSON.stringify(n),
    });
  }
  async deleteShelfContainer(t) {
    const n = { Data: [{ GUID: t }] };
    return this.request("/api/medMap/delete_shelf", {
      method: "POST",
      body: JSON.stringify(n),
    });
  }
}
const De = new Xm();
class Qm {
  convertMedMapApiToFakeData(t) {
    console.log("🔄 開始轉換 MedMap API 資料到假資料格式"),
      console.log("📥 原始 API 資料:", t);
    try {
      Array.isArray(t) ||
        (console.warn("⚠️ API 資料不是陣列格式，嘗試包裝成陣列"), (t = [t]));
      const s = t
        .map((o, l) => this.convertSingleDepartment(o, l))
        .filter((o) => {
          if (Object.keys(o).length !== 0) return o;
        });
      return console.log("✅ MedMap 資料轉換完成，結果:", s), s;
    } catch (n) {
      return console.error("❌ MedMap 資料轉換失敗:", n), [];
    }
  }
  convertSingleDepartment(t, n) {
    if (Object.keys(t).length !== 0) {
      let s;
      t.absolute_position ? (s = t.absolute_position.split(",")) : (s = [0, 0]);
      const o = {
        GUID: t.GUID || t.guid || `dept_${n}_${Date.now()}`,
        Master_GUID: t.Master_GUID,
        type: t.sys_ServerSetting.type || "",
        name: t.sys_ServerSetting.name || "",
        gird_position: t.position,
        position: { x: s[0], y: s[1] },
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
                name: l.name,
                type: "parent_container",
                class: 1,
                gird_position: l.position,
                position: { x: i[0], y: i[1] },
                serverName: t.sys_ServerSetting.name,
                serverType: t.sys_ServerSetting.type,
                device_type: t.sys_ServerSetting.device_type,
                ip_light: l.ip_light,
                contents: [],
                med_list: [],
              }),
              Array.isArray(l.sub_section) &&
                l.sub_section.forEach((c, x) => {
                  let g = {
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
                  o.contents[a].contents[x] = g;
                  let h = 0;
                  Array.isArray(c.shelf) &&
                    c.shelf.forEach((p, j) => {
                      let S = {
                        GUID: p.GUID,
                        Master_GUID: p.Master_GUID,
                        name: p.name,
                        class: 3,
                        gird_position: p.position,
                        serverName: p.serverName || "",
                        serverType: p.serverType || "",
                        device_type: p.device_type || "",
                        type: p.type,
                        contents: [],
                        ip: p.ip_light,
                        width: p.width,
                        height: p.height,
                      };
                      if (
                        (S.serverName &&
                          (S.serverName = t.sys_ServerSetting.name),
                        S.serverType &&
                          (S.serverType = t.sys_ServerSetting.type),
                        p.type == "dispensing_shelves" || p.type == "shelf")
                      )
                        p.type == "shelf" && (S.type = "dispensing_shelves"),
                          Array.isArray(p.medMapBox) &&
                            p.medMapBox.forEach((R, d) => {
                              let u = {
                                  GUID: R.GUID,
                                  Master_GUID: R.Master_GUID,
                                  name: "藥盒",
                                  class: 4,
                                  gird_position: R.position,
                                  ip: R.ip_box,
                                  box_type: "",
                                  width: R.width,
                                  height: R.height,
                                  serverType: R.serverType,
                                  serverName: R.serverName,
                                  med_info: [],
                                  type: "med_box",
                                },
                                m = {},
                                D = p.position.split(","),
                                T = R.position.split(",");
                              if (R.storage) {
                                switch (
                                  ((u.device_type = R.storage.DeviceType),
                                  (u.storage = R.storage),
                                  +u.device_type)
                                ) {
                                  case 10:
                                    u.box_type = "2.9";
                                    break;
                                  case 118:
                                    u.box_type = "2.13";
                                    break;
                                  case 13:
                                    u.box_type = "4.2";
                                    break;
                                }
                                (m.name = R.storage.Name),
                                  (m.code = R.storage.Code),
                                  (m.cht_name = R.storage.ChineseName),
                                  (m.SKDIACODE = R.storage.SKDIACODE),
                                  (m.device_type = R.storage.device_type),
                                  (m.qty = R.storage.StorageName),
                                  (m.stockCol = `${+D[0] + 1}`),
                                  (m.stockRow = ""),
                                  (m.stock = `${+T[1] + 1}`);
                              } else
                                (u.device_type = 10),
                                  (u.box_type = "2.9"),
                                  (m.name = ""),
                                  (m.code = ""),
                                  (m.cht_name = ""),
                                  (m.stockCol = `${+D[0] + 1}`),
                                  (m.stockRow = ""),
                                  (m.stock = `${+T[1] + 1}`);
                              o.contents[a].med_list.push(m),
                                (u.med_info[0] = m),
                                S.contents.push(u);
                            });
                      else {
                        S.type = "store_shelves";
                        const R = p.medMapStock.sort((d, u) => {
                          const [m] = d.location.split(",").map(Number),
                            [D] = u.location.split(",").map(Number);
                          return m - D;
                        });
                        (S.medMapStock = R),
                          (S.name = p.name),
                          R.forEach((d, u) => {
                            let m = p.position.split(","),
                              D = c.position.split(",");
                            if (d.code) {
                              let T = {};
                              (T.name = d.name),
                                (T.code = d.code),
                                (T.cht_name = ""),
                                (T.SKDIACODE = d.material_no),
                                (T.qty = d.qty),
                                (T.stockCol = `${+m[0] + 1}`),
                                (T.stockRow = `${+D[1] + 1}`),
                                (T.stock = `${u + 1}`),
                                o.contents[a].med_list.push(T);
                            }
                          });
                      }
                      let C = p.position.split(",")[1];
                      h < +C &&
                        ((h = +C), (o.contents[a].contents[x].oriMaxCol = +h)),
                        o.contents[a].contents[x].contents.push(S);
                    }),
                    Array.isArray(c.drawer) &&
                      c.drawer.forEach((p, j) => {
                        let S = {
                          GUID: p.GUID,
                          Master_GUID: p.Master_GUID,
                          name: `抽屜 ${j}`,
                          class: 3,
                          gird_position: p.position,
                          ip: p.ip_drawer,
                          serverName: p.serverName,
                          serverType: p.serverType,
                        };
                        S.serverName &&
                          (S.serverName = t.sys_ServerSetting.name),
                          S.serverType &&
                            (S.serverType = t.sys_ServerSetting.type),
                          p.drawer
                            ? ((S.drawer = p.drawer),
                              p.drawer.Boxes &&
                                ((S.type = "grid_draw"),
                                (S.name = p.drawer.Name),
                                (S.Boxes = []),
                                Array.isArray(p.drawer.Boxes)
                                  ? p.drawer.Boxes.forEach((d, u) => {
                                      let m = [];
                                      Array.isArray(d) &&
                                        d.forEach((D, T) => {
                                          let _ = {
                                            Row: D.Row,
                                            Column: D.Column,
                                            Width: 1,
                                            Height: 1,
                                            Slave: D.Slave,
                                            SlaveBox_Row: D.SlaveBox_Row,
                                            SlaveBox_Column: D.SlaveBox_Column,
                                            MasterBox_Column:
                                              D.MasterBox_Column,
                                            MasterBox_Row: D.MasterBox_Row,
                                            Name: D.Name,
                                            Code: D.Code,
                                            ChineseName: D.ChineseName,
                                            GUID: D.GUID,
                                          };
                                          m.push(_),
                                            D.Code &&
                                              o.contents[a].med_list.push(
                                                D.Code
                                              );
                                        }),
                                        S.Boxes.push(m);
                                    })
                                  : (S.Boxes = p.drawer.Boxes)))
                            : ((S.type = "list_draw"),
                              (S.name = `清單抽屜 ${j}`));
                        let C = p.position.split(",")[1];
                        h < +C &&
                          ((h = +C),
                          (o.contents[a].contents[x].oriMaxCol = +h)),
                          o.contents[a].contents[x].contents.push(S);
                      });
                });
          }),
        o
      );
    } else return {};
  }
  convertSingleComponent(t, n, s) {
    var l, a, i, c, x;
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
        depth: ((x = t.dimensions) == null ? void 0 : x.depth) || t.depth || 30,
      },
      med_box: t.med_box || t.medBox || t.medicine_boxes || [],
      Master_GUID: s,
    };
    return (
      t.components &&
        Array.isArray(t.components) &&
        (o.components = t.components.map((g, h) =>
          this.convertSingleComponent(g, h, o.GUID)
        )),
      Object.keys(t).forEach((g) => {
        [
          "GUID",
          "type",
          "name",
          "position",
          "dimensions",
          "med_box",
          "components",
        ].includes(g) || (o[g] = t[g]);
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
          for (const s of n.components)
            if (!s.GUID || !s.type)
              return console.error("❌ 組件資料缺少必要欄位:", s), !1;
        }
      }
      return console.log("✅ 轉換後的資料結構驗證通過"), !0;
    } catch (n) {
      return console.error("❌ 資料驗證過程中發生錯誤:", n), !1;
    }
  }
  generateConversionReport(t, n) {
    const s = {
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
    return console.log("📊 資料轉換報告:", s), s;
  }
}
const ut = new Qm(),
  Km = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: ut },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Uu = f.createContext(void 0),
  Jm = ({ children: e }) => {
    const [t, n] = f.useState(!1),
      [s, o] = f.useState(null),
      [l, a] = f.useState(!1),
      [i, c] = f.useState(null),
      [x, g] = f.useState(null),
      [h, p] = f.useState("medicine"),
      [j, S] = f.useState(!1),
      [C, R] = f.useState(0),
      [d, u] = f.useState({ message: "", type: "success", isVisible: !1 }),
      [m, D] = f.useState(!1),
      [T, _] = f.useState(null),
      [P, V] = f.useState("edit"),
      [Q, K] = f.useState(!1),
      [pe, ye] = f.useState(null),
      [v, b] = f.useState(!1),
      [L, w] = f.useState(null),
      [N, k] = f.useState(!1),
      [M, J] = f.useState(!1),
      [z, X] = f.useState(null),
      [be, fe] = f.useState(!1),
      [U, xe] = f.useState(null),
      [F, ve] = f.useState(!1),
      [me, I] = f.useState(null),
      [ue, G] = f.useState(!1),
      [E, se] = f.useState(null),
      [le, B] = f.useState(null),
      [Z, ie] = f.useState("add"),
      [A, H] = f.useState(!1),
      [W, oe] = f.useState([]),
      [de, Ne] = f.useState([]),
      [ce, we] = f.useState(!1),
      [ke, Ie] = f.useState(!1),
      [We, Te] = f.useState(""),
      [Ke, Le] = f.useState(!1),
      [kt, Rt] = f.useState(""),
      [On, Gt] = f.useState(!1),
      [er, Or] = f.useState(null),
      [Ms, Lr] = f.useState(null),
      [Qo, y] = f.useState(!1),
      [te, Y] = f.useState(null),
      [$, q] = f.useState(!1),
      [O, ee] = f.useState(null),
      [re, he] = f.useState(null),
      ne = () => {
        sessionStorage.removeItem("user_session"), n(!1), o(null);
      },
      ge = f.useCallback(() => {
        R((Pe) => Pe + 1);
      }, []),
      je = f.useCallback((Pe, nt) => {
        u({ message: Pe, type: nt, isVisible: !0 });
      }, []),
      _e = f.useCallback(() => {
        u((Pe) => ({ ...Pe, isVisible: !1 }));
      }, []),
      Ce = (Pe) => {
        _(Pe), V("edit"), D(!0);
      },
      Me = () => {
        const Pe = {
          GUID: `new_medbox_${Date.now()}`,
          name: "",
          box_type: "",
          width: [],
          width_index: 0,
          med_info: [],
          parentShelf: null,
        };
        _(Pe), V("add"), D(!0);
      },
      Ee = () => {
        D(!1), _(null), V("edit");
      },
      Ze = (Pe) => {
        ye(Pe), K(!0);
      },
      Ln = () => {
        K(!1), ye(null);
      },
      Un = (Pe) => {
        w(Pe), b(!0);
      },
      Yu = () => {
        b(!1), w(null);
      },
      Xu = (Pe) => {
        X(Pe), J(!0);
      },
      Qu = () => {
        J(!1), X(null);
      },
      Ku = (Pe) => {
        xe(Pe), fe(!0);
      },
      Ju = () => {
        fe(!1), xe(null);
      },
      Zu = (Pe) => {
        I(Pe), ve(!0);
      },
      ef = () => {
        ve(!1), I(null);
      },
      tf = (Pe) => {
        se(Pe), B(null), ie("add"), G(!0);
      },
      nf = (Pe, nt) => {
        se(Pe), B(nt), ie("edit"), G(!0);
      },
      rf = () => {
        G(!1), se(null), B(null), ie("add");
      },
      sf = () => {
        H(!0);
      },
      of = () => {
        H(!1);
      },
      lf = (Pe = "") => {
        Te(Pe), Ie(!0);
      },
      af = () => {
        Ie(!1);
      },
      cf = (Pe) => {
        Rt(Pe), Le(!0);
      },
      df = () => {
        Le(!1), Rt("");
      },
      uf = (Pe, nt) => {
        Or(Pe), Lr(nt || null), Gt(!0);
      },
      ff = () => {
        Gt(!1), Or(null), Lr(null);
      },
      pf = (Pe) => {
        Y(Pe), y(!0);
      },
      mf = () => {
        y(!1), Y(null);
      },
      hf = (Pe) => {
        ee(Pe), q(!0);
      },
      gf = () => {
        q(!1), ee(null);
      },
      xf = f.useCallback(async () => {
        if (!i) {
          console.warn("沒有選擇部門分類，無法重新載入資料");
          return;
        }
        console.log("🔄 重新載入藥品地圖資料，部門類型:", i), k(!0);
        try {
          const Pe = await De.getMedMapByDepartment(i);
          if (Pe.Code === 200 && Pe.Data) {
            console.log("📡 重新載入成功:", Pe.Data);
            const nt = ut.convertMedMapApiToFakeData(Pe.Data);
            if (!ut.validateConvertedData(nt)) {
              console.error("❌ 轉換後的資料驗證失敗"), g(null);
              return;
            }
            g(nt), console.log("✅ 地圖資料已重新載入");
          } else console.error("❌ API 回傳錯誤:", Pe), g(null);
        } catch (Pe) {
          console.error("💥 重新載入藥品地圖資料失敗:", Pe), g(null);
        } finally {
          k(!1);
        }
      }, [i, k, g]),
      yf = f.useCallback((Pe, nt) => {
        g(
          (Dt) =>
            Dt &&
            Dt.map((At) => {
              const yt = { ...At };
              return (
                yt.contents &&
                  (yt.contents = yt.contents.map((tr) => {
                    const nr = { ...tr };
                    return (
                      nr.contents &&
                        (nr.contents = nr.contents.map((rr) => {
                          const sr = { ...rr };
                          return (
                            sr.contents &&
                              (sr.contents = sr.contents.map((hn) => {
                                if (hn.GUID === Pe) {
                                  const Ft = { ...hn };
                                  return (
                                    Ft.medMapStock || (Ft.medMapStock = []),
                                    (Ft.medMapStock = [...Ft.medMapStock, nt]),
                                    Ft
                                  );
                                }
                                return hn;
                              })),
                            sr
                          );
                        })),
                      nr
                    );
                  })),
                yt
              );
            })
        );
      }, []),
      vf = f.useCallback((Pe, nt, Dt) => {
        g(
          (rn) =>
            rn &&
            rn.map((yt) => {
              const tr = { ...yt };
              return (
                tr.contents &&
                  (tr.contents = tr.contents.map((nr) => {
                    const rr = { ...nr };
                    return (
                      rr.contents &&
                        (rr.contents = rr.contents.map((sr) => {
                          const hn = { ...sr };
                          return (
                            hn.contents &&
                              (hn.contents = hn.contents.map((Ft) => {
                                if (Ft.GUID === Pe && Ft.medMapStock) {
                                  const pi = { ...Ft };
                                  return (
                                    (pi.medMapStock = Ft.medMapStock.map((Ko) =>
                                      Ko.GUID === nt ? { ...Ko, ...Dt } : Ko
                                    )),
                                    pi
                                  );
                                }
                                return Ft;
                              })),
                            hn
                          );
                        })),
                      rr
                    );
                  })),
                tr
              );
            })
        );
      }, []),
      wf = f.useCallback((Pe, nt) => {
        g((Dt) => {
          if (!Dt) return Dt;
          const rn = (At) =>
            At.map((yt) =>
              yt.GUID === Pe
                ? { ...yt, ...nt }
                : yt.contents && Array.isArray(yt.contents)
                ? { ...yt, contents: rn(yt.contents) }
                : yt
            );
          return rn(Dt);
        });
      }, []),
      bf = f.useCallback((Pe) => {
        g((nt) => {
          if (!nt) return nt;
          const Dt = (rn) =>
            rn
              .filter((At) => At.GUID !== Pe)
              .map((At) =>
                At.contents && Array.isArray(At.contents)
                  ? { ...At, contents: Dt(At.contents) }
                  : At
              );
          return Dt(nt);
        });
      }, []);
    return r.jsx(Uu.Provider, {
      value: {
        isAuthenticated: t,
        setIsAuthenticated: n,
        currentUser: s,
        setCurrentUser: o,
        logout: ne,
        sidebarOpen: l,
        setSidebarOpen: a,
        selectedDepartmentType: i,
        setSelectedDepartmentType: c,
        isAdminMode: j,
        setIsAdminMode: S,
        apiDepartmentData: x,
        setApiDepartmentData: g,
        viewMode: h,
        setViewMode: p,
        refreshTrigger: C,
        triggerRefresh: ge,
        addStockToShelf: yf,
        notification: d,
        showNotification: je,
        hideNotification: _e,
        medBoxModalOpen: m,
        setMedBoxModalOpen: D,
        selectedMedBox: T,
        setSelectedMedBox: _,
        openMedBoxModal: Ce,
        closeMedBoxModal: Ee,
        modalMode: P,
        setModalMode: V,
        openAddMedBoxModal: Me,
        listDrawModalOpen: Q,
        setListDrawModalOpen: K,
        selectedListDraw: pe,
        setSelectedListDraw: ye,
        openListDrawModal: Ze,
        closeListDrawModal: Ln,
        gridDrawModalOpen: v,
        setGridDrawModalOpen: b,
        selectedGridDraw: L,
        setSelectedGridDraw: w,
        openGridDrawModal: Un,
        closeGridDrawModal: Yu,
        isLoadingMedMap: N,
        setIsLoadingMedMap: k,
        addParentContainerModalOpen: M,
        setAddParentContainerModalOpen: J,
        selectedDepartmentForAdd: z,
        setSelectedDepartmentForAdd: X,
        openAddParentContainerModal: Xu,
        closeAddParentContainerModal: Qu,
        addShelfDrawContainerModalOpen: be,
        setAddShelfDrawContainerModalOpen: fe,
        selectedSubContainerForAdd: U,
        setSelectedSubContainerForAdd: xe,
        openAddShelfDrawContainerModal: Ku,
        closeAddShelfDrawContainerModal: Ju,
        addSubContainerModalOpen: F,
        setAddSubContainerModalOpen: ve,
        selectedParentContainerForAdd: me,
        setSelectedParentContainerForAdd: I,
        openAddSubContainerModal: Zu,
        closeAddSubContainerModal: ef,
        addStoreItemModalOpen: ue,
        setAddStoreItemModalOpen: G,
        selectedStoreShelfForAdd: E,
        setSelectedStoreShelfForAdd: se,
        selectedStockItemForEdit: le,
        setSelectedStockItemForEdit: B,
        storeItemModalMode: Z,
        setStoreItemModalMode: ie,
        openAddStoreItemModal: tf,
        openEditStoreItemModal: nf,
        closeAddStoreItemModal: rf,
        updateStockInShelf: vf,
        updateContainerInLocalData: wf,
        removeContainerFromLocalData: bf,
        addDepartmentModalOpen: A,
        setAddDepartmentModalOpen: H,
        allDepartmentsList: W,
        setAllDepartmentsList: oe,
        openAddDepartmentModal: sf,
        closeAddDepartmentModal: of,
        reloadMedMapData: xf,
        qrCodeScannerModalOpen: ke,
        qrCodeScannerMode: We,
        setQRCodeScannerModalOpen: Ie,
        openQRCodeScannerModal: lf,
        closeQRCodeScannerModal: af,
        addBarcodeModalOpen: Ke,
        setAddBarcodeModalOpen: Le,
        openAddBarcodeModal: cf,
        closeAddBarcodeModal: df,
        initialBarcodeValue: kt,
        containerDetailModalOpen: On,
        setContainerDetailModalOpen: Gt,
        selectedContainerForDetail: er,
        setSelectedContainerForDetail: Or,
        highlightedMedicineCode: Ms,
        setHighlightedMedicineCode: Lr,
        openContainerDetailModal: uf,
        closeContainerDetailModal: ff,
        editStoreShelfModalOpen: Qo,
        setEditStoreShelfModalOpen: y,
        selectedStoreShelfForEdit: te,
        setSelectedStoreShelfForEdit: Y,
        openEditStoreShelfModal: pf,
        closeEditStoreShelfModal: mf,
        activeCanvas: re,
        setActiveCanvas: he,
        editParentContainerModalOpen: $,
        setEditParentContainerModalOpen: q,
        selectedParentContainerForEdit: O,
        setSelectedParentContainerForEdit: ee,
        openEditParentContainerModal: hf,
        closeEditParentContainerModal: gf,
        medicineList: de,
        setMedicineList: Ne,
        isLoadingMedicines: ce,
        setIsLoadingMedicines: we,
      },
      children: e,
    });
  },
  Xe = () => {
    const e = f.useContext(Uu);
    if (e === void 0)
      throw new Error("useDrugMap must be used within a DrugMapProvider");
    return e;
  },
  Zm = {
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
  Bu = f.createContext(void 0),
  eh = ({ children: e }) => {
    const [t, n] = f.useState("zh-TW"),
      s = (o) => Zm[t][o] || o;
    return r.jsx(Bu.Provider, {
      value: { language: t, setLanguage: n, t: s },
      children: e,
    });
  },
  xt = () => {
    const e = f.useContext(Bu);
    if (e === void 0)
      throw new Error("useLanguage must be used within a LanguageProvider");
    return e;
  };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var th = {
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
 */ const nh = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  $e = (e, t) => {
    const n = f.forwardRef(
      (
        {
          color: s = "currentColor",
          size: o = 24,
          strokeWidth: l = 2,
          absoluteStrokeWidth: a,
          className: i = "",
          children: c,
          ...x
        },
        g
      ) =>
        f.createElement(
          "svg",
          {
            ref: g,
            ...th,
            width: o,
            height: o,
            stroke: s,
            strokeWidth: a ? (Number(l) * 24) / Number(o) : l,
            className: ["lucide", `lucide-${nh(e)}`, i].join(" "),
            ...x,
          },
          [
            ...t.map(([h, p]) => f.createElement(h, p)),
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
 */ const rh = $e("Archive", [
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
 */ const jc = $e("Bell", [
  ["path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9", key: "1qo2s2" }],
  ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zu = $e("Building2", [
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
 */ const Tr = $e("Camera", [
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
 */ const sh = $e("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ws = $e("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gu = $e("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const oh = $e("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lh = $e("ChevronUp", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fu = $e("EyeOff", [
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
 */ const Vu = $e("Eye", [
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
 */ const ah = $e("Globe", [
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
 */ const Hu = $e("Grid3x3", [
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
 */ const ui = $e("Layers", [
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
 */ const ih = $e("Lightbulb", [
  [
    "path",
    {
      d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
      key: "1gvzjb",
    },
  ],
  ["path", { d: "M9 18h6", key: "x1upvd" }],
  ["path", { d: "M10 22h4", key: "ceow96" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ch = $e("ListX", [
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
 */ const ga = $e("List", [
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
 */ const Ct = $e("Loader2", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fi = $e("Lock", [
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
 */ const dh = $e("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const uh = $e("Package", [
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
 */ const yr = $e("Pen", [
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
 */ const fh = $e("Pill", [
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
 */ const bt = $e("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jn = $e("Settings", [
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
 */ const vr = $e("Trash2", [
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
 */ const qu = $e("Unlock", [
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
 */ const ph = $e("Warehouse", [
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
 */ const mh = $e("XCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fe = $e("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  hh = () => {
    const { sidebarOpen: e, setSidebarOpen: t } = Xe(),
      { t: n } = xt();
    return r.jsx("div", {
      className: "fixed top-4 left-4 z-30",
      children: r.jsx("nav", {
        className:
          "bg-white/95 backdrop-blur-sm border border-gray-200/50 rounded-xl shadow-lg px-2 py-1",
        children: r.jsxs("div", {
          className: "flex items-center",
          children: [
            r.jsx("a", {
              href: "../frontpage",
              className:
                "p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 rounded-lg transition-colors",
              title: n("nav.home"),
              children: r.jsx(ui, { className: "w-5 h-5" }),
            }),
            r.jsx("div", {
              className: "ml-2 text-lg font-semibold text-gray-900",
              children: n("nav.title"),
            }),
            r.jsx("button", {
              onClick: () => t(!e),
              className:
                "ml-8 p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 rounded-lg transition-colors",
              title: n(e ? "nav.collapseSidebar" : "nav.expandSidebar"),
              children: e
                ? r.jsx(ga, { className: "w-6 h-6" })
                : r.jsx(ga, { className: "w-6 h-6" }),
            }),
          ],
        }),
      }),
    });
  },
  gh = () => {
    const {
        viewMode: e,
        setViewMode: t,
        logout: n,
        currentUser: s,
        selectedDepartmentType: o,
        openAddDepartmentModal: l,
        apiDepartmentData: a,
        allDepartmentsList: i,
      } = Xe(),
      { language: c, setLanguage: x, t: g } = xt(),
      [h, p] = ao.useState(!1),
      j = () => {
        x(c === "zh-TW" ? "en" : "zh-TW");
      },
      S = ao.useMemo(() => {
        if (!o || !i || !a) return !1;
        const C = a.map((u) => u.name);
        return (
          i
            .filter((u) => u["department_type "] === o)
            .filter((u) => !C.includes(u.name)).length > 0
        );
      }, [o, i, a]);
    return r.jsx("div", {
      className:
        "fixed top-20 left-4 right-auto sm:top-4 sm:left-auto sm:right-4 z-30",
      children: r.jsx("div", {
        className:
          "bg-white/95 backdrop-blur-sm border border-gray-200/50 rounded-xl shadow-lg px-2 py-1 sm:px-3 sm:py-2",
        children: r.jsxs("div", {
          className:
            "flex items-center gap-2 lg:gap-0 lg:space-x-2 flex-col lg:flex-row relative",
          children: [
            r.jsxs("div", {
              className: "flex items-center",
              children: [
                r.jsxs("div", {
                  className: "flex items-center bg-gray-100 rounded-lg p-1",
                  children: [
                    r.jsxs("button", {
                      onClick: () => t("medicine"),
                      className: `flex items-center space-x-2 px-3 py-1.5 rounded-md transition-all duration-300 ease-in-out transform ${
                        e === "medicine"
                          ? "bg-white text-green-600 shadow-sm scale-105"
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-50 hover:scale-102"
                      }`,
                      children: [
                        r.jsx(fh, { className: "w-4 h-4" }),
                        r.jsx("span", {
                          className: "text-sm font-medium",
                          children: g("topbar.medicine"),
                        }),
                      ],
                    }),
                    r.jsxs("button", {
                      onClick: () => t("department"),
                      className: `flex items-center space-x-2 px-3 py-1.5 rounded-md transition-all duration-300 ease-in-out transform ${
                        e === "department"
                          ? "bg-white text-blue-600 shadow-sm scale-105"
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-50 hover:scale-102"
                      }`,
                      children: [
                        r.jsx(zu, { className: "w-4 h-4" }),
                        r.jsx("span", {
                          className: "text-sm font-medium",
                          children: g("topbar.department"),
                        }),
                      ],
                    }),
                  ],
                }),
                r.jsx("button", {
                  onClick: () => p(!h),
                  className:
                    "lg:hidden flex items-center justify-center p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 rounded-lg transition-colors",
                  children: h
                    ? r.jsx(lh, { className: "w-4 h-4" })
                    : r.jsx(Gu, { className: "w-4 h-4" }),
                }),
              ],
            }),
            r.jsxs("div", {
              className: `
            flex items-center gap-2 lg:gap-0 lg:space-x-2 flex-col lg:flex-row
            lg:flex lg:opacity-100 lg:max-h-none
            transition-all duration-300 ease-in-out overflow-hidden
            ${
              h
                ? "flex opacity-100 max-h-96"
                : "hidden opacity-0 max-h-0 lg:flex lg:opacity-100 lg:max-h-none"
            }
          `,
              children: [
                r.jsx("div", {
                  className: "mx-1 w-full lg:w-px lg:h-6 h-px bg-gray-300",
                }),
                o &&
                  S &&
                  r.jsxs(r.Fragment, {
                    children: [
                      r.jsxs("button", {
                        onClick: () => l(),
                        className:
                          "w-full lg:w-auto flex justify-center items-center space-x-2 px-3 py-1.5 text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors border border-green-700",
                        children: [
                          r.jsx(bt, { className: "w-4 h-4" }),
                          r.jsx("span", {
                            className: "text-sm font-medium",
                            children: "新增部門",
                          }),
                        ],
                      }),
                      r.jsx("div", {
                        className: "w-full lg:w-px lg:h-6 h-px bg-gray-300",
                      }),
                    ],
                  }),
                r.jsxs("button", {
                  onClick: j,
                  className:
                    "w-full lg:w-auto flex justify-center items-center space-x-2 px-3 py-1.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 rounded-lg transition-colors border",
                  children: [
                    r.jsx(ah, { className: "w-4 h-4" }),
                    r.jsx("span", {
                      className: "text-sm font-medium",
                      children: g("topbar.language"),
                    }),
                  ],
                }),
                r.jsx("div", {
                  className: "w-full lg:w-px lg:h-6 h-px bg-gray-300",
                }),
                s &&
                  r.jsx("div", {
                    className:
                      "w-full lg:w-auto flex justify-center items-center space-x-2 px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg",
                    children: r.jsx("span", {
                      className: "text-sm font-medium text-gray-700",
                      children: s.Name,
                    }),
                  }),
                r.jsxs("button", {
                  onClick: n,
                  className:
                    "w-full lg:w-auto flex items-center space-x-2 px-3 py-1.5 bg-red-50 hover:bg-red-100 text-red-600 hover:text-red-700 border border-red-200 rounded-lg transition-colors justify-center",
                  children: [
                    r.jsx(dh, { className: "w-4 h-4" }),
                    r.jsx("span", {
                      className: "text-sm font-medium",
                      children: g("topbar.logout"),
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
  xh = [
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
  yh = ({ isOpen: e, onClose: t }) => {
    const [n, s] = f.useState("blue"),
      [o, l] = f.useState(1),
      [a, i] = f.useState(60),
      [c, x] = f.useState(""),
      [g, h] = f.useState(""),
      [p, j] = f.useState([]),
      [S, C] = f.useState([]),
      [R, d] = f.useState([]),
      [u, m] = f.useState(!1),
      [D, T] = f.useState(!1),
      _ = f.useRef(null),
      P = f.useRef(null),
      V = f.useRef(null),
      Q = f.useRef(null);
    f.useEffect(() => {
      if (e) {
        const w = localStorage.getItem("medMap_setting");
        if (w)
          try {
            const N = JSON.parse(w);
            s(N.light_color || "blue"),
              l(N.brightness !== void 0 ? N.brightness : 1),
              i(N.light_sec !== void 0 ? N.light_sec : 60),
              x(N.default_person || ""),
              h(N.default_person_id || "");
          } catch (N) {
            console.error("讀取設定失敗:", N),
              s("blue"),
              l(1),
              i(60),
              x(""),
              h("");
          }
        else s("blue"), l(1), i(60), x(""), h("");
        K();
      }
    }, [e]),
      f.useEffect(() => {
        const w = (N) => {
          V.current &&
            !V.current.contains(N.target) &&
            _.current &&
            !_.current.contains(N.target) &&
            m(!1),
            Q.current &&
              !Q.current.contains(N.target) &&
              P.current &&
              !P.current.contains(N.target) &&
              T(!1);
        };
        return (
          document.addEventListener("mousedown", w),
          () => document.removeEventListener("mousedown", w)
        );
      }, []);
    const K = async () => {
        try {
          const w = await De.getAllStaffInfo();
          w.Code === 200 && w.Data && j(w.Data);
        } catch (w) {
          console.error("獲取人員資料失敗:", w);
        }
      },
      pe = (w) => {
        if ((x(w), w.trim() === "")) {
          C([]), m(!1);
          return;
        }
        const N = p.filter(
          (k) => k.name && k.name.toLowerCase().includes(w.toLowerCase())
        );
        C(N), m(N.length > 0);
      },
      ye = (w) => {
        if ((h(w), w.trim() === "")) {
          d([]), T(!1);
          return;
        }
        const N = p.filter(
          (k) => k.ID && k.ID.toLowerCase().includes(w.toLowerCase())
        );
        d(N), T(N.length > 0);
      },
      v = (w) => {
        x(w.name), h(w.ID), m(!1);
      },
      b = (w) => {
        x(w.name), h(w.ID), T(!1);
      },
      L = () => {
        const w = {
          light_color: n,
          brightness: o,
          light_sec: a,
          default_person: c,
          default_person_id: g,
        };
        localStorage.setItem("medMap_setting", JSON.stringify(w)),
          console.log("設定已儲存:", w),
          t();
      };
    return e
      ? r.jsxs("div", {
          className: "fixed inset-0 z-50 flex items-center justify-center p-4",
          children: [
            r.jsx("div", {
              className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
              onClick: t,
            }),
            r.jsxs("div", {
              className:
                "relative bg-white rounded-xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto",
              children: [
                r.jsxs("div", {
                  className:
                    "flex items-center justify-between p-4 border-b border-gray-200 sticky top-0 bg-white z-10",
                  children: [
                    r.jsx("h2", {
                      className: "text-xl font-semibold text-gray-900",
                      children: "設定",
                    }),
                    r.jsx("button", {
                      onClick: t,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: r.jsx(Fe, { className: "w-5 h-5" }),
                    }),
                  ],
                }),
                r.jsxs("div", {
                  className: "p-6 space-y-6",
                  children: [
                    r.jsxs("div", {
                      children: [
                        r.jsx("label", {
                          className:
                            "block text-sm font-medium text-gray-700 mb-3",
                          children: "預設撥補/申領人員",
                        }),
                        r.jsxs("div", {
                          className: "grid grid-cols-2 gap-3",
                          children: [
                            r.jsxs("div", {
                              className: "relative",
                              children: [
                                r.jsx("label", {
                                  className: "block text-xs text-gray-600 mb-1",
                                  children: "人員名稱",
                                }),
                                r.jsx("input", {
                                  ref: _,
                                  type: "text",
                                  value: c,
                                  onChange: (w) => pe(w.target.value),
                                  onFocus: () => {
                                    c.trim() && pe(c);
                                  },
                                  placeholder: "請輸入人員名稱",
                                  className:
                                    "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                                }),
                                u &&
                                  r.jsx("div", {
                                    ref: V,
                                    className:
                                      "absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto",
                                    children: S.map((w, N) =>
                                      r.jsxs(
                                        "div",
                                        {
                                          onClick: () => v(w),
                                          className:
                                            "px-4 py-2 hover:bg-blue-50 cursor-pointer transition-colors",
                                          children: [
                                            r.jsx("div", {
                                              className:
                                                "font-medium text-gray-900",
                                              children: w.name,
                                            }),
                                            r.jsx("div", {
                                              className:
                                                "text-xs text-gray-500",
                                              children: w.ID,
                                            }),
                                          ],
                                        },
                                        N
                                      )
                                    ),
                                  }),
                              ],
                            }),
                            r.jsxs("div", {
                              className: "relative",
                              children: [
                                r.jsx("label", {
                                  className: "block text-xs text-gray-600 mb-1",
                                  children: "人員 ID",
                                }),
                                r.jsx("input", {
                                  ref: P,
                                  type: "text",
                                  value: g,
                                  onChange: (w) => ye(w.target.value),
                                  onFocus: () => {
                                    g.trim() && ye(g);
                                  },
                                  placeholder: "請輸入人員 ID",
                                  className:
                                    "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                                }),
                                D &&
                                  r.jsx("div", {
                                    ref: Q,
                                    className:
                                      "absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto",
                                    children: R.map((w, N) =>
                                      r.jsxs(
                                        "div",
                                        {
                                          onClick: () => b(w),
                                          className:
                                            "px-4 py-2 hover:bg-blue-50 cursor-pointer transition-colors",
                                          children: [
                                            r.jsx("div", {
                                              className:
                                                "font-medium text-gray-900",
                                              children: w.ID,
                                            }),
                                            r.jsx("div", {
                                              className:
                                                "text-xs text-gray-500",
                                              children: w.name,
                                            }),
                                          ],
                                        },
                                        N
                                      )
                                    ),
                                  }),
                              ],
                            }),
                          ],
                        }),
                        r.jsx("p", {
                          className: "mt-2 text-xs text-gray-500",
                          children: "設定後將自動填入撥補/申領表單中",
                        }),
                      ],
                    }),
                    r.jsxs("div", {
                      children: [
                        r.jsx("label", {
                          className:
                            "block text-sm font-medium text-gray-700 mb-3",
                          children: "亮燈顏色 (BGR)",
                        }),
                        r.jsx("div", {
                          className: "grid grid-cols-3 gap-3",
                          children: xh.map((w) =>
                            r.jsxs(
                              "button",
                              {
                                onClick: () => s(w.value),
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
                                  r.jsxs("div", {
                                    className: "text-center",
                                    children: [
                                      r.jsx("div", {
                                        className: "font-semibold text-sm mb-1",
                                        children: w.name,
                                      }),
                                      r.jsx("div", {
                                        className: "text-xs opacity-90",
                                        children: w.bgr,
                                      }),
                                    ],
                                  }),
                                  n === w.value &&
                                    r.jsx("div", {
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
                    r.jsxs("div", {
                      children: [
                        r.jsxs("label", {
                          className:
                            "block text-sm font-medium text-gray-700 mb-2",
                          children: ["亮度: ", o.toFixed(1)],
                        }),
                        r.jsxs("div", {
                          className: "relative",
                          children: [
                            r.jsx("input", {
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
                            r.jsxs("div", {
                              className:
                                "flex justify-between text-xs text-gray-500 mt-1",
                              children: [
                                r.jsx("span", { children: "0" }),
                                r.jsx("span", { children: "0.5" }),
                                r.jsx("span", { children: "1" }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    r.jsxs("div", {
                      children: [
                        r.jsxs("label", {
                          className:
                            "block text-sm font-medium text-gray-700 mb-2",
                          children: ["自動滅燈時間 (秒): ", a],
                        }),
                        r.jsxs("div", {
                          className: "relative",
                          children: [
                            r.jsx("input", {
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
                            r.jsxs("div", {
                              className:
                                "flex justify-between text-xs text-gray-500 mt-1",
                              children: [
                                r.jsx("span", { children: "5秒" }),
                                r.jsx("span", { children: "60秒" }),
                                r.jsx("span", { children: "120秒" }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                r.jsxs("div", {
                  className:
                    "flex justify-end gap-3 p-4 border-t border-gray-200 bg-gray-50 rounded-b-xl sticky bottom-0",
                  children: [
                    r.jsx("button", {
                      onClick: t,
                      className:
                        "px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors",
                      children: "取消",
                    }),
                    r.jsx("button", {
                      onClick: L,
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
  vh = ({ isOpen: e, onClose: t, onConfirm: n }) => {
    const [s, o] = f.useState(""),
      [l, a] = f.useState(!1);
    f.useEffect(() => {
      e && (o(""), a(!1));
    }, [e]);
    const i = (x) => {
        x.preventDefault(), s.trim() && n(s);
      },
      c = (x) => {
        x.key === "Escape" && t();
      };
    return e
      ? r.jsxs("div", {
          className: "fixed inset-0 z-50 flex items-center justify-center",
          children: [
            r.jsx("div", {
              className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
              onClick: t,
            }),
            r.jsxs("div", {
              className:
                "relative flex flex-col bg-white rounded-xl shadow-2xl border border-gray-200 w-[400px]",
              onClick: (x) => x.stopPropagation(),
              onKeyDown: c,
              children: [
                r.jsxs("div", {
                  className:
                    "flex items-center justify-between px-6 py-4 border-b border-gray-200",
                  children: [
                    r.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        r.jsx("div", {
                          className: "p-2 bg-blue-100 rounded-lg",
                          children: r.jsx(fi, {
                            className: "w-5 h-5 text-blue-600",
                          }),
                        }),
                        r.jsx("h2", {
                          className: "text-xl font-semibold text-gray-900",
                          children: "後台模式驗證",
                        }),
                      ],
                    }),
                    r.jsx("button", {
                      type: "button",
                      onClick: t,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: r.jsx(Fe, { className: "w-6 h-6" }),
                    }),
                  ],
                }),
                r.jsx("form", {
                  onSubmit: i,
                  className: "flex-1 px-6 py-6",
                  children: r.jsxs("div", {
                    className: "space-y-4",
                    children: [
                      r.jsx("p", {
                        className: "text-sm text-gray-600",
                        children: "請輸入後台密碼以開啟管理員功能",
                      }),
                      r.jsxs("div", {
                        className: "relative",
                        children: [
                          r.jsx("input", {
                            type: "text",
                            value: s,
                            onChange: (x) => o(x.target.value),
                            className:
                              "w-full px-4 py-3 pr-12 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors",
                            placeholder: "請輸入密碼",
                            autoFocus: !0,
                          }),
                          r.jsx("button", {
                            type: "button",
                            onClick: () => a(!l),
                            className:
                              "absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600 transition-colors",
                            children: l
                              ? r.jsx(Fu, { className: "w-5 h-5" })
                              : r.jsx(Vu, { className: "w-5 h-5" }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                r.jsxs("div", {
                  className:
                    "flex items-center justify-end space-x-3 py-4 px-6 border-t border-gray-200",
                  children: [
                    r.jsx("button", {
                      type: "button",
                      onClick: t,
                      className:
                        "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                      children: "取消",
                    }),
                    r.jsx("button", {
                      type: "button",
                      onClick: i,
                      disabled: !s.trim(),
                      className:
                        "px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed",
                      children: "確認",
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      : null;
  },
  wh = () => {
    const {
        sidebarOpen: e,
        setSidebarOpen: t,
        selectedDepartmentType: n,
        setSelectedDepartmentType: s,
        setApiDepartmentData: o,
        isLoadingMedMap: l,
        setIsLoadingMedMap: a,
        setAllDepartmentsList: i,
        isAdminMode: c,
        setIsAdminMode: x,
      } = Xe(),
      { t: g } = xt(),
      [h, p] = f.useState(new Set()),
      [j, S] = f.useState([]),
      [C, R] = f.useState(!0),
      [d, u] = f.useState([]),
      [m, D] = f.useState(!1),
      [T, _] = f.useState(!1),
      P = () => {
        c ? x(!1) : _(!0);
      },
      V = (v) => {
        v === "66437068" ? (x(!0), _(!1)) : alert("密碼錯誤，無法開啟後台模式");
      };
    f.useEffect(() => {
      (async () => {
        R(!0);
        try {
          const b = await De.getDepartments();
          b.Code === 200 && b.Data
            ? (console.log(b.Data), S(b.Data), i(b.Data))
            : (console.error("API returned error:", b), S([]), i([]));
        } catch (b) {
          console.error("Failed to fetch department data:", b), S([]), i([]);
        } finally {
          R(!1);
        }
      })();
    }, []);
    const Q = j.reduce((v, b) => {
        const L = b["department_type "];
        return v[L] || (v[L] = []), v[L].push(b), v;
      }, {}),
      K = (v) => {
        const b = new Set(h);
        b.has(v) ? b.delete(v) : b.add(v), p(b);
      },
      pe = async (v) => {
        console.log("🏢 選擇部門:", v), s(v), await ye(v), t(!1);
      },
      ye = async (v) => {
        console.log("🚀 開始取得藥品地圖資料，部門類型:", v), a(!0);
        try {
          const b = await De.getMedMapByDepartment(v);
          if (b.Code === 200 && b.Data) {
            console.log("📡 API 回傳成功:", b.Data);
            const L = ut.convertMedMapApiToFakeData(b.Data);
            if (!ut.validateConvertedData(L)) {
              console.error("❌ 轉換後的資料驗證失敗"), u([]);
              return;
            }
            const N = ut.generateConversionReport(b.Data, L);
            u(L),
              o(L),
              console.log("💾 已暫存轉換後的資料到狀態中"),
              console.log("📊 最終轉換結果:", L),
              console.log("📋 轉換報告:", N);
          } else console.error("❌ API 回傳錯誤:", b), u([]), o(null);
        } catch (b) {
          console.error("💥 取得藥品地圖資料失敗:", b), u([]), o(null);
        } finally {
          a(!1);
        }
      };
    return r.jsxs(r.Fragment, {
      children: [
        e &&
          r.jsx("div", {
            className:
              "fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden",
            onClick: () => t(!1),
          }),
        r.jsx("div", {
          className: `fixed w-80 bg-white/95 backdrop-blur-sm shadow-xl border border-gray-200/50 z-50 transform transition-all duration-300 ease-in-out h-screen h-svh ${
            e ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`,
          children: r.jsxs("div", {
            className: "flex flex-col h-screen h-svh",
            children: [
              r.jsx("div", {
                className:
                  "flex-shrink-0 px-4 py-2 border-b border-gray-200/50",
                children: r.jsxs("div", {
                  className: "flex items-center justify-between",
                  children: [
                    r.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        r.jsx("a", {
                          href: "../frontpage",
                          className:
                            "text-gray-600 hover:text-gray-900 transition-colors p-2 rounded-lg hover:bg-gray-100/50",
                          title: g("nav.home"),
                          children: r.jsx(ui, { className: "w-5 h-5" }),
                        }),
                        r.jsx("h1", {
                          className: "text-lg font-semibold text-gray-900",
                          children: g("sidebar.drugMap"),
                        }),
                      ],
                    }),
                    r.jsx("button", {
                      type: "button",
                      onClick: () => t(!e),
                      className:
                        "p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 rounded-lg transition-colors",
                      title: g("sidebar.closeSidebar"),
                      children: r.jsx(ch, { className: "w-6 h-6" }),
                    }),
                  ],
                }),
              }),
              r.jsx("div", {
                className: "flex-1 overflow-y-auto p-4",
                children: C
                  ? r.jsx("div", {
                      className: "flex items-center justify-center py-8",
                      children: r.jsx("div", {
                        className: "text-gray-500",
                        children: "Loading departments...",
                      }),
                    })
                  : r.jsxs("div", {
                      className: "space-y-2",
                      children: [
                        r.jsx("h3", {
                          className:
                            "text-base font-semibold text-gray-700 mb-4",
                          children: g("sidebar.departmentCategories"),
                        }),
                        Object.entries(Q).map(([v, b]) =>
                          r.jsxs(
                            "div",
                            {
                              className: "space-y-1",
                              children: [
                                r.jsxs("button", {
                                  type: "button",
                                  onClick: () => pe(v),
                                  disabled: l,
                                  className: `w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 border ${
                                    n === v
                                      ? "bg-blue-50 text-blue-700 border-blue-200 shadow-sm"
                                      : "text-gray-700 hover:bg-gray-50 hover:shadow-sm border-transparent"
                                  } ${
                                    l ? "opacity-50 cursor-not-allowed" : ""
                                  }`,
                                  children: [
                                    r.jsxs("div", {
                                      className: "flex items-center space-x-3",
                                      children: [
                                        v === "B1F"
                                          ? r.jsx(zu, { className: "w-4 h-4" })
                                          : r.jsx(ph, { className: "w-4 h-4" }),
                                        r.jsxs("div", {
                                          className: "text-left",
                                          children: [
                                            r.jsx("div", {
                                              className: "font-medium",
                                              children: v,
                                            }),
                                            r.jsxs("div", {
                                              className:
                                                "text-xs text-gray-500",
                                              children: [
                                                b.length,
                                                " ",
                                                g("sidebar.departments"),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    r.jsx("div", {
                                      onClick: (L) => {
                                        L.stopPropagation(), K(v);
                                      },
                                      className:
                                        "p-1 hover:bg-gray-200/50 rounded transition-colors",
                                      children: h.has(v)
                                        ? r.jsx(Gu, { className: "w-4 h-4" })
                                        : r.jsx(oh, { className: "w-4 h-4" }),
                                    }),
                                  ],
                                }),
                                h.has(v) &&
                                  r.jsx("div", {
                                    className: "ml-6 space-y-2",
                                    children: b.map((L) =>
                                      r.jsx(
                                        "div",
                                        {
                                          className:
                                            "p-3 text-base text-gray-600 bg-gray-50 rounded-lg",
                                          children: r.jsxs("div", {
                                            className:
                                              "flex items-center justify-between",
                                            children: [
                                              r.jsx("div", {
                                                className:
                                                  "font-medium text-gray-800",
                                                children: L.name,
                                              }),
                                              r.jsx("span", {
                                                className: `text-xs px-2 py-1 rounded-full ${
                                                  L.type === "調劑台"
                                                    ? "bg-green-100 text-green-800"
                                                    : "bg-blue-100 text-blue-800"
                                                }`,
                                                children: L.type,
                                              }),
                                            ],
                                          }),
                                        },
                                        L.GUID
                                      )
                                    ),
                                  }),
                              ],
                            },
                            v
                          )
                        ),
                      ],
                    }),
              }),
              r.jsx("div", {
                className:
                  "flex-shrink-0 px-4 py-3 border-t border-gray-200/50",
                children: r.jsxs("div", {
                  className: "flex items-center justify-between",
                  children: [
                    r.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        r.jsx("label", {
                          htmlFor: "admin-mode-toggle",
                          className:
                            "text-sm font-medium text-gray-700 cursor-pointer select-none",
                          children: "後台模式",
                        }),
                        r.jsx("button", {
                          type: "button",
                          id: "admin-mode-toggle",
                          role: "switch",
                          "aria-checked": c,
                          onClick: P,
                          className: `relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                            c ? "bg-blue-600" : "bg-gray-300"
                          }`,
                          children: r.jsx("span", {
                            className: `inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              c ? "translate-x-6" : "translate-x-1"
                            }`,
                          }),
                        }),
                      ],
                    }),
                    r.jsx("button", {
                      type: "button",
                      onClick: () => D(!0),
                      className:
                        "p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 rounded-lg transition-colors",
                      title: "設定",
                      children: r.jsx(jn, { className: "w-5 h-5" }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
        r.jsx(yh, { isOpen: m, onClose: () => D(!1) }),
        r.jsx(vh, { isOpen: T, onClose: () => _(!1), onConfirm: V }),
      ],
    });
  },
  bh = () => {
    const { t: e } = xt();
    return r.jsx("div", {
      className: "fixed bottom-4 left-1/2 transform -translate-x-1/2 z-30",
      children: r.jsx("div", {
        className:
          "bg-white/95 backdrop-blur-sm border border-gray-200/50 rounded-xl shadow-lg px-4 py-2",
        children: r.jsx("p", {
          className: "text-sm text-gray-600 font-medium whitespace-nowrap",
          children: e("footer.copyright"),
        }),
      }),
    });
  },
  Nh = ({
    component: e,
    scale: t,
    isLocked: n,
    isHighlighted: s = !1,
    onContainerClick: o,
  }) => {
    const l = f.useRef(null),
      { t: a } = xt(),
      {
        apiDepartmentData: i,
        setApiDepartmentData: c,
        showNotification: x,
      } = Xe(),
      [g, h] = f.useState(!1),
      [p, j] = f.useState({ x: 0, y: 0 }),
      [S, C] = f.useState(e.position),
      [R, d] = f.useState(!1),
      [u, m] = f.useState(null),
      [D, T] = f.useState({ x: 0, y: 0 }),
      [_, P] = f.useState({ x: 0, y: 0 });
    f.useEffect(() => {
      console.log("🔄 CanvasComponent: position prop changed", {
        GUID: e.GUID,
        newPosition: e.position,
        currentPosition: S,
      }),
        C(e.position);
    }, [e.position]);
    const V = () => {
        try {
          const F = localStorage.getItem("medMap_setting");
          if (F) return JSON.parse(F).light_color || "red";
        } catch (F) {
          console.error("讀取高亮顏色設定失敗:", F);
        }
        return "red";
      },
      Q = f.useCallback(
        async (F, ve) => {
          if (!i) return;
          console.log("🔄 更新組件位置:", F, ve);
          const me = JSON.parse(JSON.stringify(i)),
            I = (G) => {
              for (const E of G) {
                if (E.GUID === F)
                  return (
                    (E.position = { x: ve.x.toFixed(3), y: ve.y.toFixed(3) }),
                    console.log(
                      "✅ 組件位置已更新:",
                      E.name,
                      ve.x.toFixed(3),
                      ve.y.toFixed(3)
                    ),
                    !0
                  );
                if (
                  (E.components &&
                    Array.isArray(E.components) &&
                    I(E.components)) ||
                  (E.contents && Array.isArray(E.contents) && I(E.contents))
                )
                  return !0;
              }
              return !1;
            };
          if (I(me)) {
            c(me), console.log("💾 全域資料已更新");
            try {
              console.log("📡 開始同步後端位置資料...");
              const G = await De.updateContainerPosition({
                GUID: F,
                absolute_position: `${ve.x.toFixed(3)},${ve.y.toFixed(3)}`,
              });
              G.Code === 200
                ? (console.log("✅ 後端位置同步成功", G),
                  x("位置更新成功", "success"))
                : (console.error("❌ 後端位置同步失敗:", G),
                  x(`位置更新失敗: ${G.Result || "未知錯誤"}`, "error"));
            } catch (G) {
              console.error("💥 後端位置同步發生錯誤:", G),
                x("位置更新失敗: 網路錯誤", "error");
            }
          } else console.warn("⚠️ 未找到要更新的組件:", F);
        },
        [i, c, x]
      ),
      { position: K, dimensions: pe, name: ye, type: v } = e,
      b = f.useCallback(
        (F) => {
          const ve = l.current;
          if (ve)
            if ((P({ x: F.clientX, y: F.clientY }), n)) {
              F.preventDefault(),
                F.stopPropagation(),
                ve.setPointerCapture(F.pointerId);
              const me = ve.getBoundingClientRect(),
                I = F.clientX - me.left,
                ue = F.clientY - me.top;
              j({ x: I, y: ue }), h(!0), d(!1);
            } else d(!1);
        },
        [n]
      ),
      L = f.useCallback(() => {
        if (!i) return [];
        const F = [],
          ve = (me) => {
            for (const I of me)
              I.GUID !== e.GUID &&
                I.position &&
                F.push({
                  GUID: I.GUID,
                  position: I.position,
                  dimensions: I.dimensions,
                }),
                I.components && Array.isArray(I.components) && ve(I.components),
                I.contents && Array.isArray(I.contents) && ve(I.contents);
          };
        return ve(i), F;
      }, [i, e.GUID]),
      w = f.useCallback(
        (F, ve) => {
          const I = L();
          let ue = F,
            G = ve;
          for (const E of I) {
            const se = parseFloat(E.position.x),
              le = parseFloat(E.position.y);
            if (
              (Math.abs(F - se) < 20 && (ue = se),
              Math.abs(ve - le) < 20 && (G = le),
              E.dimensions && e.dimensions)
            ) {
              const B = se + parseFloat(E.dimensions.width),
                Z = F + parseFloat(e.dimensions.width);
              Math.abs(Z - B) < 20 && (ue = B - parseFloat(e.dimensions.width));
              const ie = le + parseFloat(E.dimensions.depth),
                A = ve + parseFloat(e.dimensions.depth);
              Math.abs(A - ie) < 20 &&
                (G = ie - parseFloat(e.dimensions.depth));
            }
          }
          return { x: ue, y: G };
        },
        [L, e.dimensions]
      ),
      N = f.useCallback(
        (F) => {
          const ve = Math.abs(F.clientX - _.x),
            me = Math.abs(F.clientY - _.y);
          if (((ve > 5 || me > 5) && d(!0), !g || !n)) return;
          F.preventDefault(), F.stopPropagation();
          const I = l.current;
          if (!I) return;
          const ue = I.closest("[data-canvas-content]");
          if (!ue) return;
          const G = ue.getBoundingClientRect(),
            E = (F.clientX - G.left - p.x) / t,
            se = (F.clientY - G.top - p.y) / t,
            le = w(E, se);
          C(le);
        },
        [g, p, t, n, w, _]
      ),
      k = f.useCallback(
        (F) => {
          const ve = Math.abs(F.clientX - _.x),
            me = Math.abs(F.clientY - _.y),
            I = ve > 5 || me > 5;
          if (n) {
            if (!g) return;
            F.preventDefault(), F.stopPropagation();
            const ue = l.current;
            ue && ue.releasePointerCapture(F.pointerId),
              h(!1),
              I ? Q(e.GUID, S) : o && o(e),
              d(!1);
          } else
            !I && o && (F.preventDefault(), F.stopPropagation(), o(e)), d(!1);
        },
        [g, n, o, e, Q, S, _]
      ),
      M = f.useCallback(
        (F) => {
          const ve = l.current;
          if (!ve) return;
          const me = F.touches[0];
          if (me && (T({ x: me.clientX, y: me.clientY }), n)) {
            F.preventDefault(), F.stopPropagation(), m(me.identifier);
            const I = ve.getBoundingClientRect(),
              ue = me.clientX - I.left,
              G = me.clientY - I.top;
            j({ x: ue, y: G }), h(!0);
          }
        },
        [n]
      ),
      J = f.useCallback(
        (F) => {
          if (!g || !n || u === null) return;
          F.preventDefault(), F.stopPropagation();
          const ve = l.current;
          if (!ve) return;
          const me = Array.from(F.touches).find((le) => le.identifier === u);
          if (!me) return;
          const I = ve.closest("[data-canvas-content]");
          if (!I) return;
          const ue = I.getBoundingClientRect(),
            G = (me.clientX - ue.left - p.x) / t,
            E = (me.clientY - ue.top - p.y) / t,
            se = w(G, E);
          C(se);
        },
        [g, p, t, n, u, w]
      ),
      z = f.useCallback(
        (F) => {
          const ve = Array.from(F.changedTouches)[0];
          if (!ve) return;
          const me = Math.abs(ve.clientX - D.x),
            I = Math.abs(ve.clientY - D.y),
            ue = me > 10 || I > 10;
          if (n) {
            if (
              !g ||
              u === null ||
              !Array.from(F.changedTouches).some((E) => E.identifier === u)
            )
              return;
            F.preventDefault(),
              F.stopPropagation(),
              h(!1),
              m(null),
              T({ x: 0, y: 0 }),
              ue ? Q(e.GUID, S) : o && o(e);
          } else
            !ue && o && (F.preventDefault(), F.stopPropagation(), o(e)),
              T({ x: 0, y: 0 });
        },
        [g, n, u, Q, e, S, D, o]
      ),
      X = f.useCallback(
        (F) => {
          !g ||
            !n ||
            u === null ||
            !Array.from(F.changedTouches).some((me) => me.identifier === u) ||
            (F.preventDefault(),
            F.stopPropagation(),
            C(e.position),
            h(!1),
            m(null),
            T({ x: 0, y: 0 }));
        },
        [g, n, u, e.position]
      ),
      be = (F) => {
        if (s) return `highlight-breathe-${V()}`;
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
      fe = (F) => {
        if (s) return `highlight-breathe-${V()}`;
        switch (F) {
          case "調劑台":
            return "bg-gray-200 text-gray-900";
          case "藥庫":
            return "bg-gray-200 text-gray-900";
          case "parent_container":
            return "bg-gray-200 text-gray-900";
          default:
            return "bg-gray-200 text-gray-800";
        }
      },
      U = (F) => {
        if (s) return `highlight-tag-${V()}`;
        switch (F) {
          case "調劑台":
            return "bg-gray-700 text-gray-900";
          case "藥庫":
            return "bg-gray-700 text-gray-900";
          case "parent_container":
            return "bg-gray-700 text-gray-900";
          default:
            return "bg-gray-700 text-gray-900";
        }
      },
      xe = (F) => {
        const ve =
          F === "調劑台"
            ? "type.dispensingStation"
            : F === "藥庫"
            ? "type.warehouse"
            : F === "parent_container"
            ? "櫃體"
            : "type." + F;
        return a(ve) || F;
      };
    return r.jsx("div", {
      ref: l,
      className: `flex flex-col absolute border-2 rounded-lg shadow-lg hover:shadow-xl ${be(
        v
      )} overflow-hidden ${n ? "cursor-move" : "cursor-default"} ${
        g ? "shadow-2xl z-50" : ""
      }`,
      style: {
        left: `${S.x}px`,
        top: `${S.y}px`,
        minWidth: v === "調劑台" || v === "藥庫" ? "120px" : "180px",
        minHeight: v === "調劑台" || v === "藥庫" ? "60px" : "120px",
        userSelect: "none",
        touchAction: "none",
        transition: g
          ? "none"
          : "transform 0.2s ease-out, box-shadow 0.2s ease-out",
      },
      onPointerDown: b,
      onPointerMove: N,
      onPointerUp: k,
      onTouchStart: M,
      onTouchMove: J,
      onTouchEnd: z,
      onTouchCancel: X,
      children: r.jsx("div", {
        className: `w-full min-w-[400px] h-auto flex items-start flex-1 justify-between p-2 border-gray-600 ${fe(
          v
        )}`,
        children: r.jsx("div", {
          className: "flex space-x-2 flex-1 min-w-0",
          children: r.jsxs("div", {
            className: "min-w-0 flex gap-4",
            children: [
              r.jsx("div", {
                className: "font-semibold text-lg truncate",
                children: ye,
              }),
              r.jsx("div", {
                className: `text-sm truncate py-1 px-3 text-white rounded-2xl ${U(
                  v
                )}`,
                children: xe(v),
              }),
            ],
          }),
        }),
      }),
    });
  },
  Xo = ({ isOpen: e, onClose: t, onScanSuccess: n, mode: s }) => {
    const { showNotification: o, openAddBarcodeModal: l } = Xe();
    console.log("🔍 QRCodeScannerModal props:", {
      isOpen: e,
      mode: s,
      hasOnScanSuccess: !!n,
    });
    const a = f.useRef(null),
      i = f.useRef(null),
      c = f.useRef(null),
      x = f.useRef(null),
      g = f.useRef(!1),
      [h, p] = f.useState(!1),
      [j, S] = f.useState(""),
      [C, R] = f.useState(null),
      [d, u] = f.useState(!1);
    f.useEffect(() => {
      const Q = () => {
        const K = window.innerWidth < 680;
        u(K);
      };
      return (
        Q(),
        window.addEventListener("resize", Q),
        () => window.removeEventListener("resize", Q)
      );
    }, []);
    const m = async () => {
        try {
          S("");
          const Q = await navigator.mediaDevices.getUserMedia({
            video: {
              facingMode: "environment",
              width: { ideal: 9999 },
              height: { ideal: 9999 },
            },
          });
          (c.current = Q),
            a.current &&
              ((a.current.srcObject = Q),
              await a.current.play(),
              console.log("✅ Camera started, setting isScanning to true"),
              p(!0));
        } catch (Q) {
          console.error("無法開啟相機:", Q),
            S("無法開啟相機，請確認相機權限已開啟");
        }
      },
      D = () => {
        console.log("🛑 停止相機和掃描"),
          (g.current = !1),
          p(!1),
          c.current &&
            (c.current.getTracks().forEach((Q) => Q.stop()),
            (c.current = null)),
          a.current && (a.current.srcObject = null);
      },
      T = async () => {
        if (
          (console.log("🔄 captureAndScan called"),
          !a.current || !i.current || !h)
        ) {
          console.log("❌ Early return: missing refs or not scanning");
          return;
        }
        if (g.current) {
          console.log("⏱️ Scan already in progress, skipping");
          return;
        }
        g.current = !0;
        const Q = a.current,
          K = i.current,
          pe = K.getContext("2d");
        if (!pe || Q.readyState !== Q.HAVE_ENOUGH_DATA) {
          console.log("❌ Video not ready or no context"),
            (g.current = !1),
            setTimeout(() => {
              h && T();
            }, 100);
          return;
        }
        (K.width = Q.videoWidth),
          (K.height = Q.videoHeight),
          pe.drawImage(Q, 0, 0, K.width, K.height),
          K.toBlob(
            async (ye) => {
              if (!ye) return;
              const v = new File([ye], "scan.jpg", { type: "image/jpeg" }),
                b = performance.now();
              try {
                console.log("📸 [相機掃描] 截取圖片並掃描...");
                const L = performance.now(),
                  w = await De.scanBarcode(v),
                  N = performance.now();
                if (
                  (console.log(
                    `⏱️ [相機掃描] 掃描條碼API用時: ${(N - L).toFixed(2)}ms`
                  ),
                  !w.results || w.results.length === 0)
                ) {
                  console.log("⚠️ 未辨識到條碼，立即進行下一輪掃描"),
                    (g.current = !1),
                    h && T();
                  return;
                }
                const k = w.results[0];
                if (!k.code) {
                  console.log(
                    "⚠️ 辨識到條碼但無法讀取內容，立即進行下一輪掃描"
                  ),
                    (g.current = !1),
                    h && T();
                  return;
                }
                console.log("✅ 成功辨識條碼:", k.code),
                  console.log("📋 條碼類型:", k.type),
                  console.log("📊 信心度:", k.conf),
                  (g.current = !1),
                  D(),
                  t();
                try {
                  const M = performance.now(),
                    J = await De.searchByBarCode(k.code),
                    z = performance.now();
                  if (
                    (console.log(
                      `⏱️ [相機掃描] 搜尋藥品資料API用時: ${(z - M).toFixed(
                        2
                      )}ms`
                    ),
                    console.log("🔍 條碼搜尋結果:", J),
                    J.Code === 200)
                  )
                    if (
                      (console.log("✅ 找到藥品資料:", J.Data),
                      console.log("🎯 準備調用 onScanSuccess, mode:", s),
                      o("找到藥品資料", "success"),
                      n)
                    ) {
                      console.log("✅ onScanSuccess 存在，開始調用");
                      const X = performance.now();
                      n(k.code, J.Data);
                      const be = performance.now();
                      console.log(
                        `⏱️ [相機掃描] 定位藥品用時: ${(be - X).toFixed(2)}ms`
                      );
                      const fe = performance.now();
                      console.log(
                        `⏱️ [相機掃描] 總用時: ${(fe - b).toFixed(2)}ms`
                      ),
                        console.log("✅ onScanSuccess 調用完成");
                    } else console.warn("⚠️ onScanSuccess 不存在");
                  else
                    J.Code === -200 && J.Result === "查無資料"
                      ? (console.log("⚠️ 查無資料，開啟建立條碼彈窗"),
                        o("查無條碼資料，請建立條碼", "warning"),
                        l(k.code))
                      : (console.log("❌ 搜尋失敗:", J.Result),
                        o(J.Result || "搜尋失敗", "error"));
                } catch (M) {
                  console.error("條碼搜尋錯誤:", M),
                    o("搜尋失敗，請稍後再試", "error");
                }
              } catch (L) {
                console.error("掃描錯誤:", L),
                  (g.current = !1),
                  setTimeout(() => {
                    h && T();
                  }, 500);
              }
            },
            "image/jpeg",
            1
          );
      },
      _ = () => {
        console.log("🚀 開始連續掃描模式"), (g.current = !1), T();
      };
    f.useEffect(
      () => (
        e ? m() : D(),
        () => {
          D();
        }
      ),
      [e]
    ),
      f.useEffect(() => {
        h
          ? (console.log("🚀 isScanning became true, starting continuous scan"),
            _())
          : (console.log("🛑 isScanning became false"), (g.current = !1));
      }, [h]);
    const P = () => {
        D(), t();
      },
      V = async (Q) => {
        if (!c.current || !x.current) return;
        const K = x.current.getBoundingClientRect(),
          pe = (Q.clientX - K.left) / K.width,
          ye = (Q.clientY - K.top) / K.height;
        console.log("🎯 點擊聚焦位置:", { x: pe, y: ye }),
          R({ x: Q.clientX - K.left, y: Q.clientY - K.top }),
          setTimeout(() => R(null), 1e3);
        try {
          const v = c.current.getVideoTracks()[0],
            b = v.getCapabilities();
          if (
            (console.log("📹 相機能力:", b),
            !b.focusMode || !b.focusMode.includes("manual"))
          ) {
            console.log("⚠️ 此相機不支援手動聚焦");
            return;
          }
          const L = {
            advanced: [
              {
                focusMode: "manual",
                focusDistance: 0,
                pointsOfInterest: [{ x: pe, y: ye }],
              },
            ],
          };
          await v.applyConstraints(L), console.log("✅ 聚焦成功");
        } catch (v) {
          console.log("⚠️ 聚焦失敗 (可能不支援):", v);
        }
      };
    return e
      ? d
        ? r.jsxs("div", {
            className: "fixed inset-0 bg-black z-50 flex flex-col",
            children: [
              r.jsxs("div", {
                className:
                  "flex items-center justify-between p-4 bg-gray-900 bg-opacity-90",
                children: [
                  r.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      r.jsx(Tr, { className: "w-6 h-6 text-white" }),
                      r.jsx("h2", {
                        className: "text-lg font-semibold text-white",
                        children: "條碼掃描",
                      }),
                    ],
                  }),
                  r.jsx("button", {
                    onClick: P,
                    className:
                      "p-2 hover:bg-gray-700 rounded-lg transition-colors",
                    children: r.jsx(Fe, { className: "w-6 h-6 text-white" }),
                  }),
                ],
              }),
              r.jsxs("div", {
                className: "flex-1 relative",
                children: [
                  r.jsxs("div", {
                    ref: x,
                    className: "absolute inset-0 bg-black cursor-crosshair",
                    onClick: V,
                    children: [
                      r.jsx("video", {
                        ref: a,
                        className: "w-full h-full object-cover",
                        playsInline: !0,
                        muted: !0,
                      }),
                      C &&
                        r.jsxs("div", {
                          className: "absolute pointer-events-none",
                          style: {
                            left: C.x,
                            top: C.y,
                            transform: "translate(-50%, -50%)",
                          },
                          children: [
                            r.jsx("div", {
                              className:
                                "w-16 h-16 border-2 border-yellow-400 rounded-full animate-ping",
                            }),
                            r.jsx("div", {
                              className:
                                "absolute inset-0 w-16 h-16 border-2 border-yellow-400 rounded-full",
                            }),
                            r.jsxs("div", {
                              className:
                                "absolute inset-0 w-16 h-16 flex items-center justify-center",
                              children: [
                                r.jsx("div", {
                                  className: "w-1 h-16 bg-yellow-400",
                                }),
                                r.jsx("div", {
                                  className: "absolute w-16 h-1 bg-yellow-400",
                                }),
                              ],
                            }),
                          ],
                        }),
                    ],
                  }),
                  r.jsx("canvas", { ref: i, className: "hidden" }),
                ],
              }),
              r.jsxs("div", {
                className: "p-4 bg-gray-900 bg-opacity-90",
                children: [
                  j &&
                    r.jsx("div", {
                      className:
                        "bg-red-500 bg-opacity-20 border border-red-500 rounded-lg px-3 py-2 mb-3",
                      children: r.jsx("p", {
                        className: "text-red-200 text-sm",
                        children: j,
                      }),
                    }),
                  r.jsxs("div", {
                    className: "text-center",
                    children: [
                      r.jsx("p", {
                        className: "text-white text-base font-medium mb-1",
                        children: "請將條碼對準鏡頭",
                      }),
                      r.jsx("p", {
                        className: "text-gray-300 text-sm mb-1",
                        children: "支援一維條碼與二維條碼（QR Code）",
                      }),
                      r.jsx("p", {
                        className: "text-gray-400 text-xs",
                        children: "💡 點擊畫面可對焦",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        : r.jsx("div", {
            className:
              "fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4",
            children: r.jsxs("div", {
              className:
                "bg-white rounded-lg shadow-xl max-w-2xl w-full overflow-hidden flex flex-col max-h-[90vh]",
              children: [
                r.jsxs("div", {
                  className:
                    "flex items-center justify-between p-4 border-b border-gray-200",
                  children: [
                    r.jsxs("div", {
                      className: "flex items-center gap-3",
                      children: [
                        r.jsx("div", {
                          className:
                            "w-10 h-10 rounded-xl flex items-center justify-center",
                          children: r.jsx(Tr, {
                            className: "w-6 h-6 text-blue-500",
                          }),
                        }),
                        r.jsx("h2", {
                          className: "text-lg font-semibold text-gray-900",
                          children: "條碼掃描",
                        }),
                      ],
                    }),
                    r.jsx("button", {
                      onClick: P,
                      className:
                        "p-2 hover:bg-gray-100 rounded-lg transition-colors",
                      children: r.jsx(Fe, {
                        className: "w-6 h-6 text-gray-600",
                      }),
                    }),
                  ],
                }),
                r.jsxs("div", {
                  className: "flex-1 overflow-y-auto p-4",
                  children: [
                    j &&
                      r.jsx("div", {
                        className:
                          "bg-red-50 border border-red-200 rounded-lg px-3 py-2 mb-4",
                        children: r.jsx("p", {
                          className: "text-red-600 text-sm",
                          children: j,
                        }),
                      }),
                    r.jsxs("div", {
                      className: "space-y-4",
                      children: [
                        r.jsx("div", {
                          ref: x,
                          className:
                            "relative bg-black rounded-xl overflow-hidden cursor-crosshair",
                          style: { aspectRatio: "16/9" },
                          onClick: V,
                          children: r.jsx("video", {
                            ref: a,
                            className: "w-full h-full object-cover",
                            playsInline: !0,
                            muted: !0,
                          }),
                        }),
                        r.jsx("canvas", { ref: i, className: "hidden" }),
                        r.jsxs("div", {
                          className: "text-center rounded-lg pb-4",
                          children: [
                            r.jsx("p", {
                              className:
                                "text-gray-800 text-base font-medium mb-2",
                              children: "請將條碼對準鏡頭",
                            }),
                            r.jsx("p", {
                              className: "text-gray-600 text-sm",
                              children: "支援一維條碼與二維條碼（QR Code）",
                            }),
                            r.jsx("p", {
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
  };
class jh {
  constructor() {
    (this.currentTask = null), (this.isProcessing = !1);
  }
  async startLighting(t, n, s, o, l) {
    if (this.isProcessing) {
      console.log("⏳ 正在處理亮燈請求，請稍候...");
      return;
    }
    this.isProcessing = !0;
    try {
      this.currentTask &&
        (console.log("🔄 檢測到現有亮燈任務，先執行滅燈..."),
        await this.clearCurrentTask(),
        await this.sleep(200)),
        console.log("💡 開始新的亮燈任務");
      for (const i of t)
        try {
          const c = performance.now();
          await De.lightByCodeNameType(
            i.serverName,
            i.serverType,
            i.medicineCode,
            n,
            s,
            i.deviceType
          );
          const x = performance.now();
          console.log(
            `⏱️ 亮燈API用時 (${i.serverName}/${i.medicineCode}): ${(
              x - c
            ).toFixed(2)}ms`
          );
        } catch (c) {
          console.error(`❌ 亮燈失敗 (${i.serverName}/${i.medicineCode}):`, c);
        }
      const a = setTimeout(async () => {
        var i;
        console.log("⏰ 計時器到期，執行自動滅燈"),
          await this.turnOffLights(t),
          (i = this.currentTask) != null &&
            i.onLightOff &&
            this.currentTask.onLightOff(),
          (this.currentTask = null);
      }, o);
      (this.currentTask = { timerId: a, lightData: t, onLightOff: l }),
        console.log(`✅ 亮燈任務已設定，將於 ${o / 1e3} 秒後自動滅燈`);
    } finally {
      this.isProcessing = !1;
    }
  }
  async clearCurrentTask() {
    this.currentTask &&
      (clearTimeout(this.currentTask.timerId),
      console.log("🛑 已中斷亮燈計時器"),
      await this.turnOffLights(this.currentTask.lightData),
      this.currentTask.onLightOff && this.currentTask.onLightOff(),
      (this.currentTask = null));
  }
  async turnOffLights(t) {
    console.log("🌑 開始執行滅燈...");
    for (const n of t)
      try {
        const s = performance.now();
        await De.lightByCodeNameType(
          n.serverName,
          n.serverType,
          n.medicineCode,
          "0,0,0",
          "0",
          n.deviceType
        );
        const o = performance.now();
        console.log(
          `⏱️ 滅燈API用時 (${n.serverName}/${n.medicineCode}): ${(
            o - s
          ).toFixed(2)}ms`
        );
      } catch (s) {
        console.error(`❌ 滅燈失敗 (${n.serverName}/${n.medicineCode}):`, s);
      }
    console.log("✅ 滅燈完成");
  }
  async turnOffAllLights() {
    this.currentTask && (await this.clearCurrentTask());
  }
  sleep(t) {
    return new Promise((n) => setTimeout(n, t));
  }
  hasActiveTask() {
    return this.currentTask !== null;
  }
  getCurrentMedicineCode() {
    var t, n;
    return (
      ((n = (t = this.currentTask) == null ? void 0 : t.lightData[0]) == null
        ? void 0
        : n.medicineCode) || null
    );
  }
  getCurrentMedicineCodes() {
    return this.currentTask
      ? this.currentTask.lightData.map((t) => t.medicineCode)
      : [];
  }
  cleanup() {
    this.currentTask &&
      (clearTimeout(this.currentTask.timerId), (this.currentTask = null)),
      (this.isProcessing = !1);
  }
}
const ls = new jh(),
  Sh = ({ children: e }) => {
    const t = f.useRef(null),
      {
        selectedDepartmentType: n,
        apiDepartmentData: s,
        setApiDepartmentData: o,
        showNotification: l,
        openAddBarcodeModal: a,
        openContainerDetailModal: i,
        highlightedMedicineCode: c,
        setHighlightedMedicineCode: x,
        activeCanvas: g,
        setActiveCanvas: h,
      } = Xe(),
      { t: p } = xt(),
      [j, S] = f.useState({ x: 0, y: 0, scale: 1 }),
      [C, R] = f.useState(!1),
      [d, u] = f.useState(!1),
      [m, D] = f.useState({ x: 0, y: 0 }),
      [T, _] = f.useState(!1),
      [P, V] = f.useState(!1),
      [Q, K] = f.useState(""),
      [pe, ye] = f.useState([]),
      [v, b] = f.useState(null),
      L = {
        blue: "255,0,0",
        green: "0,255,0",
        red: "0,0,255",
        yellow: "0,255,255",
        purple: "255,0,255",
        cyan: "255,255,0",
      },
      w = () => {
        try {
          const A = localStorage.getItem("med_map_anchor");
          return A ? JSON.parse(A) : [];
        } catch (A) {
          return (
            console.error("Error reading canvas states from localStorage:", A),
            []
          );
        }
      },
      N = (A, H, W, oe) => {
        try {
          const de = w(),
            Ne = de.findIndex(
              (we) => we.department === A && we.canvasType === H
            ),
            ce = { department: A, canvasType: H, scale: W, position: oe };
          Ne >= 0 ? (de[Ne] = ce) : de.push(ce),
            localStorage.setItem("med_map_anchor", JSON.stringify(de));
        } catch (de) {
          console.error("Error saving canvas state to localStorage:", de);
        }
      },
      k = (A, H) =>
        w().find((oe) => oe.department === A && oe.canvasType === H) || null;
    f.useEffect(
      () => (
        h("infinite"),
        () => {
          h(null);
        }
      ),
      [h]
    ),
      f.useEffect(() => {
        if (g !== "infinite" || !n) return;
        const H = setInterval(async () => {
          try {
            console.log("🔄 Auto-refreshing data for InfiniteCanvas...");
            const W = await De.getMedMapByDepartment(n);
            if (W.Code === 200 && W.Data) {
              console.log("📡 API 回傳成功，開始轉換資料");
              const oe = ut.convertMedMapApiToFakeData(W.Data);
              if (!ut.validateConvertedData(oe)) {
                console.error("❌ 轉換後的資料驗證失敗");
                return;
              }
              console.log(
                "✅ Data refreshed and converted successfully, updating state..."
              ),
                console.log("📊 Converted data to set:", oe),
                o(oe);
            }
          } catch (W) {
            console.error("❌ Failed to auto-refresh data:", W);
          }
        }, 3 * 60 * 1e3);
        return () => {
          clearInterval(H);
        };
      }, [g, n, o]),
      f.useEffect(() => {
        if (n) {
          const A = k(n, "InfiniteCanvas");
          if (A) S({ x: A.position.x, y: A.position.y, scale: A.scale });
          else {
            const H = { x: 0, y: 0, scale: 1 };
            S(H), N(n, "InfiniteCanvas", H.scale, H);
          }
        }
      }, [n]),
      f.useEffect(() => {
        if (!n) return;
        const A = setTimeout(() => {
          N(n, "InfiniteCanvas", j.scale, { x: j.x, y: j.y });
        }, 500);
        return () => clearTimeout(A);
      }, [j, n]),
      f.useEffect(() => {
        console.log("🔄 InfiniteCanvas: apiDepartmentData changed", {
          hasData: !!s,
          length: (s == null ? void 0 : s.length) || 0,
          data: s,
        });
      }, [s]);
    const M = f.useMemo(() => {
      if (
        (console.log(
          "🔄 useMemo: Re-calculating components due to apiDepartmentData change"
        ),
        !s || s.length === 0)
      )
        return console.log("⚠️ No apiDepartmentData available"), [];
      const A = s,
        H = [];
      console.log("🔍 Processing departments for InfiniteCanvas:", A);
      for (const W of A)
        if (
          (console.log("📦 Processing department:", W.name, "Type:", W.type),
          W.type === "調劑台" || W.type === "藥庫")
        ) {
          if (W.contents && Array.isArray(W.contents)) {
            console.log("  └─ Found", W.contents.length, "parent containers");
            for (const oe of W.contents)
              console.log("    📌 Parent container:", {
                GUID: oe.GUID,
                name: oe.name,
                type: oe.type,
                position: oe.position,
                hasDimensions: !!oe.dimensions,
                dimensions: oe.dimensions,
              }),
                H.push({
                  GUID: oe.GUID,
                  type: oe.type,
                  name: `${oe.name}`,
                  position: oe.position,
                  dimensions: oe.dimensions || {
                    width: 200,
                    height: 200,
                    depth: 200,
                  },
                  med_list: oe.med_list || [],
                  serverName: oe.serverName,
                  serverType: oe.serverType,
                  Master_GUID: W.GUID,
                  contents: oe.contents || [],
                });
          }
        } else
          W.contents &&
            Array.isArray(W.contents) &&
            W.contents.length > 0 &&
            (console.log("  └─ Found", W.contents.length, "contents"),
            H.push(...W.contents));
      return (
        console.log("✅ Total components for InfiniteCanvas:", H.length), H
      );
    }, [s]);
    f.useEffect(() => {
      console.log("🎨 InfiniteCanvas: components changed", {
        count: M.length,
        components: M.map((A) => ({
          GUID: A.GUID,
          name: A.name,
          type: A.type,
          position: A.position,
        })),
      });
    }, [M]),
      f.useEffect(() => {
        const A = (W) => {
            W.code === "Space" && !W.repeat && (W.preventDefault(), _(!0));
          },
          H = (W) => {
            W.code === "Space" && (W.preventDefault(), _(!1), R(!1));
          };
        return (
          window.addEventListener("keydown", A),
          window.addEventListener("keyup", H),
          () => {
            window.removeEventListener("keydown", A),
              window.removeEventListener("keyup", H);
          }
        );
      }, []);
    const J = f.useCallback(
        (A) => {
          var W;
          if (d) return;
          if (
            (A.ctrlKey && !navigator.userAgent.includes("Mac")) ||
            (A.metaKey && navigator.userAgent.includes("Mac"))
          ) {
            A.preventDefault(), A.stopPropagation();
            const oe =
              (W = t.current) == null ? void 0 : W.getBoundingClientRect();
            if (!oe) return;
            const de = A.clientX - oe.left,
              Ne = A.clientY - oe.top,
              ce = A.deltaY > 0 ? 0.9 : 1.1,
              we = Math.max(0.1, Math.min(5, j.scale * ce)),
              ke = we / j.scale,
              Ie = de - (de - j.x) * ke,
              We = Ne - (Ne - j.y) * ke;
            S({ x: Ie, y: We, scale: we });
          }
        },
        [j, d]
      ),
      z = f.useCallback(
        (A) => {
          d ||
            !T ||
            (R(!0), D({ x: A.clientX, y: A.clientY }), A.preventDefault());
        },
        [d, T]
      ),
      X = f.useCallback(
        (A) => {
          if (!C || d) return;
          const H = A.clientX - m.x,
            W = A.clientY - m.y;
          S((oe) => ({ ...oe, x: oe.x + H, y: oe.y + W })),
            D({ x: A.clientX, y: A.clientY });
        },
        [C, m, d]
      ),
      be = f.useCallback(() => {
        R(!1);
      }, []),
      fe = f.useCallback(
        (A) => {
          if (!s) return [];
          const H = [],
            W = (oe) => {
              for (const de of oe)
                de.med_list &&
                  Array.isArray(de.med_list) &&
                  de.med_list.some((ce) => ce.code == A) &&
                  (console.log("✅ 找到藥品所在櫃體:", de.name, de.GUID),
                  H.push(de)),
                  de.components &&
                    Array.isArray(de.components) &&
                    W(de.components),
                  de.contents && Array.isArray(de.contents) && W(de.contents);
            };
          return W(s), H;
        },
        [s]
      ),
      U = f.useCallback(() => {
        try {
          const H = localStorage.getItem("medMap_setting");
          if (H) {
            const oe = JSON.parse(H).light_sec;
            if (oe != null && oe !== "") {
              const de = Number(oe);
              if (!isNaN(de) && de > 0) return de * 1e3;
            }
          }
        } catch (H) {
          console.error("讀取亮燈設定失敗:", H);
        }
        return 6e4;
      }, []),
      xe = f.useCallback(() => {
        const A = { rgb_color: "255,0,0", brightness: "100" };
        try {
          const H = localStorage.getItem("medMap_setting");
          if (H) {
            const W = JSON.parse(H),
              oe = W.light_color || "red";
            return {
              rgb_color: L[oe] || L.red,
              brightness: String(W.brightness !== void 0 ? W.brightness : 100),
            };
          }
        } catch (H) {
          console.error("讀取亮燈設定失敗:", H);
        }
        return A;
      }, []),
      F = f.useCallback(
        async (A) => {
          if (!A.trim()) return;
          console.log("🔍 搜尋藥碼:", A);
          const H = fe(A);
          if (H.length > 0) {
            const W = U(),
              oe = xe();
            console.log(`🎯 高亮 ${H.length} 個櫃體:`, H),
              console.log(`⏱️ 亮燈時長: ${W}ms (${W / 1e3}秒)`),
              console.log("💡 亮燈設定:", oe);
            const de = H.map((ce) => ce.GUID);
            ye(de), b(A), x(A);
            const Ne = H.filter((ce) => ce.serverName && ce.serverType).map(
              (ce) => ({
                serverName: ce.serverName,
                serverType: ce.serverType,
                medicineCode: A,
                deviceType: ce.device_type,
              })
            );
            Ne.length > 0 &&
              (await ls.startLighting(Ne, oe.rgb_color, oe.brightness, W),
              setTimeout(() => {
                ye([]), b(null), x(null);
              }, W));
          } else
            console.log("❌ 未找到包含此藥品的櫃體"), ye([]), b(null), x(null);
        },
        [fe, U, xe, x]
      ),
      ve = (A, H) => {
        var Ne, ce;
        console.log("📍 [相機掃描-部門視圖] 藥品定位模式 - 掃描到藥品:", {
          barcode: A,
          medicineData: H,
        });
        const W =
          ((Ne = H[0]) == null ? void 0 : Ne.CODE) ||
          ((ce = H[0]) == null ? void 0 : ce.code);
        V(!1);
        const oe = performance.now();
        F(W);
        const de = performance.now();
        console.log(
          `⏱️ [相機掃描-部門視圖] 亮燈用時: ${(de - oe).toFixed(2)}ms`
        );
      },
      me = async (A) => {
        var H, W;
        if (A.key === "Enter") {
          if ((A.preventDefault(), !Q.trim())) {
            l("請輸入條碼", "warning");
            return;
          }
          const oe = performance.now();
          try {
            console.log("🔍 [手動輸入-部門視圖] 搜尋條碼:", Q);
            const de = performance.now(),
              Ne = await De.searchByBarCode(Q),
              ce = performance.now();
            if (
              (console.log(
                `⏱️ [手動輸入-部門視圖] API搜尋藥品資料用時: ${(
                  ce - de
                ).toFixed(2)}ms`
              ),
              console.log("📋 條碼搜尋回應:", Ne),
              Ne.Code === 200 && Ne.Data && Ne.Data.length > 0)
            ) {
              const we =
                ((H = Ne.Data[0]) == null ? void 0 : H.CODE) ||
                ((W = Ne.Data[0]) == null ? void 0 : W.code);
              console.log("✅ 找到藥品資料:", Ne.Data),
                l("找到藥品，開始亮燈", "success");
              const ke = performance.now();
              F(we);
              const Ie = performance.now();
              console.log(
                `⏱️ [手動輸入-部門視圖] 亮燈用時: ${(Ie - ke).toFixed(2)}ms`
              ),
                K("");
              const We = performance.now();
              console.log(
                `⏱️ [手動輸入-部門視圖] 總用時: ${(We - oe).toFixed(2)}ms`
              );
            } else
              Ne.Code === -200 && Ne.Result === "查無資料"
                ? (console.log("⚠️ 查無資料，開啟建立條碼彈窗"),
                  l("查無條碼資料，請建立條碼", "warning"),
                  a(Q),
                  K(""))
                : (console.log("❌ 搜尋失敗:", Ne.Result),
                  l(Ne.Result || "搜尋失敗", "error"));
          } catch (de) {
            console.error("條碼搜尋錯誤:", de),
              l("搜尋失敗，請稍後再試", "error");
          }
        }
      };
    f.useEffect(
      () => () => {
        ls.cleanup();
      },
      []
    ),
      f.useEffect(() => {
        if (c) {
          console.log("🔔 Context highlightedMedicineCode 變化:", c);
          const A = fe(c);
          if (A.length > 0) {
            const H = A.map((W) => W.GUID);
            ye(H), b(c), console.log("✨ UI 高亮已更新:", H);
          }
        } else ye([]), b(null);
      }, [c, fe]);
    const [I, ue] = f.useState(null),
      [G, E] = f.useState({ x: 0, y: 0 }),
      se = (A) => {
        if (A.length < 2) return null;
        const H = A[0],
          W = A[1];
        return Math.sqrt(
          Math.pow(W.clientX - H.clientX, 2) +
            Math.pow(W.clientY - H.clientY, 2)
        );
      },
      le = (A) => {
        if (A.length === 1) return { x: A[0].clientX, y: A[0].clientY };
        const H = A[0],
          W = A[1];
        return {
          x: (H.clientX + W.clientX) / 2,
          y: (H.clientY + W.clientY) / 2,
        };
      },
      B = f.useCallback(
        (A) => {
          if (!d) {
            if (A.touches.length === 2) {
              const H = se(A.touches),
                W = le(A.touches);
              ue(H), E(W);
            } else if (A.touches.length === 1) {
              const H = A.touches[0];
              D({ x: H.clientX, y: H.clientY }), R(!0);
            }
          }
        },
        [d]
      ),
      Z = f.useCallback(
        (A) => {
          var H;
          if (!d) {
            if ((A.preventDefault(), A.touches.length === 2 && I !== null)) {
              const W = se(A.touches),
                oe = le(A.touches);
              if (W && I) {
                const de =
                  (H = t.current) == null ? void 0 : H.getBoundingClientRect();
                if (!de) return;
                const Ne = W / I,
                  ce = Math.max(0.1, Math.min(5, j.scale * Ne)),
                  we = oe.x - de.left,
                  ke = oe.y - de.top,
                  Ie = ce / j.scale,
                  We = we - (we - j.x) * Ie,
                  Te = ke - (ke - j.y) * Ie;
                S({ x: We, y: Te, scale: ce }), ue(W), E(oe);
              }
            } else if (A.touches.length === 1 && C) {
              const W = A.touches[0],
                oe = W.clientX - m.x,
                de = W.clientY - m.y;
              S((Ne) => ({ ...Ne, x: Ne.x + oe, y: Ne.y + de })),
                D({ x: W.clientX, y: W.clientY });
            }
          }
        },
        [j, I, C, m, d]
      ),
      ie = f.useCallback(() => {
        ue(null), R(!1);
      }, []);
    return (
      f.useEffect(() => {
        const A = t.current;
        if (A)
          return (
            A.addEventListener("wheel", J, { passive: !1 }),
            () => A.removeEventListener("wheel", J)
          );
      }, [J]),
      f.useCallback(() => {
        S({ x: 0, y: 0, scale: 1 });
      }, []),
      r.jsxs("div", {
        className: "relative w-full h-full overflow-hidden bg-gray-50",
        children: [
          r.jsx("div", {
            className:
              "absolute md:bottom-4 md:left-4 bottom-16 left-[50%] md:translate-x-[0%] translate-x-[-50%] z-10",
            children: r.jsxs("div", {
              className:
                "bg-white rounded-lg shadow-lg flex items-center overflow-hidden border border-gray-200",
              children: [
                r.jsx("input", {
                  type: "text",
                  value: Q,
                  onChange: (A) => K(A.target.value),
                  onKeyPress: me,
                  placeholder: "輸入條碼或掃描...",
                  className:
                    "px-4 py-2 w-50 focus:outline-none text-gray-700 disabled:opacity-50",
                }),
                r.jsx("button", {
                  onClick: () => V(!0),
                  className: "p-2",
                  title: "掃描條碼",
                  children: r.jsx(Tr, { className: "w-6 h-6 text-blue-600" }),
                }),
              ],
            }),
          }),
          r.jsx("div", {
            className: "absolute bottom-4 right-4 z-10 flex gap-2",
            children: r.jsx("button", {
              onClick: () => u(!d),
              className: `p-3 rounded-lg shadow-lg transition-colors ${
                d
                  ? "bg-red-500 text-white hover:bg-red-600"
                  : "bg-white text-gray-700 hover:bg-gray-50"
              }`,
              title: p(d ? "canvas.unlockCanvas" : "canvas.lockCanvas"),
              children: d
                ? r.jsx(fi, { className: "w-6 h-6" })
                : r.jsx(qu, { className: "w-6 h-6" }),
            }),
          }),
          r.jsx("div", {
            ref: t,
            className: `w-full h-full relative ${
              T && !d ? "cursor-grab" : "cursor-default"
            } ${C ? "cursor-grabbing" : ""}`,
            onMouseDown: z,
            onMouseMove: X,
            onMouseUp: be,
            onMouseLeave: be,
            onTouchStart: B,
            onTouchMove: Z,
            onTouchEnd: ie,
            children: r.jsxs("div", {
              className: "absolute inset-0 origin-top-left",
              style: {
                transform: `translate(${j.x}px, ${j.y}px) scale(${j.scale})`,
                transformOrigin: "0 0",
              },
              children: [
                r.jsx("div", {
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
                r.jsxs("div", {
                  className: "relative",
                  "data-canvas-content": !0,
                  children: [
                    M.map((A) =>
                      r.jsx(
                        Nh,
                        {
                          component: A,
                          scale: j.scale,
                          isLocked: d,
                          isHighlighted: pe.includes(A.GUID),
                          onContainerClick: (H) => {
                            console.log("🖱️ 點擊櫃體，傳遞亮燈藥品代碼:", v),
                              i(H, v);
                          },
                        },
                        A.GUID
                      )
                    ),
                    e,
                  ],
                }),
              ],
            }),
          }),
          r.jsx(Xo, {
            isOpen: P,
            onClose: () => V(!1),
            onScanSuccess: ve,
            mode: "med_light_location_mode",
          }),
        ],
      })
    );
  },
  Ys = ({ content: e, isAdminMode: t }) => {
    const {
        openMedBoxModal: n,
        openAddMedBoxModal: s,
        openListDrawModal: o,
        openGridDrawModal: l,
        openAddShelfDrawContainerModal: a,
        openAddSubContainerModal: i,
        openAddStoreItemModal: c,
        setSelectedMedBox: x,
        setModalMode: g,
        setMedBoxModalOpen: h,
        showNotification: p,
        triggerRefresh: j,
        openEditStoreShelfModal: S,
        openEditParentContainerModal: C,
        updateContainerInLocalData: R,
        removeContainerFromLocalData: d,
      } = Xe(),
      { t: u } = xt(),
      [m, D] = f.useState(!1),
      [T, _] = f.useState(""),
      [P, V] = f.useState(!1),
      [Q, K] = f.useState(e.name),
      [pe, ye] = f.useState(!1),
      [v, b] = f.useState(!1);
    f.useEffect(() => {
      K(e.name);
    }, [e.name]);
    const L = (U) => {
        U.stopPropagation(), _(e.name || ""), D(!0);
      },
      w = (U) => {
        U.stopPropagation(), D(!1), _("");
      },
      N = (U) => {
        U.stopPropagation(), b(!0);
      },
      k = (U) => {
        U.stopPropagation(), b(!1);
      },
      M = async (U) => {
        U.stopPropagation(), ye(!0);
        try {
          let xe;
          if (e.type === "parent_container")
            xe = await De.deleteParentContainer(e.GUID);
          else if (e.type === "sub_container")
            xe = await De.deleteSubContainer(e.GUID);
          else if (
            e.type === "store_shelves" ||
            e.type === "dispensing_shelves"
          )
            xe = await De.deleteShelfContainer(e.GUID);
          else {
            p("不支援的容器類型", "error"), ye(!1), b(!1);
            return;
          }
          xe.Code === 200
            ? (p("刪除成功", "success"), d(e.GUID), b(!1))
            : p(xe.Result || "刪除失敗", "error");
        } catch (xe) {
          console.error("刪除容器失敗:", xe),
            p("刪除失敗，請稍後再試", "error");
        } finally {
          ye(!1), b(!1);
        }
      },
      J = async (U) => {
        if ((U.stopPropagation(), !T.trim())) {
          p("名稱不能為空", "error");
          return;
        }
        if (T === e.name) {
          D(!1);
          return;
        }
        V(!0);
        try {
          const xe = [
            {
              GUID: e.GUID,
              name: T.trim(),
              Master_GUID: e.Master_GUID,
              position: e.gird_position,
              serverName: e.serverName,
              serverType: e.serverType,
            },
          ];
          let F;
          if (e.type === "store_shelves" || e.type === "dispensing_shelves")
            F = await De.updateMedMapShelf(xe);
          else if (e.type === "sub_container")
            F = await De.updateSubSection(xe);
          else if (e.type === "parent_container")
            F = await De.updateMedMapSection(xe);
          else {
            p("不支援的容器類型", "error"), V(!1);
            return;
          }
          F.Code === 200
            ? (p("名稱更新成功", "success"),
              D(!1),
              K(T.trim()),
              R(e.GUID, { name: T.trim() }))
            : p(F.Result || "更新失敗", "error");
        } catch (xe) {
          console.error("更新名稱失敗:", xe),
            p("更新失敗，請稍後再試", "error");
        } finally {
          V(!1);
        }
      },
      z = (U) => {
        switch (U) {
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
      X = (U) => {
        switch (U) {
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
      be = (U) => {
        switch (U) {
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
      fe = (U) => {
        switch (U) {
          case "parent_container":
            return u("type.parentContainer");
          case "sub_container":
            return u("type.subContainer");
          case "dispensing_shelves":
            return u("type.medBoxShelf");
          case "store_shelves":
            return u("type.storeShelf");
          case "grid_draw":
            return u("type.gridDraw");
          case "list_draw":
            return u("type.listDraw");
          case "med_box":
            return u("type.medBox");
          default:
            return U;
        }
      };
    switch (e.type) {
      case "sub_container":
        return r.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${z(
            e.type || 0
          )} ${X(e.type || 0)}`,
          children: [
            r.jsxs("div", {
              className: "flex items-center space-x-2 mr-6 flex-1",
              children: [
                m
                  ? r.jsxs("div", {
                      className: "flex items-center space-x-2 flex-1",
                      children: [
                        r.jsx("input", {
                          type: "text",
                          value: T,
                          onChange: (U) => _(U.target.value),
                          onClick: (U) => U.stopPropagation(),
                          className:
                            "text-base font-semibold text-gray-800 border-2 border-blue-400 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500",
                          disabled: P,
                          autoFocus: !0,
                        }),
                        r.jsx("button", {
                          onClick: J,
                          disabled: P,
                          className:
                            "p-1 hover:bg-green-100 rounded transition-colors disabled:opacity-50",
                          title: "更新",
                          children: r.jsx(Ws, {
                            className: "w-5 h-5 text-green-600",
                          }),
                        }),
                        r.jsx("button", {
                          onClick: w,
                          disabled: P,
                          className:
                            "p-1 hover:bg-red-100 rounded transition-colors disabled:opacity-50",
                          title: "取消",
                          children: r.jsx(Fe, {
                            className: "w-5 h-5 text-red-600",
                          }),
                        }),
                      ],
                    })
                  : r.jsxs(r.Fragment, {
                      children: [
                        r.jsx("span", {
                          className:
                            "text-base font-semibold text-gray-800 whitespace-nowrap",
                          children: Q,
                        }),
                        r.jsx("button", {
                          onClick: L,
                          className:
                            "p-1 hover:bg-black/10 rounded transition-colors",
                          title: "編輯名稱",
                          children: r.jsx(yr, {
                            className: "w-4 h-4 text-gray-600",
                          }),
                        }),
                      ],
                    }),
                e.type != "parent_container" &&
                  !m &&
                  r.jsx("span", {
                    className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${be(
                      e.type
                    )}`,
                    children: fe(e.type),
                  }),
              ],
            }),
            e.type !== "none" &&
              !m &&
              r.jsxs("div", {
                className: "flex items-center space-x-1",
                children: [
                  t &&
                    r.jsx("button", {
                      className:
                        "p-1 hover:bg-red-100 rounded transition-colors",
                      onClick: N,
                      title: "刪除容器",
                      children: r.jsx(vr, {
                        className: "w-5 h-5 text-red-600",
                      }),
                    }),
                  r.jsx("button", {
                    className:
                      "p-1 hover:bg-black/10 rounded transition-colors",
                    onClick: (U) => {
                      U.stopPropagation(), a(e);
                    },
                    title: u("modal.add"),
                    children: r.jsx(bt, {
                      className: "w-6 h-6 text-green-700",
                    }),
                  }),
                ],
              }),
            v &&
              r.jsx("div", {
                className:
                  "absolute inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm",
                children: r.jsxs("div", {
                  className: "bg-white rounded-lg shadow-xl p-6 max-w-sm mx-4",
                  onClick: (U) => U.stopPropagation(),
                  children: [
                    r.jsx("h3", {
                      className: "text-lg font-semibold text-gray-900 mb-2",
                      children: "確認刪除",
                    }),
                    r.jsxs("p", {
                      className: "text-gray-600 mb-4",
                      children: [
                        "確定要刪除「",
                        e.name,
                        "」嗎？此操作無法復原。",
                      ],
                    }),
                    r.jsxs("div", {
                      className: "flex justify-end space-x-3",
                      children: [
                        r.jsx("button", {
                          onClick: k,
                          disabled: pe,
                          className:
                            "px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50",
                          children: "取消",
                        }),
                        r.jsx("button", {
                          onClick: M,
                          disabled: pe,
                          className:
                            "px-4 py-2 text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed",
                          children: pe ? "刪除中..." : "確認刪除",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
          ],
        });
      case "parent_container":
        return r.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${z(
            e.type || 0
          )} ${X(
            e.type || 0
          )} cursor-pointer hover:bg-black/5 transition-colors`,
          onClick: (U) => {
            m || C(e);
          },
          children: [
            r.jsxs("div", {
              className: "flex items-center space-x-2 mr-6 flex-1",
              children: [
                m
                  ? r.jsxs("div", {
                      className: "flex items-center space-x-2 flex-1",
                      children: [
                        r.jsx("input", {
                          type: "text",
                          value: T,
                          onChange: (U) => _(U.target.value),
                          onClick: (U) => U.stopPropagation(),
                          className:
                            "text-base font-semibold text-gray-800 border-2 border-blue-400 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500",
                          disabled: P,
                          autoFocus: !0,
                        }),
                        r.jsx("button", {
                          onClick: (U) => {
                            U.stopPropagation(), J(U);
                          },
                          disabled: P,
                          className:
                            "p-1 hover:bg-green-100 rounded transition-colors disabled:opacity-50",
                          title: "更新",
                          children: r.jsx(Ws, {
                            className: "w-5 h-5 text-green-600",
                          }),
                        }),
                        r.jsx("button", {
                          onClick: (U) => {
                            U.stopPropagation(), w(U);
                          },
                          disabled: P,
                          className:
                            "p-1 hover:bg-red-100 rounded transition-colors disabled:opacity-50",
                          title: "取消",
                          children: r.jsx(Fe, {
                            className: "w-5 h-5 text-red-600",
                          }),
                        }),
                      ],
                    })
                  : r.jsxs(r.Fragment, {
                      children: [
                        r.jsx("span", {
                          className:
                            "text-base font-semibold text-gray-800 whitespace-nowrap",
                          children: Q,
                        }),
                        r.jsx("button", {
                          onClick: (U) => {
                            U.stopPropagation(), L(U);
                          },
                          className:
                            "p-1 hover:bg-black/10 rounded transition-colors",
                          title: "編輯名稱",
                          children: r.jsx(yr, {
                            className: "w-4 h-4 text-gray-600",
                          }),
                        }),
                      ],
                    }),
                e.type != "parent_container" && !m
                  ? r.jsx("span", {
                      className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${be(
                        e.type
                      )}`,
                      children: fe(e.type),
                    })
                  : null,
              ],
            }),
            e.type !== "none" &&
              !m &&
              r.jsxs("div", {
                className: "flex items-center space-x-1",
                children: [
                  t &&
                    r.jsx("button", {
                      className:
                        "p-1 hover:bg-red-100 rounded transition-colors",
                      onClick: N,
                      title: "刪除容器",
                      children: r.jsx(vr, {
                        className: "w-5 h-5 text-red-600",
                      }),
                    }),
                  r.jsx("button", {
                    className:
                      "p-1 hover:bg-black/10 rounded transition-colors",
                    onClick: (U) => {
                      U.stopPropagation(), i(e);
                    },
                    title: u("modal.add"),
                    children: r.jsx(bt, {
                      className: "w-6 h-6 text-green-700",
                    }),
                  }),
                ],
              }),
            v &&
              r.jsx("div", {
                className:
                  "absolute inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm",
                children: r.jsxs("div", {
                  className: "bg-white rounded-lg shadow-xl p-6 max-w-sm mx-4",
                  onClick: (U) => U.stopPropagation(),
                  children: [
                    r.jsx("h3", {
                      className: "text-lg font-semibold text-gray-900 mb-2",
                      children: "確認刪除",
                    }),
                    r.jsxs("p", {
                      className: "text-gray-600 mb-4",
                      children: [
                        "確定要刪除「",
                        e.name,
                        "」嗎？此操作無法復原。",
                      ],
                    }),
                    r.jsxs("div", {
                      className: "flex justify-end space-x-3",
                      children: [
                        r.jsx("button", {
                          onClick: k,
                          disabled: pe,
                          className:
                            "px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50",
                          children: "取消",
                        }),
                        r.jsx("button", {
                          onClick: M,
                          disabled: pe,
                          className:
                            "px-4 py-2 text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed",
                          children: pe ? "刪除中..." : "確認刪除",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
          ],
        });
      case "med_box":
        return r.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${z(
            e.type || 0
          )} ${X(e.type || 0)}`,
          children: [
            r.jsx("div", {
              className: "flex items-center mr-4",
              children:
                e.type != "parent_container"
                  ? r.jsx("span", {
                      className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${be(
                        e.type
                      )}`,
                      children: fe(e.type),
                    })
                  : null,
            }),
            r.jsx("div", {
              className: "flex items-center space-x-1",
              children: r.jsx("button", {
                className: "p-1 hover:bg-black/10 rounded transition-colors",
                onClick: (U) => {
                  U.stopPropagation(), n(e);
                },
                title: u("modal.settings"),
                children: r.jsx(jn, { className: "w-6 h-6 text-gray-600" }),
              }),
            }),
          ],
        });
      case "dispensing_shelves":
        return r.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${z(
            e.type || 0
          )} ${X(e.type || 0)}`,
          onClick: (U) => {
            m || S(e);
          },
          children: [
            r.jsxs("div", {
              className: "flex items-center space-x-2 mr-6 flex-1",
              children: [
                m
                  ? r.jsxs("div", {
                      className: "flex items-center space-x-2 flex-1",
                      children: [
                        r.jsx("input", {
                          type: "text",
                          value: T,
                          onChange: (U) => _(U.target.value),
                          onClick: (U) => U.stopPropagation(),
                          className:
                            "text-base font-semibold text-gray-800 border-2 border-blue-400 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500",
                          disabled: P,
                          autoFocus: !0,
                        }),
                        r.jsx("button", {
                          onClick: J,
                          disabled: P,
                          className:
                            "p-1 hover:bg-green-100 rounded transition-colors disabled:opacity-50",
                          title: "更新",
                          children: r.jsx(Ws, {
                            className: "w-5 h-5 text-green-600",
                          }),
                        }),
                        r.jsx("button", {
                          onClick: w,
                          disabled: P,
                          className:
                            "p-1 hover:bg-red-100 rounded transition-colors disabled:opacity-50",
                          title: "取消",
                          children: r.jsx(Fe, {
                            className: "w-5 h-5 text-red-600",
                          }),
                        }),
                      ],
                    })
                  : r.jsxs(r.Fragment, {
                      children: [
                        r.jsx("span", {
                          className:
                            "text-base font-semibold text-gray-800 whitespace-nowrap",
                          children: Q,
                        }),
                        r.jsx("button", {
                          onClick: (U) => {
                            U.stopPropagation(), L(U);
                          },
                          className:
                            "p-1 hover:bg-black/10 rounded transition-colors",
                          title: "編輯名稱",
                          children: r.jsx(yr, {
                            className: "w-4 h-4 text-gray-600",
                          }),
                        }),
                      ],
                    }),
                e.type != "parent_container" &&
                  !m &&
                  r.jsx("span", {
                    className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${be(
                      e.type
                    )}`,
                    children: fe(e.type),
                  }),
              ],
            }),
            r.jsxs("div", {
              className: "flex items-center space-x-1",
              children: [
                t &&
                  !m &&
                  r.jsx("button", {
                    className: "p-1 hover:bg-red-100 rounded transition-colors",
                    onClick: N,
                    title: "刪除容器",
                    children: r.jsx(vr, { className: "w-5 h-5 text-red-600" }),
                  }),
                r.jsx("button", {
                  className: "p-1 hover:bg-black/10 rounded transition-colors",
                  onClick: (U) => {
                    U.stopPropagation();
                    const xe = {
                      GUID: `new_medbox_${Date.now()}`,
                      name: "",
                      box_type: "",
                      width: [],
                      width_index: 0,
                      med_info: [],
                      parentShelf: e,
                    };
                    x(xe), g("add"), h(!0);
                  },
                  title: u("modal.add"),
                  children: r.jsx(bt, { className: "w-6 h-6 text-green-700" }),
                }),
              ],
            }),
            v &&
              r.jsx("div", {
                className:
                  "absolute inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm",
                children: r.jsxs("div", {
                  className: "bg-white rounded-lg shadow-xl p-6 max-w-sm mx-4",
                  onClick: (U) => U.stopPropagation(),
                  children: [
                    r.jsx("h3", {
                      className: "text-lg font-semibold text-gray-900 mb-2",
                      children: "確認刪除",
                    }),
                    r.jsxs("p", {
                      className: "text-gray-600 mb-4",
                      children: [
                        "確定要刪除「",
                        e.name,
                        "」嗎？此操作無法復原。",
                      ],
                    }),
                    r.jsxs("div", {
                      className: "flex justify-end space-x-3",
                      children: [
                        r.jsx("button", {
                          onClick: k,
                          disabled: pe,
                          className:
                            "px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50",
                          children: "取消",
                        }),
                        r.jsx("button", {
                          onClick: M,
                          disabled: pe,
                          className:
                            "px-4 py-2 text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed",
                          children: pe ? "刪除中..." : "確認刪除",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
          ],
        });
      case "store_shelves":
        return r.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${z(
            e.type || 0
          )} ${X(
            e.type || 0
          )} cursor-pointer hover:bg-black/5 transition-colors`,
          onClick: (U) => {
            m || S(e);
          },
          children: [
            r.jsxs("div", {
              className: "flex items-center space-x-2 mr-6 flex-1",
              children: [
                m
                  ? r.jsxs("div", {
                      className: "flex items-center space-x-2 flex-1",
                      children: [
                        r.jsx("input", {
                          type: "text",
                          value: T,
                          onChange: (U) => _(U.target.value),
                          onClick: (U) => U.stopPropagation(),
                          className:
                            "text-base font-semibold text-gray-800 border-2 border-blue-400 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500",
                          disabled: P,
                          autoFocus: !0,
                        }),
                        r.jsx("button", {
                          onClick: (U) => {
                            U.stopPropagation(), J(U);
                          },
                          disabled: P,
                          className:
                            "p-1 hover:bg-green-100 rounded transition-colors disabled:opacity-50",
                          title: "更新",
                          children: r.jsx(Ws, {
                            className: "w-5 h-5 text-green-600",
                          }),
                        }),
                        r.jsx("button", {
                          onClick: (U) => {
                            U.stopPropagation(), w(U);
                          },
                          disabled: P,
                          className:
                            "p-1 hover:bg-red-100 rounded transition-colors disabled:opacity-50",
                          title: "取消",
                          children: r.jsx(Fe, {
                            className: "w-5 h-5 text-red-600",
                          }),
                        }),
                      ],
                    })
                  : r.jsxs(r.Fragment, {
                      children: [
                        r.jsx("span", {
                          className:
                            "text-base font-semibold text-gray-800 whitespace-nowrap",
                          children: Q,
                        }),
                        r.jsx("button", {
                          onClick: (U) => {
                            U.stopPropagation(), L(U);
                          },
                          className:
                            "p-1 hover:bg-black/10 rounded transition-colors",
                          title: "編輯名稱",
                          children: r.jsx(yr, {
                            className: "w-4 h-4 text-gray-600",
                          }),
                        }),
                      ],
                    }),
                e.type != "parent_container" &&
                  !m &&
                  r.jsx("span", {
                    className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${be(
                      e.type
                    )}`,
                    children: fe(e.type),
                  }),
              ],
            }),
            r.jsxs("div", {
              className: "flex items-center space-x-1",
              children: [
                t &&
                  !m &&
                  r.jsx("button", {
                    className: "p-1 hover:bg-red-100 rounded transition-colors",
                    onClick: N,
                    title: "刪除容器",
                    children: r.jsx(vr, { className: "w-5 h-5 text-red-600" }),
                  }),
                r.jsx("button", {
                  className: "p-1 hover:bg-black/10 rounded transition-colors",
                  onClick: (U) => {
                    U.stopPropagation(), c(e);
                  },
                  title: u("modal.add"),
                  children: r.jsx(bt, { className: "w-6 h-6 text-green-700" }),
                }),
              ],
            }),
            v &&
              r.jsx("div", {
                className:
                  "absolute inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm",
                children: r.jsxs("div", {
                  className: "bg-white rounded-lg shadow-xl p-6 max-w-sm mx-4",
                  onClick: (U) => U.stopPropagation(),
                  children: [
                    r.jsx("h3", {
                      className: "text-lg font-semibold text-gray-900 mb-2",
                      children: "確認刪除",
                    }),
                    r.jsxs("p", {
                      className: "text-gray-600 mb-4",
                      children: [
                        "確定要刪除「",
                        e.name,
                        "」嗎？此操作無法復原。",
                      ],
                    }),
                    r.jsxs("div", {
                      className: "flex justify-end space-x-3",
                      children: [
                        r.jsx("button", {
                          onClick: k,
                          disabled: pe,
                          className:
                            "px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50",
                          children: "取消",
                        }),
                        r.jsx("button", {
                          onClick: M,
                          disabled: pe,
                          className:
                            "px-4 py-2 text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed",
                          children: pe ? "刪除中..." : "確認刪除",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
          ],
        });
      case "list_draw":
        return r.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${z(
            e.type || 0
          )} ${X(e.type || 0)}`,
          children: [
            r.jsxs("div", {
              className: "flex items-center space-x-2 mr-6",
              children: [
                r.jsx("span", {
                  className:
                    "text-base font-semibold text-gray-800 whitespace-nowrap",
                  children: e.name,
                }),
                e.type != "parent_container"
                  ? r.jsx("span", {
                      className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${be(
                        e.type
                      )}`,
                      children: fe(e.type),
                    })
                  : null,
              ],
            }),
            r.jsx("button", {
              className: "p-1 hover:bg-black/10 rounded transition-colors",
              onClick: (U) => {
                U.stopPropagation(), o(e);
              },
              title: u("modal.settings"),
              children: r.jsx(jn, { className: "w-6 h-6 text-gray-600" }),
            }),
          ],
        });
      case "grid_draw":
        return r.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${z(
            e.type || 0
          )} ${X(e.type || 0)}`,
          children: [
            r.jsxs("div", {
              className: "flex items-center space-x-2 mr-6",
              children: [
                r.jsx("span", {
                  className:
                    "text-base font-semibold text-gray-800 whitespace-nowrap",
                  children: e.name,
                }),
                e.type != "parent_container"
                  ? r.jsx("span", {
                      className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${be(
                        e.type
                      )}`,
                      children: fe(e.type),
                    })
                  : null,
              ],
            }),
            r.jsx("button", {
              className: "p-1 hover:bg-black/10 rounded transition-colors",
              onClick: (U) => {
                U.stopPropagation(), l(e);
              },
              title: u("modal.settings"),
              children: r.jsx(jn, { className: "w-6 h-6 text-gray-600" }),
            }),
          ],
        });
      default:
        return r.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${z(
            e.type || 0
          )} ${X(e.type || 0)}`,
          children: [
            r.jsx("div", {
              className: "flex items-center space-x-2 mr-6",
              children:
                e.type != "parent_container"
                  ? r.jsx("span", {
                      className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${be(
                        e.type
                      )}`,
                      children: fe(e.type),
                    })
                  : null,
            }),
            e.type !== "none" &&
              r.jsx("button", {
                className: "p-1 hover:bg-black/10 rounded transition-colors",
                title: u("modal.settings"),
                children: r.jsx(jn, { className: "w-6 h-6 text-gray-600" }),
              }),
          ],
        });
    }
  },
  Wu = f.forwardRef(({ children: e }, t) => {
    const n = f.useRef(null),
      {
        selectedDepartmentType: s,
        apiDepartmentData: o,
        setApiDepartmentData: l,
        setSidebarOpen: a,
        openAddParentContainerModal: i,
        openEditStoreItemModal: c,
        openQRCodeScannerModal: x,
        openAddBarcodeModal: g,
        showNotification: h,
        isAdminMode: p,
        activeCanvas: j,
        setActiveCanvas: S,
      } = Xe(),
      [C, R] = f.useState({ x: 0, y: 0, scale: 1 }),
      [d, u] = f.useState(!1),
      [m, D] = f.useState(!1),
      [T, _] = f.useState({ x: 0, y: 0 }),
      [P, V] = f.useState(!1),
      [Q, K] = f.useState(""),
      [pe, ye] = f.useState(!1),
      [v, b] = f.useState(null),
      [L, w] = f.useState(!1),
      [N, k] = f.useState({
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
        draggedStockItem: null,
        draggedStockShelf: null,
      }),
      [M, J] = f.useState(null),
      z = f.useRef({}),
      X = () =>
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ) ||
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0,
      be = 8,
      fe = () => {
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
      U = (y, te, Y, $) => {
        try {
          const q = fe(),
            O = q.findIndex(
              (re) => re.department === y && re.canvasType === te
            ),
            ee = { department: y, canvasType: te, scale: Y, position: $ };
          O >= 0 ? (q[O] = ee) : q.push(ee),
            localStorage.setItem("med_map_anchor", JSON.stringify(q));
        } catch (q) {
          console.error("Error saving canvas state to localStorage:", q);
        }
      },
      xe = (y, te) =>
        fe().find(($) => $.department === y && $.canvasType === te) || null;
    f.useEffect(
      () => (
        S("drug"),
        () => {
          S(null);
        }
      ),
      [S]
    ),
      f.useEffect(() => {
        if (j !== "drug" || !s) return;
        const te = setInterval(async () => {
          try {
            console.log("🔄 Auto-refreshing data for DrugCanvas...");
            const Y = await De.getMedMapByDepartment(s);
            if (Y.Code === 200 && Y.Data) {
              console.log("📡 API 回傳成功，開始轉換資料");
              const $ = ut.convertMedMapApiToFakeData(Y.Data);
              if (!ut.validateConvertedData($)) {
                console.error("❌ 轉換後的資料驗證失敗");
                return;
              }
              console.log(
                "✅ Data refreshed and converted successfully, updating state..."
              ),
                l($);
            }
          } catch (Y) {
            console.error("❌ Failed to auto-refresh data:", Y);
          }
        }, 3 * 60 * 1e3);
        return () => {
          clearInterval(te);
        };
      }, [j, s, l]),
      f.useEffect(() => {
        if (s) {
          const y = xe(s, "drugCanvas");
          if (y) R({ x: y.position.x, y: y.position.y, scale: y.scale });
          else {
            const te = { x: 0, y: 0, scale: 1 };
            R(te), U(s, "drugCanvas", te.scale, te);
          }
        }
      }, [s]),
      f.useEffect(() => {
        if (!s) return;
        const y = setTimeout(() => {
          U(s, "drugCanvas", C.scale, { x: C.x, y: C.y });
        }, 500);
        return () => clearTimeout(y);
      }, [C, s]);
    const F = (y) =>
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
      me = (y) => {
        const [te, Y] = y.split(",").map(Number);
        return { row: te || 0, col: Y || 0 };
      },
      I = (y, te) => {
        const Y = (q, O = null) => {
            if (q.GUID === y) return { container: q, parent: O };
            if (q.contents)
              for (const ee of q.contents) {
                const re = Y(ee, q);
                if (re) return re;
              }
            return null;
          },
          $ = Ke();
        for (const q of $) {
          const O = Y(q);
          if (O) return O;
        }
        return null;
      },
      ue = (y, te) => {
        if (!y.contents) return [];
        const Y = te;
        if (!Y) return y.contents;
        const $ = me(Y.gird_position);
        console.log("📤 移除容器位置:", $);
        for (const q of y.contents) {
          const O = me(q.gird_position);
          if (O.row === $.row && O.col > $.col) {
            const ee = O.col - 1;
            (q.gird_position = `${O.row},${ee}`),
              console.log(
                `  ← 容器 ${q.GUID}: (${O.row},${O.col}) → (${O.row},${ee})`
              ),
              (z.current[q.GUID] = {
                GUID: q.GUID,
                Master_GUID: y.GUID,
                position: `${O.row},${ee}`,
                serverName: y.serverName,
                serverType: y.serverType,
                type: q.type,
                containerData: q,
              });
          }
        }
        return console.log("✓ 重新計算完成"), y.contents;
      },
      G = (y, te, Y, $, q) => {
        if (
          (y.contents || (y.contents = []),
          console.log("📥 插入容器到位置:", `(${Y},${$})`),
          console.log("   插入方向:", q),
          console.log("   目標父容器:", y.GUID),
          console.log("   插入前容器數量:", y.contents.length),
          y.contents.length === 0)
        )
          (Y = 0), ($ = 0), console.log("   父容器為空，放置在 (0,0)");
        else {
          const O = y.contents
            .filter((ee) => {
              const re = me(ee.gird_position || "0,0");
              return re.row === Y && re.col >= $;
            })
            .sort((ee, re) => {
              const he = me(ee.gird_position || "0,0");
              return me(re.gird_position || "0,0").col - he.col;
            });
          console.log(`   同 row ${Y} 需要移動的容器數量:`, O.length);
          for (const ee of O) {
            const re = me(ee.gird_position || "0,0"),
              he = re.col + 1;
            (ee.gird_position = `${re.row},${he}`),
              console.log(
                `  → 容器 ${ee.GUID}: (${re.row},${re.col}) → (${re.row},${he})`
              ),
              (z.current[ee.GUID] = {
                GUID: ee.GUID,
                Master_GUID: y.GUID,
                position: `${re.row},${he}`,
                serverName: y.serverName,
                serverType: y.serverType,
                type: ee.type,
                containerData: ee,
              });
          }
        }
        (te.gird_position = `${Y},${$}`),
          (te.Master_GUID = y.GUID),
          console.log(`Inserted container ${te.GUID} at position ${Y},${$}`),
          y.contents.push(te),
          (z.current[te.GUID] = {
            GUID: te.GUID,
            Master_GUID: y.GUID,
            position: `${Y},${$}`,
            serverName: y.serverName,
            serverType: y.serverType,
            type: te.type,
            containerData: te,
          }),
          te.type === "dispensing_shelves" &&
            te.contents &&
            te.contents.forEach((O) => {
              O.type === "med_box" &&
                (z.current[O.GUID] = {
                  GUID: O.GUID,
                  Master_GUID: O.Master_GUID,
                  position: O.gird_position,
                  serverName: y.serverName,
                  serverType: y.serverType,
                  type: O.type,
                  containerData: O,
                });
            });
      },
      E = (y, te, Y) => {
        const $ = y.getBoundingClientRect(),
          q = $.left + $.width / 2,
          O = $.top + $.height / 2,
          ee = te - q,
          re = Y - O;
        return Math.abs(ee) > Math.abs(re)
          ? ee > 0
            ? "right"
            : "left"
          : re > 0
          ? "bottom"
          : "top";
      },
      se = (y, te, Y, $) => {
        if (!m) return;
        if (($.preventDefault(), $.stopPropagation(), N.floatingElement))
          try {
            N.floatingElement.parentNode &&
              N.floatingElement.parentNode.removeChild(N.floatingElement);
          } catch (ge) {
            console.error("清除舊浮動元素失敗:", ge);
          }
        const q = X(),
          O =
            "touches" in $
              ? $.touches[0].clientX
              : ("pointerId" in $, $.clientX),
          ee =
            "touches" in $
              ? $.touches[0].clientY
              : ("pointerId" in $, $.clientY),
          re = Y.getBoundingClientRect(),
          he = { x: O - re.left, y: ee - re.top },
          ne = Y.cloneNode(!0);
        (ne.style.position = "fixed"),
          (ne.style.left = `${O - he.x}px`),
          (ne.style.top = `${ee - he.y}px`),
          (ne.style.width = `${re.width}px`),
          (ne.style.height = `${re.height}px`),
          (ne.style.zIndex = "9999"),
          (ne.style.opacity = "0.8"),
          (ne.style.boxShadow = "0 10px 25px rgba(0,0,0,0.3)"),
          (ne.style.pointerEvents = "none"),
          document.body.appendChild(ne),
          console.log("開始拖曳 stockItem:", y),
          console.log("來源 shelf:", te),
          k({
            isDragging: !0,
            draggedContainer: null,
            draggedElement: Y,
            floatingElement: ne,
            originalParent: null,
            originalPosition: "",
            originalIndex: -1,
            mouseOffset: he,
            isMobileDrag: q,
            originalData: null,
            draggedStockItem: y,
            draggedStockShelf: te,
          });
      },
      le = (y, te, Y) => {
        if (!m || !F(y.type)) return;
        if (y.type === "sub_container" && !p) {
          h("需要開啟後台模式才能移動子容器", "error");
          return;
        }
        if (
          ((z.current = {}),
          Y.preventDefault(),
          Y.stopPropagation(),
          N.floatingElement)
        )
          try {
            N.floatingElement.parentNode &&
              N.floatingElement.parentNode.removeChild(N.floatingElement);
          } catch (Me) {
            console.error("清除舊浮動元素失敗:", Me);
          }
        const $ = X(),
          q =
            "touches" in Y
              ? Y.touches[0].clientX
              : ("pointerId" in Y, Y.clientX),
          O =
            "touches" in Y
              ? Y.touches[0].clientY
              : ("pointerId" in Y, Y.clientY),
          ee = te.getBoundingClientRect(),
          re = { x: q - ee.left, y: O - ee.top },
          he = I(y.GUID);
        if (!he) return;
        console.log("拖曳目標", y), console.log("拖曳目標", he);
        const ne = te.cloneNode(!0);
        (ne.style.position = "fixed"),
          (ne.style.left = `${q - re.x}px`),
          (ne.style.top = `${O - re.y}px`),
          (ne.style.width = `${ee.width}px`),
          (ne.style.height = `${ee.height}px`),
          (ne.style.zIndex = "9999"),
          (ne.style.opacity = "0.8"),
          (ne.style.boxShadow = "0 10px 25px rgba(0,0,0,0.3)"),
          (ne.style.pointerEvents = "none"),
          document.body.appendChild(ne);
        const ge = he.parent.contents.findIndex((Me) => Me.GUID === y.GUID),
          je = JSON.parse(JSON.stringify(he.parent.contents));
        he.parent.contents.splice(ge, 1), console.log(ge);
        const _e = he.parent,
          Ce = ue(he.parent, y);
        (he.parent.contents = Ce),
          console.log(he.parent),
          k({
            isDragging: !0,
            draggedContainer: y,
            draggedElement: te,
            floatingElement: ne,
            originalParent: _e,
            originalPosition: y.gird_position,
            originalIndex: ge,
            mouseOffset: re,
            isMobileDrag: $,
            originalData: je,
          });
      },
      B = (y) => {
        if (!N.isDragging || !N.floatingElement) return;
        const te = "touches" in y ? y.touches[0].clientX : y.clientX,
          Y = "touches" in y ? y.touches[0].clientY : y.clientY;
        if (
          ((N.floatingElement.style.left = `${te - N.mouseOffset.x}px`),
          (N.floatingElement.style.top = `${Y - N.mouseOffset.y}px`),
          N.draggedStockItem)
        ) {
          const O = document.elementFromPoint(te, Y),
            ee = O == null ? void 0 : O.closest("[data-stock-guid]");
          if (ee) {
            const he = ee.getAttribute("data-stock-guid"),
              ne = (je) => {
                for (const _e of je) {
                  if (_e.type === "store_shelves" && _e.medMapStock) {
                    const Ce = _e.medMapStock.find((Me) => Me.GUID === he);
                    if (Ce) return { stockItem: Ce, shelf: _e };
                  }
                  if (_e.contents) {
                    const Ce = ne(_e.contents);
                    if (Ce) return Ce;
                  }
                }
                return null;
              },
              ge = ne(o);
            if (ge && ge.stockItem.GUID !== N.draggedStockItem.GUID) {
              const je = ee.getBoundingClientRect(),
                _e = je.left + je.width / 2,
                Ce = te < _e ? "left" : "right";
              J({
                container: ge.shelf,
                direction: null,
                element: ee,
                stockItem: ge.stockItem,
                stockItemDirection: Ce,
              });
              return;
            }
          }
          const re = O == null ? void 0 : O.closest("[data-container-guid]");
          if (re) {
            const he = re.getAttribute("data-container-guid"),
              ne = I(he);
            if (ne && ne.container.type === "store_shelves") {
              J({ container: ne.container, direction: null, element: re });
              return;
            }
          }
          J(null);
          return;
        }
        const $ = document.elementFromPoint(te, Y),
          q = $ == null ? void 0 : $.closest("[data-container-guid]");
        if (q) {
          const O = q.getAttribute("data-container-guid"),
            ee = I(O);
          if (ee) {
            const re = ve(N.draggedContainer.type),
              he = N.draggedContainer.type,
              ne = ee.container.type;
            if (re.includes(ne)) {
              const ge = E(q, te, Y);
              if (he === "med_box" && !["left", "right"].includes(ge)) {
                J(null);
                return;
              }
              J({ container: ee.container, direction: ge, element: q });
              return;
            }
            if (he === "parent_container" || he === "sub_container") {
              let ge = q.parentElement;
              for (; ge; ) {
                if (ge.hasAttribute("data-container-guid")) {
                  const je = ge.getAttribute("data-container-guid"),
                    _e = I(je);
                  if (_e && re.includes(_e.container.type)) {
                    const Ce = E(ge, te, Y);
                    console.log(
                      `🔼 向上找到有效目標: ${_e.container.type} (${_e.container.name})`
                    ),
                      J({
                        container: _e.container,
                        direction: Ce,
                        element: ge,
                      });
                    return;
                  }
                }
                ge = ge.parentElement;
              }
            }
          }
        }
        J(null);
      },
      Z = async (y) => {
        if (!N.isDragging) return;
        if (N.floatingElement)
          try {
            N.floatingElement.parentNode &&
              N.floatingElement.parentNode.removeChild(N.floatingElement);
          } catch (q) {
            console.error("清除浮動元素失敗:", q);
          }
        if (N.draggedStockItem && N.draggedStockShelf) {
          if (
            (console.log("StockItem 拖曳結束"),
            console.log("Drop Target:", M),
            M)
          ) {
            const q = [];
            if (M.stockItem && M.stockItemDirection) {
              console.log(
                `拖曳到 stockItem ${M.stockItem.GUID} 的 ${M.stockItemDirection} 邊`
              );
              const O = M.container,
                ee = N.draggedStockShelf,
                re = N.draggedStockItem,
                he = Number(M.stockItem.location),
                ne = Number(re.location);
              if (O.GUID === ee.GUID) {
                console.log("同一層架內移動");
                const je = ee.medMapStock.findIndex(
                  (Me) => Me.GUID === re.GUID
                );
                je !== -1 && ee.medMapStock.splice(je, 1),
                  ee.medMapStock.forEach((Me) => {
                    const Ee = Number(Me.location);
                    Ee > ne &&
                      ((Me.location = String(Ee - 1)), q.push({ ...Me }));
                  });
                let _e;
                const Ce = he > ne ? he - 1 : he;
                M.stockItemDirection === "left" ? (_e = Ce) : (_e = Ce + 1),
                  ee.medMapStock.forEach((Me) => {
                    const Ee = Number(Me.location);
                    Ee >= _e &&
                      ((Me.location = String(Ee + 1)), q.push({ ...Me }));
                  }),
                  (re.location = String(_e)),
                  ee.medMapStock.push(re),
                  ee.medMapStock.sort(
                    (Me, Ee) => Number(Me.location) - Number(Ee.location)
                  ),
                  q.push({ ...re });
              } else {
                console.log("不同層架間移動");
                const je = ee.medMapStock.findIndex(
                  (Ce) => Ce.GUID === re.GUID
                );
                je !== -1 && ee.medMapStock.splice(je, 1),
                  ee.medMapStock.forEach((Ce) => {
                    const Me = Number(Ce.location);
                    Me > ne &&
                      ((Ce.location = String(Me - 1)), q.push({ ...Ce }));
                  });
                let _e;
                M.stockItemDirection === "left" ? (_e = he) : (_e = he + 1),
                  O.medMapStock.forEach((Ce) => {
                    const Me = Number(Ce.location);
                    Me >= _e &&
                      ((Ce.location = String(Me + 1)), q.push({ ...Ce }));
                  }),
                  (re.location = String(_e)),
                  (re.shelf_guid = O.GUID),
                  O.medMapStock.push(re),
                  O.medMapStock.sort(
                    (Ce, Me) => Number(Ce.location) - Number(Me.location)
                  ),
                  q.push({ ...re });
              }
            } else if (M.container.type === "store_shelves") {
              console.log("拖曳到 store_shelves 容器");
              const O = M.container,
                ee = N.draggedStockShelf,
                re = N.draggedStockItem,
                he = Number(re.location),
                ne = ee.medMapStock.findIndex((ge) => ge.GUID === re.GUID);
              ne !== -1 &&
                (ee.medMapStock.splice(ne, 1),
                ee.medMapStock.forEach((ge) => {
                  const je = Number(ge.location);
                  je > he &&
                    ((ge.location = String(je - 1)), q.push({ ...ge }));
                })),
                (re.location = "0"),
                (re.shelf_guid = O.GUID),
                O.medMapStock || (O.medMapStock = []),
                O.medMapStock.forEach((ge) => {
                  const je = Number(ge.location);
                  (ge.location = String(je + 1)), q.push({ ...ge });
                }),
                O.medMapStock.push(re),
                O.medMapStock.sort(
                  (ge, je) => Number(ge.location) - Number(je.location)
                ),
                q.push({ ...re });
            }
            if (q.length > 0) {
              console.log("準備更新的 stockItems:", q);
              try {
                const O = await De.updateStock(q);
                O.Code === 200
                  ? h("藥品位置更新成功", "success")
                  : h(O.Result || "更新失敗", "error");
              } catch (O) {
                console.error("更新 stockItem 失敗:", O),
                  h("更新失敗，請稍後再試", "error");
              }
            }
          }
          k({
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
            draggedStockItem: null,
            draggedStockShelf: null,
          }),
            J(null);
          return;
        }
        let te = null,
          Y = null,
          $ = null;
        if (
          (console.log("Drop Target:", M),
          console.log("Is Mobile Drag:", N.isMobileDrag),
          N.isMobileDrag)
        )
          if (M) {
            (te = M.direction), ($ = M.container);
            const q = I(N.draggedContainer.GUID);
            let O = null;
            if (q) {
              O = q.parent.GUID;
              const _e = q.parent.contents.findIndex(
                (Me) => Me.GUID === N.draggedContainer.GUID
              );
              q.parent.contents.splice(_e, 1);
              const Ce = ue(q.parent, N.draggedContainer);
              q.parent.contents = Ce;
            }
            const ee = I(M.container.Master_GUID || M.container.GUID);
            let re = M.container;
            if (O && ee && ee.container.GUID === O) {
              const _e = ee.container.contents.find(
                (Ce) => Ce.GUID === M.container.GUID
              );
              _e &&
                ((re = _e),
                console.log(
                  "同一父容器內移動，更新後的目標容器位置:",
                  _e.gird_position
                ));
            }
            const he = me(re.gird_position || "0,0");
            let ne = he.row,
              ge = he.col;
            switch (M.direction) {
              case "top":
                ne = Math.max(0, he.row);
                break;
              case "bottom":
                ne = he.row + 1;
                break;
              case "left":
                ge = Math.max(0, he.col);
                break;
              case "right":
                ge = he.col + 1;
                break;
            }
            let je = (ee == null ? void 0 : ee.container) || M.container;
            if (
              (N.draggedContainer.class != M.class && (je = M),
              N.draggedContainer.type === "med_box" &&
                M.container.type !== "med_box")
            )
              if (
                (console.log("藥盒移動目標到層架上"),
                (je = M.container),
                je.contents.length > 0)
              ) {
                let _e = 0,
                  Ce = 0;
                je.contents.forEach((Me) => {
                  const Ee = me(Me.gird_position || "0,0").row,
                    Ze = me(Me.gird_position || "0,0").col;
                  _e > Ee && (_e = Ee), Ce > Ze && (Ce = Ze);
                });
                for (let Me = 0; Me <= Ce; Me++)
                  for (let Ee = 0; Ee <= _e; Ee++) {
                    const Ze = `${Me},${Ee}`;
                    je.contents.filter((Un) => Un.grid_position === Ze)
                      .length === 0 && ((ne = Me), (ge = Ee));
                  }
              } else (ne = 0), (ge = 0);
            (Y = je), G(je, N.draggedContainer, ne, ge, M.direction);
          } else
            console.log("無效拖放，復原所有容器位置"),
              N.originalData &&
                N.originalParent &&
                (N.originalParent.contents = JSON.parse(
                  JSON.stringify(N.originalData)
                )),
              (te = null),
              ($ = null),
              (Y = N.originalParent);
        else if (M) {
          (te = M.direction), ($ = M.container);
          const q = I(N.draggedContainer.GUID);
          let O = null;
          if (
            (console.log("=== 開始處理容器拖曳 ==="),
            console.log("拖曳容器 GUID:", N.draggedContainer.GUID),
            console.log("拖曳容器原始位置:", N.draggedContainer.gird_position),
            q)
          ) {
            (O = q.parent.GUID),
              console.log("原始父容器 GUID:", O),
              console.log(
                "移除前父容器的 contents 數量:",
                q.parent.contents.length
              );
            const _e = q.parent.contents.findIndex(
              (Me) => Me.GUID === N.draggedContainer.GUID
            );
            q.parent.contents.splice(_e, 1),
              console.log(
                "移除後父容器的 contents 數量:",
                q.parent.contents.length
              );
            const Ce = ue(q.parent, N.draggedContainer);
            (q.parent.contents = Ce),
              console.log("重新計算後的容器列表:"),
              q.parent.contents.forEach((Me) => {
                console.log(`  - ${Me.GUID}: ${Me.gird_position}`);
              });
          }
          const ee = I(M.container.Master_GUID || M.container.GUID);
          let re = M.container;
          if (
            (console.log("目標容器原始位置:", M.container.gird_position),
            O && ee && ee.container.GUID === O)
          ) {
            console.log("✓ 在同一個父容器內移動");
            const _e = ee.container.contents.find(
              (Ce) => Ce.GUID === M.container.GUID
            );
            _e &&
              ((re = _e),
              console.log(
                "同一父容器內移動，更新後的目標容器位置:",
                _e.gird_position
              ));
          } else console.log("✗ 跨父容器移動或父容器不同");
          const he = me(re.gird_position || "0,0");
          let ne = he.row,
            ge = he.col;
          switch (M.direction) {
            case "top":
              ne = Math.max(0, he.row);
              break;
            case "bottom":
              ne = he.row + 1;
              break;
            case "left":
              ge = Math.max(0, he.col);
              break;
            case "right":
              ge = he.col + 1;
              break;
          }
          console.log("------目標容器", M),
            console.log("------拖曳容器", N.draggedContainer);
          let je = (ee == null ? void 0 : ee.container) || M.container;
          if (
            (console.log(N.draggedContainer.class),
            console.log(M.container.class),
            console.log(N.draggedContainer.class != M.container.class),
            N.draggedContainer.class != M.container.class &&
              ((je = M.container),
              console.log("------這邊顯示放到上層容器現象"),
              console.log("------目標容器", M),
              console.log("------拖曳容器", N.draggedContainer),
              console.log("------目標父容器", je)),
            N.draggedContainer.type === "med_box" &&
              M.container.type !== "med_box")
          )
            if (
              (console.log("藥盒移動目標到層架上"),
              (je = M.container),
              je.contents.length > 0)
            ) {
              let _e = 0,
                Ce = 0;
              je.contents.forEach((Me) => {
                const Ee = me(Me.gird_position || "0,0").row,
                  Ze = me(Me.gird_position || "0,0").col;
                _e > Ee && (_e = Ee), Ce > Ze && (Ce = Ze);
              });
              for (let Me = 0; Me <= Ce; Me++)
                for (let Ee = 0; Ee <= _e; Ee++) {
                  const Ze = `${Me},${Ee}`;
                  je.contents.filter((Un) => Un.grid_position === Ze).length ===
                    0 && ((ne = Me), (ge = Ee));
                }
            } else (ne = 0), (ge = 0);
          (Y = je), G(je, N.draggedContainer, ne, ge, M.direction);
        } else
          console.log("無效拖放，復原所有容器位置"),
            N.originalData &&
              N.originalParent &&
              (N.originalParent.contents = JSON.parse(
                JSON.stringify(N.originalData)
              )),
            (te = null),
            ($ = null),
            (Y = N.originalParent);
        k({
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
          draggedStockItem: null,
          draggedStockShelf: null,
        }),
          J(null),
          console.log("Drop Direction:", te),
          console.log("Parent Object:", Y),
          console.log("Target Object:", $),
          console.log("API更新資料：", z),
          await Ch(z);
      };
    f.useEffect(() => {
      if (N.isDragging)
        if (X()) {
          const te = (q) => {
              q.preventDefault(), B(q);
            },
            Y = (q) => Z(),
            $ = (q) => Z();
          return (
            document.addEventListener("pointermove", te, { passive: !1 }),
            document.addEventListener("pointerup", Y),
            document.addEventListener("pointercancel", $),
            () => {
              document.removeEventListener("pointermove", te),
                document.removeEventListener("pointerup", Y),
                document.removeEventListener("pointercancel", $);
            }
          );
        } else {
          const te = (O) => B(O),
            Y = (O) => Z(),
            $ = (O) => {
              O.preventDefault(), B(O);
            },
            q = (O) => Z();
          return (
            document.addEventListener("mousemove", te),
            document.addEventListener("mouseup", Y),
            document.addEventListener("touchmove", $, { passive: !1 }),
            document.addEventListener("touchend", q),
            () => {
              document.removeEventListener("mousemove", te),
                document.removeEventListener("mouseup", Y),
                document.removeEventListener("touchmove", $),
                document.removeEventListener("touchend", q);
            }
          );
        }
    }, [N.isDragging, M]),
      f.useEffect(
        () => () => {
          if (N.floatingElement)
            try {
              N.floatingElement.parentNode &&
                N.floatingElement.parentNode.removeChild(N.floatingElement);
            } catch (y) {
              console.error("組件卸載時清除浮動元素失敗:", y);
            }
        },
        [N.floatingElement]
      ),
      f.useEffect(() => {
        const y = (Y) => {
            Y.code === "Space" && !Y.repeat && (Y.preventDefault(), V(!0));
          },
          te = (Y) => {
            Y.code === "Space" && (Y.preventDefault(), V(!1), u(!1));
          };
        return (
          window.addEventListener("keydown", y),
          window.addEventListener("keyup", te),
          () => {
            window.removeEventListener("keydown", y),
              window.removeEventListener("keyup", te);
          }
        );
      }, []);
    const ie = f.useCallback(
        (y) => {
          var Y;
          if (m) return;
          if (y.ctrlKey || y.metaKey) {
            y.preventDefault(), y.stopPropagation();
            const $ =
              (Y = n.current) == null ? void 0 : Y.getBoundingClientRect();
            if (!$) return;
            const q = y.clientX - $.left,
              O = y.clientY - $.top,
              ee = y.deltaY > 0 ? 0.9 : 1.1,
              re = Math.max(0.1, Math.min(5, C.scale * ee)),
              he = re / C.scale,
              ne = q - (q - C.x) * he,
              ge = O - (O - C.y) * he;
            R({ x: ne, y: ge, scale: re });
          }
        },
        [C, m]
      ),
      A = f.useCallback(
        (y) => {
          m ||
            !P ||
            (u(!0),
            _({ x: y.clientX, y: y.clientY }),
            b({ x: y.clientX, y: y.clientY }),
            w(!1),
            y.preventDefault());
        },
        [m, P]
      ),
      H = f.useCallback(
        (y) => {
          if (!d || m) return;
          const te = y.clientX - T.x,
            Y = y.clientY - T.y;
          if (v) {
            const $ = Math.abs(y.clientX - v.x),
              q = Math.abs(y.clientY - v.y);
            ($ > 5 || q > 5) && w(!0);
          }
          R(($) => ({ ...$, x: $.x + te, y: $.y + Y })),
            _({ x: y.clientX, y: y.clientY });
        },
        [d, T, m, v]
      ),
      W = f.useCallback(() => {
        u(!1), b(null);
      }, []),
      [oe, de] = f.useState(null),
      [Ne, ce] = f.useState({ x: 0, y: 0 }),
      we = (y) => {
        if (y.length < 2) return null;
        const te = y[0],
          Y = y[1];
        return Math.sqrt(
          Math.pow(Y.clientX - te.clientX, 2) +
            Math.pow(Y.clientY - te.clientY, 2)
        );
      },
      ke = (y) => {
        if (y.length === 1) return { x: y[0].clientX, y: y[0].clientY };
        const te = y[0],
          Y = y[1];
        return {
          x: (te.clientX + Y.clientX) / 2,
          y: (te.clientY + Y.clientY) / 2,
        };
      },
      Ie = f.useCallback(
        (y) => {
          if (!m) {
            if (y.touches.length === 2) {
              const te = we(y.touches),
                Y = ke(y.touches);
              de(te), ce(Y);
            } else if (y.touches.length === 1) {
              const te = y.touches[0];
              _({ x: te.clientX, y: te.clientY }), u(!0);
            }
          }
        },
        [m]
      ),
      We = f.useCallback(
        (y) => {
          var te;
          if (!m) {
            if ((y.preventDefault(), y.touches.length === 2 && oe !== null)) {
              const Y = we(y.touches),
                $ = ke(y.touches);
              if (Y && oe) {
                const q =
                  (te = n.current) == null
                    ? void 0
                    : te.getBoundingClientRect();
                if (!q) return;
                const O = Y / oe,
                  ee = Math.max(0.1, Math.min(5, C.scale * O)),
                  re = $.x - q.left,
                  he = $.y - q.top,
                  ne = ee / C.scale,
                  ge = re - (re - C.x) * ne,
                  je = he - (he - C.y) * ne;
                R({ x: ge, y: je, scale: ee }), de(Y), ce($);
              }
            } else if (y.touches.length === 1 && d) {
              const Y = y.touches[0],
                $ = Y.clientX - T.x,
                q = Y.clientY - T.y;
              R((O) => ({ ...O, x: O.x + $, y: O.y + q })),
                _({ x: Y.clientX, y: Y.clientY });
            }
          }
        },
        [C, oe, d, T, m]
      ),
      Te = f.useCallback(() => {
        de(null), u(!1);
      }, []);
    f.useEffect(() => {
      const y = n.current;
      if (y)
        return (
          y.addEventListener("wheel", ie, { passive: !1 }),
          () => y.removeEventListener("wheel", ie)
        );
    }, [ie]);
    const Ke = () => (!o || o.length === 0 ? [] : o),
      Le = (y) => {
        if (!y || y.length === 0)
          return { sortedContents: [], maxRow: 0, maxCol: 0 };
        const te = y.map((O) => ({
            ...O,
            gridPos: me(O.gird_position || "0,0"),
          })),
          Y = Math.max(...te.map((O) => O.gridPos.row), 0),
          $ = Math.max(...te.map((O) => O.gridPos.col), 0);
        return {
          sortedContents: te.sort((O, ee) =>
            O.gridPos.row !== ee.gridPos.row
              ? O.gridPos.row - ee.gridPos.row
              : O.gridPos.col - ee.gridPos.col
          ),
          maxRow: Y,
          maxCol: $,
        };
      },
      kt = Ke(),
      Rt = Math.max(...kt.map((y) => me(y.gird_position || "0,0").row), 0),
      On = Math.max(...kt.map((y) => me(y.gird_position || "0,0").col), 0),
      Gt = (y) => {
        const te = ($) => {
            if (
              $.width &&
              Array.isArray($.width) &&
              typeof $.width_index == "number" &&
              $.width_index >= 0 &&
              $.width_index < $.width.length
            ) {
              const O = parseFloat($.width[$.width_index]);
              if (!isNaN(O)) {
                const ee = O * 20;
                return Math.max(200, ee);
              }
            }
            return 200;
          },
          Y = ($) => {
            switch ($) {
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
              te(y),
              r.jsxs(
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
                    r.jsx("div", {
                      onMouseDown:
                        m && F(y.type) && !X()
                          ? ($) =>
                              le(
                                y,
                                $.currentTarget.closest(
                                  "[data-container-guid]"
                                ),
                                $
                              )
                          : void 0,
                      onTouchStart:
                        m && F(y.type) && !X()
                          ? ($) =>
                              le(
                                y,
                                $.currentTarget.closest(
                                  "[data-container-guid]"
                                ),
                                $
                              )
                          : void 0,
                      onPointerDown:
                        m && F(y.type) && X()
                          ? ($) =>
                              le(
                                y,
                                $.currentTarget.closest(
                                  "[data-container-guid]"
                                ),
                                $
                              )
                          : void 0,
                      className: m && F(y.type) ? "cursor-move" : "",
                      children: r.jsx(Ys, { content: y, isAdminMode: p }),
                    }),
                    r.jsx("div", { className: "flex-1 p-1", children: er(y) }),
                  ],
                },
                y.GUID
              )
            );
          case "sub_container":
          case "parent_container":
            return r.jsxs(
              "div",
              {
                "data-container-guid": y.GUID,
                className: `${Y(
                  y.type || 0
                )} border-2 overflow-hidden rounded-lg shadow-sm min-h-[80px] flex flex-col h-full`,
                children: [
                  r.jsx("div", {
                    onMouseDown:
                      m && F(y.type) && !X()
                        ? ($) =>
                            le(
                              y,
                              $.currentTarget.closest("[data-container-guid]"),
                              $
                            )
                        : void 0,
                    onTouchStart:
                      m && F(y.type) && !X()
                        ? ($) =>
                            le(
                              y,
                              $.currentTarget.closest("[data-container-guid]"),
                              $
                            )
                        : void 0,
                    onPointerDown:
                      m && F(y.type) && X()
                        ? ($) =>
                            le(
                              y,
                              $.currentTarget.closest("[data-container-guid]"),
                              $
                            )
                        : void 0,
                    className: m && F(y.type) ? "cursor-move" : "",
                    children: r.jsx(Ys, { content: y, isAdminMode: p }),
                  }),
                  r.jsx("div", { className: "flex-1  p-1", children: er(y) }),
                ],
              },
              y.GUID
            );
          case "grid_draw":
            return r.jsxs(
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
                  r.jsx("div", {
                    onMouseDown:
                      m && F(y.type) && !X()
                        ? ($) =>
                            le(
                              y,
                              $.currentTarget.closest("[data-container-guid]"),
                              $
                            )
                        : void 0,
                    onTouchStart:
                      m && F(y.type) && !X()
                        ? ($) =>
                            le(
                              y,
                              $.currentTarget.closest("[data-container-guid]"),
                              $
                            )
                        : void 0,
                    onPointerDown:
                      m && F(y.type) && X()
                        ? ($) =>
                            le(
                              y,
                              $.currentTarget.closest("[data-container-guid]"),
                              $
                            )
                        : void 0,
                    className: m && F(y.type) ? "cursor-move" : "",
                    children: r.jsx(Ys, { content: y, isAdminMode: p }),
                  }),
                  r.jsx("div", {
                    className: "flex-1 p-1 flex items-center",
                    children: er(y),
                  }),
                ],
              },
              y.GUID
            );
          default:
            return r.jsxs(
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
                  r.jsx("div", {
                    onMouseDown:
                      m && F(y.type) && !X()
                        ? ($) =>
                            le(
                              y,
                              $.currentTarget.closest("[data-container-guid]"),
                              $
                            )
                        : void 0,
                    onTouchStart:
                      m && F(y.type) && !X()
                        ? ($) =>
                            le(
                              y,
                              $.currentTarget.closest("[data-container-guid]"),
                              $
                            )
                        : void 0,
                    onPointerDown:
                      m && F(y.type) && X()
                        ? ($) =>
                            le(
                              y,
                              $.currentTarget.closest("[data-container-guid]"),
                              $
                            )
                        : void 0,
                    className: m && F(y.type) ? "cursor-move" : "",
                    children: r.jsx(Ys, { content: y, isAdminMode: p }),
                  }),
                  r.jsx("div", { className: "flex-1 p-1", children: er(y) }),
                ],
              },
              y.GUID
            );
        }
      },
      er = (y) => {
        const te = (Y, $, q) => {
          const O = Array($ + 1)
              .fill(null)
              .map(() => Array(q + 1).fill(!1)),
            ee = {};
          return (
            Y.forEach((re) => {
              const he = me(re.gird_position || "0,0");
              (ee[`${he.row},${he.col}`] = re), (O[he.row][he.col] = !0);
            }),
            r.jsx("table", {
              className: "w-full h-full",
              style: { borderCollapse: "none", borderSpacing: "0px" },
              children: r.jsx("tbody", {
                children: Array.from({ length: $ + 1 }, (re, he) =>
                  r.jsx(
                    "tr",
                    {
                      className: "h-full",
                      style: { height: `${100 / ($ + 1)}%`, minHeight: "80px" },
                      children: Array.from({ length: q + 1 }, (ne, ge) => {
                        const je = `${he},${ge}`,
                          _e = ee[je];
                        return _e
                          ? r.jsxs(
                              "td",
                              {
                                className: "align-top bg-transparent",
                                style: {
                                  width: `${100 / (q + 1)}%`,
                                  height: `${100 / ($ + 1)}%`,
                                  minHeight: "80px",
                                  border: "none",
                                  position: "relative",
                                },
                                children: [
                                  Gt(_e),
                                  (M == null ? void 0 : M.container.GUID) ===
                                    _e.GUID &&
                                    r.jsx("div", {
                                      className:
                                        "absolute inset-0 pointer-events-none",
                                      children: r.jsx("div", {
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
                          : r.jsx(
                              "td",
                              {
                                className: "p-1 align-top bg-transparent",
                                style: {
                                  width: `${100 / (q + 1)}%`,
                                  height: `${100 / ($ + 1)}%`,
                                  minHeight: "80px",
                                  border: "none",
                                },
                                children: r.jsx("div", {
                                  className:
                                    "w-full h-full flex items-center justify-center text-gray-400 text-sm",
                                  children: "空位",
                                }),
                              },
                              ge
                            );
                      }),
                    },
                    he
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
                sortedContents: ne,
                maxRow: ge,
                maxCol: je,
              } = Le(y.contents);
              return te(ne, ge, je);
            } else
              return r.jsx("table", {
                className: "bg-transparent w-full h-full",
                style: { borderCollapse: "separate", borderSpacing: "1px" },
                children: r.jsx("tbody", { children: r.jsx("tr", {}) }),
              });
          case "dispensing_shelves":
            if (y.contents && y.contents.length > 0) {
              const {
                sortedContents: ne,
                maxRow: ge,
                maxCol: je,
              } = Le(y.contents);
              return te(ne, ge, je);
            } else
              return r.jsx("table", {
                className: "bg-transparent w-full h-full",
                style: { borderCollapse: "separate", borderSpacing: "0px" },
                children: r.jsx("tbody", {
                  children: r.jsx("tr", {
                    children: r.jsx("td", {
                      className: "p-4 text-center text-gray-500 bg-transparent",
                      children: r.jsx("div", {
                        className: "text-base",
                        children: "無內容",
                      }),
                    }),
                  }),
                }),
              });
          case "store_shelves":
            if (y.medMapStock && y.medMapStock.length > 0) {
              const ne = y.medMapStock,
                ge = ne.length,
                je = ge > 0 ? 100 / ge : 100,
                _e = y.width ? y.width * 5 : 500;
              return r.jsx("div", {
                className: "flex h-full",
                style: { minWidth: `${_e}px` },
                children: ne.map(
                  (Ce, Me) => (
                    Number(Ce.location),
                    r.jsx(
                      "div",
                      {
                        className: "m-1 flex-shrink-0 relative",
                        style: { width: `calc(${je}% - 8px)` },
                        "data-stock-guid": Ce.GUID,
                        children: r.jsxs("div", {
                          className: `border-2 bg-yellow-50 border-yellow-400 rounded-lg p-2 h-full flex flex-col justify-center items-center cursor-pointer bg-white hover:bg-yellow-100 hover:border-yellow-500 hover:shadow-md transition-all ${
                            m ? "cursor-move" : ""
                          }`,
                          onMouseDown: (Ee) => {
                            m
                              ? se(
                                  Ce,
                                  y,
                                  Ee.currentTarget.closest("[data-stock-guid]"),
                                  Ee
                                )
                              : !d &&
                                !P &&
                                (b({ x: Ee.clientX, y: Ee.clientY }), w(!1));
                          },
                          onMouseUp: (Ee) => {
                            if (!d && !P && !L && v && !m) {
                              const Ze = Math.abs(Ee.clientX - v.x),
                                Ln = Math.abs(Ee.clientY - v.y);
                              Ze <= 5 &&
                                Ln <= 5 &&
                                (Ee.stopPropagation(), c(y, Ce));
                            }
                            m || (b(null), w(!1));
                          },
                          onTouchStart: (Ee) => {
                            if (m && X())
                              se(
                                Ce,
                                y,
                                Ee.currentTarget.closest("[data-stock-guid]"),
                                Ee
                              );
                            else if (!d && !m) {
                              const Ze = Ee.touches[0];
                              b({ x: Ze.clientX, y: Ze.clientY }), w(!1);
                            }
                          },
                          onTouchEnd: (Ee) => {
                            if (!d && !L && v && !m) {
                              const Ze = Ee.changedTouches[0],
                                Ln = Math.abs(Ze.clientX - v.x),
                                Un = Math.abs(Ze.clientY - v.y);
                              Ln <= 5 &&
                                Un <= 5 &&
                                (Ee.stopPropagation(), c(y, Ce));
                            }
                            m || (b(null), w(!1));
                          },
                          onPointerDown: (Ee) => {
                            m &&
                              X() &&
                              se(
                                Ce,
                                y,
                                Ee.currentTarget.closest("[data-stock-guid]"),
                                Ee
                              );
                          },
                          children: [
                            r.jsx("div", {
                              className:
                                "text-base font-semibold text-gray-800 flex truncate w-full items-center flex-1",
                              children: r.jsx("div", {
                                className:
                                  "w-full text-center truncate whitespace-normal",
                                children: Ce.name || Ce.material_no,
                              }),
                            }),
                            r.jsxs("div", {
                              className:
                                "w-full flex justify-between items-end",
                              children: [
                                r.jsx("div", {
                                  className: "",
                                  children: r.jsxs("div", {
                                    className: "mt-1",
                                    children: ["[ ", +Ce.qty || 0, " ]"],
                                  }),
                                }),
                                r.jsx("div", {
                                  className: "flex justify-end items-end mt-2",
                                  children: r.jsx("button", {
                                    onMouseDown: (Ee) => {
                                      Ee.stopPropagation();
                                    },
                                    onMouseUp: (Ee) => {
                                      Ee.stopPropagation();
                                    },
                                    onTouchStart: (Ee) => {
                                      Ee.stopPropagation();
                                    },
                                    onTouchEnd: (Ee) => {
                                      Ee.stopPropagation();
                                    },
                                    onClick: (Ee) => Lr(Ce, y, Ee),
                                    className:
                                      "text-red-500 hover:text-red-600 rounded-full p-2 transition-all z-10",
                                    title: "刪除",
                                    children: r.jsx(vr, {
                                      className: "w-6 h-6",
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      },
                      Ce.GUID || Me
                    )
                  )
                ),
              });
            } else if (y.contents && y.contents.length > 0) {
              const {
                sortedContents: ne,
                maxRow: ge,
                maxCol: je,
              } = Le(y.contents);
              return te(ne, ge, je);
            } else
              return r.jsx("table", {
                className: "bg-transparent w-full h-full",
                style: { borderCollapse: "separate", borderSpacing: "0px" },
                children: r.jsx("tbody", {
                  children: r.jsx("tr", {
                    children: r.jsx("td", {
                      className: "p-4 text-center text-gray-500 bg-transparent",
                      children: r.jsx("div", {
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
                sortedContents: ne,
                maxRow: ge,
                maxCol: je,
              } = Le(y.contents);
              return te(ne, ge, je);
            } else
              return r.jsx("table", {
                className: "bg-transparent w-full h-full",
                style: { borderCollapse: "separate", borderSpacing: "0px" },
                children: r.jsx("tbody", {
                  children: r.jsx("tr", {
                    children: r.jsx("td", {
                      className: "p-4 text-center text-gray-500 bg-transparent",
                      children: r.jsx("div", {
                        className: "text-base",
                        children: "無內容",
                      }),
                    }),
                  }),
                }),
              });
          case "grid_draw":
            const Y = Math.max(
                ...y.Boxes.flat().map((ne) => +ne.Row + +ne.Height - 1)
              ),
              $ = Math.max(
                ...y.Boxes.flat().map((ne) => +ne.Column + +ne.Width - 1)
              ),
              q = Y + 1,
              O = $ + 1,
              ee = y.Boxes.flat(),
              re = Array(q)
                .fill(null)
                .map(() => Array(O).fill(!1)),
              he = {};
            return (
              ee.forEach((ne) => {
                ne.Slave || (he[`${ne.Row},${ne.Column}`] = ne);
              }),
              ee.forEach((ne) => {
                if (!ne.Slave && (ne.Width > 1 || ne.Height > 1))
                  for (let ge = ne.Row; ge < ne.Row + ne.Height; ge++)
                    for (let je = ne.Column; je < ne.Column + ne.Width; je++)
                      (ge !== ne.Row || je !== ne.Column) && (re[ge][je] = !0);
              }),
              r.jsxs("div", {
                className:
                  "bg-violet-100 h-20 flex ml-2 mt-2 mb-6 rounded-xl border-2 border-violet-400 w-[140px] items-center justify-center",
                children: [
                  r.jsx("div", {
                    className: "h-[60%] bg-violet-400 w-[3%] rounded-xl",
                  }),
                  r.jsx("div", {
                    className:
                      "h-[80%] border-2 border-violet-400 w-[82%] mx-1",
                    children: r.jsx("div", {
                      className:
                        "flex items-center justify-center text-base text-violet-400 h-[100%]",
                    }),
                  }),
                  r.jsx("div", { className: "h-[60%] bg-violet-400 w-[3%]" }),
                ],
              })
            );
          case "list_draw":
            return r.jsxs("div", {
              className:
                "bg-violet-100 h-20 flex ml-2 mt-2 mb-6 rounded-xl border-2 border-violet-400 w-[140px] items-center justify-center",
              children: [
                r.jsx("div", {
                  className: "h-[60%] bg-violet-400 w-[3%] rounded-xl",
                }),
                r.jsx("div", {
                  className: "h-[80%] border-2 border-violet-400 w-[82%] mx-1",
                  children: r.jsx("div", {
                    className:
                      "flex items-center justify-center text-base text-violet-400 h-[100%]",
                  }),
                }),
                r.jsx("div", { className: "h-[60%] bg-violet-400 w-[3%]" }),
              ],
            });
          case "med_box":
            return y.med_info && y.med_info.length > 0
              ? r.jsxs("div", {
                  className:
                    "text-base text-left h-full min-h-[40px] max-w-[200px] min-w-[200px] p-1 flex items-center justify-between flex-col",
                  children: [
                    r.jsx("div", {
                      className: "text-gray-700 font-bold truncate w-full",
                      children: y.med_info[0].name,
                    }),
                    r.jsxs("div", {
                      className:
                        "text-gray-700 w-full flex justify-between px-1",
                      children: [
                        r.jsxs("div", { children: [y.box_type, "吋"] }),
                        r.jsxs("div", {
                          children: [y.width[y.width_index], "cm"],
                        }),
                      ],
                    }),
                  ],
                })
              : r.jsx("div", {
                  className:
                    "h-full flex items-center justify-center text-gray-500",
                  children: r.jsx("div", {
                    className: "text-base",
                    children: "空藥盒",
                  }),
                });
          default:
            return y.contents && y.contents.length > 0
              ? r.jsx("div", {
                  className: "space-y-2",
                  children: y.contents.map((ne) => Gt(ne)),
                })
              : r.jsx("div", {
                  className:
                    "h-full flex items-center justify-center text-gray-500",
                  children: r.jsxs("div", {
                    className: "text-base",
                    children: ["未知類型: ", y.type],
                  }),
                });
        }
      },
      Or = (y) => {
        if (
          (me(y.gird_position || "0,0"),
          y.type !== "調劑台" && y.type !== "藥庫")
        )
          return null;
        const te = (Y) => {
          if (!Y || Y.length === 0)
            return r.jsx("table", {
              className: "w-full h-full border-none",
              children: r.jsx("tbody", {
                children: r.jsx("tr", {
                  children: r.jsx("td", {
                    className: "p-4 text-center text-gray-500",
                    children: r.jsx("div", {
                      className: "text-center",
                      children: r.jsx("div", {
                        className: "text-base",
                        children: "內容將在此處顯示",
                      }),
                    }),
                  }),
                }),
              }),
            });
          const { sortedContents: $, maxRow: q, maxCol: O } = Le(Y),
            ee = Array(q + 1)
              .fill(null)
              .map(() => Array(O + 1).fill(!1)),
            re = {};
          return (
            $.forEach((he) => {
              const ne = me(he.gird_position || "0,0");
              (re[`${ne.row},${ne.col}`] = he), (ee[ne.row][ne.col] = !0);
            }),
            r.jsx("table", {
              className: "w-full h-full",
              style: { borderCollapse: "none", borderSpacing: "0px" },
              children: r.jsx("tbody", {
                children: Array.from({ length: q + 1 }, (he, ne) =>
                  r.jsx(
                    "tr",
                    {
                      className: "h-full",
                      children: Array.from({ length: O + 1 }, (ge, je) => {
                        const _e = `${ne},${je}`,
                          Ce = re[_e];
                        return Ce
                          ? r.jsxs(
                              "td",
                              {
                                className: "p-1 align-top bg-transparent",
                                style: {
                                  width: `${100 / (O + 1)}%`,
                                  height: `${100 / (q + 1)}%`,
                                  minHeight: "120px",
                                  border: "none",
                                  position: "relative",
                                },
                                children: [
                                  Gt(Ce),
                                  (M == null ? void 0 : M.container.GUID) ===
                                    Ce.GUID &&
                                    r.jsx("div", {
                                      className:
                                        "absolute inset-0 pointer-events-none",
                                      children: r.jsx("div", {
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
                              je
                            )
                          : r.jsx(
                              "td",
                              {
                                className: "p-1 align-top bg-transparent",
                                style: {
                                  width: `${100 / (O + 1)}%`,
                                  height: `${100 / (q + 1)}%`,
                                  minHeight: "120px",
                                  border: "1px dashed #e5e7eb",
                                },
                                children: r.jsx("div", {
                                  className:
                                    "w-full h-full flex items-center justify-center text-gray-400 text-sm",
                                  children: "空位",
                                }),
                              },
                              je
                            );
                      }),
                    },
                    ne
                  )
                ),
              }),
            })
          );
        };
        return r.jsxs(
          "div",
          {
            "data-container-guid": y.GUID,
            className:
              "border-2 rounded-lg shadow-lg bg-orange-50 border-orange-300 min-h-[120px] flex flex-col overflow-hidden w-full h-full",
            children: [
              r.jsxs("div", {
                className:
                  "flex items-center justify-between px-3 py-2 border-b-2 bg-orange-100 border-b-orange-200",
                children: [
                  r.jsx("div", {
                    className: "flex items-center space-x-2",
                    children: r.jsx("span", {
                      className: "text-lg font-semibold text-gray-800",
                      children: y.name,
                    }),
                  }),
                  r.jsx("div", {
                    className: "flex items-center space-x-1",
                    children: r.jsx("button", {
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
                              i(y))
                            : console.warn("⚠️ 未找到對應的部門資料");
                      },
                      title: "新增",
                      children: r.jsx(bt, {
                        className: "w-6 h-6 text-green-700",
                      }),
                    }),
                  }),
                ],
              }),
              r.jsx("div", {
                className: `flex-1 bg-orange-50 ${
                  (M == null ? void 0 : M.container.GUID) === y.GUID
                    ? "ring-2 ring-blue-400 ring-inset"
                    : ""
                }`,
                children: te(y.contents || []),
              }),
            ],
          },
          y.GUID
        );
      },
      Ms = f.useCallback(
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
          const te = y[0].CODE || y[0].code;
          if ((console.log("🎯 提取的藥碼:", te), !te)) {
            console.warn("⚠️ 無法定位藥品：缺少藥碼");
            return;
          }
          console.log("🎯 開始定位藥品:", te);
          const Y = (q) => {
              for (const O of q) {
                if (O.type === "grid_draw" && O.Boxes) {
                  for (const ee of O.Boxes)
                    for (const re of ee)
                      if (re.Code === te) {
                        const he = document.querySelector(
                          `[data-container-guid="${O.GUID}"]`
                        );
                        if (he)
                          return (
                            console.log("✅ 找到藥品容器 (grid_draw):", O),
                            { element: he, bounds: he.getBoundingClientRect() }
                          );
                      }
                }
                if (
                  O.type === "list_draw" &&
                  O.drugs &&
                  O.drugs.some((re) => re.code === te)
                ) {
                  const re = document.querySelector(
                    `[data-container-guid="${O.GUID}"]`
                  );
                  if (re)
                    return (
                      console.log("✅ 找到藥品容器 (list_draw):", O),
                      { element: re, bounds: re.getBoundingClientRect() }
                    );
                }
                if (
                  (O.type === "store_shelves" ||
                    O.type === "dispensing_shelves") &&
                  O.medMapStock &&
                  O.medMapStock.some(
                    (re) => re.code === te || re.material_no === te
                  )
                ) {
                  const re = document.querySelector(
                    `[data-container-guid="${O.GUID}"]`
                  );
                  if (re)
                    return (
                      console.log("✅ 找到藥品容器 (store_shelves):", O),
                      { element: re, bounds: re.getBoundingClientRect() }
                    );
                }
                if (
                  O.type === "med_box" &&
                  O.med_info &&
                  O.med_info.length > 0 &&
                  O.med_info.some((re) => re.code === te)
                ) {
                  const re = document.querySelector(
                    `[data-container-guid="${O.GUID}"]`
                  );
                  if (re)
                    return (
                      console.log("✅ 找到藥品容器 (med_box):", O),
                      { element: re, bounds: re.getBoundingClientRect() }
                    );
                }
                if (O.contents && O.contents.length > 0) {
                  const ee = Y(O.contents);
                  if (ee) return ee;
                }
              }
              return null;
            },
            $ = Y(o);
          if ($) {
            const q = n.current.getBoundingClientRect(),
              O = $.bounds,
              ee = (O.left + O.right) / 2,
              re = (O.top + O.bottom) / 2,
              he = (ee - q.left - C.x) / C.scale,
              ne = (re - q.top - C.y) / C.scale,
              ge = q.width / 2,
              je = q.height / 2,
              _e = ge - he * C.scale,
              Ce = je - ne * C.scale;
            R((Me) => ({ ...Me, x: _e, y: Ce })),
              console.log("✅ 定位完成", {
                elementScreenCenter: { x: ee, y: re },
                elementCanvasPos: { x: he, y: ne },
                screenCenter: { x: ge, y: je },
                newTransform: { x: _e, y: Ce },
              }),
              h(`已定位到藥品：${y.CHT_NAME || y.NAME || te}`, "success");
          } else
            console.warn("❌ 未找到藥品容器"),
              h("未找到該藥品的儲存位置", "error");
        },
        [o, C, h]
      );
    f.useImperativeHandle(
      t,
      () => (
        console.log("🔧 useImperativeHandle 設置 ref 方法"), { locateDrug: Ms }
      )
    );
    const Lr = async (y, te, Y) => {
        if (
          (Y.stopPropagation(),
          Y.preventDefault(),
          !!window.confirm(`確定要刪除 ${y.name || y.material_no} 嗎？`))
        )
          try {
            const q = await De.deleteStockByGUID([y.GUID]);
            if (q.Code === 200) {
              const O = te.medMapStock.findIndex((ee) => ee.GUID === y.GUID);
              O !== -1 &&
                (te.medMapStock.splice(O, 1),
                te.medMapStock.forEach((ee, re) => {
                  ee.location = String(re);
                })),
                h("刪除成功", "success");
            } else h(q.Result || "刪除失敗", "error");
          } catch (q) {
            console.error("刪除 stock 失敗:", q),
              h("刪除失敗，請稍後再試", "error");
          }
      },
      Qo = async (y) => {
        if (y.key === "Enter" && Q.trim() && !pe) {
          y.preventDefault(), ye(!0);
          const te = performance.now();
          try {
            console.log("🔍 [手動輸入] 搜尋條碼:", Q);
            const Y = performance.now(),
              $ = await De.searchByBarCode(Q.trim()),
              q = performance.now();
            if (
              (console.log(
                `⏱️ [手動輸入] API搜尋藥品資料用時: ${(q - Y).toFixed(2)}ms`
              ),
              console.log("📋 條碼搜尋回應:", $),
              $.Code === 200)
            ) {
              console.log("✅ 找到藥品資料:", $.Data),
                h("找到藥品資料", "success");
              const O = performance.now();
              Ms($.Data);
              const ee = performance.now();
              console.log(
                `⏱️ [手動輸入] 定位藥品用時: ${(ee - O).toFixed(2)}ms`
              ),
                K("");
              const re = performance.now();
              console.log(`⏱️ [手動輸入] 總用時: ${(re - te).toFixed(2)}ms`);
            } else
              $.Code === -200 && $.Result === "查無資料"
                ? (console.log("⚠️ 查無資料，開啟建立條碼彈窗"),
                  h("查無資料，請建立條碼", "error"),
                  g(Q.trim()),
                  K(""))
                : (console.log("❌ 搜尋失敗:", $.Result),
                  h($.Result || "搜尋失敗", "error"));
          } catch (Y) {
            console.error("條碼搜尋錯誤:", Y),
              h("搜尋失敗，請稍後再試", "error");
          } finally {
            ye(!1);
          }
        }
      };
    return r.jsxs("div", {
      className: "relative w-full h-full overflow-hidden bg-gray-50",
      children: [
        r.jsx("div", {
          className:
            "absolute md:bottom-4 md:left-4 bottom-16 left-[50%] md:translate-x-[0%] translate-x-[-50%] z-10",
          children: r.jsxs("div", {
            className:
              "bg-white rounded-lg shadow-lg flex items-center overflow-hidden border border-gray-200",
            children: [
              r.jsx("input", {
                type: "text",
                value: Q,
                onChange: (y) => K(y.target.value),
                onKeyDown: Qo,
                placeholder: "輸入條碼或掃描...",
                className:
                  "px-4 py-2 w-50 focus:outline-none text-gray-700 disabled:opacity-50",
                disabled: pe,
              }),
              r.jsx("button", {
                onClick: () => x("track_Drug_mode"),
                className: "p-2",
                title: "掃描條碼",
                disabled: pe,
                children: r.jsx(Tr, { className: "w-6 h-6 text-blue-600" }),
              }),
            ],
          }),
        }),
        r.jsx("div", {
          className: "absolute bottom-4 right-4 z-10 flex gap-2",
          children: r.jsx("button", {
            onClick: () => D(!m),
            className: `rounded-lg shadow-lg p-2 transition-colors ${
              m
                ? "bg-red-500 text-white hover:bg-red-600"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`,
            title: m ? "Unlock Canvas" : "Lock Canvas",
            children: m
              ? r.jsx(fi, { className: "w-6 h-6" })
              : r.jsx(qu, { className: "w-6 h-6" }),
          }),
        }),
        r.jsx("div", {
          ref: n,
          className: `w-full h-full relative ${
            P && !m ? "cursor-grab" : "cursor-default"
          } ${d ? "cursor-grabbing" : ""}`,
          onMouseDown: A,
          onMouseMove: H,
          onMouseUp: W,
          onMouseLeave: W,
          onTouchStart: Ie,
          onTouchMove: We,
          onTouchEnd: Te,
          children: r.jsxs("div", {
            className: "absolute inset-0 origin-top-left",
            style: {
              transform: `translate(${C.x}px, ${C.y}px) scale(${C.scale})`,
              transformOrigin: "0 0",
            },
            children: [
              r.jsx("div", {
                className: "relative",
                "data-canvas-content": !0,
                children: r.jsx("table", {
                  className: "h-full",
                  style: {
                    borderCollapse: "separate",
                    borderSpacing: `${be}px`,
                    minWidth: "fit-content",
                    minHeight: "fit-content",
                  },
                  children: r.jsx("tbody", {
                    children: Array.from({ length: Rt + 1 }, (y, te) =>
                      r.jsx(
                        "tr",
                        {
                          children: Array.from({ length: On + 1 }, (Y, $) => {
                            const q = kt.find((O) => {
                              const ee = me(O.gird_position || "0,0");
                              return ee.row === te && ee.col === $;
                            });
                            return q
                              ? r.jsx(
                                  "td",
                                  {
                                    className: "align-top",
                                    style: {
                                      minWidth: "150px",
                                      minHeight: "120px",
                                      border: "none",
                                    },
                                    children: Or(q),
                                  },
                                  $
                                )
                              : r.jsx(
                                  "td",
                                  {
                                    className: "align-top",
                                    style: {
                                      minWidth: "150px",
                                      minHeight: "120px",
                                      border: "none",
                                    },
                                    children: r.jsx("div", {
                                      className:
                                        "w-full h-full flex items-center justify-center text-gray-400 text-base",
                                    }),
                                  },
                                  $
                                );
                          }),
                        },
                        te
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
Wu.displayName = "DrugCanvas";
const Ch = async (e) => {
    if ((console.log(e), Object.keys(e.current).length === 0)) {
      console.log("沒有需要更新的容器資料");
      return;
    }
    console.log("🚀 開始批次更新容器資料:", e.current);
    const t = [],
      n = [],
      s = [],
      o = [],
      l = [];
    Object.values(e.current).forEach((i) => {
      var x, g, h, p, j;
      console.log("開始整理API REQ資料：", i);
      const c = {
        GUID: i.GUID,
        position: i.position,
        Master_GUID: i.Master_GUID,
        serverName: i.serverName,
        serverType: i.serverType,
      };
      switch (i.type) {
        case "med_box":
          t.push(c);
          break;
        case "grid_draw":
        case "list_draw":
          n.push(c);
          break;
        case "dispensing_shelves":
        case "store_shelves":
          s.push(c);
          break;
        case "parent_container":
          const S = {
            ...c,
            absolute_position: `${
              (x = i.containerData) == null ? void 0 : x.position.x
            },${(g = i.containerData) == null ? void 0 : g.position.y}`,
            position:
              ((h = i.containerData) == null ? void 0 : h.gird_position) ||
              i.position,
            name: ((p = i.containerData) == null ? void 0 : p.name) || "",
            ip: ((j = i.containerData) == null ? void 0 : j.ip) || "",
          };
          o.push(S);
          break;
        case "sub_container":
          l.push(c);
          break;
        default:
          console.warn("未知的容器類型:", i.type);
      }
    });
    const a = [];
    if (
      (t.length > 0 &&
        (console.log("📦 更新藥盒資料:", t),
        a.push(
          De.updateMedMapBox(t)
            .then((i) => ({ type: "med_box", response: i, count: t.length }))
            .catch((i) => ({ type: "med_box", error: i, count: t.length }))
        )),
      n.length > 0 &&
        (console.log("🗂️ 更新抽屜資料:", n),
        a.push(
          De.updateMedMapDrawer(n)
            .then((i) => ({ type: "drawer", response: i, count: n.length }))
            .catch((i) => ({ type: "drawer", error: i, count: n.length }))
        )),
      s.length > 0 &&
        (console.log("🏪 更新層架資料:", s),
        a.push(
          De.updateMedMapShelf(s)
            .then((i) => ({ type: "shelf", response: i, count: s.length }))
            .catch((i) => ({ type: "shelf", error: i, count: s.length }))
        )),
      o.length > 0 &&
        (console.log("🏢 更新父容器資料:", o),
        o.forEach((i) => {
          a.push(
            De.updateContainerPosition(i)
              .then((c) => ({
                type: "parent_container",
                response: c,
                count: 1,
              }))
              .catch((c) => ({ type: "parent_container", error: c, count: 1 }))
          );
        })),
      l.length > 0 &&
        (console.log("📁 更新子容器資料:", l),
        a.push(
          De.updateSubSection(l)
            .then((i) => ({
              type: "sub_container",
              response: i,
              count: l.length,
            }))
            .catch((i) => ({
              type: "sub_container",
              error: i,
              count: l.length,
            }))
        )),
      a.length === 0)
    ) {
      console.log("沒有需要呼叫的 API");
      return;
    }
    try {
      const i = await Promise.all(a);
      let c = 0,
        x = 0;
      const g = [];
      i.forEach((h) => {
        var p, j;
        if (h.error)
          (x += h.count),
            g.push(`${h.type}: ${h.error.message || "網路錯誤"}`),
            console.error(`❌ ${h.type} API 失敗:`, h.error);
        else if (((p = h.response) == null ? void 0 : p.Code) === 200)
          (c += h.count), console.log(`✅ ${h.type} API 成功:`, h.response);
        else {
          x += h.count;
          const S =
            ((j = h.response) == null ? void 0 : j.Result) || "未知錯誤";
          g.push(`${h.type}: ${S}`),
            console.error(`❌ ${h.type} API 失敗:`, h.response);
        }
      });
    } catch (i) {
      console.error("💥 批次更新過程中發生錯誤:", i);
    } finally {
      console.log("完成更新");
    }
  },
  kh = "modulepreload",
  Dh = function (e) {
    return "/" + e;
  },
  Sc = {},
  _h = function (t, n, s) {
    let o = Promise.resolve();
    if (n && n.length > 0) {
      document.getElementsByTagName("link");
      const a = document.querySelector("meta[property=csp-nonce]"),
        i =
          (a == null ? void 0 : a.nonce) ||
          (a == null ? void 0 : a.getAttribute("nonce"));
      o = Promise.allSettled(
        n.map((c) => {
          if (((c = Dh(c)), c in Sc)) return;
          Sc[c] = !0;
          const x = c.endsWith(".css"),
            g = x ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${c}"]${g}`)) return;
          const h = document.createElement("link");
          if (
            ((h.rel = x ? "stylesheet" : kh),
            x || (h.as = "script"),
            (h.crossOrigin = ""),
            (h.href = c),
            i && h.setAttribute("nonce", i),
            document.head.appendChild(h),
            x)
          )
            return new Promise((p, j) => {
              h.addEventListener("load", p),
                h.addEventListener("error", () =>
                  j(new Error(`Unable to preload CSS for ${c}`))
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
  Jt = [
    { name: "2.13吋", box_type: "2.13", width: ["7.5"], unit: "cm" },
    { name: "2.9吋", type: "2.9", width: ["10", "15", "20"], unit: "cm" },
    { name: "4.2吋", type: "4.2", width: ["11", "16"], unit: "cm" },
  ],
  Mh = () => {
    const {
        medBoxModalOpen: e,
        closeMedBoxModal: t,
        selectedMedBox: n,
        selectedDepartmentType: s,
        setApiDepartmentData: o,
        setIsLoadingMedMap: l,
        showNotification: a,
        triggerRefresh: i,
        modalMode: c,
        medicineList: x,
      } = Xe(),
      { t: g } = xt(),
      [h, p] = f.useState(0),
      [j, S] = f.useState({}),
      [C, R] = f.useState(""),
      [d, u] = f.useState(""),
      [m, D] = f.useState("N"),
      [T, _] = f.useState([]),
      [P, V] = f.useState(!1),
      [Q, K] = f.useState(!1),
      [pe, ye] = f.useState(null),
      [v, b] = f.useState(null),
      [L, w] = f.useState(!1),
      [N, k] = f.useState(!1);
    f.useEffect(() => {
      if (n && e)
        if (c === "add") {
          p(0);
          const G = {};
          Jt.forEach((E, se) => {
            G[se] = 0;
          }),
            S(G),
            R(""),
            K(!1),
            M();
        } else {
          const G = Jt.findIndex(
            (E) => E.box_type === n.box_type || E.type === n.box_type
          );
          if ((console.log(n), G >= 0)) {
            p(G);
            const se = Jt[G].width.findIndex((B) => {
                var Z;
                return (
                  B === ((Z = n.width) == null ? void 0 : Z[n.width_index || 0])
                );
              }),
              le = {};
            Jt.forEach((B, Z) => {
              Z === G ? (le[Z] = se >= 0 ? se : 0) : (le[Z] = 0);
            }),
              S(le);
          } else {
            p(0);
            const E = {};
            Jt.forEach((se, le) => {
              E[le] = 0;
            }),
              S(E);
          }
          R(n.ip || ""),
            b({
              box_type: n.box_type,
              width: n.width,
              width_index: n.width_index,
              ip: n.ip || "",
              storage: n.storage ? JSON.parse(JSON.stringify(n.storage)) : null,
            });
        }
    }, [n, e, c]);
    const M = () => {
        n && n.parentShelf && ye(n.parentShelf);
      },
      J = (G) => {
        if (!G || !G.contents || G.contents.length === 0) return "0,0";
        let E = -1,
          se = 0;
        return (
          G.contents.forEach((le) => {
            if (le.gird_position) {
              const [B, Z] = le.gird_position.split(",").map(Number);
              Z > E && ((E = Z), (se = B));
            }
          }),
          `${se},${E + 1}`
        );
      },
      z = () => {
        if (!v || c !== "edit") return !1;
        const G = Jt[h],
          E = j[h] || 0,
          se = G.box_type || G.type || G.name;
        return (
          v.box_type !== se ||
          v.width_index !== E ||
          v.ip !== C ||
          JSON.stringify(v.storage) !==
            JSON.stringify(n == null ? void 0 : n.storage)
        );
      },
      X = (G) => {
        p(G);
      },
      be = (G, E) => {
        S((se) => ({ ...se, [G]: E }));
      },
      fe = () => {
        n && (c === "add" ? xe() : F());
      },
      U = () => {
        t();
      },
      xe = async () => {
        if (!n || !pe) {
          a("缺少必要資料，無法新增藥盒", "error");
          return;
        }
        K(!0);
        try {
          const G = Jt[h],
            E = j[h] || 0,
            se = G.width[E],
            le = J(pe),
            B = {
              Master_GUID: pe.GUID,
              position: le,
              width: se.toString(),
              height: "60",
              ip_box: C,
              serverName: pe.serverName || "",
              serverType: pe.serverType || "",
            };
          console.log("🚀 發送新增藥盒 API 請求:", B);
          const Z = await De.addMedMapBox(B);
          Z.Code === 200
            ? (a("藥盒新增成功", "success"), t(), await ve())
            : a(`藥盒新增失敗：${Z.Result || "未知錯誤"}`, "error");
        } catch (G) {
          console.error("Add med box failed:", G),
            a("藥盒新增失敗：網路錯誤", "error");
        } finally {
          K(!1);
        }
      },
      F = async () => {
        var G;
        if (!n || !z()) {
          a("沒有資料變更", "error");
          return;
        }
        w(!0);
        try {
          const E = Jt[h],
            se = j[h] || 0,
            le = E.width[se],
            B = E.box_type || E.type || E.name,
            Z = v.box_type !== B || v.width_index !== se || v.ip !== C,
            ie =
              JSON.stringify(v.storage) !==
              JSON.stringify(n == null ? void 0 : n.storage),
            A = [];
          if (Z) {
            const oe = {
              GUID: n.GUID,
              Master_GUID: n.Master_GUID,
              position: n.gird_position,
              ip_light: C,
              serverName: n.serverName,
              serverType: n.serverType,
            };
            A.push(De.updateMedMapBox([oe]));
          }
          ie &&
            A.push(
              De.updateEpd266Storages(n.serverName || "", n.serverType || "", [
                n.storage,
              ])
            );
          const H = await Promise.all(A);
          if (H.every((oe) => oe.Code === 200))
            a("藥盒更新成功", "success"), t(), await ve();
          else {
            const oe = H.filter((de) => de.Code !== 200);
            a(
              `藥盒更新失敗：${
                ((G = oe[0]) == null ? void 0 : G.Result) || "未知錯誤"
              }`,
              "error"
            );
          }
        } catch (E) {
          console.error("Update med box failed:", E),
            a("藥盒更新失敗：網路錯誤", "error");
        } finally {
          w(!1);
        }
      },
      ve = async () => {
        if (!s) {
          console.warn("⚠️ 沒有選中的部門類型，無法重新獲取資料");
          return;
        }
        console.log("🔄 重新獲取藥品地圖資料，部門類型:", s), l(!0);
        try {
          const G = await De.getMedMapByDepartment(s);
          if (G.Code === 200 && G.Data) {
            console.log("📡 API 回傳成功，開始轉換資料");
            const E = await _h(() => Promise.resolve().then(() => Km), void 0),
              se = E.default.convertMedMapApiToFakeData(G.Data);
            if (!E.default.validateConvertedData(se)) {
              console.error("❌ 轉換後的資料驗證失敗"),
                a("資料更新失敗：資料格式錯誤", "error");
              return;
            }
            o(se), console.log("✅ 藥品地圖資料已更新");
          } else
            console.error("❌ API 回傳錯誤:", G),
              a("資料更新失敗：API 錯誤", "error");
        } catch (G) {
          console.error("💥 重新獲取藥品地圖資料失敗:", G),
            a("資料更新失敗：網路錯誤", "error");
        } finally {
          l(!1);
        }
      },
      me = async () => {
        V(!0);
        try {
          const G = d.toLowerCase().trim();
          let E = x;
          G &&
            (E = E.filter((se) => {
              var le, B, Z;
              return (
                ((le = se.CODE) == null
                  ? void 0
                  : le.toLowerCase().includes(G)) ||
                ((B = se.NAME) == null
                  ? void 0
                  : B.toLowerCase().includes(G)) ||
                ((Z = se.CHT_NAME) == null
                  ? void 0
                  : Z.toLowerCase().includes(G))
              );
            })),
            m !== "N" && (E = E.filter((se) => se.DRUGKIND === m)),
            _(E);
        } catch (G) {
          console.error("Search failed:", G), _([]);
        } finally {
          V(!1);
        }
      },
      I = (G, E) => {
        console.log("📸 掃描成功，藥品資料:", E), k(!1), ue(E);
      },
      ue = async (G) => {
        if (n)
          try {
            console.log("🚀 開始更新藥盒藥品代碼:", G.CODE);
            const E = await De.updateEpd266Medcode(
              n.serverName || "",
              n.serverType || "",
              G.CODE,
              n.storage || {}
            );
            E.Code === 200
              ? (console.log("✅ 藥品代碼更新成功:", E.Data),
                (n.storage = E.Data),
                (n.med_info = [
                  { name: G.NAME, cht_name: G.CHT_NAME, code: G.CODE },
                ]),
                a("藥品更新成功", "success"),
                i())
              : (console.error("❌ 藥品代碼更新失敗:", E),
                a(`藥品更新失敗：${E.Result || "未知錯誤"}`, "error"));
          } catch (E) {
            console.error("💥 藥品代碼更新發生錯誤:", E),
              a("藥品更新失敗：網路錯誤", "error");
          }
      };
    return !e || !n
      ? null
      : r.jsxs("div", {
          className: "fixed inset-0 z-50 flex items-center justify-center",
          children: [
            r.jsx("div", {
              className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
              onClick: U,
            }),
            r.jsxs("div", {
              className:
                "relative flex flex-col bg-white rounded-xl shadow-2xl border border-gray-200",
              style: { width: "90vw", height: "90vh" },
              onClick: (G) => G.stopPropagation(),
              children: [
                r.jsxs("div", {
                  className:
                    "flex items-center justify-between px-4 py-2 border-b border-gray-200",
                  children: [
                    r.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        r.jsx(jn, { className: "w-6 h-6 text-gray-600" }),
                        r.jsx("h2", {
                          className: "text-xl font-semibold text-gray-900",
                          children: g(
                            c === "add"
                              ? "modal.addMedBox"
                              : "modal.medBoxSettings"
                          ),
                        }),
                      ],
                    }),
                    r.jsx("button", {
                      onClick: U,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: r.jsx(Fe, { className: "w-6 h-6" }),
                    }),
                  ],
                }),
                r.jsx("div", {
                  className: "flex-1 px-4 py-2 overflow-y-auto",
                  children: r.jsxs("div", {
                    className: "space-y-4",
                    children: [
                      r.jsx("div", {
                        className: "gap-16 flex",
                        children: r.jsxs("div", {
                          className: "space-y-1",
                          children: [
                            r.jsx("h3", {
                              className: "text-base font-medium text-gray-900",
                              children: g("form.ipAddress"),
                            }),
                            r.jsx("div", {
                              className: "flex items-center",
                              children: r.jsx("input", {
                                type: "text",
                                onChange: (G) => R(G.target.value),
                                placeholder:
                                  (n == null ? void 0 : n.ip) ||
                                  (n == null ? void 0 : n.name) ||
                                  g("placeholder.ipAddress"),
                                className:
                                  "px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors w-64",
                              }),
                            }),
                          ],
                        }),
                      }),
                      r.jsxs("div", {
                        className: "flex gap-16",
                        children: [
                          r.jsxs("div", {
                            className: "space-y-1 min-w-[260px]",
                            children: [
                              r.jsx("h3", {
                                className:
                                  "text-base font-medium text-gray-900",
                                children: g("form.medBoxType"),
                              }),
                              r.jsx("div", {
                                className: "flex gap-4 justify-between",
                                children: Jt.map((G, E) =>
                                  r.jsxs(
                                    "label",
                                    {
                                      className: `flex items-center px-4 py-2 border-2 rounded-lg cursor-pointer transition-all ${
                                        h === E
                                          ? "border-blue-500 bg-blue-50"
                                          : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                                      }`,
                                      children: [
                                        r.jsx("input", {
                                          type: "radio",
                                          name: "boxType",
                                          value: E,
                                          checked: h === E,
                                          onChange: () => X(E),
                                          className:
                                            "w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 hidden",
                                        }),
                                        r.jsx("div", {
                                          children: r.jsx("div", {
                                            className:
                                              "text-sm font-medium text-gray-900",
                                            children: G.name,
                                          }),
                                        }),
                                      ],
                                    },
                                    E
                                  )
                                ),
                              }),
                            ],
                          }),
                          r.jsxs("div", {
                            className: "space-y-1",
                            children: [
                              r.jsx("h3", {
                                className:
                                  "text-base font-medium text-gray-900",
                                children: g("form.widthSelection"),
                              }),
                              Jt.map((G, E) =>
                                r.jsx(
                                  "div",
                                  {
                                    className: `flex gap-4 ${
                                      h === E ? "block" : "hidden"
                                    }`,
                                    children: G.width.map((se, le) =>
                                      r.jsxs(
                                        "label",
                                        {
                                          className: `flex items-center justify-center px-4 py-2 border-2 rounded-lg cursor-pointer transition-all ${
                                            h === E && (j[E] || 0) === le
                                              ? "border-green-500 bg-green-50"
                                              : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                                          }`,
                                          children: [
                                            r.jsx("input", {
                                              type: "radio",
                                              name: `width-${E}`,
                                              value: le,
                                              checked:
                                                h === E && (j[E] || 0) === le,
                                              onChange: () => be(E, le),
                                              className:
                                                "w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500 hidden",
                                            }),
                                            r.jsx("div", {
                                              className: "text-center",
                                              children: r.jsxs("div", {
                                                className:
                                                  "text-sm font-semibold text-gray-900",
                                                children: [se, " ", G.unit],
                                              }),
                                            }),
                                          ],
                                        },
                                        `${E}-${le}`
                                      )
                                    ),
                                  },
                                  E
                                )
                              ),
                            ],
                          }),
                        ],
                      }),
                      r.jsxs("div", {
                        className: "flex gap-6",
                        children: [
                          c === "edit" &&
                            r.jsxs("div", {
                              className: "space-y-2 w-[50%]",
                              children: [
                                r.jsx("h3", {
                                  className:
                                    "text-lg font-medium text-gray-900",
                                  children: g("form.drugInfo"),
                                }),
                                r.jsx("div", {
                                  children:
                                    n != null &&
                                    n.med_info &&
                                    n.med_info.length > 0
                                      ? r.jsx("div", {
                                          children: n.med_info.map((G, E) =>
                                            r.jsxs(
                                              "div",
                                              {
                                                className:
                                                  "space-y-2 p-4 border border-gray-200 rounded-lg min-h-[262px] max-h-[262px]",
                                                children: [
                                                  r.jsxs("div", {
                                                    children: [
                                                      r.jsxs("span", {
                                                        className:
                                                          "text-sm font-medium text-gray-600",
                                                        children: [
                                                          g("form.drugCode"),
                                                          ":",
                                                        ],
                                                      }),
                                                      r.jsx("div", {
                                                        className:
                                                          "text-base text-gray-900 mt-1",
                                                        children:
                                                          G.code ||
                                                          g("status.notSet"),
                                                      }),
                                                    ],
                                                  }),
                                                  r.jsxs("div", {
                                                    children: [
                                                      r.jsxs("span", {
                                                        className:
                                                          "text-sm font-medium text-gray-600",
                                                        children: [
                                                          g("form.drugName"),
                                                          ":",
                                                        ],
                                                      }),
                                                      r.jsx("div", {
                                                        className:
                                                          "text-base text-gray-900 mt-1",
                                                        children:
                                                          G.name ||
                                                          g("status.notSet"),
                                                      }),
                                                    ],
                                                  }),
                                                  r.jsxs("div", {
                                                    children: [
                                                      r.jsxs("span", {
                                                        className:
                                                          "text-sm font-medium text-gray-600",
                                                        children: [
                                                          g("form.chineseName"),
                                                          ":",
                                                        ],
                                                      }),
                                                      r.jsx("div", {
                                                        className:
                                                          "text-base text-gray-900 mt-1",
                                                        children:
                                                          G.cht_name ||
                                                          g("status.notSet"),
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              },
                                              E
                                            )
                                          ),
                                        })
                                      : r.jsx("div", {
                                          className:
                                            "bg-gray-50 border border-gray-200 rounded-lg py-8 px-4 text-center space-y-4",
                                          children: r.jsx("div", {
                                            className:
                                              "text-gray-500 text-base",
                                            children: g("status.noDrugData"),
                                          }),
                                        }),
                                }),
                              ],
                            }),
                          c === "add" &&
                            r.jsxs("div", {
                              className: "space-y-2 w-[50%]",
                              children: [
                                r.jsx("h3", {
                                  className:
                                    "text-base font-medium text-gray-900",
                                  children: g("form.drugInfo"),
                                }),
                                r.jsx("div", {
                                  className:
                                    "bg-gray-50 border border-gray-200 rounded-lg py-2 px-4 min-h-[262px] max-h-[262px]",
                                  children: r.jsx("div", {
                                    className: "text-center py-8 space-y-4",
                                    children: r.jsx("div", {
                                      className: "text-gray-500 text-base",
                                      children: g("status.newMedBoxNoDrug"),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          r.jsxs("div", {
                            className: "space-y-2 w-[50%]",
                            children: [
                              r.jsxs("div", {
                                className: "flex items-center justify-between",
                                children: [
                                  r.jsx("h3", {
                                    className:
                                      "text-lg font-medium text-gray-900",
                                    children: g("form.drugSearch"),
                                  }),
                                  r.jsx("button", {
                                    onClick: () => k(!0),
                                    className:
                                      "p-2 hover:bg-gray-100 rounded-full transition-colors",
                                    title: "掃描條碼",
                                    children: r.jsx(Tr, {
                                      className: "w-5 h-5 text-gray-600",
                                    }),
                                  }),
                                ],
                              }),
                              r.jsxs("div", {
                                className: "flex gap-2 mb-2",
                                children: [
                                  r.jsx("input", {
                                    type: "text",
                                    value: d,
                                    onChange: (G) => u(G.target.value),
                                    placeholder: g("placeholder.drugSearch"),
                                    className:
                                      "border rounded px-3 py-1 flex-1 min-w-0 focus:border-blue-500 focus:outline-none transition-colors",
                                  }),
                                  r.jsxs("select", {
                                    value: m,
                                    onChange: (G) => D(G.target.value),
                                    className:
                                      "border rounded px-2 py-1 focus:border-blue-500 focus:outline-none transition-colors",
                                    title: "管制級別",
                                    children: [
                                      r.jsx("option", {
                                        value: "N",
                                        children: "N",
                                      }),
                                      r.jsx("option", {
                                        value: "1",
                                        children: "1",
                                      }),
                                      r.jsx("option", {
                                        value: "2",
                                        children: "2",
                                      }),
                                      r.jsx("option", {
                                        value: "3",
                                        children: "3",
                                      }),
                                      r.jsx("option", {
                                        value: "4",
                                        children: "4",
                                      }),
                                    ],
                                  }),
                                  r.jsxs("button", {
                                    onClick: me,
                                    disabled: P,
                                    className:
                                      "bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 transition-colors whitespace-nowrap disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2",
                                    children: [
                                      P &&
                                        r.jsx(Ct, {
                                          className: "w-4 h-4 animate-spin",
                                        }),
                                      g("button.search"),
                                    ],
                                  }),
                                ],
                              }),
                              r.jsx("div", {
                                className:
                                  "bg-white border rounded p-3 min-h-[220px] max-h-[220px] overflow-y-auto",
                                children: P
                                  ? r.jsxs("div", {
                                      className:
                                        "text-gray-500 text-center flex items-center justify-center h-full",
                                      children: [
                                        r.jsx(Ct, {
                                          className:
                                            "w-5 h-5 animate-spin mr-2",
                                        }),
                                        g("status.searching"),
                                      ],
                                    })
                                  : T.length > 0
                                  ? r.jsx("div", {
                                      className: "space-y-1",
                                      children: T.map((G, E) =>
                                        r.jsxs(
                                          "div",
                                          {
                                            className:
                                              "flex items-center justify-between p-2 border border-gray-200 rounded hover:bg-gray-50 transition-colors",
                                            children: [
                                              r.jsxs("div", {
                                                className: "flex-1 min-w-0",
                                                children: [
                                                  r.jsx("div", {
                                                    className:
                                                      "text-sm font-medium text-gray-900 truncate",
                                                    children: G.NAME,
                                                  }),
                                                  r.jsx("div", {
                                                    className:
                                                      "text-xs text-gray-500 truncate",
                                                    children: G.CHT_NAME,
                                                  }),
                                                  r.jsx("div", {
                                                    className:
                                                      "text-xs text-gray-400 font-mono",
                                                    children: G.CODE,
                                                  }),
                                                ],
                                              }),
                                              r.jsx("button", {
                                                onClick: () => ue(G),
                                                className:
                                                  "ml-2 p-1 text-green-600 hover:text-green-700 hover:bg-green-50 rounded transition-colors flex-shrink-0",
                                                title: g("button.add"),
                                                children: r.jsx(bt, {
                                                  className: "w-4 h-4",
                                                }),
                                              }),
                                            ],
                                          },
                                          G.GUID || E
                                        )
                                      ),
                                    })
                                  : r.jsx("div", {
                                      className:
                                        "text-gray-500 text-center flex items-center justify-center h-full",
                                      children: g(
                                        d || m !== "N"
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
                r.jsxs("div", {
                  className:
                    "flex items-center justify-end space-x-3 py-2 px-4 border-t border-gray-200",
                  children: [
                    r.jsx("button", {
                      onClick: U,
                      disabled: Q || L,
                      className:
                        "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                      children: g("button.cancel"),
                    }),
                    r.jsxs("button", {
                      onClick: fe,
                      disabled: Q || L,
                      className:
                        "px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center space-x-2",
                      children: [
                        (Q || L) &&
                          r.jsx(Ct, { className: "w-4 h-4 animate-spin" }),
                        r.jsx("span", {
                          children: Q
                            ? "新增中..."
                            : L
                            ? "更新中..."
                            : g(c === "add" ? "button.add" : "button.save"),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            r.jsx(Xo, {
              isOpen: N,
              onClose: () => k(!1),
              onScanSuccess: I,
              mode: "set_med_box_med_mode",
            }),
          ],
        });
  },
  Eh = () => {
    const {
        listDrawModalOpen: e,
        closeListDrawModal: t,
        selectedListDraw: n,
        triggerRefresh: s,
      } = Xe(),
      { t: o } = xt(),
      [l, a] = f.useState(""),
      [i, c] = f.useState([]),
      [x, g] = f.useState(""),
      [h, p] = f.useState("N"),
      [j, S] = f.useState([]),
      [C, R] = f.useState(!1);
    f.useEffect(() => {
      n && e && (a(n.name || ""), c(n.med_info || []));
    }, [n, e]);
    const d = (_) => {
        c((P) => P.filter((V) => V.code !== _));
      },
      u = async () => {
        R(!0);
        try {
          const _ = await De.searchMedicine(x, h);
          S(_);
        } catch (_) {
          console.error("Search failed:", _), S([]);
        } finally {
          R(!1);
        }
      },
      m = (_) => {
        const P = {
          id: _.GUID || `${Date.now()}_${Math.random()}`,
          name: _.NAME,
          cht_name: _.CHT_NAME,
          code: _.CODE,
        };
        c((V) => (V.some((K) => K.code === P.code) ? V : [...V, P]));
      },
      D = () => {
        n && ((n.name = l), (n.med_info = i), s(), t());
      },
      T = () => {
        t();
      };
    return !e || !n
      ? null
      : r.jsxs("div", {
          className: "fixed inset-0 z-50 flex items-center justify-center",
          children: [
            r.jsx("div", {
              className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
              onClick: T,
            }),
            r.jsxs("div", {
              className:
                "relative flex flex-col bg-white rounded-xl shadow-2xl border border-gray-200",
              style: { width: "90vw", height: "90vh" },
              onClick: (_) => _.stopPropagation(),
              children: [
                r.jsxs("div", {
                  className:
                    "flex items-center justify-between px-4 py-2 border-b border-gray-200",
                  children: [
                    r.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        r.jsx(jn, { className: "w-6 h-6 text-gray-600" }),
                        r.jsx("h2", {
                          className: "text-xl font-semibold text-gray-900",
                          children: o("modal.listDrawSettings"),
                        }),
                      ],
                    }),
                    r.jsx("button", {
                      onClick: T,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: r.jsx(Fe, { className: "w-6 h-6" }),
                    }),
                  ],
                }),
                r.jsx("div", {
                  className: "flex-1 px-4 py-1 overflow-y-auto",
                  children: r.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      r.jsxs("div", {
                        className: "space-y-1",
                        children: [
                          r.jsx("h3", {
                            className: "text-lg font-medium text-gray-900",
                            children: o("form.drawerName"),
                          }),
                          r.jsx("input", {
                            type: "text",
                            value: l,
                            onChange: (_) => a(_.target.value),
                            placeholder:
                              (n == null ? void 0 : n.name) ||
                              o("placeholder.drawerName"),
                            className:
                              "w-full px-2 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors text-base",
                          }),
                        ],
                      }),
                      r.jsxs("div", {
                        className: "flex gap-6",
                        children: [
                          r.jsxs("div", {
                            className: "space-y-2 w-[50%]",
                            children: [
                              r.jsx("h3", {
                                className: "text-lg font-medium text-gray-900",
                                children: o("form.drugList"),
                              }),
                              i.length > 0
                                ? r.jsx("div", {
                                    className:
                                      "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2",
                                    children: i.map((_) =>
                                      r.jsx(
                                        "div",
                                        {
                                          className:
                                            "bg-white border-2 border-gray-200 rounded-lg p-1 hover:border-gray-300 transition-colors",
                                          children: r.jsxs("div", {
                                            className:
                                              "flex items-start justify-between",
                                            children: [
                                              r.jsx("div", {
                                                className: "flex-1 min-w-0",
                                                children: r.jsxs("div", {
                                                  children: [
                                                    _.code &&
                                                      r.jsx("div", {
                                                        children: r.jsx("div", {
                                                          className:
                                                            "text-sm text-gray-900 font-mono",
                                                          children: _.code,
                                                        }),
                                                      }),
                                                    r.jsx("div", {
                                                      children: r.jsx("div", {
                                                        className:
                                                          "text-sm text-gray-900 font-medium",
                                                        children:
                                                          _.name ||
                                                          o("status.notSet"),
                                                      }),
                                                    }),
                                                    r.jsx("div", {
                                                      children: r.jsx("div", {
                                                        className:
                                                          "text-sm text-gray-900",
                                                        children:
                                                          _.cht_name ||
                                                          o("status.notSet"),
                                                      }),
                                                    }),
                                                  ],
                                                }),
                                              }),
                                              r.jsx("button", {
                                                onClick: () => d(_.code),
                                                className:
                                                  "ml-3 p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors flex-shrink-0",
                                                title: o("button.remove"),
                                                children: r.jsx(Fe, {
                                                  className: "w-5 h-5",
                                                }),
                                              }),
                                            ],
                                          }),
                                        },
                                        _.id
                                      )
                                    ),
                                  })
                                : r.jsx("div", {
                                    className:
                                      "bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg py-12",
                                    children: r.jsxs("div", {
                                      className: "text-center",
                                      children: [
                                        r.jsx("div", {
                                          className:
                                            "text-gray-500 text-lg mb-2",
                                          children: o("status.drawerNoDrug"),
                                        }),
                                        r.jsx("div", {
                                          className: "text-gray-400 text-sm",
                                          children: o("status.drugListEmpty"),
                                        }),
                                      ],
                                    }),
                                  }),
                            ],
                          }),
                          r.jsxs("div", {
                            className: "space-y-2 w-[50%]",
                            children: [
                              r.jsx("h3", {
                                className: "text-lg font-medium text-gray-900",
                                children: o("form.drugSearch"),
                              }),
                              r.jsxs("div", {
                                className: "flex gap-2 mb-2",
                                children: [
                                  r.jsx("input", {
                                    type: "text",
                                    value: x,
                                    onChange: (_) => g(_.target.value),
                                    placeholder: o("placeholder.drugSearch"),
                                    className:
                                      "border rounded px-3 py-1 flex-1 min-w-0 focus:border-blue-500 focus:outline-none transition-colors",
                                  }),
                                  r.jsxs("select", {
                                    value: h,
                                    onChange: (_) => p(_.target.value),
                                    className:
                                      "border rounded px-2 py-1 focus:border-blue-500 focus:outline-none transition-colors",
                                    title: "管制級別",
                                    children: [
                                      r.jsx("option", {
                                        value: "N",
                                        children: "N",
                                      }),
                                      r.jsx("option", {
                                        value: "1",
                                        children: "1",
                                      }),
                                      r.jsx("option", {
                                        value: "2",
                                        children: "2",
                                      }),
                                      r.jsx("option", {
                                        value: "3",
                                        children: "3",
                                      }),
                                      r.jsx("option", {
                                        value: "4",
                                        children: "4",
                                      }),
                                    ],
                                  }),
                                  r.jsxs("button", {
                                    onClick: u,
                                    disabled: C,
                                    className:
                                      "bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 transition-colors whitespace-nowrap disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2",
                                    children: [
                                      C &&
                                        r.jsx(Ct, {
                                          className: "w-4 h-4 animate-spin",
                                        }),
                                      o("button.search"),
                                    ],
                                  }),
                                ],
                              }),
                              r.jsx("div", {
                                className:
                                  "bg-white border rounded p-3 min-h-[300px] max-h-[300px] overflow-y-auto",
                                children: C
                                  ? r.jsxs("div", {
                                      className:
                                        "text-gray-500 text-center flex items-center justify-center h-full",
                                      children: [
                                        r.jsx(Ct, {
                                          className:
                                            "w-5 h-5 animate-spin mr-2",
                                        }),
                                        o("status.searching"),
                                      ],
                                    })
                                  : j.length > 0
                                  ? r.jsx("div", {
                                      className: "space-y-1",
                                      children: j.map((_, P) =>
                                        r.jsxs(
                                          "div",
                                          {
                                            className:
                                              "flex items-center justify-between p-2 border border-gray-200 rounded hover:bg-gray-50 transition-colors",
                                            children: [
                                              r.jsxs("div", {
                                                className: "flex-1 min-w-0",
                                                children: [
                                                  r.jsx("div", {
                                                    className:
                                                      "text-sm font-medium text-gray-900 truncate",
                                                    children: _.NAME,
                                                  }),
                                                  r.jsx("div", {
                                                    className:
                                                      "text-xs text-gray-500 truncate",
                                                    children: _.CHT_NAME,
                                                  }),
                                                  r.jsx("div", {
                                                    className:
                                                      "text-xs text-gray-400 font-mono",
                                                    children: _.CODE,
                                                  }),
                                                ],
                                              }),
                                              r.jsx("button", {
                                                onClick: () => m(_),
                                                className:
                                                  "ml-2 p-1 text-green-600 hover:text-green-700 hover:bg-green-50 rounded transition-colors flex-shrink-0",
                                                title: o("button.add"),
                                                children: r.jsx(bt, {
                                                  className: "w-4 h-4",
                                                }),
                                              }),
                                            ],
                                          },
                                          _.GUID || P
                                        )
                                      ),
                                    })
                                  : r.jsx("div", {
                                      className:
                                        "text-gray-500 text-center flex items-center justify-center h-full",
                                      children: o(
                                        x || h !== "N"
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
                r.jsxs("div", {
                  className:
                    "flex items-center justify-end space-x-3 px-6 py-4 border-t border-gray-200",
                  children: [
                    r.jsx("button", {
                      onClick: T,
                      className:
                        "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                      children: o("button.cancel"),
                    }),
                    r.jsx("button", {
                      onClick: D,
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
  Ih = () => {
    const {
        gridDrawModalOpen: e,
        closeGridDrawModal: t,
        selectedGridDraw: n,
        triggerRefresh: s,
        apiDepartmentData: o,
        setApiDepartmentData: l,
        showNotification: a,
        medicineList: i,
      } = Xe(),
      { t: c } = xt(),
      [x, g] = f.useState(""),
      [h, p] = f.useState(null),
      [j, S] = f.useState(!1),
      [C, R] = f.useState(!1),
      [d, u] = f.useState(null),
      [m, D] = f.useState(""),
      [T, _] = f.useState("N"),
      [P, V] = f.useState([]),
      [Q, K] = f.useState(!1),
      [pe, ye] = f.useState(0),
      [v, b] = f.useState({ x: 0, y: 0 });
    f.useEffect(() => {
      if (n && e)
        if ((g(n.name || ""), n.drawer)) {
          if (!j) {
            console.log("🔄 備份原始 drawer 資料:", n);
            const B = JSON.parse(JSON.stringify(n.drawer));
            p(B), S(!0), console.log("✅ 備份完成，備份資料:", B);
          }
        } else console.log("⚠️ 沒有 drawer 資料可備份"), p(null), S(!1);
    }, [n, e, j]),
      f.useEffect(() => {
        e || (S(!1), p(null), u(null));
      }, [e]);
    const L = () => {
        n && se();
      },
      w = () => {
        if (
          (console.log("🔄 開始恢復原始資料..."),
          console.log("原始備份資料:", h),
          console.log("當前 selectedGridDraw:", n),
          n && h && j)
        ) {
          console.log("📦 恢復 drawer 資料...");
          const B = JSON.parse(JSON.stringify(h));
          if (((n.drawer = B), o)) {
            const Z = (A) => {
                A.forEach((H) => {
                  H.GUID === n.GUID &&
                    (console.log("🎯 找到目標格線抽屜，更新資料"),
                    (H.drawer = B)),
                    H.contents && Array.isArray(H.contents) && Z(H.contents),
                    H.components &&
                      Array.isArray(H.components) &&
                      Z(H.components);
                });
              },
              ie = JSON.parse(JSON.stringify(o));
            Z(ie), l(ie), console.log("🔄 已更新全域資料狀態");
          }
          console.log("✅ 資料已恢復:", n.drawer);
        } else
          console.log(
            "⚠️ 無法恢復資料 - selectedGridDraw、originalDrawerData 或 hasBackup 為空"
          ),
            console.log("selectedGridDraw:", !!n),
            console.log("originalDrawerData:", !!h),
            console.log("hasBackup:", j);
        u(null), S(!1), p(null), s(), t();
      },
      N = (B, Z) => {
        if (!d) return !1;
        const ie = Math.min(d.startRow, d.endRow),
          A = Math.max(d.startRow, d.endRow),
          H = Math.min(d.startCol, d.endCol),
          W = Math.max(d.startCol, d.endCol);
        return B >= ie && B <= A && Z >= H && Z <= W;
      },
      k = (B) => {
        var Ne;
        if (
          !((Ne = n == null ? void 0 : n.drawer) != null && Ne.Boxes) ||
          B.Slave
        )
          return { width: 1, height: 1 };
        const ie = n.drawer.Boxes.flat().filter(
          (ce) =>
            ce.Slave &&
            ce.MasterBox_Row === B.Row &&
            ce.MasterBox_Column === B.Column
        );
        if (ie.length === 0) return { width: 1, height: 1 };
        const A = [B, ...ie],
          H = Math.min(...A.map((ce) => ce.Row)),
          W = Math.max(...A.map((ce) => ce.Row)),
          oe = Math.min(...A.map((ce) => ce.Column));
        return {
          width: Math.max(...A.map((ce) => ce.Column)) - oe + 1,
          height: W - H + 1,
        };
      },
      M = () => {
        var oe;
        if (!d || !((oe = n == null ? void 0 : n.drawer) != null && oe.Boxes))
          return [];
        const B = n.drawer.Boxes.flat(),
          Z = Math.min(d.startRow, d.endRow),
          ie = Math.max(d.startRow, d.endRow),
          A = Math.min(d.startCol, d.endCol),
          H = Math.max(d.startCol, d.endCol),
          W = [];
        return (
          B.forEach((de) => {
            if (!de.Slave) {
              const Ne = k(de),
                ce = de.Row + Ne.height - 1,
                we = de.Column + Ne.width - 1;
              de.Row >= Z &&
                ce <= ie &&
                de.Column >= A &&
                we <= H &&
                W.push(de);
            }
          }),
          W
        );
      },
      J = (B, Z, ie, A) => {
        var we;
        if (!d || !((we = n == null ? void 0 : n.drawer) != null && we.Boxes))
          return !1;
        const H = n.drawer.Boxes.flat();
        let W = !0,
          oe = B,
          de = Z,
          Ne = ie,
          ce = A;
        for (; W; )
          (W = !1),
            H.forEach((ke) => {
              if (!ke.Slave) {
                const Ie = k(ke),
                  We = ke.Row + Ie.height - 1,
                  Te = ke.Column + Ie.width - 1;
                !(ke.Row > de || We < oe || ke.Column > ce || Te < Ne) &&
                  (ke.Row < oe && ((oe = ke.Row), (W = !0)),
                  We > de && ((de = We), (W = !0)),
                  ke.Column < Ne && ((Ne = ke.Column), (W = !0)),
                  Te > ce && ((ce = Te), (W = !0)));
              }
            });
        return { minRow: oe, maxRow: de, minCol: Ne, maxCol: ce };
      },
      z = () => {
        var W;
        if (!d || !((W = n == null ? void 0 : n.drawer) != null && W.Boxes))
          return !1;
        const B = Math.min(d.startRow, d.endRow),
          Z = Math.max(d.startRow, d.endRow),
          ie = Math.min(d.startCol, d.endCol),
          A = Math.max(d.startCol, d.endCol),
          H = n.drawer.Boxes.flat();
        for (let oe = B; oe <= Z; oe++)
          for (let de = ie; de <= A; de++) {
            let Ne = !1;
            for (const ce of H)
              if (!ce.Slave) {
                const we = k(ce),
                  ke = ce.Row + we.height - 1,
                  Ie = ce.Column + we.width - 1;
                if (oe >= ce.Row && oe <= ke && de >= ce.Column && de <= Ie) {
                  Ne = !0;
                  break;
                }
              }
            if (!Ne) return !1;
          }
        return !0;
      },
      X = () => {
        var we, ke;
        const B = M();
        if (!d) return { canMerge: !1, canUnmerge: !1 };
        if (B.length === 0) return { canMerge: !1, canUnmerge: !1 };
        const Z =
            ((ke =
              (we = n == null ? void 0 : n.drawer) == null
                ? void 0
                : we.Boxes) == null
              ? void 0
              : ke.flat()) || [],
          ie = B.some(
            (Ie) =>
              Z.filter(
                (Te) =>
                  Te.Slave &&
                  Te.MasterBox_Row === Ie.Row &&
                  Te.MasterBox_Column === Ie.Column
              ).length > 0
          ),
          A = Math.min(d.startRow, d.endRow),
          H = Math.max(d.startRow, d.endRow),
          W = Math.min(d.startCol, d.endCol),
          oe = Math.max(d.startCol, d.endCol),
          de = Z.some(
            (Ie) =>
              Ie.Slave &&
              Ie.Row >= A &&
              Ie.Row <= H &&
              Ie.Column >= W &&
              Ie.Column <= oe
          );
        return { canMerge: B.length > 1 && z(), canUnmerge: ie || de };
      },
      { canMerge: be, canUnmerge: fe } = X(),
      U = async () => {
        K(!0);
        try {
          const B = m.toLowerCase().trim();
          let Z = i;
          B &&
            (Z = Z.filter((ie) => {
              var A, H, W;
              return (
                ((A = ie.CODE) == null
                  ? void 0
                  : A.toLowerCase().includes(B)) ||
                ((H = ie.NAME) == null
                  ? void 0
                  : H.toLowerCase().includes(B)) ||
                ((W = ie.CHT_NAME) == null
                  ? void 0
                  : W.toLowerCase().includes(B))
              );
            })),
            T !== "N" && (Z = Z.filter((ie) => ie.DRUGKIND === T)),
            V(Z);
        } catch (B) {
          console.error("Search failed:", B), V([]);
        } finally {
          K(!1);
        }
      },
      xe = async (B) => {
        var ie;
        if (!d || !((ie = n == null ? void 0 : n.drawer) != null && ie.Boxes))
          return;
        const Z = M();
        if (Z.length !== 0)
          try {
            const A = {
              ServerName: n.serverName,
              ServerType: n.serverType,
              ValueAry: [`guid=${Z[0].GUID}`, `code=${B.CODE}`],
              Data: n.drawer,
            };
            console.log("🚀 發送更新藥品 API 請求:", A);
            const H = await De.request("/api/device/update_drawer_medcode", {
              method: "POST",
              body: JSON.stringify(A),
            });
            if (
              (console.log("📡 更新藥品 API 回應:", H),
              H.Code === 200 && H.Data)
            ) {
              if (
                ((n.drawer = H.Data),
                H.Data.Boxes && (n.Boxes = H.Data.Boxes),
                console.log("✅ 藥品資料更新成功"),
                o)
              ) {
                const W = (de) => {
                    de.forEach((Ne) => {
                      Ne.GUID === n.GUID &&
                        (console.log("🎯 找到目標格線抽屜，更新資料"),
                        (Ne.drawer = n.drawer),
                        n.Boxes && (Ne.Boxes = n.Boxes)),
                        Ne.contents &&
                          Array.isArray(Ne.contents) &&
                          W(Ne.contents),
                        Ne.components &&
                          Array.isArray(Ne.components) &&
                          W(Ne.components);
                    });
                  },
                  oe = JSON.parse(JSON.stringify(o));
                W(oe), l(oe);
              }
              u(null), s();
            } else
              console.error("❌ 藥品更新失敗:", H),
                a(`藥品更新失敗：${H.Result || "未知錯誤"}`, "error");
          } catch (A) {
            console.error("💥 藥品更新 API 調用失敗:", A),
              a("藥品更新失敗：網路錯誤", "error");
          }
      },
      F = (B, Z, ie) => {
        ie.preventDefault(),
          ie.stopPropagation(),
          "touches" in ie &&
            (ye(Date.now()),
            b({ x: ie.touches[0].clientX, y: ie.touches[0].clientY })),
          R(!0),
          u({ startRow: B, startCol: Z, endRow: B, endCol: Z });
      },
      ve = (B, Z) => {
        if (!C || !d) return;
        const ie = Math.min(d.startRow, B),
          A = Math.max(d.startRow, B),
          H = Math.min(d.startCol, Z),
          W = Math.max(d.startCol, Z),
          oe = J(ie, A, H, W);
        oe &&
          u((de) =>
            de
              ? {
                  startRow: de.startRow,
                  startCol: de.startCol,
                  endRow: B >= de.startRow ? oe.maxRow : oe.minRow,
                  endCol: Z >= de.startCol ? oe.maxCol : oe.minCol,
                }
              : null
          );
      },
      me = () => {
        if (C && (R(!1), d && n != null && n.Boxes)) {
          const B = Math.min(d.startRow, d.endRow),
            Z = Math.max(d.startRow, d.endRow),
            ie = Math.min(d.startCol, d.endCol),
            A = Math.max(d.startCol, d.endCol),
            H = J(B, Z, ie, A);
          H &&
            u({
              startRow: H.minRow,
              startCol: H.minCol,
              endRow: H.maxRow,
              endCol: H.maxCol,
            });
        }
      },
      I = () => {
        var B;
        !be ||
          !((B = n == null ? void 0 : n.drawer) != null && B.Boxes) ||
          !d ||
          E();
      },
      ue = () => {
        var B;
        !fe ||
          !((B = n == null ? void 0 : n.drawer) != null && B.Boxes) ||
          !d ||
          (console.log(d), G());
      },
      G = async () => {
        var B;
        if (!(!d || !((B = n == null ? void 0 : n.drawer) != null && B.Boxes)))
          try {
            const Z = Math.min(d.startRow, d.endRow),
              ie = Math.max(d.startRow, d.endRow),
              A = Math.min(d.startCol, d.endCol),
              H = Math.max(d.startCol, d.endCol),
              oe = n.drawer.Boxes.flat().filter(
                (ke) =>
                  ke.Row >= Z &&
                  ke.Row <= ie &&
                  ke.Column >= A &&
                  ke.Column <= H
              ),
              de = [],
              Ne = [];
            oe.forEach((ke) => {
              de.push(ke.Column.toString()), Ne.push(ke.Row.toString());
            });
            const ce = {
              ServerName: n.serverName,
              ServerType: n.serverType,
              ValueAry: [
                `SelectColumns=${de.join(",")}`,
                `SelectRows=${Ne.join(",")}`,
              ],
              Data: { IP: n.ip, Boxes: n.Boxes },
            };
            console.log("🚀 發送 API 請求:", ce);
            const we = await De.request("/api/device/separate_drawer_boxes", {
              method: "POST",
              body: JSON.stringify(ce),
            });
            if ((console.log("📡 API 回應:", we), we.Code === 200 && we.Data)) {
              if (
                we.Data.Boxes &&
                Array.isArray(we.Data.Boxes) &&
                ((n.Boxes = we.Data.Boxes),
                (n.drawer = we.Data),
                console.log("✅ 資料已更新"),
                o)
              ) {
                const ke = (We) => {
                    We.forEach((Te) => {
                      Te.GUID === n.GUID &&
                        (console.log("🎯 找到目標格線抽屜，更新資料"),
                        (Te.drawer = n.drawer)),
                        Te.contents &&
                          Array.isArray(Te.contents) &&
                          ke(Te.contents),
                        Te.components &&
                          Array.isArray(Te.components) &&
                          ke(Te.components);
                    });
                  },
                  Ie = JSON.parse(JSON.stringify(o));
                ke(Ie), l(Ie);
              }
            } else
              console.error("❌ API 回應錯誤:", we),
                a(`取消合併失敗：${we.Result || "未知錯誤"}`, "error");
          } catch (Z) {
            console.error("💥 API 調用失敗:", Z),
              a("取消合併失敗：網路錯誤", "error");
          } finally {
            console.log("更新後資料：", n),
              console.log("更新後最深層資料：", o),
              u(null),
              s();
          }
      },
      E = async () => {
        var B;
        if (!(!d || !((B = n == null ? void 0 : n.drawer) != null && B.Boxes)))
          try {
            const Z = Math.min(d.startRow, d.endRow),
              ie = Math.max(d.startRow, d.endRow),
              A = Math.min(d.startCol, d.endCol),
              H = Math.max(d.startCol, d.endCol),
              oe = n.drawer.Boxes.flat().filter(
                (ke) =>
                  ke.Row >= Z &&
                  ke.Row <= ie &&
                  ke.Column >= A &&
                  ke.Column <= H
              ),
              de = [],
              Ne = [];
            oe.forEach((ke) => {
              de.push(ke.Column.toString()), Ne.push(ke.Row.toString());
            });
            const ce = {
              ServerName: n.serverName,
              ServerType: n.serverType,
              ValueAry: [
                `SelectColumns=${de.join(",")}`,
                `SelectRows=${Ne.join(",")}`,
              ],
              Data: { IP: n.ip, Boxes: n.Boxes },
            };
            console.log("🚀 發送 API 請求:", ce);
            const we = await De.request("/api/device/combine_drawer_boxes", {
              method: "POST",
              body: JSON.stringify(ce),
            });
            if ((console.log("📡 API 回應:", we), we.Code === 200 && we.Data)) {
              if (
                we.Data.Boxes &&
                Array.isArray(we.Data.Boxes) &&
                ((n.Boxes = we.Data.Boxes),
                (n.drawer = we.Data),
                console.log("✅ 資料已更新"),
                o)
              ) {
                const ke = (We) => {
                    We.forEach((Te) => {
                      Te.GUID === n.GUID &&
                        (console.log("🎯 找到目標格線抽屜，更新資料"),
                        (Te.drawer = n.drawer)),
                        Te.contents &&
                          Array.isArray(Te.contents) &&
                          ke(Te.contents),
                        Te.components &&
                          Array.isArray(Te.components) &&
                          ke(Te.components);
                    });
                  },
                  Ie = JSON.parse(JSON.stringify(o));
                ke(Ie), l(Ie);
              }
            } else
              console.error("❌ API 回應錯誤:", we),
                a(`取消合併失敗：${we.Result || "未知錯誤"}`, "error");
          } catch (Z) {
            console.error("💥 API 調用失敗:", Z),
              a("取消合併失敗：網路錯誤", "error");
          } finally {
            console.log("更新後資料：", n),
              console.log("更新後最深層資料：", o),
              u(null),
              s();
          }
      },
      se = async () => {
        if (n)
          try {
            n.name = x;
            const B = {
              ServerName: n.serverName,
              ServerType: n.serverType,
              Data: [n.drawer],
            };
            console.log("🚀 發送確認更新 API 請求:", B);
            const Z = await De.request("/api/device/update_epd583_drawers", {
              method: "POST",
              body: JSON.stringify(B),
            });
            if ((console.log("📡 確認更新 API 回應:", Z), Z.Code === 200)) {
              if (
                (console.log("✅ 抽屜資料更新成功"),
                a("抽屜資料更新成功", "success"),
                o)
              ) {
                const ie = (H) => {
                    H.forEach((W) => {
                      W.GUID === n.GUID &&
                        (console.log("🎯 找到目標格線抽屜，更新名稱"),
                        (W.name = n.name)),
                        W.contents &&
                          Array.isArray(W.contents) &&
                          ie(W.contents),
                        W.components &&
                          Array.isArray(W.components) &&
                          ie(W.components);
                    });
                  },
                  A = JSON.parse(JSON.stringify(o));
                ie(A), l(A);
              }
              S(!1), p(null), s(), t();
            } else
              console.error("❌ 抽屜資料更新失敗:", Z),
                a(`抽屜資料更新失敗：${Z.Result || "未知錯誤"}`, "error");
          } catch (B) {
            console.error("💥 抽屜資料更新 API 調用失敗:", B),
              a("抽屜資料更新失敗：網路錯誤", "error");
          }
      },
      le = () => {
        var Ne;
        if (
          !((Ne = n == null ? void 0 : n.drawer) != null && Ne.Boxes) ||
          n.drawer.Boxes.length === 0
        )
          return r.jsx("div", {
            className:
              "bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg py-12",
            children: r.jsxs("div", {
              className: "text-center",
              children: [
                r.jsx(Hu, {
                  className: "w-12 h-12 text-gray-400 mx-auto mb-4",
                }),
                r.jsx("div", {
                  className: "text-gray-500 text-lg mb-2",
                  children: c("status.gridDrawNotConfigured"),
                }),
                r.jsx("div", {
                  className: "text-gray-400 text-sm",
                  children: c("status.noDrugInfo"),
                }),
              ],
            }),
          });
        const B = n.drawer.Boxes.flat(),
          Z = (ce) => {
            if (ce.Slave) return { width: 1, height: 1 };
            const we = B.filter(
              (Le) =>
                Le.Slave &&
                Le.MasterBox_Row === ce.Row &&
                Le.MasterBox_Column === ce.Column
            );
            if (we.length === 0) return { width: 1, height: 1 };
            const ke = [ce, ...we],
              Ie = Math.min(...ke.map((Le) => Le.Row)),
              We = Math.max(...ke.map((Le) => Le.Row)),
              Te = Math.min(...ke.map((Le) => Le.Column));
            return {
              width: Math.max(...ke.map((Le) => Le.Column)) - Te + 1,
              height: We - Ie + 1,
            };
          },
          ie = Math.max(...B.map((ce) => ce.Row + 1 - 1)),
          A = Math.max(...B.map((ce) => ce.Column + 1 - 1)),
          H = ie + 1,
          W = A + 1,
          oe = Array(H)
            .fill(null)
            .map(() => Array(W).fill(!1)),
          de = {};
        return (
          B.forEach((ce) => {
            if (!ce.Slave) {
              const we = Z(ce);
              (de[`${ce.Row},${ce.Column}`] = ce),
                (ce.calculatedWidth = we.width),
                (ce.calculatedHeight = we.height);
            }
          }),
          B.forEach((ce) => {
            if (
              !ce.Slave &&
              (ce.calculatedWidth > 1 || ce.calculatedHeight > 1)
            )
              for (let we = ce.Row; we < ce.Row + ce.calculatedHeight; we++)
                for (
                  let ke = ce.Column;
                  ke < ce.Column + ce.calculatedWidth;
                  ke++
                )
                  (we !== ce.Row || ke !== ce.Column) && (oe[we][ke] = !0);
          }),
          r.jsx("div", {
            className: "rounded-lg",
            children: r.jsx("table", {
              className: "w-full",
              children: r.jsx("tbody", {
                children: Array.from({ length: H }, (ce, we) =>
                  r.jsx(
                    "tr",
                    {
                      children: Array.from({ length: W }, (ke, Ie) => {
                        if (oe[we][Ie]) return null;
                        const We = `${we},${Ie}`,
                          Te = de[We];
                        return Te
                          ? r.jsx(
                              "td",
                              {
                                className: `border border-gray-400 pt-1 pl-1 align-top cursor-pointer select-none ${
                                  N(we, Ie)
                                    ? "bg-blue-200"
                                    : "bg-white hover:bg-gray-100"
                                }`,
                                style: {
                                  width: `${100 / W}%`,
                                  minHeight: "40px",
                                  height: `${50 * Te.calculatedHeight}px`,
                                  maxHeight: `${50 * Te.calculatedHeight}px`,
                                },
                                colSpan: Te.calculatedWidth,
                                rowSpan: Te.calculatedHeight,
                                onMouseDown: (Ke) => F(we, Ie, Ke),
                                onMouseEnter: () => ve(we, Ie),
                                onMouseUp: me,
                                onTouchStart: (Ke) => F(we, Ie, Ke),
                                onTouchMove: (Ke) => {
                                  if ((Ke.preventDefault(), !C)) return;
                                  const Le = Ke.touches[0],
                                    kt = document.elementFromPoint(
                                      Le.clientX,
                                      Le.clientY
                                    ),
                                    Rt = kt == null ? void 0 : kt.closest("td");
                                  if (Rt) {
                                    const On = parseInt(
                                        Rt.getAttribute("data-row") || "0"
                                      ),
                                      Gt = parseInt(
                                        Rt.getAttribute("data-col") || "0"
                                      );
                                    ve(On, Gt);
                                  }
                                },
                                onTouchEnd: me,
                                "data-row": we,
                                "data-col": Ie,
                                children: r.jsx("div", {
                                  className: "h-full flex flex-col",
                                  children:
                                    Te.Code || Te.Name || Te.ChineseName
                                      ? r.jsxs(r.Fragment, {
                                          children: [
                                            Te.Code &&
                                              r.jsx("div", {
                                                className:
                                                  "text-xs font-mono text-gray-600",
                                                children: Te.Code,
                                              }),
                                            Te.Name &&
                                              r.jsx("div", {
                                                className:
                                                  "text-xs font-medium text-gray-900",
                                                children: Te.Name,
                                              }),
                                            Te.ChineseName &&
                                              r.jsx("div", {
                                                className:
                                                  "text-xs text-gray-700",
                                                children: Te.ChineseName,
                                              }),
                                          ],
                                        })
                                      : r.jsx("div", {
                                          className:
                                            "h-full flex justify-center items-center text-xs text-gray-400 italic text-center",
                                          children: c("status.notAdded"),
                                        }),
                                }),
                              },
                              Ie
                            )
                          : r.jsx(
                              "td",
                              {
                                className: `border border-gray-300 p-2 align-top cursor-pointer select-none ${
                                  N(we, Ie)
                                    ? "border-1 border-blue-500 bg-blue-100"
                                    : "bg-gray-50 hover:bg-gray-100"
                                }`,
                                style: {
                                  width: `${100 / W}%`,
                                  minWidth: "80px",
                                  minHeight: "80px",
                                },
                                onMouseDown: (Ke) => F(we, Ie, Ke),
                                onMouseEnter: () => ve(we, Ie),
                                onMouseUp: me,
                                onTouchStart: (Ke) => F(we, Ie, Ke),
                                onTouchMove: (Ke) => {
                                  if ((Ke.preventDefault(), !C)) return;
                                  const Le = Ke.touches[0],
                                    kt = document.elementFromPoint(
                                      Le.clientX,
                                      Le.clientY
                                    ),
                                    Rt = kt == null ? void 0 : kt.closest("td");
                                  if (Rt) {
                                    const On = parseInt(
                                        Rt.getAttribute("data-row") || "0"
                                      ),
                                      Gt = parseInt(
                                        Rt.getAttribute("data-col") || "0"
                                      );
                                    ve(On, Gt);
                                  }
                                },
                                onTouchEnd: me,
                                "data-row": we,
                                "data-col": Ie,
                                children: r.jsx("div", {
                                  className:
                                    "h-full flex items-center justify-center text-gray-400 text-xs",
                                  children: c("status.notAdded"),
                                }),
                              },
                              Ie
                            );
                      }),
                    },
                    we
                  )
                ),
              }),
            }),
          })
        );
      };
    return !e || !n
      ? null
      : r.jsxs("div", {
          className: "fixed inset-0 z-50 flex items-center justify-center",
          children: [
            r.jsx("div", {
              className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
              onClick: w,
            }),
            r.jsxs("div", {
              className:
                "relative flex flex-col bg-white rounded-xl shadow-2xl border border-gray-200",
              style: { width: "90vw", height: "90vh" },
              onClick: (B) => B.stopPropagation(),
              children: [
                r.jsxs("div", {
                  className:
                    "flex items-center justify-between px-4 py-2 border-b border-gray-200",
                  children: [
                    r.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        r.jsx(jn, { className: "w-6 h-6 text-gray-600" }),
                        r.jsx("h2", {
                          className: "text-xl font-semibold text-gray-900",
                          children: c("modal.gridDrawSettings"),
                        }),
                      ],
                    }),
                    r.jsx("button", {
                      onClick: w,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: r.jsx(Fe, { className: "w-6 h-6" }),
                    }),
                  ],
                }),
                r.jsxs("div", {
                  className: "flex-1 px-4 py-2 overflow-y-auto",
                  children: [
                    r.jsxs("div", {
                      className: "space-y-4 pt-2",
                      children: [
                        r.jsxs("div", {
                          className: "flex items-center space-x-3",
                          children: [
                            r.jsx("h3", {
                              className:
                                "text-lg whitespace-nowrap font-medium text-gray-900",
                              children: c("form.drawerName"),
                            }),
                            r.jsx("input", {
                              type: "text",
                              value: x,
                              onChange: (B) => g(B.target.value),
                              disabled: !0,
                              placeholder:
                                (n == null ? void 0 : n.name) ||
                                c("placeholder.gridDrawName"),
                              className:
                                "px-2 py-1 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors text-base",
                            }),
                          ],
                        }),
                        r.jsx("div", {
                          className: "space-y-1",
                          children: le(),
                        }),
                      ],
                    }),
                    r.jsxs("div", {
                      className: "py-2 flex space-x-4",
                      children: [
                        r.jsx("div", {
                          className: "grid grid-cols-1 gap-2 w-[10%]",
                          children: r.jsxs("div", {
                            className: "grid grid-cols-1 gap-2 items-strat",
                            children: [
                              r.jsx("button", {
                                onClick: I,
                                disabled: !be,
                                className: `px-4 py-2 rounded transition-colors ${
                                  be
                                    ? "bg-blue-600 text-white hover:bg-blue-700"
                                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                                }`,
                                children: c("button.merge"),
                              }),
                              r.jsx("button", {
                                onClick: ue,
                                disabled: !fe,
                                className: `px-4 py-2 rounded transition-colors ${
                                  fe
                                    ? "bg-red-600 text-white hover:bg-red-700"
                                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                                }`,
                                children: c("button.unmerge"),
                              }),
                            ],
                          }),
                        }),
                        r.jsx("div", {
                          className: "space-y-2 w-[30%]",
                          children: (() => {
                            const B = M(),
                              Z = B.find((ie) => !ie.Slave);
                            return Z && (Z.Code || Z.Name || Z.ChineseName)
                              ? r.jsxs("div", {
                                  className:
                                    "border border-blue-200 rounded-lg p-2 space-y-1 h-full",
                                  children: [
                                    r.jsxs("div", {
                                      children: [
                                        r.jsx("div", {
                                          className:
                                            "text-sm text-gray-900 mb-1",
                                          children: c("form.drugCode"),
                                        }),
                                        r.jsx("div", {
                                          className: "text-base text-gray-900",
                                          children: Z.Code || "-",
                                        }),
                                      ],
                                    }),
                                    r.jsxs("div", {
                                      children: [
                                        r.jsx("div", {
                                          className:
                                            "text-sm text-gray-900  mb-1",
                                          children: c("form.drugName"),
                                        }),
                                        r.jsx("div", {
                                          className: "text-base text-gray-900",
                                          children: Z.Name || "-",
                                        }),
                                      ],
                                    }),
                                    r.jsxs("div", {
                                      children: [
                                        r.jsx("div", {
                                          className:
                                            "text-sm text-gray-900 mb-1",
                                          children: c("form.chineseName"),
                                        }),
                                        r.jsx("div", {
                                          className: "text-base text-gray-900",
                                          children: Z.ChineseName || "-",
                                        }),
                                      ],
                                    }),
                                  ],
                                })
                              : r.jsx("div", {
                                  className:
                                    "bg-gray-50 border h-full border-gray-200 rounded-lg p-3 text-center",
                                  children: r.jsx("div", {
                                    className:
                                      "text-gray-500 h-full w-full flex justify-center items-center",
                                    children:
                                      d && B.length > 0
                                        ? c("status.selectedCellsNoDrug")
                                        : c("status.selectCellsForDrug"),
                                  }),
                                });
                          })(),
                        }),
                        r.jsxs("div", {
                          className: "w-[60%]",
                          children: [
                            r.jsxs("div", {
                              className: "flex gap-2 mb-2",
                              children: [
                                r.jsx("input", {
                                  type: "text",
                                  value: m,
                                  onChange: (B) => D(B.target.value),
                                  placeholder: c("placeholder.drugSearch"),
                                  className:
                                    "border rounded px-3 py-1 flex-1 min-w-0 focus:border-blue-500 focus:outline-none transition-colors",
                                }),
                                r.jsxs("select", {
                                  value: T,
                                  onChange: (B) => _(B.target.value),
                                  className:
                                    "border rounded px-2 py-1 focus:border-blue-500 focus:outline-none transition-colors",
                                  title: "管制級別",
                                  children: [
                                    r.jsx("option", {
                                      value: "N",
                                      children: "N",
                                    }),
                                    r.jsx("option", {
                                      value: "1",
                                      children: "1",
                                    }),
                                    r.jsx("option", {
                                      value: "2",
                                      children: "2",
                                    }),
                                    r.jsx("option", {
                                      value: "3",
                                      children: "3",
                                    }),
                                    r.jsx("option", {
                                      value: "4",
                                      children: "4",
                                    }),
                                  ],
                                }),
                                r.jsxs("button", {
                                  onClick: U,
                                  disabled: Q,
                                  className:
                                    "bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 transition-colors whitespace-nowrap disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2",
                                  children: [
                                    Q &&
                                      r.jsx(Ct, {
                                        className: "w-4 h-4 animate-spin",
                                      }),
                                    c("button.search"),
                                  ],
                                }),
                              ],
                            }),
                            r.jsx("div", {
                              className:
                                "bg-white border rounded p-3 min-h-[150px] max-h-[150px] overflow-y-auto",
                              children: Q
                                ? r.jsxs("div", {
                                    className:
                                      "text-gray-500 text-center flex items-center justify-center h-full",
                                    children: [
                                      r.jsx(Ct, {
                                        className: "w-5 h-5 animate-spin mr-2",
                                      }),
                                      c("status.searching"),
                                    ],
                                  })
                                : P.length > 0
                                ? r.jsx("div", {
                                    className: "space-y-1",
                                    children: P.map((B, Z) =>
                                      r.jsxs(
                                        "div",
                                        {
                                          className:
                                            "flex items-center justify-between p-1 border border-gray-200 rounded hover:bg-gray-50 transition-colors",
                                          children: [
                                            r.jsxs("div", {
                                              className: "flex-1 min-w-0",
                                              children: [
                                                r.jsx("div", {
                                                  className:
                                                    "text-sm font-medium text-gray-900 truncate",
                                                  children: B.NAME,
                                                }),
                                                r.jsx("div", {
                                                  className:
                                                    "text-xs text-gray-500 truncate",
                                                  children: B.CHT_NAME,
                                                }),
                                                r.jsx("div", {
                                                  className:
                                                    "text-xs text-gray-400 font-mono",
                                                  children: B.CODE,
                                                }),
                                              ],
                                            }),
                                            r.jsx("button", {
                                              onClick: () => xe(B),
                                              className:
                                                "ml-2 p-1 text-green-600 hover:text-green-700 hover:bg-green-50 rounded transition-colors flex-shrink-0",
                                              title: c("button.add"),
                                              children: r.jsx(bt, {
                                                className: "w-4 h-4",
                                              }),
                                            }),
                                          ],
                                        },
                                        B.GUID || Z
                                      )
                                    ),
                                  })
                                : r.jsx("div", {
                                    className:
                                      "text-gray-500 text-center flex items-center justify-center h-full",
                                    children: c(
                                      m || T !== "N"
                                        ? "status.noSearchResults"
                                        : "status.searchResults"
                                    ),
                                  }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    r.jsxs("div", {
                      className:
                        "flex items-center justify-end space-x-3 px-6 py-4 border-t border-gray-200",
                      children: [
                        r.jsx("button", {
                          onClick: w,
                          className:
                            "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                          children: c("button.cancel"),
                        }),
                        r.jsx("button", {
                          onClick: L,
                          className:
                            "px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors",
                          children: c("button.save"),
                        }),
                      ],
                    }),
                  ],
                }),
                r.jsx("div", {
                  className: "fixed inset-0 pointer-events-none",
                  onMouseUp: me,
                  onMouseLeave: me,
                  onTouchEnd: me,
                  onTouchCancel: me,
                }),
              ],
            }),
          ],
        });
  },
  Ph = () => {
    var ye;
    const {
        addParentContainerModalOpen: e,
        closeAddParentContainerModal: t,
        selectedDepartmentForAdd: n,
        selectedDepartmentType: s,
        setApiDepartmentData: o,
        setIsLoadingMedMap: l,
        showNotification: a,
        triggerRefresh: i,
        setSidebarOpen: c,
      } = Xe(),
      { t: x } = xt(),
      [g, h] = f.useState(null),
      [p, j] = f.useState(0),
      [S, C] = f.useState(0),
      [R, d] = f.useState(!1);
    f.useEffect(() => {
      e && (h(null), j(0), C(0), d(!1));
    }, [e]),
      f.useEffect(() => {
        g && (j(g.row), C(g.col));
      }, [g]);
    const u = () => {
        const v = new Set();
        return (
          n != null &&
            n.contents &&
            n.contents.forEach((b) => {
              b.type === "parent_container" &&
                b.gird_position &&
                v.add(b.gird_position);
            }),
          v
        );
      },
      m = () => {
        const v = u(),
          b = [];
        if (v.size === 0) return b.push({ row: 0, col: 0 }), b;
        const L = [];
        v.forEach((N) => {
          const [k, M] = N.split(",").map(Number);
          L.push({ row: k, col: M });
        });
        const w = new Set();
        return (
          L.forEach(({ row: N, col: k }) => {
            w.add(`${N},${k + 1}`),
              w.add(`${N + 1},${k}`),
              k > 0 && w.add(`${N},${k - 1}`),
              N > 0 && w.add(`${N - 1},${k}`);
          }),
          w.forEach((N) => {
            if (!v.has(N)) {
              const [k, M] = N.split(",").map(Number);
              k >= 0 && M >= 0 && b.push({ row: k, col: M });
            }
          }),
          v.has("0,1") ||
            b.some((k) => k.row === 0 && k.col === 1) ||
            b.push({ row: 0, col: 1 }),
          v.has("1,0") ||
            b.some((k) => k.row === 1 && k.col === 0) ||
            b.push({ row: 1, col: 0 }),
          b.sort((N, k) => (N.row === k.row ? N.col - k.col : N.row - k.row))
        );
      },
      D = (v) => {
        h(v);
      },
      T = (v) => {
        j(v), h({ row: v, col: S });
      },
      _ = (v) => {
        C(v), h({ row: p, col: v });
      },
      P = g && !u().has(`${g.row},${g.col}`) && g.row >= 0 && g.col >= 0,
      V = async () => {
        if (!(!g || !n || !P)) {
          d(!0);
          try {
            const v = `${g.row},${g.col}`,
              b = await De.addMedMapSection(n.GUID, v);
            b.Code === 200
              ? (a("新增成功", "success"), t(), c(!1), await Q())
              : a(`新增失敗：${b.Result || "未知錯誤"}`, "error");
          } catch (v) {
            console.error("Add parent container failed:", v),
              a("新增失敗：網路錯誤", "error");
          } finally {
            d(!1);
          }
        }
      },
      Q = async () => {
        if (!s) {
          console.warn("⚠️ 沒有選中的部門類型，無法重新獲取資料");
          return;
        }
        console.log("🔄 重新獲取藥品地圖資料，部門類型:", s), l(!0);
        try {
          const v = await De.getMedMapByDepartment(s);
          if (v.Code === 200 && v.Data) {
            console.log("📡 API 回傳成功，開始轉換資料");
            const b = ut.convertMedMapApiToFakeData(v.Data);
            if (!ut.validateConvertedData(b)) {
              console.error("❌ 轉換後的資料驗證失敗"),
                a("資料更新失敗：資料格式錯誤", "error");
              return;
            }
            o(b), console.log("✅ 藥品地圖資料已更新");
          } else
            console.error("❌ API 回傳錯誤:", v),
              a("資料更新失敗：API 錯誤", "error");
        } catch (v) {
          console.error("💥 重新獲取藥品地圖資料失敗:", v),
            a("資料更新失敗：網路錯誤", "error");
        } finally {
          l(!1);
        }
      },
      K = () => {
        t();
      },
      pe = () => {
        const v = u(),
          b = m(),
          L = [...v]
            .map((X) => {
              const [be, fe] = X.split(",").map(Number);
              return { row: be, col: fe };
            })
            .concat(b);
        L.length === 0 && L.push({ row: 0, col: 0 });
        const w = Math.max(...L.map((X) => X.row)),
          N = Math.max(...L.map((X) => X.col)),
          k = Math.min(...L.map((X) => X.row)),
          M = Math.min(...L.map((X) => X.col)),
          J = w - k + 1,
          z = N - M + 1;
        return r.jsxs("div", {
          className: "space-y-2",
          children: [
            r.jsx("h3", {
              className: "text-lg font-medium text-gray-900",
              children: "座標選擇",
            }),
            r.jsx("div", {
              className: "border border-gray-300 rounded-lg p-4 bg-gray-50",
              children: r.jsx("div", {
                className: "grid gap-2",
                style: { gridTemplateColumns: `repeat(${z}, 1fr)` },
                children: Array.from({ length: J * z }, (X, be) => {
                  const fe = Math.floor(be / z) + k,
                    U = (be % z) + M,
                    xe = `${fe},${U}`,
                    F = v.has(xe),
                    ve = b.some((I) => I.row === fe && I.col === U),
                    me =
                      (g == null ? void 0 : g.row) === fe &&
                      (g == null ? void 0 : g.col) === U;
                  return r.jsx(
                    "button",
                    {
                      onClick: () => ve && D({ row: fe, col: U }),
                      disabled: F || !ve,
                      className: `
                    w-16 h-16 border-2 rounded-lg transition-all duration-200 flex items-center justify-center text-sm font-medium
                    ${
                      F
                        ? "bg-red-100 border-red-300 text-red-600 cursor-not-allowed"
                        : me
                        ? "bg-blue-500 border-blue-600 text-white shadow-lg"
                        : ve
                        ? "bg-green-100 border-green-300 text-green-700 hover:bg-green-200 hover:border-green-400 cursor-pointer"
                        : "bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed"
                    }
                  `,
                      title: F ? "已占用" : ve ? "可選擇" : "不可用",
                      children: F ? "占用" : `${fe},${U}`,
                    },
                    xe
                  );
                }),
              }),
            }),
          ],
        });
      };
    return !e || !n
      ? null
      : r.jsxs("div", {
          className: "fixed inset-0 z-50 flex items-center justify-center",
          children: [
            r.jsx("div", {
              className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
              onClick: K,
            }),
            r.jsxs("div", {
              className:
                "relative flex flex-col bg-white rounded-xl shadow-2xl border border-gray-200",
              style: { width: "90vw", height: "90vh", maxWidth: "800px" },
              onClick: (v) => v.stopPropagation(),
              children: [
                r.jsxs("div", {
                  className:
                    "flex items-center justify-between px-4 py-2 border-b border-gray-200",
                  children: [
                    r.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        r.jsx(bt, { className: "w-6 h-6 text-green-600" }),
                        r.jsx("h2", {
                          className: "text-xl font-semibold text-gray-900",
                          children: "新增櫃體",
                        }),
                      ],
                    }),
                    r.jsx("button", {
                      onClick: K,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: r.jsx(Fe, { className: "w-6 h-6" }),
                    }),
                  ],
                }),
                r.jsx("div", {
                  className: "flex-1 px-6 py-4 overflow-y-auto",
                  children: r.jsxs("div", {
                    className: "space-y-6",
                    children: [
                      pe(),
                      r.jsxs("div", {
                        className: "space-y-2",
                        children: [
                          r.jsx("h3", {
                            className: "text-lg font-medium text-gray-900",
                            children: "手動輸入座標",
                          }),
                          r.jsxs("div", {
                            className: "flex items-center space-x-4",
                            children: [
                              r.jsxs("div", {
                                className: "flex items-center space-x-2",
                                children: [
                                  r.jsx("label", {
                                    className:
                                      "text-sm font-medium text-gray-700",
                                    children: "行 (Row):",
                                  }),
                                  r.jsx("input", {
                                    type: "number",
                                    min: "0",
                                    value: p,
                                    onChange: (v) =>
                                      T(parseInt(v.target.value) || 0),
                                    className:
                                      "w-20 px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors",
                                  }),
                                ],
                              }),
                              r.jsxs("div", {
                                className: "flex items-center space-x-2",
                                children: [
                                  r.jsx("label", {
                                    className:
                                      "text-sm font-medium text-gray-700",
                                    children: "列 (Column):",
                                  }),
                                  r.jsx("input", {
                                    type: "number",
                                    min: "0",
                                    value: S,
                                    onChange: (v) =>
                                      _(parseInt(v.target.value) || 0),
                                    className:
                                      "w-20 px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          g &&
                            r.jsx("div", {
                              className: `text-sm p-2 rounded ${
                                P
                                  ? "bg-green-50 text-green-700 border border-green-200"
                                  : "bg-red-50 text-red-700 border border-red-200"
                              }`,
                              children: P
                                ? `已選擇位置：${g.row},${g.col}`
                                : `位置 ${g.row},${g.col} 已被占用或無效`,
                            }),
                        ],
                      }),
                      r.jsxs("div", {
                        className:
                          "bg-gray-50 border border-gray-200 rounded-lg p-4",
                        children: [
                          r.jsx("h3", {
                            className: "text-lg font-medium text-gray-900 mb-2",
                            children: "部門資訊",
                          }),
                          r.jsxs("div", {
                            className: "text-sm text-gray-600",
                            children: [
                              r.jsxs("div", {
                                children: [
                                  "部門名稱：",
                                  (n == null ? void 0 : n.name) || "未知",
                                ],
                              }),
                              r.jsxs("div", {
                                children: [
                                  "部門類型：",
                                  (n == null ? void 0 : n.type) || "未知",
                                ],
                              }),
                              r.jsxs("div", {
                                children: [
                                  "現有父容器數量：",
                                  ((ye = n == null ? void 0 : n.contents) ==
                                  null
                                    ? void 0
                                    : ye.filter(
                                        (v) => v.type === "parent_container"
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
                r.jsxs("div", {
                  className:
                    "flex items-center justify-end space-x-3 px-6 py-4 border-t border-gray-200",
                  children: [
                    r.jsx("button", {
                      onClick: K,
                      disabled: R,
                      className:
                        "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                      children: x("button.cancel"),
                    }),
                    r.jsxs("button", {
                      onClick: V,
                      disabled: !P || R,
                      className:
                        "px-6 py-2 text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center space-x-2",
                      children: [
                        R && r.jsx(Ct, { className: "w-4 h-4 animate-spin" }),
                        r.jsx("span", { children: R ? "新增中..." : "新增" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
  },
  Cc = [
    {
      value: "dispensing_shelves",
      label: "藥盒層架",
      icon: r.jsx(uh, { className: "w-5 h-5" }),
      isShelf: !0,
    },
    {
      value: "store_shelves",
      label: "藥品層架",
      icon: r.jsx(rh, { className: "w-5 h-5" }),
      isShelf: !0,
    },
    {
      value: "list_draw",
      label: "清單抽屜",
      icon: r.jsx(ga, { className: "w-5 h-5" }),
      isShelf: !1,
    },
    {
      value: "grid_draw",
      label: "格線抽屜",
      icon: r.jsx(Hu, { className: "w-5 h-5" }),
      isShelf: !1,
    },
  ],
  Th = () => {
    var J;
    const {
        addShelfDrawContainerModalOpen: e,
        closeAddShelfDrawContainerModal: t,
        selectedSubContainerForAdd: n,
        selectedDepartmentType: s,
        setApiDepartmentData: o,
        setIsLoadingMedMap: l,
        showNotification: a,
        triggerRefresh: i,
        setSidebarOpen: c,
      } = Xe(),
      { t: x } = xt(),
      [g, h] = f.useState("dispensing_shelves"),
      [p, j] = f.useState("1"),
      [S, C] = f.useState("1"),
      [R, d] = f.useState(""),
      [u, m] = f.useState(null),
      [D, T] = f.useState(0),
      [_, P] = f.useState(0),
      [V, Q] = f.useState(!1);
    f.useEffect(() => {
      e &&
        (h("dispensing_shelves"),
        j("1"),
        C("1"),
        d(""),
        m(null),
        T(0),
        P(0),
        Q(!1));
    }, [e]),
      f.useEffect(() => {
        u && (T(u.row), P(u.col));
      }, [u]);
    const K = () => {
        const z = new Set();
        return (
          n != null &&
            n.contents &&
            n.contents.forEach((X) => {
              X.gird_position && z.add(X.gird_position);
            }),
          z
        );
      },
      pe = () => {
        const z = K(),
          X = [];
        if (z.size === 0) return X.push({ row: 0, col: 0 }), X;
        const be = [];
        z.forEach((U) => {
          const [xe, F] = U.split(",").map(Number);
          be.push({ row: xe, col: F });
        });
        const fe = new Set();
        return (
          be.forEach(({ row: U, col: xe }) => {
            fe.add(`${U},${xe + 1}`),
              fe.add(`${U + 1},${xe}`),
              xe > 0 && fe.add(`${U},${xe - 1}`),
              U > 0 && fe.add(`${U - 1},${xe}`);
          }),
          fe.forEach((U) => {
            if (!z.has(U)) {
              const [xe, F] = U.split(",").map(Number);
              xe >= 0 && F >= 0 && X.push({ row: xe, col: F });
            }
          }),
          z.has("0,1") ||
            X.some((xe) => xe.row === 0 && xe.col === 1) ||
            X.push({ row: 0, col: 1 }),
          z.has("1,0") ||
            X.some((xe) => xe.row === 1 && xe.col === 0) ||
            X.push({ row: 1, col: 0 }),
          X.sort((U, xe) =>
            U.row === xe.row ? U.col - xe.col : U.row - xe.row
          )
        );
      },
      ye = (z) => {
        m(z);
      },
      v = (z) => {
        T(z), m({ row: z, col: _ });
      },
      b = (z) => {
        P(z), m({ row: D, col: z });
      },
      L = u && !K().has(`${u.row},${u.col}`) && u.row >= 0 && u.col >= 0,
      w = async () => {
        if (!(!u || !n || !L)) {
          Q(!0);
          try {
            const z = `${u.row},${u.col}`,
              X = Cc.find((fe) => fe.value === g);
            let be;
            X != null && X.isShelf
              ? (be = await De.addMedMapShelf({
                  Master_GUID: n.GUID,
                  position: z,
                  width: p,
                  height: S,
                  ip_light: R,
                  type: g,
                }))
              : (be = await De.addMedMapDrawer({
                  Master_GUID: n.GUID,
                  position: z,
                  width: p,
                  height: S,
                  ip_drawer: R,
                  type: g,
                })),
              be.Code === 200
                ? (a("新增成功", "success"), t(), c(!1), await N())
                : a(`新增失敗：${be.Result || "未知錯誤"}`, "error");
          } catch (z) {
            console.error("Add container failed:", z),
              a("新增失敗：網路錯誤", "error");
          } finally {
            Q(!1);
          }
        }
      },
      N = async () => {
        if (!s) {
          console.warn("⚠️ 沒有選中的部門類型，無法重新獲取資料");
          return;
        }
        console.log("🔄 重新獲取藥品地圖資料，部門類型:", s), l(!0);
        try {
          const z = await De.getMedMapByDepartment(s);
          if (z.Code === 200 && z.Data) {
            console.log("📡 API 回傳成功，開始轉換資料");
            const X = ut.convertMedMapApiToFakeData(z.Data);
            if (!ut.validateConvertedData(X)) {
              console.error("❌ 轉換後的資料驗證失敗"),
                a("資料更新失敗：資料格式錯誤", "error");
              return;
            }
            o(X), console.log("✅ 藥品地圖資料已更新");
          } else
            console.error("❌ API 回傳錯誤:", z),
              a("資料更新失敗：API 錯誤", "error");
        } catch (z) {
          console.error("💥 重新獲取藥品地圖資料失敗:", z),
            a("資料更新失敗：網路錯誤", "error");
        } finally {
          l(!1);
        }
      },
      k = () => {
        t();
      },
      M = () => {
        const z = K(),
          X = pe(),
          be = [...z]
            .map((I) => {
              const [ue, G] = I.split(",").map(Number);
              return { row: ue, col: G };
            })
            .concat(X);
        be.length === 0 && be.push({ row: 0, col: 0 });
        const fe = Math.max(...be.map((I) => I.row)),
          U = Math.max(...be.map((I) => I.col)),
          xe = Math.min(...be.map((I) => I.row)),
          F = Math.min(...be.map((I) => I.col)),
          ve = fe - xe + 1,
          me = U - F + 1;
        return r.jsxs("div", {
          className: "space-y-2",
          children: [
            r.jsx("h3", {
              className: "text-lg font-medium text-gray-900",
              children: "座標選擇",
            }),
            r.jsx("div", {
              className: "border border-gray-300 rounded-lg p-4 bg-gray-50",
              children: r.jsx("div", {
                className: "grid gap-2",
                style: { gridTemplateColumns: `repeat(${me}, 1fr)` },
                children: Array.from({ length: ve * me }, (I, ue) => {
                  const G = Math.floor(ue / me) + xe,
                    E = (ue % me) + F,
                    se = `${G},${E}`,
                    le = z.has(se),
                    B = X.some((ie) => ie.row === G && ie.col === E),
                    Z =
                      (u == null ? void 0 : u.row) === G &&
                      (u == null ? void 0 : u.col) === E;
                  return r.jsx(
                    "button",
                    {
                      onClick: () => B && ye({ row: G, col: E }),
                      disabled: le || !B,
                      className: `
                    w-16 h-16 border-2 rounded-lg transition-all duration-200 flex items-center justify-center text-sm font-medium
                    ${
                      le
                        ? "bg-red-100 border-red-300 text-red-600 cursor-not-allowed"
                        : Z
                        ? "bg-blue-500 border-blue-600 text-white shadow-lg"
                        : B
                        ? "bg-green-100 border-green-300 text-green-700 hover:bg-green-200 hover:border-green-400 cursor-pointer"
                        : "bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed"
                    }
                  `,
                      title: le ? "已占用" : B ? "可選擇" : "不可用",
                      children: le ? "占用" : `${G},${E}`,
                    },
                    se
                  );
                }),
              }),
            }),
          ],
        });
      };
    return !e || !n
      ? null
      : r.jsxs("div", {
          className: "fixed inset-0 z-50 flex items-center justify-center",
          children: [
            r.jsx("div", {
              className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
              onClick: k,
            }),
            r.jsxs("div", {
              className:
                "relative flex flex-col bg-white rounded-xl shadow-2xl border border-gray-200",
              style: { width: "90vw", height: "90vh", maxWidth: "1000px" },
              onClick: (z) => z.stopPropagation(),
              children: [
                r.jsxs("div", {
                  className:
                    "flex items-center justify-between px-4 py-2 border-b border-gray-200",
                  children: [
                    r.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        r.jsx(bt, { className: "w-6 h-6 text-green-600" }),
                        r.jsx("h2", {
                          className: "text-xl font-semibold text-gray-900",
                          children: "新增層架/抽屜",
                        }),
                      ],
                    }),
                    r.jsx("button", {
                      onClick: k,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: r.jsx(Fe, { className: "w-6 h-6" }),
                    }),
                  ],
                }),
                r.jsx("div", {
                  className: "flex-1 px-6 py-4 overflow-y-auto",
                  children: r.jsxs("div", {
                    className: "space-y-6",
                    children: [
                      r.jsxs("div", {
                        className: "space-y-3",
                        children: [
                          r.jsx("h3", {
                            className: "text-lg font-medium text-gray-900",
                            children: "容器類型",
                          }),
                          r.jsx("div", {
                            className: "grid grid-cols-2 gap-3",
                            children: Cc.map((z) =>
                              r.jsxs(
                                "label",
                                {
                                  className: `flex items-center space-x-3 p-4 border-2 rounded-lg cursor-pointer transition-all ${
                                    g === z.value
                                      ? "border-blue-500 bg-blue-50"
                                      : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                                  }`,
                                  children: [
                                    r.jsx("input", {
                                      type: "radio",
                                      name: "containerType",
                                      value: z.value,
                                      checked: g === z.value,
                                      onChange: (X) => h(X.target.value),
                                      className:
                                        "w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 hidden",
                                    }),
                                    r.jsxs("div", {
                                      className: "flex items-center space-x-3",
                                      children: [
                                        z.icon,
                                        r.jsx("span", {
                                          className:
                                            "font-medium text-gray-900",
                                          children: z.label,
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                z.value
                              )
                            ),
                          }),
                        ],
                      }),
                      r.jsxs("div", {
                        className: "grid grid-cols-2 gap-4",
                        children: [
                          r.jsxs("div", {
                            className: "space-y-2",
                            children: [
                              r.jsx("label", {
                                className: "text-sm font-medium text-gray-700",
                                children: "寬度",
                              }),
                              r.jsx("input", {
                                type: "number",
                                min: "1",
                                value: p,
                                onChange: (z) => j(z.target.value),
                                className:
                                  "w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors",
                              }),
                            ],
                          }),
                          r.jsxs("div", {
                            className: "space-y-2",
                            children: [
                              r.jsx("label", {
                                className: "text-sm font-medium text-gray-700",
                                children: "高度",
                              }),
                              r.jsx("input", {
                                type: "number",
                                min: "1",
                                value: S,
                                onChange: (z) => C(z.target.value),
                                className:
                                  "w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors",
                              }),
                            ],
                          }),
                        ],
                      }),
                      r.jsxs("div", {
                        className: "space-y-2",
                        children: [
                          r.jsx("label", {
                            className: "text-sm font-medium text-gray-700",
                            children: "IP 位址",
                          }),
                          r.jsx("input", {
                            type: "text",
                            value: R,
                            onChange: (z) => d(z.target.value),
                            placeholder: "請輸入 IP 位址",
                            className:
                              "w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors",
                          }),
                        ],
                      }),
                      M(),
                      r.jsxs("div", {
                        className: "space-y-2",
                        children: [
                          r.jsx("h3", {
                            className: "text-lg font-medium text-gray-900",
                            children: "手動輸入座標",
                          }),
                          r.jsxs("div", {
                            className: "flex items-center space-x-4",
                            children: [
                              r.jsxs("div", {
                                className: "flex items-center space-x-2",
                                children: [
                                  r.jsx("label", {
                                    className:
                                      "text-sm font-medium text-gray-700",
                                    children: "行 (Row):",
                                  }),
                                  r.jsx("input", {
                                    type: "number",
                                    min: "0",
                                    value: D,
                                    onChange: (z) =>
                                      v(parseInt(z.target.value) || 0),
                                    className:
                                      "w-20 px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors",
                                  }),
                                ],
                              }),
                              r.jsxs("div", {
                                className: "flex items-center space-x-2",
                                children: [
                                  r.jsx("label", {
                                    className:
                                      "text-sm font-medium text-gray-700",
                                    children: "列 (Column):",
                                  }),
                                  r.jsx("input", {
                                    type: "number",
                                    min: "0",
                                    value: _,
                                    onChange: (z) =>
                                      b(parseInt(z.target.value) || 0),
                                    className:
                                      "w-20 px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          u &&
                            r.jsx("div", {
                              className: `text-sm p-2 rounded ${
                                L
                                  ? "bg-green-50 text-green-700 border border-green-200"
                                  : "bg-red-50 text-red-700 border border-red-200"
                              }`,
                              children: L
                                ? `已選擇位置：${u.row},${u.col}`
                                : `位置 ${u.row},${u.col} 已被占用或無效`,
                            }),
                        ],
                      }),
                      r.jsxs("div", {
                        className:
                          "bg-gray-50 border border-gray-200 rounded-lg p-4",
                        children: [
                          r.jsx("h3", {
                            className: "text-lg font-medium text-gray-900 mb-2",
                            children: "子容器資訊",
                          }),
                          r.jsxs("div", {
                            className: "text-sm text-gray-600",
                            children: [
                              r.jsxs("div", {
                                children: [
                                  "容器名稱：",
                                  (n == null ? void 0 : n.name) || "未知",
                                ],
                              }),
                              r.jsxs("div", {
                                children: [
                                  "容器類型：",
                                  (n == null ? void 0 : n.type) || "未知",
                                ],
                              }),
                              r.jsxs("div", {
                                children: [
                                  "現有內容數量：",
                                  ((J = n == null ? void 0 : n.contents) == null
                                    ? void 0
                                    : J.length) || 0,
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                r.jsxs("div", {
                  className:
                    "flex items-center justify-end space-x-3 px-6 py-4 border-t border-gray-200",
                  children: [
                    r.jsx("button", {
                      onClick: k,
                      disabled: V,
                      className:
                        "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                      children: x("button.cancel"),
                    }),
                    r.jsxs("button", {
                      onClick: w,
                      disabled: !L || V,
                      className:
                        "px-6 py-2 text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center space-x-2",
                      children: [
                        V && r.jsx(Ct, { className: "w-4 h-4 animate-spin" }),
                        r.jsx("span", { children: V ? "新增中..." : "新增" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
  },
  Rh = () => {
    var ye;
    const {
        addSubContainerModalOpen: e,
        closeAddSubContainerModal: t,
        selectedParentContainerForAdd: n,
        selectedDepartmentType: s,
        setApiDepartmentData: o,
        setIsLoadingMedMap: l,
        showNotification: a,
        triggerRefresh: i,
        setSidebarOpen: c,
      } = Xe(),
      { t: x } = xt(),
      [g, h] = f.useState(null),
      [p, j] = f.useState(0),
      [S, C] = f.useState(0),
      [R, d] = f.useState(!1);
    f.useEffect(() => {
      e && (h(null), j(0), C(0), d(!1));
    }, [e]),
      f.useEffect(() => {
        g && (j(g.row), C(g.col));
      }, [g]);
    const u = () => {
        const v = new Set();
        return (
          n != null &&
            n.contents &&
            n.contents.forEach((b) => {
              b.type === "sub_container" &&
                b.gird_position &&
                v.add(b.gird_position);
            }),
          v
        );
      },
      m = () => {
        const v = u(),
          b = [];
        if (v.size === 0) return b.push({ row: 0, col: 0 }), b;
        const L = [];
        v.forEach((N) => {
          const [k, M] = N.split(",").map(Number);
          L.push({ row: k, col: M });
        });
        const w = new Set();
        return (
          L.forEach(({ row: N, col: k }) => {
            w.add(`${N},${k + 1}`),
              w.add(`${N + 1},${k}`),
              k > 0 && w.add(`${N},${k - 1}`),
              N > 0 && w.add(`${N - 1},${k}`);
          }),
          w.forEach((N) => {
            if (!v.has(N)) {
              const [k, M] = N.split(",").map(Number);
              k >= 0 && M >= 0 && b.push({ row: k, col: M });
            }
          }),
          v.has("0,1") ||
            b.some((k) => k.row === 0 && k.col === 1) ||
            b.push({ row: 0, col: 1 }),
          v.has("1,0") ||
            b.some((k) => k.row === 1 && k.col === 0) ||
            b.push({ row: 1, col: 0 }),
          b.sort((N, k) => (N.row === k.row ? N.col - k.col : N.row - k.row))
        );
      },
      D = (v) => {
        h(v);
      },
      T = (v) => {
        j(v), h({ row: v, col: S });
      },
      _ = (v) => {
        C(v), h({ row: p, col: v });
      },
      P = g && !u().has(`${g.row},${g.col}`) && g.row >= 0 && g.col >= 0,
      V = async () => {
        if (!(!g || !n || !P)) {
          d(!0);
          try {
            const v = `${g.row},${g.col}`,
              b = await De.addSubSection(n.GUID, v);
            b.Code === 200
              ? (a("新增成功", "success"), t(), c(!1), await Q())
              : a(`新增失敗：${b.Result || "未知錯誤"}`, "error");
          } catch (v) {
            console.error("Add sub container failed:", v),
              a("新增失敗：網路錯誤", "error");
          } finally {
            d(!1);
          }
        }
      },
      Q = async () => {
        if (!s) {
          console.warn("⚠️ 沒有選中的部門類型，無法重新獲取資料");
          return;
        }
        console.log("🔄 重新獲取藥品地圖資料，部門類型:", s), l(!0);
        try {
          const v = await De.getMedMapByDepartment(s);
          if (v.Code === 200 && v.Data) {
            console.log("📡 API 回傳成功，開始轉換資料");
            const b = ut.convertMedMapApiToFakeData(v.Data);
            if (!ut.validateConvertedData(b)) {
              console.error("❌ 轉換後的資料驗證失敗"),
                a("資料更新失敗：資料格式錯誤", "error");
              return;
            }
            o(b), console.log("✅ 藥品地圖資料已更新");
          } else
            console.error("❌ API 回傳錯誤:", v),
              a("資料更新失敗：API 錯誤", "error");
        } catch (v) {
          console.error("💥 重新獲取藥品地圖資料失敗:", v),
            a("資料更新失敗：網路錯誤", "error");
        } finally {
          l(!1);
        }
      },
      K = () => {
        t();
      },
      pe = () => {
        const v = u(),
          b = m(),
          L = [...v]
            .map((X) => {
              const [be, fe] = X.split(",").map(Number);
              return { row: be, col: fe };
            })
            .concat(b);
        L.length === 0 && L.push({ row: 0, col: 0 });
        const w = Math.max(...L.map((X) => X.row)),
          N = Math.max(...L.map((X) => X.col)),
          k = Math.min(...L.map((X) => X.row)),
          M = Math.min(...L.map((X) => X.col)),
          J = w - k + 1,
          z = N - M + 1;
        return r.jsxs("div", {
          className: "space-y-2",
          children: [
            r.jsx("h3", {
              className: "text-lg font-medium text-gray-900",
              children: "座標選擇",
            }),
            r.jsx("div", {
              className: "border border-gray-300 rounded-lg p-4 bg-gray-50",
              children: r.jsx("div", {
                className: "grid gap-2",
                style: { gridTemplateColumns: `repeat(${z}, 1fr)` },
                children: Array.from({ length: J * z }, (X, be) => {
                  const fe = Math.floor(be / z) + k,
                    U = (be % z) + M,
                    xe = `${fe},${U}`,
                    F = v.has(xe),
                    ve = b.some((I) => I.row === fe && I.col === U),
                    me =
                      (g == null ? void 0 : g.row) === fe &&
                      (g == null ? void 0 : g.col) === U;
                  return r.jsx(
                    "button",
                    {
                      onClick: () => ve && D({ row: fe, col: U }),
                      disabled: F || !ve,
                      className: `
                    w-16 h-16 border-2 rounded-lg transition-all duration-200 flex items-center justify-center text-sm font-medium
                    ${
                      F
                        ? "bg-red-100 border-red-300 text-red-600 cursor-not-allowed"
                        : me
                        ? "bg-blue-500 border-blue-600 text-white shadow-lg"
                        : ve
                        ? "bg-green-100 border-green-300 text-green-700 hover:bg-green-200 hover:border-green-400 cursor-pointer"
                        : "bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed"
                    }
                  `,
                      title: F ? "已占用" : ve ? "可選擇" : "不可用",
                      children: F ? "占用" : `${fe},${U}`,
                    },
                    xe
                  );
                }),
              }),
            }),
          ],
        });
      };
    return !e || !n
      ? null
      : r.jsxs("div", {
          className: "fixed inset-0 z-50 flex items-center justify-center",
          children: [
            r.jsx("div", {
              className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
              onClick: K,
            }),
            r.jsxs("div", {
              className:
                "relative flex flex-col bg-white rounded-xl shadow-2xl border border-gray-200",
              style: { width: "90vw", height: "90vh", maxWidth: "800px" },
              onClick: (v) => v.stopPropagation(),
              children: [
                r.jsxs("div", {
                  className:
                    "flex items-center justify-between px-4 py-2 border-b border-gray-200",
                  children: [
                    r.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        r.jsx(bt, { className: "w-6 h-6 text-green-600" }),
                        r.jsx("h2", {
                          className: "text-xl font-semibold text-gray-900",
                          children: "新增虛擬容器",
                        }),
                      ],
                    }),
                    r.jsx("button", {
                      onClick: K,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: r.jsx(Fe, { className: "w-6 h-6" }),
                    }),
                  ],
                }),
                r.jsx("div", {
                  className: "flex-1 px-6 py-4 overflow-y-auto",
                  children: r.jsxs("div", {
                    className: "space-y-6",
                    children: [
                      pe(),
                      r.jsxs("div", {
                        className: "space-y-2",
                        children: [
                          r.jsx("h3", {
                            className: "text-lg font-medium text-gray-900",
                            children: "手動輸入座標",
                          }),
                          r.jsxs("div", {
                            className: "flex items-center space-x-4",
                            children: [
                              r.jsxs("div", {
                                className: "flex items-center space-x-2",
                                children: [
                                  r.jsx("label", {
                                    className:
                                      "text-sm font-medium text-gray-700",
                                    children: "行 (Row):",
                                  }),
                                  r.jsx("input", {
                                    type: "number",
                                    min: "0",
                                    value: p,
                                    onChange: (v) =>
                                      T(parseInt(v.target.value) || 0),
                                    className:
                                      "w-20 px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors",
                                  }),
                                ],
                              }),
                              r.jsxs("div", {
                                className: "flex items-center space-x-2",
                                children: [
                                  r.jsx("label", {
                                    className:
                                      "text-sm font-medium text-gray-700",
                                    children: "列 (Column):",
                                  }),
                                  r.jsx("input", {
                                    type: "number",
                                    min: "0",
                                    value: S,
                                    onChange: (v) =>
                                      _(parseInt(v.target.value) || 0),
                                    className:
                                      "w-20 px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          g &&
                            r.jsx("div", {
                              className: `text-sm p-2 rounded ${
                                P
                                  ? "bg-green-50 text-green-700 border border-green-200"
                                  : "bg-red-50 text-red-700 border border-red-200"
                              }`,
                              children: P
                                ? `已選擇位置：${g.row},${g.col}`
                                : `位置 ${g.row},${g.col} 已被占用或無效`,
                            }),
                        ],
                      }),
                      r.jsxs("div", {
                        className:
                          "bg-gray-50 border border-gray-200 rounded-lg p-4",
                        children: [
                          r.jsx("h3", {
                            className: "text-lg font-medium text-gray-900 mb-2",
                            children: "父容器資訊",
                          }),
                          r.jsxs("div", {
                            className: "text-sm text-gray-600",
                            children: [
                              r.jsxs("div", {
                                children: [
                                  "容器名稱：",
                                  (n == null ? void 0 : n.name) || "未知",
                                ],
                              }),
                              r.jsxs("div", {
                                children: [
                                  "容器類型：",
                                  (n == null ? void 0 : n.type) || "未知",
                                ],
                              }),
                              r.jsxs("div", {
                                children: [
                                  "現有子容器數量：",
                                  ((ye = n == null ? void 0 : n.contents) ==
                                  null
                                    ? void 0
                                    : ye.filter(
                                        (v) => v.type === "sub_container"
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
                r.jsxs("div", {
                  className:
                    "flex items-center justify-end space-x-3 px-6 py-4 border-t border-gray-200",
                  children: [
                    r.jsx("button", {
                      onClick: K,
                      disabled: R,
                      className:
                        "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                      children: x("button.cancel"),
                    }),
                    r.jsxs("button", {
                      onClick: V,
                      disabled: !P || R,
                      className:
                        "px-6 py-2 text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center space-x-2",
                      children: [
                        R && r.jsx(Ct, { className: "w-4 h-4 animate-spin" }),
                        r.jsx("span", { children: R ? "新增中..." : "新增" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
  },
  Ah = ({ isOpen: e, onClose: t, storeShelf: n }) => {
    const {
        showNotification: s,
        medicineList: o,
        isLoadingMedicines: l,
        addStockToShelf: a,
        selectedStockItemForEdit: i,
        storeItemModalMode: c,
        updateStockInShelf: x,
      } = Xe(),
      [g, h] = f.useState(""),
      [p, j] = f.useState(""),
      [S, C] = f.useState(""),
      [R, d] = f.useState(""),
      [u, m] = f.useState([]),
      [D, T] = f.useState([]),
      [_, P] = f.useState(""),
      [V, Q] = f.useState(""),
      [K, pe] = f.useState(""),
      [ye, v] = f.useState(null),
      [b, L] = f.useState([]),
      [w, N] = f.useState(""),
      [k, M] = f.useState(!1),
      J = f.useRef(null);
    f.useEffect(() => {
      if (e && c === "edit" && i) {
        h(i.code || ""), j(i.name || ""), C(""), d(i.material_no || "");
        const I = i.lot || [],
          ue = i.expiry_date || [],
          G = i.qty || [],
          E = [];
        if (I.length > 0 || ue.length > 0 || G.length > 0) {
          const se = Math.max(I.length, ue.length, G.length),
            le = [];
          for (let B = 0; B < se; B++) {
            const Z = ue[B] || "";
            let ie = "";
            Z && (ie = Z.split("T")[0]),
              (ie = ie.replace(/\//g, "-")),
              le.push({
                id: `batch_${Date.now()}_${B}`,
                lot: I[B] || "",
                expiryDate: ie,
                qty: String(G[B] || ""),
              }),
              ie && E.push(ie);
          }
          m(le), T(E);
        } else m([]), T([]);
        P(i.location || ""), Q(i.led_index || ""), pe(i.ip || "");
      } else if (e && c === "add")
        if (
          (h(""),
          j(""),
          C(""),
          d(""),
          m([]),
          T([]),
          Q(""),
          pe(""),
          n && n.medMapStock && n.medMapStock.length > 0)
        ) {
          const I = n.medMapStock.map((G) => Number(G.location));
          let ue = 0;
          for (; I.includes(ue); ) ue++;
          P(String(ue));
        } else P("0");
    }, [e, c, i, n]),
      f.useEffect(() => {
        const I = (ue) => {
          J.current && !J.current.contains(ue.target) && v(null);
        };
        return (
          document.addEventListener("mousedown", I),
          () => {
            document.removeEventListener("mousedown", I);
          }
        );
      }, []);
    const z = (I, ue) => {
        if (!ue.trim()) {
          L([]);
          return;
        }
        const G = ue.toLowerCase(),
          E = o.filter((se) => {
            var le, B, Z, ie;
            switch (I) {
              case "code":
                return (le = se.CODE) == null
                  ? void 0
                  : le.toLowerCase().includes(G);
              case "name":
                return (B = se.NAME) == null
                  ? void 0
                  : B.toLowerCase().includes(G);
              case "chineseName":
                return (Z = se.CHT_NAME) == null
                  ? void 0
                  : Z.toLowerCase().includes(G);
              case "skdiacode":
                return (ie = se.SKDIACODE) == null
                  ? void 0
                  : ie.toLowerCase().includes(G);
              default:
                return !1;
            }
          });
        L(E.slice(0, 50));
      },
      X = (I, ue) => {
        switch ((v(I), I)) {
          case "code":
            h(ue);
            break;
          case "name":
            j(ue);
            break;
          case "chineseName":
            C(ue);
            break;
          case "skdiacode":
            d(ue);
            break;
        }
        z(I, ue);
      },
      be = (I, ue) => {
        switch (ue) {
          case "code":
            h(I.CODE || ""),
              j(I.NAME || ""),
              C(I.CHT_NAME || ""),
              d(I.SKDIACODE || "");
            break;
          case "name":
            h(I.CODE || ""),
              j(I.NAME || ""),
              C(I.CHT_NAME || ""),
              d(I.SKDIACODE || "");
            break;
          case "chineseName":
            h(I.CODE || ""),
              j(I.NAME || ""),
              C(I.CHT_NAME || ""),
              d(I.SKDIACODE || "");
            break;
          case "skdiacode":
            h(I.CODE || ""),
              j(I.NAME || ""),
              C(I.CHT_NAME || ""),
              d(I.SKDIACODE || "");
            break;
        }
        N(I.GUID), v(null), L([]);
      },
      fe = () => {
        const I = {
          id: `batch_${Date.now()}`,
          lot: "",
          expiryDate: "",
          qty: "",
        };
        m([...u, I]);
      },
      U = (I) => {
        m(u.filter((ue) => ue.id !== I));
      },
      xe = (I, ue, G) => {
        m(u.map((E) => (E.id === I ? { ...E, [ue]: G } : E)));
      },
      F = async () => {
        var E;
        if (!g || !p) {
          s("請選擇藥品", "error");
          return;
        }
        if (!n || !n.GUID) {
          s("層架資訊錯誤", "error");
          return;
        }
        const I = [],
          ue = [],
          G = [];
        u.forEach((se) => {
          I.push(se.lot || "");
          let le = "";
          se.expiryDate && (le = `${se.expiryDate}`),
            ue.push(le),
            G.push(se.qty ? `${Number(se.qty)}` : "0");
        });
        try {
          if (c === "edit" && i) {
            const se = {
                GUID: i.GUID,
                code: g,
                device_type: "EPD290",
                expiry_date: ue,
                ip_light: K || "",
                led_index: V || "",
                location: _ || "",
                lot: I,
                material_no: R || "",
                name: p,
                qty: G,
                shelf_guid: n.GUID,
              },
              le = await De.updateStock([se]);
            if (le.Code === 200) {
              x(n.GUID, i.GUID, se), console.log("檢查有無貨物批次被刪除");
              const B = D.filter((Z) => !ue.includes(Z));
              if ((console.log(B), B.length > 0)) {
                console.log("🗑️ 檢測到被刪除的批次效期:", B);
                let Z = "";
                try {
                  i.Value &&
                    ((Z = JSON.parse(i.Value).GUID || ""),
                    console.log("📦 從 Value 欄位解析出的 GUID:", Z));
                } catch (ie) {
                  console.error("❌ 解析 Value 欄位失敗:", ie);
                }
                if (Z) {
                  for (const ie of B)
                    try {
                      console.log(`🗑️ 正在刪除批次，GUID: ${Z}, 效期: ${ie}`);
                      const A = await De.stockDeleteValidityPeriod(Z, ie);
                      A.Code === 200
                        ? console.log(`✅ 成功刪除批次效期: ${ie}`)
                        : console.warn(
                            `⚠️ 刪除批次失敗 (效期: ${ie}):`,
                            A.Result
                          );
                    } catch (A) {
                      console.error(`❌ 刪除批次時發生錯誤 (效期: ${ie}):`, A);
                    }
                  s(`更新貨物成功，已刪除 ${B.length} 個批次`, "success");
                } else
                  console.warn("⚠️ 無法取得 Value GUID，跳過批次刪除"),
                    s("更新貨物成功（但無法刪除批次）", "success");
              } else s("更新貨物成功", "success");
              me();
            } else s(le.Result || "更新貨物失敗", "error");
          } else {
            const se = {
                code: g,
                device_type: "EPD290",
                expiry_date: ue,
                ip_light: K || "",
                led_index: V || "",
                location: _ || "",
                lot: I,
                material_no: R || "",
                name: p,
                qty: G,
                shelf_guid: n.GUID,
              },
              le = await De.addStock([se]);
            le.Code === 200
              ? (a(n.GUID, {
                  GUID:
                    ((E = le.Data) == null ? void 0 : E.GUID) ||
                    `stock_${Date.now()}`,
                  ...se,
                }),
                s("新增貨物成功", "success"),
                me())
              : s(le.Result || "新增貨物失敗", "error");
          }
        } catch (se) {
          console.error("貨物操作錯誤:", se),
            s(
              c === "edit"
                ? "更新貨物失敗，請稍後再試"
                : "新增貨物失敗，請稍後再試",
              "error"
            );
        }
      },
      ve = (I, ue) => {
        console.log("📸 掃描成功，填入藥品資料:", ue),
          h(ue[0].CODE || ue[0].code || ""),
          j(ue[0].NAME || ue[0].name || ""),
          C(ue[0].CHT_NAME || ue[0].cht_name || ""),
          d(ue[0].SKDIACODE || ue[0].skdiacode || ue[0].material_no || ""),
          N(ue[0].GUID || ""),
          M(!1),
          s("已自動填入藥品資料", "success");
      },
      me = () => {
        h(""),
          j(""),
          C(""),
          d(""),
          m([]),
          T([]),
          P(""),
          Q(""),
          pe(""),
          N(""),
          L([]),
          v(null),
          t();
      };
    return e
      ? r.jsxs("div", {
          className:
            "fixed inset-0 bg-black/50 flex items-center justify-center z-50",
          children: [
            r.jsxs("div", {
              className:
                "bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto",
              children: [
                r.jsxs("div", {
                  className:
                    "sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between z-10",
                  children: [
                    r.jsx("h2", {
                      className: "text-xl font-bold text-gray-800",
                      children: c === "edit" ? "編輯貨物" : "新增貨物",
                    }),
                    r.jsx("button", {
                      onClick: me,
                      className:
                        "p-2 hover:bg-gray-100 rounded-full transition-colors",
                      children: r.jsx(Fe, { className: "w-5 h-5" }),
                    }),
                  ],
                }),
                r.jsx("div", {
                  className: "p-6 space-y-6",
                  children: l
                    ? r.jsxs("div", {
                        className: "text-center py-8",
                        children: [
                          r.jsx("div", {
                            className:
                              "inline-block animate-spin rounded-full h-8 w-8 border-4 border-blue-500 border-t-transparent",
                          }),
                          r.jsx("p", {
                            className: "mt-2 text-gray-600",
                            children: "載入藥品資料中...",
                          }),
                        ],
                      })
                    : o.length === 0
                    ? r.jsxs("div", {
                        className: "text-center py-8",
                        children: [
                          r.jsx("p", {
                            className: "text-gray-600",
                            children: "藥品資料尚未載入，請稍後再試",
                          }),
                          r.jsx("p", {
                            className: "text-sm text-gray-500 mt-2",
                            children: "或檢查網路連線",
                          }),
                        ],
                      })
                    : r.jsxs(r.Fragment, {
                        children: [
                          r.jsxs("div", {
                            className: "space-y-4",
                            children: [
                              r.jsxs("div", {
                                className:
                                  "flex w-full border-b items-center pb-1",
                                children: [
                                  r.jsx("h3", {
                                    className:
                                      "text-lg font-semibold text-gray-700 mr-6",
                                    children: "藥品資訊",
                                  }),
                                  r.jsx("button", {
                                    onClick: () => M(!0),
                                    className:
                                      "hover:bg-gray-100 rounded-lg transition-colors p-2",
                                    title: "掃描條碼",
                                    children: r.jsx(Tr, {
                                      className: "w-7 h-7 text-blue-600",
                                    }),
                                  }),
                                ],
                              }),
                              r.jsxs("div", {
                                className: "grid grid-cols-2 gap-4",
                                children: [
                                  r.jsxs("div", {
                                    className: "relative",
                                    ref: ye === "code" ? J : null,
                                    children: [
                                      r.jsx("label", {
                                        className:
                                          "block text-sm font-medium text-gray-700 mb-1",
                                        children: "藥碼",
                                      }),
                                      r.jsx("input", {
                                        type: "text",
                                        value: g,
                                        onChange: (I) =>
                                          X("code", I.target.value),
                                        onFocus: () => v("code"),
                                        className:
                                          "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        placeholder: "輸入藥品代碼",
                                      }),
                                      ye === "code" &&
                                        b.length > 0 &&
                                        r.jsx("div", {
                                          className:
                                            "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto",
                                          children: b.map((I) =>
                                            r.jsxs(
                                              "div",
                                              {
                                                onClick: () => be(I, "code"),
                                                className:
                                                  "px-3 py-2 hover:bg-blue-50 cursor-pointer border-b last:border-b-0",
                                                children: [
                                                  r.jsxs("div", {
                                                    className:
                                                      "flex items-center gap-2 text-sm",
                                                    children: [
                                                      r.jsx("span", {
                                                        className:
                                                          "font-medium text-gray-900",
                                                        children: I.CODE,
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-600",
                                                        children: "|",
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-700",
                                                        children: I.NAME,
                                                      }),
                                                    ],
                                                  }),
                                                  r.jsxs("div", {
                                                    className:
                                                      "flex items-center gap-2 text-xs mt-1",
                                                    children: [
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-600",
                                                        children: I.CHT_NAME,
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-400",
                                                        children: "|",
                                                      }),
                                                      r.jsxs("span", {
                                                        className:
                                                          "text-gray-500",
                                                        children: [
                                                          "料號: ",
                                                          I.SKDIACODE,
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              },
                                              I.GUID
                                            )
                                          ),
                                        }),
                                    ],
                                  }),
                                  r.jsxs("div", {
                                    className: "relative",
                                    ref: ye === "name" ? J : null,
                                    children: [
                                      r.jsx("label", {
                                        className:
                                          "block text-sm font-medium text-gray-700 mb-1",
                                        children: "藥名",
                                      }),
                                      r.jsx("input", {
                                        type: "text",
                                        value: p,
                                        onChange: (I) =>
                                          X("name", I.target.value),
                                        onFocus: () => v("name"),
                                        className:
                                          "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        placeholder: "輸入藥品名稱",
                                      }),
                                      ye === "name" &&
                                        b.length > 0 &&
                                        r.jsx("div", {
                                          className:
                                            "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto",
                                          children: b.map((I) =>
                                            r.jsxs(
                                              "div",
                                              {
                                                onClick: () => be(I, "name"),
                                                className:
                                                  "px-3 py-2 hover:bg-blue-50 cursor-pointer border-b last:border-b-0",
                                                children: [
                                                  r.jsxs("div", {
                                                    className:
                                                      "flex items-center gap-2 text-sm",
                                                    children: [
                                                      r.jsx("span", {
                                                        className:
                                                          "font-medium text-gray-900",
                                                        children: I.CODE,
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-600",
                                                        children: "|",
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-700",
                                                        children: I.NAME,
                                                      }),
                                                    ],
                                                  }),
                                                  r.jsxs("div", {
                                                    className:
                                                      "flex items-center gap-2 text-xs mt-1",
                                                    children: [
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-600",
                                                        children: I.CHT_NAME,
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-400",
                                                        children: "|",
                                                      }),
                                                      r.jsxs("span", {
                                                        className:
                                                          "text-gray-500",
                                                        children: [
                                                          "料號: ",
                                                          I.SKDIACODE,
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              },
                                              I.GUID
                                            )
                                          ),
                                        }),
                                    ],
                                  }),
                                  r.jsxs("div", {
                                    className: "relative",
                                    ref: ye === "chineseName" ? J : null,
                                    children: [
                                      r.jsx("label", {
                                        className:
                                          "block text-sm font-medium text-gray-700 mb-1",
                                        children: "中文名",
                                      }),
                                      r.jsx("input", {
                                        type: "text",
                                        value: S,
                                        onChange: (I) =>
                                          X("chineseName", I.target.value),
                                        onFocus: () => v("chineseName"),
                                        className:
                                          "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        placeholder: "輸入中文名稱",
                                      }),
                                      ye === "chineseName" &&
                                        b.length > 0 &&
                                        r.jsx("div", {
                                          className:
                                            "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto",
                                          children: b.map((I) =>
                                            r.jsxs(
                                              "div",
                                              {
                                                onClick: () =>
                                                  be(I, "chineseName"),
                                                className:
                                                  "px-3 py-2 hover:bg-blue-50 cursor-pointer border-b last:border-b-0",
                                                children: [
                                                  r.jsxs("div", {
                                                    className:
                                                      "flex items-center gap-2 text-sm",
                                                    children: [
                                                      r.jsx("span", {
                                                        className:
                                                          "font-medium text-gray-900",
                                                        children: I.CODE,
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-600",
                                                        children: "|",
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-700",
                                                        children: I.NAME,
                                                      }),
                                                    ],
                                                  }),
                                                  r.jsxs("div", {
                                                    className:
                                                      "flex items-center gap-2 text-xs mt-1",
                                                    children: [
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-600",
                                                        children: I.CHT_NAME,
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-400",
                                                        children: "|",
                                                      }),
                                                      r.jsxs("span", {
                                                        className:
                                                          "text-gray-500",
                                                        children: [
                                                          "料號: ",
                                                          I.SKDIACODE,
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              },
                                              I.GUID
                                            )
                                          ),
                                        }),
                                    ],
                                  }),
                                  r.jsxs("div", {
                                    className: "relative",
                                    ref: ye === "skdiacode" ? J : null,
                                    children: [
                                      r.jsx("label", {
                                        className:
                                          "block text-sm font-medium text-gray-700 mb-1",
                                        children: "料號",
                                      }),
                                      r.jsx("input", {
                                        type: "text",
                                        value: R,
                                        onChange: (I) =>
                                          X("skdiacode", I.target.value),
                                        onFocus: () => v("skdiacode"),
                                        className:
                                          "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        placeholder: "輸入料號",
                                      }),
                                      ye === "skdiacode" &&
                                        b.length > 0 &&
                                        r.jsx("div", {
                                          className:
                                            "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto",
                                          children: b.map((I) =>
                                            r.jsxs(
                                              "div",
                                              {
                                                onClick: () =>
                                                  be(I, "skdiacode"),
                                                className:
                                                  "px-3 py-2 hover:bg-blue-50 cursor-pointer border-b last:border-b-0",
                                                children: [
                                                  r.jsxs("div", {
                                                    className:
                                                      "flex items-center gap-2 text-sm",
                                                    children: [
                                                      r.jsx("span", {
                                                        className:
                                                          "font-medium text-gray-900",
                                                        children: I.CODE,
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-600",
                                                        children: "|",
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-700",
                                                        children: I.NAME,
                                                      }),
                                                    ],
                                                  }),
                                                  r.jsxs("div", {
                                                    className:
                                                      "flex items-center gap-2 text-xs mt-1",
                                                    children: [
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-600",
                                                        children: I.CHT_NAME,
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-400",
                                                        children: "|",
                                                      }),
                                                      r.jsxs("span", {
                                                        className:
                                                          "text-gray-500",
                                                        children: [
                                                          "料號: ",
                                                          I.SKDIACODE,
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              },
                                              I.GUID
                                            )
                                          ),
                                        }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          r.jsxs("div", {
                            className: "space-y-4",
                            children: [
                              r.jsxs("div", {
                                className:
                                  "flex items-center justify-between border-b pb-2",
                                children: [
                                  r.jsx("h3", {
                                    className:
                                      "text-lg font-semibold text-gray-700",
                                    children: "批次資訊",
                                  }),
                                  r.jsxs("button", {
                                    onClick: fe,
                                    className:
                                      "flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg transition-colors",
                                    title: "新增批次",
                                    children: [
                                      r.jsx(bt, { className: "w-4 h-4" }),
                                      "新增批次",
                                    ],
                                  }),
                                ],
                              }),
                              u.length === 0
                                ? r.jsxs("div", {
                                    className:
                                      "text-center py-6 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300",
                                    children: [
                                      r.jsx("p", {
                                        className: "text-gray-500",
                                        children: "暫無藥品批號資訊",
                                      }),
                                      r.jsx("p", {
                                        className: "text-sm text-gray-400 mt-1",
                                        children:
                                          "點擊上方「新增批次」按鈕開始添加",
                                      }),
                                    ],
                                  })
                                : r.jsx("div", {
                                    className: "space-y-3",
                                    children: u.map((I, ue) =>
                                      r.jsxs(
                                        "div",
                                        {
                                          className:
                                            "bg-gray-50 rounded-lg p-4 border border-gray-200",
                                          children: [
                                            r.jsxs("div", {
                                              className:
                                                "flex items-center justify-between mb-3",
                                              children: [
                                                r.jsxs("span", {
                                                  className:
                                                    "text-sm font-medium text-gray-700",
                                                  children: ["批次 ", ue + 1],
                                                }),
                                                r.jsx("button", {
                                                  onClick: () => U(I.id),
                                                  className:
                                                    "p-1 text-red-600 hover:bg-red-50 rounded transition-colors",
                                                  title: "刪除批次",
                                                  children: r.jsx(vr, {
                                                    className: "w-4 h-4",
                                                  }),
                                                }),
                                              ],
                                            }),
                                            r.jsxs("div", {
                                              className:
                                                "grid grid-cols-3 gap-3",
                                              children: [
                                                r.jsxs("div", {
                                                  children: [
                                                    r.jsx("label", {
                                                      className:
                                                        "block text-xs font-medium text-gray-600 mb-1",
                                                      children: "批號",
                                                    }),
                                                    r.jsx("input", {
                                                      type: "text",
                                                      value: I.lot,
                                                      onChange: (G) =>
                                                        xe(
                                                          I.id,
                                                          "lot",
                                                          G.target.value
                                                        ),
                                                      className:
                                                        "w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                                      placeholder: "輸入批號",
                                                    }),
                                                  ],
                                                }),
                                                r.jsxs("div", {
                                                  children: [
                                                    r.jsx("label", {
                                                      className:
                                                        "block text-xs font-medium text-gray-600 mb-1",
                                                      children: "效期",
                                                    }),
                                                    r.jsx("input", {
                                                      type: "date",
                                                      value: I.expiryDate,
                                                      onChange: (G) =>
                                                        xe(
                                                          I.id,
                                                          "expiryDate",
                                                          G.target.value
                                                        ),
                                                      className:
                                                        "w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                                    }),
                                                  ],
                                                }),
                                                r.jsxs("div", {
                                                  children: [
                                                    r.jsx("label", {
                                                      className:
                                                        "block text-xs font-medium text-gray-600 mb-1",
                                                      children: "數量",
                                                    }),
                                                    r.jsx("input", {
                                                      type: "number",
                                                      value: I.qty,
                                                      onChange: (G) =>
                                                        xe(
                                                          I.id,
                                                          "qty",
                                                          G.target.value
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
                                        I.id
                                      )
                                    ),
                                  }),
                            ],
                          }),
                          r.jsxs("div", {
                            className: "space-y-4",
                            children: [
                              r.jsx("h3", {
                                className:
                                  "text-lg font-semibold text-gray-700 border-b pb-2",
                                children: "位置與設備資訊",
                              }),
                              r.jsxs("div", {
                                className: "grid grid-cols-3 gap-4",
                                children: [
                                  r.jsxs("div", {
                                    children: [
                                      r.jsx("label", {
                                        className:
                                          "block text-sm font-medium text-gray-700 mb-1",
                                        children: "位置",
                                      }),
                                      r.jsx("input", {
                                        type: "text",
                                        value: _,
                                        onChange: (I) => P(I.target.value),
                                        className:
                                          "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        placeholder: "輸入位置",
                                      }),
                                    ],
                                  }),
                                  r.jsxs("div", {
                                    children: [
                                      r.jsx("label", {
                                        className:
                                          "block text-sm font-medium text-gray-700 mb-1",
                                        children: "LED 索引",
                                      }),
                                      r.jsx("input", {
                                        type: "text",
                                        value: V,
                                        onChange: (I) => Q(I.target.value),
                                        className:
                                          "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        placeholder: "輸入 LED 索引",
                                      }),
                                    ],
                                  }),
                                  r.jsxs("div", {
                                    children: [
                                      r.jsx("label", {
                                        className:
                                          "block text-sm font-medium text-gray-700 mb-1",
                                        children: "電子紙 IP",
                                      }),
                                      r.jsx("input", {
                                        type: "text",
                                        value: K,
                                        onChange: (I) => pe(I.target.value),
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
                r.jsxs("div", {
                  className:
                    "sticky bottom-0 bg-gray-50 px-6 py-4 border-t flex justify-end space-x-3",
                  children: [
                    r.jsx("button", {
                      onClick: me,
                      className:
                        "px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors",
                      children: "取消",
                    }),
                    r.jsx("button", {
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
            r.jsx(Xo, {
              isOpen: k,
              onClose: () => M(!1),
              onScanSuccess: ve,
              mode: "set_store_med_mode",
            }),
          ],
        })
      : null;
  },
  $h = ({ isOpen: e, onClose: t }) => {
    const {
        selectedDepartmentType: n,
        apiDepartmentData: s,
        allDepartmentsList: o,
        showNotification: l,
        triggerRefresh: a,
        reloadMedMapData: i,
      } = Xe(),
      [c, x] = f.useState(null),
      [g, h] = f.useState(""),
      [p, j] = f.useState(!1),
      S = () => (s ? s.map((P) => P.name) : []),
      C = () => (!n || !o ? [] : o.filter((P) => P["department_type "] === n)),
      R = () => {
        const P = S();
        return C().filter((Q) => !P.includes(Q.name));
      },
      d = () => (s ? s.map((P) => P.gird_position) : []),
      u = () => {
        const P = d(),
          V = [];
        for (let Q = 0; Q < 10; Q++)
          for (let K = 0; K < 10; K++) {
            const pe = `${Q},${K}`;
            P.includes(pe) || V.push(pe);
          }
        return V.slice(0, 20);
      };
    f.useEffect(() => {
      e && (x(null), h(""));
    }, [e]);
    const m = async () => {
        if (!c) {
          l("請選擇部門", "error");
          return;
        }
        if (!g) {
          l("請選擇位置", "error");
          return;
        }
        if (!n) {
          l("部門分類資訊錯誤", "error");
          return;
        }
        j(!0);
        try {
          const P = await De.addMedMap(c.name, c.type, g);
          P.Code === 200
            ? (l("新增部門成功", "success"), await i(), D())
            : l(P.Result || "新增部門失敗", "error");
        } catch (P) {
          console.error("新增部門錯誤:", P),
            l("新增部門失敗，請稍後再試", "error");
        } finally {
          j(!1);
        }
      },
      D = () => {
        x(null), h(""), t();
      };
    if (!e) return null;
    const T = R(),
      _ = u();
    return r.jsx("div", {
      className:
        "fixed inset-0 bg-black/50 flex items-center justify-center z-50",
      children: r.jsxs("div", {
        className:
          "bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto",
        children: [
          r.jsxs("div", {
            className:
              "sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between",
            children: [
              r.jsx("h2", {
                className: "text-xl font-bold text-gray-800",
                children: "新增部門",
              }),
              r.jsx("button", {
                onClick: D,
                className:
                  "p-2 hover:bg-gray-100 rounded-full transition-colors",
                children: r.jsx(Fe, { className: "w-5 h-5" }),
              }),
            ],
          }),
          r.jsxs("div", {
            className: "p-6 space-y-6",
            children: [
              n &&
                r.jsx("div", {
                  className: "bg-blue-50 border border-blue-200 rounded-lg p-4",
                  children: r.jsxs("p", {
                    className: "text-sm font-medium text-blue-900",
                    children: [
                      "部門分類：",
                      r.jsx("span", { className: "font-bold", children: n }),
                    ],
                  }),
                }),
              r.jsxs("div", {
                className: "space-y-4",
                children: [
                  r.jsx("h3", {
                    className:
                      "text-lg font-semibold text-gray-700 border-b pb-2",
                    children: "選擇部門",
                  }),
                  T.length === 0
                    ? r.jsx("div", {
                        className: "text-center py-8",
                        children: r.jsx("p", {
                          className: "text-gray-600",
                          children: "所有部門都已新增",
                        }),
                      })
                    : r.jsx("div", {
                        className: "space-y-2",
                        children: T.map((P) =>
                          r.jsxs(
                            "label",
                            {
                              className: `flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                                (c == null ? void 0 : c.name) === P.name
                                  ? "border-blue-500 bg-blue-50"
                                  : "border-gray-200 hover:border-blue-300 hover:bg-gray-50"
                              }`,
                              children: [
                                r.jsx("input", {
                                  type: "radio",
                                  name: "department",
                                  value: P.name,
                                  checked:
                                    (c == null ? void 0 : c.name) === P.name,
                                  onChange: () => x(P),
                                  className:
                                    "w-4 h-4 text-blue-600 focus:ring-blue-500",
                                }),
                                r.jsxs("div", {
                                  className: "ml-3",
                                  children: [
                                    r.jsx("div", {
                                      className:
                                        "text-sm font-medium text-gray-900",
                                      children: P.name,
                                    }),
                                    r.jsx("div", {
                                      className: "text-xs text-gray-500",
                                      children: P.type,
                                    }),
                                  ],
                                }),
                              ],
                            },
                            P.name
                          )
                        ),
                      }),
                ],
              }),
              c &&
                r.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    r.jsx("h3", {
                      className:
                        "text-lg font-semibold text-gray-700 border-b pb-2",
                      children: "選擇位置",
                    }),
                    _.length === 0
                      ? r.jsx("div", {
                          className: "text-center py-8",
                          children: r.jsx("p", {
                            className: "text-gray-600",
                            children: "沒有可用的位置",
                          }),
                        })
                      : r.jsx("div", {
                          className: "grid grid-cols-5 gap-2",
                          children: _.map((P) => {
                            const [V, Q] = P.split(",");
                            return r.jsxs(
                              "button",
                              {
                                onClick: () => h(P),
                                className: `p-3 border-2 rounded-lg text-sm font-medium transition-all ${
                                  g === P
                                    ? "border-blue-500 bg-blue-500 text-white"
                                    : "border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-700"
                                }`,
                                children: ["(", V, ",", Q, ")"],
                              },
                              P
                            );
                          }),
                        }),
                  ],
                }),
            ],
          }),
          r.jsxs("div", {
            className:
              "sticky bottom-0 bg-gray-50 px-6 py-4 border-t flex justify-end space-x-3",
            children: [
              r.jsx("button", {
                onClick: D,
                className:
                  "px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors",
                disabled: p,
                children: "取消",
              }),
              r.jsx("button", {
                onClick: m,
                disabled: !c || !g || p,
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
  Oh = ({ isOpen: e, onClose: t, initialBarcode: n = "" }) => {
    const {
        showNotification: s,
        medicineList: o,
        isLoadingMedicines: l,
      } = Xe(),
      [a, i] = f.useState(""),
      [c, x] = f.useState(""),
      [g, h] = f.useState(""),
      [p, j] = f.useState(""),
      [S, C] = f.useState(""),
      [R, d] = f.useState(null),
      [u, m] = f.useState([]),
      [D, T] = f.useState(""),
      [_, P] = f.useState(null),
      [V, Q] = f.useState(!1),
      K = f.useRef(null);
    f.useEffect(() => {
      e && (i(n), x(""), h(""), j(""), C(""), T(""), P(null), d(null));
    }, [e, n]),
      f.useEffect(() => {
        const w = (N) => {
          K.current && !K.current.contains(N.target) && d(null);
        };
        return (
          document.addEventListener("mousedown", w),
          () => {
            document.removeEventListener("mousedown", w);
          }
        );
      }, []);
    const pe = (w, N) => {
        if (!N.trim() || l) {
          m([]);
          return;
        }
        const k = N.toLowerCase(),
          M = o.filter((J) => {
            var z, X, be, fe;
            switch (w) {
              case "code":
                return (z = J.CODE) == null
                  ? void 0
                  : z.toLowerCase().includes(k);
              case "name":
                return (X = J.NAME) == null
                  ? void 0
                  : X.toLowerCase().includes(k);
              case "chineseName":
                return (be = J.CHT_NAME) == null
                  ? void 0
                  : be.toLowerCase().includes(k);
              case "skdiacode":
                return (fe = J.SKDIACODE) == null
                  ? void 0
                  : fe.toLowerCase().includes(k);
              default:
                return !1;
            }
          });
        m(M.slice(0, 10));
      },
      ye = (w, N) => {
        switch ((d(w), w)) {
          case "code":
            x(N);
            break;
          case "name":
            h(N);
            break;
          case "chineseName":
            j(N);
            break;
          case "skdiacode":
            C(N);
            break;
        }
        pe(w, N);
      },
      v = (w) => {
        T(w.GUID),
          P(w),
          x(w.CODE || ""),
          h(w.NAME || ""),
          j(w.CHT_NAME || ""),
          C(w.SKDIACODE || ""),
          d(null),
          m([]);
      },
      b = () => {
        i(""), x(""), h(""), j(""), C(""), T(""), P(null), d(null), m([]), t();
      },
      L = async () => {
        if (!c.trim()) {
          s("藥碼為必填欄位", "error");
          return;
        }
        if (!a.trim()) {
          s("條碼不能為空", "error");
          return;
        }
        Q(!0);
        try {
          let w = [];
          if (_ && _.BARCODE2)
            try {
              const k = JSON.parse(_.BARCODE2);
              Array.isArray(k)
                ? (w = [...k])
                : typeof k == "string" && (w = [k]);
            } catch {
              console.warn("解析 BARCODE2 失敗，使用原始值:", _.BARCODE2),
                _.BARCODE2 && (w = [_.BARCODE2]);
            }
          w.includes(a.trim()) || w.push(a.trim()),
            console.log("📋 處理後的 BARCODE2 陣列:", w);
          const N = await De.addMedClouds(
            a.trim(),
            c.trim(),
            JSON.stringify(w),
            _.BARCODE
          );
          N.Code === 200
            ? (s("條碼建立成功", "success"), b())
            : s(N.Result || "建立條碼失敗", "error");
        } catch (w) {
          console.error("建立條碼失敗:", w),
            s("建立條碼失敗，請稍後再試", "error");
        } finally {
          Q(!1);
        }
      };
    return e
      ? r.jsx("div", {
          className:
            "fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4",
          children: r.jsxs("div", {
            className:
              "bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col",
            children: [
              r.jsxs("div", {
                className: "flex items-center justify-between p-2 border-b",
                children: [
                  r.jsxs("div", {
                    className: "flex items-center space-x-3",
                    children: [
                      r.jsx("div", {
                        className: "w-10 h-10 flex items-center justify-center",
                        children: r.jsx(bt, {
                          className: "w-6 h-6 text-blue-500",
                        }),
                      }),
                      r.jsx("h2", {
                        className: "text-lg font-semibold text-gray-900",
                        children: "建立條碼",
                      }),
                    ],
                  }),
                  r.jsx("button", {
                    onClick: b,
                    className:
                      "p-2 hover:bg-gray-100 rounded-lg transition-colors",
                    disabled: V,
                    children: r.jsx(Fe, { className: "w-6 h-6 text-gray-600" }),
                  }),
                ],
              }),
              r.jsx("div", {
                className: "flex-1 overflow-y-auto p-6",
                children: r.jsxs("div", {
                  className: "space-y-4",
                  ref: K,
                  children: [
                    r.jsxs("div", {
                      children: [
                        r.jsx("label", {
                          className:
                            "block text-sm font-medium text-gray-700 mb-2",
                          children: "條碼",
                        }),
                        r.jsx("input", {
                          type: "text",
                          value: a,
                          disabled: !0,
                          className:
                            "w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-600 cursor-not-allowed",
                        }),
                      ],
                    }),
                    r.jsxs("div", {
                      className: "relative",
                      children: [
                        r.jsxs("label", {
                          className:
                            "block text-sm font-medium text-gray-700 mb-2",
                          children: [
                            "藥碼 ",
                            r.jsx("span", {
                              className: "text-red-500",
                              children: "*",
                            }),
                          ],
                        }),
                        r.jsx("input", {
                          type: "text",
                          value: c,
                          onChange: (w) => ye("code", w.target.value),
                          onFocus: () => d("code"),
                          className:
                            "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent",
                          placeholder: "輸入藥碼搜尋...",
                          disabled: V,
                        }),
                        R === "code" &&
                          u.length > 0 &&
                          r.jsx("div", {
                            className:
                              "absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                            children: u.map((w) =>
                              r.jsxs(
                                "div",
                                {
                                  onClick: () => v(w),
                                  className:
                                    "px-4 py-2 hover:bg-green-50 cursor-pointer border-b border-gray-100 last:border-b-0",
                                  children: [
                                    r.jsx("div", {
                                      className: "font-medium text-gray-800",
                                      children: w.CODE,
                                    }),
                                    r.jsx("div", {
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
                    r.jsxs("div", {
                      className: "relative",
                      children: [
                        r.jsx("label", {
                          className:
                            "block text-sm font-medium text-gray-700 mb-2",
                          children: "藥名",
                        }),
                        r.jsx("input", {
                          type: "text",
                          value: g,
                          onChange: (w) => ye("name", w.target.value),
                          onFocus: () => d("name"),
                          className:
                            "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent",
                          placeholder: "輸入藥名搜尋...",
                          disabled: V,
                        }),
                        R === "name" &&
                          u.length > 0 &&
                          r.jsx("div", {
                            className:
                              "absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                            children: u.map((w) =>
                              r.jsxs(
                                "div",
                                {
                                  onClick: () => v(w),
                                  className:
                                    "px-4 py-2 hover:bg-green-50 cursor-pointer border-b border-gray-100 last:border-b-0",
                                  children: [
                                    r.jsx("div", {
                                      className: "font-medium text-gray-800",
                                      children: w.NAME,
                                    }),
                                    r.jsx("div", {
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
                    r.jsxs("div", {
                      className: "relative",
                      children: [
                        r.jsx("label", {
                          className:
                            "block text-sm font-medium text-gray-700 mb-2",
                          children: "中文名",
                        }),
                        r.jsx("input", {
                          type: "text",
                          value: p,
                          onChange: (w) => ye("chineseName", w.target.value),
                          onFocus: () => d("chineseName"),
                          className:
                            "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent",
                          placeholder: "輸入中文名搜尋...",
                          disabled: V,
                        }),
                        R === "chineseName" &&
                          u.length > 0 &&
                          r.jsx("div", {
                            className:
                              "absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                            children: u.map((w) =>
                              r.jsxs(
                                "div",
                                {
                                  onClick: () => v(w),
                                  className:
                                    "px-4 py-2 hover:bg-green-50 cursor-pointer border-b border-gray-100 last:border-b-0",
                                  children: [
                                    r.jsx("div", {
                                      className: "font-medium text-gray-800",
                                      children: w.CHT_NAME,
                                    }),
                                    r.jsx("div", {
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
                    r.jsxs("div", {
                      className: "relative",
                      children: [
                        r.jsx("label", {
                          className:
                            "block text-sm font-medium text-gray-700 mb-2",
                          children: "料號",
                        }),
                        r.jsx("input", {
                          type: "text",
                          value: S,
                          onChange: (w) => ye("skdiacode", w.target.value),
                          onFocus: () => d("skdiacode"),
                          className:
                            "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent",
                          placeholder: "輸入料號搜尋...",
                          disabled: V,
                        }),
                        R === "skdiacode" &&
                          u.length > 0 &&
                          r.jsx("div", {
                            className:
                              "absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                            children: u.map((w) =>
                              r.jsxs(
                                "div",
                                {
                                  onClick: () => v(w),
                                  className:
                                    "px-4 py-2 hover:bg-green-50 cursor-pointer border-b border-gray-100 last:border-b-0",
                                  children: [
                                    r.jsx("div", {
                                      className: "font-medium text-gray-800",
                                      children: w.SKDIACODE,
                                    }),
                                    r.jsx("div", {
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
                      r.jsx("div", {
                        className: "text-center py-2 text-gray-500 text-sm",
                        children: "載入藥品資料中...",
                      }),
                  ],
                }),
              }),
              r.jsx("div", {
                className: "p-6 border-t border-gray-200 bg-gray-50",
                children: r.jsxs("div", {
                  className: "flex justify-end space-x-3",
                  children: [
                    r.jsx("button", {
                      onClick: b,
                      disabled: V,
                      className:
                        "px-6 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                      children: "取消",
                    }),
                    r.jsx("button", {
                      onClick: L,
                      disabled: V || !c.trim(),
                      className:
                        "px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                      children: V ? "建立中..." : "確認建立",
                    }),
                  ],
                }),
              }),
            ],
          }),
        })
      : null;
  },
  Lh = ({
    container: e,
    highlightedMedicineCode: t,
    pendingRequisitionCodes: n = [],
    onMedicineClick: s,
  }) => {
    const o = () => {
        try {
          const h = localStorage.getItem("medMap_setting");
          if (h) return JSON.parse(h).light_color || "red";
        } catch (h) {
          console.error("讀取高亮顏色設定失敗:", h);
        }
        return "red";
      },
      l = (h) => {
        const [p, j] = h.split(",").map(Number);
        return { row: p || 0, col: j || 0 };
      },
      a = (h) => {
        if (!h || h.length === 0)
          return { sortedContents: [], maxRow: 0, maxCol: 0 };
        const p = h.map((R) => ({
            ...R,
            gridPos: l(R.gird_position || "0,0"),
          })),
          j = Math.max(...p.map((R) => R.gridPos.row), 0),
          S = Math.max(...p.map((R) => R.gridPos.col), 0);
        return {
          sortedContents: p.sort((R, d) =>
            R.gridPos.row !== d.gridPos.row
              ? R.gridPos.row - d.gridPos.row
              : R.gridPos.col - d.gridPos.col
          ),
          maxRow: j,
          maxCol: S,
        };
      },
      i = (h) => {
        switch (h) {
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
      c = (h) => {
        const p = [
          "med_box",
          "dispensing_shelves",
          "store_shelves",
          "grid_draw",
          "list_draw",
        ].includes(h.type);
        return r.jsx(
          "div",
          {
            className: `${p ? "shadow-sm border-2 p-1 rounded-lg" : ""} ${i(
              h.type
            )} flex flex-col max-w-full min-w-0 h-full overflow-hidden`,
            children: r.jsx("div", {
              className: "flex-1 min-w-0 overflow-hidden",
              children: g(h),
            }),
          },
          h.GUID
        );
      },
      x = (h, p, j) => {
        const S = {};
        return (
          h.forEach((C) => {
            const R = l(C.gird_position || "0,0");
            S[`${R.row},${R.col}`] = C;
          }),
          r.jsx("table", {
            className: "w-full h-full max-w-full table-fixed",
            style: { borderCollapse: "separate", borderSpacing: "0px" },
            children: r.jsx("tbody", {
              children: Array.from({ length: p + 1 }, (C, R) =>
                r.jsx(
                  "tr",
                  {
                    children: Array.from({ length: j + 1 }, (d, u) => {
                      const m = `${R},${u}`,
                        D = S[m];
                      return D
                        ? r.jsx(
                            "td",
                            {
                              className:
                                "align-top bg-transparent overflow-hidden",
                              style: {
                                width: `${100 / (j + 1)}%`,
                                maxWidth: `${100 / (j + 1)}%`,
                              },
                              children: c(D),
                            },
                            u
                          )
                        : r.jsx(
                            "td",
                            {
                              className:
                                "align-top bg-transparent overflow-hidden",
                              style: {
                                width: `${100 / (j + 1)}%`,
                                maxWidth: `${100 / (j + 1)}%`,
                              },
                              children: r.jsx("div", {
                                className:
                                  "w-full h-full flex items-center justify-center text-gray-300 text-xs border border-dashed border-gray-200 rounded overflow-hidden",
                                children: "空位",
                              }),
                            },
                            u
                          );
                    }),
                  },
                  R
                )
              ),
            }),
          })
        );
      },
      g = (h) => {
        switch (h.type) {
          case "parent_container":
            if (h.contents && h.contents.length > 0) {
              const { sortedContents: p, maxRow: j, maxCol: S } = a(h.contents);
              return x(p, j, S);
            } else return r.jsx("div", { className: "" });
          case "sub_container":
            if (h.contents && h.contents.length > 0) {
              const { sortedContents: p, maxRow: j, maxCol: S } = a(h.contents);
              return x(p, j, S);
            } else return r.jsx("div", { className: "" });
          case "dispensing_shelves":
            if (h.contents && h.contents.length > 0) {
              const { sortedContents: p, maxRow: j, maxCol: S } = a(h.contents);
              return x(p, j, S);
            } else
              return r.jsx("div", {
                className:
                  "border-2 rounded-lg flex py-3 items-center justify-center h-full text-gray-400 text-sm",
                children: "無藥盒",
              });
          case "store_shelves":
            if (h.medMapStock && h.medMapStock.length > 0) {
              const p = h.medMapStock,
                j = p.length,
                S = j > 0 ? 100 / j : 100;
              return r.jsx("div", {
                className: "flex h-full w-full overflow-hidden",
                children: p.map((C, R) => {
                  let d = 0;
                  C.qty.forEach((T) => {
                    d += +T;
                  });
                  const u = t && (C.code == t || C.material_no == t),
                    m = n.includes(C.code) || n.includes(C.material_no),
                    D = o();
                  return r.jsxs(
                    "div",
                    {
                      className: `border-2 rounded-lg border-gray-300 p-2 flex flex-col text-gray-800 justify-center items-center transition-colors cursor-pointer min-w-0 overflow-hidden ${
                        m
                          ? "highlight-breathe-red"
                          : u
                          ? `highlight-breathe-${D}`
                          : ""
                      }`,
                      style: {
                        width: `${S}%`,
                        maxWidth: `${S}%`,
                        flexShrink: 0,
                      },
                      onClick: () =>
                        s && s({ code: C.code || C.material_no, name: C.name }),
                      children: [
                        r.jsx("div", {
                          className:
                            "text-sm font-semibold truncate w-full text-center whitespace-normal overflow-hidden",
                          children: C.name || C.material_no,
                        }),
                        r.jsxs("div", {
                          className: "text-xs mt-1",
                          children: ["數量: ", d || 0],
                        }),
                      ],
                    },
                    C.GUID || R
                  );
                }),
              });
            } else if (h.contents && h.contents.length > 0) {
              const { sortedContents: p, maxRow: j, maxCol: S } = a(h.contents);
              return x(p, j, S);
            } else
              return r.jsx("div", {
                className:
                  "border-2 flex py-3 items-center justify-center h-full text-gray-400 text-sm",
                children: "無庫存",
              });
          case "grid_draw":
            return r.jsxs("div", {
              className:
                "border-2 bg-violet-100 h-16 flex rounded-lg border-2 border-violet-400 max-w-[120px] w-full items-center justify-center mx-auto overflow-hidden",
              children: [
                r.jsx("div", {
                  className:
                    "h-[50%] bg-violet-400 w-[3%] rounded flex-shrink-0",
                }),
                r.jsx("div", {
                  className:
                    "h-[70%] border-2 border-violet-400 w-[82%] mx-1 flex items-center justify-center overflow-hidden",
                  children: r.jsx("span", {
                    className: "text-xs text-violet-600 truncate",
                    children: "格狀抽屜",
                  }),
                }),
                r.jsx("div", {
                  className: "h-[50%] bg-violet-400 w-[3%] flex-shrink-0",
                }),
              ],
            });
          case "list_draw":
            return r.jsxs("div", {
              className:
                "border-2 bg-violet-100 h-16 flex rounded-lg border-2 border-violet-400 max-w-[120px] w-full items-center justify-center mx-auto overflow-hidden",
              children: [
                r.jsx("div", {
                  className:
                    "h-[50%] bg-violet-400 w-[3%] rounded flex-shrink-0",
                }),
                r.jsx("div", {
                  className:
                    "h-[70%] border-2 border-violet-400 w-[82%] mx-1 flex items-center justify-center overflow-hidden",
                  children: r.jsx("span", {
                    className: "text-xs text-violet-600 truncate",
                    children: "清單抽屜",
                  }),
                }),
                r.jsx("div", {
                  className: "h-[50%] bg-violet-400 w-[3%] flex-shrink-0",
                }),
              ],
            });
          case "med_box":
            if (h.med_info && h.med_info.length > 0) {
              const p = t && h.med_info.some((C) => C.code == t),
                j = h.med_info.some((C) => n.includes(C.code)),
                S = o();
              return r.jsx("div", {
                className: `text-sm text-center h-full p-2 flex flex-col text-gray-800 justify-center transition-colors cursor-pointer overflow-hidden ${
                  j
                    ? "highlight-breathe-red"
                    : p
                    ? `highlight-breathe-${S}`
                    : ""
                }`,
                onClick: () => s && s(h.med_info[0]),
                children: r.jsx("div", {
                  className: "font-semibold truncate w-full overflow-hidden",
                  children: h.med_info[0].name || "-",
                }),
              });
            } else
              return r.jsx("div", {
                className:
                  "flex items-center justify-center h-full text-gray-400 text-xs",
                children: "空藥盒",
              });
          default:
            if (h.contents && h.contents.length > 0) {
              const { sortedContents: p, maxRow: j, maxCol: S } = a(h.contents);
              return x(p, j, S);
            } else
              return r.jsxs("div", {
                className:
                  "flex items-center justify-center h-full text-gray-400 text-sm",
                children: ["未知類型: ", h.type],
              });
        }
      };
    return e
      ? r.jsx("div", {
          className: "w-full h-full overflow-auto",
          children: r.jsx("div", {
            className: "max-w-full h-full",
            children: g(e),
          }),
        })
      : r.jsx("div", {
          className: "flex items-center justify-center h-full text-gray-400",
          children: r.jsx("p", { children: "無容器資料" }),
        });
  },
  Uh = ({ isOpen: e, onClose: t, type: n, data: s, onApprove: o }) => {
    const [l, a] = f.useState("0"),
      [i, c] = f.useState("0"),
      [x, g] = f.useState(null),
      [h, p] = f.useState(null),
      [j, S] = f.useState(!1),
      [C, R] = f.useState(!1),
      [d, u] = f.useState(""),
      [m, D] = f.useState(""),
      [T, _] = f.useState([]),
      [P, V] = f.useState([]),
      [Q, K] = f.useState([]),
      [pe, ye] = f.useState(!1),
      [v, b] = f.useState(!1),
      L = f.useRef(null),
      w = f.useRef(null),
      N = f.useRef(null),
      k = f.useRef(null);
    f.useEffect(() => {
      if (e && s) {
        const E = s.issuedQuantity || s.requestedQuantity || "0";
        a(E), c(E), g(null), p(null), S(!1);
        const se = localStorage.getItem("medMap_setting");
        if (se)
          try {
            const le = JSON.parse(se);
            u(le.default_person || ""), D(le.default_person_id || "");
          } catch (le) {
            console.error("讀取設定失敗:", le), u(""), D("");
          }
        else u(""), D("");
        M();
      }
    }, [e, s]),
      f.useEffect(() => {
        const E = (se) => {
          N.current &&
            !N.current.contains(se.target) &&
            L.current &&
            !L.current.contains(se.target) &&
            ye(!1),
            k.current &&
              !k.current.contains(se.target) &&
              w.current &&
              !w.current.contains(se.target) &&
              b(!1);
        };
        return (
          document.addEventListener("mousedown", E),
          () => document.removeEventListener("mousedown", E)
        );
      }, []);
    const M = async () => {
        try {
          const E = await De.getAllStaffInfo();
          E.Code === 200 && E.Data && _(E.Data);
        } catch (E) {
          console.error("獲取人員資料失敗:", E);
        }
      },
      J = (E) => {
        if ((u(E), E.trim() === "")) {
          V([]), ye(!1);
          return;
        }
        const se = T.filter(
          (le) => le.name && le.name.toLowerCase().includes(E.toLowerCase())
        );
        V(se), ye(se.length > 0);
      },
      z = (E) => {
        if ((D(E), E.trim() === "")) {
          K([]), b(!1);
          return;
        }
        const se = T.filter(
          (le) => le.ID && le.ID.toLowerCase().includes(E.toLowerCase())
        );
        K(se), b(se.length > 0);
      },
      X = (E) => {
        u(E.name), D(E.ID), ye(!1);
      },
      be = (E) => {
        u(E.name), D(E.ID), b(!1);
      };
    if (!e || !s) return null;
    const fe = (E) => {
        if (j) a(E), c(E), S(!1);
        else {
          const se = l === "0" ? E : l + E;
          a(se), c(se);
        }
      },
      U = (E) => {
        x && h !== null && !j && xe(), p(i), g(E), S(!0);
      },
      xe = () => {
        if (x === null || h === null) return;
        const E = parseFloat(h),
          se = parseFloat(i);
        let le = 0;
        switch (x) {
          case "+":
            le = E + se;
            break;
          case "-":
            le = E - se;
            break;
          case "×":
            le = E * se;
            break;
          case "÷":
            le = se !== 0 ? E / se : 0;
            break;
          default:
            return;
        }
        const B = le.toString();
        a(B), c(B), g(null), p(null), S(!0);
      },
      F = () => {
        xe();
      },
      ve = () => {
        if (j) a("0."), c("0."), S(!1);
        else if (!l.includes(".")) {
          const E = l + ".";
          a(E), c(E);
        }
      },
      me = () => {
        a("0"), c("0"), g(null), p(null), S(!1);
      },
      I = () => {
        const E = new Date(),
          se = E.getFullYear(),
          le = String(E.getMonth() + 1).padStart(2, "0"),
          B = String(E.getDate()).padStart(2, "0"),
          Z = String(E.getHours()).padStart(2, "0"),
          ie = String(E.getMinutes()).padStart(2, "0"),
          A = String(E.getSeconds()).padStart(2, "0");
        return `${se}-${le}-${B}T${Z}:${ie}:${A}`;
      },
      ue = async () => {
        if (!s) return;
        if (!d.trim()) {
          alert("請輸入核撥人員名稱");
          return;
        }
        const E = n === "requisition" ? "申領" : "撥補";
        if (
          window.confirm(`確認核撥資訊：

藥品名稱：${s.name}
實際撥發量：${l}
核撥人員：${d}${m ? ` (${m})` : ""}

是否確認${E}？`)
        ) {
          R(!0);
          try {
            const le = I();
            if (n === "requisition") {
              const B = await De.updateRequisitionActualQuantity(s.GUID, l);
              if (B.Code !== 200) {
                alert(`更新實際撥發量失敗：${B.Message || "未知錯誤"}`), R(!1);
                return;
              }
              const Z = {
                ...s,
                actualQuantity: l,
                notice: "False",
                state: "已過帳",
                issuingPerson: d,
                issueTime: le,
              };
              console.log("申領request", Z);
              const ie = await De.updateRequisitionByGuid(Z);
              if (ie.Code !== 200) {
                alert(`申領過帳失敗：${ie.Message || "未知錯誤"}`), R(!1);
                return;
              }
              console.log("✅ 申領核撥成功:", {
                GUID: s.GUID,
                name: s.name,
                actualQuantity: l,
                issuingPerson: d,
                issueTime: le,
              });
            } else {
              const B = await De.updateDistributionActualQuantity(s.GUID, l);
              if (B.Code !== 200) {
                alert(`更新實際撥發量失敗：${B.Message || "未知錯誤"}`), R(!1);
                return;
              }
              const Z = {
                ...s,
                actualQuantity: l,
                notice: "False",
                state: "已過帳",
                issuer: d,
                issuanceTime: le,
              };
              console.log("撥補request", Z);
              const ie = await De.updateDistributionByGuid(Z);
              if (ie.Code !== 200) {
                alert(`撥補過帳失敗：${ie.Message || "未知錯誤"}`), R(!1);
                return;
              }
              console.log("✅ 撥補核撥成功:", {
                GUID: s.GUID,
                name: s.name,
                actualQuantity: l,
                issuer: d,
                issuanceTime: le,
              });
            }
            o && (await o()), alert(`${E}核撥成功！`), t();
          } catch (le) {
            console.error(`${E}核撥失敗:`, le),
              alert(`${E}核撥失敗，請稍後再試`);
          } finally {
            R(!1);
          }
        }
      },
      G = n === "requisition" ? s.requestedQuantity : s.issuedQuantity;
    return r.jsxs("div", {
      className: "fixed inset-0 z-[70] flex items-center justify-center",
      children: [
        r.jsx("div", {
          className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
          onClick: t,
        }),
        r.jsxs("div", {
          className:
            "relative w-full max-w-md bg-white shadow-2xl rounded-xl overflow-hidden flex flex-col m-4 max-h-[90vh]",
          children: [
            r.jsxs("div", {
              className:
                "flex items-center justify-between px-3 py-2 border-b border-gray-200",
              children: [
                r.jsxs("h2", {
                  className: "text-lg font-bold text-gray-800",
                  children: [n === "requisition" ? "申領" : "撥補", "核撥"],
                }),
                r.jsx("button", {
                  onClick: t,
                  className:
                    "p-2 hover:bg-white/50 rounded-full transition-colors",
                  title: "關閉",
                  children: r.jsx(Fe, { className: "w-5 h-5 text-gray-700" }),
                }),
              ],
            }),
            r.jsx("div", {
              className: "overflow-y-auto flex-1",
              children: r.jsxs("div", {
                className: "p-4 space-y-2",
                children: [
                  r.jsxs("div", {
                    className: "bg-blue-50 rounded-lg p-3 space-y-2",
                    children: [
                      r.jsx("label", {
                        className:
                          "block text-sm font-semibold text-gray-700 mb-1",
                        children: "核撥人員",
                      }),
                      r.jsxs("div", {
                        className: "grid grid-cols-2 gap-2",
                        children: [
                          r.jsxs("div", {
                            className: "relative",
                            children: [
                              r.jsx("input", {
                                ref: L,
                                type: "text",
                                value: d,
                                onChange: (E) => J(E.target.value),
                                onFocus: () => {
                                  d.trim() && J(d);
                                },
                                placeholder: "人員名稱",
                                className:
                                  "w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                              }),
                              pe &&
                                r.jsx("div", {
                                  ref: N,
                                  className:
                                    "absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-40 overflow-y-auto",
                                  children: P.map((E, se) =>
                                    r.jsxs(
                                      "div",
                                      {
                                        onClick: () => X(E),
                                        className:
                                          "px-3 py-2 hover:bg-blue-50 cursor-pointer transition-colors",
                                        children: [
                                          r.jsx("div", {
                                            className: "text-xs text-gray-500",
                                            children: E.ID,
                                          }),
                                          r.jsx("div", {
                                            className:
                                              "font-medium text-gray-900 text-sm",
                                            children: E.name,
                                          }),
                                        ],
                                      },
                                      se
                                    )
                                  ),
                                }),
                            ],
                          }),
                          r.jsxs("div", {
                            className: "relative",
                            children: [
                              r.jsx("input", {
                                ref: w,
                                type: "text",
                                value: m,
                                onChange: (E) => z(E.target.value),
                                onFocus: () => {
                                  m.trim() && z(m);
                                },
                                placeholder: "人員 ID",
                                className:
                                  "w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                              }),
                              v &&
                                r.jsx("div", {
                                  ref: k,
                                  className:
                                    "absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-40 overflow-y-auto",
                                  children: Q.map((E, se) =>
                                    r.jsxs(
                                      "div",
                                      {
                                        onClick: () => be(E),
                                        className:
                                          "px-3 py-2 hover:bg-blue-50 cursor-pointer transition-colors",
                                        children: [
                                          r.jsx("div", {
                                            className:
                                              "font-medium text-gray-900 text-sm",
                                            children: E.ID,
                                          }),
                                          r.jsx("div", {
                                            className: "text-xs text-gray-500",
                                            children: E.name,
                                          }),
                                        ],
                                      },
                                      se
                                    )
                                  ),
                                }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  r.jsxs("div", {
                    className: "space-y-1",
                    children: [
                      r.jsxs("div", {
                        children: [
                          r.jsx("span", {
                            className: "text-sm font-semibold text-gray-600",
                            children: "藥名",
                          }),
                          r.jsx("div", {
                            className: "text-base text-gray-800 mt-1",
                            children: s.name || "-",
                          }),
                        ],
                      }),
                      r.jsxs("div", {
                        children: [
                          r.jsx("span", {
                            className: "text-sm font-semibold text-gray-600",
                            children: "藥碼",
                          }),
                          r.jsx("div", {
                            className: "text-base text-gray-800 mt-1",
                            children: s.code || "-",
                          }),
                        ],
                      }),
                      r.jsxs("div", {
                        children: [
                          r.jsx("span", {
                            className: "text-sm font-semibold text-gray-600",
                            children: n === "requisition" ? "申領量" : "撥發量",
                          }),
                          r.jsx("div", {
                            className: "text-base text-gray-800 mt-1",
                            children: G || "-",
                          }),
                        ],
                      }),
                    ],
                  }),
                  r.jsxs("div", {
                    children: [
                      r.jsx("label", {
                        className:
                          "text-base font-semibold text-gray-600 block mb-2",
                        children: "實際撥發量",
                      }),
                      r.jsx("input", {
                        type: "text",
                        value: l,
                        disabled: !0,
                        className:
                          "w-full px-4 py-3 text-lg font-semibold text-gray-800 bg-gray-100 border border-gray-300 rounded-lg",
                      }),
                    ],
                  }),
                  r.jsxs("div", {
                    className: "grid grid-cols-4 gap-2",
                    children: [
                      r.jsx("button", {
                        onClick: () => fe("7"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "7",
                      }),
                      r.jsx("button", {
                        onClick: () => fe("8"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "8",
                      }),
                      r.jsx("button", {
                        onClick: () => fe("9"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "9",
                      }),
                      r.jsx("button", {
                        onClick: () => U("÷"),
                        className:
                          "py-4 text-lg font-semibold bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-lg transition-colors",
                        children: "÷",
                      }),
                      r.jsx("button", {
                        onClick: () => fe("4"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "4",
                      }),
                      r.jsx("button", {
                        onClick: () => fe("5"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "5",
                      }),
                      r.jsx("button", {
                        onClick: () => fe("6"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "6",
                      }),
                      r.jsx("button", {
                        onClick: () => U("×"),
                        className:
                          "py-4 text-lg font-semibold bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-lg transition-colors",
                        children: "×",
                      }),
                      r.jsx("button", {
                        onClick: () => fe("1"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "1",
                      }),
                      r.jsx("button", {
                        onClick: () => fe("2"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "2",
                      }),
                      r.jsx("button", {
                        onClick: () => fe("3"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "3",
                      }),
                      r.jsx("button", {
                        onClick: () => U("-"),
                        className:
                          "py-4 text-lg font-semibold bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-lg transition-colors",
                        children: "-",
                      }),
                      r.jsx("button", {
                        onClick: () => fe("0"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "0",
                      }),
                      r.jsx("button", {
                        onClick: ve,
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: ".",
                      }),
                      r.jsx("button", {
                        onClick: F,
                        className:
                          "py-4 text-lg font-semibold bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors",
                        children: "=",
                      }),
                      r.jsx("button", {
                        onClick: () => U("+"),
                        className:
                          "py-4 text-lg font-semibold bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-lg transition-colors",
                        children: "+",
                      }),
                    ],
                  }),
                ],
              }),
            }),
            r.jsxs("div", {
              className:
                "flex items-center justify-end gap-2 p-3 border-t border-gray-200 bg-gray-50",
              children: [
                r.jsx("button", {
                  onClick: me,
                  className:
                    "px-6 py-2.5 font-semibold text-white bg-red-500 hover:bg-red-600 rounded-lg transition-colors",
                  children: "清除",
                }),
                r.jsx("button", {
                  onClick: t,
                  className:
                    "px-6 py-2.5 font-semibold text-gray-700 bg-white border border-gray-300 hover:bg-gray-100 rounded-lg transition-colors",
                  children: "取消",
                }),
                r.jsx("button", {
                  onClick: ue,
                  disabled: C,
                  className:
                    "px-6 py-2.5 font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                  children: C ? "處理中..." : "核撥",
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  Bh = ({
    isOpen: e,
    onClose: t,
    medicineInfo: n,
    requisitions: s,
    distributions: o,
    onNoticeUpdated: l,
  }) => {
    const { setHighlightedMedicineCode: a } = Xe(),
      [i, c] = f.useState(s),
      [x, g] = f.useState(o),
      [h, p] = f.useState(null),
      [j, S] = f.useState(!1),
      [C, R] = f.useState(null),
      [d, u] = f.useState("requisition"),
      [m, D] = f.useState(!1),
      [T, _] = f.useState(!1);
    ao.useEffect(() => {
      c(s), g(o);
    }, [s, o]),
      f.useEffect(
        () => () => {
          ls.cleanup();
        },
        []
      );
    const P = async () => {
        var b;
        if (n && !T) {
          if (!n.serverName || !n.serverType) {
            alert("無法取得藥品位置資訊");
            return;
          }
          _(!0);
          try {
            const L = localStorage.getItem("medMap_setting");
            let w = "255,0,0",
              N = "1",
              k = 60;
            if (L)
              try {
                const M = JSON.parse(L);
                (w =
                  {
                    blue: "255,0,0",
                    green: "0,255,0",
                    red: "0,0,255",
                    yellow: "0,255,255",
                    purple: "255,0,255",
                    cyan: "255,255,0",
                  }[M.light_color] || "255,0,0"),
                  (N =
                    ((b = M.brightness) == null ? void 0 : b.toString()) ||
                    "1"),
                  (k = M.light_sec || 60);
              } catch (M) {
                console.error("讀取設定失敗:", M);
              }
            if (m) await ls.turnOffAllLights(), D(!1), a(null);
            else {
              const M = [
                {
                  serverName: n.serverName,
                  serverType: n.serverType,
                  medicineCode: n.code,
                },
              ];
              await ls.startLighting(M, w, N, k * 1e3, () => {
                D(!1), a(null);
              }),
                D(!0),
                a(n.code);
            }
          } catch (L) {
            console.error("亮燈操作失敗:", L);
          } finally {
            _(!1);
          }
        }
      },
      V = async (b) => {
        const L = b.notice === "True" ? "False" : "True";
        p(b.GUID);
        const w = [...i],
          N = w.findIndex((k) => k.GUID === b.GUID);
        if (N === -1) {
          p(null);
          return;
        }
        (w[N] = { ...b, notice: L }), c(w);
        try {
          const k = await De.updateRequisitionNotice(b.GUID, L);
          k.Code !== 200
            ? ((w[N] = { ...b, notice: b.notice }),
              c(w),
              console.error("更新申領通知狀態失敗:", k))
            : l && l();
        } catch (k) {
          (w[N] = { ...b, notice: b.notice }),
            c(w),
            console.error("更新申領通知狀態失敗:", k);
        } finally {
          p(null);
        }
      },
      Q = async (b) => {
        const L = b.notice === "True" ? "False" : "True";
        p(b.GUID);
        const w = [...x],
          N = w.findIndex((k) => k.GUID === b.GUID);
        if (N === -1) {
          p(null);
          return;
        }
        (w[N] = { ...b, notice: L }), g(w);
        try {
          const k = await De.updateDistributionNotice(b.GUID, L);
          k.Code !== 200
            ? ((w[N] = { ...b, notice: b.notice }),
              g(w),
              console.error("更新撥補通知狀態失敗:", k))
            : l && l();
        } catch (k) {
          (w[N] = { ...b, notice: b.notice }),
            g(w),
            console.error("更新撥補通知狀態失敗:", k);
        } finally {
          p(null);
        }
      };
    if (!e || !n) return null;
    const K = i.filter((b) => b.state === "等待過帳"),
      pe = x.filter((b) => b.state === "等待過帳"),
      ye = K.length === 0 && pe.length === 0,
      v = (b) => {
        if (!b || b === "1/01/01 00:00:00" || b === "0001-01-01T00:00:00")
          return "-";
        try {
          const L = new Date(b);
          if (isNaN(L.getTime())) return b;
          const w = L.getFullYear(),
            N = String(L.getMonth() + 1).padStart(2, "0"),
            k = String(L.getDate()).padStart(2, "0"),
            M = String(L.getHours()).padStart(2, "0"),
            J = String(L.getMinutes()).padStart(2, "0");
          return `${w}/${N}/${k} ${M}:${J}`;
        } catch {
          return b;
        }
      };
    return r.jsxs("div", {
      className: "fixed inset-0 z-[60] flex items-center justify-center",
      children: [
        r.jsx("div", {
          className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
          onClick: t,
        }),
        r.jsxs("div", {
          className:
            "relative w-full max-w-4xl max-h-[90vh] bg-white shadow-2xl rounded-lg overflow-hidden flex flex-col m-4",
          children: [
            r.jsxs("div", {
              className:
                "flex items-center justify-between px-4 py-3 border-b border-gray-200",
              children: [
                r.jsxs("div", {
                  className: "flex gap-4 items-center",
                  children: [
                    r.jsx("h2", {
                      className: "text-xl font-bold text-gray-800",
                      children: "藥品核撥",
                    }),
                    r.jsx("button", {
                      onClick: P,
                      disabled: T,
                      className: `p-2 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed ${
                        m
                          ? "bg-green-500 text-white hover:bg-green-600 shadow-lg"
                          : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                      }`,
                      title: m ? "點擊關燈" : "點擊亮燈",
                      children: r.jsx(ih, {
                        className: "w-6 h-6",
                        fill: m ? "currentColor" : "none",
                      }),
                    }),
                  ],
                }),
                r.jsx("div", {
                  className: "flex items-center gap-2",
                  children: r.jsx("button", {
                    onClick: t,
                    className:
                      "p-2 hover:bg-white/50 rounded-full transition-colors",
                    title: "關閉",
                    children: r.jsx(Fe, { className: "w-6 h-6 text-gray-700" }),
                  }),
                }),
              ],
            }),
            r.jsx("div", {
              className: "px-3 py-2 bg-gray-50 border-b border-gray-200",
              children: r.jsxs("div", {
                className: "grid grid-cols-2 gap-2",
                children: [
                  r.jsxs("div", {
                    className: "col-span-2",
                    children: [
                      r.jsx("span", {
                        className: "font-semibold text-gray-600",
                        children: "藥名：",
                      }),
                      r.jsx("span", {
                        className: "text-gray-800",
                        children: n.name || "-",
                      }),
                    ],
                  }),
                  r.jsxs("div", {
                    children: [
                      r.jsx("span", {
                        className: "font-semibold text-gray-600",
                        children: "料號：",
                      }),
                      r.jsx("span", {
                        className: "text-gray-800",
                        children: n.skdiacode || "-",
                      }),
                    ],
                  }),
                  r.jsxs("div", {
                    children: [
                      r.jsx("span", {
                        className: "font-semibold text-gray-600",
                        children: "藥碼：",
                      }),
                      r.jsx("span", {
                        className: "text-gray-800",
                        children: n.code || "-",
                      }),
                    ],
                  }),
                  n.cht_name &&
                    r.jsxs("div", {
                      className: "col-span-2",
                      children: [
                        r.jsx("span", {
                          className: "font-semibold text-gray-600",
                          children: "中文名：",
                        }),
                        r.jsx("span", {
                          className: "text-gray-800",
                          children: n.cht_name,
                        }),
                      ],
                    }),
                ],
              }),
            }),
            r.jsx("div", {
              className: "flex-1 overflow-y-auto p-4",
              children: ye
                ? r.jsx("div", {
                    className:
                      "flex items-center justify-center h-40 text-gray-400 text-lg",
                    children: "無藥品需求",
                  })
                : r.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      K.map((b, L) =>
                        r.jsxs(
                          "div",
                          {
                            className:
                              "border border-blue-200 rounded-lg p-3 bg-blue-50 hover:shadow-md transition-shadow",
                            onClick: () => {
                              u("requisition"), R(b), S(!0);
                            },
                            children: [
                              r.jsxs("div", {
                                className:
                                  "flex items-center justify-between gap-2 mb-2",
                                children: [
                                  r.jsxs("div", {
                                    className: "flex items-center gap-6",
                                    children: [
                                      r.jsx("span", {
                                        className:
                                          "underline font-medium text-xl font-semibold text-gray-700",
                                        children: "申領",
                                      }),
                                      r.jsx("button", {
                                        onClick: (w) => {
                                          w.stopPropagation(), V(b);
                                        },
                                        disabled: h === b.GUID,
                                        className: `p-2 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110 ${
                                          b.notice === "True"
                                            ? "bg-green-500 text-white hover:bg-green-600"
                                            : "bg-gray-300 text-gray-600 hover:bg-gray-400"
                                        }`,
                                        title:
                                          b.notice === "True"
                                            ? "點擊關閉通知"
                                            : "點擊開啟通知",
                                        children: r.jsx(jc, {
                                          className: "w-5 h-5",
                                        }),
                                      }),
                                    ],
                                  }),
                                  r.jsx("span", {
                                    className: `px-3 text-sm py-2 text-white font-semibold rounded-full ${
                                      b.actionType.includes("緊急")
                                        ? "bg-green-600"
                                        : "bg-blue-600"
                                    }`,
                                    children: b.actionType,
                                  }),
                                ],
                              }),
                              r.jsxs("div", {
                                className: "grid grid-cols-2 gap-2",
                                children: [
                                  r.jsxs("div", {
                                    children: [
                                      r.jsx("span", {
                                        className:
                                          "font-semibold text-gray-600",
                                        children: "申領單位：",
                                      }),
                                      r.jsx("span", {
                                        className: "text-gray-800",
                                        children: b.requestingUnit || "-",
                                      }),
                                    ],
                                  }),
                                  r.jsxs("div", {
                                    children: [
                                      r.jsx("span", {
                                        className:
                                          "font-semibold text-gray-600",
                                        children: "申領人：",
                                      }),
                                      r.jsx("span", {
                                        className: "text-gray-800",
                                        children: b.requestingPerson || "-",
                                      }),
                                    ],
                                  }),
                                  r.jsxs("div", {
                                    children: [
                                      r.jsx("span", {
                                        className:
                                          "font-semibold text-gray-600",
                                        children: "申領數量：",
                                      }),
                                      r.jsx("span", {
                                        className: "text-gray-800",
                                        children: b.requestedQuantity || "-",
                                      }),
                                    ],
                                  }),
                                  r.jsxs("div", {
                                    children: [
                                      r.jsx("span", {
                                        className:
                                          "font-semibold text-gray-600",
                                        children: "申領時間：",
                                      }),
                                      r.jsx("span", {
                                        className: "text-gray-800",
                                        children: v(b.requestTime),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          },
                          b.GUID
                        )
                      ),
                      pe.map((b, L) =>
                        r.jsxs(
                          "div",
                          {
                            className:
                              "border border-yellow-200 rounded-lg p-3 bg-yellow-50 hover:shadow-md transition-shadow",
                            onClick: () => {
                              u("distribution"), R(b), S(!0);
                            },
                            children: [
                              r.jsxs("div", {
                                className: "flex items-center gap-6 mb-2",
                                children: [
                                  r.jsx("span", {
                                    className:
                                      "underline font-medium text-xl rounded-full text-gray-700",
                                    children: "撥補",
                                  }),
                                  r.jsx("button", {
                                    onClick: (w) => {
                                      w.stopPropagation(), Q(b);
                                    },
                                    disabled: h === b.GUID,
                                    className: `p-2 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110 ${
                                      b.notice === "True"
                                        ? "bg-green-500 text-white hover:bg-green-600"
                                        : "bg-gray-300 text-gray-600 hover:bg-gray-400"
                                    }`,
                                    title:
                                      b.notice === "True"
                                        ? "點擊關閉通知"
                                        : "點擊開啟通知",
                                    children: r.jsx(jc, {
                                      className: "w-5 h-5",
                                    }),
                                  }),
                                ],
                              }),
                              r.jsxs("div", {
                                className: "grid grid-cols-2 gap-3",
                                children: [
                                  r.jsxs("div", {
                                    children: [
                                      r.jsx("span", {
                                        className:
                                          "font-semibold text-gray-600",
                                        children: "來源庫別：",
                                      }),
                                      r.jsx("span", {
                                        className: "text-gray-800",
                                        children: b.sourceStoreType || "-",
                                      }),
                                    ],
                                  }),
                                  r.jsxs("div", {
                                    children: [
                                      r.jsx("span", {
                                        className:
                                          "font-semibold text-gray-600",
                                        children: "目的庫別：",
                                      }),
                                      r.jsx("span", {
                                        className: "text-gray-800",
                                        children: b.destinationStoreType || "-",
                                      }),
                                    ],
                                  }),
                                  r.jsxs("div", {
                                    children: [
                                      r.jsx("span", {
                                        className:
                                          "font-semibold text-gray-600",
                                        children: "批號：",
                                      }),
                                      r.jsx("span", {
                                        className: "text-gray-800",
                                        children: b.LOT || "-",
                                      }),
                                    ],
                                  }),
                                  r.jsxs("div", {
                                    children: [
                                      r.jsx("span", {
                                        className:
                                          "font-semibold text-gray-600",
                                        children: "效期：",
                                      }),
                                      r.jsx("span", {
                                        className: "text-gray-800",
                                        children: b.VAL || "-",
                                      }),
                                    ],
                                  }),
                                  r.jsxs("div", {
                                    children: [
                                      r.jsx("span", {
                                        className:
                                          "font-semibold text-gray-600",
                                        children: "撥補數量：",
                                      }),
                                      r.jsx("span", {
                                        className: "text-gray-800",
                                        children: b.issuedQuantity || "-",
                                      }),
                                    ],
                                  }),
                                  r.jsxs("div", {
                                    children: [
                                      r.jsx("span", {
                                        className:
                                          "font-semibold text-gray-600",
                                        children: "建表人員：",
                                      }),
                                      r.jsx("span", {
                                        className: "text-gray-800",
                                        children: b.reportName || "-",
                                      }),
                                    ],
                                  }),
                                  r.jsxs("div", {
                                    className: "col-span-2",
                                    children: [
                                      r.jsx("span", {
                                        className:
                                          "font-semibold text-gray-600",
                                        children: "建立時間：",
                                      }),
                                      r.jsx("span", {
                                        className: "text-gray-800",
                                        children: v(b.addedTime),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          },
                          b.GUID
                        )
                      ),
                    ],
                  }),
            }),
          ],
        }),
        r.jsx(Uh, {
          isOpen: j,
          onClose: () => S(!1),
          type: d,
          data: C,
          onApprove: l,
        }),
      ],
    });
  },
  zh = ({ isOpen: e, onClose: t, container: n }) => {
    const [s, o] = f.useState("list_mode"),
      { highlightedMedicineCode: l, apiDepartmentData: a } = Xe(),
      [i, c] = f.useState(!1),
      [x, g] = f.useState([]),
      [h, p] = f.useState([]),
      [j, S] = f.useState([]),
      [C, R] = f.useState(!1),
      [d, u] = f.useState(null),
      m = f.useRef(null),
      D = f.useRef(null),
      T = f.useCallback(
        (v) => {
          if (!a || !v) return null;
          const b = (L) => {
            for (const w of L) {
              if (w.GUID === v) return w;
              if (w.contents && Array.isArray(w.contents)) {
                const N = b(w.contents);
                if (N) return N;
              }
            }
            return null;
          };
          for (const L of a) {
            if (L.GUID === v) return L;
            if (L.contents && Array.isArray(L.contents)) {
              const w = b(L.contents);
              if (w) return w;
            }
          }
          return null;
        },
        [a]
      ),
      _ = n ? T(n.GUID) || n : null,
      P = () => {
        try {
          const b = localStorage.getItem("medMap_setting");
          if (b) {
            const w = JSON.parse(b).light_sec;
            if (w != null && w !== "") {
              const N = Number(w);
              if (!isNaN(N) && N > 0) return N * 1e3;
            }
          }
        } catch (b) {
          console.error("讀取亮燈設定失敗:", b);
        }
        return 6e4;
      },
      V = () => {
        try {
          const v = localStorage.getItem("medMap_setting");
          if (v) return JSON.parse(v).light_color || "red";
        } catch (v) {
          console.error("讀取高亮顏色設定失敗:", v);
        }
        return "red";
      },
      Q = f.useCallback(async () => {
        try {
          const v = new Date(),
            b = `${v.getFullYear()}-${String(v.getMonth() + 1).padStart(
              2,
              "0"
            )}-${String(v.getDate()).padStart(2, "0")} 00:00:00`,
            L = `${v.getFullYear()}-${String(v.getMonth() + 1).padStart(
              2,
              "0"
            )}-${String(v.getDate()).padStart(2, "0")} 23:59:59`,
            [w, N] = await Promise.all([
              De.getRequisitionByTime(b, L),
              De.getDistributionByTime(b, L),
            ]),
            k = [];
          if (w.Code === 200 && w.Data) {
            const M = w.Data.filter((z) => {
              var X;
              return (X = _ == null ? void 0 : _.med_list) == null
                ? void 0
                : X.some((be) => be.code === z.code);
            });
            p(M),
              M.filter(
                (z) => z.state === "等待過帳" && z.notice === "True"
              ).forEach((z) => {
                z.code && k.push(z.code);
              });
          }
          if (N.Code === 200 && N.Data) {
            const M = N.Data.filter((z) => {
              var X;
              return (X = _ == null ? void 0 : _.med_list) == null
                ? void 0
                : X.some((be) => be.code === z.code);
            });
            S(M),
              M.filter(
                (z) => z.state === "等待過帳" && z.notice === "True"
              ).forEach((z) => {
                z.code && (k.includes(z.code) || k.push(z.code));
              });
          }
          g(k);
        } catch (v) {
          console.error("檢查申領撥補資料失敗:", v);
        }
      }, [_]);
    f.useEffect(
      () => (
        e
          ? (Q(),
            D.current && clearInterval(D.current),
            (D.current = setInterval(() => {
              Q();
            }, 1e4)))
          : D.current && (clearInterval(D.current), (D.current = null)),
        () => {
          D.current && (clearInterval(D.current), (D.current = null));
        }
      ),
      [e, Q]
    ),
      f.useEffect(() => {
        var v;
        _ &&
          console.log("🔄 ContainerDetailModal: currentContainer updated", {
            GUID: _.GUID,
            name: _.name,
            medListCount: ((v = _.med_list) == null ? void 0 : v.length) || 0,
          });
      }, [_]),
      f.useEffect(() => {
        if (
          (console.log("容器資料：", _),
          console.log("🔍 ContainerDetailModal - 亮燈狀態檢查:", {
            isOpen: e,
            highlightedMedicineCode: l,
            containerName: _ == null ? void 0 : _.name,
          }),
          e && l)
        ) {
          c(!0);
          const v = P();
          console.log("✅ ContainerDetailModal - 啟動亮燈:", {
            medicineCode: l,
            duration: v / 1e3 + "秒",
          }),
            m.current && clearTimeout(m.current),
            (m.current = setTimeout(() => {
              console.log("⏱️ ContainerDetailModal - 亮燈時間結束"),
                c(!1),
                (m.current = null);
            }, v));
        } else c(!1);
        return () => {
          m.current && clearTimeout(m.current);
        };
      }, [e, l]);
    const K = (v) => {
      var w, N;
      h.filter((k) => k.code === v.code), j.filter((k) => k.code === v.code);
      const b = (k) => {
          for (const M of k) {
            if (M.type === "store_shelves" && M.medMapStock) {
              const J = M.medMapStock.find((z) => z.code === v.code);
              if (J) return { stock: J, shelf: M };
            }
            if (M.contents && M.contents.length > 0) {
              const J = b(M.contents);
              if (J) return J;
            }
          }
          return null;
        },
        L = n ? b([n]) : null;
      u({
        code: v.code,
        name: v.name,
        cht_name: v.cht_name,
        skdiacode: v.SKDIACODE || v.skdiacode,
        serverName:
          (w = L == null ? void 0 : L.shelf) == null ? void 0 : w.serverName,
        serverType:
          (N = L == null ? void 0 : L.shelf) == null ? void 0 : N.serverType,
      }),
        R(!0);
    };
    if (!e) return null;
    const pe = () => {
        if (!(_ != null && _.med_list) || _.med_list.length === 0)
          return r.jsx("div", {
            className: "flex items-center justify-center h-full text-gray-400",
            children: r.jsx("p", { children: "無藥品資料" }),
          });
        const v = [..._.med_list].sort((b, L) => b.code.localeCompare(L.code));
        return r.jsx("div", {
          className: "overflow-y-auto h-full",
          children: r.jsxs("table", {
            className: "w-full border-collapse",
            children: [
              r.jsx("thead", {
                className: "sticky top-0",
                children: r.jsxs("tr", {
                  children: [
                    r.jsx("th", {
                      className:
                        "border border-gray-300 px-1 py-2 text-left text-sm font-semibold text-gray-700",
                      children: "藥品代碼",
                    }),
                    r.jsx("th", {
                      className:
                        "border border-gray-300 px-1 py-2 text-left text-sm font-semibold text-gray-700",
                      children: "料號",
                    }),
                    r.jsx("th", {
                      className:
                        "border border-gray-300 px-1 py-2 text-left text-sm font-semibold text-gray-700",
                      children: "藥品名稱",
                    }),
                    r.jsx("th", {
                      className:
                        "border border-gray-300 px-1 py-2 text-left text-sm font-semibold text-gray-700 text-right",
                      children: "數量",
                    }),
                    r.jsx("th", {
                      className:
                        "border border-gray-300 px-1 py-2 text-left text-sm font-semibold text-gray-700 text-center",
                      children: "層",
                    }),
                    r.jsx("th", {
                      className:
                        "border border-gray-300 px-1 py-2 text-left text-sm font-semibold text-gray-700 text-center",
                      children: "格",
                    }),
                    r.jsx("th", {
                      className:
                        "border border-gray-300 px-1 py-2 text-left text-sm font-semibold text-gray-700 text-center",
                      children: "位",
                    }),
                  ],
                }),
              }),
              r.jsx("tbody", {
                children: v.map((b, L) => {
                  const w = i && l && b.code == l,
                    N = x.includes(b.code);
                  let k = 0;
                  b.qty.forEach((J) => {
                    k += +J;
                  }),
                    L === 0 &&
                      console.log("🧪 ContainerDetailModal - 第一筆藥品檢查:", {
                        medCode: b.code,
                        highlightedCode: l,
                        isHighlightActive: i,
                        isHighlighted: w,
                        isPendingRequisition: N,
                        comparison: `${b.code} == ${l} = ${b.code == l}`,
                      });
                  const M = V();
                  return r.jsxs(
                    "tr",
                    {
                      className: `transition-colors cursor-pointer ${
                        N
                          ? "highlight-breathe-red"
                          : w
                          ? `highlight-breathe-${M}`
                          : "hover:bg-gray-50"
                      }`,
                      onClick: () => K(b),
                      children: [
                        r.jsx("td", {
                          className: "border border-gray-300 px-1 py-2 text-sm",
                          children: b.code || "-",
                        }),
                        r.jsx("td", {
                          className: "border border-gray-300 px-1 py-2 text-sm",
                          children: b.SKDIACODE || "-",
                        }),
                        r.jsx("td", {
                          className: "border border-gray-300 px-1 py-2 text-sm",
                          children: b.name || "-",
                        }),
                        r.jsx("td", {
                          className:
                            "border border-gray-300 px-1 py-2 text-sm text-right",
                          children: k || "-",
                        }),
                        r.jsx("td", {
                          className:
                            "border border-gray-300 px-1 py-2 text-sm text-center",
                          children: b.stockCol || "-",
                        }),
                        r.jsx("td", {
                          className:
                            "border border-gray-300 px-1 py-2 text-sm text-center",
                          children: b.stockRow || "-",
                        }),
                        r.jsx("td", {
                          className:
                            "border border-gray-300 px-1 py-2 text-sm text-center",
                          children: b.stock || "-",
                        }),
                      ],
                    },
                    L
                  );
                }),
              }),
            ],
          }),
        });
      },
      ye = () =>
        n
          ? r.jsx(Lh, {
              container: _,
              highlightedMedicineCode: i ? l : null,
              pendingRequisitionCodes: x,
              onMedicineClick: K,
            })
          : r.jsx("div", {
              className:
                "flex items-center justify-center h-full text-gray-400",
              children: r.jsx("p", { children: "無容器資料" }),
            });
    return r.jsxs(r.Fragment, {
      children: [
        r.jsxs("div", {
          className: "fixed inset-0 z-50 flex items-center justify-center",
          children: [
            r.jsx("div", {
              className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
              onClick: t,
            }),
            r.jsxs("div", {
              className:
                "relative w-full h-full bg-white shadow-2xl overflow-hidden flex flex-col",
              children: [
                r.jsxs("div", {
                  className:
                    "flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-white",
                  children: [
                    r.jsxs("div", {
                      className:
                        "flex items-center gap-2 bg-gray-100 rounded-lg p-1",
                      children: [
                        r.jsx("button", {
                          onClick: () => o("list_mode"),
                          className: `px-4 py-2 rounded-md text-sm font-medium transition-all ${
                            s === "list_mode"
                              ? "bg-white text-gray-900 shadow-sm"
                              : "text-gray-600 hover:text-gray-900"
                          }`,
                          children: "清單",
                        }),
                        r.jsx("button", {
                          onClick: () => o("view_mode"),
                          className: `px-4 py-2 rounded-md text-sm font-medium transition-all ${
                            s === "view_mode"
                              ? "bg-white text-gray-900 shadow-sm"
                              : "text-gray-600 hover:text-gray-900"
                          }`,
                          children: "視圖",
                        }),
                      ],
                    }),
                    r.jsx("button", {
                      onClick: t,
                      className:
                        "p-2 hover:bg-gray-100 rounded-full transition-colors",
                      title: "關閉",
                      children: r.jsx(Fe, {
                        className: "w-6 h-6 text-gray-700",
                      }),
                    }),
                  ],
                }),
                r.jsx("div", {
                  className: "flex-1 overflow-hidden p-3",
                  children: s === "list_mode" ? pe() : ye(),
                }),
              ],
            }),
          ],
        }),
        r.jsx(Bh, {
          isOpen: C,
          onClose: () => R(!1),
          medicineInfo: d,
          requisitions: d ? h.filter((v) => v.code === d.code) : [],
          distributions: d ? j.filter((v) => v.code === d.code) : [],
          onNoticeUpdated: Q,
        }),
      ],
    });
  },
  Gh = () => {
    const {
        editStoreShelfModalOpen: e,
        closeEditStoreShelfModal: t,
        selectedStoreShelfForEdit: n,
        showNotification: s,
        updateContainerInLocalData: o,
      } = Xe(),
      [l, a] = f.useState({
        name: "",
        position: "",
        width: "85",
        height: "29",
        ip: "",
        serverName: "",
        serverType: "",
        deviceType: "",
      }),
      [i, c] = f.useState(!1);
    f.useEffect(() => {
      n &&
        e &&
        a({
          name: n.name || "",
          position: n.gird_position || "",
          width: n.width || "85",
          height: n.height || "29",
          ip: n.ip || "",
          serverName: n.serverName || "",
          serverType: n.serverType || "",
          deviceType: n.device_type || "",
        });
    }, [n, e]);
    const x = (p, j) => {
        a((S) => ({ ...S, [p]: j }));
      },
      g = async () => {
        if (n) {
          if (!l.name.trim()) {
            s("層架名稱不能為空", "error");
            return;
          }
          if (!l.position.trim()) {
            s("位置不能為空", "error");
            return;
          }
          c(!0);
          try {
            const p = {
                Data: [
                  {
                    Master_GUID: n.Master_GUID,
                    name: l.name.trim(),
                    position: l.position.trim(),
                    type: n.type,
                    width: l.width,
                    height: l.height,
                    ip_light: l.ip.trim(),
                    ip: l.ip.trim(),
                    device_type: l.deviceType,
                    serverName: l.serverName.trim(),
                    serverType: l.serverType.trim(),
                    GUID: n.GUID,
                  },
                ],
              },
              S = `${(await De.getConfig()).domain}/api/medmap/update_shelf`,
              R = await (
                await fetch(S, {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(p),
                })
              ).json();
            console.log(p),
              console.log(R),
              R.Code === 200
                ? (s("層架更新成功", "success"),
                  o(n.GUID, {
                    name: l.name.trim(),
                    gird_position: l.position.trim(),
                    width: l.width,
                    height: l.height,
                    ip: l.ip.trim(),
                    device_type: l.deviceType,
                    serverName: l.serverName.trim(),
                    serverType: l.serverType.trim(),
                  }),
                  t())
                : s(R.Result || "更新失敗", "error");
          } catch (p) {
            console.error("更新層架失敗:", p),
              s("更新失敗，請稍後再試", "error");
          } finally {
            c(!1);
          }
        }
      },
      h = () => {
        t();
      };
    return !e || !n
      ? null
      : r.jsxs("div", {
          className: "fixed inset-0 z-50 flex items-center justify-center",
          children: [
            r.jsx("div", {
              className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
              onClick: h,
            }),
            r.jsxs("div", {
              className:
                "relative flex flex-col bg-white rounded-xl shadow-2xl border border-gray-200 w-[600px]",
              onClick: (p) => p.stopPropagation(),
              children: [
                r.jsxs("div", {
                  className:
                    "flex items-center justify-between px-6 py-4 border-b border-gray-200",
                  children: [
                    r.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        r.jsx(yr, { className: "w-6 h-6 text-gray-600" }),
                        r.jsx("h2", {
                          className: "text-xl font-semibold text-gray-900",
                          children: "編輯層架設定",
                        }),
                      ],
                    }),
                    r.jsx("button", {
                      onClick: h,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: r.jsx(Fe, { className: "w-6 h-6" }),
                    }),
                  ],
                }),
                r.jsx("div", {
                  className: "flex-1 px-6 py-4 overflow-y-auto",
                  children: r.jsxs("div", {
                    className: "space-y-4",
                    children: [
                      r.jsxs("div", {
                        children: [
                          r.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-2",
                            children: "層架名稱",
                          }),
                          r.jsx("input", {
                            type: "text",
                            value: l.name,
                            onChange: (p) => x("name", p.target.value),
                            className:
                              "w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors",
                            placeholder: "請輸入層架名稱",
                          }),
                        ],
                      }),
                      r.jsxs("div", {
                        children: [
                          r.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-2",
                            children: "位置 (grid_position)",
                          }),
                          r.jsx("input", {
                            type: "text",
                            value: l.position,
                            onChange: (p) => x("position", p.target.value),
                            className:
                              "w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors",
                            placeholder: "例如：0,0",
                          }),
                        ],
                      }),
                      r.jsxs("div", {
                        className: "grid grid-cols-2 gap-4",
                        children: [
                          r.jsxs("div", {
                            children: [
                              r.jsx("label", {
                                className:
                                  "block text-sm font-medium text-gray-700 mb-2",
                                children: "寬度",
                              }),
                              r.jsx("input", {
                                type: "text",
                                value: l.width,
                                onChange: (p) => x("width", p.target.value),
                                className:
                                  "w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors",
                                placeholder: "85",
                              }),
                            ],
                          }),
                          r.jsxs("div", {
                            children: [
                              r.jsx("label", {
                                className:
                                  "block text-sm font-medium text-gray-700 mb-2",
                                children: "高度",
                              }),
                              r.jsx("input", {
                                type: "text",
                                value: l.height,
                                onChange: (p) => x("height", p.target.value),
                                className:
                                  "w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors",
                                placeholder: "29",
                              }),
                            ],
                          }),
                        ],
                      }),
                      r.jsxs("div", {
                        children: [
                          r.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-2",
                            children: "燈條IP",
                          }),
                          r.jsx("input", {
                            type: "text",
                            value: l.ip,
                            onChange: (p) => x("ip", p.target.value),
                            className:
                              "w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors",
                            placeholder: "請輸入燈條IP",
                          }),
                        ],
                      }),
                      r.jsxs("div", {
                        children: [
                          r.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-2",
                            children: "伺服器名稱",
                          }),
                          r.jsx("input", {
                            type: "text",
                            value: l.serverName,
                            onChange: (p) => x("serverName", p.target.value),
                            className:
                              "w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors",
                            placeholder: "請輸入伺服器名稱",
                          }),
                        ],
                      }),
                      r.jsxs("div", {
                        children: [
                          r.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-2",
                            children: "伺服器類型",
                          }),
                          r.jsx("input", {
                            type: "text",
                            value: l.serverType,
                            onChange: (p) => x("serverType", p.target.value),
                            className:
                              "w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors",
                            placeholder: "請輸入伺服器類型",
                          }),
                        ],
                      }),
                      r.jsxs("div", {
                        children: [
                          r.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-2",
                            children: "設備類型",
                          }),
                          r.jsxs("select", {
                            value: l.deviceType,
                            onChange: (p) => x("deviceType", p.target.value),
                            className:
                              "w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors bg-white",
                            children: [
                              r.jsx("option", {
                                value: "",
                                children: "請選擇設備類型",
                              }),
                              r.jsx("option", {
                                value: "RowsLED",
                                children: "RowsLED",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                r.jsxs("div", {
                  className:
                    "flex items-center justify-end space-x-3 py-4 px-6 border-t border-gray-200",
                  children: [
                    r.jsx("button", {
                      onClick: h,
                      disabled: i,
                      className:
                        "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50",
                      children: "取消",
                    }),
                    r.jsxs("button", {
                      onClick: g,
                      disabled: i,
                      className:
                        "px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center space-x-2",
                      children: [
                        i && r.jsx(Ct, { className: "w-4 h-4 animate-spin" }),
                        r.jsx("span", { children: i ? "更新中..." : "確認" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
  },
  Fh = () => {
    const {
        editParentContainerModalOpen: e,
        closeEditParentContainerModal: t,
        selectedParentContainerForEdit: n,
        showNotification: s,
        updateContainerInLocalData: o,
      } = Xe(),
      [l, a] = f.useState({
        name: "",
        position: "",
        ip_light: "",
        serverName: "",
        serverType: "",
        deviceType: "",
      }),
      [i, c] = f.useState(!1);
    f.useEffect(() => {
      n &&
        e &&
        a({
          name: n.name || "",
          position: n.gird_position || "",
          ip_light: n.ip_light || "",
          serverName: n.serverName || "",
          serverType: n.serverType || "",
          deviceType: n.device_type || "",
        });
    }, [n, e]);
    const x = (p, j) => {
        a((S) => ({ ...S, [p]: j }));
      },
      g = async () => {
        if (n) {
          if (!l.name.trim()) {
            s("名稱不能為空", "error");
            return;
          }
          if (!l.position.trim()) {
            s("位置不能為空", "error");
            return;
          }
          c(!0);
          try {
            let p = `${n.position.x},${n.position.y}`;
            const j = [
              {
                GUID: n.GUID,
                name: l.name.trim(),
                position: l.position.trim(),
                absolute_position: p || "0,0",
                ip_light: l.ip_light.trim(),
                serverName: l.serverName.trim(),
                serverType: l.serverType.trim(),
                device_type: l.deviceType,
              },
            ];
            console.log("=========", j, "=========");
            const S = await De.updateMedMapSection(j);
            S.Code === 200
              ? (s("父容器更新成功", "success"),
                o(n.GUID, {
                  name: l.name.trim(),
                  gird_position: l.position.trim(),
                  ip_light: l.ip_light.trim(),
                  serverName: l.serverName.trim(),
                  serverType: l.serverType.trim(),
                  device_type: l.deviceType,
                }),
                t())
              : s(S.Result || "更新失敗", "error");
          } catch (p) {
            console.error("更新父容器失敗:", p),
              s("更新失敗，請稍後再試", "error");
          } finally {
            c(!1);
          }
        }
      },
      h = () => {
        t();
      };
    return !e || !n
      ? null
      : r.jsxs("div", {
          className: "fixed inset-0 z-50 flex items-center justify-center",
          children: [
            r.jsx("div", {
              className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
              onClick: h,
            }),
            r.jsxs("div", {
              className:
                "relative flex flex-col bg-white rounded-xl shadow-2xl border border-gray-200 w-[600px]",
              onClick: (p) => p.stopPropagation(),
              children: [
                r.jsxs("div", {
                  className:
                    "flex items-center justify-between px-6 py-4 border-b border-gray-200",
                  children: [
                    r.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        r.jsx(yr, { className: "w-6 h-6 text-gray-600" }),
                        r.jsx("h2", {
                          className: "text-xl font-semibold text-gray-900",
                          children: "編輯父容器設定",
                        }),
                      ],
                    }),
                    r.jsx("button", {
                      onClick: h,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: r.jsx(Fe, { className: "w-6 h-6" }),
                    }),
                  ],
                }),
                r.jsx("div", {
                  className: "flex-1 px-6 py-4 overflow-y-auto",
                  children: r.jsxs("div", {
                    className: "space-y-4",
                    children: [
                      r.jsxs("div", {
                        children: [
                          r.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-2",
                            children: "容器名稱",
                          }),
                          r.jsx("input", {
                            type: "text",
                            value: l.name,
                            onChange: (p) => x("name", p.target.value),
                            className:
                              "w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors",
                            placeholder: "請輸入容器名稱",
                          }),
                        ],
                      }),
                      r.jsxs("div", {
                        children: [
                          r.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-2",
                            children: "位置 (grid_position)",
                          }),
                          r.jsx("input", {
                            type: "text",
                            value: l.position,
                            onChange: (p) => x("position", p.target.value),
                            className:
                              "w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors",
                            placeholder: "例如：0,0",
                          }),
                        ],
                      }),
                      r.jsxs("div", {
                        children: [
                          r.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-2",
                            children: "燈棒IP",
                          }),
                          r.jsx("input", {
                            type: "text",
                            value: l.ip_light,
                            onChange: (p) => x("ip_light", p.target.value),
                            className:
                              "w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors",
                            placeholder: "請輸入燈棒IP",
                          }),
                        ],
                      }),
                      r.jsxs("div", {
                        children: [
                          r.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-2",
                            children: "伺服器名稱",
                          }),
                          r.jsx("input", {
                            type: "text",
                            value: l.serverName,
                            onChange: (p) => x("serverName", p.target.value),
                            className:
                              "w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors",
                            placeholder: "請輸入伺服器名稱",
                          }),
                        ],
                      }),
                      r.jsxs("div", {
                        children: [
                          r.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-2",
                            children: "伺服器類型",
                          }),
                          r.jsx("input", {
                            type: "text",
                            value: l.serverType,
                            onChange: (p) => x("serverType", p.target.value),
                            className:
                              "w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors",
                            placeholder: "請輸入伺服器類型",
                          }),
                        ],
                      }),
                      r.jsxs("div", {
                        className: "hidden",
                        children: [
                          r.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-2",
                            children: "設備類型",
                          }),
                          r.jsxs("select", {
                            value: l.deviceType,
                            onChange: (p) => x("deviceType", p.target.value),
                            className:
                              "w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors bg-white",
                            children: [
                              r.jsx("option", {
                                value: "",
                                children: "請選擇設備類型",
                              }),
                              r.jsx("option", {
                                value: "RowsLED",
                                children: "RowsLED",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                r.jsxs("div", {
                  className:
                    "flex items-center justify-end space-x-3 py-4 px-6 border-t border-gray-200",
                  children: [
                    r.jsx("button", {
                      onClick: h,
                      disabled: i,
                      className:
                        "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50",
                      children: "取消",
                    }),
                    r.jsxs("button", {
                      onClick: g,
                      disabled: i,
                      className:
                        "px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center space-x-2",
                      children: [
                        i && r.jsx(Ct, { className: "w-4 h-4 animate-spin" }),
                        r.jsx("span", { children: i ? "更新中..." : "確認" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
  },
  Vh = ({ isOpen: e, onLoginSuccess: t }) => {
    const { t: n } = xt(),
      [s, o] = f.useState(""),
      [l, a] = f.useState(""),
      [i, c] = f.useState(!1),
      [x, g] = f.useState(!1),
      [h, p] = f.useState(""),
      j = async (C) => {
        if ((C.preventDefault(), !s.trim() || !l.trim())) {
          p("Please enter both ID and password");
          return;
        }
        g(!0), p("");
        try {
          const R = await De.login({ ID: s.trim(), Password: l });
          if (R.Code === 200 && R.Data) {
            const d = { ...R.Data, loginTime: new Date().toISOString() };
            sessionStorage.setItem("user_session", JSON.stringify(d)), t(d);
          } else p(R.Result || "Login failed");
        } catch (R) {
          console.error("Login failed:", R),
            p("Network error. Please try again.");
        } finally {
          g(!1);
        }
      },
      S = (C) => {
        C.key === "Enter" && !x && j(C);
      };
    return e
      ? r.jsxs("div", {
          className:
            "fixed inset-0 z-50 flex items-center justify-center bg-gray-900",
          children: [
            r.jsx("div", { className: "absolute inset-0 bg-white" }),
            r.jsxs("div", {
              className: "relative z-10 w-full max-w-md mx-4",
              children: [
                r.jsx("h1", {
                  className:
                    "text-3xl font-bold text-gray-900 mb-8 text-center",
                  children: n("login.title"),
                }),
                r.jsxs("div", {
                  className: "bg-white rounded-lg shadow-sm border p-4 md:p-6",
                  children: [
                    h &&
                      r.jsx("div", {
                        className:
                          "mb-6 p-4 bg-red-50 border border-red-200 rounded-lg",
                        children: r.jsx("p", {
                          className: "text-red-600 text-sm",
                          children: h,
                        }),
                      }),
                    r.jsxs("form", {
                      onSubmit: j,
                      className: "space-y-6",
                      children: [
                        r.jsxs("div", {
                          children: [
                            r.jsx("label", {
                              htmlFor: "userId",
                              className:
                                "block text-sm font-medium text-gray-700 mb-2",
                              children: n("login.userId"),
                            }),
                            r.jsx("input", {
                              id: "userId",
                              type: "text",
                              value: s,
                              onChange: (C) => o(C.target.value),
                              onKeyPress: S,
                              placeholder: n("login.userIdPlaceholder"),
                              className:
                                "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                              disabled: x,
                              autoComplete: "username",
                            }),
                          ],
                        }),
                        r.jsxs("div", {
                          children: [
                            r.jsx("label", {
                              htmlFor: "password",
                              className:
                                "block text-sm font-medium text-gray-700 mb-2",
                              children: n("login.password"),
                            }),
                            r.jsxs("div", {
                              className: "relative",
                              children: [
                                r.jsx("input", {
                                  id: "password",
                                  type: i ? "text" : "password",
                                  value: l,
                                  onChange: (C) => a(C.target.value),
                                  onKeyPress: S,
                                  placeholder: n("login.passwordPlaceholder"),
                                  className:
                                    "w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                                  disabled: x,
                                  autoComplete: "current-password",
                                }),
                                r.jsx("button", {
                                  type: "button",
                                  onClick: () => c(!i),
                                  className:
                                    "absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors",
                                  disabled: x,
                                  children: i
                                    ? r.jsx(Fu, { className: "w-5 h-5" })
                                    : r.jsx(Vu, { className: "w-5 h-5" }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        r.jsx("button", {
                          type: "submit",
                          disabled: x || !s.trim() || !l.trim(),
                          className:
                            "w-full flex items-center justify-center px-4 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed",
                          children: x
                            ? r.jsxs(r.Fragment, {
                                children: [
                                  r.jsx(Ct, {
                                    className: "w-5 h-5 animate-spin mr-2",
                                  }),
                                  n("login.loggingIn"),
                                ],
                              })
                            : r.jsx(r.Fragment, {
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
  Hh = ({ isVisible: e, message: t }) => {
    const { t: n } = xt();
    return e
      ? r.jsxs("div", {
          className: "fixed inset-0 z-[9999] flex items-center justify-center",
          children: [
            r.jsx("div", {
              className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
            }),
            r.jsx("div", {
              className:
                "relative z-10 flex flex-col items-center justify-center p-8",
              children: r.jsxs("div", {
                className:
                  "bg-white/95 backdrop-blur-sm border border-gray-200/50 rounded-2xl shadow-2xl px-8 py-6 flex flex-col items-center space-y-4 min-w-[280px]",
                children: [
                  r.jsxs("div", {
                    className: "flex items-center space-x-3 mb-2",
                    children: [
                      r.jsx("div", {
                        className: "p-3 bg-blue-100 rounded-full",
                        children: r.jsx(ui, {
                          className: "w-8 h-8 text-blue-600",
                        }),
                      }),
                      r.jsx("div", {
                        className: "text-xl font-semibold text-gray-900",
                        children: n("nav.title"),
                      }),
                    ],
                  }),
                  r.jsxs("div", {
                    className: "flex items-center space-x-3",
                    children: [
                      r.jsx(Ct, {
                        className: "w-8 h-8 text-blue-600 animate-spin",
                      }),
                      r.jsx("div", {
                        className: "text-lg font-medium text-gray-700",
                        children: t || n("status.loadingMedMapData"),
                      }),
                    ],
                  }),
                  r.jsx("div", {
                    className:
                      "w-full bg-gray-200 rounded-full h-2 overflow-hidden",
                    children: r.jsx("div", {
                      className:
                        "h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full animate-pulse",
                      style: { width: "100%" },
                    }),
                  }),
                  r.jsx("div", {
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
  qh = ({
    message: e,
    type: t,
    isVisible: n,
    onClose: s,
    duration: o = 3e3,
  }) => {
    const [l, a] = f.useState(!1);
    return (
      f.useEffect(() => {
        if (n) {
          a(!0);
          const i = setTimeout(() => {
            s();
          }, o);
          return () => clearTimeout(i);
        } else {
          const i = setTimeout(() => {
            a(!1);
          }, 300);
          return () => clearTimeout(i);
        }
      }, [n, o, s]),
      l
        ? r.jsx("div", {
            className: `fixed top-4 left-1/2 transform -translate-x-1/2 z-[9999] transition-all duration-300 ease-in-out ${
              n ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
            }`,
            children: r.jsxs("div", {
              className: `flex items-center space-x-3 px-4 py-3 rounded-lg shadow-lg border ${
                t === "success"
                  ? "bg-green-50 border-green-200 text-green-800"
                  : "bg-red-50 border-red-200 text-red-800"
              }`,
              children: [
                t === "success"
                  ? r.jsx(sh, { className: "w-5 h-5 text-green-600" })
                  : r.jsx(mh, { className: "w-5 h-5 text-red-600" }),
                r.jsx("span", {
                  className: "text-sm font-medium",
                  children: e,
                }),
                r.jsx("button", {
                  onClick: s,
                  className: `p-1 rounded-full hover:bg-black/10 transition-colors ${
                    t === "success" ? "text-green-600" : "text-red-600"
                  }`,
                  children: r.jsx(Fe, { className: "w-4 h-4" }),
                }),
              ],
            }),
          })
        : null
    );
  };
function Wh() {
  const {
    selectedDepartmentType: e,
    viewMode: t,
    isAuthenticated: n,
    setIsAuthenticated: s,
    setCurrentUser: o,
    isLoadingMedMap: l,
    notification: a,
    hideNotification: i,
    addParentContainerModalOpen: c,
    closeAddParentContainerModal: x,
    selectedDepartmentForAdd: g,
    addStoreItemModalOpen: h,
    closeAddStoreItemModal: p,
    selectedStoreShelfForAdd: j,
    addDepartmentModalOpen: S,
    closeAddDepartmentModal: C,
    qrCodeScannerModalOpen: R,
    qrCodeScannerMode: d,
    closeQRCodeScannerModal: u,
    addBarcodeModalOpen: m,
    closeAddBarcodeModal: D,
    initialBarcodeValue: T,
    containerDetailModalOpen: _,
    closeContainerDetailModal: P,
    selectedContainerForDetail: V,
    setMedicineList: Q,
    setIsLoadingMedicines: K,
    showNotification: pe,
  } = Xe();
  f.useEffect(() => {
    (() => {
      try {
        const w = sessionStorage.getItem("user_session");
        if (w) {
          const N = JSON.parse(w);
          N.GUID && N.ID && N.Name
            ? (o(N), s(!0))
            : sessionStorage.removeItem("user_session");
        }
      } catch (w) {
        console.error("Error checking session:", w),
          sessionStorage.removeItem("user_session");
      }
    })();
  }, [s, o]),
    f.useEffect(() => {
      let L = !0;
      return (
        (async () => {
          if (n) {
            K(!0);
            try {
              console.log("開始載入藥品資料...");
              const N = await De.getMedicineCloud();
              if ((console.log("藥品資料 API 回應:", N), !L)) return;
              N.Code === 200 && N.Data
                ? (Q(N.Data),
                  console.log(`✅ 成功載入 ${N.Data.length} 筆藥品資料`),
                  pe(`載入 ${N.Data.length} 筆藥品資料`, "success"))
                : (console.warn("API 回應異常:", N),
                  Q([]),
                  pe("藥品資料載入異常，請稍後重試", "error"));
            } catch (N) {
              if (!L) return;
              console.error("載入藥品資料失敗:", N),
                Q([]),
                pe("無法連線到藥品資料庫，部分功能可能無法使用", "error");
            } finally {
              L && K(!1);
            }
          }
        })(),
        () => {
          L = !1;
        }
      );
    }, [n]);
  const ye = (L) => {
      o(L), s(!0);
    },
    v = ao.useRef(null),
    b = (L, w) => {
      if (
        (console.log("📸 QR掃描成功 - handleQRScanSuccess 被調用:", {
          barcode: L,
          medicineData: w,
          mode: d,
        }),
        console.log("📸 當前 mode:", d),
        console.log("📸 當前 viewMode:", t),
        console.log("📸 drugCanvasRef.current:", v.current),
        d === "track_Drug_mode")
      ) {
        if ((console.log("✅ 進入 track_Drug_mode 分支"), t !== "medicine")) {
          console.warn("⚠️ 當前不在藥品地圖視圖，無法定位藥品"),
            pe("請切換到藥品地圖視圖後再使用此功能", "error");
          return;
        }
        v.current
          ? (console.log("✅ drugCanvasRef.current 存在"),
            console.log(
              "📸 drugCanvasRef.current.locateDrug 類型:",
              typeof v.current.locateDrug
            ),
            typeof v.current.locateDrug == "function"
              ? (console.log("✅ 呼叫 locateDrug 函數"),
                v.current.locateDrug(w))
              : console.warn("⚠️ locateDrug 不是函數"))
          : console.warn("⚠️ drugCanvasRef.current 不存在");
      } else console.log("⚠️ mode 不是 track_Drug_mode，當前 mode:", d);
    };
  return n
    ? r.jsxs("div", {
        className: "min-h-screen bg-gray-50",
        children: [
          r.jsx(hh, {}),
          r.jsx(gh, {}),
          r.jsx(wh, {}),
          r.jsx("div", {
            className: "fixed inset-0",
            children: r.jsx("div", {
              className: "w-full h-full",
              children:
                t === "department" ? r.jsx(Sh, {}) : r.jsx(Wu, { ref: v }),
            }),
          }),
          r.jsx(bh, {}),
          r.jsx(Mh, {}),
          r.jsx(Eh, {}),
          r.jsx(Ih, {}),
          r.jsx(Ph, {}),
          r.jsx(Th, {}),
          r.jsx(Rh, {}),
          r.jsx(Ah, { isOpen: h, onClose: p, storeShelf: j }),
          r.jsx($h, { isOpen: S, onClose: C }),
          r.jsx(Xo, { isOpen: R, onClose: u, mode: d, onScanSuccess: b }),
          r.jsx(Oh, { isOpen: m, onClose: D, initialBarcode: T }),
          r.jsx(zh, { isOpen: _, onClose: P, container: V }),
          r.jsx(Gh, {}),
          r.jsx(Fh, {}),
          r.jsx(Hh, { isVisible: l }),
          r.jsx(qh, {
            message: a.message,
            type: a.type,
            isVisible: a.isVisible,
            onClose: i,
          }),
        ],
      })
    : r.jsx(Vh, { isOpen: !0, onLoginSuccess: ye });
}
function Yh() {
  return r.jsx(eh, { children: r.jsx(Jm, { children: r.jsx(Wh, {}) }) });
}
Lu(document.getElementById("root")).render(
  r.jsx(f.StrictMode, { children: r.jsx(Yh, {}) })
);
