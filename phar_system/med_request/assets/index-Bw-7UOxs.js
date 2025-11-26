function wp(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const l = Object.getOwnPropertyDescriptor(r, o);
          l &&
            Object.defineProperty(
              e,
              o,
              l.get ? l : { enumerable: !0, get: () => r[o] }
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
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const l of o)
      if (l.type === "childList")
        for (const i of l.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
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
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const l = n(o);
    fetch(o.href, l);
  }
})();
function xp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var pc = { exports: {} },
  _l = {},
  mc = { exports: {} },
  A = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var mo = Symbol.for("react.element"),
  Sp = Symbol.for("react.portal"),
  kp = Symbol.for("react.fragment"),
  bp = Symbol.for("react.strict_mode"),
  Ep = Symbol.for("react.profiler"),
  Np = Symbol.for("react.provider"),
  Cp = Symbol.for("react.context"),
  Pp = Symbol.for("react.forward_ref"),
  Tp = Symbol.for("react.suspense"),
  jp = Symbol.for("react.memo"),
  Op = Symbol.for("react.lazy"),
  Ba = Symbol.iterator;
function Mp(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ba && e[Ba]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var hc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  gc = Object.assign,
  yc = {};
function fr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = yc),
    (this.updater = n || hc);
}
fr.prototype.isReactComponent = {};
fr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
fr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function vc() {}
vc.prototype = fr.prototype;
function Fs(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = yc),
    (this.updater = n || hc);
}
var zs = (Fs.prototype = new vc());
zs.constructor = Fs;
gc(zs, fr.prototype);
zs.isPureReactComponent = !0;
var Va = Array.isArray,
  wc = Object.prototype.hasOwnProperty,
  Is = { current: null },
  xc = { key: !0, ref: !0, __self: !0, __source: !0 };
function Sc(e, t, n) {
  var r,
    o = {},
    l = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (l = "" + t.key),
    t))
      wc.call(t, r) && !xc.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) o.children = n;
  else if (1 < s) {
    for (var a = Array(s), u = 0; u < s; u++) a[u] = arguments[u + 2];
    o.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) o[r] === void 0 && (o[r] = s[r]);
  return {
    $$typeof: mo,
    type: e,
    key: l,
    ref: i,
    props: o,
    _owner: Is.current,
  };
}
function Lp(e, t) {
  return {
    $$typeof: mo,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function As(e) {
  return typeof e == "object" && e !== null && e.$$typeof === mo;
}
function _p(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Ya = /\/+/g;
function ti(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? _p("" + e.key)
    : t.toString(36);
}
function Qo(e, t, n, r, o) {
  var l = typeof e;
  (l === "undefined" || l === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (l) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case mo:
          case Sp:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (o = o(i)),
      (e = r === "" ? "." + ti(i, 0) : r),
      Va(o)
        ? ((n = ""),
          e != null && (n = e.replace(Ya, "$&/") + "/"),
          Qo(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (As(o) &&
            (o = Lp(
              o,
              n +
                (!o.key || (i && i.key === o.key)
                  ? ""
                  : ("" + o.key).replace(Ya, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), Va(e)))
    for (var s = 0; s < e.length; s++) {
      l = e[s];
      var a = r + ti(l, s);
      i += Qo(l, t, n, a, o);
    }
  else if (((a = Mp(e)), typeof a == "function"))
    for (e = a.call(e), s = 0; !(l = e.next()).done; )
      (l = l.value), (a = r + ti(l, s++)), (i += Qo(l, t, n, a, o));
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
  return i;
}
function No(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Qo(e, r, "", "", function (l) {
      return t.call(n, l, o++);
    }),
    r
  );
}
function Dp(e) {
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
var Me = { current: null },
  Bo = { transition: null },
  $p = {
    ReactCurrentDispatcher: Me,
    ReactCurrentBatchConfig: Bo,
    ReactCurrentOwner: Is,
  };
function kc() {
  throw Error("act(...) is not supported in production builds of React.");
}
A.Children = {
  map: No,
  forEach: function (e, t, n) {
    No(
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
      No(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      No(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!As(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
A.Component = fr;
A.Fragment = kp;
A.Profiler = Ep;
A.PureComponent = Fs;
A.StrictMode = bp;
A.Suspense = Tp;
A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $p;
A.act = kc;
A.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = gc({}, e.props),
    o = e.key,
    l = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((l = t.ref), (i = Is.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (a in t)
      wc.call(t, a) &&
        !xc.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    s = Array(a);
    for (var u = 0; u < a; u++) s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: mo, type: e.type, key: o, ref: l, props: r, _owner: i };
};
A.createContext = function (e) {
  return (
    (e = {
      $$typeof: Cp,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Np, _context: e }),
    (e.Consumer = e)
  );
};
A.createElement = Sc;
A.createFactory = function (e) {
  var t = Sc.bind(null, e);
  return (t.type = e), t;
};
A.createRef = function () {
  return { current: null };
};
A.forwardRef = function (e) {
  return { $$typeof: Pp, render: e };
};
A.isValidElement = As;
A.lazy = function (e) {
  return { $$typeof: Op, _payload: { _status: -1, _result: e }, _init: Dp };
};
A.memo = function (e, t) {
  return { $$typeof: jp, type: e, compare: t === void 0 ? null : t };
};
A.startTransition = function (e) {
  var t = Bo.transition;
  Bo.transition = {};
  try {
    e();
  } finally {
    Bo.transition = t;
  }
};
A.unstable_act = kc;
A.useCallback = function (e, t) {
  return Me.current.useCallback(e, t);
};
A.useContext = function (e) {
  return Me.current.useContext(e);
};
A.useDebugValue = function () {};
A.useDeferredValue = function (e) {
  return Me.current.useDeferredValue(e);
};
A.useEffect = function (e, t) {
  return Me.current.useEffect(e, t);
};
A.useId = function () {
  return Me.current.useId();
};
A.useImperativeHandle = function (e, t, n) {
  return Me.current.useImperativeHandle(e, t, n);
};
A.useInsertionEffect = function (e, t) {
  return Me.current.useInsertionEffect(e, t);
};
A.useLayoutEffect = function (e, t) {
  return Me.current.useLayoutEffect(e, t);
};
A.useMemo = function (e, t) {
  return Me.current.useMemo(e, t);
};
A.useReducer = function (e, t, n) {
  return Me.current.useReducer(e, t, n);
};
A.useRef = function (e) {
  return Me.current.useRef(e);
};
A.useState = function (e) {
  return Me.current.useState(e);
};
A.useSyncExternalStore = function (e, t, n) {
  return Me.current.useSyncExternalStore(e, t, n);
};
A.useTransition = function () {
  return Me.current.useTransition();
};
A.version = "18.3.1";
mc.exports = A;
var y = mc.exports;
const H = xp(y),
  qr = wp({ __proto__: null, default: H }, [y]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Rp = y,
  Fp = Symbol.for("react.element"),
  zp = Symbol.for("react.fragment"),
  Ip = Object.prototype.hasOwnProperty,
  Ap = Rp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Up = { key: !0, ref: !0, __self: !0, __source: !0 };
function bc(e, t, n) {
  var r,
    o = {},
    l = null,
    i = null;
  n !== void 0 && (l = "" + n),
    t.key !== void 0 && (l = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) Ip.call(t, r) && !Up.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: Fp,
    type: e,
    key: l,
    ref: i,
    props: o,
    _owner: Ap.current,
  };
}
_l.Fragment = zp;
_l.jsx = bc;
_l.jsxs = bc;
pc.exports = _l;
var c = pc.exports,
  Ec = { exports: {} },
  Ve = {},
  Nc = { exports: {} },
  Cc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(j, D) {
    var $ = j.length;
    j.push(D);
    e: for (; 0 < $; ) {
      var R = ($ - 1) >>> 1,
        B = j[R];
      if (0 < o(B, D)) (j[R] = D), (j[$] = B), ($ = R);
      else break e;
    }
  }
  function n(j) {
    return j.length === 0 ? null : j[0];
  }
  function r(j) {
    if (j.length === 0) return null;
    var D = j[0],
      $ = j.pop();
    if ($ !== D) {
      j[0] = $;
      e: for (var R = 0, B = j.length, yt = B >>> 1; R < yt; ) {
        var ae = 2 * (R + 1) - 1,
          Ge = j[ae],
          ot = ae + 1,
          vt = j[ot];
        if (0 > o(Ge, $))
          ot < B && 0 > o(vt, Ge)
            ? ((j[R] = vt), (j[ot] = $), (R = ot))
            : ((j[R] = Ge), (j[ae] = $), (R = ae));
        else if (ot < B && 0 > o(vt, $)) (j[R] = vt), (j[ot] = $), (R = ot);
        else break e;
      }
    }
    return D;
  }
  function o(j, D) {
    var $ = j.sortIndex - D.sortIndex;
    return $ !== 0 ? $ : j.id - D.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var l = performance;
    e.unstable_now = function () {
      return l.now();
    };
  } else {
    var i = Date,
      s = i.now();
    e.unstable_now = function () {
      return i.now() - s;
    };
  }
  var a = [],
    u = [],
    d = 1,
    p = null,
    g = 3,
    x = !1,
    v = !1,
    w = !1,
    b = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(j) {
    for (var D = n(u); D !== null; ) {
      if (D.callback === null) r(u);
      else if (D.startTime <= j)
        r(u), (D.sortIndex = D.expirationTime), t(a, D);
      else break;
      D = n(u);
    }
  }
  function k(j) {
    if (((w = !1), h(j), !v))
      if (n(a) !== null) (v = !0), _e(N);
      else {
        var D = n(u);
        D !== null && pe(k, D.startTime - j);
      }
  }
  function N(j, D) {
    (v = !1), w && ((w = !1), m(M), (M = -1)), (x = !0);
    var $ = g;
    try {
      for (
        h(D), p = n(a);
        p !== null && (!(p.expirationTime > D) || (j && !re()));

      ) {
        var R = p.callback;
        if (typeof R == "function") {
          (p.callback = null), (g = p.priorityLevel);
          var B = R(p.expirationTime <= D);
          (D = e.unstable_now()),
            typeof B == "function" ? (p.callback = B) : p === n(a) && r(a),
            h(D);
        } else r(a);
        p = n(a);
      }
      if (p !== null) var yt = !0;
      else {
        var ae = n(u);
        ae !== null && pe(k, ae.startTime - D), (yt = !1);
      }
      return yt;
    } finally {
      (p = null), (g = $), (x = !1);
    }
  }
  var C = !1,
    T = null,
    M = -1,
    I = 5,
    _ = -1;
  function re() {
    return !(e.unstable_now() - _ < I);
  }
  function z() {
    if (T !== null) {
      var j = e.unstable_now();
      _ = j;
      var D = !0;
      try {
        D = T(!0, j);
      } finally {
        D ? ye() : ((C = !1), (T = null));
      }
    } else C = !1;
  }
  var ye;
  if (typeof f == "function")
    ye = function () {
      f(z);
    };
  else if (typeof MessageChannel < "u") {
    var Se = new MessageChannel(),
      Te = Se.port2;
    (Se.port1.onmessage = z),
      (ye = function () {
        Te.postMessage(null);
      });
  } else
    ye = function () {
      b(z, 0);
    };
  function _e(j) {
    (T = j), C || ((C = !0), ye());
  }
  function pe(j, D) {
    M = b(function () {
      j(e.unstable_now());
    }, D);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (j) {
      j.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || x || ((v = !0), _e(N));
    }),
    (e.unstable_forceFrameRate = function (j) {
      0 > j || 125 < j
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (I = 0 < j ? Math.floor(1e3 / j) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return g;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (j) {
      switch (g) {
        case 1:
        case 2:
        case 3:
          var D = 3;
          break;
        default:
          D = g;
      }
      var $ = g;
      g = D;
      try {
        return j();
      } finally {
        g = $;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (j, D) {
      switch (j) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          j = 3;
      }
      var $ = g;
      g = j;
      try {
        return D();
      } finally {
        g = $;
      }
    }),
    (e.unstable_scheduleCallback = function (j, D, $) {
      var R = e.unstable_now();
      switch (
        (typeof $ == "object" && $ !== null
          ? (($ = $.delay), ($ = typeof $ == "number" && 0 < $ ? R + $ : R))
          : ($ = R),
        j)
      ) {
        case 1:
          var B = -1;
          break;
        case 2:
          B = 250;
          break;
        case 5:
          B = 1073741823;
          break;
        case 4:
          B = 1e4;
          break;
        default:
          B = 5e3;
      }
      return (
        (B = $ + B),
        (j = {
          id: d++,
          callback: D,
          priorityLevel: j,
          startTime: $,
          expirationTime: B,
          sortIndex: -1,
        }),
        $ > R
          ? ((j.sortIndex = $),
            t(u, j),
            n(a) === null &&
              j === n(u) &&
              (w ? (m(M), (M = -1)) : (w = !0), pe(k, $ - R)))
          : ((j.sortIndex = B), t(a, j), v || x || ((v = !0), _e(N))),
        j
      );
    }),
    (e.unstable_shouldYield = re),
    (e.unstable_wrapCallback = function (j) {
      var D = g;
      return function () {
        var $ = g;
        g = D;
        try {
          return j.apply(this, arguments);
        } finally {
          g = $;
        }
      };
    });
})(Cc);
Nc.exports = Cc;
var Hp = Nc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Wp = y,
  Be = Hp;
function E(e) {
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
var Pc = new Set(),
  Gr = {};
function Ln(e, t) {
  lr(e, t), lr(e + "Capture", t);
}
function lr(e, t) {
  for (Gr[e] = t, e = 0; e < t.length; e++) Pc.add(t[e]);
}
var $t = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  $i = Object.prototype.hasOwnProperty,
  Qp =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  qa = {},
  Ga = {};
function Bp(e) {
  return $i.call(Ga, e)
    ? !0
    : $i.call(qa, e)
    ? !1
    : Qp.test(e)
    ? (Ga[e] = !0)
    : ((qa[e] = !0), !1);
}
function Vp(e, t, n, r) {
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
function Yp(e, t, n, r) {
  if (t === null || typeof t > "u" || Vp(e, t, n, r)) return !0;
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
function Le(e, t, n, r, o, l, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = l),
    (this.removeEmptyString = i);
}
var xe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    xe[e] = new Le(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  xe[t] = new Le(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  xe[e] = new Le(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  xe[e] = new Le(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    xe[e] = new Le(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  xe[e] = new Le(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  xe[e] = new Le(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  xe[e] = new Le(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  xe[e] = new Le(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Us = /[\-:]([a-z])/g;
function Hs(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Us, Hs);
    xe[t] = new Le(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Us, Hs);
    xe[t] = new Le(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Us, Hs);
  xe[t] = new Le(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  xe[e] = new Le(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
xe.xlinkHref = new Le(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  xe[e] = new Le(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ws(e, t, n, r) {
  var o = xe.hasOwnProperty(t) ? xe[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Yp(t, n, o, r) && (n = null),
    r || o === null
      ? Bp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var It = Wp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Co = Symbol.for("react.element"),
  An = Symbol.for("react.portal"),
  Un = Symbol.for("react.fragment"),
  Qs = Symbol.for("react.strict_mode"),
  Ri = Symbol.for("react.profiler"),
  Tc = Symbol.for("react.provider"),
  jc = Symbol.for("react.context"),
  Bs = Symbol.for("react.forward_ref"),
  Fi = Symbol.for("react.suspense"),
  zi = Symbol.for("react.suspense_list"),
  Vs = Symbol.for("react.memo"),
  Bt = Symbol.for("react.lazy"),
  Oc = Symbol.for("react.offscreen"),
  Ka = Symbol.iterator;
function wr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ka && e[Ka]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ie = Object.assign,
  ni;
function _r(e) {
  if (ni === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ni = (t && t[1]) || "";
    }
  return (
    `
` +
    ni +
    e
  );
}
var ri = !1;
function oi(e, t) {
  if (!e || ri) return "";
  ri = !0;
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
          l = r.stack.split(`
`),
          i = o.length - 1,
          s = l.length - 1;
        1 <= i && 0 <= s && o[i] !== l[s];

      )
        s--;
      for (; 1 <= i && 0 <= s; i--, s--)
        if (o[i] !== l[s]) {
          if (i !== 1 || s !== 1)
            do
              if ((i--, s--, 0 > s || o[i] !== l[s])) {
                var a =
                  `
` + o[i].replace(" at new ", " at ");
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
    (ri = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? _r(e) : "";
}
function qp(e) {
  switch (e.tag) {
    case 5:
      return _r(e.type);
    case 16:
      return _r("Lazy");
    case 13:
      return _r("Suspense");
    case 19:
      return _r("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = oi(e.type, !1)), e;
    case 11:
      return (e = oi(e.type.render, !1)), e;
    case 1:
      return (e = oi(e.type, !0)), e;
    default:
      return "";
  }
}
function Ii(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Un:
      return "Fragment";
    case An:
      return "Portal";
    case Ri:
      return "Profiler";
    case Qs:
      return "StrictMode";
    case Fi:
      return "Suspense";
    case zi:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case jc:
        return (e.displayName || "Context") + ".Consumer";
      case Tc:
        return (e._context.displayName || "Context") + ".Provider";
      case Bs:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Vs:
        return (
          (t = e.displayName || null), t !== null ? t : Ii(e.type) || "Memo"
        );
      case Bt:
        (t = e._payload), (e = e._init);
        try {
          return Ii(e(t));
        } catch {}
    }
  return null;
}
function Gp(e) {
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
      return Ii(t);
    case 8:
      return t === Qs ? "StrictMode" : "Mode";
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
function un(e) {
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
function Mc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Kp(e) {
  var t = Mc(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
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
        set: function (i) {
          (r = "" + i), l.call(this, i);
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
function Po(e) {
  e._valueTracker || (e._valueTracker = Kp(e));
}
function Lc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Mc(e) ? (e.checked ? "true" : "false") : e.value),
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
function Ai(e, t) {
  var n = t.checked;
  return ie({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Xa(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = un(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function _c(e, t) {
  (t = t.checked), t != null && Ws(e, "checked", t, !1);
}
function Ui(e, t) {
  _c(e, t);
  var n = un(t.value),
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
    ? Hi(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Hi(e, t.type, un(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Ja(e, t, n) {
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
function Hi(e, t, n) {
  (t !== "number" || rl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Dr = Array.isArray;
function Jn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + un(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Wi(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(E(91));
  return ie({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Za(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(E(92));
      if (Dr(n)) {
        if (1 < n.length) throw Error(E(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: un(n) };
}
function Dc(e, t) {
  var n = un(t.value),
    r = un(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function eu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function $c(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Qi(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? $c(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var To,
  Rc = (function (e) {
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
        To = To || document.createElement("div"),
          To.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = To.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Kr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var zr = {
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
  Xp = ["Webkit", "ms", "Moz", "O"];
Object.keys(zr).forEach(function (e) {
  Xp.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (zr[t] = zr[e]);
  });
});
function Fc(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (zr.hasOwnProperty(e) && zr[e])
    ? ("" + t).trim()
    : t + "px";
}
function zc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = Fc(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var Jp = ie(
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
function Bi(e, t) {
  if (t) {
    if (Jp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(E(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(E(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(E(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(E(62));
  }
}
function Vi(e, t) {
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
var Yi = null;
function Ys(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var qi = null,
  Zn = null,
  er = null;
function tu(e) {
  if ((e = yo(e))) {
    if (typeof qi != "function") throw Error(E(280));
    var t = e.stateNode;
    t && ((t = zl(t)), qi(e.stateNode, e.type, t));
  }
}
function Ic(e) {
  Zn ? (er ? er.push(e) : (er = [e])) : (Zn = e);
}
function Ac() {
  if (Zn) {
    var e = Zn,
      t = er;
    if (((er = Zn = null), tu(e), t)) for (e = 0; e < t.length; e++) tu(t[e]);
  }
}
function Uc(e, t) {
  return e(t);
}
function Hc() {}
var li = !1;
function Wc(e, t, n) {
  if (li) return e(t, n);
  li = !0;
  try {
    return Uc(e, t, n);
  } finally {
    (li = !1), (Zn !== null || er !== null) && (Hc(), Ac());
  }
}
function Xr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = zl(n);
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
  if (n && typeof n != "function") throw Error(E(231, t, typeof n));
  return n;
}
var Gi = !1;
if ($t)
  try {
    var xr = {};
    Object.defineProperty(xr, "passive", {
      get: function () {
        Gi = !0;
      },
    }),
      window.addEventListener("test", xr, xr),
      window.removeEventListener("test", xr, xr);
  } catch {
    Gi = !1;
  }
function Zp(e, t, n, r, o, l, i, s, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (d) {
    this.onError(d);
  }
}
var Ir = !1,
  ol = null,
  ll = !1,
  Ki = null,
  em = {
    onError: function (e) {
      (Ir = !0), (ol = e);
    },
  };
function tm(e, t, n, r, o, l, i, s, a) {
  (Ir = !1), (ol = null), Zp.apply(em, arguments);
}
function nm(e, t, n, r, o, l, i, s, a) {
  if ((tm.apply(this, arguments), Ir)) {
    if (Ir) {
      var u = ol;
      (Ir = !1), (ol = null);
    } else throw Error(E(198));
    ll || ((ll = !0), (Ki = u));
  }
}
function _n(e) {
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
function Qc(e) {
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
function nu(e) {
  if (_n(e) !== e) throw Error(E(188));
}
function rm(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = _n(e)), t === null)) throw Error(E(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var l = o.alternate;
    if (l === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === l.child) {
      for (l = o.child; l; ) {
        if (l === n) return nu(o), e;
        if (l === r) return nu(o), t;
        l = l.sibling;
      }
      throw Error(E(188));
    }
    if (n.return !== r.return) (n = o), (r = l);
    else {
      for (var i = !1, s = o.child; s; ) {
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
      if (!i) {
        for (s = l.child; s; ) {
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
        if (!i) throw Error(E(189));
      }
    }
    if (n.alternate !== r) throw Error(E(190));
  }
  if (n.tag !== 3) throw Error(E(188));
  return n.stateNode.current === n ? e : t;
}
function Bc(e) {
  return (e = rm(e)), e !== null ? Vc(e) : null;
}
function Vc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Vc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Yc = Be.unstable_scheduleCallback,
  ru = Be.unstable_cancelCallback,
  om = Be.unstable_shouldYield,
  lm = Be.unstable_requestPaint,
  ue = Be.unstable_now,
  im = Be.unstable_getCurrentPriorityLevel,
  qs = Be.unstable_ImmediatePriority,
  qc = Be.unstable_UserBlockingPriority,
  il = Be.unstable_NormalPriority,
  sm = Be.unstable_LowPriority,
  Gc = Be.unstable_IdlePriority,
  Dl = null,
  kt = null;
function am(e) {
  if (kt && typeof kt.onCommitFiberRoot == "function")
    try {
      kt.onCommitFiberRoot(Dl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var ct = Math.clz32 ? Math.clz32 : dm,
  um = Math.log,
  cm = Math.LN2;
function dm(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((um(e) / cm) | 0)) | 0;
}
var jo = 64,
  Oo = 4194304;
function $r(e) {
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
function sl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    l = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var s = i & ~o;
    s !== 0 ? (r = $r(s)) : ((l &= i), l !== 0 && (r = $r(l)));
  } else (i = n & ~o), i !== 0 ? (r = $r(i)) : l !== 0 && (r = $r(l));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (l = t & -t), o >= l || (o === 16 && (l & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - ct(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function fm(e, t) {
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
function pm(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      l = e.pendingLanes;
    0 < l;

  ) {
    var i = 31 - ct(l),
      s = 1 << i,
      a = o[i];
    a === -1
      ? (!(s & n) || s & r) && (o[i] = fm(s, t))
      : a <= t && (e.expiredLanes |= s),
      (l &= ~s);
  }
}
function Xi(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Kc() {
  var e = jo;
  return (jo <<= 1), !(jo & 4194240) && (jo = 64), e;
}
function ii(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ho(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - ct(t)),
    (e[t] = n);
}
function mm(e, t) {
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
    var o = 31 - ct(n),
      l = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~l);
  }
}
function Gs(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - ct(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var q = 0;
function Xc(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Jc,
  Ks,
  Zc,
  ed,
  td,
  Ji = !1,
  Mo = [],
  en = null,
  tn = null,
  nn = null,
  Jr = new Map(),
  Zr = new Map(),
  qt = [],
  hm =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function ou(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      en = null;
      break;
    case "dragenter":
    case "dragleave":
      tn = null;
      break;
    case "mouseover":
    case "mouseout":
      nn = null;
      break;
    case "pointerover":
    case "pointerout":
      Jr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Zr.delete(t.pointerId);
  }
}
function Sr(e, t, n, r, o, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: l,
        targetContainers: [o],
      }),
      t !== null && ((t = yo(t)), t !== null && Ks(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function gm(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (en = Sr(en, e, t, n, r, o)), !0;
    case "dragenter":
      return (tn = Sr(tn, e, t, n, r, o)), !0;
    case "mouseover":
      return (nn = Sr(nn, e, t, n, r, o)), !0;
    case "pointerover":
      var l = o.pointerId;
      return Jr.set(l, Sr(Jr.get(l) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (l = o.pointerId), Zr.set(l, Sr(Zr.get(l) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function nd(e) {
  var t = vn(e.target);
  if (t !== null) {
    var n = _n(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Qc(n)), t !== null)) {
          (e.blockedOn = t),
            td(e.priority, function () {
              Zc(n);
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
function Vo(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Zi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Yi = r), n.target.dispatchEvent(r), (Yi = null);
    } else return (t = yo(n)), t !== null && Ks(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function lu(e, t, n) {
  Vo(e) && n.delete(t);
}
function ym() {
  (Ji = !1),
    en !== null && Vo(en) && (en = null),
    tn !== null && Vo(tn) && (tn = null),
    nn !== null && Vo(nn) && (nn = null),
    Jr.forEach(lu),
    Zr.forEach(lu);
}
function kr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ji ||
      ((Ji = !0),
      Be.unstable_scheduleCallback(Be.unstable_NormalPriority, ym)));
}
function eo(e) {
  function t(o) {
    return kr(o, e);
  }
  if (0 < Mo.length) {
    kr(Mo[0], e);
    for (var n = 1; n < Mo.length; n++) {
      var r = Mo[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    en !== null && kr(en, e),
      tn !== null && kr(tn, e),
      nn !== null && kr(nn, e),
      Jr.forEach(t),
      Zr.forEach(t),
      n = 0;
    n < qt.length;
    n++
  )
    (r = qt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < qt.length && ((n = qt[0]), n.blockedOn === null); )
    nd(n), n.blockedOn === null && qt.shift();
}
var tr = It.ReactCurrentBatchConfig,
  al = !0;
function vm(e, t, n, r) {
  var o = q,
    l = tr.transition;
  tr.transition = null;
  try {
    (q = 1), Xs(e, t, n, r);
  } finally {
    (q = o), (tr.transition = l);
  }
}
function wm(e, t, n, r) {
  var o = q,
    l = tr.transition;
  tr.transition = null;
  try {
    (q = 4), Xs(e, t, n, r);
  } finally {
    (q = o), (tr.transition = l);
  }
}
function Xs(e, t, n, r) {
  if (al) {
    var o = Zi(e, t, n, r);
    if (o === null) gi(e, t, r, ul, n), ou(e, r);
    else if (gm(o, e, t, n, r)) r.stopPropagation();
    else if ((ou(e, r), t & 4 && -1 < hm.indexOf(e))) {
      for (; o !== null; ) {
        var l = yo(o);
        if (
          (l !== null && Jc(l),
          (l = Zi(e, t, n, r)),
          l === null && gi(e, t, r, ul, n),
          l === o)
        )
          break;
        o = l;
      }
      o !== null && r.stopPropagation();
    } else gi(e, t, r, null, n);
  }
}
var ul = null;
function Zi(e, t, n, r) {
  if (((ul = null), (e = Ys(r)), (e = vn(e)), e !== null))
    if (((t = _n(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Qc(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ul = e), null;
}
function rd(e) {
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
      switch (im()) {
        case qs:
          return 1;
        case qc:
          return 4;
        case il:
        case sm:
          return 16;
        case Gc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Xt = null,
  Js = null,
  Yo = null;
function od() {
  if (Yo) return Yo;
  var e,
    t = Js,
    n = t.length,
    r,
    o = "value" in Xt ? Xt.value : Xt.textContent,
    l = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[l - r]; r++);
  return (Yo = o.slice(e, 1 < r ? 1 - r : void 0));
}
function qo(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Lo() {
  return !0;
}
function iu() {
  return !1;
}
function Ye(e) {
  function t(n, r, o, l, i) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = l),
      (this.target = i),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(l) : l[s]));
    return (
      (this.isDefaultPrevented = (
        l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1
      )
        ? Lo
        : iu),
      (this.isPropagationStopped = iu),
      this
    );
  }
  return (
    ie(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Lo));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Lo));
      },
      persist: function () {},
      isPersistent: Lo,
    }),
    t
  );
}
var pr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Zs = Ye(pr),
  go = ie({}, pr, { view: 0, detail: 0 }),
  xm = Ye(go),
  si,
  ai,
  br,
  $l = ie({}, go, {
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
    getModifierState: ea,
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
        : (e !== br &&
            (br && e.type === "mousemove"
              ? ((si = e.screenX - br.screenX), (ai = e.screenY - br.screenY))
              : (ai = si = 0),
            (br = e)),
          si);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : ai;
    },
  }),
  su = Ye($l),
  Sm = ie({}, $l, { dataTransfer: 0 }),
  km = Ye(Sm),
  bm = ie({}, go, { relatedTarget: 0 }),
  ui = Ye(bm),
  Em = ie({}, pr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Nm = Ye(Em),
  Cm = ie({}, pr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Pm = Ye(Cm),
  Tm = ie({}, pr, { data: 0 }),
  au = Ye(Tm),
  jm = {
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
  Om = {
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
  Mm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Lm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Mm[e]) ? !!t[e] : !1;
}
function ea() {
  return Lm;
}
var _m = ie({}, go, {
    key: function (e) {
      if (e.key) {
        var t = jm[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = qo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Om[e.keyCode] || "Unidentified"
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
    getModifierState: ea,
    charCode: function (e) {
      return e.type === "keypress" ? qo(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? qo(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Dm = Ye(_m),
  $m = ie({}, $l, {
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
  uu = Ye($m),
  Rm = ie({}, go, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ea,
  }),
  Fm = Ye(Rm),
  zm = ie({}, pr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Im = Ye(zm),
  Am = ie({}, $l, {
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
  Um = Ye(Am),
  Hm = [9, 13, 27, 32],
  ta = $t && "CompositionEvent" in window,
  Ar = null;
$t && "documentMode" in document && (Ar = document.documentMode);
var Wm = $t && "TextEvent" in window && !Ar,
  ld = $t && (!ta || (Ar && 8 < Ar && 11 >= Ar)),
  cu = " ",
  du = !1;
function id(e, t) {
  switch (e) {
    case "keyup":
      return Hm.indexOf(t.keyCode) !== -1;
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
function sd(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Hn = !1;
function Qm(e, t) {
  switch (e) {
    case "compositionend":
      return sd(t);
    case "keypress":
      return t.which !== 32 ? null : ((du = !0), cu);
    case "textInput":
      return (e = t.data), e === cu && du ? null : e;
    default:
      return null;
  }
}
function Bm(e, t) {
  if (Hn)
    return e === "compositionend" || (!ta && id(e, t))
      ? ((e = od()), (Yo = Js = Xt = null), (Hn = !1), e)
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
      return ld && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Vm = {
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
function fu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Vm[e.type] : t === "textarea";
}
function ad(e, t, n, r) {
  Ic(r),
    (t = cl(t, "onChange")),
    0 < t.length &&
      ((n = new Zs("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Ur = null,
  to = null;
function Ym(e) {
  wd(e, 0);
}
function Rl(e) {
  var t = Bn(e);
  if (Lc(t)) return e;
}
function qm(e, t) {
  if (e === "change") return t;
}
var ud = !1;
if ($t) {
  var ci;
  if ($t) {
    var di = "oninput" in document;
    if (!di) {
      var pu = document.createElement("div");
      pu.setAttribute("oninput", "return;"),
        (di = typeof pu.oninput == "function");
    }
    ci = di;
  } else ci = !1;
  ud = ci && (!document.documentMode || 9 < document.documentMode);
}
function mu() {
  Ur && (Ur.detachEvent("onpropertychange", cd), (to = Ur = null));
}
function cd(e) {
  if (e.propertyName === "value" && Rl(to)) {
    var t = [];
    ad(t, to, e, Ys(e)), Wc(Ym, t);
  }
}
function Gm(e, t, n) {
  e === "focusin"
    ? (mu(), (Ur = t), (to = n), Ur.attachEvent("onpropertychange", cd))
    : e === "focusout" && mu();
}
function Km(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Rl(to);
}
function Xm(e, t) {
  if (e === "click") return Rl(t);
}
function Jm(e, t) {
  if (e === "input" || e === "change") return Rl(t);
}
function Zm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var ft = typeof Object.is == "function" ? Object.is : Zm;
function no(e, t) {
  if (ft(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!$i.call(t, o) || !ft(e[o], t[o])) return !1;
  }
  return !0;
}
function hu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function gu(e, t) {
  var n = hu(e);
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
    n = hu(n);
  }
}
function dd(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? dd(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function fd() {
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
function na(e) {
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
function eh(e) {
  var t = fd(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    dd(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && na(n)) {
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
          l = Math.min(r.start, o);
        (r = r.end === void 0 ? l : Math.min(r.end, o)),
          !e.extend && l > r && ((o = r), (r = l), (l = o)),
          (o = gu(n, l));
        var i = gu(n, r);
        o &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          l > r
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
var th = $t && "documentMode" in document && 11 >= document.documentMode,
  Wn = null,
  es = null,
  Hr = null,
  ts = !1;
function yu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ts ||
    Wn == null ||
    Wn !== rl(r) ||
    ((r = Wn),
    "selectionStart" in r && na(r)
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
    (Hr && no(Hr, r)) ||
      ((Hr = r),
      (r = cl(es, "onSelect")),
      0 < r.length &&
        ((t = new Zs("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Wn))));
}
function _o(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Qn = {
    animationend: _o("Animation", "AnimationEnd"),
    animationiteration: _o("Animation", "AnimationIteration"),
    animationstart: _o("Animation", "AnimationStart"),
    transitionend: _o("Transition", "TransitionEnd"),
  },
  fi = {},
  pd = {};
$t &&
  ((pd = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Qn.animationend.animation,
    delete Qn.animationiteration.animation,
    delete Qn.animationstart.animation),
  "TransitionEvent" in window || delete Qn.transitionend.transition);
function Fl(e) {
  if (fi[e]) return fi[e];
  if (!Qn[e]) return e;
  var t = Qn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in pd) return (fi[e] = t[n]);
  return e;
}
var md = Fl("animationend"),
  hd = Fl("animationiteration"),
  gd = Fl("animationstart"),
  yd = Fl("transitionend"),
  vd = new Map(),
  vu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function dn(e, t) {
  vd.set(e, t), Ln(t, [e]);
}
for (var pi = 0; pi < vu.length; pi++) {
  var mi = vu[pi],
    nh = mi.toLowerCase(),
    rh = mi[0].toUpperCase() + mi.slice(1);
  dn(nh, "on" + rh);
}
dn(md, "onAnimationEnd");
dn(hd, "onAnimationIteration");
dn(gd, "onAnimationStart");
dn("dblclick", "onDoubleClick");
dn("focusin", "onFocus");
dn("focusout", "onBlur");
dn(yd, "onTransitionEnd");
lr("onMouseEnter", ["mouseout", "mouseover"]);
lr("onMouseLeave", ["mouseout", "mouseover"]);
lr("onPointerEnter", ["pointerout", "pointerover"]);
lr("onPointerLeave", ["pointerout", "pointerover"]);
Ln(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Ln(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Ln("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ln(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Ln(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Ln(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Rr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  oh = new Set("cancel close invalid load scroll toggle".split(" ").concat(Rr));
function wu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), nm(r, t, void 0, e), (e.currentTarget = null);
}
function wd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var l = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var s = r[i],
            a = s.instance,
            u = s.currentTarget;
          if (((s = s.listener), a !== l && o.isPropagationStopped())) break e;
          wu(o, s, u), (l = a);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((s = r[i]),
            (a = s.instance),
            (u = s.currentTarget),
            (s = s.listener),
            a !== l && o.isPropagationStopped())
          )
            break e;
          wu(o, s, u), (l = a);
        }
    }
  }
  if (ll) throw ((e = Ki), (ll = !1), (Ki = null), e);
}
function Z(e, t) {
  var n = t[is];
  n === void 0 && (n = t[is] = new Set());
  var r = e + "__bubble";
  n.has(r) || (xd(t, e, 2, !1), n.add(r));
}
function hi(e, t, n) {
  var r = 0;
  t && (r |= 4), xd(n, e, r, t);
}
var Do = "_reactListening" + Math.random().toString(36).slice(2);
function ro(e) {
  if (!e[Do]) {
    (e[Do] = !0),
      Pc.forEach(function (n) {
        n !== "selectionchange" && (oh.has(n) || hi(n, !1, e), hi(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Do] || ((t[Do] = !0), hi("selectionchange", !1, t));
  }
}
function xd(e, t, n, r) {
  switch (rd(t)) {
    case 1:
      var o = vm;
      break;
    case 4:
      o = wm;
      break;
    default:
      o = Xs;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Gi ||
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
function gi(e, t, n, r, o) {
  var l = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var s = r.stateNode.containerInfo;
        if (s === o || (s.nodeType === 8 && s.parentNode === o)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var a = i.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = i.stateNode.containerInfo),
              a === o || (a.nodeType === 8 && a.parentNode === o))
            )
              return;
            i = i.return;
          }
        for (; s !== null; ) {
          if (((i = vn(s)), i === null)) return;
          if (((a = i.tag), a === 5 || a === 6)) {
            r = l = i;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  Wc(function () {
    var u = l,
      d = Ys(n),
      p = [];
    e: {
      var g = vd.get(e);
      if (g !== void 0) {
        var x = Zs,
          v = e;
        switch (e) {
          case "keypress":
            if (qo(n) === 0) break e;
          case "keydown":
          case "keyup":
            x = Dm;
            break;
          case "focusin":
            (v = "focus"), (x = ui);
            break;
          case "focusout":
            (v = "blur"), (x = ui);
            break;
          case "beforeblur":
          case "afterblur":
            x = ui;
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
            x = su;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = km;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = Fm;
            break;
          case md:
          case hd:
          case gd:
            x = Nm;
            break;
          case yd:
            x = Im;
            break;
          case "scroll":
            x = xm;
            break;
          case "wheel":
            x = Um;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = Pm;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = uu;
        }
        var w = (t & 4) !== 0,
          b = !w && e === "scroll",
          m = w ? (g !== null ? g + "Capture" : null) : g;
        w = [];
        for (var f = u, h; f !== null; ) {
          h = f;
          var k = h.stateNode;
          if (
            (h.tag === 5 &&
              k !== null &&
              ((h = k),
              m !== null && ((k = Xr(f, m)), k != null && w.push(oo(f, k, h)))),
            b)
          )
            break;
          f = f.return;
        }
        0 < w.length &&
          ((g = new x(g, v, null, n, d)), p.push({ event: g, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((g = e === "mouseover" || e === "pointerover"),
          (x = e === "mouseout" || e === "pointerout"),
          g &&
            n !== Yi &&
            (v = n.relatedTarget || n.fromElement) &&
            (vn(v) || v[Rt]))
        )
          break e;
        if (
          (x || g) &&
          ((g =
            d.window === d
              ? d
              : (g = d.ownerDocument)
              ? g.defaultView || g.parentWindow
              : window),
          x
            ? ((v = n.relatedTarget || n.toElement),
              (x = u),
              (v = v ? vn(v) : null),
              v !== null &&
                ((b = _n(v)), v !== b || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((x = null), (v = u)),
          x !== v)
        ) {
          if (
            ((w = su),
            (k = "onMouseLeave"),
            (m = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = uu),
              (k = "onPointerLeave"),
              (m = "onPointerEnter"),
              (f = "pointer")),
            (b = x == null ? g : Bn(x)),
            (h = v == null ? g : Bn(v)),
            (g = new w(k, f + "leave", x, n, d)),
            (g.target = b),
            (g.relatedTarget = h),
            (k = null),
            vn(d) === u &&
              ((w = new w(m, f + "enter", v, n, d)),
              (w.target = h),
              (w.relatedTarget = b),
              (k = w)),
            (b = k),
            x && v)
          )
            t: {
              for (w = x, m = v, f = 0, h = w; h; h = zn(h)) f++;
              for (h = 0, k = m; k; k = zn(k)) h++;
              for (; 0 < f - h; ) (w = zn(w)), f--;
              for (; 0 < h - f; ) (m = zn(m)), h--;
              for (; f--; ) {
                if (w === m || (m !== null && w === m.alternate)) break t;
                (w = zn(w)), (m = zn(m));
              }
              w = null;
            }
          else w = null;
          x !== null && xu(p, g, x, w, !1),
            v !== null && b !== null && xu(p, b, v, w, !0);
        }
      }
      e: {
        if (
          ((g = u ? Bn(u) : window),
          (x = g.nodeName && g.nodeName.toLowerCase()),
          x === "select" || (x === "input" && g.type === "file"))
        )
          var N = qm;
        else if (fu(g))
          if (ud) N = Jm;
          else {
            N = Km;
            var C = Gm;
          }
        else
          (x = g.nodeName) &&
            x.toLowerCase() === "input" &&
            (g.type === "checkbox" || g.type === "radio") &&
            (N = Xm);
        if (N && (N = N(e, u))) {
          ad(p, N, n, d);
          break e;
        }
        C && C(e, g, u),
          e === "focusout" &&
            (C = g._wrapperState) &&
            C.controlled &&
            g.type === "number" &&
            Hi(g, "number", g.value);
      }
      switch (((C = u ? Bn(u) : window), e)) {
        case "focusin":
          (fu(C) || C.contentEditable === "true") &&
            ((Wn = C), (es = u), (Hr = null));
          break;
        case "focusout":
          Hr = es = Wn = null;
          break;
        case "mousedown":
          ts = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (ts = !1), yu(p, n, d);
          break;
        case "selectionchange":
          if (th) break;
        case "keydown":
        case "keyup":
          yu(p, n, d);
      }
      var T;
      if (ta)
        e: {
          switch (e) {
            case "compositionstart":
              var M = "onCompositionStart";
              break e;
            case "compositionend":
              M = "onCompositionEnd";
              break e;
            case "compositionupdate":
              M = "onCompositionUpdate";
              break e;
          }
          M = void 0;
        }
      else
        Hn
          ? id(e, n) && (M = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (M = "onCompositionStart");
      M &&
        (ld &&
          n.locale !== "ko" &&
          (Hn || M !== "onCompositionStart"
            ? M === "onCompositionEnd" && Hn && (T = od())
            : ((Xt = d),
              (Js = "value" in Xt ? Xt.value : Xt.textContent),
              (Hn = !0))),
        (C = cl(u, M)),
        0 < C.length &&
          ((M = new au(M, e, null, n, d)),
          p.push({ event: M, listeners: C }),
          T ? (M.data = T) : ((T = sd(n)), T !== null && (M.data = T)))),
        (T = Wm ? Qm(e, n) : Bm(e, n)) &&
          ((u = cl(u, "onBeforeInput")),
          0 < u.length &&
            ((d = new au("onBeforeInput", "beforeinput", null, n, d)),
            p.push({ event: d, listeners: u }),
            (d.data = T)));
    }
    wd(p, t);
  });
}
function oo(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function cl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      l = o.stateNode;
    o.tag === 5 &&
      l !== null &&
      ((o = l),
      (l = Xr(e, n)),
      l != null && r.unshift(oo(e, l, o)),
      (l = Xr(e, t)),
      l != null && r.push(oo(e, l, o))),
      (e = e.return);
  }
  return r;
}
function zn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function xu(e, t, n, r, o) {
  for (var l = t._reactName, i = []; n !== null && n !== r; ) {
    var s = n,
      a = s.alternate,
      u = s.stateNode;
    if (a !== null && a === r) break;
    s.tag === 5 &&
      u !== null &&
      ((s = u),
      o
        ? ((a = Xr(n, l)), a != null && i.unshift(oo(n, a, s)))
        : o || ((a = Xr(n, l)), a != null && i.push(oo(n, a, s)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var lh = /\r\n?/g,
  ih = /\u0000|\uFFFD/g;
function Su(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      lh,
      `
`
    )
    .replace(ih, "");
}
function $o(e, t, n) {
  if (((t = Su(t)), Su(e) !== t && n)) throw Error(E(425));
}
function dl() {}
var ns = null,
  rs = null;
function os(e, t) {
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
var ls = typeof setTimeout == "function" ? setTimeout : void 0,
  sh = typeof clearTimeout == "function" ? clearTimeout : void 0,
  ku = typeof Promise == "function" ? Promise : void 0,
  ah =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof ku < "u"
      ? function (e) {
          return ku.resolve(null).then(e).catch(uh);
        }
      : ls;
function uh(e) {
  setTimeout(function () {
    throw e;
  });
}
function yi(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), eo(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  eo(t);
}
function rn(e) {
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
function bu(e) {
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
var mr = Math.random().toString(36).slice(2),
  St = "__reactFiber$" + mr,
  lo = "__reactProps$" + mr,
  Rt = "__reactContainer$" + mr,
  is = "__reactEvents$" + mr,
  ch = "__reactListeners$" + mr,
  dh = "__reactHandles$" + mr;
function vn(e) {
  var t = e[St];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Rt] || n[St])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = bu(e); e !== null; ) {
          if ((n = e[St])) return n;
          e = bu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function yo(e) {
  return (
    (e = e[St] || e[Rt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Bn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(E(33));
}
function zl(e) {
  return e[lo] || null;
}
var ss = [],
  Vn = -1;
function fn(e) {
  return { current: e };
}
function ee(e) {
  0 > Vn || ((e.current = ss[Vn]), (ss[Vn] = null), Vn--);
}
function X(e, t) {
  Vn++, (ss[Vn] = e.current), (e.current = t);
}
var cn = {},
  Pe = fn(cn),
  Fe = fn(!1),
  Cn = cn;
function ir(e, t) {
  var n = e.type.contextTypes;
  if (!n) return cn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    l;
  for (l in n) o[l] = t[l];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function ze(e) {
  return (e = e.childContextTypes), e != null;
}
function fl() {
  ee(Fe), ee(Pe);
}
function Eu(e, t, n) {
  if (Pe.current !== cn) throw Error(E(168));
  X(Pe, t), X(Fe, n);
}
function Sd(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(E(108, Gp(e) || "Unknown", o));
  return ie({}, n, r);
}
function pl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || cn),
    (Cn = Pe.current),
    X(Pe, e),
    X(Fe, Fe.current),
    !0
  );
}
function Nu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(E(169));
  n
    ? ((e = Sd(e, t, Cn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ee(Fe),
      ee(Pe),
      X(Pe, e))
    : ee(Fe),
    X(Fe, n);
}
var Pt = null,
  Il = !1,
  vi = !1;
function kd(e) {
  Pt === null ? (Pt = [e]) : Pt.push(e);
}
function fh(e) {
  (Il = !0), kd(e);
}
function pn() {
  if (!vi && Pt !== null) {
    vi = !0;
    var e = 0,
      t = q;
    try {
      var n = Pt;
      for (q = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Pt = null), (Il = !1);
    } catch (o) {
      throw (Pt !== null && (Pt = Pt.slice(e + 1)), Yc(qs, pn), o);
    } finally {
      (q = t), (vi = !1);
    }
  }
  return null;
}
var Yn = [],
  qn = 0,
  ml = null,
  hl = 0,
  Ke = [],
  Xe = 0,
  Pn = null,
  Tt = 1,
  jt = "";
function mn(e, t) {
  (Yn[qn++] = hl), (Yn[qn++] = ml), (ml = e), (hl = t);
}
function bd(e, t, n) {
  (Ke[Xe++] = Tt), (Ke[Xe++] = jt), (Ke[Xe++] = Pn), (Pn = e);
  var r = Tt;
  e = jt;
  var o = 32 - ct(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var l = 32 - ct(t) + o;
  if (30 < l) {
    var i = o - (o % 5);
    (l = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (o -= i),
      (Tt = (1 << (32 - ct(t) + o)) | (n << o) | r),
      (jt = l + e);
  } else (Tt = (1 << l) | (n << o) | r), (jt = e);
}
function ra(e) {
  e.return !== null && (mn(e, 1), bd(e, 1, 0));
}
function oa(e) {
  for (; e === ml; )
    (ml = Yn[--qn]), (Yn[qn] = null), (hl = Yn[--qn]), (Yn[qn] = null);
  for (; e === Pn; )
    (Pn = Ke[--Xe]),
      (Ke[Xe] = null),
      (jt = Ke[--Xe]),
      (Ke[Xe] = null),
      (Tt = Ke[--Xe]),
      (Ke[Xe] = null);
}
var Qe = null,
  We = null,
  te = !1,
  ut = null;
function Ed(e, t) {
  var n = Je(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Cu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Qe = e), (We = rn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Qe = e), (We = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Pn !== null ? { id: Tt, overflow: jt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Je(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Qe = e),
            (We = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function as(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function us(e) {
  if (te) {
    var t = We;
    if (t) {
      var n = t;
      if (!Cu(e, t)) {
        if (as(e)) throw Error(E(418));
        t = rn(n.nextSibling);
        var r = Qe;
        t && Cu(e, t)
          ? Ed(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (te = !1), (Qe = e));
      }
    } else {
      if (as(e)) throw Error(E(418));
      (e.flags = (e.flags & -4097) | 2), (te = !1), (Qe = e);
    }
  }
}
function Pu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Qe = e;
}
function Ro(e) {
  if (e !== Qe) return !1;
  if (!te) return Pu(e), (te = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !os(e.type, e.memoizedProps))),
    t && (t = We))
  ) {
    if (as(e)) throw (Nd(), Error(E(418)));
    for (; t; ) Ed(e, t), (t = rn(t.nextSibling));
  }
  if ((Pu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(E(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              We = rn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      We = null;
    }
  } else We = Qe ? rn(e.stateNode.nextSibling) : null;
  return !0;
}
function Nd() {
  for (var e = We; e; ) e = rn(e.nextSibling);
}
function sr() {
  (We = Qe = null), (te = !1);
}
function la(e) {
  ut === null ? (ut = [e]) : ut.push(e);
}
var ph = It.ReactCurrentBatchConfig;
function Er(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(E(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(E(147, e));
      var o = r,
        l = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === l
        ? t.ref
        : ((t = function (i) {
            var s = o.refs;
            i === null ? delete s[l] : (s[l] = i);
          }),
          (t._stringRef = l),
          t);
    }
    if (typeof e != "string") throw Error(E(284));
    if (!n._owner) throw Error(E(290, e));
  }
  return e;
}
function Fo(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      E(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Tu(e) {
  var t = e._init;
  return t(e._payload);
}
function Cd(e) {
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
  function o(m, f) {
    return (m = an(m, f)), (m.index = 0), (m.sibling = null), m;
  }
  function l(m, f, h) {
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
  function s(m, f, h, k) {
    return f === null || f.tag !== 6
      ? ((f = Ni(h, m.mode, k)), (f.return = m), f)
      : ((f = o(f, h)), (f.return = m), f);
  }
  function a(m, f, h, k) {
    var N = h.type;
    return N === Un
      ? d(m, f, h.props.children, k, h.key)
      : f !== null &&
        (f.elementType === N ||
          (typeof N == "object" &&
            N !== null &&
            N.$$typeof === Bt &&
            Tu(N) === f.type))
      ? ((k = o(f, h.props)), (k.ref = Er(m, f, h)), (k.return = m), k)
      : ((k = tl(h.type, h.key, h.props, null, m.mode, k)),
        (k.ref = Er(m, f, h)),
        (k.return = m),
        k);
  }
  function u(m, f, h, k) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== h.containerInfo ||
      f.stateNode.implementation !== h.implementation
      ? ((f = Ci(h, m.mode, k)), (f.return = m), f)
      : ((f = o(f, h.children || [])), (f.return = m), f);
  }
  function d(m, f, h, k, N) {
    return f === null || f.tag !== 7
      ? ((f = En(h, m.mode, k, N)), (f.return = m), f)
      : ((f = o(f, h)), (f.return = m), f);
  }
  function p(m, f, h) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return (f = Ni("" + f, m.mode, h)), (f.return = m), f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Co:
          return (
            (h = tl(f.type, f.key, f.props, null, m.mode, h)),
            (h.ref = Er(m, null, f)),
            (h.return = m),
            h
          );
        case An:
          return (f = Ci(f, m.mode, h)), (f.return = m), f;
        case Bt:
          var k = f._init;
          return p(m, k(f._payload), h);
      }
      if (Dr(f) || wr(f))
        return (f = En(f, m.mode, h, null)), (f.return = m), f;
      Fo(m, f);
    }
    return null;
  }
  function g(m, f, h, k) {
    var N = f !== null ? f.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return N !== null ? null : s(m, f, "" + h, k);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Co:
          return h.key === N ? a(m, f, h, k) : null;
        case An:
          return h.key === N ? u(m, f, h, k) : null;
        case Bt:
          return (N = h._init), g(m, f, N(h._payload), k);
      }
      if (Dr(h) || wr(h)) return N !== null ? null : d(m, f, h, k, null);
      Fo(m, h);
    }
    return null;
  }
  function x(m, f, h, k, N) {
    if ((typeof k == "string" && k !== "") || typeof k == "number")
      return (m = m.get(h) || null), s(f, m, "" + k, N);
    if (typeof k == "object" && k !== null) {
      switch (k.$$typeof) {
        case Co:
          return (m = m.get(k.key === null ? h : k.key) || null), a(f, m, k, N);
        case An:
          return (m = m.get(k.key === null ? h : k.key) || null), u(f, m, k, N);
        case Bt:
          var C = k._init;
          return x(m, f, h, C(k._payload), N);
      }
      if (Dr(k) || wr(k)) return (m = m.get(h) || null), d(f, m, k, N, null);
      Fo(f, k);
    }
    return null;
  }
  function v(m, f, h, k) {
    for (
      var N = null, C = null, T = f, M = (f = 0), I = null;
      T !== null && M < h.length;
      M++
    ) {
      T.index > M ? ((I = T), (T = null)) : (I = T.sibling);
      var _ = g(m, T, h[M], k);
      if (_ === null) {
        T === null && (T = I);
        break;
      }
      e && T && _.alternate === null && t(m, T),
        (f = l(_, f, M)),
        C === null ? (N = _) : (C.sibling = _),
        (C = _),
        (T = I);
    }
    if (M === h.length) return n(m, T), te && mn(m, M), N;
    if (T === null) {
      for (; M < h.length; M++)
        (T = p(m, h[M], k)),
          T !== null &&
            ((f = l(T, f, M)), C === null ? (N = T) : (C.sibling = T), (C = T));
      return te && mn(m, M), N;
    }
    for (T = r(m, T); M < h.length; M++)
      (I = x(T, m, M, h[M], k)),
        I !== null &&
          (e && I.alternate !== null && T.delete(I.key === null ? M : I.key),
          (f = l(I, f, M)),
          C === null ? (N = I) : (C.sibling = I),
          (C = I));
    return (
      e &&
        T.forEach(function (re) {
          return t(m, re);
        }),
      te && mn(m, M),
      N
    );
  }
  function w(m, f, h, k) {
    var N = wr(h);
    if (typeof N != "function") throw Error(E(150));
    if (((h = N.call(h)), h == null)) throw Error(E(151));
    for (
      var C = (N = null), T = f, M = (f = 0), I = null, _ = h.next();
      T !== null && !_.done;
      M++, _ = h.next()
    ) {
      T.index > M ? ((I = T), (T = null)) : (I = T.sibling);
      var re = g(m, T, _.value, k);
      if (re === null) {
        T === null && (T = I);
        break;
      }
      e && T && re.alternate === null && t(m, T),
        (f = l(re, f, M)),
        C === null ? (N = re) : (C.sibling = re),
        (C = re),
        (T = I);
    }
    if (_.done) return n(m, T), te && mn(m, M), N;
    if (T === null) {
      for (; !_.done; M++, _ = h.next())
        (_ = p(m, _.value, k)),
          _ !== null &&
            ((f = l(_, f, M)), C === null ? (N = _) : (C.sibling = _), (C = _));
      return te && mn(m, M), N;
    }
    for (T = r(m, T); !_.done; M++, _ = h.next())
      (_ = x(T, m, M, _.value, k)),
        _ !== null &&
          (e && _.alternate !== null && T.delete(_.key === null ? M : _.key),
          (f = l(_, f, M)),
          C === null ? (N = _) : (C.sibling = _),
          (C = _));
    return (
      e &&
        T.forEach(function (z) {
          return t(m, z);
        }),
      te && mn(m, M),
      N
    );
  }
  function b(m, f, h, k) {
    if (
      (typeof h == "object" &&
        h !== null &&
        h.type === Un &&
        h.key === null &&
        (h = h.props.children),
      typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case Co:
          e: {
            for (var N = h.key, C = f; C !== null; ) {
              if (C.key === N) {
                if (((N = h.type), N === Un)) {
                  if (C.tag === 7) {
                    n(m, C.sibling),
                      (f = o(C, h.props.children)),
                      (f.return = m),
                      (m = f);
                    break e;
                  }
                } else if (
                  C.elementType === N ||
                  (typeof N == "object" &&
                    N !== null &&
                    N.$$typeof === Bt &&
                    Tu(N) === C.type)
                ) {
                  n(m, C.sibling),
                    (f = o(C, h.props)),
                    (f.ref = Er(m, C, h)),
                    (f.return = m),
                    (m = f);
                  break e;
                }
                n(m, C);
                break;
              } else t(m, C);
              C = C.sibling;
            }
            h.type === Un
              ? ((f = En(h.props.children, m.mode, k, h.key)),
                (f.return = m),
                (m = f))
              : ((k = tl(h.type, h.key, h.props, null, m.mode, k)),
                (k.ref = Er(m, f, h)),
                (k.return = m),
                (m = k));
          }
          return i(m);
        case An:
          e: {
            for (C = h.key; f !== null; ) {
              if (f.key === C)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === h.containerInfo &&
                  f.stateNode.implementation === h.implementation
                ) {
                  n(m, f.sibling),
                    (f = o(f, h.children || [])),
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
            (f = Ci(h, m.mode, k)), (f.return = m), (m = f);
          }
          return i(m);
        case Bt:
          return (C = h._init), b(m, f, C(h._payload), k);
      }
      if (Dr(h)) return v(m, f, h, k);
      if (wr(h)) return w(m, f, h, k);
      Fo(m, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        f !== null && f.tag === 6
          ? (n(m, f.sibling), (f = o(f, h)), (f.return = m), (m = f))
          : (n(m, f), (f = Ni(h, m.mode, k)), (f.return = m), (m = f)),
        i(m))
      : n(m, f);
  }
  return b;
}
var ar = Cd(!0),
  Pd = Cd(!1),
  gl = fn(null),
  yl = null,
  Gn = null,
  ia = null;
function sa() {
  ia = Gn = yl = null;
}
function aa(e) {
  var t = gl.current;
  ee(gl), (e._currentValue = t);
}
function cs(e, t, n) {
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
function nr(e, t) {
  (yl = e),
    (ia = Gn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Re = !0), (e.firstContext = null));
}
function et(e) {
  var t = e._currentValue;
  if (ia !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Gn === null)) {
      if (yl === null) throw Error(E(308));
      (Gn = e), (yl.dependencies = { lanes: 0, firstContext: e });
    } else Gn = Gn.next = e;
  return t;
}
var wn = null;
function ua(e) {
  wn === null ? (wn = [e]) : wn.push(e);
}
function Td(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), ua(t)) : ((n.next = o.next), (o.next = n)),
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
var Vt = !1;
function ca(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function jd(e, t) {
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
function on(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), Q & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      Ft(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), ua(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Ft(e, n)
  );
}
function Go(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Gs(e, n);
  }
}
function ju(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      l = null;
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
        l === null ? (o = l = i) : (l = l.next = i), (n = n.next);
      } while (n !== null);
      l === null ? (o = l = t) : (l = l.next = t);
    } else o = l = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: l,
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
function vl(e, t, n, r) {
  var o = e.updateQueue;
  Vt = !1;
  var l = o.firstBaseUpdate,
    i = o.lastBaseUpdate,
    s = o.shared.pending;
  if (s !== null) {
    o.shared.pending = null;
    var a = s,
      u = a.next;
    (a.next = null), i === null ? (l = u) : (i.next = u), (i = a);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (s = d.lastBaseUpdate),
      s !== i &&
        (s === null ? (d.firstBaseUpdate = u) : (s.next = u),
        (d.lastBaseUpdate = a)));
  }
  if (l !== null) {
    var p = o.baseState;
    (i = 0), (d = u = a = null), (s = l);
    do {
      var g = s.lane,
        x = s.eventTime;
      if ((r & g) === g) {
        d !== null &&
          (d = d.next =
            {
              eventTime: x,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var v = e,
            w = s;
          switch (((g = t), (x = n), w.tag)) {
            case 1:
              if (((v = w.payload), typeof v == "function")) {
                p = v.call(x, p, g);
                break e;
              }
              p = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = w.payload),
                (g = typeof v == "function" ? v.call(x, p, g) : v),
                g == null)
              )
                break e;
              p = ie({}, p, g);
              break e;
            case 2:
              Vt = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (g = o.effects),
          g === null ? (o.effects = [s]) : g.push(s));
      } else
        (x = {
          eventTime: x,
          lane: g,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          d === null ? ((u = d = x), (a = p)) : (d = d.next = x),
          (i |= g);
      if (((s = s.next), s === null)) {
        if (((s = o.shared.pending), s === null)) break;
        (g = s),
          (s = g.next),
          (g.next = null),
          (o.lastBaseUpdate = g),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (d === null && (a = p),
      (o.baseState = a),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = d),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (i |= o.lane), (o = o.next);
      while (o !== t);
    } else l === null && (o.shared.lanes = 0);
    (jn |= i), (e.lanes = i), (e.memoizedState = p);
  }
}
function Ou(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(E(191, o));
        o.call(r);
      }
    }
}
var vo = {},
  bt = fn(vo),
  io = fn(vo),
  so = fn(vo);
function xn(e) {
  if (e === vo) throw Error(E(174));
  return e;
}
function da(e, t) {
  switch ((X(so, t), X(io, e), X(bt, vo), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Qi(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Qi(t, e));
  }
  ee(bt), X(bt, t);
}
function ur() {
  ee(bt), ee(io), ee(so);
}
function Od(e) {
  xn(so.current);
  var t = xn(bt.current),
    n = Qi(t, e.type);
  t !== n && (X(io, e), X(bt, n));
}
function fa(e) {
  io.current === e && (ee(bt), ee(io));
}
var oe = fn(0);
function wl(e) {
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
var wi = [];
function pa() {
  for (var e = 0; e < wi.length; e++)
    wi[e]._workInProgressVersionPrimary = null;
  wi.length = 0;
}
var Ko = It.ReactCurrentDispatcher,
  xi = It.ReactCurrentBatchConfig,
  Tn = 0,
  le = null,
  de = null,
  he = null,
  xl = !1,
  Wr = !1,
  ao = 0,
  mh = 0;
function be() {
  throw Error(E(321));
}
function ma(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!ft(e[n], t[n])) return !1;
  return !0;
}
function ha(e, t, n, r, o, l) {
  if (
    ((Tn = l),
    (le = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ko.current = e === null || e.memoizedState === null ? vh : wh),
    (e = n(r, o)),
    Wr)
  ) {
    l = 0;
    do {
      if (((Wr = !1), (ao = 0), 25 <= l)) throw Error(E(301));
      (l += 1),
        (he = de = null),
        (t.updateQueue = null),
        (Ko.current = xh),
        (e = n(r, o));
    } while (Wr);
  }
  if (
    ((Ko.current = Sl),
    (t = de !== null && de.next !== null),
    (Tn = 0),
    (he = de = le = null),
    (xl = !1),
    t)
  )
    throw Error(E(300));
  return e;
}
function ga() {
  var e = ao !== 0;
  return (ao = 0), e;
}
function xt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return he === null ? (le.memoizedState = he = e) : (he = he.next = e), he;
}
function tt() {
  if (de === null) {
    var e = le.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = de.next;
  var t = he === null ? le.memoizedState : he.next;
  if (t !== null) (he = t), (de = e);
  else {
    if (e === null) throw Error(E(310));
    (de = e),
      (e = {
        memoizedState: de.memoizedState,
        baseState: de.baseState,
        baseQueue: de.baseQueue,
        queue: de.queue,
        next: null,
      }),
      he === null ? (le.memoizedState = he = e) : (he = he.next = e);
  }
  return he;
}
function uo(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Si(e) {
  var t = tt(),
    n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = de,
    o = r.baseQueue,
    l = n.pending;
  if (l !== null) {
    if (o !== null) {
      var i = o.next;
      (o.next = l.next), (l.next = i);
    }
    (r.baseQueue = o = l), (n.pending = null);
  }
  if (o !== null) {
    (l = o.next), (r = r.baseState);
    var s = (i = null),
      a = null,
      u = l;
    do {
      var d = u.lane;
      if ((Tn & d) === d)
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
        var p = {
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((s = a = p), (i = r)) : (a = a.next = p),
          (le.lanes |= d),
          (jn |= d);
      }
      u = u.next;
    } while (u !== null && u !== l);
    a === null ? (i = r) : (a.next = s),
      ft(r, t.memoizedState) || (Re = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (l = o.lane), (le.lanes |= l), (jn |= l), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ki(e) {
  var t = tt(),
    n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    l = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var i = (o = o.next);
    do (l = e(l, i.action)), (i = i.next);
    while (i !== o);
    ft(l, t.memoizedState) || (Re = !0),
      (t.memoizedState = l),
      t.baseQueue === null && (t.baseState = l),
      (n.lastRenderedState = l);
  }
  return [l, r];
}
function Md() {}
function Ld(e, t) {
  var n = le,
    r = tt(),
    o = t(),
    l = !ft(r.memoizedState, o);
  if (
    (l && ((r.memoizedState = o), (Re = !0)),
    (r = r.queue),
    ya($d.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || l || (he !== null && he.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      co(9, Dd.bind(null, n, r, o, t), void 0, null),
      ge === null)
    )
      throw Error(E(349));
    Tn & 30 || _d(n, t, o);
  }
  return o;
}
function _d(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = le.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (le.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Dd(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Rd(t) && Fd(e);
}
function $d(e, t, n) {
  return n(function () {
    Rd(t) && Fd(e);
  });
}
function Rd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ft(e, n);
  } catch {
    return !0;
  }
}
function Fd(e) {
  var t = Ft(e, 1);
  t !== null && dt(t, e, 1, -1);
}
function Mu(e) {
  var t = xt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: uo,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = yh.bind(null, le, e)),
    [t.memoizedState, e]
  );
}
function co(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = le.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (le.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function zd() {
  return tt().memoizedState;
}
function Xo(e, t, n, r) {
  var o = xt();
  (le.flags |= e),
    (o.memoizedState = co(1 | t, n, void 0, r === void 0 ? null : r));
}
function Al(e, t, n, r) {
  var o = tt();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (de !== null) {
    var i = de.memoizedState;
    if (((l = i.destroy), r !== null && ma(r, i.deps))) {
      o.memoizedState = co(t, n, l, r);
      return;
    }
  }
  (le.flags |= e), (o.memoizedState = co(1 | t, n, l, r));
}
function Lu(e, t) {
  return Xo(8390656, 8, e, t);
}
function ya(e, t) {
  return Al(2048, 8, e, t);
}
function Id(e, t) {
  return Al(4, 2, e, t);
}
function Ad(e, t) {
  return Al(4, 4, e, t);
}
function Ud(e, t) {
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
function Hd(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Al(4, 4, Ud.bind(null, t, e), n)
  );
}
function va() {}
function Wd(e, t) {
  var n = tt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ma(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Qd(e, t) {
  var n = tt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ma(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Bd(e, t, n) {
  return Tn & 21
    ? (ft(n, t) || ((n = Kc()), (le.lanes |= n), (jn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Re = !0)), (e.memoizedState = n));
}
function hh(e, t) {
  var n = q;
  (q = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = xi.transition;
  xi.transition = {};
  try {
    e(!1), t();
  } finally {
    (q = n), (xi.transition = r);
  }
}
function Vd() {
  return tt().memoizedState;
}
function gh(e, t, n) {
  var r = sn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Yd(e))
  )
    qd(t, n);
  else if (((n = Td(e, t, n, r)), n !== null)) {
    var o = Oe();
    dt(n, e, r, o), Gd(n, t, r);
  }
}
function yh(e, t, n) {
  var r = sn(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Yd(e)) qd(t, o);
  else {
    var l = e.alternate;
    if (
      e.lanes === 0 &&
      (l === null || l.lanes === 0) &&
      ((l = t.lastRenderedReducer), l !== null)
    )
      try {
        var i = t.lastRenderedState,
          s = l(i, n);
        if (((o.hasEagerState = !0), (o.eagerState = s), ft(s, i))) {
          var a = t.interleaved;
          a === null
            ? ((o.next = o), ua(t))
            : ((o.next = a.next), (a.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Td(e, t, o, r)),
      n !== null && ((o = Oe()), dt(n, e, r, o), Gd(n, t, r));
  }
}
function Yd(e) {
  var t = e.alternate;
  return e === le || (t !== null && t === le);
}
function qd(e, t) {
  Wr = xl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Gd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Gs(e, n);
  }
}
var Sl = {
    readContext: et,
    useCallback: be,
    useContext: be,
    useEffect: be,
    useImperativeHandle: be,
    useInsertionEffect: be,
    useLayoutEffect: be,
    useMemo: be,
    useReducer: be,
    useRef: be,
    useState: be,
    useDebugValue: be,
    useDeferredValue: be,
    useTransition: be,
    useMutableSource: be,
    useSyncExternalStore: be,
    useId: be,
    unstable_isNewReconciler: !1,
  },
  vh = {
    readContext: et,
    useCallback: function (e, t) {
      return (xt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: et,
    useEffect: Lu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Xo(4194308, 4, Ud.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Xo(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Xo(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = xt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = xt();
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
        (e = e.dispatch = gh.bind(null, le, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = xt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Mu,
    useDebugValue: va,
    useDeferredValue: function (e) {
      return (xt().memoizedState = e);
    },
    useTransition: function () {
      var e = Mu(!1),
        t = e[0];
      return (e = hh.bind(null, e[1])), (xt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = le,
        o = xt();
      if (te) {
        if (n === void 0) throw Error(E(407));
        n = n();
      } else {
        if (((n = t()), ge === null)) throw Error(E(349));
        Tn & 30 || _d(r, t, n);
      }
      o.memoizedState = n;
      var l = { value: n, getSnapshot: t };
      return (
        (o.queue = l),
        Lu($d.bind(null, r, l, e), [e]),
        (r.flags |= 2048),
        co(9, Dd.bind(null, r, l, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = xt(),
        t = ge.identifierPrefix;
      if (te) {
        var n = jt,
          r = Tt;
        (n = (r & ~(1 << (32 - ct(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ao++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = mh++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  wh = {
    readContext: et,
    useCallback: Wd,
    useContext: et,
    useEffect: ya,
    useImperativeHandle: Hd,
    useInsertionEffect: Id,
    useLayoutEffect: Ad,
    useMemo: Qd,
    useReducer: Si,
    useRef: zd,
    useState: function () {
      return Si(uo);
    },
    useDebugValue: va,
    useDeferredValue: function (e) {
      var t = tt();
      return Bd(t, de.memoizedState, e);
    },
    useTransition: function () {
      var e = Si(uo)[0],
        t = tt().memoizedState;
      return [e, t];
    },
    useMutableSource: Md,
    useSyncExternalStore: Ld,
    useId: Vd,
    unstable_isNewReconciler: !1,
  },
  xh = {
    readContext: et,
    useCallback: Wd,
    useContext: et,
    useEffect: ya,
    useImperativeHandle: Hd,
    useInsertionEffect: Id,
    useLayoutEffect: Ad,
    useMemo: Qd,
    useReducer: ki,
    useRef: zd,
    useState: function () {
      return ki(uo);
    },
    useDebugValue: va,
    useDeferredValue: function (e) {
      var t = tt();
      return de === null ? (t.memoizedState = e) : Bd(t, de.memoizedState, e);
    },
    useTransition: function () {
      var e = ki(uo)[0],
        t = tt().memoizedState;
      return [e, t];
    },
    useMutableSource: Md,
    useSyncExternalStore: Ld,
    useId: Vd,
    unstable_isNewReconciler: !1,
  };
function st(e, t) {
  if (e && e.defaultProps) {
    (t = ie({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function ds(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ie({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ul = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? _n(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Oe(),
      o = sn(e),
      l = Ot(r, o);
    (l.payload = t),
      n != null && (l.callback = n),
      (t = on(e, l, o)),
      t !== null && (dt(t, e, o, r), Go(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Oe(),
      o = sn(e),
      l = Ot(r, o);
    (l.tag = 1),
      (l.payload = t),
      n != null && (l.callback = n),
      (t = on(e, l, o)),
      t !== null && (dt(t, e, o, r), Go(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Oe(),
      r = sn(e),
      o = Ot(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = on(e, o, r)),
      t !== null && (dt(t, e, r, n), Go(t, e, r));
  },
};
function _u(e, t, n, r, o, l, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, l, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !no(n, r) || !no(o, l)
      : !0
  );
}
function Kd(e, t, n) {
  var r = !1,
    o = cn,
    l = t.contextType;
  return (
    typeof l == "object" && l !== null
      ? (l = et(l))
      : ((o = ze(t) ? Cn : Pe.current),
        (r = t.contextTypes),
        (l = (r = r != null) ? ir(e, o) : cn)),
    (t = new t(n, l)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ul),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    t
  );
}
function Du(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ul.enqueueReplaceState(t, t.state, null);
}
function fs(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), ca(e);
  var l = t.contextType;
  typeof l == "object" && l !== null
    ? (o.context = et(l))
    : ((l = ze(t) ? Cn : Pe.current), (o.context = ir(e, l))),
    (o.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l == "function" && (ds(e, t, l, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Ul.enqueueReplaceState(o, o.state, null),
      vl(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function cr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += qp(r)), (r = r.return);
    while (r);
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
function bi(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ps(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Sh = typeof WeakMap == "function" ? WeakMap : Map;
function Xd(e, t, n) {
  (n = Ot(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      bl || ((bl = !0), (bs = r)), ps(e, t);
    }),
    n
  );
}
function Jd(e, t, n) {
  (n = Ot(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        ps(e, t);
      });
  }
  var l = e.stateNode;
  return (
    l !== null &&
      typeof l.componentDidCatch == "function" &&
      (n.callback = function () {
        ps(e, t),
          typeof r != "function" &&
            (ln === null ? (ln = new Set([this])) : ln.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function $u(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Sh();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = $h.bind(null, e, t, n)), t.then(e, e));
}
function Ru(e) {
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
function Fu(e, t, n, r, o) {
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
              : ((t = Ot(-1, 1)), (t.tag = 2), on(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var kh = It.ReactCurrentOwner,
  Re = !1;
function je(e, t, n, r) {
  t.child = e === null ? Pd(t, null, n, r) : ar(t, e.child, n, r);
}
function zu(e, t, n, r, o) {
  n = n.render;
  var l = t.ref;
  return (
    nr(t, o),
    (r = ha(e, t, n, r, l, o)),
    (n = ga()),
    e !== null && !Re
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        zt(e, t, o))
      : (te && n && ra(t), (t.flags |= 1), je(e, t, r, o), t.child)
  );
}
function Iu(e, t, n, r, o) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" &&
      !Ca(l) &&
      l.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), Zd(e, t, l, r, o))
      : ((e = tl(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((l = e.child), !(e.lanes & o))) {
    var i = l.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : no), n(i, r) && e.ref === t.ref)
    )
      return zt(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = an(l, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Zd(e, t, n, r, o) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (no(l, r) && e.ref === t.ref)
      if (((Re = !1), (t.pendingProps = r = l), (e.lanes & o) !== 0))
        e.flags & 131072 && (Re = !0);
      else return (t.lanes = e.lanes), zt(e, t, o);
  }
  return ms(e, t, n, r, o);
}
function ef(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    l = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        X(Xn, Ue),
        (Ue |= n);
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
          X(Xn, Ue),
          (Ue |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = l !== null ? l.baseLanes : n),
        X(Xn, Ue),
        (Ue |= r);
    }
  else
    l !== null ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n),
      X(Xn, Ue),
      (Ue |= r);
  return je(e, t, o, n), t.child;
}
function tf(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ms(e, t, n, r, o) {
  var l = ze(n) ? Cn : Pe.current;
  return (
    (l = ir(t, l)),
    nr(t, o),
    (n = ha(e, t, n, r, l, o)),
    (r = ga()),
    e !== null && !Re
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        zt(e, t, o))
      : (te && r && ra(t), (t.flags |= 1), je(e, t, n, o), t.child)
  );
}
function Au(e, t, n, r, o) {
  if (ze(n)) {
    var l = !0;
    pl(t);
  } else l = !1;
  if ((nr(t, o), t.stateNode === null))
    Jo(e, t), Kd(t, n, r), fs(t, n, r, o), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      s = t.memoizedProps;
    i.props = s;
    var a = i.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = et(u))
      : ((u = ze(n) ? Cn : Pe.current), (u = ir(t, u)));
    var d = n.getDerivedStateFromProps,
      p =
        typeof d == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    p ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((s !== r || a !== u) && Du(t, i, r, u)),
      (Vt = !1);
    var g = t.memoizedState;
    (i.state = g),
      vl(t, r, i, o),
      (a = t.memoizedState),
      s !== r || g !== a || Fe.current || Vt
        ? (typeof d == "function" && (ds(t, n, d, r), (a = t.memoizedState)),
          (s = Vt || _u(t, n, s, r, g, a, u))
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
          (i.context = u),
          (r = s))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      jd(e, t),
      (s = t.memoizedProps),
      (u = t.type === t.elementType ? s : st(t.type, s)),
      (i.props = u),
      (p = t.pendingProps),
      (g = i.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = et(a))
        : ((a = ze(n) ? Cn : Pe.current), (a = ir(t, a)));
    var x = n.getDerivedStateFromProps;
    (d =
      typeof x == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((s !== p || g !== a) && Du(t, i, r, a)),
      (Vt = !1),
      (g = t.memoizedState),
      (i.state = g),
      vl(t, r, i, o);
    var v = t.memoizedState;
    s !== p || g !== v || Fe.current || Vt
      ? (typeof x == "function" && (ds(t, n, x, r), (v = t.memoizedState)),
        (u = Vt || _u(t, n, u, r, g, v, a) || !1)
          ? (d ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, v, a),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, v, a)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (s === e.memoizedProps && g === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && g === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (i.props = r),
        (i.state = v),
        (i.context = a),
        (r = u))
      : (typeof i.componentDidUpdate != "function" ||
          (s === e.memoizedProps && g === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && g === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return hs(e, t, n, r, l, o);
}
function hs(e, t, n, r, o, l) {
  tf(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return o && Nu(t, n, !1), zt(e, t, l);
  (r = t.stateNode), (kh.current = t);
  var s =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = ar(t, e.child, null, l)), (t.child = ar(t, null, s, l)))
      : je(e, t, s, l),
    (t.memoizedState = r.state),
    o && Nu(t, n, !0),
    t.child
  );
}
function nf(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Eu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Eu(e, t.context, !1),
    da(e, t.containerInfo);
}
function Uu(e, t, n, r, o) {
  return sr(), la(o), (t.flags |= 256), je(e, t, n, r), t.child;
}
var gs = { dehydrated: null, treeContext: null, retryLane: 0 };
function ys(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function rf(e, t, n) {
  var r = t.pendingProps,
    o = oe.current,
    l = !1,
    i = (t.flags & 128) !== 0,
    s;
  if (
    ((s = i) ||
      (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    s
      ? ((l = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    X(oe, o & 1),
    e === null)
  )
    return (
      us(t),
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
          l
            ? ((r = t.mode),
              (l = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && l !== null
                ? ((l.childLanes = 0), (l.pendingProps = i))
                : (l = Ql(i, r, 0, null)),
              (e = En(e, r, n, null)),
              (l.return = t),
              (e.return = t),
              (l.sibling = e),
              (t.child = l),
              (t.child.memoizedState = ys(n)),
              (t.memoizedState = gs),
              e)
            : wa(t, i))
    );
  if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null)))
    return bh(e, t, i, r, s, o, n);
  if (l) {
    (l = r.fallback), (i = t.mode), (o = e.child), (s = o.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = an(o, a)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      s !== null ? (l = an(s, l)) : ((l = En(l, i, n, null)), (l.flags |= 2)),
      (l.return = t),
      (r.return = t),
      (r.sibling = l),
      (t.child = r),
      (r = l),
      (l = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? ys(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (l.memoizedState = i),
      (l.childLanes = e.childLanes & ~n),
      (t.memoizedState = gs),
      r
    );
  }
  return (
    (l = e.child),
    (e = l.sibling),
    (r = an(l, { mode: "visible", children: r.children })),
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
function wa(e, t) {
  return (
    (t = Ql({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function zo(e, t, n, r) {
  return (
    r !== null && la(r),
    ar(t, e.child, null, n),
    (e = wa(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function bh(e, t, n, r, o, l, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = bi(Error(E(422)))), zo(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((l = r.fallback),
        (o = t.mode),
        (r = Ql({ mode: "visible", children: r.children }, o, 0, null)),
        (l = En(l, o, i, null)),
        (l.flags |= 2),
        (r.return = t),
        (l.return = t),
        (r.sibling = l),
        (t.child = r),
        t.mode & 1 && ar(t, e.child, null, i),
        (t.child.memoizedState = ys(i)),
        (t.memoizedState = gs),
        l);
  if (!(t.mode & 1)) return zo(e, t, i, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (l = Error(E(419))), (r = bi(l, r, void 0)), zo(e, t, i, r);
  }
  if (((s = (i & e.childLanes) !== 0), Re || s)) {
    if (((r = ge), r !== null)) {
      switch (i & -i) {
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
      (o = o & (r.suspendedLanes | i) ? 0 : o),
        o !== 0 &&
          o !== l.retryLane &&
          ((l.retryLane = o), Ft(e, o), dt(r, e, o, -1));
    }
    return Na(), (r = bi(Error(E(421)))), zo(e, t, i, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Rh.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = l.treeContext),
      (We = rn(o.nextSibling)),
      (Qe = t),
      (te = !0),
      (ut = null),
      e !== null &&
        ((Ke[Xe++] = Tt),
        (Ke[Xe++] = jt),
        (Ke[Xe++] = Pn),
        (Tt = e.id),
        (jt = e.overflow),
        (Pn = t)),
      (t = wa(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Hu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), cs(e.return, t, n);
}
function Ei(e, t, n, r, o) {
  var l = e.memoizedState;
  l === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((l.isBackwards = t),
      (l.rendering = null),
      (l.renderingStartTime = 0),
      (l.last = r),
      (l.tail = n),
      (l.tailMode = o));
}
function of(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    l = r.tail;
  if ((je(e, t, r.children, n), (r = oe.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Hu(e, n, t);
        else if (e.tag === 19) Hu(e, n, t);
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
  if ((X(oe, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && wl(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Ei(t, !1, o, n, l);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && wl(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Ei(t, !0, n, null, l);
        break;
      case "together":
        Ei(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Jo(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function zt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (jn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(E(153));
  if (t.child !== null) {
    for (
      e = t.child, n = an(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = an(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Eh(e, t, n) {
  switch (t.tag) {
    case 3:
      nf(t), sr();
      break;
    case 5:
      Od(t);
      break;
    case 1:
      ze(t.type) && pl(t);
      break;
    case 4:
      da(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      X(gl, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (X(oe, oe.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? rf(e, t, n)
          : (X(oe, oe.current & 1),
            (e = zt(e, t, n)),
            e !== null ? e.sibling : null);
      X(oe, oe.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return of(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        X(oe, oe.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), ef(e, t, n);
  }
  return zt(e, t, n);
}
var lf, vs, sf, af;
lf = function (e, t) {
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
vs = function () {};
sf = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), xn(bt.current);
    var l = null;
    switch (n) {
      case "input":
        (o = Ai(e, o)), (r = Ai(e, r)), (l = []);
        break;
      case "select":
        (o = ie({}, o, { value: void 0 })),
          (r = ie({}, r, { value: void 0 })),
          (l = []);
        break;
      case "textarea":
        (o = Wi(e, o)), (r = Wi(e, r)), (l = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = dl);
    }
    Bi(n, r);
    var i;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var s = o[u];
          for (i in s) s.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Gr.hasOwnProperty(u)
              ? l || (l = [])
              : (l = l || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((s = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && a !== s && (a != null || s != null))
      )
        if (u === "style")
          if (s) {
            for (i in s)
              !s.hasOwnProperty(i) ||
                (a && a.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in a)
              a.hasOwnProperty(i) &&
                s[i] !== a[i] &&
                (n || (n = {}), (n[i] = a[i]));
          } else n || (l || (l = []), l.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (s = s ? s.__html : void 0),
              a != null && s !== a && (l = l || []).push(u, a))
            : u === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (l = l || []).push(u, "" + a)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Gr.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && Z("scroll", e),
                  l || s === a || (l = []))
                : (l = l || []).push(u, a));
    }
    n && (l = l || []).push("style", n);
    var u = l;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
af = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Nr(e, t) {
  if (!te)
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
function Ee(e) {
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
function Nh(e, t, n) {
  var r = t.pendingProps;
  switch ((oa(t), t.tag)) {
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
      return Ee(t), null;
    case 1:
      return ze(t.type) && fl(), Ee(t), null;
    case 3:
      return (
        (r = t.stateNode),
        ur(),
        ee(Fe),
        ee(Pe),
        pa(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ro(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), ut !== null && (Cs(ut), (ut = null)))),
        vs(e, t),
        Ee(t),
        null
      );
    case 5:
      fa(t);
      var o = xn(so.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        sf(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(E(166));
          return Ee(t), null;
        }
        if (((e = xn(bt.current)), Ro(t))) {
          (r = t.stateNode), (n = t.type);
          var l = t.memoizedProps;
          switch (((r[St] = t), (r[lo] = l), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              Z("cancel", r), Z("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Z("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Rr.length; o++) Z(Rr[o], r);
              break;
            case "source":
              Z("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Z("error", r), Z("load", r);
              break;
            case "details":
              Z("toggle", r);
              break;
            case "input":
              Xa(r, l), Z("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!l.multiple }),
                Z("invalid", r);
              break;
            case "textarea":
              Za(r, l), Z("invalid", r);
          }
          Bi(n, l), (o = null);
          for (var i in l)
            if (l.hasOwnProperty(i)) {
              var s = l[i];
              i === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (l.suppressHydrationWarning !== !0 &&
                      $o(r.textContent, s, e),
                    (o = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (l.suppressHydrationWarning !== !0 &&
                      $o(r.textContent, s, e),
                    (o = ["children", "" + s]))
                : Gr.hasOwnProperty(i) &&
                  s != null &&
                  i === "onScroll" &&
                  Z("scroll", r);
            }
          switch (n) {
            case "input":
              Po(r), Ja(r, l, !0);
              break;
            case "textarea":
              Po(r), eu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = dl);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = $c(n)),
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
            (e[St] = t),
            (e[lo] = r),
            lf(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = Vi(n, r)), n)) {
              case "dialog":
                Z("cancel", e), Z("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Z("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Rr.length; o++) Z(Rr[o], e);
                o = r;
                break;
              case "source":
                Z("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                Z("error", e), Z("load", e), (o = r);
                break;
              case "details":
                Z("toggle", e), (o = r);
                break;
              case "input":
                Xa(e, r), (o = Ai(e, r)), Z("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = ie({}, r, { value: void 0 })),
                  Z("invalid", e);
                break;
              case "textarea":
                Za(e, r), (o = Wi(e, r)), Z("invalid", e);
                break;
              default:
                o = r;
            }
            Bi(n, o), (s = o);
            for (l in s)
              if (s.hasOwnProperty(l)) {
                var a = s[l];
                l === "style"
                  ? zc(e, a)
                  : l === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && Rc(e, a))
                  : l === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && Kr(e, a)
                    : typeof a == "number" && Kr(e, "" + a)
                  : l !== "suppressContentEditableWarning" &&
                    l !== "suppressHydrationWarning" &&
                    l !== "autoFocus" &&
                    (Gr.hasOwnProperty(l)
                      ? a != null && l === "onScroll" && Z("scroll", e)
                      : a != null && Ws(e, l, a, i));
              }
            switch (n) {
              case "input":
                Po(e), Ja(e, r, !1);
                break;
              case "textarea":
                Po(e), eu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + un(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (l = r.value),
                  l != null
                    ? Jn(e, !!r.multiple, l, !1)
                    : r.defaultValue != null &&
                      Jn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = dl);
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
      return Ee(t), null;
    case 6:
      if (e && t.stateNode != null) af(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(E(166));
        if (((n = xn(so.current)), xn(bt.current), Ro(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[St] = t),
            (l = r.nodeValue !== n) && ((e = Qe), e !== null))
          )
            switch (e.tag) {
              case 3:
                $o(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  $o(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          l && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[St] = t),
            (t.stateNode = r);
      }
      return Ee(t), null;
    case 13:
      if (
        (ee(oe),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (te && We !== null && t.mode & 1 && !(t.flags & 128))
          Nd(), sr(), (t.flags |= 98560), (l = !1);
        else if (((l = Ro(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(E(318));
            if (
              ((l = t.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(E(317));
            l[St] = t;
          } else
            sr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ee(t), (l = !1);
        } else ut !== null && (Cs(ut), (ut = null)), (l = !0);
        if (!l) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || oe.current & 1 ? fe === 0 && (fe = 3) : Na())),
          t.updateQueue !== null && (t.flags |= 4),
          Ee(t),
          null);
    case 4:
      return (
        ur(), vs(e, t), e === null && ro(t.stateNode.containerInfo), Ee(t), null
      );
    case 10:
      return aa(t.type._context), Ee(t), null;
    case 17:
      return ze(t.type) && fl(), Ee(t), null;
    case 19:
      if ((ee(oe), (l = t.memoizedState), l === null)) return Ee(t), null;
      if (((r = (t.flags & 128) !== 0), (i = l.rendering), i === null))
        if (r) Nr(l, !1);
        else {
          if (fe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = wl(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Nr(l, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (l = n),
                    (e = r),
                    (l.flags &= 14680066),
                    (i = l.alternate),
                    i === null
                      ? ((l.childLanes = 0),
                        (l.lanes = e),
                        (l.child = null),
                        (l.subtreeFlags = 0),
                        (l.memoizedProps = null),
                        (l.memoizedState = null),
                        (l.updateQueue = null),
                        (l.dependencies = null),
                        (l.stateNode = null))
                      : ((l.childLanes = i.childLanes),
                        (l.lanes = i.lanes),
                        (l.child = i.child),
                        (l.subtreeFlags = 0),
                        (l.deletions = null),
                        (l.memoizedProps = i.memoizedProps),
                        (l.memoizedState = i.memoizedState),
                        (l.updateQueue = i.updateQueue),
                        (l.type = i.type),
                        (e = i.dependencies),
                        (l.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return X(oe, (oe.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          l.tail !== null &&
            ue() > dr &&
            ((t.flags |= 128), (r = !0), Nr(l, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = wl(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Nr(l, !0),
              l.tail === null && l.tailMode === "hidden" && !i.alternate && !te)
            )
              return Ee(t), null;
          } else
            2 * ue() - l.renderingStartTime > dr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Nr(l, !1), (t.lanes = 4194304));
        l.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = l.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (l.last = i));
      }
      return l.tail !== null
        ? ((t = l.tail),
          (l.rendering = t),
          (l.tail = t.sibling),
          (l.renderingStartTime = ue()),
          (t.sibling = null),
          (n = oe.current),
          X(oe, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ee(t), null);
    case 22:
    case 23:
      return (
        Ea(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ue & 1073741824 && (Ee(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ee(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(E(156, t.tag));
}
function Ch(e, t) {
  switch ((oa(t), t.tag)) {
    case 1:
      return (
        ze(t.type) && fl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        ur(),
        ee(Fe),
        ee(Pe),
        pa(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return fa(t), null;
    case 13:
      if (
        (ee(oe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(E(340));
        sr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ee(oe), null;
    case 4:
      return ur(), null;
    case 10:
      return aa(t.type._context), null;
    case 22:
    case 23:
      return Ea(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Io = !1,
  Ne = !1,
  Ph = typeof WeakSet == "function" ? WeakSet : Set,
  L = null;
function Kn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        se(e, t, r);
      }
    else n.current = null;
}
function ws(e, t, n) {
  try {
    n();
  } catch (r) {
    se(e, t, r);
  }
}
var Wu = !1;
function Th(e, t) {
  if (((ns = al), (e = fd()), na(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            l = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, l.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            s = -1,
            a = -1,
            u = 0,
            d = 0,
            p = e,
            g = null;
          t: for (;;) {
            for (
              var x;
              p !== n || (o !== 0 && p.nodeType !== 3) || (s = i + o),
                p !== l || (r !== 0 && p.nodeType !== 3) || (a = i + r),
                p.nodeType === 3 && (i += p.nodeValue.length),
                (x = p.firstChild) !== null;

            )
              (g = p), (p = x);
            for (;;) {
              if (p === e) break t;
              if (
                (g === n && ++u === o && (s = i),
                g === l && ++d === r && (a = i),
                (x = p.nextSibling) !== null)
              )
                break;
              (p = g), (g = p.parentNode);
            }
            p = x;
          }
          n = s === -1 || a === -1 ? null : { start: s, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (rs = { focusedElem: e, selectionRange: n }, al = !1, L = t; L !== null; )
    if (((t = L), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (L = e);
    else
      for (; L !== null; ) {
        t = L;
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
                    b = v.memoizedState,
                    m = t.stateNode,
                    f = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : st(t.type, w),
                      b
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
                throw Error(E(163));
            }
        } catch (k) {
          se(t, t.return, k);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (L = e);
          break;
        }
        L = t.return;
      }
  return (v = Wu), (Wu = !1), v;
}
function Qr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var l = o.destroy;
        (o.destroy = void 0), l !== void 0 && ws(t, n, l);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Hl(e, t) {
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
function xs(e) {
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
function uf(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), uf(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[St], delete t[lo], delete t[is], delete t[ch], delete t[dh])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function cf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Qu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || cf(e.return)) return null;
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
function Ss(e, t, n) {
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
    for (Ss(e, t, n), e = e.sibling; e !== null; ) Ss(e, t, n), (e = e.sibling);
}
function ks(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ks(e, t, n), e = e.sibling; e !== null; ) ks(e, t, n), (e = e.sibling);
}
var ve = null,
  at = !1;
function At(e, t, n) {
  for (n = n.child; n !== null; ) df(e, t, n), (n = n.sibling);
}
function df(e, t, n) {
  if (kt && typeof kt.onCommitFiberUnmount == "function")
    try {
      kt.onCommitFiberUnmount(Dl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ne || Kn(n, t);
    case 6:
      var r = ve,
        o = at;
      (ve = null),
        At(e, t, n),
        (ve = r),
        (at = o),
        ve !== null &&
          (at
            ? ((e = ve),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ve.removeChild(n.stateNode));
      break;
    case 18:
      ve !== null &&
        (at
          ? ((e = ve),
            (n = n.stateNode),
            e.nodeType === 8
              ? yi(e.parentNode, n)
              : e.nodeType === 1 && yi(e, n),
            eo(e))
          : yi(ve, n.stateNode));
      break;
    case 4:
      (r = ve),
        (o = at),
        (ve = n.stateNode.containerInfo),
        (at = !0),
        At(e, t, n),
        (ve = r),
        (at = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ne &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var l = o,
            i = l.destroy;
          (l = l.tag),
            i !== void 0 && (l & 2 || l & 4) && ws(n, t, i),
            (o = o.next);
        } while (o !== r);
      }
      At(e, t, n);
      break;
    case 1:
      if (
        !Ne &&
        (Kn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          se(n, t, s);
        }
      At(e, t, n);
      break;
    case 21:
      At(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ne = (r = Ne) || n.memoizedState !== null), At(e, t, n), (Ne = r))
        : At(e, t, n);
      break;
    default:
      At(e, t, n);
  }
}
function Bu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Ph()),
      t.forEach(function (r) {
        var o = Fh.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function it(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var l = e,
          i = t,
          s = i;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (ve = s.stateNode), (at = !1);
              break e;
            case 3:
              (ve = s.stateNode.containerInfo), (at = !0);
              break e;
            case 4:
              (ve = s.stateNode.containerInfo), (at = !0);
              break e;
          }
          s = s.return;
        }
        if (ve === null) throw Error(E(160));
        df(l, i, o), (ve = null), (at = !1);
        var a = o.alternate;
        a !== null && (a.return = null), (o.return = null);
      } catch (u) {
        se(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) ff(t, e), (t = t.sibling);
}
function ff(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((it(t, e), wt(e), r & 4)) {
        try {
          Qr(3, e, e.return), Hl(3, e);
        } catch (w) {
          se(e, e.return, w);
        }
        try {
          Qr(5, e, e.return);
        } catch (w) {
          se(e, e.return, w);
        }
      }
      break;
    case 1:
      it(t, e), wt(e), r & 512 && n !== null && Kn(n, n.return);
      break;
    case 5:
      if (
        (it(t, e),
        wt(e),
        r & 512 && n !== null && Kn(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Kr(o, "");
        } catch (w) {
          se(e, e.return, w);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var l = e.memoizedProps,
          i = n !== null ? n.memoizedProps : l,
          s = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            s === "input" && l.type === "radio" && l.name != null && _c(o, l),
              Vi(s, i);
            var u = Vi(s, l);
            for (i = 0; i < a.length; i += 2) {
              var d = a[i],
                p = a[i + 1];
              d === "style"
                ? zc(o, p)
                : d === "dangerouslySetInnerHTML"
                ? Rc(o, p)
                : d === "children"
                ? Kr(o, p)
                : Ws(o, d, p, u);
            }
            switch (s) {
              case "input":
                Ui(o, l);
                break;
              case "textarea":
                Dc(o, l);
                break;
              case "select":
                var g = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!l.multiple;
                var x = l.value;
                x != null
                  ? Jn(o, !!l.multiple, x, !1)
                  : g !== !!l.multiple &&
                    (l.defaultValue != null
                      ? Jn(o, !!l.multiple, l.defaultValue, !0)
                      : Jn(o, !!l.multiple, l.multiple ? [] : "", !1));
            }
            o[lo] = l;
          } catch (w) {
            se(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((it(t, e), wt(e), r & 4)) {
        if (e.stateNode === null) throw Error(E(162));
        (o = e.stateNode), (l = e.memoizedProps);
        try {
          o.nodeValue = l;
        } catch (w) {
          se(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (it(t, e), wt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          eo(t.containerInfo);
        } catch (w) {
          se(e, e.return, w);
        }
      break;
    case 4:
      it(t, e), wt(e);
      break;
    case 13:
      it(t, e),
        wt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((l = o.memoizedState !== null),
          (o.stateNode.isHidden = l),
          !l ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (ka = ue())),
        r & 4 && Bu(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ne = (u = Ne) || d), it(t, e), (Ne = u)) : it(t, e),
        wt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !d && e.mode & 1)
        )
          for (L = e, d = e.child; d !== null; ) {
            for (p = L = d; L !== null; ) {
              switch (((g = L), (x = g.child), g.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Qr(4, g, g.return);
                  break;
                case 1:
                  Kn(g, g.return);
                  var v = g.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (r = g), (n = g.return);
                    try {
                      (t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (w) {
                      se(r, n, w);
                    }
                  }
                  break;
                case 5:
                  Kn(g, g.return);
                  break;
                case 22:
                  if (g.memoizedState !== null) {
                    Yu(p);
                    continue;
                  }
              }
              x !== null ? ((x.return = g), (L = x)) : Yu(p);
            }
            d = d.sibling;
          }
        e: for (d = null, p = e; ; ) {
          if (p.tag === 5) {
            if (d === null) {
              d = p;
              try {
                (o = p.stateNode),
                  u
                    ? ((l = o.style),
                      typeof l.setProperty == "function"
                        ? l.setProperty("display", "none", "important")
                        : (l.display = "none"))
                    : ((s = p.stateNode),
                      (a = p.memoizedProps.style),
                      (i =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (s.style.display = Fc("display", i)));
              } catch (w) {
                se(e, e.return, w);
              }
            }
          } else if (p.tag === 6) {
            if (d === null)
              try {
                p.stateNode.nodeValue = u ? "" : p.memoizedProps;
              } catch (w) {
                se(e, e.return, w);
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
      it(t, e), wt(e), r & 4 && Bu(e);
      break;
    case 21:
      break;
    default:
      it(t, e), wt(e);
  }
}
function wt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (cf(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(E(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Kr(o, ""), (r.flags &= -33));
          var l = Qu(e);
          ks(e, l, o);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            s = Qu(e);
          Ss(e, s, i);
          break;
        default:
          throw Error(E(161));
      }
    } catch (a) {
      se(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function jh(e, t, n) {
  (L = e), pf(e);
}
function pf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; L !== null; ) {
    var o = L,
      l = o.child;
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || Io;
      if (!i) {
        var s = o.alternate,
          a = (s !== null && s.memoizedState !== null) || Ne;
        s = Io;
        var u = Ne;
        if (((Io = i), (Ne = a) && !u))
          for (L = o; L !== null; )
            (i = L),
              (a = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? qu(o)
                : a !== null
                ? ((a.return = i), (L = a))
                : qu(o);
        for (; l !== null; ) (L = l), pf(l), (l = l.sibling);
        (L = o), (Io = s), (Ne = u);
      }
      Vu(e);
    } else
      o.subtreeFlags & 8772 && l !== null ? ((l.return = o), (L = l)) : Vu(e);
  }
}
function Vu(e) {
  for (; L !== null; ) {
    var t = L;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ne || Hl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ne)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : st(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var l = t.updateQueue;
              l !== null && Ou(t, l, r);
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
                Ou(t, i, n);
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
                  var d = u.memoizedState;
                  if (d !== null) {
                    var p = d.dehydrated;
                    p !== null && eo(p);
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
              throw Error(E(163));
          }
        Ne || (t.flags & 512 && xs(t));
      } catch (g) {
        se(t, t.return, g);
      }
    }
    if (t === e) {
      L = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (L = n);
      break;
    }
    L = t.return;
  }
}
function Yu(e) {
  for (; L !== null; ) {
    var t = L;
    if (t === e) {
      L = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (L = n);
      break;
    }
    L = t.return;
  }
}
function qu(e) {
  for (; L !== null; ) {
    var t = L;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Hl(4, t);
          } catch (a) {
            se(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              se(t, o, a);
            }
          }
          var l = t.return;
          try {
            xs(t);
          } catch (a) {
            se(t, l, a);
          }
          break;
        case 5:
          var i = t.return;
          try {
            xs(t);
          } catch (a) {
            se(t, i, a);
          }
      }
    } catch (a) {
      se(t, t.return, a);
    }
    if (t === e) {
      L = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (L = s);
      break;
    }
    L = t.return;
  }
}
var Oh = Math.ceil,
  kl = It.ReactCurrentDispatcher,
  xa = It.ReactCurrentOwner,
  Ze = It.ReactCurrentBatchConfig,
  Q = 0,
  ge = null,
  ce = null,
  we = 0,
  Ue = 0,
  Xn = fn(0),
  fe = 0,
  fo = null,
  jn = 0,
  Wl = 0,
  Sa = 0,
  Br = null,
  $e = null,
  ka = 0,
  dr = 1 / 0,
  Ct = null,
  bl = !1,
  bs = null,
  ln = null,
  Ao = !1,
  Jt = null,
  El = 0,
  Vr = 0,
  Es = null,
  Zo = -1,
  el = 0;
function Oe() {
  return Q & 6 ? ue() : Zo !== -1 ? Zo : (Zo = ue());
}
function sn(e) {
  return e.mode & 1
    ? Q & 2 && we !== 0
      ? we & -we
      : ph.transition !== null
      ? (el === 0 && (el = Kc()), el)
      : ((e = q),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : rd(e.type))),
        e)
    : 1;
}
function dt(e, t, n, r) {
  if (50 < Vr) throw ((Vr = 0), (Es = null), Error(E(185)));
  ho(e, n, r),
    (!(Q & 2) || e !== ge) &&
      (e === ge && (!(Q & 2) && (Wl |= n), fe === 4 && Gt(e, we)),
      Ie(e, r),
      n === 1 && Q === 0 && !(t.mode & 1) && ((dr = ue() + 500), Il && pn()));
}
function Ie(e, t) {
  var n = e.callbackNode;
  pm(e, t);
  var r = sl(e, e === ge ? we : 0);
  if (r === 0)
    n !== null && ru(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && ru(n), t === 1))
      e.tag === 0 ? fh(Gu.bind(null, e)) : kd(Gu.bind(null, e)),
        ah(function () {
          !(Q & 6) && pn();
        }),
        (n = null);
    else {
      switch (Xc(r)) {
        case 1:
          n = qs;
          break;
        case 4:
          n = qc;
          break;
        case 16:
          n = il;
          break;
        case 536870912:
          n = Gc;
          break;
        default:
          n = il;
      }
      n = Sf(n, mf.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function mf(e, t) {
  if (((Zo = -1), (el = 0), Q & 6)) throw Error(E(327));
  var n = e.callbackNode;
  if (rr() && e.callbackNode !== n) return null;
  var r = sl(e, e === ge ? we : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Nl(e, r);
  else {
    t = r;
    var o = Q;
    Q |= 2;
    var l = gf();
    (ge !== e || we !== t) && ((Ct = null), (dr = ue() + 500), bn(e, t));
    do
      try {
        _h();
        break;
      } catch (s) {
        hf(e, s);
      }
    while (!0);
    sa(),
      (kl.current = l),
      (Q = o),
      ce !== null ? (t = 0) : ((ge = null), (we = 0), (t = fe));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Xi(e)), o !== 0 && ((r = o), (t = Ns(e, o)))), t === 1)
    )
      throw ((n = fo), bn(e, 0), Gt(e, r), Ie(e, ue()), n);
    if (t === 6) Gt(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !Mh(o) &&
          ((t = Nl(e, r)),
          t === 2 && ((l = Xi(e)), l !== 0 && ((r = l), (t = Ns(e, l)))),
          t === 1))
      )
        throw ((n = fo), bn(e, 0), Gt(e, r), Ie(e, ue()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(E(345));
        case 2:
          hn(e, $e, Ct);
          break;
        case 3:
          if (
            (Gt(e, r), (r & 130023424) === r && ((t = ka + 500 - ue()), 10 < t))
          ) {
            if (sl(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Oe(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = ls(hn.bind(null, e, $e, Ct), t);
            break;
          }
          hn(e, $e, Ct);
          break;
        case 4:
          if ((Gt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var i = 31 - ct(r);
            (l = 1 << i), (i = t[i]), i > o && (o = i), (r &= ~l);
          }
          if (
            ((r = o),
            (r = ue() - r),
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
                : 1960 * Oh(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = ls(hn.bind(null, e, $e, Ct), r);
            break;
          }
          hn(e, $e, Ct);
          break;
        case 5:
          hn(e, $e, Ct);
          break;
        default:
          throw Error(E(329));
      }
    }
  }
  return Ie(e, ue()), e.callbackNode === n ? mf.bind(null, e) : null;
}
function Ns(e, t) {
  var n = Br;
  return (
    e.current.memoizedState.isDehydrated && (bn(e, t).flags |= 256),
    (e = Nl(e, t)),
    e !== 2 && ((t = $e), ($e = n), t !== null && Cs(t)),
    e
  );
}
function Cs(e) {
  $e === null ? ($e = e) : $e.push.apply($e, e);
}
function Mh(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            l = o.getSnapshot;
          o = o.value;
          try {
            if (!ft(l(), o)) return !1;
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
function Gt(e, t) {
  for (
    t &= ~Sa,
      t &= ~Wl,
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
function Gu(e) {
  if (Q & 6) throw Error(E(327));
  rr();
  var t = sl(e, 0);
  if (!(t & 1)) return Ie(e, ue()), null;
  var n = Nl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Xi(e);
    r !== 0 && ((t = r), (n = Ns(e, r)));
  }
  if (n === 1) throw ((n = fo), bn(e, 0), Gt(e, t), Ie(e, ue()), n);
  if (n === 6) throw Error(E(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    hn(e, $e, Ct),
    Ie(e, ue()),
    null
  );
}
function ba(e, t) {
  var n = Q;
  Q |= 1;
  try {
    return e(t);
  } finally {
    (Q = n), Q === 0 && ((dr = ue() + 500), Il && pn());
  }
}
function On(e) {
  Jt !== null && Jt.tag === 0 && !(Q & 6) && rr();
  var t = Q;
  Q |= 1;
  var n = Ze.transition,
    r = q;
  try {
    if (((Ze.transition = null), (q = 1), e)) return e();
  } finally {
    (q = r), (Ze.transition = n), (Q = t), !(Q & 6) && pn();
  }
}
function Ea() {
  (Ue = Xn.current), ee(Xn);
}
function bn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), sh(n)), ce !== null))
    for (n = ce.return; n !== null; ) {
      var r = n;
      switch ((oa(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && fl();
          break;
        case 3:
          ur(), ee(Fe), ee(Pe), pa();
          break;
        case 5:
          fa(r);
          break;
        case 4:
          ur();
          break;
        case 13:
          ee(oe);
          break;
        case 19:
          ee(oe);
          break;
        case 10:
          aa(r.type._context);
          break;
        case 22:
        case 23:
          Ea();
      }
      n = n.return;
    }
  if (
    ((ge = e),
    (ce = e = an(e.current, null)),
    (we = Ue = t),
    (fe = 0),
    (fo = null),
    (Sa = Wl = jn = 0),
    ($e = Br = null),
    wn !== null)
  ) {
    for (t = 0; t < wn.length; t++)
      if (((n = wn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          l = n.pending;
        if (l !== null) {
          var i = l.next;
          (l.next = o), (r.next = i);
        }
        n.pending = r;
      }
    wn = null;
  }
  return e;
}
function hf(e, t) {
  do {
    var n = ce;
    try {
      if ((sa(), (Ko.current = Sl), xl)) {
        for (var r = le.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        xl = !1;
      }
      if (
        ((Tn = 0),
        (he = de = le = null),
        (Wr = !1),
        (ao = 0),
        (xa.current = null),
        n === null || n.return === null)
      ) {
        (fe = 1), (fo = t), (ce = null);
        break;
      }
      e: {
        var l = e,
          i = n.return,
          s = n,
          a = t;
        if (
          ((t = we),
          (s.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
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
          var x = Ru(i);
          if (x !== null) {
            (x.flags &= -257),
              Fu(x, i, s, l, t),
              x.mode & 1 && $u(l, u, t),
              (t = x),
              (a = u);
            var v = t.updateQueue;
            if (v === null) {
              var w = new Set();
              w.add(a), (t.updateQueue = w);
            } else v.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              $u(l, u, t), Na();
              break e;
            }
            a = Error(E(426));
          }
        } else if (te && s.mode & 1) {
          var b = Ru(i);
          if (b !== null) {
            !(b.flags & 65536) && (b.flags |= 256),
              Fu(b, i, s, l, t),
              la(cr(a, s));
            break e;
          }
        }
        (l = a = cr(a, s)),
          fe !== 4 && (fe = 2),
          Br === null ? (Br = [l]) : Br.push(l),
          (l = i);
        do {
          switch (l.tag) {
            case 3:
              (l.flags |= 65536), (t &= -t), (l.lanes |= t);
              var m = Xd(l, a, t);
              ju(l, m);
              break e;
            case 1:
              s = a;
              var f = l.type,
                h = l.stateNode;
              if (
                !(l.flags & 128) &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (h !== null &&
                    typeof h.componentDidCatch == "function" &&
                    (ln === null || !ln.has(h))))
              ) {
                (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                var k = Jd(l, s, t);
                ju(l, k);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      vf(n);
    } catch (N) {
      (t = N), ce === n && n !== null && (ce = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function gf() {
  var e = kl.current;
  return (kl.current = Sl), e === null ? Sl : e;
}
function Na() {
  (fe === 0 || fe === 3 || fe === 2) && (fe = 4),
    ge === null || (!(jn & 268435455) && !(Wl & 268435455)) || Gt(ge, we);
}
function Nl(e, t) {
  var n = Q;
  Q |= 2;
  var r = gf();
  (ge !== e || we !== t) && ((Ct = null), bn(e, t));
  do
    try {
      Lh();
      break;
    } catch (o) {
      hf(e, o);
    }
  while (!0);
  if ((sa(), (Q = n), (kl.current = r), ce !== null)) throw Error(E(261));
  return (ge = null), (we = 0), fe;
}
function Lh() {
  for (; ce !== null; ) yf(ce);
}
function _h() {
  for (; ce !== null && !om(); ) yf(ce);
}
function yf(e) {
  var t = xf(e.alternate, e, Ue);
  (e.memoizedProps = e.pendingProps),
    t === null ? vf(e) : (ce = t),
    (xa.current = null);
}
function vf(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Ch(n, t)), n !== null)) {
        (n.flags &= 32767), (ce = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (fe = 6), (ce = null);
        return;
      }
    } else if (((n = Nh(n, t, Ue)), n !== null)) {
      ce = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ce = t;
      return;
    }
    ce = t = e;
  } while (t !== null);
  fe === 0 && (fe = 5);
}
function hn(e, t, n) {
  var r = q,
    o = Ze.transition;
  try {
    (Ze.transition = null), (q = 1), Dh(e, t, n, r);
  } finally {
    (Ze.transition = o), (q = r);
  }
  return null;
}
function Dh(e, t, n, r) {
  do rr();
  while (Jt !== null);
  if (Q & 6) throw Error(E(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(E(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var l = n.lanes | n.childLanes;
  if (
    (mm(e, l),
    e === ge && ((ce = ge = null), (we = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ao ||
      ((Ao = !0),
      Sf(il, function () {
        return rr(), null;
      })),
    (l = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || l)
  ) {
    (l = Ze.transition), (Ze.transition = null);
    var i = q;
    q = 1;
    var s = Q;
    (Q |= 4),
      (xa.current = null),
      Th(e, n),
      ff(n, e),
      eh(rs),
      (al = !!ns),
      (rs = ns = null),
      (e.current = n),
      jh(n),
      lm(),
      (Q = s),
      (q = i),
      (Ze.transition = l);
  } else e.current = n;
  if (
    (Ao && ((Ao = !1), (Jt = e), (El = o)),
    (l = e.pendingLanes),
    l === 0 && (ln = null),
    am(n.stateNode),
    Ie(e, ue()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (bl) throw ((bl = !1), (e = bs), (bs = null), e);
  return (
    El & 1 && e.tag !== 0 && rr(),
    (l = e.pendingLanes),
    l & 1 ? (e === Es ? Vr++ : ((Vr = 0), (Es = e))) : (Vr = 0),
    pn(),
    null
  );
}
function rr() {
  if (Jt !== null) {
    var e = Xc(El),
      t = Ze.transition,
      n = q;
    try {
      if (((Ze.transition = null), (q = 16 > e ? 16 : e), Jt === null))
        var r = !1;
      else {
        if (((e = Jt), (Jt = null), (El = 0), Q & 6)) throw Error(E(331));
        var o = Q;
        for (Q |= 4, L = e.current; L !== null; ) {
          var l = L,
            i = l.child;
          if (L.flags & 16) {
            var s = l.deletions;
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var u = s[a];
                for (L = u; L !== null; ) {
                  var d = L;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qr(8, d, l);
                  }
                  var p = d.child;
                  if (p !== null) (p.return = d), (L = p);
                  else
                    for (; L !== null; ) {
                      d = L;
                      var g = d.sibling,
                        x = d.return;
                      if ((uf(d), d === u)) {
                        L = null;
                        break;
                      }
                      if (g !== null) {
                        (g.return = x), (L = g);
                        break;
                      }
                      L = x;
                    }
                }
              }
              var v = l.alternate;
              if (v !== null) {
                var w = v.child;
                if (w !== null) {
                  v.child = null;
                  do {
                    var b = w.sibling;
                    (w.sibling = null), (w = b);
                  } while (w !== null);
                }
              }
              L = l;
            }
          }
          if (l.subtreeFlags & 2064 && i !== null) (i.return = l), (L = i);
          else
            e: for (; L !== null; ) {
              if (((l = L), l.flags & 2048))
                switch (l.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Qr(9, l, l.return);
                }
              var m = l.sibling;
              if (m !== null) {
                (m.return = l.return), (L = m);
                break e;
              }
              L = l.return;
            }
        }
        var f = e.current;
        for (L = f; L !== null; ) {
          i = L;
          var h = i.child;
          if (i.subtreeFlags & 2064 && h !== null) (h.return = i), (L = h);
          else
            e: for (i = f; L !== null; ) {
              if (((s = L), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Hl(9, s);
                  }
                } catch (N) {
                  se(s, s.return, N);
                }
              if (s === i) {
                L = null;
                break e;
              }
              var k = s.sibling;
              if (k !== null) {
                (k.return = s.return), (L = k);
                break e;
              }
              L = s.return;
            }
        }
        if (
          ((Q = o), pn(), kt && typeof kt.onPostCommitFiberRoot == "function")
        )
          try {
            kt.onPostCommitFiberRoot(Dl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (q = n), (Ze.transition = t);
    }
  }
  return !1;
}
function Ku(e, t, n) {
  (t = cr(n, t)),
    (t = Xd(e, t, 1)),
    (e = on(e, t, 1)),
    (t = Oe()),
    e !== null && (ho(e, 1, t), Ie(e, t));
}
function se(e, t, n) {
  if (e.tag === 3) Ku(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Ku(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (ln === null || !ln.has(r)))
        ) {
          (e = cr(n, e)),
            (e = Jd(t, e, 1)),
            (t = on(t, e, 1)),
            (e = Oe()),
            t !== null && (ho(t, 1, e), Ie(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function $h(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Oe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ge === e &&
      (we & n) === n &&
      (fe === 4 || (fe === 3 && (we & 130023424) === we && 500 > ue() - ka)
        ? bn(e, 0)
        : (Sa |= n)),
    Ie(e, t);
}
function wf(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Oo), (Oo <<= 1), !(Oo & 130023424) && (Oo = 4194304))
      : (t = 1));
  var n = Oe();
  (e = Ft(e, t)), e !== null && (ho(e, t, n), Ie(e, n));
}
function Rh(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), wf(e, n);
}
function Fh(e, t) {
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
      throw Error(E(314));
  }
  r !== null && r.delete(t), wf(e, n);
}
var xf;
xf = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Fe.current) Re = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Re = !1), Eh(e, t, n);
      Re = !!(e.flags & 131072);
    }
  else (Re = !1), te && t.flags & 1048576 && bd(t, hl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Jo(e, t), (e = t.pendingProps);
      var o = ir(t, Pe.current);
      nr(t, n), (o = ha(null, t, r, e, o, n));
      var l = ga();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ze(r) ? ((l = !0), pl(t)) : (l = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            ca(t),
            (o.updater = Ul),
            (t.stateNode = o),
            (o._reactInternals = t),
            fs(t, r, e, n),
            (t = hs(null, t, r, !0, l, n)))
          : ((t.tag = 0), te && l && ra(t), je(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Jo(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = Ih(r)),
          (e = st(r, e)),
          o)
        ) {
          case 0:
            t = ms(null, t, r, e, n);
            break e;
          case 1:
            t = Au(null, t, r, e, n);
            break e;
          case 11:
            t = zu(null, t, r, e, n);
            break e;
          case 14:
            t = Iu(null, t, r, st(r.type, e), n);
            break e;
        }
        throw Error(E(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : st(r, o)),
        ms(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : st(r, o)),
        Au(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((nf(t), e === null)) throw Error(E(387));
        (r = t.pendingProps),
          (l = t.memoizedState),
          (o = l.element),
          jd(e, t),
          vl(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), l.isDehydrated))
          if (
            ((l = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = l),
            (t.memoizedState = l),
            t.flags & 256)
          ) {
            (o = cr(Error(E(423)), t)), (t = Uu(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = cr(Error(E(424)), t)), (t = Uu(e, t, r, n, o));
            break e;
          } else
            for (
              We = rn(t.stateNode.containerInfo.firstChild),
                Qe = t,
                te = !0,
                ut = null,
                n = Pd(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((sr(), r === o)) {
            t = zt(e, t, n);
            break e;
          }
          je(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Od(t),
        e === null && us(t),
        (r = t.type),
        (o = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (i = o.children),
        os(r, o) ? (i = null) : l !== null && os(r, l) && (t.flags |= 32),
        tf(e, t),
        je(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && us(t), null;
    case 13:
      return rf(e, t, n);
    case 4:
      return (
        da(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = ar(t, null, r, n)) : je(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : st(r, o)),
        zu(e, t, r, o, n)
      );
    case 7:
      return je(e, t, t.pendingProps, n), t.child;
    case 8:
      return je(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return je(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (l = t.memoizedProps),
          (i = o.value),
          X(gl, r._currentValue),
          (r._currentValue = i),
          l !== null)
        )
          if (ft(l.value, i)) {
            if (l.children === o.children && !Fe.current) {
              t = zt(e, t, n);
              break e;
            }
          } else
            for (l = t.child, l !== null && (l.return = t); l !== null; ) {
              var s = l.dependencies;
              if (s !== null) {
                i = l.child;
                for (var a = s.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (l.tag === 1) {
                      (a = Ot(-1, n & -n)), (a.tag = 2);
                      var u = l.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var d = u.pending;
                        d === null
                          ? (a.next = a)
                          : ((a.next = d.next), (d.next = a)),
                          (u.pending = a);
                      }
                    }
                    (l.lanes |= n),
                      (a = l.alternate),
                      a !== null && (a.lanes |= n),
                      cs(l.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (l.tag === 10) i = l.type === t.type ? null : l.child;
              else if (l.tag === 18) {
                if (((i = l.return), i === null)) throw Error(E(341));
                (i.lanes |= n),
                  (s = i.alternate),
                  s !== null && (s.lanes |= n),
                  cs(i, n, t),
                  (i = l.sibling);
              } else i = l.child;
              if (i !== null) i.return = l;
              else
                for (i = l; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((l = i.sibling), l !== null)) {
                    (l.return = i.return), (i = l);
                    break;
                  }
                  i = i.return;
                }
              l = i;
            }
        je(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        nr(t, n),
        (o = et(o)),
        (r = r(o)),
        (t.flags |= 1),
        je(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = st(r, t.pendingProps)),
        (o = st(r.type, o)),
        Iu(e, t, r, o, n)
      );
    case 15:
      return Zd(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : st(r, o)),
        Jo(e, t),
        (t.tag = 1),
        ze(r) ? ((e = !0), pl(t)) : (e = !1),
        nr(t, n),
        Kd(t, r, o),
        fs(t, r, o, n),
        hs(null, t, r, !0, e, n)
      );
    case 19:
      return of(e, t, n);
    case 22:
      return ef(e, t, n);
  }
  throw Error(E(156, t.tag));
};
function Sf(e, t) {
  return Yc(e, t);
}
function zh(e, t, n, r) {
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
  return new zh(e, t, n, r);
}
function Ca(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Ih(e) {
  if (typeof e == "function") return Ca(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Bs)) return 11;
    if (e === Vs) return 14;
  }
  return 2;
}
function an(e, t) {
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
function tl(e, t, n, r, o, l) {
  var i = 2;
  if (((r = e), typeof e == "function")) Ca(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case Un:
        return En(n.children, o, l, t);
      case Qs:
        (i = 8), (o |= 8);
        break;
      case Ri:
        return (
          (e = Je(12, n, t, o | 2)), (e.elementType = Ri), (e.lanes = l), e
        );
      case Fi:
        return (e = Je(13, n, t, o)), (e.elementType = Fi), (e.lanes = l), e;
      case zi:
        return (e = Je(19, n, t, o)), (e.elementType = zi), (e.lanes = l), e;
      case Oc:
        return Ql(n, o, l, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Tc:
              i = 10;
              break e;
            case jc:
              i = 9;
              break e;
            case Bs:
              i = 11;
              break e;
            case Vs:
              i = 14;
              break e;
            case Bt:
              (i = 16), (r = null);
              break e;
          }
        throw Error(E(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Je(i, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = l), t
  );
}
function En(e, t, n, r) {
  return (e = Je(7, e, r, t)), (e.lanes = n), e;
}
function Ql(e, t, n, r) {
  return (
    (e = Je(22, e, r, t)),
    (e.elementType = Oc),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Ni(e, t, n) {
  return (e = Je(6, e, null, t)), (e.lanes = n), e;
}
function Ci(e, t, n) {
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
function Ah(e, t, n, r, o) {
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
    (this.eventTimes = ii(0)),
    (this.expirationTimes = ii(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ii(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Pa(e, t, n, r, o, l, i, s, a) {
  return (
    (e = new Ah(e, t, n, s, a)),
    t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
    (l = Je(3, null, null, t)),
    (e.current = l),
    (l.stateNode = e),
    (l.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    ca(l),
    e
  );
}
function Uh(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: An,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function kf(e) {
  if (!e) return cn;
  e = e._reactInternals;
  e: {
    if (_n(e) !== e || e.tag !== 1) throw Error(E(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ze(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(E(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ze(n)) return Sd(e, n, t);
  }
  return t;
}
function bf(e, t, n, r, o, l, i, s, a) {
  return (
    (e = Pa(n, r, !0, e, o, l, i, s, a)),
    (e.context = kf(null)),
    (n = e.current),
    (r = Oe()),
    (o = sn(n)),
    (l = Ot(r, o)),
    (l.callback = t ?? null),
    on(n, l, o),
    (e.current.lanes = o),
    ho(e, o, r),
    Ie(e, r),
    e
  );
}
function Bl(e, t, n, r) {
  var o = t.current,
    l = Oe(),
    i = sn(o);
  return (
    (n = kf(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ot(l, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = on(o, t, i)),
    e !== null && (dt(e, o, i, l), Go(e, o, i)),
    i
  );
}
function Cl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Xu(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ta(e, t) {
  Xu(e, t), (e = e.alternate) && Xu(e, t);
}
function Hh() {
  return null;
}
var Ef =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ja(e) {
  this._internalRoot = e;
}
Vl.prototype.render = ja.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(E(409));
  Bl(e, t, null, null);
};
Vl.prototype.unmount = ja.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    On(function () {
      Bl(null, e, null, null);
    }),
      (t[Rt] = null);
  }
};
function Vl(e) {
  this._internalRoot = e;
}
Vl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = ed();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < qt.length && t !== 0 && t < qt[n].priority; n++);
    qt.splice(n, 0, e), n === 0 && nd(e);
  }
};
function Oa(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Yl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Ju() {}
function Wh(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var l = r;
      r = function () {
        var u = Cl(i);
        l.call(u);
      };
    }
    var i = bf(t, r, e, 0, null, !1, !1, "", Ju);
    return (
      (e._reactRootContainer = i),
      (e[Rt] = i.current),
      ro(e.nodeType === 8 ? e.parentNode : e),
      On(),
      i
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var u = Cl(a);
      s.call(u);
    };
  }
  var a = Pa(e, 0, !1, null, null, !1, !1, "", Ju);
  return (
    (e._reactRootContainer = a),
    (e[Rt] = a.current),
    ro(e.nodeType === 8 ? e.parentNode : e),
    On(function () {
      Bl(t, a, n, r);
    }),
    a
  );
}
function ql(e, t, n, r, o) {
  var l = n._reactRootContainer;
  if (l) {
    var i = l;
    if (typeof o == "function") {
      var s = o;
      o = function () {
        var a = Cl(i);
        s.call(a);
      };
    }
    Bl(t, i, e, o);
  } else i = Wh(n, t, e, o, r);
  return Cl(i);
}
Jc = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = $r(t.pendingLanes);
        n !== 0 &&
          (Gs(t, n | 1), Ie(t, ue()), !(Q & 6) && ((dr = ue() + 500), pn()));
      }
      break;
    case 13:
      On(function () {
        var r = Ft(e, 1);
        if (r !== null) {
          var o = Oe();
          dt(r, e, 1, o);
        }
      }),
        Ta(e, 1);
  }
};
Ks = function (e) {
  if (e.tag === 13) {
    var t = Ft(e, 134217728);
    if (t !== null) {
      var n = Oe();
      dt(t, e, 134217728, n);
    }
    Ta(e, 134217728);
  }
};
Zc = function (e) {
  if (e.tag === 13) {
    var t = sn(e),
      n = Ft(e, t);
    if (n !== null) {
      var r = Oe();
      dt(n, e, t, r);
    }
    Ta(e, t);
  }
};
ed = function () {
  return q;
};
td = function (e, t) {
  var n = q;
  try {
    return (q = e), t();
  } finally {
    q = n;
  }
};
qi = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Ui(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var o = zl(r);
            if (!o) throw Error(E(90));
            Lc(r), Ui(r, o);
          }
        }
      }
      break;
    case "textarea":
      Dc(e, n);
      break;
    case "select":
      (t = n.value), t != null && Jn(e, !!n.multiple, t, !1);
  }
};
Uc = ba;
Hc = On;
var Qh = { usingClientEntryPoint: !1, Events: [yo, Bn, zl, Ic, Ac, ba] },
  Cr = {
    findFiberByHostInstance: vn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Bh = {
    bundleType: Cr.bundleType,
    version: Cr.version,
    rendererPackageName: Cr.rendererPackageName,
    rendererConfig: Cr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: It.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Bc(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Cr.findFiberByHostInstance || Hh,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Uo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Uo.isDisabled && Uo.supportsFiber)
    try {
      (Dl = Uo.inject(Bh)), (kt = Uo);
    } catch {}
}
Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Qh;
Ve.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Oa(t)) throw Error(E(200));
  return Uh(e, t, null, n);
};
Ve.createRoot = function (e, t) {
  if (!Oa(e)) throw Error(E(299));
  var n = !1,
    r = "",
    o = Ef;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Pa(e, 1, !1, null, null, n, !1, r, o)),
    (e[Rt] = t.current),
    ro(e.nodeType === 8 ? e.parentNode : e),
    new ja(t)
  );
};
Ve.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(E(188))
      : ((e = Object.keys(e).join(",")), Error(E(268, e)));
  return (e = Bc(t)), (e = e === null ? null : e.stateNode), e;
};
Ve.flushSync = function (e) {
  return On(e);
};
Ve.hydrate = function (e, t, n) {
  if (!Yl(t)) throw Error(E(200));
  return ql(null, e, t, !0, n);
};
Ve.hydrateRoot = function (e, t, n) {
  if (!Oa(e)) throw Error(E(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    l = "",
    i = Ef;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = bf(t, null, e, 1, n ?? null, o, !1, l, i)),
    (e[Rt] = t.current),
    ro(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Vl(t);
};
Ve.render = function (e, t, n) {
  if (!Yl(t)) throw Error(E(200));
  return ql(null, e, t, !1, n);
};
Ve.unmountComponentAtNode = function (e) {
  if (!Yl(e)) throw Error(E(40));
  return e._reactRootContainer
    ? (On(function () {
        ql(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Rt] = null);
        });
      }),
      !0)
    : !1;
};
Ve.unstable_batchedUpdates = ba;
Ve.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Yl(n)) throw Error(E(200));
  if (e == null || e._reactInternals === void 0) throw Error(E(38));
  return ql(e, t, n, !1, r);
};
Ve.version = "18.3.1-next-f1338f8080-20240426";
function Nf() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Nf);
    } catch (e) {
      console.error(e);
    }
}
Nf(), (Ec.exports = Ve);
var Cf = Ec.exports,
  Pf,
  Zu = Cf;
(Pf = Zu.createRoot), Zu.hydrateRoot;
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
function Mn(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t);
}
const Tf = 6048e5,
  Vh = 864e5;
let Yh = {};
function Gl() {
  return Yh;
}
function po(e, t) {
  var s, a, u, d;
  const n = Gl(),
    r =
      (t == null ? void 0 : t.weekStartsOn) ??
      ((a = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) ==
      null
        ? void 0
        : a.weekStartsOn) ??
      n.weekStartsOn ??
      ((d = (u = n.locale) == null ? void 0 : u.options) == null
        ? void 0
        : d.weekStartsOn) ??
      0,
    o = pt(e),
    l = o.getDay(),
    i = (l < r ? 7 : 0) + l - r;
  return o.setDate(o.getDate() - i), o.setHours(0, 0, 0, 0), o;
}
function Pl(e) {
  return po(e, { weekStartsOn: 1 });
}
function jf(e) {
  const t = pt(e),
    n = t.getFullYear(),
    r = Mn(e, 0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  const o = Pl(r),
    l = Mn(e, 0);
  l.setFullYear(n, 0, 4), l.setHours(0, 0, 0, 0);
  const i = Pl(l);
  return t.getTime() >= o.getTime()
    ? n + 1
    : t.getTime() >= i.getTime()
    ? n
    : n - 1;
}
function ec(e) {
  const t = pt(e);
  return t.setHours(0, 0, 0, 0), t;
}
function tc(e) {
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
function qh(e, t) {
  const n = ec(e),
    r = ec(t),
    o = +n - tc(n),
    l = +r - tc(r);
  return Math.round((o - l) / Vh);
}
function Gh(e) {
  const t = jf(e),
    n = Mn(e, 0);
  return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), Pl(n);
}
function Kh(e) {
  return (
    e instanceof Date ||
    (typeof e == "object" &&
      Object.prototype.toString.call(e) === "[object Date]")
  );
}
function Xh(e) {
  if (!Kh(e) && typeof e != "number") return !1;
  const t = pt(e);
  return !isNaN(Number(t));
}
function Jh(e) {
  const t = pt(e),
    n = Mn(e, 0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
const Zh = {
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
  eg = (e, t, n) => {
    let r;
    const o = Zh[e];
    return (
      typeof o == "string"
        ? (r = o)
        : t === 1
        ? (r = o.one)
        : (r = o.other.replace("{{count}}", t.toString())),
      n != null && n.addSuffix
        ? n.comparison && n.comparison > 0
          ? "in " + r
          : r + " ago"
        : r
    );
  };
function Pi(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const tg = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy",
  },
  ng = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a",
  },
  rg = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}",
  },
  og = {
    date: Pi({ formats: tg, defaultWidth: "full" }),
    time: Pi({ formats: ng, defaultWidth: "full" }),
    dateTime: Pi({ formats: rg, defaultWidth: "full" }),
  },
  lg = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P",
  },
  ig = (e, t, n, r) => lg[e];
function Pr(e) {
  return (t, n) => {
    const r = n != null && n.context ? String(n.context) : "standalone";
    let o;
    if (r === "formatting" && e.formattingValues) {
      const i = e.defaultFormattingWidth || e.defaultWidth,
        s = n != null && n.width ? String(n.width) : i;
      o = e.formattingValues[s] || e.formattingValues[i];
    } else {
      const i = e.defaultWidth,
        s = n != null && n.width ? String(n.width) : e.defaultWidth;
      o = e.values[s] || e.values[i];
    }
    const l = e.argumentCallback ? e.argumentCallback(t) : t;
    return o[l];
  };
}
const sg = {
    narrow: ["B", "A"],
    abbreviated: ["BC", "AD"],
    wide: ["Before Christ", "Anno Domini"],
  },
  ag = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
  },
  ug = {
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
  cg = {
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
  dg = {
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
  fg = {
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
  pg = (e, t) => {
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
  mg = {
    ordinalNumber: pg,
    era: Pr({ values: sg, defaultWidth: "wide" }),
    quarter: Pr({
      values: ag,
      defaultWidth: "wide",
      argumentCallback: (e) => e - 1,
    }),
    month: Pr({ values: ug, defaultWidth: "wide" }),
    day: Pr({ values: cg, defaultWidth: "wide" }),
    dayPeriod: Pr({
      values: dg,
      defaultWidth: "wide",
      formattingValues: fg,
      defaultFormattingWidth: "wide",
    }),
  };
function Tr(e) {
  return (t, n = {}) => {
    const r = n.width,
      o = (r && e.matchPatterns[r]) || e.matchPatterns[e.defaultMatchWidth],
      l = t.match(o);
    if (!l) return null;
    const i = l[0],
      s = (r && e.parsePatterns[r]) || e.parsePatterns[e.defaultParseWidth],
      a = Array.isArray(s) ? gg(s, (p) => p.test(i)) : hg(s, (p) => p.test(i));
    let u;
    (u = e.valueCallback ? e.valueCallback(a) : a),
      (u = n.valueCallback ? n.valueCallback(u) : u);
    const d = t.slice(i.length);
    return { value: u, rest: d };
  };
}
function hg(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n])) return n;
}
function gg(e, t) {
  for (let n = 0; n < e.length; n++) if (t(e[n])) return n;
}
function yg(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const o = r[0],
      l = t.match(e.parsePattern);
    if (!l) return null;
    let i = e.valueCallback ? e.valueCallback(l[0]) : l[0];
    i = n.valueCallback ? n.valueCallback(i) : i;
    const s = t.slice(o.length);
    return { value: i, rest: s };
  };
}
const vg = /^(\d+)(th|st|nd|rd)?/i,
  wg = /\d+/i,
  xg = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i,
  },
  Sg = { any: [/^b/i, /^(a|c)/i] },
  kg = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i,
  },
  bg = { any: [/1/i, /2/i, /3/i, /4/i] },
  Eg = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
  },
  Ng = {
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
  Cg = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
  },
  Pg = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
  },
  Tg = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
  },
  jg = {
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
  Og = {
    ordinalNumber: yg({
      matchPattern: vg,
      parsePattern: wg,
      valueCallback: (e) => parseInt(e, 10),
    }),
    era: Tr({
      matchPatterns: xg,
      defaultMatchWidth: "wide",
      parsePatterns: Sg,
      defaultParseWidth: "any",
    }),
    quarter: Tr({
      matchPatterns: kg,
      defaultMatchWidth: "wide",
      parsePatterns: bg,
      defaultParseWidth: "any",
      valueCallback: (e) => e + 1,
    }),
    month: Tr({
      matchPatterns: Eg,
      defaultMatchWidth: "wide",
      parsePatterns: Ng,
      defaultParseWidth: "any",
    }),
    day: Tr({
      matchPatterns: Cg,
      defaultMatchWidth: "wide",
      parsePatterns: Pg,
      defaultParseWidth: "any",
    }),
    dayPeriod: Tr({
      matchPatterns: Tg,
      defaultMatchWidth: "any",
      parsePatterns: jg,
      defaultParseWidth: "any",
    }),
  },
  Mg = {
    code: "en-US",
    formatDistance: eg,
    formatLong: og,
    formatRelative: ig,
    localize: mg,
    match: Og,
    options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
  };
function Lg(e) {
  const t = pt(e);
  return qh(t, Jh(t)) + 1;
}
function _g(e) {
  const t = pt(e),
    n = +Pl(t) - +Gh(t);
  return Math.round(n / Tf) + 1;
}
function Of(e, t) {
  var d, p, g, x;
  const n = pt(e),
    r = n.getFullYear(),
    o = Gl(),
    l =
      (t == null ? void 0 : t.firstWeekContainsDate) ??
      ((p = (d = t == null ? void 0 : t.locale) == null ? void 0 : d.options) ==
      null
        ? void 0
        : p.firstWeekContainsDate) ??
      o.firstWeekContainsDate ??
      ((x = (g = o.locale) == null ? void 0 : g.options) == null
        ? void 0
        : x.firstWeekContainsDate) ??
      1,
    i = Mn(e, 0);
  i.setFullYear(r + 1, 0, l), i.setHours(0, 0, 0, 0);
  const s = po(i, t),
    a = Mn(e, 0);
  a.setFullYear(r, 0, l), a.setHours(0, 0, 0, 0);
  const u = po(a, t);
  return n.getTime() >= s.getTime()
    ? r + 1
    : n.getTime() >= u.getTime()
    ? r
    : r - 1;
}
function Dg(e, t) {
  var s, a, u, d;
  const n = Gl(),
    r =
      (t == null ? void 0 : t.firstWeekContainsDate) ??
      ((a = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) ==
      null
        ? void 0
        : a.firstWeekContainsDate) ??
      n.firstWeekContainsDate ??
      ((d = (u = n.locale) == null ? void 0 : u.options) == null
        ? void 0
        : d.firstWeekContainsDate) ??
      1,
    o = Of(e, t),
    l = Mn(e, 0);
  return l.setFullYear(o, 0, r), l.setHours(0, 0, 0, 0), po(l, t);
}
function $g(e, t) {
  const n = pt(e),
    r = +po(n, t) - +Dg(n, t);
  return Math.round(r / Tf) + 1;
}
function Y(e, t) {
  const n = e < 0 ? "-" : "",
    r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const Ut = {
    y(e, t) {
      const n = e.getFullYear(),
        r = n > 0 ? n : 1 - n;
      return Y(t === "yy" ? r % 100 : r, t.length);
    },
    M(e, t) {
      const n = e.getMonth();
      return t === "M" ? String(n + 1) : Y(n + 1, 2);
    },
    d(e, t) {
      return Y(e.getDate(), t.length);
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
      return Y(e.getHours() % 12 || 12, t.length);
    },
    H(e, t) {
      return Y(e.getHours(), t.length);
    },
    m(e, t) {
      return Y(e.getMinutes(), t.length);
    },
    s(e, t) {
      return Y(e.getSeconds(), t.length);
    },
    S(e, t) {
      const n = t.length,
        r = e.getMilliseconds(),
        o = Math.trunc(r * Math.pow(10, n - 3));
      return Y(o, t.length);
    },
  },
  In = {
    am: "am",
    pm: "pm",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  nc = {
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
          o = r > 0 ? r : 1 - r;
        return n.ordinalNumber(o, { unit: "year" });
      }
      return Ut.y(e, t);
    },
    Y: function (e, t, n, r) {
      const o = Of(e, r),
        l = o > 0 ? o : 1 - o;
      if (t === "YY") {
        const i = l % 100;
        return Y(i, 2);
      }
      return t === "Yo" ? n.ordinalNumber(l, { unit: "year" }) : Y(l, t.length);
    },
    R: function (e, t) {
      const n = jf(e);
      return Y(n, t.length);
    },
    u: function (e, t) {
      const n = e.getFullYear();
      return Y(n, t.length);
    },
    Q: function (e, t, n) {
      const r = Math.ceil((e.getMonth() + 1) / 3);
      switch (t) {
        case "Q":
          return String(r);
        case "QQ":
          return Y(r, 2);
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
          return Y(r, 2);
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
          return Y(r + 1, 2);
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
      const o = $g(e, r);
      return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : Y(o, t.length);
    },
    I: function (e, t, n) {
      const r = _g(e);
      return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : Y(r, t.length);
    },
    d: function (e, t, n) {
      return t === "do"
        ? n.ordinalNumber(e.getDate(), { unit: "date" })
        : Ut.d(e, t);
    },
    D: function (e, t, n) {
      const r = Lg(e);
      return t === "Do"
        ? n.ordinalNumber(r, { unit: "dayOfYear" })
        : Y(r, t.length);
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
      const o = e.getDay(),
        l = (o - r.weekStartsOn + 8) % 7 || 7;
      switch (t) {
        case "e":
          return String(l);
        case "ee":
          return Y(l, 2);
        case "eo":
          return n.ordinalNumber(l, { unit: "day" });
        case "eee":
          return n.day(o, { width: "abbreviated", context: "formatting" });
        case "eeeee":
          return n.day(o, { width: "narrow", context: "formatting" });
        case "eeeeee":
          return n.day(o, { width: "short", context: "formatting" });
        case "eeee":
        default:
          return n.day(o, { width: "wide", context: "formatting" });
      }
    },
    c: function (e, t, n, r) {
      const o = e.getDay(),
        l = (o - r.weekStartsOn + 8) % 7 || 7;
      switch (t) {
        case "c":
          return String(l);
        case "cc":
          return Y(l, t.length);
        case "co":
          return n.ordinalNumber(l, { unit: "day" });
        case "ccc":
          return n.day(o, { width: "abbreviated", context: "standalone" });
        case "ccccc":
          return n.day(o, { width: "narrow", context: "standalone" });
        case "cccccc":
          return n.day(o, { width: "short", context: "standalone" });
        case "cccc":
        default:
          return n.day(o, { width: "wide", context: "standalone" });
      }
    },
    i: function (e, t, n) {
      const r = e.getDay(),
        o = r === 0 ? 7 : r;
      switch (t) {
        case "i":
          return String(o);
        case "ii":
          return Y(o, t.length);
        case "io":
          return n.ordinalNumber(o, { unit: "day" });
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
      const o = e.getHours() / 12 >= 1 ? "pm" : "am";
      switch (t) {
        case "a":
        case "aa":
          return n.dayPeriod(o, {
            width: "abbreviated",
            context: "formatting",
          });
        case "aaa":
          return n
            .dayPeriod(o, { width: "abbreviated", context: "formatting" })
            .toLowerCase();
        case "aaaaa":
          return n.dayPeriod(o, { width: "narrow", context: "formatting" });
        case "aaaa":
        default:
          return n.dayPeriod(o, { width: "wide", context: "formatting" });
      }
    },
    b: function (e, t, n) {
      const r = e.getHours();
      let o;
      switch (
        (r === 12
          ? (o = In.noon)
          : r === 0
          ? (o = In.midnight)
          : (o = r / 12 >= 1 ? "pm" : "am"),
        t)
      ) {
        case "b":
        case "bb":
          return n.dayPeriod(o, {
            width: "abbreviated",
            context: "formatting",
          });
        case "bbb":
          return n
            .dayPeriod(o, { width: "abbreviated", context: "formatting" })
            .toLowerCase();
        case "bbbbb":
          return n.dayPeriod(o, { width: "narrow", context: "formatting" });
        case "bbbb":
        default:
          return n.dayPeriod(o, { width: "wide", context: "formatting" });
      }
    },
    B: function (e, t, n) {
      const r = e.getHours();
      let o;
      switch (
        (r >= 17
          ? (o = In.evening)
          : r >= 12
          ? (o = In.afternoon)
          : r >= 4
          ? (o = In.morning)
          : (o = In.night),
        t)
      ) {
        case "B":
        case "BB":
        case "BBB":
          return n.dayPeriod(o, {
            width: "abbreviated",
            context: "formatting",
          });
        case "BBBBB":
          return n.dayPeriod(o, { width: "narrow", context: "formatting" });
        case "BBBB":
        default:
          return n.dayPeriod(o, { width: "wide", context: "formatting" });
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
      return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : Y(r, t.length);
    },
    k: function (e, t, n) {
      let r = e.getHours();
      return (
        r === 0 && (r = 24),
        t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : Y(r, t.length)
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
          return oc(r);
        case "XXXX":
        case "XX":
          return gn(r);
        case "XXXXX":
        case "XXX":
        default:
          return gn(r, ":");
      }
    },
    x: function (e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
        case "x":
          return oc(r);
        case "xxxx":
        case "xx":
          return gn(r);
        case "xxxxx":
        case "xxx":
        default:
          return gn(r, ":");
      }
    },
    O: function (e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
        case "O":
        case "OO":
        case "OOO":
          return "GMT" + rc(r, ":");
        case "OOOO":
        default:
          return "GMT" + gn(r, ":");
      }
    },
    z: function (e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
        case "z":
        case "zz":
        case "zzz":
          return "GMT" + rc(r, ":");
        case "zzzz":
        default:
          return "GMT" + gn(r, ":");
      }
    },
    t: function (e, t, n) {
      const r = Math.trunc(e.getTime() / 1e3);
      return Y(r, t.length);
    },
    T: function (e, t, n) {
      const r = e.getTime();
      return Y(r, t.length);
    },
  };
function rc(e, t = "") {
  const n = e > 0 ? "-" : "+",
    r = Math.abs(e),
    o = Math.trunc(r / 60),
    l = r % 60;
  return l === 0 ? n + String(o) : n + String(o) + t + Y(l, 2);
}
function oc(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + Y(Math.abs(e) / 60, 2) : gn(e, t);
}
function gn(e, t = "") {
  const n = e > 0 ? "-" : "+",
    r = Math.abs(e),
    o = Y(Math.trunc(r / 60), 2),
    l = Y(r % 60, 2);
  return n + o + t + l;
}
const lc = (e, t) => {
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
  Mf = (e, t) => {
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
  Rg = (e, t) => {
    const n = e.match(/(P+)(p+)?/) || [],
      r = n[1],
      o = n[2];
    if (!o) return lc(e, t);
    let l;
    switch (r) {
      case "P":
        l = t.dateTime({ width: "short" });
        break;
      case "PP":
        l = t.dateTime({ width: "medium" });
        break;
      case "PPP":
        l = t.dateTime({ width: "long" });
        break;
      case "PPPP":
      default:
        l = t.dateTime({ width: "full" });
        break;
    }
    return l.replace("{{date}}", lc(r, t)).replace("{{time}}", Mf(o, t));
  },
  Fg = { p: Mf, P: Rg },
  zg = /^D+$/,
  Ig = /^Y+$/,
  Ag = ["D", "DD", "YY", "YYYY"];
function Ug(e) {
  return zg.test(e);
}
function Hg(e) {
  return Ig.test(e);
}
function Wg(e, t, n) {
  const r = Qg(e, t, n);
  if ((console.warn(r), Ag.includes(e))) throw new RangeError(r);
}
function Qg(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const Bg = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  Vg = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  Yg = /^'([^]*?)'?$/,
  qg = /''/g,
  Gg = /[a-zA-Z]/;
function G(e, t, n) {
  var d, p, g, x;
  const r = Gl(),
    o = r.locale ?? Mg,
    l =
      r.firstWeekContainsDate ??
      ((p = (d = r.locale) == null ? void 0 : d.options) == null
        ? void 0
        : p.firstWeekContainsDate) ??
      1,
    i =
      r.weekStartsOn ??
      ((x = (g = r.locale) == null ? void 0 : g.options) == null
        ? void 0
        : x.weekStartsOn) ??
      0,
    s = pt(e);
  if (!Xh(s)) throw new RangeError("Invalid time value");
  let a = t
    .match(Vg)
    .map((v) => {
      const w = v[0];
      if (w === "p" || w === "P") {
        const b = Fg[w];
        return b(v, o.formatLong);
      }
      return v;
    })
    .join("")
    .match(Bg)
    .map((v) => {
      if (v === "''") return { isToken: !1, value: "'" };
      const w = v[0];
      if (w === "'") return { isToken: !1, value: Kg(v) };
      if (nc[w]) return { isToken: !0, value: v };
      if (w.match(Gg))
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" +
            w +
            "`"
        );
      return { isToken: !1, value: v };
    });
  o.localize.preprocessor && (a = o.localize.preprocessor(s, a));
  const u = { firstWeekContainsDate: l, weekStartsOn: i, locale: o };
  return a
    .map((v) => {
      if (!v.isToken) return v.value;
      const w = v.value;
      (Hg(w) || Ug(w)) && Wg(w, t, String(e));
      const b = nc[w[0]];
      return b(s, w, o.localize, u);
    })
    .join("");
}
function Kg(e) {
  const t = e.match(Yg);
  return t ? t[1].replace(qg, "'") : e;
}
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Xg = {
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
 */ const Jg = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  mt = (e, t) => {
    const n = y.forwardRef(
      (
        {
          color: r = "currentColor",
          size: o = 24,
          strokeWidth: l = 2,
          absoluteStrokeWidth: i,
          className: s = "",
          children: a,
          ...u
        },
        d
      ) =>
        y.createElement(
          "svg",
          {
            ref: d,
            ...Xg,
            width: o,
            height: o,
            stroke: r,
            strokeWidth: i ? (Number(l) * 24) / Number(o) : l,
            className: ["lucide", `lucide-${Jg(e)}`, s].join(" "),
            ...u,
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
 */ const Ps = mt("AlertCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zg = mt("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const e0 = mt("ChevronUp", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const t0 = mt("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const n0 = mt("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const r0 = mt("Globe", [
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
 */ const o0 = mt("Layers", [
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
 */ const l0 = mt("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const i0 = mt("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const s0 = mt("Settings", [
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
 */ const a0 = mt("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]);
var u0 = Object.defineProperty,
  c0 = (e, t, n) =>
    t in e
      ? u0(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Ti = (e, t, n) => (c0(e, typeof t != "symbol" ? t + "" : t, n), n);
let d0 = class {
    constructor() {
      Ti(this, "current", this.detect()),
        Ti(this, "handoffState", "pending"),
        Ti(this, "currentId", 0);
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
  Mt = new d0(),
  nt = (e, t) => {
    Mt.isServer ? y.useEffect(e, t) : y.useLayoutEffect(e, t);
  };
function Lt(e) {
  let t = y.useRef(e);
  return (
    nt(() => {
      t.current = e;
    }, [e]),
    t
  );
}
let ne = function (e) {
  let t = Lt(e);
  return H.useCallback((...n) => t.current(...n), [t]);
};
function Kl(e) {
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
function Dn() {
  let e = [],
    t = {
      addEventListener(n, r, o, l) {
        return (
          n.addEventListener(r, o, l),
          t.add(() => n.removeEventListener(r, o, l))
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
          Kl(() => {
            r.current && n[0]();
          }),
          t.add(() => {
            r.current = !1;
          })
        );
      },
      style(n, r, o) {
        let l = n.style.getPropertyValue(r);
        return (
          Object.assign(n.style, { [r]: o }),
          this.add(() => {
            Object.assign(n.style, { [r]: l });
          })
        );
      },
      group(n) {
        let r = Dn();
        return n(r), this.add(() => r.dispose());
      },
      add(n) {
        return (
          e.push(n),
          () => {
            let r = e.indexOf(n);
            if (r >= 0) for (let o of e.splice(r, 1)) o();
          }
        );
      },
      dispose() {
        for (let n of e.splice(0)) n();
      },
    };
  return t;
}
function Ma() {
  let [e] = y.useState(Dn);
  return y.useEffect(() => () => e.dispose(), [e]), e;
}
function f0() {
  let e = typeof document > "u";
  return "useSyncExternalStore" in qr
    ? ((t) => t.useSyncExternalStore)(qr)(
        () => () => {},
        () => !1,
        () => !e
      )
    : !1;
}
function hr() {
  let e = f0(),
    [t, n] = y.useState(Mt.isHandoffComplete);
  return (
    t && Mt.isHandoffComplete === !1 && n(!1),
    y.useEffect(() => {
      t !== !0 && n(!0);
    }, [t]),
    y.useEffect(() => Mt.handoff(), []),
    e ? !1 : t
  );
}
var ic;
let gr =
  (ic = H.useId) != null
    ? ic
    : function () {
        let e = hr(),
          [t, n] = H.useState(e ? () => Mt.nextId() : null);
        return (
          nt(() => {
            t === null && n(Mt.nextId());
          }, [t]),
          t != null ? "" + t : void 0
        );
      };
function Ce(e, t, ...n) {
  if (e in t) {
    let o = t[e];
    return typeof o == "function" ? o(...n) : o;
  }
  let r = new Error(
    `Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(
      t
    )
      .map((o) => `"${o}"`)
      .join(", ")}.`
  );
  throw (Error.captureStackTrace && Error.captureStackTrace(r, Ce), r);
}
function Lf(e) {
  return Mt.isServer
    ? null
    : e instanceof Node
    ? e.ownerDocument
    : e != null && e.hasOwnProperty("current") && e.current instanceof Node
    ? e.current.ownerDocument
    : document;
}
let Ts = [
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
var yn = ((e) => (
    (e[(e.First = 1)] = "First"),
    (e[(e.Previous = 2)] = "Previous"),
    (e[(e.Next = 4)] = "Next"),
    (e[(e.Last = 8)] = "Last"),
    (e[(e.WrapAround = 16)] = "WrapAround"),
    (e[(e.NoScroll = 32)] = "NoScroll"),
    e
  ))(yn || {}),
  _f = ((e) => (
    (e[(e.Error = 0)] = "Error"),
    (e[(e.Overflow = 1)] = "Overflow"),
    (e[(e.Success = 2)] = "Success"),
    (e[(e.Underflow = 3)] = "Underflow"),
    e
  ))(_f || {}),
  p0 = ((e) => (
    (e[(e.Previous = -1)] = "Previous"), (e[(e.Next = 1)] = "Next"), e
  ))(p0 || {});
function m0(e = document.body) {
  return e == null
    ? []
    : Array.from(e.querySelectorAll(Ts)).sort((t, n) =>
        Math.sign(
          (t.tabIndex || Number.MAX_SAFE_INTEGER) -
            (n.tabIndex || Number.MAX_SAFE_INTEGER)
        )
      );
}
var Df = ((e) => (
  (e[(e.Strict = 0)] = "Strict"), (e[(e.Loose = 1)] = "Loose"), e
))(Df || {});
function h0(e, t = 0) {
  var n;
  return e === ((n = Lf(e)) == null ? void 0 : n.body)
    ? !1
    : Ce(t, {
        0() {
          return e.matches(Ts);
        },
        1() {
          let r = e;
          for (; r !== null; ) {
            if (r.matches(Ts)) return !0;
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
function Nn(e) {
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
function w0(e, t = (n) => n) {
  return e.slice().sort((n, r) => {
    let o = t(n),
      l = t(r);
    if (o === null || l === null) return 0;
    let i = o.compareDocumentPosition(l);
    return i & Node.DOCUMENT_POSITION_FOLLOWING
      ? -1
      : i & Node.DOCUMENT_POSITION_PRECEDING
      ? 1
      : 0;
  });
}
function nl(
  e,
  t,
  { sorted: n = !0, relativeTo: r = null, skipElements: o = [] } = {}
) {
  let l = Array.isArray(e)
      ? e.length > 0
        ? e[0].ownerDocument
        : document
      : e.ownerDocument,
    i = Array.isArray(e) ? (n ? w0(e) : e) : m0(e);
  o.length > 0 && i.length > 1 && (i = i.filter((x) => !o.includes(x))),
    (r = r ?? l.activeElement);
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
    u = t & 32 ? { preventScroll: !0 } : {},
    d = 0,
    p = i.length,
    g;
  do {
    if (d >= p || d + p <= 0) return 0;
    let x = a + d;
    if (t & 16) x = (x + p) % p;
    else {
      if (x < 0) return 3;
      if (x >= p) return 1;
    }
    (g = i[x]), g == null || g.focus(u), (d += s);
  } while (g !== l.activeElement);
  return t & 6 && v0(g) && g.select(), 2;
}
function $f() {
  return (
    /iPhone/gi.test(window.navigator.platform) ||
    (/Mac/gi.test(window.navigator.platform) &&
      window.navigator.maxTouchPoints > 0)
  );
}
function x0() {
  return /Android/gi.test(window.navigator.userAgent);
}
function S0() {
  return $f() || x0();
}
function Ho(e, t, n) {
  let r = Lt(t);
  y.useEffect(() => {
    function o(l) {
      r.current(l);
    }
    return (
      document.addEventListener(e, o, n),
      () => document.removeEventListener(e, o, n)
    );
  }, [e, n]);
}
function Rf(e, t, n) {
  let r = Lt(t);
  y.useEffect(() => {
    function o(l) {
      r.current(l);
    }
    return (
      window.addEventListener(e, o, n),
      () => window.removeEventListener(e, o, n)
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
  function o(i, s) {
    if (!r.current || i.defaultPrevented) return;
    let a = s(i);
    if (a === null || !a.getRootNode().contains(a) || !a.isConnected) return;
    let u = (function d(p) {
      return typeof p == "function"
        ? d(p())
        : Array.isArray(p) || p instanceof Set
        ? p
        : [p];
    })(e);
    for (let d of u) {
      if (d === null) continue;
      let p = d instanceof HTMLElement ? d : d.current;
      if (
        (p != null && p.contains(a)) ||
        (i.composed && i.composedPath().includes(p))
      )
        return;
    }
    return !h0(a, Df.Loose) && a.tabIndex !== -1 && i.preventDefault(), t(i, a);
  }
  let l = y.useRef(null);
  Ho(
    "pointerdown",
    (i) => {
      var s, a;
      r.current &&
        (l.current =
          ((a = (s = i.composedPath) == null ? void 0 : s.call(i)) == null
            ? void 0
            : a[0]) || i.target);
    },
    !0
  ),
    Ho(
      "mousedown",
      (i) => {
        var s, a;
        r.current &&
          (l.current =
            ((a = (s = i.composedPath) == null ? void 0 : s.call(i)) == null
              ? void 0
              : a[0]) || i.target);
      },
      !0
    ),
    Ho(
      "click",
      (i) => {
        S0() || (l.current && (o(i, () => l.current), (l.current = null)));
      },
      !0
    ),
    Ho(
      "touchend",
      (i) => o(i, () => (i.target instanceof HTMLElement ? i.target : null)),
      !0
    ),
    Rf(
      "blur",
      (i) =>
        o(i, () =>
          window.document.activeElement instanceof HTMLIFrameElement
            ? window.document.activeElement
            : null
        ),
      !0
    );
}
function wo(...e) {
  return y.useMemo(() => Lf(...e), [...e]);
}
let Ff = Symbol();
function b0(e, t = !0) {
  return Object.assign(e, { [Ff]: t });
}
function ht(...e) {
  let t = y.useRef(e);
  y.useEffect(() => {
    t.current = e;
  }, [e]);
  let n = ne((r) => {
    for (let o of t.current)
      o != null && (typeof o == "function" ? o(r) : (o.current = r));
  });
  return e.every((r) => r == null || (r == null ? void 0 : r[Ff])) ? void 0 : n;
}
function La(e, t) {
  let n = y.useRef([]),
    r = ne(e);
  y.useEffect(() => {
    let o = [...n.current];
    for (let [l, i] of t.entries())
      if (n.current[l] !== i) {
        let s = r(t, o);
        return (n.current = t), s;
      }
  }, [r, ...t]);
}
function Tl(...e) {
  return Array.from(
    new Set(e.flatMap((t) => (typeof t == "string" ? t.split(" ") : [])))
  )
    .filter(Boolean)
    .join(" ");
}
var jl = ((e) => (
    (e[(e.None = 0)] = "None"),
    (e[(e.RenderStrategy = 1)] = "RenderStrategy"),
    (e[(e.Static = 2)] = "Static"),
    e
  ))(jl || {}),
  Zt = ((e) => (
    (e[(e.Unmount = 0)] = "Unmount"), (e[(e.Hidden = 1)] = "Hidden"), e
  ))(Zt || {});
function rt({
  ourProps: e,
  theirProps: t,
  slot: n,
  defaultTag: r,
  features: o,
  visible: l = !0,
  name: i,
  mergeRefs: s,
}) {
  s = s ?? E0;
  let a = zf(t, e);
  if (l) return Wo(a, n, r, i, s);
  let u = o ?? 0;
  if (u & 2) {
    let { static: d = !1, ...p } = a;
    if (d) return Wo(p, n, r, i, s);
  }
  if (u & 1) {
    let { unmount: d = !0, ...p } = a;
    return Ce(d ? 0 : 1, {
      0() {
        return null;
      },
      1() {
        return Wo({ ...p, hidden: !0, style: { display: "none" } }, n, r, i, s);
      },
    });
  }
  return Wo(a, n, r, i, s);
}
function Wo(e, t = {}, n, r, o) {
  let {
      as: l = n,
      children: i,
      refName: s = "ref",
      ...a
    } = ji(e, ["unmount", "static"]),
    u = e.ref !== void 0 ? { [s]: e.ref } : {},
    d = typeof i == "function" ? i(t) : i;
  "className" in a &&
    a.className &&
    typeof a.className == "function" &&
    (a.className = a.className(t));
  let p = {};
  if (t) {
    let g = !1,
      x = [];
    for (let [v, w] of Object.entries(t))
      typeof w == "boolean" && (g = !0), w === !0 && x.push(v);
    g && (p["data-headlessui-state"] = x.join(" "));
  }
  if (l === y.Fragment && Object.keys(sc(a)).length > 0) {
    if (!y.isValidElement(d) || (Array.isArray(d) && d.length > 1))
      throw new Error(
        [
          'Passing props on "Fragment"!',
          "",
          `The current component <${r} /> is rendering a "Fragment".`,
          "However we need to passthrough the following props:",
          Object.keys(a).map((w) => `  - ${w}`).join(`
`),
          "",
          "You can apply a few solutions:",
          [
            'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
            "Render a single element as the child so that we can forward the props onto that element.",
          ].map((w) => `  - ${w}`).join(`
`),
        ].join(`
`)
      );
    let g = d.props,
      x =
        typeof (g == null ? void 0 : g.className) == "function"
          ? (...w) => Tl(g == null ? void 0 : g.className(...w), a.className)
          : Tl(g == null ? void 0 : g.className, a.className),
      v = x ? { className: x } : {};
    return y.cloneElement(
      d,
      Object.assign(
        {},
        zf(d.props, sc(ji(a, ["ref"]))),
        p,
        u,
        { ref: o(d.ref, u.ref) },
        v
      )
    );
  }
  return y.createElement(
    l,
    Object.assign(
      {},
      ji(a, ["ref"]),
      l !== y.Fragment && u,
      l !== y.Fragment && p
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
function zf(...e) {
  if (e.length === 0) return {};
  if (e.length === 1) return e[0];
  let t = {},
    n = {};
  for (let r of e)
    for (let o in r)
      o.startsWith("on") && typeof r[o] == "function"
        ? (n[o] != null || (n[o] = []), n[o].push(r[o]))
        : (t[o] = r[o]);
  if (t.disabled || t["aria-disabled"])
    return Object.assign(
      t,
      Object.fromEntries(Object.keys(n).map((r) => [r, void 0]))
    );
  for (let r in n)
    Object.assign(t, {
      [r](o, ...l) {
        let i = n[r];
        for (let s of i) {
          if (
            (o instanceof Event ||
              (o == null ? void 0 : o.nativeEvent) instanceof Event) &&
            o.defaultPrevented
          )
            return;
          s(o, ...l);
        }
      },
    });
  return t;
}
function qe(e) {
  var t;
  return Object.assign(y.forwardRef(e), {
    displayName: (t = e.displayName) != null ? t : e.name,
  });
}
function sc(e) {
  let t = Object.assign({}, e);
  for (let n in t) t[n] === void 0 && delete t[n];
  return t;
}
function ji(e, t = []) {
  let n = Object.assign({}, e);
  for (let r of t) r in n && delete n[r];
  return n;
}
let N0 = "div";
var Ol = ((e) => (
  (e[(e.None = 1)] = "None"),
  (e[(e.Focusable = 2)] = "Focusable"),
  (e[(e.Hidden = 4)] = "Hidden"),
  e
))(Ol || {});
function C0(e, t) {
  var n;
  let { features: r = 1, ...o } = e,
    l = {
      ref: t,
      "aria-hidden":
        (r & 2) === 2 ? !0 : (n = o["aria-hidden"]) != null ? n : void 0,
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
    ourProps: l,
    theirProps: o,
    slot: {},
    defaultTag: N0,
    name: "Hidden",
  });
}
let js = qe(C0),
  _a = y.createContext(null);
_a.displayName = "OpenClosedContext";
var He = ((e) => (
  (e[(e.Open = 1)] = "Open"),
  (e[(e.Closed = 2)] = "Closed"),
  (e[(e.Closing = 4)] = "Closing"),
  (e[(e.Opening = 8)] = "Opening"),
  e
))(He || {});
function Da() {
  return y.useContext(_a);
}
function P0({ value: e, children: t }) {
  return H.createElement(_a.Provider, { value: e }, t);
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
let Kt = [];
T0(() => {
  function e(t) {
    t.target instanceof HTMLElement &&
      t.target !== document.body &&
      Kt[0] !== t.target &&
      (Kt.unshift(t.target),
      (Kt = Kt.filter((n) => n != null && n.isConnected)),
      Kt.splice(10));
  }
  window.addEventListener("click", e, { capture: !0 }),
    window.addEventListener("mousedown", e, { capture: !0 }),
    window.addEventListener("focus", e, { capture: !0 }),
    document.body.addEventListener("click", e, { capture: !0 }),
    document.body.addEventListener("mousedown", e, { capture: !0 }),
    document.body.addEventListener("focus", e, { capture: !0 });
});
function j0(e) {
  let t = e.parentElement,
    n = null;
  for (; t && !(t instanceof HTMLFieldSetElement); )
    t instanceof HTMLLegendElement && (n = t), (t = t.parentElement);
  let r = (t == null ? void 0 : t.getAttribute("disabled")) === "";
  return r && O0(n) ? !1 : r;
}
function O0(e) {
  if (!e) return !1;
  let t = e.previousElementSibling;
  for (; t !== null; ) {
    if (t instanceof HTMLLegendElement) return !1;
    t = t.previousElementSibling;
  }
  return !0;
}
var If = ((e) => (
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
))(If || {});
function Af(e, t, n, r) {
  let o = Lt(n);
  y.useEffect(() => {
    e = e ?? window;
    function l(i) {
      o.current(i);
    }
    return e.addEventListener(t, l, r), () => e.removeEventListener(t, l, r);
  }, [e, t, r]);
}
function xo() {
  let e = y.useRef(!1);
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
function Uf(e) {
  let t = ne(e),
    n = y.useRef(!1);
  y.useEffect(
    () => (
      (n.current = !1),
      () => {
        (n.current = !0),
          Kl(() => {
            n.current && t();
          });
      }
    ),
    [t]
  );
}
var Fr = ((e) => (
  (e[(e.Forwards = 0)] = "Forwards"), (e[(e.Backwards = 1)] = "Backwards"), e
))(Fr || {});
function M0() {
  let e = y.useRef(0);
  return (
    Rf(
      "keydown",
      (t) => {
        t.key === "Tab" && (e.current = t.shiftKey ? 1 : 0);
      },
      !0
    ),
    e
  );
}
function Hf(e) {
  if (!e) return new Set();
  if (typeof e == "function") return new Set(e());
  let t = new Set();
  for (let n of e.current) n.current instanceof HTMLElement && t.add(n.current);
  return t;
}
let L0 = "div";
var Wf = ((e) => (
  (e[(e.None = 1)] = "None"),
  (e[(e.InitialFocus = 2)] = "InitialFocus"),
  (e[(e.TabLock = 4)] = "TabLock"),
  (e[(e.FocusLock = 8)] = "FocusLock"),
  (e[(e.RestoreFocus = 16)] = "RestoreFocus"),
  (e[(e.All = 30)] = "All"),
  e
))(Wf || {});
function _0(e, t) {
  let n = y.useRef(null),
    r = ht(n, t),
    { initialFocus: o, containers: l, features: i = 30, ...s } = e;
  hr() || (i = 1);
  let a = wo(n);
  R0({ ownerDocument: a }, !!(i & 16));
  let u = F0({ ownerDocument: a, container: n, initialFocus: o }, !!(i & 2));
  z0(
    { ownerDocument: a, container: n, containers: l, previousActiveElement: u },
    !!(i & 8)
  );
  let d = M0(),
    p = ne((w) => {
      let b = n.current;
      b &&
        ((m) => m())(() => {
          Ce(d.current, {
            [Fr.Forwards]: () => {
              nl(b, yn.First, { skipElements: [w.relatedTarget] });
            },
            [Fr.Backwards]: () => {
              nl(b, yn.Last, { skipElements: [w.relatedTarget] });
            },
          });
        });
    }),
    g = Ma(),
    x = y.useRef(!1),
    v = {
      ref: r,
      onKeyDown(w) {
        w.key == "Tab" &&
          ((x.current = !0),
          g.requestAnimationFrame(() => {
            x.current = !1;
          }));
      },
      onBlur(w) {
        let b = Hf(l);
        n.current instanceof HTMLElement && b.add(n.current);
        let m = w.relatedTarget;
        m instanceof HTMLElement &&
          m.dataset.headlessuiFocusGuard !== "true" &&
          (Qf(b, m) ||
            (x.current
              ? nl(
                  n.current,
                  Ce(d.current, {
                    [Fr.Forwards]: () => yn.Next,
                    [Fr.Backwards]: () => yn.Previous,
                  }) | yn.WrapAround,
                  { relativeTo: w.target }
                )
              : w.target instanceof HTMLElement && Nn(w.target)));
      },
    };
  return H.createElement(
    H.Fragment,
    null,
    !!(i & 4) &&
      H.createElement(js, {
        as: "button",
        type: "button",
        "data-headlessui-focus-guard": !0,
        onFocus: p,
        features: Ol.Focusable,
      }),
    rt({ ourProps: v, theirProps: s, defaultTag: L0, name: "FocusTrap" }),
    !!(i & 4) &&
      H.createElement(js, {
        as: "button",
        type: "button",
        "data-headlessui-focus-guard": !0,
        onFocus: p,
        features: Ol.Focusable,
      })
  );
}
let D0 = qe(_0),
  jr = Object.assign(D0, { features: Wf });
function $0(e = !0) {
  let t = y.useRef(Kt.slice());
  return (
    La(
      ([n], [r]) => {
        r === !0 &&
          n === !1 &&
          Kl(() => {
            t.current.splice(0);
          }),
          r === !1 && n === !0 && (t.current = Kt.slice());
      },
      [e, Kt, t]
    ),
    ne(() => {
      var n;
      return (n = t.current.find((r) => r != null && r.isConnected)) != null
        ? n
        : null;
    })
  );
}
function R0({ ownerDocument: e }, t) {
  let n = $0(t);
  La(() => {
    t ||
      ((e == null ? void 0 : e.activeElement) ===
        (e == null ? void 0 : e.body) &&
        Nn(n()));
  }, [t]),
    Uf(() => {
      t && Nn(n());
    });
}
function F0({ ownerDocument: e, container: t, initialFocus: n }, r) {
  let o = y.useRef(null),
    l = xo();
  return (
    La(() => {
      if (!r) return;
      let i = t.current;
      i &&
        Kl(() => {
          if (!l.current) return;
          let s = e == null ? void 0 : e.activeElement;
          if (n != null && n.current) {
            if ((n == null ? void 0 : n.current) === s) {
              o.current = s;
              return;
            }
          } else if (i.contains(s)) {
            o.current = s;
            return;
          }
          n != null && n.current
            ? Nn(n.current)
            : nl(i, yn.First) === _f.Error &&
              console.warn(
                "There are no focusable elements inside the <FocusTrap />"
              ),
            (o.current = e == null ? void 0 : e.activeElement);
        });
    }, [r]),
    o
  );
}
function z0(
  { ownerDocument: e, container: t, containers: n, previousActiveElement: r },
  o
) {
  let l = xo();
  Af(
    e == null ? void 0 : e.defaultView,
    "focus",
    (i) => {
      if (!o || !l.current) return;
      let s = Hf(n);
      t.current instanceof HTMLElement && s.add(t.current);
      let a = r.current;
      if (!a) return;
      let u = i.target;
      u && u instanceof HTMLElement
        ? Qf(s, u)
          ? ((r.current = u), Nn(u))
          : (i.preventDefault(), i.stopPropagation(), Nn(a))
        : Nn(r.current);
    },
    !0
  );
}
function Qf(e, t) {
  for (let n of e) if (n.contains(t)) return !0;
  return !1;
}
let Bf = y.createContext(!1);
function I0() {
  return y.useContext(Bf);
}
function Os(e) {
  return H.createElement(Bf.Provider, { value: e.force }, e.children);
}
function A0(e) {
  let t = I0(),
    n = y.useContext(Vf),
    r = wo(e),
    [o, l] = y.useState(() => {
      if ((!t && n !== null) || Mt.isServer) return null;
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
      o !== null &&
        ((r != null && r.body.contains(o)) ||
          r == null ||
          r.body.appendChild(o));
    }, [o, r]),
    y.useEffect(() => {
      t || (n !== null && l(n.current));
    }, [n, l, t]),
    o
  );
}
let U0 = y.Fragment;
function H0(e, t) {
  let n = e,
    r = y.useRef(null),
    o = ht(
      b0((d) => {
        r.current = d;
      }),
      t
    ),
    l = wo(r),
    i = A0(r),
    [s] = y.useState(() => {
      var d;
      return Mt.isServer
        ? null
        : (d = l == null ? void 0 : l.createElement("div")) != null
        ? d
        : null;
    }),
    a = y.useContext(Ms),
    u = hr();
  return (
    nt(() => {
      !i ||
        !s ||
        i.contains(s) ||
        (s.setAttribute("data-headlessui-portal", ""), i.appendChild(s));
    }, [i, s]),
    nt(() => {
      if (s && a) return a.register(s);
    }, [a, s]),
    Uf(() => {
      var d;
      !i ||
        !s ||
        (s instanceof Node && i.contains(s) && i.removeChild(s),
        i.childNodes.length <= 0 &&
          ((d = i.parentElement) == null || d.removeChild(i)));
    }),
    u
      ? !i || !s
        ? null
        : Cf.createPortal(
            rt({
              ourProps: { ref: o },
              theirProps: n,
              defaultTag: U0,
              name: "Portal",
            }),
            s
          )
      : null
  );
}
let W0 = y.Fragment,
  Vf = y.createContext(null);
function Q0(e, t) {
  let { target: n, ...r } = e,
    o = { ref: ht(t) };
  return H.createElement(
    Vf.Provider,
    { value: n },
    rt({ ourProps: o, theirProps: r, defaultTag: W0, name: "Popover.Group" })
  );
}
let Ms = y.createContext(null);
function B0() {
  let e = y.useContext(Ms),
    t = y.useRef([]),
    n = ne((l) => (t.current.push(l), e && e.register(l), () => r(l))),
    r = ne((l) => {
      let i = t.current.indexOf(l);
      i !== -1 && t.current.splice(i, 1), e && e.unregister(l);
    }),
    o = y.useMemo(
      () => ({ register: n, unregister: r, portals: t }),
      [n, r, t]
    );
  return [
    t,
    y.useMemo(
      () =>
        function ({ children: l }) {
          return H.createElement(Ms.Provider, { value: o }, l);
        },
      [o]
    ),
  ];
}
let V0 = qe(H0),
  Y0 = qe(Q0),
  Ls = Object.assign(V0, { Group: Y0 });
function q0(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
const G0 = typeof Object.is == "function" ? Object.is : q0,
  { useState: K0, useEffect: X0, useLayoutEffect: J0, useDebugValue: Z0 } = qr;
function ey(e, t, n) {
  const r = t(),
    [{ inst: o }, l] = K0({ inst: { value: r, getSnapshot: t } });
  return (
    J0(() => {
      (o.value = r), (o.getSnapshot = t), Oi(o) && l({ inst: o });
    }, [e, r, t]),
    X0(
      () => (
        Oi(o) && l({ inst: o }),
        e(() => {
          Oi(o) && l({ inst: o });
        })
      ),
      [e]
    ),
    Z0(r),
    r
  );
}
function Oi(e) {
  const t = e.getSnapshot,
    n = e.value;
  try {
    const r = t();
    return !G0(n, r);
  } catch {
    return !0;
  }
}
function ty(e, t, n) {
  return t();
}
const ny =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  ry = !ny,
  oy = ry ? ty : ey,
  ly = "useSyncExternalStore" in qr ? ((e) => e.useSyncExternalStore)(qr) : oy;
function iy(e) {
  return ly(e.subscribe, e.getSnapshot, e.getSnapshot);
}
function sy(e, t) {
  let n = e(),
    r = new Set();
  return {
    getSnapshot() {
      return n;
    },
    subscribe(o) {
      return r.add(o), () => r.delete(o);
    },
    dispatch(o, ...l) {
      let i = t[o].call(n, ...l);
      i && ((n = i), r.forEach((s) => s()));
    },
  };
}
function ay() {
  let e;
  return {
    before({ doc: t }) {
      var n;
      let r = t.documentElement;
      e = ((n = t.defaultView) != null ? n : window).innerWidth - r.clientWidth;
    },
    after({ doc: t, d: n }) {
      let r = t.documentElement,
        o = r.clientWidth - r.offsetWidth,
        l = e - o;
      n.style(r, "paddingRight", `${l}px`);
    },
  };
}
function uy() {
  return $f()
    ? {
        before({ doc: e, d: t, meta: n }) {
          function r(o) {
            return n.containers.flatMap((l) => l()).some((l) => l.contains(o));
          }
          t.microTask(() => {
            var o;
            if (
              window.getComputedStyle(e.documentElement).scrollBehavior !==
              "auto"
            ) {
              let s = Dn();
              s.style(e.documentElement, "scrollBehavior", "auto"),
                t.add(() => t.microTask(() => s.dispose()));
            }
            let l = (o = window.scrollY) != null ? o : window.pageYOffset,
              i = null;
            t.addEventListener(
              e,
              "click",
              (s) => {
                if (s.target instanceof HTMLElement)
                  try {
                    let a = s.target.closest("a");
                    if (!a) return;
                    let { hash: u } = new URL(a.href),
                      d = e.querySelector(u);
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
                l !== a && window.scrollTo(0, l),
                  i &&
                    i.isConnected &&
                    (i.scrollIntoView({ block: "nearest" }), (i = null));
              });
          });
        },
      }
    : {};
}
function cy() {
  return {
    before({ doc: e, d: t }) {
      t.style(e.documentElement, "overflow", "hidden");
    },
  };
}
function dy(e) {
  let t = {};
  for (let n of e) Object.assign(t, n(t));
  return t;
}
let Sn = sy(() => new Map(), {
  PUSH(e, t) {
    var n;
    let r =
      (n = this.get(e)) != null
        ? n
        : { doc: e, count: 0, d: Dn(), meta: new Set() };
    return r.count++, r.meta.add(t), this.set(e, r), this;
  },
  POP(e, t) {
    let n = this.get(e);
    return n && (n.count--, n.meta.delete(t)), this;
  },
  SCROLL_PREVENT({ doc: e, d: t, meta: n }) {
    let r = { doc: e, d: t, meta: dy(n) },
      o = [uy(), ay(), cy()];
    o.forEach(({ before: l }) => (l == null ? void 0 : l(r))),
      o.forEach(({ after: l }) => (l == null ? void 0 : l(r)));
  },
  SCROLL_ALLOW({ d: e }) {
    e.dispose();
  },
  TEARDOWN({ doc: e }) {
    this.delete(e);
  },
});
Sn.subscribe(() => {
  let e = Sn.getSnapshot(),
    t = new Map();
  for (let [n] of e) t.set(n, n.documentElement.style.overflow);
  for (let n of e.values()) {
    let r = t.get(n.doc) === "hidden",
      o = n.count !== 0;
    ((o && !r) || (!o && r)) &&
      Sn.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n),
      n.count === 0 && Sn.dispatch("TEARDOWN", n);
  }
});
function fy(e, t, n) {
  let r = iy(Sn),
    o = e ? r.get(e) : void 0,
    l = o ? o.count > 0 : !1;
  return (
    nt(() => {
      if (!(!e || !t))
        return Sn.dispatch("PUSH", e, n), () => Sn.dispatch("POP", e, n);
    }, [t, e]),
    l
  );
}
let Mi = new Map(),
  Or = new Map();
function ac(e, t = !0) {
  nt(() => {
    var n;
    if (!t) return;
    let r = typeof e == "function" ? e() : e.current;
    if (!r) return;
    function o() {
      var i;
      if (!r) return;
      let s = (i = Or.get(r)) != null ? i : 1;
      if ((s === 1 ? Or.delete(r) : Or.set(r, s - 1), s !== 1)) return;
      let a = Mi.get(r);
      a &&
        (a["aria-hidden"] === null
          ? r.removeAttribute("aria-hidden")
          : r.setAttribute("aria-hidden", a["aria-hidden"]),
        (r.inert = a.inert),
        Mi.delete(r));
    }
    let l = (n = Or.get(r)) != null ? n : 0;
    return (
      Or.set(r, l + 1),
      l !== 0 ||
        (Mi.set(r, {
          "aria-hidden": r.getAttribute("aria-hidden"),
          inert: r.inert,
        }),
        r.setAttribute("aria-hidden", "true"),
        (r.inert = !0)),
      o
    );
  }, [e, t]);
}
function py({
  defaultContainers: e = [],
  portals: t,
  mainTreeNodeRef: n,
} = {}) {
  var r;
  let o = y.useRef((r = n == null ? void 0 : n.current) != null ? r : null),
    l = wo(o),
    i = ne(() => {
      var s, a, u;
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
        l == null ? void 0 : l.querySelectorAll("html > *, body > *")) != null
        ? s
        : [])
        p !== document.body &&
          p !== document.head &&
          p instanceof HTMLElement &&
          p.id !== "headlessui-portal-root" &&
          (p.contains(o.current) ||
            p.contains(
              (u = (a = o.current) == null ? void 0 : a.getRootNode()) == null
                ? void 0
                : u.host
            ) ||
            d.some((g) => p.contains(g)) ||
            d.push(p));
      return d;
    });
  return {
    resolveContainers: i,
    contains: ne((s) => i().some((a) => a.contains(s))),
    mainTreeNodeRef: o,
    MainTreeNode: y.useMemo(
      () =>
        function () {
          return n != null
            ? null
            : H.createElement(js, { features: Ol.Hidden, ref: o });
        },
      [o, n]
    ),
  };
}
let $a = y.createContext(() => {});
$a.displayName = "StackContext";
var _s = ((e) => ((e[(e.Add = 0)] = "Add"), (e[(e.Remove = 1)] = "Remove"), e))(
  _s || {}
);
function my() {
  return y.useContext($a);
}
function hy({ children: e, onUpdate: t, type: n, element: r, enabled: o }) {
  let l = my(),
    i = ne((...s) => {
      t == null || t(...s), l(...s);
    });
  return (
    nt(() => {
      let s = o === void 0 || o === !0;
      return (
        s && i(0, n, r),
        () => {
          s && i(1, n, r);
        }
      );
    }, [i, n, r, o]),
    H.createElement($a.Provider, { value: i }, e)
  );
}
let Yf = y.createContext(null);
function qf() {
  let e = y.useContext(Yf);
  if (e === null) {
    let t = new Error(
      "You used a <Description /> component, but it is not inside a relevant parent."
    );
    throw (Error.captureStackTrace && Error.captureStackTrace(t, qf), t);
  }
  return e;
}
function gy() {
  let [e, t] = y.useState([]);
  return [
    e.length > 0 ? e.join(" ") : void 0,
    y.useMemo(
      () =>
        function (n) {
          let r = ne(
              (l) => (
                t((i) => [...i, l]),
                () =>
                  t((i) => {
                    let s = i.slice(),
                      a = s.indexOf(l);
                    return a !== -1 && s.splice(a, 1), s;
                  })
              )
            ),
            o = y.useMemo(
              () => ({
                register: r,
                slot: n.slot,
                name: n.name,
                props: n.props,
              }),
              [r, n.slot, n.name, n.props]
            );
          return H.createElement(Yf.Provider, { value: o }, n.children);
        },
      [t]
    ),
  ];
}
let yy = "p";
function vy(e, t) {
  let n = gr(),
    { id: r = `headlessui-description-${n}`, ...o } = e,
    l = qf(),
    i = ht(t);
  nt(() => l.register(r), [r, l.register]);
  let s = { ref: i, ...l.props, id: r };
  return rt({
    ourProps: s,
    theirProps: o,
    slot: l.slot || {},
    defaultTag: yy,
    name: l.name || "Description",
  });
}
let wy = qe(vy),
  xy = Object.assign(wy, {});
var Sy = ((e) => (
    (e[(e.Open = 0)] = "Open"), (e[(e.Closed = 1)] = "Closed"), e
  ))(Sy || {}),
  ky = ((e) => ((e[(e.SetTitleId = 0)] = "SetTitleId"), e))(ky || {});
let by = {
    0(e, t) {
      return e.titleId === t.id ? e : { ...e, titleId: t.id };
    },
  },
  Ml = y.createContext(null);
Ml.displayName = "DialogContext";
function So(e) {
  let t = y.useContext(Ml);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw (Error.captureStackTrace && Error.captureStackTrace(n, So), n);
  }
  return t;
}
function Ey(e, t, n = () => [document.body]) {
  fy(e, t, (r) => {
    var o;
    return { containers: [...((o = r.containers) != null ? o : []), n] };
  });
}
function Ny(e, t) {
  return Ce(t.type, by, e, t);
}
let Cy = "div",
  Py = jl.RenderStrategy | jl.Static;
function Ty(e, t) {
  let n = gr(),
    {
      id: r = `headlessui-dialog-${n}`,
      open: o,
      onClose: l,
      initialFocus: i,
      role: s = "dialog",
      __demoMode: a = !1,
      ...u
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
  let x = Da();
  o === void 0 && x !== null && (o = (x & He.Open) === He.Open);
  let v = y.useRef(null),
    w = ht(v, t),
    b = wo(v),
    m = e.hasOwnProperty("open") || x !== null,
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
  if (typeof o != "boolean")
    throw new Error(
      `You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${o}`
    );
  if (typeof l != "function")
    throw new Error(
      `You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${l}`
    );
  let h = o ? 0 : 1,
    [k, N] = y.useReducer(Ny, {
      titleId: null,
      descriptionId: null,
      panelRef: y.createRef(),
    }),
    C = ne(() => l(!1)),
    T = ne((V) => N({ type: 0, id: V })),
    M = hr() ? (a ? !1 : h === 0) : !1,
    I = d > 1,
    _ = y.useContext(Ml) !== null,
    [re, z] = B0(),
    ye = {
      get current() {
        var V;
        return (V = k.panelRef.current) != null ? V : v.current;
      },
    },
    {
      resolveContainers: Se,
      mainTreeNodeRef: Te,
      MainTreeNode: _e,
    } = py({ portals: re, defaultContainers: [ye] }),
    pe = I ? "parent" : "leaf",
    j = x !== null ? (x & He.Closing) === He.Closing : !1,
    D = _ || j ? !1 : M,
    $ = y.useCallback(() => {
      var V, lt;
      return (lt = Array.from(
        (V = b == null ? void 0 : b.querySelectorAll("body > *")) != null
          ? V
          : []
      ).find((De) =>
        De.id === "headlessui-portal-root"
          ? !1
          : De.contains(Te.current) && De instanceof HTMLElement
      )) != null
        ? lt
        : null;
    }, [Te]);
  ac($, D);
  let R = I ? !0 : M,
    B = y.useCallback(() => {
      var V, lt;
      return (lt = Array.from(
        (V =
          b == null
            ? void 0
            : b.querySelectorAll("[data-headlessui-portal]")) != null
          ? V
          : []
      ).find((De) => De.contains(Te.current) && De instanceof HTMLElement)) !=
        null
        ? lt
        : null;
    }, [Te]);
  ac(B, R),
    k0(
      Se,
      (V) => {
        V.preventDefault(), C();
      },
      !(!M || I)
    );
  let ae = !(I || h !== 0);
  Af(b == null ? void 0 : b.defaultView, "keydown", (V) => {
    ae &&
      (V.defaultPrevented ||
        (V.key === If.Escape &&
          (V.preventDefault(), V.stopPropagation(), C())));
  }),
    Ey(b, !(j || h !== 0 || _), Se),
    y.useEffect(() => {
      if (h !== 0 || !v.current) return;
      let V = new ResizeObserver((lt) => {
        for (let De of lt) {
          let Fn = De.target.getBoundingClientRect();
          Fn.x === 0 && Fn.y === 0 && Fn.width === 0 && Fn.height === 0 && C();
        }
      });
      return V.observe(v.current), () => V.disconnect();
    }, [h, v, C]);
  let [ot, vt] = gy(),
    $n = y.useMemo(
      () => [{ dialogState: h, close: C, setTitleId: T }, k],
      [h, k, C, T]
    ),
    Rn = y.useMemo(() => ({ open: h === 0 }), [h]),
    ei = {
      ref: w,
      id: r,
      role: s,
      "aria-modal": h === 0 ? !0 : void 0,
      "aria-labelledby": k.titleId,
      "aria-describedby": ot,
    };
  return H.createElement(
    hy,
    {
      type: "Dialog",
      enabled: h === 0,
      element: v,
      onUpdate: ne((V, lt) => {
        lt === "Dialog" &&
          Ce(V, {
            [_s.Add]: () => p((De) => De + 1),
            [_s.Remove]: () => p((De) => De - 1),
          });
      }),
    },
    H.createElement(
      Os,
      { force: !0 },
      H.createElement(
        Ls,
        null,
        H.createElement(
          Ml.Provider,
          { value: $n },
          H.createElement(
            Ls.Group,
            { target: v },
            H.createElement(
              Os,
              { force: !1 },
              H.createElement(
                vt,
                { slot: Rn, name: "Dialog.Description" },
                H.createElement(
                  jr,
                  {
                    initialFocus: i,
                    containers: Se,
                    features: M
                      ? Ce(pe, {
                          parent: jr.features.RestoreFocus,
                          leaf: jr.features.All & ~jr.features.FocusLock,
                        })
                      : jr.features.None,
                  },
                  H.createElement(
                    z,
                    null,
                    rt({
                      ourProps: ei,
                      theirProps: u,
                      slot: Rn,
                      defaultTag: Cy,
                      features: Py,
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
    H.createElement(_e, null)
  );
}
let jy = "div";
function Oy(e, t) {
  let n = gr(),
    { id: r = `headlessui-dialog-overlay-${n}`, ...o } = e,
    [{ dialogState: l, close: i }] = So("Dialog.Overlay"),
    s = ht(t),
    a = ne((d) => {
      if (d.target === d.currentTarget) {
        if (j0(d.currentTarget)) return d.preventDefault();
        d.preventDefault(), d.stopPropagation(), i();
      }
    }),
    u = y.useMemo(() => ({ open: l === 0 }), [l]);
  return rt({
    ourProps: { ref: s, id: r, "aria-hidden": !0, onClick: a },
    theirProps: o,
    slot: u,
    defaultTag: jy,
    name: "Dialog.Overlay",
  });
}
let My = "div";
function Ly(e, t) {
  let n = gr(),
    { id: r = `headlessui-dialog-backdrop-${n}`, ...o } = e,
    [{ dialogState: l }, i] = So("Dialog.Backdrop"),
    s = ht(t);
  y.useEffect(() => {
    if (i.panelRef.current === null)
      throw new Error(
        "A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing."
      );
  }, [i.panelRef]);
  let a = y.useMemo(() => ({ open: l === 0 }), [l]);
  return H.createElement(
    Os,
    { force: !0 },
    H.createElement(
      Ls,
      null,
      rt({
        ourProps: { ref: s, id: r, "aria-hidden": !0 },
        theirProps: o,
        slot: a,
        defaultTag: My,
        name: "Dialog.Backdrop",
      })
    )
  );
}
let _y = "div";
function Dy(e, t) {
  let n = gr(),
    { id: r = `headlessui-dialog-panel-${n}`, ...o } = e,
    [{ dialogState: l }, i] = So("Dialog.Panel"),
    s = ht(t, i.panelRef),
    a = y.useMemo(() => ({ open: l === 0 }), [l]),
    u = ne((d) => {
      d.stopPropagation();
    });
  return rt({
    ourProps: { ref: s, id: r, onClick: u },
    theirProps: o,
    slot: a,
    defaultTag: _y,
    name: "Dialog.Panel",
  });
}
let $y = "h2";
function Ry(e, t) {
  let n = gr(),
    { id: r = `headlessui-dialog-title-${n}`, ...o } = e,
    [{ dialogState: l, setTitleId: i }] = So("Dialog.Title"),
    s = ht(t);
  y.useEffect(() => (i(r), () => i(null)), [r, i]);
  let a = y.useMemo(() => ({ open: l === 0 }), [l]);
  return rt({
    ourProps: { ref: s, id: r },
    theirProps: o,
    slot: a,
    defaultTag: $y,
    name: "Dialog.Title",
  });
}
let Fy = qe(Ty),
  zy = qe(Ly),
  Iy = qe(Dy),
  Ay = qe(Oy),
  Uy = qe(Ry),
  _t = Object.assign(Fy, {
    Backdrop: zy,
    Panel: Iy,
    Overlay: Ay,
    Title: Uy,
    Description: xy,
  });
function Hy(e = 0) {
  let [t, n] = y.useState(e),
    r = xo(),
    o = y.useCallback(
      (a) => {
        r.current && n((u) => u | a);
      },
      [t, r]
    ),
    l = y.useCallback((a) => !!(t & a), [t]),
    i = y.useCallback(
      (a) => {
        r.current && n((u) => u & ~a);
      },
      [n, r]
    ),
    s = y.useCallback(
      (a) => {
        r.current && n((u) => u ^ a);
      },
      [n]
    );
  return { flags: t, addFlag: o, hasFlag: l, removeFlag: i, toggleFlag: s };
}
function Wy(e) {
  let t = { called: !1 };
  return (...n) => {
    if (!t.called) return (t.called = !0), e(...n);
  };
}
function Li(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function _i(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
function Qy(e, t) {
  let n = Dn();
  if (!e) return n.dispose;
  let { transitionDuration: r, transitionDelay: o } = getComputedStyle(e),
    [l, i] = [r, o].map((a) => {
      let [u = 0] = a
        .split(",")
        .filter(Boolean)
        .map((d) => (d.includes("ms") ? parseFloat(d) : parseFloat(d) * 1e3))
        .sort((d, p) => p - d);
      return u;
    }),
    s = l + i;
  if (s !== 0) {
    n.group((u) => {
      u.setTimeout(() => {
        t(), u.dispose();
      }, s),
        u.addEventListener(e, "transitionrun", (d) => {
          d.target === d.currentTarget && u.dispose();
        });
    });
    let a = n.addEventListener(e, "transitionend", (u) => {
      u.target === u.currentTarget && (t(), a());
    });
  } else t();
  return n.add(() => t()), n.dispose;
}
function By(e, t, n, r) {
  let o = n ? "enter" : "leave",
    l = Dn(),
    i = r !== void 0 ? Wy(r) : () => {};
  o === "enter" && (e.removeAttribute("hidden"), (e.style.display = ""));
  let s = Ce(o, { enter: () => t.enter, leave: () => t.leave }),
    a = Ce(o, { enter: () => t.enterTo, leave: () => t.leaveTo }),
    u = Ce(o, { enter: () => t.enterFrom, leave: () => t.leaveFrom });
  return (
    _i(
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
    Li(e, ...t.base, ...s, ...u),
    l.nextFrame(() => {
      _i(e, ...t.base, ...s, ...u),
        Li(e, ...t.base, ...s, ...a),
        Qy(
          e,
          () => (_i(e, ...t.base, ...s), Li(e, ...t.base, ...t.entered), i())
        );
    }),
    l.dispose
  );
}
function Vy({
  immediate: e,
  container: t,
  direction: n,
  classes: r,
  onStart: o,
  onStop: l,
}) {
  let i = xo(),
    s = Ma(),
    a = Lt(n);
  nt(() => {
    e && (a.current = "enter");
  }, [e]),
    nt(() => {
      let u = Dn();
      s.add(u.dispose);
      let d = t.current;
      if (d && a.current !== "idle" && i.current)
        return (
          u.dispose(),
          o.current(a.current),
          u.add(
            By(d, r.current, a.current === "enter", () => {
              u.dispose(), l.current(a.current);
            })
          ),
          u.dispose
        );
    }, [n]);
}
function Ht(e = "") {
  return e.split(/\s+/).filter((t) => t.length > 1);
}
let Xl = y.createContext(null);
Xl.displayName = "TransitionContext";
var Yy = ((e) => ((e.Visible = "visible"), (e.Hidden = "hidden"), e))(Yy || {});
function qy() {
  let e = y.useContext(Xl);
  if (e === null)
    throw new Error(
      "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />."
    );
  return e;
}
function Gy() {
  let e = y.useContext(Jl);
  if (e === null)
    throw new Error(
      "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />."
    );
  return e;
}
let Jl = y.createContext(null);
Jl.displayName = "NestingContext";
function Zl(e) {
  return "children" in e
    ? Zl(e.children)
    : e.current
        .filter(({ el: t }) => t.current !== null)
        .filter(({ state: t }) => t === "visible").length > 0;
}
function Gf(e, t) {
  let n = Lt(e),
    r = y.useRef([]),
    o = xo(),
    l = Ma(),
    i = ne((x, v = Zt.Hidden) => {
      let w = r.current.findIndex(({ el: b }) => b === x);
      w !== -1 &&
        (Ce(v, {
          [Zt.Unmount]() {
            r.current.splice(w, 1);
          },
          [Zt.Hidden]() {
            r.current[w].state = "hidden";
          },
        }),
        l.microTask(() => {
          var b;
          !Zl(r) && o.current && ((b = n.current) == null || b.call(n));
        }));
    }),
    s = ne((x) => {
      let v = r.current.find(({ el: w }) => w === x);
      return (
        v
          ? v.state !== "visible" && (v.state = "visible")
          : r.current.push({ el: x, state: "visible" }),
        () => i(x, Zt.Unmount)
      );
    }),
    a = y.useRef([]),
    u = y.useRef(Promise.resolve()),
    d = y.useRef({ enter: [], leave: [], idle: [] }),
    p = ne((x, v, w) => {
      a.current.splice(0),
        t &&
          (t.chains.current[v] = t.chains.current[v].filter(([b]) => b !== x)),
        t == null ||
          t.chains.current[v].push([
            x,
            new Promise((b) => {
              a.current.push(b);
            }),
          ]),
        t == null ||
          t.chains.current[v].push([
            x,
            new Promise((b) => {
              Promise.all(d.current[v].map(([m, f]) => f)).then(() => b());
            }),
          ]),
        v === "enter"
          ? (u.current = u.current
              .then(() => (t == null ? void 0 : t.wait.current))
              .then(() => w(v)))
          : w(v);
    }),
    g = ne((x, v, w) => {
      Promise.all(d.current[v].splice(0).map(([b, m]) => m))
        .then(() => {
          var b;
          (b = a.current.shift()) == null || b();
        })
        .then(() => w(v));
    });
  return y.useMemo(
    () => ({
      children: r,
      register: s,
      unregister: i,
      onStart: p,
      onStop: g,
      wait: u,
      chains: d,
    }),
    [s, i, r, p, g, d, u]
  );
}
function Ky() {}
let Xy = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function uc(e) {
  var t;
  let n = {};
  for (let r of Xy) n[r] = (t = e[r]) != null ? t : Ky;
  return n;
}
function Jy(e) {
  let t = y.useRef(uc(e));
  return (
    y.useEffect(() => {
      t.current = uc(e);
    }, [e]),
    t
  );
}
let Zy = "div",
  Kf = jl.RenderStrategy;
function ev(e, t) {
  var n, r;
  let {
      beforeEnter: o,
      afterEnter: l,
      beforeLeave: i,
      afterLeave: s,
      enter: a,
      enterFrom: u,
      enterTo: d,
      entered: p,
      leave: g,
      leaveFrom: x,
      leaveTo: v,
      ...w
    } = e,
    b = y.useRef(null),
    m = ht(b, t),
    f = (n = w.unmount) == null || n ? Zt.Unmount : Zt.Hidden,
    { show: h, appear: k, initial: N } = qy(),
    [C, T] = y.useState(h ? "visible" : "hidden"),
    M = Gy(),
    { register: I, unregister: _ } = M;
  y.useEffect(() => I(b), [I, b]),
    y.useEffect(() => {
      if (f === Zt.Hidden && b.current) {
        if (h && C !== "visible") {
          T("visible");
          return;
        }
        return Ce(C, { hidden: () => _(b), visible: () => I(b) });
      }
    }, [C, b, I, _, h, f]);
  let re = Lt({
      base: Ht(w.className),
      enter: Ht(a),
      enterFrom: Ht(u),
      enterTo: Ht(d),
      entered: Ht(p),
      leave: Ht(g),
      leaveFrom: Ht(x),
      leaveTo: Ht(v),
    }),
    z = Jy({ beforeEnter: o, afterEnter: l, beforeLeave: i, afterLeave: s }),
    ye = hr();
  y.useEffect(() => {
    if (ye && C === "visible" && b.current === null)
      throw new Error(
        "Did you forget to passthrough the `ref` to the actual DOM node?"
      );
  }, [b, C, ye]);
  let Se = N && !k,
    Te = k && h && N,
    _e = !ye || Se ? "idle" : h ? "enter" : "leave",
    pe = Hy(0),
    j = ne((ae) =>
      Ce(ae, {
        enter: () => {
          pe.addFlag(He.Opening), z.current.beforeEnter();
        },
        leave: () => {
          pe.addFlag(He.Closing), z.current.beforeLeave();
        },
        idle: () => {},
      })
    ),
    D = ne((ae) =>
      Ce(ae, {
        enter: () => {
          pe.removeFlag(He.Opening), z.current.afterEnter();
        },
        leave: () => {
          pe.removeFlag(He.Closing), z.current.afterLeave();
        },
        idle: () => {},
      })
    ),
    $ = Gf(() => {
      T("hidden"), _(b);
    }, M),
    R = y.useRef(!1);
  Vy({
    immediate: Te,
    container: b,
    classes: re,
    direction: _e,
    onStart: Lt((ae) => {
      (R.current = !0), $.onStart(b, ae, j);
    }),
    onStop: Lt((ae) => {
      (R.current = !1),
        $.onStop(b, ae, D),
        ae === "leave" && !Zl($) && (T("hidden"), _(b));
    }),
  });
  let B = w,
    yt = { ref: m };
  return (
    Te
      ? (B = {
          ...B,
          className: Tl(
            w.className,
            ...re.current.enter,
            ...re.current.enterFrom
          ),
        })
      : R.current &&
        ((B.className = Tl(
          w.className,
          (r = b.current) == null ? void 0 : r.className
        )),
        B.className === "" && delete B.className),
    H.createElement(
      Jl.Provider,
      { value: $ },
      H.createElement(
        P0,
        { value: Ce(C, { visible: He.Open, hidden: He.Closed }) | pe.flags },
        rt({
          ourProps: yt,
          theirProps: B,
          defaultTag: Zy,
          features: Kf,
          visible: C === "visible",
          name: "Transition.Child",
        })
      )
    )
  );
}
function tv(e, t) {
  let { show: n, appear: r = !1, unmount: o = !0, ...l } = e,
    i = y.useRef(null),
    s = ht(i, t);
  hr();
  let a = Da();
  if (
    (n === void 0 && a !== null && (n = (a & He.Open) === He.Open),
    ![!0, !1].includes(n))
  )
    throw new Error(
      "A <Transition /> is used but it is missing a `show={true | false}` prop."
    );
  let [u, d] = y.useState(n ? "visible" : "hidden"),
    p = Gf(() => {
      d("hidden");
    }),
    [g, x] = y.useState(!0),
    v = y.useRef([n]);
  nt(() => {
    g !== !1 &&
      v.current[v.current.length - 1] !== n &&
      (v.current.push(n), x(!1));
  }, [v, n]);
  let w = y.useMemo(() => ({ show: n, appear: r, initial: g }), [n, r, g]);
  y.useEffect(() => {
    if (n) d("visible");
    else if (!Zl(p)) d("hidden");
    else {
      let h = i.current;
      if (!h) return;
      let k = h.getBoundingClientRect();
      k.x === 0 && k.y === 0 && k.width === 0 && k.height === 0 && d("hidden");
    }
  }, [n, p]);
  let b = { unmount: o },
    m = ne(() => {
      var h;
      g && x(!1), (h = e.beforeEnter) == null || h.call(e);
    }),
    f = ne(() => {
      var h;
      g && x(!1), (h = e.beforeLeave) == null || h.call(e);
    });
  return H.createElement(
    Jl.Provider,
    { value: p },
    H.createElement(
      Xl.Provider,
      { value: w },
      rt({
        ourProps: {
          ...b,
          as: y.Fragment,
          children: H.createElement(Xf, {
            ref: s,
            ...b,
            ...l,
            beforeEnter: m,
            beforeLeave: f,
          }),
        },
        theirProps: {},
        defaultTag: y.Fragment,
        features: Kf,
        visible: u === "visible",
        name: "Transition",
      })
    )
  );
}
function nv(e, t) {
  let n = y.useContext(Xl) !== null,
    r = Da() !== null;
  return H.createElement(
    H.Fragment,
    null,
    !n && r
      ? H.createElement(Ds, { ref: t, ...e })
      : H.createElement(Xf, { ref: t, ...e })
  );
}
let Ds = qe(tv),
  Xf = qe(ev),
  rv = qe(nv),
  Dt = Object.assign(Ds, { Child: rv, Root: Ds }),
  kn = null;
const ov = async () => {
    if (kn) return kn;
    try {
      const e = await fetch("../config.txt");
      if (!e.ok) throw new Error("Failed to load configuration");
      return (kn = await e.json()), kn;
    } catch (e) {
      throw (console.error("Error loading config:", e), e);
    }
  },
  Jf = (e) => {
    if (!kn) throw new Error("Configuration not loaded");
    return `${kn.domain}${e}`;
  },
  lv = () => kn,
  Yt = async (e, t = {}) => {
    const n = Jf(e),
      r = t.method || "GET";
    console.group(`🌐 API Request: ${e}`),
      console.log(`URL: ${n}`),
      console.log(`Method: ${r}`),
      t.body && console.log("Request Payload:", t.body);
    try {
      const o = await fetch(n, {
          method: r,
          headers: { "Content-Type": "application/json" },
          body: t.body ? JSON.stringify(t.body) : void 0,
        }),
        l = await o.text();
      let i;
      try {
        i = JSON.parse(l);
      } catch (s) {
        throw (
          (console.error("Failed to parse response as JSON:", s),
          new Error("Invalid JSON response"))
        );
      }
      if ((console.log("Response:", i), console.groupEnd(), !o.ok))
        throw new Error(`HTTP error! status: ${o.status}`);
      return i;
    } catch (o) {
      throw (console.error("API Error:", o), console.groupEnd(), o);
    }
  },
  iv = {
    zh: {
      "app.title": "申領核撥",
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
      "app.orders.title": "歷史清單",
      "app.orders.empty": "無撥補單資料",
      "app.orders.loading": "載入中...",
      "app.toast.success": "撥補單建立成功",
      "filter.status": "顯示狀態",
      "filter.status.pending": "未核撥",
      "filter.status.completed": "已核撥",
      "filter.status.all": "全部",
      "filter.actionType.general": "一般申領",
      "filter.actionType.urgent": "緊急申領",
      "table.source": "來源",
      "table.destination": "目的",
      "table.drugCode": "藥碼",
      "table.drugName": "藥名",
      "table.issuedQty": "撥發量",
      "table.actualQty": "實撥量",
      "table.createdTime": "操作時間",
      "table.operator": "操作者",
      "table.status": "狀態",
      "table.requestingUnit": "申領單位",
      "table.actionType": "申領類別",
      "table.requestedQty": "申領量",
      "table.requestingPerson": "申領人",
      "table.issuingPerson": "核撥人",
      "table.requestTime": "申領時間",
      "table.issueTime": "核撥時間",
      "table.receiptTime": "簽收時間",
      "table.receiptStaff": "簽收人員",
      "table.issuingUnit": "核撥單位",
      "time.type": "時間類型",
      "time.operation": "操作時間",
      "time.start": "開始日期時間",
      "time.end": "結束日期時間",
      "login.title": "申領核撥系統",
      "login.username": "帳號",
      "login.password": "密碼",
      "login.button": "登入",
      "login.processing": "登入中...",
      "button.logout": "登出",
      "button.home": "回到首頁",
      "button.export": "匯出",
      "button.bulkApprove": "全部核撥",
      "button.approve": "核撥",
      "button.urgentApprove": "緊急核撥",
      "button.confirm": "確認",
      "button.cancel": "取消",
      "button.clear": "清除",
      "button.processing": "處理中...",
      "button.lightOn": "亮燈",
      "search.drugName": "藥名",
      "search.drugCode": "藥碼",
      "search.requestingUnit": "申領單位",
      "search.actionType": "申領類別",
      "search.placeholder": "請輸入搜尋關鍵字",
      "modal.actualQuantity": "實際撥發量",
      "modal.enterActualQuantity": "輸入實際撥發量",
      "modal.pleaseEnterActualQuantity": "請輸入實撥量",
      "modal.urgentPleaseEnterActualQuantity": "緊急！請輸入實撥量",
      "modal.adjustActualQty": "修改實撥量",
      "platform.title": "智慧醫療管理系統",
      "footer.copyright": "Copyright ©2025 鴻森智能科技",
    },
    en: {
      "app.title": "Material Requisition",
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
      "app.button.lightOn": "Light On",
      "app.orders.title": "Historical Orders",
      "app.orders.empty": "No orders found",
      "app.orders.loading": "Loading...",
      "app.toast.success": "Distribution order created successfully",
      "filter.status": "Status Filter",
      "filter.status.pending": "Pending",
      "filter.status.completed": "Completed",
      "filter.status.all": "All",
      "filter.actionType.general": "General Request",
      "filter.actionType.urgent": "Urgent Request",
      "table.source": "Source",
      "table.destination": "Destination",
      "table.drugCode": "Drug Code",
      "table.drugName": "Drug Name",
      "table.issuedQty": "Issued Qty",
      "table.actualQty": "Actual Qty",
      "table.createdTime": "Created Time",
      "table.operator": "Operator",
      "table.status": "Status",
      "table.requestingUnit": "Requesting Unit",
      "table.actionType": "Request Type",
      "table.requestedQty": "Requested Qty",
      "table.requestingPerson": "Requester",
      "table.issuingPerson": "Issuer",
      "table.requestTime": "Request Time",
      "table.issueTime": "Issue Time",
      "table.receiptTime": "Receipt Time",
      "table.receiptStaff": "Receipt Staff",
      "table.issuingUnit": "Issuing Unit",
      "time.type": "Time Type",
      "time.operation": "Operation Time",
      "time.start": "Start Date Time",
      "time.end": "End Date Time",
      "login.title": "Material Requisition System",
      "login.username": "Username",
      "login.password": "Password",
      "login.button": "Login",
      "login.processing": "Logging in...",
      "button.logout": "Logout",
      "button.home": "Home",
      "button.export": "Export",
      "button.bulkApprove": "Approve All",
      "button.approve": "Approve",
      "button.urgentApprove": "Urgent Approve",
      "button.confirm": "Confirm",
      "button.cancel": "Cancel",
      "button.clear": "Clear",
      "button.processing": "Processing...",
      "button.lightOn": "Light On",
      "search.drugName": "Drug Name",
      "search.drugCode": "Drug Code",
      "search.requestingUnit": "Requesting Unit",
      "search.actionType": "Request Type",
      "search.placeholder": "Enter search keywords",
      "modal.actualQuantity": "Actual Quantity",
      "modal.enterActualQuantity": "Enter Actual Quantity",
      "modal.pleaseEnterActualQuantity": "Please enter actual quantity",
      "modal.urgentPleaseEnterActualQuantity":
        "Urgent! Please enter actual quantity",
      "modal.adjustActualQty": "Adjust actual quantity",
      "platform.title": "Intelligent medical management system",
      "footer.copyright": "Copyright ©2025 Hongsen Smart Technology",
    },
  },
  Zf = y.createContext(void 0),
  sv = ({ children: e }) => {
    const [t, n] = y.useState("zh"),
      r = () => {
        n((l) => (l === "zh" ? "en" : "zh"));
      },
      o = (l) => iv[t][l] || l;
    return c.jsx(Zf.Provider, {
      value: { language: t, toggleLanguage: r, t: o },
      children: e,
    });
  },
  gt = () => {
    const e = y.useContext(Zf);
    if (e === void 0)
      throw new Error("useLanguage must be used within a LanguageProvider");
    return e;
  },
  av = ({ startDate: e, endDate: t, onDateChange: n }) => {
    const { t: r } = gt(),
      [o, l] = y.useState(!1),
      i = (a, u, d, p) => {
        const g = new Date(`${a}T${u}`),
          x = new Date(`${d}T${p}`);
        n(g, x);
      },
      s = () => {
        l(!o);
      };
    return c.jsxs("div", {
      className: "bg-white rounded-lg border border-gray-200 shadow-sm",
      children: [
        c.jsxs("div", {
          className:
            "w-full flex items-center justify-between px-4 py-2 hover:bg-gray-50 transition-colors duration-200 rounded-lg",
          onClick: s,
          children: [
            c.jsxs("div", {
              className: "flex items-center gap-3",
              children: [
                c.jsx(t0, { size: 20, className: "text-gray-600" }),
                c.jsx("h3", {
                  className: "text-lg font-medium text-gray-900",
                  children: "時間區間 / Time Range",
                }),
              ],
            }),
            c.jsx("div", {
              className: "flex items-center gap-2",
              children: c.jsx("button", {
                className:
                  "p-1 rounded-full hover:bg-gray-100 transition-colors duration-150",
                children: o
                  ? c.jsx(e0, { size: 20, className: "text-gray-600" })
                  : c.jsx(Zg, { size: 20, className: "text-gray-600" }),
              }),
            }),
          ],
        }),
        c.jsx("div", {
          className: `overflow-hidden transition-all duration-300 ease-in-out ${
            o ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`,
          children: c.jsx("div", {
            className: "px-4 pb-4 border-t border-gray-100",
            children: c.jsxs("div", {
              className:
                "pt-4 space-y-6 lg:space-y-0 lg:flex lg:items-start lg:gap-6",
              children: [
                c.jsxs("div", {
                  className: "lg:w-[200px]",
                  children: [
                    c.jsx("label", {
                      className:
                        "block text-base font-medium text-gray-700 mb-2",
                      children: r("time.type"),
                    }),
                    c.jsx("select", {
                      defaultValue: "操作時間",
                      className:
                        "w-full border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-base",
                      children: c.jsx("option", {
                        value: "操作時間",
                        children: r("time.operation"),
                      }),
                    }),
                  ],
                }),
                c.jsxs("div", {
                  className: "flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6",
                  children: [
                    c.jsxs("div", {
                      className: "space-y-2",
                      children: [
                        c.jsx("label", {
                          className:
                            "block text-base font-medium text-gray-700",
                          children: r("time.start"),
                        }),
                        c.jsxs("div", {
                          className: "flex flex-col sm:flex-row gap-3",
                          children: [
                            c.jsx("input", {
                              type: "date",
                              value: G(e, "yyyy-MM-dd"),
                              onChange: (a) =>
                                i(
                                  a.target.value,
                                  G(e, "HH:mm:ss"),
                                  G(t, "yyyy-MM-dd"),
                                  G(t, "HH:mm:ss")
                                ),
                              className:
                                "w-full sm:w-[180px] border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-base",
                            }),
                            c.jsx("input", {
                              type: "time",
                              value: G(e, "HH:mm:ss"),
                              onChange: (a) =>
                                i(
                                  G(e, "yyyy-MM-dd"),
                                  a.target.value,
                                  G(t, "yyyy-MM-dd"),
                                  G(t, "HH:mm:ss")
                                ),
                              className:
                                "w-full sm:w-[180px] border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-base",
                              step: "1",
                            }),
                          ],
                        }),
                      ],
                    }),
                    c.jsxs("div", {
                      className: "space-y-2",
                      children: [
                        c.jsx("label", {
                          className:
                            "block text-base font-medium text-gray-700",
                          children: r("time.end"),
                        }),
                        c.jsxs("div", {
                          className: "flex flex-col sm:flex-row gap-3",
                          children: [
                            c.jsx("input", {
                              type: "date",
                              value: G(t, "yyyy-MM-dd"),
                              onChange: (a) =>
                                i(
                                  G(e, "yyyy-MM-dd"),
                                  G(e, "HH:mm:ss"),
                                  a.target.value,
                                  G(t, "HH:mm:ss")
                                ),
                              className:
                                "w-full sm:w-[180px] border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-base",
                            }),
                            c.jsx("input", {
                              type: "time",
                              value: G(t, "HH:mm:ss"),
                              onChange: (a) =>
                                i(
                                  G(e, "yyyy-MM-dd"),
                                  G(e, "HH:mm:ss"),
                                  G(t, "yyyy-MM-dd"),
                                  a.target.value
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
            }),
          }),
        }),
      ],
    });
  },
  uv = ({ value: e, onChange: t }) => {
    const { t: n } = gt();
    return c.jsxs("div", {
      className: "space-y-2",
      children: [
        c.jsx("label", {
          className: "block text-base font-medium text-gray-700",
          children: n("filter.status"),
        }),
        c.jsxs("div", {
          className: "flex gap-6",
          children: [
            c.jsxs("label", {
              className: "inline-flex items-center",
              children: [
                c.jsx("input", {
                  type: "radio",
                  value: "等待過帳",
                  checked: e === "等待過帳",
                  onChange: (r) => t(r.target.value),
                  className:
                    "w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500",
                }),
                c.jsx("span", {
                  className: "ml-2 text-base text-gray-900",
                  children: n("filter.status.pending"),
                }),
              ],
            }),
            c.jsxs("label", {
              className: "inline-flex items-center",
              children: [
                c.jsx("input", {
                  type: "radio",
                  value: "已過帳",
                  checked: e === "已過帳",
                  onChange: (r) => t(r.target.value),
                  className:
                    "w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500",
                }),
                c.jsx("span", {
                  className: "ml-2 text-base text-gray-900",
                  children: n("filter.status.completed"),
                }),
              ],
            }),
            c.jsxs("label", {
              className: "inline-flex items-center",
              children: [
                c.jsx("input", {
                  type: "radio",
                  value: "全部",
                  checked: e === "全部",
                  onChange: (r) => t(r.target.value),
                  className:
                    "w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500",
                }),
                c.jsx("span", {
                  className: "ml-2 text-base text-gray-900",
                  children: n("filter.status.all"),
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  Ra = "user_session",
  ep = (e) => {
    const t = e.find((n) => n.name === "撥補核撥");
    return (t == null ? void 0 : t.state) === !0;
  },
  cv = (e) =>
    ep(e.Permissions)
      ? (sessionStorage.setItem(Ra, JSON.stringify(e)), !0)
      : !1,
  Yr = () => {
    const e = sessionStorage.getItem(Ra);
    if (!e) return null;
    try {
      const t = JSON.parse(e);
      return !t.GUID || !t.ID || !t.Name || !ep(t.Permissions)
        ? (Ll(), null)
        : t;
    } catch {
      return Ll(), null;
    }
  },
  Ll = () => {
    sessionStorage.removeItem(Ra);
  },
  dv = () => {
    const e = Yr();
    if (!e) return !1;
    const t = new Date(e.loginTime).getTime();
    return (new Date().getTime() - t) / (1e3 * 60 * 60) > 24 ? (Ll(), !1) : !0;
  },
  fv = ({ size: e = "medium", className: t = "" }) => {
    const n = { small: "h-4 w-4", medium: "h-6 w-6", large: "h-8 w-8" };
    return c.jsx("div", {
      className: `animate-spin rounded-full border-2 border-white border-t-transparent ${n[e]} ${t}`,
    });
  },
  pv = ({
    onClick: e,
    isLoading: t = !1,
    disabled: n = !1,
    className: r = "",
  }) => {
    const { t: o } = gt();
    return c.jsxs("button", {
      onClick: e,
      disabled: t || n,
      className: `px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 disabled:opacity-50 transition-colors flex items-center justify-center ${r}`,
      children: [
        t
          ? c.jsx(fv, { size: "small\\", className: "mr-2" })
          : c.jsx(n0, { size: 18, className: "mr-2" }),
        o("button.export"),
      ],
    });
  };
function tp(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = tp(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function mv() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = tp(e)) && (r && (r += " "), (r += t));
  return r;
}
const Fa = "-",
  hv = (e) => {
    const t = yv(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (i) => {
        const s = i.split(Fa);
        return s[0] === "" && s.length !== 1 && s.shift(), np(s, t) || gv(i);
      },
      getConflictingClassGroupIds: (i, s) => {
        const a = n[i] || [];
        return s && r[i] ? [...a, ...r[i]] : a;
      },
    };
  },
  np = (e, t) => {
    var i;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
      r = t.nextPart.get(n),
      o = r ? np(e.slice(1), r) : void 0;
    if (o) return o;
    if (t.validators.length === 0) return;
    const l = e.join(Fa);
    return (i = t.validators.find(({ validator: s }) => s(l))) == null
      ? void 0
      : i.classGroupId;
  },
  cc = /^\[(.+)\]$/,
  gv = (e) => {
    if (cc.test(e)) {
      const t = cc.exec(e)[1],
        n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (n) return "arbitrary.." + n;
    }
  },
  yv = (e) => {
    const { theme: t, prefix: n } = e,
      r = { nextPart: new Map(), validators: [] };
    return (
      wv(Object.entries(e.classGroups), n).forEach(([l, i]) => {
        $s(i, r, l, t);
      }),
      r
    );
  },
  $s = (e, t, n, r) => {
    e.forEach((o) => {
      if (typeof o == "string") {
        const l = o === "" ? t : dc(t, o);
        l.classGroupId = n;
        return;
      }
      if (typeof o == "function") {
        if (vv(o)) {
          $s(o(r), t, n, r);
          return;
        }
        t.validators.push({ validator: o, classGroupId: n });
        return;
      }
      Object.entries(o).forEach(([l, i]) => {
        $s(i, dc(t, l), n, r);
      });
    });
  },
  dc = (e, t) => {
    let n = e;
    return (
      t.split(Fa).forEach((r) => {
        n.nextPart.has(r) ||
          n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
          (n = n.nextPart.get(r));
      }),
      n
    );
  },
  vv = (e) => e.isThemeGetter,
  wv = (e, t) =>
    t
      ? e.map(([n, r]) => {
          const o = r.map((l) =>
            typeof l == "string"
              ? t + l
              : typeof l == "object"
              ? Object.fromEntries(
                  Object.entries(l).map(([i, s]) => [t + i, s])
                )
              : l
          );
          return [n, o];
        })
      : e,
  xv = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      n = new Map(),
      r = new Map();
    const o = (l, i) => {
      n.set(l, i), t++, t > e && ((t = 0), (r = n), (n = new Map()));
    };
    return {
      get(l) {
        let i = n.get(l);
        if (i !== void 0) return i;
        if ((i = r.get(l)) !== void 0) return o(l, i), i;
      },
      set(l, i) {
        n.has(l) ? n.set(l, i) : o(l, i);
      },
    };
  },
  rp = "!",
  Sv = (e) => {
    const { separator: t, experimentalParseClassName: n } = e,
      r = t.length === 1,
      o = t[0],
      l = t.length,
      i = (s) => {
        const a = [];
        let u = 0,
          d = 0,
          p;
        for (let b = 0; b < s.length; b++) {
          let m = s[b];
          if (u === 0) {
            if (m === o && (r || s.slice(b, b + l) === t)) {
              a.push(s.slice(d, b)), (d = b + l);
              continue;
            }
            if (m === "/") {
              p = b;
              continue;
            }
          }
          m === "[" ? u++ : m === "]" && u--;
        }
        const g = a.length === 0 ? s : s.substring(d),
          x = g.startsWith(rp),
          v = x ? g.substring(1) : g,
          w = p && p > d ? p - d : void 0;
        return {
          modifiers: a,
          hasImportantModifier: x,
          baseClassName: v,
          maybePostfixModifierPosition: w,
        };
      };
    return n ? (s) => n({ className: s, parseClassName: i }) : i;
  },
  kv = (e) => {
    if (e.length <= 1) return e;
    const t = [];
    let n = [];
    return (
      e.forEach((r) => {
        r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
      }),
      t.push(...n.sort()),
      t
    );
  },
  bv = (e) => ({ cache: xv(e.cacheSize), parseClassName: Sv(e), ...hv(e) }),
  Ev = /\s+/,
  Nv = (e, t) => {
    const {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: o,
      } = t,
      l = [],
      i = e.trim().split(Ev);
    let s = "";
    for (let a = i.length - 1; a >= 0; a -= 1) {
      const u = i[a],
        {
          modifiers: d,
          hasImportantModifier: p,
          baseClassName: g,
          maybePostfixModifierPosition: x,
        } = n(u);
      let v = !!x,
        w = r(v ? g.substring(0, x) : g);
      if (!w) {
        if (!v) {
          s = u + (s.length > 0 ? " " + s : s);
          continue;
        }
        if (((w = r(g)), !w)) {
          s = u + (s.length > 0 ? " " + s : s);
          continue;
        }
        v = !1;
      }
      const b = kv(d).join(":"),
        m = p ? b + rp : b,
        f = m + w;
      if (l.includes(f)) continue;
      l.push(f);
      const h = o(w, v);
      for (let k = 0; k < h.length; ++k) {
        const N = h[k];
        l.push(m + N);
      }
      s = u + (s.length > 0 ? " " + s : s);
    }
    return s;
  };
function Cv() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = op(t)) && (r && (r += " "), (r += n));
  return r;
}
const op = (e) => {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = op(e[r])) && (n && (n += " "), (n += t));
  return n;
};
function Pv(e, ...t) {
  let n,
    r,
    o,
    l = i;
  function i(a) {
    const u = t.reduce((d, p) => p(d), e());
    return (n = bv(u)), (r = n.cache.get), (o = n.cache.set), (l = s), s(a);
  }
  function s(a) {
    const u = r(a);
    if (u) return u;
    const d = Nv(a, n);
    return o(a, d), d;
  }
  return function () {
    return l(Cv.apply(null, arguments));
  };
}
const J = (e) => {
    const t = (n) => n[e] || [];
    return (t.isThemeGetter = !0), t;
  },
  lp = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  Tv = /^\d+\/\d+$/,
  jv = new Set(["px", "full", "screen"]),
  Ov = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Mv =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Lv = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  _v = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  Dv =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Nt = (e) => or(e) || jv.has(e) || Tv.test(e),
  Wt = (e) => yr(e, "length", Hv),
  or = (e) => !!e && !Number.isNaN(Number(e)),
  Di = (e) => yr(e, "number", or),
  Mr = (e) => !!e && Number.isInteger(Number(e)),
  $v = (e) => e.endsWith("%") && or(e.slice(0, -1)),
  F = (e) => lp.test(e),
  Qt = (e) => Ov.test(e),
  Rv = new Set(["length", "size", "percentage"]),
  Fv = (e) => yr(e, Rv, ip),
  zv = (e) => yr(e, "position", ip),
  Iv = new Set(["image", "url"]),
  Av = (e) => yr(e, Iv, Qv),
  Uv = (e) => yr(e, "", Wv),
  Lr = () => !0,
  yr = (e, t, n) => {
    const r = lp.exec(e);
    return r
      ? r[1]
        ? typeof t == "string"
          ? r[1] === t
          : t.has(r[1])
        : n(r[2])
      : !1;
  },
  Hv = (e) => Mv.test(e) && !Lv.test(e),
  ip = () => !1,
  Wv = (e) => _v.test(e),
  Qv = (e) => Dv.test(e),
  Bv = () => {
    const e = J("colors"),
      t = J("spacing"),
      n = J("blur"),
      r = J("brightness"),
      o = J("borderColor"),
      l = J("borderRadius"),
      i = J("borderSpacing"),
      s = J("borderWidth"),
      a = J("contrast"),
      u = J("grayscale"),
      d = J("hueRotate"),
      p = J("invert"),
      g = J("gap"),
      x = J("gradientColorStops"),
      v = J("gradientColorStopPositions"),
      w = J("inset"),
      b = J("margin"),
      m = J("opacity"),
      f = J("padding"),
      h = J("saturate"),
      k = J("scale"),
      N = J("sepia"),
      C = J("skew"),
      T = J("space"),
      M = J("translate"),
      I = () => ["auto", "contain", "none"],
      _ = () => ["auto", "hidden", "clip", "visible", "scroll"],
      re = () => ["auto", F, t],
      z = () => [F, t],
      ye = () => ["", Nt, Wt],
      Se = () => ["auto", or, F],
      Te = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      _e = () => ["solid", "dashed", "dotted", "double", "none"],
      pe = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      j = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      D = () => ["", "0", F],
      $ = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      R = () => [or, F];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [Lr],
        spacing: [Nt, Wt],
        blur: ["none", "", Qt, F],
        brightness: R(),
        borderColor: [e],
        borderRadius: ["none", "", "full", Qt, F],
        borderSpacing: z(),
        borderWidth: ye(),
        contrast: R(),
        grayscale: D(),
        hueRotate: R(),
        invert: D(),
        gap: z(),
        gradientColorStops: [e],
        gradientColorStopPositions: [$v, Wt],
        inset: re(),
        margin: re(),
        opacity: R(),
        padding: z(),
        saturate: R(),
        scale: R(),
        sepia: D(),
        skew: R(),
        space: z(),
        translate: z(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", F] }],
        container: ["container"],
        columns: [{ columns: [Qt] }],
        "break-after": [{ "break-after": $() }],
        "break-before": [{ "break-before": $() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...Te(), F] }],
        overflow: [{ overflow: _() }],
        "overflow-x": [{ "overflow-x": _() }],
        "overflow-y": [{ "overflow-y": _() }],
        overscroll: [{ overscroll: I() }],
        "overscroll-x": [{ "overscroll-x": I() }],
        "overscroll-y": [{ "overscroll-y": I() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [w] }],
        "inset-x": [{ "inset-x": [w] }],
        "inset-y": [{ "inset-y": [w] }],
        start: [{ start: [w] }],
        end: [{ end: [w] }],
        top: [{ top: [w] }],
        right: [{ right: [w] }],
        bottom: [{ bottom: [w] }],
        left: [{ left: [w] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", Mr, F] }],
        basis: [{ basis: re() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", F] }],
        grow: [{ grow: D() }],
        shrink: [{ shrink: D() }],
        order: [{ order: ["first", "last", "none", Mr, F] }],
        "grid-cols": [{ "grid-cols": [Lr] }],
        "col-start-end": [{ col: ["auto", { span: ["full", Mr, F] }, F] }],
        "col-start": [{ "col-start": Se() }],
        "col-end": [{ "col-end": Se() }],
        "grid-rows": [{ "grid-rows": [Lr] }],
        "row-start-end": [{ row: ["auto", { span: [Mr, F] }, F] }],
        "row-start": [{ "row-start": Se() }],
        "row-end": [{ "row-end": Se() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", F] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", F] }],
        gap: [{ gap: [g] }],
        "gap-x": [{ "gap-x": [g] }],
        "gap-y": [{ "gap-y": [g] }],
        "justify-content": [{ justify: ["normal", ...j()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...j(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...j(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [f] }],
        px: [{ px: [f] }],
        py: [{ py: [f] }],
        ps: [{ ps: [f] }],
        pe: [{ pe: [f] }],
        pt: [{ pt: [f] }],
        pr: [{ pr: [f] }],
        pb: [{ pb: [f] }],
        pl: [{ pl: [f] }],
        m: [{ m: [b] }],
        mx: [{ mx: [b] }],
        my: [{ my: [b] }],
        ms: [{ ms: [b] }],
        me: [{ me: [b] }],
        mt: [{ mt: [b] }],
        mr: [{ mr: [b] }],
        mb: [{ mb: [b] }],
        ml: [{ ml: [b] }],
        "space-x": [{ "space-x": [T] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [T] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", F, t] }],
        "min-w": [{ "min-w": [F, t, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              F,
              t,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [Qt] },
              Qt,
            ],
          },
        ],
        h: [{ h: [F, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [F, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [F, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [F, t, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", Qt, Wt] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              Di,
            ],
          },
        ],
        "font-family": [{ font: [Lr] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              F,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", or, Di] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              Nt,
              F,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", F] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", F] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [e] }],
        "placeholder-opacity": [{ "placeholder-opacity": [m] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [e] }],
        "text-opacity": [{ "text-opacity": [m] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [..._e(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", Nt, Wt] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", Nt, F] }],
        "text-decoration-color": [{ decoration: [e] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: z() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              F,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", F] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [m] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...Te(), zv] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", Fv] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              Av,
            ],
          },
        ],
        "bg-color": [{ bg: [e] }],
        "gradient-from-pos": [{ from: [v] }],
        "gradient-via-pos": [{ via: [v] }],
        "gradient-to-pos": [{ to: [v] }],
        "gradient-from": [{ from: [x] }],
        "gradient-via": [{ via: [x] }],
        "gradient-to": [{ to: [x] }],
        rounded: [{ rounded: [l] }],
        "rounded-s": [{ "rounded-s": [l] }],
        "rounded-e": [{ "rounded-e": [l] }],
        "rounded-t": [{ "rounded-t": [l] }],
        "rounded-r": [{ "rounded-r": [l] }],
        "rounded-b": [{ "rounded-b": [l] }],
        "rounded-l": [{ "rounded-l": [l] }],
        "rounded-ss": [{ "rounded-ss": [l] }],
        "rounded-se": [{ "rounded-se": [l] }],
        "rounded-ee": [{ "rounded-ee": [l] }],
        "rounded-es": [{ "rounded-es": [l] }],
        "rounded-tl": [{ "rounded-tl": [l] }],
        "rounded-tr": [{ "rounded-tr": [l] }],
        "rounded-br": [{ "rounded-br": [l] }],
        "rounded-bl": [{ "rounded-bl": [l] }],
        "border-w": [{ border: [s] }],
        "border-w-x": [{ "border-x": [s] }],
        "border-w-y": [{ "border-y": [s] }],
        "border-w-s": [{ "border-s": [s] }],
        "border-w-e": [{ "border-e": [s] }],
        "border-w-t": [{ "border-t": [s] }],
        "border-w-r": [{ "border-r": [s] }],
        "border-w-b": [{ "border-b": [s] }],
        "border-w-l": [{ "border-l": [s] }],
        "border-opacity": [{ "border-opacity": [m] }],
        "border-style": [{ border: [..._e(), "hidden"] }],
        "divide-x": [{ "divide-x": [s] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [s] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [m] }],
        "divide-style": [{ divide: _e() }],
        "border-color": [{ border: [o] }],
        "border-color-x": [{ "border-x": [o] }],
        "border-color-y": [{ "border-y": [o] }],
        "border-color-s": [{ "border-s": [o] }],
        "border-color-e": [{ "border-e": [o] }],
        "border-color-t": [{ "border-t": [o] }],
        "border-color-r": [{ "border-r": [o] }],
        "border-color-b": [{ "border-b": [o] }],
        "border-color-l": [{ "border-l": [o] }],
        "divide-color": [{ divide: [o] }],
        "outline-style": [{ outline: ["", ..._e()] }],
        "outline-offset": [{ "outline-offset": [Nt, F] }],
        "outline-w": [{ outline: [Nt, Wt] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: ye() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [m] }],
        "ring-offset-w": [{ "ring-offset": [Nt, Wt] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", Qt, Uv] }],
        "shadow-color": [{ shadow: [Lr] }],
        opacity: [{ opacity: [m] }],
        "mix-blend": [
          { "mix-blend": [...pe(), "plus-lighter", "plus-darker"] },
        ],
        "bg-blend": [{ "bg-blend": pe() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [n] }],
        brightness: [{ brightness: [r] }],
        contrast: [{ contrast: [a] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", Qt, F] }],
        grayscale: [{ grayscale: [u] }],
        "hue-rotate": [{ "hue-rotate": [d] }],
        invert: [{ invert: [p] }],
        saturate: [{ saturate: [h] }],
        sepia: [{ sepia: [N] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [n] }],
        "backdrop-brightness": [{ "backdrop-brightness": [r] }],
        "backdrop-contrast": [{ "backdrop-contrast": [a] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [d] }],
        "backdrop-invert": [{ "backdrop-invert": [p] }],
        "backdrop-opacity": [{ "backdrop-opacity": [m] }],
        "backdrop-saturate": [{ "backdrop-saturate": [h] }],
        "backdrop-sepia": [{ "backdrop-sepia": [N] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [i] }],
        "border-spacing-x": [{ "border-spacing-x": [i] }],
        "border-spacing-y": [{ "border-spacing-y": [i] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              F,
            ],
          },
        ],
        duration: [{ duration: R() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", F] }],
        delay: [{ delay: R() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", F] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [k] }],
        "scale-x": [{ "scale-x": [k] }],
        "scale-y": [{ "scale-y": [k] }],
        rotate: [{ rotate: [Mr, F] }],
        "translate-x": [{ "translate-x": [M] }],
        "translate-y": [{ "translate-y": [M] }],
        "skew-x": [{ "skew-x": [C] }],
        "skew-y": [{ "skew-y": [C] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              F,
            ],
          },
        ],
        accent: [{ accent: ["auto", e] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              F,
            ],
          },
        ],
        "caret-color": [{ caret: [e] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": z() }],
        "scroll-mx": [{ "scroll-mx": z() }],
        "scroll-my": [{ "scroll-my": z() }],
        "scroll-ms": [{ "scroll-ms": z() }],
        "scroll-me": [{ "scroll-me": z() }],
        "scroll-mt": [{ "scroll-mt": z() }],
        "scroll-mr": [{ "scroll-mr": z() }],
        "scroll-mb": [{ "scroll-mb": z() }],
        "scroll-ml": [{ "scroll-ml": z() }],
        "scroll-p": [{ "scroll-p": z() }],
        "scroll-px": [{ "scroll-px": z() }],
        "scroll-py": [{ "scroll-py": z() }],
        "scroll-ps": [{ "scroll-ps": z() }],
        "scroll-pe": [{ "scroll-pe": z() }],
        "scroll-pt": [{ "scroll-pt": z() }],
        "scroll-pr": [{ "scroll-pr": z() }],
        "scroll-pb": [{ "scroll-pb": z() }],
        "scroll-pl": [{ "scroll-pl": z() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", F] },
        ],
        fill: [{ fill: [e, "none"] }],
        "stroke-w": [{ stroke: [Nt, Wt, Di] }],
        stroke: [{ stroke: [e, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  Vv = Pv(Bv);
function Yv(...e) {
  return Vv(mv(e));
}
const fc = ({
    children: e,
    variant: t = "primary",
    size: n = "md",
    isLoading: r = !1,
    leftIcon: o,
    rightIcon: l,
    className: i,
    disabled: s,
    ...a
  }) => {
    const u =
        "inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:ring-2 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed",
      d = {
        primary: "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500",
        secondary:
          "bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 focus:ring-gray-500",
        danger: "bg-red-600 hover:bg-red-700 text-white focus:ring-red-500",
      },
      p = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
      };
    return c.jsx("button", {
      className: Yv(u, d[t], p[n], r && "opacity-50 cursor-not-allowed", i),
      disabled: s || r,
      ...a,
      children: r
        ? c.jsxs(c.Fragment, {
            children: [
              c.jsx("span", {
                className:
                  "animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2",
              }),
              "Loading...",
            ],
          })
        : c.jsxs(c.Fragment, {
            children: [
              o && c.jsx("span", { className: "mr-2", children: o }),
              e,
              l && c.jsx("span", { className: "ml-2", children: l }),
            ],
          }),
    });
  },
  qv = { duration: 180, brightness: 0.9, color: "0,0,255" },
  Gv = [
    { label: "紅色", value: "0,0,255" },
    { label: "綠色", value: "0,255,0" },
    { label: "藍色", value: "255,0,0" },
    { label: "黃色", value: "0,255,255" },
  ],
  sp = "lightSettings",
  Rs = () => {
    try {
      const e = localStorage.getItem(sp);
      if (e) return JSON.parse(e);
    } catch (e) {
      console.error("Error loading light settings:", e);
    }
    return qv;
  },
  Kv = (e) => {
    try {
      localStorage.setItem(sp, JSON.stringify(e));
    } catch (t) {
      console.error("Error saving light settings:", t);
    }
  },
  Xv = () => {
    gt();
    const [e, t] = y.useState(!1),
      [n, r] = y.useState(Rs()),
      o = () => {
        Kv(n), t(!1);
      },
      l = () => {
        r(Rs()), t(!1);
      };
    return c.jsxs(c.Fragment, {
      children: [
        c.jsx("button", {
          onClick: () => t(!0),
          className:
            "p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors",
          title: "亮燈設定",
          children: c.jsx(s0, { className: "w-5 h-5" }),
        }),
        c.jsx(Dt, {
          appear: !0,
          show: e,
          as: y.Fragment,
          children: c.jsxs(_t, {
            as: "div",
            className: "relative z-50",
            onClose: l,
            children: [
              c.jsx(Dt.Child, {
                as: y.Fragment,
                enter: "ease-out duration-300",
                enterFrom: "opacity-0",
                enterTo: "opacity-100",
                leave: "ease-in duration-200",
                leaveFrom: "opacity-100",
                leaveTo: "opacity-0",
                children: c.jsx("div", {
                  className: "fixed inset-0 bg-black bg-opacity-25",
                }),
              }),
              c.jsx("div", {
                className: "fixed inset-0 overflow-y-auto",
                children: c.jsx("div", {
                  className:
                    "flex min-h-full items-center justify-center p-4 text-center",
                  children: c.jsx(Dt.Child, {
                    as: y.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0 scale-95",
                    enterTo: "opacity-100 scale-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100 scale-100",
                    leaveTo: "opacity-0 scale-95",
                    children: c.jsxs(_t.Panel, {
                      className:
                        "w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all",
                      children: [
                        c.jsxs("div", {
                          className: "flex items-center justify-between mb-4",
                          children: [
                            c.jsx(_t.Title, {
                              as: "h3",
                              className:
                                "text-lg font-medium leading-6 text-gray-900",
                              children: "亮燈設定",
                            }),
                            c.jsx("button", {
                              onClick: l,
                              className:
                                "text-gray-400 hover:text-gray-600 transition-colors",
                              children: c.jsx(a0, { className: "w-5 h-5" }),
                            }),
                          ],
                        }),
                        c.jsxs("div", {
                          className: "space-y-4",
                          children: [
                            c.jsxs("div", {
                              children: [
                                c.jsx("label", {
                                  className:
                                    "block text-sm font-medium text-gray-700 mb-2",
                                  children: "亮燈時間（秒）",
                                }),
                                c.jsxs("div", {
                                  className: "flex items-center gap-3",
                                  children: [
                                    c.jsx("input", {
                                      type: "range",
                                      min: "5",
                                      max: "180",
                                      step: "5",
                                      value: n.duration,
                                      onChange: (i) =>
                                        r({
                                          ...n,
                                          duration: Number(i.target.value),
                                        }),
                                      className:
                                        "flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer",
                                    }),
                                    c.jsxs("span", {
                                      className:
                                        "text-sm font-medium text-gray-700 w-12 text-right",
                                      children: [n.duration, "秒"],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            c.jsxs("div", {
                              children: [
                                c.jsx("label", {
                                  className:
                                    "block text-sm font-medium text-gray-700 mb-2",
                                  children: "亮度",
                                }),
                                c.jsxs("div", {
                                  className: "flex items-center gap-3",
                                  children: [
                                    c.jsx("input", {
                                      type: "range",
                                      min: "0",
                                      max: "0.9",
                                      step: "0.1",
                                      value: n.brightness,
                                      onChange: (i) =>
                                        r({
                                          ...n,
                                          brightness: Number(i.target.value),
                                        }),
                                      className:
                                        "flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer",
                                    }),
                                    c.jsx("span", {
                                      className:
                                        "text-sm font-medium text-gray-700 w-12 text-right",
                                      children: n.brightness.toFixed(1),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            c.jsxs("div", {
                              children: [
                                c.jsx("label", {
                                  className:
                                    "block text-sm font-medium text-gray-700 mb-2",
                                  children: "顏色",
                                }),
                                c.jsx("div", {
                                  className: "grid grid-cols-2 gap-2",
                                  children: Gv.map((i) => {
                                    const [s, a, u] = i.value.split(","),
                                      d = `rgb(${u},${a},${s})`;
                                    return c.jsx(
                                      "button",
                                      {
                                        onClick: () =>
                                          r({ ...n, color: i.value }),
                                        className: `
                                px-4 py-2 rounded-lg border-2 transition-all
                                ${
                                  n.color === i.value
                                    ? "border-blue-500 bg-blue-50 text-blue-700 font-medium"
                                    : "border-gray-200 hover:border-gray-300 text-gray-700"
                                }
                              `,
                                        children: c.jsxs("div", {
                                          className: "flex items-center gap-2",
                                          children: [
                                            c.jsx("div", {
                                              className:
                                                "w-4 h-4 rounded border border-gray-300",
                                              style: { backgroundColor: d },
                                            }),
                                            i.label,
                                          ],
                                        }),
                                      },
                                      i.value
                                    );
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        c.jsxs("div", {
                          className: "mt-6 flex gap-3",
                          children: [
                            c.jsx(fc, {
                              onClick: l,
                              variant: "secondary",
                              className: "flex-1",
                              children: "取消",
                            }),
                            c.jsx(fc, {
                              onClick: o,
                              variant: "primary",
                              className: "flex-1",
                              children: "儲存",
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
      ],
    });
  },
  Jv = ({
    isOpen: e,
    title: t,
    message: n,
    confirmText: r,
    cancelText: o,
    onConfirm: l,
    onCancel: i,
    isProcessing: s = !1,
  }) =>
    c.jsx(Dt, {
      appear: !0,
      show: e,
      as: y.Fragment,
      children: c.jsxs(_t, {
        as: "div",
        className: "relative z-[60]",
        onClose: () => !s && i(),
        children: [
          c.jsx(Dt.Child, {
            as: y.Fragment,
            enter: "ease-out duration-300",
            enterFrom: "opacity-0",
            enterTo: "opacity-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100",
            leaveTo: "opacity-0",
            children: c.jsx("div", {
              className: "fixed inset-0 bg-black bg-opacity-25",
            }),
          }),
          c.jsx("div", {
            className: "fixed inset-0 overflow-y-auto",
            children: c.jsx("div", {
              className:
                "flex min-h-full items-center justify-center p-4 text-center",
              children: c.jsx(Dt.Child, {
                as: y.Fragment,
                enter: "ease-out duration-300",
                enterFrom: "opacity-0 scale-95",
                enterTo: "opacity-100 scale-100",
                leave: "ease-in duration-200",
                leaveFrom: "opacity-100 scale-100",
                leaveTo: "opacity-0 scale-95",
                children: c.jsxs(_t.Panel, {
                  className:
                    "w-[90vw] max-w-md transform overflow-hidden rounded-lg bg-white p-4 md:p-6 text-left align-middle shadow-xl transition-all",
                  children: [
                    c.jsx(_t.Title, {
                      as: "h3",
                      className: "text-xl font-medium text-gray-900",
                      children: t,
                    }),
                    c.jsx("div", {
                      className: "mt-4",
                      children: c.jsx("p", {
                        className: "text-sm text-gray-600",
                        children: n,
                      }),
                    }),
                    c.jsxs("div", {
                      className: "mt-6 flex justify-end gap-3",
                      children: [
                        c.jsx("button", {
                          type: "button",
                          onClick: () => !s && i(),
                          disabled: s,
                          className:
                            "inline-flex justify-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                          children: o,
                        }),
                        c.jsx("button", {
                          type: "button",
                          onClick: l,
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
  Zv = [
    { value: "name", labelKey: "search.drugName" },
    { value: "code", labelKey: "search.drugCode" },
    { value: "requestingUnit", labelKey: "search.requestingUnit" },
    { value: "actionType", labelKey: "search.actionType" },
  ],
  e1 = ({
    orders: e,
    startDate: t,
    endDate: n,
    onDateChange: r,
    onOrdersUpdate: o,
    isLoading: l,
  }) => {
    const { t: i } = gt(),
      [s, a] = y.useState(null),
      [u, d] = y.useState(!1),
      [p, g] = y.useState(""),
      [x, v] = y.useState(null),
      [w, b] = y.useState(!1),
      [m, f] = y.useState(null),
      [h, k] = y.useState(null),
      [N, C] = y.useState(!1),
      [T, M] = y.useState("等待過帳"),
      [I, _] = y.useState(!0),
      [re, z] = y.useState(!1),
      [ye, Se] = y.useState(!1),
      [Te, _e] = y.useState("name"),
      [pe, j] = y.useState(""),
      [D, $] = y.useState(!1),
      [R, B] = y.useState(new Set()),
      [yt, ae] = y.useState(new Set()),
      Ge = y.useRef(new Map()),
      [ot, vt] = y.useState(!1),
      [$n, Rn] = y.useState(null),
      ei = (S) => {
        const O = S.signedTime;
        if (!O || O === "-" || O === "1/01/01 00:00:00") return "-";
        if (O.match(/^\d{4}\/\d{2}\/\d{2} \d{2}:\d{2}:\d{2}$/)) return O;
        try {
          const P = new Date(O);
          if (!isNaN(P.getTime())) return G(P, "yyyy/MM/dd HH:mm:ss");
        } catch {}
        return O;
      };
    y.useEffect(
      () => () => {
        Ge.current.forEach((S) => clearTimeout(S)), Ge.current.clear();
      },
      []
    );
    const V = (S) => S === "緊急申領",
      lt = (S) => {
        M(S), r(t, n);
      },
      De = (S) => {
        S.preventDefault();
      },
      Fn = (S) => {
        S.key === "Enter" && S.preventDefault();
      },
      ap = async () => {
        $(!0);
        try {
          const S = await fetch(
            Jf("/api/materialRequisition/download_excel_by_requestTime"),
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                ValueAry: [
                  G(t, "yyyy-MM-dd HH:mm:ss"),
                  G(n, "yyyy-MM-dd HH:mm:ss"),
                ],
              }),
            }
          );
          if (!S.ok) throw new Error("Export failed");
          const O = await S.blob(),
            P = window.URL.createObjectURL(O),
            W = document.createElement("a");
          (W.href = P),
            (W.download = `MaterialRequisition_${G(t, "yyyyMMdd")}_to_${G(
              n,
              "yyyyMMdd"
            )}.xlsx`),
            document.body.appendChild(W),
            W.click(),
            window.URL.revokeObjectURL(P),
            document.body.removeChild(W);
        } catch (S) {
          console.error("Export error:", S), v("匯出失敗，請稍後再試");
        } finally {
          $(!1);
        }
      },
      za = e.filter((S) => {
        let O = !1;
        if (
          (T === "全部"
            ? (O = !0)
            : T === "已過帳"
            ? (O = S.state === "已過帳" || S.state === "已簽收")
            : (O = S.state === T),
          !pe)
        )
          return O;
        const P = pe.toLowerCase();
        switch (Te) {
          case "name":
            return O && S.name.toLowerCase().includes(P);
          case "code":
            return O && S.code.toLowerCase().includes(P);
          case "requestingUnit":
            return O && S.requestingUnit.toLowerCase().includes(P);
          case "actionType":
            return O && S.actionType.toLowerCase().includes(P);
          default:
            return O;
        }
      }),
      Ia = za.reduce((S, O) => {
        const P = O.code;
        return (
          S[P] || (S[P] = { orders: [], drugName: O.name, drugCode: O.code }),
          S[P].orders.push(O),
          S
        );
      }, {});
    Object.values(Ia).forEach((S) => {
      S.orders.sort((O, P) => {
        const W = V(O.actionType),
          K = V(P.actionType);
        return W && !K ? -1 : !W && K ? 1 : 0;
      });
    });
    const Aa = Object.entries(Ia).sort(([, S], [, O]) => {
        const P = S.orders.filter((Et) => V(Et.actionType)),
          W = O.orders.filter((Et) => V(Et.actionType)),
          K = P.length === S.orders.length && S.orders.length > 0,
          ke = W.length === O.orders.length && O.orders.length > 0,
          U = P.length > 0,
          me = W.length > 0;
        if (K && !ke) return -1;
        if (!K && ke) return 1;
        if (K === ke) {
          if (U && !me) return -1;
          if (!U && me) return 1;
        }
        return 0;
      }),
      up = async () => {
        if (s) {
          if (!p || isNaN(Number(p)) || Number(p) < 0) {
            v("請輸入有效的數量");
            return;
          }
          b(!0), v(null);
          try {
            const S = await Yt(
              "/api/materialRequisition/update_actual_quantity",
              {
                method: "POST",
                body: { Data: { GUID: s.GUID, actualQuantity: p } },
              }
            );
            if (S.Code === 200) {
              const O = e.map((P) =>
                P.GUID === s.GUID ? { ...P, actualQuantity: p } : P
              );
              o(O), d(!1);
            } else throw new Error(S.Result || "更新失敗");
          } catch (S) {
            v(S instanceof Error ? S.message : "系統錯誤，請稍後再試");
          } finally {
            b(!1);
          }
        }
      },
      cp = async () => {
        const S = Yr();
        if (!S) {
          v("無法取得使用者資訊");
          return;
        }
        const O = za.filter((K) => K.state === "等待過帳" && K.actualQuantity);
        if (O.length === 0) {
          v("沒有可核撥的訂單");
          return;
        }
        const W = `確認要核撥以下項目嗎？

${O.map((K) => `${K.name} - ${K.actualQuantity}`).join(`
`)}`;
        if (confirm(W)) {
          Se(!0), v(null);
          try {
            const ke = G(new Date(), "yyyy-MM-dd HH:mm:ss"),
              U = {
                Data: O.map((Et) => ({
                  ...Et,
                  issuingPerson: S.Name,
                  issuingPersonID: S.ID,
                  issueTime: ke,
                  notice: "False",
                  state: "已過帳",
                })),
              },
              me = await Yt("/api/materialRequisition/update_by_guid", {
                method: "POST",
                body: U,
              });
            if (me.Code === 200) r(t, n);
            else throw new Error(me.Result || "批次核撥失敗");
          } catch (K) {
            v(K instanceof Error ? K.message : "系統錯誤，請稍後再試");
          } finally {
            Se(!1);
          }
        }
      },
      dp = async (S, O) => {
        const P = Yr();
        if (!P) {
          v("無法取得使用者資訊");
          return;
        }
        const W = O.orders.filter(
          (U) => U.state === "等待過帳" && U.actualQuantity
        );
        if (W.length === 0) {
          v("沒有可核撥的訂單");
          return;
        }
        const ke = `確認要核撥以下項目嗎？

${W.map((U) => `${U.name} - ${U.actualQuantity}`).join(`
`)}`;
        if (confirm(ke)) {
          B((U) => new Set(U).add(S)), v(null);
          try {
            const me = G(new Date(), "yyyy-MM-dd HH:mm:ss"),
              Et = {
                Data: W.map((Eo) => ({
                  ...Eo,
                  issuingPerson: P.Name,
                  issuingPersonID: P.ID,
                  issueTime: me,
                  notice: "False",
                  state: "已過帳",
                })),
              },
              vr = await Yt("/api/materialRequisition/update_by_guid", {
                method: "POST",
                body: Et,
              });
            if (vr.Code === 200) r(t, n);
            else throw new Error(vr.Result || "批次核撥失敗");
          } catch (U) {
            v(U instanceof Error ? U.message : "系統錯誤，請稍後再試");
          } finally {
            B((U) => {
              const me = new Set(U);
              return me.delete(S), me;
            });
          }
        }
      },
      fp = async (S, O) => {
        ae((U) => new Set(U).add(S)), v(null);
        const W = O.orders.some((U) => U.notice !== "True"),
          K = Rs();
        Ge.current.has(S) &&
          (clearTimeout(Ge.current.get(S)), Ge.current.delete(S));
        const ke = async (U) => {
          try {
            await Yt("/api/medmap/light_by_code_name_type", {
              method: "POST",
              body: {
                ValueAry: [
                  "ServerName=DS01",
                  "ServerType=藥庫",
                  `code=${S}`,
                  `color=${U}`,
                  `lightness=${K.brightness}`,
                ],
              },
            }),
              console.log(`Light signal sent: ${U}`);
          } catch (me) {
            console.log("Light API error (non-blocking):", me);
          }
        };
        try {
          if (W) {
            await ke(K.color);
            const Ae = setTimeout(() => {
              ke("0,0,0"), Ge.current.delete(S);
            }, K.duration * 1e3);
            Ge.current.set(S, Ae);
          } else await ke("0,0,0");
          let U;
          W
            ? (U = O.orders.filter((Ae) => Ae.state === "等待過帳"))
            : (U = O.orders);
          const me = W ? "True" : "False",
            Et = U.map((Ae) =>
              Yt("/api/materialRequisition/update_notice", {
                method: "POST",
                body: { Data: { GUID: Ae.GUID, notice: me } },
              })
            ),
            vr = await Promise.all(Et);
          console.log("Notice update responses:", vr);
          const Eo = vr.filter((Ae) => Ae.Code !== 200);
          if (Eo.length > 0) throw new Error(`${Eo.length} 筆訂單更新失敗`);
          const yp = new Set(U.map((Ae) => Ae.GUID)),
            vp = e.map((Ae) => (yp.has(Ae.GUID) ? { ...Ae, notice: me } : Ae));
          o(vp);
        } catch (U) {
          console.error("Toggle notice error:", U),
            v(U instanceof Error ? U.message : "系統錯誤，請稍後再試");
        } finally {
          ae((U) => {
            const me = new Set(U);
            return me.delete(S), me;
          });
        }
      },
      Ua = (S) => {
        if (
          (console.log("Checking revert for order:", {
            state: S.state,
            issuingPersonID: S.issuingPersonID,
            issueTime: S.issueTime,
          }),
          S.state === "已簽收")
        )
          return console.log("Cannot revert: already signed"), !1;
        if (S.state !== "已過帳")
          return console.log("Cannot revert: state is not 已過帳"), !1;
        const O = Yr();
        if ((console.log("User data:", O), !O || S.issuingPersonID !== O.ID))
          return (
            console.log("Cannot revert: user ID mismatch or no user data"), !1
          );
        if (!S.issueTime)
          return console.log("Cannot revert: no issue time"), !1;
        try {
          const P = new Date(S.issueTime),
            W = new Date(),
            K =
              P.getFullYear() === W.getFullYear() &&
              P.getMonth() === W.getMonth() &&
              P.getDate() === W.getDate();
          return (
            console.log("Date check:", { issueDate: P, today: W, isToday: K }),
            K
          );
        } catch (P) {
          return console.log("Cannot revert: date parsing error", P), !1;
        }
      },
      pp = (S) => {
        if (!Ua(S)) {
          v("無法還原此訂單");
          return;
        }
        Rn(S), vt(!0);
      },
      mp = async () => {
        if (!$n) return;
        vt(!1), z(!0), v(null);
        const S = $n;
        try {
          const O = {
              Data: [
                {
                  ...S,
                  issueTime: "0001-01-01 00:00:00.000000",
                  issuingPerson: "",
                  issuingPersonID: "",
                  state: "等待過帳",
                },
              ],
            },
            P = await Yt("/api/materialRequisition/update_by_guid", {
              method: "POST",
              body: O,
            });
          if (P.Code === 200) Rn(null), r(t, n);
          else throw new Error(P.Result || "還原失敗");
        } catch (O) {
          v(O instanceof Error ? O.message : "系統錯誤，請稍後再試");
        } finally {
          z(!1);
        }
      },
      hp = (S) => {
        S.state === "等待過帳" &&
          (a(S),
          g(S.actualQuantity || S.requestedQuantity),
          v(null),
          d(!0),
          _(!0));
      },
      ko = (S) => {
        I
          ? (g(S), _(!1))
          : N
          ? (g(S), C(!1))
          : m && !h
          ? (k(p), g(S))
          : g(p === "0" ? S : p + S);
      },
      bo = (S) => {
        _(!1), h && Ha(), f(S), C(!1);
      },
      Ha = () => {
        if (!h || !m) return;
        const S = parseFloat(h),
          O = parseFloat(p);
        let P = 0;
        switch (m) {
          case "+":
            P = S + O;
            break;
          case "-":
            P = S - O;
            break;
          case "×":
            P = S * O;
            break;
          case "÷":
            if (O === 0) {
              v("不能除以零");
              return;
            }
            P = S / O;
            break;
        }
        g(Math.round(P).toString()), k(null), f(null), C(!0), _(!1);
      },
      gp = () => {
        g("0"), k(null), f(null), C(!1), _(!0);
      },
      Wa = (S) =>
        S.orders.some((O) => O.state === "等待過帳" && O.actualQuantity),
      Qa = (S) =>
        S.orders.some((O) => O.state === "等待過帳" && V(O.actionType));
    return c.jsxs("div", {
      className: "space-y-6",
      children: [
        c.jsxs("div", {
          className: "space-y-6",
          children: [
            c.jsx(av, { startDate: t, endDate: n, onDateChange: r }),
            c.jsxs("div", {
              className:
                "flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6",
              children: [
                c.jsxs("div", {
                  className: "flex flex-col lg:flex-row lg:items-end gap-6",
                  children: [
                    c.jsx(uv, { value: T, onChange: lt }),
                    c.jsxs("form", {
                      onSubmit: De,
                      className: "flex flex-col sm:flex-row gap-2",
                      children: [
                        c.jsx("select", {
                          value: Te,
                          onChange: (S) => _e(S.target.value),
                          className:
                            "w-full sm:w-32 px-3 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-colors text-base",
                          children: Zv.map((S) =>
                            c.jsx(
                              "option",
                              { value: S.value, children: i(S.labelKey) },
                              S.value
                            )
                          ),
                        }),
                        c.jsxs("div", {
                          className: "relative",
                          children: [
                            c.jsx("input", {
                              type: "text",
                              value: pe,
                              onChange: (S) => j(S.target.value),
                              onKeyDown: Fn,
                              placeholder: i("search.placeholder"),
                              className:
                                "w-full sm:w-64 pl-10 pr-3 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-colors text-base",
                            }),
                            c.jsx(i0, {
                              className:
                                "absolute left-3 top-2.5 text-gray-400",
                              size: 20,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                c.jsxs("div", {
                  className: "flex gap-3 justify-end md:justify-start",
                  children: [
                    c.jsx(pv, { onClick: ap, isLoading: D, disabled: l }),
                    T !== "已過帳" &&
                      c.jsx("button", {
                        onClick: cp,
                        disabled: ye || l,
                        className:
                          "px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed",
                        children: i(
                          ye ? "button.processing" : "button.bulkApprove"
                        ),
                      }),
                  ],
                }),
              ],
            }),
          ],
        }),
        x &&
          c.jsxs("div", {
            className:
              "p-4 bg-red-50 text-red-700 rounded-lg border border-red-200 flex items-center gap-2",
            children: [
              c.jsx(Ps, { size: 20 }),
              c.jsx("span", { className: "text-sm", children: x }),
            ],
          }),
        l
          ? c.jsxs("div", {
              className: "text-center py-8",
              children: [
                c.jsx("div", {
                  className:
                    "animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto",
                }),
                c.jsx("p", {
                  className: "mt-2 text-base text-gray-600",
                  children: i("app.orders.loading"),
                }),
              ],
            })
          : Aa.length === 0
          ? c.jsx("div", {
              className: "text-center py-8 text-base text-gray-500",
              children: i("app.orders.empty"),
            })
          : c.jsx("div", {
              className: "space-y-8",
              children: Aa.map(([S, O]) =>
                c.jsxs(
                  "div",
                  {
                    className:
                      "w-full rounded-lg border border-gray-200 bg-gray-50 p-2 md:p-3",
                    children: [
                      c.jsxs("div", {
                        className: "mb-1 flex items-center justify-between",
                        children: [
                          c.jsxs("div", {
                            className: "flex-1 space-y-1",
                            children: [
                              c.jsx("div", {
                                className:
                                  "text-xl md:text-[32px] font-semibold break-words",
                                children: O.drugName,
                              }),
                              c.jsx("div", {
                                className:
                                  "text-base font-mono text-gray-900 break-all",
                                children: O.drugCode,
                              }),
                            ],
                          }),
                          c.jsxs("div", {
                            className: "flex gap-2",
                            children: [
                              c.jsx("button", {
                                onClick: () => fp(S, O),
                                disabled: yt.has(S),
                                className: `px-4 py-2 rounded-lg font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${
                                  O.orders.some((P) => P.notice !== "True")
                                    ? "bg-green-600 hover:bg-green-700 text-white"
                                    : "bg-orange-600 hover:bg-orange-700 text-white"
                                }`,
                                children: yt.has(S)
                                  ? "處理中..."
                                  : O.orders.some((P) => P.notice !== "True")
                                  ? "通知"
                                  : "取消通知",
                              }),
                              T !== "已過帳" &&
                                c.jsx("button", {
                                  onClick: () => dp(S, O),
                                  disabled: !Wa(O) || R.has(S),
                                  className: `px-4 py-2 rounded-lg font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${
                                    !Wa(O) || R.has(S)
                                      ? "bg-gray-600 hover:bg-gray-700 text-white"
                                      : Qa(O)
                                      ? "bg-red-600 hover:bg-red-700 text-white"
                                      : "bg-blue-600 hover:bg-blue-700 text-white"
                                  }`,
                                  children: R.has(S)
                                    ? i("button.processing")
                                    : Qa(O)
                                    ? i("button.urgentApprove")
                                    : i("button.approve"),
                                }),
                            ],
                          }),
                        ],
                      }),
                      c.jsx("div", {
                        className: "space-y-2",
                        children: O.orders.map((P) => {
                          const W = P.state === "等待過帳",
                            K = W && !P.actualQuantity,
                            ke = V(P.actionType);
                          return c.jsx(
                            "div",
                            {
                              className: `px-4 py-3 rounded-lg border-2 transition-all duration-200 ${
                                ke
                                  ? W
                                    ? "bg-red-50 border-red-300 shadow-md"
                                    : "bg-red-25 border-red-200"
                                  : W
                                  ? "bg-yellow-50 border-yellow-200"
                                  : "bg-gray-200 border border-gray-300"
                              }`,
                              children: c.jsxs("div", {
                                className:
                                  "flex flex-col lg:justify-between lg:items-start gap-2",
                                children: [
                                  c.jsxs("div", {
                                    className:
                                      "flex-1 w-full space-y-2 lg:space-y-1",
                                    children: [
                                      c.jsxs("div", {
                                        className:
                                          "grid w-full grid-cols-2 sm:grid-cols-2 gap-1 lg:gap-x-8",
                                        children: [
                                          c.jsxs("div", {
                                            className:
                                              "text-base text-gray-900",
                                            children: [
                                              c.jsxs("span", {
                                                className:
                                                  "inline-block w-[5em] font-medium",
                                                children: [
                                                  i("table.requestingUnit"),
                                                  "：",
                                                ],
                                              }),
                                              c.jsx("span", {
                                                className: "break-words",
                                                children: P.requestingUnit,
                                              }),
                                            ],
                                          }),
                                          c.jsxs("div", {
                                            className:
                                              "text-base text-gray-900",
                                            children: [
                                              c.jsxs("span", {
                                                className:
                                                  "inline-block w-[5em] font-medium",
                                                children: [
                                                  i("table.actionType"),
                                                  "：",
                                                ],
                                              }),
                                              c.jsx("span", {
                                                className: "break-words",
                                                children:
                                                  P.actionType === "一般申領"
                                                    ? i(
                                                        "filter.actionType.general"
                                                      )
                                                    : P.actionType ===
                                                      "緊急申領"
                                                    ? i(
                                                        "filter.actionType.urgent"
                                                      )
                                                    : P.actionType,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      c.jsxs("div", {
                                        className:
                                          "grid w-full grid-cols-2 sm:grid-cols-2 gap-1 lg:gap-x-8",
                                        children: [
                                          c.jsxs("div", {
                                            className:
                                              "text-base text-gray-900",
                                            children: [
                                              c.jsxs("span", {
                                                className:
                                                  "inline-block w-[5em] font-medium",
                                                children: [
                                                  i("table.requestingPerson"),
                                                  "：",
                                                ],
                                              }),
                                              c.jsx("span", {
                                                className: "break-words",
                                                children: P.requestingPerson,
                                              }),
                                            ],
                                          }),
                                          c.jsxs("div", {
                                            className:
                                              "text-base text-gray-900",
                                            children: [
                                              c.jsxs("span", {
                                                className:
                                                  "inline-block w-[5em] font-medium",
                                                children: [
                                                  i("table.issuingPerson"),
                                                  "：",
                                                ],
                                              }),
                                              c.jsx("span", {
                                                className: "break-words",
                                                children:
                                                  P.issuingPerson || "-",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      c.jsxs("div", {
                                        className:
                                          "grid w-full grid-cols-2 sm:grid-cols-2 gap-1 lg:gap-x-8",
                                        children: [
                                          c.jsxs("div", {
                                            className:
                                              "text-base text-gray-900",
                                            children: [
                                              c.jsxs("span", {
                                                className:
                                                  "inline-block w-[5em] font-medium",
                                                children: [
                                                  i("table.requestTime"),
                                                  "：",
                                                ],
                                              }),
                                              c.jsx("span", {
                                                className: "break-words",
                                                children: P.requestTime,
                                              }),
                                            ],
                                          }),
                                          c.jsxs("div", {
                                            className: `text-base text-gray-900 ${
                                              W ? "hidden" : ""
                                            }`,
                                            children: [
                                              c.jsxs("span", {
                                                className:
                                                  "inline-block w-[5em] font-medium",
                                                children: [
                                                  i("table.issueTime"),
                                                  "：",
                                                ],
                                              }),
                                              c.jsx("span", {
                                                className: "break-words",
                                                children: P.issueTime,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      c.jsxs("div", {
                                        className: `grid w-full grid-cols-2 sm:grid-cols-2 gap-1 lg:gap-x-8 ${
                                          W ? "hidden" : ""
                                        }`,
                                        children: [
                                          c.jsxs("div", {
                                            className:
                                              "text-base text-gray-900",
                                            children: [
                                              c.jsxs("span", {
                                                className:
                                                  "inline-block w-[5em] font-medium",
                                                children: [
                                                  i("table.receiptTime"),
                                                  "：",
                                                ],
                                              }),
                                              c.jsx("span", {
                                                className: "break-words",
                                                children: ei(P),
                                              }),
                                            ],
                                          }),
                                          c.jsxs("div", {
                                            className:
                                              "text-base text-gray-900",
                                            children: [
                                              c.jsxs("span", {
                                                className:
                                                  "inline-block w-[5em] font-medium",
                                                children: [
                                                  i("table.receiptStaff"),
                                                  "：",
                                                ],
                                              }),
                                              c.jsx("span", {
                                                className: "break-words",
                                                children: P.signedPerson || "-",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  c.jsxs("div", {
                                    className:
                                      "w-full flex flex-col sm:flex-row justify-between items-end",
                                    children: [
                                      K
                                        ? c.jsx("span", {
                                            className: `font-bold block mb-1 sm:mb-0 whitespace-nowrap text-lg flex-1 lg:text-xl ${
                                              ke
                                                ? "text-red-500"
                                                : "text-gray-400"
                                            }`,
                                            children: i(
                                              ke
                                                ? "modal.urgentPleaseEnterActualQuantity"
                                                : "modal.pleaseEnterActualQuantity"
                                            ),
                                          })
                                        : c.jsx("span", {
                                            className:
                                              "block mb-1 sm:mb-0 whitespace-nowrap text-lg flex-1 lg:text-xl",
                                          }),
                                      c.jsxs("div", {
                                        className: "flex gap-4",
                                        children: [
                                          c.jsx("span", {
                                            className: `px-3 py-2 rounded-full text-base font-medium ${
                                              P.state === "等待過帳"
                                                ? ke
                                                  ? "bg-red-100 text-red-800 border border-red-200"
                                                  : "bg-yellow-100 text-yellow-800"
                                                : P.state === "已過帳"
                                                ? "bg-green-100 text-green-800"
                                                : "bg-gray-100 text-gray-800"
                                            }`,
                                            children:
                                              P.state === "等待過帳"
                                                ? i("filter.status.pending")
                                                : P.state === "已過帳"
                                                ? i("filter.status.completed")
                                                : P.state,
                                          }),
                                          W
                                            ? c.jsxs("button", {
                                                className:
                                                  "w-[240px] text-lg px-3 py-1 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors duration-200 flex justify-between items-center",
                                                onClick: () => W && hp(P),
                                                style: {
                                                  cursor: W
                                                    ? "pointer"
                                                    : "default",
                                                },
                                                children: [
                                                  i("modal.adjustActualQty"),
                                                  c.jsxs("span", {
                                                    children: [
                                                      P.actualQuantity || "-",
                                                      " / ",
                                                      P.requestedQuantity,
                                                      " ",
                                                      P.packageUnit,
                                                    ],
                                                  }),
                                                ],
                                              })
                                            : c.jsxs("div", {
                                                className:
                                                  "flex items-center gap-3",
                                                children: [
                                                  c.jsxs("span", {
                                                    className:
                                                      "px-3 py-2 text-xl font-bold",
                                                    children: [
                                                      P.actualQuantity || "-",
                                                      " / ",
                                                      P.requestedQuantity,
                                                      " ",
                                                      P.packageUnit,
                                                    ],
                                                  }),
                                                  Ua(P) &&
                                                    c.jsx("button", {
                                                      onClick: () => pp(P),
                                                      disabled: re,
                                                      className:
                                                        "px-3 py-1.5 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors duration-200",
                                                      children: "取消核撥",
                                                    }),
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
                      }),
                    ],
                  },
                  S
                )
              ),
            }),
        c.jsx(Dt, {
          appear: !0,
          show: u,
          as: y.Fragment,
          children: c.jsxs(_t, {
            as: "div",
            className: "relative z-50",
            onClose: () => !w && d(!1),
            children: [
              c.jsx(Dt.Child, {
                as: y.Fragment,
                enter: "ease-out duration-300",
                enterFrom: "opacity-0",
                enterTo: "opacity-100",
                leave: "ease-in duration-200",
                leaveFrom: "opacity-100",
                leaveTo: "opacity-0",
                children: c.jsx("div", {
                  className: "fixed inset-0 bg-black bg-opacity-25",
                }),
              }),
              c.jsx("div", {
                className: "fixed inset-0 overflow-y-auto",
                children: c.jsx("div", {
                  className:
                    "flex min-h-full items-center justify-center p-4 text-center",
                  children: c.jsx(Dt.Child, {
                    as: y.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0 scale-95",
                    enterTo: "opacity-100 scale-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100 scale-100",
                    leaveTo: "opacity-0 scale-95",
                    children: c.jsxs(_t.Panel, {
                      className:
                        "w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all",
                      children: [
                        c.jsx(_t.Title, {
                          as: "h3",
                          className: "text-xl font-bold text-gray-900 mb-6",
                          children: i("modal.enterActualQuantity"),
                        }),
                        s &&
                          c.jsxs("div", {
                            className: "space-y-4",
                            children: [
                              c.jsxs("div", {
                                children: [
                                  c.jsx("label", {
                                    className:
                                      "block text-base font-medium text-gray-700",
                                    children: i("table.drugName"),
                                  }),
                                  c.jsx("div", {
                                    className: "mt-1",
                                    children: c.jsx("div", {
                                      className:
                                        "text-base text-gray-900 break-words",
                                      children: s.name,
                                    }),
                                  }),
                                ],
                              }),
                              c.jsxs("div", {
                                children: [
                                  c.jsx("label", {
                                    className:
                                      "block text-base font-medium text-gray-700",
                                    children: i("table.drugCode"),
                                  }),
                                  c.jsx("div", {
                                    className: "mt-1",
                                    children: c.jsx("div", {
                                      className:
                                        "text-base font-mono text-gray-900 break-all",
                                      children: s.code,
                                    }),
                                  }),
                                ],
                              }),
                              c.jsxs("div", {
                                children: [
                                  c.jsx("label", {
                                    className:
                                      "block text-base font-medium text-gray-700",
                                    children: i("table.requestedQty"),
                                  }),
                                  c.jsx("div", {
                                    className: "mt-1",
                                    children: c.jsx("div", {
                                      className: "text-base text-gray-900",
                                      children: s.requestedQuantity,
                                    }),
                                  }),
                                ],
                              }),
                              c.jsxs("div", {
                                children: [
                                  c.jsx("label", {
                                    className:
                                      "block text-base font-medium text-gray-700",
                                    children: i("modal.actualQuantity"),
                                  }),
                                  c.jsx("input", {
                                    type: "text",
                                    value: p,
                                    readOnly: !0,
                                    className:
                                      "mt-1 w-full px-3 py-2 text-base font-medium tracking-wider border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-gray-900",
                                  }),
                                ],
                              }),
                              c.jsxs("div", {
                                className: "grid grid-cols-4 gap-2",
                                children: [
                                  ["7", "8", "9", "÷"].map((S) =>
                                    c.jsx(
                                      "button",
                                      {
                                        onClick: () =>
                                          S === "÷" ? bo(S) : ko(S),
                                        className: `py-4 text-base font-medium rounded-lg transition-all duration-150 shadow-sm active:scale-95 ${
                                          S === "÷"
                                            ? "bg-blue-50 hover:bg-blue-100 text-blue-600 hover:text-blue-700"
                                            : "bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-gray-900"
                                        }`,
                                        children: S,
                                      },
                                      S
                                    )
                                  ),
                                  ["4", "5", "6", "×"].map((S) =>
                                    c.jsx(
                                      "button",
                                      {
                                        onClick: () =>
                                          S === "×" ? bo(S) : ko(S),
                                        className: `py-4 text-base font-medium rounded-lg transition-all duration-150 shadow-sm active:scale-95 ${
                                          S === "×"
                                            ? "bg-blue-50 hover:bg-blue-100 text-blue-600 hover:text-blue-700"
                                            : "bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-gray-900"
                                        }`,
                                        children: S,
                                      },
                                      S
                                    )
                                  ),
                                  ["1", "2", "3", "-"].map((S) =>
                                    c.jsx(
                                      "button",
                                      {
                                        onClick: () =>
                                          S === "-" ? bo(S) : ko(S),
                                        className: `py-4 text-base font-medium rounded-lg transition-all duration-150 shadow-sm active:scale-95 ${
                                          S === "-"
                                            ? "bg-blue-50 hover:bg-blue-100 text-blue-600 hover:text-blue-700"
                                            : "bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-gray-900"
                                        }`,
                                        children: S,
                                      },
                                      S
                                    )
                                  ),
                                  ["0", ".", "=", "+"].map((S) =>
                                    c.jsx(
                                      "button",
                                      {
                                        onClick: () => {
                                          S === "="
                                            ? Ha()
                                            : S === "+"
                                            ? bo(S)
                                            : ko(S);
                                        },
                                        className: `py-4 text-base font-medium rounded-lg transition-all duration-150 shadow-sm active:scale-95 ${
                                          S === "="
                                            ? "bg-green-500 hover:bg-green-600 text-white"
                                            : S === "+"
                                            ? "bg-blue-50 hover:bg-blue-100 text-blue-600 hover:text-blue-700"
                                            : "bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-gray-900"
                                        }`,
                                        children: S,
                                      },
                                      S
                                    )
                                  ),
                                ],
                              }),
                              x &&
                                c.jsxs("div", {
                                  className:
                                    "p-4 bg-red-100 text-red-700 rounded-md flex items-center gap-2",
                                  children: [
                                    c.jsx(Ps, { size: 20 }),
                                    c.jsx("span", {
                                      className: "text-base",
                                      children: x,
                                    }),
                                  ],
                                }),
                              c.jsxs("div", {
                                className:
                                  "mt-6 flex flex-col sm:flex-row justify-end gap-3",
                                children: [
                                  c.jsx("button", {
                                    type: "button",
                                    onClick: gp,
                                    disabled: w,
                                    className:
                                      "w-full sm:w-auto inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
                                    children: i("button.clear"),
                                  }),
                                  c.jsx("button", {
                                    type: "button",
                                    onClick: () => !w && d(!1),
                                    disabled: w,
                                    className:
                                      "w-full sm:w-auto inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
                                    children: i("button.cancel"),
                                  }),
                                  c.jsx("button", {
                                    type: "button",
                                    onClick: up,
                                    disabled: w,
                                    className: `w-full sm:w-auto inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-base font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed ${
                                      s && V(s.actionType)
                                        ? "bg-red-600 hover:bg-red-700 focus-visible:ring-red-500"
                                        : "bg-blue-600 hover:bg-blue-700 focus-visible:ring-blue-500"
                                    }`,
                                    children: i(
                                      w ? "button.processing" : "button.confirm"
                                    ),
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
        c.jsx(Jv, {
          isOpen: ot,
          onClose: () => {
            vt(!1), Rn(null);
          },
          onConfirm: mp,
          title: "確認取消核撥",
          message: $n ? `確定要取消核撥 "${$n.name}" 嗎？` : "",
          confirmText: "確認取消",
          cancelText: "返回",
          isDestructive: !0,
        }),
      ],
    });
  },
  t1 = ({
    onLogin: e,
    className: t = "",
    title: n = "申領核撥系統",
    logo: r,
  }) => {
    const [o, l] = y.useState(""),
      [i, s] = y.useState(""),
      [a, u] = y.useState(null),
      [d, p] = y.useState(!1),
      g = async (x) => {
        x.preventDefault(), u(null), p(!0);
        try {
          const v = await Yt("/api/session/login", {
            method: "POST",
            body: { Data: { ID: o, Password: i } },
          });
          if (v.Code === 200) {
            if (!cv(v.Data)) {
              u("無撥補建單權限，無法登入");
              return;
            }
            e();
          } else u(v.Result || "登入失敗，請檢查帳號密碼是否正確");
        } catch (v) {
          console.error("Login error:", v),
            u(v instanceof Error ? v.message : "系統錯誤，請稍後再試");
        } finally {
          p(!1);
        }
      };
    return c.jsx("div", {
      className: `min-h-screen bg-gray-100 flex items-center justify-center p-4 ${t}`,
      children: c.jsxs("div", {
        className: "bg-white rounded-lg shadow-md p-8 w-full max-w-md",
        children: [
          r &&
            c.jsx("div", {
              className: "mb-6 flex justify-center",
              children: r,
            }),
          c.jsx("h1", {
            className: "text-2xl font-bold text-center mb-8",
            children: n,
          }),
          a &&
            c.jsxs("div", {
              className:
                "mb-6 p-4 bg-red-100 text-red-700 rounded-md flex items-center gap-2",
              children: [
                c.jsx(Ps, { size: 20 }),
                c.jsx("span", { children: a }),
              ],
            }),
          c.jsxs("form", {
            onSubmit: g,
            className: "space-y-6",
            children: [
              c.jsxs("div", {
                children: [
                  c.jsx("label", {
                    htmlFor: "id",
                    className: "block text-sm font-medium text-gray-700 mb-1",
                    children: "帳號",
                  }),
                  c.jsx("input", {
                    type: "text",
                    id: "id",
                    value: o,
                    onChange: (x) => l(x.target.value),
                    className:
                      "w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                    required: !0,
                  }),
                ],
              }),
              c.jsxs("div", {
                children: [
                  c.jsx("label", {
                    htmlFor: "password",
                    className: "block text-sm font-medium text-gray-700 mb-1",
                    children: "密碼",
                  }),
                  c.jsx("input", {
                    type: "password",
                    id: "password",
                    value: i,
                    onChange: (x) => s(x.target.value),
                    className:
                      "w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                    required: !0,
                  }),
                ],
              }),
              c.jsx("button", {
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
  n1 = () => {
    const { language: e, toggleLanguage: t } = gt();
    return c.jsxs("button", {
      onClick: t,
      className:
        "inline-flex items-center px-2 sm:px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200",
      title: e === "zh" ? "繁體中文" : "English",
      children: [
        c.jsx(r0, { className: "h-4 w-4" }),
        c.jsx("span", {
          className: "ml-2 hidden sm:inline",
          children: e === "zh" ? "繁體中文" : "English",
        }),
      ],
    });
  },
  r1 = ({ title: e }) =>
    c.jsx("h1", {
      className: "text-2xl md:text-3xl font-semibold text-gray-800",
      children: e,
    }),
  o1 = () => {
    const e = Yr();
    return e
      ? c.jsxs("p", {
          className: "text-sm text-gray-600",
          children: [e.Name, " - ", e.Employer],
        })
      : null;
  },
  l1 = ({ onLogout: e }) => {
    const { t } = gt();
    return c.jsxs("button", {
      onClick: e,
      className:
        "inline-flex items-center px-2 sm:px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200",
      title: t("button.logout"),
      children: [
        c.jsx(l0, { className: "h-4 w-4" }),
        c.jsx("span", {
          className: "ml-2 hidden sm:inline",
          children: t("button.logout"),
        }),
      ],
    });
  },
  i1 = () => {
    const { t: e } = gt(),
      t = () => {
        const n = lv();
        n != null &&
          n.homepage &&
          (window.location.href = `${n.homepage}/phar_system/frontpage/`);
      };
    return c.jsxs("button", {
      onClick: t,
      className:
        "p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors group relative",
      title: e("platform.title"),
      children: [
        c.jsx(o0, { size: 24 }),
        c.jsx("span", {
          className:
            "absolute left-1/2 -translate-x-1/2 -bottom-8 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap",
          children: e("platform.title"),
        }),
      ],
    });
  },
  s1 = ({ onLogout: e }) => {
    const { t } = gt();
    return c.jsx("header", {
      className: "bg-white",
      children: c.jsx("div", {
        className: "max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8",
        children: c.jsxs("div", {
          className: "flex justify-between items-center py-6",
          children: [
            c.jsxs("div", {
              className: "flex items-center gap-4",
              children: [
                c.jsx(i1, {}),
                c.jsxs("div", {
                  className: "flex flex-col",
                  children: [
                    c.jsx(r1, { title: t("app.title") }),
                    c.jsx(o1, {}),
                  ],
                }),
              ],
            }),
            c.jsxs("div", {
              className: "flex items-center gap-4",
              children: [
                c.jsx(Xv, {}),
                c.jsx(n1, {}),
                c.jsx(l1, { onLogout: e }),
              ],
            }),
          ],
        }),
      }),
    });
  },
  a1 = ({ className: e = "" }) => {
    const { t } = gt();
    return c.jsx("footer", {
      className: `fixed bottom-0 left-0 w-full bg-white py-2 shadow-inner border-t border-gray-200 z-50 ${e}`,
      children: c.jsx("div", {
        className: "max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8",
        children: c.jsx("p", {
          className: "text-center text-sm text-gray-600",
          children: t("footer.copyright"),
        }),
      }),
    });
  };
function u1() {
  gt();
  const [e, t] = y.useState(!1),
    [n, r] = y.useState(!0),
    [o, l] = y.useState(null),
    [i, s] = y.useState(!1),
    [a, u] = y.useState([]),
    [d, p] = y.useState(() => {
      const k = new Date();
      return k.setHours(0, 0, 0, 0), k;
    }),
    [g, x] = y.useState(() => {
      const k = new Date();
      return k.setHours(23, 59, 59, 999), k;
    }),
    [v, w] = y.useState(!1);
  y.useEffect(() => {
    (async () => {
      try {
        await ov(), s(!0);
        const N = dv();
        t(N);
      } catch (N) {
        console.error("Error during initialization:", N),
          l("系統初始化失敗，請重新整理頁面");
      } finally {
        r(!1);
      }
    })();
  }, []),
    y.useEffect(() => {
      e && i && b();
    }, [e, i]);
  const b = async (k, N) => {
      const C = k || d,
        T = N || g;
      w(!0);
      try {
        console.log("Fetching orders with dates:", {
          startDate: C,
          endDate: T,
          startFormatted: G(C, "yyyy-MM-dd HH:mm:ss"),
          endFormatted: G(T, "yyyy-MM-dd HH:mm:ss"),
        });
        const M = await Yt("/api/materialRequisition/get_by_requestTime", {
          method: "POST",
          body: {
            ValueAry: [
              G(C, "yyyy-MM-dd HH:mm:ss"),
              G(T, "yyyy-MM-dd HH:mm:ss"),
            ],
          },
        });
        u(M.Data), l(null);
      } catch (M) {
        console.error("Error fetching orders:", M),
          l("無法取得申領單資料，請稍後再試"),
          u([]);
      } finally {
        w(!1);
      }
    },
    m = (k, N) => {
      p(k), x(N), b(k, N);
    },
    f = (k) => {
      u(k);
    },
    h = () => {
      Ll(), t(!1);
    };
  return n
    ? c.jsx("div", {
        className: "min-h-screen bg-white flex items-center justify-center",
        children: c.jsxs("div", {
          className: "text-center",
          children: [
            c.jsx("div", {
              className:
                "animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto",
            }),
            c.jsx("p", {
              className: "mt-2 text-base text-gray-600",
              children: "載入中...",
            }),
          ],
        }),
      })
    : e
    ? c.jsxs("div", {
        className: "min-h-screen flex flex-col",
        children: [
          c.jsx(s1, { onLogout: h }),
          c.jsx("main", {
            className: "flex-grow flex flex-col bg-white pb-12",
            children: c.jsx("div", {
              className:
                "w-full max-w-screen-xl mx-auto px-2 md:px-4 lg:px-6 pb-8",
              children: c.jsx(e1, {
                orders: a,
                startDate: d,
                endDate: g,
                onDateChange: m,
                onOrdersUpdate: f,
                isLoading: v,
              }),
            }),
          }),
          c.jsx(a1, {}),
        ],
      })
    : c.jsx(t1, { onLogin: () => t(!0) });
}
Pf(document.getElementById("root")).render(
  c.jsx(y.StrictMode, { children: c.jsx(sv, { children: c.jsx(u1, {}) }) })
);
