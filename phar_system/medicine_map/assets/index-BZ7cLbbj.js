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
  function t(C, M) {
    var oe = C.length;
    C.push(M);
    e: for (; 0 < oe; ) {
      var B = (oe - 1) >>> 1,
        K = C[B];
      if (0 < o(K, M)) (C[B] = M), (C[oe] = K), (oe = B);
      else break e;
    }
  }
  function n(C) {
    return C.length === 0 ? null : C[0];
  }
  function s(C) {
    if (C.length === 0) return null;
    var M = C[0],
      oe = C.pop();
    if (oe !== M) {
      C[0] = oe;
      e: for (var B = 0, K = C.length, Ne = K >>> 1; B < Ne; ) {
        var de = 2 * (B + 1) - 1,
          z = C[de],
          he = de + 1,
          G = C[he];
        if (0 > o(z, oe))
          he < K && 0 > o(G, z)
            ? ((C[B] = G), (C[he] = oe), (B = he))
            : ((C[B] = z), (C[de] = oe), (B = de));
        else if (he < K && 0 > o(G, oe)) (C[B] = G), (C[he] = oe), (B = he);
        else break e;
      }
    }
    return M;
  }
  function o(C, M) {
    var oe = C.sortIndex - M.sortIndex;
    return oe !== 0 ? oe : C.id - M.id;
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
    D = !1,
    R = typeof setTimeout == "function" ? setTimeout : null,
    d = typeof clearTimeout == "function" ? clearTimeout : null,
    u = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(C) {
    for (var M = n(x); M !== null; ) {
      if (M.callback === null) s(x);
      else if (M.startTime <= C)
        s(x), (M.sortIndex = M.expirationTime), t(c, M);
      else break;
      M = n(x);
    }
  }
  function _(C) {
    if (((D = !1), p(C), !S))
      if (n(c) !== null) (S = !0), v(P);
      else {
        var M = n(x);
        M !== null && w(_, M.startTime - C);
      }
  }
  function P(C, M) {
    (S = !1), D && ((D = !1), d(H), (H = -1)), (j = !0);
    var oe = m;
    try {
      for (
        p(M), h = n(c);
        h !== null && (!(h.expirationTime > M) || (C && !ue()));

      ) {
        var B = h.callback;
        if (typeof B == "function") {
          (h.callback = null), (m = h.priorityLevel);
          var K = B(h.expirationTime <= M);
          (M = e.unstable_now()),
            typeof K == "function" ? (h.callback = K) : h === n(c) && s(c),
            p(M);
        } else s(c);
        h = n(c);
      }
      if (h !== null) var Ne = !0;
      else {
        var de = n(x);
        de !== null && w(_, de.startTime - M), (Ne = !1);
      }
      return Ne;
    } finally {
      (h = null), (m = oe), (j = !1);
    }
  }
  var k = !1,
    T = null,
    H = -1,
    X = 5,
    ee = -1;
  function ue() {
    return !(e.unstable_now() - ee < X);
  }
  function we() {
    if (T !== null) {
      var C = e.unstable_now();
      ee = C;
      var M = !0;
      try {
        M = T(!0, C);
      } finally {
        M ? b() : ((k = !1), (T = null));
      }
    } else k = !1;
  }
  var b;
  if (typeof u == "function")
    b = function () {
      u(we);
    };
  else if (typeof MessageChannel < "u") {
    var N = new MessageChannel(),
      U = N.port2;
    (N.port1.onmessage = we),
      (b = function () {
        U.postMessage(null);
      });
  } else
    b = function () {
      R(we, 0);
    };
  function v(C) {
    (T = C), k || ((k = !0), b());
  }
  function w(C, M) {
    H = R(function () {
      C(e.unstable_now());
    }, M);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (C) {
      C.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      S || j || ((S = !0), v(P));
    }),
    (e.unstable_forceFrameRate = function (C) {
      0 > C || 125 < C
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (X = 0 < C ? Math.floor(1e3 / C) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(c);
    }),
    (e.unstable_next = function (C) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var M = 3;
          break;
        default:
          M = m;
      }
      var oe = m;
      m = M;
      try {
        return C();
      } finally {
        m = oe;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (C, M) {
      switch (C) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          C = 3;
      }
      var oe = m;
      m = C;
      try {
        return M();
      } finally {
        m = oe;
      }
    }),
    (e.unstable_scheduleCallback = function (C, M, oe) {
      var B = e.unstable_now();
      switch (
        (typeof oe == "object" && oe !== null
          ? ((oe = oe.delay),
            (oe = typeof oe == "number" && 0 < oe ? B + oe : B))
          : (oe = B),
        C)
      ) {
        case 1:
          var K = -1;
          break;
        case 2:
          K = 250;
          break;
        case 5:
          K = 1073741823;
          break;
        case 4:
          K = 1e4;
          break;
        default:
          K = 5e3;
      }
      return (
        (K = oe + K),
        (C = {
          id: g++,
          callback: M,
          priorityLevel: C,
          startTime: oe,
          expirationTime: K,
          sortIndex: -1,
        }),
        oe > B
          ? ((C.sortIndex = oe),
            t(x, C),
            n(c) === null &&
              C === n(x) &&
              (D ? (d(H), (H = -1)) : (D = !0), w(_, oe - B)))
          : ((C.sortIndex = K), t(c, C), S || j || ((S = !0), v(P))),
        C
      );
    }),
    (e.unstable_shouldYield = ue),
    (e.unstable_wrapCallback = function (C) {
      var M = m;
      return function () {
        var oe = m;
        m = M;
        try {
          return C.apply(this, arguments);
        } finally {
          m = oe;
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
function ie(e) {
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
  if (t.dangerouslySetInnerHTML != null) throw Error(ie(91));
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
      if (t != null) throw Error(ie(92));
      if (ts(n)) {
        if (1 < n.length) throw Error(ie(93));
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
      throw Error(ie(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(ie(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(ie(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(ie(62));
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
    if (typeof Vl != "function") throw Error(ie(280));
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
  if (n && typeof n != "function") throw Error(ie(231, t, typeof n));
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
    } else throw Error(ie(198));
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
  if (or(e) !== e) throw Error(ie(188));
}
function op(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = or(e)), t === null)) throw Error(ie(188));
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
      throw Error(ie(188));
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
        if (!a) throw Error(ie(189));
      }
    }
    if (n.alternate !== s) throw Error(ie(190));
  }
  if (n.tag !== 3) throw Error(ie(188));
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
        var D = (t & 4) !== 0,
          R = !D && e === "scroll",
          d = D ? (m !== null ? m + "Capture" : null) : m;
        D = [];
        for (var u = x, p; u !== null; ) {
          p = u;
          var _ = p.stateNode;
          if (
            (p.tag === 5 &&
              _ !== null &&
              ((p = _),
              d !== null && ((_ = gs(u, d)), _ != null && D.push(js(u, _, p)))),
            R)
          )
            break;
          u = u.return;
        }
        0 < D.length &&
          ((m = new j(m, S, null, n, g)), h.push({ event: m, listeners: D }));
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
            ((D = Oi),
            (_ = "onMouseLeave"),
            (d = "onMouseEnter"),
            (u = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((D = Ui),
              (_ = "onPointerLeave"),
              (d = "onPointerEnter"),
              (u = "pointer")),
            (R = j == null ? m : gr(j)),
            (p = S == null ? m : gr(S)),
            (m = new D(_, u + "leave", j, n, g)),
            (m.target = R),
            (m.relatedTarget = p),
            (_ = null),
            Yn(g) === x &&
              ((D = new D(d, u + "enter", S, n, g)),
              (D.target = p),
              (D.relatedTarget = R),
              (_ = D)),
            (R = _),
            j && S)
          )
            t: {
              for (D = j, d = S, u = 0, p = D; p; p = dr(p)) u++;
              for (p = 0, _ = d; _; _ = dr(_)) p++;
              for (; 0 < u - p; ) (D = dr(D)), u--;
              for (; 0 < p - u; ) (d = dr(d)), p--;
              for (; u--; ) {
                if (D === d || (d !== null && D === d.alternate)) break t;
                (D = dr(D)), (d = dr(d));
              }
              D = null;
            }
          else D = null;
          j !== null && Qi(h, m, j, D, !1),
            S !== null && R !== null && Qi(h, R, S, D, !0);
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
            var k = Kp;
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
        k && k(e, m, x),
          e === "focusout" &&
            (k = m._wrapperState) &&
            k.controlled &&
            m.type === "number" &&
            Ll(m, "number", m.value);
      }
      switch (((k = x ? gr(x) : window), e)) {
        case "focusin":
          (Gi(k) || k.contentEditable === "true") &&
            ((mr = k), (Ql = x), (is = null));
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
              var H = "onCompositionStart";
              break e;
            case "compositionend":
              H = "onCompositionEnd";
              break e;
            case "compositionupdate":
              H = "onCompositionUpdate";
              break e;
          }
          H = void 0;
        }
      else
        pr
          ? kd(e, n) && (H = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (H = "onCompositionStart");
      H &&
        (Cd &&
          n.locale !== "ko" &&
          (pr || H !== "onCompositionStart"
            ? H === "onCompositionEnd" && pr && (T = Sd())
            : ((_n = g),
              (Ua = "value" in _n ? _n.value : _n.textContent),
              (pr = !0))),
        (k = No(x, H)),
        0 < k.length &&
          ((H = new Li(H, e, null, n, g)),
          h.push({ event: H, listeners: k }),
          T ? (H.data = T) : ((T = Dd(n)), T !== null && (H.data = T)))),
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
  if (((t = Ki(t)), Ki(e) !== t && n)) throw Error(ie(425));
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
  throw Error(ie(33));
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
  if (yt.current !== Bn) throw Error(ie(168));
  He(yt, t), He(_t, n);
}
function zd(e, t, n) {
  var s = e.stateNode;
  if (((t = t.childContextTypes), typeof s.getChildContext != "function"))
    return n;
  s = s.getChildContext();
  for (var o in s) if (!(o in t)) throw Error(ie(108, Kf(e) || "Unknown", o));
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
  if (!s) throw Error(ie(169));
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
        if (sa(e)) throw Error(ie(418));
        t = Rn(n.nextSibling);
        var s = At;
        t && nc(e, t)
          ? Vd(s, n)
          : ((e.flags = (e.flags & -4097) | 2), (Ye = !1), (At = e));
      }
    } else {
      if (sa(e)) throw Error(ie(418));
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
    if (sa(e)) throw (Hd(), Error(ie(418)));
    for (; t; ) Vd(e, t), (t = Rn(t.nextSibling));
  }
  if ((rc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(ie(317));
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
        if (n.tag !== 1) throw Error(ie(309));
        var s = n.stateNode;
      }
      if (!s) throw Error(ie(147, e));
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
    if (typeof e != "string") throw Error(ie(284));
    if (!n._owner) throw Error(ie(290, e));
  }
  return e;
}
function Xs(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      ie(
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
  function i(d, u, p, _) {
    return u === null || u.tag !== 6
      ? ((u = Ml(p, d.mode, _)), (u.return = d), u)
      : ((u = o(u, p)), (u.return = d), u);
  }
  function c(d, u, p, _) {
    var P = p.type;
    return P === fr
      ? g(d, u, p.props.children, _, p.key)
      : u !== null &&
        (u.elementType === P ||
          (typeof P == "object" &&
            P !== null &&
            P.$$typeof === Sn &&
            sc(P) === u.type))
      ? ((_ = o(u, p.props)), (_.ref = Qr(d, u, p)), (_.return = d), _)
      : ((_ = po(p.type, p.key, p.props, null, d.mode, _)),
        (_.ref = Qr(d, u, p)),
        (_.return = d),
        _);
  }
  function x(d, u, p, _) {
    return u === null ||
      u.tag !== 4 ||
      u.stateNode.containerInfo !== p.containerInfo ||
      u.stateNode.implementation !== p.implementation
      ? ((u = El(p, d.mode, _)), (u.return = d), u)
      : ((u = o(u, p.children || [])), (u.return = d), u);
  }
  function g(d, u, p, _, P) {
    return u === null || u.tag !== 7
      ? ((u = Jn(p, d.mode, _, P)), (u.return = d), u)
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
          var _ = u._init;
          return h(d, _(u._payload), p);
      }
      if (ts(u) || Hr(u))
        return (u = Jn(u, d.mode, p, null)), (u.return = d), u;
      Xs(d, u);
    }
    return null;
  }
  function m(d, u, p, _) {
    var P = u !== null ? u.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return P !== null ? null : i(d, u, "" + p, _);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Ls:
          return p.key === P ? c(d, u, p, _) : null;
        case ur:
          return p.key === P ? x(d, u, p, _) : null;
        case Sn:
          return (P = p._init), m(d, u, P(p._payload), _);
      }
      if (ts(p) || Hr(p)) return P !== null ? null : g(d, u, p, _, null);
      Xs(d, p);
    }
    return null;
  }
  function j(d, u, p, _, P) {
    if ((typeof _ == "string" && _ !== "") || typeof _ == "number")
      return (d = d.get(p) || null), i(u, d, "" + _, P);
    if (typeof _ == "object" && _ !== null) {
      switch (_.$$typeof) {
        case Ls:
          return (d = d.get(_.key === null ? p : _.key) || null), c(u, d, _, P);
        case ur:
          return (d = d.get(_.key === null ? p : _.key) || null), x(u, d, _, P);
        case Sn:
          var k = _._init;
          return j(d, u, p, k(_._payload), P);
      }
      if (ts(_) || Hr(_)) return (d = d.get(p) || null), g(u, d, _, P, null);
      Xs(u, _);
    }
    return null;
  }
  function S(d, u, p, _) {
    for (
      var P = null, k = null, T = u, H = (u = 0), X = null;
      T !== null && H < p.length;
      H++
    ) {
      T.index > H ? ((X = T), (T = null)) : (X = T.sibling);
      var ee = m(d, T, p[H], _);
      if (ee === null) {
        T === null && (T = X);
        break;
      }
      e && T && ee.alternate === null && t(d, T),
        (u = l(ee, u, H)),
        k === null ? (P = ee) : (k.sibling = ee),
        (k = ee),
        (T = X);
    }
    if (H === p.length) return n(d, T), Ye && qn(d, H), P;
    if (T === null) {
      for (; H < p.length; H++)
        (T = h(d, p[H], _)),
          T !== null &&
            ((u = l(T, u, H)), k === null ? (P = T) : (k.sibling = T), (k = T));
      return Ye && qn(d, H), P;
    }
    for (T = s(d, T); H < p.length; H++)
      (X = j(T, d, H, p[H], _)),
        X !== null &&
          (e && X.alternate !== null && T.delete(X.key === null ? H : X.key),
          (u = l(X, u, H)),
          k === null ? (P = X) : (k.sibling = X),
          (k = X));
    return (
      e &&
        T.forEach(function (ue) {
          return t(d, ue);
        }),
      Ye && qn(d, H),
      P
    );
  }
  function D(d, u, p, _) {
    var P = Hr(p);
    if (typeof P != "function") throw Error(ie(150));
    if (((p = P.call(p)), p == null)) throw Error(ie(151));
    for (
      var k = (P = null), T = u, H = (u = 0), X = null, ee = p.next();
      T !== null && !ee.done;
      H++, ee = p.next()
    ) {
      T.index > H ? ((X = T), (T = null)) : (X = T.sibling);
      var ue = m(d, T, ee.value, _);
      if (ue === null) {
        T === null && (T = X);
        break;
      }
      e && T && ue.alternate === null && t(d, T),
        (u = l(ue, u, H)),
        k === null ? (P = ue) : (k.sibling = ue),
        (k = ue),
        (T = X);
    }
    if (ee.done) return n(d, T), Ye && qn(d, H), P;
    if (T === null) {
      for (; !ee.done; H++, ee = p.next())
        (ee = h(d, ee.value, _)),
          ee !== null &&
            ((u = l(ee, u, H)),
            k === null ? (P = ee) : (k.sibling = ee),
            (k = ee));
      return Ye && qn(d, H), P;
    }
    for (T = s(d, T); !ee.done; H++, ee = p.next())
      (ee = j(T, d, H, ee.value, _)),
        ee !== null &&
          (e && ee.alternate !== null && T.delete(ee.key === null ? H : ee.key),
          (u = l(ee, u, H)),
          k === null ? (P = ee) : (k.sibling = ee),
          (k = ee));
    return (
      e &&
        T.forEach(function (we) {
          return t(d, we);
        }),
      Ye && qn(d, H),
      P
    );
  }
  function R(d, u, p, _) {
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
            for (var P = p.key, k = u; k !== null; ) {
              if (k.key === P) {
                if (((P = p.type), P === fr)) {
                  if (k.tag === 7) {
                    n(d, k.sibling),
                      (u = o(k, p.props.children)),
                      (u.return = d),
                      (d = u);
                    break e;
                  }
                } else if (
                  k.elementType === P ||
                  (typeof P == "object" &&
                    P !== null &&
                    P.$$typeof === Sn &&
                    sc(P) === k.type)
                ) {
                  n(d, k.sibling),
                    (u = o(k, p.props)),
                    (u.ref = Qr(d, k, p)),
                    (u.return = d),
                    (d = u);
                  break e;
                }
                n(d, k);
                break;
              } else t(d, k);
              k = k.sibling;
            }
            p.type === fr
              ? ((u = Jn(p.props.children, d.mode, _, p.key)),
                (u.return = d),
                (d = u))
              : ((_ = po(p.type, p.key, p.props, null, d.mode, _)),
                (_.ref = Qr(d, u, p)),
                (_.return = d),
                (d = _));
          }
          return a(d);
        case ur:
          e: {
            for (k = p.key; u !== null; ) {
              if (u.key === k)
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
            (u = El(p, d.mode, _)), (u.return = d), (d = u);
          }
          return a(d);
        case Sn:
          return (k = p._init), R(d, u, k(p._payload), _);
      }
      if (ts(p)) return S(d, u, p, _);
      if (Hr(p)) return D(d, u, p, _);
      Xs(d, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        u !== null && u.tag === 6
          ? (n(d, u.sibling), (u = o(u, p)), (u.return = d), (d = u))
          : (n(d, u), (u = Ml(p, d.mode, _)), (u.return = d), (d = u)),
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
      if (Mo === null) throw Error(ie(308));
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
            D = i;
          switch (((m = t), (j = n), D.tag)) {
            case 1:
              if (((S = D.payload), typeof S == "function")) {
                h = S.call(j, h, m);
                break e;
              }
              h = S;
              break e;
            case 3:
              S.flags = (S.flags & -65537) | 128;
            case 0:
              if (
                ((S = D.payload),
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
          throw Error(ie(191, o));
        o.call(s);
      }
    }
}
var $s = {},
  cn = Gn($s),
  Cs = Gn($s),
  ks = Gn($s);
function Qn(e) {
  if (e === $s) throw Error(ie(174));
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
  throw Error(ie(321));
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
      if (((cs = !1), (Ds = 0), 25 <= l)) throw Error(ie(301));
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
    throw Error(ie(300));
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
    if (e === null) throw Error(ie(310));
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
  if (n === null) throw Error(ie(311));
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
  if (n === null) throw Error(ie(311));
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
      throw Error(ie(349));
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
        if (n === void 0) throw Error(ie(407));
        n = n();
      } else {
        if (((n = t()), dt === null)) throw Error(ie(349));
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
      ? ((t.flags &= -257), (s = Dl(Error(ie(422)))), Qs(e, t, a, s))
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
      (s = i), (l = Error(ie(419))), (s = Dl(l, s, void 0)), Qs(e, t, a, s)
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
    return fi(), (s = Dl(Error(ie(421)))), Qs(e, t, a, s);
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
  if (e !== null && t.child !== e.child) throw Error(ie(153));
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
          if (t.stateNode === null) throw Error(ie(166));
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
        if (typeof s != "string" && t.stateNode === null) throw Error(ie(166));
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
            if (!l) throw Error(ie(318));
            if (
              ((l = t.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(ie(317));
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
  throw Error(ie(156, t.tag));
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
        if (t.alternate === null) throw Error(ie(340));
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
                  var D = S.memoizedProps,
                    R = S.memoizedState,
                    d = t.stateNode,
                    u = d.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? D : Kt(t.type, D),
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
                throw Error(ie(163));
            }
        } catch (_) {
          et(t, t.return, _);
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
        if (ut === null) throw Error(ie(160));
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
        } catch (D) {
          et(e, e.return, D);
        }
        try {
          ds(5, e, e.return);
        } catch (D) {
          et(e, e.return, D);
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
        } catch (D) {
          et(e, e.return, D);
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
          } catch (D) {
            et(e, e.return, D);
          }
      }
      break;
    case 6:
      if ((Qt(t, e), rn(e), s & 4)) {
        if (e.stateNode === null) throw Error(ie(162));
        (o = e.stateNode), (l = e.memoizedProps);
        try {
          o.nodeValue = l;
        } catch (D) {
          et(e, e.return, D);
        }
      }
      break;
    case 3:
      if (
        (Qt(t, e), rn(e), s & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          vs(t.containerInfo);
        } catch (D) {
          et(e, e.return, D);
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
                    } catch (D) {
                      et(s, n, D);
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
              } catch (D) {
                et(e, e.return, D);
              }
            }
          } else if (h.tag === 6) {
            if (g === null)
              try {
                h.stateNode.nodeValue = x ? "" : h.memoizedProps;
              } catch (D) {
                et(e, e.return, D);
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
        throw Error(ie(160));
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
          throw Error(ie(161));
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
              throw Error(ie(163));
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
  if (50 < fs) throw ((fs = 0), (wa = null), Error(ie(185)));
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
  if (((uo = -1), (fo = 0), Be & 6)) throw Error(ie(327));
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
          throw Error(ie(345));
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
          throw Error(ie(329));
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
  if (Be & 6) throw Error(ie(327));
  Er();
  var t = vo(e, 0);
  if (!(t & 1)) return Et(e, nt()), null;
  var n = Oo(e, t);
  if (e.tag !== 0 && n === 2) {
    var s = Wl(e);
    s !== 0 && ((t = s), (n = ba(e, s)));
  }
  if (n === 1) throw ((n = Es), Kn(e, 0), Dn(e, t), Et(e, nt()), n);
  if (n === 6) throw Error(ie(345));
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
              var D = new Set();
              D.add(c), (t.updateQueue = D);
            } else S.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              uc(l, x, t), fi();
              break e;
            }
            c = Error(ie(426));
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
                var _ = yu(l, i, t);
                oc(l, _);
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
  if ((Ya(), (Be = n), (Ro.current = s), st !== null)) throw Error(ie(261));
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
  if (Be & 6) throw Error(ie(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(ie(177));
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
        if (((e = Mn), (Mn = null), (Ao = 0), Be & 6)) throw Error(ie(331));
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
                var D = S.child;
                if (D !== null) {
                  S.child = null;
                  do {
                    var R = D.sibling;
                    (D.sibling = null), (D = R);
                  } while (D !== null);
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
              var _ = i.sibling;
              if (_ !== null) {
                (_.return = i.return), (Se = _);
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
      throw Error(ie(314));
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
        throw Error(ie(306, s, ""));
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
        if ((Nu(t), e === null)) throw Error(ie(387));
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
            (o = Ar(Error(ie(423)), t)), (t = xc(e, t, s, n, o));
            break e;
          } else if (s !== o) {
            (o = Ar(Error(ie(424)), t)), (t = xc(e, t, s, n, o));
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
                if (((a = l.return), a === null)) throw Error(ie(341));
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
  throw Error(ie(156, t.tag));
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
        throw Error(ie(130, e == null ? e : typeof e, ""));
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
    if (or(e) !== e || e.tag !== 1) throw Error(ie(170));
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
    throw Error(ie(171));
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
  if (t === null) throw Error(ie(409));
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
            if (!o) throw Error(ie(90));
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
  if (!xi(t)) throw Error(ie(200));
  return Fm(e, t, null, n);
};
Lt.createRoot = function (e, t) {
  if (!xi(e)) throw Error(ie(299));
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
      ? Error(ie(188))
      : ((e = Object.keys(e).join(",")), Error(ie(268, e)));
  return (e = ud(t)), (e = e === null ? null : e.stateNode), e;
};
Lt.flushSync = function (e) {
  return rr(e);
};
Lt.hydrate = function (e, t, n) {
  if (!Zo(t)) throw Error(ie(200));
  return el(null, e, t, !0, n);
};
Lt.hydrateRoot = function (e, t, n) {
  if (!xi(e)) throw Error(ie(405));
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
  if (!Zo(t)) throw Error(ie(200));
  return el(null, e, t, !1, n);
};
Lt.unmountComponentAtNode = function (e) {
  if (!Zo(e)) throw Error(ie(40));
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
  if (!Zo(n)) throw Error(ie(200));
  if (e == null || e._reactInternals === void 0) throw Error(ie(38));
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
  async addMedMapSection(t, n, s, o) {
    const l = { ValueAry: [t, n], ServerName: s, ServerType: o };
    return this.request("/api/medMap/add_medMap_section", {
      method: "POST",
      body: JSON.stringify(l),
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
                                _ = m.position.split(","),
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
                                  (p.stockCol = `${+_[0] + 1}`),
                                  (p.stockRow = ""),
                                  (p.stock = `${+P[1] + 1}`);
                              } else
                                (u.device_type = 10),
                                  (u.box_type = "2.9"),
                                  (p.name = ""),
                                  (p.code = ""),
                                  (p.cht_name = ""),
                                  (p.stockCol = `${+_[0] + 1}`),
                                  (p.stockRow = ""),
                                  (p.stock = `${+P[1] + 1}`);
                              o.contents[a].med_list.push(p),
                                (u.med_info[0] = p),
                                S.contents.push(u);
                            });
                      else {
                        S.type = "store_shelves";
                        const R = m.medMapStock.sort((u, p) => {
                          const [_] = u.location.split(",").map(Number),
                            [P] = p.location.split(",").map(Number);
                          return _ - P;
                        });
                        (S.medMapStock = R), (S.name = m.name);
                        let d = Math.max(
                          ...R.map((u) => u.location.split(",")[0])
                        );
                        +d <= 0 && (d = 0),
                          R.forEach((u, p) => {
                            let _ = m.position.split(","),
                              P = c.position.split(",");
                            if (u.code) {
                              let k = {};
                              (k.name = u.name),
                                (k.code = u.code),
                                (k.cht_name = ""),
                                (k.SKDIACODE = u.material_no),
                                (k.qty = u.qty),
                                (k.stockCol = `${+_[0] + 1}`),
                                (k.stockRow = `${+P[1] + 1}`),
                                (k.stock = `${+u.location.split(",")[0] + 1}`),
                                l.reverse == "True" &&
                                  (k.stock = d + 1 - +u.location.split(",")[0]),
                                o.contents[a].med_list.push(k);
                            }
                          });
                      }
                      let D = m.position.split(",")[1];
                      h < +D &&
                        ((h = +D), (o.contents[a].contents[x].oriMaxCol = +h)),
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
                                        d.forEach((_, P) => {
                                          let k = {
                                            Row: _.Row,
                                            Column: _.Column,
                                            Width: 1,
                                            Height: 1,
                                            Slave: _.Slave,
                                            SlaveBox_Row: _.SlaveBox_Row,
                                            SlaveBox_Column: _.SlaveBox_Column,
                                            MasterBox_Column:
                                              _.MasterBox_Column,
                                            MasterBox_Row: _.MasterBox_Row,
                                            Name: _.Name,
                                            Code: _.Code,
                                            ChineseName: _.ChineseName,
                                            GUID: _.GUID,
                                          };
                                          p.push(k),
                                            _.Code &&
                                              o.contents[a].med_list.push(
                                                _.Code
                                              );
                                        }),
                                        S.Boxes.push(p);
                                    })
                                  : (S.Boxes = m.drawer.Boxes)))
                            : ((S.type = "list_draw"),
                              (S.name = `清單抽屜 ${j}`));
                        let D = m.position.split(",")[1];
                        h < +D &&
                          ((h = +D),
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
      [D, R] = f.useState(0),
      [d, u] = f.useState({ message: "", type: "success", isVisible: !1 }),
      [p, _] = f.useState(!1),
      [P, k] = f.useState(null),
      [T, H] = f.useState("edit"),
      [X, ee] = f.useState(!1),
      [ue, we] = f.useState(null),
      [b, N] = f.useState(!1),
      [U, v] = f.useState(null),
      [w, C] = f.useState(!1),
      [M, oe] = f.useState(!1),
      [B, K] = f.useState(null),
      [Ne, de] = f.useState(!1),
      [z, he] = f.useState(null),
      [G, ve] = f.useState(!1),
      [ge, fe] = f.useState(null),
      [Ae, te] = f.useState(!1),
      [I, E] = f.useState(null),
      [W, L] = f.useState(null),
      [re, ae] = f.useState("add"),
      [$, V] = f.useState(!1),
      [F, J] = f.useState([]),
      [le, xe] = f.useState([]),
      [ce, be] = f.useState(!1),
      [Ce, Ee] = f.useState(!1),
      [Ze, Pe] = f.useState(""),
      [rt, Ve] = f.useState(!1),
      [Pt, Bt] = f.useState(""),
      [Vn, Yt] = f.useState(!1),
      [Hn, Gr] = f.useState(null),
      [As, Fr] = f.useState(null),
      [nl, y] = f.useState(!1),
      [se, Y] = f.useState(null),
      [A, q] = f.useState(!1),
      [O, Q] = f.useState(null),
      [Z, pe] = f.useState(null),
      ne = () => {
        sessionStorage.removeItem("user_session"), n(!1), o(null);
      },
      ye = f.useCallback(() => {
        R((Ie) => Ie + 1);
      }, []),
      me = f.useCallback((Ie, at) => {
        u({ message: Ie, type: at, isVisible: !0 });
      }, []),
      je = f.useCallback(() => {
        u((Ie) => ({ ...Ie, isVisible: !1 }));
      }, []),
      Te = (Ie) => {
        k(Ie), H("edit"), _(!0);
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
        k(Ie), H("add"), _(!0);
      },
      $e = () => {
        _(!1), k(null), H("edit");
      },
      _e = (Ie) => {
        we(Ie), ee(!0);
      },
      Re = () => {
        ee(!1), we(null);
      },
      Oe = (Ie) => {
        v(Ie), N(!0);
      },
      Me = () => {
        N(!1), v(null);
      },
      Ue = (Ie) => {
        K(Ie), oe(!0);
      },
      mt = () => {
        oe(!1), K(null);
      },
      ze = (Ie) => {
        he(Ie), de(!0);
      },
      dn = () => {
        de(!1), he(null);
      },
      Vr = (Ie) => {
        fe(Ie), ve(!0);
      },
      rl = () => {
        ve(!1), fe(null);
      },
      tf = (Ie) => {
        E(Ie), L(null), ae("add"), te(!0);
      },
      nf = (Ie, at) => {
        E(Ie), L(at), ae("edit"), te(!0);
      },
      rf = () => {
        te(!1), E(null), L(null), ae("add");
      },
      sf = () => {
        V(!0);
      },
      of = () => {
        V(!1);
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
        Q(Ie), q(!0);
      },
      gf = () => {
        q(!1), Q(null);
      },
      xf = f.useCallback(async () => {
        if (!i) {
          console.warn("沒有選擇部門分類，無法重新載入資料");
          return;
        }
        console.log("🔄 重新載入藥品地圖資料，部門類型:", i), C(!0);
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
          C(!1);
        }
      }, [i, C, g]),
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
        setViewMode: m,
        refreshTrigger: D,
        triggerRefresh: ye,
        addStockToShelf: yf,
        notification: d,
        showNotification: me,
        hideNotification: je,
        medBoxModalOpen: p,
        setMedBoxModalOpen: _,
        selectedMedBox: P,
        setSelectedMedBox: k,
        openMedBoxModal: Te,
        closeMedBoxModal: $e,
        modalMode: T,
        setModalMode: H,
        openAddMedBoxModal: De,
        listDrawModalOpen: X,
        setListDrawModalOpen: ee,
        selectedListDraw: ue,
        setSelectedListDraw: we,
        openListDrawModal: _e,
        closeListDrawModal: Re,
        gridDrawModalOpen: b,
        setGridDrawModalOpen: N,
        selectedGridDraw: U,
        setSelectedGridDraw: v,
        openGridDrawModal: Oe,
        closeGridDrawModal: Me,
        isLoadingMedMap: w,
        setIsLoadingMedMap: C,
        addParentContainerModalOpen: M,
        setAddParentContainerModalOpen: oe,
        selectedDepartmentForAdd: B,
        setSelectedDepartmentForAdd: K,
        openAddParentContainerModal: Ue,
        closeAddParentContainerModal: mt,
        addShelfDrawContainerModalOpen: Ne,
        setAddShelfDrawContainerModalOpen: de,
        selectedSubContainerForAdd: z,
        setSelectedSubContainerForAdd: he,
        openAddShelfDrawContainerModal: ze,
        closeAddShelfDrawContainerModal: dn,
        addSubContainerModalOpen: G,
        setAddSubContainerModalOpen: ve,
        selectedParentContainerForAdd: ge,
        setSelectedParentContainerForAdd: fe,
        openAddSubContainerModal: Vr,
        closeAddSubContainerModal: rl,
        addStoreItemModalOpen: Ae,
        setAddStoreItemModalOpen: te,
        selectedStoreShelfForAdd: I,
        setSelectedStoreShelfForAdd: E,
        selectedStockItemForEdit: W,
        setSelectedStockItemForEdit: L,
        storeItemModalMode: re,
        setStoreItemModalMode: ae,
        openAddStoreItemModal: tf,
        openEditStoreItemModal: nf,
        closeAddStoreItemModal: rf,
        updateStockInShelf: vf,
        updateContainerInLocalData: wf,
        removeContainerFromLocalData: bf,
        addDepartmentModalOpen: $,
        setAddDepartmentModalOpen: V,
        allDepartmentsList: F,
        setAllDepartmentsList: J,
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
        selectedStoreShelfForEdit: se,
        setSelectedStoreShelfForEdit: Y,
        openEditStoreShelfModal: pf,
        closeEditStoreShelfModal: mf,
        activeCanvas: Z,
        setActiveCanvas: pe,
        editParentContainerModalOpen: A,
        setEditParentContainerModalOpen: q,
        selectedParentContainerForEdit: O,
        setSelectedParentContainerForEdit: Q,
        openEditParentContainerModal: hf,
        closeEditParentContainerModal: gf,
        medicineList: le,
        setMedicineList: xe,
        isLoadingMedicines: ce,
        setIsLoadingMedicines: be,
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
        const D = a.map((u) => u.name);
        return (
          i
            .filter((u) => u["department_type "] === o)
            .filter((u) => !D.includes(u.name)).length > 0
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
      [S, D] = f.useState([]),
      [R, d] = f.useState([]),
      [u, p] = f.useState(!1),
      [_, P] = f.useState(!1),
      k = f.useRef(null),
      T = f.useRef(null),
      H = f.useRef(null),
      X = f.useRef(null);
    f.useEffect(() => {
      if (e) {
        const v = localStorage.getItem("medMap_setting");
        if (v)
          try {
            const w = JSON.parse(v);
            s(w.light_color || "blue"),
              l(w.brightness !== void 0 ? w.brightness : 1),
              i(w.light_sec !== void 0 ? w.light_sec : 60),
              x(w.default_person || ""),
              h(w.default_person_id || "");
          } catch (w) {
            console.error("讀取設定失敗:", w),
              s("blue"),
              l(1),
              i(60),
              x(""),
              h("");
          }
        else s("blue"), l(1), i(60), x(""), h("");
        ee();
      }
    }, [e]),
      f.useEffect(() => {
        const v = (w) => {
          H.current &&
            !H.current.contains(w.target) &&
            k.current &&
            !k.current.contains(w.target) &&
            p(!1),
            X.current &&
              !X.current.contains(w.target) &&
              T.current &&
              !T.current.contains(w.target) &&
              P(!1);
        };
        return (
          document.addEventListener("mousedown", v),
          () => document.removeEventListener("mousedown", v)
        );
      }, []);
    const ee = async () => {
        try {
          const v = await ke.getAllStaffInfo();
          v.Code === 200 && v.Data && j(v.Data);
        } catch (v) {
          console.error("獲取人員資料失敗:", v);
        }
      },
      ue = (v) => {
        if ((x(v), v.trim() === "")) {
          D([]), p(!1);
          return;
        }
        const w = m.filter(
          (C) => C.name && C.name.toLowerCase().includes(v.toLowerCase())
        );
        D(w), p(w.length > 0);
      },
      we = (v) => {
        if ((h(v), v.trim() === "")) {
          d([]), P(!1);
          return;
        }
        const w = m.filter(
          (C) => C.ID && C.ID.toLowerCase().includes(v.toLowerCase())
        );
        d(w), P(w.length > 0);
      },
      b = (v) => {
        x(v.name), h(v.ID), p(!1);
      },
      N = (v) => {
        x(v.name), h(v.ID), P(!1);
      },
      U = () => {
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
                                  ref: k,
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
                                    ref: H,
                                    className:
                                      "absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto",
                                    children: S.map((v, w) =>
                                      r.jsxs(
                                        "div",
                                        {
                                          onClick: () => b(v),
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
                                        w
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
                                _ &&
                                  r.jsx("div", {
                                    ref: X,
                                    className:
                                      "absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto",
                                    children: R.map((v, w) =>
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
                                              children: v.ID,
                                            }),
                                            r.jsx("div", {
                                              className:
                                                "text-xs text-gray-500",
                                              children: v.name,
                                            }),
                                          ],
                                        },
                                        w
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
                      onClick: U,
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
      [D, R] = f.useState(!0),
      [d, u] = f.useState([]),
      [p, _] = f.useState(!1),
      [P, k] = f.useState(!1),
      T = () => {
        c ? x(!1) : k(!0);
      },
      H = (b) => {
        b === "66437068" ? (x(!0), k(!1)) : alert("密碼錯誤，無法開啟後台模式");
      };
    f.useEffect(() => {
      (async () => {
        R(!0);
        try {
          const N = await ke.getDepartments();
          N.Code === 200 && N.Data
            ? (console.log(N.Data), S(N.Data), i(N.Data))
            : (console.error("API returned error:", N), S([]), i([]));
        } catch (N) {
          console.error("Failed to fetch department data:", N), S([]), i([]);
        } finally {
          R(!1);
        }
      })();
    }, []);
    const X = j.reduce((b, N) => {
        const U = N["department_type "];
        return b[U] || (b[U] = []), b[U].push(N), b;
      }, {}),
      ee = (b) => {
        const N = new Set(h);
        N.has(b) ? N.delete(b) : N.add(b), m(N);
      },
      ue = async (b) => {
        console.log("🏢 選擇部門:", b), s(b), await we(b), t(!1);
      },
      we = async (b) => {
        console.log("🚀 開始取得藥品地圖資料，部門類型:", b), a(!0);
        try {
          const N = await ke.getMedMapByDepartment(b);
          if (N.Code === 200 && N.Data) {
            console.log("📡 API 回傳成功:", N.Data);
            const U = ct.convertMedMapApiToFakeData(N.Data);
            if (!ct.validateConvertedData(U)) {
              console.error("❌ 轉換後的資料驗證失敗"), u([]);
              return;
            }
            const w = ct.generateConversionReport(N.Data, U);
            u(U),
              o(U),
              console.log("💾 已暫存轉換後的資料到狀態中"),
              console.log("📊 最終轉換結果:", U),
              console.log("📋 轉換報告:", w);
          } else console.error("❌ API 回傳錯誤:", N), u([]), o(null);
        } catch (N) {
          console.error("💥 取得藥品地圖資料失敗:", N), u([]), o(null);
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
                children: D
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
                        Object.entries(X).map(([b, N]) =>
                          r.jsxs(
                            "div",
                            {
                              className: "space-y-1",
                              children: [
                                r.jsxs("button", {
                                  type: "button",
                                  onClick: () => ue(b),
                                  disabled: l,
                                  className: `w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 border ${
                                    n === b
                                      ? "bg-blue-50 text-blue-700 border-blue-200 shadow-sm"
                                      : "text-gray-700 hover:bg-gray-50 hover:shadow-sm border-transparent"
                                  } ${
                                    l ? "opacity-50 cursor-not-allowed" : ""
                                  }`,
                                  children: [
                                    r.jsxs("div", {
                                      className: "flex items-center space-x-3",
                                      children: [
                                        b === "B1F"
                                          ? r.jsx(Yu, { className: "w-4 h-4" })
                                          : r.jsx(ph, { className: "w-4 h-4" }),
                                        r.jsxs("div", {
                                          className: "text-left",
                                          children: [
                                            r.jsx("div", {
                                              className: "font-medium",
                                              children: b,
                                            }),
                                            r.jsxs("div", {
                                              className:
                                                "text-xs text-gray-500",
                                              children: [
                                                N.length,
                                                " ",
                                                g("sidebar.departments"),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    r.jsx("div", {
                                      onClick: (U) => {
                                        U.stopPropagation(), ee(b);
                                      },
                                      className:
                                        "p-1 hover:bg-gray-200/50 rounded transition-colors",
                                      children: h.has(b)
                                        ? r.jsx(Xu, { className: "w-4 h-4" })
                                        : r.jsx(oh, { className: "w-4 h-4" }),
                                    }),
                                  ],
                                }),
                                h.has(b) &&
                                  r.jsx("div", {
                                    className: "ml-6 space-y-2",
                                    children: N.map((U) =>
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
                                                children: U.name,
                                              }),
                                              r.jsx("span", {
                                                className: `text-xs px-2 py-1 rounded-full ${
                                                  U.type === "調劑台"
                                                    ? "bg-green-100 text-green-800"
                                                    : "bg-blue-100 text-blue-800"
                                                }`,
                                                children: U.type,
                                              }),
                                            ],
                                          }),
                                        },
                                        U.GUID
                                      )
                                    ),
                                  }),
                              ],
                            },
                            b
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
                      onClick: () => _(!0),
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
        r.jsx(yh, { isOpen: p, onClose: () => _(!1) }),
        r.jsx(vh, { isOpen: P, onClose: () => k(!1), onConfirm: H }),
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
      [S, D] = f.useState(e.position),
      [R, d] = f.useState(!1),
      [u, p] = f.useState(null),
      [_, P] = f.useState({ x: 0, y: 0 }),
      [k, T] = f.useState({ x: 0, y: 0 });
    f.useEffect(() => {
      console.log("🔄 CanvasComponent: position prop changed", {
        GUID: e.GUID,
        newPosition: e.position,
        currentPosition: S,
      }),
        D(e.position);
    }, [e.position]);
    const H = () => {
        try {
          const G = localStorage.getItem("medMap_setting");
          if (G) return JSON.parse(G).light_color || "red";
        } catch (G) {
          console.error("讀取高亮顏色設定失敗:", G);
        }
        return "red";
      },
      X = f.useCallback(
        async (G, ve) => {
          if (!i) return;
          console.log("🔄 更新組件位置:", G, ve);
          const ge = JSON.parse(JSON.stringify(i)),
            fe = (te) => {
              for (const I of te) {
                if (I.GUID === G)
                  return (
                    (I.position = { x: ve.x.toFixed(3), y: ve.y.toFixed(3) }),
                    console.log(
                      "✅ 組件位置已更新:",
                      I.name,
                      ve.x.toFixed(3),
                      ve.y.toFixed(3)
                    ),
                    !0
                  );
                if (
                  (I.components &&
                    Array.isArray(I.components) &&
                    fe(I.components)) ||
                  (I.contents && Array.isArray(I.contents) && fe(I.contents))
                )
                  return !0;
              }
              return !1;
            };
          if (fe(ge)) {
            c(ge), console.log("💾 全域資料已更新");
            try {
              console.log("📡 開始同步後端位置資料...");
              const te = await ke.updateContainerPosition({
                GUID: G,
                absolute_position: `${ve.x.toFixed(3)},${ve.y.toFixed(3)}`,
              });
              te.Code === 200
                ? (console.log("✅ 後端位置同步成功", te),
                  x("位置更新成功", "success"))
                : (console.error("❌ 後端位置同步失敗:", te),
                  x(`位置更新失敗: ${te.Result || "未知錯誤"}`, "error"));
            } catch (te) {
              console.error("💥 後端位置同步發生錯誤:", te),
                x("位置更新失敗: 網路錯誤", "error");
            }
          } else console.warn("⚠️ 未找到要更新的組件:", G);
        },
        [i, c, x]
      ),
      { position: ee, dimensions: ue, name: we, type: b } = e,
      N = f.useCallback(
        (G) => {
          const ve = l.current;
          if (ve)
            if ((T({ x: G.clientX, y: G.clientY }), n)) {
              G.preventDefault(),
                G.stopPropagation(),
                ve.setPointerCapture(G.pointerId);
              const ge = ve.getBoundingClientRect(),
                fe = G.clientX - ge.left,
                Ae = G.clientY - ge.top;
              j({ x: fe, y: Ae }), h(!0), d(!1);
            } else d(!1);
        },
        [n]
      ),
      U = f.useCallback(() => {
        if (!i) return [];
        const G = [],
          ve = (ge) => {
            for (const fe of ge)
              fe.GUID !== e.GUID &&
                fe.position &&
                G.push({
                  GUID: fe.GUID,
                  position: fe.position,
                  dimensions: fe.dimensions,
                }),
                fe.components &&
                  Array.isArray(fe.components) &&
                  ve(fe.components),
                fe.contents && Array.isArray(fe.contents) && ve(fe.contents);
          };
        return ve(i), G;
      }, [i, e.GUID]),
      v = f.useCallback(
        (G, ve) => {
          const fe = U();
          let Ae = G,
            te = ve;
          for (const I of fe) {
            const E = parseFloat(I.position.x),
              W = parseFloat(I.position.y);
            if (
              (Math.abs(G - E) < 20 && (Ae = E),
              Math.abs(ve - W) < 20 && (te = W),
              I.dimensions && e.dimensions)
            ) {
              const L = E + parseFloat(I.dimensions.width),
                re = G + parseFloat(e.dimensions.width);
              Math.abs(re - L) < 20 &&
                (Ae = L - parseFloat(e.dimensions.width));
              const ae = W + parseFloat(I.dimensions.depth),
                $ = ve + parseFloat(e.dimensions.depth);
              Math.abs($ - ae) < 20 &&
                (te = ae - parseFloat(e.dimensions.depth));
            }
          }
          return { x: Ae, y: te };
        },
        [U, e.dimensions]
      ),
      w = f.useCallback(
        (G) => {
          const ve = Math.abs(G.clientX - k.x),
            ge = Math.abs(G.clientY - k.y);
          if (((ve > 5 || ge > 5) && d(!0), !g || !n)) return;
          G.preventDefault(), G.stopPropagation();
          const fe = l.current;
          if (!fe) return;
          const Ae = fe.closest("[data-canvas-content]");
          if (!Ae) return;
          const te = Ae.getBoundingClientRect(),
            I = (G.clientX - te.left - m.x) / t,
            E = (G.clientY - te.top - m.y) / t,
            W = v(I, E);
          D(W);
        },
        [g, m, t, n, v, k]
      ),
      C = f.useCallback(
        (G) => {
          const ve = Math.abs(G.clientX - k.x),
            ge = Math.abs(G.clientY - k.y),
            fe = ve > 5 || ge > 5;
          if (n) {
            if (!g) return;
            G.preventDefault(), G.stopPropagation();
            const Ae = l.current;
            Ae && Ae.releasePointerCapture(G.pointerId),
              h(!1),
              fe ? X(e.GUID, S) : o && o(e),
              d(!1);
          } else
            !fe && o && (G.preventDefault(), G.stopPropagation(), o(e)), d(!1);
        },
        [g, n, o, e, X, S, k]
      ),
      M = f.useCallback(
        (G) => {
          const ve = l.current;
          if (!ve) return;
          const ge = G.touches[0];
          if (ge && (P({ x: ge.clientX, y: ge.clientY }), n)) {
            G.preventDefault(), G.stopPropagation(), p(ge.identifier);
            const fe = ve.getBoundingClientRect(),
              Ae = ge.clientX - fe.left,
              te = ge.clientY - fe.top;
            j({ x: Ae, y: te }), h(!0);
          }
        },
        [n]
      ),
      oe = f.useCallback(
        (G) => {
          if (!g || !n || u === null) return;
          G.preventDefault(), G.stopPropagation();
          const ve = l.current;
          if (!ve) return;
          const ge = Array.from(G.touches).find((W) => W.identifier === u);
          if (!ge) return;
          const fe = ve.closest("[data-canvas-content]");
          if (!fe) return;
          const Ae = fe.getBoundingClientRect(),
            te = (ge.clientX - Ae.left - m.x) / t,
            I = (ge.clientY - Ae.top - m.y) / t,
            E = v(te, I);
          D(E);
        },
        [g, m, t, n, u, v]
      ),
      B = f.useCallback(
        (G) => {
          const ve = Array.from(G.changedTouches)[0];
          if (!ve) return;
          const ge = Math.abs(ve.clientX - _.x),
            fe = Math.abs(ve.clientY - _.y),
            Ae = ge > 10 || fe > 10;
          if (n) {
            if (
              !g ||
              u === null ||
              !Array.from(G.changedTouches).some((I) => I.identifier === u)
            )
              return;
            G.preventDefault(),
              G.stopPropagation(),
              h(!1),
              p(null),
              P({ x: 0, y: 0 }),
              Ae ? X(e.GUID, S) : o && o(e);
          } else
            !Ae && o && (G.preventDefault(), G.stopPropagation(), o(e)),
              P({ x: 0, y: 0 });
        },
        [g, n, u, X, e, S, _, o]
      ),
      K = f.useCallback(
        (G) => {
          !g ||
            !n ||
            u === null ||
            !Array.from(G.changedTouches).some((ge) => ge.identifier === u) ||
            (G.preventDefault(),
            G.stopPropagation(),
            D(e.position),
            h(!1),
            p(null),
            P({ x: 0, y: 0 }));
        },
        [g, n, u, e.position]
      ),
      Ne = (G) => {
        if (s) return `highlight-breathe-${H()}`;
        switch (G) {
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
      de = (G) => {
        if (s) return `highlight-breathe-${H()}`;
        switch (G) {
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
      z = (G) => {
        if (s) return `highlight-tag-${H()}`;
        switch (G) {
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
      he = (G) => {
        const ve =
          G === "調劑台"
            ? "type.dispensingStation"
            : G === "藥庫"
            ? "type.warehouse"
            : G === "parent_container"
            ? "櫃體"
            : "type." + G;
        return a(ve) || G;
      };
    return r.jsx("div", {
      ref: l,
      className: `flex flex-col absolute border-2 rounded-lg shadow-lg hover:shadow-xl ${Ne(
        b
      )} overflow-hidden ${n ? "cursor-move" : "cursor-default"} ${
        g ? "shadow-2xl z-50" : ""
      }`,
      style: {
        left: `${S.x}px`,
        top: `${S.y}px`,
        minWidth: b === "調劑台" || b === "藥庫" ? "120px" : "180px",
        minHeight: b === "調劑台" || b === "藥庫" ? "60px" : "120px",
        userSelect: "none",
        touchAction: "none",
        transition: g
          ? "none"
          : "transform 0.2s ease-out, box-shadow 0.2s ease-out",
      },
      onPointerDown: N,
      onPointerMove: w,
      onPointerUp: C,
      onTouchStart: M,
      onTouchMove: oe,
      onTouchEnd: B,
      onTouchCancel: K,
      children: r.jsx("div", {
        className: `w-full min-w-[400px] h-auto flex items-start flex-1 justify-between p-2 border-gray-600 ${de(
          b
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
                  b
                )}`,
                children: he(b),
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
      [D, R] = f.useState(null),
      [d, u] = f.useState(!1);
    f.useEffect(() => {
      const X = () => {
        const ee = window.innerWidth < 680;
        u(ee);
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
      _ = () => {
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
          ee = i.current,
          ue = ee.getContext("2d");
        if (!ue || X.readyState !== X.HAVE_ENOUGH_DATA) {
          console.log("❌ Video not ready or no context"),
            (g.current = !1),
            setTimeout(() => {
              h && P();
            }, 100);
          return;
        }
        (ee.width = X.videoWidth),
          (ee.height = X.videoHeight),
          ue.drawImage(X, 0, 0, ee.width, ee.height),
          ee.toBlob(
            async (we) => {
              if (!we) return;
              const b = new File([we], "scan.jpg", { type: "image/jpeg" }),
                N = performance.now();
              try {
                console.log("📸 [相機掃描] 截取圖片並掃描...");
                const U = performance.now(),
                  v = await ke.scanBarcode(b),
                  w = performance.now();
                if (
                  (console.log(
                    `⏱️ [相機掃描] 掃描條碼API用時: ${(w - U).toFixed(2)}ms`
                  ),
                  !v.results || v.results.length === 0)
                ) {
                  console.log("⚠️ 未辨識到條碼，立即進行下一輪掃描"),
                    (g.current = !1),
                    h && P();
                  return;
                }
                const C = v.results[0];
                if (!C.code) {
                  console.log(
                    "⚠️ 辨識到條碼但無法讀取內容，立即進行下一輪掃描"
                  ),
                    (g.current = !1),
                    h && P();
                  return;
                }
                console.log("✅ 成功辨識條碼:", C.code),
                  console.log("📋 條碼類型:", C.type),
                  console.log("📊 信心度:", C.conf),
                  (g.current = !1),
                  _(),
                  t();
                try {
                  const M = performance.now(),
                    oe = await ke.searchByBarCode(C.code);
                  console.log("AI掃描回傳:", oe);
                  const B = performance.now();
                  if (
                    (console.log(
                      `⏱️ [相機掃描] 搜尋藥品資料API用時: ${(B - M).toFixed(
                        2
                      )}ms`
                    ),
                    console.log("🔍 條碼搜尋結果:", oe),
                    oe.Code === 200)
                  )
                    if (
                      (console.log("✅ 找到藥品資料:", oe.Data),
                      console.log("🎯 準備調用 onScanSuccess, mode:", s),
                      o("找到藥品資料", "success"),
                      n)
                    ) {
                      console.log("✅ onScanSuccess 存在，開始調用");
                      const K = performance.now();
                      n(C.code, oe.Data);
                      const Ne = performance.now();
                      console.log(
                        `⏱️ [相機掃描] 定位藥品用時: ${(Ne - K).toFixed(2)}ms`
                      );
                      const de = performance.now();
                      console.log(
                        `⏱️ [相機掃描] 總用時: ${(de - N).toFixed(2)}ms`
                      ),
                        console.log("✅ onScanSuccess 調用完成");
                    } else console.warn("⚠️ onScanSuccess 不存在");
                  else
                    oe.Code === -200 && oe.Result === "查無資料"
                      ? (console.log("⚠️ 查無資料，開啟建立條碼彈窗"),
                        o("查無條碼資料，請建立條碼", "warning"),
                        l(C.code))
                      : (console.log("❌ 搜尋失敗:", oe.Result),
                        o(oe.Result || "搜尋失敗", "error"));
                } catch (M) {
                  console.error("條碼搜尋錯誤:", M),
                    o("搜尋失敗，請稍後再試", "error");
                }
              } catch (U) {
                console.error("掃描錯誤:", U),
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
      k = () => {
        console.log("🚀 開始連續掃描模式"), (g.current = !1), P();
      };
    f.useEffect(
      () => (
        e ? p() : _(),
        () => {
          _();
        }
      ),
      [e]
    ),
      f.useEffect(() => {
        h
          ? (console.log("🚀 isScanning became true, starting continuous scan"),
            k())
          : (console.log("🛑 isScanning became false"), (g.current = !1));
      }, [h]);
    const T = () => {
        _(), t();
      },
      H = async (X) => {
        if (!c.current || !x.current) return;
        const ee = x.current.getBoundingClientRect(),
          ue = (X.clientX - ee.left) / ee.width,
          we = (X.clientY - ee.top) / ee.height;
        console.log("🎯 點擊聚焦位置:", { x: ue, y: we }),
          R({ x: X.clientX - ee.left, y: X.clientY - ee.top }),
          setTimeout(() => R(null), 1e3);
        try {
          const b = c.current.getVideoTracks()[0],
            N = b.getCapabilities();
          if (
            (console.log("📹 相機能力:", N),
            !N.focusMode || !N.focusMode.includes("manual"))
          ) {
            console.log("⚠️ 此相機不支援手動聚焦");
            return;
          }
          const U = {
            advanced: [
              {
                focusMode: "manual",
                focusDistance: 0,
                pointsOfInterest: [{ x: ue, y: we }],
              },
            ],
          };
          await b.applyConstraints(U), console.log("✅ 聚焦成功");
        } catch (b) {
          console.log("⚠️ 聚焦失敗 (可能不支援):", b);
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
                    onClick: H,
                    children: [
                      r.jsx("video", {
                        ref: a,
                        className: "w-full h-full object-cover",
                        playsInline: !0,
                        muted: !0,
                      }),
                      D &&
                        r.jsxs("div", {
                          className: "absolute pointer-events-none",
                          style: {
                            left: D.x,
                            top: D.y,
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
                          onClick: H,
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
      [D, R] = f.useState(!1),
      [d, u] = f.useState(!1),
      [p, _] = f.useState({ x: 0, y: 0 }),
      [P, k] = f.useState(!1),
      [T, H] = f.useState(!1),
      [X, ee] = f.useState(""),
      [ue, we] = f.useState([]),
      [b, N] = f.useState(null),
      U = {
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
      w = ($, V, F, J) => {
        try {
          const le = v(),
            xe = le.findIndex(
              (be) => be.department === $ && be.canvasType === V
            ),
            ce = { department: $, canvasType: V, scale: F, position: J };
          xe >= 0 ? (le[xe] = ce) : le.push(ce),
            localStorage.setItem("med_map_anchor", JSON.stringify(le));
        } catch (le) {
          console.error("Error saving canvas state to localStorage:", le);
        }
      },
      C = ($, V) =>
        v().find((J) => J.department === $ && J.canvasType === V) || null;
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
        const V = setInterval(async () => {
          try {
            console.log("🔄 Auto-refreshing data for InfiniteCanvas...");
            const F = await ke.getMedMapByDepartment(n);
            if (F.Code === 200 && F.Data) {
              console.log("📡 API 回傳成功，開始轉換資料");
              const J = ct.convertMedMapApiToFakeData(F.Data);
              if (!ct.validateConvertedData(J)) {
                console.error("❌ 轉換後的資料驗證失敗");
                return;
              }
              console.log(
                "✅ Data refreshed and converted successfully, updating state..."
              ),
                console.log("📊 Converted data to set:", J),
                o(J);
            }
          } catch (F) {
            console.error("❌ Failed to auto-refresh data:", F);
          }
        }, 2 * 60 * 1e3);
        return () => {
          clearInterval(V);
        };
      }, [g, n, o]),
      f.useEffect(() => {
        if (n) {
          const $ = C(n, "InfiniteCanvas");
          if ($) S({ x: $.position.x, y: $.position.y, scale: $.scale });
          else {
            const V = { x: 0, y: 0, scale: 1 };
            S(V), w(n, "InfiniteCanvas", V.scale, V);
          }
        }
      }, [n]),
      f.useEffect(() => {
        if (!n) return;
        const $ = setTimeout(() => {
          w(n, "InfiniteCanvas", j.scale, { x: j.x, y: j.y });
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
    const M = f.useMemo(() => {
      if (
        (console.log(
          "🔄 useMemo: Re-calculating components due to apiDepartmentData change"
        ),
        !s || s.length === 0)
      )
        return console.log("⚠️ No apiDepartmentData available"), [];
      const $ = s,
        V = [];
      console.log("🔍 Processing departments for InfiniteCanvas:", $);
      for (const F of $)
        if (
          (console.log("📦 Processing department:", F.name, "Type:", F.type),
          F.type === "調劑台" || F.type === "藥庫")
        ) {
          if (F.contents && Array.isArray(F.contents)) {
            console.log("  └─ Found", F.contents.length, "parent containers");
            for (const J of F.contents)
              console.log("    📌 Parent container:", {
                GUID: J.GUID,
                name: J.name,
                type: J.type,
                position: J.position,
                hasDimensions: !!J.dimensions,
                dimensions: J.dimensions,
              }),
                V.push({
                  GUID: J.GUID,
                  type: J.type,
                  name: `${J.name}`,
                  position: J.position,
                  dimensions: J.dimensions || {
                    width: 200,
                    height: 200,
                    depth: 200,
                  },
                  med_list: J.med_list || [],
                  serverName: J.serverName,
                  serverType: J.serverType,
                  Master_GUID: F.GUID,
                  contents: J.contents || [],
                });
          }
        } else
          F.contents &&
            Array.isArray(F.contents) &&
            F.contents.length > 0 &&
            (console.log("  └─ Found", F.contents.length, "contents"),
            V.push(...F.contents));
      return (
        console.log("✅ Total components for InfiniteCanvas:", V.length), V
      );
    }, [s]);
    f.useEffect(() => {
      console.log("🎨 InfiniteCanvas: components changed", {
        count: M.length,
        components: M.map(($) => ({
          GUID: $.GUID,
          name: $.name,
          type: $.type,
          position: $.position,
        })),
      });
    }, [M]),
      f.useEffect(() => {
        const $ = (F) => {
            F.code === "Space" && !F.repeat && (F.preventDefault(), k(!0));
          },
          V = (F) => {
            F.code === "Space" && (F.preventDefault(), k(!1), R(!1));
          };
        return (
          window.addEventListener("keydown", $),
          window.addEventListener("keyup", V),
          () => {
            window.removeEventListener("keydown", $),
              window.removeEventListener("keyup", V);
          }
        );
      }, []);
    const oe = f.useCallback(
        ($) => {
          var F;
          if (d) return;
          if (
            ($.ctrlKey && !navigator.userAgent.includes("Mac")) ||
            ($.metaKey && navigator.userAgent.includes("Mac"))
          ) {
            $.preventDefault(), $.stopPropagation();
            const J =
              (F = t.current) == null ? void 0 : F.getBoundingClientRect();
            if (!J) return;
            const le = $.clientX - J.left,
              xe = $.clientY - J.top,
              ce = $.deltaY > 0 ? 0.9 : 1.1,
              be = Math.max(0.1, Math.min(5, j.scale * ce)),
              Ce = be / j.scale,
              Ee = le - (le - j.x) * Ce,
              Ze = xe - (xe - j.y) * Ce;
            S({ x: Ee, y: Ze, scale: be });
          }
        },
        [j, d]
      ),
      B = f.useCallback(
        ($) => {
          d ||
            !P ||
            (R(!0), _({ x: $.clientX, y: $.clientY }), $.preventDefault());
        },
        [d, P]
      ),
      K = f.useCallback(
        ($) => {
          if (!D || d) return;
          const V = $.clientX - p.x,
            F = $.clientY - p.y;
          S((J) => ({ ...J, x: J.x + V, y: J.y + F })),
            _({ x: $.clientX, y: $.clientY });
        },
        [D, p, d]
      ),
      Ne = f.useCallback(() => {
        R(!1);
      }, []),
      de = f.useCallback(
        ($) => {
          if (!s) return [];
          const V = [],
            F = (J) => {
              for (const le of J)
                le.med_list &&
                  Array.isArray(le.med_list) &&
                  le.med_list.some((ce) => ce.code == $) &&
                  (console.log("✅ 找到藥品所在櫃體:", le.name, le.GUID),
                  V.push(le)),
                  le.components &&
                    Array.isArray(le.components) &&
                    F(le.components),
                  le.contents && Array.isArray(le.contents) && F(le.contents);
            };
          return F(s), V;
        },
        [s]
      ),
      z = f.useCallback(() => {
        try {
          const V = localStorage.getItem("medMap_setting");
          if (V) {
            const J = JSON.parse(V).light_sec;
            if (J != null && J !== "") {
              const le = Number(J);
              if (!isNaN(le) && le > 0) return le * 1e3;
            }
          }
        } catch (V) {
          console.error("讀取亮燈設定失敗:", V);
        }
        return 6e4;
      }, []),
      he = f.useCallback(() => {
        const $ = { rgb_color: "255,0,0", brightness: "100" };
        try {
          const V = localStorage.getItem("medMap_setting");
          if (V) {
            const F = JSON.parse(V),
              J = F.light_color || "red";
            return {
              rgb_color: U[J] || U.red,
              brightness: String(F.brightness !== void 0 ? F.brightness : 100),
            };
          }
        } catch (V) {
          console.error("讀取亮燈設定失敗:", V);
        }
        return $;
      }, []),
      G = f.useCallback(
        async ($) => {
          if (!$.trim()) return;
          console.log("🔍 搜尋藥碼:", $);
          const V = de($);
          if (V.length > 0) {
            const F = z(),
              J = he();
            console.log(`🎯 高亮 ${V.length} 個櫃體:`, V),
              console.log(`⏱️ 亮燈時長: ${F}ms (${F / 1e3}秒)`),
              console.log("💡 亮燈設定:", J);
            const le = V.map((ce) => ce.GUID);
            we(le), N($), x($);
            const xe = V.filter((ce) => ce.serverName && ce.serverType).map(
              (ce) => ({
                serverName: ce.serverName,
                serverType: ce.serverType,
                medicineCode: $,
                deviceType: ce.device_type,
              })
            );
            xe.length > 0 &&
              (await ps.startLighting(xe, J.rgb_color, J.brightness, F),
              setTimeout(() => {
                we([]), N(null), x(null);
              }, F));
          } else
            console.log("❌ 未找到包含此藥品的櫃體"), we([]), N(null), x(null);
        },
        [de, z, he, x]
      ),
      ve = ($, V) => {
        var xe, ce;
        console.log("📍 [相機掃描-部門視圖] 藥品定位模式 - 掃描到藥品:", {
          barcode: $,
          medicineData: V,
        });
        const F =
          ((xe = V[0]) == null ? void 0 : xe.CODE) ||
          ((ce = V[0]) == null ? void 0 : ce.code);
        H(!1);
        const J = performance.now();
        G(F);
        const le = performance.now();
        console.log(
          `⏱️ [相機掃描-部門視圖] 亮燈用時: ${(le - J).toFixed(2)}ms`
        );
      },
      ge = async ($) => {
        var V, F;
        if ($.key === "Enter") {
          if (($.preventDefault(), !X.trim())) {
            l("請輸入條碼", "warning");
            return;
          }
          const J = performance.now();
          try {
            console.log("🔍 [手動輸入-部門視圖] 搜尋條碼:", X);
            const le = performance.now(),
              xe = await ke.searchByBarCode(X),
              ce = performance.now();
            if (
              (console.log(
                `⏱️ [手動輸入-部門視圖] API搜尋藥品資料用時: ${(
                  ce - le
                ).toFixed(2)}ms`
              ),
              console.log("📋 條碼搜尋回應:", xe),
              xe.Code === 200 && xe.Data && xe.Data.length > 0)
            ) {
              const be =
                ((V = xe.Data[0]) == null ? void 0 : V.CODE) ||
                ((F = xe.Data[0]) == null ? void 0 : F.code);
              console.log("✅ 找到藥品資料:", xe.Data),
                l("找到藥品，開始亮燈", "success");
              const Ce = performance.now();
              G(be);
              const Ee = performance.now();
              console.log(
                `⏱️ [手動輸入-部門視圖] 亮燈用時: ${(Ee - Ce).toFixed(2)}ms`
              ),
                ee("");
              const Ze = performance.now();
              console.log(
                `⏱️ [手動輸入-部門視圖] 總用時: ${(Ze - J).toFixed(2)}ms`
              );
            } else
              xe.Code === -200 && xe.Result === "查無資料"
                ? (console.log("⚠️ 查無資料，開啟建立條碼彈窗"),
                  l("查無條碼資料，請建立條碼", "warning"),
                  a(X),
                  ee(""))
                : (console.log("❌ 搜尋失敗:", xe.Result),
                  l(xe.Result || "搜尋失敗", "error"));
          } catch (le) {
            console.error("條碼搜尋錯誤:", le),
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
            const V = $.map((F) => F.GUID);
            we(V), N(c), console.log("✨ UI 高亮已更新:", V);
          }
        } else we([]), N(null);
      }, [c, de]);
    const [fe, Ae] = f.useState(null),
      [te, I] = f.useState({ x: 0, y: 0 }),
      E = ($) => {
        if ($.length < 2) return null;
        const V = $[0],
          F = $[1];
        return Math.sqrt(
          Math.pow(F.clientX - V.clientX, 2) +
            Math.pow(F.clientY - V.clientY, 2)
        );
      },
      W = ($) => {
        if ($.length === 1) return { x: $[0].clientX, y: $[0].clientY };
        const V = $[0],
          F = $[1];
        return {
          x: (V.clientX + F.clientX) / 2,
          y: (V.clientY + F.clientY) / 2,
        };
      },
      L = f.useCallback(
        ($) => {
          if (!d) {
            if ($.touches.length === 2) {
              const V = E($.touches),
                F = W($.touches);
              Ae(V), I(F);
            } else if ($.touches.length === 1) {
              const V = $.touches[0];
              _({ x: V.clientX, y: V.clientY }), R(!0);
            }
          }
        },
        [d]
      ),
      re = f.useCallback(
        ($) => {
          var V;
          if (!d) {
            if (($.preventDefault(), $.touches.length === 2 && fe !== null)) {
              const F = E($.touches),
                J = W($.touches);
              if (F && fe) {
                const le =
                  (V = t.current) == null ? void 0 : V.getBoundingClientRect();
                if (!le) return;
                const xe = F / fe,
                  ce = Math.max(0.1, Math.min(5, j.scale * xe)),
                  be = J.x - le.left,
                  Ce = J.y - le.top,
                  Ee = ce / j.scale,
                  Ze = be - (be - j.x) * Ee,
                  Pe = Ce - (Ce - j.y) * Ee;
                S({ x: Ze, y: Pe, scale: ce }), Ae(F), I(J);
              }
            } else if ($.touches.length === 1 && D) {
              const F = $.touches[0],
                J = F.clientX - p.x,
                le = F.clientY - p.y;
              S((xe) => ({ ...xe, x: xe.x + J, y: xe.y + le })),
                _({ x: F.clientX, y: F.clientY });
            }
          }
        },
        [j, fe, D, p, d]
      ),
      ae = f.useCallback(() => {
        Ae(null), R(!1);
      }, []);
    return (
      f.useEffect(() => {
        const $ = t.current;
        if ($)
          return (
            $.addEventListener("wheel", oe, { passive: !1 }),
            () => $.removeEventListener("wheel", oe)
          );
      }, [oe]),
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
                  onChange: ($) => ee($.target.value),
                  onKeyPress: ge,
                  placeholder: "輸入條碼或掃描...",
                  className:
                    "px-4 py-2 w-50 focus:outline-none text-gray-700 disabled:opacity-50",
                }),
                r.jsx("button", {
                  onClick: () => H(!0),
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
            } ${D ? "cursor-grabbing" : ""}`,
            onMouseDown: B,
            onMouseMove: K,
            onMouseUp: Ne,
            onMouseLeave: Ne,
            onTouchStart: L,
            onTouchMove: re,
            onTouchEnd: ae,
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
                    M.map(($) =>
                      r.jsx(
                        Nh,
                        {
                          component: $,
                          scale: j.scale,
                          isLocked: d,
                          isHighlighted: ue.includes($.GUID),
                          onContainerClick: (V) => {
                            console.log("🖱️ 點擊櫃體，傳遞亮燈藥品代碼:", b),
                              i(V, b);
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
            onClose: () => H(!1),
            onScanSuccess: ve,
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
        openEditParentContainerModal: D,
        updateContainerInLocalData: R,
        removeContainerFromLocalData: d,
      } = tt(),
      { t: u } = jt(),
      [p, _] = f.useState(!1),
      [P, k] = f.useState(""),
      [T, H] = f.useState(!1),
      [X, ee] = f.useState(e.name),
      [ue, we] = f.useState(!1),
      [b, N] = f.useState(!1);
    f.useEffect(() => {
      ee(e.name);
    }, [e.name]);
    const U = (z) => {
        z.stopPropagation(), k(e.name || ""), _(!0);
      },
      v = (z) => {
        z.stopPropagation(), _(!1), k("");
      },
      w = (z) => {
        z.stopPropagation(), N(!0);
      },
      C = (z) => {
        z.stopPropagation(), N(!1);
      },
      M = async (z) => {
        z.stopPropagation(), we(!0);
        try {
          let he;
          if (e.type === "parent_container")
            he = await ke.deleteParentContainer(e.GUID);
          else if (e.type === "sub_container")
            he = await ke.deleteSubContainer(e.GUID);
          else if (
            e.type === "store_shelves" ||
            e.type === "dispensing_shelves"
          )
            he = await ke.deleteShelfContainer(e.GUID);
          else {
            m("不支援的容器類型", "error"), we(!1), N(!1);
            return;
          }
          he.Code === 200
            ? (m("刪除成功", "success"), d(e.GUID), N(!1))
            : m(he.Result || "刪除失敗", "error");
        } catch (he) {
          console.error("刪除容器失敗:", he),
            m("刪除失敗，請稍後再試", "error");
        } finally {
          we(!1), N(!1);
        }
      },
      oe = async (z) => {
        if ((z.stopPropagation(), !P.trim())) {
          m("名稱不能為空", "error");
          return;
        }
        if (P === e.name) {
          _(!1);
          return;
        }
        H(!0);
        try {
          const he = [
            {
              GUID: e.GUID,
              name: P.trim(),
              Master_GUID: e.Master_GUID,
              position: e.gird_position,
              serverName: e.serverName,
              serverType: e.serverType,
            },
          ];
          let G;
          if (e.type === "store_shelves" || e.type === "dispensing_shelves")
            G = await ke.updateMedMapShelf(he);
          else if (e.type === "sub_container")
            G = await ke.updateSubSection(he);
          else if (e.type === "parent_container")
            G = await ke.updateMedMapSection(he);
          else {
            m("不支援的容器類型", "error"), H(!1);
            return;
          }
          G.Code === 200
            ? (m("名稱更新成功", "success"),
              _(!1),
              ee(P.trim()),
              R(e.GUID, { name: P.trim() }))
            : m(G.Result || "更新失敗", "error");
        } catch (he) {
          console.error("更新名稱失敗:", he),
            m("更新失敗，請稍後再試", "error");
        } finally {
          H(!1);
        }
      },
      B = (z) => {
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
      K = (z) => {
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
      Ne = (z) => {
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
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${B(
            e.type || 0
          )} ${K(e.type || 0)}`,
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
                          onChange: (z) => k(z.target.value),
                          onClick: (z) => z.stopPropagation(),
                          className:
                            "text-base font-semibold text-gray-800 border-2 border-blue-400 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500",
                          disabled: T,
                          autoFocus: !0,
                        }),
                        r.jsx("button", {
                          onClick: oe,
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
                          onClick: U,
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
                    className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${Ne(
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
                      onClick: w,
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
            b &&
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
                          onClick: C,
                          disabled: ue,
                          className:
                            "px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50",
                          children: "取消",
                        }),
                        r.jsx("button", {
                          onClick: M,
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
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${B(
            e.type || 0
          )} ${K(
            e.type || 0
          )} cursor-pointer hover:bg-black/5 transition-colors`,
          onClick: (z) => {
            p || D(e);
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
                          onChange: (z) => k(z.target.value),
                          onClick: (z) => z.stopPropagation(),
                          className:
                            "text-base font-semibold text-gray-800 border-2 border-blue-400 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500",
                          disabled: T,
                          autoFocus: !0,
                        }),
                        r.jsx("button", {
                          onClick: (z) => {
                            z.stopPropagation(), oe(z);
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
                            z.stopPropagation(), U(z);
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
                      className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${Ne(
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
                      onClick: w,
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
            b &&
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
                          onClick: C,
                          disabled: ue,
                          className:
                            "px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50",
                          children: "取消",
                        }),
                        r.jsx("button", {
                          onClick: M,
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
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${B(
            e.type || 0
          )} ${K(e.type || 0)}`,
          children: [
            r.jsx("div", {
              className: "flex items-center mr-4",
              children:
                e.type != "parent_container"
                  ? r.jsx("span", {
                      className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${Ne(
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
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${B(
            e.type || 0
          )} ${K(e.type || 0)}`,
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
                          onChange: (z) => k(z.target.value),
                          onClick: (z) => z.stopPropagation(),
                          className:
                            "text-base font-semibold text-gray-800 border-2 border-blue-400 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500",
                          disabled: T,
                          autoFocus: !0,
                        }),
                        r.jsx("button", {
                          onClick: oe,
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
                            z.stopPropagation(), U(z);
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
                    className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${Ne(
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
                    onClick: w,
                    title: "刪除容器",
                    children: r.jsx(Sr, { className: "w-5 h-5 text-red-600" }),
                  }),
                r.jsx("button", {
                  className: "p-1 hover:bg-black/10 rounded transition-colors",
                  onClick: (z) => {
                    z.stopPropagation();
                    const he = {
                      GUID: `new_medbox_${Date.now()}`,
                      name: "",
                      box_type: "",
                      width: [],
                      width_index: 0,
                      med_info: [],
                      parentShelf: e,
                    };
                    x(he), g("add"), h(!0);
                  },
                  title: u("modal.add"),
                  children: r.jsx(Dt, { className: "w-6 h-6 text-green-700" }),
                }),
              ],
            }),
            b &&
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
                          onClick: C,
                          disabled: ue,
                          className:
                            "px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50",
                          children: "取消",
                        }),
                        r.jsx("button", {
                          onClick: M,
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
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${B(
            e.type || 0
          )} ${K(
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
                          onChange: (z) => k(z.target.value),
                          onClick: (z) => z.stopPropagation(),
                          className:
                            "text-base font-semibold text-gray-800 border-2 border-blue-400 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500",
                          disabled: T,
                          autoFocus: !0,
                        }),
                        r.jsx("button", {
                          onClick: (z) => {
                            z.stopPropagation(), oe(z);
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
                            z.stopPropagation(), U(z);
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
                    className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${Ne(
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
                    onClick: w,
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
            b &&
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
                          onClick: C,
                          disabled: ue,
                          className:
                            "px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50",
                          children: "取消",
                        }),
                        r.jsx("button", {
                          onClick: M,
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
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${B(
            e.type || 0
          )} ${K(e.type || 0)}`,
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
                      className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${Ne(
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
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${B(
            e.type || 0
          )} ${K(e.type || 0)}`,
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
                      className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${Ne(
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
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${B(
            e.type || 0
          )} ${K(e.type || 0)}`,
          children: [
            r.jsx("div", {
              className: "flex items-center space-x-2 mr-6",
              children:
                e.type != "parent_container"
                  ? r.jsx("span", {
                      className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${Ne(
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
      [D, R] = f.useState({ x: 0, y: 0, scale: 1 }),
      [d, u] = f.useState(!1),
      [p, _] = f.useState(!1),
      [P, k] = f.useState({ x: 0, y: 0 }),
      [T, H] = f.useState(!1),
      [X, ee] = f.useState(""),
      [ue, we] = f.useState(!1),
      [b, N] = f.useState(null),
      [U, v] = f.useState(!1),
      [w, C] = f.useState({
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
      [M, oe] = f.useState(null),
      B = f.useRef({}),
      K = () =>
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ) ||
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0,
      Ne = 8,
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
      z = (y, se, Y, A) => {
        try {
          const q = de(),
            O = q.findIndex((Z) => Z.department === y && Z.canvasType === se),
            Q = { department: y, canvasType: se, scale: Y, position: A };
          O >= 0 ? (q[O] = Q) : q.push(Q),
            localStorage.setItem("med_map_anchor", JSON.stringify(q));
        } catch (q) {
          console.error("Error saving canvas state to localStorage:", q);
        }
      },
      he = (y, se) =>
        de().find((A) => A.department === y && A.canvasType === se) || null;
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
        const se = setInterval(async () => {
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
        }, 2 * 60 * 1e3);
        return () => {
          clearInterval(se);
        };
      }, [j, s, l]),
      f.useEffect(() => {
        if (s) {
          const y = he(s, "drugCanvas");
          if (y) R({ x: y.position.x, y: y.position.y, scale: y.scale });
          else {
            const se = { x: 0, y: 0, scale: 1 };
            R(se), z(s, "drugCanvas", se.scale, se);
          }
        }
      }, [s]),
      f.useEffect(() => {
        if (!s) return;
        const y = setTimeout(() => {
          z(s, "drugCanvas", D.scale, { x: D.x, y: D.y });
        }, 500);
        return () => clearTimeout(y);
      }, [D, s]);
    const G = (y) =>
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
      ge = (y) => {
        const [se, Y] = y.split(",").map(Number);
        return { row: se || 0, col: Y || 0 };
      },
      fe = (y, se) => {
        const Y = (q, O = null) => {
            if (q.GUID === y) return { container: q, parent: O };
            if (q.contents)
              for (const Q of q.contents) {
                const Z = Y(Q, q);
                if (Z) return Z;
              }
            return null;
          },
          A = rt();
        for (const q of A) {
          const O = Y(q);
          if (O) return O;
        }
        return null;
      },
      Ae = (y, se) => {
        if (!y.contents) return [];
        const Y = se;
        if (!Y) return y.contents;
        const A = ge(Y.gird_position);
        console.log("📤 移除容器位置:", A);
        for (const q of y.contents) {
          const O = ge(q.gird_position);
          if (O.row === A.row && O.col > A.col) {
            const Q = O.col - 1;
            (q.gird_position = `${O.row},${Q}`),
              console.log(
                `  ← 容器 ${q.GUID}: (${O.row},${O.col}) → (${O.row},${Q})`
              ),
              (B.current[q.GUID] = {
                GUID: q.GUID,
                Master_GUID: y.GUID,
                position: `${O.row},${Q}`,
                serverName: y.serverName,
                serverType: y.serverType,
                type: q.type,
                containerData: q,
              });
          }
        }
        return console.log("✓ 重新計算完成"), y.contents;
      },
      te = (y, se, Y, A, q) => {
        if (
          (y.contents || (y.contents = []),
          console.log("📥 插入容器到位置:", `(${Y},${A})`),
          console.log("   插入方向:", q),
          console.log("   目標父容器:", y.GUID),
          console.log("   插入前容器數量:", y.contents.length),
          y.contents.length === 0)
        )
          (Y = 0), (A = 0), console.log("   父容器為空，放置在 (0,0)");
        else {
          const O = y.contents
            .filter((Q) => {
              const Z = ge(Q.gird_position || "0,0");
              return Z.row === Y && Z.col >= A;
            })
            .sort((Q, Z) => {
              const pe = ge(Q.gird_position || "0,0");
              return ge(Z.gird_position || "0,0").col - pe.col;
            });
          console.log(`   同 row ${Y} 需要移動的容器數量:`, O.length);
          for (const Q of O) {
            const Z = ge(Q.gird_position || "0,0"),
              pe = Z.col + 1;
            (Q.gird_position = `${Z.row},${pe}`),
              console.log(
                `  → 容器 ${Q.GUID}: (${Z.row},${Z.col}) → (${Z.row},${pe})`
              ),
              (B.current[Q.GUID] = {
                GUID: Q.GUID,
                Master_GUID: y.GUID,
                position: `${Z.row},${pe}`,
                serverName: y.serverName,
                serverType: y.serverType,
                type: Q.type,
                containerData: Q,
              });
          }
        }
        (se.gird_position = `${Y},${A}`),
          (se.Master_GUID = y.GUID),
          console.log(`Inserted container ${se.GUID} at position ${Y},${A}`),
          y.contents.push(se),
          (B.current[se.GUID] = {
            GUID: se.GUID,
            Master_GUID: y.GUID,
            position: `${Y},${A}`,
            serverName: y.serverName,
            serverType: y.serverType,
            type: se.type,
            containerData: se,
          }),
          se.type === "dispensing_shelves" &&
            se.contents &&
            se.contents.forEach((O) => {
              O.type === "med_box" &&
                (B.current[O.GUID] = {
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
      I = (y, se, Y) => {
        const A = y.getBoundingClientRect(),
          q = A.left + A.width / 2,
          O = A.top + A.height / 2,
          Q = se - q,
          Z = Y - O;
        return Math.abs(Q) > Math.abs(Z)
          ? Q > 0
            ? "right"
            : "left"
          : Z > 0
          ? "bottom"
          : "top";
      },
      E = (y, se, Y, A) => {
        if (!p) return;
        if ((A.preventDefault(), A.stopPropagation(), w.floatingElement))
          try {
            w.floatingElement.parentNode &&
              w.floatingElement.parentNode.removeChild(w.floatingElement);
          } catch (ye) {
            console.error("清除舊浮動元素失敗:", ye);
          }
        const q = K(),
          O =
            "touches" in A
              ? A.touches[0].clientX
              : ("pointerId" in A, A.clientX),
          Q =
            "touches" in A
              ? A.touches[0].clientY
              : ("pointerId" in A, A.clientY),
          Z = Y.getBoundingClientRect(),
          pe = { x: O - Z.left, y: Q - Z.top },
          ne = Y.cloneNode(!0);
        (ne.style.position = "fixed"),
          (ne.style.left = `${O - pe.x}px`),
          (ne.style.top = `${Q - pe.y}px`),
          (ne.style.width = `${Z.width}px`),
          (ne.style.height = `${Z.height}px`),
          (ne.style.zIndex = "9999"),
          (ne.style.opacity = "0.8"),
          (ne.style.boxShadow = "0 10px 25px rgba(0,0,0,0.3)"),
          (ne.style.pointerEvents = "none"),
          document.body.appendChild(ne),
          console.log("開始拖曳 stockItem:", y),
          console.log("來源 shelf:", se),
          C({
            isDragging: !0,
            draggedContainer: null,
            draggedElement: Y,
            floatingElement: ne,
            originalParent: null,
            originalPosition: "",
            originalIndex: -1,
            mouseOffset: pe,
            isMobileDrag: q,
            originalData: null,
            draggedStockItem: y,
            draggedStockShelf: se,
          });
      },
      W = (y, se, Y) => {
        if (!p || !G(y.type)) return;
        if (y.type === "sub_container" && !m) {
          h("需要開啟後台模式才能移動子容器", "error");
          return;
        }
        if (
          ((B.current = {}),
          Y.preventDefault(),
          Y.stopPropagation(),
          w.floatingElement)
        )
          try {
            w.floatingElement.parentNode &&
              w.floatingElement.parentNode.removeChild(w.floatingElement);
          } catch (De) {
            console.error("清除舊浮動元素失敗:", De);
          }
        const A = K(),
          q =
            "touches" in Y
              ? Y.touches[0].clientX
              : ("pointerId" in Y, Y.clientX),
          O =
            "touches" in Y
              ? Y.touches[0].clientY
              : ("pointerId" in Y, Y.clientY),
          Q = se.getBoundingClientRect(),
          Z = { x: q - Q.left, y: O - Q.top },
          pe = fe(y.GUID);
        if (!pe) return;
        console.log("拖曳目標", y), console.log("拖曳目標", pe);
        const ne = se.cloneNode(!0);
        (ne.style.position = "fixed"),
          (ne.style.left = `${q - Z.x}px`),
          (ne.style.top = `${O - Z.y}px`),
          (ne.style.width = `${Q.width}px`),
          (ne.style.height = `${Q.height}px`),
          (ne.style.zIndex = "9999"),
          (ne.style.opacity = "0.8"),
          (ne.style.boxShadow = "0 10px 25px rgba(0,0,0,0.3)"),
          (ne.style.pointerEvents = "none"),
          document.body.appendChild(ne);
        const ye = pe.parent.contents.findIndex((De) => De.GUID === y.GUID),
          me = JSON.parse(JSON.stringify(pe.parent.contents));
        pe.parent.contents.splice(ye, 1), console.log(ye);
        const je = pe.parent,
          Te = Ae(pe.parent, y);
        (pe.parent.contents = Te),
          console.log(pe.parent),
          C({
            isDragging: !0,
            draggedContainer: y,
            draggedElement: se,
            floatingElement: ne,
            originalParent: je,
            originalPosition: y.gird_position,
            originalIndex: ye,
            mouseOffset: Z,
            isMobileDrag: A,
            originalData: me,
          });
      },
      L = (y) => {
        if (!w.isDragging || !w.floatingElement) return;
        const se = "touches" in y ? y.touches[0].clientX : y.clientX,
          Y = "touches" in y ? y.touches[0].clientY : y.clientY;
        if (
          ((w.floatingElement.style.left = `${se - w.mouseOffset.x}px`),
          (w.floatingElement.style.top = `${Y - w.mouseOffset.y}px`),
          w.draggedStockItem)
        ) {
          const O = document.elementFromPoint(se, Y),
            Q = O == null ? void 0 : O.closest("[data-stock-guid]");
          if (Q) {
            const pe = Q.getAttribute("data-stock-guid"),
              ne = (me) => {
                for (const je of me) {
                  if (je.type === "store_shelves" && je.medMapStock) {
                    const Te = je.medMapStock.find((De) => De.GUID === pe);
                    if (Te) return { stockItem: Te, shelf: je };
                  }
                  if (je.contents) {
                    const Te = ne(je.contents);
                    if (Te) return Te;
                  }
                }
                return null;
              },
              ye = ne(o);
            if (ye && ye.stockItem.GUID !== w.draggedStockItem.GUID) {
              const me = Q.getBoundingClientRect(),
                je = me.left + me.width / 2,
                Te = me.top + me.height / 2,
                De = Math.abs(se - je),
                $e = Math.abs(Y - Te);
              let _e;
              De > $e
                ? (_e = se < je ? "left" : "right")
                : (_e = Y < Te ? "top" : "bottom"),
                oe({
                  container: ye.shelf,
                  direction: null,
                  element: Q,
                  stockItem: ye.stockItem,
                  stockItemDirection: _e,
                });
              return;
            }
          }
          const Z = O == null ? void 0 : O.closest("[data-container-guid]");
          if (Z) {
            const pe = Z.getAttribute("data-container-guid"),
              ne = fe(pe);
            if (ne && ne.container.type === "store_shelves") {
              oe({ container: ne.container, direction: null, element: Z });
              return;
            }
          }
          oe(null);
          return;
        }
        const A = document.elementFromPoint(se, Y),
          q = A == null ? void 0 : A.closest("[data-container-guid]");
        if (q) {
          const O = q.getAttribute("data-container-guid"),
            Q = fe(O);
          if (Q) {
            const Z = ve(w.draggedContainer.type),
              pe = w.draggedContainer.type,
              ne = Q.container.type;
            if (Z.includes(ne)) {
              const ye = I(q, se, Y);
              if (pe === "med_box" && !["left", "right"].includes(ye)) {
                oe(null);
                return;
              }
              oe({ container: Q.container, direction: ye, element: q });
              return;
            }
            if (pe === "parent_container" || pe === "sub_container") {
              let ye = q.parentElement;
              for (; ye; ) {
                if (ye.hasAttribute("data-container-guid")) {
                  const me = ye.getAttribute("data-container-guid"),
                    je = fe(me);
                  if (je && Z.includes(je.container.type)) {
                    const Te = I(ye, se, Y);
                    console.log(
                      `🔼 向上找到有效目標: ${je.container.type} (${je.container.name})`
                    ),
                      oe({
                        container: je.container,
                        direction: Te,
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
        oe(null);
      },
      re = async (y) => {
        if (!w.isDragging) return;
        if (w.floatingElement)
          try {
            w.floatingElement.parentNode &&
              w.floatingElement.parentNode.removeChild(w.floatingElement);
          } catch (q) {
            console.error("清除浮動元素失敗:", q);
          }
        if (w.draggedStockItem && w.draggedStockShelf) {
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
                Q = w.draggedStockShelf,
                Z = w.draggedStockItem,
                pe = (M.stockItem.location || "0,0").split(","),
                ne = Number(pe[0] || "0"),
                ye = (Z.location || "0,0").split(","),
                me = Number(ye[0] || "0"),
                je = Number(ye[1] || "0");
              if (O.GUID === Q.GUID) {
                console.log("同一層架內移動");
                const De = Number(pe[1] || "0");
                if (
                  M.stockItemDirection === "top" ||
                  M.stockItemDirection === "bottom"
                ) {
                  console.log("垂直移動（上下）");
                  let $e;
                  if (
                    (M.stockItemDirection === "top" ? ($e = De) : ($e = De + 1),
                    me === ne)
                  ) {
                    console.log("同一列內的深度移動"),
                      Q.medMapStock.forEach((Re) => {
                        const Oe = (Re.location || "0,0").split(","),
                          Me = Number(Oe[0] || "0"),
                          Ue = Number(Oe[1] || "0");
                        if (Me === me && Re.GUID !== Z.GUID) {
                          if (Ue > je) {
                            const mt = Ue - 1;
                            mt >= $e
                              ? (Re.location = `${Me},${mt + 1}`)
                              : (Re.location = `${Me},${mt}`),
                              q.push({ ...Re });
                          } else if (Ue < je) {
                            const mt = $e > je ? $e - 1 : $e;
                            Ue >= mt &&
                              ((Re.location = `${Me},${Ue + 1}`),
                              q.push({ ...Re }));
                          }
                        }
                      });
                    const _e = $e > je ? $e - 1 : $e;
                    (Z.location = `${ne},${_e}`), q.push({ ...Z });
                  } else
                    console.log("跨列移動到目標列"),
                      Q.medMapStock.forEach((_e) => {
                        const Re = (_e.location || "0,0").split(","),
                          Oe = Number(Re[0] || "0"),
                          Me = Number(Re[1] || "0");
                        Oe === me &&
                          _e.GUID !== Z.GUID &&
                          Me > je &&
                          ((_e.location = `${Oe},${Me - 1}`),
                          q.push({ ..._e }));
                      }),
                      Q.medMapStock.forEach((_e) => {
                        const Re = (_e.location || "0,0").split(","),
                          Oe = Number(Re[0] || "0"),
                          Me = Number(Re[1] || "0");
                        Oe === ne &&
                          _e.GUID !== Z.GUID &&
                          Me >= $e &&
                          ((_e.location = `${Oe},${Me + 1}`),
                          q.push({ ..._e }));
                      }),
                      (Z.location = `${ne},${$e}`),
                      q.push({ ...Z });
                } else {
                  console.log("水平移動（左右）");
                  const $e = Q.medMapStock.findIndex(
                    (Oe) => Oe.GUID === Z.GUID
                  );
                  $e !== -1 && Q.medMapStock.splice($e, 1),
                    Q.medMapStock.forEach((Oe) => {
                      const Me = (Oe.location || "0,0").split(","),
                        Ue = Number(Me[0] || "0"),
                        mt = Number(Me[1] || "0");
                      Ue > me &&
                        ((Oe.location = `${Ue - 1},${mt}`), q.push({ ...Oe }));
                    });
                  let _e;
                  const Re = ne > me ? ne - 1 : ne;
                  M.stockItemDirection === "left" ? (_e = Re) : (_e = Re + 1),
                    Q.medMapStock.forEach((Oe) => {
                      const Me = (Oe.location || "0,0").split(","),
                        Ue = Number(Me[0] || "0"),
                        mt = Number(Me[1] || "0");
                      Ue >= _e &&
                        ((Oe.location = `${Ue + 1},${mt}`), q.push({ ...Oe }));
                    }),
                    (Z.location = `${_e},${je}`),
                    Q.medMapStock.push(Z),
                    Q.medMapStock.sort((Oe, Me) => {
                      const Ue = (Oe.location || "0,0").split(","),
                        mt = (Me.location || "0,0").split(",");
                      return Number(Ue[0] || "0") - Number(mt[0] || "0");
                    }),
                    q.push({ ...Z });
                }
              } else {
                console.log("不同層架間移動");
                const De = Number(pe[1] || "0"),
                  $e = Q.medMapStock.findIndex((_e) => _e.GUID === Z.GUID);
                if (
                  ($e !== -1 && Q.medMapStock.splice($e, 1),
                  M.stockItemDirection === "top" ||
                    M.stockItemDirection === "bottom")
                ) {
                  console.log("跨層架垂直移動到目標列"),
                    Q.medMapStock.forEach((Re) => {
                      const Oe = (Re.location || "0,0").split(","),
                        Me = Number(Oe[0] || "0"),
                        Ue = Number(Oe[1] || "0");
                      Me === me &&
                        Ue > je &&
                        ((Re.location = `${Me},${Ue - 1}`), q.push({ ...Re }));
                    });
                  let _e;
                  M.stockItemDirection === "top" ? (_e = De) : (_e = De + 1),
                    O.medMapStock.forEach((Re) => {
                      const Oe = (Re.location || "0,0").split(","),
                        Me = Number(Oe[0] || "0"),
                        Ue = Number(Oe[1] || "0");
                      Me === ne &&
                        Ue >= _e &&
                        ((Re.location = `${Me},${Ue + 1}`), q.push({ ...Re }));
                    }),
                    (Z.location = `${ne},${_e}`),
                    (Z.shelf_guid = O.GUID),
                    O.medMapStock.push(Z),
                    O.medMapStock.sort((Re, Oe) => {
                      const Me = (Re.location || "0,0").split(","),
                        Ue = (Oe.location || "0,0").split(",");
                      return Number(Me[0] || "0") - Number(Ue[0] || "0");
                    }),
                    q.push({ ...Z });
                } else {
                  console.log("跨層架水平移動"),
                    Q.medMapStock.forEach((Re) => {
                      const Oe = (Re.location || "0,0").split(","),
                        Me = Number(Oe[0] || "0"),
                        Ue = Number(Oe[1] || "0");
                      Me > me &&
                        ((Re.location = `${Me - 1},${Ue}`), q.push({ ...Re }));
                    });
                  let _e;
                  M.stockItemDirection === "left" ? (_e = ne) : (_e = ne + 1),
                    O.medMapStock.forEach((Re) => {
                      const Oe = (Re.location || "0,0").split(","),
                        Me = Number(Oe[0] || "0"),
                        Ue = Number(Oe[1] || "0");
                      Me >= _e &&
                        ((Re.location = `${Me + 1},${Ue}`), q.push({ ...Re }));
                    }),
                    (Z.location = `${_e},${je}`),
                    (Z.shelf_guid = O.GUID),
                    O.medMapStock.push(Z),
                    O.medMapStock.sort((Re, Oe) => {
                      const Me = (Re.location || "0,0").split(","),
                        Ue = (Oe.location || "0,0").split(",");
                      return Number(Me[0] || "0") - Number(Ue[0] || "0");
                    }),
                    q.push({ ...Z });
                }
              }
            } else if (M.container.type === "store_shelves") {
              console.log("拖曳到 store_shelves 容器");
              const O = M.container,
                Q = w.draggedStockShelf,
                Z = w.draggedStockItem,
                pe = (Z.location || "0,0").split(","),
                ne = Number(pe[0] || "0"),
                ye = Q.medMapStock.findIndex((me) => me.GUID === Z.GUID);
              ye !== -1 &&
                (Q.medMapStock.splice(ye, 1),
                Q.medMapStock.forEach((me) => {
                  const je = (me.location || "0,0").split(","),
                    Te = Number(je[0] || "0"),
                    De = Number(je[1] || "0");
                  Te > ne &&
                    ((me.location = `${Te - 1},${De}`), q.push({ ...me }));
                })),
                (Z.location = "0,0"),
                (Z.shelf_guid = O.GUID),
                O.medMapStock || (O.medMapStock = []),
                O.medMapStock.forEach((me) => {
                  const je = (me.location || "0,0").split(","),
                    Te = Number(je[0] || "0"),
                    De = Number(je[1] || "0");
                  (me.location = `${Te + 1},${De}`), q.push({ ...me });
                }),
                O.medMapStock.push(Z),
                O.medMapStock.sort((me, je) => {
                  const Te = (me.location || "0,0").split(","),
                    De = (je.location || "0,0").split(",");
                  return Number(Te[0] || "0") - Number(De[0] || "0");
                }),
                q.push({ ...Z });
            }
            if (q.length > 0) {
              console.log("準備更新的 stockItems:", q);
              try {
                const O = await ke.updateStock(q);
                if (O.Code === 200) {
                  h("藥品位置更新成功", "success");
                  try {
                    const Q = await ke.getMedMapByDepartment(s);
                    if (Q.Code === 200 && Q.Data) {
                      const Z = ct.convertMedMapApiToFakeData(Q.Data);
                      ct.validateConvertedData(Z) && l(Z);
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
          C({
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
            oe(null);
          return;
        }
        let se = null,
          Y = null,
          A = null;
        if (
          (console.log("Drop Target:", M),
          console.log("Is Mobile Drag:", w.isMobileDrag),
          w.isMobileDrag)
        )
          if (M) {
            (se = M.direction), (A = M.container);
            const q = fe(w.draggedContainer.GUID);
            let O = null;
            if (q) {
              O = q.parent.GUID;
              const je = q.parent.contents.findIndex(
                (De) => De.GUID === w.draggedContainer.GUID
              );
              q.parent.contents.splice(je, 1);
              const Te = Ae(q.parent, w.draggedContainer);
              q.parent.contents = Te;
            }
            const Q = fe(M.container.Master_GUID || M.container.GUID);
            let Z = M.container;
            if (O && Q && Q.container.GUID === O) {
              const je = Q.container.contents.find(
                (Te) => Te.GUID === M.container.GUID
              );
              je &&
                ((Z = je),
                console.log(
                  "同一父容器內移動，更新後的目標容器位置:",
                  je.gird_position
                ));
            }
            const pe = ge(Z.gird_position || "0,0");
            let ne = pe.row,
              ye = pe.col;
            switch (M.direction) {
              case "top":
                ne = Math.max(0, pe.row);
                break;
              case "bottom":
                ne = pe.row + 1;
                break;
              case "left":
                ye = Math.max(0, pe.col);
                break;
              case "right":
                ye = pe.col + 1;
                break;
            }
            let me = (Q == null ? void 0 : Q.container) || M.container;
            if (
              (w.draggedContainer.class != M.class && (me = M),
              w.draggedContainer.type === "med_box" &&
                M.container.type !== "med_box")
            )
              if (
                (console.log("藥盒移動目標到層架上"),
                (me = M.container),
                me.contents.length > 0)
              ) {
                let je = 0,
                  Te = 0;
                me.contents.forEach((De) => {
                  const $e = ge(De.gird_position || "0,0").row,
                    _e = ge(De.gird_position || "0,0").col;
                  je > $e && (je = $e), Te > _e && (Te = _e);
                });
                for (let De = 0; De <= Te; De++)
                  for (let $e = 0; $e <= je; $e++) {
                    const _e = `${De},${$e}`;
                    me.contents.filter((Oe) => Oe.grid_position === _e)
                      .length === 0 && ((ne = De), (ye = $e));
                  }
              } else (ne = 0), (ye = 0);
            (Y = me), te(me, w.draggedContainer, ne, ye, M.direction);
          } else
            console.log("無效拖放，復原所有容器位置"),
              w.originalData &&
                w.originalParent &&
                (w.originalParent.contents = JSON.parse(
                  JSON.stringify(w.originalData)
                )),
              (se = null),
              (A = null),
              (Y = w.originalParent);
        else if (M) {
          (se = M.direction), (A = M.container);
          const q = fe(w.draggedContainer.GUID);
          let O = null;
          if (
            (console.log("=== 開始處理容器拖曳 ==="),
            console.log("拖曳容器 GUID:", w.draggedContainer.GUID),
            console.log("拖曳容器原始位置:", w.draggedContainer.gird_position),
            q)
          ) {
            (O = q.parent.GUID),
              console.log("原始父容器 GUID:", O),
              console.log(
                "移除前父容器的 contents 數量:",
                q.parent.contents.length
              );
            const je = q.parent.contents.findIndex(
              (De) => De.GUID === w.draggedContainer.GUID
            );
            q.parent.contents.splice(je, 1),
              console.log(
                "移除後父容器的 contents 數量:",
                q.parent.contents.length
              );
            const Te = Ae(q.parent, w.draggedContainer);
            (q.parent.contents = Te),
              console.log("重新計算後的容器列表:"),
              q.parent.contents.forEach((De) => {
                console.log(`  - ${De.GUID}: ${De.gird_position}`);
              });
          }
          const Q = fe(M.container.Master_GUID || M.container.GUID);
          let Z = M.container;
          if (
            (console.log("目標容器原始位置:", M.container.gird_position),
            O && Q && Q.container.GUID === O)
          ) {
            console.log("✓ 在同一個父容器內移動");
            const je = Q.container.contents.find(
              (Te) => Te.GUID === M.container.GUID
            );
            je &&
              ((Z = je),
              console.log(
                "同一父容器內移動，更新後的目標容器位置:",
                je.gird_position
              ));
          } else console.log("✗ 跨父容器移動或父容器不同");
          const pe = ge(Z.gird_position || "0,0");
          let ne = pe.row,
            ye = pe.col;
          switch (M.direction) {
            case "top":
              ne = Math.max(0, pe.row);
              break;
            case "bottom":
              ne = pe.row + 1;
              break;
            case "left":
              ye = Math.max(0, pe.col);
              break;
            case "right":
              ye = pe.col + 1;
              break;
          }
          console.log("------目標容器", M),
            console.log("------拖曳容器", w.draggedContainer);
          let me = (Q == null ? void 0 : Q.container) || M.container;
          if (
            (console.log(w.draggedContainer.class),
            console.log(M.container.class),
            console.log(w.draggedContainer.class != M.container.class),
            w.draggedContainer.class != M.container.class &&
              ((me = M.container),
              console.log("------這邊顯示放到上層容器現象"),
              console.log("------目標容器", M),
              console.log("------拖曳容器", w.draggedContainer),
              console.log("------目標父容器", me)),
            w.draggedContainer.type === "med_box" &&
              M.container.type !== "med_box")
          )
            if (
              (console.log("藥盒移動目標到層架上"),
              (me = M.container),
              me.contents.length > 0)
            ) {
              let je = 0,
                Te = 0;
              me.contents.forEach((De) => {
                const $e = ge(De.gird_position || "0,0").row,
                  _e = ge(De.gird_position || "0,0").col;
                je > $e && (je = $e), Te > _e && (Te = _e);
              });
              for (let De = 0; De <= Te; De++)
                for (let $e = 0; $e <= je; $e++) {
                  const _e = `${De},${$e}`;
                  me.contents.filter((Oe) => Oe.grid_position === _e).length ===
                    0 && ((ne = De), (ye = $e));
                }
            } else (ne = 0), (ye = 0);
          (Y = me), te(me, w.draggedContainer, ne, ye, M.direction);
        } else
          console.log("無效拖放，復原所有容器位置"),
            w.originalData &&
              w.originalParent &&
              (w.originalParent.contents = JSON.parse(
                JSON.stringify(w.originalData)
              )),
            (se = null),
            (A = null),
            (Y = w.originalParent);
        C({
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
          oe(null),
          console.log("Drop Direction:", se),
          console.log("Parent Object:", Y),
          console.log("Target Object:", A),
          console.log("API更新資料：", B),
          await Ch(B);
      };
    f.useEffect(() => {
      if (w.isDragging)
        if (K()) {
          const se = (q) => {
              q.preventDefault(), L(q);
            },
            Y = (q) => re(),
            A = (q) => re();
          return (
            document.addEventListener("pointermove", se, { passive: !1 }),
            document.addEventListener("pointerup", Y),
            document.addEventListener("pointercancel", A),
            () => {
              document.removeEventListener("pointermove", se),
                document.removeEventListener("pointerup", Y),
                document.removeEventListener("pointercancel", A);
            }
          );
        } else {
          const se = (O) => L(O),
            Y = (O) => re(),
            A = (O) => {
              O.preventDefault(), L(O);
            },
            q = (O) => re();
          return (
            document.addEventListener("mousemove", se),
            document.addEventListener("mouseup", Y),
            document.addEventListener("touchmove", A, { passive: !1 }),
            document.addEventListener("touchend", q),
            () => {
              document.removeEventListener("mousemove", se),
                document.removeEventListener("mouseup", Y),
                document.removeEventListener("touchmove", A),
                document.removeEventListener("touchend", q);
            }
          );
        }
    }, [w.isDragging, M]),
      f.useEffect(
        () => () => {
          if (w.floatingElement)
            try {
              w.floatingElement.parentNode &&
                w.floatingElement.parentNode.removeChild(w.floatingElement);
            } catch (y) {
              console.error("組件卸載時清除浮動元素失敗:", y);
            }
        },
        [w.floatingElement]
      ),
      f.useEffect(() => {
        const y = (Y) => {
            Y.code === "Space" && !Y.repeat && (Y.preventDefault(), H(!0));
          },
          se = (Y) => {
            Y.code === "Space" && (Y.preventDefault(), H(!1), u(!1));
          };
        return (
          window.addEventListener("keydown", y),
          window.addEventListener("keyup", se),
          () => {
            window.removeEventListener("keydown", y),
              window.removeEventListener("keyup", se);
          }
        );
      }, []);
    const ae = f.useCallback(
        (y) => {
          var Y;
          if (p) return;
          if (y.ctrlKey || y.metaKey) {
            y.preventDefault(), y.stopPropagation();
            const A =
              (Y = n.current) == null ? void 0 : Y.getBoundingClientRect();
            if (!A) return;
            const q = y.clientX - A.left,
              O = y.clientY - A.top,
              Q = y.deltaY > 0 ? 0.9 : 1.1,
              Z = Math.max(0.1, Math.min(5, D.scale * Q)),
              pe = Z / D.scale,
              ne = q - (q - D.x) * pe,
              ye = O - (O - D.y) * pe;
            R({ x: ne, y: ye, scale: Z });
          }
        },
        [D, p]
      ),
      $ = f.useCallback(
        (y) => {
          p ||
            !T ||
            (u(!0),
            k({ x: y.clientX, y: y.clientY }),
            N({ x: y.clientX, y: y.clientY }),
            v(!1),
            y.preventDefault());
        },
        [p, T]
      ),
      V = f.useCallback(
        (y) => {
          if (!d || p) return;
          const se = y.clientX - P.x,
            Y = y.clientY - P.y;
          if (b) {
            const A = Math.abs(y.clientX - b.x),
              q = Math.abs(y.clientY - b.y);
            (A > 5 || q > 5) && v(!0);
          }
          R((A) => ({ ...A, x: A.x + se, y: A.y + Y })),
            k({ x: y.clientX, y: y.clientY });
        },
        [d, P, p, b]
      ),
      F = f.useCallback(() => {
        u(!1), N(null);
      }, []),
      [J, le] = f.useState(null),
      [xe, ce] = f.useState({ x: 0, y: 0 }),
      be = (y) => {
        if (y.length < 2) return null;
        const se = y[0],
          Y = y[1];
        return Math.sqrt(
          Math.pow(Y.clientX - se.clientX, 2) +
            Math.pow(Y.clientY - se.clientY, 2)
        );
      },
      Ce = (y) => {
        if (y.length === 1) return { x: y[0].clientX, y: y[0].clientY };
        const se = y[0],
          Y = y[1];
        return {
          x: (se.clientX + Y.clientX) / 2,
          y: (se.clientY + Y.clientY) / 2,
        };
      },
      Ee = f.useCallback(
        (y) => {
          if (!p) {
            if (y.touches.length === 2) {
              const se = be(y.touches),
                Y = Ce(y.touches);
              le(se), ce(Y);
            } else if (y.touches.length === 1) {
              const se = y.touches[0];
              k({ x: se.clientX, y: se.clientY }), u(!0);
            }
          }
        },
        [p]
      ),
      Ze = f.useCallback(
        (y) => {
          var se;
          if (!p) {
            if ((y.preventDefault(), y.touches.length === 2 && J !== null)) {
              const Y = be(y.touches),
                A = Ce(y.touches);
              if (Y && J) {
                const q =
                  (se = n.current) == null
                    ? void 0
                    : se.getBoundingClientRect();
                if (!q) return;
                const O = Y / J,
                  Q = Math.max(0.1, Math.min(5, D.scale * O)),
                  Z = A.x - q.left,
                  pe = A.y - q.top,
                  ne = Q / D.scale,
                  ye = Z - (Z - D.x) * ne,
                  me = pe - (pe - D.y) * ne;
                R({ x: ye, y: me, scale: Q }), le(Y), ce(A);
              }
            } else if (y.touches.length === 1 && d) {
              const Y = y.touches[0],
                A = Y.clientX - P.x,
                q = Y.clientY - P.y;
              R((O) => ({ ...O, x: O.x + A, y: O.y + q })),
                k({ x: Y.clientX, y: Y.clientY });
            }
          }
        },
        [D, J, d, P, p]
      ),
      Pe = f.useCallback(() => {
        le(null), u(!1);
      }, []);
    f.useEffect(() => {
      const y = n.current;
      if (y)
        return (
          y.addEventListener("wheel", ae, { passive: !1 }),
          () => y.removeEventListener("wheel", ae)
        );
    }, [ae]);
    const rt = () => (!o || o.length === 0 ? [] : o),
      Ve = (y) => {
        if (!y || y.length === 0)
          return { sortedContents: [], maxRow: 0, maxCol: 0 };
        const se = y.map((O) => ({
            ...O,
            gridPos: ge(O.gird_position || "0,0"),
          })),
          Y = Math.max(...se.map((O) => O.gridPos.row), 0),
          A = Math.max(...se.map((O) => O.gridPos.col), 0);
        return {
          sortedContents: se.sort((O, Q) =>
            O.gridPos.row !== Q.gridPos.row
              ? O.gridPos.row - Q.gridPos.row
              : O.gridPos.col - Q.gridPos.col
          ),
          maxRow: Y,
          maxCol: A,
        };
      },
      Pt = rt(),
      Bt = Math.max(...Pt.map((y) => ge(y.gird_position || "0,0").row), 0),
      Vn = Math.max(...Pt.map((y) => ge(y.gird_position || "0,0").col), 0),
      Yt = (y) => {
        const se = (A) => {
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
              se(y),
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
                        p && G(y.type) && !K()
                          ? (A) =>
                              W(
                                y,
                                A.currentTarget.closest(
                                  "[data-container-guid]"
                                ),
                                A
                              )
                          : void 0,
                      onTouchStart:
                        p && G(y.type) && !K()
                          ? (A) =>
                              W(
                                y,
                                A.currentTarget.closest(
                                  "[data-container-guid]"
                                ),
                                A
                              )
                          : void 0,
                      onPointerDown:
                        p && G(y.type) && K()
                          ? (A) =>
                              W(
                                y,
                                A.currentTarget.closest(
                                  "[data-container-guid]"
                                ),
                                A
                              )
                          : void 0,
                      className: p && G(y.type) ? "cursor-move" : "",
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
                      p && G(y.type) && !K()
                        ? (A) =>
                            W(
                              y,
                              A.currentTarget.closest("[data-container-guid]"),
                              A
                            )
                        : void 0,
                    onTouchStart:
                      p && G(y.type) && !K()
                        ? (A) =>
                            W(
                              y,
                              A.currentTarget.closest("[data-container-guid]"),
                              A
                            )
                        : void 0,
                    onPointerDown:
                      p && G(y.type) && K()
                        ? (A) =>
                            W(
                              y,
                              A.currentTarget.closest("[data-container-guid]"),
                              A
                            )
                        : void 0,
                    className: p && G(y.type) ? "cursor-move" : "",
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
                      p && G(y.type) && !K()
                        ? (A) =>
                            W(
                              y,
                              A.currentTarget.closest("[data-container-guid]"),
                              A
                            )
                        : void 0,
                    onTouchStart:
                      p && G(y.type) && !K()
                        ? (A) =>
                            W(
                              y,
                              A.currentTarget.closest("[data-container-guid]"),
                              A
                            )
                        : void 0,
                    onPointerDown:
                      p && G(y.type) && K()
                        ? (A) =>
                            W(
                              y,
                              A.currentTarget.closest("[data-container-guid]"),
                              A
                            )
                        : void 0,
                    className: p && G(y.type) ? "cursor-move" : "",
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
                      p && G(y.type) && !K()
                        ? (A) =>
                            W(
                              y,
                              A.currentTarget.closest("[data-container-guid]"),
                              A
                            )
                        : void 0,
                    onTouchStart:
                      p && G(y.type) && !K()
                        ? (A) =>
                            W(
                              y,
                              A.currentTarget.closest("[data-container-guid]"),
                              A
                            )
                        : void 0,
                    onPointerDown:
                      p && G(y.type) && K()
                        ? (A) =>
                            W(
                              y,
                              A.currentTarget.closest("[data-container-guid]"),
                              A
                            )
                        : void 0,
                    className: p && G(y.type) ? "cursor-move" : "",
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
                      p && G(y.type) && !K()
                        ? (A) =>
                            W(
                              y,
                              A.currentTarget.closest("[data-container-guid]"),
                              A
                            )
                        : void 0,
                    onTouchStart:
                      p && G(y.type) && !K()
                        ? (A) =>
                            W(
                              y,
                              A.currentTarget.closest("[data-container-guid]"),
                              A
                            )
                        : void 0,
                    onPointerDown:
                      p && G(y.type) && K()
                        ? (A) =>
                            W(
                              y,
                              A.currentTarget.closest("[data-container-guid]"),
                              A
                            )
                        : void 0,
                    className: p && G(y.type) ? "cursor-move" : "",
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
        const se = (Y, A, q) => {
          const O = Array(A + 1)
              .fill(null)
              .map(() => Array(q + 1).fill(!1)),
            Q = {};
          return (
            Y.forEach((Z) => {
              const pe = ge(Z.gird_position || "0,0");
              (Q[`${pe.row},${pe.col}`] = Z), (O[pe.row][pe.col] = !0);
            }),
            r.jsx("table", {
              className: "w-full h-full",
              style: { borderCollapse: "none", borderSpacing: "0px" },
              children: r.jsx("tbody", {
                children: Array.from({ length: A + 1 }, (Z, pe) =>
                  r.jsx(
                    "tr",
                    {
                      className: "h-full",
                      style: { height: `${100 / (A + 1)}%`, minHeight: "80px" },
                      children: Array.from({ length: q + 1 }, (ne, ye) => {
                        const me = `${pe},${ye}`,
                          je = Q[me];
                        return je
                          ? r.jsxs(
                              "td",
                              {
                                className: "align-top bg-transparent",
                                style: {
                                  width: `${100 / (q + 1)}%`,
                                  height: `${100 / (A + 1)}%`,
                                  minHeight: "80px",
                                  border: "none",
                                  position: "relative",
                                },
                                children: [
                                  Yt(je),
                                  (M == null ? void 0 : M.container.GUID) ===
                                    je.GUID &&
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
                              ye
                            )
                          : r.jsx(
                              "td",
                              {
                                className: "p-1 align-top bg-transparent",
                                style: {
                                  width: `${100 / (q + 1)}%`,
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
                    pe
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
                maxRow: ye,
                maxCol: me,
              } = Ve(y.contents);
              return se(ne, ye, me);
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
                maxRow: ye,
                maxCol: me,
              } = Ve(y.contents);
              return se(ne, ye, me);
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
                ye = {};
              ne.forEach((De) => {
                const $e = (De.location || "0,0").split(","),
                  _e = Number($e[0] || "0"),
                  Re = Number($e[1] || "0");
                ye[_e] || (ye[_e] = []),
                  ye[_e].push({ ...De, _position: _e, _depth: Re });
              });
              const me = Object.keys(ye)
                  .map(Number)
                  .sort((De, $e) => De - $e),
                je = me.length;
              Math.max(...me.map((De) => ye[De].length));
              const Te = y.width ? y.width * 5 : 500;
              return r.jsx("div", {
                className: "flex h-full",
                style: { minWidth: `${Te}px` },
                children: me.map((De) => {
                  const $e = ye[De].sort((Me, Ue) => Ue._depth - Me._depth),
                    _e = je > 0 ? 100 / je : 100,
                    Re = $e.length,
                    Oe = Re > 0 ? 100 / Re : 100;
                  return r.jsx(
                    "div",
                    {
                      className: "flex flex-shrink-0 flex-col m-1",
                      style: { width: `calc(${_e}% - 8px)`, minWidth: "160px" },
                      children: $e.map((Me, Ue) => {
                        const mt = Ue === Re - 1;
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
                                  ? E(
                                      Me,
                                      y,
                                      ze.currentTarget.closest(
                                        "[data-stock-guid]"
                                      ),
                                      ze
                                    )
                                  : !d &&
                                    !T &&
                                    (N({ x: ze.clientX, y: ze.clientY }),
                                    v(!1));
                              },
                              onMouseUp: (ze) => {
                                if (!d && !T && !U && b && !p) {
                                  const dn = Math.abs(ze.clientX - b.x),
                                    Vr = Math.abs(ze.clientY - b.y);
                                  dn <= 5 &&
                                    Vr <= 5 &&
                                    (ze.stopPropagation(), c(y, Me));
                                }
                                p || (N(null), v(!1));
                              },
                              onTouchStart: (ze) => {
                                if (p && K())
                                  E(
                                    Me,
                                    y,
                                    ze.currentTarget.closest(
                                      "[data-stock-guid]"
                                    ),
                                    ze
                                  );
                                else if (!d && !p) {
                                  const dn = ze.touches[0];
                                  N({ x: dn.clientX, y: dn.clientY }), v(!1);
                                }
                              },
                              onTouchEnd: (ze) => {
                                if (!d && !U && b && !p) {
                                  const dn = ze.changedTouches[0],
                                    Vr = Math.abs(dn.clientX - b.x),
                                    rl = Math.abs(dn.clientY - b.y);
                                  Vr <= 5 &&
                                    rl <= 5 &&
                                    (ze.stopPropagation(), c(y, Me));
                                }
                                p || (N(null), v(!1));
                              },
                              onPointerDown: (ze) => {
                                p &&
                                  K() &&
                                  E(
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
                sortedContents: ne,
                maxRow: ye,
                maxCol: me,
              } = Ve(y.contents);
              return se(ne, ye, me);
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
                maxRow: ye,
                maxCol: me,
              } = Ve(y.contents);
              return se(ne, ye, me);
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
              A = Math.max(
                ...y.Boxes.flat().map((ne) => +ne.Column + +ne.Width - 1)
              ),
              q = Y + 1,
              O = A + 1,
              Q = y.Boxes.flat(),
              Z = Array(q)
                .fill(null)
                .map(() => Array(O).fill(!1)),
              pe = {};
            return (
              Q.forEach((ne) => {
                ne.Slave || (pe[`${ne.Row},${ne.Column}`] = ne);
              }),
              Q.forEach((ne) => {
                if (!ne.Slave && (ne.Width > 1 || ne.Height > 1))
                  for (let ye = ne.Row; ye < ne.Row + ne.Height; ye++)
                    for (let me = ne.Column; me < ne.Column + ne.Width; me++)
                      (ye !== ne.Row || me !== ne.Column) && (Z[ye][me] = !0);
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
                  children: y.contents.map((ne) => Yt(ne)),
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
          (ge(y.gird_position || "0,0"),
          y.type !== "調劑台" && y.type !== "藥庫")
        )
          return null;
        const se = (Y) => {
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
          const { sortedContents: A, maxRow: q, maxCol: O } = Ve(Y),
            Q = Array(q + 1)
              .fill(null)
              .map(() => Array(O + 1).fill(!1)),
            Z = {};
          return (
            A.forEach((pe) => {
              const ne = ge(pe.gird_position || "0,0");
              (Z[`${ne.row},${ne.col}`] = pe), (Q[ne.row][ne.col] = !0);
            }),
            r.jsx("table", {
              className: "w-full h-full",
              style: { borderCollapse: "none", borderSpacing: "0px" },
              children: r.jsx("tbody", {
                children: Array.from({ length: q + 1 }, (pe, ne) =>
                  r.jsx(
                    "tr",
                    {
                      className: "h-full",
                      children: Array.from({ length: O + 1 }, (ye, me) => {
                        const je = `${ne},${me}`,
                          Te = Z[je];
                        return Te
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
                                  Yt(Te),
                                  (M == null ? void 0 : M.container.GUID) ===
                                    Te.GUID &&
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
                              me
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
                              me
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
                      children: r.jsx(Dt, {
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
                children: se(y.contents || []),
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
          const se = y[0].CODE || y[0].code;
          if ((console.log("🎯 提取的藥碼:", se), !se)) {
            console.warn("⚠️ 無法定位藥品：缺少藥碼");
            return;
          }
          console.log("🎯 開始定位藥品:", se);
          const Y = (q) => {
              for (const O of q) {
                if (O.type === "grid_draw" && O.Boxes) {
                  for (const Q of O.Boxes)
                    for (const Z of Q)
                      if (Z.Code === se) {
                        const pe = document.querySelector(
                          `[data-container-guid="${O.GUID}"]`
                        );
                        if (pe)
                          return (
                            console.log("✅ 找到藥品容器 (grid_draw):", O),
                            { element: pe, bounds: pe.getBoundingClientRect() }
                          );
                      }
                }
                if (
                  O.type === "list_draw" &&
                  O.drugs &&
                  O.drugs.some((Z) => Z.code === se)
                ) {
                  const Z = document.querySelector(
                    `[data-container-guid="${O.GUID}"]`
                  );
                  if (Z)
                    return (
                      console.log("✅ 找到藥品容器 (list_draw):", O),
                      { element: Z, bounds: Z.getBoundingClientRect() }
                    );
                }
                if (
                  (O.type === "store_shelves" ||
                    O.type === "dispensing_shelves") &&
                  O.medMapStock &&
                  O.medMapStock.some(
                    (Z) => Z.code === se || Z.material_no === se
                  )
                ) {
                  const Z = document.querySelector(
                    `[data-container-guid="${O.GUID}"]`
                  );
                  if (Z)
                    return (
                      console.log("✅ 找到藥品容器 (store_shelves):", O),
                      { element: Z, bounds: Z.getBoundingClientRect() }
                    );
                }
                if (
                  O.type === "med_box" &&
                  O.med_info &&
                  O.med_info.length > 0 &&
                  O.med_info.some((Z) => Z.code === se)
                ) {
                  const Z = document.querySelector(
                    `[data-container-guid="${O.GUID}"]`
                  );
                  if (Z)
                    return (
                      console.log("✅ 找到藥品容器 (med_box):", O),
                      { element: Z, bounds: Z.getBoundingClientRect() }
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
            const q = n.current.getBoundingClientRect(),
              O = A.bounds,
              Q = (O.left + O.right) / 2,
              Z = (O.top + O.bottom) / 2,
              pe = (Q - q.left - D.x) / D.scale,
              ne = (Z - q.top - D.y) / D.scale,
              ye = q.width / 2,
              me = q.height / 2,
              je = ye - pe * D.scale,
              Te = me - ne * D.scale;
            R((De) => ({ ...De, x: je, y: Te })),
              console.log("✅ 定位完成", {
                elementScreenCenter: { x: Q, y: Z },
                elementCanvasPos: { x: pe, y: ne },
                screenCenter: { x: ye, y: me },
                newTransform: { x: je, y: Te },
              }),
              h(`已定位到藥品：${y.CHT_NAME || y.NAME || se}`, "success");
          } else
            console.warn("❌ 未找到藥品容器"),
              h("未找到該藥品的儲存位置", "error");
        },
        [o, D, h]
      );
    f.useImperativeHandle(
      t,
      () => (
        console.log("🔧 useImperativeHandle 設置 ref 方法"), { locateDrug: As }
      )
    );
    const Fr = async (y, se, Y) => {
        if (
          (Y.stopPropagation(),
          Y.preventDefault(),
          !!window.confirm(`確定要刪除 ${y.name || y.material_no} 嗎？`))
        )
          try {
            const q = await ke.deleteStockByGUID([y.GUID]);
            if (q.Code === 200) {
              const O = se.medMapStock.findIndex((Q) => Q.GUID === y.GUID);
              O !== -1 &&
                (se.medMapStock.splice(O, 1),
                se.medMapStock.forEach((Q, Z) => {
                  Q.location = String(Z);
                })),
                h("刪除成功", "success");
            } else h(q.Result || "刪除失敗", "error");
          } catch (q) {
            console.error("刪除 stock 失敗:", q),
              h("刪除失敗，請稍後再試", "error");
          }
      },
      nl = async (y) => {
        if (y.key === "Enter" && X.trim() && !ue) {
          y.preventDefault(), we(!0);
          const se = performance.now();
          try {
            console.log("🔍 [手動輸入] 搜尋條碼:", X);
            const Y = performance.now(),
              A = await ke.searchByBarCode(X.trim()),
              q = performance.now();
            if (
              (console.log(
                `⏱️ [手動輸入] API搜尋藥品資料用時: ${(q - Y).toFixed(2)}ms`
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
                ee("");
              const Z = performance.now();
              console.log(`⏱️ [手動輸入] 總用時: ${(Z - se).toFixed(2)}ms`);
            } else
              A.Code === -200 && A.Result === "查無資料"
                ? (console.log("⚠️ 查無資料，開啟建立條碼彈窗"),
                  h("查無資料，請建立條碼", "error"),
                  g(X.trim()),
                  ee(""))
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
                onChange: (y) => ee(y.target.value),
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
            onClick: () => _(!p),
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
          onMouseMove: V,
          onMouseUp: F,
          onMouseLeave: F,
          onTouchStart: Ee,
          onTouchMove: Ze,
          onTouchEnd: Pe,
          children: r.jsxs("div", {
            className: "absolute inset-0 origin-top-left",
            style: {
              transform: `translate(${D.x}px, ${D.y}px) scale(${D.scale})`,
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
                    borderSpacing: `${Ne}px`,
                    minWidth: "fit-content",
                    minHeight: "fit-content",
                  },
                  children: r.jsx("tbody", {
                    children: Array.from({ length: Bt + 1 }, (y, se) =>
                      r.jsx(
                        "tr",
                        {
                          children: Array.from({ length: Vn + 1 }, (Y, A) => {
                            const q = Pt.find((O) => {
                              const Q = ge(O.gird_position || "0,0");
                              return Q.row === se && Q.col === A;
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
                                    children: Gr(q),
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
                        se
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
      [D, R] = f.useState(""),
      [d, u] = f.useState(""),
      [p, _] = f.useState("N"),
      [P, k] = f.useState([]),
      [T, H] = f.useState(!1),
      [X, ee] = f.useState(!1),
      [ue, we] = f.useState(null),
      [b, N] = f.useState(null),
      [U, v] = f.useState(!1),
      [w, C] = f.useState(!1);
    f.useEffect(() => {
      if (n && e)
        if (c === "add") {
          m(0);
          const te = {};
          sn.forEach((I, E) => {
            te[E] = 0;
          }),
            S(te),
            R(""),
            ee(!1),
            M();
        } else {
          const te = sn.findIndex(
            (I) => I.box_type === n.box_type || I.type === n.box_type
          );
          if ((console.log(n), te >= 0)) {
            m(te);
            const E = sn[te].width.findIndex((L) => {
                var re;
                return (
                  L ===
                  ((re = n.width) == null ? void 0 : re[n.width_index || 0])
                );
              }),
              W = {};
            sn.forEach((L, re) => {
              re === te ? (W[re] = E >= 0 ? E : 0) : (W[re] = 0);
            }),
              S(W);
          } else {
            m(0);
            const I = {};
            sn.forEach((E, W) => {
              I[W] = 0;
            }),
              S(I);
          }
          R(n.ip || ""),
            N({
              box_type: n.box_type,
              width: n.width,
              width_index: n.width_index,
              ip: n.ip || "",
              storage: n.storage ? JSON.parse(JSON.stringify(n.storage)) : null,
            });
        }
    }, [n, e, c]);
    const M = () => {
        n && n.parentShelf && we(n.parentShelf);
      },
      oe = (te) => {
        if (!te || !te.contents || te.contents.length === 0) return "0,0";
        let I = -1,
          E = 0;
        return (
          te.contents.forEach((W) => {
            if (W.gird_position) {
              const [L, re] = W.gird_position.split(",").map(Number);
              re > I && ((I = re), (E = L));
            }
          }),
          `${E},${I + 1}`
        );
      },
      B = () => {
        if (!b || c !== "edit") return !1;
        const te = sn[h],
          I = j[h] || 0,
          E = te.box_type || te.type || te.name;
        return (
          b.box_type !== E ||
          b.width_index !== I ||
          b.ip !== D ||
          JSON.stringify(b.storage) !==
            JSON.stringify(n == null ? void 0 : n.storage)
        );
      },
      K = (te) => {
        m(te);
      },
      Ne = (te, I) => {
        S((E) => ({ ...E, [te]: I }));
      },
      de = () => {
        n && (c === "add" ? he() : G());
      },
      z = () => {
        t();
      },
      he = async () => {
        if (!n || !ue) {
          a("缺少必要資料，無法新增藥盒", "error");
          return;
        }
        ee(!0);
        try {
          const te = sn[h],
            I = j[h] || 0,
            E = te.width[I],
            W = oe(ue),
            L = {
              Master_GUID: ue.GUID,
              position: W,
              width: E.toString(),
              height: "60",
              ip_box: D,
              serverName: ue.serverName || "",
              serverType: ue.serverType || "",
            };
          console.log("🚀 發送新增藥盒 API 請求:", L);
          const re = await ke.addMedMapBox(L);
          re.Code === 200
            ? (a("藥盒新增成功", "success"), t(), await ve())
            : a(`藥盒新增失敗：${re.Result || "未知錯誤"}`, "error");
        } catch (te) {
          console.error("Add med box failed:", te),
            a("藥盒新增失敗：網路錯誤", "error");
        } finally {
          ee(!1);
        }
      },
      G = async () => {
        var te;
        if (!n || !B()) {
          a("沒有資料變更", "error");
          return;
        }
        v(!0);
        try {
          const I = sn[h],
            E = j[h] || 0,
            W = I.width[E],
            L = I.box_type || I.type || I.name,
            re = b.box_type !== L || b.width_index !== E || b.ip !== D,
            ae =
              JSON.stringify(b.storage) !==
              JSON.stringify(n == null ? void 0 : n.storage),
            $ = [];
          if (re) {
            const J = {
              GUID: n.GUID,
              Master_GUID: n.Master_GUID,
              position: n.gird_position,
              ip_light: D,
              serverName: n.serverName,
              serverType: n.serverType,
            };
            $.push(ke.updateMedMapBox([J]));
          }
          ae &&
            $.push(
              ke.updateEpd266Storages(n.serverName || "", n.serverType || "", [
                n.storage,
              ])
            );
          const V = await Promise.all($);
          if (V.every((J) => J.Code === 200))
            a("藥盒更新成功", "success"), t(), await ve();
          else {
            const J = V.filter((le) => le.Code !== 200);
            a(
              `藥盒更新失敗：${
                ((te = J[0]) == null ? void 0 : te.Result) || "未知錯誤"
              }`,
              "error"
            );
          }
        } catch (I) {
          console.error("Update med box failed:", I),
            a("藥盒更新失敗：網路錯誤", "error");
        } finally {
          v(!1);
        }
      },
      ve = async () => {
        if (!s) {
          console.warn("⚠️ 沒有選中的部門類型，無法重新獲取資料");
          return;
        }
        console.log("🔄 重新獲取藥品地圖資料，部門類型:", s), l(!0);
        try {
          const te = await ke.getMedMapByDepartment(s);
          if (te.Code === 200 && te.Data) {
            console.log("📡 API 回傳成功，開始轉換資料");
            const I = await _h(() => Promise.resolve().then(() => Km), void 0),
              E = I.default.convertMedMapApiToFakeData(te.Data);
            if (!I.default.validateConvertedData(E)) {
              console.error("❌ 轉換後的資料驗證失敗"),
                a("資料更新失敗：資料格式錯誤", "error");
              return;
            }
            o(E), console.log("✅ 藥品地圖資料已更新");
          } else
            console.error("❌ API 回傳錯誤:", te),
              a("資料更新失敗：API 錯誤", "error");
        } catch (te) {
          console.error("💥 重新獲取藥品地圖資料失敗:", te),
            a("資料更新失敗：網路錯誤", "error");
        } finally {
          l(!1);
        }
      },
      ge = async () => {
        H(!0);
        try {
          const te = d.toLowerCase().trim();
          let I = x;
          te &&
            (I = I.filter((E) => {
              var W, L, re;
              return (
                ((W = E.CODE) == null
                  ? void 0
                  : W.toLowerCase().includes(te)) ||
                ((L = E.NAME) == null
                  ? void 0
                  : L.toLowerCase().includes(te)) ||
                ((re = E.CHT_NAME) == null
                  ? void 0
                  : re.toLowerCase().includes(te))
              );
            })),
            p !== "N" && (I = I.filter((E) => E.DRUGKIND === p)),
            k(I);
        } catch (te) {
          console.error("Search failed:", te), k([]);
        } finally {
          H(!1);
        }
      },
      fe = (te, I) => {
        console.log("📸 掃描成功，藥品資料:", I), C(!1), Ae(I);
      },
      Ae = async (te) => {
        if (n)
          try {
            console.log("🚀 開始更新藥盒藥品代碼:", te.CODE);
            const I = await ke.updateEpd266Medcode(
              n.serverName || "",
              n.serverType || "",
              te.CODE,
              n.storage || {}
            );
            I.Code === 200
              ? (console.log("✅ 藥品代碼更新成功:", I.Data),
                (n.storage = I.Data),
                (n.med_info = [
                  { name: te.NAME, cht_name: te.CHT_NAME, code: te.CODE },
                ]),
                a("藥品更新成功", "success"),
                i())
              : (console.error("❌ 藥品代碼更新失敗:", I),
                a(`藥品更新失敗：${I.Result || "未知錯誤"}`, "error"));
          } catch (I) {
            console.error("💥 藥品代碼更新發生錯誤:", I),
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
              onClick: (te) => te.stopPropagation(),
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
                                onChange: (te) => R(te.target.value),
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
                                children: sn.map((te, I) =>
                                  r.jsxs(
                                    "label",
                                    {
                                      className: `flex items-center px-4 py-2 border-2 rounded-lg cursor-pointer transition-all ${
                                        h === I
                                          ? "border-blue-500 bg-blue-50"
                                          : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                                      }`,
                                      children: [
                                        r.jsx("input", {
                                          type: "radio",
                                          name: "boxType",
                                          value: I,
                                          checked: h === I,
                                          onChange: () => K(I),
                                          className:
                                            "w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 hidden",
                                        }),
                                        r.jsx("div", {
                                          children: r.jsx("div", {
                                            className:
                                              "text-sm font-medium text-gray-900",
                                            children: te.name,
                                          }),
                                        }),
                                      ],
                                    },
                                    I
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
                              sn.map((te, I) =>
                                r.jsx(
                                  "div",
                                  {
                                    className: `flex gap-4 ${
                                      h === I ? "block" : "hidden"
                                    }`,
                                    children: te.width.map((E, W) =>
                                      r.jsxs(
                                        "label",
                                        {
                                          className: `flex items-center justify-center px-4 py-2 border-2 rounded-lg cursor-pointer transition-all ${
                                            h === I && (j[I] || 0) === W
                                              ? "border-green-500 bg-green-50"
                                              : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                                          }`,
                                          children: [
                                            r.jsx("input", {
                                              type: "radio",
                                              name: `width-${I}`,
                                              value: W,
                                              checked:
                                                h === I && (j[I] || 0) === W,
                                              onChange: () => Ne(I, W),
                                              className:
                                                "w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500 hidden",
                                            }),
                                            r.jsx("div", {
                                              className: "text-center",
                                              children: r.jsxs("div", {
                                                className:
                                                  "text-sm font-semibold text-gray-900",
                                                children: [E, " ", te.unit],
                                              }),
                                            }),
                                          ],
                                        },
                                        `${I}-${W}`
                                      )
                                    ),
                                  },
                                  I
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
                                          children: n.med_info.map((te, I) =>
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
                                                          te.code ||
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
                                                          te.name ||
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
                                                          te.cht_name ||
                                                          g("status.notSet"),
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              },
                                              I
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
                                    onClick: () => C(!0),
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
                                    onChange: (te) => u(te.target.value),
                                    placeholder: g("placeholder.drugSearch"),
                                    className:
                                      "border rounded px-3 py-1 flex-1 min-w-0 focus:border-blue-500 focus:outline-none transition-colors",
                                  }),
                                  r.jsxs("select", {
                                    value: p,
                                    onChange: (te) => _(te.target.value),
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
                                    onClick: ge,
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
                                      children: P.map((te, I) =>
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
                                                    children: te.NAME,
                                                  }),
                                                  r.jsx("div", {
                                                    className:
                                                      "text-xs text-gray-500 truncate",
                                                    children: te.CHT_NAME,
                                                  }),
                                                  r.jsx("div", {
                                                    className:
                                                      "text-xs text-gray-400 font-mono",
                                                    children: te.CODE,
                                                  }),
                                                ],
                                              }),
                                              r.jsx("button", {
                                                onClick: () => Ae(te),
                                                className:
                                                  "ml-2 p-1 text-green-600 hover:text-green-700 hover:bg-green-50 rounded transition-colors flex-shrink-0",
                                                title: g("button.add"),
                                                children: r.jsx(Dt, {
                                                  className: "w-4 h-4",
                                                }),
                                              }),
                                            ],
                                          },
                                          te.GUID || I
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
                      disabled: X || U,
                      className:
                        "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                      children: g("button.cancel"),
                    }),
                    r.jsxs("button", {
                      onClick: de,
                      disabled: X || U,
                      className:
                        "px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center space-x-2",
                      children: [
                        (X || U) &&
                          r.jsx(It, { className: "w-4 h-4 animate-spin" }),
                        r.jsx("span", {
                          children: X
                            ? "新增中..."
                            : U
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
              isOpen: w,
              onClose: () => C(!1),
              onScanSuccess: fe,
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
      [D, R] = f.useState(!1);
    f.useEffect(() => {
      n && e && (a(n.name || ""), c(n.med_info || []));
    }, [n, e]);
    const d = (k) => {
        c((T) => T.filter((H) => H.code !== k));
      },
      u = async () => {
        R(!0);
        try {
          const k = await ke.searchMedicine(x, h);
          S(k);
        } catch (k) {
          console.error("Search failed:", k), S([]);
        } finally {
          R(!1);
        }
      },
      p = (k) => {
        const T = {
          id: k.GUID || `${Date.now()}_${Math.random()}`,
          name: k.NAME,
          cht_name: k.CHT_NAME,
          code: k.CODE,
        };
        c((H) => (H.some((ee) => ee.code === T.code) ? H : [...H, T]));
      },
      _ = () => {
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
                            onChange: (k) => a(k.target.value),
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
                                    children: i.map((k) =>
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
                                                    k.code &&
                                                      r.jsx("div", {
                                                        children: r.jsx("div", {
                                                          className:
                                                            "text-sm text-gray-900 font-mono",
                                                          children: k.code,
                                                        }),
                                                      }),
                                                    r.jsx("div", {
                                                      children: r.jsx("div", {
                                                        className:
                                                          "text-sm text-gray-900 font-medium",
                                                        children:
                                                          k.name ||
                                                          o("status.notSet"),
                                                      }),
                                                    }),
                                                    r.jsx("div", {
                                                      children: r.jsx("div", {
                                                        className:
                                                          "text-sm text-gray-900",
                                                        children:
                                                          k.cht_name ||
                                                          o("status.notSet"),
                                                      }),
                                                    }),
                                                  ],
                                                }),
                                              }),
                                              r.jsx("button", {
                                                onClick: () => d(k.code),
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
                                        k.id
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
                                    onChange: (k) => g(k.target.value),
                                    placeholder: o("placeholder.drugSearch"),
                                    className:
                                      "border rounded px-3 py-1 flex-1 min-w-0 focus:border-blue-500 focus:outline-none transition-colors",
                                  }),
                                  r.jsxs("select", {
                                    value: h,
                                    onChange: (k) => m(k.target.value),
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
                                    disabled: D,
                                    className:
                                      "bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 transition-colors whitespace-nowrap disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2",
                                    children: [
                                      D &&
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
                                children: D
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
                                      children: j.map((k, T) =>
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
                                                onClick: () => p(k),
                                                className:
                                                  "ml-2 p-1 text-green-600 hover:text-green-700 hover:bg-green-50 rounded transition-colors flex-shrink-0",
                                                title: o("button.add"),
                                                children: r.jsx(Dt, {
                                                  className: "w-4 h-4",
                                                }),
                                              }),
                                            ],
                                          },
                                          k.GUID || T
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
                      onClick: _,
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
      [D, R] = f.useState(!1),
      [d, u] = f.useState(null),
      [p, _] = f.useState(""),
      [P, k] = f.useState("N"),
      [T, H] = f.useState([]),
      [X, ee] = f.useState(!1),
      [ue, we] = f.useState(0),
      [b, N] = f.useState({ x: 0, y: 0 });
    f.useEffect(() => {
      if (n && e)
        if ((g(n.name || ""), n.drawer)) {
          if (!j) {
            console.log("🔄 備份原始 drawer 資料:", n);
            const L = JSON.parse(JSON.stringify(n.drawer));
            m(L), S(!0), console.log("✅ 備份完成，備份資料:", L);
          }
        } else console.log("⚠️ 沒有 drawer 資料可備份"), m(null), S(!1);
    }, [n, e, j]),
      f.useEffect(() => {
        e || (S(!1), m(null), u(null));
      }, [e]);
    const U = () => {
        n && E();
      },
      v = () => {
        if (
          (console.log("🔄 開始恢復原始資料..."),
          console.log("原始備份資料:", h),
          console.log("當前 selectedGridDraw:", n),
          n && h && j)
        ) {
          console.log("📦 恢復 drawer 資料...");
          const L = JSON.parse(JSON.stringify(h));
          if (((n.drawer = L), o)) {
            const re = ($) => {
                $.forEach((V) => {
                  V.GUID === n.GUID &&
                    (console.log("🎯 找到目標格線抽屜，更新資料"),
                    (V.drawer = L)),
                    V.contents && Array.isArray(V.contents) && re(V.contents),
                    V.components &&
                      Array.isArray(V.components) &&
                      re(V.components);
                });
              },
              ae = JSON.parse(JSON.stringify(o));
            re(ae), l(ae), console.log("🔄 已更新全域資料狀態");
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
      w = (L, re) => {
        if (!d) return !1;
        const ae = Math.min(d.startRow, d.endRow),
          $ = Math.max(d.startRow, d.endRow),
          V = Math.min(d.startCol, d.endCol),
          F = Math.max(d.startCol, d.endCol);
        return L >= ae && L <= $ && re >= V && re <= F;
      },
      C = (L) => {
        var xe;
        if (
          !((xe = n == null ? void 0 : n.drawer) != null && xe.Boxes) ||
          L.Slave
        )
          return { width: 1, height: 1 };
        const ae = n.drawer.Boxes.flat().filter(
          (ce) =>
            ce.Slave &&
            ce.MasterBox_Row === L.Row &&
            ce.MasterBox_Column === L.Column
        );
        if (ae.length === 0) return { width: 1, height: 1 };
        const $ = [L, ...ae],
          V = Math.min(...$.map((ce) => ce.Row)),
          F = Math.max(...$.map((ce) => ce.Row)),
          J = Math.min(...$.map((ce) => ce.Column));
        return {
          width: Math.max(...$.map((ce) => ce.Column)) - J + 1,
          height: F - V + 1,
        };
      },
      M = () => {
        var J;
        if (!d || !((J = n == null ? void 0 : n.drawer) != null && J.Boxes))
          return [];
        const L = n.drawer.Boxes.flat(),
          re = Math.min(d.startRow, d.endRow),
          ae = Math.max(d.startRow, d.endRow),
          $ = Math.min(d.startCol, d.endCol),
          V = Math.max(d.startCol, d.endCol),
          F = [];
        return (
          L.forEach((le) => {
            if (!le.Slave) {
              const xe = C(le),
                ce = le.Row + xe.height - 1,
                be = le.Column + xe.width - 1;
              le.Row >= re &&
                ce <= ae &&
                le.Column >= $ &&
                be <= V &&
                F.push(le);
            }
          }),
          F
        );
      },
      oe = (L, re, ae, $) => {
        var be;
        if (!d || !((be = n == null ? void 0 : n.drawer) != null && be.Boxes))
          return !1;
        const V = n.drawer.Boxes.flat();
        let F = !0,
          J = L,
          le = re,
          xe = ae,
          ce = $;
        for (; F; )
          (F = !1),
            V.forEach((Ce) => {
              if (!Ce.Slave) {
                const Ee = C(Ce),
                  Ze = Ce.Row + Ee.height - 1,
                  Pe = Ce.Column + Ee.width - 1;
                !(Ce.Row > le || Ze < J || Ce.Column > ce || Pe < xe) &&
                  (Ce.Row < J && ((J = Ce.Row), (F = !0)),
                  Ze > le && ((le = Ze), (F = !0)),
                  Ce.Column < xe && ((xe = Ce.Column), (F = !0)),
                  Pe > ce && ((ce = Pe), (F = !0)));
              }
            });
        return { minRow: J, maxRow: le, minCol: xe, maxCol: ce };
      },
      B = () => {
        var F;
        if (!d || !((F = n == null ? void 0 : n.drawer) != null && F.Boxes))
          return !1;
        const L = Math.min(d.startRow, d.endRow),
          re = Math.max(d.startRow, d.endRow),
          ae = Math.min(d.startCol, d.endCol),
          $ = Math.max(d.startCol, d.endCol),
          V = n.drawer.Boxes.flat();
        for (let J = L; J <= re; J++)
          for (let le = ae; le <= $; le++) {
            let xe = !1;
            for (const ce of V)
              if (!ce.Slave) {
                const be = C(ce),
                  Ce = ce.Row + be.height - 1,
                  Ee = ce.Column + be.width - 1;
                if (J >= ce.Row && J <= Ce && le >= ce.Column && le <= Ee) {
                  xe = !0;
                  break;
                }
              }
            if (!xe) return !1;
          }
        return !0;
      },
      K = () => {
        var be, Ce;
        const L = M();
        if (!d) return { canMerge: !1, canUnmerge: !1 };
        if (L.length === 0) return { canMerge: !1, canUnmerge: !1 };
        const re =
            ((Ce =
              (be = n == null ? void 0 : n.drawer) == null
                ? void 0
                : be.Boxes) == null
              ? void 0
              : Ce.flat()) || [],
          ae = L.some(
            (Ee) =>
              re.filter(
                (Pe) =>
                  Pe.Slave &&
                  Pe.MasterBox_Row === Ee.Row &&
                  Pe.MasterBox_Column === Ee.Column
              ).length > 0
          ),
          $ = Math.min(d.startRow, d.endRow),
          V = Math.max(d.startRow, d.endRow),
          F = Math.min(d.startCol, d.endCol),
          J = Math.max(d.startCol, d.endCol),
          le = re.some(
            (Ee) =>
              Ee.Slave &&
              Ee.Row >= $ &&
              Ee.Row <= V &&
              Ee.Column >= F &&
              Ee.Column <= J
          );
        return { canMerge: L.length > 1 && B(), canUnmerge: ae || le };
      },
      { canMerge: Ne, canUnmerge: de } = K(),
      z = async () => {
        ee(!0);
        try {
          const L = p.toLowerCase().trim();
          let re = i;
          L &&
            (re = re.filter((ae) => {
              var $, V, F;
              return (
                (($ = ae.CODE) == null
                  ? void 0
                  : $.toLowerCase().includes(L)) ||
                ((V = ae.NAME) == null
                  ? void 0
                  : V.toLowerCase().includes(L)) ||
                ((F = ae.CHT_NAME) == null
                  ? void 0
                  : F.toLowerCase().includes(L))
              );
            })),
            P !== "N" && (re = re.filter((ae) => ae.DRUGKIND === P)),
            H(re);
        } catch (L) {
          console.error("Search failed:", L), H([]);
        } finally {
          ee(!1);
        }
      },
      he = async (L) => {
        var ae;
        if (!d || !((ae = n == null ? void 0 : n.drawer) != null && ae.Boxes))
          return;
        const re = M();
        if (re.length !== 0)
          try {
            const $ = {
              ServerName: n.serverName,
              ServerType: n.serverType,
              ValueAry: [`guid=${re[0].GUID}`, `code=${L.CODE}`],
              Data: n.drawer,
            };
            console.log("🚀 發送更新藥品 API 請求:", $);
            const V = await ke.request("/api/device/update_drawer_medcode", {
              method: "POST",
              body: JSON.stringify($),
            });
            if (
              (console.log("📡 更新藥品 API 回應:", V),
              V.Code === 200 && V.Data)
            ) {
              if (
                ((n.drawer = V.Data),
                V.Data.Boxes && (n.Boxes = V.Data.Boxes),
                console.log("✅ 藥品資料更新成功"),
                o)
              ) {
                const F = (le) => {
                    le.forEach((xe) => {
                      xe.GUID === n.GUID &&
                        (console.log("🎯 找到目標格線抽屜，更新資料"),
                        (xe.drawer = n.drawer),
                        n.Boxes && (xe.Boxes = n.Boxes)),
                        xe.contents &&
                          Array.isArray(xe.contents) &&
                          F(xe.contents),
                        xe.components &&
                          Array.isArray(xe.components) &&
                          F(xe.components);
                    });
                  },
                  J = JSON.parse(JSON.stringify(o));
                F(J), l(J);
              }
              u(null), s();
            } else
              console.error("❌ 藥品更新失敗:", V),
                a(`藥品更新失敗：${V.Result || "未知錯誤"}`, "error");
          } catch ($) {
            console.error("💥 藥品更新 API 調用失敗:", $),
              a("藥品更新失敗：網路錯誤", "error");
          }
      },
      G = (L, re, ae) => {
        ae.preventDefault(),
          ae.stopPropagation(),
          "touches" in ae &&
            (we(Date.now()),
            N({ x: ae.touches[0].clientX, y: ae.touches[0].clientY })),
          R(!0),
          u({ startRow: L, startCol: re, endRow: L, endCol: re });
      },
      ve = (L, re) => {
        if (!D || !d) return;
        const ae = Math.min(d.startRow, L),
          $ = Math.max(d.startRow, L),
          V = Math.min(d.startCol, re),
          F = Math.max(d.startCol, re),
          J = oe(ae, $, V, F);
        J &&
          u((le) =>
            le
              ? {
                  startRow: le.startRow,
                  startCol: le.startCol,
                  endRow: L >= le.startRow ? J.maxRow : J.minRow,
                  endCol: re >= le.startCol ? J.maxCol : J.minCol,
                }
              : null
          );
      },
      ge = () => {
        if (D && (R(!1), d && n != null && n.Boxes)) {
          const L = Math.min(d.startRow, d.endRow),
            re = Math.max(d.startRow, d.endRow),
            ae = Math.min(d.startCol, d.endCol),
            $ = Math.max(d.startCol, d.endCol),
            V = oe(L, re, ae, $);
          V &&
            u({
              startRow: V.minRow,
              startCol: V.minCol,
              endRow: V.maxRow,
              endCol: V.maxCol,
            });
        }
      },
      fe = () => {
        var L;
        !Ne ||
          !((L = n == null ? void 0 : n.drawer) != null && L.Boxes) ||
          !d ||
          I();
      },
      Ae = () => {
        var L;
        !de ||
          !((L = n == null ? void 0 : n.drawer) != null && L.Boxes) ||
          !d ||
          (console.log(d), te());
      },
      te = async () => {
        var L;
        if (!(!d || !((L = n == null ? void 0 : n.drawer) != null && L.Boxes)))
          try {
            const re = Math.min(d.startRow, d.endRow),
              ae = Math.max(d.startRow, d.endRow),
              $ = Math.min(d.startCol, d.endCol),
              V = Math.max(d.startCol, d.endCol),
              J = n.drawer.Boxes.flat().filter(
                (Ce) =>
                  Ce.Row >= re &&
                  Ce.Row <= ae &&
                  Ce.Column >= $ &&
                  Ce.Column <= V
              ),
              le = [],
              xe = [];
            J.forEach((Ce) => {
              le.push(Ce.Column.toString()), xe.push(Ce.Row.toString());
            });
            const ce = {
              ServerName: n.serverName,
              ServerType: n.serverType,
              ValueAry: [
                `SelectColumns=${le.join(",")}`,
                `SelectRows=${xe.join(",")}`,
              ],
              Data: { IP: n.ip, Boxes: n.Boxes },
            };
            console.log("🚀 發送 API 請求:", ce);
            const be = await ke.request("/api/device/separate_drawer_boxes", {
              method: "POST",
              body: JSON.stringify(ce),
            });
            if ((console.log("📡 API 回應:", be), be.Code === 200 && be.Data)) {
              if (
                be.Data.Boxes &&
                Array.isArray(be.Data.Boxes) &&
                ((n.Boxes = be.Data.Boxes),
                (n.drawer = be.Data),
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
              console.error("❌ API 回應錯誤:", be),
                a(`取消合併失敗：${be.Result || "未知錯誤"}`, "error");
          } catch (re) {
            console.error("💥 API 調用失敗:", re),
              a("取消合併失敗：網路錯誤", "error");
          } finally {
            console.log("更新後資料：", n),
              console.log("更新後最深層資料：", o),
              u(null),
              s();
          }
      },
      I = async () => {
        var L;
        if (!(!d || !((L = n == null ? void 0 : n.drawer) != null && L.Boxes)))
          try {
            const re = Math.min(d.startRow, d.endRow),
              ae = Math.max(d.startRow, d.endRow),
              $ = Math.min(d.startCol, d.endCol),
              V = Math.max(d.startCol, d.endCol),
              J = n.drawer.Boxes.flat().filter(
                (Ce) =>
                  Ce.Row >= re &&
                  Ce.Row <= ae &&
                  Ce.Column >= $ &&
                  Ce.Column <= V
              ),
              le = [],
              xe = [];
            J.forEach((Ce) => {
              le.push(Ce.Column.toString()), xe.push(Ce.Row.toString());
            });
            const ce = {
              ServerName: n.serverName,
              ServerType: n.serverType,
              ValueAry: [
                `SelectColumns=${le.join(",")}`,
                `SelectRows=${xe.join(",")}`,
              ],
              Data: { IP: n.ip, Boxes: n.Boxes },
            };
            console.log("🚀 發送 API 請求:", ce);
            const be = await ke.request("/api/device/combine_drawer_boxes", {
              method: "POST",
              body: JSON.stringify(ce),
            });
            if ((console.log("📡 API 回應:", be), be.Code === 200 && be.Data)) {
              if (
                be.Data.Boxes &&
                Array.isArray(be.Data.Boxes) &&
                ((n.Boxes = be.Data.Boxes),
                (n.drawer = be.Data),
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
              console.error("❌ API 回應錯誤:", be),
                a(`取消合併失敗：${be.Result || "未知錯誤"}`, "error");
          } catch (re) {
            console.error("💥 API 調用失敗:", re),
              a("取消合併失敗：網路錯誤", "error");
          } finally {
            console.log("更新後資料：", n),
              console.log("更新後最深層資料：", o),
              u(null),
              s();
          }
      },
      E = async () => {
        if (n)
          try {
            n.name = x;
            const L = {
              ServerName: n.serverName,
              ServerType: n.serverType,
              Data: [n.drawer],
            };
            console.log("🚀 發送確認更新 API 請求:", L);
            const re = await ke.request("/api/device/update_epd583_drawers", {
              method: "POST",
              body: JSON.stringify(L),
            });
            if ((console.log("📡 確認更新 API 回應:", re), re.Code === 200)) {
              if (
                (console.log("✅ 抽屜資料更新成功"),
                a("抽屜資料更新成功", "success"),
                o)
              ) {
                const ae = (V) => {
                    V.forEach((F) => {
                      F.GUID === n.GUID &&
                        (console.log("🎯 找到目標格線抽屜，更新名稱"),
                        (F.name = n.name)),
                        F.contents &&
                          Array.isArray(F.contents) &&
                          ae(F.contents),
                        F.components &&
                          Array.isArray(F.components) &&
                          ae(F.components);
                    });
                  },
                  $ = JSON.parse(JSON.stringify(o));
                ae($), l($);
              }
              S(!1), m(null), s(), t();
            } else
              console.error("❌ 抽屜資料更新失敗:", re),
                a(`抽屜資料更新失敗：${re.Result || "未知錯誤"}`, "error");
          } catch (L) {
            console.error("💥 抽屜資料更新 API 調用失敗:", L),
              a("抽屜資料更新失敗：網路錯誤", "error");
          }
      },
      W = () => {
        var xe;
        if (
          !((xe = n == null ? void 0 : n.drawer) != null && xe.Boxes) ||
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
        const L = n.drawer.Boxes.flat(),
          re = (ce) => {
            if (ce.Slave) return { width: 1, height: 1 };
            const be = L.filter(
              (Ve) =>
                Ve.Slave &&
                Ve.MasterBox_Row === ce.Row &&
                Ve.MasterBox_Column === ce.Column
            );
            if (be.length === 0) return { width: 1, height: 1 };
            const Ce = [ce, ...be],
              Ee = Math.min(...Ce.map((Ve) => Ve.Row)),
              Ze = Math.max(...Ce.map((Ve) => Ve.Row)),
              Pe = Math.min(...Ce.map((Ve) => Ve.Column));
            return {
              width: Math.max(...Ce.map((Ve) => Ve.Column)) - Pe + 1,
              height: Ze - Ee + 1,
            };
          },
          ae = Math.max(...L.map((ce) => ce.Row + 1 - 1)),
          $ = Math.max(...L.map((ce) => ce.Column + 1 - 1)),
          V = ae + 1,
          F = $ + 1,
          J = Array(V)
            .fill(null)
            .map(() => Array(F).fill(!1)),
          le = {};
        return (
          L.forEach((ce) => {
            if (!ce.Slave) {
              const be = re(ce);
              (le[`${ce.Row},${ce.Column}`] = ce),
                (ce.calculatedWidth = be.width),
                (ce.calculatedHeight = be.height);
            }
          }),
          L.forEach((ce) => {
            if (
              !ce.Slave &&
              (ce.calculatedWidth > 1 || ce.calculatedHeight > 1)
            )
              for (let be = ce.Row; be < ce.Row + ce.calculatedHeight; be++)
                for (
                  let Ce = ce.Column;
                  Ce < ce.Column + ce.calculatedWidth;
                  Ce++
                )
                  (be !== ce.Row || Ce !== ce.Column) && (J[be][Ce] = !0);
          }),
          r.jsx("div", {
            className: "rounded-lg",
            children: r.jsx("table", {
              className: "w-full",
              children: r.jsx("tbody", {
                children: Array.from({ length: V }, (ce, be) =>
                  r.jsx(
                    "tr",
                    {
                      children: Array.from({ length: F }, (Ce, Ee) => {
                        if (J[be][Ee]) return null;
                        const Ze = `${be},${Ee}`,
                          Pe = le[Ze];
                        return Pe
                          ? r.jsx(
                              "td",
                              {
                                className: `border border-gray-400 pt-1 pl-1 align-top cursor-pointer select-none ${
                                  w(be, Ee)
                                    ? "bg-blue-200"
                                    : "bg-white hover:bg-gray-100"
                                }`,
                                style: {
                                  width: `${100 / F}%`,
                                  minHeight: "40px",
                                  height: `${50 * Pe.calculatedHeight}px`,
                                  maxHeight: `${50 * Pe.calculatedHeight}px`,
                                },
                                colSpan: Pe.calculatedWidth,
                                rowSpan: Pe.calculatedHeight,
                                onMouseDown: (rt) => G(be, Ee, rt),
                                onMouseEnter: () => ve(be, Ee),
                                onMouseUp: ge,
                                onTouchStart: (rt) => G(be, Ee, rt),
                                onTouchMove: (rt) => {
                                  if ((rt.preventDefault(), !D)) return;
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
                                    ve(Vn, Yt);
                                  }
                                },
                                onTouchEnd: ge,
                                "data-row": be,
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
                                  w(be, Ee)
                                    ? "border-1 border-blue-500 bg-blue-100"
                                    : "bg-gray-50 hover:bg-gray-100"
                                }`,
                                style: {
                                  width: `${100 / F}%`,
                                  minWidth: "80px",
                                  minHeight: "80px",
                                },
                                onMouseDown: (rt) => G(be, Ee, rt),
                                onMouseEnter: () => ve(be, Ee),
                                onMouseUp: ge,
                                onTouchStart: (rt) => G(be, Ee, rt),
                                onTouchMove: (rt) => {
                                  if ((rt.preventDefault(), !D)) return;
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
                                    ve(Vn, Yt);
                                  }
                                },
                                onTouchEnd: ge,
                                "data-row": be,
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
                    be
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
              onClick: (L) => L.stopPropagation(),
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
                              onChange: (L) => g(L.target.value),
                              disabled: !0,
                              placeholder:
                                (n == null ? void 0 : n.name) ||
                                c("placeholder.gridDrawName"),
                              className:
                                "px-2 py-1 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors text-base",
                            }),
                          ],
                        }),
                        r.jsx("div", { className: "space-y-1", children: W() }),
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
                                onClick: fe,
                                disabled: !Ne,
                                className: `px-4 py-2 rounded transition-colors ${
                                  Ne
                                    ? "bg-blue-600 text-white hover:bg-blue-700"
                                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                                }`,
                                children: c("button.merge"),
                              }),
                              r.jsx("button", {
                                onClick: Ae,
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
                            const L = M(),
                              re = L.find((ae) => !ae.Slave);
                            return re && (re.Code || re.Name || re.ChineseName)
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
                                          children: re.Code || "-",
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
                                          children: re.Name || "-",
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
                                          children: re.ChineseName || "-",
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
                                      d && L.length > 0
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
                                  onChange: (L) => _(L.target.value),
                                  placeholder: c("placeholder.drugSearch"),
                                  className:
                                    "border rounded px-3 py-1 flex-1 min-w-0 focus:border-blue-500 focus:outline-none transition-colors",
                                }),
                                r.jsxs("select", {
                                  value: P,
                                  onChange: (L) => k(L.target.value),
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
                                    children: T.map((L, re) =>
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
                                                  children: L.NAME,
                                                }),
                                                r.jsx("div", {
                                                  className:
                                                    "text-xs text-gray-500 truncate",
                                                  children: L.CHT_NAME,
                                                }),
                                                r.jsx("div", {
                                                  className:
                                                    "text-xs text-gray-400 font-mono",
                                                  children: L.CODE,
                                                }),
                                              ],
                                            }),
                                            r.jsx("button", {
                                              onClick: () => he(L),
                                              className:
                                                "ml-2 p-1 text-green-600 hover:text-green-700 hover:bg-green-50 rounded transition-colors flex-shrink-0",
                                              title: c("button.add"),
                                              children: r.jsx(Dt, {
                                                className: "w-4 h-4",
                                              }),
                                            }),
                                          ],
                                        },
                                        L.GUID || re
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
                          onClick: U,
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
                  onMouseUp: ge,
                  onMouseLeave: ge,
                  onTouchEnd: ge,
                  onTouchCancel: ge,
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
      [S, D] = f.useState(0),
      [R, d] = f.useState(!1);
    f.useEffect(() => {
      e && (h(null), j(0), D(0), d(!1));
    }, [e]),
      f.useEffect(() => {
        g && (j(g.row), D(g.col));
      }, [g]);
    const u = () => {
        const b = new Set();
        return (
          n != null &&
            n.contents &&
            n.contents.forEach((N) => {
              N.type === "parent_container" &&
                N.gird_position &&
                b.add(N.gird_position);
            }),
          b
        );
      },
      p = () => {
        const b = u(),
          N = [];
        if (b.size === 0) return N.push({ row: 0, col: 0 }), N;
        const U = [];
        b.forEach((w) => {
          const [C, M] = w.split(",").map(Number);
          U.push({ row: C, col: M });
        });
        const v = new Set();
        return (
          U.forEach(({ row: w, col: C }) => {
            v.add(`${w},${C + 1}`),
              v.add(`${w + 1},${C}`),
              C > 0 && v.add(`${w},${C - 1}`),
              w > 0 && v.add(`${w - 1},${C}`);
          }),
          v.forEach((w) => {
            if (!b.has(w)) {
              const [C, M] = w.split(",").map(Number);
              C >= 0 && M >= 0 && N.push({ row: C, col: M });
            }
          }),
          b.has("0,1") ||
            N.some((C) => C.row === 0 && C.col === 1) ||
            N.push({ row: 0, col: 1 }),
          b.has("1,0") ||
            N.some((C) => C.row === 1 && C.col === 0) ||
            N.push({ row: 1, col: 0 }),
          N.sort((w, C) => (w.row === C.row ? w.col - C.col : w.row - C.row))
        );
      },
      _ = (b) => {
        h(b);
      },
      P = (b) => {
        j(b), h({ row: b, col: S });
      },
      k = (b) => {
        D(b), h({ row: m, col: b });
      },
      T = g && !u().has(`${g.row},${g.col}`) && g.row >= 0 && g.col >= 0,
      H = async () => {
        if (!(!g || !n || !T)) {
          d(!0);
          try {
            const b = `${g.row},${g.col}`;
            console.log(n);
            const N = await ke.addMedMapSection(n.GUID, b, n.name, n.type);
            N.Code === 200
              ? (a("新增成功", "success"), t(), c(!1), await X())
              : a(`新增失敗：${N.Result || "未知錯誤"}`, "error");
          } catch (b) {
            console.error("Add parent container failed:", b),
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
          const b = await ke.getMedMapByDepartment(s);
          if (b.Code === 200 && b.Data) {
            console.log("📡 API 回傳成功，開始轉換資料");
            const N = ct.convertMedMapApiToFakeData(b.Data);
            if (!ct.validateConvertedData(N)) {
              console.error("❌ 轉換後的資料驗證失敗"),
                a("資料更新失敗：資料格式錯誤", "error");
              return;
            }
            o(N), console.log("✅ 藥品地圖資料已更新");
          } else
            console.error("❌ API 回傳錯誤:", b),
              a("資料更新失敗：API 錯誤", "error");
        } catch (b) {
          console.error("💥 重新獲取藥品地圖資料失敗:", b),
            a("資料更新失敗：網路錯誤", "error");
        } finally {
          l(!1);
        }
      },
      ee = () => {
        t();
      },
      ue = () => {
        const b = u(),
          N = p(),
          U = [...b]
            .map((K) => {
              const [Ne, de] = K.split(",").map(Number);
              return { row: Ne, col: de };
            })
            .concat(N);
        U.length === 0 && U.push({ row: 0, col: 0 });
        const v = Math.max(...U.map((K) => K.row)),
          w = Math.max(...U.map((K) => K.col)),
          C = Math.min(...U.map((K) => K.row)),
          M = Math.min(...U.map((K) => K.col)),
          oe = v - C + 1,
          B = w - M + 1;
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
                style: { gridTemplateColumns: `repeat(${B}, 1fr)` },
                children: Array.from({ length: oe * B }, (K, Ne) => {
                  const de = Math.floor(Ne / B) + C,
                    z = (Ne % B) + M,
                    he = `${de},${z}`,
                    G = b.has(he),
                    ve = N.some((fe) => fe.row === de && fe.col === z),
                    ge =
                      (g == null ? void 0 : g.row) === de &&
                      (g == null ? void 0 : g.col) === z;
                  return r.jsx(
                    "button",
                    {
                      onClick: () => ve && _({ row: de, col: z }),
                      disabled: G || !ve,
                      className: `
                    w-16 h-16 border-2 rounded-lg transition-all duration-200 flex items-center justify-center text-sm font-medium
                    ${
                      G
                        ? "bg-red-100 border-red-300 text-red-600 cursor-not-allowed"
                        : ge
                        ? "bg-blue-500 border-blue-600 text-white shadow-lg"
                        : ve
                        ? "bg-green-100 border-green-300 text-green-700 hover:bg-green-200 hover:border-green-400 cursor-pointer"
                        : "bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed"
                    }
                  `,
                      title: G ? "已占用" : ve ? "可選擇" : "不可用",
                      children: G ? "占用" : `${de},${z}`,
                    },
                    he
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
              onClick: ee,
            }),
            r.jsxs("div", {
              className:
                "relative flex flex-col bg-white rounded-xl shadow-2xl border border-gray-200",
              style: { width: "90vw", height: "90vh", maxWidth: "800px" },
              onClick: (b) => b.stopPropagation(),
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
                      onClick: ee,
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
                                    onChange: (b) =>
                                      P(parseInt(b.target.value) || 0),
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
                                    onChange: (b) =>
                                      k(parseInt(b.target.value) || 0),
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
                                        (b) => b.type === "parent_container"
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
                      onClick: ee,
                      disabled: R,
                      className:
                        "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                      children: x("button.cancel"),
                    }),
                    r.jsxs("button", {
                      onClick: H,
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
    var oe;
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
      [S, D] = f.useState("1"),
      [R, d] = f.useState(""),
      [u, p] = f.useState(null),
      [_, P] = f.useState(0),
      [k, T] = f.useState(0),
      [H, X] = f.useState(!1);
    f.useEffect(() => {
      e &&
        (h("dispensing_shelves"),
        j("1"),
        D("1"),
        d(""),
        p(null),
        P(0),
        T(0),
        X(!1));
    }, [e]),
      f.useEffect(() => {
        u && (P(u.row), T(u.col));
      }, [u]);
    const ee = () => {
        const B = new Set();
        return (
          n != null &&
            n.contents &&
            n.contents.forEach((K) => {
              K.gird_position && B.add(K.gird_position);
            }),
          B
        );
      },
      ue = () => {
        const B = ee(),
          K = [];
        if (B.size === 0) return K.push({ row: 0, col: 0 }), K;
        const Ne = [];
        B.forEach((z) => {
          const [he, G] = z.split(",").map(Number);
          Ne.push({ row: he, col: G });
        });
        const de = new Set();
        return (
          Ne.forEach(({ row: z, col: he }) => {
            de.add(`${z},${he + 1}`),
              de.add(`${z + 1},${he}`),
              he > 0 && de.add(`${z},${he - 1}`),
              z > 0 && de.add(`${z - 1},${he}`);
          }),
          de.forEach((z) => {
            if (!B.has(z)) {
              const [he, G] = z.split(",").map(Number);
              he >= 0 && G >= 0 && K.push({ row: he, col: G });
            }
          }),
          B.has("0,1") ||
            K.some((he) => he.row === 0 && he.col === 1) ||
            K.push({ row: 0, col: 1 }),
          B.has("1,0") ||
            K.some((he) => he.row === 1 && he.col === 0) ||
            K.push({ row: 1, col: 0 }),
          K.sort((z, he) =>
            z.row === he.row ? z.col - he.col : z.row - he.row
          )
        );
      },
      we = (B) => {
        p(B);
      },
      b = (B) => {
        P(B), p({ row: B, col: k });
      },
      N = (B) => {
        T(B), p({ row: _, col: B });
      },
      U = u && !ee().has(`${u.row},${u.col}`) && u.row >= 0 && u.col >= 0,
      v = async () => {
        if (!(!u || !n || !U)) {
          X(!0);
          try {
            const B = `${u.row},${u.col}`,
              K = Pc.find((de) => de.value === g);
            let Ne;
            K != null && K.isShelf
              ? (Ne = await ke.addMedMapShelf({
                  Master_GUID: n.GUID,
                  position: B,
                  width: m,
                  height: S,
                  ip_light: R,
                  type: g,
                  serverName: n.name,
                  serverType: n.type,
                }))
              : (Ne = await ke.addMedMapDrawer({
                  Master_GUID: n.GUID,
                  position: B,
                  width: m,
                  height: S,
                  ip_drawer: R,
                  type: g,
                  serverName: n.name,
                  serverType: n.type,
                })),
              Ne.Code === 200
                ? (a("新增成功", "success"), t(), c(!1), await w())
                : a(`新增失敗：${Ne.Result || "未知錯誤"}`, "error");
          } catch (B) {
            console.error("Add container failed:", B),
              a("新增失敗：網路錯誤", "error");
          } finally {
            X(!1);
          }
        }
      },
      w = async () => {
        if (!s) {
          console.warn("⚠️ 沒有選中的部門類型，無法重新獲取資料");
          return;
        }
        console.log("🔄 重新獲取藥品地圖資料，部門類型:", s), l(!0);
        try {
          const B = await ke.getMedMapByDepartment(s);
          if (B.Code === 200 && B.Data) {
            console.log("📡 API 回傳成功，開始轉換資料");
            const K = ct.convertMedMapApiToFakeData(B.Data);
            if (!ct.validateConvertedData(K)) {
              console.error("❌ 轉換後的資料驗證失敗"),
                a("資料更新失敗：資料格式錯誤", "error");
              return;
            }
            o(K), console.log("✅ 藥品地圖資料已更新");
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
      C = () => {
        t();
      },
      M = () => {
        const B = ee(),
          K = ue(),
          Ne = [...B]
            .map((fe) => {
              const [Ae, te] = fe.split(",").map(Number);
              return { row: Ae, col: te };
            })
            .concat(K);
        Ne.length === 0 && Ne.push({ row: 0, col: 0 });
        const de = Math.max(...Ne.map((fe) => fe.row)),
          z = Math.max(...Ne.map((fe) => fe.col)),
          he = Math.min(...Ne.map((fe) => fe.row)),
          G = Math.min(...Ne.map((fe) => fe.col)),
          ve = de - he + 1,
          ge = z - G + 1;
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
                style: { gridTemplateColumns: `repeat(${ge}, 1fr)` },
                children: Array.from({ length: ve * ge }, (fe, Ae) => {
                  const te = Math.floor(Ae / ge) + he,
                    I = (Ae % ge) + G,
                    E = `${te},${I}`,
                    W = B.has(E),
                    L = K.some((ae) => ae.row === te && ae.col === I),
                    re =
                      (u == null ? void 0 : u.row) === te &&
                      (u == null ? void 0 : u.col) === I;
                  return r.jsx(
                    "button",
                    {
                      onClick: () => L && we({ row: te, col: I }),
                      disabled: W || !L,
                      className: `
                    w-16 h-16 border-2 rounded-lg transition-all duration-200 flex items-center justify-center text-sm font-medium
                    ${
                      W
                        ? "bg-red-100 border-red-300 text-red-600 cursor-not-allowed"
                        : re
                        ? "bg-blue-500 border-blue-600 text-white shadow-lg"
                        : L
                        ? "bg-green-100 border-green-300 text-green-700 hover:bg-green-200 hover:border-green-400 cursor-pointer"
                        : "bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed"
                    }
                  `,
                      title: W ? "已占用" : L ? "可選擇" : "不可用",
                      children: W ? "占用" : `${te},${I}`,
                    },
                    E
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
              onClick: C,
            }),
            r.jsxs("div", {
              className:
                "relative flex flex-col bg-white rounded-xl shadow-2xl border border-gray-200",
              style: { width: "90vw", height: "90vh", maxWidth: "1000px" },
              onClick: (B) => B.stopPropagation(),
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
                      onClick: C,
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
                            children: Pc.map((B) =>
                              r.jsxs(
                                "label",
                                {
                                  className: `flex items-center space-x-3 p-4 border-2 rounded-lg cursor-pointer transition-all ${
                                    g === B.value
                                      ? "border-blue-500 bg-blue-50"
                                      : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                                  }`,
                                  children: [
                                    r.jsx("input", {
                                      type: "radio",
                                      name: "containerType",
                                      value: B.value,
                                      checked: g === B.value,
                                      onChange: (K) => h(K.target.value),
                                      className:
                                        "w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 hidden",
                                    }),
                                    r.jsxs("div", {
                                      className: "flex items-center space-x-3",
                                      children: [
                                        B.icon,
                                        r.jsx("span", {
                                          className:
                                            "font-medium text-gray-900",
                                          children: B.label,
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                B.value
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
                                onChange: (B) => j(B.target.value),
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
                                onChange: (B) => D(B.target.value),
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
                            onChange: (B) => d(B.target.value),
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
                                    value: _,
                                    onChange: (B) =>
                                      b(parseInt(B.target.value) || 0),
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
                                    value: k,
                                    onChange: (B) =>
                                      N(parseInt(B.target.value) || 0),
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
                                U
                                  ? "bg-green-50 text-green-700 border border-green-200"
                                  : "bg-red-50 text-red-700 border border-red-200"
                              }`,
                              children: U
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
                                  ((oe = n == null ? void 0 : n.contents) ==
                                  null
                                    ? void 0
                                    : oe.length) || 0,
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
                      onClick: C,
                      disabled: H,
                      className:
                        "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                      children: x("button.cancel"),
                    }),
                    r.jsxs("button", {
                      onClick: v,
                      disabled: !U || H,
                      className:
                        "px-6 py-2 text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center space-x-2",
                      children: [
                        H && r.jsx(It, { className: "w-4 h-4 animate-spin" }),
                        r.jsx("span", { children: H ? "新增中..." : "新增" }),
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
      [S, D] = f.useState(0),
      [R, d] = f.useState(!1);
    f.useEffect(() => {
      e && (h(null), j(0), D(0), d(!1));
    }, [e]),
      f.useEffect(() => {
        g && (j(g.row), D(g.col));
      }, [g]);
    const u = () => {
        const b = new Set();
        return (
          n != null &&
            n.contents &&
            n.contents.forEach((N) => {
              N.type === "sub_container" &&
                N.gird_position &&
                b.add(N.gird_position);
            }),
          b
        );
      },
      p = () => {
        const b = u(),
          N = [];
        if (b.size === 0) return N.push({ row: 0, col: 0 }), N;
        const U = [];
        b.forEach((w) => {
          const [C, M] = w.split(",").map(Number);
          U.push({ row: C, col: M });
        });
        const v = new Set();
        return (
          U.forEach(({ row: w, col: C }) => {
            v.add(`${w},${C + 1}`),
              v.add(`${w + 1},${C}`),
              C > 0 && v.add(`${w},${C - 1}`),
              w > 0 && v.add(`${w - 1},${C}`);
          }),
          v.forEach((w) => {
            if (!b.has(w)) {
              const [C, M] = w.split(",").map(Number);
              C >= 0 && M >= 0 && N.push({ row: C, col: M });
            }
          }),
          b.has("0,1") ||
            N.some((C) => C.row === 0 && C.col === 1) ||
            N.push({ row: 0, col: 1 }),
          b.has("1,0") ||
            N.some((C) => C.row === 1 && C.col === 0) ||
            N.push({ row: 1, col: 0 }),
          N.sort((w, C) => (w.row === C.row ? w.col - C.col : w.row - C.row))
        );
      },
      _ = (b) => {
        h(b);
      },
      P = (b) => {
        j(b), h({ row: b, col: S });
      },
      k = (b) => {
        D(b), h({ row: m, col: b });
      },
      T = g && !u().has(`${g.row},${g.col}`) && g.row >= 0 && g.col >= 0,
      H = async () => {
        if (!(!g || !n || !T)) {
          d(!0);
          try {
            const b = `${g.row},${g.col}`,
              N = await ke.addSubSection(n.GUID, b);
            N.Code === 200
              ? (a("新增成功", "success"), t(), c(!1), await X())
              : a(`新增失敗：${N.Result || "未知錯誤"}`, "error");
          } catch (b) {
            console.error("Add sub container failed:", b),
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
          const b = await ke.getMedMapByDepartment(s);
          if (b.Code === 200 && b.Data) {
            console.log("📡 API 回傳成功，開始轉換資料");
            const N = ct.convertMedMapApiToFakeData(b.Data);
            if (!ct.validateConvertedData(N)) {
              console.error("❌ 轉換後的資料驗證失敗"),
                a("資料更新失敗：資料格式錯誤", "error");
              return;
            }
            o(N), console.log("✅ 藥品地圖資料已更新");
          } else
            console.error("❌ API 回傳錯誤:", b),
              a("資料更新失敗：API 錯誤", "error");
        } catch (b) {
          console.error("💥 重新獲取藥品地圖資料失敗:", b),
            a("資料更新失敗：網路錯誤", "error");
        } finally {
          l(!1);
        }
      },
      ee = () => {
        t();
      },
      ue = () => {
        const b = u(),
          N = p(),
          U = [...b]
            .map((K) => {
              const [Ne, de] = K.split(",").map(Number);
              return { row: Ne, col: de };
            })
            .concat(N);
        U.length === 0 && U.push({ row: 0, col: 0 });
        const v = Math.max(...U.map((K) => K.row)),
          w = Math.max(...U.map((K) => K.col)),
          C = Math.min(...U.map((K) => K.row)),
          M = Math.min(...U.map((K) => K.col)),
          oe = v - C + 1,
          B = w - M + 1;
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
                style: { gridTemplateColumns: `repeat(${B}, 1fr)` },
                children: Array.from({ length: oe * B }, (K, Ne) => {
                  const de = Math.floor(Ne / B) + C,
                    z = (Ne % B) + M,
                    he = `${de},${z}`,
                    G = b.has(he),
                    ve = N.some((fe) => fe.row === de && fe.col === z),
                    ge =
                      (g == null ? void 0 : g.row) === de &&
                      (g == null ? void 0 : g.col) === z;
                  return r.jsx(
                    "button",
                    {
                      onClick: () => ve && _({ row: de, col: z }),
                      disabled: G || !ve,
                      className: `
                    w-16 h-16 border-2 rounded-lg transition-all duration-200 flex items-center justify-center text-sm font-medium
                    ${
                      G
                        ? "bg-red-100 border-red-300 text-red-600 cursor-not-allowed"
                        : ge
                        ? "bg-blue-500 border-blue-600 text-white shadow-lg"
                        : ve
                        ? "bg-green-100 border-green-300 text-green-700 hover:bg-green-200 hover:border-green-400 cursor-pointer"
                        : "bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed"
                    }
                  `,
                      title: G ? "已占用" : ve ? "可選擇" : "不可用",
                      children: G ? "占用" : `${de},${z}`,
                    },
                    he
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
              onClick: ee,
            }),
            r.jsxs("div", {
              className:
                "relative flex flex-col bg-white rounded-xl shadow-2xl border border-gray-200",
              style: { width: "90vw", height: "90vh", maxWidth: "800px" },
              onClick: (b) => b.stopPropagation(),
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
                      onClick: ee,
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
                                    onChange: (b) =>
                                      P(parseInt(b.target.value) || 0),
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
                                    onChange: (b) =>
                                      k(parseInt(b.target.value) || 0),
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
                                        (b) => b.type === "sub_container"
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
                      onClick: ee,
                      disabled: R,
                      className:
                        "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                      children: x("button.cancel"),
                    }),
                    r.jsxs("button", {
                      onClick: H,
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
      [S, D] = f.useState(""),
      [R, d] = f.useState(""),
      [u, p] = f.useState([]),
      [_, P] = f.useState([]),
      [k, T] = f.useState(""),
      [H, X] = f.useState(""),
      [ee, ue] = f.useState(""),
      [we, b] = f.useState(""),
      [N, U] = f.useState("EPD290"),
      [v, w] = f.useState(null),
      [C, M] = f.useState([]),
      [oe, B] = f.useState(""),
      [K, Ne] = f.useState(!1),
      de = f.useRef(null);
    f.useEffect(() => {
      if (e && c === "edit" && i) {
        h(i.code || ""), j(i.name || ""), D(""), d(i.material_no || "");
        const E = i.lot || [],
          W = i.expiry_date || [],
          L = i.qty || [],
          re = [];
        if (E.length > 0 || W.length > 0 || L.length > 0) {
          const V = Math.max(E.length, W.length, L.length),
            F = [];
          for (let J = 0; J < V; J++) {
            const le = W[J] || "";
            let xe = "";
            le && (xe = le.split("T")[0]),
              (xe = xe.replace(/\//g, "-")),
              F.push({
                id: `batch_${Date.now()}_${J}`,
                lot: E[J] || "",
                expiryDate: xe,
                qty: String(L[J] || ""),
              }),
              xe && re.push(xe);
          }
          p(F), P(re), p([]);
        } else P([]);
        const $ = (i.location || "0,0").split(",");
        T($[0] || "0"),
          X($[1] || "0"),
          ue(i.led_index || ""),
          b(i.ip || ""),
          U(i.device_type || "EPD290");
      } else if (e && c === "add") {
        if (
          (h(""),
          j(""),
          D(""),
          d(""),
          p([]),
          P([]),
          ue(""),
          b(""),
          U("EPD290"),
          n && n.medMapStock && n.medMapStock.length > 0)
        ) {
          const E = n.medMapStock.map((L) => {
            const ae = (L.location || "0,0").split(",");
            return Number(ae[0] || "0");
          });
          let W = 0;
          for (; E.includes(W); ) W++;
          T(String(W));
        } else T("0");
        X("0");
      }
    }, [e, c, i, n]),
      f.useEffect(() => {
        const E = (W) => {
          de.current && !de.current.contains(W.target) && w(null);
        };
        return (
          document.addEventListener("mousedown", E),
          () => {
            document.removeEventListener("mousedown", E);
          }
        );
      }, []);
    const z = (E, W) => {
        if (!W.trim()) {
          M([]);
          return;
        }
        const L = W.toLowerCase(),
          re = o.filter((ae) => {
            var $, V, F, J;
            switch (E) {
              case "code":
                return ($ = ae.CODE) == null
                  ? void 0
                  : $.toLowerCase().includes(L);
              case "name":
                return (V = ae.NAME) == null
                  ? void 0
                  : V.toLowerCase().includes(L);
              case "chineseName":
                return (F = ae.CHT_NAME) == null
                  ? void 0
                  : F.toLowerCase().includes(L);
              case "skdiacode":
                return (J = ae.SKDIACODE) == null
                  ? void 0
                  : J.toLowerCase().includes(L);
              default:
                return !1;
            }
          });
        M(re.slice(0, 50));
      },
      he = (E, W) => {
        switch ((w(E), E)) {
          case "code":
            h(W);
            break;
          case "name":
            j(W);
            break;
          case "chineseName":
            D(W);
            break;
          case "skdiacode":
            d(W);
            break;
        }
        z(E, W);
      },
      G = (E, W) => {
        switch (W) {
          case "code":
            h(E.CODE || ""),
              j(E.NAME || ""),
              D(E.CHT_NAME || ""),
              d(E.SKDIACODE || "");
            break;
          case "name":
            h(E.CODE || ""),
              j(E.NAME || ""),
              D(E.CHT_NAME || ""),
              d(E.SKDIACODE || "");
            break;
          case "chineseName":
            h(E.CODE || ""),
              j(E.NAME || ""),
              D(E.CHT_NAME || ""),
              d(E.SKDIACODE || "");
            break;
          case "skdiacode":
            h(E.CODE || ""),
              j(E.NAME || ""),
              D(E.CHT_NAME || ""),
              d(E.SKDIACODE || "");
            break;
        }
        B(E.GUID), w(null), M([]);
      },
      ve = () => {
        const E = {
          id: `batch_${Date.now()}`,
          lot: "",
          expiryDate: "",
          qty: "",
        };
        p([...u, E]);
      },
      ge = (E) => {
        p(u.filter((W) => W.id !== E));
      },
      fe = (E, W, L) => {
        p(u.map((re) => (re.id === E ? { ...re, [W]: L } : re)));
      },
      Ae = async () => {
        var re;
        if (!g || !m) {
          s("請選擇藥品", "error");
          return;
        }
        if (!n || !n.GUID) {
          s("層架資訊錯誤", "error");
          return;
        }
        const E = [],
          W = [],
          L = [];
        u.forEach((ae) => {
          E.push(ae.lot || "");
          let $ = "";
          ae.expiryDate && ($ = `${ae.expiryDate}`),
            W.push($),
            L.push(ae.qty ? `${Number(ae.qty)}` : "0");
        });
        try {
          if (c === "edit" && i) {
            const ae = {
                GUID: i.GUID,
                code: g,
                device_type: N,
                expiry_date: W,
                ip_light: we || "",
                ip: we || "",
                led_index: ee || "",
                location: `${k || "0"},${H || "0"}`,
                lot: E,
                material_no: R || "",
                name: m,
                qty: L,
                shelf_guid: n.GUID,
              },
              $ = await ke.updateStock([ae]);
            if ($.Code === 200) {
              x(n.GUID, i.GUID, ae), console.log("檢查有無貨物批次被刪除");
              const V = _.filter((F) => !W.includes(F));
              if ((console.log(V), V.length > 0)) {
                console.log("🗑️ 檢測到被刪除的批次效期:", V);
                let F = "";
                try {
                  i.Value &&
                    ((F = JSON.parse(i.Value).GUID || ""),
                    console.log("📦 從 Value 欄位解析出的 GUID:", F));
                } catch (J) {
                  console.error("❌ 解析 Value 欄位失敗:", J);
                }
                if (F) {
                  for (const J of V)
                    try {
                      console.log(`🗑️ 正在刪除批次，GUID: ${F}, 效期: ${J}`);
                      const le = await ke.stockDeleteValidityPeriod(F, J);
                      le.Code === 200
                        ? console.log(`✅ 成功刪除批次效期: ${J}`)
                        : console.warn(
                            `⚠️ 刪除批次失敗 (效期: ${J}):`,
                            le.Result
                          );
                    } catch (le) {
                      console.error(`❌ 刪除批次時發生錯誤 (效期: ${J}):`, le);
                    }
                  s(`更新貨物成功，已刪除 ${V.length} 個批次`, "success");
                } else
                  console.warn("⚠️ 無法取得 Value GUID，跳過批次刪除"),
                    s("更新貨物成功（但無法刪除批次）", "success");
              } else s("更新貨物成功", "success");
              I();
            } else s($.Result || "更新貨物失敗", "error");
          } else {
            const ae = {
                code: g,
                device_type: N,
                expiry_date: W,
                ip_light: we || "",
                ip: we || "",
                led_index: ee || "",
                location: `${k || "0"},${H || "0"}`,
                lot: E,
                material_no: R || "",
                name: m,
                qty: L,
                shelf_guid: n.GUID,
              },
              $ = await ke.addStock([ae]);
            $.Code === 200
              ? (a(n.GUID, {
                  GUID:
                    ((re = $.Data) == null ? void 0 : re.GUID) ||
                    `stock_${Date.now()}`,
                  ...ae,
                }),
                s("新增貨物成功", "success"),
                I())
              : s($.Result || "新增貨物失敗", "error");
          }
        } catch (ae) {
          console.error("貨物操作錯誤:", ae),
            s(
              c === "edit"
                ? "更新貨物失敗，請稍後再試"
                : "新增貨物失敗，請稍後再試",
              "error"
            );
        }
      },
      te = (E, W) => {
        console.log("📸 掃描成功，填入藥品資料:", W),
          h(W[0].CODE || W[0].code || ""),
          j(W[0].NAME || W[0].name || ""),
          D(W[0].CHT_NAME || W[0].cht_name || ""),
          d(W[0].SKDIACODE || W[0].skdiacode || W[0].material_no || ""),
          B(W[0].GUID || ""),
          Ne(!1),
          s("已自動填入藥品資料", "success");
      },
      I = () => {
        h(""),
          j(""),
          D(""),
          d(""),
          p([]),
          P([]),
          T(""),
          X(""),
          ue(""),
          b(""),
          U("EPD290"),
          B(""),
          M([]),
          w(null),
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
                      onClick: I,
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
                                    onClick: () => Ne(!0),
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
                                    ref: v === "code" ? de : null,
                                    children: [
                                      r.jsx("label", {
                                        className:
                                          "block text-sm font-medium text-gray-700 mb-1",
                                        children: "藥碼",
                                      }),
                                      r.jsx("input", {
                                        type: "text",
                                        value: g,
                                        onChange: (E) =>
                                          he("code", E.target.value),
                                        onFocus: () => w("code"),
                                        className:
                                          "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        placeholder: "輸入藥品代碼",
                                      }),
                                      v === "code" &&
                                        C.length > 0 &&
                                        r.jsx("div", {
                                          className:
                                            "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto",
                                          children: C.map((E) =>
                                            r.jsxs(
                                              "div",
                                              {
                                                onClick: () => G(E, "code"),
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
                                                        children: E.CODE,
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-600",
                                                        children: "|",
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-700",
                                                        children: E.NAME,
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
                                                        children: E.CHT_NAME,
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
                                                          E.SKDIACODE,
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              },
                                              E.GUID
                                            )
                                          ),
                                        }),
                                    ],
                                  }),
                                  r.jsxs("div", {
                                    className: "relative",
                                    ref: v === "name" ? de : null,
                                    children: [
                                      r.jsx("label", {
                                        className:
                                          "block text-sm font-medium text-gray-700 mb-1",
                                        children: "藥名",
                                      }),
                                      r.jsx("input", {
                                        type: "text",
                                        value: m,
                                        onChange: (E) =>
                                          he("name", E.target.value),
                                        onFocus: () => w("name"),
                                        className:
                                          "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        placeholder: "輸入藥品名稱",
                                      }),
                                      v === "name" &&
                                        C.length > 0 &&
                                        r.jsx("div", {
                                          className:
                                            "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto",
                                          children: C.map((E) =>
                                            r.jsxs(
                                              "div",
                                              {
                                                onClick: () => G(E, "name"),
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
                                                        children: E.CODE,
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-600",
                                                        children: "|",
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-700",
                                                        children: E.NAME,
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
                                                        children: E.CHT_NAME,
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
                                                          E.SKDIACODE,
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              },
                                              E.GUID
                                            )
                                          ),
                                        }),
                                    ],
                                  }),
                                  r.jsxs("div", {
                                    className: "relative",
                                    ref: v === "chineseName" ? de : null,
                                    children: [
                                      r.jsx("label", {
                                        className:
                                          "block text-sm font-medium text-gray-700 mb-1",
                                        children: "中文名",
                                      }),
                                      r.jsx("input", {
                                        type: "text",
                                        value: S,
                                        onChange: (E) =>
                                          he("chineseName", E.target.value),
                                        onFocus: () => w("chineseName"),
                                        className:
                                          "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        placeholder: "輸入中文名稱",
                                      }),
                                      v === "chineseName" &&
                                        C.length > 0 &&
                                        r.jsx("div", {
                                          className:
                                            "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto",
                                          children: C.map((E) =>
                                            r.jsxs(
                                              "div",
                                              {
                                                onClick: () =>
                                                  G(E, "chineseName"),
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
                                                        children: E.CODE,
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-600",
                                                        children: "|",
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-700",
                                                        children: E.NAME,
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
                                                        children: E.CHT_NAME,
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
                                                          E.SKDIACODE,
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              },
                                              E.GUID
                                            )
                                          ),
                                        }),
                                    ],
                                  }),
                                  r.jsxs("div", {
                                    className: "relative",
                                    ref: v === "skdiacode" ? de : null,
                                    children: [
                                      r.jsx("label", {
                                        className:
                                          "block text-sm font-medium text-gray-700 mb-1",
                                        children: "料號",
                                      }),
                                      r.jsx("input", {
                                        type: "text",
                                        value: R,
                                        onChange: (E) =>
                                          he("skdiacode", E.target.value),
                                        onFocus: () => w("skdiacode"),
                                        className:
                                          "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        placeholder: "輸入料號",
                                      }),
                                      v === "skdiacode" &&
                                        C.length > 0 &&
                                        r.jsx("div", {
                                          className:
                                            "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto",
                                          children: C.map((E) =>
                                            r.jsxs(
                                              "div",
                                              {
                                                onClick: () =>
                                                  G(E, "skdiacode"),
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
                                                        children: E.CODE,
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-600",
                                                        children: "|",
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-700",
                                                        children: E.NAME,
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
                                                        children: E.CHT_NAME,
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
                                                          E.SKDIACODE,
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              },
                                              E.GUID
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
                                    onClick: ve,
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
                                    children: u.map((E, W) =>
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
                                                  children: ["批次 ", W + 1],
                                                }),
                                                r.jsx("button", {
                                                  onClick: () => ge(E.id),
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
                                                      value: E.lot,
                                                      onChange: (L) =>
                                                        fe(
                                                          E.id,
                                                          "lot",
                                                          L.target.value
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
                                                      value: E.expiryDate,
                                                      onChange: (L) =>
                                                        fe(
                                                          E.id,
                                                          "expiryDate",
                                                          L.target.value
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
                                                      value: E.qty,
                                                      onChange: (L) =>
                                                        fe(
                                                          E.id,
                                                          "qty",
                                                          L.target.value
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
                                        E.id
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
                                        value: k,
                                        onChange: (E) => T(E.target.value),
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
                                        value: H,
                                        onChange: (E) => X(E.target.value),
                                        className:
                                          "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        placeholder: "輸入深度",
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
                                        value: ee,
                                        onChange: (E) => ue(E.target.value),
                                        className:
                                          "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        placeholder: "輸入 LED 索引",
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
                                        children: "電子紙 IP",
                                      }),
                                      r.jsx("input", {
                                        type: "text",
                                        value: we,
                                        onChange: (E) => b(E.target.value),
                                        className:
                                          "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        placeholder: "輸入電子紙 IP",
                                      }),
                                    ],
                                  }),
                                  r.jsxs("div", {
                                    children: [
                                      r.jsx("label", {
                                        className:
                                          "block text-sm font-medium text-gray-700 mb-1",
                                        children: "設備類型",
                                      }),
                                      r.jsxs("select", {
                                        value: N,
                                        onChange: (E) => U(E.target.value),
                                        className:
                                          "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white",
                                        children: [
                                          r.jsx("option", {
                                            value: "EPD290",
                                            children: "EPD290",
                                          }),
                                          r.jsx("option", {
                                            value: "RowsLED",
                                            children: "RowsLED",
                                          }),
                                          r.jsx("option", {
                                            value: "EPD730E",
                                            children: "EPD730E",
                                          }),
                                          r.jsx("option", {
                                            value: "EPD730F",
                                            children: "EPD730F",
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
                }),
                r.jsxs("div", {
                  className:
                    "sticky bottom-0 bg-gray-50 px-6 py-4 border-t flex justify-end space-x-3",
                  children: [
                    r.jsx("button", {
                      onClick: I,
                      className:
                        "px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors",
                      children: "取消",
                    }),
                    r.jsx("button", {
                      onClick: Ae,
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
              isOpen: K,
              onClose: () => Ne(!1),
              onScanSuccess: te,
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
      D = () => (!n || !o ? [] : o.filter((T) => T["department_type "] === n)),
      R = () => {
        const T = S();
        return D().filter((X) => !T.includes(X.name));
      },
      d = () => (s ? s.map((T) => T.gird_position) : []),
      u = () => {
        const T = d(),
          H = [];
        for (let X = 0; X < 10; X++)
          for (let ee = 0; ee < 10; ee++) {
            const ue = `${X},${ee}`;
            T.includes(ue) || H.push(ue);
          }
        return H.slice(0, 20);
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
            ? (l("新增部門成功", "success"), await i(), _())
            : l(T.Result || "新增部門失敗", "error");
        } catch (T) {
          console.error("新增部門錯誤:", T),
            l("新增部門失敗，請稍後再試", "error");
        } finally {
          j(!1);
        }
      },
      _ = () => {
        x(null), h(""), t();
      };
    if (!e) return null;
    const P = R(),
      k = u();
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
                onClick: _,
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
                    k.length === 0
                      ? r.jsx("div", {
                          className: "text-center py-8",
                          children: r.jsx("p", {
                            className: "text-gray-600",
                            children: "沒有可用的位置",
                          }),
                        })
                      : r.jsx("div", {
                          className: "grid grid-cols-5 gap-2",
                          children: k.map((T) => {
                            const [H, X] = T.split(",");
                            return r.jsxs(
                              "button",
                              {
                                onClick: () => h(T),
                                className: `p-3 border-2 rounded-lg text-sm font-medium transition-all ${
                                  g === T
                                    ? "border-blue-500 bg-blue-500 text-white"
                                    : "border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-700"
                                }`,
                                children: ["(", H, ",", X, ")"],
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
                onClick: _,
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
      [S, D] = f.useState(""),
      [R, d] = f.useState(null),
      [u, p] = f.useState([]),
      [_, P] = f.useState(""),
      [k, T] = f.useState(null),
      [H, X] = f.useState(!1),
      ee = f.useRef(null);
    f.useEffect(() => {
      e && (i(n), x(""), h(""), j(""), D(""), P(""), T(null), d(null));
    }, [e, n]),
      f.useEffect(() => {
        const v = (w) => {
          ee.current && !ee.current.contains(w.target) && d(null);
        };
        return (
          document.addEventListener("mousedown", v),
          () => {
            document.removeEventListener("mousedown", v);
          }
        );
      }, []);
    const ue = (v, w) => {
        if (!w.trim() || l) {
          p([]);
          return;
        }
        const C = w.toLowerCase(),
          M = o.filter((oe) => {
            var B, K, Ne, de;
            switch (v) {
              case "code":
                return (B = oe.CODE) == null
                  ? void 0
                  : B.toLowerCase().includes(C);
              case "name":
                return (K = oe.NAME) == null
                  ? void 0
                  : K.toLowerCase().includes(C);
              case "chineseName":
                return (Ne = oe.CHT_NAME) == null
                  ? void 0
                  : Ne.toLowerCase().includes(C);
              case "skdiacode":
                return (de = oe.SKDIACODE) == null
                  ? void 0
                  : de.toLowerCase().includes(C);
              default:
                return !1;
            }
          });
        p(M.slice(0, 10));
      },
      we = (v, w) => {
        switch ((d(v), v)) {
          case "code":
            x(w);
            break;
          case "name":
            h(w);
            break;
          case "chineseName":
            j(w);
            break;
          case "skdiacode":
            D(w);
            break;
        }
        ue(v, w);
      },
      b = (v) => {
        P(v.GUID),
          T(v),
          x(v.CODE || ""),
          h(v.NAME || ""),
          j(v.CHT_NAME || ""),
          D(v.SKDIACODE || ""),
          d(null),
          p([]);
      },
      N = () => {
        i(""), x(""), h(""), j(""), D(""), P(""), T(null), d(null), p([]), t();
      },
      U = async () => {
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
          if (k && k.BARCODE2)
            try {
              const C = JSON.parse(k.BARCODE2);
              Array.isArray(C)
                ? (v = [...C])
                : typeof C == "string" && (v = [C]);
            } catch {
              console.warn("解析 BARCODE2 失敗，使用原始值:", k.BARCODE2),
                k.BARCODE2 && (v = [k.BARCODE2]);
            }
          v.includes(a.trim()) || v.push(a.trim()),
            console.log("📋 處理後的 BARCODE2 陣列:", v);
          const w = await ke.addMedClouds(
            a.trim(),
            c.trim(),
            JSON.stringify(v),
            k.BARCODE
          );
          w.Code === 200
            ? (s("條碼建立成功", "success"), N())
            : s(w.Result || "建立條碼失敗", "error");
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
                    onClick: N,
                    className:
                      "p-2 hover:bg-gray-100 rounded-lg transition-colors",
                    disabled: H,
                    children: r.jsx(Xe, { className: "w-6 h-6 text-gray-600" }),
                  }),
                ],
              }),
              r.jsx("div", {
                className: "flex-1 overflow-y-auto p-6",
                children: r.jsxs("div", {
                  className: "space-y-4",
                  ref: ee,
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
                          disabled: H,
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
                                  onClick: () => b(v),
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
                          disabled: H,
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
                                  onClick: () => b(v),
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
                          disabled: H,
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
                                  onClick: () => b(v),
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
                          disabled: H,
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
                                  onClick: () => b(v),
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
                      onClick: N,
                      disabled: H,
                      className:
                        "px-6 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                      children: "取消",
                    }),
                    r.jsx("button", {
                      onClick: U,
                      disabled: H || !c.trim(),
                      className:
                        "px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                      children: H ? "建立中..." : "確認建立",
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
          h.forEach((D) => {
            const R = l(D.gird_position || "0,0");
            S[`${R.row},${R.col}`] = D;
          }),
          r.jsx("table", {
            className: "w-full h-full max-w-full table-fixed",
            style: { borderCollapse: "separate", borderSpacing: "0px" },
            children: r.jsx("tbody", {
              children: Array.from({ length: m + 1 }, (D, R) =>
                r.jsx(
                  "tr",
                  {
                    children: Array.from({ length: j + 1 }, (d, u) => {
                      const p = `${R},${u}`,
                        _ = S[p];
                      return _
                        ? r.jsx(
                            "td",
                            {
                              className:
                                "align-top bg-transparent overflow-hidden",
                              style: {
                                width: `${100 / (j + 1)}%`,
                                maxWidth: `${100 / (j + 1)}%`,
                              },
                              children: c(_),
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
                D = S.length;
              return (
                Math.max(...S.map((R) => j[R].length)),
                r.jsx("div", {
                  className: "flex h-full w-full overflow-hidden gap-1",
                  children: S.map((R) => {
                    const d = j[R].sort((P, k) => k._depth - P._depth),
                      u = D > 0 ? 100 / D : 100,
                      p = d.length,
                      _ = p > 0 ? 100 / p : 100;
                    return r.jsx(
                      "div",
                      {
                        className: "flex flex-col h-full",
                        style: { width: `${u}%` },
                        children: d.map((P, k) => {
                          let T = 0;
                          P.qty &&
                            P.qty.forEach((we) => {
                              T += +we;
                            });
                          const H = t && (P.code == t || P.material_no == t),
                            X = n.includes(P.code) || n.includes(P.material_no),
                            ee = o(),
                            ue = k === p - 1;
                          return r.jsxs(
                            "div",
                            {
                              className: `border-2 rounded-lg border-gray-300 p-2 flex flex-col text-gray-800 justify-center items-center transition-colors cursor-pointer min-w-0 overflow-hidden ${
                                ue ? "" : "mb-1"
                              } ${
                                X
                                  ? "highlight-breathe-red"
                                  : H
                                  ? `highlight-breathe-${ee}`
                                  : ""
                              }`,
                              style: {
                                height: `calc(${_}% - ${
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
                            P.GUID || k
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
              const m = t && h.med_info.some((D) => D.code == t),
                j = h.med_info.some((D) => n.includes(D.code)),
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
      [D, R] = f.useState(!1),
      [d, u] = f.useState(""),
      [p, _] = f.useState(""),
      [P, k] = f.useState([]),
      [T, H] = f.useState([]),
      [X, ee] = f.useState([]),
      [ue, we] = f.useState(!1),
      [b, N] = f.useState(!1),
      U = f.useRef(null),
      v = f.useRef(null),
      w = f.useRef(null),
      C = f.useRef(null);
    f.useEffect(() => {
      if (e && s) {
        const I = s.issuedQuantity || s.requestedQuantity || "0";
        a(I), c(I), g(null), m(null), S(!1);
        const E = localStorage.getItem("medMap_setting");
        if (E)
          try {
            const W = JSON.parse(E);
            u(W.default_person || ""), _(W.default_person_id || "");
          } catch (W) {
            console.error("讀取設定失敗:", W), u(""), _("");
          }
        else u(""), _("");
        M();
      }
    }, [e, s]),
      f.useEffect(() => {
        const I = (E) => {
          w.current &&
            !w.current.contains(E.target) &&
            U.current &&
            !U.current.contains(E.target) &&
            we(!1),
            C.current &&
              !C.current.contains(E.target) &&
              v.current &&
              !v.current.contains(E.target) &&
              N(!1);
        };
        return (
          document.addEventListener("mousedown", I),
          () => document.removeEventListener("mousedown", I)
        );
      }, []);
    const M = async () => {
        try {
          const I = await ke.getAllStaffInfo();
          I.Code === 200 && I.Data && k(I.Data);
        } catch (I) {
          console.error("獲取人員資料失敗:", I);
        }
      },
      oe = (I) => {
        if ((u(I), I.trim() === "")) {
          H([]), we(!1);
          return;
        }
        const E = P.filter(
          (W) => W.name && W.name.toLowerCase().includes(I.toLowerCase())
        );
        H(E), we(E.length > 0);
      },
      B = (I) => {
        if ((_(I), I.trim() === "")) {
          ee([]), N(!1);
          return;
        }
        const E = P.filter(
          (W) => W.ID && W.ID.toLowerCase().includes(I.toLowerCase())
        );
        ee(E), N(E.length > 0);
      },
      K = (I) => {
        u(I.name), _(I.ID), we(!1);
      },
      Ne = (I) => {
        u(I.name), _(I.ID), N(!1);
      };
    if (!e || !s) return null;
    const de = (I) => {
        if (j) a(I), c(I), S(!1);
        else {
          const E = l === "0" ? I : l + I;
          a(E), c(E);
        }
      },
      z = (I) => {
        x && h !== null && !j && he(), m(i), g(I), S(!0);
      },
      he = () => {
        if (x === null || h === null) return;
        const I = parseFloat(h),
          E = parseFloat(i);
        let W = 0;
        switch (x) {
          case "+":
            W = I + E;
            break;
          case "-":
            W = I - E;
            break;
          case "×":
            W = I * E;
            break;
          case "÷":
            W = E !== 0 ? I / E : 0;
            break;
          default:
            return;
        }
        const L = W.toString();
        a(L), c(L), g(null), m(null), S(!0);
      },
      G = () => {
        he();
      },
      ve = () => {
        if (j) a("0."), c("0."), S(!1);
        else if (!l.includes(".")) {
          const I = l + ".";
          a(I), c(I);
        }
      },
      ge = () => {
        a("0"), c("0"), g(null), m(null), S(!1);
      },
      fe = () => {
        const I = new Date(),
          E = I.getFullYear(),
          W = String(I.getMonth() + 1).padStart(2, "0"),
          L = String(I.getDate()).padStart(2, "0"),
          re = String(I.getHours()).padStart(2, "0"),
          ae = String(I.getMinutes()).padStart(2, "0"),
          $ = String(I.getSeconds()).padStart(2, "0");
        return `${E}-${W}-${L}T${re}:${ae}:${$}`;
      },
      Ae = async () => {
        if (!s) return;
        if (!d.trim()) {
          alert("請輸入核撥人員名稱");
          return;
        }
        const I = n === "requisition" ? "申領" : "撥補";
        if (
          window.confirm(`確認核撥資訊：

藥品名稱：${s.name}
實際撥發量：${l}
核撥人員：${d}${p ? ` (${p})` : ""}

是否確認${I}？`)
        ) {
          R(!0);
          try {
            const W = fe();
            if (n === "requisition") {
              const L = await ke.updateRequisitionActualQuantity(s.GUID, l);
              if (L.Code !== 200) {
                alert(`更新實際撥發量失敗：${L.Message || "未知錯誤"}`), R(!1);
                return;
              }
              const re = {
                ...s,
                actualQuantity: l,
                notice: "False",
                state: "已過帳",
                issuingPerson: d,
                issueTime: W,
              };
              console.log("申領request", re);
              const ae = await ke.updateRequisitionByGuid(re);
              if (ae.Code !== 200) {
                alert(`申領過帳失敗：${ae.Message || "未知錯誤"}`), R(!1);
                return;
              }
              console.log("✅ 申領核撥成功:", {
                GUID: s.GUID,
                name: s.name,
                actualQuantity: l,
                issuingPerson: d,
                issueTime: W,
              });
            } else {
              const L = await ke.updateDistributionActualQuantity(s.GUID, l);
              if (L.Code !== 200) {
                alert(`更新實際撥發量失敗：${L.Message || "未知錯誤"}`), R(!1);
                return;
              }
              const re = {
                ...s,
                actualQuantity: l,
                notice: "False",
                state: "已過帳",
                issuer: d,
                issuanceTime: W,
              };
              console.log("撥補request", re);
              const ae = await ke.updateDistributionByGuid(re);
              if (ae.Code !== 200) {
                alert(`撥補過帳失敗：${ae.Message || "未知錯誤"}`), R(!1);
                return;
              }
              console.log("✅ 撥補核撥成功:", {
                GUID: s.GUID,
                name: s.name,
                actualQuantity: l,
                issuer: d,
                issuanceTime: W,
              });
            }
            o && (await o()), alert(`${I}核撥成功！`), t();
          } catch (W) {
            console.error(`${I}核撥失敗:`, W),
              alert(`${I}核撥失敗，請稍後再試`);
          } finally {
            R(!1);
          }
        }
      },
      te = n === "requisition" ? s.requestedQuantity : s.issuedQuantity;
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
                                ref: U,
                                type: "text",
                                value: d,
                                onChange: (I) => oe(I.target.value),
                                onFocus: () => {
                                  d.trim() && oe(d);
                                },
                                placeholder: "人員名稱",
                                className:
                                  "w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                              }),
                              ue &&
                                r.jsx("div", {
                                  ref: w,
                                  className:
                                    "absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-40 overflow-y-auto",
                                  children: T.map((I, E) =>
                                    r.jsxs(
                                      "div",
                                      {
                                        onClick: () => K(I),
                                        className:
                                          "px-3 py-2 hover:bg-blue-50 cursor-pointer transition-colors",
                                        children: [
                                          r.jsx("div", {
                                            className: "text-xs text-gray-500",
                                            children: I.ID,
                                          }),
                                          r.jsx("div", {
                                            className:
                                              "font-medium text-gray-900 text-sm",
                                            children: I.name,
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
                            className: "relative",
                            children: [
                              r.jsx("input", {
                                ref: v,
                                type: "text",
                                value: p,
                                onChange: (I) => B(I.target.value),
                                onFocus: () => {
                                  p.trim() && B(p);
                                },
                                placeholder: "人員 ID",
                                className:
                                  "w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                              }),
                              b &&
                                r.jsx("div", {
                                  ref: C,
                                  className:
                                    "absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-40 overflow-y-auto",
                                  children: X.map((I, E) =>
                                    r.jsxs(
                                      "div",
                                      {
                                        onClick: () => Ne(I),
                                        className:
                                          "px-3 py-2 hover:bg-blue-50 cursor-pointer transition-colors",
                                        children: [
                                          r.jsx("div", {
                                            className:
                                              "font-medium text-gray-900 text-sm",
                                            children: I.ID,
                                          }),
                                          r.jsx("div", {
                                            className: "text-xs text-gray-500",
                                            children: I.name,
                                          }),
                                        ],
                                      },
                                      E
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
                            children: te || "-",
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
                        onClick: ve,
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: ".",
                      }),
                      r.jsx("button", {
                        onClick: G,
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
                  onClick: ge,
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
                  onClick: Ae,
                  disabled: D,
                  className:
                    "px-6 py-2.5 font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                  children: D ? "處理中..." : "核撥",
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
      [D, R] = f.useState(null),
      [d, u] = f.useState("requisition"),
      [p, _] = f.useState(!1),
      [P, k] = f.useState(!1);
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
        var N;
        if (n && !P) {
          if (!n.serverName || !n.serverType) {
            alert("無法取得藥品位置資訊");
            return;
          }
          k(!0);
          try {
            const U = localStorage.getItem("medMap_setting");
            let v = "255,0,0",
              w = "1",
              C = 60;
            if (U)
              try {
                const M = JSON.parse(U);
                (v =
                  {
                    blue: "255,0,0",
                    green: "0,255,0",
                    red: "0,0,255",
                    yellow: "0,255,255",
                    purple: "255,0,255",
                    cyan: "255,255,0",
                  }[M.light_color] || "255,0,0"),
                  (w =
                    ((N = M.brightness) == null ? void 0 : N.toString()) ||
                    "1"),
                  (C = M.light_sec || 60);
              } catch (M) {
                console.error("讀取設定失敗:", M);
              }
            if (p) await ps.turnOffAllLights(), _(!1), a(null);
            else {
              const M = [
                {
                  serverName: n.serverName,
                  serverType: n.serverType,
                  medicineCode: n.code,
                },
              ];
              await ps.startLighting(M, v, w, C * 1e3, () => {
                _(!1), a(null);
              }),
                _(!0),
                a(n.code);
            }
          } catch (U) {
            console.error("亮燈操作失敗:", U);
          } finally {
            k(!1);
          }
        }
      },
      H = async (N) => {
        const U = N.notice === "True" ? "False" : "True";
        m(N.GUID);
        const v = [...i],
          w = v.findIndex((C) => C.GUID === N.GUID);
        if (w === -1) {
          m(null);
          return;
        }
        (v[w] = { ...N, notice: U }), c(v);
        try {
          const C = await ke.updateRequisitionNotice(N.GUID, U);
          C.Code !== 200
            ? ((v[w] = { ...N, notice: N.notice }),
              c(v),
              console.error("更新申領通知狀態失敗:", C))
            : l && l();
        } catch (C) {
          (v[w] = { ...N, notice: N.notice }),
            c(v),
            console.error("更新申領通知狀態失敗:", C);
        } finally {
          m(null);
        }
      },
      X = async (N) => {
        const U = N.notice === "True" ? "False" : "True";
        m(N.GUID);
        const v = [...x],
          w = v.findIndex((C) => C.GUID === N.GUID);
        if (w === -1) {
          m(null);
          return;
        }
        (v[w] = { ...N, notice: U }), g(v);
        try {
          const C = await ke.updateDistributionNotice(N.GUID, U);
          C.Code !== 200
            ? ((v[w] = { ...N, notice: N.notice }),
              g(v),
              console.error("更新撥補通知狀態失敗:", C))
            : l && l();
        } catch (C) {
          (v[w] = { ...N, notice: N.notice }),
            g(v),
            console.error("更新撥補通知狀態失敗:", C);
        } finally {
          m(null);
        }
      };
    if (!e || !n) return null;
    const ee = i.filter((N) => N.state === "等待過帳"),
      ue = x.filter((N) => N.state === "等待過帳"),
      we = ee.length === 0 && ue.length === 0,
      b = (N) => {
        if (!N || N === "1/01/01 00:00:00" || N === "0001-01-01T00:00:00")
          return "-";
        try {
          const U = new Date(N);
          if (isNaN(U.getTime())) return N;
          const v = U.getFullYear(),
            w = String(U.getMonth() + 1).padStart(2, "0"),
            C = String(U.getDate()).padStart(2, "0"),
            M = String(U.getHours()).padStart(2, "0"),
            oe = String(U.getMinutes()).padStart(2, "0");
          return `${v}/${w}/${C} ${M}:${oe}`;
        } catch {
          return N;
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
                      ee.map((N, U) =>
                        r.jsxs(
                          "div",
                          {
                            className:
                              "border border-blue-200 rounded-lg p-3 bg-blue-50 hover:shadow-md transition-shadow",
                            onClick: () => {
                              u("requisition"), R(N), S(!0);
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
                                          v.stopPropagation(), H(N);
                                        },
                                        disabled: h === N.GUID,
                                        className: `p-2 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110 ${
                                          N.notice === "True"
                                            ? "bg-green-500 text-white hover:bg-green-600"
                                            : "bg-gray-300 text-gray-600 hover:bg-gray-400"
                                        }`,
                                        title:
                                          N.notice === "True"
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
                                      N.actionType.includes("緊急")
                                        ? "bg-green-600"
                                        : "bg-blue-600"
                                    }`,
                                    children: N.actionType,
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
                                        children: N.requestingUnit || "-",
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
                                        children: N.requestingPerson || "-",
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
                                        children: N.requestedQuantity || "-",
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
                                        children: b(N.requestTime),
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
                      ue.map((N, U) =>
                        r.jsxs(
                          "div",
                          {
                            className:
                              "border border-yellow-200 rounded-lg p-3 bg-yellow-50 hover:shadow-md transition-shadow",
                            onClick: () => {
                              u("distribution"), R(N), S(!0);
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
                                      v.stopPropagation(), X(N);
                                    },
                                    disabled: h === N.GUID,
                                    className: `p-2 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110 ${
                                      N.notice === "True"
                                        ? "bg-green-500 text-white hover:bg-green-600"
                                        : "bg-gray-300 text-gray-600 hover:bg-gray-400"
                                    }`,
                                    title:
                                      N.notice === "True"
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
                                        children: N.sourceStoreType || "-",
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
                                        children: N.destinationStoreType || "-",
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
                                        children: N.LOT || "-",
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
                                        children: N.VAL || "-",
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
                                        children: N.issuedQuantity || "-",
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
                                        children: N.reportName || "-",
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
                                        children: b(N.addedTime),
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
        r.jsx(Uh, {
          isOpen: j,
          onClose: () => S(!1),
          type: d,
          data: D,
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
      [D, R] = f.useState(!1),
      [d, u] = f.useState(null),
      p = f.useRef(null),
      _ = f.useRef(null),
      P = f.useCallback(
        (b) => {
          if (!a || !b) return null;
          const N = (U) => {
            for (const v of U) {
              if (v.GUID === b) return v;
              if (v.contents && Array.isArray(v.contents)) {
                const w = N(v.contents);
                if (w) return w;
              }
            }
            return null;
          };
          for (const U of a) {
            if (U.GUID === b) return U;
            if (U.contents && Array.isArray(U.contents)) {
              const v = N(U.contents);
              if (v) return v;
            }
          }
          return null;
        },
        [a]
      ),
      k = n ? P(n.GUID) || n : null,
      T = () => {
        try {
          const N = localStorage.getItem("medMap_setting");
          if (N) {
            const v = JSON.parse(N).light_sec;
            if (v != null && v !== "") {
              const w = Number(v);
              if (!isNaN(w) && w > 0) return w * 1e3;
            }
          }
        } catch (N) {
          console.error("讀取亮燈設定失敗:", N);
        }
        return 6e4;
      },
      H = () => {
        try {
          const b = localStorage.getItem("medMap_setting");
          if (b) return JSON.parse(b).light_color || "red";
        } catch (b) {
          console.error("讀取高亮顏色設定失敗:", b);
        }
        return "red";
      },
      X = f.useCallback(async () => {
        try {
          const b = new Date(),
            N = `${b.getFullYear()}-${String(b.getMonth() + 1).padStart(
              2,
              "0"
            )}-${String(b.getDate()).padStart(2, "0")} 00:00:00`,
            U = `${b.getFullYear()}-${String(b.getMonth() + 1).padStart(
              2,
              "0"
            )}-${String(b.getDate()).padStart(2, "0")} 23:59:59`,
            [v, w] = await Promise.all([
              ke.getRequisitionByTime(N, U),
              ke.getDistributionByTime(N, U),
            ]),
            C = [];
          if (v.Code === 200 && v.Data) {
            const M = v.Data.filter((B) => {
              var K;
              return (K = k == null ? void 0 : k.med_list) == null
                ? void 0
                : K.some((Ne) => Ne.code === B.code);
            });
            m(M),
              M.filter(
                (B) => B.state === "等待過帳" && B.notice === "True"
              ).forEach((B) => {
                B.code && C.push(B.code);
              });
          }
          if (w.Code === 200 && w.Data) {
            const M = w.Data.filter((B) => {
              var K;
              return (K = k == null ? void 0 : k.med_list) == null
                ? void 0
                : K.some((Ne) => Ne.code === B.code);
            });
            S(M),
              M.filter(
                (B) => B.state === "等待過帳" && B.notice === "True"
              ).forEach((B) => {
                B.code && (C.includes(B.code) || C.push(B.code));
              });
          }
          g(C);
        } catch (b) {
          console.error("檢查申領撥補資料失敗:", b);
        }
      }, [k]);
    f.useEffect(
      () => (
        e
          ? (X(),
            _.current && clearInterval(_.current),
            (_.current = setInterval(() => {
              X();
            }, 1e4)))
          : _.current && (clearInterval(_.current), (_.current = null)),
        () => {
          _.current && (clearInterval(_.current), (_.current = null));
        }
      ),
      [e, X]
    ),
      f.useEffect(() => {
        var b;
        k &&
          console.log("🔄 ContainerDetailModal: currentContainer updated", {
            GUID: k.GUID,
            name: k.name,
            medListCount: ((b = k.med_list) == null ? void 0 : b.length) || 0,
          });
      }, [k]),
      f.useEffect(() => {
        if (
          (console.log("容器資料：", k),
          console.log("🔍 ContainerDetailModal - 亮燈狀態檢查:", {
            isOpen: e,
            highlightedMedicineCode: l,
            containerName: k == null ? void 0 : k.name,
          }),
          e && l)
        ) {
          c(!0);
          const b = T();
          console.log("✅ ContainerDetailModal - 啟動亮燈:", {
            medicineCode: l,
            duration: b / 1e3 + "秒",
          }),
            p.current && clearTimeout(p.current),
            (p.current = setTimeout(() => {
              console.log("⏱️ ContainerDetailModal - 亮燈時間結束"),
                c(!1),
                (p.current = null);
            }, b));
        } else c(!1);
        return () => {
          p.current && clearTimeout(p.current);
        };
      }, [e, l]);
    const ee = (b) => {
      var v, w;
      h.filter((C) => C.code === b.code), j.filter((C) => C.code === b.code);
      const N = (C) => {
          for (const M of C) {
            if (M.type === "store_shelves" && M.medMapStock) {
              const oe = M.medMapStock.find((B) => B.code === b.code);
              if (oe) return { stock: oe, shelf: M };
            }
            if (M.contents && M.contents.length > 0) {
              const oe = N(M.contents);
              if (oe) return oe;
            }
          }
          return null;
        },
        U = n ? N([n]) : null;
      u({
        code: b.code,
        name: b.name,
        cht_name: b.cht_name,
        skdiacode: b.SKDIACODE || b.skdiacode,
        serverName:
          (v = U == null ? void 0 : U.shelf) == null ? void 0 : v.serverName,
        serverType:
          (w = U == null ? void 0 : U.shelf) == null ? void 0 : w.serverType,
      }),
        R(!0);
    };
    if (!e) return null;
    const ue = () => {
        if (!(k != null && k.med_list) || k.med_list.length === 0)
          return r.jsx("div", {
            className: "flex items-center justify-center h-full text-gray-400",
            children: r.jsx("p", { children: "無藥品資料" }),
          });
        const b = [...k.med_list].sort((N, U) => N.code.localeCompare(U.code));
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
                children: b.map((N, U) => {
                  const v = i && l && N.code == l,
                    w = x.includes(N.code);
                  let C = 0;
                  N.qty.forEach((oe) => {
                    C += +oe;
                  }),
                    U === 0 &&
                      console.log("🧪 ContainerDetailModal - 第一筆藥品檢查:", {
                        medCode: N.code,
                        highlightedCode: l,
                        isHighlightActive: i,
                        isHighlighted: v,
                        isPendingRequisition: w,
                        comparison: `${N.code} == ${l} = ${N.code == l}`,
                      });
                  const M = H();
                  return r.jsxs(
                    "tr",
                    {
                      className: `transition-colors cursor-pointer ${
                        w
                          ? "highlight-breathe-red"
                          : v
                          ? `highlight-breathe-${M}`
                          : "hover:bg-gray-50"
                      }`,
                      onClick: () => ee(N),
                      children: [
                        r.jsx("td", {
                          className: "border border-gray-300 px-1 py-2 text-sm",
                          children: N.code || "-",
                        }),
                        r.jsx("td", {
                          className: "border border-gray-300 px-1 py-2 text-sm",
                          children: N.SKDIACODE || "-",
                        }),
                        r.jsx("td", {
                          className: "border border-gray-300 px-1 py-2 text-sm",
                          children: N.name || "-",
                        }),
                        r.jsx("td", {
                          className:
                            "border border-gray-300 px-1 py-2 text-sm text-right",
                          children: C || "-",
                        }),
                        r.jsx("td", {
                          className:
                            "border border-gray-300 px-1 py-2 text-sm text-center",
                          children: N.stockCol || "-",
                        }),
                        r.jsx("td", {
                          className:
                            "border border-gray-300 px-1 py-2 text-sm text-center",
                          children: N.stockRow || "-",
                        }),
                        r.jsx("td", {
                          className:
                            "border border-gray-300 px-1 py-2 text-sm text-center",
                          children: N.stock || "-",
                        }),
                      ],
                    },
                    U
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
              container: k,
              highlightedMedicineCode: i ? l : null,
              pendingRequisitionCodes: x,
              onMedicineClick: ee,
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
          isOpen: D,
          onClose: () => R(!1),
          medicineInfo: d,
          requisitions: d ? h.filter((b) => b.code === d.code) : [],
          distributions: d ? j.filter((b) => b.code === d.code) : [],
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
      j = async (D) => {
        if ((D.preventDefault(), !s.trim() || !l.trim())) {
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
      S = (D) => {
        D.key === "Enter" && !x && j(D);
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
                              onChange: (D) => o(D.target.value),
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
                                  onChange: (D) => a(D.target.value),
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
    closeAddDepartmentModal: D,
    qrCodeScannerModalOpen: R,
    qrCodeScannerMode: d,
    closeQRCodeScannerModal: u,
    addBarcodeModalOpen: p,
    closeAddBarcodeModal: _,
    initialBarcodeValue: P,
    containerDetailModalOpen: k,
    closeContainerDetailModal: T,
    selectedContainerForDetail: H,
    setMedicineList: X,
    setIsLoadingMedicines: ee,
    showNotification: ue,
  } = tt();
  f.useEffect(() => {
    (() => {
      try {
        const v = sessionStorage.getItem("user_session");
        if (v) {
          const w = JSON.parse(v);
          w.GUID && w.ID && w.Name
            ? (o(w), s(!0))
            : sessionStorage.removeItem("user_session");
        }
      } catch (v) {
        console.error("Error checking session:", v),
          sessionStorage.removeItem("user_session");
      }
    })();
  }, [s, o]),
    f.useEffect(() => {
      let U = !0;
      return (
        (async () => {
          if (n) {
            ee(!0);
            try {
              console.log("開始載入藥品資料...");
              const w = await ke.getMedicineCloud();
              if ((console.log("藥品資料 API 回應:", w), !U)) return;
              w.Code === 200 && w.Data
                ? (X(w.Data),
                  console.log(`✅ 成功載入 ${w.Data.length} 筆藥品資料`),
                  ue(`載入 ${w.Data.length} 筆藥品資料`, "success"))
                : (console.warn("API 回應異常:", w),
                  X([]),
                  ue("藥品資料載入異常，請稍後重試", "error"));
            } catch (w) {
              if (!U) return;
              console.error("載入藥品資料失敗:", w),
                X([]),
                ue("無法連線到藥品資料庫，部分功能可能無法使用", "error");
            } finally {
              U && ee(!1);
            }
          }
        })(),
        () => {
          U = !1;
        }
      );
    }, [n]);
  const we = (U) => {
      o(U), s(!0);
    },
    b = mo.useRef(null),
    N = (U, v) => {
      if (
        (console.log("📸 QR掃描成功 - handleQRScanSuccess 被調用:", {
          barcode: U,
          medicineData: v,
          mode: d,
        }),
        console.log("📸 當前 mode:", d),
        console.log("📸 當前 viewMode:", t),
        console.log("📸 drugCanvasRef.current:", b.current),
        d === "track_Drug_mode")
      ) {
        if ((console.log("✅ 進入 track_Drug_mode 分支"), t !== "medicine")) {
          console.warn("⚠️ 當前不在藥品地圖視圖，無法定位藥品"),
            ue("請切換到藥品地圖視圖後再使用此功能", "error");
          return;
        }
        b.current
          ? (console.log("✅ drugCanvasRef.current 存在"),
            console.log(
              "📸 drugCanvasRef.current.locateDrug 類型:",
              typeof b.current.locateDrug
            ),
            typeof b.current.locateDrug == "function"
              ? (console.log("✅ 呼叫 locateDrug 函數"),
                b.current.locateDrug(v))
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
                t === "department" ? r.jsx(Sh, {}) : r.jsx(ef, { ref: b }),
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
          r.jsx(Ah, { isOpen: S, onClose: D }),
          r.jsx(tl, { isOpen: R, onClose: u, mode: d, onScanSuccess: N }),
          r.jsx(Oh, { isOpen: p, onClose: _, initialBarcode: P }),
          r.jsx(zh, { isOpen: k, onClose: T, container: H }),
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
