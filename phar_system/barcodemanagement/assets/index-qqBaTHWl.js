(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const l of o.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
var Va = { exports: {} },
  ji = {},
  Ha = { exports: {} },
  U = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var gr = Symbol.for("react.element"),
  hd = Symbol.for("react.portal"),
  gd = Symbol.for("react.fragment"),
  md = Symbol.for("react.strict_mode"),
  yd = Symbol.for("react.profiler"),
  vd = Symbol.for("react.provider"),
  xd = Symbol.for("react.context"),
  wd = Symbol.for("react.forward_ref"),
  Sd = Symbol.for("react.suspense"),
  kd = Symbol.for("react.memo"),
  Cd = Symbol.for("react.lazy"),
  ys = Symbol.iterator;
function Nd(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ys && e[ys]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Wa = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Ka = Object.assign,
  Qa = {};
function Nn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Qa),
    (this.updater = n || Wa);
}
Nn.prototype.isReactComponent = {};
Nn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Nn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ga() {}
Ga.prototype = Nn.prototype;
function xl(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Qa),
    (this.updater = n || Wa);
}
var wl = (xl.prototype = new Ga());
wl.constructor = xl;
Ka(wl, Nn.prototype);
wl.isPureReactComponent = !0;
var vs = Array.isArray,
  Ya = Object.prototype.hasOwnProperty,
  Sl = { current: null },
  Xa = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ja(e, t, n) {
  var r,
    i = {},
    o = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Ya.call(t, r) && !Xa.hasOwnProperty(r) && (i[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) i.children = n;
  else if (1 < s) {
    for (var a = Array(s), u = 0; u < s; u++) a[u] = arguments[u + 2];
    i.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) i[r] === void 0 && (i[r] = s[r]);
  return {
    $$typeof: gr,
    type: e,
    key: o,
    ref: l,
    props: i,
    _owner: Sl.current,
  };
}
function Ed(e, t) {
  return {
    $$typeof: gr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function kl(e) {
  return typeof e == "object" && e !== null && e.$$typeof === gr;
}
function jd(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var xs = /\/+/g;
function Wi(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? jd("" + e.key)
    : t.toString(36);
}
function Ir(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (o) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case gr:
          case hd:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (i = i(l)),
      (e = r === "" ? "." + Wi(l, 0) : r),
      vs(i)
        ? ((n = ""),
          e != null && (n = e.replace(xs, "$&/") + "/"),
          Ir(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (kl(i) &&
            (i = Ed(
              i,
              n +
                (!i.key || (l && l.key === i.key)
                  ? ""
                  : ("" + i.key).replace(xs, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((l = 0), (r = r === "" ? "." : r + ":"), vs(e)))
    for (var s = 0; s < e.length; s++) {
      o = e[s];
      var a = r + Wi(o, s);
      l += Ir(o, t, n, a, i);
    }
  else if (((a = Nd(e)), typeof a == "function"))
    for (e = a.call(e), s = 0; !(o = e.next()).done; )
      (o = o.value), (a = r + Wi(o, s++)), (l += Ir(o, t, n, a, i));
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
  return l;
}
function wr(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Ir(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function Ld(e) {
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
var xe = { current: null },
  Ar = { transition: null },
  Od = {
    ReactCurrentDispatcher: xe,
    ReactCurrentBatchConfig: Ar,
    ReactCurrentOwner: Sl,
  };
function Za() {
  throw Error("act(...) is not supported in production builds of React.");
}
U.Children = {
  map: wr,
  forEach: function (e, t, n) {
    wr(
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
      wr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      wr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!kl(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
U.Component = Nn;
U.Fragment = gd;
U.Profiler = yd;
U.PureComponent = xl;
U.StrictMode = md;
U.Suspense = Sd;
U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Od;
U.act = Za;
U.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Ka({}, e.props),
    i = e.key,
    o = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (l = Sl.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (a in t)
      Ya.call(t, a) &&
        !Xa.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    s = Array(a);
    for (var u = 0; u < a; u++) s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: gr, type: e.type, key: i, ref: o, props: r, _owner: l };
};
U.createContext = function (e) {
  return (
    (e = {
      $$typeof: xd,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: vd, _context: e }),
    (e.Consumer = e)
  );
};
U.createElement = Ja;
U.createFactory = function (e) {
  var t = Ja.bind(null, e);
  return (t.type = e), t;
};
U.createRef = function () {
  return { current: null };
};
U.forwardRef = function (e) {
  return { $$typeof: wd, render: e };
};
U.isValidElement = kl;
U.lazy = function (e) {
  return { $$typeof: Cd, _payload: { _status: -1, _result: e }, _init: Ld };
};
U.memo = function (e, t) {
  return { $$typeof: kd, type: e, compare: t === void 0 ? null : t };
};
U.startTransition = function (e) {
  var t = Ar.transition;
  Ar.transition = {};
  try {
    e();
  } finally {
    Ar.transition = t;
  }
};
U.unstable_act = Za;
U.useCallback = function (e, t) {
  return xe.current.useCallback(e, t);
};
U.useContext = function (e) {
  return xe.current.useContext(e);
};
U.useDebugValue = function () {};
U.useDeferredValue = function (e) {
  return xe.current.useDeferredValue(e);
};
U.useEffect = function (e, t) {
  return xe.current.useEffect(e, t);
};
U.useId = function () {
  return xe.current.useId();
};
U.useImperativeHandle = function (e, t, n) {
  return xe.current.useImperativeHandle(e, t, n);
};
U.useInsertionEffect = function (e, t) {
  return xe.current.useInsertionEffect(e, t);
};
U.useLayoutEffect = function (e, t) {
  return xe.current.useLayoutEffect(e, t);
};
U.useMemo = function (e, t) {
  return xe.current.useMemo(e, t);
};
U.useReducer = function (e, t, n) {
  return xe.current.useReducer(e, t, n);
};
U.useRef = function (e) {
  return xe.current.useRef(e);
};
U.useState = function (e) {
  return xe.current.useState(e);
};
U.useSyncExternalStore = function (e, t, n) {
  return xe.current.useSyncExternalStore(e, t, n);
};
U.useTransition = function () {
  return xe.current.useTransition();
};
U.version = "18.3.1";
Ha.exports = U;
var N = Ha.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pd = N,
  Rd = Symbol.for("react.element"),
  _d = Symbol.for("react.fragment"),
  Td = Object.prototype.hasOwnProperty,
  Dd = Pd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Md = { key: !0, ref: !0, __self: !0, __source: !0 };
function qa(e, t, n) {
  var r,
    i = {},
    o = null,
    l = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
  for (r in t) Td.call(t, r) && !Md.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: Rd,
    type: e,
    key: o,
    ref: l,
    props: i,
    _owner: Dd.current,
  };
}
ji.Fragment = _d;
ji.jsx = qa;
ji.jsxs = qa;
Va.exports = ji;
var c = Va.exports,
  eu = { exports: {} },
  Me = {},
  tu = { exports: {} },
  nu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(k, P) {
    var $ = k.length;
    k.push(P);
    e: for (; 0 < $; ) {
      var B = ($ - 1) >>> 1,
        K = k[B];
      if (0 < i(K, P)) (k[B] = P), (k[$] = K), ($ = B);
      else break e;
    }
  }
  function n(k) {
    return k.length === 0 ? null : k[0];
  }
  function r(k) {
    if (k.length === 0) return null;
    var P = k[0],
      $ = k.pop();
    if ($ !== P) {
      k[0] = $;
      e: for (var B = 0, K = k.length, ke = K >>> 1; B < ke; ) {
        var A = 2 * (B + 1) - 1,
          b = k[A],
          J = A + 1,
          Ce = k[J];
        if (0 > i(b, $))
          J < K && 0 > i(Ce, b)
            ? ((k[B] = Ce), (k[J] = $), (B = J))
            : ((k[B] = b), (k[A] = $), (B = A));
        else if (J < K && 0 > i(Ce, $)) (k[B] = Ce), (k[J] = $), (B = J);
        else break e;
      }
    }
    return P;
  }
  function i(k, P) {
    var $ = k.sortIndex - P.sortIndex;
    return $ !== 0 ? $ : k.id - P.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
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
    h = 1,
    f = null,
    m = 3,
    y = !1,
    v = !1,
    w = !1,
    T = typeof setTimeout == "function" ? setTimeout : null,
    g = typeof clearTimeout == "function" ? clearTimeout : null,
    d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(k) {
    for (var P = n(u); P !== null; ) {
      if (P.callback === null) r(u);
      else if (P.startTime <= k)
        r(u), (P.sortIndex = P.expirationTime), t(a, P);
      else break;
      P = n(u);
    }
  }
  function x(k) {
    if (((w = !1), p(k), !v))
      if (n(a) !== null) (v = !0), X(S);
      else {
        var P = n(u);
        P !== null && O(x, P.startTime - k);
      }
  }
  function S(k, P) {
    (v = !1), w && ((w = !1), g(j), (j = -1)), (y = !0);
    var $ = m;
    try {
      for (
        p(P), f = n(a);
        f !== null && (!(f.expirationTime > P) || (k && !ne()));

      ) {
        var B = f.callback;
        if (typeof B == "function") {
          (f.callback = null), (m = f.priorityLevel);
          var K = B(f.expirationTime <= P);
          (P = e.unstable_now()),
            typeof K == "function" ? (f.callback = K) : f === n(a) && r(a),
            p(P);
        } else r(a);
        f = n(a);
      }
      if (f !== null) var ke = !0;
      else {
        var A = n(u);
        A !== null && O(x, A.startTime - P), (ke = !1);
      }
      return ke;
    } finally {
      (f = null), (m = $), (y = !1);
    }
  }
  var E = !1,
    L = null,
    j = -1,
    D = 5,
    _ = -1;
  function ne() {
    return !(e.unstable_now() - _ < D);
  }
  function I() {
    if (L !== null) {
      var k = e.unstable_now();
      _ = k;
      var P = !0;
      try {
        P = L(!0, k);
      } finally {
        P ? z() : ((E = !1), (L = null));
      }
    } else E = !1;
  }
  var z;
  if (typeof d == "function")
    z = function () {
      d(I);
    };
  else if (typeof MessageChannel < "u") {
    var F = new MessageChannel(),
      H = F.port2;
    (F.port1.onmessage = I),
      (z = function () {
        H.postMessage(null);
      });
  } else
    z = function () {
      T(I, 0);
    };
  function X(k) {
    (L = k), E || ((E = !0), z());
  }
  function O(k, P) {
    j = T(function () {
      k(e.unstable_now());
    }, P);
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
      v || y || ((v = !0), X(S));
    }),
    (e.unstable_forceFrameRate = function (k) {
      0 > k || 125 < k
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (D = 0 < k ? Math.floor(1e3 / k) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (k) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var P = 3;
          break;
        default:
          P = m;
      }
      var $ = m;
      m = P;
      try {
        return k();
      } finally {
        m = $;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (k, P) {
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
      var $ = m;
      m = k;
      try {
        return P();
      } finally {
        m = $;
      }
    }),
    (e.unstable_scheduleCallback = function (k, P, $) {
      var B = e.unstable_now();
      switch (
        (typeof $ == "object" && $ !== null
          ? (($ = $.delay), ($ = typeof $ == "number" && 0 < $ ? B + $ : B))
          : ($ = B),
        k)
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
        (K = $ + K),
        (k = {
          id: h++,
          callback: P,
          priorityLevel: k,
          startTime: $,
          expirationTime: K,
          sortIndex: -1,
        }),
        $ > B
          ? ((k.sortIndex = $),
            t(u, k),
            n(a) === null &&
              k === n(u) &&
              (w ? (g(j), (j = -1)) : (w = !0), O(x, $ - B)))
          : ((k.sortIndex = K), t(a, k), v || y || ((v = !0), X(S))),
        k
      );
    }),
    (e.unstable_shouldYield = ne),
    (e.unstable_wrapCallback = function (k) {
      var P = m;
      return function () {
        var $ = m;
        m = P;
        try {
          return k.apply(this, arguments);
        } finally {
          m = $;
        }
      };
    });
})(nu);
tu.exports = nu;
var zd = tu.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $d = N,
  De = zd;
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
var ru = new Set(),
  Jn = {};
function Qt(e, t) {
  mn(e, t), mn(e + "Capture", t);
}
function mn(e, t) {
  for (Jn[e] = t, e = 0; e < t.length; e++) ru.add(t[e]);
}
var st = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Co = Object.prototype.hasOwnProperty,
  Fd =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ws = {},
  Ss = {};
function Id(e) {
  return Co.call(Ss, e)
    ? !0
    : Co.call(ws, e)
    ? !1
    : Fd.test(e)
    ? (Ss[e] = !0)
    : ((ws[e] = !0), !1);
}
function Ad(e, t, n, r) {
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
function Bd(e, t, n, r) {
  if (t === null || typeof t > "u" || Ad(e, t, n, r)) return !0;
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
function we(e, t, n, r, i, o, l) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = l);
}
var fe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    fe[e] = new we(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  fe[t] = new we(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  fe[e] = new we(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  fe[e] = new we(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    fe[e] = new we(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  fe[e] = new we(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  fe[e] = new we(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  fe[e] = new we(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  fe[e] = new we(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Cl = /[\-:]([a-z])/g;
function Nl(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Cl, Nl);
    fe[t] = new we(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Cl, Nl);
    fe[t] = new we(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Cl, Nl);
  fe[t] = new we(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  fe[e] = new we(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
fe.xlinkHref = new we(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  fe[e] = new we(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function El(e, t, n, r) {
  var i = fe.hasOwnProperty(t) ? fe[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Bd(t, n, i, r) && (n = null),
    r || i === null
      ? Id(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var dt = $d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Sr = Symbol.for("react.element"),
  Jt = Symbol.for("react.portal"),
  Zt = Symbol.for("react.fragment"),
  jl = Symbol.for("react.strict_mode"),
  No = Symbol.for("react.profiler"),
  iu = Symbol.for("react.provider"),
  ou = Symbol.for("react.context"),
  Ll = Symbol.for("react.forward_ref"),
  Eo = Symbol.for("react.suspense"),
  jo = Symbol.for("react.suspense_list"),
  Ol = Symbol.for("react.memo"),
  pt = Symbol.for("react.lazy"),
  lu = Symbol.for("react.offscreen"),
  ks = Symbol.iterator;
function Ln(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ks && e[ks]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var te = Object.assign,
  Ki;
function $n(e) {
  if (Ki === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ki = (t && t[1]) || "";
    }
  return (
    `
` +
    Ki +
    e
  );
}
var Qi = !1;
function Gi(e, t) {
  if (!e || Qi) return "";
  Qi = !0;
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
        var i = u.stack.split(`
`),
          o = r.stack.split(`
`),
          l = i.length - 1,
          s = o.length - 1;
        1 <= l && 0 <= s && i[l] !== o[s];

      )
        s--;
      for (; 1 <= l && 0 <= s; l--, s--)
        if (i[l] !== o[s]) {
          if (l !== 1 || s !== 1)
            do
              if ((l--, s--, 0 > s || i[l] !== o[s])) {
                var a =
                  `
` + i[l].replace(" at new ", " at ");
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
    (Qi = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? $n(e) : "";
}
function Ud(e) {
  switch (e.tag) {
    case 5:
      return $n(e.type);
    case 16:
      return $n("Lazy");
    case 13:
      return $n("Suspense");
    case 19:
      return $n("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Gi(e.type, !1)), e;
    case 11:
      return (e = Gi(e.type.render, !1)), e;
    case 1:
      return (e = Gi(e.type, !0)), e;
    default:
      return "";
  }
}
function Lo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Zt:
      return "Fragment";
    case Jt:
      return "Portal";
    case No:
      return "Profiler";
    case jl:
      return "StrictMode";
    case Eo:
      return "Suspense";
    case jo:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case ou:
        return (e.displayName || "Context") + ".Consumer";
      case iu:
        return (e._context.displayName || "Context") + ".Provider";
      case Ll:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Ol:
        return (
          (t = e.displayName || null), t !== null ? t : Lo(e.type) || "Memo"
        );
      case pt:
        (t = e._payload), (e = e._init);
        try {
          return Lo(e(t));
        } catch {}
    }
  return null;
}
function bd(e) {
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
      return Lo(t);
    case 8:
      return t === jl ? "StrictMode" : "Mode";
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
function Lt(e) {
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
function su(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Vd(e) {
  var t = su(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (l) {
          (r = "" + l), o.call(this, l);
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
function kr(e) {
  e._valueTracker || (e._valueTracker = Vd(e));
}
function au(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = su(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Jr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Oo(e, t) {
  var n = t.checked;
  return te({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Cs(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Lt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function uu(e, t) {
  (t = t.checked), t != null && El(e, "checked", t, !1);
}
function Po(e, t) {
  uu(e, t);
  var n = Lt(t.value),
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
    ? Ro(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Ro(e, t.type, Lt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Ns(e, t, n) {
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
function Ro(e, t, n) {
  (t !== "number" || Jr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Fn = Array.isArray;
function cn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Lt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function _o(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(C(91));
  return te({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Es(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(C(92));
      if (Fn(n)) {
        if (1 < n.length) throw Error(C(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Lt(n) };
}
function cu(e, t) {
  var n = Lt(t.value),
    r = Lt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function js(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function du(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function To(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? du(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Cr,
  fu = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Cr = Cr || document.createElement("div"),
          Cr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Cr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Zn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Bn = {
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
  Hd = ["Webkit", "ms", "Moz", "O"];
Object.keys(Bn).forEach(function (e) {
  Hd.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Bn[t] = Bn[e]);
  });
});
function pu(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Bn.hasOwnProperty(e) && Bn[e])
    ? ("" + t).trim()
    : t + "px";
}
function hu(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = pu(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var Wd = te(
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
function Do(e, t) {
  if (t) {
    if (Wd[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
function Mo(e, t) {
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
var zo = null;
function Pl(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var $o = null,
  dn = null,
  fn = null;
function Ls(e) {
  if ((e = vr(e))) {
    if (typeof $o != "function") throw Error(C(280));
    var t = e.stateNode;
    t && ((t = _i(t)), $o(e.stateNode, e.type, t));
  }
}
function gu(e) {
  dn ? (fn ? fn.push(e) : (fn = [e])) : (dn = e);
}
function mu() {
  if (dn) {
    var e = dn,
      t = fn;
    if (((fn = dn = null), Ls(e), t)) for (e = 0; e < t.length; e++) Ls(t[e]);
  }
}
function yu(e, t) {
  return e(t);
}
function vu() {}
var Yi = !1;
function xu(e, t, n) {
  if (Yi) return e(t, n);
  Yi = !0;
  try {
    return yu(e, t, n);
  } finally {
    (Yi = !1), (dn !== null || fn !== null) && (vu(), mu());
  }
}
function qn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = _i(n);
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
var Fo = !1;
if (st)
  try {
    var On = {};
    Object.defineProperty(On, "passive", {
      get: function () {
        Fo = !0;
      },
    }),
      window.addEventListener("test", On, On),
      window.removeEventListener("test", On, On);
  } catch {
    Fo = !1;
  }
function Kd(e, t, n, r, i, o, l, s, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (h) {
    this.onError(h);
  }
}
var Un = !1,
  Zr = null,
  qr = !1,
  Io = null,
  Qd = {
    onError: function (e) {
      (Un = !0), (Zr = e);
    },
  };
function Gd(e, t, n, r, i, o, l, s, a) {
  (Un = !1), (Zr = null), Kd.apply(Qd, arguments);
}
function Yd(e, t, n, r, i, o, l, s, a) {
  if ((Gd.apply(this, arguments), Un)) {
    if (Un) {
      var u = Zr;
      (Un = !1), (Zr = null);
    } else throw Error(C(198));
    qr || ((qr = !0), (Io = u));
  }
}
function Gt(e) {
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
function wu(e) {
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
function Os(e) {
  if (Gt(e) !== e) throw Error(C(188));
}
function Xd(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Gt(e)), t === null)) throw Error(C(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return Os(i), e;
        if (o === r) return Os(i), t;
        o = o.sibling;
      }
      throw Error(C(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var l = !1, s = i.child; s; ) {
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
      if (!l) {
        for (s = o.child; s; ) {
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
        if (!l) throw Error(C(189));
      }
    }
    if (n.alternate !== r) throw Error(C(190));
  }
  if (n.tag !== 3) throw Error(C(188));
  return n.stateNode.current === n ? e : t;
}
function Su(e) {
  return (e = Xd(e)), e !== null ? ku(e) : null;
}
function ku(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = ku(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Cu = De.unstable_scheduleCallback,
  Ps = De.unstable_cancelCallback,
  Jd = De.unstable_shouldYield,
  Zd = De.unstable_requestPaint,
  ie = De.unstable_now,
  qd = De.unstable_getCurrentPriorityLevel,
  Rl = De.unstable_ImmediatePriority,
  Nu = De.unstable_UserBlockingPriority,
  ei = De.unstable_NormalPriority,
  ef = De.unstable_LowPriority,
  Eu = De.unstable_IdlePriority,
  Li = null,
  et = null;
function tf(e) {
  if (et && typeof et.onCommitFiberRoot == "function")
    try {
      et.onCommitFiberRoot(Li, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Qe = Math.clz32 ? Math.clz32 : of,
  nf = Math.log,
  rf = Math.LN2;
function of(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((nf(e) / rf) | 0)) | 0;
}
var Nr = 64,
  Er = 4194304;
function In(e) {
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
function ti(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var s = l & ~i;
    s !== 0 ? (r = In(s)) : ((o &= l), o !== 0 && (r = In(o)));
  } else (l = n & ~i), l !== 0 ? (r = In(l)) : o !== 0 && (r = In(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Qe(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function lf(e, t) {
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
function sf(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var l = 31 - Qe(o),
      s = 1 << l,
      a = i[l];
    a === -1
      ? (!(s & n) || s & r) && (i[l] = lf(s, t))
      : a <= t && (e.expiredLanes |= s),
      (o &= ~s);
  }
}
function Ao(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function ju() {
  var e = Nr;
  return (Nr <<= 1), !(Nr & 4194240) && (Nr = 64), e;
}
function Xi(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function mr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Qe(t)),
    (e[t] = n);
}
function af(e, t) {
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
    var i = 31 - Qe(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function _l(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Qe(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var W = 0;
function Lu(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Ou,
  Tl,
  Pu,
  Ru,
  _u,
  Bo = !1,
  jr = [],
  xt = null,
  wt = null,
  St = null,
  er = new Map(),
  tr = new Map(),
  gt = [],
  uf =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Rs(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      xt = null;
      break;
    case "dragenter":
    case "dragleave":
      wt = null;
      break;
    case "mouseover":
    case "mouseout":
      St = null;
      break;
    case "pointerover":
    case "pointerout":
      er.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      tr.delete(t.pointerId);
  }
}
function Pn(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = vr(t)), t !== null && Tl(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function cf(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (xt = Pn(xt, e, t, n, r, i)), !0;
    case "dragenter":
      return (wt = Pn(wt, e, t, n, r, i)), !0;
    case "mouseover":
      return (St = Pn(St, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return er.set(o, Pn(er.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), tr.set(o, Pn(tr.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function Tu(e) {
  var t = zt(e.target);
  if (t !== null) {
    var n = Gt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = wu(n)), t !== null)) {
          (e.blockedOn = t),
            _u(e.priority, function () {
              Pu(n);
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
function Br(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Uo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (zo = r), n.target.dispatchEvent(r), (zo = null);
    } else return (t = vr(n)), t !== null && Tl(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function _s(e, t, n) {
  Br(e) && n.delete(t);
}
function df() {
  (Bo = !1),
    xt !== null && Br(xt) && (xt = null),
    wt !== null && Br(wt) && (wt = null),
    St !== null && Br(St) && (St = null),
    er.forEach(_s),
    tr.forEach(_s);
}
function Rn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Bo ||
      ((Bo = !0),
      De.unstable_scheduleCallback(De.unstable_NormalPriority, df)));
}
function nr(e) {
  function t(i) {
    return Rn(i, e);
  }
  if (0 < jr.length) {
    Rn(jr[0], e);
    for (var n = 1; n < jr.length; n++) {
      var r = jr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    xt !== null && Rn(xt, e),
      wt !== null && Rn(wt, e),
      St !== null && Rn(St, e),
      er.forEach(t),
      tr.forEach(t),
      n = 0;
    n < gt.length;
    n++
  )
    (r = gt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < gt.length && ((n = gt[0]), n.blockedOn === null); )
    Tu(n), n.blockedOn === null && gt.shift();
}
var pn = dt.ReactCurrentBatchConfig,
  ni = !0;
function ff(e, t, n, r) {
  var i = W,
    o = pn.transition;
  pn.transition = null;
  try {
    (W = 1), Dl(e, t, n, r);
  } finally {
    (W = i), (pn.transition = o);
  }
}
function pf(e, t, n, r) {
  var i = W,
    o = pn.transition;
  pn.transition = null;
  try {
    (W = 4), Dl(e, t, n, r);
  } finally {
    (W = i), (pn.transition = o);
  }
}
function Dl(e, t, n, r) {
  if (ni) {
    var i = Uo(e, t, n, r);
    if (i === null) lo(e, t, r, ri, n), Rs(e, r);
    else if (cf(i, e, t, n, r)) r.stopPropagation();
    else if ((Rs(e, r), t & 4 && -1 < uf.indexOf(e))) {
      for (; i !== null; ) {
        var o = vr(i);
        if (
          (o !== null && Ou(o),
          (o = Uo(e, t, n, r)),
          o === null && lo(e, t, r, ri, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else lo(e, t, r, null, n);
  }
}
var ri = null;
function Uo(e, t, n, r) {
  if (((ri = null), (e = Pl(r)), (e = zt(e)), e !== null))
    if (((t = Gt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = wu(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ri = e), null;
}
function Du(e) {
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
      switch (qd()) {
        case Rl:
          return 1;
        case Nu:
          return 4;
        case ei:
        case ef:
          return 16;
        case Eu:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var yt = null,
  Ml = null,
  Ur = null;
function Mu() {
  if (Ur) return Ur;
  var e,
    t = Ml,
    n = t.length,
    r,
    i = "value" in yt ? yt.value : yt.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === i[o - r]; r++);
  return (Ur = i.slice(e, 1 < r ? 1 - r : void 0));
}
function br(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Lr() {
  return !0;
}
function Ts() {
  return !1;
}
function ze(e) {
  function t(n, r, i, o, l) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = l),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(o) : o[s]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Lr
        : Ts),
      (this.isPropagationStopped = Ts),
      this
    );
  }
  return (
    te(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Lr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Lr));
      },
      persist: function () {},
      isPersistent: Lr,
    }),
    t
  );
}
var En = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  zl = ze(En),
  yr = te({}, En, { view: 0, detail: 0 }),
  hf = ze(yr),
  Ji,
  Zi,
  _n,
  Oi = te({}, yr, {
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
    getModifierState: $l,
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
        : (e !== _n &&
            (_n && e.type === "mousemove"
              ? ((Ji = e.screenX - _n.screenX), (Zi = e.screenY - _n.screenY))
              : (Zi = Ji = 0),
            (_n = e)),
          Ji);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Zi;
    },
  }),
  Ds = ze(Oi),
  gf = te({}, Oi, { dataTransfer: 0 }),
  mf = ze(gf),
  yf = te({}, yr, { relatedTarget: 0 }),
  qi = ze(yf),
  vf = te({}, En, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  xf = ze(vf),
  wf = te({}, En, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Sf = ze(wf),
  kf = te({}, En, { data: 0 }),
  Ms = ze(kf),
  Cf = {
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
  Nf = {
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
  Ef = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function jf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Ef[e]) ? !!t[e] : !1;
}
function $l() {
  return jf;
}
var Lf = te({}, yr, {
    key: function (e) {
      if (e.key) {
        var t = Cf[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = br(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Nf[e.keyCode] || "Unidentified"
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
    getModifierState: $l,
    charCode: function (e) {
      return e.type === "keypress" ? br(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? br(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Of = ze(Lf),
  Pf = te({}, Oi, {
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
  zs = ze(Pf),
  Rf = te({}, yr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: $l,
  }),
  _f = ze(Rf),
  Tf = te({}, En, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Df = ze(Tf),
  Mf = te({}, Oi, {
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
  zf = ze(Mf),
  $f = [9, 13, 27, 32],
  Fl = st && "CompositionEvent" in window,
  bn = null;
st && "documentMode" in document && (bn = document.documentMode);
var Ff = st && "TextEvent" in window && !bn,
  zu = st && (!Fl || (bn && 8 < bn && 11 >= bn)),
  $s = " ",
  Fs = !1;
function $u(e, t) {
  switch (e) {
    case "keyup":
      return $f.indexOf(t.keyCode) !== -1;
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
function Fu(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var qt = !1;
function If(e, t) {
  switch (e) {
    case "compositionend":
      return Fu(t);
    case "keypress":
      return t.which !== 32 ? null : ((Fs = !0), $s);
    case "textInput":
      return (e = t.data), e === $s && Fs ? null : e;
    default:
      return null;
  }
}
function Af(e, t) {
  if (qt)
    return e === "compositionend" || (!Fl && $u(e, t))
      ? ((e = Mu()), (Ur = Ml = yt = null), (qt = !1), e)
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
      return zu && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Bf = {
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
function Is(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Bf[e.type] : t === "textarea";
}
function Iu(e, t, n, r) {
  gu(r),
    (t = ii(t, "onChange")),
    0 < t.length &&
      ((n = new zl("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Vn = null,
  rr = null;
function Uf(e) {
  Yu(e, 0);
}
function Pi(e) {
  var t = nn(e);
  if (au(t)) return e;
}
function bf(e, t) {
  if (e === "change") return t;
}
var Au = !1;
if (st) {
  var eo;
  if (st) {
    var to = "oninput" in document;
    if (!to) {
      var As = document.createElement("div");
      As.setAttribute("oninput", "return;"),
        (to = typeof As.oninput == "function");
    }
    eo = to;
  } else eo = !1;
  Au = eo && (!document.documentMode || 9 < document.documentMode);
}
function Bs() {
  Vn && (Vn.detachEvent("onpropertychange", Bu), (rr = Vn = null));
}
function Bu(e) {
  if (e.propertyName === "value" && Pi(rr)) {
    var t = [];
    Iu(t, rr, e, Pl(e)), xu(Uf, t);
  }
}
function Vf(e, t, n) {
  e === "focusin"
    ? (Bs(), (Vn = t), (rr = n), Vn.attachEvent("onpropertychange", Bu))
    : e === "focusout" && Bs();
}
function Hf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Pi(rr);
}
function Wf(e, t) {
  if (e === "click") return Pi(t);
}
function Kf(e, t) {
  if (e === "input" || e === "change") return Pi(t);
}
function Qf(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ye = typeof Object.is == "function" ? Object.is : Qf;
function ir(e, t) {
  if (Ye(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Co.call(t, i) || !Ye(e[i], t[i])) return !1;
  }
  return !0;
}
function Us(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function bs(e, t) {
  var n = Us(e);
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
    n = Us(n);
  }
}
function Uu(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Uu(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function bu() {
  for (var e = window, t = Jr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Jr(e.document);
  }
  return t;
}
function Il(e) {
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
function Gf(e) {
  var t = bu(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Uu(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Il(n)) {
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
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = bs(n, o));
        var l = bs(n, r);
        i &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
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
var Yf = st && "documentMode" in document && 11 >= document.documentMode,
  en = null,
  bo = null,
  Hn = null,
  Vo = !1;
function Vs(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Vo ||
    en == null ||
    en !== Jr(r) ||
    ((r = en),
    "selectionStart" in r && Il(r)
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
    (Hn && ir(Hn, r)) ||
      ((Hn = r),
      (r = ii(bo, "onSelect")),
      0 < r.length &&
        ((t = new zl("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = en))));
}
function Or(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var tn = {
    animationend: Or("Animation", "AnimationEnd"),
    animationiteration: Or("Animation", "AnimationIteration"),
    animationstart: Or("Animation", "AnimationStart"),
    transitionend: Or("Transition", "TransitionEnd"),
  },
  no = {},
  Vu = {};
st &&
  ((Vu = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete tn.animationend.animation,
    delete tn.animationiteration.animation,
    delete tn.animationstart.animation),
  "TransitionEvent" in window || delete tn.transitionend.transition);
function Ri(e) {
  if (no[e]) return no[e];
  if (!tn[e]) return e;
  var t = tn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Vu) return (no[e] = t[n]);
  return e;
}
var Hu = Ri("animationend"),
  Wu = Ri("animationiteration"),
  Ku = Ri("animationstart"),
  Qu = Ri("transitionend"),
  Gu = new Map(),
  Hs =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Pt(e, t) {
  Gu.set(e, t), Qt(t, [e]);
}
for (var ro = 0; ro < Hs.length; ro++) {
  var io = Hs[ro],
    Xf = io.toLowerCase(),
    Jf = io[0].toUpperCase() + io.slice(1);
  Pt(Xf, "on" + Jf);
}
Pt(Hu, "onAnimationEnd");
Pt(Wu, "onAnimationIteration");
Pt(Ku, "onAnimationStart");
Pt("dblclick", "onDoubleClick");
Pt("focusin", "onFocus");
Pt("focusout", "onBlur");
Pt(Qu, "onTransitionEnd");
mn("onMouseEnter", ["mouseout", "mouseover"]);
mn("onMouseLeave", ["mouseout", "mouseover"]);
mn("onPointerEnter", ["pointerout", "pointerover"]);
mn("onPointerLeave", ["pointerout", "pointerover"]);
Qt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Qt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Qt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Qt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Qt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Qt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var An =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Zf = new Set("cancel close invalid load scroll toggle".split(" ").concat(An));
function Ws(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Yd(r, t, void 0, e), (e.currentTarget = null);
}
function Yu(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var s = r[l],
            a = s.instance,
            u = s.currentTarget;
          if (((s = s.listener), a !== o && i.isPropagationStopped())) break e;
          Ws(i, s, u), (o = a);
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((s = r[l]),
            (a = s.instance),
            (u = s.currentTarget),
            (s = s.listener),
            a !== o && i.isPropagationStopped())
          )
            break e;
          Ws(i, s, u), (o = a);
        }
    }
  }
  if (qr) throw ((e = Io), (qr = !1), (Io = null), e);
}
function G(e, t) {
  var n = t[Go];
  n === void 0 && (n = t[Go] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Xu(t, e, 2, !1), n.add(r));
}
function oo(e, t, n) {
  var r = 0;
  t && (r |= 4), Xu(n, e, r, t);
}
var Pr = "_reactListening" + Math.random().toString(36).slice(2);
function or(e) {
  if (!e[Pr]) {
    (e[Pr] = !0),
      ru.forEach(function (n) {
        n !== "selectionchange" && (Zf.has(n) || oo(n, !1, e), oo(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Pr] || ((t[Pr] = !0), oo("selectionchange", !1, t));
  }
}
function Xu(e, t, n, r) {
  switch (Du(t)) {
    case 1:
      var i = ff;
      break;
    case 4:
      i = pf;
      break;
    default:
      i = Dl;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Fo ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function lo(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var s = r.stateNode.containerInfo;
        if (s === i || (s.nodeType === 8 && s.parentNode === i)) break;
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var a = l.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = l.stateNode.containerInfo),
              a === i || (a.nodeType === 8 && a.parentNode === i))
            )
              return;
            l = l.return;
          }
        for (; s !== null; ) {
          if (((l = zt(s)), l === null)) return;
          if (((a = l.tag), a === 5 || a === 6)) {
            r = o = l;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  xu(function () {
    var u = o,
      h = Pl(n),
      f = [];
    e: {
      var m = Gu.get(e);
      if (m !== void 0) {
        var y = zl,
          v = e;
        switch (e) {
          case "keypress":
            if (br(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = Of;
            break;
          case "focusin":
            (v = "focus"), (y = qi);
            break;
          case "focusout":
            (v = "blur"), (y = qi);
            break;
          case "beforeblur":
          case "afterblur":
            y = qi;
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
            y = Ds;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = mf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = _f;
            break;
          case Hu:
          case Wu:
          case Ku:
            y = xf;
            break;
          case Qu:
            y = Df;
            break;
          case "scroll":
            y = hf;
            break;
          case "wheel":
            y = zf;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = Sf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = zs;
        }
        var w = (t & 4) !== 0,
          T = !w && e === "scroll",
          g = w ? (m !== null ? m + "Capture" : null) : m;
        w = [];
        for (var d = u, p; d !== null; ) {
          p = d;
          var x = p.stateNode;
          if (
            (p.tag === 5 &&
              x !== null &&
              ((p = x),
              g !== null && ((x = qn(d, g)), x != null && w.push(lr(d, x, p)))),
            T)
          )
            break;
          d = d.return;
        }
        0 < w.length &&
          ((m = new y(m, v, null, n, h)), f.push({ event: m, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          m &&
            n !== zo &&
            (v = n.relatedTarget || n.fromElement) &&
            (zt(v) || v[at]))
        )
          break e;
        if (
          (y || m) &&
          ((m =
            h.window === h
              ? h
              : (m = h.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          y
            ? ((v = n.relatedTarget || n.toElement),
              (y = u),
              (v = v ? zt(v) : null),
              v !== null &&
                ((T = Gt(v)), v !== T || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((y = null), (v = u)),
          y !== v)
        ) {
          if (
            ((w = Ds),
            (x = "onMouseLeave"),
            (g = "onMouseEnter"),
            (d = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = zs),
              (x = "onPointerLeave"),
              (g = "onPointerEnter"),
              (d = "pointer")),
            (T = y == null ? m : nn(y)),
            (p = v == null ? m : nn(v)),
            (m = new w(x, d + "leave", y, n, h)),
            (m.target = T),
            (m.relatedTarget = p),
            (x = null),
            zt(h) === u &&
              ((w = new w(g, d + "enter", v, n, h)),
              (w.target = p),
              (w.relatedTarget = T),
              (x = w)),
            (T = x),
            y && v)
          )
            t: {
              for (w = y, g = v, d = 0, p = w; p; p = Yt(p)) d++;
              for (p = 0, x = g; x; x = Yt(x)) p++;
              for (; 0 < d - p; ) (w = Yt(w)), d--;
              for (; 0 < p - d; ) (g = Yt(g)), p--;
              for (; d--; ) {
                if (w === g || (g !== null && w === g.alternate)) break t;
                (w = Yt(w)), (g = Yt(g));
              }
              w = null;
            }
          else w = null;
          y !== null && Ks(f, m, y, w, !1),
            v !== null && T !== null && Ks(f, T, v, w, !0);
        }
      }
      e: {
        if (
          ((m = u ? nn(u) : window),
          (y = m.nodeName && m.nodeName.toLowerCase()),
          y === "select" || (y === "input" && m.type === "file"))
        )
          var S = bf;
        else if (Is(m))
          if (Au) S = Kf;
          else {
            S = Hf;
            var E = Vf;
          }
        else
          (y = m.nodeName) &&
            y.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (S = Wf);
        if (S && (S = S(e, u))) {
          Iu(f, S, n, h);
          break e;
        }
        E && E(e, m, u),
          e === "focusout" &&
            (E = m._wrapperState) &&
            E.controlled &&
            m.type === "number" &&
            Ro(m, "number", m.value);
      }
      switch (((E = u ? nn(u) : window), e)) {
        case "focusin":
          (Is(E) || E.contentEditable === "true") &&
            ((en = E), (bo = u), (Hn = null));
          break;
        case "focusout":
          Hn = bo = en = null;
          break;
        case "mousedown":
          Vo = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Vo = !1), Vs(f, n, h);
          break;
        case "selectionchange":
          if (Yf) break;
        case "keydown":
        case "keyup":
          Vs(f, n, h);
      }
      var L;
      if (Fl)
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
        qt
          ? $u(e, n) && (j = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (j = "onCompositionStart");
      j &&
        (zu &&
          n.locale !== "ko" &&
          (qt || j !== "onCompositionStart"
            ? j === "onCompositionEnd" && qt && (L = Mu())
            : ((yt = h),
              (Ml = "value" in yt ? yt.value : yt.textContent),
              (qt = !0))),
        (E = ii(u, j)),
        0 < E.length &&
          ((j = new Ms(j, e, null, n, h)),
          f.push({ event: j, listeners: E }),
          L ? (j.data = L) : ((L = Fu(n)), L !== null && (j.data = L)))),
        (L = Ff ? If(e, n) : Af(e, n)) &&
          ((u = ii(u, "onBeforeInput")),
          0 < u.length &&
            ((h = new Ms("onBeforeInput", "beforeinput", null, n, h)),
            f.push({ event: h, listeners: u }),
            (h.data = L)));
    }
    Yu(f, t);
  });
}
function lr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ii(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = qn(e, n)),
      o != null && r.unshift(lr(e, o, i)),
      (o = qn(e, t)),
      o != null && r.push(lr(e, o, i))),
      (e = e.return);
  }
  return r;
}
function Yt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ks(e, t, n, r, i) {
  for (var o = t._reactName, l = []; n !== null && n !== r; ) {
    var s = n,
      a = s.alternate,
      u = s.stateNode;
    if (a !== null && a === r) break;
    s.tag === 5 &&
      u !== null &&
      ((s = u),
      i
        ? ((a = qn(n, o)), a != null && l.unshift(lr(n, a, s)))
        : i || ((a = qn(n, o)), a != null && l.push(lr(n, a, s)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var qf = /\r\n?/g,
  ep = /\u0000|\uFFFD/g;
function Qs(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      qf,
      `
`
    )
    .replace(ep, "");
}
function Rr(e, t, n) {
  if (((t = Qs(t)), Qs(e) !== t && n)) throw Error(C(425));
}
function oi() {}
var Ho = null,
  Wo = null;
function Ko(e, t) {
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
var Qo = typeof setTimeout == "function" ? setTimeout : void 0,
  tp = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Gs = typeof Promise == "function" ? Promise : void 0,
  np =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Gs < "u"
      ? function (e) {
          return Gs.resolve(null).then(e).catch(rp);
        }
      : Qo;
function rp(e) {
  setTimeout(function () {
    throw e;
  });
}
function so(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), nr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  nr(t);
}
function kt(e) {
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
function Ys(e) {
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
var jn = Math.random().toString(36).slice(2),
  Ze = "__reactFiber$" + jn,
  sr = "__reactProps$" + jn,
  at = "__reactContainer$" + jn,
  Go = "__reactEvents$" + jn,
  ip = "__reactListeners$" + jn,
  op = "__reactHandles$" + jn;
function zt(e) {
  var t = e[Ze];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[at] || n[Ze])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Ys(e); e !== null; ) {
          if ((n = e[Ze])) return n;
          e = Ys(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function vr(e) {
  return (
    (e = e[Ze] || e[at]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function nn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(C(33));
}
function _i(e) {
  return e[sr] || null;
}
var Yo = [],
  rn = -1;
function Rt(e) {
  return { current: e };
}
function Y(e) {
  0 > rn || ((e.current = Yo[rn]), (Yo[rn] = null), rn--);
}
function Q(e, t) {
  rn++, (Yo[rn] = e.current), (e.current = t);
}
var Ot = {},
  me = Rt(Ot),
  je = Rt(!1),
  Ut = Ot;
function yn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Ot;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Le(e) {
  return (e = e.childContextTypes), e != null;
}
function li() {
  Y(je), Y(me);
}
function Xs(e, t, n) {
  if (me.current !== Ot) throw Error(C(168));
  Q(me, t), Q(je, n);
}
function Ju(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(C(108, bd(e) || "Unknown", i));
  return te({}, n, r);
}
function si(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Ot),
    (Ut = me.current),
    Q(me, e),
    Q(je, je.current),
    !0
  );
}
function Js(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(C(169));
  n
    ? ((e = Ju(e, t, Ut)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Y(je),
      Y(me),
      Q(me, e))
    : Y(je),
    Q(je, n);
}
var rt = null,
  Ti = !1,
  ao = !1;
function Zu(e) {
  rt === null ? (rt = [e]) : rt.push(e);
}
function lp(e) {
  (Ti = !0), Zu(e);
}
function _t() {
  if (!ao && rt !== null) {
    ao = !0;
    var e = 0,
      t = W;
    try {
      var n = rt;
      for (W = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (rt = null), (Ti = !1);
    } catch (i) {
      throw (rt !== null && (rt = rt.slice(e + 1)), Cu(Rl, _t), i);
    } finally {
      (W = t), (ao = !1);
    }
  }
  return null;
}
var on = [],
  ln = 0,
  ai = null,
  ui = 0,
  $e = [],
  Fe = 0,
  bt = null,
  it = 1,
  ot = "";
function Dt(e, t) {
  (on[ln++] = ui), (on[ln++] = ai), (ai = e), (ui = t);
}
function qu(e, t, n) {
  ($e[Fe++] = it), ($e[Fe++] = ot), ($e[Fe++] = bt), (bt = e);
  var r = it;
  e = ot;
  var i = 32 - Qe(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - Qe(t) + i;
  if (30 < o) {
    var l = i - (i % 5);
    (o = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (i -= l),
      (it = (1 << (32 - Qe(t) + i)) | (n << i) | r),
      (ot = o + e);
  } else (it = (1 << o) | (n << i) | r), (ot = e);
}
function Al(e) {
  e.return !== null && (Dt(e, 1), qu(e, 1, 0));
}
function Bl(e) {
  for (; e === ai; )
    (ai = on[--ln]), (on[ln] = null), (ui = on[--ln]), (on[ln] = null);
  for (; e === bt; )
    (bt = $e[--Fe]),
      ($e[Fe] = null),
      (ot = $e[--Fe]),
      ($e[Fe] = null),
      (it = $e[--Fe]),
      ($e[Fe] = null);
}
var Te = null,
  _e = null,
  Z = !1,
  Ke = null;
function ec(e, t) {
  var n = Ie(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Zs(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Te = e), (_e = kt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Te = e), (_e = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = bt !== null ? { id: it, overflow: ot } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ie(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Te = e),
            (_e = null),
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
  if (Z) {
    var t = _e;
    if (t) {
      var n = t;
      if (!Zs(e, t)) {
        if (Xo(e)) throw Error(C(418));
        t = kt(n.nextSibling);
        var r = Te;
        t && Zs(e, t)
          ? ec(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Z = !1), (Te = e));
      }
    } else {
      if (Xo(e)) throw Error(C(418));
      (e.flags = (e.flags & -4097) | 2), (Z = !1), (Te = e);
    }
  }
}
function qs(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Te = e;
}
function _r(e) {
  if (e !== Te) return !1;
  if (!Z) return qs(e), (Z = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Ko(e.type, e.memoizedProps))),
    t && (t = _e))
  ) {
    if (Xo(e)) throw (tc(), Error(C(418)));
    for (; t; ) ec(e, t), (t = kt(t.nextSibling));
  }
  if ((qs(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(C(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              _e = kt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      _e = null;
    }
  } else _e = Te ? kt(e.stateNode.nextSibling) : null;
  return !0;
}
function tc() {
  for (var e = _e; e; ) e = kt(e.nextSibling);
}
function vn() {
  (_e = Te = null), (Z = !1);
}
function Ul(e) {
  Ke === null ? (Ke = [e]) : Ke.push(e);
}
var sp = dt.ReactCurrentBatchConfig;
function Tn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(C(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(C(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (l) {
            var s = i.refs;
            l === null ? delete s[o] : (s[o] = l);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(C(284));
    if (!n._owner) throw Error(C(290, e));
  }
  return e;
}
function Tr(e, t) {
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
function ea(e) {
  var t = e._init;
  return t(e._payload);
}
function nc(e) {
  function t(g, d) {
    if (e) {
      var p = g.deletions;
      p === null ? ((g.deletions = [d]), (g.flags |= 16)) : p.push(d);
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
  function i(g, d) {
    return (g = jt(g, d)), (g.index = 0), (g.sibling = null), g;
  }
  function o(g, d, p) {
    return (
      (g.index = p),
      e
        ? ((p = g.alternate),
          p !== null
            ? ((p = p.index), p < d ? ((g.flags |= 2), d) : p)
            : ((g.flags |= 2), d))
        : ((g.flags |= 1048576), d)
    );
  }
  function l(g) {
    return e && g.alternate === null && (g.flags |= 2), g;
  }
  function s(g, d, p, x) {
    return d === null || d.tag !== 6
      ? ((d = mo(p, g.mode, x)), (d.return = g), d)
      : ((d = i(d, p)), (d.return = g), d);
  }
  function a(g, d, p, x) {
    var S = p.type;
    return S === Zt
      ? h(g, d, p.props.children, x, p.key)
      : d !== null &&
        (d.elementType === S ||
          (typeof S == "object" &&
            S !== null &&
            S.$$typeof === pt &&
            ea(S) === d.type))
      ? ((x = i(d, p.props)), (x.ref = Tn(g, d, p)), (x.return = g), x)
      : ((x = Yr(p.type, p.key, p.props, null, g.mode, x)),
        (x.ref = Tn(g, d, p)),
        (x.return = g),
        x);
  }
  function u(g, d, p, x) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== p.containerInfo ||
      d.stateNode.implementation !== p.implementation
      ? ((d = yo(p, g.mode, x)), (d.return = g), d)
      : ((d = i(d, p.children || [])), (d.return = g), d);
  }
  function h(g, d, p, x, S) {
    return d === null || d.tag !== 7
      ? ((d = At(p, g.mode, x, S)), (d.return = g), d)
      : ((d = i(d, p)), (d.return = g), d);
  }
  function f(g, d, p) {
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return (d = mo("" + d, g.mode, p)), (d.return = g), d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Sr:
          return (
            (p = Yr(d.type, d.key, d.props, null, g.mode, p)),
            (p.ref = Tn(g, null, d)),
            (p.return = g),
            p
          );
        case Jt:
          return (d = yo(d, g.mode, p)), (d.return = g), d;
        case pt:
          var x = d._init;
          return f(g, x(d._payload), p);
      }
      if (Fn(d) || Ln(d))
        return (d = At(d, g.mode, p, null)), (d.return = g), d;
      Tr(g, d);
    }
    return null;
  }
  function m(g, d, p, x) {
    var S = d !== null ? d.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return S !== null ? null : s(g, d, "" + p, x);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Sr:
          return p.key === S ? a(g, d, p, x) : null;
        case Jt:
          return p.key === S ? u(g, d, p, x) : null;
        case pt:
          return (S = p._init), m(g, d, S(p._payload), x);
      }
      if (Fn(p) || Ln(p)) return S !== null ? null : h(g, d, p, x, null);
      Tr(g, p);
    }
    return null;
  }
  function y(g, d, p, x, S) {
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return (g = g.get(p) || null), s(d, g, "" + x, S);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Sr:
          return (g = g.get(x.key === null ? p : x.key) || null), a(d, g, x, S);
        case Jt:
          return (g = g.get(x.key === null ? p : x.key) || null), u(d, g, x, S);
        case pt:
          var E = x._init;
          return y(g, d, p, E(x._payload), S);
      }
      if (Fn(x) || Ln(x)) return (g = g.get(p) || null), h(d, g, x, S, null);
      Tr(d, x);
    }
    return null;
  }
  function v(g, d, p, x) {
    for (
      var S = null, E = null, L = d, j = (d = 0), D = null;
      L !== null && j < p.length;
      j++
    ) {
      L.index > j ? ((D = L), (L = null)) : (D = L.sibling);
      var _ = m(g, L, p[j], x);
      if (_ === null) {
        L === null && (L = D);
        break;
      }
      e && L && _.alternate === null && t(g, L),
        (d = o(_, d, j)),
        E === null ? (S = _) : (E.sibling = _),
        (E = _),
        (L = D);
    }
    if (j === p.length) return n(g, L), Z && Dt(g, j), S;
    if (L === null) {
      for (; j < p.length; j++)
        (L = f(g, p[j], x)),
          L !== null &&
            ((d = o(L, d, j)), E === null ? (S = L) : (E.sibling = L), (E = L));
      return Z && Dt(g, j), S;
    }
    for (L = r(g, L); j < p.length; j++)
      (D = y(L, g, j, p[j], x)),
        D !== null &&
          (e && D.alternate !== null && L.delete(D.key === null ? j : D.key),
          (d = o(D, d, j)),
          E === null ? (S = D) : (E.sibling = D),
          (E = D));
    return (
      e &&
        L.forEach(function (ne) {
          return t(g, ne);
        }),
      Z && Dt(g, j),
      S
    );
  }
  function w(g, d, p, x) {
    var S = Ln(p);
    if (typeof S != "function") throw Error(C(150));
    if (((p = S.call(p)), p == null)) throw Error(C(151));
    for (
      var E = (S = null), L = d, j = (d = 0), D = null, _ = p.next();
      L !== null && !_.done;
      j++, _ = p.next()
    ) {
      L.index > j ? ((D = L), (L = null)) : (D = L.sibling);
      var ne = m(g, L, _.value, x);
      if (ne === null) {
        L === null && (L = D);
        break;
      }
      e && L && ne.alternate === null && t(g, L),
        (d = o(ne, d, j)),
        E === null ? (S = ne) : (E.sibling = ne),
        (E = ne),
        (L = D);
    }
    if (_.done) return n(g, L), Z && Dt(g, j), S;
    if (L === null) {
      for (; !_.done; j++, _ = p.next())
        (_ = f(g, _.value, x)),
          _ !== null &&
            ((d = o(_, d, j)), E === null ? (S = _) : (E.sibling = _), (E = _));
      return Z && Dt(g, j), S;
    }
    for (L = r(g, L); !_.done; j++, _ = p.next())
      (_ = y(L, g, j, _.value, x)),
        _ !== null &&
          (e && _.alternate !== null && L.delete(_.key === null ? j : _.key),
          (d = o(_, d, j)),
          E === null ? (S = _) : (E.sibling = _),
          (E = _));
    return (
      e &&
        L.forEach(function (I) {
          return t(g, I);
        }),
      Z && Dt(g, j),
      S
    );
  }
  function T(g, d, p, x) {
    if (
      (typeof p == "object" &&
        p !== null &&
        p.type === Zt &&
        p.key === null &&
        (p = p.props.children),
      typeof p == "object" && p !== null)
    ) {
      switch (p.$$typeof) {
        case Sr:
          e: {
            for (var S = p.key, E = d; E !== null; ) {
              if (E.key === S) {
                if (((S = p.type), S === Zt)) {
                  if (E.tag === 7) {
                    n(g, E.sibling),
                      (d = i(E, p.props.children)),
                      (d.return = g),
                      (g = d);
                    break e;
                  }
                } else if (
                  E.elementType === S ||
                  (typeof S == "object" &&
                    S !== null &&
                    S.$$typeof === pt &&
                    ea(S) === E.type)
                ) {
                  n(g, E.sibling),
                    (d = i(E, p.props)),
                    (d.ref = Tn(g, E, p)),
                    (d.return = g),
                    (g = d);
                  break e;
                }
                n(g, E);
                break;
              } else t(g, E);
              E = E.sibling;
            }
            p.type === Zt
              ? ((d = At(p.props.children, g.mode, x, p.key)),
                (d.return = g),
                (g = d))
              : ((x = Yr(p.type, p.key, p.props, null, g.mode, x)),
                (x.ref = Tn(g, d, p)),
                (x.return = g),
                (g = x));
          }
          return l(g);
        case Jt:
          e: {
            for (E = p.key; d !== null; ) {
              if (d.key === E)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === p.containerInfo &&
                  d.stateNode.implementation === p.implementation
                ) {
                  n(g, d.sibling),
                    (d = i(d, p.children || [])),
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
            (d = yo(p, g.mode, x)), (d.return = g), (g = d);
          }
          return l(g);
        case pt:
          return (E = p._init), T(g, d, E(p._payload), x);
      }
      if (Fn(p)) return v(g, d, p, x);
      if (Ln(p)) return w(g, d, p, x);
      Tr(g, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        d !== null && d.tag === 6
          ? (n(g, d.sibling), (d = i(d, p)), (d.return = g), (g = d))
          : (n(g, d), (d = mo(p, g.mode, x)), (d.return = g), (g = d)),
        l(g))
      : n(g, d);
  }
  return T;
}
var xn = nc(!0),
  rc = nc(!1),
  ci = Rt(null),
  di = null,
  sn = null,
  bl = null;
function Vl() {
  bl = sn = di = null;
}
function Hl(e) {
  var t = ci.current;
  Y(ci), (e._currentValue = t);
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
function hn(e, t) {
  (di = e),
    (bl = sn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ee = !0), (e.firstContext = null));
}
function Be(e) {
  var t = e._currentValue;
  if (bl !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), sn === null)) {
      if (di === null) throw Error(C(308));
      (sn = e), (di.dependencies = { lanes: 0, firstContext: e });
    } else sn = sn.next = e;
  return t;
}
var $t = null;
function Wl(e) {
  $t === null ? ($t = [e]) : $t.push(e);
}
function ic(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Wl(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    ut(e, r)
  );
}
function ut(e, t) {
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
var ht = !1;
function Kl(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function oc(e, t) {
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
function lt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Ct(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), V & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      ut(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Wl(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    ut(e, n)
  );
}
function Vr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), _l(e, n);
  }
}
function ta(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
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
        o === null ? (i = o = l) : (o = o.next = l), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
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
function fi(e, t, n, r) {
  var i = e.updateQueue;
  ht = !1;
  var o = i.firstBaseUpdate,
    l = i.lastBaseUpdate,
    s = i.shared.pending;
  if (s !== null) {
    i.shared.pending = null;
    var a = s,
      u = a.next;
    (a.next = null), l === null ? (o = u) : (l.next = u), (l = a);
    var h = e.alternate;
    h !== null &&
      ((h = h.updateQueue),
      (s = h.lastBaseUpdate),
      s !== l &&
        (s === null ? (h.firstBaseUpdate = u) : (s.next = u),
        (h.lastBaseUpdate = a)));
  }
  if (o !== null) {
    var f = i.baseState;
    (l = 0), (h = u = a = null), (s = o);
    do {
      var m = s.lane,
        y = s.eventTime;
      if ((r & m) === m) {
        h !== null &&
          (h = h.next =
            {
              eventTime: y,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var v = e,
            w = s;
          switch (((m = t), (y = n), w.tag)) {
            case 1:
              if (((v = w.payload), typeof v == "function")) {
                f = v.call(y, f, m);
                break e;
              }
              f = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = w.payload),
                (m = typeof v == "function" ? v.call(y, f, m) : v),
                m == null)
              )
                break e;
              f = te({}, f, m);
              break e;
            case 2:
              ht = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (m = i.effects),
          m === null ? (i.effects = [s]) : m.push(s));
      } else
        (y = {
          eventTime: y,
          lane: m,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          h === null ? ((u = h = y), (a = f)) : (h = h.next = y),
          (l |= m);
      if (((s = s.next), s === null)) {
        if (((s = i.shared.pending), s === null)) break;
        (m = s),
          (s = m.next),
          (m.next = null),
          (i.lastBaseUpdate = m),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (h === null && (a = f),
      (i.baseState = a),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = h),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (l |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (Ht |= l), (e.lanes = l), (e.memoizedState = f);
  }
}
function na(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(C(191, i));
        i.call(r);
      }
    }
}
var xr = {},
  tt = Rt(xr),
  ar = Rt(xr),
  ur = Rt(xr);
function Ft(e) {
  if (e === xr) throw Error(C(174));
  return e;
}
function Ql(e, t) {
  switch ((Q(ur, t), Q(ar, e), Q(tt, xr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : To(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = To(t, e));
  }
  Y(tt), Q(tt, t);
}
function wn() {
  Y(tt), Y(ar), Y(ur);
}
function lc(e) {
  Ft(ur.current);
  var t = Ft(tt.current),
    n = To(t, e.type);
  t !== n && (Q(ar, e), Q(tt, n));
}
function Gl(e) {
  ar.current === e && (Y(tt), Y(ar));
}
var q = Rt(0);
function pi(e) {
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
var uo = [];
function Yl() {
  for (var e = 0; e < uo.length; e++)
    uo[e]._workInProgressVersionPrimary = null;
  uo.length = 0;
}
var Hr = dt.ReactCurrentDispatcher,
  co = dt.ReactCurrentBatchConfig,
  Vt = 0,
  ee = null,
  le = null,
  ae = null,
  hi = !1,
  Wn = !1,
  cr = 0,
  ap = 0;
function pe() {
  throw Error(C(321));
}
function Xl(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ye(e[n], t[n])) return !1;
  return !0;
}
function Jl(e, t, n, r, i, o) {
  if (
    ((Vt = o),
    (ee = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Hr.current = e === null || e.memoizedState === null ? fp : pp),
    (e = n(r, i)),
    Wn)
  ) {
    o = 0;
    do {
      if (((Wn = !1), (cr = 0), 25 <= o)) throw Error(C(301));
      (o += 1),
        (ae = le = null),
        (t.updateQueue = null),
        (Hr.current = hp),
        (e = n(r, i));
    } while (Wn);
  }
  if (
    ((Hr.current = gi),
    (t = le !== null && le.next !== null),
    (Vt = 0),
    (ae = le = ee = null),
    (hi = !1),
    t)
  )
    throw Error(C(300));
  return e;
}
function Zl() {
  var e = cr !== 0;
  return (cr = 0), e;
}
function Je() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ae === null ? (ee.memoizedState = ae = e) : (ae = ae.next = e), ae;
}
function Ue() {
  if (le === null) {
    var e = ee.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = le.next;
  var t = ae === null ? ee.memoizedState : ae.next;
  if (t !== null) (ae = t), (le = e);
  else {
    if (e === null) throw Error(C(310));
    (le = e),
      (e = {
        memoizedState: le.memoizedState,
        baseState: le.baseState,
        baseQueue: le.baseQueue,
        queue: le.queue,
        next: null,
      }),
      ae === null ? (ee.memoizedState = ae = e) : (ae = ae.next = e);
  }
  return ae;
}
function dr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function fo(e) {
  var t = Ue(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = le,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var l = i.next;
      (i.next = o.next), (o.next = l);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var s = (l = null),
      a = null,
      u = o;
    do {
      var h = u.lane;
      if ((Vt & h) === h)
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
          lane: h,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((s = a = f), (l = r)) : (a = a.next = f),
          (ee.lanes |= h),
          (Ht |= h);
      }
      u = u.next;
    } while (u !== null && u !== o);
    a === null ? (l = r) : (a.next = s),
      Ye(r, t.memoizedState) || (Ee = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (ee.lanes |= o), (Ht |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function po(e) {
  var t = Ue(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var l = (i = i.next);
    do (o = e(o, l.action)), (l = l.next);
    while (l !== i);
    Ye(o, t.memoizedState) || (Ee = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function sc() {}
function ac(e, t) {
  var n = ee,
    r = Ue(),
    i = t(),
    o = !Ye(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (Ee = !0)),
    (r = r.queue),
    ql(dc.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (ae !== null && ae.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      fr(9, cc.bind(null, n, r, i, t), void 0, null),
      ue === null)
    )
      throw Error(C(349));
    Vt & 30 || uc(n, t, i);
  }
  return i;
}
function uc(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ee.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ee.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function cc(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), fc(t) && pc(e);
}
function dc(e, t, n) {
  return n(function () {
    fc(t) && pc(e);
  });
}
function fc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ye(e, n);
  } catch {
    return !0;
  }
}
function pc(e) {
  var t = ut(e, 1);
  t !== null && Ge(t, e, 1, -1);
}
function ra(e) {
  var t = Je();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: dr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = dp.bind(null, ee, e)),
    [t.memoizedState, e]
  );
}
function fr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ee.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ee.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function hc() {
  return Ue().memoizedState;
}
function Wr(e, t, n, r) {
  var i = Je();
  (ee.flags |= e),
    (i.memoizedState = fr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Di(e, t, n, r) {
  var i = Ue();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (le !== null) {
    var l = le.memoizedState;
    if (((o = l.destroy), r !== null && Xl(r, l.deps))) {
      i.memoizedState = fr(t, n, o, r);
      return;
    }
  }
  (ee.flags |= e), (i.memoizedState = fr(1 | t, n, o, r));
}
function ia(e, t) {
  return Wr(8390656, 8, e, t);
}
function ql(e, t) {
  return Di(2048, 8, e, t);
}
function gc(e, t) {
  return Di(4, 2, e, t);
}
function mc(e, t) {
  return Di(4, 4, e, t);
}
function yc(e, t) {
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
function vc(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Di(4, 4, yc.bind(null, t, e), n)
  );
}
function es() {}
function xc(e, t) {
  var n = Ue();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Xl(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function wc(e, t) {
  var n = Ue();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Xl(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Sc(e, t, n) {
  return Vt & 21
    ? (Ye(n, t) || ((n = ju()), (ee.lanes |= n), (Ht |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ee = !0)), (e.memoizedState = n));
}
function up(e, t) {
  var n = W;
  (W = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = co.transition;
  co.transition = {};
  try {
    e(!1), t();
  } finally {
    (W = n), (co.transition = r);
  }
}
function kc() {
  return Ue().memoizedState;
}
function cp(e, t, n) {
  var r = Et(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Cc(e))
  )
    Nc(t, n);
  else if (((n = ic(e, t, n, r)), n !== null)) {
    var i = ve();
    Ge(n, e, r, i), Ec(n, t, r);
  }
}
function dp(e, t, n) {
  var r = Et(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Cc(e)) Nc(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var l = t.lastRenderedState,
          s = o(l, n);
        if (((i.hasEagerState = !0), (i.eagerState = s), Ye(s, l))) {
          var a = t.interleaved;
          a === null
            ? ((i.next = i), Wl(t))
            : ((i.next = a.next), (a.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = ic(e, t, i, r)),
      n !== null && ((i = ve()), Ge(n, e, r, i), Ec(n, t, r));
  }
}
function Cc(e) {
  var t = e.alternate;
  return e === ee || (t !== null && t === ee);
}
function Nc(e, t) {
  Wn = hi = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Ec(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), _l(e, n);
  }
}
var gi = {
    readContext: Be,
    useCallback: pe,
    useContext: pe,
    useEffect: pe,
    useImperativeHandle: pe,
    useInsertionEffect: pe,
    useLayoutEffect: pe,
    useMemo: pe,
    useReducer: pe,
    useRef: pe,
    useState: pe,
    useDebugValue: pe,
    useDeferredValue: pe,
    useTransition: pe,
    useMutableSource: pe,
    useSyncExternalStore: pe,
    useId: pe,
    unstable_isNewReconciler: !1,
  },
  fp = {
    readContext: Be,
    useCallback: function (e, t) {
      return (Je().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Be,
    useEffect: ia,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Wr(4194308, 4, yc.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Wr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Wr(4, 2, e, t);
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
        (e = e.dispatch = cp.bind(null, ee, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Je();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: ra,
    useDebugValue: es,
    useDeferredValue: function (e) {
      return (Je().memoizedState = e);
    },
    useTransition: function () {
      var e = ra(!1),
        t = e[0];
      return (e = up.bind(null, e[1])), (Je().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ee,
        i = Je();
      if (Z) {
        if (n === void 0) throw Error(C(407));
        n = n();
      } else {
        if (((n = t()), ue === null)) throw Error(C(349));
        Vt & 30 || uc(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        ia(dc.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        fr(9, cc.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Je(),
        t = ue.identifierPrefix;
      if (Z) {
        var n = ot,
          r = it;
        (n = (r & ~(1 << (32 - Qe(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = cr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = ap++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  pp = {
    readContext: Be,
    useCallback: xc,
    useContext: Be,
    useEffect: ql,
    useImperativeHandle: vc,
    useInsertionEffect: gc,
    useLayoutEffect: mc,
    useMemo: wc,
    useReducer: fo,
    useRef: hc,
    useState: function () {
      return fo(dr);
    },
    useDebugValue: es,
    useDeferredValue: function (e) {
      var t = Ue();
      return Sc(t, le.memoizedState, e);
    },
    useTransition: function () {
      var e = fo(dr)[0],
        t = Ue().memoizedState;
      return [e, t];
    },
    useMutableSource: sc,
    useSyncExternalStore: ac,
    useId: kc,
    unstable_isNewReconciler: !1,
  },
  hp = {
    readContext: Be,
    useCallback: xc,
    useContext: Be,
    useEffect: ql,
    useImperativeHandle: vc,
    useInsertionEffect: gc,
    useLayoutEffect: mc,
    useMemo: wc,
    useReducer: po,
    useRef: hc,
    useState: function () {
      return po(dr);
    },
    useDebugValue: es,
    useDeferredValue: function (e) {
      var t = Ue();
      return le === null ? (t.memoizedState = e) : Sc(t, le.memoizedState, e);
    },
    useTransition: function () {
      var e = po(dr)[0],
        t = Ue().memoizedState;
      return [e, t];
    },
    useMutableSource: sc,
    useSyncExternalStore: ac,
    useId: kc,
    unstable_isNewReconciler: !1,
  };
function He(e, t) {
  if (e && e.defaultProps) {
    (t = te({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function qo(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : te({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Mi = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Gt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ve(),
      i = Et(e),
      o = lt(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Ct(e, o, i)),
      t !== null && (Ge(t, e, i, r), Vr(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ve(),
      i = Et(e),
      o = lt(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Ct(e, o, i)),
      t !== null && (Ge(t, e, i, r), Vr(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ve(),
      r = Et(e),
      i = lt(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Ct(e, i, r)),
      t !== null && (Ge(t, e, r, n), Vr(t, e, r));
  },
};
function oa(e, t, n, r, i, o, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !ir(n, r) || !ir(i, o)
      : !0
  );
}
function jc(e, t, n) {
  var r = !1,
    i = Ot,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Be(o))
      : ((i = Le(t) ? Ut : me.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? yn(e, i) : Ot)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Mi),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function la(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Mi.enqueueReplaceState(t, t.state, null);
}
function el(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), Kl(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = Be(o))
    : ((o = Le(t) ? Ut : me.current), (i.context = yn(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (qo(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Mi.enqueueReplaceState(i, i.state, null),
      fi(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Sn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Ud(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function ho(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function tl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var gp = typeof WeakMap == "function" ? WeakMap : Map;
function Lc(e, t, n) {
  (n = lt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      yi || ((yi = !0), (dl = r)), tl(e, t);
    }),
    n
  );
}
function Oc(e, t, n) {
  (n = lt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        tl(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        tl(e, t),
          typeof r != "function" &&
            (Nt === null ? (Nt = new Set([this])) : Nt.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: l !== null ? l : "",
        });
      }),
    n
  );
}
function sa(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new gp();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = Pp.bind(null, e, t, n)), t.then(e, e));
}
function aa(e) {
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
function ua(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = lt(-1, 1)), (t.tag = 2), Ct(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var mp = dt.ReactCurrentOwner,
  Ee = !1;
function ye(e, t, n, r) {
  t.child = e === null ? rc(t, null, n, r) : xn(t, e.child, n, r);
}
function ca(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    hn(t, i),
    (r = Jl(e, t, n, r, o, i)),
    (n = Zl()),
    e !== null && !Ee
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        ct(e, t, i))
      : (Z && n && Al(t), (t.flags |= 1), ye(e, t, r, i), t.child)
  );
}
function da(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !as(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Pc(e, t, o, r, i))
      : ((e = Yr(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var l = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : ir), n(l, r) && e.ref === t.ref)
    )
      return ct(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = jt(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Pc(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (ir(o, r) && e.ref === t.ref)
      if (((Ee = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (Ee = !0);
      else return (t.lanes = e.lanes), ct(e, t, i);
  }
  return nl(e, t, n, r, i);
}
function Rc(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Q(un, Re),
        (Re |= n);
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
          Q(un, Re),
          (Re |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        Q(un, Re),
        (Re |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      Q(un, Re),
      (Re |= r);
  return ye(e, t, i, n), t.child;
}
function _c(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function nl(e, t, n, r, i) {
  var o = Le(n) ? Ut : me.current;
  return (
    (o = yn(t, o)),
    hn(t, i),
    (n = Jl(e, t, n, r, o, i)),
    (r = Zl()),
    e !== null && !Ee
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        ct(e, t, i))
      : (Z && r && Al(t), (t.flags |= 1), ye(e, t, n, i), t.child)
  );
}
function fa(e, t, n, r, i) {
  if (Le(n)) {
    var o = !0;
    si(t);
  } else o = !1;
  if ((hn(t, i), t.stateNode === null))
    Kr(e, t), jc(t, n, r), el(t, n, r, i), (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      s = t.memoizedProps;
    l.props = s;
    var a = l.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Be(u))
      : ((u = Le(n) ? Ut : me.current), (u = yn(t, u)));
    var h = n.getDerivedStateFromProps,
      f =
        typeof h == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((s !== r || a !== u) && la(t, l, r, u)),
      (ht = !1);
    var m = t.memoizedState;
    (l.state = m),
      fi(t, r, l, i),
      (a = t.memoizedState),
      s !== r || m !== a || je.current || ht
        ? (typeof h == "function" && (qo(t, n, h, r), (a = t.memoizedState)),
          (s = ht || oa(t, n, s, r, m, a, u))
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
      oc(e, t),
      (s = t.memoizedProps),
      (u = t.type === t.elementType ? s : He(t.type, s)),
      (l.props = u),
      (f = t.pendingProps),
      (m = l.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = Be(a))
        : ((a = Le(n) ? Ut : me.current), (a = yn(t, a)));
    var y = n.getDerivedStateFromProps;
    (h =
      typeof y == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((s !== f || m !== a) && la(t, l, r, a)),
      (ht = !1),
      (m = t.memoizedState),
      (l.state = m),
      fi(t, r, l, i);
    var v = t.memoizedState;
    s !== f || m !== v || je.current || ht
      ? (typeof y == "function" && (qo(t, n, y, r), (v = t.memoizedState)),
        (u = ht || oa(t, n, u, r, m, v, a) || !1)
          ? (h ||
              (typeof l.UNSAFE_componentWillUpdate != "function" &&
                typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" &&
                l.componentWillUpdate(r, v, a),
              typeof l.UNSAFE_componentWillUpdate == "function" &&
                l.UNSAFE_componentWillUpdate(r, v, a)),
            typeof l.componentDidUpdate == "function" && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != "function" ||
              (s === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (l.props = r),
        (l.state = v),
        (l.context = a),
        (r = u))
      : (typeof l.componentDidUpdate != "function" ||
          (s === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return rl(e, t, n, r, o, i);
}
function rl(e, t, n, r, i, o) {
  _c(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return i && Js(t, n, !1), ct(e, t, o);
  (r = t.stateNode), (mp.current = t);
  var s =
    l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = xn(t, e.child, null, o)), (t.child = xn(t, null, s, o)))
      : ye(e, t, s, o),
    (t.memoizedState = r.state),
    i && Js(t, n, !0),
    t.child
  );
}
function Tc(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Xs(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Xs(e, t.context, !1),
    Ql(e, t.containerInfo);
}
function pa(e, t, n, r, i) {
  return vn(), Ul(i), (t.flags |= 256), ye(e, t, n, r), t.child;
}
var il = { dehydrated: null, treeContext: null, retryLane: 0 };
function ol(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Dc(e, t, n) {
  var r = t.pendingProps,
    i = q.current,
    o = !1,
    l = (t.flags & 128) !== 0,
    s;
  if (
    ((s = l) ||
      (s = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    s
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    Q(q, i & 1),
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
        : ((l = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (l = { mode: "hidden", children: l }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = l))
                : (o = Fi(l, r, 0, null)),
              (e = At(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = ol(n)),
              (t.memoizedState = il),
              e)
            : ts(t, l))
    );
  if (((i = e.memoizedState), i !== null && ((s = i.dehydrated), s !== null)))
    return yp(e, t, l, r, s, i, n);
  if (o) {
    (o = r.fallback), (l = t.mode), (i = e.child), (s = i.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(l & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = jt(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      s !== null ? (o = jt(s, o)) : ((o = At(o, l, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? ol(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (o.memoizedState = l),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = il),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = jt(o, { mode: "visible", children: r.children })),
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
function ts(e, t) {
  return (
    (t = Fi({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Dr(e, t, n, r) {
  return (
    r !== null && Ul(r),
    xn(t, e.child, null, n),
    (e = ts(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function yp(e, t, n, r, i, o, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ho(Error(C(422)))), Dr(e, t, l, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = Fi({ mode: "visible", children: r.children }, i, 0, null)),
        (o = At(o, i, l, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && xn(t, e.child, null, l),
        (t.child.memoizedState = ol(l)),
        (t.memoizedState = il),
        o);
  if (!(t.mode & 1)) return Dr(e, t, l, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (o = Error(C(419))), (r = ho(o, r, void 0)), Dr(e, t, l, r);
  }
  if (((s = (l & e.childLanes) !== 0), Ee || s)) {
    if (((r = ue), r !== null)) {
      switch (l & -l) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
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
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | l) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), ut(e, i), Ge(r, e, i, -1));
    }
    return ss(), (r = ho(Error(C(421)))), Dr(e, t, l, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Rp.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (_e = kt(i.nextSibling)),
      (Te = t),
      (Z = !0),
      (Ke = null),
      e !== null &&
        (($e[Fe++] = it),
        ($e[Fe++] = ot),
        ($e[Fe++] = bt),
        (it = e.id),
        (ot = e.overflow),
        (bt = t)),
      (t = ts(t, r.children)),
      (t.flags |= 4096),
      t);
}
function ha(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Zo(e.return, t, n);
}
function go(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function Mc(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((ye(e, t, r.children, n), (r = q.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ha(e, n, t);
        else if (e.tag === 19) ha(e, n, t);
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
  if ((Q(q, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && pi(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          go(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && pi(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        go(t, !0, n, null, o);
        break;
      case "together":
        go(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Kr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function ct(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Ht |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(C(153));
  if (t.child !== null) {
    for (
      e = t.child, n = jt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = jt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function vp(e, t, n) {
  switch (t.tag) {
    case 3:
      Tc(t), vn();
      break;
    case 5:
      lc(t);
      break;
    case 1:
      Le(t.type) && si(t);
      break;
    case 4:
      Ql(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      Q(ci, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Q(q, q.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Dc(e, t, n)
          : (Q(q, q.current & 1),
            (e = ct(e, t, n)),
            e !== null ? e.sibling : null);
      Q(q, q.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Mc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        Q(q, q.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Rc(e, t, n);
  }
  return ct(e, t, n);
}
var zc, ll, $c, Fc;
zc = function (e, t) {
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
ll = function () {};
$c = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), Ft(tt.current);
    var o = null;
    switch (n) {
      case "input":
        (i = Oo(e, i)), (r = Oo(e, r)), (o = []);
        break;
      case "select":
        (i = te({}, i, { value: void 0 })),
          (r = te({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = _o(e, i)), (r = _o(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = oi);
    }
    Do(n, r);
    var l;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var s = i[u];
          for (l in s) s.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Jn.hasOwnProperty(u)
              ? o || (o = [])
              : (o = o || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((s = i != null ? i[u] : void 0),
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
          } else n || (o || (o = []), o.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (s = s ? s.__html : void 0),
              a != null && s !== a && (o = o || []).push(u, a))
            : u === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (o = o || []).push(u, "" + a)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Jn.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && G("scroll", e),
                  o || s === a || (o = []))
                : (o = o || []).push(u, a));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Fc = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Dn(e, t) {
  if (!Z)
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
function he(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function xp(e, t, n) {
  var r = t.pendingProps;
  switch ((Bl(t), t.tag)) {
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
      return he(t), null;
    case 1:
      return Le(t.type) && li(), he(t), null;
    case 3:
      return (
        (r = t.stateNode),
        wn(),
        Y(je),
        Y(me),
        Yl(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (_r(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ke !== null && (hl(Ke), (Ke = null)))),
        ll(e, t),
        he(t),
        null
      );
    case 5:
      Gl(t);
      var i = Ft(ur.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        $c(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(C(166));
          return he(t), null;
        }
        if (((e = Ft(tt.current)), _r(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Ze] = t), (r[sr] = o), (e = (t.mode & 1) !== 0), n)) {
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
              for (i = 0; i < An.length; i++) G(An[i], r);
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
              Cs(r, o), G("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                G("invalid", r);
              break;
            case "textarea":
              Es(r, o), G("invalid", r);
          }
          Do(n, o), (i = null);
          for (var l in o)
            if (o.hasOwnProperty(l)) {
              var s = o[l];
              l === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (o.suppressHydrationWarning !== !0 &&
                      Rr(r.textContent, s, e),
                    (i = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (o.suppressHydrationWarning !== !0 &&
                      Rr(r.textContent, s, e),
                    (i = ["children", "" + s]))
                : Jn.hasOwnProperty(l) &&
                  s != null &&
                  l === "onScroll" &&
                  G("scroll", r);
            }
          switch (n) {
            case "input":
              kr(r), Ns(r, o, !0);
              break;
            case "textarea":
              kr(r), js(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = oi);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (l = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = du(n)),
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
            (e[Ze] = t),
            (e[sr] = r),
            zc(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = Mo(n, r)), n)) {
              case "dialog":
                G("cancel", e), G("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                G("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < An.length; i++) G(An[i], e);
                i = r;
                break;
              case "source":
                G("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                G("error", e), G("load", e), (i = r);
                break;
              case "details":
                G("toggle", e), (i = r);
                break;
              case "input":
                Cs(e, r), (i = Oo(e, r)), G("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = te({}, r, { value: void 0 })),
                  G("invalid", e);
                break;
              case "textarea":
                Es(e, r), (i = _o(e, r)), G("invalid", e);
                break;
              default:
                i = r;
            }
            Do(n, i), (s = i);
            for (o in s)
              if (s.hasOwnProperty(o)) {
                var a = s[o];
                o === "style"
                  ? hu(e, a)
                  : o === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && fu(e, a))
                  : o === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && Zn(e, a)
                    : typeof a == "number" && Zn(e, "" + a)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Jn.hasOwnProperty(o)
                      ? a != null && o === "onScroll" && G("scroll", e)
                      : a != null && El(e, o, a, l));
              }
            switch (n) {
              case "input":
                kr(e), Ns(e, r, !1);
                break;
              case "textarea":
                kr(e), js(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Lt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? cn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      cn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = oi);
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
      return he(t), null;
    case 6:
      if (e && t.stateNode != null) Fc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(C(166));
        if (((n = Ft(ur.current)), Ft(tt.current), _r(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ze] = t),
            (o = r.nodeValue !== n) && ((e = Te), e !== null))
          )
            switch (e.tag) {
              case 3:
                Rr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Rr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ze] = t),
            (t.stateNode = r);
      }
      return he(t), null;
    case 13:
      if (
        (Y(q),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Z && _e !== null && t.mode & 1 && !(t.flags & 128))
          tc(), vn(), (t.flags |= 98560), (o = !1);
        else if (((o = _r(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(C(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(C(317));
            o[Ze] = t;
          } else
            vn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          he(t), (o = !1);
        } else Ke !== null && (hl(Ke), (Ke = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || q.current & 1 ? se === 0 && (se = 3) : ss())),
          t.updateQueue !== null && (t.flags |= 4),
          he(t),
          null);
    case 4:
      return (
        wn(), ll(e, t), e === null && or(t.stateNode.containerInfo), he(t), null
      );
    case 10:
      return Hl(t.type._context), he(t), null;
    case 17:
      return Le(t.type) && li(), he(t), null;
    case 19:
      if ((Y(q), (o = t.memoizedState), o === null)) return he(t), null;
      if (((r = (t.flags & 128) !== 0), (l = o.rendering), l === null))
        if (r) Dn(o, !1);
        else {
          if (se !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = pi(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    Dn(o, !1),
                    r = l.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (l = o.alternate),
                    l === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = l.childLanes),
                        (o.lanes = l.lanes),
                        (o.child = l.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = l.memoizedProps),
                        (o.memoizedState = l.memoizedState),
                        (o.updateQueue = l.updateQueue),
                        (o.type = l.type),
                        (e = l.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return Q(q, (q.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            ie() > kn &&
            ((t.flags |= 128), (r = !0), Dn(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = pi(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Dn(o, !0),
              o.tail === null && o.tailMode === "hidden" && !l.alternate && !Z)
            )
              return he(t), null;
          } else
            2 * ie() - o.renderingStartTime > kn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Dn(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = o.last),
            n !== null ? (n.sibling = l) : (t.child = l),
            (o.last = l));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = ie()),
          (t.sibling = null),
          (n = q.current),
          Q(q, r ? (n & 1) | 2 : n & 1),
          t)
        : (he(t), null);
    case 22:
    case 23:
      return (
        ls(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Re & 1073741824 && (he(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : he(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(C(156, t.tag));
}
function wp(e, t) {
  switch ((Bl(t), t.tag)) {
    case 1:
      return (
        Le(t.type) && li(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        wn(),
        Y(je),
        Y(me),
        Yl(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Gl(t), null;
    case 13:
      if ((Y(q), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(C(340));
        vn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Y(q), null;
    case 4:
      return wn(), null;
    case 10:
      return Hl(t.type._context), null;
    case 22:
    case 23:
      return ls(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Mr = !1,
  ge = !1,
  Sp = typeof WeakSet == "function" ? WeakSet : Set,
  R = null;
function an(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        re(e, t, r);
      }
    else n.current = null;
}
function sl(e, t, n) {
  try {
    n();
  } catch (r) {
    re(e, t, r);
  }
}
var ga = !1;
function kp(e, t) {
  if (((Ho = ni), (e = bu()), Il(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var l = 0,
            s = -1,
            a = -1,
            u = 0,
            h = 0,
            f = e,
            m = null;
          t: for (;;) {
            for (
              var y;
              f !== n || (i !== 0 && f.nodeType !== 3) || (s = l + i),
                f !== o || (r !== 0 && f.nodeType !== 3) || (a = l + r),
                f.nodeType === 3 && (l += f.nodeValue.length),
                (y = f.firstChild) !== null;

            )
              (m = f), (f = y);
            for (;;) {
              if (f === e) break t;
              if (
                (m === n && ++u === i && (s = l),
                m === o && ++h === r && (a = l),
                (y = f.nextSibling) !== null)
              )
                break;
              (f = m), (m = f.parentNode);
            }
            f = y;
          }
          n = s === -1 || a === -1 ? null : { start: s, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Wo = { focusedElem: e, selectionRange: n }, ni = !1, R = t; R !== null; )
    if (((t = R), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (R = e);
    else
      for (; R !== null; ) {
        t = R;
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
                  var w = v.memoizedProps,
                    T = v.memoizedState,
                    g = t.stateNode,
                    d = g.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : He(t.type, w),
                      T
                    );
                  g.__reactInternalSnapshotBeforeUpdate = d;
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
                throw Error(C(163));
            }
        } catch (x) {
          re(t, t.return, x);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (R = e);
          break;
        }
        R = t.return;
      }
  return (v = ga), (ga = !1), v;
}
function Kn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && sl(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function zi(e, t) {
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
function al(e) {
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
function Ic(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Ic(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ze], delete t[sr], delete t[Go], delete t[ip], delete t[op])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Ac(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ma(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ac(e.return)) return null;
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
function ul(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = oi));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ul(e, t, n), e = e.sibling; e !== null; ) ul(e, t, n), (e = e.sibling);
}
function cl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (cl(e, t, n), e = e.sibling; e !== null; ) cl(e, t, n), (e = e.sibling);
}
var ce = null,
  We = !1;
function ft(e, t, n) {
  for (n = n.child; n !== null; ) Bc(e, t, n), (n = n.sibling);
}
function Bc(e, t, n) {
  if (et && typeof et.onCommitFiberUnmount == "function")
    try {
      et.onCommitFiberUnmount(Li, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ge || an(n, t);
    case 6:
      var r = ce,
        i = We;
      (ce = null),
        ft(e, t, n),
        (ce = r),
        (We = i),
        ce !== null &&
          (We
            ? ((e = ce),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ce.removeChild(n.stateNode));
      break;
    case 18:
      ce !== null &&
        (We
          ? ((e = ce),
            (n = n.stateNode),
            e.nodeType === 8
              ? so(e.parentNode, n)
              : e.nodeType === 1 && so(e, n),
            nr(e))
          : so(ce, n.stateNode));
      break;
    case 4:
      (r = ce),
        (i = We),
        (ce = n.stateNode.containerInfo),
        (We = !0),
        ft(e, t, n),
        (ce = r),
        (We = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ge &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            l = o.destroy;
          (o = o.tag),
            l !== void 0 && (o & 2 || o & 4) && sl(n, t, l),
            (i = i.next);
        } while (i !== r);
      }
      ft(e, t, n);
      break;
    case 1:
      if (
        !ge &&
        (an(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          re(n, t, s);
        }
      ft(e, t, n);
      break;
    case 21:
      ft(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ge = (r = ge) || n.memoizedState !== null), ft(e, t, n), (ge = r))
        : ft(e, t, n);
      break;
    default:
      ft(e, t, n);
  }
}
function ya(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Sp()),
      t.forEach(function (r) {
        var i = _p.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Ve(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          l = t,
          s = l;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (ce = s.stateNode), (We = !1);
              break e;
            case 3:
              (ce = s.stateNode.containerInfo), (We = !0);
              break e;
            case 4:
              (ce = s.stateNode.containerInfo), (We = !0);
              break e;
          }
          s = s.return;
        }
        if (ce === null) throw Error(C(160));
        Bc(o, l, i), (ce = null), (We = !1);
        var a = i.alternate;
        a !== null && (a.return = null), (i.return = null);
      } catch (u) {
        re(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Uc(t, e), (t = t.sibling);
}
function Uc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ve(t, e), Xe(e), r & 4)) {
        try {
          Kn(3, e, e.return), zi(3, e);
        } catch (w) {
          re(e, e.return, w);
        }
        try {
          Kn(5, e, e.return);
        } catch (w) {
          re(e, e.return, w);
        }
      }
      break;
    case 1:
      Ve(t, e), Xe(e), r & 512 && n !== null && an(n, n.return);
      break;
    case 5:
      if (
        (Ve(t, e),
        Xe(e),
        r & 512 && n !== null && an(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Zn(i, "");
        } catch (w) {
          re(e, e.return, w);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          l = n !== null ? n.memoizedProps : o,
          s = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            s === "input" && o.type === "radio" && o.name != null && uu(i, o),
              Mo(s, l);
            var u = Mo(s, o);
            for (l = 0; l < a.length; l += 2) {
              var h = a[l],
                f = a[l + 1];
              h === "style"
                ? hu(i, f)
                : h === "dangerouslySetInnerHTML"
                ? fu(i, f)
                : h === "children"
                ? Zn(i, f)
                : El(i, h, f, u);
            }
            switch (s) {
              case "input":
                Po(i, o);
                break;
              case "textarea":
                cu(i, o);
                break;
              case "select":
                var m = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var y = o.value;
                y != null
                  ? cn(i, !!o.multiple, y, !1)
                  : m !== !!o.multiple &&
                    (o.defaultValue != null
                      ? cn(i, !!o.multiple, o.defaultValue, !0)
                      : cn(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[sr] = o;
          } catch (w) {
            re(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((Ve(t, e), Xe(e), r & 4)) {
        if (e.stateNode === null) throw Error(C(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (w) {
          re(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (Ve(t, e), Xe(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          nr(t.containerInfo);
        } catch (w) {
          re(e, e.return, w);
        }
      break;
    case 4:
      Ve(t, e), Xe(e);
      break;
    case 13:
      Ve(t, e),
        Xe(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (is = ie())),
        r & 4 && ya(e);
      break;
    case 22:
      if (
        ((h = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ge = (u = ge) || h), Ve(t, e), (ge = u)) : Ve(t, e),
        Xe(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !h && e.mode & 1)
        )
          for (R = e, h = e.child; h !== null; ) {
            for (f = R = h; R !== null; ) {
              switch (((m = R), (y = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Kn(4, m, m.return);
                  break;
                case 1:
                  an(m, m.return);
                  var v = m.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (w) {
                      re(r, n, w);
                    }
                  }
                  break;
                case 5:
                  an(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    xa(f);
                    continue;
                  }
              }
              y !== null ? ((y.return = m), (R = y)) : xa(f);
            }
            h = h.sibling;
          }
        e: for (h = null, f = e; ; ) {
          if (f.tag === 5) {
            if (h === null) {
              h = f;
              try {
                (i = f.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((s = f.stateNode),
                      (a = f.memoizedProps.style),
                      (l =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (s.style.display = pu("display", l)));
              } catch (w) {
                re(e, e.return, w);
              }
            }
          } else if (f.tag === 6) {
            if (h === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (w) {
                re(e, e.return, w);
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
            h === f && (h = null), (f = f.return);
          }
          h === f && (h = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      Ve(t, e), Xe(e), r & 4 && ya(e);
      break;
    case 21:
      break;
    default:
      Ve(t, e), Xe(e);
  }
}
function Xe(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Ac(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(C(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Zn(i, ""), (r.flags &= -33));
          var o = ma(e);
          cl(e, o, i);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            s = ma(e);
          ul(e, s, l);
          break;
        default:
          throw Error(C(161));
      }
    } catch (a) {
      re(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Cp(e, t, n) {
  (R = e), bc(e);
}
function bc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; R !== null; ) {
    var i = R,
      o = i.child;
    if (i.tag === 22 && r) {
      var l = i.memoizedState !== null || Mr;
      if (!l) {
        var s = i.alternate,
          a = (s !== null && s.memoizedState !== null) || ge;
        s = Mr;
        var u = ge;
        if (((Mr = l), (ge = a) && !u))
          for (R = i; R !== null; )
            (l = R),
              (a = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? wa(i)
                : a !== null
                ? ((a.return = l), (R = a))
                : wa(i);
        for (; o !== null; ) (R = o), bc(o), (o = o.sibling);
        (R = i), (Mr = s), (ge = u);
      }
      va(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (R = o)) : va(e);
  }
}
function va(e) {
  for (; R !== null; ) {
    var t = R;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ge || zi(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ge)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : He(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && na(t, o, r);
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
                na(t, l, n);
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
                  var h = u.memoizedState;
                  if (h !== null) {
                    var f = h.dehydrated;
                    f !== null && nr(f);
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
        ge || (t.flags & 512 && al(t));
      } catch (m) {
        re(t, t.return, m);
      }
    }
    if (t === e) {
      R = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (R = n);
      break;
    }
    R = t.return;
  }
}
function xa(e) {
  for (; R !== null; ) {
    var t = R;
    if (t === e) {
      R = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (R = n);
      break;
    }
    R = t.return;
  }
}
function wa(e) {
  for (; R !== null; ) {
    var t = R;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            zi(4, t);
          } catch (a) {
            re(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              re(t, i, a);
            }
          }
          var o = t.return;
          try {
            al(t);
          } catch (a) {
            re(t, o, a);
          }
          break;
        case 5:
          var l = t.return;
          try {
            al(t);
          } catch (a) {
            re(t, l, a);
          }
      }
    } catch (a) {
      re(t, t.return, a);
    }
    if (t === e) {
      R = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (R = s);
      break;
    }
    R = t.return;
  }
}
var Np = Math.ceil,
  mi = dt.ReactCurrentDispatcher,
  ns = dt.ReactCurrentOwner,
  Ae = dt.ReactCurrentBatchConfig,
  V = 0,
  ue = null,
  oe = null,
  de = 0,
  Re = 0,
  un = Rt(0),
  se = 0,
  pr = null,
  Ht = 0,
  $i = 0,
  rs = 0,
  Qn = null,
  Ne = null,
  is = 0,
  kn = 1 / 0,
  nt = null,
  yi = !1,
  dl = null,
  Nt = null,
  zr = !1,
  vt = null,
  vi = 0,
  Gn = 0,
  fl = null,
  Qr = -1,
  Gr = 0;
function ve() {
  return V & 6 ? ie() : Qr !== -1 ? Qr : (Qr = ie());
}
function Et(e) {
  return e.mode & 1
    ? V & 2 && de !== 0
      ? de & -de
      : sp.transition !== null
      ? (Gr === 0 && (Gr = ju()), Gr)
      : ((e = W),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Du(e.type))),
        e)
    : 1;
}
function Ge(e, t, n, r) {
  if (50 < Gn) throw ((Gn = 0), (fl = null), Error(C(185)));
  mr(e, n, r),
    (!(V & 2) || e !== ue) &&
      (e === ue && (!(V & 2) && ($i |= n), se === 4 && mt(e, de)),
      Oe(e, r),
      n === 1 && V === 0 && !(t.mode & 1) && ((kn = ie() + 500), Ti && _t()));
}
function Oe(e, t) {
  var n = e.callbackNode;
  sf(e, t);
  var r = ti(e, e === ue ? de : 0);
  if (r === 0)
    n !== null && Ps(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ps(n), t === 1))
      e.tag === 0 ? lp(Sa.bind(null, e)) : Zu(Sa.bind(null, e)),
        np(function () {
          !(V & 6) && _t();
        }),
        (n = null);
    else {
      switch (Lu(r)) {
        case 1:
          n = Rl;
          break;
        case 4:
          n = Nu;
          break;
        case 16:
          n = ei;
          break;
        case 536870912:
          n = Eu;
          break;
        default:
          n = ei;
      }
      n = Xc(n, Vc.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Vc(e, t) {
  if (((Qr = -1), (Gr = 0), V & 6)) throw Error(C(327));
  var n = e.callbackNode;
  if (gn() && e.callbackNode !== n) return null;
  var r = ti(e, e === ue ? de : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = xi(e, r);
  else {
    t = r;
    var i = V;
    V |= 2;
    var o = Wc();
    (ue !== e || de !== t) && ((nt = null), (kn = ie() + 500), It(e, t));
    do
      try {
        Lp();
        break;
      } catch (s) {
        Hc(e, s);
      }
    while (!0);
    Vl(),
      (mi.current = o),
      (V = i),
      oe !== null ? (t = 0) : ((ue = null), (de = 0), (t = se));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Ao(e)), i !== 0 && ((r = i), (t = pl(e, i)))), t === 1)
    )
      throw ((n = pr), It(e, 0), mt(e, r), Oe(e, ie()), n);
    if (t === 6) mt(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !Ep(i) &&
          ((t = xi(e, r)),
          t === 2 && ((o = Ao(e)), o !== 0 && ((r = o), (t = pl(e, o)))),
          t === 1))
      )
        throw ((n = pr), It(e, 0), mt(e, r), Oe(e, ie()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(C(345));
        case 2:
          Mt(e, Ne, nt);
          break;
        case 3:
          if (
            (mt(e, r), (r & 130023424) === r && ((t = is + 500 - ie()), 10 < t))
          ) {
            if (ti(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              ve(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Qo(Mt.bind(null, e, Ne, nt), t);
            break;
          }
          Mt(e, Ne, nt);
          break;
        case 4:
          if ((mt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var l = 31 - Qe(r);
            (o = 1 << l), (l = t[l]), l > i && (i = l), (r &= ~o);
          }
          if (
            ((r = i),
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
                : 1960 * Np(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Qo(Mt.bind(null, e, Ne, nt), r);
            break;
          }
          Mt(e, Ne, nt);
          break;
        case 5:
          Mt(e, Ne, nt);
          break;
        default:
          throw Error(C(329));
      }
    }
  }
  return Oe(e, ie()), e.callbackNode === n ? Vc.bind(null, e) : null;
}
function pl(e, t) {
  var n = Qn;
  return (
    e.current.memoizedState.isDehydrated && (It(e, t).flags |= 256),
    (e = xi(e, t)),
    e !== 2 && ((t = Ne), (Ne = n), t !== null && hl(t)),
    e
  );
}
function hl(e) {
  Ne === null ? (Ne = e) : Ne.push.apply(Ne, e);
}
function Ep(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!Ye(o(), i)) return !1;
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
function mt(e, t) {
  for (
    t &= ~rs,
      t &= ~$i,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Qe(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Sa(e) {
  if (V & 6) throw Error(C(327));
  gn();
  var t = ti(e, 0);
  if (!(t & 1)) return Oe(e, ie()), null;
  var n = xi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ao(e);
    r !== 0 && ((t = r), (n = pl(e, r)));
  }
  if (n === 1) throw ((n = pr), It(e, 0), mt(e, t), Oe(e, ie()), n);
  if (n === 6) throw Error(C(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Mt(e, Ne, nt),
    Oe(e, ie()),
    null
  );
}
function os(e, t) {
  var n = V;
  V |= 1;
  try {
    return e(t);
  } finally {
    (V = n), V === 0 && ((kn = ie() + 500), Ti && _t());
  }
}
function Wt(e) {
  vt !== null && vt.tag === 0 && !(V & 6) && gn();
  var t = V;
  V |= 1;
  var n = Ae.transition,
    r = W;
  try {
    if (((Ae.transition = null), (W = 1), e)) return e();
  } finally {
    (W = r), (Ae.transition = n), (V = t), !(V & 6) && _t();
  }
}
function ls() {
  (Re = un.current), Y(un);
}
function It(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), tp(n)), oe !== null))
    for (n = oe.return; n !== null; ) {
      var r = n;
      switch ((Bl(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && li();
          break;
        case 3:
          wn(), Y(je), Y(me), Yl();
          break;
        case 5:
          Gl(r);
          break;
        case 4:
          wn();
          break;
        case 13:
          Y(q);
          break;
        case 19:
          Y(q);
          break;
        case 10:
          Hl(r.type._context);
          break;
        case 22:
        case 23:
          ls();
      }
      n = n.return;
    }
  if (
    ((ue = e),
    (oe = e = jt(e.current, null)),
    (de = Re = t),
    (se = 0),
    (pr = null),
    (rs = $i = Ht = 0),
    (Ne = Qn = null),
    $t !== null)
  ) {
    for (t = 0; t < $t.length; t++)
      if (((n = $t[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var l = o.next;
          (o.next = i), (r.next = l);
        }
        n.pending = r;
      }
    $t = null;
  }
  return e;
}
function Hc(e, t) {
  do {
    var n = oe;
    try {
      if ((Vl(), (Hr.current = gi), hi)) {
        for (var r = ee.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        hi = !1;
      }
      if (
        ((Vt = 0),
        (ae = le = ee = null),
        (Wn = !1),
        (cr = 0),
        (ns.current = null),
        n === null || n.return === null)
      ) {
        (se = 1), (pr = t), (oe = null);
        break;
      }
      e: {
        var o = e,
          l = n.return,
          s = n,
          a = t;
        if (
          ((t = de),
          (s.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            h = s,
            f = h.tag;
          if (!(h.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var m = h.alternate;
            m
              ? ((h.updateQueue = m.updateQueue),
                (h.memoizedState = m.memoizedState),
                (h.lanes = m.lanes))
              : ((h.updateQueue = null), (h.memoizedState = null));
          }
          var y = aa(l);
          if (y !== null) {
            (y.flags &= -257),
              ua(y, l, s, o, t),
              y.mode & 1 && sa(o, u, t),
              (t = y),
              (a = u);
            var v = t.updateQueue;
            if (v === null) {
              var w = new Set();
              w.add(a), (t.updateQueue = w);
            } else v.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              sa(o, u, t), ss();
              break e;
            }
            a = Error(C(426));
          }
        } else if (Z && s.mode & 1) {
          var T = aa(l);
          if (T !== null) {
            !(T.flags & 65536) && (T.flags |= 256),
              ua(T, l, s, o, t),
              Ul(Sn(a, s));
            break e;
          }
        }
        (o = a = Sn(a, s)),
          se !== 4 && (se = 2),
          Qn === null ? (Qn = [o]) : Qn.push(o),
          (o = l);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var g = Lc(o, a, t);
              ta(o, g);
              break e;
            case 1:
              s = a;
              var d = o.type,
                p = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof d.getDerivedStateFromError == "function" ||
                  (p !== null &&
                    typeof p.componentDidCatch == "function" &&
                    (Nt === null || !Nt.has(p))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var x = Oc(o, s, t);
                ta(o, x);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Qc(n);
    } catch (S) {
      (t = S), oe === n && n !== null && (oe = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Wc() {
  var e = mi.current;
  return (mi.current = gi), e === null ? gi : e;
}
function ss() {
  (se === 0 || se === 3 || se === 2) && (se = 4),
    ue === null || (!(Ht & 268435455) && !($i & 268435455)) || mt(ue, de);
}
function xi(e, t) {
  var n = V;
  V |= 2;
  var r = Wc();
  (ue !== e || de !== t) && ((nt = null), It(e, t));
  do
    try {
      jp();
      break;
    } catch (i) {
      Hc(e, i);
    }
  while (!0);
  if ((Vl(), (V = n), (mi.current = r), oe !== null)) throw Error(C(261));
  return (ue = null), (de = 0), se;
}
function jp() {
  for (; oe !== null; ) Kc(oe);
}
function Lp() {
  for (; oe !== null && !Jd(); ) Kc(oe);
}
function Kc(e) {
  var t = Yc(e.alternate, e, Re);
  (e.memoizedProps = e.pendingProps),
    t === null ? Qc(e) : (oe = t),
    (ns.current = null);
}
function Qc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = wp(n, t)), n !== null)) {
        (n.flags &= 32767), (oe = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (se = 6), (oe = null);
        return;
      }
    } else if (((n = xp(n, t, Re)), n !== null)) {
      oe = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      oe = t;
      return;
    }
    oe = t = e;
  } while (t !== null);
  se === 0 && (se = 5);
}
function Mt(e, t, n) {
  var r = W,
    i = Ae.transition;
  try {
    (Ae.transition = null), (W = 1), Op(e, t, n, r);
  } finally {
    (Ae.transition = i), (W = r);
  }
  return null;
}
function Op(e, t, n, r) {
  do gn();
  while (vt !== null);
  if (V & 6) throw Error(C(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(C(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (af(e, o),
    e === ue && ((oe = ue = null), (de = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      zr ||
      ((zr = !0),
      Xc(ei, function () {
        return gn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Ae.transition), (Ae.transition = null);
    var l = W;
    W = 1;
    var s = V;
    (V |= 4),
      (ns.current = null),
      kp(e, n),
      Uc(n, e),
      Gf(Wo),
      (ni = !!Ho),
      (Wo = Ho = null),
      (e.current = n),
      Cp(n),
      Zd(),
      (V = s),
      (W = l),
      (Ae.transition = o);
  } else e.current = n;
  if (
    (zr && ((zr = !1), (vt = e), (vi = i)),
    (o = e.pendingLanes),
    o === 0 && (Nt = null),
    tf(n.stateNode),
    Oe(e, ie()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (yi) throw ((yi = !1), (e = dl), (dl = null), e);
  return (
    vi & 1 && e.tag !== 0 && gn(),
    (o = e.pendingLanes),
    o & 1 ? (e === fl ? Gn++ : ((Gn = 0), (fl = e))) : (Gn = 0),
    _t(),
    null
  );
}
function gn() {
  if (vt !== null) {
    var e = Lu(vi),
      t = Ae.transition,
      n = W;
    try {
      if (((Ae.transition = null), (W = 16 > e ? 16 : e), vt === null))
        var r = !1;
      else {
        if (((e = vt), (vt = null), (vi = 0), V & 6)) throw Error(C(331));
        var i = V;
        for (V |= 4, R = e.current; R !== null; ) {
          var o = R,
            l = o.child;
          if (R.flags & 16) {
            var s = o.deletions;
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var u = s[a];
                for (R = u; R !== null; ) {
                  var h = R;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Kn(8, h, o);
                  }
                  var f = h.child;
                  if (f !== null) (f.return = h), (R = f);
                  else
                    for (; R !== null; ) {
                      h = R;
                      var m = h.sibling,
                        y = h.return;
                      if ((Ic(h), h === u)) {
                        R = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = y), (R = m);
                        break;
                      }
                      R = y;
                    }
                }
              }
              var v = o.alternate;
              if (v !== null) {
                var w = v.child;
                if (w !== null) {
                  v.child = null;
                  do {
                    var T = w.sibling;
                    (w.sibling = null), (w = T);
                  } while (w !== null);
                }
              }
              R = o;
            }
          }
          if (o.subtreeFlags & 2064 && l !== null) (l.return = o), (R = l);
          else
            e: for (; R !== null; ) {
              if (((o = R), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Kn(9, o, o.return);
                }
              var g = o.sibling;
              if (g !== null) {
                (g.return = o.return), (R = g);
                break e;
              }
              R = o.return;
            }
        }
        var d = e.current;
        for (R = d; R !== null; ) {
          l = R;
          var p = l.child;
          if (l.subtreeFlags & 2064 && p !== null) (p.return = l), (R = p);
          else
            e: for (l = d; R !== null; ) {
              if (((s = R), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      zi(9, s);
                  }
                } catch (S) {
                  re(s, s.return, S);
                }
              if (s === l) {
                R = null;
                break e;
              }
              var x = s.sibling;
              if (x !== null) {
                (x.return = s.return), (R = x);
                break e;
              }
              R = s.return;
            }
        }
        if (
          ((V = i), _t(), et && typeof et.onPostCommitFiberRoot == "function")
        )
          try {
            et.onPostCommitFiberRoot(Li, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (W = n), (Ae.transition = t);
    }
  }
  return !1;
}
function ka(e, t, n) {
  (t = Sn(n, t)),
    (t = Lc(e, t, 1)),
    (e = Ct(e, t, 1)),
    (t = ve()),
    e !== null && (mr(e, 1, t), Oe(e, t));
}
function re(e, t, n) {
  if (e.tag === 3) ka(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        ka(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Nt === null || !Nt.has(r)))
        ) {
          (e = Sn(n, e)),
            (e = Oc(t, e, 1)),
            (t = Ct(t, e, 1)),
            (e = ve()),
            t !== null && (mr(t, 1, e), Oe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Pp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ve()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ue === e &&
      (de & n) === n &&
      (se === 4 || (se === 3 && (de & 130023424) === de && 500 > ie() - is)
        ? It(e, 0)
        : (rs |= n)),
    Oe(e, t);
}
function Gc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Er), (Er <<= 1), !(Er & 130023424) && (Er = 4194304))
      : (t = 1));
  var n = ve();
  (e = ut(e, t)), e !== null && (mr(e, t, n), Oe(e, n));
}
function Rp(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Gc(e, n);
}
function _p(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(C(314));
  }
  r !== null && r.delete(t), Gc(e, n);
}
var Yc;
Yc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || je.current) Ee = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ee = !1), vp(e, t, n);
      Ee = !!(e.flags & 131072);
    }
  else (Ee = !1), Z && t.flags & 1048576 && qu(t, ui, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Kr(e, t), (e = t.pendingProps);
      var i = yn(t, me.current);
      hn(t, n), (i = Jl(null, t, r, e, i, n));
      var o = Zl();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Le(r) ? ((o = !0), si(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Kl(t),
            (i.updater = Mi),
            (t.stateNode = i),
            (i._reactInternals = t),
            el(t, r, e, n),
            (t = rl(null, t, r, !0, o, n)))
          : ((t.tag = 0), Z && o && Al(t), ye(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Kr(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = Dp(r)),
          (e = He(r, e)),
          i)
        ) {
          case 0:
            t = nl(null, t, r, e, n);
            break e;
          case 1:
            t = fa(null, t, r, e, n);
            break e;
          case 11:
            t = ca(null, t, r, e, n);
            break e;
          case 14:
            t = da(null, t, r, He(r.type, e), n);
            break e;
        }
        throw Error(C(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : He(r, i)),
        nl(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : He(r, i)),
        fa(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Tc(t), e === null)) throw Error(C(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          oc(e, t),
          fi(t, r, null, n);
        var l = t.memoizedState;
        if (((r = l.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = Sn(Error(C(423)), t)), (t = pa(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Sn(Error(C(424)), t)), (t = pa(e, t, r, n, i));
            break e;
          } else
            for (
              _e = kt(t.stateNode.containerInfo.firstChild),
                Te = t,
                Z = !0,
                Ke = null,
                n = rc(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((vn(), r === i)) {
            t = ct(e, t, n);
            break e;
          }
          ye(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        lc(t),
        e === null && Jo(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (l = i.children),
        Ko(r, i) ? (l = null) : o !== null && Ko(r, o) && (t.flags |= 32),
        _c(e, t),
        ye(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && Jo(t), null;
    case 13:
      return Dc(e, t, n);
    case 4:
      return (
        Ql(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = xn(t, null, r, n)) : ye(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : He(r, i)),
        ca(e, t, r, i, n)
      );
    case 7:
      return ye(e, t, t.pendingProps, n), t.child;
    case 8:
      return ye(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ye(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (l = i.value),
          Q(ci, r._currentValue),
          (r._currentValue = l),
          o !== null)
        )
          if (Ye(o.value, l)) {
            if (o.children === i.children && !je.current) {
              t = ct(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var s = o.dependencies;
              if (s !== null) {
                l = o.child;
                for (var a = s.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (o.tag === 1) {
                      (a = lt(-1, n & -n)), (a.tag = 2);
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var h = u.pending;
                        h === null
                          ? (a.next = a)
                          : ((a.next = h.next), (h.next = a)),
                          (u.pending = a);
                      }
                    }
                    (o.lanes |= n),
                      (a = o.alternate),
                      a !== null && (a.lanes |= n),
                      Zo(o.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (o.tag === 10) l = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((l = o.return), l === null)) throw Error(C(341));
                (l.lanes |= n),
                  (s = l.alternate),
                  s !== null && (s.lanes |= n),
                  Zo(l, n, t),
                  (l = o.sibling);
              } else l = o.child;
              if (l !== null) l.return = o;
              else
                for (l = o; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((o = l.sibling), o !== null)) {
                    (o.return = l.return), (l = o);
                    break;
                  }
                  l = l.return;
                }
              o = l;
            }
        ye(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        hn(t, n),
        (i = Be(i)),
        (r = r(i)),
        (t.flags |= 1),
        ye(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = He(r, t.pendingProps)),
        (i = He(r.type, i)),
        da(e, t, r, i, n)
      );
    case 15:
      return Pc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : He(r, i)),
        Kr(e, t),
        (t.tag = 1),
        Le(r) ? ((e = !0), si(t)) : (e = !1),
        hn(t, n),
        jc(t, r, i),
        el(t, r, i, n),
        rl(null, t, r, !0, e, n)
      );
    case 19:
      return Mc(e, t, n);
    case 22:
      return Rc(e, t, n);
  }
  throw Error(C(156, t.tag));
};
function Xc(e, t) {
  return Cu(e, t);
}
function Tp(e, t, n, r) {
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
function Ie(e, t, n, r) {
  return new Tp(e, t, n, r);
}
function as(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Dp(e) {
  if (typeof e == "function") return as(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Ll)) return 11;
    if (e === Ol) return 14;
  }
  return 2;
}
function jt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ie(e.tag, t, e.key, e.mode)),
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
function Yr(e, t, n, r, i, o) {
  var l = 2;
  if (((r = e), typeof e == "function")) as(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case Zt:
        return At(n.children, i, o, t);
      case jl:
        (l = 8), (i |= 8);
        break;
      case No:
        return (
          (e = Ie(12, n, t, i | 2)), (e.elementType = No), (e.lanes = o), e
        );
      case Eo:
        return (e = Ie(13, n, t, i)), (e.elementType = Eo), (e.lanes = o), e;
      case jo:
        return (e = Ie(19, n, t, i)), (e.elementType = jo), (e.lanes = o), e;
      case lu:
        return Fi(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case iu:
              l = 10;
              break e;
            case ou:
              l = 9;
              break e;
            case Ll:
              l = 11;
              break e;
            case Ol:
              l = 14;
              break e;
            case pt:
              (l = 16), (r = null);
              break e;
          }
        throw Error(C(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ie(l, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function At(e, t, n, r) {
  return (e = Ie(7, e, r, t)), (e.lanes = n), e;
}
function Fi(e, t, n, r) {
  return (
    (e = Ie(22, e, r, t)),
    (e.elementType = lu),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function mo(e, t, n) {
  return (e = Ie(6, e, null, t)), (e.lanes = n), e;
}
function yo(e, t, n) {
  return (
    (t = Ie(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Mp(e, t, n, r, i) {
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
    (this.eventTimes = Xi(0)),
    (this.expirationTimes = Xi(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Xi(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function us(e, t, n, r, i, o, l, s, a) {
  return (
    (e = new Mp(e, t, n, s, a)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Ie(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Kl(o),
    e
  );
}
function zp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Jt,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Jc(e) {
  if (!e) return Ot;
  e = e._reactInternals;
  e: {
    if (Gt(e) !== e || e.tag !== 1) throw Error(C(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Le(t.type)) {
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
    if (Le(n)) return Ju(e, n, t);
  }
  return t;
}
function Zc(e, t, n, r, i, o, l, s, a) {
  return (
    (e = us(n, r, !0, e, i, o, l, s, a)),
    (e.context = Jc(null)),
    (n = e.current),
    (r = ve()),
    (i = Et(n)),
    (o = lt(r, i)),
    (o.callback = t ?? null),
    Ct(n, o, i),
    (e.current.lanes = i),
    mr(e, i, r),
    Oe(e, r),
    e
  );
}
function Ii(e, t, n, r) {
  var i = t.current,
    o = ve(),
    l = Et(i);
  return (
    (n = Jc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = lt(o, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Ct(i, t, l)),
    e !== null && (Ge(e, i, l, o), Vr(e, i, l)),
    l
  );
}
function wi(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ca(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function cs(e, t) {
  Ca(e, t), (e = e.alternate) && Ca(e, t);
}
function $p() {
  return null;
}
var qc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ds(e) {
  this._internalRoot = e;
}
Ai.prototype.render = ds.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(C(409));
  Ii(e, t, null, null);
};
Ai.prototype.unmount = ds.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Wt(function () {
      Ii(null, e, null, null);
    }),
      (t[at] = null);
  }
};
function Ai(e) {
  this._internalRoot = e;
}
Ai.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Ru();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < gt.length && t !== 0 && t < gt[n].priority; n++);
    gt.splice(n, 0, e), n === 0 && Tu(e);
  }
};
function fs(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Bi(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Na() {}
function Fp(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var u = wi(l);
        o.call(u);
      };
    }
    var l = Zc(t, r, e, 0, null, !1, !1, "", Na);
    return (
      (e._reactRootContainer = l),
      (e[at] = l.current),
      or(e.nodeType === 8 ? e.parentNode : e),
      Wt(),
      l
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var u = wi(a);
      s.call(u);
    };
  }
  var a = us(e, 0, !1, null, null, !1, !1, "", Na);
  return (
    (e._reactRootContainer = a),
    (e[at] = a.current),
    or(e.nodeType === 8 ? e.parentNode : e),
    Wt(function () {
      Ii(t, a, n, r);
    }),
    a
  );
}
function Ui(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var l = o;
    if (typeof i == "function") {
      var s = i;
      i = function () {
        var a = wi(l);
        s.call(a);
      };
    }
    Ii(t, l, e, i);
  } else l = Fp(n, t, e, i, r);
  return wi(l);
}
Ou = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = In(t.pendingLanes);
        n !== 0 &&
          (_l(t, n | 1), Oe(t, ie()), !(V & 6) && ((kn = ie() + 500), _t()));
      }
      break;
    case 13:
      Wt(function () {
        var r = ut(e, 1);
        if (r !== null) {
          var i = ve();
          Ge(r, e, 1, i);
        }
      }),
        cs(e, 1);
  }
};
Tl = function (e) {
  if (e.tag === 13) {
    var t = ut(e, 134217728);
    if (t !== null) {
      var n = ve();
      Ge(t, e, 134217728, n);
    }
    cs(e, 134217728);
  }
};
Pu = function (e) {
  if (e.tag === 13) {
    var t = Et(e),
      n = ut(e, t);
    if (n !== null) {
      var r = ve();
      Ge(n, e, t, r);
    }
    cs(e, t);
  }
};
Ru = function () {
  return W;
};
_u = function (e, t) {
  var n = W;
  try {
    return (W = e), t();
  } finally {
    W = n;
  }
};
$o = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Po(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var i = _i(r);
            if (!i) throw Error(C(90));
            au(r), Po(r, i);
          }
        }
      }
      break;
    case "textarea":
      cu(e, n);
      break;
    case "select":
      (t = n.value), t != null && cn(e, !!n.multiple, t, !1);
  }
};
yu = os;
vu = Wt;
var Ip = { usingClientEntryPoint: !1, Events: [vr, nn, _i, gu, mu, os] },
  Mn = {
    findFiberByHostInstance: zt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Ap = {
    bundleType: Mn.bundleType,
    version: Mn.version,
    rendererPackageName: Mn.rendererPackageName,
    rendererConfig: Mn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: dt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Su(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Mn.findFiberByHostInstance || $p,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var $r = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!$r.isDisabled && $r.supportsFiber)
    try {
      (Li = $r.inject(Ap)), (et = $r);
    } catch {}
}
Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ip;
Me.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!fs(t)) throw Error(C(200));
  return zp(e, t, null, n);
};
Me.createRoot = function (e, t) {
  if (!fs(e)) throw Error(C(299));
  var n = !1,
    r = "",
    i = qc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = us(e, 1, !1, null, null, n, !1, r, i)),
    (e[at] = t.current),
    or(e.nodeType === 8 ? e.parentNode : e),
    new ds(t)
  );
};
Me.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(C(188))
      : ((e = Object.keys(e).join(",")), Error(C(268, e)));
  return (e = Su(t)), (e = e === null ? null : e.stateNode), e;
};
Me.flushSync = function (e) {
  return Wt(e);
};
Me.hydrate = function (e, t, n) {
  if (!Bi(t)) throw Error(C(200));
  return Ui(null, e, t, !0, n);
};
Me.hydrateRoot = function (e, t, n) {
  if (!fs(e)) throw Error(C(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    l = qc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = Zc(t, null, e, 1, n ?? null, i, !1, o, l)),
    (e[at] = t.current),
    or(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new Ai(t);
};
Me.render = function (e, t, n) {
  if (!Bi(t)) throw Error(C(200));
  return Ui(null, e, t, !1, n);
};
Me.unmountComponentAtNode = function (e) {
  if (!Bi(e)) throw Error(C(40));
  return e._reactRootContainer
    ? (Wt(function () {
        Ui(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[at] = null);
        });
      }),
      !0)
    : !1;
};
Me.unstable_batchedUpdates = os;
Me.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Bi(n)) throw Error(C(200));
  if (e == null || e._reactInternals === void 0) throw Error(C(38));
  return Ui(e, t, n, !1, r);
};
Me.version = "18.3.1-next-f1338f8080-20240426";
function ed() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ed);
    } catch (e) {
      console.error(e);
    }
}
ed(), (eu.exports = Me);
var Bp = eu.exports,
  td,
  Ea = Bp;
(td = Ea.createRoot), Ea.hydrateRoot;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Up = {
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
 */ const bp = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  be = (e, t) => {
    const n = N.forwardRef(
      (
        {
          color: r = "currentColor",
          size: i = 24,
          strokeWidth: o = 2,
          absoluteStrokeWidth: l,
          className: s = "",
          children: a,
          ...u
        },
        h
      ) =>
        N.createElement(
          "svg",
          {
            ref: h,
            ...Up,
            width: i,
            height: i,
            stroke: r,
            strokeWidth: l ? (Number(o) * 24) / Number(i) : o,
            className: ["lucide", `lucide-${bp(e)}`, s].join(" "),
            ...u,
          },
          [
            ...t.map(([f, m]) => N.createElement(f, m)),
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
 */ const vo = be("ArrowDown", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xo = be("ArrowUp", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Si = be("Camera", [
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
 */ const Vp = be("Focus", [
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
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
 */ const Hp = be("Globe", [
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
 */ const Wp = be("Layers", [
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
 */ const Kp = be("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Qp = be("Package", [
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
 */ const Gp = be("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ja = be("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Yp = be("Trash2", [
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
 */ const ps = be("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  M = (e) => typeof e == "string",
  zn = () => {
    let e, t;
    const n = new Promise((r, i) => {
      (e = r), (t = i);
    });
    return (n.resolve = e), (n.reject = t), n;
  },
  La = (e) => (e == null ? "" : "" + e),
  Xp = (e, t, n) => {
    e.forEach((r) => {
      t[r] && (n[r] = t[r]);
    });
  },
  Jp = /###/g,
  Oa = (e) => (e && e.indexOf("###") > -1 ? e.replace(Jp, ".") : e),
  Pa = (e) => !e || M(e),
  Yn = (e, t, n) => {
    const r = M(t) ? t.split(".") : t;
    let i = 0;
    for (; i < r.length - 1; ) {
      if (Pa(e)) return {};
      const o = Oa(r[i]);
      !e[o] && n && (e[o] = new n()),
        Object.prototype.hasOwnProperty.call(e, o) ? (e = e[o]) : (e = {}),
        ++i;
    }
    return Pa(e) ? {} : { obj: e, k: Oa(r[i]) };
  },
  Ra = (e, t, n) => {
    const { obj: r, k: i } = Yn(e, t, Object);
    if (r !== void 0 || t.length === 1) {
      r[i] = n;
      return;
    }
    let o = t[t.length - 1],
      l = t.slice(0, t.length - 1),
      s = Yn(e, l, Object);
    for (; s.obj === void 0 && l.length; )
      (o = `${l[l.length - 1]}.${o}`),
        (l = l.slice(0, l.length - 1)),
        (s = Yn(e, l, Object)),
        s != null &&
          s.obj &&
          typeof s.obj[`${s.k}.${o}`] < "u" &&
          (s.obj = void 0);
    s.obj[`${s.k}.${o}`] = n;
  },
  Zp = (e, t, n, r) => {
    const { obj: i, k: o } = Yn(e, t, Object);
    (i[o] = i[o] || []), i[o].push(n);
  },
  ki = (e, t) => {
    const { obj: n, k: r } = Yn(e, t);
    if (n && Object.prototype.hasOwnProperty.call(n, r)) return n[r];
  },
  qp = (e, t, n) => {
    const r = ki(e, n);
    return r !== void 0 ? r : ki(t, n);
  },
  nd = (e, t, n) => {
    for (const r in t)
      r !== "__proto__" &&
        r !== "constructor" &&
        (r in e
          ? M(e[r]) ||
            e[r] instanceof String ||
            M(t[r]) ||
            t[r] instanceof String
            ? n && (e[r] = t[r])
            : nd(e[r], t[r], n)
          : (e[r] = t[r]));
    return e;
  },
  Xt = (e) => e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var eh = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;",
};
const th = (e) => (M(e) ? e.replace(/[&<>"'\/]/g, (t) => eh[t]) : e);
class nh {
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
const rh = [" ", ",", "?", "!", ";"],
  ih = new nh(20),
  oh = (e, t, n) => {
    (t = t || ""), (n = n || "");
    const r = rh.filter((l) => t.indexOf(l) < 0 && n.indexOf(l) < 0);
    if (r.length === 0) return !0;
    const i = ih.getRegExp(
      `(${r.map((l) => (l === "?" ? "\\?" : l)).join("|")})`
    );
    let o = !i.test(e);
    if (!o) {
      const l = e.indexOf(n);
      l > 0 && !i.test(e.substring(0, l)) && (o = !0);
    }
    return o;
  },
  gl = (e, t, n = ".") => {
    if (!e) return;
    if (e[t]) return Object.prototype.hasOwnProperty.call(e, t) ? e[t] : void 0;
    const r = t.split(n);
    let i = e;
    for (let o = 0; o < r.length; ) {
      if (!i || typeof i != "object") return;
      let l,
        s = "";
      for (let a = o; a < r.length; ++a)
        if ((a !== o && (s += n), (s += r[a]), (l = i[s]), l !== void 0)) {
          if (
            ["string", "number", "boolean"].indexOf(typeof l) > -1 &&
            a < r.length - 1
          )
            continue;
          o += a - o + 1;
          break;
        }
      i = l;
    }
    return i;
  },
  hr = (e) => (e == null ? void 0 : e.replace("_", "-")),
  lh = {
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
      var n, r;
      (r =
        (n = console == null ? void 0 : console[e]) == null
          ? void 0
          : n.apply) == null || r.call(n, console, t);
    },
  };
class Ci {
  constructor(t, n = {}) {
    this.init(t, n);
  }
  init(t, n = {}) {
    (this.prefix = n.prefix || "i18next:"),
      (this.logger = t || lh),
      (this.options = n),
      (this.debug = n.debug);
  }
  log(...t) {
    return this.forward(t, "log", "", !0);
  }
  warn(...t) {
    return this.forward(t, "warn", "", !0);
  }
  error(...t) {
    return this.forward(t, "error", "");
  }
  deprecate(...t) {
    return this.forward(t, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(t, n, r, i) {
    return i && !this.debug
      ? null
      : (M(t[0]) && (t[0] = `${r}${this.prefix} ${t[0]}`), this.logger[n](t));
  }
  create(t) {
    return new Ci(this.logger, {
      prefix: `${this.prefix}:${t}:`,
      ...this.options,
    });
  }
  clone(t) {
    return (
      (t = t || this.options),
      (t.prefix = t.prefix || this.prefix),
      new Ci(this.logger, t)
    );
  }
}
var qe = new Ci();
class bi {
  constructor() {
    this.observers = {};
  }
  on(t, n) {
    return (
      t.split(" ").forEach((r) => {
        this.observers[r] || (this.observers[r] = new Map());
        const i = this.observers[r].get(n) || 0;
        this.observers[r].set(n, i + 1);
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
  emit(t, ...n) {
    this.observers[t] &&
      Array.from(this.observers[t].entries()).forEach(([i, o]) => {
        for (let l = 0; l < o; l++) i(...n);
      }),
      this.observers["*"] &&
        Array.from(this.observers["*"].entries()).forEach(([i, o]) => {
          for (let l = 0; l < o; l++) i.apply(i, [t, ...n]);
        });
  }
}
class _a extends bi {
  constructor(t, n = { ns: ["translation"], defaultNS: "translation" }) {
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
  getResource(t, n, r, i = {}) {
    var u, h;
    const o =
        i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator,
      l =
        i.ignoreJSONStructure !== void 0
          ? i.ignoreJSONStructure
          : this.options.ignoreJSONStructure;
    let s;
    t.indexOf(".") > -1
      ? (s = t.split("."))
      : ((s = [t, n]),
        r &&
          (Array.isArray(r)
            ? s.push(...r)
            : M(r) && o
            ? s.push(...r.split(o))
            : s.push(r)));
    const a = ki(this.data, s);
    return (
      !a &&
        !n &&
        !r &&
        t.indexOf(".") > -1 &&
        ((t = s[0]), (n = s[1]), (r = s.slice(2).join("."))),
      a || !l || !M(r)
        ? a
        : gl(
            (h = (u = this.data) == null ? void 0 : u[t]) == null
              ? void 0
              : h[n],
            r,
            o
          )
    );
  }
  addResource(t, n, r, i, o = { silent: !1 }) {
    const l =
      o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator;
    let s = [t, n];
    r && (s = s.concat(l ? r.split(l) : r)),
      t.indexOf(".") > -1 && ((s = t.split(".")), (i = n), (n = s[1])),
      this.addNamespaces(n),
      Ra(this.data, s, i),
      o.silent || this.emit("added", t, n, r, i);
  }
  addResources(t, n, r, i = { silent: !1 }) {
    for (const o in r)
      (M(r[o]) || Array.isArray(r[o])) &&
        this.addResource(t, n, o, r[o], { silent: !0 });
    i.silent || this.emit("added", t, n, r);
  }
  addResourceBundle(t, n, r, i, o, l = { silent: !1, skipCopy: !1 }) {
    let s = [t, n];
    t.indexOf(".") > -1 && ((s = t.split(".")), (i = r), (r = n), (n = s[1])),
      this.addNamespaces(n);
    let a = ki(this.data, s) || {};
    l.skipCopy || (r = JSON.parse(JSON.stringify(r))),
      i ? nd(a, r, o) : (a = { ...a, ...r }),
      Ra(this.data, s, a),
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
    return n || (n = this.options.defaultNS), this.getResource(t, n);
  }
  getDataByLanguage(t) {
    return this.data[t];
  }
  hasLanguageSomeTranslations(t) {
    const n = this.getDataByLanguage(t);
    return !!((n && Object.keys(n)) || []).find(
      (i) => n[i] && Object.keys(n[i]).length > 0
    );
  }
  toJSON() {
    return this.data;
  }
}
var rd = {
  processors: {},
  addPostProcessor(e) {
    this.processors[e.name] = e;
  },
  handle(e, t, n, r, i) {
    return (
      e.forEach((o) => {
        var l;
        t =
          ((l = this.processors[o]) == null ? void 0 : l.process(t, n, r, i)) ??
          t;
      }),
      t
    );
  },
};
const id = Symbol("i18next/PATH_KEY");
function sh() {
  const e = [],
    t = Object.create(null);
  let n;
  return (
    (t.get = (r, i) => {
      var o;
      return (
        (o = n == null ? void 0 : n.revoke) == null || o.call(n),
        i === id ? e : (e.push(i), (n = Proxy.revocable(r, t)), n.proxy)
      );
    }),
    Proxy.revocable(Object.create(null), t).proxy
  );
}
function ml(e, t) {
  const { [id]: n } = e(sh());
  return n.join((t == null ? void 0 : t.keySeparator) ?? ".");
}
const Ta = {},
  wo = (e) => !M(e) && typeof e != "boolean" && typeof e != "number";
class Ni extends bi {
  constructor(t, n = {}) {
    super(),
      Xp(
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
      (this.logger = qe.create("translator"));
  }
  changeLanguage(t) {
    t && (this.language = t);
  }
  exists(t, n = { interpolation: {} }) {
    const r = { ...n };
    if (t == null) return !1;
    const i = this.resolve(t, r);
    if ((i == null ? void 0 : i.res) === void 0) return !1;
    const o = wo(i.res);
    return !(r.returnObjects === !1 && o);
  }
  extractFromKey(t, n) {
    let r = n.nsSeparator !== void 0 ? n.nsSeparator : this.options.nsSeparator;
    r === void 0 && (r = ":");
    const i =
      n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator;
    let o = n.ns || this.options.defaultNS || [];
    const l = r && t.indexOf(r) > -1,
      s =
        !this.options.userDefinedKeySeparator &&
        !n.keySeparator &&
        !this.options.userDefinedNsSeparator &&
        !n.nsSeparator &&
        !oh(t, r, i);
    if (l && !s) {
      const a = t.match(this.interpolator.nestingRegexp);
      if (a && a.length > 0) return { key: t, namespaces: M(o) ? [o] : o };
      const u = t.split(r);
      (r !== i || (r === i && this.options.ns.indexOf(u[0]) > -1)) &&
        (o = u.shift()),
        (t = u.join(i));
    }
    return { key: t, namespaces: M(o) ? [o] : o };
  }
  translate(t, n, r) {
    let i = typeof n == "object" ? { ...n } : n;
    if (
      (typeof i != "object" &&
        this.options.overloadTranslationOptionHandler &&
        (i = this.options.overloadTranslationOptionHandler(arguments)),
      typeof i == "object" && (i = { ...i }),
      i || (i = {}),
      t == null)
    )
      return "";
    typeof t == "function" && (t = ml(t, { ...this.options, ...i })),
      Array.isArray(t) || (t = [String(t)]);
    const o =
        i.returnDetails !== void 0
          ? i.returnDetails
          : this.options.returnDetails,
      l =
        i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator,
      { key: s, namespaces: a } = this.extractFromKey(t[t.length - 1], i),
      u = a[a.length - 1];
    let h = i.nsSeparator !== void 0 ? i.nsSeparator : this.options.nsSeparator;
    h === void 0 && (h = ":");
    const f = i.lng || this.language,
      m = i.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if ((f == null ? void 0 : f.toLowerCase()) === "cimode")
      return m
        ? o
          ? {
              res: `${u}${h}${s}`,
              usedKey: s,
              exactUsedKey: s,
              usedLng: f,
              usedNS: u,
              usedParams: this.getUsedParamsDetails(i),
            }
          : `${u}${h}${s}`
        : o
        ? {
            res: s,
            usedKey: s,
            exactUsedKey: s,
            usedLng: f,
            usedNS: u,
            usedParams: this.getUsedParamsDetails(i),
          }
        : s;
    const y = this.resolve(t, i);
    let v = y == null ? void 0 : y.res;
    const w = (y == null ? void 0 : y.usedKey) || s,
      T = (y == null ? void 0 : y.exactUsedKey) || s,
      g = ["[object Number]", "[object Function]", "[object RegExp]"],
      d = i.joinArrays !== void 0 ? i.joinArrays : this.options.joinArrays,
      p = !this.i18nFormat || this.i18nFormat.handleAsObject,
      x = i.count !== void 0 && !M(i.count),
      S = Ni.hasDefaultValue(i),
      E = x ? this.pluralResolver.getSuffix(f, i.count, i) : "",
      L =
        i.ordinal && x
          ? this.pluralResolver.getSuffix(f, i.count, { ordinal: !1 })
          : "",
      j = x && !i.ordinal && i.count === 0,
      D =
        (j && i[`defaultValue${this.options.pluralSeparator}zero`]) ||
        i[`defaultValue${E}`] ||
        i[`defaultValue${L}`] ||
        i.defaultValue;
    let _ = v;
    p && !v && S && (_ = D);
    const ne = wo(_),
      I = Object.prototype.toString.apply(_);
    if (p && _ && ne && g.indexOf(I) < 0 && !(M(d) && Array.isArray(_))) {
      if (!i.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler ||
          this.logger.warn(
            "accessing an object - but returnObjects options is not enabled!"
          );
        const z = this.options.returnedObjectHandler
          ? this.options.returnedObjectHandler(w, _, { ...i, ns: a })
          : `key '${s} (${this.language})' returned an object instead of string.`;
        return o
          ? ((y.res = z), (y.usedParams = this.getUsedParamsDetails(i)), y)
          : z;
      }
      if (l) {
        const z = Array.isArray(_),
          F = z ? [] : {},
          H = z ? T : w;
        for (const X in _)
          if (Object.prototype.hasOwnProperty.call(_, X)) {
            const O = `${H}${l}${X}`;
            S && !v
              ? (F[X] = this.translate(O, {
                  ...i,
                  defaultValue: wo(D) ? D[X] : void 0,
                  joinArrays: !1,
                  ns: a,
                }))
              : (F[X] = this.translate(O, { ...i, joinArrays: !1, ns: a })),
              F[X] === O && (F[X] = _[X]);
          }
        v = F;
      }
    } else if (p && M(d) && Array.isArray(v))
      (v = v.join(d)), v && (v = this.extendTranslation(v, t, i, r));
    else {
      let z = !1,
        F = !1;
      !this.isValidLookup(v) && S && ((z = !0), (v = D)),
        this.isValidLookup(v) || ((F = !0), (v = s));
      const X =
          (i.missingKeyNoValueFallbackToKey ||
            this.options.missingKeyNoValueFallbackToKey) &&
          F
            ? void 0
            : v,
        O = S && D !== v && this.options.updateMissing;
      if (F || z || O) {
        if (
          (this.logger.log(O ? "updateKey" : "missingKey", f, u, s, O ? D : v),
          l)
        ) {
          const B = this.resolve(s, { ...i, keySeparator: !1 });
          B &&
            B.res &&
            this.logger.warn(
              "Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format."
            );
        }
        let k = [];
        const P = this.languageUtils.getFallbackCodes(
          this.options.fallbackLng,
          i.lng || this.language
        );
        if (this.options.saveMissingTo === "fallback" && P && P[0])
          for (let B = 0; B < P.length; B++) k.push(P[B]);
        else
          this.options.saveMissingTo === "all"
            ? (k = this.languageUtils.toResolveHierarchy(
                i.lng || this.language
              ))
            : k.push(i.lng || this.language);
        const $ = (B, K, ke) => {
          var b;
          const A = S && ke !== v ? ke : X;
          this.options.missingKeyHandler
            ? this.options.missingKeyHandler(B, u, K, A, O, i)
            : (b = this.backendConnector) != null &&
              b.saveMissing &&
              this.backendConnector.saveMissing(B, u, K, A, O, i),
            this.emit("missingKey", B, u, K, v);
        };
        this.options.saveMissing &&
          (this.options.saveMissingPlurals && x
            ? k.forEach((B) => {
                const K = this.pluralResolver.getSuffixes(B, i);
                j &&
                  i[`defaultValue${this.options.pluralSeparator}zero`] &&
                  K.indexOf(`${this.options.pluralSeparator}zero`) < 0 &&
                  K.push(`${this.options.pluralSeparator}zero`),
                  K.forEach((ke) => {
                    $([B], s + ke, i[`defaultValue${ke}`] || D);
                  });
              })
            : $(k, s, D));
      }
      (v = this.extendTranslation(v, t, i, y, r)),
        F &&
          v === s &&
          this.options.appendNamespaceToMissingKey &&
          (v = `${u}${h}${s}`),
        (F || z) &&
          this.options.parseMissingKeyHandler &&
          (v = this.options.parseMissingKeyHandler(
            this.options.appendNamespaceToMissingKey ? `${u}${h}${s}` : s,
            z ? v : void 0,
            i
          ));
    }
    return o
      ? ((y.res = v), (y.usedParams = this.getUsedParamsDetails(i)), y)
      : v;
  }
  extendTranslation(t, n, r, i, o) {
    var a, u;
    if ((a = this.i18nFormat) != null && a.parse)
      t = this.i18nFormat.parse(
        t,
        { ...this.options.interpolation.defaultVariables, ...r },
        r.lng || this.language || i.usedLng,
        i.usedNS,
        i.usedKey,
        { resolved: i }
      );
    else if (!r.skipInterpolation) {
      r.interpolation &&
        this.interpolator.init({
          ...r,
          interpolation: { ...this.options.interpolation, ...r.interpolation },
        });
      const h =
        M(t) &&
        (((u = r == null ? void 0 : r.interpolation) == null
          ? void 0
          : u.skipOnVariables) !== void 0
          ? r.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables);
      let f;
      if (h) {
        const y = t.match(this.interpolator.nestingRegexp);
        f = y && y.length;
      }
      let m = r.replace && !M(r.replace) ? r.replace : r;
      if (
        (this.options.interpolation.defaultVariables &&
          (m = { ...this.options.interpolation.defaultVariables, ...m }),
        (t = this.interpolator.interpolate(
          t,
          m,
          r.lng || this.language || i.usedLng,
          r
        )),
        h)
      ) {
        const y = t.match(this.interpolator.nestingRegexp),
          v = y && y.length;
        f < v && (r.nest = !1);
      }
      !r.lng && i && i.res && (r.lng = this.language || i.usedLng),
        r.nest !== !1 &&
          (t = this.interpolator.nest(
            t,
            (...y) =>
              (o == null ? void 0 : o[0]) === y[0] && !r.context
                ? (this.logger.warn(
                    `It seems you are nesting recursively key: ${y[0]} in key: ${n[0]}`
                  ),
                  null)
                : this.translate(...y, n),
            r
          )),
        r.interpolation && this.interpolator.reset();
    }
    const l = r.postProcess || this.options.postProcess,
      s = M(l) ? [l] : l;
    return (
      t != null &&
        s != null &&
        s.length &&
        r.applyPostProcessor !== !1 &&
        (t = rd.handle(
          s,
          t,
          n,
          this.options && this.options.postProcessPassResolved
            ? {
                i18nResolved: {
                  ...i,
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
  resolve(t, n = {}) {
    let r, i, o, l, s;
    return (
      M(t) && (t = [t]),
      t.forEach((a) => {
        if (this.isValidLookup(r)) return;
        const u = this.extractFromKey(a, n),
          h = u.key;
        i = h;
        let f = u.namespaces;
        this.options.fallbackNS && (f = f.concat(this.options.fallbackNS));
        const m = n.count !== void 0 && !M(n.count),
          y = m && !n.ordinal && n.count === 0,
          v =
            n.context !== void 0 &&
            (M(n.context) || typeof n.context == "number") &&
            n.context !== "",
          w = n.lngs
            ? n.lngs
            : this.languageUtils.toResolveHierarchy(
                n.lng || this.language,
                n.fallbackLng
              );
        f.forEach((T) => {
          var g, d;
          this.isValidLookup(r) ||
            ((s = T),
            !Ta[`${w[0]}-${T}`] &&
              (g = this.utils) != null &&
              g.hasLoadedNamespace &&
              !((d = this.utils) != null && d.hasLoadedNamespace(s)) &&
              ((Ta[`${w[0]}-${T}`] = !0),
              this.logger.warn(
                `key "${i}" for languages "${w.join(
                  ", "
                )}" won't get resolved as namespace "${s}" was not yet loaded`,
                "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
              )),
            w.forEach((p) => {
              var E;
              if (this.isValidLookup(r)) return;
              l = p;
              const x = [h];
              if ((E = this.i18nFormat) != null && E.addLookupKeys)
                this.i18nFormat.addLookupKeys(x, h, p, T, n);
              else {
                let L;
                m && (L = this.pluralResolver.getSuffix(p, n.count, n));
                const j = `${this.options.pluralSeparator}zero`,
                  D = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                if (
                  (m &&
                    (n.ordinal &&
                      L.indexOf(D) === 0 &&
                      x.push(h + L.replace(D, this.options.pluralSeparator)),
                    x.push(h + L),
                    y && x.push(h + j)),
                  v)
                ) {
                  const _ = `${h}${this.options.contextSeparator || "_"}${
                    n.context
                  }`;
                  x.push(_),
                    m &&
                      (n.ordinal &&
                        L.indexOf(D) === 0 &&
                        x.push(_ + L.replace(D, this.options.pluralSeparator)),
                      x.push(_ + L),
                      y && x.push(_ + j));
                }
              }
              let S;
              for (; (S = x.pop()); )
                this.isValidLookup(r) ||
                  ((o = S), (r = this.getResource(p, T, S, n)));
            }));
        });
      }),
      { res: r, usedKey: i, exactUsedKey: o, usedLng: l, usedNS: s }
    );
  }
  isValidLookup(t) {
    return (
      t !== void 0 &&
      !(!this.options.returnNull && t === null) &&
      !(!this.options.returnEmptyString && t === "")
    );
  }
  getResource(t, n, r, i = {}) {
    var o;
    return (o = this.i18nFormat) != null && o.getResource
      ? this.i18nFormat.getResource(t, n, r, i)
      : this.resourceStore.getResource(t, n, r, i);
  }
  getUsedParamsDetails(t = {}) {
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
    let i = r ? t.replace : t;
    if (
      (r && typeof t.count < "u" && (i.count = t.count),
      this.options.interpolation.defaultVariables &&
        (i = { ...this.options.interpolation.defaultVariables, ...i }),
      !r)
    ) {
      i = { ...i };
      for (const o of n) delete i[o];
    }
    return i;
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
class Da {
  constructor(t) {
    (this.options = t),
      (this.supportedLngs = this.options.supportedLngs || !1),
      (this.logger = qe.create("languageUtils"));
  }
  getScriptPartFromCode(t) {
    if (((t = hr(t)), !t || t.indexOf("-") < 0)) return null;
    const n = t.split("-");
    return n.length === 2 || (n.pop(), n[n.length - 1].toLowerCase() === "x")
      ? null
      : this.formatLanguageCode(n.join("-"));
  }
  getLanguagePartFromCode(t) {
    if (((t = hr(t)), !t || t.indexOf("-") < 0)) return t;
    const n = t.split("-");
    return this.formatLanguageCode(n[0]);
  }
  formatLanguageCode(t) {
    if (M(t) && t.indexOf("-") > -1) {
      let n;
      try {
        n = Intl.getCanonicalLocales(t)[0];
      } catch {}
      return (
        n && this.options.lowerCaseLng && (n = n.toLowerCase()),
        n || (this.options.lowerCaseLng ? t.toLowerCase() : t)
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
        const i = this.formatLanguageCode(r);
        (!this.options.supportedLngs || this.isSupportedCode(i)) && (n = i);
      }),
      !n &&
        this.options.supportedLngs &&
        t.forEach((r) => {
          if (n) return;
          const i = this.getScriptPartFromCode(r);
          if (this.isSupportedCode(i)) return (n = i);
          const o = this.getLanguagePartFromCode(r);
          if (this.isSupportedCode(o)) return (n = o);
          n = this.options.supportedLngs.find((l) => {
            if (l === o) return l;
            if (
              !(l.indexOf("-") < 0 && o.indexOf("-") < 0) &&
              ((l.indexOf("-") > 0 &&
                o.indexOf("-") < 0 &&
                l.substring(0, l.indexOf("-")) === o) ||
                (l.indexOf(o) === 0 && o.length > 1))
            )
              return l;
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
    const r = this.getFallbackCodes(
        (n === !1 ? [] : n) || this.options.fallbackLng || [],
        t
      ),
      i = [],
      o = (l) => {
        l &&
          (this.isSupportedCode(l)
            ? i.push(l)
            : this.logger.warn(
                `rejecting language code not found in supportedLngs: ${l}`
              ));
      };
    return (
      M(t) && (t.indexOf("-") > -1 || t.indexOf("_") > -1)
        ? (this.options.load !== "languageOnly" &&
            o(this.formatLanguageCode(t)),
          this.options.load !== "languageOnly" &&
            this.options.load !== "currentOnly" &&
            o(this.getScriptPartFromCode(t)),
          this.options.load !== "currentOnly" &&
            o(this.getLanguagePartFromCode(t)))
        : M(t) && o(this.formatLanguageCode(t)),
      r.forEach((l) => {
        i.indexOf(l) < 0 && o(this.formatLanguageCode(l));
      }),
      i
    );
  }
}
const Ma = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 },
  za = {
    select: (e) => (e === 1 ? "one" : "other"),
    resolvedOptions: () => ({ pluralCategories: ["one", "other"] }),
  };
class ah {
  constructor(t, n = {}) {
    (this.languageUtils = t),
      (this.options = n),
      (this.logger = qe.create("pluralResolver")),
      (this.pluralRulesCache = {});
  }
  addRule(t, n) {
    this.rules[t] = n;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(t, n = {}) {
    const r = hr(t === "dev" ? "en" : t),
      i = n.ordinal ? "ordinal" : "cardinal",
      o = JSON.stringify({ cleanedCode: r, type: i });
    if (o in this.pluralRulesCache) return this.pluralRulesCache[o];
    let l;
    try {
      l = new Intl.PluralRules(r, { type: i });
    } catch {
      if (!Intl)
        return (
          this.logger.error("No Intl support, please use an Intl polyfill!"), za
        );
      if (!t.match(/-|_/)) return za;
      const a = this.languageUtils.getLanguagePartFromCode(t);
      l = this.getRule(a, n);
    }
    return (this.pluralRulesCache[o] = l), l;
  }
  needsPlural(t, n = {}) {
    let r = this.getRule(t, n);
    return (
      r || (r = this.getRule("dev", n)),
      (r == null ? void 0 : r.resolvedOptions().pluralCategories.length) > 1
    );
  }
  getPluralFormsOfKey(t, n, r = {}) {
    return this.getSuffixes(t, r).map((i) => `${n}${i}`);
  }
  getSuffixes(t, n = {}) {
    let r = this.getRule(t, n);
    return (
      r || (r = this.getRule("dev", n)),
      r
        ? r
            .resolvedOptions()
            .pluralCategories.sort((i, o) => Ma[i] - Ma[o])
            .map(
              (i) =>
                `${this.options.prepend}${
                  n.ordinal ? `ordinal${this.options.prepend}` : ""
                }${i}`
            )
        : []
    );
  }
  getSuffix(t, n, r = {}) {
    const i = this.getRule(t, r);
    return i
      ? `${this.options.prepend}${
          r.ordinal ? `ordinal${this.options.prepend}` : ""
        }${i.select(n)}`
      : (this.logger.warn(`no plural rule found for: ${t}`),
        this.getSuffix("dev", n, r));
  }
}
const $a = (e, t, n, r = ".", i = !0) => {
    let o = qp(e, t, n);
    return (
      !o && i && M(n) && ((o = gl(e, n, r)), o === void 0 && (o = gl(t, n, r))),
      o
    );
  },
  So = (e) => e.replace(/\$/g, "$$$$");
class Fa {
  constructor(t = {}) {
    var n;
    (this.logger = qe.create("interpolator")),
      (this.options = t),
      (this.format =
        ((n = t == null ? void 0 : t.interpolation) == null
          ? void 0
          : n.format) || ((r) => r)),
      this.init(t);
  }
  init(t = {}) {
    t.interpolation || (t.interpolation = { escapeValue: !0 });
    const {
      escape: n,
      escapeValue: r,
      useRawValueToEscape: i,
      prefix: o,
      prefixEscaped: l,
      suffix: s,
      suffixEscaped: a,
      formatSeparator: u,
      unescapeSuffix: h,
      unescapePrefix: f,
      nestingPrefix: m,
      nestingPrefixEscaped: y,
      nestingSuffix: v,
      nestingSuffixEscaped: w,
      nestingOptionsSeparator: T,
      maxReplaces: g,
      alwaysFormat: d,
    } = t.interpolation;
    (this.escape = n !== void 0 ? n : th),
      (this.escapeValue = r !== void 0 ? r : !0),
      (this.useRawValueToEscape = i !== void 0 ? i : !1),
      (this.prefix = o ? Xt(o) : l || "{{"),
      (this.suffix = s ? Xt(s) : a || "}}"),
      (this.formatSeparator = u || ","),
      (this.unescapePrefix = h ? "" : f || "-"),
      (this.unescapeSuffix = this.unescapePrefix ? "" : h || ""),
      (this.nestingPrefix = m ? Xt(m) : y || Xt("$t(")),
      (this.nestingSuffix = v ? Xt(v) : w || Xt(")")),
      (this.nestingOptionsSeparator = T || ","),
      (this.maxReplaces = g || 1e3),
      (this.alwaysFormat = d !== void 0 ? d : !1),
      this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const t = (n, r) =>
      (n == null ? void 0 : n.source) === r
        ? ((n.lastIndex = 0), n)
        : new RegExp(r, "g");
    (this.regexp = t(this.regexp, `${this.prefix}(.+?)${this.suffix}`)),
      (this.regexpUnescape = t(
        this.regexpUnescape,
        `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`
      )),
      (this.nestingRegexp = t(
        this.nestingRegexp,
        `${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`
      ));
  }
  interpolate(t, n, r, i) {
    var y;
    let o, l, s;
    const a =
        (this.options &&
          this.options.interpolation &&
          this.options.interpolation.defaultVariables) ||
        {},
      u = (v) => {
        if (v.indexOf(this.formatSeparator) < 0) {
          const d = $a(
            n,
            a,
            v,
            this.options.keySeparator,
            this.options.ignoreJSONStructure
          );
          return this.alwaysFormat
            ? this.format(d, void 0, r, { ...i, ...n, interpolationkey: v })
            : d;
        }
        const w = v.split(this.formatSeparator),
          T = w.shift().trim(),
          g = w.join(this.formatSeparator).trim();
        return this.format(
          $a(
            n,
            a,
            T,
            this.options.keySeparator,
            this.options.ignoreJSONStructure
          ),
          g,
          r,
          { ...i, ...n, interpolationkey: T }
        );
      };
    this.resetRegExp();
    const h =
        (i == null ? void 0 : i.missingInterpolationHandler) ||
        this.options.missingInterpolationHandler,
      f =
        ((y = i == null ? void 0 : i.interpolation) == null
          ? void 0
          : y.skipOnVariables) !== void 0
          ? i.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables;
    return (
      [
        { regex: this.regexpUnescape, safeValue: (v) => So(v) },
        {
          regex: this.regexp,
          safeValue: (v) => (this.escapeValue ? So(this.escape(v)) : So(v)),
        },
      ].forEach((v) => {
        for (s = 0; (o = v.regex.exec(t)); ) {
          const w = o[1].trim();
          if (((l = u(w)), l === void 0))
            if (typeof h == "function") {
              const g = h(t, o, i);
              l = M(g) ? g : "";
            } else if (i && Object.prototype.hasOwnProperty.call(i, w)) l = "";
            else if (f) {
              l = o[0];
              continue;
            } else
              this.logger.warn(
                `missed to pass in variable ${w} for interpolating ${t}`
              ),
                (l = "");
          else !M(l) && !this.useRawValueToEscape && (l = La(l));
          const T = v.safeValue(l);
          if (
            ((t = t.replace(o[0], T)),
            f
              ? ((v.regex.lastIndex += l.length),
                (v.regex.lastIndex -= o[0].length))
              : (v.regex.lastIndex = 0),
            s++,
            s >= this.maxReplaces)
          )
            break;
        }
      }),
      t
    );
  }
  nest(t, n, r = {}) {
    let i, o, l;
    const s = (a, u) => {
      const h = this.nestingOptionsSeparator;
      if (a.indexOf(h) < 0) return a;
      const f = a.split(new RegExp(`${h}[ ]*{`));
      let m = `{${f[1]}`;
      (a = f[0]), (m = this.interpolate(m, l));
      const y = m.match(/'/g),
        v = m.match(/"/g);
      ((((y == null ? void 0 : y.length) ?? 0) % 2 === 0 && !v) ||
        v.length % 2 !== 0) &&
        (m = m.replace(/'/g, '"'));
      try {
        (l = JSON.parse(m)), u && (l = { ...u, ...l });
      } catch (w) {
        return (
          this.logger.warn(
            `failed parsing options string in nesting for key ${a}`,
            w
          ),
          `${a}${h}${m}`
        );
      }
      return (
        l.defaultValue &&
          l.defaultValue.indexOf(this.prefix) > -1 &&
          delete l.defaultValue,
        a
      );
    };
    for (; (i = this.nestingRegexp.exec(t)); ) {
      let a = [];
      (l = { ...r }),
        (l = l.replace && !M(l.replace) ? l.replace : l),
        (l.applyPostProcessor = !1),
        delete l.defaultValue;
      const u = /{.*}/.test(i[1])
        ? i[1].lastIndexOf("}") + 1
        : i[1].indexOf(this.formatSeparator);
      if (
        (u !== -1 &&
          ((a = i[1]
            .slice(u)
            .split(this.formatSeparator)
            .map((h) => h.trim())
            .filter(Boolean)),
          (i[1] = i[1].slice(0, u))),
        (o = n(s.call(this, i[1].trim(), l), l)),
        o && i[0] === t && !M(o))
      )
        return o;
      M(o) || (o = La(o)),
        o ||
          (this.logger.warn(`missed to resolve ${i[1]} for nesting ${t}`),
          (o = "")),
        a.length &&
          (o = a.reduce(
            (h, f) =>
              this.format(h, f, r.lng, { ...r, interpolationkey: i[1].trim() }),
            o.trim()
          )),
        (t = t.replace(i[0], o)),
        (this.regexp.lastIndex = 0);
    }
    return t;
  }
}
const uh = (e) => {
    let t = e.toLowerCase().trim();
    const n = {};
    if (e.indexOf("(") > -1) {
      const r = e.split("(");
      t = r[0].toLowerCase().trim();
      const i = r[1].substring(0, r[1].length - 1);
      t === "currency" && i.indexOf(":") < 0
        ? n.currency || (n.currency = i.trim())
        : t === "relativetime" && i.indexOf(":") < 0
        ? n.range || (n.range = i.trim())
        : i.split(";").forEach((l) => {
            if (l) {
              const [s, ...a] = l.split(":"),
                u = a
                  .join(":")
                  .trim()
                  .replace(/^'+|'+$/g, ""),
                h = s.trim();
              n[h] || (n[h] = u),
                u === "false" && (n[h] = !1),
                u === "true" && (n[h] = !0),
                isNaN(u) || (n[h] = parseInt(u, 10));
            }
          });
    }
    return { formatName: t, formatOptions: n };
  },
  Ia = (e) => {
    const t = {};
    return (n, r, i) => {
      let o = i;
      i &&
        i.interpolationkey &&
        i.formatParams &&
        i.formatParams[i.interpolationkey] &&
        i[i.interpolationkey] &&
        (o = { ...o, [i.interpolationkey]: void 0 });
      const l = r + JSON.stringify(o);
      let s = t[l];
      return s || ((s = e(hr(r), i)), (t[l] = s)), s(n);
    };
  },
  ch = (e) => (t, n, r) => e(hr(n), r)(t);
class dh {
  constructor(t = {}) {
    (this.logger = qe.create("formatter")), (this.options = t), this.init(t);
  }
  init(t, n = { interpolation: {} }) {
    this.formatSeparator = n.interpolation.formatSeparator || ",";
    const r = n.cacheInBuiltFormats ? Ia : ch;
    this.formats = {
      number: r((i, o) => {
        const l = new Intl.NumberFormat(i, { ...o });
        return (s) => l.format(s);
      }),
      currency: r((i, o) => {
        const l = new Intl.NumberFormat(i, { ...o, style: "currency" });
        return (s) => l.format(s);
      }),
      datetime: r((i, o) => {
        const l = new Intl.DateTimeFormat(i, { ...o });
        return (s) => l.format(s);
      }),
      relativetime: r((i, o) => {
        const l = new Intl.RelativeTimeFormat(i, { ...o });
        return (s) => l.format(s, o.range || "day");
      }),
      list: r((i, o) => {
        const l = new Intl.ListFormat(i, { ...o });
        return (s) => l.format(s);
      }),
    };
  }
  add(t, n) {
    this.formats[t.toLowerCase().trim()] = n;
  }
  addCached(t, n) {
    this.formats[t.toLowerCase().trim()] = Ia(n);
  }
  format(t, n, r, i = {}) {
    const o = n.split(this.formatSeparator);
    if (
      o.length > 1 &&
      o[0].indexOf("(") > 1 &&
      o[0].indexOf(")") < 0 &&
      o.find((s) => s.indexOf(")") > -1)
    ) {
      const s = o.findIndex((a) => a.indexOf(")") > -1);
      o[0] = [o[0], ...o.splice(1, s)].join(this.formatSeparator);
    }
    return o.reduce((s, a) => {
      var f;
      const { formatName: u, formatOptions: h } = uh(a);
      if (this.formats[u]) {
        let m = s;
        try {
          const y =
              ((f = i == null ? void 0 : i.formatParams) == null
                ? void 0
                : f[i.interpolationkey]) || {},
            v = y.locale || y.lng || i.locale || i.lng || r;
          m = this.formats[u](s, v, { ...h, ...i, ...y });
        } catch (y) {
          this.logger.warn(y);
        }
        return m;
      } else this.logger.warn(`there was no format function for ${u}`);
      return s;
    }, t);
  }
}
const fh = (e, t) => {
  e.pending[t] !== void 0 && (delete e.pending[t], e.pendingCount--);
};
class ph extends bi {
  constructor(t, n, r, i = {}) {
    var o, l;
    super(),
      (this.backend = t),
      (this.store = n),
      (this.services = r),
      (this.languageUtils = r.languageUtils),
      (this.options = i),
      (this.logger = qe.create("backendConnector")),
      (this.waitingReads = []),
      (this.maxParallelReads = i.maxParallelReads || 10),
      (this.readingCalls = 0),
      (this.maxRetries = i.maxRetries >= 0 ? i.maxRetries : 5),
      (this.retryTimeout = i.retryTimeout >= 1 ? i.retryTimeout : 350),
      (this.state = {}),
      (this.queue = []),
      (l = (o = this.backend) == null ? void 0 : o.init) == null ||
        l.call(o, r, i.backend, i);
  }
  queueLoad(t, n, r, i) {
    const o = {},
      l = {},
      s = {},
      a = {};
    return (
      t.forEach((u) => {
        let h = !0;
        n.forEach((f) => {
          const m = `${u}|${f}`;
          !r.reload && this.store.hasResourceBundle(u, f)
            ? (this.state[m] = 2)
            : this.state[m] < 0 ||
              (this.state[m] === 1
                ? l[m] === void 0 && (l[m] = !0)
                : ((this.state[m] = 1),
                  (h = !1),
                  l[m] === void 0 && (l[m] = !0),
                  o[m] === void 0 && (o[m] = !0),
                  a[f] === void 0 && (a[f] = !0)));
        }),
          h || (s[u] = !0);
      }),
      (Object.keys(o).length || Object.keys(l).length) &&
        this.queue.push({
          pending: l,
          pendingCount: Object.keys(l).length,
          loaded: {},
          errors: [],
          callback: i,
        }),
      {
        toLoad: Object.keys(o),
        pending: Object.keys(l),
        toLoadLanguages: Object.keys(s),
        toLoadNamespaces: Object.keys(a),
      }
    );
  }
  loaded(t, n, r) {
    const i = t.split("|"),
      o = i[0],
      l = i[1];
    n && this.emit("failedLoading", o, l, n),
      !n &&
        r &&
        this.store.addResourceBundle(o, l, r, void 0, void 0, { skipCopy: !0 }),
      (this.state[t] = n ? -1 : 2),
      n && r && (this.state[t] = 0);
    const s = {};
    this.queue.forEach((a) => {
      Zp(a.loaded, [o], l),
        fh(a, t),
        n && a.errors.push(n),
        a.pendingCount === 0 &&
          !a.done &&
          (Object.keys(a.loaded).forEach((u) => {
            s[u] || (s[u] = {});
            const h = a.loaded[u];
            h.length &&
              h.forEach((f) => {
                s[u][f] === void 0 && (s[u][f] = !0);
              });
          }),
          (a.done = !0),
          a.errors.length ? a.callback(a.errors) : a.callback());
    }),
      this.emit("loaded", s),
      (this.queue = this.queue.filter((a) => !a.done));
  }
  read(t, n, r, i = 0, o = this.retryTimeout, l) {
    if (!t.length) return l(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: t,
        ns: n,
        fcName: r,
        tried: i,
        wait: o,
        callback: l,
      });
      return;
    }
    this.readingCalls++;
    const s = (u, h) => {
        if ((this.readingCalls--, this.waitingReads.length > 0)) {
          const f = this.waitingReads.shift();
          this.read(f.lng, f.ns, f.fcName, f.tried, f.wait, f.callback);
        }
        if (u && h && i < this.maxRetries) {
          setTimeout(() => {
            this.read.call(this, t, n, r, i + 1, o * 2, l);
          }, o);
          return;
        }
        l(u, h);
      },
      a = this.backend[r].bind(this.backend);
    if (a.length === 2) {
      try {
        const u = a(t, n);
        u && typeof u.then == "function"
          ? u.then((h) => s(null, h)).catch(s)
          : s(null, u);
      } catch (u) {
        s(u);
      }
      return;
    }
    return a(t, n, s);
  }
  prepareLoading(t, n, r = {}, i) {
    if (!this.backend)
      return (
        this.logger.warn(
          "No backend was added via i18next.use. Will not load resources."
        ),
        i && i()
      );
    M(t) && (t = this.languageUtils.toResolveHierarchy(t)), M(n) && (n = [n]);
    const o = this.queueLoad(t, n, r, i);
    if (!o.toLoad.length) return o.pending.length || i(), null;
    o.toLoad.forEach((l) => {
      this.loadOne(l);
    });
  }
  load(t, n, r) {
    this.prepareLoading(t, n, {}, r);
  }
  reload(t, n, r) {
    this.prepareLoading(t, n, { reload: !0 }, r);
  }
  loadOne(t, n = "") {
    const r = t.split("|"),
      i = r[0],
      o = r[1];
    this.read(i, o, "read", void 0, void 0, (l, s) => {
      l &&
        this.logger.warn(
          `${n}loading namespace ${o} for language ${i} failed`,
          l
        ),
        !l &&
          s &&
          this.logger.log(`${n}loaded namespace ${o} for language ${i}`, s),
        this.loaded(t, l, s);
    });
  }
  saveMissing(t, n, r, i, o, l = {}, s = () => {}) {
    var a, u, h, f, m;
    if (
      (u = (a = this.services) == null ? void 0 : a.utils) != null &&
      u.hasLoadedNamespace &&
      !(
        (f = (h = this.services) == null ? void 0 : h.utils) != null &&
        f.hasLoadedNamespace(n)
      )
    ) {
      this.logger.warn(
        `did not save key "${r}" as the namespace "${n}" was not yet loaded`,
        "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
      );
      return;
    }
    if (!(r == null || r === "")) {
      if ((m = this.backend) != null && m.create) {
        const y = { ...l, isUpdate: o },
          v = this.backend.create.bind(this.backend);
        if (v.length < 6)
          try {
            let w;
            v.length === 5 ? (w = v(t, n, r, i, y)) : (w = v(t, n, r, i)),
              w && typeof w.then == "function"
                ? w.then((T) => s(null, T)).catch(s)
                : s(null, w);
          } catch (w) {
            s(w);
          }
        else v(t, n, r, i, s, y);
      }
      !t || !t[0] || this.store.addResource(t[0], n, r, i);
    }
  }
}
const Aa = () => ({
    debug: !1,
    initAsync: !0,
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
    cacheInBuiltFormats: !0,
  }),
  Ba = (e) => {
    var t, n;
    return (
      M(e.ns) && (e.ns = [e.ns]),
      M(e.fallbackLng) && (e.fallbackLng = [e.fallbackLng]),
      M(e.fallbackNS) && (e.fallbackNS = [e.fallbackNS]),
      ((n = (t = e.supportedLngs) == null ? void 0 : t.indexOf) == null
        ? void 0
        : n.call(t, "cimode")) < 0 &&
        (e.supportedLngs = e.supportedLngs.concat(["cimode"])),
      typeof e.initImmediate == "boolean" && (e.initAsync = e.initImmediate),
      e
    );
  },
  Fr = () => {},
  hh = (e) => {
    Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((n) => {
      typeof e[n] == "function" && (e[n] = e[n].bind(e));
    });
  };
class Xn extends bi {
  constructor(t = {}, n) {
    if (
      (super(),
      (this.options = Ba(t)),
      (this.services = {}),
      (this.logger = qe),
      (this.modules = { external: [] }),
      hh(this),
      n && !this.isInitialized && !t.isClone)
    ) {
      if (!this.options.initAsync) return this.init(t, n), this;
      setTimeout(() => {
        this.init(t, n);
      }, 0);
    }
  }
  init(t = {}, n) {
    (this.isInitializing = !0),
      typeof t == "function" && ((n = t), (t = {})),
      t.defaultNS == null &&
        t.ns &&
        (M(t.ns)
          ? (t.defaultNS = t.ns)
          : t.ns.indexOf("translation") < 0 && (t.defaultNS = t.ns[0]));
    const r = Aa();
    (this.options = { ...r, ...this.options, ...Ba(t) }),
      (this.options.interpolation = {
        ...r.interpolation,
        ...this.options.interpolation,
      }),
      t.keySeparator !== void 0 &&
        (this.options.userDefinedKeySeparator = t.keySeparator),
      t.nsSeparator !== void 0 &&
        (this.options.userDefinedNsSeparator = t.nsSeparator),
      typeof this.options.overloadTranslationOptionHandler != "function" &&
        (this.options.overloadTranslationOptionHandler =
          r.overloadTranslationOptionHandler);
    const i = (u) => (u ? (typeof u == "function" ? new u() : u) : null);
    if (!this.options.isClone) {
      this.modules.logger
        ? qe.init(i(this.modules.logger), this.options)
        : qe.init(null, this.options);
      let u;
      this.modules.formatter ? (u = this.modules.formatter) : (u = dh);
      const h = new Da(this.options);
      this.store = new _a(this.options.resources, this.options);
      const f = this.services;
      (f.logger = qe),
        (f.resourceStore = this.store),
        (f.languageUtils = h),
        (f.pluralResolver = new ah(h, {
          prepend: this.options.pluralSeparator,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix,
        })),
        this.options.interpolation.format &&
          this.options.interpolation.format !== r.interpolation.format &&
          this.logger.deprecate(
            "init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting"
          ),
        u &&
          (!this.options.interpolation.format ||
            this.options.interpolation.format === r.interpolation.format) &&
          ((f.formatter = i(u)),
          f.formatter.init && f.formatter.init(f, this.options),
          (this.options.interpolation.format = f.formatter.format.bind(
            f.formatter
          ))),
        (f.interpolator = new Fa(this.options)),
        (f.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }),
        (f.backendConnector = new ph(
          i(this.modules.backend),
          f.resourceStore,
          f,
          this.options
        )),
        f.backendConnector.on("*", (y, ...v) => {
          this.emit(y, ...v);
        }),
        this.modules.languageDetector &&
          ((f.languageDetector = i(this.modules.languageDetector)),
          f.languageDetector.init &&
            f.languageDetector.init(f, this.options.detection, this.options)),
        this.modules.i18nFormat &&
          ((f.i18nFormat = i(this.modules.i18nFormat)),
          f.i18nFormat.init && f.i18nFormat.init(this)),
        (this.translator = new Ni(this.services, this.options)),
        this.translator.on("*", (y, ...v) => {
          this.emit(y, ...v);
        }),
        this.modules.external.forEach((y) => {
          y.init && y.init(this);
        });
    }
    if (
      ((this.format = this.options.interpolation.format),
      n || (n = Fr),
      this.options.fallbackLng &&
        !this.services.languageDetector &&
        !this.options.lng)
    ) {
      const u = this.services.languageUtils.getFallbackCodes(
        this.options.fallbackLng
      );
      u.length > 0 && u[0] !== "dev" && (this.options.lng = u[0]);
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
      ].forEach((u) => {
        this[u] = (...h) => this.store[u](...h);
      }),
      [
        "addResource",
        "addResources",
        "addResourceBundle",
        "removeResourceBundle",
      ].forEach((u) => {
        this[u] = (...h) => (this.store[u](...h), this);
      });
    const s = zn(),
      a = () => {
        const u = (h, f) => {
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
            s.resolve(f),
            n(h, f);
        };
        if (this.languages && !this.isInitialized)
          return u(null, this.t.bind(this));
        this.changeLanguage(this.options.lng, u);
      };
    return (
      this.options.resources || !this.options.initAsync
        ? a()
        : setTimeout(a, 0),
      s
    );
  }
  loadResources(t, n = Fr) {
    var o, l;
    let r = n;
    const i = M(t) ? t : this.language;
    if (
      (typeof t == "function" && (r = t),
      !this.options.resources || this.options.partialBundledLanguages)
    ) {
      if (
        (i == null ? void 0 : i.toLowerCase()) === "cimode" &&
        (!this.options.preload || this.options.preload.length === 0)
      )
        return r();
      const s = [],
        a = (u) => {
          if (!u || u === "cimode") return;
          this.services.languageUtils.toResolveHierarchy(u).forEach((f) => {
            f !== "cimode" && s.indexOf(f) < 0 && s.push(f);
          });
        };
      i
        ? a(i)
        : this.services.languageUtils
            .getFallbackCodes(this.options.fallbackLng)
            .forEach((h) => a(h)),
        (l = (o = this.options.preload) == null ? void 0 : o.forEach) == null ||
          l.call(o, (u) => a(u)),
        this.services.backendConnector.load(s, this.options.ns, (u) => {
          !u &&
            !this.resolvedLanguage &&
            this.language &&
            this.setResolvedLanguage(this.language),
            r(u);
        });
    } else r(null);
  }
  reloadResources(t, n, r) {
    const i = zn();
    return (
      typeof t == "function" && ((r = t), (t = void 0)),
      typeof n == "function" && ((r = n), (n = void 0)),
      t || (t = this.languages),
      n || (n = this.options.ns),
      r || (r = Fr),
      this.services.backendConnector.reload(t, n, (o) => {
        i.resolve(), r(o);
      }),
      i
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
      t.type === "postProcessor" && rd.addPostProcessor(t),
      t.type === "formatter" && (this.modules.formatter = t),
      t.type === "3rdParty" && this.modules.external.push(t),
      this
    );
  }
  setResolvedLanguage(t) {
    if (!(!t || !this.languages) && !(["cimode", "dev"].indexOf(t) > -1)) {
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
      !this.resolvedLanguage &&
        this.languages.indexOf(t) < 0 &&
        this.store.hasLanguageSomeTranslations(t) &&
        ((this.resolvedLanguage = t), this.languages.unshift(t));
    }
  }
  changeLanguage(t, n) {
    this.isLanguageChangingTo = t;
    const r = zn();
    this.emit("languageChanging", t);
    const i = (s) => {
        (this.language = s),
          (this.languages = this.services.languageUtils.toResolveHierarchy(s)),
          (this.resolvedLanguage = void 0),
          this.setResolvedLanguage(s);
      },
      o = (s, a) => {
        a
          ? this.isLanguageChangingTo === t &&
            (i(a),
            this.translator.changeLanguage(a),
            (this.isLanguageChangingTo = void 0),
            this.emit("languageChanged", a),
            this.logger.log("languageChanged", a))
          : (this.isLanguageChangingTo = void 0),
          r.resolve((...u) => this.t(...u)),
          n && n(s, (...u) => this.t(...u));
      },
      l = (s) => {
        var h, f;
        !t && !s && this.services.languageDetector && (s = []);
        const a = M(s) ? s : s && s[0],
          u = this.store.hasLanguageSomeTranslations(a)
            ? a
            : this.services.languageUtils.getBestMatchFromCodes(M(s) ? [s] : s);
        u &&
          (this.language || i(u),
          this.translator.language || this.translator.changeLanguage(u),
          (f =
            (h = this.services.languageDetector) == null
              ? void 0
              : h.cacheUserLanguage) == null || f.call(h, u)),
          this.loadResources(u, (m) => {
            o(m, u);
          });
      };
    return (
      !t &&
      this.services.languageDetector &&
      !this.services.languageDetector.async
        ? l(this.services.languageDetector.detect())
        : !t &&
          this.services.languageDetector &&
          this.services.languageDetector.async
        ? this.services.languageDetector.detect.length === 0
          ? this.services.languageDetector.detect().then(l)
          : this.services.languageDetector.detect(l)
        : l(t),
      r
    );
  }
  getFixedT(t, n, r) {
    const i = (o, l, ...s) => {
      let a;
      typeof l != "object"
        ? (a = this.options.overloadTranslationOptionHandler([o, l].concat(s)))
        : (a = { ...l }),
        (a.lng = a.lng || i.lng),
        (a.lngs = a.lngs || i.lngs),
        (a.ns = a.ns || i.ns),
        a.keyPrefix !== "" && (a.keyPrefix = a.keyPrefix || r || i.keyPrefix);
      const u = this.options.keySeparator || ".";
      let h;
      return (
        a.keyPrefix && Array.isArray(o)
          ? (h = o.map(
              (f) => (
                typeof f == "function" &&
                  (f = ml(f, { ...this.options, ...l })),
                `${a.keyPrefix}${u}${f}`
              )
            ))
          : (typeof o == "function" && (o = ml(o, { ...this.options, ...l })),
            (h = a.keyPrefix ? `${a.keyPrefix}${u}${o}` : o)),
        this.t(h, a)
      );
    };
    return M(t) ? (i.lng = t) : (i.lngs = t), (i.ns = n), (i.keyPrefix = r), i;
  }
  t(...t) {
    var n;
    return (n = this.translator) == null ? void 0 : n.translate(...t);
  }
  exists(...t) {
    var n;
    return (n = this.translator) == null ? void 0 : n.exists(...t);
  }
  setDefaultNamespace(t) {
    this.options.defaultNS = t;
  }
  hasLoadedNamespace(t, n = {}) {
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
      i = this.options ? this.options.fallbackLng : !1,
      o = this.languages[this.languages.length - 1];
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
      (l(r, t) && (!i || l(o, t)))
    );
  }
  loadNamespaces(t, n) {
    const r = zn();
    return this.options.ns
      ? (M(t) && (t = [t]),
        t.forEach((i) => {
          this.options.ns.indexOf(i) < 0 && this.options.ns.push(i);
        }),
        this.loadResources((i) => {
          r.resolve(), n && n(i);
        }),
        r)
      : (n && n(), Promise.resolve());
  }
  loadLanguages(t, n) {
    const r = zn();
    M(t) && (t = [t]);
    const i = this.options.preload || [],
      o = t.filter(
        (l) =>
          i.indexOf(l) < 0 && this.services.languageUtils.isSupportedCode(l)
      );
    return o.length
      ? ((this.options.preload = i.concat(o)),
        this.loadResources((l) => {
          r.resolve(), n && n(l);
        }),
        r)
      : (n && n(), Promise.resolve());
  }
  dir(t) {
    var i, o;
    if (
      (t ||
        (t =
          this.resolvedLanguage ||
          (((i = this.languages) == null ? void 0 : i.length) > 0
            ? this.languages[0]
            : this.language)),
      !t)
    )
      return "rtl";
    try {
      const l = new Intl.Locale(t);
      if (l && l.getTextInfo) {
        const s = l.getTextInfo();
        if (s && s.direction) return s.direction;
      }
    } catch {}
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
      r =
        ((o = this.services) == null ? void 0 : o.languageUtils) ||
        new Da(Aa());
    return t.toLowerCase().indexOf("-latn") > 1
      ? "ltr"
      : n.indexOf(r.getLanguagePartFromCode(t)) > -1 ||
        t.toLowerCase().indexOf("-arab") > 1
      ? "rtl"
      : "ltr";
  }
  static createInstance(t = {}, n) {
    const r = new Xn(t, n);
    return (r.createInstance = Xn.createInstance), r;
  }
  cloneInstance(t = {}, n = Fr) {
    const r = t.forkResourceStore;
    r && delete t.forkResourceStore;
    const i = { ...this.options, ...t, isClone: !0 },
      o = new Xn(i);
    if (
      ((t.debug !== void 0 || t.prefix !== void 0) &&
        (o.logger = o.logger.clone(t)),
      ["store", "services", "language"].forEach((s) => {
        o[s] = this[s];
      }),
      (o.services = { ...this.services }),
      (o.services.utils = { hasLoadedNamespace: o.hasLoadedNamespace.bind(o) }),
      r)
    ) {
      const s = Object.keys(this.store.data).reduce(
        (a, u) => (
          (a[u] = { ...this.store.data[u] }),
          (a[u] = Object.keys(a[u]).reduce(
            (h, f) => ((h[f] = { ...a[u][f] }), h),
            a[u]
          )),
          a
        ),
        {}
      );
      (o.store = new _a(s, i)), (o.services.resourceStore = o.store);
    }
    return (
      t.interpolation && (o.services.interpolator = new Fa(i)),
      (o.translator = new Ni(o.services, i)),
      o.translator.on("*", (s, ...a) => {
        o.emit(s, ...a);
      }),
      o.init(i, n),
      (o.translator.options = i),
      (o.translator.backendConnector.services.utils = {
        hasLoadedNamespace: o.hasLoadedNamespace.bind(o),
      }),
      o
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
const Se = Xn.createInstance();
Se.createInstance;
Se.dir;
Se.init;
Se.loadResources;
Se.reloadResources;
Se.use;
Se.changeLanguage;
Se.getFixedT;
Se.t;
Se.exists;
Se.setDefaultNamespace;
Se.hasLoadedNamespace;
Se.loadNamespaces;
Se.loadLanguages;
const gh = (e, t, n, r) => {
    var o, l, s, a;
    const i = [n, { code: t, ...(r || {}) }];
    if (
      (l = (o = e == null ? void 0 : e.services) == null ? void 0 : o.logger) !=
        null &&
      l.forward
    )
      return e.services.logger.forward(i, "warn", "react-i18next::", !0);
    Kt(i[0]) && (i[0] = `react-i18next:: ${i[0]}`),
      (a = (s = e == null ? void 0 : e.services) == null ? void 0 : s.logger) !=
        null && a.warn
        ? e.services.logger.warn(...i)
        : console != null && console.warn && console.warn(...i);
  },
  Ua = {},
  od = (e, t, n, r) => {
    (Kt(n) && Ua[n]) || (Kt(n) && (Ua[n] = new Date()), gh(e, t, n, r));
  },
  ld = (e, t) => () => {
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
  yl = (e, t, n) => {
    e.loadNamespaces(t, ld(e, n));
  },
  ba = (e, t, n, r) => {
    if (
      (Kt(n) && (n = [n]),
      e.options.preload && e.options.preload.indexOf(t) > -1)
    )
      return yl(e, n, r);
    n.forEach((i) => {
      e.options.ns.indexOf(i) < 0 && e.options.ns.push(i);
    }),
      e.loadLanguages(t, ld(e, r));
  },
  mh = (e, t, n = {}) =>
    !t.languages || !t.languages.length
      ? (od(t, "NO_LANGUAGES", "i18n.languages were undefined or empty", {
          languages: t.languages,
        }),
        !0)
      : t.hasLoadedNamespace(e, {
          lng: n.lng,
          precheck: (r, i) => {
            if (
              n.bindI18n &&
              n.bindI18n.indexOf("languageChanging") > -1 &&
              r.services.backendConnector.backend &&
              r.isLanguageChangingTo &&
              !i(r.isLanguageChangingTo, e)
            )
              return !1;
          },
        }),
  Kt = (e) => typeof e == "string",
  yh = (e) => typeof e == "object" && e !== null,
  vh =
    /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
  xh = {
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
  wh = (e) => xh[e],
  Sh = (e) => e.replace(vh, wh);
let vl = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: Sh,
  transDefaultProps: void 0,
};
const kh = (e = {}) => {
    vl = { ...vl, ...e };
  },
  Ch = () => vl;
let sd;
const Nh = (e) => {
    sd = e;
  },
  Eh = () => sd,
  jh = {
    type: "3rdParty",
    init(e) {
      kh(e.options.react), Nh(e);
    },
  },
  Lh = N.createContext();
class Oh {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(t) {
    t.forEach((n) => {
      this.usedNamespaces[n] || (this.usedNamespaces[n] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
var ad = { exports: {} },
  ud = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Cn = N;
function Ph(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Rh = typeof Object.is == "function" ? Object.is : Ph,
  _h = Cn.useState,
  Th = Cn.useEffect,
  Dh = Cn.useLayoutEffect,
  Mh = Cn.useDebugValue;
function zh(e, t) {
  var n = t(),
    r = _h({ inst: { value: n, getSnapshot: t } }),
    i = r[0].inst,
    o = r[1];
  return (
    Dh(
      function () {
        (i.value = n), (i.getSnapshot = t), ko(i) && o({ inst: i });
      },
      [e, n, t]
    ),
    Th(
      function () {
        return (
          ko(i) && o({ inst: i }),
          e(function () {
            ko(i) && o({ inst: i });
          })
        );
      },
      [e]
    ),
    Mh(n),
    n
  );
}
function ko(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Rh(e, n);
  } catch {
    return !0;
  }
}
function $h(e, t) {
  return t();
}
var Fh =
  typeof window > "u" ||
  typeof window.document > "u" ||
  typeof window.document.createElement > "u"
    ? $h
    : zh;
ud.useSyncExternalStore =
  Cn.useSyncExternalStore !== void 0 ? Cn.useSyncExternalStore : Fh;
ad.exports = ud;
var Ih = ad.exports;
const Ah = (e, t) =>
    Kt(t)
      ? t
      : yh(t) && Kt(t.defaultValue)
      ? t.defaultValue
      : Array.isArray(e)
      ? e[e.length - 1]
      : e,
  Bh = { t: Ah, ready: !1 },
  Uh = () => () => {},
  Tt = (e, t = {}) => {
    var D, _, ne;
    const { i18n: n } = t,
      { i18n: r, defaultNS: i } = N.useContext(Lh) || {},
      o = n || r || Eh();
    o && !o.reportNamespaces && (o.reportNamespaces = new Oh()),
      o ||
        od(
          o,
          "NO_I18NEXT_INSTANCE",
          "useTranslation: You will need to pass in an i18next instance by using initReactI18next"
        );
    const l = N.useMemo(() => {
        var I;
        return {
          ...Ch(),
          ...((I = o == null ? void 0 : o.options) == null ? void 0 : I.react),
          ...t,
        };
      }, [o, t]),
      { useSuspense: s, keyPrefix: a } = l,
      u =
        i ||
        ((D = o == null ? void 0 : o.options) == null ? void 0 : D.defaultNS),
      h = Kt(u) ? [u] : u || ["translation"],
      f = N.useMemo(() => h, h);
    (ne =
      (_ = o == null ? void 0 : o.reportNamespaces) == null
        ? void 0
        : _.addUsedNamespaces) == null || ne.call(_, f);
    const m = N.useRef(0),
      y = N.useCallback(
        (I) => {
          if (!o) return Uh;
          const { bindI18n: z, bindI18nStore: F } = l,
            H = () => {
              (m.current += 1), I();
            };
          return (
            z && o.on(z, H),
            F && o.store.on(F, H),
            () => {
              z && z.split(" ").forEach((X) => o.off(X, H)),
                F && F.split(" ").forEach((X) => o.store.off(X, H));
            }
          );
        },
        [o, l]
      ),
      v = N.useRef(),
      w = N.useCallback(() => {
        if (!o) return Bh;
        const I =
            !!(o.isInitialized || o.initializedStoreOnce) &&
            f.every((k) => mh(k, o, l)),
          z = t.lng || o.language,
          F = m.current,
          H = v.current;
        if (
          H &&
          H.ready === I &&
          H.lng === z &&
          H.keyPrefix === a &&
          H.revision === F
        )
          return H;
        const O = {
          t: o.getFixedT(z, l.nsMode === "fallback" ? f : f[0], a),
          ready: I,
          lng: z,
          keyPrefix: a,
          revision: F,
        };
        return (v.current = O), O;
      }, [o, f, a, l, t.lng]),
      [T, g] = N.useState(0),
      { t: d, ready: p } = Ih.useSyncExternalStore(y, w, w);
    N.useEffect(() => {
      if (o && !p && !s) {
        const I = () => g((z) => z + 1);
        t.lng ? ba(o, t.lng, f, I) : yl(o, f, I);
      }
    }, [o, t.lng, f, p, s, T]);
    const x = o || {},
      S = N.useRef(null),
      E = N.useRef(),
      L = (I) => {
        const z = Object.getOwnPropertyDescriptors(I);
        z.__original && delete z.__original;
        const F = Object.create(Object.getPrototypeOf(I), z);
        if (!Object.prototype.hasOwnProperty.call(F, "__original"))
          try {
            Object.defineProperty(F, "__original", {
              value: I,
              writable: !1,
              enumerable: !1,
              configurable: !1,
            });
          } catch {}
        return F;
      },
      j = N.useMemo(() => {
        const I = x,
          z = I == null ? void 0 : I.language;
        let F = I;
        I &&
          (S.current && S.current.__original === I
            ? E.current !== z
              ? ((F = L(I)), (S.current = F), (E.current = z))
              : (F = S.current)
            : ((F = L(I)), (S.current = F), (E.current = z)));
        const H = [d, F, p];
        return (H.t = d), (H.i18n = F), (H.ready = p), H;
      }, [d, x, p, x.resolvedLanguage, x.language, x.languages]);
    if (o && s && !p)
      throw new Promise((I) => {
        const z = () => I();
        t.lng ? ba(o, t.lng, f, z) : yl(o, f, z);
      });
    return j;
  },
  cd = N.createContext(void 0);
function bh({ children: e }) {
  const [t, n] = N.useState(null),
    [r, i] = N.useState(!1);
  N.useEffect(() => {
    const s = localStorage.getItem("user_session");
    if (s)
      try {
        const a = JSON.parse(s);
        n(a), i(!0);
      } catch (a) {
        console.error("Failed to parse stored session:", a),
          localStorage.removeItem("user_session");
      }
  }, []);
  const o = (s) => {
      n(s), i(!0), localStorage.setItem("user_session", JSON.stringify(s));
    },
    l = () => {
      n(null), i(!1), localStorage.removeItem("user_session");
    };
  return c.jsx(cd.Provider, {
    value: { user: t, isAuthenticated: r, login: o, logout: l },
    children: e,
  });
}
function hs() {
  const e = N.useContext(cd);
  if (e === void 0)
    throw new Error("useAuth must be used within an AuthProvider");
  return e;
}
function Vh() {
  const { t: e, i18n: t } = Tt(),
    { user: n, logout: r } = hs(),
    i = () => {
      const l = t.language === "zh-TW" ? "en" : "zh-TW";
      t.changeLanguage(l);
    },
    o = () => {
      r();
    };
  return c.jsx("nav", {
    className: "bg-transparent py-4 md:py-6 lg:py-8",
    children: c.jsx("div", {
      className: "mx-auto px-4 sm:px-6 lg:px-8",
      children: c.jsxs("div", {
        className: "flex justify-between items-center h-16",
        children: [
          c.jsxs("div", {
            className: "flex items-center space-x-4",
            children: [
              c.jsxs("a", {
                href: "../frontpage",
                className:
                  "p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors",
                children: [
                  c.jsx("span", { className: "sr-only", children: "Home" }),
                  c.jsx(Wp, { className: "w-7 h-7" }),
                ],
              }),
              c.jsxs("div", {
                children: [
                  c.jsx("h1", {
                    className:
                      "text-2xl md:text-3xl font-semibold text-gray-800 mb-2",
                    children: e("nav.title"),
                  }),
                  c.jsxs("p", {
                    className: "text-base text-gray-600",
                    children: [
                      n == null ? void 0 : n.Name,
                      " - ",
                      n == null ? void 0 : n.Employer,
                    ],
                  }),
                ],
              }),
            ],
          }),
          c.jsxs("div", {
            className: "flex items-center space-x-3",
            children: [
              c.jsxs("button", {
                onClick: i,
                className:
                  "inline-flex items-center px-3 py-2 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
                children: [
                  c.jsx(Hp, { className: "h-5 w-5" }),
                  c.jsx("span", {
                    className: "hidden sm:ml-2 sm:inline",
                    children: e("nav.language"),
                  }),
                ],
              }),
              c.jsxs("button", {
                onClick: o,
                className:
                  "inline-flex items-center px-3 py-2 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
                children: [
                  c.jsx(Kp, { className: "w-5 h-5" }),
                  c.jsx("span", {
                    className: "hidden sm:ml-2 sm:inline",
                    children: e("nav.logout"),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
function Hh({
  resultCount: e,
  groupFilter: t,
  setGroupFilter: n,
  searchQuery: r,
  setSearchQuery: i,
  onSearch: o,
  onExport: l,
}) {
  const { t: s } = Tt();
  return c.jsx("div", {
    children: c.jsx("div", {
      className: "mx-auto pt-4",
      children: c.jsx("div", {
        className:
          "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4",
        children: c.jsx("div", {
          className: "flex items-center gap-4 w-full sm:w-auto",
          children: c.jsxs("div", {
            className: "flex items-center gap-2 flex-1 sm:flex-initial",
            children: [
              c.jsxs("div", {
                className: "relative flex-1 sm:w-80",
                children: [
                  c.jsx(ja, {
                    className:
                      "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400",
                  }),
                  c.jsx("input", {
                    type: "text",
                    value: r,
                    onChange: (a) => i(a.target.value),
                    onKeyDown: (a) => a.key === "Enter" && o(),
                    placeholder: s("search.placeholder"),
                    className:
                      "w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                  }),
                ],
              }),
              c.jsxs("button", {
                onClick: o,
                className:
                  "bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-2",
                children: [
                  c.jsx(ja, { className: "w-4 h-4" }),
                  c.jsx("span", { children: s("search.searchButton") }),
                ],
              }),
            ],
          }),
        }),
      }),
    }),
  });
}
function Wh({
  fileStatusFilter: e,
  setFileStatusFilter: t,
  torwFilter: n,
  setTorwFilter: r,
  barcodeFilter: i,
  setBarcodeFilter: o,
}) {
  const l = (h, f, m) => {
      m(h === f ? null : f);
    },
    s = "px-4 py-2 rounded-lg font-medium transition-all duration-200 border-2",
    a = "bg-blue-600 text-white border-blue-600 shadow-md",
    u =
      "bg-white text-gray-700 border-gray-300 hover:border-blue-400 hover:bg-blue-50";
  return c.jsx("div", {
    className: "bg-white mb-6",
    children: c.jsxs("div", {
      className: "grid grid-cols-1 md:grid-cols-3 gap-6",
      children: [
        c.jsxs("div", {
          children: [
            c.jsx("h3", {
              className: "font-medium text-gray-700 mb-3",
              children: "開檔狀態",
            }),
            c.jsxs("div", {
              className: "flex gap-2",
              children: [
                c.jsx("button", {
                  onClick: () => l(e, "開檔", t),
                  className: `${s} ${e === "開檔" ? a : u}`,
                  children: "開檔",
                }),
                c.jsx("button", {
                  onClick: () => l(e, "關檔", t),
                  className: `${s} ${e === "關檔" ? a : u}`,
                  children: "關檔",
                }),
              ],
            }),
          ],
        }),
        c.jsxs("div", {
          children: [
            c.jsx("h3", {
              className: "font-medium text-gray-700 mb-3",
              children: "中/西藥",
            }),
            c.jsxs("div", {
              className: "flex gap-2",
              children: [
                c.jsx("button", {
                  onClick: () => l(n, "中藥", r),
                  className: `${s} ${n === "中藥" ? a : u}`,
                  children: "中藥",
                }),
                c.jsx("button", {
                  onClick: () => l(n, "西藥", r),
                  className: `${s} ${n === "西藥" ? a : u}`,
                  children: "西藥",
                }),
              ],
            }),
          ],
        }),
        c.jsxs("div", {
          children: [
            c.jsx("h3", {
              className: "font-medium text-gray-700 mb-3",
              children: "條碼狀態",
            }),
            c.jsxs("div", {
              className: "flex gap-2",
              children: [
                c.jsx("button", {
                  onClick: () => l(i, "has", o),
                  className: `${s} ${i === "has" ? a : u}`,
                  children: "已建立",
                }),
                c.jsx("button", {
                  onClick: () => l(i, "none", o),
                  className: `${s} ${i === "none" ? a : u}`,
                  children: "未建立",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function Kh({ sortBy: e, setSortBy: t, sortOrder: n, setSortOrder: r }) {
  const i = (a) => {
      e === a ? r(n === "asc" ? "desc" : "asc") : (t(a), r("asc"));
    },
    o =
      "px-4 py-2 rounded-lg font-medium transition-all duration-200 border-2 flex items-center gap-2",
    l = "bg-blue-600 text-white border-blue-600 shadow-md",
    s =
      "bg-white text-gray-700 border-gray-300 hover:border-blue-400 hover:bg-blue-50";
  return c.jsxs("div", {
    className: "bg-white mb-6",
    children: [
      c.jsx("h3", {
        className: "font-medium text-gray-700 mb-3",
        children: "排序",
      }),
      c.jsxs("div", {
        className: "flex flex-wrap gap-3",
        children: [
          c.jsxs("button", {
            onClick: () => i("code"),
            className: `${o} ${e === "code" ? l : s}`,
            children: [
              c.jsx("span", { children: "藥碼" }),
              e === "code" &&
                (n === "asc"
                  ? c.jsx(xo, { className: "w-4 h-4" })
                  : c.jsx(vo, { className: "w-4 h-4" })),
            ],
          }),
          c.jsxs("button", {
            onClick: () => i("name"),
            className: `${o} ${e === "name" ? l : s}`,
            children: [
              c.jsx("span", { children: "藥名" }),
              e === "name" &&
                (n === "asc"
                  ? c.jsx(xo, { className: "w-4 h-4" })
                  : c.jsx(vo, { className: "w-4 h-4" })),
            ],
          }),
          c.jsxs("button", {
            onClick: () => i("chtName"),
            className: `${o} ${e === "chtName" ? l : s}`,
            children: [
              c.jsx("span", { children: "中文名" }),
              e === "chtName" &&
                (n === "asc"
                  ? c.jsx(xo, { className: "w-4 h-4" })
                  : c.jsx(vo, { className: "w-4 h-4" })),
            ],
          }),
        ],
      }),
    ],
  });
}
let Bt = null;
async function Qh() {
  if (Bt) return Bt;
  try {
    const e = await fetch("../config.txt");
    if (!e.ok) throw new Error("Failed to load config.txt");
    const t = await e.json();
    return (
      (Bt = t),
      console.log(
        "%c⚙️ Configuration Loaded",
        "color: #F59E0B; font-weight: bold; font-size: 12px"
      ),
      console.log("%cDomain:", "color: #10B981; font-weight: bold", t.domain),
      console.log(
        "%cHomepage:",
        "color: #10B981; font-weight: bold",
        t.homepage
      ),
      console.log("%cAI:", "color: #10B981; font-weight: bold", t.ai),
      t
    );
  } catch (e) {
    throw (console.error("Failed to load config.txt:", e), e);
  }
}
function Vi() {
  if (!Bt) throw new Error("Config not loaded. Call loadConfig() first.");
  return Bt.domain;
}
function Gh() {
  if (!Bt) throw new Error("Config not loaded. Call loadConfig() first.");
  return Bt.ai;
}
async function Yh(e) {
  const n = `${Gh()}/barcode`,
    r = performance.now(),
    i = new FormData();
  i.append("file", e, "capture.jpg"),
    console.group(
      `%c🌐 API REQUEST - POST ${n}`,
      "color: #3B82F6; font-weight: bold; font-size: 12px"
    ),
    console.log("%cURL:", "color: #10B981; font-weight: bold", n),
    console.log("%cMethod:", "color: #10B981; font-weight: bold", "POST"),
    console.log(
      "%cBody:",
      "color: #10B981; font-weight: bold",
      "FormData with image file"
    ),
    console.groupEnd();
  try {
    const o = await fetch(n, { method: "POST", body: i }),
      s = (performance.now() - r).toFixed(2);
    if (!o.ok) throw new Error(`HTTP error! status: ${o.status}`);
    const a = await o.json();
    return (
      console.group(
        `%c✓ API RESPONSE - POST ${n} [${o.status}] (${s}ms)`,
        "color: #10B981; font-weight: bold; font-size: 12px"
      ),
      console.log(
        "%cStatus:",
        "color: #8B5CF6; font-weight: bold",
        `${o.status} ${o.statusText}`
      ),
      console.log("%cDuration:", "color: #8B5CF6; font-weight: bold", `${s}ms`),
      console.log("%cResponse Data:", "color: #8B5CF6; font-weight: bold", a),
      console.groupEnd(),
      a
    );
  } catch (o) {
    const s = (performance.now() - r).toFixed(2);
    throw (
      (console.group(
        `%c✗ API ERROR - POST ${n} (${s}ms)`,
        "color: #EF4444; font-weight: bold; font-size: 12px"
      ),
      console.error("%cError:", "color: #EF4444; font-weight: bold", o),
      console.groupEnd(),
      o)
    );
  }
}
function dd({ isOpen: e, onClose: t, onScan: n, mode: r = "continuous" }) {
  const { t: i } = Tt(),
    o = N.useRef(null),
    l = N.useRef(null),
    s = N.useRef(null),
    [a, u] = N.useState(""),
    [h, f] = N.useState(!1),
    m = N.useRef(!1),
    y = N.useRef(n),
    v = async () => {
      try {
        u("");
        const g = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: "environment",
            width: { ideal: 1920 },
            height: { ideal: 1080 },
          },
        });
        o.current &&
          ((o.current.srcObject = g),
          (l.current = g),
          await new Promise((d) => {
            if (o.current) {
              const p = () => {
                var x;
                (x = o.current) == null || x.removeEventListener("canplay", p),
                  d();
              };
              o.current.addEventListener("canplay", p),
                o.current.readyState >= 3 &&
                  (o.current.removeEventListener("canplay", p), d());
            } else d();
          }));
      } catch (g) {
        throw (
          (console.error("Error accessing camera:", g),
          u(i("scanner.cameraError")),
          g)
        );
      }
    },
    w = () => {
      l.current &&
        (l.current.getTracks().forEach((g) => g.stop()), (l.current = null)),
        o.current && (o.current.srcObject = null);
    },
    T = () => {
      if (o.current) {
        const g = o.current;
        if (g.srcObject) {
          const d = g.srcObject.getVideoTracks();
          if (d.length > 0) {
            const p = d[0];
            "focusMode" in p.getCapabilities() &&
              p
                .applyConstraints({ advanced: [{ focusMode: "continuous" }] })
                .catch(console.error);
          }
        }
      }
    };
  return (
    N.useEffect(() => {
      y.current = n;
    }, [n]),
    N.useEffect(
      () => (
        e
          ? (async () => {
              try {
                await v(),
                  r === "manual" &&
                    o.current &&
                    ((m.current = !0),
                    (async () => {
                      for (; m.current; )
                        try {
                          if (
                            (f(!0),
                            await new Promise((E) => setTimeout(E, 500)),
                            !o.current || !s.current)
                          ) {
                            f(!1);
                            break;
                          }
                          const p = o.current;
                          if (p.videoWidth === 0 || p.videoHeight === 0) {
                            console.warn("Video not ready, skipping frame"),
                              f(!1),
                              await new Promise((E) => setTimeout(E, 500));
                            continue;
                          }
                          const x = await new Promise((E) => {
                            if (!o.current || !s.current) {
                              E(null);
                              return;
                            }
                            const L = o.current,
                              j = s.current,
                              D = j.getContext("2d");
                            if (!D) {
                              E(null);
                              return;
                            }
                            (j.width = L.videoWidth),
                              (j.height = L.videoHeight),
                              D.drawImage(L, 0, 0, j.width, j.height),
                              j.toBlob(
                                (_) => {
                                  E(_);
                                },
                                "image/jpeg",
                                0.95
                              );
                          });
                          if (!x || !m.current) {
                            f(!1);
                            break;
                          }
                          const S = await Yh(x);
                          if (!m.current) break;
                          if (S.results && S.results.length > 0) {
                            const E = S.results[0];
                            if (E.code) {
                              (m.current = !1),
                                f(!1),
                                y.current && y.current(E.code);
                              break;
                            }
                          }
                          f(!1);
                        } catch (p) {
                          console.error("Error during scanning:", p),
                            f(!1),
                            await new Promise((x) => setTimeout(x, 1e3));
                        }
                    })());
              } catch (d) {
                console.error("Failed to initialize camera:", d);
              }
            })()
          : (w(), (m.current = !1)),
        () => {
          w(), (m.current = !1);
        }
      ),
      [e, r]
    ),
    e
      ? c.jsx("div", {
          className:
            "fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black bg-opacity-70",
          onClick: t,
          children: c.jsxs("div", {
            className:
              "bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden",
            onClick: (g) => g.stopPropagation(),
            children: [
              c.jsxs("div", {
                className:
                  "flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-gray-50",
                children: [
                  c.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [
                      c.jsx("div", {
                        className: "p-2 bg-blue-100 rounded-lg",
                        children: c.jsx(Si, {
                          className: "w-6 h-6 text-blue-600",
                        }),
                      }),
                      c.jsx("h2", {
                        className: "text-xl font-semibold text-gray-900",
                        children: i("scanner.title"),
                      }),
                    ],
                  }),
                  c.jsx("button", {
                    onClick: t,
                    className:
                      "p-2 hover:bg-gray-200 rounded-full transition-colors",
                    "aria-label": "Close",
                    children: c.jsx(ps, { className: "w-6 h-6 text-gray-600" }),
                  }),
                ],
              }),
              c.jsxs("div", {
                className: "p-6 bg-gray-50",
                children: [
                  c.jsxs("div", {
                    className: "relative bg-black rounded-xl overflow-hidden",
                    style: { aspectRatio: "16/9" },
                    children: [
                      c.jsx("video", {
                        ref: o,
                        autoPlay: !0,
                        playsInline: !0,
                        muted: !0,
                        onClick: T,
                        className: "w-full h-full object-cover cursor-pointer",
                      }),
                      c.jsx("canvas", { ref: s, className: "hidden" }),
                      h &&
                        r === "manual" &&
                        c.jsx("div", {
                          className:
                            "absolute inset-0 flex items-center justify-center",
                          children: c.jsxs("div", {
                            className: "text-center",
                            children: [
                              c.jsx("div", {
                                className:
                                  "animate-spin rounded-full h-16 w-16 border-4 border-white border-t-transparent mb-3 mx-auto",
                              }),
                              c.jsx("p", {
                                className: "text-white text-lg font-semibold",
                                children: "辨識中...",
                              }),
                            ],
                          }),
                        }),
                      a &&
                        c.jsx("div", {
                          className:
                            "absolute inset-0 flex items-center justify-center bg-black bg-opacity-80",
                          children: c.jsxs("div", {
                            className: "text-center px-6",
                            children: [
                              c.jsx("div", {
                                className:
                                  "inline-block p-3 bg-red-100 rounded-full mb-3",
                                children: c.jsx(Si, {
                                  className: "w-8 h-8 text-red-600",
                                }),
                              }),
                              c.jsx("p", {
                                className: "text-white text-base",
                                children: a,
                              }),
                            ],
                          }),
                        }),
                    ],
                  }),
                  c.jsxs("div", {
                    className: "mt-6 text-center space-y-3",
                    children: [
                      c.jsx("p", {
                        className: "text-lg font-semibold text-gray-900",
                        children:
                          r === "manual"
                            ? "請將條碼對準鏡頭"
                            : i("scanner.instruction"),
                      }),
                      c.jsx("p", {
                        className: "text-sm text-gray-600",
                        children:
                          r === "manual"
                            ? "系統會自動辨識條碼"
                            : i("scanner.supportedFormats"),
                      }),
                      c.jsxs("div", {
                        className:
                          "flex items-center justify-center gap-2 text-sm text-gray-500 pt-2",
                        children: [
                          c.jsx(Vp, { className: "w-4 h-4" }),
                          c.jsx("span", { children: i("scanner.focusHint") }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        })
      : null
  );
}
async function Hi(e, t) {
  const n = (t == null ? void 0 : t.method) || "GET",
    r = performance.now();
  if (
    (console.group(
      `%c🌐 API REQUEST - ${n} ${e}`,
      "color: #3B82F6; font-weight: bold; font-size: 12px"
    ),
    console.log("%cURL:", "color: #10B981; font-weight: bold", e),
    console.log("%cMethod:", "color: #10B981; font-weight: bold", n),
    t != null &&
      t.headers &&
      console.log("%cHeaders:", "color: #10B981; font-weight: bold", t.headers),
    t != null && t.body)
  )
    try {
      const i = JSON.parse(t.body);
      console.log("%cRequest Body:", "color: #10B981; font-weight: bold", i);
    } catch {
      console.log(
        "%cRequest Body:",
        "color: #10B981; font-weight: bold",
        t.body
      );
    }
  console.groupEnd();
  try {
    const i = await fetch(e, t),
      l = (performance.now() - r).toFixed(2),
      s = i.clone();
    let a;
    try {
      a = await s.json();
    } catch {
      a = await s.text();
    }
    const u = i.ok ? "#10B981" : "#EF4444",
      h = i.ok ? "✓" : "✗";
    return (
      console.group(
        `%c${h} API RESPONSE - ${n} ${e} [${i.status}] (${l}ms)`,
        `color: ${u}; font-weight: bold; font-size: 12px`
      ),
      console.log(
        "%cStatus:",
        "color: #8B5CF6; font-weight: bold",
        `${i.status} ${i.statusText}`
      ),
      console.log("%cDuration:", "color: #8B5CF6; font-weight: bold", `${l}ms`),
      console.log("%cResponse Data:", "color: #8B5CF6; font-weight: bold", a),
      console.groupEnd(),
      i
    );
  } catch (i) {
    const l = (performance.now() - r).toFixed(2);
    throw (
      (console.group(
        `%c✗ API ERROR - ${n} ${e} (${l}ms)`,
        "color: #EF4444; font-weight: bold; font-size: 12px"
      ),
      console.error("%cError:", "color: #EF4444; font-weight: bold", i),
      console.groupEnd(),
      i)
    );
  }
}
async function Xh() {
  const e = Vi(),
    t = await Hi(`${e}/api/MED_page/get_med_cloud`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    });
  if (!t.ok) throw new Error(`Failed to fetch medications: ${t.statusText}`);
  const n = await t.json();
  if (n.Code !== 200)
    throw new Error(n.Result || "Failed to fetch medications");
  return n.Data || [];
}
async function Ei(e) {
  const t = Vi(),
    n = await Hi(`${t}/api/MED_page/serch_by_BarCode`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ Value: e }),
    });
  if (!n.ok) throw new Error(`Failed to search barcode: ${n.statusText}`);
  return await n.json();
}
async function Xr(e) {
  const t = Vi(),
    r = {
      Data: { ...e, BARCODE2: JSON.stringify(e.BARCODE || []) },
      Code: 0,
      Result: "",
      Value: "",
      ServerName: "",
      ServerType: "網頁",
      TableName: "medicine_page_cloud",
      DbName: "dbvm",
      TimeTaken: "",
    },
    i = await Hi(`${t}/api/MED_page/upadte_by_guid`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(r),
    });
  if (!i.ok) throw new Error(`Failed to update medication: ${i.statusText}`);
  return await i.json();
}
function gs(e) {
  return /^[a-zA-Z0-9 !#$%&'()*+,\-.:;<=>?@[\]^_`|~]+$/.test(e);
}
const fd = N.createContext(void 0);
function Jh({ children: e }) {
  const [t, n] = N.useState([]),
    r = (o, l) => {
      const s = Math.random().toString(36).substring(2, 9),
        a = { id: s, type: o, message: l };
      n((u) => [...u, a]),
        setTimeout(() => {
          n((u) => u.filter((h) => h.id !== s));
        }, 5e3);
    },
    i = (o) => {
      n((l) => l.filter((s) => s.id !== o));
    };
  return c.jsxs(fd.Provider, {
    value: { showNotification: r },
    children: [
      e,
      c.jsx("div", {
        className: "fixed top-4 right-4 z-[60] space-y-3 pointer-events-none",
        children: t.map((o) =>
          c.jsx(Zh, { notification: o, onClose: () => i(o.id) }, o.id)
        ),
      }),
    ],
  });
}
function ms() {
  const e = N.useContext(fd);
  if (!e)
    throw new Error("useNotification must be used within NotificationProvider");
  return e;
}
function Zh({ notification: e, onClose: t }) {
  const { type: n, message: r } = e;
  return c.jsx("div", {
    className: "animate-slide-in-right pointer-events-auto",
    style: { animation: "slideInRight 0.3s ease-out" },
    children: c.jsxs("div", {
      className: `min-w-[320px] max-w-md rounded-lg shadow-lg p-4 flex items-start gap-3 ${
        n === "error"
          ? "bg-red-50 border-2 border-red-200"
          : n === "success"
          ? "bg-green-50 border-2 border-green-200"
          : "bg-yellow-50 border-2 border-yellow-200"
      }`,
      children: [
        c.jsxs("div", {
          className: "flex-shrink-0 mt-0.5",
          children: [
            n === "error" &&
              c.jsx("svg", {
                className: "w-5 h-5 text-red-500",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: c.jsx("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                }),
              }),
            n === "success" &&
              c.jsx("svg", {
                className: "w-5 h-5 text-green-500",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: c.jsx("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                }),
              }),
            n === "warning" &&
              c.jsx("svg", {
                className: "w-5 h-5 text-yellow-500",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: c.jsx("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
                }),
              }),
          ],
        }),
        c.jsx("div", {
          className: "flex-1",
          children: c.jsx("p", {
            className: `text-sm font-medium ${
              n === "error"
                ? "text-red-800"
                : n === "success"
                ? "text-green-800"
                : "text-yellow-800"
            }`,
            children: r,
          }),
        }),
        c.jsx("button", {
          onClick: t,
          className: "flex-shrink-0 ml-2 hover:opacity-70 transition-opacity",
          children: c.jsx("svg", {
            className: `w-4 h-4 ${
              n === "error"
                ? "text-red-500"
                : n === "success"
                ? "text-green-500"
                : "text-yellow-500"
            }`,
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: c.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M6 18L18 6M6 6l12 12",
            }),
          }),
        }),
      ],
    }),
  });
}
function qh({ onMedicationFound: e, onMedicationNotFound: t }) {
  Tt();
  const { showNotification: n } = ms(),
    [r, i] = N.useState(""),
    [o, l] = N.useState(!1),
    [s, a] = N.useState(!1),
    u = N.useRef(null),
    h = async (y) => {
      const v = y.trim();
      if (!v) {
        n("warning", "請輸入條碼");
        return;
      }
      if (!gs(v)) {
        n(
          "error",
          "條碼格式不正確，僅允許使用英文、數字及特殊符號 !#$%&'()*+,-./:;<=>?@[]^_`|~"
        );
        return;
      }
      a(!0);
      try {
        const w = await Ei(v);
        if (w.Result === "查無資料") t && t(v);
        else if (Array.isArray(w.Data) && w.Data.length > 0) {
          const T = w.Data[0];
          e && e(T);
        } else n("error", "無法查詢條碼，請稍後再試");
      } catch (w) {
        console.error("Error searching barcode:", w),
          n("error", "系統錯誤，請稍後再試");
      } finally {
        a(!1), i("");
      }
    },
    f = async (y) => {
      l(!1), i(y);
      try {
        const v = await Ei(y);
        if (v.Result === "查無資料") t && t(y);
        else if (Array.isArray(v.Data) && v.Data.length > 0) {
          const w = v.Data[0];
          e && e(w);
        } else n("error", "無法查詢條碼，請稍後再試");
      } catch (v) {
        console.error("Error searching barcode:", v),
          n("error", "系統錯誤，請稍後再試");
      } finally {
        i(""),
          setTimeout(() => {
            var v;
            (v = u.current) == null || v.focus();
          }, 100);
      }
    },
    m = (y) => {
      y.key === "Enter" && !s && h(r);
    };
  return c.jsxs(c.Fragment, {
    children: [
      c.jsx(dd, { isOpen: o, onClose: () => l(!1), onScan: f, mode: "manual" }),
      c.jsx("div", {
        className:
          "bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4",
        children: c.jsxs("div", {
          className: "relative",
          children: [
            c.jsx("input", {
              ref: u,
              type: "text",
              value: r,
              onChange: (y) => i(y.target.value),
              onKeyPress: m,
              placeholder: "輸入或掃描條碼",
              disabled: s,
              className:
                "w-full px-4 py-2 pr-12 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed",
            }),
            c.jsx("button", {
              onClick: () => l(!0),
              disabled: s,
              className:
                "absolute right-1 top-1/2 -translate-y-1/2 p-2 text-blue-400 hover:text-blue-600 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
              "aria-label": "Scan code",
              children: s
                ? c.jsx("div", {
                    className:
                      "animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600",
                  })
                : c.jsx(Si, { className: "w-6 h-6" }),
            }),
          ],
        }),
      }),
    ],
  });
}
function eg(e, t = 300, n = 80) {
  const r = e.toString(),
    i = t / (r.length * 12),
    o = r.length * i * 6;
  let l = (t - o) / 2;
  const s = [];
  for (let a = 0; a < r.length; a++)
    ((parseInt(r[a]) || 0) % 2 === 0 ? [2, 1, 1, 2] : [1, 2, 2, 1]).forEach(
      (f, m) => {
        m % 2 === 0 &&
          s.push(
            `<rect x="${l}" y="10" width="${f * i}" height="${
              n - 30
            }" fill="black"/>`
          ),
          (l += f * i);
      }
    );
  return `
    <svg width="${t}" height="${n}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="white"/>
      ${s.join("")}
      <text x="${t / 2}" y="${
    n - 5
  }" font-family="monospace" font-size="14" text-anchor="middle" fill="black">
        ${r}
      </text>
    </svg>
  `;
}
function pd({
  medication: e,
  isOpen: t,
  onClose: n,
  onDeleteBarcode: r,
  onAddBarcode: i,
}) {
  const { t: o } = Tt(),
    { showNotification: l } = ms(),
    [s, a] = N.useState(""),
    [u, h] = N.useState(!1),
    [f, m] = N.useState(!1),
    y = N.useRef(null);
  if (
    (N.useEffect(() => {
      t &&
        setTimeout(() => {
          var d;
          (d = y.current) == null || d.focus();
        }, 100);
    }, [t]),
    !t || !e)
  )
    return null;
  const v = async () => {
      if (!s.trim()) return;
      const d = s.trim();
      if (!gs(d)) {
        l(
          "error",
          "條碼格式不正確，僅允許使用英文、數字及特殊符號 !#$%&'()*+,-./:;<=>?@[]^_`|~"
        ),
          a("");
        return;
      }
      m(!0);
      try {
        const p = await Ei(d);
        if (p.Result === "查無資料") {
          const x = { ...e, BARCODE: [...(e.BARCODE || []), d] },
            S = await Xr(x);
          S.Code === 200 && S.Data
            ? (l("success", "條碼新增成功！"), a(""), i && i(d))
            : (l("error", S.Result || "條碼新增失敗"), a(""));
        } else if (Array.isArray(p.Data) && p.Data.length > 0) {
          const x = p.Data[0];
          l("warning", `此條碼已建立於：${x.CHT_NAME} (${x.CODE})`), a("");
        } else l("error", "無法驗證條碼，請稍後再試"), a("");
      } catch (p) {
        console.error("Error adding barcode:", p),
          l("error", "系統錯誤，請稍後再試"),
          a("");
      } finally {
        m(!1);
      }
    },
    w = (d) => {
      d.key === "Enter" && v();
    },
    T = async (d) => {
      h(!1), m(!0);
      try {
        const p = await Ei(d);
        if (p.Result === "查無資料") {
          const x = { ...e, BARCODE: [...(e.BARCODE || []), d] },
            S = await Xr(x);
          S.Code === 200 && S.Data
            ? (l("success", "條碼新增成功！"), i && i(d))
            : l("error", S.Result || "條碼新增失敗");
        } else if (Array.isArray(p.Data) && p.Data.length > 0) {
          const x = p.Data[0];
          l("warning", `此條碼已建立於：${x.CHT_NAME} (${x.CODE})`);
        } else l("error", "無法驗證條碼，請稍後再試");
      } catch (p) {
        console.error("Error processing scanned barcode:", p),
          l("error", "系統錯誤，請稍後再試");
      } finally {
        m(!1),
          setTimeout(() => {
            var p;
            (p = y.current) == null || p.focus();
          }, 100);
      }
    },
    g = async (d) => {
      if (e) {
        m(!0);
        try {
          const p = (e.BARCODE || []).filter((E) => E !== d),
            x = { ...e, BARCODE: p },
            S = await Xr(x);
          S.Code === 200 && S.Data
            ? (l("success", "條碼刪除成功！"), r && r(d))
            : l("error", S.Result || "條碼刪除失敗");
        } catch (p) {
          console.error("Error deleting barcode:", p),
            l("error", "系統錯誤，請稍後再試");
        } finally {
          m(!1);
        }
      }
    };
  return c.jsxs(c.Fragment, {
    children: [
      c.jsx(dd, { isOpen: u, onClose: () => h(!1), onScan: T, mode: "manual" }),
      c.jsx("div", {
        className:
          "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50",
        onClick: n,
        children: c.jsxs("div", {
          className:
            "bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-hidden",
          onClick: (d) => d.stopPropagation(),
          children: [
            c.jsxs("div", {
              className:
                "flex items-center justify-between px-6 py-4 border-b border-gray-200",
              children: [
                c.jsx("h2", {
                  className: "text-2xl font-semibold text-gray-900",
                  children: o("barcode.modalTitle"),
                }),
                c.jsx("button", {
                  onClick: n,
                  className:
                    "p-2 hover:bg-gray-100 rounded-full transition-colors",
                  "aria-label": "Close",
                  children: c.jsx(ps, { className: "w-5 h-5 text-gray-500" }),
                }),
              ],
            }),
            c.jsxs("div", {
              className: "p-6 overflow-y-auto max-h-[calc(90vh-80px)]",
              children: [
                c.jsxs("div", {
                  className: "mb-6 space-y-3 bg-gray-50 p-4 rounded-lg",
                  children: [
                    c.jsx("div", {
                      children: c.jsx("p", {
                        className: "text-base text-gray-900 mt-1",
                        children: e.NAME,
                      }),
                    }),
                    c.jsx("div", {
                      children: c.jsx("p", {
                        className: "text-base text-gray-900 mt-1",
                        children: e.CHT_NAME,
                      }),
                    }),
                    c.jsx("div", {
                      children: c.jsx("p", {
                        className: "text-lg font-semibold text-gray-900 mt-1",
                        children: e.CODE,
                      }),
                    }),
                    e.STORAGE &&
                      e.STORAGE.length > 0 &&
                      c.jsx("div", {
                        className: "flex flex-wrap gap-2 pt-2",
                        children: e.STORAGE.map((d, p) =>
                          c.jsx(
                            "span",
                            {
                              className:
                                "inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200 shadow-sm",
                              children: d.info,
                            },
                            p
                          )
                        ),
                      }),
                  ],
                }),
                c.jsxs("div", {
                  className:
                    "mb-6 bg-blue-50 p-4 rounded-lg border border-blue-200",
                  children: [
                    c.jsx("label", {
                      htmlFor: "new-barcode",
                      className: "block text-sm font-medium text-gray-700 mb-2",
                      children: o("barcode.addNewBarcode"),
                    }),
                    c.jsxs("div", {
                      className: "flex gap-2",
                      children: [
                        c.jsxs("div", {
                          className: "flex-1 relative overflow-hidden",
                          children: [
                            c.jsx("input", {
                              ref: y,
                              id: "new-barcode",
                              type: "text",
                              value: s,
                              onChange: (d) => a(d.target.value),
                              onKeyPress: w,
                              placeholder: o("barcode.barcodePlaceholder"),
                              className:
                                "w-full px-4 py-2 pr-12 border border-gray-300 rounded-lg outline-none",
                            }),
                            c.jsx("button", {
                              onClick: () => h(!0),
                              className:
                                "absolute right-1 top-1/2 -translate-y-1/2 p-2 text-blue-400 hover:text-blue-600 rounded transition-colors",
                              "aria-label": "Scan barcode",
                              children: c.jsx(Si, { className: "w-6 h-6" }),
                            }),
                          ],
                        }),
                        c.jsx("button", {
                          onClick: v,
                          disabled: !s.trim() || f,
                          className:
                            "px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center gap-2 min-w-[100px]",
                          children: f
                            ? c.jsxs(c.Fragment, {
                                children: [
                                  c.jsx("div", {
                                    className:
                                      "w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin",
                                  }),
                                  "處理中...",
                                ],
                              })
                            : c.jsxs(c.Fragment, {
                                children: [
                                  c.jsx(Gp, { className: "w-5 h-5" }),
                                  o("barcode.addButton"),
                                ],
                              }),
                        }),
                      ],
                    }),
                  ],
                }),
                c.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    c.jsx("h3", {
                      className: "text-lg font-semibold text-gray-900 mb-4",
                      children: o("barcode.barcodeList"),
                    }),
                    e.BARCODE && e.BARCODE.length > 0
                      ? e.BARCODE.map((d, p) =>
                          c.jsxs(
                            "div",
                            {
                              className:
                                "border border-gray-200 rounded-lg p-6 bg-white hover:shadow-md transition-shadow",
                              children: [
                                c.jsxs("div", {
                                  className: "flex justify-between mb-1",
                                  children: [
                                    c.jsxs("span", {
                                      className: "font-medium text-gray-700",
                                      children: [
                                        o("barcode.barcodeNumber"),
                                        " ",
                                        p + 1,
                                      ],
                                    }),
                                    c.jsx("button", {
                                      onClick: () => g(d),
                                      disabled: f,
                                      className:
                                        "p-2 hover:bg-red-200 rounded-lg bg-red-50 transition-colors group disabled:opacity-50 disabled:cursor-not-allowed",
                                      "aria-label": "Delete barcode",
                                      children: c.jsx(Yp, {
                                        className:
                                          "w-5 h-5 text-red-400 group-hover:text-red-600",
                                      }),
                                    }),
                                  ],
                                }),
                                c.jsx("div", {
                                  className:
                                    "flex items-center justify-center bg-white p-4 rounded border border-gray-100",
                                  children: c.jsx("div", {
                                    dangerouslySetInnerHTML: {
                                      __html: eg(d, 280, 80),
                                    },
                                  }),
                                }),
                              ],
                            },
                            p
                          )
                        )
                      : c.jsx("div", {
                          className: "text-center py-8 text-gray-500",
                          children: c.jsx("p", {
                            children: o("barcode.noBarcodes"),
                          }),
                        }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function tg({ medications: e, isLoading: t }) {
  const { t: n } = Tt(),
    [r, i] = N.useState(null),
    [o, l] = N.useState(!1),
    [s, a] = N.useState(e);
  N.useEffect(() => {
    a(e);
  }, [e]);
  const u = (y) => {
      const v = s.find((w) => w.GUID === y.GUID) || y;
      i(v), l(!0);
    },
    h = () => {
      l(!1), i(null);
    },
    f = (y) => {
      if (!r) return;
      const v = s.map((w) => {
        if (w.GUID === r.GUID) {
          const T = { ...w, BARCODE: [...(w.BARCODE || []), y] };
          return i(T), T;
        }
        return w;
      });
      a(v);
    },
    m = (y) => {
      if (!r) return;
      const v = s.map((w) => {
        if (w.GUID === r.GUID) {
          const T = { ...w, BARCODE: (w.BARCODE || []).filter((g) => g !== y) };
          return i(T), T;
        }
        return w;
      });
      a(v);
    };
  return t
    ? c.jsx("div", {
        className: "mx-auto px-4 sm:px-6 lg:px-8 py-12",
        children: c.jsx("div", {
          className: "flex justify-center items-center",
          children: c.jsx("div", {
            className:
              "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600",
          }),
        }),
      })
    : s.length === 0
    ? c.jsx("div", {
        className: "mx-auto px-4 sm:px-6 lg:px-8 pt-12  pb-16",
        children: c.jsxs("div", {
          className: "text-center text-gray-500",
          children: [
            c.jsx(Qp, { className: "w-16 h-16 mx-auto mb-4 text-gray-300" }),
            c.jsx("p", {
              className: "text-lg",
              children: n("medication.noResults"),
            }),
            c.jsx("p", {
              className: "text-sm mt-2",
              children: n("medication.adjustFilter"),
            }),
          ],
        }),
      })
    : c.jsxs("div", {
        className: "mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16",
        children: [
          c.jsx("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
            children: s.map((y, v) => {
              const w = y.BARCODE && y.BARCODE.length > 0;
              return c.jsx(
                "div",
                {
                  onClick: () => u(y),
                  className: `border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow cursor-pointer ${
                    w ? "bg-green-100" : "bg-white"
                  }`,
                  children: c.jsxs("div", {
                    className:
                      "space-y-2 flex flex-col justify-between items-between h-full",
                    children: [
                      c.jsxs("div", {
                        className: "flex-1",
                        children: [
                          c.jsxs("div", {
                            children: [
                              c.jsx("h3", {
                                className:
                                  "text-lg font-semibold text-gray-900 mb-2",
                                children: y.NAME,
                              }),
                              c.jsx("p", {
                                className: "text-gray-600 mb-3",
                                children: y.CHT_NAME,
                              }),
                            ],
                          }),
                          c.jsx("div", {
                            className: "space-y-2",
                            children: c.jsx("div", {
                              className: "flex justify-between",
                              children: c.jsx("span", {
                                className: "text-gray-900 font-medium",
                                children: y.CODE,
                              }),
                            }),
                          }),
                        ],
                      }),
                      y.STORAGE &&
                        y.STORAGE.length > 0 &&
                        c.jsx("div", {
                          className: "flex flex-wrap gap-2 mb-3",
                          children: y.STORAGE.map((T, g) =>
                            c.jsx(
                              "span",
                              {
                                className:
                                  "inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200 shadow-sm",
                                children: T.info,
                              },
                              g
                            )
                          ),
                        }),
                    ],
                  }),
                },
                y.GUID || v
              );
            }),
          }),
          c.jsx(pd, {
            medication: r,
            isOpen: o,
            onClose: h,
            onAddBarcode: f,
            onDeleteBarcode: m,
          }),
        ],
      });
}
function ng() {
  const { t: e } = Tt(),
    t = new Date().getFullYear();
  return c.jsx("footer", {
    className:
      "fixed bottom-0 w-full bg-white border-t border-gray-200 mt-auto",
    children: c.jsx("div", {
      className: "mx-auto px-4 sm:px-6 lg:px-8 py-2",
      children: c.jsx("p", {
        className: "text-center text-sm text-gray-600",
        children: e("footer.copyright", { year: t }),
      }),
    }),
  });
}
async function rg(e, t) {
  const n = { Data: { ID: e, Password: t } },
    r = Vi(),
    i = await Hi(`${r}/api/session/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(n),
    });
  if (!i.ok) throw new Error("Network response was not ok");
  const o = await i.json();
  if (o.Code !== 200) throw new Error(o.Result || "Login failed");
  return o;
}
function ig() {
  const { t: e } = Tt(),
    { login: t } = hs(),
    [n, r] = N.useState(""),
    [i, o] = N.useState(""),
    [l, s] = N.useState(""),
    [a, u] = N.useState(!1),
    h = async (f) => {
      f.preventDefault(), s(""), u(!0);
      try {
        const m = await rg(n, i);
        t(m.Data);
      } catch (m) {
        m instanceof Error ? s(m.message) : s(e("login.error"));
      } finally {
        u(!1);
      }
    };
  return c.jsx("div", {
    className:
      "fixed inset-0 bg-gray-100 flex items-center justify-center z-50",
    children: c.jsxs("div", {
      className: "w-full max-w-md px-6",
      children: [
        c.jsx("div", {
          className: "text-center mb-8",
          children: c.jsx("h1", {
            className: "text-3xl font-bold text-gray-800 mb-2",
            children: e("login.title"),
          }),
        }),
        c.jsx("div", {
          className: "bg-white rounded-2xl shadow-2xl p-8",
          children: c.jsxs("form", {
            onSubmit: h,
            className: "space-y-6",
            children: [
              c.jsxs("div", {
                children: [
                  c.jsx("label", {
                    htmlFor: "id",
                    className: "block text-base font-medium text-gray-700 mb-2",
                    children: e("login.id"),
                  }),
                  c.jsx("div", {
                    className: "relative",
                    children: c.jsx("input", {
                      id: "id",
                      type: "text",
                      value: n,
                      onChange: (f) => r(f.target.value),
                      className:
                        "block w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base",
                      placeholder: e("login.idPlaceholder"),
                      required: !0,
                    }),
                  }),
                ],
              }),
              c.jsxs("div", {
                children: [
                  c.jsx("label", {
                    htmlFor: "password",
                    className: "block text-base font-medium text-gray-700 mb-2",
                    children: e("login.password"),
                  }),
                  c.jsx("div", {
                    className: "relative",
                    children: c.jsx("input", {
                      id: "password",
                      type: "password",
                      value: i,
                      onChange: (f) => o(f.target.value),
                      className:
                        "block w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base",
                      placeholder: e("login.passwordPlaceholder"),
                      required: !0,
                    }),
                  }),
                ],
              }),
              l &&
                c.jsx("div", {
                  className: "bg-red-50 border border-red-200 rounded-lg p-3",
                  children: c.jsx("p", {
                    className: "text-base text-red-600",
                    children: l,
                  }),
                }),
              c.jsx("button", {
                type: "submit",
                disabled: a,
                className:
                  "w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium text-base hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                children: e(a ? "login.loggingIn" : "login.submit"),
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
function og({
  isOpen: e,
  onClose: t,
  barcodeValue: n,
  medications: r,
  onSuccess: i,
}) {
  const { showNotification: o } = ms(),
    [l, s] = N.useState(""),
    [a, u] = N.useState(""),
    [h, f] = N.useState(""),
    [m, y] = N.useState(""),
    [v, w] = N.useState(!1),
    [T, g] = N.useState([]),
    [d, p] = N.useState([]),
    [x, S] = N.useState([]),
    [E, L] = N.useState([]),
    [j, D] = N.useState(null),
    _ = N.useRef(null),
    ne = N.useRef(null),
    I = N.useRef(null),
    z = N.useRef(null);
  N.useEffect(() => {
    const O = (k) => {
      _.current && !_.current.contains(k.target) && j === "name" && D(null),
        ne.current &&
          !ne.current.contains(k.target) &&
          j === "chtName" &&
          D(null),
        I.current && !I.current.contains(k.target) && j === "code" && D(null),
        z.current &&
          !z.current.contains(k.target) &&
          j === "materialCode" &&
          D(null);
    };
    return (
      document.addEventListener("mousedown", O),
      () => document.removeEventListener("mousedown", O)
    );
  }, [j]),
    N.useEffect(() => {
      if (l.trim()) {
        const O = l.toLowerCase(),
          k = r
            .filter((P) => P.NAME.toLowerCase().includes(O))
            .slice(0, 10)
            .map((P) => ({ medication: P, matchField: "NAME" }));
        g(k);
      } else g([]);
    }, [l, r]),
    N.useEffect(() => {
      if (a.trim()) {
        const O = a.toLowerCase(),
          k = r
            .filter((P) => P.CHT_NAME.toLowerCase().includes(O))
            .slice(0, 10)
            .map((P) => ({ medication: P, matchField: "CHT_NAME" }));
        p(k);
      } else p([]);
    }, [a, r]),
    N.useEffect(() => {
      if (h.trim()) {
        const O = h.toLowerCase(),
          k = r
            .filter((P) => P.CODE.toLowerCase().includes(O))
            .slice(0, 10)
            .map((P) => ({ medication: P, matchField: "CODE" }));
        S(k);
      } else S([]);
    }, [h, r]),
    N.useEffect(() => {
      if (m.trim()) {
        const O = m.toLowerCase(),
          k = r
            .filter(
              (P) =>
                P.MATERIAL_CODE && P.MATERIAL_CODE.toLowerCase().includes(O)
            )
            .slice(0, 10)
            .map((P) => ({ medication: P, matchField: "MATERIAL_CODE" }));
        L(k);
      } else L([]);
    }, [m, r]);
  const F = (O) => {
      s(O.NAME), u(O.CHT_NAME), f(O.CODE), y(O.MATERIAL_CODE || ""), D(null);
    },
    H = () => {
      s(""), u(""), f(""), y(""), t();
    },
    X = async () => {
      if (!gs(n)) {
        o("error", "條碼格式不正確");
        return;
      }
      if (!h.trim()) {
        o("error", "請選擇或輸入藥碼");
        return;
      }
      const O = r.find((k) => k.CODE === h && k.NAME === l && k.CHT_NAME === a);
      if (!O) {
        o("error", "找不到對應的藥品，請確認輸入資料是否正確");
        return;
      }
      if (O.BARCODE && O.BARCODE.includes(n)) {
        o("warning", "此條碼已存在於該藥品");
        return;
      }
      w(!0);
      try {
        const k = { ...O, BARCODE: [...(O.BARCODE || []), n] },
          P = await Xr(k);
        P.Code === 200 && P.Data
          ? (o("success", "條碼建立成功！"), H(), i && i())
          : o("error", P.Result || "條碼建立失敗");
      } catch (k) {
        console.error("Error creating barcode:", k),
          o("error", "系統錯誤，請稍後再試");
      } finally {
        w(!1);
      }
    };
  return e
    ? c.jsx("div", {
        className:
          "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",
        onClick: H,
        children: c.jsxs("div", {
          className:
            "bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-hidden",
          onClick: (O) => O.stopPropagation(),
          children: [
            c.jsxs("div", {
              className:
                "flex items-center justify-between px-6 py-4 border-b border-gray-200",
              children: [
                c.jsx("h2", {
                  className: "text-2xl font-semibold text-gray-900",
                  children: "條碼建立",
                }),
                c.jsx("button", {
                  onClick: H,
                  className:
                    "p-2 hover:bg-gray-100 rounded-full transition-colors",
                  "aria-label": "Close",
                  children: c.jsx(ps, { className: "w-5 h-5 text-gray-500" }),
                }),
              ],
            }),
            c.jsx("div", {
              className: "p-6 overflow-y-auto max-h-[calc(90vh-140px)]",
              children: c.jsxs("div", {
                className: "space-y-4",
                children: [
                  c.jsxs("div", {
                    children: [
                      c.jsx("label", {
                        className:
                          "block text-sm font-medium text-gray-700 mb-2",
                        children: "條碼",
                      }),
                      c.jsx("input", {
                        type: "text",
                        value: n,
                        disabled: !0,
                        className:
                          "w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-600 cursor-not-allowed",
                      }),
                    ],
                  }),
                  c.jsxs("div", {
                    ref: _,
                    className: "relative",
                    children: [
                      c.jsx("label", {
                        className:
                          "block text-sm font-medium text-gray-700 mb-2",
                        children: "藥名",
                      }),
                      c.jsx("input", {
                        type: "text",
                        value: l,
                        onChange: (O) => s(O.target.value),
                        onFocus: () => D("name"),
                        placeholder: "輸入藥名進行搜尋",
                        className:
                          "w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                      }),
                      j === "name" &&
                        T.length > 0 &&
                        c.jsx("div", {
                          className:
                            "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                          children: T.map((O, k) =>
                            c.jsxs(
                              "div",
                              {
                                onClick: () => F(O.medication),
                                className:
                                  "px-4 py-2 hover:bg-blue-50 cursor-pointer border-b border-gray-100 last:border-b-0",
                                children: [
                                  c.jsx("div", {
                                    className: "font-medium text-gray-900",
                                    children: O.medication.NAME,
                                  }),
                                  c.jsx("div", {
                                    className: "text-sm text-gray-600",
                                    children: O.medication.CHT_NAME,
                                  }),
                                  c.jsxs("div", {
                                    className: "text-xs text-gray-500",
                                    children: ["藥碼: ", O.medication.CODE],
                                  }),
                                ],
                              },
                              k
                            )
                          ),
                        }),
                    ],
                  }),
                  c.jsxs("div", {
                    ref: I,
                    className: "relative",
                    children: [
                      c.jsx("label", {
                        className:
                          "block text-sm font-medium text-gray-700 mb-2",
                        children: "藥碼",
                      }),
                      c.jsx("input", {
                        type: "text",
                        value: h,
                        onChange: (O) => f(O.target.value),
                        onFocus: () => D("code"),
                        placeholder: "輸入藥碼進行搜尋",
                        className:
                          "w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                      }),
                      j === "code" &&
                        x.length > 0 &&
                        c.jsx("div", {
                          className:
                            "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                          children: x.map((O, k) =>
                            c.jsxs(
                              "div",
                              {
                                onClick: () => F(O.medication),
                                className:
                                  "px-4 py-2 hover:bg-blue-50 cursor-pointer border-b border-gray-100 last:border-b-0",
                                children: [
                                  c.jsx("div", {
                                    className: "font-medium text-gray-900",
                                    children: O.medication.CODE,
                                  }),
                                  c.jsx("div", {
                                    className: "text-sm text-gray-600",
                                    children: O.medication.NAME,
                                  }),
                                  c.jsx("div", {
                                    className: "text-xs text-gray-500",
                                    children: O.medication.CHT_NAME,
                                  }),
                                ],
                              },
                              k
                            )
                          ),
                        }),
                    ],
                  }),
                  c.jsxs("div", {
                    ref: ne,
                    className: "relative",
                    children: [
                      c.jsx("label", {
                        className:
                          "block text-sm font-medium text-gray-700 mb-2",
                        children: "中文名",
                      }),
                      c.jsx("input", {
                        type: "text",
                        value: a,
                        onChange: (O) => u(O.target.value),
                        onFocus: () => D("chtName"),
                        placeholder: "輸入中文名進行搜尋",
                        className:
                          "w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                      }),
                      j === "chtName" &&
                        d.length > 0 &&
                        c.jsx("div", {
                          className:
                            "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                          children: d.map((O, k) =>
                            c.jsxs(
                              "div",
                              {
                                onClick: () => F(O.medication),
                                className:
                                  "px-4 py-2 hover:bg-blue-50 cursor-pointer border-b border-gray-100 last:border-b-0",
                                children: [
                                  c.jsx("div", {
                                    className: "font-medium text-gray-900",
                                    children: O.medication.CHT_NAME,
                                  }),
                                  c.jsx("div", {
                                    className: "text-sm text-gray-600",
                                    children: O.medication.NAME,
                                  }),
                                  c.jsxs("div", {
                                    className: "text-xs text-gray-500",
                                    children: ["藥碼: ", O.medication.CODE],
                                  }),
                                ],
                              },
                              k
                            )
                          ),
                        }),
                    ],
                  }),
                  c.jsxs("div", {
                    ref: z,
                    className: "relative",
                    children: [
                      c.jsx("label", {
                        className:
                          "block text-sm font-medium text-gray-700 mb-2",
                        children: "料號",
                      }),
                      c.jsx("input", {
                        type: "text",
                        value: m,
                        onChange: (O) => y(O.target.value),
                        onFocus: () => D("materialCode"),
                        placeholder: "輸入料號進行搜尋",
                        className:
                          "w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                      }),
                      j === "materialCode" &&
                        E.length > 0 &&
                        c.jsx("div", {
                          className:
                            "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                          children: E.map((O, k) =>
                            c.jsxs(
                              "div",
                              {
                                onClick: () => F(O.medication),
                                className:
                                  "px-4 py-2 hover:bg-blue-50 cursor-pointer border-b border-gray-100 last:border-b-0",
                                children: [
                                  c.jsx("div", {
                                    className: "font-medium text-gray-900",
                                    children: O.medication.MATERIAL_CODE,
                                  }),
                                  c.jsx("div", {
                                    className: "text-sm text-gray-600",
                                    children: O.medication.NAME,
                                  }),
                                  c.jsx("div", {
                                    className: "text-xs text-gray-500",
                                    children: O.medication.CHT_NAME,
                                  }),
                                ],
                              },
                              k
                            )
                          ),
                        }),
                    ],
                  }),
                ],
              }),
            }),
            c.jsxs("div", {
              className:
                "px-6 py-4 border-t border-gray-200 flex gap-3 justify-end",
              children: [
                c.jsx("button", {
                  onClick: H,
                  disabled: v,
                  className:
                    "px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                  children: "取消",
                }),
                c.jsx("button", {
                  onClick: X,
                  disabled: v,
                  className:
                    "px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2",
                  children: v
                    ? c.jsxs(c.Fragment, {
                        children: [
                          c.jsx("div", {
                            className:
                              "animate-spin rounded-full h-4 w-4 border-b-2 border-white",
                          }),
                          "處理中...",
                        ],
                      })
                    : "建立",
                }),
              ],
            }),
          ],
        }),
      })
    : null;
}
function lg() {
  const { isAuthenticated: e } = hs(),
    [t, n] = N.useState([]),
    [r, i] = N.useState([]),
    [o, l] = N.useState(!0),
    [s, a] = N.useState(!1),
    [u, h] = N.useState("all"),
    [f, m] = N.useState(""),
    [y, v] = N.useState(null),
    [w, T] = N.useState(null),
    [g, d] = N.useState(null),
    [p, x] = N.useState("code"),
    [S, E] = N.useState("asc"),
    [L, j] = N.useState(null),
    [D, _] = N.useState(!1),
    [ne, I] = N.useState(!1),
    [z, F] = N.useState("");
  N.useEffect(() => {
    (async () => {
      try {
        await Qh(), a(!0);
      } catch (b) {
        console.error("Failed to load configuration:", b);
      }
    })();
  }, []),
    N.useEffect(() => {
      s && e && H();
    }, [s, e]),
    N.useEffect(() => {
      X();
    }, [t, u, f, y, w, g, p, S]);
  const H = async () => {
      try {
        l(!0);
        const A = await Xh();
        n(A), i(A);
      } catch (A) {
        console.error("Error fetching medications:", A);
      } finally {
        l(!1);
      }
    },
    X = () => {
      let A = [...t];
      if (
        (u !== "all" && (A = A.filter((b) => b.group_name === u)), f.trim())
      ) {
        const b = f.toLowerCase().trim();
        A = A.filter(
          (J) =>
            J.CODE.toLowerCase().includes(b) ||
            J.NAME.toLowerCase().includes(b) ||
            J.CHT_NAME.toLowerCase().includes(b) ||
            (J.BARCODE && J.BARCODE.some((Ce) => Ce.toLowerCase().includes(b)))
        );
      }
      y &&
        (y === "開檔"
          ? (A = A.filter((b) => b.FILE_STATUS !== "關檔中"))
          : y === "關檔" && (A = A.filter((b) => b.FILE_STATUS === "關檔中"))),
        w && (A = A.filter((b) => b.TORW === w)),
        g &&
          (g === "has"
            ? (A = A.filter((b) => b.BARCODE && b.BARCODE.length > 0))
            : g === "none" &&
              (A = A.filter((b) => !b.BARCODE || b.BARCODE.length === 0))),
        A.sort((b, J) => {
          let Ce, Pe;
          return (
            p === "code"
              ? ((Ce = b.CODE), (Pe = J.CODE))
              : p === "name"
              ? ((Ce = b.NAME), (Pe = J.NAME))
              : ((Ce = b.CHT_NAME), (Pe = J.CHT_NAME)),
            S === "asc" ? Ce.localeCompare(Pe) : Pe.localeCompare(Ce)
          );
        }),
        i(A);
    },
    O = () => {
      X();
    },
    k = () => {
      const A = [
          ["藥碼", "藥名", "中文名", "條碼"],
          ...r.map((Pe) => [
            Pe.CODE,
            Pe.NAME,
            Pe.CHT_NAME,
            Pe.BARCODE ? Pe.BARCODE.join(";") : "",
          ]),
        ].map((Pe) => Pe.join(",")).join(`
`),
        b = new Blob(["\uFEFF" + A], { type: "text/csv;charset=utf-8;" }),
        J = document.createElement("a"),
        Ce = URL.createObjectURL(b);
      J.setAttribute("href", Ce),
        J.setAttribute(
          "download",
          `medications_${new Date().toISOString().split("T")[0]}.csv`
        ),
        (J.style.visibility = "hidden"),
        document.body.appendChild(J),
        J.click(),
        document.body.removeChild(J);
    };
  if (!s)
    return c.jsx("div", {
      className:
        "min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center",
      children: c.jsxs("div", {
        className: "text-center",
        children: [
          c.jsx("div", {
            className:
              "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4",
          }),
          c.jsx("p", {
            className: "text-gray-600",
            children: "Loading configuration...",
          }),
        ],
      }),
    });
  if (!e) return c.jsx(ig, {});
  const P = (A) => {
      j(A), _(!0);
    },
    $ = (A) => {
      F(A), I(!0);
    },
    B = () => {
      _(!1), j(null);
    },
    K = () => {
      I(!1), F("");
    },
    ke = () => {
      H();
    };
  return c.jsxs("div", {
    className: "min-h-screen flex flex-col",
    children: [
      c.jsx(Vh, {}),
      c.jsxs("div", {
        className: "mx-auto px-4 sm:px-6 lg:px-8 w-full",
        children: [
          c.jsx(qh, { onMedicationFound: P, onMedicationNotFound: $ }),
          c.jsx(Wh, {
            fileStatusFilter: y,
            setFileStatusFilter: v,
            torwFilter: w,
            setTorwFilter: T,
            barcodeFilter: g,
            setBarcodeFilter: d,
          }),
          c.jsx(Kh, { sortBy: p, setSortBy: x, sortOrder: S, setSortOrder: E }),
          c.jsx(Hh, {
            resultCount: r.length,
            groupFilter: u,
            setGroupFilter: h,
            searchQuery: f,
            setSearchQuery: m,
            onSearch: O,
            onExport: k,
          }),
        ],
      }),
      c.jsx("div", {
        className: "flex-1",
        children: c.jsx(tg, { medications: r, isLoading: o }),
      }),
      c.jsx(ng, {}),
      c.jsx(pd, {
        medication: L,
        isOpen: D,
        onClose: B,
        onAddBarcode: ke,
        onDeleteBarcode: ke,
      }),
      c.jsx(og, {
        isOpen: ne,
        onClose: K,
        barcodeValue: z,
        medications: t,
        onSuccess: ke,
      }),
    ],
  });
}
const sg = {
    translation: {
      nav: {
        title: "條碼建置",
        subtitle: "鴻森智能科技 - 好好",
        language: "繁體中文",
        logout: "登出",
      },
      login: {
        title: "條碼建置",
        subtitle: "請登入以繼續",
        id: "帳號",
        idPlaceholder: "請輸入帳號",
        password: "密碼",
        passwordPlaceholder: "請輸入密碼",
        submit: "登入",
        loggingIn: "登入中...",
        error: "登入失敗，請重試。",
      },
      search: {
        results: "搜尋結果",
        count: "筆",
        allGroups: "全部藥品群組",
        placeholder: "搜尋藥碼、藥名、料號...",
        searchButton: "搜尋",
        export: "匯出",
      },
      medication: {
        code: "藥碼：",
        material: "料號：",
        barcode: "條碼：",
        noResults: "目前沒有搜尋結果",
        adjustFilter: "請調整搜尋條件或篩選器",
      },
      barcode: {
        modalTitle: "藥品條碼資訊",
        medicationCode: "藥碼",
        englishName: "藥品名稱",
        chineseName: "中文名稱",
        barcodeList: "條碼列表",
        barcodeNumber: "條碼",
        noBarcodes: "此藥品尚無條碼資料",
        addNewBarcode: "新增條碼",
        barcodePlaceholder: "請輸入條碼號碼",
        addButton: "新增",
      },
      scanner: {
        title: "條碼掃描",
        instruction: "請將條碼對準鏡頭",
        supportedFormats: "支援一維條碼與二維條碼（QR Code）",
        focusHint: "點擊畫面回對焦",
        cameraError: "無法存取相機，請確認已授予相機權限",
      },
      footer: { copyright: "Copyright ©{{year}} 鴻森智能科技" },
      groups: {
        painRelief: "止痛退燒藥",
        antibiotic: "抗生素",
        vitamin: "維他命",
        cardiovascular: "心血管藥物",
      },
    },
  },
  ag = {
    translation: {
      nav: {
        title: "Barcode Management",
        subtitle: "Hongsen Smart Technology - Clinical Pharmacy",
        language: "English",
        logout: "Logout",
      },
      login: {
        title: "Barcode Management",
        subtitle: "Please sign in to continue",
        id: "User ID",
        idPlaceholder: "Enter your ID",
        password: "Password",
        passwordPlaceholder: "Enter your password",
        submit: "Sign In",
        loggingIn: "Signing In...",
        error: "Login failed. Please try again.",
      },
      search: {
        results: "Search Results",
        count: "items",
        allGroups: "All Medication Groups",
        placeholder: "Search by code, name, material number...",
        searchButton: "Search",
        export: "Export",
      },
      medication: {
        code: "Code:",
        material: "Material No:",
        barcode: "Barcode:",
        noResults: "No search results found",
        adjustFilter: "Please adjust your search criteria or filters",
      },
      barcode: {
        modalTitle: "Medication Barcode Information",
        medicationCode: "Medication Code",
        englishName: "Medication Name",
        chineseName: "Chinese Name",
        barcodeList: "Barcode List",
        barcodeNumber: "Barcode",
        noBarcodes: "No barcode data available for this medication",
        addNewBarcode: "Add New Barcode",
        barcodePlaceholder: "Enter barcode number",
        addButton: "Add",
      },
      scanner: {
        title: "Barcode Scanner",
        instruction: "Point the barcode at the camera",
        supportedFormats: "Supports 1D and 2D barcodes (QR Code)",
        focusHint: "Click screen to refocus",
        cameraError:
          "Unable to access camera, please ensure camera permissions are granted",
      },
      footer: { copyright: "Copyright ©{{year}} Hongsen Smart Technology" },
      groups: {
        painRelief: "Pain Relief",
        antibiotic: "Antibiotic",
        vitamin: "Vitamin",
        cardiovascular: "Cardiovascular",
      },
    },
  },
  ug = { "zh-TW": sg, en: ag };
Se.use(jh).init({
  resources: ug,
  lng: "zh-TW",
  fallbackLng: "zh-TW",
  interpolation: { escapeValue: !1 },
});
td(document.getElementById("root")).render(
  c.jsx(N.StrictMode, {
    children: c.jsx(bh, { children: c.jsx(Jh, { children: c.jsx(lg, {}) }) }),
  })
);
