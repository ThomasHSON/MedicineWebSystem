function $f(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const i = Object.getOwnPropertyDescriptor(r, l);
          i &&
            Object.defineProperty(
              e,
              l,
              i.get ? i : { enumerable: !0, get: () => r[l] }
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
    for (const i of l)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
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
function Ff(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Bu = { exports: {} },
  xi = {},
  Qu = { exports: {} },
  I = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var nl = Symbol.for("react.element"),
  Rf = Symbol.for("react.portal"),
  zf = Symbol.for("react.fragment"),
  If = Symbol.for("react.strict_mode"),
  Af = Symbol.for("react.profiler"),
  Uf = Symbol.for("react.provider"),
  Hf = Symbol.for("react.context"),
  Wf = Symbol.for("react.forward_ref"),
  qf = Symbol.for("react.suspense"),
  Bf = Symbol.for("react.memo"),
  Qf = Symbol.for("react.lazy"),
  Ca = Symbol.iterator;
function Vf(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ca && e[Ca]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Vu = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Yu = Object.assign,
  Gu = {};
function rr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Gu),
    (this.updater = n || Vu);
}
rr.prototype.isReactComponent = {};
rr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
rr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ku() {}
Ku.prototype = rr.prototype;
function Ns(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Gu),
    (this.updater = n || Vu);
}
var Es = (Ns.prototype = new Ku());
Es.constructor = Ns;
Yu(Es, rr.prototype);
Es.isPureReactComponent = !0;
var ba = Array.isArray,
  Xu = Object.prototype.hasOwnProperty,
  js = { current: null },
  Ju = { key: !0, ref: !0, __self: !0, __source: !0 };
function Zu(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Xu.call(t, r) && !Ju.hasOwnProperty(r) && (l[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) l.children = n;
  else if (1 < s) {
    for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
    l.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) l[r] === void 0 && (l[r] = s[r]);
  return {
    $$typeof: nl,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: js.current,
  };
}
function Yf(e, t) {
  return {
    $$typeof: nl,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Cs(e) {
  return typeof e == "object" && e !== null && e.$$typeof === nl;
}
function Gf(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Pa = /\/+/g;
function Hi(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Gf("" + e.key)
    : t.toString(36);
}
function Tl(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case nl:
          case Rf:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === "" ? "." + Hi(o, 0) : r),
      ba(l)
        ? ((n = ""),
          e != null && (n = e.replace(Pa, "$&/") + "/"),
          Tl(l, t, n, "", function (c) {
            return c;
          }))
        : l != null &&
          (Cs(l) &&
            (l = Yf(
              l,
              n +
                (!l.key || (o && o.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Pa, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), ba(e)))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var u = r + Hi(i, s);
      o += Tl(i, t, n, u, l);
    }
  else if (((u = Vf(e)), typeof u == "function"))
    for (e = u.call(e), s = 0; !(i = e.next()).done; )
      (i = i.value), (u = r + Hi(i, s++)), (o += Tl(i, t, n, u, l));
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
  return o;
}
function cl(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Tl(e, r, "", "", function (i) {
      return t.call(n, i, l++);
    }),
    r
  );
}
function Kf(e) {
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
var Te = { current: null },
  Ol = { transition: null },
  Xf = {
    ReactCurrentDispatcher: Te,
    ReactCurrentBatchConfig: Ol,
    ReactCurrentOwner: js,
  };
function ec() {
  throw Error("act(...) is not supported in production builds of React.");
}
I.Children = {
  map: cl,
  forEach: function (e, t, n) {
    cl(
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
      cl(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      cl(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Cs(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
I.Component = rr;
I.Fragment = zf;
I.Profiler = Af;
I.PureComponent = Ns;
I.StrictMode = If;
I.Suspense = qf;
I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Xf;
I.act = ec;
I.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Yu({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = js.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (u in t)
      Xu.call(t, u) &&
        !Ju.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    s = Array(u);
    for (var c = 0; c < u; c++) s[c] = arguments[c + 2];
    r.children = s;
  }
  return { $$typeof: nl, type: e.type, key: l, ref: i, props: r, _owner: o };
};
I.createContext = function (e) {
  return (
    (e = {
      $$typeof: Hf,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Uf, _context: e }),
    (e.Consumer = e)
  );
};
I.createElement = Zu;
I.createFactory = function (e) {
  var t = Zu.bind(null, e);
  return (t.type = e), t;
};
I.createRef = function () {
  return { current: null };
};
I.forwardRef = function (e) {
  return { $$typeof: Wf, render: e };
};
I.isValidElement = Cs;
I.lazy = function (e) {
  return { $$typeof: Qf, _payload: { _status: -1, _result: e }, _init: Kf };
};
I.memo = function (e, t) {
  return { $$typeof: Bf, type: e, compare: t === void 0 ? null : t };
};
I.startTransition = function (e) {
  var t = Ol.transition;
  Ol.transition = {};
  try {
    e();
  } finally {
    Ol.transition = t;
  }
};
I.unstable_act = ec;
I.useCallback = function (e, t) {
  return Te.current.useCallback(e, t);
};
I.useContext = function (e) {
  return Te.current.useContext(e);
};
I.useDebugValue = function () {};
I.useDeferredValue = function (e) {
  return Te.current.useDeferredValue(e);
};
I.useEffect = function (e, t) {
  return Te.current.useEffect(e, t);
};
I.useId = function () {
  return Te.current.useId();
};
I.useImperativeHandle = function (e, t, n) {
  return Te.current.useImperativeHandle(e, t, n);
};
I.useInsertionEffect = function (e, t) {
  return Te.current.useInsertionEffect(e, t);
};
I.useLayoutEffect = function (e, t) {
  return Te.current.useLayoutEffect(e, t);
};
I.useMemo = function (e, t) {
  return Te.current.useMemo(e, t);
};
I.useReducer = function (e, t, n) {
  return Te.current.useReducer(e, t, n);
};
I.useRef = function (e) {
  return Te.current.useRef(e);
};
I.useState = function (e) {
  return Te.current.useState(e);
};
I.useSyncExternalStore = function (e, t, n) {
  return Te.current.useSyncExternalStore(e, t, n);
};
I.useTransition = function () {
  return Te.current.useTransition();
};
I.version = "18.3.1";
Qu.exports = I;
var g = Qu.exports;
const F = Ff(g),
  Rr = $f({ __proto__: null, default: F }, [g]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Jf = g,
  Zf = Symbol.for("react.element"),
  ep = Symbol.for("react.fragment"),
  tp = Object.prototype.hasOwnProperty,
  np = Jf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  rp = { key: !0, ref: !0, __self: !0, __source: !0 };
function tc(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) tp.call(t, r) && !rp.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: Zf,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: np.current,
  };
}
xi.Fragment = ep;
xi.jsx = tc;
xi.jsxs = tc;
Bu.exports = xi;
var a = Bu.exports,
  nc = { exports: {} },
  Qe = {},
  rc = { exports: {} },
  lc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(b, k) {
    var O = b.length;
    b.push(k);
    e: for (; 0 < O; ) {
      var $ = (O - 1) >>> 1,
        A = b[$];
      if (0 < l(A, k)) (b[$] = k), (b[O] = A), (O = $);
      else break e;
    }
  }
  function n(b) {
    return b.length === 0 ? null : b[0];
  }
  function r(b) {
    if (b.length === 0) return null;
    var k = b[0],
      O = b.pop();
    if (O !== k) {
      b[0] = O;
      e: for (var $ = 0, A = b.length, ze = A >>> 1; $ < ze; ) {
        var W = 2 * ($ + 1) - 1,
          Ee = b[W],
          De = W + 1,
          lt = b[De];
        if (0 > l(Ee, O))
          De < A && 0 > l(lt, Ee)
            ? ((b[$] = lt), (b[De] = O), ($ = De))
            : ((b[$] = Ee), (b[W] = O), ($ = W));
        else if (De < A && 0 > l(lt, O)) (b[$] = lt), (b[De] = O), ($ = De);
        else break e;
      }
    }
    return k;
  }
  function l(b, k) {
    var O = b.sortIndex - k.sortIndex;
    return O !== 0 ? O : b.id - k.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      s = o.now();
    e.unstable_now = function () {
      return o.now() - s;
    };
  }
  var u = [],
    c = [],
    f = 1,
    p = null,
    y = 3,
    x = !1,
    w = !1,
    S = !1,
    C = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(b) {
    for (var k = n(c); k !== null; ) {
      if (k.callback === null) r(c);
      else if (k.startTime <= b)
        r(c), (k.sortIndex = k.expirationTime), t(u, k);
      else break;
      k = n(c);
    }
  }
  function v(b) {
    if (((S = !1), h(b), !w))
      if (n(u) !== null) (w = !0), oe(N);
      else {
        var k = n(c);
        k !== null && Q(v, k.startTime - b);
      }
  }
  function N(b, k) {
    (w = !1), S && ((S = !1), m(T), (T = -1)), (x = !0);
    var O = y;
    try {
      for (
        h(k), p = n(u);
        p !== null && (!(p.expirationTime > k) || (b && !ee()));

      ) {
        var $ = p.callback;
        if (typeof $ == "function") {
          (p.callback = null), (y = p.priorityLevel);
          var A = $(p.expirationTime <= k);
          (k = e.unstable_now()),
            typeof A == "function" ? (p.callback = A) : p === n(u) && r(u),
            h(k);
        } else r(u);
        p = n(u);
      }
      if (p !== null) var ze = !0;
      else {
        var W = n(c);
        W !== null && Q(v, W.startTime - k), (ze = !1);
      }
      return ze;
    } finally {
      (p = null), (y = O), (x = !1);
    }
  }
  var E = !1,
    P = null,
    T = -1,
    R = 5,
    M = -1;
  function ee() {
    return !(e.unstable_now() - M < R);
  }
  function ue() {
    if (P !== null) {
      var b = e.unstable_now();
      M = b;
      var k = !0;
      try {
        k = P(!0, b);
      } finally {
        k ? le() : ((E = !1), (P = null));
      }
    } else E = !1;
  }
  var le;
  if (typeof d == "function")
    le = function () {
      d(ue);
    };
  else if (typeof MessageChannel < "u") {
    var Ne = new MessageChannel(),
      X = Ne.port2;
    (Ne.port1.onmessage = ue),
      (le = function () {
        X.postMessage(null);
      });
  } else
    le = function () {
      C(ue, 0);
    };
  function oe(b) {
    (P = b), E || ((E = !0), le());
  }
  function Q(b, k) {
    T = C(function () {
      b(e.unstable_now());
    }, k);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (b) {
      b.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || x || ((w = !0), oe(N));
    }),
    (e.unstable_forceFrameRate = function (b) {
      0 > b || 125 < b
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (R = 0 < b ? Math.floor(1e3 / b) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return y;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (b) {
      switch (y) {
        case 1:
        case 2:
        case 3:
          var k = 3;
          break;
        default:
          k = y;
      }
      var O = y;
      y = k;
      try {
        return b();
      } finally {
        y = O;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (b, k) {
      switch (b) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          b = 3;
      }
      var O = y;
      y = b;
      try {
        return k();
      } finally {
        y = O;
      }
    }),
    (e.unstable_scheduleCallback = function (b, k, O) {
      var $ = e.unstable_now();
      switch (
        (typeof O == "object" && O !== null
          ? ((O = O.delay), (O = typeof O == "number" && 0 < O ? $ + O : $))
          : (O = $),
        b)
      ) {
        case 1:
          var A = -1;
          break;
        case 2:
          A = 250;
          break;
        case 5:
          A = 1073741823;
          break;
        case 4:
          A = 1e4;
          break;
        default:
          A = 5e3;
      }
      return (
        (A = O + A),
        (b = {
          id: f++,
          callback: k,
          priorityLevel: b,
          startTime: O,
          expirationTime: A,
          sortIndex: -1,
        }),
        O > $
          ? ((b.sortIndex = O),
            t(c, b),
            n(u) === null &&
              b === n(c) &&
              (S ? (m(T), (T = -1)) : (S = !0), Q(v, O - $)))
          : ((b.sortIndex = A), t(u, b), w || x || ((w = !0), oe(N))),
        b
      );
    }),
    (e.unstable_shouldYield = ee),
    (e.unstable_wrapCallback = function (b) {
      var k = y;
      return function () {
        var O = y;
        y = k;
        try {
          return b.apply(this, arguments);
        } finally {
          y = O;
        }
      };
    });
})(lc);
rc.exports = lc;
var lp = rc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ip = g,
  Be = lp;
function j(e) {
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
var ic = new Set(),
  zr = {};
function jn(e, t) {
  Kn(e, t), Kn(e + "Capture", t);
}
function Kn(e, t) {
  for (zr[e] = t, e = 0; e < t.length; e++) ic.add(t[e]);
}
var Ot = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Eo = Object.prototype.hasOwnProperty,
  op =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ta = {},
  Oa = {};
function sp(e) {
  return Eo.call(Oa, e)
    ? !0
    : Eo.call(Ta, e)
    ? !1
    : op.test(e)
    ? (Oa[e] = !0)
    : ((Ta[e] = !0), !1);
}
function ap(e, t, n, r) {
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
function up(e, t, n, r) {
  if (t === null || typeof t > "u" || ap(e, t, n, r)) return !0;
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
function Oe(e, t, n, r, l, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var ye = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ye[e] = new Oe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ye[t] = new Oe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ye[e] = new Oe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ye[e] = new Oe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ye[e] = new Oe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ye[e] = new Oe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ye[e] = new Oe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ye[e] = new Oe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ye[e] = new Oe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var bs = /[\-:]([a-z])/g;
function Ps(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(bs, Ps);
    ye[t] = new Oe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(bs, Ps);
    ye[t] = new Oe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(bs, Ps);
  ye[t] = new Oe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ye[e] = new Oe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ye.xlinkHref = new Oe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ye[e] = new Oe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ts(e, t, n, r) {
  var l = ye.hasOwnProperty(t) ? ye[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (up(t, n, l, r) && (n = null),
    r || l === null
      ? sp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var Lt = ip.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  dl = Symbol.for("react.element"),
  _n = Symbol.for("react.portal"),
  Mn = Symbol.for("react.fragment"),
  Os = Symbol.for("react.strict_mode"),
  jo = Symbol.for("react.profiler"),
  oc = Symbol.for("react.provider"),
  sc = Symbol.for("react.context"),
  Ds = Symbol.for("react.forward_ref"),
  Co = Symbol.for("react.suspense"),
  bo = Symbol.for("react.suspense_list"),
  _s = Symbol.for("react.memo"),
  It = Symbol.for("react.lazy"),
  ac = Symbol.for("react.offscreen"),
  Da = Symbol.iterator;
function dr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Da && e[Da]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var re = Object.assign,
  Wi;
function Nr(e) {
  if (Wi === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Wi = (t && t[1]) || "";
    }
  return (
    `
` +
    Wi +
    e
  );
}
var qi = !1;
function Bi(e, t) {
  if (!e || qi) return "";
  qi = !0;
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
          i = r.stack.split(`
`),
          o = l.length - 1,
          s = i.length - 1;
        1 <= o && 0 <= s && l[o] !== i[s];

      )
        s--;
      for (; 1 <= o && 0 <= s; o--, s--)
        if (l[o] !== i[s]) {
          if (o !== 1 || s !== 1)
            do
              if ((o--, s--, 0 > s || l[o] !== i[s])) {
                var u =
                  `
` + l[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= o && 0 <= s);
          break;
        }
    }
  } finally {
    (qi = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Nr(e) : "";
}
function cp(e) {
  switch (e.tag) {
    case 5:
      return Nr(e.type);
    case 16:
      return Nr("Lazy");
    case 13:
      return Nr("Suspense");
    case 19:
      return Nr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Bi(e.type, !1)), e;
    case 11:
      return (e = Bi(e.type.render, !1)), e;
    case 1:
      return (e = Bi(e.type, !0)), e;
    default:
      return "";
  }
}
function Po(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Mn:
      return "Fragment";
    case _n:
      return "Portal";
    case jo:
      return "Profiler";
    case Os:
      return "StrictMode";
    case Co:
      return "Suspense";
    case bo:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case sc:
        return (e.displayName || "Context") + ".Consumer";
      case oc:
        return (e._context.displayName || "Context") + ".Provider";
      case Ds:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case _s:
        return (
          (t = e.displayName || null), t !== null ? t : Po(e.type) || "Memo"
        );
      case It:
        (t = e._payload), (e = e._init);
        try {
          return Po(e(t));
        } catch {}
    }
  return null;
}
function dp(e) {
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
      return Po(t);
    case 8:
      return t === Os ? "StrictMode" : "Mode";
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
function tn(e) {
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
function uc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function fp(e) {
  var t = uc(e) ? "checked" : "value",
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
        set: function (o) {
          (r = "" + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function fl(e) {
  e._valueTracker || (e._valueTracker = fp(e));
}
function cc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = uc(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Hl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function To(e, t) {
  var n = t.checked;
  return re({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function _a(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = tn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function dc(e, t) {
  (t = t.checked), t != null && Ts(e, "checked", t, !1);
}
function Oo(e, t) {
  dc(e, t);
  var n = tn(t.value),
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
    ? Do(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Do(e, t.type, tn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Ma(e, t, n) {
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
function Do(e, t, n) {
  (t !== "number" || Hl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Er = Array.isArray;
function qn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + tn(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function _o(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(j(91));
  return re({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function La(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(j(92));
      if (Er(n)) {
        if (1 < n.length) throw Error(j(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: tn(n) };
}
function fc(e, t) {
  var n = tn(t.value),
    r = tn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function $a(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function pc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Mo(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? pc(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var pl,
  mc = (function (e) {
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
        pl = pl || document.createElement("div"),
          pl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = pl.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Ir(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Pr = {
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
  pp = ["Webkit", "ms", "Moz", "O"];
Object.keys(Pr).forEach(function (e) {
  pp.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Pr[t] = Pr[e]);
  });
});
function hc(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Pr.hasOwnProperty(e) && Pr[e])
    ? ("" + t).trim()
    : t + "px";
}
function gc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = hc(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var mp = re(
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
function Lo(e, t) {
  if (t) {
    if (mp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(j(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(j(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(j(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(j(62));
  }
}
function $o(e, t) {
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
var Fo = null;
function Ms(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ro = null,
  Bn = null,
  Qn = null;
function Fa(e) {
  if ((e = il(e))) {
    if (typeof Ro != "function") throw Error(j(280));
    var t = e.stateNode;
    t && ((t = Ei(t)), Ro(e.stateNode, e.type, t));
  }
}
function yc(e) {
  Bn ? (Qn ? Qn.push(e) : (Qn = [e])) : (Bn = e);
}
function vc() {
  if (Bn) {
    var e = Bn,
      t = Qn;
    if (((Qn = Bn = null), Fa(e), t)) for (e = 0; e < t.length; e++) Fa(t[e]);
  }
}
function xc(e, t) {
  return e(t);
}
function wc() {}
var Qi = !1;
function Sc(e, t, n) {
  if (Qi) return e(t, n);
  Qi = !0;
  try {
    return xc(e, t, n);
  } finally {
    (Qi = !1), (Bn !== null || Qn !== null) && (wc(), vc());
  }
}
function Ar(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ei(n);
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
  if (n && typeof n != "function") throw Error(j(231, t, typeof n));
  return n;
}
var zo = !1;
if (Ot)
  try {
    var fr = {};
    Object.defineProperty(fr, "passive", {
      get: function () {
        zo = !0;
      },
    }),
      window.addEventListener("test", fr, fr),
      window.removeEventListener("test", fr, fr);
  } catch {
    zo = !1;
  }
function hp(e, t, n, r, l, i, o, s, u) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (f) {
    this.onError(f);
  }
}
var Tr = !1,
  Wl = null,
  ql = !1,
  Io = null,
  gp = {
    onError: function (e) {
      (Tr = !0), (Wl = e);
    },
  };
function yp(e, t, n, r, l, i, o, s, u) {
  (Tr = !1), (Wl = null), hp.apply(gp, arguments);
}
function vp(e, t, n, r, l, i, o, s, u) {
  if ((yp.apply(this, arguments), Tr)) {
    if (Tr) {
      var c = Wl;
      (Tr = !1), (Wl = null);
    } else throw Error(j(198));
    ql || ((ql = !0), (Io = c));
  }
}
function Cn(e) {
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
function kc(e) {
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
function Ra(e) {
  if (Cn(e) !== e) throw Error(j(188));
}
function xp(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Cn(e)), t === null)) throw Error(j(188));
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
        if (i === n) return Ra(l), e;
        if (i === r) return Ra(l), t;
        i = i.sibling;
      }
      throw Error(j(188));
    }
    if (n.return !== r.return) (n = l), (r = i);
    else {
      for (var o = !1, s = l.child; s; ) {
        if (s === n) {
          (o = !0), (n = l), (r = i);
          break;
        }
        if (s === r) {
          (o = !0), (r = l), (n = i);
          break;
        }
        s = s.sibling;
      }
      if (!o) {
        for (s = i.child; s; ) {
          if (s === n) {
            (o = !0), (n = i), (r = l);
            break;
          }
          if (s === r) {
            (o = !0), (r = i), (n = l);
            break;
          }
          s = s.sibling;
        }
        if (!o) throw Error(j(189));
      }
    }
    if (n.alternate !== r) throw Error(j(190));
  }
  if (n.tag !== 3) throw Error(j(188));
  return n.stateNode.current === n ? e : t;
}
function Nc(e) {
  return (e = xp(e)), e !== null ? Ec(e) : null;
}
function Ec(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Ec(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var jc = Be.unstable_scheduleCallback,
  za = Be.unstable_cancelCallback,
  wp = Be.unstable_shouldYield,
  Sp = Be.unstable_requestPaint,
  se = Be.unstable_now,
  kp = Be.unstable_getCurrentPriorityLevel,
  Ls = Be.unstable_ImmediatePriority,
  Cc = Be.unstable_UserBlockingPriority,
  Bl = Be.unstable_NormalPriority,
  Np = Be.unstable_LowPriority,
  bc = Be.unstable_IdlePriority,
  wi = null,
  vt = null;
function Ep(e) {
  if (vt && typeof vt.onCommitFiberRoot == "function")
    try {
      vt.onCommitFiberRoot(wi, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var ct = Math.clz32 ? Math.clz32 : bp,
  jp = Math.log,
  Cp = Math.LN2;
function bp(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((jp(e) / Cp) | 0)) | 0;
}
var ml = 64,
  hl = 4194304;
function jr(e) {
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
function Ql(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var s = o & ~l;
    s !== 0 ? (r = jr(s)) : ((i &= o), i !== 0 && (r = jr(i)));
  } else (o = n & ~l), o !== 0 ? (r = jr(o)) : i !== 0 && (r = jr(i));
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
      (n = 31 - ct(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Pp(e, t) {
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
function Tp(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - ct(i),
      s = 1 << o,
      u = l[o];
    u === -1
      ? (!(s & n) || s & r) && (l[o] = Pp(s, t))
      : u <= t && (e.expiredLanes |= s),
      (i &= ~s);
  }
}
function Ao(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Pc() {
  var e = ml;
  return (ml <<= 1), !(ml & 4194240) && (ml = 64), e;
}
function Vi(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function rl(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - ct(t)),
    (e[t] = n);
}
function Op(e, t) {
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
    var l = 31 - ct(n),
      i = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
  }
}
function $s(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - ct(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var B = 0;
function Tc(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Oc,
  Fs,
  Dc,
  _c,
  Mc,
  Uo = !1,
  gl = [],
  Vt = null,
  Yt = null,
  Gt = null,
  Ur = new Map(),
  Hr = new Map(),
  Ut = [],
  Dp =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Ia(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Vt = null;
      break;
    case "dragenter":
    case "dragleave":
      Yt = null;
      break;
    case "mouseover":
    case "mouseout":
      Gt = null;
      break;
    case "pointerover":
    case "pointerout":
      Ur.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Hr.delete(t.pointerId);
  }
}
function pr(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = il(t)), t !== null && Fs(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function _p(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (Vt = pr(Vt, e, t, n, r, l)), !0;
    case "dragenter":
      return (Yt = pr(Yt, e, t, n, r, l)), !0;
    case "mouseover":
      return (Gt = pr(Gt, e, t, n, r, l)), !0;
    case "pointerover":
      var i = l.pointerId;
      return Ur.set(i, pr(Ur.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (i = l.pointerId), Hr.set(i, pr(Hr.get(i) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Lc(e) {
  var t = dn(e.target);
  if (t !== null) {
    var n = Cn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = kc(n)), t !== null)) {
          (e.blockedOn = t),
            Mc(e.priority, function () {
              Dc(n);
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
function Dl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ho(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Fo = r), n.target.dispatchEvent(r), (Fo = null);
    } else return (t = il(n)), t !== null && Fs(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Aa(e, t, n) {
  Dl(e) && n.delete(t);
}
function Mp() {
  (Uo = !1),
    Vt !== null && Dl(Vt) && (Vt = null),
    Yt !== null && Dl(Yt) && (Yt = null),
    Gt !== null && Dl(Gt) && (Gt = null),
    Ur.forEach(Aa),
    Hr.forEach(Aa);
}
function mr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Uo ||
      ((Uo = !0),
      Be.unstable_scheduleCallback(Be.unstable_NormalPriority, Mp)));
}
function Wr(e) {
  function t(l) {
    return mr(l, e);
  }
  if (0 < gl.length) {
    mr(gl[0], e);
    for (var n = 1; n < gl.length; n++) {
      var r = gl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Vt !== null && mr(Vt, e),
      Yt !== null && mr(Yt, e),
      Gt !== null && mr(Gt, e),
      Ur.forEach(t),
      Hr.forEach(t),
      n = 0;
    n < Ut.length;
    n++
  )
    (r = Ut[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Ut.length && ((n = Ut[0]), n.blockedOn === null); )
    Lc(n), n.blockedOn === null && Ut.shift();
}
var Vn = Lt.ReactCurrentBatchConfig,
  Vl = !0;
function Lp(e, t, n, r) {
  var l = B,
    i = Vn.transition;
  Vn.transition = null;
  try {
    (B = 1), Rs(e, t, n, r);
  } finally {
    (B = l), (Vn.transition = i);
  }
}
function $p(e, t, n, r) {
  var l = B,
    i = Vn.transition;
  Vn.transition = null;
  try {
    (B = 4), Rs(e, t, n, r);
  } finally {
    (B = l), (Vn.transition = i);
  }
}
function Rs(e, t, n, r) {
  if (Vl) {
    var l = Ho(e, t, n, r);
    if (l === null) ro(e, t, r, Yl, n), Ia(e, r);
    else if (_p(l, e, t, n, r)) r.stopPropagation();
    else if ((Ia(e, r), t & 4 && -1 < Dp.indexOf(e))) {
      for (; l !== null; ) {
        var i = il(l);
        if (
          (i !== null && Oc(i),
          (i = Ho(e, t, n, r)),
          i === null && ro(e, t, r, Yl, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else ro(e, t, r, null, n);
  }
}
var Yl = null;
function Ho(e, t, n, r) {
  if (((Yl = null), (e = Ms(r)), (e = dn(e)), e !== null))
    if (((t = Cn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = kc(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Yl = e), null;
}
function $c(e) {
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
      switch (kp()) {
        case Ls:
          return 1;
        case Cc:
          return 4;
        case Bl:
        case Np:
          return 16;
        case bc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var qt = null,
  zs = null,
  _l = null;
function Fc() {
  if (_l) return _l;
  var e,
    t = zs,
    n = t.length,
    r,
    l = "value" in qt ? qt.value : qt.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
  return (_l = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Ml(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function yl() {
  return !0;
}
function Ua() {
  return !1;
}
function Ve(e) {
  function t(n, r, l, i, o) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(i) : i[s]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? yl
        : Ua),
      (this.isPropagationStopped = Ua),
      this
    );
  }
  return (
    re(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = yl));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = yl));
      },
      persist: function () {},
      isPersistent: yl,
    }),
    t
  );
}
var lr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Is = Ve(lr),
  ll = re({}, lr, { view: 0, detail: 0 }),
  Fp = Ve(ll),
  Yi,
  Gi,
  hr,
  Si = re({}, ll, {
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
    getModifierState: As,
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
        : (e !== hr &&
            (hr && e.type === "mousemove"
              ? ((Yi = e.screenX - hr.screenX), (Gi = e.screenY - hr.screenY))
              : (Gi = Yi = 0),
            (hr = e)),
          Yi);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Gi;
    },
  }),
  Ha = Ve(Si),
  Rp = re({}, Si, { dataTransfer: 0 }),
  zp = Ve(Rp),
  Ip = re({}, ll, { relatedTarget: 0 }),
  Ki = Ve(Ip),
  Ap = re({}, lr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Up = Ve(Ap),
  Hp = re({}, lr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Wp = Ve(Hp),
  qp = re({}, lr, { data: 0 }),
  Wa = Ve(qp),
  Bp = {
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
  Qp = {
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
  Vp = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Yp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Vp[e]) ? !!t[e] : !1;
}
function As() {
  return Yp;
}
var Gp = re({}, ll, {
    key: function (e) {
      if (e.key) {
        var t = Bp[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ml(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Qp[e.keyCode] || "Unidentified"
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
    getModifierState: As,
    charCode: function (e) {
      return e.type === "keypress" ? Ml(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ml(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Kp = Ve(Gp),
  Xp = re({}, Si, {
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
  qa = Ve(Xp),
  Jp = re({}, ll, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: As,
  }),
  Zp = Ve(Jp),
  em = re({}, lr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  tm = Ve(em),
  nm = re({}, Si, {
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
  rm = Ve(nm),
  lm = [9, 13, 27, 32],
  Us = Ot && "CompositionEvent" in window,
  Or = null;
Ot && "documentMode" in document && (Or = document.documentMode);
var im = Ot && "TextEvent" in window && !Or,
  Rc = Ot && (!Us || (Or && 8 < Or && 11 >= Or)),
  Ba = " ",
  Qa = !1;
function zc(e, t) {
  switch (e) {
    case "keyup":
      return lm.indexOf(t.keyCode) !== -1;
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
function Ic(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Ln = !1;
function om(e, t) {
  switch (e) {
    case "compositionend":
      return Ic(t);
    case "keypress":
      return t.which !== 32 ? null : ((Qa = !0), Ba);
    case "textInput":
      return (e = t.data), e === Ba && Qa ? null : e;
    default:
      return null;
  }
}
function sm(e, t) {
  if (Ln)
    return e === "compositionend" || (!Us && zc(e, t))
      ? ((e = Fc()), (_l = zs = qt = null), (Ln = !1), e)
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
      return Rc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var am = {
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
function Va(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!am[e.type] : t === "textarea";
}
function Ac(e, t, n, r) {
  yc(r),
    (t = Gl(t, "onChange")),
    0 < t.length &&
      ((n = new Is("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Dr = null,
  qr = null;
function um(e) {
  Xc(e, 0);
}
function ki(e) {
  var t = Rn(e);
  if (cc(t)) return e;
}
function cm(e, t) {
  if (e === "change") return t;
}
var Uc = !1;
if (Ot) {
  var Xi;
  if (Ot) {
    var Ji = "oninput" in document;
    if (!Ji) {
      var Ya = document.createElement("div");
      Ya.setAttribute("oninput", "return;"),
        (Ji = typeof Ya.oninput == "function");
    }
    Xi = Ji;
  } else Xi = !1;
  Uc = Xi && (!document.documentMode || 9 < document.documentMode);
}
function Ga() {
  Dr && (Dr.detachEvent("onpropertychange", Hc), (qr = Dr = null));
}
function Hc(e) {
  if (e.propertyName === "value" && ki(qr)) {
    var t = [];
    Ac(t, qr, e, Ms(e)), Sc(um, t);
  }
}
function dm(e, t, n) {
  e === "focusin"
    ? (Ga(), (Dr = t), (qr = n), Dr.attachEvent("onpropertychange", Hc))
    : e === "focusout" && Ga();
}
function fm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ki(qr);
}
function pm(e, t) {
  if (e === "click") return ki(t);
}
function mm(e, t) {
  if (e === "input" || e === "change") return ki(t);
}
function hm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var ft = typeof Object.is == "function" ? Object.is : hm;
function Br(e, t) {
  if (ft(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Eo.call(t, l) || !ft(e[l], t[l])) return !1;
  }
  return !0;
}
function Ka(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Xa(e, t) {
  var n = Ka(e);
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
    n = Ka(n);
  }
}
function Wc(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Wc(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function qc() {
  for (var e = window, t = Hl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Hl(e.document);
  }
  return t;
}
function Hs(e) {
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
function gm(e) {
  var t = qc(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Wc(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Hs(n)) {
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
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = Xa(n, i));
        var o = Xa(n, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
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
var ym = Ot && "documentMode" in document && 11 >= document.documentMode,
  $n = null,
  Wo = null,
  _r = null,
  qo = !1;
function Ja(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  qo ||
    $n == null ||
    $n !== Hl(r) ||
    ((r = $n),
    "selectionStart" in r && Hs(r)
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
    (_r && Br(_r, r)) ||
      ((_r = r),
      (r = Gl(Wo, "onSelect")),
      0 < r.length &&
        ((t = new Is("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = $n))));
}
function vl(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Fn = {
    animationend: vl("Animation", "AnimationEnd"),
    animationiteration: vl("Animation", "AnimationIteration"),
    animationstart: vl("Animation", "AnimationStart"),
    transitionend: vl("Transition", "TransitionEnd"),
  },
  Zi = {},
  Bc = {};
Ot &&
  ((Bc = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Fn.animationend.animation,
    delete Fn.animationiteration.animation,
    delete Fn.animationstart.animation),
  "TransitionEvent" in window || delete Fn.transitionend.transition);
function Ni(e) {
  if (Zi[e]) return Zi[e];
  if (!Fn[e]) return e;
  var t = Fn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Bc) return (Zi[e] = t[n]);
  return e;
}
var Qc = Ni("animationend"),
  Vc = Ni("animationiteration"),
  Yc = Ni("animationstart"),
  Gc = Ni("transitionend"),
  Kc = new Map(),
  Za =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function rn(e, t) {
  Kc.set(e, t), jn(t, [e]);
}
for (var eo = 0; eo < Za.length; eo++) {
  var to = Za[eo],
    vm = to.toLowerCase(),
    xm = to[0].toUpperCase() + to.slice(1);
  rn(vm, "on" + xm);
}
rn(Qc, "onAnimationEnd");
rn(Vc, "onAnimationIteration");
rn(Yc, "onAnimationStart");
rn("dblclick", "onDoubleClick");
rn("focusin", "onFocus");
rn("focusout", "onBlur");
rn(Gc, "onTransitionEnd");
Kn("onMouseEnter", ["mouseout", "mouseover"]);
Kn("onMouseLeave", ["mouseout", "mouseover"]);
Kn("onPointerEnter", ["pointerout", "pointerover"]);
Kn("onPointerLeave", ["pointerout", "pointerover"]);
jn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
jn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
jn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
jn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
jn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
jn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Cr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  wm = new Set("cancel close invalid load scroll toggle".split(" ").concat(Cr));
function eu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), vp(r, t, void 0, e), (e.currentTarget = null);
}
function Xc(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var s = r[o],
            u = s.instance,
            c = s.currentTarget;
          if (((s = s.listener), u !== i && l.isPropagationStopped())) break e;
          eu(l, s, c), (i = u);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((s = r[o]),
            (u = s.instance),
            (c = s.currentTarget),
            (s = s.listener),
            u !== i && l.isPropagationStopped())
          )
            break e;
          eu(l, s, c), (i = u);
        }
    }
  }
  if (ql) throw ((e = Io), (ql = !1), (Io = null), e);
}
function G(e, t) {
  var n = t[Go];
  n === void 0 && (n = t[Go] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Jc(t, e, 2, !1), n.add(r));
}
function no(e, t, n) {
  var r = 0;
  t && (r |= 4), Jc(n, e, r, t);
}
var xl = "_reactListening" + Math.random().toString(36).slice(2);
function Qr(e) {
  if (!e[xl]) {
    (e[xl] = !0),
      ic.forEach(function (n) {
        n !== "selectionchange" && (wm.has(n) || no(n, !1, e), no(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[xl] || ((t[xl] = !0), no("selectionchange", !1, t));
  }
}
function Jc(e, t, n, r) {
  switch ($c(t)) {
    case 1:
      var l = Lp;
      break;
    case 4:
      l = $p;
      break;
    default:
      l = Rs;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !zo ||
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
function ro(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var s = r.stateNode.containerInfo;
        if (s === l || (s.nodeType === 8 && s.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var u = o.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = o.stateNode.containerInfo),
              u === l || (u.nodeType === 8 && u.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; s !== null; ) {
          if (((o = dn(s)), o === null)) return;
          if (((u = o.tag), u === 5 || u === 6)) {
            r = i = o;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  Sc(function () {
    var c = i,
      f = Ms(n),
      p = [];
    e: {
      var y = Kc.get(e);
      if (y !== void 0) {
        var x = Is,
          w = e;
        switch (e) {
          case "keypress":
            if (Ml(n) === 0) break e;
          case "keydown":
          case "keyup":
            x = Kp;
            break;
          case "focusin":
            (w = "focus"), (x = Ki);
            break;
          case "focusout":
            (w = "blur"), (x = Ki);
            break;
          case "beforeblur":
          case "afterblur":
            x = Ki;
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
            x = Ha;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = zp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = Zp;
            break;
          case Qc:
          case Vc:
          case Yc:
            x = Up;
            break;
          case Gc:
            x = tm;
            break;
          case "scroll":
            x = Fp;
            break;
          case "wheel":
            x = rm;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = Wp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = qa;
        }
        var S = (t & 4) !== 0,
          C = !S && e === "scroll",
          m = S ? (y !== null ? y + "Capture" : null) : y;
        S = [];
        for (var d = c, h; d !== null; ) {
          h = d;
          var v = h.stateNode;
          if (
            (h.tag === 5 &&
              v !== null &&
              ((h = v),
              m !== null && ((v = Ar(d, m)), v != null && S.push(Vr(d, v, h)))),
            C)
          )
            break;
          d = d.return;
        }
        0 < S.length &&
          ((y = new x(y, w, null, n, f)), p.push({ event: y, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((y = e === "mouseover" || e === "pointerover"),
          (x = e === "mouseout" || e === "pointerout"),
          y &&
            n !== Fo &&
            (w = n.relatedTarget || n.fromElement) &&
            (dn(w) || w[Dt]))
        )
          break e;
        if (
          (x || y) &&
          ((y =
            f.window === f
              ? f
              : (y = f.ownerDocument)
              ? y.defaultView || y.parentWindow
              : window),
          x
            ? ((w = n.relatedTarget || n.toElement),
              (x = c),
              (w = w ? dn(w) : null),
              w !== null &&
                ((C = Cn(w)), w !== C || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((x = null), (w = c)),
          x !== w)
        ) {
          if (
            ((S = Ha),
            (v = "onMouseLeave"),
            (m = "onMouseEnter"),
            (d = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((S = qa),
              (v = "onPointerLeave"),
              (m = "onPointerEnter"),
              (d = "pointer")),
            (C = x == null ? y : Rn(x)),
            (h = w == null ? y : Rn(w)),
            (y = new S(v, d + "leave", x, n, f)),
            (y.target = C),
            (y.relatedTarget = h),
            (v = null),
            dn(f) === c &&
              ((S = new S(m, d + "enter", w, n, f)),
              (S.target = h),
              (S.relatedTarget = C),
              (v = S)),
            (C = v),
            x && w)
          )
            t: {
              for (S = x, m = w, d = 0, h = S; h; h = Tn(h)) d++;
              for (h = 0, v = m; v; v = Tn(v)) h++;
              for (; 0 < d - h; ) (S = Tn(S)), d--;
              for (; 0 < h - d; ) (m = Tn(m)), h--;
              for (; d--; ) {
                if (S === m || (m !== null && S === m.alternate)) break t;
                (S = Tn(S)), (m = Tn(m));
              }
              S = null;
            }
          else S = null;
          x !== null && tu(p, y, x, S, !1),
            w !== null && C !== null && tu(p, C, w, S, !0);
        }
      }
      e: {
        if (
          ((y = c ? Rn(c) : window),
          (x = y.nodeName && y.nodeName.toLowerCase()),
          x === "select" || (x === "input" && y.type === "file"))
        )
          var N = cm;
        else if (Va(y))
          if (Uc) N = mm;
          else {
            N = fm;
            var E = dm;
          }
        else
          (x = y.nodeName) &&
            x.toLowerCase() === "input" &&
            (y.type === "checkbox" || y.type === "radio") &&
            (N = pm);
        if (N && (N = N(e, c))) {
          Ac(p, N, n, f);
          break e;
        }
        E && E(e, y, c),
          e === "focusout" &&
            (E = y._wrapperState) &&
            E.controlled &&
            y.type === "number" &&
            Do(y, "number", y.value);
      }
      switch (((E = c ? Rn(c) : window), e)) {
        case "focusin":
          (Va(E) || E.contentEditable === "true") &&
            (($n = E), (Wo = c), (_r = null));
          break;
        case "focusout":
          _r = Wo = $n = null;
          break;
        case "mousedown":
          qo = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (qo = !1), Ja(p, n, f);
          break;
        case "selectionchange":
          if (ym) break;
        case "keydown":
        case "keyup":
          Ja(p, n, f);
      }
      var P;
      if (Us)
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
        Ln
          ? zc(e, n) && (T = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T &&
        (Rc &&
          n.locale !== "ko" &&
          (Ln || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && Ln && (P = Fc())
            : ((qt = f),
              (zs = "value" in qt ? qt.value : qt.textContent),
              (Ln = !0))),
        (E = Gl(c, T)),
        0 < E.length &&
          ((T = new Wa(T, e, null, n, f)),
          p.push({ event: T, listeners: E }),
          P ? (T.data = P) : ((P = Ic(n)), P !== null && (T.data = P)))),
        (P = im ? om(e, n) : sm(e, n)) &&
          ((c = Gl(c, "onBeforeInput")),
          0 < c.length &&
            ((f = new Wa("onBeforeInput", "beforeinput", null, n, f)),
            p.push({ event: f, listeners: c }),
            (f.data = P)));
    }
    Xc(p, t);
  });
}
function Vr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Gl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = Ar(e, n)),
      i != null && r.unshift(Vr(e, i, l)),
      (i = Ar(e, t)),
      i != null && r.push(Vr(e, i, l))),
      (e = e.return);
  }
  return r;
}
function Tn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function tu(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var s = n,
      u = s.alternate,
      c = s.stateNode;
    if (u !== null && u === r) break;
    s.tag === 5 &&
      c !== null &&
      ((s = c),
      l
        ? ((u = Ar(n, i)), u != null && o.unshift(Vr(n, u, s)))
        : l || ((u = Ar(n, i)), u != null && o.push(Vr(n, u, s)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Sm = /\r\n?/g,
  km = /\u0000|\uFFFD/g;
function nu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Sm,
      `
`
    )
    .replace(km, "");
}
function wl(e, t, n) {
  if (((t = nu(t)), nu(e) !== t && n)) throw Error(j(425));
}
function Kl() {}
var Bo = null,
  Qo = null;
function Vo(e, t) {
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
var Yo = typeof setTimeout == "function" ? setTimeout : void 0,
  Nm = typeof clearTimeout == "function" ? clearTimeout : void 0,
  ru = typeof Promise == "function" ? Promise : void 0,
  Em =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof ru < "u"
      ? function (e) {
          return ru.resolve(null).then(e).catch(jm);
        }
      : Yo;
function jm(e) {
  setTimeout(function () {
    throw e;
  });
}
function lo(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Wr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Wr(t);
}
function Kt(e) {
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
function lu(e) {
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
var ir = Math.random().toString(36).slice(2),
  yt = "__reactFiber$" + ir,
  Yr = "__reactProps$" + ir,
  Dt = "__reactContainer$" + ir,
  Go = "__reactEvents$" + ir,
  Cm = "__reactListeners$" + ir,
  bm = "__reactHandles$" + ir;
function dn(e) {
  var t = e[yt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Dt] || n[yt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = lu(e); e !== null; ) {
          if ((n = e[yt])) return n;
          e = lu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function il(e) {
  return (
    (e = e[yt] || e[Dt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Rn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(j(33));
}
function Ei(e) {
  return e[Yr] || null;
}
var Ko = [],
  zn = -1;
function ln(e) {
  return { current: e };
}
function K(e) {
  0 > zn || ((e.current = Ko[zn]), (Ko[zn] = null), zn--);
}
function Y(e, t) {
  zn++, (Ko[zn] = e.current), (e.current = t);
}
var nn = {},
  ke = ln(nn),
  $e = ln(!1),
  xn = nn;
function Xn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return nn;
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
function Fe(e) {
  return (e = e.childContextTypes), e != null;
}
function Xl() {
  K($e), K(ke);
}
function iu(e, t, n) {
  if (ke.current !== nn) throw Error(j(168));
  Y(ke, t), Y($e, n);
}
function Zc(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(j(108, dp(e) || "Unknown", l));
  return re({}, n, r);
}
function Jl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || nn),
    (xn = ke.current),
    Y(ke, e),
    Y($e, $e.current),
    !0
  );
}
function ou(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(j(169));
  n
    ? ((e = Zc(e, t, xn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      K($e),
      K(ke),
      Y(ke, e))
    : K($e),
    Y($e, n);
}
var kt = null,
  ji = !1,
  io = !1;
function ed(e) {
  kt === null ? (kt = [e]) : kt.push(e);
}
function Pm(e) {
  (ji = !0), ed(e);
}
function on() {
  if (!io && kt !== null) {
    io = !0;
    var e = 0,
      t = B;
    try {
      var n = kt;
      for (B = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (kt = null), (ji = !1);
    } catch (l) {
      throw (kt !== null && (kt = kt.slice(e + 1)), jc(Ls, on), l);
    } finally {
      (B = t), (io = !1);
    }
  }
  return null;
}
var In = [],
  An = 0,
  Zl = null,
  ei = 0,
  Ke = [],
  Xe = 0,
  wn = null,
  jt = 1,
  Ct = "";
function sn(e, t) {
  (In[An++] = ei), (In[An++] = Zl), (Zl = e), (ei = t);
}
function td(e, t, n) {
  (Ke[Xe++] = jt), (Ke[Xe++] = Ct), (Ke[Xe++] = wn), (wn = e);
  var r = jt;
  e = Ct;
  var l = 32 - ct(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var i = 32 - ct(t) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (jt = (1 << (32 - ct(t) + l)) | (n << l) | r),
      (Ct = i + e);
  } else (jt = (1 << i) | (n << l) | r), (Ct = e);
}
function Ws(e) {
  e.return !== null && (sn(e, 1), td(e, 1, 0));
}
function qs(e) {
  for (; e === Zl; )
    (Zl = In[--An]), (In[An] = null), (ei = In[--An]), (In[An] = null);
  for (; e === wn; )
    (wn = Ke[--Xe]),
      (Ke[Xe] = null),
      (Ct = Ke[--Xe]),
      (Ke[Xe] = null),
      (jt = Ke[--Xe]),
      (Ke[Xe] = null);
}
var qe = null,
  We = null,
  J = !1,
  at = null;
function nd(e, t) {
  var n = Je(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function su(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (qe = e), (We = Kt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (qe = e), (We = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = wn !== null ? { id: jt, overflow: Ct } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Je(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (qe = e),
            (We = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Xo(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Jo(e) {
  if (J) {
    var t = We;
    if (t) {
      var n = t;
      if (!su(e, t)) {
        if (Xo(e)) throw Error(j(418));
        t = Kt(n.nextSibling);
        var r = qe;
        t && su(e, t)
          ? nd(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (J = !1), (qe = e));
      }
    } else {
      if (Xo(e)) throw Error(j(418));
      (e.flags = (e.flags & -4097) | 2), (J = !1), (qe = e);
    }
  }
}
function au(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  qe = e;
}
function Sl(e) {
  if (e !== qe) return !1;
  if (!J) return au(e), (J = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Vo(e.type, e.memoizedProps))),
    t && (t = We))
  ) {
    if (Xo(e)) throw (rd(), Error(j(418)));
    for (; t; ) nd(e, t), (t = Kt(t.nextSibling));
  }
  if ((au(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(j(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              We = Kt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      We = null;
    }
  } else We = qe ? Kt(e.stateNode.nextSibling) : null;
  return !0;
}
function rd() {
  for (var e = We; e; ) e = Kt(e.nextSibling);
}
function Jn() {
  (We = qe = null), (J = !1);
}
function Bs(e) {
  at === null ? (at = [e]) : at.push(e);
}
var Tm = Lt.ReactCurrentBatchConfig;
function gr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(j(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(j(147, e));
      var l = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var s = l.refs;
            o === null ? delete s[i] : (s[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(j(284));
    if (!n._owner) throw Error(j(290, e));
  }
  return e;
}
function kl(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      j(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function uu(e) {
  var t = e._init;
  return t(e._payload);
}
function ld(e) {
  function t(m, d) {
    if (e) {
      var h = m.deletions;
      h === null ? ((m.deletions = [d]), (m.flags |= 16)) : h.push(d);
    }
  }
  function n(m, d) {
    if (!e) return null;
    for (; d !== null; ) t(m, d), (d = d.sibling);
    return null;
  }
  function r(m, d) {
    for (m = new Map(); d !== null; )
      d.key !== null ? m.set(d.key, d) : m.set(d.index, d), (d = d.sibling);
    return m;
  }
  function l(m, d) {
    return (m = en(m, d)), (m.index = 0), (m.sibling = null), m;
  }
  function i(m, d, h) {
    return (
      (m.index = h),
      e
        ? ((h = m.alternate),
          h !== null
            ? ((h = h.index), h < d ? ((m.flags |= 2), d) : h)
            : ((m.flags |= 2), d))
        : ((m.flags |= 1048576), d)
    );
  }
  function o(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function s(m, d, h, v) {
    return d === null || d.tag !== 6
      ? ((d = po(h, m.mode, v)), (d.return = m), d)
      : ((d = l(d, h)), (d.return = m), d);
  }
  function u(m, d, h, v) {
    var N = h.type;
    return N === Mn
      ? f(m, d, h.props.children, v, h.key)
      : d !== null &&
        (d.elementType === N ||
          (typeof N == "object" &&
            N !== null &&
            N.$$typeof === It &&
            uu(N) === d.type))
      ? ((v = l(d, h.props)), (v.ref = gr(m, d, h)), (v.return = m), v)
      : ((v = Al(h.type, h.key, h.props, null, m.mode, v)),
        (v.ref = gr(m, d, h)),
        (v.return = m),
        v);
  }
  function c(m, d, h, v) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== h.containerInfo ||
      d.stateNode.implementation !== h.implementation
      ? ((d = mo(h, m.mode, v)), (d.return = m), d)
      : ((d = l(d, h.children || [])), (d.return = m), d);
  }
  function f(m, d, h, v, N) {
    return d === null || d.tag !== 7
      ? ((d = yn(h, m.mode, v, N)), (d.return = m), d)
      : ((d = l(d, h)), (d.return = m), d);
  }
  function p(m, d, h) {
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return (d = po("" + d, m.mode, h)), (d.return = m), d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case dl:
          return (
            (h = Al(d.type, d.key, d.props, null, m.mode, h)),
            (h.ref = gr(m, null, d)),
            (h.return = m),
            h
          );
        case _n:
          return (d = mo(d, m.mode, h)), (d.return = m), d;
        case It:
          var v = d._init;
          return p(m, v(d._payload), h);
      }
      if (Er(d) || dr(d))
        return (d = yn(d, m.mode, h, null)), (d.return = m), d;
      kl(m, d);
    }
    return null;
  }
  function y(m, d, h, v) {
    var N = d !== null ? d.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return N !== null ? null : s(m, d, "" + h, v);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case dl:
          return h.key === N ? u(m, d, h, v) : null;
        case _n:
          return h.key === N ? c(m, d, h, v) : null;
        case It:
          return (N = h._init), y(m, d, N(h._payload), v);
      }
      if (Er(h) || dr(h)) return N !== null ? null : f(m, d, h, v, null);
      kl(m, h);
    }
    return null;
  }
  function x(m, d, h, v, N) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return (m = m.get(h) || null), s(d, m, "" + v, N);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case dl:
          return (m = m.get(v.key === null ? h : v.key) || null), u(d, m, v, N);
        case _n:
          return (m = m.get(v.key === null ? h : v.key) || null), c(d, m, v, N);
        case It:
          var E = v._init;
          return x(m, d, h, E(v._payload), N);
      }
      if (Er(v) || dr(v)) return (m = m.get(h) || null), f(d, m, v, N, null);
      kl(d, v);
    }
    return null;
  }
  function w(m, d, h, v) {
    for (
      var N = null, E = null, P = d, T = (d = 0), R = null;
      P !== null && T < h.length;
      T++
    ) {
      P.index > T ? ((R = P), (P = null)) : (R = P.sibling);
      var M = y(m, P, h[T], v);
      if (M === null) {
        P === null && (P = R);
        break;
      }
      e && P && M.alternate === null && t(m, P),
        (d = i(M, d, T)),
        E === null ? (N = M) : (E.sibling = M),
        (E = M),
        (P = R);
    }
    if (T === h.length) return n(m, P), J && sn(m, T), N;
    if (P === null) {
      for (; T < h.length; T++)
        (P = p(m, h[T], v)),
          P !== null &&
            ((d = i(P, d, T)), E === null ? (N = P) : (E.sibling = P), (E = P));
      return J && sn(m, T), N;
    }
    for (P = r(m, P); T < h.length; T++)
      (R = x(P, m, T, h[T], v)),
        R !== null &&
          (e && R.alternate !== null && P.delete(R.key === null ? T : R.key),
          (d = i(R, d, T)),
          E === null ? (N = R) : (E.sibling = R),
          (E = R));
    return (
      e &&
        P.forEach(function (ee) {
          return t(m, ee);
        }),
      J && sn(m, T),
      N
    );
  }
  function S(m, d, h, v) {
    var N = dr(h);
    if (typeof N != "function") throw Error(j(150));
    if (((h = N.call(h)), h == null)) throw Error(j(151));
    for (
      var E = (N = null), P = d, T = (d = 0), R = null, M = h.next();
      P !== null && !M.done;
      T++, M = h.next()
    ) {
      P.index > T ? ((R = P), (P = null)) : (R = P.sibling);
      var ee = y(m, P, M.value, v);
      if (ee === null) {
        P === null && (P = R);
        break;
      }
      e && P && ee.alternate === null && t(m, P),
        (d = i(ee, d, T)),
        E === null ? (N = ee) : (E.sibling = ee),
        (E = ee),
        (P = R);
    }
    if (M.done) return n(m, P), J && sn(m, T), N;
    if (P === null) {
      for (; !M.done; T++, M = h.next())
        (M = p(m, M.value, v)),
          M !== null &&
            ((d = i(M, d, T)), E === null ? (N = M) : (E.sibling = M), (E = M));
      return J && sn(m, T), N;
    }
    for (P = r(m, P); !M.done; T++, M = h.next())
      (M = x(P, m, T, M.value, v)),
        M !== null &&
          (e && M.alternate !== null && P.delete(M.key === null ? T : M.key),
          (d = i(M, d, T)),
          E === null ? (N = M) : (E.sibling = M),
          (E = M));
    return (
      e &&
        P.forEach(function (ue) {
          return t(m, ue);
        }),
      J && sn(m, T),
      N
    );
  }
  function C(m, d, h, v) {
    if (
      (typeof h == "object" &&
        h !== null &&
        h.type === Mn &&
        h.key === null &&
        (h = h.props.children),
      typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case dl:
          e: {
            for (var N = h.key, E = d; E !== null; ) {
              if (E.key === N) {
                if (((N = h.type), N === Mn)) {
                  if (E.tag === 7) {
                    n(m, E.sibling),
                      (d = l(E, h.props.children)),
                      (d.return = m),
                      (m = d);
                    break e;
                  }
                } else if (
                  E.elementType === N ||
                  (typeof N == "object" &&
                    N !== null &&
                    N.$$typeof === It &&
                    uu(N) === E.type)
                ) {
                  n(m, E.sibling),
                    (d = l(E, h.props)),
                    (d.ref = gr(m, E, h)),
                    (d.return = m),
                    (m = d);
                  break e;
                }
                n(m, E);
                break;
              } else t(m, E);
              E = E.sibling;
            }
            h.type === Mn
              ? ((d = yn(h.props.children, m.mode, v, h.key)),
                (d.return = m),
                (m = d))
              : ((v = Al(h.type, h.key, h.props, null, m.mode, v)),
                (v.ref = gr(m, d, h)),
                (v.return = m),
                (m = v));
          }
          return o(m);
        case _n:
          e: {
            for (E = h.key; d !== null; ) {
              if (d.key === E)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === h.containerInfo &&
                  d.stateNode.implementation === h.implementation
                ) {
                  n(m, d.sibling),
                    (d = l(d, h.children || [])),
                    (d.return = m),
                    (m = d);
                  break e;
                } else {
                  n(m, d);
                  break;
                }
              else t(m, d);
              d = d.sibling;
            }
            (d = mo(h, m.mode, v)), (d.return = m), (m = d);
          }
          return o(m);
        case It:
          return (E = h._init), C(m, d, E(h._payload), v);
      }
      if (Er(h)) return w(m, d, h, v);
      if (dr(h)) return S(m, d, h, v);
      kl(m, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        d !== null && d.tag === 6
          ? (n(m, d.sibling), (d = l(d, h)), (d.return = m), (m = d))
          : (n(m, d), (d = po(h, m.mode, v)), (d.return = m), (m = d)),
        o(m))
      : n(m, d);
  }
  return C;
}
var Zn = ld(!0),
  id = ld(!1),
  ti = ln(null),
  ni = null,
  Un = null,
  Qs = null;
function Vs() {
  Qs = Un = ni = null;
}
function Ys(e) {
  var t = ti.current;
  K(ti), (e._currentValue = t);
}
function Zo(e, t, n) {
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
function Yn(e, t) {
  (ni = e),
    (Qs = Un = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Le = !0), (e.firstContext = null));
}
function et(e) {
  var t = e._currentValue;
  if (Qs !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Un === null)) {
      if (ni === null) throw Error(j(308));
      (Un = e), (ni.dependencies = { lanes: 0, firstContext: e });
    } else Un = Un.next = e;
  return t;
}
var fn = null;
function Gs(e) {
  fn === null ? (fn = [e]) : fn.push(e);
}
function od(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Gs(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    _t(e, r)
  );
}
function _t(e, t) {
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
var At = !1;
function Ks(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function sd(e, t) {
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
function bt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Xt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), U & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      _t(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Gs(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    _t(e, n)
  );
}
function Ll(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), $s(e, n);
  }
}
function cu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
      } while (n !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
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
function ri(e, t, n, r) {
  var l = e.updateQueue;
  At = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    s = l.shared.pending;
  if (s !== null) {
    l.shared.pending = null;
    var u = s,
      c = u.next;
    (u.next = null), o === null ? (i = c) : (o.next = c), (o = u);
    var f = e.alternate;
    f !== null &&
      ((f = f.updateQueue),
      (s = f.lastBaseUpdate),
      s !== o &&
        (s === null ? (f.firstBaseUpdate = c) : (s.next = c),
        (f.lastBaseUpdate = u)));
  }
  if (i !== null) {
    var p = l.baseState;
    (o = 0), (f = c = u = null), (s = i);
    do {
      var y = s.lane,
        x = s.eventTime;
      if ((r & y) === y) {
        f !== null &&
          (f = f.next =
            {
              eventTime: x,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var w = e,
            S = s;
          switch (((y = t), (x = n), S.tag)) {
            case 1:
              if (((w = S.payload), typeof w == "function")) {
                p = w.call(x, p, y);
                break e;
              }
              p = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = S.payload),
                (y = typeof w == "function" ? w.call(x, p, y) : w),
                y == null)
              )
                break e;
              p = re({}, p, y);
              break e;
            case 2:
              At = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (y = l.effects),
          y === null ? (l.effects = [s]) : y.push(s));
      } else
        (x = {
          eventTime: x,
          lane: y,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          f === null ? ((c = f = x), (u = p)) : (f = f.next = x),
          (o |= y);
      if (((s = s.next), s === null)) {
        if (((s = l.shared.pending), s === null)) break;
        (y = s),
          (s = y.next),
          (y.next = null),
          (l.lastBaseUpdate = y),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (f === null && (u = p),
      (l.baseState = u),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = f),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (o |= l.lane), (l = l.next);
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    (kn |= o), (e.lanes = o), (e.memoizedState = p);
  }
}
function du(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(j(191, l));
        l.call(r);
      }
    }
}
var ol = {},
  xt = ln(ol),
  Gr = ln(ol),
  Kr = ln(ol);
function pn(e) {
  if (e === ol) throw Error(j(174));
  return e;
}
function Xs(e, t) {
  switch ((Y(Kr, t), Y(Gr, e), Y(xt, ol), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Mo(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Mo(t, e));
  }
  K(xt), Y(xt, t);
}
function er() {
  K(xt), K(Gr), K(Kr);
}
function ad(e) {
  pn(Kr.current);
  var t = pn(xt.current),
    n = Mo(t, e.type);
  t !== n && (Y(Gr, e), Y(xt, n));
}
function Js(e) {
  Gr.current === e && (K(xt), K(Gr));
}
var te = ln(0);
function li(e) {
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
var oo = [];
function Zs() {
  for (var e = 0; e < oo.length; e++)
    oo[e]._workInProgressVersionPrimary = null;
  oo.length = 0;
}
var $l = Lt.ReactCurrentDispatcher,
  so = Lt.ReactCurrentBatchConfig,
  Sn = 0,
  ne = null,
  de = null,
  pe = null,
  ii = !1,
  Mr = !1,
  Xr = 0,
  Om = 0;
function ve() {
  throw Error(j(321));
}
function ea(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!ft(e[n], t[n])) return !1;
  return !0;
}
function ta(e, t, n, r, l, i) {
  if (
    ((Sn = i),
    (ne = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    ($l.current = e === null || e.memoizedState === null ? Lm : $m),
    (e = n(r, l)),
    Mr)
  ) {
    i = 0;
    do {
      if (((Mr = !1), (Xr = 0), 25 <= i)) throw Error(j(301));
      (i += 1),
        (pe = de = null),
        (t.updateQueue = null),
        ($l.current = Fm),
        (e = n(r, l));
    } while (Mr);
  }
  if (
    (($l.current = oi),
    (t = de !== null && de.next !== null),
    (Sn = 0),
    (pe = de = ne = null),
    (ii = !1),
    t)
  )
    throw Error(j(300));
  return e;
}
function na() {
  var e = Xr !== 0;
  return (Xr = 0), e;
}
function gt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return pe === null ? (ne.memoizedState = pe = e) : (pe = pe.next = e), pe;
}
function tt() {
  if (de === null) {
    var e = ne.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = de.next;
  var t = pe === null ? ne.memoizedState : pe.next;
  if (t !== null) (pe = t), (de = e);
  else {
    if (e === null) throw Error(j(310));
    (de = e),
      (e = {
        memoizedState: de.memoizedState,
        baseState: de.baseState,
        baseQueue: de.baseQueue,
        queue: de.queue,
        next: null,
      }),
      pe === null ? (ne.memoizedState = pe = e) : (pe = pe.next = e);
  }
  return pe;
}
function Jr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ao(e) {
  var t = tt(),
    n = t.queue;
  if (n === null) throw Error(j(311));
  n.lastRenderedReducer = e;
  var r = de,
    l = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = i.next), (i.next = o);
    }
    (r.baseQueue = l = i), (n.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var s = (o = null),
      u = null,
      c = i;
    do {
      var f = c.lane;
      if ((Sn & f) === f)
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
        var p = {
          lane: f,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        u === null ? ((s = u = p), (o = r)) : (u = u.next = p),
          (ne.lanes |= f),
          (kn |= f);
      }
      c = c.next;
    } while (c !== null && c !== i);
    u === null ? (o = r) : (u.next = s),
      ft(r, t.memoizedState) || (Le = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (ne.lanes |= i), (kn |= i), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function uo(e) {
  var t = tt(),
    n = t.queue;
  if (n === null) throw Error(j(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== l);
    ft(i, t.memoizedState) || (Le = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function ud() {}
function cd(e, t) {
  var n = ne,
    r = tt(),
    l = t(),
    i = !ft(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (Le = !0)),
    (r = r.queue),
    ra(pd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (pe !== null && pe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Zr(9, fd.bind(null, n, r, l, t), void 0, null),
      me === null)
    )
      throw Error(j(349));
    Sn & 30 || dd(n, t, l);
  }
  return l;
}
function dd(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ne.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ne.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function fd(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), md(t) && hd(e);
}
function pd(e, t, n) {
  return n(function () {
    md(t) && hd(e);
  });
}
function md(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ft(e, n);
  } catch {
    return !0;
  }
}
function hd(e) {
  var t = _t(e, 1);
  t !== null && dt(t, e, 1, -1);
}
function fu(e) {
  var t = gt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Jr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Mm.bind(null, ne, e)),
    [t.memoizedState, e]
  );
}
function Zr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ne.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ne.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function gd() {
  return tt().memoizedState;
}
function Fl(e, t, n, r) {
  var l = gt();
  (ne.flags |= e),
    (l.memoizedState = Zr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ci(e, t, n, r) {
  var l = tt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (de !== null) {
    var o = de.memoizedState;
    if (((i = o.destroy), r !== null && ea(r, o.deps))) {
      l.memoizedState = Zr(t, n, i, r);
      return;
    }
  }
  (ne.flags |= e), (l.memoizedState = Zr(1 | t, n, i, r));
}
function pu(e, t) {
  return Fl(8390656, 8, e, t);
}
function ra(e, t) {
  return Ci(2048, 8, e, t);
}
function yd(e, t) {
  return Ci(4, 2, e, t);
}
function vd(e, t) {
  return Ci(4, 4, e, t);
}
function xd(e, t) {
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
function wd(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ci(4, 4, xd.bind(null, t, e), n)
  );
}
function la() {}
function Sd(e, t) {
  var n = tt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ea(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function kd(e, t) {
  var n = tt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ea(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Nd(e, t, n) {
  return Sn & 21
    ? (ft(n, t) || ((n = Pc()), (ne.lanes |= n), (kn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Le = !0)), (e.memoizedState = n));
}
function Dm(e, t) {
  var n = B;
  (B = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = so.transition;
  so.transition = {};
  try {
    e(!1), t();
  } finally {
    (B = n), (so.transition = r);
  }
}
function Ed() {
  return tt().memoizedState;
}
function _m(e, t, n) {
  var r = Zt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    jd(e))
  )
    Cd(t, n);
  else if (((n = od(e, t, n, r)), n !== null)) {
    var l = Pe();
    dt(n, e, r, l), bd(n, t, r);
  }
}
function Mm(e, t, n) {
  var r = Zt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (jd(e)) Cd(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          s = i(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = s), ft(s, o))) {
          var u = t.interleaved;
          u === null
            ? ((l.next = l), Gs(t))
            : ((l.next = u.next), (u.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = od(e, t, l, r)),
      n !== null && ((l = Pe()), dt(n, e, r, l), bd(n, t, r));
  }
}
function jd(e) {
  var t = e.alternate;
  return e === ne || (t !== null && t === ne);
}
function Cd(e, t) {
  Mr = ii = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function bd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), $s(e, n);
  }
}
var oi = {
    readContext: et,
    useCallback: ve,
    useContext: ve,
    useEffect: ve,
    useImperativeHandle: ve,
    useInsertionEffect: ve,
    useLayoutEffect: ve,
    useMemo: ve,
    useReducer: ve,
    useRef: ve,
    useState: ve,
    useDebugValue: ve,
    useDeferredValue: ve,
    useTransition: ve,
    useMutableSource: ve,
    useSyncExternalStore: ve,
    useId: ve,
    unstable_isNewReconciler: !1,
  },
  Lm = {
    readContext: et,
    useCallback: function (e, t) {
      return (gt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: et,
    useEffect: pu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Fl(4194308, 4, xd.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Fl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Fl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = gt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = gt();
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
        (e = e.dispatch = _m.bind(null, ne, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = gt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: fu,
    useDebugValue: la,
    useDeferredValue: function (e) {
      return (gt().memoizedState = e);
    },
    useTransition: function () {
      var e = fu(!1),
        t = e[0];
      return (e = Dm.bind(null, e[1])), (gt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ne,
        l = gt();
      if (J) {
        if (n === void 0) throw Error(j(407));
        n = n();
      } else {
        if (((n = t()), me === null)) throw Error(j(349));
        Sn & 30 || dd(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        pu(pd.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Zr(9, fd.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = gt(),
        t = me.identifierPrefix;
      if (J) {
        var n = Ct,
          r = jt;
        (n = (r & ~(1 << (32 - ct(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Xr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Om++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  $m = {
    readContext: et,
    useCallback: Sd,
    useContext: et,
    useEffect: ra,
    useImperativeHandle: wd,
    useInsertionEffect: yd,
    useLayoutEffect: vd,
    useMemo: kd,
    useReducer: ao,
    useRef: gd,
    useState: function () {
      return ao(Jr);
    },
    useDebugValue: la,
    useDeferredValue: function (e) {
      var t = tt();
      return Nd(t, de.memoizedState, e);
    },
    useTransition: function () {
      var e = ao(Jr)[0],
        t = tt().memoizedState;
      return [e, t];
    },
    useMutableSource: ud,
    useSyncExternalStore: cd,
    useId: Ed,
    unstable_isNewReconciler: !1,
  },
  Fm = {
    readContext: et,
    useCallback: Sd,
    useContext: et,
    useEffect: ra,
    useImperativeHandle: wd,
    useInsertionEffect: yd,
    useLayoutEffect: vd,
    useMemo: kd,
    useReducer: uo,
    useRef: gd,
    useState: function () {
      return uo(Jr);
    },
    useDebugValue: la,
    useDeferredValue: function (e) {
      var t = tt();
      return de === null ? (t.memoizedState = e) : Nd(t, de.memoizedState, e);
    },
    useTransition: function () {
      var e = uo(Jr)[0],
        t = tt().memoizedState;
      return [e, t];
    },
    useMutableSource: ud,
    useSyncExternalStore: cd,
    useId: Ed,
    unstable_isNewReconciler: !1,
  };
function ot(e, t) {
  if (e && e.defaultProps) {
    (t = re({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function es(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : re({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var bi = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Cn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Pe(),
      l = Zt(e),
      i = bt(r, l);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = Xt(e, i, l)),
      t !== null && (dt(t, e, l, r), Ll(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Pe(),
      l = Zt(e),
      i = bt(r, l);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Xt(e, i, l)),
      t !== null && (dt(t, e, l, r), Ll(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Pe(),
      r = Zt(e),
      l = bt(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = Xt(e, l, r)),
      t !== null && (dt(t, e, r, n), Ll(t, e, r));
  },
};
function mu(e, t, n, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Br(n, r) || !Br(l, i)
      : !0
  );
}
function Pd(e, t, n) {
  var r = !1,
    l = nn,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = et(i))
      : ((l = Fe(t) ? xn : ke.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Xn(e, l) : nn)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = bi),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function hu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && bi.enqueueReplaceState(t, t.state, null);
}
function ts(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), Ks(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (l.context = et(i))
    : ((i = Fe(t) ? xn : ke.current), (l.context = Xn(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (es(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && bi.enqueueReplaceState(l, l.state, null),
      ri(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function tr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += cp(r)), (r = r.return);
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
function co(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ns(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Rm = typeof WeakMap == "function" ? WeakMap : Map;
function Td(e, t, n) {
  (n = bt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      ai || ((ai = !0), (fs = r)), ns(e, t);
    }),
    n
  );
}
function Od(e, t, n) {
  (n = bt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        ns(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        ns(e, t),
          typeof r != "function" &&
            (Jt === null ? (Jt = new Set([this])) : Jt.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function gu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Rm();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = Xm.bind(null, e, t, n)), t.then(e, e));
}
function yu(e) {
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
function vu(e, t, n, r, l) {
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
              : ((t = bt(-1, 1)), (t.tag = 2), Xt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var zm = Lt.ReactCurrentOwner,
  Le = !1;
function be(e, t, n, r) {
  t.child = e === null ? id(t, null, n, r) : Zn(t, e.child, n, r);
}
function xu(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    Yn(t, l),
    (r = ta(e, t, n, r, i, l)),
    (n = na()),
    e !== null && !Le
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Mt(e, t, l))
      : (J && n && Ws(t), (t.flags |= 1), be(e, t, r, l), t.child)
  );
}
function wu(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !fa(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Dd(e, t, i, r, l))
      : ((e = Al(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Br), n(o, r) && e.ref === t.ref)
    )
      return Mt(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = en(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Dd(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Br(i, r) && e.ref === t.ref)
      if (((Le = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (Le = !0);
      else return (t.lanes = e.lanes), Mt(e, t, l);
  }
  return rs(e, t, n, r, l);
}
function _d(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Y(Wn, Ue),
        (Ue |= n);
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
          Y(Wn, Ue),
          (Ue |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        Y(Wn, Ue),
        (Ue |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      Y(Wn, Ue),
      (Ue |= r);
  return be(e, t, l, n), t.child;
}
function Md(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function rs(e, t, n, r, l) {
  var i = Fe(n) ? xn : ke.current;
  return (
    (i = Xn(t, i)),
    Yn(t, l),
    (n = ta(e, t, n, r, i, l)),
    (r = na()),
    e !== null && !Le
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Mt(e, t, l))
      : (J && r && Ws(t), (t.flags |= 1), be(e, t, n, l), t.child)
  );
}
function Su(e, t, n, r, l) {
  if (Fe(n)) {
    var i = !0;
    Jl(t);
  } else i = !1;
  if ((Yn(t, l), t.stateNode === null))
    Rl(e, t), Pd(t, n, r), ts(t, n, r, l), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      s = t.memoizedProps;
    o.props = s;
    var u = o.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = et(c))
      : ((c = Fe(n) ? xn : ke.current), (c = Xn(t, c)));
    var f = n.getDerivedStateFromProps,
      p =
        typeof f == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    p ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((s !== r || u !== c) && hu(t, o, r, c)),
      (At = !1);
    var y = t.memoizedState;
    (o.state = y),
      ri(t, r, o, l),
      (u = t.memoizedState),
      s !== r || y !== u || $e.current || At
        ? (typeof f == "function" && (es(t, n, f, r), (u = t.memoizedState)),
          (s = At || mu(t, n, s, r, y, u, c))
            ? (p ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (o.props = r),
          (o.state = u),
          (o.context = c),
          (r = s))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      sd(e, t),
      (s = t.memoizedProps),
      (c = t.type === t.elementType ? s : ot(t.type, s)),
      (o.props = c),
      (p = t.pendingProps),
      (y = o.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = et(u))
        : ((u = Fe(n) ? xn : ke.current), (u = Xn(t, u)));
    var x = n.getDerivedStateFromProps;
    (f =
      typeof x == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((s !== p || y !== u) && hu(t, o, r, u)),
      (At = !1),
      (y = t.memoizedState),
      (o.state = y),
      ri(t, r, o, l);
    var w = t.memoizedState;
    s !== p || y !== w || $e.current || At
      ? (typeof x == "function" && (es(t, n, x, r), (w = t.memoizedState)),
        (c = At || mu(t, n, c, r, y, w, u) || !1)
          ? (f ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, w, u),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, w, u)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (s === e.memoizedProps && y === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && y === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (o.props = r),
        (o.state = w),
        (o.context = u),
        (r = c))
      : (typeof o.componentDidUpdate != "function" ||
          (s === e.memoizedProps && y === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && y === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return ls(e, t, n, r, i, l);
}
function ls(e, t, n, r, l, i) {
  Md(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && ou(t, n, !1), Mt(e, t, i);
  (r = t.stateNode), (zm.current = t);
  var s =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = Zn(t, e.child, null, i)), (t.child = Zn(t, null, s, i)))
      : be(e, t, s, i),
    (t.memoizedState = r.state),
    l && ou(t, n, !0),
    t.child
  );
}
function Ld(e) {
  var t = e.stateNode;
  t.pendingContext
    ? iu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && iu(e, t.context, !1),
    Xs(e, t.containerInfo);
}
function ku(e, t, n, r, l) {
  return Jn(), Bs(l), (t.flags |= 256), be(e, t, n, r), t.child;
}
var is = { dehydrated: null, treeContext: null, retryLane: 0 };
function os(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function $d(e, t, n) {
  var r = t.pendingProps,
    l = te.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    s;
  if (
    ((s = o) ||
      (s = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    s
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    Y(te, l & 1),
    e === null)
  )
    return (
      Jo(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = Oi(o, r, 0, null)),
              (e = yn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = os(n)),
              (t.memoizedState = is),
              e)
            : ia(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((s = l.dehydrated), s !== null)))
    return Im(e, t, o, r, s, l, n);
  if (i) {
    (i = r.fallback), (o = t.mode), (l = e.child), (s = l.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = en(l, u)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      s !== null ? (i = en(s, i)) : ((i = yn(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? os(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = is),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = en(i, { mode: "visible", children: r.children })),
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
function ia(e, t) {
  return (
    (t = Oi({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Nl(e, t, n, r) {
  return (
    r !== null && Bs(r),
    Zn(t, e.child, null, n),
    (e = ia(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Im(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = co(Error(j(422)))), Nl(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (l = t.mode),
        (r = Oi({ mode: "visible", children: r.children }, l, 0, null)),
        (i = yn(i, l, o, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && Zn(t, e.child, null, o),
        (t.child.memoizedState = os(o)),
        (t.memoizedState = is),
        i);
  if (!(t.mode & 1)) return Nl(e, t, o, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (i = Error(j(419))), (r = co(i, r, void 0)), Nl(e, t, o, r);
  }
  if (((s = (o & e.childLanes) !== 0), Le || s)) {
    if (((r = me), r !== null)) {
      switch (o & -o) {
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
      (l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), _t(e, l), dt(r, e, l, -1));
    }
    return da(), (r = co(Error(j(421)))), Nl(e, t, o, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Jm.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (We = Kt(l.nextSibling)),
      (qe = t),
      (J = !0),
      (at = null),
      e !== null &&
        ((Ke[Xe++] = jt),
        (Ke[Xe++] = Ct),
        (Ke[Xe++] = wn),
        (jt = e.id),
        (Ct = e.overflow),
        (wn = t)),
      (t = ia(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Nu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Zo(e.return, t, n);
}
function fo(e, t, n, r, l) {
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
function Fd(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((be(e, t, r.children, n), (r = te.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Nu(e, n, t);
        else if (e.tag === 19) Nu(e, n, t);
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
  if ((Y(te, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && li(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          fo(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && li(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        fo(t, !0, n, null, i);
        break;
      case "together":
        fo(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Rl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Mt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (kn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(j(153));
  if (t.child !== null) {
    for (
      e = t.child, n = en(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = en(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Am(e, t, n) {
  switch (t.tag) {
    case 3:
      Ld(t), Jn();
      break;
    case 5:
      ad(t);
      break;
    case 1:
      Fe(t.type) && Jl(t);
      break;
    case 4:
      Xs(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      Y(ti, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Y(te, te.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? $d(e, t, n)
          : (Y(te, te.current & 1),
            (e = Mt(e, t, n)),
            e !== null ? e.sibling : null);
      Y(te, te.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Fd(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        Y(te, te.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), _d(e, t, n);
  }
  return Mt(e, t, n);
}
var Rd, ss, zd, Id;
Rd = function (e, t) {
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
ss = function () {};
zd = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), pn(xt.current);
    var i = null;
    switch (n) {
      case "input":
        (l = To(e, l)), (r = To(e, r)), (i = []);
        break;
      case "select":
        (l = re({}, l, { value: void 0 })),
          (r = re({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (l = _o(e, l)), (r = _o(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Kl);
    }
    Lo(n, r);
    var o;
    n = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var s = l[c];
          for (o in s) s.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (zr.hasOwnProperty(c)
              ? i || (i = [])
              : (i = i || []).push(c, null));
    for (c in r) {
      var u = r[c];
      if (
        ((s = l != null ? l[c] : void 0),
        r.hasOwnProperty(c) && u !== s && (u != null || s != null))
      )
        if (c === "style")
          if (s) {
            for (o in s)
              !s.hasOwnProperty(o) ||
                (u && u.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in u)
              u.hasOwnProperty(o) &&
                s[o] !== u[o] &&
                (n || (n = {}), (n[o] = u[o]));
          } else n || (i || (i = []), i.push(c, n)), (n = u);
        else
          c === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (s = s ? s.__html : void 0),
              u != null && s !== u && (i = i || []).push(c, u))
            : c === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (i = i || []).push(c, "" + u)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (zr.hasOwnProperty(c)
                ? (u != null && c === "onScroll" && G("scroll", e),
                  i || s === u || (i = []))
                : (i = i || []).push(c, u));
    }
    n && (i = i || []).push("style", n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Id = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function yr(e, t) {
  if (!J)
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
function xe(e) {
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
function Um(e, t, n) {
  var r = t.pendingProps;
  switch ((qs(t), t.tag)) {
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
      return xe(t), null;
    case 1:
      return Fe(t.type) && Xl(), xe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        er(),
        K($e),
        K(ke),
        Zs(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Sl(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), at !== null && (hs(at), (at = null)))),
        ss(e, t),
        xe(t),
        null
      );
    case 5:
      Js(t);
      var l = pn(Kr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        zd(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(j(166));
          return xe(t), null;
        }
        if (((e = pn(xt.current)), Sl(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[yt] = t), (r[Yr] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              G("cancel", r), G("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              G("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Cr.length; l++) G(Cr[l], r);
              break;
            case "source":
              G("error", r);
              break;
            case "img":
            case "image":
            case "link":
              G("error", r), G("load", r);
              break;
            case "details":
              G("toggle", r);
              break;
            case "input":
              _a(r, i), G("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                G("invalid", r);
              break;
            case "textarea":
              La(r, i), G("invalid", r);
          }
          Lo(n, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var s = i[o];
              o === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (i.suppressHydrationWarning !== !0 &&
                      wl(r.textContent, s, e),
                    (l = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (i.suppressHydrationWarning !== !0 &&
                      wl(r.textContent, s, e),
                    (l = ["children", "" + s]))
                : zr.hasOwnProperty(o) &&
                  s != null &&
                  o === "onScroll" &&
                  G("scroll", r);
            }
          switch (n) {
            case "input":
              fl(r), Ma(r, i, !0);
              break;
            case "textarea":
              fl(r), $a(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Kl);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = pc(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[yt] = t),
            (e[Yr] = r),
            Rd(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = $o(n, r)), n)) {
              case "dialog":
                G("cancel", e), G("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                G("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Cr.length; l++) G(Cr[l], e);
                l = r;
                break;
              case "source":
                G("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                G("error", e), G("load", e), (l = r);
                break;
              case "details":
                G("toggle", e), (l = r);
                break;
              case "input":
                _a(e, r), (l = To(e, r)), G("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = re({}, r, { value: void 0 })),
                  G("invalid", e);
                break;
              case "textarea":
                La(e, r), (l = _o(e, r)), G("invalid", e);
                break;
              default:
                l = r;
            }
            Lo(n, l), (s = l);
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var u = s[i];
                i === "style"
                  ? gc(e, u)
                  : i === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && mc(e, u))
                  : i === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && Ir(e, u)
                    : typeof u == "number" && Ir(e, "" + u)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (zr.hasOwnProperty(i)
                      ? u != null && i === "onScroll" && G("scroll", e)
                      : u != null && Ts(e, i, u, o));
              }
            switch (n) {
              case "input":
                fl(e), Ma(e, r, !1);
                break;
              case "textarea":
                fl(e), $a(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + tn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? qn(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      qn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Kl);
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
      return xe(t), null;
    case 6:
      if (e && t.stateNode != null) Id(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(j(166));
        if (((n = pn(Kr.current)), pn(xt.current), Sl(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[yt] = t),
            (i = r.nodeValue !== n) && ((e = qe), e !== null))
          )
            switch (e.tag) {
              case 3:
                wl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  wl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[yt] = t),
            (t.stateNode = r);
      }
      return xe(t), null;
    case 13:
      if (
        (K(te),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (J && We !== null && t.mode & 1 && !(t.flags & 128))
          rd(), Jn(), (t.flags |= 98560), (i = !1);
        else if (((i = Sl(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(j(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(j(317));
            i[yt] = t;
          } else
            Jn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          xe(t), (i = !1);
        } else at !== null && (hs(at), (at = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || te.current & 1 ? fe === 0 && (fe = 3) : da())),
          t.updateQueue !== null && (t.flags |= 4),
          xe(t),
          null);
    case 4:
      return (
        er(), ss(e, t), e === null && Qr(t.stateNode.containerInfo), xe(t), null
      );
    case 10:
      return Ys(t.type._context), xe(t), null;
    case 17:
      return Fe(t.type) && Xl(), xe(t), null;
    case 19:
      if ((K(te), (i = t.memoizedState), i === null)) return xe(t), null;
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) yr(i, !1);
        else {
          if (fe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = li(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    yr(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return Y(te, (te.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            se() > nr &&
            ((t.flags |= 128), (r = !0), yr(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = li(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              yr(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !J)
            )
              return xe(t), null;
          } else
            2 * se() - i.renderingStartTime > nr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), yr(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = se()),
          (t.sibling = null),
          (n = te.current),
          Y(te, r ? (n & 1) | 2 : n & 1),
          t)
        : (xe(t), null);
    case 22:
    case 23:
      return (
        ca(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ue & 1073741824 && (xe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : xe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(j(156, t.tag));
}
function Hm(e, t) {
  switch ((qs(t), t.tag)) {
    case 1:
      return (
        Fe(t.type) && Xl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        er(),
        K($e),
        K(ke),
        Zs(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Js(t), null;
    case 13:
      if ((K(te), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(j(340));
        Jn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return K(te), null;
    case 4:
      return er(), null;
    case 10:
      return Ys(t.type._context), null;
    case 22:
    case 23:
      return ca(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var El = !1,
  we = !1,
  Wm = typeof WeakSet == "function" ? WeakSet : Set,
  _ = null;
function Hn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ie(e, t, r);
      }
    else n.current = null;
}
function as(e, t, n) {
  try {
    n();
  } catch (r) {
    ie(e, t, r);
  }
}
var Eu = !1;
function qm(e, t) {
  if (((Bo = Vl), (e = qc()), Hs(e))) {
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
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            s = -1,
            u = -1,
            c = 0,
            f = 0,
            p = e,
            y = null;
          t: for (;;) {
            for (
              var x;
              p !== n || (l !== 0 && p.nodeType !== 3) || (s = o + l),
                p !== i || (r !== 0 && p.nodeType !== 3) || (u = o + r),
                p.nodeType === 3 && (o += p.nodeValue.length),
                (x = p.firstChild) !== null;

            )
              (y = p), (p = x);
            for (;;) {
              if (p === e) break t;
              if (
                (y === n && ++c === l && (s = o),
                y === i && ++f === r && (u = o),
                (x = p.nextSibling) !== null)
              )
                break;
              (p = y), (y = p.parentNode);
            }
            p = x;
          }
          n = s === -1 || u === -1 ? null : { start: s, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Qo = { focusedElem: e, selectionRange: n }, Vl = !1, _ = t; _ !== null; )
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
                  var S = w.memoizedProps,
                    C = w.memoizedState,
                    m = t.stateNode,
                    d = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? S : ot(t.type, S),
                      C
                    );
                  m.__reactInternalSnapshotBeforeUpdate = d;
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
                throw Error(j(163));
            }
        } catch (v) {
          ie(t, t.return, v);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (_ = e);
          break;
        }
        _ = t.return;
      }
  return (w = Eu), (Eu = !1), w;
}
function Lr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && as(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Pi(e, t) {
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
function us(e) {
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
function Ad(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Ad(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[yt], delete t[Yr], delete t[Go], delete t[Cm], delete t[bm])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Ud(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ju(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ud(e.return)) return null;
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
function cs(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = Kl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (cs(e, t, n), e = e.sibling; e !== null; ) cs(e, t, n), (e = e.sibling);
}
function ds(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ds(e, t, n), e = e.sibling; e !== null; ) ds(e, t, n), (e = e.sibling);
}
var he = null,
  st = !1;
function Ft(e, t, n) {
  for (n = n.child; n !== null; ) Hd(e, t, n), (n = n.sibling);
}
function Hd(e, t, n) {
  if (vt && typeof vt.onCommitFiberUnmount == "function")
    try {
      vt.onCommitFiberUnmount(wi, n);
    } catch {}
  switch (n.tag) {
    case 5:
      we || Hn(n, t);
    case 6:
      var r = he,
        l = st;
      (he = null),
        Ft(e, t, n),
        (he = r),
        (st = l),
        he !== null &&
          (st
            ? ((e = he),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : he.removeChild(n.stateNode));
      break;
    case 18:
      he !== null &&
        (st
          ? ((e = he),
            (n = n.stateNode),
            e.nodeType === 8
              ? lo(e.parentNode, n)
              : e.nodeType === 1 && lo(e, n),
            Wr(e))
          : lo(he, n.stateNode));
      break;
    case 4:
      (r = he),
        (l = st),
        (he = n.stateNode.containerInfo),
        (st = !0),
        Ft(e, t, n),
        (he = r),
        (st = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !we &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && as(n, t, o),
            (l = l.next);
        } while (l !== r);
      }
      Ft(e, t, n);
      break;
    case 1:
      if (
        !we &&
        (Hn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          ie(n, t, s);
        }
      Ft(e, t, n);
      break;
    case 21:
      Ft(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((we = (r = we) || n.memoizedState !== null), Ft(e, t, n), (we = r))
        : Ft(e, t, n);
      break;
    default:
      Ft(e, t, n);
  }
}
function Cu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Wm()),
      t.forEach(function (r) {
        var l = Zm.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function it(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          o = t,
          s = o;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (he = s.stateNode), (st = !1);
              break e;
            case 3:
              (he = s.stateNode.containerInfo), (st = !0);
              break e;
            case 4:
              (he = s.stateNode.containerInfo), (st = !0);
              break e;
          }
          s = s.return;
        }
        if (he === null) throw Error(j(160));
        Hd(i, o, l), (he = null), (st = !1);
        var u = l.alternate;
        u !== null && (u.return = null), (l.return = null);
      } catch (c) {
        ie(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Wd(t, e), (t = t.sibling);
}
function Wd(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((it(t, e), ht(e), r & 4)) {
        try {
          Lr(3, e, e.return), Pi(3, e);
        } catch (S) {
          ie(e, e.return, S);
        }
        try {
          Lr(5, e, e.return);
        } catch (S) {
          ie(e, e.return, S);
        }
      }
      break;
    case 1:
      it(t, e), ht(e), r & 512 && n !== null && Hn(n, n.return);
      break;
    case 5:
      if (
        (it(t, e),
        ht(e),
        r & 512 && n !== null && Hn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Ir(l, "");
        } catch (S) {
          ie(e, e.return, S);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          s = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            s === "input" && i.type === "radio" && i.name != null && dc(l, i),
              $o(s, o);
            var c = $o(s, i);
            for (o = 0; o < u.length; o += 2) {
              var f = u[o],
                p = u[o + 1];
              f === "style"
                ? gc(l, p)
                : f === "dangerouslySetInnerHTML"
                ? mc(l, p)
                : f === "children"
                ? Ir(l, p)
                : Ts(l, f, p, c);
            }
            switch (s) {
              case "input":
                Oo(l, i);
                break;
              case "textarea":
                fc(l, i);
                break;
              case "select":
                var y = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var x = i.value;
                x != null
                  ? qn(l, !!i.multiple, x, !1)
                  : y !== !!i.multiple &&
                    (i.defaultValue != null
                      ? qn(l, !!i.multiple, i.defaultValue, !0)
                      : qn(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[Yr] = i;
          } catch (S) {
            ie(e, e.return, S);
          }
      }
      break;
    case 6:
      if ((it(t, e), ht(e), r & 4)) {
        if (e.stateNode === null) throw Error(j(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (S) {
          ie(e, e.return, S);
        }
      }
      break;
    case 3:
      if (
        (it(t, e), ht(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Wr(t.containerInfo);
        } catch (S) {
          ie(e, e.return, S);
        }
      break;
    case 4:
      it(t, e), ht(e);
      break;
    case 13:
      it(t, e),
        ht(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (aa = se())),
        r & 4 && Cu(e);
      break;
    case 22:
      if (
        ((f = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((we = (c = we) || f), it(t, e), (we = c)) : it(t, e),
        ht(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !f && e.mode & 1)
        )
          for (_ = e, f = e.child; f !== null; ) {
            for (p = _ = f; _ !== null; ) {
              switch (((y = _), (x = y.child), y.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Lr(4, y, y.return);
                  break;
                case 1:
                  Hn(y, y.return);
                  var w = y.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = y), (n = y.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (S) {
                      ie(r, n, S);
                    }
                  }
                  break;
                case 5:
                  Hn(y, y.return);
                  break;
                case 22:
                  if (y.memoizedState !== null) {
                    Pu(p);
                    continue;
                  }
              }
              x !== null ? ((x.return = y), (_ = x)) : Pu(p);
            }
            f = f.sibling;
          }
        e: for (f = null, p = e; ; ) {
          if (p.tag === 5) {
            if (f === null) {
              f = p;
              try {
                (l = p.stateNode),
                  c
                    ? ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((s = p.stateNode),
                      (u = p.memoizedProps.style),
                      (o =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (s.style.display = hc("display", o)));
              } catch (S) {
                ie(e, e.return, S);
              }
            }
          } else if (p.tag === 6) {
            if (f === null)
              try {
                p.stateNode.nodeValue = c ? "" : p.memoizedProps;
              } catch (S) {
                ie(e, e.return, S);
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
            f === p && (f = null), (p = p.return);
          }
          f === p && (f = null), (p.sibling.return = p.return), (p = p.sibling);
        }
      }
      break;
    case 19:
      it(t, e), ht(e), r & 4 && Cu(e);
      break;
    case 21:
      break;
    default:
      it(t, e), ht(e);
  }
}
function ht(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Ud(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(j(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Ir(l, ""), (r.flags &= -33));
          var i = ju(e);
          ds(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            s = ju(e);
          cs(e, s, o);
          break;
        default:
          throw Error(j(161));
      }
    } catch (u) {
      ie(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Bm(e, t, n) {
  (_ = e), qd(e);
}
function qd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; _ !== null; ) {
    var l = _,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || El;
      if (!o) {
        var s = l.alternate,
          u = (s !== null && s.memoizedState !== null) || we;
        s = El;
        var c = we;
        if (((El = o), (we = u) && !c))
          for (_ = l; _ !== null; )
            (o = _),
              (u = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Tu(l)
                : u !== null
                ? ((u.return = o), (_ = u))
                : Tu(l);
        for (; i !== null; ) (_ = i), qd(i), (i = i.sibling);
        (_ = l), (El = s), (we = c);
      }
      bu(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (_ = i)) : bu(e);
  }
}
function bu(e) {
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
              we || Pi(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !we)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : ot(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && du(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                du(t, o, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
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
                  var f = c.memoizedState;
                  if (f !== null) {
                    var p = f.dehydrated;
                    p !== null && Wr(p);
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
              throw Error(j(163));
          }
        we || (t.flags & 512 && us(t));
      } catch (y) {
        ie(t, t.return, y);
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
function Pu(e) {
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
function Tu(e) {
  for (; _ !== null; ) {
    var t = _;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Pi(4, t);
          } catch (u) {
            ie(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              ie(t, l, u);
            }
          }
          var i = t.return;
          try {
            us(t);
          } catch (u) {
            ie(t, i, u);
          }
          break;
        case 5:
          var o = t.return;
          try {
            us(t);
          } catch (u) {
            ie(t, o, u);
          }
      }
    } catch (u) {
      ie(t, t.return, u);
    }
    if (t === e) {
      _ = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (_ = s);
      break;
    }
    _ = t.return;
  }
}
var Qm = Math.ceil,
  si = Lt.ReactCurrentDispatcher,
  oa = Lt.ReactCurrentOwner,
  Ze = Lt.ReactCurrentBatchConfig,
  U = 0,
  me = null,
  ae = null,
  ge = 0,
  Ue = 0,
  Wn = ln(0),
  fe = 0,
  el = null,
  kn = 0,
  Ti = 0,
  sa = 0,
  $r = null,
  Me = null,
  aa = 0,
  nr = 1 / 0,
  St = null,
  ai = !1,
  fs = null,
  Jt = null,
  jl = !1,
  Bt = null,
  ui = 0,
  Fr = 0,
  ps = null,
  zl = -1,
  Il = 0;
function Pe() {
  return U & 6 ? se() : zl !== -1 ? zl : (zl = se());
}
function Zt(e) {
  return e.mode & 1
    ? U & 2 && ge !== 0
      ? ge & -ge
      : Tm.transition !== null
      ? (Il === 0 && (Il = Pc()), Il)
      : ((e = B),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : $c(e.type))),
        e)
    : 1;
}
function dt(e, t, n, r) {
  if (50 < Fr) throw ((Fr = 0), (ps = null), Error(j(185)));
  rl(e, n, r),
    (!(U & 2) || e !== me) &&
      (e === me && (!(U & 2) && (Ti |= n), fe === 4 && Ht(e, ge)),
      Re(e, r),
      n === 1 && U === 0 && !(t.mode & 1) && ((nr = se() + 500), ji && on()));
}
function Re(e, t) {
  var n = e.callbackNode;
  Tp(e, t);
  var r = Ql(e, e === me ? ge : 0);
  if (r === 0)
    n !== null && za(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && za(n), t === 1))
      e.tag === 0 ? Pm(Ou.bind(null, e)) : ed(Ou.bind(null, e)),
        Em(function () {
          !(U & 6) && on();
        }),
        (n = null);
    else {
      switch (Tc(r)) {
        case 1:
          n = Ls;
          break;
        case 4:
          n = Cc;
          break;
        case 16:
          n = Bl;
          break;
        case 536870912:
          n = bc;
          break;
        default:
          n = Bl;
      }
      n = Jd(n, Bd.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Bd(e, t) {
  if (((zl = -1), (Il = 0), U & 6)) throw Error(j(327));
  var n = e.callbackNode;
  if (Gn() && e.callbackNode !== n) return null;
  var r = Ql(e, e === me ? ge : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ci(e, r);
  else {
    t = r;
    var l = U;
    U |= 2;
    var i = Vd();
    (me !== e || ge !== t) && ((St = null), (nr = se() + 500), gn(e, t));
    do
      try {
        Gm();
        break;
      } catch (s) {
        Qd(e, s);
      }
    while (!0);
    Vs(),
      (si.current = i),
      (U = l),
      ae !== null ? (t = 0) : ((me = null), (ge = 0), (t = fe));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Ao(e)), l !== 0 && ((r = l), (t = ms(e, l)))), t === 1)
    )
      throw ((n = el), gn(e, 0), Ht(e, r), Re(e, se()), n);
    if (t === 6) Ht(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Vm(l) &&
          ((t = ci(e, r)),
          t === 2 && ((i = Ao(e)), i !== 0 && ((r = i), (t = ms(e, i)))),
          t === 1))
      )
        throw ((n = el), gn(e, 0), Ht(e, r), Re(e, se()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(j(345));
        case 2:
          an(e, Me, St);
          break;
        case 3:
          if (
            (Ht(e, r), (r & 130023424) === r && ((t = aa + 500 - se()), 10 < t))
          ) {
            if (Ql(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              Pe(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Yo(an.bind(null, e, Me, St), t);
            break;
          }
          an(e, Me, St);
          break;
        case 4:
          if ((Ht(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - ct(r);
            (i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
          }
          if (
            ((r = l),
            (r = se() - r),
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
                : 1960 * Qm(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Yo(an.bind(null, e, Me, St), r);
            break;
          }
          an(e, Me, St);
          break;
        case 5:
          an(e, Me, St);
          break;
        default:
          throw Error(j(329));
      }
    }
  }
  return Re(e, se()), e.callbackNode === n ? Bd.bind(null, e) : null;
}
function ms(e, t) {
  var n = $r;
  return (
    e.current.memoizedState.isDehydrated && (gn(e, t).flags |= 256),
    (e = ci(e, t)),
    e !== 2 && ((t = Me), (Me = n), t !== null && hs(t)),
    e
  );
}
function hs(e) {
  Me === null ? (Me = e) : Me.push.apply(Me, e);
}
function Vm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!ft(i(), l)) return !1;
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
function Ht(e, t) {
  for (
    t &= ~sa,
      t &= ~Ti,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - ct(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Ou(e) {
  if (U & 6) throw Error(j(327));
  Gn();
  var t = Ql(e, 0);
  if (!(t & 1)) return Re(e, se()), null;
  var n = ci(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ao(e);
    r !== 0 && ((t = r), (n = ms(e, r)));
  }
  if (n === 1) throw ((n = el), gn(e, 0), Ht(e, t), Re(e, se()), n);
  if (n === 6) throw Error(j(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    an(e, Me, St),
    Re(e, se()),
    null
  );
}
function ua(e, t) {
  var n = U;
  U |= 1;
  try {
    return e(t);
  } finally {
    (U = n), U === 0 && ((nr = se() + 500), ji && on());
  }
}
function Nn(e) {
  Bt !== null && Bt.tag === 0 && !(U & 6) && Gn();
  var t = U;
  U |= 1;
  var n = Ze.transition,
    r = B;
  try {
    if (((Ze.transition = null), (B = 1), e)) return e();
  } finally {
    (B = r), (Ze.transition = n), (U = t), !(U & 6) && on();
  }
}
function ca() {
  (Ue = Wn.current), K(Wn);
}
function gn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Nm(n)), ae !== null))
    for (n = ae.return; n !== null; ) {
      var r = n;
      switch ((qs(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Xl();
          break;
        case 3:
          er(), K($e), K(ke), Zs();
          break;
        case 5:
          Js(r);
          break;
        case 4:
          er();
          break;
        case 13:
          K(te);
          break;
        case 19:
          K(te);
          break;
        case 10:
          Ys(r.type._context);
          break;
        case 22:
        case 23:
          ca();
      }
      n = n.return;
    }
  if (
    ((me = e),
    (ae = e = en(e.current, null)),
    (ge = Ue = t),
    (fe = 0),
    (el = null),
    (sa = Ti = kn = 0),
    (Me = $r = null),
    fn !== null)
  ) {
    for (t = 0; t < fn.length; t++)
      if (((n = fn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (r.next = o);
        }
        n.pending = r;
      }
    fn = null;
  }
  return e;
}
function Qd(e, t) {
  do {
    var n = ae;
    try {
      if ((Vs(), ($l.current = oi), ii)) {
        for (var r = ne.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        ii = !1;
      }
      if (
        ((Sn = 0),
        (pe = de = ne = null),
        (Mr = !1),
        (Xr = 0),
        (oa.current = null),
        n === null || n.return === null)
      ) {
        (fe = 1), (el = t), (ae = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          s = n,
          u = t;
        if (
          ((t = ge),
          (s.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var c = u,
            f = s,
            p = f.tag;
          if (!(f.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var y = f.alternate;
            y
              ? ((f.updateQueue = y.updateQueue),
                (f.memoizedState = y.memoizedState),
                (f.lanes = y.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var x = yu(o);
          if (x !== null) {
            (x.flags &= -257),
              vu(x, o, s, i, t),
              x.mode & 1 && gu(i, c, t),
              (t = x),
              (u = c);
            var w = t.updateQueue;
            if (w === null) {
              var S = new Set();
              S.add(u), (t.updateQueue = S);
            } else w.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              gu(i, c, t), da();
              break e;
            }
            u = Error(j(426));
          }
        } else if (J && s.mode & 1) {
          var C = yu(o);
          if (C !== null) {
            !(C.flags & 65536) && (C.flags |= 256),
              vu(C, o, s, i, t),
              Bs(tr(u, s));
            break e;
          }
        }
        (i = u = tr(u, s)),
          fe !== 4 && (fe = 2),
          $r === null ? ($r = [i]) : $r.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var m = Td(i, u, t);
              cu(i, m);
              break e;
            case 1:
              s = u;
              var d = i.type,
                h = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof d.getDerivedStateFromError == "function" ||
                  (h !== null &&
                    typeof h.componentDidCatch == "function" &&
                    (Jt === null || !Jt.has(h))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var v = Od(i, s, t);
                cu(i, v);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Gd(n);
    } catch (N) {
      (t = N), ae === n && n !== null && (ae = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Vd() {
  var e = si.current;
  return (si.current = oi), e === null ? oi : e;
}
function da() {
  (fe === 0 || fe === 3 || fe === 2) && (fe = 4),
    me === null || (!(kn & 268435455) && !(Ti & 268435455)) || Ht(me, ge);
}
function ci(e, t) {
  var n = U;
  U |= 2;
  var r = Vd();
  (me !== e || ge !== t) && ((St = null), gn(e, t));
  do
    try {
      Ym();
      break;
    } catch (l) {
      Qd(e, l);
    }
  while (!0);
  if ((Vs(), (U = n), (si.current = r), ae !== null)) throw Error(j(261));
  return (me = null), (ge = 0), fe;
}
function Ym() {
  for (; ae !== null; ) Yd(ae);
}
function Gm() {
  for (; ae !== null && !wp(); ) Yd(ae);
}
function Yd(e) {
  var t = Xd(e.alternate, e, Ue);
  (e.memoizedProps = e.pendingProps),
    t === null ? Gd(e) : (ae = t),
    (oa.current = null);
}
function Gd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Hm(n, t)), n !== null)) {
        (n.flags &= 32767), (ae = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (fe = 6), (ae = null);
        return;
      }
    } else if (((n = Um(n, t, Ue)), n !== null)) {
      ae = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ae = t;
      return;
    }
    ae = t = e;
  } while (t !== null);
  fe === 0 && (fe = 5);
}
function an(e, t, n) {
  var r = B,
    l = Ze.transition;
  try {
    (Ze.transition = null), (B = 1), Km(e, t, n, r);
  } finally {
    (Ze.transition = l), (B = r);
  }
  return null;
}
function Km(e, t, n, r) {
  do Gn();
  while (Bt !== null);
  if (U & 6) throw Error(j(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(j(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Op(e, i),
    e === me && ((ae = me = null), (ge = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      jl ||
      ((jl = !0),
      Jd(Bl, function () {
        return Gn(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Ze.transition), (Ze.transition = null);
    var o = B;
    B = 1;
    var s = U;
    (U |= 4),
      (oa.current = null),
      qm(e, n),
      Wd(n, e),
      gm(Qo),
      (Vl = !!Bo),
      (Qo = Bo = null),
      (e.current = n),
      Bm(n),
      Sp(),
      (U = s),
      (B = o),
      (Ze.transition = i);
  } else e.current = n;
  if (
    (jl && ((jl = !1), (Bt = e), (ui = l)),
    (i = e.pendingLanes),
    i === 0 && (Jt = null),
    Ep(n.stateNode),
    Re(e, se()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (ai) throw ((ai = !1), (e = fs), (fs = null), e);
  return (
    ui & 1 && e.tag !== 0 && Gn(),
    (i = e.pendingLanes),
    i & 1 ? (e === ps ? Fr++ : ((Fr = 0), (ps = e))) : (Fr = 0),
    on(),
    null
  );
}
function Gn() {
  if (Bt !== null) {
    var e = Tc(ui),
      t = Ze.transition,
      n = B;
    try {
      if (((Ze.transition = null), (B = 16 > e ? 16 : e), Bt === null))
        var r = !1;
      else {
        if (((e = Bt), (Bt = null), (ui = 0), U & 6)) throw Error(j(331));
        var l = U;
        for (U |= 4, _ = e.current; _ !== null; ) {
          var i = _,
            o = i.child;
          if (_.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var u = 0; u < s.length; u++) {
                var c = s[u];
                for (_ = c; _ !== null; ) {
                  var f = _;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Lr(8, f, i);
                  }
                  var p = f.child;
                  if (p !== null) (p.return = f), (_ = p);
                  else
                    for (; _ !== null; ) {
                      f = _;
                      var y = f.sibling,
                        x = f.return;
                      if ((Ad(f), f === c)) {
                        _ = null;
                        break;
                      }
                      if (y !== null) {
                        (y.return = x), (_ = y);
                        break;
                      }
                      _ = x;
                    }
                }
              }
              var w = i.alternate;
              if (w !== null) {
                var S = w.child;
                if (S !== null) {
                  w.child = null;
                  do {
                    var C = S.sibling;
                    (S.sibling = null), (S = C);
                  } while (S !== null);
                }
              }
              _ = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (_ = o);
          else
            e: for (; _ !== null; ) {
              if (((i = _), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Lr(9, i, i.return);
                }
              var m = i.sibling;
              if (m !== null) {
                (m.return = i.return), (_ = m);
                break e;
              }
              _ = i.return;
            }
        }
        var d = e.current;
        for (_ = d; _ !== null; ) {
          o = _;
          var h = o.child;
          if (o.subtreeFlags & 2064 && h !== null) (h.return = o), (_ = h);
          else
            e: for (o = d; _ !== null; ) {
              if (((s = _), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pi(9, s);
                  }
                } catch (N) {
                  ie(s, s.return, N);
                }
              if (s === o) {
                _ = null;
                break e;
              }
              var v = s.sibling;
              if (v !== null) {
                (v.return = s.return), (_ = v);
                break e;
              }
              _ = s.return;
            }
        }
        if (
          ((U = l), on(), vt && typeof vt.onPostCommitFiberRoot == "function")
        )
          try {
            vt.onPostCommitFiberRoot(wi, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (B = n), (Ze.transition = t);
    }
  }
  return !1;
}
function Du(e, t, n) {
  (t = tr(n, t)),
    (t = Td(e, t, 1)),
    (e = Xt(e, t, 1)),
    (t = Pe()),
    e !== null && (rl(e, 1, t), Re(e, t));
}
function ie(e, t, n) {
  if (e.tag === 3) Du(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Du(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Jt === null || !Jt.has(r)))
        ) {
          (e = tr(n, e)),
            (e = Od(t, e, 1)),
            (t = Xt(t, e, 1)),
            (e = Pe()),
            t !== null && (rl(t, 1, e), Re(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Xm(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Pe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    me === e &&
      (ge & n) === n &&
      (fe === 4 || (fe === 3 && (ge & 130023424) === ge && 500 > se() - aa)
        ? gn(e, 0)
        : (sa |= n)),
    Re(e, t);
}
function Kd(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = hl), (hl <<= 1), !(hl & 130023424) && (hl = 4194304))
      : (t = 1));
  var n = Pe();
  (e = _t(e, t)), e !== null && (rl(e, t, n), Re(e, n));
}
function Jm(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Kd(e, n);
}
function Zm(e, t) {
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
      throw Error(j(314));
  }
  r !== null && r.delete(t), Kd(e, n);
}
var Xd;
Xd = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || $e.current) Le = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Le = !1), Am(e, t, n);
      Le = !!(e.flags & 131072);
    }
  else (Le = !1), J && t.flags & 1048576 && td(t, ei, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Rl(e, t), (e = t.pendingProps);
      var l = Xn(t, ke.current);
      Yn(t, n), (l = ta(null, t, r, e, l, n));
      var i = na();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Fe(r) ? ((i = !0), Jl(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Ks(t),
            (l.updater = bi),
            (t.stateNode = l),
            (l._reactInternals = t),
            ts(t, r, e, n),
            (t = ls(null, t, r, !0, i, n)))
          : ((t.tag = 0), J && i && Ws(t), be(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Rl(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = th(r)),
          (e = ot(r, e)),
          l)
        ) {
          case 0:
            t = rs(null, t, r, e, n);
            break e;
          case 1:
            t = Su(null, t, r, e, n);
            break e;
          case 11:
            t = xu(null, t, r, e, n);
            break e;
          case 14:
            t = wu(null, t, r, ot(r.type, e), n);
            break e;
        }
        throw Error(j(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ot(r, l)),
        rs(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ot(r, l)),
        Su(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Ld(t), e === null)) throw Error(j(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          sd(e, t),
          ri(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (l = tr(Error(j(423)), t)), (t = ku(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = tr(Error(j(424)), t)), (t = ku(e, t, r, n, l));
            break e;
          } else
            for (
              We = Kt(t.stateNode.containerInfo.firstChild),
                qe = t,
                J = !0,
                at = null,
                n = id(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Jn(), r === l)) {
            t = Mt(e, t, n);
            break e;
          }
          be(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        ad(t),
        e === null && Jo(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        Vo(r, l) ? (o = null) : i !== null && Vo(r, i) && (t.flags |= 32),
        Md(e, t),
        be(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && Jo(t), null;
    case 13:
      return $d(e, t, n);
    case 4:
      return (
        Xs(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Zn(t, null, r, n)) : be(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ot(r, l)),
        xu(e, t, r, l, n)
      );
    case 7:
      return be(e, t, t.pendingProps, n), t.child;
    case 8:
      return be(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return be(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (o = l.value),
          Y(ti, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (ft(i.value, o)) {
            if (i.children === l.children && !$e.current) {
              t = Mt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var s = i.dependencies;
              if (s !== null) {
                o = i.child;
                for (var u = s.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (i.tag === 1) {
                      (u = bt(-1, n & -n)), (u.tag = 2);
                      var c = i.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var f = c.pending;
                        f === null
                          ? (u.next = u)
                          : ((u.next = f.next), (f.next = u)),
                          (c.pending = u);
                      }
                    }
                    (i.lanes |= n),
                      (u = i.alternate),
                      u !== null && (u.lanes |= n),
                      Zo(i.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(j(341));
                (o.lanes |= n),
                  (s = o.alternate),
                  s !== null && (s.lanes |= n),
                  Zo(o, n, t),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        be(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        Yn(t, n),
        (l = et(l)),
        (r = r(l)),
        (t.flags |= 1),
        be(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = ot(r, t.pendingProps)),
        (l = ot(r.type, l)),
        wu(e, t, r, l, n)
      );
    case 15:
      return Dd(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ot(r, l)),
        Rl(e, t),
        (t.tag = 1),
        Fe(r) ? ((e = !0), Jl(t)) : (e = !1),
        Yn(t, n),
        Pd(t, r, l),
        ts(t, r, l, n),
        ls(null, t, r, !0, e, n)
      );
    case 19:
      return Fd(e, t, n);
    case 22:
      return _d(e, t, n);
  }
  throw Error(j(156, t.tag));
};
function Jd(e, t) {
  return jc(e, t);
}
function eh(e, t, n, r) {
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
function Je(e, t, n, r) {
  return new eh(e, t, n, r);
}
function fa(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function th(e) {
  if (typeof e == "function") return fa(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Ds)) return 11;
    if (e === _s) return 14;
  }
  return 2;
}
function en(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Je(e.tag, t, e.key, e.mode)),
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
function Al(e, t, n, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) fa(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Mn:
        return yn(n.children, l, i, t);
      case Os:
        (o = 8), (l |= 8);
        break;
      case jo:
        return (
          (e = Je(12, n, t, l | 2)), (e.elementType = jo), (e.lanes = i), e
        );
      case Co:
        return (e = Je(13, n, t, l)), (e.elementType = Co), (e.lanes = i), e;
      case bo:
        return (e = Je(19, n, t, l)), (e.elementType = bo), (e.lanes = i), e;
      case ac:
        return Oi(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case oc:
              o = 10;
              break e;
            case sc:
              o = 9;
              break e;
            case Ds:
              o = 11;
              break e;
            case _s:
              o = 14;
              break e;
            case It:
              (o = 16), (r = null);
              break e;
          }
        throw Error(j(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Je(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function yn(e, t, n, r) {
  return (e = Je(7, e, r, t)), (e.lanes = n), e;
}
function Oi(e, t, n, r) {
  return (
    (e = Je(22, e, r, t)),
    (e.elementType = ac),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function po(e, t, n) {
  return (e = Je(6, e, null, t)), (e.lanes = n), e;
}
function mo(e, t, n) {
  return (
    (t = Je(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function nh(e, t, n, r, l) {
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
    (this.eventTimes = Vi(0)),
    (this.expirationTimes = Vi(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Vi(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function pa(e, t, n, r, l, i, o, s, u) {
  return (
    (e = new nh(e, t, n, s, u)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Je(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ks(i),
    e
  );
}
function rh(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: _n,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Zd(e) {
  if (!e) return nn;
  e = e._reactInternals;
  e: {
    if (Cn(e) !== e || e.tag !== 1) throw Error(j(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Fe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(j(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Fe(n)) return Zc(e, n, t);
  }
  return t;
}
function ef(e, t, n, r, l, i, o, s, u) {
  return (
    (e = pa(n, r, !0, e, l, i, o, s, u)),
    (e.context = Zd(null)),
    (n = e.current),
    (r = Pe()),
    (l = Zt(n)),
    (i = bt(r, l)),
    (i.callback = t ?? null),
    Xt(n, i, l),
    (e.current.lanes = l),
    rl(e, l, r),
    Re(e, r),
    e
  );
}
function Di(e, t, n, r) {
  var l = t.current,
    i = Pe(),
    o = Zt(l);
  return (
    (n = Zd(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = bt(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Xt(l, t, o)),
    e !== null && (dt(e, l, o, i), Ll(e, l, o)),
    o
  );
}
function di(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function _u(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ma(e, t) {
  _u(e, t), (e = e.alternate) && _u(e, t);
}
function lh() {
  return null;
}
var tf =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ha(e) {
  this._internalRoot = e;
}
_i.prototype.render = ha.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(j(409));
  Di(e, t, null, null);
};
_i.prototype.unmount = ha.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Nn(function () {
      Di(null, e, null, null);
    }),
      (t[Dt] = null);
  }
};
function _i(e) {
  this._internalRoot = e;
}
_i.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = _c();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Ut.length && t !== 0 && t < Ut[n].priority; n++);
    Ut.splice(n, 0, e), n === 0 && Lc(e);
  }
};
function ga(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Mi(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Mu() {}
function ih(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var c = di(o);
        i.call(c);
      };
    }
    var o = ef(t, r, e, 0, null, !1, !1, "", Mu);
    return (
      (e._reactRootContainer = o),
      (e[Dt] = o.current),
      Qr(e.nodeType === 8 ? e.parentNode : e),
      Nn(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var c = di(u);
      s.call(c);
    };
  }
  var u = pa(e, 0, !1, null, null, !1, !1, "", Mu);
  return (
    (e._reactRootContainer = u),
    (e[Dt] = u.current),
    Qr(e.nodeType === 8 ? e.parentNode : e),
    Nn(function () {
      Di(t, u, n, r);
    }),
    u
  );
}
function Li(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var s = l;
      l = function () {
        var u = di(o);
        s.call(u);
      };
    }
    Di(t, o, e, l);
  } else o = ih(n, t, e, l, r);
  return di(o);
}
Oc = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = jr(t.pendingLanes);
        n !== 0 &&
          ($s(t, n | 1), Re(t, se()), !(U & 6) && ((nr = se() + 500), on()));
      }
      break;
    case 13:
      Nn(function () {
        var r = _t(e, 1);
        if (r !== null) {
          var l = Pe();
          dt(r, e, 1, l);
        }
      }),
        ma(e, 1);
  }
};
Fs = function (e) {
  if (e.tag === 13) {
    var t = _t(e, 134217728);
    if (t !== null) {
      var n = Pe();
      dt(t, e, 134217728, n);
    }
    ma(e, 134217728);
  }
};
Dc = function (e) {
  if (e.tag === 13) {
    var t = Zt(e),
      n = _t(e, t);
    if (n !== null) {
      var r = Pe();
      dt(n, e, t, r);
    }
    ma(e, t);
  }
};
_c = function () {
  return B;
};
Mc = function (e, t) {
  var n = B;
  try {
    return (B = e), t();
  } finally {
    B = n;
  }
};
Ro = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Oo(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var l = Ei(r);
            if (!l) throw Error(j(90));
            cc(r), Oo(r, l);
          }
        }
      }
      break;
    case "textarea":
      fc(e, n);
      break;
    case "select":
      (t = n.value), t != null && qn(e, !!n.multiple, t, !1);
  }
};
xc = ua;
wc = Nn;
var oh = { usingClientEntryPoint: !1, Events: [il, Rn, Ei, yc, vc, ua] },
  vr = {
    findFiberByHostInstance: dn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  sh = {
    bundleType: vr.bundleType,
    version: vr.version,
    rendererPackageName: vr.rendererPackageName,
    rendererConfig: vr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Lt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Nc(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: vr.findFiberByHostInstance || lh,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Cl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Cl.isDisabled && Cl.supportsFiber)
    try {
      (wi = Cl.inject(sh)), (vt = Cl);
    } catch {}
}
Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = oh;
Qe.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ga(t)) throw Error(j(200));
  return rh(e, t, null, n);
};
Qe.createRoot = function (e, t) {
  if (!ga(e)) throw Error(j(299));
  var n = !1,
    r = "",
    l = tf;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = pa(e, 1, !1, null, null, n, !1, r, l)),
    (e[Dt] = t.current),
    Qr(e.nodeType === 8 ? e.parentNode : e),
    new ha(t)
  );
};
Qe.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(j(188))
      : ((e = Object.keys(e).join(",")), Error(j(268, e)));
  return (e = Nc(t)), (e = e === null ? null : e.stateNode), e;
};
Qe.flushSync = function (e) {
  return Nn(e);
};
Qe.hydrate = function (e, t, n) {
  if (!Mi(t)) throw Error(j(200));
  return Li(null, e, t, !0, n);
};
Qe.hydrateRoot = function (e, t, n) {
  if (!ga(e)) throw Error(j(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = "",
    o = tf;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = ef(t, null, e, 1, n ?? null, l, !1, i, o)),
    (e[Dt] = t.current),
    Qr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new _i(t);
};
Qe.render = function (e, t, n) {
  if (!Mi(t)) throw Error(j(200));
  return Li(null, e, t, !1, n);
};
Qe.unmountComponentAtNode = function (e) {
  if (!Mi(e)) throw Error(j(40));
  return e._reactRootContainer
    ? (Nn(function () {
        Li(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Dt] = null);
        });
      }),
      !0)
    : !1;
};
Qe.unstable_batchedUpdates = ua;
Qe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Mi(n)) throw Error(j(200));
  if (e == null || e._reactInternals === void 0) throw Error(j(38));
  return Li(e, t, n, !1, r);
};
Qe.version = "18.3.1-next-f1338f8080-20240426";
function nf() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nf);
    } catch (e) {
      console.error(e);
    }
}
nf(), (nc.exports = Qe);
var $i = nc.exports,
  rf,
  Lu = $i;
(rf = Lu.createRoot), Lu.hydrateRoot;
function pt(e) {
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
function En(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t);
}
const lf = 6048e5,
  ah = 864e5;
let uh = {};
function Fi() {
  return uh;
}
function tl(e, t) {
  var s, u, c, f;
  const n = Fi(),
    r =
      (t == null ? void 0 : t.weekStartsOn) ??
      ((u = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) ==
      null
        ? void 0
        : u.weekStartsOn) ??
      n.weekStartsOn ??
      ((f = (c = n.locale) == null ? void 0 : c.options) == null
        ? void 0
        : f.weekStartsOn) ??
      0,
    l = pt(e),
    i = l.getDay(),
    o = (i < r ? 7 : 0) + i - r;
  return l.setDate(l.getDate() - o), l.setHours(0, 0, 0, 0), l;
}
function fi(e) {
  return tl(e, { weekStartsOn: 1 });
}
function of(e) {
  const t = pt(e),
    n = t.getFullYear(),
    r = En(e, 0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  const l = fi(r),
    i = En(e, 0);
  i.setFullYear(n, 0, 4), i.setHours(0, 0, 0, 0);
  const o = fi(i);
  return t.getTime() >= l.getTime()
    ? n + 1
    : t.getTime() >= o.getTime()
    ? n
    : n - 1;
}
function $u(e) {
  const t = pt(e);
  return t.setHours(0, 0, 0, 0), t;
}
function Fu(e) {
  const t = pt(e),
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
function ch(e, t) {
  const n = $u(e),
    r = $u(t),
    l = +n - Fu(n),
    i = +r - Fu(r);
  return Math.round((l - i) / ah);
}
function dh(e) {
  const t = of(e),
    n = En(e, 0);
  return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), fi(n);
}
function fh(e) {
  return (
    e instanceof Date ||
    (typeof e == "object" &&
      Object.prototype.toString.call(e) === "[object Date]")
  );
}
function ph(e) {
  if (!fh(e) && typeof e != "number") return !1;
  const t = pt(e);
  return !isNaN(Number(t));
}
function mh(e) {
  const t = pt(e),
    n = En(e, 0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
const hh = {
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
  gh = (e, t, n) => {
    let r;
    const l = hh[e];
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
function ho(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const yh = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy",
  },
  vh = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a",
  },
  xh = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}",
  },
  wh = {
    date: ho({ formats: yh, defaultWidth: "full" }),
    time: ho({ formats: vh, defaultWidth: "full" }),
    dateTime: ho({ formats: xh, defaultWidth: "full" }),
  },
  Sh = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P",
  },
  kh = (e, t, n, r) => Sh[e];
function xr(e) {
  return (t, n) => {
    const r = n != null && n.context ? String(n.context) : "standalone";
    let l;
    if (r === "formatting" && e.formattingValues) {
      const o = e.defaultFormattingWidth || e.defaultWidth,
        s = n != null && n.width ? String(n.width) : o;
      l = e.formattingValues[s] || e.formattingValues[o];
    } else {
      const o = e.defaultWidth,
        s = n != null && n.width ? String(n.width) : e.defaultWidth;
      l = e.values[s] || e.values[o];
    }
    const i = e.argumentCallback ? e.argumentCallback(t) : t;
    return l[i];
  };
}
const Nh = {
    narrow: ["B", "A"],
    abbreviated: ["BC", "AD"],
    wide: ["Before Christ", "Anno Domini"],
  },
  Eh = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
  },
  jh = {
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
  Ch = {
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
  bh = {
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
  Ph = {
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
  Th = (e, t) => {
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
  Oh = {
    ordinalNumber: Th,
    era: xr({ values: Nh, defaultWidth: "wide" }),
    quarter: xr({
      values: Eh,
      defaultWidth: "wide",
      argumentCallback: (e) => e - 1,
    }),
    month: xr({ values: jh, defaultWidth: "wide" }),
    day: xr({ values: Ch, defaultWidth: "wide" }),
    dayPeriod: xr({
      values: bh,
      defaultWidth: "wide",
      formattingValues: Ph,
      defaultFormattingWidth: "wide",
    }),
  };
function wr(e) {
  return (t, n = {}) => {
    const r = n.width,
      l = (r && e.matchPatterns[r]) || e.matchPatterns[e.defaultMatchWidth],
      i = t.match(l);
    if (!i) return null;
    const o = i[0],
      s = (r && e.parsePatterns[r]) || e.parsePatterns[e.defaultParseWidth],
      u = Array.isArray(s) ? _h(s, (p) => p.test(o)) : Dh(s, (p) => p.test(o));
    let c;
    (c = e.valueCallback ? e.valueCallback(u) : u),
      (c = n.valueCallback ? n.valueCallback(c) : c);
    const f = t.slice(o.length);
    return { value: c, rest: f };
  };
}
function Dh(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n])) return n;
}
function _h(e, t) {
  for (let n = 0; n < e.length; n++) if (t(e[n])) return n;
}
function Mh(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const l = r[0],
      i = t.match(e.parsePattern);
    if (!i) return null;
    let o = e.valueCallback ? e.valueCallback(i[0]) : i[0];
    o = n.valueCallback ? n.valueCallback(o) : o;
    const s = t.slice(l.length);
    return { value: o, rest: s };
  };
}
const Lh = /^(\d+)(th|st|nd|rd)?/i,
  $h = /\d+/i,
  Fh = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i,
  },
  Rh = { any: [/^b/i, /^(a|c)/i] },
  zh = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i,
  },
  Ih = { any: [/1/i, /2/i, /3/i, /4/i] },
  Ah = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
  },
  Uh = {
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
  Hh = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
  },
  Wh = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
  },
  qh = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
  },
  Bh = {
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
  Qh = {
    ordinalNumber: Mh({
      matchPattern: Lh,
      parsePattern: $h,
      valueCallback: (e) => parseInt(e, 10),
    }),
    era: wr({
      matchPatterns: Fh,
      defaultMatchWidth: "wide",
      parsePatterns: Rh,
      defaultParseWidth: "any",
    }),
    quarter: wr({
      matchPatterns: zh,
      defaultMatchWidth: "wide",
      parsePatterns: Ih,
      defaultParseWidth: "any",
      valueCallback: (e) => e + 1,
    }),
    month: wr({
      matchPatterns: Ah,
      defaultMatchWidth: "wide",
      parsePatterns: Uh,
      defaultParseWidth: "any",
    }),
    day: wr({
      matchPatterns: Hh,
      defaultMatchWidth: "wide",
      parsePatterns: Wh,
      defaultParseWidth: "any",
    }),
    dayPeriod: wr({
      matchPatterns: qh,
      defaultMatchWidth: "any",
      parsePatterns: Bh,
      defaultParseWidth: "any",
    }),
  },
  Vh = {
    code: "en-US",
    formatDistance: gh,
    formatLong: wh,
    formatRelative: kh,
    localize: Oh,
    match: Qh,
    options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
  };
function Yh(e) {
  const t = pt(e);
  return ch(t, mh(t)) + 1;
}
function Gh(e) {
  const t = pt(e),
    n = +fi(t) - +dh(t);
  return Math.round(n / lf) + 1;
}
function sf(e, t) {
  var f, p, y, x;
  const n = pt(e),
    r = n.getFullYear(),
    l = Fi(),
    i =
      (t == null ? void 0 : t.firstWeekContainsDate) ??
      ((p = (f = t == null ? void 0 : t.locale) == null ? void 0 : f.options) ==
      null
        ? void 0
        : p.firstWeekContainsDate) ??
      l.firstWeekContainsDate ??
      ((x = (y = l.locale) == null ? void 0 : y.options) == null
        ? void 0
        : x.firstWeekContainsDate) ??
      1,
    o = En(e, 0);
  o.setFullYear(r + 1, 0, i), o.setHours(0, 0, 0, 0);
  const s = tl(o, t),
    u = En(e, 0);
  u.setFullYear(r, 0, i), u.setHours(0, 0, 0, 0);
  const c = tl(u, t);
  return n.getTime() >= s.getTime()
    ? r + 1
    : n.getTime() >= c.getTime()
    ? r
    : r - 1;
}
function Kh(e, t) {
  var s, u, c, f;
  const n = Fi(),
    r =
      (t == null ? void 0 : t.firstWeekContainsDate) ??
      ((u = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) ==
      null
        ? void 0
        : u.firstWeekContainsDate) ??
      n.firstWeekContainsDate ??
      ((f = (c = n.locale) == null ? void 0 : c.options) == null
        ? void 0
        : f.firstWeekContainsDate) ??
      1,
    l = sf(e, t),
    i = En(e, 0);
  return i.setFullYear(l, 0, r), i.setHours(0, 0, 0, 0), tl(i, t);
}
function Xh(e, t) {
  const n = pt(e),
    r = +tl(n, t) - +Kh(n, t);
  return Math.round(r / lf) + 1;
}
function q(e, t) {
  const n = e < 0 ? "-" : "",
    r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const Rt = {
    y(e, t) {
      const n = e.getFullYear(),
        r = n > 0 ? n : 1 - n;
      return q(t === "yy" ? r % 100 : r, t.length);
    },
    M(e, t) {
      const n = e.getMonth();
      return t === "M" ? String(n + 1) : q(n + 1, 2);
    },
    d(e, t) {
      return q(e.getDate(), t.length);
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
      return q(e.getHours() % 12 || 12, t.length);
    },
    H(e, t) {
      return q(e.getHours(), t.length);
    },
    m(e, t) {
      return q(e.getMinutes(), t.length);
    },
    s(e, t) {
      return q(e.getSeconds(), t.length);
    },
    S(e, t) {
      const n = t.length,
        r = e.getMilliseconds(),
        l = Math.trunc(r * Math.pow(10, n - 3));
      return q(l, t.length);
    },
  },
  On = {
    am: "am",
    pm: "pm",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  Ru = {
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
      return Rt.y(e, t);
    },
    Y: function (e, t, n, r) {
      const l = sf(e, r),
        i = l > 0 ? l : 1 - l;
      if (t === "YY") {
        const o = i % 100;
        return q(o, 2);
      }
      return t === "Yo" ? n.ordinalNumber(i, { unit: "year" }) : q(i, t.length);
    },
    R: function (e, t) {
      const n = of(e);
      return q(n, t.length);
    },
    u: function (e, t) {
      const n = e.getFullYear();
      return q(n, t.length);
    },
    Q: function (e, t, n) {
      const r = Math.ceil((e.getMonth() + 1) / 3);
      switch (t) {
        case "Q":
          return String(r);
        case "QQ":
          return q(r, 2);
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
          return q(r, 2);
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
          return Rt.M(e, t);
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
          return q(r + 1, 2);
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
      const l = Xh(e, r);
      return t === "wo" ? n.ordinalNumber(l, { unit: "week" }) : q(l, t.length);
    },
    I: function (e, t, n) {
      const r = Gh(e);
      return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : q(r, t.length);
    },
    d: function (e, t, n) {
      return t === "do"
        ? n.ordinalNumber(e.getDate(), { unit: "date" })
        : Rt.d(e, t);
    },
    D: function (e, t, n) {
      const r = Yh(e);
      return t === "Do"
        ? n.ordinalNumber(r, { unit: "dayOfYear" })
        : q(r, t.length);
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
        i = (l - r.weekStartsOn + 8) % 7 || 7;
      switch (t) {
        case "e":
          return String(i);
        case "ee":
          return q(i, 2);
        case "eo":
          return n.ordinalNumber(i, { unit: "day" });
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
        i = (l - r.weekStartsOn + 8) % 7 || 7;
      switch (t) {
        case "c":
          return String(i);
        case "cc":
          return q(i, t.length);
        case "co":
          return n.ordinalNumber(i, { unit: "day" });
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
          return q(l, t.length);
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
          ? (l = On.noon)
          : r === 0
          ? (l = On.midnight)
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
          ? (l = On.evening)
          : r >= 12
          ? (l = On.afternoon)
          : r >= 4
          ? (l = On.morning)
          : (l = On.night),
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
      return Rt.h(e, t);
    },
    H: function (e, t, n) {
      return t === "Ho"
        ? n.ordinalNumber(e.getHours(), { unit: "hour" })
        : Rt.H(e, t);
    },
    K: function (e, t, n) {
      const r = e.getHours() % 12;
      return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : q(r, t.length);
    },
    k: function (e, t, n) {
      let r = e.getHours();
      return (
        r === 0 && (r = 24),
        t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : q(r, t.length)
      );
    },
    m: function (e, t, n) {
      return t === "mo"
        ? n.ordinalNumber(e.getMinutes(), { unit: "minute" })
        : Rt.m(e, t);
    },
    s: function (e, t, n) {
      return t === "so"
        ? n.ordinalNumber(e.getSeconds(), { unit: "second" })
        : Rt.s(e, t);
    },
    S: function (e, t) {
      return Rt.S(e, t);
    },
    X: function (e, t, n) {
      const r = e.getTimezoneOffset();
      if (r === 0) return "Z";
      switch (t) {
        case "X":
          return Iu(r);
        case "XXXX":
        case "XX":
          return un(r);
        case "XXXXX":
        case "XXX":
        default:
          return un(r, ":");
      }
    },
    x: function (e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
        case "x":
          return Iu(r);
        case "xxxx":
        case "xx":
          return un(r);
        case "xxxxx":
        case "xxx":
        default:
          return un(r, ":");
      }
    },
    O: function (e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
        case "O":
        case "OO":
        case "OOO":
          return "GMT" + zu(r, ":");
        case "OOOO":
        default:
          return "GMT" + un(r, ":");
      }
    },
    z: function (e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
        case "z":
        case "zz":
        case "zzz":
          return "GMT" + zu(r, ":");
        case "zzzz":
        default:
          return "GMT" + un(r, ":");
      }
    },
    t: function (e, t, n) {
      const r = Math.trunc(e.getTime() / 1e3);
      return q(r, t.length);
    },
    T: function (e, t, n) {
      const r = e.getTime();
      return q(r, t.length);
    },
  };
function zu(e, t = "") {
  const n = e > 0 ? "-" : "+",
    r = Math.abs(e),
    l = Math.trunc(r / 60),
    i = r % 60;
  return i === 0 ? n + String(l) : n + String(l) + t + q(i, 2);
}
function Iu(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + q(Math.abs(e) / 60, 2) : un(e, t);
}
function un(e, t = "") {
  const n = e > 0 ? "-" : "+",
    r = Math.abs(e),
    l = q(Math.trunc(r / 60), 2),
    i = q(r % 60, 2);
  return n + l + t + i;
}
const Au = (e, t) => {
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
  af = (e, t) => {
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
  Jh = (e, t) => {
    const n = e.match(/(P+)(p+)?/) || [],
      r = n[1],
      l = n[2];
    if (!l) return Au(e, t);
    let i;
    switch (r) {
      case "P":
        i = t.dateTime({ width: "short" });
        break;
      case "PP":
        i = t.dateTime({ width: "medium" });
        break;
      case "PPP":
        i = t.dateTime({ width: "long" });
        break;
      case "PPPP":
      default:
        i = t.dateTime({ width: "full" });
        break;
    }
    return i.replace("{{date}}", Au(r, t)).replace("{{time}}", af(l, t));
  },
  Zh = { p: af, P: Jh },
  e0 = /^D+$/,
  t0 = /^Y+$/,
  n0 = ["D", "DD", "YY", "YYYY"];
function r0(e) {
  return e0.test(e);
}
function l0(e) {
  return t0.test(e);
}
function i0(e, t, n) {
  const r = o0(e, t, n);
  if ((console.warn(r), n0.includes(e))) throw new RangeError(r);
}
function o0(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const s0 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  a0 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  u0 = /^'([^]*?)'?$/,
  c0 = /''/g,
  d0 = /[a-zA-Z]/;
function ce(e, t, n) {
  var f, p, y, x;
  const r = Fi(),
    l = r.locale ?? Vh,
    i =
      r.firstWeekContainsDate ??
      ((p = (f = r.locale) == null ? void 0 : f.options) == null
        ? void 0
        : p.firstWeekContainsDate) ??
      1,
    o =
      r.weekStartsOn ??
      ((x = (y = r.locale) == null ? void 0 : y.options) == null
        ? void 0
        : x.weekStartsOn) ??
      0,
    s = pt(e);
  if (!ph(s)) throw new RangeError("Invalid time value");
  let u = t
    .match(a0)
    .map((w) => {
      const S = w[0];
      if (S === "p" || S === "P") {
        const C = Zh[S];
        return C(w, l.formatLong);
      }
      return w;
    })
    .join("")
    .match(s0)
    .map((w) => {
      if (w === "''") return { isToken: !1, value: "'" };
      const S = w[0];
      if (S === "'") return { isToken: !1, value: f0(w) };
      if (Ru[S]) return { isToken: !0, value: w };
      if (S.match(d0))
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" +
            S +
            "`"
        );
      return { isToken: !1, value: w };
    });
  l.localize.preprocessor && (u = l.localize.preprocessor(s, u));
  const c = { firstWeekContainsDate: i, weekStartsOn: o, locale: l };
  return u
    .map((w) => {
      if (!w.isToken) return w.value;
      const S = w.value;
      (l0(S) || r0(S)) && i0(S, t, String(e));
      const C = Ru[S[0]];
      return C(s, S, l.localize, c);
    })
    .join("");
}
function f0(e) {
  const t = e.match(u0);
  return t ? t[1].replace(c0, "'") : e;
}
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var p0 = {
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
 */ const m0 = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  Ye = (e, t) => {
    const n = g.forwardRef(
      (
        {
          color: r = "currentColor",
          size: l = 24,
          strokeWidth: i = 2,
          absoluteStrokeWidth: o,
          className: s = "",
          children: u,
          ...c
        },
        f
      ) =>
        g.createElement(
          "svg",
          {
            ref: f,
            ...p0,
            width: l,
            height: l,
            stroke: r,
            strokeWidth: o ? (Number(i) * 24) / Number(l) : i,
            className: ["lucide", `lucide-${m0(e)}`, s].join(" "),
            ...c,
          },
          [
            ...t.map(([p, y]) => g.createElement(p, y)),
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
 */ const pi = Ye("AlertCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const h0 = Ye("AlertTriangle", [
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
 */ const go = Ye("Calendar", [
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
 */ const g0 = Ye("CheckCircle2", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const y0 = Ye("Globe", [
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
 */ const yo = Ye("Hash", [
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
 */ const v0 = Ye("Layers", [
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
 */ const x0 = Ye("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Dn = Ye("Package", [
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
 */ const uf = Ye("Scan", [
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
 */ const cf = Ye("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const w0 = Ye("Trash2", [
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
 */ const ya = Ye("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]);
var S0 = Object.defineProperty,
  k0 = (e, t, n) =>
    t in e
      ? S0(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  vo = (e, t, n) => (k0(e, typeof t != "symbol" ? t + "" : t, n), n);
let N0 = class {
    constructor() {
      vo(this, "current", this.detect()),
        vo(this, "handoffState", "pending"),
        vo(this, "currentId", 0);
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
  Pt = new N0(),
  nt = (e, t) => {
    Pt.isServer ? g.useEffect(e, t) : g.useLayoutEffect(e, t);
  };
function Tt(e) {
  let t = g.useRef(e);
  return (
    nt(() => {
      t.current = e;
    }, [e]),
    t
  );
}
let Z = function (e) {
  let t = Tt(e);
  return F.useCallback((...n) => t.current(...n), [t]);
};
function Ri(e) {
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
function bn() {
  let e = [],
    t = {
      addEventListener(n, r, l, i) {
        return (
          n.addEventListener(r, l, i),
          t.add(() => n.removeEventListener(r, l, i))
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
          Ri(() => {
            r.current && n[0]();
          }),
          t.add(() => {
            r.current = !1;
          })
        );
      },
      style(n, r, l) {
        let i = n.style.getPropertyValue(r);
        return (
          Object.assign(n.style, { [r]: l }),
          this.add(() => {
            Object.assign(n.style, { [r]: i });
          })
        );
      },
      group(n) {
        let r = bn();
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
function va() {
  let [e] = g.useState(bn);
  return g.useEffect(() => () => e.dispose(), [e]), e;
}
function E0() {
  let e = typeof document > "u";
  return "useSyncExternalStore" in Rr
    ? ((t) => t.useSyncExternalStore)(Rr)(
        () => () => {},
        () => !1,
        () => !e
      )
    : !1;
}
function or() {
  let e = E0(),
    [t, n] = g.useState(Pt.isHandoffComplete);
  return (
    t && Pt.isHandoffComplete === !1 && n(!1),
    g.useEffect(() => {
      t !== !0 && n(!0);
    }, [t]),
    g.useEffect(() => Pt.handoff(), []),
    e ? !1 : t
  );
}
var Uu;
let sr =
  (Uu = F.useId) != null
    ? Uu
    : function () {
        let e = or(),
          [t, n] = F.useState(e ? () => Pt.nextId() : null);
        return (
          nt(() => {
            t === null && n(Pt.nextId());
          }, [t]),
          t != null ? "" + t : void 0
        );
      };
function Se(e, t, ...n) {
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
  throw (Error.captureStackTrace && Error.captureStackTrace(r, Se), r);
}
function df(e) {
  return Pt.isServer
    ? null
    : e instanceof Node
    ? e.ownerDocument
    : e != null && e.hasOwnProperty("current") && e.current instanceof Node
    ? e.current.ownerDocument
    : document;
}
let gs = [
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
var cn = ((e) => (
    (e[(e.First = 1)] = "First"),
    (e[(e.Previous = 2)] = "Previous"),
    (e[(e.Next = 4)] = "Next"),
    (e[(e.Last = 8)] = "Last"),
    (e[(e.WrapAround = 16)] = "WrapAround"),
    (e[(e.NoScroll = 32)] = "NoScroll"),
    e
  ))(cn || {}),
  ff = ((e) => (
    (e[(e.Error = 0)] = "Error"),
    (e[(e.Overflow = 1)] = "Overflow"),
    (e[(e.Success = 2)] = "Success"),
    (e[(e.Underflow = 3)] = "Underflow"),
    e
  ))(ff || {}),
  j0 = ((e) => (
    (e[(e.Previous = -1)] = "Previous"), (e[(e.Next = 1)] = "Next"), e
  ))(j0 || {});
function C0(e = document.body) {
  return e == null
    ? []
    : Array.from(e.querySelectorAll(gs)).sort((t, n) =>
        Math.sign(
          (t.tabIndex || Number.MAX_SAFE_INTEGER) -
            (n.tabIndex || Number.MAX_SAFE_INTEGER)
        )
      );
}
var pf = ((e) => (
  (e[(e.Strict = 0)] = "Strict"), (e[(e.Loose = 1)] = "Loose"), e
))(pf || {});
function b0(e, t = 0) {
  var n;
  return e === ((n = df(e)) == null ? void 0 : n.body)
    ? !1
    : Se(t, {
        0() {
          return e.matches(gs);
        },
        1() {
          let r = e;
          for (; r !== null; ) {
            if (r.matches(gs)) return !0;
            r = r.parentElement;
          }
          return !1;
        },
      });
}
var P0 = ((e) => (
  (e[(e.Keyboard = 0)] = "Keyboard"), (e[(e.Mouse = 1)] = "Mouse"), e
))(P0 || {});
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
function vn(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let T0 = ["textarea", "input"].join(",");
function O0(e) {
  var t, n;
  return (n =
    (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, T0)) !=
    null
    ? n
    : !1;
}
function D0(e, t = (n) => n) {
  return e.slice().sort((n, r) => {
    let l = t(n),
      i = t(r);
    if (l === null || i === null) return 0;
    let o = l.compareDocumentPosition(i);
    return o & Node.DOCUMENT_POSITION_FOLLOWING
      ? -1
      : o & Node.DOCUMENT_POSITION_PRECEDING
      ? 1
      : 0;
  });
}
function Ul(
  e,
  t,
  { sorted: n = !0, relativeTo: r = null, skipElements: l = [] } = {}
) {
  let i = Array.isArray(e)
      ? e.length > 0
        ? e[0].ownerDocument
        : document
      : e.ownerDocument,
    o = Array.isArray(e) ? (n ? D0(e) : e) : C0(e);
  l.length > 0 && o.length > 1 && (o = o.filter((x) => !l.includes(x))),
    (r = r ?? i.activeElement);
  let s = (() => {
      if (t & 5) return 1;
      if (t & 10) return -1;
      throw new Error(
        "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
      );
    })(),
    u = (() => {
      if (t & 1) return 0;
      if (t & 2) return Math.max(0, o.indexOf(r)) - 1;
      if (t & 4) return Math.max(0, o.indexOf(r)) + 1;
      if (t & 8) return o.length - 1;
      throw new Error(
        "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
      );
    })(),
    c = t & 32 ? { preventScroll: !0 } : {},
    f = 0,
    p = o.length,
    y;
  do {
    if (f >= p || f + p <= 0) return 0;
    let x = u + f;
    if (t & 16) x = (x + p) % p;
    else {
      if (x < 0) return 3;
      if (x >= p) return 1;
    }
    (y = o[x]), y == null || y.focus(c), (f += s);
  } while (y !== i.activeElement);
  return t & 6 && O0(y) && y.select(), 2;
}
function mf() {
  return (
    /iPhone/gi.test(window.navigator.platform) ||
    (/Mac/gi.test(window.navigator.platform) &&
      window.navigator.maxTouchPoints > 0)
  );
}
function _0() {
  return /Android/gi.test(window.navigator.userAgent);
}
function M0() {
  return mf() || _0();
}
function bl(e, t, n) {
  let r = Tt(t);
  g.useEffect(() => {
    function l(i) {
      r.current(i);
    }
    return (
      document.addEventListener(e, l, n),
      () => document.removeEventListener(e, l, n)
    );
  }, [e, n]);
}
function hf(e, t, n) {
  let r = Tt(t);
  g.useEffect(() => {
    function l(i) {
      r.current(i);
    }
    return (
      window.addEventListener(e, l, n),
      () => window.removeEventListener(e, l, n)
    );
  }, [e, n]);
}
function L0(e, t, n = !0) {
  let r = g.useRef(!1);
  g.useEffect(() => {
    requestAnimationFrame(() => {
      r.current = n;
    });
  }, [n]);
  function l(o, s) {
    if (!r.current || o.defaultPrevented) return;
    let u = s(o);
    if (u === null || !u.getRootNode().contains(u) || !u.isConnected) return;
    let c = (function f(p) {
      return typeof p == "function"
        ? f(p())
        : Array.isArray(p) || p instanceof Set
        ? p
        : [p];
    })(e);
    for (let f of c) {
      if (f === null) continue;
      let p = f instanceof HTMLElement ? f : f.current;
      if (
        (p != null && p.contains(u)) ||
        (o.composed && o.composedPath().includes(p))
      )
        return;
    }
    return !b0(u, pf.Loose) && u.tabIndex !== -1 && o.preventDefault(), t(o, u);
  }
  let i = g.useRef(null);
  bl(
    "pointerdown",
    (o) => {
      var s, u;
      r.current &&
        (i.current =
          ((u = (s = o.composedPath) == null ? void 0 : s.call(o)) == null
            ? void 0
            : u[0]) || o.target);
    },
    !0
  ),
    bl(
      "mousedown",
      (o) => {
        var s, u;
        r.current &&
          (i.current =
            ((u = (s = o.composedPath) == null ? void 0 : s.call(o)) == null
              ? void 0
              : u[0]) || o.target);
      },
      !0
    ),
    bl(
      "click",
      (o) => {
        M0() || (i.current && (l(o, () => i.current), (i.current = null)));
      },
      !0
    ),
    bl(
      "touchend",
      (o) => l(o, () => (o.target instanceof HTMLElement ? o.target : null)),
      !0
    ),
    hf(
      "blur",
      (o) =>
        l(o, () =>
          window.document.activeElement instanceof HTMLIFrameElement
            ? window.document.activeElement
            : null
        ),
      !0
    );
}
function sl(...e) {
  return g.useMemo(() => df(...e), [...e]);
}
let gf = Symbol();
function $0(e, t = !0) {
  return Object.assign(e, { [gf]: t });
}
function mt(...e) {
  let t = g.useRef(e);
  g.useEffect(() => {
    t.current = e;
  }, [e]);
  let n = Z((r) => {
    for (let l of t.current)
      l != null && (typeof l == "function" ? l(r) : (l.current = r));
  });
  return e.every((r) => r == null || (r == null ? void 0 : r[gf])) ? void 0 : n;
}
function xa(e, t) {
  let n = g.useRef([]),
    r = Z(e);
  g.useEffect(() => {
    let l = [...n.current];
    for (let [i, o] of t.entries())
      if (n.current[i] !== o) {
        let s = r(t, l);
        return (n.current = t), s;
      }
  }, [r, ...t]);
}
function mi(...e) {
  return Array.from(
    new Set(e.flatMap((t) => (typeof t == "string" ? t.split(" ") : [])))
  )
    .filter(Boolean)
    .join(" ");
}
var hi = ((e) => (
    (e[(e.None = 0)] = "None"),
    (e[(e.RenderStrategy = 1)] = "RenderStrategy"),
    (e[(e.Static = 2)] = "Static"),
    e
  ))(hi || {}),
  Qt = ((e) => (
    (e[(e.Unmount = 0)] = "Unmount"), (e[(e.Hidden = 1)] = "Hidden"), e
  ))(Qt || {});
function rt({
  ourProps: e,
  theirProps: t,
  slot: n,
  defaultTag: r,
  features: l,
  visible: i = !0,
  name: o,
  mergeRefs: s,
}) {
  s = s ?? F0;
  let u = yf(t, e);
  if (i) return Pl(u, n, r, o, s);
  let c = l ?? 0;
  if (c & 2) {
    let { static: f = !1, ...p } = u;
    if (f) return Pl(p, n, r, o, s);
  }
  if (c & 1) {
    let { unmount: f = !0, ...p } = u;
    return Se(f ? 0 : 1, {
      0() {
        return null;
      },
      1() {
        return Pl({ ...p, hidden: !0, style: { display: "none" } }, n, r, o, s);
      },
    });
  }
  return Pl(u, n, r, o, s);
}
function Pl(e, t = {}, n, r, l) {
  let {
      as: i = n,
      children: o,
      refName: s = "ref",
      ...u
    } = xo(e, ["unmount", "static"]),
    c = e.ref !== void 0 ? { [s]: e.ref } : {},
    f = typeof o == "function" ? o(t) : o;
  "className" in u &&
    u.className &&
    typeof u.className == "function" &&
    (u.className = u.className(t));
  let p = {};
  if (t) {
    let y = !1,
      x = [];
    for (let [w, S] of Object.entries(t))
      typeof S == "boolean" && (y = !0), S === !0 && x.push(w);
    y && (p["data-headlessui-state"] = x.join(" "));
  }
  if (i === g.Fragment && Object.keys(Hu(u)).length > 0) {
    if (!g.isValidElement(f) || (Array.isArray(f) && f.length > 1))
      throw new Error(
        [
          'Passing props on "Fragment"!',
          "",
          `The current component <${r} /> is rendering a "Fragment".`,
          "However we need to passthrough the following props:",
          Object.keys(u).map((S) => `  - ${S}`).join(`
`),
          "",
          "You can apply a few solutions:",
          [
            'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
            "Render a single element as the child so that we can forward the props onto that element.",
          ].map((S) => `  - ${S}`).join(`
`),
        ].join(`
`)
      );
    let y = f.props,
      x =
        typeof (y == null ? void 0 : y.className) == "function"
          ? (...S) => mi(y == null ? void 0 : y.className(...S), u.className)
          : mi(y == null ? void 0 : y.className, u.className),
      w = x ? { className: x } : {};
    return g.cloneElement(
      f,
      Object.assign(
        {},
        yf(f.props, Hu(xo(u, ["ref"]))),
        p,
        c,
        { ref: l(f.ref, c.ref) },
        w
      )
    );
  }
  return g.createElement(
    i,
    Object.assign(
      {},
      xo(u, ["ref"]),
      i !== g.Fragment && c,
      i !== g.Fragment && p
    ),
    f
  );
}
function F0(...e) {
  return e.every((t) => t == null)
    ? void 0
    : (t) => {
        for (let n of e)
          n != null && (typeof n == "function" ? n(t) : (n.current = t));
      };
}
function yf(...e) {
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
      [r](l, ...i) {
        let o = n[r];
        for (let s of o) {
          if (
            (l instanceof Event ||
              (l == null ? void 0 : l.nativeEvent) instanceof Event) &&
            l.defaultPrevented
          )
            return;
          s(l, ...i);
        }
      },
    });
  return t;
}
function Ge(e) {
  var t;
  return Object.assign(g.forwardRef(e), {
    displayName: (t = e.displayName) != null ? t : e.name,
  });
}
function Hu(e) {
  let t = Object.assign({}, e);
  for (let n in t) t[n] === void 0 && delete t[n];
  return t;
}
function xo(e, t = []) {
  let n = Object.assign({}, e);
  for (let r of t) r in n && delete n[r];
  return n;
}
let R0 = "div";
var gi = ((e) => (
  (e[(e.None = 1)] = "None"),
  (e[(e.Focusable = 2)] = "Focusable"),
  (e[(e.Hidden = 4)] = "Hidden"),
  e
))(gi || {});
function z0(e, t) {
  var n;
  let { features: r = 1, ...l } = e,
    i = {
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
  return rt({
    ourProps: i,
    theirProps: l,
    slot: {},
    defaultTag: R0,
    name: "Hidden",
  });
}
let ys = Ge(z0),
  wa = g.createContext(null);
wa.displayName = "OpenClosedContext";
var He = ((e) => (
  (e[(e.Open = 1)] = "Open"),
  (e[(e.Closed = 2)] = "Closed"),
  (e[(e.Closing = 4)] = "Closing"),
  (e[(e.Opening = 8)] = "Opening"),
  e
))(He || {});
function Sa() {
  return g.useContext(wa);
}
function I0({ value: e, children: t }) {
  return F.createElement(wa.Provider, { value: e }, t);
}
function A0(e) {
  function t() {
    document.readyState !== "loading" &&
      (e(), document.removeEventListener("DOMContentLoaded", t));
  }
  typeof window < "u" &&
    typeof document < "u" &&
    (document.addEventListener("DOMContentLoaded", t), t());
}
let Wt = [];
A0(() => {
  function e(t) {
    t.target instanceof HTMLElement &&
      t.target !== document.body &&
      Wt[0] !== t.target &&
      (Wt.unshift(t.target),
      (Wt = Wt.filter((n) => n != null && n.isConnected)),
      Wt.splice(10));
  }
  window.addEventListener("click", e, { capture: !0 }),
    window.addEventListener("mousedown", e, { capture: !0 }),
    window.addEventListener("focus", e, { capture: !0 }),
    document.body.addEventListener("click", e, { capture: !0 }),
    document.body.addEventListener("mousedown", e, { capture: !0 }),
    document.body.addEventListener("focus", e, { capture: !0 });
});
function U0(e) {
  let t = e.parentElement,
    n = null;
  for (; t && !(t instanceof HTMLFieldSetElement); )
    t instanceof HTMLLegendElement && (n = t), (t = t.parentElement);
  let r = (t == null ? void 0 : t.getAttribute("disabled")) === "";
  return r && H0(n) ? !1 : r;
}
function H0(e) {
  if (!e) return !1;
  let t = e.previousElementSibling;
  for (; t !== null; ) {
    if (t instanceof HTMLLegendElement) return !1;
    t = t.previousElementSibling;
  }
  return !0;
}
var vf = ((e) => (
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
))(vf || {});
function xf(e, t, n, r) {
  let l = Tt(n);
  g.useEffect(() => {
    e = e ?? window;
    function i(o) {
      l.current(o);
    }
    return e.addEventListener(t, i, r), () => e.removeEventListener(t, i, r);
  }, [e, t, r]);
}
function al() {
  let e = g.useRef(!1);
  return (
    nt(
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
function wf(e) {
  let t = Z(e),
    n = g.useRef(!1);
  g.useEffect(
    () => (
      (n.current = !1),
      () => {
        (n.current = !0),
          Ri(() => {
            n.current && t();
          });
      }
    ),
    [t]
  );
}
var br = ((e) => (
  (e[(e.Forwards = 0)] = "Forwards"), (e[(e.Backwards = 1)] = "Backwards"), e
))(br || {});
function W0() {
  let e = g.useRef(0);
  return (
    hf(
      "keydown",
      (t) => {
        t.key === "Tab" && (e.current = t.shiftKey ? 1 : 0);
      },
      !0
    ),
    e
  );
}
function Sf(e) {
  if (!e) return new Set();
  if (typeof e == "function") return new Set(e());
  let t = new Set();
  for (let n of e.current) n.current instanceof HTMLElement && t.add(n.current);
  return t;
}
let q0 = "div";
var kf = ((e) => (
  (e[(e.None = 1)] = "None"),
  (e[(e.InitialFocus = 2)] = "InitialFocus"),
  (e[(e.TabLock = 4)] = "TabLock"),
  (e[(e.FocusLock = 8)] = "FocusLock"),
  (e[(e.RestoreFocus = 16)] = "RestoreFocus"),
  (e[(e.All = 30)] = "All"),
  e
))(kf || {});
function B0(e, t) {
  let n = g.useRef(null),
    r = mt(n, t),
    { initialFocus: l, containers: i, features: o = 30, ...s } = e;
  or() || (o = 1);
  let u = sl(n);
  Y0({ ownerDocument: u }, !!(o & 16));
  let c = G0({ ownerDocument: u, container: n, initialFocus: l }, !!(o & 2));
  K0(
    { ownerDocument: u, container: n, containers: i, previousActiveElement: c },
    !!(o & 8)
  );
  let f = W0(),
    p = Z((S) => {
      let C = n.current;
      C &&
        ((m) => m())(() => {
          Se(f.current, {
            [br.Forwards]: () => {
              Ul(C, cn.First, { skipElements: [S.relatedTarget] });
            },
            [br.Backwards]: () => {
              Ul(C, cn.Last, { skipElements: [S.relatedTarget] });
            },
          });
        });
    }),
    y = va(),
    x = g.useRef(!1),
    w = {
      ref: r,
      onKeyDown(S) {
        S.key == "Tab" &&
          ((x.current = !0),
          y.requestAnimationFrame(() => {
            x.current = !1;
          }));
      },
      onBlur(S) {
        let C = Sf(i);
        n.current instanceof HTMLElement && C.add(n.current);
        let m = S.relatedTarget;
        m instanceof HTMLElement &&
          m.dataset.headlessuiFocusGuard !== "true" &&
          (Nf(C, m) ||
            (x.current
              ? Ul(
                  n.current,
                  Se(f.current, {
                    [br.Forwards]: () => cn.Next,
                    [br.Backwards]: () => cn.Previous,
                  }) | cn.WrapAround,
                  { relativeTo: S.target }
                )
              : S.target instanceof HTMLElement && vn(S.target)));
      },
    };
  return F.createElement(
    F.Fragment,
    null,
    !!(o & 4) &&
      F.createElement(ys, {
        as: "button",
        type: "button",
        "data-headlessui-focus-guard": !0,
        onFocus: p,
        features: gi.Focusable,
      }),
    rt({ ourProps: w, theirProps: s, defaultTag: q0, name: "FocusTrap" }),
    !!(o & 4) &&
      F.createElement(ys, {
        as: "button",
        type: "button",
        "data-headlessui-focus-guard": !0,
        onFocus: p,
        features: gi.Focusable,
      })
  );
}
let Q0 = Ge(B0),
  Sr = Object.assign(Q0, { features: kf });
function V0(e = !0) {
  let t = g.useRef(Wt.slice());
  return (
    xa(
      ([n], [r]) => {
        r === !0 &&
          n === !1 &&
          Ri(() => {
            t.current.splice(0);
          }),
          r === !1 && n === !0 && (t.current = Wt.slice());
      },
      [e, Wt, t]
    ),
    Z(() => {
      var n;
      return (n = t.current.find((r) => r != null && r.isConnected)) != null
        ? n
        : null;
    })
  );
}
function Y0({ ownerDocument: e }, t) {
  let n = V0(t);
  xa(() => {
    t ||
      ((e == null ? void 0 : e.activeElement) ===
        (e == null ? void 0 : e.body) &&
        vn(n()));
  }, [t]),
    wf(() => {
      t && vn(n());
    });
}
function G0({ ownerDocument: e, container: t, initialFocus: n }, r) {
  let l = g.useRef(null),
    i = al();
  return (
    xa(() => {
      if (!r) return;
      let o = t.current;
      o &&
        Ri(() => {
          if (!i.current) return;
          let s = e == null ? void 0 : e.activeElement;
          if (n != null && n.current) {
            if ((n == null ? void 0 : n.current) === s) {
              l.current = s;
              return;
            }
          } else if (o.contains(s)) {
            l.current = s;
            return;
          }
          n != null && n.current
            ? vn(n.current)
            : Ul(o, cn.First) === ff.Error &&
              console.warn(
                "There are no focusable elements inside the <FocusTrap />"
              ),
            (l.current = e == null ? void 0 : e.activeElement);
        });
    }, [r]),
    l
  );
}
function K0(
  { ownerDocument: e, container: t, containers: n, previousActiveElement: r },
  l
) {
  let i = al();
  xf(
    e == null ? void 0 : e.defaultView,
    "focus",
    (o) => {
      if (!l || !i.current) return;
      let s = Sf(n);
      t.current instanceof HTMLElement && s.add(t.current);
      let u = r.current;
      if (!u) return;
      let c = o.target;
      c && c instanceof HTMLElement
        ? Nf(s, c)
          ? ((r.current = c), vn(c))
          : (o.preventDefault(), o.stopPropagation(), vn(u))
        : vn(r.current);
    },
    !0
  );
}
function Nf(e, t) {
  for (let n of e) if (n.contains(t)) return !0;
  return !1;
}
let Ef = g.createContext(!1);
function X0() {
  return g.useContext(Ef);
}
function vs(e) {
  return F.createElement(Ef.Provider, { value: e.force }, e.children);
}
function J0(e) {
  let t = X0(),
    n = g.useContext(jf),
    r = sl(e),
    [l, i] = g.useState(() => {
      if ((!t && n !== null) || Pt.isServer) return null;
      let o = r == null ? void 0 : r.getElementById("headlessui-portal-root");
      if (o) return o;
      if (r === null) return null;
      let s = r.createElement("div");
      return (
        s.setAttribute("id", "headlessui-portal-root"), r.body.appendChild(s)
      );
    });
  return (
    g.useEffect(() => {
      l !== null &&
        ((r != null && r.body.contains(l)) ||
          r == null ||
          r.body.appendChild(l));
    }, [l, r]),
    g.useEffect(() => {
      t || (n !== null && i(n.current));
    }, [n, i, t]),
    l
  );
}
let Z0 = g.Fragment;
function eg(e, t) {
  let n = e,
    r = g.useRef(null),
    l = mt(
      $0((f) => {
        r.current = f;
      }),
      t
    ),
    i = sl(r),
    o = J0(r),
    [s] = g.useState(() => {
      var f;
      return Pt.isServer
        ? null
        : (f = i == null ? void 0 : i.createElement("div")) != null
        ? f
        : null;
    }),
    u = g.useContext(xs),
    c = or();
  return (
    nt(() => {
      !o ||
        !s ||
        o.contains(s) ||
        (s.setAttribute("data-headlessui-portal", ""), o.appendChild(s));
    }, [o, s]),
    nt(() => {
      if (s && u) return u.register(s);
    }, [u, s]),
    wf(() => {
      var f;
      !o ||
        !s ||
        (s instanceof Node && o.contains(s) && o.removeChild(s),
        o.childNodes.length <= 0 &&
          ((f = o.parentElement) == null || f.removeChild(o)));
    }),
    c
      ? !o || !s
        ? null
        : $i.createPortal(
            rt({
              ourProps: { ref: l },
              theirProps: n,
              defaultTag: Z0,
              name: "Portal",
            }),
            s
          )
      : null
  );
}
let tg = g.Fragment,
  jf = g.createContext(null);
function ng(e, t) {
  let { target: n, ...r } = e,
    l = { ref: mt(t) };
  return F.createElement(
    jf.Provider,
    { value: n },
    rt({ ourProps: l, theirProps: r, defaultTag: tg, name: "Popover.Group" })
  );
}
let xs = g.createContext(null);
function rg() {
  let e = g.useContext(xs),
    t = g.useRef([]),
    n = Z((i) => (t.current.push(i), e && e.register(i), () => r(i))),
    r = Z((i) => {
      let o = t.current.indexOf(i);
      o !== -1 && t.current.splice(o, 1), e && e.unregister(i);
    }),
    l = g.useMemo(
      () => ({ register: n, unregister: r, portals: t }),
      [n, r, t]
    );
  return [
    t,
    g.useMemo(
      () =>
        function ({ children: i }) {
          return F.createElement(xs.Provider, { value: l }, i);
        },
      [l]
    ),
  ];
}
let lg = Ge(eg),
  ig = Ge(ng),
  ws = Object.assign(lg, { Group: ig });
function og(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
const sg = typeof Object.is == "function" ? Object.is : og,
  { useState: ag, useEffect: ug, useLayoutEffect: cg, useDebugValue: dg } = Rr;
function fg(e, t, n) {
  const r = t(),
    [{ inst: l }, i] = ag({ inst: { value: r, getSnapshot: t } });
  return (
    cg(() => {
      (l.value = r), (l.getSnapshot = t), wo(l) && i({ inst: l });
    }, [e, r, t]),
    ug(
      () => (
        wo(l) && i({ inst: l }),
        e(() => {
          wo(l) && i({ inst: l });
        })
      ),
      [e]
    ),
    dg(r),
    r
  );
}
function wo(e) {
  const t = e.getSnapshot,
    n = e.value;
  try {
    const r = t();
    return !sg(n, r);
  } catch {
    return !0;
  }
}
function pg(e, t, n) {
  return t();
}
const mg =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  hg = !mg,
  gg = hg ? pg : fg,
  yg = "useSyncExternalStore" in Rr ? ((e) => e.useSyncExternalStore)(Rr) : gg;
function vg(e) {
  return yg(e.subscribe, e.getSnapshot, e.getSnapshot);
}
function xg(e, t) {
  let n = e(),
    r = new Set();
  return {
    getSnapshot() {
      return n;
    },
    subscribe(l) {
      return r.add(l), () => r.delete(l);
    },
    dispatch(l, ...i) {
      let o = t[l].call(n, ...i);
      o && ((n = o), r.forEach((s) => s()));
    },
  };
}
function wg() {
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
        i = e - l;
      n.style(r, "paddingRight", `${i}px`);
    },
  };
}
function Sg() {
  return mf()
    ? {
        before({ doc: e, d: t, meta: n }) {
          function r(l) {
            return n.containers.flatMap((i) => i()).some((i) => i.contains(l));
          }
          t.microTask(() => {
            var l;
            if (
              window.getComputedStyle(e.documentElement).scrollBehavior !==
              "auto"
            ) {
              let s = bn();
              s.style(e.documentElement, "scrollBehavior", "auto"),
                t.add(() => t.microTask(() => s.dispose()));
            }
            let i = (l = window.scrollY) != null ? l : window.pageYOffset,
              o = null;
            t.addEventListener(
              e,
              "click",
              (s) => {
                if (s.target instanceof HTMLElement)
                  try {
                    let u = s.target.closest("a");
                    if (!u) return;
                    let { hash: c } = new URL(u.href),
                      f = e.querySelector(c);
                    f && !r(f) && (o = f);
                  } catch {}
              },
              !0
            ),
              t.addEventListener(e, "touchstart", (s) => {
                if (s.target instanceof HTMLElement)
                  if (r(s.target)) {
                    let u = s.target;
                    for (; u.parentElement && r(u.parentElement); )
                      u = u.parentElement;
                    t.style(u, "overscrollBehavior", "contain");
                  } else t.style(s.target, "touchAction", "none");
              }),
              t.addEventListener(
                e,
                "touchmove",
                (s) => {
                  if (s.target instanceof HTMLElement)
                    if (r(s.target)) {
                      let u = s.target;
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
                      u.dataset.headlessuiPortal === "" && s.preventDefault();
                    } else s.preventDefault();
                },
                { passive: !1 }
              ),
              t.add(() => {
                var s;
                let u = (s = window.scrollY) != null ? s : window.pageYOffset;
                i !== u && window.scrollTo(0, i),
                  o &&
                    o.isConnected &&
                    (o.scrollIntoView({ block: "nearest" }), (o = null));
              });
          });
        },
      }
    : {};
}
function kg() {
  return {
    before({ doc: e, d: t }) {
      t.style(e.documentElement, "overflow", "hidden");
    },
  };
}
function Ng(e) {
  let t = {};
  for (let n of e) Object.assign(t, n(t));
  return t;
}
let mn = xg(() => new Map(), {
  PUSH(e, t) {
    var n;
    let r =
      (n = this.get(e)) != null
        ? n
        : { doc: e, count: 0, d: bn(), meta: new Set() };
    return r.count++, r.meta.add(t), this.set(e, r), this;
  },
  POP(e, t) {
    let n = this.get(e);
    return n && (n.count--, n.meta.delete(t)), this;
  },
  SCROLL_PREVENT({ doc: e, d: t, meta: n }) {
    let r = { doc: e, d: t, meta: Ng(n) },
      l = [Sg(), wg(), kg()];
    l.forEach(({ before: i }) => (i == null ? void 0 : i(r))),
      l.forEach(({ after: i }) => (i == null ? void 0 : i(r)));
  },
  SCROLL_ALLOW({ d: e }) {
    e.dispose();
  },
  TEARDOWN({ doc: e }) {
    this.delete(e);
  },
});
mn.subscribe(() => {
  let e = mn.getSnapshot(),
    t = new Map();
  for (let [n] of e) t.set(n, n.documentElement.style.overflow);
  for (let n of e.values()) {
    let r = t.get(n.doc) === "hidden",
      l = n.count !== 0;
    ((l && !r) || (!l && r)) &&
      mn.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n),
      n.count === 0 && mn.dispatch("TEARDOWN", n);
  }
});
function Eg(e, t, n) {
  let r = vg(mn),
    l = e ? r.get(e) : void 0,
    i = l ? l.count > 0 : !1;
  return (
    nt(() => {
      if (!(!e || !t))
        return mn.dispatch("PUSH", e, n), () => mn.dispatch("POP", e, n);
    }, [t, e]),
    i
  );
}
let So = new Map(),
  kr = new Map();
function Wu(e, t = !0) {
  nt(() => {
    var n;
    if (!t) return;
    let r = typeof e == "function" ? e() : e.current;
    if (!r) return;
    function l() {
      var o;
      if (!r) return;
      let s = (o = kr.get(r)) != null ? o : 1;
      if ((s === 1 ? kr.delete(r) : kr.set(r, s - 1), s !== 1)) return;
      let u = So.get(r);
      u &&
        (u["aria-hidden"] === null
          ? r.removeAttribute("aria-hidden")
          : r.setAttribute("aria-hidden", u["aria-hidden"]),
        (r.inert = u.inert),
        So.delete(r));
    }
    let i = (n = kr.get(r)) != null ? n : 0;
    return (
      kr.set(r, i + 1),
      i !== 0 ||
        (So.set(r, {
          "aria-hidden": r.getAttribute("aria-hidden"),
          inert: r.inert,
        }),
        r.setAttribute("aria-hidden", "true"),
        (r.inert = !0)),
      l
    );
  }, [e, t]);
}
function jg({
  defaultContainers: e = [],
  portals: t,
  mainTreeNodeRef: n,
} = {}) {
  var r;
  let l = g.useRef((r = n == null ? void 0 : n.current) != null ? r : null),
    i = sl(l),
    o = Z(() => {
      var s, u, c;
      let f = [];
      for (let p of e)
        p !== null &&
          (p instanceof HTMLElement
            ? f.push(p)
            : "current" in p &&
              p.current instanceof HTMLElement &&
              f.push(p.current));
      if (t != null && t.current) for (let p of t.current) f.push(p);
      for (let p of (s =
        i == null ? void 0 : i.querySelectorAll("html > *, body > *")) != null
        ? s
        : [])
        p !== document.body &&
          p !== document.head &&
          p instanceof HTMLElement &&
          p.id !== "headlessui-portal-root" &&
          (p.contains(l.current) ||
            p.contains(
              (c = (u = l.current) == null ? void 0 : u.getRootNode()) == null
                ? void 0
                : c.host
            ) ||
            f.some((y) => p.contains(y)) ||
            f.push(p));
      return f;
    });
  return {
    resolveContainers: o,
    contains: Z((s) => o().some((u) => u.contains(s))),
    mainTreeNodeRef: l,
    MainTreeNode: g.useMemo(
      () =>
        function () {
          return n != null
            ? null
            : F.createElement(ys, { features: gi.Hidden, ref: l });
        },
      [l, n]
    ),
  };
}
let ka = g.createContext(() => {});
ka.displayName = "StackContext";
var Ss = ((e) => ((e[(e.Add = 0)] = "Add"), (e[(e.Remove = 1)] = "Remove"), e))(
  Ss || {}
);
function Cg() {
  return g.useContext(ka);
}
function bg({ children: e, onUpdate: t, type: n, element: r, enabled: l }) {
  let i = Cg(),
    o = Z((...s) => {
      t == null || t(...s), i(...s);
    });
  return (
    nt(() => {
      let s = l === void 0 || l === !0;
      return (
        s && o(0, n, r),
        () => {
          s && o(1, n, r);
        }
      );
    }, [o, n, r, l]),
    F.createElement(ka.Provider, { value: o }, e)
  );
}
let Cf = g.createContext(null);
function bf() {
  let e = g.useContext(Cf);
  if (e === null) {
    let t = new Error(
      "You used a <Description /> component, but it is not inside a relevant parent."
    );
    throw (Error.captureStackTrace && Error.captureStackTrace(t, bf), t);
  }
  return e;
}
function Pg() {
  let [e, t] = g.useState([]);
  return [
    e.length > 0 ? e.join(" ") : void 0,
    g.useMemo(
      () =>
        function (n) {
          let r = Z(
              (i) => (
                t((o) => [...o, i]),
                () =>
                  t((o) => {
                    let s = o.slice(),
                      u = s.indexOf(i);
                    return u !== -1 && s.splice(u, 1), s;
                  })
              )
            ),
            l = g.useMemo(
              () => ({
                register: r,
                slot: n.slot,
                name: n.name,
                props: n.props,
              }),
              [r, n.slot, n.name, n.props]
            );
          return F.createElement(Cf.Provider, { value: l }, n.children);
        },
      [t]
    ),
  ];
}
let Tg = "p";
function Og(e, t) {
  let n = sr(),
    { id: r = `headlessui-description-${n}`, ...l } = e,
    i = bf(),
    o = mt(t);
  nt(() => i.register(r), [r, i.register]);
  let s = { ref: o, ...i.props, id: r };
  return rt({
    ourProps: s,
    theirProps: l,
    slot: i.slot || {},
    defaultTag: Tg,
    name: i.name || "Description",
  });
}
let Dg = Ge(Og),
  _g = Object.assign(Dg, {});
var Mg = ((e) => (
    (e[(e.Open = 0)] = "Open"), (e[(e.Closed = 1)] = "Closed"), e
  ))(Mg || {}),
  Lg = ((e) => ((e[(e.SetTitleId = 0)] = "SetTitleId"), e))(Lg || {});
let $g = {
    0(e, t) {
      return e.titleId === t.id ? e : { ...e, titleId: t.id };
    },
  },
  yi = g.createContext(null);
yi.displayName = "DialogContext";
function ul(e) {
  let t = g.useContext(yi);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw (Error.captureStackTrace && Error.captureStackTrace(n, ul), n);
  }
  return t;
}
function Fg(e, t, n = () => [document.body]) {
  Eg(e, t, (r) => {
    var l;
    return { containers: [...((l = r.containers) != null ? l : []), n] };
  });
}
function Rg(e, t) {
  return Se(t.type, $g, e, t);
}
let zg = "div",
  Ig = hi.RenderStrategy | hi.Static;
function Ag(e, t) {
  let n = sr(),
    {
      id: r = `headlessui-dialog-${n}`,
      open: l,
      onClose: i,
      initialFocus: o,
      role: s = "dialog",
      __demoMode: u = !1,
      ...c
    } = e,
    [f, p] = g.useState(0),
    y = g.useRef(!1);
  s = (function () {
    return s === "dialog" || s === "alertdialog"
      ? s
      : (y.current ||
          ((y.current = !0),
          console.warn(
            `Invalid role [${s}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`
          )),
        "dialog");
  })();
  let x = Sa();
  l === void 0 && x !== null && (l = (x & He.Open) === He.Open);
  let w = g.useRef(null),
    S = mt(w, t),
    C = sl(w),
    m = e.hasOwnProperty("open") || x !== null,
    d = e.hasOwnProperty("onClose");
  if (!m && !d)
    throw new Error(
      "You have to provide an `open` and an `onClose` prop to the `Dialog` component."
    );
  if (!m)
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
  if (typeof i != "function")
    throw new Error(
      `You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${i}`
    );
  let h = l ? 0 : 1,
    [v, N] = g.useReducer(Rg, {
      titleId: null,
      descriptionId: null,
      panelRef: g.createRef(),
    }),
    E = Z(() => i(!1)),
    P = Z((V) => N({ type: 0, id: V })),
    T = or() ? (u ? !1 : h === 0) : !1,
    R = f > 1,
    M = g.useContext(yi) !== null,
    [ee, ue] = rg(),
    le = {
      get current() {
        var V;
        return (V = v.panelRef.current) != null ? V : w.current;
      },
    },
    {
      resolveContainers: Ne,
      mainTreeNodeRef: X,
      MainTreeNode: oe,
    } = jg({ portals: ee, defaultContainers: [le] }),
    Q = R ? "parent" : "leaf",
    b = x !== null ? (x & He.Closing) === He.Closing : !1,
    k = M || b ? !1 : T,
    O = g.useCallback(() => {
      var V, Ie;
      return (Ie = Array.from(
        (V = C == null ? void 0 : C.querySelectorAll("body > *")) != null
          ? V
          : []
      ).find((L) =>
        L.id === "headlessui-portal-root"
          ? !1
          : L.contains(X.current) && L instanceof HTMLElement
      )) != null
        ? Ie
        : null;
    }, [X]);
  Wu(O, k);
  let $ = R ? !0 : T,
    A = g.useCallback(() => {
      var V, Ie;
      return (Ie = Array.from(
        (V =
          C == null
            ? void 0
            : C.querySelectorAll("[data-headlessui-portal]")) != null
          ? V
          : []
      ).find((L) => L.contains(X.current) && L instanceof HTMLElement)) != null
        ? Ie
        : null;
    }, [X]);
  Wu(A, $),
    L0(
      Ne,
      (V) => {
        V.preventDefault(), E();
      },
      !(!T || R)
    );
  let W = !(R || h !== 0);
  xf(C == null ? void 0 : C.defaultView, "keydown", (V) => {
    W &&
      (V.defaultPrevented ||
        (V.key === vf.Escape &&
          (V.preventDefault(), V.stopPropagation(), E())));
  }),
    Fg(C, !(b || h !== 0 || M), Ne),
    g.useEffect(() => {
      if (h !== 0 || !w.current) return;
      let V = new ResizeObserver((Ie) => {
        for (let L of Ie) {
          let z = L.target.getBoundingClientRect();
          z.x === 0 && z.y === 0 && z.width === 0 && z.height === 0 && E();
        }
      });
      return V.observe(w.current), () => V.disconnect();
    }, [h, w, E]);
  let [De, lt] = Pg(),
    ar = g.useMemo(
      () => [{ dialogState: h, close: E, setTitleId: P }, v],
      [h, v, E, P]
    ),
    Pn = g.useMemo(() => ({ open: h === 0 }), [h]),
    ur = {
      ref: S,
      id: r,
      role: s,
      "aria-modal": h === 0 ? !0 : void 0,
      "aria-labelledby": v.titleId,
      "aria-describedby": De,
    };
  return F.createElement(
    bg,
    {
      type: "Dialog",
      enabled: h === 0,
      element: w,
      onUpdate: Z((V, Ie) => {
        Ie === "Dialog" &&
          Se(V, {
            [Ss.Add]: () => p((L) => L + 1),
            [Ss.Remove]: () => p((L) => L - 1),
          });
      }),
    },
    F.createElement(
      vs,
      { force: !0 },
      F.createElement(
        ws,
        null,
        F.createElement(
          yi.Provider,
          { value: ar },
          F.createElement(
            ws.Group,
            { target: w },
            F.createElement(
              vs,
              { force: !1 },
              F.createElement(
                lt,
                { slot: Pn, name: "Dialog.Description" },
                F.createElement(
                  Sr,
                  {
                    initialFocus: o,
                    containers: Ne,
                    features: T
                      ? Se(Q, {
                          parent: Sr.features.RestoreFocus,
                          leaf: Sr.features.All & ~Sr.features.FocusLock,
                        })
                      : Sr.features.None,
                  },
                  F.createElement(
                    ue,
                    null,
                    rt({
                      ourProps: ur,
                      theirProps: c,
                      slot: Pn,
                      defaultTag: zg,
                      features: Ig,
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
    F.createElement(oe, null)
  );
}
let Ug = "div";
function Hg(e, t) {
  let n = sr(),
    { id: r = `headlessui-dialog-overlay-${n}`, ...l } = e,
    [{ dialogState: i, close: o }] = ul("Dialog.Overlay"),
    s = mt(t),
    u = Z((f) => {
      if (f.target === f.currentTarget) {
        if (U0(f.currentTarget)) return f.preventDefault();
        f.preventDefault(), f.stopPropagation(), o();
      }
    }),
    c = g.useMemo(() => ({ open: i === 0 }), [i]);
  return rt({
    ourProps: { ref: s, id: r, "aria-hidden": !0, onClick: u },
    theirProps: l,
    slot: c,
    defaultTag: Ug,
    name: "Dialog.Overlay",
  });
}
let Wg = "div";
function qg(e, t) {
  let n = sr(),
    { id: r = `headlessui-dialog-backdrop-${n}`, ...l } = e,
    [{ dialogState: i }, o] = ul("Dialog.Backdrop"),
    s = mt(t);
  g.useEffect(() => {
    if (o.panelRef.current === null)
      throw new Error(
        "A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing."
      );
  }, [o.panelRef]);
  let u = g.useMemo(() => ({ open: i === 0 }), [i]);
  return F.createElement(
    vs,
    { force: !0 },
    F.createElement(
      ws,
      null,
      rt({
        ourProps: { ref: s, id: r, "aria-hidden": !0 },
        theirProps: l,
        slot: u,
        defaultTag: Wg,
        name: "Dialog.Backdrop",
      })
    )
  );
}
let Bg = "div";
function Qg(e, t) {
  let n = sr(),
    { id: r = `headlessui-dialog-panel-${n}`, ...l } = e,
    [{ dialogState: i }, o] = ul("Dialog.Panel"),
    s = mt(t, o.panelRef),
    u = g.useMemo(() => ({ open: i === 0 }), [i]),
    c = Z((f) => {
      f.stopPropagation();
    });
  return rt({
    ourProps: { ref: s, id: r, onClick: c },
    theirProps: l,
    slot: u,
    defaultTag: Bg,
    name: "Dialog.Panel",
  });
}
let Vg = "h2";
function Yg(e, t) {
  let n = sr(),
    { id: r = `headlessui-dialog-title-${n}`, ...l } = e,
    [{ dialogState: i, setTitleId: o }] = ul("Dialog.Title"),
    s = mt(t);
  g.useEffect(() => (o(r), () => o(null)), [r, o]);
  let u = g.useMemo(() => ({ open: i === 0 }), [i]);
  return rt({
    ourProps: { ref: s, id: r },
    theirProps: l,
    slot: u,
    defaultTag: Vg,
    name: "Dialog.Title",
  });
}
let Gg = Ge(Ag),
  Kg = Ge(qg),
  Xg = Ge(Qg),
  Jg = Ge(Hg),
  Zg = Ge(Yg),
  Nt = Object.assign(Gg, {
    Backdrop: Kg,
    Panel: Xg,
    Overlay: Jg,
    Title: Zg,
    Description: _g,
  });
function ey(e = 0) {
  let [t, n] = g.useState(e),
    r = al(),
    l = g.useCallback(
      (u) => {
        r.current && n((c) => c | u);
      },
      [t, r]
    ),
    i = g.useCallback((u) => !!(t & u), [t]),
    o = g.useCallback(
      (u) => {
        r.current && n((c) => c & ~u);
      },
      [n, r]
    ),
    s = g.useCallback(
      (u) => {
        r.current && n((c) => c ^ u);
      },
      [n]
    );
  return { flags: t, addFlag: l, hasFlag: i, removeFlag: o, toggleFlag: s };
}
function ty(e) {
  let t = { called: !1 };
  return (...n) => {
    if (!t.called) return (t.called = !0), e(...n);
  };
}
function ko(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function No(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
function ny(e, t) {
  let n = bn();
  if (!e) return n.dispose;
  let { transitionDuration: r, transitionDelay: l } = getComputedStyle(e),
    [i, o] = [r, l].map((u) => {
      let [c = 0] = u
        .split(",")
        .filter(Boolean)
        .map((f) => (f.includes("ms") ? parseFloat(f) : parseFloat(f) * 1e3))
        .sort((f, p) => p - f);
      return c;
    }),
    s = i + o;
  if (s !== 0) {
    n.group((c) => {
      c.setTimeout(() => {
        t(), c.dispose();
      }, s),
        c.addEventListener(e, "transitionrun", (f) => {
          f.target === f.currentTarget && c.dispose();
        });
    });
    let u = n.addEventListener(e, "transitionend", (c) => {
      c.target === c.currentTarget && (t(), u());
    });
  } else t();
  return n.add(() => t()), n.dispose;
}
function ry(e, t, n, r) {
  let l = n ? "enter" : "leave",
    i = bn(),
    o = r !== void 0 ? ty(r) : () => {};
  l === "enter" && (e.removeAttribute("hidden"), (e.style.display = ""));
  let s = Se(l, { enter: () => t.enter, leave: () => t.leave }),
    u = Se(l, { enter: () => t.enterTo, leave: () => t.leaveTo }),
    c = Se(l, { enter: () => t.enterFrom, leave: () => t.leaveFrom });
  return (
    No(
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
    ko(e, ...t.base, ...s, ...c),
    i.nextFrame(() => {
      No(e, ...t.base, ...s, ...c),
        ko(e, ...t.base, ...s, ...u),
        ny(
          e,
          () => (No(e, ...t.base, ...s), ko(e, ...t.base, ...t.entered), o())
        );
    }),
    i.dispose
  );
}
function ly({
  immediate: e,
  container: t,
  direction: n,
  classes: r,
  onStart: l,
  onStop: i,
}) {
  let o = al(),
    s = va(),
    u = Tt(n);
  nt(() => {
    e && (u.current = "enter");
  }, [e]),
    nt(() => {
      let c = bn();
      s.add(c.dispose);
      let f = t.current;
      if (f && u.current !== "idle" && o.current)
        return (
          c.dispose(),
          l.current(u.current),
          c.add(
            ry(f, r.current, u.current === "enter", () => {
              c.dispose(), i.current(u.current);
            })
          ),
          c.dispose
        );
    }, [n]);
}
function zt(e = "") {
  return e.split(/\s+/).filter((t) => t.length > 1);
}
let zi = g.createContext(null);
zi.displayName = "TransitionContext";
var iy = ((e) => ((e.Visible = "visible"), (e.Hidden = "hidden"), e))(iy || {});
function oy() {
  let e = g.useContext(zi);
  if (e === null)
    throw new Error(
      "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />."
    );
  return e;
}
function sy() {
  let e = g.useContext(Ii);
  if (e === null)
    throw new Error(
      "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />."
    );
  return e;
}
let Ii = g.createContext(null);
Ii.displayName = "NestingContext";
function Ai(e) {
  return "children" in e
    ? Ai(e.children)
    : e.current
        .filter(({ el: t }) => t.current !== null)
        .filter(({ state: t }) => t === "visible").length > 0;
}
function Pf(e, t) {
  let n = Tt(e),
    r = g.useRef([]),
    l = al(),
    i = va(),
    o = Z((x, w = Qt.Hidden) => {
      let S = r.current.findIndex(({ el: C }) => C === x);
      S !== -1 &&
        (Se(w, {
          [Qt.Unmount]() {
            r.current.splice(S, 1);
          },
          [Qt.Hidden]() {
            r.current[S].state = "hidden";
          },
        }),
        i.microTask(() => {
          var C;
          !Ai(r) && l.current && ((C = n.current) == null || C.call(n));
        }));
    }),
    s = Z((x) => {
      let w = r.current.find(({ el: S }) => S === x);
      return (
        w
          ? w.state !== "visible" && (w.state = "visible")
          : r.current.push({ el: x, state: "visible" }),
        () => o(x, Qt.Unmount)
      );
    }),
    u = g.useRef([]),
    c = g.useRef(Promise.resolve()),
    f = g.useRef({ enter: [], leave: [], idle: [] }),
    p = Z((x, w, S) => {
      u.current.splice(0),
        t &&
          (t.chains.current[w] = t.chains.current[w].filter(([C]) => C !== x)),
        t == null ||
          t.chains.current[w].push([
            x,
            new Promise((C) => {
              u.current.push(C);
            }),
          ]),
        t == null ||
          t.chains.current[w].push([
            x,
            new Promise((C) => {
              Promise.all(f.current[w].map(([m, d]) => d)).then(() => C());
            }),
          ]),
        w === "enter"
          ? (c.current = c.current
              .then(() => (t == null ? void 0 : t.wait.current))
              .then(() => S(w)))
          : S(w);
    }),
    y = Z((x, w, S) => {
      Promise.all(f.current[w].splice(0).map(([C, m]) => m))
        .then(() => {
          var C;
          (C = u.current.shift()) == null || C();
        })
        .then(() => S(w));
    });
  return g.useMemo(
    () => ({
      children: r,
      register: s,
      unregister: o,
      onStart: p,
      onStop: y,
      wait: c,
      chains: f,
    }),
    [s, o, r, p, y, f, c]
  );
}
function ay() {}
let uy = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function qu(e) {
  var t;
  let n = {};
  for (let r of uy) n[r] = (t = e[r]) != null ? t : ay;
  return n;
}
function cy(e) {
  let t = g.useRef(qu(e));
  return (
    g.useEffect(() => {
      t.current = qu(e);
    }, [e]),
    t
  );
}
let dy = "div",
  Tf = hi.RenderStrategy;
function fy(e, t) {
  var n, r;
  let {
      beforeEnter: l,
      afterEnter: i,
      beforeLeave: o,
      afterLeave: s,
      enter: u,
      enterFrom: c,
      enterTo: f,
      entered: p,
      leave: y,
      leaveFrom: x,
      leaveTo: w,
      ...S
    } = e,
    C = g.useRef(null),
    m = mt(C, t),
    d = (n = S.unmount) == null || n ? Qt.Unmount : Qt.Hidden,
    { show: h, appear: v, initial: N } = oy(),
    [E, P] = g.useState(h ? "visible" : "hidden"),
    T = sy(),
    { register: R, unregister: M } = T;
  g.useEffect(() => R(C), [R, C]),
    g.useEffect(() => {
      if (d === Qt.Hidden && C.current) {
        if (h && E !== "visible") {
          P("visible");
          return;
        }
        return Se(E, { hidden: () => M(C), visible: () => R(C) });
      }
    }, [E, C, R, M, h, d]);
  let ee = Tt({
      base: zt(S.className),
      enter: zt(u),
      enterFrom: zt(c),
      enterTo: zt(f),
      entered: zt(p),
      leave: zt(y),
      leaveFrom: zt(x),
      leaveTo: zt(w),
    }),
    ue = cy({ beforeEnter: l, afterEnter: i, beforeLeave: o, afterLeave: s }),
    le = or();
  g.useEffect(() => {
    if (le && E === "visible" && C.current === null)
      throw new Error(
        "Did you forget to passthrough the `ref` to the actual DOM node?"
      );
  }, [C, E, le]);
  let Ne = N && !v,
    X = v && h && N,
    oe = !le || Ne ? "idle" : h ? "enter" : "leave",
    Q = ey(0),
    b = Z((W) =>
      Se(W, {
        enter: () => {
          Q.addFlag(He.Opening), ue.current.beforeEnter();
        },
        leave: () => {
          Q.addFlag(He.Closing), ue.current.beforeLeave();
        },
        idle: () => {},
      })
    ),
    k = Z((W) =>
      Se(W, {
        enter: () => {
          Q.removeFlag(He.Opening), ue.current.afterEnter();
        },
        leave: () => {
          Q.removeFlag(He.Closing), ue.current.afterLeave();
        },
        idle: () => {},
      })
    ),
    O = Pf(() => {
      P("hidden"), M(C);
    }, T),
    $ = g.useRef(!1);
  ly({
    immediate: X,
    container: C,
    classes: ee,
    direction: oe,
    onStart: Tt((W) => {
      ($.current = !0), O.onStart(C, W, b);
    }),
    onStop: Tt((W) => {
      ($.current = !1),
        O.onStop(C, W, k),
        W === "leave" && !Ai(O) && (P("hidden"), M(C));
    }),
  });
  let A = S,
    ze = { ref: m };
  return (
    X
      ? (A = {
          ...A,
          className: mi(
            S.className,
            ...ee.current.enter,
            ...ee.current.enterFrom
          ),
        })
      : $.current &&
        ((A.className = mi(
          S.className,
          (r = C.current) == null ? void 0 : r.className
        )),
        A.className === "" && delete A.className),
    F.createElement(
      Ii.Provider,
      { value: O },
      F.createElement(
        I0,
        { value: Se(E, { visible: He.Open, hidden: He.Closed }) | Q.flags },
        rt({
          ourProps: ze,
          theirProps: A,
          defaultTag: dy,
          features: Tf,
          visible: E === "visible",
          name: "Transition.Child",
        })
      )
    )
  );
}
function py(e, t) {
  let { show: n, appear: r = !1, unmount: l = !0, ...i } = e,
    o = g.useRef(null),
    s = mt(o, t);
  or();
  let u = Sa();
  if (
    (n === void 0 && u !== null && (n = (u & He.Open) === He.Open),
    ![!0, !1].includes(n))
  )
    throw new Error(
      "A <Transition /> is used but it is missing a `show={true | false}` prop."
    );
  let [c, f] = g.useState(n ? "visible" : "hidden"),
    p = Pf(() => {
      f("hidden");
    }),
    [y, x] = g.useState(!0),
    w = g.useRef([n]);
  nt(() => {
    y !== !1 &&
      w.current[w.current.length - 1] !== n &&
      (w.current.push(n), x(!1));
  }, [w, n]);
  let S = g.useMemo(() => ({ show: n, appear: r, initial: y }), [n, r, y]);
  g.useEffect(() => {
    if (n) f("visible");
    else if (!Ai(p)) f("hidden");
    else {
      let h = o.current;
      if (!h) return;
      let v = h.getBoundingClientRect();
      v.x === 0 && v.y === 0 && v.width === 0 && v.height === 0 && f("hidden");
    }
  }, [n, p]);
  let C = { unmount: l },
    m = Z(() => {
      var h;
      y && x(!1), (h = e.beforeEnter) == null || h.call(e);
    }),
    d = Z(() => {
      var h;
      y && x(!1), (h = e.beforeLeave) == null || h.call(e);
    });
  return F.createElement(
    Ii.Provider,
    { value: p },
    F.createElement(
      zi.Provider,
      { value: S },
      rt({
        ourProps: {
          ...C,
          as: g.Fragment,
          children: F.createElement(Of, {
            ref: s,
            ...C,
            ...i,
            beforeEnter: m,
            beforeLeave: d,
          }),
        },
        theirProps: {},
        defaultTag: g.Fragment,
        features: Tf,
        visible: c === "visible",
        name: "Transition",
      })
    )
  );
}
function my(e, t) {
  let n = g.useContext(zi) !== null,
    r = Sa() !== null;
  return F.createElement(
    F.Fragment,
    null,
    !n && r
      ? F.createElement(ks, { ref: t, ...e })
      : F.createElement(Of, { ref: t, ...e })
  );
}
let ks = Ge(py),
  Of = Ge(fy),
  hy = Ge(my),
  Et = Object.assign(ks, { Child: hy, Root: ks }),
  hn = null;
const gy = async () => {
    if (hn) return hn;
    try {
      const e = await fetch("../config.txt");
      if (!e.ok) throw new Error("Failed to load configuration");
      return (hn = await e.json()), hn;
    } catch (e) {
      throw (console.error("Error loading config:", e), e);
    }
  },
  yy = (e) => {
    if (!hn) throw new Error("Configuration not loaded");
    return `${hn.domain}${e}`;
  },
  vy = () => hn,
  ut = async (e, t = {}) => {
    const n = yy(e),
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
        i = await l.text();
      let o;
      try {
        o = JSON.parse(i);
      } catch (s) {
        throw (
          (console.error("Failed to parse response as JSON:", s),
          new Error("Invalid JSON response"))
        );
      }
      if ((console.log("Response:", o), console.groupEnd(), !l.ok))
        throw new Error(`HTTP error! status: ${l.status}`);
      return o;
    } catch (l) {
      throw (console.error("API Error:", l), console.groupEnd(), l);
    }
  },
  Df = ({ value: e, onChange: t, onClose: n }) => {
    const [r, l] = F.useState(e),
      [i, o] = F.useState(null),
      [s, u] = F.useState(null),
      [c, f] = F.useState(!1),
      [p, y] = F.useState(!0);
    g.useEffect(() => {
      const v = (N) => {
        N.key === "Escape" && n();
      };
      return (
        window.addEventListener("keydown", v),
        () => window.removeEventListener("keydown", v)
      );
    }, [n]);
    const x = (v) => {
        p
          ? (l(v), y(!1))
          : c
          ? (l(v), f(!1))
          : i && !s
          ? (u(r), l(v))
          : l(r === "0" ? v : r + v);
      },
      w = (v) => {
        s && S(), o(v), f(!1), y(!1);
      },
      S = () => {
        if (!s || !i) return;
        const v = parseFloat(s),
          N = parseFloat(r);
        let E = 0;
        switch (i) {
          case "+":
            E = v + N;
            break;
          case "-":
            E = v - N;
            break;
          case "×":
            E = v * N;
            break;
          case "÷":
            if (N === 0) {
              alert("不能除以零");
              return;
            }
            E = v / N;
            break;
        }
        l(Math.round(E).toString()), u(null), o(null), f(!0), y(!1);
      },
      C = () => {
        l("0"), u(null), o(null), f(!1), y(!0);
      },
      m = () => {
        let v = r;
        if (s && i) {
          const N = parseFloat(s),
            E = parseFloat(r);
          let P = 0;
          switch (i) {
            case "+":
              P = N + E;
              break;
            case "-":
              P = N - E;
              break;
            case "×":
              P = N * E;
              break;
            case "÷":
              if (E === 0) {
                alert("不能除以零");
                return;
              }
              P = N / E;
              break;
          }
          v = Math.round(P).toString();
        }
        t(v),
          setTimeout(() => {
            n();
          }, 0);
      },
      d = (v) => {
        v.preventDefault();
        const N = v.key;
        N >= "0" && N <= "9"
          ? x(N)
          : N === "+" || N === "-"
          ? w(N)
          : N === "*"
          ? w("×")
          : N === "/"
          ? w("÷")
          : N === "Enter"
          ? m()
          : N === "Escape"
          ? n()
          : N === "Backspace" && l(r.slice(0, -1) || "0");
      },
      h = a.jsx("div", {
        className:
          "fixed inset-0 flex items-center justify-center bg-black/25 backdrop-blur-sm",
        style: { zIndex: 999999 },
        onClick: n,
        children: a.jsxs("div", {
          className:
            "w-[90vw] max-w-md bg-white rounded-lg shadow-xl p-4 md:p-6",
          style: { zIndex: 1e6 },
          onClick: (v) => v.stopPropagation(),
          children: [
            a.jsxs("div", {
              className: "flex justify-between items-center mb-4",
              children: [
                a.jsx("div", {
                  className: "text-sm font-medium text-gray-700",
                }),
                a.jsx("button", {
                  onClick: n,
                  className:
                    "p-1.5 text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded-lg transition-colors duration-150",
                  children: a.jsx(ya, { size: 20 }),
                }),
              ],
            }),
            a.jsx("div", {
              className: "mb-6",
              children: a.jsx("input", {
                type: "text",
                value: r,
                readOnly: !0,
                onKeyDown: d,
                className:
                  "w-full px-3 py-2 text-xl font-medium tracking-wider border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-gray-900",
              }),
            }),
            a.jsxs("div", {
              className: "grid grid-cols-4 gap-2",
              children: [
                ["7", "8", "9", "÷"].map((v) =>
                  a.jsx(
                    "button",
                    {
                      onClick: (N) => {
                        N.stopPropagation(), v === "÷" ? w(v) : x(v);
                      },
                      className: `py-4 text-sm font-medium rounded-lg transition-all duration-150 shadow-sm active:scale-95 ${
                        v === "÷"
                          ? "bg-blue-50 hover:bg-blue-100 text-blue-600 hover:text-blue-700"
                          : "bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-gray-900"
                      }`,
                      children: v,
                    },
                    v
                  )
                ),
                ["4", "5", "6", "×"].map((v) =>
                  a.jsx(
                    "button",
                    {
                      onClick: (N) => {
                        N.stopPropagation(), v === "×" ? w(v) : x(v);
                      },
                      className: `py-4 text-sm font-medium rounded-lg transition-all duration-150 shadow-sm active:scale-95 ${
                        v === "×"
                          ? "bg-blue-50 hover:bg-blue-100 text-blue-600 hover:text-blue-700"
                          : "bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-gray-900"
                      }`,
                      children: v,
                    },
                    v
                  )
                ),
                ["1", "2", "3", "-"].map((v) =>
                  a.jsx(
                    "button",
                    {
                      onClick: (N) => {
                        N.stopPropagation(), v === "-" ? w(v) : x(v);
                      },
                      className: `py-4 text-sm font-medium rounded-lg transition-all duration-150 shadow-sm active:scale-95 ${
                        v === "-"
                          ? "bg-blue-50 hover:bg-blue-100 text-blue-600 hover:text-blue-700"
                          : "bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-gray-900"
                      }`,
                      children: v,
                    },
                    v
                  )
                ),
                ["0", ".", "=", "+"].map((v) =>
                  a.jsx(
                    "button",
                    {
                      onClick: (N) => {
                        N.stopPropagation(),
                          v === "=" ? S() : v === "+" ? w(v) : x(v);
                      },
                      className: `py-4 text-sm font-medium rounded-lg transition-all duration-150 shadow-sm active:scale-95 ${
                        v === "="
                          ? "bg-green-500 hover:bg-green-600 text-white"
                          : v === "+"
                          ? "bg-blue-50 hover:bg-blue-100 text-blue-600 hover:text-blue-700"
                          : "bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-gray-900"
                      }`,
                      children: v,
                    },
                    v
                  )
                ),
              ],
            }),
            a.jsxs("div", {
              className: "mt-4 flex justify-between gap-3",
              children: [
                a.jsx("button", {
                  onClick: (v) => {
                    v.stopPropagation(), C();
                  },
                  className:
                    "flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-all duration-150 shadow-sm active:scale-95 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50",
                  children: "清除",
                }),
                a.jsx("button", {
                  onClick: (v) => {
                    v.stopPropagation(), m();
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
    return $i.createPortal(h, document.body);
  },
  xy = {
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
  _f = g.createContext(void 0),
  wy = ({ children: e }) => {
    const [t, n] = g.useState("zh"),
      r = () => {
        n((i) => (i === "zh" ? "en" : "zh"));
      },
      l = (i) => xy[t][i] || i;
    return a.jsx(_f.Provider, {
      value: { language: t, toggleLanguage: r, t: l },
      children: e,
    });
  },
  wt = () => {
    const e = g.useContext(_f);
    if (e === void 0)
      throw new Error("useLanguage must be used within a LanguageProvider");
    return e;
  },
  Sy = ({ startDate: e, endDate: t, onDateChange: n }) => {
    const { t: r } = wt(),
      l = (i, o, s, u) => {
        const c = new Date(`${i}T${o}`),
          f = new Date(`${s}T${u}`);
        n(c, f);
      };
    return a.jsxs("div", {
      className: "space-y-6 lg:space-y-0 lg:flex lg:items-start lg:gap-6",
      children: [
        a.jsxs("div", {
          className: "lg:w-[200px]",
          children: [
            a.jsx("label", {
              className: "block text-base font-medium text-gray-700 mb-2",
              children: r("time.type"),
            }),
            a.jsx("select", {
              defaultValue: "操作時間",
              className:
                "w-full border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-base",
              children: a.jsx("option", {
                value: "操作時間",
                children: r("time.operation"),
              }),
            }),
          ],
        }),
        a.jsxs("div", {
          className: "flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6",
          children: [
            a.jsxs("div", {
              className: "space-y-2",
              children: [
                a.jsx("label", {
                  className: "block text-base font-medium text-gray-700",
                  children: r("time.start"),
                }),
                a.jsxs("div", {
                  className: "flex flex-col sm:flex-row gap-3",
                  children: [
                    a.jsx("input", {
                      type: "date",
                      value: ce(e, "yyyy-MM-dd"),
                      onChange: (i) =>
                        l(
                          i.target.value,
                          ce(e, "HH:mm:ss"),
                          ce(t, "yyyy-MM-dd"),
                          ce(t, "HH:mm:ss")
                        ),
                      className:
                        "w-full sm:w-[180px] border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-base",
                    }),
                    a.jsx("input", {
                      type: "time",
                      value: ce(e, "HH:mm:ss"),
                      onChange: (i) =>
                        l(
                          ce(e, "yyyy-MM-dd"),
                          i.target.value,
                          ce(t, "yyyy-MM-dd"),
                          ce(t, "HH:mm:ss")
                        ),
                      className:
                        "w-full sm:w-[180px] border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-base",
                      step: "1",
                    }),
                  ],
                }),
              ],
            }),
            a.jsxs("div", {
              className: "space-y-2",
              children: [
                a.jsx("label", {
                  className: "block text-base font-medium text-gray-700",
                  children: r("time.end"),
                }),
                a.jsxs("div", {
                  className: "flex flex-col sm:flex-row gap-3",
                  children: [
                    a.jsx("input", {
                      type: "date",
                      value: ce(t, "yyyy-MM-dd"),
                      onChange: (i) =>
                        l(
                          ce(e, "yyyy-MM-dd"),
                          ce(e, "HH:mm:ss"),
                          i.target.value,
                          ce(t, "HH:mm:ss")
                        ),
                      className:
                        "w-full sm:w-[180px] border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-base",
                    }),
                    a.jsx("input", {
                      type: "time",
                      value: ce(t, "HH:mm:ss"),
                      onChange: (i) =>
                        l(
                          ce(e, "yyyy-MM-dd"),
                          ce(e, "HH:mm:ss"),
                          ce(t, "yyyy-MM-dd"),
                          i.target.value
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
  ky = ({
    orders: e,
    startDate: t,
    endDate: n,
    onDateChange: r,
    isLoading: l,
  }) => {
    const { t: i } = wt(),
      [o, s] = g.useState(null),
      [u, c] = g.useState(!1),
      [f, p] = g.useState(!1),
      [y, x] = g.useState(!1),
      [w, S] = g.useState(""),
      [C, m] = g.useState(null),
      [d, h] = g.useState(!1),
      [v, N] = g.useState("name"),
      [E, P] = g.useState(""),
      [T, R] = g.useState("all"),
      M = (k) => {
        if (!k || k === "0001-01-01T00:00:00" || k === "1/01/01 00:00:00")
          return "-";
        try {
          let O;
          if (k.includes("/")) {
            const [$, A] = k.split(" "),
              [ze, W, Ee] = $.split("/");
            O = new Date(
              `${ze}-${W.padStart(2, "0")}-${Ee.padStart(2, "0")}T${A}`
            );
          } else O = new Date(k);
          return ce(O, "yyyy-MM-dd HH:mm:ss");
        } catch {
          return k;
        }
      },
      ee = [
        { value: "name", label: i("app.filter.name") },
        { value: "code", label: i("app.filter.code") },
        { value: "requestingUnit", label: i("app.requestingUnit") },
      ],
      ue = [
        { value: "all", label: i("app.requisitionType.all") },
        { value: "一般申領", label: i("app.requisitionType.general") },
        { value: "緊急申領", label: i("app.requisitionType.urgent") },
      ],
      le = e.filter((k) => {
        if (E) {
          const O = E.toLowerCase();
          let $ = !1;
          switch (v) {
            case "name":
              $ = k.name.toLowerCase().includes(O);
              break;
            case "code":
              $ = k.code.toLowerCase().includes(O);
              break;
            case "requestingUnit":
              $ = k.requestingUnit.toLowerCase().includes(O);
              break;
            default:
              $ = !0;
          }
          if (!$) return !1;
        }
        return T !== "all" ? k.actionType === T : !0;
      }),
      Ne = async () => {
        if (o) {
          h(!0), m(null);
          try {
            const k = await ut("/api/materialRequisition/delete_by_guid", {
              method: "POST",
              body: { ValueAry: [o.GUID] },
            });
            if (k.Code === 200) p(!1), c(!1), r(t, n);
            else throw new Error(k.Result || "刪除失敗");
          } catch (k) {
            m(k instanceof Error ? k.message : "系統錯誤，請稍後再試");
          } finally {
            h(!1);
          }
        }
      },
      X = async () => {
        if (o) {
          if (!w || isNaN(Number(w)) || Number(w) <= 0) {
            m("請輸入有效的數量");
            return;
          }
          h(!0), m(null);
          try {
            const k = await ut("/api/materialRequisition/update_qty", {
              method: "POST",
              body: { Data: { GUID: o.GUID, requestedQuantity: w } },
            });
            if (k.Code === 200) c(!1), r(t, n);
            else throw new Error(k.Result || "更新失敗");
          } catch (k) {
            m(k instanceof Error ? k.message : "系統錯誤，請稍後再試");
          } finally {
            h(!1);
          }
        }
      },
      oe = (k) => {
        k.state === "等待過帳" &&
          (s(k), S(k.requestedQuantity), m(null), c(!0));
      },
      Q = (k) => {
        k.preventDefault();
      },
      b = (k) => {
        const O = k.state === "等待過帳";
        return a.jsxs(
          "div",
          {
            onClick: () => oe(k),
            className: `
          p-4 rounded-lg border mb-4 transition-colors duration-150
          ${
            O
              ? "bg-yellow-50 hover:bg-yellow-100 cursor-pointer border-yellow-200"
              : "bg-white border-gray-200"
          }
        `,
            children: [
              a.jsxs("div", {
                className: "flex justify-between items-start mb-3",
                children: [
                  a.jsxs("div", {
                    className: "space-y-1",
                    children: [
                      a.jsx("div", {
                        className: "font-medium text-gray-900",
                        children: k.name,
                      }),
                      a.jsx("div", {
                        className: "font-mono text-sm text-gray-600",
                        children: k.code,
                      }),
                    ],
                  }),
                  a.jsx("span", {
                    className: `px-2 py-1 rounded-full text-xs font-medium ${
                      k.state === "等待過帳"
                        ? "bg-yellow-100 text-yellow-800"
                        : k.state === "已過帳"
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-800"
                    }`,
                    children: k.state,
                  }),
                ],
              }),
              a.jsxs("div", {
                className: "grid grid-cols-2 gap-x-4 gap-y-3",
                children: [
                  a.jsxs("div", {
                    children: [
                      a.jsx("div", {
                        className: "text-gray-500 mb-1",
                        children: i("app.requestingUnit"),
                      }),
                      a.jsx("div", {
                        className: "font-medium",
                        children: k.requestingUnit,
                      }),
                    ],
                  }),
                  a.jsxs("div", {
                    children: [
                      a.jsx("div", {
                        className: "text-gray-500 mb-1",
                        children: i("app.requisitionType"),
                      }),
                      a.jsx("div", {
                        className: "font-medium",
                        children: k.actionType,
                      }),
                    ],
                  }),
                  a.jsxs("div", {
                    children: [
                      a.jsx("div", {
                        className: "text-gray-500 mb-1",
                        children: i("table.requestedQuantity"),
                      }),
                      a.jsx("div", {
                        className: "font-medium",
                        children: k.requestedQuantity,
                      }),
                    ],
                  }),
                  a.jsxs("div", {
                    children: [
                      a.jsx("div", {
                        className: "text-gray-500 mb-1",
                        children: i("table.actualQuantity"),
                      }),
                      a.jsx("div", {
                        className: "font-medium",
                        children: k.actualQuantity || "-",
                      }),
                    ],
                  }),
                  a.jsxs("div", {
                    children: [
                      a.jsx("div", {
                        className: "text-gray-500 mb-1",
                        children: i("table.requestingPerson"),
                      }),
                      a.jsx("div", {
                        className: "font-medium",
                        children: k.requestingPerson || "-",
                      }),
                    ],
                  }),
                  a.jsxs("div", {
                    children: [
                      a.jsx("div", {
                        className: "text-gray-500 mb-1",
                        children: i("table.issuingPerson"),
                      }),
                      a.jsx("div", {
                        className: "font-medium",
                        children: k.issuingPerson || "-",
                      }),
                    ],
                  }),
                  a.jsxs("div", {
                    children: [
                      a.jsx("div", {
                        className: "text-gray-500 mb-1",
                        children: i("table.issuingUnit"),
                      }),
                      a.jsx("div", {
                        className: "font-medium",
                        children: k.issuingUnit || "-",
                      }),
                    ],
                  }),
                  a.jsxs("div", {
                    children: [
                      a.jsx("div", {
                        className: "text-gray-500 mb-1",
                        children: i("table.requestTime"),
                      }),
                      a.jsx("div", {
                        className: "font-medium",
                        children: M(k.requestTime),
                      }),
                    ],
                  }),
                  a.jsxs("div", {
                    children: [
                      a.jsx("div", {
                        className: "text-gray-500 mb-1",
                        children: i("table.issueTime"),
                      }),
                      a.jsx("div", {
                        className: "font-medium",
                        children: M(k.issueTime),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          },
          k.GUID
        );
      };
    return a.jsxs("div", {
      children: [
        a.jsx("h2", {
          className: "text-xl font-bold text-gray-900 mb-6",
          children: i("app.orders.title"),
        }),
        a.jsx("div", {
          className: "mb-6",
          children: a.jsx(Sy, { startDate: t, endDate: n, onDateChange: r }),
        }),
        a.jsx("div", {
          className: "mb-6",
          children: a.jsxs("form", {
            onSubmit: Q,
            className: "flex flex-wrap items-center gap-4",
            children: [
              a.jsxs("div", {
                className: "flex gap-3",
                children: [
                  a.jsx("select", {
                    value: v,
                    onChange: (k) => N(k.target.value),
                    className:
                      "w-32 px-3 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-colors text-base",
                    children: ee.map((k) =>
                      a.jsx(
                        "option",
                        { value: k.value, children: k.label },
                        k.value
                      )
                    ),
                  }),
                  a.jsxs("div", {
                    className: "relative w-64",
                    children: [
                      a.jsx("input", {
                        type: "text",
                        value: E,
                        onChange: (k) => P(k.target.value),
                        placeholder: i("app.filter.placeholder"),
                        className:
                          "w-full pl-10 pr-3 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-colors text-base",
                      }),
                      a.jsx(cf, {
                        className: "absolute left-3 top-2.5 text-gray-400",
                        size: 20,
                      }),
                    ],
                  }),
                ],
              }),
              a.jsxs("div", {
                className: "flex items-center gap-4 ml-auto",
                children: [
                  a.jsxs("span", {
                    className:
                      "text-base font-medium text-gray-700 whitespace-nowrap",
                    children: [i("app.requisitionType"), ":"],
                  }),
                  a.jsx("div", {
                    className: "flex gap-4",
                    children: ue.map((k) =>
                      a.jsxs(
                        "label",
                        {
                          className:
                            "flex items-center gap-2 cursor-pointer whitespace-nowrap",
                          children: [
                            a.jsx("input", {
                              type: "radio",
                              name: "requisitionType",
                              value: k.value,
                              checked: T === k.value,
                              onChange: (O) => R(O.target.value),
                              className:
                                "h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300",
                            }),
                            a.jsx("span", {
                              className: "text-base text-gray-700",
                              children: k.label,
                            }),
                          ],
                        },
                        k.value
                      )
                    ),
                  }),
                ],
              }),
            ],
          }),
        }),
        C &&
          a.jsxs("div", {
            className:
              "mb-6 p-4 bg-red-100 text-red-700 rounded-md flex items-center gap-2",
            children: [
              a.jsx(pi, { size: 20 }),
              a.jsx("span", { className: "text-base", children: C }),
            ],
          }),
        l
          ? a.jsxs("div", {
              className: "text-center py-8",
              children: [
                a.jsx("div", {
                  className:
                    "animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto",
                }),
                a.jsx("p", {
                  className: "mt-2 text-base text-gray-600",
                  children: i("app.orders.loading"),
                }),
              ],
            })
          : le.length === 0
          ? a.jsx("div", {
              className: "text-center py-8 text-base text-gray-500",
              children: i("app.orders.empty"),
            })
          : a.jsxs(a.Fragment, {
              children: [
                a.jsx("div", {
                  className: "sm:hidden space-y-4",
                  children: le.map(b),
                }),
                a.jsx("div", {
                  className:
                    "hidden sm:block overflow-x-auto border border-gray-200 rounded-lg",
                  children: a.jsxs("table", {
                    className: "min-w-full",
                    children: [
                      a.jsx("thead", {
                        className: "bg-gray-50",
                        children: a.jsxs("tr", {
                          children: [
                            a.jsx("th", {
                              className:
                                "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                              children: i("app.requestingUnit"),
                            }),
                            a.jsx("th", {
                              className:
                                "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                              children: i("app.requisitionType"),
                            }),
                            a.jsx("th", {
                              className:
                                "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                              children: i("table.drugCode"),
                            }),
                            a.jsx("th", {
                              className:
                                "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                              children: i("table.drugName"),
                            }),
                            a.jsx("th", {
                              className:
                                "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                              children: i("table.requestedQuantity"),
                            }),
                            a.jsx("th", {
                              className:
                                "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                              children: i("table.actualQuantity"),
                            }),
                            a.jsx("th", {
                              className:
                                "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                              children: i("table.requestTime"),
                            }),
                            a.jsx("th", {
                              className:
                                "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                              children: i("table.requestingPerson"),
                            }),
                            a.jsx("th", {
                              className:
                                "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                              children: i("table.status"),
                            }),
                            a.jsx("th", {
                              className:
                                "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                              children: i("table.issueTime"),
                            }),
                            a.jsx("th", {
                              className:
                                "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                              children: i("table.issuingPerson"),
                            }),
                            a.jsx("th", {
                              className:
                                "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                              children: i("table.issuingUnit"),
                            }),
                          ],
                        }),
                      }),
                      a.jsx("tbody", {
                        className: "bg-white divide-y divide-gray-200",
                        children: le.map((k) => {
                          const O = k.state === "等待過帳";
                          return a.jsxs(
                            "tr",
                            {
                              onClick: () => oe(k),
                              className: `
                        transition-colors duration-150
                        ${
                          O
                            ? "bg-yellow-50 hover:bg-yellow-100 cursor-pointer"
                            : "hover:bg-gray-50"
                        }
                      `,
                              children: [
                                a.jsx("td", {
                                  className:
                                    "px-6 py-3 whitespace-nowrap text-base text-gray-900",
                                  children: k.requestingUnit,
                                }),
                                a.jsx("td", {
                                  className:
                                    "px-6 py-3 whitespace-nowrap text-base text-gray-900",
                                  children: k.actionType,
                                }),
                                a.jsx("td", {
                                  className:
                                    "px-6 py-3 whitespace-nowrap font-mono text-base text-gray-900",
                                  children: k.code,
                                }),
                                a.jsx("td", {
                                  className:
                                    "px-6 py-3 whitespace-nowrap text-base text-gray-900",
                                  children: k.name,
                                }),
                                a.jsx("td", {
                                  className:
                                    "px-6 py-3 whitespace-nowrap text-base font-medium text-gray-900",
                                  children: k.requestedQuantity,
                                }),
                                a.jsx("td", {
                                  className:
                                    "px-6 py-3 whitespace-nowrap text-base font-medium text-gray-900",
                                  children: k.actualQuantity || "-",
                                }),
                                a.jsx("td", {
                                  className:
                                    "px-6 py-3 whitespace-nowrap text-base text-gray-500",
                                  children: M(k.requestTime),
                                }),
                                a.jsx("td", {
                                  className:
                                    "px-6 py-3 whitespace-nowrap text-base text-gray-900",
                                  children: k.requestingPerson || "-",
                                }),
                                a.jsx("td", {
                                  className: "px-6 py-3 whitespace-nowrap",
                                  children: a.jsx("span", {
                                    className: `px-2 py-1 rounded-full text-xs font-medium ${
                                      k.state === "等待過帳"
                                        ? "bg-yellow-100 text-yellow-800"
                                        : k.state === "已過帳"
                                        ? "bg-green-100 text-green-800"
                                        : "bg-gray-100 text-gray-800"
                                    }`,
                                    children: k.state,
                                  }),
                                }),
                                a.jsx("td", {
                                  className:
                                    "px-6 py-3 whitespace-nowrap text-base text-gray-500",
                                  children: M(k.issueTime),
                                }),
                                a.jsx("td", {
                                  className:
                                    "px-6 py-3 whitespace-nowrap text-base text-gray-900",
                                  children: k.issuingPerson || "-",
                                }),
                                a.jsx("td", {
                                  className:
                                    "px-6 py-3 whitespace-nowrap text-base text-gray-900",
                                  children: k.issuingUnit || "-",
                                }),
                              ],
                            },
                            k.GUID
                          );
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
        a.jsx(Et, {
          appear: !0,
          show: u,
          as: g.Fragment,
          children: a.jsxs(Nt, {
            as: "div",
            className: "relative z-50",
            onClose: () => !d && c(!1),
            children: [
              a.jsx(Et.Child, {
                as: g.Fragment,
                enter: "ease-out duration-300",
                enterFrom: "opacity-0",
                enterTo: "opacity-100",
                leave: "ease-in duration-200",
                leaveFrom: "opacity-100",
                leaveTo: "opacity-0",
                children: a.jsx("div", {
                  className: "fixed inset-0 bg-black bg-opacity-25",
                }),
              }),
              a.jsx("div", {
                className: "fixed inset-0 overflow-y-auto",
                children: a.jsx("div", {
                  className:
                    "flex min-h-full items-center justify-center p-4 text-center",
                  children: a.jsx(Et.Child, {
                    as: g.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0 scale-95",
                    enterTo: "opacity-100 scale-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100 scale-100",
                    leaveTo: "opacity-0 scale-95",
                    children: a.jsxs(Nt.Panel, {
                      className:
                        "w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all",
                      children: [
                        a.jsx(Nt.Title, {
                          as: "h3",
                          className: "text-xl font-bold text-gray-900 mb-6",
                          children: "編輯申領單",
                        }),
                        o &&
                          a.jsxs("div", {
                            className: "space-y-6",
                            children: [
                              a.jsxs("div", {
                                className: "grid grid-cols-2 gap-x-4 gap-y-4",
                                children: [
                                  a.jsxs("div", {
                                    children: [
                                      a.jsx("label", {
                                        className:
                                          "block text-base font-medium text-gray-700 mb-1",
                                        children: i("app.requestingUnit"),
                                      }),
                                      a.jsx("div", {
                                        className: "text-base text-gray-900",
                                        children: o.requestingUnit,
                                      }),
                                    ],
                                  }),
                                  a.jsxs("div", {
                                    children: [
                                      a.jsx("label", {
                                        className:
                                          "block text-base font-medium text-gray-700 mb-1",
                                        children: i("app.requisitionType"),
                                      }),
                                      a.jsx("div", {
                                        className: "text-base text-gray-900",
                                        children: o.actionType,
                                      }),
                                    ],
                                  }),
                                  a.jsxs("div", {
                                    children: [
                                      a.jsx("label", {
                                        className:
                                          "block text-base font-medium text-gray-700 mb-1",
                                        children: i("table.requestedQuantity"),
                                      }),
                                      a.jsx("div", {
                                        className: "flex gap-2 items-center",
                                        children: a.jsx("input", {
                                          type: "text",
                                          value: w,
                                          onClick: () => x(!0),
                                          readOnly: !0,
                                          className:
                                            "w-32 p-2 border rounded text-base cursor-pointer",
                                          placeholder: i(
                                            "app.quantity.placeholder"
                                          ),
                                        }),
                                      }),
                                    ],
                                  }),
                                  a.jsxs("div", {
                                    children: [
                                      a.jsx("label", {
                                        className:
                                          "block text-base font-medium text-gray-700 mb-1",
                                        children: i("table.actualQuantity"),
                                      }),
                                      a.jsx("div", {
                                        className: "text-base text-gray-900",
                                        children: o.actualQuantity || "-",
                                      }),
                                    ],
                                  }),
                                  a.jsxs("div", {
                                    children: [
                                      a.jsx("label", {
                                        className:
                                          "block text-base font-medium text-gray-700 mb-1",
                                        children: i("table.requestingPerson"),
                                      }),
                                      a.jsx("div", {
                                        className: "text-base text-gray-900",
                                        children: o.requestingPerson || "-",
                                      }),
                                    ],
                                  }),
                                  a.jsxs("div", {
                                    children: [
                                      a.jsx("label", {
                                        className:
                                          "block text-base font-medium text-gray-700 mb-1",
                                        children: i("table.issuingPerson"),
                                      }),
                                      a.jsx("div", {
                                        className: "text-base text-gray-900",
                                        children: o.issuingPerson || "-",
                                      }),
                                    ],
                                  }),
                                  a.jsxs("div", {
                                    children: [
                                      a.jsx("label", {
                                        className:
                                          "block text-base font-medium text-gray-700 mb-1",
                                        children: i("table.issuingUnit"),
                                      }),
                                      a.jsx("div", {
                                        className: "text-base text-gray-900",
                                        children: o.issuingUnit || "-",
                                      }),
                                    ],
                                  }),
                                  a.jsxs("div", {
                                    children: [
                                      a.jsx("label", {
                                        className:
                                          "block text-base font-medium text-gray-700 mb-1",
                                        children: i("table.requestTime"),
                                      }),
                                      a.jsx("div", {
                                        className: "text-base text-gray-900",
                                        children: M(o.requestTime),
                                      }),
                                    ],
                                  }),
                                  a.jsxs("div", {
                                    children: [
                                      a.jsx("label", {
                                        className:
                                          "block text-base font-medium text-gray-700 mb-1",
                                        children: i("table.issueTime"),
                                      }),
                                      a.jsx("div", {
                                        className: "text-base text-gray-900",
                                        children: M(o.issueTime),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              C &&
                                a.jsxs("div", {
                                  className:
                                    "p-4 bg-red-100 text-red-700 rounded-md flex items-center gap-2",
                                  children: [
                                    a.jsx(pi, { size: 20 }),
                                    a.jsx("span", {
                                      className: "text-base",
                                      children: C,
                                    }),
                                  ],
                                }),
                              a.jsxs("div", {
                                className: "mt-6 flex justify-between gap-4",
                                children: [
                                  a.jsxs("button", {
                                    type: "button",
                                    onClick: () => p(!0),
                                    disabled: d,
                                    className:
                                      "inline-flex justify-center items-center gap-2 rounded-md border border-transparent bg-red-100 px-4 py-2 text-base font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
                                    children: [a.jsx(w0, { size: 16 }), "刪除"],
                                  }),
                                  a.jsxs("div", {
                                    className: "flex gap-2",
                                    children: [
                                      a.jsx("button", {
                                        type: "button",
                                        onClick: () => !d && c(!1),
                                        disabled: d,
                                        className:
                                          "inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
                                        children: "取消",
                                      }),
                                      a.jsx("button", {
                                        type: "button",
                                        onClick: X,
                                        disabled: d,
                                        className:
                                          "inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-base font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
                                        children: d ? "處理中..." : "儲存",
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
        a.jsx(Et, {
          appear: !0,
          show: f,
          as: g.Fragment,
          children: a.jsxs(Nt, {
            as: "div",
            className: "relative z-[60]",
            onClose: () => !d && p(!1),
            children: [
              a.jsx(Et.Child, {
                as: g.Fragment,
                enter: "ease-out duration-300",
                enterFrom: "opacity-0",
                enterTo: "opacity-100",
                leave: "ease-in duration-200",
                leaveFrom: "opacity-100",
                leaveTo: "opacity-0",
                children: a.jsx("div", {
                  className: "fixed inset-0 bg-black bg-opacity-25",
                }),
              }),
              a.jsx("div", {
                className: "fixed inset-0 overflow-y-auto",
                children: a.jsx("div", {
                  className:
                    "flex min-h-full items-center justify-center p-4 text-center",
                  children: a.jsx(Et.Child, {
                    as: g.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0 scale-95",
                    enterTo: "opacity-100 scale-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100 scale-100",
                    leaveTo: "opacity-0 scale-95",
                    children: a.jsxs(Nt.Panel, {
                      className:
                        "w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all",
                      children: [
                        a.jsx(Nt.Title, {
                          as: "h3",
                          className: "text-xl font-bold text-gray-900 mb-6",
                          children: "確認刪除申領單",
                        }),
                        a.jsx("div", {
                          className: "mt-2",
                          children: a.jsx("p", {
                            className: "text-base text-gray-500",
                            children: "確定要刪除此筆申領資料嗎？",
                          }),
                        }),
                        a.jsxs("div", {
                          className: "mt-6 flex justify-end gap-3",
                          children: [
                            a.jsx("button", {
                              type: "button",
                              onClick: () => !d && p(!1),
                              disabled: d,
                              className:
                                "inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
                              children: "取消",
                            }),
                            a.jsx("button", {
                              type: "button",
                              onClick: Ne,
                              disabled: d,
                              className:
                                "inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
                              children: d ? "處理中..." : "確認刪除",
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
        y && a.jsx(Df, { value: w, onChange: S, onClose: () => x(!1) }),
      ],
    });
  },
  Mf = (e) => {
    const t = e.find((n) => n.name === "申領建單");
    return (t == null ? void 0 : t.state) === !0;
  },
  Ny = (e) =>
    Mf(e.Permissions)
      ? (sessionStorage.setItem("user_session", JSON.stringify(e)), !0)
      : !1,
  Ui = () => {
    const e = sessionStorage.getItem("user_session");
    if (!e) return null;
    try {
      const t = JSON.parse(e);
      return !t.GUID || !t.ID || !t.Name || !Mf(t.Permissions)
        ? (vi(), null)
        : t;
    } catch {
      return vi(), null;
    }
  },
  vi = () => {
    sessionStorage.removeItem("user_session");
  },
  Ey = () => {
    const e = Ui();
    if (!e) return !1;
    const t = new Date(e.loginTime).getTime();
    return (new Date().getTime() - t) / (1e3 * 60 * 60) > 24 ? (vi(), !1) : !0;
  },
  jy = () => {
    const e = Ui();
    return (e == null ? void 0 : e.Name) || "";
  },
  Cy = () => {
    const e = Ui();
    return (e == null ? void 0 : e.ID) || "";
  },
  by = ({
    onLogin: e,
    className: t = "",
    title: n = "申領建單系統",
    logo: r,
  }) => {
    const [l, i] = g.useState(""),
      [o, s] = g.useState(""),
      [u, c] = g.useState(null),
      [f, p] = g.useState(!1),
      y = async (x) => {
        x.preventDefault(), c(null), p(!0);
        try {
          const w = await ut("/api/session/login", {
            method: "POST",
            body: { Data: { ID: l, Password: o } },
          });
          if (w.Code === 200) {
            if (!Ny(w.Data)) {
              c("無申領建單權限，無法登入");
              return;
            }
            e();
          } else c(w.Result || "登入失敗，請檢查帳號密碼是否正確");
        } catch (w) {
          console.error("Login error:", w),
            c(w instanceof Error ? w.message : "系統錯誤，請稍後再試");
        } finally {
          p(!1);
        }
      };
    return a.jsx("div", {
      className: `min-h-screen bg-gray-100 flex items-center justify-center p-4 ${t}`,
      children: a.jsxs("div", {
        className: "bg-white rounded-lg shadow-md p-8 w-full max-w-md",
        children: [
          r &&
            a.jsx("div", {
              className: "mb-6 flex justify-center",
              children: r,
            }),
          a.jsx("h1", {
            className: "text-2xl font-bold text-center mb-8",
            children: n,
          }),
          u &&
            a.jsxs("div", {
              className:
                "mb-6 p-4 bg-red-100 text-red-700 rounded-md flex items-center gap-2",
              children: [
                a.jsx(pi, { size: 20 }),
                a.jsx("span", { children: u }),
              ],
            }),
          a.jsxs("form", {
            onSubmit: y,
            className: "space-y-6",
            children: [
              a.jsxs("div", {
                children: [
                  a.jsx("label", {
                    htmlFor: "id",
                    className: "block text-sm font-medium text-gray-700 mb-1",
                    children: "帳號",
                  }),
                  a.jsx("input", {
                    type: "text",
                    id: "id",
                    value: l,
                    onChange: (x) => i(x.target.value),
                    className:
                      "w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                    required: !0,
                  }),
                ],
              }),
              a.jsxs("div", {
                children: [
                  a.jsx("label", {
                    htmlFor: "password",
                    className: "block text-sm font-medium text-gray-700 mb-1",
                    children: "密碼",
                  }),
                  a.jsx("input", {
                    type: "password",
                    id: "password",
                    value: o,
                    onChange: (x) => s(x.target.value),
                    className:
                      "w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                    required: !0,
                  }),
                ],
              }),
              a.jsx("button", {
                type: "submit",
                disabled: f,
                className: `w-full py-2 px-4 rounded font-medium transition-colors duration-200 ${
                  f
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600 text-white"
                }`,
                children: f ? "登入中..." : "登入",
              }),
            ],
          }),
        ],
      }),
    });
  },
  Py = () => {
    const { language: e, toggleLanguage: t } = wt();
    return a.jsxs("button", {
      onClick: t,
      className:
        "inline-flex items-center px-2 sm:px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200",
      title: e === "zh" ? "繁體中文" : "English",
      children: [
        a.jsx(y0, { className: "h-4 w-4" }),
        a.jsx("span", {
          className: "ml-2 hidden sm:inline",
          children: e === "zh" ? "繁體中文" : "English",
        }),
      ],
    });
  },
  Ty = ({ title: e }) =>
    a.jsx("h1", {
      className: "text-2xl md:text-3xl font-semibold text-gray-800",
      children: e,
    }),
  Oy = () => {
    const e = Ui();
    return e
      ? a.jsxs("p", {
          className: "text-sm text-gray-600",
          children: [e.Name, " - ", e.Employer],
        })
      : null;
  },
  Dy = ({ onLogout: e }) => {
    const { t } = wt();
    return a.jsxs("button", {
      onClick: e,
      className:
        "inline-flex items-center px-2 sm:px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200",
      title: t("button.logout"),
      children: [
        a.jsx(x0, { className: "h-4 w-4" }),
        a.jsx("span", {
          className: "ml-2 hidden sm:inline",
          children: t("button.logout"),
        }),
      ],
    });
  },
  _y = () => {
    const { t: e } = wt(),
      t = () => {
        const n = vy();
        n != null &&
          n.homepage &&
          (window.location.href = `${n.homepage}/phar_system/frontpage/`);
      };
    return a.jsxs("button", {
      onClick: t,
      className:
        "p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors group relative",
      title: e("platform.title"),
      children: [
        a.jsx(v0, { size: 24 }),
        a.jsx("span", {
          className:
            "absolute left-1/2 -translate-x-1/2 -bottom-8 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap",
          children: e("platform.title"),
        }),
      ],
    });
  },
  My = ({ onLogout: e }) => {
    const { t } = wt();
    return a.jsx("header", {
      className: "bg-white",
      children: a.jsx("div", {
        className: "w-full mx-auto p-4",
        children: a.jsxs("div", {
          className: "flex justify-between items-center",
          children: [
            a.jsxs("div", {
              className: "flex items-center gap-4",
              children: [
                a.jsx(_y, {}),
                a.jsxs("div", {
                  className: "flex flex-col",
                  children: [
                    a.jsx(Ty, { title: t("app.title") }),
                    a.jsx(Oy, {}),
                  ],
                }),
              ],
            }),
            a.jsxs("div", {
              className: "flex items-center gap-4",
              children: [a.jsx(Py, {}), a.jsx(Dy, { onLogout: e })],
            }),
          ],
        }),
      }),
    });
  },
  Lf = ({ message: e, onClose: t, duration: n = 3e3, type: r = "success" }) => {
    const [l, i] = g.useState(!1);
    g.useEffect(() => {
      const c = setTimeout(() => {
        i(!0),
          setTimeout(() => {
            t();
          }, 300);
      }, n);
      return () => clearTimeout(c);
    }, [n, t]);
    const o = () => {
        i(!0),
          setTimeout(() => {
            t();
          }, 300);
      },
      s =
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
      u = a.jsxs("div", {
        className: `fixed top-4 right-4 min-w-[200px] max-w-[400px] flex items-center gap-2 ${
          s.bg
        } ${s.text} px-4 py-3 rounded-lg shadow-xl border ${s.border} ${
          l ? "animate-slide-out" : "animate-slide-in"
        }`,
        style: { zIndex: 1e6 },
        children: [
          r === "success"
            ? a.jsx(g0, { size: 20, className: s.icon })
            : a.jsx(pi, { size: 20, className: s.icon }),
          a.jsx("span", { className: "text-sm font-medium", children: e }),
          a.jsx("button", {
            onClick: o,
            className: `ml-2 ${s.button} transition-colors duration-150`,
            children: a.jsx(ya, { size: 16 }),
          }),
        ],
      });
    return $i.createPortal(u, document.body);
  },
  Ly = ({
    drugs: e,
    warehouses: t,
    onSubmit: n,
    isSubmitting: r,
    resetTrigger: l = 0,
    barcodeData: i,
    onBarcodeDataUsed: o,
    onOpenBarcodeDialog: s,
  }) => {
    const { t: u } = wt(),
      [c, f] = g.useState(""),
      [p, y] = g.useState([]),
      [x, w] = g.useState(null),
      [S, C] = g.useState(""),
      [m, d] = g.useState(""),
      [h, v] = g.useState(!1),
      [N, E] = g.useState(null),
      [P, T] = g.useState(null),
      [R, M] = g.useState(null),
      [ee, ue] = g.useState(!1),
      [le, Ne] = g.useState(!1),
      [X, oe] = g.useState([]),
      [Q, b] = g.useState(null),
      [k, O] = g.useState(!1),
      [$, A] = g.useState(""),
      ze = t.filter((D) => D.displayName !== "藥庫" && D.type !== "藥庫"),
      W = t.filter((D) => D.type === "藥庫"),
      Ee = W[0];
    g.useEffect(() => {
      W.length > 0 && !$ && A(W[0].name);
    }, [t]),
      g.useEffect(() => {
        l > 0 &&
          (f(""),
          y([]),
          w(null),
          d(""),
          E(null),
          T(null),
          oe([]),
          b(null),
          M(null),
          O(!1));
      }, [l]);
    const De = (D) => {
        const H = D.target.value;
        if ((f(H), !H.trim())) {
          y([]);
          return;
        }
        const _e = H.toLowerCase(),
          Ce = e
            .filter((Ae) => {
              var $t;
              return (
                Ae.NAME.toLowerCase().includes(_e) ||
                Ae.CODE.toLowerCase().includes(_e) ||
                Ae.CHT_NAME.toLowerCase().includes(_e) ||
                (($t = Ae.SKDIACODE) == null
                  ? void 0
                  : $t.toLowerCase().includes(_e))
              );
            })
            .slice(0, 10);
        y(Ce);
      },
      lt = (D) => {
        w(D), f(""), y([]), E(null), oe([]), b(null);
      },
      ar = async (D, H) => {
        ue(!0);
        try {
          const Ce = (
            await ut("/api/stock/get_stock_by_code", {
              method: "POST",
              body: { ServerName: H, ServerType: "藥庫", ValueAry: [D] },
            })
          ).Data[0];
          if ((E(Ce), Ce && Ce.lot && Ce.expiry_date && Ce.qty)) {
            const Ae = [],
              $t = Ce.lot || [],
              Na = Ce.expiry_date || [],
              Ea = Ce.qty || [];
            for (
              let cr = 0;
              cr < Math.max($t.length, Na.length, Ea.length);
              cr++
            ) {
              const ja = {
                lotNumber: $t[cr] || "",
                expiryDate: Na[cr] || "",
                quantity: Ea[cr] || "0",
              };
              parseInt(ja.quantity) > 0 && Ae.push(ja);
            }
            oe(Ae), Ae.length === 1 ? b(Ae[0]) : Ae.length > 1 && b(null);
          } else oe([]), b(null);
          M(null);
        } catch (_e) {
          console.error("Error fetching stock:", _e),
            M({ message: "無法取得庫存資料，請稍後再試", type: "error" }),
            E(null),
            oe([]),
            b(null);
        } finally {
          ue(!1);
        }
      },
      Pn = async (D, H) => {
        Ne(!0);
        try {
          const Ce = (
            await ut("/api/stock/get_stock_by_code", {
              method: "POST",
              body: { ServerName: H, ServerType: "藥庫", ValueAry: [D] },
            })
          ).Data[0];
          T(Ce);
        } catch (_e) {
          console.error("Error fetching pharmacy stock:", _e), T(null);
        } finally {
          Ne(!1);
        }
      };
    g.useEffect(() => {
      x && S ? ar(x.CODE, S) : (E(null), oe([]), b(null));
    }, [x, S]),
      g.useEffect(() => {
        x && Ee ? Pn(x.CODE, Ee.name) : T(null);
      }, [x, Ee]),
      g.useEffect(() => {
        if (i) {
          const D = e.find((H) => H.CODE === i.code);
          D
            ? (w(D), d(i.quantity), o && o())
            : M({ message: `找不到藥碼 ${i.code} 對應的藥品`, type: "error" });
        }
      }, [i, e, o]);
    const ur = (D) => {
        const H = D.target.value;
        C(H), M(null);
      },
      V = (D) => {
        const H = D.target.value;
        (H === "" || /^\d+$/.test(H)) && d(H);
      },
      Ie = async (D) => {
        if ((D && D.preventDefault(), !x)) {
          M({ message: "請選擇藥品", type: "error" });
          return;
        }
        if (!S) {
          M({ message: "請選擇申領單位", type: "error" });
          return;
        }
        if (!m) {
          M({ message: "請輸入申領數量", type: "error" });
          return;
        }
        if (X.length > 1 && !Q) {
          M({ message: "請選擇批號", type: "error" });
          return;
        }
        await n({
          drug: x,
          sourceWarehouse: S,
          destinationWarehouse: "",
          quantity: m,
          stockInfo: N,
          selectedBatch: Q || void 0,
          isUrgent: k,
          issuingUnit: $,
        });
      },
      L = (D) => {
        D.key === "Enter" && c && p.length > 0 && lt(p[0]);
      },
      z = (D) => (!D || D === "2050/01/01" ? "無期限" : D),
      je = () => (Q ? Q.quantity : null);
    return a.jsxs(a.Fragment, {
      children: [
        R &&
          a.jsx(Lf, {
            message: R.message,
            type: R.type,
            onClose: () => M(null),
          }),
        a.jsxs("form", {
          onSubmit: Ie,
          className:
            "bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6 space-y-6",
          children: [
            a.jsxs("div", {
              children: [
                a.jsxs("div", {
                  className: "flex gap-2",
                  children: [
                    a.jsxs("div", {
                      className: "relative flex-1",
                      children: [
                        a.jsx("input", {
                          type: "text",
                          value: c,
                          onChange: De,
                          onKeyPress: L,
                          placeholder: u("app.search.placeholder"),
                          className:
                            "w-full px-3 py-2 pl-8 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-colors text-base text-gray-900",
                        }),
                        a.jsx(cf, {
                          size: 18,
                          className: "absolute left-2 top-2.5 text-gray-400",
                        }),
                      ],
                    }),
                    s &&
                      a.jsxs("button", {
                        type: "button",
                        onClick: s,
                        className:
                          "px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center gap-2",
                        children: [
                          a.jsx(uf, { size: 18 }),
                          a.jsx("span", { children: "掃碼建單" }),
                        ],
                      }),
                  ],
                }),
                p.length > 0 &&
                  a.jsx("div", {
                    className:
                      "mt-2 max-h-60 overflow-y-auto border rounded-lg shadow-sm",
                    children: p.map((D) =>
                      a.jsxs(
                        "div",
                        {
                          onClick: () => lt(D),
                          className:
                            "p-4 hover:bg-gray-50 cursor-pointer border-b transition-colors duration-150",
                          children: [
                            a.jsx("div", {
                              className: "text-base font-medium text-gray-900",
                              children: D.NAME,
                            }),
                            a.jsxs("div", {
                              className: "text-base text-gray-600",
                              children: ["藥碼: ", D.CODE],
                            }),
                            D.SKDIACODE &&
                              a.jsxs("div", {
                                className: "text-base text-gray-600",
                                children: ["料號: ", D.SKDIACODE],
                              }),
                            D.CHT_NAME &&
                              a.jsx("div", {
                                className: "text-base text-gray-600",
                                children: D.CHT_NAME,
                              }),
                          ],
                        },
                        D.GUID
                      )
                    ),
                  }),
              ],
            }),
            a.jsxs("div", {
              className: "grid grid-cols-1 sm:grid-cols-2 gap-6",
              children: [
                a.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    a.jsx("label", {
                      className: "block text-base font-medium text-gray-700",
                      children: u("app.drug.name"),
                    }),
                    a.jsx("div", {
                      className: "bg-gray-50 rounded-lg border border-gray-200",
                      children: x
                        ? a.jsxs("div", {
                            className: "p-4",
                            children: [
                              a.jsx("div", {
                                className:
                                  "text-base font-medium text-gray-900",
                                children: x.NAME,
                              }),
                              x.SKDIACODE &&
                                a.jsxs("div", {
                                  className: "text-base text-gray-600 mt-1",
                                  children: ["料號: ", x.SKDIACODE],
                                }),
                              x.CHT_NAME &&
                                a.jsx("div", {
                                  className: "text-base text-gray-600 mt-1",
                                  children: x.CHT_NAME,
                                }),
                            ],
                          })
                        : a.jsx("div", {
                            className: "p-4",
                            children: a.jsx("div", {
                              className: "text-base text-gray-600",
                              children: u("app.drug.notSelected"),
                            }),
                          }),
                    }),
                  ],
                }),
                a.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    a.jsx("label", {
                      className: "block text-base font-medium text-gray-700",
                      children: u("app.drug.code"),
                    }),
                    a.jsx("div", {
                      className: "bg-gray-50 rounded-lg border border-gray-200",
                      children: x
                        ? a.jsx("div", {
                            className: "p-4",
                            children: a.jsx("div", {
                              className: "text-base font-medium text-gray-900",
                              children: x.CODE,
                            }),
                          })
                        : a.jsx("div", {
                            className: "p-4",
                            children: a.jsx("div", {
                              className: "text-base text-gray-600",
                              children: u("app.drug.notSelected"),
                            }),
                          }),
                    }),
                  ],
                }),
              ],
            }),
            a.jsxs("div", {
              className: "grid grid-cols-1 sm:grid-cols-3 gap-6",
              children: [
                a.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    a.jsx("label", {
                      className: "block text-base font-medium text-gray-700",
                      children: u("app.requestingUnit"),
                    }),
                    a.jsxs("select", {
                      value: S,
                      onChange: ur,
                      className:
                        "w-full px-3 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-colors text-base text-gray-900",
                      children: [
                        a.jsx("option", {
                          value: "",
                          children: u("app.requestingUnit.placeholder"),
                        }),
                        ze.map((D) =>
                          a.jsx(
                            "option",
                            { value: D.displayName, children: D.displayName },
                            D.GUID
                          )
                        ),
                      ],
                    }),
                  ],
                }),
                a.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    a.jsx("label", {
                      className: "block text-base font-medium text-gray-700",
                      children: "核撥單位",
                    }),
                    a.jsx("select", {
                      value: $,
                      onChange: (D) => A(D.target.value),
                      className:
                        "w-full px-3 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-colors text-base text-gray-900",
                      children: W.map((D) =>
                        a.jsx(
                          "option",
                          { value: D.name, children: D.name },
                          D.GUID
                        )
                      ),
                    }),
                  ],
                }),
                a.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    a.jsx("label", {
                      className: "block text-base font-medium text-gray-700",
                      children: u("app.requisitionType"),
                    }),
                    a.jsxs("div", {
                      className: "flex items-center space-x-3 pt-2",
                      children: [
                        a.jsx("input", {
                          type: "checkbox",
                          id: "urgentRequisition",
                          checked: k,
                          onChange: (D) => O(D.target.checked),
                          className:
                            "h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded",
                        }),
                        a.jsx("label", {
                          htmlFor: "urgentRequisition",
                          className: "text-base text-gray-700",
                          children: u("app.urgentRequisition"),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            x &&
              S &&
              a.jsxs("div", {
                className: "space-y-4",
                children: [
                  a.jsx("label", {
                    className: "block text-base font-medium text-gray-700",
                    children: "申領單位庫存資訊",
                  }),
                  a.jsx("div", {
                    className:
                      "bg-gray-50 rounded-lg border border-gray-200 p-4",
                    children: ee
                      ? a.jsxs("div", {
                          className: "flex items-center justify-center py-4",
                          children: [
                            a.jsx("div", {
                              className:
                                "animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600",
                            }),
                            a.jsx("span", {
                              className: "ml-2 text-base text-gray-600",
                              children: "載入庫存資訊中...",
                            }),
                          ],
                        })
                      : N
                      ? a.jsxs("div", {
                          className: "space-y-4",
                          children: [
                            a.jsxs("div", {
                              className:
                                "flex items-center gap-2 text-base font-medium text-gray-900",
                              children: [
                                a.jsx(Dn, {
                                  size: 18,
                                  className: "text-blue-600",
                                }),
                                "總庫存: ",
                                N.qty
                                  ? N.qty.reduce(
                                      (D, H) => D + parseInt(H || "0"),
                                      0
                                    )
                                  : 0,
                              ],
                            }),
                            X.length === 0
                              ? a.jsx("div", {
                                  className: "text-base text-gray-600",
                                  children: "無可用批號資訊",
                                })
                              : X.length === 1
                              ? a.jsxs("div", {
                                  className:
                                    "bg-white rounded-lg border border-blue-200 p-4",
                                  children: [
                                    a.jsx("div", {
                                      className:
                                        "text-base font-medium text-gray-900 mb-2",
                                      children: "批號資訊 (自動選取)",
                                    }),
                                    a.jsxs("div", {
                                      className:
                                        "grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm",
                                      children: [
                                        a.jsxs("div", {
                                          className: "flex items-center gap-2",
                                          children: [
                                            a.jsx(go, {
                                              size: 16,
                                              className: "text-green-600",
                                            }),
                                            a.jsx("span", {
                                              className: "text-gray-600",
                                              children: "效期:",
                                            }),
                                            a.jsx("span", {
                                              className: "font-medium",
                                              children: z(X[0].expiryDate),
                                            }),
                                          ],
                                        }),
                                        a.jsxs("div", {
                                          className: "flex items-center gap-2",
                                          children: [
                                            a.jsx(yo, {
                                              size: 16,
                                              className: "text-purple-600",
                                            }),
                                            a.jsx("span", {
                                              className: "text-gray-600",
                                              children: "批號:",
                                            }),
                                            a.jsx("span", {
                                              className: "font-medium",
                                              children: X[0].lotNumber || "無",
                                            }),
                                          ],
                                        }),
                                        a.jsxs("div", {
                                          className: "flex items-center gap-2",
                                          children: [
                                            a.jsx(Dn, {
                                              size: 16,
                                              className: "text-blue-600",
                                            }),
                                            a.jsx("span", {
                                              className: "text-gray-600",
                                              children: "數量:",
                                            }),
                                            a.jsx("span", {
                                              className: "font-medium",
                                              children: X[0].quantity,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                })
                              : a.jsxs("div", {
                                  className: "space-y-3",
                                  children: [
                                    a.jsx("div", {
                                      className:
                                        "text-base font-medium text-gray-900",
                                      children: "請選擇批號:",
                                    }),
                                    a.jsx("div", {
                                      className: "space-y-2",
                                      children: X.map((D, H) =>
                                        a.jsxs(
                                          "label",
                                          {
                                            className: `block p-4 rounded-lg border cursor-pointer transition-colors ${
                                              Q === D
                                                ? "border-blue-500 bg-blue-50"
                                                : "border-gray-200 bg-white hover:bg-gray-50"
                                            }`,
                                            children: [
                                              a.jsx("input", {
                                                type: "radio",
                                                name: "batch",
                                                value: H,
                                                checked: Q === D,
                                                onChange: () => b(D),
                                                className: "sr-only",
                                              }),
                                              a.jsxs("div", {
                                                className:
                                                  "grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm",
                                                children: [
                                                  a.jsxs("div", {
                                                    className:
                                                      "flex items-center gap-2",
                                                    children: [
                                                      a.jsx(go, {
                                                        size: 16,
                                                        className:
                                                          "text-green-600",
                                                      }),
                                                      a.jsx("span", {
                                                        className:
                                                          "text-gray-600",
                                                        children: "效期:",
                                                      }),
                                                      a.jsx("span", {
                                                        className:
                                                          "font-medium",
                                                        children: z(
                                                          D.expiryDate
                                                        ),
                                                      }),
                                                    ],
                                                  }),
                                                  a.jsxs("div", {
                                                    className:
                                                      "flex items-center gap-2",
                                                    children: [
                                                      a.jsx(yo, {
                                                        size: 16,
                                                        className:
                                                          "text-purple-600",
                                                      }),
                                                      a.jsx("span", {
                                                        className:
                                                          "text-gray-600",
                                                        children: "批號:",
                                                      }),
                                                      a.jsx("span", {
                                                        className:
                                                          "font-medium",
                                                        children:
                                                          D.lotNumber || "無",
                                                      }),
                                                    ],
                                                  }),
                                                  a.jsxs("div", {
                                                    className:
                                                      "flex items-center gap-2",
                                                    children: [
                                                      a.jsx(Dn, {
                                                        size: 16,
                                                        className:
                                                          "text-blue-600",
                                                      }),
                                                      a.jsx("span", {
                                                        className:
                                                          "text-gray-600",
                                                        children: "數量:",
                                                      }),
                                                      a.jsx("span", {
                                                        className:
                                                          "font-medium",
                                                        children: D.quantity,
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            ],
                                          },
                                          H
                                        )
                                      ),
                                    }),
                                  ],
                                }),
                          ],
                        })
                      : a.jsx("div", {
                          className: "text-base text-gray-600",
                          children: "申領單位無此藥品庫存資訊",
                        }),
                  }),
                ],
              }),
            x &&
              Ee &&
              a.jsxs("div", {
                className: "space-y-4",
                children: [
                  a.jsx("label", {
                    className: "block text-base font-medium text-gray-700",
                    children: "撥補單位庫存資訊",
                  }),
                  a.jsx("div", {
                    className:
                      "bg-blue-50 rounded-lg border border-blue-200 p-4",
                    children: le
                      ? a.jsxs("div", {
                          className: "flex items-center justify-center py-4",
                          children: [
                            a.jsx("div", {
                              className:
                                "animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600",
                            }),
                            a.jsx("span", {
                              className: "ml-2 text-base text-gray-600",
                              children: "載入撥補單位庫存資訊中...",
                            }),
                          ],
                        })
                      : P
                      ? a.jsxs("div", {
                          className: "space-y-3",
                          children: [
                            a.jsxs("div", {
                              className:
                                "flex items-center gap-2 text-base font-medium text-gray-900",
                              children: [
                                a.jsx(Dn, {
                                  size: 18,
                                  className: "text-blue-600",
                                }),
                                a.jsx("span", {
                                  className: "text-gray-700",
                                  children: "撥補單位:",
                                }),
                                a.jsx("span", {
                                  className: "font-semibold",
                                  children: Ee.displayName || Ee.name,
                                }),
                              ],
                            }),
                            a.jsxs("div", {
                              className:
                                "flex items-center gap-2 text-base font-medium text-gray-900",
                              children: [
                                a.jsx(Dn, {
                                  size: 18,
                                  className: "text-green-600",
                                }),
                                a.jsx("span", {
                                  className: "text-gray-700",
                                  children: "總庫存:",
                                }),
                                a.jsx("span", {
                                  className: "font-semibold text-green-700",
                                  children: P.qty
                                    ? P.qty.reduce(
                                        (D, H) => D + parseInt(H || "0"),
                                        0
                                      )
                                    : 0,
                                }),
                              ],
                            }),
                            P.lot &&
                              P.lot.length > 0 &&
                              a.jsxs("div", {
                                className: "mt-3 space-y-2",
                                children: [
                                  a.jsx("div", {
                                    className:
                                      "text-sm font-medium text-gray-700",
                                    children: "批號明細：",
                                  }),
                                  a.jsx("div", {
                                    className: "space-y-2",
                                    children: P.lot.map((D, H) => {
                                      var Ae, $t;
                                      const _e =
                                          ((Ae = P.expiry_date) == null
                                            ? void 0
                                            : Ae[H]) || "",
                                        Ce =
                                          (($t = P.qty) == null
                                            ? void 0
                                            : $t[H]) || "0";
                                      return parseInt(Ce) <= 0
                                        ? null
                                        : a.jsx(
                                            "div",
                                            {
                                              className:
                                                "bg-white rounded-lg border border-blue-200 p-3",
                                              children: a.jsxs("div", {
                                                className:
                                                  "grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm",
                                                children: [
                                                  a.jsxs("div", {
                                                    className:
                                                      "flex items-center gap-2",
                                                    children: [
                                                      a.jsx(yo, {
                                                        size: 16,
                                                        className:
                                                          "text-purple-600",
                                                      }),
                                                      a.jsx("span", {
                                                        className:
                                                          "text-gray-600",
                                                        children: "批號:",
                                                      }),
                                                      a.jsx("span", {
                                                        className:
                                                          "font-medium",
                                                        children: D || "無",
                                                      }),
                                                    ],
                                                  }),
                                                  a.jsxs("div", {
                                                    className:
                                                      "flex items-center gap-2",
                                                    children: [
                                                      a.jsx(go, {
                                                        size: 16,
                                                        className:
                                                          "text-green-600",
                                                      }),
                                                      a.jsx("span", {
                                                        className:
                                                          "text-gray-600",
                                                        children: "效期:",
                                                      }),
                                                      a.jsx("span", {
                                                        className:
                                                          "font-medium",
                                                        children: z(_e),
                                                      }),
                                                    ],
                                                  }),
                                                  a.jsxs("div", {
                                                    className:
                                                      "flex items-center gap-2",
                                                    children: [
                                                      a.jsx(Dn, {
                                                        size: 16,
                                                        className:
                                                          "text-blue-600",
                                                      }),
                                                      a.jsx("span", {
                                                        className:
                                                          "text-gray-600",
                                                        children: "數量:",
                                                      }),
                                                      a.jsx("span", {
                                                        className:
                                                          "font-medium",
                                                        children: Ce,
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            },
                                            H
                                          );
                                    }),
                                  }),
                                ],
                              }),
                          ],
                        })
                      : a.jsx("div", {
                          className: "text-base text-gray-600",
                          children: "撥補單位無此藥品庫存資訊",
                        }),
                  }),
                ],
              }),
            a.jsxs("div", {
              className: "space-y-4",
              children: [
                a.jsx("label", {
                  className: "block text-base font-medium text-gray-700",
                  children: u("app.quantity"),
                }),
                a.jsxs("div", {
                  className: "flex gap-4 items-center",
                  children: [
                    a.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [
                        a.jsx("input", {
                          type: "text",
                          value: m,
                          onChange: V,
                          onClick: () => v(!0),
                          placeholder: u("app.quantity.placeholder"),
                          className:
                            "w-40 px-3 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-colors text-base text-gray-900 cursor-pointer",
                        }),
                        (x == null ? void 0 : x.MIN_PAKAGE) &&
                          a.jsx("span", {
                            className: "text-base font-medium text-gray-700",
                            children: x.MIN_PAKAGE,
                          }),
                      ],
                    }),
                    je() &&
                      a.jsxs("span", {
                        className: `text-base font-medium ${
                          parseInt(je()) > 0 ? "text-green-600" : "text-red-600"
                        }`,
                        children: [u("app.quantity.available"), ": ", je()],
                      }),
                  ],
                }),
              ],
            }),
            h && a.jsx(Df, { value: m, onChange: d, onClose: () => v(!1) }),
            a.jsx("button", {
              type: "submit",
              disabled: r || (X.length > 1 && !Q),
              className: `w-full px-4 py-2 rounded-lg font-medium transition-colors duration-200 focus:ring-2 focus:ring-opacity-50 ${
                r || (X.length > 1 && !Q)
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500"
              }`,
              children: u(r ? "app.button.processing" : "app.button.create"),
            }),
          ],
        }),
      ],
    });
  },
  $y = ({
    isOpen: e,
    note: t,
    drugName: n,
    onConfirm: r,
    onCancel: l,
    isProcessing: i = !1,
  }) =>
    a.jsx(Et, {
      appear: !0,
      show: e,
      as: g.Fragment,
      children: a.jsxs(Nt, {
        as: "div",
        className: "relative z-[60]",
        onClose: () => !i && l(),
        children: [
          a.jsx(Et.Child, {
            as: g.Fragment,
            enter: "ease-out duration-300",
            enterFrom: "opacity-0",
            enterTo: "opacity-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100",
            leaveTo: "opacity-0",
            children: a.jsx("div", {
              className: "fixed inset-0 bg-black bg-opacity-25",
            }),
          }),
          a.jsx("div", {
            className: "fixed inset-0 overflow-y-auto",
            children: a.jsx("div", {
              className:
                "flex min-h-full items-center justify-center p-4 text-center",
              children: a.jsx(Et.Child, {
                as: g.Fragment,
                enter: "ease-out duration-300",
                enterFrom: "opacity-0 scale-95",
                enterTo: "opacity-100 scale-100",
                leave: "ease-in duration-200",
                leaveFrom: "opacity-100 scale-100",
                leaveTo: "opacity-0 scale-95",
                children: a.jsx(Nt.Panel, {
                  className:
                    "w-[90vw] max-w-md transform overflow-hidden rounded-lg bg-white p-4 md:p-6 text-left align-middle shadow-xl transition-all",
                  children: a.jsxs("div", {
                    className: "flex items-start gap-3",
                    children: [
                      a.jsx("div", {
                        className: "flex-shrink-0",
                        children: a.jsx(h0, {
                          className: "h-6 w-6 text-yellow-600",
                        }),
                      }),
                      a.jsxs("div", {
                        className: "flex-1",
                        children: [
                          a.jsx(Nt.Title, {
                            as: "h3",
                            className: "text-lg font-medium text-gray-900",
                            children: "藥品通知",
                          }),
                          a.jsxs("div", {
                            className: "mt-3 space-y-3",
                            children: [
                              a.jsxs("div", {
                                children: [
                                  a.jsx("p", {
                                    className:
                                      "text-base font-medium text-gray-700",
                                    children: "藥品名稱：",
                                  }),
                                  a.jsx("p", {
                                    className: "text-base text-gray-900 mt-1",
                                    children: n,
                                  }),
                                ],
                              }),
                              a.jsxs("div", {
                                children: [
                                  a.jsx("p", {
                                    className:
                                      "text-base font-medium text-gray-700",
                                    children: "通知內容：",
                                  }),
                                  a.jsx("div", {
                                    className:
                                      "mt-1 bg-yellow-50 border border-yellow-200 rounded-lg p-3",
                                    children: a.jsx("p", {
                                      className:
                                        "text-base text-gray-900 whitespace-pre-wrap",
                                      children: t,
                                    }),
                                  }),
                                ],
                              }),
                              a.jsx("p", {
                                className: "text-base text-gray-600",
                                children:
                                  "此藥品有特殊通知，是否要繼續建立申領單？",
                              }),
                            ],
                          }),
                          a.jsxs("div", {
                            className: "mt-6 flex justify-end gap-3",
                            children: [
                              a.jsx("button", {
                                type: "button",
                                onClick: () => !i && l(),
                                disabled: i,
                                className:
                                  "inline-flex justify-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                                children: "取消",
                              }),
                              a.jsx("button", {
                                type: "button",
                                onClick: r,
                                disabled: i,
                                className:
                                  "inline-flex justify-center rounded-lg border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                                children: i ? "處理中..." : "繼續建單",
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
    }),
  Fy = ({ isOpen: e, onClose: t, onBarcodeScanned: n }) => {
    wt();
    const [r, l] = g.useState(""),
      i = g.useRef(null);
    g.useEffect(() => {
      e && i.current && i.current.focus();
    }, [e]),
      g.useEffect(() => {
        e && l("");
      }, [e]);
    const o = (u) => {
        u.preventDefault(), r.trim() && (n(r.trim()), l(""));
      },
      s = () => {
        l(""), t();
      };
    return e
      ? a.jsx("div", {
          className:
            "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50",
          children: a.jsxs("div", {
            className: "bg-white rounded-lg shadow-xl w-full max-w-md mx-4",
            children: [
              a.jsxs("div", {
                className: "flex items-center justify-between p-4 border-b",
                children: [
                  a.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      a.jsx(uf, { className: "text-blue-600", size: 24 }),
                      a.jsx("h2", {
                        className: "text-xl font-semibold text-gray-900",
                        children: "掃碼建單",
                      }),
                    ],
                  }),
                  a.jsx("button", {
                    onClick: s,
                    className:
                      "flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium whitespace-nowrap",
                    children: a.jsx(ya, { size: 24 }),
                  }),
                ],
              }),
              a.jsxs("form", {
                onSubmit: o,
                className: "p-6 space-y-6",
                children: [
                  a.jsxs("div", {
                    children: [
                      a.jsx("label", {
                        htmlFor: "barcode",
                        className:
                          "block text-base font-medium text-gray-700 mb-2",
                        children: "請掃描條碼或手動輸入",
                      }),
                      a.jsx("input", {
                        ref: i,
                        id: "barcode",
                        type: "text",
                        value: r,
                        onChange: (u) => l(u.target.value),
                        placeholder: "請使用掃碼槍掃描條碼",
                        className:
                          "w-full px-4 py-3 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-colors text-base text-gray-900",
                      }),
                    ],
                  }),
                  a.jsxs("div", {
                    className: "flex gap-3",
                    children: [
                      a.jsx("button", {
                        type: "button",
                        onClick: s,
                        className:
                          "flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors",
                        children: "取消",
                      }),
                      a.jsx("button", {
                        type: "submit",
                        disabled: !r.trim(),
                        className: `flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
                          r.trim()
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
        })
      : null;
  },
  Ry = ({ className: e = "" }) => {
    const { t } = wt();
    return a.jsx("footer", {
      className: `fixed bottom-0 left-0 w-full bg-white py-2 shadow-inner border-t border-gray-200 z-50 ${e}`,
      children: a.jsx("div", {
        className: "max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8",
        children: a.jsx("p", {
          className: "text-center text-sm text-gray-600",
          children: t("footer.copyright"),
        }),
      }),
    });
  };
function zy() {
  wt();
  const [e, t] = g.useState(!1),
    [n, r] = g.useState(!0),
    [l, i] = g.useState([]),
    [o, s] = g.useState([]),
    [u, c] = g.useState(null),
    [f, p] = g.useState(!1),
    [y, x] = g.useState(!1),
    [w, S] = g.useState(!1),
    [C, m] = g.useState(""),
    [d, h] = g.useState([]),
    [v, N] = g.useState(() => {
      const L = new Date();
      return L.setHours(0, 0, 0, 0), L;
    }),
    [E, P] = g.useState(() => {
      const L = new Date();
      return L.setHours(23, 59, 59, 999), L;
    }),
    [T, R] = g.useState(!1),
    [M, ee] = g.useState(0),
    [ue, le] = g.useState(!1),
    [Ne, X] = g.useState(null),
    [oe, Q] = g.useState(!1),
    [b, k] = g.useState(null),
    [O, $] = g.useState(null);
  g.useEffect(() => {
    (async () => {
      try {
        await gy(), x(!0);
        const z = Ey();
        t(z);
      } catch (z) {
        console.error("Error during initialization:", z),
          c("系統初始化失敗，請重新整理頁面");
      } finally {
        r(!1);
      }
    })();
  }, []),
    g.useEffect(() => {
      e && y && (ze(), A(), W());
    }, [e, y]);
  const A = async () => {
      try {
        const z = (
          await ut("/api/med_page/get_med_cloud", { method: "POST", body: {} })
        ).Data.filter((je) => je.FILE_STATUS !== "關檔中");
        i(z), c(null);
      } catch (L) {
        console.error("Error fetching drugs:", L),
          c("無法取得藥品資料，請稍後再試"),
          i([]);
      }
    },
    ze = async () => {
      try {
        const L = await ut("/api/ServerSetting/get_name", {
          method: "POST",
          body: {},
        });
        if (!L || !L.Data) throw new Error("Invalid response format");
        const z = L.Data.map((je) => ({
          ...je,
          displayName: je.name === "DS01" ? "藥庫" : je.name,
        }));
        s(z), c(null);
      } catch (L) {
        console.error("Error fetching warehouses:", L),
          c("無法取得庫別資料，請稍後再試"),
          s([]);
      }
    },
    W = async () => {
      R(!0);
      try {
        const L = await ut("/api/materialRequisition/get_by_requestTime", {
          method: "POST",
          body: {
            ValueAry: [
              ce(v, "yyyy-MM-dd HH:mm:ss"),
              ce(E, "yyyy-MM-dd HH:mm:ss"),
            ],
          },
        });
        h(L.Data), c(null);
      } catch (L) {
        console.error("Error fetching orders:", L),
          c("無法取得申領單資料，請稍後再試"),
          h([]);
      } finally {
        R(!1);
      }
    },
    Ee = (L, z) => {
      N(L), P(z), W();
    },
    De = async (L) => {
      const z = jy(),
        je = Cy(),
        D = {
          actionType: L.isUrgent ? "緊急申領" : "一般申領",
          code: L.drug.CODE,
          name: L.drug.NAME,
          packageUnit: L.drug.MIN_PAKAGE || "",
          requestedQuantity: L.quantity,
          requestingUnit: L.sourceWarehouse,
          requestingPerson: z || "",
          requestingPersonID: je || "",
          issuingUnit: L.issuingUnit || "",
          state: "等待過帳",
        };
      try {
        const H = await ut("/api/materialRequisition/add", {
          method: "POST",
          body: { Data: [D] },
        });
        if (H.Code === 200)
          m(H.Result || "申領單建立成功"),
            S(!0),
            c(null),
            W(),
            ee((_e) => _e + 1);
        else throw new Error(H.Result || "建立申領單失敗");
      } catch (H) {
        console.error("Error creating order:", H),
          c("建立申領單失敗，請稍後再試");
      } finally {
        p(!1);
      }
    },
    lt = async (L) => {
      try {
        const z = await ut("/api/controlpanel/get_by_startendtime_MedNotice", {
          method: "POST",
          body: {},
        });
        if (z.Data && Array.isArray(z.Data)) {
          const je = z.Data.find((D) => D.code === L);
          if (je && je.note) return je.note;
        }
        return null;
      } catch (z) {
        return console.error("Error checking med notice:", z), null;
      }
    },
    ar = async (L) => {
      try {
        p(!0), c(null);
        const z = await lt(L.drug.CODE);
        z
          ? ($(L), k({ note: z, drugName: L.drug.NAME }), Q(!0), p(!1))
          : await De(L);
      } catch (z) {
        console.error("Error in handleCreateOrder:", z),
          c("建立申領單失敗，請稍後再試");
      } finally {
        oe || p(!1);
      }
    },
    Pn = async () => {
      if (O)
        try {
          p(!0), Q(!1), await De(O);
        } catch (L) {
          console.error("Error in handleConfirmWithNotice:", L),
            c("建立申領單失敗，請稍後再試");
        } finally {
          p(!1), $(null), k(null);
        }
    },
    ur = () => {
      Q(!1), p(!1), $(null), k(null);
    },
    V = () => {
      vi(), t(!1);
    },
    Ie = async (L) => {
      try {
        const z = await ut(`/api/materialRequisition/barcode?barcode=${L}`, {
          method: "GET",
        });
        if (z.Code === 200 && z.Data)
          X({ code: z.Data.code, quantity: z.Data.requestedQuantity }),
            le(!1),
            m("條碼掃描成功"),
            S(!0);
        else throw new Error(z.Result || "條碼掃描失敗");
      } catch (z) {
        console.error("Error scanning barcode:", z),
          c("條碼掃描失敗，請稍後再試"),
          le(!1);
      }
    };
  return n
    ? a.jsx("div", {
        className: "min-h-screen bg-white flex items-center justify-center",
        children: a.jsxs("div", {
          className: "text-center",
          children: [
            a.jsx("div", {
              className:
                "animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto",
            }),
            a.jsx("p", {
              className: "mt-2 text-base text-gray-600",
              children: "載入中...",
            }),
          ],
        }),
      })
    : e
    ? a.jsxs("div", {
        className: "min-h-screen flex flex-col",
        children: [
          a.jsx(My, { onLogout: V }),
          w && a.jsx(Lf, { message: C, onClose: () => S(!1), duration: 3e3 }),
          oe &&
            b &&
            a.jsx($y, {
              isOpen: oe,
              note: b.note,
              drugName: b.drugName,
              onConfirm: Pn,
              onCancel: ur,
              isProcessing: f,
            }),
          a.jsx(Fy, {
            isOpen: ue,
            onClose: () => le(!1),
            onBarcodeScanned: Ie,
          }),
          a.jsx("main", {
            className: "flex-grow flex flex-col bg-white",
            children: a.jsxs("div", {
              className: "w-full mx-auto p-4 pb-24",
              children: [
                a.jsx(Ly, {
                  drugs: l,
                  warehouses: o,
                  onSubmit: ar,
                  isSubmitting: f,
                  resetTrigger: M,
                  barcodeData: Ne,
                  onBarcodeDataUsed: () => X(null),
                  onOpenBarcodeDialog: () => le(!0),
                }),
                a.jsx("div", {
                  className: "mt-8",
                  children: a.jsx(ky, {
                    orders: d,
                    startDate: v,
                    endDate: E,
                    onDateChange: Ee,
                    isLoading: T,
                  }),
                }),
              ],
            }),
          }),
          a.jsx(Ry, {}),
        ],
      })
    : a.jsx(by, { onLogin: () => t(!0) });
}
rf(document.getElementById("root")).render(
  a.jsx(g.StrictMode, { children: a.jsx(wy, { children: a.jsx(zy, {}) }) })
);
