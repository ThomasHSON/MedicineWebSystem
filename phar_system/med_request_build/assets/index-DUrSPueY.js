function If(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const s = Object.getOwnPropertyDescriptor(r, l);
          s &&
            Object.defineProperty(
              e,
              l,
              s.get ? s : { enumerable: !0, get: () => r[l] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const s of l)
      if (s.type === "childList")
        for (const i of s.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
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
function Af(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Yu = { exports: {} },
  ks = {},
  Gu = { exports: {} },
  B = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ol = Symbol.for("react.element"),
  Uf = Symbol.for("react.portal"),
  Hf = Symbol.for("react.fragment"),
  Wf = Symbol.for("react.strict_mode"),
  qf = Symbol.for("react.profiler"),
  Bf = Symbol.for("react.provider"),
  Vf = Symbol.for("react.context"),
  Qf = Symbol.for("react.forward_ref"),
  Yf = Symbol.for("react.suspense"),
  Gf = Symbol.for("react.memo"),
  Kf = Symbol.for("react.lazy"),
  Pa = Symbol.iterator;
function Xf(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Pa && e[Pa]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ku = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Xu = Object.assign,
  Ju = {};
function ir(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ju),
    (this.updater = n || Ku);
}
ir.prototype.isReactComponent = {};
ir.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
ir.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Zu() {}
Zu.prototype = ir.prototype;
function Eo(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ju),
    (this.updater = n || Ku);
}
var Co = (Eo.prototype = new Zu());
Co.constructor = Eo;
Xu(Co, ir.prototype);
Co.isPureReactComponent = !0;
var Ta = Array.isArray,
  ec = Object.prototype.hasOwnProperty,
  Po = { current: null },
  tc = { key: !0, ref: !0, __self: !0, __source: !0 };
function nc(e, t, n) {
  var r,
    l = {},
    s = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      ec.call(t, r) && !tc.hasOwnProperty(r) && (l[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) l.children = n;
  else if (1 < a) {
    for (var u = Array(a), c = 0; c < a; c++) u[c] = arguments[c + 2];
    l.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) l[r] === void 0 && (l[r] = a[r]);
  return {
    $$typeof: ol,
    type: e,
    key: s,
    ref: i,
    props: l,
    _owner: Po.current,
  };
}
function Jf(e, t) {
  return {
    $$typeof: ol,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function To(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ol;
}
function Zf(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Da = /\/+/g;
function Vs(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Zf("" + e.key)
    : t.toString(36);
}
function Ll(e, t, n, r, l) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (s) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ol:
          case Uf:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + Vs(i, 0) : r),
      Ta(l)
        ? ((n = ""),
          e != null && (n = e.replace(Da, "$&/") + "/"),
          Ll(l, t, n, "", function (c) {
            return c;
          }))
        : l != null &&
          (To(l) &&
            (l = Jf(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Da, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), Ta(e)))
    for (var a = 0; a < e.length; a++) {
      s = e[a];
      var u = r + Vs(s, a);
      i += Ll(s, t, n, u, l);
    }
  else if (((u = Xf(e)), typeof u == "function"))
    for (e = u.call(e), a = 0; !(s = e.next()).done; )
      (s = s.value), (u = r + Vs(s, a++)), (i += Ll(s, t, n, u, l));
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
  return i;
}
function hl(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Ll(e, r, "", "", function (s) {
      return t.call(n, s, l++);
    }),
    r
  );
}
function ep(e) {
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
var Le = { current: null },
  $l = { transition: null },
  tp = {
    ReactCurrentDispatcher: Le,
    ReactCurrentBatchConfig: $l,
    ReactCurrentOwner: Po,
  };
function rc() {
  throw Error("act(...) is not supported in production builds of React.");
}
B.Children = {
  map: hl,
  forEach: function (e, t, n) {
    hl(
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
      hl(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      hl(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!To(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
B.Component = ir;
B.Fragment = Hf;
B.Profiler = qf;
B.PureComponent = Eo;
B.StrictMode = Wf;
B.Suspense = Yf;
B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tp;
B.act = rc;
B.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Xu({}, e.props),
    l = e.key,
    s = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (i = Po.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (u in t)
      ec.call(t, u) &&
        !tc.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    a = Array(u);
    for (var c = 0; c < u; c++) a[c] = arguments[c + 2];
    r.children = a;
  }
  return { $$typeof: ol, type: e.type, key: l, ref: s, props: r, _owner: i };
};
B.createContext = function (e) {
  return (
    (e = {
      $$typeof: Vf,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Bf, _context: e }),
    (e.Consumer = e)
  );
};
B.createElement = nc;
B.createFactory = function (e) {
  var t = nc.bind(null, e);
  return (t.type = e), t;
};
B.createRef = function () {
  return { current: null };
};
B.forwardRef = function (e) {
  return { $$typeof: Qf, render: e };
};
B.isValidElement = To;
B.lazy = function (e) {
  return { $$typeof: Kf, _payload: { _status: -1, _result: e }, _init: ep };
};
B.memo = function (e, t) {
  return { $$typeof: Gf, type: e, compare: t === void 0 ? null : t };
};
B.startTransition = function (e) {
  var t = $l.transition;
  $l.transition = {};
  try {
    e();
  } finally {
    $l.transition = t;
  }
};
B.unstable_act = rc;
B.useCallback = function (e, t) {
  return Le.current.useCallback(e, t);
};
B.useContext = function (e) {
  return Le.current.useContext(e);
};
B.useDebugValue = function () {};
B.useDeferredValue = function (e) {
  return Le.current.useDeferredValue(e);
};
B.useEffect = function (e, t) {
  return Le.current.useEffect(e, t);
};
B.useId = function () {
  return Le.current.useId();
};
B.useImperativeHandle = function (e, t, n) {
  return Le.current.useImperativeHandle(e, t, n);
};
B.useInsertionEffect = function (e, t) {
  return Le.current.useInsertionEffect(e, t);
};
B.useLayoutEffect = function (e, t) {
  return Le.current.useLayoutEffect(e, t);
};
B.useMemo = function (e, t) {
  return Le.current.useMemo(e, t);
};
B.useReducer = function (e, t, n) {
  return Le.current.useReducer(e, t, n);
};
B.useRef = function (e) {
  return Le.current.useRef(e);
};
B.useState = function (e) {
  return Le.current.useState(e);
};
B.useSyncExternalStore = function (e, t, n) {
  return Le.current.useSyncExternalStore(e, t, n);
};
B.useTransition = function () {
  return Le.current.useTransition();
};
B.version = "18.3.1";
Gu.exports = B;
var p = Gu.exports;
const A = Af(p),
  Ur = If({ __proto__: null, default: A }, [p]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var np = p,
  rp = Symbol.for("react.element"),
  lp = Symbol.for("react.fragment"),
  sp = Object.prototype.hasOwnProperty,
  ip = np.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  op = { key: !0, ref: !0, __self: !0, __source: !0 };
function lc(e, t, n) {
  var r,
    l = {},
    s = null,
    i = null;
  n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) sp.call(t, r) && !op.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: rp,
    type: e,
    key: s,
    ref: i,
    props: l,
    _owner: ip.current,
  };
}
ks.Fragment = lp;
ks.jsx = lc;
ks.jsxs = lc;
Yu.exports = ks;
var o = Yu.exports,
  sc = { exports: {} },
  Ye = {},
  ic = { exports: {} },
  oc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(D, $) {
    var F = D.length;
    D.push($);
    e: for (; 0 < F; ) {
      var U = (F - 1) >>> 1,
        z = D[U];
      if (0 < l(z, $)) (D[U] = $), (D[F] = z), (F = U);
      else break e;
    }
  }
  function n(D) {
    return D.length === 0 ? null : D[0];
  }
  function r(D) {
    if (D.length === 0) return null;
    var $ = D[0],
      F = D.pop();
    if (F !== $) {
      D[0] = F;
      e: for (var U = 0, z = D.length, fe = z >>> 1; U < fe; ) {
        var te = 2 * (U + 1) - 1,
          He = D[te],
          E = te + 1,
          H = D[E];
        if (0 > l(He, F))
          E < z && 0 > l(H, He)
            ? ((D[U] = H), (D[E] = F), (U = E))
            : ((D[U] = He), (D[te] = F), (U = te));
        else if (E < z && 0 > l(H, F)) (D[U] = H), (D[E] = F), (U = E);
        else break e;
      }
    }
    return $;
  }
  function l(D, $) {
    var F = D.sortIndex - $.sortIndex;
    return F !== 0 ? F : D.id - $.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var i = Date,
      a = i.now();
    e.unstable_now = function () {
      return i.now() - a;
    };
  }
  var u = [],
    c = [],
    m = 1,
    f = null,
    v = 3,
    x = !1,
    w = !1,
    N = !1,
    b = typeof setTimeout == "function" ? setTimeout : null,
    g = typeof clearTimeout == "function" ? clearTimeout : null,
    d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(D) {
    for (var $ = n(c); $ !== null; ) {
      if ($.callback === null) r(c);
      else if ($.startTime <= D)
        r(c), ($.sortIndex = $.expirationTime), t(u, $);
      else break;
      $ = n(c);
    }
  }
  function y(D) {
    if (((N = !1), h(D), !w))
      if (n(u) !== null) (w = !0), V(S);
      else {
        var $ = n(c);
        $ !== null && G(y, $.startTime - D);
      }
  }
  function S(D, $) {
    (w = !1), N && ((N = !1), g(T), (T = -1)), (x = !0);
    var F = v;
    try {
      for (
        h($), f = n(u);
        f !== null && (!(f.expirationTime > $) || (D && !le()));

      ) {
        var U = f.callback;
        if (typeof U == "function") {
          (f.callback = null), (v = f.priorityLevel);
          var z = U(f.expirationTime <= $);
          ($ = e.unstable_now()),
            typeof z == "function" ? (f.callback = z) : f === n(u) && r(u),
            h($);
        } else r(u);
        f = n(u);
      }
      if (f !== null) var fe = !0;
      else {
        var te = n(c);
        te !== null && G(y, te.startTime - $), (fe = !1);
      }
      return fe;
    } finally {
      (f = null), (v = F), (x = !1);
    }
  }
  var k = !1,
    P = null,
    T = -1,
    R = 5,
    L = -1;
  function le() {
    return !(e.unstable_now() - L < R);
  }
  function Y() {
    if (P !== null) {
      var D = e.unstable_now();
      L = D;
      var $ = !0;
      try {
        $ = P(!0, D);
      } finally {
        $ ? q() : ((k = !1), (P = null));
      }
    } else k = !1;
  }
  var q;
  if (typeof d == "function")
    q = function () {
      d(Y);
    };
  else if (typeof MessageChannel < "u") {
    var X = new MessageChannel(),
      ee = X.port2;
    (X.port1.onmessage = Y),
      (q = function () {
        ee.postMessage(null);
      });
  } else
    q = function () {
      b(Y, 0);
    };
  function V(D) {
    (P = D), k || ((k = !0), q());
  }
  function G(D, $) {
    T = b(function () {
      D(e.unstable_now());
    }, $);
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
      w || x || ((w = !0), V(S));
    }),
    (e.unstable_forceFrameRate = function (D) {
      0 > D || 125 < D
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (R = 0 < D ? Math.floor(1e3 / D) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return v;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (D) {
      switch (v) {
        case 1:
        case 2:
        case 3:
          var $ = 3;
          break;
        default:
          $ = v;
      }
      var F = v;
      v = $;
      try {
        return D();
      } finally {
        v = F;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (D, $) {
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
      var F = v;
      v = D;
      try {
        return $();
      } finally {
        v = F;
      }
    }),
    (e.unstable_scheduleCallback = function (D, $, F) {
      var U = e.unstable_now();
      switch (
        (typeof F == "object" && F !== null
          ? ((F = F.delay), (F = typeof F == "number" && 0 < F ? U + F : U))
          : (F = U),
        D)
      ) {
        case 1:
          var z = -1;
          break;
        case 2:
          z = 250;
          break;
        case 5:
          z = 1073741823;
          break;
        case 4:
          z = 1e4;
          break;
        default:
          z = 5e3;
      }
      return (
        (z = F + z),
        (D = {
          id: m++,
          callback: $,
          priorityLevel: D,
          startTime: F,
          expirationTime: z,
          sortIndex: -1,
        }),
        F > U
          ? ((D.sortIndex = F),
            t(c, D),
            n(u) === null &&
              D === n(c) &&
              (N ? (g(T), (T = -1)) : (N = !0), G(y, F - U)))
          : ((D.sortIndex = z), t(u, D), w || x || ((w = !0), V(S))),
        D
      );
    }),
    (e.unstable_shouldYield = le),
    (e.unstable_wrapCallback = function (D) {
      var $ = v;
      return function () {
        var F = v;
        v = $;
        try {
          return D.apply(this, arguments);
        } finally {
          v = F;
        }
      };
    });
})(oc);
ic.exports = oc;
var ap = ic.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var up = p,
  Qe = ap;
function C(e) {
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
var ac = new Set(),
  Hr = {};
function Tn(e, t) {
  Zn(e, t), Zn(e + "Capture", t);
}
function Zn(e, t) {
  for (Hr[e] = t, e = 0; e < t.length; e++) ac.add(t[e]);
}
var Lt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  bi = Object.prototype.hasOwnProperty,
  cp =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Oa = {},
  Ma = {};
function dp(e) {
  return bi.call(Ma, e)
    ? !0
    : bi.call(Oa, e)
    ? !1
    : cp.test(e)
    ? (Ma[e] = !0)
    : ((Oa[e] = !0), !1);
}
function fp(e, t, n, r) {
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
function pp(e, t, n, r) {
  if (t === null || typeof t > "u" || fp(e, t, n, r)) return !0;
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
function $e(e, t, n, r, l, s, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = i);
}
var be = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    be[e] = new $e(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  be[t] = new $e(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  be[e] = new $e(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  be[e] = new $e(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    be[e] = new $e(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  be[e] = new $e(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  be[e] = new $e(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  be[e] = new $e(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  be[e] = new $e(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Do = /[\-:]([a-z])/g;
function Oo(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Do, Oo);
    be[t] = new $e(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Do, Oo);
    be[t] = new $e(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Do, Oo);
  be[t] = new $e(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  be[e] = new $e(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
be.xlinkHref = new $e(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  be[e] = new $e(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Mo(e, t, n, r) {
  var l = be.hasOwnProperty(t) ? be[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (pp(t, n, l, r) && (n = null),
    r || l === null
      ? dp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var zt = up.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  gl = Symbol.for("react.element"),
  Ln = Symbol.for("react.portal"),
  $n = Symbol.for("react.fragment"),
  _o = Symbol.for("react.strict_mode"),
  Ei = Symbol.for("react.profiler"),
  uc = Symbol.for("react.provider"),
  cc = Symbol.for("react.context"),
  Lo = Symbol.for("react.forward_ref"),
  Ci = Symbol.for("react.suspense"),
  Pi = Symbol.for("react.suspense_list"),
  $o = Symbol.for("react.memo"),
  Wt = Symbol.for("react.lazy"),
  dc = Symbol.for("react.offscreen"),
  _a = Symbol.iterator;
function pr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (_a && e[_a]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var de = Object.assign,
  Qs;
function br(e) {
  if (Qs === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Qs = (t && t[1]) || "";
    }
  return (
    `
` +
    Qs +
    e
  );
}
var Ys = !1;
function Gs(e, t) {
  if (!e || Ys) return "";
  Ys = !0;
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
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var l = c.stack.split(`
`),
          s = r.stack.split(`
`),
          i = l.length - 1,
          a = s.length - 1;
        1 <= i && 0 <= a && l[i] !== s[a];

      )
        a--;
      for (; 1 <= i && 0 <= a; i--, a--)
        if (l[i] !== s[a]) {
          if (i !== 1 || a !== 1)
            do
              if ((i--, a--, 0 > a || l[i] !== s[a])) {
                var u =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= i && 0 <= a);
          break;
        }
    }
  } finally {
    (Ys = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? br(e) : "";
}
function mp(e) {
  switch (e.tag) {
    case 5:
      return br(e.type);
    case 16:
      return br("Lazy");
    case 13:
      return br("Suspense");
    case 19:
      return br("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Gs(e.type, !1)), e;
    case 11:
      return (e = Gs(e.type.render, !1)), e;
    case 1:
      return (e = Gs(e.type, !0)), e;
    default:
      return "";
  }
}
function Ti(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case $n:
      return "Fragment";
    case Ln:
      return "Portal";
    case Ei:
      return "Profiler";
    case _o:
      return "StrictMode";
    case Ci:
      return "Suspense";
    case Pi:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case cc:
        return (e.displayName || "Context") + ".Consumer";
      case uc:
        return (e._context.displayName || "Context") + ".Provider";
      case Lo:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case $o:
        return (
          (t = e.displayName || null), t !== null ? t : Ti(e.type) || "Memo"
        );
      case Wt:
        (t = e._payload), (e = e._init);
        try {
          return Ti(e(t));
        } catch {}
    }
  return null;
}
function hp(e) {
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
      return Ti(t);
    case 8:
      return t === _o ? "StrictMode" : "Mode";
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
function sn(e) {
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
function fc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function gp(e) {
  var t = fc(e) ? "checked" : "value",
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
        set: function (i) {
          (r = "" + i), s.call(this, i);
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
function yl(e) {
  e._valueTracker || (e._valueTracker = gp(e));
}
function pc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = fc(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Ql(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Di(e, t) {
  var n = t.checked;
  return de({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function La(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = sn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function mc(e, t) {
  (t = t.checked), t != null && Mo(e, "checked", t, !1);
}
function Oi(e, t) {
  mc(e, t);
  var n = sn(t.value),
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
    ? Mi(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Mi(e, t.type, sn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function $a(e, t, n) {
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
function Mi(e, t, n) {
  (t !== "number" || Ql(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Er = Array.isArray;
function Vn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + sn(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function _i(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(C(91));
  return de({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Fa(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(C(92));
      if (Er(n)) {
        if (1 < n.length) throw Error(C(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: sn(n) };
}
function hc(e, t) {
  var n = sn(t.value),
    r = sn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Ra(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function gc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Li(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? gc(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var vl,
  yc = (function (e) {
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
        vl = vl || document.createElement("div"),
          vl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = vl.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Wr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Dr = {
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
  yp = ["Webkit", "ms", "Moz", "O"];
Object.keys(Dr).forEach(function (e) {
  yp.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Dr[t] = Dr[e]);
  });
});
function vc(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Dr.hasOwnProperty(e) && Dr[e])
    ? ("" + t).trim()
    : t + "px";
}
function xc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = vc(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var vp = de(
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
function $i(e, t) {
  if (t) {
    if (vp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(C(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(C(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(C(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(C(62));
  }
}
function Fi(e, t) {
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
var Ri = null;
function Fo(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var zi = null,
  Qn = null,
  Yn = null;
function za(e) {
  if ((e = cl(e))) {
    if (typeof zi != "function") throw Error(C(280));
    var t = e.stateNode;
    t && ((t = Ps(t)), zi(e.stateNode, e.type, t));
  }
}
function wc(e) {
  Qn ? (Yn ? Yn.push(e) : (Yn = [e])) : (Qn = e);
}
function Nc() {
  if (Qn) {
    var e = Qn,
      t = Yn;
    if (((Yn = Qn = null), za(e), t)) for (e = 0; e < t.length; e++) za(t[e]);
  }
}
function Sc(e, t) {
  return e(t);
}
function kc() {}
var Ks = !1;
function jc(e, t, n) {
  if (Ks) return e(t, n);
  Ks = !0;
  try {
    return Sc(e, t, n);
  } finally {
    (Ks = !1), (Qn !== null || Yn !== null) && (kc(), Nc());
  }
}
function qr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ps(n);
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
  if (n && typeof n != "function") throw Error(C(231, t, typeof n));
  return n;
}
var Ii = !1;
if (Lt)
  try {
    var mr = {};
    Object.defineProperty(mr, "passive", {
      get: function () {
        Ii = !0;
      },
    }),
      window.addEventListener("test", mr, mr),
      window.removeEventListener("test", mr, mr);
  } catch {
    Ii = !1;
  }
function xp(e, t, n, r, l, s, i, a, u) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (m) {
    this.onError(m);
  }
}
var Or = !1,
  Yl = null,
  Gl = !1,
  Ai = null,
  wp = {
    onError: function (e) {
      (Or = !0), (Yl = e);
    },
  };
function Np(e, t, n, r, l, s, i, a, u) {
  (Or = !1), (Yl = null), xp.apply(wp, arguments);
}
function Sp(e, t, n, r, l, s, i, a, u) {
  if ((Np.apply(this, arguments), Or)) {
    if (Or) {
      var c = Yl;
      (Or = !1), (Yl = null);
    } else throw Error(C(198));
    Gl || ((Gl = !0), (Ai = c));
  }
}
function Dn(e) {
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
function bc(e) {
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
  if (Dn(e) !== e) throw Error(C(188));
}
function kp(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Dn(e)), t === null)) throw Error(C(188));
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
        if (s === n) return Ia(l), e;
        if (s === r) return Ia(l), t;
        s = s.sibling;
      }
      throw Error(C(188));
    }
    if (n.return !== r.return) (n = l), (r = s);
    else {
      for (var i = !1, a = l.child; a; ) {
        if (a === n) {
          (i = !0), (n = l), (r = s);
          break;
        }
        if (a === r) {
          (i = !0), (r = l), (n = s);
          break;
        }
        a = a.sibling;
      }
      if (!i) {
        for (a = s.child; a; ) {
          if (a === n) {
            (i = !0), (n = s), (r = l);
            break;
          }
          if (a === r) {
            (i = !0), (r = s), (n = l);
            break;
          }
          a = a.sibling;
        }
        if (!i) throw Error(C(189));
      }
    }
    if (n.alternate !== r) throw Error(C(190));
  }
  if (n.tag !== 3) throw Error(C(188));
  return n.stateNode.current === n ? e : t;
}
function Ec(e) {
  return (e = kp(e)), e !== null ? Cc(e) : null;
}
function Cc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Cc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Pc = Qe.unstable_scheduleCallback,
  Aa = Qe.unstable_cancelCallback,
  jp = Qe.unstable_shouldYield,
  bp = Qe.unstable_requestPaint,
  me = Qe.unstable_now,
  Ep = Qe.unstable_getCurrentPriorityLevel,
  Ro = Qe.unstable_ImmediatePriority,
  Tc = Qe.unstable_UserBlockingPriority,
  Kl = Qe.unstable_NormalPriority,
  Cp = Qe.unstable_LowPriority,
  Dc = Qe.unstable_IdlePriority,
  js = null,
  jt = null;
function Pp(e) {
  if (jt && typeof jt.onCommitFiberRoot == "function")
    try {
      jt.onCommitFiberRoot(js, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var mt = Math.clz32 ? Math.clz32 : Op,
  Tp = Math.log,
  Dp = Math.LN2;
function Op(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Tp(e) / Dp) | 0)) | 0;
}
var xl = 64,
  wl = 4194304;
function Cr(e) {
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
function Xl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    s = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var a = i & ~l;
    a !== 0 ? (r = Cr(a)) : ((s &= i), s !== 0 && (r = Cr(s)));
  } else (i = n & ~l), i !== 0 ? (r = Cr(i)) : s !== 0 && (r = Cr(s));
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
      (n = 31 - mt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Mp(e, t) {
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
function _p(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;

  ) {
    var i = 31 - mt(s),
      a = 1 << i,
      u = l[i];
    u === -1
      ? (!(a & n) || a & r) && (l[i] = Mp(a, t))
      : u <= t && (e.expiredLanes |= a),
      (s &= ~a);
  }
}
function Ui(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Oc() {
  var e = xl;
  return (xl <<= 1), !(xl & 4194240) && (xl = 64), e;
}
function Xs(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function al(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - mt(t)),
    (e[t] = n);
}
function Lp(e, t) {
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
    var l = 31 - mt(n),
      s = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~s);
  }
}
function zo(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - mt(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var Z = 0;
function Mc(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var _c,
  Io,
  Lc,
  $c,
  Fc,
  Hi = !1,
  Nl = [],
  Xt = null,
  Jt = null,
  Zt = null,
  Br = new Map(),
  Vr = new Map(),
  Bt = [],
  $p =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Ua(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Xt = null;
      break;
    case "dragenter":
    case "dragleave":
      Jt = null;
      break;
    case "mouseover":
    case "mouseout":
      Zt = null;
      break;
    case "pointerover":
    case "pointerout":
      Br.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Vr.delete(t.pointerId);
  }
}
function hr(e, t, n, r, l, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [l],
      }),
      t !== null && ((t = cl(t)), t !== null && Io(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Fp(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (Xt = hr(Xt, e, t, n, r, l)), !0;
    case "dragenter":
      return (Jt = hr(Jt, e, t, n, r, l)), !0;
    case "mouseover":
      return (Zt = hr(Zt, e, t, n, r, l)), !0;
    case "pointerover":
      var s = l.pointerId;
      return Br.set(s, hr(Br.get(s) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (s = l.pointerId), Vr.set(s, hr(Vr.get(s) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Rc(e) {
  var t = hn(e.target);
  if (t !== null) {
    var n = Dn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = bc(n)), t !== null)) {
          (e.blockedOn = t),
            Fc(e.priority, function () {
              Lc(n);
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
function Fl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Wi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Ri = r), n.target.dispatchEvent(r), (Ri = null);
    } else return (t = cl(n)), t !== null && Io(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Ha(e, t, n) {
  Fl(e) && n.delete(t);
}
function Rp() {
  (Hi = !1),
    Xt !== null && Fl(Xt) && (Xt = null),
    Jt !== null && Fl(Jt) && (Jt = null),
    Zt !== null && Fl(Zt) && (Zt = null),
    Br.forEach(Ha),
    Vr.forEach(Ha);
}
function gr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Hi ||
      ((Hi = !0),
      Qe.unstable_scheduleCallback(Qe.unstable_NormalPriority, Rp)));
}
function Qr(e) {
  function t(l) {
    return gr(l, e);
  }
  if (0 < Nl.length) {
    gr(Nl[0], e);
    for (var n = 1; n < Nl.length; n++) {
      var r = Nl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Xt !== null && gr(Xt, e),
      Jt !== null && gr(Jt, e),
      Zt !== null && gr(Zt, e),
      Br.forEach(t),
      Vr.forEach(t),
      n = 0;
    n < Bt.length;
    n++
  )
    (r = Bt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Bt.length && ((n = Bt[0]), n.blockedOn === null); )
    Rc(n), n.blockedOn === null && Bt.shift();
}
var Gn = zt.ReactCurrentBatchConfig,
  Jl = !0;
function zp(e, t, n, r) {
  var l = Z,
    s = Gn.transition;
  Gn.transition = null;
  try {
    (Z = 1), Ao(e, t, n, r);
  } finally {
    (Z = l), (Gn.transition = s);
  }
}
function Ip(e, t, n, r) {
  var l = Z,
    s = Gn.transition;
  Gn.transition = null;
  try {
    (Z = 4), Ao(e, t, n, r);
  } finally {
    (Z = l), (Gn.transition = s);
  }
}
function Ao(e, t, n, r) {
  if (Jl) {
    var l = Wi(e, t, n, r);
    if (l === null) oi(e, t, r, Zl, n), Ua(e, r);
    else if (Fp(l, e, t, n, r)) r.stopPropagation();
    else if ((Ua(e, r), t & 4 && -1 < $p.indexOf(e))) {
      for (; l !== null; ) {
        var s = cl(l);
        if (
          (s !== null && _c(s),
          (s = Wi(e, t, n, r)),
          s === null && oi(e, t, r, Zl, n),
          s === l)
        )
          break;
        l = s;
      }
      l !== null && r.stopPropagation();
    } else oi(e, t, r, null, n);
  }
}
var Zl = null;
function Wi(e, t, n, r) {
  if (((Zl = null), (e = Fo(r)), (e = hn(e)), e !== null))
    if (((t = Dn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = bc(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Zl = e), null;
}
function zc(e) {
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
      switch (Ep()) {
        case Ro:
          return 1;
        case Tc:
          return 4;
        case Kl:
        case Cp:
          return 16;
        case Dc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Yt = null,
  Uo = null,
  Rl = null;
function Ic() {
  if (Rl) return Rl;
  var e,
    t = Uo,
    n = t.length,
    r,
    l = "value" in Yt ? Yt.value : Yt.textContent,
    s = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[s - r]; r++);
  return (Rl = l.slice(e, 1 < r ? 1 - r : void 0));
}
function zl(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Sl() {
  return !0;
}
function Wa() {
  return !1;
}
function Ge(e) {
  function t(n, r, l, s, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = i),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(s) : s[a]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? Sl
        : Wa),
      (this.isPropagationStopped = Wa),
      this
    );
  }
  return (
    de(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Sl));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Sl));
      },
      persist: function () {},
      isPersistent: Sl,
    }),
    t
  );
}
var or = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ho = Ge(or),
  ul = de({}, or, { view: 0, detail: 0 }),
  Ap = Ge(ul),
  Js,
  Zs,
  yr,
  bs = de({}, ul, {
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
    getModifierState: Wo,
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
        : (e !== yr &&
            (yr && e.type === "mousemove"
              ? ((Js = e.screenX - yr.screenX), (Zs = e.screenY - yr.screenY))
              : (Zs = Js = 0),
            (yr = e)),
          Js);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Zs;
    },
  }),
  qa = Ge(bs),
  Up = de({}, bs, { dataTransfer: 0 }),
  Hp = Ge(Up),
  Wp = de({}, ul, { relatedTarget: 0 }),
  ei = Ge(Wp),
  qp = de({}, or, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Bp = Ge(qp),
  Vp = de({}, or, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Qp = Ge(Vp),
  Yp = de({}, or, { data: 0 }),
  Ba = Ge(Yp),
  Gp = {
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
  Kp = {
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
  Xp = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Jp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Xp[e]) ? !!t[e] : !1;
}
function Wo() {
  return Jp;
}
var Zp = de({}, ul, {
    key: function (e) {
      if (e.key) {
        var t = Gp[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = zl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Kp[e.keyCode] || "Unidentified"
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
    getModifierState: Wo,
    charCode: function (e) {
      return e.type === "keypress" ? zl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? zl(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  em = Ge(Zp),
  tm = de({}, bs, {
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
  Va = Ge(tm),
  nm = de({}, ul, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Wo,
  }),
  rm = Ge(nm),
  lm = de({}, or, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  sm = Ge(lm),
  im = de({}, bs, {
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
  om = Ge(im),
  am = [9, 13, 27, 32],
  qo = Lt && "CompositionEvent" in window,
  Mr = null;
Lt && "documentMode" in document && (Mr = document.documentMode);
var um = Lt && "TextEvent" in window && !Mr,
  Ac = Lt && (!qo || (Mr && 8 < Mr && 11 >= Mr)),
  Qa = " ",
  Ya = !1;
function Uc(e, t) {
  switch (e) {
    case "keyup":
      return am.indexOf(t.keyCode) !== -1;
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
function Hc(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Fn = !1;
function cm(e, t) {
  switch (e) {
    case "compositionend":
      return Hc(t);
    case "keypress":
      return t.which !== 32 ? null : ((Ya = !0), Qa);
    case "textInput":
      return (e = t.data), e === Qa && Ya ? null : e;
    default:
      return null;
  }
}
function dm(e, t) {
  if (Fn)
    return e === "compositionend" || (!qo && Uc(e, t))
      ? ((e = Ic()), (Rl = Uo = Yt = null), (Fn = !1), e)
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
      return Ac && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var fm = {
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
function Ga(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!fm[e.type] : t === "textarea";
}
function Wc(e, t, n, r) {
  wc(r),
    (t = es(t, "onChange")),
    0 < t.length &&
      ((n = new Ho("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var _r = null,
  Yr = null;
function pm(e) {
  ed(e, 0);
}
function Es(e) {
  var t = In(e);
  if (pc(t)) return e;
}
function mm(e, t) {
  if (e === "change") return t;
}
var qc = !1;
if (Lt) {
  var ti;
  if (Lt) {
    var ni = "oninput" in document;
    if (!ni) {
      var Ka = document.createElement("div");
      Ka.setAttribute("oninput", "return;"),
        (ni = typeof Ka.oninput == "function");
    }
    ti = ni;
  } else ti = !1;
  qc = ti && (!document.documentMode || 9 < document.documentMode);
}
function Xa() {
  _r && (_r.detachEvent("onpropertychange", Bc), (Yr = _r = null));
}
function Bc(e) {
  if (e.propertyName === "value" && Es(Yr)) {
    var t = [];
    Wc(t, Yr, e, Fo(e)), jc(pm, t);
  }
}
function hm(e, t, n) {
  e === "focusin"
    ? (Xa(), (_r = t), (Yr = n), _r.attachEvent("onpropertychange", Bc))
    : e === "focusout" && Xa();
}
function gm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Es(Yr);
}
function ym(e, t) {
  if (e === "click") return Es(t);
}
function vm(e, t) {
  if (e === "input" || e === "change") return Es(t);
}
function xm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var gt = typeof Object.is == "function" ? Object.is : xm;
function Gr(e, t) {
  if (gt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!bi.call(t, l) || !gt(e[l], t[l])) return !1;
  }
  return !0;
}
function Ja(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Za(e, t) {
  var n = Ja(e);
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
    n = Ja(n);
  }
}
function Vc(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Vc(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Qc() {
  for (var e = window, t = Ql(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ql(e.document);
  }
  return t;
}
function Bo(e) {
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
function wm(e) {
  var t = Qc(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Vc(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Bo(n)) {
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
          (l = Za(n, s));
        var i = Za(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          s > r
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
var Nm = Lt && "documentMode" in document && 11 >= document.documentMode,
  Rn = null,
  qi = null,
  Lr = null,
  Bi = !1;
function eu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Bi ||
    Rn == null ||
    Rn !== Ql(r) ||
    ((r = Rn),
    "selectionStart" in r && Bo(r)
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
    (Lr && Gr(Lr, r)) ||
      ((Lr = r),
      (r = es(qi, "onSelect")),
      0 < r.length &&
        ((t = new Ho("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Rn))));
}
function kl(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var zn = {
    animationend: kl("Animation", "AnimationEnd"),
    animationiteration: kl("Animation", "AnimationIteration"),
    animationstart: kl("Animation", "AnimationStart"),
    transitionend: kl("Transition", "TransitionEnd"),
  },
  ri = {},
  Yc = {};
Lt &&
  ((Yc = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete zn.animationend.animation,
    delete zn.animationiteration.animation,
    delete zn.animationstart.animation),
  "TransitionEvent" in window || delete zn.transitionend.transition);
function Cs(e) {
  if (ri[e]) return ri[e];
  if (!zn[e]) return e;
  var t = zn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Yc) return (ri[e] = t[n]);
  return e;
}
var Gc = Cs("animationend"),
  Kc = Cs("animationiteration"),
  Xc = Cs("animationstart"),
  Jc = Cs("transitionend"),
  Zc = new Map(),
  tu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function an(e, t) {
  Zc.set(e, t), Tn(t, [e]);
}
for (var li = 0; li < tu.length; li++) {
  var si = tu[li],
    Sm = si.toLowerCase(),
    km = si[0].toUpperCase() + si.slice(1);
  an(Sm, "on" + km);
}
an(Gc, "onAnimationEnd");
an(Kc, "onAnimationIteration");
an(Xc, "onAnimationStart");
an("dblclick", "onDoubleClick");
an("focusin", "onFocus");
an("focusout", "onBlur");
an(Jc, "onTransitionEnd");
Zn("onMouseEnter", ["mouseout", "mouseover"]);
Zn("onMouseLeave", ["mouseout", "mouseover"]);
Zn("onPointerEnter", ["pointerout", "pointerover"]);
Zn("onPointerLeave", ["pointerout", "pointerover"]);
Tn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Tn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Tn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Tn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Tn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Tn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Pr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  jm = new Set("cancel close invalid load scroll toggle".split(" ").concat(Pr));
function nu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Sp(r, t, void 0, e), (e.currentTarget = null);
}
function ed(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var a = r[i],
            u = a.instance,
            c = a.currentTarget;
          if (((a = a.listener), u !== s && l.isPropagationStopped())) break e;
          nu(l, a, c), (s = u);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((a = r[i]),
            (u = a.instance),
            (c = a.currentTarget),
            (a = a.listener),
            u !== s && l.isPropagationStopped())
          )
            break e;
          nu(l, a, c), (s = u);
        }
    }
  }
  if (Gl) throw ((e = Ai), (Gl = !1), (Ai = null), e);
}
function se(e, t) {
  var n = t[Ki];
  n === void 0 && (n = t[Ki] = new Set());
  var r = e + "__bubble";
  n.has(r) || (td(t, e, 2, !1), n.add(r));
}
function ii(e, t, n) {
  var r = 0;
  t && (r |= 4), td(n, e, r, t);
}
var jl = "_reactListening" + Math.random().toString(36).slice(2);
function Kr(e) {
  if (!e[jl]) {
    (e[jl] = !0),
      ac.forEach(function (n) {
        n !== "selectionchange" && (jm.has(n) || ii(n, !1, e), ii(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[jl] || ((t[jl] = !0), ii("selectionchange", !1, t));
  }
}
function td(e, t, n, r) {
  switch (zc(t)) {
    case 1:
      var l = zp;
      break;
    case 4:
      l = Ip;
      break;
    default:
      l = Ao;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Ii ||
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
function oi(e, t, n, r, l) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var a = r.stateNode.containerInfo;
        if (a === l || (a.nodeType === 8 && a.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var u = i.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = i.stateNode.containerInfo),
              u === l || (u.nodeType === 8 && u.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; a !== null; ) {
          if (((i = hn(a)), i === null)) return;
          if (((u = i.tag), u === 5 || u === 6)) {
            r = s = i;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  jc(function () {
    var c = s,
      m = Fo(n),
      f = [];
    e: {
      var v = Zc.get(e);
      if (v !== void 0) {
        var x = Ho,
          w = e;
        switch (e) {
          case "keypress":
            if (zl(n) === 0) break e;
          case "keydown":
          case "keyup":
            x = em;
            break;
          case "focusin":
            (w = "focus"), (x = ei);
            break;
          case "focusout":
            (w = "blur"), (x = ei);
            break;
          case "beforeblur":
          case "afterblur":
            x = ei;
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
            x = qa;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = Hp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = rm;
            break;
          case Gc:
          case Kc:
          case Xc:
            x = Bp;
            break;
          case Jc:
            x = sm;
            break;
          case "scroll":
            x = Ap;
            break;
          case "wheel":
            x = om;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = Qp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = Va;
        }
        var N = (t & 4) !== 0,
          b = !N && e === "scroll",
          g = N ? (v !== null ? v + "Capture" : null) : v;
        N = [];
        for (var d = c, h; d !== null; ) {
          h = d;
          var y = h.stateNode;
          if (
            (h.tag === 5 &&
              y !== null &&
              ((h = y),
              g !== null && ((y = qr(d, g)), y != null && N.push(Xr(d, y, h)))),
            b)
          )
            break;
          d = d.return;
        }
        0 < N.length &&
          ((v = new x(v, w, null, n, m)), f.push({ event: v, listeners: N }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((v = e === "mouseover" || e === "pointerover"),
          (x = e === "mouseout" || e === "pointerout"),
          v &&
            n !== Ri &&
            (w = n.relatedTarget || n.fromElement) &&
            (hn(w) || w[$t]))
        )
          break e;
        if (
          (x || v) &&
          ((v =
            m.window === m
              ? m
              : (v = m.ownerDocument)
              ? v.defaultView || v.parentWindow
              : window),
          x
            ? ((w = n.relatedTarget || n.toElement),
              (x = c),
              (w = w ? hn(w) : null),
              w !== null &&
                ((b = Dn(w)), w !== b || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((x = null), (w = c)),
          x !== w)
        ) {
          if (
            ((N = qa),
            (y = "onMouseLeave"),
            (g = "onMouseEnter"),
            (d = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((N = Va),
              (y = "onPointerLeave"),
              (g = "onPointerEnter"),
              (d = "pointer")),
            (b = x == null ? v : In(x)),
            (h = w == null ? v : In(w)),
            (v = new N(y, d + "leave", x, n, m)),
            (v.target = b),
            (v.relatedTarget = h),
            (y = null),
            hn(m) === c &&
              ((N = new N(g, d + "enter", w, n, m)),
              (N.target = h),
              (N.relatedTarget = b),
              (y = N)),
            (b = y),
            x && w)
          )
            t: {
              for (N = x, g = w, d = 0, h = N; h; h = Mn(h)) d++;
              for (h = 0, y = g; y; y = Mn(y)) h++;
              for (; 0 < d - h; ) (N = Mn(N)), d--;
              for (; 0 < h - d; ) (g = Mn(g)), h--;
              for (; d--; ) {
                if (N === g || (g !== null && N === g.alternate)) break t;
                (N = Mn(N)), (g = Mn(g));
              }
              N = null;
            }
          else N = null;
          x !== null && ru(f, v, x, N, !1),
            w !== null && b !== null && ru(f, b, w, N, !0);
        }
      }
      e: {
        if (
          ((v = c ? In(c) : window),
          (x = v.nodeName && v.nodeName.toLowerCase()),
          x === "select" || (x === "input" && v.type === "file"))
        )
          var S = mm;
        else if (Ga(v))
          if (qc) S = vm;
          else {
            S = gm;
            var k = hm;
          }
        else
          (x = v.nodeName) &&
            x.toLowerCase() === "input" &&
            (v.type === "checkbox" || v.type === "radio") &&
            (S = ym);
        if (S && (S = S(e, c))) {
          Wc(f, S, n, m);
          break e;
        }
        k && k(e, v, c),
          e === "focusout" &&
            (k = v._wrapperState) &&
            k.controlled &&
            v.type === "number" &&
            Mi(v, "number", v.value);
      }
      switch (((k = c ? In(c) : window), e)) {
        case "focusin":
          (Ga(k) || k.contentEditable === "true") &&
            ((Rn = k), (qi = c), (Lr = null));
          break;
        case "focusout":
          Lr = qi = Rn = null;
          break;
        case "mousedown":
          Bi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Bi = !1), eu(f, n, m);
          break;
        case "selectionchange":
          if (Nm) break;
        case "keydown":
        case "keyup":
          eu(f, n, m);
      }
      var P;
      if (qo)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        Fn
          ? Uc(e, n) && (T = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T &&
        (Ac &&
          n.locale !== "ko" &&
          (Fn || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && Fn && (P = Ic())
            : ((Yt = m),
              (Uo = "value" in Yt ? Yt.value : Yt.textContent),
              (Fn = !0))),
        (k = es(c, T)),
        0 < k.length &&
          ((T = new Ba(T, e, null, n, m)),
          f.push({ event: T, listeners: k }),
          P ? (T.data = P) : ((P = Hc(n)), P !== null && (T.data = P)))),
        (P = um ? cm(e, n) : dm(e, n)) &&
          ((c = es(c, "onBeforeInput")),
          0 < c.length &&
            ((m = new Ba("onBeforeInput", "beforeinput", null, n, m)),
            f.push({ event: m, listeners: c }),
            (m.data = P)));
    }
    ed(f, t);
  });
}
function Xr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function es(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      s = l.stateNode;
    l.tag === 5 &&
      s !== null &&
      ((l = s),
      (s = qr(e, n)),
      s != null && r.unshift(Xr(e, s, l)),
      (s = qr(e, t)),
      s != null && r.push(Xr(e, s, l))),
      (e = e.return);
  }
  return r;
}
function Mn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ru(e, t, n, r, l) {
  for (var s = t._reactName, i = []; n !== null && n !== r; ) {
    var a = n,
      u = a.alternate,
      c = a.stateNode;
    if (u !== null && u === r) break;
    a.tag === 5 &&
      c !== null &&
      ((a = c),
      l
        ? ((u = qr(n, s)), u != null && i.unshift(Xr(n, u, a)))
        : l || ((u = qr(n, s)), u != null && i.push(Xr(n, u, a)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var bm = /\r\n?/g,
  Em = /\u0000|\uFFFD/g;
function lu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      bm,
      `
`
    )
    .replace(Em, "");
}
function bl(e, t, n) {
  if (((t = lu(t)), lu(e) !== t && n)) throw Error(C(425));
}
function ts() {}
var Vi = null,
  Qi = null;
function Yi(e, t) {
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
var Gi = typeof setTimeout == "function" ? setTimeout : void 0,
  Cm = typeof clearTimeout == "function" ? clearTimeout : void 0,
  su = typeof Promise == "function" ? Promise : void 0,
  Pm =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof su < "u"
      ? function (e) {
          return su.resolve(null).then(e).catch(Tm);
        }
      : Gi;
function Tm(e) {
  setTimeout(function () {
    throw e;
  });
}
function ai(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Qr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Qr(t);
}
function en(e) {
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
function iu(e) {
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
var ar = Math.random().toString(36).slice(2),
  kt = "__reactFiber$" + ar,
  Jr = "__reactProps$" + ar,
  $t = "__reactContainer$" + ar,
  Ki = "__reactEvents$" + ar,
  Dm = "__reactListeners$" + ar,
  Om = "__reactHandles$" + ar;
function hn(e) {
  var t = e[kt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[$t] || n[kt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = iu(e); e !== null; ) {
          if ((n = e[kt])) return n;
          e = iu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function cl(e) {
  return (
    (e = e[kt] || e[$t]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function In(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(C(33));
}
function Ps(e) {
  return e[Jr] || null;
}
var Xi = [],
  An = -1;
function un(e) {
  return { current: e };
}
function ie(e) {
  0 > An || ((e.current = Xi[An]), (Xi[An] = null), An--);
}
function re(e, t) {
  An++, (Xi[An] = e.current), (e.current = t);
}
var on = {},
  De = un(on),
  ze = un(!1),
  kn = on;
function er(e, t) {
  var n = e.type.contextTypes;
  if (!n) return on;
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
function ns() {
  ie(ze), ie(De);
}
function ou(e, t, n) {
  if (De.current !== on) throw Error(C(168));
  re(De, t), re(ze, n);
}
function nd(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(C(108, hp(e) || "Unknown", l));
  return de({}, n, r);
}
function rs(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || on),
    (kn = De.current),
    re(De, e),
    re(ze, ze.current),
    !0
  );
}
function au(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(C(169));
  n
    ? ((e = nd(e, t, kn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ie(ze),
      ie(De),
      re(De, e))
    : ie(ze),
    re(ze, n);
}
var Pt = null,
  Ts = !1,
  ui = !1;
function rd(e) {
  Pt === null ? (Pt = [e]) : Pt.push(e);
}
function Mm(e) {
  (Ts = !0), rd(e);
}
function cn() {
  if (!ui && Pt !== null) {
    ui = !0;
    var e = 0,
      t = Z;
    try {
      var n = Pt;
      for (Z = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Pt = null), (Ts = !1);
    } catch (l) {
      throw (Pt !== null && (Pt = Pt.slice(e + 1)), Pc(Ro, cn), l);
    } finally {
      (Z = t), (ui = !1);
    }
  }
  return null;
}
var Un = [],
  Hn = 0,
  ls = null,
  ss = 0,
  Ze = [],
  et = 0,
  jn = null,
  Tt = 1,
  Dt = "";
function dn(e, t) {
  (Un[Hn++] = ss), (Un[Hn++] = ls), (ls = e), (ss = t);
}
function ld(e, t, n) {
  (Ze[et++] = Tt), (Ze[et++] = Dt), (Ze[et++] = jn), (jn = e);
  var r = Tt;
  e = Dt;
  var l = 32 - mt(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var s = 32 - mt(t) + l;
  if (30 < s) {
    var i = l - (l % 5);
    (s = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (Tt = (1 << (32 - mt(t) + l)) | (n << l) | r),
      (Dt = s + e);
  } else (Tt = (1 << s) | (n << l) | r), (Dt = e);
}
function Vo(e) {
  e.return !== null && (dn(e, 1), ld(e, 1, 0));
}
function Qo(e) {
  for (; e === ls; )
    (ls = Un[--Hn]), (Un[Hn] = null), (ss = Un[--Hn]), (Un[Hn] = null);
  for (; e === jn; )
    (jn = Ze[--et]),
      (Ze[et] = null),
      (Dt = Ze[--et]),
      (Ze[et] = null),
      (Tt = Ze[--et]),
      (Ze[et] = null);
}
var Ve = null,
  Be = null,
  oe = !1,
  ft = null;
function sd(e, t) {
  var n = tt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function uu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ve = e), (Be = en(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ve = e), (Be = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = jn !== null ? { id: Tt, overflow: Dt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = tt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ve = e),
            (Be = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ji(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Zi(e) {
  if (oe) {
    var t = Be;
    if (t) {
      var n = t;
      if (!uu(e, t)) {
        if (Ji(e)) throw Error(C(418));
        t = en(n.nextSibling);
        var r = Ve;
        t && uu(e, t)
          ? sd(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (oe = !1), (Ve = e));
      }
    } else {
      if (Ji(e)) throw Error(C(418));
      (e.flags = (e.flags & -4097) | 2), (oe = !1), (Ve = e);
    }
  }
}
function cu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ve = e;
}
function El(e) {
  if (e !== Ve) return !1;
  if (!oe) return cu(e), (oe = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Yi(e.type, e.memoizedProps))),
    t && (t = Be))
  ) {
    if (Ji(e)) throw (id(), Error(C(418)));
    for (; t; ) sd(e, t), (t = en(t.nextSibling));
  }
  if ((cu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(C(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Be = en(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Be = null;
    }
  } else Be = Ve ? en(e.stateNode.nextSibling) : null;
  return !0;
}
function id() {
  for (var e = Be; e; ) e = en(e.nextSibling);
}
function tr() {
  (Be = Ve = null), (oe = !1);
}
function Yo(e) {
  ft === null ? (ft = [e]) : ft.push(e);
}
var _m = zt.ReactCurrentBatchConfig;
function vr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(C(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(C(147, e));
      var l = r,
        s = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (i) {
            var a = l.refs;
            i === null ? delete a[s] : (a[s] = i);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error(C(284));
    if (!n._owner) throw Error(C(290, e));
  }
  return e;
}
function Cl(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      C(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function du(e) {
  var t = e._init;
  return t(e._payload);
}
function od(e) {
  function t(g, d) {
    if (e) {
      var h = g.deletions;
      h === null ? ((g.deletions = [d]), (g.flags |= 16)) : h.push(d);
    }
  }
  function n(g, d) {
    if (!e) return null;
    for (; d !== null; ) t(g, d), (d = d.sibling);
    return null;
  }
  function r(g, d) {
    for (g = new Map(); d !== null; )
      d.key !== null ? g.set(d.key, d) : g.set(d.index, d), (d = d.sibling);
    return g;
  }
  function l(g, d) {
    return (g = ln(g, d)), (g.index = 0), (g.sibling = null), g;
  }
  function s(g, d, h) {
    return (
      (g.index = h),
      e
        ? ((h = g.alternate),
          h !== null
            ? ((h = h.index), h < d ? ((g.flags |= 2), d) : h)
            : ((g.flags |= 2), d))
        : ((g.flags |= 1048576), d)
    );
  }
  function i(g) {
    return e && g.alternate === null && (g.flags |= 2), g;
  }
  function a(g, d, h, y) {
    return d === null || d.tag !== 6
      ? ((d = gi(h, g.mode, y)), (d.return = g), d)
      : ((d = l(d, h)), (d.return = g), d);
  }
  function u(g, d, h, y) {
    var S = h.type;
    return S === $n
      ? m(g, d, h.props.children, y, h.key)
      : d !== null &&
        (d.elementType === S ||
          (typeof S == "object" &&
            S !== null &&
            S.$$typeof === Wt &&
            du(S) === d.type))
      ? ((y = l(d, h.props)), (y.ref = vr(g, d, h)), (y.return = g), y)
      : ((y = Bl(h.type, h.key, h.props, null, g.mode, y)),
        (y.ref = vr(g, d, h)),
        (y.return = g),
        y);
  }
  function c(g, d, h, y) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== h.containerInfo ||
      d.stateNode.implementation !== h.implementation
      ? ((d = yi(h, g.mode, y)), (d.return = g), d)
      : ((d = l(d, h.children || [])), (d.return = g), d);
  }
  function m(g, d, h, y, S) {
    return d === null || d.tag !== 7
      ? ((d = Nn(h, g.mode, y, S)), (d.return = g), d)
      : ((d = l(d, h)), (d.return = g), d);
  }
  function f(g, d, h) {
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return (d = gi("" + d, g.mode, h)), (d.return = g), d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case gl:
          return (
            (h = Bl(d.type, d.key, d.props, null, g.mode, h)),
            (h.ref = vr(g, null, d)),
            (h.return = g),
            h
          );
        case Ln:
          return (d = yi(d, g.mode, h)), (d.return = g), d;
        case Wt:
          var y = d._init;
          return f(g, y(d._payload), h);
      }
      if (Er(d) || pr(d))
        return (d = Nn(d, g.mode, h, null)), (d.return = g), d;
      Cl(g, d);
    }
    return null;
  }
  function v(g, d, h, y) {
    var S = d !== null ? d.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return S !== null ? null : a(g, d, "" + h, y);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case gl:
          return h.key === S ? u(g, d, h, y) : null;
        case Ln:
          return h.key === S ? c(g, d, h, y) : null;
        case Wt:
          return (S = h._init), v(g, d, S(h._payload), y);
      }
      if (Er(h) || pr(h)) return S !== null ? null : m(g, d, h, y, null);
      Cl(g, h);
    }
    return null;
  }
  function x(g, d, h, y, S) {
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return (g = g.get(h) || null), a(d, g, "" + y, S);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case gl:
          return (g = g.get(y.key === null ? h : y.key) || null), u(d, g, y, S);
        case Ln:
          return (g = g.get(y.key === null ? h : y.key) || null), c(d, g, y, S);
        case Wt:
          var k = y._init;
          return x(g, d, h, k(y._payload), S);
      }
      if (Er(y) || pr(y)) return (g = g.get(h) || null), m(d, g, y, S, null);
      Cl(d, y);
    }
    return null;
  }
  function w(g, d, h, y) {
    for (
      var S = null, k = null, P = d, T = (d = 0), R = null;
      P !== null && T < h.length;
      T++
    ) {
      P.index > T ? ((R = P), (P = null)) : (R = P.sibling);
      var L = v(g, P, h[T], y);
      if (L === null) {
        P === null && (P = R);
        break;
      }
      e && P && L.alternate === null && t(g, P),
        (d = s(L, d, T)),
        k === null ? (S = L) : (k.sibling = L),
        (k = L),
        (P = R);
    }
    if (T === h.length) return n(g, P), oe && dn(g, T), S;
    if (P === null) {
      for (; T < h.length; T++)
        (P = f(g, h[T], y)),
          P !== null &&
            ((d = s(P, d, T)), k === null ? (S = P) : (k.sibling = P), (k = P));
      return oe && dn(g, T), S;
    }
    for (P = r(g, P); T < h.length; T++)
      (R = x(P, g, T, h[T], y)),
        R !== null &&
          (e && R.alternate !== null && P.delete(R.key === null ? T : R.key),
          (d = s(R, d, T)),
          k === null ? (S = R) : (k.sibling = R),
          (k = R));
    return (
      e &&
        P.forEach(function (le) {
          return t(g, le);
        }),
      oe && dn(g, T),
      S
    );
  }
  function N(g, d, h, y) {
    var S = pr(h);
    if (typeof S != "function") throw Error(C(150));
    if (((h = S.call(h)), h == null)) throw Error(C(151));
    for (
      var k = (S = null), P = d, T = (d = 0), R = null, L = h.next();
      P !== null && !L.done;
      T++, L = h.next()
    ) {
      P.index > T ? ((R = P), (P = null)) : (R = P.sibling);
      var le = v(g, P, L.value, y);
      if (le === null) {
        P === null && (P = R);
        break;
      }
      e && P && le.alternate === null && t(g, P),
        (d = s(le, d, T)),
        k === null ? (S = le) : (k.sibling = le),
        (k = le),
        (P = R);
    }
    if (L.done) return n(g, P), oe && dn(g, T), S;
    if (P === null) {
      for (; !L.done; T++, L = h.next())
        (L = f(g, L.value, y)),
          L !== null &&
            ((d = s(L, d, T)), k === null ? (S = L) : (k.sibling = L), (k = L));
      return oe && dn(g, T), S;
    }
    for (P = r(g, P); !L.done; T++, L = h.next())
      (L = x(P, g, T, L.value, y)),
        L !== null &&
          (e && L.alternate !== null && P.delete(L.key === null ? T : L.key),
          (d = s(L, d, T)),
          k === null ? (S = L) : (k.sibling = L),
          (k = L));
    return (
      e &&
        P.forEach(function (Y) {
          return t(g, Y);
        }),
      oe && dn(g, T),
      S
    );
  }
  function b(g, d, h, y) {
    if (
      (typeof h == "object" &&
        h !== null &&
        h.type === $n &&
        h.key === null &&
        (h = h.props.children),
      typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case gl:
          e: {
            for (var S = h.key, k = d; k !== null; ) {
              if (k.key === S) {
                if (((S = h.type), S === $n)) {
                  if (k.tag === 7) {
                    n(g, k.sibling),
                      (d = l(k, h.props.children)),
                      (d.return = g),
                      (g = d);
                    break e;
                  }
                } else if (
                  k.elementType === S ||
                  (typeof S == "object" &&
                    S !== null &&
                    S.$$typeof === Wt &&
                    du(S) === k.type)
                ) {
                  n(g, k.sibling),
                    (d = l(k, h.props)),
                    (d.ref = vr(g, k, h)),
                    (d.return = g),
                    (g = d);
                  break e;
                }
                n(g, k);
                break;
              } else t(g, k);
              k = k.sibling;
            }
            h.type === $n
              ? ((d = Nn(h.props.children, g.mode, y, h.key)),
                (d.return = g),
                (g = d))
              : ((y = Bl(h.type, h.key, h.props, null, g.mode, y)),
                (y.ref = vr(g, d, h)),
                (y.return = g),
                (g = y));
          }
          return i(g);
        case Ln:
          e: {
            for (k = h.key; d !== null; ) {
              if (d.key === k)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === h.containerInfo &&
                  d.stateNode.implementation === h.implementation
                ) {
                  n(g, d.sibling),
                    (d = l(d, h.children || [])),
                    (d.return = g),
                    (g = d);
                  break e;
                } else {
                  n(g, d);
                  break;
                }
              else t(g, d);
              d = d.sibling;
            }
            (d = yi(h, g.mode, y)), (d.return = g), (g = d);
          }
          return i(g);
        case Wt:
          return (k = h._init), b(g, d, k(h._payload), y);
      }
      if (Er(h)) return w(g, d, h, y);
      if (pr(h)) return N(g, d, h, y);
      Cl(g, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        d !== null && d.tag === 6
          ? (n(g, d.sibling), (d = l(d, h)), (d.return = g), (g = d))
          : (n(g, d), (d = gi(h, g.mode, y)), (d.return = g), (g = d)),
        i(g))
      : n(g, d);
  }
  return b;
}
var nr = od(!0),
  ad = od(!1),
  is = un(null),
  os = null,
  Wn = null,
  Go = null;
function Ko() {
  Go = Wn = os = null;
}
function Xo(e) {
  var t = is.current;
  ie(is), (e._currentValue = t);
}
function eo(e, t, n) {
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
function Kn(e, t) {
  (os = e),
    (Go = Wn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Re = !0), (e.firstContext = null));
}
function rt(e) {
  var t = e._currentValue;
  if (Go !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Wn === null)) {
      if (os === null) throw Error(C(308));
      (Wn = e), (os.dependencies = { lanes: 0, firstContext: e });
    } else Wn = Wn.next = e;
  return t;
}
var gn = null;
function Jo(e) {
  gn === null ? (gn = [e]) : gn.push(e);
}
function ud(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Jo(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Ft(e, r)
  );
}
function Ft(e, t) {
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
var qt = !1;
function Zo(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function cd(e, t) {
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
function Ot(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function tn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), Q & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Ft(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Jo(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Ft(e, n)
  );
}
function Il(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), zo(e, n);
  }
}
function fu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      s = null;
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
        s === null ? (l = s = i) : (s = s.next = i), (n = n.next);
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
function as(e, t, n, r) {
  var l = e.updateQueue;
  qt = !1;
  var s = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    a = l.shared.pending;
  if (a !== null) {
    l.shared.pending = null;
    var u = a,
      c = u.next;
    (u.next = null), i === null ? (s = c) : (i.next = c), (i = u);
    var m = e.alternate;
    m !== null &&
      ((m = m.updateQueue),
      (a = m.lastBaseUpdate),
      a !== i &&
        (a === null ? (m.firstBaseUpdate = c) : (a.next = c),
        (m.lastBaseUpdate = u)));
  }
  if (s !== null) {
    var f = l.baseState;
    (i = 0), (m = c = u = null), (a = s);
    do {
      var v = a.lane,
        x = a.eventTime;
      if ((r & v) === v) {
        m !== null &&
          (m = m.next =
            {
              eventTime: x,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var w = e,
            N = a;
          switch (((v = t), (x = n), N.tag)) {
            case 1:
              if (((w = N.payload), typeof w == "function")) {
                f = w.call(x, f, v);
                break e;
              }
              f = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = N.payload),
                (v = typeof w == "function" ? w.call(x, f, v) : w),
                v == null)
              )
                break e;
              f = de({}, f, v);
              break e;
            case 2:
              qt = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (v = l.effects),
          v === null ? (l.effects = [a]) : v.push(a));
      } else
        (x = {
          eventTime: x,
          lane: v,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          m === null ? ((c = m = x), (u = f)) : (m = m.next = x),
          (i |= v);
      if (((a = a.next), a === null)) {
        if (((a = l.shared.pending), a === null)) break;
        (v = a),
          (a = v.next),
          (v.next = null),
          (l.lastBaseUpdate = v),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (m === null && (u = f),
      (l.baseState = u),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = m),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else s === null && (l.shared.lanes = 0);
    (En |= i), (e.lanes = i), (e.memoizedState = f);
  }
}
function pu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(C(191, l));
        l.call(r);
      }
    }
}
var dl = {},
  bt = un(dl),
  Zr = un(dl),
  el = un(dl);
function yn(e) {
  if (e === dl) throw Error(C(174));
  return e;
}
function ea(e, t) {
  switch ((re(el, t), re(Zr, e), re(bt, dl), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Li(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Li(t, e));
  }
  ie(bt), re(bt, t);
}
function rr() {
  ie(bt), ie(Zr), ie(el);
}
function dd(e) {
  yn(el.current);
  var t = yn(bt.current),
    n = Li(t, e.type);
  t !== n && (re(Zr, e), re(bt, n));
}
function ta(e) {
  Zr.current === e && (ie(bt), ie(Zr));
}
var ue = un(0);
function us(e) {
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
var ci = [];
function na() {
  for (var e = 0; e < ci.length; e++)
    ci[e]._workInProgressVersionPrimary = null;
  ci.length = 0;
}
var Al = zt.ReactCurrentDispatcher,
  di = zt.ReactCurrentBatchConfig,
  bn = 0,
  ce = null,
  ye = null,
  xe = null,
  cs = !1,
  $r = !1,
  tl = 0,
  Lm = 0;
function Ee() {
  throw Error(C(321));
}
function ra(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!gt(e[n], t[n])) return !1;
  return !0;
}
function la(e, t, n, r, l, s) {
  if (
    ((bn = s),
    (ce = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Al.current = e === null || e.memoizedState === null ? zm : Im),
    (e = n(r, l)),
    $r)
  ) {
    s = 0;
    do {
      if ((($r = !1), (tl = 0), 25 <= s)) throw Error(C(301));
      (s += 1),
        (xe = ye = null),
        (t.updateQueue = null),
        (Al.current = Am),
        (e = n(r, l));
    } while ($r);
  }
  if (
    ((Al.current = ds),
    (t = ye !== null && ye.next !== null),
    (bn = 0),
    (xe = ye = ce = null),
    (cs = !1),
    t)
  )
    throw Error(C(300));
  return e;
}
function sa() {
  var e = tl !== 0;
  return (tl = 0), e;
}
function St() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return xe === null ? (ce.memoizedState = xe = e) : (xe = xe.next = e), xe;
}
function lt() {
  if (ye === null) {
    var e = ce.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ye.next;
  var t = xe === null ? ce.memoizedState : xe.next;
  if (t !== null) (xe = t), (ye = e);
  else {
    if (e === null) throw Error(C(310));
    (ye = e),
      (e = {
        memoizedState: ye.memoizedState,
        baseState: ye.baseState,
        baseQueue: ye.baseQueue,
        queue: ye.queue,
        next: null,
      }),
      xe === null ? (ce.memoizedState = xe = e) : (xe = xe.next = e);
  }
  return xe;
}
function nl(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function fi(e) {
  var t = lt(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = ye,
    l = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = s.next), (s.next = i);
    }
    (r.baseQueue = l = s), (n.pending = null);
  }
  if (l !== null) {
    (s = l.next), (r = r.baseState);
    var a = (i = null),
      u = null,
      c = s;
    do {
      var m = c.lane;
      if ((bn & m) === m)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var f = {
          lane: m,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        u === null ? ((a = u = f), (i = r)) : (u = u.next = f),
          (ce.lanes |= m),
          (En |= m);
      }
      c = c.next;
    } while (c !== null && c !== s);
    u === null ? (i = r) : (u.next = a),
      gt(r, t.memoizedState) || (Re = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (s = l.lane), (ce.lanes |= s), (En |= s), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function pi(e) {
  var t = lt(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    s = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (s = e(s, i.action)), (i = i.next);
    while (i !== l);
    gt(s, t.memoizedState) || (Re = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, r];
}
function fd() {}
function pd(e, t) {
  var n = ce,
    r = lt(),
    l = t(),
    s = !gt(r.memoizedState, l);
  if (
    (s && ((r.memoizedState = l), (Re = !0)),
    (r = r.queue),
    ia(gd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (xe !== null && xe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      rl(9, hd.bind(null, n, r, l, t), void 0, null),
      we === null)
    )
      throw Error(C(349));
    bn & 30 || md(n, t, l);
  }
  return l;
}
function md(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ce.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ce.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function hd(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), yd(t) && vd(e);
}
function gd(e, t, n) {
  return n(function () {
    yd(t) && vd(e);
  });
}
function yd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !gt(e, n);
  } catch {
    return !0;
  }
}
function vd(e) {
  var t = Ft(e, 1);
  t !== null && ht(t, e, 1, -1);
}
function mu(e) {
  var t = St();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: nl,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Rm.bind(null, ce, e)),
    [t.memoizedState, e]
  );
}
function rl(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ce.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ce.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function xd() {
  return lt().memoizedState;
}
function Ul(e, t, n, r) {
  var l = St();
  (ce.flags |= e),
    (l.memoizedState = rl(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ds(e, t, n, r) {
  var l = lt();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (ye !== null) {
    var i = ye.memoizedState;
    if (((s = i.destroy), r !== null && ra(r, i.deps))) {
      l.memoizedState = rl(t, n, s, r);
      return;
    }
  }
  (ce.flags |= e), (l.memoizedState = rl(1 | t, n, s, r));
}
function hu(e, t) {
  return Ul(8390656, 8, e, t);
}
function ia(e, t) {
  return Ds(2048, 8, e, t);
}
function wd(e, t) {
  return Ds(4, 2, e, t);
}
function Nd(e, t) {
  return Ds(4, 4, e, t);
}
function Sd(e, t) {
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
function kd(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ds(4, 4, Sd.bind(null, t, e), n)
  );
}
function oa() {}
function jd(e, t) {
  var n = lt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ra(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function bd(e, t) {
  var n = lt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ra(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Ed(e, t, n) {
  return bn & 21
    ? (gt(n, t) || ((n = Oc()), (ce.lanes |= n), (En |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Re = !0)), (e.memoizedState = n));
}
function $m(e, t) {
  var n = Z;
  (Z = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = di.transition;
  di.transition = {};
  try {
    e(!1), t();
  } finally {
    (Z = n), (di.transition = r);
  }
}
function Cd() {
  return lt().memoizedState;
}
function Fm(e, t, n) {
  var r = rn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Pd(e))
  )
    Td(t, n);
  else if (((n = ud(e, t, n, r)), n !== null)) {
    var l = _e();
    ht(n, e, r, l), Dd(n, t, r);
  }
}
function Rm(e, t, n) {
  var r = rn(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Pd(e)) Td(t, l);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var i = t.lastRenderedState,
          a = s(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = a), gt(a, i))) {
          var u = t.interleaved;
          u === null
            ? ((l.next = l), Jo(t))
            : ((l.next = u.next), (u.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = ud(e, t, l, r)),
      n !== null && ((l = _e()), ht(n, e, r, l), Dd(n, t, r));
  }
}
function Pd(e) {
  var t = e.alternate;
  return e === ce || (t !== null && t === ce);
}
function Td(e, t) {
  $r = cs = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Dd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), zo(e, n);
  }
}
var ds = {
    readContext: rt,
    useCallback: Ee,
    useContext: Ee,
    useEffect: Ee,
    useImperativeHandle: Ee,
    useInsertionEffect: Ee,
    useLayoutEffect: Ee,
    useMemo: Ee,
    useReducer: Ee,
    useRef: Ee,
    useState: Ee,
    useDebugValue: Ee,
    useDeferredValue: Ee,
    useTransition: Ee,
    useMutableSource: Ee,
    useSyncExternalStore: Ee,
    useId: Ee,
    unstable_isNewReconciler: !1,
  },
  zm = {
    readContext: rt,
    useCallback: function (e, t) {
      return (St().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: rt,
    useEffect: hu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ul(4194308, 4, Sd.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ul(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ul(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = St();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = St();
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
        (e = e.dispatch = Fm.bind(null, ce, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = St();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: mu,
    useDebugValue: oa,
    useDeferredValue: function (e) {
      return (St().memoizedState = e);
    },
    useTransition: function () {
      var e = mu(!1),
        t = e[0];
      return (e = $m.bind(null, e[1])), (St().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ce,
        l = St();
      if (oe) {
        if (n === void 0) throw Error(C(407));
        n = n();
      } else {
        if (((n = t()), we === null)) throw Error(C(349));
        bn & 30 || md(r, t, n);
      }
      l.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (l.queue = s),
        hu(gd.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        rl(9, hd.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = St(),
        t = we.identifierPrefix;
      if (oe) {
        var n = Dt,
          r = Tt;
        (n = (r & ~(1 << (32 - mt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = tl++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Lm++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Im = {
    readContext: rt,
    useCallback: jd,
    useContext: rt,
    useEffect: ia,
    useImperativeHandle: kd,
    useInsertionEffect: wd,
    useLayoutEffect: Nd,
    useMemo: bd,
    useReducer: fi,
    useRef: xd,
    useState: function () {
      return fi(nl);
    },
    useDebugValue: oa,
    useDeferredValue: function (e) {
      var t = lt();
      return Ed(t, ye.memoizedState, e);
    },
    useTransition: function () {
      var e = fi(nl)[0],
        t = lt().memoizedState;
      return [e, t];
    },
    useMutableSource: fd,
    useSyncExternalStore: pd,
    useId: Cd,
    unstable_isNewReconciler: !1,
  },
  Am = {
    readContext: rt,
    useCallback: jd,
    useContext: rt,
    useEffect: ia,
    useImperativeHandle: kd,
    useInsertionEffect: wd,
    useLayoutEffect: Nd,
    useMemo: bd,
    useReducer: pi,
    useRef: xd,
    useState: function () {
      return pi(nl);
    },
    useDebugValue: oa,
    useDeferredValue: function (e) {
      var t = lt();
      return ye === null ? (t.memoizedState = e) : Ed(t, ye.memoizedState, e);
    },
    useTransition: function () {
      var e = pi(nl)[0],
        t = lt().memoizedState;
      return [e, t];
    },
    useMutableSource: fd,
    useSyncExternalStore: pd,
    useId: Cd,
    unstable_isNewReconciler: !1,
  };
function ct(e, t) {
  if (e && e.defaultProps) {
    (t = de({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function to(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : de({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Os = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Dn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = _e(),
      l = rn(e),
      s = Ot(r, l);
    (s.payload = t),
      n != null && (s.callback = n),
      (t = tn(e, s, l)),
      t !== null && (ht(t, e, l, r), Il(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = _e(),
      l = rn(e),
      s = Ot(r, l);
    (s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = tn(e, s, l)),
      t !== null && (ht(t, e, l, r), Il(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = _e(),
      r = rn(e),
      l = Ot(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = tn(e, l, r)),
      t !== null && (ht(t, e, r, n), Il(t, e, r));
  },
};
function gu(e, t, n, r, l, s, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, s, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Gr(n, r) || !Gr(l, s)
      : !0
  );
}
function Od(e, t, n) {
  var r = !1,
    l = on,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = rt(s))
      : ((l = Ie(t) ? kn : De.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? er(e, l) : on)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Os),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function yu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Os.enqueueReplaceState(t, t.state, null);
}
function no(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), Zo(e);
  var s = t.contextType;
  typeof s == "object" && s !== null
    ? (l.context = rt(s))
    : ((s = Ie(t) ? kn : De.current), (l.context = er(e, s))),
    (l.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (to(e, t, s, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Os.enqueueReplaceState(l, l.state, null),
      as(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function lr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += mp(r)), (r = r.return);
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
function mi(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ro(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Um = typeof WeakMap == "function" ? WeakMap : Map;
function Md(e, t, n) {
  (n = Ot(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      ps || ((ps = !0), (mo = r)), ro(e, t);
    }),
    n
  );
}
function _d(e, t, n) {
  (n = Ot(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        ro(e, t);
      });
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        ro(e, t),
          typeof r != "function" &&
            (nn === null ? (nn = new Set([this])) : nn.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function vu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Um();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = th.bind(null, e, t, n)), t.then(e, e));
}
function xu(e) {
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
function wu(e, t, n, r, l) {
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
              : ((t = Ot(-1, 1)), (t.tag = 2), tn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Hm = zt.ReactCurrentOwner,
  Re = !1;
function Oe(e, t, n, r) {
  t.child = e === null ? ad(t, null, n, r) : nr(t, e.child, n, r);
}
function Nu(e, t, n, r, l) {
  n = n.render;
  var s = t.ref;
  return (
    Kn(t, l),
    (r = la(e, t, n, r, s, l)),
    (n = sa()),
    e !== null && !Re
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Rt(e, t, l))
      : (oe && n && Vo(t), (t.flags |= 1), Oe(e, t, r, l), t.child)
  );
}
function Su(e, t, n, r, l) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !ha(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), Ld(e, t, s, r, l))
      : ((e = Bl(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & l))) {
    var i = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Gr), n(i, r) && e.ref === t.ref)
    )
      return Rt(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = ln(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Ld(e, t, n, r, l) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (Gr(s, r) && e.ref === t.ref)
      if (((Re = !1), (t.pendingProps = r = s), (e.lanes & l) !== 0))
        e.flags & 131072 && (Re = !0);
      else return (t.lanes = e.lanes), Rt(e, t, l);
  }
  return lo(e, t, n, r, l);
}
function $d(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        re(Bn, We),
        (We |= n);
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
          re(Bn, We),
          (We |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        re(Bn, We),
        (We |= r);
    }
  else
    s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      re(Bn, We),
      (We |= r);
  return Oe(e, t, l, n), t.child;
}
function Fd(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function lo(e, t, n, r, l) {
  var s = Ie(n) ? kn : De.current;
  return (
    (s = er(t, s)),
    Kn(t, l),
    (n = la(e, t, n, r, s, l)),
    (r = sa()),
    e !== null && !Re
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Rt(e, t, l))
      : (oe && r && Vo(t), (t.flags |= 1), Oe(e, t, n, l), t.child)
  );
}
function ku(e, t, n, r, l) {
  if (Ie(n)) {
    var s = !0;
    rs(t);
  } else s = !1;
  if ((Kn(t, l), t.stateNode === null))
    Hl(e, t), Od(t, n, r), no(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      a = t.memoizedProps;
    i.props = a;
    var u = i.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = rt(c))
      : ((c = Ie(n) ? kn : De.current), (c = er(t, c)));
    var m = n.getDerivedStateFromProps,
      f =
        typeof m == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((a !== r || u !== c) && yu(t, i, r, c)),
      (qt = !1);
    var v = t.memoizedState;
    (i.state = v),
      as(t, r, i, l),
      (u = t.memoizedState),
      a !== r || v !== u || ze.current || qt
        ? (typeof m == "function" && (to(t, n, m, r), (u = t.memoizedState)),
          (a = qt || gu(t, n, a, r, v, u, c))
            ? (f ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (i.props = r),
          (i.state = u),
          (i.context = c),
          (r = a))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      cd(e, t),
      (a = t.memoizedProps),
      (c = t.type === t.elementType ? a : ct(t.type, a)),
      (i.props = c),
      (f = t.pendingProps),
      (v = i.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = rt(u))
        : ((u = Ie(n) ? kn : De.current), (u = er(t, u)));
    var x = n.getDerivedStateFromProps;
    (m =
      typeof x == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((a !== f || v !== u) && yu(t, i, r, u)),
      (qt = !1),
      (v = t.memoizedState),
      (i.state = v),
      as(t, r, i, l);
    var w = t.memoizedState;
    a !== f || v !== w || ze.current || qt
      ? (typeof x == "function" && (to(t, n, x, r), (w = t.memoizedState)),
        (c = qt || gu(t, n, c, r, v, w, u) || !1)
          ? (m ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, w, u),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, w, u)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (a === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (i.props = r),
        (i.state = w),
        (i.context = u),
        (r = c))
      : (typeof i.componentDidUpdate != "function" ||
          (a === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return so(e, t, n, r, s, l);
}
function so(e, t, n, r, l, s) {
  Fd(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && au(t, n, !1), Rt(e, t, s);
  (r = t.stateNode), (Hm.current = t);
  var a =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = nr(t, e.child, null, s)), (t.child = nr(t, null, a, s)))
      : Oe(e, t, a, s),
    (t.memoizedState = r.state),
    l && au(t, n, !0),
    t.child
  );
}
function Rd(e) {
  var t = e.stateNode;
  t.pendingContext
    ? ou(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && ou(e, t.context, !1),
    ea(e, t.containerInfo);
}
function ju(e, t, n, r, l) {
  return tr(), Yo(l), (t.flags |= 256), Oe(e, t, n, r), t.child;
}
var io = { dehydrated: null, treeContext: null, retryLane: 0 };
function oo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function zd(e, t, n) {
  var r = t.pendingProps,
    l = ue.current,
    s = !1,
    i = (t.flags & 128) !== 0,
    a;
  if (
    ((a = i) ||
      (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    a
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    re(ue, l & 1),
    e === null)
  )
    return (
      Zi(t),
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
          s
            ? ((r = t.mode),
              (s = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = i))
                : (s = Ls(i, r, 0, null)),
              (e = Nn(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = oo(n)),
              (t.memoizedState = io),
              e)
            : aa(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((a = l.dehydrated), a !== null)))
    return Wm(e, t, i, r, a, l, n);
  if (s) {
    (s = r.fallback), (i = t.mode), (l = e.child), (a = l.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = ln(l, u)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      a !== null ? (s = ln(a, s)) : ((s = Nn(s, i, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? oo(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (s.memoizedState = i),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = io),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = ln(s, { mode: "visible", children: r.children })),
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
function aa(e, t) {
  return (
    (t = Ls({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Pl(e, t, n, r) {
  return (
    r !== null && Yo(r),
    nr(t, e.child, null, n),
    (e = aa(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Wm(e, t, n, r, l, s, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = mi(Error(C(422)))), Pl(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((s = r.fallback),
        (l = t.mode),
        (r = Ls({ mode: "visible", children: r.children }, l, 0, null)),
        (s = Nn(s, l, i, null)),
        (s.flags |= 2),
        (r.return = t),
        (s.return = t),
        (r.sibling = s),
        (t.child = r),
        t.mode & 1 && nr(t, e.child, null, i),
        (t.child.memoizedState = oo(i)),
        (t.memoizedState = io),
        s);
  if (!(t.mode & 1)) return Pl(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (s = Error(C(419))), (r = mi(s, r, void 0)), Pl(e, t, i, r);
  }
  if (((a = (i & e.childLanes) !== 0), Re || a)) {
    if (((r = we), r !== null)) {
      switch (i & -i) {
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
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== s.retryLane &&
          ((s.retryLane = l), Ft(e, l), ht(r, e, l, -1));
    }
    return ma(), (r = mi(Error(C(421)))), Pl(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = nh.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (Be = en(l.nextSibling)),
      (Ve = t),
      (oe = !0),
      (ft = null),
      e !== null &&
        ((Ze[et++] = Tt),
        (Ze[et++] = Dt),
        (Ze[et++] = jn),
        (Tt = e.id),
        (Dt = e.overflow),
        (jn = t)),
      (t = aa(t, r.children)),
      (t.flags |= 4096),
      t);
}
function bu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), eo(e.return, t, n);
}
function hi(e, t, n, r, l) {
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
function Id(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    s = r.tail;
  if ((Oe(e, t, r.children, n), (r = ue.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && bu(e, n, t);
        else if (e.tag === 19) bu(e, n, t);
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
  if ((re(ue, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && us(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          hi(t, !1, l, n, s);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && us(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        hi(t, !0, n, null, s);
        break;
      case "together":
        hi(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Hl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Rt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (En |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(C(153));
  if (t.child !== null) {
    for (
      e = t.child, n = ln(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = ln(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function qm(e, t, n) {
  switch (t.tag) {
    case 3:
      Rd(t), tr();
      break;
    case 5:
      dd(t);
      break;
    case 1:
      Ie(t.type) && rs(t);
      break;
    case 4:
      ea(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      re(is, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (re(ue, ue.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? zd(e, t, n)
          : (re(ue, ue.current & 1),
            (e = Rt(e, t, n)),
            e !== null ? e.sibling : null);
      re(ue, ue.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Id(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        re(ue, ue.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), $d(e, t, n);
  }
  return Rt(e, t, n);
}
var Ad, ao, Ud, Hd;
Ad = function (e, t) {
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
ao = function () {};
Ud = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), yn(bt.current);
    var s = null;
    switch (n) {
      case "input":
        (l = Di(e, l)), (r = Di(e, r)), (s = []);
        break;
      case "select":
        (l = de({}, l, { value: void 0 })),
          (r = de({}, r, { value: void 0 })),
          (s = []);
        break;
      case "textarea":
        (l = _i(e, l)), (r = _i(e, r)), (s = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = ts);
    }
    $i(n, r);
    var i;
    n = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var a = l[c];
          for (i in a) a.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Hr.hasOwnProperty(c)
              ? s || (s = [])
              : (s = s || []).push(c, null));
    for (c in r) {
      var u = r[c];
      if (
        ((a = l != null ? l[c] : void 0),
        r.hasOwnProperty(c) && u !== a && (u != null || a != null))
      )
        if (c === "style")
          if (a) {
            for (i in a)
              !a.hasOwnProperty(i) ||
                (u && u.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in u)
              u.hasOwnProperty(i) &&
                a[i] !== u[i] &&
                (n || (n = {}), (n[i] = u[i]));
          } else n || (s || (s = []), s.push(c, n)), (n = u);
        else
          c === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (a = a ? a.__html : void 0),
              u != null && a !== u && (s = s || []).push(c, u))
            : c === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (s = s || []).push(c, "" + u)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (Hr.hasOwnProperty(c)
                ? (u != null && c === "onScroll" && se("scroll", e),
                  s || a === u || (s = []))
                : (s = s || []).push(c, u));
    }
    n && (s = s || []).push("style", n);
    var c = s;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Hd = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function xr(e, t) {
  if (!oe)
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
function Ce(e) {
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
function Bm(e, t, n) {
  var r = t.pendingProps;
  switch ((Qo(t), t.tag)) {
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
      return Ce(t), null;
    case 1:
      return Ie(t.type) && ns(), Ce(t), null;
    case 3:
      return (
        (r = t.stateNode),
        rr(),
        ie(ze),
        ie(De),
        na(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (El(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), ft !== null && (yo(ft), (ft = null)))),
        ao(e, t),
        Ce(t),
        null
      );
    case 5:
      ta(t);
      var l = yn(el.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Ud(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(C(166));
          return Ce(t), null;
        }
        if (((e = yn(bt.current)), El(t))) {
          (r = t.stateNode), (n = t.type);
          var s = t.memoizedProps;
          switch (((r[kt] = t), (r[Jr] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              se("cancel", r), se("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              se("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Pr.length; l++) se(Pr[l], r);
              break;
            case "source":
              se("error", r);
              break;
            case "img":
            case "image":
            case "link":
              se("error", r), se("load", r);
              break;
            case "details":
              se("toggle", r);
              break;
            case "input":
              La(r, s), se("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!s.multiple }),
                se("invalid", r);
              break;
            case "textarea":
              Fa(r, s), se("invalid", r);
          }
          $i(n, s), (l = null);
          for (var i in s)
            if (s.hasOwnProperty(i)) {
              var a = s[i];
              i === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (s.suppressHydrationWarning !== !0 &&
                      bl(r.textContent, a, e),
                    (l = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (s.suppressHydrationWarning !== !0 &&
                      bl(r.textContent, a, e),
                    (l = ["children", "" + a]))
                : Hr.hasOwnProperty(i) &&
                  a != null &&
                  i === "onScroll" &&
                  se("scroll", r);
            }
          switch (n) {
            case "input":
              yl(r), $a(r, s, !0);
              break;
            case "textarea":
              yl(r), Ra(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = ts);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = gc(n)),
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
            (e[kt] = t),
            (e[Jr] = r),
            Ad(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = Fi(n, r)), n)) {
              case "dialog":
                se("cancel", e), se("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                se("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Pr.length; l++) se(Pr[l], e);
                l = r;
                break;
              case "source":
                se("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                se("error", e), se("load", e), (l = r);
                break;
              case "details":
                se("toggle", e), (l = r);
                break;
              case "input":
                La(e, r), (l = Di(e, r)), se("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = de({}, r, { value: void 0 })),
                  se("invalid", e);
                break;
              case "textarea":
                Fa(e, r), (l = _i(e, r)), se("invalid", e);
                break;
              default:
                l = r;
            }
            $i(n, l), (a = l);
            for (s in a)
              if (a.hasOwnProperty(s)) {
                var u = a[s];
                s === "style"
                  ? xc(e, u)
                  : s === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && yc(e, u))
                  : s === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && Wr(e, u)
                    : typeof u == "number" && Wr(e, "" + u)
                  : s !== "suppressContentEditableWarning" &&
                    s !== "suppressHydrationWarning" &&
                    s !== "autoFocus" &&
                    (Hr.hasOwnProperty(s)
                      ? u != null && s === "onScroll" && se("scroll", e)
                      : u != null && Mo(e, s, u, i));
              }
            switch (n) {
              case "input":
                yl(e), $a(e, r, !1);
                break;
              case "textarea":
                yl(e), Ra(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + sn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? Vn(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      Vn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = ts);
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
      return Ce(t), null;
    case 6:
      if (e && t.stateNode != null) Hd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(C(166));
        if (((n = yn(el.current)), yn(bt.current), El(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[kt] = t),
            (s = r.nodeValue !== n) && ((e = Ve), e !== null))
          )
            switch (e.tag) {
              case 3:
                bl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  bl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[kt] = t),
            (t.stateNode = r);
      }
      return Ce(t), null;
    case 13:
      if (
        (ie(ue),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (oe && Be !== null && t.mode & 1 && !(t.flags & 128))
          id(), tr(), (t.flags |= 98560), (s = !1);
        else if (((s = El(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(C(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(C(317));
            s[kt] = t;
          } else
            tr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ce(t), (s = !1);
        } else ft !== null && (yo(ft), (ft = null)), (s = !0);
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ue.current & 1 ? ve === 0 && (ve = 3) : ma())),
          t.updateQueue !== null && (t.flags |= 4),
          Ce(t),
          null);
    case 4:
      return (
        rr(), ao(e, t), e === null && Kr(t.stateNode.containerInfo), Ce(t), null
      );
    case 10:
      return Xo(t.type._context), Ce(t), null;
    case 17:
      return Ie(t.type) && ns(), Ce(t), null;
    case 19:
      if ((ie(ue), (s = t.memoizedState), s === null)) return Ce(t), null;
      if (((r = (t.flags & 128) !== 0), (i = s.rendering), i === null))
        if (r) xr(s, !1);
        else {
          if (ve !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = us(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    xr(s, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (i = s.alternate),
                    i === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = i.childLanes),
                        (s.lanes = i.lanes),
                        (s.child = i.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = i.memoizedProps),
                        (s.memoizedState = i.memoizedState),
                        (s.updateQueue = i.updateQueue),
                        (s.type = i.type),
                        (e = i.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return re(ue, (ue.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          s.tail !== null &&
            me() > sr &&
            ((t.flags |= 128), (r = !0), xr(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = us(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              xr(s, !0),
              s.tail === null && s.tailMode === "hidden" && !i.alternate && !oe)
            )
              return Ce(t), null;
          } else
            2 * me() - s.renderingStartTime > sr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), xr(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = s.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (s.last = i));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = me()),
          (t.sibling = null),
          (n = ue.current),
          re(ue, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ce(t), null);
    case 22:
    case 23:
      return (
        pa(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? We & 1073741824 && (Ce(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ce(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(C(156, t.tag));
}
function Vm(e, t) {
  switch ((Qo(t), t.tag)) {
    case 1:
      return (
        Ie(t.type) && ns(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        rr(),
        ie(ze),
        ie(De),
        na(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return ta(t), null;
    case 13:
      if (
        (ie(ue), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(C(340));
        tr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ie(ue), null;
    case 4:
      return rr(), null;
    case 10:
      return Xo(t.type._context), null;
    case 22:
    case 23:
      return pa(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Tl = !1,
  Pe = !1,
  Qm = typeof WeakSet == "function" ? WeakSet : Set,
  _ = null;
function qn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        pe(e, t, r);
      }
    else n.current = null;
}
function uo(e, t, n) {
  try {
    n();
  } catch (r) {
    pe(e, t, r);
  }
}
var Eu = !1;
function Ym(e, t) {
  if (((Vi = Jl), (e = Qc()), Bo(e))) {
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
          var i = 0,
            a = -1,
            u = -1,
            c = 0,
            m = 0,
            f = e,
            v = null;
          t: for (;;) {
            for (
              var x;
              f !== n || (l !== 0 && f.nodeType !== 3) || (a = i + l),
                f !== s || (r !== 0 && f.nodeType !== 3) || (u = i + r),
                f.nodeType === 3 && (i += f.nodeValue.length),
                (x = f.firstChild) !== null;

            )
              (v = f), (f = x);
            for (;;) {
              if (f === e) break t;
              if (
                (v === n && ++c === l && (a = i),
                v === s && ++m === r && (u = i),
                (x = f.nextSibling) !== null)
              )
                break;
              (f = v), (v = f.parentNode);
            }
            f = x;
          }
          n = a === -1 || u === -1 ? null : { start: a, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Qi = { focusedElem: e, selectionRange: n }, Jl = !1, _ = t; _ !== null; )
    if (((t = _), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (_ = e);
    else
      for (; _ !== null; ) {
        t = _;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var N = w.memoizedProps,
                    b = w.memoizedState,
                    g = t.stateNode,
                    d = g.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? N : ct(t.type, N),
                      b
                    );
                  g.__reactInternalSnapshotBeforeUpdate = d;
                }
                break;
              case 3:
                var h = t.stateNode.containerInfo;
                h.nodeType === 1
                  ? (h.textContent = "")
                  : h.nodeType === 9 &&
                    h.documentElement &&
                    h.removeChild(h.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(C(163));
            }
        } catch (y) {
          pe(t, t.return, y);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (_ = e);
          break;
        }
        _ = t.return;
      }
  return (w = Eu), (Eu = !1), w;
}
function Fr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var s = l.destroy;
        (l.destroy = void 0), s !== void 0 && uo(t, n, s);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Ms(e, t) {
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
function co(e) {
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
function Wd(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Wd(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[kt], delete t[Jr], delete t[Ki], delete t[Dm], delete t[Om])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function qd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Cu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || qd(e.return)) return null;
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
function fo(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = ts));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (fo(e, t, n), e = e.sibling; e !== null; ) fo(e, t, n), (e = e.sibling);
}
function po(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (po(e, t, n), e = e.sibling; e !== null; ) po(e, t, n), (e = e.sibling);
}
var ke = null,
  dt = !1;
function At(e, t, n) {
  for (n = n.child; n !== null; ) Bd(e, t, n), (n = n.sibling);
}
function Bd(e, t, n) {
  if (jt && typeof jt.onCommitFiberUnmount == "function")
    try {
      jt.onCommitFiberUnmount(js, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Pe || qn(n, t);
    case 6:
      var r = ke,
        l = dt;
      (ke = null),
        At(e, t, n),
        (ke = r),
        (dt = l),
        ke !== null &&
          (dt
            ? ((e = ke),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ke.removeChild(n.stateNode));
      break;
    case 18:
      ke !== null &&
        (dt
          ? ((e = ke),
            (n = n.stateNode),
            e.nodeType === 8
              ? ai(e.parentNode, n)
              : e.nodeType === 1 && ai(e, n),
            Qr(e))
          : ai(ke, n.stateNode));
      break;
    case 4:
      (r = ke),
        (l = dt),
        (ke = n.stateNode.containerInfo),
        (dt = !0),
        At(e, t, n),
        (ke = r),
        (dt = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Pe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var s = l,
            i = s.destroy;
          (s = s.tag),
            i !== void 0 && (s & 2 || s & 4) && uo(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      At(e, t, n);
      break;
    case 1:
      if (
        !Pe &&
        (qn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          pe(n, t, a);
        }
      At(e, t, n);
      break;
    case 21:
      At(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Pe = (r = Pe) || n.memoizedState !== null), At(e, t, n), (Pe = r))
        : At(e, t, n);
      break;
    default:
      At(e, t, n);
  }
}
function Pu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Qm()),
      t.forEach(function (r) {
        var l = rh.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function ut(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var s = e,
          i = t,
          a = i;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (ke = a.stateNode), (dt = !1);
              break e;
            case 3:
              (ke = a.stateNode.containerInfo), (dt = !0);
              break e;
            case 4:
              (ke = a.stateNode.containerInfo), (dt = !0);
              break e;
          }
          a = a.return;
        }
        if (ke === null) throw Error(C(160));
        Bd(s, i, l), (ke = null), (dt = !1);
        var u = l.alternate;
        u !== null && (u.return = null), (l.return = null);
      } catch (c) {
        pe(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Vd(t, e), (t = t.sibling);
}
function Vd(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ut(t, e), Nt(e), r & 4)) {
        try {
          Fr(3, e, e.return), Ms(3, e);
        } catch (N) {
          pe(e, e.return, N);
        }
        try {
          Fr(5, e, e.return);
        } catch (N) {
          pe(e, e.return, N);
        }
      }
      break;
    case 1:
      ut(t, e), Nt(e), r & 512 && n !== null && qn(n, n.return);
      break;
    case 5:
      if (
        (ut(t, e),
        Nt(e),
        r & 512 && n !== null && qn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Wr(l, "");
        } catch (N) {
          pe(e, e.return, N);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var s = e.memoizedProps,
          i = n !== null ? n.memoizedProps : s,
          a = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            a === "input" && s.type === "radio" && s.name != null && mc(l, s),
              Fi(a, i);
            var c = Fi(a, s);
            for (i = 0; i < u.length; i += 2) {
              var m = u[i],
                f = u[i + 1];
              m === "style"
                ? xc(l, f)
                : m === "dangerouslySetInnerHTML"
                ? yc(l, f)
                : m === "children"
                ? Wr(l, f)
                : Mo(l, m, f, c);
            }
            switch (a) {
              case "input":
                Oi(l, s);
                break;
              case "textarea":
                hc(l, s);
                break;
              case "select":
                var v = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!s.multiple;
                var x = s.value;
                x != null
                  ? Vn(l, !!s.multiple, x, !1)
                  : v !== !!s.multiple &&
                    (s.defaultValue != null
                      ? Vn(l, !!s.multiple, s.defaultValue, !0)
                      : Vn(l, !!s.multiple, s.multiple ? [] : "", !1));
            }
            l[Jr] = s;
          } catch (N) {
            pe(e, e.return, N);
          }
      }
      break;
    case 6:
      if ((ut(t, e), Nt(e), r & 4)) {
        if (e.stateNode === null) throw Error(C(162));
        (l = e.stateNode), (s = e.memoizedProps);
        try {
          l.nodeValue = s;
        } catch (N) {
          pe(e, e.return, N);
        }
      }
      break;
    case 3:
      if (
        (ut(t, e), Nt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Qr(t.containerInfo);
        } catch (N) {
          pe(e, e.return, N);
        }
      break;
    case 4:
      ut(t, e), Nt(e);
      break;
    case 13:
      ut(t, e),
        Nt(e),
        (l = e.child),
        l.flags & 8192 &&
          ((s = l.memoizedState !== null),
          (l.stateNode.isHidden = s),
          !s ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (da = me())),
        r & 4 && Pu(e);
      break;
    case 22:
      if (
        ((m = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Pe = (c = Pe) || m), ut(t, e), (Pe = c)) : ut(t, e),
        Nt(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !m && e.mode & 1)
        )
          for (_ = e, m = e.child; m !== null; ) {
            for (f = _ = m; _ !== null; ) {
              switch (((v = _), (x = v.child), v.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Fr(4, v, v.return);
                  break;
                case 1:
                  qn(v, v.return);
                  var w = v.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = v), (n = v.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (N) {
                      pe(r, n, N);
                    }
                  }
                  break;
                case 5:
                  qn(v, v.return);
                  break;
                case 22:
                  if (v.memoizedState !== null) {
                    Du(f);
                    continue;
                  }
              }
              x !== null ? ((x.return = v), (_ = x)) : Du(f);
            }
            m = m.sibling;
          }
        e: for (m = null, f = e; ; ) {
          if (f.tag === 5) {
            if (m === null) {
              m = f;
              try {
                (l = f.stateNode),
                  c
                    ? ((s = l.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((a = f.stateNode),
                      (u = f.memoizedProps.style),
                      (i =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (a.style.display = vc("display", i)));
              } catch (N) {
                pe(e, e.return, N);
              }
            }
          } else if (f.tag === 6) {
            if (m === null)
              try {
                f.stateNode.nodeValue = c ? "" : f.memoizedProps;
              } catch (N) {
                pe(e, e.return, N);
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
            m === f && (m = null), (f = f.return);
          }
          m === f && (m = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      ut(t, e), Nt(e), r & 4 && Pu(e);
      break;
    case 21:
      break;
    default:
      ut(t, e), Nt(e);
  }
}
function Nt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (qd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(C(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Wr(l, ""), (r.flags &= -33));
          var s = Cu(e);
          po(e, s, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            a = Cu(e);
          fo(e, a, i);
          break;
        default:
          throw Error(C(161));
      }
    } catch (u) {
      pe(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Gm(e, t, n) {
  (_ = e), Qd(e);
}
function Qd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; _ !== null; ) {
    var l = _,
      s = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Tl;
      if (!i) {
        var a = l.alternate,
          u = (a !== null && a.memoizedState !== null) || Pe;
        a = Tl;
        var c = Pe;
        if (((Tl = i), (Pe = u) && !c))
          for (_ = l; _ !== null; )
            (i = _),
              (u = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Ou(l)
                : u !== null
                ? ((u.return = i), (_ = u))
                : Ou(l);
        for (; s !== null; ) (_ = s), Qd(s), (s = s.sibling);
        (_ = l), (Tl = a), (Pe = c);
      }
      Tu(e);
    } else
      l.subtreeFlags & 8772 && s !== null ? ((s.return = l), (_ = s)) : Tu(e);
  }
}
function Tu(e) {
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
              Pe || Ms(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Pe)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : ct(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var s = t.updateQueue;
              s !== null && pu(t, s, r);
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
                pu(t, i, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
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
                var c = t.alternate;
                if (c !== null) {
                  var m = c.memoizedState;
                  if (m !== null) {
                    var f = m.dehydrated;
                    f !== null && Qr(f);
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
              throw Error(C(163));
          }
        Pe || (t.flags & 512 && co(t));
      } catch (v) {
        pe(t, t.return, v);
      }
    }
    if (t === e) {
      _ = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (_ = n);
      break;
    }
    _ = t.return;
  }
}
function Du(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t === e) {
      _ = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (_ = n);
      break;
    }
    _ = t.return;
  }
}
function Ou(e) {
  for (; _ !== null; ) {
    var t = _;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ms(4, t);
          } catch (u) {
            pe(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              pe(t, l, u);
            }
          }
          var s = t.return;
          try {
            co(t);
          } catch (u) {
            pe(t, s, u);
          }
          break;
        case 5:
          var i = t.return;
          try {
            co(t);
          } catch (u) {
            pe(t, i, u);
          }
      }
    } catch (u) {
      pe(t, t.return, u);
    }
    if (t === e) {
      _ = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (_ = a);
      break;
    }
    _ = t.return;
  }
}
var Km = Math.ceil,
  fs = zt.ReactCurrentDispatcher,
  ua = zt.ReactCurrentOwner,
  nt = zt.ReactCurrentBatchConfig,
  Q = 0,
  we = null,
  he = null,
  je = 0,
  We = 0,
  Bn = un(0),
  ve = 0,
  ll = null,
  En = 0,
  _s = 0,
  ca = 0,
  Rr = null,
  Fe = null,
  da = 0,
  sr = 1 / 0,
  Ct = null,
  ps = !1,
  mo = null,
  nn = null,
  Dl = !1,
  Gt = null,
  ms = 0,
  zr = 0,
  ho = null,
  Wl = -1,
  ql = 0;
function _e() {
  return Q & 6 ? me() : Wl !== -1 ? Wl : (Wl = me());
}
function rn(e) {
  return e.mode & 1
    ? Q & 2 && je !== 0
      ? je & -je
      : _m.transition !== null
      ? (ql === 0 && (ql = Oc()), ql)
      : ((e = Z),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : zc(e.type))),
        e)
    : 1;
}
function ht(e, t, n, r) {
  if (50 < zr) throw ((zr = 0), (ho = null), Error(C(185)));
  al(e, n, r),
    (!(Q & 2) || e !== we) &&
      (e === we && (!(Q & 2) && (_s |= n), ve === 4 && Vt(e, je)),
      Ae(e, r),
      n === 1 && Q === 0 && !(t.mode & 1) && ((sr = me() + 500), Ts && cn()));
}
function Ae(e, t) {
  var n = e.callbackNode;
  _p(e, t);
  var r = Xl(e, e === we ? je : 0);
  if (r === 0)
    n !== null && Aa(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Aa(n), t === 1))
      e.tag === 0 ? Mm(Mu.bind(null, e)) : rd(Mu.bind(null, e)),
        Pm(function () {
          !(Q & 6) && cn();
        }),
        (n = null);
    else {
      switch (Mc(r)) {
        case 1:
          n = Ro;
          break;
        case 4:
          n = Tc;
          break;
        case 16:
          n = Kl;
          break;
        case 536870912:
          n = Dc;
          break;
        default:
          n = Kl;
      }
      n = tf(n, Yd.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Yd(e, t) {
  if (((Wl = -1), (ql = 0), Q & 6)) throw Error(C(327));
  var n = e.callbackNode;
  if (Xn() && e.callbackNode !== n) return null;
  var r = Xl(e, e === we ? je : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = hs(e, r);
  else {
    t = r;
    var l = Q;
    Q |= 2;
    var s = Kd();
    (we !== e || je !== t) && ((Ct = null), (sr = me() + 500), wn(e, t));
    do
      try {
        Zm();
        break;
      } catch (a) {
        Gd(e, a);
      }
    while (!0);
    Ko(),
      (fs.current = s),
      (Q = l),
      he !== null ? (t = 0) : ((we = null), (je = 0), (t = ve));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Ui(e)), l !== 0 && ((r = l), (t = go(e, l)))), t === 1)
    )
      throw ((n = ll), wn(e, 0), Vt(e, r), Ae(e, me()), n);
    if (t === 6) Vt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Xm(l) &&
          ((t = hs(e, r)),
          t === 2 && ((s = Ui(e)), s !== 0 && ((r = s), (t = go(e, s)))),
          t === 1))
      )
        throw ((n = ll), wn(e, 0), Vt(e, r), Ae(e, me()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(C(345));
        case 2:
          fn(e, Fe, Ct);
          break;
        case 3:
          if (
            (Vt(e, r), (r & 130023424) === r && ((t = da + 500 - me()), 10 < t))
          ) {
            if (Xl(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              _e(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Gi(fn.bind(null, e, Fe, Ct), t);
            break;
          }
          fn(e, Fe, Ct);
          break;
        case 4:
          if ((Vt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - mt(r);
            (s = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~s);
          }
          if (
            ((r = l),
            (r = me() - r),
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
                : 1960 * Km(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Gi(fn.bind(null, e, Fe, Ct), r);
            break;
          }
          fn(e, Fe, Ct);
          break;
        case 5:
          fn(e, Fe, Ct);
          break;
        default:
          throw Error(C(329));
      }
    }
  }
  return Ae(e, me()), e.callbackNode === n ? Yd.bind(null, e) : null;
}
function go(e, t) {
  var n = Rr;
  return (
    e.current.memoizedState.isDehydrated && (wn(e, t).flags |= 256),
    (e = hs(e, t)),
    e !== 2 && ((t = Fe), (Fe = n), t !== null && yo(t)),
    e
  );
}
function yo(e) {
  Fe === null ? (Fe = e) : Fe.push.apply(Fe, e);
}
function Xm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            s = l.getSnapshot;
          l = l.value;
          try {
            if (!gt(s(), l)) return !1;
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
function Vt(e, t) {
  for (
    t &= ~ca,
      t &= ~_s,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - mt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Mu(e) {
  if (Q & 6) throw Error(C(327));
  Xn();
  var t = Xl(e, 0);
  if (!(t & 1)) return Ae(e, me()), null;
  var n = hs(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ui(e);
    r !== 0 && ((t = r), (n = go(e, r)));
  }
  if (n === 1) throw ((n = ll), wn(e, 0), Vt(e, t), Ae(e, me()), n);
  if (n === 6) throw Error(C(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    fn(e, Fe, Ct),
    Ae(e, me()),
    null
  );
}
function fa(e, t) {
  var n = Q;
  Q |= 1;
  try {
    return e(t);
  } finally {
    (Q = n), Q === 0 && ((sr = me() + 500), Ts && cn());
  }
}
function Cn(e) {
  Gt !== null && Gt.tag === 0 && !(Q & 6) && Xn();
  var t = Q;
  Q |= 1;
  var n = nt.transition,
    r = Z;
  try {
    if (((nt.transition = null), (Z = 1), e)) return e();
  } finally {
    (Z = r), (nt.transition = n), (Q = t), !(Q & 6) && cn();
  }
}
function pa() {
  (We = Bn.current), ie(Bn);
}
function wn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Cm(n)), he !== null))
    for (n = he.return; n !== null; ) {
      var r = n;
      switch ((Qo(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ns();
          break;
        case 3:
          rr(), ie(ze), ie(De), na();
          break;
        case 5:
          ta(r);
          break;
        case 4:
          rr();
          break;
        case 13:
          ie(ue);
          break;
        case 19:
          ie(ue);
          break;
        case 10:
          Xo(r.type._context);
          break;
        case 22:
        case 23:
          pa();
      }
      n = n.return;
    }
  if (
    ((we = e),
    (he = e = ln(e.current, null)),
    (je = We = t),
    (ve = 0),
    (ll = null),
    (ca = _s = En = 0),
    (Fe = Rr = null),
    gn !== null)
  ) {
    for (t = 0; t < gn.length; t++)
      if (((n = gn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          s = n.pending;
        if (s !== null) {
          var i = s.next;
          (s.next = l), (r.next = i);
        }
        n.pending = r;
      }
    gn = null;
  }
  return e;
}
function Gd(e, t) {
  do {
    var n = he;
    try {
      if ((Ko(), (Al.current = ds), cs)) {
        for (var r = ce.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        cs = !1;
      }
      if (
        ((bn = 0),
        (xe = ye = ce = null),
        ($r = !1),
        (tl = 0),
        (ua.current = null),
        n === null || n.return === null)
      ) {
        (ve = 1), (ll = t), (he = null);
        break;
      }
      e: {
        var s = e,
          i = n.return,
          a = n,
          u = t;
        if (
          ((t = je),
          (a.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var c = u,
            m = a,
            f = m.tag;
          if (!(m.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var v = m.alternate;
            v
              ? ((m.updateQueue = v.updateQueue),
                (m.memoizedState = v.memoizedState),
                (m.lanes = v.lanes))
              : ((m.updateQueue = null), (m.memoizedState = null));
          }
          var x = xu(i);
          if (x !== null) {
            (x.flags &= -257),
              wu(x, i, a, s, t),
              x.mode & 1 && vu(s, c, t),
              (t = x),
              (u = c);
            var w = t.updateQueue;
            if (w === null) {
              var N = new Set();
              N.add(u), (t.updateQueue = N);
            } else w.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              vu(s, c, t), ma();
              break e;
            }
            u = Error(C(426));
          }
        } else if (oe && a.mode & 1) {
          var b = xu(i);
          if (b !== null) {
            !(b.flags & 65536) && (b.flags |= 256),
              wu(b, i, a, s, t),
              Yo(lr(u, a));
            break e;
          }
        }
        (s = u = lr(u, a)),
          ve !== 4 && (ve = 2),
          Rr === null ? (Rr = [s]) : Rr.push(s),
          (s = i);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (t &= -t), (s.lanes |= t);
              var g = Md(s, u, t);
              fu(s, g);
              break e;
            case 1:
              a = u;
              var d = s.type,
                h = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof d.getDerivedStateFromError == "function" ||
                  (h !== null &&
                    typeof h.componentDidCatch == "function" &&
                    (nn === null || !nn.has(h))))
              ) {
                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                var y = _d(s, a, t);
                fu(s, y);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      Jd(n);
    } catch (S) {
      (t = S), he === n && n !== null && (he = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Kd() {
  var e = fs.current;
  return (fs.current = ds), e === null ? ds : e;
}
function ma() {
  (ve === 0 || ve === 3 || ve === 2) && (ve = 4),
    we === null || (!(En & 268435455) && !(_s & 268435455)) || Vt(we, je);
}
function hs(e, t) {
  var n = Q;
  Q |= 2;
  var r = Kd();
  (we !== e || je !== t) && ((Ct = null), wn(e, t));
  do
    try {
      Jm();
      break;
    } catch (l) {
      Gd(e, l);
    }
  while (!0);
  if ((Ko(), (Q = n), (fs.current = r), he !== null)) throw Error(C(261));
  return (we = null), (je = 0), ve;
}
function Jm() {
  for (; he !== null; ) Xd(he);
}
function Zm() {
  for (; he !== null && !jp(); ) Xd(he);
}
function Xd(e) {
  var t = ef(e.alternate, e, We);
  (e.memoizedProps = e.pendingProps),
    t === null ? Jd(e) : (he = t),
    (ua.current = null);
}
function Jd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Vm(n, t)), n !== null)) {
        (n.flags &= 32767), (he = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ve = 6), (he = null);
        return;
      }
    } else if (((n = Bm(n, t, We)), n !== null)) {
      he = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      he = t;
      return;
    }
    he = t = e;
  } while (t !== null);
  ve === 0 && (ve = 5);
}
function fn(e, t, n) {
  var r = Z,
    l = nt.transition;
  try {
    (nt.transition = null), (Z = 1), eh(e, t, n, r);
  } finally {
    (nt.transition = l), (Z = r);
  }
  return null;
}
function eh(e, t, n, r) {
  do Xn();
  while (Gt !== null);
  if (Q & 6) throw Error(C(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(C(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (Lp(e, s),
    e === we && ((he = we = null), (je = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Dl ||
      ((Dl = !0),
      tf(Kl, function () {
        return Xn(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = nt.transition), (nt.transition = null);
    var i = Z;
    Z = 1;
    var a = Q;
    (Q |= 4),
      (ua.current = null),
      Ym(e, n),
      Vd(n, e),
      wm(Qi),
      (Jl = !!Vi),
      (Qi = Vi = null),
      (e.current = n),
      Gm(n),
      bp(),
      (Q = a),
      (Z = i),
      (nt.transition = s);
  } else e.current = n;
  if (
    (Dl && ((Dl = !1), (Gt = e), (ms = l)),
    (s = e.pendingLanes),
    s === 0 && (nn = null),
    Pp(n.stateNode),
    Ae(e, me()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (ps) throw ((ps = !1), (e = mo), (mo = null), e);
  return (
    ms & 1 && e.tag !== 0 && Xn(),
    (s = e.pendingLanes),
    s & 1 ? (e === ho ? zr++ : ((zr = 0), (ho = e))) : (zr = 0),
    cn(),
    null
  );
}
function Xn() {
  if (Gt !== null) {
    var e = Mc(ms),
      t = nt.transition,
      n = Z;
    try {
      if (((nt.transition = null), (Z = 16 > e ? 16 : e), Gt === null))
        var r = !1;
      else {
        if (((e = Gt), (Gt = null), (ms = 0), Q & 6)) throw Error(C(331));
        var l = Q;
        for (Q |= 4, _ = e.current; _ !== null; ) {
          var s = _,
            i = s.child;
          if (_.flags & 16) {
            var a = s.deletions;
            if (a !== null) {
              for (var u = 0; u < a.length; u++) {
                var c = a[u];
                for (_ = c; _ !== null; ) {
                  var m = _;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Fr(8, m, s);
                  }
                  var f = m.child;
                  if (f !== null) (f.return = m), (_ = f);
                  else
                    for (; _ !== null; ) {
                      m = _;
                      var v = m.sibling,
                        x = m.return;
                      if ((Wd(m), m === c)) {
                        _ = null;
                        break;
                      }
                      if (v !== null) {
                        (v.return = x), (_ = v);
                        break;
                      }
                      _ = x;
                    }
                }
              }
              var w = s.alternate;
              if (w !== null) {
                var N = w.child;
                if (N !== null) {
                  w.child = null;
                  do {
                    var b = N.sibling;
                    (N.sibling = null), (N = b);
                  } while (N !== null);
                }
              }
              _ = s;
            }
          }
          if (s.subtreeFlags & 2064 && i !== null) (i.return = s), (_ = i);
          else
            e: for (; _ !== null; ) {
              if (((s = _), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Fr(9, s, s.return);
                }
              var g = s.sibling;
              if (g !== null) {
                (g.return = s.return), (_ = g);
                break e;
              }
              _ = s.return;
            }
        }
        var d = e.current;
        for (_ = d; _ !== null; ) {
          i = _;
          var h = i.child;
          if (i.subtreeFlags & 2064 && h !== null) (h.return = i), (_ = h);
          else
            e: for (i = d; _ !== null; ) {
              if (((a = _), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ms(9, a);
                  }
                } catch (S) {
                  pe(a, a.return, S);
                }
              if (a === i) {
                _ = null;
                break e;
              }
              var y = a.sibling;
              if (y !== null) {
                (y.return = a.return), (_ = y);
                break e;
              }
              _ = a.return;
            }
        }
        if (
          ((Q = l), cn(), jt && typeof jt.onPostCommitFiberRoot == "function")
        )
          try {
            jt.onPostCommitFiberRoot(js, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (Z = n), (nt.transition = t);
    }
  }
  return !1;
}
function _u(e, t, n) {
  (t = lr(n, t)),
    (t = Md(e, t, 1)),
    (e = tn(e, t, 1)),
    (t = _e()),
    e !== null && (al(e, 1, t), Ae(e, t));
}
function pe(e, t, n) {
  if (e.tag === 3) _u(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        _u(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (nn === null || !nn.has(r)))
        ) {
          (e = lr(n, e)),
            (e = _d(t, e, 1)),
            (t = tn(t, e, 1)),
            (e = _e()),
            t !== null && (al(t, 1, e), Ae(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function th(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = _e()),
    (e.pingedLanes |= e.suspendedLanes & n),
    we === e &&
      (je & n) === n &&
      (ve === 4 || (ve === 3 && (je & 130023424) === je && 500 > me() - da)
        ? wn(e, 0)
        : (ca |= n)),
    Ae(e, t);
}
function Zd(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = wl), (wl <<= 1), !(wl & 130023424) && (wl = 4194304))
      : (t = 1));
  var n = _e();
  (e = Ft(e, t)), e !== null && (al(e, t, n), Ae(e, n));
}
function nh(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Zd(e, n);
}
function rh(e, t) {
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
      throw Error(C(314));
  }
  r !== null && r.delete(t), Zd(e, n);
}
var ef;
ef = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ze.current) Re = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Re = !1), qm(e, t, n);
      Re = !!(e.flags & 131072);
    }
  else (Re = !1), oe && t.flags & 1048576 && ld(t, ss, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Hl(e, t), (e = t.pendingProps);
      var l = er(t, De.current);
      Kn(t, n), (l = la(null, t, r, e, l, n));
      var s = sa();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ie(r) ? ((s = !0), rs(t)) : (s = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Zo(t),
            (l.updater = Os),
            (t.stateNode = l),
            (l._reactInternals = t),
            no(t, r, e, n),
            (t = so(null, t, r, !0, s, n)))
          : ((t.tag = 0), oe && s && Vo(t), Oe(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Hl(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = sh(r)),
          (e = ct(r, e)),
          l)
        ) {
          case 0:
            t = lo(null, t, r, e, n);
            break e;
          case 1:
            t = ku(null, t, r, e, n);
            break e;
          case 11:
            t = Nu(null, t, r, e, n);
            break e;
          case 14:
            t = Su(null, t, r, ct(r.type, e), n);
            break e;
        }
        throw Error(C(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ct(r, l)),
        lo(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ct(r, l)),
        ku(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Rd(t), e === null)) throw Error(C(387));
        (r = t.pendingProps),
          (s = t.memoizedState),
          (l = s.element),
          cd(e, t),
          as(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            (l = lr(Error(C(423)), t)), (t = ju(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = lr(Error(C(424)), t)), (t = ju(e, t, r, n, l));
            break e;
          } else
            for (
              Be = en(t.stateNode.containerInfo.firstChild),
                Ve = t,
                oe = !0,
                ft = null,
                n = ad(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((tr(), r === l)) {
            t = Rt(e, t, n);
            break e;
          }
          Oe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        dd(t),
        e === null && Zi(t),
        (r = t.type),
        (l = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (i = l.children),
        Yi(r, l) ? (i = null) : s !== null && Yi(r, s) && (t.flags |= 32),
        Fd(e, t),
        Oe(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Zi(t), null;
    case 13:
      return zd(e, t, n);
    case 4:
      return (
        ea(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = nr(t, null, r, n)) : Oe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ct(r, l)),
        Nu(e, t, r, l, n)
      );
    case 7:
      return Oe(e, t, t.pendingProps, n), t.child;
    case 8:
      return Oe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Oe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (s = t.memoizedProps),
          (i = l.value),
          re(is, r._currentValue),
          (r._currentValue = i),
          s !== null)
        )
          if (gt(s.value, i)) {
            if (s.children === l.children && !ze.current) {
              t = Rt(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var a = s.dependencies;
              if (a !== null) {
                i = s.child;
                for (var u = a.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (s.tag === 1) {
                      (u = Ot(-1, n & -n)), (u.tag = 2);
                      var c = s.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var m = c.pending;
                        m === null
                          ? (u.next = u)
                          : ((u.next = m.next), (m.next = u)),
                          (c.pending = u);
                      }
                    }
                    (s.lanes |= n),
                      (u = s.alternate),
                      u !== null && (u.lanes |= n),
                      eo(s.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (s.tag === 10) i = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((i = s.return), i === null)) throw Error(C(341));
                (i.lanes |= n),
                  (a = i.alternate),
                  a !== null && (a.lanes |= n),
                  eo(i, n, t),
                  (i = s.sibling);
              } else i = s.child;
              if (i !== null) i.return = s;
              else
                for (i = s; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((s = i.sibling), s !== null)) {
                    (s.return = i.return), (i = s);
                    break;
                  }
                  i = i.return;
                }
              s = i;
            }
        Oe(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        Kn(t, n),
        (l = rt(l)),
        (r = r(l)),
        (t.flags |= 1),
        Oe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = ct(r, t.pendingProps)),
        (l = ct(r.type, l)),
        Su(e, t, r, l, n)
      );
    case 15:
      return Ld(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ct(r, l)),
        Hl(e, t),
        (t.tag = 1),
        Ie(r) ? ((e = !0), rs(t)) : (e = !1),
        Kn(t, n),
        Od(t, r, l),
        no(t, r, l, n),
        so(null, t, r, !0, e, n)
      );
    case 19:
      return Id(e, t, n);
    case 22:
      return $d(e, t, n);
  }
  throw Error(C(156, t.tag));
};
function tf(e, t) {
  return Pc(e, t);
}
function lh(e, t, n, r) {
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
function tt(e, t, n, r) {
  return new lh(e, t, n, r);
}
function ha(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function sh(e) {
  if (typeof e == "function") return ha(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Lo)) return 11;
    if (e === $o) return 14;
  }
  return 2;
}
function ln(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = tt(e.tag, t, e.key, e.mode)),
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
function Bl(e, t, n, r, l, s) {
  var i = 2;
  if (((r = e), typeof e == "function")) ha(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case $n:
        return Nn(n.children, l, s, t);
      case _o:
        (i = 8), (l |= 8);
        break;
      case Ei:
        return (
          (e = tt(12, n, t, l | 2)), (e.elementType = Ei), (e.lanes = s), e
        );
      case Ci:
        return (e = tt(13, n, t, l)), (e.elementType = Ci), (e.lanes = s), e;
      case Pi:
        return (e = tt(19, n, t, l)), (e.elementType = Pi), (e.lanes = s), e;
      case dc:
        return Ls(n, l, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case uc:
              i = 10;
              break e;
            case cc:
              i = 9;
              break e;
            case Lo:
              i = 11;
              break e;
            case $o:
              i = 14;
              break e;
            case Wt:
              (i = 16), (r = null);
              break e;
          }
        throw Error(C(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = tt(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = s), t
  );
}
function Nn(e, t, n, r) {
  return (e = tt(7, e, r, t)), (e.lanes = n), e;
}
function Ls(e, t, n, r) {
  return (
    (e = tt(22, e, r, t)),
    (e.elementType = dc),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function gi(e, t, n) {
  return (e = tt(6, e, null, t)), (e.lanes = n), e;
}
function yi(e, t, n) {
  return (
    (t = tt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function ih(e, t, n, r, l) {
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
    (this.eventTimes = Xs(0)),
    (this.expirationTimes = Xs(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Xs(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function ga(e, t, n, r, l, s, i, a, u) {
  return (
    (e = new ih(e, t, n, a, u)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = tt(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Zo(s),
    e
  );
}
function oh(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Ln,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function nf(e) {
  if (!e) return on;
  e = e._reactInternals;
  e: {
    if (Dn(e) !== e || e.tag !== 1) throw Error(C(170));
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
    throw Error(C(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ie(n)) return nd(e, n, t);
  }
  return t;
}
function rf(e, t, n, r, l, s, i, a, u) {
  return (
    (e = ga(n, r, !0, e, l, s, i, a, u)),
    (e.context = nf(null)),
    (n = e.current),
    (r = _e()),
    (l = rn(n)),
    (s = Ot(r, l)),
    (s.callback = t ?? null),
    tn(n, s, l),
    (e.current.lanes = l),
    al(e, l, r),
    Ae(e, r),
    e
  );
}
function $s(e, t, n, r) {
  var l = t.current,
    s = _e(),
    i = rn(l);
  return (
    (n = nf(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ot(s, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = tn(l, t, i)),
    e !== null && (ht(e, l, i, s), Il(e, l, i)),
    i
  );
}
function gs(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Lu(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ya(e, t) {
  Lu(e, t), (e = e.alternate) && Lu(e, t);
}
function ah() {
  return null;
}
var lf =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function va(e) {
  this._internalRoot = e;
}
Fs.prototype.render = va.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(C(409));
  $s(e, t, null, null);
};
Fs.prototype.unmount = va.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Cn(function () {
      $s(null, e, null, null);
    }),
      (t[$t] = null);
  }
};
function Fs(e) {
  this._internalRoot = e;
}
Fs.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = $c();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Bt.length && t !== 0 && t < Bt[n].priority; n++);
    Bt.splice(n, 0, e), n === 0 && Rc(e);
  }
};
function xa(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Rs(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function $u() {}
function uh(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var c = gs(i);
        s.call(c);
      };
    }
    var i = rf(t, r, e, 0, null, !1, !1, "", $u);
    return (
      (e._reactRootContainer = i),
      (e[$t] = i.current),
      Kr(e.nodeType === 8 ? e.parentNode : e),
      Cn(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var c = gs(u);
      a.call(c);
    };
  }
  var u = ga(e, 0, !1, null, null, !1, !1, "", $u);
  return (
    (e._reactRootContainer = u),
    (e[$t] = u.current),
    Kr(e.nodeType === 8 ? e.parentNode : e),
    Cn(function () {
      $s(t, u, n, r);
    }),
    u
  );
}
function zs(e, t, n, r, l) {
  var s = n._reactRootContainer;
  if (s) {
    var i = s;
    if (typeof l == "function") {
      var a = l;
      l = function () {
        var u = gs(i);
        a.call(u);
      };
    }
    $s(t, i, e, l);
  } else i = uh(n, t, e, l, r);
  return gs(i);
}
_c = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Cr(t.pendingLanes);
        n !== 0 &&
          (zo(t, n | 1), Ae(t, me()), !(Q & 6) && ((sr = me() + 500), cn()));
      }
      break;
    case 13:
      Cn(function () {
        var r = Ft(e, 1);
        if (r !== null) {
          var l = _e();
          ht(r, e, 1, l);
        }
      }),
        ya(e, 1);
  }
};
Io = function (e) {
  if (e.tag === 13) {
    var t = Ft(e, 134217728);
    if (t !== null) {
      var n = _e();
      ht(t, e, 134217728, n);
    }
    ya(e, 134217728);
  }
};
Lc = function (e) {
  if (e.tag === 13) {
    var t = rn(e),
      n = Ft(e, t);
    if (n !== null) {
      var r = _e();
      ht(n, e, t, r);
    }
    ya(e, t);
  }
};
$c = function () {
  return Z;
};
Fc = function (e, t) {
  var n = Z;
  try {
    return (Z = e), t();
  } finally {
    Z = n;
  }
};
zi = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Oi(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var l = Ps(r);
            if (!l) throw Error(C(90));
            pc(r), Oi(r, l);
          }
        }
      }
      break;
    case "textarea":
      hc(e, n);
      break;
    case "select":
      (t = n.value), t != null && Vn(e, !!n.multiple, t, !1);
  }
};
Sc = fa;
kc = Cn;
var ch = { usingClientEntryPoint: !1, Events: [cl, In, Ps, wc, Nc, fa] },
  wr = {
    findFiberByHostInstance: hn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  dh = {
    bundleType: wr.bundleType,
    version: wr.version,
    rendererPackageName: wr.rendererPackageName,
    rendererConfig: wr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: zt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Ec(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: wr.findFiberByHostInstance || ah,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ol = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ol.isDisabled && Ol.supportsFiber)
    try {
      (js = Ol.inject(dh)), (jt = Ol);
    } catch {}
}
Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ch;
Ye.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!xa(t)) throw Error(C(200));
  return oh(e, t, null, n);
};
Ye.createRoot = function (e, t) {
  if (!xa(e)) throw Error(C(299));
  var n = !1,
    r = "",
    l = lf;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = ga(e, 1, !1, null, null, n, !1, r, l)),
    (e[$t] = t.current),
    Kr(e.nodeType === 8 ? e.parentNode : e),
    new va(t)
  );
};
Ye.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(C(188))
      : ((e = Object.keys(e).join(",")), Error(C(268, e)));
  return (e = Ec(t)), (e = e === null ? null : e.stateNode), e;
};
Ye.flushSync = function (e) {
  return Cn(e);
};
Ye.hydrate = function (e, t, n) {
  if (!Rs(t)) throw Error(C(200));
  return zs(null, e, t, !0, n);
};
Ye.hydrateRoot = function (e, t, n) {
  if (!xa(e)) throw Error(C(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    s = "",
    i = lf;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = rf(t, null, e, 1, n ?? null, l, !1, s, i)),
    (e[$t] = t.current),
    Kr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new Fs(t);
};
Ye.render = function (e, t, n) {
  if (!Rs(t)) throw Error(C(200));
  return zs(null, e, t, !1, n);
};
Ye.unmountComponentAtNode = function (e) {
  if (!Rs(e)) throw Error(C(40));
  return e._reactRootContainer
    ? (Cn(function () {
        zs(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[$t] = null);
        });
      }),
      !0)
    : !1;
};
Ye.unstable_batchedUpdates = fa;
Ye.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Rs(n)) throw Error(C(200));
  if (e == null || e._reactInternals === void 0) throw Error(C(38));
  return zs(e, t, n, !1, r);
};
Ye.version = "18.3.1-next-f1338f8080-20240426";
function sf() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sf);
    } catch (e) {
      console.error(e);
    }
}
sf(), (sc.exports = Ye);
var Is = sc.exports,
  of,
  Fu = Is;
(of = Fu.createRoot), Fu.hydrateRoot;
function yt(e) {
  const t = Object.prototype.toString.call(e);
  return e instanceof Date || (typeof e == "object" && t === "[object Date]")
    ? new e.constructor(+e)
    : typeof e == "number" ||
      t === "[object Number]" ||
      typeof e == "string" ||
      t === "[object String]"
    ? new Date(e)
    : new Date(NaN);
}
function Pn(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t);
}
const af = 6048e5,
  fh = 864e5;
let ph = {};
function As() {
  return ph;
}
function sl(e, t) {
  var a, u, c, m;
  const n = As(),
    r =
      (t == null ? void 0 : t.weekStartsOn) ??
      ((u = (a = t == null ? void 0 : t.locale) == null ? void 0 : a.options) ==
      null
        ? void 0
        : u.weekStartsOn) ??
      n.weekStartsOn ??
      ((m = (c = n.locale) == null ? void 0 : c.options) == null
        ? void 0
        : m.weekStartsOn) ??
      0,
    l = yt(e),
    s = l.getDay(),
    i = (s < r ? 7 : 0) + s - r;
  return l.setDate(l.getDate() - i), l.setHours(0, 0, 0, 0), l;
}
function ys(e) {
  return sl(e, { weekStartsOn: 1 });
}
function uf(e) {
  const t = yt(e),
    n = t.getFullYear(),
    r = Pn(e, 0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  const l = ys(r),
    s = Pn(e, 0);
  s.setFullYear(n, 0, 4), s.setHours(0, 0, 0, 0);
  const i = ys(s);
  return t.getTime() >= l.getTime()
    ? n + 1
    : t.getTime() >= i.getTime()
    ? n
    : n - 1;
}
function Ru(e) {
  const t = yt(e);
  return t.setHours(0, 0, 0, 0), t;
}
function zu(e) {
  const t = yt(e),
    n = new Date(
      Date.UTC(
        t.getFullYear(),
        t.getMonth(),
        t.getDate(),
        t.getHours(),
        t.getMinutes(),
        t.getSeconds(),
        t.getMilliseconds()
      )
    );
  return n.setUTCFullYear(t.getFullYear()), +e - +n;
}
function mh(e, t) {
  const n = Ru(e),
    r = Ru(t),
    l = +n - zu(n),
    s = +r - zu(r);
  return Math.round((l - s) / fh);
}
function hh(e) {
  const t = uf(e),
    n = Pn(e, 0);
  return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), ys(n);
}
function gh(e) {
  return (
    e instanceof Date ||
    (typeof e == "object" &&
      Object.prototype.toString.call(e) === "[object Date]")
  );
}
function yh(e) {
  if (!gh(e) && typeof e != "number") return !1;
  const t = yt(e);
  return !isNaN(Number(t));
}
function vh(e) {
  const t = yt(e),
    n = Pn(e, 0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
const xh = {
    lessThanXSeconds: {
      one: "less than a second",
      other: "less than {{count}} seconds",
    },
    xSeconds: { one: "1 second", other: "{{count}} seconds" },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
      one: "less than a minute",
      other: "less than {{count}} minutes",
    },
    xMinutes: { one: "1 minute", other: "{{count}} minutes" },
    aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" },
    xHours: { one: "1 hour", other: "{{count}} hours" },
    xDays: { one: "1 day", other: "{{count}} days" },
    aboutXWeeks: { one: "about 1 week", other: "about {{count}} weeks" },
    xWeeks: { one: "1 week", other: "{{count}} weeks" },
    aboutXMonths: { one: "about 1 month", other: "about {{count}} months" },
    xMonths: { one: "1 month", other: "{{count}} months" },
    aboutXYears: { one: "about 1 year", other: "about {{count}} years" },
    xYears: { one: "1 year", other: "{{count}} years" },
    overXYears: { one: "over 1 year", other: "over {{count}} years" },
    almostXYears: { one: "almost 1 year", other: "almost {{count}} years" },
  },
  wh = (e, t, n) => {
    let r;
    const l = xh[e];
    return (
      typeof l == "string"
        ? (r = l)
        : t === 1
        ? (r = l.one)
        : (r = l.other.replace("{{count}}", t.toString())),
      n != null && n.addSuffix
        ? n.comparison && n.comparison > 0
          ? "in " + r
          : r + " ago"
        : r
    );
  };
function vi(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const Nh = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy",
  },
  Sh = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a",
  },
  kh = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}",
  },
  jh = {
    date: vi({ formats: Nh, defaultWidth: "full" }),
    time: vi({ formats: Sh, defaultWidth: "full" }),
    dateTime: vi({ formats: kh, defaultWidth: "full" }),
  },
  bh = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P",
  },
  Eh = (e, t, n, r) => bh[e];
function Nr(e) {
  return (t, n) => {
    const r = n != null && n.context ? String(n.context) : "standalone";
    let l;
    if (r === "formatting" && e.formattingValues) {
      const i = e.defaultFormattingWidth || e.defaultWidth,
        a = n != null && n.width ? String(n.width) : i;
      l = e.formattingValues[a] || e.formattingValues[i];
    } else {
      const i = e.defaultWidth,
        a = n != null && n.width ? String(n.width) : e.defaultWidth;
      l = e.values[a] || e.values[i];
    }
    const s = e.argumentCallback ? e.argumentCallback(t) : t;
    return l[s];
  };
}
const Ch = {
    narrow: ["B", "A"],
    abbreviated: ["BC", "AD"],
    wide: ["Before Christ", "Anno Domini"],
  },
  Ph = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
  },
  Th = {
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    abbreviated: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    wide: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
  },
  Dh = {
    narrow: ["S", "M", "T", "W", "T", "F", "S"],
    short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    wide: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
  },
  Oh = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
  },
  Mh = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
  },
  _h = (e, t) => {
    const n = Number(e),
      r = n % 100;
    if (r > 20 || r < 10)
      switch (r % 10) {
        case 1:
          return n + "st";
        case 2:
          return n + "nd";
        case 3:
          return n + "rd";
      }
    return n + "th";
  },
  Lh = {
    ordinalNumber: _h,
    era: Nr({ values: Ch, defaultWidth: "wide" }),
    quarter: Nr({
      values: Ph,
      defaultWidth: "wide",
      argumentCallback: (e) => e - 1,
    }),
    month: Nr({ values: Th, defaultWidth: "wide" }),
    day: Nr({ values: Dh, defaultWidth: "wide" }),
    dayPeriod: Nr({
      values: Oh,
      defaultWidth: "wide",
      formattingValues: Mh,
      defaultFormattingWidth: "wide",
    }),
  };
function Sr(e) {
  return (t, n = {}) => {
    const r = n.width,
      l = (r && e.matchPatterns[r]) || e.matchPatterns[e.defaultMatchWidth],
      s = t.match(l);
    if (!s) return null;
    const i = s[0],
      a = (r && e.parsePatterns[r]) || e.parsePatterns[e.defaultParseWidth],
      u = Array.isArray(a) ? Fh(a, (f) => f.test(i)) : $h(a, (f) => f.test(i));
    let c;
    (c = e.valueCallback ? e.valueCallback(u) : u),
      (c = n.valueCallback ? n.valueCallback(c) : c);
    const m = t.slice(i.length);
    return { value: c, rest: m };
  };
}
function $h(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n])) return n;
}
function Fh(e, t) {
  for (let n = 0; n < e.length; n++) if (t(e[n])) return n;
}
function Rh(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const l = r[0],
      s = t.match(e.parsePattern);
    if (!s) return null;
    let i = e.valueCallback ? e.valueCallback(s[0]) : s[0];
    i = n.valueCallback ? n.valueCallback(i) : i;
    const a = t.slice(l.length);
    return { value: i, rest: a };
  };
}
const zh = /^(\d+)(th|st|nd|rd)?/i,
  Ih = /\d+/i,
  Ah = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i,
  },
  Uh = { any: [/^b/i, /^(a|c)/i] },
  Hh = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i,
  },
  Wh = { any: [/1/i, /2/i, /3/i, /4/i] },
  qh = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
  },
  Bh = {
    narrow: [
      /^j/i,
      /^f/i,
      /^m/i,
      /^a/i,
      /^m/i,
      /^j/i,
      /^j/i,
      /^a/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i,
    ],
    any: [
      /^ja/i,
      /^f/i,
      /^mar/i,
      /^ap/i,
      /^may/i,
      /^jun/i,
      /^jul/i,
      /^au/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i,
    ],
  },
  Vh = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
  },
  Qh = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
  },
  Yh = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
  },
  Gh = {
    any: {
      am: /^a/i,
      pm: /^p/i,
      midnight: /^mi/i,
      noon: /^no/i,
      morning: /morning/i,
      afternoon: /afternoon/i,
      evening: /evening/i,
      night: /night/i,
    },
  },
  Kh = {
    ordinalNumber: Rh({
      matchPattern: zh,
      parsePattern: Ih,
      valueCallback: (e) => parseInt(e, 10),
    }),
    era: Sr({
      matchPatterns: Ah,
      defaultMatchWidth: "wide",
      parsePatterns: Uh,
      defaultParseWidth: "any",
    }),
    quarter: Sr({
      matchPatterns: Hh,
      defaultMatchWidth: "wide",
      parsePatterns: Wh,
      defaultParseWidth: "any",
      valueCallback: (e) => e + 1,
    }),
    month: Sr({
      matchPatterns: qh,
      defaultMatchWidth: "wide",
      parsePatterns: Bh,
      defaultParseWidth: "any",
    }),
    day: Sr({
      matchPatterns: Vh,
      defaultMatchWidth: "wide",
      parsePatterns: Qh,
      defaultParseWidth: "any",
    }),
    dayPeriod: Sr({
      matchPatterns: Yh,
      defaultMatchWidth: "any",
      parsePatterns: Gh,
      defaultParseWidth: "any",
    }),
  },
  Xh = {
    code: "en-US",
    formatDistance: wh,
    formatLong: jh,
    formatRelative: Eh,
    localize: Lh,
    match: Kh,
    options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
  };
function Jh(e) {
  const t = yt(e);
  return mh(t, vh(t)) + 1;
}
function Zh(e) {
  const t = yt(e),
    n = +ys(t) - +hh(t);
  return Math.round(n / af) + 1;
}
function cf(e, t) {
  var m, f, v, x;
  const n = yt(e),
    r = n.getFullYear(),
    l = As(),
    s =
      (t == null ? void 0 : t.firstWeekContainsDate) ??
      ((f = (m = t == null ? void 0 : t.locale) == null ? void 0 : m.options) ==
      null
        ? void 0
        : f.firstWeekContainsDate) ??
      l.firstWeekContainsDate ??
      ((x = (v = l.locale) == null ? void 0 : v.options) == null
        ? void 0
        : x.firstWeekContainsDate) ??
      1,
    i = Pn(e, 0);
  i.setFullYear(r + 1, 0, s), i.setHours(0, 0, 0, 0);
  const a = sl(i, t),
    u = Pn(e, 0);
  u.setFullYear(r, 0, s), u.setHours(0, 0, 0, 0);
  const c = sl(u, t);
  return n.getTime() >= a.getTime()
    ? r + 1
    : n.getTime() >= c.getTime()
    ? r
    : r - 1;
}
function e0(e, t) {
  var a, u, c, m;
  const n = As(),
    r =
      (t == null ? void 0 : t.firstWeekContainsDate) ??
      ((u = (a = t == null ? void 0 : t.locale) == null ? void 0 : a.options) ==
      null
        ? void 0
        : u.firstWeekContainsDate) ??
      n.firstWeekContainsDate ??
      ((m = (c = n.locale) == null ? void 0 : c.options) == null
        ? void 0
        : m.firstWeekContainsDate) ??
      1,
    l = cf(e, t),
    s = Pn(e, 0);
  return s.setFullYear(l, 0, r), s.setHours(0, 0, 0, 0), sl(s, t);
}
function t0(e, t) {
  const n = yt(e),
    r = +sl(n, t) - +e0(n, t);
  return Math.round(r / af) + 1;
}
function J(e, t) {
  const n = e < 0 ? "-" : "",
    r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const Ut = {
    y(e, t) {
      const n = e.getFullYear(),
        r = n > 0 ? n : 1 - n;
      return J(t === "yy" ? r % 100 : r, t.length);
    },
    M(e, t) {
      const n = e.getMonth();
      return t === "M" ? String(n + 1) : J(n + 1, 2);
    },
    d(e, t) {
      return J(e.getDate(), t.length);
    },
    a(e, t) {
      const n = e.getHours() / 12 >= 1 ? "pm" : "am";
      switch (t) {
        case "a":
        case "aa":
          return n.toUpperCase();
        case "aaa":
          return n;
        case "aaaaa":
          return n[0];
        case "aaaa":
        default:
          return n === "am" ? "a.m." : "p.m.";
      }
    },
    h(e, t) {
      return J(e.getHours() % 12 || 12, t.length);
    },
    H(e, t) {
      return J(e.getHours(), t.length);
    },
    m(e, t) {
      return J(e.getMinutes(), t.length);
    },
    s(e, t) {
      return J(e.getSeconds(), t.length);
    },
    S(e, t) {
      const n = t.length,
        r = e.getMilliseconds(),
        l = Math.trunc(r * Math.pow(10, n - 3));
      return J(l, t.length);
    },
  },
  _n = {
    am: "am",
    pm: "pm",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  Iu = {
    G: function (e, t, n) {
      const r = e.getFullYear() > 0 ? 1 : 0;
      switch (t) {
        case "G":
        case "GG":
        case "GGG":
          return n.era(r, { width: "abbreviated" });
        case "GGGGG":
          return n.era(r, { width: "narrow" });
        case "GGGG":
        default:
          return n.era(r, { width: "wide" });
      }
    },
    y: function (e, t, n) {
      if (t === "yo") {
        const r = e.getFullYear(),
          l = r > 0 ? r : 1 - r;
        return n.ordinalNumber(l, { unit: "year" });
      }
      return Ut.y(e, t);
    },
    Y: function (e, t, n, r) {
      const l = cf(e, r),
        s = l > 0 ? l : 1 - l;
      if (t === "YY") {
        const i = s % 100;
        return J(i, 2);
      }
      return t === "Yo" ? n.ordinalNumber(s, { unit: "year" }) : J(s, t.length);
    },
    R: function (e, t) {
      const n = uf(e);
      return J(n, t.length);
    },
    u: function (e, t) {
      const n = e.getFullYear();
      return J(n, t.length);
    },
    Q: function (e, t, n) {
      const r = Math.ceil((e.getMonth() + 1) / 3);
      switch (t) {
        case "Q":
          return String(r);
        case "QQ":
          return J(r, 2);
        case "Qo":
          return n.ordinalNumber(r, { unit: "quarter" });
        case "QQQ":
          return n.quarter(r, { width: "abbreviated", context: "formatting" });
        case "QQQQQ":
          return n.quarter(r, { width: "narrow", context: "formatting" });
        case "QQQQ":
        default:
          return n.quarter(r, { width: "wide", context: "formatting" });
      }
    },
    q: function (e, t, n) {
      const r = Math.ceil((e.getMonth() + 1) / 3);
      switch (t) {
        case "q":
          return String(r);
        case "qq":
          return J(r, 2);
        case "qo":
          return n.ordinalNumber(r, { unit: "quarter" });
        case "qqq":
          return n.quarter(r, { width: "abbreviated", context: "standalone" });
        case "qqqqq":
          return n.quarter(r, { width: "narrow", context: "standalone" });
        case "qqqq":
        default:
          return n.quarter(r, { width: "wide", context: "standalone" });
      }
    },
    M: function (e, t, n) {
      const r = e.getMonth();
      switch (t) {
        case "M":
        case "MM":
          return Ut.M(e, t);
        case "Mo":
          return n.ordinalNumber(r + 1, { unit: "month" });
        case "MMM":
          return n.month(r, { width: "abbreviated", context: "formatting" });
        case "MMMMM":
          return n.month(r, { width: "narrow", context: "formatting" });
        case "MMMM":
        default:
          return n.month(r, { width: "wide", context: "formatting" });
      }
    },
    L: function (e, t, n) {
      const r = e.getMonth();
      switch (t) {
        case "L":
          return String(r + 1);
        case "LL":
          return J(r + 1, 2);
        case "Lo":
          return n.ordinalNumber(r + 1, { unit: "month" });
        case "LLL":
          return n.month(r, { width: "abbreviated", context: "standalone" });
        case "LLLLL":
          return n.month(r, { width: "narrow", context: "standalone" });
        case "LLLL":
        default:
          return n.month(r, { width: "wide", context: "standalone" });
      }
    },
    w: function (e, t, n, r) {
      const l = t0(e, r);
      return t === "wo" ? n.ordinalNumber(l, { unit: "week" }) : J(l, t.length);
    },
    I: function (e, t, n) {
      const r = Zh(e);
      return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : J(r, t.length);
    },
    d: function (e, t, n) {
      return t === "do"
        ? n.ordinalNumber(e.getDate(), { unit: "date" })
        : Ut.d(e, t);
    },
    D: function (e, t, n) {
      const r = Jh(e);
      return t === "Do"
        ? n.ordinalNumber(r, { unit: "dayOfYear" })
        : J(r, t.length);
    },
    E: function (e, t, n) {
      const r = e.getDay();
      switch (t) {
        case "E":
        case "EE":
        case "EEE":
          return n.day(r, { width: "abbreviated", context: "formatting" });
        case "EEEEE":
          return n.day(r, { width: "narrow", context: "formatting" });
        case "EEEEEE":
          return n.day(r, { width: "short", context: "formatting" });
        case "EEEE":
        default:
          return n.day(r, { width: "wide", context: "formatting" });
      }
    },
    e: function (e, t, n, r) {
      const l = e.getDay(),
        s = (l - r.weekStartsOn + 8) % 7 || 7;
      switch (t) {
        case "e":
          return String(s);
        case "ee":
          return J(s, 2);
        case "eo":
          return n.ordinalNumber(s, { unit: "day" });
        case "eee":
          return n.day(l, { width: "abbreviated", context: "formatting" });
        case "eeeee":
          return n.day(l, { width: "narrow", context: "formatting" });
        case "eeeeee":
          return n.day(l, { width: "short", context: "formatting" });
        case "eeee":
        default:
          return n.day(l, { width: "wide", context: "formatting" });
      }
    },
    c: function (e, t, n, r) {
      const l = e.getDay(),
        s = (l - r.weekStartsOn + 8) % 7 || 7;
      switch (t) {
        case "c":
          return String(s);
        case "cc":
          return J(s, t.length);
        case "co":
          return n.ordinalNumber(s, { unit: "day" });
        case "ccc":
          return n.day(l, { width: "abbreviated", context: "standalone" });
        case "ccccc":
          return n.day(l, { width: "narrow", context: "standalone" });
        case "cccccc":
          return n.day(l, { width: "short", context: "standalone" });
        case "cccc":
        default:
          return n.day(l, { width: "wide", context: "standalone" });
      }
    },
    i: function (e, t, n) {
      const r = e.getDay(),
        l = r === 0 ? 7 : r;
      switch (t) {
        case "i":
          return String(l);
        case "ii":
          return J(l, t.length);
        case "io":
          return n.ordinalNumber(l, { unit: "day" });
        case "iii":
          return n.day(r, { width: "abbreviated", context: "formatting" });
        case "iiiii":
          return n.day(r, { width: "narrow", context: "formatting" });
        case "iiiiii":
          return n.day(r, { width: "short", context: "formatting" });
        case "iiii":
        default:
          return n.day(r, { width: "wide", context: "formatting" });
      }
    },
    a: function (e, t, n) {
      const l = e.getHours() / 12 >= 1 ? "pm" : "am";
      switch (t) {
        case "a":
        case "aa":
          return n.dayPeriod(l, {
            width: "abbreviated",
            context: "formatting",
          });
        case "aaa":
          return n
            .dayPeriod(l, { width: "abbreviated", context: "formatting" })
            .toLowerCase();
        case "aaaaa":
          return n.dayPeriod(l, { width: "narrow", context: "formatting" });
        case "aaaa":
        default:
          return n.dayPeriod(l, { width: "wide", context: "formatting" });
      }
    },
    b: function (e, t, n) {
      const r = e.getHours();
      let l;
      switch (
        (r === 12
          ? (l = _n.noon)
          : r === 0
          ? (l = _n.midnight)
          : (l = r / 12 >= 1 ? "pm" : "am"),
        t)
      ) {
        case "b":
        case "bb":
          return n.dayPeriod(l, {
            width: "abbreviated",
            context: "formatting",
          });
        case "bbb":
          return n
            .dayPeriod(l, { width: "abbreviated", context: "formatting" })
            .toLowerCase();
        case "bbbbb":
          return n.dayPeriod(l, { width: "narrow", context: "formatting" });
        case "bbbb":
        default:
          return n.dayPeriod(l, { width: "wide", context: "formatting" });
      }
    },
    B: function (e, t, n) {
      const r = e.getHours();
      let l;
      switch (
        (r >= 17
          ? (l = _n.evening)
          : r >= 12
          ? (l = _n.afternoon)
          : r >= 4
          ? (l = _n.morning)
          : (l = _n.night),
        t)
      ) {
        case "B":
        case "BB":
        case "BBB":
          return n.dayPeriod(l, {
            width: "abbreviated",
            context: "formatting",
          });
        case "BBBBB":
          return n.dayPeriod(l, { width: "narrow", context: "formatting" });
        case "BBBB":
        default:
          return n.dayPeriod(l, { width: "wide", context: "formatting" });
      }
    },
    h: function (e, t, n) {
      if (t === "ho") {
        let r = e.getHours() % 12;
        return r === 0 && (r = 12), n.ordinalNumber(r, { unit: "hour" });
      }
      return Ut.h(e, t);
    },
    H: function (e, t, n) {
      return t === "Ho"
        ? n.ordinalNumber(e.getHours(), { unit: "hour" })
        : Ut.H(e, t);
    },
    K: function (e, t, n) {
      const r = e.getHours() % 12;
      return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : J(r, t.length);
    },
    k: function (e, t, n) {
      let r = e.getHours();
      return (
        r === 0 && (r = 24),
        t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : J(r, t.length)
      );
    },
    m: function (e, t, n) {
      return t === "mo"
        ? n.ordinalNumber(e.getMinutes(), { unit: "minute" })
        : Ut.m(e, t);
    },
    s: function (e, t, n) {
      return t === "so"
        ? n.ordinalNumber(e.getSeconds(), { unit: "second" })
        : Ut.s(e, t);
    },
    S: function (e, t) {
      return Ut.S(e, t);
    },
    X: function (e, t, n) {
      const r = e.getTimezoneOffset();
      if (r === 0) return "Z";
      switch (t) {
        case "X":
          return Uu(r);
        case "XXXX":
        case "XX":
          return pn(r);
        case "XXXXX":
        case "XXX":
        default:
          return pn(r, ":");
      }
    },
    x: function (e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
        case "x":
          return Uu(r);
        case "xxxx":
        case "xx":
          return pn(r);
        case "xxxxx":
        case "xxx":
        default:
          return pn(r, ":");
      }
    },
    O: function (e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
        case "O":
        case "OO":
        case "OOO":
          return "GMT" + Au(r, ":");
        case "OOOO":
        default:
          return "GMT" + pn(r, ":");
      }
    },
    z: function (e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
        case "z":
        case "zz":
        case "zzz":
          return "GMT" + Au(r, ":");
        case "zzzz":
        default:
          return "GMT" + pn(r, ":");
      }
    },
    t: function (e, t, n) {
      const r = Math.trunc(e.getTime() / 1e3);
      return J(r, t.length);
    },
    T: function (e, t, n) {
      const r = e.getTime();
      return J(r, t.length);
    },
  };
function Au(e, t = "") {
  const n = e > 0 ? "-" : "+",
    r = Math.abs(e),
    l = Math.trunc(r / 60),
    s = r % 60;
  return s === 0 ? n + String(l) : n + String(l) + t + J(s, 2);
}
function Uu(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + J(Math.abs(e) / 60, 2) : pn(e, t);
}
function pn(e, t = "") {
  const n = e > 0 ? "-" : "+",
    r = Math.abs(e),
    l = J(Math.trunc(r / 60), 2),
    s = J(r % 60, 2);
  return n + l + t + s;
}
const Hu = (e, t) => {
    switch (e) {
      case "P":
        return t.date({ width: "short" });
      case "PP":
        return t.date({ width: "medium" });
      case "PPP":
        return t.date({ width: "long" });
      case "PPPP":
      default:
        return t.date({ width: "full" });
    }
  },
  df = (e, t) => {
    switch (e) {
      case "p":
        return t.time({ width: "short" });
      case "pp":
        return t.time({ width: "medium" });
      case "ppp":
        return t.time({ width: "long" });
      case "pppp":
      default:
        return t.time({ width: "full" });
    }
  },
  n0 = (e, t) => {
    const n = e.match(/(P+)(p+)?/) || [],
      r = n[1],
      l = n[2];
    if (!l) return Hu(e, t);
    let s;
    switch (r) {
      case "P":
        s = t.dateTime({ width: "short" });
        break;
      case "PP":
        s = t.dateTime({ width: "medium" });
        break;
      case "PPP":
        s = t.dateTime({ width: "long" });
        break;
      case "PPPP":
      default:
        s = t.dateTime({ width: "full" });
        break;
    }
    return s.replace("{{date}}", Hu(r, t)).replace("{{time}}", df(l, t));
  },
  r0 = { p: df, P: n0 },
  l0 = /^D+$/,
  s0 = /^Y+$/,
  i0 = ["D", "DD", "YY", "YYYY"];
function o0(e) {
  return l0.test(e);
}
function a0(e) {
  return s0.test(e);
}
function u0(e, t, n) {
  const r = c0(e, t, n);
  if ((console.warn(r), i0.includes(e))) throw new RangeError(r);
}
function c0(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const d0 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  f0 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  p0 = /^'([^]*?)'?$/,
  m0 = /''/g,
  h0 = /[a-zA-Z]/;
function ge(e, t, n) {
  var m, f, v, x;
  const r = As(),
    l = r.locale ?? Xh,
    s =
      r.firstWeekContainsDate ??
      ((f = (m = r.locale) == null ? void 0 : m.options) == null
        ? void 0
        : f.firstWeekContainsDate) ??
      1,
    i =
      r.weekStartsOn ??
      ((x = (v = r.locale) == null ? void 0 : v.options) == null
        ? void 0
        : x.weekStartsOn) ??
      0,
    a = yt(e);
  if (!yh(a)) throw new RangeError("Invalid time value");
  let u = t
    .match(f0)
    .map((w) => {
      const N = w[0];
      if (N === "p" || N === "P") {
        const b = r0[N];
        return b(w, l.formatLong);
      }
      return w;
    })
    .join("")
    .match(d0)
    .map((w) => {
      if (w === "''") return { isToken: !1, value: "'" };
      const N = w[0];
      if (N === "'") return { isToken: !1, value: g0(w) };
      if (Iu[N]) return { isToken: !0, value: w };
      if (N.match(h0))
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" +
            N +
            "`"
        );
      return { isToken: !1, value: w };
    });
  l.localize.preprocessor && (u = l.localize.preprocessor(a, u));
  const c = { firstWeekContainsDate: s, weekStartsOn: i, locale: l };
  return u
    .map((w) => {
      if (!w.isToken) return w.value;
      const N = w.value;
      (a0(N) || o0(N)) && u0(N, t, String(e));
      const b = Iu[N[0]];
      return b(a, N, l.localize, c);
    })
    .join("");
}
function g0(e) {
  const t = e.match(p0);
  return t ? t[1].replace(m0, "'") : e;
}
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var y0 = {
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
 */ const v0 = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  Ue = (e, t) => {
    const n = p.forwardRef(
      (
        {
          color: r = "currentColor",
          size: l = 24,
          strokeWidth: s = 2,
          absoluteStrokeWidth: i,
          className: a = "",
          children: u,
          ...c
        },
        m
      ) =>
        p.createElement(
          "svg",
          {
            ref: m,
            ...y0,
            width: l,
            height: l,
            stroke: r,
            strokeWidth: i ? (Number(s) * 24) / Number(l) : s,
            className: ["lucide", `lucide-${v0(e)}`, a].join(" "),
            ...c,
          },
          [
            ...t.map(([f, v]) => p.createElement(f, v)),
            ...(Array.isArray(u) ? u : [u]),
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
 */ const Jn = Ue("AlertCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const x0 = Ue("AlertTriangle", [
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
 */ const Ir = Ue("Calendar", [
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
 */ const vo = Ue("Camera", [
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
 */ const w0 = Ue("CheckCircle2", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const N0 = Ue("Globe", [
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
 */ const Ar = Ue("Hash", [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const S0 = Ue("Layers", [
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
 */ const k0 = Ue("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pt = Ue("Package", [
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
 */ const ff = Ue("Scan", [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pf = Ue("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Wu = Ue("Trash2", [
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
 */ const il = Ue("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]);
var j0 = Object.defineProperty,
  b0 = (e, t, n) =>
    t in e
      ? j0(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  xi = (e, t, n) => (b0(e, typeof t != "symbol" ? t + "" : t, n), n);
let E0 = class {
    constructor() {
      xi(this, "current", this.detect()),
        xi(this, "handoffState", "pending"),
        xi(this, "currentId", 0);
    }
    set(t) {
      this.current !== t &&
        ((this.handoffState = "pending"),
        (this.currentId = 0),
        (this.current = t));
    }
    reset() {
      this.set(this.detect());
    }
    nextId() {
      return ++this.currentId;
    }
    get isServer() {
      return this.current === "server";
    }
    get isClient() {
      return this.current === "client";
    }
    detect() {
      return typeof window > "u" || typeof document > "u" ? "server" : "client";
    }
    handoff() {
      this.handoffState === "pending" && (this.handoffState = "complete");
    }
    get isHandoffComplete() {
      return this.handoffState === "complete";
    }
  },
  Mt = new E0(),
  st = (e, t) => {
    Mt.isServer ? p.useEffect(e, t) : p.useLayoutEffect(e, t);
  };
function _t(e) {
  let t = p.useRef(e);
  return (
    st(() => {
      t.current = e;
    }, [e]),
    t
  );
}
let ae = function (e) {
  let t = _t(e);
  return A.useCallback((...n) => t.current(...n), [t]);
};
function Us(e) {
  typeof queueMicrotask == "function"
    ? queueMicrotask(e)
    : Promise.resolve()
        .then(e)
        .catch((t) =>
          setTimeout(() => {
            throw t;
          })
        );
}
function On() {
  let e = [],
    t = {
      addEventListener(n, r, l, s) {
        return (
          n.addEventListener(r, l, s),
          t.add(() => n.removeEventListener(r, l, s))
        );
      },
      requestAnimationFrame(...n) {
        let r = requestAnimationFrame(...n);
        return t.add(() => cancelAnimationFrame(r));
      },
      nextFrame(...n) {
        return t.requestAnimationFrame(() => t.requestAnimationFrame(...n));
      },
      setTimeout(...n) {
        let r = setTimeout(...n);
        return t.add(() => clearTimeout(r));
      },
      microTask(...n) {
        let r = { current: !0 };
        return (
          Us(() => {
            r.current && n[0]();
          }),
          t.add(() => {
            r.current = !1;
          })
        );
      },
      style(n, r, l) {
        let s = n.style.getPropertyValue(r);
        return (
          Object.assign(n.style, { [r]: l }),
          this.add(() => {
            Object.assign(n.style, { [r]: s });
          })
        );
      },
      group(n) {
        let r = On();
        return n(r), this.add(() => r.dispose());
      },
      add(n) {
        return (
          e.push(n),
          () => {
            let r = e.indexOf(n);
            if (r >= 0) for (let l of e.splice(r, 1)) l();
          }
        );
      },
      dispose() {
        for (let n of e.splice(0)) n();
      },
    };
  return t;
}
function wa() {
  let [e] = p.useState(On);
  return p.useEffect(() => () => e.dispose(), [e]), e;
}
function C0() {
  let e = typeof document > "u";
  return "useSyncExternalStore" in Ur
    ? ((t) => t.useSyncExternalStore)(Ur)(
        () => () => {},
        () => !1,
        () => !e
      )
    : !1;
}
function ur() {
  let e = C0(),
    [t, n] = p.useState(Mt.isHandoffComplete);
  return (
    t && Mt.isHandoffComplete === !1 && n(!1),
    p.useEffect(() => {
      t !== !0 && n(!0);
    }, [t]),
    p.useEffect(() => Mt.handoff(), []),
    e ? !1 : t
  );
}
var qu;
let cr =
  (qu = A.useId) != null
    ? qu
    : function () {
        let e = ur(),
          [t, n] = A.useState(e ? () => Mt.nextId() : null);
        return (
          st(() => {
            t === null && n(Mt.nextId());
          }, [t]),
          t != null ? "" + t : void 0
        );
      };
function Te(e, t, ...n) {
  if (e in t) {
    let l = t[e];
    return typeof l == "function" ? l(...n) : l;
  }
  let r = new Error(
    `Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(
      t
    )
      .map((l) => `"${l}"`)
      .join(", ")}.`
  );
  throw (Error.captureStackTrace && Error.captureStackTrace(r, Te), r);
}
function mf(e) {
  return Mt.isServer
    ? null
    : e instanceof Node
    ? e.ownerDocument
    : e != null && e.hasOwnProperty("current") && e.current instanceof Node
    ? e.current.ownerDocument
    : document;
}
let xo = [
  "[contentEditable=true]",
  "[tabindex]",
  "a[href]",
  "area[href]",
  "button:not([disabled])",
  "iframe",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
]
  .map((e) => `${e}:not([tabindex='-1'])`)
  .join(",");
var mn = ((e) => (
    (e[(e.First = 1)] = "First"),
    (e[(e.Previous = 2)] = "Previous"),
    (e[(e.Next = 4)] = "Next"),
    (e[(e.Last = 8)] = "Last"),
    (e[(e.WrapAround = 16)] = "WrapAround"),
    (e[(e.NoScroll = 32)] = "NoScroll"),
    e
  ))(mn || {}),
  hf = ((e) => (
    (e[(e.Error = 0)] = "Error"),
    (e[(e.Overflow = 1)] = "Overflow"),
    (e[(e.Success = 2)] = "Success"),
    (e[(e.Underflow = 3)] = "Underflow"),
    e
  ))(hf || {}),
  P0 = ((e) => (
    (e[(e.Previous = -1)] = "Previous"), (e[(e.Next = 1)] = "Next"), e
  ))(P0 || {});
function T0(e = document.body) {
  return e == null
    ? []
    : Array.from(e.querySelectorAll(xo)).sort((t, n) =>
        Math.sign(
          (t.tabIndex || Number.MAX_SAFE_INTEGER) -
            (n.tabIndex || Number.MAX_SAFE_INTEGER)
        )
      );
}
var gf = ((e) => (
  (e[(e.Strict = 0)] = "Strict"), (e[(e.Loose = 1)] = "Loose"), e
))(gf || {});
function D0(e, t = 0) {
  var n;
  return e === ((n = mf(e)) == null ? void 0 : n.body)
    ? !1
    : Te(t, {
        0() {
          return e.matches(xo);
        },
        1() {
          let r = e;
          for (; r !== null; ) {
            if (r.matches(xo)) return !0;
            r = r.parentElement;
          }
          return !1;
        },
      });
}
var O0 = ((e) => (
  (e[(e.Keyboard = 0)] = "Keyboard"), (e[(e.Mouse = 1)] = "Mouse"), e
))(O0 || {});
typeof window < "u" &&
  typeof document < "u" &&
  (document.addEventListener(
    "keydown",
    (e) => {
      e.metaKey ||
        e.altKey ||
        e.ctrlKey ||
        (document.documentElement.dataset.headlessuiFocusVisible = "");
    },
    !0
  ),
  document.addEventListener(
    "click",
    (e) => {
      e.detail === 1
        ? delete document.documentElement.dataset.headlessuiFocusVisible
        : e.detail === 0 &&
          (document.documentElement.dataset.headlessuiFocusVisible = "");
    },
    !0
  ));
function Sn(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let M0 = ["textarea", "input"].join(",");
function _0(e) {
  var t, n;
  return (n =
    (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, M0)) !=
    null
    ? n
    : !1;
}
function L0(e, t = (n) => n) {
  return e.slice().sort((n, r) => {
    let l = t(n),
      s = t(r);
    if (l === null || s === null) return 0;
    let i = l.compareDocumentPosition(s);
    return i & Node.DOCUMENT_POSITION_FOLLOWING
      ? -1
      : i & Node.DOCUMENT_POSITION_PRECEDING
      ? 1
      : 0;
  });
}
function Vl(
  e,
  t,
  { sorted: n = !0, relativeTo: r = null, skipElements: l = [] } = {}
) {
  let s = Array.isArray(e)
      ? e.length > 0
        ? e[0].ownerDocument
        : document
      : e.ownerDocument,
    i = Array.isArray(e) ? (n ? L0(e) : e) : T0(e);
  l.length > 0 && i.length > 1 && (i = i.filter((x) => !l.includes(x))),
    (r = r ?? s.activeElement);
  let a = (() => {
      if (t & 5) return 1;
      if (t & 10) return -1;
      throw new Error(
        "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
      );
    })(),
    u = (() => {
      if (t & 1) return 0;
      if (t & 2) return Math.max(0, i.indexOf(r)) - 1;
      if (t & 4) return Math.max(0, i.indexOf(r)) + 1;
      if (t & 8) return i.length - 1;
      throw new Error(
        "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
      );
    })(),
    c = t & 32 ? { preventScroll: !0 } : {},
    m = 0,
    f = i.length,
    v;
  do {
    if (m >= f || m + f <= 0) return 0;
    let x = u + m;
    if (t & 16) x = (x + f) % f;
    else {
      if (x < 0) return 3;
      if (x >= f) return 1;
    }
    (v = i[x]), v == null || v.focus(c), (m += a);
  } while (v !== s.activeElement);
  return t & 6 && _0(v) && v.select(), 2;
}
function yf() {
  return (
    /iPhone/gi.test(window.navigator.platform) ||
    (/Mac/gi.test(window.navigator.platform) &&
      window.navigator.maxTouchPoints > 0)
  );
}
function $0() {
  return /Android/gi.test(window.navigator.userAgent);
}
function F0() {
  return yf() || $0();
}
function Ml(e, t, n) {
  let r = _t(t);
  p.useEffect(() => {
    function l(s) {
      r.current(s);
    }
    return (
      document.addEventListener(e, l, n),
      () => document.removeEventListener(e, l, n)
    );
  }, [e, n]);
}
function vf(e, t, n) {
  let r = _t(t);
  p.useEffect(() => {
    function l(s) {
      r.current(s);
    }
    return (
      window.addEventListener(e, l, n),
      () => window.removeEventListener(e, l, n)
    );
  }, [e, n]);
}
function R0(e, t, n = !0) {
  let r = p.useRef(!1);
  p.useEffect(() => {
    requestAnimationFrame(() => {
      r.current = n;
    });
  }, [n]);
  function l(i, a) {
    if (!r.current || i.defaultPrevented) return;
    let u = a(i);
    if (u === null || !u.getRootNode().contains(u) || !u.isConnected) return;
    let c = (function m(f) {
      return typeof f == "function"
        ? m(f())
        : Array.isArray(f) || f instanceof Set
        ? f
        : [f];
    })(e);
    for (let m of c) {
      if (m === null) continue;
      let f = m instanceof HTMLElement ? m : m.current;
      if (
        (f != null && f.contains(u)) ||
        (i.composed && i.composedPath().includes(f))
      )
        return;
    }
    return !D0(u, gf.Loose) && u.tabIndex !== -1 && i.preventDefault(), t(i, u);
  }
  let s = p.useRef(null);
  Ml(
    "pointerdown",
    (i) => {
      var a, u;
      r.current &&
        (s.current =
          ((u = (a = i.composedPath) == null ? void 0 : a.call(i)) == null
            ? void 0
            : u[0]) || i.target);
    },
    !0
  ),
    Ml(
      "mousedown",
      (i) => {
        var a, u;
        r.current &&
          (s.current =
            ((u = (a = i.composedPath) == null ? void 0 : a.call(i)) == null
              ? void 0
              : u[0]) || i.target);
      },
      !0
    ),
    Ml(
      "click",
      (i) => {
        F0() || (s.current && (l(i, () => s.current), (s.current = null)));
      },
      !0
    ),
    Ml(
      "touchend",
      (i) => l(i, () => (i.target instanceof HTMLElement ? i.target : null)),
      !0
    ),
    vf(
      "blur",
      (i) =>
        l(i, () =>
          window.document.activeElement instanceof HTMLIFrameElement
            ? window.document.activeElement
            : null
        ),
      !0
    );
}
function fl(...e) {
  return p.useMemo(() => mf(...e), [...e]);
}
let xf = Symbol();
function z0(e, t = !0) {
  return Object.assign(e, { [xf]: t });
}
function vt(...e) {
  let t = p.useRef(e);
  p.useEffect(() => {
    t.current = e;
  }, [e]);
  let n = ae((r) => {
    for (let l of t.current)
      l != null && (typeof l == "function" ? l(r) : (l.current = r));
  });
  return e.every((r) => r == null || (r == null ? void 0 : r[xf])) ? void 0 : n;
}
function Na(e, t) {
  let n = p.useRef([]),
    r = ae(e);
  p.useEffect(() => {
    let l = [...n.current];
    for (let [s, i] of t.entries())
      if (n.current[s] !== i) {
        let a = r(t, l);
        return (n.current = t), a;
      }
  }, [r, ...t]);
}
function vs(...e) {
  return Array.from(
    new Set(e.flatMap((t) => (typeof t == "string" ? t.split(" ") : [])))
  )
    .filter(Boolean)
    .join(" ");
}
var xs = ((e) => (
    (e[(e.None = 0)] = "None"),
    (e[(e.RenderStrategy = 1)] = "RenderStrategy"),
    (e[(e.Static = 2)] = "Static"),
    e
  ))(xs || {}),
  Kt = ((e) => (
    (e[(e.Unmount = 0)] = "Unmount"), (e[(e.Hidden = 1)] = "Hidden"), e
  ))(Kt || {});
function it({
  ourProps: e,
  theirProps: t,
  slot: n,
  defaultTag: r,
  features: l,
  visible: s = !0,
  name: i,
  mergeRefs: a,
}) {
  a = a ?? I0;
  let u = wf(t, e);
  if (s) return _l(u, n, r, i, a);
  let c = l ?? 0;
  if (c & 2) {
    let { static: m = !1, ...f } = u;
    if (m) return _l(f, n, r, i, a);
  }
  if (c & 1) {
    let { unmount: m = !0, ...f } = u;
    return Te(m ? 0 : 1, {
      0() {
        return null;
      },
      1() {
        return _l({ ...f, hidden: !0, style: { display: "none" } }, n, r, i, a);
      },
    });
  }
  return _l(u, n, r, i, a);
}
function _l(e, t = {}, n, r, l) {
  let {
      as: s = n,
      children: i,
      refName: a = "ref",
      ...u
    } = wi(e, ["unmount", "static"]),
    c = e.ref !== void 0 ? { [a]: e.ref } : {},
    m = typeof i == "function" ? i(t) : i;
  "className" in u &&
    u.className &&
    typeof u.className == "function" &&
    (u.className = u.className(t));
  let f = {};
  if (t) {
    let v = !1,
      x = [];
    for (let [w, N] of Object.entries(t))
      typeof N == "boolean" && (v = !0), N === !0 && x.push(w);
    v && (f["data-headlessui-state"] = x.join(" "));
  }
  if (s === p.Fragment && Object.keys(Bu(u)).length > 0) {
    if (!p.isValidElement(m) || (Array.isArray(m) && m.length > 1))
      throw new Error(
        [
          'Passing props on "Fragment"!',
          "",
          `The current component <${r} /> is rendering a "Fragment".`,
          "However we need to passthrough the following props:",
          Object.keys(u).map((N) => `  - ${N}`).join(`
`),
          "",
          "You can apply a few solutions:",
          [
            'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
            "Render a single element as the child so that we can forward the props onto that element.",
          ].map((N) => `  - ${N}`).join(`
`),
        ].join(`
`)
      );
    let v = m.props,
      x =
        typeof (v == null ? void 0 : v.className) == "function"
          ? (...N) => vs(v == null ? void 0 : v.className(...N), u.className)
          : vs(v == null ? void 0 : v.className, u.className),
      w = x ? { className: x } : {};
    return p.cloneElement(
      m,
      Object.assign(
        {},
        wf(m.props, Bu(wi(u, ["ref"]))),
        f,
        c,
        { ref: l(m.ref, c.ref) },
        w
      )
    );
  }
  return p.createElement(
    s,
    Object.assign(
      {},
      wi(u, ["ref"]),
      s !== p.Fragment && c,
      s !== p.Fragment && f
    ),
    m
  );
}
function I0(...e) {
  return e.every((t) => t == null)
    ? void 0
    : (t) => {
        for (let n of e)
          n != null && (typeof n == "function" ? n(t) : (n.current = t));
      };
}
function wf(...e) {
  if (e.length === 0) return {};
  if (e.length === 1) return e[0];
  let t = {},
    n = {};
  for (let r of e)
    for (let l in r)
      l.startsWith("on") && typeof r[l] == "function"
        ? (n[l] != null || (n[l] = []), n[l].push(r[l]))
        : (t[l] = r[l]);
  if (t.disabled || t["aria-disabled"])
    return Object.assign(
      t,
      Object.fromEntries(Object.keys(n).map((r) => [r, void 0]))
    );
  for (let r in n)
    Object.assign(t, {
      [r](l, ...s) {
        let i = n[r];
        for (let a of i) {
          if (
            (l instanceof Event ||
              (l == null ? void 0 : l.nativeEvent) instanceof Event) &&
            l.defaultPrevented
          )
            return;
          a(l, ...s);
        }
      },
    });
  return t;
}
function Ke(e) {
  var t;
  return Object.assign(p.forwardRef(e), {
    displayName: (t = e.displayName) != null ? t : e.name,
  });
}
function Bu(e) {
  let t = Object.assign({}, e);
  for (let n in t) t[n] === void 0 && delete t[n];
  return t;
}
function wi(e, t = []) {
  let n = Object.assign({}, e);
  for (let r of t) r in n && delete n[r];
  return n;
}
let A0 = "div";
var ws = ((e) => (
  (e[(e.None = 1)] = "None"),
  (e[(e.Focusable = 2)] = "Focusable"),
  (e[(e.Hidden = 4)] = "Hidden"),
  e
))(ws || {});
function U0(e, t) {
  var n;
  let { features: r = 1, ...l } = e,
    s = {
      ref: t,
      "aria-hidden":
        (r & 2) === 2 ? !0 : (n = l["aria-hidden"]) != null ? n : void 0,
      hidden: (r & 4) === 4 ? !0 : void 0,
      style: {
        position: "fixed",
        top: 1,
        left: 1,
        width: 1,
        height: 0,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        borderWidth: "0",
        ...((r & 4) === 4 && (r & 2) !== 2 && { display: "none" }),
      },
    };
  return it({
    ourProps: s,
    theirProps: l,
    slot: {},
    defaultTag: A0,
    name: "Hidden",
  });
}
let wo = Ke(U0),
  Sa = p.createContext(null);
Sa.displayName = "OpenClosedContext";
var qe = ((e) => (
  (e[(e.Open = 1)] = "Open"),
  (e[(e.Closed = 2)] = "Closed"),
  (e[(e.Closing = 4)] = "Closing"),
  (e[(e.Opening = 8)] = "Opening"),
  e
))(qe || {});
function ka() {
  return p.useContext(Sa);
}
function H0({ value: e, children: t }) {
  return A.createElement(Sa.Provider, { value: e }, t);
}
function W0(e) {
  function t() {
    document.readyState !== "loading" &&
      (e(), document.removeEventListener("DOMContentLoaded", t));
  }
  typeof window < "u" &&
    typeof document < "u" &&
    (document.addEventListener("DOMContentLoaded", t), t());
}
let Qt = [];
W0(() => {
  function e(t) {
    t.target instanceof HTMLElement &&
      t.target !== document.body &&
      Qt[0] !== t.target &&
      (Qt.unshift(t.target),
      (Qt = Qt.filter((n) => n != null && n.isConnected)),
      Qt.splice(10));
  }
  window.addEventListener("click", e, { capture: !0 }),
    window.addEventListener("mousedown", e, { capture: !0 }),
    window.addEventListener("focus", e, { capture: !0 }),
    document.body.addEventListener("click", e, { capture: !0 }),
    document.body.addEventListener("mousedown", e, { capture: !0 }),
    document.body.addEventListener("focus", e, { capture: !0 });
});
function q0(e) {
  let t = e.parentElement,
    n = null;
  for (; t && !(t instanceof HTMLFieldSetElement); )
    t instanceof HTMLLegendElement && (n = t), (t = t.parentElement);
  let r = (t == null ? void 0 : t.getAttribute("disabled")) === "";
  return r && B0(n) ? !1 : r;
}
function B0(e) {
  if (!e) return !1;
  let t = e.previousElementSibling;
  for (; t !== null; ) {
    if (t instanceof HTMLLegendElement) return !1;
    t = t.previousElementSibling;
  }
  return !0;
}
var Nf = ((e) => (
  (e.Space = " "),
  (e.Enter = "Enter"),
  (e.Escape = "Escape"),
  (e.Backspace = "Backspace"),
  (e.Delete = "Delete"),
  (e.ArrowLeft = "ArrowLeft"),
  (e.ArrowUp = "ArrowUp"),
  (e.ArrowRight = "ArrowRight"),
  (e.ArrowDown = "ArrowDown"),
  (e.Home = "Home"),
  (e.End = "End"),
  (e.PageUp = "PageUp"),
  (e.PageDown = "PageDown"),
  (e.Tab = "Tab"),
  e
))(Nf || {});
function Sf(e, t, n, r) {
  let l = _t(n);
  p.useEffect(() => {
    e = e ?? window;
    function s(i) {
      l.current(i);
    }
    return e.addEventListener(t, s, r), () => e.removeEventListener(t, s, r);
  }, [e, t, r]);
}
function pl() {
  let e = p.useRef(!1);
  return (
    st(
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      []
    ),
    e
  );
}
function kf(e) {
  let t = ae(e),
    n = p.useRef(!1);
  p.useEffect(
    () => (
      (n.current = !1),
      () => {
        (n.current = !0),
          Us(() => {
            n.current && t();
          });
      }
    ),
    [t]
  );
}
var Tr = ((e) => (
  (e[(e.Forwards = 0)] = "Forwards"), (e[(e.Backwards = 1)] = "Backwards"), e
))(Tr || {});
function V0() {
  let e = p.useRef(0);
  return (
    vf(
      "keydown",
      (t) => {
        t.key === "Tab" && (e.current = t.shiftKey ? 1 : 0);
      },
      !0
    ),
    e
  );
}
function jf(e) {
  if (!e) return new Set();
  if (typeof e == "function") return new Set(e());
  let t = new Set();
  for (let n of e.current) n.current instanceof HTMLElement && t.add(n.current);
  return t;
}
let Q0 = "div";
var bf = ((e) => (
  (e[(e.None = 1)] = "None"),
  (e[(e.InitialFocus = 2)] = "InitialFocus"),
  (e[(e.TabLock = 4)] = "TabLock"),
  (e[(e.FocusLock = 8)] = "FocusLock"),
  (e[(e.RestoreFocus = 16)] = "RestoreFocus"),
  (e[(e.All = 30)] = "All"),
  e
))(bf || {});
function Y0(e, t) {
  let n = p.useRef(null),
    r = vt(n, t),
    { initialFocus: l, containers: s, features: i = 30, ...a } = e;
  ur() || (i = 1);
  let u = fl(n);
  X0({ ownerDocument: u }, !!(i & 16));
  let c = J0({ ownerDocument: u, container: n, initialFocus: l }, !!(i & 2));
  Z0(
    { ownerDocument: u, container: n, containers: s, previousActiveElement: c },
    !!(i & 8)
  );
  let m = V0(),
    f = ae((N) => {
      let b = n.current;
      b &&
        ((g) => g())(() => {
          Te(m.current, {
            [Tr.Forwards]: () => {
              Vl(b, mn.First, { skipElements: [N.relatedTarget] });
            },
            [Tr.Backwards]: () => {
              Vl(b, mn.Last, { skipElements: [N.relatedTarget] });
            },
          });
        });
    }),
    v = wa(),
    x = p.useRef(!1),
    w = {
      ref: r,
      onKeyDown(N) {
        N.key == "Tab" &&
          ((x.current = !0),
          v.requestAnimationFrame(() => {
            x.current = !1;
          }));
      },
      onBlur(N) {
        let b = jf(s);
        n.current instanceof HTMLElement && b.add(n.current);
        let g = N.relatedTarget;
        g instanceof HTMLElement &&
          g.dataset.headlessuiFocusGuard !== "true" &&
          (Ef(b, g) ||
            (x.current
              ? Vl(
                  n.current,
                  Te(m.current, {
                    [Tr.Forwards]: () => mn.Next,
                    [Tr.Backwards]: () => mn.Previous,
                  }) | mn.WrapAround,
                  { relativeTo: N.target }
                )
              : N.target instanceof HTMLElement && Sn(N.target)));
      },
    };
  return A.createElement(
    A.Fragment,
    null,
    !!(i & 4) &&
      A.createElement(wo, {
        as: "button",
        type: "button",
        "data-headlessui-focus-guard": !0,
        onFocus: f,
        features: ws.Focusable,
      }),
    it({ ourProps: w, theirProps: a, defaultTag: Q0, name: "FocusTrap" }),
    !!(i & 4) &&
      A.createElement(wo, {
        as: "button",
        type: "button",
        "data-headlessui-focus-guard": !0,
        onFocus: f,
        features: ws.Focusable,
      })
  );
}
let G0 = Ke(Y0),
  kr = Object.assign(G0, { features: bf });
function K0(e = !0) {
  let t = p.useRef(Qt.slice());
  return (
    Na(
      ([n], [r]) => {
        r === !0 &&
          n === !1 &&
          Us(() => {
            t.current.splice(0);
          }),
          r === !1 && n === !0 && (t.current = Qt.slice());
      },
      [e, Qt, t]
    ),
    ae(() => {
      var n;
      return (n = t.current.find((r) => r != null && r.isConnected)) != null
        ? n
        : null;
    })
  );
}
function X0({ ownerDocument: e }, t) {
  let n = K0(t);
  Na(() => {
    t ||
      ((e == null ? void 0 : e.activeElement) ===
        (e == null ? void 0 : e.body) &&
        Sn(n()));
  }, [t]),
    kf(() => {
      t && Sn(n());
    });
}
function J0({ ownerDocument: e, container: t, initialFocus: n }, r) {
  let l = p.useRef(null),
    s = pl();
  return (
    Na(() => {
      if (!r) return;
      let i = t.current;
      i &&
        Us(() => {
          if (!s.current) return;
          let a = e == null ? void 0 : e.activeElement;
          if (n != null && n.current) {
            if ((n == null ? void 0 : n.current) === a) {
              l.current = a;
              return;
            }
          } else if (i.contains(a)) {
            l.current = a;
            return;
          }
          n != null && n.current
            ? Sn(n.current)
            : Vl(i, mn.First) === hf.Error &&
              console.warn(
                "There are no focusable elements inside the <FocusTrap />"
              ),
            (l.current = e == null ? void 0 : e.activeElement);
        });
    }, [r]),
    l
  );
}
function Z0(
  { ownerDocument: e, container: t, containers: n, previousActiveElement: r },
  l
) {
  let s = pl();
  Sf(
    e == null ? void 0 : e.defaultView,
    "focus",
    (i) => {
      if (!l || !s.current) return;
      let a = jf(n);
      t.current instanceof HTMLElement && a.add(t.current);
      let u = r.current;
      if (!u) return;
      let c = i.target;
      c && c instanceof HTMLElement
        ? Ef(a, c)
          ? ((r.current = c), Sn(c))
          : (i.preventDefault(), i.stopPropagation(), Sn(u))
        : Sn(r.current);
    },
    !0
  );
}
function Ef(e, t) {
  for (let n of e) if (n.contains(t)) return !0;
  return !1;
}
let Cf = p.createContext(!1);
function eg() {
  return p.useContext(Cf);
}
function No(e) {
  return A.createElement(Cf.Provider, { value: e.force }, e.children);
}
function tg(e) {
  let t = eg(),
    n = p.useContext(Pf),
    r = fl(e),
    [l, s] = p.useState(() => {
      if ((!t && n !== null) || Mt.isServer) return null;
      let i = r == null ? void 0 : r.getElementById("headlessui-portal-root");
      if (i) return i;
      if (r === null) return null;
      let a = r.createElement("div");
      return (
        a.setAttribute("id", "headlessui-portal-root"), r.body.appendChild(a)
      );
    });
  return (
    p.useEffect(() => {
      l !== null &&
        ((r != null && r.body.contains(l)) ||
          r == null ||
          r.body.appendChild(l));
    }, [l, r]),
    p.useEffect(() => {
      t || (n !== null && s(n.current));
    }, [n, s, t]),
    l
  );
}
let ng = p.Fragment;
function rg(e, t) {
  let n = e,
    r = p.useRef(null),
    l = vt(
      z0((m) => {
        r.current = m;
      }),
      t
    ),
    s = fl(r),
    i = tg(r),
    [a] = p.useState(() => {
      var m;
      return Mt.isServer
        ? null
        : (m = s == null ? void 0 : s.createElement("div")) != null
        ? m
        : null;
    }),
    u = p.useContext(So),
    c = ur();
  return (
    st(() => {
      !i ||
        !a ||
        i.contains(a) ||
        (a.setAttribute("data-headlessui-portal", ""), i.appendChild(a));
    }, [i, a]),
    st(() => {
      if (a && u) return u.register(a);
    }, [u, a]),
    kf(() => {
      var m;
      !i ||
        !a ||
        (a instanceof Node && i.contains(a) && i.removeChild(a),
        i.childNodes.length <= 0 &&
          ((m = i.parentElement) == null || m.removeChild(i)));
    }),
    c
      ? !i || !a
        ? null
        : Is.createPortal(
            it({
              ourProps: { ref: l },
              theirProps: n,
              defaultTag: ng,
              name: "Portal",
            }),
            a
          )
      : null
  );
}
let lg = p.Fragment,
  Pf = p.createContext(null);
function sg(e, t) {
  let { target: n, ...r } = e,
    l = { ref: vt(t) };
  return A.createElement(
    Pf.Provider,
    { value: n },
    it({ ourProps: l, theirProps: r, defaultTag: lg, name: "Popover.Group" })
  );
}
let So = p.createContext(null);
function ig() {
  let e = p.useContext(So),
    t = p.useRef([]),
    n = ae((s) => (t.current.push(s), e && e.register(s), () => r(s))),
    r = ae((s) => {
      let i = t.current.indexOf(s);
      i !== -1 && t.current.splice(i, 1), e && e.unregister(s);
    }),
    l = p.useMemo(
      () => ({ register: n, unregister: r, portals: t }),
      [n, r, t]
    );
  return [
    t,
    p.useMemo(
      () =>
        function ({ children: s }) {
          return A.createElement(So.Provider, { value: l }, s);
        },
      [l]
    ),
  ];
}
let og = Ke(rg),
  ag = Ke(sg),
  ko = Object.assign(og, { Group: ag });
function ug(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
const cg = typeof Object.is == "function" ? Object.is : ug,
  { useState: dg, useEffect: fg, useLayoutEffect: pg, useDebugValue: mg } = Ur;
function hg(e, t, n) {
  const r = t(),
    [{ inst: l }, s] = dg({ inst: { value: r, getSnapshot: t } });
  return (
    pg(() => {
      (l.value = r), (l.getSnapshot = t), Ni(l) && s({ inst: l });
    }, [e, r, t]),
    fg(
      () => (
        Ni(l) && s({ inst: l }),
        e(() => {
          Ni(l) && s({ inst: l });
        })
      ),
      [e]
    ),
    mg(r),
    r
  );
}
function Ni(e) {
  const t = e.getSnapshot,
    n = e.value;
  try {
    const r = t();
    return !cg(n, r);
  } catch {
    return !0;
  }
}
function gg(e, t, n) {
  return t();
}
const yg =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  vg = !yg,
  xg = vg ? gg : hg,
  wg = "useSyncExternalStore" in Ur ? ((e) => e.useSyncExternalStore)(Ur) : xg;
function Ng(e) {
  return wg(e.subscribe, e.getSnapshot, e.getSnapshot);
}
function Sg(e, t) {
  let n = e(),
    r = new Set();
  return {
    getSnapshot() {
      return n;
    },
    subscribe(l) {
      return r.add(l), () => r.delete(l);
    },
    dispatch(l, ...s) {
      let i = t[l].call(n, ...s);
      i && ((n = i), r.forEach((a) => a()));
    },
  };
}
function kg() {
  let e;
  return {
    before({ doc: t }) {
      var n;
      let r = t.documentElement;
      e = ((n = t.defaultView) != null ? n : window).innerWidth - r.clientWidth;
    },
    after({ doc: t, d: n }) {
      let r = t.documentElement,
        l = r.clientWidth - r.offsetWidth,
        s = e - l;
      n.style(r, "paddingRight", `${s}px`);
    },
  };
}
function jg() {
  return yf()
    ? {
        before({ doc: e, d: t, meta: n }) {
          function r(l) {
            return n.containers.flatMap((s) => s()).some((s) => s.contains(l));
          }
          t.microTask(() => {
            var l;
            if (
              window.getComputedStyle(e.documentElement).scrollBehavior !==
              "auto"
            ) {
              let a = On();
              a.style(e.documentElement, "scrollBehavior", "auto"),
                t.add(() => t.microTask(() => a.dispose()));
            }
            let s = (l = window.scrollY) != null ? l : window.pageYOffset,
              i = null;
            t.addEventListener(
              e,
              "click",
              (a) => {
                if (a.target instanceof HTMLElement)
                  try {
                    let u = a.target.closest("a");
                    if (!u) return;
                    let { hash: c } = new URL(u.href),
                      m = e.querySelector(c);
                    m && !r(m) && (i = m);
                  } catch {}
              },
              !0
            ),
              t.addEventListener(e, "touchstart", (a) => {
                if (a.target instanceof HTMLElement)
                  if (r(a.target)) {
                    let u = a.target;
                    for (; u.parentElement && r(u.parentElement); )
                      u = u.parentElement;
                    t.style(u, "overscrollBehavior", "contain");
                  } else t.style(a.target, "touchAction", "none");
              }),
              t.addEventListener(
                e,
                "touchmove",
                (a) => {
                  if (a.target instanceof HTMLElement)
                    if (r(a.target)) {
                      let u = a.target;
                      for (
                        ;
                        u.parentElement &&
                        u.dataset.headlessuiPortal !== "" &&
                        !(
                          u.scrollHeight > u.clientHeight ||
                          u.scrollWidth > u.clientWidth
                        );

                      )
                        u = u.parentElement;
                      u.dataset.headlessuiPortal === "" && a.preventDefault();
                    } else a.preventDefault();
                },
                { passive: !1 }
              ),
              t.add(() => {
                var a;
                let u = (a = window.scrollY) != null ? a : window.pageYOffset;
                s !== u && window.scrollTo(0, s),
                  i &&
                    i.isConnected &&
                    (i.scrollIntoView({ block: "nearest" }), (i = null));
              });
          });
        },
      }
    : {};
}
function bg() {
  return {
    before({ doc: e, d: t }) {
      t.style(e.documentElement, "overflow", "hidden");
    },
  };
}
function Eg(e) {
  let t = {};
  for (let n of e) Object.assign(t, n(t));
  return t;
}
let vn = Sg(() => new Map(), {
  PUSH(e, t) {
    var n;
    let r =
      (n = this.get(e)) != null
        ? n
        : { doc: e, count: 0, d: On(), meta: new Set() };
    return r.count++, r.meta.add(t), this.set(e, r), this;
  },
  POP(e, t) {
    let n = this.get(e);
    return n && (n.count--, n.meta.delete(t)), this;
  },
  SCROLL_PREVENT({ doc: e, d: t, meta: n }) {
    let r = { doc: e, d: t, meta: Eg(n) },
      l = [jg(), kg(), bg()];
    l.forEach(({ before: s }) => (s == null ? void 0 : s(r))),
      l.forEach(({ after: s }) => (s == null ? void 0 : s(r)));
  },
  SCROLL_ALLOW({ d: e }) {
    e.dispose();
  },
  TEARDOWN({ doc: e }) {
    this.delete(e);
  },
});
vn.subscribe(() => {
  let e = vn.getSnapshot(),
    t = new Map();
  for (let [n] of e) t.set(n, n.documentElement.style.overflow);
  for (let n of e.values()) {
    let r = t.get(n.doc) === "hidden",
      l = n.count !== 0;
    ((l && !r) || (!l && r)) &&
      vn.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n),
      n.count === 0 && vn.dispatch("TEARDOWN", n);
  }
});
function Cg(e, t, n) {
  let r = Ng(vn),
    l = e ? r.get(e) : void 0,
    s = l ? l.count > 0 : !1;
  return (
    st(() => {
      if (!(!e || !t))
        return vn.dispatch("PUSH", e, n), () => vn.dispatch("POP", e, n);
    }, [t, e]),
    s
  );
}
let Si = new Map(),
  jr = new Map();
function Vu(e, t = !0) {
  st(() => {
    var n;
    if (!t) return;
    let r = typeof e == "function" ? e() : e.current;
    if (!r) return;
    function l() {
      var i;
      if (!r) return;
      let a = (i = jr.get(r)) != null ? i : 1;
      if ((a === 1 ? jr.delete(r) : jr.set(r, a - 1), a !== 1)) return;
      let u = Si.get(r);
      u &&
        (u["aria-hidden"] === null
          ? r.removeAttribute("aria-hidden")
          : r.setAttribute("aria-hidden", u["aria-hidden"]),
        (r.inert = u.inert),
        Si.delete(r));
    }
    let s = (n = jr.get(r)) != null ? n : 0;
    return (
      jr.set(r, s + 1),
      s !== 0 ||
        (Si.set(r, {
          "aria-hidden": r.getAttribute("aria-hidden"),
          inert: r.inert,
        }),
        r.setAttribute("aria-hidden", "true"),
        (r.inert = !0)),
      l
    );
  }, [e, t]);
}
function Pg({
  defaultContainers: e = [],
  portals: t,
  mainTreeNodeRef: n,
} = {}) {
  var r;
  let l = p.useRef((r = n == null ? void 0 : n.current) != null ? r : null),
    s = fl(l),
    i = ae(() => {
      var a, u, c;
      let m = [];
      for (let f of e)
        f !== null &&
          (f instanceof HTMLElement
            ? m.push(f)
            : "current" in f &&
              f.current instanceof HTMLElement &&
              m.push(f.current));
      if (t != null && t.current) for (let f of t.current) m.push(f);
      for (let f of (a =
        s == null ? void 0 : s.querySelectorAll("html > *, body > *")) != null
        ? a
        : [])
        f !== document.body &&
          f !== document.head &&
          f instanceof HTMLElement &&
          f.id !== "headlessui-portal-root" &&
          (f.contains(l.current) ||
            f.contains(
              (c = (u = l.current) == null ? void 0 : u.getRootNode()) == null
                ? void 0
                : c.host
            ) ||
            m.some((v) => f.contains(v)) ||
            m.push(f));
      return m;
    });
  return {
    resolveContainers: i,
    contains: ae((a) => i().some((u) => u.contains(a))),
    mainTreeNodeRef: l,
    MainTreeNode: p.useMemo(
      () =>
        function () {
          return n != null
            ? null
            : A.createElement(wo, { features: ws.Hidden, ref: l });
        },
      [l, n]
    ),
  };
}
let ja = p.createContext(() => {});
ja.displayName = "StackContext";
var jo = ((e) => ((e[(e.Add = 0)] = "Add"), (e[(e.Remove = 1)] = "Remove"), e))(
  jo || {}
);
function Tg() {
  return p.useContext(ja);
}
function Dg({ children: e, onUpdate: t, type: n, element: r, enabled: l }) {
  let s = Tg(),
    i = ae((...a) => {
      t == null || t(...a), s(...a);
    });
  return (
    st(() => {
      let a = l === void 0 || l === !0;
      return (
        a && i(0, n, r),
        () => {
          a && i(1, n, r);
        }
      );
    }, [i, n, r, l]),
    A.createElement(ja.Provider, { value: i }, e)
  );
}
let Tf = p.createContext(null);
function Df() {
  let e = p.useContext(Tf);
  if (e === null) {
    let t = new Error(
      "You used a <Description /> component, but it is not inside a relevant parent."
    );
    throw (Error.captureStackTrace && Error.captureStackTrace(t, Df), t);
  }
  return e;
}
function Og() {
  let [e, t] = p.useState([]);
  return [
    e.length > 0 ? e.join(" ") : void 0,
    p.useMemo(
      () =>
        function (n) {
          let r = ae(
              (s) => (
                t((i) => [...i, s]),
                () =>
                  t((i) => {
                    let a = i.slice(),
                      u = a.indexOf(s);
                    return u !== -1 && a.splice(u, 1), a;
                  })
              )
            ),
            l = p.useMemo(
              () => ({
                register: r,
                slot: n.slot,
                name: n.name,
                props: n.props,
              }),
              [r, n.slot, n.name, n.props]
            );
          return A.createElement(Tf.Provider, { value: l }, n.children);
        },
      [t]
    ),
  ];
}
let Mg = "p";
function _g(e, t) {
  let n = cr(),
    { id: r = `headlessui-description-${n}`, ...l } = e,
    s = Df(),
    i = vt(t);
  st(() => s.register(r), [r, s.register]);
  let a = { ref: i, ...s.props, id: r };
  return it({
    ourProps: a,
    theirProps: l,
    slot: s.slot || {},
    defaultTag: Mg,
    name: s.name || "Description",
  });
}
let Lg = Ke(_g),
  $g = Object.assign(Lg, {});
var Fg = ((e) => (
    (e[(e.Open = 0)] = "Open"), (e[(e.Closed = 1)] = "Closed"), e
  ))(Fg || {}),
  Rg = ((e) => ((e[(e.SetTitleId = 0)] = "SetTitleId"), e))(Rg || {});
let zg = {
    0(e, t) {
      return e.titleId === t.id ? e : { ...e, titleId: t.id };
    },
  },
  Ns = p.createContext(null);
Ns.displayName = "DialogContext";
function ml(e) {
  let t = p.useContext(Ns);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw (Error.captureStackTrace && Error.captureStackTrace(n, ml), n);
  }
  return t;
}
function Ig(e, t, n = () => [document.body]) {
  Cg(e, t, (r) => {
    var l;
    return { containers: [...((l = r.containers) != null ? l : []), n] };
  });
}
function Ag(e, t) {
  return Te(t.type, zg, e, t);
}
let Ug = "div",
  Hg = xs.RenderStrategy | xs.Static;
function Wg(e, t) {
  let n = cr(),
    {
      id: r = `headlessui-dialog-${n}`,
      open: l,
      onClose: s,
      initialFocus: i,
      role: a = "dialog",
      __demoMode: u = !1,
      ...c
    } = e,
    [m, f] = p.useState(0),
    v = p.useRef(!1);
  a = (function () {
    return a === "dialog" || a === "alertdialog"
      ? a
      : (v.current ||
          ((v.current = !0),
          console.warn(
            `Invalid role [${a}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`
          )),
        "dialog");
  })();
  let x = ka();
  l === void 0 && x !== null && (l = (x & qe.Open) === qe.Open);
  let w = p.useRef(null),
    N = vt(w, t),
    b = fl(w),
    g = e.hasOwnProperty("open") || x !== null,
    d = e.hasOwnProperty("onClose");
  if (!g && !d)
    throw new Error(
      "You have to provide an `open` and an `onClose` prop to the `Dialog` component."
    );
  if (!g)
    throw new Error(
      "You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop."
    );
  if (!d)
    throw new Error(
      "You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop."
    );
  if (typeof l != "boolean")
    throw new Error(
      `You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${l}`
    );
  if (typeof s != "function")
    throw new Error(
      `You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${s}`
    );
  let h = l ? 0 : 1,
    [y, S] = p.useReducer(Ag, {
      titleId: null,
      descriptionId: null,
      panelRef: p.createRef(),
    }),
    k = ae(() => s(!1)),
    P = ae((j) => S({ type: 0, id: j })),
    T = ur() ? (u ? !1 : h === 0) : !1,
    R = m > 1,
    L = p.useContext(Ns) !== null,
    [le, Y] = ig(),
    q = {
      get current() {
        var j;
        return (j = y.panelRef.current) != null ? j : w.current;
      },
    },
    {
      resolveContainers: X,
      mainTreeNodeRef: ee,
      MainTreeNode: V,
    } = Pg({ portals: le, defaultContainers: [q] }),
    G = R ? "parent" : "leaf",
    D = x !== null ? (x & qe.Closing) === qe.Closing : !1,
    $ = L || D ? !1 : T,
    F = p.useCallback(() => {
      var j, M;
      return (M = Array.from(
        (j = b == null ? void 0 : b.querySelectorAll("body > *")) != null
          ? j
          : []
      ).find((I) =>
        I.id === "headlessui-portal-root"
          ? !1
          : I.contains(ee.current) && I instanceof HTMLElement
      )) != null
        ? M
        : null;
    }, [ee]);
  Vu(F, $);
  let U = R ? !0 : T,
    z = p.useCallback(() => {
      var j, M;
      return (M = Array.from(
        (j =
          b == null
            ? void 0
            : b.querySelectorAll("[data-headlessui-portal]")) != null
          ? j
          : []
      ).find((I) => I.contains(ee.current) && I instanceof HTMLElement)) != null
        ? M
        : null;
    }, [ee]);
  Vu(z, U),
    R0(
      X,
      (j) => {
        j.preventDefault(), k();
      },
      !(!T || R)
    );
  let te = !(R || h !== 0);
  Sf(b == null ? void 0 : b.defaultView, "keydown", (j) => {
    te &&
      (j.defaultPrevented ||
        (j.key === Nf.Escape &&
          (j.preventDefault(), j.stopPropagation(), k())));
  }),
    Ig(b, !(D || h !== 0 || L), X),
    p.useEffect(() => {
      if (h !== 0 || !w.current) return;
      let j = new ResizeObserver((M) => {
        for (let I of M) {
          let O = I.target.getBoundingClientRect();
          O.x === 0 && O.y === 0 && O.width === 0 && O.height === 0 && k();
        }
      });
      return j.observe(w.current), () => j.disconnect();
    }, [h, w, k]);
  let [E, H] = Og(),
    K = p.useMemo(
      () => [{ dialogState: h, close: k, setTitleId: P }, y],
      [h, y, k, P]
    ),
    xt = p.useMemo(() => ({ open: h === 0 }), [h]),
    wt = {
      ref: N,
      id: r,
      role: a,
      "aria-modal": h === 0 ? !0 : void 0,
      "aria-labelledby": y.titleId,
      "aria-describedby": E,
    };
  return A.createElement(
    Dg,
    {
      type: "Dialog",
      enabled: h === 0,
      element: w,
      onUpdate: ae((j, M) => {
        M === "Dialog" &&
          Te(j, {
            [jo.Add]: () => f((I) => I + 1),
            [jo.Remove]: () => f((I) => I - 1),
          });
      }),
    },
    A.createElement(
      No,
      { force: !0 },
      A.createElement(
        ko,
        null,
        A.createElement(
          Ns.Provider,
          { value: K },
          A.createElement(
            ko.Group,
            { target: w },
            A.createElement(
              No,
              { force: !1 },
              A.createElement(
                H,
                { slot: xt, name: "Dialog.Description" },
                A.createElement(
                  kr,
                  {
                    initialFocus: i,
                    containers: X,
                    features: T
                      ? Te(G, {
                          parent: kr.features.RestoreFocus,
                          leaf: kr.features.All & ~kr.features.FocusLock,
                        })
                      : kr.features.None,
                  },
                  A.createElement(
                    Y,
                    null,
                    it({
                      ourProps: wt,
                      theirProps: c,
                      slot: xt,
                      defaultTag: Ug,
                      features: Hg,
                      visible: h === 0,
                      name: "Dialog",
                    })
                  )
                )
              )
            )
          )
        )
      )
    ),
    A.createElement(V, null)
  );
}
let qg = "div";
function Bg(e, t) {
  let n = cr(),
    { id: r = `headlessui-dialog-overlay-${n}`, ...l } = e,
    [{ dialogState: s, close: i }] = ml("Dialog.Overlay"),
    a = vt(t),
    u = ae((m) => {
      if (m.target === m.currentTarget) {
        if (q0(m.currentTarget)) return m.preventDefault();
        m.preventDefault(), m.stopPropagation(), i();
      }
    }),
    c = p.useMemo(() => ({ open: s === 0 }), [s]);
  return it({
    ourProps: { ref: a, id: r, "aria-hidden": !0, onClick: u },
    theirProps: l,
    slot: c,
    defaultTag: qg,
    name: "Dialog.Overlay",
  });
}
let Vg = "div";
function Qg(e, t) {
  let n = cr(),
    { id: r = `headlessui-dialog-backdrop-${n}`, ...l } = e,
    [{ dialogState: s }, i] = ml("Dialog.Backdrop"),
    a = vt(t);
  p.useEffect(() => {
    if (i.panelRef.current === null)
      throw new Error(
        "A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing."
      );
  }, [i.panelRef]);
  let u = p.useMemo(() => ({ open: s === 0 }), [s]);
  return A.createElement(
    No,
    { force: !0 },
    A.createElement(
      ko,
      null,
      it({
        ourProps: { ref: a, id: r, "aria-hidden": !0 },
        theirProps: l,
        slot: u,
        defaultTag: Vg,
        name: "Dialog.Backdrop",
      })
    )
  );
}
let Yg = "div";
function Gg(e, t) {
  let n = cr(),
    { id: r = `headlessui-dialog-panel-${n}`, ...l } = e,
    [{ dialogState: s }, i] = ml("Dialog.Panel"),
    a = vt(t, i.panelRef),
    u = p.useMemo(() => ({ open: s === 0 }), [s]),
    c = ae((m) => {
      m.stopPropagation();
    });
  return it({
    ourProps: { ref: a, id: r, onClick: c },
    theirProps: l,
    slot: u,
    defaultTag: Yg,
    name: "Dialog.Panel",
  });
}
let Kg = "h2";
function Xg(e, t) {
  let n = cr(),
    { id: r = `headlessui-dialog-title-${n}`, ...l } = e,
    [{ dialogState: s, setTitleId: i }] = ml("Dialog.Title"),
    a = vt(t);
  p.useEffect(() => (i(r), () => i(null)), [r, i]);
  let u = p.useMemo(() => ({ open: s === 0 }), [s]);
  return it({
    ourProps: { ref: a, id: r },
    theirProps: l,
    slot: u,
    defaultTag: Kg,
    name: "Dialog.Title",
  });
}
let Jg = Ke(Wg),
  Zg = Ke(Qg),
  ey = Ke(Gg),
  ty = Ke(Bg),
  ny = Ke(Xg),
  Xe = Object.assign(Jg, {
    Backdrop: Zg,
    Panel: ey,
    Overlay: ty,
    Title: ny,
    Description: $g,
  });
function ry(e = 0) {
  let [t, n] = p.useState(e),
    r = pl(),
    l = p.useCallback(
      (u) => {
        r.current && n((c) => c | u);
      },
      [t, r]
    ),
    s = p.useCallback((u) => !!(t & u), [t]),
    i = p.useCallback(
      (u) => {
        r.current && n((c) => c & ~u);
      },
      [n, r]
    ),
    a = p.useCallback(
      (u) => {
        r.current && n((c) => c ^ u);
      },
      [n]
    );
  return { flags: t, addFlag: l, hasFlag: s, removeFlag: i, toggleFlag: a };
}
function ly(e) {
  let t = { called: !1 };
  return (...n) => {
    if (!t.called) return (t.called = !0), e(...n);
  };
}
function ki(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function ji(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
function sy(e, t) {
  let n = On();
  if (!e) return n.dispose;
  let { transitionDuration: r, transitionDelay: l } = getComputedStyle(e),
    [s, i] = [r, l].map((u) => {
      let [c = 0] = u
        .split(",")
        .filter(Boolean)
        .map((m) => (m.includes("ms") ? parseFloat(m) : parseFloat(m) * 1e3))
        .sort((m, f) => f - m);
      return c;
    }),
    a = s + i;
  if (a !== 0) {
    n.group((c) => {
      c.setTimeout(() => {
        t(), c.dispose();
      }, a),
        c.addEventListener(e, "transitionrun", (m) => {
          m.target === m.currentTarget && c.dispose();
        });
    });
    let u = n.addEventListener(e, "transitionend", (c) => {
      c.target === c.currentTarget && (t(), u());
    });
  } else t();
  return n.add(() => t()), n.dispose;
}
function iy(e, t, n, r) {
  let l = n ? "enter" : "leave",
    s = On(),
    i = r !== void 0 ? ly(r) : () => {};
  l === "enter" && (e.removeAttribute("hidden"), (e.style.display = ""));
  let a = Te(l, { enter: () => t.enter, leave: () => t.leave }),
    u = Te(l, { enter: () => t.enterTo, leave: () => t.leaveTo }),
    c = Te(l, { enter: () => t.enterFrom, leave: () => t.leaveFrom });
  return (
    ji(
      e,
      ...t.base,
      ...t.enter,
      ...t.enterTo,
      ...t.enterFrom,
      ...t.leave,
      ...t.leaveFrom,
      ...t.leaveTo,
      ...t.entered
    ),
    ki(e, ...t.base, ...a, ...c),
    s.nextFrame(() => {
      ji(e, ...t.base, ...a, ...c),
        ki(e, ...t.base, ...a, ...u),
        sy(
          e,
          () => (ji(e, ...t.base, ...a), ki(e, ...t.base, ...t.entered), i())
        );
    }),
    s.dispose
  );
}
function oy({
  immediate: e,
  container: t,
  direction: n,
  classes: r,
  onStart: l,
  onStop: s,
}) {
  let i = pl(),
    a = wa(),
    u = _t(n);
  st(() => {
    e && (u.current = "enter");
  }, [e]),
    st(() => {
      let c = On();
      a.add(c.dispose);
      let m = t.current;
      if (m && u.current !== "idle" && i.current)
        return (
          c.dispose(),
          l.current(u.current),
          c.add(
            iy(m, r.current, u.current === "enter", () => {
              c.dispose(), s.current(u.current);
            })
          ),
          c.dispose
        );
    }, [n]);
}
function Ht(e = "") {
  return e.split(/\s+/).filter((t) => t.length > 1);
}
let Hs = p.createContext(null);
Hs.displayName = "TransitionContext";
var ay = ((e) => ((e.Visible = "visible"), (e.Hidden = "hidden"), e))(ay || {});
function uy() {
  let e = p.useContext(Hs);
  if (e === null)
    throw new Error(
      "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />."
    );
  return e;
}
function cy() {
  let e = p.useContext(Ws);
  if (e === null)
    throw new Error(
      "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />."
    );
  return e;
}
let Ws = p.createContext(null);
Ws.displayName = "NestingContext";
function qs(e) {
  return "children" in e
    ? qs(e.children)
    : e.current
        .filter(({ el: t }) => t.current !== null)
        .filter(({ state: t }) => t === "visible").length > 0;
}
function Of(e, t) {
  let n = _t(e),
    r = p.useRef([]),
    l = pl(),
    s = wa(),
    i = ae((x, w = Kt.Hidden) => {
      let N = r.current.findIndex(({ el: b }) => b === x);
      N !== -1 &&
        (Te(w, {
          [Kt.Unmount]() {
            r.current.splice(N, 1);
          },
          [Kt.Hidden]() {
            r.current[N].state = "hidden";
          },
        }),
        s.microTask(() => {
          var b;
          !qs(r) && l.current && ((b = n.current) == null || b.call(n));
        }));
    }),
    a = ae((x) => {
      let w = r.current.find(({ el: N }) => N === x);
      return (
        w
          ? w.state !== "visible" && (w.state = "visible")
          : r.current.push({ el: x, state: "visible" }),
        () => i(x, Kt.Unmount)
      );
    }),
    u = p.useRef([]),
    c = p.useRef(Promise.resolve()),
    m = p.useRef({ enter: [], leave: [], idle: [] }),
    f = ae((x, w, N) => {
      u.current.splice(0),
        t &&
          (t.chains.current[w] = t.chains.current[w].filter(([b]) => b !== x)),
        t == null ||
          t.chains.current[w].push([
            x,
            new Promise((b) => {
              u.current.push(b);
            }),
          ]),
        t == null ||
          t.chains.current[w].push([
            x,
            new Promise((b) => {
              Promise.all(m.current[w].map(([g, d]) => d)).then(() => b());
            }),
          ]),
        w === "enter"
          ? (c.current = c.current
              .then(() => (t == null ? void 0 : t.wait.current))
              .then(() => N(w)))
          : N(w);
    }),
    v = ae((x, w, N) => {
      Promise.all(m.current[w].splice(0).map(([b, g]) => g))
        .then(() => {
          var b;
          (b = u.current.shift()) == null || b();
        })
        .then(() => N(w));
    });
  return p.useMemo(
    () => ({
      children: r,
      register: a,
      unregister: i,
      onStart: f,
      onStop: v,
      wait: c,
      chains: m,
    }),
    [a, i, r, f, v, m, c]
  );
}
function dy() {}
let fy = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function Qu(e) {
  var t;
  let n = {};
  for (let r of fy) n[r] = (t = e[r]) != null ? t : dy;
  return n;
}
function py(e) {
  let t = p.useRef(Qu(e));
  return (
    p.useEffect(() => {
      t.current = Qu(e);
    }, [e]),
    t
  );
}
let my = "div",
  Mf = xs.RenderStrategy;
function hy(e, t) {
  var n, r;
  let {
      beforeEnter: l,
      afterEnter: s,
      beforeLeave: i,
      afterLeave: a,
      enter: u,
      enterFrom: c,
      enterTo: m,
      entered: f,
      leave: v,
      leaveFrom: x,
      leaveTo: w,
      ...N
    } = e,
    b = p.useRef(null),
    g = vt(b, t),
    d = (n = N.unmount) == null || n ? Kt.Unmount : Kt.Hidden,
    { show: h, appear: y, initial: S } = uy(),
    [k, P] = p.useState(h ? "visible" : "hidden"),
    T = cy(),
    { register: R, unregister: L } = T;
  p.useEffect(() => R(b), [R, b]),
    p.useEffect(() => {
      if (d === Kt.Hidden && b.current) {
        if (h && k !== "visible") {
          P("visible");
          return;
        }
        return Te(k, { hidden: () => L(b), visible: () => R(b) });
      }
    }, [k, b, R, L, h, d]);
  let le = _t({
      base: Ht(N.className),
      enter: Ht(u),
      enterFrom: Ht(c),
      enterTo: Ht(m),
      entered: Ht(f),
      leave: Ht(v),
      leaveFrom: Ht(x),
      leaveTo: Ht(w),
    }),
    Y = py({ beforeEnter: l, afterEnter: s, beforeLeave: i, afterLeave: a }),
    q = ur();
  p.useEffect(() => {
    if (q && k === "visible" && b.current === null)
      throw new Error(
        "Did you forget to passthrough the `ref` to the actual DOM node?"
      );
  }, [b, k, q]);
  let X = S && !y,
    ee = y && h && S,
    V = !q || X ? "idle" : h ? "enter" : "leave",
    G = ry(0),
    D = ae((te) =>
      Te(te, {
        enter: () => {
          G.addFlag(qe.Opening), Y.current.beforeEnter();
        },
        leave: () => {
          G.addFlag(qe.Closing), Y.current.beforeLeave();
        },
        idle: () => {},
      })
    ),
    $ = ae((te) =>
      Te(te, {
        enter: () => {
          G.removeFlag(qe.Opening), Y.current.afterEnter();
        },
        leave: () => {
          G.removeFlag(qe.Closing), Y.current.afterLeave();
        },
        idle: () => {},
      })
    ),
    F = Of(() => {
      P("hidden"), L(b);
    }, T),
    U = p.useRef(!1);
  oy({
    immediate: ee,
    container: b,
    classes: le,
    direction: V,
    onStart: _t((te) => {
      (U.current = !0), F.onStart(b, te, D);
    }),
    onStop: _t((te) => {
      (U.current = !1),
        F.onStop(b, te, $),
        te === "leave" && !qs(F) && (P("hidden"), L(b));
    }),
  });
  let z = N,
    fe = { ref: g };
  return (
    ee
      ? (z = {
          ...z,
          className: vs(
            N.className,
            ...le.current.enter,
            ...le.current.enterFrom
          ),
        })
      : U.current &&
        ((z.className = vs(
          N.className,
          (r = b.current) == null ? void 0 : r.className
        )),
        z.className === "" && delete z.className),
    A.createElement(
      Ws.Provider,
      { value: F },
      A.createElement(
        H0,
        { value: Te(k, { visible: qe.Open, hidden: qe.Closed }) | G.flags },
        it({
          ourProps: fe,
          theirProps: z,
          defaultTag: my,
          features: Mf,
          visible: k === "visible",
          name: "Transition.Child",
        })
      )
    )
  );
}
function gy(e, t) {
  let { show: n, appear: r = !1, unmount: l = !0, ...s } = e,
    i = p.useRef(null),
    a = vt(i, t);
  ur();
  let u = ka();
  if (
    (n === void 0 && u !== null && (n = (u & qe.Open) === qe.Open),
    ![!0, !1].includes(n))
  )
    throw new Error(
      "A <Transition /> is used but it is missing a `show={true | false}` prop."
    );
  let [c, m] = p.useState(n ? "visible" : "hidden"),
    f = Of(() => {
      m("hidden");
    }),
    [v, x] = p.useState(!0),
    w = p.useRef([n]);
  st(() => {
    v !== !1 &&
      w.current[w.current.length - 1] !== n &&
      (w.current.push(n), x(!1));
  }, [w, n]);
  let N = p.useMemo(() => ({ show: n, appear: r, initial: v }), [n, r, v]);
  p.useEffect(() => {
    if (n) m("visible");
    else if (!qs(f)) m("hidden");
    else {
      let h = i.current;
      if (!h) return;
      let y = h.getBoundingClientRect();
      y.x === 0 && y.y === 0 && y.width === 0 && y.height === 0 && m("hidden");
    }
  }, [n, f]);
  let b = { unmount: l },
    g = ae(() => {
      var h;
      v && x(!1), (h = e.beforeEnter) == null || h.call(e);
    }),
    d = ae(() => {
      var h;
      v && x(!1), (h = e.beforeLeave) == null || h.call(e);
    });
  return A.createElement(
    Ws.Provider,
    { value: f },
    A.createElement(
      Hs.Provider,
      { value: N },
      it({
        ourProps: {
          ...b,
          as: p.Fragment,
          children: A.createElement(_f, {
            ref: a,
            ...b,
            ...s,
            beforeEnter: g,
            beforeLeave: d,
          }),
        },
        theirProps: {},
        defaultTag: p.Fragment,
        features: Mf,
        visible: c === "visible",
        name: "Transition",
      })
    )
  );
}
function yy(e, t) {
  let n = p.useContext(Hs) !== null,
    r = ka() !== null;
  return A.createElement(
    A.Fragment,
    null,
    !n && r
      ? A.createElement(bo, { ref: t, ...e })
      : A.createElement(_f, { ref: t, ...e })
  );
}
let bo = Ke(gy),
  _f = Ke(hy),
  vy = Ke(yy),
  Je = Object.assign(bo, { Child: vy, Root: bo }),
  xn = null;
const xy = async () => {
    if (xn) return xn;
    try {
      const e = await fetch("../config.txt");
      if (!e.ok) throw new Error("Failed to load configuration");
      return (xn = await e.json()), xn;
    } catch (e) {
      throw (console.error("Error loading config:", e), e);
    }
  },
  wy = (e) => {
    if (!xn) throw new Error("Configuration not loaded");
    return `${xn.domain}${e}`;
  },
  Ny = () => xn,
  Me = async (e, t = {}) => {
    const n = wy(e),
      r = t.method || "GET";
    console.group(`🌐 API Request: ${e}`),
      console.log(`URL: ${n}`),
      console.log(`Method: ${r}`),
      t.body && console.log("Request Payload:", t.body);
    try {
      const l = await fetch(n, {
          method: r,
          headers: { "Content-Type": "application/json" },
          body: t.body ? JSON.stringify(t.body) : void 0,
        }),
        s = await l.text();
      let i;
      try {
        i = JSON.parse(s);
      } catch (a) {
        throw (
          (console.error("Failed to parse response as JSON:", a),
          new Error("Invalid JSON response"))
        );
      }
      if ((console.log("Response:", i), console.groupEnd(), !l.ok))
        throw new Error(`HTTP error! status: ${l.status}`);
      return i;
    } catch (l) {
      throw (console.error("API Error:", l), console.groupEnd(), l);
    }
  },
  ba = ({ value: e, onChange: t, onClose: n }) => {
    const [r, l] = A.useState(e),
      [s, i] = A.useState(null),
      [a, u] = A.useState(null),
      [c, m] = A.useState(!1),
      [f, v] = A.useState(!0),
      x = A.useRef(null);
    p.useEffect(() => {
      const y =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );
      x.current && !y && x.current.focus();
    }, []),
      p.useEffect(() => {
        const y = (S) => {
          const k = S.key;
          k >= "0" && k <= "9"
            ? (S.preventDefault(), w(k))
            : k === "+" || k === "-"
            ? (S.preventDefault(), N(k))
            : k === "*"
            ? (S.preventDefault(), N("×"))
            : k === "/"
            ? (S.preventDefault(), N("÷"))
            : k === "Enter"
            ? (S.preventDefault(), d())
            : k === "Escape"
            ? (S.preventDefault(), n())
            : k === "Backspace" &&
              (S.preventDefault(), l(r.slice(0, -1) || "0"));
        };
        return (
          window.addEventListener("keydown", y),
          () => window.removeEventListener("keydown", y)
        );
      }, [n, r, a, s]);
    const w = (y) => {
        f
          ? (l(y), v(!1))
          : c
          ? (l(y), m(!1))
          : s && !a
          ? (u(r), l(y))
          : l(r === "0" ? y : r + y);
      },
      N = (y) => {
        a && b(), i(y), m(!1), v(!1);
      },
      b = () => {
        if (!a || !s) return;
        const y = parseFloat(a),
          S = parseFloat(r);
        let k = 0;
        switch (s) {
          case "+":
            k = y + S;
            break;
          case "-":
            k = y - S;
            break;
          case "×":
            k = y * S;
            break;
          case "÷":
            if (S === 0) {
              alert("不能除以零");
              return;
            }
            k = y / S;
            break;
        }
        l(Math.round(k).toString()), u(null), i(null), m(!0), v(!1);
      },
      g = () => {
        l("0"), u(null), i(null), m(!1), v(!0);
      },
      d = () => {
        let y = r;
        if (a && s) {
          const S = parseFloat(a),
            k = parseFloat(r);
          let P = 0;
          switch (s) {
            case "+":
              P = S + k;
              break;
            case "-":
              P = S - k;
              break;
            case "×":
              P = S * k;
              break;
            case "÷":
              if (k === 0) {
                alert("不能除以零");
                return;
              }
              P = S / k;
              break;
          }
          y = Math.round(P).toString();
        }
        t(y),
          setTimeout(() => {
            n();
          }, 0);
      },
      h = o.jsx("div", {
        className:
          "fixed inset-0 flex items-center justify-center bg-black/25 backdrop-blur-sm",
        style: { zIndex: 999999 },
        onClick: n,
        children: o.jsxs("div", {
          className:
            "w-[90vw] max-w-md bg-white rounded-lg shadow-xl p-4 md:p-6",
          style: { zIndex: 1e6 },
          onClick: (y) => y.stopPropagation(),
          children: [
            o.jsxs("div", {
              className: "flex justify-between items-center mb-4",
              children: [
                o.jsx("div", {
                  className: "text-sm font-medium text-gray-700",
                }),
                o.jsx("button", {
                  onClick: n,
                  className:
                    "p-1.5 text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded-lg transition-colors duration-150",
                  children: o.jsx(il, { size: 20 }),
                }),
              ],
            }),
            o.jsx("div", {
              className: "mb-6",
              children: o.jsx("input", {
                ref: x,
                type: "text",
                value: r,
                readOnly: !0,
                className:
                  "w-full px-3 py-2 text-xl font-medium tracking-wider border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-gray-900",
              }),
            }),
            o.jsxs("div", {
              className: "grid grid-cols-4 gap-2",
              children: [
                ["7", "8", "9", "÷"].map((y) =>
                  o.jsx(
                    "button",
                    {
                      onClick: (S) => {
                        S.stopPropagation(), y === "÷" ? N(y) : w(y);
                      },
                      className: `py-4 text-sm font-medium rounded-lg transition-all duration-150 shadow-sm active:scale-95 ${
                        y === "÷"
                          ? "bg-blue-50 hover:bg-blue-100 text-blue-600 hover:text-blue-700"
                          : "bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-gray-900"
                      }`,
                      children: y,
                    },
                    y
                  )
                ),
                ["4", "5", "6", "×"].map((y) =>
                  o.jsx(
                    "button",
                    {
                      onClick: (S) => {
                        S.stopPropagation(), y === "×" ? N(y) : w(y);
                      },
                      className: `py-4 text-sm font-medium rounded-lg transition-all duration-150 shadow-sm active:scale-95 ${
                        y === "×"
                          ? "bg-blue-50 hover:bg-blue-100 text-blue-600 hover:text-blue-700"
                          : "bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-gray-900"
                      }`,
                      children: y,
                    },
                    y
                  )
                ),
                ["1", "2", "3", "-"].map((y) =>
                  o.jsx(
                    "button",
                    {
                      onClick: (S) => {
                        S.stopPropagation(), y === "-" ? N(y) : w(y);
                      },
                      className: `py-4 text-sm font-medium rounded-lg transition-all duration-150 shadow-sm active:scale-95 ${
                        y === "-"
                          ? "bg-blue-50 hover:bg-blue-100 text-blue-600 hover:text-blue-700"
                          : "bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-gray-900"
                      }`,
                      children: y,
                    },
                    y
                  )
                ),
                ["0", ".", "=", "+"].map((y) =>
                  o.jsx(
                    "button",
                    {
                      onClick: (S) => {
                        S.stopPropagation(),
                          y === "=" ? b() : y === "+" ? N(y) : w(y);
                      },
                      className: `py-4 text-sm font-medium rounded-lg transition-all duration-150 shadow-sm active:scale-95 ${
                        y === "="
                          ? "bg-green-500 hover:bg-green-600 text-white"
                          : y === "+"
                          ? "bg-blue-50 hover:bg-blue-100 text-blue-600 hover:text-blue-700"
                          : "bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-gray-900"
                      }`,
                      children: y,
                    },
                    y
                  )
                ),
              ],
            }),
            o.jsxs("div", {
              className: "mt-4 flex justify-between gap-3",
              children: [
                o.jsx("button", {
                  onClick: (y) => {
                    y.stopPropagation(), g();
                  },
                  className:
                    "flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-all duration-150 shadow-sm active:scale-95 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50",
                  children: "清除",
                }),
                o.jsx("button", {
                  onClick: (y) => {
                    y.stopPropagation(), d();
                  },
                  className:
                    "flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-150 shadow-sm active:scale-95 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50",
                  children: "確認",
                }),
              ],
            }),
          ],
        }),
      });
    return Is.createPortal(h, document.body);
  },
  Sy = {
    zh: {
      "app.title": "申領建單",
      "app.search.placeholder": "搜尋藥品（藥名或藥碼）",
      "app.drug.name": "藥名",
      "app.drug.code": "藥碼",
      "app.drug.notSelected": "尚未選擇藥品",
      "app.store.source": "來源庫別",
      "app.store.source.placeholder": "請選擇來源庫別",
      "app.store.destination": "目的庫別",
      "app.store.destination.placeholder": "請選擇目的庫別",
      "app.quantity": "申領數量",
      "app.quantity.placeholder": "點擊開啟計算機",
      "app.quantity.available": "可用庫存",
      "app.button.create": "建立申領單",
      "app.button.processing": "處理中...",
      "app.orders.title": "歷史清單",
      "app.orders.empty": "無申領單資料",
      "app.orders.loading": "載入中...",
      "app.toast.success": "申領單建立成功",
      "app.filter.placeholder": "請輸入搜尋關鍵字",
      "app.filter.source": "來源",
      "app.filter.destination": "目的",
      "app.filter.code": "藥碼",
      "app.filter.name": "藥名",
      "app.requestingUnit": "申領單位",
      "app.requestingUnit.placeholder": "請選擇申領單位",
      "app.requisitionType": "申領類別",
      "app.requisitionType.all": "全部",
      "app.requisitionType.general": "一般申領",
      "app.requisitionType.urgent": "緊急申領",
      "app.urgentRequisition": "緊急申領",
      "table.source": "來源",
      "table.destination": "目的",
      "table.drugCode": "藥碼",
      "table.drugName": "藥名",
      "table.issuedQty": "撥發量",
      "table.actualQty": "實撥量",
      "table.createdTime": "加入時間",
      "table.operator": "操作者",
      "table.status": "狀態",
      "table.issuanceTime": "撥發時間",
      "table.issuer": "撥發人",
      "table.requestedQuantity": "申領量",
      "table.actualQuantity": "實撥量",
      "table.requestTime": "申領時間",
      "table.requestingPerson": "申領人",
      "table.issueTime": "核撥時間",
      "table.issuingPerson": "核撥人",
      "table.issuingUnit": "核撥單位",
      "time.type": "時間類型",
      "time.operation": "操作時間",
      "time.start": "開始日期時間",
      "time.end": "結束日期時間",
      "login.title": "申領建單系統",
      "login.username": "帳號",
      "login.password": "密碼",
      "login.button": "登入",
      "login.processing": "登入中...",
      "button.logout": "登出",
      "button.home": "回到首頁",
      "footer.copyright": "Copyright ©2025 鴻森智能科技",
      "platform.title": "智慧藥局平台",
    },
    en: {
      "app.title": "Create Requisition Order",
      "app.search.placeholder": "Search drug (name or code)",
      "app.drug.name": "Drug Name",
      "app.drug.code": "Drug Code",
      "app.drug.notSelected": "No drug selected",
      "app.store.source": "Source Store",
      "app.store.source.placeholder": "Please select source store",
      "app.store.destination": "Destination Store",
      "app.store.destination.placeholder": "Please select destination store",
      "app.quantity": "Requisition Quantity",
      "app.quantity.placeholder": "Click to open calculator",
      "app.quantity.available": "Available Stock",
      "app.button.create": "Create Requisition Order",
      "app.button.processing": "Processing...",
      "app.orders.title": "Historical Orders",
      "app.orders.empty": "No orders found",
      "app.orders.loading": "Loading...",
      "app.toast.success": "Requisition order created successfully",
      "app.filter.placeholder": "Enter search keyword",
      "app.filter.source": "Source",
      "app.filter.destination": "Destination",
      "app.filter.code": "Code",
      "app.filter.name": "Name",
      "app.requestingUnit": "Requesting Unit",
      "app.requestingUnit.placeholder": "Please select requesting unit",
      "app.requisitionType": "Requisition Type",
      "app.requisitionType.all": "All",
      "app.requisitionType.general": "General",
      "app.requisitionType.urgent": "Urgent",
      "app.urgentRequisition": "Urgent Requisition",
      "table.source": "Source",
      "table.destination": "Destination",
      "table.drugCode": "Drug Code",
      "table.drugName": "Drug Name",
      "table.issuedQty": "Issued Qty",
      "table.actualQty": "Actual Qty",
      "table.createdTime": "Created Time",
      "table.operator": "Operator",
      "table.status": "Status",
      "table.issuanceTime": "Issuance Time",
      "table.issuer": "Issuer",
      "table.requestedQuantity": "Requested Qty",
      "table.actualQuantity": "Actual Qty",
      "table.requestTime": "Request Time",
      "table.requestingPerson": "Requesting Person",
      "table.issueTime": "Issue Time",
      "table.issuingPerson": "Issuing Person",
      "table.issuingUnit": "Issuing Unit",
      "time.type": "Time Type",
      "time.operation": "Operation Time",
      "time.start": "Start Date Time",
      "time.end": "End Date Time",
      "login.title": "Requisition Order System",
      "login.username": "Username",
      "login.password": "Password",
      "login.button": "Login",
      "login.processing": "Logging in...",
      "button.logout": "Logout",
      "button.home": "Home",
      "footer.copyright": "Copyright ©2025 Hongsen Smart Technology",
      "platform.title": "Smart Pharmacy Platform",
    },
  },
  Lf = p.createContext(void 0),
  ky = ({ children: e }) => {
    const [t, n] = p.useState("zh"),
      r = () => {
        n((s) => (s === "zh" ? "en" : "zh"));
      },
      l = (s) => Sy[t][s] || s;
    return o.jsx(Lf.Provider, {
      value: { language: t, toggleLanguage: r, t: l },
      children: e,
    });
  },
  Et = () => {
    const e = p.useContext(Lf);
    if (e === void 0)
      throw new Error("useLanguage must be used within a LanguageProvider");
    return e;
  },
  jy = ({ startDate: e, endDate: t, onDateChange: n }) => {
    const { t: r } = Et(),
      l = (s, i, a, u) => {
        const c = new Date(`${s}T${i}`),
          m = new Date(`${a}T${u}`);
        n(c, m);
      };
    return o.jsxs("div", {
      className: "space-y-6 lg:space-y-0 lg:flex lg:items-start lg:gap-6",
      children: [
        o.jsxs("div", {
          className: "lg:w-[200px]",
          children: [
            o.jsx("label", {
              className: "block text-base font-medium text-gray-700 mb-2",
              children: r("time.type"),
            }),
            o.jsx("select", {
              defaultValue: "操作時間",
              className:
                "w-full border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-base",
              children: o.jsx("option", {
                value: "操作時間",
                children: r("time.operation"),
              }),
            }),
          ],
        }),
        o.jsxs("div", {
          className: "flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6",
          children: [
            o.jsxs("div", {
              className: "space-y-2",
              children: [
                o.jsx("label", {
                  className: "block text-base font-medium text-gray-700",
                  children: r("time.start"),
                }),
                o.jsxs("div", {
                  className: "flex flex-col sm:flex-row gap-3",
                  children: [
                    o.jsx("input", {
                      type: "date",
                      value: ge(e, "yyyy-MM-dd"),
                      onChange: (s) =>
                        l(
                          s.target.value,
                          ge(e, "HH:mm:ss"),
                          ge(t, "yyyy-MM-dd"),
                          ge(t, "HH:mm:ss")
                        ),
                      className:
                        "w-full sm:w-[180px] border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-base",
                    }),
                    o.jsx("input", {
                      type: "time",
                      value: ge(e, "HH:mm:ss"),
                      onChange: (s) =>
                        l(
                          ge(e, "yyyy-MM-dd"),
                          s.target.value,
                          ge(t, "yyyy-MM-dd"),
                          ge(t, "HH:mm:ss")
                        ),
                      className:
                        "w-full sm:w-[180px] border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-base",
                      step: "1",
                    }),
                  ],
                }),
              ],
            }),
            o.jsxs("div", {
              className: "space-y-2",
              children: [
                o.jsx("label", {
                  className: "block text-base font-medium text-gray-700",
                  children: r("time.end"),
                }),
                o.jsxs("div", {
                  className: "flex flex-col sm:flex-row gap-3",
                  children: [
                    o.jsx("input", {
                      type: "date",
                      value: ge(t, "yyyy-MM-dd"),
                      onChange: (s) =>
                        l(
                          ge(e, "yyyy-MM-dd"),
                          ge(e, "HH:mm:ss"),
                          s.target.value,
                          ge(t, "HH:mm:ss")
                        ),
                      className:
                        "w-full sm:w-[180px] border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-base",
                    }),
                    o.jsx("input", {
                      type: "time",
                      value: ge(t, "HH:mm:ss"),
                      onChange: (s) =>
                        l(
                          ge(e, "yyyy-MM-dd"),
                          ge(e, "HH:mm:ss"),
                          ge(t, "yyyy-MM-dd"),
                          s.target.value
                        ),
                      className:
                        "w-full sm:w-[180px] border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-base",
                      step: "1",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  by = ({
    orders: e,
    startDate: t,
    endDate: n,
    onDateChange: r,
    isLoading: l,
  }) => {
    const { t: s } = Et(),
      [i, a] = p.useState(null),
      [u, c] = p.useState(!1),
      [m, f] = p.useState(!1),
      [v, x] = p.useState(!1),
      [w, N] = p.useState(!1),
      [b, g] = p.useState(""),
      [d, h] = p.useState(null),
      [y, S] = p.useState(!1),
      [k, P] = p.useState("name"),
      [T, R] = p.useState(""),
      [L, le] = p.useState("all"),
      [Y, q] = p.useState(new Set()),
      X = (E) => {
        if (!E || E === "0001-01-01T00:00:00" || E === "1/01/01 00:00:00")
          return "-";
        try {
          let H;
          if (E.includes("/")) {
            const [K, xt] = E.split(" "),
              [wt, j, M] = K.split("/");
            H = new Date(
              `${wt}-${j.padStart(2, "0")}-${M.padStart(2, "0")}T${xt}`
            );
          } else H = new Date(E);
          return ge(H, "yyyy-MM-dd HH:mm:ss");
        } catch {
          return E;
        }
      },
      ee = [
        { value: "name", label: s("app.filter.name") },
        { value: "code", label: s("app.filter.code") },
        { value: "requestingUnit", label: s("app.requestingUnit") },
      ],
      V = [
        { value: "all", label: s("app.requisitionType.all") },
        { value: "一般申領", label: s("app.requisitionType.general") },
        { value: "緊急申領", label: s("app.requisitionType.urgent") },
      ],
      G = e.filter((E) => {
        if (T) {
          const H = T.toLowerCase();
          let K = !1;
          switch (k) {
            case "name":
              K = E.name.toLowerCase().includes(H);
              break;
            case "code":
              K = E.code.toLowerCase().includes(H);
              break;
            case "requestingUnit":
              K = E.requestingUnit.toLowerCase().includes(H);
              break;
            default:
              K = !0;
          }
          if (!K) return !1;
        }
        return L !== "all" ? E.actionType === L : !0;
      }),
      D = async () => {
        if (i) {
          S(!0), h(null);
          try {
            const E = await Me("/api/materialRequisition/delete_by_guid", {
              method: "POST",
              body: { ValueAry: [i.GUID] },
            });
            if (E.Code === 200) f(!1), c(!1), r(t, n);
            else throw new Error(E.Result || "刪除失敗");
          } catch (E) {
            h(E instanceof Error ? E.message : "系統錯誤，請稍後再試");
          } finally {
            S(!1);
          }
        }
      },
      $ = async () => {
        if (Y.size !== 0) {
          S(!0), h(null);
          try {
            const E = Array.from(Y).join(";"),
              H = await Me("/api/materialRequisition/delete_by_guid", {
                method: "POST",
                body: { ValueAry: [E] },
              });
            if (H.Code === 200) x(!1), q(new Set()), r(t, n);
            else throw new Error(H.Result || "批次刪除失敗");
          } catch (E) {
            h(E instanceof Error ? E.message : "系統錯誤，請稍後再試");
          } finally {
            S(!1);
          }
        }
      },
      F = (E, H) => {
        H.stopPropagation();
        const K = new Set(Y);
        K.has(E) ? K.delete(E) : K.add(E), q(K);
      },
      U = () => {
        const E = G.filter((H) => H.state === "等待過帳");
        if (Y.size === E.length) q(new Set());
        else {
          const H = E.map((K) => K.GUID);
          q(new Set(H));
        }
      },
      z = async () => {
        if (i) {
          if (!b || isNaN(Number(b)) || Number(b) <= 0) {
            h("請輸入有效的數量");
            return;
          }
          S(!0), h(null);
          try {
            const E = await Me("/api/materialRequisition/update_qty", {
              method: "POST",
              body: { Data: { GUID: i.GUID, requestedQuantity: b } },
            });
            if (E.Code === 200) c(!1), r(t, n);
            else throw new Error(E.Result || "更新失敗");
          } catch (E) {
            h(E instanceof Error ? E.message : "系統錯誤，請稍後再試");
          } finally {
            S(!1);
          }
        }
      },
      fe = (E) => {
        E.state === "等待過帳" &&
          (a(E), g(E.requestedQuantity), h(null), c(!0));
      },
      te = (E) => {
        E.preventDefault();
      },
      He = (E) => {
        const H = E.state === "等待過帳";
        return o.jsxs(
          "div",
          {
            onClick: () => fe(E),
            className: `
          p-4 rounded-lg border mb-4 transition-colors duration-150
          ${
            H
              ? "bg-yellow-50 hover:bg-yellow-100 cursor-pointer border-yellow-200"
              : "bg-white border-gray-200"
          }
        `,
            children: [
              o.jsxs("div", {
                className: "flex justify-between items-start mb-3",
                children: [
                  o.jsxs("div", {
                    className: "flex items-start gap-3 flex-1",
                    children: [
                      H &&
                        o.jsx("input", {
                          type: "checkbox",
                          checked: Y.has(E.GUID),
                          onChange: (K) => F(E.GUID, K),
                          onClick: (K) => K.stopPropagation(),
                          className:
                            "mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded",
                        }),
                      o.jsxs("div", {
                        className: "space-y-1",
                        children: [
                          o.jsx("div", {
                            className: "font-medium text-gray-900",
                            children: E.name,
                          }),
                          o.jsx("div", {
                            className: "font-mono text-sm text-gray-600",
                            children: E.code,
                          }),
                        ],
                      }),
                    ],
                  }),
                  o.jsx("span", {
                    className: `px-2 py-1 rounded-full text-xs font-medium ${
                      E.state === "等待過帳"
                        ? "bg-yellow-100 text-yellow-800"
                        : E.state === "已過帳"
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-800"
                    }`,
                    children: E.state,
                  }),
                ],
              }),
              o.jsxs("div", {
                className: "grid grid-cols-2 gap-x-4 gap-y-3",
                children: [
                  o.jsxs("div", {
                    children: [
                      o.jsx("div", {
                        className: "text-gray-500 mb-1",
                        children: s("app.requestingUnit"),
                      }),
                      o.jsx("div", {
                        className: "font-medium",
                        children: E.requestingUnit,
                      }),
                    ],
                  }),
                  o.jsxs("div", {
                    children: [
                      o.jsx("div", {
                        className: "text-gray-500 mb-1",
                        children: s("app.requisitionType"),
                      }),
                      o.jsx("div", {
                        className: "font-medium",
                        children: E.actionType,
                      }),
                    ],
                  }),
                  o.jsxs("div", {
                    children: [
                      o.jsx("div", {
                        className: "text-gray-500 mb-1",
                        children: s("table.requestedQuantity"),
                      }),
                      o.jsx("div", {
                        className: "font-medium",
                        children: E.requestedQuantity,
                      }),
                    ],
                  }),
                  o.jsxs("div", {
                    children: [
                      o.jsx("div", {
                        className: "text-gray-500 mb-1",
                        children: s("table.actualQuantity"),
                      }),
                      o.jsx("div", {
                        className: "font-medium",
                        children: E.actualQuantity || "-",
                      }),
                    ],
                  }),
                  o.jsxs("div", {
                    children: [
                      o.jsx("div", {
                        className: "text-gray-500 mb-1",
                        children: s("table.requestingPerson"),
                      }),
                      o.jsx("div", {
                        className: "font-medium",
                        children: E.requestingPerson || "-",
                      }),
                    ],
                  }),
                  o.jsxs("div", {
                    children: [
                      o.jsx("div", {
                        className: "text-gray-500 mb-1",
                        children: s("table.issuingPerson"),
                      }),
                      o.jsx("div", {
                        className: "font-medium",
                        children: E.issuingPerson || "-",
                      }),
                    ],
                  }),
                  o.jsxs("div", {
                    children: [
                      o.jsx("div", {
                        className: "text-gray-500 mb-1",
                        children: s("table.issuingUnit"),
                      }),
                      o.jsx("div", {
                        className: "font-medium",
                        children: E.issuingUnit || "-",
                      }),
                    ],
                  }),
                  o.jsxs("div", {
                    children: [
                      o.jsx("div", {
                        className: "text-gray-500 mb-1",
                        children: s("table.requestTime"),
                      }),
                      o.jsx("div", {
                        className: "font-medium",
                        children: X(E.requestTime),
                      }),
                    ],
                  }),
                  o.jsxs("div", {
                    children: [
                      o.jsx("div", {
                        className: "text-gray-500 mb-1",
                        children: s("table.issueTime"),
                      }),
                      o.jsx("div", {
                        className: "font-medium",
                        children: X(E.issueTime),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          },
          E.GUID
        );
      };
    return o.jsxs("div", {
      children: [
        o.jsx("h2", {
          className: "text-xl font-bold text-gray-900 mb-6",
          children: s("app.orders.title"),
        }),
        o.jsx("div", {
          className: "mb-6",
          children: o.jsx(jy, { startDate: t, endDate: n, onDateChange: r }),
        }),
        Y.size > 0 &&
          o.jsxs("div", {
            className:
              "mb-4 flex items-center justify-between bg-blue-50 p-4 rounded-lg",
            children: [
              o.jsxs("span", {
                className: "text-base font-medium text-blue-900",
                children: ["已選擇 ", Y.size, " 筆申領單"],
              }),
              o.jsxs("button", {
                onClick: () => x(!0),
                className:
                  "px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors flex items-center gap-2",
                children: [o.jsx(Wu, { size: 18 }), "批次刪除"],
              }),
            ],
          }),
        o.jsx("div", {
          className: "mb-6",
          children: o.jsxs("form", {
            onSubmit: te,
            className: "flex flex-wrap items-center gap-4",
            children: [
              o.jsxs("div", {
                className: "flex gap-3",
                children: [
                  o.jsx("select", {
                    value: k,
                    onChange: (E) => P(E.target.value),
                    className:
                      "w-32 px-3 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-colors text-base",
                    children: ee.map((E) =>
                      o.jsx(
                        "option",
                        { value: E.value, children: E.label },
                        E.value
                      )
                    ),
                  }),
                  o.jsxs("div", {
                    className: "relative w-64",
                    children: [
                      o.jsx("input", {
                        type: "text",
                        value: T,
                        onChange: (E) => R(E.target.value),
                        placeholder: s("app.filter.placeholder"),
                        className:
                          "w-full pl-10 pr-3 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-colors text-base",
                      }),
                      o.jsx(pf, {
                        className: "absolute left-3 top-2.5 text-gray-400",
                        size: 20,
                      }),
                    ],
                  }),
                ],
              }),
              o.jsxs("div", {
                className: "flex items-center gap-4 ml-auto",
                children: [
                  o.jsxs("span", {
                    className:
                      "text-base font-medium text-gray-700 whitespace-nowrap",
                    children: [s("app.requisitionType"), ":"],
                  }),
                  o.jsx("div", {
                    className: "flex gap-4",
                    children: V.map((E) =>
                      o.jsxs(
                        "label",
                        {
                          className:
                            "flex items-center gap-2 cursor-pointer whitespace-nowrap",
                          children: [
                            o.jsx("input", {
                              type: "radio",
                              name: "requisitionType",
                              value: E.value,
                              checked: L === E.value,
                              onChange: (H) => le(H.target.value),
                              className:
                                "h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300",
                            }),
                            o.jsx("span", {
                              className: "text-base text-gray-700",
                              children: E.label,
                            }),
                          ],
                        },
                        E.value
                      )
                    ),
                  }),
                ],
              }),
            ],
          }),
        }),
        d &&
          o.jsxs("div", {
            className:
              "mb-6 p-4 bg-red-100 text-red-700 rounded-md flex items-center gap-2",
            children: [
              o.jsx(Jn, { size: 20 }),
              o.jsx("span", { className: "text-base", children: d }),
            ],
          }),
        l
          ? o.jsxs("div", {
              className: "text-center py-8",
              children: [
                o.jsx("div", {
                  className:
                    "animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto",
                }),
                o.jsx("p", {
                  className: "mt-2 text-base text-gray-600",
                  children: s("app.orders.loading"),
                }),
              ],
            })
          : G.length === 0
          ? o.jsx("div", {
              className: "text-center py-8 text-base text-gray-500",
              children: s("app.orders.empty"),
            })
          : o.jsxs(o.Fragment, {
              children: [
                o.jsx("div", {
                  className: "sm:hidden space-y-4",
                  children: G.map(He),
                }),
                o.jsx("div", {
                  className:
                    "hidden sm:block overflow-x-auto border border-gray-200 rounded-lg",
                  children: o.jsxs("table", {
                    className: "min-w-full",
                    children: [
                      o.jsx("thead", {
                        className: "bg-gray-50",
                        children: o.jsxs("tr", {
                          children: [
                            o.jsx("th", {
                              className:
                                "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                              children: o.jsx("input", {
                                type: "checkbox",
                                checked:
                                  Y.size ===
                                    G.filter((E) => E.state === "等待過帳")
                                      .length &&
                                  G.filter((E) => E.state === "等待過帳")
                                    .length > 0,
                                onChange: U,
                                className:
                                  "h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded",
                              }),
                            }),
                            o.jsx("th", {
                              className:
                                "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                              children: s("app.requestingUnit"),
                            }),
                            o.jsx("th", {
                              className:
                                "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                              children: s("app.requisitionType"),
                            }),
                            o.jsx("th", {
                              className:
                                "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                              children: s("table.drugCode"),
                            }),
                            o.jsx("th", {
                              className:
                                "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                              children: s("table.drugName"),
                            }),
                            o.jsx("th", {
                              className:
                                "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                              children: s("table.requestedQuantity"),
                            }),
                            o.jsx("th", {
                              className:
                                "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                              children: s("table.actualQuantity"),
                            }),
                            o.jsx("th", {
                              className:
                                "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                              children: s("table.requestTime"),
                            }),
                            o.jsx("th", {
                              className:
                                "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                              children: s("table.requestingPerson"),
                            }),
                            o.jsx("th", {
                              className:
                                "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                              children: s("table.status"),
                            }),
                            o.jsx("th", {
                              className:
                                "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                              children: s("table.issueTime"),
                            }),
                            o.jsx("th", {
                              className:
                                "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                              children: s("table.issuingPerson"),
                            }),
                            o.jsx("th", {
                              className:
                                "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                              children: s("table.issuingUnit"),
                            }),
                          ],
                        }),
                      }),
                      o.jsx("tbody", {
                        className: "bg-white divide-y divide-gray-200",
                        children: G.map((E) => {
                          const H = E.state === "等待過帳";
                          return o.jsxs(
                            "tr",
                            {
                              onClick: () => fe(E),
                              className: `
                        transition-colors duration-150
                        ${
                          H
                            ? "bg-yellow-50 hover:bg-yellow-100 cursor-pointer"
                            : "hover:bg-gray-50"
                        }
                      `,
                              children: [
                                o.jsx("td", {
                                  className:
                                    "px-6 py-3 whitespace-nowrap text-base text-gray-900",
                                  children:
                                    H &&
                                    o.jsx("input", {
                                      type: "checkbox",
                                      checked: Y.has(E.GUID),
                                      onChange: (K) => F(E.GUID, K),
                                      onClick: (K) => K.stopPropagation(),
                                      className:
                                        "h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded",
                                    }),
                                }),
                                o.jsx("td", {
                                  className:
                                    "px-6 py-3 whitespace-nowrap text-base text-gray-900",
                                  children: E.requestingUnit,
                                }),
                                o.jsx("td", {
                                  className:
                                    "px-6 py-3 whitespace-nowrap text-base text-gray-900",
                                  children: E.actionType,
                                }),
                                o.jsx("td", {
                                  className:
                                    "px-6 py-3 whitespace-nowrap font-mono text-base text-gray-900",
                                  children: E.code,
                                }),
                                o.jsx("td", {
                                  className:
                                    "px-6 py-3 whitespace-nowrap text-base text-gray-900",
                                  children: E.name,
                                }),
                                o.jsx("td", {
                                  className:
                                    "px-6 py-3 whitespace-nowrap text-base font-medium text-gray-900",
                                  children: E.requestedQuantity,
                                }),
                                o.jsx("td", {
                                  className:
                                    "px-6 py-3 whitespace-nowrap text-base font-medium text-gray-900",
                                  children: E.actualQuantity || "-",
                                }),
                                o.jsx("td", {
                                  className:
                                    "px-6 py-3 whitespace-nowrap text-base text-gray-500",
                                  children: X(E.requestTime),
                                }),
                                o.jsx("td", {
                                  className:
                                    "px-6 py-3 whitespace-nowrap text-base text-gray-900",
                                  children: E.requestingPerson || "-",
                                }),
                                o.jsx("td", {
                                  className: "px-6 py-3 whitespace-nowrap",
                                  children: o.jsx("span", {
                                    className: `px-2 py-1 rounded-full text-xs font-medium ${
                                      E.state === "等待過帳"
                                        ? "bg-yellow-100 text-yellow-800"
                                        : E.state === "已過帳"
                                        ? "bg-green-100 text-green-800"
                                        : "bg-gray-100 text-gray-800"
                                    }`,
                                    children: E.state,
                                  }),
                                }),
                                o.jsx("td", {
                                  className:
                                    "px-6 py-3 whitespace-nowrap text-base text-gray-500",
                                  children: X(E.issueTime),
                                }),
                                o.jsx("td", {
                                  className:
                                    "px-6 py-3 whitespace-nowrap text-base text-gray-900",
                                  children: E.issuingPerson || "-",
                                }),
                                o.jsx("td", {
                                  className:
                                    "px-6 py-3 whitespace-nowrap text-base text-gray-900",
                                  children: E.issuingUnit || "-",
                                }),
                              ],
                            },
                            E.GUID
                          );
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
        o.jsx(Je, {
          appear: !0,
          show: u,
          as: p.Fragment,
          children: o.jsxs(Xe, {
            as: "div",
            className: "relative z-50",
            onClose: () => !y && c(!1),
            children: [
              o.jsx(Je.Child, {
                as: p.Fragment,
                enter: "ease-out duration-300",
                enterFrom: "opacity-0",
                enterTo: "opacity-100",
                leave: "ease-in duration-200",
                leaveFrom: "opacity-100",
                leaveTo: "opacity-0",
                children: o.jsx("div", {
                  className: "fixed inset-0 bg-black bg-opacity-25",
                }),
              }),
              o.jsx("div", {
                className: "fixed inset-0 overflow-y-auto",
                children: o.jsx("div", {
                  className:
                    "flex min-h-full items-center justify-center p-4 text-center",
                  children: o.jsx(Je.Child, {
                    as: p.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0 scale-95",
                    enterTo: "opacity-100 scale-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100 scale-100",
                    leaveTo: "opacity-0 scale-95",
                    children: o.jsxs(Xe.Panel, {
                      className:
                        "w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all",
                      children: [
                        o.jsx(Xe.Title, {
                          as: "h3",
                          className: "text-xl font-bold text-gray-900 mb-6",
                          children: "編輯申領單",
                        }),
                        i &&
                          o.jsxs("div", {
                            className: "space-y-6",
                            children: [
                              o.jsxs("div", {
                                className: "grid grid-cols-2 gap-x-4 gap-y-4",
                                children: [
                                  o.jsxs("div", {
                                    children: [
                                      o.jsx("label", {
                                        className:
                                          "block text-base font-medium text-gray-700 mb-1",
                                        children: s("app.requestingUnit"),
                                      }),
                                      o.jsx("div", {
                                        className: "text-base text-gray-900",
                                        children: i.requestingUnit,
                                      }),
                                    ],
                                  }),
                                  o.jsxs("div", {
                                    children: [
                                      o.jsx("label", {
                                        className:
                                          "block text-base font-medium text-gray-700 mb-1",
                                        children: s("app.requisitionType"),
                                      }),
                                      o.jsx("div", {
                                        className: "text-base text-gray-900",
                                        children: i.actionType,
                                      }),
                                    ],
                                  }),
                                  o.jsxs("div", {
                                    children: [
                                      o.jsx("label", {
                                        className:
                                          "block text-base font-medium text-gray-700 mb-1",
                                        children: s("table.requestedQuantity"),
                                      }),
                                      o.jsx("div", {
                                        className: "flex gap-2 items-center",
                                        children: o.jsx("input", {
                                          type: "text",
                                          value: b,
                                          onClick: () => N(!0),
                                          readOnly: !0,
                                          className:
                                            "w-32 p-2 border rounded text-base cursor-pointer",
                                          placeholder: s(
                                            "app.quantity.placeholder"
                                          ),
                                        }),
                                      }),
                                    ],
                                  }),
                                  o.jsxs("div", {
                                    children: [
                                      o.jsx("label", {
                                        className:
                                          "block text-base font-medium text-gray-700 mb-1",
                                        children: s("table.actualQuantity"),
                                      }),
                                      o.jsx("div", {
                                        className: "text-base text-gray-900",
                                        children: i.actualQuantity || "-",
                                      }),
                                    ],
                                  }),
                                  o.jsxs("div", {
                                    children: [
                                      o.jsx("label", {
                                        className:
                                          "block text-base font-medium text-gray-700 mb-1",
                                        children: s("table.requestingPerson"),
                                      }),
                                      o.jsx("div", {
                                        className: "text-base text-gray-900",
                                        children: i.requestingPerson || "-",
                                      }),
                                    ],
                                  }),
                                  o.jsxs("div", {
                                    children: [
                                      o.jsx("label", {
                                        className:
                                          "block text-base font-medium text-gray-700 mb-1",
                                        children: s("table.issuingPerson"),
                                      }),
                                      o.jsx("div", {
                                        className: "text-base text-gray-900",
                                        children: i.issuingPerson || "-",
                                      }),
                                    ],
                                  }),
                                  o.jsxs("div", {
                                    children: [
                                      o.jsx("label", {
                                        className:
                                          "block text-base font-medium text-gray-700 mb-1",
                                        children: s("table.issuingUnit"),
                                      }),
                                      o.jsx("div", {
                                        className: "text-base text-gray-900",
                                        children: i.issuingUnit || "-",
                                      }),
                                    ],
                                  }),
                                  o.jsxs("div", {
                                    children: [
                                      o.jsx("label", {
                                        className:
                                          "block text-base font-medium text-gray-700 mb-1",
                                        children: s("table.requestTime"),
                                      }),
                                      o.jsx("div", {
                                        className: "text-base text-gray-900",
                                        children: X(i.requestTime),
                                      }),
                                    ],
                                  }),
                                  o.jsxs("div", {
                                    children: [
                                      o.jsx("label", {
                                        className:
                                          "block text-base font-medium text-gray-700 mb-1",
                                        children: s("table.issueTime"),
                                      }),
                                      o.jsx("div", {
                                        className: "text-base text-gray-900",
                                        children: X(i.issueTime),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              d &&
                                o.jsxs("div", {
                                  className:
                                    "p-4 bg-red-100 text-red-700 rounded-md flex items-center gap-2",
                                  children: [
                                    o.jsx(Jn, { size: 20 }),
                                    o.jsx("span", {
                                      className: "text-base",
                                      children: d,
                                    }),
                                  ],
                                }),
                              o.jsxs("div", {
                                className: "mt-6 flex justify-between gap-4",
                                children: [
                                  o.jsxs("button", {
                                    type: "button",
                                    onClick: () => f(!0),
                                    disabled: y,
                                    className:
                                      "inline-flex justify-center items-center gap-2 rounded-md border border-transparent bg-red-100 px-4 py-2 text-base font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
                                    children: [o.jsx(Wu, { size: 16 }), "刪除"],
                                  }),
                                  o.jsxs("div", {
                                    className: "flex gap-2",
                                    children: [
                                      o.jsx("button", {
                                        type: "button",
                                        onClick: () => !y && c(!1),
                                        disabled: y,
                                        className:
                                          "inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
                                        children: "取消",
                                      }),
                                      o.jsx("button", {
                                        type: "button",
                                        onClick: z,
                                        disabled: y,
                                        className:
                                          "inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-base font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
                                        children: y ? "處理中..." : "儲存",
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
                }),
              }),
            ],
          }),
        }),
        o.jsx(Je, {
          appear: !0,
          show: m,
          as: p.Fragment,
          children: o.jsxs(Xe, {
            as: "div",
            className: "relative z-[60]",
            onClose: () => !y && f(!1),
            children: [
              o.jsx(Je.Child, {
                as: p.Fragment,
                enter: "ease-out duration-300",
                enterFrom: "opacity-0",
                enterTo: "opacity-100",
                leave: "ease-in duration-200",
                leaveFrom: "opacity-100",
                leaveTo: "opacity-0",
                children: o.jsx("div", {
                  className: "fixed inset-0 bg-black bg-opacity-25",
                }),
              }),
              o.jsx("div", {
                className: "fixed inset-0 overflow-y-auto",
                children: o.jsx("div", {
                  className:
                    "flex min-h-full items-center justify-center p-4 text-center",
                  children: o.jsx(Je.Child, {
                    as: p.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0 scale-95",
                    enterTo: "opacity-100 scale-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100 scale-100",
                    leaveTo: "opacity-0 scale-95",
                    children: o.jsxs(Xe.Panel, {
                      className:
                        "w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all",
                      children: [
                        o.jsx(Xe.Title, {
                          as: "h3",
                          className: "text-xl font-bold text-gray-900 mb-6",
                          children: "確認刪除申領單",
                        }),
                        o.jsx("div", {
                          className: "mt-2",
                          children: o.jsx("p", {
                            className: "text-base text-gray-500",
                            children: "確定要刪除此筆申領資料嗎？",
                          }),
                        }),
                        o.jsxs("div", {
                          className: "mt-6 flex justify-end gap-3",
                          children: [
                            o.jsx("button", {
                              type: "button",
                              onClick: () => !y && f(!1),
                              disabled: y,
                              className:
                                "inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
                              children: "取消",
                            }),
                            o.jsx("button", {
                              type: "button",
                              onClick: D,
                              disabled: y,
                              className:
                                "inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
                              children: y ? "處理中..." : "確認刪除",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            ],
          }),
        }),
        o.jsx(Je, {
          appear: !0,
          show: v,
          as: p.Fragment,
          children: o.jsxs(Xe, {
            as: "div",
            className: "relative z-50",
            onClose: () => !y && x(!1),
            children: [
              o.jsx(Je.Child, {
                as: p.Fragment,
                enter: "ease-out duration-300",
                enterFrom: "opacity-0",
                enterTo: "opacity-100",
                leave: "ease-in duration-200",
                leaveFrom: "opacity-100",
                leaveTo: "opacity-0",
                children: o.jsx("div", {
                  className: "fixed inset-0 bg-black bg-opacity-25",
                }),
              }),
              o.jsx("div", {
                className: "fixed inset-0 overflow-y-auto",
                children: o.jsx("div", {
                  className:
                    "flex min-h-full items-center justify-center p-4 text-center",
                  children: o.jsx(Je.Child, {
                    as: p.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0 scale-95",
                    enterTo: "opacity-100 scale-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100 scale-100",
                    leaveTo: "opacity-0 scale-95",
                    children: o.jsxs(Xe.Panel, {
                      className:
                        "w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all",
                      children: [
                        o.jsx(Xe.Title, {
                          as: "h3",
                          className: "text-xl font-bold text-gray-900 mb-6",
                          children: "確認批次刪除申領單",
                        }),
                        o.jsx("div", {
                          className: "mt-2",
                          children: o.jsxs("p", {
                            className: "text-base text-gray-500",
                            children: [
                              "確定要刪除已選擇的 ",
                              o.jsx("span", {
                                className: "font-bold text-gray-900",
                                children: Y.size,
                              }),
                              " 筆申領資料嗎？",
                            ],
                          }),
                        }),
                        d &&
                          o.jsxs("div", {
                            className:
                              "mt-4 p-4 bg-red-100 text-red-700 rounded-md flex items-center gap-2",
                            children: [
                              o.jsx(Jn, { size: 20 }),
                              o.jsx("span", {
                                className: "text-base",
                                children: d,
                              }),
                            ],
                          }),
                        o.jsxs("div", {
                          className: "mt-6 flex justify-end gap-3",
                          children: [
                            o.jsx("button", {
                              type: "button",
                              onClick: () => !y && x(!1),
                              disabled: y,
                              className:
                                "inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
                              children: "取消",
                            }),
                            o.jsx("button", {
                              type: "button",
                              onClick: $,
                              disabled: y,
                              className:
                                "inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
                              children: y ? "處理中..." : "確認刪除",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            ],
          }),
        }),
        w && o.jsx(ba, { value: b, onChange: g, onClose: () => N(!1) }),
      ],
    });
  },
  $f = (e) => {
    const t = e.find((n) => n.name === "申領建單");
    return (t == null ? void 0 : t.state) === !0;
  },
  Ey = (e) =>
    $f(e.Permissions)
      ? (sessionStorage.setItem("user_session", JSON.stringify(e)), !0)
      : !1,
  Bs = () => {
    const e = sessionStorage.getItem("user_session");
    if (!e) return null;
    try {
      const t = JSON.parse(e);
      return !t.GUID || !t.ID || !t.Name || !$f(t.Permissions)
        ? (Ss(), null)
        : t;
    } catch {
      return Ss(), null;
    }
  },
  Ss = () => {
    sessionStorage.removeItem("user_session");
  },
  Cy = () => {
    const e = Bs();
    if (!e) return !1;
    const t = new Date(e.loginTime).getTime();
    return (new Date().getTime() - t) / (1e3 * 60 * 60) > 24 ? (Ss(), !1) : !0;
  },
  Ff = () => {
    const e = Bs();
    return (e == null ? void 0 : e.Name) || "";
  },
  Rf = () => {
    const e = Bs();
    return (e == null ? void 0 : e.ID) || "";
  },
  Py = ({
    onLogin: e,
    className: t = "",
    title: n = "申領建單系統",
    logo: r,
  }) => {
    const [l, s] = p.useState(""),
      [i, a] = p.useState(""),
      [u, c] = p.useState(null),
      [m, f] = p.useState(!1),
      v = async (x) => {
        x.preventDefault(), c(null), f(!0);
        try {
          const w = await Me("/api/session/login", {
            method: "POST",
            body: { Data: { ID: l, Password: i } },
          });
          if (w.Code === 200) {
            if (!Ey(w.Data)) {
              c("無申領建單權限，無法登入");
              return;
            }
            e();
          } else c(w.Result || "登入失敗，請檢查帳號密碼是否正確");
        } catch (w) {
          console.error("Login error:", w),
            c(w instanceof Error ? w.message : "系統錯誤，請稍後再試");
        } finally {
          f(!1);
        }
      };
    return o.jsx("div", {
      className: `min-h-screen bg-gray-100 flex items-center justify-center p-4 ${t}`,
      children: o.jsxs("div", {
        className: "bg-white rounded-lg shadow-md p-8 w-full max-w-md",
        children: [
          r &&
            o.jsx("div", {
              className: "mb-6 flex justify-center",
              children: r,
            }),
          o.jsx("h1", {
            className: "text-2xl font-bold text-center mb-8",
            children: n,
          }),
          u &&
            o.jsxs("div", {
              className:
                "mb-6 p-4 bg-red-100 text-red-700 rounded-md flex items-center gap-2",
              children: [
                o.jsx(Jn, { size: 20 }),
                o.jsx("span", { children: u }),
              ],
            }),
          o.jsxs("form", {
            onSubmit: v,
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
                    value: l,
                    onChange: (x) => s(x.target.value),
                    className:
                      "w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                    required: !0,
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
                    value: i,
                    onChange: (x) => a(x.target.value),
                    className:
                      "w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                    required: !0,
                  }),
                ],
              }),
              o.jsx("button", {
                type: "submit",
                disabled: m,
                className: `w-full py-2 px-4 rounded font-medium transition-colors duration-200 ${
                  m
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600 text-white"
                }`,
                children: m ? "登入中..." : "登入",
              }),
            ],
          }),
        ],
      }),
    });
  },
  Ty = () => {
    const { language: e, toggleLanguage: t } = Et();
    return o.jsxs("button", {
      onClick: t,
      className:
        "inline-flex items-center px-2 sm:px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200",
      title: e === "zh" ? "繁體中文" : "English",
      children: [
        o.jsx(N0, { className: "h-4 w-4" }),
        o.jsx("span", {
          className: "ml-2 hidden sm:inline",
          children: e === "zh" ? "繁體中文" : "English",
        }),
      ],
    });
  },
  Dy = ({ title: e }) =>
    o.jsx("h1", {
      className: "text-2xl md:text-3xl font-semibold text-gray-800",
      children: e,
    }),
  Oy = () => {
    const e = Bs();
    return e
      ? o.jsxs("p", {
          className: "text-sm text-gray-600",
          children: [e.Name, " - ", e.Employer],
        })
      : null;
  },
  My = ({ onLogout: e }) => {
    const { t } = Et();
    return o.jsxs("button", {
      onClick: e,
      className:
        "inline-flex items-center px-2 sm:px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200",
      title: t("button.logout"),
      children: [
        o.jsx(k0, { className: "h-4 w-4" }),
        o.jsx("span", {
          className: "ml-2 hidden sm:inline",
          children: t("button.logout"),
        }),
      ],
    });
  },
  _y = () => {
    const { t: e } = Et(),
      t = () => {
        const n = Ny();
        n != null &&
          n.homepage &&
          (window.location.href = `${n.homepage}/phar_system/frontpage/`);
      };
    return o.jsxs("button", {
      onClick: t,
      className:
        "p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors group relative",
      title: e("platform.title"),
      children: [
        o.jsx(S0, { size: 24 }),
        o.jsx("span", {
          className:
            "absolute left-1/2 -translate-x-1/2 -bottom-8 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap",
          children: e("platform.title"),
        }),
      ],
    });
  },
  Ly = ({ onLogout: e }) => {
    const { t } = Et();
    return o.jsx("header", {
      className: "bg-white",
      children: o.jsx("div", {
        className: "w-full mx-auto p-4",
        children: o.jsxs("div", {
          className: "flex justify-between items-center",
          children: [
            o.jsxs("div", {
              className: "flex items-center gap-4",
              children: [
                o.jsx(_y, {}),
                o.jsxs("div", {
                  className: "flex flex-col",
                  children: [
                    o.jsx(Dy, { title: t("app.title") }),
                    o.jsx(Oy, {}),
                  ],
                }),
              ],
            }),
            o.jsxs("div", {
              className: "flex items-center gap-4",
              children: [o.jsx(Ty, {}), o.jsx(My, { onLogout: e })],
            }),
          ],
        }),
      }),
    });
  },
  zf = ({ message: e, onClose: t, duration: n = 3e3, type: r = "success" }) => {
    const [l, s] = p.useState(!1);
    p.useEffect(() => {
      const c = setTimeout(() => {
        s(!0),
          setTimeout(() => {
            t();
          }, 300);
      }, n);
      return () => clearTimeout(c);
    }, [n, t]);
    const i = () => {
        s(!0),
          setTimeout(() => {
            t();
          }, 300);
      },
      a =
        r === "success"
          ? {
              bg: "bg-green-50",
              text: "text-green-800",
              border: "border-green-200",
              icon: "text-green-500",
              button: "text-green-600 hover:text-green-800",
            }
          : {
              bg: "bg-red-50",
              text: "text-red-800",
              border: "border-red-200",
              icon: "text-red-500",
              button: "text-red-600 hover:text-red-800",
            },
      u = o.jsxs("div", {
        className: `fixed top-4 right-4 min-w-[200px] max-w-[400px] flex items-center gap-2 ${
          a.bg
        } ${a.text} px-4 py-3 rounded-lg shadow-xl border ${a.border} ${
          l ? "animate-slide-out" : "animate-slide-in"
        }`,
        style: { zIndex: 1e6 },
        children: [
          r === "success"
            ? o.jsx(w0, { size: 20, className: a.icon })
            : o.jsx(Jn, { size: 20, className: a.icon }),
          o.jsx("span", { className: "text-sm font-medium", children: e }),
          o.jsx("button", {
            onClick: i,
            className: `ml-2 ${a.button} transition-colors duration-150`,
            children: o.jsx(il, { size: 16 }),
          }),
        ],
      });
    return Is.createPortal(u, document.body);
  },
  $y = ({
    drugs: e,
    warehouses: t,
    onSubmit: n,
    isSubmitting: r,
    resetTrigger: l = 0,
    onOpenBarcodeDialog: s,
  }) => {
    const { t: i } = Et(),
      [a, u] = p.useState(""),
      [c, m] = p.useState([]),
      [f, v] = p.useState(null),
      [x, w] = p.useState(""),
      [N, b] = p.useState(""),
      [g, d] = p.useState(!1),
      [h, y] = p.useState(null),
      [S, k] = p.useState(null),
      [P, T] = p.useState(null),
      [R, L] = p.useState(!1),
      [le, Y] = p.useState(!1),
      [q, X] = p.useState([]),
      [ee, V] = p.useState(null),
      [G, D] = p.useState(!1),
      [$, F] = p.useState(""),
      U = t.filter((O) => O.displayName !== "藥庫" && O.type !== "藥庫"),
      z = t.filter((O) => O.type === "藥庫"),
      fe = z[0];
    p.useEffect(() => {
      z.length > 0 && !$ && F(z[0].name);
    }, [t]),
      p.useEffect(() => {
        l > 0 &&
          (u(""),
          m([]),
          v(null),
          b(""),
          y(null),
          k(null),
          X([]),
          V(null),
          T(null),
          D(!1));
      }, [l]);
    const te = (O) => {
        const W = O.target.value;
        if ((u(W), !W.trim())) {
          m([]);
          return;
        }
        const ne = W.toLowerCase(),
          Ne = e
            .filter((ot) => {
              var Se;
              return (
                ot.NAME.toLowerCase().includes(ne) ||
                ot.CODE.toLowerCase().includes(ne) ||
                ot.CHT_NAME.toLowerCase().includes(ne) ||
                ((Se = ot.SKDIACODE) == null
                  ? void 0
                  : Se.toLowerCase().includes(ne))
              );
            })
            .slice(0, 10);
        m(Ne);
      },
      He = (O) => {
        v(O), u(""), m([]), y(null), X([]), V(null);
      },
      E = async (O, W) => {
        L(!0);
        try {
          const ne = t.find((at) => at.displayName === W || at.name === W),
            Ne = (ne == null ? void 0 : ne.type) || "藥庫",
            Se = (
              await Me("/api/stock/get_stock_by_code", {
                method: "POST",
                body: { ServerName: W, ServerType: Ne, ValueAry: [O] },
              })
            ).Data[0];
          if ((y(Se), Se && Se.lot && Se.expiry_date && Se.qty)) {
            const at = [],
              It = Se.lot || [],
              dr = Se.expiry_date || [],
              Ea = Se.qty || [];
            for (
              let fr = 0;
              fr < Math.max(It.length, dr.length, Ea.length);
              fr++
            ) {
              const Ca = {
                lotNumber: It[fr] || "",
                expiryDate: dr[fr] || "",
                quantity: Ea[fr] || "0",
              };
              parseInt(Ca.quantity) > 0 && at.push(Ca);
            }
            X(at), at.length === 1 ? V(at[0]) : at.length > 1 && V(null);
          } else X([]), V(null);
          T(null);
        } catch (ne) {
          console.error("Error fetching stock:", ne),
            T({ message: "無法取得庫存資料，請稍後再試", type: "error" }),
            y(null),
            X([]),
            V(null);
        } finally {
          L(!1);
        }
      },
      H = async (O, W) => {
        Y(!0);
        try {
          const Ne = (
            await Me("/api/stock/get_stock_by_code", {
              method: "POST",
              body: { ServerName: W, ServerType: "藥庫", ValueAry: [O] },
            })
          ).Data[0];
          k(Ne);
        } catch (ne) {
          console.error("Error fetching pharmacy stock:", ne), k(null);
        } finally {
          Y(!1);
        }
      };
    p.useEffect(() => {
      f && x ? E(f.CODE, x) : (y(null), X([]), V(null));
    }, [f, x]),
      p.useEffect(() => {
        f && fe ? H(f.CODE, fe.name) : k(null);
      }, [f, fe]);
    const K = (O) => {
        const W = O.target.value;
        w(W), T(null);
      },
      xt = (O) => {
        const W = O.target.value;
        (W === "" || /^\d+$/.test(W)) && b(W);
      },
      wt = async (O) => {
        if ((O && O.preventDefault(), !f)) {
          T({ message: "請選擇藥品", type: "error" });
          return;
        }
        if (!x) {
          T({ message: "請選擇申領單位", type: "error" });
          return;
        }
        if (!N) {
          T({ message: "請輸入申領數量", type: "error" });
          return;
        }
        if (q.length > 1 && !ee) {
          T({ message: "請選擇批號", type: "error" });
          return;
        }
        await n({
          drug: f,
          sourceWarehouse: x,
          destinationWarehouse: "",
          quantity: N,
          stockInfo: h,
          selectedBatch: ee || void 0,
          isUrgent: G,
          issuingUnit: $,
        });
      },
      j = (O) => {
        O.key === "Enter" && a && c.length > 0 && He(c[0]);
      },
      M = (O) => (!O || O === "2050/01/01" ? "無期限" : O),
      I = () => (ee ? ee.quantity : null);
    return o.jsxs(o.Fragment, {
      children: [
        P &&
          o.jsx(zf, {
            message: P.message,
            type: P.type,
            onClose: () => T(null),
          }),
        o.jsxs("form", {
          onSubmit: wt,
          className:
            "bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6 space-y-6",
          children: [
            o.jsxs("div", {
              children: [
                o.jsxs("div", {
                  className: "flex gap-2",
                  children: [
                    o.jsxs("div", {
                      className: "relative flex-1",
                      children: [
                        o.jsx("input", {
                          type: "text",
                          value: a,
                          onChange: te,
                          onKeyPress: j,
                          placeholder: i("app.search.placeholder"),
                          className:
                            "w-full px-3 py-2 pl-8 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-colors text-base text-gray-900",
                        }),
                        o.jsx(pf, {
                          size: 18,
                          className: "absolute left-2 top-2.5 text-gray-400",
                        }),
                      ],
                    }),
                    s &&
                      o.jsxs("button", {
                        type: "button",
                        onClick: s,
                        className:
                          "px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center gap-2",
                        children: [
                          o.jsx(ff, { size: 18 }),
                          o.jsx("span", { children: "掃碼建單" }),
                        ],
                      }),
                  ],
                }),
                c.length > 0 &&
                  o.jsx("div", {
                    className:
                      "mt-2 max-h-60 overflow-y-auto border rounded-lg shadow-sm",
                    children: c.map((O) =>
                      o.jsxs(
                        "div",
                        {
                          onClick: () => He(O),
                          className:
                            "p-4 hover:bg-gray-50 cursor-pointer border-b transition-colors duration-150",
                          children: [
                            o.jsx("div", {
                              className: "text-base font-medium text-gray-900",
                              children: O.NAME,
                            }),
                            o.jsxs("div", {
                              className: "text-base text-gray-600",
                              children: ["藥碼: ", O.CODE],
                            }),
                            O.SKDIACODE &&
                              o.jsxs("div", {
                                className: "text-base text-gray-600",
                                children: ["料號: ", O.SKDIACODE],
                              }),
                            O.CHT_NAME &&
                              o.jsx("div", {
                                className: "text-base text-gray-600",
                                children: O.CHT_NAME,
                              }),
                          ],
                        },
                        O.GUID
                      )
                    ),
                  }),
              ],
            }),
            o.jsxs("div", {
              className: "grid grid-cols-1 sm:grid-cols-2 gap-6",
              children: [
                o.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    o.jsx("label", {
                      className: "block text-base font-medium text-gray-700",
                      children: i("app.drug.name"),
                    }),
                    o.jsx("div", {
                      className: "bg-gray-50 rounded-lg border border-gray-200",
                      children: f
                        ? o.jsxs("div", {
                            className: "p-4",
                            children: [
                              o.jsx("div", {
                                className:
                                  "text-base font-medium text-gray-900",
                                children: f.NAME,
                              }),
                              f.SKDIACODE &&
                                o.jsxs("div", {
                                  className: "text-base text-gray-600 mt-1",
                                  children: ["料號: ", f.SKDIACODE],
                                }),
                              f.CHT_NAME &&
                                o.jsx("div", {
                                  className: "text-base text-gray-600 mt-1",
                                  children: f.CHT_NAME,
                                }),
                            ],
                          })
                        : o.jsx("div", {
                            className: "p-4",
                            children: o.jsx("div", {
                              className: "text-base text-gray-600",
                              children: i("app.drug.notSelected"),
                            }),
                          }),
                    }),
                  ],
                }),
                o.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    o.jsx("label", {
                      className: "block text-base font-medium text-gray-700",
                      children: i("app.drug.code"),
                    }),
                    o.jsx("div", {
                      className: "bg-gray-50 rounded-lg border border-gray-200",
                      children: f
                        ? o.jsx("div", {
                            className: "p-4",
                            children: o.jsx("div", {
                              className: "text-base font-medium text-gray-900",
                              children: f.CODE,
                            }),
                          })
                        : o.jsx("div", {
                            className: "p-4",
                            children: o.jsx("div", {
                              className: "text-base text-gray-600",
                              children: i("app.drug.notSelected"),
                            }),
                          }),
                    }),
                  ],
                }),
              ],
            }),
            o.jsxs("div", {
              className: "grid grid-cols-1 sm:grid-cols-3 gap-6",
              children: [
                o.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    o.jsx("label", {
                      className: "block text-base font-medium text-gray-700",
                      children: i("app.requestingUnit"),
                    }),
                    o.jsxs("select", {
                      value: x,
                      onChange: K,
                      className:
                        "w-full px-3 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-colors text-base text-gray-900",
                      children: [
                        o.jsx("option", {
                          value: "",
                          children: i("app.requestingUnit.placeholder"),
                        }),
                        U.map((O) =>
                          o.jsx(
                            "option",
                            { value: O.displayName, children: O.displayName },
                            O.GUID
                          )
                        ),
                      ],
                    }),
                  ],
                }),
                o.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    o.jsx("label", {
                      className: "block text-base font-medium text-gray-700",
                      children: "核撥單位",
                    }),
                    o.jsx("select", {
                      value: $,
                      onChange: (O) => F(O.target.value),
                      className:
                        "w-full px-3 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-colors text-base text-gray-900",
                      children: z.map((O) =>
                        o.jsx(
                          "option",
                          { value: O.name, children: O.name },
                          O.GUID
                        )
                      ),
                    }),
                  ],
                }),
                o.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    o.jsx("label", {
                      className: "block text-base font-medium text-gray-700",
                      children: i("app.requisitionType"),
                    }),
                    o.jsxs("div", {
                      className: "flex items-center space-x-3 pt-2",
                      children: [
                        o.jsx("input", {
                          type: "checkbox",
                          id: "urgentRequisition",
                          checked: G,
                          onChange: (O) => D(O.target.checked),
                          className:
                            "h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded",
                        }),
                        o.jsx("label", {
                          htmlFor: "urgentRequisition",
                          className: "text-base text-gray-700",
                          children: i("app.urgentRequisition"),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            f &&
              x &&
              o.jsxs("div", {
                className: "space-y-4",
                children: [
                  o.jsx("label", {
                    className: "block text-base font-medium text-gray-700",
                    children: "申領單位庫存資訊",
                  }),
                  o.jsx("div", {
                    className:
                      "bg-gray-50 rounded-lg border border-gray-200 p-4",
                    children: R
                      ? o.jsxs("div", {
                          className: "flex items-center justify-center py-4",
                          children: [
                            o.jsx("div", {
                              className:
                                "animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600",
                            }),
                            o.jsx("span", {
                              className: "ml-2 text-base text-gray-600",
                              children: "載入庫存資訊中...",
                            }),
                          ],
                        })
                      : h
                      ? o.jsxs("div", {
                          className: "space-y-4",
                          children: [
                            o.jsxs("div", {
                              className:
                                "flex items-center gap-2 text-base font-medium text-gray-900",
                              children: [
                                o.jsx(pt, {
                                  size: 18,
                                  className: "text-blue-600",
                                }),
                                "總庫存: ",
                                h.qty
                                  ? h.qty.reduce(
                                      (O, W) => O + parseInt(W || "0"),
                                      0
                                    )
                                  : 0,
                              ],
                            }),
                            q.length === 0
                              ? o.jsx("div", {
                                  className: "text-base text-gray-600",
                                  children: "無可用批號資訊",
                                })
                              : q.length === 1
                              ? o.jsxs("div", {
                                  className:
                                    "bg-white rounded-lg border border-blue-200 p-4",
                                  children: [
                                    o.jsx("div", {
                                      className:
                                        "text-base font-medium text-gray-900 mb-2",
                                      children: "批號資訊 (自動選取)",
                                    }),
                                    o.jsxs("div", {
                                      className:
                                        "grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm",
                                      children: [
                                        o.jsxs("div", {
                                          className: "flex items-center gap-2",
                                          children: [
                                            o.jsx(Ir, {
                                              size: 16,
                                              className: "text-green-600",
                                            }),
                                            o.jsx("span", {
                                              className: "text-gray-600",
                                              children: "效期:",
                                            }),
                                            o.jsx("span", {
                                              className: "font-medium",
                                              children: M(q[0].expiryDate),
                                            }),
                                          ],
                                        }),
                                        o.jsxs("div", {
                                          className: "flex items-center gap-2",
                                          children: [
                                            o.jsx(Ar, {
                                              size: 16,
                                              className: "text-purple-600",
                                            }),
                                            o.jsx("span", {
                                              className: "text-gray-600",
                                              children: "批號:",
                                            }),
                                            o.jsx("span", {
                                              className: "font-medium",
                                              children: q[0].lotNumber || "無",
                                            }),
                                          ],
                                        }),
                                        o.jsxs("div", {
                                          className: "flex items-center gap-2",
                                          children: [
                                            o.jsx(pt, {
                                              size: 16,
                                              className: "text-blue-600",
                                            }),
                                            o.jsx("span", {
                                              className: "text-gray-600",
                                              children: "數量:",
                                            }),
                                            o.jsx("span", {
                                              className: "font-medium",
                                              children: q[0].quantity,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                })
                              : o.jsxs("div", {
                                  className: "space-y-3",
                                  children: [
                                    o.jsx("div", {
                                      className:
                                        "text-base font-medium text-gray-900",
                                      children: "請選擇批號:",
                                    }),
                                    o.jsx("div", {
                                      className: "space-y-2",
                                      children: q.map((O, W) =>
                                        o.jsxs(
                                          "label",
                                          {
                                            className: `block p-4 rounded-lg border cursor-pointer transition-colors ${
                                              ee === O
                                                ? "border-blue-500 bg-blue-50"
                                                : "border-gray-200 bg-white hover:bg-gray-50"
                                            }`,
                                            children: [
                                              o.jsx("input", {
                                                type: "radio",
                                                name: "batch",
                                                value: W,
                                                checked: ee === O,
                                                onChange: () => V(O),
                                                className: "sr-only",
                                              }),
                                              o.jsxs("div", {
                                                className:
                                                  "grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm",
                                                children: [
                                                  o.jsxs("div", {
                                                    className:
                                                      "flex items-center gap-2",
                                                    children: [
                                                      o.jsx(Ir, {
                                                        size: 16,
                                                        className:
                                                          "text-green-600",
                                                      }),
                                                      o.jsx("span", {
                                                        className:
                                                          "text-gray-600",
                                                        children: "效期:",
                                                      }),
                                                      o.jsx("span", {
                                                        className:
                                                          "font-medium",
                                                        children: M(
                                                          O.expiryDate
                                                        ),
                                                      }),
                                                    ],
                                                  }),
                                                  o.jsxs("div", {
                                                    className:
                                                      "flex items-center gap-2",
                                                    children: [
                                                      o.jsx(Ar, {
                                                        size: 16,
                                                        className:
                                                          "text-purple-600",
                                                      }),
                                                      o.jsx("span", {
                                                        className:
                                                          "text-gray-600",
                                                        children: "批號:",
                                                      }),
                                                      o.jsx("span", {
                                                        className:
                                                          "font-medium",
                                                        children:
                                                          O.lotNumber || "無",
                                                      }),
                                                    ],
                                                  }),
                                                  o.jsxs("div", {
                                                    className:
                                                      "flex items-center gap-2",
                                                    children: [
                                                      o.jsx(pt, {
                                                        size: 16,
                                                        className:
                                                          "text-blue-600",
                                                      }),
                                                      o.jsx("span", {
                                                        className:
                                                          "text-gray-600",
                                                        children: "數量:",
                                                      }),
                                                      o.jsx("span", {
                                                        className:
                                                          "font-medium",
                                                        children: O.quantity,
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            ],
                                          },
                                          W
                                        )
                                      ),
                                    }),
                                  ],
                                }),
                          ],
                        })
                      : o.jsx("div", {
                          className: "text-base text-gray-600",
                          children: "申領單位無此藥品庫存資訊",
                        }),
                  }),
                ],
              }),
            f &&
              fe &&
              o.jsxs("div", {
                className: "space-y-4",
                children: [
                  o.jsx("label", {
                    className: "block text-base font-medium text-gray-700",
                    children: "撥補單位庫存資訊",
                  }),
                  o.jsx("div", {
                    className:
                      "bg-blue-50 rounded-lg border border-blue-200 p-4",
                    children: le
                      ? o.jsxs("div", {
                          className: "flex items-center justify-center py-4",
                          children: [
                            o.jsx("div", {
                              className:
                                "animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600",
                            }),
                            o.jsx("span", {
                              className: "ml-2 text-base text-gray-600",
                              children: "載入撥補單位庫存資訊中...",
                            }),
                          ],
                        })
                      : S
                      ? o.jsxs("div", {
                          className: "space-y-3",
                          children: [
                            o.jsxs("div", {
                              className:
                                "flex items-center gap-2 text-base font-medium text-gray-900",
                              children: [
                                o.jsx(pt, {
                                  size: 18,
                                  className: "text-blue-600",
                                }),
                                o.jsx("span", {
                                  className: "text-gray-700",
                                  children: "撥補單位:",
                                }),
                                o.jsx("span", {
                                  className: "font-semibold",
                                  children: fe.displayName || fe.name,
                                }),
                              ],
                            }),
                            o.jsxs("div", {
                              className:
                                "flex items-center gap-2 text-base font-medium text-gray-900",
                              children: [
                                o.jsx(pt, {
                                  size: 18,
                                  className: "text-green-600",
                                }),
                                o.jsx("span", {
                                  className: "text-gray-700",
                                  children: "總庫存:",
                                }),
                                o.jsx("span", {
                                  className: "font-semibold text-green-700",
                                  children: S.qty
                                    ? S.qty.reduce(
                                        (O, W) => O + parseInt(W || "0"),
                                        0
                                      )
                                    : 0,
                                }),
                              ],
                            }),
                            S.lot &&
                              S.lot.length > 0 &&
                              o.jsxs("div", {
                                className: "mt-3 space-y-2",
                                children: [
                                  o.jsx("div", {
                                    className:
                                      "text-sm font-medium text-gray-700",
                                    children: "批號明細：",
                                  }),
                                  o.jsx("div", {
                                    className: "space-y-2",
                                    children: S.lot.map((O, W) => {
                                      var ot, Se;
                                      const ne =
                                          ((ot = S.expiry_date) == null
                                            ? void 0
                                            : ot[W]) || "",
                                        Ne =
                                          ((Se = S.qty) == null
                                            ? void 0
                                            : Se[W]) || "0";
                                      return parseInt(Ne) <= 0
                                        ? null
                                        : o.jsx(
                                            "div",
                                            {
                                              className:
                                                "bg-white rounded-lg border border-blue-200 p-3",
                                              children: o.jsxs("div", {
                                                className:
                                                  "grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm",
                                                children: [
                                                  o.jsxs("div", {
                                                    className:
                                                      "flex items-center gap-2",
                                                    children: [
                                                      o.jsx(Ar, {
                                                        size: 16,
                                                        className:
                                                          "text-purple-600",
                                                      }),
                                                      o.jsx("span", {
                                                        className:
                                                          "text-gray-600",
                                                        children: "批號:",
                                                      }),
                                                      o.jsx("span", {
                                                        className:
                                                          "font-medium",
                                                        children: O || "無",
                                                      }),
                                                    ],
                                                  }),
                                                  o.jsxs("div", {
                                                    className:
                                                      "flex items-center gap-2",
                                                    children: [
                                                      o.jsx(Ir, {
                                                        size: 16,
                                                        className:
                                                          "text-green-600",
                                                      }),
                                                      o.jsx("span", {
                                                        className:
                                                          "text-gray-600",
                                                        children: "效期:",
                                                      }),
                                                      o.jsx("span", {
                                                        className:
                                                          "font-medium",
                                                        children: M(ne),
                                                      }),
                                                    ],
                                                  }),
                                                  o.jsxs("div", {
                                                    className:
                                                      "flex items-center gap-2",
                                                    children: [
                                                      o.jsx(pt, {
                                                        size: 16,
                                                        className:
                                                          "text-blue-600",
                                                      }),
                                                      o.jsx("span", {
                                                        className:
                                                          "text-gray-600",
                                                        children: "數量:",
                                                      }),
                                                      o.jsx("span", {
                                                        className:
                                                          "font-medium",
                                                        children: Ne,
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            },
                                            W
                                          );
                                    }),
                                  }),
                                ],
                              }),
                          ],
                        })
                      : o.jsx("div", {
                          className: "text-base text-gray-600",
                          children: "撥補單位無此藥品庫存資訊",
                        }),
                  }),
                ],
              }),
            o.jsxs("div", {
              className: "space-y-4",
              children: [
                o.jsx("label", {
                  className: "block text-base font-medium text-gray-700",
                  children: i("app.quantity"),
                }),
                o.jsxs("div", {
                  className: "flex gap-4 items-center",
                  children: [
                    o.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [
                        o.jsx("input", {
                          type: "text",
                          value: N,
                          onChange: xt,
                          onClick: () => d(!0),
                          placeholder: i("app.quantity.placeholder"),
                          className:
                            "w-40 px-3 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-colors text-base text-gray-900 cursor-pointer",
                        }),
                        (f == null ? void 0 : f.MIN_PAKAGE) &&
                          o.jsx("span", {
                            className: "text-base font-medium text-gray-700",
                            children: f.MIN_PAKAGE,
                          }),
                      ],
                    }),
                    I() &&
                      o.jsxs("span", {
                        className: `text-base font-medium ${
                          parseInt(I()) > 0 ? "text-green-600" : "text-red-600"
                        }`,
                        children: [i("app.quantity.available"), ": ", I()],
                      }),
                  ],
                }),
              ],
            }),
            g && o.jsx(ba, { value: N, onChange: b, onClose: () => d(!1) }),
            o.jsx("button", {
              type: "submit",
              disabled: r || (q.length > 1 && !ee),
              className: `w-full px-4 py-2 rounded-lg font-medium transition-colors duration-200 focus:ring-2 focus:ring-opacity-50 ${
                r || (q.length > 1 && !ee)
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500"
              }`,
              children: i(r ? "app.button.processing" : "app.button.create"),
            }),
          ],
        }),
      ],
    });
  },
  Fy = ({
    isOpen: e,
    note: t,
    drugName: n,
    onConfirm: r,
    onCancel: l,
    isProcessing: s = !1,
  }) =>
    o.jsx(Je, {
      appear: !0,
      show: e,
      as: p.Fragment,
      children: o.jsxs(Xe, {
        as: "div",
        className: "relative z-[60]",
        onClose: () => !s && l(),
        children: [
          o.jsx(Je.Child, {
            as: p.Fragment,
            enter: "ease-out duration-300",
            enterFrom: "opacity-0",
            enterTo: "opacity-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100",
            leaveTo: "opacity-0",
            children: o.jsx("div", {
              className: "fixed inset-0 bg-black bg-opacity-25",
            }),
          }),
          o.jsx("div", {
            className: "fixed inset-0 overflow-y-auto",
            children: o.jsx("div", {
              className:
                "flex min-h-full items-center justify-center p-4 text-center",
              children: o.jsx(Je.Child, {
                as: p.Fragment,
                enter: "ease-out duration-300",
                enterFrom: "opacity-0 scale-95",
                enterTo: "opacity-100 scale-100",
                leave: "ease-in duration-200",
                leaveFrom: "opacity-100 scale-100",
                leaveTo: "opacity-0 scale-95",
                children: o.jsx(Xe.Panel, {
                  className:
                    "w-[90vw] max-w-md transform overflow-hidden rounded-lg bg-white p-4 md:p-6 text-left align-middle shadow-xl transition-all",
                  children: o.jsxs("div", {
                    className: "flex items-start gap-3",
                    children: [
                      o.jsx("div", {
                        className: "flex-shrink-0",
                        children: o.jsx(x0, {
                          className: "h-6 w-6 text-yellow-600",
                        }),
                      }),
                      o.jsxs("div", {
                        className: "flex-1",
                        children: [
                          o.jsx(Xe.Title, {
                            as: "h3",
                            className: "text-lg font-medium text-gray-900",
                            children: "藥品通知",
                          }),
                          o.jsxs("div", {
                            className: "mt-3 space-y-3",
                            children: [
                              o.jsxs("div", {
                                children: [
                                  o.jsx("p", {
                                    className:
                                      "text-base font-medium text-gray-700",
                                    children: "藥品名稱：",
                                  }),
                                  o.jsx("p", {
                                    className: "text-base text-gray-900 mt-1",
                                    children: n,
                                  }),
                                ],
                              }),
                              o.jsxs("div", {
                                children: [
                                  o.jsx("p", {
                                    className:
                                      "text-base font-medium text-gray-700",
                                    children: "通知內容：",
                                  }),
                                  o.jsx("div", {
                                    className:
                                      "mt-1 bg-yellow-50 border border-yellow-200 rounded-lg p-3",
                                    children: o.jsx("p", {
                                      className:
                                        "text-base text-gray-900 whitespace-pre-wrap",
                                      children: t,
                                    }),
                                  }),
                                ],
                              }),
                              o.jsx("p", {
                                className: "text-base text-gray-600",
                                children:
                                  "此藥品有特殊通知，是否要繼續建立申領單？",
                              }),
                            ],
                          }),
                          o.jsxs("div", {
                            className: "mt-6 flex justify-end gap-3",
                            children: [
                              o.jsx("button", {
                                type: "button",
                                onClick: () => !s && l(),
                                disabled: s,
                                className:
                                  "inline-flex justify-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                                children: "取消",
                              }),
                              o.jsx("button", {
                                type: "button",
                                onClick: r,
                                disabled: s,
                                className:
                                  "inline-flex justify-center rounded-lg border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                                children: s ? "處理中..." : "繼續建單",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            }),
          }),
        ],
      }),
    });
async function Ry() {
  try {
    const e = await fetch("../config.txt");
    if (!e.ok) throw new Error("Failed to load configuration");
    return (await e.json()).ai;
  } catch (e) {
    throw (console.error("載入設定檔錯誤:", e), e);
  }
}
async function zy(e) {
  var t, n, r;
  try {
    const s = `${await Ry()}/barcode`,
      i = new FormData();
    i.append("file", e);
    const a = await fetch(s, { method: "POST", body: i });
    if (!a.ok) throw new Error("API request failed");
    const u = await a.json();
    return (
      ((r =
        (n = (t = u == null ? void 0 : u.results) == null ? void 0 : t[0]) ==
        null
          ? void 0
          : n.code) == null
        ? void 0
        : r.trim()) || null
    );
  } catch (l) {
    return console.error("條碼掃描 API 錯誤:", l), null;
  }
}
const Iy = ({ isOpen: e, onClose: t, onBarcodeDetected: n }) => {
    const r = p.useRef(null),
      l = p.useRef(null),
      s = p.useRef(null),
      i = p.useRef(null),
      [a, u] = p.useState(null),
      [c, m] = p.useState(!1),
      [f, v] = p.useState(window.innerWidth < 768),
      [x, w] = p.useState(null);
    p.useEffect(() => {
      const b = () => v(window.innerWidth < 768);
      return (
        window.addEventListener("resize", b),
        () => window.removeEventListener("resize", b)
      );
    }, []);
    const N = async (b) => {
      if (!r.current || !i.current) return;
      const g = b.currentTarget.getBoundingClientRect(),
        d = (b.clientX - g.left) / g.width,
        h = (b.clientY - g.top) / g.height;
      w({ x: b.clientX - g.left, y: b.clientY - g.top }),
        setTimeout(() => w(null), 1e3);
      try {
        const y = i.current.getVideoTracks()[0],
          S = y.getCapabilities();
        if ("focusMode" in S) {
          const k = { advanced: [{ focusMode: "single-shot" }] };
          await y.applyConstraints(k);
        }
        if ("pointsOfInterest" in S) {
          const k = { advanced: [{ pointsOfInterest: [{ x: d, y: h }] }] };
          await y.applyConstraints(k);
        }
      } catch (y) {
        console.log("對焦功能不支援或失敗:", y);
      }
    };
    return (
      p.useEffect(() => {
        let b = null,
          g = null;
        const d = () => {
            g && clearInterval(g),
              b && (b.getTracks().forEach((S) => S.stop()), (i.current = null));
          },
          h = async () => {
            if (!r.current || !l.current) return;
            const S = r.current,
              k = l.current,
              P = k.getContext("2d");
            if (!P || S.readyState < 2) return;
            (k.width = S.videoWidth),
              (k.height = S.videoHeight),
              P.drawImage(S, 0, 0, k.width, k.height);
            const T = await new Promise((L) => k.toBlob(L, "image/jpeg", 0.8));
            if (!T) return;
            const R = await zy(T);
            R && (d(), n(R), t());
          };
        return (
          e
            ? (async () => {
                try {
                  (b = await navigator.mediaDevices.getUserMedia({
                    video: {
                      facingMode: "environment",
                      width: { ideal: 1920 },
                      height: { ideal: 1080 },
                    },
                  })),
                    (i.current = b),
                    r.current && (r.current.srcObject = b),
                    m(!0),
                    (g = setInterval(h, 600));
                } catch (S) {
                  console.error("無法開啟相機:", S),
                    u("無法開啟相機，請確認已授權使用相機");
                }
              })()
            : d(),
          () => d()
        );
      }, [e, n, t]),
      e
        ? f
          ? o.jsxs("div", {
              className: "fixed inset-0 bg-black text-white flex flex-col z-50",
              children: [
                o.jsxs("div", {
                  className: "absolute inset-0 w-full h-full",
                  onClick: N,
                  children: [
                    o.jsx("video", {
                      ref: r,
                      autoPlay: !0,
                      playsInline: !0,
                      muted: !0,
                      className: "w-full h-full object-cover",
                    }),
                    o.jsx("div", {
                      className:
                        "absolute inset-0 flex items-center justify-center pointer-events-none",
                      children: o.jsxs("div", {
                        className:
                          "relative w-64 h-48 border-2 border-blue-400 rounded-lg",
                        children: [
                          o.jsx("div", {
                            className:
                              "absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-blue-400 -mt-1 -ml-1",
                          }),
                          o.jsx("div", {
                            className:
                              "absolute top-0 right-0 w-10 h-10 border-t-4 border-r-4 border-blue-400 -mt-1 -mr-1",
                          }),
                          o.jsx("div", {
                            className:
                              "absolute bottom-0 left-0 w-10 h-10 border-b-4 border-l-4 border-blue-400 -mb-1 -ml-1",
                          }),
                          o.jsx("div", {
                            className:
                              "absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-blue-400 -mb-1 -mr-1",
                          }),
                        ],
                      }),
                    }),
                    x &&
                      o.jsx("div", {
                        className:
                          "absolute w-20 h-20 border-2 border-green-400 rounded-full pointer-events-none",
                        style: {
                          left: x.x - 40,
                          top: x.y - 40,
                          animation: "ping 0.5s ease-out",
                        },
                      }),
                  ],
                }),
                o.jsxs("div", {
                  className:
                    "relative z-10 p-4 flex justify-between items-center bg-black bg-opacity-40 backdrop-blur-sm",
                  children: [
                    o.jsxs("div", {
                      className: "flex items-center",
                      children: [
                        o.jsx(vo, { className: "w-5 h-5 text-blue-400 mr-2" }),
                        o.jsx("h2", {
                          className: "text-lg font-semibold",
                          children: "條碼掃描",
                        }),
                      ],
                    }),
                    o.jsx("button", {
                      onClick: t,
                      children: o.jsx(il, {
                        className: "w-6 h-6 text-gray-300",
                      }),
                    }),
                  ],
                }),
                o.jsx("div", {
                  className:
                    "flex-1 flex items-center justify-center pointer-events-none",
                  children:
                    a &&
                    o.jsx("div", {
                      className:
                        "bg-red-600 bg-opacity-60 text-sm px-4 py-2 rounded-lg",
                      children: a,
                    }),
                }),
                o.jsxs("div", {
                  className:
                    "relative z-10 bg-black bg-opacity-60 text-center py-3 pb-[env(safe-area-inset-bottom)]",
                  children: [
                    !a &&
                      o.jsxs(o.Fragment, {
                        children: [
                          o.jsx("p", {
                            className: "text-sm",
                            children: "請將條碼對準掃描框",
                          }),
                          o.jsx("p", {
                            className: "text-xs text-gray-400",
                            children: "點擊畫面可對焦 | 支援一維與二維條碼",
                          }),
                        ],
                      }),
                    o.jsx("button", {
                      onClick: t,
                      className:
                        "mt-3 px-4 py-2 border border-gray-400 rounded-lg text-gray-300 hover:bg-gray-700",
                      children: "取消",
                    }),
                  ],
                }),
                o.jsx("canvas", { ref: l, className: "hidden" }),
              ],
            })
          : o.jsx("div", {
              className:
                "fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50",
              children: o.jsxs("div", {
                className: "bg-white rounded-lg shadow-xl max-w-2xl w-full",
                children: [
                  o.jsxs("div", {
                    className: "flex items-center justify-between p-4 border-b",
                    children: [
                      o.jsxs("div", {
                        className: "flex items-center",
                        children: [
                          o.jsx(vo, {
                            className: "w-6 h-6 text-blue-600 mr-2",
                          }),
                          o.jsx("h3", {
                            className: "text-lg font-semibold text-gray-900",
                            children: "條碼掃描",
                          }),
                        ],
                      }),
                      o.jsx("button", {
                        onClick: t,
                        className: "text-gray-400 hover:text-gray-600",
                        children: o.jsx(il, { className: "w-6 h-6" }),
                      }),
                    ],
                  }),
                  o.jsxs("div", {
                    className: "p-4",
                    children: [
                      a &&
                        o.jsx("div", {
                          className:
                            "mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm",
                          children: a,
                        }),
                      o.jsxs("div", {
                        ref: s,
                        className:
                          "relative bg-black rounded-lg overflow-hidden cursor-pointer",
                        style: { aspectRatio: "16/9" },
                        onClick: N,
                        children: [
                          o.jsx("video", {
                            ref: r,
                            autoPlay: !0,
                            playsInline: !0,
                            muted: !0,
                            className: "w-full h-full object-cover",
                          }),
                          o.jsx("div", {
                            className:
                              "absolute inset-0 flex items-center justify-center pointer-events-none",
                            children: o.jsxs("div", {
                              className:
                                "relative w-64 h-48 border-2 border-blue-500 rounded-lg",
                              children: [
                                o.jsx("div", {
                                  className:
                                    "absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-blue-500 -mt-1 -ml-1",
                                }),
                                o.jsx("div", {
                                  className:
                                    "absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-blue-500 -mt-1 -mr-1",
                                }),
                                o.jsx("div", {
                                  className:
                                    "absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-blue-500 -mb-1 -ml-1",
                                }),
                                o.jsx("div", {
                                  className:
                                    "absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-blue-500 -mb-1 -mr-1",
                                }),
                              ],
                            }),
                          }),
                          x &&
                            o.jsx("div", {
                              className:
                                "absolute w-16 h-16 border-2 border-green-400 rounded-full pointer-events-none animate-ping",
                              style: {
                                left: x.x - 32,
                                top: x.y - 32,
                                animation: "ping 0.5s ease-out",
                              },
                            }),
                        ],
                      }),
                      o.jsx("canvas", { ref: l, className: "hidden" }),
                      o.jsxs("div", {
                        className: "mt-4 text-center text-sm text-gray-600",
                        children: [
                          o.jsx("p", { children: "請將條碼對準掃描框中央" }),
                          o.jsx("p", {
                            className: "text-xs text-gray-500 mt-1",
                            children:
                              "點擊畫面可對焦 | 支援一維條碼與二維條碼（QR Code）",
                          }),
                        ],
                      }),
                      o.jsx("div", {
                        className: "mt-4 flex justify-end",
                        children: o.jsx("button", {
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
  Ay = (e) => {
    const [t, n] = p.useState(!1);
    return {
      openScanner: () => n(!0),
      closeScanner: () => n(!1),
      ScannerModal: o.jsx(Iy, {
        isOpen: t,
        onClose: () => n(!1),
        onBarcodeDetected: e,
      }),
    };
  },
  Uy = ({
    isOpen: e,
    onClose: t,
    drugs: n,
    warehouses: r,
    onOrderCreated: l,
  }) => {
    Et();
    const [s, i] = p.useState(""),
      [a, u] = p.useState(null),
      [c, m] = p.useState(""),
      [f, v] = p.useState(""),
      [x, w] = p.useState(""),
      [N, b] = p.useState(null),
      [g, d] = p.useState(null),
      [h, y] = p.useState([]),
      [S, k] = p.useState(null),
      [P, T] = p.useState(!1),
      [R, L] = p.useState(!1),
      [le, Y] = p.useState(!1),
      [q, X] = p.useState(!1),
      [ee, V] = p.useState(null),
      G = p.useRef(null),
      D = p.useRef(null),
      $ = r.filter((j) => j.displayName !== "藥庫" && j.type !== "藥庫"),
      F = r.filter((j) => j.type === "藥庫"),
      U = F[0],
      z = Ay((j) => {
        j.trim() && (fe(j.trim()), i(""));
      });
    p.useEffect(() => {
      e && G.current && G.current.focus();
    }, [e]),
      p.useEffect(() => {
        e && (i(""), u(null), w(""), b(null), d(null), y([]), k(null), V(null));
      }, [e]),
      p.useEffect(() => {
        if (e && !c) {
          const j = localStorage.getItem("barcodeDialog_sourceWarehouse");
          j && r.some((M) => M.displayName === j) && m(j);
        }
      }, [e, r, c]),
      p.useEffect(() => {
        const j = r.find((M) => M.type === "藥庫");
        j && !f && v(j.name);
      }, [r, f]),
      p.useEffect(() => {
        a &&
          D.current &&
          setTimeout(() => {
            var j;
            (j = D.current) == null ||
              j.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 100);
      }, [a]);
    const fe = async (j) => {
        try {
          const M = await Me("/api/materialRequisition/barcode", {
            method: "POST",
            body: { ValueAry: [j] },
          });
          if (M.Code === 200 && M.Data) {
            const I = n.find((O) => O.CODE === M.Data.code);
            I
              ? (u(I), w(M.Data.requestedQuantity))
              : V(`找不到藥碼 ${M.Data.code} 對應的藥品`);
          } else throw new Error(M.Result || "條碼掃描失敗");
        } catch (M) {
          console.error("Error scanning barcode:", M),
            V("條碼掃描失敗，請稍後再試");
        }
      },
      te = (j) => {
        j.preventDefault(), s.trim() && (fe(s.trim()), i(""));
      },
      He = async (j, M) => {
        T(!0);
        try {
          const I = r.find((Ne) => Ne.displayName === M || Ne.name === M),
            O = (I == null ? void 0 : I.type) || "藥庫",
            ne = (
              await Me("/api/stock/get_stock_by_code", {
                method: "POST",
                body: { ServerName: M, ServerType: O, ValueAry: [j] },
              })
            ).Data[0];
          if ((b(ne), ne && ne.lot && ne.expiry_date && ne.qty)) {
            const Ne = [],
              ot = ne.lot || [],
              Se = ne.expiry_date || [],
              at = ne.qty || [];
            for (
              let It = 0;
              It < Math.max(ot.length, Se.length, at.length);
              It++
            ) {
              const dr = {
                lotNumber: ot[It] || "",
                expiryDate: Se[It] || "",
                quantity: at[It] || "0",
              };
              parseInt(dr.quantity) > 0 && Ne.push(dr);
            }
            y(Ne), Ne.length === 1 ? k(Ne[0]) : Ne.length > 1 && k(null);
          } else y([]), k(null);
        } catch (I) {
          console.error("Error fetching stock:", I), b(null), y([]), k(null);
        } finally {
          T(!1);
        }
      },
      E = async (j, M) => {
        L(!0);
        try {
          const O = (
            await Me("/api/stock/get_stock_by_code", {
              method: "POST",
              body: { ServerName: M, ServerType: "藥庫", ValueAry: [j] },
            })
          ).Data[0];
          d(O);
        } catch (I) {
          console.error("Error fetching pharmacy stock:", I), d(null);
        } finally {
          L(!1);
        }
      };
    p.useEffect(() => {
      a && c ? He(a.CODE, c) : (b(null), y([]), k(null));
    }, [a, c]),
      p.useEffect(() => {
        a && U ? E(a.CODE, U.name) : d(null);
      }, [a, U]);
    const H = () => {
        i(""), u(null), w(""), b(null), d(null), y([]), k(null), V(null);
      },
      K = async (j) => {
        if (!a) {
          V("請選擇藥品");
          return;
        }
        if (!c) {
          V("請選擇申領單位");
          return;
        }
        if (!x) {
          V("請輸入申領數量");
          return;
        }
        if (h.length > 1 && !S) {
          V("請選擇批號");
          return;
        }
        X(!0), V(null);
        const M = Ff(),
          I = Rf(),
          O = {
            actionType: j ? "緊急申領" : "一般申領",
            code: a.CODE,
            name: a.NAME,
            packageUnit: a.MIN_PAKAGE || "",
            requestedQuantity: x,
            requestingUnit: c,
            requestingPerson: M || "",
            requestingPersonID: I || "",
            issuingUnit: f || "",
            state: "等待過帳",
          };
        try {
          const W = await Me("/api/materialRequisition/add", {
            method: "POST",
            body: { Data: [O] },
          });
          if (W.Code === 200)
            l(`${j ? "緊急" : "一般"}申領單建立成功`),
              H(),
              G.current && G.current.focus();
          else throw new Error(W.Result || "建立申領單失敗");
        } catch (W) {
          console.error("Error creating order:", W),
            V("建立申領單失敗，請稍後再試");
        } finally {
          X(!1);
        }
      },
      xt = () => {
        i(""), u(null), w(""), b(null), d(null), y([]), k(null), V(null), t();
      },
      wt = (j) => (!j || j === "2050/01/01" ? "無期限" : j);
    return e
      ? o.jsxs("div", {
          className:
            "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4",
          children: [
            o.jsxs("div", {
              className:
                "bg-white rounded-lg shadow-xl overflow-hidden flex flex-col",
              style: { width: "min(90vw, 90vh)", height: "90vh" },
              children: [
                o.jsxs("div", {
                  className:
                    "flex items-center justify-between p-4 border-b flex-shrink-0",
                  children: [
                    o.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [
                        o.jsx(ff, { className: "text-blue-600", size: 24 }),
                        o.jsx("h2", {
                          className: "text-xl font-semibold text-gray-900",
                          children: "掃碼建單",
                        }),
                      ],
                    }),
                    o.jsx("button", {
                      onClick: xt,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors",
                      children: o.jsx(il, { size: 24 }),
                    }),
                  ],
                }),
                o.jsx("div", {
                  className: "flex-1 overflow-y-auto p-6",
                  children: o.jsxs("form", {
                    onSubmit: te,
                    className: "space-y-6",
                    children: [
                      ee &&
                        o.jsxs("div", {
                          className:
                            "flex items-center gap-2 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg",
                          children: [
                            o.jsx(Jn, { size: 20 }),
                            o.jsx("span", { children: ee }),
                          ],
                        }),
                      o.jsxs("div", {
                        children: [
                          o.jsx("label", {
                            htmlFor: "barcode",
                            className:
                              "block text-base font-medium text-gray-700 mb-2",
                            children: "請掃描條碼或手動輸入",
                          }),
                          o.jsxs("div", {
                            className: "relative",
                            children: [
                              o.jsx("input", {
                                ref: G,
                                id: "barcode",
                                type: "text",
                                value: s,
                                onChange: (j) => i(j.target.value),
                                placeholder: "請使用掃碼槍掃描條碼",
                                className:
                                  "w-full px-4 py-3 pr-24 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-colors text-base text-gray-900",
                              }),
                              o.jsxs("div", {
                                className:
                                  "absolute right-2 top-1/2 -translate-y-1/2 flex gap-2",
                                children: [
                                  o.jsx("button", {
                                    type: "button",
                                    onClick: z.openScanner,
                                    className:
                                      "p-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded transition-colors",
                                    title: "開啟相機掃描",
                                    children: o.jsx(vo, { size: 20 }),
                                  }),
                                  o.jsx("button", {
                                    type: "submit",
                                    disabled: !s.trim(),
                                    className: `px-3 py-1 rounded transition-colors text-sm ${
                                      s.trim()
                                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                                        : "bg-gray-300 cursor-not-allowed text-gray-500"
                                    }`,
                                    children: "確認",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      o.jsxs("div", {
                        className: "grid grid-cols-2 gap-4",
                        children: [
                          o.jsxs("div", {
                            children: [
                              o.jsx("label", {
                                className:
                                  "block text-base font-medium text-gray-700 mb-2",
                                children: "申領單位",
                              }),
                              o.jsxs("select", {
                                value: c,
                                onChange: (j) => {
                                  const M = j.target.value;
                                  m(M),
                                    M &&
                                      localStorage.setItem(
                                        "barcodeDialog_sourceWarehouse",
                                        M
                                      );
                                },
                                className:
                                  "w-full px-3 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-colors text-base text-gray-900",
                                children: [
                                  o.jsx("option", {
                                    value: "",
                                    children: "請選擇申領單位",
                                  }),
                                  $.map((j) =>
                                    o.jsx(
                                      "option",
                                      {
                                        value: j.displayName,
                                        children: j.displayName,
                                      },
                                      j.GUID
                                    )
                                  ),
                                ],
                              }),
                            ],
                          }),
                          o.jsxs("div", {
                            children: [
                              o.jsx("label", {
                                className:
                                  "block text-base font-medium text-gray-700 mb-2",
                                children: "核撥單位",
                              }),
                              o.jsx("select", {
                                value: f,
                                onChange: (j) => v(j.target.value),
                                className:
                                  "w-full px-3 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-colors text-base text-gray-900",
                                children: F.map((j) =>
                                  o.jsx(
                                    "option",
                                    { value: j.name, children: j.name },
                                    j.GUID
                                  )
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                      a &&
                        o.jsxs(o.Fragment, {
                          children: [
                            o.jsxs("div", {
                              ref: D,
                              className:
                                "bg-gray-50 rounded-lg border border-gray-200 p-4",
                              children: [
                                o.jsx("div", {
                                  className:
                                    "text-base font-medium text-gray-900",
                                  children: a.NAME,
                                }),
                                a.SKDIACODE &&
                                  o.jsxs("div", {
                                    className: "text-sm text-gray-600 mt-1",
                                    children: ["料號: ", a.SKDIACODE],
                                  }),
                                a.CHT_NAME &&
                                  o.jsx("div", {
                                    className: "text-sm text-gray-600 mt-1",
                                    children: a.CHT_NAME,
                                  }),
                                o.jsxs("div", {
                                  className: "text-sm text-gray-600 mt-1",
                                  children: ["藥碼: ", a.CODE],
                                }),
                              ],
                            }),
                            a &&
                              c &&
                              o.jsxs("div", {
                                children: [
                                  o.jsx("label", {
                                    className:
                                      "block text-base font-medium text-gray-700 mb-2",
                                    children: "申領單位庫存資訊",
                                  }),
                                  o.jsx("div", {
                                    className:
                                      "bg-gray-50 rounded-lg border border-gray-200 p-4",
                                    children: P
                                      ? o.jsxs("div", {
                                          className:
                                            "flex items-center justify-center py-4",
                                          children: [
                                            o.jsx("div", {
                                              className:
                                                "animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600",
                                            }),
                                            o.jsx("span", {
                                              className:
                                                "ml-2 text-sm text-gray-600",
                                              children: "載入中...",
                                            }),
                                          ],
                                        })
                                      : N
                                      ? o.jsxs("div", {
                                          className: "space-y-3",
                                          children: [
                                            o.jsxs("div", {
                                              className:
                                                "flex items-center gap-2 text-sm font-medium text-gray-900",
                                              children: [
                                                o.jsx(pt, {
                                                  size: 16,
                                                  className: "text-blue-600",
                                                }),
                                                "總庫存: ",
                                                N.qty
                                                  ? N.qty.reduce(
                                                      (j, M) =>
                                                        j + parseInt(M || "0"),
                                                      0
                                                    )
                                                  : 0,
                                              ],
                                            }),
                                            h.length > 0 &&
                                              o.jsx("div", {
                                                className: "space-y-2",
                                                children:
                                                  h.length === 1
                                                    ? o.jsxs("div", {
                                                        className:
                                                          "bg-white rounded-lg border border-blue-200 p-3",
                                                        children: [
                                                          o.jsx("div", {
                                                            className:
                                                              "text-sm font-medium text-gray-900 mb-2",
                                                            children:
                                                              "批號資訊 (自動選取)",
                                                          }),
                                                          o.jsxs("div", {
                                                            className:
                                                              "grid grid-cols-3 gap-2 text-xs",
                                                            children: [
                                                              o.jsxs("div", {
                                                                className:
                                                                  "flex items-center gap-1",
                                                                children: [
                                                                  o.jsx(Ir, {
                                                                    size: 14,
                                                                    className:
                                                                      "text-green-600",
                                                                  }),
                                                                  o.jsx(
                                                                    "span",
                                                                    {
                                                                      className:
                                                                        "text-gray-600",
                                                                      children:
                                                                        "效期:",
                                                                    }
                                                                  ),
                                                                  o.jsx(
                                                                    "span",
                                                                    {
                                                                      className:
                                                                        "font-medium",
                                                                      children:
                                                                        wt(
                                                                          h[0]
                                                                            .expiryDate
                                                                        ),
                                                                    }
                                                                  ),
                                                                ],
                                                              }),
                                                              o.jsxs("div", {
                                                                className:
                                                                  "flex items-center gap-1",
                                                                children: [
                                                                  o.jsx(Ar, {
                                                                    size: 14,
                                                                    className:
                                                                      "text-purple-600",
                                                                  }),
                                                                  o.jsx(
                                                                    "span",
                                                                    {
                                                                      className:
                                                                        "text-gray-600",
                                                                      children:
                                                                        "批號:",
                                                                    }
                                                                  ),
                                                                  o.jsx(
                                                                    "span",
                                                                    {
                                                                      className:
                                                                        "font-medium",
                                                                      children:
                                                                        h[0]
                                                                          .lotNumber ||
                                                                        "無",
                                                                    }
                                                                  ),
                                                                ],
                                                              }),
                                                              o.jsxs("div", {
                                                                className:
                                                                  "flex items-center gap-1",
                                                                children: [
                                                                  o.jsx(pt, {
                                                                    size: 14,
                                                                    className:
                                                                      "text-blue-600",
                                                                  }),
                                                                  o.jsx(
                                                                    "span",
                                                                    {
                                                                      className:
                                                                        "text-gray-600",
                                                                      children:
                                                                        "數量:",
                                                                    }
                                                                  ),
                                                                  o.jsx(
                                                                    "span",
                                                                    {
                                                                      className:
                                                                        "font-medium",
                                                                      children:
                                                                        h[0]
                                                                          .quantity,
                                                                    }
                                                                  ),
                                                                ],
                                                              }),
                                                            ],
                                                          }),
                                                        ],
                                                      })
                                                    : o.jsxs("div", {
                                                        className: "space-y-2",
                                                        children: [
                                                          o.jsx("div", {
                                                            className:
                                                              "text-sm font-medium text-gray-900",
                                                            children:
                                                              "請選擇批號:",
                                                          }),
                                                          h.map((j, M) =>
                                                            o.jsxs(
                                                              "label",
                                                              {
                                                                className: `block p-3 rounded-lg border cursor-pointer transition-colors ${
                                                                  S === j
                                                                    ? "border-blue-500 bg-blue-50"
                                                                    : "border-gray-200 bg-white hover:bg-gray-50"
                                                                }`,
                                                                children: [
                                                                  o.jsx(
                                                                    "input",
                                                                    {
                                                                      type: "radio",
                                                                      name: "batch",
                                                                      value: M,
                                                                      checked:
                                                                        S === j,
                                                                      onChange:
                                                                        () =>
                                                                          k(j),
                                                                      className:
                                                                        "sr-only",
                                                                    }
                                                                  ),
                                                                  o.jsxs(
                                                                    "div",
                                                                    {
                                                                      className:
                                                                        "grid grid-cols-3 gap-2 text-xs",
                                                                      children:
                                                                        [
                                                                          o.jsxs(
                                                                            "div",
                                                                            {
                                                                              className:
                                                                                "flex items-center gap-1",
                                                                              children:
                                                                                [
                                                                                  o.jsx(
                                                                                    Ir,
                                                                                    {
                                                                                      size: 14,
                                                                                      className:
                                                                                        "text-green-600",
                                                                                    }
                                                                                  ),
                                                                                  o.jsx(
                                                                                    "span",
                                                                                    {
                                                                                      className:
                                                                                        "text-gray-600",
                                                                                      children:
                                                                                        "效期:",
                                                                                    }
                                                                                  ),
                                                                                  o.jsx(
                                                                                    "span",
                                                                                    {
                                                                                      className:
                                                                                        "font-medium",
                                                                                      children:
                                                                                        wt(
                                                                                          j.expiryDate
                                                                                        ),
                                                                                    }
                                                                                  ),
                                                                                ],
                                                                            }
                                                                          ),
                                                                          o.jsxs(
                                                                            "div",
                                                                            {
                                                                              className:
                                                                                "flex items-center gap-1",
                                                                              children:
                                                                                [
                                                                                  o.jsx(
                                                                                    Ar,
                                                                                    {
                                                                                      size: 14,
                                                                                      className:
                                                                                        "text-purple-600",
                                                                                    }
                                                                                  ),
                                                                                  o.jsx(
                                                                                    "span",
                                                                                    {
                                                                                      className:
                                                                                        "text-gray-600",
                                                                                      children:
                                                                                        "批號:",
                                                                                    }
                                                                                  ),
                                                                                  o.jsx(
                                                                                    "span",
                                                                                    {
                                                                                      className:
                                                                                        "font-medium",
                                                                                      children:
                                                                                        j.lotNumber ||
                                                                                        "無",
                                                                                    }
                                                                                  ),
                                                                                ],
                                                                            }
                                                                          ),
                                                                          o.jsxs(
                                                                            "div",
                                                                            {
                                                                              className:
                                                                                "flex items-center gap-1",
                                                                              children:
                                                                                [
                                                                                  o.jsx(
                                                                                    pt,
                                                                                    {
                                                                                      size: 14,
                                                                                      className:
                                                                                        "text-blue-600",
                                                                                    }
                                                                                  ),
                                                                                  o.jsx(
                                                                                    "span",
                                                                                    {
                                                                                      className:
                                                                                        "text-gray-600",
                                                                                      children:
                                                                                        "數量:",
                                                                                    }
                                                                                  ),
                                                                                  o.jsx(
                                                                                    "span",
                                                                                    {
                                                                                      className:
                                                                                        "font-medium",
                                                                                      children:
                                                                                        j.quantity,
                                                                                    }
                                                                                  ),
                                                                                ],
                                                                            }
                                                                          ),
                                                                        ],
                                                                    }
                                                                  ),
                                                                ],
                                                              },
                                                              M
                                                            )
                                                          ),
                                                        ],
                                                      }),
                                              }),
                                          ],
                                        })
                                      : o.jsx("div", {
                                          className: "text-sm text-gray-600",
                                          children: "申領單位無此藥品庫存資訊",
                                        }),
                                  }),
                                ],
                              }),
                            a &&
                              U &&
                              o.jsxs("div", {
                                children: [
                                  o.jsx("label", {
                                    className:
                                      "block text-base font-medium text-gray-700 mb-2",
                                    children: "撥補單位庫存資訊",
                                  }),
                                  o.jsx("div", {
                                    className:
                                      "bg-blue-50 rounded-lg border border-blue-200 p-4",
                                    children: R
                                      ? o.jsxs("div", {
                                          className:
                                            "flex items-center justify-center py-4",
                                          children: [
                                            o.jsx("div", {
                                              className:
                                                "animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600",
                                            }),
                                            o.jsx("span", {
                                              className:
                                                "ml-2 text-sm text-gray-600",
                                              children: "載入中...",
                                            }),
                                          ],
                                        })
                                      : g
                                      ? o.jsxs("div", {
                                          className: "space-y-2",
                                          children: [
                                            o.jsxs("div", {
                                              className:
                                                "flex items-center gap-2 text-sm font-medium text-gray-900",
                                              children: [
                                                o.jsx(pt, {
                                                  size: 16,
                                                  className: "text-blue-600",
                                                }),
                                                o.jsx("span", {
                                                  className: "text-gray-700",
                                                  children: "撥補單位:",
                                                }),
                                                o.jsx("span", {
                                                  className: "font-semibold",
                                                  children:
                                                    U.displayName || U.name,
                                                }),
                                              ],
                                            }),
                                            o.jsxs("div", {
                                              className:
                                                "flex items-center gap-2 text-sm font-medium text-gray-900",
                                              children: [
                                                o.jsx(pt, {
                                                  size: 16,
                                                  className: "text-green-600",
                                                }),
                                                o.jsx("span", {
                                                  className: "text-gray-700",
                                                  children: "總庫存:",
                                                }),
                                                o.jsx("span", {
                                                  className:
                                                    "font-semibold text-green-700",
                                                  children: g.qty
                                                    ? g.qty.reduce(
                                                        (j, M) =>
                                                          j +
                                                          parseInt(M || "0"),
                                                        0
                                                      )
                                                    : 0,
                                                }),
                                              ],
                                            }),
                                          ],
                                        })
                                      : o.jsx("div", {
                                          className: "text-sm text-gray-600",
                                          children: "撥補單位無此藥品庫存資訊",
                                        }),
                                  }),
                                ],
                              }),
                            o.jsxs("div", {
                              children: [
                                o.jsx("label", {
                                  className:
                                    "block text-base font-medium text-gray-700 mb-2",
                                  children: "申領數量",
                                }),
                                o.jsxs("div", {
                                  className: "flex items-center gap-2",
                                  children: [
                                    o.jsx("input", {
                                      type: "text",
                                      value: x,
                                      onChange: (j) => {
                                        const M = j.target.value;
                                        (M === "" || /^\d+$/.test(M)) && w(M);
                                      },
                                      onClick: () => Y(!0),
                                      placeholder: "請輸入數量",
                                      className:
                                        "w-32 px-3 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-colors text-base text-gray-900 cursor-pointer",
                                    }),
                                    a.MIN_PAKAGE &&
                                      o.jsx("span", {
                                        className:
                                          "text-base font-medium text-gray-700",
                                        children: a.MIN_PAKAGE,
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
                o.jsx("div", {
                  className: "border-t p-4 flex-shrink-0 bg-gray-50",
                  children: o.jsxs("div", {
                    className: "flex gap-3",
                    children: [
                      o.jsx("button", {
                        type: "button",
                        onClick: H,
                        disabled: q,
                        className:
                          "flex-1 px-4 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed",
                        children: "清除",
                      }),
                      a &&
                        o.jsxs(o.Fragment, {
                          children: [
                            o.jsx("button", {
                              type: "button",
                              onClick: () => K(!1),
                              disabled: q || !x || (h.length > 1 && !S),
                              className: `flex-1 px-4 py-3 rounded-lg font-medium transition-colors ${
                                q || !x || (h.length > 1 && !S)
                                  ? "bg-gray-300 cursor-not-allowed text-gray-500"
                                  : "bg-blue-600 hover:bg-blue-700 text-white"
                              }`,
                              children: q ? "處理中..." : "一般建單",
                            }),
                            o.jsx("button", {
                              type: "button",
                              onClick: () => K(!0),
                              disabled: q || !x || (h.length > 1 && !S),
                              className: `flex-1 px-4 py-3 rounded-lg font-medium transition-colors ${
                                q || !x || (h.length > 1 && !S)
                                  ? "bg-gray-300 cursor-not-allowed text-gray-500"
                                  : "bg-red-600 hover:bg-red-700 text-white"
                              }`,
                              children: q ? "處理中..." : "緊急建單",
                            }),
                          ],
                        }),
                    ],
                  }),
                }),
              ],
            }),
            le && o.jsx(ba, { value: x, onChange: w, onClose: () => Y(!1) }),
            z.ScannerModal,
          ],
        })
      : null;
  },
  Hy = ({ className: e = "" }) => {
    const { t } = Et();
    return o.jsx("footer", {
      className: `fixed bottom-0 left-0 w-full bg-white py-2 shadow-inner border-t border-gray-200 z-50 ${e}`,
      children: o.jsx("div", {
        className: "max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8",
        children: o.jsx("p", {
          className: "text-center text-sm text-gray-600",
          children: t("footer.copyright"),
        }),
      }),
    });
  };
function Wy() {
  Et();
  const [e, t] = p.useState(!1),
    [n, r] = p.useState(!0),
    [l, s] = p.useState([]),
    [i, a] = p.useState([]),
    [u, c] = p.useState(null),
    [m, f] = p.useState(!1),
    [v, x] = p.useState(!1),
    [w, N] = p.useState(!1),
    [b, g] = p.useState(""),
    [d, h] = p.useState([]),
    [y, S] = p.useState(() => {
      const j = new Date();
      return j.setHours(0, 0, 0, 0), j;
    }),
    [k, P] = p.useState(() => {
      const j = new Date();
      return j.setHours(23, 59, 59, 999), j;
    }),
    [T, R] = p.useState(!1),
    [L, le] = p.useState(0),
    [Y, q] = p.useState(!1),
    [X, ee] = p.useState(!1),
    [V, G] = p.useState(null),
    [D, $] = p.useState(null);
  p.useEffect(() => {
    (async () => {
      try {
        await xy(), x(!0);
        const M = Cy();
        t(M);
      } catch (M) {
        console.error("Error during initialization:", M),
          c("系統初始化失敗，請重新整理頁面");
      } finally {
        r(!1);
      }
    })();
  }, []),
    p.useEffect(() => {
      e && v && (U(), F(), z());
    }, [e, v]);
  const F = async () => {
      try {
        const M = (
          await Me("/api/med_page/get_med_cloud", { method: "POST", body: {} })
        ).Data.filter((I) => I.FILE_STATUS !== "關檔中");
        s(M), c(null);
      } catch (j) {
        console.error("Error fetching drugs:", j),
          c("無法取得藥品資料，請稍後再試"),
          s([]);
      }
    },
    U = async () => {
      try {
        const j = await Me("/api/ServerSetting/get_name", {
          method: "POST",
          body: {},
        });
        if (!j || !j.Data) throw new Error("Invalid response format");
        const M = j.Data.map((I) => ({
          ...I,
          displayName: I.name === "DS01" ? "藥庫" : I.name,
        }));
        a(M), c(null);
      } catch (j) {
        console.error("Error fetching warehouses:", j),
          c("無法取得庫別資料，請稍後再試"),
          a([]);
      }
    },
    z = async () => {
      R(!0);
      try {
        const j = await Me("/api/materialRequisition/get_by_requestTime", {
          method: "POST",
          body: {
            ValueAry: [
              ge(y, "yyyy-MM-dd HH:mm:ss"),
              ge(k, "yyyy-MM-dd HH:mm:ss"),
            ],
          },
        });
        h(j.Data), c(null);
      } catch (j) {
        console.error("Error fetching orders:", j),
          c("無法取得申領單資料，請稍後再試"),
          h([]);
      } finally {
        R(!1);
      }
    },
    fe = (j, M) => {
      S(j), P(M), z();
    },
    te = async (j) => {
      const M = Ff(),
        I = Rf(),
        O = {
          actionType: j.isUrgent ? "緊急申領" : "一般申領",
          code: j.drug.CODE,
          name: j.drug.NAME,
          packageUnit: j.drug.MIN_PAKAGE || "",
          requestedQuantity: j.quantity,
          requestingUnit: j.sourceWarehouse,
          requestingPerson: M || "",
          requestingPersonID: I || "",
          issuingUnit: j.issuingUnit || "",
          state: "等待過帳",
        };
      try {
        const W = await Me("/api/materialRequisition/add", {
          method: "POST",
          body: { Data: [O] },
        });
        if (W.Code === 200)
          g(W.Result || "申領單建立成功"),
            N(!0),
            c(null),
            z(),
            le((ne) => ne + 1);
        else throw new Error(W.Result || "建立申領單失敗");
      } catch (W) {
        console.error("Error creating order:", W),
          c("建立申領單失敗，請稍後再試");
      } finally {
        f(!1);
      }
    },
    He = async (j) => {
      try {
        const M = await Me("/api/controlpanel/get_by_startendtime_MedNotice", {
          method: "POST",
          body: {},
        });
        if (M.Data && Array.isArray(M.Data)) {
          const I = M.Data.find((O) => O.code === j);
          if (I && I.note) return I.note;
        }
        return null;
      } catch (M) {
        return console.error("Error checking med notice:", M), null;
      }
    },
    E = async (j) => {
      try {
        f(!0), c(null);
        const M = await He(j.drug.CODE);
        M
          ? ($(j), G({ note: M, drugName: j.drug.NAME }), ee(!0), f(!1))
          : await te(j);
      } catch (M) {
        console.error("Error in handleCreateOrder:", M),
          c("建立申領單失敗，請稍後再試");
      } finally {
        X || f(!1);
      }
    },
    H = async () => {
      if (D)
        try {
          f(!0), ee(!1), await te(D);
        } catch (j) {
          console.error("Error in handleConfirmWithNotice:", j),
            c("建立申領單失敗，請稍後再試");
        } finally {
          f(!1), $(null), G(null);
        }
    },
    K = () => {
      ee(!1), f(!1), $(null), G(null);
    },
    xt = () => {
      Ss(), t(!1);
    },
    wt = (j) => {
      g(j), N(!0), z();
    };
  return n
    ? o.jsx("div", {
        className: "min-h-screen bg-white flex items-center justify-center",
        children: o.jsxs("div", {
          className: "text-center",
          children: [
            o.jsx("div", {
              className:
                "animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto",
            }),
            o.jsx("p", {
              className: "mt-2 text-base text-gray-600",
              children: "載入中...",
            }),
          ],
        }),
      })
    : e
    ? o.jsxs("div", {
        className: "min-h-screen flex flex-col",
        children: [
          o.jsx(Ly, { onLogout: xt }),
          w && o.jsx(zf, { message: b, onClose: () => N(!1), duration: 3e3 }),
          X &&
            V &&
            o.jsx(Fy, {
              isOpen: X,
              note: V.note,
              drugName: V.drugName,
              onConfirm: H,
              onCancel: K,
              isProcessing: m,
            }),
          o.jsx(Uy, {
            isOpen: Y,
            onClose: () => q(!1),
            drugs: l,
            warehouses: i,
            onOrderCreated: wt,
          }),
          o.jsx("main", {
            className: "flex-grow flex flex-col bg-white",
            children: o.jsxs("div", {
              className: "w-full mx-auto p-4 pb-24",
              children: [
                o.jsx($y, {
                  drugs: l,
                  warehouses: i,
                  onSubmit: E,
                  isSubmitting: m,
                  resetTrigger: L,
                  onOpenBarcodeDialog: () => q(!0),
                }),
                o.jsx("div", {
                  className: "mt-8",
                  children: o.jsx(by, {
                    orders: d,
                    startDate: y,
                    endDate: k,
                    onDateChange: fe,
                    isLoading: T,
                  }),
                }),
              ],
            }),
          }),
          o.jsx(Hy, {}),
        ],
      })
    : o.jsx(Py, { onLogin: () => t(!0) });
}
of(document.getElementById("root")).render(
  o.jsx(p.StrictMode, { children: o.jsx(ky, { children: o.jsx(Wy, {}) }) })
);
