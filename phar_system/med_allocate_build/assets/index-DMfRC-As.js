function Ef(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const o = Object.getOwnPropertyDescriptor(r, l);
          o &&
            Object.defineProperty(
              e,
              l,
              o.get ? o : { enumerable: !0, get: () => r[l] }
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
    for (const o of l)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
function jf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Mu = { exports: {} },
  fo = {},
  $u = { exports: {} },
  I = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Yr = Symbol.for("react.element"),
  Cf = Symbol.for("react.portal"),
  bf = Symbol.for("react.fragment"),
  Tf = Symbol.for("react.strict_mode"),
  Pf = Symbol.for("react.profiler"),
  Df = Symbol.for("react.provider"),
  Of = Symbol.for("react.context"),
  Lf = Symbol.for("react.forward_ref"),
  _f = Symbol.for("react.suspense"),
  Mf = Symbol.for("react.memo"),
  $f = Symbol.for("react.lazy"),
  pa = Symbol.iterator;
function Ff(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (pa && e[pa]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Fu = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  zu = Object.assign,
  Ru = {};
function Xn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ru),
    (this.updater = n || Fu);
}
Xn.prototype.isReactComponent = {};
Xn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Xn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Iu() {}
Iu.prototype = Xn.prototype;
function fs(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ru),
    (this.updater = n || Fu);
}
var ps = (fs.prototype = new Iu());
ps.constructor = fs;
zu(ps, Xn.prototype);
ps.isPureReactComponent = !0;
var ma = Array.isArray,
  Au = Object.prototype.hasOwnProperty,
  ms = { current: null },
  Hu = { key: !0, ref: !0, __self: !0, __source: !0 };
function Wu(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Au.call(t, r) && !Hu.hasOwnProperty(r) && (l[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) l.children = n;
  else if (1 < s) {
    for (var a = Array(s), c = 0; c < s; c++) a[c] = arguments[c + 2];
    l.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) l[r] === void 0 && (l[r] = s[r]);
  return {
    $$typeof: Yr,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: ms.current,
  };
}
function zf(e, t) {
  return {
    $$typeof: Yr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function hs(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Yr;
}
function Rf(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var ha = /\/+/g;
function Mo(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Rf("" + e.key)
    : t.toString(36);
}
function Sl(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Yr:
          case Cf:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + Mo(i, 0) : r),
      ma(l)
        ? ((n = ""),
          e != null && (n = e.replace(ha, "$&/") + "/"),
          Sl(l, t, n, "", function (c) {
            return c;
          }))
        : l != null &&
          (hs(l) &&
            (l = zf(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(ha, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), ma(e)))
    for (var s = 0; s < e.length; s++) {
      o = e[s];
      var a = r + Mo(o, s);
      i += Sl(o, t, n, a, l);
    }
  else if (((a = Ff(e)), typeof a == "function"))
    for (e = a.call(e), s = 0; !(o = e.next()).done; )
      (o = o.value), (a = r + Mo(o, s++)), (i += Sl(o, t, n, a, l));
  else if (o === "object")
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
function tl(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Sl(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function If(e) {
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
var Pe = { current: null },
  kl = { transition: null },
  Af = {
    ReactCurrentDispatcher: Pe,
    ReactCurrentBatchConfig: kl,
    ReactCurrentOwner: ms,
  };
function Uu() {
  throw Error("act(...) is not supported in production builds of React.");
}
I.Children = {
  map: tl,
  forEach: function (e, t, n) {
    tl(
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
      tl(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      tl(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!hs(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
I.Component = Xn;
I.Fragment = bf;
I.Profiler = Pf;
I.PureComponent = fs;
I.StrictMode = Tf;
I.Suspense = _f;
I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Af;
I.act = Uu;
I.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = zu({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = ms.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (a in t)
      Au.call(t, a) &&
        !Hu.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    s = Array(a);
    for (var c = 0; c < a; c++) s[c] = arguments[c + 2];
    r.children = s;
  }
  return { $$typeof: Yr, type: e.type, key: l, ref: o, props: r, _owner: i };
};
I.createContext = function (e) {
  return (
    (e = {
      $$typeof: Of,
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
I.createElement = Wu;
I.createFactory = function (e) {
  var t = Wu.bind(null, e);
  return (t.type = e), t;
};
I.createRef = function () {
  return { current: null };
};
I.forwardRef = function (e) {
  return { $$typeof: Lf, render: e };
};
I.isValidElement = hs;
I.lazy = function (e) {
  return { $$typeof: $f, _payload: { _status: -1, _result: e }, _init: If };
};
I.memo = function (e, t) {
  return { $$typeof: Mf, type: e, compare: t === void 0 ? null : t };
};
I.startTransition = function (e) {
  var t = kl.transition;
  kl.transition = {};
  try {
    e();
  } finally {
    kl.transition = t;
  }
};
I.unstable_act = Uu;
I.useCallback = function (e, t) {
  return Pe.current.useCallback(e, t);
};
I.useContext = function (e) {
  return Pe.current.useContext(e);
};
I.useDebugValue = function () {};
I.useDeferredValue = function (e) {
  return Pe.current.useDeferredValue(e);
};
I.useEffect = function (e, t) {
  return Pe.current.useEffect(e, t);
};
I.useId = function () {
  return Pe.current.useId();
};
I.useImperativeHandle = function (e, t, n) {
  return Pe.current.useImperativeHandle(e, t, n);
};
I.useInsertionEffect = function (e, t) {
  return Pe.current.useInsertionEffect(e, t);
};
I.useLayoutEffect = function (e, t) {
  return Pe.current.useLayoutEffect(e, t);
};
I.useMemo = function (e, t) {
  return Pe.current.useMemo(e, t);
};
I.useReducer = function (e, t, n) {
  return Pe.current.useReducer(e, t, n);
};
I.useRef = function (e) {
  return Pe.current.useRef(e);
};
I.useState = function (e) {
  return Pe.current.useState(e);
};
I.useSyncExternalStore = function (e, t, n) {
  return Pe.current.useSyncExternalStore(e, t, n);
};
I.useTransition = function () {
  return Pe.current.useTransition();
};
I.version = "18.3.1";
$u.exports = I;
var y = $u.exports;
const R = jf(y),
  Tr = Ef({ __proto__: null, default: R }, [y]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Hf = y,
  Wf = Symbol.for("react.element"),
  Uf = Symbol.for("react.fragment"),
  Bf = Object.prototype.hasOwnProperty,
  Vf = Hf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Qf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Bu(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) Bf.call(t, r) && !Qf.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: Wf,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Vf.current,
  };
}
fo.Fragment = Uf;
fo.jsx = Bu;
fo.jsxs = Bu;
Mu.exports = fo;
var u = Mu.exports,
  Vu = { exports: {} },
  He = {},
  Qu = { exports: {} },
  Yu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(b, $) {
    var F = b.length;
    b.push($);
    e: for (; 0 < F; ) {
      var W = (F - 1) >>> 1,
        O = b[W];
      if (0 < l(O, $)) (b[W] = $), (b[F] = O), (F = W);
      else break e;
    }
  }
  function n(b) {
    return b.length === 0 ? null : b[0];
  }
  function r(b) {
    if (b.length === 0) return null;
    var $ = b[0],
      F = b.pop();
    if (F !== $) {
      b[0] = F;
      e: for (var W = 0, O = b.length, re = O >>> 1; W < re; ) {
        var U = 2 * (W + 1) - 1,
          ct = b[U],
          ye = U + 1,
          ve = b[ye];
        if (0 > l(ct, F))
          ye < O && 0 > l(ve, ct)
            ? ((b[W] = ve), (b[ye] = F), (W = ye))
            : ((b[W] = ct), (b[U] = F), (W = U));
        else if (ye < O && 0 > l(ve, F)) (b[W] = ve), (b[ye] = F), (W = ye);
        else break e;
      }
    }
    return $;
  }
  function l(b, $) {
    var F = b.sortIndex - $.sortIndex;
    return F !== 0 ? F : b.id - $.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      s = i.now();
    e.unstable_now = function () {
      return i.now() - s;
    };
  }
  var a = [],
    c = [],
    d = 1,
    p = null,
    g = 3,
    w = !1,
    x = !1,
    S = !1,
    C = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(b) {
    for (var $ = n(c); $ !== null; ) {
      if ($.callback === null) r(c);
      else if ($.startTime <= b)
        r(c), ($.sortIndex = $.expirationTime), t(a, $);
      else break;
      $ = n(c);
    }
  }
  function v(b) {
    if (((S = !1), h(b), !x))
      if (n(a) !== null) (x = !0), Ce(k);
      else {
        var $ = n(c);
        $ !== null && E(v, $.startTime - b);
      }
  }
  function k(b, $) {
    (x = !1), S && ((S = !1), m(P), (P = -1)), (w = !0);
    var F = g;
    try {
      for (
        h($), p = n(a);
        p !== null && (!(p.expirationTime > $) || (b && !B()));

      ) {
        var W = p.callback;
        if (typeof W == "function") {
          (p.callback = null), (g = p.priorityLevel);
          var O = W(p.expirationTime <= $);
          ($ = e.unstable_now()),
            typeof O == "function" ? (p.callback = O) : p === n(a) && r(a),
            h($);
        } else r(a);
        p = n(a);
      }
      if (p !== null) var re = !0;
      else {
        var U = n(c);
        U !== null && E(v, U.startTime - $), (re = !1);
      }
      return re;
    } finally {
      (p = null), (g = F), (w = !1);
    }
  }
  var N = !1,
    T = null,
    P = -1,
    M = 5,
    L = -1;
  function B() {
    return !(e.unstable_now() - L < M);
  }
  function X() {
    if (T !== null) {
      var b = e.unstable_now();
      L = b;
      var $ = !0;
      try {
        $ = T(!0, b);
      } finally {
        $ ? oe() : ((N = !1), (T = null));
      }
    } else N = !1;
  }
  var oe;
  if (typeof f == "function")
    oe = function () {
      f(X);
    };
  else if (typeof MessageChannel < "u") {
    var je = new MessageChannel(),
      ge = je.port2;
    (je.port1.onmessage = X),
      (oe = function () {
        ge.postMessage(null);
      });
  } else
    oe = function () {
      C(X, 0);
    };
  function Ce(b) {
    (T = b), N || ((N = !0), oe());
  }
  function E(b, $) {
    P = C(function () {
      b(e.unstable_now());
    }, $);
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
      x || w || ((x = !0), Ce(k));
    }),
    (e.unstable_forceFrameRate = function (b) {
      0 > b || 125 < b
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (M = 0 < b ? Math.floor(1e3 / b) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return g;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (b) {
      switch (g) {
        case 1:
        case 2:
        case 3:
          var $ = 3;
          break;
        default:
          $ = g;
      }
      var F = g;
      g = $;
      try {
        return b();
      } finally {
        g = F;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (b, $) {
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
      var F = g;
      g = b;
      try {
        return $();
      } finally {
        g = F;
      }
    }),
    (e.unstable_scheduleCallback = function (b, $, F) {
      var W = e.unstable_now();
      switch (
        (typeof F == "object" && F !== null
          ? ((F = F.delay), (F = typeof F == "number" && 0 < F ? W + F : W))
          : (F = W),
        b)
      ) {
        case 1:
          var O = -1;
          break;
        case 2:
          O = 250;
          break;
        case 5:
          O = 1073741823;
          break;
        case 4:
          O = 1e4;
          break;
        default:
          O = 5e3;
      }
      return (
        (O = F + O),
        (b = {
          id: d++,
          callback: $,
          priorityLevel: b,
          startTime: F,
          expirationTime: O,
          sortIndex: -1,
        }),
        F > W
          ? ((b.sortIndex = F),
            t(c, b),
            n(a) === null &&
              b === n(c) &&
              (S ? (m(P), (P = -1)) : (S = !0), E(v, F - W)))
          : ((b.sortIndex = O), t(a, b), x || w || ((x = !0), Ce(k))),
        b
      );
    }),
    (e.unstable_shouldYield = B),
    (e.unstable_wrapCallback = function (b) {
      var $ = g;
      return function () {
        var F = g;
        g = $;
        try {
          return b.apply(this, arguments);
        } finally {
          g = F;
        }
      };
    });
})(Yu);
Qu.exports = Yu;
var Yf = Qu.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Kf = y,
  Ae = Yf;
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
var Ku = new Set(),
  Pr = {};
function Sn(e, t) {
  Bn(e, t), Bn(e + "Capture", t);
}
function Bn(e, t) {
  for (Pr[e] = t, e = 0; e < t.length; e++) Ku.add(t[e]);
}
var bt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  pi = Object.prototype.hasOwnProperty,
  Gf =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ga = {},
  ya = {};
function qf(e) {
  return pi.call(ya, e)
    ? !0
    : pi.call(ga, e)
    ? !1
    : Gf.test(e)
    ? (ya[e] = !0)
    : ((ga[e] = !0), !1);
}
function Xf(e, t, n, r) {
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
function Jf(e, t, n, r) {
  if (t === null || typeof t > "u" || Xf(e, t, n, r)) return !0;
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
function De(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var he = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    he[e] = new De(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  he[t] = new De(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  he[e] = new De(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  he[e] = new De(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    he[e] = new De(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  he[e] = new De(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  he[e] = new De(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  he[e] = new De(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  he[e] = new De(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var gs = /[\-:]([a-z])/g;
function ys(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(gs, ys);
    he[t] = new De(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(gs, ys);
    he[t] = new De(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(gs, ys);
  he[t] = new De(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  he[e] = new De(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
he.xlinkHref = new De(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  he[e] = new De(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function vs(e, t, n, r) {
  var l = he.hasOwnProperty(t) ? he[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Jf(t, n, l, r) && (n = null),
    r || l === null
      ? qf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var Ot = Kf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  nl = Symbol.for("react.element"),
  Cn = Symbol.for("react.portal"),
  bn = Symbol.for("react.fragment"),
  xs = Symbol.for("react.strict_mode"),
  mi = Symbol.for("react.profiler"),
  Gu = Symbol.for("react.provider"),
  qu = Symbol.for("react.context"),
  ws = Symbol.for("react.forward_ref"),
  hi = Symbol.for("react.suspense"),
  gi = Symbol.for("react.suspense_list"),
  Ss = Symbol.for("react.memo"),
  $t = Symbol.for("react.lazy"),
  Xu = Symbol.for("react.offscreen"),
  va = Symbol.iterator;
function nr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (va && e[va]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ne = Object.assign,
  $o;
function mr(e) {
  if ($o === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      $o = (t && t[1]) || "";
    }
  return (
    `
` +
    $o +
    e
  );
}
var Fo = !1;
function zo(e, t) {
  if (!e || Fo) return "";
  Fo = !0;
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
          o = r.stack.split(`
`),
          i = l.length - 1,
          s = o.length - 1;
        1 <= i && 0 <= s && l[i] !== o[s];

      )
        s--;
      for (; 1 <= i && 0 <= s; i--, s--)
        if (l[i] !== o[s]) {
          if (i !== 1 || s !== 1)
            do
              if ((i--, s--, 0 > s || l[i] !== o[s])) {
                var a =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= i && 0 <= s);
          break;
        }
    }
  } finally {
    (Fo = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? mr(e) : "";
}
function Zf(e) {
  switch (e.tag) {
    case 5:
      return mr(e.type);
    case 16:
      return mr("Lazy");
    case 13:
      return mr("Suspense");
    case 19:
      return mr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = zo(e.type, !1)), e;
    case 11:
      return (e = zo(e.type.render, !1)), e;
    case 1:
      return (e = zo(e.type, !0)), e;
    default:
      return "";
  }
}
function yi(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case bn:
      return "Fragment";
    case Cn:
      return "Portal";
    case mi:
      return "Profiler";
    case xs:
      return "StrictMode";
    case hi:
      return "Suspense";
    case gi:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case qu:
        return (e.displayName || "Context") + ".Consumer";
      case Gu:
        return (e._context.displayName || "Context") + ".Provider";
      case ws:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Ss:
        return (
          (t = e.displayName || null), t !== null ? t : yi(e.type) || "Memo"
        );
      case $t:
        (t = e._payload), (e = e._init);
        try {
          return yi(e(t));
        } catch {}
    }
  return null;
}
function ep(e) {
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
      return yi(t);
    case 8:
      return t === xs ? "StrictMode" : "Mode";
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
function Xt(e) {
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
function Ju(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function tp(e) {
  var t = Ju(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = "" + i), o.call(this, i);
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
function rl(e) {
  e._valueTracker || (e._valueTracker = tp(e));
}
function Zu(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Ju(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Ml(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function vi(e, t) {
  var n = t.checked;
  return ne({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function xa(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Xt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function ec(e, t) {
  (t = t.checked), t != null && vs(e, "checked", t, !1);
}
function xi(e, t) {
  ec(e, t);
  var n = Xt(t.value),
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
    ? wi(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && wi(e, t.type, Xt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function wa(e, t, n) {
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
function wi(e, t, n) {
  (t !== "number" || Ml(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var hr = Array.isArray;
function Rn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Xt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Si(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(j(91));
  return ne({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Sa(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(j(92));
      if (hr(n)) {
        if (1 < n.length) throw Error(j(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Xt(n) };
}
function tc(e, t) {
  var n = Xt(t.value),
    r = Xt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function ka(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function nc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ki(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? nc(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var ll,
  rc = (function (e) {
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
        ll = ll || document.createElement("div"),
          ll.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = ll.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Dr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var xr = {
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
  np = ["Webkit", "ms", "Moz", "O"];
Object.keys(xr).forEach(function (e) {
  np.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (xr[t] = xr[e]);
  });
});
function lc(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (xr.hasOwnProperty(e) && xr[e])
    ? ("" + t).trim()
    : t + "px";
}
function oc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = lc(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var rp = ne(
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
function Ni(e, t) {
  if (t) {
    if (rp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
function Ei(e, t) {
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
var ji = null;
function ks(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ci = null,
  In = null,
  An = null;
function Na(e) {
  if ((e = qr(e))) {
    if (typeof Ci != "function") throw Error(j(280));
    var t = e.stateNode;
    t && ((t = yo(t)), Ci(e.stateNode, e.type, t));
  }
}
function ic(e) {
  In ? (An ? An.push(e) : (An = [e])) : (In = e);
}
function sc() {
  if (In) {
    var e = In,
      t = An;
    if (((An = In = null), Na(e), t)) for (e = 0; e < t.length; e++) Na(t[e]);
  }
}
function ac(e, t) {
  return e(t);
}
function uc() {}
var Ro = !1;
function cc(e, t, n) {
  if (Ro) return e(t, n);
  Ro = !0;
  try {
    return ac(e, t, n);
  } finally {
    (Ro = !1), (In !== null || An !== null) && (uc(), sc());
  }
}
function Or(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = yo(n);
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
var bi = !1;
if (bt)
  try {
    var rr = {};
    Object.defineProperty(rr, "passive", {
      get: function () {
        bi = !0;
      },
    }),
      window.addEventListener("test", rr, rr),
      window.removeEventListener("test", rr, rr);
  } catch {
    bi = !1;
  }
function lp(e, t, n, r, l, o, i, s, a) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (d) {
    this.onError(d);
  }
}
var wr = !1,
  $l = null,
  Fl = !1,
  Ti = null,
  op = {
    onError: function (e) {
      (wr = !0), ($l = e);
    },
  };
function ip(e, t, n, r, l, o, i, s, a) {
  (wr = !1), ($l = null), lp.apply(op, arguments);
}
function sp(e, t, n, r, l, o, i, s, a) {
  if ((ip.apply(this, arguments), wr)) {
    if (wr) {
      var c = $l;
      (wr = !1), ($l = null);
    } else throw Error(j(198));
    Fl || ((Fl = !0), (Ti = c));
  }
}
function kn(e) {
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
function dc(e) {
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
function Ea(e) {
  if (kn(e) !== e) throw Error(j(188));
}
function ap(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = kn(e)), t === null)) throw Error(j(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return Ea(l), e;
        if (o === r) return Ea(l), t;
        o = o.sibling;
      }
      throw Error(j(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, s = l.child; s; ) {
        if (s === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (s === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        s = s.sibling;
      }
      if (!i) {
        for (s = o.child; s; ) {
          if (s === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (s === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          s = s.sibling;
        }
        if (!i) throw Error(j(189));
      }
    }
    if (n.alternate !== r) throw Error(j(190));
  }
  if (n.tag !== 3) throw Error(j(188));
  return n.stateNode.current === n ? e : t;
}
function fc(e) {
  return (e = ap(e)), e !== null ? pc(e) : null;
}
function pc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = pc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var mc = Ae.unstable_scheduleCallback,
  ja = Ae.unstable_cancelCallback,
  up = Ae.unstable_shouldYield,
  cp = Ae.unstable_requestPaint,
  ie = Ae.unstable_now,
  dp = Ae.unstable_getCurrentPriorityLevel,
  Ns = Ae.unstable_ImmediatePriority,
  hc = Ae.unstable_UserBlockingPriority,
  zl = Ae.unstable_NormalPriority,
  fp = Ae.unstable_LowPriority,
  gc = Ae.unstable_IdlePriority,
  po = null,
  mt = null;
function pp(e) {
  if (mt && typeof mt.onCommitFiberRoot == "function")
    try {
      mt.onCommitFiberRoot(po, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var lt = Math.clz32 ? Math.clz32 : gp,
  mp = Math.log,
  hp = Math.LN2;
function gp(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((mp(e) / hp) | 0)) | 0;
}
var ol = 64,
  il = 4194304;
function gr(e) {
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
function Rl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var s = i & ~l;
    s !== 0 ? (r = gr(s)) : ((o &= i), o !== 0 && (r = gr(o)));
  } else (i = n & ~l), i !== 0 ? (r = gr(i)) : o !== 0 && (r = gr(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - lt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function yp(e, t) {
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
function vp(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - lt(o),
      s = 1 << i,
      a = l[i];
    a === -1
      ? (!(s & n) || s & r) && (l[i] = yp(s, t))
      : a <= t && (e.expiredLanes |= s),
      (o &= ~s);
  }
}
function Pi(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function yc() {
  var e = ol;
  return (ol <<= 1), !(ol & 4194240) && (ol = 64), e;
}
function Io(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Kr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - lt(t)),
    (e[t] = n);
}
function xp(e, t) {
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
    var l = 31 - lt(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function Es(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - lt(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var Q = 0;
function vc(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var xc,
  js,
  wc,
  Sc,
  kc,
  Di = !1,
  sl = [],
  Ut = null,
  Bt = null,
  Vt = null,
  Lr = new Map(),
  _r = new Map(),
  zt = [],
  wp =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Ca(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Ut = null;
      break;
    case "dragenter":
    case "dragleave":
      Bt = null;
      break;
    case "mouseover":
    case "mouseout":
      Vt = null;
      break;
    case "pointerover":
    case "pointerout":
      Lr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      _r.delete(t.pointerId);
  }
}
function lr(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = qr(t)), t !== null && js(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Sp(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (Ut = lr(Ut, e, t, n, r, l)), !0;
    case "dragenter":
      return (Bt = lr(Bt, e, t, n, r, l)), !0;
    case "mouseover":
      return (Vt = lr(Vt, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return Lr.set(o, lr(Lr.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), _r.set(o, lr(_r.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Nc(e) {
  var t = sn(e.target);
  if (t !== null) {
    var n = kn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = dc(n)), t !== null)) {
          (e.blockedOn = t),
            kc(e.priority, function () {
              wc(n);
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
function Nl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Oi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (ji = r), n.target.dispatchEvent(r), (ji = null);
    } else return (t = qr(n)), t !== null && js(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function ba(e, t, n) {
  Nl(e) && n.delete(t);
}
function kp() {
  (Di = !1),
    Ut !== null && Nl(Ut) && (Ut = null),
    Bt !== null && Nl(Bt) && (Bt = null),
    Vt !== null && Nl(Vt) && (Vt = null),
    Lr.forEach(ba),
    _r.forEach(ba);
}
function or(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Di ||
      ((Di = !0),
      Ae.unstable_scheduleCallback(Ae.unstable_NormalPriority, kp)));
}
function Mr(e) {
  function t(l) {
    return or(l, e);
  }
  if (0 < sl.length) {
    or(sl[0], e);
    for (var n = 1; n < sl.length; n++) {
      var r = sl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Ut !== null && or(Ut, e),
      Bt !== null && or(Bt, e),
      Vt !== null && or(Vt, e),
      Lr.forEach(t),
      _r.forEach(t),
      n = 0;
    n < zt.length;
    n++
  )
    (r = zt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < zt.length && ((n = zt[0]), n.blockedOn === null); )
    Nc(n), n.blockedOn === null && zt.shift();
}
var Hn = Ot.ReactCurrentBatchConfig,
  Il = !0;
function Np(e, t, n, r) {
  var l = Q,
    o = Hn.transition;
  Hn.transition = null;
  try {
    (Q = 1), Cs(e, t, n, r);
  } finally {
    (Q = l), (Hn.transition = o);
  }
}
function Ep(e, t, n, r) {
  var l = Q,
    o = Hn.transition;
  Hn.transition = null;
  try {
    (Q = 4), Cs(e, t, n, r);
  } finally {
    (Q = l), (Hn.transition = o);
  }
}
function Cs(e, t, n, r) {
  if (Il) {
    var l = Oi(e, t, n, r);
    if (l === null) Go(e, t, r, Al, n), Ca(e, r);
    else if (Sp(l, e, t, n, r)) r.stopPropagation();
    else if ((Ca(e, r), t & 4 && -1 < wp.indexOf(e))) {
      for (; l !== null; ) {
        var o = qr(l);
        if (
          (o !== null && xc(o),
          (o = Oi(e, t, n, r)),
          o === null && Go(e, t, r, Al, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Go(e, t, r, null, n);
  }
}
var Al = null;
function Oi(e, t, n, r) {
  if (((Al = null), (e = ks(r)), (e = sn(e)), e !== null))
    if (((t = kn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = dc(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Al = e), null;
}
function Ec(e) {
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
      switch (dp()) {
        case Ns:
          return 1;
        case hc:
          return 4;
        case zl:
        case fp:
          return 16;
        case gc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var At = null,
  bs = null,
  El = null;
function jc() {
  if (El) return El;
  var e,
    t = bs,
    n = t.length,
    r,
    l = "value" in At ? At.value : At.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (El = l.slice(e, 1 < r ? 1 - r : void 0));
}
function jl(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function al() {
  return !0;
}
function Ta() {
  return !1;
}
function We(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(o) : o[s]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? al
        : Ta),
      (this.isPropagationStopped = Ta),
      this
    );
  }
  return (
    ne(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = al));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = al));
      },
      persist: function () {},
      isPersistent: al,
    }),
    t
  );
}
var Jn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ts = We(Jn),
  Gr = ne({}, Jn, { view: 0, detail: 0 }),
  jp = We(Gr),
  Ao,
  Ho,
  ir,
  mo = ne({}, Gr, {
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
    getModifierState: Ps,
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
        : (e !== ir &&
            (ir && e.type === "mousemove"
              ? ((Ao = e.screenX - ir.screenX), (Ho = e.screenY - ir.screenY))
              : (Ho = Ao = 0),
            (ir = e)),
          Ao);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Ho;
    },
  }),
  Pa = We(mo),
  Cp = ne({}, mo, { dataTransfer: 0 }),
  bp = We(Cp),
  Tp = ne({}, Gr, { relatedTarget: 0 }),
  Wo = We(Tp),
  Pp = ne({}, Jn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Dp = We(Pp),
  Op = ne({}, Jn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Lp = We(Op),
  _p = ne({}, Jn, { data: 0 }),
  Da = We(_p),
  Mp = {
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
  $p = {
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
  Fp = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function zp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Fp[e]) ? !!t[e] : !1;
}
function Ps() {
  return zp;
}
var Rp = ne({}, Gr, {
    key: function (e) {
      if (e.key) {
        var t = Mp[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = jl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? $p[e.keyCode] || "Unidentified"
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
    getModifierState: Ps,
    charCode: function (e) {
      return e.type === "keypress" ? jl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? jl(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Ip = We(Rp),
  Ap = ne({}, mo, {
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
  Oa = We(Ap),
  Hp = ne({}, Gr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ps,
  }),
  Wp = We(Hp),
  Up = ne({}, Jn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Bp = We(Up),
  Vp = ne({}, mo, {
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
  Qp = We(Vp),
  Yp = [9, 13, 27, 32],
  Ds = bt && "CompositionEvent" in window,
  Sr = null;
bt && "documentMode" in document && (Sr = document.documentMode);
var Kp = bt && "TextEvent" in window && !Sr,
  Cc = bt && (!Ds || (Sr && 8 < Sr && 11 >= Sr)),
  La = " ",
  _a = !1;
function bc(e, t) {
  switch (e) {
    case "keyup":
      return Yp.indexOf(t.keyCode) !== -1;
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
function Tc(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Tn = !1;
function Gp(e, t) {
  switch (e) {
    case "compositionend":
      return Tc(t);
    case "keypress":
      return t.which !== 32 ? null : ((_a = !0), La);
    case "textInput":
      return (e = t.data), e === La && _a ? null : e;
    default:
      return null;
  }
}
function qp(e, t) {
  if (Tn)
    return e === "compositionend" || (!Ds && bc(e, t))
      ? ((e = jc()), (El = bs = At = null), (Tn = !1), e)
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
      return Cc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Xp = {
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
function Ma(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Xp[e.type] : t === "textarea";
}
function Pc(e, t, n, r) {
  ic(r),
    (t = Hl(t, "onChange")),
    0 < t.length &&
      ((n = new Ts("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var kr = null,
  $r = null;
function Jp(e) {
  Ac(e, 0);
}
function ho(e) {
  var t = On(e);
  if (Zu(t)) return e;
}
function Zp(e, t) {
  if (e === "change") return t;
}
var Dc = !1;
if (bt) {
  var Uo;
  if (bt) {
    var Bo = "oninput" in document;
    if (!Bo) {
      var $a = document.createElement("div");
      $a.setAttribute("oninput", "return;"),
        (Bo = typeof $a.oninput == "function");
    }
    Uo = Bo;
  } else Uo = !1;
  Dc = Uo && (!document.documentMode || 9 < document.documentMode);
}
function Fa() {
  kr && (kr.detachEvent("onpropertychange", Oc), ($r = kr = null));
}
function Oc(e) {
  if (e.propertyName === "value" && ho($r)) {
    var t = [];
    Pc(t, $r, e, ks(e)), cc(Jp, t);
  }
}
function em(e, t, n) {
  e === "focusin"
    ? (Fa(), (kr = t), ($r = n), kr.attachEvent("onpropertychange", Oc))
    : e === "focusout" && Fa();
}
function tm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ho($r);
}
function nm(e, t) {
  if (e === "click") return ho(t);
}
function rm(e, t) {
  if (e === "input" || e === "change") return ho(t);
}
function lm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var it = typeof Object.is == "function" ? Object.is : lm;
function Fr(e, t) {
  if (it(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!pi.call(t, l) || !it(e[l], t[l])) return !1;
  }
  return !0;
}
function za(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ra(e, t) {
  var n = za(e);
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
    n = za(n);
  }
}
function Lc(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Lc(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function _c() {
  for (var e = window, t = Ml(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ml(e.document);
  }
  return t;
}
function Os(e) {
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
function om(e) {
  var t = _c(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Lc(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Os(n)) {
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
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = Ra(n, o));
        var i = Ra(n, r);
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
          o > r
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
var im = bt && "documentMode" in document && 11 >= document.documentMode,
  Pn = null,
  Li = null,
  Nr = null,
  _i = !1;
function Ia(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  _i ||
    Pn == null ||
    Pn !== Ml(r) ||
    ((r = Pn),
    "selectionStart" in r && Os(r)
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
    (Nr && Fr(Nr, r)) ||
      ((Nr = r),
      (r = Hl(Li, "onSelect")),
      0 < r.length &&
        ((t = new Ts("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Pn))));
}
function ul(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Dn = {
    animationend: ul("Animation", "AnimationEnd"),
    animationiteration: ul("Animation", "AnimationIteration"),
    animationstart: ul("Animation", "AnimationStart"),
    transitionend: ul("Transition", "TransitionEnd"),
  },
  Vo = {},
  Mc = {};
bt &&
  ((Mc = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Dn.animationend.animation,
    delete Dn.animationiteration.animation,
    delete Dn.animationstart.animation),
  "TransitionEvent" in window || delete Dn.transitionend.transition);
function go(e) {
  if (Vo[e]) return Vo[e];
  if (!Dn[e]) return e;
  var t = Dn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Mc) return (Vo[e] = t[n]);
  return e;
}
var $c = go("animationend"),
  Fc = go("animationiteration"),
  zc = go("animationstart"),
  Rc = go("transitionend"),
  Ic = new Map(),
  Aa =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Zt(e, t) {
  Ic.set(e, t), Sn(t, [e]);
}
for (var Qo = 0; Qo < Aa.length; Qo++) {
  var Yo = Aa[Qo],
    sm = Yo.toLowerCase(),
    am = Yo[0].toUpperCase() + Yo.slice(1);
  Zt(sm, "on" + am);
}
Zt($c, "onAnimationEnd");
Zt(Fc, "onAnimationIteration");
Zt(zc, "onAnimationStart");
Zt("dblclick", "onDoubleClick");
Zt("focusin", "onFocus");
Zt("focusout", "onBlur");
Zt(Rc, "onTransitionEnd");
Bn("onMouseEnter", ["mouseout", "mouseover"]);
Bn("onMouseLeave", ["mouseout", "mouseover"]);
Bn("onPointerEnter", ["pointerout", "pointerover"]);
Bn("onPointerLeave", ["pointerout", "pointerover"]);
Sn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Sn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Sn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Sn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Sn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Sn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var yr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  um = new Set("cancel close invalid load scroll toggle".split(" ").concat(yr));
function Ha(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), sp(r, t, void 0, e), (e.currentTarget = null);
}
function Ac(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var s = r[i],
            a = s.instance,
            c = s.currentTarget;
          if (((s = s.listener), a !== o && l.isPropagationStopped())) break e;
          Ha(l, s, c), (o = a);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((s = r[i]),
            (a = s.instance),
            (c = s.currentTarget),
            (s = s.listener),
            a !== o && l.isPropagationStopped())
          )
            break e;
          Ha(l, s, c), (o = a);
        }
    }
  }
  if (Fl) throw ((e = Ti), (Fl = !1), (Ti = null), e);
}
function G(e, t) {
  var n = t[Ri];
  n === void 0 && (n = t[Ri] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Hc(t, e, 2, !1), n.add(r));
}
function Ko(e, t, n) {
  var r = 0;
  t && (r |= 4), Hc(n, e, r, t);
}
var cl = "_reactListening" + Math.random().toString(36).slice(2);
function zr(e) {
  if (!e[cl]) {
    (e[cl] = !0),
      Ku.forEach(function (n) {
        n !== "selectionchange" && (um.has(n) || Ko(n, !1, e), Ko(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[cl] || ((t[cl] = !0), Ko("selectionchange", !1, t));
  }
}
function Hc(e, t, n, r) {
  switch (Ec(t)) {
    case 1:
      var l = Np;
      break;
    case 4:
      l = Ep;
      break;
    default:
      l = Cs;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !bi ||
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
function Go(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var s = r.stateNode.containerInfo;
        if (s === l || (s.nodeType === 8 && s.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var a = i.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = i.stateNode.containerInfo),
              a === l || (a.nodeType === 8 && a.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; s !== null; ) {
          if (((i = sn(s)), i === null)) return;
          if (((a = i.tag), a === 5 || a === 6)) {
            r = o = i;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  cc(function () {
    var c = o,
      d = ks(n),
      p = [];
    e: {
      var g = Ic.get(e);
      if (g !== void 0) {
        var w = Ts,
          x = e;
        switch (e) {
          case "keypress":
            if (jl(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = Ip;
            break;
          case "focusin":
            (x = "focus"), (w = Wo);
            break;
          case "focusout":
            (x = "blur"), (w = Wo);
            break;
          case "beforeblur":
          case "afterblur":
            w = Wo;
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
            w = Pa;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = bp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = Wp;
            break;
          case $c:
          case Fc:
          case zc:
            w = Dp;
            break;
          case Rc:
            w = Bp;
            break;
          case "scroll":
            w = jp;
            break;
          case "wheel":
            w = Qp;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = Lp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = Oa;
        }
        var S = (t & 4) !== 0,
          C = !S && e === "scroll",
          m = S ? (g !== null ? g + "Capture" : null) : g;
        S = [];
        for (var f = c, h; f !== null; ) {
          h = f;
          var v = h.stateNode;
          if (
            (h.tag === 5 &&
              v !== null &&
              ((h = v),
              m !== null && ((v = Or(f, m)), v != null && S.push(Rr(f, v, h)))),
            C)
          )
            break;
          f = f.return;
        }
        0 < S.length &&
          ((g = new w(g, x, null, n, d)), p.push({ event: g, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((g = e === "mouseover" || e === "pointerover"),
          (w = e === "mouseout" || e === "pointerout"),
          g &&
            n !== ji &&
            (x = n.relatedTarget || n.fromElement) &&
            (sn(x) || x[Tt]))
        )
          break e;
        if (
          (w || g) &&
          ((g =
            d.window === d
              ? d
              : (g = d.ownerDocument)
              ? g.defaultView || g.parentWindow
              : window),
          w
            ? ((x = n.relatedTarget || n.toElement),
              (w = c),
              (x = x ? sn(x) : null),
              x !== null &&
                ((C = kn(x)), x !== C || (x.tag !== 5 && x.tag !== 6)) &&
                (x = null))
            : ((w = null), (x = c)),
          w !== x)
        ) {
          if (
            ((S = Pa),
            (v = "onMouseLeave"),
            (m = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((S = Oa),
              (v = "onPointerLeave"),
              (m = "onPointerEnter"),
              (f = "pointer")),
            (C = w == null ? g : On(w)),
            (h = x == null ? g : On(x)),
            (g = new S(v, f + "leave", w, n, d)),
            (g.target = C),
            (g.relatedTarget = h),
            (v = null),
            sn(d) === c &&
              ((S = new S(m, f + "enter", x, n, d)),
              (S.target = h),
              (S.relatedTarget = C),
              (v = S)),
            (C = v),
            w && x)
          )
            t: {
              for (S = w, m = x, f = 0, h = S; h; h = En(h)) f++;
              for (h = 0, v = m; v; v = En(v)) h++;
              for (; 0 < f - h; ) (S = En(S)), f--;
              for (; 0 < h - f; ) (m = En(m)), h--;
              for (; f--; ) {
                if (S === m || (m !== null && S === m.alternate)) break t;
                (S = En(S)), (m = En(m));
              }
              S = null;
            }
          else S = null;
          w !== null && Wa(p, g, w, S, !1),
            x !== null && C !== null && Wa(p, C, x, S, !0);
        }
      }
      e: {
        if (
          ((g = c ? On(c) : window),
          (w = g.nodeName && g.nodeName.toLowerCase()),
          w === "select" || (w === "input" && g.type === "file"))
        )
          var k = Zp;
        else if (Ma(g))
          if (Dc) k = rm;
          else {
            k = tm;
            var N = em;
          }
        else
          (w = g.nodeName) &&
            w.toLowerCase() === "input" &&
            (g.type === "checkbox" || g.type === "radio") &&
            (k = nm);
        if (k && (k = k(e, c))) {
          Pc(p, k, n, d);
          break e;
        }
        N && N(e, g, c),
          e === "focusout" &&
            (N = g._wrapperState) &&
            N.controlled &&
            g.type === "number" &&
            wi(g, "number", g.value);
      }
      switch (((N = c ? On(c) : window), e)) {
        case "focusin":
          (Ma(N) || N.contentEditable === "true") &&
            ((Pn = N), (Li = c), (Nr = null));
          break;
        case "focusout":
          Nr = Li = Pn = null;
          break;
        case "mousedown":
          _i = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (_i = !1), Ia(p, n, d);
          break;
        case "selectionchange":
          if (im) break;
        case "keydown":
        case "keyup":
          Ia(p, n, d);
      }
      var T;
      if (Ds)
        e: {
          switch (e) {
            case "compositionstart":
              var P = "onCompositionStart";
              break e;
            case "compositionend":
              P = "onCompositionEnd";
              break e;
            case "compositionupdate":
              P = "onCompositionUpdate";
              break e;
          }
          P = void 0;
        }
      else
        Tn
          ? bc(e, n) && (P = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P &&
        (Cc &&
          n.locale !== "ko" &&
          (Tn || P !== "onCompositionStart"
            ? P === "onCompositionEnd" && Tn && (T = jc())
            : ((At = d),
              (bs = "value" in At ? At.value : At.textContent),
              (Tn = !0))),
        (N = Hl(c, P)),
        0 < N.length &&
          ((P = new Da(P, e, null, n, d)),
          p.push({ event: P, listeners: N }),
          T ? (P.data = T) : ((T = Tc(n)), T !== null && (P.data = T)))),
        (T = Kp ? Gp(e, n) : qp(e, n)) &&
          ((c = Hl(c, "onBeforeInput")),
          0 < c.length &&
            ((d = new Da("onBeforeInput", "beforeinput", null, n, d)),
            p.push({ event: d, listeners: c }),
            (d.data = T)));
    }
    Ac(p, t);
  });
}
function Rr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Hl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = Or(e, n)),
      o != null && r.unshift(Rr(e, o, l)),
      (o = Or(e, t)),
      o != null && r.push(Rr(e, o, l))),
      (e = e.return);
  }
  return r;
}
function En(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Wa(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var s = n,
      a = s.alternate,
      c = s.stateNode;
    if (a !== null && a === r) break;
    s.tag === 5 &&
      c !== null &&
      ((s = c),
      l
        ? ((a = Or(n, o)), a != null && i.unshift(Rr(n, a, s)))
        : l || ((a = Or(n, o)), a != null && i.push(Rr(n, a, s)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var cm = /\r\n?/g,
  dm = /\u0000|\uFFFD/g;
function Ua(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      cm,
      `
`
    )
    .replace(dm, "");
}
function dl(e, t, n) {
  if (((t = Ua(t)), Ua(e) !== t && n)) throw Error(j(425));
}
function Wl() {}
var Mi = null,
  $i = null;
function Fi(e, t) {
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
var zi = typeof setTimeout == "function" ? setTimeout : void 0,
  fm = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Ba = typeof Promise == "function" ? Promise : void 0,
  pm =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Ba < "u"
      ? function (e) {
          return Ba.resolve(null).then(e).catch(mm);
        }
      : zi;
function mm(e) {
  setTimeout(function () {
    throw e;
  });
}
function qo(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Mr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Mr(t);
}
function Qt(e) {
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
function Va(e) {
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
var Zn = Math.random().toString(36).slice(2),
  pt = "__reactFiber$" + Zn,
  Ir = "__reactProps$" + Zn,
  Tt = "__reactContainer$" + Zn,
  Ri = "__reactEvents$" + Zn,
  hm = "__reactListeners$" + Zn,
  gm = "__reactHandles$" + Zn;
function sn(e) {
  var t = e[pt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Tt] || n[pt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Va(e); e !== null; ) {
          if ((n = e[pt])) return n;
          e = Va(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function qr(e) {
  return (
    (e = e[pt] || e[Tt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function On(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(j(33));
}
function yo(e) {
  return e[Ir] || null;
}
var Ii = [],
  Ln = -1;
function en(e) {
  return { current: e };
}
function q(e) {
  0 > Ln || ((e.current = Ii[Ln]), (Ii[Ln] = null), Ln--);
}
function K(e, t) {
  Ln++, (Ii[Ln] = e.current), (e.current = t);
}
var Jt = {},
  Ee = en(Jt),
  _e = en(!1),
  hn = Jt;
function Vn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Jt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function Me(e) {
  return (e = e.childContextTypes), e != null;
}
function Ul() {
  q(_e), q(Ee);
}
function Qa(e, t, n) {
  if (Ee.current !== Jt) throw Error(j(168));
  K(Ee, t), K(_e, n);
}
function Wc(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(j(108, ep(e) || "Unknown", l));
  return ne({}, n, r);
}
function Bl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Jt),
    (hn = Ee.current),
    K(Ee, e),
    K(_e, _e.current),
    !0
  );
}
function Ya(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(j(169));
  n
    ? ((e = Wc(e, t, hn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      q(_e),
      q(Ee),
      K(Ee, e))
    : q(_e),
    K(_e, n);
}
var vt = null,
  vo = !1,
  Xo = !1;
function Uc(e) {
  vt === null ? (vt = [e]) : vt.push(e);
}
function ym(e) {
  (vo = !0), Uc(e);
}
function tn() {
  if (!Xo && vt !== null) {
    Xo = !0;
    var e = 0,
      t = Q;
    try {
      var n = vt;
      for (Q = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (vt = null), (vo = !1);
    } catch (l) {
      throw (vt !== null && (vt = vt.slice(e + 1)), mc(Ns, tn), l);
    } finally {
      (Q = t), (Xo = !1);
    }
  }
  return null;
}
var _n = [],
  Mn = 0,
  Vl = null,
  Ql = 0,
  Ve = [],
  Qe = 0,
  gn = null,
  St = 1,
  kt = "";
function nn(e, t) {
  (_n[Mn++] = Ql), (_n[Mn++] = Vl), (Vl = e), (Ql = t);
}
function Bc(e, t, n) {
  (Ve[Qe++] = St), (Ve[Qe++] = kt), (Ve[Qe++] = gn), (gn = e);
  var r = St;
  e = kt;
  var l = 32 - lt(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - lt(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (St = (1 << (32 - lt(t) + l)) | (n << l) | r),
      (kt = o + e);
  } else (St = (1 << o) | (n << l) | r), (kt = e);
}
function Ls(e) {
  e.return !== null && (nn(e, 1), Bc(e, 1, 0));
}
function _s(e) {
  for (; e === Vl; )
    (Vl = _n[--Mn]), (_n[Mn] = null), (Ql = _n[--Mn]), (_n[Mn] = null);
  for (; e === gn; )
    (gn = Ve[--Qe]),
      (Ve[Qe] = null),
      (kt = Ve[--Qe]),
      (Ve[Qe] = null),
      (St = Ve[--Qe]),
      (Ve[Qe] = null);
}
var Ie = null,
  Re = null,
  J = !1,
  rt = null;
function Vc(e, t) {
  var n = Ye(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Ka(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ie = e), (Re = Qt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ie = e), (Re = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = gn !== null ? { id: St, overflow: kt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ye(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ie = e),
            (Re = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ai(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Hi(e) {
  if (J) {
    var t = Re;
    if (t) {
      var n = t;
      if (!Ka(e, t)) {
        if (Ai(e)) throw Error(j(418));
        t = Qt(n.nextSibling);
        var r = Ie;
        t && Ka(e, t)
          ? Vc(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (J = !1), (Ie = e));
      }
    } else {
      if (Ai(e)) throw Error(j(418));
      (e.flags = (e.flags & -4097) | 2), (J = !1), (Ie = e);
    }
  }
}
function Ga(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ie = e;
}
function fl(e) {
  if (e !== Ie) return !1;
  if (!J) return Ga(e), (J = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Fi(e.type, e.memoizedProps))),
    t && (t = Re))
  ) {
    if (Ai(e)) throw (Qc(), Error(j(418)));
    for (; t; ) Vc(e, t), (t = Qt(t.nextSibling));
  }
  if ((Ga(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(j(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Re = Qt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Re = null;
    }
  } else Re = Ie ? Qt(e.stateNode.nextSibling) : null;
  return !0;
}
function Qc() {
  for (var e = Re; e; ) e = Qt(e.nextSibling);
}
function Qn() {
  (Re = Ie = null), (J = !1);
}
function Ms(e) {
  rt === null ? (rt = [e]) : rt.push(e);
}
var vm = Ot.ReactCurrentBatchConfig;
function sr(e, t, n) {
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
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var s = l.refs;
            i === null ? delete s[o] : (s[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(j(284));
    if (!n._owner) throw Error(j(290, e));
  }
  return e;
}
function pl(e, t) {
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
function qa(e) {
  var t = e._init;
  return t(e._payload);
}
function Yc(e) {
  function t(m, f) {
    if (e) {
      var h = m.deletions;
      h === null ? ((m.deletions = [f]), (m.flags |= 16)) : h.push(f);
    }
  }
  function n(m, f) {
    if (!e) return null;
    for (; f !== null; ) t(m, f), (f = f.sibling);
    return null;
  }
  function r(m, f) {
    for (m = new Map(); f !== null; )
      f.key !== null ? m.set(f.key, f) : m.set(f.index, f), (f = f.sibling);
    return m;
  }
  function l(m, f) {
    return (m = qt(m, f)), (m.index = 0), (m.sibling = null), m;
  }
  function o(m, f, h) {
    return (
      (m.index = h),
      e
        ? ((h = m.alternate),
          h !== null
            ? ((h = h.index), h < f ? ((m.flags |= 2), f) : h)
            : ((m.flags |= 2), f))
        : ((m.flags |= 1048576), f)
    );
  }
  function i(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function s(m, f, h, v) {
    return f === null || f.tag !== 6
      ? ((f = li(h, m.mode, v)), (f.return = m), f)
      : ((f = l(f, h)), (f.return = m), f);
  }
  function a(m, f, h, v) {
    var k = h.type;
    return k === bn
      ? d(m, f, h.props.children, v, h.key)
      : f !== null &&
        (f.elementType === k ||
          (typeof k == "object" &&
            k !== null &&
            k.$$typeof === $t &&
            qa(k) === f.type))
      ? ((v = l(f, h.props)), (v.ref = sr(m, f, h)), (v.return = m), v)
      : ((v = Ll(h.type, h.key, h.props, null, m.mode, v)),
        (v.ref = sr(m, f, h)),
        (v.return = m),
        v);
  }
  function c(m, f, h, v) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== h.containerInfo ||
      f.stateNode.implementation !== h.implementation
      ? ((f = oi(h, m.mode, v)), (f.return = m), f)
      : ((f = l(f, h.children || [])), (f.return = m), f);
  }
  function d(m, f, h, v, k) {
    return f === null || f.tag !== 7
      ? ((f = pn(h, m.mode, v, k)), (f.return = m), f)
      : ((f = l(f, h)), (f.return = m), f);
  }
  function p(m, f, h) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return (f = li("" + f, m.mode, h)), (f.return = m), f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case nl:
          return (
            (h = Ll(f.type, f.key, f.props, null, m.mode, h)),
            (h.ref = sr(m, null, f)),
            (h.return = m),
            h
          );
        case Cn:
          return (f = oi(f, m.mode, h)), (f.return = m), f;
        case $t:
          var v = f._init;
          return p(m, v(f._payload), h);
      }
      if (hr(f) || nr(f))
        return (f = pn(f, m.mode, h, null)), (f.return = m), f;
      pl(m, f);
    }
    return null;
  }
  function g(m, f, h, v) {
    var k = f !== null ? f.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return k !== null ? null : s(m, f, "" + h, v);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case nl:
          return h.key === k ? a(m, f, h, v) : null;
        case Cn:
          return h.key === k ? c(m, f, h, v) : null;
        case $t:
          return (k = h._init), g(m, f, k(h._payload), v);
      }
      if (hr(h) || nr(h)) return k !== null ? null : d(m, f, h, v, null);
      pl(m, h);
    }
    return null;
  }
  function w(m, f, h, v, k) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return (m = m.get(h) || null), s(f, m, "" + v, k);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case nl:
          return (m = m.get(v.key === null ? h : v.key) || null), a(f, m, v, k);
        case Cn:
          return (m = m.get(v.key === null ? h : v.key) || null), c(f, m, v, k);
        case $t:
          var N = v._init;
          return w(m, f, h, N(v._payload), k);
      }
      if (hr(v) || nr(v)) return (m = m.get(h) || null), d(f, m, v, k, null);
      pl(f, v);
    }
    return null;
  }
  function x(m, f, h, v) {
    for (
      var k = null, N = null, T = f, P = (f = 0), M = null;
      T !== null && P < h.length;
      P++
    ) {
      T.index > P ? ((M = T), (T = null)) : (M = T.sibling);
      var L = g(m, T, h[P], v);
      if (L === null) {
        T === null && (T = M);
        break;
      }
      e && T && L.alternate === null && t(m, T),
        (f = o(L, f, P)),
        N === null ? (k = L) : (N.sibling = L),
        (N = L),
        (T = M);
    }
    if (P === h.length) return n(m, T), J && nn(m, P), k;
    if (T === null) {
      for (; P < h.length; P++)
        (T = p(m, h[P], v)),
          T !== null &&
            ((f = o(T, f, P)), N === null ? (k = T) : (N.sibling = T), (N = T));
      return J && nn(m, P), k;
    }
    for (T = r(m, T); P < h.length; P++)
      (M = w(T, m, P, h[P], v)),
        M !== null &&
          (e && M.alternate !== null && T.delete(M.key === null ? P : M.key),
          (f = o(M, f, P)),
          N === null ? (k = M) : (N.sibling = M),
          (N = M));
    return (
      e &&
        T.forEach(function (B) {
          return t(m, B);
        }),
      J && nn(m, P),
      k
    );
  }
  function S(m, f, h, v) {
    var k = nr(h);
    if (typeof k != "function") throw Error(j(150));
    if (((h = k.call(h)), h == null)) throw Error(j(151));
    for (
      var N = (k = null), T = f, P = (f = 0), M = null, L = h.next();
      T !== null && !L.done;
      P++, L = h.next()
    ) {
      T.index > P ? ((M = T), (T = null)) : (M = T.sibling);
      var B = g(m, T, L.value, v);
      if (B === null) {
        T === null && (T = M);
        break;
      }
      e && T && B.alternate === null && t(m, T),
        (f = o(B, f, P)),
        N === null ? (k = B) : (N.sibling = B),
        (N = B),
        (T = M);
    }
    if (L.done) return n(m, T), J && nn(m, P), k;
    if (T === null) {
      for (; !L.done; P++, L = h.next())
        (L = p(m, L.value, v)),
          L !== null &&
            ((f = o(L, f, P)), N === null ? (k = L) : (N.sibling = L), (N = L));
      return J && nn(m, P), k;
    }
    for (T = r(m, T); !L.done; P++, L = h.next())
      (L = w(T, m, P, L.value, v)),
        L !== null &&
          (e && L.alternate !== null && T.delete(L.key === null ? P : L.key),
          (f = o(L, f, P)),
          N === null ? (k = L) : (N.sibling = L),
          (N = L));
    return (
      e &&
        T.forEach(function (X) {
          return t(m, X);
        }),
      J && nn(m, P),
      k
    );
  }
  function C(m, f, h, v) {
    if (
      (typeof h == "object" &&
        h !== null &&
        h.type === bn &&
        h.key === null &&
        (h = h.props.children),
      typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case nl:
          e: {
            for (var k = h.key, N = f; N !== null; ) {
              if (N.key === k) {
                if (((k = h.type), k === bn)) {
                  if (N.tag === 7) {
                    n(m, N.sibling),
                      (f = l(N, h.props.children)),
                      (f.return = m),
                      (m = f);
                    break e;
                  }
                } else if (
                  N.elementType === k ||
                  (typeof k == "object" &&
                    k !== null &&
                    k.$$typeof === $t &&
                    qa(k) === N.type)
                ) {
                  n(m, N.sibling),
                    (f = l(N, h.props)),
                    (f.ref = sr(m, N, h)),
                    (f.return = m),
                    (m = f);
                  break e;
                }
                n(m, N);
                break;
              } else t(m, N);
              N = N.sibling;
            }
            h.type === bn
              ? ((f = pn(h.props.children, m.mode, v, h.key)),
                (f.return = m),
                (m = f))
              : ((v = Ll(h.type, h.key, h.props, null, m.mode, v)),
                (v.ref = sr(m, f, h)),
                (v.return = m),
                (m = v));
          }
          return i(m);
        case Cn:
          e: {
            for (N = h.key; f !== null; ) {
              if (f.key === N)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === h.containerInfo &&
                  f.stateNode.implementation === h.implementation
                ) {
                  n(m, f.sibling),
                    (f = l(f, h.children || [])),
                    (f.return = m),
                    (m = f);
                  break e;
                } else {
                  n(m, f);
                  break;
                }
              else t(m, f);
              f = f.sibling;
            }
            (f = oi(h, m.mode, v)), (f.return = m), (m = f);
          }
          return i(m);
        case $t:
          return (N = h._init), C(m, f, N(h._payload), v);
      }
      if (hr(h)) return x(m, f, h, v);
      if (nr(h)) return S(m, f, h, v);
      pl(m, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        f !== null && f.tag === 6
          ? (n(m, f.sibling), (f = l(f, h)), (f.return = m), (m = f))
          : (n(m, f), (f = li(h, m.mode, v)), (f.return = m), (m = f)),
        i(m))
      : n(m, f);
  }
  return C;
}
var Yn = Yc(!0),
  Kc = Yc(!1),
  Yl = en(null),
  Kl = null,
  $n = null,
  $s = null;
function Fs() {
  $s = $n = Kl = null;
}
function zs(e) {
  var t = Yl.current;
  q(Yl), (e._currentValue = t);
}
function Wi(e, t, n) {
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
function Wn(e, t) {
  (Kl = e),
    ($s = $n = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Le = !0), (e.firstContext = null));
}
function Ge(e) {
  var t = e._currentValue;
  if ($s !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), $n === null)) {
      if (Kl === null) throw Error(j(308));
      ($n = e), (Kl.dependencies = { lanes: 0, firstContext: e });
    } else $n = $n.next = e;
  return t;
}
var an = null;
function Rs(e) {
  an === null ? (an = [e]) : an.push(e);
}
function Gc(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Rs(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Pt(e, r)
  );
}
function Pt(e, t) {
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
var Ft = !1;
function Is(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function qc(e, t) {
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
function Et(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Yt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), H & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Pt(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Rs(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Pt(e, n)
  );
}
function Cl(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Es(e, n);
  }
}
function Xa(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
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
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
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
function Gl(e, t, n, r) {
  var l = e.updateQueue;
  Ft = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    s = l.shared.pending;
  if (s !== null) {
    l.shared.pending = null;
    var a = s,
      c = a.next;
    (a.next = null), i === null ? (o = c) : (i.next = c), (i = a);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (s = d.lastBaseUpdate),
      s !== i &&
        (s === null ? (d.firstBaseUpdate = c) : (s.next = c),
        (d.lastBaseUpdate = a)));
  }
  if (o !== null) {
    var p = l.baseState;
    (i = 0), (d = c = a = null), (s = o);
    do {
      var g = s.lane,
        w = s.eventTime;
      if ((r & g) === g) {
        d !== null &&
          (d = d.next =
            {
              eventTime: w,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var x = e,
            S = s;
          switch (((g = t), (w = n), S.tag)) {
            case 1:
              if (((x = S.payload), typeof x == "function")) {
                p = x.call(w, p, g);
                break e;
              }
              p = x;
              break e;
            case 3:
              x.flags = (x.flags & -65537) | 128;
            case 0:
              if (
                ((x = S.payload),
                (g = typeof x == "function" ? x.call(w, p, g) : x),
                g == null)
              )
                break e;
              p = ne({}, p, g);
              break e;
            case 2:
              Ft = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (g = l.effects),
          g === null ? (l.effects = [s]) : g.push(s));
      } else
        (w = {
          eventTime: w,
          lane: g,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          d === null ? ((c = d = w), (a = p)) : (d = d.next = w),
          (i |= g);
      if (((s = s.next), s === null)) {
        if (((s = l.shared.pending), s === null)) break;
        (g = s),
          (s = g.next),
          (g.next = null),
          (l.lastBaseUpdate = g),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (d === null && (a = p),
      (l.baseState = a),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = d),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (vn |= i), (e.lanes = i), (e.memoizedState = p);
  }
}
function Ja(e, t, n) {
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
var Xr = {},
  ht = en(Xr),
  Ar = en(Xr),
  Hr = en(Xr);
function un(e) {
  if (e === Xr) throw Error(j(174));
  return e;
}
function As(e, t) {
  switch ((K(Hr, t), K(Ar, e), K(ht, Xr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ki(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ki(t, e));
  }
  q(ht), K(ht, t);
}
function Kn() {
  q(ht), q(Ar), q(Hr);
}
function Xc(e) {
  un(Hr.current);
  var t = un(ht.current),
    n = ki(t, e.type);
  t !== n && (K(Ar, e), K(ht, n));
}
function Hs(e) {
  Ar.current === e && (q(ht), q(Ar));
}
var ee = en(0);
function ql(e) {
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
var Jo = [];
function Ws() {
  for (var e = 0; e < Jo.length; e++)
    Jo[e]._workInProgressVersionPrimary = null;
  Jo.length = 0;
}
var bl = Ot.ReactCurrentDispatcher,
  Zo = Ot.ReactCurrentBatchConfig,
  yn = 0,
  te = null,
  ue = null,
  de = null,
  Xl = !1,
  Er = !1,
  Wr = 0,
  xm = 0;
function we() {
  throw Error(j(321));
}
function Us(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!it(e[n], t[n])) return !1;
  return !0;
}
function Bs(e, t, n, r, l, o) {
  if (
    ((yn = o),
    (te = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (bl.current = e === null || e.memoizedState === null ? Nm : Em),
    (e = n(r, l)),
    Er)
  ) {
    o = 0;
    do {
      if (((Er = !1), (Wr = 0), 25 <= o)) throw Error(j(301));
      (o += 1),
        (de = ue = null),
        (t.updateQueue = null),
        (bl.current = jm),
        (e = n(r, l));
    } while (Er);
  }
  if (
    ((bl.current = Jl),
    (t = ue !== null && ue.next !== null),
    (yn = 0),
    (de = ue = te = null),
    (Xl = !1),
    t)
  )
    throw Error(j(300));
  return e;
}
function Vs() {
  var e = Wr !== 0;
  return (Wr = 0), e;
}
function ft() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return de === null ? (te.memoizedState = de = e) : (de = de.next = e), de;
}
function qe() {
  if (ue === null) {
    var e = te.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ue.next;
  var t = de === null ? te.memoizedState : de.next;
  if (t !== null) (de = t), (ue = e);
  else {
    if (e === null) throw Error(j(310));
    (ue = e),
      (e = {
        memoizedState: ue.memoizedState,
        baseState: ue.baseState,
        baseQueue: ue.baseQueue,
        queue: ue.queue,
        next: null,
      }),
      de === null ? (te.memoizedState = de = e) : (de = de.next = e);
  }
  return de;
}
function Ur(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ei(e) {
  var t = qe(),
    n = t.queue;
  if (n === null) throw Error(j(311));
  n.lastRenderedReducer = e;
  var r = ue,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var s = (i = null),
      a = null,
      c = o;
    do {
      var d = c.lane;
      if ((yn & d) === d)
        a !== null &&
          (a = a.next =
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
          lane: d,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        a === null ? ((s = a = p), (i = r)) : (a = a.next = p),
          (te.lanes |= d),
          (vn |= d);
      }
      c = c.next;
    } while (c !== null && c !== o);
    a === null ? (i = r) : (a.next = s),
      it(r, t.memoizedState) || (Le = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (te.lanes |= o), (vn |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ti(e) {
  var t = qe(),
    n = t.queue;
  if (n === null) throw Error(j(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    it(o, t.memoizedState) || (Le = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Jc() {}
function Zc(e, t) {
  var n = te,
    r = qe(),
    l = t(),
    o = !it(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (Le = !0)),
    (r = r.queue),
    Qs(nd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (de !== null && de.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Br(9, td.bind(null, n, r, l, t), void 0, null),
      fe === null)
    )
      throw Error(j(349));
    yn & 30 || ed(n, t, l);
  }
  return l;
}
function ed(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = te.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (te.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function td(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), rd(t) && ld(e);
}
function nd(e, t, n) {
  return n(function () {
    rd(t) && ld(e);
  });
}
function rd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !it(e, n);
  } catch {
    return !0;
  }
}
function ld(e) {
  var t = Pt(e, 1);
  t !== null && ot(t, e, 1, -1);
}
function Za(e) {
  var t = ft();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ur,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = km.bind(null, te, e)),
    [t.memoizedState, e]
  );
}
function Br(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = te.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (te.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function od() {
  return qe().memoizedState;
}
function Tl(e, t, n, r) {
  var l = ft();
  (te.flags |= e),
    (l.memoizedState = Br(1 | t, n, void 0, r === void 0 ? null : r));
}
function xo(e, t, n, r) {
  var l = qe();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (ue !== null) {
    var i = ue.memoizedState;
    if (((o = i.destroy), r !== null && Us(r, i.deps))) {
      l.memoizedState = Br(t, n, o, r);
      return;
    }
  }
  (te.flags |= e), (l.memoizedState = Br(1 | t, n, o, r));
}
function eu(e, t) {
  return Tl(8390656, 8, e, t);
}
function Qs(e, t) {
  return xo(2048, 8, e, t);
}
function id(e, t) {
  return xo(4, 2, e, t);
}
function sd(e, t) {
  return xo(4, 4, e, t);
}
function ad(e, t) {
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
function ud(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), xo(4, 4, ad.bind(null, t, e), n)
  );
}
function Ys() {}
function cd(e, t) {
  var n = qe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Us(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function dd(e, t) {
  var n = qe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Us(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function fd(e, t, n) {
  return yn & 21
    ? (it(n, t) || ((n = yc()), (te.lanes |= n), (vn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Le = !0)), (e.memoizedState = n));
}
function wm(e, t) {
  var n = Q;
  (Q = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Zo.transition;
  Zo.transition = {};
  try {
    e(!1), t();
  } finally {
    (Q = n), (Zo.transition = r);
  }
}
function pd() {
  return qe().memoizedState;
}
function Sm(e, t, n) {
  var r = Gt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    md(e))
  )
    hd(t, n);
  else if (((n = Gc(e, t, n, r)), n !== null)) {
    var l = Te();
    ot(n, e, r, l), gd(n, t, r);
  }
}
function km(e, t, n) {
  var r = Gt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (md(e)) hd(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          s = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = s), it(s, i))) {
          var a = t.interleaved;
          a === null
            ? ((l.next = l), Rs(t))
            : ((l.next = a.next), (a.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = Gc(e, t, l, r)),
      n !== null && ((l = Te()), ot(n, e, r, l), gd(n, t, r));
  }
}
function md(e) {
  var t = e.alternate;
  return e === te || (t !== null && t === te);
}
function hd(e, t) {
  Er = Xl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function gd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Es(e, n);
  }
}
var Jl = {
    readContext: Ge,
    useCallback: we,
    useContext: we,
    useEffect: we,
    useImperativeHandle: we,
    useInsertionEffect: we,
    useLayoutEffect: we,
    useMemo: we,
    useReducer: we,
    useRef: we,
    useState: we,
    useDebugValue: we,
    useDeferredValue: we,
    useTransition: we,
    useMutableSource: we,
    useSyncExternalStore: we,
    useId: we,
    unstable_isNewReconciler: !1,
  },
  Nm = {
    readContext: Ge,
    useCallback: function (e, t) {
      return (ft().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ge,
    useEffect: eu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Tl(4194308, 4, ad.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Tl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Tl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = ft();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = ft();
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
        (e = e.dispatch = Sm.bind(null, te, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = ft();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Za,
    useDebugValue: Ys,
    useDeferredValue: function (e) {
      return (ft().memoizedState = e);
    },
    useTransition: function () {
      var e = Za(!1),
        t = e[0];
      return (e = wm.bind(null, e[1])), (ft().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = te,
        l = ft();
      if (J) {
        if (n === void 0) throw Error(j(407));
        n = n();
      } else {
        if (((n = t()), fe === null)) throw Error(j(349));
        yn & 30 || ed(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        eu(nd.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Br(9, td.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = ft(),
        t = fe.identifierPrefix;
      if (J) {
        var n = kt,
          r = St;
        (n = (r & ~(1 << (32 - lt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Wr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = xm++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Em = {
    readContext: Ge,
    useCallback: cd,
    useContext: Ge,
    useEffect: Qs,
    useImperativeHandle: ud,
    useInsertionEffect: id,
    useLayoutEffect: sd,
    useMemo: dd,
    useReducer: ei,
    useRef: od,
    useState: function () {
      return ei(Ur);
    },
    useDebugValue: Ys,
    useDeferredValue: function (e) {
      var t = qe();
      return fd(t, ue.memoizedState, e);
    },
    useTransition: function () {
      var e = ei(Ur)[0],
        t = qe().memoizedState;
      return [e, t];
    },
    useMutableSource: Jc,
    useSyncExternalStore: Zc,
    useId: pd,
    unstable_isNewReconciler: !1,
  },
  jm = {
    readContext: Ge,
    useCallback: cd,
    useContext: Ge,
    useEffect: Qs,
    useImperativeHandle: ud,
    useInsertionEffect: id,
    useLayoutEffect: sd,
    useMemo: dd,
    useReducer: ti,
    useRef: od,
    useState: function () {
      return ti(Ur);
    },
    useDebugValue: Ys,
    useDeferredValue: function (e) {
      var t = qe();
      return ue === null ? (t.memoizedState = e) : fd(t, ue.memoizedState, e);
    },
    useTransition: function () {
      var e = ti(Ur)[0],
        t = qe().memoizedState;
      return [e, t];
    },
    useMutableSource: Jc,
    useSyncExternalStore: Zc,
    useId: pd,
    unstable_isNewReconciler: !1,
  };
function tt(e, t) {
  if (e && e.defaultProps) {
    (t = ne({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ui(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ne({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var wo = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? kn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Te(),
      l = Gt(e),
      o = Et(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Yt(e, o, l)),
      t !== null && (ot(t, e, l, r), Cl(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Te(),
      l = Gt(e),
      o = Et(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Yt(e, o, l)),
      t !== null && (ot(t, e, l, r), Cl(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Te(),
      r = Gt(e),
      l = Et(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = Yt(e, l, r)),
      t !== null && (ot(t, e, r, n), Cl(t, e, r));
  },
};
function tu(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Fr(n, r) || !Fr(l, o)
      : !0
  );
}
function yd(e, t, n) {
  var r = !1,
    l = Jt,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Ge(o))
      : ((l = Me(t) ? hn : Ee.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Vn(e, l) : Jt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = wo),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function nu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && wo.enqueueReplaceState(t, t.state, null);
}
function Bi(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), Is(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = Ge(o))
    : ((o = Me(t) ? hn : Ee.current), (l.context = Vn(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Ui(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && wo.enqueueReplaceState(l, l.state, null),
      Gl(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function Gn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Zf(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function ni(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Vi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Cm = typeof WeakMap == "function" ? WeakMap : Map;
function vd(e, t, n) {
  (n = Et(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      eo || ((eo = !0), (ts = r)), Vi(e, t);
    }),
    n
  );
}
function xd(e, t, n) {
  (n = Et(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Vi(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Vi(e, t),
          typeof r != "function" &&
            (Kt === null ? (Kt = new Set([this])) : Kt.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function ru(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Cm();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = Am.bind(null, e, t, n)), t.then(e, e));
}
function lu(e) {
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
function ou(e, t, n, r, l) {
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
              : ((t = Et(-1, 1)), (t.tag = 2), Yt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var bm = Ot.ReactCurrentOwner,
  Le = !1;
function be(e, t, n, r) {
  t.child = e === null ? Kc(t, null, n, r) : Yn(t, e.child, n, r);
}
function iu(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    Wn(t, l),
    (r = Bs(e, t, n, r, o, l)),
    (n = Vs()),
    e !== null && !Le
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Dt(e, t, l))
      : (J && n && Ls(t), (t.flags |= 1), be(e, t, r, l), t.child)
  );
}
function su(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !ta(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), wd(e, t, o, r, l))
      : ((e = Ll(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Fr), n(i, r) && e.ref === t.ref)
    )
      return Dt(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = qt(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function wd(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Fr(o, r) && e.ref === t.ref)
      if (((Le = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (Le = !0);
      else return (t.lanes = e.lanes), Dt(e, t, l);
  }
  return Qi(e, t, n, r, l);
}
function Sd(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        K(zn, Fe),
        (Fe |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          K(zn, Fe),
          (Fe |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        K(zn, Fe),
        (Fe |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      K(zn, Fe),
      (Fe |= r);
  return be(e, t, l, n), t.child;
}
function kd(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Qi(e, t, n, r, l) {
  var o = Me(n) ? hn : Ee.current;
  return (
    (o = Vn(t, o)),
    Wn(t, l),
    (n = Bs(e, t, n, r, o, l)),
    (r = Vs()),
    e !== null && !Le
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Dt(e, t, l))
      : (J && r && Ls(t), (t.flags |= 1), be(e, t, n, l), t.child)
  );
}
function au(e, t, n, r, l) {
  if (Me(n)) {
    var o = !0;
    Bl(t);
  } else o = !1;
  if ((Wn(t, l), t.stateNode === null))
    Pl(e, t), yd(t, n, r), Bi(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      s = t.memoizedProps;
    i.props = s;
    var a = i.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = Ge(c))
      : ((c = Me(n) ? hn : Ee.current), (c = Vn(t, c)));
    var d = n.getDerivedStateFromProps,
      p =
        typeof d == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    p ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((s !== r || a !== c) && nu(t, i, r, c)),
      (Ft = !1);
    var g = t.memoizedState;
    (i.state = g),
      Gl(t, r, i, l),
      (a = t.memoizedState),
      s !== r || g !== a || _e.current || Ft
        ? (typeof d == "function" && (Ui(t, n, d, r), (a = t.memoizedState)),
          (s = Ft || tu(t, n, s, r, g, a, c))
            ? (p ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (i.props = r),
          (i.state = a),
          (i.context = c),
          (r = s))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      qc(e, t),
      (s = t.memoizedProps),
      (c = t.type === t.elementType ? s : tt(t.type, s)),
      (i.props = c),
      (p = t.pendingProps),
      (g = i.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = Ge(a))
        : ((a = Me(n) ? hn : Ee.current), (a = Vn(t, a)));
    var w = n.getDerivedStateFromProps;
    (d =
      typeof w == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((s !== p || g !== a) && nu(t, i, r, a)),
      (Ft = !1),
      (g = t.memoizedState),
      (i.state = g),
      Gl(t, r, i, l);
    var x = t.memoizedState;
    s !== p || g !== x || _e.current || Ft
      ? (typeof w == "function" && (Ui(t, n, w, r), (x = t.memoizedState)),
        (c = Ft || tu(t, n, c, r, g, x, a) || !1)
          ? (d ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, x, a),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, x, a)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (s === e.memoizedProps && g === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && g === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = x)),
        (i.props = r),
        (i.state = x),
        (i.context = a),
        (r = c))
      : (typeof i.componentDidUpdate != "function" ||
          (s === e.memoizedProps && g === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && g === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Yi(e, t, n, r, o, l);
}
function Yi(e, t, n, r, l, o) {
  kd(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && Ya(t, n, !1), Dt(e, t, o);
  (r = t.stateNode), (bm.current = t);
  var s =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = Yn(t, e.child, null, o)), (t.child = Yn(t, null, s, o)))
      : be(e, t, s, o),
    (t.memoizedState = r.state),
    l && Ya(t, n, !0),
    t.child
  );
}
function Nd(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Qa(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Qa(e, t.context, !1),
    As(e, t.containerInfo);
}
function uu(e, t, n, r, l) {
  return Qn(), Ms(l), (t.flags |= 256), be(e, t, n, r), t.child;
}
var Ki = { dehydrated: null, treeContext: null, retryLane: 0 };
function Gi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ed(e, t, n) {
  var r = t.pendingProps,
    l = ee.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    s;
  if (
    ((s = i) ||
      (s = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    s
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    K(ee, l & 1),
    e === null)
  )
    return (
      Hi(t),
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
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = No(i, r, 0, null)),
              (e = pn(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Gi(n)),
              (t.memoizedState = Ki),
              e)
            : Ks(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((s = l.dehydrated), s !== null)))
    return Tm(e, t, i, r, s, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (s = l.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = qt(l, a)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      s !== null ? (o = qt(s, o)) : ((o = pn(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Gi(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Ki),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = qt(o, { mode: "visible", children: r.children })),
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
function Ks(e, t) {
  return (
    (t = No({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function ml(e, t, n, r) {
  return (
    r !== null && Ms(r),
    Yn(t, e.child, null, n),
    (e = Ks(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Tm(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ni(Error(j(422)))), ml(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = No({ mode: "visible", children: r.children }, l, 0, null)),
        (o = pn(o, l, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && Yn(t, e.child, null, i),
        (t.child.memoizedState = Gi(i)),
        (t.memoizedState = Ki),
        o);
  if (!(t.mode & 1)) return ml(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (o = Error(j(419))), (r = ni(o, r, void 0)), ml(e, t, i, r);
  }
  if (((s = (i & e.childLanes) !== 0), Le || s)) {
    if (((r = fe), r !== null)) {
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
          l !== o.retryLane &&
          ((o.retryLane = l), Pt(e, l), ot(r, e, l, -1));
    }
    return ea(), (r = ni(Error(j(421)))), ml(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Hm.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Re = Qt(l.nextSibling)),
      (Ie = t),
      (J = !0),
      (rt = null),
      e !== null &&
        ((Ve[Qe++] = St),
        (Ve[Qe++] = kt),
        (Ve[Qe++] = gn),
        (St = e.id),
        (kt = e.overflow),
        (gn = t)),
      (t = Ks(t, r.children)),
      (t.flags |= 4096),
      t);
}
function cu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Wi(e.return, t, n);
}
function ri(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function jd(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((be(e, t, r.children, n), (r = ee.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && cu(e, n, t);
        else if (e.tag === 19) cu(e, n, t);
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
  if ((K(ee, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && ql(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          ri(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && ql(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        ri(t, !0, n, null, o);
        break;
      case "together":
        ri(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Pl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Dt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (vn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(j(153));
  if (t.child !== null) {
    for (
      e = t.child, n = qt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = qt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Pm(e, t, n) {
  switch (t.tag) {
    case 3:
      Nd(t), Qn();
      break;
    case 5:
      Xc(t);
      break;
    case 1:
      Me(t.type) && Bl(t);
      break;
    case 4:
      As(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      K(Yl, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (K(ee, ee.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Ed(e, t, n)
          : (K(ee, ee.current & 1),
            (e = Dt(e, t, n)),
            e !== null ? e.sibling : null);
      K(ee, ee.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return jd(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        K(ee, ee.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Sd(e, t, n);
  }
  return Dt(e, t, n);
}
var Cd, qi, bd, Td;
Cd = function (e, t) {
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
qi = function () {};
bd = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), un(ht.current);
    var o = null;
    switch (n) {
      case "input":
        (l = vi(e, l)), (r = vi(e, r)), (o = []);
        break;
      case "select":
        (l = ne({}, l, { value: void 0 })),
          (r = ne({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = Si(e, l)), (r = Si(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Wl);
    }
    Ni(n, r);
    var i;
    n = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var s = l[c];
          for (i in s) s.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Pr.hasOwnProperty(c)
              ? o || (o = [])
              : (o = o || []).push(c, null));
    for (c in r) {
      var a = r[c];
      if (
        ((s = l != null ? l[c] : void 0),
        r.hasOwnProperty(c) && a !== s && (a != null || s != null))
      )
        if (c === "style")
          if (s) {
            for (i in s)
              !s.hasOwnProperty(i) ||
                (a && a.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in a)
              a.hasOwnProperty(i) &&
                s[i] !== a[i] &&
                (n || (n = {}), (n[i] = a[i]));
          } else n || (o || (o = []), o.push(c, n)), (n = a);
        else
          c === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (s = s ? s.__html : void 0),
              a != null && s !== a && (o = o || []).push(c, a))
            : c === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (o = o || []).push(c, "" + a)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (Pr.hasOwnProperty(c)
                ? (a != null && c === "onScroll" && G("scroll", e),
                  o || s === a || (o = []))
                : (o = o || []).push(c, a));
    }
    n && (o = o || []).push("style", n);
    var c = o;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Td = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ar(e, t) {
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
function Se(e) {
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
function Dm(e, t, n) {
  var r = t.pendingProps;
  switch ((_s(t), t.tag)) {
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
      return Se(t), null;
    case 1:
      return Me(t.type) && Ul(), Se(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Kn(),
        q(_e),
        q(Ee),
        Ws(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (fl(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), rt !== null && (ls(rt), (rt = null)))),
        qi(e, t),
        Se(t),
        null
      );
    case 5:
      Hs(t);
      var l = un(Hr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        bd(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(j(166));
          return Se(t), null;
        }
        if (((e = un(ht.current)), fl(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[pt] = t), (r[Ir] = o), (e = (t.mode & 1) !== 0), n)) {
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
              for (l = 0; l < yr.length; l++) G(yr[l], r);
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
              xa(r, o), G("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                G("invalid", r);
              break;
            case "textarea":
              Sa(r, o), G("invalid", r);
          }
          Ni(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var s = o[i];
              i === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (o.suppressHydrationWarning !== !0 &&
                      dl(r.textContent, s, e),
                    (l = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (o.suppressHydrationWarning !== !0 &&
                      dl(r.textContent, s, e),
                    (l = ["children", "" + s]))
                : Pr.hasOwnProperty(i) &&
                  s != null &&
                  i === "onScroll" &&
                  G("scroll", r);
            }
          switch (n) {
            case "input":
              rl(r), wa(r, o, !0);
              break;
            case "textarea":
              rl(r), ka(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Wl);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = nc(n)),
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
            (e[pt] = t),
            (e[Ir] = r),
            Cd(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = Ei(n, r)), n)) {
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
                for (l = 0; l < yr.length; l++) G(yr[l], e);
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
                xa(e, r), (l = vi(e, r)), G("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = ne({}, r, { value: void 0 })),
                  G("invalid", e);
                break;
              case "textarea":
                Sa(e, r), (l = Si(e, r)), G("invalid", e);
                break;
              default:
                l = r;
            }
            Ni(n, l), (s = l);
            for (o in s)
              if (s.hasOwnProperty(o)) {
                var a = s[o];
                o === "style"
                  ? oc(e, a)
                  : o === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && rc(e, a))
                  : o === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && Dr(e, a)
                    : typeof a == "number" && Dr(e, "" + a)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Pr.hasOwnProperty(o)
                      ? a != null && o === "onScroll" && G("scroll", e)
                      : a != null && vs(e, o, a, i));
              }
            switch (n) {
              case "input":
                rl(e), wa(e, r, !1);
                break;
              case "textarea":
                rl(e), ka(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Xt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Rn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Rn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Wl);
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
      return Se(t), null;
    case 6:
      if (e && t.stateNode != null) Td(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(j(166));
        if (((n = un(Hr.current)), un(ht.current), fl(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[pt] = t),
            (o = r.nodeValue !== n) && ((e = Ie), e !== null))
          )
            switch (e.tag) {
              case 3:
                dl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  dl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[pt] = t),
            (t.stateNode = r);
      }
      return Se(t), null;
    case 13:
      if (
        (q(ee),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (J && Re !== null && t.mode & 1 && !(t.flags & 128))
          Qc(), Qn(), (t.flags |= 98560), (o = !1);
        else if (((o = fl(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(j(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(j(317));
            o[pt] = t;
          } else
            Qn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Se(t), (o = !1);
        } else rt !== null && (ls(rt), (rt = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ee.current & 1 ? ce === 0 && (ce = 3) : ea())),
          t.updateQueue !== null && (t.flags |= 4),
          Se(t),
          null);
    case 4:
      return (
        Kn(), qi(e, t), e === null && zr(t.stateNode.containerInfo), Se(t), null
      );
    case 10:
      return zs(t.type._context), Se(t), null;
    case 17:
      return Me(t.type) && Ul(), Se(t), null;
    case 19:
      if ((q(ee), (o = t.memoizedState), o === null)) return Se(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) ar(o, !1);
        else {
          if (ce !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = ql(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    ar(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return K(ee, (ee.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            ie() > qn &&
            ((t.flags |= 128), (r = !0), ar(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ql(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              ar(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !J)
            )
              return Se(t), null;
          } else
            2 * ie() - o.renderingStartTime > qn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), ar(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = ie()),
          (t.sibling = null),
          (n = ee.current),
          K(ee, r ? (n & 1) | 2 : n & 1),
          t)
        : (Se(t), null);
    case 22:
    case 23:
      return (
        Zs(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Fe & 1073741824 && (Se(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Se(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(j(156, t.tag));
}
function Om(e, t) {
  switch ((_s(t), t.tag)) {
    case 1:
      return (
        Me(t.type) && Ul(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Kn(),
        q(_e),
        q(Ee),
        Ws(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Hs(t), null;
    case 13:
      if ((q(ee), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(j(340));
        Qn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return q(ee), null;
    case 4:
      return Kn(), null;
    case 10:
      return zs(t.type._context), null;
    case 22:
    case 23:
      return Zs(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var hl = !1,
  ke = !1,
  Lm = typeof WeakSet == "function" ? WeakSet : Set,
  D = null;
function Fn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        le(e, t, r);
      }
    else n.current = null;
}
function Xi(e, t, n) {
  try {
    n();
  } catch (r) {
    le(e, t, r);
  }
}
var du = !1;
function _m(e, t) {
  if (((Mi = Il), (e = _c()), Os(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            s = -1,
            a = -1,
            c = 0,
            d = 0,
            p = e,
            g = null;
          t: for (;;) {
            for (
              var w;
              p !== n || (l !== 0 && p.nodeType !== 3) || (s = i + l),
                p !== o || (r !== 0 && p.nodeType !== 3) || (a = i + r),
                p.nodeType === 3 && (i += p.nodeValue.length),
                (w = p.firstChild) !== null;

            )
              (g = p), (p = w);
            for (;;) {
              if (p === e) break t;
              if (
                (g === n && ++c === l && (s = i),
                g === o && ++d === r && (a = i),
                (w = p.nextSibling) !== null)
              )
                break;
              (p = g), (g = p.parentNode);
            }
            p = w;
          }
          n = s === -1 || a === -1 ? null : { start: s, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for ($i = { focusedElem: e, selectionRange: n }, Il = !1, D = t; D !== null; )
    if (((t = D), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (D = e);
    else
      for (; D !== null; ) {
        t = D;
        try {
          var x = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (x !== null) {
                  var S = x.memoizedProps,
                    C = x.memoizedState,
                    m = t.stateNode,
                    f = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? S : tt(t.type, S),
                      C
                    );
                  m.__reactInternalSnapshotBeforeUpdate = f;
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
          le(t, t.return, v);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (D = e);
          break;
        }
        D = t.return;
      }
  return (x = du), (du = !1), x;
}
function jr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && Xi(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function So(e, t) {
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
function Ji(e) {
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
function Pd(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Pd(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[pt], delete t[Ir], delete t[Ri], delete t[hm], delete t[gm])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Dd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function fu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Dd(e.return)) return null;
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
function Zi(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = Wl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Zi(e, t, n), e = e.sibling; e !== null; ) Zi(e, t, n), (e = e.sibling);
}
function es(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (es(e, t, n), e = e.sibling; e !== null; ) es(e, t, n), (e = e.sibling);
}
var pe = null,
  nt = !1;
function Lt(e, t, n) {
  for (n = n.child; n !== null; ) Od(e, t, n), (n = n.sibling);
}
function Od(e, t, n) {
  if (mt && typeof mt.onCommitFiberUnmount == "function")
    try {
      mt.onCommitFiberUnmount(po, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ke || Fn(n, t);
    case 6:
      var r = pe,
        l = nt;
      (pe = null),
        Lt(e, t, n),
        (pe = r),
        (nt = l),
        pe !== null &&
          (nt
            ? ((e = pe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : pe.removeChild(n.stateNode));
      break;
    case 18:
      pe !== null &&
        (nt
          ? ((e = pe),
            (n = n.stateNode),
            e.nodeType === 8
              ? qo(e.parentNode, n)
              : e.nodeType === 1 && qo(e, n),
            Mr(e))
          : qo(pe, n.stateNode));
      break;
    case 4:
      (r = pe),
        (l = nt),
        (pe = n.stateNode.containerInfo),
        (nt = !0),
        Lt(e, t, n),
        (pe = r),
        (nt = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ke &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && Xi(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      Lt(e, t, n);
      break;
    case 1:
      if (
        !ke &&
        (Fn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          le(n, t, s);
        }
      Lt(e, t, n);
      break;
    case 21:
      Lt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ke = (r = ke) || n.memoizedState !== null), Lt(e, t, n), (ke = r))
        : Lt(e, t, n);
      break;
    default:
      Lt(e, t, n);
  }
}
function pu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Lm()),
      t.forEach(function (r) {
        var l = Wm.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function et(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          s = i;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (pe = s.stateNode), (nt = !1);
              break e;
            case 3:
              (pe = s.stateNode.containerInfo), (nt = !0);
              break e;
            case 4:
              (pe = s.stateNode.containerInfo), (nt = !0);
              break e;
          }
          s = s.return;
        }
        if (pe === null) throw Error(j(160));
        Od(o, i, l), (pe = null), (nt = !1);
        var a = l.alternate;
        a !== null && (a.return = null), (l.return = null);
      } catch (c) {
        le(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Ld(t, e), (t = t.sibling);
}
function Ld(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((et(t, e), dt(e), r & 4)) {
        try {
          jr(3, e, e.return), So(3, e);
        } catch (S) {
          le(e, e.return, S);
        }
        try {
          jr(5, e, e.return);
        } catch (S) {
          le(e, e.return, S);
        }
      }
      break;
    case 1:
      et(t, e), dt(e), r & 512 && n !== null && Fn(n, n.return);
      break;
    case 5:
      if (
        (et(t, e),
        dt(e),
        r & 512 && n !== null && Fn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Dr(l, "");
        } catch (S) {
          le(e, e.return, S);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          s = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            s === "input" && o.type === "radio" && o.name != null && ec(l, o),
              Ei(s, i);
            var c = Ei(s, o);
            for (i = 0; i < a.length; i += 2) {
              var d = a[i],
                p = a[i + 1];
              d === "style"
                ? oc(l, p)
                : d === "dangerouslySetInnerHTML"
                ? rc(l, p)
                : d === "children"
                ? Dr(l, p)
                : vs(l, d, p, c);
            }
            switch (s) {
              case "input":
                xi(l, o);
                break;
              case "textarea":
                tc(l, o);
                break;
              case "select":
                var g = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var w = o.value;
                w != null
                  ? Rn(l, !!o.multiple, w, !1)
                  : g !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Rn(l, !!o.multiple, o.defaultValue, !0)
                      : Rn(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[Ir] = o;
          } catch (S) {
            le(e, e.return, S);
          }
      }
      break;
    case 6:
      if ((et(t, e), dt(e), r & 4)) {
        if (e.stateNode === null) throw Error(j(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (S) {
          le(e, e.return, S);
        }
      }
      break;
    case 3:
      if (
        (et(t, e), dt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Mr(t.containerInfo);
        } catch (S) {
          le(e, e.return, S);
        }
      break;
    case 4:
      et(t, e), dt(e);
      break;
    case 13:
      et(t, e),
        dt(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Xs = ie())),
        r & 4 && pu(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ke = (c = ke) || d), et(t, e), (ke = c)) : et(t, e),
        dt(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !d && e.mode & 1)
        )
          for (D = e, d = e.child; d !== null; ) {
            for (p = D = d; D !== null; ) {
              switch (((g = D), (w = g.child), g.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  jr(4, g, g.return);
                  break;
                case 1:
                  Fn(g, g.return);
                  var x = g.stateNode;
                  if (typeof x.componentWillUnmount == "function") {
                    (r = g), (n = g.return);
                    try {
                      (t = r),
                        (x.props = t.memoizedProps),
                        (x.state = t.memoizedState),
                        x.componentWillUnmount();
                    } catch (S) {
                      le(r, n, S);
                    }
                  }
                  break;
                case 5:
                  Fn(g, g.return);
                  break;
                case 22:
                  if (g.memoizedState !== null) {
                    hu(p);
                    continue;
                  }
              }
              w !== null ? ((w.return = g), (D = w)) : hu(p);
            }
            d = d.sibling;
          }
        e: for (d = null, p = e; ; ) {
          if (p.tag === 5) {
            if (d === null) {
              d = p;
              try {
                (l = p.stateNode),
                  c
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((s = p.stateNode),
                      (a = p.memoizedProps.style),
                      (i =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (s.style.display = lc("display", i)));
              } catch (S) {
                le(e, e.return, S);
              }
            }
          } else if (p.tag === 6) {
            if (d === null)
              try {
                p.stateNode.nodeValue = c ? "" : p.memoizedProps;
              } catch (S) {
                le(e, e.return, S);
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
            d === p && (d = null), (p = p.return);
          }
          d === p && (d = null), (p.sibling.return = p.return), (p = p.sibling);
        }
      }
      break;
    case 19:
      et(t, e), dt(e), r & 4 && pu(e);
      break;
    case 21:
      break;
    default:
      et(t, e), dt(e);
  }
}
function dt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Dd(n)) {
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
          r.flags & 32 && (Dr(l, ""), (r.flags &= -33));
          var o = fu(e);
          es(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            s = fu(e);
          Zi(e, s, i);
          break;
        default:
          throw Error(j(161));
      }
    } catch (a) {
      le(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Mm(e, t, n) {
  (D = e), _d(e);
}
function _d(e, t, n) {
  for (var r = (e.mode & 1) !== 0; D !== null; ) {
    var l = D,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || hl;
      if (!i) {
        var s = l.alternate,
          a = (s !== null && s.memoizedState !== null) || ke;
        s = hl;
        var c = ke;
        if (((hl = i), (ke = a) && !c))
          for (D = l; D !== null; )
            (i = D),
              (a = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? gu(l)
                : a !== null
                ? ((a.return = i), (D = a))
                : gu(l);
        for (; o !== null; ) (D = o), _d(o), (o = o.sibling);
        (D = l), (hl = s), (ke = c);
      }
      mu(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (D = o)) : mu(e);
  }
}
function mu(e) {
  for (; D !== null; ) {
    var t = D;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ke || So(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ke)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : tt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Ja(t, o, r);
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
                Ja(t, i, n);
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
                var c = t.alternate;
                if (c !== null) {
                  var d = c.memoizedState;
                  if (d !== null) {
                    var p = d.dehydrated;
                    p !== null && Mr(p);
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
        ke || (t.flags & 512 && Ji(t));
      } catch (g) {
        le(t, t.return, g);
      }
    }
    if (t === e) {
      D = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (D = n);
      break;
    }
    D = t.return;
  }
}
function hu(e) {
  for (; D !== null; ) {
    var t = D;
    if (t === e) {
      D = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (D = n);
      break;
    }
    D = t.return;
  }
}
function gu(e) {
  for (; D !== null; ) {
    var t = D;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            So(4, t);
          } catch (a) {
            le(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              le(t, l, a);
            }
          }
          var o = t.return;
          try {
            Ji(t);
          } catch (a) {
            le(t, o, a);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Ji(t);
          } catch (a) {
            le(t, i, a);
          }
      }
    } catch (a) {
      le(t, t.return, a);
    }
    if (t === e) {
      D = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (D = s);
      break;
    }
    D = t.return;
  }
}
var $m = Math.ceil,
  Zl = Ot.ReactCurrentDispatcher,
  Gs = Ot.ReactCurrentOwner,
  Ke = Ot.ReactCurrentBatchConfig,
  H = 0,
  fe = null,
  se = null,
  me = 0,
  Fe = 0,
  zn = en(0),
  ce = 0,
  Vr = null,
  vn = 0,
  ko = 0,
  qs = 0,
  Cr = null,
  Oe = null,
  Xs = 0,
  qn = 1 / 0,
  yt = null,
  eo = !1,
  ts = null,
  Kt = null,
  gl = !1,
  Ht = null,
  to = 0,
  br = 0,
  ns = null,
  Dl = -1,
  Ol = 0;
function Te() {
  return H & 6 ? ie() : Dl !== -1 ? Dl : (Dl = ie());
}
function Gt(e) {
  return e.mode & 1
    ? H & 2 && me !== 0
      ? me & -me
      : vm.transition !== null
      ? (Ol === 0 && (Ol = yc()), Ol)
      : ((e = Q),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ec(e.type))),
        e)
    : 1;
}
function ot(e, t, n, r) {
  if (50 < br) throw ((br = 0), (ns = null), Error(j(185)));
  Kr(e, n, r),
    (!(H & 2) || e !== fe) &&
      (e === fe && (!(H & 2) && (ko |= n), ce === 4 && Rt(e, me)),
      $e(e, r),
      n === 1 && H === 0 && !(t.mode & 1) && ((qn = ie() + 500), vo && tn()));
}
function $e(e, t) {
  var n = e.callbackNode;
  vp(e, t);
  var r = Rl(e, e === fe ? me : 0);
  if (r === 0)
    n !== null && ja(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && ja(n), t === 1))
      e.tag === 0 ? ym(yu.bind(null, e)) : Uc(yu.bind(null, e)),
        pm(function () {
          !(H & 6) && tn();
        }),
        (n = null);
    else {
      switch (vc(r)) {
        case 1:
          n = Ns;
          break;
        case 4:
          n = hc;
          break;
        case 16:
          n = zl;
          break;
        case 536870912:
          n = gc;
          break;
        default:
          n = zl;
      }
      n = Hd(n, Md.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Md(e, t) {
  if (((Dl = -1), (Ol = 0), H & 6)) throw Error(j(327));
  var n = e.callbackNode;
  if (Un() && e.callbackNode !== n) return null;
  var r = Rl(e, e === fe ? me : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = no(e, r);
  else {
    t = r;
    var l = H;
    H |= 2;
    var o = Fd();
    (fe !== e || me !== t) && ((yt = null), (qn = ie() + 500), fn(e, t));
    do
      try {
        Rm();
        break;
      } catch (s) {
        $d(e, s);
      }
    while (!0);
    Fs(),
      (Zl.current = o),
      (H = l),
      se !== null ? (t = 0) : ((fe = null), (me = 0), (t = ce));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Pi(e)), l !== 0 && ((r = l), (t = rs(e, l)))), t === 1)
    )
      throw ((n = Vr), fn(e, 0), Rt(e, r), $e(e, ie()), n);
    if (t === 6) Rt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Fm(l) &&
          ((t = no(e, r)),
          t === 2 && ((o = Pi(e)), o !== 0 && ((r = o), (t = rs(e, o)))),
          t === 1))
      )
        throw ((n = Vr), fn(e, 0), Rt(e, r), $e(e, ie()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(j(345));
        case 2:
          rn(e, Oe, yt);
          break;
        case 3:
          if (
            (Rt(e, r), (r & 130023424) === r && ((t = Xs + 500 - ie()), 10 < t))
          ) {
            if (Rl(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              Te(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = zi(rn.bind(null, e, Oe, yt), t);
            break;
          }
          rn(e, Oe, yt);
          break;
        case 4:
          if ((Rt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - lt(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = ie() - r),
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
                : 1960 * $m(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = zi(rn.bind(null, e, Oe, yt), r);
            break;
          }
          rn(e, Oe, yt);
          break;
        case 5:
          rn(e, Oe, yt);
          break;
        default:
          throw Error(j(329));
      }
    }
  }
  return $e(e, ie()), e.callbackNode === n ? Md.bind(null, e) : null;
}
function rs(e, t) {
  var n = Cr;
  return (
    e.current.memoizedState.isDehydrated && (fn(e, t).flags |= 256),
    (e = no(e, t)),
    e !== 2 && ((t = Oe), (Oe = n), t !== null && ls(t)),
    e
  );
}
function ls(e) {
  Oe === null ? (Oe = e) : Oe.push.apply(Oe, e);
}
function Fm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!it(o(), l)) return !1;
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
function Rt(e, t) {
  for (
    t &= ~qs,
      t &= ~ko,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - lt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function yu(e) {
  if (H & 6) throw Error(j(327));
  Un();
  var t = Rl(e, 0);
  if (!(t & 1)) return $e(e, ie()), null;
  var n = no(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Pi(e);
    r !== 0 && ((t = r), (n = rs(e, r)));
  }
  if (n === 1) throw ((n = Vr), fn(e, 0), Rt(e, t), $e(e, ie()), n);
  if (n === 6) throw Error(j(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    rn(e, Oe, yt),
    $e(e, ie()),
    null
  );
}
function Js(e, t) {
  var n = H;
  H |= 1;
  try {
    return e(t);
  } finally {
    (H = n), H === 0 && ((qn = ie() + 500), vo && tn());
  }
}
function xn(e) {
  Ht !== null && Ht.tag === 0 && !(H & 6) && Un();
  var t = H;
  H |= 1;
  var n = Ke.transition,
    r = Q;
  try {
    if (((Ke.transition = null), (Q = 1), e)) return e();
  } finally {
    (Q = r), (Ke.transition = n), (H = t), !(H & 6) && tn();
  }
}
function Zs() {
  (Fe = zn.current), q(zn);
}
function fn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), fm(n)), se !== null))
    for (n = se.return; n !== null; ) {
      var r = n;
      switch ((_s(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ul();
          break;
        case 3:
          Kn(), q(_e), q(Ee), Ws();
          break;
        case 5:
          Hs(r);
          break;
        case 4:
          Kn();
          break;
        case 13:
          q(ee);
          break;
        case 19:
          q(ee);
          break;
        case 10:
          zs(r.type._context);
          break;
        case 22:
        case 23:
          Zs();
      }
      n = n.return;
    }
  if (
    ((fe = e),
    (se = e = qt(e.current, null)),
    (me = Fe = t),
    (ce = 0),
    (Vr = null),
    (qs = ko = vn = 0),
    (Oe = Cr = null),
    an !== null)
  ) {
    for (t = 0; t < an.length; t++)
      if (((n = an[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    an = null;
  }
  return e;
}
function $d(e, t) {
  do {
    var n = se;
    try {
      if ((Fs(), (bl.current = Jl), Xl)) {
        for (var r = te.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Xl = !1;
      }
      if (
        ((yn = 0),
        (de = ue = te = null),
        (Er = !1),
        (Wr = 0),
        (Gs.current = null),
        n === null || n.return === null)
      ) {
        (ce = 1), (Vr = t), (se = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          s = n,
          a = t;
        if (
          ((t = me),
          (s.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var c = a,
            d = s,
            p = d.tag;
          if (!(d.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var g = d.alternate;
            g
              ? ((d.updateQueue = g.updateQueue),
                (d.memoizedState = g.memoizedState),
                (d.lanes = g.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var w = lu(i);
          if (w !== null) {
            (w.flags &= -257),
              ou(w, i, s, o, t),
              w.mode & 1 && ru(o, c, t),
              (t = w),
              (a = c);
            var x = t.updateQueue;
            if (x === null) {
              var S = new Set();
              S.add(a), (t.updateQueue = S);
            } else x.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              ru(o, c, t), ea();
              break e;
            }
            a = Error(j(426));
          }
        } else if (J && s.mode & 1) {
          var C = lu(i);
          if (C !== null) {
            !(C.flags & 65536) && (C.flags |= 256),
              ou(C, i, s, o, t),
              Ms(Gn(a, s));
            break e;
          }
        }
        (o = a = Gn(a, s)),
          ce !== 4 && (ce = 2),
          Cr === null ? (Cr = [o]) : Cr.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var m = vd(o, a, t);
              Xa(o, m);
              break e;
            case 1:
              s = a;
              var f = o.type,
                h = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (h !== null &&
                    typeof h.componentDidCatch == "function" &&
                    (Kt === null || !Kt.has(h))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var v = xd(o, s, t);
                Xa(o, v);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Rd(n);
    } catch (k) {
      (t = k), se === n && n !== null && (se = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Fd() {
  var e = Zl.current;
  return (Zl.current = Jl), e === null ? Jl : e;
}
function ea() {
  (ce === 0 || ce === 3 || ce === 2) && (ce = 4),
    fe === null || (!(vn & 268435455) && !(ko & 268435455)) || Rt(fe, me);
}
function no(e, t) {
  var n = H;
  H |= 2;
  var r = Fd();
  (fe !== e || me !== t) && ((yt = null), fn(e, t));
  do
    try {
      zm();
      break;
    } catch (l) {
      $d(e, l);
    }
  while (!0);
  if ((Fs(), (H = n), (Zl.current = r), se !== null)) throw Error(j(261));
  return (fe = null), (me = 0), ce;
}
function zm() {
  for (; se !== null; ) zd(se);
}
function Rm() {
  for (; se !== null && !up(); ) zd(se);
}
function zd(e) {
  var t = Ad(e.alternate, e, Fe);
  (e.memoizedProps = e.pendingProps),
    t === null ? Rd(e) : (se = t),
    (Gs.current = null);
}
function Rd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Om(n, t)), n !== null)) {
        (n.flags &= 32767), (se = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ce = 6), (se = null);
        return;
      }
    } else if (((n = Dm(n, t, Fe)), n !== null)) {
      se = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      se = t;
      return;
    }
    se = t = e;
  } while (t !== null);
  ce === 0 && (ce = 5);
}
function rn(e, t, n) {
  var r = Q,
    l = Ke.transition;
  try {
    (Ke.transition = null), (Q = 1), Im(e, t, n, r);
  } finally {
    (Ke.transition = l), (Q = r);
  }
  return null;
}
function Im(e, t, n, r) {
  do Un();
  while (Ht !== null);
  if (H & 6) throw Error(j(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(j(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (xp(e, o),
    e === fe && ((se = fe = null), (me = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      gl ||
      ((gl = !0),
      Hd(zl, function () {
        return Un(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Ke.transition), (Ke.transition = null);
    var i = Q;
    Q = 1;
    var s = H;
    (H |= 4),
      (Gs.current = null),
      _m(e, n),
      Ld(n, e),
      om($i),
      (Il = !!Mi),
      ($i = Mi = null),
      (e.current = n),
      Mm(n),
      cp(),
      (H = s),
      (Q = i),
      (Ke.transition = o);
  } else e.current = n;
  if (
    (gl && ((gl = !1), (Ht = e), (to = l)),
    (o = e.pendingLanes),
    o === 0 && (Kt = null),
    pp(n.stateNode),
    $e(e, ie()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (eo) throw ((eo = !1), (e = ts), (ts = null), e);
  return (
    to & 1 && e.tag !== 0 && Un(),
    (o = e.pendingLanes),
    o & 1 ? (e === ns ? br++ : ((br = 0), (ns = e))) : (br = 0),
    tn(),
    null
  );
}
function Un() {
  if (Ht !== null) {
    var e = vc(to),
      t = Ke.transition,
      n = Q;
    try {
      if (((Ke.transition = null), (Q = 16 > e ? 16 : e), Ht === null))
        var r = !1;
      else {
        if (((e = Ht), (Ht = null), (to = 0), H & 6)) throw Error(j(331));
        var l = H;
        for (H |= 4, D = e.current; D !== null; ) {
          var o = D,
            i = o.child;
          if (D.flags & 16) {
            var s = o.deletions;
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var c = s[a];
                for (D = c; D !== null; ) {
                  var d = D;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      jr(8, d, o);
                  }
                  var p = d.child;
                  if (p !== null) (p.return = d), (D = p);
                  else
                    for (; D !== null; ) {
                      d = D;
                      var g = d.sibling,
                        w = d.return;
                      if ((Pd(d), d === c)) {
                        D = null;
                        break;
                      }
                      if (g !== null) {
                        (g.return = w), (D = g);
                        break;
                      }
                      D = w;
                    }
                }
              }
              var x = o.alternate;
              if (x !== null) {
                var S = x.child;
                if (S !== null) {
                  x.child = null;
                  do {
                    var C = S.sibling;
                    (S.sibling = null), (S = C);
                  } while (S !== null);
                }
              }
              D = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (D = i);
          else
            e: for (; D !== null; ) {
              if (((o = D), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    jr(9, o, o.return);
                }
              var m = o.sibling;
              if (m !== null) {
                (m.return = o.return), (D = m);
                break e;
              }
              D = o.return;
            }
        }
        var f = e.current;
        for (D = f; D !== null; ) {
          i = D;
          var h = i.child;
          if (i.subtreeFlags & 2064 && h !== null) (h.return = i), (D = h);
          else
            e: for (i = f; D !== null; ) {
              if (((s = D), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      So(9, s);
                  }
                } catch (k) {
                  le(s, s.return, k);
                }
              if (s === i) {
                D = null;
                break e;
              }
              var v = s.sibling;
              if (v !== null) {
                (v.return = s.return), (D = v);
                break e;
              }
              D = s.return;
            }
        }
        if (
          ((H = l), tn(), mt && typeof mt.onPostCommitFiberRoot == "function")
        )
          try {
            mt.onPostCommitFiberRoot(po, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (Q = n), (Ke.transition = t);
    }
  }
  return !1;
}
function vu(e, t, n) {
  (t = Gn(n, t)),
    (t = vd(e, t, 1)),
    (e = Yt(e, t, 1)),
    (t = Te()),
    e !== null && (Kr(e, 1, t), $e(e, t));
}
function le(e, t, n) {
  if (e.tag === 3) vu(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        vu(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Kt === null || !Kt.has(r)))
        ) {
          (e = Gn(n, e)),
            (e = xd(t, e, 1)),
            (t = Yt(t, e, 1)),
            (e = Te()),
            t !== null && (Kr(t, 1, e), $e(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Am(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Te()),
    (e.pingedLanes |= e.suspendedLanes & n),
    fe === e &&
      (me & n) === n &&
      (ce === 4 || (ce === 3 && (me & 130023424) === me && 500 > ie() - Xs)
        ? fn(e, 0)
        : (qs |= n)),
    $e(e, t);
}
function Id(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = il), (il <<= 1), !(il & 130023424) && (il = 4194304))
      : (t = 1));
  var n = Te();
  (e = Pt(e, t)), e !== null && (Kr(e, t, n), $e(e, n));
}
function Hm(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Id(e, n);
}
function Wm(e, t) {
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
  r !== null && r.delete(t), Id(e, n);
}
var Ad;
Ad = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || _e.current) Le = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Le = !1), Pm(e, t, n);
      Le = !!(e.flags & 131072);
    }
  else (Le = !1), J && t.flags & 1048576 && Bc(t, Ql, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Pl(e, t), (e = t.pendingProps);
      var l = Vn(t, Ee.current);
      Wn(t, n), (l = Bs(null, t, r, e, l, n));
      var o = Vs();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Me(r) ? ((o = !0), Bl(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Is(t),
            (l.updater = wo),
            (t.stateNode = l),
            (l._reactInternals = t),
            Bi(t, r, e, n),
            (t = Yi(null, t, r, !0, o, n)))
          : ((t.tag = 0), J && o && Ls(t), be(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Pl(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Bm(r)),
          (e = tt(r, e)),
          l)
        ) {
          case 0:
            t = Qi(null, t, r, e, n);
            break e;
          case 1:
            t = au(null, t, r, e, n);
            break e;
          case 11:
            t = iu(null, t, r, e, n);
            break e;
          case 14:
            t = su(null, t, r, tt(r.type, e), n);
            break e;
        }
        throw Error(j(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : tt(r, l)),
        Qi(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : tt(r, l)),
        au(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Nd(t), e === null)) throw Error(j(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          qc(e, t),
          Gl(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = Gn(Error(j(423)), t)), (t = uu(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = Gn(Error(j(424)), t)), (t = uu(e, t, r, n, l));
            break e;
          } else
            for (
              Re = Qt(t.stateNode.containerInfo.firstChild),
                Ie = t,
                J = !0,
                rt = null,
                n = Kc(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Qn(), r === l)) {
            t = Dt(e, t, n);
            break e;
          }
          be(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Xc(t),
        e === null && Hi(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        Fi(r, l) ? (i = null) : o !== null && Fi(r, o) && (t.flags |= 32),
        kd(e, t),
        be(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Hi(t), null;
    case 13:
      return Ed(e, t, n);
    case 4:
      return (
        As(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Yn(t, null, r, n)) : be(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : tt(r, l)),
        iu(e, t, r, l, n)
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
          (o = t.memoizedProps),
          (i = l.value),
          K(Yl, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (it(o.value, i)) {
            if (o.children === l.children && !_e.current) {
              t = Dt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var s = o.dependencies;
              if (s !== null) {
                i = o.child;
                for (var a = s.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (o.tag === 1) {
                      (a = Et(-1, n & -n)), (a.tag = 2);
                      var c = o.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var d = c.pending;
                        d === null
                          ? (a.next = a)
                          : ((a.next = d.next), (d.next = a)),
                          (c.pending = a);
                      }
                    }
                    (o.lanes |= n),
                      (a = o.alternate),
                      a !== null && (a.lanes |= n),
                      Wi(o.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(j(341));
                (i.lanes |= n),
                  (s = i.alternate),
                  s !== null && (s.lanes |= n),
                  Wi(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        be(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        Wn(t, n),
        (l = Ge(l)),
        (r = r(l)),
        (t.flags |= 1),
        be(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = tt(r, t.pendingProps)),
        (l = tt(r.type, l)),
        su(e, t, r, l, n)
      );
    case 15:
      return wd(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : tt(r, l)),
        Pl(e, t),
        (t.tag = 1),
        Me(r) ? ((e = !0), Bl(t)) : (e = !1),
        Wn(t, n),
        yd(t, r, l),
        Bi(t, r, l, n),
        Yi(null, t, r, !0, e, n)
      );
    case 19:
      return jd(e, t, n);
    case 22:
      return Sd(e, t, n);
  }
  throw Error(j(156, t.tag));
};
function Hd(e, t) {
  return mc(e, t);
}
function Um(e, t, n, r) {
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
function Ye(e, t, n, r) {
  return new Um(e, t, n, r);
}
function ta(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Bm(e) {
  if (typeof e == "function") return ta(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ws)) return 11;
    if (e === Ss) return 14;
  }
  return 2;
}
function qt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ye(e.tag, t, e.key, e.mode)),
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
function Ll(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) ta(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case bn:
        return pn(n.children, l, o, t);
      case xs:
        (i = 8), (l |= 8);
        break;
      case mi:
        return (
          (e = Ye(12, n, t, l | 2)), (e.elementType = mi), (e.lanes = o), e
        );
      case hi:
        return (e = Ye(13, n, t, l)), (e.elementType = hi), (e.lanes = o), e;
      case gi:
        return (e = Ye(19, n, t, l)), (e.elementType = gi), (e.lanes = o), e;
      case Xu:
        return No(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Gu:
              i = 10;
              break e;
            case qu:
              i = 9;
              break e;
            case ws:
              i = 11;
              break e;
            case Ss:
              i = 14;
              break e;
            case $t:
              (i = 16), (r = null);
              break e;
          }
        throw Error(j(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ye(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function pn(e, t, n, r) {
  return (e = Ye(7, e, r, t)), (e.lanes = n), e;
}
function No(e, t, n, r) {
  return (
    (e = Ye(22, e, r, t)),
    (e.elementType = Xu),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function li(e, t, n) {
  return (e = Ye(6, e, null, t)), (e.lanes = n), e;
}
function oi(e, t, n) {
  return (
    (t = Ye(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Vm(e, t, n, r, l) {
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
    (this.eventTimes = Io(0)),
    (this.expirationTimes = Io(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Io(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function na(e, t, n, r, l, o, i, s, a) {
  return (
    (e = new Vm(e, t, n, s, a)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Ye(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Is(o),
    e
  );
}
function Qm(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Cn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Wd(e) {
  if (!e) return Jt;
  e = e._reactInternals;
  e: {
    if (kn(e) !== e || e.tag !== 1) throw Error(j(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Me(t.type)) {
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
    if (Me(n)) return Wc(e, n, t);
  }
  return t;
}
function Ud(e, t, n, r, l, o, i, s, a) {
  return (
    (e = na(n, r, !0, e, l, o, i, s, a)),
    (e.context = Wd(null)),
    (n = e.current),
    (r = Te()),
    (l = Gt(n)),
    (o = Et(r, l)),
    (o.callback = t ?? null),
    Yt(n, o, l),
    (e.current.lanes = l),
    Kr(e, l, r),
    $e(e, r),
    e
  );
}
function Eo(e, t, n, r) {
  var l = t.current,
    o = Te(),
    i = Gt(l);
  return (
    (n = Wd(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Et(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Yt(l, t, i)),
    e !== null && (ot(e, l, i, o), Cl(e, l, i)),
    i
  );
}
function ro(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function xu(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ra(e, t) {
  xu(e, t), (e = e.alternate) && xu(e, t);
}
function Ym() {
  return null;
}
var Bd =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function la(e) {
  this._internalRoot = e;
}
jo.prototype.render = la.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(j(409));
  Eo(e, t, null, null);
};
jo.prototype.unmount = la.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    xn(function () {
      Eo(null, e, null, null);
    }),
      (t[Tt] = null);
  }
};
function jo(e) {
  this._internalRoot = e;
}
jo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Sc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < zt.length && t !== 0 && t < zt[n].priority; n++);
    zt.splice(n, 0, e), n === 0 && Nc(e);
  }
};
function oa(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Co(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function wu() {}
function Km(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var c = ro(i);
        o.call(c);
      };
    }
    var i = Ud(t, r, e, 0, null, !1, !1, "", wu);
    return (
      (e._reactRootContainer = i),
      (e[Tt] = i.current),
      zr(e.nodeType === 8 ? e.parentNode : e),
      xn(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var c = ro(a);
      s.call(c);
    };
  }
  var a = na(e, 0, !1, null, null, !1, !1, "", wu);
  return (
    (e._reactRootContainer = a),
    (e[Tt] = a.current),
    zr(e.nodeType === 8 ? e.parentNode : e),
    xn(function () {
      Eo(t, a, n, r);
    }),
    a
  );
}
function bo(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var s = l;
      l = function () {
        var a = ro(i);
        s.call(a);
      };
    }
    Eo(t, i, e, l);
  } else i = Km(n, t, e, l, r);
  return ro(i);
}
xc = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = gr(t.pendingLanes);
        n !== 0 &&
          (Es(t, n | 1), $e(t, ie()), !(H & 6) && ((qn = ie() + 500), tn()));
      }
      break;
    case 13:
      xn(function () {
        var r = Pt(e, 1);
        if (r !== null) {
          var l = Te();
          ot(r, e, 1, l);
        }
      }),
        ra(e, 1);
  }
};
js = function (e) {
  if (e.tag === 13) {
    var t = Pt(e, 134217728);
    if (t !== null) {
      var n = Te();
      ot(t, e, 134217728, n);
    }
    ra(e, 134217728);
  }
};
wc = function (e) {
  if (e.tag === 13) {
    var t = Gt(e),
      n = Pt(e, t);
    if (n !== null) {
      var r = Te();
      ot(n, e, t, r);
    }
    ra(e, t);
  }
};
Sc = function () {
  return Q;
};
kc = function (e, t) {
  var n = Q;
  try {
    return (Q = e), t();
  } finally {
    Q = n;
  }
};
Ci = function (e, t, n) {
  switch (t) {
    case "input":
      if ((xi(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var l = yo(r);
            if (!l) throw Error(j(90));
            Zu(r), xi(r, l);
          }
        }
      }
      break;
    case "textarea":
      tc(e, n);
      break;
    case "select":
      (t = n.value), t != null && Rn(e, !!n.multiple, t, !1);
  }
};
ac = Js;
uc = xn;
var Gm = { usingClientEntryPoint: !1, Events: [qr, On, yo, ic, sc, Js] },
  ur = {
    findFiberByHostInstance: sn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  qm = {
    bundleType: ur.bundleType,
    version: ur.version,
    rendererPackageName: ur.rendererPackageName,
    rendererConfig: ur.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ot.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = fc(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: ur.findFiberByHostInstance || Ym,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var yl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!yl.isDisabled && yl.supportsFiber)
    try {
      (po = yl.inject(qm)), (mt = yl);
    } catch {}
}
He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Gm;
He.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!oa(t)) throw Error(j(200));
  return Qm(e, t, null, n);
};
He.createRoot = function (e, t) {
  if (!oa(e)) throw Error(j(299));
  var n = !1,
    r = "",
    l = Bd;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = na(e, 1, !1, null, null, n, !1, r, l)),
    (e[Tt] = t.current),
    zr(e.nodeType === 8 ? e.parentNode : e),
    new la(t)
  );
};
He.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(j(188))
      : ((e = Object.keys(e).join(",")), Error(j(268, e)));
  return (e = fc(t)), (e = e === null ? null : e.stateNode), e;
};
He.flushSync = function (e) {
  return xn(e);
};
He.hydrate = function (e, t, n) {
  if (!Co(t)) throw Error(j(200));
  return bo(null, e, t, !0, n);
};
He.hydrateRoot = function (e, t, n) {
  if (!oa(e)) throw Error(j(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = Bd;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = Ud(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[Tt] = t.current),
    zr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new jo(t);
};
He.render = function (e, t, n) {
  if (!Co(t)) throw Error(j(200));
  return bo(null, e, t, !1, n);
};
He.unmountComponentAtNode = function (e) {
  if (!Co(e)) throw Error(j(40));
  return e._reactRootContainer
    ? (xn(function () {
        bo(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Tt] = null);
        });
      }),
      !0)
    : !1;
};
He.unstable_batchedUpdates = Js;
He.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Co(n)) throw Error(j(200));
  if (e == null || e._reactInternals === void 0) throw Error(j(38));
  return bo(e, t, n, !1, r);
};
He.version = "18.3.1-next-f1338f8080-20240426";
function Vd() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vd);
    } catch (e) {
      console.error(e);
    }
}
Vd(), (Vu.exports = He);
var To = Vu.exports,
  Qd,
  Su = To;
(Qd = Su.createRoot), Su.hydrateRoot;
function st(e) {
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
function wn(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t);
}
const Yd = 6048e5,
  Xm = 864e5;
let Jm = {};
function Po() {
  return Jm;
}
function Qr(e, t) {
  var s, a, c, d;
  const n = Po(),
    r =
      (t == null ? void 0 : t.weekStartsOn) ??
      ((a = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) ==
      null
        ? void 0
        : a.weekStartsOn) ??
      n.weekStartsOn ??
      ((d = (c = n.locale) == null ? void 0 : c.options) == null
        ? void 0
        : d.weekStartsOn) ??
      0,
    l = st(e),
    o = l.getDay(),
    i = (o < r ? 7 : 0) + o - r;
  return l.setDate(l.getDate() - i), l.setHours(0, 0, 0, 0), l;
}
function lo(e) {
  return Qr(e, { weekStartsOn: 1 });
}
function Kd(e) {
  const t = st(e),
    n = t.getFullYear(),
    r = wn(e, 0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  const l = lo(r),
    o = wn(e, 0);
  o.setFullYear(n, 0, 4), o.setHours(0, 0, 0, 0);
  const i = lo(o);
  return t.getTime() >= l.getTime()
    ? n + 1
    : t.getTime() >= i.getTime()
    ? n
    : n - 1;
}
function ku(e) {
  const t = st(e);
  return t.setHours(0, 0, 0, 0), t;
}
function Nu(e) {
  const t = st(e),
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
function Zm(e, t) {
  const n = ku(e),
    r = ku(t),
    l = +n - Nu(n),
    o = +r - Nu(r);
  return Math.round((l - o) / Xm);
}
function eh(e) {
  const t = Kd(e),
    n = wn(e, 0);
  return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), lo(n);
}
function th(e) {
  return (
    e instanceof Date ||
    (typeof e == "object" &&
      Object.prototype.toString.call(e) === "[object Date]")
  );
}
function nh(e) {
  if (!th(e) && typeof e != "number") return !1;
  const t = st(e);
  return !isNaN(Number(t));
}
function rh(e) {
  const t = st(e),
    n = wn(e, 0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
const lh = {
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
  oh = (e, t, n) => {
    let r;
    const l = lh[e];
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
function ii(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const ih = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy",
  },
  sh = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a",
  },
  ah = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}",
  },
  uh = {
    date: ii({ formats: ih, defaultWidth: "full" }),
    time: ii({ formats: sh, defaultWidth: "full" }),
    dateTime: ii({ formats: ah, defaultWidth: "full" }),
  },
  ch = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P",
  },
  dh = (e, t, n, r) => ch[e];
function cr(e) {
  return (t, n) => {
    const r = n != null && n.context ? String(n.context) : "standalone";
    let l;
    if (r === "formatting" && e.formattingValues) {
      const i = e.defaultFormattingWidth || e.defaultWidth,
        s = n != null && n.width ? String(n.width) : i;
      l = e.formattingValues[s] || e.formattingValues[i];
    } else {
      const i = e.defaultWidth,
        s = n != null && n.width ? String(n.width) : e.defaultWidth;
      l = e.values[s] || e.values[i];
    }
    const o = e.argumentCallback ? e.argumentCallback(t) : t;
    return l[o];
  };
}
const fh = {
    narrow: ["B", "A"],
    abbreviated: ["BC", "AD"],
    wide: ["Before Christ", "Anno Domini"],
  },
  ph = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
  },
  mh = {
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
  hh = {
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
  gh = {
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
  yh = {
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
  vh = (e, t) => {
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
  xh = {
    ordinalNumber: vh,
    era: cr({ values: fh, defaultWidth: "wide" }),
    quarter: cr({
      values: ph,
      defaultWidth: "wide",
      argumentCallback: (e) => e - 1,
    }),
    month: cr({ values: mh, defaultWidth: "wide" }),
    day: cr({ values: hh, defaultWidth: "wide" }),
    dayPeriod: cr({
      values: gh,
      defaultWidth: "wide",
      formattingValues: yh,
      defaultFormattingWidth: "wide",
    }),
  };
function dr(e) {
  return (t, n = {}) => {
    const r = n.width,
      l = (r && e.matchPatterns[r]) || e.matchPatterns[e.defaultMatchWidth],
      o = t.match(l);
    if (!o) return null;
    const i = o[0],
      s = (r && e.parsePatterns[r]) || e.parsePatterns[e.defaultParseWidth],
      a = Array.isArray(s) ? Sh(s, (p) => p.test(i)) : wh(s, (p) => p.test(i));
    let c;
    (c = e.valueCallback ? e.valueCallback(a) : a),
      (c = n.valueCallback ? n.valueCallback(c) : c);
    const d = t.slice(i.length);
    return { value: c, rest: d };
  };
}
function wh(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n])) return n;
}
function Sh(e, t) {
  for (let n = 0; n < e.length; n++) if (t(e[n])) return n;
}
function kh(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const l = r[0],
      o = t.match(e.parsePattern);
    if (!o) return null;
    let i = e.valueCallback ? e.valueCallback(o[0]) : o[0];
    i = n.valueCallback ? n.valueCallback(i) : i;
    const s = t.slice(l.length);
    return { value: i, rest: s };
  };
}
const Nh = /^(\d+)(th|st|nd|rd)?/i,
  Eh = /\d+/i,
  jh = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i,
  },
  Ch = { any: [/^b/i, /^(a|c)/i] },
  bh = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i,
  },
  Th = { any: [/1/i, /2/i, /3/i, /4/i] },
  Ph = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
  },
  Dh = {
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
  Oh = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
  },
  Lh = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
  },
  _h = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
  },
  Mh = {
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
  $h = {
    ordinalNumber: kh({
      matchPattern: Nh,
      parsePattern: Eh,
      valueCallback: (e) => parseInt(e, 10),
    }),
    era: dr({
      matchPatterns: jh,
      defaultMatchWidth: "wide",
      parsePatterns: Ch,
      defaultParseWidth: "any",
    }),
    quarter: dr({
      matchPatterns: bh,
      defaultMatchWidth: "wide",
      parsePatterns: Th,
      defaultParseWidth: "any",
      valueCallback: (e) => e + 1,
    }),
    month: dr({
      matchPatterns: Ph,
      defaultMatchWidth: "wide",
      parsePatterns: Dh,
      defaultParseWidth: "any",
    }),
    day: dr({
      matchPatterns: Oh,
      defaultMatchWidth: "wide",
      parsePatterns: Lh,
      defaultParseWidth: "any",
    }),
    dayPeriod: dr({
      matchPatterns: _h,
      defaultMatchWidth: "any",
      parsePatterns: Mh,
      defaultParseWidth: "any",
    }),
  },
  Fh = {
    code: "en-US",
    formatDistance: oh,
    formatLong: uh,
    formatRelative: dh,
    localize: xh,
    match: $h,
    options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
  };
function zh(e) {
  const t = st(e);
  return Zm(t, rh(t)) + 1;
}
function Rh(e) {
  const t = st(e),
    n = +lo(t) - +eh(t);
  return Math.round(n / Yd) + 1;
}
function Gd(e, t) {
  var d, p, g, w;
  const n = st(e),
    r = n.getFullYear(),
    l = Po(),
    o =
      (t == null ? void 0 : t.firstWeekContainsDate) ??
      ((p = (d = t == null ? void 0 : t.locale) == null ? void 0 : d.options) ==
      null
        ? void 0
        : p.firstWeekContainsDate) ??
      l.firstWeekContainsDate ??
      ((w = (g = l.locale) == null ? void 0 : g.options) == null
        ? void 0
        : w.firstWeekContainsDate) ??
      1,
    i = wn(e, 0);
  i.setFullYear(r + 1, 0, o), i.setHours(0, 0, 0, 0);
  const s = Qr(i, t),
    a = wn(e, 0);
  a.setFullYear(r, 0, o), a.setHours(0, 0, 0, 0);
  const c = Qr(a, t);
  return n.getTime() >= s.getTime()
    ? r + 1
    : n.getTime() >= c.getTime()
    ? r
    : r - 1;
}
function Ih(e, t) {
  var s, a, c, d;
  const n = Po(),
    r =
      (t == null ? void 0 : t.firstWeekContainsDate) ??
      ((a = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) ==
      null
        ? void 0
        : a.firstWeekContainsDate) ??
      n.firstWeekContainsDate ??
      ((d = (c = n.locale) == null ? void 0 : c.options) == null
        ? void 0
        : d.firstWeekContainsDate) ??
      1,
    l = Gd(e, t),
    o = wn(e, 0);
  return o.setFullYear(l, 0, r), o.setHours(0, 0, 0, 0), Qr(o, t);
}
function Ah(e, t) {
  const n = st(e),
    r = +Qr(n, t) - +Ih(n, t);
  return Math.round(r / Yd) + 1;
}
function V(e, t) {
  const n = e < 0 ? "-" : "",
    r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const _t = {
    y(e, t) {
      const n = e.getFullYear(),
        r = n > 0 ? n : 1 - n;
      return V(t === "yy" ? r % 100 : r, t.length);
    },
    M(e, t) {
      const n = e.getMonth();
      return t === "M" ? String(n + 1) : V(n + 1, 2);
    },
    d(e, t) {
      return V(e.getDate(), t.length);
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
      return V(e.getHours() % 12 || 12, t.length);
    },
    H(e, t) {
      return V(e.getHours(), t.length);
    },
    m(e, t) {
      return V(e.getMinutes(), t.length);
    },
    s(e, t) {
      return V(e.getSeconds(), t.length);
    },
    S(e, t) {
      const n = t.length,
        r = e.getMilliseconds(),
        l = Math.trunc(r * Math.pow(10, n - 3));
      return V(l, t.length);
    },
  },
  jn = {
    am: "am",
    pm: "pm",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  Eu = {
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
      return _t.y(e, t);
    },
    Y: function (e, t, n, r) {
      const l = Gd(e, r),
        o = l > 0 ? l : 1 - l;
      if (t === "YY") {
        const i = o % 100;
        return V(i, 2);
      }
      return t === "Yo" ? n.ordinalNumber(o, { unit: "year" }) : V(o, t.length);
    },
    R: function (e, t) {
      const n = Kd(e);
      return V(n, t.length);
    },
    u: function (e, t) {
      const n = e.getFullYear();
      return V(n, t.length);
    },
    Q: function (e, t, n) {
      const r = Math.ceil((e.getMonth() + 1) / 3);
      switch (t) {
        case "Q":
          return String(r);
        case "QQ":
          return V(r, 2);
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
          return V(r, 2);
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
          return _t.M(e, t);
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
          return V(r + 1, 2);
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
      const l = Ah(e, r);
      return t === "wo" ? n.ordinalNumber(l, { unit: "week" }) : V(l, t.length);
    },
    I: function (e, t, n) {
      const r = Rh(e);
      return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : V(r, t.length);
    },
    d: function (e, t, n) {
      return t === "do"
        ? n.ordinalNumber(e.getDate(), { unit: "date" })
        : _t.d(e, t);
    },
    D: function (e, t, n) {
      const r = zh(e);
      return t === "Do"
        ? n.ordinalNumber(r, { unit: "dayOfYear" })
        : V(r, t.length);
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
        o = (l - r.weekStartsOn + 8) % 7 || 7;
      switch (t) {
        case "e":
          return String(o);
        case "ee":
          return V(o, 2);
        case "eo":
          return n.ordinalNumber(o, { unit: "day" });
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
        o = (l - r.weekStartsOn + 8) % 7 || 7;
      switch (t) {
        case "c":
          return String(o);
        case "cc":
          return V(o, t.length);
        case "co":
          return n.ordinalNumber(o, { unit: "day" });
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
          return V(l, t.length);
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
          ? (l = jn.noon)
          : r === 0
          ? (l = jn.midnight)
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
          ? (l = jn.evening)
          : r >= 12
          ? (l = jn.afternoon)
          : r >= 4
          ? (l = jn.morning)
          : (l = jn.night),
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
      return _t.h(e, t);
    },
    H: function (e, t, n) {
      return t === "Ho"
        ? n.ordinalNumber(e.getHours(), { unit: "hour" })
        : _t.H(e, t);
    },
    K: function (e, t, n) {
      const r = e.getHours() % 12;
      return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : V(r, t.length);
    },
    k: function (e, t, n) {
      let r = e.getHours();
      return (
        r === 0 && (r = 24),
        t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : V(r, t.length)
      );
    },
    m: function (e, t, n) {
      return t === "mo"
        ? n.ordinalNumber(e.getMinutes(), { unit: "minute" })
        : _t.m(e, t);
    },
    s: function (e, t, n) {
      return t === "so"
        ? n.ordinalNumber(e.getSeconds(), { unit: "second" })
        : _t.s(e, t);
    },
    S: function (e, t) {
      return _t.S(e, t);
    },
    X: function (e, t, n) {
      const r = e.getTimezoneOffset();
      if (r === 0) return "Z";
      switch (t) {
        case "X":
          return Cu(r);
        case "XXXX":
        case "XX":
          return ln(r);
        case "XXXXX":
        case "XXX":
        default:
          return ln(r, ":");
      }
    },
    x: function (e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
        case "x":
          return Cu(r);
        case "xxxx":
        case "xx":
          return ln(r);
        case "xxxxx":
        case "xxx":
        default:
          return ln(r, ":");
      }
    },
    O: function (e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
        case "O":
        case "OO":
        case "OOO":
          return "GMT" + ju(r, ":");
        case "OOOO":
        default:
          return "GMT" + ln(r, ":");
      }
    },
    z: function (e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
        case "z":
        case "zz":
        case "zzz":
          return "GMT" + ju(r, ":");
        case "zzzz":
        default:
          return "GMT" + ln(r, ":");
      }
    },
    t: function (e, t, n) {
      const r = Math.trunc(e.getTime() / 1e3);
      return V(r, t.length);
    },
    T: function (e, t, n) {
      const r = e.getTime();
      return V(r, t.length);
    },
  };
function ju(e, t = "") {
  const n = e > 0 ? "-" : "+",
    r = Math.abs(e),
    l = Math.trunc(r / 60),
    o = r % 60;
  return o === 0 ? n + String(l) : n + String(l) + t + V(o, 2);
}
function Cu(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + V(Math.abs(e) / 60, 2) : ln(e, t);
}
function ln(e, t = "") {
  const n = e > 0 ? "-" : "+",
    r = Math.abs(e),
    l = V(Math.trunc(r / 60), 2),
    o = V(r % 60, 2);
  return n + l + t + o;
}
const bu = (e, t) => {
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
  qd = (e, t) => {
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
  Hh = (e, t) => {
    const n = e.match(/(P+)(p+)?/) || [],
      r = n[1],
      l = n[2];
    if (!l) return bu(e, t);
    let o;
    switch (r) {
      case "P":
        o = t.dateTime({ width: "short" });
        break;
      case "PP":
        o = t.dateTime({ width: "medium" });
        break;
      case "PPP":
        o = t.dateTime({ width: "long" });
        break;
      case "PPPP":
      default:
        o = t.dateTime({ width: "full" });
        break;
    }
    return o.replace("{{date}}", bu(r, t)).replace("{{time}}", qd(l, t));
  },
  Wh = { p: qd, P: Hh },
  Uh = /^D+$/,
  Bh = /^Y+$/,
  Vh = ["D", "DD", "YY", "YYYY"];
function Qh(e) {
  return Uh.test(e);
}
function Yh(e) {
  return Bh.test(e);
}
function Kh(e, t, n) {
  const r = Gh(e, t, n);
  if ((console.warn(r), Vh.includes(e))) throw new RangeError(r);
}
function Gh(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const qh = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  Xh = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  Jh = /^'([^]*?)'?$/,
  Zh = /''/g,
  e0 = /[a-zA-Z]/;
function ae(e, t, n) {
  var d, p, g, w;
  const r = Po(),
    l = r.locale ?? Fh,
    o =
      r.firstWeekContainsDate ??
      ((p = (d = r.locale) == null ? void 0 : d.options) == null
        ? void 0
        : p.firstWeekContainsDate) ??
      1,
    i =
      r.weekStartsOn ??
      ((w = (g = r.locale) == null ? void 0 : g.options) == null
        ? void 0
        : w.weekStartsOn) ??
      0,
    s = st(e);
  if (!nh(s)) throw new RangeError("Invalid time value");
  let a = t
    .match(Xh)
    .map((x) => {
      const S = x[0];
      if (S === "p" || S === "P") {
        const C = Wh[S];
        return C(x, l.formatLong);
      }
      return x;
    })
    .join("")
    .match(qh)
    .map((x) => {
      if (x === "''") return { isToken: !1, value: "'" };
      const S = x[0];
      if (S === "'") return { isToken: !1, value: t0(x) };
      if (Eu[S]) return { isToken: !0, value: x };
      if (S.match(e0))
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" +
            S +
            "`"
        );
      return { isToken: !1, value: x };
    });
  l.localize.preprocessor && (a = l.localize.preprocessor(s, a));
  const c = { firstWeekContainsDate: o, weekStartsOn: i, locale: l };
  return a
    .map((x) => {
      if (!x.isToken) return x.value;
      const S = x.value;
      (Yh(S) || Qh(S)) && Kh(S, t, String(e));
      const C = Eu[S[0]];
      return C(s, S, l.localize, c);
    })
    .join("");
}
function t0(e) {
  const t = e.match(Jh);
  return t ? t[1].replace(Zh, "'") : e;
}
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var n0 = {
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
 */ const r0 = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  Je = (e, t) => {
    const n = y.forwardRef(
      (
        {
          color: r = "currentColor",
          size: l = 24,
          strokeWidth: o = 2,
          absoluteStrokeWidth: i,
          className: s = "",
          children: a,
          ...c
        },
        d
      ) =>
        y.createElement(
          "svg",
          {
            ref: d,
            ...n0,
            width: l,
            height: l,
            stroke: r,
            strokeWidth: i ? (Number(o) * 24) / Number(l) : o,
            className: ["lucide", `lucide-${r0(e)}`, s].join(" "),
            ...c,
          },
          [
            ...t.map(([p, g]) => y.createElement(p, g)),
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
 */ const oo = Je("AlertCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Tu = Je("Calendar", [
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
 */ const l0 = Je("CheckCircle2", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const o0 = Je("Globe", [
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
 */ const Pu = Je("Hash", [
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
 */ const i0 = Je("Layers", [
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
 */ const s0 = Je("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vl = Je("Package", [
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
 */ const Xd = Je("ScanLine", [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
  ["path", { d: "M7 12h10", key: "b7w52i" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Jd = Je("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const a0 = Je("Trash2", [
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
 */ const ia = Je("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]);
var u0 = Object.defineProperty,
  c0 = (e, t, n) =>
    t in e
      ? u0(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  si = (e, t, n) => (c0(e, typeof t != "symbol" ? t + "" : t, n), n);
let d0 = class {
    constructor() {
      si(this, "current", this.detect()),
        si(this, "handoffState", "pending"),
        si(this, "currentId", 0);
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
  jt = new d0(),
  Xe = (e, t) => {
    jt.isServer ? y.useEffect(e, t) : y.useLayoutEffect(e, t);
  };
function Ct(e) {
  let t = y.useRef(e);
  return (
    Xe(() => {
      t.current = e;
    }, [e]),
    t
  );
}
let Z = function (e) {
  let t = Ct(e);
  return R.useCallback((...n) => t.current(...n), [t]);
};
function Do(e) {
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
function Nn() {
  let e = [],
    t = {
      addEventListener(n, r, l, o) {
        return (
          n.addEventListener(r, l, o),
          t.add(() => n.removeEventListener(r, l, o))
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
          Do(() => {
            r.current && n[0]();
          }),
          t.add(() => {
            r.current = !1;
          })
        );
      },
      style(n, r, l) {
        let o = n.style.getPropertyValue(r);
        return (
          Object.assign(n.style, { [r]: l }),
          this.add(() => {
            Object.assign(n.style, { [r]: o });
          })
        );
      },
      group(n) {
        let r = Nn();
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
function sa() {
  let [e] = y.useState(Nn);
  return y.useEffect(() => () => e.dispose(), [e]), e;
}
function f0() {
  let e = typeof document > "u";
  return "useSyncExternalStore" in Tr
    ? ((t) => t.useSyncExternalStore)(Tr)(
        () => () => {},
        () => !1,
        () => !e
      )
    : !1;
}
function er() {
  let e = f0(),
    [t, n] = y.useState(jt.isHandoffComplete);
  return (
    t && jt.isHandoffComplete === !1 && n(!1),
    y.useEffect(() => {
      t !== !0 && n(!0);
    }, [t]),
    y.useEffect(() => jt.handoff(), []),
    e ? !1 : t
  );
}
var Du;
let tr =
  (Du = R.useId) != null
    ? Du
    : function () {
        let e = er(),
          [t, n] = R.useState(e ? () => jt.nextId() : null);
        return (
          Xe(() => {
            t === null && n(jt.nextId());
          }, [t]),
          t != null ? "" + t : void 0
        );
      };
function Ne(e, t, ...n) {
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
  throw (Error.captureStackTrace && Error.captureStackTrace(r, Ne), r);
}
function Zd(e) {
  return jt.isServer
    ? null
    : e instanceof Node
    ? e.ownerDocument
    : e != null && e.hasOwnProperty("current") && e.current instanceof Node
    ? e.current.ownerDocument
    : document;
}
let os = [
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
var on = ((e) => (
    (e[(e.First = 1)] = "First"),
    (e[(e.Previous = 2)] = "Previous"),
    (e[(e.Next = 4)] = "Next"),
    (e[(e.Last = 8)] = "Last"),
    (e[(e.WrapAround = 16)] = "WrapAround"),
    (e[(e.NoScroll = 32)] = "NoScroll"),
    e
  ))(on || {}),
  ef = ((e) => (
    (e[(e.Error = 0)] = "Error"),
    (e[(e.Overflow = 1)] = "Overflow"),
    (e[(e.Success = 2)] = "Success"),
    (e[(e.Underflow = 3)] = "Underflow"),
    e
  ))(ef || {}),
  p0 = ((e) => (
    (e[(e.Previous = -1)] = "Previous"), (e[(e.Next = 1)] = "Next"), e
  ))(p0 || {});
function m0(e = document.body) {
  return e == null
    ? []
    : Array.from(e.querySelectorAll(os)).sort((t, n) =>
        Math.sign(
          (t.tabIndex || Number.MAX_SAFE_INTEGER) -
            (n.tabIndex || Number.MAX_SAFE_INTEGER)
        )
      );
}
var tf = ((e) => (
  (e[(e.Strict = 0)] = "Strict"), (e[(e.Loose = 1)] = "Loose"), e
))(tf || {});
function h0(e, t = 0) {
  var n;
  return e === ((n = Zd(e)) == null ? void 0 : n.body)
    ? !1
    : Ne(t, {
        0() {
          return e.matches(os);
        },
        1() {
          let r = e;
          for (; r !== null; ) {
            if (r.matches(os)) return !0;
            r = r.parentElement;
          }
          return !1;
        },
      });
}
var g0 = ((e) => (
  (e[(e.Keyboard = 0)] = "Keyboard"), (e[(e.Mouse = 1)] = "Mouse"), e
))(g0 || {});
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
function mn(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let y0 = ["textarea", "input"].join(",");
function v0(e) {
  var t, n;
  return (n =
    (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, y0)) !=
    null
    ? n
    : !1;
}
function x0(e, t = (n) => n) {
  return e.slice().sort((n, r) => {
    let l = t(n),
      o = t(r);
    if (l === null || o === null) return 0;
    let i = l.compareDocumentPosition(o);
    return i & Node.DOCUMENT_POSITION_FOLLOWING
      ? -1
      : i & Node.DOCUMENT_POSITION_PRECEDING
      ? 1
      : 0;
  });
}
function _l(
  e,
  t,
  { sorted: n = !0, relativeTo: r = null, skipElements: l = [] } = {}
) {
  let o = Array.isArray(e)
      ? e.length > 0
        ? e[0].ownerDocument
        : document
      : e.ownerDocument,
    i = Array.isArray(e) ? (n ? x0(e) : e) : m0(e);
  l.length > 0 && i.length > 1 && (i = i.filter((w) => !l.includes(w))),
    (r = r ?? o.activeElement);
  let s = (() => {
      if (t & 5) return 1;
      if (t & 10) return -1;
      throw new Error(
        "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
      );
    })(),
    a = (() => {
      if (t & 1) return 0;
      if (t & 2) return Math.max(0, i.indexOf(r)) - 1;
      if (t & 4) return Math.max(0, i.indexOf(r)) + 1;
      if (t & 8) return i.length - 1;
      throw new Error(
        "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
      );
    })(),
    c = t & 32 ? { preventScroll: !0 } : {},
    d = 0,
    p = i.length,
    g;
  do {
    if (d >= p || d + p <= 0) return 0;
    let w = a + d;
    if (t & 16) w = (w + p) % p;
    else {
      if (w < 0) return 3;
      if (w >= p) return 1;
    }
    (g = i[w]), g == null || g.focus(c), (d += s);
  } while (g !== o.activeElement);
  return t & 6 && v0(g) && g.select(), 2;
}
function nf() {
  return (
    /iPhone/gi.test(window.navigator.platform) ||
    (/Mac/gi.test(window.navigator.platform) &&
      window.navigator.maxTouchPoints > 0)
  );
}
function w0() {
  return /Android/gi.test(window.navigator.userAgent);
}
function S0() {
  return nf() || w0();
}
function xl(e, t, n) {
  let r = Ct(t);
  y.useEffect(() => {
    function l(o) {
      r.current(o);
    }
    return (
      document.addEventListener(e, l, n),
      () => document.removeEventListener(e, l, n)
    );
  }, [e, n]);
}
function rf(e, t, n) {
  let r = Ct(t);
  y.useEffect(() => {
    function l(o) {
      r.current(o);
    }
    return (
      window.addEventListener(e, l, n),
      () => window.removeEventListener(e, l, n)
    );
  }, [e, n]);
}
function k0(e, t, n = !0) {
  let r = y.useRef(!1);
  y.useEffect(() => {
    requestAnimationFrame(() => {
      r.current = n;
    });
  }, [n]);
  function l(i, s) {
    if (!r.current || i.defaultPrevented) return;
    let a = s(i);
    if (a === null || !a.getRootNode().contains(a) || !a.isConnected) return;
    let c = (function d(p) {
      return typeof p == "function"
        ? d(p())
        : Array.isArray(p) || p instanceof Set
        ? p
        : [p];
    })(e);
    for (let d of c) {
      if (d === null) continue;
      let p = d instanceof HTMLElement ? d : d.current;
      if (
        (p != null && p.contains(a)) ||
        (i.composed && i.composedPath().includes(p))
      )
        return;
    }
    return !h0(a, tf.Loose) && a.tabIndex !== -1 && i.preventDefault(), t(i, a);
  }
  let o = y.useRef(null);
  xl(
    "pointerdown",
    (i) => {
      var s, a;
      r.current &&
        (o.current =
          ((a = (s = i.composedPath) == null ? void 0 : s.call(i)) == null
            ? void 0
            : a[0]) || i.target);
    },
    !0
  ),
    xl(
      "mousedown",
      (i) => {
        var s, a;
        r.current &&
          (o.current =
            ((a = (s = i.composedPath) == null ? void 0 : s.call(i)) == null
              ? void 0
              : a[0]) || i.target);
      },
      !0
    ),
    xl(
      "click",
      (i) => {
        S0() || (o.current && (l(i, () => o.current), (o.current = null)));
      },
      !0
    ),
    xl(
      "touchend",
      (i) => l(i, () => (i.target instanceof HTMLElement ? i.target : null)),
      !0
    ),
    rf(
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
function Jr(...e) {
  return y.useMemo(() => Zd(...e), [...e]);
}
let lf = Symbol();
function N0(e, t = !0) {
  return Object.assign(e, { [lf]: t });
}
function at(...e) {
  let t = y.useRef(e);
  y.useEffect(() => {
    t.current = e;
  }, [e]);
  let n = Z((r) => {
    for (let l of t.current)
      l != null && (typeof l == "function" ? l(r) : (l.current = r));
  });
  return e.every((r) => r == null || (r == null ? void 0 : r[lf])) ? void 0 : n;
}
function aa(e, t) {
  let n = y.useRef([]),
    r = Z(e);
  y.useEffect(() => {
    let l = [...n.current];
    for (let [o, i] of t.entries())
      if (n.current[o] !== i) {
        let s = r(t, l);
        return (n.current = t), s;
      }
  }, [r, ...t]);
}
function io(...e) {
  return Array.from(
    new Set(e.flatMap((t) => (typeof t == "string" ? t.split(" ") : [])))
  )
    .filter(Boolean)
    .join(" ");
}
var so = ((e) => (
    (e[(e.None = 0)] = "None"),
    (e[(e.RenderStrategy = 1)] = "RenderStrategy"),
    (e[(e.Static = 2)] = "Static"),
    e
  ))(so || {}),
  Wt = ((e) => (
    (e[(e.Unmount = 0)] = "Unmount"), (e[(e.Hidden = 1)] = "Hidden"), e
  ))(Wt || {});
function Ze({
  ourProps: e,
  theirProps: t,
  slot: n,
  defaultTag: r,
  features: l,
  visible: o = !0,
  name: i,
  mergeRefs: s,
}) {
  s = s ?? E0;
  let a = of(t, e);
  if (o) return wl(a, n, r, i, s);
  let c = l ?? 0;
  if (c & 2) {
    let { static: d = !1, ...p } = a;
    if (d) return wl(p, n, r, i, s);
  }
  if (c & 1) {
    let { unmount: d = !0, ...p } = a;
    return Ne(d ? 0 : 1, {
      0() {
        return null;
      },
      1() {
        return wl({ ...p, hidden: !0, style: { display: "none" } }, n, r, i, s);
      },
    });
  }
  return wl(a, n, r, i, s);
}
function wl(e, t = {}, n, r, l) {
  let {
      as: o = n,
      children: i,
      refName: s = "ref",
      ...a
    } = ai(e, ["unmount", "static"]),
    c = e.ref !== void 0 ? { [s]: e.ref } : {},
    d = typeof i == "function" ? i(t) : i;
  "className" in a &&
    a.className &&
    typeof a.className == "function" &&
    (a.className = a.className(t));
  let p = {};
  if (t) {
    let g = !1,
      w = [];
    for (let [x, S] of Object.entries(t))
      typeof S == "boolean" && (g = !0), S === !0 && w.push(x);
    g && (p["data-headlessui-state"] = w.join(" "));
  }
  if (o === y.Fragment && Object.keys(Ou(a)).length > 0) {
    if (!y.isValidElement(d) || (Array.isArray(d) && d.length > 1))
      throw new Error(
        [
          'Passing props on "Fragment"!',
          "",
          `The current component <${r} /> is rendering a "Fragment".`,
          "However we need to passthrough the following props:",
          Object.keys(a).map((S) => `  - ${S}`).join(`
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
    let g = d.props,
      w =
        typeof (g == null ? void 0 : g.className) == "function"
          ? (...S) => io(g == null ? void 0 : g.className(...S), a.className)
          : io(g == null ? void 0 : g.className, a.className),
      x = w ? { className: w } : {};
    return y.cloneElement(
      d,
      Object.assign(
        {},
        of(d.props, Ou(ai(a, ["ref"]))),
        p,
        c,
        { ref: l(d.ref, c.ref) },
        x
      )
    );
  }
  return y.createElement(
    o,
    Object.assign(
      {},
      ai(a, ["ref"]),
      o !== y.Fragment && c,
      o !== y.Fragment && p
    ),
    d
  );
}
function E0(...e) {
  return e.every((t) => t == null)
    ? void 0
    : (t) => {
        for (let n of e)
          n != null && (typeof n == "function" ? n(t) : (n.current = t));
      };
}
function of(...e) {
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
      [r](l, ...o) {
        let i = n[r];
        for (let s of i) {
          if (
            (l instanceof Event ||
              (l == null ? void 0 : l.nativeEvent) instanceof Event) &&
            l.defaultPrevented
          )
            return;
          s(l, ...o);
        }
      },
    });
  return t;
}
function Ue(e) {
  var t;
  return Object.assign(y.forwardRef(e), {
    displayName: (t = e.displayName) != null ? t : e.name,
  });
}
function Ou(e) {
  let t = Object.assign({}, e);
  for (let n in t) t[n] === void 0 && delete t[n];
  return t;
}
function ai(e, t = []) {
  let n = Object.assign({}, e);
  for (let r of t) r in n && delete n[r];
  return n;
}
let j0 = "div";
var ao = ((e) => (
  (e[(e.None = 1)] = "None"),
  (e[(e.Focusable = 2)] = "Focusable"),
  (e[(e.Hidden = 4)] = "Hidden"),
  e
))(ao || {});
function C0(e, t) {
  var n;
  let { features: r = 1, ...l } = e,
    o = {
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
  return Ze({
    ourProps: o,
    theirProps: l,
    slot: {},
    defaultTag: j0,
    name: "Hidden",
  });
}
let is = Ue(C0),
  ua = y.createContext(null);
ua.displayName = "OpenClosedContext";
var ze = ((e) => (
  (e[(e.Open = 1)] = "Open"),
  (e[(e.Closed = 2)] = "Closed"),
  (e[(e.Closing = 4)] = "Closing"),
  (e[(e.Opening = 8)] = "Opening"),
  e
))(ze || {});
function ca() {
  return y.useContext(ua);
}
function b0({ value: e, children: t }) {
  return R.createElement(ua.Provider, { value: e }, t);
}
function T0(e) {
  function t() {
    document.readyState !== "loading" &&
      (e(), document.removeEventListener("DOMContentLoaded", t));
  }
  typeof window < "u" &&
    typeof document < "u" &&
    (document.addEventListener("DOMContentLoaded", t), t());
}
let It = [];
T0(() => {
  function e(t) {
    t.target instanceof HTMLElement &&
      t.target !== document.body &&
      It[0] !== t.target &&
      (It.unshift(t.target),
      (It = It.filter((n) => n != null && n.isConnected)),
      It.splice(10));
  }
  window.addEventListener("click", e, { capture: !0 }),
    window.addEventListener("mousedown", e, { capture: !0 }),
    window.addEventListener("focus", e, { capture: !0 }),
    document.body.addEventListener("click", e, { capture: !0 }),
    document.body.addEventListener("mousedown", e, { capture: !0 }),
    document.body.addEventListener("focus", e, { capture: !0 });
});
function P0(e) {
  let t = e.parentElement,
    n = null;
  for (; t && !(t instanceof HTMLFieldSetElement); )
    t instanceof HTMLLegendElement && (n = t), (t = t.parentElement);
  let r = (t == null ? void 0 : t.getAttribute("disabled")) === "";
  return r && D0(n) ? !1 : r;
}
function D0(e) {
  if (!e) return !1;
  let t = e.previousElementSibling;
  for (; t !== null; ) {
    if (t instanceof HTMLLegendElement) return !1;
    t = t.previousElementSibling;
  }
  return !0;
}
var sf = ((e) => (
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
))(sf || {});
function af(e, t, n, r) {
  let l = Ct(n);
  y.useEffect(() => {
    e = e ?? window;
    function o(i) {
      l.current(i);
    }
    return e.addEventListener(t, o, r), () => e.removeEventListener(t, o, r);
  }, [e, t, r]);
}
function Zr() {
  let e = y.useRef(!1);
  return (
    Xe(
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
function uf(e) {
  let t = Z(e),
    n = y.useRef(!1);
  y.useEffect(
    () => (
      (n.current = !1),
      () => {
        (n.current = !0),
          Do(() => {
            n.current && t();
          });
      }
    ),
    [t]
  );
}
var vr = ((e) => (
  (e[(e.Forwards = 0)] = "Forwards"), (e[(e.Backwards = 1)] = "Backwards"), e
))(vr || {});
function O0() {
  let e = y.useRef(0);
  return (
    rf(
      "keydown",
      (t) => {
        t.key === "Tab" && (e.current = t.shiftKey ? 1 : 0);
      },
      !0
    ),
    e
  );
}
function cf(e) {
  if (!e) return new Set();
  if (typeof e == "function") return new Set(e());
  let t = new Set();
  for (let n of e.current) n.current instanceof HTMLElement && t.add(n.current);
  return t;
}
let L0 = "div";
var df = ((e) => (
  (e[(e.None = 1)] = "None"),
  (e[(e.InitialFocus = 2)] = "InitialFocus"),
  (e[(e.TabLock = 4)] = "TabLock"),
  (e[(e.FocusLock = 8)] = "FocusLock"),
  (e[(e.RestoreFocus = 16)] = "RestoreFocus"),
  (e[(e.All = 30)] = "All"),
  e
))(df || {});
function _0(e, t) {
  let n = y.useRef(null),
    r = at(n, t),
    { initialFocus: l, containers: o, features: i = 30, ...s } = e;
  er() || (i = 1);
  let a = Jr(n);
  F0({ ownerDocument: a }, !!(i & 16));
  let c = z0({ ownerDocument: a, container: n, initialFocus: l }, !!(i & 2));
  R0(
    { ownerDocument: a, container: n, containers: o, previousActiveElement: c },
    !!(i & 8)
  );
  let d = O0(),
    p = Z((S) => {
      let C = n.current;
      C &&
        ((m) => m())(() => {
          Ne(d.current, {
            [vr.Forwards]: () => {
              _l(C, on.First, { skipElements: [S.relatedTarget] });
            },
            [vr.Backwards]: () => {
              _l(C, on.Last, { skipElements: [S.relatedTarget] });
            },
          });
        });
    }),
    g = sa(),
    w = y.useRef(!1),
    x = {
      ref: r,
      onKeyDown(S) {
        S.key == "Tab" &&
          ((w.current = !0),
          g.requestAnimationFrame(() => {
            w.current = !1;
          }));
      },
      onBlur(S) {
        let C = cf(o);
        n.current instanceof HTMLElement && C.add(n.current);
        let m = S.relatedTarget;
        m instanceof HTMLElement &&
          m.dataset.headlessuiFocusGuard !== "true" &&
          (ff(C, m) ||
            (w.current
              ? _l(
                  n.current,
                  Ne(d.current, {
                    [vr.Forwards]: () => on.Next,
                    [vr.Backwards]: () => on.Previous,
                  }) | on.WrapAround,
                  { relativeTo: S.target }
                )
              : S.target instanceof HTMLElement && mn(S.target)));
      },
    };
  return R.createElement(
    R.Fragment,
    null,
    !!(i & 4) &&
      R.createElement(is, {
        as: "button",
        type: "button",
        "data-headlessui-focus-guard": !0,
        onFocus: p,
        features: ao.Focusable,
      }),
    Ze({ ourProps: x, theirProps: s, defaultTag: L0, name: "FocusTrap" }),
    !!(i & 4) &&
      R.createElement(is, {
        as: "button",
        type: "button",
        "data-headlessui-focus-guard": !0,
        onFocus: p,
        features: ao.Focusable,
      })
  );
}
let M0 = Ue(_0),
  fr = Object.assign(M0, { features: df });
function $0(e = !0) {
  let t = y.useRef(It.slice());
  return (
    aa(
      ([n], [r]) => {
        r === !0 &&
          n === !1 &&
          Do(() => {
            t.current.splice(0);
          }),
          r === !1 && n === !0 && (t.current = It.slice());
      },
      [e, It, t]
    ),
    Z(() => {
      var n;
      return (n = t.current.find((r) => r != null && r.isConnected)) != null
        ? n
        : null;
    })
  );
}
function F0({ ownerDocument: e }, t) {
  let n = $0(t);
  aa(() => {
    t ||
      ((e == null ? void 0 : e.activeElement) ===
        (e == null ? void 0 : e.body) &&
        mn(n()));
  }, [t]),
    uf(() => {
      t && mn(n());
    });
}
function z0({ ownerDocument: e, container: t, initialFocus: n }, r) {
  let l = y.useRef(null),
    o = Zr();
  return (
    aa(() => {
      if (!r) return;
      let i = t.current;
      i &&
        Do(() => {
          if (!o.current) return;
          let s = e == null ? void 0 : e.activeElement;
          if (n != null && n.current) {
            if ((n == null ? void 0 : n.current) === s) {
              l.current = s;
              return;
            }
          } else if (i.contains(s)) {
            l.current = s;
            return;
          }
          n != null && n.current
            ? mn(n.current)
            : _l(i, on.First) === ef.Error &&
              console.warn(
                "There are no focusable elements inside the <FocusTrap />"
              ),
            (l.current = e == null ? void 0 : e.activeElement);
        });
    }, [r]),
    l
  );
}
function R0(
  { ownerDocument: e, container: t, containers: n, previousActiveElement: r },
  l
) {
  let o = Zr();
  af(
    e == null ? void 0 : e.defaultView,
    "focus",
    (i) => {
      if (!l || !o.current) return;
      let s = cf(n);
      t.current instanceof HTMLElement && s.add(t.current);
      let a = r.current;
      if (!a) return;
      let c = i.target;
      c && c instanceof HTMLElement
        ? ff(s, c)
          ? ((r.current = c), mn(c))
          : (i.preventDefault(), i.stopPropagation(), mn(a))
        : mn(r.current);
    },
    !0
  );
}
function ff(e, t) {
  for (let n of e) if (n.contains(t)) return !0;
  return !1;
}
let pf = y.createContext(!1);
function I0() {
  return y.useContext(pf);
}
function ss(e) {
  return R.createElement(pf.Provider, { value: e.force }, e.children);
}
function A0(e) {
  let t = I0(),
    n = y.useContext(mf),
    r = Jr(e),
    [l, o] = y.useState(() => {
      if ((!t && n !== null) || jt.isServer) return null;
      let i = r == null ? void 0 : r.getElementById("headlessui-portal-root");
      if (i) return i;
      if (r === null) return null;
      let s = r.createElement("div");
      return (
        s.setAttribute("id", "headlessui-portal-root"), r.body.appendChild(s)
      );
    });
  return (
    y.useEffect(() => {
      l !== null &&
        ((r != null && r.body.contains(l)) ||
          r == null ||
          r.body.appendChild(l));
    }, [l, r]),
    y.useEffect(() => {
      t || (n !== null && o(n.current));
    }, [n, o, t]),
    l
  );
}
let H0 = y.Fragment;
function W0(e, t) {
  let n = e,
    r = y.useRef(null),
    l = at(
      N0((d) => {
        r.current = d;
      }),
      t
    ),
    o = Jr(r),
    i = A0(r),
    [s] = y.useState(() => {
      var d;
      return jt.isServer
        ? null
        : (d = o == null ? void 0 : o.createElement("div")) != null
        ? d
        : null;
    }),
    a = y.useContext(as),
    c = er();
  return (
    Xe(() => {
      !i ||
        !s ||
        i.contains(s) ||
        (s.setAttribute("data-headlessui-portal", ""), i.appendChild(s));
    }, [i, s]),
    Xe(() => {
      if (s && a) return a.register(s);
    }, [a, s]),
    uf(() => {
      var d;
      !i ||
        !s ||
        (s instanceof Node && i.contains(s) && i.removeChild(s),
        i.childNodes.length <= 0 &&
          ((d = i.parentElement) == null || d.removeChild(i)));
    }),
    c
      ? !i || !s
        ? null
        : To.createPortal(
            Ze({
              ourProps: { ref: l },
              theirProps: n,
              defaultTag: H0,
              name: "Portal",
            }),
            s
          )
      : null
  );
}
let U0 = y.Fragment,
  mf = y.createContext(null);
function B0(e, t) {
  let { target: n, ...r } = e,
    l = { ref: at(t) };
  return R.createElement(
    mf.Provider,
    { value: n },
    Ze({ ourProps: l, theirProps: r, defaultTag: U0, name: "Popover.Group" })
  );
}
let as = y.createContext(null);
function V0() {
  let e = y.useContext(as),
    t = y.useRef([]),
    n = Z((o) => (t.current.push(o), e && e.register(o), () => r(o))),
    r = Z((o) => {
      let i = t.current.indexOf(o);
      i !== -1 && t.current.splice(i, 1), e && e.unregister(o);
    }),
    l = y.useMemo(
      () => ({ register: n, unregister: r, portals: t }),
      [n, r, t]
    );
  return [
    t,
    y.useMemo(
      () =>
        function ({ children: o }) {
          return R.createElement(as.Provider, { value: l }, o);
        },
      [l]
    ),
  ];
}
let Q0 = Ue(W0),
  Y0 = Ue(B0),
  us = Object.assign(Q0, { Group: Y0 });
function K0(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
const G0 = typeof Object.is == "function" ? Object.is : K0,
  { useState: q0, useEffect: X0, useLayoutEffect: J0, useDebugValue: Z0 } = Tr;
function eg(e, t, n) {
  const r = t(),
    [{ inst: l }, o] = q0({ inst: { value: r, getSnapshot: t } });
  return (
    J0(() => {
      (l.value = r), (l.getSnapshot = t), ui(l) && o({ inst: l });
    }, [e, r, t]),
    X0(
      () => (
        ui(l) && o({ inst: l }),
        e(() => {
          ui(l) && o({ inst: l });
        })
      ),
      [e]
    ),
    Z0(r),
    r
  );
}
function ui(e) {
  const t = e.getSnapshot,
    n = e.value;
  try {
    const r = t();
    return !G0(n, r);
  } catch {
    return !0;
  }
}
function tg(e, t, n) {
  return t();
}
const ng =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  rg = !ng,
  lg = rg ? tg : eg,
  og = "useSyncExternalStore" in Tr ? ((e) => e.useSyncExternalStore)(Tr) : lg;
function ig(e) {
  return og(e.subscribe, e.getSnapshot, e.getSnapshot);
}
function sg(e, t) {
  let n = e(),
    r = new Set();
  return {
    getSnapshot() {
      return n;
    },
    subscribe(l) {
      return r.add(l), () => r.delete(l);
    },
    dispatch(l, ...o) {
      let i = t[l].call(n, ...o);
      i && ((n = i), r.forEach((s) => s()));
    },
  };
}
function ag() {
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
        o = e - l;
      n.style(r, "paddingRight", `${o}px`);
    },
  };
}
function ug() {
  return nf()
    ? {
        before({ doc: e, d: t, meta: n }) {
          function r(l) {
            return n.containers.flatMap((o) => o()).some((o) => o.contains(l));
          }
          t.microTask(() => {
            var l;
            if (
              window.getComputedStyle(e.documentElement).scrollBehavior !==
              "auto"
            ) {
              let s = Nn();
              s.style(e.documentElement, "scrollBehavior", "auto"),
                t.add(() => t.microTask(() => s.dispose()));
            }
            let o = (l = window.scrollY) != null ? l : window.pageYOffset,
              i = null;
            t.addEventListener(
              e,
              "click",
              (s) => {
                if (s.target instanceof HTMLElement)
                  try {
                    let a = s.target.closest("a");
                    if (!a) return;
                    let { hash: c } = new URL(a.href),
                      d = e.querySelector(c);
                    d && !r(d) && (i = d);
                  } catch {}
              },
              !0
            ),
              t.addEventListener(e, "touchstart", (s) => {
                if (s.target instanceof HTMLElement)
                  if (r(s.target)) {
                    let a = s.target;
                    for (; a.parentElement && r(a.parentElement); )
                      a = a.parentElement;
                    t.style(a, "overscrollBehavior", "contain");
                  } else t.style(s.target, "touchAction", "none");
              }),
              t.addEventListener(
                e,
                "touchmove",
                (s) => {
                  if (s.target instanceof HTMLElement)
                    if (r(s.target)) {
                      let a = s.target;
                      for (
                        ;
                        a.parentElement &&
                        a.dataset.headlessuiPortal !== "" &&
                        !(
                          a.scrollHeight > a.clientHeight ||
                          a.scrollWidth > a.clientWidth
                        );

                      )
                        a = a.parentElement;
                      a.dataset.headlessuiPortal === "" && s.preventDefault();
                    } else s.preventDefault();
                },
                { passive: !1 }
              ),
              t.add(() => {
                var s;
                let a = (s = window.scrollY) != null ? s : window.pageYOffset;
                o !== a && window.scrollTo(0, o),
                  i &&
                    i.isConnected &&
                    (i.scrollIntoView({ block: "nearest" }), (i = null));
              });
          });
        },
      }
    : {};
}
function cg() {
  return {
    before({ doc: e, d: t }) {
      t.style(e.documentElement, "overflow", "hidden");
    },
  };
}
function dg(e) {
  let t = {};
  for (let n of e) Object.assign(t, n(t));
  return t;
}
let cn = sg(() => new Map(), {
  PUSH(e, t) {
    var n;
    let r =
      (n = this.get(e)) != null
        ? n
        : { doc: e, count: 0, d: Nn(), meta: new Set() };
    return r.count++, r.meta.add(t), this.set(e, r), this;
  },
  POP(e, t) {
    let n = this.get(e);
    return n && (n.count--, n.meta.delete(t)), this;
  },
  SCROLL_PREVENT({ doc: e, d: t, meta: n }) {
    let r = { doc: e, d: t, meta: dg(n) },
      l = [ug(), ag(), cg()];
    l.forEach(({ before: o }) => (o == null ? void 0 : o(r))),
      l.forEach(({ after: o }) => (o == null ? void 0 : o(r)));
  },
  SCROLL_ALLOW({ d: e }) {
    e.dispose();
  },
  TEARDOWN({ doc: e }) {
    this.delete(e);
  },
});
cn.subscribe(() => {
  let e = cn.getSnapshot(),
    t = new Map();
  for (let [n] of e) t.set(n, n.documentElement.style.overflow);
  for (let n of e.values()) {
    let r = t.get(n.doc) === "hidden",
      l = n.count !== 0;
    ((l && !r) || (!l && r)) &&
      cn.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n),
      n.count === 0 && cn.dispatch("TEARDOWN", n);
  }
});
function fg(e, t, n) {
  let r = ig(cn),
    l = e ? r.get(e) : void 0,
    o = l ? l.count > 0 : !1;
  return (
    Xe(() => {
      if (!(!e || !t))
        return cn.dispatch("PUSH", e, n), () => cn.dispatch("POP", e, n);
    }, [t, e]),
    o
  );
}
let ci = new Map(),
  pr = new Map();
function Lu(e, t = !0) {
  Xe(() => {
    var n;
    if (!t) return;
    let r = typeof e == "function" ? e() : e.current;
    if (!r) return;
    function l() {
      var i;
      if (!r) return;
      let s = (i = pr.get(r)) != null ? i : 1;
      if ((s === 1 ? pr.delete(r) : pr.set(r, s - 1), s !== 1)) return;
      let a = ci.get(r);
      a &&
        (a["aria-hidden"] === null
          ? r.removeAttribute("aria-hidden")
          : r.setAttribute("aria-hidden", a["aria-hidden"]),
        (r.inert = a.inert),
        ci.delete(r));
    }
    let o = (n = pr.get(r)) != null ? n : 0;
    return (
      pr.set(r, o + 1),
      o !== 0 ||
        (ci.set(r, {
          "aria-hidden": r.getAttribute("aria-hidden"),
          inert: r.inert,
        }),
        r.setAttribute("aria-hidden", "true"),
        (r.inert = !0)),
      l
    );
  }, [e, t]);
}
function pg({
  defaultContainers: e = [],
  portals: t,
  mainTreeNodeRef: n,
} = {}) {
  var r;
  let l = y.useRef((r = n == null ? void 0 : n.current) != null ? r : null),
    o = Jr(l),
    i = Z(() => {
      var s, a, c;
      let d = [];
      for (let p of e)
        p !== null &&
          (p instanceof HTMLElement
            ? d.push(p)
            : "current" in p &&
              p.current instanceof HTMLElement &&
              d.push(p.current));
      if (t != null && t.current) for (let p of t.current) d.push(p);
      for (let p of (s =
        o == null ? void 0 : o.querySelectorAll("html > *, body > *")) != null
        ? s
        : [])
        p !== document.body &&
          p !== document.head &&
          p instanceof HTMLElement &&
          p.id !== "headlessui-portal-root" &&
          (p.contains(l.current) ||
            p.contains(
              (c = (a = l.current) == null ? void 0 : a.getRootNode()) == null
                ? void 0
                : c.host
            ) ||
            d.some((g) => p.contains(g)) ||
            d.push(p));
      return d;
    });
  return {
    resolveContainers: i,
    contains: Z((s) => i().some((a) => a.contains(s))),
    mainTreeNodeRef: l,
    MainTreeNode: y.useMemo(
      () =>
        function () {
          return n != null
            ? null
            : R.createElement(is, { features: ao.Hidden, ref: l });
        },
      [l, n]
    ),
  };
}
let da = y.createContext(() => {});
da.displayName = "StackContext";
var cs = ((e) => ((e[(e.Add = 0)] = "Add"), (e[(e.Remove = 1)] = "Remove"), e))(
  cs || {}
);
function mg() {
  return y.useContext(da);
}
function hg({ children: e, onUpdate: t, type: n, element: r, enabled: l }) {
  let o = mg(),
    i = Z((...s) => {
      t == null || t(...s), o(...s);
    });
  return (
    Xe(() => {
      let s = l === void 0 || l === !0;
      return (
        s && i(0, n, r),
        () => {
          s && i(1, n, r);
        }
      );
    }, [i, n, r, l]),
    R.createElement(da.Provider, { value: i }, e)
  );
}
let hf = y.createContext(null);
function gf() {
  let e = y.useContext(hf);
  if (e === null) {
    let t = new Error(
      "You used a <Description /> component, but it is not inside a relevant parent."
    );
    throw (Error.captureStackTrace && Error.captureStackTrace(t, gf), t);
  }
  return e;
}
function gg() {
  let [e, t] = y.useState([]);
  return [
    e.length > 0 ? e.join(" ") : void 0,
    y.useMemo(
      () =>
        function (n) {
          let r = Z(
              (o) => (
                t((i) => [...i, o]),
                () =>
                  t((i) => {
                    let s = i.slice(),
                      a = s.indexOf(o);
                    return a !== -1 && s.splice(a, 1), s;
                  })
              )
            ),
            l = y.useMemo(
              () => ({
                register: r,
                slot: n.slot,
                name: n.name,
                props: n.props,
              }),
              [r, n.slot, n.name, n.props]
            );
          return R.createElement(hf.Provider, { value: l }, n.children);
        },
      [t]
    ),
  ];
}
let yg = "p";
function vg(e, t) {
  let n = tr(),
    { id: r = `headlessui-description-${n}`, ...l } = e,
    o = gf(),
    i = at(t);
  Xe(() => o.register(r), [r, o.register]);
  let s = { ref: i, ...o.props, id: r };
  return Ze({
    ourProps: s,
    theirProps: l,
    slot: o.slot || {},
    defaultTag: yg,
    name: o.name || "Description",
  });
}
let xg = Ue(vg),
  wg = Object.assign(xg, {});
var Sg = ((e) => (
    (e[(e.Open = 0)] = "Open"), (e[(e.Closed = 1)] = "Closed"), e
  ))(Sg || {}),
  kg = ((e) => ((e[(e.SetTitleId = 0)] = "SetTitleId"), e))(kg || {});
let Ng = {
    0(e, t) {
      return e.titleId === t.id ? e : { ...e, titleId: t.id };
    },
  },
  uo = y.createContext(null);
uo.displayName = "DialogContext";
function el(e) {
  let t = y.useContext(uo);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw (Error.captureStackTrace && Error.captureStackTrace(n, el), n);
  }
  return t;
}
function Eg(e, t, n = () => [document.body]) {
  fg(e, t, (r) => {
    var l;
    return { containers: [...((l = r.containers) != null ? l : []), n] };
  });
}
function jg(e, t) {
  return Ne(t.type, Ng, e, t);
}
let Cg = "div",
  bg = so.RenderStrategy | so.Static;
function Tg(e, t) {
  let n = tr(),
    {
      id: r = `headlessui-dialog-${n}`,
      open: l,
      onClose: o,
      initialFocus: i,
      role: s = "dialog",
      __demoMode: a = !1,
      ...c
    } = e,
    [d, p] = y.useState(0),
    g = y.useRef(!1);
  s = (function () {
    return s === "dialog" || s === "alertdialog"
      ? s
      : (g.current ||
          ((g.current = !0),
          console.warn(
            `Invalid role [${s}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`
          )),
        "dialog");
  })();
  let w = ca();
  l === void 0 && w !== null && (l = (w & ze.Open) === ze.Open);
  let x = y.useRef(null),
    S = at(x, t),
    C = Jr(x),
    m = e.hasOwnProperty("open") || w !== null,
    f = e.hasOwnProperty("onClose");
  if (!m && !f)
    throw new Error(
      "You have to provide an `open` and an `onClose` prop to the `Dialog` component."
    );
  if (!m)
    throw new Error(
      "You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop."
    );
  if (!f)
    throw new Error(
      "You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop."
    );
  if (typeof l != "boolean")
    throw new Error(
      `You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${l}`
    );
  if (typeof o != "function")
    throw new Error(
      `You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${o}`
    );
  let h = l ? 0 : 1,
    [v, k] = y.useReducer(jg, {
      titleId: null,
      descriptionId: null,
      panelRef: y.createRef(),
    }),
    N = Z(() => o(!1)),
    T = Z((A) => k({ type: 0, id: A })),
    P = er() ? (a ? !1 : h === 0) : !1,
    M = d > 1,
    L = y.useContext(uo) !== null,
    [B, X] = V0(),
    oe = {
      get current() {
        var A;
        return (A = v.panelRef.current) != null ? A : x.current;
      },
    },
    {
      resolveContainers: je,
      mainTreeNodeRef: ge,
      MainTreeNode: Ce,
    } = pg({ portals: B, defaultContainers: [oe] }),
    E = M ? "parent" : "leaf",
    b = w !== null ? (w & ze.Closing) === ze.Closing : !1,
    $ = L || b ? !1 : P,
    F = y.useCallback(() => {
      var A, xe;
      return (xe = Array.from(
        (A = C == null ? void 0 : C.querySelectorAll("body > *")) != null
          ? A
          : []
      ).find((Y) =>
        Y.id === "headlessui-portal-root"
          ? !1
          : Y.contains(ge.current) && Y instanceof HTMLElement
      )) != null
        ? xe
        : null;
    }, [ge]);
  Lu(F, $);
  let W = M ? !0 : P,
    O = y.useCallback(() => {
      var A, xe;
      return (xe = Array.from(
        (A =
          C == null
            ? void 0
            : C.querySelectorAll("[data-headlessui-portal]")) != null
          ? A
          : []
      ).find((Y) => Y.contains(ge.current) && Y instanceof HTMLElement)) != null
        ? xe
        : null;
    }, [ge]);
  Lu(O, W),
    k0(
      je,
      (A) => {
        A.preventDefault(), N();
      },
      !(!P || M)
    );
  let U = !(M || h !== 0);
  af(C == null ? void 0 : C.defaultView, "keydown", (A) => {
    U &&
      (A.defaultPrevented ||
        (A.key === sf.Escape &&
          (A.preventDefault(), A.stopPropagation(), N())));
  }),
    Eg(C, !(b || h !== 0 || L), je),
    y.useEffect(() => {
      if (h !== 0 || !x.current) return;
      let A = new ResizeObserver((xe) => {
        for (let Y of xe) {
          let Be = Y.target.getBoundingClientRect();
          Be.x === 0 && Be.y === 0 && Be.width === 0 && Be.height === 0 && N();
        }
      });
      return A.observe(x.current), () => A.disconnect();
    }, [h, x, N]);
  let [ye, ve] = gg(),
    gt = y.useMemo(
      () => [{ dialogState: h, close: N, setTitleId: T }, v],
      [h, v, N, T]
    ),
    _ = y.useMemo(() => ({ open: h === 0 }), [h]),
    z = {
      ref: S,
      id: r,
      role: s,
      "aria-modal": h === 0 ? !0 : void 0,
      "aria-labelledby": v.titleId,
      "aria-describedby": ye,
    };
  return R.createElement(
    hg,
    {
      type: "Dialog",
      enabled: h === 0,
      element: x,
      onUpdate: Z((A, xe) => {
        xe === "Dialog" &&
          Ne(A, {
            [cs.Add]: () => p((Y) => Y + 1),
            [cs.Remove]: () => p((Y) => Y - 1),
          });
      }),
    },
    R.createElement(
      ss,
      { force: !0 },
      R.createElement(
        us,
        null,
        R.createElement(
          uo.Provider,
          { value: gt },
          R.createElement(
            us.Group,
            { target: x },
            R.createElement(
              ss,
              { force: !1 },
              R.createElement(
                ve,
                { slot: _, name: "Dialog.Description" },
                R.createElement(
                  fr,
                  {
                    initialFocus: i,
                    containers: je,
                    features: P
                      ? Ne(E, {
                          parent: fr.features.RestoreFocus,
                          leaf: fr.features.All & ~fr.features.FocusLock,
                        })
                      : fr.features.None,
                  },
                  R.createElement(
                    X,
                    null,
                    Ze({
                      ourProps: z,
                      theirProps: c,
                      slot: _,
                      defaultTag: Cg,
                      features: bg,
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
    R.createElement(Ce, null)
  );
}
let Pg = "div";
function Dg(e, t) {
  let n = tr(),
    { id: r = `headlessui-dialog-overlay-${n}`, ...l } = e,
    [{ dialogState: o, close: i }] = el("Dialog.Overlay"),
    s = at(t),
    a = Z((d) => {
      if (d.target === d.currentTarget) {
        if (P0(d.currentTarget)) return d.preventDefault();
        d.preventDefault(), d.stopPropagation(), i();
      }
    }),
    c = y.useMemo(() => ({ open: o === 0 }), [o]);
  return Ze({
    ourProps: { ref: s, id: r, "aria-hidden": !0, onClick: a },
    theirProps: l,
    slot: c,
    defaultTag: Pg,
    name: "Dialog.Overlay",
  });
}
let Og = "div";
function Lg(e, t) {
  let n = tr(),
    { id: r = `headlessui-dialog-backdrop-${n}`, ...l } = e,
    [{ dialogState: o }, i] = el("Dialog.Backdrop"),
    s = at(t);
  y.useEffect(() => {
    if (i.panelRef.current === null)
      throw new Error(
        "A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing."
      );
  }, [i.panelRef]);
  let a = y.useMemo(() => ({ open: o === 0 }), [o]);
  return R.createElement(
    ss,
    { force: !0 },
    R.createElement(
      us,
      null,
      Ze({
        ourProps: { ref: s, id: r, "aria-hidden": !0 },
        theirProps: l,
        slot: a,
        defaultTag: Og,
        name: "Dialog.Backdrop",
      })
    )
  );
}
let _g = "div";
function Mg(e, t) {
  let n = tr(),
    { id: r = `headlessui-dialog-panel-${n}`, ...l } = e,
    [{ dialogState: o }, i] = el("Dialog.Panel"),
    s = at(t, i.panelRef),
    a = y.useMemo(() => ({ open: o === 0 }), [o]),
    c = Z((d) => {
      d.stopPropagation();
    });
  return Ze({
    ourProps: { ref: s, id: r, onClick: c },
    theirProps: l,
    slot: a,
    defaultTag: _g,
    name: "Dialog.Panel",
  });
}
let $g = "h2";
function Fg(e, t) {
  let n = tr(),
    { id: r = `headlessui-dialog-title-${n}`, ...l } = e,
    [{ dialogState: o, setTitleId: i }] = el("Dialog.Title"),
    s = at(t);
  y.useEffect(() => (i(r), () => i(null)), [r, i]);
  let a = y.useMemo(() => ({ open: o === 0 }), [o]);
  return Ze({
    ourProps: { ref: s, id: r },
    theirProps: l,
    slot: a,
    defaultTag: $g,
    name: "Dialog.Title",
  });
}
let zg = Ue(Tg),
  Rg = Ue(Lg),
  Ig = Ue(Mg),
  Ag = Ue(Dg),
  Hg = Ue(Fg),
  xt = Object.assign(zg, {
    Backdrop: Rg,
    Panel: Ig,
    Overlay: Ag,
    Title: Hg,
    Description: wg,
  });
function Wg(e = 0) {
  let [t, n] = y.useState(e),
    r = Zr(),
    l = y.useCallback(
      (a) => {
        r.current && n((c) => c | a);
      },
      [t, r]
    ),
    o = y.useCallback((a) => !!(t & a), [t]),
    i = y.useCallback(
      (a) => {
        r.current && n((c) => c & ~a);
      },
      [n, r]
    ),
    s = y.useCallback(
      (a) => {
        r.current && n((c) => c ^ a);
      },
      [n]
    );
  return { flags: t, addFlag: l, hasFlag: o, removeFlag: i, toggleFlag: s };
}
function Ug(e) {
  let t = { called: !1 };
  return (...n) => {
    if (!t.called) return (t.called = !0), e(...n);
  };
}
function di(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function fi(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
function Bg(e, t) {
  let n = Nn();
  if (!e) return n.dispose;
  let { transitionDuration: r, transitionDelay: l } = getComputedStyle(e),
    [o, i] = [r, l].map((a) => {
      let [c = 0] = a
        .split(",")
        .filter(Boolean)
        .map((d) => (d.includes("ms") ? parseFloat(d) : parseFloat(d) * 1e3))
        .sort((d, p) => p - d);
      return c;
    }),
    s = o + i;
  if (s !== 0) {
    n.group((c) => {
      c.setTimeout(() => {
        t(), c.dispose();
      }, s),
        c.addEventListener(e, "transitionrun", (d) => {
          d.target === d.currentTarget && c.dispose();
        });
    });
    let a = n.addEventListener(e, "transitionend", (c) => {
      c.target === c.currentTarget && (t(), a());
    });
  } else t();
  return n.add(() => t()), n.dispose;
}
function Vg(e, t, n, r) {
  let l = n ? "enter" : "leave",
    o = Nn(),
    i = r !== void 0 ? Ug(r) : () => {};
  l === "enter" && (e.removeAttribute("hidden"), (e.style.display = ""));
  let s = Ne(l, { enter: () => t.enter, leave: () => t.leave }),
    a = Ne(l, { enter: () => t.enterTo, leave: () => t.leaveTo }),
    c = Ne(l, { enter: () => t.enterFrom, leave: () => t.leaveFrom });
  return (
    fi(
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
    di(e, ...t.base, ...s, ...c),
    o.nextFrame(() => {
      fi(e, ...t.base, ...s, ...c),
        di(e, ...t.base, ...s, ...a),
        Bg(
          e,
          () => (fi(e, ...t.base, ...s), di(e, ...t.base, ...t.entered), i())
        );
    }),
    o.dispose
  );
}
function Qg({
  immediate: e,
  container: t,
  direction: n,
  classes: r,
  onStart: l,
  onStop: o,
}) {
  let i = Zr(),
    s = sa(),
    a = Ct(n);
  Xe(() => {
    e && (a.current = "enter");
  }, [e]),
    Xe(() => {
      let c = Nn();
      s.add(c.dispose);
      let d = t.current;
      if (d && a.current !== "idle" && i.current)
        return (
          c.dispose(),
          l.current(a.current),
          c.add(
            Vg(d, r.current, a.current === "enter", () => {
              c.dispose(), o.current(a.current);
            })
          ),
          c.dispose
        );
    }, [n]);
}
function Mt(e = "") {
  return e.split(/\s+/).filter((t) => t.length > 1);
}
let Oo = y.createContext(null);
Oo.displayName = "TransitionContext";
var Yg = ((e) => ((e.Visible = "visible"), (e.Hidden = "hidden"), e))(Yg || {});
function Kg() {
  let e = y.useContext(Oo);
  if (e === null)
    throw new Error(
      "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />."
    );
  return e;
}
function Gg() {
  let e = y.useContext(Lo);
  if (e === null)
    throw new Error(
      "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />."
    );
  return e;
}
let Lo = y.createContext(null);
Lo.displayName = "NestingContext";
function _o(e) {
  return "children" in e
    ? _o(e.children)
    : e.current
        .filter(({ el: t }) => t.current !== null)
        .filter(({ state: t }) => t === "visible").length > 0;
}
function yf(e, t) {
  let n = Ct(e),
    r = y.useRef([]),
    l = Zr(),
    o = sa(),
    i = Z((w, x = Wt.Hidden) => {
      let S = r.current.findIndex(({ el: C }) => C === w);
      S !== -1 &&
        (Ne(x, {
          [Wt.Unmount]() {
            r.current.splice(S, 1);
          },
          [Wt.Hidden]() {
            r.current[S].state = "hidden";
          },
        }),
        o.microTask(() => {
          var C;
          !_o(r) && l.current && ((C = n.current) == null || C.call(n));
        }));
    }),
    s = Z((w) => {
      let x = r.current.find(({ el: S }) => S === w);
      return (
        x
          ? x.state !== "visible" && (x.state = "visible")
          : r.current.push({ el: w, state: "visible" }),
        () => i(w, Wt.Unmount)
      );
    }),
    a = y.useRef([]),
    c = y.useRef(Promise.resolve()),
    d = y.useRef({ enter: [], leave: [], idle: [] }),
    p = Z((w, x, S) => {
      a.current.splice(0),
        t &&
          (t.chains.current[x] = t.chains.current[x].filter(([C]) => C !== w)),
        t == null ||
          t.chains.current[x].push([
            w,
            new Promise((C) => {
              a.current.push(C);
            }),
          ]),
        t == null ||
          t.chains.current[x].push([
            w,
            new Promise((C) => {
              Promise.all(d.current[x].map(([m, f]) => f)).then(() => C());
            }),
          ]),
        x === "enter"
          ? (c.current = c.current
              .then(() => (t == null ? void 0 : t.wait.current))
              .then(() => S(x)))
          : S(x);
    }),
    g = Z((w, x, S) => {
      Promise.all(d.current[x].splice(0).map(([C, m]) => m))
        .then(() => {
          var C;
          (C = a.current.shift()) == null || C();
        })
        .then(() => S(x));
    });
  return y.useMemo(
    () => ({
      children: r,
      register: s,
      unregister: i,
      onStart: p,
      onStop: g,
      wait: c,
      chains: d,
    }),
    [s, i, r, p, g, d, c]
  );
}
function qg() {}
let Xg = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function _u(e) {
  var t;
  let n = {};
  for (let r of Xg) n[r] = (t = e[r]) != null ? t : qg;
  return n;
}
function Jg(e) {
  let t = y.useRef(_u(e));
  return (
    y.useEffect(() => {
      t.current = _u(e);
    }, [e]),
    t
  );
}
let Zg = "div",
  vf = so.RenderStrategy;
function ey(e, t) {
  var n, r;
  let {
      beforeEnter: l,
      afterEnter: o,
      beforeLeave: i,
      afterLeave: s,
      enter: a,
      enterFrom: c,
      enterTo: d,
      entered: p,
      leave: g,
      leaveFrom: w,
      leaveTo: x,
      ...S
    } = e,
    C = y.useRef(null),
    m = at(C, t),
    f = (n = S.unmount) == null || n ? Wt.Unmount : Wt.Hidden,
    { show: h, appear: v, initial: k } = Kg(),
    [N, T] = y.useState(h ? "visible" : "hidden"),
    P = Gg(),
    { register: M, unregister: L } = P;
  y.useEffect(() => M(C), [M, C]),
    y.useEffect(() => {
      if (f === Wt.Hidden && C.current) {
        if (h && N !== "visible") {
          T("visible");
          return;
        }
        return Ne(N, { hidden: () => L(C), visible: () => M(C) });
      }
    }, [N, C, M, L, h, f]);
  let B = Ct({
      base: Mt(S.className),
      enter: Mt(a),
      enterFrom: Mt(c),
      enterTo: Mt(d),
      entered: Mt(p),
      leave: Mt(g),
      leaveFrom: Mt(w),
      leaveTo: Mt(x),
    }),
    X = Jg({ beforeEnter: l, afterEnter: o, beforeLeave: i, afterLeave: s }),
    oe = er();
  y.useEffect(() => {
    if (oe && N === "visible" && C.current === null)
      throw new Error(
        "Did you forget to passthrough the `ref` to the actual DOM node?"
      );
  }, [C, N, oe]);
  let je = k && !v,
    ge = v && h && k,
    Ce = !oe || je ? "idle" : h ? "enter" : "leave",
    E = Wg(0),
    b = Z((U) =>
      Ne(U, {
        enter: () => {
          E.addFlag(ze.Opening), X.current.beforeEnter();
        },
        leave: () => {
          E.addFlag(ze.Closing), X.current.beforeLeave();
        },
        idle: () => {},
      })
    ),
    $ = Z((U) =>
      Ne(U, {
        enter: () => {
          E.removeFlag(ze.Opening), X.current.afterEnter();
        },
        leave: () => {
          E.removeFlag(ze.Closing), X.current.afterLeave();
        },
        idle: () => {},
      })
    ),
    F = yf(() => {
      T("hidden"), L(C);
    }, P),
    W = y.useRef(!1);
  Qg({
    immediate: ge,
    container: C,
    classes: B,
    direction: Ce,
    onStart: Ct((U) => {
      (W.current = !0), F.onStart(C, U, b);
    }),
    onStop: Ct((U) => {
      (W.current = !1),
        F.onStop(C, U, $),
        U === "leave" && !_o(F) && (T("hidden"), L(C));
    }),
  });
  let O = S,
    re = { ref: m };
  return (
    ge
      ? (O = {
          ...O,
          className: io(
            S.className,
            ...B.current.enter,
            ...B.current.enterFrom
          ),
        })
      : W.current &&
        ((O.className = io(
          S.className,
          (r = C.current) == null ? void 0 : r.className
        )),
        O.className === "" && delete O.className),
    R.createElement(
      Lo.Provider,
      { value: F },
      R.createElement(
        b0,
        { value: Ne(N, { visible: ze.Open, hidden: ze.Closed }) | E.flags },
        Ze({
          ourProps: re,
          theirProps: O,
          defaultTag: Zg,
          features: vf,
          visible: N === "visible",
          name: "Transition.Child",
        })
      )
    )
  );
}
function ty(e, t) {
  let { show: n, appear: r = !1, unmount: l = !0, ...o } = e,
    i = y.useRef(null),
    s = at(i, t);
  er();
  let a = ca();
  if (
    (n === void 0 && a !== null && (n = (a & ze.Open) === ze.Open),
    ![!0, !1].includes(n))
  )
    throw new Error(
      "A <Transition /> is used but it is missing a `show={true | false}` prop."
    );
  let [c, d] = y.useState(n ? "visible" : "hidden"),
    p = yf(() => {
      d("hidden");
    }),
    [g, w] = y.useState(!0),
    x = y.useRef([n]);
  Xe(() => {
    g !== !1 &&
      x.current[x.current.length - 1] !== n &&
      (x.current.push(n), w(!1));
  }, [x, n]);
  let S = y.useMemo(() => ({ show: n, appear: r, initial: g }), [n, r, g]);
  y.useEffect(() => {
    if (n) d("visible");
    else if (!_o(p)) d("hidden");
    else {
      let h = i.current;
      if (!h) return;
      let v = h.getBoundingClientRect();
      v.x === 0 && v.y === 0 && v.width === 0 && v.height === 0 && d("hidden");
    }
  }, [n, p]);
  let C = { unmount: l },
    m = Z(() => {
      var h;
      g && w(!1), (h = e.beforeEnter) == null || h.call(e);
    }),
    f = Z(() => {
      var h;
      g && w(!1), (h = e.beforeLeave) == null || h.call(e);
    });
  return R.createElement(
    Lo.Provider,
    { value: p },
    R.createElement(
      Oo.Provider,
      { value: S },
      Ze({
        ourProps: {
          ...C,
          as: y.Fragment,
          children: R.createElement(xf, {
            ref: s,
            ...C,
            ...o,
            beforeEnter: m,
            beforeLeave: f,
          }),
        },
        theirProps: {},
        defaultTag: y.Fragment,
        features: vf,
        visible: c === "visible",
        name: "Transition",
      })
    )
  );
}
function ny(e, t) {
  let n = y.useContext(Oo) !== null,
    r = ca() !== null;
  return R.createElement(
    R.Fragment,
    null,
    !n && r
      ? R.createElement(ds, { ref: t, ...e })
      : R.createElement(xf, { ref: t, ...e })
  );
}
let ds = Ue(ty),
  xf = Ue(ey),
  ry = Ue(ny),
  wt = Object.assign(ds, { Child: ry, Root: ds }),
  dn = null;
const ly = async () => {
    if (dn) return dn;
    try {
      const e = await fetch("../config.txt");
      if (!e.ok) throw new Error("Failed to load configuration");
      return (dn = await e.json()), dn;
    } catch (e) {
      throw (console.error("Error loading config:", e), e);
    }
  },
  oy = (e) => {
    if (!dn) throw new Error("Configuration not loaded");
    return `${dn.domain}${e}`;
  },
  iy = () => dn,
  Nt = async (e, t = {}) => {
    const n = oy(e),
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
        o = await l.text();
      let i;
      try {
        i = JSON.parse(o);
      } catch (s) {
        throw (
          (console.error("Failed to parse response as JSON:", s),
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
  sy = async (e) =>
    Nt(`/api/drugStotreDistribution/barcode?barcode=${encodeURIComponent(e)}`, {
      method: "POST",
    }),
  wf = ({ value: e, onChange: t, onClose: n }) => {
    const [r, l] = R.useState(e),
      [o, i] = R.useState(null),
      [s, a] = R.useState(null),
      [c, d] = R.useState(!1),
      [p, g] = R.useState(!0);
    y.useEffect(() => {
      const v = (k) => {
        k.key === "Escape" && n();
      };
      return (
        window.addEventListener("keydown", v),
        () => window.removeEventListener("keydown", v)
      );
    }, [n]);
    const w = (v) => {
        p
          ? (l(v), g(!1))
          : c
          ? (l(v), d(!1))
          : o && !s
          ? (a(r), l(v))
          : l(r === "0" ? v : r + v);
      },
      x = (v) => {
        s && S(), i(v), d(!1), g(!1);
      },
      S = () => {
        if (!s || !o) return;
        const v = parseFloat(s),
          k = parseFloat(r);
        let N = 0;
        switch (o) {
          case "+":
            N = v + k;
            break;
          case "-":
            N = v - k;
            break;
          case "×":
            N = v * k;
            break;
          case "÷":
            if (k === 0) {
              alert("不能除以零");
              return;
            }
            N = v / k;
            break;
        }
        l(Math.round(N).toString()), a(null), i(null), d(!0), g(!1);
      },
      C = () => {
        l("0"), a(null), i(null), d(!1), g(!0);
      },
      m = () => {
        let v = r;
        if (s && o) {
          const k = parseFloat(s),
            N = parseFloat(r);
          let T = 0;
          switch (o) {
            case "+":
              T = k + N;
              break;
            case "-":
              T = k - N;
              break;
            case "×":
              T = k * N;
              break;
            case "÷":
              if (N === 0) {
                alert("不能除以零");
                return;
              }
              T = k / N;
              break;
          }
          v = Math.round(T).toString();
        }
        t(v),
          setTimeout(() => {
            n();
          }, 0);
      },
      f = (v) => {
        v.preventDefault();
        const k = v.key;
        k >= "0" && k <= "9"
          ? w(k)
          : k === "+" || k === "-"
          ? x(k)
          : k === "*"
          ? x("×")
          : k === "/"
          ? x("÷")
          : k === "Enter"
          ? m()
          : k === "Escape"
          ? n()
          : k === "Backspace" && l(r.slice(0, -1) || "0");
      },
      h = u.jsx("div", {
        className:
          "fixed inset-0 flex items-center justify-center bg-black/25 backdrop-blur-sm",
        style: { zIndex: 999999 },
        onClick: n,
        children: u.jsxs("div", {
          className:
            "w-[90vw] max-w-md bg-white rounded-lg shadow-xl p-4 md:p-6",
          style: { zIndex: 1e6 },
          onClick: (v) => v.stopPropagation(),
          children: [
            u.jsxs("div", {
              className: "flex justify-between items-center mb-4",
              children: [
                u.jsx("div", {
                  className: "text-sm font-medium text-gray-700",
                }),
                u.jsx("button", {
                  onClick: n,
                  className:
                    "p-1.5 text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded-lg transition-colors duration-150",
                  children: u.jsx(ia, { size: 20 }),
                }),
              ],
            }),
            u.jsx("div", {
              className: "mb-6",
              children: u.jsx("input", {
                type: "text",
                value: r,
                readOnly: !0,
                onKeyDown: f,
                className:
                  "w-full px-3 py-2 text-xl font-medium tracking-wider border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-gray-900",
              }),
            }),
            u.jsxs("div", {
              className: "grid grid-cols-4 gap-2",
              children: [
                ["7", "8", "9", "÷"].map((v) =>
                  u.jsx(
                    "button",
                    {
                      onClick: (k) => {
                        k.stopPropagation(), v === "÷" ? x(v) : w(v);
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
                  u.jsx(
                    "button",
                    {
                      onClick: (k) => {
                        k.stopPropagation(), v === "×" ? x(v) : w(v);
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
                  u.jsx(
                    "button",
                    {
                      onClick: (k) => {
                        k.stopPropagation(), v === "-" ? x(v) : w(v);
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
                  u.jsx(
                    "button",
                    {
                      onClick: (k) => {
                        k.stopPropagation(),
                          v === "=" ? S() : v === "+" ? x(v) : w(v);
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
            u.jsxs("div", {
              className: "mt-4 flex justify-between gap-3",
              children: [
                u.jsx("button", {
                  onClick: (v) => {
                    v.stopPropagation(), C();
                  },
                  className:
                    "flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-all duration-150 shadow-sm active:scale-95 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50",
                  children: "清除",
                }),
                u.jsx("button", {
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
    return To.createPortal(h, document.body);
  },
  ay = {
    zh: {
      "app.title": "撥補建單",
      "app.search.placeholder": "搜尋藥品（藥名或藥碼）",
      "app.drug.name": "藥名",
      "app.drug.code": "藥碼",
      "app.drug.notSelected": "尚未選擇藥品",
      "app.store.source": "來源庫別",
      "app.store.source.placeholder": "請選擇來源庫別",
      "app.store.destination": "目的庫別",
      "app.store.destination.placeholder": "請選擇目的庫別",
      "app.quantity": "撥補數量",
      "app.quantity.placeholder": "點擊開啟計算機",
      "app.quantity.available": "可用庫存",
      "app.button.create": "建立撥補單",
      "app.button.processing": "處理中...",
      "app.button.scan": "掃碼建單",
      "app.orders.title": "歷史清單",
      "app.orders.empty": "無撥補單資料",
      "app.orders.loading": "載入中...",
      "app.toast.success": "撥補單建立成功",
      "app.filter.placeholder": "請輸入搜尋關鍵字",
      "app.filter.source": "來源",
      "app.filter.destination": "目的",
      "app.filter.code": "藥碼",
      "app.filter.name": "藥名",
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
      "table.lotNumber": "批號",
      "table.expiryDate": "效期",
      "modal.editOrder": "編輯撥補單",
      "time.type": "時間類型",
      "time.operation": "操作時間",
      "time.start": "開始日期時間",
      "time.end": "結束日期時間",
      "login.title": "撥補建單系統",
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
      "app.title": "Create Distribution Order",
      "app.search.placeholder": "Search drug (name or code)",
      "app.drug.name": "Drug Name",
      "app.drug.code": "Drug Code",
      "app.drug.notSelected": "No drug selected",
      "app.store.source": "Source Store",
      "app.store.source.placeholder": "Please select source store",
      "app.store.destination": "Destination Store",
      "app.store.destination.placeholder": "Please select destination store",
      "app.quantity": "Distribution Quantity",
      "app.quantity.placeholder": "Click to open calculator",
      "app.quantity.available": "Available Stock",
      "app.button.create": "Create Distribution Order",
      "app.button.processing": "Processing...",
      "app.button.scan": "Scan Barcode",
      "app.orders.title": "Historical Orders",
      "app.orders.empty": "No orders found",
      "app.orders.loading": "Loading...",
      "app.toast.success": "Distribution order created successfully",
      "app.filter.placeholder": "Enter search keyword",
      "app.filter.source": "Source",
      "app.filter.destination": "Destination",
      "app.filter.code": "Code",
      "app.filter.name": "Name",
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
      "table.lotNumber": "Lot Number",
      "table.expiryDate": "Expiry Date",
      "modal.editOrder": "Edit Distribution Order",
      "time.type": "Time Type",
      "time.operation": "Operation Time",
      "time.start": "Start Date Time",
      "time.end": "End Date Time",
      "login.title": "Distribution Order System",
      "login.username": "Username",
      "login.password": "Password",
      "login.button": "Login",
      "login.processing": "Logging in...",
      "button.logout": "Logout",
      "button.home": "Home",
      "footer.copyright": "Copyright ©2025 鴻森智能科技",
      "platform.title": "Smart Pharmacy Platform",
    },
  },
  Sf = y.createContext(void 0),
  uy = ({ children: e }) => {
    const [t, n] = y.useState("zh"),
      r = () => {
        n((o) => (o === "zh" ? "en" : "zh"));
      },
      l = (o) => ay[t][o] || o;
    return u.jsx(Sf.Provider, {
      value: { language: t, toggleLanguage: r, t: l },
      children: e,
    });
  },
  ut = () => {
    const e = y.useContext(Sf);
    if (e === void 0)
      throw new Error("useLanguage must be used within a LanguageProvider");
    return e;
  },
  cy = ({ startDate: e, endDate: t, onDateChange: n }) => {
    const { t: r } = ut(),
      l = (o, i, s, a) => {
        const c = new Date(`${o}T${i}`),
          d = new Date(`${s}T${a}`);
        n(c, d);
      };
    return u.jsxs("div", {
      className: "space-y-6 lg:space-y-0 lg:flex lg:items-start lg:gap-6",
      children: [
        u.jsxs("div", {
          className: "lg:w-[200px]",
          children: [
            u.jsx("label", {
              className: "block text-base font-medium text-gray-700 mb-2",
              children: r("time.type"),
            }),
            u.jsx("select", {
              defaultValue: "操作時間",
              className:
                "w-full border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-base",
              children: u.jsx("option", {
                value: "操作時間",
                children: r("time.operation"),
              }),
            }),
          ],
        }),
        u.jsxs("div", {
          className: "flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6",
          children: [
            u.jsxs("div", {
              className: "space-y-2",
              children: [
                u.jsx("label", {
                  className: "block text-base font-medium text-gray-700",
                  children: r("time.start"),
                }),
                u.jsxs("div", {
                  className: "flex flex-col sm:flex-row gap-3",
                  children: [
                    u.jsx("input", {
                      type: "date",
                      value: ae(e, "yyyy-MM-dd"),
                      onChange: (o) =>
                        l(
                          o.target.value,
                          ae(e, "HH:mm:ss"),
                          ae(t, "yyyy-MM-dd"),
                          ae(t, "HH:mm:ss")
                        ),
                      className:
                        "w-full sm:w-[180px] border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-base",
                    }),
                    u.jsx("input", {
                      type: "time",
                      value: ae(e, "HH:mm:ss"),
                      onChange: (o) =>
                        l(
                          ae(e, "yyyy-MM-dd"),
                          o.target.value,
                          ae(t, "yyyy-MM-dd"),
                          ae(t, "HH:mm:ss")
                        ),
                      className:
                        "w-full sm:w-[180px] border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-base",
                      step: "1",
                    }),
                  ],
                }),
              ],
            }),
            u.jsxs("div", {
              className: "space-y-2",
              children: [
                u.jsx("label", {
                  className: "block text-base font-medium text-gray-700",
                  children: r("time.end"),
                }),
                u.jsxs("div", {
                  className: "flex flex-col sm:flex-row gap-3",
                  children: [
                    u.jsx("input", {
                      type: "date",
                      value: ae(t, "yyyy-MM-dd"),
                      onChange: (o) =>
                        l(
                          ae(e, "yyyy-MM-dd"),
                          ae(e, "HH:mm:ss"),
                          o.target.value,
                          ae(t, "HH:mm:ss")
                        ),
                      className:
                        "w-full sm:w-[180px] border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-base",
                    }),
                    u.jsx("input", {
                      type: "time",
                      value: ae(t, "HH:mm:ss"),
                      onChange: (o) =>
                        l(
                          ae(e, "yyyy-MM-dd"),
                          ae(e, "HH:mm:ss"),
                          ae(t, "yyyy-MM-dd"),
                          o.target.value
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
  dy = ({
    orders: e,
    startDate: t,
    endDate: n,
    onDateChange: r,
    isLoading: l,
  }) => {
    const { t: o } = ut(),
      [i, s] = y.useState(null),
      [a, c] = y.useState(!1),
      [d, p] = y.useState(!1),
      [g, w] = y.useState(!1),
      [x, S] = y.useState(""),
      [C, m] = y.useState(null),
      [f, h] = y.useState(!1),
      [v, k] = y.useState("name"),
      [N, T] = y.useState(""),
      P = (E) =>
        !E || E === "0001-01-01T00:00:00"
          ? "-"
          : ae(new Date(E), "yyyy-MM-dd HH:mm:ss"),
      M = (E) => (!E || E.trim() === "" ? "-" : E),
      L = [
        { value: "name", label: o("app.filter.name") },
        { value: "code", label: o("app.filter.code") },
        { value: "source", label: o("app.filter.source") },
        { value: "destination", label: o("app.filter.destination") },
      ],
      B = e.filter((E) => {
        if (!N) return !0;
        const b = N.toLowerCase();
        switch (v) {
          case "name":
            return E.name.toLowerCase().includes(b);
          case "code":
            return E.code.toLowerCase().includes(b);
          case "source":
            return E.sourceStoreType.toLowerCase().includes(b);
          case "destination":
            return E.destinationStoreType.toLowerCase().includes(b);
          default:
            return !0;
        }
      }),
      X = async () => {
        if (i) {
          h(!0), m(null);
          try {
            const E = await Nt("/api/drugStotreDistribution/delete_by_guid", {
              method: "POST",
              body: { ValueAry: [i.GUID] },
            });
            if (E.Code === 200) p(!1), c(!1), r(t, n);
            else throw new Error(E.Result || "刪除失敗");
          } catch (E) {
            m(E instanceof Error ? E.message : "系統錯誤，請稍後再試");
          } finally {
            h(!1);
          }
        }
      },
      oe = async () => {
        if (i) {
          if (!x || isNaN(Number(x)) || Number(x) <= 0) {
            m("請輸入有效的數量");
            return;
          }
          h(!0), m(null);
          try {
            const E = await Nt(
              "/api/drugStotreDistribution/update_qty_by_guid",
              { method: "POST", body: { ValueAry: [i.GUID, x] } }
            );
            if (E.Code === 200) c(!1), r(t, n);
            else throw new Error(E.Result || "更新失敗");
          } catch (E) {
            m(E instanceof Error ? E.message : "系統錯誤，請稍後再試");
          } finally {
            h(!1);
          }
        }
      },
      je = (E) => {
        E.state === "等待過帳" && (s(E), S(E.issuedQuantity), m(null), c(!0));
      },
      ge = (E) => {
        E.preventDefault();
      },
      Ce = (E) => {
        const b = E.state === "等待過帳";
        return u.jsxs(
          "div",
          {
            onClick: () => je(E),
            className: `
          p-4 rounded-lg border mb-4 transition-colors duration-150
          ${
            b
              ? "bg-yellow-50 hover:bg-yellow-100 cursor-pointer border-yellow-200"
              : "bg-white border-gray-200"
          }
        `,
            children: [
              u.jsxs("div", {
                className: "flex justify-between items-start mb-3",
                children: [
                  u.jsxs("div", {
                    className: "space-y-1",
                    children: [
                      u.jsx("div", {
                        className: "font-medium text-gray-900",
                        children: E.name,
                      }),
                      u.jsx("div", {
                        className: "font-mono text-sm text-gray-600",
                        children: E.code,
                      }),
                    ],
                  }),
                  u.jsx("span", {
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
              u.jsxs("div", {
                className: "grid grid-cols-2 gap-x-4 gap-y-3",
                children: [
                  u.jsxs("div", {
                    children: [
                      u.jsx("div", {
                        className: "text-gray-500 mb-1",
                        children: o("table.source"),
                      }),
                      u.jsx("div", {
                        className: "font-medium",
                        children: E.sourceStoreType,
                      }),
                    ],
                  }),
                  u.jsxs("div", {
                    children: [
                      u.jsx("div", {
                        className: "text-gray-500 mb-1",
                        children: o("table.destination"),
                      }),
                      u.jsx("div", {
                        className: "font-medium",
                        children: E.destinationStoreType,
                      }),
                    ],
                  }),
                  u.jsxs("div", {
                    children: [
                      u.jsx("div", {
                        className: "text-gray-500 mb-1",
                        children: o("table.issuedQty"),
                      }),
                      u.jsx("div", {
                        className: "font-medium",
                        children: E.issuedQuantity,
                      }),
                    ],
                  }),
                  u.jsxs("div", {
                    children: [
                      u.jsx("div", {
                        className: "text-gray-500 mb-1",
                        children: o("table.actualQty"),
                      }),
                      u.jsx("div", {
                        className: "font-medium",
                        children: E.actualIssuedQuantity || "-",
                      }),
                    ],
                  }),
                  u.jsxs("div", {
                    children: [
                      u.jsx("div", {
                        className: "text-gray-500 mb-1",
                        children: o("table.operator"),
                      }),
                      u.jsx("div", {
                        className: "font-medium",
                        children: E.reportName || "-",
                      }),
                    ],
                  }),
                  u.jsxs("div", {
                    children: [
                      u.jsx("div", {
                        className: "text-gray-500 mb-1",
                        children: o("table.issuer"),
                      }),
                      u.jsx("div", {
                        className: "font-medium",
                        children: E.issuer || "-",
                      }),
                    ],
                  }),
                  u.jsxs("div", {
                    children: [
                      u.jsx("div", {
                        className: "text-gray-500 mb-1",
                        children: o("table.lotNumber"),
                      }),
                      u.jsx("div", {
                        className: "font-medium",
                        children: E.LOT || "-",
                      }),
                    ],
                  }),
                  u.jsxs("div", {
                    children: [
                      u.jsx("div", {
                        className: "text-gray-500 mb-1",
                        children: o("table.expiryDate"),
                      }),
                      u.jsx("div", {
                        className: "font-medium",
                        children: M(E.VAL),
                      }),
                    ],
                  }),
                  u.jsxs("div", {
                    children: [
                      u.jsx("div", {
                        className: "text-gray-500 mb-1",
                        children: o("table.createdTime"),
                      }),
                      u.jsx("div", {
                        className: "font-medium",
                        children: P(E.addedTime),
                      }),
                    ],
                  }),
                  u.jsxs("div", {
                    children: [
                      u.jsx("div", {
                        className: "text-gray-500 mb-1",
                        children: o("table.issuanceTime"),
                      }),
                      u.jsx("div", {
                        className: "font-medium",
                        children: P(E.issuanceTime),
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
    return u.jsxs("div", {
      children: [
        u.jsx("h2", {
          className: "text-xl font-bold text-gray-900 mb-6",
          children: o("app.orders.title"),
        }),
        u.jsx("div", {
          className: "mb-6",
          children: u.jsx(cy, { startDate: t, endDate: n, onDateChange: r }),
        }),
        u.jsx("div", {
          className: "mb-6",
          children: u.jsxs("form", {
            onSubmit: ge,
            className: "flex gap-3 max-w-2xl",
            children: [
              u.jsx("select", {
                value: v,
                onChange: (E) => k(E.target.value),
                className:
                  "w-32 px-3 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-colors text-base",
                children: L.map((E) =>
                  u.jsx(
                    "option",
                    { value: E.value, children: E.label },
                    E.value
                  )
                ),
              }),
              u.jsxs("div", {
                className: "relative w-64",
                children: [
                  u.jsx("input", {
                    type: "text",
                    value: N,
                    onChange: (E) => T(E.target.value),
                    placeholder: o("app.filter.placeholder"),
                    className:
                      "w-full pl-10 pr-3 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-colors text-base",
                  }),
                  u.jsx(Jd, {
                    className: "absolute left-3 top-2.5 text-gray-400",
                    size: 20,
                  }),
                ],
              }),
            ],
          }),
        }),
        C &&
          u.jsxs("div", {
            className:
              "mb-6 p-4 bg-red-100 text-red-700 rounded-md flex items-center gap-2",
            children: [
              u.jsx(oo, { size: 20 }),
              u.jsx("span", { className: "text-base", children: C }),
            ],
          }),
        l
          ? u.jsxs("div", {
              className: "text-center py-8",
              children: [
                u.jsx("div", {
                  className:
                    "animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto",
                }),
                u.jsx("p", {
                  className: "mt-2 text-base text-gray-600",
                  children: o("app.orders.loading"),
                }),
              ],
            })
          : B.length === 0
          ? u.jsx("div", {
              className: "text-center py-8 text-base text-gray-500",
              children: o("app.orders.empty"),
            })
          : u.jsxs(u.Fragment, {
              children: [
                u.jsx("div", {
                  className: "sm:hidden space-y-4",
                  children: B.map(Ce),
                }),
                u.jsx("div", {
                  className:
                    "hidden sm:block overflow-x-auto border border-gray-200 rounded-lg",
                  children: u.jsxs("table", {
                    className: "min-w-full",
                    children: [
                      u.jsx("thead", {
                        className: "bg-gray-50",
                        children: u.jsxs("tr", {
                          children: [
                            u.jsx("th", {
                              className:
                                "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                              children: o("table.source"),
                            }),
                            u.jsx("th", {
                              className:
                                "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                              children: o("table.destination"),
                            }),
                            u.jsx("th", {
                              className:
                                "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                              children: o("table.drugCode"),
                            }),
                            u.jsx("th", {
                              className:
                                "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                              children: o("table.drugName"),
                            }),
                            u.jsx("th", {
                              className:
                                "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                              children: o("table.issuedQty"),
                            }),
                            u.jsx("th", {
                              className:
                                "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                              children: o("table.actualQty"),
                            }),
                            u.jsx("th", {
                              className:
                                "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                              children: o("table.createdTime"),
                            }),
                            u.jsx("th", {
                              className:
                                "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                              children: o("table.operator"),
                            }),
                            u.jsx("th", {
                              className:
                                "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                              children: o("table.lotNumber"),
                            }),
                            u.jsx("th", {
                              className:
                                "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                              children: o("table.expiryDate"),
                            }),
                            u.jsx("th", {
                              className:
                                "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                              children: o("table.status"),
                            }),
                            u.jsx("th", {
                              className:
                                "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                              children: o("table.issuanceTime"),
                            }),
                            u.jsx("th", {
                              className:
                                "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                              children: o("table.issuer"),
                            }),
                          ],
                        }),
                      }),
                      u.jsx("tbody", {
                        className: "bg-white divide-y divide-gray-200",
                        children: B.map((E) => {
                          const b = E.state === "等待過帳";
                          return u.jsxs(
                            "tr",
                            {
                              onClick: () => je(E),
                              className: `
                        transition-colors duration-150
                        ${
                          b
                            ? "bg-yellow-50 hover:bg-yellow-100 cursor-pointer"
                            : "hover:bg-gray-50"
                        }
                      `,
                              children: [
                                u.jsx("td", {
                                  className:
                                    "px-6 py-3 whitespace-nowrap text-base text-gray-900",
                                  children: E.sourceStoreType,
                                }),
                                u.jsx("td", {
                                  className:
                                    "px-6 py-3 whitespace-nowrap text-base text-gray-900",
                                  children: E.destinationStoreType,
                                }),
                                u.jsx("td", {
                                  className:
                                    "px-6 py-3 whitespace-nowrap font-mono text-base text-gray-900",
                                  children: E.code,
                                }),
                                u.jsx("td", {
                                  className:
                                    "px-6 py-3 whitespace-nowrap text-base text-gray-900",
                                  children: E.name,
                                }),
                                u.jsx("td", {
                                  className:
                                    "px-6 py-3 whitespace-nowrap text-base font-medium text-gray-900",
                                  children: E.issuedQuantity,
                                }),
                                u.jsx("td", {
                                  className:
                                    "px-6 py-3 whitespace-nowrap text-base font-medium text-gray-900",
                                  children: E.actualIssuedQuantity || "-",
                                }),
                                u.jsx("td", {
                                  className:
                                    "px-6 py-3 whitespace-nowrap text-base text-gray-500",
                                  children: P(E.addedTime),
                                }),
                                u.jsx("td", {
                                  className:
                                    "px-6 py-3 whitespace-nowrap text-base text-gray-900",
                                  children: E.reportName || "-",
                                }),
                                u.jsx("td", {
                                  className:
                                    "px-6 py-3 whitespace-nowrap text-base text-gray-900",
                                  children: E.LOT || "-",
                                }),
                                u.jsx("td", {
                                  className:
                                    "px-6 py-3 whitespace-nowrap text-base text-gray-900",
                                  children: M(E.VAL),
                                }),
                                u.jsx("td", {
                                  className: "px-6 py-3 whitespace-nowrap",
                                  children: u.jsx("span", {
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
                                u.jsx("td", {
                                  className:
                                    "px-6 py-3 whitespace-nowrap text-base text-gray-500",
                                  children: P(E.issuanceTime),
                                }),
                                u.jsx("td", {
                                  className:
                                    "px-6 py-3 whitespace-nowrap text-base text-gray-900",
                                  children: E.issuer || "-",
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
        u.jsx(wt, {
          appear: !0,
          show: a,
          as: y.Fragment,
          children: u.jsxs(xt, {
            as: "div",
            className: "relative z-50",
            onClose: () => !f && c(!1),
            children: [
              u.jsx(wt.Child, {
                as: y.Fragment,
                enter: "ease-out duration-300",
                enterFrom: "opacity-0",
                enterTo: "opacity-100",
                leave: "ease-in duration-200",
                leaveFrom: "opacity-100",
                leaveTo: "opacity-0",
                children: u.jsx("div", {
                  className: "fixed inset-0 bg-black bg-opacity-25",
                }),
              }),
              u.jsx("div", {
                className: "fixed inset-0 overflow-y-auto",
                children: u.jsx("div", {
                  className:
                    "flex min-h-full items-center justify-center p-4 text-center",
                  children: u.jsx(wt.Child, {
                    as: y.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0 scale-95",
                    enterTo: "opacity-100 scale-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100 scale-100",
                    leaveTo: "opacity-0 scale-95",
                    children: u.jsxs(xt.Panel, {
                      className:
                        "w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all",
                      children: [
                        u.jsx(xt.Title, {
                          as: "h3",
                          className: "text-xl font-bold text-gray-900 mb-6",
                          children: o("modal.editOrder"),
                        }),
                        i &&
                          u.jsxs("div", {
                            className: "space-y-6",
                            children: [
                              u.jsxs("div", {
                                className: "grid grid-cols-2 gap-x-4 gap-y-4",
                                children: [
                                  u.jsxs("div", {
                                    children: [
                                      u.jsx("label", {
                                        className:
                                          "block text-base font-medium text-gray-700 mb-1",
                                        children: o("table.source"),
                                      }),
                                      u.jsx("div", {
                                        className: "text-base text-gray-900",
                                        children: i.sourceStoreType,
                                      }),
                                    ],
                                  }),
                                  u.jsxs("div", {
                                    children: [
                                      u.jsx("label", {
                                        className:
                                          "block text-base font-medium text-gray-700 mb-1",
                                        children: o("table.destination"),
                                      }),
                                      u.jsx("div", {
                                        className: "text-base text-gray-900",
                                        children: i.destinationStoreType,
                                      }),
                                    ],
                                  }),
                                  u.jsxs("div", {
                                    children: [
                                      u.jsx("label", {
                                        className:
                                          "block text-base font-medium text-gray-700 mb-1",
                                        children: o("table.issuedQty"),
                                      }),
                                      u.jsx("div", {
                                        className: "flex gap-2 items-center",
                                        children: u.jsx("input", {
                                          type: "text",
                                          value: x,
                                          onClick: () => w(!0),
                                          readOnly: !0,
                                          className:
                                            "w-32 p-2 border rounded text-base cursor-pointer",
                                          placeholder: o(
                                            "app.quantity.placeholder"
                                          ),
                                        }),
                                      }),
                                    ],
                                  }),
                                  u.jsxs("div", {
                                    children: [
                                      u.jsx("label", {
                                        className:
                                          "block text-base font-medium text-gray-700 mb-1",
                                        children: o("table.actualQty"),
                                      }),
                                      u.jsx("div", {
                                        className: "text-base text-gray-900",
                                        children: i.actualIssuedQuantity || "-",
                                      }),
                                    ],
                                  }),
                                  u.jsxs("div", {
                                    children: [
                                      u.jsx("label", {
                                        className:
                                          "block text-base font-medium text-gray-700 mb-1",
                                        children: o("table.operator"),
                                      }),
                                      u.jsx("div", {
                                        className: "text-base text-gray-900",
                                        children: i.reportName || "-",
                                      }),
                                    ],
                                  }),
                                  u.jsxs("div", {
                                    children: [
                                      u.jsx("label", {
                                        className:
                                          "block text-base font-medium text-gray-700 mb-1",
                                        children: o("table.issuer"),
                                      }),
                                      u.jsx("div", {
                                        className: "text-base text-gray-900",
                                        children: i.issuer || "-",
                                      }),
                                    ],
                                  }),
                                  u.jsxs("div", {
                                    children: [
                                      u.jsx("label", {
                                        className:
                                          "block text-base font-medium text-gray-700 mb-1",
                                        children: o("table.lotNumber"),
                                      }),
                                      u.jsx("div", {
                                        className: "text-base text-gray-900",
                                        children: i.LOT || "-",
                                      }),
                                    ],
                                  }),
                                  u.jsxs("div", {
                                    children: [
                                      u.jsx("label", {
                                        className:
                                          "block text-base font-medium text-gray-700 mb-1",
                                        children: o("table.expiryDate"),
                                      }),
                                      u.jsx("div", {
                                        className: "text-base text-gray-900",
                                        children: M(i.VAL),
                                      }),
                                    ],
                                  }),
                                  u.jsxs("div", {
                                    children: [
                                      u.jsx("label", {
                                        className:
                                          "block text-base font-medium text-gray-700 mb-1",
                                        children: o("table.createdTime"),
                                      }),
                                      u.jsx("div", {
                                        className: "text-base text-gray-900",
                                        children: P(i.addedTime),
                                      }),
                                    ],
                                  }),
                                  u.jsxs("div", {
                                    children: [
                                      u.jsx("label", {
                                        className:
                                          "block text-base font-medium text-gray-700 mb-1",
                                        children: o("table.issuanceTime"),
                                      }),
                                      u.jsx("div", {
                                        className: "text-base text-gray-900",
                                        children: P(i.issuanceTime),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              C &&
                                u.jsxs("div", {
                                  className:
                                    "p-4 bg-red-100 text-red-700 rounded-md flex items-center gap-2",
                                  children: [
                                    u.jsx(oo, { size: 20 }),
                                    u.jsx("span", {
                                      className: "text-base",
                                      children: C,
                                    }),
                                  ],
                                }),
                              u.jsxs("div", {
                                className: "mt-6 flex justify-between gap-4",
                                children: [
                                  u.jsxs("button", {
                                    type: "button",
                                    onClick: () => p(!0),
                                    disabled: f,
                                    className:
                                      "inline-flex justify-center items-center gap-2 rounded-md border border-transparent bg-red-100 px-4 py-2 text-base font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
                                    children: [u.jsx(a0, { size: 16 }), "刪除"],
                                  }),
                                  u.jsxs("div", {
                                    className: "flex gap-2",
                                    children: [
                                      u.jsx("button", {
                                        type: "button",
                                        onClick: () => !f && c(!1),
                                        disabled: f,
                                        className:
                                          "inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
                                        children: "取消",
                                      }),
                                      u.jsx("button", {
                                        type: "button",
                                        onClick: oe,
                                        disabled: f,
                                        className:
                                          "inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-base font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
                                        children: f ? "處理中..." : "儲存",
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
        u.jsx(wt, {
          appear: !0,
          show: d,
          as: y.Fragment,
          children: u.jsxs(xt, {
            as: "div",
            className: "relative z-[60]",
            onClose: () => !f && p(!1),
            children: [
              u.jsx(wt.Child, {
                as: y.Fragment,
                enter: "ease-out duration-300",
                enterFrom: "opacity-0",
                enterTo: "opacity-100",
                leave: "ease-in duration-200",
                leaveFrom: "opacity-100",
                leaveTo: "opacity-0",
                children: u.jsx("div", {
                  className: "fixed inset-0 bg-black bg-opacity-25",
                }),
              }),
              u.jsx("div", {
                className: "fixed inset-0 overflow-y-auto",
                children: u.jsx("div", {
                  className:
                    "flex min-h-full items-center justify-center p-4 text-center",
                  children: u.jsx(wt.Child, {
                    as: y.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0 scale-95",
                    enterTo: "opacity-100 scale-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100 scale-100",
                    leaveTo: "opacity-0 scale-95",
                    children: u.jsxs(xt.Panel, {
                      className:
                        "w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all",
                      children: [
                        u.jsx(xt.Title, {
                          as: "h3",
                          className: "text-xl font-bold text-gray-900 mb-6",
                          children: "確認刪除撥補單",
                        }),
                        u.jsx("div", {
                          className: "mt-2",
                          children: u.jsx("p", {
                            className: "text-base text-gray-500",
                            children: "確定要刪除此筆撥補資料嗎？",
                          }),
                        }),
                        u.jsxs("div", {
                          className: "mt-6 flex justify-end gap-3",
                          children: [
                            u.jsx("button", {
                              type: "button",
                              onClick: () => !f && p(!1),
                              disabled: f,
                              className:
                                "inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
                              children: "取消",
                            }),
                            u.jsx("button", {
                              type: "button",
                              onClick: X,
                              disabled: f,
                              className:
                                "inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
                              children: f ? "處理中..." : "確認刪除",
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
        g && u.jsx(wf, { value: x, onChange: S, onClose: () => w(!1) }),
      ],
    });
  },
  kf = (e) => {
    const t = e.find((n) => n.name === "撥補建單");
    return (t == null ? void 0 : t.state) === !0;
  },
  fy = (e) =>
    kf(e.Permissions)
      ? (sessionStorage.setItem("user_session", JSON.stringify(e)), !0)
      : !1,
  fa = () => {
    const e = sessionStorage.getItem("user_session");
    if (!e) return null;
    try {
      const t = JSON.parse(e);
      return !t.GUID || !t.ID || !t.Name || !kf(t.Permissions)
        ? (co(), null)
        : t;
    } catch {
      return co(), null;
    }
  },
  co = () => {
    sessionStorage.removeItem("user_session");
  },
  py = () => {
    const e = fa();
    if (!e) return !1;
    const t = new Date(e.loginTime).getTime();
    return (new Date().getTime() - t) / (1e3 * 60 * 60) > 24 ? (co(), !1) : !0;
  },
  my = () => {
    const e = fa();
    return (e == null ? void 0 : e.Name) || "";
  },
  hy = ({
    onLogin: e,
    className: t = "",
    title: n = "撥補建單系統",
    logo: r,
  }) => {
    const [l, o] = y.useState(""),
      [i, s] = y.useState(""),
      [a, c] = y.useState(null),
      [d, p] = y.useState(!1),
      g = async (w) => {
        w.preventDefault(), c(null), p(!0);
        try {
          const x = await Nt("/api/session/login", {
            method: "POST",
            body: { Data: { ID: l, Password: i } },
          });
          if (x.Code === 200) {
            if (!fy(x.Data)) {
              c("無撥補建單權限，無法登入");
              return;
            }
            e();
          } else c(x.Result || "登入失敗，請檢查帳號密碼是否正確");
        } catch (x) {
          console.error("Login error:", x),
            c(x instanceof Error ? x.message : "系統錯誤，請稍後再試");
        } finally {
          p(!1);
        }
      };
    return u.jsx("div", {
      className: `min-h-screen bg-gray-100 flex items-center justify-center p-4 ${t}`,
      children: u.jsxs("div", {
        className: "bg-white rounded-lg shadow-md p-8 w-full max-w-md",
        children: [
          r &&
            u.jsx("div", {
              className: "mb-6 flex justify-center",
              children: r,
            }),
          u.jsx("h1", {
            className: "text-2xl font-bold text-center mb-8",
            children: n,
          }),
          a &&
            u.jsxs("div", {
              className:
                "mb-6 p-4 bg-red-100 text-red-700 rounded-md flex items-center gap-2",
              children: [
                u.jsx(oo, { size: 20 }),
                u.jsx("span", { children: a }),
              ],
            }),
          u.jsxs("form", {
            onSubmit: g,
            className: "space-y-6",
            children: [
              u.jsxs("div", {
                children: [
                  u.jsx("label", {
                    htmlFor: "id",
                    className: "block text-sm font-medium text-gray-700 mb-1",
                    children: "帳號",
                  }),
                  u.jsx("input", {
                    type: "text",
                    id: "id",
                    value: l,
                    onChange: (w) => o(w.target.value),
                    className:
                      "w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                    required: !0,
                  }),
                ],
              }),
              u.jsxs("div", {
                children: [
                  u.jsx("label", {
                    htmlFor: "password",
                    className: "block text-sm font-medium text-gray-700 mb-1",
                    children: "密碼",
                  }),
                  u.jsx("input", {
                    type: "password",
                    id: "password",
                    value: i,
                    onChange: (w) => s(w.target.value),
                    className:
                      "w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                    required: !0,
                  }),
                ],
              }),
              u.jsx("button", {
                type: "submit",
                disabled: d,
                className: `w-full py-2 px-4 rounded font-medium transition-colors duration-200 ${
                  d
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600 text-white"
                }`,
                children: d ? "登入中..." : "登入",
              }),
            ],
          }),
        ],
      }),
    });
  },
  gy = () => {
    const { language: e, toggleLanguage: t } = ut();
    return u.jsxs("button", {
      onClick: t,
      className:
        "inline-flex items-center px-2 sm:px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200",
      title: e === "zh" ? "繁體中文" : "English",
      children: [
        u.jsx(o0, { className: "h-4 w-4" }),
        u.jsx("span", {
          className: "ml-2 hidden sm:inline",
          children: e === "zh" ? "繁體中文" : "English",
        }),
      ],
    });
  },
  yy = ({ title: e }) =>
    u.jsx("h1", {
      className: "text-2xl md:text-3xl font-semibold text-gray-800",
      children: e,
    }),
  vy = () => {
    const e = fa();
    return e
      ? u.jsxs("p", {
          className: "text-sm text-gray-600",
          children: [e.Name, " - ", e.Employer],
        })
      : null;
  },
  xy = ({ onLogout: e }) => {
    const { t } = ut();
    return u.jsxs("button", {
      onClick: e,
      className:
        "inline-flex items-center px-2 sm:px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200",
      title: t("button.logout"),
      children: [
        u.jsx(s0, { className: "h-4 w-4" }),
        u.jsx("span", {
          className: "ml-2 hidden sm:inline",
          children: t("button.logout"),
        }),
      ],
    });
  },
  wy = () => {
    const { t: e } = ut(),
      t = () => {
        const n = iy();
        n != null &&
          n.homepage &&
          (window.location.href = `${n.homepage}/phar_system/frontpage/`);
      };
    return u.jsxs("button", {
      onClick: t,
      className:
        "p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors group relative",
      title: e("platform.title"),
      children: [
        u.jsx(i0, { size: 24 }),
        u.jsx("span", {
          className:
            "absolute left-1/2 -translate-x-1/2 -bottom-8 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap",
          children: e("platform.title"),
        }),
      ],
    });
  },
  Sy = ({ onLogout: e }) => {
    const { t } = ut();
    return u.jsx("header", {
      className: "bg-white",
      children: u.jsx("div", {
        className: "w-full px-4",
        children: u.jsxs("div", {
          className: "flex justify-between items-center py-6",
          children: [
            u.jsxs("div", {
              className: "flex items-center gap-4",
              children: [
                u.jsx(wy, {}),
                u.jsxs("div", {
                  className: "flex flex-col",
                  children: [
                    u.jsx(yy, { title: t("app.title") }),
                    u.jsx(vy, {}),
                  ],
                }),
              ],
            }),
            u.jsxs("div", {
              className: "flex items-center gap-4",
              children: [u.jsx(gy, {}), u.jsx(xy, { onLogout: e })],
            }),
          ],
        }),
      }),
    });
  },
  Nf = ({ message: e, onClose: t, duration: n = 3e3, type: r = "success" }) => {
    const { t: l } = ut(),
      [o, i] = y.useState(!1);
    y.useEffect(() => {
      const S = setTimeout(() => {
        i(!0),
          setTimeout(() => {
            t();
          }, 300);
      }, n);
      return () => clearTimeout(S);
    }, [n, t]);
    const s = () => {
        i(!0),
          setTimeout(() => {
            t();
          }, 300);
      },
      a = r === "success",
      c = a ? "bg-green-50" : "bg-red-50",
      d = a ? "text-green-800" : "text-red-800",
      p = a ? "border-green-200" : "border-red-200",
      g = a ? "text-green-500" : "text-red-500",
      w = a
        ? "text-green-600 hover:text-green-800"
        : "text-red-600 hover:text-red-800",
      x = u.jsxs("div", {
        className: `fixed top-4 right-4 min-w-[200px] max-w-[400px] flex items-center gap-2 ${c} ${d} px-4 py-3 rounded-lg shadow-xl border ${p} ${
          o ? "animate-slide-out" : "animate-slide-in"
        }`,
        style: { zIndex: 1e6 },
        children: [
          a
            ? u.jsx(l0, { size: 20, className: g })
            : u.jsx(oo, { size: 20, className: g }),
          u.jsx("span", {
            className: "text-sm font-medium",
            children: r === "success" ? l(e) : e,
          }),
          u.jsx("button", {
            onClick: s,
            className: `ml-2 ${w} transition-colors duration-150`,
            children: u.jsx(ia, { size: 16 }),
          }),
        ],
      });
    return To.createPortal(x, document.body);
  },
  ky = ({
    isOpen: e,
    title: t,
    message: n,
    confirmText: r,
    cancelText: l,
    onConfirm: o,
    onCancel: i,
    isProcessing: s = !1,
  }) =>
    u.jsx(wt, {
      appear: !0,
      show: e,
      as: y.Fragment,
      children: u.jsxs(xt, {
        as: "div",
        className: "relative z-[60]",
        onClose: () => !s && i(),
        children: [
          u.jsx(wt.Child, {
            as: y.Fragment,
            enter: "ease-out duration-300",
            enterFrom: "opacity-0",
            enterTo: "opacity-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100",
            leaveTo: "opacity-0",
            children: u.jsx("div", {
              className: "fixed inset-0 bg-black bg-opacity-25",
            }),
          }),
          u.jsx("div", {
            className: "fixed inset-0 overflow-y-auto",
            children: u.jsx("div", {
              className:
                "flex min-h-full items-center justify-center p-4 text-center",
              children: u.jsx(wt.Child, {
                as: y.Fragment,
                enter: "ease-out duration-300",
                enterFrom: "opacity-0 scale-95",
                enterTo: "opacity-100 scale-100",
                leave: "ease-in duration-200",
                leaveFrom: "opacity-100 scale-100",
                leaveTo: "opacity-0 scale-95",
                children: u.jsxs(xt.Panel, {
                  className:
                    "w-[90vw] max-w-md transform overflow-hidden rounded-lg bg-white p-4 md:p-6 text-left align-middle shadow-xl transition-all",
                  children: [
                    u.jsx(xt.Title, {
                      as: "h3",
                      className: "text-xl font-medium text-gray-900",
                      children: t,
                    }),
                    u.jsx("div", {
                      className: "mt-4",
                      children: u.jsx("p", {
                        className: "text-sm text-gray-600",
                        children: n,
                      }),
                    }),
                    u.jsxs("div", {
                      className: "mt-6 flex justify-end gap-3",
                      children: [
                        u.jsx("button", {
                          type: "button",
                          onClick: () => !s && i(),
                          disabled: s,
                          className:
                            "inline-flex justify-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                          children: l,
                        }),
                        u.jsx("button", {
                          type: "button",
                          onClick: o,
                          disabled: s,
                          className:
                            "inline-flex justify-center rounded-lg border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                          children: s ? "處理中..." : r,
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
  Ny = ({ isOpen: e, onClose: t, onScan: n, isScanning: r }) => {
    const { t: l, language: o } = ut(),
      [i, s] = y.useState(""),
      a = y.useRef(null);
    y.useEffect(() => {
      e && a.current && a.current.focus();
    }, [e]),
      y.useEffect(() => {
        !r && e && a.current && a.current.focus();
      }, [r, e]);
    const c = (p) => {
        p.preventDefault(), i.trim() && !r && (n(i.trim()), s(""));
      },
      d = () => {
        s(""), t();
      };
    return e
      ? u.jsx("div", {
          className:
            "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",
          children: u.jsxs("div", {
            className: "bg-white rounded-lg shadow-xl max-w-md w-full",
            children: [
              u.jsxs("div", {
                className:
                  "flex items-center justify-between p-6 border-b border-gray-200",
                children: [
                  u.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [
                      u.jsx(Xd, { className: "text-blue-600", size: 24 }),
                      u.jsx("h2", {
                        className: "text-xl font-semibold text-gray-800",
                        children: o === "zh" ? "掃碼建單" : "Scan Barcode",
                      }),
                    ],
                  }),
                  u.jsx("button", {
                    onClick: d,
                    disabled: r,
                    className:
                      "text-gray-400 hover:text-gray-600 transition-colors disabled:opacity-50",
                    children: u.jsx(ia, { size: 24 }),
                  }),
                ],
              }),
              u.jsxs("form", {
                onSubmit: c,
                className: "p-6 space-y-4",
                children: [
                  u.jsxs("div", {
                    children: [
                      u.jsx("label", {
                        className:
                          "block text-sm font-medium text-gray-700 mb-2",
                        children:
                          o === "zh"
                            ? "請掃描條碼或手動輸入"
                            : "Scan barcode or enter manually",
                      }),
                      u.jsx("input", {
                        ref: a,
                        type: "text",
                        value: i,
                        onChange: (p) => s(p.target.value),
                        disabled: r,
                        className:
                          "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed text-lg",
                        placeholder:
                          o === "zh" ? "條碼內容" : "Barcode content",
                        autoComplete: "off",
                      }),
                    ],
                  }),
                  r &&
                    u.jsxs("div", {
                      className:
                        "flex items-center justify-center gap-2 text-blue-600",
                      children: [
                        u.jsx("div", {
                          className:
                            "animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600",
                        }),
                        u.jsx("span", {
                          className: "text-sm font-medium",
                          children: o === "zh" ? "處理中..." : "Processing...",
                        }),
                      ],
                    }),
                  u.jsxs("div", {
                    className: "flex gap-3 pt-2",
                    children: [
                      u.jsx("button", {
                        type: "button",
                        onClick: d,
                        disabled: r,
                        className:
                          "flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium",
                        children: o === "zh" ? "取消" : "Cancel",
                      }),
                      u.jsx("button", {
                        type: "submit",
                        disabled: !i.trim() || r,
                        className:
                          "flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed font-medium",
                        children: o === "zh" ? "確認" : "Confirm",
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
  Ey = ({
    drugs: e,
    warehouses: t,
    onSubmit: n,
    isSubmitting: r,
    resetTrigger: l = 0,
  }) => {
    const { t: o } = ut(),
      [i, s] = y.useState(""),
      [a, c] = y.useState([]),
      [d, p] = y.useState(null),
      [g, w] = y.useState(""),
      [x, S] = y.useState(""),
      [C, m] = y.useState(""),
      [f, h] = y.useState(!1),
      [v, k] = y.useState(!1),
      [N, T] = y.useState(!1),
      [P, M] = y.useState(null),
      [L, B] = y.useState(null),
      [X, oe] = y.useState(null),
      [je, ge] = y.useState(!1),
      [Ce, E] = y.useState(!1);
    y.useEffect(() => {
      l > 0 && (s(""), c([]), p(null), m(""), B(null), oe(null), M(null));
    }, [l]);
    const b = (_) => {
        const z = _.target.value;
        if ((s(z), !z.trim())) {
          c([]);
          return;
        }
        const A = z.toLowerCase(),
          xe = e
            .filter((Y) => {
              var Be;
              return (
                Y.NAME.toLowerCase().includes(A) ||
                Y.CODE.toLowerCase().includes(A) ||
                Y.CHT_NAME.toLowerCase().includes(A) ||
                ((Be = Y.SKDIACODE) == null
                  ? void 0
                  : Be.toLowerCase().includes(A))
              );
            })
            .slice(0, 10);
        c(xe);
      },
      $ = (_) => {
        p(_), s(""), c([]), B(null), oe(null);
      },
      F = async (_, z, A) => {
        var xe;
        A ? ge(!0) : E(!0);
        try {
          const Be =
            ((xe = (
              await Nt("/api/stock/get_stock_by_code", {
                method: "POST",
                body: {
                  ServerName: z.name === "DS01" ? "藥庫" : z.name,
                  ServerType: z.type,
                  ValueAry: [_],
                },
              })
            ).Data) == null
              ? void 0
              : xe[0]) || null;
          A ? B(Be) : oe(Be);
        } catch (Y) {
          console.error("Error fetching new stock data:", Y),
            A ? B(null) : oe(null);
        } finally {
          A ? ge(!1) : E(!1);
        }
      };
    y.useEffect(() => {
      if (d && g) {
        const _ = t.find((z) => z.displayName === g);
        _ && F(d.CODE, _, !0);
      } else B(null);
    }, [d, g]),
      y.useEffect(() => {
        if (d && x) {
          const _ = t.find((z) => z.displayName === x);
          _ && F(d.CODE, _, !1);
        } else oe(null);
      }, [d, x]);
    const W = (_) => {
        const z = _.target.value;
        w(z), z === x && z !== "" && M("來源庫別與目的庫別不能相同");
      },
      O = (_) => {
        const z = _.target.value;
        S(z), z === g && z !== "" && M("來源庫別與目的庫別不能相同");
      },
      re = (_) => {
        const z = _.target.value;
        (z === "" || /^\d+$/.test(z)) && m(z);
      },
      U = async (_) => {
        T(!0);
        try {
          const z = await sy(_);
          if (z.Code === 200 && z.Data) {
            const A = z.Data.code,
              xe = z.Data.issuedQuantity,
              Y = e.find((Be) => Be.CODE.toLowerCase() === A.toLowerCase());
            Y
              ? (p(Y), s(Y.NAME || Y.CHT_NAME || Y.CODE), m(xe), k(!1))
              : M(`找不到藥碼: ${A}`);
          } else M(z.Result || "條碼讀取失敗");
        } catch (z) {
          console.error("Barcode scan error:", z), M("條碼掃描失敗，請重試");
        } finally {
          T(!1);
        }
      },
      ct = async (_) => {
        if ((_ && _.preventDefault(), !d)) {
          M("請選擇藥品");
          return;
        }
        if (!g) {
          M("請選擇來源庫別");
          return;
        }
        if (!x) {
          M("請選擇目的庫別");
          return;
        }
        if (!C) {
          M("請輸入撥補數量");
          return;
        }
        if (g === x) {
          M("來源庫別與目的庫別不能相同");
          return;
        }
        await n({
          drug: d,
          sourceWarehouse: g,
          destinationWarehouse: x,
          quantity: C,
          sourceStockInfo: L,
          destinationStockInfo: X,
        });
      },
      ye = (_) => {
        _.key === "Enter" && i && a.length > 0 && $(a[0]);
      },
      ve = (_) => (!_ || _ === "2050/01/01" ? "無期限" : _),
      gt = () =>
        L && L.qty.length > 0
          ? L.qty.reduce((_, z) => _ + parseInt(z || "0"), 0).toString()
          : null;
    return u.jsxs(u.Fragment, {
      children: [
        P &&
          u.jsx(Nf, {
            message: P,
            onClose: () => M(null),
            duration: 3e3,
            type: "error",
          }),
        u.jsx(Ny, {
          isOpen: v,
          onClose: () => k(!1),
          onScan: U,
          isScanning: N,
        }),
        u.jsxs("form", {
          onSubmit: ct,
          className:
            "bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6 space-y-6",
          children: [
            u.jsxs("div", {
              children: [
                u.jsxs("div", {
                  className: "flex gap-2",
                  children: [
                    u.jsxs("div", {
                      className: "relative flex-1",
                      children: [
                        u.jsx("input", {
                          type: "text",
                          value: i,
                          onChange: b,
                          onKeyPress: ye,
                          placeholder: o("app.search.placeholder"),
                          className:
                            "w-full px-3 py-2 pl-8 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-colors text-base text-gray-900",
                        }),
                        u.jsx(Jd, {
                          size: 18,
                          className: "absolute left-2 top-2.5 text-gray-400",
                        }),
                      ],
                    }),
                    u.jsxs("button", {
                      type: "button",
                      onClick: () => k(!0),
                      className:
                        "flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium whitespace-nowrap",
                      children: [
                        u.jsx(Xd, { size: 18 }),
                        u.jsx("span", {
                          className: "hidden sm:inline",
                          children: o("app.button.scan"),
                        }),
                      ],
                    }),
                  ],
                }),
                a.length > 0 &&
                  u.jsx("div", {
                    className:
                      "mt-2 max-h-60 overflow-y-auto border rounded-lg shadow-sm",
                    children: a.map((_) =>
                      u.jsxs(
                        "div",
                        {
                          onClick: () => $(_),
                          className:
                            "p-4 hover:bg-gray-50 cursor-pointer border-b transition-colors duration-150",
                          children: [
                            u.jsx("div", {
                              className: "text-base font-medium text-gray-900",
                              children: _.NAME,
                            }),
                            u.jsxs("div", {
                              className: "text-base text-gray-600",
                              children: ["藥碼: ", _.CODE],
                            }),
                            _.SKDIACODE &&
                              u.jsxs("div", {
                                className: "text-base text-gray-600",
                                children: ["料號: ", _.SKDIACODE],
                              }),
                            _.CHT_NAME &&
                              u.jsx("div", {
                                className: "text-base text-gray-600",
                                children: _.CHT_NAME,
                              }),
                          ],
                        },
                        _.GUID
                      )
                    ),
                  }),
              ],
            }),
            u.jsxs("div", {
              className: "grid grid-cols-1 sm:grid-cols-2 gap-6",
              children: [
                u.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    u.jsx("label", {
                      className: "block text-base font-medium text-gray-700",
                      children: o("app.drug.name"),
                    }),
                    u.jsx("div", {
                      className: "bg-gray-50 rounded-lg border border-gray-200",
                      children: d
                        ? u.jsxs("div", {
                            className: "p-4",
                            children: [
                              u.jsx("div", {
                                className:
                                  "text-base font-medium text-gray-900",
                                children: d.NAME,
                              }),
                              d.SKDIACODE &&
                                u.jsxs("div", {
                                  className: "text-base text-gray-600 mt-1",
                                  children: ["料號: ", d.SKDIACODE],
                                }),
                              d.CHT_NAME &&
                                u.jsx("div", {
                                  className: "text-base text-gray-600 mt-1",
                                  children: d.CHT_NAME,
                                }),
                            ],
                          })
                        : u.jsx("div", {
                            className: "p-4",
                            children: u.jsx("div", {
                              className: "text-base text-gray-600",
                              children: o("app.drug.notSelected"),
                            }),
                          }),
                    }),
                  ],
                }),
                u.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    u.jsx("label", {
                      className: "block text-base font-medium text-gray-700",
                      children: o("app.drug.code"),
                    }),
                    u.jsx("div", {
                      className: "bg-gray-50 rounded-lg border border-gray-200",
                      children: d
                        ? u.jsx("div", {
                            className: "p-4",
                            children: u.jsx("div", {
                              className: "text-base font-medium text-gray-900",
                              children: d.CODE,
                            }),
                          })
                        : u.jsx("div", {
                            className: "p-4",
                            children: u.jsx("div", {
                              className: "text-base text-gray-600",
                              children: o("app.drug.notSelected"),
                            }),
                          }),
                    }),
                  ],
                }),
              ],
            }),
            u.jsxs("div", {
              className: "grid grid-cols-1 sm:grid-cols-2 gap-6",
              children: [
                u.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    u.jsx("label", {
                      className: "block text-base font-medium text-gray-700",
                      children: o("app.store.source"),
                    }),
                    u.jsxs("select", {
                      value: g,
                      onChange: W,
                      className:
                        "w-full px-3 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-colors text-base text-gray-900",
                      children: [
                        u.jsx("option", {
                          value: "",
                          children: o("app.store.source.placeholder"),
                        }),
                        t.map((_) =>
                          u.jsx(
                            "option",
                            { value: _.displayName, children: _.displayName },
                            _.GUID
                          )
                        ),
                      ],
                    }),
                  ],
                }),
                u.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    u.jsx("label", {
                      className: "block text-base font-medium text-gray-700",
                      children: o("app.store.destination"),
                    }),
                    u.jsxs("select", {
                      value: x,
                      onChange: O,
                      className:
                        "w-full px-3 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-colors text-base text-gray-900",
                      children: [
                        u.jsx("option", {
                          value: "",
                          children: o("app.store.destination.placeholder"),
                        }),
                        t.map((_) =>
                          u.jsx(
                            "option",
                            { value: _.displayName, children: _.displayName },
                            _.GUID
                          )
                        ),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            d &&
              g &&
              u.jsxs("div", {
                className: "space-y-4",
                children: [
                  u.jsx("label", {
                    className: "block text-base font-medium text-gray-700",
                    children: "來源庫別庫存明細",
                  }),
                  u.jsx("div", {
                    className:
                      "bg-gray-50 rounded-lg border border-gray-200 p-4",
                    children: je
                      ? u.jsxs("div", {
                          className: "flex items-center justify-center py-4",
                          children: [
                            u.jsx("div", {
                              className:
                                "animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600",
                            }),
                            u.jsx("span", {
                              className: "ml-2 text-base text-gray-600",
                              children: "載入庫存資訊中...",
                            }),
                          ],
                        })
                      : L
                      ? u.jsxs("div", {
                          className: "space-y-3",
                          children: [
                            u.jsxs("div", {
                              className:
                                "flex items-center gap-2 text-base font-medium text-gray-900 mb-3",
                              children: [
                                u.jsx(vl, {
                                  size: 18,
                                  className: "text-blue-600",
                                }),
                                "總庫存: ",
                                L.qty.reduce(
                                  (_, z) => _ + parseInt(z || "0"),
                                  0
                                ),
                              ],
                            }),
                            L.lot.length > 0
                              ? u.jsx("div", {
                                  className: "space-y-2",
                                  children: L.lot.map((_, z) =>
                                    u.jsx(
                                      "div",
                                      {
                                        className:
                                          "bg-white rounded-lg border border-gray-200 p-3",
                                        children: u.jsxs("div", {
                                          className:
                                            "grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm",
                                          children: [
                                            u.jsxs("div", {
                                              className:
                                                "flex items-center gap-2",
                                              children: [
                                                u.jsx(Pu, {
                                                  size: 16,
                                                  className: "text-purple-600",
                                                }),
                                                u.jsx("span", {
                                                  className: "text-gray-600",
                                                  children: "批號:",
                                                }),
                                                u.jsx("span", {
                                                  className: "font-medium",
                                                  children: _ || "無",
                                                }),
                                              ],
                                            }),
                                            u.jsxs("div", {
                                              className:
                                                "flex items-center gap-2",
                                              children: [
                                                u.jsx(Tu, {
                                                  size: 16,
                                                  className: "text-green-600",
                                                }),
                                                u.jsx("span", {
                                                  className: "text-gray-600",
                                                  children: "效期:",
                                                }),
                                                u.jsx("span", {
                                                  className: "font-medium",
                                                  children: ve(
                                                    L.expiry_date[z] || ""
                                                  ),
                                                }),
                                              ],
                                            }),
                                            u.jsxs("div", {
                                              className:
                                                "flex items-center gap-2",
                                              children: [
                                                u.jsx(vl, {
                                                  size: 16,
                                                  className: "text-blue-600",
                                                }),
                                                u.jsx("span", {
                                                  className: "text-gray-600",
                                                  children: "數量:",
                                                }),
                                                u.jsx("span", {
                                                  className: "font-medium",
                                                  children: L.qty[z] || "0",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      },
                                      z
                                    )
                                  ),
                                })
                              : u.jsx("div", {
                                  className: "text-base text-gray-600",
                                  children: "無批號資訊",
                                }),
                          ],
                        })
                      : u.jsx("div", {
                          className: "text-base text-gray-600",
                          children: "請選擇藥品和來源庫別以查看庫存資訊",
                        }),
                  }),
                ],
              }),
            d &&
              x &&
              u.jsxs("div", {
                className: "space-y-4",
                children: [
                  u.jsx("label", {
                    className: "block text-base font-medium text-gray-700",
                    children: "目的庫別庫存明細",
                  }),
                  u.jsx("div", {
                    className:
                      "bg-gray-50 rounded-lg border border-gray-200 p-4",
                    children: Ce
                      ? u.jsxs("div", {
                          className: "flex items-center justify-center py-4",
                          children: [
                            u.jsx("div", {
                              className:
                                "animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600",
                            }),
                            u.jsx("span", {
                              className: "ml-2 text-base text-gray-600",
                              children: "載入庫存資訊中...",
                            }),
                          ],
                        })
                      : X
                      ? u.jsxs("div", {
                          className: "space-y-3",
                          children: [
                            u.jsxs("div", {
                              className:
                                "flex items-center gap-2 text-base font-medium text-gray-900 mb-3",
                              children: [
                                u.jsx(vl, {
                                  size: 18,
                                  className: "text-blue-600",
                                }),
                                "總庫存: ",
                                X.qty.reduce(
                                  (_, z) => _ + parseInt(z || "0"),
                                  0
                                ),
                              ],
                            }),
                            X.lot.length > 0
                              ? u.jsx("div", {
                                  className: "space-y-2",
                                  children: X.lot.map((_, z) =>
                                    u.jsx(
                                      "div",
                                      {
                                        className:
                                          "bg-white rounded-lg border border-gray-200 p-3",
                                        children: u.jsxs("div", {
                                          className:
                                            "grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm",
                                          children: [
                                            u.jsxs("div", {
                                              className:
                                                "flex items-center gap-2",
                                              children: [
                                                u.jsx(Pu, {
                                                  size: 16,
                                                  className: "text-purple-600",
                                                }),
                                                u.jsx("span", {
                                                  className: "text-gray-600",
                                                  children: "批號:",
                                                }),
                                                u.jsx("span", {
                                                  className: "font-medium",
                                                  children: _ || "無",
                                                }),
                                              ],
                                            }),
                                            u.jsxs("div", {
                                              className:
                                                "flex items-center gap-2",
                                              children: [
                                                u.jsx(Tu, {
                                                  size: 16,
                                                  className: "text-green-600",
                                                }),
                                                u.jsx("span", {
                                                  className: "text-gray-600",
                                                  children: "效期:",
                                                }),
                                                u.jsx("span", {
                                                  className: "font-medium",
                                                  children: ve(
                                                    X.expiry_date[z] || ""
                                                  ),
                                                }),
                                              ],
                                            }),
                                            u.jsxs("div", {
                                              className:
                                                "flex items-center gap-2",
                                              children: [
                                                u.jsx(vl, {
                                                  size: 16,
                                                  className: "text-blue-600",
                                                }),
                                                u.jsx("span", {
                                                  className: "text-gray-600",
                                                  children: "數量:",
                                                }),
                                                u.jsx("span", {
                                                  className: "font-medium",
                                                  children: X.qty[z] || "0",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      },
                                      z
                                    )
                                  ),
                                })
                              : u.jsx("div", {
                                  className: "text-base text-gray-600",
                                  children: "無批號資訊",
                                }),
                          ],
                        })
                      : u.jsx("div", {
                          className: "text-base text-gray-600",
                          children: "請選擇藥品和目的庫別以查看庫存資訊",
                        }),
                  }),
                ],
              }),
            u.jsxs("div", {
              className: "space-y-4",
              children: [
                u.jsx("label", {
                  className: "block text-base font-medium text-gray-700",
                  children: o("app.quantity"),
                }),
                u.jsxs("div", {
                  className: "flex gap-4 items-center flex-wrap",
                  children: [
                    u.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [
                        u.jsx("input", {
                          type: "text",
                          value: C,
                          onChange: re,
                          onClick: () => h(!0),
                          placeholder: o("app.quantity.placeholder"),
                          className:
                            "w-40 px-3 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-colors text-base text-gray-900 cursor-pointer",
                        }),
                        (d == null ? void 0 : d.MIN_PAKAGE) &&
                          u.jsx("span", {
                            className: "text-base font-medium text-gray-700",
                            children: d.MIN_PAKAGE,
                          }),
                      ],
                    }),
                    gt() &&
                      u.jsxs("span", {
                        className: `text-base font-medium ${
                          parseInt(gt()) > 0 ? "text-green-600" : "text-red-600"
                        }`,
                        children: [o("app.quantity.available"), ": ", gt()],
                      }),
                  ],
                }),
              ],
            }),
            f && u.jsx(wf, { value: C, onChange: m, onClose: () => h(!1) }),
            u.jsx("button", {
              type: "submit",
              disabled: r || (g && x && g === x),
              className: `w-full px-4 py-2 rounded-lg font-medium transition-colors duration-200 focus:ring-2 focus:ring-opacity-50 ${
                r || (g && x && g === x)
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500"
              }`,
              children: o(r ? "app.button.processing" : "app.button.create"),
            }),
          ],
        }),
      ],
    });
  },
  jy = ({ className: e = "" }) => {
    const { t } = ut();
    return u.jsx("footer", {
      className: `fixed bottom-0 left-0 w-full bg-white py-2 shadow-inner border-t border-gray-200 z-50 ${e}`,
      children: u.jsx("div", {
        className: "max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8",
        children: u.jsx("p", {
          className: "text-center text-sm text-gray-600",
          children: t("footer.copyright"),
        }),
      }),
    });
  };
function Cy() {
  ut();
  const [e, t] = y.useState(!1),
    [n, r] = y.useState(!0),
    [l, o] = y.useState([]),
    [i, s] = y.useState([]),
    [a, c] = y.useState(null),
    [d, p] = y.useState(!1),
    [g, w] = y.useState(!1),
    [x, S] = y.useState(!1),
    [C, m] = y.useState(!1),
    [f, h] = y.useState(null),
    [v, k] = y.useState([]),
    [N, T] = y.useState(() => {
      const O = new Date();
      return O.setHours(0, 0, 0, 0), O;
    }),
    [P, M] = y.useState(() => {
      const O = new Date();
      return O.setHours(23, 59, 59, 999), O;
    }),
    [L, B] = y.useState(!1),
    [X, oe] = y.useState(0);
  y.useEffect(() => {
    (async () => {
      try {
        await ly(), w(!0);
        const re = py();
        t(re);
      } catch (re) {
        console.error("Error during initialization:", re),
          c("系統初始化失敗，請重新整理頁面");
      } finally {
        r(!1);
      }
    })();
  }, []),
    y.useEffect(() => {
      e && g && (ge(), je(), Ce());
    }, [e, g]);
  const je = async () => {
      try {
        const re = (
          await Nt("/api/med_page/get_med_cloud", { method: "POST", body: {} })
        ).Data.filter((U) => U.FILE_STATUS !== "關檔中");
        o(re), c(null);
      } catch (O) {
        console.error("Error fetching drugs:", O),
          c("無法取得藥品資料，請稍後再試"),
          o([]);
      }
    },
    ge = async () => {
      try {
        const O = await Nt("/api/ServerSetting/get_name", {
          method: "POST",
          body: {},
        });
        if (!O || !O.Data) throw new Error("Invalid response format");
        const re = O.Data.map((U) => ({
          ...U,
          displayName: U.name === "DS01" ? "藥庫" : U.name,
        }));
        s(re), c(null);
      } catch (O) {
        console.error("Error fetching warehouses:", O),
          c("無法取得庫別資料，請稍後再試"),
          s([]);
      }
    },
    Ce = async () => {
      B(!0);
      try {
        const O = await Nt("/api/drugStotreDistribution/get_by_addedTime", {
          method: "POST",
          body: {
            ValueAry: [
              ae(N, "yyyy-MM-dd HH:mm:ss"),
              ae(P, "yyyy-MM-dd HH:mm:ss"),
            ],
          },
        });
        k(O.Data), c(null);
      } catch (O) {
        console.error("Error fetching orders:", O),
          c("無法取得撥補單資料，請稍後再試"),
          k([]);
      } finally {
        B(!1);
      }
    },
    E = (O, re) => {
      T(O), M(re), Ce();
    },
    b = async (O) => {
      var ye;
      p(!0), c(null);
      const re = my(),
        U =
          ((ye = O.sourceStockInfo) == null
            ? void 0
            : ye.qty
                .reduce((ve, gt) => ve + parseInt(gt || "0"), 0)
                .toString()) || "",
        ct = {
          sourceStoreType:
            O.sourceWarehouse === "藥庫" ? "DS01" : O.sourceWarehouse,
          destinationStoreType:
            O.destinationWarehouse === "藥庫" ? "DS01" : O.destinationWarehouse,
          code: O.drug.CODE,
          name: O.drug.NAME,
          sourceStoreInventory: U,
          issuedQuantity: O.quantity,
          reportName: re || "",
          state: "等待過帳",
          LOT: "",
          VAL: "",
          packageUnit: O.drug.MIN_PAKAGE || "",
        };
      try {
        const ve = await Nt("/api/drugStotreDistribution/add", {
          method: "POST",
          body: { Data: [ct] },
        });
        if (ve.Code === 200) S(!0), c(null), Ce(), oe((gt) => gt + 1);
        else throw new Error(ve.Result || "建立撥補單失敗");
      } catch (ve) {
        console.error("Error creating order:", ve),
          c("建立撥補單失敗，請稍後再試");
      } finally {
        p(!1);
      }
    },
    $ = async () => {
      f && (await b(f), h(null));
    },
    F = async (O) => {
      var U;
      (((U = O.sourceStockInfo) == null
        ? void 0
        : U.qty.reduce((ct, ye) => ct + parseInt(ye || "0"), 0)) || 0) === 0
        ? (h(O), m(!0))
        : await b(O);
    },
    W = () => {
      co(), t(!1);
    };
  return n
    ? u.jsx("div", {
        className: "min-h-screen bg-white flex items-center justify-center",
        children: u.jsxs("div", {
          className: "text-center",
          children: [
            u.jsx("div", {
              className:
                "animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto",
            }),
            u.jsx("p", {
              className: "mt-2 text-base text-gray-600",
              children: "載入中...",
            }),
          ],
        }),
      })
    : e
    ? u.jsxs("div", {
        className: "min-h-screen flex flex-col",
        children: [
          u.jsx(Sy, { onLogout: W }),
          x &&
            u.jsx(Nf, {
              message: "app.toast.success",
              onClose: () => S(!1),
              duration: 3e3,
            }),
          u.jsx("main", {
            className: "flex-grow flex flex-col bg-white",
            children: u.jsxs("div", {
              className: "w-full px-4 py-8 pb-24",
              children: [
                u.jsx(Ey, {
                  drugs: l,
                  warehouses: i,
                  onSubmit: F,
                  isSubmitting: d,
                  resetTrigger: X,
                }),
                u.jsx("div", {
                  className: "mt-8",
                  children: u.jsx(dy, {
                    orders: v,
                    startDate: N,
                    endDate: P,
                    onDateChange: E,
                    isLoading: L,
                  }),
                }),
              ],
            }),
          }),
          u.jsx(ky, {
            isOpen: C,
            title: "確認建立撥補單",
            message: "來源庫存為 0，是否仍要建立撥補單？",
            confirmText: "確認建立",
            cancelText: "取消",
            onConfirm: async () => {
              m(!1), await $();
            },
            onCancel: () => m(!1),
            isProcessing: d,
          }),
          u.jsx(jy, {}),
        ],
      })
    : u.jsx(hy, { onLogin: () => t(!0) });
}
Qd(document.getElementById("root")).render(
  u.jsx(y.StrictMode, { children: u.jsx(uy, { children: u.jsx(Cy, {}) }) })
);
