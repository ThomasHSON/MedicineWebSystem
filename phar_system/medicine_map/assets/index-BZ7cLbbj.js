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
var Tc = { exports: {} },
  Uo = {},
  Rc = { exports: {} },
  Le = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Is = Symbol.for("react.element"),
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
  bi = Symbol.iterator;
function Tf(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (bi && e[bi]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var $c = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Ac = Object.assign,
  Oc = {};
function Ur(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Oc),
    (this.updater = n || $c);
}
Ur.prototype.isReactComponent = {};
Ur.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Ur.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Lc() {}
Lc.prototype = Ur.prototype;
function Sa(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Oc),
    (this.updater = n || $c);
}
var Ca = (Sa.prototype = new Lc());
Ca.constructor = Sa;
Ac(Ca, Ur.prototype);
Ca.isPureReactComponent = !0;
var Ni = Array.isArray,
  Uc = Object.prototype.hasOwnProperty,
  ka = { current: null },
  Bc = { key: !0, ref: !0, __self: !0, __source: !0 };
function zc(e, t, n) {
  var s,
    o = {},
    l = null,
    a = null;
  if (t != null)
    for (s in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (l = "" + t.key),
    t))
      Uc.call(t, s) && !Bc.hasOwnProperty(s) && (o[s] = t[s]);
  var i = arguments.length - 2;
  if (i === 1) o.children = n;
  else if (1 < i) {
    for (var c = Array(i), x = 0; x < i; x++) c[x] = arguments[x + 2];
    o.children = c;
  }
  if (e && e.defaultProps)
    for (s in ((i = e.defaultProps), i)) o[s] === void 0 && (o[s] = i[s]);
  return {
    $$typeof: Is,
    type: e,
    key: l,
    ref: a,
    props: o,
    _owner: ka.current,
  };
}
function Rf(e, t) {
  return {
    $$typeof: Is,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Da(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Is;
}
function $f(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var ji = /\/+/g;
function ol(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? $f("" + e.key)
    : t.toString(36);
}
function to(e, t, n, s, o) {
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
          case Is:
          case jf:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (o = o(a)),
      (e = s === "" ? "." + ol(a, 0) : s),
      Ni(o)
        ? ((n = ""),
          e != null && (n = e.replace(ji, "$&/") + "/"),
          to(o, t, n, "", function (x) {
            return x;
          }))
        : o != null &&
          (Da(o) &&
            (o = Rf(
              o,
              n +
                (!o.key || (a && a.key === o.key)
                  ? ""
                  : ("" + o.key).replace(ji, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((a = 0), (s = s === "" ? "." : s + ":"), Ni(e)))
    for (var i = 0; i < e.length; i++) {
      l = e[i];
      var c = s + ol(l, i);
      a += to(l, t, n, c, o);
    }
  else if (((c = Tf(e)), typeof c == "function"))
    for (e = c.call(e), i = 0; !(l = e.next()).done; )
      (l = l.value), (c = s + ol(l, i++)), (a += to(l, t, n, c, o));
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
function Os(e, t, n) {
  if (e == null) return e;
  var s = [],
    o = 0;
  return (
    to(e, s, "", "", function (l) {
      return t.call(n, l, o++);
    }),
    s
  );
}
function Af(e) {
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
var bt = { current: null },
  no = { transition: null },
  Of = {
    ReactCurrentDispatcher: bt,
    ReactCurrentBatchConfig: no,
    ReactCurrentOwner: ka,
  };
function Gc() {
  throw Error("act(...) is not supported in production builds of React.");
}
Le.Children = {
  map: Os,
  forEach: function (e, t, n) {
    Os(
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
      Os(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Os(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Da(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
Le.Component = Ur;
Le.Fragment = Sf;
Le.Profiler = kf;
Le.PureComponent = Sa;
Le.StrictMode = Cf;
Le.Suspense = Ef;
Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Of;
Le.act = Gc;
Le.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var s = Ac({}, e.props),
    o = e.key,
    l = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((l = t.ref), (a = ka.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var i = e.type.defaultProps;
    for (c in t)
      Uc.call(t, c) &&
        !Bc.hasOwnProperty(c) &&
        (s[c] = t[c] === void 0 && i !== void 0 ? i[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) s.children = n;
  else if (1 < c) {
    i = Array(c);
    for (var x = 0; x < c; x++) i[x] = arguments[x + 2];
    s.children = i;
  }
  return { $$typeof: Is, type: e.type, key: o, ref: l, props: s, _owner: a };
};
Le.createContext = function (e) {
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
Le.createElement = zc;
Le.createFactory = function (e) {
  var t = zc.bind(null, e);
  return (t.type = e), t;
};
Le.createRef = function () {
  return { current: null };
};
Le.forwardRef = function (e) {
  return { $$typeof: Mf, render: e };
};
Le.isValidElement = Da;
Le.lazy = function (e) {
  return { $$typeof: Pf, _payload: { _status: -1, _result: e }, _init: Af };
};
Le.memo = function (e, t) {
  return { $$typeof: If, type: e, compare: t === void 0 ? null : t };
};
Le.startTransition = function (e) {
  var t = no.transition;
  no.transition = {};
  try {
    e();
  } finally {
    no.transition = t;
  }
};
Le.unstable_act = Gc;
Le.useCallback = function (e, t) {
  return bt.current.useCallback(e, t);
};
Le.useContext = function (e) {
  return bt.current.useContext(e);
};
Le.useDebugValue = function () {};
Le.useDeferredValue = function (e) {
  return bt.current.useDeferredValue(e);
};
Le.useEffect = function (e, t) {
  return bt.current.useEffect(e, t);
};
Le.useId = function () {
  return bt.current.useId();
};
Le.useImperativeHandle = function (e, t, n) {
  return bt.current.useImperativeHandle(e, t, n);
};
Le.useInsertionEffect = function (e, t) {
  return bt.current.useInsertionEffect(e, t);
};
Le.useLayoutEffect = function (e, t) {
  return bt.current.useLayoutEffect(e, t);
};
Le.useMemo = function (e, t) {
  return bt.current.useMemo(e, t);
};
Le.useReducer = function (e, t, n) {
  return bt.current.useReducer(e, t, n);
};
Le.useRef = function (e) {
  return bt.current.useRef(e);
};
Le.useState = function (e) {
  return bt.current.useState(e);
};
Le.useSyncExternalStore = function (e, t, n) {
  return bt.current.useSyncExternalStore(e, t, n);
};
Le.useTransition = function () {
  return bt.current.useTransition();
};
Le.version = "18.3.1";
Rc.exports = Le;
var f = Rc.exports;
const mo = Nf(f);
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
function Fc(e, t, n) {
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
Uo.Fragment = Bf;
Uo.jsx = Fc;
Uo.jsxs = Fc;
Tc.exports = Uo;
var r = Tc.exports,
  Vc = { exports: {} },
  Lt = {},
  Hc = { exports: {} },
  qc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(D, I) {
    var ne = D.length;
    D.push(I);
    e: for (; 0 < ne; ) {
      var G = (ne - 1) >>> 1,
        W = D[G];
      if (0 < o(W, I)) (D[G] = I), (D[ne] = W), (ne = G);
      else break e;
    }
  }
  function n(D) {
    return D.length === 0 ? null : D[0];
  }
  function s(D) {
    if (D.length === 0) return null;
    var I = D[0],
      ne = D.pop();
    if (ne !== I) {
      D[0] = ne;
      e: for (var G = 0, W = D.length, je = W >>> 1; G < je; ) {
        var de = 2 * (G + 1) - 1,
          z = D[de],
          xe = de + 1,
          F = D[xe];
        if (0 > o(z, ne))
          xe < W && 0 > o(F, z)
            ? ((D[G] = F), (D[xe] = ne), (G = xe))
            : ((D[G] = z), (D[de] = ne), (G = de));
        else if (xe < W && 0 > o(F, ne)) (D[G] = F), (D[xe] = ne), (G = xe);
        else break e;
      }
    }
    return I;
  }
  function o(D, I) {
    var ne = D.sortIndex - I.sortIndex;
    return ne !== 0 ? ne : D.id - I.id;
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
    m = 3,
    j = !1,
    S = !1,
    M = !1,
    R = typeof setTimeout == "function" ? setTimeout : null,
    d = typeof clearTimeout == "function" ? clearTimeout : null,
    u = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(D) {
    for (var I = n(x); I !== null; ) {
      if (I.callback === null) s(x);
      else if (I.startTime <= D)
        s(x), (I.sortIndex = I.expirationTime), t(c, I);
      else break;
      I = n(x);
    }
  }
  function E(D) {
    if (((M = !1), p(D), !S))
      if (n(c) !== null) (S = !0), v(P);
      else {
        var I = n(x);
        I !== null && b(E, I.startTime - D);
      }
  }
  function P(D, I) {
    (S = !1), M && ((M = !1), d(V), (V = -1)), (j = !0);
    var ne = m;
    try {
      for (
        p(I), h = n(c);
        h !== null && (!(h.expirationTime > I) || (D && !ue()));

      ) {
        var G = h.callback;
        if (typeof G == "function") {
          (h.callback = null), (m = h.priorityLevel);
          var W = G(h.expirationTime <= I);
          (I = e.unstable_now()),
            typeof W == "function" ? (h.callback = W) : h === n(c) && s(c),
            p(I);
        } else s(c);
        h = n(c);
      }
      if (h !== null) var je = !0;
      else {
        var de = n(x);
        de !== null && b(E, de.startTime - I), (je = !1);
      }
      return je;
    } finally {
      (h = null), (m = ne), (j = !1);
    }
  }
  var _ = !1,
    T = null,
    V = -1,
    X = 5,
    J = -1;
  function ue() {
    return !(e.unstable_now() - J < X);
  }
  function we() {
    if (T !== null) {
      var D = e.unstable_now();
      J = D;
      var I = !0;
      try {
        I = T(!0, D);
      } finally {
        I ? N() : ((_ = !1), (T = null));
      }
    } else _ = !1;
  }
  var N;
  if (typeof u == "function")
    N = function () {
      u(we);
    };
  else if (typeof MessageChannel < "u") {
    var w = new MessageChannel(),
      L = w.port2;
    (w.port1.onmessage = we),
      (N = function () {
        L.postMessage(null);
      });
  } else
    N = function () {
      R(we, 0);
    };
  function v(D) {
    (T = D), _ || ((_ = !0), N());
  }
  function b(D, I) {
    V = R(function () {
      D(e.unstable_now());
    }, I);
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
      S || j || ((S = !0), v(P));
    }),
    (e.unstable_forceFrameRate = function (D) {
      0 > D || 125 < D
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (X = 0 < D ? Math.floor(1e3 / D) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(c);
    }),
    (e.unstable_next = function (D) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var I = 3;
          break;
        default:
          I = m;
      }
      var ne = m;
      m = I;
      try {
        return D();
      } finally {
        m = ne;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (D, I) {
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
      var ne = m;
      m = D;
      try {
        return I();
      } finally {
        m = ne;
      }
    }),
    (e.unstable_scheduleCallback = function (D, I, ne) {
      var G = e.unstable_now();
      switch (
        (typeof ne == "object" && ne !== null
          ? ((ne = ne.delay),
            (ne = typeof ne == "number" && 0 < ne ? G + ne : G))
          : (ne = G),
        D)
      ) {
        case 1:
          var W = -1;
          break;
        case 2:
          W = 250;
          break;
        case 5:
          W = 1073741823;
          break;
        case 4:
          W = 1e4;
          break;
        default:
          W = 5e3;
      }
      return (
        (W = ne + W),
        (D = {
          id: g++,
          callback: I,
          priorityLevel: D,
          startTime: ne,
          expirationTime: W,
          sortIndex: -1,
        }),
        ne > G
          ? ((D.sortIndex = ne),
            t(x, D),
            n(c) === null &&
              D === n(x) &&
              (M ? (d(V), (V = -1)) : (M = !0), b(E, ne - G)))
          : ((D.sortIndex = W), t(c, D), S || j || ((S = !0), v(P))),
        D
      );
    }),
    (e.unstable_shouldYield = ue),
    (e.unstable_wrapCallback = function (D) {
      var I = m;
      return function () {
        var ne = m;
        m = I;
        try {
          return D.apply(this, arguments);
        } finally {
          m = ne;
        }
      };
    });
})(qc);
Hc.exports = qc;
var Vf = Hc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Hf = f,
  Ot = Vf;
function le(e) {
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
var Wc = new Set(),
  ms = {};
function sr(e, t) {
  Ir(e, t), Ir(e + "Capture", t);
}
function Ir(e, t) {
  for (ms[e] = t, e = 0; e < t.length; e++) Wc.add(t[e]);
}
var xn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Il = Object.prototype.hasOwnProperty,
  qf =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Si = {},
  Ci = {};
function Wf(e) {
  return Il.call(Ci, e)
    ? !0
    : Il.call(Si, e)
    ? !1
    : qf.test(e)
    ? (Ci[e] = !0)
    : ((Si[e] = !0), !1);
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
function Nt(e, t, n, s, o, l, a) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = s),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = l),
    (this.removeEmptyString = a);
}
var pt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    pt[e] = new Nt(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  pt[t] = new Nt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  pt[e] = new Nt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  pt[e] = new Nt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    pt[e] = new Nt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  pt[e] = new Nt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  pt[e] = new Nt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  pt[e] = new Nt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  pt[e] = new Nt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var _a = /[\-:]([a-z])/g;
function Ma(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(_a, Ma);
    pt[t] = new Nt(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(_a, Ma);
    pt[t] = new Nt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(_a, Ma);
  pt[t] = new Nt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  pt[e] = new Nt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
pt.xlinkHref = new Nt(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  pt[e] = new Nt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ea(e, t, n, s) {
  var o = pt.hasOwnProperty(t) ? pt[t] : null;
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
var bn = Hf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ls = Symbol.for("react.element"),
  ur = Symbol.for("react.portal"),
  fr = Symbol.for("react.fragment"),
  Ia = Symbol.for("react.strict_mode"),
  Pl = Symbol.for("react.profiler"),
  Yc = Symbol.for("react.provider"),
  Xc = Symbol.for("react.context"),
  Pa = Symbol.for("react.forward_ref"),
  Tl = Symbol.for("react.suspense"),
  Rl = Symbol.for("react.suspense_list"),
  Ta = Symbol.for("react.memo"),
  Sn = Symbol.for("react.lazy"),
  Qc = Symbol.for("react.offscreen"),
  ki = Symbol.iterator;
function Hr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ki && e[ki]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Je = Object.assign,
  ll;
function es(e) {
  if (ll === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ll = (t && t[1]) || "";
    }
  return (
    `
` +
    ll +
    e
  );
}
var al = !1;
function il(e, t) {
  if (!e || al) return "";
  al = !0;
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
    (al = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? es(e) : "";
}
function Qf(e) {
  switch (e.tag) {
    case 5:
      return es(e.type);
    case 16:
      return es("Lazy");
    case 13:
      return es("Suspense");
    case 19:
      return es("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = il(e.type, !1)), e;
    case 11:
      return (e = il(e.type.render, !1)), e;
    case 1:
      return (e = il(e.type, !0)), e;
    default:
      return "";
  }
}
function $l(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case fr:
      return "Fragment";
    case ur:
      return "Portal";
    case Pl:
      return "Profiler";
    case Ia:
      return "StrictMode";
    case Tl:
      return "Suspense";
    case Rl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Xc:
        return (e.displayName || "Context") + ".Consumer";
      case Yc:
        return (e._context.displayName || "Context") + ".Provider";
      case Pa:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Ta:
        return (
          (t = e.displayName || null), t !== null ? t : $l(e.type) || "Memo"
        );
      case Sn:
        (t = e._payload), (e = e._init);
        try {
          return $l(e(t));
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
      return $l(t);
    case 8:
      return t === Ia ? "StrictMode" : "Mode";
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
function Un(e) {
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
function Kc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Jf(e) {
  var t = Kc(e) ? "checked" : "value",
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
function Us(e) {
  e._valueTracker || (e._valueTracker = Jf(e));
}
function Jc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    s = "";
  return (
    e && (s = Kc(e) ? (e.checked ? "true" : "false") : e.value),
    (e = s),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ho(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Al(e, t) {
  var n = t.checked;
  return Je({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Di(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    s = t.checked != null ? t.checked : t.defaultChecked;
  (n = Un(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: s,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Zc(e, t) {
  (t = t.checked), t != null && Ea(e, "checked", t, !1);
}
function Ol(e, t) {
  Zc(e, t);
  var n = Un(t.value),
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
    ? Ll(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Ll(e, t.type, Un(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function _i(e, t, n) {
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
function Ll(e, t, n) {
  (t !== "number" || ho(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var ts = Array.isArray;
function Cr(e, t, n, s) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && s && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Un(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), s && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ul(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(le(91));
  return Je({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Mi(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(le(92));
      if (ts(n)) {
        if (1 < n.length) throw Error(le(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Un(n) };
}
function ed(e, t) {
  var n = Un(t.value),
    s = Un(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    s != null && (e.defaultValue = "" + s);
}
function Ei(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function td(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Bl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? td(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Bs,
  nd = (function (e) {
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
        Bs = Bs || document.createElement("div"),
          Bs.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Bs.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function hs(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ss = {
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
Object.keys(ss).forEach(function (e) {
  Zf.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ss[t] = ss[e]);
  });
});
function rd(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (ss.hasOwnProperty(e) && ss[e])
    ? ("" + t).trim()
    : t + "px";
}
function sd(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var s = n.indexOf("--") === 0,
        o = rd(n, t[n], s);
      n === "float" && (n = "cssFloat"), s ? e.setProperty(n, o) : (e[n] = o);
    }
}
var ep = Je(
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
function zl(e, t) {
  if (t) {
    if (ep[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(le(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(le(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(le(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(le(62));
  }
}
function Gl(e, t) {
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
var Fl = null;
function Ra(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Vl = null,
  kr = null,
  Dr = null;
function Ii(e) {
  if ((e = Rs(e))) {
    if (typeof Vl != "function") throw Error(le(280));
    var t = e.stateNode;
    t && ((t = Vo(t)), Vl(e.stateNode, e.type, t));
  }
}
function od(e) {
  kr ? (Dr ? Dr.push(e) : (Dr = [e])) : (kr = e);
}
function ld() {
  if (kr) {
    var e = kr,
      t = Dr;
    if (((Dr = kr = null), Ii(e), t)) for (e = 0; e < t.length; e++) Ii(t[e]);
  }
}
function ad(e, t) {
  return e(t);
}
function id() {}
var cl = !1;
function cd(e, t, n) {
  if (cl) return e(t, n);
  cl = !0;
  try {
    return ad(e, t, n);
  } finally {
    (cl = !1), (kr !== null || Dr !== null) && (id(), ld());
  }
}
function gs(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var s = Vo(n);
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
  if (n && typeof n != "function") throw Error(le(231, t, typeof n));
  return n;
}
var Hl = !1;
if (xn)
  try {
    var qr = {};
    Object.defineProperty(qr, "passive", {
      get: function () {
        Hl = !0;
      },
    }),
      window.addEventListener("test", qr, qr),
      window.removeEventListener("test", qr, qr);
  } catch {
    Hl = !1;
  }
function tp(e, t, n, s, o, l, a, i, c) {
  var x = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, x);
  } catch (g) {
    this.onError(g);
  }
}
var os = !1,
  go = null,
  xo = !1,
  ql = null,
  np = {
    onError: function (e) {
      (os = !0), (go = e);
    },
  };
function rp(e, t, n, s, o, l, a, i, c) {
  (os = !1), (go = null), tp.apply(np, arguments);
}
function sp(e, t, n, s, o, l, a, i, c) {
  if ((rp.apply(this, arguments), os)) {
    if (os) {
      var x = go;
      (os = !1), (go = null);
    } else throw Error(le(198));
    xo || ((xo = !0), (ql = x));
  }
}
function or(e) {
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
function dd(e) {
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
function Pi(e) {
  if (or(e) !== e) throw Error(le(188));
}
function op(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = or(e)), t === null)) throw Error(le(188));
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
        if (l === n) return Pi(o), e;
        if (l === s) return Pi(o), t;
        l = l.sibling;
      }
      throw Error(le(188));
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
        if (!a) throw Error(le(189));
      }
    }
    if (n.alternate !== s) throw Error(le(190));
  }
  if (n.tag !== 3) throw Error(le(188));
  return n.stateNode.current === n ? e : t;
}
function ud(e) {
  return (e = op(e)), e !== null ? fd(e) : null;
}
function fd(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = fd(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var pd = Ot.unstable_scheduleCallback,
  Ti = Ot.unstable_cancelCallback,
  lp = Ot.unstable_shouldYield,
  ap = Ot.unstable_requestPaint,
  nt = Ot.unstable_now,
  ip = Ot.unstable_getCurrentPriorityLevel,
  $a = Ot.unstable_ImmediatePriority,
  md = Ot.unstable_UserBlockingPriority,
  yo = Ot.unstable_NormalPriority,
  cp = Ot.unstable_LowPriority,
  hd = Ot.unstable_IdlePriority,
  Bo = null,
  an = null;
function dp(e) {
  if (an && typeof an.onCommitFiberRoot == "function")
    try {
      an.onCommitFiberRoot(Bo, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var en = Math.clz32 ? Math.clz32 : pp,
  up = Math.log,
  fp = Math.LN2;
function pp(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((up(e) / fp) | 0)) | 0;
}
var zs = 64,
  Gs = 4194304;
function ns(e) {
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
function vo(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var s = 0,
    o = e.suspendedLanes,
    l = e.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var i = a & ~o;
    i !== 0 ? (s = ns(i)) : ((l &= a), l !== 0 && (s = ns(l)));
  } else (a = n & ~o), a !== 0 ? (s = ns(a)) : l !== 0 && (s = ns(l));
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
      (n = 31 - en(t)), (o = 1 << n), (s |= e[n]), (t &= ~o);
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
    var a = 31 - en(l),
      i = 1 << a,
      c = o[a];
    c === -1
      ? (!(i & n) || i & s) && (o[a] = mp(i, t))
      : c <= t && (e.expiredLanes |= i),
      (l &= ~i);
  }
}
function Wl(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function gd() {
  var e = zs;
  return (zs <<= 1), !(zs & 4194240) && (zs = 64), e;
}
function dl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Ps(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - en(t)),
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
    var o = 31 - en(n),
      l = 1 << o;
    (t[o] = 0), (s[o] = -1), (e[o] = -1), (n &= ~l);
  }
}
function Aa(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var s = 31 - en(n),
      o = 1 << s;
    (o & t) | (e[s] & t) && (e[s] |= t), (n &= ~o);
  }
}
var Fe = 0;
function xd(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var yd,
  Oa,
  vd,
  wd,
  bd,
  Yl = !1,
  Fs = [],
  In = null,
  Pn = null,
  Tn = null,
  xs = new Map(),
  ys = new Map(),
  kn = [],
  xp =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Ri(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      In = null;
      break;
    case "dragenter":
    case "dragleave":
      Pn = null;
      break;
    case "mouseover":
    case "mouseout":
      Tn = null;
      break;
    case "pointerover":
    case "pointerout":
      xs.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ys.delete(t.pointerId);
  }
}
function Wr(e, t, n, s, o, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: s,
        nativeEvent: l,
        targetContainers: [o],
      }),
      t !== null && ((t = Rs(t)), t !== null && Oa(t)),
      e)
    : ((e.eventSystemFlags |= s),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function yp(e, t, n, s, o) {
  switch (t) {
    case "focusin":
      return (In = Wr(In, e, t, n, s, o)), !0;
    case "dragenter":
      return (Pn = Wr(Pn, e, t, n, s, o)), !0;
    case "mouseover":
      return (Tn = Wr(Tn, e, t, n, s, o)), !0;
    case "pointerover":
      var l = o.pointerId;
      return xs.set(l, Wr(xs.get(l) || null, e, t, n, s, o)), !0;
    case "gotpointercapture":
      return (
        (l = o.pointerId), ys.set(l, Wr(ys.get(l) || null, e, t, n, s, o)), !0
      );
  }
  return !1;
}
function Nd(e) {
  var t = Yn(e.target);
  if (t !== null) {
    var n = or(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = dd(n)), t !== null)) {
          (e.blockedOn = t),
            bd(e.priority, function () {
              vd(n);
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
function ro(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Xl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var s = new n.constructor(n.type, n);
      (Fl = s), n.target.dispatchEvent(s), (Fl = null);
    } else return (t = Rs(n)), t !== null && Oa(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function $i(e, t, n) {
  ro(e) && n.delete(t);
}
function vp() {
  (Yl = !1),
    In !== null && ro(In) && (In = null),
    Pn !== null && ro(Pn) && (Pn = null),
    Tn !== null && ro(Tn) && (Tn = null),
    xs.forEach($i),
    ys.forEach($i);
}
function Yr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Yl ||
      ((Yl = !0),
      Ot.unstable_scheduleCallback(Ot.unstable_NormalPriority, vp)));
}
function vs(e) {
  function t(o) {
    return Yr(o, e);
  }
  if (0 < Fs.length) {
    Yr(Fs[0], e);
    for (var n = 1; n < Fs.length; n++) {
      var s = Fs[n];
      s.blockedOn === e && (s.blockedOn = null);
    }
  }
  for (
    In !== null && Yr(In, e),
      Pn !== null && Yr(Pn, e),
      Tn !== null && Yr(Tn, e),
      xs.forEach(t),
      ys.forEach(t),
      n = 0;
    n < kn.length;
    n++
  )
    (s = kn[n]), s.blockedOn === e && (s.blockedOn = null);
  for (; 0 < kn.length && ((n = kn[0]), n.blockedOn === null); )
    Nd(n), n.blockedOn === null && kn.shift();
}
var _r = bn.ReactCurrentBatchConfig,
  wo = !0;
function wp(e, t, n, s) {
  var o = Fe,
    l = _r.transition;
  _r.transition = null;
  try {
    (Fe = 1), La(e, t, n, s);
  } finally {
    (Fe = o), (_r.transition = l);
  }
}
function bp(e, t, n, s) {
  var o = Fe,
    l = _r.transition;
  _r.transition = null;
  try {
    (Fe = 4), La(e, t, n, s);
  } finally {
    (Fe = o), (_r.transition = l);
  }
}
function La(e, t, n, s) {
  if (wo) {
    var o = Xl(e, t, n, s);
    if (o === null) wl(e, t, s, bo, n), Ri(e, s);
    else if (yp(o, e, t, n, s)) s.stopPropagation();
    else if ((Ri(e, s), t & 4 && -1 < xp.indexOf(e))) {
      for (; o !== null; ) {
        var l = Rs(o);
        if (
          (l !== null && yd(l),
          (l = Xl(e, t, n, s)),
          l === null && wl(e, t, s, bo, n),
          l === o)
        )
          break;
        o = l;
      }
      o !== null && s.stopPropagation();
    } else wl(e, t, s, null, n);
  }
}
var bo = null;
function Xl(e, t, n, s) {
  if (((bo = null), (e = Ra(s)), (e = Yn(e)), e !== null))
    if (((t = or(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = dd(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (bo = e), null;
}
function jd(e) {
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
        case $a:
          return 1;
        case md:
          return 4;
        case yo:
        case cp:
          return 16;
        case hd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var _n = null,
  Ua = null,
  so = null;
function Sd() {
  if (so) return so;
  var e,
    t = Ua,
    n = t.length,
    s,
    o = "value" in _n ? _n.value : _n.textContent,
    l = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var a = n - e;
  for (s = 1; s <= a && t[n - s] === o[l - s]; s++);
  return (so = o.slice(e, 1 < s ? 1 - s : void 0));
}
function oo(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Vs() {
  return !0;
}
function Ai() {
  return !1;
}
function Ut(e) {
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
        ? Vs
        : Ai),
      (this.isPropagationStopped = Ai),
      this
    );
  }
  return (
    Je(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Vs));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Vs));
      },
      persist: function () {},
      isPersistent: Vs,
    }),
    t
  );
}
var Br = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ba = Ut(Br),
  Ts = Je({}, Br, { view: 0, detail: 0 }),
  Np = Ut(Ts),
  ul,
  fl,
  Xr,
  zo = Je({}, Ts, {
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
    getModifierState: za,
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
        : (e !== Xr &&
            (Xr && e.type === "mousemove"
              ? ((ul = e.screenX - Xr.screenX), (fl = e.screenY - Xr.screenY))
              : (fl = ul = 0),
            (Xr = e)),
          ul);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : fl;
    },
  }),
  Oi = Ut(zo),
  jp = Je({}, zo, { dataTransfer: 0 }),
  Sp = Ut(jp),
  Cp = Je({}, Ts, { relatedTarget: 0 }),
  pl = Ut(Cp),
  kp = Je({}, Br, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Dp = Ut(kp),
  _p = Je({}, Br, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Mp = Ut(_p),
  Ep = Je({}, Br, { data: 0 }),
  Li = Ut(Ep),
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
function za() {
  return Rp;
}
var $p = Je({}, Ts, {
    key: function (e) {
      if (e.key) {
        var t = Ip[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = oo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
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
    getModifierState: za,
    charCode: function (e) {
      return e.type === "keypress" ? oo(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? oo(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Ap = Ut($p),
  Op = Je({}, zo, {
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
  Ui = Ut(Op),
  Lp = Je({}, Ts, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: za,
  }),
  Up = Ut(Lp),
  Bp = Je({}, Br, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  zp = Ut(Bp),
  Gp = Je({}, zo, {
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
  Fp = Ut(Gp),
  Vp = [9, 13, 27, 32],
  Ga = xn && "CompositionEvent" in window,
  ls = null;
xn && "documentMode" in document && (ls = document.documentMode);
var Hp = xn && "TextEvent" in window && !ls,
  Cd = xn && (!Ga || (ls && 8 < ls && 11 >= ls)),
  Bi = " ",
  zi = !1;
function kd(e, t) {
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
function Dd(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var pr = !1;
function qp(e, t) {
  switch (e) {
    case "compositionend":
      return Dd(t);
    case "keypress":
      return t.which !== 32 ? null : ((zi = !0), Bi);
    case "textInput":
      return (e = t.data), e === Bi && zi ? null : e;
    default:
      return null;
  }
}
function Wp(e, t) {
  if (pr)
    return e === "compositionend" || (!Ga && kd(e, t))
      ? ((e = Sd()), (so = Ua = _n = null), (pr = !1), e)
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
      return Cd && t.locale !== "ko" ? null : t.data;
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
function Gi(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Yp[e.type] : t === "textarea";
}
function _d(e, t, n, s) {
  od(s),
    (t = No(t, "onChange")),
    0 < t.length &&
      ((n = new Ba("onChange", "change", null, n, s)),
      e.push({ event: n, listeners: t }));
}
var as = null,
  ws = null;
function Xp(e) {
  Ud(e, 0);
}
function Go(e) {
  var t = gr(e);
  if (Jc(t)) return e;
}
function Qp(e, t) {
  if (e === "change") return t;
}
var Md = !1;
if (xn) {
  var ml;
  if (xn) {
    var hl = "oninput" in document;
    if (!hl) {
      var Fi = document.createElement("div");
      Fi.setAttribute("oninput", "return;"),
        (hl = typeof Fi.oninput == "function");
    }
    ml = hl;
  } else ml = !1;
  Md = ml && (!document.documentMode || 9 < document.documentMode);
}
function Vi() {
  as && (as.detachEvent("onpropertychange", Ed), (ws = as = null));
}
function Ed(e) {
  if (e.propertyName === "value" && Go(ws)) {
    var t = [];
    _d(t, ws, e, Ra(e)), cd(Xp, t);
  }
}
function Kp(e, t, n) {
  e === "focusin"
    ? (Vi(), (as = t), (ws = n), as.attachEvent("onpropertychange", Ed))
    : e === "focusout" && Vi();
}
function Jp(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Go(ws);
}
function Zp(e, t) {
  if (e === "click") return Go(t);
}
function em(e, t) {
  if (e === "input" || e === "change") return Go(t);
}
function tm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var nn = typeof Object.is == "function" ? Object.is : tm;
function bs(e, t) {
  if (nn(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    s = Object.keys(t);
  if (n.length !== s.length) return !1;
  for (s = 0; s < n.length; s++) {
    var o = n[s];
    if (!Il.call(t, o) || !nn(e[o], t[o])) return !1;
  }
  return !0;
}
function Hi(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function qi(e, t) {
  var n = Hi(e);
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
    n = Hi(n);
  }
}
function Id(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Id(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Pd() {
  for (var e = window, t = ho(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ho(e.document);
  }
  return t;
}
function Fa(e) {
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
  var t = Pd(),
    n = e.focusedElem,
    s = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Id(n.ownerDocument.documentElement, n)
  ) {
    if (s !== null && Fa(n)) {
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
          (o = qi(n, l));
        var a = qi(n, s);
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
var rm = xn && "documentMode" in document && 11 >= document.documentMode,
  mr = null,
  Ql = null,
  is = null,
  Kl = !1;
function Wi(e, t, n) {
  var s = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Kl ||
    mr == null ||
    mr !== ho(s) ||
    ((s = mr),
    "selectionStart" in s && Fa(s)
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
    (is && bs(is, s)) ||
      ((is = s),
      (s = No(Ql, "onSelect")),
      0 < s.length &&
        ((t = new Ba("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: s }),
        (t.target = mr))));
}
function Hs(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var hr = {
    animationend: Hs("Animation", "AnimationEnd"),
    animationiteration: Hs("Animation", "AnimationIteration"),
    animationstart: Hs("Animation", "AnimationStart"),
    transitionend: Hs("Transition", "TransitionEnd"),
  },
  gl = {},
  Td = {};
xn &&
  ((Td = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete hr.animationend.animation,
    delete hr.animationiteration.animation,
    delete hr.animationstart.animation),
  "TransitionEvent" in window || delete hr.transitionend.transition);
function Fo(e) {
  if (gl[e]) return gl[e];
  if (!hr[e]) return e;
  var t = hr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Td) return (gl[e] = t[n]);
  return e;
}
var Rd = Fo("animationend"),
  $d = Fo("animationiteration"),
  Ad = Fo("animationstart"),
  Od = Fo("transitionend"),
  Ld = new Map(),
  Yi =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function zn(e, t) {
  Ld.set(e, t), sr(t, [e]);
}
for (var xl = 0; xl < Yi.length; xl++) {
  var yl = Yi[xl],
    sm = yl.toLowerCase(),
    om = yl[0].toUpperCase() + yl.slice(1);
  zn(sm, "on" + om);
}
zn(Rd, "onAnimationEnd");
zn($d, "onAnimationIteration");
zn(Ad, "onAnimationStart");
zn("dblclick", "onDoubleClick");
zn("focusin", "onFocus");
zn("focusout", "onBlur");
zn(Od, "onTransitionEnd");
Ir("onMouseEnter", ["mouseout", "mouseover"]);
Ir("onMouseLeave", ["mouseout", "mouseover"]);
Ir("onPointerEnter", ["pointerout", "pointerover"]);
Ir("onPointerLeave", ["pointerout", "pointerover"]);
sr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
sr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
sr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
sr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
sr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
sr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var rs =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  lm = new Set("cancel close invalid load scroll toggle".split(" ").concat(rs));
function Xi(e, t, n) {
  var s = e.type || "unknown-event";
  (e.currentTarget = n), sp(s, t, void 0, e), (e.currentTarget = null);
}
function Ud(e, t) {
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
          Xi(o, i, x), (l = c);
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
          Xi(o, i, x), (l = c);
        }
    }
  }
  if (xo) throw ((e = ql), (xo = !1), (ql = null), e);
}
function qe(e, t) {
  var n = t[na];
  n === void 0 && (n = t[na] = new Set());
  var s = e + "__bubble";
  n.has(s) || (Bd(t, e, 2, !1), n.add(s));
}
function vl(e, t, n) {
  var s = 0;
  t && (s |= 4), Bd(n, e, s, t);
}
var qs = "_reactListening" + Math.random().toString(36).slice(2);
function Ns(e) {
  if (!e[qs]) {
    (e[qs] = !0),
      Wc.forEach(function (n) {
        n !== "selectionchange" && (lm.has(n) || vl(n, !1, e), vl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[qs] || ((t[qs] = !0), vl("selectionchange", !1, t));
  }
}
function Bd(e, t, n, s) {
  switch (jd(t)) {
    case 1:
      var o = wp;
      break;
    case 4:
      o = bp;
      break;
    default:
      o = La;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Hl ||
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
function wl(e, t, n, s, o) {
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
          if (((a = Yn(i)), a === null)) return;
          if (((c = a.tag), c === 5 || c === 6)) {
            s = l = a;
            continue e;
          }
          i = i.parentNode;
        }
      }
      s = s.return;
    }
  cd(function () {
    var x = l,
      g = Ra(n),
      h = [];
    e: {
      var m = Ld.get(e);
      if (m !== void 0) {
        var j = Ba,
          S = e;
        switch (e) {
          case "keypress":
            if (oo(n) === 0) break e;
          case "keydown":
          case "keyup":
            j = Ap;
            break;
          case "focusin":
            (S = "focus"), (j = pl);
            break;
          case "focusout":
            (S = "blur"), (j = pl);
            break;
          case "beforeblur":
          case "afterblur":
            j = pl;
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
            j = Oi;
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
          case Rd:
          case $d:
          case Ad:
            j = Dp;
            break;
          case Od:
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
            j = Ui;
        }
        var M = (t & 4) !== 0,
          R = !M && e === "scroll",
          d = M ? (m !== null ? m + "Capture" : null) : m;
        M = [];
        for (var u = x, p; u !== null; ) {
          p = u;
          var E = p.stateNode;
          if (
            (p.tag === 5 &&
              E !== null &&
              ((p = E),
              d !== null && ((E = gs(u, d)), E != null && M.push(js(u, E, p)))),
            R)
          )
            break;
          u = u.return;
        }
        0 < M.length &&
          ((m = new j(m, S, null, n, g)), h.push({ event: m, listeners: M }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (j = e === "mouseout" || e === "pointerout"),
          m &&
            n !== Fl &&
            (S = n.relatedTarget || n.fromElement) &&
            (Yn(S) || S[yn]))
        )
          break e;
        if (
          (j || m) &&
          ((m =
            g.window === g
              ? g
              : (m = g.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          j
            ? ((S = n.relatedTarget || n.toElement),
              (j = x),
              (S = S ? Yn(S) : null),
              S !== null &&
                ((R = or(S)), S !== R || (S.tag !== 5 && S.tag !== 6)) &&
                (S = null))
            : ((j = null), (S = x)),
          j !== S)
        ) {
          if (
            ((M = Oi),
            (E = "onMouseLeave"),
            (d = "onMouseEnter"),
            (u = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((M = Ui),
              (E = "onPointerLeave"),
              (d = "onPointerEnter"),
              (u = "pointer")),
            (R = j == null ? m : gr(j)),
            (p = S == null ? m : gr(S)),
            (m = new M(E, u + "leave", j, n, g)),
            (m.target = R),
            (m.relatedTarget = p),
            (E = null),
            Yn(g) === x &&
              ((M = new M(d, u + "enter", S, n, g)),
              (M.target = p),
              (M.relatedTarget = R),
              (E = M)),
            (R = E),
            j && S)
          )
            t: {
              for (M = j, d = S, u = 0, p = M; p; p = dr(p)) u++;
              for (p = 0, E = d; E; E = dr(E)) p++;
              for (; 0 < u - p; ) (M = dr(M)), u--;
              for (; 0 < p - u; ) (d = dr(d)), p--;
              for (; u--; ) {
                if (M === d || (d !== null && M === d.alternate)) break t;
                (M = dr(M)), (d = dr(d));
              }
              M = null;
            }
          else M = null;
          j !== null && Qi(h, m, j, M, !1),
            S !== null && R !== null && Qi(h, R, S, M, !0);
        }
      }
      e: {
        if (
          ((m = x ? gr(x) : window),
          (j = m.nodeName && m.nodeName.toLowerCase()),
          j === "select" || (j === "input" && m.type === "file"))
        )
          var P = Qp;
        else if (Gi(m))
          if (Md) P = em;
          else {
            P = Jp;
            var _ = Kp;
          }
        else
          (j = m.nodeName) &&
            j.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (P = Zp);
        if (P && (P = P(e, x))) {
          _d(h, P, n, g);
          break e;
        }
        _ && _(e, m, x),
          e === "focusout" &&
            (_ = m._wrapperState) &&
            _.controlled &&
            m.type === "number" &&
            Ll(m, "number", m.value);
      }
      switch (((_ = x ? gr(x) : window), e)) {
        case "focusin":
          (Gi(_) || _.contentEditable === "true") &&
            ((mr = _), (Ql = x), (is = null));
          break;
        case "focusout":
          is = Ql = mr = null;
          break;
        case "mousedown":
          Kl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Kl = !1), Wi(h, n, g);
          break;
        case "selectionchange":
          if (rm) break;
        case "keydown":
        case "keyup":
          Wi(h, n, g);
      }
      var T;
      if (Ga)
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
        pr
          ? kd(e, n) && (V = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (V = "onCompositionStart");
      V &&
        (Cd &&
          n.locale !== "ko" &&
          (pr || V !== "onCompositionStart"
            ? V === "onCompositionEnd" && pr && (T = Sd())
            : ((_n = g),
              (Ua = "value" in _n ? _n.value : _n.textContent),
              (pr = !0))),
        (_ = No(x, V)),
        0 < _.length &&
          ((V = new Li(V, e, null, n, g)),
          h.push({ event: V, listeners: _ }),
          T ? (V.data = T) : ((T = Dd(n)), T !== null && (V.data = T)))),
        (T = Hp ? qp(e, n) : Wp(e, n)) &&
          ((x = No(x, "onBeforeInput")),
          0 < x.length &&
            ((g = new Li("onBeforeInput", "beforeinput", null, n, g)),
            h.push({ event: g, listeners: x }),
            (g.data = T)));
    }
    Ud(h, t);
  });
}
function js(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function No(e, t) {
  for (var n = t + "Capture", s = []; e !== null; ) {
    var o = e,
      l = o.stateNode;
    o.tag === 5 &&
      l !== null &&
      ((o = l),
      (l = gs(e, n)),
      l != null && s.unshift(js(e, l, o)),
      (l = gs(e, t)),
      l != null && s.push(js(e, l, o))),
      (e = e.return);
  }
  return s;
}
function dr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Qi(e, t, n, s, o) {
  for (var l = t._reactName, a = []; n !== null && n !== s; ) {
    var i = n,
      c = i.alternate,
      x = i.stateNode;
    if (c !== null && c === s) break;
    i.tag === 5 &&
      x !== null &&
      ((i = x),
      o
        ? ((c = gs(n, l)), c != null && a.unshift(js(n, c, i)))
        : o || ((c = gs(n, l)), c != null && a.push(js(n, c, i)))),
      (n = n.return);
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var am = /\r\n?/g,
  im = /\u0000|\uFFFD/g;
function Ki(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      am,
      `
`
    )
    .replace(im, "");
}
function Ws(e, t, n) {
  if (((t = Ki(t)), Ki(e) !== t && n)) throw Error(le(425));
}
function jo() {}
var Jl = null,
  Zl = null;
function ea(e, t) {
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
var ta = typeof setTimeout == "function" ? setTimeout : void 0,
  cm = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Ji = typeof Promise == "function" ? Promise : void 0,
  dm =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Ji < "u"
      ? function (e) {
          return Ji.resolve(null).then(e).catch(um);
        }
      : ta;
function um(e) {
  setTimeout(function () {
    throw e;
  });
}
function bl(e, t) {
  var n = t,
    s = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (s === 0) {
          e.removeChild(o), vs(t);
          return;
        }
        s--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || s++;
    n = o;
  } while (n);
  vs(t);
}
function Rn(e) {
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
function Zi(e) {
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
var zr = Math.random().toString(36).slice(2),
  ln = "__reactFiber$" + zr,
  Ss = "__reactProps$" + zr,
  yn = "__reactContainer$" + zr,
  na = "__reactEvents$" + zr,
  fm = "__reactListeners$" + zr,
  pm = "__reactHandles$" + zr;
function Yn(e) {
  var t = e[ln];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[yn] || n[ln])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Zi(e); e !== null; ) {
          if ((n = e[ln])) return n;
          e = Zi(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Rs(e) {
  return (
    (e = e[ln] || e[yn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function gr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(le(33));
}
function Vo(e) {
  return e[Ss] || null;
}
var ra = [],
  xr = -1;
function Gn(e) {
  return { current: e };
}
function We(e) {
  0 > xr || ((e.current = ra[xr]), (ra[xr] = null), xr--);
}
function He(e, t) {
  xr++, (ra[xr] = e.current), (e.current = t);
}
var Bn = {},
  yt = Gn(Bn),
  _t = Gn(!1),
  Zn = Bn;
function Pr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Bn;
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
function Mt(e) {
  return (e = e.childContextTypes), e != null;
}
function So() {
  We(_t), We(yt);
}
function ec(e, t, n) {
  if (yt.current !== Bn) throw Error(le(168));
  He(yt, t), He(_t, n);
}
function zd(e, t, n) {
  var s = e.stateNode;
  if (((t = t.childContextTypes), typeof s.getChildContext != "function"))
    return n;
  s = s.getChildContext();
  for (var o in s) if (!(o in t)) throw Error(le(108, Kf(e) || "Unknown", o));
  return Je({}, n, s);
}
function Co(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Bn),
    (Zn = yt.current),
    He(yt, e),
    He(_t, _t.current),
    !0
  );
}
function tc(e, t, n) {
  var s = e.stateNode;
  if (!s) throw Error(le(169));
  n
    ? ((e = zd(e, t, Zn)),
      (s.__reactInternalMemoizedMergedChildContext = e),
      We(_t),
      We(yt),
      He(yt, e))
    : We(_t),
    He(_t, n);
}
var pn = null,
  Ho = !1,
  Nl = !1;
function Gd(e) {
  pn === null ? (pn = [e]) : pn.push(e);
}
function mm(e) {
  (Ho = !0), Gd(e);
}
function Fn() {
  if (!Nl && pn !== null) {
    Nl = !0;
    var e = 0,
      t = Fe;
    try {
      var n = pn;
      for (Fe = 1; e < n.length; e++) {
        var s = n[e];
        do s = s(!0);
        while (s !== null);
      }
      (pn = null), (Ho = !1);
    } catch (o) {
      throw (pn !== null && (pn = pn.slice(e + 1)), pd($a, Fn), o);
    } finally {
      (Fe = t), (Nl = !1);
    }
  }
  return null;
}
var yr = [],
  vr = 0,
  ko = null,
  Do = 0,
  Gt = [],
  Ft = 0,
  er = null,
  mn = 1,
  hn = "";
function qn(e, t) {
  (yr[vr++] = Do), (yr[vr++] = ko), (ko = e), (Do = t);
}
function Fd(e, t, n) {
  (Gt[Ft++] = mn), (Gt[Ft++] = hn), (Gt[Ft++] = er), (er = e);
  var s = mn;
  e = hn;
  var o = 32 - en(s) - 1;
  (s &= ~(1 << o)), (n += 1);
  var l = 32 - en(t) + o;
  if (30 < l) {
    var a = o - (o % 5);
    (l = (s & ((1 << a) - 1)).toString(32)),
      (s >>= a),
      (o -= a),
      (mn = (1 << (32 - en(t) + o)) | (n << o) | s),
      (hn = l + e);
  } else (mn = (1 << l) | (n << o) | s), (hn = e);
}
function Va(e) {
  e.return !== null && (qn(e, 1), Fd(e, 1, 0));
}
function Ha(e) {
  for (; e === ko; )
    (ko = yr[--vr]), (yr[vr] = null), (Do = yr[--vr]), (yr[vr] = null);
  for (; e === er; )
    (er = Gt[--Ft]),
      (Gt[Ft] = null),
      (hn = Gt[--Ft]),
      (Gt[Ft] = null),
      (mn = Gt[--Ft]),
      (Gt[Ft] = null);
}
var At = null,
  $t = null,
  Ye = !1,
  Zt = null;
function Vd(e, t) {
  var n = Vt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function nc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (At = e), ($t = Rn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (At = e), ($t = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = er !== null ? { id: mn, overflow: hn } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Vt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (At = e),
            ($t = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function sa(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function oa(e) {
  if (Ye) {
    var t = $t;
    if (t) {
      var n = t;
      if (!nc(e, t)) {
        if (sa(e)) throw Error(le(418));
        t = Rn(n.nextSibling);
        var s = At;
        t && nc(e, t)
          ? Vd(s, n)
          : ((e.flags = (e.flags & -4097) | 2), (Ye = !1), (At = e));
      }
    } else {
      if (sa(e)) throw Error(le(418));
      (e.flags = (e.flags & -4097) | 2), (Ye = !1), (At = e);
    }
  }
}
function rc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  At = e;
}
function Ys(e) {
  if (e !== At) return !1;
  if (!Ye) return rc(e), (Ye = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !ea(e.type, e.memoizedProps))),
    t && (t = $t))
  ) {
    if (sa(e)) throw (Hd(), Error(le(418)));
    for (; t; ) Vd(e, t), (t = Rn(t.nextSibling));
  }
  if ((rc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(le(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              $t = Rn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      $t = null;
    }
  } else $t = At ? Rn(e.stateNode.nextSibling) : null;
  return !0;
}
function Hd() {
  for (var e = $t; e; ) e = Rn(e.nextSibling);
}
function Tr() {
  ($t = At = null), (Ye = !1);
}
function qa(e) {
  Zt === null ? (Zt = [e]) : Zt.push(e);
}
var hm = bn.ReactCurrentBatchConfig;
function Qr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(le(309));
        var s = n.stateNode;
      }
      if (!s) throw Error(le(147, e));
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
    if (typeof e != "string") throw Error(le(284));
    if (!n._owner) throw Error(le(290, e));
  }
  return e;
}
function Xs(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      le(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function sc(e) {
  var t = e._init;
  return t(e._payload);
}
function qd(e) {
  function t(d, u) {
    if (e) {
      var p = d.deletions;
      p === null ? ((d.deletions = [u]), (d.flags |= 16)) : p.push(u);
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
    return (d = Ln(d, u)), (d.index = 0), (d.sibling = null), d;
  }
  function l(d, u, p) {
    return (
      (d.index = p),
      e
        ? ((p = d.alternate),
          p !== null
            ? ((p = p.index), p < u ? ((d.flags |= 2), u) : p)
            : ((d.flags |= 2), u))
        : ((d.flags |= 1048576), u)
    );
  }
  function a(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function i(d, u, p, E) {
    return u === null || u.tag !== 6
      ? ((u = Ml(p, d.mode, E)), (u.return = d), u)
      : ((u = o(u, p)), (u.return = d), u);
  }
  function c(d, u, p, E) {
    var P = p.type;
    return P === fr
      ? g(d, u, p.props.children, E, p.key)
      : u !== null &&
        (u.elementType === P ||
          (typeof P == "object" &&
            P !== null &&
            P.$$typeof === Sn &&
            sc(P) === u.type))
      ? ((E = o(u, p.props)), (E.ref = Qr(d, u, p)), (E.return = d), E)
      : ((E = po(p.type, p.key, p.props, null, d.mode, E)),
        (E.ref = Qr(d, u, p)),
        (E.return = d),
        E);
  }
  function x(d, u, p, E) {
    return u === null ||
      u.tag !== 4 ||
      u.stateNode.containerInfo !== p.containerInfo ||
      u.stateNode.implementation !== p.implementation
      ? ((u = El(p, d.mode, E)), (u.return = d), u)
      : ((u = o(u, p.children || [])), (u.return = d), u);
  }
  function g(d, u, p, E, P) {
    return u === null || u.tag !== 7
      ? ((u = Jn(p, d.mode, E, P)), (u.return = d), u)
      : ((u = o(u, p)), (u.return = d), u);
  }
  function h(d, u, p) {
    if ((typeof u == "string" && u !== "") || typeof u == "number")
      return (u = Ml("" + u, d.mode, p)), (u.return = d), u;
    if (typeof u == "object" && u !== null) {
      switch (u.$$typeof) {
        case Ls:
          return (
            (p = po(u.type, u.key, u.props, null, d.mode, p)),
            (p.ref = Qr(d, null, u)),
            (p.return = d),
            p
          );
        case ur:
          return (u = El(u, d.mode, p)), (u.return = d), u;
        case Sn:
          var E = u._init;
          return h(d, E(u._payload), p);
      }
      if (ts(u) || Hr(u))
        return (u = Jn(u, d.mode, p, null)), (u.return = d), u;
      Xs(d, u);
    }
    return null;
  }
  function m(d, u, p, E) {
    var P = u !== null ? u.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return P !== null ? null : i(d, u, "" + p, E);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Ls:
          return p.key === P ? c(d, u, p, E) : null;
        case ur:
          return p.key === P ? x(d, u, p, E) : null;
        case Sn:
          return (P = p._init), m(d, u, P(p._payload), E);
      }
      if (ts(p) || Hr(p)) return P !== null ? null : g(d, u, p, E, null);
      Xs(d, p);
    }
    return null;
  }
  function j(d, u, p, E, P) {
    if ((typeof E == "string" && E !== "") || typeof E == "number")
      return (d = d.get(p) || null), i(u, d, "" + E, P);
    if (typeof E == "object" && E !== null) {
      switch (E.$$typeof) {
        case Ls:
          return (d = d.get(E.key === null ? p : E.key) || null), c(u, d, E, P);
        case ur:
          return (d = d.get(E.key === null ? p : E.key) || null), x(u, d, E, P);
        case Sn:
          var _ = E._init;
          return j(d, u, p, _(E._payload), P);
      }
      if (ts(E) || Hr(E)) return (d = d.get(p) || null), g(u, d, E, P, null);
      Xs(u, E);
    }
    return null;
  }
  function S(d, u, p, E) {
    for (
      var P = null, _ = null, T = u, V = (u = 0), X = null;
      T !== null && V < p.length;
      V++
    ) {
      T.index > V ? ((X = T), (T = null)) : (X = T.sibling);
      var J = m(d, T, p[V], E);
      if (J === null) {
        T === null && (T = X);
        break;
      }
      e && T && J.alternate === null && t(d, T),
        (u = l(J, u, V)),
        _ === null ? (P = J) : (_.sibling = J),
        (_ = J),
        (T = X);
    }
    if (V === p.length) return n(d, T), Ye && qn(d, V), P;
    if (T === null) {
      for (; V < p.length; V++)
        (T = h(d, p[V], E)),
          T !== null &&
            ((u = l(T, u, V)), _ === null ? (P = T) : (_.sibling = T), (_ = T));
      return Ye && qn(d, V), P;
    }
    for (T = s(d, T); V < p.length; V++)
      (X = j(T, d, V, p[V], E)),
        X !== null &&
          (e && X.alternate !== null && T.delete(X.key === null ? V : X.key),
          (u = l(X, u, V)),
          _ === null ? (P = X) : (_.sibling = X),
          (_ = X));
    return (
      e &&
        T.forEach(function (ue) {
          return t(d, ue);
        }),
      Ye && qn(d, V),
      P
    );
  }
  function M(d, u, p, E) {
    var P = Hr(p);
    if (typeof P != "function") throw Error(le(150));
    if (((p = P.call(p)), p == null)) throw Error(le(151));
    for (
      var _ = (P = null), T = u, V = (u = 0), X = null, J = p.next();
      T !== null && !J.done;
      V++, J = p.next()
    ) {
      T.index > V ? ((X = T), (T = null)) : (X = T.sibling);
      var ue = m(d, T, J.value, E);
      if (ue === null) {
        T === null && (T = X);
        break;
      }
      e && T && ue.alternate === null && t(d, T),
        (u = l(ue, u, V)),
        _ === null ? (P = ue) : (_.sibling = ue),
        (_ = ue),
        (T = X);
    }
    if (J.done) return n(d, T), Ye && qn(d, V), P;
    if (T === null) {
      for (; !J.done; V++, J = p.next())
        (J = h(d, J.value, E)),
          J !== null &&
            ((u = l(J, u, V)), _ === null ? (P = J) : (_.sibling = J), (_ = J));
      return Ye && qn(d, V), P;
    }
    for (T = s(d, T); !J.done; V++, J = p.next())
      (J = j(T, d, V, J.value, E)),
        J !== null &&
          (e && J.alternate !== null && T.delete(J.key === null ? V : J.key),
          (u = l(J, u, V)),
          _ === null ? (P = J) : (_.sibling = J),
          (_ = J));
    return (
      e &&
        T.forEach(function (we) {
          return t(d, we);
        }),
      Ye && qn(d, V),
      P
    );
  }
  function R(d, u, p, E) {
    if (
      (typeof p == "object" &&
        p !== null &&
        p.type === fr &&
        p.key === null &&
        (p = p.props.children),
      typeof p == "object" && p !== null)
    ) {
      switch (p.$$typeof) {
        case Ls:
          e: {
            for (var P = p.key, _ = u; _ !== null; ) {
              if (_.key === P) {
                if (((P = p.type), P === fr)) {
                  if (_.tag === 7) {
                    n(d, _.sibling),
                      (u = o(_, p.props.children)),
                      (u.return = d),
                      (d = u);
                    break e;
                  }
                } else if (
                  _.elementType === P ||
                  (typeof P == "object" &&
                    P !== null &&
                    P.$$typeof === Sn &&
                    sc(P) === _.type)
                ) {
                  n(d, _.sibling),
                    (u = o(_, p.props)),
                    (u.ref = Qr(d, _, p)),
                    (u.return = d),
                    (d = u);
                  break e;
                }
                n(d, _);
                break;
              } else t(d, _);
              _ = _.sibling;
            }
            p.type === fr
              ? ((u = Jn(p.props.children, d.mode, E, p.key)),
                (u.return = d),
                (d = u))
              : ((E = po(p.type, p.key, p.props, null, d.mode, E)),
                (E.ref = Qr(d, u, p)),
                (E.return = d),
                (d = E));
          }
          return a(d);
        case ur:
          e: {
            for (_ = p.key; u !== null; ) {
              if (u.key === _)
                if (
                  u.tag === 4 &&
                  u.stateNode.containerInfo === p.containerInfo &&
                  u.stateNode.implementation === p.implementation
                ) {
                  n(d, u.sibling),
                    (u = o(u, p.children || [])),
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
            (u = El(p, d.mode, E)), (u.return = d), (d = u);
          }
          return a(d);
        case Sn:
          return (_ = p._init), R(d, u, _(p._payload), E);
      }
      if (ts(p)) return S(d, u, p, E);
      if (Hr(p)) return M(d, u, p, E);
      Xs(d, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        u !== null && u.tag === 6
          ? (n(d, u.sibling), (u = o(u, p)), (u.return = d), (d = u))
          : (n(d, u), (u = Ml(p, d.mode, E)), (u.return = d), (d = u)),
        a(d))
      : n(d, u);
  }
  return R;
}
var Rr = qd(!0),
  Wd = qd(!1),
  _o = Gn(null),
  Mo = null,
  wr = null,
  Wa = null;
function Ya() {
  Wa = wr = Mo = null;
}
function Xa(e) {
  var t = _o.current;
  We(_o), (e._currentValue = t);
}
function la(e, t, n) {
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
function Mr(e, t) {
  (Mo = e),
    (Wa = wr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (kt = !0), (e.firstContext = null));
}
function qt(e) {
  var t = e._currentValue;
  if (Wa !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), wr === null)) {
      if (Mo === null) throw Error(le(308));
      (wr = e), (Mo.dependencies = { lanes: 0, firstContext: e });
    } else wr = wr.next = e;
  return t;
}
var Xn = null;
function Qa(e) {
  Xn === null ? (Xn = [e]) : Xn.push(e);
}
function Yd(e, t, n, s) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Qa(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    vn(e, s)
  );
}
function vn(e, t) {
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
var Cn = !1;
function Ka(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Xd(e, t) {
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
function gn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function $n(e, t, n) {
  var s = e.updateQueue;
  if (s === null) return null;
  if (((s = s.shared), Be & 2)) {
    var o = s.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (s.pending = t),
      vn(e, n)
    );
  }
  return (
    (o = s.interleaved),
    o === null ? ((t.next = t), Qa(s)) : ((t.next = o.next), (o.next = t)),
    (s.interleaved = t),
    vn(e, n)
  );
}
function lo(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var s = t.lanes;
    (s &= e.pendingLanes), (n |= s), (t.lanes = n), Aa(e, n);
  }
}
function oc(e, t) {
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
function Eo(e, t, n, s) {
  var o = e.updateQueue;
  Cn = !1;
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
      var m = i.lane,
        j = i.eventTime;
      if ((s & m) === m) {
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
            M = i;
          switch (((m = t), (j = n), M.tag)) {
            case 1:
              if (((S = M.payload), typeof S == "function")) {
                h = S.call(j, h, m);
                break e;
              }
              h = S;
              break e;
            case 3:
              S.flags = (S.flags & -65537) | 128;
            case 0:
              if (
                ((S = M.payload),
                (m = typeof S == "function" ? S.call(j, h, m) : S),
                m == null)
              )
                break e;
              h = Je({}, h, m);
              break e;
            case 2:
              Cn = !0;
          }
        }
        i.callback !== null &&
          i.lane !== 0 &&
          ((e.flags |= 64),
          (m = o.effects),
          m === null ? (o.effects = [i]) : m.push(i));
      } else
        (j = {
          eventTime: j,
          lane: m,
          tag: i.tag,
          payload: i.payload,
          callback: i.callback,
          next: null,
        }),
          g === null ? ((x = g = j), (c = h)) : (g = g.next = j),
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
    (nr |= a), (e.lanes = a), (e.memoizedState = h);
  }
}
function lc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var s = e[t],
        o = s.callback;
      if (o !== null) {
        if (((s.callback = null), (s = n), typeof o != "function"))
          throw Error(le(191, o));
        o.call(s);
      }
    }
}
var $s = {},
  cn = Gn($s),
  Cs = Gn($s),
  ks = Gn($s);
function Qn(e) {
  if (e === $s) throw Error(le(174));
  return e;
}
function Ja(e, t) {
  switch ((He(ks, t), He(Cs, e), He(cn, $s), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Bl(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Bl(t, e));
  }
  We(cn), He(cn, t);
}
function $r() {
  We(cn), We(Cs), We(ks);
}
function Qd(e) {
  Qn(ks.current);
  var t = Qn(cn.current),
    n = Bl(t, e.type);
  t !== n && (He(Cs, e), He(cn, n));
}
function Za(e) {
  Cs.current === e && (We(cn), We(Cs));
}
var Qe = Gn(0);
function Io(e) {
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
var jl = [];
function ei() {
  for (var e = 0; e < jl.length; e++)
    jl[e]._workInProgressVersionPrimary = null;
  jl.length = 0;
}
var ao = bn.ReactCurrentDispatcher,
  Sl = bn.ReactCurrentBatchConfig,
  tr = 0,
  Ke = null,
  ot = null,
  it = null,
  Po = !1,
  cs = !1,
  Ds = 0,
  gm = 0;
function ht() {
  throw Error(le(321));
}
function ti(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!nn(e[n], t[n])) return !1;
  return !0;
}
function ni(e, t, n, s, o, l) {
  if (
    ((tr = l),
    (Ke = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ao.current = e === null || e.memoizedState === null ? wm : bm),
    (e = n(s, o)),
    cs)
  ) {
    l = 0;
    do {
      if (((cs = !1), (Ds = 0), 25 <= l)) throw Error(le(301));
      (l += 1),
        (it = ot = null),
        (t.updateQueue = null),
        (ao.current = Nm),
        (e = n(s, o));
    } while (cs);
  }
  if (
    ((ao.current = To),
    (t = ot !== null && ot.next !== null),
    (tr = 0),
    (it = ot = Ke = null),
    (Po = !1),
    t)
  )
    throw Error(le(300));
  return e;
}
function ri() {
  var e = Ds !== 0;
  return (Ds = 0), e;
}
function on() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return it === null ? (Ke.memoizedState = it = e) : (it = it.next = e), it;
}
function Wt() {
  if (ot === null) {
    var e = Ke.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ot.next;
  var t = it === null ? Ke.memoizedState : it.next;
  if (t !== null) (it = t), (ot = e);
  else {
    if (e === null) throw Error(le(310));
    (ot = e),
      (e = {
        memoizedState: ot.memoizedState,
        baseState: ot.baseState,
        baseQueue: ot.baseQueue,
        queue: ot.queue,
        next: null,
      }),
      it === null ? (Ke.memoizedState = it = e) : (it = it.next = e);
  }
  return it;
}
function _s(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Cl(e) {
  var t = Wt(),
    n = t.queue;
  if (n === null) throw Error(le(311));
  n.lastRenderedReducer = e;
  var s = ot,
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
      if ((tr & g) === g)
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
          (Ke.lanes |= g),
          (nr |= g);
      }
      x = x.next;
    } while (x !== null && x !== l);
    c === null ? (a = s) : (c.next = i),
      nn(s, t.memoizedState) || (kt = !0),
      (t.memoizedState = s),
      (t.baseState = a),
      (t.baseQueue = c),
      (n.lastRenderedState = s);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (l = o.lane), (Ke.lanes |= l), (nr |= l), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function kl(e) {
  var t = Wt(),
    n = t.queue;
  if (n === null) throw Error(le(311));
  n.lastRenderedReducer = e;
  var s = n.dispatch,
    o = n.pending,
    l = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var a = (o = o.next);
    do (l = e(l, a.action)), (a = a.next);
    while (a !== o);
    nn(l, t.memoizedState) || (kt = !0),
      (t.memoizedState = l),
      t.baseQueue === null && (t.baseState = l),
      (n.lastRenderedState = l);
  }
  return [l, s];
}
function Kd() {}
function Jd(e, t) {
  var n = Ke,
    s = Wt(),
    o = t(),
    l = !nn(s.memoizedState, o);
  if (
    (l && ((s.memoizedState = o), (kt = !0)),
    (s = s.queue),
    si(tu.bind(null, n, s, e), [e]),
    s.getSnapshot !== t || l || (it !== null && it.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Ms(9, eu.bind(null, n, s, o, t), void 0, null),
      dt === null)
    )
      throw Error(le(349));
    tr & 30 || Zd(n, t, o);
  }
  return o;
}
function Zd(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Ke.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ke.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function eu(e, t, n, s) {
  (t.value = n), (t.getSnapshot = s), nu(t) && ru(e);
}
function tu(e, t, n) {
  return n(function () {
    nu(t) && ru(e);
  });
}
function nu(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !nn(e, n);
  } catch {
    return !0;
  }
}
function ru(e) {
  var t = vn(e, 1);
  t !== null && tn(t, e, 1, -1);
}
function ac(e) {
  var t = on();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: _s,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = vm.bind(null, Ke, e)),
    [t.memoizedState, e]
  );
}
function Ms(e, t, n, s) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: s, next: null }),
    (t = Ke.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ke.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((s = n.next), (n.next = e), (e.next = s), (t.lastEffect = e))),
    e
  );
}
function su() {
  return Wt().memoizedState;
}
function io(e, t, n, s) {
  var o = on();
  (Ke.flags |= e),
    (o.memoizedState = Ms(1 | t, n, void 0, s === void 0 ? null : s));
}
function qo(e, t, n, s) {
  var o = Wt();
  s = s === void 0 ? null : s;
  var l = void 0;
  if (ot !== null) {
    var a = ot.memoizedState;
    if (((l = a.destroy), s !== null && ti(s, a.deps))) {
      o.memoizedState = Ms(t, n, l, s);
      return;
    }
  }
  (Ke.flags |= e), (o.memoizedState = Ms(1 | t, n, l, s));
}
function ic(e, t) {
  return io(8390656, 8, e, t);
}
function si(e, t) {
  return qo(2048, 8, e, t);
}
function ou(e, t) {
  return qo(4, 2, e, t);
}
function lu(e, t) {
  return qo(4, 4, e, t);
}
function au(e, t) {
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
function iu(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), qo(4, 4, au.bind(null, t, e), n)
  );
}
function oi() {}
function cu(e, t) {
  var n = Wt();
  t = t === void 0 ? null : t;
  var s = n.memoizedState;
  return s !== null && t !== null && ti(t, s[1])
    ? s[0]
    : ((n.memoizedState = [e, t]), e);
}
function du(e, t) {
  var n = Wt();
  t = t === void 0 ? null : t;
  var s = n.memoizedState;
  return s !== null && t !== null && ti(t, s[1])
    ? s[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function uu(e, t, n) {
  return tr & 21
    ? (nn(n, t) || ((n = gd()), (Ke.lanes |= n), (nr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (kt = !0)), (e.memoizedState = n));
}
function xm(e, t) {
  var n = Fe;
  (Fe = n !== 0 && 4 > n ? n : 4), e(!0);
  var s = Sl.transition;
  Sl.transition = {};
  try {
    e(!1), t();
  } finally {
    (Fe = n), (Sl.transition = s);
  }
}
function fu() {
  return Wt().memoizedState;
}
function ym(e, t, n) {
  var s = On(e);
  if (
    ((n = {
      lane: s,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    pu(e))
  )
    mu(t, n);
  else if (((n = Yd(e, t, n, s)), n !== null)) {
    var o = wt();
    tn(n, e, s, o), hu(n, t, s);
  }
}
function vm(e, t, n) {
  var s = On(e),
    o = { lane: s, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (pu(e)) mu(t, o);
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
        if (((o.hasEagerState = !0), (o.eagerState = i), nn(i, a))) {
          var c = t.interleaved;
          c === null
            ? ((o.next = o), Qa(t))
            : ((o.next = c.next), (c.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Yd(e, t, o, s)),
      n !== null && ((o = wt()), tn(n, e, s, o), hu(n, t, s));
  }
}
function pu(e) {
  var t = e.alternate;
  return e === Ke || (t !== null && t === Ke);
}
function mu(e, t) {
  cs = Po = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function hu(e, t, n) {
  if (n & 4194240) {
    var s = t.lanes;
    (s &= e.pendingLanes), (n |= s), (t.lanes = n), Aa(e, n);
  }
}
var To = {
    readContext: qt,
    useCallback: ht,
    useContext: ht,
    useEffect: ht,
    useImperativeHandle: ht,
    useInsertionEffect: ht,
    useLayoutEffect: ht,
    useMemo: ht,
    useReducer: ht,
    useRef: ht,
    useState: ht,
    useDebugValue: ht,
    useDeferredValue: ht,
    useTransition: ht,
    useMutableSource: ht,
    useSyncExternalStore: ht,
    useId: ht,
    unstable_isNewReconciler: !1,
  },
  wm = {
    readContext: qt,
    useCallback: function (e, t) {
      return (on().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: qt,
    useEffect: ic,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        io(4194308, 4, au.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return io(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return io(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = on();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var s = on();
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
        (e = e.dispatch = ym.bind(null, Ke, e)),
        [s.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = on();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: ac,
    useDebugValue: oi,
    useDeferredValue: function (e) {
      return (on().memoizedState = e);
    },
    useTransition: function () {
      var e = ac(!1),
        t = e[0];
      return (e = xm.bind(null, e[1])), (on().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var s = Ke,
        o = on();
      if (Ye) {
        if (n === void 0) throw Error(le(407));
        n = n();
      } else {
        if (((n = t()), dt === null)) throw Error(le(349));
        tr & 30 || Zd(s, t, n);
      }
      o.memoizedState = n;
      var l = { value: n, getSnapshot: t };
      return (
        (o.queue = l),
        ic(tu.bind(null, s, l, e), [e]),
        (s.flags |= 2048),
        Ms(9, eu.bind(null, s, l, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = on(),
        t = dt.identifierPrefix;
      if (Ye) {
        var n = hn,
          s = mn;
        (n = (s & ~(1 << (32 - en(s) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Ds++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = gm++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  bm = {
    readContext: qt,
    useCallback: cu,
    useContext: qt,
    useEffect: si,
    useImperativeHandle: iu,
    useInsertionEffect: ou,
    useLayoutEffect: lu,
    useMemo: du,
    useReducer: Cl,
    useRef: su,
    useState: function () {
      return Cl(_s);
    },
    useDebugValue: oi,
    useDeferredValue: function (e) {
      var t = Wt();
      return uu(t, ot.memoizedState, e);
    },
    useTransition: function () {
      var e = Cl(_s)[0],
        t = Wt().memoizedState;
      return [e, t];
    },
    useMutableSource: Kd,
    useSyncExternalStore: Jd,
    useId: fu,
    unstable_isNewReconciler: !1,
  },
  Nm = {
    readContext: qt,
    useCallback: cu,
    useContext: qt,
    useEffect: si,
    useImperativeHandle: iu,
    useInsertionEffect: ou,
    useLayoutEffect: lu,
    useMemo: du,
    useReducer: kl,
    useRef: su,
    useState: function () {
      return kl(_s);
    },
    useDebugValue: oi,
    useDeferredValue: function (e) {
      var t = Wt();
      return ot === null ? (t.memoizedState = e) : uu(t, ot.memoizedState, e);
    },
    useTransition: function () {
      var e = kl(_s)[0],
        t = Wt().memoizedState;
      return [e, t];
    },
    useMutableSource: Kd,
    useSyncExternalStore: Jd,
    useId: fu,
    unstable_isNewReconciler: !1,
  };
function Kt(e, t) {
  if (e && e.defaultProps) {
    (t = Je({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function aa(e, t, n, s) {
  (t = e.memoizedState),
    (n = n(s, t)),
    (n = n == null ? t : Je({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Wo = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? or(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var s = wt(),
      o = On(e),
      l = gn(s, o);
    (l.payload = t),
      n != null && (l.callback = n),
      (t = $n(e, l, o)),
      t !== null && (tn(t, e, o, s), lo(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var s = wt(),
      o = On(e),
      l = gn(s, o);
    (l.tag = 1),
      (l.payload = t),
      n != null && (l.callback = n),
      (t = $n(e, l, o)),
      t !== null && (tn(t, e, o, s), lo(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = wt(),
      s = On(e),
      o = gn(n, s);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = $n(e, o, s)),
      t !== null && (tn(t, e, s, n), lo(t, e, s));
  },
};
function cc(e, t, n, s, o, l, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(s, l, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !bs(n, s) || !bs(o, l)
      : !0
  );
}
function gu(e, t, n) {
  var s = !1,
    o = Bn,
    l = t.contextType;
  return (
    typeof l == "object" && l !== null
      ? (l = qt(l))
      : ((o = Mt(t) ? Zn : yt.current),
        (s = t.contextTypes),
        (l = (s = s != null) ? Pr(e, o) : Bn)),
    (t = new t(n, l)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Wo),
    (e.stateNode = t),
    (t._reactInternals = e),
    s &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    t
  );
}
function dc(e, t, n, s) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, s),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, s),
    t.state !== e && Wo.enqueueReplaceState(t, t.state, null);
}
function ia(e, t, n, s) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), Ka(e);
  var l = t.contextType;
  typeof l == "object" && l !== null
    ? (o.context = qt(l))
    : ((l = Mt(t) ? Zn : yt.current), (o.context = Pr(e, l))),
    (o.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l == "function" && (aa(e, t, l, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Wo.enqueueReplaceState(o, o.state, null),
      Eo(e, n, o, s),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Ar(e, t) {
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
function Dl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ca(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var jm = typeof WeakMap == "function" ? WeakMap : Map;
function xu(e, t, n) {
  (n = gn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var s = t.value;
  return (
    (n.callback = function () {
      $o || (($o = !0), (va = s)), ca(e, t);
    }),
    n
  );
}
function yu(e, t, n) {
  (n = gn(-1, n)), (n.tag = 3);
  var s = e.type.getDerivedStateFromError;
  if (typeof s == "function") {
    var o = t.value;
    (n.payload = function () {
      return s(o);
    }),
      (n.callback = function () {
        ca(e, t);
      });
  }
  var l = e.stateNode;
  return (
    l !== null &&
      typeof l.componentDidCatch == "function" &&
      (n.callback = function () {
        ca(e, t),
          typeof s != "function" &&
            (An === null ? (An = new Set([this])) : An.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : "",
        });
      }),
    n
  );
}
function uc(e, t, n) {
  var s = e.pingCache;
  if (s === null) {
    s = e.pingCache = new jm();
    var o = new Set();
    s.set(t, o);
  } else (o = s.get(t)), o === void 0 && ((o = new Set()), s.set(t, o));
  o.has(n) || (o.add(n), (e = Om.bind(null, e, t, n)), t.then(e, e));
}
function fc(e) {
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
function pc(e, t, n, s, o) {
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
              : ((t = gn(-1, 1)), (t.tag = 2), $n(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Sm = bn.ReactCurrentOwner,
  kt = !1;
function vt(e, t, n, s) {
  t.child = e === null ? Wd(t, null, n, s) : Rr(t, e.child, n, s);
}
function mc(e, t, n, s, o) {
  n = n.render;
  var l = t.ref;
  return (
    Mr(t, o),
    (s = ni(e, t, n, s, l, o)),
    (n = ri()),
    e !== null && !kt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        wn(e, t, o))
      : (Ye && n && Va(t), (t.flags |= 1), vt(e, t, s, o), t.child)
  );
}
function hc(e, t, n, s, o) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" &&
      !pi(l) &&
      l.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), vu(e, t, l, s, o))
      : ((e = po(n.type, null, s, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((l = e.child), !(e.lanes & o))) {
    var a = l.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : bs), n(a, s) && e.ref === t.ref)
    )
      return wn(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Ln(l, s)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function vu(e, t, n, s, o) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (bs(l, s) && e.ref === t.ref)
      if (((kt = !1), (t.pendingProps = s = l), (e.lanes & o) !== 0))
        e.flags & 131072 && (kt = !0);
      else return (t.lanes = e.lanes), wn(e, t, o);
  }
  return da(e, t, n, s, o);
}
function wu(e, t, n) {
  var s = t.pendingProps,
    o = s.children,
    l = e !== null ? e.memoizedState : null;
  if (s.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        He(Nr, Rt),
        (Rt |= n);
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
          He(Nr, Rt),
          (Rt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (s = l !== null ? l.baseLanes : n),
        He(Nr, Rt),
        (Rt |= s);
    }
  else
    l !== null ? ((s = l.baseLanes | n), (t.memoizedState = null)) : (s = n),
      He(Nr, Rt),
      (Rt |= s);
  return vt(e, t, o, n), t.child;
}
function bu(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function da(e, t, n, s, o) {
  var l = Mt(n) ? Zn : yt.current;
  return (
    (l = Pr(t, l)),
    Mr(t, o),
    (n = ni(e, t, n, s, l, o)),
    (s = ri()),
    e !== null && !kt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        wn(e, t, o))
      : (Ye && s && Va(t), (t.flags |= 1), vt(e, t, n, o), t.child)
  );
}
function gc(e, t, n, s, o) {
  if (Mt(n)) {
    var l = !0;
    Co(t);
  } else l = !1;
  if ((Mr(t, o), t.stateNode === null))
    co(e, t), gu(t, n, s), ia(t, n, s, o), (s = !0);
  else if (e === null) {
    var a = t.stateNode,
      i = t.memoizedProps;
    a.props = i;
    var c = a.context,
      x = n.contextType;
    typeof x == "object" && x !== null
      ? (x = qt(x))
      : ((x = Mt(n) ? Zn : yt.current), (x = Pr(t, x)));
    var g = n.getDerivedStateFromProps,
      h =
        typeof g == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    h ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((i !== s || c !== x) && dc(t, a, s, x)),
      (Cn = !1);
    var m = t.memoizedState;
    (a.state = m),
      Eo(t, s, a, o),
      (c = t.memoizedState),
      i !== s || m !== c || _t.current || Cn
        ? (typeof g == "function" && (aa(t, n, g, s), (c = t.memoizedState)),
          (i = Cn || cc(t, n, i, s, m, c, x))
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
      Xd(e, t),
      (i = t.memoizedProps),
      (x = t.type === t.elementType ? i : Kt(t.type, i)),
      (a.props = x),
      (h = t.pendingProps),
      (m = a.context),
      (c = n.contextType),
      typeof c == "object" && c !== null
        ? (c = qt(c))
        : ((c = Mt(n) ? Zn : yt.current), (c = Pr(t, c)));
    var j = n.getDerivedStateFromProps;
    (g =
      typeof j == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((i !== h || m !== c) && dc(t, a, s, c)),
      (Cn = !1),
      (m = t.memoizedState),
      (a.state = m),
      Eo(t, s, a, o);
    var S = t.memoizedState;
    i !== h || m !== S || _t.current || Cn
      ? (typeof j == "function" && (aa(t, n, j, s), (S = t.memoizedState)),
        (x = Cn || cc(t, n, x, s, m, S, c) || !1)
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
              (i === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (i === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = s),
            (t.memoizedState = S)),
        (a.props = s),
        (a.state = S),
        (a.context = c),
        (s = x))
      : (typeof a.componentDidUpdate != "function" ||
          (i === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" ||
          (i === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (s = !1));
  }
  return ua(e, t, n, s, l, o);
}
function ua(e, t, n, s, o, l) {
  bu(e, t);
  var a = (t.flags & 128) !== 0;
  if (!s && !a) return o && tc(t, n, !1), wn(e, t, l);
  (s = t.stateNode), (Sm.current = t);
  var i =
    a && typeof n.getDerivedStateFromError != "function" ? null : s.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = Rr(t, e.child, null, l)), (t.child = Rr(t, null, i, l)))
      : vt(e, t, i, l),
    (t.memoizedState = s.state),
    o && tc(t, n, !0),
    t.child
  );
}
function Nu(e) {
  var t = e.stateNode;
  t.pendingContext
    ? ec(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && ec(e, t.context, !1),
    Ja(e, t.containerInfo);
}
function xc(e, t, n, s, o) {
  return Tr(), qa(o), (t.flags |= 256), vt(e, t, n, s), t.child;
}
var fa = { dehydrated: null, treeContext: null, retryLane: 0 };
function pa(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function ju(e, t, n) {
  var s = t.pendingProps,
    o = Qe.current,
    l = !1,
    a = (t.flags & 128) !== 0,
    i;
  if (
    ((i = a) ||
      (i = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    i
      ? ((l = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    He(Qe, o & 1),
    e === null)
  )
    return (
      oa(t),
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
                : (l = Qo(a, s, 0, null)),
              (e = Jn(e, s, n, null)),
              (l.return = t),
              (e.return = t),
              (l.sibling = e),
              (t.child = l),
              (t.child.memoizedState = pa(n)),
              (t.memoizedState = fa),
              e)
            : li(t, a))
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
        : ((s = Ln(o, c)), (s.subtreeFlags = o.subtreeFlags & 14680064)),
      i !== null ? (l = Ln(i, l)) : ((l = Jn(l, a, n, null)), (l.flags |= 2)),
      (l.return = t),
      (s.return = t),
      (s.sibling = l),
      (t.child = s),
      (s = l),
      (l = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? pa(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (l.memoizedState = a),
      (l.childLanes = e.childLanes & ~n),
      (t.memoizedState = fa),
      s
    );
  }
  return (
    (l = e.child),
    (e = l.sibling),
    (s = Ln(l, { mode: "visible", children: s.children })),
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
function li(e, t) {
  return (
    (t = Qo({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Qs(e, t, n, s) {
  return (
    s !== null && qa(s),
    Rr(t, e.child, null, n),
    (e = li(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Cm(e, t, n, s, o, l, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (s = Dl(Error(le(422)))), Qs(e, t, a, s))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((l = s.fallback),
        (o = t.mode),
        (s = Qo({ mode: "visible", children: s.children }, o, 0, null)),
        (l = Jn(l, o, a, null)),
        (l.flags |= 2),
        (s.return = t),
        (l.return = t),
        (s.sibling = l),
        (t.child = s),
        t.mode & 1 && Rr(t, e.child, null, a),
        (t.child.memoizedState = pa(a)),
        (t.memoizedState = fa),
        l);
  if (!(t.mode & 1)) return Qs(e, t, a, null);
  if (o.data === "$!") {
    if (((s = o.nextSibling && o.nextSibling.dataset), s)) var i = s.dgst;
    return (
      (s = i), (l = Error(le(419))), (s = Dl(l, s, void 0)), Qs(e, t, a, s)
    );
  }
  if (((i = (a & e.childLanes) !== 0), kt || i)) {
    if (((s = dt), s !== null)) {
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
          ((l.retryLane = o), vn(e, o), tn(s, e, o, -1));
    }
    return fi(), (s = Dl(Error(le(421)))), Qs(e, t, a, s);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Lm.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = l.treeContext),
      ($t = Rn(o.nextSibling)),
      (At = t),
      (Ye = !0),
      (Zt = null),
      e !== null &&
        ((Gt[Ft++] = mn),
        (Gt[Ft++] = hn),
        (Gt[Ft++] = er),
        (mn = e.id),
        (hn = e.overflow),
        (er = t)),
      (t = li(t, s.children)),
      (t.flags |= 4096),
      t);
}
function yc(e, t, n) {
  e.lanes |= t;
  var s = e.alternate;
  s !== null && (s.lanes |= t), la(e.return, t, n);
}
function _l(e, t, n, s, o) {
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
function Su(e, t, n) {
  var s = t.pendingProps,
    o = s.revealOrder,
    l = s.tail;
  if ((vt(e, t, s.children, n), (s = Qe.current), s & 2))
    (s = (s & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && yc(e, n, t);
        else if (e.tag === 19) yc(e, n, t);
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
  if ((He(Qe, s), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && Io(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          _l(t, !1, o, n, l);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Io(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        _l(t, !0, n, null, l);
        break;
      case "together":
        _l(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function co(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function wn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (nr |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(le(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Ln(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Ln(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function km(e, t, n) {
  switch (t.tag) {
    case 3:
      Nu(t), Tr();
      break;
    case 5:
      Qd(t);
      break;
    case 1:
      Mt(t.type) && Co(t);
      break;
    case 4:
      Ja(t, t.stateNode.containerInfo);
      break;
    case 10:
      var s = t.type._context,
        o = t.memoizedProps.value;
      He(_o, s._currentValue), (s._currentValue = o);
      break;
    case 13:
      if (((s = t.memoizedState), s !== null))
        return s.dehydrated !== null
          ? (He(Qe, Qe.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? ju(e, t, n)
          : (He(Qe, Qe.current & 1),
            (e = wn(e, t, n)),
            e !== null ? e.sibling : null);
      He(Qe, Qe.current & 1);
      break;
    case 19:
      if (((s = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (s) return Su(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        He(Qe, Qe.current),
        s)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), wu(e, t, n);
  }
  return wn(e, t, n);
}
var Cu, ma, ku, Du;
Cu = function (e, t) {
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
ma = function () {};
ku = function (e, t, n, s) {
  var o = e.memoizedProps;
  if (o !== s) {
    (e = t.stateNode), Qn(cn.current);
    var l = null;
    switch (n) {
      case "input":
        (o = Al(e, o)), (s = Al(e, s)), (l = []);
        break;
      case "select":
        (o = Je({}, o, { value: void 0 })),
          (s = Je({}, s, { value: void 0 })),
          (l = []);
        break;
      case "textarea":
        (o = Ul(e, o)), (s = Ul(e, s)), (l = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof s.onClick == "function" &&
          (e.onclick = jo);
    }
    zl(n, s);
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
            (ms.hasOwnProperty(x)
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
              (ms.hasOwnProperty(x)
                ? (c != null && x === "onScroll" && qe("scroll", e),
                  l || i === c || (l = []))
                : (l = l || []).push(x, c));
    }
    n && (l = l || []).push("style", n);
    var x = l;
    (t.updateQueue = x) && (t.flags |= 4);
  }
};
Du = function (e, t, n, s) {
  n !== s && (t.flags |= 4);
};
function Kr(e, t) {
  if (!Ye)
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
function gt(e) {
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
  switch ((Ha(t), t.tag)) {
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
      return gt(t), null;
    case 1:
      return Mt(t.type) && So(), gt(t), null;
    case 3:
      return (
        (s = t.stateNode),
        $r(),
        We(_t),
        We(yt),
        ei(),
        s.pendingContext &&
          ((s.context = s.pendingContext), (s.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ys(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Zt !== null && (Na(Zt), (Zt = null)))),
        ma(e, t),
        gt(t),
        null
      );
    case 5:
      Za(t);
      var o = Qn(ks.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        ku(e, t, n, s, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!s) {
          if (t.stateNode === null) throw Error(le(166));
          return gt(t), null;
        }
        if (((e = Qn(cn.current)), Ys(t))) {
          (s = t.stateNode), (n = t.type);
          var l = t.memoizedProps;
          switch (((s[ln] = t), (s[Ss] = l), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              qe("cancel", s), qe("close", s);
              break;
            case "iframe":
            case "object":
            case "embed":
              qe("load", s);
              break;
            case "video":
            case "audio":
              for (o = 0; o < rs.length; o++) qe(rs[o], s);
              break;
            case "source":
              qe("error", s);
              break;
            case "img":
            case "image":
            case "link":
              qe("error", s), qe("load", s);
              break;
            case "details":
              qe("toggle", s);
              break;
            case "input":
              Di(s, l), qe("invalid", s);
              break;
            case "select":
              (s._wrapperState = { wasMultiple: !!l.multiple }),
                qe("invalid", s);
              break;
            case "textarea":
              Mi(s, l), qe("invalid", s);
          }
          zl(n, l), (o = null);
          for (var a in l)
            if (l.hasOwnProperty(a)) {
              var i = l[a];
              a === "children"
                ? typeof i == "string"
                  ? s.textContent !== i &&
                    (l.suppressHydrationWarning !== !0 &&
                      Ws(s.textContent, i, e),
                    (o = ["children", i]))
                  : typeof i == "number" &&
                    s.textContent !== "" + i &&
                    (l.suppressHydrationWarning !== !0 &&
                      Ws(s.textContent, i, e),
                    (o = ["children", "" + i]))
                : ms.hasOwnProperty(a) &&
                  i != null &&
                  a === "onScroll" &&
                  qe("scroll", s);
            }
          switch (n) {
            case "input":
              Us(s), _i(s, l, !0);
              break;
            case "textarea":
              Us(s), Ei(s);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (s.onclick = jo);
          }
          (s = o), (t.updateQueue = s), s !== null && (t.flags |= 4);
        } else {
          (a = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = td(n)),
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
            (e[ln] = t),
            (e[Ss] = s),
            Cu(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((a = Gl(n, s)), n)) {
              case "dialog":
                qe("cancel", e), qe("close", e), (o = s);
                break;
              case "iframe":
              case "object":
              case "embed":
                qe("load", e), (o = s);
                break;
              case "video":
              case "audio":
                for (o = 0; o < rs.length; o++) qe(rs[o], e);
                o = s;
                break;
              case "source":
                qe("error", e), (o = s);
                break;
              case "img":
              case "image":
              case "link":
                qe("error", e), qe("load", e), (o = s);
                break;
              case "details":
                qe("toggle", e), (o = s);
                break;
              case "input":
                Di(e, s), (o = Al(e, s)), qe("invalid", e);
                break;
              case "option":
                o = s;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!s.multiple }),
                  (o = Je({}, s, { value: void 0 })),
                  qe("invalid", e);
                break;
              case "textarea":
                Mi(e, s), (o = Ul(e, s)), qe("invalid", e);
                break;
              default:
                o = s;
            }
            zl(n, o), (i = o);
            for (l in i)
              if (i.hasOwnProperty(l)) {
                var c = i[l];
                l === "style"
                  ? sd(e, c)
                  : l === "dangerouslySetInnerHTML"
                  ? ((c = c ? c.__html : void 0), c != null && nd(e, c))
                  : l === "children"
                  ? typeof c == "string"
                    ? (n !== "textarea" || c !== "") && hs(e, c)
                    : typeof c == "number" && hs(e, "" + c)
                  : l !== "suppressContentEditableWarning" &&
                    l !== "suppressHydrationWarning" &&
                    l !== "autoFocus" &&
                    (ms.hasOwnProperty(l)
                      ? c != null && l === "onScroll" && qe("scroll", e)
                      : c != null && Ea(e, l, c, a));
              }
            switch (n) {
              case "input":
                Us(e), _i(e, s, !1);
                break;
              case "textarea":
                Us(e), Ei(e);
                break;
              case "option":
                s.value != null && e.setAttribute("value", "" + Un(s.value));
                break;
              case "select":
                (e.multiple = !!s.multiple),
                  (l = s.value),
                  l != null
                    ? Cr(e, !!s.multiple, l, !1)
                    : s.defaultValue != null &&
                      Cr(e, !!s.multiple, s.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = jo);
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
      return gt(t), null;
    case 6:
      if (e && t.stateNode != null) Du(e, t, e.memoizedProps, s);
      else {
        if (typeof s != "string" && t.stateNode === null) throw Error(le(166));
        if (((n = Qn(ks.current)), Qn(cn.current), Ys(t))) {
          if (
            ((s = t.stateNode),
            (n = t.memoizedProps),
            (s[ln] = t),
            (l = s.nodeValue !== n) && ((e = At), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ws(s.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ws(s.nodeValue, n, (e.mode & 1) !== 0);
            }
          l && (t.flags |= 4);
        } else
          (s = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(s)),
            (s[ln] = t),
            (t.stateNode = s);
      }
      return gt(t), null;
    case 13:
      if (
        (We(Qe),
        (s = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Ye && $t !== null && t.mode & 1 && !(t.flags & 128))
          Hd(), Tr(), (t.flags |= 98560), (l = !1);
        else if (((l = Ys(t)), s !== null && s.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(le(318));
            if (
              ((l = t.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(le(317));
            l[ln] = t;
          } else
            Tr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          gt(t), (l = !1);
        } else Zt !== null && (Na(Zt), (Zt = null)), (l = !0);
        if (!l) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((s = s !== null),
          s !== (e !== null && e.memoizedState !== null) &&
            s &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Qe.current & 1 ? lt === 0 && (lt = 3) : fi())),
          t.updateQueue !== null && (t.flags |= 4),
          gt(t),
          null);
    case 4:
      return (
        $r(), ma(e, t), e === null && Ns(t.stateNode.containerInfo), gt(t), null
      );
    case 10:
      return Xa(t.type._context), gt(t), null;
    case 17:
      return Mt(t.type) && So(), gt(t), null;
    case 19:
      if ((We(Qe), (l = t.memoizedState), l === null)) return gt(t), null;
      if (((s = (t.flags & 128) !== 0), (a = l.rendering), a === null))
        if (s) Kr(l, !1);
        else {
          if (lt !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = Io(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    Kr(l, !1),
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
                return He(Qe, (Qe.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          l.tail !== null &&
            nt() > Or &&
            ((t.flags |= 128), (s = !0), Kr(l, !1), (t.lanes = 4194304));
        }
      else {
        if (!s)
          if (((e = Io(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (s = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Kr(l, !0),
              l.tail === null && l.tailMode === "hidden" && !a.alternate && !Ye)
            )
              return gt(t), null;
          } else
            2 * nt() - l.renderingStartTime > Or &&
              n !== 1073741824 &&
              ((t.flags |= 128), (s = !0), Kr(l, !1), (t.lanes = 4194304));
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
          (l.renderingStartTime = nt()),
          (t.sibling = null),
          (n = Qe.current),
          He(Qe, s ? (n & 1) | 2 : n & 1),
          t)
        : (gt(t), null);
    case 22:
    case 23:
      return (
        ui(),
        (s = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== s && (t.flags |= 8192),
        s && t.mode & 1
          ? Rt & 1073741824 && (gt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : gt(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(le(156, t.tag));
}
function _m(e, t) {
  switch ((Ha(t), t.tag)) {
    case 1:
      return (
        Mt(t.type) && So(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        $r(),
        We(_t),
        We(yt),
        ei(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Za(t), null;
    case 13:
      if (
        (We(Qe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(le(340));
        Tr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return We(Qe), null;
    case 4:
      return $r(), null;
    case 10:
      return Xa(t.type._context), null;
    case 22:
    case 23:
      return ui(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ks = !1,
  xt = !1,
  Mm = typeof WeakSet == "function" ? WeakSet : Set,
  Se = null;
function br(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (s) {
        et(e, t, s);
      }
    else n.current = null;
}
function ha(e, t, n) {
  try {
    n();
  } catch (s) {
    et(e, t, s);
  }
}
var vc = !1;
function Em(e, t) {
  if (((Jl = wo), (e = Pd()), Fa(e))) {
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
            m = null;
          t: for (;;) {
            for (
              var j;
              h !== n || (o !== 0 && h.nodeType !== 3) || (i = a + o),
                h !== l || (s !== 0 && h.nodeType !== 3) || (c = a + s),
                h.nodeType === 3 && (a += h.nodeValue.length),
                (j = h.firstChild) !== null;

            )
              (m = h), (h = j);
            for (;;) {
              if (h === e) break t;
              if (
                (m === n && ++x === o && (i = a),
                m === l && ++g === s && (c = a),
                (j = h.nextSibling) !== null)
              )
                break;
              (h = m), (m = h.parentNode);
            }
            h = j;
          }
          n = i === -1 || c === -1 ? null : { start: i, end: c };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (
    Zl = { focusedElem: e, selectionRange: n }, wo = !1, Se = t;
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
                  var M = S.memoizedProps,
                    R = S.memoizedState,
                    d = t.stateNode,
                    u = d.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? M : Kt(t.type, M),
                      R
                    );
                  d.__reactInternalSnapshotBeforeUpdate = u;
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
                throw Error(le(163));
            }
        } catch (E) {
          et(t, t.return, E);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (Se = e);
          break;
        }
        Se = t.return;
      }
  return (S = vc), (vc = !1), S;
}
function ds(e, t, n) {
  var s = t.updateQueue;
  if (((s = s !== null ? s.lastEffect : null), s !== null)) {
    var o = (s = s.next);
    do {
      if ((o.tag & e) === e) {
        var l = o.destroy;
        (o.destroy = void 0), l !== void 0 && ha(t, n, l);
      }
      o = o.next;
    } while (o !== s);
  }
}
function Yo(e, t) {
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
function ga(e) {
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
function _u(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), _u(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[ln], delete t[Ss], delete t[na], delete t[fm], delete t[pm])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Mu(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function wc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Mu(e.return)) return null;
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
function xa(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = jo));
  else if (s !== 4 && ((e = e.child), e !== null))
    for (xa(e, t, n), e = e.sibling; e !== null; ) xa(e, t, n), (e = e.sibling);
}
function ya(e, t, n) {
  var s = e.tag;
  if (s === 5 || s === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (s !== 4 && ((e = e.child), e !== null))
    for (ya(e, t, n), e = e.sibling; e !== null; ) ya(e, t, n), (e = e.sibling);
}
var ut = null,
  Jt = !1;
function jn(e, t, n) {
  for (n = n.child; n !== null; ) Eu(e, t, n), (n = n.sibling);
}
function Eu(e, t, n) {
  if (an && typeof an.onCommitFiberUnmount == "function")
    try {
      an.onCommitFiberUnmount(Bo, n);
    } catch {}
  switch (n.tag) {
    case 5:
      xt || br(n, t);
    case 6:
      var s = ut,
        o = Jt;
      (ut = null),
        jn(e, t, n),
        (ut = s),
        (Jt = o),
        ut !== null &&
          (Jt
            ? ((e = ut),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ut.removeChild(n.stateNode));
      break;
    case 18:
      ut !== null &&
        (Jt
          ? ((e = ut),
            (n = n.stateNode),
            e.nodeType === 8
              ? bl(e.parentNode, n)
              : e.nodeType === 1 && bl(e, n),
            vs(e))
          : bl(ut, n.stateNode));
      break;
    case 4:
      (s = ut),
        (o = Jt),
        (ut = n.stateNode.containerInfo),
        (Jt = !0),
        jn(e, t, n),
        (ut = s),
        (Jt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !xt &&
        ((s = n.updateQueue), s !== null && ((s = s.lastEffect), s !== null))
      ) {
        o = s = s.next;
        do {
          var l = o,
            a = l.destroy;
          (l = l.tag),
            a !== void 0 && (l & 2 || l & 4) && ha(n, t, a),
            (o = o.next);
        } while (o !== s);
      }
      jn(e, t, n);
      break;
    case 1:
      if (
        !xt &&
        (br(n, t),
        (s = n.stateNode),
        typeof s.componentWillUnmount == "function")
      )
        try {
          (s.props = n.memoizedProps),
            (s.state = n.memoizedState),
            s.componentWillUnmount();
        } catch (i) {
          et(n, t, i);
        }
      jn(e, t, n);
      break;
    case 21:
      jn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((xt = (s = xt) || n.memoizedState !== null), jn(e, t, n), (xt = s))
        : jn(e, t, n);
      break;
    default:
      jn(e, t, n);
  }
}
function bc(e) {
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
function Qt(e, t) {
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
              (ut = i.stateNode), (Jt = !1);
              break e;
            case 3:
              (ut = i.stateNode.containerInfo), (Jt = !0);
              break e;
            case 4:
              (ut = i.stateNode.containerInfo), (Jt = !0);
              break e;
          }
          i = i.return;
        }
        if (ut === null) throw Error(le(160));
        Eu(l, a, o), (ut = null), (Jt = !1);
        var c = o.alternate;
        c !== null && (c.return = null), (o.return = null);
      } catch (x) {
        et(o, t, x);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Iu(t, e), (t = t.sibling);
}
function Iu(e, t) {
  var n = e.alternate,
    s = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Qt(t, e), rn(e), s & 4)) {
        try {
          ds(3, e, e.return), Yo(3, e);
        } catch (M) {
          et(e, e.return, M);
        }
        try {
          ds(5, e, e.return);
        } catch (M) {
          et(e, e.return, M);
        }
      }
      break;
    case 1:
      Qt(t, e), rn(e), s & 512 && n !== null && br(n, n.return);
      break;
    case 5:
      if (
        (Qt(t, e),
        rn(e),
        s & 512 && n !== null && br(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          hs(o, "");
        } catch (M) {
          et(e, e.return, M);
        }
      }
      if (s & 4 && ((o = e.stateNode), o != null)) {
        var l = e.memoizedProps,
          a = n !== null ? n.memoizedProps : l,
          i = e.type,
          c = e.updateQueue;
        if (((e.updateQueue = null), c !== null))
          try {
            i === "input" && l.type === "radio" && l.name != null && Zc(o, l),
              Gl(i, a);
            var x = Gl(i, l);
            for (a = 0; a < c.length; a += 2) {
              var g = c[a],
                h = c[a + 1];
              g === "style"
                ? sd(o, h)
                : g === "dangerouslySetInnerHTML"
                ? nd(o, h)
                : g === "children"
                ? hs(o, h)
                : Ea(o, g, h, x);
            }
            switch (i) {
              case "input":
                Ol(o, l);
                break;
              case "textarea":
                ed(o, l);
                break;
              case "select":
                var m = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!l.multiple;
                var j = l.value;
                j != null
                  ? Cr(o, !!l.multiple, j, !1)
                  : m !== !!l.multiple &&
                    (l.defaultValue != null
                      ? Cr(o, !!l.multiple, l.defaultValue, !0)
                      : Cr(o, !!l.multiple, l.multiple ? [] : "", !1));
            }
            o[Ss] = l;
          } catch (M) {
            et(e, e.return, M);
          }
      }
      break;
    case 6:
      if ((Qt(t, e), rn(e), s & 4)) {
        if (e.stateNode === null) throw Error(le(162));
        (o = e.stateNode), (l = e.memoizedProps);
        try {
          o.nodeValue = l;
        } catch (M) {
          et(e, e.return, M);
        }
      }
      break;
    case 3:
      if (
        (Qt(t, e), rn(e), s & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          vs(t.containerInfo);
        } catch (M) {
          et(e, e.return, M);
        }
      break;
    case 4:
      Qt(t, e), rn(e);
      break;
    case 13:
      Qt(t, e),
        rn(e),
        (o = e.child),
        o.flags & 8192 &&
          ((l = o.memoizedState !== null),
          (o.stateNode.isHidden = l),
          !l ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (ci = nt())),
        s & 4 && bc(e);
      break;
    case 22:
      if (
        ((g = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((xt = (x = xt) || g), Qt(t, e), (xt = x)) : Qt(t, e),
        rn(e),
        s & 8192)
      ) {
        if (
          ((x = e.memoizedState !== null),
          (e.stateNode.isHidden = x) && !g && e.mode & 1)
        )
          for (Se = e, g = e.child; g !== null; ) {
            for (h = Se = g; Se !== null; ) {
              switch (((m = Se), (j = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ds(4, m, m.return);
                  break;
                case 1:
                  br(m, m.return);
                  var S = m.stateNode;
                  if (typeof S.componentWillUnmount == "function") {
                    (s = m), (n = m.return);
                    try {
                      (t = s),
                        (S.props = t.memoizedProps),
                        (S.state = t.memoizedState),
                        S.componentWillUnmount();
                    } catch (M) {
                      et(s, n, M);
                    }
                  }
                  break;
                case 5:
                  br(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    jc(h);
                    continue;
                  }
              }
              j !== null ? ((j.return = m), (Se = j)) : jc(h);
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
                      (i.style.display = rd("display", a)));
              } catch (M) {
                et(e, e.return, M);
              }
            }
          } else if (h.tag === 6) {
            if (g === null)
              try {
                h.stateNode.nodeValue = x ? "" : h.memoizedProps;
              } catch (M) {
                et(e, e.return, M);
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
      Qt(t, e), rn(e), s & 4 && bc(e);
      break;
    case 21:
      break;
    default:
      Qt(t, e), rn(e);
  }
}
function rn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Mu(n)) {
            var s = n;
            break e;
          }
          n = n.return;
        }
        throw Error(le(160));
      }
      switch (s.tag) {
        case 5:
          var o = s.stateNode;
          s.flags & 32 && (hs(o, ""), (s.flags &= -33));
          var l = wc(e);
          ya(e, l, o);
          break;
        case 3:
        case 4:
          var a = s.stateNode.containerInfo,
            i = wc(e);
          xa(e, i, a);
          break;
        default:
          throw Error(le(161));
      }
    } catch (c) {
      et(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Im(e, t, n) {
  (Se = e), Pu(e);
}
function Pu(e, t, n) {
  for (var s = (e.mode & 1) !== 0; Se !== null; ) {
    var o = Se,
      l = o.child;
    if (o.tag === 22 && s) {
      var a = o.memoizedState !== null || Ks;
      if (!a) {
        var i = o.alternate,
          c = (i !== null && i.memoizedState !== null) || xt;
        i = Ks;
        var x = xt;
        if (((Ks = a), (xt = c) && !x))
          for (Se = o; Se !== null; )
            (a = Se),
              (c = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? Sc(o)
                : c !== null
                ? ((c.return = a), (Se = c))
                : Sc(o);
        for (; l !== null; ) (Se = l), Pu(l), (l = l.sibling);
        (Se = o), (Ks = i), (xt = x);
      }
      Nc(e);
    } else
      o.subtreeFlags & 8772 && l !== null ? ((l.return = o), (Se = l)) : Nc(e);
  }
}
function Nc(e) {
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
              xt || Yo(5, t);
              break;
            case 1:
              var s = t.stateNode;
              if (t.flags & 4 && !xt)
                if (n === null) s.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Kt(t.type, n.memoizedProps);
                  s.componentDidUpdate(
                    o,
                    n.memoizedState,
                    s.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var l = t.updateQueue;
              l !== null && lc(t, l, s);
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
                lc(t, a, n);
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
                    h !== null && vs(h);
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
              throw Error(le(163));
          }
        xt || (t.flags & 512 && ga(t));
      } catch (m) {
        et(t, t.return, m);
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
function jc(e) {
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
function Sc(e) {
  for (; Se !== null; ) {
    var t = Se;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Yo(4, t);
          } catch (c) {
            et(t, n, c);
          }
          break;
        case 1:
          var s = t.stateNode;
          if (typeof s.componentDidMount == "function") {
            var o = t.return;
            try {
              s.componentDidMount();
            } catch (c) {
              et(t, o, c);
            }
          }
          var l = t.return;
          try {
            ga(t);
          } catch (c) {
            et(t, l, c);
          }
          break;
        case 5:
          var a = t.return;
          try {
            ga(t);
          } catch (c) {
            et(t, a, c);
          }
      }
    } catch (c) {
      et(t, t.return, c);
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
  Ro = bn.ReactCurrentDispatcher,
  ai = bn.ReactCurrentOwner,
  Ht = bn.ReactCurrentBatchConfig,
  Be = 0,
  dt = null,
  st = null,
  ft = 0,
  Rt = 0,
  Nr = Gn(0),
  lt = 0,
  Es = null,
  nr = 0,
  Xo = 0,
  ii = 0,
  us = null,
  Ct = null,
  ci = 0,
  Or = 1 / 0,
  fn = null,
  $o = !1,
  va = null,
  An = null,
  Js = !1,
  Mn = null,
  Ao = 0,
  fs = 0,
  wa = null,
  uo = -1,
  fo = 0;
function wt() {
  return Be & 6 ? nt() : uo !== -1 ? uo : (uo = nt());
}
function On(e) {
  return e.mode & 1
    ? Be & 2 && ft !== 0
      ? ft & -ft
      : hm.transition !== null
      ? (fo === 0 && (fo = gd()), fo)
      : ((e = Fe),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : jd(e.type))),
        e)
    : 1;
}
function tn(e, t, n, s) {
  if (50 < fs) throw ((fs = 0), (wa = null), Error(le(185)));
  Ps(e, n, s),
    (!(Be & 2) || e !== dt) &&
      (e === dt && (!(Be & 2) && (Xo |= n), lt === 4 && Dn(e, ft)),
      Et(e, s),
      n === 1 && Be === 0 && !(t.mode & 1) && ((Or = nt() + 500), Ho && Fn()));
}
function Et(e, t) {
  var n = e.callbackNode;
  hp(e, t);
  var s = vo(e, e === dt ? ft : 0);
  if (s === 0)
    n !== null && Ti(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = s & -s), e.callbackPriority !== t)) {
    if ((n != null && Ti(n), t === 1))
      e.tag === 0 ? mm(Cc.bind(null, e)) : Gd(Cc.bind(null, e)),
        dm(function () {
          !(Be & 6) && Fn();
        }),
        (n = null);
    else {
      switch (xd(s)) {
        case 1:
          n = $a;
          break;
        case 4:
          n = md;
          break;
        case 16:
          n = yo;
          break;
        case 536870912:
          n = hd;
          break;
        default:
          n = yo;
      }
      n = Bu(n, Tu.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Tu(e, t) {
  if (((uo = -1), (fo = 0), Be & 6)) throw Error(le(327));
  var n = e.callbackNode;
  if (Er() && e.callbackNode !== n) return null;
  var s = vo(e, e === dt ? ft : 0);
  if (s === 0) return null;
  if (s & 30 || s & e.expiredLanes || t) t = Oo(e, s);
  else {
    t = s;
    var o = Be;
    Be |= 2;
    var l = $u();
    (dt !== e || ft !== t) && ((fn = null), (Or = nt() + 500), Kn(e, t));
    do
      try {
        $m();
        break;
      } catch (i) {
        Ru(e, i);
      }
    while (!0);
    Ya(),
      (Ro.current = l),
      (Be = o),
      st !== null ? (t = 0) : ((dt = null), (ft = 0), (t = lt));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Wl(e)), o !== 0 && ((s = o), (t = ba(e, o)))), t === 1)
    )
      throw ((n = Es), Kn(e, 0), Dn(e, s), Et(e, nt()), n);
    if (t === 6) Dn(e, s);
    else {
      if (
        ((o = e.current.alternate),
        !(s & 30) &&
          !Tm(o) &&
          ((t = Oo(e, s)),
          t === 2 && ((l = Wl(e)), l !== 0 && ((s = l), (t = ba(e, l)))),
          t === 1))
      )
        throw ((n = Es), Kn(e, 0), Dn(e, s), Et(e, nt()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = s), t)) {
        case 0:
        case 1:
          throw Error(le(345));
        case 2:
          Wn(e, Ct, fn);
          break;
        case 3:
          if (
            (Dn(e, s), (s & 130023424) === s && ((t = ci + 500 - nt()), 10 < t))
          ) {
            if (vo(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & s) !== s)) {
              wt(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = ta(Wn.bind(null, e, Ct, fn), t);
            break;
          }
          Wn(e, Ct, fn);
          break;
        case 4:
          if ((Dn(e, s), (s & 4194240) === s)) break;
          for (t = e.eventTimes, o = -1; 0 < s; ) {
            var a = 31 - en(s);
            (l = 1 << a), (a = t[a]), a > o && (o = a), (s &= ~l);
          }
          if (
            ((s = o),
            (s = nt() - s),
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
            e.timeoutHandle = ta(Wn.bind(null, e, Ct, fn), s);
            break;
          }
          Wn(e, Ct, fn);
          break;
        case 5:
          Wn(e, Ct, fn);
          break;
        default:
          throw Error(le(329));
      }
    }
  }
  return Et(e, nt()), e.callbackNode === n ? Tu.bind(null, e) : null;
}
function ba(e, t) {
  var n = us;
  return (
    e.current.memoizedState.isDehydrated && (Kn(e, t).flags |= 256),
    (e = Oo(e, t)),
    e !== 2 && ((t = Ct), (Ct = n), t !== null && Na(t)),
    e
  );
}
function Na(e) {
  Ct === null ? (Ct = e) : Ct.push.apply(Ct, e);
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
            if (!nn(l(), o)) return !1;
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
function Dn(e, t) {
  for (
    t &= ~ii,
      t &= ~Xo,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - en(t),
      s = 1 << n;
    (e[n] = -1), (t &= ~s);
  }
}
function Cc(e) {
  if (Be & 6) throw Error(le(327));
  Er();
  var t = vo(e, 0);
  if (!(t & 1)) return Et(e, nt()), null;
  var n = Oo(e, t);
  if (e.tag !== 0 && n === 2) {
    var s = Wl(e);
    s !== 0 && ((t = s), (n = ba(e, s)));
  }
  if (n === 1) throw ((n = Es), Kn(e, 0), Dn(e, t), Et(e, nt()), n);
  if (n === 6) throw Error(le(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Wn(e, Ct, fn),
    Et(e, nt()),
    null
  );
}
function di(e, t) {
  var n = Be;
  Be |= 1;
  try {
    return e(t);
  } finally {
    (Be = n), Be === 0 && ((Or = nt() + 500), Ho && Fn());
  }
}
function rr(e) {
  Mn !== null && Mn.tag === 0 && !(Be & 6) && Er();
  var t = Be;
  Be |= 1;
  var n = Ht.transition,
    s = Fe;
  try {
    if (((Ht.transition = null), (Fe = 1), e)) return e();
  } finally {
    (Fe = s), (Ht.transition = n), (Be = t), !(Be & 6) && Fn();
  }
}
function ui() {
  (Rt = Nr.current), We(Nr);
}
function Kn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), cm(n)), st !== null))
    for (n = st.return; n !== null; ) {
      var s = n;
      switch ((Ha(s), s.tag)) {
        case 1:
          (s = s.type.childContextTypes), s != null && So();
          break;
        case 3:
          $r(), We(_t), We(yt), ei();
          break;
        case 5:
          Za(s);
          break;
        case 4:
          $r();
          break;
        case 13:
          We(Qe);
          break;
        case 19:
          We(Qe);
          break;
        case 10:
          Xa(s.type._context);
          break;
        case 22:
        case 23:
          ui();
      }
      n = n.return;
    }
  if (
    ((dt = e),
    (st = e = Ln(e.current, null)),
    (ft = Rt = t),
    (lt = 0),
    (Es = null),
    (ii = Xo = nr = 0),
    (Ct = us = null),
    Xn !== null)
  ) {
    for (t = 0; t < Xn.length; t++)
      if (((n = Xn[t]), (s = n.interleaved), s !== null)) {
        n.interleaved = null;
        var o = s.next,
          l = n.pending;
        if (l !== null) {
          var a = l.next;
          (l.next = o), (s.next = a);
        }
        n.pending = s;
      }
    Xn = null;
  }
  return e;
}
function Ru(e, t) {
  do {
    var n = st;
    try {
      if ((Ya(), (ao.current = To), Po)) {
        for (var s = Ke.memoizedState; s !== null; ) {
          var o = s.queue;
          o !== null && (o.pending = null), (s = s.next);
        }
        Po = !1;
      }
      if (
        ((tr = 0),
        (it = ot = Ke = null),
        (cs = !1),
        (Ds = 0),
        (ai.current = null),
        n === null || n.return === null)
      ) {
        (lt = 1), (Es = t), (st = null);
        break;
      }
      e: {
        var l = e,
          a = n.return,
          i = n,
          c = t;
        if (
          ((t = ft),
          (i.flags |= 32768),
          c !== null && typeof c == "object" && typeof c.then == "function")
        ) {
          var x = c,
            g = i,
            h = g.tag;
          if (!(g.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var m = g.alternate;
            m
              ? ((g.updateQueue = m.updateQueue),
                (g.memoizedState = m.memoizedState),
                (g.lanes = m.lanes))
              : ((g.updateQueue = null), (g.memoizedState = null));
          }
          var j = fc(a);
          if (j !== null) {
            (j.flags &= -257),
              pc(j, a, i, l, t),
              j.mode & 1 && uc(l, x, t),
              (t = j),
              (c = x);
            var S = t.updateQueue;
            if (S === null) {
              var M = new Set();
              M.add(c), (t.updateQueue = M);
            } else S.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              uc(l, x, t), fi();
              break e;
            }
            c = Error(le(426));
          }
        } else if (Ye && i.mode & 1) {
          var R = fc(a);
          if (R !== null) {
            !(R.flags & 65536) && (R.flags |= 256),
              pc(R, a, i, l, t),
              qa(Ar(c, i));
            break e;
          }
        }
        (l = c = Ar(c, i)),
          lt !== 4 && (lt = 2),
          us === null ? (us = [l]) : us.push(l),
          (l = a);
        do {
          switch (l.tag) {
            case 3:
              (l.flags |= 65536), (t &= -t), (l.lanes |= t);
              var d = xu(l, c, t);
              oc(l, d);
              break e;
            case 1:
              i = c;
              var u = l.type,
                p = l.stateNode;
              if (
                !(l.flags & 128) &&
                (typeof u.getDerivedStateFromError == "function" ||
                  (p !== null &&
                    typeof p.componentDidCatch == "function" &&
                    (An === null || !An.has(p))))
              ) {
                (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                var E = yu(l, i, t);
                oc(l, E);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      Ou(n);
    } catch (P) {
      (t = P), st === n && n !== null && (st = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function $u() {
  var e = Ro.current;
  return (Ro.current = To), e === null ? To : e;
}
function fi() {
  (lt === 0 || lt === 3 || lt === 2) && (lt = 4),
    dt === null || (!(nr & 268435455) && !(Xo & 268435455)) || Dn(dt, ft);
}
function Oo(e, t) {
  var n = Be;
  Be |= 2;
  var s = $u();
  (dt !== e || ft !== t) && ((fn = null), Kn(e, t));
  do
    try {
      Rm();
      break;
    } catch (o) {
      Ru(e, o);
    }
  while (!0);
  if ((Ya(), (Be = n), (Ro.current = s), st !== null)) throw Error(le(261));
  return (dt = null), (ft = 0), lt;
}
function Rm() {
  for (; st !== null; ) Au(st);
}
function $m() {
  for (; st !== null && !lp(); ) Au(st);
}
function Au(e) {
  var t = Uu(e.alternate, e, Rt);
  (e.memoizedProps = e.pendingProps),
    t === null ? Ou(e) : (st = t),
    (ai.current = null);
}
function Ou(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = _m(n, t)), n !== null)) {
        (n.flags &= 32767), (st = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (lt = 6), (st = null);
        return;
      }
    } else if (((n = Dm(n, t, Rt)), n !== null)) {
      st = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      st = t;
      return;
    }
    st = t = e;
  } while (t !== null);
  lt === 0 && (lt = 5);
}
function Wn(e, t, n) {
  var s = Fe,
    o = Ht.transition;
  try {
    (Ht.transition = null), (Fe = 1), Am(e, t, n, s);
  } finally {
    (Ht.transition = o), (Fe = s);
  }
  return null;
}
function Am(e, t, n, s) {
  do Er();
  while (Mn !== null);
  if (Be & 6) throw Error(le(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(le(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var l = n.lanes | n.childLanes;
  if (
    (gp(e, l),
    e === dt && ((st = dt = null), (ft = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Js ||
      ((Js = !0),
      Bu(yo, function () {
        return Er(), null;
      })),
    (l = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || l)
  ) {
    (l = Ht.transition), (Ht.transition = null);
    var a = Fe;
    Fe = 1;
    var i = Be;
    (Be |= 4),
      (ai.current = null),
      Em(e, n),
      Iu(n, e),
      nm(Zl),
      (wo = !!Jl),
      (Zl = Jl = null),
      (e.current = n),
      Im(n),
      ap(),
      (Be = i),
      (Fe = a),
      (Ht.transition = l);
  } else e.current = n;
  if (
    (Js && ((Js = !1), (Mn = e), (Ao = o)),
    (l = e.pendingLanes),
    l === 0 && (An = null),
    dp(n.stateNode),
    Et(e, nt()),
    t !== null)
  )
    for (s = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), s(o.value, { componentStack: o.stack, digest: o.digest });
  if ($o) throw (($o = !1), (e = va), (va = null), e);
  return (
    Ao & 1 && e.tag !== 0 && Er(),
    (l = e.pendingLanes),
    l & 1 ? (e === wa ? fs++ : ((fs = 0), (wa = e))) : (fs = 0),
    Fn(),
    null
  );
}
function Er() {
  if (Mn !== null) {
    var e = xd(Ao),
      t = Ht.transition,
      n = Fe;
    try {
      if (((Ht.transition = null), (Fe = 16 > e ? 16 : e), Mn === null))
        var s = !1;
      else {
        if (((e = Mn), (Mn = null), (Ao = 0), Be & 6)) throw Error(le(331));
        var o = Be;
        for (Be |= 4, Se = e.current; Se !== null; ) {
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
                      ds(8, g, l);
                  }
                  var h = g.child;
                  if (h !== null) (h.return = g), (Se = h);
                  else
                    for (; Se !== null; ) {
                      g = Se;
                      var m = g.sibling,
                        j = g.return;
                      if ((_u(g), g === x)) {
                        Se = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = j), (Se = m);
                        break;
                      }
                      Se = j;
                    }
                }
              }
              var S = l.alternate;
              if (S !== null) {
                var M = S.child;
                if (M !== null) {
                  S.child = null;
                  do {
                    var R = M.sibling;
                    (M.sibling = null), (M = R);
                  } while (M !== null);
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
                    ds(9, l, l.return);
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
          var p = a.child;
          if (a.subtreeFlags & 2064 && p !== null) (p.return = a), (Se = p);
          else
            e: for (a = u; Se !== null; ) {
              if (((i = Se), i.flags & 2048))
                try {
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Yo(9, i);
                  }
                } catch (P) {
                  et(i, i.return, P);
                }
              if (i === a) {
                Se = null;
                break e;
              }
              var E = i.sibling;
              if (E !== null) {
                (E.return = i.return), (Se = E);
                break e;
              }
              Se = i.return;
            }
        }
        if (
          ((Be = o), Fn(), an && typeof an.onPostCommitFiberRoot == "function")
        )
          try {
            an.onPostCommitFiberRoot(Bo, e);
          } catch {}
        s = !0;
      }
      return s;
    } finally {
      (Fe = n), (Ht.transition = t);
    }
  }
  return !1;
}
function kc(e, t, n) {
  (t = Ar(n, t)),
    (t = xu(e, t, 1)),
    (e = $n(e, t, 1)),
    (t = wt()),
    e !== null && (Ps(e, 1, t), Et(e, t));
}
function et(e, t, n) {
  if (e.tag === 3) kc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        kc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var s = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof s.componentDidCatch == "function" &&
            (An === null || !An.has(s)))
        ) {
          (e = Ar(n, e)),
            (e = yu(t, e, 1)),
            (t = $n(t, e, 1)),
            (e = wt()),
            t !== null && (Ps(t, 1, e), Et(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Om(e, t, n) {
  var s = e.pingCache;
  s !== null && s.delete(t),
    (t = wt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    dt === e &&
      (ft & n) === n &&
      (lt === 4 || (lt === 3 && (ft & 130023424) === ft && 500 > nt() - ci)
        ? Kn(e, 0)
        : (ii |= n)),
    Et(e, t);
}
function Lu(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Gs), (Gs <<= 1), !(Gs & 130023424) && (Gs = 4194304))
      : (t = 1));
  var n = wt();
  (e = vn(e, t)), e !== null && (Ps(e, t, n), Et(e, n));
}
function Lm(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Lu(e, n);
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
      throw Error(le(314));
  }
  s !== null && s.delete(t), Lu(e, n);
}
var Uu;
Uu = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || _t.current) kt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (kt = !1), km(e, t, n);
      kt = !!(e.flags & 131072);
    }
  else (kt = !1), Ye && t.flags & 1048576 && Fd(t, Do, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var s = t.type;
      co(e, t), (e = t.pendingProps);
      var o = Pr(t, yt.current);
      Mr(t, n), (o = ni(null, t, s, e, o, n));
      var l = ri();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Mt(s) ? ((l = !0), Co(t)) : (l = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Ka(t),
            (o.updater = Wo),
            (t.stateNode = o),
            (o._reactInternals = t),
            ia(t, s, e, n),
            (t = ua(null, t, s, !0, l, n)))
          : ((t.tag = 0), Ye && l && Va(t), vt(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      s = t.elementType;
      e: {
        switch (
          (co(e, t),
          (e = t.pendingProps),
          (o = s._init),
          (s = o(s._payload)),
          (t.type = s),
          (o = t.tag = zm(s)),
          (e = Kt(s, e)),
          o)
        ) {
          case 0:
            t = da(null, t, s, e, n);
            break e;
          case 1:
            t = gc(null, t, s, e, n);
            break e;
          case 11:
            t = mc(null, t, s, e, n);
            break e;
          case 14:
            t = hc(null, t, s, Kt(s.type, e), n);
            break e;
        }
        throw Error(le(306, s, ""));
      }
      return t;
    case 0:
      return (
        (s = t.type),
        (o = t.pendingProps),
        (o = t.elementType === s ? o : Kt(s, o)),
        da(e, t, s, o, n)
      );
    case 1:
      return (
        (s = t.type),
        (o = t.pendingProps),
        (o = t.elementType === s ? o : Kt(s, o)),
        gc(e, t, s, o, n)
      );
    case 3:
      e: {
        if ((Nu(t), e === null)) throw Error(le(387));
        (s = t.pendingProps),
          (l = t.memoizedState),
          (o = l.element),
          Xd(e, t),
          Eo(t, s, null, n);
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
            (o = Ar(Error(le(423)), t)), (t = xc(e, t, s, n, o));
            break e;
          } else if (s !== o) {
            (o = Ar(Error(le(424)), t)), (t = xc(e, t, s, n, o));
            break e;
          } else
            for (
              $t = Rn(t.stateNode.containerInfo.firstChild),
                At = t,
                Ye = !0,
                Zt = null,
                n = Wd(t, null, s, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Tr(), s === o)) {
            t = wn(e, t, n);
            break e;
          }
          vt(e, t, s, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Qd(t),
        e === null && oa(t),
        (s = t.type),
        (o = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (a = o.children),
        ea(s, o) ? (a = null) : l !== null && ea(s, l) && (t.flags |= 32),
        bu(e, t),
        vt(e, t, a, n),
        t.child
      );
    case 6:
      return e === null && oa(t), null;
    case 13:
      return ju(e, t, n);
    case 4:
      return (
        Ja(t, t.stateNode.containerInfo),
        (s = t.pendingProps),
        e === null ? (t.child = Rr(t, null, s, n)) : vt(e, t, s, n),
        t.child
      );
    case 11:
      return (
        (s = t.type),
        (o = t.pendingProps),
        (o = t.elementType === s ? o : Kt(s, o)),
        mc(e, t, s, o, n)
      );
    case 7:
      return vt(e, t, t.pendingProps, n), t.child;
    case 8:
      return vt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return vt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((s = t.type._context),
          (o = t.pendingProps),
          (l = t.memoizedProps),
          (a = o.value),
          He(_o, s._currentValue),
          (s._currentValue = a),
          l !== null)
        )
          if (nn(l.value, a)) {
            if (l.children === o.children && !_t.current) {
              t = wn(e, t, n);
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
                      (c = gn(-1, n & -n)), (c.tag = 2);
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
                      la(l.return, n, t),
                      (i.lanes |= n);
                    break;
                  }
                  c = c.next;
                }
              } else if (l.tag === 10) a = l.type === t.type ? null : l.child;
              else if (l.tag === 18) {
                if (((a = l.return), a === null)) throw Error(le(341));
                (a.lanes |= n),
                  (i = a.alternate),
                  i !== null && (i.lanes |= n),
                  la(a, n, t),
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
        vt(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (s = t.pendingProps.children),
        Mr(t, n),
        (o = qt(o)),
        (s = s(o)),
        (t.flags |= 1),
        vt(e, t, s, n),
        t.child
      );
    case 14:
      return (
        (s = t.type),
        (o = Kt(s, t.pendingProps)),
        (o = Kt(s.type, o)),
        hc(e, t, s, o, n)
      );
    case 15:
      return vu(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (s = t.type),
        (o = t.pendingProps),
        (o = t.elementType === s ? o : Kt(s, o)),
        co(e, t),
        (t.tag = 1),
        Mt(s) ? ((e = !0), Co(t)) : (e = !1),
        Mr(t, n),
        gu(t, s, o),
        ia(t, s, o, n),
        ua(null, t, s, !0, e, n)
      );
    case 19:
      return Su(e, t, n);
    case 22:
      return wu(e, t, n);
  }
  throw Error(le(156, t.tag));
};
function Bu(e, t) {
  return pd(e, t);
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
function Vt(e, t, n, s) {
  return new Bm(e, t, n, s);
}
function pi(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function zm(e) {
  if (typeof e == "function") return pi(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Pa)) return 11;
    if (e === Ta) return 14;
  }
  return 2;
}
function Ln(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Vt(e.tag, t, e.key, e.mode)),
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
function po(e, t, n, s, o, l) {
  var a = 2;
  if (((s = e), typeof e == "function")) pi(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else
    e: switch (e) {
      case fr:
        return Jn(n.children, o, l, t);
      case Ia:
        (a = 8), (o |= 8);
        break;
      case Pl:
        return (
          (e = Vt(12, n, t, o | 2)), (e.elementType = Pl), (e.lanes = l), e
        );
      case Tl:
        return (e = Vt(13, n, t, o)), (e.elementType = Tl), (e.lanes = l), e;
      case Rl:
        return (e = Vt(19, n, t, o)), (e.elementType = Rl), (e.lanes = l), e;
      case Qc:
        return Qo(n, o, l, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Yc:
              a = 10;
              break e;
            case Xc:
              a = 9;
              break e;
            case Pa:
              a = 11;
              break e;
            case Ta:
              a = 14;
              break e;
            case Sn:
              (a = 16), (s = null);
              break e;
          }
        throw Error(le(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Vt(a, n, t, o)), (t.elementType = e), (t.type = s), (t.lanes = l), t
  );
}
function Jn(e, t, n, s) {
  return (e = Vt(7, e, s, t)), (e.lanes = n), e;
}
function Qo(e, t, n, s) {
  return (
    (e = Vt(22, e, s, t)),
    (e.elementType = Qc),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Ml(e, t, n) {
  return (e = Vt(6, e, null, t)), (e.lanes = n), e;
}
function El(e, t, n) {
  return (
    (t = Vt(4, e.children !== null ? e.children : [], e.key, t)),
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
    (this.eventTimes = dl(0)),
    (this.expirationTimes = dl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = dl(0)),
    (this.identifierPrefix = s),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function mi(e, t, n, s, o, l, a, i, c) {
  return (
    (e = new Gm(e, t, n, i, c)),
    t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
    (l = Vt(3, null, null, t)),
    (e.current = l),
    (l.stateNode = e),
    (l.memoizedState = {
      element: s,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ka(l),
    e
  );
}
function Fm(e, t, n) {
  var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: ur,
    key: s == null ? null : "" + s,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function zu(e) {
  if (!e) return Bn;
  e = e._reactInternals;
  e: {
    if (or(e) !== e || e.tag !== 1) throw Error(le(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Mt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(le(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Mt(n)) return zd(e, n, t);
  }
  return t;
}
function Gu(e, t, n, s, o, l, a, i, c) {
  return (
    (e = mi(n, s, !0, e, o, l, a, i, c)),
    (e.context = zu(null)),
    (n = e.current),
    (s = wt()),
    (o = On(n)),
    (l = gn(s, o)),
    (l.callback = t ?? null),
    $n(n, l, o),
    (e.current.lanes = o),
    Ps(e, o, s),
    Et(e, s),
    e
  );
}
function Ko(e, t, n, s) {
  var o = t.current,
    l = wt(),
    a = On(o);
  return (
    (n = zu(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = gn(l, a)),
    (t.payload = { element: e }),
    (s = s === void 0 ? null : s),
    s !== null && (t.callback = s),
    (e = $n(o, t, a)),
    e !== null && (tn(e, o, a, l), lo(e, o, a)),
    a
  );
}
function Lo(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Dc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function hi(e, t) {
  Dc(e, t), (e = e.alternate) && Dc(e, t);
}
function Vm() {
  return null;
}
var Fu =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function gi(e) {
  this._internalRoot = e;
}
Jo.prototype.render = gi.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(le(409));
  Ko(e, t, null, null);
};
Jo.prototype.unmount = gi.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    rr(function () {
      Ko(null, e, null, null);
    }),
      (t[yn] = null);
  }
};
function Jo(e) {
  this._internalRoot = e;
}
Jo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = wd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < kn.length && t !== 0 && t < kn[n].priority; n++);
    kn.splice(n, 0, e), n === 0 && Nd(e);
  }
};
function xi(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Zo(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function _c() {}
function Hm(e, t, n, s, o) {
  if (o) {
    if (typeof s == "function") {
      var l = s;
      s = function () {
        var x = Lo(a);
        l.call(x);
      };
    }
    var a = Gu(t, s, e, 0, null, !1, !1, "", _c);
    return (
      (e._reactRootContainer = a),
      (e[yn] = a.current),
      Ns(e.nodeType === 8 ? e.parentNode : e),
      rr(),
      a
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof s == "function") {
    var i = s;
    s = function () {
      var x = Lo(c);
      i.call(x);
    };
  }
  var c = mi(e, 0, !1, null, null, !1, !1, "", _c);
  return (
    (e._reactRootContainer = c),
    (e[yn] = c.current),
    Ns(e.nodeType === 8 ? e.parentNode : e),
    rr(function () {
      Ko(t, c, n, s);
    }),
    c
  );
}
function el(e, t, n, s, o) {
  var l = n._reactRootContainer;
  if (l) {
    var a = l;
    if (typeof o == "function") {
      var i = o;
      o = function () {
        var c = Lo(a);
        i.call(c);
      };
    }
    Ko(t, a, e, o);
  } else a = Hm(n, t, e, o, s);
  return Lo(a);
}
yd = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ns(t.pendingLanes);
        n !== 0 &&
          (Aa(t, n | 1), Et(t, nt()), !(Be & 6) && ((Or = nt() + 500), Fn()));
      }
      break;
    case 13:
      rr(function () {
        var s = vn(e, 1);
        if (s !== null) {
          var o = wt();
          tn(s, e, 1, o);
        }
      }),
        hi(e, 1);
  }
};
Oa = function (e) {
  if (e.tag === 13) {
    var t = vn(e, 134217728);
    if (t !== null) {
      var n = wt();
      tn(t, e, 134217728, n);
    }
    hi(e, 134217728);
  }
};
vd = function (e) {
  if (e.tag === 13) {
    var t = On(e),
      n = vn(e, t);
    if (n !== null) {
      var s = wt();
      tn(n, e, t, s);
    }
    hi(e, t);
  }
};
wd = function () {
  return Fe;
};
bd = function (e, t) {
  var n = Fe;
  try {
    return (Fe = e), t();
  } finally {
    Fe = n;
  }
};
Vl = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Ol(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var o = Vo(s);
            if (!o) throw Error(le(90));
            Jc(s), Ol(s, o);
          }
        }
      }
      break;
    case "textarea":
      ed(e, n);
      break;
    case "select":
      (t = n.value), t != null && Cr(e, !!n.multiple, t, !1);
  }
};
ad = di;
id = rr;
var qm = { usingClientEntryPoint: !1, Events: [Rs, gr, Vo, od, ld, di] },
  Jr = {
    findFiberByHostInstance: Yn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Wm = {
    bundleType: Jr.bundleType,
    version: Jr.version,
    rendererPackageName: Jr.rendererPackageName,
    rendererConfig: Jr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: bn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = ud(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Jr.findFiberByHostInstance || Vm,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Zs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Zs.isDisabled && Zs.supportsFiber)
    try {
      (Bo = Zs.inject(Wm)), (an = Zs);
    } catch {}
}
Lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = qm;
Lt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!xi(t)) throw Error(le(200));
  return Fm(e, t, null, n);
};
Lt.createRoot = function (e, t) {
  if (!xi(e)) throw Error(le(299));
  var n = !1,
    s = "",
    o = Fu;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (s = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = mi(e, 1, !1, null, null, n, !1, s, o)),
    (e[yn] = t.current),
    Ns(e.nodeType === 8 ? e.parentNode : e),
    new gi(t)
  );
};
Lt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(le(188))
      : ((e = Object.keys(e).join(",")), Error(le(268, e)));
  return (e = ud(t)), (e = e === null ? null : e.stateNode), e;
};
Lt.flushSync = function (e) {
  return rr(e);
};
Lt.hydrate = function (e, t, n) {
  if (!Zo(t)) throw Error(le(200));
  return el(null, e, t, !0, n);
};
Lt.hydrateRoot = function (e, t, n) {
  if (!xi(e)) throw Error(le(405));
  var s = (n != null && n.hydratedSources) || null,
    o = !1,
    l = "",
    a = Fu;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = Gu(t, null, e, 1, n ?? null, o, !1, l, a)),
    (e[yn] = t.current),
    Ns(e),
    s)
  )
    for (e = 0; e < s.length; e++)
      (n = s[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Jo(t);
};
Lt.render = function (e, t, n) {
  if (!Zo(t)) throw Error(le(200));
  return el(null, e, t, !1, n);
};
Lt.unmountComponentAtNode = function (e) {
  if (!Zo(e)) throw Error(le(40));
  return e._reactRootContainer
    ? (rr(function () {
        el(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[yn] = null);
        });
      }),
      !0)
    : !1;
};
Lt.unstable_batchedUpdates = di;
Lt.unstable_renderSubtreeIntoContainer = function (e, t, n, s) {
  if (!Zo(n)) throw Error(le(200));
  if (e == null || e._reactInternals === void 0) throw Error(le(38));
  return el(e, t, n, !1, s);
};
Lt.version = "18.3.1-next-f1338f8080-20240426";
function Vu() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vu);
    } catch (e) {
      console.error(e);
    }
}
Vu(), (Vc.exports = Lt);
var Ym = Vc.exports,
  Hu,
  Mc = Ym;
(Hu = Mc.createRoot), Mc.hydrateRoot;
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
const ke = new Xm();
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
                reverse: l.reverse,
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
                    c.shelf.forEach((m, j) => {
                      let S = {
                        GUID: m.GUID,
                        Master_GUID: m.Master_GUID,
                        name: m.name,
                        class: 3,
                        gird_position: m.position,
                        serverName: m.serverName || "",
                        serverType: m.serverType || "",
                        device_type: m.device_type || "",
                        type: m.type,
                        contents: [],
                        ip: m.ip_light,
                        width: m.width,
                        height: m.height,
                      };
                      if (
                        (S.serverName &&
                          (S.serverName = t.sys_ServerSetting.name),
                        S.serverType &&
                          (S.serverType = t.sys_ServerSetting.type),
                        m.type == "dispensing_shelves" || m.type == "shelf")
                      )
                        m.type == "shelf" && (S.type = "dispensing_shelves"),
                          Array.isArray(m.medMapBox) &&
                            m.medMapBox.forEach((R, d) => {
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
                                p = {},
                                E = m.position.split(","),
                                P = R.position.split(",");
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
                                (p.name = R.storage.Name),
                                  (p.code = R.storage.Code),
                                  (p.cht_name = R.storage.ChineseName),
                                  (p.SKDIACODE = R.storage.SKDIACODE),
                                  (p.device_type = R.storage.device_type),
                                  (p.qty = R.storage.StorageName),
                                  (p.stockCol = `${+E[0] + 1}`),
                                  (p.stockRow = ""),
                                  (p.stock = `${+P[1] + 1}`);
                              } else
                                (u.device_type = 10),
                                  (u.box_type = "2.9"),
                                  (p.name = ""),
                                  (p.code = ""),
                                  (p.cht_name = ""),
                                  (p.stockCol = `${+E[0] + 1}`),
                                  (p.stockRow = ""),
                                  (p.stock = `${+P[1] + 1}`);
                              o.contents[a].med_list.push(p),
                                (u.med_info[0] = p),
                                S.contents.push(u);
                            });
                      else {
                        S.type = "store_shelves";
                        const R = m.medMapStock.sort((u, p) => {
                          const [E] = u.location.split(",").map(Number),
                            [P] = p.location.split(",").map(Number);
                          return E - P;
                        });
                        (S.medMapStock = R), (S.name = m.name);
                        let d = Math.max(
                          ...R.map((u) => u.location.split(",")[0])
                        );
                        +d <= 0 && (d = 0),
                          console.log(d),
                          R.forEach((u, p) => {
                            let E = m.position.split(","),
                              P = c.position.split(",");
                            if (u.code) {
                              let _ = {};
                              (_.name = u.name),
                                (_.code = u.code),
                                (_.cht_name = ""),
                                (_.SKDIACODE = u.material_no),
                                (_.qty = u.qty),
                                (_.stockCol = `${+E[0] + 1}`),
                                (_.stockRow = `${+P[1] + 1}`),
                                (_.stock = `${+u.location.split(",")[0] + 1}`),
                                l.reverse == "True" &&
                                  (_.stock = d + 1 - +u.location.split(",")[0]),
                                o.contents[a].med_list.push(_);
                            }
                          });
                      }
                      let M = m.position.split(",")[1];
                      h < +M &&
                        ((h = +M), (o.contents[a].contents[x].oriMaxCol = +h)),
                        o.contents[a].contents[x].contents.push(S);
                    }),
                    Array.isArray(c.drawer) &&
                      c.drawer.forEach((m, j) => {
                        let S = {
                          GUID: m.GUID,
                          Master_GUID: m.Master_GUID,
                          name: `抽屜 ${j}`,
                          class: 3,
                          gird_position: m.position,
                          ip: m.ip_drawer,
                          serverName: m.serverName,
                          serverType: m.serverType,
                        };
                        S.serverName &&
                          (S.serverName = t.sys_ServerSetting.name),
                          S.serverType &&
                            (S.serverType = t.sys_ServerSetting.type),
                          m.drawer
                            ? ((S.drawer = m.drawer),
                              m.drawer.Boxes &&
                                ((S.type = "grid_draw"),
                                (S.name = m.drawer.Name),
                                (S.Boxes = []),
                                Array.isArray(m.drawer.Boxes)
                                  ? m.drawer.Boxes.forEach((d, u) => {
                                      let p = [];
                                      Array.isArray(d) &&
                                        d.forEach((E, P) => {
                                          let _ = {
                                            Row: E.Row,
                                            Column: E.Column,
                                            Width: 1,
                                            Height: 1,
                                            Slave: E.Slave,
                                            SlaveBox_Row: E.SlaveBox_Row,
                                            SlaveBox_Column: E.SlaveBox_Column,
                                            MasterBox_Column:
                                              E.MasterBox_Column,
                                            MasterBox_Row: E.MasterBox_Row,
                                            Name: E.Name,
                                            Code: E.Code,
                                            ChineseName: E.ChineseName,
                                            GUID: E.GUID,
                                          };
                                          p.push(_),
                                            E.Code &&
                                              o.contents[a].med_list.push(
                                                E.Code
                                              );
                                        }),
                                        S.Boxes.push(p);
                                    })
                                  : (S.Boxes = m.drawer.Boxes)))
                            : ((S.type = "list_draw"),
                              (S.name = `清單抽屜 ${j}`));
                        let M = m.position.split(",")[1];
                        h < +M &&
                          ((h = +M),
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
const ct = new Qm(),
  Km = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: ct },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  qu = f.createContext(void 0),
  Jm = ({ children: e }) => {
    const [t, n] = f.useState(!1),
      [s, o] = f.useState(null),
      [l, a] = f.useState(!1),
      [i, c] = f.useState(null),
      [x, g] = f.useState(null),
      [h, m] = f.useState("medicine"),
      [j, S] = f.useState(!1),
      [M, R] = f.useState(0),
      [d, u] = f.useState({ message: "", type: "success", isVisible: !1 }),
      [p, E] = f.useState(!1),
      [P, _] = f.useState(null),
      [T, V] = f.useState("edit"),
      [X, J] = f.useState(!1),
      [ue, we] = f.useState(null),
      [N, w] = f.useState(!1),
      [L, v] = f.useState(null),
      [b, D] = f.useState(!1),
      [I, ne] = f.useState(!1),
      [G, W] = f.useState(null),
      [je, de] = f.useState(!1),
      [z, xe] = f.useState(null),
      [F, ge] = f.useState(!1),
      [he, me] = f.useState(null),
      [Te, k] = f.useState(!1),
      [C, se] = f.useState(null),
      [oe, U] = f.useState(null),
      [Z, ce] = f.useState("add"),
      [$, B] = f.useState(!1),
      [q, re] = f.useState([]),
      [ie, be] = f.useState([]),
      [ae, ve] = f.useState(!1),
      [Ce, Ee] = f.useState(!1),
      [Ze, Pe] = f.useState(""),
      [rt, Ve] = f.useState(!1),
      [Pt, Bt] = f.useState(""),
      [Vn, Yt] = f.useState(!1),
      [Hn, Gr] = f.useState(null),
      [As, Fr] = f.useState(null),
      [nl, y] = f.useState(!1),
      [te, Y] = f.useState(null),
      [A, H] = f.useState(!1),
      [O, Q] = f.useState(null),
      [K, fe] = f.useState(null),
      ee = () => {
        sessionStorage.removeItem("user_session"), n(!1), o(null);
      },
      ye = f.useCallback(() => {
        R((Ie) => Ie + 1);
      }, []),
      pe = f.useCallback((Ie, at) => {
        u({ message: Ie, type: at, isVisible: !0 });
      }, []),
      Ne = f.useCallback(() => {
        u((Ie) => ({ ...Ie, isVisible: !1 }));
      }, []),
      Re = (Ie) => {
        _(Ie), V("edit"), E(!0);
      },
      De = () => {
        const Ie = {
          GUID: `new_medbox_${Date.now()}`,
          name: "",
          box_type: "",
          width: [],
          width_index: 0,
          med_info: [],
          parentShelf: null,
        };
        _(Ie), V("add"), E(!0);
      },
      Ae = () => {
        E(!1), _(null), V("edit");
      },
      _e = (Ie) => {
        we(Ie), J(!0);
      },
      $e = () => {
        J(!1), we(null);
      },
      Oe = (Ie) => {
        v(Ie), w(!0);
      },
      Me = () => {
        w(!1), v(null);
      },
      Ue = (Ie) => {
        W(Ie), ne(!0);
      },
      mt = () => {
        ne(!1), W(null);
      },
      ze = (Ie) => {
        xe(Ie), de(!0);
      },
      dn = () => {
        de(!1), xe(null);
      },
      Vr = (Ie) => {
        me(Ie), ge(!0);
      },
      rl = () => {
        ge(!1), me(null);
      },
      tf = (Ie) => {
        se(Ie), U(null), ce("add"), k(!0);
      },
      nf = (Ie, at) => {
        se(Ie), U(at), ce("edit"), k(!0);
      },
      rf = () => {
        k(!1), se(null), U(null), ce("add");
      },
      sf = () => {
        B(!0);
      },
      of = () => {
        B(!1);
      },
      lf = (Ie = "") => {
        Pe(Ie), Ee(!0);
      },
      af = () => {
        Ee(!1);
      },
      cf = (Ie) => {
        Bt(Ie), Ve(!0);
      },
      df = () => {
        Ve(!1), Bt("");
      },
      uf = (Ie, at) => {
        Gr(Ie), Fr(at || null), Yt(!0);
      },
      ff = () => {
        Yt(!1), Gr(null), Fr(null);
      },
      pf = (Ie) => {
        Y(Ie), y(!0);
      },
      mf = () => {
        y(!1), Y(null);
      },
      hf = (Ie) => {
        Q(Ie), H(!0);
      },
      gf = () => {
        H(!1), Q(null);
      },
      xf = f.useCallback(async () => {
        if (!i) {
          console.warn("沒有選擇部門分類，無法重新載入資料");
          return;
        }
        console.log("🔄 重新載入藥品地圖資料，部門類型:", i), D(!0);
        try {
          const Ie = await ke.getMedMapByDepartment(i);
          if (Ie.Code === 200 && Ie.Data) {
            console.log("📡 重新載入成功:", Ie.Data);
            const at = ct.convertMedMapApiToFakeData(Ie.Data);
            if (!ct.validateConvertedData(at)) {
              console.error("❌ 轉換後的資料驗證失敗"), g(null);
              return;
            }
            g(at), console.log("✅ 地圖資料已重新載入");
          } else console.error("❌ API 回傳錯誤:", Ie), g(null);
        } catch (Ie) {
          console.error("💥 重新載入藥品地圖資料失敗:", Ie), g(null);
        } finally {
          D(!1);
        }
      }, [i, D, g]),
      yf = f.useCallback((Ie, at) => {
        g(
          (Tt) =>
            Tt &&
            Tt.map((zt) => {
              const St = { ...zt };
              return (
                St.contents &&
                  (St.contents = St.contents.map((lr) => {
                    const ar = { ...lr };
                    return (
                      ar.contents &&
                        (ar.contents = ar.contents.map((ir) => {
                          const cr = { ...ir };
                          return (
                            cr.contents &&
                              (cr.contents = cr.contents.map((Nn) => {
                                if (Nn.GUID === Ie) {
                                  const Xt = { ...Nn };
                                  return (
                                    Xt.medMapStock || (Xt.medMapStock = []),
                                    (Xt.medMapStock = [...Xt.medMapStock, at]),
                                    Xt
                                  );
                                }
                                return Nn;
                              })),
                            cr
                          );
                        })),
                      ar
                    );
                  })),
                St
              );
            })
        );
      }, []),
      vf = f.useCallback((Ie, at, Tt) => {
        g(
          (un) =>
            un &&
            un.map((St) => {
              const lr = { ...St };
              return (
                lr.contents &&
                  (lr.contents = lr.contents.map((ar) => {
                    const ir = { ...ar };
                    return (
                      ir.contents &&
                        (ir.contents = ir.contents.map((cr) => {
                          const Nn = { ...cr };
                          return (
                            Nn.contents &&
                              (Nn.contents = Nn.contents.map((Xt) => {
                                if (Xt.GUID === Ie && Xt.medMapStock) {
                                  const wi = { ...Xt };
                                  return (
                                    (wi.medMapStock = Xt.medMapStock.map((sl) =>
                                      sl.GUID === at ? { ...sl, ...Tt } : sl
                                    )),
                                    wi
                                  );
                                }
                                return Xt;
                              })),
                            Nn
                          );
                        })),
                      ir
                    );
                  })),
                lr
              );
            })
        );
      }, []),
      wf = f.useCallback((Ie, at) => {
        g((Tt) => {
          if (!Tt) return Tt;
          const un = (zt) =>
            zt.map((St) =>
              St.GUID === Ie
                ? { ...St, ...at }
                : St.contents && Array.isArray(St.contents)
                ? { ...St, contents: un(St.contents) }
                : St
            );
          return un(Tt);
        });
      }, []),
      bf = f.useCallback((Ie) => {
        g((at) => {
          if (!at) return at;
          const Tt = (un) =>
            un
              .filter((zt) => zt.GUID !== Ie)
              .map((zt) =>
                zt.contents && Array.isArray(zt.contents)
                  ? { ...zt, contents: Tt(zt.contents) }
                  : zt
              );
          return Tt(at);
        });
      }, []);
    return r.jsx(qu.Provider, {
      value: {
        isAuthenticated: t,
        setIsAuthenticated: n,
        currentUser: s,
        setCurrentUser: o,
        logout: ee,
        sidebarOpen: l,
        setSidebarOpen: a,
        selectedDepartmentType: i,
        setSelectedDepartmentType: c,
        isAdminMode: j,
        setIsAdminMode: S,
        apiDepartmentData: x,
        setApiDepartmentData: g,
        viewMode: h,
        setViewMode: m,
        refreshTrigger: M,
        triggerRefresh: ye,
        addStockToShelf: yf,
        notification: d,
        showNotification: pe,
        hideNotification: Ne,
        medBoxModalOpen: p,
        setMedBoxModalOpen: E,
        selectedMedBox: P,
        setSelectedMedBox: _,
        openMedBoxModal: Re,
        closeMedBoxModal: Ae,
        modalMode: T,
        setModalMode: V,
        openAddMedBoxModal: De,
        listDrawModalOpen: X,
        setListDrawModalOpen: J,
        selectedListDraw: ue,
        setSelectedListDraw: we,
        openListDrawModal: _e,
        closeListDrawModal: $e,
        gridDrawModalOpen: N,
        setGridDrawModalOpen: w,
        selectedGridDraw: L,
        setSelectedGridDraw: v,
        openGridDrawModal: Oe,
        closeGridDrawModal: Me,
        isLoadingMedMap: b,
        setIsLoadingMedMap: D,
        addParentContainerModalOpen: I,
        setAddParentContainerModalOpen: ne,
        selectedDepartmentForAdd: G,
        setSelectedDepartmentForAdd: W,
        openAddParentContainerModal: Ue,
        closeAddParentContainerModal: mt,
        addShelfDrawContainerModalOpen: je,
        setAddShelfDrawContainerModalOpen: de,
        selectedSubContainerForAdd: z,
        setSelectedSubContainerForAdd: xe,
        openAddShelfDrawContainerModal: ze,
        closeAddShelfDrawContainerModal: dn,
        addSubContainerModalOpen: F,
        setAddSubContainerModalOpen: ge,
        selectedParentContainerForAdd: he,
        setSelectedParentContainerForAdd: me,
        openAddSubContainerModal: Vr,
        closeAddSubContainerModal: rl,
        addStoreItemModalOpen: Te,
        setAddStoreItemModalOpen: k,
        selectedStoreShelfForAdd: C,
        setSelectedStoreShelfForAdd: se,
        selectedStockItemForEdit: oe,
        setSelectedStockItemForEdit: U,
        storeItemModalMode: Z,
        setStoreItemModalMode: ce,
        openAddStoreItemModal: tf,
        openEditStoreItemModal: nf,
        closeAddStoreItemModal: rf,
        updateStockInShelf: vf,
        updateContainerInLocalData: wf,
        removeContainerFromLocalData: bf,
        addDepartmentModalOpen: $,
        setAddDepartmentModalOpen: B,
        allDepartmentsList: q,
        setAllDepartmentsList: re,
        openAddDepartmentModal: sf,
        closeAddDepartmentModal: of,
        reloadMedMapData: xf,
        qrCodeScannerModalOpen: Ce,
        qrCodeScannerMode: Ze,
        setQRCodeScannerModalOpen: Ee,
        openQRCodeScannerModal: lf,
        closeQRCodeScannerModal: af,
        addBarcodeModalOpen: rt,
        setAddBarcodeModalOpen: Ve,
        openAddBarcodeModal: cf,
        closeAddBarcodeModal: df,
        initialBarcodeValue: Pt,
        containerDetailModalOpen: Vn,
        setContainerDetailModalOpen: Yt,
        selectedContainerForDetail: Hn,
        setSelectedContainerForDetail: Gr,
        highlightedMedicineCode: As,
        setHighlightedMedicineCode: Fr,
        openContainerDetailModal: uf,
        closeContainerDetailModal: ff,
        editStoreShelfModalOpen: nl,
        setEditStoreShelfModalOpen: y,
        selectedStoreShelfForEdit: te,
        setSelectedStoreShelfForEdit: Y,
        openEditStoreShelfModal: pf,
        closeEditStoreShelfModal: mf,
        activeCanvas: K,
        setActiveCanvas: fe,
        editParentContainerModalOpen: A,
        setEditParentContainerModalOpen: H,
        selectedParentContainerForEdit: O,
        setSelectedParentContainerForEdit: Q,
        openEditParentContainerModal: hf,
        closeEditParentContainerModal: gf,
        medicineList: ie,
        setMedicineList: be,
        isLoadingMedicines: ae,
        setIsLoadingMedicines: ve,
      },
      children: e,
    });
  },
  tt = () => {
    const e = f.useContext(qu);
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
  Wu = f.createContext(void 0),
  eh = ({ children: e }) => {
    const [t, n] = f.useState("zh-TW"),
      s = (o) => Zm[t][o] || o;
    return r.jsx(Wu.Provider, {
      value: { language: t, setLanguage: n, t: s },
      children: e,
    });
  },
  jt = () => {
    const e = f.useContext(Wu);
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
  Ge = (e, t) => {
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
            ...t.map(([h, m]) => f.createElement(h, m)),
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
 */ const rh = Ge("Archive", [
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
 */ const Ec = Ge("Bell", [
  ["path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9", key: "1qo2s2" }],
  ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Yu = Ge("Building2", [
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
 */ const Lr = Ge("Camera", [
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
 */ const sh = Ge("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const eo = Ge("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xu = Ge("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const oh = Ge("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lh = Ge("ChevronUp", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Qu = Ge("EyeOff", [
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
 */ const Ku = Ge("Eye", [
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
 */ const ah = Ge("Globe", [
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
 */ const Ju = Ge("Grid3x3", [
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
 */ const yi = Ge("Layers", [
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
 */ const ih = Ge("Lightbulb", [
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
 */ const ch = Ge("ListX", [
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
 */ const ja = Ge("List", [
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
 */ const It = Ge("Loader2", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vi = Ge("Lock", [
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
 */ const dh = Ge("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const uh = Ge("Package", [
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
 */ const jr = Ge("Pen", [
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
 */ const fh = Ge("Pill", [
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
 */ const Dt = Ge("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const En = Ge("Settings", [
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
 */ const Sr = Ge("Trash2", [
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
 */ const Zu = Ge("Unlock", [
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
 */ const ph = Ge("Warehouse", [
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
 */ const mh = Ge("XCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xe = Ge("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  hh = () => {
    const { sidebarOpen: e, setSidebarOpen: t } = tt(),
      { t: n } = jt();
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
              children: r.jsx(yi, { className: "w-5 h-5" }),
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
                ? r.jsx(ja, { className: "w-6 h-6" })
                : r.jsx(ja, { className: "w-6 h-6" }),
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
      } = tt(),
      { language: c, setLanguage: x, t: g } = jt(),
      [h, m] = mo.useState(!1),
      j = () => {
        x(c === "zh-TW" ? "en" : "zh-TW");
      },
      S = mo.useMemo(() => {
        if (!o || !i || !a) return !1;
        const M = a.map((u) => u.name);
        return (
          i
            .filter((u) => u["department_type "] === o)
            .filter((u) => !M.includes(u.name)).length > 0
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
                        r.jsx(Yu, { className: "w-4 h-4" }),
                        r.jsx("span", {
                          className: "text-sm font-medium",
                          children: g("topbar.department"),
                        }),
                      ],
                    }),
                  ],
                }),
                r.jsx("button", {
                  onClick: () => m(!h),
                  className:
                    "lg:hidden flex items-center justify-center p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 rounded-lg transition-colors",
                  children: h
                    ? r.jsx(lh, { className: "w-4 h-4" })
                    : r.jsx(Xu, { className: "w-4 h-4" }),
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
                          r.jsx(Dt, { className: "w-4 h-4" }),
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
      [m, j] = f.useState([]),
      [S, M] = f.useState([]),
      [R, d] = f.useState([]),
      [u, p] = f.useState(!1),
      [E, P] = f.useState(!1),
      _ = f.useRef(null),
      T = f.useRef(null),
      V = f.useRef(null),
      X = f.useRef(null);
    f.useEffect(() => {
      if (e) {
        const v = localStorage.getItem("medMap_setting");
        if (v)
          try {
            const b = JSON.parse(v);
            s(b.light_color || "blue"),
              l(b.brightness !== void 0 ? b.brightness : 1),
              i(b.light_sec !== void 0 ? b.light_sec : 60),
              x(b.default_person || ""),
              h(b.default_person_id || "");
          } catch (b) {
            console.error("讀取設定失敗:", b),
              s("blue"),
              l(1),
              i(60),
              x(""),
              h("");
          }
        else s("blue"), l(1), i(60), x(""), h("");
        J();
      }
    }, [e]),
      f.useEffect(() => {
        const v = (b) => {
          V.current &&
            !V.current.contains(b.target) &&
            _.current &&
            !_.current.contains(b.target) &&
            p(!1),
            X.current &&
              !X.current.contains(b.target) &&
              T.current &&
              !T.current.contains(b.target) &&
              P(!1);
        };
        return (
          document.addEventListener("mousedown", v),
          () => document.removeEventListener("mousedown", v)
        );
      }, []);
    const J = async () => {
        try {
          const v = await ke.getAllStaffInfo();
          v.Code === 200 && v.Data && j(v.Data);
        } catch (v) {
          console.error("獲取人員資料失敗:", v);
        }
      },
      ue = (v) => {
        if ((x(v), v.trim() === "")) {
          M([]), p(!1);
          return;
        }
        const b = m.filter(
          (D) => D.name && D.name.toLowerCase().includes(v.toLowerCase())
        );
        M(b), p(b.length > 0);
      },
      we = (v) => {
        if ((h(v), v.trim() === "")) {
          d([]), P(!1);
          return;
        }
        const b = m.filter(
          (D) => D.ID && D.ID.toLowerCase().includes(v.toLowerCase())
        );
        d(b), P(b.length > 0);
      },
      N = (v) => {
        x(v.name), h(v.ID), p(!1);
      },
      w = (v) => {
        x(v.name), h(v.ID), P(!1);
      },
      L = () => {
        const v = {
          light_color: n,
          brightness: o,
          light_sec: a,
          default_person: c,
          default_person_id: g,
        };
        localStorage.setItem("medMap_setting", JSON.stringify(v)),
          console.log("設定已儲存:", v),
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
                      children: r.jsx(Xe, { className: "w-5 h-5" }),
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
                                  onChange: (v) => ue(v.target.value),
                                  onFocus: () => {
                                    c.trim() && ue(c);
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
                                    children: S.map((v, b) =>
                                      r.jsxs(
                                        "div",
                                        {
                                          onClick: () => N(v),
                                          className:
                                            "px-4 py-2 hover:bg-blue-50 cursor-pointer transition-colors",
                                          children: [
                                            r.jsx("div", {
                                              className:
                                                "font-medium text-gray-900",
                                              children: v.name,
                                            }),
                                            r.jsx("div", {
                                              className:
                                                "text-xs text-gray-500",
                                              children: v.ID,
                                            }),
                                          ],
                                        },
                                        b
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
                                  ref: T,
                                  type: "text",
                                  value: g,
                                  onChange: (v) => we(v.target.value),
                                  onFocus: () => {
                                    g.trim() && we(g);
                                  },
                                  placeholder: "請輸入人員 ID",
                                  className:
                                    "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                                }),
                                E &&
                                  r.jsx("div", {
                                    ref: X,
                                    className:
                                      "absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto",
                                    children: R.map((v, b) =>
                                      r.jsxs(
                                        "div",
                                        {
                                          onClick: () => w(v),
                                          className:
                                            "px-4 py-2 hover:bg-blue-50 cursor-pointer transition-colors",
                                          children: [
                                            r.jsx("div", {
                                              className:
                                                "font-medium text-gray-900",
                                              children: v.ID,
                                            }),
                                            r.jsx("div", {
                                              className:
                                                "text-xs text-gray-500",
                                              children: v.name,
                                            }),
                                          ],
                                        },
                                        b
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
                          children: xh.map((v) =>
                            r.jsxs(
                              "button",
                              {
                                onClick: () => s(v.value),
                                className: `
                    relative p-3 rounded-lg border-2 transition-all
                    ${v.bgColor} ${v.textColor}
                    ${
                      n === v.value
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
                                        children: v.name,
                                      }),
                                      r.jsx("div", {
                                        className: "text-xs opacity-90",
                                        children: v.bgr,
                                      }),
                                    ],
                                  }),
                                  n === v.value &&
                                    r.jsx("div", {
                                      className:
                                        "absolute top-1 right-1 w-3 h-3 bg-white rounded-full border-2 border-gray-900",
                                    }),
                                ],
                              },
                              v.value
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
                              onChange: (v) => l(parseFloat(v.target.value)),
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
                              onChange: (v) => i(parseInt(v.target.value)),
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
                          children: r.jsx(vi, {
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
                      children: r.jsx(Xe, { className: "w-6 h-6" }),
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
                              ? r.jsx(Qu, { className: "w-5 h-5" })
                              : r.jsx(Ku, { className: "w-5 h-5" }),
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
      } = tt(),
      { t: g } = jt(),
      [h, m] = f.useState(new Set()),
      [j, S] = f.useState([]),
      [M, R] = f.useState(!0),
      [d, u] = f.useState([]),
      [p, E] = f.useState(!1),
      [P, _] = f.useState(!1),
      T = () => {
        c ? x(!1) : _(!0);
      },
      V = (N) => {
        N === "66437068" ? (x(!0), _(!1)) : alert("密碼錯誤，無法開啟後台模式");
      };
    f.useEffect(() => {
      (async () => {
        R(!0);
        try {
          const w = await ke.getDepartments();
          w.Code === 200 && w.Data
            ? (console.log(w.Data), S(w.Data), i(w.Data))
            : (console.error("API returned error:", w), S([]), i([]));
        } catch (w) {
          console.error("Failed to fetch department data:", w), S([]), i([]);
        } finally {
          R(!1);
        }
      })();
    }, []);
    const X = j.reduce((N, w) => {
        const L = w["department_type "];
        return N[L] || (N[L] = []), N[L].push(w), N;
      }, {}),
      J = (N) => {
        const w = new Set(h);
        w.has(N) ? w.delete(N) : w.add(N), m(w);
      },
      ue = async (N) => {
        console.log("🏢 選擇部門:", N), s(N), await we(N), t(!1);
      },
      we = async (N) => {
        console.log("🚀 開始取得藥品地圖資料，部門類型:", N), a(!0);
        try {
          const w = await ke.getMedMapByDepartment(N);
          if (w.Code === 200 && w.Data) {
            console.log("📡 API 回傳成功:", w.Data);
            const L = ct.convertMedMapApiToFakeData(w.Data);
            if (!ct.validateConvertedData(L)) {
              console.error("❌ 轉換後的資料驗證失敗"), u([]);
              return;
            }
            const b = ct.generateConversionReport(w.Data, L);
            u(L),
              o(L),
              console.log("💾 已暫存轉換後的資料到狀態中"),
              console.log("📊 最終轉換結果:", L),
              console.log("📋 轉換報告:", b);
          } else console.error("❌ API 回傳錯誤:", w), u([]), o(null);
        } catch (w) {
          console.error("💥 取得藥品地圖資料失敗:", w), u([]), o(null);
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
                          children: r.jsx(yi, { className: "w-5 h-5" }),
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
                children: M
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
                        Object.entries(X).map(([N, w]) =>
                          r.jsxs(
                            "div",
                            {
                              className: "space-y-1",
                              children: [
                                r.jsxs("button", {
                                  type: "button",
                                  onClick: () => ue(N),
                                  disabled: l,
                                  className: `w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 border ${
                                    n === N
                                      ? "bg-blue-50 text-blue-700 border-blue-200 shadow-sm"
                                      : "text-gray-700 hover:bg-gray-50 hover:shadow-sm border-transparent"
                                  } ${
                                    l ? "opacity-50 cursor-not-allowed" : ""
                                  }`,
                                  children: [
                                    r.jsxs("div", {
                                      className: "flex items-center space-x-3",
                                      children: [
                                        N === "B1F"
                                          ? r.jsx(Yu, { className: "w-4 h-4" })
                                          : r.jsx(ph, { className: "w-4 h-4" }),
                                        r.jsxs("div", {
                                          className: "text-left",
                                          children: [
                                            r.jsx("div", {
                                              className: "font-medium",
                                              children: N,
                                            }),
                                            r.jsxs("div", {
                                              className:
                                                "text-xs text-gray-500",
                                              children: [
                                                w.length,
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
                                        L.stopPropagation(), J(N);
                                      },
                                      className:
                                        "p-1 hover:bg-gray-200/50 rounded transition-colors",
                                      children: h.has(N)
                                        ? r.jsx(Xu, { className: "w-4 h-4" })
                                        : r.jsx(oh, { className: "w-4 h-4" }),
                                    }),
                                  ],
                                }),
                                h.has(N) &&
                                  r.jsx("div", {
                                    className: "ml-6 space-y-2",
                                    children: w.map((L) =>
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
                            N
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
                          onClick: T,
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
                      onClick: () => E(!0),
                      className:
                        "p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 rounded-lg transition-colors",
                      title: "設定",
                      children: r.jsx(En, { className: "w-5 h-5" }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
        r.jsx(yh, { isOpen: p, onClose: () => E(!1) }),
        r.jsx(vh, { isOpen: P, onClose: () => _(!1), onConfirm: V }),
      ],
    });
  },
  bh = () => {
    const { t: e } = jt();
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
      { t: a } = jt(),
      {
        apiDepartmentData: i,
        setApiDepartmentData: c,
        showNotification: x,
      } = tt(),
      [g, h] = f.useState(!1),
      [m, j] = f.useState({ x: 0, y: 0 }),
      [S, M] = f.useState(e.position),
      [R, d] = f.useState(!1),
      [u, p] = f.useState(null),
      [E, P] = f.useState({ x: 0, y: 0 }),
      [_, T] = f.useState({ x: 0, y: 0 });
    f.useEffect(() => {
      console.log("🔄 CanvasComponent: position prop changed", {
        GUID: e.GUID,
        newPosition: e.position,
        currentPosition: S,
      }),
        M(e.position);
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
      X = f.useCallback(
        async (F, ge) => {
          if (!i) return;
          console.log("🔄 更新組件位置:", F, ge);
          const he = JSON.parse(JSON.stringify(i)),
            me = (k) => {
              for (const C of k) {
                if (C.GUID === F)
                  return (
                    (C.position = { x: ge.x.toFixed(3), y: ge.y.toFixed(3) }),
                    console.log(
                      "✅ 組件位置已更新:",
                      C.name,
                      ge.x.toFixed(3),
                      ge.y.toFixed(3)
                    ),
                    !0
                  );
                if (
                  (C.components &&
                    Array.isArray(C.components) &&
                    me(C.components)) ||
                  (C.contents && Array.isArray(C.contents) && me(C.contents))
                )
                  return !0;
              }
              return !1;
            };
          if (me(he)) {
            c(he), console.log("💾 全域資料已更新");
            try {
              console.log("📡 開始同步後端位置資料...");
              const k = await ke.updateContainerPosition({
                GUID: F,
                absolute_position: `${ge.x.toFixed(3)},${ge.y.toFixed(3)}`,
              });
              k.Code === 200
                ? (console.log("✅ 後端位置同步成功", k),
                  x("位置更新成功", "success"))
                : (console.error("❌ 後端位置同步失敗:", k),
                  x(`位置更新失敗: ${k.Result || "未知錯誤"}`, "error"));
            } catch (k) {
              console.error("💥 後端位置同步發生錯誤:", k),
                x("位置更新失敗: 網路錯誤", "error");
            }
          } else console.warn("⚠️ 未找到要更新的組件:", F);
        },
        [i, c, x]
      ),
      { position: J, dimensions: ue, name: we, type: N } = e,
      w = f.useCallback(
        (F) => {
          const ge = l.current;
          if (ge)
            if ((T({ x: F.clientX, y: F.clientY }), n)) {
              F.preventDefault(),
                F.stopPropagation(),
                ge.setPointerCapture(F.pointerId);
              const he = ge.getBoundingClientRect(),
                me = F.clientX - he.left,
                Te = F.clientY - he.top;
              j({ x: me, y: Te }), h(!0), d(!1);
            } else d(!1);
        },
        [n]
      ),
      L = f.useCallback(() => {
        if (!i) return [];
        const F = [],
          ge = (he) => {
            for (const me of he)
              me.GUID !== e.GUID &&
                me.position &&
                F.push({
                  GUID: me.GUID,
                  position: me.position,
                  dimensions: me.dimensions,
                }),
                me.components &&
                  Array.isArray(me.components) &&
                  ge(me.components),
                me.contents && Array.isArray(me.contents) && ge(me.contents);
          };
        return ge(i), F;
      }, [i, e.GUID]),
      v = f.useCallback(
        (F, ge) => {
          const me = L();
          let Te = F,
            k = ge;
          for (const C of me) {
            const se = parseFloat(C.position.x),
              oe = parseFloat(C.position.y);
            if (
              (Math.abs(F - se) < 20 && (Te = se),
              Math.abs(ge - oe) < 20 && (k = oe),
              C.dimensions && e.dimensions)
            ) {
              const U = se + parseFloat(C.dimensions.width),
                Z = F + parseFloat(e.dimensions.width);
              Math.abs(Z - U) < 20 && (Te = U - parseFloat(e.dimensions.width));
              const ce = oe + parseFloat(C.dimensions.depth),
                $ = ge + parseFloat(e.dimensions.depth);
              Math.abs($ - ce) < 20 &&
                (k = ce - parseFloat(e.dimensions.depth));
            }
          }
          return { x: Te, y: k };
        },
        [L, e.dimensions]
      ),
      b = f.useCallback(
        (F) => {
          const ge = Math.abs(F.clientX - _.x),
            he = Math.abs(F.clientY - _.y);
          if (((ge > 5 || he > 5) && d(!0), !g || !n)) return;
          F.preventDefault(), F.stopPropagation();
          const me = l.current;
          if (!me) return;
          const Te = me.closest("[data-canvas-content]");
          if (!Te) return;
          const k = Te.getBoundingClientRect(),
            C = (F.clientX - k.left - m.x) / t,
            se = (F.clientY - k.top - m.y) / t,
            oe = v(C, se);
          M(oe);
        },
        [g, m, t, n, v, _]
      ),
      D = f.useCallback(
        (F) => {
          const ge = Math.abs(F.clientX - _.x),
            he = Math.abs(F.clientY - _.y),
            me = ge > 5 || he > 5;
          if (n) {
            if (!g) return;
            F.preventDefault(), F.stopPropagation();
            const Te = l.current;
            Te && Te.releasePointerCapture(F.pointerId),
              h(!1),
              me ? X(e.GUID, S) : o && o(e),
              d(!1);
          } else
            !me && o && (F.preventDefault(), F.stopPropagation(), o(e)), d(!1);
        },
        [g, n, o, e, X, S, _]
      ),
      I = f.useCallback(
        (F) => {
          const ge = l.current;
          if (!ge) return;
          const he = F.touches[0];
          if (he && (P({ x: he.clientX, y: he.clientY }), n)) {
            F.preventDefault(), F.stopPropagation(), p(he.identifier);
            const me = ge.getBoundingClientRect(),
              Te = he.clientX - me.left,
              k = he.clientY - me.top;
            j({ x: Te, y: k }), h(!0);
          }
        },
        [n]
      ),
      ne = f.useCallback(
        (F) => {
          if (!g || !n || u === null) return;
          F.preventDefault(), F.stopPropagation();
          const ge = l.current;
          if (!ge) return;
          const he = Array.from(F.touches).find((oe) => oe.identifier === u);
          if (!he) return;
          const me = ge.closest("[data-canvas-content]");
          if (!me) return;
          const Te = me.getBoundingClientRect(),
            k = (he.clientX - Te.left - m.x) / t,
            C = (he.clientY - Te.top - m.y) / t,
            se = v(k, C);
          M(se);
        },
        [g, m, t, n, u, v]
      ),
      G = f.useCallback(
        (F) => {
          const ge = Array.from(F.changedTouches)[0];
          if (!ge) return;
          const he = Math.abs(ge.clientX - E.x),
            me = Math.abs(ge.clientY - E.y),
            Te = he > 10 || me > 10;
          if (n) {
            if (
              !g ||
              u === null ||
              !Array.from(F.changedTouches).some((C) => C.identifier === u)
            )
              return;
            F.preventDefault(),
              F.stopPropagation(),
              h(!1),
              p(null),
              P({ x: 0, y: 0 }),
              Te ? X(e.GUID, S) : o && o(e);
          } else
            !Te && o && (F.preventDefault(), F.stopPropagation(), o(e)),
              P({ x: 0, y: 0 });
        },
        [g, n, u, X, e, S, E, o]
      ),
      W = f.useCallback(
        (F) => {
          !g ||
            !n ||
            u === null ||
            !Array.from(F.changedTouches).some((he) => he.identifier === u) ||
            (F.preventDefault(),
            F.stopPropagation(),
            M(e.position),
            h(!1),
            p(null),
            P({ x: 0, y: 0 }));
        },
        [g, n, u, e.position]
      ),
      je = (F) => {
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
      de = (F) => {
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
      z = (F) => {
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
        const ge =
          F === "調劑台"
            ? "type.dispensingStation"
            : F === "藥庫"
            ? "type.warehouse"
            : F === "parent_container"
            ? "櫃體"
            : "type." + F;
        return a(ge) || F;
      };
    return r.jsx("div", {
      ref: l,
      className: `flex flex-col absolute border-2 rounded-lg shadow-lg hover:shadow-xl ${je(
        N
      )} overflow-hidden ${n ? "cursor-move" : "cursor-default"} ${
        g ? "shadow-2xl z-50" : ""
      }`,
      style: {
        left: `${S.x}px`,
        top: `${S.y}px`,
        minWidth: N === "調劑台" || N === "藥庫" ? "120px" : "180px",
        minHeight: N === "調劑台" || N === "藥庫" ? "60px" : "120px",
        userSelect: "none",
        touchAction: "none",
        transition: g
          ? "none"
          : "transform 0.2s ease-out, box-shadow 0.2s ease-out",
      },
      onPointerDown: w,
      onPointerMove: b,
      onPointerUp: D,
      onTouchStart: I,
      onTouchMove: ne,
      onTouchEnd: G,
      onTouchCancel: W,
      children: r.jsx("div", {
        className: `w-full min-w-[400px] h-auto flex items-start flex-1 justify-between p-2 border-gray-600 ${de(
          N
        )}`,
        children: r.jsx("div", {
          className: "flex space-x-2 flex-1 min-w-0",
          children: r.jsxs("div", {
            className: "min-w-0 flex gap-4",
            children: [
              r.jsx("div", {
                className: "font-semibold text-lg truncate",
                children: we,
              }),
              r.jsx("div", {
                className: `text-sm truncate py-1 px-3 text-white rounded-2xl ${z(
                  N
                )}`,
                children: xe(N),
              }),
            ],
          }),
        }),
      }),
    });
  },
  tl = ({ isOpen: e, onClose: t, onScanSuccess: n, mode: s }) => {
    const { showNotification: o, openAddBarcodeModal: l } = tt();
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
      [h, m] = f.useState(!1),
      [j, S] = f.useState(""),
      [M, R] = f.useState(null),
      [d, u] = f.useState(!1);
    f.useEffect(() => {
      const X = () => {
        const J = window.innerWidth < 680;
        u(J);
      };
      return (
        X(),
        window.addEventListener("resize", X),
        () => window.removeEventListener("resize", X)
      );
    }, []);
    const p = async () => {
        try {
          S("");
          const X = await navigator.mediaDevices.getUserMedia({
            video: {
              facingMode: "environment",
              width: { ideal: 9999 },
              height: { ideal: 9999 },
            },
          });
          (c.current = X),
            a.current &&
              ((a.current.srcObject = X),
              await a.current.play(),
              console.log("✅ Camera started, setting isScanning to true"),
              m(!0));
        } catch (X) {
          console.error("無法開啟相機:", X),
            S("無法開啟相機，請確認相機權限已開啟");
        }
      },
      E = () => {
        console.log("🛑 停止相機和掃描"),
          (g.current = !1),
          m(!1),
          c.current &&
            (c.current.getTracks().forEach((X) => X.stop()),
            (c.current = null)),
          a.current && (a.current.srcObject = null);
      },
      P = async () => {
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
        const X = a.current,
          J = i.current,
          ue = J.getContext("2d");
        if (!ue || X.readyState !== X.HAVE_ENOUGH_DATA) {
          console.log("❌ Video not ready or no context"),
            (g.current = !1),
            setTimeout(() => {
              h && P();
            }, 100);
          return;
        }
        (J.width = X.videoWidth),
          (J.height = X.videoHeight),
          ue.drawImage(X, 0, 0, J.width, J.height),
          J.toBlob(
            async (we) => {
              if (!we) return;
              const N = new File([we], "scan.jpg", { type: "image/jpeg" }),
                w = performance.now();
              try {
                console.log("📸 [相機掃描] 截取圖片並掃描...");
                const L = performance.now(),
                  v = await ke.scanBarcode(N),
                  b = performance.now();
                if (
                  (console.log(
                    `⏱️ [相機掃描] 掃描條碼API用時: ${(b - L).toFixed(2)}ms`
                  ),
                  !v.results || v.results.length === 0)
                ) {
                  console.log("⚠️ 未辨識到條碼，立即進行下一輪掃描"),
                    (g.current = !1),
                    h && P();
                  return;
                }
                const D = v.results[0];
                if (!D.code) {
                  console.log(
                    "⚠️ 辨識到條碼但無法讀取內容，立即進行下一輪掃描"
                  ),
                    (g.current = !1),
                    h && P();
                  return;
                }
                console.log("✅ 成功辨識條碼:", D.code),
                  console.log("📋 條碼類型:", D.type),
                  console.log("📊 信心度:", D.conf),
                  (g.current = !1),
                  E(),
                  t();
                try {
                  const I = performance.now(),
                    ne = await ke.searchByBarCode(D.code);
                  console.log("AI掃描回傳:", ne);
                  const G = performance.now();
                  if (
                    (console.log(
                      `⏱️ [相機掃描] 搜尋藥品資料API用時: ${(G - I).toFixed(
                        2
                      )}ms`
                    ),
                    console.log("🔍 條碼搜尋結果:", ne),
                    ne.Code === 200)
                  )
                    if (
                      (console.log("✅ 找到藥品資料:", ne.Data),
                      console.log("🎯 準備調用 onScanSuccess, mode:", s),
                      o("找到藥品資料", "success"),
                      n)
                    ) {
                      console.log("✅ onScanSuccess 存在，開始調用");
                      const W = performance.now();
                      n(D.code, ne.Data);
                      const je = performance.now();
                      console.log(
                        `⏱️ [相機掃描] 定位藥品用時: ${(je - W).toFixed(2)}ms`
                      );
                      const de = performance.now();
                      console.log(
                        `⏱️ [相機掃描] 總用時: ${(de - w).toFixed(2)}ms`
                      ),
                        console.log("✅ onScanSuccess 調用完成");
                    } else console.warn("⚠️ onScanSuccess 不存在");
                  else
                    ne.Code === -200 && ne.Result === "查無資料"
                      ? (console.log("⚠️ 查無資料，開啟建立條碼彈窗"),
                        o("查無條碼資料，請建立條碼", "warning"),
                        l(D.code))
                      : (console.log("❌ 搜尋失敗:", ne.Result),
                        o(ne.Result || "搜尋失敗", "error"));
                } catch (I) {
                  console.error("條碼搜尋錯誤:", I),
                    o("搜尋失敗，請稍後再試", "error");
                }
              } catch (L) {
                console.error("掃描錯誤:", L),
                  (g.current = !1),
                  setTimeout(() => {
                    h && P();
                  }, 500);
              }
            },
            "image/jpeg",
            1
          );
      },
      _ = () => {
        console.log("🚀 開始連續掃描模式"), (g.current = !1), P();
      };
    f.useEffect(
      () => (
        e ? p() : E(),
        () => {
          E();
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
    const T = () => {
        E(), t();
      },
      V = async (X) => {
        if (!c.current || !x.current) return;
        const J = x.current.getBoundingClientRect(),
          ue = (X.clientX - J.left) / J.width,
          we = (X.clientY - J.top) / J.height;
        console.log("🎯 點擊聚焦位置:", { x: ue, y: we }),
          R({ x: X.clientX - J.left, y: X.clientY - J.top }),
          setTimeout(() => R(null), 1e3);
        try {
          const N = c.current.getVideoTracks()[0],
            w = N.getCapabilities();
          if (
            (console.log("📹 相機能力:", w),
            !w.focusMode || !w.focusMode.includes("manual"))
          ) {
            console.log("⚠️ 此相機不支援手動聚焦");
            return;
          }
          const L = {
            advanced: [
              {
                focusMode: "manual",
                focusDistance: 0,
                pointsOfInterest: [{ x: ue, y: we }],
              },
            ],
          };
          await N.applyConstraints(L), console.log("✅ 聚焦成功");
        } catch (N) {
          console.log("⚠️ 聚焦失敗 (可能不支援):", N);
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
                      r.jsx(Lr, { className: "w-6 h-6 text-white" }),
                      r.jsx("h2", {
                        className: "text-lg font-semibold text-white",
                        children: "條碼掃描",
                      }),
                    ],
                  }),
                  r.jsx("button", {
                    onClick: T,
                    className:
                      "p-2 hover:bg-gray-700 rounded-lg transition-colors",
                    children: r.jsx(Xe, { className: "w-6 h-6 text-white" }),
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
                      M &&
                        r.jsxs("div", {
                          className: "absolute pointer-events-none",
                          style: {
                            left: M.x,
                            top: M.y,
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
                          children: r.jsx(Lr, {
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
                      onClick: T,
                      className:
                        "p-2 hover:bg-gray-100 rounded-lg transition-colors",
                      children: r.jsx(Xe, {
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
          await ke.lightByCodeNameType(
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
        await ke.lightByCodeNameType(
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
const ps = new jh(),
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
      } = tt(),
      { t: m } = jt(),
      [j, S] = f.useState({ x: 0, y: 0, scale: 1 }),
      [M, R] = f.useState(!1),
      [d, u] = f.useState(!1),
      [p, E] = f.useState({ x: 0, y: 0 }),
      [P, _] = f.useState(!1),
      [T, V] = f.useState(!1),
      [X, J] = f.useState(""),
      [ue, we] = f.useState([]),
      [N, w] = f.useState(null),
      L = {
        blue: "255,0,0",
        green: "0,255,0",
        red: "0,0,255",
        yellow: "0,255,255",
        purple: "255,0,255",
        cyan: "255,255,0",
      },
      v = () => {
        try {
          const $ = localStorage.getItem("med_map_anchor");
          return $ ? JSON.parse($) : [];
        } catch ($) {
          return (
            console.error("Error reading canvas states from localStorage:", $),
            []
          );
        }
      },
      b = ($, B, q, re) => {
        try {
          const ie = v(),
            be = ie.findIndex(
              (ve) => ve.department === $ && ve.canvasType === B
            ),
            ae = { department: $, canvasType: B, scale: q, position: re };
          be >= 0 ? (ie[be] = ae) : ie.push(ae),
            localStorage.setItem("med_map_anchor", JSON.stringify(ie));
        } catch (ie) {
          console.error("Error saving canvas state to localStorage:", ie);
        }
      },
      D = ($, B) =>
        v().find((re) => re.department === $ && re.canvasType === B) || null;
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
        const B = setInterval(async () => {
          try {
            console.log("🔄 Auto-refreshing data for InfiniteCanvas...");
            const q = await ke.getMedMapByDepartment(n);
            if (q.Code === 200 && q.Data) {
              console.log("📡 API 回傳成功，開始轉換資料");
              const re = ct.convertMedMapApiToFakeData(q.Data);
              if (!ct.validateConvertedData(re)) {
                console.error("❌ 轉換後的資料驗證失敗");
                return;
              }
              console.log(
                "✅ Data refreshed and converted successfully, updating state..."
              ),
                console.log("📊 Converted data to set:", re),
                o(re);
            }
          } catch (q) {
            console.error("❌ Failed to auto-refresh data:", q);
          }
        }, 3 * 60 * 1e3);
        return () => {
          clearInterval(B);
        };
      }, [g, n, o]),
      f.useEffect(() => {
        if (n) {
          const $ = D(n, "InfiniteCanvas");
          if ($) S({ x: $.position.x, y: $.position.y, scale: $.scale });
          else {
            const B = { x: 0, y: 0, scale: 1 };
            S(B), b(n, "InfiniteCanvas", B.scale, B);
          }
        }
      }, [n]),
      f.useEffect(() => {
        if (!n) return;
        const $ = setTimeout(() => {
          b(n, "InfiniteCanvas", j.scale, { x: j.x, y: j.y });
        }, 500);
        return () => clearTimeout($);
      }, [j, n]),
      f.useEffect(() => {
        console.log("🔄 InfiniteCanvas: apiDepartmentData changed", {
          hasData: !!s,
          length: (s == null ? void 0 : s.length) || 0,
          data: s,
        });
      }, [s]);
    const I = f.useMemo(() => {
      if (
        (console.log(
          "🔄 useMemo: Re-calculating components due to apiDepartmentData change"
        ),
        !s || s.length === 0)
      )
        return console.log("⚠️ No apiDepartmentData available"), [];
      const $ = s,
        B = [];
      console.log("🔍 Processing departments for InfiniteCanvas:", $);
      for (const q of $)
        if (
          (console.log("📦 Processing department:", q.name, "Type:", q.type),
          q.type === "調劑台" || q.type === "藥庫")
        ) {
          if (q.contents && Array.isArray(q.contents)) {
            console.log("  └─ Found", q.contents.length, "parent containers");
            for (const re of q.contents)
              console.log("    📌 Parent container:", {
                GUID: re.GUID,
                name: re.name,
                type: re.type,
                position: re.position,
                hasDimensions: !!re.dimensions,
                dimensions: re.dimensions,
              }),
                B.push({
                  GUID: re.GUID,
                  type: re.type,
                  name: `${re.name}`,
                  position: re.position,
                  dimensions: re.dimensions || {
                    width: 200,
                    height: 200,
                    depth: 200,
                  },
                  med_list: re.med_list || [],
                  serverName: re.serverName,
                  serverType: re.serverType,
                  Master_GUID: q.GUID,
                  contents: re.contents || [],
                });
          }
        } else
          q.contents &&
            Array.isArray(q.contents) &&
            q.contents.length > 0 &&
            (console.log("  └─ Found", q.contents.length, "contents"),
            B.push(...q.contents));
      return (
        console.log("✅ Total components for InfiniteCanvas:", B.length), B
      );
    }, [s]);
    f.useEffect(() => {
      console.log("🎨 InfiniteCanvas: components changed", {
        count: I.length,
        components: I.map(($) => ({
          GUID: $.GUID,
          name: $.name,
          type: $.type,
          position: $.position,
        })),
      });
    }, [I]),
      f.useEffect(() => {
        const $ = (q) => {
            q.code === "Space" && !q.repeat && (q.preventDefault(), _(!0));
          },
          B = (q) => {
            q.code === "Space" && (q.preventDefault(), _(!1), R(!1));
          };
        return (
          window.addEventListener("keydown", $),
          window.addEventListener("keyup", B),
          () => {
            window.removeEventListener("keydown", $),
              window.removeEventListener("keyup", B);
          }
        );
      }, []);
    const ne = f.useCallback(
        ($) => {
          var q;
          if (d) return;
          if (
            ($.ctrlKey && !navigator.userAgent.includes("Mac")) ||
            ($.metaKey && navigator.userAgent.includes("Mac"))
          ) {
            $.preventDefault(), $.stopPropagation();
            const re =
              (q = t.current) == null ? void 0 : q.getBoundingClientRect();
            if (!re) return;
            const ie = $.clientX - re.left,
              be = $.clientY - re.top,
              ae = $.deltaY > 0 ? 0.9 : 1.1,
              ve = Math.max(0.1, Math.min(5, j.scale * ae)),
              Ce = ve / j.scale,
              Ee = ie - (ie - j.x) * Ce,
              Ze = be - (be - j.y) * Ce;
            S({ x: Ee, y: Ze, scale: ve });
          }
        },
        [j, d]
      ),
      G = f.useCallback(
        ($) => {
          d ||
            !P ||
            (R(!0), E({ x: $.clientX, y: $.clientY }), $.preventDefault());
        },
        [d, P]
      ),
      W = f.useCallback(
        ($) => {
          if (!M || d) return;
          const B = $.clientX - p.x,
            q = $.clientY - p.y;
          S((re) => ({ ...re, x: re.x + B, y: re.y + q })),
            E({ x: $.clientX, y: $.clientY });
        },
        [M, p, d]
      ),
      je = f.useCallback(() => {
        R(!1);
      }, []),
      de = f.useCallback(
        ($) => {
          if (!s) return [];
          const B = [],
            q = (re) => {
              for (const ie of re)
                ie.med_list &&
                  Array.isArray(ie.med_list) &&
                  ie.med_list.some((ae) => ae.code == $) &&
                  (console.log("✅ 找到藥品所在櫃體:", ie.name, ie.GUID),
                  B.push(ie)),
                  ie.components &&
                    Array.isArray(ie.components) &&
                    q(ie.components),
                  ie.contents && Array.isArray(ie.contents) && q(ie.contents);
            };
          return q(s), B;
        },
        [s]
      ),
      z = f.useCallback(() => {
        try {
          const B = localStorage.getItem("medMap_setting");
          if (B) {
            const re = JSON.parse(B).light_sec;
            if (re != null && re !== "") {
              const ie = Number(re);
              if (!isNaN(ie) && ie > 0) return ie * 1e3;
            }
          }
        } catch (B) {
          console.error("讀取亮燈設定失敗:", B);
        }
        return 6e4;
      }, []),
      xe = f.useCallback(() => {
        const $ = { rgb_color: "255,0,0", brightness: "100" };
        try {
          const B = localStorage.getItem("medMap_setting");
          if (B) {
            const q = JSON.parse(B),
              re = q.light_color || "red";
            return {
              rgb_color: L[re] || L.red,
              brightness: String(q.brightness !== void 0 ? q.brightness : 100),
            };
          }
        } catch (B) {
          console.error("讀取亮燈設定失敗:", B);
        }
        return $;
      }, []),
      F = f.useCallback(
        async ($) => {
          if (!$.trim()) return;
          console.log("🔍 搜尋藥碼:", $);
          const B = de($);
          if (B.length > 0) {
            const q = z(),
              re = xe();
            console.log(`🎯 高亮 ${B.length} 個櫃體:`, B),
              console.log(`⏱️ 亮燈時長: ${q}ms (${q / 1e3}秒)`),
              console.log("💡 亮燈設定:", re);
            const ie = B.map((ae) => ae.GUID);
            we(ie), w($), x($);
            const be = B.filter((ae) => ae.serverName && ae.serverType).map(
              (ae) => ({
                serverName: ae.serverName,
                serverType: ae.serverType,
                medicineCode: $,
                deviceType: ae.device_type,
              })
            );
            be.length > 0 &&
              (await ps.startLighting(be, re.rgb_color, re.brightness, q),
              setTimeout(() => {
                we([]), w(null), x(null);
              }, q));
          } else
            console.log("❌ 未找到包含此藥品的櫃體"), we([]), w(null), x(null);
        },
        [de, z, xe, x]
      ),
      ge = ($, B) => {
        var be, ae;
        console.log("📍 [相機掃描-部門視圖] 藥品定位模式 - 掃描到藥品:", {
          barcode: $,
          medicineData: B,
        });
        const q =
          ((be = B[0]) == null ? void 0 : be.CODE) ||
          ((ae = B[0]) == null ? void 0 : ae.code);
        V(!1);
        const re = performance.now();
        F(q);
        const ie = performance.now();
        console.log(
          `⏱️ [相機掃描-部門視圖] 亮燈用時: ${(ie - re).toFixed(2)}ms`
        );
      },
      he = async ($) => {
        var B, q;
        if ($.key === "Enter") {
          if (($.preventDefault(), !X.trim())) {
            l("請輸入條碼", "warning");
            return;
          }
          const re = performance.now();
          try {
            console.log("🔍 [手動輸入-部門視圖] 搜尋條碼:", X);
            const ie = performance.now(),
              be = await ke.searchByBarCode(X),
              ae = performance.now();
            if (
              (console.log(
                `⏱️ [手動輸入-部門視圖] API搜尋藥品資料用時: ${(
                  ae - ie
                ).toFixed(2)}ms`
              ),
              console.log("📋 條碼搜尋回應:", be),
              be.Code === 200 && be.Data && be.Data.length > 0)
            ) {
              const ve =
                ((B = be.Data[0]) == null ? void 0 : B.CODE) ||
                ((q = be.Data[0]) == null ? void 0 : q.code);
              console.log("✅ 找到藥品資料:", be.Data),
                l("找到藥品，開始亮燈", "success");
              const Ce = performance.now();
              F(ve);
              const Ee = performance.now();
              console.log(
                `⏱️ [手動輸入-部門視圖] 亮燈用時: ${(Ee - Ce).toFixed(2)}ms`
              ),
                J("");
              const Ze = performance.now();
              console.log(
                `⏱️ [手動輸入-部門視圖] 總用時: ${(Ze - re).toFixed(2)}ms`
              );
            } else
              be.Code === -200 && be.Result === "查無資料"
                ? (console.log("⚠️ 查無資料，開啟建立條碼彈窗"),
                  l("查無條碼資料，請建立條碼", "warning"),
                  a(X),
                  J(""))
                : (console.log("❌ 搜尋失敗:", be.Result),
                  l(be.Result || "搜尋失敗", "error"));
          } catch (ie) {
            console.error("條碼搜尋錯誤:", ie),
              l("搜尋失敗，請稍後再試", "error");
          }
        }
      };
    f.useEffect(
      () => () => {
        ps.cleanup();
      },
      []
    ),
      f.useEffect(() => {
        if (c) {
          console.log("🔔 Context highlightedMedicineCode 變化:", c);
          const $ = de(c);
          if ($.length > 0) {
            const B = $.map((q) => q.GUID);
            we(B), w(c), console.log("✨ UI 高亮已更新:", B);
          }
        } else we([]), w(null);
      }, [c, de]);
    const [me, Te] = f.useState(null),
      [k, C] = f.useState({ x: 0, y: 0 }),
      se = ($) => {
        if ($.length < 2) return null;
        const B = $[0],
          q = $[1];
        return Math.sqrt(
          Math.pow(q.clientX - B.clientX, 2) +
            Math.pow(q.clientY - B.clientY, 2)
        );
      },
      oe = ($) => {
        if ($.length === 1) return { x: $[0].clientX, y: $[0].clientY };
        const B = $[0],
          q = $[1];
        return {
          x: (B.clientX + q.clientX) / 2,
          y: (B.clientY + q.clientY) / 2,
        };
      },
      U = f.useCallback(
        ($) => {
          if (!d) {
            if ($.touches.length === 2) {
              const B = se($.touches),
                q = oe($.touches);
              Te(B), C(q);
            } else if ($.touches.length === 1) {
              const B = $.touches[0];
              E({ x: B.clientX, y: B.clientY }), R(!0);
            }
          }
        },
        [d]
      ),
      Z = f.useCallback(
        ($) => {
          var B;
          if (!d) {
            if (($.preventDefault(), $.touches.length === 2 && me !== null)) {
              const q = se($.touches),
                re = oe($.touches);
              if (q && me) {
                const ie =
                  (B = t.current) == null ? void 0 : B.getBoundingClientRect();
                if (!ie) return;
                const be = q / me,
                  ae = Math.max(0.1, Math.min(5, j.scale * be)),
                  ve = re.x - ie.left,
                  Ce = re.y - ie.top,
                  Ee = ae / j.scale,
                  Ze = ve - (ve - j.x) * Ee,
                  Pe = Ce - (Ce - j.y) * Ee;
                S({ x: Ze, y: Pe, scale: ae }), Te(q), C(re);
              }
            } else if ($.touches.length === 1 && M) {
              const q = $.touches[0],
                re = q.clientX - p.x,
                ie = q.clientY - p.y;
              S((be) => ({ ...be, x: be.x + re, y: be.y + ie })),
                E({ x: q.clientX, y: q.clientY });
            }
          }
        },
        [j, me, M, p, d]
      ),
      ce = f.useCallback(() => {
        Te(null), R(!1);
      }, []);
    return (
      f.useEffect(() => {
        const $ = t.current;
        if ($)
          return (
            $.addEventListener("wheel", ne, { passive: !1 }),
            () => $.removeEventListener("wheel", ne)
          );
      }, [ne]),
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
                  value: X,
                  onChange: ($) => J($.target.value),
                  onKeyPress: he,
                  placeholder: "輸入條碼或掃描...",
                  className:
                    "px-4 py-2 w-50 focus:outline-none text-gray-700 disabled:opacity-50",
                }),
                r.jsx("button", {
                  onClick: () => V(!0),
                  className: "p-2",
                  title: "掃描條碼",
                  children: r.jsx(Lr, { className: "w-6 h-6 text-blue-600" }),
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
              title: m(d ? "canvas.unlockCanvas" : "canvas.lockCanvas"),
              children: d
                ? r.jsx(vi, { className: "w-6 h-6" })
                : r.jsx(Zu, { className: "w-6 h-6" }),
            }),
          }),
          r.jsx("div", {
            ref: t,
            className: `w-full h-full relative ${
              P && !d ? "cursor-grab" : "cursor-default"
            } ${M ? "cursor-grabbing" : ""}`,
            onMouseDown: G,
            onMouseMove: W,
            onMouseUp: je,
            onMouseLeave: je,
            onTouchStart: U,
            onTouchMove: Z,
            onTouchEnd: ce,
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
                    I.map(($) =>
                      r.jsx(
                        Nh,
                        {
                          component: $,
                          scale: j.scale,
                          isLocked: d,
                          isHighlighted: ue.includes($.GUID),
                          onContainerClick: (B) => {
                            console.log("🖱️ 點擊櫃體，傳遞亮燈藥品代碼:", N),
                              i(B, N);
                          },
                        },
                        $.GUID
                      )
                    ),
                    e,
                  ],
                }),
              ],
            }),
          }),
          r.jsx(tl, {
            isOpen: T,
            onClose: () => V(!1),
            onScanSuccess: ge,
            mode: "med_light_location_mode",
          }),
        ],
      })
    );
  },
  Zr = ({ content: e, isAdminMode: t }) => {
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
        showNotification: m,
        triggerRefresh: j,
        openEditStoreShelfModal: S,
        openEditParentContainerModal: M,
        updateContainerInLocalData: R,
        removeContainerFromLocalData: d,
      } = tt(),
      { t: u } = jt(),
      [p, E] = f.useState(!1),
      [P, _] = f.useState(""),
      [T, V] = f.useState(!1),
      [X, J] = f.useState(e.name),
      [ue, we] = f.useState(!1),
      [N, w] = f.useState(!1);
    f.useEffect(() => {
      J(e.name);
    }, [e.name]);
    const L = (z) => {
        z.stopPropagation(), _(e.name || ""), E(!0);
      },
      v = (z) => {
        z.stopPropagation(), E(!1), _("");
      },
      b = (z) => {
        z.stopPropagation(), w(!0);
      },
      D = (z) => {
        z.stopPropagation(), w(!1);
      },
      I = async (z) => {
        z.stopPropagation(), we(!0);
        try {
          let xe;
          if (e.type === "parent_container")
            xe = await ke.deleteParentContainer(e.GUID);
          else if (e.type === "sub_container")
            xe = await ke.deleteSubContainer(e.GUID);
          else if (
            e.type === "store_shelves" ||
            e.type === "dispensing_shelves"
          )
            xe = await ke.deleteShelfContainer(e.GUID);
          else {
            m("不支援的容器類型", "error"), we(!1), w(!1);
            return;
          }
          xe.Code === 200
            ? (m("刪除成功", "success"), d(e.GUID), w(!1))
            : m(xe.Result || "刪除失敗", "error");
        } catch (xe) {
          console.error("刪除容器失敗:", xe),
            m("刪除失敗，請稍後再試", "error");
        } finally {
          we(!1), w(!1);
        }
      },
      ne = async (z) => {
        if ((z.stopPropagation(), !P.trim())) {
          m("名稱不能為空", "error");
          return;
        }
        if (P === e.name) {
          E(!1);
          return;
        }
        V(!0);
        try {
          const xe = [
            {
              GUID: e.GUID,
              name: P.trim(),
              Master_GUID: e.Master_GUID,
              position: e.gird_position,
              serverName: e.serverName,
              serverType: e.serverType,
            },
          ];
          let F;
          if (e.type === "store_shelves" || e.type === "dispensing_shelves")
            F = await ke.updateMedMapShelf(xe);
          else if (e.type === "sub_container")
            F = await ke.updateSubSection(xe);
          else if (e.type === "parent_container")
            F = await ke.updateMedMapSection(xe);
          else {
            m("不支援的容器類型", "error"), V(!1);
            return;
          }
          F.Code === 200
            ? (m("名稱更新成功", "success"),
              E(!1),
              J(P.trim()),
              R(e.GUID, { name: P.trim() }))
            : m(F.Result || "更新失敗", "error");
        } catch (xe) {
          console.error("更新名稱失敗:", xe),
            m("更新失敗，請稍後再試", "error");
        } finally {
          V(!1);
        }
      },
      G = (z) => {
        switch (z) {
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
      W = (z) => {
        switch (z) {
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
      je = (z) => {
        switch (z) {
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
      de = (z) => {
        switch (z) {
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
            return z;
        }
      };
    switch (e.type) {
      case "sub_container":
        return r.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${G(
            e.type || 0
          )} ${W(e.type || 0)}`,
          children: [
            r.jsxs("div", {
              className: "flex items-center space-x-2 mr-6 flex-1",
              children: [
                p
                  ? r.jsxs("div", {
                      className: "flex items-center space-x-2 flex-1",
                      children: [
                        r.jsx("input", {
                          type: "text",
                          value: P,
                          onChange: (z) => _(z.target.value),
                          onClick: (z) => z.stopPropagation(),
                          className:
                            "text-base font-semibold text-gray-800 border-2 border-blue-400 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500",
                          disabled: T,
                          autoFocus: !0,
                        }),
                        r.jsx("button", {
                          onClick: ne,
                          disabled: T,
                          className:
                            "p-1 hover:bg-green-100 rounded transition-colors disabled:opacity-50",
                          title: "更新",
                          children: r.jsx(eo, {
                            className: "w-5 h-5 text-green-600",
                          }),
                        }),
                        r.jsx("button", {
                          onClick: v,
                          disabled: T,
                          className:
                            "p-1 hover:bg-red-100 rounded transition-colors disabled:opacity-50",
                          title: "取消",
                          children: r.jsx(Xe, {
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
                          children: X,
                        }),
                        r.jsx("button", {
                          onClick: L,
                          className:
                            "p-1 hover:bg-black/10 rounded transition-colors",
                          title: "編輯名稱",
                          children: r.jsx(jr, {
                            className: "w-4 h-4 text-gray-600",
                          }),
                        }),
                      ],
                    }),
                e.type != "parent_container" &&
                  !p &&
                  r.jsx("span", {
                    className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${je(
                      e.type
                    )}`,
                    children: de(e.type),
                  }),
              ],
            }),
            e.type !== "none" &&
              !p &&
              r.jsxs("div", {
                className: "flex items-center space-x-1",
                children: [
                  t &&
                    r.jsx("button", {
                      className:
                        "p-1 hover:bg-red-100 rounded transition-colors",
                      onClick: b,
                      title: "刪除容器",
                      children: r.jsx(Sr, {
                        className: "w-5 h-5 text-red-600",
                      }),
                    }),
                  r.jsx("button", {
                    className:
                      "p-1 hover:bg-black/10 rounded transition-colors",
                    onClick: (z) => {
                      z.stopPropagation(), a(e);
                    },
                    title: u("modal.add"),
                    children: r.jsx(Dt, {
                      className: "w-6 h-6 text-green-700",
                    }),
                  }),
                ],
              }),
            N &&
              r.jsx("div", {
                className:
                  "absolute inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm",
                children: r.jsxs("div", {
                  className: "bg-white rounded-lg shadow-xl p-6 max-w-sm mx-4",
                  onClick: (z) => z.stopPropagation(),
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
                          onClick: D,
                          disabled: ue,
                          className:
                            "px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50",
                          children: "取消",
                        }),
                        r.jsx("button", {
                          onClick: I,
                          disabled: ue,
                          className:
                            "px-4 py-2 text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed",
                          children: ue ? "刪除中..." : "確認刪除",
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
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${G(
            e.type || 0
          )} ${W(
            e.type || 0
          )} cursor-pointer hover:bg-black/5 transition-colors`,
          onClick: (z) => {
            p || M(e);
          },
          children: [
            r.jsxs("div", {
              className: "flex items-center space-x-2 mr-6 flex-1",
              children: [
                p
                  ? r.jsxs("div", {
                      className: "flex items-center space-x-2 flex-1",
                      children: [
                        r.jsx("input", {
                          type: "text",
                          value: P,
                          onChange: (z) => _(z.target.value),
                          onClick: (z) => z.stopPropagation(),
                          className:
                            "text-base font-semibold text-gray-800 border-2 border-blue-400 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500",
                          disabled: T,
                          autoFocus: !0,
                        }),
                        r.jsx("button", {
                          onClick: (z) => {
                            z.stopPropagation(), ne(z);
                          },
                          disabled: T,
                          className:
                            "p-1 hover:bg-green-100 rounded transition-colors disabled:opacity-50",
                          title: "更新",
                          children: r.jsx(eo, {
                            className: "w-5 h-5 text-green-600",
                          }),
                        }),
                        r.jsx("button", {
                          onClick: (z) => {
                            z.stopPropagation(), v(z);
                          },
                          disabled: T,
                          className:
                            "p-1 hover:bg-red-100 rounded transition-colors disabled:opacity-50",
                          title: "取消",
                          children: r.jsx(Xe, {
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
                          children: X,
                        }),
                        r.jsx("button", {
                          onClick: (z) => {
                            z.stopPropagation(), L(z);
                          },
                          className:
                            "p-1 hover:bg-black/10 rounded transition-colors",
                          title: "編輯名稱",
                          children: r.jsx(jr, {
                            className: "w-4 h-4 text-gray-600",
                          }),
                        }),
                      ],
                    }),
                e.type != "parent_container" && !p
                  ? r.jsx("span", {
                      className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${je(
                        e.type
                      )}`,
                      children: de(e.type),
                    })
                  : null,
              ],
            }),
            e.type !== "none" &&
              !p &&
              r.jsxs("div", {
                className: "flex items-center space-x-1",
                children: [
                  t &&
                    r.jsx("button", {
                      className:
                        "p-1 hover:bg-red-100 rounded transition-colors",
                      onClick: b,
                      title: "刪除容器",
                      children: r.jsx(Sr, {
                        className: "w-5 h-5 text-red-600",
                      }),
                    }),
                  r.jsx("button", {
                    className:
                      "p-1 hover:bg-black/10 rounded transition-colors",
                    onClick: (z) => {
                      z.stopPropagation(), i(e);
                    },
                    title: u("modal.add"),
                    children: r.jsx(Dt, {
                      className: "w-6 h-6 text-green-700",
                    }),
                  }),
                ],
              }),
            N &&
              r.jsx("div", {
                className:
                  "absolute inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm",
                children: r.jsxs("div", {
                  className: "bg-white rounded-lg shadow-xl p-6 max-w-sm mx-4",
                  onClick: (z) => z.stopPropagation(),
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
                          onClick: D,
                          disabled: ue,
                          className:
                            "px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50",
                          children: "取消",
                        }),
                        r.jsx("button", {
                          onClick: I,
                          disabled: ue,
                          className:
                            "px-4 py-2 text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed",
                          children: ue ? "刪除中..." : "確認刪除",
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
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${G(
            e.type || 0
          )} ${W(e.type || 0)}`,
          children: [
            r.jsx("div", {
              className: "flex items-center mr-4",
              children:
                e.type != "parent_container"
                  ? r.jsx("span", {
                      className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${je(
                        e.type
                      )}`,
                      children: de(e.type),
                    })
                  : null,
            }),
            r.jsx("div", {
              className: "flex items-center space-x-1",
              children: r.jsx("button", {
                className: "p-1 hover:bg-black/10 rounded transition-colors",
                onClick: (z) => {
                  z.stopPropagation(), n(e);
                },
                title: u("modal.settings"),
                children: r.jsx(En, { className: "w-6 h-6 text-gray-600" }),
              }),
            }),
          ],
        });
      case "dispensing_shelves":
        return r.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${G(
            e.type || 0
          )} ${W(e.type || 0)}`,
          onClick: (z) => {
            p || S(e);
          },
          children: [
            r.jsxs("div", {
              className: "flex items-center space-x-2 mr-6 flex-1",
              children: [
                p
                  ? r.jsxs("div", {
                      className: "flex items-center space-x-2 flex-1",
                      children: [
                        r.jsx("input", {
                          type: "text",
                          value: P,
                          onChange: (z) => _(z.target.value),
                          onClick: (z) => z.stopPropagation(),
                          className:
                            "text-base font-semibold text-gray-800 border-2 border-blue-400 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500",
                          disabled: T,
                          autoFocus: !0,
                        }),
                        r.jsx("button", {
                          onClick: ne,
                          disabled: T,
                          className:
                            "p-1 hover:bg-green-100 rounded transition-colors disabled:opacity-50",
                          title: "更新",
                          children: r.jsx(eo, {
                            className: "w-5 h-5 text-green-600",
                          }),
                        }),
                        r.jsx("button", {
                          onClick: v,
                          disabled: T,
                          className:
                            "p-1 hover:bg-red-100 rounded transition-colors disabled:opacity-50",
                          title: "取消",
                          children: r.jsx(Xe, {
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
                          children: X,
                        }),
                        r.jsx("button", {
                          onClick: (z) => {
                            z.stopPropagation(), L(z);
                          },
                          className:
                            "p-1 hover:bg-black/10 rounded transition-colors",
                          title: "編輯名稱",
                          children: r.jsx(jr, {
                            className: "w-4 h-4 text-gray-600",
                          }),
                        }),
                      ],
                    }),
                e.type != "parent_container" &&
                  !p &&
                  r.jsx("span", {
                    className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${je(
                      e.type
                    )}`,
                    children: de(e.type),
                  }),
              ],
            }),
            r.jsxs("div", {
              className: "flex items-center space-x-1",
              children: [
                t &&
                  !p &&
                  r.jsx("button", {
                    className: "p-1 hover:bg-red-100 rounded transition-colors",
                    onClick: b,
                    title: "刪除容器",
                    children: r.jsx(Sr, { className: "w-5 h-5 text-red-600" }),
                  }),
                r.jsx("button", {
                  className: "p-1 hover:bg-black/10 rounded transition-colors",
                  onClick: (z) => {
                    z.stopPropagation();
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
                  children: r.jsx(Dt, { className: "w-6 h-6 text-green-700" }),
                }),
              ],
            }),
            N &&
              r.jsx("div", {
                className:
                  "absolute inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm",
                children: r.jsxs("div", {
                  className: "bg-white rounded-lg shadow-xl p-6 max-w-sm mx-4",
                  onClick: (z) => z.stopPropagation(),
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
                          onClick: D,
                          disabled: ue,
                          className:
                            "px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50",
                          children: "取消",
                        }),
                        r.jsx("button", {
                          onClick: I,
                          disabled: ue,
                          className:
                            "px-4 py-2 text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed",
                          children: ue ? "刪除中..." : "確認刪除",
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
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${G(
            e.type || 0
          )} ${W(
            e.type || 0
          )} cursor-pointer hover:bg-black/5 transition-colors`,
          onClick: (z) => {
            p || S(e);
          },
          children: [
            r.jsxs("div", {
              className: "flex items-center space-x-2 mr-6 flex-1",
              children: [
                p
                  ? r.jsxs("div", {
                      className: "flex items-center space-x-2 flex-1",
                      children: [
                        r.jsx("input", {
                          type: "text",
                          value: P,
                          onChange: (z) => _(z.target.value),
                          onClick: (z) => z.stopPropagation(),
                          className:
                            "text-base font-semibold text-gray-800 border-2 border-blue-400 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500",
                          disabled: T,
                          autoFocus: !0,
                        }),
                        r.jsx("button", {
                          onClick: (z) => {
                            z.stopPropagation(), ne(z);
                          },
                          disabled: T,
                          className:
                            "p-1 hover:bg-green-100 rounded transition-colors disabled:opacity-50",
                          title: "更新",
                          children: r.jsx(eo, {
                            className: "w-5 h-5 text-green-600",
                          }),
                        }),
                        r.jsx("button", {
                          onClick: (z) => {
                            z.stopPropagation(), v(z);
                          },
                          disabled: T,
                          className:
                            "p-1 hover:bg-red-100 rounded transition-colors disabled:opacity-50",
                          title: "取消",
                          children: r.jsx(Xe, {
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
                          children: X,
                        }),
                        r.jsx("button", {
                          onClick: (z) => {
                            z.stopPropagation(), L(z);
                          },
                          className:
                            "p-1 hover:bg-black/10 rounded transition-colors",
                          title: "編輯名稱",
                          children: r.jsx(jr, {
                            className: "w-4 h-4 text-gray-600",
                          }),
                        }),
                      ],
                    }),
                e.type != "parent_container" &&
                  !p &&
                  r.jsx("span", {
                    className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${je(
                      e.type
                    )}`,
                    children: de(e.type),
                  }),
              ],
            }),
            r.jsxs("div", {
              className: "flex items-center space-x-1",
              children: [
                t &&
                  !p &&
                  r.jsx("button", {
                    className: "p-1 hover:bg-red-100 rounded transition-colors",
                    onClick: b,
                    title: "刪除容器",
                    children: r.jsx(Sr, { className: "w-5 h-5 text-red-600" }),
                  }),
                r.jsx("button", {
                  className: "p-1 hover:bg-black/10 rounded transition-colors",
                  onClick: (z) => {
                    z.stopPropagation(), c(e);
                  },
                  title: u("modal.add"),
                  children: r.jsx(Dt, { className: "w-6 h-6 text-green-700" }),
                }),
              ],
            }),
            N &&
              r.jsx("div", {
                className:
                  "absolute inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm",
                children: r.jsxs("div", {
                  className: "bg-white rounded-lg shadow-xl p-6 max-w-sm mx-4",
                  onClick: (z) => z.stopPropagation(),
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
                          onClick: D,
                          disabled: ue,
                          className:
                            "px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50",
                          children: "取消",
                        }),
                        r.jsx("button", {
                          onClick: I,
                          disabled: ue,
                          className:
                            "px-4 py-2 text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed",
                          children: ue ? "刪除中..." : "確認刪除",
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
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${G(
            e.type || 0
          )} ${W(e.type || 0)}`,
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
                      className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${je(
                        e.type
                      )}`,
                      children: de(e.type),
                    })
                  : null,
              ],
            }),
            r.jsx("button", {
              className: "p-1 hover:bg-black/10 rounded transition-colors",
              onClick: (z) => {
                z.stopPropagation(), o(e);
              },
              title: u("modal.settings"),
              children: r.jsx(En, { className: "w-6 h-6 text-gray-600" }),
            }),
          ],
        });
      case "grid_draw":
        return r.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${G(
            e.type || 0
          )} ${W(e.type || 0)}`,
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
                      className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${je(
                        e.type
                      )}`,
                      children: de(e.type),
                    })
                  : null,
              ],
            }),
            r.jsx("button", {
              className: "p-1 hover:bg-black/10 rounded transition-colors",
              onClick: (z) => {
                z.stopPropagation(), l(e);
              },
              title: u("modal.settings"),
              children: r.jsx(En, { className: "w-6 h-6 text-gray-600" }),
            }),
          ],
        });
      default:
        return r.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${G(
            e.type || 0
          )} ${W(e.type || 0)}`,
          children: [
            r.jsx("div", {
              className: "flex items-center space-x-2 mr-6",
              children:
                e.type != "parent_container"
                  ? r.jsx("span", {
                      className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${je(
                        e.type
                      )}`,
                      children: de(e.type),
                    })
                  : null,
            }),
            e.type !== "none" &&
              r.jsx("button", {
                className: "p-1 hover:bg-black/10 rounded transition-colors",
                title: u("modal.settings"),
                children: r.jsx(En, { className: "w-6 h-6 text-gray-600" }),
              }),
          ],
        });
    }
  },
  ef = f.forwardRef(({ children: e }, t) => {
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
        isAdminMode: m,
        activeCanvas: j,
        setActiveCanvas: S,
      } = tt(),
      [M, R] = f.useState({ x: 0, y: 0, scale: 1 }),
      [d, u] = f.useState(!1),
      [p, E] = f.useState(!1),
      [P, _] = f.useState({ x: 0, y: 0 }),
      [T, V] = f.useState(!1),
      [X, J] = f.useState(""),
      [ue, we] = f.useState(!1),
      [N, w] = f.useState(null),
      [L, v] = f.useState(!1),
      [b, D] = f.useState({
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
      [I, ne] = f.useState(null),
      G = f.useRef({}),
      W = () =>
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ) ||
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0,
      je = 8,
      de = () => {
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
      z = (y, te, Y, A) => {
        try {
          const H = de(),
            O = H.findIndex((K) => K.department === y && K.canvasType === te),
            Q = { department: y, canvasType: te, scale: Y, position: A };
          O >= 0 ? (H[O] = Q) : H.push(Q),
            localStorage.setItem("med_map_anchor", JSON.stringify(H));
        } catch (H) {
          console.error("Error saving canvas state to localStorage:", H);
        }
      },
      xe = (y, te) =>
        de().find((A) => A.department === y && A.canvasType === te) || null;
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
            const Y = await ke.getMedMapByDepartment(s);
            if (Y.Code === 200 && Y.Data) {
              console.log("📡 API 回傳成功，開始轉換資料");
              const A = ct.convertMedMapApiToFakeData(Y.Data);
              if (!ct.validateConvertedData(A)) {
                console.error("❌ 轉換後的資料驗證失敗");
                return;
              }
              console.log(
                "✅ Data refreshed and converted successfully, updating state..."
              ),
                l(A);
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
            R(te), z(s, "drugCanvas", te.scale, te);
          }
        }
      }, [s]),
      f.useEffect(() => {
        if (!s) return;
        const y = setTimeout(() => {
          z(s, "drugCanvas", M.scale, { x: M.x, y: M.y });
        }, 500);
        return () => clearTimeout(y);
      }, [M, s]);
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
      ge = (y) =>
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
      he = (y) => {
        const [te, Y] = y.split(",").map(Number);
        return { row: te || 0, col: Y || 0 };
      },
      me = (y, te) => {
        const Y = (H, O = null) => {
            if (H.GUID === y) return { container: H, parent: O };
            if (H.contents)
              for (const Q of H.contents) {
                const K = Y(Q, H);
                if (K) return K;
              }
            return null;
          },
          A = rt();
        for (const H of A) {
          const O = Y(H);
          if (O) return O;
        }
        return null;
      },
      Te = (y, te) => {
        if (!y.contents) return [];
        const Y = te;
        if (!Y) return y.contents;
        const A = he(Y.gird_position);
        console.log("📤 移除容器位置:", A);
        for (const H of y.contents) {
          const O = he(H.gird_position);
          if (O.row === A.row && O.col > A.col) {
            const Q = O.col - 1;
            (H.gird_position = `${O.row},${Q}`),
              console.log(
                `  ← 容器 ${H.GUID}: (${O.row},${O.col}) → (${O.row},${Q})`
              ),
              (G.current[H.GUID] = {
                GUID: H.GUID,
                Master_GUID: y.GUID,
                position: `${O.row},${Q}`,
                serverName: y.serverName,
                serverType: y.serverType,
                type: H.type,
                containerData: H,
              });
          }
        }
        return console.log("✓ 重新計算完成"), y.contents;
      },
      k = (y, te, Y, A, H) => {
        if (
          (y.contents || (y.contents = []),
          console.log("📥 插入容器到位置:", `(${Y},${A})`),
          console.log("   插入方向:", H),
          console.log("   目標父容器:", y.GUID),
          console.log("   插入前容器數量:", y.contents.length),
          y.contents.length === 0)
        )
          (Y = 0), (A = 0), console.log("   父容器為空，放置在 (0,0)");
        else {
          const O = y.contents
            .filter((Q) => {
              const K = he(Q.gird_position || "0,0");
              return K.row === Y && K.col >= A;
            })
            .sort((Q, K) => {
              const fe = he(Q.gird_position || "0,0");
              return he(K.gird_position || "0,0").col - fe.col;
            });
          console.log(`   同 row ${Y} 需要移動的容器數量:`, O.length);
          for (const Q of O) {
            const K = he(Q.gird_position || "0,0"),
              fe = K.col + 1;
            (Q.gird_position = `${K.row},${fe}`),
              console.log(
                `  → 容器 ${Q.GUID}: (${K.row},${K.col}) → (${K.row},${fe})`
              ),
              (G.current[Q.GUID] = {
                GUID: Q.GUID,
                Master_GUID: y.GUID,
                position: `${K.row},${fe}`,
                serverName: y.serverName,
                serverType: y.serverType,
                type: Q.type,
                containerData: Q,
              });
          }
        }
        (te.gird_position = `${Y},${A}`),
          (te.Master_GUID = y.GUID),
          console.log(`Inserted container ${te.GUID} at position ${Y},${A}`),
          y.contents.push(te),
          (G.current[te.GUID] = {
            GUID: te.GUID,
            Master_GUID: y.GUID,
            position: `${Y},${A}`,
            serverName: y.serverName,
            serverType: y.serverType,
            type: te.type,
            containerData: te,
          }),
          te.type === "dispensing_shelves" &&
            te.contents &&
            te.contents.forEach((O) => {
              O.type === "med_box" &&
                (G.current[O.GUID] = {
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
      C = (y, te, Y) => {
        const A = y.getBoundingClientRect(),
          H = A.left + A.width / 2,
          O = A.top + A.height / 2,
          Q = te - H,
          K = Y - O;
        return Math.abs(Q) > Math.abs(K)
          ? Q > 0
            ? "right"
            : "left"
          : K > 0
          ? "bottom"
          : "top";
      },
      se = (y, te, Y, A) => {
        if (!p) return;
        if ((A.preventDefault(), A.stopPropagation(), b.floatingElement))
          try {
            b.floatingElement.parentNode &&
              b.floatingElement.parentNode.removeChild(b.floatingElement);
          } catch (ye) {
            console.error("清除舊浮動元素失敗:", ye);
          }
        const H = W(),
          O =
            "touches" in A
              ? A.touches[0].clientX
              : ("pointerId" in A, A.clientX),
          Q =
            "touches" in A
              ? A.touches[0].clientY
              : ("pointerId" in A, A.clientY),
          K = Y.getBoundingClientRect(),
          fe = { x: O - K.left, y: Q - K.top },
          ee = Y.cloneNode(!0);
        (ee.style.position = "fixed"),
          (ee.style.left = `${O - fe.x}px`),
          (ee.style.top = `${Q - fe.y}px`),
          (ee.style.width = `${K.width}px`),
          (ee.style.height = `${K.height}px`),
          (ee.style.zIndex = "9999"),
          (ee.style.opacity = "0.8"),
          (ee.style.boxShadow = "0 10px 25px rgba(0,0,0,0.3)"),
          (ee.style.pointerEvents = "none"),
          document.body.appendChild(ee),
          console.log("開始拖曳 stockItem:", y),
          console.log("來源 shelf:", te),
          D({
            isDragging: !0,
            draggedContainer: null,
            draggedElement: Y,
            floatingElement: ee,
            originalParent: null,
            originalPosition: "",
            originalIndex: -1,
            mouseOffset: fe,
            isMobileDrag: H,
            originalData: null,
            draggedStockItem: y,
            draggedStockShelf: te,
          });
      },
      oe = (y, te, Y) => {
        if (!p || !F(y.type)) return;
        if (y.type === "sub_container" && !m) {
          h("需要開啟後台模式才能移動子容器", "error");
          return;
        }
        if (
          ((G.current = {}),
          Y.preventDefault(),
          Y.stopPropagation(),
          b.floatingElement)
        )
          try {
            b.floatingElement.parentNode &&
              b.floatingElement.parentNode.removeChild(b.floatingElement);
          } catch (De) {
            console.error("清除舊浮動元素失敗:", De);
          }
        const A = W(),
          H =
            "touches" in Y
              ? Y.touches[0].clientX
              : ("pointerId" in Y, Y.clientX),
          O =
            "touches" in Y
              ? Y.touches[0].clientY
              : ("pointerId" in Y, Y.clientY),
          Q = te.getBoundingClientRect(),
          K = { x: H - Q.left, y: O - Q.top },
          fe = me(y.GUID);
        if (!fe) return;
        console.log("拖曳目標", y), console.log("拖曳目標", fe);
        const ee = te.cloneNode(!0);
        (ee.style.position = "fixed"),
          (ee.style.left = `${H - K.x}px`),
          (ee.style.top = `${O - K.y}px`),
          (ee.style.width = `${Q.width}px`),
          (ee.style.height = `${Q.height}px`),
          (ee.style.zIndex = "9999"),
          (ee.style.opacity = "0.8"),
          (ee.style.boxShadow = "0 10px 25px rgba(0,0,0,0.3)"),
          (ee.style.pointerEvents = "none"),
          document.body.appendChild(ee);
        const ye = fe.parent.contents.findIndex((De) => De.GUID === y.GUID),
          pe = JSON.parse(JSON.stringify(fe.parent.contents));
        fe.parent.contents.splice(ye, 1), console.log(ye);
        const Ne = fe.parent,
          Re = Te(fe.parent, y);
        (fe.parent.contents = Re),
          console.log(fe.parent),
          D({
            isDragging: !0,
            draggedContainer: y,
            draggedElement: te,
            floatingElement: ee,
            originalParent: Ne,
            originalPosition: y.gird_position,
            originalIndex: ye,
            mouseOffset: K,
            isMobileDrag: A,
            originalData: pe,
          });
      },
      U = (y) => {
        if (!b.isDragging || !b.floatingElement) return;
        const te = "touches" in y ? y.touches[0].clientX : y.clientX,
          Y = "touches" in y ? y.touches[0].clientY : y.clientY;
        if (
          ((b.floatingElement.style.left = `${te - b.mouseOffset.x}px`),
          (b.floatingElement.style.top = `${Y - b.mouseOffset.y}px`),
          b.draggedStockItem)
        ) {
          const O = document.elementFromPoint(te, Y),
            Q = O == null ? void 0 : O.closest("[data-stock-guid]");
          if (Q) {
            const fe = Q.getAttribute("data-stock-guid"),
              ee = (pe) => {
                for (const Ne of pe) {
                  if (Ne.type === "store_shelves" && Ne.medMapStock) {
                    const Re = Ne.medMapStock.find((De) => De.GUID === fe);
                    if (Re) return { stockItem: Re, shelf: Ne };
                  }
                  if (Ne.contents) {
                    const Re = ee(Ne.contents);
                    if (Re) return Re;
                  }
                }
                return null;
              },
              ye = ee(o);
            if (ye && ye.stockItem.GUID !== b.draggedStockItem.GUID) {
              const pe = Q.getBoundingClientRect(),
                Ne = pe.left + pe.width / 2,
                Re = pe.top + pe.height / 2,
                De = Math.abs(te - Ne),
                Ae = Math.abs(Y - Re);
              let _e;
              De > Ae
                ? (_e = te < Ne ? "left" : "right")
                : (_e = Y < Re ? "top" : "bottom"),
                ne({
                  container: ye.shelf,
                  direction: null,
                  element: Q,
                  stockItem: ye.stockItem,
                  stockItemDirection: _e,
                });
              return;
            }
          }
          const K = O == null ? void 0 : O.closest("[data-container-guid]");
          if (K) {
            const fe = K.getAttribute("data-container-guid"),
              ee = me(fe);
            if (ee && ee.container.type === "store_shelves") {
              ne({ container: ee.container, direction: null, element: K });
              return;
            }
          }
          ne(null);
          return;
        }
        const A = document.elementFromPoint(te, Y),
          H = A == null ? void 0 : A.closest("[data-container-guid]");
        if (H) {
          const O = H.getAttribute("data-container-guid"),
            Q = me(O);
          if (Q) {
            const K = ge(b.draggedContainer.type),
              fe = b.draggedContainer.type,
              ee = Q.container.type;
            if (K.includes(ee)) {
              const ye = C(H, te, Y);
              if (fe === "med_box" && !["left", "right"].includes(ye)) {
                ne(null);
                return;
              }
              ne({ container: Q.container, direction: ye, element: H });
              return;
            }
            if (fe === "parent_container" || fe === "sub_container") {
              let ye = H.parentElement;
              for (; ye; ) {
                if (ye.hasAttribute("data-container-guid")) {
                  const pe = ye.getAttribute("data-container-guid"),
                    Ne = me(pe);
                  if (Ne && K.includes(Ne.container.type)) {
                    const Re = C(ye, te, Y);
                    console.log(
                      `🔼 向上找到有效目標: ${Ne.container.type} (${Ne.container.name})`
                    ),
                      ne({
                        container: Ne.container,
                        direction: Re,
                        element: ye,
                      });
                    return;
                  }
                }
                ye = ye.parentElement;
              }
            }
          }
        }
        ne(null);
      },
      Z = async (y) => {
        if (!b.isDragging) return;
        if (b.floatingElement)
          try {
            b.floatingElement.parentNode &&
              b.floatingElement.parentNode.removeChild(b.floatingElement);
          } catch (H) {
            console.error("清除浮動元素失敗:", H);
          }
        if (b.draggedStockItem && b.draggedStockShelf) {
          if (
            (console.log("StockItem 拖曳結束"),
            console.log("Drop Target:", I),
            I)
          ) {
            const H = [];
            if (I.stockItem && I.stockItemDirection) {
              console.log(
                `拖曳到 stockItem ${I.stockItem.GUID} 的 ${I.stockItemDirection} 邊`
              );
              const O = I.container,
                Q = b.draggedStockShelf,
                K = b.draggedStockItem,
                fe = (I.stockItem.location || "0,0").split(","),
                ee = Number(fe[0] || "0"),
                ye = (K.location || "0,0").split(","),
                pe = Number(ye[0] || "0"),
                Ne = Number(ye[1] || "0");
              if (O.GUID === Q.GUID) {
                console.log("同一層架內移動");
                const De = Number(fe[1] || "0");
                if (
                  I.stockItemDirection === "top" ||
                  I.stockItemDirection === "bottom"
                ) {
                  console.log("垂直移動（上下）");
                  let Ae;
                  if (
                    (I.stockItemDirection === "top" ? (Ae = De) : (Ae = De + 1),
                    pe === ee)
                  ) {
                    console.log("同一列內的深度移動"),
                      Q.medMapStock.forEach(($e) => {
                        const Oe = ($e.location || "0,0").split(","),
                          Me = Number(Oe[0] || "0"),
                          Ue = Number(Oe[1] || "0");
                        if (Me === pe && $e.GUID !== K.GUID) {
                          if (Ue > Ne) {
                            const mt = Ue - 1;
                            mt >= Ae
                              ? ($e.location = `${Me},${mt + 1}`)
                              : ($e.location = `${Me},${mt}`),
                              H.push({ ...$e });
                          } else if (Ue < Ne) {
                            const mt = Ae > Ne ? Ae - 1 : Ae;
                            Ue >= mt &&
                              (($e.location = `${Me},${Ue + 1}`),
                              H.push({ ...$e }));
                          }
                        }
                      });
                    const _e = Ae > Ne ? Ae - 1 : Ae;
                    (K.location = `${ee},${_e}`), H.push({ ...K });
                  } else
                    console.log("跨列移動到目標列"),
                      Q.medMapStock.forEach((_e) => {
                        const $e = (_e.location || "0,0").split(","),
                          Oe = Number($e[0] || "0"),
                          Me = Number($e[1] || "0");
                        Oe === pe &&
                          _e.GUID !== K.GUID &&
                          Me > Ne &&
                          ((_e.location = `${Oe},${Me - 1}`),
                          H.push({ ..._e }));
                      }),
                      Q.medMapStock.forEach((_e) => {
                        const $e = (_e.location || "0,0").split(","),
                          Oe = Number($e[0] || "0"),
                          Me = Number($e[1] || "0");
                        Oe === ee &&
                          _e.GUID !== K.GUID &&
                          Me >= Ae &&
                          ((_e.location = `${Oe},${Me + 1}`),
                          H.push({ ..._e }));
                      }),
                      (K.location = `${ee},${Ae}`),
                      H.push({ ...K });
                } else {
                  console.log("水平移動（左右）");
                  const Ae = Q.medMapStock.findIndex(
                    (Oe) => Oe.GUID === K.GUID
                  );
                  Ae !== -1 && Q.medMapStock.splice(Ae, 1),
                    Q.medMapStock.forEach((Oe) => {
                      const Me = (Oe.location || "0,0").split(","),
                        Ue = Number(Me[0] || "0"),
                        mt = Number(Me[1] || "0");
                      Ue > pe &&
                        ((Oe.location = `${Ue - 1},${mt}`), H.push({ ...Oe }));
                    });
                  let _e;
                  const $e = ee > pe ? ee - 1 : ee;
                  I.stockItemDirection === "left" ? (_e = $e) : (_e = $e + 1),
                    Q.medMapStock.forEach((Oe) => {
                      const Me = (Oe.location || "0,0").split(","),
                        Ue = Number(Me[0] || "0"),
                        mt = Number(Me[1] || "0");
                      Ue >= _e &&
                        ((Oe.location = `${Ue + 1},${mt}`), H.push({ ...Oe }));
                    }),
                    (K.location = `${_e},${Ne}`),
                    Q.medMapStock.push(K),
                    Q.medMapStock.sort((Oe, Me) => {
                      const Ue = (Oe.location || "0,0").split(","),
                        mt = (Me.location || "0,0").split(",");
                      return Number(Ue[0] || "0") - Number(mt[0] || "0");
                    }),
                    H.push({ ...K });
                }
              } else {
                console.log("不同層架間移動");
                const De = Number(fe[1] || "0"),
                  Ae = Q.medMapStock.findIndex((_e) => _e.GUID === K.GUID);
                if (
                  (Ae !== -1 && Q.medMapStock.splice(Ae, 1),
                  I.stockItemDirection === "top" ||
                    I.stockItemDirection === "bottom")
                ) {
                  console.log("跨層架垂直移動到目標列"),
                    Q.medMapStock.forEach(($e) => {
                      const Oe = ($e.location || "0,0").split(","),
                        Me = Number(Oe[0] || "0"),
                        Ue = Number(Oe[1] || "0");
                      Me === pe &&
                        Ue > Ne &&
                        (($e.location = `${Me},${Ue - 1}`), H.push({ ...$e }));
                    });
                  let _e;
                  I.stockItemDirection === "top" ? (_e = De) : (_e = De + 1),
                    O.medMapStock.forEach(($e) => {
                      const Oe = ($e.location || "0,0").split(","),
                        Me = Number(Oe[0] || "0"),
                        Ue = Number(Oe[1] || "0");
                      Me === ee &&
                        Ue >= _e &&
                        (($e.location = `${Me},${Ue + 1}`), H.push({ ...$e }));
                    }),
                    (K.location = `${ee},${_e}`),
                    (K.shelf_guid = O.GUID),
                    O.medMapStock.push(K),
                    O.medMapStock.sort(($e, Oe) => {
                      const Me = ($e.location || "0,0").split(","),
                        Ue = (Oe.location || "0,0").split(",");
                      return Number(Me[0] || "0") - Number(Ue[0] || "0");
                    }),
                    H.push({ ...K });
                } else {
                  console.log("跨層架水平移動"),
                    Q.medMapStock.forEach(($e) => {
                      const Oe = ($e.location || "0,0").split(","),
                        Me = Number(Oe[0] || "0"),
                        Ue = Number(Oe[1] || "0");
                      Me > pe &&
                        (($e.location = `${Me - 1},${Ue}`), H.push({ ...$e }));
                    });
                  let _e;
                  I.stockItemDirection === "left" ? (_e = ee) : (_e = ee + 1),
                    O.medMapStock.forEach(($e) => {
                      const Oe = ($e.location || "0,0").split(","),
                        Me = Number(Oe[0] || "0"),
                        Ue = Number(Oe[1] || "0");
                      Me >= _e &&
                        (($e.location = `${Me + 1},${Ue}`), H.push({ ...$e }));
                    }),
                    (K.location = `${_e},${Ne}`),
                    (K.shelf_guid = O.GUID),
                    O.medMapStock.push(K),
                    O.medMapStock.sort(($e, Oe) => {
                      const Me = ($e.location || "0,0").split(","),
                        Ue = (Oe.location || "0,0").split(",");
                      return Number(Me[0] || "0") - Number(Ue[0] || "0");
                    }),
                    H.push({ ...K });
                }
              }
            } else if (I.container.type === "store_shelves") {
              console.log("拖曳到 store_shelves 容器");
              const O = I.container,
                Q = b.draggedStockShelf,
                K = b.draggedStockItem,
                fe = (K.location || "0,0").split(","),
                ee = Number(fe[0] || "0"),
                ye = Q.medMapStock.findIndex((pe) => pe.GUID === K.GUID);
              ye !== -1 &&
                (Q.medMapStock.splice(ye, 1),
                Q.medMapStock.forEach((pe) => {
                  const Ne = (pe.location || "0,0").split(","),
                    Re = Number(Ne[0] || "0"),
                    De = Number(Ne[1] || "0");
                  Re > ee &&
                    ((pe.location = `${Re - 1},${De}`), H.push({ ...pe }));
                })),
                (K.location = "0,0"),
                (K.shelf_guid = O.GUID),
                O.medMapStock || (O.medMapStock = []),
                O.medMapStock.forEach((pe) => {
                  const Ne = (pe.location || "0,0").split(","),
                    Re = Number(Ne[0] || "0"),
                    De = Number(Ne[1] || "0");
                  (pe.location = `${Re + 1},${De}`), H.push({ ...pe });
                }),
                O.medMapStock.push(K),
                O.medMapStock.sort((pe, Ne) => {
                  const Re = (pe.location || "0,0").split(","),
                    De = (Ne.location || "0,0").split(",");
                  return Number(Re[0] || "0") - Number(De[0] || "0");
                }),
                H.push({ ...K });
            }
            if (H.length > 0) {
              console.log("準備更新的 stockItems:", H);
              try {
                const O = await ke.updateStock(H);
                if (O.Code === 200) {
                  h("藥品位置更新成功", "success");
                  try {
                    const Q = await ke.getMedMapByDepartment(s);
                    if (Q.Code === 200 && Q.Data) {
                      const K = ct.convertMedMapApiToFakeData(Q.Data);
                      ct.validateConvertedData(K) && l(K);
                    }
                  } catch (Q) {
                    console.error("刷新數據失敗:", Q);
                  }
                } else h(O.Result || "更新失敗", "error");
              } catch (O) {
                console.error("更新 stockItem 失敗:", O),
                  h("更新失敗，請稍後再試", "error");
              }
            }
          }
          D({
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
            ne(null);
          return;
        }
        let te = null,
          Y = null,
          A = null;
        if (
          (console.log("Drop Target:", I),
          console.log("Is Mobile Drag:", b.isMobileDrag),
          b.isMobileDrag)
        )
          if (I) {
            (te = I.direction), (A = I.container);
            const H = me(b.draggedContainer.GUID);
            let O = null;
            if (H) {
              O = H.parent.GUID;
              const Ne = H.parent.contents.findIndex(
                (De) => De.GUID === b.draggedContainer.GUID
              );
              H.parent.contents.splice(Ne, 1);
              const Re = Te(H.parent, b.draggedContainer);
              H.parent.contents = Re;
            }
            const Q = me(I.container.Master_GUID || I.container.GUID);
            let K = I.container;
            if (O && Q && Q.container.GUID === O) {
              const Ne = Q.container.contents.find(
                (Re) => Re.GUID === I.container.GUID
              );
              Ne &&
                ((K = Ne),
                console.log(
                  "同一父容器內移動，更新後的目標容器位置:",
                  Ne.gird_position
                ));
            }
            const fe = he(K.gird_position || "0,0");
            let ee = fe.row,
              ye = fe.col;
            switch (I.direction) {
              case "top":
                ee = Math.max(0, fe.row);
                break;
              case "bottom":
                ee = fe.row + 1;
                break;
              case "left":
                ye = Math.max(0, fe.col);
                break;
              case "right":
                ye = fe.col + 1;
                break;
            }
            let pe = (Q == null ? void 0 : Q.container) || I.container;
            if (
              (b.draggedContainer.class != I.class && (pe = I),
              b.draggedContainer.type === "med_box" &&
                I.container.type !== "med_box")
            )
              if (
                (console.log("藥盒移動目標到層架上"),
                (pe = I.container),
                pe.contents.length > 0)
              ) {
                let Ne = 0,
                  Re = 0;
                pe.contents.forEach((De) => {
                  const Ae = he(De.gird_position || "0,0").row,
                    _e = he(De.gird_position || "0,0").col;
                  Ne > Ae && (Ne = Ae), Re > _e && (Re = _e);
                });
                for (let De = 0; De <= Re; De++)
                  for (let Ae = 0; Ae <= Ne; Ae++) {
                    const _e = `${De},${Ae}`;
                    pe.contents.filter((Oe) => Oe.grid_position === _e)
                      .length === 0 && ((ee = De), (ye = Ae));
                  }
              } else (ee = 0), (ye = 0);
            (Y = pe), k(pe, b.draggedContainer, ee, ye, I.direction);
          } else
            console.log("無效拖放，復原所有容器位置"),
              b.originalData &&
                b.originalParent &&
                (b.originalParent.contents = JSON.parse(
                  JSON.stringify(b.originalData)
                )),
              (te = null),
              (A = null),
              (Y = b.originalParent);
        else if (I) {
          (te = I.direction), (A = I.container);
          const H = me(b.draggedContainer.GUID);
          let O = null;
          if (
            (console.log("=== 開始處理容器拖曳 ==="),
            console.log("拖曳容器 GUID:", b.draggedContainer.GUID),
            console.log("拖曳容器原始位置:", b.draggedContainer.gird_position),
            H)
          ) {
            (O = H.parent.GUID),
              console.log("原始父容器 GUID:", O),
              console.log(
                "移除前父容器的 contents 數量:",
                H.parent.contents.length
              );
            const Ne = H.parent.contents.findIndex(
              (De) => De.GUID === b.draggedContainer.GUID
            );
            H.parent.contents.splice(Ne, 1),
              console.log(
                "移除後父容器的 contents 數量:",
                H.parent.contents.length
              );
            const Re = Te(H.parent, b.draggedContainer);
            (H.parent.contents = Re),
              console.log("重新計算後的容器列表:"),
              H.parent.contents.forEach((De) => {
                console.log(`  - ${De.GUID}: ${De.gird_position}`);
              });
          }
          const Q = me(I.container.Master_GUID || I.container.GUID);
          let K = I.container;
          if (
            (console.log("目標容器原始位置:", I.container.gird_position),
            O && Q && Q.container.GUID === O)
          ) {
            console.log("✓ 在同一個父容器內移動");
            const Ne = Q.container.contents.find(
              (Re) => Re.GUID === I.container.GUID
            );
            Ne &&
              ((K = Ne),
              console.log(
                "同一父容器內移動，更新後的目標容器位置:",
                Ne.gird_position
              ));
          } else console.log("✗ 跨父容器移動或父容器不同");
          const fe = he(K.gird_position || "0,0");
          let ee = fe.row,
            ye = fe.col;
          switch (I.direction) {
            case "top":
              ee = Math.max(0, fe.row);
              break;
            case "bottom":
              ee = fe.row + 1;
              break;
            case "left":
              ye = Math.max(0, fe.col);
              break;
            case "right":
              ye = fe.col + 1;
              break;
          }
          console.log("------目標容器", I),
            console.log("------拖曳容器", b.draggedContainer);
          let pe = (Q == null ? void 0 : Q.container) || I.container;
          if (
            (console.log(b.draggedContainer.class),
            console.log(I.container.class),
            console.log(b.draggedContainer.class != I.container.class),
            b.draggedContainer.class != I.container.class &&
              ((pe = I.container),
              console.log("------這邊顯示放到上層容器現象"),
              console.log("------目標容器", I),
              console.log("------拖曳容器", b.draggedContainer),
              console.log("------目標父容器", pe)),
            b.draggedContainer.type === "med_box" &&
              I.container.type !== "med_box")
          )
            if (
              (console.log("藥盒移動目標到層架上"),
              (pe = I.container),
              pe.contents.length > 0)
            ) {
              let Ne = 0,
                Re = 0;
              pe.contents.forEach((De) => {
                const Ae = he(De.gird_position || "0,0").row,
                  _e = he(De.gird_position || "0,0").col;
                Ne > Ae && (Ne = Ae), Re > _e && (Re = _e);
              });
              for (let De = 0; De <= Re; De++)
                for (let Ae = 0; Ae <= Ne; Ae++) {
                  const _e = `${De},${Ae}`;
                  pe.contents.filter((Oe) => Oe.grid_position === _e).length ===
                    0 && ((ee = De), (ye = Ae));
                }
            } else (ee = 0), (ye = 0);
          (Y = pe), k(pe, b.draggedContainer, ee, ye, I.direction);
        } else
          console.log("無效拖放，復原所有容器位置"),
            b.originalData &&
              b.originalParent &&
              (b.originalParent.contents = JSON.parse(
                JSON.stringify(b.originalData)
              )),
            (te = null),
            (A = null),
            (Y = b.originalParent);
        D({
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
          ne(null),
          console.log("Drop Direction:", te),
          console.log("Parent Object:", Y),
          console.log("Target Object:", A),
          console.log("API更新資料：", G),
          await Ch(G);
      };
    f.useEffect(() => {
      if (b.isDragging)
        if (W()) {
          const te = (H) => {
              H.preventDefault(), U(H);
            },
            Y = (H) => Z(),
            A = (H) => Z();
          return (
            document.addEventListener("pointermove", te, { passive: !1 }),
            document.addEventListener("pointerup", Y),
            document.addEventListener("pointercancel", A),
            () => {
              document.removeEventListener("pointermove", te),
                document.removeEventListener("pointerup", Y),
                document.removeEventListener("pointercancel", A);
            }
          );
        } else {
          const te = (O) => U(O),
            Y = (O) => Z(),
            A = (O) => {
              O.preventDefault(), U(O);
            },
            H = (O) => Z();
          return (
            document.addEventListener("mousemove", te),
            document.addEventListener("mouseup", Y),
            document.addEventListener("touchmove", A, { passive: !1 }),
            document.addEventListener("touchend", H),
            () => {
              document.removeEventListener("mousemove", te),
                document.removeEventListener("mouseup", Y),
                document.removeEventListener("touchmove", A),
                document.removeEventListener("touchend", H);
            }
          );
        }
    }, [b.isDragging, I]),
      f.useEffect(
        () => () => {
          if (b.floatingElement)
            try {
              b.floatingElement.parentNode &&
                b.floatingElement.parentNode.removeChild(b.floatingElement);
            } catch (y) {
              console.error("組件卸載時清除浮動元素失敗:", y);
            }
        },
        [b.floatingElement]
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
    const ce = f.useCallback(
        (y) => {
          var Y;
          if (p) return;
          if (y.ctrlKey || y.metaKey) {
            y.preventDefault(), y.stopPropagation();
            const A =
              (Y = n.current) == null ? void 0 : Y.getBoundingClientRect();
            if (!A) return;
            const H = y.clientX - A.left,
              O = y.clientY - A.top,
              Q = y.deltaY > 0 ? 0.9 : 1.1,
              K = Math.max(0.1, Math.min(5, M.scale * Q)),
              fe = K / M.scale,
              ee = H - (H - M.x) * fe,
              ye = O - (O - M.y) * fe;
            R({ x: ee, y: ye, scale: K });
          }
        },
        [M, p]
      ),
      $ = f.useCallback(
        (y) => {
          p ||
            !T ||
            (u(!0),
            _({ x: y.clientX, y: y.clientY }),
            w({ x: y.clientX, y: y.clientY }),
            v(!1),
            y.preventDefault());
        },
        [p, T]
      ),
      B = f.useCallback(
        (y) => {
          if (!d || p) return;
          const te = y.clientX - P.x,
            Y = y.clientY - P.y;
          if (N) {
            const A = Math.abs(y.clientX - N.x),
              H = Math.abs(y.clientY - N.y);
            (A > 5 || H > 5) && v(!0);
          }
          R((A) => ({ ...A, x: A.x + te, y: A.y + Y })),
            _({ x: y.clientX, y: y.clientY });
        },
        [d, P, p, N]
      ),
      q = f.useCallback(() => {
        u(!1), w(null);
      }, []),
      [re, ie] = f.useState(null),
      [be, ae] = f.useState({ x: 0, y: 0 }),
      ve = (y) => {
        if (y.length < 2) return null;
        const te = y[0],
          Y = y[1];
        return Math.sqrt(
          Math.pow(Y.clientX - te.clientX, 2) +
            Math.pow(Y.clientY - te.clientY, 2)
        );
      },
      Ce = (y) => {
        if (y.length === 1) return { x: y[0].clientX, y: y[0].clientY };
        const te = y[0],
          Y = y[1];
        return {
          x: (te.clientX + Y.clientX) / 2,
          y: (te.clientY + Y.clientY) / 2,
        };
      },
      Ee = f.useCallback(
        (y) => {
          if (!p) {
            if (y.touches.length === 2) {
              const te = ve(y.touches),
                Y = Ce(y.touches);
              ie(te), ae(Y);
            } else if (y.touches.length === 1) {
              const te = y.touches[0];
              _({ x: te.clientX, y: te.clientY }), u(!0);
            }
          }
        },
        [p]
      ),
      Ze = f.useCallback(
        (y) => {
          var te;
          if (!p) {
            if ((y.preventDefault(), y.touches.length === 2 && re !== null)) {
              const Y = ve(y.touches),
                A = Ce(y.touches);
              if (Y && re) {
                const H =
                  (te = n.current) == null
                    ? void 0
                    : te.getBoundingClientRect();
                if (!H) return;
                const O = Y / re,
                  Q = Math.max(0.1, Math.min(5, M.scale * O)),
                  K = A.x - H.left,
                  fe = A.y - H.top,
                  ee = Q / M.scale,
                  ye = K - (K - M.x) * ee,
                  pe = fe - (fe - M.y) * ee;
                R({ x: ye, y: pe, scale: Q }), ie(Y), ae(A);
              }
            } else if (y.touches.length === 1 && d) {
              const Y = y.touches[0],
                A = Y.clientX - P.x,
                H = Y.clientY - P.y;
              R((O) => ({ ...O, x: O.x + A, y: O.y + H })),
                _({ x: Y.clientX, y: Y.clientY });
            }
          }
        },
        [M, re, d, P, p]
      ),
      Pe = f.useCallback(() => {
        ie(null), u(!1);
      }, []);
    f.useEffect(() => {
      const y = n.current;
      if (y)
        return (
          y.addEventListener("wheel", ce, { passive: !1 }),
          () => y.removeEventListener("wheel", ce)
        );
    }, [ce]);
    const rt = () => (!o || o.length === 0 ? [] : o),
      Ve = (y) => {
        if (!y || y.length === 0)
          return { sortedContents: [], maxRow: 0, maxCol: 0 };
        const te = y.map((O) => ({
            ...O,
            gridPos: he(O.gird_position || "0,0"),
          })),
          Y = Math.max(...te.map((O) => O.gridPos.row), 0),
          A = Math.max(...te.map((O) => O.gridPos.col), 0);
        return {
          sortedContents: te.sort((O, Q) =>
            O.gridPos.row !== Q.gridPos.row
              ? O.gridPos.row - Q.gridPos.row
              : O.gridPos.col - Q.gridPos.col
          ),
          maxRow: Y,
          maxCol: A,
        };
      },
      Pt = rt(),
      Bt = Math.max(...Pt.map((y) => he(y.gird_position || "0,0").row), 0),
      Vn = Math.max(...Pt.map((y) => he(y.gird_position || "0,0").col), 0),
      Yt = (y) => {
        const te = (A) => {
            if (
              A.width &&
              Array.isArray(A.width) &&
              typeof A.width_index == "number" &&
              A.width_index >= 0 &&
              A.width_index < A.width.length
            ) {
              const O = parseFloat(A.width[A.width_index]);
              if (!isNaN(O)) {
                const Q = O * 20;
                return Math.max(200, Q);
              }
            }
            return 200;
          },
          Y = (A) => {
            switch (A) {
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
                        p && F(y.type) && !W()
                          ? (A) =>
                              oe(
                                y,
                                A.currentTarget.closest(
                                  "[data-container-guid]"
                                ),
                                A
                              )
                          : void 0,
                      onTouchStart:
                        p && F(y.type) && !W()
                          ? (A) =>
                              oe(
                                y,
                                A.currentTarget.closest(
                                  "[data-container-guid]"
                                ),
                                A
                              )
                          : void 0,
                      onPointerDown:
                        p && F(y.type) && W()
                          ? (A) =>
                              oe(
                                y,
                                A.currentTarget.closest(
                                  "[data-container-guid]"
                                ),
                                A
                              )
                          : void 0,
                      className: p && F(y.type) ? "cursor-move" : "",
                      children: r.jsx(Zr, { content: y, isAdminMode: m }),
                    }),
                    r.jsx("div", { className: "flex-1 p-1", children: Hn(y) }),
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
                      p && F(y.type) && !W()
                        ? (A) =>
                            oe(
                              y,
                              A.currentTarget.closest("[data-container-guid]"),
                              A
                            )
                        : void 0,
                    onTouchStart:
                      p && F(y.type) && !W()
                        ? (A) =>
                            oe(
                              y,
                              A.currentTarget.closest("[data-container-guid]"),
                              A
                            )
                        : void 0,
                    onPointerDown:
                      p && F(y.type) && W()
                        ? (A) =>
                            oe(
                              y,
                              A.currentTarget.closest("[data-container-guid]"),
                              A
                            )
                        : void 0,
                    className: p && F(y.type) ? "cursor-move" : "",
                    children: r.jsx(Zr, { content: y, isAdminMode: m }),
                  }),
                  r.jsx("div", { className: "flex-1  p-1", children: Hn(y) }),
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
                      p && F(y.type) && !W()
                        ? (A) =>
                            oe(
                              y,
                              A.currentTarget.closest("[data-container-guid]"),
                              A
                            )
                        : void 0,
                    onTouchStart:
                      p && F(y.type) && !W()
                        ? (A) =>
                            oe(
                              y,
                              A.currentTarget.closest("[data-container-guid]"),
                              A
                            )
                        : void 0,
                    onPointerDown:
                      p && F(y.type) && W()
                        ? (A) =>
                            oe(
                              y,
                              A.currentTarget.closest("[data-container-guid]"),
                              A
                            )
                        : void 0,
                    className: p && F(y.type) ? "cursor-move" : "",
                    children: r.jsx(Zr, { content: y, isAdminMode: m }),
                  }),
                  r.jsx("div", {
                    className: "flex-1 p-1 flex items-center",
                    children: Hn(y),
                  }),
                ],
              },
              y.GUID
            );
          case "dispensing_shelves":
          case "store_shelves":
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
                      p && F(y.type) && !W()
                        ? (A) =>
                            oe(
                              y,
                              A.currentTarget.closest("[data-container-guid]"),
                              A
                            )
                        : void 0,
                    onTouchStart:
                      p && F(y.type) && !W()
                        ? (A) =>
                            oe(
                              y,
                              A.currentTarget.closest("[data-container-guid]"),
                              A
                            )
                        : void 0,
                    onPointerDown:
                      p && F(y.type) && W()
                        ? (A) =>
                            oe(
                              y,
                              A.currentTarget.closest("[data-container-guid]"),
                              A
                            )
                        : void 0,
                    className: p && F(y.type) ? "cursor-move" : "",
                    children: r.jsx(Zr, { content: y, isAdminMode: m }),
                  }),
                  r.jsx("div", {
                    className: "flex-1 p-1 h-full overflow-hidden",
                    children: Hn(y),
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
                      p && F(y.type) && !W()
                        ? (A) =>
                            oe(
                              y,
                              A.currentTarget.closest("[data-container-guid]"),
                              A
                            )
                        : void 0,
                    onTouchStart:
                      p && F(y.type) && !W()
                        ? (A) =>
                            oe(
                              y,
                              A.currentTarget.closest("[data-container-guid]"),
                              A
                            )
                        : void 0,
                    onPointerDown:
                      p && F(y.type) && W()
                        ? (A) =>
                            oe(
                              y,
                              A.currentTarget.closest("[data-container-guid]"),
                              A
                            )
                        : void 0,
                    className: p && F(y.type) ? "cursor-move" : "",
                    children: r.jsx(Zr, { content: y, isAdminMode: m }),
                  }),
                  r.jsx("div", { className: "flex-1 p-1", children: Hn(y) }),
                ],
              },
              y.GUID
            );
        }
      },
      Hn = (y) => {
        const te = (Y, A, H) => {
          const O = Array(A + 1)
              .fill(null)
              .map(() => Array(H + 1).fill(!1)),
            Q = {};
          return (
            Y.forEach((K) => {
              const fe = he(K.gird_position || "0,0");
              (Q[`${fe.row},${fe.col}`] = K), (O[fe.row][fe.col] = !0);
            }),
            r.jsx("table", {
              className: "w-full h-full",
              style: { borderCollapse: "none", borderSpacing: "0px" },
              children: r.jsx("tbody", {
                children: Array.from({ length: A + 1 }, (K, fe) =>
                  r.jsx(
                    "tr",
                    {
                      className: "h-full",
                      style: { height: `${100 / (A + 1)}%`, minHeight: "80px" },
                      children: Array.from({ length: H + 1 }, (ee, ye) => {
                        const pe = `${fe},${ye}`,
                          Ne = Q[pe];
                        return Ne
                          ? r.jsxs(
                              "td",
                              {
                                className: "align-top bg-transparent",
                                style: {
                                  width: `${100 / (H + 1)}%`,
                                  height: `${100 / (A + 1)}%`,
                                  minHeight: "80px",
                                  border: "none",
                                  position: "relative",
                                },
                                children: [
                                  Yt(Ne),
                                  (I == null ? void 0 : I.container.GUID) ===
                                    Ne.GUID &&
                                    r.jsx("div", {
                                      className:
                                        "absolute inset-0 pointer-events-none",
                                      children: r.jsx("div", {
                                        className: `absolute bg-blue-400 opacity-50 ${
                                          I.direction === "top"
                                            ? "top-0 left-0 right-0 h-1"
                                            : I.direction === "bottom"
                                            ? "bottom-0 left-0 right-0 h-1"
                                            : I.direction === "left"
                                            ? "left-0 top-0 bottom-0 w-1"
                                            : "right-0 top-0 bottom-0 w-1"
                                        }`,
                                      }),
                                    }),
                                ],
                              },
                              ye
                            )
                          : r.jsx(
                              "td",
                              {
                                className: "p-1 align-top bg-transparent",
                                style: {
                                  width: `${100 / (H + 1)}%`,
                                  height: `${100 / (A + 1)}%`,
                                  minHeight: "80px",
                                  border: "none",
                                },
                                children: r.jsx("div", {
                                  className:
                                    "w-full h-full flex items-center justify-center text-gray-400 text-sm",
                                  children: "空位",
                                }),
                              },
                              ye
                            );
                      }),
                    },
                    fe
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
                sortedContents: ee,
                maxRow: ye,
                maxCol: pe,
              } = Ve(y.contents);
              return te(ee, ye, pe);
            } else
              return r.jsx("table", {
                className: "bg-transparent w-full h-full",
                style: { borderCollapse: "separate", borderSpacing: "1px" },
                children: r.jsx("tbody", { children: r.jsx("tr", {}) }),
              });
          case "dispensing_shelves":
            if (y.contents && y.contents.length > 0) {
              const {
                sortedContents: ee,
                maxRow: ye,
                maxCol: pe,
              } = Ve(y.contents);
              return te(ee, ye, pe);
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
              const ee = y.medMapStock,
                ye = {};
              ee.forEach((De) => {
                const Ae = (De.location || "0,0").split(","),
                  _e = Number(Ae[0] || "0"),
                  $e = Number(Ae[1] || "0");
                ye[_e] || (ye[_e] = []),
                  ye[_e].push({ ...De, _position: _e, _depth: $e });
              });
              const pe = Object.keys(ye)
                  .map(Number)
                  .sort((De, Ae) => De - Ae),
                Ne = pe.length;
              Math.max(...pe.map((De) => ye[De].length));
              const Re = y.width ? y.width * 5 : 500;
              return r.jsx("div", {
                className: "flex h-full",
                style: { minWidth: `${Re}px` },
                children: pe.map((De) => {
                  const Ae = ye[De].sort((Me, Ue) => Ue._depth - Me._depth),
                    _e = Ne > 0 ? 100 / Ne : 100,
                    $e = Ae.length,
                    Oe = $e > 0 ? 100 / $e : 100;
                  return r.jsx(
                    "div",
                    {
                      className: "flex flex-shrink-0 flex-col m-1",
                      style: { width: `calc(${_e}% - 8px)`, minWidth: "160px" },
                      children: Ae.map((Me, Ue) => {
                        const mt = Ue === $e - 1;
                        return r.jsx(
                          "div",
                          {
                            className: `relative ${mt ? "" : "mb-1"}`,
                            style: {
                              height: `calc(${Oe}% - ${
                                mt ? "0px" : "0.25rem"
                              })`,
                            },
                            "data-stock-guid": Me.GUID,
                            children: r.jsxs("div", {
                              className: `border-2 bg-yellow-50 border-yellow-400 rounded-lg p-2 h-full flex flex-col justify-center items-center cursor-pointer bg-white hover:bg-yellow-100 hover:border-yellow-500 hover:shadow-md transition-all ${
                                p ? "cursor-move" : ""
                              }`,
                              onMouseDown: (ze) => {
                                p
                                  ? se(
                                      Me,
                                      y,
                                      ze.currentTarget.closest(
                                        "[data-stock-guid]"
                                      ),
                                      ze
                                    )
                                  : !d &&
                                    !T &&
                                    (w({ x: ze.clientX, y: ze.clientY }),
                                    v(!1));
                              },
                              onMouseUp: (ze) => {
                                if (!d && !T && !L && N && !p) {
                                  const dn = Math.abs(ze.clientX - N.x),
                                    Vr = Math.abs(ze.clientY - N.y);
                                  dn <= 5 &&
                                    Vr <= 5 &&
                                    (ze.stopPropagation(), c(y, Me));
                                }
                                p || (w(null), v(!1));
                              },
                              onTouchStart: (ze) => {
                                if (p && W())
                                  se(
                                    Me,
                                    y,
                                    ze.currentTarget.closest(
                                      "[data-stock-guid]"
                                    ),
                                    ze
                                  );
                                else if (!d && !p) {
                                  const dn = ze.touches[0];
                                  w({ x: dn.clientX, y: dn.clientY }), v(!1);
                                }
                              },
                              onTouchEnd: (ze) => {
                                if (!d && !L && N && !p) {
                                  const dn = ze.changedTouches[0],
                                    Vr = Math.abs(dn.clientX - N.x),
                                    rl = Math.abs(dn.clientY - N.y);
                                  Vr <= 5 &&
                                    rl <= 5 &&
                                    (ze.stopPropagation(), c(y, Me));
                                }
                                p || (w(null), v(!1));
                              },
                              onPointerDown: (ze) => {
                                p &&
                                  W() &&
                                  se(
                                    Me,
                                    y,
                                    ze.currentTarget.closest(
                                      "[data-stock-guid]"
                                    ),
                                    ze
                                  );
                              },
                              children: [
                                r.jsx("div", {
                                  className:
                                    "py-1 text-base font-semibold text-gray-800 flex text-center text-ellipsis whitespace-normal items-center flex-1",
                                  children: Me.name || Me.material_no,
                                }),
                                r.jsxs("div", {
                                  className:
                                    "w-full flex justify-between items-end",
                                  children: [
                                    r.jsx("div", {
                                      className: "",
                                      children: r.jsxs("div", {
                                        className: "mt-1",
                                        children: ["[ ", +Me.qty || 0, " ]"],
                                      }),
                                    }),
                                    r.jsx("div", {
                                      className:
                                        "flex justify-end items-end mt-2",
                                      children: r.jsx("button", {
                                        onMouseDown: (ze) => {
                                          ze.stopPropagation();
                                        },
                                        onMouseUp: (ze) => {
                                          ze.stopPropagation();
                                        },
                                        onTouchStart: (ze) => {
                                          ze.stopPropagation();
                                        },
                                        onTouchEnd: (ze) => {
                                          ze.stopPropagation();
                                        },
                                        onClick: (ze) => Fr(Me, y, ze),
                                        className:
                                          "text-red-500 hover:text-red-600 rounded-full p-2 transition-all z-10",
                                        title: "刪除",
                                        children: r.jsx(Sr, {
                                          className: "w-6 h-6",
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          },
                          Me.GUID || Ue
                        );
                      }),
                    },
                    De
                  );
                }),
              });
            } else if (y.contents && y.contents.length > 0) {
              const {
                sortedContents: ee,
                maxRow: ye,
                maxCol: pe,
              } = Ve(y.contents);
              return te(ee, ye, pe);
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
                sortedContents: ee,
                maxRow: ye,
                maxCol: pe,
              } = Ve(y.contents);
              return te(ee, ye, pe);
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
                ...y.Boxes.flat().map((ee) => +ee.Row + +ee.Height - 1)
              ),
              A = Math.max(
                ...y.Boxes.flat().map((ee) => +ee.Column + +ee.Width - 1)
              ),
              H = Y + 1,
              O = A + 1,
              Q = y.Boxes.flat(),
              K = Array(H)
                .fill(null)
                .map(() => Array(O).fill(!1)),
              fe = {};
            return (
              Q.forEach((ee) => {
                ee.Slave || (fe[`${ee.Row},${ee.Column}`] = ee);
              }),
              Q.forEach((ee) => {
                if (!ee.Slave && (ee.Width > 1 || ee.Height > 1))
                  for (let ye = ee.Row; ye < ee.Row + ee.Height; ye++)
                    for (let pe = ee.Column; pe < ee.Column + ee.Width; pe++)
                      (ye !== ee.Row || pe !== ee.Column) && (K[ye][pe] = !0);
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
                  children: y.contents.map((ee) => Yt(ee)),
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
      Gr = (y) => {
        if (
          (he(y.gird_position || "0,0"),
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
          const { sortedContents: A, maxRow: H, maxCol: O } = Ve(Y),
            Q = Array(H + 1)
              .fill(null)
              .map(() => Array(O + 1).fill(!1)),
            K = {};
          return (
            A.forEach((fe) => {
              const ee = he(fe.gird_position || "0,0");
              (K[`${ee.row},${ee.col}`] = fe), (Q[ee.row][ee.col] = !0);
            }),
            r.jsx("table", {
              className: "w-full h-full",
              style: { borderCollapse: "none", borderSpacing: "0px" },
              children: r.jsx("tbody", {
                children: Array.from({ length: H + 1 }, (fe, ee) =>
                  r.jsx(
                    "tr",
                    {
                      className: "h-full",
                      children: Array.from({ length: O + 1 }, (ye, pe) => {
                        const Ne = `${ee},${pe}`,
                          Re = K[Ne];
                        return Re
                          ? r.jsxs(
                              "td",
                              {
                                className: "p-1 align-top bg-transparent",
                                style: {
                                  width: `${100 / (O + 1)}%`,
                                  height: `${100 / (H + 1)}%`,
                                  minHeight: "120px",
                                  border: "none",
                                  position: "relative",
                                },
                                children: [
                                  Yt(Re),
                                  (I == null ? void 0 : I.container.GUID) ===
                                    Re.GUID &&
                                    r.jsx("div", {
                                      className:
                                        "absolute inset-0 pointer-events-none",
                                      children: r.jsx("div", {
                                        className: `absolute bg-blue-400 opacity-50 ${
                                          I.direction === "top"
                                            ? "top-0 left-0 right-0 h-1"
                                            : I.direction === "bottom"
                                            ? "bottom-0 left-0 right-0 h-1"
                                            : I.direction === "left"
                                            ? "left-0 top-0 bottom-0 w-1"
                                            : "right-0 top-0 bottom-0 w-1"
                                        }`,
                                      }),
                                    }),
                                ],
                              },
                              pe
                            )
                          : r.jsx(
                              "td",
                              {
                                className: "p-1 align-top bg-transparent",
                                style: {
                                  width: `${100 / (O + 1)}%`,
                                  height: `${100 / (H + 1)}%`,
                                  minHeight: "120px",
                                  border: "1px dashed #e5e7eb",
                                },
                                children: r.jsx("div", {
                                  className:
                                    "w-full h-full flex items-center justify-center text-gray-400 text-sm",
                                  children: "空位",
                                }),
                              },
                              pe
                            );
                      }),
                    },
                    ee
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
                      children: r.jsx(Dt, {
                        className: "w-6 h-6 text-green-700",
                      }),
                    }),
                  }),
                ],
              }),
              r.jsx("div", {
                className: `flex-1 bg-orange-50 ${
                  (I == null ? void 0 : I.container.GUID) === y.GUID
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
      As = f.useCallback(
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
          const Y = (H) => {
              for (const O of H) {
                if (O.type === "grid_draw" && O.Boxes) {
                  for (const Q of O.Boxes)
                    for (const K of Q)
                      if (K.Code === te) {
                        const fe = document.querySelector(
                          `[data-container-guid="${O.GUID}"]`
                        );
                        if (fe)
                          return (
                            console.log("✅ 找到藥品容器 (grid_draw):", O),
                            { element: fe, bounds: fe.getBoundingClientRect() }
                          );
                      }
                }
                if (
                  O.type === "list_draw" &&
                  O.drugs &&
                  O.drugs.some((K) => K.code === te)
                ) {
                  const K = document.querySelector(
                    `[data-container-guid="${O.GUID}"]`
                  );
                  if (K)
                    return (
                      console.log("✅ 找到藥品容器 (list_draw):", O),
                      { element: K, bounds: K.getBoundingClientRect() }
                    );
                }
                if (
                  (O.type === "store_shelves" ||
                    O.type === "dispensing_shelves") &&
                  O.medMapStock &&
                  O.medMapStock.some(
                    (K) => K.code === te || K.material_no === te
                  )
                ) {
                  const K = document.querySelector(
                    `[data-container-guid="${O.GUID}"]`
                  );
                  if (K)
                    return (
                      console.log("✅ 找到藥品容器 (store_shelves):", O),
                      { element: K, bounds: K.getBoundingClientRect() }
                    );
                }
                if (
                  O.type === "med_box" &&
                  O.med_info &&
                  O.med_info.length > 0 &&
                  O.med_info.some((K) => K.code === te)
                ) {
                  const K = document.querySelector(
                    `[data-container-guid="${O.GUID}"]`
                  );
                  if (K)
                    return (
                      console.log("✅ 找到藥品容器 (med_box):", O),
                      { element: K, bounds: K.getBoundingClientRect() }
                    );
                }
                if (O.contents && O.contents.length > 0) {
                  const Q = Y(O.contents);
                  if (Q) return Q;
                }
              }
              return null;
            },
            A = Y(o);
          if (A) {
            const H = n.current.getBoundingClientRect(),
              O = A.bounds,
              Q = (O.left + O.right) / 2,
              K = (O.top + O.bottom) / 2,
              fe = (Q - H.left - M.x) / M.scale,
              ee = (K - H.top - M.y) / M.scale,
              ye = H.width / 2,
              pe = H.height / 2,
              Ne = ye - fe * M.scale,
              Re = pe - ee * M.scale;
            R((De) => ({ ...De, x: Ne, y: Re })),
              console.log("✅ 定位完成", {
                elementScreenCenter: { x: Q, y: K },
                elementCanvasPos: { x: fe, y: ee },
                screenCenter: { x: ye, y: pe },
                newTransform: { x: Ne, y: Re },
              }),
              h(`已定位到藥品：${y.CHT_NAME || y.NAME || te}`, "success");
          } else
            console.warn("❌ 未找到藥品容器"),
              h("未找到該藥品的儲存位置", "error");
        },
        [o, M, h]
      );
    f.useImperativeHandle(
      t,
      () => (
        console.log("🔧 useImperativeHandle 設置 ref 方法"), { locateDrug: As }
      )
    );
    const Fr = async (y, te, Y) => {
        if (
          (Y.stopPropagation(),
          Y.preventDefault(),
          !!window.confirm(`確定要刪除 ${y.name || y.material_no} 嗎？`))
        )
          try {
            const H = await ke.deleteStockByGUID([y.GUID]);
            if (H.Code === 200) {
              const O = te.medMapStock.findIndex((Q) => Q.GUID === y.GUID);
              O !== -1 &&
                (te.medMapStock.splice(O, 1),
                te.medMapStock.forEach((Q, K) => {
                  Q.location = String(K);
                })),
                h("刪除成功", "success");
            } else h(H.Result || "刪除失敗", "error");
          } catch (H) {
            console.error("刪除 stock 失敗:", H),
              h("刪除失敗，請稍後再試", "error");
          }
      },
      nl = async (y) => {
        if (y.key === "Enter" && X.trim() && !ue) {
          y.preventDefault(), we(!0);
          const te = performance.now();
          try {
            console.log("🔍 [手動輸入] 搜尋條碼:", X);
            const Y = performance.now(),
              A = await ke.searchByBarCode(X.trim()),
              H = performance.now();
            if (
              (console.log(
                `⏱️ [手動輸入] API搜尋藥品資料用時: ${(H - Y).toFixed(2)}ms`
              ),
              console.log("📋 條碼搜尋回應:", A),
              A.Code === 200)
            ) {
              console.log("✅ 找到藥品資料:", A.Data),
                h("找到藥品資料", "success");
              const O = performance.now();
              As(A.Data);
              const Q = performance.now();
              console.log(
                `⏱️ [手動輸入] 定位藥品用時: ${(Q - O).toFixed(2)}ms`
              ),
                J("");
              const K = performance.now();
              console.log(`⏱️ [手動輸入] 總用時: ${(K - te).toFixed(2)}ms`);
            } else
              A.Code === -200 && A.Result === "查無資料"
                ? (console.log("⚠️ 查無資料，開啟建立條碼彈窗"),
                  h("查無資料，請建立條碼", "error"),
                  g(X.trim()),
                  J(""))
                : (console.log("❌ 搜尋失敗:", A.Result),
                  h(A.Result || "搜尋失敗", "error"));
          } catch (Y) {
            console.error("條碼搜尋錯誤:", Y),
              h("搜尋失敗，請稍後再試", "error");
          } finally {
            we(!1);
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
                value: X,
                onChange: (y) => J(y.target.value),
                onKeyDown: nl,
                placeholder: "輸入條碼或掃描...",
                className:
                  "px-4 py-2 w-50 focus:outline-none text-gray-700 disabled:opacity-50",
                disabled: ue,
              }),
              r.jsx("button", {
                onClick: () => x("track_Drug_mode"),
                className: "p-2",
                title: "掃描條碼",
                disabled: ue,
                children: r.jsx(Lr, { className: "w-6 h-6 text-blue-600" }),
              }),
            ],
          }),
        }),
        r.jsx("div", {
          className: "absolute bottom-4 right-4 z-10 flex gap-2",
          children: r.jsx("button", {
            onClick: () => E(!p),
            className: `rounded-lg shadow-lg p-2 transition-colors ${
              p
                ? "bg-red-500 text-white hover:bg-red-600"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`,
            title: p ? "Unlock Canvas" : "Lock Canvas",
            children: p
              ? r.jsx(vi, { className: "w-6 h-6" })
              : r.jsx(Zu, { className: "w-6 h-6" }),
          }),
        }),
        r.jsx("div", {
          ref: n,
          className: `w-full h-full relative ${
            T && !p ? "cursor-grab" : "cursor-default"
          } ${d ? "cursor-grabbing" : ""}`,
          onMouseDown: $,
          onMouseMove: B,
          onMouseUp: q,
          onMouseLeave: q,
          onTouchStart: Ee,
          onTouchMove: Ze,
          onTouchEnd: Pe,
          children: r.jsxs("div", {
            className: "absolute inset-0 origin-top-left",
            style: {
              transform: `translate(${M.x}px, ${M.y}px) scale(${M.scale})`,
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
                    borderSpacing: `${je}px`,
                    minWidth: "fit-content",
                    minHeight: "fit-content",
                  },
                  children: r.jsx("tbody", {
                    children: Array.from({ length: Bt + 1 }, (y, te) =>
                      r.jsx(
                        "tr",
                        {
                          children: Array.from({ length: Vn + 1 }, (Y, A) => {
                            const H = Pt.find((O) => {
                              const Q = he(O.gird_position || "0,0");
                              return Q.row === te && Q.col === A;
                            });
                            return H
                              ? r.jsx(
                                  "td",
                                  {
                                    className: "align-top",
                                    style: {
                                      minWidth: "150px",
                                      minHeight: "120px",
                                      border: "none",
                                    },
                                    children: Gr(H),
                                  },
                                  A
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
                                  A
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
ef.displayName = "DrugCanvas";
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
      var x, g, h, m, j;
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
            name: ((m = i.containerData) == null ? void 0 : m.name) || "",
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
          ke
            .updateMedMapBox(t)
            .then((i) => ({ type: "med_box", response: i, count: t.length }))
            .catch((i) => ({ type: "med_box", error: i, count: t.length }))
        )),
      n.length > 0 &&
        (console.log("🗂️ 更新抽屜資料:", n),
        a.push(
          ke
            .updateMedMapDrawer(n)
            .then((i) => ({ type: "drawer", response: i, count: n.length }))
            .catch((i) => ({ type: "drawer", error: i, count: n.length }))
        )),
      s.length > 0 &&
        (console.log("🏪 更新層架資料:", s),
        a.push(
          ke
            .updateMedMapShelf(s)
            .then((i) => ({ type: "shelf", response: i, count: s.length }))
            .catch((i) => ({ type: "shelf", error: i, count: s.length }))
        )),
      o.length > 0 &&
        (console.log("🏢 更新父容器資料:", o),
        o.forEach((i) => {
          a.push(
            ke
              .updateContainerPosition(i)
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
          ke
            .updateSubSection(l)
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
        var m, j;
        if (h.error)
          (x += h.count),
            g.push(`${h.type}: ${h.error.message || "網路錯誤"}`),
            console.error(`❌ ${h.type} API 失敗:`, h.error);
        else if (((m = h.response) == null ? void 0 : m.Code) === 200)
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
  Ic = {},
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
          if (((c = Dh(c)), c in Ic)) return;
          Ic[c] = !0;
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
            return new Promise((m, j) => {
              h.addEventListener("load", m),
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
  sn = [
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
      } = tt(),
      { t: g } = jt(),
      [h, m] = f.useState(0),
      [j, S] = f.useState({}),
      [M, R] = f.useState(""),
      [d, u] = f.useState(""),
      [p, E] = f.useState("N"),
      [P, _] = f.useState([]),
      [T, V] = f.useState(!1),
      [X, J] = f.useState(!1),
      [ue, we] = f.useState(null),
      [N, w] = f.useState(null),
      [L, v] = f.useState(!1),
      [b, D] = f.useState(!1);
    f.useEffect(() => {
      if (n && e)
        if (c === "add") {
          m(0);
          const k = {};
          sn.forEach((C, se) => {
            k[se] = 0;
          }),
            S(k),
            R(""),
            J(!1),
            I();
        } else {
          const k = sn.findIndex(
            (C) => C.box_type === n.box_type || C.type === n.box_type
          );
          if ((console.log(n), k >= 0)) {
            m(k);
            const se = sn[k].width.findIndex((U) => {
                var Z;
                return (
                  U === ((Z = n.width) == null ? void 0 : Z[n.width_index || 0])
                );
              }),
              oe = {};
            sn.forEach((U, Z) => {
              Z === k ? (oe[Z] = se >= 0 ? se : 0) : (oe[Z] = 0);
            }),
              S(oe);
          } else {
            m(0);
            const C = {};
            sn.forEach((se, oe) => {
              C[oe] = 0;
            }),
              S(C);
          }
          R(n.ip || ""),
            w({
              box_type: n.box_type,
              width: n.width,
              width_index: n.width_index,
              ip: n.ip || "",
              storage: n.storage ? JSON.parse(JSON.stringify(n.storage)) : null,
            });
        }
    }, [n, e, c]);
    const I = () => {
        n && n.parentShelf && we(n.parentShelf);
      },
      ne = (k) => {
        if (!k || !k.contents || k.contents.length === 0) return "0,0";
        let C = -1,
          se = 0;
        return (
          k.contents.forEach((oe) => {
            if (oe.gird_position) {
              const [U, Z] = oe.gird_position.split(",").map(Number);
              Z > C && ((C = Z), (se = U));
            }
          }),
          `${se},${C + 1}`
        );
      },
      G = () => {
        if (!N || c !== "edit") return !1;
        const k = sn[h],
          C = j[h] || 0,
          se = k.box_type || k.type || k.name;
        return (
          N.box_type !== se ||
          N.width_index !== C ||
          N.ip !== M ||
          JSON.stringify(N.storage) !==
            JSON.stringify(n == null ? void 0 : n.storage)
        );
      },
      W = (k) => {
        m(k);
      },
      je = (k, C) => {
        S((se) => ({ ...se, [k]: C }));
      },
      de = () => {
        n && (c === "add" ? xe() : F());
      },
      z = () => {
        t();
      },
      xe = async () => {
        if (!n || !ue) {
          a("缺少必要資料，無法新增藥盒", "error");
          return;
        }
        J(!0);
        try {
          const k = sn[h],
            C = j[h] || 0,
            se = k.width[C],
            oe = ne(ue),
            U = {
              Master_GUID: ue.GUID,
              position: oe,
              width: se.toString(),
              height: "60",
              ip_box: M,
              serverName: ue.serverName || "",
              serverType: ue.serverType || "",
            };
          console.log("🚀 發送新增藥盒 API 請求:", U);
          const Z = await ke.addMedMapBox(U);
          Z.Code === 200
            ? (a("藥盒新增成功", "success"), t(), await ge())
            : a(`藥盒新增失敗：${Z.Result || "未知錯誤"}`, "error");
        } catch (k) {
          console.error("Add med box failed:", k),
            a("藥盒新增失敗：網路錯誤", "error");
        } finally {
          J(!1);
        }
      },
      F = async () => {
        var k;
        if (!n || !G()) {
          a("沒有資料變更", "error");
          return;
        }
        v(!0);
        try {
          const C = sn[h],
            se = j[h] || 0,
            oe = C.width[se],
            U = C.box_type || C.type || C.name,
            Z = N.box_type !== U || N.width_index !== se || N.ip !== M,
            ce =
              JSON.stringify(N.storage) !==
              JSON.stringify(n == null ? void 0 : n.storage),
            $ = [];
          if (Z) {
            const re = {
              GUID: n.GUID,
              Master_GUID: n.Master_GUID,
              position: n.gird_position,
              ip_light: M,
              serverName: n.serverName,
              serverType: n.serverType,
            };
            $.push(ke.updateMedMapBox([re]));
          }
          ce &&
            $.push(
              ke.updateEpd266Storages(n.serverName || "", n.serverType || "", [
                n.storage,
              ])
            );
          const B = await Promise.all($);
          if (B.every((re) => re.Code === 200))
            a("藥盒更新成功", "success"), t(), await ge();
          else {
            const re = B.filter((ie) => ie.Code !== 200);
            a(
              `藥盒更新失敗：${
                ((k = re[0]) == null ? void 0 : k.Result) || "未知錯誤"
              }`,
              "error"
            );
          }
        } catch (C) {
          console.error("Update med box failed:", C),
            a("藥盒更新失敗：網路錯誤", "error");
        } finally {
          v(!1);
        }
      },
      ge = async () => {
        if (!s) {
          console.warn("⚠️ 沒有選中的部門類型，無法重新獲取資料");
          return;
        }
        console.log("🔄 重新獲取藥品地圖資料，部門類型:", s), l(!0);
        try {
          const k = await ke.getMedMapByDepartment(s);
          if (k.Code === 200 && k.Data) {
            console.log("📡 API 回傳成功，開始轉換資料");
            const C = await _h(() => Promise.resolve().then(() => Km), void 0),
              se = C.default.convertMedMapApiToFakeData(k.Data);
            if (!C.default.validateConvertedData(se)) {
              console.error("❌ 轉換後的資料驗證失敗"),
                a("資料更新失敗：資料格式錯誤", "error");
              return;
            }
            o(se), console.log("✅ 藥品地圖資料已更新");
          } else
            console.error("❌ API 回傳錯誤:", k),
              a("資料更新失敗：API 錯誤", "error");
        } catch (k) {
          console.error("💥 重新獲取藥品地圖資料失敗:", k),
            a("資料更新失敗：網路錯誤", "error");
        } finally {
          l(!1);
        }
      },
      he = async () => {
        V(!0);
        try {
          const k = d.toLowerCase().trim();
          let C = x;
          k &&
            (C = C.filter((se) => {
              var oe, U, Z;
              return (
                ((oe = se.CODE) == null
                  ? void 0
                  : oe.toLowerCase().includes(k)) ||
                ((U = se.NAME) == null
                  ? void 0
                  : U.toLowerCase().includes(k)) ||
                ((Z = se.CHT_NAME) == null
                  ? void 0
                  : Z.toLowerCase().includes(k))
              );
            })),
            p !== "N" && (C = C.filter((se) => se.DRUGKIND === p)),
            _(C);
        } catch (k) {
          console.error("Search failed:", k), _([]);
        } finally {
          V(!1);
        }
      },
      me = (k, C) => {
        console.log("📸 掃描成功，藥品資料:", C), D(!1), Te(C);
      },
      Te = async (k) => {
        if (n)
          try {
            console.log("🚀 開始更新藥盒藥品代碼:", k.CODE);
            const C = await ke.updateEpd266Medcode(
              n.serverName || "",
              n.serverType || "",
              k.CODE,
              n.storage || {}
            );
            C.Code === 200
              ? (console.log("✅ 藥品代碼更新成功:", C.Data),
                (n.storage = C.Data),
                (n.med_info = [
                  { name: k.NAME, cht_name: k.CHT_NAME, code: k.CODE },
                ]),
                a("藥品更新成功", "success"),
                i())
              : (console.error("❌ 藥品代碼更新失敗:", C),
                a(`藥品更新失敗：${C.Result || "未知錯誤"}`, "error"));
          } catch (C) {
            console.error("💥 藥品代碼更新發生錯誤:", C),
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
              onClick: z,
            }),
            r.jsxs("div", {
              className:
                "relative flex flex-col bg-white rounded-xl shadow-2xl border border-gray-200",
              style: { width: "90vw", height: "90vh" },
              onClick: (k) => k.stopPropagation(),
              children: [
                r.jsxs("div", {
                  className:
                    "flex items-center justify-between px-4 py-2 border-b border-gray-200",
                  children: [
                    r.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        r.jsx(En, { className: "w-6 h-6 text-gray-600" }),
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
                      onClick: z,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: r.jsx(Xe, { className: "w-6 h-6" }),
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
                                onChange: (k) => R(k.target.value),
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
                                children: sn.map((k, C) =>
                                  r.jsxs(
                                    "label",
                                    {
                                      className: `flex items-center px-4 py-2 border-2 rounded-lg cursor-pointer transition-all ${
                                        h === C
                                          ? "border-blue-500 bg-blue-50"
                                          : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                                      }`,
                                      children: [
                                        r.jsx("input", {
                                          type: "radio",
                                          name: "boxType",
                                          value: C,
                                          checked: h === C,
                                          onChange: () => W(C),
                                          className:
                                            "w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 hidden",
                                        }),
                                        r.jsx("div", {
                                          children: r.jsx("div", {
                                            className:
                                              "text-sm font-medium text-gray-900",
                                            children: k.name,
                                          }),
                                        }),
                                      ],
                                    },
                                    C
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
                              sn.map((k, C) =>
                                r.jsx(
                                  "div",
                                  {
                                    className: `flex gap-4 ${
                                      h === C ? "block" : "hidden"
                                    }`,
                                    children: k.width.map((se, oe) =>
                                      r.jsxs(
                                        "label",
                                        {
                                          className: `flex items-center justify-center px-4 py-2 border-2 rounded-lg cursor-pointer transition-all ${
                                            h === C && (j[C] || 0) === oe
                                              ? "border-green-500 bg-green-50"
                                              : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                                          }`,
                                          children: [
                                            r.jsx("input", {
                                              type: "radio",
                                              name: `width-${C}`,
                                              value: oe,
                                              checked:
                                                h === C && (j[C] || 0) === oe,
                                              onChange: () => je(C, oe),
                                              className:
                                                "w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500 hidden",
                                            }),
                                            r.jsx("div", {
                                              className: "text-center",
                                              children: r.jsxs("div", {
                                                className:
                                                  "text-sm font-semibold text-gray-900",
                                                children: [se, " ", k.unit],
                                              }),
                                            }),
                                          ],
                                        },
                                        `${C}-${oe}`
                                      )
                                    ),
                                  },
                                  C
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
                                          children: n.med_info.map((k, C) =>
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
                                                          k.code ||
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
                                                          k.name ||
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
                                                          k.cht_name ||
                                                          g("status.notSet"),
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              },
                                              C
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
                                    onClick: () => D(!0),
                                    className:
                                      "p-2 hover:bg-gray-100 rounded-full transition-colors",
                                    title: "掃描條碼",
                                    children: r.jsx(Lr, {
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
                                    onChange: (k) => u(k.target.value),
                                    placeholder: g("placeholder.drugSearch"),
                                    className:
                                      "border rounded px-3 py-1 flex-1 min-w-0 focus:border-blue-500 focus:outline-none transition-colors",
                                  }),
                                  r.jsxs("select", {
                                    value: p,
                                    onChange: (k) => E(k.target.value),
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
                                    onClick: he,
                                    disabled: T,
                                    className:
                                      "bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 transition-colors whitespace-nowrap disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2",
                                    children: [
                                      T &&
                                        r.jsx(It, {
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
                                children: T
                                  ? r.jsxs("div", {
                                      className:
                                        "text-gray-500 text-center flex items-center justify-center h-full",
                                      children: [
                                        r.jsx(It, {
                                          className:
                                            "w-5 h-5 animate-spin mr-2",
                                        }),
                                        g("status.searching"),
                                      ],
                                    })
                                  : P.length > 0
                                  ? r.jsx("div", {
                                      className: "space-y-1",
                                      children: P.map((k, C) =>
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
                                                    children: k.NAME,
                                                  }),
                                                  r.jsx("div", {
                                                    className:
                                                      "text-xs text-gray-500 truncate",
                                                    children: k.CHT_NAME,
                                                  }),
                                                  r.jsx("div", {
                                                    className:
                                                      "text-xs text-gray-400 font-mono",
                                                    children: k.CODE,
                                                  }),
                                                ],
                                              }),
                                              r.jsx("button", {
                                                onClick: () => Te(k),
                                                className:
                                                  "ml-2 p-1 text-green-600 hover:text-green-700 hover:bg-green-50 rounded transition-colors flex-shrink-0",
                                                title: g("button.add"),
                                                children: r.jsx(Dt, {
                                                  className: "w-4 h-4",
                                                }),
                                              }),
                                            ],
                                          },
                                          k.GUID || C
                                        )
                                      ),
                                    })
                                  : r.jsx("div", {
                                      className:
                                        "text-gray-500 text-center flex items-center justify-center h-full",
                                      children: g(
                                        d || p !== "N"
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
                      onClick: z,
                      disabled: X || L,
                      className:
                        "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                      children: g("button.cancel"),
                    }),
                    r.jsxs("button", {
                      onClick: de,
                      disabled: X || L,
                      className:
                        "px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center space-x-2",
                      children: [
                        (X || L) &&
                          r.jsx(It, { className: "w-4 h-4 animate-spin" }),
                        r.jsx("span", {
                          children: X
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
            r.jsx(tl, {
              isOpen: b,
              onClose: () => D(!1),
              onScanSuccess: me,
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
      } = tt(),
      { t: o } = jt(),
      [l, a] = f.useState(""),
      [i, c] = f.useState([]),
      [x, g] = f.useState(""),
      [h, m] = f.useState("N"),
      [j, S] = f.useState([]),
      [M, R] = f.useState(!1);
    f.useEffect(() => {
      n && e && (a(n.name || ""), c(n.med_info || []));
    }, [n, e]);
    const d = (_) => {
        c((T) => T.filter((V) => V.code !== _));
      },
      u = async () => {
        R(!0);
        try {
          const _ = await ke.searchMedicine(x, h);
          S(_);
        } catch (_) {
          console.error("Search failed:", _), S([]);
        } finally {
          R(!1);
        }
      },
      p = (_) => {
        const T = {
          id: _.GUID || `${Date.now()}_${Math.random()}`,
          name: _.NAME,
          cht_name: _.CHT_NAME,
          code: _.CODE,
        };
        c((V) => (V.some((J) => J.code === T.code) ? V : [...V, T]));
      },
      E = () => {
        n && ((n.name = l), (n.med_info = i), s(), t());
      },
      P = () => {
        t();
      };
    return !e || !n
      ? null
      : r.jsxs("div", {
          className: "fixed inset-0 z-50 flex items-center justify-center",
          children: [
            r.jsx("div", {
              className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
              onClick: P,
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
                        r.jsx(En, { className: "w-6 h-6 text-gray-600" }),
                        r.jsx("h2", {
                          className: "text-xl font-semibold text-gray-900",
                          children: o("modal.listDrawSettings"),
                        }),
                      ],
                    }),
                    r.jsx("button", {
                      onClick: P,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: r.jsx(Xe, { className: "w-6 h-6" }),
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
                                                children: r.jsx(Xe, {
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
                                    onChange: (_) => m(_.target.value),
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
                                    disabled: M,
                                    className:
                                      "bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 transition-colors whitespace-nowrap disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2",
                                    children: [
                                      M &&
                                        r.jsx(It, {
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
                                children: M
                                  ? r.jsxs("div", {
                                      className:
                                        "text-gray-500 text-center flex items-center justify-center h-full",
                                      children: [
                                        r.jsx(It, {
                                          className:
                                            "w-5 h-5 animate-spin mr-2",
                                        }),
                                        o("status.searching"),
                                      ],
                                    })
                                  : j.length > 0
                                  ? r.jsx("div", {
                                      className: "space-y-1",
                                      children: j.map((_, T) =>
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
                                                onClick: () => p(_),
                                                className:
                                                  "ml-2 p-1 text-green-600 hover:text-green-700 hover:bg-green-50 rounded transition-colors flex-shrink-0",
                                                title: o("button.add"),
                                                children: r.jsx(Dt, {
                                                  className: "w-4 h-4",
                                                }),
                                              }),
                                            ],
                                          },
                                          _.GUID || T
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
                      onClick: P,
                      className:
                        "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                      children: o("button.cancel"),
                    }),
                    r.jsx("button", {
                      onClick: E,
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
      } = tt(),
      { t: c } = jt(),
      [x, g] = f.useState(""),
      [h, m] = f.useState(null),
      [j, S] = f.useState(!1),
      [M, R] = f.useState(!1),
      [d, u] = f.useState(null),
      [p, E] = f.useState(""),
      [P, _] = f.useState("N"),
      [T, V] = f.useState([]),
      [X, J] = f.useState(!1),
      [ue, we] = f.useState(0),
      [N, w] = f.useState({ x: 0, y: 0 });
    f.useEffect(() => {
      if (n && e)
        if ((g(n.name || ""), n.drawer)) {
          if (!j) {
            console.log("🔄 備份原始 drawer 資料:", n);
            const U = JSON.parse(JSON.stringify(n.drawer));
            m(U), S(!0), console.log("✅ 備份完成，備份資料:", U);
          }
        } else console.log("⚠️ 沒有 drawer 資料可備份"), m(null), S(!1);
    }, [n, e, j]),
      f.useEffect(() => {
        e || (S(!1), m(null), u(null));
      }, [e]);
    const L = () => {
        n && se();
      },
      v = () => {
        if (
          (console.log("🔄 開始恢復原始資料..."),
          console.log("原始備份資料:", h),
          console.log("當前 selectedGridDraw:", n),
          n && h && j)
        ) {
          console.log("📦 恢復 drawer 資料...");
          const U = JSON.parse(JSON.stringify(h));
          if (((n.drawer = U), o)) {
            const Z = ($) => {
                $.forEach((B) => {
                  B.GUID === n.GUID &&
                    (console.log("🎯 找到目標格線抽屜，更新資料"),
                    (B.drawer = U)),
                    B.contents && Array.isArray(B.contents) && Z(B.contents),
                    B.components &&
                      Array.isArray(B.components) &&
                      Z(B.components);
                });
              },
              ce = JSON.parse(JSON.stringify(o));
            Z(ce), l(ce), console.log("🔄 已更新全域資料狀態");
          }
          console.log("✅ 資料已恢復:", n.drawer);
        } else
          console.log(
            "⚠️ 無法恢復資料 - selectedGridDraw、originalDrawerData 或 hasBackup 為空"
          ),
            console.log("selectedGridDraw:", !!n),
            console.log("originalDrawerData:", !!h),
            console.log("hasBackup:", j);
        u(null), S(!1), m(null), s(), t();
      },
      b = (U, Z) => {
        if (!d) return !1;
        const ce = Math.min(d.startRow, d.endRow),
          $ = Math.max(d.startRow, d.endRow),
          B = Math.min(d.startCol, d.endCol),
          q = Math.max(d.startCol, d.endCol);
        return U >= ce && U <= $ && Z >= B && Z <= q;
      },
      D = (U) => {
        var be;
        if (
          !((be = n == null ? void 0 : n.drawer) != null && be.Boxes) ||
          U.Slave
        )
          return { width: 1, height: 1 };
        const ce = n.drawer.Boxes.flat().filter(
          (ae) =>
            ae.Slave &&
            ae.MasterBox_Row === U.Row &&
            ae.MasterBox_Column === U.Column
        );
        if (ce.length === 0) return { width: 1, height: 1 };
        const $ = [U, ...ce],
          B = Math.min(...$.map((ae) => ae.Row)),
          q = Math.max(...$.map((ae) => ae.Row)),
          re = Math.min(...$.map((ae) => ae.Column));
        return {
          width: Math.max(...$.map((ae) => ae.Column)) - re + 1,
          height: q - B + 1,
        };
      },
      I = () => {
        var re;
        if (!d || !((re = n == null ? void 0 : n.drawer) != null && re.Boxes))
          return [];
        const U = n.drawer.Boxes.flat(),
          Z = Math.min(d.startRow, d.endRow),
          ce = Math.max(d.startRow, d.endRow),
          $ = Math.min(d.startCol, d.endCol),
          B = Math.max(d.startCol, d.endCol),
          q = [];
        return (
          U.forEach((ie) => {
            if (!ie.Slave) {
              const be = D(ie),
                ae = ie.Row + be.height - 1,
                ve = ie.Column + be.width - 1;
              ie.Row >= Z &&
                ae <= ce &&
                ie.Column >= $ &&
                ve <= B &&
                q.push(ie);
            }
          }),
          q
        );
      },
      ne = (U, Z, ce, $) => {
        var ve;
        if (!d || !((ve = n == null ? void 0 : n.drawer) != null && ve.Boxes))
          return !1;
        const B = n.drawer.Boxes.flat();
        let q = !0,
          re = U,
          ie = Z,
          be = ce,
          ae = $;
        for (; q; )
          (q = !1),
            B.forEach((Ce) => {
              if (!Ce.Slave) {
                const Ee = D(Ce),
                  Ze = Ce.Row + Ee.height - 1,
                  Pe = Ce.Column + Ee.width - 1;
                !(Ce.Row > ie || Ze < re || Ce.Column > ae || Pe < be) &&
                  (Ce.Row < re && ((re = Ce.Row), (q = !0)),
                  Ze > ie && ((ie = Ze), (q = !0)),
                  Ce.Column < be && ((be = Ce.Column), (q = !0)),
                  Pe > ae && ((ae = Pe), (q = !0)));
              }
            });
        return { minRow: re, maxRow: ie, minCol: be, maxCol: ae };
      },
      G = () => {
        var q;
        if (!d || !((q = n == null ? void 0 : n.drawer) != null && q.Boxes))
          return !1;
        const U = Math.min(d.startRow, d.endRow),
          Z = Math.max(d.startRow, d.endRow),
          ce = Math.min(d.startCol, d.endCol),
          $ = Math.max(d.startCol, d.endCol),
          B = n.drawer.Boxes.flat();
        for (let re = U; re <= Z; re++)
          for (let ie = ce; ie <= $; ie++) {
            let be = !1;
            for (const ae of B)
              if (!ae.Slave) {
                const ve = D(ae),
                  Ce = ae.Row + ve.height - 1,
                  Ee = ae.Column + ve.width - 1;
                if (re >= ae.Row && re <= Ce && ie >= ae.Column && ie <= Ee) {
                  be = !0;
                  break;
                }
              }
            if (!be) return !1;
          }
        return !0;
      },
      W = () => {
        var ve, Ce;
        const U = I();
        if (!d) return { canMerge: !1, canUnmerge: !1 };
        if (U.length === 0) return { canMerge: !1, canUnmerge: !1 };
        const Z =
            ((Ce =
              (ve = n == null ? void 0 : n.drawer) == null
                ? void 0
                : ve.Boxes) == null
              ? void 0
              : Ce.flat()) || [],
          ce = U.some(
            (Ee) =>
              Z.filter(
                (Pe) =>
                  Pe.Slave &&
                  Pe.MasterBox_Row === Ee.Row &&
                  Pe.MasterBox_Column === Ee.Column
              ).length > 0
          ),
          $ = Math.min(d.startRow, d.endRow),
          B = Math.max(d.startRow, d.endRow),
          q = Math.min(d.startCol, d.endCol),
          re = Math.max(d.startCol, d.endCol),
          ie = Z.some(
            (Ee) =>
              Ee.Slave &&
              Ee.Row >= $ &&
              Ee.Row <= B &&
              Ee.Column >= q &&
              Ee.Column <= re
          );
        return { canMerge: U.length > 1 && G(), canUnmerge: ce || ie };
      },
      { canMerge: je, canUnmerge: de } = W(),
      z = async () => {
        J(!0);
        try {
          const U = p.toLowerCase().trim();
          let Z = i;
          U &&
            (Z = Z.filter((ce) => {
              var $, B, q;
              return (
                (($ = ce.CODE) == null
                  ? void 0
                  : $.toLowerCase().includes(U)) ||
                ((B = ce.NAME) == null
                  ? void 0
                  : B.toLowerCase().includes(U)) ||
                ((q = ce.CHT_NAME) == null
                  ? void 0
                  : q.toLowerCase().includes(U))
              );
            })),
            P !== "N" && (Z = Z.filter((ce) => ce.DRUGKIND === P)),
            V(Z);
        } catch (U) {
          console.error("Search failed:", U), V([]);
        } finally {
          J(!1);
        }
      },
      xe = async (U) => {
        var ce;
        if (!d || !((ce = n == null ? void 0 : n.drawer) != null && ce.Boxes))
          return;
        const Z = I();
        if (Z.length !== 0)
          try {
            const $ = {
              ServerName: n.serverName,
              ServerType: n.serverType,
              ValueAry: [`guid=${Z[0].GUID}`, `code=${U.CODE}`],
              Data: n.drawer,
            };
            console.log("🚀 發送更新藥品 API 請求:", $);
            const B = await ke.request("/api/device/update_drawer_medcode", {
              method: "POST",
              body: JSON.stringify($),
            });
            if (
              (console.log("📡 更新藥品 API 回應:", B),
              B.Code === 200 && B.Data)
            ) {
              if (
                ((n.drawer = B.Data),
                B.Data.Boxes && (n.Boxes = B.Data.Boxes),
                console.log("✅ 藥品資料更新成功"),
                o)
              ) {
                const q = (ie) => {
                    ie.forEach((be) => {
                      be.GUID === n.GUID &&
                        (console.log("🎯 找到目標格線抽屜，更新資料"),
                        (be.drawer = n.drawer),
                        n.Boxes && (be.Boxes = n.Boxes)),
                        be.contents &&
                          Array.isArray(be.contents) &&
                          q(be.contents),
                        be.components &&
                          Array.isArray(be.components) &&
                          q(be.components);
                    });
                  },
                  re = JSON.parse(JSON.stringify(o));
                q(re), l(re);
              }
              u(null), s();
            } else
              console.error("❌ 藥品更新失敗:", B),
                a(`藥品更新失敗：${B.Result || "未知錯誤"}`, "error");
          } catch ($) {
            console.error("💥 藥品更新 API 調用失敗:", $),
              a("藥品更新失敗：網路錯誤", "error");
          }
      },
      F = (U, Z, ce) => {
        ce.preventDefault(),
          ce.stopPropagation(),
          "touches" in ce &&
            (we(Date.now()),
            w({ x: ce.touches[0].clientX, y: ce.touches[0].clientY })),
          R(!0),
          u({ startRow: U, startCol: Z, endRow: U, endCol: Z });
      },
      ge = (U, Z) => {
        if (!M || !d) return;
        const ce = Math.min(d.startRow, U),
          $ = Math.max(d.startRow, U),
          B = Math.min(d.startCol, Z),
          q = Math.max(d.startCol, Z),
          re = ne(ce, $, B, q);
        re &&
          u((ie) =>
            ie
              ? {
                  startRow: ie.startRow,
                  startCol: ie.startCol,
                  endRow: U >= ie.startRow ? re.maxRow : re.minRow,
                  endCol: Z >= ie.startCol ? re.maxCol : re.minCol,
                }
              : null
          );
      },
      he = () => {
        if (M && (R(!1), d && n != null && n.Boxes)) {
          const U = Math.min(d.startRow, d.endRow),
            Z = Math.max(d.startRow, d.endRow),
            ce = Math.min(d.startCol, d.endCol),
            $ = Math.max(d.startCol, d.endCol),
            B = ne(U, Z, ce, $);
          B &&
            u({
              startRow: B.minRow,
              startCol: B.minCol,
              endRow: B.maxRow,
              endCol: B.maxCol,
            });
        }
      },
      me = () => {
        var U;
        !je ||
          !((U = n == null ? void 0 : n.drawer) != null && U.Boxes) ||
          !d ||
          C();
      },
      Te = () => {
        var U;
        !de ||
          !((U = n == null ? void 0 : n.drawer) != null && U.Boxes) ||
          !d ||
          (console.log(d), k());
      },
      k = async () => {
        var U;
        if (!(!d || !((U = n == null ? void 0 : n.drawer) != null && U.Boxes)))
          try {
            const Z = Math.min(d.startRow, d.endRow),
              ce = Math.max(d.startRow, d.endRow),
              $ = Math.min(d.startCol, d.endCol),
              B = Math.max(d.startCol, d.endCol),
              re = n.drawer.Boxes.flat().filter(
                (Ce) =>
                  Ce.Row >= Z &&
                  Ce.Row <= ce &&
                  Ce.Column >= $ &&
                  Ce.Column <= B
              ),
              ie = [],
              be = [];
            re.forEach((Ce) => {
              ie.push(Ce.Column.toString()), be.push(Ce.Row.toString());
            });
            const ae = {
              ServerName: n.serverName,
              ServerType: n.serverType,
              ValueAry: [
                `SelectColumns=${ie.join(",")}`,
                `SelectRows=${be.join(",")}`,
              ],
              Data: { IP: n.ip, Boxes: n.Boxes },
            };
            console.log("🚀 發送 API 請求:", ae);
            const ve = await ke.request("/api/device/separate_drawer_boxes", {
              method: "POST",
              body: JSON.stringify(ae),
            });
            if ((console.log("📡 API 回應:", ve), ve.Code === 200 && ve.Data)) {
              if (
                ve.Data.Boxes &&
                Array.isArray(ve.Data.Boxes) &&
                ((n.Boxes = ve.Data.Boxes),
                (n.drawer = ve.Data),
                console.log("✅ 資料已更新"),
                o)
              ) {
                const Ce = (Ze) => {
                    Ze.forEach((Pe) => {
                      Pe.GUID === n.GUID &&
                        (console.log("🎯 找到目標格線抽屜，更新資料"),
                        (Pe.drawer = n.drawer)),
                        Pe.contents &&
                          Array.isArray(Pe.contents) &&
                          Ce(Pe.contents),
                        Pe.components &&
                          Array.isArray(Pe.components) &&
                          Ce(Pe.components);
                    });
                  },
                  Ee = JSON.parse(JSON.stringify(o));
                Ce(Ee), l(Ee);
              }
            } else
              console.error("❌ API 回應錯誤:", ve),
                a(`取消合併失敗：${ve.Result || "未知錯誤"}`, "error");
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
      C = async () => {
        var U;
        if (!(!d || !((U = n == null ? void 0 : n.drawer) != null && U.Boxes)))
          try {
            const Z = Math.min(d.startRow, d.endRow),
              ce = Math.max(d.startRow, d.endRow),
              $ = Math.min(d.startCol, d.endCol),
              B = Math.max(d.startCol, d.endCol),
              re = n.drawer.Boxes.flat().filter(
                (Ce) =>
                  Ce.Row >= Z &&
                  Ce.Row <= ce &&
                  Ce.Column >= $ &&
                  Ce.Column <= B
              ),
              ie = [],
              be = [];
            re.forEach((Ce) => {
              ie.push(Ce.Column.toString()), be.push(Ce.Row.toString());
            });
            const ae = {
              ServerName: n.serverName,
              ServerType: n.serverType,
              ValueAry: [
                `SelectColumns=${ie.join(",")}`,
                `SelectRows=${be.join(",")}`,
              ],
              Data: { IP: n.ip, Boxes: n.Boxes },
            };
            console.log("🚀 發送 API 請求:", ae);
            const ve = await ke.request("/api/device/combine_drawer_boxes", {
              method: "POST",
              body: JSON.stringify(ae),
            });
            if ((console.log("📡 API 回應:", ve), ve.Code === 200 && ve.Data)) {
              if (
                ve.Data.Boxes &&
                Array.isArray(ve.Data.Boxes) &&
                ((n.Boxes = ve.Data.Boxes),
                (n.drawer = ve.Data),
                console.log("✅ 資料已更新"),
                o)
              ) {
                const Ce = (Ze) => {
                    Ze.forEach((Pe) => {
                      Pe.GUID === n.GUID &&
                        (console.log("🎯 找到目標格線抽屜，更新資料"),
                        (Pe.drawer = n.drawer)),
                        Pe.contents &&
                          Array.isArray(Pe.contents) &&
                          Ce(Pe.contents),
                        Pe.components &&
                          Array.isArray(Pe.components) &&
                          Ce(Pe.components);
                    });
                  },
                  Ee = JSON.parse(JSON.stringify(o));
                Ce(Ee), l(Ee);
              }
            } else
              console.error("❌ API 回應錯誤:", ve),
                a(`取消合併失敗：${ve.Result || "未知錯誤"}`, "error");
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
            const U = {
              ServerName: n.serverName,
              ServerType: n.serverType,
              Data: [n.drawer],
            };
            console.log("🚀 發送確認更新 API 請求:", U);
            const Z = await ke.request("/api/device/update_epd583_drawers", {
              method: "POST",
              body: JSON.stringify(U),
            });
            if ((console.log("📡 確認更新 API 回應:", Z), Z.Code === 200)) {
              if (
                (console.log("✅ 抽屜資料更新成功"),
                a("抽屜資料更新成功", "success"),
                o)
              ) {
                const ce = (B) => {
                    B.forEach((q) => {
                      q.GUID === n.GUID &&
                        (console.log("🎯 找到目標格線抽屜，更新名稱"),
                        (q.name = n.name)),
                        q.contents &&
                          Array.isArray(q.contents) &&
                          ce(q.contents),
                        q.components &&
                          Array.isArray(q.components) &&
                          ce(q.components);
                    });
                  },
                  $ = JSON.parse(JSON.stringify(o));
                ce($), l($);
              }
              S(!1), m(null), s(), t();
            } else
              console.error("❌ 抽屜資料更新失敗:", Z),
                a(`抽屜資料更新失敗：${Z.Result || "未知錯誤"}`, "error");
          } catch (U) {
            console.error("💥 抽屜資料更新 API 調用失敗:", U),
              a("抽屜資料更新失敗：網路錯誤", "error");
          }
      },
      oe = () => {
        var be;
        if (
          !((be = n == null ? void 0 : n.drawer) != null && be.Boxes) ||
          n.drawer.Boxes.length === 0
        )
          return r.jsx("div", {
            className:
              "bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg py-12",
            children: r.jsxs("div", {
              className: "text-center",
              children: [
                r.jsx(Ju, {
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
        const U = n.drawer.Boxes.flat(),
          Z = (ae) => {
            if (ae.Slave) return { width: 1, height: 1 };
            const ve = U.filter(
              (Ve) =>
                Ve.Slave &&
                Ve.MasterBox_Row === ae.Row &&
                Ve.MasterBox_Column === ae.Column
            );
            if (ve.length === 0) return { width: 1, height: 1 };
            const Ce = [ae, ...ve],
              Ee = Math.min(...Ce.map((Ve) => Ve.Row)),
              Ze = Math.max(...Ce.map((Ve) => Ve.Row)),
              Pe = Math.min(...Ce.map((Ve) => Ve.Column));
            return {
              width: Math.max(...Ce.map((Ve) => Ve.Column)) - Pe + 1,
              height: Ze - Ee + 1,
            };
          },
          ce = Math.max(...U.map((ae) => ae.Row + 1 - 1)),
          $ = Math.max(...U.map((ae) => ae.Column + 1 - 1)),
          B = ce + 1,
          q = $ + 1,
          re = Array(B)
            .fill(null)
            .map(() => Array(q).fill(!1)),
          ie = {};
        return (
          U.forEach((ae) => {
            if (!ae.Slave) {
              const ve = Z(ae);
              (ie[`${ae.Row},${ae.Column}`] = ae),
                (ae.calculatedWidth = ve.width),
                (ae.calculatedHeight = ve.height);
            }
          }),
          U.forEach((ae) => {
            if (
              !ae.Slave &&
              (ae.calculatedWidth > 1 || ae.calculatedHeight > 1)
            )
              for (let ve = ae.Row; ve < ae.Row + ae.calculatedHeight; ve++)
                for (
                  let Ce = ae.Column;
                  Ce < ae.Column + ae.calculatedWidth;
                  Ce++
                )
                  (ve !== ae.Row || Ce !== ae.Column) && (re[ve][Ce] = !0);
          }),
          r.jsx("div", {
            className: "rounded-lg",
            children: r.jsx("table", {
              className: "w-full",
              children: r.jsx("tbody", {
                children: Array.from({ length: B }, (ae, ve) =>
                  r.jsx(
                    "tr",
                    {
                      children: Array.from({ length: q }, (Ce, Ee) => {
                        if (re[ve][Ee]) return null;
                        const Ze = `${ve},${Ee}`,
                          Pe = ie[Ze];
                        return Pe
                          ? r.jsx(
                              "td",
                              {
                                className: `border border-gray-400 pt-1 pl-1 align-top cursor-pointer select-none ${
                                  b(ve, Ee)
                                    ? "bg-blue-200"
                                    : "bg-white hover:bg-gray-100"
                                }`,
                                style: {
                                  width: `${100 / q}%`,
                                  minHeight: "40px",
                                  height: `${50 * Pe.calculatedHeight}px`,
                                  maxHeight: `${50 * Pe.calculatedHeight}px`,
                                },
                                colSpan: Pe.calculatedWidth,
                                rowSpan: Pe.calculatedHeight,
                                onMouseDown: (rt) => F(ve, Ee, rt),
                                onMouseEnter: () => ge(ve, Ee),
                                onMouseUp: he,
                                onTouchStart: (rt) => F(ve, Ee, rt),
                                onTouchMove: (rt) => {
                                  if ((rt.preventDefault(), !M)) return;
                                  const Ve = rt.touches[0],
                                    Pt = document.elementFromPoint(
                                      Ve.clientX,
                                      Ve.clientY
                                    ),
                                    Bt = Pt == null ? void 0 : Pt.closest("td");
                                  if (Bt) {
                                    const Vn = parseInt(
                                        Bt.getAttribute("data-row") || "0"
                                      ),
                                      Yt = parseInt(
                                        Bt.getAttribute("data-col") || "0"
                                      );
                                    ge(Vn, Yt);
                                  }
                                },
                                onTouchEnd: he,
                                "data-row": ve,
                                "data-col": Ee,
                                children: r.jsx("div", {
                                  className: "h-full flex flex-col",
                                  children:
                                    Pe.Code || Pe.Name || Pe.ChineseName
                                      ? r.jsxs(r.Fragment, {
                                          children: [
                                            Pe.Code &&
                                              r.jsx("div", {
                                                className:
                                                  "text-xs font-mono text-gray-600",
                                                children: Pe.Code,
                                              }),
                                            Pe.Name &&
                                              r.jsx("div", {
                                                className:
                                                  "text-xs font-medium text-gray-900",
                                                children: Pe.Name,
                                              }),
                                            Pe.ChineseName &&
                                              r.jsx("div", {
                                                className:
                                                  "text-xs text-gray-700",
                                                children: Pe.ChineseName,
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
                              Ee
                            )
                          : r.jsx(
                              "td",
                              {
                                className: `border border-gray-300 p-2 align-top cursor-pointer select-none ${
                                  b(ve, Ee)
                                    ? "border-1 border-blue-500 bg-blue-100"
                                    : "bg-gray-50 hover:bg-gray-100"
                                }`,
                                style: {
                                  width: `${100 / q}%`,
                                  minWidth: "80px",
                                  minHeight: "80px",
                                },
                                onMouseDown: (rt) => F(ve, Ee, rt),
                                onMouseEnter: () => ge(ve, Ee),
                                onMouseUp: he,
                                onTouchStart: (rt) => F(ve, Ee, rt),
                                onTouchMove: (rt) => {
                                  if ((rt.preventDefault(), !M)) return;
                                  const Ve = rt.touches[0],
                                    Pt = document.elementFromPoint(
                                      Ve.clientX,
                                      Ve.clientY
                                    ),
                                    Bt = Pt == null ? void 0 : Pt.closest("td");
                                  if (Bt) {
                                    const Vn = parseInt(
                                        Bt.getAttribute("data-row") || "0"
                                      ),
                                      Yt = parseInt(
                                        Bt.getAttribute("data-col") || "0"
                                      );
                                    ge(Vn, Yt);
                                  }
                                },
                                onTouchEnd: he,
                                "data-row": ve,
                                "data-col": Ee,
                                children: r.jsx("div", {
                                  className:
                                    "h-full flex items-center justify-center text-gray-400 text-xs",
                                  children: c("status.notAdded"),
                                }),
                              },
                              Ee
                            );
                      }),
                    },
                    ve
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
              onClick: v,
            }),
            r.jsxs("div", {
              className:
                "relative flex flex-col bg-white rounded-xl shadow-2xl border border-gray-200",
              style: { width: "90vw", height: "90vh" },
              onClick: (U) => U.stopPropagation(),
              children: [
                r.jsxs("div", {
                  className:
                    "flex items-center justify-between px-4 py-2 border-b border-gray-200",
                  children: [
                    r.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        r.jsx(En, { className: "w-6 h-6 text-gray-600" }),
                        r.jsx("h2", {
                          className: "text-xl font-semibold text-gray-900",
                          children: c("modal.gridDrawSettings"),
                        }),
                      ],
                    }),
                    r.jsx("button", {
                      onClick: v,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: r.jsx(Xe, { className: "w-6 h-6" }),
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
                              onChange: (U) => g(U.target.value),
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
                          children: oe(),
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
                                onClick: me,
                                disabled: !je,
                                className: `px-4 py-2 rounded transition-colors ${
                                  je
                                    ? "bg-blue-600 text-white hover:bg-blue-700"
                                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                                }`,
                                children: c("button.merge"),
                              }),
                              r.jsx("button", {
                                onClick: Te,
                                disabled: !de,
                                className: `px-4 py-2 rounded transition-colors ${
                                  de
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
                            const U = I(),
                              Z = U.find((ce) => !ce.Slave);
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
                                      d && U.length > 0
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
                                  value: p,
                                  onChange: (U) => E(U.target.value),
                                  placeholder: c("placeholder.drugSearch"),
                                  className:
                                    "border rounded px-3 py-1 flex-1 min-w-0 focus:border-blue-500 focus:outline-none transition-colors",
                                }),
                                r.jsxs("select", {
                                  value: P,
                                  onChange: (U) => _(U.target.value),
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
                                  onClick: z,
                                  disabled: X,
                                  className:
                                    "bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 transition-colors whitespace-nowrap disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2",
                                  children: [
                                    X &&
                                      r.jsx(It, {
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
                              children: X
                                ? r.jsxs("div", {
                                    className:
                                      "text-gray-500 text-center flex items-center justify-center h-full",
                                    children: [
                                      r.jsx(It, {
                                        className: "w-5 h-5 animate-spin mr-2",
                                      }),
                                      c("status.searching"),
                                    ],
                                  })
                                : T.length > 0
                                ? r.jsx("div", {
                                    className: "space-y-1",
                                    children: T.map((U, Z) =>
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
                                                  children: U.NAME,
                                                }),
                                                r.jsx("div", {
                                                  className:
                                                    "text-xs text-gray-500 truncate",
                                                  children: U.CHT_NAME,
                                                }),
                                                r.jsx("div", {
                                                  className:
                                                    "text-xs text-gray-400 font-mono",
                                                  children: U.CODE,
                                                }),
                                              ],
                                            }),
                                            r.jsx("button", {
                                              onClick: () => xe(U),
                                              className:
                                                "ml-2 p-1 text-green-600 hover:text-green-700 hover:bg-green-50 rounded transition-colors flex-shrink-0",
                                              title: c("button.add"),
                                              children: r.jsx(Dt, {
                                                className: "w-4 h-4",
                                              }),
                                            }),
                                          ],
                                        },
                                        U.GUID || Z
                                      )
                                    ),
                                  })
                                : r.jsx("div", {
                                    className:
                                      "text-gray-500 text-center flex items-center justify-center h-full",
                                    children: c(
                                      p || P !== "N"
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
                          onClick: v,
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
                  onMouseUp: he,
                  onMouseLeave: he,
                  onTouchEnd: he,
                  onTouchCancel: he,
                }),
              ],
            }),
          ],
        });
  },
  Ph = () => {
    var we;
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
      } = tt(),
      { t: x } = jt(),
      [g, h] = f.useState(null),
      [m, j] = f.useState(0),
      [S, M] = f.useState(0),
      [R, d] = f.useState(!1);
    f.useEffect(() => {
      e && (h(null), j(0), M(0), d(!1));
    }, [e]),
      f.useEffect(() => {
        g && (j(g.row), M(g.col));
      }, [g]);
    const u = () => {
        const N = new Set();
        return (
          n != null &&
            n.contents &&
            n.contents.forEach((w) => {
              w.type === "parent_container" &&
                w.gird_position &&
                N.add(w.gird_position);
            }),
          N
        );
      },
      p = () => {
        const N = u(),
          w = [];
        if (N.size === 0) return w.push({ row: 0, col: 0 }), w;
        const L = [];
        N.forEach((b) => {
          const [D, I] = b.split(",").map(Number);
          L.push({ row: D, col: I });
        });
        const v = new Set();
        return (
          L.forEach(({ row: b, col: D }) => {
            v.add(`${b},${D + 1}`),
              v.add(`${b + 1},${D}`),
              D > 0 && v.add(`${b},${D - 1}`),
              b > 0 && v.add(`${b - 1},${D}`);
          }),
          v.forEach((b) => {
            if (!N.has(b)) {
              const [D, I] = b.split(",").map(Number);
              D >= 0 && I >= 0 && w.push({ row: D, col: I });
            }
          }),
          N.has("0,1") ||
            w.some((D) => D.row === 0 && D.col === 1) ||
            w.push({ row: 0, col: 1 }),
          N.has("1,0") ||
            w.some((D) => D.row === 1 && D.col === 0) ||
            w.push({ row: 1, col: 0 }),
          w.sort((b, D) => (b.row === D.row ? b.col - D.col : b.row - D.row))
        );
      },
      E = (N) => {
        h(N);
      },
      P = (N) => {
        j(N), h({ row: N, col: S });
      },
      _ = (N) => {
        M(N), h({ row: m, col: N });
      },
      T = g && !u().has(`${g.row},${g.col}`) && g.row >= 0 && g.col >= 0,
      V = async () => {
        if (!(!g || !n || !T)) {
          d(!0);
          try {
            const N = `${g.row},${g.col}`,
              w = await ke.addMedMapSection(n.GUID, N);
            w.Code === 200
              ? (a("新增成功", "success"), t(), c(!1), await X())
              : a(`新增失敗：${w.Result || "未知錯誤"}`, "error");
          } catch (N) {
            console.error("Add parent container failed:", N),
              a("新增失敗：網路錯誤", "error");
          } finally {
            d(!1);
          }
        }
      },
      X = async () => {
        if (!s) {
          console.warn("⚠️ 沒有選中的部門類型，無法重新獲取資料");
          return;
        }
        console.log("🔄 重新獲取藥品地圖資料，部門類型:", s), l(!0);
        try {
          const N = await ke.getMedMapByDepartment(s);
          if (N.Code === 200 && N.Data) {
            console.log("📡 API 回傳成功，開始轉換資料");
            const w = ct.convertMedMapApiToFakeData(N.Data);
            if (!ct.validateConvertedData(w)) {
              console.error("❌ 轉換後的資料驗證失敗"),
                a("資料更新失敗：資料格式錯誤", "error");
              return;
            }
            o(w), console.log("✅ 藥品地圖資料已更新");
          } else
            console.error("❌ API 回傳錯誤:", N),
              a("資料更新失敗：API 錯誤", "error");
        } catch (N) {
          console.error("💥 重新獲取藥品地圖資料失敗:", N),
            a("資料更新失敗：網路錯誤", "error");
        } finally {
          l(!1);
        }
      },
      J = () => {
        t();
      },
      ue = () => {
        const N = u(),
          w = p(),
          L = [...N]
            .map((W) => {
              const [je, de] = W.split(",").map(Number);
              return { row: je, col: de };
            })
            .concat(w);
        L.length === 0 && L.push({ row: 0, col: 0 });
        const v = Math.max(...L.map((W) => W.row)),
          b = Math.max(...L.map((W) => W.col)),
          D = Math.min(...L.map((W) => W.row)),
          I = Math.min(...L.map((W) => W.col)),
          ne = v - D + 1,
          G = b - I + 1;
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
                style: { gridTemplateColumns: `repeat(${G}, 1fr)` },
                children: Array.from({ length: ne * G }, (W, je) => {
                  const de = Math.floor(je / G) + D,
                    z = (je % G) + I,
                    xe = `${de},${z}`,
                    F = N.has(xe),
                    ge = w.some((me) => me.row === de && me.col === z),
                    he =
                      (g == null ? void 0 : g.row) === de &&
                      (g == null ? void 0 : g.col) === z;
                  return r.jsx(
                    "button",
                    {
                      onClick: () => ge && E({ row: de, col: z }),
                      disabled: F || !ge,
                      className: `
                    w-16 h-16 border-2 rounded-lg transition-all duration-200 flex items-center justify-center text-sm font-medium
                    ${
                      F
                        ? "bg-red-100 border-red-300 text-red-600 cursor-not-allowed"
                        : he
                        ? "bg-blue-500 border-blue-600 text-white shadow-lg"
                        : ge
                        ? "bg-green-100 border-green-300 text-green-700 hover:bg-green-200 hover:border-green-400 cursor-pointer"
                        : "bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed"
                    }
                  `,
                      title: F ? "已占用" : ge ? "可選擇" : "不可用",
                      children: F ? "占用" : `${de},${z}`,
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
              onClick: J,
            }),
            r.jsxs("div", {
              className:
                "relative flex flex-col bg-white rounded-xl shadow-2xl border border-gray-200",
              style: { width: "90vw", height: "90vh", maxWidth: "800px" },
              onClick: (N) => N.stopPropagation(),
              children: [
                r.jsxs("div", {
                  className:
                    "flex items-center justify-between px-4 py-2 border-b border-gray-200",
                  children: [
                    r.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        r.jsx(Dt, { className: "w-6 h-6 text-green-600" }),
                        r.jsx("h2", {
                          className: "text-xl font-semibold text-gray-900",
                          children: "新增櫃體",
                        }),
                      ],
                    }),
                    r.jsx("button", {
                      onClick: J,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: r.jsx(Xe, { className: "w-6 h-6" }),
                    }),
                  ],
                }),
                r.jsx("div", {
                  className: "flex-1 px-6 py-4 overflow-y-auto",
                  children: r.jsxs("div", {
                    className: "space-y-6",
                    children: [
                      ue(),
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
                                    value: m,
                                    onChange: (N) =>
                                      P(parseInt(N.target.value) || 0),
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
                                    onChange: (N) =>
                                      _(parseInt(N.target.value) || 0),
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
                                T
                                  ? "bg-green-50 text-green-700 border border-green-200"
                                  : "bg-red-50 text-red-700 border border-red-200"
                              }`,
                              children: T
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
                                  ((we = n == null ? void 0 : n.contents) ==
                                  null
                                    ? void 0
                                    : we.filter(
                                        (N) => N.type === "parent_container"
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
                      onClick: J,
                      disabled: R,
                      className:
                        "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                      children: x("button.cancel"),
                    }),
                    r.jsxs("button", {
                      onClick: V,
                      disabled: !T || R,
                      className:
                        "px-6 py-2 text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center space-x-2",
                      children: [
                        R && r.jsx(It, { className: "w-4 h-4 animate-spin" }),
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
  Pc = [
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
      icon: r.jsx(ja, { className: "w-5 h-5" }),
      isShelf: !1,
    },
    {
      value: "grid_draw",
      label: "格線抽屜",
      icon: r.jsx(Ju, { className: "w-5 h-5" }),
      isShelf: !1,
    },
  ],
  Th = () => {
    var ne;
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
      } = tt(),
      { t: x } = jt(),
      [g, h] = f.useState("dispensing_shelves"),
      [m, j] = f.useState("1"),
      [S, M] = f.useState("1"),
      [R, d] = f.useState(""),
      [u, p] = f.useState(null),
      [E, P] = f.useState(0),
      [_, T] = f.useState(0),
      [V, X] = f.useState(!1);
    f.useEffect(() => {
      e &&
        (h("dispensing_shelves"),
        j("1"),
        M("1"),
        d(""),
        p(null),
        P(0),
        T(0),
        X(!1));
    }, [e]),
      f.useEffect(() => {
        u && (P(u.row), T(u.col));
      }, [u]);
    const J = () => {
        const G = new Set();
        return (
          n != null &&
            n.contents &&
            n.contents.forEach((W) => {
              W.gird_position && G.add(W.gird_position);
            }),
          G
        );
      },
      ue = () => {
        const G = J(),
          W = [];
        if (G.size === 0) return W.push({ row: 0, col: 0 }), W;
        const je = [];
        G.forEach((z) => {
          const [xe, F] = z.split(",").map(Number);
          je.push({ row: xe, col: F });
        });
        const de = new Set();
        return (
          je.forEach(({ row: z, col: xe }) => {
            de.add(`${z},${xe + 1}`),
              de.add(`${z + 1},${xe}`),
              xe > 0 && de.add(`${z},${xe - 1}`),
              z > 0 && de.add(`${z - 1},${xe}`);
          }),
          de.forEach((z) => {
            if (!G.has(z)) {
              const [xe, F] = z.split(",").map(Number);
              xe >= 0 && F >= 0 && W.push({ row: xe, col: F });
            }
          }),
          G.has("0,1") ||
            W.some((xe) => xe.row === 0 && xe.col === 1) ||
            W.push({ row: 0, col: 1 }),
          G.has("1,0") ||
            W.some((xe) => xe.row === 1 && xe.col === 0) ||
            W.push({ row: 1, col: 0 }),
          W.sort((z, xe) =>
            z.row === xe.row ? z.col - xe.col : z.row - xe.row
          )
        );
      },
      we = (G) => {
        p(G);
      },
      N = (G) => {
        P(G), p({ row: G, col: _ });
      },
      w = (G) => {
        T(G), p({ row: E, col: G });
      },
      L = u && !J().has(`${u.row},${u.col}`) && u.row >= 0 && u.col >= 0,
      v = async () => {
        if (!(!u || !n || !L)) {
          X(!0);
          try {
            const G = `${u.row},${u.col}`,
              W = Pc.find((de) => de.value === g);
            let je;
            W != null && W.isShelf
              ? (je = await ke.addMedMapShelf({
                  Master_GUID: n.GUID,
                  position: G,
                  width: m,
                  height: S,
                  ip_light: R,
                  type: g,
                }))
              : (je = await ke.addMedMapDrawer({
                  Master_GUID: n.GUID,
                  position: G,
                  width: m,
                  height: S,
                  ip_drawer: R,
                  type: g,
                })),
              je.Code === 200
                ? (a("新增成功", "success"), t(), c(!1), await b())
                : a(`新增失敗：${je.Result || "未知錯誤"}`, "error");
          } catch (G) {
            console.error("Add container failed:", G),
              a("新增失敗：網路錯誤", "error");
          } finally {
            X(!1);
          }
        }
      },
      b = async () => {
        if (!s) {
          console.warn("⚠️ 沒有選中的部門類型，無法重新獲取資料");
          return;
        }
        console.log("🔄 重新獲取藥品地圖資料，部門類型:", s), l(!0);
        try {
          const G = await ke.getMedMapByDepartment(s);
          if (G.Code === 200 && G.Data) {
            console.log("📡 API 回傳成功，開始轉換資料");
            const W = ct.convertMedMapApiToFakeData(G.Data);
            if (!ct.validateConvertedData(W)) {
              console.error("❌ 轉換後的資料驗證失敗"),
                a("資料更新失敗：資料格式錯誤", "error");
              return;
            }
            o(W), console.log("✅ 藥品地圖資料已更新");
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
      D = () => {
        t();
      },
      I = () => {
        const G = J(),
          W = ue(),
          je = [...G]
            .map((me) => {
              const [Te, k] = me.split(",").map(Number);
              return { row: Te, col: k };
            })
            .concat(W);
        je.length === 0 && je.push({ row: 0, col: 0 });
        const de = Math.max(...je.map((me) => me.row)),
          z = Math.max(...je.map((me) => me.col)),
          xe = Math.min(...je.map((me) => me.row)),
          F = Math.min(...je.map((me) => me.col)),
          ge = de - xe + 1,
          he = z - F + 1;
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
                style: { gridTemplateColumns: `repeat(${he}, 1fr)` },
                children: Array.from({ length: ge * he }, (me, Te) => {
                  const k = Math.floor(Te / he) + xe,
                    C = (Te % he) + F,
                    se = `${k},${C}`,
                    oe = G.has(se),
                    U = W.some((ce) => ce.row === k && ce.col === C),
                    Z =
                      (u == null ? void 0 : u.row) === k &&
                      (u == null ? void 0 : u.col) === C;
                  return r.jsx(
                    "button",
                    {
                      onClick: () => U && we({ row: k, col: C }),
                      disabled: oe || !U,
                      className: `
                    w-16 h-16 border-2 rounded-lg transition-all duration-200 flex items-center justify-center text-sm font-medium
                    ${
                      oe
                        ? "bg-red-100 border-red-300 text-red-600 cursor-not-allowed"
                        : Z
                        ? "bg-blue-500 border-blue-600 text-white shadow-lg"
                        : U
                        ? "bg-green-100 border-green-300 text-green-700 hover:bg-green-200 hover:border-green-400 cursor-pointer"
                        : "bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed"
                    }
                  `,
                      title: oe ? "已占用" : U ? "可選擇" : "不可用",
                      children: oe ? "占用" : `${k},${C}`,
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
              onClick: D,
            }),
            r.jsxs("div", {
              className:
                "relative flex flex-col bg-white rounded-xl shadow-2xl border border-gray-200",
              style: { width: "90vw", height: "90vh", maxWidth: "1000px" },
              onClick: (G) => G.stopPropagation(),
              children: [
                r.jsxs("div", {
                  className:
                    "flex items-center justify-between px-4 py-2 border-b border-gray-200",
                  children: [
                    r.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        r.jsx(Dt, { className: "w-6 h-6 text-green-600" }),
                        r.jsx("h2", {
                          className: "text-xl font-semibold text-gray-900",
                          children: "新增層架/抽屜",
                        }),
                      ],
                    }),
                    r.jsx("button", {
                      onClick: D,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: r.jsx(Xe, { className: "w-6 h-6" }),
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
                            children: Pc.map((G) =>
                              r.jsxs(
                                "label",
                                {
                                  className: `flex items-center space-x-3 p-4 border-2 rounded-lg cursor-pointer transition-all ${
                                    g === G.value
                                      ? "border-blue-500 bg-blue-50"
                                      : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                                  }`,
                                  children: [
                                    r.jsx("input", {
                                      type: "radio",
                                      name: "containerType",
                                      value: G.value,
                                      checked: g === G.value,
                                      onChange: (W) => h(W.target.value),
                                      className:
                                        "w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 hidden",
                                    }),
                                    r.jsxs("div", {
                                      className: "flex items-center space-x-3",
                                      children: [
                                        G.icon,
                                        r.jsx("span", {
                                          className:
                                            "font-medium text-gray-900",
                                          children: G.label,
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                G.value
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
                                value: m,
                                onChange: (G) => j(G.target.value),
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
                                onChange: (G) => M(G.target.value),
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
                            onChange: (G) => d(G.target.value),
                            placeholder: "請輸入 IP 位址",
                            className:
                              "w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors",
                          }),
                        ],
                      }),
                      I(),
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
                                    value: E,
                                    onChange: (G) =>
                                      N(parseInt(G.target.value) || 0),
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
                                    onChange: (G) =>
                                      w(parseInt(G.target.value) || 0),
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
                                  ((ne = n == null ? void 0 : n.contents) ==
                                  null
                                    ? void 0
                                    : ne.length) || 0,
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
                      onClick: D,
                      disabled: V,
                      className:
                        "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                      children: x("button.cancel"),
                    }),
                    r.jsxs("button", {
                      onClick: v,
                      disabled: !L || V,
                      className:
                        "px-6 py-2 text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center space-x-2",
                      children: [
                        V && r.jsx(It, { className: "w-4 h-4 animate-spin" }),
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
    var we;
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
      } = tt(),
      { t: x } = jt(),
      [g, h] = f.useState(null),
      [m, j] = f.useState(0),
      [S, M] = f.useState(0),
      [R, d] = f.useState(!1);
    f.useEffect(() => {
      e && (h(null), j(0), M(0), d(!1));
    }, [e]),
      f.useEffect(() => {
        g && (j(g.row), M(g.col));
      }, [g]);
    const u = () => {
        const N = new Set();
        return (
          n != null &&
            n.contents &&
            n.contents.forEach((w) => {
              w.type === "sub_container" &&
                w.gird_position &&
                N.add(w.gird_position);
            }),
          N
        );
      },
      p = () => {
        const N = u(),
          w = [];
        if (N.size === 0) return w.push({ row: 0, col: 0 }), w;
        const L = [];
        N.forEach((b) => {
          const [D, I] = b.split(",").map(Number);
          L.push({ row: D, col: I });
        });
        const v = new Set();
        return (
          L.forEach(({ row: b, col: D }) => {
            v.add(`${b},${D + 1}`),
              v.add(`${b + 1},${D}`),
              D > 0 && v.add(`${b},${D - 1}`),
              b > 0 && v.add(`${b - 1},${D}`);
          }),
          v.forEach((b) => {
            if (!N.has(b)) {
              const [D, I] = b.split(",").map(Number);
              D >= 0 && I >= 0 && w.push({ row: D, col: I });
            }
          }),
          N.has("0,1") ||
            w.some((D) => D.row === 0 && D.col === 1) ||
            w.push({ row: 0, col: 1 }),
          N.has("1,0") ||
            w.some((D) => D.row === 1 && D.col === 0) ||
            w.push({ row: 1, col: 0 }),
          w.sort((b, D) => (b.row === D.row ? b.col - D.col : b.row - D.row))
        );
      },
      E = (N) => {
        h(N);
      },
      P = (N) => {
        j(N), h({ row: N, col: S });
      },
      _ = (N) => {
        M(N), h({ row: m, col: N });
      },
      T = g && !u().has(`${g.row},${g.col}`) && g.row >= 0 && g.col >= 0,
      V = async () => {
        if (!(!g || !n || !T)) {
          d(!0);
          try {
            const N = `${g.row},${g.col}`,
              w = await ke.addSubSection(n.GUID, N);
            w.Code === 200
              ? (a("新增成功", "success"), t(), c(!1), await X())
              : a(`新增失敗：${w.Result || "未知錯誤"}`, "error");
          } catch (N) {
            console.error("Add sub container failed:", N),
              a("新增失敗：網路錯誤", "error");
          } finally {
            d(!1);
          }
        }
      },
      X = async () => {
        if (!s) {
          console.warn("⚠️ 沒有選中的部門類型，無法重新獲取資料");
          return;
        }
        console.log("🔄 重新獲取藥品地圖資料，部門類型:", s), l(!0);
        try {
          const N = await ke.getMedMapByDepartment(s);
          if (N.Code === 200 && N.Data) {
            console.log("📡 API 回傳成功，開始轉換資料");
            const w = ct.convertMedMapApiToFakeData(N.Data);
            if (!ct.validateConvertedData(w)) {
              console.error("❌ 轉換後的資料驗證失敗"),
                a("資料更新失敗：資料格式錯誤", "error");
              return;
            }
            o(w), console.log("✅ 藥品地圖資料已更新");
          } else
            console.error("❌ API 回傳錯誤:", N),
              a("資料更新失敗：API 錯誤", "error");
        } catch (N) {
          console.error("💥 重新獲取藥品地圖資料失敗:", N),
            a("資料更新失敗：網路錯誤", "error");
        } finally {
          l(!1);
        }
      },
      J = () => {
        t();
      },
      ue = () => {
        const N = u(),
          w = p(),
          L = [...N]
            .map((W) => {
              const [je, de] = W.split(",").map(Number);
              return { row: je, col: de };
            })
            .concat(w);
        L.length === 0 && L.push({ row: 0, col: 0 });
        const v = Math.max(...L.map((W) => W.row)),
          b = Math.max(...L.map((W) => W.col)),
          D = Math.min(...L.map((W) => W.row)),
          I = Math.min(...L.map((W) => W.col)),
          ne = v - D + 1,
          G = b - I + 1;
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
                style: { gridTemplateColumns: `repeat(${G}, 1fr)` },
                children: Array.from({ length: ne * G }, (W, je) => {
                  const de = Math.floor(je / G) + D,
                    z = (je % G) + I,
                    xe = `${de},${z}`,
                    F = N.has(xe),
                    ge = w.some((me) => me.row === de && me.col === z),
                    he =
                      (g == null ? void 0 : g.row) === de &&
                      (g == null ? void 0 : g.col) === z;
                  return r.jsx(
                    "button",
                    {
                      onClick: () => ge && E({ row: de, col: z }),
                      disabled: F || !ge,
                      className: `
                    w-16 h-16 border-2 rounded-lg transition-all duration-200 flex items-center justify-center text-sm font-medium
                    ${
                      F
                        ? "bg-red-100 border-red-300 text-red-600 cursor-not-allowed"
                        : he
                        ? "bg-blue-500 border-blue-600 text-white shadow-lg"
                        : ge
                        ? "bg-green-100 border-green-300 text-green-700 hover:bg-green-200 hover:border-green-400 cursor-pointer"
                        : "bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed"
                    }
                  `,
                      title: F ? "已占用" : ge ? "可選擇" : "不可用",
                      children: F ? "占用" : `${de},${z}`,
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
              onClick: J,
            }),
            r.jsxs("div", {
              className:
                "relative flex flex-col bg-white rounded-xl shadow-2xl border border-gray-200",
              style: { width: "90vw", height: "90vh", maxWidth: "800px" },
              onClick: (N) => N.stopPropagation(),
              children: [
                r.jsxs("div", {
                  className:
                    "flex items-center justify-between px-4 py-2 border-b border-gray-200",
                  children: [
                    r.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        r.jsx(Dt, { className: "w-6 h-6 text-green-600" }),
                        r.jsx("h2", {
                          className: "text-xl font-semibold text-gray-900",
                          children: "新增虛擬容器",
                        }),
                      ],
                    }),
                    r.jsx("button", {
                      onClick: J,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: r.jsx(Xe, { className: "w-6 h-6" }),
                    }),
                  ],
                }),
                r.jsx("div", {
                  className: "flex-1 px-6 py-4 overflow-y-auto",
                  children: r.jsxs("div", {
                    className: "space-y-6",
                    children: [
                      ue(),
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
                                    value: m,
                                    onChange: (N) =>
                                      P(parseInt(N.target.value) || 0),
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
                                    onChange: (N) =>
                                      _(parseInt(N.target.value) || 0),
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
                                T
                                  ? "bg-green-50 text-green-700 border border-green-200"
                                  : "bg-red-50 text-red-700 border border-red-200"
                              }`,
                              children: T
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
                                  ((we = n == null ? void 0 : n.contents) ==
                                  null
                                    ? void 0
                                    : we.filter(
                                        (N) => N.type === "sub_container"
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
                      onClick: J,
                      disabled: R,
                      className:
                        "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                      children: x("button.cancel"),
                    }),
                    r.jsxs("button", {
                      onClick: V,
                      disabled: !T || R,
                      className:
                        "px-6 py-2 text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center space-x-2",
                      children: [
                        R && r.jsx(It, { className: "w-4 h-4 animate-spin" }),
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
  $h = ({ isOpen: e, onClose: t, storeShelf: n }) => {
    const {
        showNotification: s,
        medicineList: o,
        isLoadingMedicines: l,
        addStockToShelf: a,
        selectedStockItemForEdit: i,
        storeItemModalMode: c,
        updateStockInShelf: x,
      } = tt(),
      [g, h] = f.useState(""),
      [m, j] = f.useState(""),
      [S, M] = f.useState(""),
      [R, d] = f.useState(""),
      [u, p] = f.useState([]),
      [E, P] = f.useState([]),
      [_, T] = f.useState(""),
      [V, X] = f.useState(""),
      [J, ue] = f.useState(""),
      [we, N] = f.useState(""),
      [w, L] = f.useState(null),
      [v, b] = f.useState([]),
      [D, I] = f.useState(""),
      [ne, G] = f.useState(!1),
      W = f.useRef(null);
    f.useEffect(() => {
      if (e && c === "edit" && i) {
        h(i.code || ""), j(i.name || ""), M(""), d(i.material_no || "");
        const k = i.lot || [],
          C = i.expiry_date || [],
          se = i.qty || [],
          oe = [];
        if (k.length > 0 || C.length > 0 || se.length > 0) {
          const ce = Math.max(k.length, C.length, se.length),
            $ = [];
          for (let B = 0; B < ce; B++) {
            const q = C[B] || "";
            let re = "";
            q && (re = q.split("T")[0]),
              (re = re.replace(/\//g, "-")),
              $.push({
                id: `batch_${Date.now()}_${B}`,
                lot: k[B] || "",
                expiryDate: re,
                qty: String(se[B] || ""),
              }),
              re && oe.push(re);
          }
          p($), P(oe), p([]);
        } else P([]);
        const Z = (i.location || "0,0").split(",");
        T(Z[0] || "0"), X(Z[1] || "0"), ue(i.led_index || ""), N(i.ip || "");
      } else if (e && c === "add") {
        if (
          (h(""),
          j(""),
          M(""),
          d(""),
          p([]),
          P([]),
          ue(""),
          N(""),
          n && n.medMapStock && n.medMapStock.length > 0)
        ) {
          const k = n.medMapStock.map((se) => {
            const U = (se.location || "0,0").split(",");
            return Number(U[0] || "0");
          });
          let C = 0;
          for (; k.includes(C); ) C++;
          T(String(C));
        } else T("0");
        X("0");
      }
    }, [e, c, i, n]),
      f.useEffect(() => {
        const k = (C) => {
          W.current && !W.current.contains(C.target) && L(null);
        };
        return (
          document.addEventListener("mousedown", k),
          () => {
            document.removeEventListener("mousedown", k);
          }
        );
      }, []);
    const je = (k, C) => {
        if (!C.trim()) {
          b([]);
          return;
        }
        const se = C.toLowerCase(),
          oe = o.filter((U) => {
            var Z, ce, $, B;
            switch (k) {
              case "code":
                return (Z = U.CODE) == null
                  ? void 0
                  : Z.toLowerCase().includes(se);
              case "name":
                return (ce = U.NAME) == null
                  ? void 0
                  : ce.toLowerCase().includes(se);
              case "chineseName":
                return ($ = U.CHT_NAME) == null
                  ? void 0
                  : $.toLowerCase().includes(se);
              case "skdiacode":
                return (B = U.SKDIACODE) == null
                  ? void 0
                  : B.toLowerCase().includes(se);
              default:
                return !1;
            }
          });
        b(oe.slice(0, 50));
      },
      de = (k, C) => {
        switch ((L(k), k)) {
          case "code":
            h(C);
            break;
          case "name":
            j(C);
            break;
          case "chineseName":
            M(C);
            break;
          case "skdiacode":
            d(C);
            break;
        }
        je(k, C);
      },
      z = (k, C) => {
        switch (C) {
          case "code":
            h(k.CODE || ""),
              j(k.NAME || ""),
              M(k.CHT_NAME || ""),
              d(k.SKDIACODE || "");
            break;
          case "name":
            h(k.CODE || ""),
              j(k.NAME || ""),
              M(k.CHT_NAME || ""),
              d(k.SKDIACODE || "");
            break;
          case "chineseName":
            h(k.CODE || ""),
              j(k.NAME || ""),
              M(k.CHT_NAME || ""),
              d(k.SKDIACODE || "");
            break;
          case "skdiacode":
            h(k.CODE || ""),
              j(k.NAME || ""),
              M(k.CHT_NAME || ""),
              d(k.SKDIACODE || "");
            break;
        }
        I(k.GUID), L(null), b([]);
      },
      xe = () => {
        const k = {
          id: `batch_${Date.now()}`,
          lot: "",
          expiryDate: "",
          qty: "",
        };
        p([...u, k]);
      },
      F = (k) => {
        p(u.filter((C) => C.id !== k));
      },
      ge = (k, C, se) => {
        p(u.map((oe) => (oe.id === k ? { ...oe, [C]: se } : oe)));
      },
      he = async () => {
        var oe;
        if (!g || !m) {
          s("請選擇藥品", "error");
          return;
        }
        if (!n || !n.GUID) {
          s("層架資訊錯誤", "error");
          return;
        }
        const k = [],
          C = [],
          se = [];
        u.forEach((U) => {
          k.push(U.lot || "");
          let Z = "";
          U.expiryDate && (Z = `${U.expiryDate}`),
            C.push(Z),
            se.push(U.qty ? `${Number(U.qty)}` : "0");
        });
        try {
          if (c === "edit" && i) {
            const U = {
                GUID: i.GUID,
                code: g,
                device_type: "EPD290",
                expiry_date: C,
                ip_light: we || "",
                led_index: J || "",
                location: `${_ || "0"},${V || "0"}`,
                lot: k,
                material_no: R || "",
                name: m,
                qty: se,
                shelf_guid: n.GUID,
              },
              Z = await ke.updateStock([U]);
            if (Z.Code === 200) {
              x(n.GUID, i.GUID, U), console.log("檢查有無貨物批次被刪除");
              const ce = E.filter(($) => !C.includes($));
              if ((console.log(ce), ce.length > 0)) {
                console.log("🗑️ 檢測到被刪除的批次效期:", ce);
                let $ = "";
                try {
                  i.Value &&
                    (($ = JSON.parse(i.Value).GUID || ""),
                    console.log("📦 從 Value 欄位解析出的 GUID:", $));
                } catch (B) {
                  console.error("❌ 解析 Value 欄位失敗:", B);
                }
                if ($) {
                  for (const B of ce)
                    try {
                      console.log(`🗑️ 正在刪除批次，GUID: ${$}, 效期: ${B}`);
                      const q = await ke.stockDeleteValidityPeriod($, B);
                      q.Code === 200
                        ? console.log(`✅ 成功刪除批次效期: ${B}`)
                        : console.warn(
                            `⚠️ 刪除批次失敗 (效期: ${B}):`,
                            q.Result
                          );
                    } catch (q) {
                      console.error(`❌ 刪除批次時發生錯誤 (效期: ${B}):`, q);
                    }
                  s(`更新貨物成功，已刪除 ${ce.length} 個批次`, "success");
                } else
                  console.warn("⚠️ 無法取得 Value GUID，跳過批次刪除"),
                    s("更新貨物成功（但無法刪除批次）", "success");
              } else s("更新貨物成功", "success");
              Te();
            } else s(Z.Result || "更新貨物失敗", "error");
          } else {
            const U = {
                code: g,
                device_type: "EPD290",
                expiry_date: C,
                ip_light: we || "",
                led_index: J || "",
                location: `${_ || "0"},${V || "0"}`,
                lot: k,
                material_no: R || "",
                name: m,
                qty: se,
                shelf_guid: n.GUID,
              },
              Z = await ke.addStock([U]);
            Z.Code === 200
              ? (a(n.GUID, {
                  GUID:
                    ((oe = Z.Data) == null ? void 0 : oe.GUID) ||
                    `stock_${Date.now()}`,
                  ...U,
                }),
                s("新增貨物成功", "success"),
                Te())
              : s(Z.Result || "新增貨物失敗", "error");
          }
        } catch (U) {
          console.error("貨物操作錯誤:", U),
            s(
              c === "edit"
                ? "更新貨物失敗，請稍後再試"
                : "新增貨物失敗，請稍後再試",
              "error"
            );
        }
      },
      me = (k, C) => {
        console.log("📸 掃描成功，填入藥品資料:", C),
          h(C[0].CODE || C[0].code || ""),
          j(C[0].NAME || C[0].name || ""),
          M(C[0].CHT_NAME || C[0].cht_name || ""),
          d(C[0].SKDIACODE || C[0].skdiacode || C[0].material_no || ""),
          I(C[0].GUID || ""),
          G(!1),
          s("已自動填入藥品資料", "success");
      },
      Te = () => {
        h(""),
          j(""),
          M(""),
          d(""),
          p([]),
          P([]),
          T(""),
          X(""),
          ue(""),
          N(""),
          I(""),
          b([]),
          L(null),
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
                      onClick: Te,
                      className:
                        "p-2 hover:bg-gray-100 rounded-full transition-colors",
                      children: r.jsx(Xe, { className: "w-5 h-5" }),
                    }),
                  ],
                }),
                r.jsx("div", {
                  className: "p-4 space-y-2",
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
                            className: "space-y-2",
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
                                    onClick: () => G(!0),
                                    className:
                                      "hover:bg-gray-100 rounded-lg transition-colors p-2",
                                    title: "掃描條碼",
                                    children: r.jsx(Lr, {
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
                                    ref: w === "code" ? W : null,
                                    children: [
                                      r.jsx("label", {
                                        className:
                                          "block text-sm font-medium text-gray-700 mb-1",
                                        children: "藥碼",
                                      }),
                                      r.jsx("input", {
                                        type: "text",
                                        value: g,
                                        onChange: (k) =>
                                          de("code", k.target.value),
                                        onFocus: () => L("code"),
                                        className:
                                          "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        placeholder: "輸入藥品代碼",
                                      }),
                                      w === "code" &&
                                        v.length > 0 &&
                                        r.jsx("div", {
                                          className:
                                            "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto",
                                          children: v.map((k) =>
                                            r.jsxs(
                                              "div",
                                              {
                                                onClick: () => z(k, "code"),
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
                                                        children: k.CODE,
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-600",
                                                        children: "|",
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-700",
                                                        children: k.NAME,
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
                                                        children: k.CHT_NAME,
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
                                                          k.SKDIACODE,
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              },
                                              k.GUID
                                            )
                                          ),
                                        }),
                                    ],
                                  }),
                                  r.jsxs("div", {
                                    className: "relative",
                                    ref: w === "name" ? W : null,
                                    children: [
                                      r.jsx("label", {
                                        className:
                                          "block text-sm font-medium text-gray-700 mb-1",
                                        children: "藥名",
                                      }),
                                      r.jsx("input", {
                                        type: "text",
                                        value: m,
                                        onChange: (k) =>
                                          de("name", k.target.value),
                                        onFocus: () => L("name"),
                                        className:
                                          "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        placeholder: "輸入藥品名稱",
                                      }),
                                      w === "name" &&
                                        v.length > 0 &&
                                        r.jsx("div", {
                                          className:
                                            "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto",
                                          children: v.map((k) =>
                                            r.jsxs(
                                              "div",
                                              {
                                                onClick: () => z(k, "name"),
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
                                                        children: k.CODE,
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-600",
                                                        children: "|",
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-700",
                                                        children: k.NAME,
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
                                                        children: k.CHT_NAME,
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
                                                          k.SKDIACODE,
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              },
                                              k.GUID
                                            )
                                          ),
                                        }),
                                    ],
                                  }),
                                  r.jsxs("div", {
                                    className: "relative",
                                    ref: w === "chineseName" ? W : null,
                                    children: [
                                      r.jsx("label", {
                                        className:
                                          "block text-sm font-medium text-gray-700 mb-1",
                                        children: "中文名",
                                      }),
                                      r.jsx("input", {
                                        type: "text",
                                        value: S,
                                        onChange: (k) =>
                                          de("chineseName", k.target.value),
                                        onFocus: () => L("chineseName"),
                                        className:
                                          "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        placeholder: "輸入中文名稱",
                                      }),
                                      w === "chineseName" &&
                                        v.length > 0 &&
                                        r.jsx("div", {
                                          className:
                                            "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto",
                                          children: v.map((k) =>
                                            r.jsxs(
                                              "div",
                                              {
                                                onClick: () =>
                                                  z(k, "chineseName"),
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
                                                        children: k.CODE,
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-600",
                                                        children: "|",
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-700",
                                                        children: k.NAME,
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
                                                        children: k.CHT_NAME,
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
                                                          k.SKDIACODE,
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              },
                                              k.GUID
                                            )
                                          ),
                                        }),
                                    ],
                                  }),
                                  r.jsxs("div", {
                                    className: "relative",
                                    ref: w === "skdiacode" ? W : null,
                                    children: [
                                      r.jsx("label", {
                                        className:
                                          "block text-sm font-medium text-gray-700 mb-1",
                                        children: "料號",
                                      }),
                                      r.jsx("input", {
                                        type: "text",
                                        value: R,
                                        onChange: (k) =>
                                          de("skdiacode", k.target.value),
                                        onFocus: () => L("skdiacode"),
                                        className:
                                          "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        placeholder: "輸入料號",
                                      }),
                                      w === "skdiacode" &&
                                        v.length > 0 &&
                                        r.jsx("div", {
                                          className:
                                            "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto",
                                          children: v.map((k) =>
                                            r.jsxs(
                                              "div",
                                              {
                                                onClick: () =>
                                                  z(k, "skdiacode"),
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
                                                        children: k.CODE,
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-600",
                                                        children: "|",
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-700",
                                                        children: k.NAME,
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
                                                        children: k.CHT_NAME,
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
                                                          k.SKDIACODE,
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              },
                                              k.GUID
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
                            className: "space-y-2",
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
                                    onClick: xe,
                                    className:
                                      "flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg transition-colors",
                                    title: "新增批次",
                                    children: [
                                      r.jsx(Dt, { className: "w-4 h-4" }),
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
                                    children: u.map((k, C) =>
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
                                                  children: ["批次 ", C + 1],
                                                }),
                                                r.jsx("button", {
                                                  onClick: () => F(k.id),
                                                  className:
                                                    "p-1 text-red-600 hover:bg-red-50 rounded transition-colors",
                                                  title: "刪除批次",
                                                  children: r.jsx(Sr, {
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
                                                      value: k.lot,
                                                      onChange: (se) =>
                                                        ge(
                                                          k.id,
                                                          "lot",
                                                          se.target.value
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
                                                      value: k.expiryDate,
                                                      onChange: (se) =>
                                                        ge(
                                                          k.id,
                                                          "expiryDate",
                                                          se.target.value
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
                                                      value: k.qty,
                                                      onChange: (se) =>
                                                        ge(
                                                          k.id,
                                                          "qty",
                                                          se.target.value
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
                                        k.id
                                      )
                                    ),
                                  }),
                            ],
                          }),
                          r.jsxs("div", {
                            className: "space-y-2",
                            children: [
                              r.jsx("h3", {
                                className:
                                  "text-lg font-semibold text-gray-700 border-b pb-2",
                                children: "位置與設備資訊",
                              }),
                              r.jsxs("div", {
                                className: "grid grid-cols-2 gap-4 mb-4",
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
                                        onChange: (k) => T(k.target.value),
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
                                        children: "深度",
                                      }),
                                      r.jsx("input", {
                                        type: "text",
                                        value: V,
                                        onChange: (k) => X(k.target.value),
                                        className:
                                          "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        placeholder: "輸入深度",
                                      }),
                                    ],
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
                                          "block text-sm font-medium text-gray-700 mb-1",
                                        children: "LED 索引",
                                      }),
                                      r.jsx("input", {
                                        type: "text",
                                        value: J,
                                        onChange: (k) => ue(k.target.value),
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
                                        value: we,
                                        onChange: (k) => N(k.target.value),
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
                      onClick: Te,
                      className:
                        "px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors",
                      children: "取消",
                    }),
                    r.jsx("button", {
                      onClick: he,
                      disabled: l || o.length === 0,
                      className:
                        "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:bg-gray-400",
                      children: c === "edit" ? "修改" : "新增",
                    }),
                  ],
                }),
              ],
            }),
            r.jsx(tl, {
              isOpen: ne,
              onClose: () => G(!1),
              onScanSuccess: me,
              mode: "set_store_med_mode",
            }),
          ],
        })
      : null;
  },
  Ah = ({ isOpen: e, onClose: t }) => {
    const {
        selectedDepartmentType: n,
        apiDepartmentData: s,
        allDepartmentsList: o,
        showNotification: l,
        triggerRefresh: a,
        reloadMedMapData: i,
      } = tt(),
      [c, x] = f.useState(null),
      [g, h] = f.useState(""),
      [m, j] = f.useState(!1),
      S = () => (s ? s.map((T) => T.name) : []),
      M = () => (!n || !o ? [] : o.filter((T) => T["department_type "] === n)),
      R = () => {
        const T = S();
        return M().filter((X) => !T.includes(X.name));
      },
      d = () => (s ? s.map((T) => T.gird_position) : []),
      u = () => {
        const T = d(),
          V = [];
        for (let X = 0; X < 10; X++)
          for (let J = 0; J < 10; J++) {
            const ue = `${X},${J}`;
            T.includes(ue) || V.push(ue);
          }
        return V.slice(0, 20);
      };
    f.useEffect(() => {
      e && (x(null), h(""));
    }, [e]);
    const p = async () => {
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
          const T = await ke.addMedMap(c.name, c.type, g);
          T.Code === 200
            ? (l("新增部門成功", "success"), await i(), E())
            : l(T.Result || "新增部門失敗", "error");
        } catch (T) {
          console.error("新增部門錯誤:", T),
            l("新增部門失敗，請稍後再試", "error");
        } finally {
          j(!1);
        }
      },
      E = () => {
        x(null), h(""), t();
      };
    if (!e) return null;
    const P = R(),
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
                onClick: E,
                className:
                  "p-2 hover:bg-gray-100 rounded-full transition-colors",
                children: r.jsx(Xe, { className: "w-5 h-5" }),
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
                  P.length === 0
                    ? r.jsx("div", {
                        className: "text-center py-8",
                        children: r.jsx("p", {
                          className: "text-gray-600",
                          children: "所有部門都已新增",
                        }),
                      })
                    : r.jsx("div", {
                        className: "space-y-2",
                        children: P.map((T) =>
                          r.jsxs(
                            "label",
                            {
                              className: `flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                                (c == null ? void 0 : c.name) === T.name
                                  ? "border-blue-500 bg-blue-50"
                                  : "border-gray-200 hover:border-blue-300 hover:bg-gray-50"
                              }`,
                              children: [
                                r.jsx("input", {
                                  type: "radio",
                                  name: "department",
                                  value: T.name,
                                  checked:
                                    (c == null ? void 0 : c.name) === T.name,
                                  onChange: () => x(T),
                                  className:
                                    "w-4 h-4 text-blue-600 focus:ring-blue-500",
                                }),
                                r.jsxs("div", {
                                  className: "ml-3",
                                  children: [
                                    r.jsx("div", {
                                      className:
                                        "text-sm font-medium text-gray-900",
                                      children: T.name,
                                    }),
                                    r.jsx("div", {
                                      className: "text-xs text-gray-500",
                                      children: T.type,
                                    }),
                                  ],
                                }),
                              ],
                            },
                            T.name
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
                          children: _.map((T) => {
                            const [V, X] = T.split(",");
                            return r.jsxs(
                              "button",
                              {
                                onClick: () => h(T),
                                className: `p-3 border-2 rounded-lg text-sm font-medium transition-all ${
                                  g === T
                                    ? "border-blue-500 bg-blue-500 text-white"
                                    : "border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-700"
                                }`,
                                children: ["(", V, ",", X, ")"],
                              },
                              T
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
                onClick: E,
                className:
                  "px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors",
                disabled: m,
                children: "取消",
              }),
              r.jsx("button", {
                onClick: p,
                disabled: !c || !g || m,
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
  Oh = ({ isOpen: e, onClose: t, initialBarcode: n = "" }) => {
    const {
        showNotification: s,
        medicineList: o,
        isLoadingMedicines: l,
      } = tt(),
      [a, i] = f.useState(""),
      [c, x] = f.useState(""),
      [g, h] = f.useState(""),
      [m, j] = f.useState(""),
      [S, M] = f.useState(""),
      [R, d] = f.useState(null),
      [u, p] = f.useState([]),
      [E, P] = f.useState(""),
      [_, T] = f.useState(null),
      [V, X] = f.useState(!1),
      J = f.useRef(null);
    f.useEffect(() => {
      e && (i(n), x(""), h(""), j(""), M(""), P(""), T(null), d(null));
    }, [e, n]),
      f.useEffect(() => {
        const v = (b) => {
          J.current && !J.current.contains(b.target) && d(null);
        };
        return (
          document.addEventListener("mousedown", v),
          () => {
            document.removeEventListener("mousedown", v);
          }
        );
      }, []);
    const ue = (v, b) => {
        if (!b.trim() || l) {
          p([]);
          return;
        }
        const D = b.toLowerCase(),
          I = o.filter((ne) => {
            var G, W, je, de;
            switch (v) {
              case "code":
                return (G = ne.CODE) == null
                  ? void 0
                  : G.toLowerCase().includes(D);
              case "name":
                return (W = ne.NAME) == null
                  ? void 0
                  : W.toLowerCase().includes(D);
              case "chineseName":
                return (je = ne.CHT_NAME) == null
                  ? void 0
                  : je.toLowerCase().includes(D);
              case "skdiacode":
                return (de = ne.SKDIACODE) == null
                  ? void 0
                  : de.toLowerCase().includes(D);
              default:
                return !1;
            }
          });
        p(I.slice(0, 10));
      },
      we = (v, b) => {
        switch ((d(v), v)) {
          case "code":
            x(b);
            break;
          case "name":
            h(b);
            break;
          case "chineseName":
            j(b);
            break;
          case "skdiacode":
            M(b);
            break;
        }
        ue(v, b);
      },
      N = (v) => {
        P(v.GUID),
          T(v),
          x(v.CODE || ""),
          h(v.NAME || ""),
          j(v.CHT_NAME || ""),
          M(v.SKDIACODE || ""),
          d(null),
          p([]);
      },
      w = () => {
        i(""), x(""), h(""), j(""), M(""), P(""), T(null), d(null), p([]), t();
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
        X(!0);
        try {
          let v = [];
          if (_ && _.BARCODE2)
            try {
              const D = JSON.parse(_.BARCODE2);
              Array.isArray(D)
                ? (v = [...D])
                : typeof D == "string" && (v = [D]);
            } catch {
              console.warn("解析 BARCODE2 失敗，使用原始值:", _.BARCODE2),
                _.BARCODE2 && (v = [_.BARCODE2]);
            }
          v.includes(a.trim()) || v.push(a.trim()),
            console.log("📋 處理後的 BARCODE2 陣列:", v);
          const b = await ke.addMedClouds(
            a.trim(),
            c.trim(),
            JSON.stringify(v),
            _.BARCODE
          );
          b.Code === 200
            ? (s("條碼建立成功", "success"), w())
            : s(b.Result || "建立條碼失敗", "error");
        } catch (v) {
          console.error("建立條碼失敗:", v),
            s("建立條碼失敗，請稍後再試", "error");
        } finally {
          X(!1);
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
                        children: r.jsx(Dt, {
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
                    onClick: w,
                    className:
                      "p-2 hover:bg-gray-100 rounded-lg transition-colors",
                    disabled: V,
                    children: r.jsx(Xe, { className: "w-6 h-6 text-gray-600" }),
                  }),
                ],
              }),
              r.jsx("div", {
                className: "flex-1 overflow-y-auto p-6",
                children: r.jsxs("div", {
                  className: "space-y-4",
                  ref: J,
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
                          onChange: (v) => we("code", v.target.value),
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
                            children: u.map((v) =>
                              r.jsxs(
                                "div",
                                {
                                  onClick: () => N(v),
                                  className:
                                    "px-4 py-2 hover:bg-green-50 cursor-pointer border-b border-gray-100 last:border-b-0",
                                  children: [
                                    r.jsx("div", {
                                      className: "font-medium text-gray-800",
                                      children: v.CODE,
                                    }),
                                    r.jsx("div", {
                                      className: "text-sm text-gray-600",
                                      children: v.NAME,
                                    }),
                                  ],
                                },
                                v.GUID
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
                          onChange: (v) => we("name", v.target.value),
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
                            children: u.map((v) =>
                              r.jsxs(
                                "div",
                                {
                                  onClick: () => N(v),
                                  className:
                                    "px-4 py-2 hover:bg-green-50 cursor-pointer border-b border-gray-100 last:border-b-0",
                                  children: [
                                    r.jsx("div", {
                                      className: "font-medium text-gray-800",
                                      children: v.NAME,
                                    }),
                                    r.jsx("div", {
                                      className: "text-sm text-gray-600",
                                      children: v.CODE,
                                    }),
                                  ],
                                },
                                v.GUID
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
                          value: m,
                          onChange: (v) => we("chineseName", v.target.value),
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
                            children: u.map((v) =>
                              r.jsxs(
                                "div",
                                {
                                  onClick: () => N(v),
                                  className:
                                    "px-4 py-2 hover:bg-green-50 cursor-pointer border-b border-gray-100 last:border-b-0",
                                  children: [
                                    r.jsx("div", {
                                      className: "font-medium text-gray-800",
                                      children: v.CHT_NAME,
                                    }),
                                    r.jsx("div", {
                                      className: "text-sm text-gray-600",
                                      children: v.CODE,
                                    }),
                                  ],
                                },
                                v.GUID
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
                          onChange: (v) => we("skdiacode", v.target.value),
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
                            children: u.map((v) =>
                              r.jsxs(
                                "div",
                                {
                                  onClick: () => N(v),
                                  className:
                                    "px-4 py-2 hover:bg-green-50 cursor-pointer border-b border-gray-100 last:border-b-0",
                                  children: [
                                    r.jsx("div", {
                                      className: "font-medium text-gray-800",
                                      children: v.SKDIACODE,
                                    }),
                                    r.jsx("div", {
                                      className: "text-sm text-gray-600",
                                      children: v.NAME,
                                    }),
                                  ],
                                },
                                v.GUID
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
                      onClick: w,
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
        const [m, j] = h.split(",").map(Number);
        return { row: m || 0, col: j || 0 };
      },
      a = (h) => {
        if (!h || h.length === 0)
          return { sortedContents: [], maxRow: 0, maxCol: 0 };
        const m = h.map((R) => ({
            ...R,
            gridPos: l(R.gird_position || "0,0"),
          })),
          j = Math.max(...m.map((R) => R.gridPos.row), 0),
          S = Math.max(...m.map((R) => R.gridPos.col), 0);
        return {
          sortedContents: m.sort((R, d) =>
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
        const m = [
          "med_box",
          "dispensing_shelves",
          "store_shelves",
          "grid_draw",
          "list_draw",
        ].includes(h.type);
        return r.jsx(
          "div",
          {
            className: `${m ? "shadow-sm border-2 p-1 rounded-lg" : ""} ${i(
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
      x = (h, m, j) => {
        const S = {};
        return (
          h.forEach((M) => {
            const R = l(M.gird_position || "0,0");
            S[`${R.row},${R.col}`] = M;
          }),
          r.jsx("table", {
            className: "w-full h-full max-w-full table-fixed",
            style: { borderCollapse: "separate", borderSpacing: "0px" },
            children: r.jsx("tbody", {
              children: Array.from({ length: m + 1 }, (M, R) =>
                r.jsx(
                  "tr",
                  {
                    children: Array.from({ length: j + 1 }, (d, u) => {
                      const p = `${R},${u}`,
                        E = S[p];
                      return E
                        ? r.jsx(
                            "td",
                            {
                              className:
                                "align-top bg-transparent overflow-hidden",
                              style: {
                                width: `${100 / (j + 1)}%`,
                                maxWidth: `${100 / (j + 1)}%`,
                              },
                              children: c(E),
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
              const { sortedContents: m, maxRow: j, maxCol: S } = a(h.contents);
              return x(m, j, S);
            } else return r.jsx("div", { className: "" });
          case "sub_container":
            if (h.contents && h.contents.length > 0) {
              const { sortedContents: m, maxRow: j, maxCol: S } = a(h.contents);
              return x(m, j, S);
            } else return r.jsx("div", { className: "" });
          case "dispensing_shelves":
            if (h.contents && h.contents.length > 0) {
              const { sortedContents: m, maxRow: j, maxCol: S } = a(h.contents);
              return x(m, j, S);
            } else
              return r.jsx("div", {
                className:
                  "border-2 rounded-lg flex py-3 items-center justify-center h-full text-gray-400 text-sm",
                children: "無藥盒",
              });
          case "store_shelves":
            if (h.medMapStock && h.medMapStock.length > 0) {
              const m = h.medMapStock,
                j = {};
              m.forEach((R) => {
                const d = R.location || R.gird_position || "0,0",
                  [u, p] = d.split(",").map(Number);
                j[u] || (j[u] = []),
                  j[u].push({ ...R, _position: u, _depth: p });
              });
              const S = Object.keys(j)
                  .map(Number)
                  .sort((R, d) => R - d),
                M = S.length;
              return (
                Math.max(...S.map((R) => j[R].length)),
                r.jsx("div", {
                  className: "flex h-full w-full overflow-hidden gap-1",
                  children: S.map((R) => {
                    const d = j[R].sort((P, _) => _._depth - P._depth),
                      u = M > 0 ? 100 / M : 100,
                      p = d.length,
                      E = p > 0 ? 100 / p : 100;
                    return r.jsx(
                      "div",
                      {
                        className: "flex flex-col h-full",
                        style: { width: `${u}%` },
                        children: d.map((P, _) => {
                          let T = 0;
                          P.qty &&
                            P.qty.forEach((we) => {
                              T += +we;
                            });
                          const V = t && (P.code == t || P.material_no == t),
                            X = n.includes(P.code) || n.includes(P.material_no),
                            J = o(),
                            ue = _ === p - 1;
                          return r.jsxs(
                            "div",
                            {
                              className: `border-2 rounded-lg border-gray-300 p-2 flex flex-col text-gray-800 justify-center items-center transition-colors cursor-pointer min-w-0 overflow-hidden ${
                                ue ? "" : "mb-1"
                              } ${
                                X
                                  ? "highlight-breathe-red"
                                  : V
                                  ? `highlight-breathe-${J}`
                                  : ""
                              }`,
                              style: {
                                height: `calc(${E}% - ${
                                  ue ? "0px" : "0.25rem"
                                })`,
                              },
                              onClick: () =>
                                s &&
                                s({
                                  code: P.code || P.material_no,
                                  name: P.name,
                                }),
                              children: [
                                r.jsx("div", {
                                  className:
                                    "text-sm font-semibold truncate w-full text-center whitespace-normal overflow-hidden",
                                  children: P.name || P.material_no,
                                }),
                                r.jsxs("div", {
                                  className: "text-xs mt-1",
                                  children: ["數量: ", T || 0],
                                }),
                              ],
                            },
                            P.GUID || _
                          );
                        }),
                      },
                      R
                    );
                  }),
                })
              );
            } else if (h.contents && h.contents.length > 0) {
              const { sortedContents: m, maxRow: j, maxCol: S } = a(h.contents);
              return x(m, j, S);
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
              const m = t && h.med_info.some((M) => M.code == t),
                j = h.med_info.some((M) => n.includes(M.code)),
                S = o();
              return r.jsx("div", {
                className: `text-sm text-center h-full p-2 flex flex-col text-gray-800 justify-center transition-colors cursor-pointer overflow-hidden ${
                  j
                    ? "highlight-breathe-red"
                    : m
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
              const { sortedContents: m, maxRow: j, maxCol: S } = a(h.contents);
              return x(m, j, S);
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
      [h, m] = f.useState(null),
      [j, S] = f.useState(!1),
      [M, R] = f.useState(!1),
      [d, u] = f.useState(""),
      [p, E] = f.useState(""),
      [P, _] = f.useState([]),
      [T, V] = f.useState([]),
      [X, J] = f.useState([]),
      [ue, we] = f.useState(!1),
      [N, w] = f.useState(!1),
      L = f.useRef(null),
      v = f.useRef(null),
      b = f.useRef(null),
      D = f.useRef(null);
    f.useEffect(() => {
      if (e && s) {
        const C = s.issuedQuantity || s.requestedQuantity || "0";
        a(C), c(C), g(null), m(null), S(!1);
        const se = localStorage.getItem("medMap_setting");
        if (se)
          try {
            const oe = JSON.parse(se);
            u(oe.default_person || ""), E(oe.default_person_id || "");
          } catch (oe) {
            console.error("讀取設定失敗:", oe), u(""), E("");
          }
        else u(""), E("");
        I();
      }
    }, [e, s]),
      f.useEffect(() => {
        const C = (se) => {
          b.current &&
            !b.current.contains(se.target) &&
            L.current &&
            !L.current.contains(se.target) &&
            we(!1),
            D.current &&
              !D.current.contains(se.target) &&
              v.current &&
              !v.current.contains(se.target) &&
              w(!1);
        };
        return (
          document.addEventListener("mousedown", C),
          () => document.removeEventListener("mousedown", C)
        );
      }, []);
    const I = async () => {
        try {
          const C = await ke.getAllStaffInfo();
          C.Code === 200 && C.Data && _(C.Data);
        } catch (C) {
          console.error("獲取人員資料失敗:", C);
        }
      },
      ne = (C) => {
        if ((u(C), C.trim() === "")) {
          V([]), we(!1);
          return;
        }
        const se = P.filter(
          (oe) => oe.name && oe.name.toLowerCase().includes(C.toLowerCase())
        );
        V(se), we(se.length > 0);
      },
      G = (C) => {
        if ((E(C), C.trim() === "")) {
          J([]), w(!1);
          return;
        }
        const se = P.filter(
          (oe) => oe.ID && oe.ID.toLowerCase().includes(C.toLowerCase())
        );
        J(se), w(se.length > 0);
      },
      W = (C) => {
        u(C.name), E(C.ID), we(!1);
      },
      je = (C) => {
        u(C.name), E(C.ID), w(!1);
      };
    if (!e || !s) return null;
    const de = (C) => {
        if (j) a(C), c(C), S(!1);
        else {
          const se = l === "0" ? C : l + C;
          a(se), c(se);
        }
      },
      z = (C) => {
        x && h !== null && !j && xe(), m(i), g(C), S(!0);
      },
      xe = () => {
        if (x === null || h === null) return;
        const C = parseFloat(h),
          se = parseFloat(i);
        let oe = 0;
        switch (x) {
          case "+":
            oe = C + se;
            break;
          case "-":
            oe = C - se;
            break;
          case "×":
            oe = C * se;
            break;
          case "÷":
            oe = se !== 0 ? C / se : 0;
            break;
          default:
            return;
        }
        const U = oe.toString();
        a(U), c(U), g(null), m(null), S(!0);
      },
      F = () => {
        xe();
      },
      ge = () => {
        if (j) a("0."), c("0."), S(!1);
        else if (!l.includes(".")) {
          const C = l + ".";
          a(C), c(C);
        }
      },
      he = () => {
        a("0"), c("0"), g(null), m(null), S(!1);
      },
      me = () => {
        const C = new Date(),
          se = C.getFullYear(),
          oe = String(C.getMonth() + 1).padStart(2, "0"),
          U = String(C.getDate()).padStart(2, "0"),
          Z = String(C.getHours()).padStart(2, "0"),
          ce = String(C.getMinutes()).padStart(2, "0"),
          $ = String(C.getSeconds()).padStart(2, "0");
        return `${se}-${oe}-${U}T${Z}:${ce}:${$}`;
      },
      Te = async () => {
        if (!s) return;
        if (!d.trim()) {
          alert("請輸入核撥人員名稱");
          return;
        }
        const C = n === "requisition" ? "申領" : "撥補";
        if (
          window.confirm(`確認核撥資訊：

藥品名稱：${s.name}
實際撥發量：${l}
核撥人員：${d}${p ? ` (${p})` : ""}

是否確認${C}？`)
        ) {
          R(!0);
          try {
            const oe = me();
            if (n === "requisition") {
              const U = await ke.updateRequisitionActualQuantity(s.GUID, l);
              if (U.Code !== 200) {
                alert(`更新實際撥發量失敗：${U.Message || "未知錯誤"}`), R(!1);
                return;
              }
              const Z = {
                ...s,
                actualQuantity: l,
                notice: "False",
                state: "已過帳",
                issuingPerson: d,
                issueTime: oe,
              };
              console.log("申領request", Z);
              const ce = await ke.updateRequisitionByGuid(Z);
              if (ce.Code !== 200) {
                alert(`申領過帳失敗：${ce.Message || "未知錯誤"}`), R(!1);
                return;
              }
              console.log("✅ 申領核撥成功:", {
                GUID: s.GUID,
                name: s.name,
                actualQuantity: l,
                issuingPerson: d,
                issueTime: oe,
              });
            } else {
              const U = await ke.updateDistributionActualQuantity(s.GUID, l);
              if (U.Code !== 200) {
                alert(`更新實際撥發量失敗：${U.Message || "未知錯誤"}`), R(!1);
                return;
              }
              const Z = {
                ...s,
                actualQuantity: l,
                notice: "False",
                state: "已過帳",
                issuer: d,
                issuanceTime: oe,
              };
              console.log("撥補request", Z);
              const ce = await ke.updateDistributionByGuid(Z);
              if (ce.Code !== 200) {
                alert(`撥補過帳失敗：${ce.Message || "未知錯誤"}`), R(!1);
                return;
              }
              console.log("✅ 撥補核撥成功:", {
                GUID: s.GUID,
                name: s.name,
                actualQuantity: l,
                issuer: d,
                issuanceTime: oe,
              });
            }
            o && (await o()), alert(`${C}核撥成功！`), t();
          } catch (oe) {
            console.error(`${C}核撥失敗:`, oe),
              alert(`${C}核撥失敗，請稍後再試`);
          } finally {
            R(!1);
          }
        }
      },
      k = n === "requisition" ? s.requestedQuantity : s.issuedQuantity;
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
                  children: r.jsx(Xe, { className: "w-5 h-5 text-gray-700" }),
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
                                onChange: (C) => ne(C.target.value),
                                onFocus: () => {
                                  d.trim() && ne(d);
                                },
                                placeholder: "人員名稱",
                                className:
                                  "w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                              }),
                              ue &&
                                r.jsx("div", {
                                  ref: b,
                                  className:
                                    "absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-40 overflow-y-auto",
                                  children: T.map((C, se) =>
                                    r.jsxs(
                                      "div",
                                      {
                                        onClick: () => W(C),
                                        className:
                                          "px-3 py-2 hover:bg-blue-50 cursor-pointer transition-colors",
                                        children: [
                                          r.jsx("div", {
                                            className: "text-xs text-gray-500",
                                            children: C.ID,
                                          }),
                                          r.jsx("div", {
                                            className:
                                              "font-medium text-gray-900 text-sm",
                                            children: C.name,
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
                                ref: v,
                                type: "text",
                                value: p,
                                onChange: (C) => G(C.target.value),
                                onFocus: () => {
                                  p.trim() && G(p);
                                },
                                placeholder: "人員 ID",
                                className:
                                  "w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                              }),
                              N &&
                                r.jsx("div", {
                                  ref: D,
                                  className:
                                    "absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-40 overflow-y-auto",
                                  children: X.map((C, se) =>
                                    r.jsxs(
                                      "div",
                                      {
                                        onClick: () => je(C),
                                        className:
                                          "px-3 py-2 hover:bg-blue-50 cursor-pointer transition-colors",
                                        children: [
                                          r.jsx("div", {
                                            className:
                                              "font-medium text-gray-900 text-sm",
                                            children: C.ID,
                                          }),
                                          r.jsx("div", {
                                            className: "text-xs text-gray-500",
                                            children: C.name,
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
                            children: k || "-",
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
                        onClick: () => de("7"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "7",
                      }),
                      r.jsx("button", {
                        onClick: () => de("8"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "8",
                      }),
                      r.jsx("button", {
                        onClick: () => de("9"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "9",
                      }),
                      r.jsx("button", {
                        onClick: () => z("÷"),
                        className:
                          "py-4 text-lg font-semibold bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-lg transition-colors",
                        children: "÷",
                      }),
                      r.jsx("button", {
                        onClick: () => de("4"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "4",
                      }),
                      r.jsx("button", {
                        onClick: () => de("5"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "5",
                      }),
                      r.jsx("button", {
                        onClick: () => de("6"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "6",
                      }),
                      r.jsx("button", {
                        onClick: () => z("×"),
                        className:
                          "py-4 text-lg font-semibold bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-lg transition-colors",
                        children: "×",
                      }),
                      r.jsx("button", {
                        onClick: () => de("1"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "1",
                      }),
                      r.jsx("button", {
                        onClick: () => de("2"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "2",
                      }),
                      r.jsx("button", {
                        onClick: () => de("3"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "3",
                      }),
                      r.jsx("button", {
                        onClick: () => z("-"),
                        className:
                          "py-4 text-lg font-semibold bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-lg transition-colors",
                        children: "-",
                      }),
                      r.jsx("button", {
                        onClick: () => de("0"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "0",
                      }),
                      r.jsx("button", {
                        onClick: ge,
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
                        onClick: () => z("+"),
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
                  onClick: he,
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
                  onClick: Te,
                  disabled: M,
                  className:
                    "px-6 py-2.5 font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                  children: M ? "處理中..." : "核撥",
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
    const { setHighlightedMedicineCode: a } = tt(),
      [i, c] = f.useState(s),
      [x, g] = f.useState(o),
      [h, m] = f.useState(null),
      [j, S] = f.useState(!1),
      [M, R] = f.useState(null),
      [d, u] = f.useState("requisition"),
      [p, E] = f.useState(!1),
      [P, _] = f.useState(!1);
    mo.useEffect(() => {
      c(s), g(o);
    }, [s, o]),
      f.useEffect(
        () => () => {
          ps.cleanup();
        },
        []
      );
    const T = async () => {
        var w;
        if (n && !P) {
          if (!n.serverName || !n.serverType) {
            alert("無法取得藥品位置資訊");
            return;
          }
          _(!0);
          try {
            const L = localStorage.getItem("medMap_setting");
            let v = "255,0,0",
              b = "1",
              D = 60;
            if (L)
              try {
                const I = JSON.parse(L);
                (v =
                  {
                    blue: "255,0,0",
                    green: "0,255,0",
                    red: "0,0,255",
                    yellow: "0,255,255",
                    purple: "255,0,255",
                    cyan: "255,255,0",
                  }[I.light_color] || "255,0,0"),
                  (b =
                    ((w = I.brightness) == null ? void 0 : w.toString()) ||
                    "1"),
                  (D = I.light_sec || 60);
              } catch (I) {
                console.error("讀取設定失敗:", I);
              }
            if (p) await ps.turnOffAllLights(), E(!1), a(null);
            else {
              const I = [
                {
                  serverName: n.serverName,
                  serverType: n.serverType,
                  medicineCode: n.code,
                },
              ];
              await ps.startLighting(I, v, b, D * 1e3, () => {
                E(!1), a(null);
              }),
                E(!0),
                a(n.code);
            }
          } catch (L) {
            console.error("亮燈操作失敗:", L);
          } finally {
            _(!1);
          }
        }
      },
      V = async (w) => {
        const L = w.notice === "True" ? "False" : "True";
        m(w.GUID);
        const v = [...i],
          b = v.findIndex((D) => D.GUID === w.GUID);
        if (b === -1) {
          m(null);
          return;
        }
        (v[b] = { ...w, notice: L }), c(v);
        try {
          const D = await ke.updateRequisitionNotice(w.GUID, L);
          D.Code !== 200
            ? ((v[b] = { ...w, notice: w.notice }),
              c(v),
              console.error("更新申領通知狀態失敗:", D))
            : l && l();
        } catch (D) {
          (v[b] = { ...w, notice: w.notice }),
            c(v),
            console.error("更新申領通知狀態失敗:", D);
        } finally {
          m(null);
        }
      },
      X = async (w) => {
        const L = w.notice === "True" ? "False" : "True";
        m(w.GUID);
        const v = [...x],
          b = v.findIndex((D) => D.GUID === w.GUID);
        if (b === -1) {
          m(null);
          return;
        }
        (v[b] = { ...w, notice: L }), g(v);
        try {
          const D = await ke.updateDistributionNotice(w.GUID, L);
          D.Code !== 200
            ? ((v[b] = { ...w, notice: w.notice }),
              g(v),
              console.error("更新撥補通知狀態失敗:", D))
            : l && l();
        } catch (D) {
          (v[b] = { ...w, notice: w.notice }),
            g(v),
            console.error("更新撥補通知狀態失敗:", D);
        } finally {
          m(null);
        }
      };
    if (!e || !n) return null;
    const J = i.filter((w) => w.state === "等待過帳"),
      ue = x.filter((w) => w.state === "等待過帳"),
      we = J.length === 0 && ue.length === 0,
      N = (w) => {
        if (!w || w === "1/01/01 00:00:00" || w === "0001-01-01T00:00:00")
          return "-";
        try {
          const L = new Date(w);
          if (isNaN(L.getTime())) return w;
          const v = L.getFullYear(),
            b = String(L.getMonth() + 1).padStart(2, "0"),
            D = String(L.getDate()).padStart(2, "0"),
            I = String(L.getHours()).padStart(2, "0"),
            ne = String(L.getMinutes()).padStart(2, "0");
          return `${v}/${b}/${D} ${I}:${ne}`;
        } catch {
          return w;
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
                      onClick: T,
                      disabled: P,
                      className: `p-2 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed ${
                        p
                          ? "bg-green-500 text-white hover:bg-green-600 shadow-lg"
                          : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                      }`,
                      title: p ? "點擊關燈" : "點擊亮燈",
                      children: r.jsx(ih, {
                        className: "w-6 h-6",
                        fill: p ? "currentColor" : "none",
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
                    children: r.jsx(Xe, { className: "w-6 h-6 text-gray-700" }),
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
              children: we
                ? r.jsx("div", {
                    className:
                      "flex items-center justify-center h-40 text-gray-400 text-lg",
                    children: "無藥品需求",
                  })
                : r.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      J.map((w, L) =>
                        r.jsxs(
                          "div",
                          {
                            className:
                              "border border-blue-200 rounded-lg p-3 bg-blue-50 hover:shadow-md transition-shadow",
                            onClick: () => {
                              u("requisition"), R(w), S(!0);
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
                                        onClick: (v) => {
                                          v.stopPropagation(), V(w);
                                        },
                                        disabled: h === w.GUID,
                                        className: `p-2 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110 ${
                                          w.notice === "True"
                                            ? "bg-green-500 text-white hover:bg-green-600"
                                            : "bg-gray-300 text-gray-600 hover:bg-gray-400"
                                        }`,
                                        title:
                                          w.notice === "True"
                                            ? "點擊關閉通知"
                                            : "點擊開啟通知",
                                        children: r.jsx(Ec, {
                                          className: "w-5 h-5",
                                        }),
                                      }),
                                    ],
                                  }),
                                  r.jsx("span", {
                                    className: `px-3 text-sm py-2 text-white font-semibold rounded-full ${
                                      w.actionType.includes("緊急")
                                        ? "bg-green-600"
                                        : "bg-blue-600"
                                    }`,
                                    children: w.actionType,
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
                                        children: w.requestingUnit || "-",
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
                                        children: w.requestingPerson || "-",
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
                                        children: w.requestedQuantity || "-",
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
                                        children: N(w.requestTime),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          },
                          w.GUID
                        )
                      ),
                      ue.map((w, L) =>
                        r.jsxs(
                          "div",
                          {
                            className:
                              "border border-yellow-200 rounded-lg p-3 bg-yellow-50 hover:shadow-md transition-shadow",
                            onClick: () => {
                              u("distribution"), R(w), S(!0);
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
                                    onClick: (v) => {
                                      v.stopPropagation(), X(w);
                                    },
                                    disabled: h === w.GUID,
                                    className: `p-2 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110 ${
                                      w.notice === "True"
                                        ? "bg-green-500 text-white hover:bg-green-600"
                                        : "bg-gray-300 text-gray-600 hover:bg-gray-400"
                                    }`,
                                    title:
                                      w.notice === "True"
                                        ? "點擊關閉通知"
                                        : "點擊開啟通知",
                                    children: r.jsx(Ec, {
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
                                        children: w.sourceStoreType || "-",
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
                                        children: w.destinationStoreType || "-",
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
                                        children: w.LOT || "-",
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
                                        children: w.VAL || "-",
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
                                        children: w.issuedQuantity || "-",
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
                                        children: w.reportName || "-",
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
                                        children: N(w.addedTime),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          },
                          w.GUID
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
          data: M,
          onApprove: l,
        }),
      ],
    });
  },
  zh = ({ isOpen: e, onClose: t, container: n }) => {
    const [s, o] = f.useState("list_mode"),
      { highlightedMedicineCode: l, apiDepartmentData: a } = tt(),
      [i, c] = f.useState(!1),
      [x, g] = f.useState([]),
      [h, m] = f.useState([]),
      [j, S] = f.useState([]),
      [M, R] = f.useState(!1),
      [d, u] = f.useState(null),
      p = f.useRef(null),
      E = f.useRef(null),
      P = f.useCallback(
        (N) => {
          if (!a || !N) return null;
          const w = (L) => {
            for (const v of L) {
              if (v.GUID === N) return v;
              if (v.contents && Array.isArray(v.contents)) {
                const b = w(v.contents);
                if (b) return b;
              }
            }
            return null;
          };
          for (const L of a) {
            if (L.GUID === N) return L;
            if (L.contents && Array.isArray(L.contents)) {
              const v = w(L.contents);
              if (v) return v;
            }
          }
          return null;
        },
        [a]
      ),
      _ = n ? P(n.GUID) || n : null,
      T = () => {
        try {
          const w = localStorage.getItem("medMap_setting");
          if (w) {
            const v = JSON.parse(w).light_sec;
            if (v != null && v !== "") {
              const b = Number(v);
              if (!isNaN(b) && b > 0) return b * 1e3;
            }
          }
        } catch (w) {
          console.error("讀取亮燈設定失敗:", w);
        }
        return 6e4;
      },
      V = () => {
        try {
          const N = localStorage.getItem("medMap_setting");
          if (N) return JSON.parse(N).light_color || "red";
        } catch (N) {
          console.error("讀取高亮顏色設定失敗:", N);
        }
        return "red";
      },
      X = f.useCallback(async () => {
        try {
          const N = new Date(),
            w = `${N.getFullYear()}-${String(N.getMonth() + 1).padStart(
              2,
              "0"
            )}-${String(N.getDate()).padStart(2, "0")} 00:00:00`,
            L = `${N.getFullYear()}-${String(N.getMonth() + 1).padStart(
              2,
              "0"
            )}-${String(N.getDate()).padStart(2, "0")} 23:59:59`,
            [v, b] = await Promise.all([
              ke.getRequisitionByTime(w, L),
              ke.getDistributionByTime(w, L),
            ]),
            D = [];
          if (v.Code === 200 && v.Data) {
            const I = v.Data.filter((G) => {
              var W;
              return (W = _ == null ? void 0 : _.med_list) == null
                ? void 0
                : W.some((je) => je.code === G.code);
            });
            m(I),
              I.filter(
                (G) => G.state === "等待過帳" && G.notice === "True"
              ).forEach((G) => {
                G.code && D.push(G.code);
              });
          }
          if (b.Code === 200 && b.Data) {
            const I = b.Data.filter((G) => {
              var W;
              return (W = _ == null ? void 0 : _.med_list) == null
                ? void 0
                : W.some((je) => je.code === G.code);
            });
            S(I),
              I.filter(
                (G) => G.state === "等待過帳" && G.notice === "True"
              ).forEach((G) => {
                G.code && (D.includes(G.code) || D.push(G.code));
              });
          }
          g(D);
        } catch (N) {
          console.error("檢查申領撥補資料失敗:", N);
        }
      }, [_]);
    f.useEffect(
      () => (
        e
          ? (X(),
            E.current && clearInterval(E.current),
            (E.current = setInterval(() => {
              X();
            }, 1e4)))
          : E.current && (clearInterval(E.current), (E.current = null)),
        () => {
          E.current && (clearInterval(E.current), (E.current = null));
        }
      ),
      [e, X]
    ),
      f.useEffect(() => {
        var N;
        _ &&
          console.log("🔄 ContainerDetailModal: currentContainer updated", {
            GUID: _.GUID,
            name: _.name,
            medListCount: ((N = _.med_list) == null ? void 0 : N.length) || 0,
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
          const N = T();
          console.log("✅ ContainerDetailModal - 啟動亮燈:", {
            medicineCode: l,
            duration: N / 1e3 + "秒",
          }),
            p.current && clearTimeout(p.current),
            (p.current = setTimeout(() => {
              console.log("⏱️ ContainerDetailModal - 亮燈時間結束"),
                c(!1),
                (p.current = null);
            }, N));
        } else c(!1);
        return () => {
          p.current && clearTimeout(p.current);
        };
      }, [e, l]);
    const J = (N) => {
      var v, b;
      h.filter((D) => D.code === N.code), j.filter((D) => D.code === N.code);
      const w = (D) => {
          for (const I of D) {
            if (I.type === "store_shelves" && I.medMapStock) {
              const ne = I.medMapStock.find((G) => G.code === N.code);
              if (ne) return { stock: ne, shelf: I };
            }
            if (I.contents && I.contents.length > 0) {
              const ne = w(I.contents);
              if (ne) return ne;
            }
          }
          return null;
        },
        L = n ? w([n]) : null;
      u({
        code: N.code,
        name: N.name,
        cht_name: N.cht_name,
        skdiacode: N.SKDIACODE || N.skdiacode,
        serverName:
          (v = L == null ? void 0 : L.shelf) == null ? void 0 : v.serverName,
        serverType:
          (b = L == null ? void 0 : L.shelf) == null ? void 0 : b.serverType,
      }),
        R(!0);
    };
    if (!e) return null;
    const ue = () => {
        if (!(_ != null && _.med_list) || _.med_list.length === 0)
          return r.jsx("div", {
            className: "flex items-center justify-center h-full text-gray-400",
            children: r.jsx("p", { children: "無藥品資料" }),
          });
        const N = [..._.med_list].sort((w, L) => w.code.localeCompare(L.code));
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
                children: N.map((w, L) => {
                  const v = i && l && w.code == l,
                    b = x.includes(w.code);
                  let D = 0;
                  w.qty.forEach((ne) => {
                    D += +ne;
                  }),
                    L === 0 &&
                      console.log("🧪 ContainerDetailModal - 第一筆藥品檢查:", {
                        medCode: w.code,
                        highlightedCode: l,
                        isHighlightActive: i,
                        isHighlighted: v,
                        isPendingRequisition: b,
                        comparison: `${w.code} == ${l} = ${w.code == l}`,
                      });
                  const I = V();
                  return r.jsxs(
                    "tr",
                    {
                      className: `transition-colors cursor-pointer ${
                        b
                          ? "highlight-breathe-red"
                          : v
                          ? `highlight-breathe-${I}`
                          : "hover:bg-gray-50"
                      }`,
                      onClick: () => J(w),
                      children: [
                        r.jsx("td", {
                          className: "border border-gray-300 px-1 py-2 text-sm",
                          children: w.code || "-",
                        }),
                        r.jsx("td", {
                          className: "border border-gray-300 px-1 py-2 text-sm",
                          children: w.SKDIACODE || "-",
                        }),
                        r.jsx("td", {
                          className: "border border-gray-300 px-1 py-2 text-sm",
                          children: w.name || "-",
                        }),
                        r.jsx("td", {
                          className:
                            "border border-gray-300 px-1 py-2 text-sm text-right",
                          children: D || "-",
                        }),
                        r.jsx("td", {
                          className:
                            "border border-gray-300 px-1 py-2 text-sm text-center",
                          children: w.stockCol || "-",
                        }),
                        r.jsx("td", {
                          className:
                            "border border-gray-300 px-1 py-2 text-sm text-center",
                          children: w.stockRow || "-",
                        }),
                        r.jsx("td", {
                          className:
                            "border border-gray-300 px-1 py-2 text-sm text-center",
                          children: w.stock || "-",
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
      we = () =>
        n
          ? r.jsx(Lh, {
              container: _,
              highlightedMedicineCode: i ? l : null,
              pendingRequisitionCodes: x,
              onMedicineClick: J,
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
                      children: r.jsx(Xe, {
                        className: "w-6 h-6 text-gray-700",
                      }),
                    }),
                  ],
                }),
                r.jsx("div", {
                  className: "flex-1 overflow-hidden p-3",
                  children: s === "list_mode" ? ue() : we(),
                }),
              ],
            }),
          ],
        }),
        r.jsx(Bh, {
          isOpen: M,
          onClose: () => R(!1),
          medicineInfo: d,
          requisitions: d ? h.filter((N) => N.code === d.code) : [],
          distributions: d ? j.filter((N) => N.code === d.code) : [],
          onNoticeUpdated: X,
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
      } = tt(),
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
    const x = (m, j) => {
        a((S) => ({ ...S, [m]: j }));
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
            const m = {
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
              S = `${(await ke.getConfig()).domain}/api/medmap/update_shelf`,
              R = await (
                await fetch(S, {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(m),
                })
              ).json();
            console.log(m),
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
          } catch (m) {
            console.error("更新層架失敗:", m),
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
              onClick: (m) => m.stopPropagation(),
              children: [
                r.jsxs("div", {
                  className:
                    "flex items-center justify-between px-6 py-4 border-b border-gray-200",
                  children: [
                    r.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        r.jsx(jr, { className: "w-6 h-6 text-gray-600" }),
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
                      children: r.jsx(Xe, { className: "w-6 h-6" }),
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
                            onChange: (m) => x("name", m.target.value),
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
                            onChange: (m) => x("position", m.target.value),
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
                                onChange: (m) => x("width", m.target.value),
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
                                onChange: (m) => x("height", m.target.value),
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
                            onChange: (m) => x("ip", m.target.value),
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
                            onChange: (m) => x("serverName", m.target.value),
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
                            onChange: (m) => x("serverType", m.target.value),
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
                            onChange: (m) => x("deviceType", m.target.value),
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
                        i && r.jsx(It, { className: "w-4 h-4 animate-spin" }),
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
      } = tt(),
      [l, a] = f.useState({
        name: "",
        position: "",
        ip_light: "",
        serverName: "",
        serverType: "",
        deviceType: "",
        reverse: "False",
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
          reverse: n.reverse || "False",
        });
    }, [n, e]);
    const x = (m, j) => {
        a((S) => ({ ...S, [m]: j }));
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
            let m = `${n.position.x},${n.position.y}`;
            const j = [
              {
                GUID: n.GUID,
                name: l.name.trim(),
                position: l.position.trim(),
                absolute_position: m || "0,0",
                ip_light: l.ip_light.trim(),
                serverName: l.serverName.trim(),
                serverType: l.serverType.trim(),
                device_type: l.deviceType,
                reverse: l.reverse,
              },
            ];
            console.log("=========", j, "=========");
            const S = await ke.updateMedMapSection(j);
            S.Code === 200
              ? (s("父容器更新成功", "success"),
                o(n.GUID, {
                  name: l.name.trim(),
                  gird_position: l.position.trim(),
                  ip_light: l.ip_light.trim(),
                  serverName: l.serverName.trim(),
                  serverType: l.serverType.trim(),
                  device_type: l.deviceType,
                  reverse: l.reverse,
                }),
                t())
              : s(S.Result || "更新失敗", "error");
          } catch (m) {
            console.error("更新父容器失敗:", m),
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
              onClick: (m) => m.stopPropagation(),
              children: [
                r.jsxs("div", {
                  className:
                    "flex items-center justify-between px-6 py-4 border-b border-gray-200",
                  children: [
                    r.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        r.jsx(jr, { className: "w-6 h-6 text-gray-600" }),
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
                      children: r.jsx(Xe, { className: "w-6 h-6" }),
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
                            onChange: (m) => x("name", m.target.value),
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
                            onChange: (m) => x("position", m.target.value),
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
                            onChange: (m) => x("ip_light", m.target.value),
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
                            onChange: (m) => x("serverName", m.target.value),
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
                            onChange: (m) => x("serverType", m.target.value),
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
                            onChange: (m) => x("deviceType", m.target.value),
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
                      r.jsxs("div", {
                        children: [
                          r.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-2",
                            children: "貨品反轉",
                          }),
                          r.jsx("button", {
                            type: "button",
                            onClick: () =>
                              x(
                                "reverse",
                                l.reverse === "True" ? "False" : "True"
                              ),
                            className: `relative inline-flex h-8 w-14 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                              l.reverse === "True"
                                ? "bg-blue-600"
                                : "bg-gray-300"
                            }`,
                            children: r.jsx("span", {
                              className: `inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                                l.reverse === "True"
                                  ? "translate-x-7"
                                  : "translate-x-1"
                              }`,
                            }),
                          }),
                          r.jsx("span", {
                            className: "ml-3 text-sm text-gray-600",
                            children:
                              l.reverse === "True" ? "已啟用" : "未啟用",
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
                        i && r.jsx(It, { className: "w-4 h-4 animate-spin" }),
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
    const { t: n } = jt(),
      [s, o] = f.useState(""),
      [l, a] = f.useState(""),
      [i, c] = f.useState(!1),
      [x, g] = f.useState(!1),
      [h, m] = f.useState(""),
      j = async (M) => {
        if ((M.preventDefault(), !s.trim() || !l.trim())) {
          m("Please enter both ID and password");
          return;
        }
        g(!0), m("");
        try {
          const R = await ke.login({ ID: s.trim(), Password: l });
          if (R.Code === 200 && R.Data) {
            const d = { ...R.Data, loginTime: new Date().toISOString() };
            sessionStorage.setItem("user_session", JSON.stringify(d)), t(d);
          } else m(R.Result || "Login failed");
        } catch (R) {
          console.error("Login failed:", R),
            m("Network error. Please try again.");
        } finally {
          g(!1);
        }
      },
      S = (M) => {
        M.key === "Enter" && !x && j(M);
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
                              onChange: (M) => o(M.target.value),
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
                                  onChange: (M) => a(M.target.value),
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
                                    ? r.jsx(Qu, { className: "w-5 h-5" })
                                    : r.jsx(Ku, { className: "w-5 h-5" }),
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
                                  r.jsx(It, {
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
    const { t: n } = jt();
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
                        children: r.jsx(yi, {
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
                      r.jsx(It, {
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
                  children: r.jsx(Xe, { className: "w-4 h-4" }),
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
    closeAddStoreItemModal: m,
    selectedStoreShelfForAdd: j,
    addDepartmentModalOpen: S,
    closeAddDepartmentModal: M,
    qrCodeScannerModalOpen: R,
    qrCodeScannerMode: d,
    closeQRCodeScannerModal: u,
    addBarcodeModalOpen: p,
    closeAddBarcodeModal: E,
    initialBarcodeValue: P,
    containerDetailModalOpen: _,
    closeContainerDetailModal: T,
    selectedContainerForDetail: V,
    setMedicineList: X,
    setIsLoadingMedicines: J,
    showNotification: ue,
  } = tt();
  f.useEffect(() => {
    (() => {
      try {
        const v = sessionStorage.getItem("user_session");
        if (v) {
          const b = JSON.parse(v);
          b.GUID && b.ID && b.Name
            ? (o(b), s(!0))
            : sessionStorage.removeItem("user_session");
        }
      } catch (v) {
        console.error("Error checking session:", v),
          sessionStorage.removeItem("user_session");
      }
    })();
  }, [s, o]),
    f.useEffect(() => {
      let L = !0;
      return (
        (async () => {
          if (n) {
            J(!0);
            try {
              console.log("開始載入藥品資料...");
              const b = await ke.getMedicineCloud();
              if ((console.log("藥品資料 API 回應:", b), !L)) return;
              b.Code === 200 && b.Data
                ? (X(b.Data),
                  console.log(`✅ 成功載入 ${b.Data.length} 筆藥品資料`),
                  ue(`載入 ${b.Data.length} 筆藥品資料`, "success"))
                : (console.warn("API 回應異常:", b),
                  X([]),
                  ue("藥品資料載入異常，請稍後重試", "error"));
            } catch (b) {
              if (!L) return;
              console.error("載入藥品資料失敗:", b),
                X([]),
                ue("無法連線到藥品資料庫，部分功能可能無法使用", "error");
            } finally {
              L && J(!1);
            }
          }
        })(),
        () => {
          L = !1;
        }
      );
    }, [n]);
  const we = (L) => {
      o(L), s(!0);
    },
    N = mo.useRef(null),
    w = (L, v) => {
      if (
        (console.log("📸 QR掃描成功 - handleQRScanSuccess 被調用:", {
          barcode: L,
          medicineData: v,
          mode: d,
        }),
        console.log("📸 當前 mode:", d),
        console.log("📸 當前 viewMode:", t),
        console.log("📸 drugCanvasRef.current:", N.current),
        d === "track_Drug_mode")
      ) {
        if ((console.log("✅ 進入 track_Drug_mode 分支"), t !== "medicine")) {
          console.warn("⚠️ 當前不在藥品地圖視圖，無法定位藥品"),
            ue("請切換到藥品地圖視圖後再使用此功能", "error");
          return;
        }
        N.current
          ? (console.log("✅ drugCanvasRef.current 存在"),
            console.log(
              "📸 drugCanvasRef.current.locateDrug 類型:",
              typeof N.current.locateDrug
            ),
            typeof N.current.locateDrug == "function"
              ? (console.log("✅ 呼叫 locateDrug 函數"),
                N.current.locateDrug(v))
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
                t === "department" ? r.jsx(Sh, {}) : r.jsx(ef, { ref: N }),
            }),
          }),
          r.jsx(bh, {}),
          r.jsx(Mh, {}),
          r.jsx(Eh, {}),
          r.jsx(Ih, {}),
          r.jsx(Ph, {}),
          r.jsx(Th, {}),
          r.jsx(Rh, {}),
          r.jsx($h, { isOpen: h, onClose: m, storeShelf: j }),
          r.jsx(Ah, { isOpen: S, onClose: M }),
          r.jsx(tl, { isOpen: R, onClose: u, mode: d, onScanSuccess: w }),
          r.jsx(Oh, { isOpen: p, onClose: E, initialBarcode: P }),
          r.jsx(zh, { isOpen: _, onClose: T, container: V }),
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
    : r.jsx(Vh, { isOpen: !0, onLoginSuccess: we });
}
function Yh() {
  return r.jsx(eh, { children: r.jsx(Jm, { children: r.jsx(Wh, {}) }) });
}
Hu(document.getElementById("root")).render(
  r.jsx(f.StrictMode, { children: r.jsx(Yh, {}) })
);
